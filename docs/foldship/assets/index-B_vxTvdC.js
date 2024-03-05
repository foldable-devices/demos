var or=Object.defineProperty;var sr=Object.getPrototypeOf;var rr=Reflect.get;var nr=(t,i,e)=>i in t?or(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var v=(t,i,e)=>(nr(t,typeof i!="symbol"?i+"":i,e),e);var ve=(t,i,e)=>rr(sr(t),e,i);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=globalThis,Ci=ye.ShadowRoot&&(ye.ShadyCSS===void 0||ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ei=Symbol(),qi=new WeakMap;let ls=class{constructor(i,e,o){if(this._$cssResult$=!0,o!==Ei)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=e}get styleSheet(){let i=this.o;const e=this.t;if(Ci&&i===void 0){const o=e!==void 0&&e.length===1;o&&(i=qi.get(e)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),o&&qi.set(e,i))}return i}toString(){return this.cssText}};const ar=t=>new ls(typeof t=="string"?t:t+"",void 0,Ei),H=(t,...i)=>{const e=t.length===1?t[0]:i.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new ls(e,t,Ei)},lr=(t,i)=>{if(Ci)t.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of i){const o=document.createElement("style"),s=ye.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,t.appendChild(o)}},Wi=Ci?t=>t:t=>t instanceof CSSStyleSheet?(i=>{let e="";for(const o of i.cssRules)e+=o.cssText;return ar(e)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:hr,defineProperty:dr,getOwnPropertyDescriptor:cr,getOwnPropertyNames:ur,getOwnPropertySymbols:pr,getPrototypeOf:vr}=Object,ot=globalThis,Gi=ot.trustedTypes,mr=Gi?Gi.emptyScript:"",Oe=ot.reactiveElementPolyfillSupport,Yt=(t,i)=>t,xe={toAttribute(t,i){switch(i){case Boolean:t=t?mr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=t!==null;break;case Number:e=t===null?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch{e=null}}return e}},ki=(t,i)=>!hr(t,i),Yi={attribute:!0,type:String,converter:xe,reflect:!1,hasChanged:ki};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ot.litPropertyMetadata??(ot.litPropertyMetadata=new WeakMap);let pt=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??(this.l=[])).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,e=Yi){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(i,e),!e.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(i,o,e);s!==void 0&&dr(this.prototype,i,s)}}static getPropertyDescriptor(i,e,o){const{get:s,set:r}=cr(this.prototype,i)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);r.call(this,n),this.requestUpdate(i,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??Yi}static _$Ei(){if(this.hasOwnProperty(Yt("elementProperties")))return;const i=vr(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Yt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yt("properties"))){const e=this.properties,o=[...ur(e),...pr(e)];for(const s of o)this.createProperty(s,e[s])}const i=this[Symbol.metadata];if(i!==null){const e=litPropertyMetadata.get(i);if(e!==void 0)for(const[o,s]of e)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const s=this._$Eu(e,o);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const e=[];if(Array.isArray(i)){const o=new Set(i.flat(1/0).reverse());for(const s of o)e.unshift(Wi(s))}else i!==void 0&&e.push(Wi(i));return e}static _$Eu(i,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(e=>e(this))}addController(i){var e;(this._$EO??(this._$EO=new Set)).add(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)==null||e.call(i))}removeController(i){var e;(e=this._$EO)==null||e.delete(i)}_$E_(){const i=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(i.set(o,this[o]),delete this[o]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lr(i,this.constructor.elementStyles),i}connectedCallback(){var i;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$EO)==null||i.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(i,e,o){this._$AK(i,o)}_$EC(i,e){var r;const o=this.constructor.elementProperties.get(i),s=this.constructor._$Eu(i,o);if(s!==void 0&&o.reflect===!0){const n=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:xe).toAttribute(e,o.type);this._$Em=i,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(i,e){var r;const o=this.constructor,s=o._$Eh.get(i);if(s!==void 0&&this._$Em!==s){const n=o.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:xe;this._$Em=s,this[s]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(i,e,o){if(i!==void 0){if(o??(o=this.constructor.getPropertyOptions(i)),!(o.hasChanged??ki)(this[i],e))return;this.P(i,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(i,e,o){this._$AL.has(i)||this._$AL.set(i,e),o.reflect===!0&&this._$Em!==i&&(this._$Ej??(this._$Ej=new Set)).add(i)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EU()}catch(s){throw i=!1,this._$EU(),s}i&&this._$AE(e)}willUpdate(i){}_$AE(i){var e;(e=this._$EO)==null||e.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(i){}firstUpdated(i){}};pt.elementStyles=[],pt.shadowRootOptions={mode:"open"},pt[Yt("elementProperties")]=new Map,pt[Yt("finalized")]=new Map,Oe==null||Oe({ReactiveElement:pt}),(ot.reactiveElementVersions??(ot.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=globalThis,Se=Kt.trustedTypes,Ki=Se?Se.createPolicy("lit-html",{createHTML:t=>t}):void 0,hs="$lit$",it=`lit$${(Math.random()+"").slice(9)}$`,ds="?"+it,gr=`<${ds}>`,dt=document,ie=()=>dt.createComment(""),oe=t=>t===null||typeof t!="object"&&typeof t!="function",cs=Array.isArray,fr=t=>cs(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",He=`[ 	
\f\r]`,Ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zi=/-->/g,Xi=/>/g,rt=RegExp(`>|${He}(?:([^\\s"'>=/]+)(${He}*=${He}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ji=/'/g,Qi=/"/g,us=/^(?:script|style|textarea|title)$/i,br=t=>(i,...e)=>({_$litType$:t,strings:i,values:e}),R=br(1),ct=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),to=new WeakMap,ht=dt.createTreeWalker(dt,129);function ps(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ki!==void 0?Ki.createHTML(i):i}const yr=(t,i)=>{const e=t.length-1,o=[];let s,r=i===2?"<svg>":"",n=Ut;for(let l=0;l<e;l++){const a=t[l];let h,c,d=-1,u=0;for(;u<a.length&&(n.lastIndex=u,c=n.exec(a),c!==null);)u=n.lastIndex,n===Ut?c[1]==="!--"?n=Zi:c[1]!==void 0?n=Xi:c[2]!==void 0?(us.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=rt):c[3]!==void 0&&(n=rt):n===rt?c[0]===">"?(n=s??Ut,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,h=c[1],n=c[3]===void 0?rt:c[3]==='"'?Qi:Ji):n===Qi||n===Ji?n=rt:n===Zi||n===Xi?n=Ut:(n=rt,s=void 0);const p=n===rt&&t[l+1].startsWith("/>")?" ":"";r+=n===Ut?a+gr:d>=0?(o.push(h),a.slice(0,d)+hs+a.slice(d)+it+p):a+it+(d===-2?l:p)}return[ps(t,r+(t[e]||"<?>")+(i===2?"</svg>":"")),o]};let di=class vs{constructor({strings:i,_$litType$:e},o){let s;this.parts=[];let r=0,n=0;const l=i.length-1,a=this.parts,[h,c]=yr(i,e);if(this.el=vs.createElement(h,o),ht.currentNode=this.el.content,e===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=ht.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(hs)){const u=c[n++],p=s.getAttribute(d).split(it),f=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:f[2],strings:p,ctor:f[1]==="."?_r:f[1]==="?"?$r:f[1]==="@"?xr:Pe}),s.removeAttribute(d)}else d.startsWith(it)&&(a.push({type:6,index:r}),s.removeAttribute(d));if(us.test(s.tagName)){const d=s.textContent.split(it),u=d.length-1;if(u>0){s.textContent=Se?Se.emptyScript:"";for(let p=0;p<u;p++)s.append(d[p],ie()),ht.nextNode(),a.push({type:2,index:++r});s.append(d[u],ie())}}}else if(s.nodeType===8)if(s.data===ds)a.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(it,d+1))!==-1;)a.push({type:7,index:r}),d+=it.length-1}r++}}static createElement(i,e){const o=dt.createElement("template");return o.innerHTML=i,o}};function _t(t,i,e=t,o){var n,l;if(i===ct)return i;let s=o!==void 0?(n=e._$Co)==null?void 0:n[o]:e._$Cl;const r=oe(i)?void 0:i._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),r===void 0?s=void 0:(s=new r(t),s._$AT(t,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=s:e._$Cl=s),s!==void 0&&(i=_t(t,s._$AS(t,i.values),s,o)),i}let wr=class{constructor(i,e){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:e},parts:o}=this._$AD,s=((i==null?void 0:i.creationScope)??dt).importNode(e,!0);ht.currentNode=s;let r=ht.nextNode(),n=0,l=0,a=o[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new zi(r,r.nextSibling,this,i):a.type===1?h=new a.ctor(r,a.name,a.strings,this,i):a.type===6&&(h=new Sr(r,this,i)),this._$AV.push(h),a=o[++l]}n!==(a==null?void 0:a.index)&&(r=ht.nextNode(),n++)}return ht.currentNode=dt,s}p(i){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(i,o,e),e+=o.strings.length-2):o._$AI(i[e])),e++}},zi=class ms{get _$AU(){var i;return((i=this._$AM)==null?void 0:i._$AU)??this._$Cv}constructor(i,e,o,s){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=i,this._$AB=e,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let i=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=e.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,e=this){i=_t(this,i,e),oe(i)?i===U||i==null||i===""?(this._$AH!==U&&this._$AR(),this._$AH=U):i!==this._$AH&&i!==ct&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):fr(i)?this.k(i):this._(i)}S(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.S(i))}_(i){this._$AH!==U&&oe(this._$AH)?this._$AA.nextSibling.data=i:this.T(dt.createTextNode(i)),this._$AH=i}$(i){var r;const{values:e,_$litType$:o}=i,s=typeof o=="number"?this._$AC(i):(o.el===void 0&&(o.el=di.createElement(ps(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const n=new wr(s,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(i){let e=to.get(i.strings);return e===void 0&&to.set(i.strings,e=new di(i)),e}k(i){cs(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of i)s===e.length?e.push(o=new ms(this.S(ie()),this.S(ie()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(i=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);i&&i!==this._$AB;){const s=i.nextSibling;i.remove(),i=s}}setConnected(i){var e;this._$AM===void 0&&(this._$Cv=i,(e=this._$AP)==null||e.call(this,i))}},Pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,e,o,s,r){this.type=1,this._$AH=U,this._$AN=void 0,this.element=i,this.name=e,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=U}_$AI(i,e=this,o,s){const r=this.strings;let n=!1;if(r===void 0)i=_t(this,i,e,0),n=!oe(i)||i!==this._$AH&&i!==ct,n&&(this._$AH=i);else{const l=i;let a,h;for(i=r[0],a=0;a<r.length-1;a++)h=_t(this,l[o+a],e,a),h===ct&&(h=this._$AH[a]),n||(n=!oe(h)||h!==this._$AH[a]),h===U?i=U:i!==U&&(i+=(h??"")+r[a+1]),this._$AH[a]=h}n&&!s&&this.j(i)}j(i){i===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},_r=class extends Pe{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===U?void 0:i}},$r=class extends Pe{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==U)}},xr=class extends Pe{constructor(i,e,o,s,r){super(i,e,o,s,r),this.type=5}_$AI(i,e=this){if((i=_t(this,i,e,0)??U)===ct)return;const o=this._$AH,s=i===U&&o!==U||i.capture!==o.capture||i.once!==o.once||i.passive!==o.passive,r=i!==U&&(o===U||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,i):this._$AH.handleEvent(i)}},Sr=class{constructor(i,e,o){this.element=i,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(i){_t(this,i)}};const Ie=Kt.litHtmlPolyfillSupport;Ie==null||Ie(di,zi),(Kt.litHtmlVersions??(Kt.litHtmlVersions=[])).push("3.1.2");const Ar=(t,i,e)=>{const o=(e==null?void 0:e.renderBefore)??i;let s=o._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;o._$litPart$=s=new zi(i.insertBefore(ie(),r),r,void 0,e??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let q=class extends pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const i=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=i.firstChild),i}update(i){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Ar(e,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return ct}};var as;q._$litElement$=!0,q.finalized=!0,(as=globalThis.litElementHydrateSupport)==null||as.call(globalThis,{LitElement:q});const Ne=globalThis.litElementPolyfillSupport;Ne==null||Ne({LitElement:q});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");function eo(t,i){(i==null||i>t.length)&&(i=t.length);for(var e=0,o=new Array(i);e<i;e++)o[e]=t[e];return o}var Ot=function(){try{window[j].updateSegments();var t=function(){if(!De)return De=!0,Promise.resolve(Promise.resolve(!1)).then(function(i){De=i,window[j].dispatchEvent(new Event("change"))})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(i){return Promise.reject(i)}},j="__foldables__",De=!1,gs=function(){function t(){var o=this;if(window[j]!==void 0)return window[j];var s=document.createDocumentFragment();this.addEventListener=s.addEventListener.bind(s),this.removeEventListener=s.removeEventListener.bind(s),this.dispatchEvent=function(r){if(r.type==="change"){var n="on"+r.type;return typeof o[n]=="function"&&o[n](r),s.dispatchEvent(r)}},window.addEventListener("message",function(r){r.data.action==="update"&&Object.assign(o,r.data.value)}),window.addEventListener("resize",function(){return function(r,n){var l;return function(){var a=arguments,h=this;clearTimeout(l),l=setTimeout(function(){return r.apply(h,a)},n)}}(Ot(),200)})}var i,e=t.prototype;return e.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var s=window.innerHeight-this.browserShellSize,r=0,n=window.innerWidth,l=s/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:r,left:0,bottom:r+l,right:n,width:n,height:l},r+=o[a].height,r+=this.foldSize;if(this.horizontalViewportSegments>1)for(var h=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,c=window.innerHeight,d=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:d,right:d+h,bottom:c,width:h,height:c},d+=o[u].width,d+=this.foldSize;window.visualViewport.segments=o},e.randomizeSegmentsConfiguration=function(o){var s=Math.random()<.5,r=Math.round(Math.random()*(o-1)+1);s?(this.verticalViewportSegments=r,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=r,this.verticalViewportSegments=1)},(i=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(j+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(j+"-horizontal-viewport-segments",o),Ot()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(j+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(j+"-vertical-viewport-segments",o),Ot()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(j+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(j+"-fold-size",o),Ot()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(j+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(j+"-browser-shell-size",o),Ot()}}])&&function(o,s){for(var r=0;r<s.length;r++){var n=s[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(t.prototype,i),t}();window[j]=new gs,window.visualViewport.segments===void 0&&window[j].updateSegments();var fs="-viewport-segments",Ti="(\\s*)(@media.*?\\b"+fs+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",Cr=/\((.*?)\)/gi,Er=/@media[^\(]+/gi,kr=/(horizontal-viewport-segments:)\s?(\d)/gi,zr=/(vertical-viewport-segments:)\s?(\d)/gi,Tr=function(t){return new RegExp("env\\(\\s*"+t+"\\s*\\)","gi")};function bs(t,i){return t.replace(new RegExp(Ti,"gi"),i)}function io(t,i){var e=t.matchAll(i);return e===null?[]:Array.from(e,function(o){return o[2]})[0]}function ys(t){var i=function(o){var s,r=new RegExp(Ti,"gi");if(typeof o.matchAll=="function")s=Array.from(o.matchAll(r));else{for(s=[];s[s.length]=r.exec(o););s.length--}return s}(t),e=[[]];return i.forEach(function(o){var s=o[1],r=o[2],n=o[3],l=o[4],a=r.match(Er)||[],h=r.match(Cr)||[],c=io(r,zr);c===void 0&&(c=1);var d=io(r,kr);d===void 0&&(d=1),h=h.filter(function(u){return!u.includes(fs)}).join(" and "),e[c]===void 0&&(e[c]=new Array),e[c][d]=""+s+a+h+"{"+n+l+"}"}),e}var Ve=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+Ve);var oo,ws=new gs;if(!Ve){var Fe=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(oo=Fe,Promise.all(oo.map(function(t){return t.href?fetch(t.href).then(function(i){return i.text()}):t.textContent}))).then(function(t){var i=new DocumentFragment;t.forEach(function(e,o){for(var s,r=bs(e,""),n=ys(e),l=Fe[o].href||"inline",a=0,h=Object.entries(n);a<h.length;a++){var c=h[a],d=c[0],u=c[1];st[d]==null&&(st[d]=[]);for(var p=0,f=Object.entries(u);p<f.length;p++){var y=f[p];st[d][y[0]]="/* origin: "+l+" */"+y[1]}}if(l=="inline"||(s=e,new RegExp(Ti,"gi").test(s))){var m=document.createElement("style");m.setAttribute("data-css-origin",l),m.textContent=r,i.appendChild(m)}else{var b=document.createElement("link");b.type="text/css",b.rel="stylesheet",b.href=l,i.appendChild(b)}}),Fe.forEach(function(e){return e.parentElement!=null&&e.parentElement.removeChild(e)}),document.head.appendChild(i),zt()})}var st=[[]];function de(t,i){if(Ve)return t;var e=bs(t,""),o=ys(t);i&&(st[i]=[[]]);for(var s=i?st[i]:st,r=i?"":"/* origin: inline */",n=0,l=Object.entries(o);n<l.length;n++){var a=l[n],h=a[0],c=a[1];s[h]==null&&(s[h]=[]);for(var d=0,u=Object.entries(c);d<u.length;d++){var p=u[d];s[h][p[0]]=""+r+p[1]}}return s[0][0]=e,e}function zt(t){Ve||(so(t),ws.addEventListener("change",function(){return so(t)}))}function so(t){var i,e=ws,o=null;(i=t?st[t.nodeName.toLowerCase()]:st)[e.verticalViewportSegments]&&(o=i[e.verticalViewportSegments][e.horizontalViewportSegments]);var s,r=i[0][0]?i[0][0]:null;if(o){var n=window.visualViewport.segments,l=!1;n.length>1&&(l=!(n[0].height<window.innerHeight));for(var a=0,h=Object.entries(n);a<h.length;a++)for(var c=h[a],d=c[0],u=0,p=Object.entries(c[1]);u<p.length;u++){var f=p[u],y=f[0];s=f[1]+"px",o=o.replace(Tr(l?"viewport-segment-"+y+" "+d+" 0":"viewport-segment-"+y+" 0 "+d),s)}var m="__foldables_sheet__",b=function($,N){for(var k,C=function(E,pe){var D=typeof Symbol<"u"&&E[Symbol.iterator]||E["@@iterator"];if(D)return(D=D.call(E)).next.bind(D);if(Array.isArray(E)||(D=function(I,Lt){if(I){if(typeof I=="string")return eo(I,Lt);var W=Object.prototype.toString.call(I).slice(8,-1);return W==="Object"&&I.constructor&&(W=I.constructor.name),W==="Map"||W==="Set"?Array.from(I):W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W)?eo(I,Lt):void 0}}(E))){D&&(E=D);var Mt=0;return function(){return Mt>=E.length?{done:!0}:{done:!1,value:E[Mt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}($.querySelectorAll("."+m));!(k=C()).done;)k.value.remove();var V=document.createElement("style");V.className=m,V.textContent=N,$===document?document.head.appendChild(V):$.appendChild(V)};if(t){var A=t.shadowRoot;"adoptedStyleSheets"in A&&A.adoptedStyleSheets.length>0?A.adoptedStyleSheets[0].replace(r+o):b(A,o)}else b(document,o)}}var ci="";function ui(t){ci=t}function Rr(t=""){if(!ci){const i=[...document.getElementsByTagName("script")],e=i.find(o=>o.hasAttribute("data-shoelace"));if(e)ui(e.getAttribute("data-shoelace"));else{const o=i.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let s="";o&&(s=o.getAttribute("src")),ui(s.split("/").slice(0,-1).join("/"))}}return ci.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Pr={name:"default",resolver:t=>Rr(`assets/icons/${t}.svg`)},Vr=Pr,ro={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
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
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
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
  `},Mr={name:"system",resolver:t=>t in ro?`data:image/svg+xml,${encodeURIComponent(ro[t])}`:""},Lr=Mr,Ur=[Vr,Lr],pi=[];function Or(t){pi.push(t)}function Hr(t){pi=pi.filter(i=>i!==t)}function no(t){return Ur.find(i=>i.name===t)}var Ir=H`
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
`,_s=Object.defineProperty,Nr=Object.defineProperties,Dr=Object.getOwnPropertyDescriptor,Fr=Object.getOwnPropertyDescriptors,ao=Object.getOwnPropertySymbols,jr=Object.prototype.hasOwnProperty,Br=Object.prototype.propertyIsEnumerable,lo=(t,i,e)=>i in t?_s(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Tt=(t,i)=>{for(var e in i||(i={}))jr.call(i,e)&&lo(t,e,i[e]);if(ao)for(var e of ao(i))Br.call(i,e)&&lo(t,e,i[e]);return t},Ri=(t,i)=>Nr(t,Fr(i)),g=(t,i,e,o)=>{for(var s=o>1?void 0:o?Dr(i,e):i,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=(o?n(i,e,s):n(s))||s);return o&&s&&_s(i,e,s),s};function ce(t,i){const e=Tt({waitUntilFirstUpdate:!1},i);return(o,s)=>{const{update:r}=o,n=Array.isArray(t)?t:[t];o.update=function(l){n.forEach(a=>{const h=a;if(l.has(h)){const c=l.get(h),d=this[h];c!==d&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[s](c,d)}}),r.call(this,l)}}}var ue=H`
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
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qr={attribute:!0,type:String,converter:xe,reflect:!1,hasChanged:ki},Wr=(t=qr,i,e)=>{const{kind:o,metadata:s}=e;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(e.name,t),o==="accessor"){const{name:n}=e;return{set(l){const a=i.get.call(this);i.set.call(this,l),this.requestUpdate(n,a,t)},init(l){return l!==void 0&&this.P(n,void 0,t),l}}}if(o==="setter"){const{name:n}=e;return function(l){const a=this[n];i.call(this,l),this.requestUpdate(n,a,t)}}throw Error("Unsupported decorator location: "+o)};function w(t){return(i,e)=>typeof e=="object"?Wr(t,i,e):((o,s,r)=>{const n=s.hasOwnProperty(r);return s.constructor.createProperty(r,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(s,r):void 0})(t,i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Me(t){return w({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ho=(t,i,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(t,i,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pi(t,i){return(e,o,s)=>{const r=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(t))??null};if(i){const{get:n,set:l}=typeof o=="object"?e:s??(()=>{const a=Symbol();return{get(){return this[a]},set(h){this[a]=h}}})();return ho(e,o,{get(){let a=n.call(this);return a===void 0&&(a=r(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return ho(e,o,{get(){return r(this)}})}}var J=class extends q{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,i])=>{this.constructor.define(t,i)})}emit(t,i){const e=new CustomEvent(t,Tt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return this.dispatchEvent(e),e}static define(t,i=this,e={}){const o=customElements.get(t);if(!o){customElements.define(t,class extends i{},e);return}let s=" (unknown version)",r=s;"version"in i&&i.version&&(s=" v"+i.version),"version"in o&&o.version&&(r=" v"+o.version),!(s&&r&&s===r)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${r} has already been registered.`)}};J.version="2.14.0";J.dependencies={};g([w()],J.prototype,"dir",2);g([w()],J.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gr=(t,i)=>i===void 0?(t==null?void 0:t._$litType$)!==void 0:(t==null?void 0:t._$litType$)===i;var Ht=Symbol(),me=Symbol(),je,Be=new Map,Z=class extends J{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,i){var e;let o;if(i!=null&&i.spriteSheet)return R`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?Ht:me}catch{return me}try{const s=document.createElement("div");s.innerHTML=await o.text();const r=s.firstElementChild;if(((e=r==null?void 0:r.tagName)==null?void 0:e.toLowerCase())!=="svg")return Ht;je||(je=new DOMParser);const l=je.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Ht}catch{return Ht}}connectedCallback(){super.connectedCallback(),Or(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Hr(this)}getIconSource(){const t=no(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:i,fromLibrary:e}=this.getIconSource(),o=e?no(this.library):void 0;if(!i){this.svg=null;return}let s=Be.get(i);if(s||(s=this.resolveIcon(i,o),Be.set(i,s)),!this.initialRender)return;const r=await s;if(r===me&&Be.delete(i),i===this.getIconSource().url){if(Gr(r)){this.svg=r;return}switch(r){case me:case Ht:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Z.styles=[ue,Ir];g([Me()],Z.prototype,"svg",2);g([w({reflect:!0})],Z.prototype,"name",2);g([w()],Z.prototype,"src",2);g([w()],Z.prototype,"label",2);g([w({reflect:!0})],Z.prototype,"library",2);g([ce("label")],Z.prototype,"handleLabelChange",1);g([ce(["name","src","library"])],Z.prototype,"setIcon",1);Z.define("sl-icon");var Yr=H`
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
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zr=t=>(...i)=>({_$litDirective$:t,values:i});let Xr=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,e,o){this._$Ct=i,this._$AM=e,this._$Ci=o}_$AS(i,e){return this.update(i,e)}update(i,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vi=Zr(class extends Xr{constructor(t){var i;if(super(t),t.type!==Kr.ATTRIBUTE||t.name!=="class"||((i=t.strings)==null?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(i=>t[i]).join(" ")+" "}update(t,[i]){var o,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in i)i[r]&&!((o=this.nt)!=null&&o.has(r))&&this.st.add(r);return this.render(i)}const e=t.element.classList;for(const r of this.st)r in i||(e.remove(r),this.st.delete(r));for(const r in i){const n=!!i[r];n===this.st.has(r)||(s=this.nt)!=null&&s.has(r)||(n?(e.add(r),this.st.add(r)):(e.remove(r),this.st.delete(r)))}return ct}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s=Symbol.for(""),Jr=t=>{if((t==null?void 0:t.r)===$s)return t==null?void 0:t._$litStatic$},Ae=(t,...i)=>({_$litStatic$:i.reduce((e,o,s)=>e+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[s+1],t[0]),r:$s}),co=new Map,Qr=t=>(i,...e)=>{const o=e.length;let s,r;const n=[],l=[];let a,h=0,c=!1;for(;h<o;){for(a=i[h];h<o&&(r=e[h],(s=Jr(r))!==void 0);)a+=s+i[++h],c=!0;h!==o&&l.push(r),n.push(a),h++}if(h===o&&n.push(i[o]),c){const d=n.join("$$lit$$");(i=co.get(d))===void 0&&(n.raw=n,co.set(d,i=n)),e=l}return t(i,...e)},we=Qr(R);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=t=>t??U;var G=class extends J{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,i=t?Ae`a`:Ae`button`;return we`
      <${i}
        part="base"
        class=${Vi({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${L(t?void 0:this.disabled)}
        type=${L(t?void 0:"button")}
        href=${L(t?this.href:void 0)}
        target=${L(t?this.target:void 0)}
        download=${L(t?this.download:void 0)}
        rel=${L(t&&this.target?"noreferrer noopener":void 0)}
        role=${L(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${L(this.name)}
          library=${L(this.library)}
          src=${L(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${i}>
    `}};G.styles=[ue,Yr];G.dependencies={"sl-icon":Z};g([Pi(".icon-button")],G.prototype,"button",2);g([Me()],G.prototype,"hasFocus",2);g([w()],G.prototype,"name",2);g([w()],G.prototype,"library",2);g([w()],G.prototype,"src",2);g([w()],G.prototype,"href",2);g([w()],G.prototype,"target",2);g([w()],G.prototype,"download",2);g([w()],G.prototype,"label",2);g([w({type:Boolean,reflect:!0})],G.prototype,"disabled",2);var xs=new Map,tn=new WeakMap;function en(t){return t??{keyframes:[],options:{duration:0}}}function uo(t,i){return i.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Ss(t,i){xs.set(t,en(i))}function po(t,i,e){const o=tn.get(t);if(o!=null&&o[i])return uo(o[i],e.dir);const s=xs.get(i);return s?uo(s,e.dir):{keyframes:[],options:{duration:0}}}function vo(t,i){return new Promise(e=>{function o(s){s.target===t&&(t.removeEventListener(i,o),e())}t.addEventListener(i,o)})}function mo(t,i,e){return new Promise(o=>{if((e==null?void 0:e.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(i,Ri(Tt({},e),{duration:on()?0:e.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})})}function on(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function go(t){return Promise.all(t.getAnimations().map(i=>new Promise(e=>{i.cancel(),requestAnimationFrame(e)})))}var As=class{constructor(t,...i){this.slotNames=[],this.handleSlotChange=e=>{const o=e.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=i}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const i=t;if(i.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!i.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};const vi=new Set,sn=new MutationObserver(zs),gt=new Map;let Cs=document.documentElement.dir||"ltr",Es=document.documentElement.lang||navigator.language,lt;sn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function ks(...t){t.map(i=>{const e=i.$code.toLowerCase();gt.has(e)?gt.set(e,Object.assign(Object.assign({},gt.get(e)),i)):gt.set(e,i),lt||(lt=i)}),zs()}function zs(){Cs=document.documentElement.dir||"ltr",Es=document.documentElement.lang||navigator.language,[...vi.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let rn=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){vi.add(this.host)}hostDisconnected(){vi.delete(this.host)}dir(){return`${this.host.dir||Cs}`.toLowerCase()}lang(){return`${this.host.lang||Es}`.toLowerCase()}getTranslationData(i){var e,o;const s=new Intl.Locale(i.replace(/_/g,"-")),r=s==null?void 0:s.language.toLowerCase(),n=(o=(e=s==null?void 0:s.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",l=gt.get(`${r}-${n}`),a=gt.get(r);return{locale:s,language:r,region:n,primary:l,secondary:a}}exists(i,e){var o;const{primary:s,secondary:r}=this.getTranslationData((o=e.lang)!==null&&o!==void 0?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[i]||r&&r[i]||e.includeFallback&&lt&&lt[i])}term(i,...e){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let r;if(o&&o[i])r=o[i];else if(s&&s[i])r=s[i];else if(lt&&lt[i])r=lt[i];else return console.error(`No translation found for: ${String(i)}`),String(i);return typeof r=="function"?r(...e):r}date(i,e){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),e).format(i)}number(i,e){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),e).format(i)}relativeTime(i,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(i,e)}};var Ts={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,i)=>`Go to slide ${t} of ${i}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ks(Ts);var nn=Ts,Mi=class extends rn{};ks(nn);var an=H`
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
`,ut=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),X=class extends J{constructor(){super(...arguments),this.hasSlotController=new As(this,"icon","suffix"),this.localize=new Mi(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await go(this.base),this.base.hidden=!1;const{keyframes:t,options:i}=po(this,"alert.show",{dir:this.localize.dir()});await mo(this.base,t,i),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await go(this.base);const{keyframes:t,options:i}=po(this,"alert.hide",{dir:this.localize.dir()});await mo(this.base,t,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,vo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,vo(this,"sl-after-hide")}async toast(){return new Promise(t=>{ut.parentElement===null&&document.body.append(ut),ut.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ut.removeChild(this),t(),ut.querySelector("sl-alert")===null&&ut.remove()},{once:!0})})}render(){return R`
      <div
        part="base"
        class=${Vi({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?R`
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
    `}};X.styles=[ue,an];X.dependencies={"sl-icon-button":G};g([Pi('[part~="base"]')],X.prototype,"base",2);g([w({type:Boolean,reflect:!0})],X.prototype,"open",2);g([w({type:Boolean,reflect:!0})],X.prototype,"closable",2);g([w({reflect:!0})],X.prototype,"variant",2);g([w({type:Number})],X.prototype,"duration",2);g([ce("open",{waitUntilFirstUpdate:!0})],X.prototype,"handleOpenChange",1);g([ce("duration")],X.prototype,"handleDurationChange",1);Ss("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Ss("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});X.define("sl-alert");var ln=H`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
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
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,Rs=class extends J{constructor(){super(...arguments),this.localize=new Mi(this)}render(){return R`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Rs.styles=[ue,ln];var It=new WeakMap,Nt=new WeakMap,Dt=new WeakMap,qe=new WeakSet,ge=new WeakMap,hn=class{constructor(t,i){this.handleFormData=e=>{const o=this.options.disabled(this.host),s=this.options.name(this.host),r=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof s=="string"&&s.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(l=>{e.formData.append(s,l.toString())}):e.formData.append(s,r.toString()))},this.handleFormSubmit=e=>{var o;const s=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=It.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ge.set(this.host,[])},this.handleInteraction=e=>{const o=ge.get(this.host);o.includes(e.type)||o.push(e.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const o of e)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const o of e)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Tt({form:e=>{const o=e.form;if(o){const r=e.getRootNode().getElementById(o);if(r)return r}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var o;return(o=e.disabled)!=null?o:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity=="function"?e.checkValidity():!0,setValue:(e,o)=>e.value=o,assumeInteractionOn:["sl-input"]},i)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),ge.set(this.host,[]),this.options.assumeInteractionOn.forEach(i=>{this.host.addEventListener(i,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ge.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,It.has(this.form)?It.get(this.form).add(this.host):It.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Nt.has(this.form)||(Nt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Dt.has(this.form)||(Dt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=It.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Nt.has(this.form)&&(this.form.reportValidity=Nt.get(this.form),Nt.delete(this.form)),Dt.has(this.form)&&(this.form.checkValidity=Dt.get(this.form),Dt.delete(this.form)),this.form=void 0))}setUserInteracted(t,i){i?qe.add(t):qe.delete(t),t.requestUpdate()}doAction(t,i){if(this.form){const e=document.createElement("button");e.type=t,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",i&&(e.name=i.name,e.value=i.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{i.hasAttribute(o)&&e.setAttribute(o,i.getAttribute(o))})),this.form.append(e),e.click(),e.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const i=this.host,e=!!qe.has(i),o=!!i.required;i.toggleAttribute("data-required",o),i.toggleAttribute("data-optional",!o),i.toggleAttribute("data-invalid",!t),i.toggleAttribute("data-valid",t),i.toggleAttribute("data-user-invalid",!t&&e),i.toggleAttribute("data-user-valid",t&&e)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const i=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||i.preventDefault(),this.host.dispatchEvent(i)||t==null||t.preventDefault()}},Li=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Ri(Tt({},Li),{valid:!1,valueMissing:!0}));Object.freeze(Ri(Tt({},Li),{valid:!1,customError:!0}));var dn=H`
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
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
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
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
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
`,x=class extends J{constructor(){super(...arguments),this.formControlController=new hn(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new As(this,"[default]","prefix","suffix"),this.localize=new Mi(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Li}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),i=t?Ae`a`:Ae`button`;return we`
      <${i}
        part="base"
        class=${Vi({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${L(t?void 0:this.disabled)}
        type=${L(t?void 0:this.type)}
        title=${this.title}
        name=${L(t?void 0:this.name)}
        value=${L(t?void 0:this.value)}
        href=${L(t?this.href:void 0)}
        target=${L(t?this.target:void 0)}
        download=${L(t?this.download:void 0)}
        rel=${L(t?this.rel:void 0)}
        role=${L(t?void 0:"button")}
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
        ${this.caret?we` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?we`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${i}>
    `}};x.styles=[ue,dn];x.dependencies={"sl-icon":Z,"sl-spinner":Rs};g([Pi(".button")],x.prototype,"button",2);g([Me()],x.prototype,"hasFocus",2);g([Me()],x.prototype,"invalid",2);g([w()],x.prototype,"title",2);g([w({reflect:!0})],x.prototype,"variant",2);g([w({reflect:!0})],x.prototype,"size",2);g([w({type:Boolean,reflect:!0})],x.prototype,"caret",2);g([w({type:Boolean,reflect:!0})],x.prototype,"disabled",2);g([w({type:Boolean,reflect:!0})],x.prototype,"loading",2);g([w({type:Boolean,reflect:!0})],x.prototype,"outline",2);g([w({type:Boolean,reflect:!0})],x.prototype,"pill",2);g([w({type:Boolean,reflect:!0})],x.prototype,"circle",2);g([w()],x.prototype,"type",2);g([w()],x.prototype,"name",2);g([w()],x.prototype,"value",2);g([w()],x.prototype,"href",2);g([w()],x.prototype,"target",2);g([w()],x.prototype,"rel",2);g([w()],x.prototype,"download",2);g([w()],x.prototype,"form",2);g([w({attribute:"formaction"})],x.prototype,"formAction",2);g([w({attribute:"formenctype"})],x.prototype,"formEnctype",2);g([w({attribute:"formmethod"})],x.prototype,"formMethod",2);g([w({attribute:"formnovalidate",type:Boolean})],x.prototype,"formNoValidate",2);g([w({attribute:"formtarget"})],x.prototype,"formTarget",2);g([ce("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);x.define("sl-button");const Y={Horizontal:"horizontal",Vertical:"vertical"},P={Submarine:"submarine",Carrier:"carrier",Rescue:"rescue",Battleship:"battleship",Destroyer:"destroyer"};function se(t){switch(t){case P.Submarine:return 3;case P.Carrier:return 5;case P.Battleship:return 4;case P.Destroyer:return 3;case P.Rescue:return 2;default:return 0}}class Ui extends q{constructor(){super();v(this,"_image");this._x=0,this._y=0,this._orientation=Y.Horizontal,this._type=P.Submarine,this._size=0,this._destroyed=!1,this._hitCount=0}static get properties(){return{type:{type:String,reflectToAttribute:!0,attribute:!0},orientation:{type:String,reflectToAttribute:!0,attribute:!0},x:{type:Number,reflectToAttribute:!0,attribute:!0},y:{type:Number,reflectToAttribute:!0,attribute:!0},size:{type:Number},hitCount:{type:Number},destroyed:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set type(e){let o=this._type;this._type=e,this.requestUpdate("type",o),this.size=se(this._type),this.shadowRoot&&this.shadowRoot.host.style.setProperty("--size",this._size)}get type(){return this._type}set destroyed(e){let o=this._destroyed;this._destroyed=e,this.requestUpdate("destroyed",o)}get destroyed(){return this._destroyed}set hitCount(e){let o=this._hitCount;this._hitCount=e,this.requestUpdate("hitCount",o)}get hitCount(){return this._hitCount}set orientation(e){let o=this._orientation;this._orientation=e,this.requestUpdate("orientation",o),this.shadowRoot&&(e==Y.Horizontal?(this.shadowRoot.host.classList.add("horizontal"),this.shadowRoot.host.classList.remove("vertical")):(this.shadowRoot.host.classList.remove("horizontal"),this.shadowRoot.host.classList.add("vertical")))}get orientation(){return this._orientation}set x(e){let o=this._x;this._x=e,this.requestUpdate("x",o),this.shadowRoot&&this.shadowRoot.host.style.setProperty("--x",this.x+1)}get x(){return this._x}set y(e){let o=this._y;this._y=e,this.requestUpdate("y",o),this.shadowRoot&&this.shadowRoot.host.style.setProperty("--y",e+1)}get y(){return this._y}set size(e){let o=this._size;this._size=e,this.requestUpdate("size",o),this.shadowRoot&&this.shadowRoot.host.style.setProperty("--size",this._size)}get size(){return this._size}firstUpdated(){this._image=this.shadowRoot.querySelector("#image"),this.size=se(this._type),this.y=this._y,this.x=this._x,this.orientation=this._orientation}reset(){Array.from({length:this.size}).map((e,o)=>{this.renderRoot.querySelector("#hit-"+o).classList.remove("hit")}),this.hitCount=0,this.destroyed=!1}enemyShootAt(e,o){let s;this.orientation===Y.Horizontal?s=o-this.y:s=e-this.x,this.renderRoot.querySelector("#hit-"+s).classList.add("hit"),this.hitCount++,this.hitCount===this.size?this.shipDestroyed():this.shipHit()}shipDestroyed(){this.destroyed=!0;let e=new CustomEvent("ship-destroyed",{detail:{message:"Ship Destroyed",type:this.type},bubbles:!0,composed:!0});this.dispatchEvent(e)}shipHit(){let e=new CustomEvent("ship-hit",{detail:{message:"Ship Hit",type:this.type},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return R`
      <div class="hit-zone ${this.orientation===Y.Horizontal?"hit-zone-horizontal":"hit-zone-vertical"}">
        ${Array.from({length:this.size}).map((e,o)=>R`
            <div class="cell"><div class="hit-area" id="hit-${o}"></div></div>
        `)}
      </div>
      <picture>
          <source srcset="images/${this.type}-top-${this.orientation}.webp" type="image/webp">
          <img id="image" src="images/${this.type}-top-${this.orientation}.png" alt="${this.type}"/>
      </picture>
    `}}v(Ui,"styles",H`
    :host {
      overflow: hidden;
      position: relative;
      border: var(--my-ship-border);

      --x: 0;
      --y: 0;
      --size: 0;
      --my-ship-border: solid 2px #910101;
    }

    :host(.horizontal) {
      grid-column-start: var(--y);
      grid-column-end: calc(var(--y) + var(--size));
      grid-row-start: var(--x);
      grid-row-end: var(--x);
    }

    :host(.vertical) {
      grid-column-start: var(--y);
      grid-column-end: var(--y);
      grid-row-start: var(--x);
      grid-row-end: calc(var(--x) + var(--size));
    }

    img {
      max-width: 100%;
      max-height: 100%;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .cell {
      border: var(--my-ship-border);
      border-style: dotted;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
    }


    .hit-area {
      height: 2vw;
      width: 2vw;
      background-color: black;
      border-radius: 50%;
      z-index: 3;
      opacity: 0.85;
    }

    .hit {
      background-color: red;
    }

    .hit-zone {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;
    }

    .hit-zone-vertical {
      flex-direction: column;
    }
  `);customElements.define("ship-element",Ui);class Ps extends q{static get properties(){return{hit:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set hit(i){let e=this._hit;this._hit=i,this.requestUpdate("hit",e)}get hit(){return this._hit}constructor(){super(),this._hit=!1}render(){return R`
      <div class="cell">
        <slot></slot>
        <div class="hit-water-area ${this.hit?"visible":""}"></div>
      </div>`}}v(Ps,"styles",H`
    :host {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1vw;
    }

    .hit-water-area {
      height: 2vw;
      width: 2vw;
      background-color: white;
      border-radius: 50%;
      display: none;
    }

    .visible {
      display: block;
    }
  `);customElements.define("empty-cell",Ps);class Oi extends q{constructor(){super();v(this,"_shipPlaced",[]);this._grid=[]}static get properties(){return{grid:{type:Array,hasChanged(){return!0}}}}set grid(e){let o=this._grid;this._grid=e,this.requestUpdate("grid",o)}get grid(){return this._grid}getRandomCoordinate(){return Math.floor(Math.random()*10+1)}getRandomOrientation(){return Math.random()>=.5?Y.Vertical:Y.Horizontal}firstUpdated(){this.initGrid()}initGrid(){this.grid=[[{text:"/"},{text:"1"},{text:"2"},{text:"3"},{text:"4"},{text:"5"},{text:"6"},{text:"7"},{text:"8"},{text:"9"},{text:"10"}],[{text:"A"},"","","","","","","","","",""],[{text:"B"},"","","","","","","","","",""],[{text:"C"},"","","","","","","","","",""],[{text:"D"},"","","","","","","","","",""],[{text:"E"},"","","","","","","","","",""],[{text:"F"},"","","","","","","","","",""],[{text:"G"},"","","","","","","","","",""],[{text:"H"},"","","","","","","","","",""],[{text:"I"},"","","","","","","","","",""],[{text:"J"},"","","","","","","","","",""]];for(let e=1;e<=10;++e)for(let o=1;o<=10;o++)this.grid[e][o]={text:"",shot:!1}}restart(){this.initGrid(),this._shipPlaced=[],this._submarine.reset(),this._destroyer.reset(),this._carrier.reset(),this._battleship.reset(),this._rescue.reset(),this.generateRandomGrid()}generateRandomGrid(){Object.values(P).map(e=>{this.placeShipRandomly(e)})}placeShipRandomly(e){const o=this.getRandomCoordinate(),s=this.getRandomCoordinate(),r=this.getRandomOrientation(),n=se(e);if(r===Y.Horizontal){if(s+n>10)return this.placeShipRandomly(e)}else if(o+n>10)return this.placeShipRandomly(e);if(r===Y.Horizontal){for(let l=s;l<=s+n;++l)if(this.grid[o][l]!=null&&this.isShip(this.grid[o][l]))return this.placeShipRandomly(e)}else for(let l=o;l<=o+n;++l)if(this.grid[l][s]!=null&&this.isShip(this.grid[l][s]))return this.placeShipRandomly(e);this.addShip(e,o,s,r,n)}addShip(e,o,s,r,n){if(o===0||s===0){console.error("Adding ship in the wrong column/row.");return}const l={type:e,orientation:r,x:o,y:s,shot:!1};if(this.grid[o][s]=l,r===Y.Horizontal)for(let a=s;a<s+n;++a)this.grid[o][a]={type:e,orientation:r,x:o,y:a,shot:!1};else if(r===Y.Vertical)for(let a=o;a<o+n;++a)this.grid[a][s]={type:e,orientation:r,x:a,y:s,shot:!1}}updateGrid(){this._shipPlaced=[],this.requestUpdate("grid",this.grid)}isShip(e){return e.type===P.Submarine||e.type===P.Destroyer||e.type===P.Battleship||e.type===P.Carrier||e.type===P.Rescue}isShipPlaced(e){return this._shipPlaced.includes(e)}isGameOver(){return this._submarine.destroyed&&this._destroyer.destroyed&&this._carrier.destroyed&&this._battleship.destroyed&&this._rescue.destroyed}dispatchGameOverIfNecessary(){if(this.isGameOver()){let e=new CustomEvent("game-over",{detail:{message:"Game Over"},bubbles:!0,composed:!0});this.dispatchEvent(e)}}playerPlayed(e,o){let s=new CustomEvent("player-played",{detail:{message:"player played.",x:e,y:o},bubbles:!0,composed:!0});this.dispatchEvent(s),this.dispatchGameOverIfNecessary()}playerHitShip(e){let o=new CustomEvent("player-hit",{detail:{message:"player played.",type:e},bubbles:!0,composed:!0});this.dispatchEvent(o)}playerSankShip(e){let o=new CustomEvent("player-sank",{detail:{message:"player played.",type:e},bubbles:!0,composed:!0});this.dispatchEvent(o),this.dispatchGameOverIfNecessary()}update(){super.update(),this._submarine=this.shadowRoot.querySelector("#submarine"),this._destroyer=this.shadowRoot.querySelector("#destroyer"),this._carrier=this.shadowRoot.querySelector("#carrier"),this._battleship=this.shadowRoot.querySelector("#battleship"),this._rescue=this.shadowRoot.querySelector("#rescue")}}v(Oi,"styles",H`
    :host {
      width: 100%;
      height: 100%;
      --border-grid: solid 2px white;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    empty-cell {
      border: var(--border-grid);
    }

    .grid {
      display: grid;
      width: 100%;
      height: 97%;
      grid-template-columns: repeat(11, 1fr);
      grid-template-rows: repeat(11, 1fr);
    }

    .title {
      font-size: 1vw;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3%;
    }
  `);const S={Top:"Top",Bottom:"Bottom",Left:"Left",Right:"Right"},Qt=class Qt extends Oi{constructor(){super();v(this,"_pendingSanks",[]);v(this,"_boatsToSink",[]);this._previousShot={x:0,y:0}}firstUpdated(){super.firstUpdated(),this.generateRandomGrid(),this._boatsToSink=[P.Carrier,P.Battleship,P.Submarine,P.Destroyer,P.Rescue]}restart(){super.restart(),this._previousShot={x:0,y:0},this._pendingSanks=[],this._boatsToSink=[P.Carrier,P.Battleship,P.Submarine,P.Destroyer,P.Rescue]}isCellAPreviouslyMissedShot(e){return e.shot&&e.type===void 0}isCellABoatPreviouslyShot(e){return e.shot&&e.type!=null&&e.type===this.grid[this._previousShot.x][this._previousShot.y].type}biggestBoatLeft(){return se(this._boatsToSink[0])}smallestBoatLeft(){return se(this._boatsToSink[this._boatsToSink.length-1])}boatsLeftFitAround(e,o){let s=this.biggestBoatLeft();const r={x:e,y:o},n=this.walkGridAndCountEmptySpaces(S.Left,r,s-1,0),l=this.walkGridAndCountEmptySpaces(S.Right,r,s-1,0),a=this.walkGridAndCountEmptySpaces(S.Top,r,s-1,0),h=this.walkGridAndCountEmptySpaces(S.Bottom,r,s-1,0);return n+1===s||l+1===s||a+1===s||h+1===s||n+l+1>=s||a+h+1>=s}walkGridAndCountEmptySpaces(e,o,s,r){if(this.isCellAtTheEge(e,o))return r;const n=this.getNeighborCell(e,o);return this.grid[n.x][n.y].shot===!0||(r++,r===s)?r:this.walkGridAndCountEmptySpaces(e,n,s,r)}isCellAtTheEge(e,o){return e===S.Left&&o.y-1===0||e===S.Right&&o.y+1===11||e===S.Top&&o.x-1===0||e===S.Bottom&&o.x+1===11}getNeighborCell(e,o){let s=o;switch(e){case S.Left:s={x:o.x,y:Math.max(o.y-1,1)};break;case S.Right:s={x:o.x,y:Math.min(o.y+1,10)};break;case S.Top:s={x:Math.max(o.x-1,1),y:o.y};break;case S.Bottom:s={x:Math.min(o.x+1,10),y:o.y};break;default:console.error("wrong direction");return}return s}walkGridToFindEmptyCell(e,o){if(this.isCellAtTheEge(e,o))return null;const s=this.getNeighborCell(e,o);return this.isCellAPreviouslyMissedShot(this.grid[s.x][s.y])?null:this.isCellABoatPreviouslyShot(this.grid[s.x][s.y])?this.walkGridToFindEmptyCell(e,s):this.grid[s.x][s.y].shot===!0?null:s}walkGridToFindCandidateToShoot(e,o,s,r){if(this.isCellAtTheEge(e,o))return r;const n=this.getNeighborCell(e,o);return this.isCellAPreviouslyMissedShot(this.grid[n.x][n.y])?r:this.isCellABoatPreviouslyShot(this.grid[n.x][n.y])?this.walkGridToFindCandidateToShoot(e,n,s,++r):this.grid[n.x][n.y].shot===!0||(r++,r>=s)?r:this.walkGridToFindCandidateToShoot(e,n,s,r)}isBoatHorizontal(e){let o=null;if(!this.isCellAtTheEge(S.Left,e)){let s=this.getNeighborCell(S.Left,e);this.isCellABoatPreviouslyShot(this.grid[s.x][s.y])&&(o=!0)}if(!this.isCellAtTheEge(S.Right,e)){let s=this.getNeighborCell(S.Right,e);this.isCellABoatPreviouslyShot(this.grid[s.x][s.y])&&(o=!0)}return o}isBoatVertical(e){let o=null;if(!this.isCellAtTheEge(S.Top,e)){let s=this.getNeighborCell(S.Top,e);this.isCellABoatPreviouslyShot(this.grid[s.x][s.y])&&(o=!0)}if(!this.isCellAtTheEge(S.Bottom,e)){let s=this.getNeighborCell(S.Bottom,e);this.isCellABoatPreviouslyShot(this.grid[s.x][s.y])&&(o=!0)}return o}enemyShoot(){if(this.isGameOver())return;let e,o;if(this._previousShot.x!=0&&this._previousShot.y!=0){let s,r,n,l,a=!1,h=!1,c=!1,d=!1,u,p=this.smallestBoatLeft();const f=this.walkGridToFindCandidateToShoot(S.Left,this._previousShot,p-1,0),y=this.walkGridToFindCandidateToShoot(S.Right,this._previousShot,p-1,0),m=this.walkGridToFindCandidateToShoot(S.Top,this._previousShot,p-1,0),b=this.walkGridToFindCandidateToShoot(S.Bottom,this._previousShot,p-1,0);let A=this.isBoatVertical(this._previousShot),$=this.isBoatHorizontal(this._previousShot);f>0&&($===null||$)&&(f+1===p||y+f+1>=p)&&(s=this.walkGridToFindEmptyCell(S.Left,this._previousShot),s&&(a=!0)),y>0&&($===null||$)&&(y+1===p||y+f+1>=p)&&(r=this.walkGridToFindEmptyCell(S.Right,this._previousShot),r&&(h=!0)),m>0&&(A===null||A)&&(m+1===p||m+b+1>=p)&&(n=this.walkGridToFindEmptyCell(S.Top,this._previousShot),n&&(c=!0)),b>0&&(A===null||A)&&(b+1===p||m+b+1>=p)&&(l=this.walkGridToFindEmptyCell(S.Bottom,this._previousShot),l&&(d=!0)),A===null&&$===null?u=Math.random()>=.5:$?u=!1:A&&(u=!0),u&&!d&&!c&&(u=!1),!u&&!a&&!h&&(u=!0),u&&(c||d)?(c&&d?Math.random()>=.5?e=n.x:e=l.x:c?e=n.x:d&&(e=l.x),o=this._previousShot.y):(a&&h?Math.random()>=.5?o=s.y:o=r.y:h?o=r.y:a&&(o=s.y),e=this._previousShot.x)}else for(e=this.getRandomCoordinate(),o=this.getRandomCoordinate();this.grid[e][o].shot===!0||this.grid[e][o].shot===!1&&!this.boatsLeftFitAround(e,o);)e=this.getRandomCoordinate(),o=this.getRandomCoordinate();if(this.isShip(this.grid[e][o])){const s=this.shadowRoot.querySelector("#"+this.grid[e][o].type);s.enemyShootAt(e,o),this.grid[e][o].shot=!0,this.grid[e][o].type!=this._previousShot.type&&this._previousShot.type!=null&&this._pendingSanks.push(Object.create(this._previousShot)),this._previousShot={x:e,y:o,type:s.type},s.destroyed&&(this._pendingSanks.length>0?this._previousShot=this._pendingSanks.pop():this._previousShot={x:0,y:0}),setTimeout(()=>this.enemyShoot(),2e3);return}this.grid[e][o].shot=!0,this.updateGrid(),this.playerPlayed(e,o)}shipDestroyed(e){this._boatsToSink=this._boatsToSink.filter(o=>o!=e.detail.type),this.playerSankShip(e.detail.type)}shipHit(e){this.playerHitShip(e.detail.type)}render(){return R`
      <div class="title">Your fleet</div>
      <div class="grid">
          ${this.grid.map((e,o)=>e.map((s,r)=>{if(this.isShip(this.grid[o][r])){if(!this.isShipPlaced(s.type))return this._shipPlaced.push(s.type),R`
                      <ship-element id="${s.type}" x="${s.x}" y="${s.y}"
                        type="${s.type}" orientation="${s.orientation}" @ship-hit="${this.shipHit}"
                        @ship-destroyed="${this.shipDestroyed}">
                      </ship-element>`}else return R`<empty-cell ?hit="${s.shot}">${s.text}</empty-cell>`}))}
      </div>
    `}};v(Qt,"styles",[ve(Qt,Qt,"styles"),H`
    :host {
      pointer-events:none;
    }
  `]);let mi=Qt;customElements.define("player-grid",mi);const te=class te extends Ui{constructor(){super();v(this,"_image")}firstUpdated(){super.firstUpdated(),this._image=this.shadowRoot.querySelector("#image")}reset(){Array.from({length:this.size}).map((e,o)=>{const s=this.shadowRoot.querySelector("#hit-"+o);s.style.visibility="hidden"}),this.hitCount=0,this._image.style.display="none"}shootAt(e){let o=this.shadowRoot.querySelector("#hit-"+e);o.style.visibility==="visible"&&o.style.visibility!=""||(this.hitCount=this.hitCount+1,o.style.visibility="visible",this.hitCount===this.size?(this._image.style.display="inline",this.shipDestroyed()):this.shipHit())}render(){return R`
      <div class="hit-zone ${this.orientation===Y.Horizontal?"hit-zone-horizontal":"hit-zone-vertical"}">
        ${Array.from({length:this.size}).map((e,o)=>R`
            <div class="cell" @click="${()=>this.shootAt(o)}"><div class="hit-area" id="hit-${o}"></div></div>
        `)}
      </div>
      <picture>
          <source srcset="images/${this.type}-top-${this.orientation}.webp" type="image/webp">
          <img id="image" src="images/${this.type}-top-${this.orientation}.png" alt="${this.type}"/>
      </picture>
    `}};v(te,"styles",[ve(te,te,"styles"),H`
    :host {
      border: 0;
    }

    .cell {
      border: var(--border-grid);
    }

    .hit-area {
      visibility: hidden;
      background-color: red;
    }

    img {
      display: none;
      opacity: 0.7;
    }
`]);let gi=te;customElements.define("enemy-ship",gi);const ee=class ee extends Oi{firstUpdated(){super.firstUpdated(),this.generateRandomGrid()}constructor(){super()}fireAt(i,e){let o=this.grid[i][e];if(!(this.isShip(o)||o.text!="")){if(o.shot===!0){console.log("You shot there already.");return}o.shot=!0,this.updateGrid(),this.playerPlayed(i,e)}}shipDestroyed(i){this.playerSankShip(i.detail.type),this.dispatchGameOverIfNecessary()}shipHit(i){this.playerHitShip(i.detail.type)}render(){return R`
      <div class="title">Enemy's fleet</div>
      <div class="grid">
          ${this.grid.map((i,e)=>i.map((o,s)=>{if(this.isShip(this.grid[e][s])){if(!this.isShipPlaced(o.type))return this._shipPlaced.push(o.type),R`
                      <enemy-ship id="${o.type}" x="${o.x}" y="${o.y}"
                        type="${o.type}" orientation="${o.orientation}" @ship-destroyed="${this.shipDestroyed}"
                        @ship-hit="${this.shipHit}">
                      </enemy-ship>`}else return R`<empty-cell ?hit="${o.shot}" @click="${()=>this.fireAt(e,s)}">${o.text}</empty-cell>`}))}
      </div>
    `}};v(ee,"styles",[ve(ee,ee,"styles"),H`
    .cell {
      cursor:pointer;
    }
  `]);let fi=ee;customElements.define("enemy-grid",fi);const cn=(t,...i)=>{const e=de(t[0],"how-to-screen");return H([e],...i)};class Vs extends q{constructor(){super()}connectedCallback(){super.connectedCallback(),zt(this)}close(){let i=new CustomEvent("howto-closed",{bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){return R`
      <div class="content">
        <div class="items">
          <div class="title">Summary</div>
          <p>
            FoldShip is a game where you try to guess the oponent's ships location and sink them.
            Each player has two grids in front of them : yours, where your own ships are placed and
            the opponent's grid, which starts empty. Each grid has vertical and horizontal coordinates. 
          </p>
          <p>The mechanic of the game is simple: each player
            take turn firing at the coordinate of their choice to try to find the opponent's ships.
          </p>
          <div class="title">Setup</div>
          <p>
            Each player have their ship positioned in their grid. The setup is as follow:
          </p>
          <p>
            <picture class="how-to-grid">
              <source srcset="images/grid-how-to.webp" type="image/webp">
              <img class="how-to-grid-img" src="images/grid-how-to.png" alt="example of fold ship grid"/>
            </picture>
          </p>
          <p>
            Each ship can receive a certain amount of hits before they sink. Here are all
            the ships in the game:
          </p>
          <li>
            <div class="boat-legend">
              <picture>
              <source srcset="images/carrier-top-horizontal.webp" type="image/webp">
              <img class="ship-image" src="images/carrier-top-horizontal.webp" alt="picture of a carrier ship"/>
              </picture>
              &rarr; carrier (5 hits before sinking)
            </div>
          </li>
          <li>
            <div class="boat-legend">
              <picture>
                <source srcset="images/battleship-top-horizontal.webp" type="image/webp">
                <img class="ship-image" src="images/battleship-top-horizontal.webp" alt="picture of a battleship"/>
              </picture>
              &rarr; battleship (4 hits before sinking)
            </div>
          </li>
          <li>
          <picture>
            <source srcset="images/destroyer-top-horizontal.webp" type="image/webp">
            <img class="ship-image" src="images/destroyer-top-horizontal.webp" alt="picture of a destroyer ship"/>
            </picture>
            &rarr; destroyer (3 hits before sinking)
          </li>
          <li>
          <picture>
            <source srcset="images/submarine-top-horizontal.webp" type="image/webp">
            <img class="ship-image" src="images/submarine-top-horizontal.webp" alt="picture of a submarine ship"/>
            </picture>
            &rarr; submarine (3 hits before sinking)
          </li>
          <li>
          <picture>
            <source srcset="images/rescue-top-horizontal.webp" type="image/webp">
            <img class="ship-image" src="images/rescue-top-horizontal.webp" alt="picture of a rescue ship"/>
            </picture>
            &rarr; rescue (2 hits before sinking)
          </li>
          <div class="title">Gameplay</div>
          <p>
            Each player takes turns firing shots in an attempt to find the opponent's ships.
            In FoldShip just click into the square you want to fire at. If you hit an opponent's
            boat it will display a red circle. However if you hit the water it will display a white
            circle. If you hit a boat you can fire again.
            The first player who sink the five boats first wins.
          </p>
          <picture>
            <source srcset="images/close-button.webp" type="image/webp">
            <img class="menu-button" src="images/close-button.png" @click="${this.close}" alt="image of a close button"/>
          </picture>
        </div>
      </div>
    `}}v(Vs,"styles",cn`
    :host {
      width: 98vw;
      height: 98vh;
      position: absolute;
      top: 1vh;
      left: 1vw;
      z-index: 4;
      font-size: 1vw;
    }

    .content {
      background: linear-gradient(to bottom, rgba(94,205,199,1) 0%, rgba(41,184,229,1) 53%, rgba(56,136,192,1) 100%);
      border-radius: 1em;
      padding: 4px;
      height: 95%;
    }

    .items {
      display: flex;
      flex-direction: column;
      background-color: white;
      border-radius: 1em;
      height: 100%;
      font-size: 1.3em;
      overflow-y: auto;
      scrollbar-width: thin;
    }

    .title {
      font-size: 1.9em;
      text-align: center;
    }

    p {
      margin: 10px;
    }

    li {
      margin-left: 10px;
      margin-bottom: 5px;
    }

    .menu-button {
      width: 15%;
      display: block;
      margin: auto;
    }

    .menu-button:hover {
      filter: drop-shadow(5px 5px 5px black) saturate(30%);
    }

    .how-to-grid {
      width: 60%;
      margin: auto;
    }

    .how-to-grid-img {
      width: 60%;
      display: block;
      margin: auto;
    }

    .ship-image {
      width: 10%;
      vertical-align: middle;
    }

    .boat-legend {
      display: inline;
    }

    @media (max-width: 1024px) and (orientation: landscape) {
      :host {
        width: 98vw;
        height: 85vh;
      }

      .items {
        font-size: 1.7em;
      }
    }

    @media (horizontal-viewport-segments: 2) {
      :host {
        width: env(viewport-segment-width 0 0);
        height: 90vh;
        top: 0;
        left: 0;
      }

      .items {
        font-size: 1.6em;
      }

      .how-to-grid {
        width: 80%;
        margin: auto;
      }

      .menu-button {
        width: 30%;
      }
    }

    @media (vertical-viewport-segments: 2) {
      :host {
        top: 0;
        left: 0;
      }

      .items {
        font-size: 2.5em;
      }

      .title {
        font-size: 2.8em;
      }

      .how-to-grid {
        width: 80%;
        margin: auto;
      }

      .how-to-grid-img {
        width: 80%;
        display: block;
        margin: auto;
      }

      .menu-button {
        width: 30%;
      }
    }
  `);customElements.define("how-to-screen",Vs);const un=(t,...i)=>{const e=de(t[0],"info-box");return H([e],...i)};class Ms extends q{constructor(){super()}render(){return R`
      <div class="content">
        <svg  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 132 136">
          <path class="path" d="M66.1 1.5C30.4 1.5 1.5 22.9 1.5 46c0 18.1 17.9 33.5 42.8 39.3 1.5 14.8-1.3 39-8.5 48.1 10.8-12.5 22.4-33.6 26.6-45.7 1.2 0 2.5.1 3.7.1 35.7 0 64.6-18.7 64.6-41.8S101.8 1.5 66.1 1.5zM35.8 133.4c-.3.4-.7.8-1 1.1.4-.3.7-.7 1-1.1z"/>
        </svg>
        <div class="label">
          <slot name="text"></slot>
        </div>
      </div>
    `}}v(Ms,"styles",H`
    :host {
      width: 100%;
      height: 100%;
    }

    path {
      fill: white;
      stroke: rgba(94,205,199,1);
      stroke-width: 4;
      stroke-linejoin: bevel;
      vector-effect: non-scaling-stroke;
    }

    svg {
      transform: rotateY(180deg);
    }

    .content {
      position: relative;
    }

    .label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 62%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `);customElements.define("speech-bubble",Ms);class Ls extends q{constructor(){super()}connectedCallback(){super.connectedCallback(),zt(this)}render(){return R`
      <div class="content">
        <speech-bubble class="bubble">
            <slot name="label" slot="text"></slot>
        </speech-bubble>
        <picture class="picture">
          <source srcset="images/captain.webp" type="image/webp">
          <img class="captain" src="images/captain.png" alt="captain face"/>
        </picture>
      </div>
    `}}v(Ls,"styles",un`
    :host {
      width: 15vw;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 3;
      opacity: 0.8;
      font-size: 1vw;
    }

    .content {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .bubble {
      width: 80%;
      height: auto;
    }

    ::slotted(*) {
      line-height: 200%;
      margin: 5px;
      font-size: inherit;
    }

    .picture {
      width: 30%;
      align-self: flex-end;
      margin-top: -3em;
    }

    .captain {
      width: 100%;
      transform: rotateY(180deg);
      opacity: 0.8;
    }
  `);customElements.define("info-box",Ls);const pn=(t,...i)=>{const e=de(t[0],"dialog-box");return H([e],...i)};class Us extends q{constructor(){super()}connectedCallback(){super.connectedCallback(),zt(this)}firstUpdated(){this._label=this.shadowRoot.querySelector(".label")}showMessage(i){this._label.innerHTML=i,this.open()}close(){this.shadowRoot.host.style.visibility="hidden"}open(){this.shadowRoot.host.style.visibility="visible"}render(){return R`
      <div class="content">
        <div class="items">
          <div class="title">
            <slot name="title"></slot>
          </div>
          <div class="label">
            <slot name="label"></slot>
          </div>
          <div class="button">
            <slot name="menu-1"></slot>
          </div>
          <div class="button">
            <slot name="menu-2"></slot>
          </div>
        </div>
      </div>
    `}}v(Us,"styles",pn`
    :host {
      width: 25vw;
      height: 30vh;
      position: absolute;
      top: calc(50vh - 15vh);
      left: calc(50vw - 12.5vw);
      z-index: 4;
      visibility: hidden;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .content {
      background: linear-gradient(to bottom, rgba(94,205,199,1) 0%, rgba(41,184,229,1) 53%, rgba(56,136,192,1) 100%);
      padding: 4px;
      height: 100%;
      border-radius: 1em;
    }

    .items {
      background-color: white;
      display: flex;
      height: 100%;
      border-radius: 1em;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .label {
      font-size: 1.5vw;
      text-align: center;
      margin-bottom: 10px;
    }

    .title {
      font-size: 2vw;
      text-align: center;
      margin-bottom: 10px;
    }

    .button {
      margin-bottom: 10px;
    }

    .button:hover {
      filter: drop-shadow(5px 5px 5px black) saturate(30%);
    }

    @media (vertical-viewport-segments: 2) {
      :host {
        width: 32vw;
        height: 15vh;
        top: calc(env(viewport-segment-top 0 1) + (100vh - env(viewport-segment-top 0 1) + calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0))) / 2 - 10vh);
        left: calc(50vw - 15vw);
      }
    }

    @media (vertical-viewport-segments: 2) and (max-width: 1024px) {
      :host {
        height: 35vh;
        top: calc(env(viewport-segment-top 0 1) + (100vh - env(viewport-segment-top 0 1) + calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0))) / 2 - 25vh);
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      :host {
        width: 25vw;
        height: 30vh;
        top: calc(50vh - 15vh);
        left: calc(50vw - 12.5vw);
      }
    }

    @media (horizontal-viewport-segments: 2) {
      :host {
        width: 20vw;
        height: 30vh;
        top: calc(50vh - 20vh);
        left: calc(env(viewport-segment-right 0 0) + (100vw - env(viewport-segment-right 0 0) + calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0))) / 2 - 10vw);
      }
    }

    @media (max-width: 1024px) and (orientation: landscape) and (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .title {
        font-size: 1em;
      }

      :host {
        width: 50vw;
        height: 55vh;
        top: calc(50vh - 35vh);
        left: calc(50vw - 25vw);
      }
    }

    @media (max-width: 1024px) and (orientation: portrait) and (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .title {
        font-size: 1em;
      }

      :host {
        width: 50vw;
        height: 25vh;
        top: calc(50vh - 20vh);
        left: calc(50vw - 25vw);
      }
    }

  `);customElements.define("dialog-box",Us);const vn=(t,...i)=>{const e=de(t[0],"rotate-box");return H([e],...i)};class Os extends q{constructor(){super()}connectedCallback(){super.connectedCallback(),zt(this)}firstUpdated(){this._text=this.shadowRoot.querySelector("#rotate-message")}setLabel(i){this._text.innerHTML=i}hide(){this.shadowRoot.host.style.visibility="hidden"}show(){this.shadowRoot.host.style.visibility=""}render(){return R`
      <div id="fullscreen-rotate">
        <info-box id="rotate-infobox">
          <div slot="label" id="rotate-message">Ahoy Captain!<br>Please rotate your device to play.</div>
        </info-box>
      </div>
    `}}v(Os,"styles",vn`
    :host {
      width: 100%;
      height: 100%;
      z-index: 99;
      position: absolute;
      top: 0;
      left: 0;
      visibility: hidden;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    #rotate-infobox {
        width: 90%;
        height: 90%;
        position: absolute;
        top: 5%;
        left: 5%;
        font-size: 2vmax;
        opacity: 1;
        text-align: center;
    }

    @media all and (orientation:landscape) {
      :host {
        visibility: hidden;
      }
    }

    @media all and (orientation:portrait) {
      :host {
        visibility: visible;
      }
    }

    @media (horizontal-viewport-segments: 2) {
      :host {
        visibility: hidden;
      }
    }

    @media (vertical-viewport-segments: 2) {
      :host {
        visibility: hidden;
      }
    }
  `);customElements.define("rotate-box",Os);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=window,Hi=_e.ShadowRoot&&(_e.ShadyCSS===void 0||_e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ii=Symbol(),fo=new WeakMap;let Hs=class{constructor(i,e,o){if(this._$cssResult$=!0,o!==Ii)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=e}get styleSheet(){let i=this.o;const e=this.t;if(Hi&&i===void 0){const o=e!==void 0&&e.length===1;o&&(i=fo.get(e)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),o&&fo.set(e,i))}return i}toString(){return this.cssText}};const Is=(t,...i)=>{const e=t.length===1?t[0]:i.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new Hs(e,t,Ii)},bo=Hi?t=>t:t=>t instanceof CSSStyleSheet?(i=>{let e="";for(const o of i.cssRules)e+=o.cssText;return(o=>new Hs(typeof o=="string"?o:o+"",void 0,Ii))(e)})(t):t;var We;const Ce=window,yo=Ce.trustedTypes,mn=yo?yo.emptyScript:"",wo=Ce.reactiveElementPolyfillSupport,bi={toAttribute(t,i){switch(i){case Boolean:t=t?mn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=t!==null;break;case Number:e=t===null?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch{e=null}}return e}},Ns=(t,i)=>i!==t&&(i==i||t==t),Ge={attribute:!0,type:String,converter:bi,reflect:!1,hasChanged:Ns};let vt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,e)=>{const o=this._$Ep(e,i);o!==void 0&&(this._$Ev.set(o,e),t.push(o))}),t}static createProperty(t,i=Ge){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,e,i);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(o){const s=this[t];this[i]=o,this.requestUpdate(t,s,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ge}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,e=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of e)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const o of e)i.unshift(bo(o))}else t!==void 0&&i.push(bo(t));return i}static _$Ep(t,i){const e=i.attribute;return e===!1?void 0:typeof e=="string"?e:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,e;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)===null||e===void 0||e.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{Hi?e.adoptedStyleSheets=o.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):o.forEach(s=>{const r=document.createElement("style"),n=_e.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=s.cssText,e.appendChild(r)})})(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var e;return(e=i.hostConnected)===null||e===void 0?void 0:e.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var e;return(e=i.hostDisconnected)===null||e===void 0?void 0:e.call(i)})}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=Ge){var o;const s=this.constructor._$Ep(t,e);if(s!==void 0&&e.reflect===!0){const r=(((o=e.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?e.converter:bi).toAttribute(i,e.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,i){var e;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=o.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:((e=r.converter)===null||e===void 0?void 0:e.fromAttribute)!==void 0?r.converter:bi;this._$El=s,this[s]=n.fromAttribute(i,r.type),this._$El=null}}requestUpdate(t,i,e){let o=!0;t!==void 0&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||Ns)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),e.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,e))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(e)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(e=>{var o;return(o=e.hostUpdated)===null||o===void 0?void 0:o.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,e)=>this._$EO(e,this[e],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ye;vt.finalized=!0,vt.elementProperties=new Map,vt.elementStyles=[],vt.shadowRootOptions={mode:"open"},wo==null||wo({ReactiveElement:vt}),((We=Ce.reactiveElementVersions)!==null&&We!==void 0?We:Ce.reactiveElementVersions=[]).push("1.6.1");const Ee=window,$t=Ee.trustedTypes,_o=$t?$t.createPolicy("lit-html",{createHTML:t=>t}):void 0,tt=`lit$${(Math.random()+"").slice(9)}$`,Ds="?"+tt,gn=`<${Ds}>`,xt=document,re=(t="")=>xt.createComment(t),ne=t=>t===null||typeof t!="object"&&typeof t!="function",$o=Array.isArray,Ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xo=/-->/g,So=/>/g,nt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ao=/'/g,Co=/"/g,Eo=/^(?:script|style|textarea|title)$/i,Rt=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),St=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),ko=new WeakMap,bt=xt.createTreeWalker(xt,129,null,!1);let yi=class Fs{constructor({strings:i,_$litType$:e},o){let s;this.parts=[];let r=0,n=0;const l=i.length-1,a=this.parts,[h,c]=((d,u)=>{const p=d.length-1,f=[];let y,m=u===2?"<svg>":"",b=Ft;for(let $=0;$<p;$++){const N=d[$];let k,C,V=-1,E=0;for(;E<N.length&&(b.lastIndex=E,C=b.exec(N),C!==null);)E=b.lastIndex,b===Ft?C[1]==="!--"?b=xo:C[1]!==void 0?b=So:C[2]!==void 0?(Eo.test(C[2])&&(y=RegExp("</"+C[2],"g")),b=nt):C[3]!==void 0&&(b=nt):b===nt?C[0]===">"?(b=y??Ft,V=-1):C[1]===void 0?V=-2:(V=b.lastIndex-C[2].length,k=C[1],b=C[3]===void 0?nt:C[3]==='"'?Co:Ao):b===Co||b===Ao?b=nt:b===xo||b===So?b=Ft:(b=nt,y=void 0);const pe=b===nt&&d[$+1].startsWith("/>")?" ":"";m+=b===Ft?N+gn:V>=0?(f.push(k),N.slice(0,V)+"$lit$"+N.slice(V)+tt+pe):N+tt+(V===-2?(f.push(void 0),$):pe)}const A=m+(d[p]||"<?>")+(u===2?"</svg>":"");if(!Array.isArray(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return[_o!==void 0?_o.createHTML(A):A,f]})(i,e);if(this.el=Fs.createElement(h,o),bt.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=bt.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(tt)){const p=c[n++];if(d.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+"$lit$").split(tt),y=/([.?@])?(.*)/.exec(p);a.push({type:1,index:r,name:y[2],strings:f,ctor:y[1]==="."?fn:y[1]==="?"?yn:y[1]==="@"?wn:Le})}else a.push({type:6,index:r})}for(const u of d)s.removeAttribute(u)}if(Eo.test(s.tagName)){const d=s.textContent.split(tt),u=d.length-1;if(u>0){s.textContent=$t?$t.emptyScript:"";for(let p=0;p<u;p++)s.append(d[p],re()),bt.nextNode(),a.push({type:2,index:++r});s.append(d[u],re())}}}else if(s.nodeType===8)if(s.data===Ds)a.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(tt,d+1))!==-1;)a.push({type:7,index:r}),d+=tt.length-1}r++}}static createElement(i,e){const o=xt.createElement("template");return o.innerHTML=i,o}};function At(t,i,e=t,o){var s,r,n,l;if(i===St)return i;let a=o!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[o]:e._$Cl;const h=ne(i)?void 0:i._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),h===void 0?a=void 0:(a=new h(t),a._$AT(t,e,o)),o!==void 0?((n=(l=e)._$Co)!==null&&n!==void 0?n:l._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(i=At(t,a._$AS(t,i.values),a,o)),i}let Ni=class js{constructor(i,e,o,s){var r;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=i,this._$AB=e,this._$AM=o,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var i,e;return(e=(i=this._$AM)===null||i===void 0?void 0:i._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let i=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&i.nodeType===11&&(i=e.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,e=this){i=At(this,i,e),ne(i)?i===O||i==null||i===""?(this._$AH!==O&&this._$AR(),this._$AH=O):i!==this._$AH&&i!==St&&this.g(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):(o=>$o(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function")(i)?this.k(i):this.g(i)}O(i,e=this._$AB){return this._$AA.parentNode.insertBefore(i,e)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}g(i){this._$AH!==O&&ne(this._$AH)?this._$AA.nextSibling.data=i:this.T(xt.createTextNode(i)),this._$AH=i}$(i){var e;const{values:o,_$litType$:s}=i,r=typeof s=="number"?this._$AC(i):(s.el===void 0&&(s.el=yi.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(o);else{const n=new class{constructor(a,h){this.u=[],this._$AN=void 0,this._$AD=a,this._$AM=h}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(a){var h;const{el:{content:c},parts:d}=this._$AD,u=((h=a==null?void 0:a.creationScope)!==null&&h!==void 0?h:xt).importNode(c,!0);bt.currentNode=u;let p=bt.nextNode(),f=0,y=0,m=d[0];for(;m!==void 0;){if(f===m.index){let b;m.type===2?b=new Ni(p,p.nextSibling,this,a):m.type===1?b=new m.ctor(p,m.name,m.strings,this,a):m.type===6&&(b=new _n(p,this,a)),this.u.push(b),m=d[++y]}f!==(m==null?void 0:m.index)&&(p=bt.nextNode(),f++)}return u}p(a){let h=0;for(const c of this.u)c!==void 0&&(c.strings!==void 0?(c._$AI(a,c,h),h+=c.strings.length-2):c._$AI(a[h])),h++}}(r,this),l=n.v(this.options);n.p(o),this.T(l),this._$AH=n}}_$AC(i){let e=ko.get(i.strings);return e===void 0&&ko.set(i.strings,e=new yi(i)),e}k(i){$o(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of i)s===e.length?e.push(o=new js(this.O(re()),this.O(re()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(i=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);i&&i!==this._$AB;){const s=i.nextSibling;i.remove(),i=s}}setConnected(i){var e;this._$AM===void 0&&(this._$Cm=i,(e=this._$AP)===null||e===void 0||e.call(this,i))}},Le=class{constructor(t,i,e,o,s){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,o){const s=this.strings;let r=!1;if(s===void 0)t=At(this,t,i,0),r=!ne(t)||t!==this._$AH&&t!==St,r&&(this._$AH=t);else{const n=t;let l,a;for(t=s[0],l=0;l<s.length-1;l++)a=At(this,n[e+l],i,l),a===St&&(a=this._$AH[l]),r||(r=!ne(a)||a!==this._$AH[l]),a===O?t=O:t!==O&&(t+=(a??"")+s[l+1]),this._$AH[l]=a}r&&!o&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},fn=class extends Le{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}};const bn=$t?$t.emptyScript:"";let yn=class extends Le{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,bn):this.element.removeAttribute(this.name)}},wn=class extends Le{constructor(t,i,e,o,s){super(t,i,e,o,s),this.type=5}_$AI(t,i=this){var e;if((t=(e=At(this,t,i,0))!==null&&e!==void 0?e:O)===St)return;const o=this._$AH,s=t===O&&o!==O||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==O&&(o===O||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;typeof this._$AH=="function"?this._$AH.call((e=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&e!==void 0?e:this.element,t):this._$AH.handleEvent(t)}},_n=class{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){At(this,t)}};const zo=Ee.litHtmlPolyfillSupport;zo==null||zo(yi,Ni),((Ye=Ee.litHtmlVersions)!==null&&Ye!==void 0?Ye:Ee.litHtmlVersions=[]).push("2.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ke,Ze;let yt=class extends vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((e,o,s)=>{var r,n;const l=(r=s==null?void 0:s.renderBefore)!==null&&r!==void 0?r:o;let a=l._$litPart$;if(a===void 0){const h=(n=s==null?void 0:s.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=a=new Ni(o.insertBefore(re(),h),h,void 0,s??{})}return a._$AI(e),a})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return St}};yt.finalized=!0,yt._$litElement$=!0,(Ke=globalThis.litElementHydrateSupport)===null||Ke===void 0||Ke.call(globalThis,{LitElement:yt});const To=globalThis.litElementPolyfillSupport;To==null||To({LitElement:yt}),((Ze=globalThis.litElementVersions)!==null&&Ze!==void 0?Ze:globalThis.litElementVersions=[]).push("3.2.2");var Xe,Je,$e=window,Di=$e.ShadowRoot&&($e.ShadyCSS===void 0||$e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fi=Symbol(),Ro=new WeakMap,Bs=class{constructor(t,i,e){if(this._$cssResult$=!0,e!==Fi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Di&&t===void 0){const e=i!==void 0&&i.length===1;e&&(t=Ro.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&Ro.set(i,t))}return t}toString(){return this.cssText}},Qe=(t,...i)=>{const e=t.length===1?t[0]:i.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new Bs(e,t,Fi)},Po=Di?t=>t:t=>t instanceof CSSStyleSheet?(i=>{let e="";for(const o of i.cssRules)e+=o.cssText;return(o=>new Bs(typeof o=="string"?o:o+"",void 0,Fi))(e)})(t):t,ke=window,Vo=ke.trustedTypes,$n=Vo?Vo.emptyScript:"",Mo=ke.reactiveElementPolyfillSupport,ae={toAttribute(t,i){switch(i){case Boolean:t=t?$n:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=t!==null;break;case Number:e=t===null?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch{e=null}}return e}},qs=(t,i)=>i!==t&&(i==i||t==t),ti={attribute:!0,type:String,converter:ae,reflect:!1,hasChanged:qs},mt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,e)=>{const o=this._$Ep(e,i);o!==void 0&&(this._$Ev.set(o,e),t.push(o))}),t}static createProperty(t,i=ti){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,e,i);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(o){const s=this[t];this[i]=o,this.requestUpdate(t,s,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ti}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,e=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of e)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const o of e)i.unshift(Po(o))}else t!==void 0&&i.push(Po(t));return i}static _$Ep(t,i){const e=i.attribute;return e===!1?void 0:typeof e=="string"?e:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,e;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)===null||e===void 0||e.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{Di?e.adoptedStyleSheets=o.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):o.forEach(s=>{const r=document.createElement("style"),n=$e.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=s.cssText,e.appendChild(r)})})(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var e;return(e=i.hostConnected)===null||e===void 0?void 0:e.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var e;return(e=i.hostDisconnected)===null||e===void 0?void 0:e.call(i)})}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=ti){var o;const s=this.constructor._$Ep(t,e);if(s!==void 0&&e.reflect===!0){const r=(((o=e.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?e.converter:ae).toAttribute(i,e.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,i){var e;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=o.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:((e=r.converter)===null||e===void 0?void 0:e.fromAttribute)!==void 0?r.converter:ae;this._$El=s,this[s]=n.fromAttribute(i,r.type),this._$El=null}}requestUpdate(t,i,e){let o=!0;t!==void 0&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||qs)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),e.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,e))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(e)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(e=>{var o;return(o=e.hostUpdated)===null||o===void 0?void 0:o.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,e)=>this._$EO(e,this[e],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};mt.finalized=!0,mt.elementProperties=new Map,mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},Mo==null||Mo({ReactiveElement:mt}),((Xe=ke.reactiveElementVersions)!==null&&Xe!==void 0?Xe:ke.reactiveElementVersions=[]).push("1.6.1");var Lo,ze=window,Ct=ze.trustedTypes,Uo=Ct?Ct.createPolicy("lit-html",{createHTML:t=>t}):void 0,et=`lit$${(Math.random()+"").slice(9)}$`,Ws="?"+et,xn=`<${Ws}>`,Et=document,le=(t="")=>Et.createComment(t),he=t=>t===null||typeof t!="object"&&typeof t!="function",Oo=Array.isArray,jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ho=/-->/g,Io=/>/g,at=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),No=/'/g,Do=/"/g,Fo=/^(?:script|style|textarea|title)$/i,jo=(Lo=1,(t,...i)=>({_$litType$:Lo,strings:t,values:i})),K=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Bo=new WeakMap,wt=Et.createTreeWalker(Et,129,null,!1),Te=class{constructor({strings:t,_$litType$:i},e){let o;this.parts=[];let s=0,r=0;const n=t.length-1,l=this.parts,[a,h]=((c,d)=>{const u=c.length-1,p=[];let f,y=d===2?"<svg>":"",m=jt;for(let A=0;A<u;A++){const $=c[A];let N,k,C=-1,V=0;for(;V<$.length&&(m.lastIndex=V,k=m.exec($),k!==null);)V=m.lastIndex,m===jt?k[1]==="!--"?m=Ho:k[1]!==void 0?m=Io:k[2]!==void 0?(Fo.test(k[2])&&(f=RegExp("</"+k[2],"g")),m=at):k[3]!==void 0&&(m=at):m===at?k[0]===">"?(m=f??jt,C=-1):k[1]===void 0?C=-2:(C=m.lastIndex-k[2].length,N=k[1],m=k[3]===void 0?at:k[3]==='"'?Do:No):m===Do||m===No?m=at:m===Ho||m===Io?m=jt:(m=at,f=void 0);const E=m===at&&c[A+1].startsWith("/>")?" ":"";y+=m===jt?$+xn:C>=0?(p.push(N),$.slice(0,C)+"$lit$"+$.slice(C)+et+E):$+et+(C===-2?(p.push(void 0),A):E)}const b=y+(c[u]||"<?>")+(d===2?"</svg>":"");if(!Array.isArray(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Uo!==void 0?Uo.createHTML(b):b,p]})(t,i);if(this.el=Te.createElement(a,e),wt.currentNode=this.el.content,i===2){const c=this.el.content,d=c.firstChild;d.remove(),c.append(...d.childNodes)}for(;(o=wt.nextNode())!==null&&l.length<n;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(et)){const u=h[r++];if(c.push(d),u!==void 0){const p=o.getAttribute(u.toLowerCase()+"$lit$").split(et),f=/([.?@])?(.*)/.exec(u);l.push({type:1,index:s,name:f[2],strings:p,ctor:f[1]==="."?Sn:f[1]==="?"?Cn:f[1]==="@"?En:Ue})}else l.push({type:6,index:s})}for(const d of c)o.removeAttribute(d)}if(Fo.test(o.tagName)){const c=o.textContent.split(et),d=c.length-1;if(d>0){o.textContent=Ct?Ct.emptyScript:"";for(let u=0;u<d;u++)o.append(c[u],le()),wt.nextNode(),l.push({type:2,index:++s});o.append(c[d],le())}}}else if(o.nodeType===8)if(o.data===Ws)l.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(et,c+1))!==-1;)l.push({type:7,index:s}),c+=et.length-1}s++}}static createElement(t,i){const e=Et.createElement("template");return e.innerHTML=t,e}};function kt(t,i,e=t,o){var s,r,n,l;if(i===K)return i;let a=o!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[o]:e._$Cl;const h=he(i)?void 0:i._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),h===void 0?a=void 0:(a=new h(t),a._$AT(t,e,o)),o!==void 0?((n=(l=e)._$Co)!==null&&n!==void 0?n:l._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(i=kt(t,a._$AS(t,i.values),a,o)),i}var Re=class{constructor(t,i,e,o){var s;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=o,this._$Cm=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=kt(this,t,i),he(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==K&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(e=>Oo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function")(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==M&&he(this._$AH)?this._$AA.nextSibling.data=t:this.T(Et.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Te.createElement(o.h,this.options)),o);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(e);else{const r=new class{constructor(l,a){this.u=[],this._$AN=void 0,this._$AD=l,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(l){var a;const{el:{content:h},parts:c}=this._$AD,d=((a=l==null?void 0:l.creationScope)!==null&&a!==void 0?a:Et).importNode(h,!0);wt.currentNode=d;let u=wt.nextNode(),p=0,f=0,y=c[0];for(;y!==void 0;){if(p===y.index){let m;y.type===2?m=new Re(u,u.nextSibling,this,l):y.type===1?m=new y.ctor(u,y.name,y.strings,this,l):y.type===6&&(m=new kn(u,this,l)),this.u.push(m),y=c[++f]}p!==(y==null?void 0:y.index)&&(u=wt.nextNode(),p++)}return d}p(l){let a=0;for(const h of this.u)h!==void 0&&(h.strings!==void 0?(h._$AI(l,h,a),a+=h.strings.length-2):h._$AI(l[a])),a++}}(s,this),n=r.v(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let i=Bo.get(t.strings);return i===void 0&&Bo.set(t.strings,i=new Te(t)),i}k(t){Oo(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,o=0;for(const s of t)o===i.length?i.push(e=new Re(this.O(le()),this.O(le()),this,this.options)):e=i[o],e._$AI(s),o++;o<i.length&&(this._$AR(e&&e._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var e;for((e=this._$AP)===null||e===void 0||e.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},Ue=class{constructor(t,i,e,o,s){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,o){const s=this.strings;let r=!1;if(s===void 0)t=kt(this,t,i,0),r=!he(t)||t!==this._$AH&&t!==K,r&&(this._$AH=t);else{const n=t;let l,a;for(t=s[0],l=0;l<s.length-1;l++)a=kt(this,n[e+l],i,l),a===K&&(a=this._$AH[l]),r||(r=!he(a)||a!==this._$AH[l]),a===M?t=M:t!==M&&(t+=(a??"")+s[l+1]),this._$AH[l]=a}r&&!o&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Sn=class extends Ue{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}},An=Ct?Ct.emptyScript:"",Cn=class extends Ue{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,An):this.element.removeAttribute(this.name)}},En=class extends Ue{constructor(t,i,e,o,s){super(t,i,e,o,s),this.type=5}_$AI(t,i=this){var e;if((t=(e=kt(this,t,i,0))!==null&&e!==void 0?e:M)===K)return;const o=this._$AH,s=t===M&&o!==M||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==M&&(o===M||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;typeof this._$AH=="function"?this._$AH.call((e=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&e!==void 0?e:this.element,t):this._$AH.handleEvent(t)}},kn=class{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){kt(this,t)}},qo=ze.litHtmlPolyfillSupport;qo==null||qo(Te,Re),((Je=ze.litHtmlVersions)!==null&&Je!==void 0?Je:ze.litHtmlVersions=[]).push("2.6.1");var ei,ii,Zt=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((e,o,s)=>{var r,n;const l=(r=s==null?void 0:s.renderBefore)!==null&&r!==void 0?r:o;let a=l._$litPart$;if(a===void 0){const h=(n=s==null?void 0:s.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=a=new Re(o.insertBefore(le(),h),h,void 0,s??{})}return a._$AI(e),a})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return K}};Zt.finalized=!0,Zt._$litElement$=!0,(ei=globalThis.litElementHydrateSupport)===null||ei===void 0||ei.call(globalThis,{LitElement:Zt});var Wo=globalThis.litElementPolyfillSupport;Wo==null||Wo({LitElement:Zt}),((ii=globalThis.litElementVersions)!==null&&ii!==void 0?ii:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var Xt,zn=Qe`
  ${Qe`
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
  ${Qe`
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
`,wi=1,Go=3,Yo=4,Gs=t=>(...i)=>({_$litDirective$:t,values:i}),Ys=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}},Tn={},Rn=Gs(class extends Ys{constructor(t){if(super(t),t.type!==Go&&t.type!==wi&&t.type!==Yo)throw Error("The `live` directive is not allowed on child or event bindings");if(!(i=>i.strings===void 0)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[i]){if(i===K||i===M)return i;const e=t.element,o=t.name;if(t.type===Go){if(i===e[o])return K}else if(t.type===Yo){if(!!i===e.hasAttribute(o))return K}else if(t.type===wi&&e.getAttribute(o)===i+"")return K;return((s,r=Tn)=>{s._$AH=r})(t),i}}),Ks=Object.defineProperty,Pn=Object.defineProperties,Vn=Object.getOwnPropertyDescriptor,Mn=Object.getOwnPropertyDescriptors,Ko=Object.getOwnPropertySymbols,Ln=Object.prototype.hasOwnProperty,Un=Object.prototype.propertyIsEnumerable,Zo=(t,i,e)=>i in t?Ks(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Pt=(t,i)=>{for(var e in i||(i={}))Ln.call(i,e)&&Zo(t,e,i[e]);if(Ko)for(var e of Ko(i))Un.call(i,e)&&Zo(t,e,i[e]);return t},ji=(t,i)=>Pn(t,Mn(i)),T=(t,i,e,o)=>{for(var s,r=o>1?void 0:o?Vn(i,e):i,n=t.length-1;n>=0;n--)(s=t[n])&&(r=(o?s(i,e,r):s(r))||r);return o&&r&&Ks(i,e,r),r},Bt=new WeakMap,Xo=new WeakMap,qt=new WeakMap,_i=new Set,On=new MutationObserver(Js),ft=new Map,Zs=document.documentElement.dir||"ltr",Xs=document.documentElement.lang||navigator.language;function Js(){Zs=document.documentElement.dir||"ltr",Xs=document.documentElement.lang||navigator.language,[..._i.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}On.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var Hn=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){_i.add(this.host)}hostDisconnected(){_i.delete(this.host)}dir(){return`${this.host.dir||Zs}`.toLowerCase()}lang(){return`${this.host.lang||Xs}`.toLowerCase()}term(t,...i){var e,o;const s=new Intl.Locale(this.lang()),r=s==null?void 0:s.language.toLowerCase(),n=(o=(e=s==null?void 0:s.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",l=ft.get(`${r}-${n}`),a=ft.get(r);let h;if(l&&l[t])h=l[t];else if(a&&a[t])h=a[t];else{if(!Xt||!Xt[t])return console.error(`No translation found for: ${String(t)}`),String(t);h=Xt[t]}return typeof h=="function"?h(...i):h}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,e){return new Intl.RelativeTimeFormat(this.lang(),e).format(t,i)}},In=class extends Hn{};(function(...t){t.map(i=>{const e=i.$code.toLowerCase();ft.has(e)?ft.set(e,Object.assign(Object.assign({},ft.get(e)),i)):ft.set(e,i),Xt||(Xt=i)}),Js()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var fe=t=>t??M;function oi(t,i){const e=Pt({waitUntilFirstUpdate:!1},i);return(o,s)=>{const{update:r}=o,n=Array.isArray(t)?t:[t];o.update=function(l){n.forEach(a=>{const h=a;if(l.has(h)){const c=l.get(h),d=this[h];c!==d&&(e.waitUntilFirstUpdate&&!this.hasUpdated||this[s](c,d))}}),r.call(this,l)}}}var Jo=Gs(class extends Ys{constructor(t){var i;if(super(t),t.type!==wi||t.name!=="class"||((i=t.strings)===null||i===void 0?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(i=>t[i]).join(" ")+" "}update(t,[i]){var e,o;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in i)i[r]&&!(!((e=this.st)===null||e===void 0)&&e.has(r))&&this.nt.add(r);return this.render(i)}const s=t.element.classList;this.nt.forEach(r=>{r in i||(s.remove(r),this.nt.delete(r))});for(const r in i){const n=!!i[r];n===this.nt.has(r)||!((o=this.st)===null||o===void 0)&&o.has(r)||(n?(s.add(r),this.nt.add(r)):(s.remove(r),this.nt.delete(r)))}return K}}),Nn=(t,i)=>i.kind==="method"&&i.descriptor&&!("value"in i.descriptor)?ji(Pt({},i),{finisher(e){e.createProperty(i.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){typeof i.initializer=="function"&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function F(t){return(i,e)=>e!==void 0?((o,s,r)=>{s.constructor.createProperty(r,o)})(t,i,e):Nn(t,i)}function Qo(t){return F(ji(Pt({},t),{state:!0}))}var si,Dn=({finisher:t,descriptor:i})=>(e,o)=>{var s;if(o===void 0){const r=(s=e.originalKey)!==null&&s!==void 0?s:e.key,n=i!=null?{kind:"method",placement:"prototype",key:r,descriptor:i(e.key)}:ji(Pt({},e),{key:r});return t!=null&&(n.finisher=function(l){t(l,r)}),n}{const r=e.constructor;i!==void 0&&Object.defineProperty(e,o,i(o)),t==null||t(r,o)}};function ts(t,i){return Dn({descriptor:e=>{const o={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(i){const s=typeof e=="symbol"?Symbol():"__"+e;o.get=function(){var r,n;return this[s]===void 0&&(this[s]=(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&n!==void 0?n:null),this[s]}}return o}})}(si=window.HTMLSlotElement)===null||si===void 0||si.prototype.assignedElements;var $i=class extends Zt{emit(t,i){const e=new CustomEvent(t,Pt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return this.dispatchEvent(e),e}};T([F()],$i.prototype,"dir",2),T([F()],$i.prototype,"lang",2);/*! Bundled license information:

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
*/var ri,z=class extends $i{constructor(){super(...arguments),this.formControlController=new class{constructor(t,i){(this.host=t).addController(this),this.options=Pt({form:e=>{if(e.hasAttribute("form")&&e.getAttribute("form")!==""){const o=e.getRootNode(),s=e.getAttribute("form");if(s)return o.getElementById(s)}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var o;return(o=e.disabled)!=null&&o},reportValidity:e=>typeof e.reportValidity!="function"||e.reportValidity(),setValue:(e,o)=>e.value=o},i),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(t){t?(this.form=t,Bt.has(this.form)?Bt.get(this.form).add(this.host):Bt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),qt.has(this.form)||(qt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=Bt.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),qt.has(this.form)&&(this.form.reportValidity=qt.get(this.form),qt.delete(this.form))),this.form=void 0}handleFormData(t){const i=this.options.disabled(this.host),e=this.options.name(this.host),o=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";!i&&!s&&typeof e=="string"&&e.length>0&&o!==void 0&&(Array.isArray(o)?o.forEach(r=>{t.formData.append(e,r.toString())}):t.formData.append(e,o.toString()))}handleFormSubmit(t){var i;const e=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Bt.get(this.form))==null||i.forEach(s=>{this.setUserInteracted(s,!0)})),!this.form||this.form.noValidate||e||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const i of t)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0}setUserInteracted(t,i){Xo.set(t,i),t.requestUpdate()}doAction(t,i){if(this.form){const e=document.createElement("button");e.type=t,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",i&&(e.name=i.name,e.value=i.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{i.hasAttribute(o)&&e.setAttribute(o,i.getAttribute(o))})),this.form.append(e),e.click(),e.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){var i;const e=this.host,o=!!Xo.get(e),s=!!e.required;(i=this.form)!=null&&i.noValidate?(e.removeAttribute("data-required"),e.removeAttribute("data-optional"),e.removeAttribute("data-invalid"),e.removeAttribute("data-valid"),e.removeAttribute("data-user-invalid"),e.removeAttribute("data-user-valid")):(e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o))}updateValidity(){const t=this.host;this.setValidity(t.checkValidity())}}(this),this.hasSlotController=new class{constructor(t,...i){this.slotNames=[],(this.host=t).addController(this),this.slotNames=i,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const i=t;if(i.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!i.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const i=t.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()}}(this,"help-text","label"),this.localize=new In(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",100*t+"%")}syncTooltip(t){if(this.output!==null){const i=this.input.offsetWidth,e=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),s=i*t;if(this.localize.dir()==="rtl"){const r=`${i-s}px + ${t} * ${o}`;this.output.style.translate=`calc((${r} - ${e/2}px - ${o} / 2))`}else{const r=`${s}px - ${t} * ${o}`;this.output.style.translate=`calc(${r} - ${e/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.syncTooltip(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),e=!!this.label||!!t,o=!!this.helpText||!!i;return jo`
      <div
        part="form-control"
        class=${Jo({"form-control":!0,"form-control--medium":!0,"form-control--has-label":e,"form-control--has-help-text":o})}
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
            class=${Jo({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${fe(this.name)}
              ?disabled=${this.disabled}
              min=${fe(this.min)}
              max=${fe(this.max)}
              step=${fe(this.step)}
              .value=${Rn(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip==="none"||this.disabled?"":jo`
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
    `}};function es(t,i){(i==null||i>t.length)&&(i=t.length);for(var e=0,o=new Array(i);e<i;e++)o[e]=t[e];return o}z.styles=zn,T([ts(".range__control")],z.prototype,"input",2),T([ts(".range__tooltip")],z.prototype,"output",2),T([Qo()],z.prototype,"hasFocus",2),T([Qo()],z.prototype,"hasTooltip",2),T([F()],z.prototype,"title",2),T([F()],z.prototype,"name",2),T([F({type:Number})],z.prototype,"value",2),T([F()],z.prototype,"label",2),T([F({attribute:"help-text"})],z.prototype,"helpText",2),T([F({type:Boolean,reflect:!0})],z.prototype,"disabled",2),T([F({type:Number})],z.prototype,"min",2),T([F({type:Number})],z.prototype,"max",2),T([F({type:Number})],z.prototype,"step",2),T([F()],z.prototype,"tooltip",2),T([F({attribute:!1})],z.prototype,"tooltipFormatter",2),T([F({reflect:!0})],z.prototype,"form",2),T([((t="value")=>(i,e)=>{const o=i.constructor,s=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(r,n,l){var a;const h=o.getPropertyOptions(t);if(r===(typeof h.attribute=="string"?h.attribute:t)){const c=h.converter||ae,d=(typeof c=="function"?c:(a=c==null?void 0:c.fromAttribute)!=null?a:ae.fromAttribute)(l,h.type);this[t]!==d&&(this[e]=d)}s.call(this,r,n,l)}})()],z.prototype,"defaultValue",2),T([oi("value",{waitUntilFirstUpdate:!0})],z.prototype,"handleValueChange",1),T([oi("disabled",{waitUntilFirstUpdate:!0})],z.prototype,"handleDisabledChange",1),T([oi("hasTooltip",{waitUntilFirstUpdate:!0})],z.prototype,"syncRange",1),z=T([(ri="sl-range",t=>typeof t=="function"?((i,e)=>(customElements.define(i,e),e))(ri,t):((i,e)=>{const{kind:o,elements:s}=e;return{kind:o,elements:s,finisher(r){customElements.define(i,r)}}})(ri,t))],z);var Wt=function(){try{window[B].updateSegments();var t=function(){if(!ni)return ni=!0,Promise.resolve(Promise.resolve(!1)).then(function(i){ni=i,window[B].dispatchEvent(new Event("change"))})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(i){return Promise.reject(i)}},B="__foldables__",ni=!1,Bi=function(){function t(){var o=this;if(window[B]!==void 0)return window[B];var s=document.createDocumentFragment();this.addEventListener=s.addEventListener.bind(s),this.removeEventListener=s.removeEventListener.bind(s),this.dispatchEvent=function(r){if(r.type==="change"){var n="on"+r.type;return typeof o[n]=="function"&&o[n](r),s.dispatchEvent(r)}},window.addEventListener("message",function(r){r.data.action==="update"&&Object.assign(o,r.data.value)}),window.addEventListener("resize",function(){return function(r,n){var l;return function(){var a=arguments,h=this;clearTimeout(l),l=setTimeout(function(){return r.apply(h,a)},n)}}(Wt(),200)})}var i,e=t.prototype;return e.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var s=window.innerHeight-this.browserShellSize,r=0,n=window.innerWidth,l=s/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:r,left:0,bottom:r+l,right:n,width:n,height:l},r+=o[a].height,r+=this.foldSize;if(this.horizontalViewportSegments>1)for(var h=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,c=window.innerHeight,d=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:d,right:d+h,bottom:c,width:h,height:c},d+=o[u].width,d+=this.foldSize;window.visualViewport.segments=o},e.randomizeSegmentsConfiguration=function(o){var s=Math.random()<.5,r=Math.round(Math.random()*(o-1)+1);s?(this.verticalViewportSegments=r,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=r,this.verticalViewportSegments=1)},(i=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(B+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(B+"-horizontal-viewport-segments",o),Wt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(B+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(B+"-vertical-viewport-segments",o),Wt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(B+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(B+"-fold-size",o),Wt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(B+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(B+"-browser-shell-size",o),Wt()}}])&&function(o,s){for(var r=0;r<s.length;r++){var n=s[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(t.prototype,i),t}();window[B]=new Bi,window.visualViewport.segments===void 0&&window[B].updateSegments();var Qs="-viewport-segments",xi="(\\s*)(@media.*?\\b"+Qs+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",Fn=/\((.*?)\)/gi,jn=/@media[^\(]+/gi,Bn=/(horizontal-viewport-segments:)\s?(\d)/gi,qn=/(vertical-viewport-segments:)\s?(\d)/gi,Wn=function(t){return new RegExp("env\\(\\s*"+t+"\\s*\\)","gi")};function is(t,i){var e=t.matchAll(i);return e===null?[]:Array.from(e,function(o){return o[2]})[0]}function Gn(t){var i=function(o){var s,r=new RegExp(xi,"gi");if(typeof o.matchAll=="function")s=Array.from(o.matchAll(r));else{for(s=[];s[s.length]=r.exec(o););s.length--}return s}(t),e=[[]];return i.forEach(function(o){var s=o[1],r=o[2],n=o[3],l=o[4],a=r.match(jn)||[],h=r.match(Fn)||[],c=is(r,qn);c===void 0&&(c=1);var d=is(r,Bn);d===void 0&&(d=1),h=h.filter(function(u){return!u.includes(Qs)}).join(" and "),e[c]===void 0&&(e[c]=new Array),e[c][d]=""+s+a+h+"{"+n+l+"}"}),e}var Si=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+Si);var os,tr=new Bi;if(!Si){var ai=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(os=ai,Promise.all(os.map(function(t){return t.href?fetch(t.href).then(function(i){return i.text()}):t.textContent}))).then(function(t){var i=new DocumentFragment;t.forEach(function(e,o){for(var s,r=function(A,$){return A.replace(new RegExp(xi,"gi"),$)}(e,""),n=Gn(e),l=ai[o].href||"inline",a=0,h=Object.entries(n);a<h.length;a++){var c=h[a],d=c[0],u=c[1];Jt[d]==null&&(Jt[d]=[]);for(var p=0,f=Object.entries(u);p<f.length;p++){var y=f[p];Jt[d][y[0]]="/* origin: "+l+" */"+y[1]}}if(l=="inline"||(s=e,new RegExp(xi,"gi").test(s))){var m=document.createElement("style");m.setAttribute("data-css-origin",l),m.textContent=r,i.appendChild(m)}else{var b=document.createElement("link");b.type="text/css",b.rel="stylesheet",b.href=l,i.appendChild(b)}}),ai.forEach(function(e){return e.parentElement!=null&&e.parentElement.removeChild(e)}),document.head.appendChild(i),function(e){Si||(ss(e),tr.addEventListener("change",function(){return ss(e)}))}()})}var Jt=[[]];function ss(t){var i,e=tr,o=null;(i=t?Jt[t.nodeName.toLowerCase()]:Jt)[e.verticalViewportSegments]&&(o=i[e.verticalViewportSegments][e.horizontalViewportSegments]);var s,r=i[0][0]?i[0][0]:null;if(o){var n=window.visualViewport.segments,l=!1;n.length>1&&(l=!(n[0].height<window.innerHeight));for(var a=0,h=Object.entries(n);a<h.length;a++)for(var c=h[a],d=c[0],u=0,p=Object.entries(c[1]);u<p.length;u++){var f=p[u],y=f[0];s=f[1]+"px",o=o.replace(Wn(l?"viewport-segment-"+y+" "+d+" 0":"viewport-segment-"+y+" 0 "+d),s)}var m="__foldables_sheet__",b=function($,N){for(var k,C=function(E,pe){var D=typeof Symbol<"u"&&E[Symbol.iterator]||E["@@iterator"];if(D)return(D=D.call(E)).next.bind(D);if(Array.isArray(E)||(D=function(I,Lt){if(I){if(typeof I=="string")return es(I,Lt);var W=Object.prototype.toString.call(I).slice(8,-1);return W==="Object"&&I.constructor&&(W=I.constructor.name),W==="Map"||W==="Set"?Array.from(I):W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W)?es(I,Lt):void 0}}(E))){D&&(E=D);var Mt=0;return function(){return Mt>=E.length?{done:!0}:{done:!1,value:E[Mt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}($.querySelectorAll("."+m));!(k=C()).done;)k.value.remove();var V=document.createElement("style");V.className=m,V.textContent=N,$===document?document.head.appendChild(V):$.appendChild(V)};if(t){var A=t.shadowRoot;"adoptedStyleSheets"in A&&A.adoptedStyleSheets.length>0?A.adoptedStyleSheets[0].replace(r+o):b(A,o)}else b(document,o)}}const Q={Foldable:"foldable",Dual:"dual"};class Vt extends yt{}v(Vt,"styles",Is`
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
  `);customElements.define("close-icon",class extends Vt{render(){return Rt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}});customElements.define("fullscreen-icon",class extends Vt{render(){return Rt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}});customElements.define("splitview-icon",class extends Vt{render(){return Rt`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}});customElements.define("rotate-icon",class extends Vt{render(){return Rt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}});customElements.define("minimize-icon",class extends Vt{render(){return Rt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}});class er extends yt{constructor(){super();v(this,"_mini_configurator_header");v(this,"_mini_configurator");v(this,"_configurator");v(this,"_configurator_header");v(this,"_device_type_select");v(this,"_orientation_select");v(this,"_seam_slider");v(this,"_seam_container");v(this,"_preview");v(this,"_preview_container");v(this,"_device");v(this,"_frame");v(this,"_device_hinge");v(this,"_currentOrientation");v(this,"_currentDevice");v(this,"_isFullscreen",!1);v(this,"_verticalViewportSegments",1);v(this,"_horizontalViewportSegments",1);v(this,"_fold_width");v(this,"_browser_shell_size");v(this,"_x",0);v(this,"_y",0);v(this,"_offset_x",0);v(this,"_offset_y",0);v(this,"_resizeHandler");v(this,"_handleKeyUp",e=>{e.keyCode==73&&e.ctrlKey&&this._showMiniConfigurator()});v(this,"_startDragMiniConfigurator",async e=>{this._startDrag(e),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove});v(this,"_startDragConfigurator",async e=>{this._startDrag(e),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove});v(this,"_startDrag",async e=>{this._isFullscreen||(this._moved=!1,this._x=e.clientX-this._offset_x,this._y=e.clientY-this._offset_y,this._pointerId=e.pointerId,e.preventDefault())});v(this,"_miniConfiguratorMove",async e=>{this._pointerMove(e),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}});v(this,"_pointerMove",async e=>{if(e.clientY<0||e.clientX<0||e.clientX>window.innerWidth||e.clientY>window.innerHeight)return;let o=e.clientX-this._x,s=e.clientY-this._y;const r=window.getComputedStyle(this.shadowRoot.host),n=parseFloat(r.width),l=parseFloat(r.height);o<0&&(o=0),s<0&&(s=0),s+l>=window.innerHeight&&(s=window.innerHeight-l),o+n>=window.innerWidth&&(o=window.innerWidth-n),this._updateConfiguratorPosition(o,s),e.preventDefault()});v(this,"_stopDragConfigurator",async e=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(e)});v(this,"_stopDragMiniConfigurator",async e=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(e)});v(this,"_stopDrag",async e=>{this._x=this._offset_x,this._y=this._offset_y});v(this,"_onResize",async e=>{this._handleAsusSpanning()});v(this,"_seamValueUpdated",async()=>{this.foldWidth=this._seam_slider.value,this.shadowRoot.host.style.setProperty("--device-fold-width",this.foldWidth+"px"),this._updateFoldablesFeature()});v(this,"_rotationFinished",e=>{this._preview.style.transition=""});this._verticalViewportSegments=1,this._horizontalViewportSegments=1}static get properties(){return{verticalViewportSegments:{type:Number},horizontalViewportSegments:{type:Number}}}_inIframe(){try{return window.self!==window.top}catch{return!0}}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches)return console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this);const e=window.getComputedStyle(this.shadowRoot.host);parseFloat(e.width);const o=parseFloat(e.height);this._updateConfiguratorPosition(20,window.innerHeight-o-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._verticalViewportSegments=1,this._horizontalViewportSegments=1,this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="portrait",this._deviceType=Q.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.horizontalViewportSegments=1,this.verticalViewportSegments=2,this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{this._addZenbookVariables(document.styleSheets[0]),this._addZenbookVariables(this._frame.contentDocument.styleSheets[0])},300)):(this.horizontalViewportSegments=1,this.verticalViewportSegments=1,this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this._orientationFromSegments()}_orientationFromSegments(){return this.horizontalViewportSegments===2&&this.verticalViewportSegments===1?"portrait":this.horizontalViewportSegments===1&&this.verticalViewportSegments===2?"landscape":"portrait"}_addZenbookVariables(e){e.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",e.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(e){this._fold_width=Math.max(0,e)}_orientationChanged(e){const o=this._orientation_select.selectedIndex;this._orientation_select[o].value==="portrait"?(this.horizontalViewportSegments=2,this.verticalViewportSegments=1):(this.horizontalViewportSegments=1,this.verticalViewportSegments=2),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){this._orientationFromSegments()!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this._orientationFromSegments(),this.horizontalViewportSegments===1&&this.verticalViewportSegments===1?this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation():this.horizontalViewportSegments===2?this._applyVerticalRotation():this._applyHorizontalRotation()}get horizontalViewportSegments(){return this._horizontalViewportSegments}set horizontalViewportSegments(e){let o=this._horizontalViewportSegments;this._orientation_select.selectedIndex=e===2?0:1,this._horizontalViewportSegments=e,this.requestUpdate("horizontalViewportSegments",o)}get verticalViewportSegments(){return this._verticalViewportSegments}set verticalViewportSegments(e){let o=this._verticalViewportSegments;this._orientation_select.selectedIndex=e===2?1:0,this._verticalViewportSegments=e,this.requestUpdate("verticalViewportSegments",o)}_deviceTypeChanged(e){const o=this._device_type_select.selectedIndex,s=this._device_type_select[o].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(this.verticalViewportSegments=1,this.horizontalViewportSegments=2,this._currentOrientation="portrait"),s){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this.foldWidth=24,this._deviceType=Q.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Q.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Q.Dual,this.foldWidth=28,this._currentDevice="duo";break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=Q.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Q.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this.verticalViewportSegments=1,this.horizontalViewportSegments=1,this._currentOrientation="portrait",this._currentDevice="duo",this.foldWidth=0,this._deviceType=Q.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature(),this._frame.contentWindow.location.reload(!0)}_calculateAndApplyScaleFactor(){const e=window.getComputedStyle(this._preview_container),o=window.getComputedStyle(this._device),s=parseInt(e.width,10),r=parseInt(e.height,10);let n=parseInt(o.width,10),l=parseInt(o.height,10),a=1;if(this._currentOrientation==="landscape"&&(n=parseInt(o.height,10),l=parseInt(o.width,10)),l>r||n>s){const h=r/l,c=s/n;a=c<h?c:h}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*a)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px")}this._deviceType===Q.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const e=new Bi;e.foldSize=this.foldWidth,e.horizontalViewportSegments=this.horizontalViewportSegments,e.verticalViewportSegments=this.verticalViewportSegments,this._seam_slider.value=this.foldWidth}_debounce(e,o){let s;return function(){clearTimeout(s),s=setTimeout(()=>e.apply(this,arguments),o)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let e=this._offset_x,o=this._offset_y;const s=window.getComputedStyle(this.shadowRoot.host),r=parseFloat(s.width),n=parseFloat(s.height);this._offset_y+n>=window.innerHeight&&(o=window.innerHeight-n),this._offset_x+r>=window.innerWidth&&(e=window.innerWidth-r),this._updateConfiguratorPosition(e,o),this._updatePreviewConfiguration()}_updateConfiguratorPosition(e,o){this._offset_x=e,this._offset_y=o,this.shadowRoot.host.style.transform="translate3d("+e+"px, "+o+"px, 0)"}_toggleSpanning(){this.verticalViewportSegments!=1||this.horizontalViewportSegments!=1?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1||(this.verticalViewportSegments===2?(this.verticalViewportSegments=1,this.horizontalViewportSegments=2):(this.verticalViewportSegments=2,this.horizontalViewportSegments=1),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return Rt`
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
    </div>`}}v(er,"styles",Is`
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
  `);customElements.define("foldable-device-configurator",er);try{self["workbox:window:7.0.0"]&&_()}catch{}function Ai(t,i){return new Promise(function(e){var o=new MessageChannel;o.port1.onmessage=function(s){e(s.data)},t.postMessage(i,[o.port2])})}function Yn(t,i){for(var e=0;e<i.length;e++){var o=i[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function rs(t,i){(i==null||i>t.length)&&(i=t.length);for(var e=0,o=new Array(i);e<i;e++)o[e]=t[e];return o}function Kn(t,i){var e;if(typeof Symbol>"u"||t[Symbol.iterator]==null){if(Array.isArray(t)||(e=function(s,r){if(s){if(typeof s=="string")return rs(s,r);var n=Object.prototype.toString.call(s).slice(8,-1);return n==="Object"&&s.constructor&&(n=s.constructor.name),n==="Map"||n==="Set"?Array.from(s):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rs(s,r):void 0}}(t))||i&&t&&typeof t.length=="number"){e&&(t=e);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(e=t[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:7.0.0"]&&_()}catch{}var li=function(){var t=this;this.promise=new Promise(function(i,e){t.resolve=i,t.reject=e})};function hi(t,i){var e=location.href;return new URL(t,e).href===new URL(i,e).href}var Gt=function(t,i){this.type=t,Object.assign(this,i)};function be(t,i,e){return e?i?i(t):t:(t&&t.then||(t=Promise.resolve(t)),i?t.then(i):t)}function Zn(){}var Xn={type:"SKIP_WAITING"};function ns(t,i){if(!i)return t&&t.then?t.then(Zn):Promise.resolve()}var Jn=function(t){var i,e;function o(l,a){var h,c;return a===void 0&&(a={}),(h=t.call(this)||this).nn={},h.tn=0,h.rn=new li,h.en=new li,h.on=new li,h.un=0,h.an=new Set,h.cn=function(){var d=h.fn,u=d.installing;h.tn>0||!hi(u.scriptURL,h.sn.toString())||performance.now()>h.un+6e4?(h.vn=u,d.removeEventListener("updatefound",h.cn)):(h.hn=u,h.an.add(u),h.rn.resolve(u)),++h.tn,u.addEventListener("statechange",h.ln)},h.ln=function(d){var u=h.fn,p=d.target,f=p.state,y=p===h.vn,m={sw:p,isExternal:y,originalEvent:d};!y&&h.mn&&(m.isUpdate=!0),h.dispatchEvent(new Gt(f,m)),f==="installed"?h.wn=self.setTimeout(function(){f==="installed"&&u.waiting===p&&h.dispatchEvent(new Gt("waiting",m))},200):f==="activating"&&(clearTimeout(h.wn),y||h.en.resolve(p))},h.dn=function(d){var u=h.hn,p=u!==navigator.serviceWorker.controller;h.dispatchEvent(new Gt("controlling",{isExternal:p,originalEvent:d,sw:u,isUpdate:h.mn})),p||h.on.resolve(u)},h.gn=(c=function(d){var u=d.data,p=d.ports,f=d.source;return be(h.getSW(),function(){h.an.has(f)&&h.dispatchEvent(new Gt("message",{data:u,originalEvent:d,ports:p,sw:f}))})},function(){for(var d=[],u=0;u<arguments.length;u++)d[u]=arguments[u];try{return Promise.resolve(c.apply(this,d))}catch(p){return Promise.reject(p)}}),h.sn=l,h.nn=a,navigator.serviceWorker.addEventListener("message",h.gn),h}e=t,(i=o).prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e;var s,r,n=o.prototype;return n.register=function(l){var a=(l===void 0?{}:l).immediate,h=a!==void 0&&a;try{var c=this;return function(d,u){var p=d();return p&&p.then?p.then(u):u(p)}(function(){if(!h&&document.readyState!=="complete")return ns(new Promise(function(d){return window.addEventListener("load",d)}))},function(){return c.mn=!!navigator.serviceWorker.controller,c.yn=c.pn(),be(c.bn(),function(d){c.fn=d,c.yn&&(c.hn=c.yn,c.en.resolve(c.yn),c.on.resolve(c.yn),c.yn.addEventListener("statechange",c.ln,{once:!0}));var u=c.fn.waiting;return u&&hi(u.scriptURL,c.sn.toString())&&(c.hn=u,Promise.resolve().then(function(){c.dispatchEvent(new Gt("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),c.hn&&(c.rn.resolve(c.hn),c.an.add(c.hn)),c.fn.addEventListener("updatefound",c.cn),navigator.serviceWorker.addEventListener("controllerchange",c.dn),c.fn})})}catch(d){return Promise.reject(d)}},n.update=function(){try{return this.fn?ns(this.fn.update()):void 0}catch(l){return Promise.reject(l)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(l){try{return be(this.getSW(),function(a){return Ai(a,l)})}catch(a){return Promise.reject(a)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Ai(this.fn.waiting,Xn)},n.pn=function(){var l=navigator.serviceWorker.controller;return l&&hi(l.scriptURL,this.sn.toString())?l:void 0},n.bn=function(){try{var l=this;return function(a,h){try{var c=a()}catch(d){return h(d)}return c&&c.then?c.then(void 0,h):c}(function(){return be(navigator.serviceWorker.register(l.sn,l.nn),function(a){return l.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},s=o,(r=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Yn(s.prototype,r),o}(function(){function t(){this.Pn=new Map}var i=t.prototype;return i.addEventListener=function(e,o){this.Sn(e).add(o)},i.removeEventListener=function(e,o){this.Sn(e).delete(o)},i.dispatchEvent=function(e){e.target=this;for(var o,s=Kn(this.Sn(e.type));!(o=s()).done;)(0,o.value)(e)},i.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},t}());ui("/demos/foldship/");const Qn=(t,...i)=>{const e=de(t[0],"main-application");return H([e],...i)},ta=["","A","B","C","D","E","F","G","H","I","J"];class ir extends q{constructor(){super();v(this,"_timeBetweenRounds",1500);v(this,"_playMessage");v(this,"_swAlert");v(this,"_playing",!1);v(this,"_wb");v(this,"_wbRegistration");v(this,"_currentTime",0);v(this,"_viewportSegmentsChanged",async e=>{e.matches?this.shadowRoot.host.style.setProperty("--fold-visibility","visible"):this.shadowRoot.host.style.setProperty("--fold-visibility","hidden")});this._round=0,this._roundDigits=["0"]}static get properties(){return{round:{type:String},roundDigits:{type:Array},currentTime:{type:String}}}set round(e){let o=this._round;this._round=e,this.requestUpdate("round",o),this.roundDigits=e.toString().split("")}get round(){return this._round}set roundDigits(e){let o=this._roundDigits;this._roundDigits=e,this.requestUpdate("roundDigits",o)}get roundDigits(){return this._roundDigits}set currentTime(e){let o=this._currentTime;this._currentTime=e,this.requestUpdate("currentTime",o)}get currentTime(){return this._currentTime}firstUpdated(){this._enemyGrid=this.shadowRoot.querySelector("#enemy-grid"),this._playerGrid=this.shadowRoot.querySelector("#player-grid"),this._playMessage=this.shadowRoot.querySelector("#play-message"),this._endGameMenu=this.shadowRoot.querySelector("#end-game-menu"),this._welcomeMenu=this.shadowRoot.querySelector("#welcome-menu"),this._endGameMessage=this.shadowRoot.querySelector("#end-game-message"),this._endGameTitle=this.shadowRoot.querySelector("#end-game-title"),this._welcomeMenu.open(),this._infobox=this.shadowRoot.querySelector("#infobox"),this._fullscreenRotate=this.shadowRoot.querySelector("#fullscreen-rotate"),this._fullscreenRotate.hide(),this._howTo=this.shadowRoot.querySelector("#how-to"),this._swAlert=this.shadowRoot.querySelector("#sw-alert"),this._fold=this.shadowRoot.querySelector(".fold"),this._foldContent=this.shadowRoot.querySelector(".fold-content"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new Jn("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()})}connectedCallback(){super.connectedCallback(),zt(this)}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&Ai(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_deviceSupportsViewportMQs(){return window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1}startGame(){this._deviceSupportsViewportMQs()&&this._fullscreenRotate.setLabel("Ahoy Captain!<br>Please rotate your device to play.                                 <br> You can also maximize/span the window to play."),this._fullscreenRotate.show(),this._welcomeMenu.close(),this._enemyGrid.classList.remove("blocked"),this._playerGrid.style.visibility="visible",this._enemyGrid.style.visibility="visible",this._infobox.style.visibility="visible",this._playing=!0;const e=window.matchMedia("(vertical-viewport-segments: 2), (horizontal-viewport-segments: 2)");e.onchange=o=>this._viewportSegmentsChanged(o),e.matches&&this.shadowRoot.host.style.setProperty("--fold-visibility","visible"),this._currentTime=0,this._currentTimerId=setInterval(()=>{this.currentTime++},1e3)}restartGame(){this.round=0,clearInterval(this._currentTimerId),this._enemyGrid.classList.remove("blocked"),this._enemyGrid.restart(),this._playerGrid.restart(),this._playMessage.innerHTML="Let's get started, fire first.",this._endGameMenu.close(),this.startGame()}showHowTo(){this._welcomeMenu.close(),this._endGameMenu.close(),this._howTo.style.visibility="visible"}closeHowTo(){this.round>0?this._endGameMenu.open():this._welcomeMenu.open(),this._howTo.style.visibility="hidden"}playerPlayed(){this._enemyGrid.classList.add("blocked"),this._playMessage.innerHTML="You missed!",setTimeout(()=>this._playerGrid.enemyShoot(),this._timeBetweenRounds),this.round++}enemyPlayed(e){this._playMessage.innerHTML="I shot at "+ta[e.detail.x]+"-"+e.detail.y,setTimeout(()=>this.nextPlayerTurn(),this._timeBetweenRounds)}nextPlayerTurn(){this._playMessage.innerHTML="Your turn...",this._enemyGrid.classList.remove("blocked")}playerHit(e){this._playMessage.innerHTML="You hit my "+e.detail.type+"!<br> Shoot again."}playerSank(e){this._playMessage.innerHTML="You sank my "+e.detail.type+" :( !<br> Shoot again."}enemyHit(e){this._playMessage.innerHTML="Ah! I hit your "+e.detail.type+"!<br> I'll shoot again."}enemySank(e){this._playMessage.innerHTML="I sank your "+e.detail.type+"!<br> I'll shoot again."}playerWin(){this._playing=!1,this._fullscreenRotate.hide(),this._enemyGrid.classList.add("blocked"),this._endGameTitle.innerHTML="You won!",this._endGameMessage.innerHTML="You defeated your enemy in "+this._round+" rounds.",this._endGameMenu.open(),this._playMessage.innerHTML="Oh no :(, you won...",clearInterval(this._currentTimerId)}playerLost(){this._playing=!1,this._fullscreenRotate.hide(),this._enemyGrid.classList.add("blocked"),this._endGameTitle.innerHTML="You lost!",this._endGameMessage.innerHTML="Your enemy defeated you in "+this._round+" rounds.",this._endGameMenu.open(),this._playMessage.innerHTML="Yeah, I won!",clearInterval(this._currentTimerId)}render(){return R`
      <foldable-device-configurator></foldable-device-configurator>
      <div class="content">
        <picture>
          <source media="(max-width: 767px)"
                  srcset="images/ocean-412.webp 412w, images/ocean-768.webp 768w, images/ocean-800.webp 800w"
                  sizes="(max-width: 767px) 412px, 768px, 800px" type="image/webp"/>
          <source media="(max-width: 767px)"
                  srcset="images/ocean-412.jpg 412w, images/ocean-768.jpg 768w, images/ocean-800.jpg 800w"
                  sizes="(max-width: 767px) 412px, 768px, 800px" type="image/jpeg"/>
          <source media="(max-width: 1366px)"
                  srcset="images/ocean-1024.webp 1024w, images/ocean-1366.webp 1366w"
                  sizes="(max-width: 1366px) 1024px, 1366px" type="image/webp"/>
          <source media="(max-width: 1366px)"
                  srcset="images/ocean-1024.jpg 1024w, images/ocean-1366.jpg 1366w"
                  sizes="(max-width: 1366px) 1024px, 1366px" type="image/jpeg"/>
          <source media="(max-width: 1440px)"
                  srcset="images/ocean-1440.webp 1440w, images/ocean-1366.webp 1366w"
                  sizes="(max-width: 1440px) 1440px, 1366px" type="image/webp"/>
          <source media="(max-width: 1440px)"
                  srcset="images/ocean-1440.jpg 1440w, images/ocean-1366.jpg 1366w"
                  sizes="(max-width: 1440px) 1440px, 1366px" type="image/jpeg"/>
          <source media="(max-width: 1920px)"
                  srcset="images/ocean-1920.webp 1920w, images/ocean-1440.webp 1440w"
                  sizes="(max-width: 1920px) 1920px, 1440px" type="image/webp"/>
          <source media="(max-width: 1920px)"
                  srcset="images/ocean-1920.jpg 1920w, images/ocean-1440.jpg 1440w"
                  sizes="(max-width: 1920px) 1920px, 1440px" type="image/jpeg"/>
          <source media="(min-width: 1920px)"
                  srcset="images/ocean-4k.webp 2560w, images/ocean-1920.webp 1920w"
                  sizes="(max-width: 1920px) 2560px, 1920px" type="image/webp"/>
          <source media="(min-width: 1920px)"
                  srcset="images/ocean-4k.jpg 2560w, images/ocean-1920.jpg 1920w"
                  sizes="(max-width: 1920px) 2560px, 1920px" type="image/jpeg"/>
          <img class="background" src="images/ocean-1024.jpg" alt="Background of an ocean">
        </picture>
        <div class="enemy-fleet">
          <enemy-grid id="enemy-grid" @player-played=${this.playerPlayed} @player-sank=${this.playerSank} @player-hit=${this.playerHit} @game-over=${this.playerWin}></enemy-grid>
        </div>
        <div class="fold">
          <div class="fold-content">
            <img src="images/radar.svg" class="instruments display" alt="Image of a radar screen">
            <div class="fold-text display">
              Elapsed time: 
              <div class="time">${this.currentTime} s</div>
            </div>
            <div class="rounds-container display">
              <div class="fold-text">Number of rounds :</div>
                ${this.roundDigits.map(e=>R`
                    <img src="images/${e}.svg" class="fold-rounds" alt="Image of digit ${e}">
                `)}
            </div>
            <img src="images/tach.svg" class="instruments display" alt="Image of a tachimeter screen">
            <img src="images/amps.svg" class="instruments display" alt="Image of a amp measurement screen">
          </div>
        </div>
        <div class="fleet">
          <player-grid id="player-grid" @player-played=${this.enemyPlayed} @game-over=${this.playerLost} @player-hit=${this.enemyHit} @player-sank=${this.enemySank}></player-grid>
        </div>
      </div>
      <info-box id="infobox">
        <div slot="label" id="play-message">Let's get started, fire first.</div>
      </info-box>
      <dialog-box id="welcome-menu">
        <div slot="title">Welcome to FoldShip!</div>
        <picture class="menu-picture" slot="menu-1">
          <source srcset="images/new-game-button.webp" type="image/webp">
          <img class="menu-button" src="images/new-game-button.png" @click="${this.startGame}"/>
        </picture>
        <picture class="menu-picture" slot="menu-2">
          <source srcset="images/how-to-button.webp" type="image/webp">
          <img class="menu-button" src="images/how-to-button.png" @click="${this.showHowTo}"/>
        </picture>
      </dialog-box>
      <dialog-box id="end-game-menu">
        <div slot="title" id="end-game-title">You won!</div>
        <div slot="label" id="end-game-message">You won!</div>
        <picture class="menu-picture" slot="menu-1">
          <source srcset="images/restart-button.webp" type="image/webp">
          <img class="menu-button" src="images/restart-button.png" @click="${this.restartGame}"/>
        </picture>
        <picture class="menu-picture" slot="menu-2">
          <source srcset="images/how-to-button.webp" type="image/webp">
          <img class="menu-button" src="images/how-to-button.png" @click="${this.showHowTo}"/>
        </picture>
      </dialog-box>
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
      <how-to-screen id="how-to" @howto-closed="${this.closeHowTo}"></how-to-screen>
      <rotate-box id="fullscreen-rotate"></rotate-box>
    `}}v(ir,"styles",Qn`
    :host {
      width: 100vw;
      height: 100vh;
      font-family: 'Bangers', sans-serif;
      --fold-visibility: hidden;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
    }

    .fold {
      height: 100%;
      width: 15px;
      z-index: 2;
      visibility: hidden;
      background-color: black;
      display: flex;
      align-items: center;
    }

    .fold-content {
      visibility: hidden;
      width: 100%;
      height: 100%;
      background-image: url( 'images/brushed-metal.svg' );
      background-repeat: no-repeat;
    }

    .display {
      background-color: black;
      border-radius: 20px;
      padding: 5px;
      border: solid 2px gray;
    }

    .fold-text {
      color: #e35e20;
      margin-right: 10px;
      font-size: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 10px;
      padding-right: 10px;
    }

    .fold-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }

    .time {
      width: 4ch;
      text-align: center;
    }

    .rounds-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .enemy-fleet {
      width: 50%;
      height: 100%;
      z-index: 1;
      visibility: hidden;
    }

    .fleet {
      width: 50%;
      height: 100%;
      z-index: 1;
      visibility: hidden;
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

    #infobox {
      visibility: hidden;
    }

    .menu-button {
      width: 80%;
      display: block;
      margin: auto;
    }

    how-to-screen {
      visibility: hidden;
    }

    @media all and (orientation:portrait) {
      .fold {
        visibility: hidden;
      }

      .enemy-fleet {
        visibility: hidden;
      }

      .fleet {
        visibility: hidden;
      }

      #infobox {
        visibility: hidden;
      }
    }

    @media all and (orientation:landscape) {
      .background {
        z-index: 0;
      }
    }

    @media (horizontal-viewport-segments: 2) {
      .fold {
        height: env(viewport-segment-height 0 0);
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
        visibility: visible;
      }

      .fold-content {
        flex-direction: column;
      }

      .rounds-container {
        flex-direction: column;
      }

      .instruments {
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0) - 30px);
      }

      .fold-text {
        margin-bottom: 10px;
        margin-right: 0px;
        font-size: 1vw;
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0) - 30px);
        flex-direction: column;
      }

      .fold-rounds {
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0) - 50px);
      }

      .content {
        flex-direction: row;
      }

      .enemy-fleet {
        width: env(viewport-segment-width 0 0);
        height: 100%;
      }

      .fleet {
        height: 100%;
        width: env(viewport-segment-width 1 0);
      }

      .background {
        z-index: 0;
      }
  }

    @media (vertical-viewport-segments: 2) {
      .fold {
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));
        width: env(viewport-segment-width 0 0);
        visibility: visible;
      }

      .fold-content {
        flex-direction: row;
      }

      .fold-text {
        margin-right: 10px;
        margin-bottom: 0px;
        font-size: 3rem;
        flex-direction: row;
      }

      .fold-rounds {
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0) - 55px);
      }

      .instruments {
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0) - 30px);
      }

      .content {
        flex-direction: column;
      }

      .enemy-fleet {
        height: var(--zenbook-span2-height, env(viewport-segment-height 0 0));
        width: 100%;
        flex-grow: 0;
        flex-shrink: 0;
      }

      .fleet {
        width: 100%;
        height: var(--zenbook-span1-height, env(viewport-segment-height 0 1));
      }

      .background {
        z-index: 0;
      }
    }

    @media (device-posture: folded) {
      .fold {
        visibility: var(--fold-visibility);
      }

      .fold-content {
        visibility: var(--fold-visibility);
      }
    }

    @media (device-posture: continuous) {
      .fold-content {
        visibility: hidden;
      }
    }

    /* This block is for smaller foldable devices */
    @media (vertical-viewport-segments: 2) and (max-width: 1024px) {
      .fold {
        height: 40px;
        width: env(viewport-segment-width 0 0);
      }

      .fold-text {
        font-size: 1rem;
      }

      .fold-rounds {
        height: 20px;
      }

      .instruments {
        height: 20px;
      }
    }

    /* This block is for smaller foldable devices */
    @media (horizontal-viewport-segments: 2) and (max-width: 1024px) {
      .fold {
        width: 60px;
        height: env(viewport-segment-height 0 0);
      }

      .fold-text {
        font-size: 0.55rem;
        width: 25px;
      }

      .fold-rounds {
        width: 15px;
      }

      .instruments {
        width: 40px;
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) and (orientation:landscape) {
      .fold {
        height: 100%;
        width: 15px;
      }

      .content {
        flex-direction: row;
      }

      .blocked {
        pointer-events: none;
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) and (orientation:portrait) {
      .background {
        z-index: 4;
      }

      .enemy-fleet {
        visibility: hidden;
      }

      .fleet {
        visibility: hidden;
      }

      .fold {
        visibility: hidden;
      }

      #infobox {
        visibility: hidden;
      }
    }
  `);customElements.define("main-application",ir);
