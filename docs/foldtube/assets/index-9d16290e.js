var Bs=Object.defineProperty;var js=(e,t,i)=>t in e?Bs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var y=(e,t,i)=>(js(e,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=window,Qi=Pe.ShadowRoot&&(Pe.ShadyCSS===void 0||Pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,to=Symbol(),go=new WeakMap;let Kr=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==to)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Qi&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=go.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&go.set(i,t))}return t}toString(){return this.cssText}};const qs=e=>new Kr(typeof e=="string"?e:e+"",void 0,to),Ft=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new Kr(i,e,to)},Ws=(e,t)=>{Qi?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const o=document.createElement("style"),r=Pe.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)})},bo=Qi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return qs(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ei;const Re=window,_o=Re.trustedTypes,Ks=_o?_o.emptyScript:"",yo=Re.reactiveElementPolyfillSupport,Li={toAttribute(e,t){switch(t){case Boolean:e=e?Ks:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Zr=(e,t)=>t!==e&&(t==t||e==e),ii={attribute:!0,type:String,converter:Li,reflect:!1,hasChanged:Zr};let gt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,o)=>{const r=this._$Ep(o,i);r!==void 0&&(this._$Ev.set(r,o),t.push(r))}),t}static createProperty(t,i=ii){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,i);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){return{get(){return this[i]},set(r){const s=this[t];this[i]=r,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ii}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,o=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const r of o)this.createProperty(r,i[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(bo(r))}else t!==void 0&&i.push(bo(t));return i}static _$Ep(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,o;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ws(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostConnected)===null||o===void 0?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostDisconnected)===null||o===void 0?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EO(t,i,o=ii){var r;const s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){const n=(((r=o.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?o.converter:Li).toAttribute(i,o.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,i){var o;const r=this.constructor,s=r._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=r.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:Li;this._$El=s,this[s]=h.fromAttribute(i,n.type),this._$El=null}}requestUpdate(t,i,o){let r=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Zr)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let i=!1;const o=this._$AL;try{i=this.shouldUpdate(o),i?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(o)):this._$Ek()}catch(r){throw i=!1,this._$Ek(),r}i&&this._$AE(o)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(o=>{var r;return(r=o.hostUpdated)===null||r===void 0?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,o)=>this._$EO(o,this[o],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};gt.finalized=!0,gt.elementProperties=new Map,gt.elementStyles=[],gt.shadowRootOptions={mode:"open"},yo==null||yo({ReactiveElement:gt}),((ei=Re.reactiveElementVersions)!==null&&ei!==void 0?ei:Re.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var oi;const Le=window,kt=Le.trustedTypes,wo=kt?kt.createPolicy("lit-html",{createHTML:e=>e}):void 0,rt=`lit$${(Math.random()+"").slice(9)}$`,Jr="?"+rt,Zs=`<${Jr}>`,zt=document,ve=(e="")=>zt.createComment(e),fe=e=>e===null||typeof e!="object"&&typeof e!="function",Yr=Array.isArray,Js=e=>Yr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$o=/-->/g,xo=/>/g,ct=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ao=/'/g,So=/"/g,Gr=/^(?:script|style|textarea|title)$/i,Ys=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),X=Ys(1),Pt=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Eo=new WeakMap,xt=zt.createTreeWalker(zt,129,null,!1),Gs=(e,t)=>{const i=e.length-1,o=[];let r,s=t===2?"<svg>":"",n=Xt;for(let a=0;a<i;a++){const l=e[a];let d,c,u=-1,v=0;for(;v<l.length&&(n.lastIndex=v,c=n.exec(l),c!==null);)v=n.lastIndex,n===Xt?c[1]==="!--"?n=$o:c[1]!==void 0?n=xo:c[2]!==void 0?(Gr.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=ct):c[3]!==void 0&&(n=ct):n===ct?c[0]===">"?(n=r??Xt,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?ct:c[3]==='"'?So:Ao):n===So||n===Ao?n=ct:n===$o||n===xo?n=Xt:(n=ct,r=void 0);const b=n===ct&&e[a+1].startsWith("/>")?" ":"";s+=n===Xt?l+Zs:u>=0?(o.push(d),l.slice(0,u)+"$lit$"+l.slice(u)+rt+b):l+rt+(u===-2?(o.push(void 0),a):b)}const h=s+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[wo!==void 0?wo.createHTML(h):h,o]};let Oi=class Xr{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,d]=Gs(t,i);if(this.el=Xr.createElement(l,o),xt.currentNode=this.el.content,i===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(r=xt.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(rt)){const v=d[n++];if(c.push(u),v!==void 0){const b=r.getAttribute(v.toLowerCase()+"$lit$").split(rt),g=/([.?@])?(.*)/.exec(v);a.push({type:1,index:s,name:g[2],strings:b,ctor:g[1]==="."?Qs:g[1]==="?"?en:g[1]==="@"?on:Ke})}else a.push({type:6,index:s})}for(const u of c)r.removeAttribute(u)}if(Gr.test(r.tagName)){const c=r.textContent.split(rt),u=c.length-1;if(u>0){r.textContent=kt?kt.emptyScript:"";for(let v=0;v<u;v++)r.append(c[v],ve()),xt.nextNode(),a.push({type:2,index:++s});r.append(c[u],ve())}}}else if(r.nodeType===8)if(r.data===Jr)a.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(rt,c+1))!==-1;)a.push({type:7,index:s}),c+=rt.length-1}s++}}static createElement(t,i){const o=zt.createElement("template");return o.innerHTML=t,o}};function Tt(e,t,i=e,o){var r,s,n,h;if(t===Pt)return t;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const l=fe(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,o)),o!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=Tt(e,a._$AS(e,t.values),a,o)),t}let Xs=class{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:o},parts:r}=this._$AD,s=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:zt).importNode(o,!0);xt.currentNode=s;let n=xt.nextNode(),h=0,a=0,l=r[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new eo(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new rn(n,this,t)),this.u.push(d),l=r[++a]}h!==(l==null?void 0:l.index)&&(n=xt.nextNode(),h++)}return s}p(t){let i=0;for(const o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}},eo=class Qr{constructor(t,i,o,r){var s;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cm=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Tt(this,t,i),fe(t)?t===R||t==null||t===""?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==Pt&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Js(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==R&&fe(this._$AH)?this._$AA.nextSibling.data=t:this.T(zt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:o,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Oi.createElement(r.h,this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(o);else{const n=new Xs(s,this),h=n.v(this.options);n.p(o),this.T(h),this._$AH=n}}_$AC(t){let i=Eo.get(t.strings);return i===void 0&&Eo.set(t.strings,i=new Oi(t)),i}k(t){Yr(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new Qr(this.O(ve()),this.O(ve()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},Ke=class{constructor(t,i,o,r,s){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,o,r){const s=this.strings;let n=!1;if(s===void 0)t=Tt(this,t,i,0),n=!fe(t)||t!==this._$AH&&t!==Pt,n&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Tt(this,h[o+a],i,a),l===Pt&&(l=this._$AH[a]),n||(n=!fe(l)||l!==this._$AH[a]),l===R?t=R:t!==R&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}n&&!r&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Qs=class extends Ke{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}};const tn=kt?kt.emptyScript:"";let en=class extends Ke{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,tn):this.element.removeAttribute(this.name)}},on=class extends Ke{constructor(t,i,o,r,s){super(t,i,o,r,s),this.type=5}_$AI(t,i=this){var o;if((t=(o=Tt(this,t,i,0))!==null&&o!==void 0?o:R)===Pt)return;const r=this._$AH,s=t===R&&r!==R||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==R&&(r===R||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,o;typeof this._$AH=="function"?this._$AH.call((o=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},rn=class{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Tt(this,t)}};const Co=Le.litHtmlPolyfillSupport;Co==null||Co(Oi,eo),((oi=Le.litHtmlVersions)!==null&&oi!==void 0?oi:Le.litHtmlVersions=[]).push("2.6.1");const sn=(e,t,i)=>{var o,r;const s=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:t;let n=s._$litPart$;if(n===void 0){const h=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new eo(t.insertBefore(ve(),h),h,void 0,i??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ri,si;let J=class extends gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const o=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=o.firstChild),o}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=sn(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Pt}};J.finalized=!0,J._$litElement$=!0,(ri=globalThis.litElementHydrateSupport)===null||ri===void 0||ri.call(globalThis,{LitElement:J});const ko=globalThis.litElementPolyfillSupport;ko==null||ko({LitElement:J});((si=globalThis.litElementVersions)!==null&&si!==void 0?si:globalThis.litElementVersions=[]).push("3.2.2");function zo(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}var Qt=function(){try{window[I].updateSegments();var e=function(){if(!ni)return ni=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){ni=t,window[I].dispatchEvent(new Event("change"))})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},I="__foldables__",ni=!1,ts=function(){function e(){var o=this;if(window[I]!==void 0)return window[I];var r=document.createDocumentFragment();this.addEventListener=r.addEventListener.bind(r),this.removeEventListener=r.removeEventListener.bind(r),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof o[n]=="function"&&o[n](s),r.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(o,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var h;return function(){var a=arguments,l=this;clearTimeout(h),h=setTimeout(function(){return s.apply(l,a)},n)}}(Qt(),200)})}var t,i=e.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var r=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,h=r/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:s,left:0,bottom:s+h,right:n,width:n,height:h},s+=o[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var l=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:c,right:c+l,bottom:d,width:l,height:d},c+=o[u].width,c+=this.foldSize;window.visualViewport.segments=o},i.randomizeSegmentsConfiguration=function(o){var r=Math.random()<.5,s=Math.round(Math.random()*(o-1)+1);r?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(I+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(I+"-horizontal-viewport-segments",o),Qt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(I+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(I+"-vertical-viewport-segments",o),Qt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(I+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(I+"-fold-size",o),Qt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(I+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(I+"-browser-shell-size",o),Qt()}}])&&function(o,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(e.prototype,t),e}();window[I]=new ts,window.visualViewport.segments===void 0&&window[I].updateSegments();var es="-viewport-segments",io="(\\s*)(@media.*?\\b"+es+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",nn=/\((.*?)\)/gi,an=/@media[^\(]+/gi,ln=/(horizontal-viewport-segments:)\s?(\d)/gi,hn=/(vertical-viewport-segments:)\s?(\d)/gi,cn=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")};function is(e,t){return e.replace(new RegExp(io,"gi"),t)}function Po(e,t){var i=e.matchAll(t);return i===null?[]:Array.from(i,function(o){return o[2]})[0]}function os(e){var t=function(o){var r,s=new RegExp(io,"gi");if(typeof o.matchAll=="function")r=Array.from(o.matchAll(s));else{for(r=[];r[r.length]=s.exec(o););r.length--}return r}(e),i=[[]];return t.forEach(function(o){var r=o[1],s=o[2],n=o[3],h=o[4],a=s.match(an)||[],l=s.match(nn)||[],d=Po(s,hn);d===void 0&&(d=1);var c=Po(s,ln);c===void 0&&(c=1),l=l.filter(function(u){return!u.includes(es)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][c]=""+r+a+l+"{"+n+h+"}"}),i}var Ze=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+Ze);var To,rs=new ts;if(!Ze){var ai=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(To=ai,Promise.all(To.map(function(e){return e.href?fetch(e.href).then(function(t){return t.text()}):e.textContent}))).then(function(e){var t=new DocumentFragment;e.forEach(function(i,o){for(var r,s=is(i,""),n=os(i),h=ai[o].href||"inline",a=0,l=Object.entries(n);a<l.length;a++){var d=l[a],c=d[0],u=d[1];nt[c]==null&&(nt[c]=[]);for(var v=0,b=Object.entries(u);v<b.length;v++){var g=b[v];nt[c][g[0]]="/* origin: "+h+" */"+g[1]}}if(h=="inline"||(r=i,new RegExp(io,"gi").test(r))){var m=document.createElement("style");m.setAttribute("data-css-origin",h),m.textContent=s,t.appendChild(m)}else{var w=document.createElement("link");w.type="text/css",w.rel="stylesheet",w.href=h,t.appendChild(w)}}),ai.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(t),vt()})}var nt=[[]];function Bt(e,t){if(Ze)return e;var i=is(e,""),o=os(e);t&&(nt[t]=[[]]);for(var r=t?nt[t]:nt,s=t?"":"/* origin: inline */",n=0,h=Object.entries(o);n<h.length;n++){var a=h[n],l=a[0],d=a[1];r[l]==null&&(r[l]=[]);for(var c=0,u=Object.entries(d);c<u.length;c++){var v=u[c];r[l][v[0]]=""+s+v[1]}}return r[0][0]=i,i}function vt(e){Ze||(Vo(e),rs.addEventListener("change",function(){return Vo(e)}))}function Vo(e){var t,i=rs,o=null;(t=e?nt[e.nodeName.toLowerCase()]:nt)[i.verticalViewportSegments]&&(o=t[i.verticalViewportSegments][i.horizontalViewportSegments]);var r,s=t[0][0]?t[0][0]:null;if(o){var n=window.visualViewport.segments,h=!1;n.length>1&&(h=!(n[0].height<window.innerHeight));for(var a=0,l=Object.entries(n);a<l.length;a++)for(var d=l[a],c=d[0],u=0,v=Object.entries(d[1]);u<v.length;u++){var b=v[u],g=b[0];r=b[1]+"px",o=o.replace(cn(h?"viewport-segment-"+g+" "+c+" 0":"viewport-segment-"+g+" 0 "+c),r)}var m="__foldables_sheet__",w=function(P,F){for(var C,S=function(E,Ee){var N=typeof Symbol<"u"&&E[Symbol.iterator]||E["@@iterator"];if(N)return(N=N.call(E)).next.bind(N);if(Array.isArray(E)||(N=function(O,Gt){if(O){if(typeof O=="string")return zo(O,Gt);var B=Object.prototype.toString.call(O).slice(8,-1);return B==="Object"&&O.constructor&&(B=O.constructor.name),B==="Map"||B==="Set"?Array.from(O):B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)?zo(O,Gt):void 0}}(E))){N&&(E=N);var Yt=0;return function(){return Yt>=E.length?{done:!0}:{done:!1,value:E[Yt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(P.querySelectorAll("."+m));!(C=S()).done;)C.value.remove();var V=document.createElement("style");V.className=m,V.textContent=F,P===document?document.head.appendChild(V):P.appendChild(V)};if(e){var U=e.shadowRoot;"adoptedStyleSheets"in U&&U.adoptedStyleSheets.length>0?U.adoptedStyleSheets[0].replace(s+o):w(U,o)}else w(document,o)}}var Ni="";function Hi(e){Ni=e}function dn(){if(!Ni){const e=[...document.getElementsByTagName("script")],t=e.find(i=>i.hasAttribute("data-shoelace"));if(t)Hi(t.getAttribute("data-shoelace"));else{const i=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src));let o="";i&&(o=i.getAttribute("src")),Hi(o.split("/").slice(0,-1).join("/"))}}return Ni.replace(/\/$/,"")}var un={name:"default",resolver:e=>`${dn()}/assets/icons/${e}.svg`},pn=un,Uo={caret:`
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
  `},vn={name:"system",resolver:e=>e in Uo?`data:image/svg+xml,${encodeURIComponent(Uo[e])}`:""},fn=vn,mn=[pn,fn],Ii=[];function gn(e){Ii.push(e)}function bn(e){Ii=Ii.filter(t=>t!==e)}function Mo(e){return mn.find(t=>t.name===e)}var li=new Map;function _n(e,t="cors"){if(li.has(e))return li.get(e);const i=fetch(e,{mode:t}).then(async o=>({ok:o.ok,status:o.status,html:await o.text()}));return li.set(e,i),i}var hi=new Map;async function yn(e){if(hi.has(e))return hi.get(e);const t=await _n(e),i={ok:t.ok,status:t.status,svg:null};if(t.ok){const o=document.createElement("div");o.innerHTML=t.html;const r=o.firstElementChild;i.svg=(r==null?void 0:r.tagName.toLowerCase())==="svg"?r.outerHTML:""}return hi.set(e,i),i}var Te=window,oo=Te.ShadowRoot&&(Te.ShadyCSS===void 0||Te.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ro=Symbol(),Ro=new WeakMap,ss=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==ro)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(oo&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=Ro.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ro.set(i,t))}return t}toString(){return this.cssText}},wn=e=>new ss(typeof e=="string"?e:e+"",void 0,ro),at=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new ss(i,e,ro)},$n=(e,t)=>{oo?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const o=document.createElement("style"),r=Te.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)})},Lo=oo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return wn(i)})(e):e,ci,Oe=window,Oo=Oe.trustedTypes,xn=Oo?Oo.emptyScript:"",No=Oe.reactiveElementPolyfillSupport,me={toAttribute(e,t){switch(t){case Boolean:e=e?xn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ns=(e,t)=>t!==e&&(t==t||e==e),di={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:ns},bt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,o)=>{const r=this._$Ep(o,i);r!==void 0&&(this._$Ev.set(r,o),t.push(r))}),t}static createProperty(t,i=di){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,i);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){return{get(){return this[i]},set(r){const s=this[t];this[i]=r,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||di}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,o=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const r of o)this.createProperty(r,i[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(Lo(r))}else t!==void 0&&i.push(Lo(t));return i}static _$Ep(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,o;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return $n(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostConnected)===null||o===void 0?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostDisconnected)===null||o===void 0?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EO(t,i,o=di){var r;const s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){const n=(((r=o.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?o.converter:me).toAttribute(i,o.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,i){var o;const r=this.constructor,s=r._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=r.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:me;this._$El=s,this[s]=h.fromAttribute(i,n.type),this._$El=null}}requestUpdate(t,i,o){let r=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||ns)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let i=!1;const o=this._$AL;try{i=this.shouldUpdate(o),i?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(o)):this._$Ek()}catch(r){throw i=!1,this._$Ek(),r}i&&this._$AE(o)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(o=>{var r;return(r=o.hostUpdated)===null||r===void 0?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,o)=>this._$EO(o,this[o],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};bt.finalized=!0,bt.elementProperties=new Map,bt.elementStyles=[],bt.shadowRootOptions={mode:"open"},No==null||No({ReactiveElement:bt}),((ci=Oe.reactiveElementVersions)!==null&&ci!==void 0?ci:Oe.reactiveElementVersions=[]).push("1.6.1");var ui,Ne=window,Vt=Ne.trustedTypes,Ho=Vt?Vt.createPolicy("lit-html",{createHTML:e=>e}):void 0,st=`lit$${(Math.random()+"").slice(9)}$`,as="?"+st,An=`<${as}>`,Ut=document,ge=(e="")=>Ut.createComment(e),be=e=>e===null||typeof e!="object"&&typeof e!="function",ls=Array.isArray,Sn=e=>ls(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Io=/-->/g,Do=/>/g,dt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fo=/'/g,Bo=/"/g,hs=/^(?:script|style|textarea|title)$/i,En=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Z=En(1),W=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),jo=new WeakMap,At=Ut.createTreeWalker(Ut,129,null,!1),Cn=(e,t)=>{const i=e.length-1,o=[];let r,s=t===2?"<svg>":"",n=te;for(let a=0;a<i;a++){const l=e[a];let d,c,u=-1,v=0;for(;v<l.length&&(n.lastIndex=v,c=n.exec(l),c!==null);)v=n.lastIndex,n===te?c[1]==="!--"?n=Io:c[1]!==void 0?n=Do:c[2]!==void 0?(hs.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=dt):c[3]!==void 0&&(n=dt):n===dt?c[0]===">"?(n=r??te,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?dt:c[3]==='"'?Bo:Fo):n===Bo||n===Fo?n=dt:n===Io||n===Do?n=te:(n=dt,r=void 0);const b=n===dt&&e[a+1].startsWith("/>")?" ":"";s+=n===te?l+An:u>=0?(o.push(d),l.slice(0,u)+"$lit$"+l.slice(u)+st+b):l+st+(u===-2?(o.push(void 0),a):b)}const h=s+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ho!==void 0?Ho.createHTML(h):h,o]},He=class{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,d]=Cn(t,i);if(this.el=He.createElement(l,o),At.currentNode=this.el.content,i===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(r=At.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(st)){const v=d[n++];if(c.push(u),v!==void 0){const b=r.getAttribute(v.toLowerCase()+"$lit$").split(st),g=/([.?@])?(.*)/.exec(v);a.push({type:1,index:s,name:g[2],strings:b,ctor:g[1]==="."?zn:g[1]==="?"?Tn:g[1]==="@"?Vn:Ye})}else a.push({type:6,index:s})}for(const u of c)r.removeAttribute(u)}if(hs.test(r.tagName)){const c=r.textContent.split(st),u=c.length-1;if(u>0){r.textContent=Vt?Vt.emptyScript:"";for(let v=0;v<u;v++)r.append(c[v],ge()),At.nextNode(),a.push({type:2,index:++s});r.append(c[u],ge())}}}else if(r.nodeType===8)if(r.data===as)a.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(st,c+1))!==-1;)a.push({type:7,index:s}),c+=st.length-1}s++}}static createElement(t,i){const o=Ut.createElement("template");return o.innerHTML=t,o}};function Mt(e,t,i=e,o){var r,s,n,h;if(t===W)return t;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const l=be(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,o)),o!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=Mt(e,a._$AS(e,t.values),a,o)),t}var kn=class{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:o},parts:r}=this._$AD,s=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:Ut).importNode(o,!0);At.currentNode=s;let n=At.nextNode(),h=0,a=0,l=r[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Je(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new Un(n,this,t)),this.u.push(d),l=r[++a]}h!==(l==null?void 0:l.index)&&(n=At.nextNode(),h++)}return s}p(t){let i=0;for(const o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}},Je=class{constructor(t,i,o,r){var s;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cm=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Mt(this,t,i),be(t)?t===T||t==null||t===""?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==W&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Sn(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==T&&be(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ut.createTextNode(t)),this._$AH=t}$(t){var i;const{values:o,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=He.createElement(r.h,this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(o);else{const n=new kn(s,this),h=n.v(this.options);n.p(o),this.T(h),this._$AH=n}}_$AC(t){let i=jo.get(t.strings);return i===void 0&&jo.set(t.strings,i=new He(t)),i}k(t){ls(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new Je(this.O(ge()),this.O(ge()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},Ye=class{constructor(e,t,i,o,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=Mt(this,e,t,0),s=!be(e)||e!==this._$AH&&e!==W,s&&(this._$AH=e);else{const n=e;let h,a;for(e=r[0],h=0;h<r.length-1;h++)a=Mt(this,n[i+h],t,h),a===W&&(a=this._$AH[h]),s||(s=!be(a)||a!==this._$AH[h]),a===T?e=T:e!==T&&(e+=(a??"")+r[h+1]),this._$AH[h]=a}s&&!o&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},zn=class extends Ye{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}},Pn=Vt?Vt.emptyScript:"",Tn=class extends Ye{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,Pn):this.element.removeAttribute(this.name)}},Vn=class extends Ye{constructor(t,i,o,r,s){super(t,i,o,r,s),this.type=5}_$AI(t,i=this){var o;if((t=(o=Mt(this,t,i,0))!==null&&o!==void 0?o:T)===W)return;const r=this._$AH,s=t===T&&r!==T||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==T&&(r===T||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,o;typeof this._$AH=="function"?this._$AH.call((o=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},Un=class{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Mt(this,t)}},qo=Ne.litHtmlPolyfillSupport;qo==null||qo(He,Je),((ui=Ne.litHtmlVersions)!==null&&ui!==void 0?ui:Ne.litHtmlVersions=[]).push("2.6.1");var Mn=(e,t,i)=>{var o,r;const s=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:t;let n=s._$litPart$;if(n===void 0){const h=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=n=new Je(t.insertBefore(ge(),h),h,void 0,i??{})}return n._$AI(e),n},pi,vi,he=class extends bt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Mn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return W}};he.finalized=!0,he._$litElement$=!0,(pi=globalThis.litElementHydrateSupport)===null||pi===void 0||pi.call(globalThis,{LitElement:he});var Wo=globalThis.litElementPolyfillSupport;Wo==null||Wo({LitElement:he});((vi=globalThis.litElementVersions)!==null&&vi!==void 0?vi:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var jt=at`
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
`,Rn=at`
  ${jt}

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
`,ot={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},so=e=>(...t)=>({_$litDirective$:e,values:t}),no=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var cs=Object.defineProperty,Ln=Object.defineProperties,On=Object.getOwnPropertyDescriptor,Nn=Object.getOwnPropertyDescriptors,Ko=Object.getOwnPropertySymbols,Hn=Object.prototype.hasOwnProperty,In=Object.prototype.propertyIsEnumerable,Zo=(e,t,i)=>t in e?cs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Q=(e,t)=>{for(var i in t||(t={}))Hn.call(t,i)&&Zo(e,i,t[i]);if(Ko)for(var i of Ko(t))In.call(t,i)&&Zo(e,i,t[i]);return e},qt=(e,t)=>Ln(e,Nn(t)),p=(e,t,i,o)=>{for(var r=o>1?void 0:o?On(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&cs(t,i,r),r};function lt(e,t){const i=Q({waitUntilFirstUpdate:!1},t);return(o,r)=>{const{update:s}=o,n=Array.isArray(e)?e:[e];o.update=function(h){n.forEach(a=>{const l=a;if(h.has(l)){const d=h.get(l),c=this[l];d!==c&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](d,c)}}),s.call(this,h)}}}var Wt=e=>t=>typeof t=="function"?((i,o)=>(customElements.define(i,o),o))(e,t):((i,o)=>{const{kind:r,elements:s}=o;return{kind:r,elements:s,finisher(n){customElements.define(i,n)}}})(e,t),Dn=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?qt(Q({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function f(e){return(t,i)=>i!==void 0?((o,r,s)=>{r.constructor.createProperty(s,o)})(e,t,i):Dn(e,t)}function Se(e){return f(qt(Q({},e),{state:!0}))}var Fn=({finisher:e,descriptor:t})=>(i,o)=>{var r;if(o===void 0){const s=(r=i.originalKey)!==null&&r!==void 0?r:i.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:qt(Q({},i),{key:s});return e!=null&&(n.finisher=function(h){e(h,s)}),n}{const s=i.constructor;t!==void 0&&Object.defineProperty(i,o,t(o)),e==null||e(s,o)}};function Ge(e,t){return Fn({descriptor:i=>{const o={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const r=typeof i=="symbol"?Symbol():"__"+i;o.get=function(){var s,n;return this[r]===void 0&&(this[r]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[r]}}return o}})}var fi;((fi=window.HTMLSlotElement)===null||fi===void 0?void 0:fi.prototype.assignedElements)!=null;var ht=class extends he{emit(e,t){const i=new CustomEvent(e,Q({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}};p([f()],ht.prototype,"dir",2);p([f()],ht.prototype,"lang",2);/*! Bundled license information:

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
*/var Di=class extends no{constructor(e){if(super(e),this.it=T,e.type!==ot.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===T||e==null)return this._t=void 0,this.it=e;if(e===W)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Di.directiveName="unsafeHTML",Di.resultType=1;var Fi=class extends Di{};Fi.directiveName="unsafeSVG",Fi.resultType=2;var Bn=so(Fi),mi,Y=class extends ht{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),gn(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),bn(this)}getUrl(){const e=Mo(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=Mo(this.library),i=this.getUrl();if(mi||(mi=new DOMParser),i)try{const o=await yn(i);if(i!==this.getUrl())return;if(o.ok){const s=mi.parseFromString(o.svg,"text/html").body.querySelector("svg");s!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,s),this.svg=s.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}render(){return Z` ${Bn(this.svg)} `}};Y.styles=Rn;p([Se()],Y.prototype,"svg",2);p([f({reflect:!0})],Y.prototype,"name",2);p([f()],Y.prototype,"src",2);p([f()],Y.prototype,"label",2);p([f({reflect:!0})],Y.prototype,"library",2);p([lt("label")],Y.prototype,"handleLabelChange",1);p([lt(["name","src","library"])],Y.prototype,"setIcon",1);Y=p([Wt("sl-icon")],Y);/*! Bundled license information:

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
*/function Jo(e,t){return new Promise(i=>{function o(r){r.target===e&&(e.removeEventListener(t,o),i())}e.addEventListener(t,o)})}function Yo(e,t,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,qt(Q({},i),{duration:jn()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function jn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Go(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{const o=requestAnimationFrame(i);t.addEventListener("cancel",()=>o,{once:!0}),t.addEventListener("finish",()=>o,{once:!0}),t.cancel()})))}var ds=new Map,qn=new WeakMap;function Wn(e){return e??{keyframes:[],options:{duration:0}}}function Xo(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function us(e,t){ds.set(e,Wn(t))}function Qo(e,t,i){const o=qn.get(e);if(o!=null&&o[t])return Xo(o[t],i.dir);const r=ds.get(t);return r?Xo(r,i.dir):{keyframes:[],options:{duration:0}}}var Bi=new Set,Kn=new MutationObserver(fs),wt=new Map,ps=document.documentElement.dir||"ltr",vs=document.documentElement.lang||navigator.language,ce;Kn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Zn(...e){e.map(t=>{const i=t.$code.toLowerCase();wt.has(i)?wt.set(i,Object.assign(Object.assign({},wt.get(i)),t)):wt.set(i,t),ce||(ce=t)}),fs()}function fs(){ps=document.documentElement.dir||"ltr",vs=document.documentElement.lang||navigator.language,[...Bi.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Jn=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Bi.add(this.host)}hostDisconnected(){Bi.delete(this.host)}dir(){return`${this.host.dir||ps}`.toLowerCase()}lang(){return`${this.host.lang||vs}`.toLowerCase()}term(e,...t){var i,o;const r=new Intl.Locale(this.lang()),s=r==null?void 0:r.language.toLowerCase(),n=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",h=wt.get(`${s}-${n}`),a=wt.get(s);let l;if(h&&h[e])l=h[e];else if(a&&a[e])l=a[e];else if(ce&&ce[e])l=ce[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof l=="function"?l(...t):l}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}},Xe=class extends Jn{},Yn={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Zn(Yn);var ao=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},Gn=at`
  ${jt}

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
`,_e=so(class extends no{constructor(e){var t;if(super(e),e.type!==ot.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,o;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.nt.add(s);return this.render(t)}const r=e.element.classList;this.nt.forEach(s=>{s in t||(r.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((o=this.st)===null||o===void 0)&&o.has(s)||(n?(r.add(s),this.nt.add(s)):(r.remove(s),this.nt.delete(s)))}return W}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var ft=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),G=class extends ht{constructor(){super(...arguments),this.hasSlotController=new ao(this,"icon","suffix"),this.localize=new Xe(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Go(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=Qo(this,"alert.show",{dir:this.localize.dir()});await Yo(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Go(this.base);const{keyframes:e,options:t}=Qo(this,"alert.hide",{dir:this.localize.dir()});await Yo(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Jo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Jo(this,"sl-after-hide")}async toast(){return new Promise(e=>{ft.parentElement===null&&document.body.append(ft),ft.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ft.removeChild(this),e(),ft.querySelector("sl-alert")===null&&ft.remove()},{once:!0})})}render(){return Z`
      <div
        part="base"
        class=${_e({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?Z`
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
    `}};G.styles=Gn;p([Ge('[part~="base"]')],G.prototype,"base",2);p([f({type:Boolean,reflect:!0})],G.prototype,"open",2);p([f({type:Boolean,reflect:!0})],G.prototype,"closable",2);p([f({reflect:!0})],G.prototype,"variant",2);p([f({type:Number})],G.prototype,"duration",2);p([lt("open",{waitUntilFirstUpdate:!0})],G.prototype,"handleOpenChange",1);p([lt("duration")],G.prototype,"handleDurationChange",1);G=p([Wt("sl-alert")],G);us("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});us("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var Xn=at`
  ${jt}

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
`,ms=Symbol.for(""),Qn=e=>{if((e==null?void 0:e.r)===ms)return e==null?void 0:e._$litStatic$},Ie=(e,...t)=>({_$litStatic$:t.reduce((i,o,r)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[r+1],e[0]),r:ms}),tr=new Map,ta=e=>(t,...i)=>{const o=i.length;let r,s;const n=[],h=[];let a,l=0,d=!1;for(;l<o;){for(a=t[l];l<o&&(s=i[l],(r=Qn(s))!==void 0);)a+=r+t[++l],d=!0;h.push(s),n.push(a),l++}if(l===o&&n.push(t[o]),d){const c=n.join("$$lit$$");(t=tr.get(c))===void 0&&(n.raw=n,tr.set(c,t=n)),i=h}return e(t,...i)},Ve=ta(Z);/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var x=e=>e??T;/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var q=class extends ht{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Ie`a`:Ie`button`;return Ve`
      <${t}
        part="base"
        class=${_e({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${x(e?void 0:this.disabled)}
        type=${x(e?void 0:"button")}
        href=${x(e?this.href:void 0)}
        target=${x(e?this.target:void 0)}
        download=${x(e?this.download:void 0)}
        rel=${x(e&&this.target?"noreferrer noopener":void 0)}
        role=${x(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${x(this.name)}
          library=${x(this.library)}
          src=${x(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};q.styles=Xn;p([Ge(".icon-button")],q.prototype,"button",2);p([Se()],q.prototype,"hasFocus",2);p([f()],q.prototype,"name",2);p([f()],q.prototype,"library",2);p([f()],q.prototype,"src",2);p([f()],q.prototype,"href",2);p([f()],q.prototype,"target",2);p([f()],q.prototype,"download",2);p([f()],q.prototype,"label",2);p([f({type:Boolean,reflect:!0})],q.prototype,"disabled",2);q=p([Wt("sl-icon-button")],q);var ea=at`
  ${jt}

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
`,ee=new WeakMap,ie=new WeakMap,gi=new Set,Ce=new WeakMap,gs=class{constructor(e,t){(this.host=e).addController(this),this.options=Q({form:i=>{if(i.hasAttribute("form")&&i.getAttribute("form")!==""){const o=i.getRootNode(),r=i.getAttribute("form");if(r)return o.getElementById(r)}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null?o:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,setValue:(i,o)=>i.value=o,assumeInteractionOn:["sl-input"]},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Ce.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ce.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,ee.has(this.form)?ee.get(this.form).add(this.host):ee.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ie.has(this.form)||(ie.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=ee.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ie.has(this.form)&&(this.form.reportValidity=ie.get(this.form),ie.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="sl-button";!t&&!r&&typeof i=="string"&&i.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(s=>{e.formData.append(i,s.toString())}):e.formData.append(i,o.toString()))}handleFormSubmit(e){var t;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=ee.get(this.form))==null||t.forEach(r=>{this.setUserInteracted(r,!0)})),this.form&&!this.form.noValidate&&!i&&!o(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ce.set(this.host,[])}handleInteraction(e){const t=Ce.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){t?gi.add(e):gi.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&i.setAttribute(o,t.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,i=Boolean(gi.has(t)),o=Boolean(t.required);t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},lo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(qt(Q({},lo),{valid:!1,valueMissing:!0}));Object.freeze(qt(Q({},lo),{valid:!1,customError:!0}));var A=class extends ht{constructor(){super(...arguments),this.formControlController=new gs(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),i=e.getAttribute("form");return t.getElementById(i)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new ao(this,"[default]","prefix","suffix"),this.localize=new Xe(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:lo}get validationMessage(){return this.isButton()?this.button.validationMessage:""}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleHostClick(e){(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Ie`a`:Ie`button`;return Ve`
      <${t}
        part="base"
        class=${_e({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${x(e?void 0:this.disabled)}
        type=${x(e?void 0:this.type)}
        title=${this.title}
        name=${x(e?void 0:this.name)}
        value=${x(e?void 0:this.value)}
        href=${x(e?this.href:void 0)}
        target=${x(e?this.target:void 0)}
        download=${x(e?this.download:void 0)}
        rel=${x(e?this.rel:void 0)}
        role=${x(e?void 0:"button")}
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
        ${this.caret?Ve` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ve`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};A.styles=ea;p([Ge(".button")],A.prototype,"button",2);p([Se()],A.prototype,"hasFocus",2);p([Se()],A.prototype,"invalid",2);p([f()],A.prototype,"title",2);p([f({reflect:!0})],A.prototype,"variant",2);p([f({reflect:!0})],A.prototype,"size",2);p([f({type:Boolean,reflect:!0})],A.prototype,"caret",2);p([f({type:Boolean,reflect:!0})],A.prototype,"disabled",2);p([f({type:Boolean,reflect:!0})],A.prototype,"loading",2);p([f({type:Boolean,reflect:!0})],A.prototype,"outline",2);p([f({type:Boolean,reflect:!0})],A.prototype,"pill",2);p([f({type:Boolean,reflect:!0})],A.prototype,"circle",2);p([f()],A.prototype,"type",2);p([f()],A.prototype,"name",2);p([f()],A.prototype,"value",2);p([f()],A.prototype,"href",2);p([f()],A.prototype,"target",2);p([f()],A.prototype,"rel",2);p([f()],A.prototype,"download",2);p([f()],A.prototype,"form",2);p([f({attribute:"formaction"})],A.prototype,"formAction",2);p([f({attribute:"formenctype"})],A.prototype,"formEnctype",2);p([f({attribute:"formmethod"})],A.prototype,"formMethod",2);p([f({attribute:"formnovalidate",type:Boolean})],A.prototype,"formNoValidate",2);p([f({attribute:"formtarget"})],A.prototype,"formTarget",2);p([lt("disabled",{waitUntilFirstUpdate:!0})],A.prototype,"handleDisabledChange",1);A=p([Wt("sl-button")],A);var ia=at`
  ${jt}

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
`,ji=class extends ht{constructor(){super(...arguments),this.localize=new Xe(this)}render(){return Z`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ji.styles=ia;ji=p([Wt("sl-spinner")],ji);var oa=at`
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

  .form-control--has-label.form-control--large .form-control__label {
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
`,ra=at`
  ${jt}
  ${oa}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide Firefox's clear button on date and time inputs */
  .input--is-firefox input[type='date'],
  .input--is-firefox input[type='time'] {
    clip-path: inset(0 2em 0 0);
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,sa=e=>e.strings===void 0,na={},aa=(e,t=na)=>e._$AH=t,la=so(class extends no{constructor(e){if(super(e),e.type!==ot.PROPERTY&&e.type!==ot.ATTRIBUTE&&e.type!==ot.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!sa(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===W||t===T)return t;const i=e.element,o=e.name;if(e.type===ot.PROPERTY){if(t===i[o])return W}else if(e.type===ot.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(o))return W}else if(e.type===ot.ATTRIBUTE&&i.getAttribute(o)===t+"")return W;return aa(e),t}});/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var ha=(e="value")=>(t,i)=>{const o=t.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,n,h){var a;const l=o.getPropertyOptions(e),d=typeof l.attribute=="string"?l.attribute:e;if(s===d){const c=l.converter||me,v=(typeof c=="function"?c:(a=c==null?void 0:c.fromAttribute)!=null?a:me.fromAttribute)(h,l.type);this[e]!==v&&(this[i]=v)}r.call(this,s,n,h)}},er,ca=(er=navigator.userAgentData)==null?void 0:er.brands.some(e=>e.brand.includes("Chromium")),da=ca?!1:navigator.userAgent.includes("Firefox"),$=class extends ht{constructor(){super(...arguments),this.formControlController=new gs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ao(this,"help-text","label"),this.localize=new Xe(this),this.hasFocus=!1,this.title="",this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsDate)!=null?t:null}set valueAsDate(e){const t=document.createElement("input");t.type="date",t.valueAsDate=e,this.value=t.value}get valueAsNumber(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsNumber)!=null?t:parseFloat(this.value)}set valueAsNumber(e){const t=document.createElement("input");t.type="number",t.valueAsNumber=e,this.value=t.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,o){this.input.setRangeText(e,t,i,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,o=this.helpText?!0:!!t,r=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return Z`
      <div
        part="form-control"
        class=${_e({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
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
            class=${_e({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":da})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${x(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${x(this.placeholder)}
              minlength=${x(this.minlength)}
              maxlength=${x(this.maxlength)}
              min=${x(this.min)}
              max=${x(this.max)}
              step=${x(this.step)}
              .value=${la(this.value)}
              autocapitalize=${x(this.type==="password"?"off":this.autocapitalize)}
              autocomplete=${x(this.type==="password"?"off":this.autocomplete)}
              autocorrect=${x(this.type==="password"?"off":this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${x(this.pattern)}
              enterkeyhint=${x(this.enterkeyhint)}
              inputmode=${x(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?Z`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}
            ${this.passwordToggle&&!this.disabled?Z`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?Z`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:Z`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
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
      </div>
    `}};$.styles=ra;p([Ge(".input__control")],$.prototype,"input",2);p([Se()],$.prototype,"hasFocus",2);p([f()],$.prototype,"title",2);p([f({reflect:!0})],$.prototype,"type",2);p([f()],$.prototype,"name",2);p([f()],$.prototype,"value",2);p([ha()],$.prototype,"defaultValue",2);p([f({reflect:!0})],$.prototype,"size",2);p([f({type:Boolean,reflect:!0})],$.prototype,"filled",2);p([f({type:Boolean,reflect:!0})],$.prototype,"pill",2);p([f()],$.prototype,"label",2);p([f({attribute:"help-text"})],$.prototype,"helpText",2);p([f({type:Boolean})],$.prototype,"clearable",2);p([f({type:Boolean,reflect:!0})],$.prototype,"disabled",2);p([f()],$.prototype,"placeholder",2);p([f({type:Boolean,reflect:!0})],$.prototype,"readonly",2);p([f({attribute:"password-toggle",type:Boolean})],$.prototype,"passwordToggle",2);p([f({attribute:"password-visible",type:Boolean})],$.prototype,"passwordVisible",2);p([f({attribute:"no-spin-buttons",type:Boolean})],$.prototype,"noSpinButtons",2);p([f({reflect:!0})],$.prototype,"form",2);p([f({type:Boolean,reflect:!0})],$.prototype,"required",2);p([f()],$.prototype,"pattern",2);p([f({type:Number})],$.prototype,"minlength",2);p([f({type:Number})],$.prototype,"maxlength",2);p([f({type:Number})],$.prototype,"min",2);p([f({type:Number})],$.prototype,"max",2);p([f()],$.prototype,"step",2);p([f()],$.prototype,"autocapitalize",2);p([f()],$.prototype,"autocorrect",2);p([f()],$.prototype,"autocomplete",2);p([f({type:Boolean})],$.prototype,"autofocus",2);p([f()],$.prototype,"enterkeyhint",2);p([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],$.prototype,"spellcheck",2);p([f()],$.prototype,"inputmode",2);p([lt("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);p([lt("step",{waitUntilFirstUpdate:!0})],$.prototype,"handleStepChange",1);p([lt("value",{waitUntilFirstUpdate:!0})],$.prototype,"handleValueChange",1);$=p([Wt("sl-input")],$);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=window,ho=Ue.ShadowRoot&&(Ue.ShadyCSS===void 0||Ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,co=Symbol(),ir=new WeakMap;let bs=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==co)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(ho&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=ir.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&ir.set(i,t))}return t}toString(){return this.cssText}};const _s=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new bs(i,e,co)},or=ho?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return(o=>new bs(typeof o=="string"?o:o+"",void 0,co))(i)})(e):e;var bi;const De=window,rr=De.trustedTypes,ua=rr?rr.emptyScript:"",sr=De.reactiveElementPolyfillSupport,qi={toAttribute(e,t){switch(t){case Boolean:e=e?ua:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ys=(e,t)=>t!==e&&(t==t||e==e),_i={attribute:!0,type:String,converter:qi,reflect:!1,hasChanged:ys};let _t=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=_i){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||_i}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(or(o))}else e!==void 0&&t.push(or(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{ho?i.adoptedStyleSheets=o.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):o.forEach(r=>{const s=document.createElement("style"),n=Ue.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,i.appendChild(s)})})(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=_i){var o;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:qi).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,r=o._$Ev.get(e);if(r!==void 0&&this._$El!==r){const s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:qi;this._$El=r,this[r]=n.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ys)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yi;_t.finalized=!0,_t.elementProperties=new Map,_t.elementStyles=[],_t.shadowRootOptions={mode:"open"},sr==null||sr({ReactiveElement:_t}),((bi=De.reactiveElementVersions)!==null&&bi!==void 0?bi:De.reactiveElementVersions=[]).push("1.6.1");const Fe=window,Rt=Fe.trustedTypes,nr=Rt?Rt.createPolicy("lit-html",{createHTML:e=>e}):void 0,et=`lit$${(Math.random()+"").slice(9)}$`,ws="?"+et,pa=`<${ws}>`,Lt=document,ye=(e="")=>Lt.createComment(e),we=e=>e===null||typeof e!="object"&&typeof e!="function",ar=Array.isArray,oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lr=/-->/g,hr=/>/g,ut=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),cr=/'/g,dr=/"/g,ur=/^(?:script|style|textarea|title)$/i,Kt=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),Ot=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),pr=new WeakMap,St=Lt.createTreeWalker(Lt,129,null,!1);let Wi=class $s{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,d]=((c,u)=>{const v=c.length-1,b=[];let g,m=u===2?"<svg>":"",w=oe;for(let P=0;P<v;P++){const F=c[P];let C,S,V=-1,E=0;for(;E<F.length&&(w.lastIndex=E,S=w.exec(F),S!==null);)E=w.lastIndex,w===oe?S[1]==="!--"?w=lr:S[1]!==void 0?w=hr:S[2]!==void 0?(ur.test(S[2])&&(g=RegExp("</"+S[2],"g")),w=ut):S[3]!==void 0&&(w=ut):w===ut?S[0]===">"?(w=g??oe,V=-1):S[1]===void 0?V=-2:(V=w.lastIndex-S[2].length,C=S[1],w=S[3]===void 0?ut:S[3]==='"'?dr:cr):w===dr||w===cr?w=ut:w===lr||w===hr?w=oe:(w=ut,g=void 0);const Ee=w===ut&&c[P+1].startsWith("/>")?" ":"";m+=w===oe?F+pa:V>=0?(b.push(C),F.slice(0,V)+"$lit$"+F.slice(V)+et+Ee):F+et+(V===-2?(b.push(void 0),P):Ee)}const U=m+(c[v]||"<?>")+(u===2?"</svg>":"");if(!Array.isArray(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return[nr!==void 0?nr.createHTML(U):U,b]})(t,i);if(this.el=$s.createElement(l,o),St.currentNode=this.el.content,i===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(r=St.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(et)){const v=d[n++];if(c.push(u),v!==void 0){const b=r.getAttribute(v.toLowerCase()+"$lit$").split(et),g=/([.?@])?(.*)/.exec(v);a.push({type:1,index:s,name:g[2],strings:b,ctor:g[1]==="."?va:g[1]==="?"?ma:g[1]==="@"?ga:Qe})}else a.push({type:6,index:s})}for(const u of c)r.removeAttribute(u)}if(ur.test(r.tagName)){const c=r.textContent.split(et),u=c.length-1;if(u>0){r.textContent=Rt?Rt.emptyScript:"";for(let v=0;v<u;v++)r.append(c[v],ye()),St.nextNode(),a.push({type:2,index:++s});r.append(c[u],ye())}}}else if(r.nodeType===8)if(r.data===ws)a.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(et,c+1))!==-1;)a.push({type:7,index:s}),c+=et.length-1}s++}}static createElement(t,i){const o=Lt.createElement("template");return o.innerHTML=t,o}};function Nt(e,t,i=e,o){var r,s,n,h;if(t===Ot)return t;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const l=we(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,o)),o!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=Nt(e,a._$AS(e,t.values),a,o)),t}let uo=class xs{constructor(t,i,o,r){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cm=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Nt(this,t,i),we(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==Ot&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(o=>ar(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function")(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==L&&we(this._$AH)?this._$AA.nextSibling.data=t:this.T(Lt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:o,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Wi.createElement(r.h,this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(o);else{const n=new class{constructor(a,l){this.u=[],this._$AN=void 0,this._$AD=a,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(a){var l;const{el:{content:d},parts:c}=this._$AD,u=((l=a==null?void 0:a.creationScope)!==null&&l!==void 0?l:Lt).importNode(d,!0);St.currentNode=u;let v=St.nextNode(),b=0,g=0,m=c[0];for(;m!==void 0;){if(b===m.index){let w;m.type===2?w=new uo(v,v.nextSibling,this,a):m.type===1?w=new m.ctor(v,m.name,m.strings,this,a):m.type===6&&(w=new ba(v,this,a)),this.u.push(w),m=c[++g]}b!==(m==null?void 0:m.index)&&(v=St.nextNode(),b++)}return u}p(a){let l=0;for(const d of this.u)d!==void 0&&(d.strings!==void 0?(d._$AI(a,d,l),l+=d.strings.length-2):d._$AI(a[l])),l++}}(s,this),h=n.v(this.options);n.p(o),this.T(h),this._$AH=n}}_$AC(t){let i=pr.get(t.strings);return i===void 0&&pr.set(t.strings,i=new Wi(t)),i}k(t){ar(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new xs(this.O(ye()),this.O(ye()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},Qe=class{constructor(e,t,i,o,r){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=Nt(this,e,t,0),s=!we(e)||e!==this._$AH&&e!==Ot,s&&(this._$AH=e);else{const n=e;let h,a;for(e=r[0],h=0;h<r.length-1;h++)a=Nt(this,n[i+h],t,h),a===Ot&&(a=this._$AH[h]),s||(s=!we(a)||a!==this._$AH[h]),a===L?e=L:e!==L&&(e+=(a??"")+r[h+1]),this._$AH[h]=a}s&&!o&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},va=class extends Qe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}};const fa=Rt?Rt.emptyScript:"";let ma=class extends Qe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==L?this.element.setAttribute(this.name,fa):this.element.removeAttribute(this.name)}},ga=class extends Qe{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Nt(this,e,t,0))!==null&&i!==void 0?i:L)===Ot)return;const o=this._$AH,r=e===L&&o!==L||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==L&&(o===L||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},ba=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Nt(this,e)}};const vr=Fe.litHtmlPolyfillSupport;vr==null||vr(Wi,uo),((yi=Fe.litHtmlVersions)!==null&&yi!==void 0?yi:Fe.litHtmlVersions=[]).push("2.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wi,$i;let Et=class extends _t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((i,o,r)=>{var s,n;const h=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:o;let a=h._$litPart$;if(a===void 0){const l=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;h._$litPart$=a=new uo(o.insertBefore(ye(),l),l,void 0,r??{})}return a._$AI(i),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ot}};Et.finalized=!0,Et._$litElement$=!0,(wi=globalThis.litElementHydrateSupport)===null||wi===void 0||wi.call(globalThis,{LitElement:Et});const fr=globalThis.litElementPolyfillSupport;fr==null||fr({LitElement:Et}),(($i=globalThis.litElementVersions)!==null&&$i!==void 0?$i:globalThis.litElementVersions=[]).push("3.2.2");var xi,Ai,Me=window,po=Me.ShadowRoot&&(Me.ShadyCSS===void 0||Me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vo=Symbol(),mr=new WeakMap,As=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==vo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(po&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=mr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&mr.set(t,e))}return e}toString(){return this.cssText}},Si=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new As(i,e,vo)},gr=po?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return(o=>new As(typeof o=="string"?o:o+"",void 0,vo))(i)})(e):e,Be=window,br=Be.trustedTypes,_a=br?br.emptyScript:"",_r=Be.reactiveElementPolyfillSupport,$e={toAttribute(e,t){switch(t){case Boolean:e=e?_a:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Ss=(e,t)=>t!==e&&(t==t||e==e),Ei={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:Ss},yt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=Ei){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ei}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(gr(o))}else e!==void 0&&t.push(gr(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{po?i.adoptedStyleSheets=o.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):o.forEach(r=>{const s=document.createElement("style"),n=Me.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,i.appendChild(s)})})(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Ei){var o;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:$e).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,r=o._$Ev.get(e);if(r!==void 0&&this._$El!==r){const s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:$e;this._$El=r,this[r]=n.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ss)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};yt.finalized=!0,yt.elementProperties=new Map,yt.elementStyles=[],yt.shadowRootOptions={mode:"open"},_r==null||_r({ReactiveElement:yt}),((xi=Be.reactiveElementVersions)!==null&&xi!==void 0?xi:Be.reactiveElementVersions=[]).push("1.6.1");var yr,je=window,Ht=je.trustedTypes,wr=Ht?Ht.createPolicy("lit-html",{createHTML:e=>e}):void 0,it=`lit$${(Math.random()+"").slice(9)}$`,Es="?"+it,ya=`<${Es}>`,It=document,xe=(e="")=>It.createComment(e),Ae=e=>e===null||typeof e!="object"&&typeof e!="function",$r=Array.isArray,re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xr=/-->/g,Ar=/>/g,pt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sr=/'/g,Er=/"/g,Cr=/^(?:script|style|textarea|title)$/i,kr=(yr=1,(e,...t)=>({_$litType$:yr,strings:e,values:t})),K=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),zr=new WeakMap,Ct=It.createTreeWalker(It,129,null,!1),qe=class{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0;const n=e.length-1,h=this.parts,[a,l]=((d,c)=>{const u=d.length-1,v=[];let b,g=c===2?"<svg>":"",m=re;for(let U=0;U<u;U++){const P=d[U];let F,C,S=-1,V=0;for(;V<P.length&&(m.lastIndex=V,C=m.exec(P),C!==null);)V=m.lastIndex,m===re?C[1]==="!--"?m=xr:C[1]!==void 0?m=Ar:C[2]!==void 0?(Cr.test(C[2])&&(b=RegExp("</"+C[2],"g")),m=pt):C[3]!==void 0&&(m=pt):m===pt?C[0]===">"?(m=b??re,S=-1):C[1]===void 0?S=-2:(S=m.lastIndex-C[2].length,F=C[1],m=C[3]===void 0?pt:C[3]==='"'?Er:Sr):m===Er||m===Sr?m=pt:m===xr||m===Ar?m=re:(m=pt,b=void 0);const E=m===pt&&d[U+1].startsWith("/>")?" ":"";g+=m===re?P+ya:S>=0?(v.push(F),P.slice(0,S)+"$lit$"+P.slice(S)+it+E):P+it+(S===-2?(v.push(void 0),U):E)}const w=g+(d[u]||"<?>")+(c===2?"</svg>":"");if(!Array.isArray(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return[wr!==void 0?wr.createHTML(w):w,v]})(e,t);if(this.el=qe.createElement(a,i),Ct.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(o=Ct.nextNode())!==null&&h.length<n;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const c of o.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(it)){const u=l[s++];if(d.push(c),u!==void 0){const v=o.getAttribute(u.toLowerCase()+"$lit$").split(it),b=/([.?@])?(.*)/.exec(u);h.push({type:1,index:r,name:b[2],strings:v,ctor:b[1]==="."?wa:b[1]==="?"?xa:b[1]==="@"?Aa:ti})}else h.push({type:6,index:r})}for(const c of d)o.removeAttribute(c)}if(Cr.test(o.tagName)){const d=o.textContent.split(it),c=d.length-1;if(c>0){o.textContent=Ht?Ht.emptyScript:"";for(let u=0;u<c;u++)o.append(d[u],xe()),Ct.nextNode(),h.push({type:2,index:++r});o.append(d[c],xe())}}}else if(o.nodeType===8)if(o.data===Es)h.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(it,d+1))!==-1;)h.push({type:7,index:r}),d+=it.length-1}r++}}static createElement(e,t){const i=It.createElement("template");return i.innerHTML=e,i}};function Dt(e,t,i=e,o){var r,s,n,h;if(t===K)return t;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const l=Ae(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,o)),o!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=Dt(e,a._$AS(e,t.values),a,o)),t}var We=class{constructor(e,t,i,o){var r;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cm=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Dt(this,e,t),Ae(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==K&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):(i=>$r(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function")(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==M&&Ae(this._$AH)?this._$AA.nextSibling.data=e:this.T(It.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=qe.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const s=new class{constructor(h,a){this.u=[],this._$AN=void 0,this._$AD=h,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(h){var a;const{el:{content:l},parts:d}=this._$AD,c=((a=h==null?void 0:h.creationScope)!==null&&a!==void 0?a:It).importNode(l,!0);Ct.currentNode=c;let u=Ct.nextNode(),v=0,b=0,g=d[0];for(;g!==void 0;){if(v===g.index){let m;g.type===2?m=new We(u,u.nextSibling,this,h):g.type===1?m=new g.ctor(u,g.name,g.strings,this,h):g.type===6&&(m=new Sa(u,this,h)),this.u.push(m),g=d[++b]}v!==(g==null?void 0:g.index)&&(u=Ct.nextNode(),v++)}return c}p(h){let a=0;for(const l of this.u)l!==void 0&&(l.strings!==void 0?(l._$AI(h,l,a),a+=l.strings.length-2):l._$AI(h[a])),a++}}(r,this),n=s.v(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(e){let t=zr.get(e.strings);return t===void 0&&zr.set(e.strings,t=new qe(e)),t}k(e){$r(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new We(this.O(xe()),this.O(xe()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ti=class{constructor(e,t,i,o,r){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=Dt(this,e,t,0),s=!Ae(e)||e!==this._$AH&&e!==K,s&&(this._$AH=e);else{const n=e;let h,a;for(e=r[0],h=0;h<r.length-1;h++)a=Dt(this,n[i+h],t,h),a===K&&(a=this._$AH[h]),s||(s=!Ae(a)||a!==this._$AH[h]),a===M?e=M:e!==M&&(e+=(a??"")+r[h+1]),this._$AH[h]=a}s&&!o&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},wa=class extends ti{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},$a=Ht?Ht.emptyScript:"",xa=class extends ti{constructor(){super(...arguments),this.type=4}j(e){e&&e!==M?this.element.setAttribute(this.name,$a):this.element.removeAttribute(this.name)}},Aa=class extends ti{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Dt(this,e,t,0))!==null&&i!==void 0?i:M)===K)return;const o=this._$AH,r=e===M&&o!==M||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==M&&(o===M||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Sa=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Dt(this,e)}},Pr=je.litHtmlPolyfillSupport;Pr==null||Pr(qe,We),((Ai=je.litHtmlVersions)!==null&&Ai!==void 0?Ai:je.litHtmlVersions=[]).push("2.6.1");var Ci,ki,de=class extends yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((i,o,r)=>{var s,n;const h=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:o;let a=h._$litPart$;if(a===void 0){const l=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;h._$litPart$=a=new We(o.insertBefore(xe(),l),l,void 0,r??{})}return a._$AI(i),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return K}};de.finalized=!0,de._$litElement$=!0,(Ci=globalThis.litElementHydrateSupport)===null||Ci===void 0||Ci.call(globalThis,{LitElement:de});var Tr=globalThis.litElementPolyfillSupport;Tr==null||Tr({LitElement:de}),((ki=globalThis.litElementVersions)!==null&&ki!==void 0?ki:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var ue,Ea=Si`
  ${Si`
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
  ${Si`
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
`,Ki=1,Vr=3,Ur=4,Cs=e=>(...t)=>({_$litDirective$:e,values:t}),ks=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Ca={},ka=Cs(class extends ks{constructor(e){if(super(e),e.type!==Vr&&e.type!==Ki&&e.type!==Ur)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>t.strings===void 0)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===K||t===M)return t;const i=e.element,o=e.name;if(e.type===Vr){if(t===i[o])return K}else if(e.type===Ur){if(!!t===i.hasAttribute(o))return K}else if(e.type===Ki&&i.getAttribute(o)===t+"")return K;return((r,s=Ca)=>{r._$AH=s})(e),t}}),zs=Object.defineProperty,za=Object.defineProperties,Pa=Object.getOwnPropertyDescriptor,Ta=Object.getOwnPropertyDescriptors,Mr=Object.getOwnPropertySymbols,Va=Object.prototype.hasOwnProperty,Ua=Object.prototype.propertyIsEnumerable,Rr=(e,t,i)=>t in e?zs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Zt=(e,t)=>{for(var i in t||(t={}))Va.call(t,i)&&Rr(e,i,t[i]);if(Mr)for(var i of Mr(t))Ua.call(t,i)&&Rr(e,i,t[i]);return e},fo=(e,t)=>za(e,Ta(t)),z=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?Pa(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&zs(t,i,s),s},se=new WeakMap,Lr=new WeakMap,ne=new WeakMap,Zi=new Set,Ma=new MutationObserver(Vs),$t=new Map,Ps=document.documentElement.dir||"ltr",Ts=document.documentElement.lang||navigator.language;function Vs(){Ps=document.documentElement.dir||"ltr",Ts=document.documentElement.lang||navigator.language,[...Zi.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}Ma.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var Ra=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Zi.add(this.host)}hostDisconnected(){Zi.delete(this.host)}dir(){return`${this.host.dir||Ps}`.toLowerCase()}lang(){return`${this.host.lang||Ts}`.toLowerCase()}term(e,...t){var i,o;const r=new Intl.Locale(this.lang()),s=r==null?void 0:r.language.toLowerCase(),n=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",h=$t.get(`${s}-${n}`),a=$t.get(s);let l;if(h&&h[e])l=h[e];else if(a&&a[e])l=a[e];else{if(!ue||!ue[e])return console.error(`No translation found for: ${String(e)}`),String(e);l=ue[e]}return typeof l=="function"?l(...t):l}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}},La=class extends Ra{};(function(...e){e.map(t=>{const i=t.$code.toLowerCase();$t.has(i)?$t.set(i,Object.assign(Object.assign({},$t.get(i)),t)):$t.set(i,t),ue||(ue=t)}),Vs()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var ke=e=>e??M;function zi(e,t){const i=Zt({waitUntilFirstUpdate:!1},t);return(o,r)=>{const{update:s}=o,n=Array.isArray(e)?e:[e];o.update=function(h){n.forEach(a=>{const l=a;if(h.has(l)){const d=h.get(l),c=this[l];d!==c&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[r](d,c))}}),s.call(this,h)}}}var Or=Cs(class extends ks{constructor(e){var t;if(super(e),e.type!==Ki||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,o;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.nt.add(s);return this.render(t)}const r=e.element.classList;this.nt.forEach(s=>{s in t||(r.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((o=this.st)===null||o===void 0)&&o.has(s)||(n?(r.add(s),this.nt.add(s)):(r.remove(s),this.nt.delete(s)))}return K}}),Oa=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?fo(Zt({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function H(e){return(t,i)=>i!==void 0?((o,r,s)=>{r.constructor.createProperty(s,o)})(e,t,i):Oa(e,t)}function Nr(e){return H(fo(Zt({},e),{state:!0}))}var Pi,Na=({finisher:e,descriptor:t})=>(i,o)=>{var r;if(o===void 0){const s=(r=i.originalKey)!==null&&r!==void 0?r:i.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:fo(Zt({},i),{key:s});return e!=null&&(n.finisher=function(h){e(h,s)}),n}{const s=i.constructor;t!==void 0&&Object.defineProperty(i,o,t(o)),e==null||e(s,o)}};function Hr(e,t){return Na({descriptor:i=>{const o={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const r=typeof i=="symbol"?Symbol():"__"+i;o.get=function(){var s,n;return this[r]===void 0&&(this[r]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[r]}}return o}})}(Pi=window.HTMLSlotElement)===null||Pi===void 0||Pi.prototype.assignedElements;var Ji=class extends de{emit(e,t){const i=new CustomEvent(e,Zt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}};z([H()],Ji.prototype,"dir",2),z([H()],Ji.prototype,"lang",2);/*! Bundled license information:

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
*/var Ti,k=class extends Ji{constructor(){super(...arguments),this.formControlController=new class{constructor(e,t){(this.host=e).addController(this),this.options=Zt({form:i=>{if(i.hasAttribute("form")&&i.getAttribute("form")!==""){const o=i.getRootNode(),r=i.getAttribute("form");if(r)return o.getElementById(r)}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null&&o},reportValidity:i=>typeof i.reportValidity!="function"||i.reportValidity(),setValue:(i,o)=>i.value=o},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(e){e?(this.form=e,se.has(this.form)?se.get(this.form).add(this.host):se.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ne.has(this.form)||(ne.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=se.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ne.has(this.form)&&(this.form.reportValidity=ne.get(this.form),ne.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="sl-button";!t&&!r&&typeof i=="string"&&i.length>0&&o!==void 0&&(Array.isArray(o)?o.forEach(s=>{e.formData.append(i,s.toString())}):e.formData.append(i,o.toString()))}handleFormSubmit(e){var t;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=se.get(this.form))==null||t.forEach(r=>{this.setUserInteracted(r,!0)})),!this.form||this.form.noValidate||i||o(this.host)||(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){Lr.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&i.setAttribute(o,t.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){var t;const i=this.host,o=Boolean(Lr.get(i)),r=Boolean(i.required);(t=this.form)!=null&&t.noValidate?(i.removeAttribute("data-required"),i.removeAttribute("data-optional"),i.removeAttribute("data-invalid"),i.removeAttribute("data-valid"),i.removeAttribute("data-user-invalid"),i.removeAttribute("data-user-valid")):(i.toggleAttribute("data-required",r),i.toggleAttribute("data-optional",!r),i.toggleAttribute("data-invalid",!e),i.toggleAttribute("data-valid",e),i.toggleAttribute("data-user-invalid",!e&&o),i.toggleAttribute("data-user-valid",e&&o))}updateValidity(){const e=this.host;this.setValidity(e.checkValidity())}}(this),this.hasSlotController=new class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}}(this,"help-text","label"),this.localize=new La(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",100*e+"%")}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,i=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=t*e;if(this.localize.dir()==="rtl"){const s=`${t-r}px + ${e} * ${o}`;this.output.style.translate=`calc((${s} - ${i/2}px - ${o} / 2))`}else{const s=`${r}px - ${e} * ${o}`;this.output.style.translate=`calc(${s} - ${i/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,o=!!this.helpText||!!t;return kr`
      <div
        part="form-control"
        class=${Or({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
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
            class=${Or({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${ke(this.name)}
              ?disabled=${this.disabled}
              min=${ke(this.min)}
              max=${ke(this.max)}
              step=${ke(this.step)}
              .value=${ka(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip==="none"||this.disabled?"":kr`
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
    `}};function Ir(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}k.styles=Ea,z([Hr(".range__control")],k.prototype,"input",2),z([Hr(".range__tooltip")],k.prototype,"output",2),z([Nr()],k.prototype,"hasFocus",2),z([Nr()],k.prototype,"hasTooltip",2),z([H()],k.prototype,"title",2),z([H()],k.prototype,"name",2),z([H({type:Number})],k.prototype,"value",2),z([H()],k.prototype,"label",2),z([H({attribute:"help-text"})],k.prototype,"helpText",2),z([H({type:Boolean,reflect:!0})],k.prototype,"disabled",2),z([H({type:Number})],k.prototype,"min",2),z([H({type:Number})],k.prototype,"max",2),z([H({type:Number})],k.prototype,"step",2),z([H()],k.prototype,"tooltip",2),z([H({attribute:!1})],k.prototype,"tooltipFormatter",2),z([H({reflect:!0})],k.prototype,"form",2),z([((e="value")=>(t,i)=>{const o=t.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,n,h){var a;const l=o.getPropertyOptions(e);if(s===(typeof l.attribute=="string"?l.attribute:e)){const d=l.converter||$e,c=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:$e.fromAttribute)(h,l.type);this[e]!==c&&(this[i]=c)}r.call(this,s,n,h)}})()],k.prototype,"defaultValue",2),z([zi("value",{waitUntilFirstUpdate:!0})],k.prototype,"handleValueChange",1),z([zi("disabled",{waitUntilFirstUpdate:!0})],k.prototype,"handleDisabledChange",1),z([zi("hasTooltip",{waitUntilFirstUpdate:!0})],k.prototype,"syncRange",1),k=z([(Ti="sl-range",e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(Ti,e):((t,i)=>{const{kind:o,elements:r}=i;return{kind:o,elements:r,finisher(s){customElements.define(t,s)}}})(Ti,e))],k);var ae=function(){try{window[D].updateSegments();var e=function(){if(!Vi)return Vi=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){Vi=t,window[D].dispatchEvent(new Event("change"))})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},D="__foldables__",Vi=!1,mo=function(){function e(){var o=this;if(window[D]!==void 0)return window[D];var r=document.createDocumentFragment();this.addEventListener=r.addEventListener.bind(r),this.removeEventListener=r.removeEventListener.bind(r),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof o[n]=="function"&&o[n](s),r.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(o,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var h;return function(){var a=arguments,l=this;clearTimeout(h),h=setTimeout(function(){return s.apply(l,a)},n)}}(ae(),200)})}var t,i=e.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var r=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,h=r/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:s,left:0,bottom:s+h,right:n,width:n,height:h},s+=o[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var l=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:c,right:c+l,bottom:d,width:l,height:d},c+=o[u].width,c+=this.foldSize;window.visualViewport.segments=o},i.randomizeSegmentsConfiguration=function(o){var r=Math.random()<.5,s=Math.round(Math.random()*(o-1)+1);r?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(D+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(D+"-horizontal-viewport-segments",o),ae()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(D+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(D+"-vertical-viewport-segments",o),ae()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(D+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(D+"-fold-size",o),ae()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(D+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(D+"-browser-shell-size",o),ae()}}])&&function(o,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(e.prototype,t),e}();window[D]=new mo,window.visualViewport.segments===void 0&&window[D].updateSegments();var Us="-viewport-segments",Yi="(\\s*)(@media.*?\\b"+Us+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",Ha=/\((.*?)\)/gi,Ia=/@media[^\(]+/gi,Da=/(horizontal-viewport-segments:)\s?(\d)/gi,Fa=/(vertical-viewport-segments:)\s?(\d)/gi,Ba=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")};function Dr(e,t){var i=e.matchAll(t);return i===null?[]:Array.from(i,function(o){return o[2]})[0]}function ja(e){var t=function(o){var r,s=new RegExp(Yi,"gi");if(typeof o.matchAll=="function")r=Array.from(o.matchAll(s));else{for(r=[];r[r.length]=s.exec(o););r.length--}return r}(e),i=[[]];return t.forEach(function(o){var r=o[1],s=o[2],n=o[3],h=o[4],a=s.match(Ia)||[],l=s.match(Ha)||[],d=Dr(s,Fa);d===void 0&&(d=1);var c=Dr(s,Da);c===void 0&&(c=1),l=l.filter(function(u){return!u.includes(Us)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][c]=""+r+a+l+"{"+n+h+"}"}),i}var Gi=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+Gi);var Fr,Ms=new mo;if(!Gi){var Ui=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Fr=Ui,Promise.all(Fr.map(function(e){return e.href?fetch(e.href).then(function(t){return t.text()}):e.textContent}))).then(function(e){var t=new DocumentFragment;e.forEach(function(i,o){for(var r,s=function(U,P){return U.replace(new RegExp(Yi,"gi"),P)}(i,""),n=ja(i),h=Ui[o].href||"inline",a=0,l=Object.entries(n);a<l.length;a++){var d=l[a],c=d[0],u=d[1];pe[c]==null&&(pe[c]=[]);for(var v=0,b=Object.entries(u);v<b.length;v++){var g=b[v];pe[c][g[0]]="/* origin: "+h+" */"+g[1]}}if(h=="inline"||(r=i,new RegExp(Yi,"gi").test(r))){var m=document.createElement("style");m.setAttribute("data-css-origin",h),m.textContent=s,t.appendChild(m)}else{var w=document.createElement("link");w.type="text/css",w.rel="stylesheet",w.href=h,t.appendChild(w)}}),Ui.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(t),function(i){Gi||(Br(i),Ms.addEventListener("change",function(){return Br(i)}))}()})}var pe=[[]];function Br(e){var t,i=Ms,o=null;(t=e?pe[e.nodeName.toLowerCase()]:pe)[i.verticalViewportSegments]&&(o=t[i.verticalViewportSegments][i.horizontalViewportSegments]);var r,s=t[0][0]?t[0][0]:null;if(o){var n=window.visualViewport.segments,h=!1;n.length>1&&(h=!(n[0].height<window.innerHeight));for(var a=0,l=Object.entries(n);a<l.length;a++)for(var d=l[a],c=d[0],u=0,v=Object.entries(d[1]);u<v.length;u++){var b=v[u],g=b[0];r=b[1]+"px",o=o.replace(Ba(h?"viewport-segment-"+g+" "+c+" 0":"viewport-segment-"+g+" 0 "+c),r)}var m="__foldables_sheet__",w=function(P,F){for(var C,S=function(E,Ee){var N=typeof Symbol<"u"&&E[Symbol.iterator]||E["@@iterator"];if(N)return(N=N.call(E)).next.bind(N);if(Array.isArray(E)||(N=function(O,Gt){if(O){if(typeof O=="string")return Ir(O,Gt);var B=Object.prototype.toString.call(O).slice(8,-1);return B==="Object"&&O.constructor&&(B=O.constructor.name),B==="Map"||B==="Set"?Array.from(O):B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)?Ir(O,Gt):void 0}}(E))){N&&(E=N);var Yt=0;return function(){return Yt>=E.length?{done:!0}:{done:!1,value:E[Yt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(P.querySelectorAll("."+m));!(C=S()).done;)C.value.remove();var V=document.createElement("style");V.className=m,V.textContent=F,P===document?document.head.appendChild(V):P.appendChild(V)};if(e){var U=e.shadowRoot;"adoptedStyleSheets"in U&&U.adoptedStyleSheets.length>0?U.adoptedStyleSheets[0].replace(s+o):w(U,o)}else w(document,o)}}const tt={Foldable:"foldable",Dual:"dual"};class Jt extends Et{}y(Jt,"styles",_s`
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
  `);customElements.define("close-icon",class extends Jt{render(){return Kt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}});customElements.define("fullscreen-icon",class extends Jt{render(){return Kt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}});customElements.define("splitview-icon",class extends Jt{render(){return Kt`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}});customElements.define("rotate-icon",class extends Jt{render(){return Kt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}});customElements.define("minimize-icon",class extends Jt{render(){return Kt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}});class Rs extends Et{constructor(){super();y(this,"_mini_configurator_header");y(this,"_mini_configurator");y(this,"_configurator");y(this,"_configurator_header");y(this,"_device_type_select");y(this,"_orientation_select");y(this,"_seam_slider");y(this,"_seam_container");y(this,"_preview");y(this,"_preview_container");y(this,"_device");y(this,"_frame");y(this,"_device_hinge");y(this,"_currentOrientation");y(this,"_currentDevice");y(this,"_isFullscreen",!1);y(this,"_verticalViewportSegments",1);y(this,"_horizontalViewportSegments",1);y(this,"_fold_width");y(this,"_browser_shell_size");y(this,"_x",0);y(this,"_y",0);y(this,"_offset_x",0);y(this,"_offset_y",0);y(this,"_resizeHandler");y(this,"_handleKeyUp",i=>{i.keyCode==73&&i.ctrlKey&&this._showMiniConfigurator()});y(this,"_startDragMiniConfigurator",async i=>{this._startDrag(i),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove});y(this,"_startDragConfigurator",async i=>{this._startDrag(i),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove});y(this,"_startDrag",async i=>{this._isFullscreen||(this._moved=!1,this._x=i.clientX-this._offset_x,this._y=i.clientY-this._offset_y,this._pointerId=i.pointerId,i.preventDefault())});y(this,"_miniConfiguratorMove",async i=>{this._pointerMove(i),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}});y(this,"_pointerMove",async i=>{if(i.clientY<0||i.clientX<0||i.clientX>window.innerWidth||i.clientY>window.innerHeight)return;let o=i.clientX-this._x,r=i.clientY-this._y;const s=window.getComputedStyle(this.shadowRoot.host),n=parseFloat(s.width),h=parseFloat(s.height);o<0&&(o=0),r<0&&(r=0),r+h>=window.innerHeight&&(r=window.innerHeight-h),o+n>=window.innerWidth&&(o=window.innerWidth-n),this._updateConfiguratorPosition(o,r),i.preventDefault()});y(this,"_stopDragConfigurator",async i=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});y(this,"_stopDragMiniConfigurator",async i=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});y(this,"_stopDrag",async i=>{this._x=this._offset_x,this._y=this._offset_y});y(this,"_onResize",async i=>{this._handleAsusSpanning()});y(this,"_seamValueUpdated",async()=>{this.foldWidth=this._seam_slider.value,this.shadowRoot.host.style.setProperty("--device-fold-width",this.foldWidth+"px"),this._updateFoldablesFeature()});y(this,"_rotationFinished",i=>{this._preview.style.transition=""});this._verticalViewportSegments=1,this._horizontalViewportSegments=1}static get properties(){return{verticalViewportSegments:{type:Number},horizontalViewportSegments:{type:Number}}}_inIframe(){try{return window.self!==window.top}catch{return!0}}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches)return console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this);const i=window.getComputedStyle(this.shadowRoot.host);parseFloat(i.width);const o=parseFloat(i.height);this._updateConfiguratorPosition(20,window.innerHeight-o-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._verticalViewportSegments=1,this._horizontalViewportSegments=1,this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="portrait",this._deviceType=tt.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.horizontalViewportSegments=1,this.verticalViewportSegments=2,this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{this._addZenbookVariables(document.styleSheets[0]),this._addZenbookVariables(this._frame.contentDocument.styleSheets[0])},300)):(this.horizontalViewportSegments=1,this.verticalViewportSegments=1,this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this._orientationFromSegments()}_orientationFromSegments(){return this.horizontalViewportSegments===2&&this.verticalViewportSegments===1?"portrait":this.horizontalViewportSegments===1&&this.verticalViewportSegments===2?"landscape":"portrait"}_addZenbookVariables(i){i.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",i.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(i){this._fold_width=Math.max(0,i)}_orientationChanged(i){const o=this._orientation_select.selectedIndex;this._orientation_select[o].value==="portrait"?(this.horizontalViewportSegments=2,this.verticalViewportSegments=1):(this.horizontalViewportSegments=1,this.verticalViewportSegments=2),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){this._orientationFromSegments()!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this._orientationFromSegments(),this.horizontalViewportSegments===1&&this.verticalViewportSegments===1?this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation():this.horizontalViewportSegments===2?this._applyVerticalRotation():this._applyHorizontalRotation()}get horizontalViewportSegments(){return this._horizontalViewportSegments}set horizontalViewportSegments(i){let o=this._horizontalViewportSegments;this._orientation_select.selectedIndex=i===2?0:1,this._horizontalViewportSegments=i,this.requestUpdate("horizontalViewportSegments",o)}get verticalViewportSegments(){return this._verticalViewportSegments}set verticalViewportSegments(i){let o=this._verticalViewportSegments;this._orientation_select.selectedIndex=i===2?1:0,this._verticalViewportSegments=i,this.requestUpdate("verticalViewportSegments",o)}_deviceTypeChanged(i){const o=this._device_type_select.selectedIndex,r=this._device_type_select[o].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(this.verticalViewportSegments=1,this.horizontalViewportSegments=2,this._currentOrientation="portrait"),r){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this.foldWidth=24,this._deviceType=tt.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=tt.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=tt.Dual,this.foldWidth=28,this._currentDevice="duo";break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=tt.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=tt.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this.verticalViewportSegments=1,this.horizontalViewportSegments=1,this._currentOrientation="portrait",this._currentDevice="duo",this.foldWidth=0,this._deviceType=tt.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature(),this._frame.contentWindow.location.reload(!0)}_calculateAndApplyScaleFactor(){const i=window.getComputedStyle(this._preview_container),o=window.getComputedStyle(this._device),r=parseInt(i.width,10),s=parseInt(i.height,10);let n=parseInt(o.width,10),h=parseInt(o.height,10),a=1;if(this._currentOrientation==="landscape"&&(n=parseInt(o.height,10),h=parseInt(o.width,10)),h>s||n>r){const l=s/h,d=r/n;a=d<l?d:l}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*a)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px")}this._deviceType===tt.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const i=new mo;i.foldSize=this.foldWidth,i.horizontalViewportSegments=this.horizontalViewportSegments,i.verticalViewportSegments=this.verticalViewportSegments,this._seam_slider.value=this.foldWidth}_debounce(i,o){let r;return function(){clearTimeout(r),r=setTimeout(()=>i.apply(this,arguments),o)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let i=this._offset_x,o=this._offset_y;const r=window.getComputedStyle(this.shadowRoot.host),s=parseFloat(r.width),n=parseFloat(r.height);this._offset_y+n>=window.innerHeight&&(o=window.innerHeight-n),this._offset_x+s>=window.innerWidth&&(i=window.innerWidth-s),this._updateConfiguratorPosition(i,o),this._updatePreviewConfiguration()}_updateConfiguratorPosition(i,o){this._offset_x=i,this._offset_y=o,this.shadowRoot.host.style.transform="translate3d("+i+"px, "+o+"px, 0)"}_toggleSpanning(){this.verticalViewportSegments!=1||this.horizontalViewportSegments!=1?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1||(this.verticalViewportSegments===2?(this.verticalViewportSegments=1,this.horizontalViewportSegments=2):(this.verticalViewportSegments=2,this.horizontalViewportSegments=1),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return Kt`
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
    </div>`}}y(Rs,"styles",_s`
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
  `);customElements.define("foldable-device-configurator",Rs);const j=[{name:"videos/aurora",alt:"This is a beautiful picture of an air balloon in the sky.",channel:"SkyExplorer",title:"Auroras at night",views:"2M",date:"2 years",subscribers:"5M",description:"Filming Aurora in Norway. I was able to capture this beautiful nature show."},{name:"videos/bird",alt:"Video of a red parrot",channel:"AnimalLover",title:"Beautiful red parrot",views:"3M",date:"1 year",subscribers:"5M",description:"Close up view on a red parrot from the Amazonia forest."},{name:"videos/cat",alt:"Video of black and white cat",channel:"AnimalLover",title:"My beautiful cat",views:"10M",date:"5 month",subscribers:"5M",description:"Close up view on a black and white cat."},{name:"videos/christmas",alt:"Video of a christmas ornament in the christmas tree",channel:"The joy of Christmas",title:"Handmade ornament",views:"500k",date:"3 years",subscribers:"5M",description:"Home made ornament turned out quite good when put up in the christmas tree."},{name:"videos/clock",alt:"Video of a clock ticking",channel:"TikClock",title:"Close view of a ticking watch",views:"1M",date:"2 days",subscribers:"50k",description:"Showing the inner wheels of an old watch."},{name:"videos/city",alt:"Video of a city",channel:"Architecture Lovers",title:"Fly by of a city",views:"20M",date:"2 months",subscribers:"245k",description:"Fly by in a city between the skyscrapers."},{name:"videos/cloud",alt:"Video of clouds in the sky",channel:"SkyExplorer",title:"Beautiful clouds",views:"1M",date:"2 days",subscribers:"5M",description:"Filming the clouds as close as possible."},{name:"videos/coffee",alt:"Video of coffee beans",channel:"Food Channel",title:"Inside a coffee factory",views:"200M",date:"1 year and 2 months",subscribers:"756k",description:"Close up of beans falling into a container for processing."},{name:"videos/fish",alt:"Video of fishes in the ocean",channel:"Under the sea",title:"Inside a coffee factory",views:"200M",date:"1 year and 2 months",subscribers:"345k",description:"Underwater filming of a big group of blue fish which are bioluminescent."},{name:"videos/flowers",alt:"Video of flowers with a human hand touching them",channel:"The Botanic Channel",title:"Spring is coming",views:"1M",date:"2 year and 2 months",subscribers:"3M",description:"Beautiful tree flowers blooming as the spring is coming."},{name:"videos/flowers2",alt:"Video of flowers with a human hand touching them",channel:"The Botanic Channel",title:"Exploring the fields",views:"13M",date:"1 year and 9 months",subscribers:"3M",description:"Walking inside a field of flowers and touching them as I walk by."},{name:"videos/forest",alt:"Video of a forest with snow",channel:"Into the woods",title:"Hike in the winter forest",views:"300K",date:"12 days",subscribers:"9M",description:"Hiking inside the forest during winter."},{name:"videos/forest2",alt:"Video of a forest and cloudy sky",channel:"Into the woods",title:"Exploring the foggy forest",views:"546K",date:"45 days",subscribers:"9M",description:"The local forest was foggy during my morning hike, I recorded that shot while exploring."},{name:"videos/frog",alt:"Video of a frog on a branch",channel:"AnimalLover",title:"What a cute frog",views:"908K",date:"2 hours",subscribers:"5M",description:"Close up view of a frog inside the Amazonian forest."},{name:"videos/hand",alt:"Video of a human hand with sand",channel:"Smith32",title:"Macro of my sandy hand",views:"205K",date:"4 minutes",subscribers:"345",description:"Close up shot of sand running off my hand."},{name:"videos/ink",alt:"Video of inking spreading in water",channel:"The digital artist",title:"Ink under water",views:"76M",date:"yesterday",subscribers:"1M",description:"Underwater filming of ink dropped into water."},{name:"videos/jellyfish",alt:"Video of jellyfishes",channel:"Under the sea",title:"Jellyfishes under water",views:"32M",date:"3 months",subscribers:"345k",description:"Beautiful jellyfishes swimming as we scuba dive in Costa Rica."},{name:"videos/mountains",alt:"Videos of a mountains with snow",channel:"TheClimber",title:"My view of the snowy mountain",views:"12M",date:"4 days",subscribers:"2M",description:"Filming the mountains while at the summit. You can see the sea of clouds"},{name:"videos/mountains2",alt:"Videos of a mountains",channel:"TheClimber",title:"Exploring a pacific volcano",views:"23M",date:"23 days",subscribers:"2M",description:"Arial shot of a pacific island with the volcano crater."},{name:"videos/ocean",alt:"Video of an ocean with waves",channel:"Under the sea",title:"Drone shot of the beach",views:"3M",date:"6 years",subscribers:"345k",description:"Shooting the waves on my local beach with a drone."},{name:"videos/ocean2",alt:"Video of an ocean",channel:"Under the sea",title:"Calm and peaceful ocean",views:"6M",date:"3 years and 9 months",subscribers:"345k",description:"Drone footage of a the ocean at the end of the afternoon. It's calming with the waves slowly moving."},{name:"videos/parachute",alt:"Video of a a man riding a parachute over mountains",channel:"Adrenaline Junkies",title:"Gliding in the sky",views:"5M",date:"today",subscribers:"23M",description:"Riding of the mountain and gliding over the valley."},{name:"videos/particles",alt:"Video of green particles flying",channel:"The digital artist",title:"Green flying particles",views:"3M",date:"1 month",subscribers:"25M",description:"Green particles generated using a computer."},{name:"videos/particles2",alt:"Video of yellow particles flying",channel:"The digital artist",title:"Fire particles effect",views:"11M",date:"2 years",subscribers:"25M",description:"Yellow particles generated using a computer."},{name:"videos/road",alt:"Video of a road",channel:"SkyExplorer",title:"Drone shot of a road",views:"1M",date:"7 years",subscribers:"5M",description:"Filming the road in the countryside using my new drone."},{name:"videos/sunrise",alt:"Video of a sunrise over a tree",channel:"SkyExplorer",title:"Sunrise by the tree",views:"45M",date:"4 years",subscribers:"5M",description:"Filing the sun rising inside my local forest. What a beautiful view."},{name:"videos/sunset",alt:"Video of a sunset over a city",channel:"SkyExplorer",title:"Sunset over the city",views:"21M",date:"8 months",subscribers:"5M",description:"Enjoying the sunset happening over the city."},{name:"videos/surf",alt:"Video of a man surfing",channel:"Under the sea",title:"Surfing the wave",views:"500M",date:"1 year and 10 months",subscribers:"345k",description:"Filing a surfer riding a wave."},{name:"videos/train",alt:"Aerial video of a train",channel:"SkyExplorer",title:"Drone shot of a train",views:"67M",date:"5 months",subscribers:"5M",description:"Getting the drone to shot a moving train somewhere in the mountains."},{name:"videos/vinyl",alt:"Video of a vinyl disc playing",channel:"The Note",title:"Vinyl playing close up",views:"45K",date:"14 hours",subscribers:"2k",description:"Close up view of vinyl playing"}];function Ls(){for(let e=j.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),i=j[e];j[e]=j[t],j[t]=i}return j}function qa(e){if(e===void 0)return j;let t=[];for(let i=0,o=0;i<j.length-1;i++)j[i].title.includes(e)&&(t[o]=j[i],o++);return t}function Wa(e){for(var t=j.length-1;t>0;t--)if(j[t].name===e)return j[t];return null}const mt=[{name:"John Doe",likes:"50",dislikes:"2",date:"3 days",comment:"This is an amazing video. Thanks for doing this."},{name:"Ruth D",likes:"30",dislikes:"0",date:"5 days",comment:"Great quality, please keep posting."},{name:"Ana M",likes:"200",dislikes:"1",date:"2 months",comment:"I always enjoy when this channel posts content."},{name:"Steve",likes:"10",dislikes:"15",date:"5 months",comment:"I would like longer shots, please."},{name:"Colin",likes:"1",dislikes:"1",date:"1 day",comment:"What a delight to watch!"},{name:"Pearl",likes:"3",dislikes:"0",date:"4 days",comment:"Attention to details is so good."},{name:"Alex",likes:"10",dislikes:"0",date:"2 months",comment:"I'm sure the next video will be amazing."},{name:"Rachel",likes:"110",dislikes:"3",date:"1 week",comment:"High quality content."},{name:"Thay",likes:"12",dislikes:"0",date:"2 days",comment:"Very good angle, I love it."},{name:"Liz",likes:"1",dislikes:"0",date:"5 months",comment:"Can't wait the next video."},{name:"Mark W",likes:"10",dislikes:"15",date:"2 hours",comment:"Great content as always."},{name:"Roberta N",likes:"25",dislikes:"1",date:"4 months",comment:"Keep uploading."}];function jr(){for(let e=mt.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),i=mt[e];mt[e]=mt[t],mt[t]=i}return mt}const Ka=(e,...t)=>{const i=Bt(e[0],"title-bar");return Ft([i],...t)};class Os extends J{constructor(){super(...arguments);y(this,"_searchInput")}connectedCallback(){super.connectedCallback(),vt(this)}firstUpdated(){this._searchInput=this.shadowRoot.querySelector("#search-input")}_redirectToHomePage(){document.location.href="/"}_textChanged(){let i=new CustomEvent("search-text-changed",{detail:{message:"search text changed",text:this._searchInput.value},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){return X`
            <div class="root">
                <sl-icon-button src="images/play-button.svg" label="FoldTube" class="logo" @click="${this._redirectToHomePage}"></sl-icon-button>
                <sl-input id="search-input" placeholder="Search" size="medium" pill class="search" @sl-change="${this._textChanged}">
                    <sl-icon name="search" slot="suffix" @click="${this._textChanged}"></sl-icon>
                </sl-input>
                <sl-icon name="bell" class="icon"></sl-icon>
                <sl-icon name="person" class="icon"></sl-icon>
            </div>
            `}}y(Os,"styles",Ka`
    :host{
        position: sticky;
        top: 0;
    }
    .root {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: white;
    }
    .search {
        margin: auto;
        flex-grow: 2;
        margin: 4px;
    }

    .logo {
        font-size: 2rem;
    }

    .icon {
        font-size: 2rem;
        margin: 4px;
    }
    `);customElements.define("title-bar",Os);const Za=(e,...t)=>{const i=Bt(e[0],"side-bar");return Ft([i],...t)};class Ns extends J{connectedCallback(){super.connectedCallback(),vt(this)}render(){return X`
            <div class="root">
                ${Ls().map(t=>X`
                    <video-thumbnail src="${t.name}" alt=${t.alt} title="${t.title}" date="${t.date}"
                    views="${t.views}" channel="${t.channel}" subscribers="${t.subscribers}" 
                    description="${t.description}" @click="${this._openVideo}" horizontalLayout>
                    </video-thumbnail>
                `)}
            </div>
            `}}y(Ns,"styles",Za`
        .root {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
    `);customElements.define("side-bar",Ns);const Ja=(e,...t)=>{const i=Bt(e[0],"comments-section");return Ft([i],...t)};class Hs extends J{connectedCallback(){super.connectedCallback(),vt(this)}_random_color(){const t=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256),o=Math.floor(Math.random()*256);return"rgb("+t+","+i+","+o+")"}render(){return X`
        <div class="root">
            <div class="comments-header">${jr().length} comments</div>
            ${jr().map(t=>X`
                <div class="comment-container">
                    <div class="name-image" style="background-color: ${this._random_color()};">
                        ${t.name[0]}
                    </div>
                    <div class="comment-details">
                        <div class="name-details">
                            ${t.name} 
                            <div class="date-details">${t.date} ago</div>
                        </div>
                        <div class="comment-text">${t.comment}</div>
                        <div class="like-section">
                            <div class="date-details">
                            <sl-icon-button class="video-actions" name="hand-thumbs-up" label="like"></sl-icon-button> ${t.likes} 
                            <sl-icon-button class="video-actions" name="hand-thumbs-down" label="dislike"></sl-icon-button> ${t.dislikes}</div>
                        </div>
                    </div>
                </div>
            `)}
        </div>
        `}}y(Hs,"styles",Ja`
        .root {
            margin-top: 30px;
        }

        .name-image {
            border-radius: 50%;
            height: 48px;
            width: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            /* background-color: #46ac3f; */
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 1.5rem;
            text-align: center;
        }

        .comments-header {
            margin-bottom: 10px;
        }

        .comment-container {
            display: flex;
            flex-direction: row;
        }

        .comment-details {
            display: flex;
            flex-direction: column;
            margin: 5px;
            margin-left: 15px;
        }

        .name-details {
            font-weight: bold;
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .date-details {
            font-size: 0.8rem;
            color: #747474;
            margin-left: 5px;
        }
        
        .like-section {
            display: flex;
            flex-direction: row;
            margin-top: 5px;
        }

        .comment-text {
            font-weight: normal;
            font-size: 0.9rem;
            margin-top: 5px;
        }
    `);customElements.define("comments-section",Hs);const Ya=(e,...t)=>{const i=Bt(e[0],"video-player");return Ft([i],...t)};class Is extends J{static get properties(){return{src:{type:String,reflectToAttribute:!0,attribute:!0},alt:{type:String,reflectToAttribute:!0,attribute:!0},title:{type:String,reflectToAttribute:!0,attribute:!0},channel:{type:String,reflectToAttribute:!0,attribute:!0},views:{type:String,reflectToAttribute:!0,attribute:!0},subscribers:{type:String,reflectToAttribute:!0,attribute:!0},date:{type:String,reflectToAttribute:!0,attribute:!0},description:{type:String,reflectToAttribute:!0,attribute:!0}}}set src(t){let i=this._src;this._src=t,this._video.load(),this.requestUpdate("src",i),this.play()}get src(){return this._src}set alt(t){let i=this._alt;this._alt=t,this.requestUpdate("alt",i)}get alt(){return this._alt}set title(t){let i=this._title;this._title=t,this.requestUpdate("title",i)}get title(){return this._title}set channel(t){let i=this._channel;this._channel=t,this.requestUpdate("channel",i)}get channel(){return this._channel}set views(t){let i=this._views;this._views=t,this.requestUpdate("views",i)}get views(){return this._views}set subscribers(t){let i=this._subscribers;this._subscribers=t,this.requestUpdate("subscribers",i)}get subscribers(){return this._subscribers}set date(t){let i=this._date;this._date=t,this.requestUpdate("date",i)}get date(){return this._date}set description(t){let i=this._description;this._description=t,this.requestUpdate("description",i)}get description(){return this._description}firstUpdated(){this._video=this.shadowRoot.querySelector("#video"),this._source=this.shadowRoot.querySelector("#source")}constructor(){super(),this._src="",this._alt="",this._title="",this._channel="",this._views="",this._date="",this._subscribers="",this._description=""}connectedCallback(){super.connectedCallback(),vt(this)}play(){this._video.play()}closePlayer(){this._video.pause(),this.shadowRoot.host.style.display="none"}render(){return X`
            <div class="root">
                <div class="content">
                    <div class="video-container">
                        <video preload="metadata" alt="${this.alt}" controls id="video">
                            <source src="${this.src}.mp4" type="video/mp4" id="source">
                        </video>
                        <div class="title">${this.title}</div>
                        <div class="channel-video-actions">
                            <div class="channel">
                                <picture>
                                    <source srcset="images/channels/${encodeURI(this.channel)}.webp" type="image/webp">
                                    <img class="channel-image" src="images/channels/${this.channel}.png" alt="picture of the channel"/>
                                </picture>
                                <div class="channel-details">
                                    <div class="channel-text">${this.channel}</div>
                                    <div class="subscribers">${this.subscribers} subscribers</div>
                                </div>
                            </div>
                            <sl-icon-button class="video-actions subscribe" name="bell" label="subscribe"></sl-icon-button>
                            <div class="grow"></div>
                            <sl-icon-button class="video-actions" name="hand-thumbs-up" label="like"></sl-icon-button>
                            <sl-icon-button class="video-actions" name="hand-thumbs-down" label="dislike"></sl-icon-button>
                            <sl-icon-button class="video-actions" name="share" label="share"></sl-icon-button>
                        </div>
                        <div class="description-box">
                            <div class="stats">${this.views} views ${this.date} ago</div>
                            <div class="description">${this.description}</div>
                        </div>
                        <comments-section></comments-section>
                    </div>
                    <side-bar></side-bar>
                </div>
            </div>
        `}}y(Is,"styles",Ya`
        :host {
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        title-bar {
            height: 10%;
            width: 100%;
        }

        .root {
            background-color: #ffffff;
            width: 100%;
            height: 100%;
        }

        .content {
            display: flex;
            flex-direction: row;
            align-self: center;
        }

        .video-container {
            display: flex;
            flex-direction: column;
            padding: 10px;
            width: 60%;
        }

        #close {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 2rem;
            z-index: 3;
        }

        .title {
            margin: 10px;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .channel-video-actions {
            display: flex;
            flex-direction: row;
            justify-items: center;
        }

        .channel-text {
            font-size: 1rem;
            font-weight: bold;
            display: flex;
            align-items: center;
        }

        .channel-image {
            border-radius: 50%;
            height: 48px;
        }

        .channel {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .channel-details {
            display: flex;
            flex-direction: column;
            margin: 5px;
        }

        .subscribers {
            font-size: 0.7rem;
            color: #747474;
        }

        .video-actions {
            font-size: 2rem;
            background-color: #d9d9d9;
            border-radius: 20px;
            margin-left: 5px;
            margin-bottom: 5px;
        }

        .subscribe {
            margin-left: 50px;
        }

        .grow {
            flex-grow: 2;
        }

        .description-box {
            background-color: #d9d9d9;
            border-radius: 20px;
            padding: 10px;
            margin-top: 10px;
        }

        .stats {
            font-size: 0.8rem;
            font-weight: bolder;
        }

        .description {
            margin-top: 5px;
            font-weight: lighter;
            font-size: 0.9rem;
        }

        side-bar {
            width: 40%;
        }
    `);customElements.define("video-player",Is);const Ga=(e,...t)=>{const i=Bt(e[0],"video-thumbnail");return Ft([i],...t)};class Ds extends J{static get properties(){return{src:{type:String,reflectToAttribute:!0,attribute:!0},title:{type:String,reflectToAttribute:!0,attribute:!0},channel:{type:String,reflectToAttribute:!0,attribute:!0},views:{type:String,reflectToAttribute:!0,attribute:!0},subscribers:{type:String,reflectToAttribute:!0,attribute:!0},date:{type:String,reflectToAttribute:!0,attribute:!0},alt:{type:String,reflectToAttribute:!0,attribute:!0},description:{type:String,reflectToAttribute:!0,attribute:!0},horizontalLayout:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set src(t){let i=this._src;this._src=t,this.requestUpdate("src",i)}get src(){return this._src}set title(t){let i=this._title;this._title=t,this.requestUpdate("title",i)}get title(){return this._title}set channel(t){let i=this._channel;this._channel=t,this.requestUpdate("channel",i)}get channel(){return this._channel}set views(t){let i=this._views;this._views=t,this.requestUpdate("views",i)}get views(){return this._views}set subscribers(t){let i=this._subscribers;this._subscribers=t,this.requestUpdate("subscribers",i)}get subscribers(){return this._subscribers}set date(t){let i=this._date;this._date=t,this.requestUpdate("date",i)}get date(){return this._date}set alt(t){let i=this._alt;this._alt=t,this.requestUpdate("alt",i)}get alt(){return this._alt}set description(t){let i=this._description;this._description=t,this.requestUpdate("description",i)}get description(){return this._description}set horizontalLayout(t){let i=this._horizontalLayout;this._horizontalLayout=t,this.requestUpdate("horizontalLayout",i)}get horizontalLayout(){return this._horizontalLayout}firstUpdated(){}constructor(){super(),this._src="",this._alt="",this._title="",this._channel="",this._views="",this._date="",this._subscribers="",this._description="",this._horizontalLayout=!1}connectedCallback(){super.connectedCallback(),vt(this)}render(){return X`
            <div class="root ${this.horizontalLayout?"horizontal":"vertical"}">
                <video preload="metadata" alt="${this.alt}" class="${this.horizontalLayout?"video-horizontal":""}">
                    <source src="${this.src}.mp4#t=0.5" type="video/mp4">
                </video>
                <div class="details">
                    <picture>
                        <source srcset="images/channels/${encodeURI(this.channel)}.webp" type="image/webp">
                        <img class="channel-image ${this.horizontalLayout?"hidden":""}" src="images/channels/${this.channel}.png" alt="picture of the channel"/>
                    </picture>
                    <div class="${this.horizontalLayout?"vertical":""}">
                        <div class="title">${this.title}</div>
                        <div class="channel">${this.channel}</div>
                        <div class="stats">${this.views} views &bull; ${this.date} ago</div>
                    </div>
                </div>
            </div>
        `}}y(Ds,"styles",Ga`
        :host {
            width: 100%;
            height: 100%;
            cursor: pointer;
        }

        .root {
            display: flex;
            align-items: center;
            margin: 10px;
        }

        .vertical {
            flex-direction: column;
            margin-left: 10px;
        }

        .horizontal {
            flex-direction: row;
        }

        video {
            width: 100%;
            border-radius: 10px;
        }

        .video-horizontal {
            width: 50%;
        }

        .title {
            font-size: 1.2rem;
            font-weight: bold;
        }

        .channel {
            font-size: 0.8rem;
            color: #747474;
            margin-top: 10px;
        }

        .stats {
            margin-top: 4px;
            font-size: 0.8rem;
            color: #747474;
        }

        .channel-image {
            border-radius: 50%;
            height: 40px;
            margin-right: 10px;
        }
        
        .details {
            width: 100%;
            display: flex;
            flex-direction: row;
            margin-top: 10px;
        }

        .hidden {
            display: none;
        }
    `);customElements.define("video-thumbnail",Ds);try{self["workbox:window:6.5.3"]&&_()}catch{}function Xi(e,t){return new Promise(function(i){var o=new MessageChannel;o.port1.onmessage=function(r){i(r.data)},e.postMessage(t,[o.port2])})}function Xa(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function qr(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}function Qa(e,t){var i;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(i=function(r,s){if(r){if(typeof r=="string")return qr(r,s);var n=Object.prototype.toString.call(r).slice(8,-1);return n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set"?Array.from(r):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qr(r,s):void 0}}(e))||t&&e&&typeof e.length=="number"){i&&(e=i);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(i=e[Symbol.iterator]()).next.bind(i)}try{self["workbox:core:6.5.3"]&&_()}catch{}var Mi=function(){var e=this;this.promise=new Promise(function(t,i){e.resolve=t,e.reject=i})};function Ri(e,t){var i=location.href;return new URL(e,i).href===new URL(t,i).href}var le=function(e,t){this.type=e,Object.assign(this,t)};function ze(e,t,i){return i?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function tl(){}var el={type:"SKIP_WAITING"};function Wr(e,t){if(!t)return e&&e.then?e.then(tl):Promise.resolve()}var il=function(e){var t,i;function o(h,a){var l,d;return a===void 0&&(a={}),(l=e.call(this)||this).nn={},l.tn=0,l.rn=new Mi,l.en=new Mi,l.on=new Mi,l.un=0,l.an=new Set,l.cn=function(){var c=l.fn,u=c.installing;l.tn>0||!Ri(u.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=u,c.removeEventListener("updatefound",l.cn)):(l.hn=u,l.an.add(u),l.rn.resolve(u)),++l.tn,u.addEventListener("statechange",l.ln)},l.ln=function(c){var u=l.fn,v=c.target,b=v.state,g=v===l.vn,m={sw:v,isExternal:g,originalEvent:c};!g&&l.mn&&(m.isUpdate=!0),l.dispatchEvent(new le(b,m)),b==="installed"?l.wn=self.setTimeout(function(){b==="installed"&&u.waiting===v&&l.dispatchEvent(new le("waiting",m))},200):b==="activating"&&(clearTimeout(l.wn),g||l.en.resolve(v))},l.dn=function(c){var u=l.hn,v=u!==navigator.serviceWorker.controller;l.dispatchEvent(new le("controlling",{isExternal:v,originalEvent:c,sw:u,isUpdate:l.mn})),v||l.on.resolve(u)},l.gn=(d=function(c){var u=c.data,v=c.ports,b=c.source;return ze(l.getSW(),function(){l.an.has(b)&&l.dispatchEvent(new le("message",{data:u,originalEvent:c,ports:v,sw:b}))})},function(){for(var c=[],u=0;u<arguments.length;u++)c[u]=arguments[u];try{return Promise.resolve(d.apply(this,c))}catch(v){return Promise.reject(v)}}),l.sn=h,l.nn=a,navigator.serviceWorker.addEventListener("message",l.gn),l}i=e,(t=o).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var r,s,n=o.prototype;return n.register=function(h){var a=(h===void 0?{}:h).immediate,l=a!==void 0&&a;try{var d=this;return function(c,u){var v=c();return v&&v.then?v.then(u):u(v)}(function(){if(!l&&document.readyState!=="complete")return Wr(new Promise(function(c){return window.addEventListener("load",c)}))},function(){return d.mn=Boolean(navigator.serviceWorker.controller),d.yn=d.pn(),ze(d.bn(),function(c){d.fn=c,d.yn&&(d.hn=d.yn,d.en.resolve(d.yn),d.on.resolve(d.yn),d.yn.addEventListener("statechange",d.ln,{once:!0}));var u=d.fn.waiting;return u&&Ri(u.scriptURL,d.sn.toString())&&(d.hn=u,Promise.resolve().then(function(){d.dispatchEvent(new le("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),d.hn&&(d.rn.resolve(d.hn),d.an.add(d.hn)),d.fn.addEventListener("updatefound",d.cn),navigator.serviceWorker.addEventListener("controllerchange",d.dn),d.fn})})}catch(c){return Promise.reject(c)}},n.update=function(){try{return this.fn?Wr(this.fn.update()):void 0}catch(h){return Promise.reject(h)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(h){try{return ze(this.getSW(),function(a){return Xi(a,h)})}catch(a){return Promise.reject(a)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Xi(this.fn.waiting,el)},n.pn=function(){var h=navigator.serviceWorker.controller;return h&&Ri(h.scriptURL,this.sn.toString())?h:void 0},n.bn=function(){try{var h=this;return function(a,l){try{var d=a()}catch(c){return l(c)}return d&&d.then?d.then(void 0,l):d}(function(){return ze(navigator.serviceWorker.register(h.sn,h.nn),function(a){return h.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},r=o,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Xa(r.prototype,s),o}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(i,o){this.Sn(i).add(o)},t.removeEventListener=function(i,o){this.Sn(i).delete(o)},t.dispatchEvent=function(i){i.target=this;for(var o,r=Qa(this.Sn(i.type));!(o=r()).done;)(0,o.value)(i)},t.Sn=function(i){return this.Pn.has(i)||this.Pn.set(i,new Set),this.Pn.get(i)},e}());Hi("/demos/foldtube/");const ol=(e,...t)=>{const i=Bt(e[0],"main-application");return Ft([i],...t)};class Fs extends J{constructor(){super();y(this,"_filter");y(this,"_swAlert");y(this,"_wb");y(this,"_wbRegistration");this._filter="",this._videos=Ls()}static get properties(){return{videos:{type:Array,reflectToAttribute:!1,attribute:!0}}}set videos(i){let o=this._videos;this._videos=i,this.requestUpdate("videos",o)}get videos(){return this._videos}firstUpdated(){this._swAlert=this.shadowRoot.querySelector("#sw-alert"),this._player=this.shadowRoot.querySelector("#player"),this._videoList=this.shadowRoot.querySelector("#video-list"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new il("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()}),window.onpopstate=i=>{if(i.state===null)this._hidePlayer();else{const o=Wa(i.state.video);o!=null&&(this._showPlayer(),this._player.src=o.name,this._player.alt=o.alt,this._player.title=o.title,this._player.date=o.date,this._player.views=o.views,this._player.channel=o.channel,this._player.subscribers=o.subscribers,this._player.description=o.description,this._player.play())}}}_hidePlayer(){this._player.closePlayer(),this._videoList.style.display="grid"}_showPlayer(){this._player.style.display="inline",this._videoList.style.display="none"}connectedCallback(){super.connectedCallback(),vt(this)}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&Xi(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_openVideo(i){this._showPlayer(),this._player.src=i.currentTarget.src,this._player.alt=i.currentTarget.alt,this._player.title=i.currentTarget.title,this._player.date=i.currentTarget.date,this._player.views=i.currentTarget.views,this._player.channel=i.currentTarget.channel,this._player.subscribers=i.currentTarget.subscribers,this._player.description=i.currentTarget.description,this._player.play(),history.pushState({video:this._player.src},null,document.location.href+"/"+this._player.title)}_filterVideos(i){this._hidePlayer(),this._filter=i.detail.text,this.videos=qa(this._filter)}render(){return X`
      <foldable-device-configurator></foldable-device-configurator>
      <div class="content">
        <title-bar @search-text-changed="${this._filterVideos}"></title-bar>
        <div class="grid-list" id="video-list">
          ${this.videos.map(i=>X`
            <video-thumbnail src="${i.name}" alt=${i.alt} title="${i.title}" date="${i.date}"
            views="${i.views}" channel="${i.channel}" subscribers="${i.subscribers}" 
            description="${i.description}" @click="${this._openVideo}">
            </video-thumbnail>
          `)}
        </div>
        <video-player id="player"></video-player>
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
    `}}y(Fs,"styles",ol`
    :host {
      width: 100vw;
      height: 100vh;
      --background-color: #ffffff;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      overflow: hidden;
    }

    title-bar {
      height: 10%;
      width: 100%;
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
      overflow-y: scroll;
    }

    .grid-list {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    video-player {
      display: none;
    }
  `);customElements.define("main-application",Fs);
