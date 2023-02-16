var js=Object.defineProperty;var Bs=(e,t,i)=>t in e?js(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var y=(e,t,i)=>(Bs(e,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=window,qi=be.ShadowRoot&&(be.ShadyCSS===void 0||be.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Br=Symbol(),co=new WeakMap;let Ws=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==Br)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(qi&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=co.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&co.set(i,t))}return t}toString(){return this.cssText}};const qs=e=>new Ws(typeof e=="string"?e:e+"",void 0,Br),Ks=(e,t)=>{qi?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const o=document.createElement("style"),r=be.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)})},uo=qi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return qs(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var We;const Ae=window,po=Ae.trustedTypes,Zs=po?po.emptyScript:"",vo=Ae.reactiveElementPolyfillSupport,Ci={toAttribute(e,t){switch(t){case Boolean:e=e?Zs:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Wr=(e,t)=>t!==e&&(t==t||e==e),qe={attribute:!0,type:String,converter:Ci,reflect:!1,hasChanged:Wr};let Ht=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,o)=>{const r=this._$Ep(o,i);r!==void 0&&(this._$Ev.set(r,o),t.push(r))}),t}static createProperty(t,i=qe){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,i);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){return{get(){return this[i]},set(r){const s=this[t];this[i]=r,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||qe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,o=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const r of o)this.createProperty(r,i[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(uo(r))}else t!==void 0&&i.push(uo(t));return i}static _$Ep(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,o;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ks(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostConnected)===null||o===void 0?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostDisconnected)===null||o===void 0?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EO(t,i,o=qe){var r;const s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){const n=(((r=o.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?o.converter:Ci).toAttribute(i,o.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,i){var o;const r=this.constructor,s=r._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=r.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:Ci;this._$El=s,this[s]=h.fromAttribute(i,n.type),this._$El=null}}requestUpdate(t,i,o){let r=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Wr)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let i=!1;const o=this._$AL;try{i=this.shouldUpdate(o),i?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(o)):this._$Ek()}catch(r){throw i=!1,this._$Ek(),r}i&&this._$AE(o)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(o=>{var r;return(r=o.hostUpdated)===null||r===void 0?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,o)=>this._$EO(o,this[o],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ht.finalized=!0,Ht.elementProperties=new Map,Ht.elementStyles=[],Ht.shadowRootOptions={mode:"open"},vo==null||vo({ReactiveElement:Ht}),((We=Ae.reactiveElementVersions)!==null&&We!==void 0?We:Ae.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ke;const xe=window,_t=xe.trustedTypes,fo=_t?_t.createPolicy("lit-html",{createHTML:e=>e}):void 0,X=`lit$${(Math.random()+"").slice(9)}$`,qr="?"+X,Js=`<${qr}>`,yt=document,ie=(e="")=>yt.createComment(e),oe=e=>e===null||typeof e!="object"&&typeof e!="function",Kr=Array.isArray,Xs=e=>Kr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mo=/-->/g,go=/>/g,tt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bo=/'/g,_o=/"/g,Zr=/^(?:script|style|textarea|title)$/i,Gs=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Jr=Gs(1),wt=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),yo=new WeakMap,pt=yt.createTreeWalker(yt,129,null,!1),Ys=(e,t)=>{const i=e.length-1,o=[];let r,s=t===2?"<svg>":"",n=Dt;for(let a=0;a<i;a++){const l=e[a];let d,c,u=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===Dt?c[1]==="!--"?n=mo:c[1]!==void 0?n=go:c[2]!==void 0?(Zr.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=tt):c[3]!==void 0&&(n=tt):n===tt?c[0]===">"?(n=r??Dt,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?tt:c[3]==='"'?_o:bo):n===_o||n===bo?n=tt:n===mo||n===go?n=Dt:(n=tt,r=void 0);const g=n===tt&&e[a+1].startsWith("/>")?" ":"";s+=n===Dt?l+Js:u>=0?(o.push(d),l.slice(0,u)+"$lit$"+l.slice(u)+X+g):l+X+(u===-2?(o.push(void 0),a):g)}const h=s+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[fo!==void 0?fo.createHTML(h):h,o]};let ki=class Xr{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,d]=Ys(t,i);if(this.el=Xr.createElement(l,o),pt.currentNode=this.el.content,i===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(r=pt.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(X)){const p=d[n++];if(c.push(u),p!==void 0){const g=r.getAttribute(p.toLowerCase()+"$lit$").split(X),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:g,ctor:m[1]==="."?tn:m[1]==="?"?on:m[1]==="@"?rn:Le})}else a.push({type:6,index:s})}for(const u of c)r.removeAttribute(u)}if(Zr.test(r.tagName)){const c=r.textContent.split(X),u=c.length-1;if(u>0){r.textContent=_t?_t.emptyScript:"";for(let p=0;p<u;p++)r.append(c[p],ie()),pt.nextNode(),a.push({type:2,index:++s});r.append(c[u],ie())}}}else if(r.nodeType===8)if(r.data===qr)a.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(X,c+1))!==-1;)a.push({type:7,index:s}),c+=X.length-1}s++}}static createElement(t,i){const o=yt.createElement("template");return o.innerHTML=t,o}};function $t(e,t,i=e,o){var r,s,n,h;if(t===wt)return t;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const l=oe(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,o)),o!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=$t(e,a._$AS(e,t.values),a,o)),t}let Qs=class{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:o},parts:r}=this._$AD,s=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:yt).importNode(o,!0);pt.currentNode=s;let n=pt.nextNode(),h=0,a=0,l=r[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Ki(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new sn(n,this,t)),this.u.push(d),l=r[++a]}h!==(l==null?void 0:l.index)&&(n=pt.nextNode(),h++)}return s}p(t){let i=0;for(const o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}},Ki=class Gr{constructor(t,i,o,r){var s;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cm=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=$t(this,t,i),oe(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==wt&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Xs(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==O&&oe(this._$AH)?this._$AA.nextSibling.data=t:this.T(yt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:o,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ki.createElement(r.h,this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(o);else{const n=new Qs(s,this),h=n.v(this.options);n.p(o),this.T(h),this._$AH=n}}_$AC(t){let i=yo.get(t.strings);return i===void 0&&yo.set(t.strings,i=new ki(t)),i}k(t){Kr(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new Gr(this.O(ie()),this.O(ie()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},Le=class{constructor(t,i,o,r,s){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,o,r){const s=this.strings;let n=!1;if(s===void 0)t=$t(this,t,i,0),n=!oe(t)||t!==this._$AH&&t!==wt,n&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=$t(this,h[o+a],i,a),l===wt&&(l=this._$AH[a]),n||(n=!oe(l)||l!==this._$AH[a]),l===O?t=O:t!==O&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}n&&!r&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},tn=class extends Le{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}};const en=_t?_t.emptyScript:"";let on=class extends Le{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,en):this.element.removeAttribute(this.name)}},rn=class extends Le{constructor(t,i,o,r,s){super(t,i,o,r,s),this.type=5}_$AI(t,i=this){var o;if((t=(o=$t(this,t,i,0))!==null&&o!==void 0?o:O)===wt)return;const r=this._$AH,s=t===O&&r!==O||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==O&&(r===O||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,o;typeof this._$AH=="function"?this._$AH.call((o=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},sn=class{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){$t(this,t)}};const wo=xe.litHtmlPolyfillSupport;wo==null||wo(ki,Ki),((Ke=xe.litHtmlVersions)!==null&&Ke!==void 0?Ke:xe.litHtmlVersions=[]).push("2.6.1");const nn=(e,t,i)=>{var o,r;const s=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:t;let n=s._$litPart$;if(n===void 0){const h=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new Ki(t.insertBefore(ie(),h),h,void 0,i??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=window,Zi=_e.ShadowRoot&&(_e.ShadyCSS===void 0||_e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ji=Symbol(),$o=new WeakMap;let Yr=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==Ji)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Zi&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=$o.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&$o.set(i,t))}return t}toString(){return this.cssText}};const an=e=>new Yr(typeof e=="string"?e:e+"",void 0,Ji),Qr=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new Yr(i,e,Ji)},ln=(e,t)=>{Zi?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const o=document.createElement("style"),r=_e.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)})},So=Zi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return an(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ze;const Ee=window,Ao=Ee.trustedTypes,hn=Ao?Ao.emptyScript:"",xo=Ee.reactiveElementPolyfillSupport,zi={toAttribute(e,t){switch(t){case Boolean:e=e?hn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ts=(e,t)=>t!==e&&(t==t||e==e),Je={attribute:!0,type:String,converter:zi,reflect:!1,hasChanged:ts};let at=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,o)=>{const r=this._$Ep(o,i);r!==void 0&&(this._$Ev.set(r,o),t.push(r))}),t}static createProperty(t,i=Je){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,i);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){return{get(){return this[i]},set(r){const s=this[t];this[i]=r,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Je}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,o=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const r of o)this.createProperty(r,i[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(So(r))}else t!==void 0&&i.push(So(t));return i}static _$Ep(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,o;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ln(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostConnected)===null||o===void 0?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostDisconnected)===null||o===void 0?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EO(t,i,o=Je){var r;const s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){const n=(((r=o.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?o.converter:zi).toAttribute(i,o.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,i){var o;const r=this.constructor,s=r._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=r.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:zi;this._$El=s,this[s]=h.fromAttribute(i,n.type),this._$El=null}}requestUpdate(t,i,o){let r=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||ts)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let i=!1;const o=this._$AL;try{i=this.shouldUpdate(o),i?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(o)):this._$Ek()}catch(r){throw i=!1,this._$Ek(),r}i&&this._$AE(o)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(o=>{var r;return(r=o.hostUpdated)===null||r===void 0?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,o)=>this._$EO(o,this[o],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};at.finalized=!0,at.elementProperties=new Map,at.elementStyles=[],at.shadowRootOptions={mode:"open"},xo==null||xo({ReactiveElement:at}),((Ze=Ee.reactiveElementVersions)!==null&&Ze!==void 0?Ze:Ee.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xe,Ge;let vt=class extends at{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const o=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=o.firstChild),o}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nn(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return wt}};vt.finalized=!0,vt._$litElement$=!0,(Xe=globalThis.litElementHydrateSupport)===null||Xe===void 0||Xe.call(globalThis,{LitElement:vt});const Eo=globalThis.litElementPolyfillSupport;Eo==null||Eo({LitElement:vt});((Ge=globalThis.litElementVersions)!==null&&Ge!==void 0?Ge:globalThis.litElementVersions=[]).push("3.2.2");function Co(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}var It=function(){try{window[H].updateSegments();var e=function(){if(!Ye)return Ye=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){Ye=t,window[H].dispatchEvent(new Event("change"))})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},H="__foldables__",Ye=!1,es=function(){function e(){var o=this;if(window[H]!==void 0)return window[H];var r=document.createDocumentFragment();this.addEventListener=r.addEventListener.bind(r),this.removeEventListener=r.removeEventListener.bind(r),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof o[n]=="function"&&o[n](s),r.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(o,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var h;return function(){var a=arguments,l=this;clearTimeout(h),h=setTimeout(function(){return s.apply(l,a)},n)}}(It(),200)})}var t,i=e.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var r=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,h=r/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:s,left:0,bottom:s+h,right:n,width:n,height:h},s+=o[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var l=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:c,right:c+l,bottom:d,width:l,height:d},c+=o[u].width,c+=this.foldSize;window.visualViewport.segments=o},i.randomizeSegmentsConfiguration=function(o){var r=Math.random()<.5,s=Math.round(Math.random()*(o-1)+1);r?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(H+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(H+"-horizontal-viewport-segments",o),It()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(H+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(H+"-vertical-viewport-segments",o),It()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(H+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(H+"-fold-size",o),It()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(H+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(H+"-browser-shell-size",o),It()}}])&&function(o,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(e.prototype,t),e}();window[H]=new es,window.visualViewport.segments===void 0&&window[H].updateSegments();var is="-viewport-segments",Xi="(\\s*)(@media.*?\\b"+is+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",cn=/\((.*?)\)/gi,dn=/@media[^\(]+/gi,un=/(horizontal-viewport-segments:)\s?(\d)/gi,pn=/(vertical-viewport-segments:)\s?(\d)/gi,vn=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")};function os(e,t){return e.replace(new RegExp(Xi,"gi"),t)}function ko(e,t){var i=e.matchAll(t);return i===null?[]:Array.from(i,function(o){return o[2]})[0]}function rs(e){var t=function(o){var r,s=new RegExp(Xi,"gi");if(typeof o.matchAll=="function")r=Array.from(o.matchAll(s));else{for(r=[];r[r.length]=s.exec(o););r.length--}return r}(e),i=[[]];return t.forEach(function(o){var r=o[1],s=o[2],n=o[3],h=o[4],a=s.match(dn)||[],l=s.match(cn)||[],d=ko(s,pn);d===void 0&&(d=1);var c=ko(s,un);c===void 0&&(c=1),l=l.filter(function(u){return!u.includes(is)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][c]=""+r+a+l+"{"+n+h+"}"}),i}var Ne=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+Ne);var zo,ss=new es;if(!Ne){var Qe=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(zo=Qe,Promise.all(zo.map(function(e){return e.href?fetch(e.href).then(function(t){return t.text()}):e.textContent}))).then(function(e){var t=new DocumentFragment;e.forEach(function(i,o){for(var r,s=os(i,""),n=rs(i),h=Qe[o].href||"inline",a=0,l=Object.entries(n);a<l.length;a++){var d=l[a],c=d[0],u=d[1];Y[c]==null&&(Y[c]=[]);for(var p=0,g=Object.entries(u);p<g.length;p++){var m=g[p];Y[c][m[0]]="/* origin: "+h+" */"+m[1]}}if(h=="inline"||(r=i,new RegExp(Xi,"gi").test(r))){var v=document.createElement("style");v.setAttribute("data-css-origin",h),v.textContent=s,t.appendChild(v)}else{var b=document.createElement("link");b.type="text/css",b.rel="stylesheet",b.href=h,t.appendChild(b)}}),Qe.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(t),Gi()})}var Y=[[]];function ns(e,t){if(Ne)return e;var i=os(e,""),o=rs(e);t&&(Y[t]=[[]]);for(var r=t?Y[t]:Y,s=t?"":"/* origin: inline */",n=0,h=Object.entries(o);n<h.length;n++){var a=h[n],l=a[0],d=a[1];r[l]==null&&(r[l]=[]);for(var c=0,u=Object.entries(d);c<u.length;c++){var p=u[c];r[l][p[0]]=""+s+p[1]}}return r[0][0]=i,i}function Gi(e){Ne||(Po(e),ss.addEventListener("change",function(){return Po(e)}))}function Po(e){var t,i=ss,o=null;(t=e?Y[e.nodeName.toLowerCase()]:Y)[i.verticalViewportSegments]&&(o=t[i.verticalViewportSegments][i.horizontalViewportSegments]);var r,s=t[0][0]?t[0][0]:null;if(o){var n=window.visualViewport.segments,h=!1;n.length>1&&(h=!(n[0].height<window.innerHeight));for(var a=0,l=Object.entries(n);a<l.length;a++)for(var d=l[a],c=d[0],u=0,p=Object.entries(d[1]);u<p.length;u++){var g=p[u],m=g[0];r=g[1]+"px",o=o.replace(vn(h?"viewport-segment-"+m+" "+c+" 0":"viewport-segment-"+m+" 0 "+c),r)}var v="__foldables_sheet__",b=function(k,I){for(var x,S=function(A,fe){var L=typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(L)return(L=L.call(A)).next.bind(L);if(Array.isArray(A)||(L=function(M,Nt){if(M){if(typeof M=="string")return Co(M,Nt);var F=Object.prototype.toString.call(M).slice(8,-1);return F==="Object"&&M.constructor&&(F=M.constructor.name),F==="Map"||F==="Set"?Array.from(M):F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)?Co(M,Nt):void 0}}(A))){L&&(A=L);var Lt=0;return function(){return Lt>=A.length?{done:!0}:{done:!1,value:A[Lt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(k.querySelectorAll("."+v));!(x=S()).done;)x.value.remove();var z=document.createElement("style");z.className=v,z.textContent=I,k===document?document.head.appendChild(z):k.appendChild(z)};if(e){var U=e.shadowRoot;"adoptedStyleSheets"in U&&U.adoptedStyleSheets.length>0?U.adoptedStyleSheets[0].replace(s+o):b(U,o)}else b(document,o)}}var Pi="";function Ui(e){Pi=e}function fn(){if(!Pi){const e=[...document.getElementsByTagName("script")],t=e.find(i=>i.hasAttribute("data-shoelace"));if(t)Ui(t.getAttribute("data-shoelace"));else{const i=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src));let o="";i&&(o=i.getAttribute("src")),Ui(o.split("/").slice(0,-1).join("/"))}}return Pi.replace(/\/$/,"")}var mn={name:"default",resolver:e=>`${fn()}/assets/icons/${e}.svg`},gn=mn,Uo={caret:`
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
  `},bn={name:"system",resolver:e=>e in Uo?`data:image/svg+xml,${encodeURIComponent(Uo[e])}`:""},_n=bn,yn=[gn,_n],Ti=[];function wn(e){Ti.push(e)}function $n(e){Ti=Ti.filter(t=>t!==e)}function To(e){return yn.find(t=>t.name===e)}var ti=new Map;function Sn(e,t="cors"){if(ti.has(e))return ti.get(e);const i=fetch(e,{mode:t}).then(async o=>({ok:o.ok,status:o.status,html:await o.text()}));return ti.set(e,i),i}var ei=new Map;async function An(e){if(ei.has(e))return ei.get(e);const t=await Sn(e),i={ok:t.ok,status:t.status,svg:null};if(t.ok){const o=document.createElement("div");o.innerHTML=t.html;const r=o.firstElementChild;i.svg=(r==null?void 0:r.tagName.toLowerCase())==="svg"?r.outerHTML:""}return ei.set(e,i),i}var ye=window,Yi=ye.ShadowRoot&&(ye.ShadyCSS===void 0||ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qi=Symbol(),Ro=new WeakMap,as=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==Qi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Yi&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=Ro.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ro.set(i,t))}return t}toString(){return this.cssText}},xn=e=>new as(typeof e=="string"?e:e+"",void 0,Qi),Rt=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new as(i,e,Qi)},En=(e,t)=>{Yi?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const o=document.createElement("style"),r=ye.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)})},Oo=Yi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return xn(i)})(e):e,ii,Ce=window,Vo=Ce.trustedTypes,Cn=Vo?Vo.emptyScript:"",Mo=Ce.reactiveElementPolyfillSupport,Ri={toAttribute(e,t){switch(t){case Boolean:e=e?Cn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ls=(e,t)=>t!==e&&(t==t||e==e),oi={attribute:!0,type:String,converter:Ri,reflect:!1,hasChanged:ls},lt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,o)=>{const r=this._$Ep(o,i);r!==void 0&&(this._$Ev.set(r,o),t.push(r))}),t}static createProperty(t,i=oi){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,i);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){return{get(){return this[i]},set(r){const s=this[t];this[i]=r,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||oi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,o=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const r of o)this.createProperty(r,i[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(Oo(r))}else t!==void 0&&i.push(Oo(t));return i}static _$Ep(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,o;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return En(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostConnected)===null||o===void 0?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostDisconnected)===null||o===void 0?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EO(t,i,o=oi){var r;const s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){const n=(((r=o.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?o.converter:Ri).toAttribute(i,o.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,i){var o;const r=this.constructor,s=r._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=r.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:Ri;this._$El=s,this[s]=h.fromAttribute(i,n.type),this._$El=null}}requestUpdate(t,i,o){let r=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||ls)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let i=!1;const o=this._$AL;try{i=this.shouldUpdate(o),i?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(o)):this._$Ek()}catch(r){throw i=!1,this._$Ek(),r}i&&this._$AE(o)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(o=>{var r;return(r=o.hostUpdated)===null||r===void 0?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,o)=>this._$EO(o,this[o],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};lt.finalized=!0,lt.elementProperties=new Map,lt.elementStyles=[],lt.shadowRootOptions={mode:"open"},Mo==null||Mo({ReactiveElement:lt}),((ii=Ce.reactiveElementVersions)!==null&&ii!==void 0?ii:Ce.reactiveElementVersions=[]).push("1.6.1");var ri,ke=window,St=ke.trustedTypes,Lo=St?St.createPolicy("lit-html",{createHTML:e=>e}):void 0,G=`lit$${(Math.random()+"").slice(9)}$`,hs="?"+G,kn=`<${hs}>`,At=document,re=(e="")=>At.createComment(e),se=e=>e===null||typeof e!="object"&&typeof e!="function",cs=Array.isArray,zn=e=>cs(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,No=/-->/g,Ho=/>/g,et=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Do=/'/g,Io=/"/g,ds=/^(?:script|style|textarea|title)$/i,Pn=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),ne=Pn(1),Q=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Fo=new WeakMap,ft=At.createTreeWalker(At,129,null,!1),Un=(e,t)=>{const i=e.length-1,o=[];let r,s=t===2?"<svg>":"",n=Ft;for(let a=0;a<i;a++){const l=e[a];let d,c,u=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===Ft?c[1]==="!--"?n=No:c[1]!==void 0?n=Ho:c[2]!==void 0?(ds.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=et):c[3]!==void 0&&(n=et):n===et?c[0]===">"?(n=r??Ft,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?et:c[3]==='"'?Io:Do):n===Io||n===Do?n=et:n===No||n===Ho?n=Ft:(n=et,r=void 0);const g=n===et&&e[a+1].startsWith("/>")?" ":"";s+=n===Ft?l+kn:u>=0?(o.push(d),l.slice(0,u)+"$lit$"+l.slice(u)+G+g):l+G+(u===-2?(o.push(void 0),a):g)}const h=s+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Lo!==void 0?Lo.createHTML(h):h,o]},ze=class{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,d]=Un(t,i);if(this.el=ze.createElement(l,o),ft.currentNode=this.el.content,i===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(r=ft.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(G)){const p=d[n++];if(c.push(u),p!==void 0){const g=r.getAttribute(p.toLowerCase()+"$lit$").split(G),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:g,ctor:m[1]==="."?Rn:m[1]==="?"?Vn:m[1]==="@"?Mn:De})}else a.push({type:6,index:s})}for(const u of c)r.removeAttribute(u)}if(ds.test(r.tagName)){const c=r.textContent.split(G),u=c.length-1;if(u>0){r.textContent=St?St.emptyScript:"";for(let p=0;p<u;p++)r.append(c[p],re()),ft.nextNode(),a.push({type:2,index:++s});r.append(c[u],re())}}}else if(r.nodeType===8)if(r.data===hs)a.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(G,c+1))!==-1;)a.push({type:7,index:s}),c+=G.length-1}s++}}static createElement(t,i){const o=At.createElement("template");return o.innerHTML=t,o}};function xt(e,t,i=e,o){var r,s,n,h;if(t===Q)return t;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const l=se(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,o)),o!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=xt(e,a._$AS(e,t.values),a,o)),t}var Tn=class{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:o},parts:r}=this._$AD,s=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:At).importNode(o,!0);ft.currentNode=s;let n=ft.nextNode(),h=0,a=0,l=r[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new He(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new Ln(n,this,t)),this.u.push(d),l=r[++a]}h!==(l==null?void 0:l.index)&&(n=ft.nextNode(),h++)}return s}p(t){let i=0;for(const o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}},He=class{constructor(t,i,o,r){var s;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cm=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=xt(this,t,i),se(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==Q&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):zn(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==P&&se(this._$AH)?this._$AA.nextSibling.data=t:this.T(At.createTextNode(t)),this._$AH=t}$(t){var i;const{values:o,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ze.createElement(r.h,this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(o);else{const n=new Tn(s,this),h=n.v(this.options);n.p(o),this.T(h),this._$AH=n}}_$AC(t){let i=Fo.get(t.strings);return i===void 0&&Fo.set(t.strings,i=new ze(t)),i}k(t){cs(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new He(this.O(re()),this.O(re()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},De=class{constructor(e,t,i,o,r){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=xt(this,e,t,0),s=!se(e)||e!==this._$AH&&e!==Q,s&&(this._$AH=e);else{const n=e;let h,a;for(e=r[0],h=0;h<r.length-1;h++)a=xt(this,n[i+h],t,h),a===Q&&(a=this._$AH[h]),s||(s=!se(a)||a!==this._$AH[h]),a===P?e=P:e!==P&&(e+=(a??"")+r[h+1]),this._$AH[h]=a}s&&!o&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Rn=class extends De{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}},On=St?St.emptyScript:"",Vn=class extends De{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,On):this.element.removeAttribute(this.name)}},Mn=class extends De{constructor(t,i,o,r,s){super(t,i,o,r,s),this.type=5}_$AI(t,i=this){var o;if((t=(o=xt(this,t,i,0))!==null&&o!==void 0?o:P)===Q)return;const r=this._$AH,s=t===P&&r!==P||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==P&&(r===P||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,o;typeof this._$AH=="function"?this._$AH.call((o=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},Ln=class{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){xt(this,t)}},jo=ke.litHtmlPolyfillSupport;jo==null||jo(ze,He),((ri=ke.litHtmlVersions)!==null&&ri!==void 0?ri:ke.litHtmlVersions=[]).push("2.6.1");var Nn=(e,t,i)=>{var o,r;const s=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:t;let n=s._$litPart$;if(n===void 0){const h=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new He(t.insertBefore(re(),h),h,void 0,i??{})}return n._$AI(e),n},si,ni,Gt=class extends lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Nn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Q}};Gt.finalized=!0,Gt._$litElement$=!0,(si=globalThis.litElementHydrateSupport)===null||si===void 0||si.call(globalThis,{LitElement:Gt});var Bo=globalThis.litElementPolyfillSupport;Bo==null||Bo({LitElement:Gt});((ni=globalThis.litElementVersions)!==null&&ni!==void 0?ni:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var ue=Rt`
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
`,Hn=Rt`
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
`,us=Object.defineProperty,Dn=Object.defineProperties,In=Object.getOwnPropertyDescriptor,Fn=Object.getOwnPropertyDescriptors,Wo=Object.getOwnPropertySymbols,jn=Object.prototype.hasOwnProperty,Bn=Object.prototype.propertyIsEnumerable,qo=(e,t,i)=>t in e?us(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,rt=(e,t)=>{for(var i in t||(t={}))jn.call(t,i)&&qo(e,i,t[i]);if(Wo)for(var i of Wo(t))Bn.call(t,i)&&qo(e,i,t[i]);return e},Ie=(e,t)=>Dn(e,Fn(t)),f=(e,t,i,o)=>{for(var r=o>1?void 0:o?In(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&us(t,i,r),r};function pe(e,t){const i=rt({waitUntilFirstUpdate:!1},t);return(o,r)=>{const{update:s}=o,n=Array.isArray(e)?e:[e];o.update=function(h){n.forEach(a=>{const l=a;if(h.has(l)){const d=h.get(l),c=this[l];d!==c&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](d,c)}}),s.call(this,h)}}}var ps={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vs=e=>(...t)=>({_$litDirective$:e,values:t}),fs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var ve=e=>t=>typeof t=="function"?((i,o)=>(customElements.define(i,o),o))(e,t):((i,o)=>{const{kind:r,elements:s}=o;return{kind:r,elements:s,finisher(n){customElements.define(i,n)}}})(e,t),Wn=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Ie(rt({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function w(e){return(t,i)=>i!==void 0?((o,r,s)=>{r.constructor.createProperty(s,o)})(e,t,i):Wn(e,t)}function Fe(e){return w(Ie(rt({},e),{state:!0}))}var qn=({finisher:e,descriptor:t})=>(i,o)=>{var r;if(o===void 0){const s=(r=i.originalKey)!==null&&r!==void 0?r:i.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:Ie(rt({},i),{key:s});return e!=null&&(n.finisher=function(h){e(h,s)}),n}{const s=i.constructor;t!==void 0&&Object.defineProperty(i,o,t(o)),e==null||e(s,o)}};function to(e,t){return qn({descriptor:i=>{const o={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const r=typeof i=="symbol"?Symbol():"__"+i;o.get=function(){var s,n;return this[r]===void 0&&(this[r]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[r]}}return o}})}var ai;((ai=window.HTMLSlotElement)===null||ai===void 0?void 0:ai.prototype.assignedElements)!=null;var st=class extends Gt{emit(e,t){const i=new CustomEvent(e,rt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}};f([w()],st.prototype,"dir",2);f([w()],st.prototype,"lang",2);/*! Bundled license information:

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
*/var Oi=class extends fs{constructor(e){if(super(e),this.it=P,e.type!==ps.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===P||e==null)return this._t=void 0,this.it=e;if(e===Q)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Oi.directiveName="unsafeHTML",Oi.resultType=1;var Vi=class extends Oi{};Vi.directiveName="unsafeSVG",Vi.resultType=2;var Kn=vs(Vi),li,W=class extends st{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),wn(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),$n(this)}getUrl(){const e=To(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=To(this.library),i=this.getUrl();if(li||(li=new DOMParser),i)try{const o=await An(i);if(i!==this.getUrl())return;if(o.ok){const s=li.parseFromString(o.svg,"text/html").body.querySelector("svg");s!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,s),this.svg=s.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}render(){return ne` ${Kn(this.svg)} `}};W.styles=Hn;f([Fe()],W.prototype,"svg",2);f([w({reflect:!0})],W.prototype,"name",2);f([w()],W.prototype,"src",2);f([w()],W.prototype,"label",2);f([w({reflect:!0})],W.prototype,"library",2);f([pe("label")],W.prototype,"handleLabelChange",1);f([pe(["name","src","library"])],W.prototype,"setIcon",1);W=f([ve("sl-icon")],W);/*! Bundled license information:

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
*/function Ko(e,t){return new Promise(i=>{function o(r){r.target===e&&(e.removeEventListener(t,o),i())}e.addEventListener(t,o)})}function Zo(e,t,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,Ie(rt({},i),{duration:Zn()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function Zn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Jo(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{const o=requestAnimationFrame(i);t.addEventListener("cancel",()=>o,{once:!0}),t.addEventListener("finish",()=>o,{once:!0}),t.cancel()})))}var ms=new Map,Jn=new WeakMap;function Xn(e){return e??{keyframes:[],options:{duration:0}}}function Xo(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function gs(e,t){ms.set(e,Xn(t))}function Go(e,t,i){const o=Jn.get(e);if(o!=null&&o[t])return Xo(o[t],i.dir);const r=ms.get(t);return r?Xo(r,i.dir):{keyframes:[],options:{duration:0}}}var Mi=new Set,Gn=new MutationObserver(ys),dt=new Map,bs=document.documentElement.dir||"ltr",_s=document.documentElement.lang||navigator.language,Yt;Gn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Yn(...e){e.map(t=>{const i=t.$code.toLowerCase();dt.has(i)?dt.set(i,Object.assign(Object.assign({},dt.get(i)),t)):dt.set(i,t),Yt||(Yt=t)}),ys()}function ys(){bs=document.documentElement.dir||"ltr",_s=document.documentElement.lang||navigator.language,[...Mi.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Qn=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Mi.add(this.host)}hostDisconnected(){Mi.delete(this.host)}dir(){return`${this.host.dir||bs}`.toLowerCase()}lang(){return`${this.host.lang||_s}`.toLowerCase()}term(e,...t){var i,o;const r=new Intl.Locale(this.lang()),s=r==null?void 0:r.language.toLowerCase(),n=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",h=dt.get(`${s}-${n}`),a=dt.get(s);let l;if(h&&h[e])l=h[e];else if(a&&a[e])l=a[e];else if(Yt&&Yt[e])l=Yt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof l=="function"?l(...t):l}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}},eo=class extends Qn{},ta={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Yn(ta);var ws=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},ea=Rt`
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
`,io=vs(class extends fs{constructor(e){var t;if(super(e),e.type!==ps.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,o;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.nt.add(s);return this.render(t)}const r=e.element.classList;this.nt.forEach(s=>{s in t||(r.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((o=this.st)===null||o===void 0)&&o.has(s)||(n?(r.add(s),this.nt.add(s)):(r.remove(s),this.nt.delete(s)))}return Q}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var nt=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),q=class extends st{constructor(){super(...arguments),this.hasSlotController=new ws(this,"icon","suffix"),this.localize=new eo(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Jo(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=Go(this,"alert.show",{dir:this.localize.dir()});await Zo(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Jo(this.base);const{keyframes:e,options:t}=Go(this,"alert.hide",{dir:this.localize.dir()});await Zo(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Ko(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ko(this,"sl-after-hide")}async toast(){return new Promise(e=>{nt.parentElement===null&&document.body.append(nt),nt.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{nt.removeChild(this),e(),nt.querySelector("sl-alert")===null&&nt.remove()},{once:!0})})}render(){return ne`
      <div
        part="base"
        class=${io({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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
    `}};q.styles=ea;f([to('[part~="base"]')],q.prototype,"base",2);f([w({type:Boolean,reflect:!0})],q.prototype,"open",2);f([w({type:Boolean,reflect:!0})],q.prototype,"closable",2);f([w({reflect:!0})],q.prototype,"variant",2);f([w({type:Number})],q.prototype,"duration",2);f([pe("open",{waitUntilFirstUpdate:!0})],q.prototype,"handleOpenChange",1);f([pe("duration")],q.prototype,"handleDurationChange",1);q=f([ve("sl-alert")],q);gs("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});gs("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var ia=Rt`
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
`,$s=Symbol.for(""),oa=e=>{if((e==null?void 0:e.r)===$s)return e==null?void 0:e._$litStatic$},Pe=(e,...t)=>({_$litStatic$:t.reduce((i,o,r)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[r+1],e[0]),r:$s}),Yo=new Map,ra=e=>(t,...i)=>{const o=i.length;let r,s;const n=[],h=[];let a,l=0,d=!1;for(;l<o;){for(a=t[l];l<o&&(s=i[l],(r=oa(s))!==void 0);)a+=r+t[++l],d=!0;h.push(s),n.push(a),l++}if(l===o&&n.push(t[o]),d){const c=n.join("$$lit$$");(t=Yo.get(c))===void 0&&(n.raw=n,Yo.set(c,t=n)),i=h}return e(t,...i)},we=ra(ne);/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var R=e=>e??P;/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var j=class extends st{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Pe`a`:Pe`button`;return we`
      <${t}
        part="base"
        class=${io({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${R(e?void 0:this.disabled)}
        type=${R(e?void 0:"button")}
        href=${R(e?this.href:void 0)}
        target=${R(e?this.target:void 0)}
        download=${R(e?this.download:void 0)}
        rel=${R(e&&this.target?"noreferrer noopener":void 0)}
        role=${R(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${R(this.name)}
          library=${R(this.library)}
          src=${R(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};j.styles=ia;f([to(".icon-button")],j.prototype,"button",2);f([Fe()],j.prototype,"hasFocus",2);f([w()],j.prototype,"name",2);f([w()],j.prototype,"library",2);f([w()],j.prototype,"src",2);f([w()],j.prototype,"href",2);f([w()],j.prototype,"target",2);f([w()],j.prototype,"download",2);f([w()],j.prototype,"label",2);f([w({type:Boolean,reflect:!0})],j.prototype,"disabled",2);j=f([ve("sl-icon-button")],j);var jt=new WeakMap,Qo=new WeakMap,Bt=new WeakMap,sa=class{constructor(e,t){(this.host=e).addController(this),this.options=rt({form:i=>{if(i.hasAttribute("form")&&i.getAttribute("form")!==""){const o=i.getRootNode(),r=i.getAttribute("form");if(r)return o.getElementById(r)}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null?o:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,setValue:(i,o)=>i.value=o},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(e){e?(this.form=e,jt.has(this.form)?jt.get(this.form).add(this.host):jt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Bt.has(this.form)||(Bt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=jt.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Bt.has(this.form)&&(this.form.reportValidity=Bt.get(this.form),Bt.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="sl-button";!t&&!r&&typeof i=="string"&&i.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(s=>{e.formData.append(i,s.toString())}):e.formData.append(i,o.toString()))}handleFormSubmit(e){var t;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=jt.get(this.form))==null||t.forEach(r=>{this.setUserInteracted(r,!0)})),this.form&&!this.form.noValidate&&!i&&!o(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){Qo.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&i.setAttribute(o,t.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){var t;const i=this.host,o=Boolean(Qo.get(i)),r=Boolean(i.required);(t=this.form)!=null&&t.noValidate?(i.removeAttribute("data-required"),i.removeAttribute("data-optional"),i.removeAttribute("data-invalid"),i.removeAttribute("data-valid"),i.removeAttribute("data-user-invalid"),i.removeAttribute("data-user-valid")):(i.toggleAttribute("data-required",r),i.toggleAttribute("data-optional",!r),i.toggleAttribute("data-invalid",!e),i.toggleAttribute("data-valid",e),i.toggleAttribute("data-user-invalid",!e&&o),i.toggleAttribute("data-user-valid",e&&o))}updateValidity(){const e=this.host;this.setValidity(e.checkValidity())}},na=Rt`
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
`,$=class extends st{constructor(){super(...arguments),this.formControlController=new sa(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),i=e.getAttribute("form");return t.getElementById(i)}return e.closest("form")}}),this.hasSlotController=new ws(this,"[default]","prefix","suffix"),this.localize=new eo(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Pe`a`:Pe`button`;return we`
      <${t}
        part="base"
        class=${io({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${R(e?void 0:this.disabled)}
        type=${R(e?void 0:this.type)}
        title=${this.title}
        name=${R(e?void 0:this.name)}
        value=${R(e?void 0:this.value)}
        href=${R(e?this.href:void 0)}
        target=${R(e?this.target:void 0)}
        download=${R(e?this.download:void 0)}
        rel=${R(e&&this.target?"noreferrer noopener":void 0)}
        role=${R(e?void 0:"button")}
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
    `}};$.styles=na;f([to(".button")],$.prototype,"button",2);f([Fe()],$.prototype,"hasFocus",2);f([Fe()],$.prototype,"invalid",2);f([w()],$.prototype,"title",2);f([w({reflect:!0})],$.prototype,"variant",2);f([w({reflect:!0})],$.prototype,"size",2);f([w({type:Boolean,reflect:!0})],$.prototype,"caret",2);f([w({type:Boolean,reflect:!0})],$.prototype,"disabled",2);f([w({type:Boolean,reflect:!0})],$.prototype,"loading",2);f([w({type:Boolean,reflect:!0})],$.prototype,"outline",2);f([w({type:Boolean,reflect:!0})],$.prototype,"pill",2);f([w({type:Boolean,reflect:!0})],$.prototype,"circle",2);f([w()],$.prototype,"type",2);f([w()],$.prototype,"name",2);f([w()],$.prototype,"value",2);f([w()],$.prototype,"href",2);f([w()],$.prototype,"target",2);f([w()],$.prototype,"download",2);f([w()],$.prototype,"form",2);f([w({attribute:"formaction"})],$.prototype,"formAction",2);f([w({attribute:"formenctype"})],$.prototype,"formEnctype",2);f([w({attribute:"formmethod"})],$.prototype,"formMethod",2);f([w({attribute:"formnovalidate",type:Boolean})],$.prototype,"formNoValidate",2);f([w({attribute:"formtarget"})],$.prototype,"formTarget",2);f([pe("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);$=f([ve("sl-button")],$);var aa=Rt`
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
`,Li=class extends st{constructor(){super(...arguments),this.localize=new eo(this)}render(){return ne`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Li.styles=aa;Li=f([ve("sl-spinner")],Li);const la=(e,...t)=>{const i=ns(e[0],"news-article");return Qr([i],...t)};class Ss extends vt{static get properties(){return{picturePosition:{type:String,reflectToAttribute:!0,attribute:!0}}}set picturePosition(t){let i=this._picturePosition;this._picturePosition=t,(window.matchMedia("(min-width: 320px) and (max-width: 1024px)").matches||!1)&&(this._picturePosition="top"),this.requestUpdate("picturePosition",i),this._text&&this._togglePicturePosition()}get picturePosition(){return this._picturePosition}constructor(){super(),this._picturePosition="top"}firstUpdated(){this._text=this.shadowRoot.querySelector("#text"),this._content=this.shadowRoot.querySelector("#content"),this._togglePicturePosition()}_togglePicturePosition(){switch(this._picturePosition){case"left":this._text.classList.add("large-text"),this._content.style.flexDirection="row";break;case"right":this._text.classList.add("large-text"),this._content.style.flexDirection="row-reverse";break;case"top":this._text.classList.remove("large-text"),this._content.style.flexDirection="column";break;case"bottom":this._text.classList.remove("large-text"),this._content.style.flexDirection="column-reverse";break}}connectedCallback(){super.connectedCallback(),Gi(this)}render(){return Jr`
      <div class="item">
        <div class="article-title">
          <slot name="title"></slot>
        </div>
        <div class="author">
          <slot name="author"></slot>
        </div>
        <div class="article-content" id="content">
          <div class="picture-container">
            <slot name="news-picture"></slot>
          </div>
          <div class="text" id="text">
            <slot name="text"></slot>
          </div>
        </div>
      </div>
    `}}y(Ss,"styles",la`
    .item {
      min-height: 200px;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-family: 'Open Sans', sans-serif;
      padding: 10px;
    }

    .article-title {
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 5px;
      text-align: center;
      font-family: 'Cinzel', serif;
      font-size: 24px;
    }

    .author {
      font-style: italic;
      margin-bottom: 10px;
    }

    .author:before {
      border-top: 2px solid black;
      width: 100%;
      content: '';
      height: 7px;
      display: block;
    }

    .author:after {
      border-bottom: 2px solid black;
      width: 100%;
      content: '';
      display: block;
      height: 7px;
    }

    .picture-container {
      width: 80%;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
    }

    .text {
      padding: 15px;
    }

    .article-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .large-text {
      width: 70%;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      .article-title {
        font-size: 1.2em;
      }
    }

  `);customElements.define("news-article",Ss);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=window,oo=$e.ShadowRoot&&($e.ShadyCSS===void 0||$e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ro=Symbol(),tr=new WeakMap;let As=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==ro)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(oo&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=tr.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&tr.set(i,t))}return t}toString(){return this.cssText}};const xs=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new As(i,e,ro)},er=oo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return(o=>new As(typeof o=="string"?o:o+"",void 0,ro))(i)})(e):e;var hi;const Ue=window,ir=Ue.trustedTypes,ha=ir?ir.emptyScript:"",or=Ue.reactiveElementPolyfillSupport,Ni={toAttribute(e,t){switch(t){case Boolean:e=e?ha:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Es=(e,t)=>t!==e&&(t==t||e==e),ci={attribute:!0,type:String,converter:Ni,reflect:!1,hasChanged:Es};let ht=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=ci){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ci}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(er(o))}else e!==void 0&&t.push(er(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{oo?i.adoptedStyleSheets=o.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):o.forEach(r=>{const s=document.createElement("style"),n=$e.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,i.appendChild(s)})})(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=ci){var o;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Ni).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,r=o._$Ev.get(e);if(r!==void 0&&this._$El!==r){const s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:Ni;this._$El=r,this[r]=n.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Es)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var di;ht.finalized=!0,ht.elementProperties=new Map,ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},or==null||or({ReactiveElement:ht}),((hi=Ue.reactiveElementVersions)!==null&&hi!==void 0?hi:Ue.reactiveElementVersions=[]).push("1.6.1");const Te=window,Et=Te.trustedTypes,rr=Et?Et.createPolicy("lit-html",{createHTML:e=>e}):void 0,Z=`lit$${(Math.random()+"").slice(9)}$`,Cs="?"+Z,ca=`<${Cs}>`,Ct=document,ae=(e="")=>Ct.createComment(e),le=e=>e===null||typeof e!="object"&&typeof e!="function",sr=Array.isArray,Wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nr=/-->/g,ar=/>/g,it=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lr=/'/g,hr=/"/g,cr=/^(?:script|style|textarea|title)$/i,Ot=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),kt=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),dr=new WeakMap,mt=Ct.createTreeWalker(Ct,129,null,!1);let Hi=class ks{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,d]=((c,u)=>{const p=c.length-1,g=[];let m,v=u===2?"<svg>":"",b=Wt;for(let k=0;k<p;k++){const I=c[k];let x,S,z=-1,A=0;for(;A<I.length&&(b.lastIndex=A,S=b.exec(I),S!==null);)A=b.lastIndex,b===Wt?S[1]==="!--"?b=nr:S[1]!==void 0?b=ar:S[2]!==void 0?(cr.test(S[2])&&(m=RegExp("</"+S[2],"g")),b=it):S[3]!==void 0&&(b=it):b===it?S[0]===">"?(b=m??Wt,z=-1):S[1]===void 0?z=-2:(z=b.lastIndex-S[2].length,x=S[1],b=S[3]===void 0?it:S[3]==='"'?hr:lr):b===hr||b===lr?b=it:b===nr||b===ar?b=Wt:(b=it,m=void 0);const fe=b===it&&c[k+1].startsWith("/>")?" ":"";v+=b===Wt?I+ca:z>=0?(g.push(x),I.slice(0,z)+"$lit$"+I.slice(z)+Z+fe):I+Z+(z===-2?(g.push(void 0),k):fe)}const U=v+(c[p]||"<?>")+(u===2?"</svg>":"");if(!Array.isArray(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return[rr!==void 0?rr.createHTML(U):U,g]})(t,i);if(this.el=ks.createElement(l,o),mt.currentNode=this.el.content,i===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(r=mt.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(Z)){const p=d[n++];if(c.push(u),p!==void 0){const g=r.getAttribute(p.toLowerCase()+"$lit$").split(Z),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:g,ctor:m[1]==="."?da:m[1]==="?"?pa:m[1]==="@"?va:je})}else a.push({type:6,index:s})}for(const u of c)r.removeAttribute(u)}if(cr.test(r.tagName)){const c=r.textContent.split(Z),u=c.length-1;if(u>0){r.textContent=Et?Et.emptyScript:"";for(let p=0;p<u;p++)r.append(c[p],ae()),mt.nextNode(),a.push({type:2,index:++s});r.append(c[u],ae())}}}else if(r.nodeType===8)if(r.data===Cs)a.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(Z,c+1))!==-1;)a.push({type:7,index:s}),c+=Z.length-1}s++}}static createElement(t,i){const o=Ct.createElement("template");return o.innerHTML=t,o}};function zt(e,t,i=e,o){var r,s,n,h;if(t===kt)return t;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const l=le(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,o)),o!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=zt(e,a._$AS(e,t.values),a,o)),t}let so=class zs{constructor(t,i,o,r){var s;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cm=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=zt(this,t,i),le(t)?t===V||t==null||t===""?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==kt&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(o=>sr(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function")(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==V&&le(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ct.createTextNode(t)),this._$AH=t}$(t){var i;const{values:o,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Hi.createElement(r.h,this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(o);else{const n=new class{constructor(a,l){this.u=[],this._$AN=void 0,this._$AD=a,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(a){var l;const{el:{content:d},parts:c}=this._$AD,u=((l=a==null?void 0:a.creationScope)!==null&&l!==void 0?l:Ct).importNode(d,!0);mt.currentNode=u;let p=mt.nextNode(),g=0,m=0,v=c[0];for(;v!==void 0;){if(g===v.index){let b;v.type===2?b=new so(p,p.nextSibling,this,a):v.type===1?b=new v.ctor(p,v.name,v.strings,this,a):v.type===6&&(b=new fa(p,this,a)),this.u.push(b),v=c[++m]}g!==(v==null?void 0:v.index)&&(p=mt.nextNode(),g++)}return u}p(a){let l=0;for(const d of this.u)d!==void 0&&(d.strings!==void 0?(d._$AI(a,d,l),l+=d.strings.length-2):d._$AI(a[l])),l++}}(s,this),h=n.v(this.options);n.p(o),this.T(h),this._$AH=n}}_$AC(t){let i=dr.get(t.strings);return i===void 0&&dr.set(t.strings,i=new Hi(t)),i}k(t){sr(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new zs(this.O(ae()),this.O(ae()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},je=class{constructor(e,t,i,o,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=zt(this,e,t,0),s=!le(e)||e!==this._$AH&&e!==kt,s&&(this._$AH=e);else{const n=e;let h,a;for(e=r[0],h=0;h<r.length-1;h++)a=zt(this,n[i+h],t,h),a===kt&&(a=this._$AH[h]),s||(s=!le(a)||a!==this._$AH[h]),a===V?e=V:e!==V&&(e+=(a??"")+r[h+1]),this._$AH[h]=a}s&&!o&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},da=class extends je{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}};const ua=Et?Et.emptyScript:"";let pa=class extends je{constructor(){super(...arguments),this.type=4}j(e){e&&e!==V?this.element.setAttribute(this.name,ua):this.element.removeAttribute(this.name)}},va=class extends je{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=zt(this,e,t,0))!==null&&i!==void 0?i:V)===kt)return;const o=this._$AH,r=e===V&&o!==V||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==V&&(o===V||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},fa=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){zt(this,e)}};const ur=Te.litHtmlPolyfillSupport;ur==null||ur(Hi,so),((di=Te.litHtmlVersions)!==null&&di!==void 0?di:Te.litHtmlVersions=[]).push("2.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ui,pi;let gt=class extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((i,o,r)=>{var s,n;const h=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:o;let a=h._$litPart$;if(a===void 0){const l=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;h._$litPart$=a=new so(o.insertBefore(ae(),l),l,void 0,r??{})}return a._$AI(i),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return kt}};gt.finalized=!0,gt._$litElement$=!0,(ui=globalThis.litElementHydrateSupport)===null||ui===void 0||ui.call(globalThis,{LitElement:gt});const pr=globalThis.litElementPolyfillSupport;pr==null||pr({LitElement:gt}),((pi=globalThis.litElementVersions)!==null&&pi!==void 0?pi:globalThis.litElementVersions=[]).push("3.2.2");var vi,fi,Se=window,no=Se.ShadowRoot&&(Se.ShadyCSS===void 0||Se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ao=Symbol(),vr=new WeakMap,Ps=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ao)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(no&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=vr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&vr.set(t,e))}return e}toString(){return this.cssText}},mi=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new Ps(i,e,ao)},fr=no?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return(o=>new Ps(typeof o=="string"?o:o+"",void 0,ao))(i)})(e):e,Re=window,mr=Re.trustedTypes,ma=mr?mr.emptyScript:"",gr=Re.reactiveElementPolyfillSupport,he={toAttribute(e,t){switch(t){case Boolean:e=e?ma:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Us=(e,t)=>t!==e&&(t==t||e==e),gi={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:Us},ct=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=gi){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||gi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(fr(o))}else e!==void 0&&t.push(fr(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{no?i.adoptedStyleSheets=o.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):o.forEach(r=>{const s=document.createElement("style"),n=Se.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,i.appendChild(s)})})(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=gi){var o;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:he).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,r=o._$Ev.get(e);if(r!==void 0&&this._$El!==r){const s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:he;this._$El=r,this[r]=n.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Us)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ct.finalized=!0,ct.elementProperties=new Map,ct.elementStyles=[],ct.shadowRootOptions={mode:"open"},gr==null||gr({ReactiveElement:ct}),((vi=Re.reactiveElementVersions)!==null&&vi!==void 0?vi:Re.reactiveElementVersions=[]).push("1.6.1");var br,Oe=window,Pt=Oe.trustedTypes,_r=Pt?Pt.createPolicy("lit-html",{createHTML:e=>e}):void 0,J=`lit$${(Math.random()+"").slice(9)}$`,Ts="?"+J,ga=`<${Ts}>`,Ut=document,ce=(e="")=>Ut.createComment(e),de=e=>e===null||typeof e!="object"&&typeof e!="function",yr=Array.isArray,qt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wr=/-->/g,$r=/>/g,ot=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sr=/'/g,Ar=/"/g,xr=/^(?:script|style|textarea|title)$/i,Er=(br=1,(e,...t)=>({_$litType$:br,strings:e,values:t})),B=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Cr=new WeakMap,bt=Ut.createTreeWalker(Ut,129,null,!1),Ve=class{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0;const n=e.length-1,h=this.parts,[a,l]=((d,c)=>{const u=d.length-1,p=[];let g,m=c===2?"<svg>":"",v=qt;for(let U=0;U<u;U++){const k=d[U];let I,x,S=-1,z=0;for(;z<k.length&&(v.lastIndex=z,x=v.exec(k),x!==null);)z=v.lastIndex,v===qt?x[1]==="!--"?v=wr:x[1]!==void 0?v=$r:x[2]!==void 0?(xr.test(x[2])&&(g=RegExp("</"+x[2],"g")),v=ot):x[3]!==void 0&&(v=ot):v===ot?x[0]===">"?(v=g??qt,S=-1):x[1]===void 0?S=-2:(S=v.lastIndex-x[2].length,I=x[1],v=x[3]===void 0?ot:x[3]==='"'?Ar:Sr):v===Ar||v===Sr?v=ot:v===wr||v===$r?v=qt:(v=ot,g=void 0);const A=v===ot&&d[U+1].startsWith("/>")?" ":"";m+=v===qt?k+ga:S>=0?(p.push(I),k.slice(0,S)+"$lit$"+k.slice(S)+J+A):k+J+(S===-2?(p.push(void 0),U):A)}const b=m+(d[u]||"<?>")+(c===2?"</svg>":"");if(!Array.isArray(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return[_r!==void 0?_r.createHTML(b):b,p]})(e,t);if(this.el=Ve.createElement(a,i),bt.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(o=bt.nextNode())!==null&&h.length<n;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const c of o.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(J)){const u=l[s++];if(d.push(c),u!==void 0){const p=o.getAttribute(u.toLowerCase()+"$lit$").split(J),g=/([.?@])?(.*)/.exec(u);h.push({type:1,index:r,name:g[2],strings:p,ctor:g[1]==="."?ba:g[1]==="?"?ya:g[1]==="@"?wa:Be})}else h.push({type:6,index:r})}for(const c of d)o.removeAttribute(c)}if(xr.test(o.tagName)){const d=o.textContent.split(J),c=d.length-1;if(c>0){o.textContent=Pt?Pt.emptyScript:"";for(let u=0;u<c;u++)o.append(d[u],ce()),bt.nextNode(),h.push({type:2,index:++r});o.append(d[c],ce())}}}else if(o.nodeType===8)if(o.data===Ts)h.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(J,d+1))!==-1;)h.push({type:7,index:r}),d+=J.length-1}r++}}static createElement(e,t){const i=Ut.createElement("template");return i.innerHTML=e,i}};function Tt(e,t,i=e,o){var r,s,n,h;if(t===B)return t;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const l=de(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,o)),o!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=Tt(e,a._$AS(e,t.values),a,o)),t}var Me=class{constructor(e,t,i,o){var r;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cm=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Tt(this,e,t),de(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==B&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):(i=>yr(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function")(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==T&&de(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ut.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ve.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const s=new class{constructor(h,a){this.u=[],this._$AN=void 0,this._$AD=h,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(h){var a;const{el:{content:l},parts:d}=this._$AD,c=((a=h==null?void 0:h.creationScope)!==null&&a!==void 0?a:Ut).importNode(l,!0);bt.currentNode=c;let u=bt.nextNode(),p=0,g=0,m=d[0];for(;m!==void 0;){if(p===m.index){let v;m.type===2?v=new Me(u,u.nextSibling,this,h):m.type===1?v=new m.ctor(u,m.name,m.strings,this,h):m.type===6&&(v=new $a(u,this,h)),this.u.push(v),m=d[++g]}p!==(m==null?void 0:m.index)&&(u=bt.nextNode(),p++)}return c}p(h){let a=0;for(const l of this.u)l!==void 0&&(l.strings!==void 0?(l._$AI(h,l,a),a+=l.strings.length-2):l._$AI(h[a])),a++}}(r,this),n=s.v(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(e){let t=Cr.get(e.strings);return t===void 0&&Cr.set(e.strings,t=new Ve(e)),t}k(e){yr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new Me(this.O(ce()),this.O(ce()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Be=class{constructor(e,t,i,o,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=Tt(this,e,t,0),s=!de(e)||e!==this._$AH&&e!==B,s&&(this._$AH=e);else{const n=e;let h,a;for(e=r[0],h=0;h<r.length-1;h++)a=Tt(this,n[i+h],t,h),a===B&&(a=this._$AH[h]),s||(s=!de(a)||a!==this._$AH[h]),a===T?e=T:e!==T&&(e+=(a??"")+r[h+1]),this._$AH[h]=a}s&&!o&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ba=class extends Be{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},_a=Pt?Pt.emptyScript:"",ya=class extends Be{constructor(){super(...arguments),this.type=4}j(e){e&&e!==T?this.element.setAttribute(this.name,_a):this.element.removeAttribute(this.name)}},wa=class extends Be{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Tt(this,e,t,0))!==null&&i!==void 0?i:T)===B)return;const o=this._$AH,r=e===T&&o!==T||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==T&&(o===T||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},$a=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Tt(this,e)}},kr=Oe.litHtmlPolyfillSupport;kr==null||kr(Ve,Me),((fi=Oe.litHtmlVersions)!==null&&fi!==void 0?fi:Oe.litHtmlVersions=[]).push("2.6.1");var bi,_i,Qt=class extends ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((i,o,r)=>{var s,n;const h=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:o;let a=h._$litPart$;if(a===void 0){const l=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;h._$litPart$=a=new Me(o.insertBefore(ce(),l),l,void 0,r??{})}return a._$AI(i),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return B}};Qt.finalized=!0,Qt._$litElement$=!0,(bi=globalThis.litElementHydrateSupport)===null||bi===void 0||bi.call(globalThis,{LitElement:Qt});var zr=globalThis.litElementPolyfillSupport;zr==null||zr({LitElement:Qt}),((_i=globalThis.litElementVersions)!==null&&_i!==void 0?_i:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var te,Sa=mi`
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
`,Di=1,Pr=3,Ur=4,Rs=e=>(...t)=>({_$litDirective$:e,values:t}),Os=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Aa={},xa=Rs(class extends Os{constructor(e){if(super(e),e.type!==Pr&&e.type!==Di&&e.type!==Ur)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>t.strings===void 0)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===B||t===T)return t;const i=e.element,o=e.name;if(e.type===Pr){if(t===i[o])return B}else if(e.type===Ur){if(!!t===i.hasAttribute(o))return B}else if(e.type===Di&&i.getAttribute(o)===t+"")return B;return((r,s=Aa)=>{r._$AH=s})(e),t}}),Vs=Object.defineProperty,Ea=Object.defineProperties,Ca=Object.getOwnPropertyDescriptor,ka=Object.getOwnPropertyDescriptors,Tr=Object.getOwnPropertySymbols,za=Object.prototype.hasOwnProperty,Pa=Object.prototype.propertyIsEnumerable,Rr=(e,t,i)=>t in e?Vs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Vt=(e,t)=>{for(var i in t||(t={}))za.call(t,i)&&Rr(e,i,t[i]);if(Tr)for(var i of Tr(t))Pa.call(t,i)&&Rr(e,i,t[i]);return e},lo=(e,t)=>Ea(e,ka(t)),C=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?Ca(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&Vs(t,i,s),s},Kt=new WeakMap,Or=new WeakMap,Zt=new WeakMap,Ii=new Set,Ua=new MutationObserver(Ns),ut=new Map,Ms=document.documentElement.dir||"ltr",Ls=document.documentElement.lang||navigator.language;function Ns(){Ms=document.documentElement.dir||"ltr",Ls=document.documentElement.lang||navigator.language,[...Ii.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}Ua.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var Ta=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ii.add(this.host)}hostDisconnected(){Ii.delete(this.host)}dir(){return`${this.host.dir||Ms}`.toLowerCase()}lang(){return`${this.host.lang||Ls}`.toLowerCase()}term(e,...t){var i,o;const r=new Intl.Locale(this.lang()),s=r==null?void 0:r.language.toLowerCase(),n=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",h=ut.get(`${s}-${n}`),a=ut.get(s);let l;if(h&&h[e])l=h[e];else if(a&&a[e])l=a[e];else{if(!te||!te[e])return console.error(`No translation found for: ${String(e)}`),String(e);l=te[e]}return typeof l=="function"?l(...t):l}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}},Ra=class extends Ta{};(function(...e){e.map(t=>{const i=t.$code.toLowerCase();ut.has(i)?ut.set(i,Object.assign(Object.assign({},ut.get(i)),t)):ut.set(i,t),te||(te=t)}),Ns()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var me=e=>e??T;function yi(e,t){const i=Vt({waitUntilFirstUpdate:!1},t);return(o,r)=>{const{update:s}=o,n=Array.isArray(e)?e:[e];o.update=function(h){n.forEach(a=>{const l=a;if(h.has(l)){const d=h.get(l),c=this[l];d!==c&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[r](d,c))}}),s.call(this,h)}}}var Vr=Rs(class extends Os{constructor(e){var t;if(super(e),e.type!==Di||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,o;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.nt.add(s);return this.render(t)}const r=e.element.classList;this.nt.forEach(s=>{s in t||(r.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((o=this.st)===null||o===void 0)&&o.has(s)||(n?(r.add(s),this.nt.add(s)):(r.remove(s),this.nt.delete(s)))}return B}}),Oa=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?lo(Vt({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function N(e){return(t,i)=>i!==void 0?((o,r,s)=>{r.constructor.createProperty(s,o)})(e,t,i):Oa(e,t)}function Mr(e){return N(lo(Vt({},e),{state:!0}))}var wi,Va=({finisher:e,descriptor:t})=>(i,o)=>{var r;if(o===void 0){const s=(r=i.originalKey)!==null&&r!==void 0?r:i.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:lo(Vt({},i),{key:s});return e!=null&&(n.finisher=function(h){e(h,s)}),n}{const s=i.constructor;t!==void 0&&Object.defineProperty(i,o,t(o)),e==null||e(s,o)}};function Lr(e,t){return Va({descriptor:i=>{const o={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const r=typeof i=="symbol"?Symbol():"__"+i;o.get=function(){var s,n;return this[r]===void 0&&(this[r]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[r]}}return o}})}(wi=window.HTMLSlotElement)===null||wi===void 0||wi.prototype.assignedElements;var Fi=class extends Qt{emit(e,t){const i=new CustomEvent(e,Vt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}};C([N()],Fi.prototype,"dir",2),C([N()],Fi.prototype,"lang",2);/*! Bundled license information:

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
*/var $i,E=class extends Fi{constructor(){super(...arguments),this.formControlController=new class{constructor(e,t){(this.host=e).addController(this),this.options=Vt({form:i=>{if(i.hasAttribute("form")&&i.getAttribute("form")!==""){const o=i.getRootNode(),r=i.getAttribute("form");if(r)return o.getElementById(r)}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null&&o},reportValidity:i=>typeof i.reportValidity!="function"||i.reportValidity(),setValue:(i,o)=>i.value=o},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(e){e?(this.form=e,Kt.has(this.form)?Kt.get(this.form).add(this.host):Kt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Zt.has(this.form)||(Zt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=Kt.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Zt.has(this.form)&&(this.form.reportValidity=Zt.get(this.form),Zt.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="sl-button";!t&&!r&&typeof i=="string"&&i.length>0&&o!==void 0&&(Array.isArray(o)?o.forEach(s=>{e.formData.append(i,s.toString())}):e.formData.append(i,o.toString()))}handleFormSubmit(e){var t;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=Kt.get(this.form))==null||t.forEach(r=>{this.setUserInteracted(r,!0)})),!this.form||this.form.noValidate||i||o(this.host)||(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){Or.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&i.setAttribute(o,t.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){var t;const i=this.host,o=Boolean(Or.get(i)),r=Boolean(i.required);(t=this.form)!=null&&t.noValidate?(i.removeAttribute("data-required"),i.removeAttribute("data-optional"),i.removeAttribute("data-invalid"),i.removeAttribute("data-valid"),i.removeAttribute("data-user-invalid"),i.removeAttribute("data-user-valid")):(i.toggleAttribute("data-required",r),i.toggleAttribute("data-optional",!r),i.toggleAttribute("data-invalid",!e),i.toggleAttribute("data-valid",e),i.toggleAttribute("data-user-invalid",!e&&o),i.toggleAttribute("data-user-valid",e&&o))}updateValidity(){const e=this.host;this.setValidity(e.checkValidity())}}(this),this.hasSlotController=new class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}}(this,"help-text","label"),this.localize=new Ra(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",100*e+"%")}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,i=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=t*e;if(this.localize.dir()==="rtl"){const s=`${t-r}px + ${e} * ${o}`;this.output.style.translate=`calc((${s} - ${i/2}px - ${o} / 2))`}else{const s=`${r}px - ${e} * ${o}`;this.output.style.translate=`calc(${s} - ${i/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,o=!!this.helpText||!!t;return Er`
      <div
        part="form-control"
        class=${Vr({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Vr({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              .value=${xa(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip==="none"||this.disabled?"":Er`
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
    `}};function Nr(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}E.styles=Sa,C([Lr(".range__control")],E.prototype,"input",2),C([Lr(".range__tooltip")],E.prototype,"output",2),C([Mr()],E.prototype,"hasFocus",2),C([Mr()],E.prototype,"hasTooltip",2),C([N()],E.prototype,"title",2),C([N()],E.prototype,"name",2),C([N({type:Number})],E.prototype,"value",2),C([N()],E.prototype,"label",2),C([N({attribute:"help-text"})],E.prototype,"helpText",2),C([N({type:Boolean,reflect:!0})],E.prototype,"disabled",2),C([N({type:Number})],E.prototype,"min",2),C([N({type:Number})],E.prototype,"max",2),C([N({type:Number})],E.prototype,"step",2),C([N()],E.prototype,"tooltip",2),C([N({attribute:!1})],E.prototype,"tooltipFormatter",2),C([N({reflect:!0})],E.prototype,"form",2),C([((e="value")=>(t,i)=>{const o=t.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,n,h){var a;const l=o.getPropertyOptions(e);if(s===(typeof l.attribute=="string"?l.attribute:e)){const d=l.converter||he,c=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:he.fromAttribute)(h,l.type);this[e]!==c&&(this[i]=c)}r.call(this,s,n,h)}})()],E.prototype,"defaultValue",2),C([yi("value",{waitUntilFirstUpdate:!0})],E.prototype,"handleValueChange",1),C([yi("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1),C([yi("hasTooltip",{waitUntilFirstUpdate:!0})],E.prototype,"syncRange",1),E=C([($i="sl-range",e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))($i,e):((t,i)=>{const{kind:o,elements:r}=i;return{kind:o,elements:r,finisher(s){customElements.define(t,s)}}})($i,e))],E);var Jt=function(){try{window[D].updateSegments();var e=function(){if(!Si)return Si=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){Si=t,window[D].dispatchEvent(new Event("change"))})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},D="__foldables__",Si=!1,ho=function(){function e(){var o=this;if(window[D]!==void 0)return window[D];var r=document.createDocumentFragment();this.addEventListener=r.addEventListener.bind(r),this.removeEventListener=r.removeEventListener.bind(r),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof o[n]=="function"&&o[n](s),r.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(o,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var h;return function(){var a=arguments,l=this;clearTimeout(h),h=setTimeout(function(){return s.apply(l,a)},n)}}(Jt(),200)})}var t,i=e.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var r=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,h=r/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:s,left:0,bottom:s+h,right:n,width:n,height:h},s+=o[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var l=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:c,right:c+l,bottom:d,width:l,height:d},c+=o[u].width,c+=this.foldSize;window.visualViewport.segments=o},i.randomizeSegmentsConfiguration=function(o){var r=Math.random()<.5,s=Math.round(Math.random()*(o-1)+1);r?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(D+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(D+"-horizontal-viewport-segments",o),Jt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(D+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(D+"-vertical-viewport-segments",o),Jt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(D+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(D+"-fold-size",o),Jt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(D+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(D+"-browser-shell-size",o),Jt()}}])&&function(o,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(e.prototype,t),e}();window[D]=new ho,window.visualViewport.segments===void 0&&window[D].updateSegments();var Hs="-viewport-segments",ji="(\\s*)(@media.*?\\b"+Hs+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",Ma=/\((.*?)\)/gi,La=/@media[^\(]+/gi,Na=/(horizontal-viewport-segments:)\s?(\d)/gi,Ha=/(vertical-viewport-segments:)\s?(\d)/gi,Da=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")};function Hr(e,t){var i=e.matchAll(t);return i===null?[]:Array.from(i,function(o){return o[2]})[0]}function Ia(e){var t=function(o){var r,s=new RegExp(ji,"gi");if(typeof o.matchAll=="function")r=Array.from(o.matchAll(s));else{for(r=[];r[r.length]=s.exec(o););r.length--}return r}(e),i=[[]];return t.forEach(function(o){var r=o[1],s=o[2],n=o[3],h=o[4],a=s.match(La)||[],l=s.match(Ma)||[],d=Hr(s,Ha);d===void 0&&(d=1);var c=Hr(s,Na);c===void 0&&(c=1),l=l.filter(function(u){return!u.includes(Hs)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][c]=""+r+a+l+"{"+n+h+"}"}),i}var Bi=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+Bi);var Dr,Ds=new ho;if(!Bi){var Ai=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Dr=Ai,Promise.all(Dr.map(function(e){return e.href?fetch(e.href).then(function(t){return t.text()}):e.textContent}))).then(function(e){var t=new DocumentFragment;e.forEach(function(i,o){for(var r,s=function(U,k){return U.replace(new RegExp(ji,"gi"),k)}(i,""),n=Ia(i),h=Ai[o].href||"inline",a=0,l=Object.entries(n);a<l.length;a++){var d=l[a],c=d[0],u=d[1];ee[c]==null&&(ee[c]=[]);for(var p=0,g=Object.entries(u);p<g.length;p++){var m=g[p];ee[c][m[0]]="/* origin: "+h+" */"+m[1]}}if(h=="inline"||(r=i,new RegExp(ji,"gi").test(r))){var v=document.createElement("style");v.setAttribute("data-css-origin",h),v.textContent=s,t.appendChild(v)}else{var b=document.createElement("link");b.type="text/css",b.rel="stylesheet",b.href=h,t.appendChild(b)}}),Ai.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(t),function(i){Bi||(Ir(i),Ds.addEventListener("change",function(){return Ir(i)}))}()})}var ee=[[]];function Ir(e){var t,i=Ds,o=null;(t=e?ee[e.nodeName.toLowerCase()]:ee)[i.verticalViewportSegments]&&(o=t[i.verticalViewportSegments][i.horizontalViewportSegments]);var r,s=t[0][0]?t[0][0]:null;if(o){var n=window.visualViewport.segments,h=!1;n.length>1&&(h=!(n[0].height<window.innerHeight));for(var a=0,l=Object.entries(n);a<l.length;a++)for(var d=l[a],c=d[0],u=0,p=Object.entries(d[1]);u<p.length;u++){var g=p[u],m=g[0];r=g[1]+"px",o=o.replace(Da(h?"viewport-segment-"+m+" "+c+" 0":"viewport-segment-"+m+" 0 "+c),r)}var v="__foldables_sheet__",b=function(k,I){for(var x,S=function(A,fe){var L=typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(L)return(L=L.call(A)).next.bind(L);if(Array.isArray(A)||(L=function(M,Nt){if(M){if(typeof M=="string")return Nr(M,Nt);var F=Object.prototype.toString.call(M).slice(8,-1);return F==="Object"&&M.constructor&&(F=M.constructor.name),F==="Map"||F==="Set"?Array.from(M):F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)?Nr(M,Nt):void 0}}(A))){L&&(A=L);var Lt=0;return function(){return Lt>=A.length?{done:!0}:{done:!1,value:A[Lt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(k.querySelectorAll("."+v));!(x=S()).done;)x.value.remove();var z=document.createElement("style");z.className=v,z.textContent=I,k===document?document.head.appendChild(z):k.appendChild(z)};if(e){var U=e.shadowRoot;"adoptedStyleSheets"in U&&U.adoptedStyleSheets.length>0?U.adoptedStyleSheets[0].replace(s+o):b(U,o)}else b(document,o)}}const K={Foldable:"foldable",Dual:"dual"};class Mt extends gt{}y(Mt,"styles",xs`
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
  `);customElements.define("close-icon",class extends Mt{render(){return Ot`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}});customElements.define("fullscreen-icon",class extends Mt{render(){return Ot`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}});customElements.define("splitview-icon",class extends Mt{render(){return Ot`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}});customElements.define("rotate-icon",class extends Mt{render(){return Ot`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}});customElements.define("minimize-icon",class extends Mt{render(){return Ot`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}});class Is extends gt{constructor(){super();y(this,"_mini_configurator_header");y(this,"_mini_configurator");y(this,"_configurator");y(this,"_configurator_header");y(this,"_device_type_select");y(this,"_orientation_select");y(this,"_seam_slider");y(this,"_seam_container");y(this,"_preview");y(this,"_preview_container");y(this,"_device");y(this,"_frame");y(this,"_device_hinge");y(this,"_currentOrientation");y(this,"_currentDevice");y(this,"_isFullscreen",!1);y(this,"_verticalViewportSegments",1);y(this,"_horizontalViewportSegments",1);y(this,"_fold_width");y(this,"_browser_shell_size");y(this,"_x",0);y(this,"_y",0);y(this,"_offset_x",0);y(this,"_offset_y",0);y(this,"_resizeHandler");y(this,"_handleKeyUp",i=>{i.keyCode==73&&i.ctrlKey&&this._showMiniConfigurator()});y(this,"_startDragMiniConfigurator",async i=>{this._startDrag(i),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove});y(this,"_startDragConfigurator",async i=>{this._startDrag(i),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove});y(this,"_startDrag",async i=>{this._isFullscreen||(this._moved=!1,this._x=i.clientX-this._offset_x,this._y=i.clientY-this._offset_y,this._pointerId=i.pointerId,i.preventDefault())});y(this,"_miniConfiguratorMove",async i=>{this._pointerMove(i),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}});y(this,"_pointerMove",async i=>{if(i.clientY<0||i.clientX<0||i.clientX>window.innerWidth||i.clientY>window.innerHeight)return;let o=i.clientX-this._x,r=i.clientY-this._y;const s=window.getComputedStyle(this.shadowRoot.host),n=parseFloat(s.width),h=parseFloat(s.height);o<0&&(o=0),r<0&&(r=0),r+h>=window.innerHeight&&(r=window.innerHeight-h),o+n>=window.innerWidth&&(o=window.innerWidth-n),this._updateConfiguratorPosition(o,r),i.preventDefault()});y(this,"_stopDragConfigurator",async i=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});y(this,"_stopDragMiniConfigurator",async i=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});y(this,"_stopDrag",async i=>{this._x=this._offset_x,this._y=this._offset_y});y(this,"_onResize",async i=>{this._handleAsusSpanning()});y(this,"_seamValueUpdated",async()=>{this.foldWidth=this._seam_slider.value,this.shadowRoot.host.style.setProperty("--device-fold-width",this.foldWidth+"px"),this._updateFoldablesFeature()});y(this,"_rotationFinished",i=>{this._preview.style.transition=""});this._verticalViewportSegments=1,this._horizontalViewportSegments=1}static get properties(){return{verticalViewportSegments:{type:Number},horizontalViewportSegments:{type:Number}}}_inIframe(){try{return window.self!==window.top}catch{return!0}}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches)return console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this);const i=window.getComputedStyle(this.shadowRoot.host);parseFloat(i.width);const o=parseFloat(i.height);this._updateConfiguratorPosition(20,window.innerHeight-o-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._verticalViewportSegments=1,this._horizontalViewportSegments=1,this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="portrait",this._deviceType=K.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.horizontalViewportSegments=1,this.verticalViewportSegments=2,this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{this._addZenbookVariables(document.styleSheets[0]),this._addZenbookVariables(this._frame.contentDocument.styleSheets[0])},300)):(this.horizontalViewportSegments=1,this.verticalViewportSegments=1,this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this._orientationFromSegments()}_orientationFromSegments(){return this.horizontalViewportSegments===2&&this.verticalViewportSegments===1?"portrait":this.horizontalViewportSegments===1&&this.verticalViewportSegments===2?"landscape":"portrait"}_addZenbookVariables(i){i.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",i.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(i){this._fold_width=Math.max(0,i)}_orientationChanged(i){const o=this._orientation_select.selectedIndex;this._orientation_select[o].value==="portrait"?(this.horizontalViewportSegments=2,this.verticalViewportSegments=1):(this.horizontalViewportSegments=1,this.verticalViewportSegments=2),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){this._orientationFromSegments()!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this._orientationFromSegments(),this.horizontalViewportSegments===1&&this.verticalViewportSegments===1?this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation():this.horizontalViewportSegments===2?this._applyVerticalRotation():this._applyHorizontalRotation()}get horizontalViewportSegments(){return this._horizontalViewportSegments}set horizontalViewportSegments(i){let o=this._horizontalViewportSegments;this._orientation_select.selectedIndex=i===2?0:1,this._horizontalViewportSegments=i,this.requestUpdate("horizontalViewportSegments",o)}get verticalViewportSegments(){return this._verticalViewportSegments}set verticalViewportSegments(i){let o=this._verticalViewportSegments;this._orientation_select.selectedIndex=i===2?1:0,this._verticalViewportSegments=i,this.requestUpdate("verticalViewportSegments",o)}_deviceTypeChanged(i){const o=this._device_type_select.selectedIndex,r=this._device_type_select[o].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(this.verticalViewportSegments=1,this.horizontalViewportSegments=2,this._currentOrientation="portrait"),r){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this.foldWidth=24,this._deviceType=K.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=K.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=K.Dual,this.foldWidth=28,this._currentDevice="duo";break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=K.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=K.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this.verticalViewportSegments=1,this.horizontalViewportSegments=1,this._currentOrientation="portrait",this._currentDevice="duo",this.foldWidth=0,this._deviceType=K.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature(),this._frame.contentWindow.location.reload(!0)}_calculateAndApplyScaleFactor(){const i=window.getComputedStyle(this._preview_container),o=window.getComputedStyle(this._device),r=parseInt(i.width,10),s=parseInt(i.height,10);let n=parseInt(o.width,10),h=parseInt(o.height,10),a=1;if(this._currentOrientation==="landscape"&&(n=parseInt(o.height,10),h=parseInt(o.width,10)),h>s||n>r){const l=s/h,d=r/n;a=d<l?d:l}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*a)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px")}this._deviceType===K.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const i=new ho;i.foldSize=this.foldWidth,i.horizontalViewportSegments=this.horizontalViewportSegments,i.verticalViewportSegments=this.verticalViewportSegments,this._seam_slider.value=this.foldWidth}_debounce(i,o){let r;return function(){clearTimeout(r),r=setTimeout(()=>i.apply(this,arguments),o)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let i=this._offset_x,o=this._offset_y;const r=window.getComputedStyle(this.shadowRoot.host),s=parseFloat(r.width),n=parseFloat(r.height);this._offset_y+n>=window.innerHeight&&(o=window.innerHeight-n),this._offset_x+s>=window.innerWidth&&(i=window.innerWidth-s),this._updateConfiguratorPosition(i,o),this._updatePreviewConfiguration()}_updateConfiguratorPosition(i,o){this._offset_x=i,this._offset_y=o,this.shadowRoot.host.style.transform="translate3d("+i+"px, "+o+"px, 0)"}_toggleSpanning(){this.verticalViewportSegments!=1||this.horizontalViewportSegments!=1?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1||(this.verticalViewportSegments===2?(this.verticalViewportSegments=1,this.horizontalViewportSegments=2):(this.verticalViewportSegments=2,this.horizontalViewportSegments=1),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return Ot`
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
    </div>`}}y(Is,"styles",xs`
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
  `);customElements.define("foldable-device-configurator",Is);try{self["workbox:window:6.5.3"]&&_()}catch{}function Wi(e,t){return new Promise(function(i){var o=new MessageChannel;o.port1.onmessage=function(r){i(r.data)},e.postMessage(t,[o.port2])})}function Fa(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Fr(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}function ja(e,t){var i;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(i=function(r,s){if(r){if(typeof r=="string")return Fr(r,s);var n=Object.prototype.toString.call(r).slice(8,-1);return n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set"?Array.from(r):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fr(r,s):void 0}}(e))||t&&e&&typeof e.length=="number"){i&&(e=i);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(i=e[Symbol.iterator]()).next.bind(i)}try{self["workbox:core:6.5.3"]&&_()}catch{}var xi=function(){var e=this;this.promise=new Promise(function(t,i){e.resolve=t,e.reject=i})};function Ei(e,t){var i=location.href;return new URL(e,i).href===new URL(t,i).href}var Xt=function(e,t){this.type=e,Object.assign(this,t)};function ge(e,t,i){return i?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function Ba(){}var Wa={type:"SKIP_WAITING"};function jr(e,t){if(!t)return e&&e.then?e.then(Ba):Promise.resolve()}var qa=function(e){var t,i;function o(h,a){var l,d;return a===void 0&&(a={}),(l=e.call(this)||this).nn={},l.tn=0,l.rn=new xi,l.en=new xi,l.on=new xi,l.un=0,l.an=new Set,l.cn=function(){var c=l.fn,u=c.installing;l.tn>0||!Ei(u.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=u,c.removeEventListener("updatefound",l.cn)):(l.hn=u,l.an.add(u),l.rn.resolve(u)),++l.tn,u.addEventListener("statechange",l.ln)},l.ln=function(c){var u=l.fn,p=c.target,g=p.state,m=p===l.vn,v={sw:p,isExternal:m,originalEvent:c};!m&&l.mn&&(v.isUpdate=!0),l.dispatchEvent(new Xt(g,v)),g==="installed"?l.wn=self.setTimeout(function(){g==="installed"&&u.waiting===p&&l.dispatchEvent(new Xt("waiting",v))},200):g==="activating"&&(clearTimeout(l.wn),m||l.en.resolve(p))},l.dn=function(c){var u=l.hn,p=u!==navigator.serviceWorker.controller;l.dispatchEvent(new Xt("controlling",{isExternal:p,originalEvent:c,sw:u,isUpdate:l.mn})),p||l.on.resolve(u)},l.gn=(d=function(c){var u=c.data,p=c.ports,g=c.source;return ge(l.getSW(),function(){l.an.has(g)&&l.dispatchEvent(new Xt("message",{data:u,originalEvent:c,ports:p,sw:g}))})},function(){for(var c=[],u=0;u<arguments.length;u++)c[u]=arguments[u];try{return Promise.resolve(d.apply(this,c))}catch(p){return Promise.reject(p)}}),l.sn=h,l.nn=a,navigator.serviceWorker.addEventListener("message",l.gn),l}i=e,(t=o).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var r,s,n=o.prototype;return n.register=function(h){var a=(h===void 0?{}:h).immediate,l=a!==void 0&&a;try{var d=this;return function(c,u){var p=c();return p&&p.then?p.then(u):u(p)}(function(){if(!l&&document.readyState!=="complete")return jr(new Promise(function(c){return window.addEventListener("load",c)}))},function(){return d.mn=Boolean(navigator.serviceWorker.controller),d.yn=d.pn(),ge(d.bn(),function(c){d.fn=c,d.yn&&(d.hn=d.yn,d.en.resolve(d.yn),d.on.resolve(d.yn),d.yn.addEventListener("statechange",d.ln,{once:!0}));var u=d.fn.waiting;return u&&Ei(u.scriptURL,d.sn.toString())&&(d.hn=u,Promise.resolve().then(function(){d.dispatchEvent(new Xt("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),d.hn&&(d.rn.resolve(d.hn),d.an.add(d.hn)),d.fn.addEventListener("updatefound",d.cn),navigator.serviceWorker.addEventListener("controllerchange",d.dn),d.fn})})}catch(c){return Promise.reject(c)}},n.update=function(){try{return this.fn?jr(this.fn.update()):void 0}catch(h){return Promise.reject(h)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(h){try{return ge(this.getSW(),function(a){return Wi(a,h)})}catch(a){return Promise.reject(a)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Wi(this.fn.waiting,Wa)},n.pn=function(){var h=navigator.serviceWorker.controller;return h&&Ei(h.scriptURL,this.sn.toString())?h:void 0},n.bn=function(){try{var h=this;return function(a,l){try{var d=a()}catch(c){return l(c)}return d&&d.then?d.then(void 0,l):d}(function(){return ge(navigator.serviceWorker.register(h.sn,h.nn),function(a){return h.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},r=o,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Fa(r.prototype,s),o}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(i,o){this.Sn(i).add(o)},t.removeEventListener=function(i,o){this.Sn(i).delete(o)},t.dispatchEvent=function(i){i.target=this;for(var o,r=ja(this.Sn(i.type));!(o=r()).done;)(0,o.value)(i)},t.Sn=function(i){return this.Pn.has(i)||this.Pn.set(i,new Set),this.Pn.get(i)},e}());Ui("/demos/foldnews/");const Ka=(e,...t)=>{const i=ns(e[0],"main-application");return Qr([i],...t)};class Fs extends vt{constructor(){super();y(this,"_swAlert");y(this,"_wb");y(this,"_wbRegistration")}firstUpdated(){this._swAlert=this.shadowRoot.querySelector("#sw-alert"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new qa("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()})}connectedCallback(){super.connectedCallback(),Gi(this)}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&Wi(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}render(){return Jr`
      <foldable-device-configurator></foldable-device-configurator>
      <div class="content">
        <div class="header">
          <div class="header-main">
            <div class="grow"></div>
            <div class="title-left">
              <div class="weather">
                <div class="weather-type">
                  Sunshine
                  <picture>
                    <source srcset="images/sun.webp" type="image/webp">
                    <img class="weather-picture" src="images/sun.png" alt="Picture of a sun">
                  </picture>
                </div>
                <div>Temperature: 29&deg;C</div>
                <div>Wind: 2km/h</div>
              </div>
            </div>
            <div class="fold angled stripes"></div>
            <div class="grow-right"></div>
            <div class="title-right">
              <div>The Fold News</div>
              <div class="logo-container">
                <picture>
                  <source srcset="images/foldnews-logo.webp" type="image/webp">
                  <img class="logo" src="images/foldnews-logo.png" alt="Fold news logo">
                </picture>
              </div>
            </div>
            <div class="grow"></div>
          </div>
          <div class="date">
            <div class="date-grow"></div>
            <div class="fold angled stripes"></div>
            Portland, OR - June 7th, 2011
          </div>
        </div>
        <div class="frontpage">
          <div class="cell cell-1">
            <news-article picturePosition="top">
              <div slot="title">Asus launched its new Zephyrus Duo laptop, two screens in one laptop</div>
              <div slot="author">By Alexis Menard</div>
              <div slot="news-picture">
                <picture>
                  <source srcset="images/asus-zephyrus.webp" type="image/webp">
                  <img class="picture" src="images/asus-zephyrus.png" alt="Picture of the Asus Zephyrus Duo">
                </picture>
              </div>
              <div slot="text">
                Asus launched its new Zephyrus Duo laptop which features two screens. It's a successor of the Zenbook Duo 
                but this time it's directed towards the gaming community.
                <div class="citation">the Zephyrus comes with a new hinge
                design which now lifts the second screen for better visibility</div>
                The specs have also been updated with a 10th Gen Intel Core i9, an updated Nvidia 2080 Super Max-Q, 32GB of
                memory and 2TB of Solid State drive.
                This laptop has two option for the main screen : OLED 4K at 60hz or FHD at 300hz IPS.
                The secondary screen called ScreenPad Plus is a complete screen with touch capability (just like a secondary monitor).
                <p>
                  Beside helping visibility the tilted second screen helps with cooling as Asus put a way to get fresh, unobstructed air
                  intake from beneath the screen.
                </p>
              </div>
            </news-article>
          </div>
          <div class="cell cell-5">
            <news-article picturePosition="top">
              <div slot="title">W3C Community showcases early standards for foldables and dual screen devices</div>
              <div slot="author">By Alexis Menard</div>
              <div slot="news-picture">
                <picture>
                  <source srcset="images/battleship.webp" type="image/webp">
                  <img class="picture" src="images/battleship.jpg" alt="Picture of a battleship game demo running on a Asus Zenbook Duo">
                </picture>
              </div>
              <div slot="text">
                The W3C community posted on Twitter a picture of a little demo using early proposed specifications to target dual screens
                and foldable devices. A photo gallery optimized for dual screen as well as a little battleship game was showcased.
                <div class="citation">The proposed standards enable web developers to target these innovative form factors</div>
                These are early standards and are subject to change. At this point Microsoft, Intel and Samsung are involved into
                the work.
              </div>
            </news-article>
          </div>
          <div class="cell cell-2">
            <news-article picturePosition="top">
              <div slot="title">Microsoft demonstrates the Surface Duo</div>
              <div slot="author">By Alexis Menard</div>
              <div slot="news-picture">
                <picture>
                  <source srcset="images/surface-duo.webp" type="image/webp">
                  <img class="picture" src="images/surface-duo.jpg" alt="Picture of the Microsoft Surface Duo">
                </picture>
              </div>
              <div slot="text">
                The Microsoft Surface Duo, also known as the Surface Duo, is an
                upcoming foldable device announced during Microsoft's Surface hardware conference on October 2, 2019.
                Unlike previous Microsoft products, which run a in-house operating system, such as the recently discontinued Windows 10 Mobile, it will run Android instead. 
                <p>
                  The device is generally regarded as a smartphone, however, Microsoft itself is reluctant to use the term to describe the device, instead referring to it as the newest member of the Surface family.
                </p>
              </div>
            </news-article>
          </div>
          <div class="cell cell-3">
            <news-article picturePosition="top">
              <div slot="title">Intel shows its Horseshoe Bend foldable concept</div>
              <div slot="author">By Alexis Menard</div>
              <div slot="news-picture">
                <video class="picture" autoplay loop muted playsinline>
                  <source src="images/intel-hsb.webm" type="video/webm">
                  <source src="images/intel-hsb.mp4" type="video/mp4">
                </video>
              </div>
              <div slot="text">
                Intel showed its new Horseshoe Bend prototype at CES. It's a folding PC with a foldable OLED screen.
                Unfolded the screen size is 17.3 inches making it close to a traditional laptop size.
                <div class="citation">It has a kickstand and a detachable keyboard which allow you to use the device as a monitor</div>
                You can also attach the keyboard on the bottom part of the device if you want to use it as a traditional laptop form factor.
                The added screen estate makes it perfect for productivity allowing to see more.
              </div>
            </news-article>
          </div>
          <div class="cell cell-4">
            <news-article picturePosition="left">
              <div slot="title">Samsung announces the Galaxy Fold.</div>
              <div slot="author">By Alexis Menard</div>
              <div slot="news-picture">
                <picture>
                  <source srcset="images/galaxy-fold.webp" type="image/webp">
                  <img class="picture" src="images/galaxy-fold.jpg" alt="Picture of the Samsung Galaxy Fold">
                </picture>
              </div>
              <div slot="text">
                  The Samsung Galaxy Fold is an Android-based foldable smartphone developed by Samsung Electronics.
                  Unveiled on February 20, 2019, it was released on September 6, 2019 in South Korea.
                  <p>
                    The device is capable of being folded open to expose a 7.3-inch tablet-sized flexible display,
                    while its front contains a smaller "cover" display, intended for accessing the device without opening it.
                  </p>
                  <p>
                    It's a truly futuristic device that enables new way to use the device. On the big screen you can run 3
                    applications at the same time, side by side. It also supports the "App Continuity" mode which is a way to
                    transition from the big screen to the small screen and vice-versa smoothly without restarting the application
                    (provided it's supported by the app itself).
                  </p>
              </div>
            </news-article>
          </div>
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
    `}}y(Fs,"styles",Ka`
    :host {
      width: 100vw;
      height: 100vh;
      --background-color: #f9f7f1;
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

    .content {
      width: 100%;
      height: 100%;
      background-color: var(--background-color);
      font-family: 'Cinzel', serif;
    }

    .header {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 70px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .header-main {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    .header-title {
      flex-grow: 2;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .grow {
      content:'';
      flex-grow: 2;
    }

    .weather {
      font-size: 15px;
      border: 3px double black;
      display: flex;
      flex-direction: column;
      margin: 20px 20px 20px 0;
      padding: 5px;
    }

    .weather-type {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    .weather-picture {
      width: 30px;
      margin-left: 5px;
    }

    .title-right {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    .title-left {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    .logo-container {
      margin-left: 20px;
    }

    .logo {
      height: 50px;
      display: block;
    }

    .date {
      text-transform: uppercase;
      border-bottom: 2px solid black;
      border-top: 2px solid black;
      padding: 20px 0px 20px 0px;
      text-align: center;
      font-weight: 700;
      font-size: 15px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .frontpage {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      width: 100%;
    }


    .frontpage:before {
      left: 0;
      border-right: 1px solid black;
    }

    .frontpage:after {
      right: 0;
      border-left: 1px solid black;
    }

    .cell {
      padding: 10px;
      background-color:  var(--background-color);
      border-right: solid 1px black;
      border-bottom: solid 1px black;
    }

    .cell-1 {
      grid-row: 1 / span 2;
    }

    .cell-2 {
      grid-column: span 2 / span 2;
    }

    .cell-3 {
      grid-row: 2;
      grid-column: 2;
    }

    .cell-4 {
      grid-column: 1 / span 3;
    }

    .cell-5 {
      grid-row: 2 / span 1;
    }

    .picture {
      max-width: 100%;
    }

    .citation {
      text-align: center;
      font-size: 20px;
      display: block;
      font-family: 'Cinzel', serif;
      margin: 30px 0 30px 0;
      font-weight: 500;
    }

    .citation:before {
      border-top: 2px solid black;
      width: 100px;
      content: '';
      height: 7px;
      display: block;
      margin: auto;
    }

    .citation:after {
      border-bottom: 2px solid black;
      width: 100px;
      content: '';
      display: block;
      height: 7px;
      margin: auto;
    }

    p {
      margin-top: 10px;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      .header {
        font-size: 1.7em;
      }

      .weather-picture {
        width: 20px;
      }

      .frontpage {
        display: flex;
        flex-direction: column;
      }

      .logo {
        height: 30px;
      }

      .weather {
        font-size: 0.25em;
      }

      .date {
        font-size: 10px;
      }
    }

    @media (horizontal-viewport-segments: 2) {
      .header {
        font-size: 2.5em;
      }

      .fold {
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
      }

      .frontpage {
        display: grid;
      }

      .title-left {
        width: env(viewport-segment-width 0 0);
      }

      .title-right {
        width: env(viewport-segment-width 1 0);
      }

      .grow-right {
        display: block;
        flex-grow: 2;
      }

      .date-grow {
        width: env(viewport-segment-width 0 0);
      }

      .date{
        flex-direction: row-reverse;
      }

      .header-main {
        flex-direction: row-reverse;
      }

      .cell-1 {
        grid-row: 1 / span 1;
        width: env(viewport-segment-width 0 0);
      }

      .cell-2 {
        grid-column: span 2 / span 2;
      }

      .cell-4 {
        width: env(viewport-segment-width 0 0);
        grid-row: 2 / span 1;
        grid-column: 1;
      }

      .cell-5 {
        grid-row: 2 / span 1;
      }

      .picture {
        display: block;
        max-width: 100%;
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .fold {
        width: 0;
      }

      .frontpage {
        display: grid;
      }

      .grow-right {
        display: none;
      }

      .date-grow {
        display: none;
      }

      .header-main {
        flex-direction: row;
      }

      .date{
        flex-direction: row;
      }

      .title-left {
        width: auto;
      }

      .title-right {
        width: auto;
      }

      .cell-1 {
        grid-row: 1 / span 2;
        width: auto;
      }

      .cell-2 {
        grid-column: span 2 / span 2;
      }

      .cell-3 {
        grid-row: 2;
        grid-column: 2;
      }

      .cell-4 {
        width: auto;
        grid-column: 1 / span 3;
      }

      .cell-5 {
        grid-row: 2 / span 1;
      }
    }

    @media (min-width: 320px) and (max-width: 1024px) and (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .frontpage {
        display: flex;
        flex-direction: column;
      }
    }
  `);customElements.define("main-application",Fs);
