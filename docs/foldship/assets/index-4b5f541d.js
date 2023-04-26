var Yr=Object.defineProperty;var Kr=Object.getPrototypeOf;var Zr=Reflect.get;var Xr=(i,t,e)=>t in i?Yr(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var m=(i,t,e)=>(Xr(i,typeof t!="symbol"?t+"":t,e),e);var xe=(i,t,e)=>Zr(Kr(i),e,t);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=window,eo=Ce.ShadowRoot&&(Ce.ShadyCSS===void 0||Ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,io=Symbol(),_o=new WeakMap;let Ks=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==io)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(eo&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=_o.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&_o.set(e,t))}return t}toString(){return this.cssText}};const Jr=i=>new Ks(typeof i=="string"?i:i+"",void 0,io),Y=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new Ks(e,i,io)},Qr=(i,t)=>{eo?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),s=Ce.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)})},wo=eo?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Jr(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var oi;const Le=window,$o=Le.trustedTypes,tn=$o?$o.emptyScript:"",xo=Le.reactiveElementPolyfillSupport,Hi={toAttribute(i,t){switch(t){case Boolean:i=i?tn:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Zs=(i,t)=>t!==i&&(t==t||i==i),si={attribute:!0,type:String,converter:Hi,reflect:!1,hasChanged:Zs};let pt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const s=this._$Ep(o,e);s!==void 0&&(this._$Ev.set(s,o),t.push(s))}),t}static createProperty(t,e=si){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,o,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||si}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of o)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift(wo(s))}else t!==void 0&&e.push(wo(t));return e}static _$Ep(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Qr(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=si){var s;const r=this.constructor._$Ep(t,o);if(r!==void 0&&o.reflect===!0){const n=(((s=o.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?o.converter:Hi).toAttribute(e,o.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var o;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=s.getPropertyOptions(r),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:Hi;this._$El=r,this[r]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,o){let s=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Zs)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(o)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdated)===null||s===void 0?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};pt.finalized=!0,pt.elementProperties=new Map,pt.elementStyles=[],pt.shadowRootOptions={mode:"open"},xo==null||xo({ReactiveElement:pt}),((oi=Le.reactiveElementVersions)!==null&&oi!==void 0?oi:Le.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ri;const Ue=window,St=Ue.trustedTypes,So=St?St.createPolicy("lit-html",{createHTML:i=>i}):void 0,it=`lit$${(Math.random()+"").slice(9)}$`,Xs="?"+it,en=`<${Xs}>`,At=document,ae=(i="")=>At.createComment(i),le=i=>i===null||typeof i!="object"&&typeof i!="function",Js=Array.isArray,on=i=>Js(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",qt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ao=/-->/g,Co=/>/g,nt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Eo=/'/g,ko=/"/g,Qs=/^(?:script|style|textarea|title)$/i,sn=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),O=sn(1),Ct=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),zo=new WeakMap,yt=At.createTreeWalker(At,129,null,!1),rn=(i,t)=>{const e=i.length-1,o=[];let s,r=t===2?"<svg>":"",n=qt;for(let a=0;a<e;a++){const l=i[a];let c,d,u=-1,p=0;for(;p<l.length&&(n.lastIndex=p,d=n.exec(l),d!==null);)p=n.lastIndex,n===qt?d[1]==="!--"?n=Ao:d[1]!==void 0?n=Co:d[2]!==void 0?(Qs.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=nt):d[3]!==void 0&&(n=nt):n===nt?d[0]===">"?(n=s??qt,u=-1):d[1]===void 0?u=-2:(u=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?nt:d[3]==='"'?ko:Eo):n===ko||n===Eo?n=nt:n===Ao||n===Co?n=qt:(n=nt,s=void 0);const f=n===nt&&i[a+1].startsWith("/>")?" ":"";r+=n===qt?l+en:u>=0?(o.push(c),l.slice(0,u)+"$lit$"+l.slice(u)+it+f):l+it+(u===-2?(o.push(void 0),a):f)}const h=r+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[So!==void 0?So.createHTML(h):h,o]};let Oi=class tr{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let r=0,n=0;const h=t.length-1,a=this.parts,[l,c]=rn(t,e);if(this.el=tr.createElement(l,o),yt.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=yt.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(it)){const p=c[n++];if(d.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+"$lit$").split(it),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:r,name:g[2],strings:f,ctor:g[1]==="."?an:g[1]==="?"?hn:g[1]==="@"?dn:Ke})}else a.push({type:6,index:r})}for(const u of d)s.removeAttribute(u)}if(Qs.test(s.tagName)){const d=s.textContent.split(it),u=d.length-1;if(u>0){s.textContent=St?St.emptyScript:"";for(let p=0;p<u;p++)s.append(d[p],ae()),yt.nextNode(),a.push({type:2,index:++r});s.append(d[u],ae())}}}else if(s.nodeType===8)if(s.data===Xs)a.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(it,d+1))!==-1;)a.push({type:7,index:r}),d+=it.length-1}r++}}static createElement(t,e){const o=At.createElement("template");return o.innerHTML=t,o}};function Et(i,t,e=i,o){var s,r,n,h;if(t===Ct)return t;let a=o!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[o]:e._$Cl;const l=le(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,o)),o!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(t=Et(i,a._$AS(i,t.values),a,o)),t}let nn=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:At).importNode(o,!0);yt.currentNode=r;let n=yt.nextNode(),h=0,a=0,l=s[0];for(;l!==void 0;){if(h===l.index){let c;l.type===2?c=new oo(n,n.nextSibling,this,t):l.type===1?c=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(c=new cn(n,this,t)),this.u.push(c),l=s[++a]}h!==(l==null?void 0:l.index)&&(n=yt.nextNode(),h++)}return r}p(t){let e=0;for(const o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},oo=class er{constructor(t,e,o,s){var r;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Et(this,t,e),le(t)?t===V||t==null||t===""?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==Ct&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):on(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==V&&le(this._$AH)?this._$AA.nextSibling.data=t:this.T(At.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Oi.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(o);else{const n=new nn(r,this),h=n.v(this.options);n.p(o),this.T(h),this._$AH=n}}_$AC(t){let e=zo.get(t.strings);return e===void 0&&zo.set(t.strings,e=new Oi(t)),e}k(t){Js(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of t)s===e.length?e.push(o=new er(this.O(ae()),this.O(ae()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ke=class{constructor(t,e,o,s,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,s){const r=this.strings;let n=!1;if(r===void 0)t=Et(this,t,e,0),n=!le(t)||t!==this._$AH&&t!==Ct,n&&(this._$AH=t);else{const h=t;let a,l;for(t=r[0],a=0;a<r.length-1;a++)l=Et(this,h[o+a],e,a),l===Ct&&(l=this._$AH[a]),n||(n=!le(l)||l!==this._$AH[a]),l===V?t=V:t!==V&&(t+=(l??"")+r[a+1]),this._$AH[a]=l}n&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},an=class extends Ke{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}};const ln=St?St.emptyScript:"";let hn=class extends Ke{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,ln):this.element.removeAttribute(this.name)}},dn=class extends Ke{constructor(t,e,o,s,r){super(t,e,o,s,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=Et(this,t,e,0))!==null&&o!==void 0?o:V)===Ct)return;const s=this._$AH,r=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==V&&(s===V||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},cn=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Et(this,t)}};const To=Ue.litHtmlPolyfillSupport;To==null||To(Oi,oo),((ri=Ue.litHtmlVersions)!==null&&ri!==void 0?ri:Ue.litHtmlVersions=[]).push("2.6.1");const un=(i,t,e)=>{var o,s;const r=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let n=r._$litPart$;if(n===void 0){const h=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=n=new oo(t.insertBefore(ae(),h),h,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ni,ai;let W=class extends pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=un(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Ct}};W.finalized=!0,W._$litElement$=!0,(ni=globalThis.litElementHydrateSupport)===null||ni===void 0||ni.call(globalThis,{LitElement:W});const Ro=globalThis.litElementPolyfillSupport;Ro==null||Ro({LitElement:W});((ai=globalThis.litElementVersions)!==null&&ai!==void 0?ai:globalThis.litElementVersions=[]).push("3.2.2");function Po(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=i[e];return o}var Wt=function(){try{window[B].updateSegments();var i=function(){if(!li)return li=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){li=t,window[B].dispatchEvent(new Event("change"))})}();return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},B="__foldables__",li=!1,ir=function(){function i(){var o=this;if(window[B]!==void 0)return window[B];var s=document.createDocumentFragment();this.addEventListener=s.addEventListener.bind(s),this.removeEventListener=s.removeEventListener.bind(s),this.dispatchEvent=function(r){if(r.type==="change"){var n="on"+r.type;return typeof o[n]=="function"&&o[n](r),s.dispatchEvent(r)}},window.addEventListener("message",function(r){r.data.action==="update"&&Object.assign(o,r.data.value)}),window.addEventListener("resize",function(){return function(r,n){var h;return function(){var a=arguments,l=this;clearTimeout(h),h=setTimeout(function(){return r.apply(l,a)},n)}}(Wt(),200)})}var t,e=i.prototype;return e.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var s=window.innerHeight-this.browserShellSize,r=0,n=window.innerWidth,h=s/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:r,left:0,bottom:r+h,right:n,width:n,height:h},r+=o[a].height,r+=this.foldSize;if(this.horizontalViewportSegments>1)for(var l=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,c=window.innerHeight,d=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:d,right:d+l,bottom:c,width:l,height:c},d+=o[u].width,d+=this.foldSize;window.visualViewport.segments=o},e.randomizeSegmentsConfiguration=function(o){var s=Math.random()<.5,r=Math.round(Math.random()*(o-1)+1);s?(this.verticalViewportSegments=r,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=r,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(B+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(B+"-horizontal-viewport-segments",o),Wt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(B+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(B+"-vertical-viewport-segments",o),Wt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(B+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(B+"-fold-size",o),Wt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(B+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(B+"-browser-shell-size",o),Wt()}}])&&function(o,s){for(var r=0;r<s.length;r++){var n=s[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(i.prototype,t),i}();window[B]=new ir,window.visualViewport.segments===void 0&&window[B].updateSegments();var or="-viewport-segments",so="(\\s*)(@media.*?\\b"+or+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",pn=/\((.*?)\)/gi,vn=/@media[^\(]+/gi,mn=/(horizontal-viewport-segments:)\s?(\d)/gi,gn=/(vertical-viewport-segments:)\s?(\d)/gi,fn=function(i){return new RegExp("env\\(\\s*"+i+"\\s*\\)","gi")};function sr(i,t){return i.replace(new RegExp(so,"gi"),t)}function Mo(i,t){var e=i.matchAll(t);return e===null?[]:Array.from(e,function(o){return o[2]})[0]}function rr(i){var t=function(o){var s,r=new RegExp(so,"gi");if(typeof o.matchAll=="function")s=Array.from(o.matchAll(r));else{for(s=[];s[s.length]=r.exec(o););s.length--}return s}(i),e=[[]];return t.forEach(function(o){var s=o[1],r=o[2],n=o[3],h=o[4],a=r.match(vn)||[],l=r.match(pn)||[],c=Mo(r,gn);c===void 0&&(c=1);var d=Mo(r,mn);d===void 0&&(d=1),l=l.filter(function(u){return!u.includes(or)}).join(" and "),e[c]===void 0&&(e[c]=new Array),e[c][d]=""+s+a+l+"{"+n+h+"}"}),e}var Ze=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+Ze);var Lo,nr=new ir;if(!Ze){var hi=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Lo=hi,Promise.all(Lo.map(function(i){return i.href?fetch(i.href).then(function(t){return t.text()}):i.textContent}))).then(function(i){var t=new DocumentFragment;i.forEach(function(e,o){for(var s,r=sr(e,""),n=rr(e),h=hi[o].href||"inline",a=0,l=Object.entries(n);a<l.length;a++){var c=l[a],d=c[0],u=c[1];st[d]==null&&(st[d]=[]);for(var p=0,f=Object.entries(u);p<f.length;p++){var g=f[p];st[d][g[0]]="/* origin: "+h+" */"+g[1]}}if(h=="inline"||(s=e,new RegExp(so,"gi").test(s))){var v=document.createElement("style");v.setAttribute("data-css-origin",h),v.textContent=r,t.appendChild(v)}else{var y=document.createElement("link");y.type="text/css",y.rel="stylesheet",y.href=h,t.appendChild(y)}}),hi.forEach(function(e){return e.parentElement!=null&&e.parentElement.removeChild(e)}),document.head.appendChild(t),Ot()})}var st=[[]];function be(i,t){if(Ze)return i;var e=sr(i,""),o=rr(i);t&&(st[t]=[[]]);for(var s=t?st[t]:st,r=t?"":"/* origin: inline */",n=0,h=Object.entries(o);n<h.length;n++){var a=h[n],l=a[0],c=a[1];s[l]==null&&(s[l]=[]);for(var d=0,u=Object.entries(c);d<u.length;d++){var p=u[d];s[l][p[0]]=""+r+p[1]}}return s[0][0]=e,e}function Ot(i){Ze||(Uo(i),nr.addEventListener("change",function(){return Uo(i)}))}function Uo(i){var t,e=nr,o=null;(t=i?st[i.nodeName.toLowerCase()]:st)[e.verticalViewportSegments]&&(o=t[e.verticalViewportSegments][e.horizontalViewportSegments]);var s,r=t[0][0]?t[0][0]:null;if(o){var n=window.visualViewport.segments,h=!1;n.length>1&&(h=!(n[0].height<window.innerHeight));for(var a=0,l=Object.entries(n);a<l.length;a++)for(var c=l[a],d=c[0],u=0,p=Object.entries(c[1]);u<p.length;u++){var f=p[u],g=f[0];s=f[1]+"px",o=o.replace(fn(h?"viewport-segment-"+g+" "+d+" 0":"viewport-segment-"+g+" 0 "+d),s)}var v="__foldables_sheet__",y=function($,I){for(var k,C=function(E,$e){var D=typeof Symbol<"u"&&E[Symbol.iterator]||E["@@iterator"];if(D)return(D=D.call(E)).next.bind(D);if(Array.isArray(E)||(D=function(N,jt){if(N){if(typeof N=="string")return Po(N,jt);var q=Object.prototype.toString.call(N).slice(8,-1);return q==="Object"&&N.constructor&&(q=N.constructor.name),q==="Map"||q==="Set"?Array.from(N):q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q)?Po(N,jt):void 0}}(E))){D&&(E=D);var Bt=0;return function(){return Bt>=E.length?{done:!0}:{done:!1,value:E[Bt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}($.querySelectorAll("."+v));!(k=C()).done;)k.value.remove();var P=document.createElement("style");P.className=v,P.textContent=I,$===document?document.head.appendChild(P):$.appendChild(P)};if(i){var A=i.shadowRoot;"adoptedStyleSheets"in A&&A.adoptedStyleSheets.length>0?A.adoptedStyleSheets[0].replace(r+o):y(A,o)}else y(document,o)}}var Ni="";function Ii(i){Ni=i}function bn(){if(!Ni){const i=[...document.getElementsByTagName("script")],t=i.find(e=>e.hasAttribute("data-shoelace"));if(t)Ii(t.getAttribute("data-shoelace"));else{const e=i.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src));let o="";e&&(o=e.getAttribute("src")),Ii(o.split("/").slice(0,-1).join("/"))}}return Ni.replace(/\/$/,"")}var yn={name:"default",resolver:i=>`${bn()}/assets/icons/${i}.svg`},_n=yn,Vo={caret:`
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
  `},wn={name:"system",resolver:i=>i in Vo?`data:image/svg+xml,${encodeURIComponent(Vo[i])}`:""},$n=wn,xn=[_n,$n],Di=[];function Sn(i){Di.push(i)}function An(i){Di=Di.filter(t=>t!==i)}function Ho(i){return xn.find(t=>t.name===i)}var di=new Map;function Cn(i,t="cors"){if(di.has(i))return di.get(i);const e=fetch(i,{mode:t}).then(async o=>({ok:o.ok,status:o.status,html:await o.text()}));return di.set(i,e),e}var ci=new Map;async function En(i){if(ci.has(i))return ci.get(i);const t=await Cn(i),e={ok:t.ok,status:t.status,svg:null};if(t.ok){const o=document.createElement("div");o.innerHTML=t.html;const s=o.firstElementChild;e.svg=(s==null?void 0:s.tagName.toLowerCase())==="svg"?s.outerHTML:""}return ci.set(i,e),e}var Ee=window,ro=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,no=Symbol(),Oo=new WeakMap,ar=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==no)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ro&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Oo.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Oo.set(e,t))}return t}toString(){return this.cssText}},kn=i=>new ar(typeof i=="string"?i:i+"",void 0,no),Nt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new ar(e,i,no)},zn=(i,t)=>{ro?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),s=Ee.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)})},No=ro?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return kn(e)})(i):i,ui,Ve=window,Io=Ve.trustedTypes,Tn=Io?Io.emptyScript:"",Do=Ve.reactiveElementPolyfillSupport,Fi={toAttribute(i,t){switch(t){case Boolean:i=i?Tn:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},lr=(i,t)=>t!==i&&(t==t||i==i),pi={attribute:!0,type:String,converter:Fi,reflect:!1,hasChanged:lr},vt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const s=this._$Ep(o,e);s!==void 0&&(this._$Ev.set(s,o),t.push(s))}),t}static createProperty(t,e=pi){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,o,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||pi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of o)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift(No(s))}else t!==void 0&&e.push(No(t));return e}static _$Ep(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return zn(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=pi){var s;const r=this.constructor._$Ep(t,o);if(r!==void 0&&o.reflect===!0){const n=(((s=o.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?o.converter:Fi).toAttribute(e,o.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var o;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=s.getPropertyOptions(r),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:Fi;this._$El=r,this[r]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,o){let s=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||lr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(o)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdated)===null||s===void 0?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};vt.finalized=!0,vt.elementProperties=new Map,vt.elementStyles=[],vt.shadowRootOptions={mode:"open"},Do==null||Do({ReactiveElement:vt}),((ui=Ve.reactiveElementVersions)!==null&&ui!==void 0?ui:Ve.reactiveElementVersions=[]).push("1.6.1");var vi,He=window,kt=He.trustedTypes,Fo=kt?kt.createPolicy("lit-html",{createHTML:i=>i}):void 0,ot=`lit$${(Math.random()+"").slice(9)}$`,hr="?"+ot,Rn=`<${hr}>`,zt=document,he=(i="")=>zt.createComment(i),de=i=>i===null||typeof i!="object"&&typeof i!="function",dr=Array.isArray,Pn=i=>dr(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bo=/-->/g,jo=/>/g,at=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qo=/'/g,Wo=/"/g,cr=/^(?:script|style|textarea|title)$/i,Mn=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),ce=Mn(1),rt=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Go=new WeakMap,_t=zt.createTreeWalker(zt,129,null,!1),Ln=(i,t)=>{const e=i.length-1,o=[];let s,r=t===2?"<svg>":"",n=Gt;for(let a=0;a<e;a++){const l=i[a];let c,d,u=-1,p=0;for(;p<l.length&&(n.lastIndex=p,d=n.exec(l),d!==null);)p=n.lastIndex,n===Gt?d[1]==="!--"?n=Bo:d[1]!==void 0?n=jo:d[2]!==void 0?(cr.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=at):d[3]!==void 0&&(n=at):n===at?d[0]===">"?(n=s??Gt,u=-1):d[1]===void 0?u=-2:(u=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?at:d[3]==='"'?Wo:qo):n===Wo||n===qo?n=at:n===Bo||n===jo?n=Gt:(n=at,s=void 0);const f=n===at&&i[a+1].startsWith("/>")?" ":"";r+=n===Gt?l+Rn:u>=0?(o.push(c),l.slice(0,u)+"$lit$"+l.slice(u)+ot+f):l+ot+(u===-2?(o.push(void 0),a):f)}const h=r+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Fo!==void 0?Fo.createHTML(h):h,o]},Oe=class{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let r=0,n=0;const h=t.length-1,a=this.parts,[l,c]=Ln(t,e);if(this.el=Oe.createElement(l,o),_t.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=_t.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(ot)){const p=c[n++];if(d.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+"$lit$").split(ot),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:r,name:g[2],strings:f,ctor:g[1]==="."?Vn:g[1]==="?"?On:g[1]==="@"?Nn:Je})}else a.push({type:6,index:r})}for(const u of d)s.removeAttribute(u)}if(cr.test(s.tagName)){const d=s.textContent.split(ot),u=d.length-1;if(u>0){s.textContent=kt?kt.emptyScript:"";for(let p=0;p<u;p++)s.append(d[p],he()),_t.nextNode(),a.push({type:2,index:++r});s.append(d[u],he())}}}else if(s.nodeType===8)if(s.data===hr)a.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(ot,d+1))!==-1;)a.push({type:7,index:r}),d+=ot.length-1}r++}}static createElement(t,e){const o=zt.createElement("template");return o.innerHTML=t,o}};function Tt(i,t,e=i,o){var s,r,n,h;if(t===rt)return t;let a=o!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[o]:e._$Cl;const l=de(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,o)),o!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(t=Tt(i,a._$AS(i,t.values),a,o)),t}var Un=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:zt).importNode(o,!0);_t.currentNode=r;let n=_t.nextNode(),h=0,a=0,l=s[0];for(;l!==void 0;){if(h===l.index){let c;l.type===2?c=new Xe(n,n.nextSibling,this,t):l.type===1?c=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(c=new In(n,this,t)),this.u.push(c),l=s[++a]}h!==(l==null?void 0:l.index)&&(n=_t.nextNode(),h++)}return r}p(t){let e=0;for(const o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},Xe=class{constructor(t,e,o,s){var r;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Tt(this,t,e),de(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==rt&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pn(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==M&&de(this._$AH)?this._$AA.nextSibling.data=t:this.T(zt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Oe.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(o);else{const n=new Un(r,this),h=n.v(this.options);n.p(o),this.T(h),this._$AH=n}}_$AC(t){let e=Go.get(t.strings);return e===void 0&&Go.set(t.strings,e=new Oe(t)),e}k(t){dr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of t)s===e.length?e.push(o=new Xe(this.O(he()),this.O(he()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Je=class{constructor(i,t,e,o,s){this.type=1,this._$AH=M,this._$AN=void 0,this.element=i,this.name=t,this._$AM=o,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(i,t=this,e,o){const s=this.strings;let r=!1;if(s===void 0)i=Tt(this,i,t,0),r=!de(i)||i!==this._$AH&&i!==rt,r&&(this._$AH=i);else{const n=i;let h,a;for(i=s[0],h=0;h<s.length-1;h++)a=Tt(this,n[e+h],t,h),a===rt&&(a=this._$AH[h]),r||(r=!de(a)||a!==this._$AH[h]),a===M?i=M:i!==M&&(i+=(a??"")+s[h+1]),this._$AH[h]=a}r&&!o&&this.j(i)}j(i){i===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},Vn=class extends Je{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}},Hn=kt?kt.emptyScript:"",On=class extends Je{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,Hn):this.element.removeAttribute(this.name)}},Nn=class extends Je{constructor(t,e,o,s,r){super(t,e,o,s,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=Tt(this,t,e,0))!==null&&o!==void 0?o:M)===rt)return;const s=this._$AH,r=t===M&&s!==M||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==M&&(s===M||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},In=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Tt(this,t)}},Yo=He.litHtmlPolyfillSupport;Yo==null||Yo(Oe,Xe),((vi=He.litHtmlVersions)!==null&&vi!==void 0?vi:He.litHtmlVersions=[]).push("2.6.1");var Dn=(i,t,e)=>{var o,s;const r=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let n=r._$litPart$;if(n===void 0){const h=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=n=new Xe(t.insertBefore(he(),h),h,void 0,e??{})}return n._$AI(i),n},mi,gi,ie=class extends vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var i,t;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!==null&&i!==void 0||(t.renderBefore=e.firstChild),e}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Dt=Dn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!1)}render(){return rt}};ie.finalized=!0,ie._$litElement$=!0,(mi=globalThis.litElementHydrateSupport)===null||mi===void 0||mi.call(globalThis,{LitElement:ie});var Ko=globalThis.litElementPolyfillSupport;Ko==null||Ko({LitElement:ie});((gi=globalThis.litElementVersions)!==null&&gi!==void 0?gi:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var ye=Nt`
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
`,Fn=Nt`
  ${ye}

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
`,ur=Object.defineProperty,Bn=Object.defineProperties,jn=Object.getOwnPropertyDescriptor,qn=Object.getOwnPropertyDescriptors,Zo=Object.getOwnPropertySymbols,Wn=Object.prototype.hasOwnProperty,Gn=Object.prototype.propertyIsEnumerable,Xo=(i,t,e)=>t in i?ur(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,dt=(i,t)=>{for(var e in t||(t={}))Wn.call(t,e)&&Xo(i,e,t[e]);if(Zo)for(var e of Zo(t))Gn.call(t,e)&&Xo(i,e,t[e]);return i},Qe=(i,t)=>Bn(i,qn(t)),b=(i,t,e,o)=>{for(var s=o>1?void 0:o?jn(t,e):t,r=i.length-1,n;r>=0;r--)(n=i[r])&&(s=(o?n(t,e,s):n(s))||s);return o&&s&&ur(t,e,s),s};function _e(i,t){const e=dt({waitUntilFirstUpdate:!1},t);return(o,s)=>{const{update:r}=o,n=Array.isArray(i)?i:[i];o.update=function(h){n.forEach(a=>{const l=a;if(h.has(l)){const c=h.get(l),d=this[l];c!==d&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[s](c,d)}}),r.call(this,h)}}}var pr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vr=i=>(...t)=>({_$litDirective$:i,values:t}),mr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var we=i=>t=>typeof t=="function"?((e,o)=>(customElements.define(e,o),o))(i,t):((e,o)=>{const{kind:s,elements:r}=o;return{kind:s,elements:r,finisher(n){customElements.define(e,n)}}})(i,t),Yn=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Qe(dt({},t),{finisher(e){e.createProperty(t.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function w(i){return(t,e)=>e!==void 0?((o,s,r)=>{s.constructor.createProperty(r,o)})(i,t,e):Yn(i,t)}function ti(i){return w(Qe(dt({},i),{state:!0}))}var Kn=({finisher:i,descriptor:t})=>(e,o)=>{var s;if(o===void 0){const r=(s=e.originalKey)!==null&&s!==void 0?s:e.key,n=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:Qe(dt({},e),{key:r});return i!=null&&(n.finisher=function(h){i(h,r)}),n}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,o,t(o)),i==null||i(r,o)}};function ao(i,t){return Kn({descriptor:e=>{const o={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;o.get=function(){var r,n;return this[s]===void 0&&(this[s]=(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&n!==void 0?n:null),this[s]}}return o}})}var fi;((fi=window.HTMLSlotElement)===null||fi===void 0?void 0:fi.prototype.assignedElements)!=null;var ct=class extends ie{emit(i,t){const e=new CustomEvent(i,dt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}};b([w()],ct.prototype,"dir",2);b([w()],ct.prototype,"lang",2);/*! Bundled license information:

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
*/var Bi=class extends mr{constructor(i){if(super(i),this.it=M,i.type!==pr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===M||i==null)return this._t=void 0,this.it=i;if(i===rt)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this._t;this.it=i;const t=[i];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Bi.directiveName="unsafeHTML",Bi.resultType=1;var ji=class extends Bi{};ji.directiveName="unsafeSVG",ji.resultType=2;var Zn=vr(ji),bi,X=class extends ct{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),Sn(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),An(this)}getUrl(){const i=Ho(this.library);return this.name&&i?i.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var i;const t=Ho(this.library),e=this.getUrl();if(bi||(bi=new DOMParser),e)try{const o=await En(e);if(e!==this.getUrl())return;if(o.ok){const r=bi.parseFromString(o.svg,"text/html").body.querySelector("svg");r!==null?((i=t==null?void 0:t.mutator)==null||i.call(t,r),this.svg=r.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}render(){return ce` ${Zn(this.svg)} `}};X.styles=Fn;b([ti()],X.prototype,"svg",2);b([w({reflect:!0})],X.prototype,"name",2);b([w()],X.prototype,"src",2);b([w()],X.prototype,"label",2);b([w({reflect:!0})],X.prototype,"library",2);b([_e("label")],X.prototype,"handleLabelChange",1);b([_e(["name","src","library"])],X.prototype,"setIcon",1);X=b([we("sl-icon")],X);/*! Bundled license information:

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
*/function Jo(i,t){return new Promise(e=>{function o(s){s.target===i&&(i.removeEventListener(t,o),e())}i.addEventListener(t,o)})}function Qo(i,t,e){return new Promise(o=>{if((e==null?void 0:e.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=i.animate(t,Qe(dt({},e),{duration:Xn()?0:e.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})})}function Xn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ts(i){return Promise.all(i.getAnimations().map(t=>new Promise(e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",()=>o,{once:!0}),t.addEventListener("finish",()=>o,{once:!0}),t.cancel()})))}var gr=new Map,Jn=new WeakMap;function Qn(i){return i??{keyframes:[],options:{duration:0}}}function es(i,t){return t.toLowerCase()==="rtl"?{keyframes:i.rtlKeyframes||i.keyframes,options:i.options}:i}function fr(i,t){gr.set(i,Qn(t))}function is(i,t,e){const o=Jn.get(i);if(o!=null&&o[t])return es(o[t],e.dir);const s=gr.get(t);return s?es(s,e.dir):{keyframes:[],options:{duration:0}}}var qi=new Set,ta=new MutationObserver(_r),ft=new Map,br=document.documentElement.dir||"ltr",yr=document.documentElement.lang||navigator.language,oe;ta.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function ea(...i){i.map(t=>{const e=t.$code.toLowerCase();ft.has(e)?ft.set(e,Object.assign(Object.assign({},ft.get(e)),t)):ft.set(e,t),oe||(oe=t)}),_r()}function _r(){br=document.documentElement.dir||"ltr",yr=document.documentElement.lang||navigator.language,[...qi.keys()].map(i=>{typeof i.requestUpdate=="function"&&i.requestUpdate()})}var ia=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){qi.add(this.host)}hostDisconnected(){qi.delete(this.host)}dir(){return`${this.host.dir||br}`.toLowerCase()}lang(){return`${this.host.lang||yr}`.toLowerCase()}term(i,...t){var e,o;const s=new Intl.Locale(this.lang()),r=s==null?void 0:s.language.toLowerCase(),n=(o=(e=s==null?void 0:s.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",h=ft.get(`${r}-${n}`),a=ft.get(r);let l;if(h&&h[i])l=h[i];else if(a&&a[i])l=a[i];else if(oe&&oe[i])l=oe[i];else return console.error(`No translation found for: ${String(i)}`),String(i);return typeof l=="function"?l(...t):l}date(i,t){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),t).format(i)}number(i,t){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),t).format(i)}relativeTime(i,t,e){return new Intl.RelativeTimeFormat(this.lang(),e).format(i,t)}},lo=class extends ia{},oa={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:i=>i===0?"No options selected":i===1?"1 option selected":`${i} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};ea(oa);var wr=class{constructor(i,...t){this.slotNames=[],(this.host=i).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent.trim()!=="")return!0;if(i.nodeType===i.ELEMENT_NODE){const t=i;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(i){return this.host.querySelector(`:scope > [slot="${i}"]`)!==null}test(i){return i==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(i)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(i){const t=i.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},sa=Nt`
  ${ye}

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
`,ho=vr(class extends mr{constructor(i){var t;if(super(i),i.type!==pr.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,o;if(this.nt===void 0){this.nt=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.st)===null||e===void 0)&&e.has(r))&&this.nt.add(r);return this.render(t)}const s=i.element.classList;this.nt.forEach(r=>{r in t||(s.remove(r),this.nt.delete(r))});for(const r in t){const n=!!t[r];n===this.nt.has(r)||!((o=this.st)===null||o===void 0)&&o.has(r)||(n?(s.add(r),this.nt.add(r)):(s.remove(r),this.nt.delete(r)))}return rt}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var ut=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),J=class extends ct{constructor(){super(...arguments),this.hasSlotController=new wr(this,"icon","suffix"),this.localize=new lo(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ts(this.base),this.base.hidden=!1;const{keyframes:i,options:t}=is(this,"alert.show",{dir:this.localize.dir()});await Qo(this.base,i,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await ts(this.base);const{keyframes:i,options:t}=is(this,"alert.hide",{dir:this.localize.dir()});await Qo(this.base,i,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Jo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Jo(this,"sl-after-hide")}async toast(){return new Promise(i=>{ut.parentElement===null&&document.body.append(ut),ut.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ut.removeChild(this),i(),ut.querySelector("sl-alert")===null&&ut.remove()},{once:!0})})}render(){return ce`
      <div
        part="base"
        class=${ho({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?ce`
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
    `}};J.styles=sa;b([ao('[part~="base"]')],J.prototype,"base",2);b([w({type:Boolean,reflect:!0})],J.prototype,"open",2);b([w({type:Boolean,reflect:!0})],J.prototype,"closable",2);b([w({reflect:!0})],J.prototype,"variant",2);b([w({type:Number})],J.prototype,"duration",2);b([_e("open",{waitUntilFirstUpdate:!0})],J.prototype,"handleOpenChange",1);b([_e("duration")],J.prototype,"handleDurationChange",1);J=b([we("sl-alert")],J);fr("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});fr("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var ra=Nt`
  ${ye}

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
`,$r=Symbol.for(""),na=i=>{if((i==null?void 0:i.r)===$r)return i==null?void 0:i._$litStatic$},Ne=(i,...t)=>({_$litStatic$:t.reduce((e,o,s)=>e+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+i[s+1],i[0]),r:$r}),os=new Map,aa=i=>(t,...e)=>{const o=e.length;let s,r;const n=[],h=[];let a,l=0,c=!1;for(;l<o;){for(a=t[l];l<o&&(r=e[l],(s=na(r))!==void 0);)a+=s+t[++l],c=!0;h.push(r),n.push(a),l++}if(l===o&&n.push(t[o]),c){const d=n.join("$$lit$$");(t=os.get(d))===void 0&&(n.raw=n,os.set(d,t=n)),e=h}return i(t,...e)},ke=aa(ce);/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var U=i=>i??M;/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var G=class extends ct{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(i){this.disabled&&(i.preventDefault(),i.stopPropagation())}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}render(){const i=!!this.href,t=i?Ne`a`:Ne`button`;return ke`
      <${t}
        part="base"
        class=${ho({"icon-button":!0,"icon-button--disabled":!i&&this.disabled,"icon-button--focused":this.hasFocus})}
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
    `}};G.styles=ra;b([ao(".icon-button")],G.prototype,"button",2);b([ti()],G.prototype,"hasFocus",2);b([w()],G.prototype,"name",2);b([w()],G.prototype,"library",2);b([w()],G.prototype,"src",2);b([w()],G.prototype,"href",2);b([w()],G.prototype,"target",2);b([w()],G.prototype,"download",2);b([w()],G.prototype,"label",2);b([w({type:Boolean,reflect:!0})],G.prototype,"disabled",2);G=b([we("sl-icon-button")],G);var Yt=new WeakMap,ss=new WeakMap,Kt=new WeakMap,la=class{constructor(i,t){(this.host=i).addController(this),this.options=dt({form:e=>{if(e.hasAttribute("form")&&e.getAttribute("form")!==""){const o=e.getRootNode(),s=e.getAttribute("form");if(s)return o.getElementById(s)}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var o;return(o=e.disabled)!=null?o:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,setValue:(e,o)=>e.value=o},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const i=this.options.form(this.host);i&&this.attachForm(i),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const i=this.options.form(this.host);i||this.detachForm(),i&&this.form!==i&&(this.detachForm(),this.attachForm(i)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(i){i?(this.form=i,Yt.has(this.form)?Yt.get(this.form).add(this.host):Yt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Kt.has(this.form)||(Kt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var i;this.form&&((i=Yt.get(this.form))==null||i.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Kt.has(this.form)&&(this.form.reportValidity=Kt.get(this.form),Kt.delete(this.form))),this.form=void 0}handleFormData(i){const t=this.options.disabled(this.host),e=this.options.name(this.host),o=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";!t&&!s&&typeof e=="string"&&e.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(r=>{i.formData.append(e,r.toString())}):i.formData.append(e,o.toString()))}handleFormSubmit(i){var t;const e=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=Yt.get(this.form))==null||t.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!e&&!o(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const t of i)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(i,t){ss.set(i,t),i.requestUpdate()}doAction(i,t){if(this.form){const e=document.createElement("button");e.type=i,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&e.setAttribute(o,t.getAttribute(o))})),this.form.append(e),e.click(),e.remove()}}reset(i){this.doAction("reset",i)}submit(i){this.doAction("submit",i)}setValidity(i){var t;const e=this.host,o=Boolean(ss.get(e)),s=Boolean(e.required);(t=this.form)!=null&&t.noValidate?(e.removeAttribute("data-required"),e.removeAttribute("data-optional"),e.removeAttribute("data-invalid"),e.removeAttribute("data-valid"),e.removeAttribute("data-user-invalid"),e.removeAttribute("data-user-valid")):(e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!i),e.toggleAttribute("data-valid",i),e.toggleAttribute("data-user-invalid",!i&&o),e.toggleAttribute("data-user-valid",i&&o))}updateValidity(){const i=this.host;this.setValidity(i.checkValidity())}},ha=Nt`
  ${ye}

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
`,S=class extends ct{constructor(){super(...arguments),this.formControlController=new la(this,{form:i=>{if(i.hasAttribute("form")){const t=i.getRootNode(),e=i.getAttribute("form");return t.getElementById(e)}return i.closest("form")}}),this.hasSlotController=new wr(this,"[default]","prefix","suffix"),this.localize=new lo(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(i){if(this.disabled||this.loading){i.preventDefault(),i.stopPropagation();return}this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(i){this.isButton()&&(this.button.setCustomValidity(i),this.formControlController.updateValidity())}render(){const i=this.isLink(),t=i?Ne`a`:Ne`button`;return ke`
      <${t}
        part="base"
        class=${ho({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        ${this.caret?ke` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ke`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};S.styles=ha;b([ao(".button")],S.prototype,"button",2);b([ti()],S.prototype,"hasFocus",2);b([ti()],S.prototype,"invalid",2);b([w()],S.prototype,"title",2);b([w({reflect:!0})],S.prototype,"variant",2);b([w({reflect:!0})],S.prototype,"size",2);b([w({type:Boolean,reflect:!0})],S.prototype,"caret",2);b([w({type:Boolean,reflect:!0})],S.prototype,"disabled",2);b([w({type:Boolean,reflect:!0})],S.prototype,"loading",2);b([w({type:Boolean,reflect:!0})],S.prototype,"outline",2);b([w({type:Boolean,reflect:!0})],S.prototype,"pill",2);b([w({type:Boolean,reflect:!0})],S.prototype,"circle",2);b([w()],S.prototype,"type",2);b([w()],S.prototype,"name",2);b([w()],S.prototype,"value",2);b([w()],S.prototype,"href",2);b([w()],S.prototype,"target",2);b([w()],S.prototype,"download",2);b([w()],S.prototype,"form",2);b([w({attribute:"formaction"})],S.prototype,"formAction",2);b([w({attribute:"formenctype"})],S.prototype,"formEnctype",2);b([w({attribute:"formmethod"})],S.prototype,"formMethod",2);b([w({attribute:"formnovalidate",type:Boolean})],S.prototype,"formNoValidate",2);b([w({attribute:"formtarget"})],S.prototype,"formTarget",2);b([_e("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);S=b([we("sl-button")],S);var da=Nt`
  ${ye}

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
`,Wi=class extends ct{constructor(){super(...arguments),this.localize=new lo(this)}render(){return ce`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Wi.styles=da;Wi=b([we("sl-spinner")],Wi);const K={Horizontal:"horizontal",Vertical:"vertical"},R={Submarine:"submarine",Carrier:"carrier",Rescue:"rescue",Battleship:"battleship",Destroyer:"destroyer"};function ue(i){switch(i){case R.Submarine:return 3;case R.Carrier:return 5;case R.Battleship:return 4;case R.Destroyer:return 3;case R.Rescue:return 2;default:return 0}}class co extends W{constructor(){super();m(this,"_image");this._x=0,this._y=0,this._orientation=K.Horizontal,this._type=R.Submarine,this._size=0,this._destroyed=!1,this._hitCount=0}static get properties(){return{type:{type:String,reflectToAttribute:!0,attribute:!0},orientation:{type:String,reflectToAttribute:!0,attribute:!0},x:{type:Number,reflectToAttribute:!0,attribute:!0},y:{type:Number,reflectToAttribute:!0,attribute:!0},size:{type:Number},hitCount:{type:Number},destroyed:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set type(e){let o=this._type;this._type=e,this.requestUpdate("type",o),this.size=ue(this._type),this.shadowRoot&&this.shadowRoot.host.style.setProperty("--size",this._size)}get type(){return this._type}set destroyed(e){let o=this._destroyed;this._destroyed=e,this.requestUpdate("destroyed",o)}get destroyed(){return this._destroyed}set hitCount(e){let o=this._hitCount;this._hitCount=e,this.requestUpdate("hitCount",o)}get hitCount(){return this._hitCount}set orientation(e){let o=this._orientation;this._orientation=e,this.requestUpdate("orientation",o),this.shadowRoot&&(e==K.Horizontal?(this.shadowRoot.host.classList.add("horizontal"),this.shadowRoot.host.classList.remove("vertical")):(this.shadowRoot.host.classList.remove("horizontal"),this.shadowRoot.host.classList.add("vertical")))}get orientation(){return this._orientation}set x(e){let o=this._x;this._x=e,this.requestUpdate("x",o),this.shadowRoot&&this.shadowRoot.host.style.setProperty("--x",this.x+1)}get x(){return this._x}set y(e){let o=this._y;this._y=e,this.requestUpdate("y",o),this.shadowRoot&&this.shadowRoot.host.style.setProperty("--y",e+1)}get y(){return this._y}set size(e){let o=this._size;this._size=e,this.requestUpdate("size",o),this.shadowRoot&&this.shadowRoot.host.style.setProperty("--size",this._size)}get size(){return this._size}firstUpdated(){this._image=this.shadowRoot.querySelector("#image"),this.size=ue(this._type),this.y=this._y,this.x=this._x,this.orientation=this._orientation}reset(){Array.from({length:this.size}).map((e,o)=>{this.renderRoot.querySelector("#hit-"+o).classList.remove("hit")}),this.hitCount=0,this.destroyed=!1}enemyShootAt(e,o){let s;this.orientation===K.Horizontal?s=o-this.y:s=e-this.x,this.renderRoot.querySelector("#hit-"+s).classList.add("hit"),this.hitCount++,this.hitCount===this.size?this.shipDestroyed():this.shipHit()}shipDestroyed(){this.destroyed=!0;let e=new CustomEvent("ship-destroyed",{detail:{message:"Ship Destroyed",type:this.type},bubbles:!0,composed:!0});this.dispatchEvent(e)}shipHit(){let e=new CustomEvent("ship-hit",{detail:{message:"Ship Hit",type:this.type},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return O`
      <div class="hit-zone ${this.orientation===K.Horizontal?"hit-zone-horizontal":"hit-zone-vertical"}">
        ${Array.from({length:this.size}).map((e,o)=>O`
            <div class="cell"><div class="hit-area" id="hit-${o}"></div></div>
        `)}
      </div>
      <picture>
          <source srcset="images/${this.type}-top-${this.orientation}.webp" type="image/webp">
          <img id="image" src="images/${this.type}-top-${this.orientation}.png" alt="${this.type}"/>
      </picture>
    `}}m(co,"styles",Y`
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
  `);customElements.define("ship-element",co);class xr extends W{static get properties(){return{hit:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set hit(t){let e=this._hit;this._hit=t,this.requestUpdate("hit",e)}get hit(){return this._hit}constructor(){super(),this._hit=!1}render(){return O`
      <div class="cell">
        <slot></slot>
        <div class="hit-water-area ${this.hit?"visible":""}"></div>
      </div>`}}m(xr,"styles",Y`
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
  `);customElements.define("empty-cell",xr);class uo extends W{constructor(){super();m(this,"_shipPlaced",[]);this._grid=[]}static get properties(){return{grid:{type:Array,hasChanged(){return!0}}}}set grid(e){let o=this._grid;this._grid=e,this.requestUpdate("grid",o)}get grid(){return this._grid}getRandomCoordinate(){return Math.floor(Math.random()*(10-1+1)+1)}getRandomOrientation(){return Math.random()>=.5?K.Vertical:K.Horizontal}firstUpdated(){this.initGrid()}initGrid(){this.grid=[[{text:"/"},{text:"1"},{text:"2"},{text:"3"},{text:"4"},{text:"5"},{text:"6"},{text:"7"},{text:"8"},{text:"9"},{text:"10"}],[{text:"A"},"","","","","","","","","",""],[{text:"B"},"","","","","","","","","",""],[{text:"C"},"","","","","","","","","",""],[{text:"D"},"","","","","","","","","",""],[{text:"E"},"","","","","","","","","",""],[{text:"F"},"","","","","","","","","",""],[{text:"G"},"","","","","","","","","",""],[{text:"H"},"","","","","","","","","",""],[{text:"I"},"","","","","","","","","",""],[{text:"J"},"","","","","","","","","",""]];for(let e=1;e<=10;++e)for(let o=1;o<=10;o++)this.grid[e][o]={text:"",shot:!1}}restart(){this.initGrid(),this._shipPlaced=[],this._submarine.reset(),this._destroyer.reset(),this._carrier.reset(),this._battleship.reset(),this._rescue.reset(),this.generateRandomGrid()}generateRandomGrid(){Object.values(R).map(e=>{this.placeShipRandomly(e)})}placeShipRandomly(e){const o=this.getRandomCoordinate(),s=this.getRandomCoordinate(),r=this.getRandomOrientation(),n=ue(e);if(r===K.Horizontal){if(s+n>10)return this.placeShipRandomly(e)}else if(o+n>10)return this.placeShipRandomly(e);if(r===K.Horizontal){for(let h=s;h<=s+n;++h)if(this.grid[o][h]!=null&&this.isShip(this.grid[o][h]))return this.placeShipRandomly(e)}else for(let h=o;h<=o+n;++h)if(this.grid[h][s]!=null&&this.isShip(this.grid[h][s]))return this.placeShipRandomly(e);this.addShip(e,o,s,r,n)}addShip(e,o,s,r,n){if(o===0||s===0){console.error("Adding ship in the wrong column/row.");return}const h={type:e,orientation:r,x:o,y:s,shot:!1};if(this.grid[o][s]=h,r===K.Horizontal)for(let a=s;a<s+n;++a)this.grid[o][a]={type:e,orientation:r,x:o,y:a,shot:!1};else if(r===K.Vertical)for(let a=o;a<o+n;++a)this.grid[a][s]={type:e,orientation:r,x:a,y:s,shot:!1}}updateGrid(){this._shipPlaced=[],this.requestUpdate("grid",this.grid)}isShip(e){return e.type===R.Submarine||e.type===R.Destroyer||e.type===R.Battleship||e.type===R.Carrier||e.type===R.Rescue}isShipPlaced(e){return this._shipPlaced.includes(e)}isGameOver(){return this._submarine.destroyed&&this._destroyer.destroyed&&this._carrier.destroyed&&this._battleship.destroyed&&this._rescue.destroyed}dispatchGameOverIfNecessary(){if(this.isGameOver()){let e=new CustomEvent("game-over",{detail:{message:"Game Over"},bubbles:!0,composed:!0});this.dispatchEvent(e)}}playerPlayed(e,o){let s=new CustomEvent("player-played",{detail:{message:"player played.",x:e,y:o},bubbles:!0,composed:!0});this.dispatchEvent(s),this.dispatchGameOverIfNecessary()}playerHitShip(e){let o=new CustomEvent("player-hit",{detail:{message:"player played.",type:e},bubbles:!0,composed:!0});this.dispatchEvent(o)}playerSankShip(e){let o=new CustomEvent("player-sank",{detail:{message:"player played.",type:e},bubbles:!0,composed:!0});this.dispatchEvent(o),this.dispatchGameOverIfNecessary()}update(){super.update(),this._submarine=this.shadowRoot.querySelector("#submarine"),this._destroyer=this.shadowRoot.querySelector("#destroyer"),this._carrier=this.shadowRoot.querySelector("#carrier"),this._battleship=this.shadowRoot.querySelector("#battleship"),this._rescue=this.shadowRoot.querySelector("#rescue")}}m(uo,"styles",Y`
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
  `);const x={Top:"Top",Bottom:"Bottom",Left:"Left",Right:"Right"},We=class extends uo{constructor(){super();m(this,"_pendingSanks",[]);m(this,"_boatsToSink",[]);this._previousShot={x:0,y:0}}firstUpdated(){super.firstUpdated(),this.generateRandomGrid(),this._boatsToSink=[R.Carrier,R.Battleship,R.Submarine,R.Destroyer,R.Rescue]}restart(){super.restart(),this._previousShot={x:0,y:0},this._pendingSanks=[],this._boatsToSink=[R.Carrier,R.Battleship,R.Submarine,R.Destroyer,R.Rescue]}isCellAPreviouslyMissedShot(e){return e.shot&&e.type===void 0}isCellABoatPreviouslyShot(e){return e.shot&&e.type!=null&&e.type===this.grid[this._previousShot.x][this._previousShot.y].type}biggestBoatLeft(){return ue(this._boatsToSink[0])}smallestBoatLeft(){return ue(this._boatsToSink[this._boatsToSink.length-1])}boatsLeftFitAround(e,o){let s=this.biggestBoatLeft();const r={x:e,y:o},n=this.walkGridAndCountEmptySpaces(x.Left,r,s-1,0),h=this.walkGridAndCountEmptySpaces(x.Right,r,s-1,0),a=this.walkGridAndCountEmptySpaces(x.Top,r,s-1,0),l=this.walkGridAndCountEmptySpaces(x.Bottom,r,s-1,0);return n+1===s||h+1===s||a+1===s||l+1===s||n+h+1>=s||a+l+1>=s}walkGridAndCountEmptySpaces(e,o,s,r){if(this.isCellAtTheEge(e,o))return r;const n=this.getNeighborCell(e,o);return this.grid[n.x][n.y].shot===!0||(r++,r===s)?r:this.walkGridAndCountEmptySpaces(e,n,s,r)}isCellAtTheEge(e,o){return e===x.Left&&o.y-1===0||e===x.Right&&o.y+1===11||e===x.Top&&o.x-1===0||e===x.Bottom&&o.x+1===11}getNeighborCell(e,o){let s=o;switch(e){case x.Left:s={x:o.x,y:Math.max(o.y-1,1)};break;case x.Right:s={x:o.x,y:Math.min(o.y+1,10)};break;case x.Top:s={x:Math.max(o.x-1,1),y:o.y};break;case x.Bottom:s={x:Math.min(o.x+1,10),y:o.y};break;default:console.error("wrong direction");return}return s}walkGridToFindEmptyCell(e,o){if(this.isCellAtTheEge(e,o))return null;const s=this.getNeighborCell(e,o);return this.isCellAPreviouslyMissedShot(this.grid[s.x][s.y])?null:this.isCellABoatPreviouslyShot(this.grid[s.x][s.y])?this.walkGridToFindEmptyCell(e,s):this.grid[s.x][s.y].shot===!0?null:s}walkGridToFindCandidateToShoot(e,o,s,r){if(this.isCellAtTheEge(e,o))return r;const n=this.getNeighborCell(e,o);return this.isCellAPreviouslyMissedShot(this.grid[n.x][n.y])?r:this.isCellABoatPreviouslyShot(this.grid[n.x][n.y])?this.walkGridToFindCandidateToShoot(e,n,s,++r):this.grid[n.x][n.y].shot===!0||(r++,r>=s)?r:this.walkGridToFindCandidateToShoot(e,n,s,r)}isBoatHorizontal(e){let o=null;if(!this.isCellAtTheEge(x.Left,e)){let s=this.getNeighborCell(x.Left,e);this.isCellABoatPreviouslyShot(this.grid[s.x][s.y])&&(o=!0)}if(!this.isCellAtTheEge(x.Right,e)){let s=this.getNeighborCell(x.Right,e);this.isCellABoatPreviouslyShot(this.grid[s.x][s.y])&&(o=!0)}return o}isBoatVertical(e){let o=null;if(!this.isCellAtTheEge(x.Top,e)){let s=this.getNeighborCell(x.Top,e);this.isCellABoatPreviouslyShot(this.grid[s.x][s.y])&&(o=!0)}if(!this.isCellAtTheEge(x.Bottom,e)){let s=this.getNeighborCell(x.Bottom,e);this.isCellABoatPreviouslyShot(this.grid[s.x][s.y])&&(o=!0)}return o}enemyShoot(){if(this.isGameOver())return;let e,o;if(this._previousShot.x!=0&&this._previousShot.y!=0){let s,r,n,h,a=!1,l=!1,c=!1,d=!1,u,p=this.smallestBoatLeft();const f=this.walkGridToFindCandidateToShoot(x.Left,this._previousShot,p-1,0),g=this.walkGridToFindCandidateToShoot(x.Right,this._previousShot,p-1,0),v=this.walkGridToFindCandidateToShoot(x.Top,this._previousShot,p-1,0),y=this.walkGridToFindCandidateToShoot(x.Bottom,this._previousShot,p-1,0);let A=this.isBoatVertical(this._previousShot),$=this.isBoatHorizontal(this._previousShot);f>0&&($===null||$)&&(f+1===p||g+f+1>=p)&&(s=this.walkGridToFindEmptyCell(x.Left,this._previousShot),s&&(a=!0)),g>0&&($===null||$)&&(g+1===p||g+f+1>=p)&&(r=this.walkGridToFindEmptyCell(x.Right,this._previousShot),r&&(l=!0)),v>0&&(A===null||A)&&(v+1===p||v+y+1>=p)&&(n=this.walkGridToFindEmptyCell(x.Top,this._previousShot),n&&(c=!0)),y>0&&(A===null||A)&&(y+1===p||v+y+1>=p)&&(h=this.walkGridToFindEmptyCell(x.Bottom,this._previousShot),h&&(d=!0)),A===null&&$===null?u=Math.random()>=.5:$?u=!1:A&&(u=!0),u&&!d&&!c&&(u=!1),!u&&!a&&!l&&(u=!0),u&&(c||d)?(c&&d?Math.random()>=.5?e=n.x:e=h.x:c?e=n.x:d&&(e=h.x),o=this._previousShot.y):(a&&l?Math.random()>=.5?o=s.y:o=r.y:l?o=r.y:a&&(o=s.y),e=this._previousShot.x)}else for(e=this.getRandomCoordinate(),o=this.getRandomCoordinate();this.grid[e][o].shot===!0||this.grid[e][o].shot===!1&&!this.boatsLeftFitAround(e,o);)e=this.getRandomCoordinate(),o=this.getRandomCoordinate();if(this.isShip(this.grid[e][o])){const s=this.shadowRoot.querySelector("#"+this.grid[e][o].type);s.enemyShootAt(e,o),this.grid[e][o].shot=!0,this.grid[e][o].type!=this._previousShot.type&&this._previousShot.type!=null&&this._pendingSanks.push(Object.create(this._previousShot)),this._previousShot={x:e,y:o,type:s.type},s.destroyed&&(this._pendingSanks.length>0?this._previousShot=this._pendingSanks.pop():this._previousShot={x:0,y:0}),setTimeout(()=>this.enemyShoot(),2e3);return}this.grid[e][o].shot=!0,this.updateGrid(),this.playerPlayed(e,o)}shipDestroyed(e){this._boatsToSink=this._boatsToSink.filter(o=>o!=e.detail.type),this.playerSankShip(e.detail.type)}shipHit(e){this.playerHitShip(e.detail.type)}render(){return O`
      <div class="title">Your fleet</div>
      <div class="grid">
          ${this.grid.map((e,o)=>e.map((s,r)=>{if(this.isShip(this.grid[o][r])){if(!this.isShipPlaced(s.type))return this._shipPlaced.push(s.type),O`
                      <ship-element id="${s.type}" x="${s.x}" y="${s.y}"
                        type="${s.type}" orientation="${s.orientation}" @ship-hit="${this.shipHit}"
                        @ship-destroyed="${this.shipDestroyed}">
                      </ship-element>`}else return O`<empty-cell ?hit="${s.shot}">${s.text}</empty-cell>`}))}
      </div>
    `}};let ze=We;m(ze,"styles",[xe(We,We,"styles"),Y`
    :host {
      pointer-events:none;
    }
  `]);customElements.define("player-grid",ze);const Ge=class extends co{constructor(){super();m(this,"_image")}firstUpdated(){super.firstUpdated(),this._image=this.shadowRoot.querySelector("#image")}reset(){Array.from({length:this.size}).map((e,o)=>{const s=this.shadowRoot.querySelector("#hit-"+o);s.style.visibility="hidden"}),this.hitCount=0,this._image.style.display="none"}shootAt(e){let o=this.shadowRoot.querySelector("#hit-"+e);o.style.visibility==="visible"&&o.style.visibility!=""||(this.hitCount=this.hitCount+1,o.style.visibility="visible",this.hitCount===this.size?(this._image.style.display="inline",this.shipDestroyed()):this.shipHit())}render(){return O`
      <div class="hit-zone ${this.orientation===K.Horizontal?"hit-zone-horizontal":"hit-zone-vertical"}">
        ${Array.from({length:this.size}).map((e,o)=>O`
            <div class="cell" @click="${()=>this.shootAt(o)}"><div class="hit-area" id="hit-${o}"></div></div>
        `)}
      </div>
      <picture>
          <source srcset="images/${this.type}-top-${this.orientation}.webp" type="image/webp">
          <img id="image" src="images/${this.type}-top-${this.orientation}.png" alt="${this.type}"/>
      </picture>
    `}};let Te=Ge;m(Te,"styles",[xe(Ge,Ge,"styles"),Y`
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
`]);customElements.define("enemy-ship",Te);const Ye=class extends uo{firstUpdated(){super.firstUpdated(),this.generateRandomGrid()}constructor(){super()}fireAt(t,e){let o=this.grid[t][e];if(!(this.isShip(o)||o.text!="")){if(o.shot===!0){console.log("You shot there already.");return}o.shot=!0,this.updateGrid(),this.playerPlayed(t,e)}}shipDestroyed(t){this.playerSankShip(t.detail.type),this.dispatchGameOverIfNecessary()}shipHit(t){this.playerHitShip(t.detail.type)}render(){return O`
      <div class="title">Enemy's fleet</div>
      <div class="grid">
          ${this.grid.map((t,e)=>t.map((o,s)=>{if(this.isShip(this.grid[e][s])){if(!this.isShipPlaced(o.type))return this._shipPlaced.push(o.type),O`
                      <enemy-ship id="${o.type}" x="${o.x}" y="${o.y}"
                        type="${o.type}" orientation="${o.orientation}" @ship-destroyed="${this.shipDestroyed}"
                        @ship-hit="${this.shipHit}">
                      </enemy-ship>`}else return O`<empty-cell ?hit="${o.shot}" @click="${()=>this.fireAt(e,s)}">${o.text}</empty-cell>`}))}
      </div>
    `}};let Re=Ye;m(Re,"styles",[xe(Ye,Ye,"styles"),Y`
    .cell {
      cursor:pointer;
    }
  `]);customElements.define("enemy-grid",Re);const ca=(i,...t)=>{const e=be(i[0],"how-to-screen");return Y([e],...t)};class Sr extends W{constructor(){super()}connectedCallback(){super.connectedCallback(),Ot(this)}close(){let t=new CustomEvent("howto-closed",{bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return O`
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
    `}}m(Sr,"styles",ca`
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
      height: 100%;
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
        width: 100vw;
        height: 94vh;
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
  `);customElements.define("how-to-screen",Sr);const ua=(i,...t)=>{const e=be(i[0],"info-box");return Y([e],...t)};class Ar extends W{constructor(){super()}render(){return O`
      <div class="content">
        <svg  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 132 136">
          <path class="path" d="M66.1 1.5C30.4 1.5 1.5 22.9 1.5 46c0 18.1 17.9 33.5 42.8 39.3 1.5 14.8-1.3 39-8.5 48.1 10.8-12.5 22.4-33.6 26.6-45.7 1.2 0 2.5.1 3.7.1 35.7 0 64.6-18.7 64.6-41.8S101.8 1.5 66.1 1.5zM35.8 133.4c-.3.4-.7.8-1 1.1.4-.3.7-.7 1-1.1z"/>
        </svg>
        <div class="label">
          <slot name="text"></slot>
        </div>
      </div>
    `}}m(Ar,"styles",Y`
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
  `);customElements.define("speech-bubble",Ar);class Cr extends W{constructor(){super()}connectedCallback(){super.connectedCallback(),Ot(this)}render(){return O`
      <div class="content">
        <speech-bubble class="bubble">
            <slot name="label" slot="text"></slot>
        </speech-bubble>
        <picture class="picture">
          <source srcset="images/captain.webp" type="image/webp">
          <img class="captain" src="images/captain.png" alt="captain face"/>
        </picture>
      </div>
    `}}m(Cr,"styles",ua`
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
  `);customElements.define("info-box",Cr);const pa=(i,...t)=>{const e=be(i[0],"dialog-box");return Y([e],...t)};class Er extends W{constructor(){super()}connectedCallback(){super.connectedCallback(),Ot(this)}firstUpdated(){this._label=this.shadowRoot.querySelector(".label")}showMessage(t){this._label.innerHTML=t,this.open()}close(){this.shadowRoot.host.style.visibility="hidden"}open(){this.shadowRoot.host.style.visibility="visible"}render(){return O`
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
    `}}m(Er,"styles",pa`
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

  `);customElements.define("dialog-box",Er);const va=(i,...t)=>{const e=be(i[0],"rotate-box");return Y([e],...t)};class kr extends W{constructor(){super()}connectedCallback(){super.connectedCallback(),Ot(this)}firstUpdated(){this._text=this.shadowRoot.querySelector("#rotate-message")}setLabel(t){this._text.innerHTML=t}hide(){this.shadowRoot.host.style.visibility="hidden"}show(){this.shadowRoot.host.style.visibility=""}render(){return O`
      <div id="fullscreen-rotate">
        <info-box id="rotate-infobox">
          <div slot="label" id="rotate-message">Ahoy Captain!<br>Please rotate your device to play.</div>
        </info-box>
      </div>
    `}}m(kr,"styles",va`
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
  `);customElements.define("rotate-box",kr);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=window,po=Pe.ShadowRoot&&(Pe.ShadyCSS===void 0||Pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vo=Symbol(),rs=new WeakMap;let zr=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==vo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(po&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=rs.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&rs.set(e,t))}return t}toString(){return this.cssText}};const Tr=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new zr(e,i,vo)},ns=po?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(o=>new zr(typeof o=="string"?o:o+"",void 0,vo))(e)})(i):i;var yi;const Ie=window,as=Ie.trustedTypes,ma=as?as.emptyScript:"",ls=Ie.reactiveElementPolyfillSupport,Gi={toAttribute(i,t){switch(t){case Boolean:i=i?ma:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Rr=(i,t)=>t!==i&&(t==t||i==i),_i={attribute:!0,type:String,converter:Gi,reflect:!1,hasChanged:Rr};let mt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(i){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(i)}static get observedAttributes(){this.finalize();const i=[];return this.elementProperties.forEach((t,e)=>{const o=this._$Ep(e,t);o!==void 0&&(this._$Ev.set(o,e),i.push(o))}),i}static createProperty(i,t=_i){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(i,t),!t.noAccessor&&!this.prototype.hasOwnProperty(i)){const e=typeof i=="symbol"?Symbol():"__"+i,o=this.getPropertyDescriptor(i,e,t);o!==void 0&&Object.defineProperty(this.prototype,i,o)}}static getPropertyDescriptor(i,t,e){return{get(){return this[t]},set(o){const s=this[i];this[t]=o,this.requestUpdate(i,s,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)||_i}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const i=Object.getPrototypeOf(this);if(i.finalize(),i.h!==void 0&&(this.h=[...i.h]),this.elementProperties=new Map(i.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const t=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const o of e)t.unshift(ns(o))}else i!==void 0&&t.push(ns(i));return t}static _$Ep(i,t){const e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof i=="string"?i.toLowerCase():void 0}u(){var i;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(i=this.constructor.h)===null||i===void 0||i.forEach(t=>t(this))}addController(i){var t,e;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)===null||e===void 0||e.call(i))}removeController(i){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(i)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((i,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var i;const t=(i=this.shadowRoot)!==null&&i!==void 0?i:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{po?e.adoptedStyleSheets=o.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):o.forEach(s=>{const r=document.createElement("style"),n=Pe.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=s.cssText,e.appendChild(r)})})(t,this.constructor.elementStyles),t}connectedCallback(){var i;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$ES)===null||i===void 0||i.forEach(t=>{var e;return(e=t.hostConnected)===null||e===void 0?void 0:e.call(t)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$ES)===null||i===void 0||i.forEach(t=>{var e;return(e=t.hostDisconnected)===null||e===void 0?void 0:e.call(t)})}attributeChangedCallback(i,t,e){this._$AK(i,e)}_$EO(i,t,e=_i){var o;const s=this.constructor._$Ep(i,e);if(s!==void 0&&e.reflect===!0){const r=(((o=e.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?e.converter:Gi).toAttribute(t,e.type);this._$El=i,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(i,t){var e;const o=this.constructor,s=o._$Ev.get(i);if(s!==void 0&&this._$El!==s){const r=o.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:((e=r.converter)===null||e===void 0?void 0:e.fromAttribute)!==void 0?r.converter:Gi;this._$El=s,this[s]=n.fromAttribute(t,r.type),this._$El=null}}requestUpdate(i,t,e){let o=!0;i!==void 0&&(((e=e||this.constructor.getPropertyOptions(i)).hasChanged||Rr)(this[i],t)?(this._$AL.has(i)||this._$AL.set(i,t),e.reflect===!0&&this._$El!==i&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(i,e))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$ES)===null||i===void 0||i.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(e)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(e)}willUpdate(i){}_$AE(i){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostUpdated)===null||o===void 0?void 0:o.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(i){return!0}update(i){this._$EC!==void 0&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(i){}firstUpdated(i){}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wi;mt.finalized=!0,mt.elementProperties=new Map,mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},ls==null||ls({ReactiveElement:mt}),((yi=Ie.reactiveElementVersions)!==null&&yi!==void 0?yi:Ie.reactiveElementVersions=[]).push("1.6.1");const De=window,Rt=De.trustedTypes,hs=Rt?Rt.createPolicy("lit-html",{createHTML:i=>i}):void 0,tt=`lit$${(Math.random()+"").slice(9)}$`,Pr="?"+tt,ga=`<${Pr}>`,Pt=document,pe=(i="")=>Pt.createComment(i),ve=i=>i===null||typeof i!="object"&&typeof i!="function",ds=Array.isArray,Zt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cs=/-->/g,us=/>/g,lt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ps=/'/g,vs=/"/g,ms=/^(?:script|style|textarea|title)$/i,It=(i=>(t,...e)=>({_$litType$:i,strings:t,values:e}))(1),Mt=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),gs=new WeakMap,wt=Pt.createTreeWalker(Pt,129,null,!1);let Yi=class Mr{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let r=0,n=0;const h=t.length-1,a=this.parts,[l,c]=((d,u)=>{const p=d.length-1,f=[];let g,v=u===2?"<svg>":"",y=Zt;for(let $=0;$<p;$++){const I=d[$];let k,C,P=-1,E=0;for(;E<I.length&&(y.lastIndex=E,C=y.exec(I),C!==null);)E=y.lastIndex,y===Zt?C[1]==="!--"?y=cs:C[1]!==void 0?y=us:C[2]!==void 0?(ms.test(C[2])&&(g=RegExp("</"+C[2],"g")),y=lt):C[3]!==void 0&&(y=lt):y===lt?C[0]===">"?(y=g??Zt,P=-1):C[1]===void 0?P=-2:(P=y.lastIndex-C[2].length,k=C[1],y=C[3]===void 0?lt:C[3]==='"'?vs:ps):y===vs||y===ps?y=lt:y===cs||y===us?y=Zt:(y=lt,g=void 0);const $e=y===lt&&d[$+1].startsWith("/>")?" ":"";v+=y===Zt?I+ga:P>=0?(f.push(k),I.slice(0,P)+"$lit$"+I.slice(P)+tt+$e):I+tt+(P===-2?(f.push(void 0),$):$e)}const A=v+(d[p]||"<?>")+(u===2?"</svg>":"");if(!Array.isArray(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return[hs!==void 0?hs.createHTML(A):A,f]})(t,e);if(this.el=Mr.createElement(l,o),wt.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=wt.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(tt)){const p=c[n++];if(d.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+"$lit$").split(tt),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:r,name:g[2],strings:f,ctor:g[1]==="."?fa:g[1]==="?"?ya:g[1]==="@"?_a:ei})}else a.push({type:6,index:r})}for(const u of d)s.removeAttribute(u)}if(ms.test(s.tagName)){const d=s.textContent.split(tt),u=d.length-1;if(u>0){s.textContent=Rt?Rt.emptyScript:"";for(let p=0;p<u;p++)s.append(d[p],pe()),wt.nextNode(),a.push({type:2,index:++r});s.append(d[u],pe())}}}else if(s.nodeType===8)if(s.data===Pr)a.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(tt,d+1))!==-1;)a.push({type:7,index:r}),d+=tt.length-1}r++}}static createElement(t,e){const o=Pt.createElement("template");return o.innerHTML=t,o}};function Lt(i,t,e=i,o){var s,r,n,h;if(t===Mt)return t;let a=o!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[o]:e._$Cl;const l=ve(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,o)),o!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(t=Lt(i,a._$AS(i,t.values),a,o)),t}let mo=class Lr{constructor(t,e,o,s){var r;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Lt(this,t,e),ve(t)?t===H||t==null||t===""?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==Mt&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(o=>ds(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function")(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==H&&ve(this._$AH)?this._$AA.nextSibling.data=t:this.T(Pt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Yi.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(o);else{const n=new class{constructor(a,l){this.u=[],this._$AN=void 0,this._$AD=a,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(a){var l;const{el:{content:c},parts:d}=this._$AD,u=((l=a==null?void 0:a.creationScope)!==null&&l!==void 0?l:Pt).importNode(c,!0);wt.currentNode=u;let p=wt.nextNode(),f=0,g=0,v=d[0];for(;v!==void 0;){if(f===v.index){let y;v.type===2?y=new mo(p,p.nextSibling,this,a):v.type===1?y=new v.ctor(p,v.name,v.strings,this,a):v.type===6&&(y=new wa(p,this,a)),this.u.push(y),v=d[++g]}f!==(v==null?void 0:v.index)&&(p=wt.nextNode(),f++)}return u}p(a){let l=0;for(const c of this.u)c!==void 0&&(c.strings!==void 0?(c._$AI(a,c,l),l+=c.strings.length-2):c._$AI(a[l])),l++}}(r,this),h=n.v(this.options);n.p(o),this.T(h),this._$AH=n}}_$AC(t){let e=gs.get(t.strings);return e===void 0&&gs.set(t.strings,e=new Yi(t)),e}k(t){ds(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of t)s===e.length?e.push(o=new Lr(this.O(pe()),this.O(pe()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},ei=class{constructor(i,t,e,o,s){this.type=1,this._$AH=H,this._$AN=void 0,this.element=i,this.name=t,this._$AM=o,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(i,t=this,e,o){const s=this.strings;let r=!1;if(s===void 0)i=Lt(this,i,t,0),r=!ve(i)||i!==this._$AH&&i!==Mt,r&&(this._$AH=i);else{const n=i;let h,a;for(i=s[0],h=0;h<s.length-1;h++)a=Lt(this,n[e+h],t,h),a===Mt&&(a=this._$AH[h]),r||(r=!ve(a)||a!==this._$AH[h]),a===H?i=H:i!==H&&(i+=(a??"")+s[h+1]),this._$AH[h]=a}r&&!o&&this.j(i)}j(i){i===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},fa=class extends ei{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===H?void 0:i}};const ba=Rt?Rt.emptyScript:"";let ya=class extends ei{constructor(){super(...arguments),this.type=4}j(i){i&&i!==H?this.element.setAttribute(this.name,ba):this.element.removeAttribute(this.name)}},_a=class extends ei{constructor(i,t,e,o,s){super(i,t,e,o,s),this.type=5}_$AI(i,t=this){var e;if((i=(e=Lt(this,i,t,0))!==null&&e!==void 0?e:H)===Mt)return;const o=this._$AH,s=i===H&&o!==H||i.capture!==o.capture||i.once!==o.once||i.passive!==o.passive,r=i!==H&&(o===H||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var t,e;typeof this._$AH=="function"?this._$AH.call((e=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&e!==void 0?e:this.element,i):this._$AH.handleEvent(i)}},wa=class{constructor(i,t,e){this.element=i,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(i){Lt(this,i)}};const fs=De.litHtmlPolyfillSupport;fs==null||fs(Yi,mo),((wi=De.litHtmlVersions)!==null&&wi!==void 0?wi:De.litHtmlVersions=[]).push("2.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $i,xi;let $t=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i,t;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!==null&&i!==void 0||(t.renderBefore=e.firstChild),e}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=((e,o,s)=>{var r,n;const h=(r=s==null?void 0:s.renderBefore)!==null&&r!==void 0?r:o;let a=h._$litPart$;if(a===void 0){const l=(n=s==null?void 0:s.renderBefore)!==null&&n!==void 0?n:null;h._$litPart$=a=new mo(o.insertBefore(pe(),l),l,void 0,s??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)===null||i===void 0||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)===null||i===void 0||i.setConnected(!1)}render(){return Mt}};$t.finalized=!0,$t._$litElement$=!0,($i=globalThis.litElementHydrateSupport)===null||$i===void 0||$i.call(globalThis,{LitElement:$t});const bs=globalThis.litElementPolyfillSupport;bs==null||bs({LitElement:$t}),((xi=globalThis.litElementVersions)!==null&&xi!==void 0?xi:globalThis.litElementVersions=[]).push("3.2.2");var Si,Ai,Me=window,go=Me.ShadowRoot&&(Me.ShadyCSS===void 0||Me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fo=Symbol(),ys=new WeakMap,Ur=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==fo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(go&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=ys.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&ys.set(t,i))}return i}toString(){return this.cssText}},Ci=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new Ur(e,i,fo)},_s=go?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(o=>new Ur(typeof o=="string"?o:o+"",void 0,fo))(e)})(i):i,Fe=window,ws=Fe.trustedTypes,$a=ws?ws.emptyScript:"",$s=Fe.reactiveElementPolyfillSupport,me={toAttribute(i,t){switch(t){case Boolean:i=i?$a:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Vr=(i,t)=>t!==i&&(t==t||i==i),Ei={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:Vr},gt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(i){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(i)}static get observedAttributes(){this.finalize();const i=[];return this.elementProperties.forEach((t,e)=>{const o=this._$Ep(e,t);o!==void 0&&(this._$Ev.set(o,e),i.push(o))}),i}static createProperty(i,t=Ei){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(i,t),!t.noAccessor&&!this.prototype.hasOwnProperty(i)){const e=typeof i=="symbol"?Symbol():"__"+i,o=this.getPropertyDescriptor(i,e,t);o!==void 0&&Object.defineProperty(this.prototype,i,o)}}static getPropertyDescriptor(i,t,e){return{get(){return this[t]},set(o){const s=this[i];this[t]=o,this.requestUpdate(i,s,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)||Ei}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const i=Object.getPrototypeOf(this);if(i.finalize(),i.h!==void 0&&(this.h=[...i.h]),this.elementProperties=new Map(i.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const t=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const o of e)t.unshift(_s(o))}else i!==void 0&&t.push(_s(i));return t}static _$Ep(i,t){const e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof i=="string"?i.toLowerCase():void 0}u(){var i;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(i=this.constructor.h)===null||i===void 0||i.forEach(t=>t(this))}addController(i){var t,e;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)===null||e===void 0||e.call(i))}removeController(i){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(i)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((i,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var i;const t=(i=this.shadowRoot)!==null&&i!==void 0?i:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{go?e.adoptedStyleSheets=o.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):o.forEach(s=>{const r=document.createElement("style"),n=Me.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=s.cssText,e.appendChild(r)})})(t,this.constructor.elementStyles),t}connectedCallback(){var i;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$ES)===null||i===void 0||i.forEach(t=>{var e;return(e=t.hostConnected)===null||e===void 0?void 0:e.call(t)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$ES)===null||i===void 0||i.forEach(t=>{var e;return(e=t.hostDisconnected)===null||e===void 0?void 0:e.call(t)})}attributeChangedCallback(i,t,e){this._$AK(i,e)}_$EO(i,t,e=Ei){var o;const s=this.constructor._$Ep(i,e);if(s!==void 0&&e.reflect===!0){const r=(((o=e.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?e.converter:me).toAttribute(t,e.type);this._$El=i,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(i,t){var e;const o=this.constructor,s=o._$Ev.get(i);if(s!==void 0&&this._$El!==s){const r=o.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:((e=r.converter)===null||e===void 0?void 0:e.fromAttribute)!==void 0?r.converter:me;this._$El=s,this[s]=n.fromAttribute(t,r.type),this._$El=null}}requestUpdate(i,t,e){let o=!0;i!==void 0&&(((e=e||this.constructor.getPropertyOptions(i)).hasChanged||Vr)(this[i],t)?(this._$AL.has(i)||this._$AL.set(i,t),e.reflect===!0&&this._$El!==i&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(i,e))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$ES)===null||i===void 0||i.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(e)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(e)}willUpdate(i){}_$AE(i){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostUpdated)===null||o===void 0?void 0:o.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(i){return!0}update(i){this._$EC!==void 0&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(i){}firstUpdated(i){}};gt.finalized=!0,gt.elementProperties=new Map,gt.elementStyles=[],gt.shadowRootOptions={mode:"open"},$s==null||$s({ReactiveElement:gt}),((Si=Fe.reactiveElementVersions)!==null&&Si!==void 0?Si:Fe.reactiveElementVersions=[]).push("1.6.1");var xs,Be=window,Ut=Be.trustedTypes,Ss=Ut?Ut.createPolicy("lit-html",{createHTML:i=>i}):void 0,et=`lit$${(Math.random()+"").slice(9)}$`,Hr="?"+et,xa=`<${Hr}>`,Vt=document,ge=(i="")=>Vt.createComment(i),fe=i=>i===null||typeof i!="object"&&typeof i!="function",As=Array.isArray,Xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cs=/-->/g,Es=/>/g,ht=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ks=/'/g,zs=/"/g,Ts=/^(?:script|style|textarea|title)$/i,Rs=(xs=1,(i,...t)=>({_$litType$:xs,strings:i,values:t})),Z=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Ps=new WeakMap,xt=Vt.createTreeWalker(Vt,129,null,!1),je=class{constructor({strings:i,_$litType$:t},e){let o;this.parts=[];let s=0,r=0;const n=i.length-1,h=this.parts,[a,l]=((c,d)=>{const u=c.length-1,p=[];let f,g=d===2?"<svg>":"",v=Xt;for(let A=0;A<u;A++){const $=c[A];let I,k,C=-1,P=0;for(;P<$.length&&(v.lastIndex=P,k=v.exec($),k!==null);)P=v.lastIndex,v===Xt?k[1]==="!--"?v=Cs:k[1]!==void 0?v=Es:k[2]!==void 0?(Ts.test(k[2])&&(f=RegExp("</"+k[2],"g")),v=ht):k[3]!==void 0&&(v=ht):v===ht?k[0]===">"?(v=f??Xt,C=-1):k[1]===void 0?C=-2:(C=v.lastIndex-k[2].length,I=k[1],v=k[3]===void 0?ht:k[3]==='"'?zs:ks):v===zs||v===ks?v=ht:v===Cs||v===Es?v=Xt:(v=ht,f=void 0);const E=v===ht&&c[A+1].startsWith("/>")?" ":"";g+=v===Xt?$+xa:C>=0?(p.push(I),$.slice(0,C)+"$lit$"+$.slice(C)+et+E):$+et+(C===-2?(p.push(void 0),A):E)}const y=g+(c[u]||"<?>")+(d===2?"</svg>":"");if(!Array.isArray(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ss!==void 0?Ss.createHTML(y):y,p]})(i,t);if(this.el=je.createElement(a,e),xt.currentNode=this.el.content,t===2){const c=this.el.content,d=c.firstChild;d.remove(),c.append(...d.childNodes)}for(;(o=xt.nextNode())!==null&&h.length<n;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(et)){const u=l[r++];if(c.push(d),u!==void 0){const p=o.getAttribute(u.toLowerCase()+"$lit$").split(et),f=/([.?@])?(.*)/.exec(u);h.push({type:1,index:s,name:f[2],strings:p,ctor:f[1]==="."?Sa:f[1]==="?"?Ca:f[1]==="@"?Ea:ii})}else h.push({type:6,index:s})}for(const d of c)o.removeAttribute(d)}if(Ts.test(o.tagName)){const c=o.textContent.split(et),d=c.length-1;if(d>0){o.textContent=Ut?Ut.emptyScript:"";for(let u=0;u<d;u++)o.append(c[u],ge()),xt.nextNode(),h.push({type:2,index:++s});o.append(c[d],ge())}}}else if(o.nodeType===8)if(o.data===Hr)h.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(et,c+1))!==-1;)h.push({type:7,index:s}),c+=et.length-1}s++}}static createElement(i,t){const e=Vt.createElement("template");return e.innerHTML=i,e}};function Ht(i,t,e=i,o){var s,r,n,h;if(t===Z)return t;let a=o!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[o]:e._$Cl;const l=fe(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,o)),o!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(t=Ht(i,a._$AS(i,t.values),a,o)),t}var qe=class{constructor(i,t,e,o){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=i,this._$AB=t,this._$AM=e,this.options=o,this._$Cm=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var i,t;return(t=(i=this._$AM)===null||i===void 0?void 0:i._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let i=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&i.nodeType===11&&(i=t.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,t=this){i=Ht(this,i,t),fe(i)?i===L||i==null||i===""?(this._$AH!==L&&this._$AR(),this._$AH=L):i!==this._$AH&&i!==Z&&this.g(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):(e=>As(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function")(i)?this.k(i):this.g(i)}O(i,t=this._$AB){return this._$AA.parentNode.insertBefore(i,t)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}g(i){this._$AH!==L&&fe(this._$AH)?this._$AA.nextSibling.data=i:this.T(Vt.createTextNode(i)),this._$AH=i}$(i){var t;const{values:e,_$litType$:o}=i,s=typeof o=="number"?this._$AC(i):(o.el===void 0&&(o.el=je.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.p(e);else{const r=new class{constructor(h,a){this.u=[],this._$AN=void 0,this._$AD=h,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(h){var a;const{el:{content:l},parts:c}=this._$AD,d=((a=h==null?void 0:h.creationScope)!==null&&a!==void 0?a:Vt).importNode(l,!0);xt.currentNode=d;let u=xt.nextNode(),p=0,f=0,g=c[0];for(;g!==void 0;){if(p===g.index){let v;g.type===2?v=new qe(u,u.nextSibling,this,h):g.type===1?v=new g.ctor(u,g.name,g.strings,this,h):g.type===6&&(v=new ka(u,this,h)),this.u.push(v),g=c[++f]}p!==(g==null?void 0:g.index)&&(u=xt.nextNode(),p++)}return d}p(h){let a=0;for(const l of this.u)l!==void 0&&(l.strings!==void 0?(l._$AI(h,l,a),a+=l.strings.length-2):l._$AI(h[a])),a++}}(s,this),n=r.v(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(i){let t=Ps.get(i.strings);return t===void 0&&Ps.set(i.strings,t=new je(i)),t}k(i){As(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let e,o=0;for(const s of i)o===t.length?t.push(e=new qe(this.O(ge()),this.O(ge()),this,this.options)):e=t[o],e._$AI(s),o++;o<t.length&&(this._$AR(e&&e._$AB.nextSibling,o),t.length=o)}_$AR(i=this._$AA.nextSibling,t){var e;for((e=this._$AP)===null||e===void 0||e.call(this,!1,!0,t);i&&i!==this._$AB;){const o=i.nextSibling;i.remove(),i=o}}setConnected(i){var t;this._$AM===void 0&&(this._$Cm=i,(t=this._$AP)===null||t===void 0||t.call(this,i))}},ii=class{constructor(i,t,e,o,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=i,this.name=t,this._$AM=o,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(i,t=this,e,o){const s=this.strings;let r=!1;if(s===void 0)i=Ht(this,i,t,0),r=!fe(i)||i!==this._$AH&&i!==Z,r&&(this._$AH=i);else{const n=i;let h,a;for(i=s[0],h=0;h<s.length-1;h++)a=Ht(this,n[e+h],t,h),a===Z&&(a=this._$AH[h]),r||(r=!fe(a)||a!==this._$AH[h]),a===L?i=L:i!==L&&(i+=(a??"")+s[h+1]),this._$AH[h]=a}r&&!o&&this.j(i)}j(i){i===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},Sa=class extends ii{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===L?void 0:i}},Aa=Ut?Ut.emptyScript:"",Ca=class extends ii{constructor(){super(...arguments),this.type=4}j(i){i&&i!==L?this.element.setAttribute(this.name,Aa):this.element.removeAttribute(this.name)}},Ea=class extends ii{constructor(i,t,e,o,s){super(i,t,e,o,s),this.type=5}_$AI(i,t=this){var e;if((i=(e=Ht(this,i,t,0))!==null&&e!==void 0?e:L)===Z)return;const o=this._$AH,s=i===L&&o!==L||i.capture!==o.capture||i.once!==o.once||i.passive!==o.passive,r=i!==L&&(o===L||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var t,e;typeof this._$AH=="function"?this._$AH.call((e=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&e!==void 0?e:this.element,i):this._$AH.handleEvent(i)}},ka=class{constructor(i,t,e){this.element=i,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(i){Ht(this,i)}},Ms=Be.litHtmlPolyfillSupport;Ms==null||Ms(je,qe),((Ai=Be.litHtmlVersions)!==null&&Ai!==void 0?Ai:Be.litHtmlVersions=[]).push("2.6.1");var ki,zi,se=class extends gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var i,t;const e=super.createRenderRoot();return(i=(t=this.renderOptions).renderBefore)!==null&&i!==void 0||(t.renderBefore=e.firstChild),e}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Dt=((e,o,s)=>{var r,n;const h=(r=s==null?void 0:s.renderBefore)!==null&&r!==void 0?r:o;let a=h._$litPart$;if(a===void 0){const l=(n=s==null?void 0:s.renderBefore)!==null&&n!==void 0?n:null;h._$litPart$=a=new qe(o.insertBefore(ge(),l),l,void 0,s??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!1)}render(){return Z}};se.finalized=!0,se._$litElement$=!0,(ki=globalThis.litElementHydrateSupport)===null||ki===void 0||ki.call(globalThis,{LitElement:se});var Ls=globalThis.litElementPolyfillSupport;Ls==null||Ls({LitElement:se}),((zi=globalThis.litElementVersions)!==null&&zi!==void 0?zi:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var re,za=Ci`
  ${Ci`
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
  ${Ci`
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
`,Ki=1,Us=3,Vs=4,Or=i=>(...t)=>({_$litDirective$:i,values:t}),Nr=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,t,e){this._$Ct=i,this._$AM=t,this._$Ci=e}_$AS(i,t){return this.update(i,t)}update(i,t){return this.render(...t)}},Ta={},Ra=Or(class extends Nr{constructor(i){if(super(i),i.type!==Us&&i.type!==Ki&&i.type!==Vs)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>t.strings===void 0)(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===Z||t===L)return t;const e=i.element,o=i.name;if(i.type===Us){if(t===e[o])return Z}else if(i.type===Vs){if(!!t===e.hasAttribute(o))return Z}else if(i.type===Ki&&e.getAttribute(o)===t+"")return Z;return((s,r=Ta)=>{s._$AH=r})(i),t}}),Ir=Object.defineProperty,Pa=Object.defineProperties,Ma=Object.getOwnPropertyDescriptor,La=Object.getOwnPropertyDescriptors,Hs=Object.getOwnPropertySymbols,Ua=Object.prototype.hasOwnProperty,Va=Object.prototype.propertyIsEnumerable,Os=(i,t,e)=>t in i?Ir(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Dt=(i,t)=>{for(var e in t||(t={}))Ua.call(t,e)&&Os(i,e,t[e]);if(Hs)for(var e of Hs(t))Va.call(t,e)&&Os(i,e,t[e]);return i},bo=(i,t)=>Pa(i,La(t)),T=(i,t,e,o)=>{for(var s,r=o>1?void 0:o?Ma(t,e):t,n=i.length-1;n>=0;n--)(s=i[n])&&(r=(o?s(t,e,r):s(r))||r);return o&&r&&Ir(t,e,r),r},Jt=new WeakMap,Ns=new WeakMap,Qt=new WeakMap,Zi=new Set,Ha=new MutationObserver(Br),bt=new Map,Dr=document.documentElement.dir||"ltr",Fr=document.documentElement.lang||navigator.language;function Br(){Dr=document.documentElement.dir||"ltr",Fr=document.documentElement.lang||navigator.language,[...Zi.keys()].map(i=>{typeof i.requestUpdate=="function"&&i.requestUpdate()})}Ha.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var Oa=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){Zi.add(this.host)}hostDisconnected(){Zi.delete(this.host)}dir(){return`${this.host.dir||Dr}`.toLowerCase()}lang(){return`${this.host.lang||Fr}`.toLowerCase()}term(i,...t){var e,o;const s=new Intl.Locale(this.lang()),r=s==null?void 0:s.language.toLowerCase(),n=(o=(e=s==null?void 0:s.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",h=bt.get(`${r}-${n}`),a=bt.get(r);let l;if(h&&h[i])l=h[i];else if(a&&a[i])l=a[i];else{if(!re||!re[i])return console.error(`No translation found for: ${String(i)}`),String(i);l=re[i]}return typeof l=="function"?l(...t):l}date(i,t){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),t).format(i)}number(i,t){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),t).format(i)}relativeTime(i,t,e){return new Intl.RelativeTimeFormat(this.lang(),e).format(i,t)}},Na=class extends Oa{};(function(...i){i.map(t=>{const e=t.$code.toLowerCase();bt.has(e)?bt.set(e,Object.assign(Object.assign({},bt.get(e)),t)):bt.set(e,t),re||(re=t)}),Br()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:i=>i===0?"No options selected":i===1?"1 option selected":`${i} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var Se=i=>i??L;function Ti(i,t){const e=Dt({waitUntilFirstUpdate:!1},t);return(o,s)=>{const{update:r}=o,n=Array.isArray(i)?i:[i];o.update=function(h){n.forEach(a=>{const l=a;if(h.has(l)){const c=h.get(l),d=this[l];c!==d&&(e.waitUntilFirstUpdate&&!this.hasUpdated||this[s](c,d))}}),r.call(this,h)}}}var Is=Or(class extends Nr{constructor(i){var t;if(super(i),i.type!==Ki||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,o;if(this.nt===void 0){this.nt=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.st)===null||e===void 0)&&e.has(r))&&this.nt.add(r);return this.render(t)}const s=i.element.classList;this.nt.forEach(r=>{r in t||(s.remove(r),this.nt.delete(r))});for(const r in t){const n=!!t[r];n===this.nt.has(r)||!((o=this.st)===null||o===void 0)&&o.has(r)||(n?(s.add(r),this.nt.add(r)):(s.remove(r),this.nt.delete(r)))}return Z}}),Ia=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?bo(Dt({},t),{finisher(e){e.createProperty(t.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function F(i){return(t,e)=>e!==void 0?((o,s,r)=>{s.constructor.createProperty(r,o)})(i,t,e):Ia(i,t)}function Ds(i){return F(bo(Dt({},i),{state:!0}))}var Ri,Da=({finisher:i,descriptor:t})=>(e,o)=>{var s;if(o===void 0){const r=(s=e.originalKey)!==null&&s!==void 0?s:e.key,n=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:bo(Dt({},e),{key:r});return i!=null&&(n.finisher=function(h){i(h,r)}),n}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,o,t(o)),i==null||i(r,o)}};function Fs(i,t){return Da({descriptor:e=>{const o={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;o.get=function(){var r,n;return this[s]===void 0&&(this[s]=(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&n!==void 0?n:null),this[s]}}return o}})}(Ri=window.HTMLSlotElement)===null||Ri===void 0||Ri.prototype.assignedElements;var Xi=class extends se{emit(i,t){const e=new CustomEvent(i,Dt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}};T([F()],Xi.prototype,"dir",2),T([F()],Xi.prototype,"lang",2);/*! Bundled license information:

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
*/var Pi,z=class extends Xi{constructor(){super(...arguments),this.formControlController=new class{constructor(i,t){(this.host=i).addController(this),this.options=Dt({form:e=>{if(e.hasAttribute("form")&&e.getAttribute("form")!==""){const o=e.getRootNode(),s=e.getAttribute("form");if(s)return o.getElementById(s)}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var o;return(o=e.disabled)!=null&&o},reportValidity:e=>typeof e.reportValidity!="function"||e.reportValidity(),setValue:(e,o)=>e.value=o},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const i=this.options.form(this.host);i&&this.attachForm(i),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const i=this.options.form(this.host);i||this.detachForm(),i&&this.form!==i&&(this.detachForm(),this.attachForm(i)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(i){i?(this.form=i,Jt.has(this.form)?Jt.get(this.form).add(this.host):Jt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Qt.has(this.form)||(Qt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var i;this.form&&((i=Jt.get(this.form))==null||i.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Qt.has(this.form)&&(this.form.reportValidity=Qt.get(this.form),Qt.delete(this.form))),this.form=void 0}handleFormData(i){const t=this.options.disabled(this.host),e=this.options.name(this.host),o=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";!t&&!s&&typeof e=="string"&&e.length>0&&o!==void 0&&(Array.isArray(o)?o.forEach(r=>{i.formData.append(e,r.toString())}):i.formData.append(e,o.toString()))}handleFormSubmit(i){var t;const e=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=Jt.get(this.form))==null||t.forEach(s=>{this.setUserInteracted(s,!0)})),!this.form||this.form.noValidate||e||o(this.host)||(i.preventDefault(),i.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const t of i)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(i,t){Ns.set(i,t),i.requestUpdate()}doAction(i,t){if(this.form){const e=document.createElement("button");e.type=i,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&e.setAttribute(o,t.getAttribute(o))})),this.form.append(e),e.click(),e.remove()}}reset(i){this.doAction("reset",i)}submit(i){this.doAction("submit",i)}setValidity(i){var t;const e=this.host,o=Boolean(Ns.get(e)),s=Boolean(e.required);(t=this.form)!=null&&t.noValidate?(e.removeAttribute("data-required"),e.removeAttribute("data-optional"),e.removeAttribute("data-invalid"),e.removeAttribute("data-valid"),e.removeAttribute("data-user-invalid"),e.removeAttribute("data-user-valid")):(e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!i),e.toggleAttribute("data-valid",i),e.toggleAttribute("data-user-invalid",!i&&o),e.toggleAttribute("data-user-valid",i&&o))}updateValidity(){const i=this.host;this.setValidity(i.checkValidity())}}(this),this.hasSlotController=new class{constructor(i,...t){this.slotNames=[],(this.host=i).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent.trim()!=="")return!0;if(i.nodeType===i.ELEMENT_NODE){const t=i;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(i){return this.host.querySelector(`:scope > [slot="${i}"]`)!==null}test(i){return i==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(i)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(i){const t=i.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}}(this,"help-text","label"),this.localize=new Na(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=i=>i.toString(),this.form="",this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(i){this.input.style.setProperty("--percent",100*i+"%")}syncTooltip(i){if(this.output!==null){const t=this.input.offsetWidth,e=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),s=t*i;if(this.localize.dir()==="rtl"){const r=`${t-s}px + ${i} * ${o}`;this.output.style.translate=`calc((${r} - ${e/2}px - ${o} / 2))`}else{const r=`${s}px - ${i} * ${o}`;this.output.style.translate=`calc(${r} - ${e/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const i=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(i),this.tooltip!=="none"&&this.syncTooltip(i)}focus(i){this.input.focus(i)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(i){this.input.setCustomValidity(i),this.formControlController.updateValidity()}render(){const i=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=!!this.label||!!i,o=!!this.helpText||!!t;return Rs`
      <div
        part="form-control"
        class=${Is({"form-control":!0,"form-control--medium":!0,"form-control--has-label":e,"form-control--has-help-text":o})}
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
            class=${Is({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${Se(this.name)}
              ?disabled=${this.disabled}
              min=${Se(this.min)}
              max=${Se(this.max)}
              step=${Se(this.step)}
              .value=${Ra(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip==="none"||this.disabled?"":Rs`
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
    `}};function Bs(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=i[e];return o}z.styles=za,T([Fs(".range__control")],z.prototype,"input",2),T([Fs(".range__tooltip")],z.prototype,"output",2),T([Ds()],z.prototype,"hasFocus",2),T([Ds()],z.prototype,"hasTooltip",2),T([F()],z.prototype,"title",2),T([F()],z.prototype,"name",2),T([F({type:Number})],z.prototype,"value",2),T([F()],z.prototype,"label",2),T([F({attribute:"help-text"})],z.prototype,"helpText",2),T([F({type:Boolean,reflect:!0})],z.prototype,"disabled",2),T([F({type:Number})],z.prototype,"min",2),T([F({type:Number})],z.prototype,"max",2),T([F({type:Number})],z.prototype,"step",2),T([F()],z.prototype,"tooltip",2),T([F({attribute:!1})],z.prototype,"tooltipFormatter",2),T([F({reflect:!0})],z.prototype,"form",2),T([((i="value")=>(t,e)=>{const o=t.constructor,s=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(r,n,h){var a;const l=o.getPropertyOptions(i);if(r===(typeof l.attribute=="string"?l.attribute:i)){const c=l.converter||me,d=(typeof c=="function"?c:(a=c==null?void 0:c.fromAttribute)!=null?a:me.fromAttribute)(h,l.type);this[i]!==d&&(this[e]=d)}s.call(this,r,n,h)}})()],z.prototype,"defaultValue",2),T([Ti("value",{waitUntilFirstUpdate:!0})],z.prototype,"handleValueChange",1),T([Ti("disabled",{waitUntilFirstUpdate:!0})],z.prototype,"handleDisabledChange",1),T([Ti("hasTooltip",{waitUntilFirstUpdate:!0})],z.prototype,"syncRange",1),z=T([(Pi="sl-range",i=>typeof i=="function"?((t,e)=>(customElements.define(t,e),e))(Pi,i):((t,e)=>{const{kind:o,elements:s}=e;return{kind:o,elements:s,finisher(r){customElements.define(t,r)}}})(Pi,i))],z);var te=function(){try{window[j].updateSegments();var i=function(){if(!Mi)return Mi=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){Mi=t,window[j].dispatchEvent(new Event("change"))})}();return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},j="__foldables__",Mi=!1,yo=function(){function i(){var o=this;if(window[j]!==void 0)return window[j];var s=document.createDocumentFragment();this.addEventListener=s.addEventListener.bind(s),this.removeEventListener=s.removeEventListener.bind(s),this.dispatchEvent=function(r){if(r.type==="change"){var n="on"+r.type;return typeof o[n]=="function"&&o[n](r),s.dispatchEvent(r)}},window.addEventListener("message",function(r){r.data.action==="update"&&Object.assign(o,r.data.value)}),window.addEventListener("resize",function(){return function(r,n){var h;return function(){var a=arguments,l=this;clearTimeout(h),h=setTimeout(function(){return r.apply(l,a)},n)}}(te(),200)})}var t,e=i.prototype;return e.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var s=window.innerHeight-this.browserShellSize,r=0,n=window.innerWidth,h=s/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:r,left:0,bottom:r+h,right:n,width:n,height:h},r+=o[a].height,r+=this.foldSize;if(this.horizontalViewportSegments>1)for(var l=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,c=window.innerHeight,d=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:d,right:d+l,bottom:c,width:l,height:c},d+=o[u].width,d+=this.foldSize;window.visualViewport.segments=o},e.randomizeSegmentsConfiguration=function(o){var s=Math.random()<.5,r=Math.round(Math.random()*(o-1)+1);s?(this.verticalViewportSegments=r,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=r,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(j+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(j+"-horizontal-viewport-segments",o),te()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(j+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(j+"-vertical-viewport-segments",o),te()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(j+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(j+"-fold-size",o),te()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(j+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(j+"-browser-shell-size",o),te()}}])&&function(o,s){for(var r=0;r<s.length;r++){var n=s[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(i.prototype,t),i}();window[j]=new yo,window.visualViewport.segments===void 0&&window[j].updateSegments();var jr="-viewport-segments",Ji="(\\s*)(@media.*?\\b"+jr+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",Fa=/\((.*?)\)/gi,Ba=/@media[^\(]+/gi,ja=/(horizontal-viewport-segments:)\s?(\d)/gi,qa=/(vertical-viewport-segments:)\s?(\d)/gi,Wa=function(i){return new RegExp("env\\(\\s*"+i+"\\s*\\)","gi")};function js(i,t){var e=i.matchAll(t);return e===null?[]:Array.from(e,function(o){return o[2]})[0]}function Ga(i){var t=function(o){var s,r=new RegExp(Ji,"gi");if(typeof o.matchAll=="function")s=Array.from(o.matchAll(r));else{for(s=[];s[s.length]=r.exec(o););s.length--}return s}(i),e=[[]];return t.forEach(function(o){var s=o[1],r=o[2],n=o[3],h=o[4],a=r.match(Ba)||[],l=r.match(Fa)||[],c=js(r,qa);c===void 0&&(c=1);var d=js(r,ja);d===void 0&&(d=1),l=l.filter(function(u){return!u.includes(jr)}).join(" and "),e[c]===void 0&&(e[c]=new Array),e[c][d]=""+s+a+l+"{"+n+h+"}"}),e}var Qi=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+Qi);var qs,qr=new yo;if(!Qi){var Li=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(qs=Li,Promise.all(qs.map(function(i){return i.href?fetch(i.href).then(function(t){return t.text()}):i.textContent}))).then(function(i){var t=new DocumentFragment;i.forEach(function(e,o){for(var s,r=function(A,$){return A.replace(new RegExp(Ji,"gi"),$)}(e,""),n=Ga(e),h=Li[o].href||"inline",a=0,l=Object.entries(n);a<l.length;a++){var c=l[a],d=c[0],u=c[1];ne[d]==null&&(ne[d]=[]);for(var p=0,f=Object.entries(u);p<f.length;p++){var g=f[p];ne[d][g[0]]="/* origin: "+h+" */"+g[1]}}if(h=="inline"||(s=e,new RegExp(Ji,"gi").test(s))){var v=document.createElement("style");v.setAttribute("data-css-origin",h),v.textContent=r,t.appendChild(v)}else{var y=document.createElement("link");y.type="text/css",y.rel="stylesheet",y.href=h,t.appendChild(y)}}),Li.forEach(function(e){return e.parentElement!=null&&e.parentElement.removeChild(e)}),document.head.appendChild(t),function(e){Qi||(Ws(e),qr.addEventListener("change",function(){return Ws(e)}))}()})}var ne=[[]];function Ws(i){var t,e=qr,o=null;(t=i?ne[i.nodeName.toLowerCase()]:ne)[e.verticalViewportSegments]&&(o=t[e.verticalViewportSegments][e.horizontalViewportSegments]);var s,r=t[0][0]?t[0][0]:null;if(o){var n=window.visualViewport.segments,h=!1;n.length>1&&(h=!(n[0].height<window.innerHeight));for(var a=0,l=Object.entries(n);a<l.length;a++)for(var c=l[a],d=c[0],u=0,p=Object.entries(c[1]);u<p.length;u++){var f=p[u],g=f[0];s=f[1]+"px",o=o.replace(Wa(h?"viewport-segment-"+g+" "+d+" 0":"viewport-segment-"+g+" 0 "+d),s)}var v="__foldables_sheet__",y=function($,I){for(var k,C=function(E,$e){var D=typeof Symbol<"u"&&E[Symbol.iterator]||E["@@iterator"];if(D)return(D=D.call(E)).next.bind(D);if(Array.isArray(E)||(D=function(N,jt){if(N){if(typeof N=="string")return Bs(N,jt);var q=Object.prototype.toString.call(N).slice(8,-1);return q==="Object"&&N.constructor&&(q=N.constructor.name),q==="Map"||q==="Set"?Array.from(N):q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q)?Bs(N,jt):void 0}}(E))){D&&(E=D);var Bt=0;return function(){return Bt>=E.length?{done:!0}:{done:!1,value:E[Bt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}($.querySelectorAll("."+v));!(k=C()).done;)k.value.remove();var P=document.createElement("style");P.className=v,P.textContent=I,$===document?document.head.appendChild(P):$.appendChild(P)};if(i){var A=i.shadowRoot;"adoptedStyleSheets"in A&&A.adoptedStyleSheets.length>0?A.adoptedStyleSheets[0].replace(r+o):y(A,o)}else y(document,o)}}const Q={Foldable:"foldable",Dual:"dual"};class Ft extends $t{}m(Ft,"styles",Tr`
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
  `);customElements.define("close-icon",class extends Ft{render(){return It`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}});customElements.define("fullscreen-icon",class extends Ft{render(){return It`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}});customElements.define("splitview-icon",class extends Ft{render(){return It`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}});customElements.define("rotate-icon",class extends Ft{render(){return It`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}});customElements.define("minimize-icon",class extends Ft{render(){return It`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}});class Wr extends $t{constructor(){super();m(this,"_mini_configurator_header");m(this,"_mini_configurator");m(this,"_configurator");m(this,"_configurator_header");m(this,"_device_type_select");m(this,"_orientation_select");m(this,"_seam_slider");m(this,"_seam_container");m(this,"_preview");m(this,"_preview_container");m(this,"_device");m(this,"_frame");m(this,"_device_hinge");m(this,"_currentOrientation");m(this,"_currentDevice");m(this,"_isFullscreen",!1);m(this,"_verticalViewportSegments",1);m(this,"_horizontalViewportSegments",1);m(this,"_fold_width");m(this,"_browser_shell_size");m(this,"_x",0);m(this,"_y",0);m(this,"_offset_x",0);m(this,"_offset_y",0);m(this,"_resizeHandler");m(this,"_handleKeyUp",e=>{e.keyCode==73&&e.ctrlKey&&this._showMiniConfigurator()});m(this,"_startDragMiniConfigurator",async e=>{this._startDrag(e),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove});m(this,"_startDragConfigurator",async e=>{this._startDrag(e),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove});m(this,"_startDrag",async e=>{this._isFullscreen||(this._moved=!1,this._x=e.clientX-this._offset_x,this._y=e.clientY-this._offset_y,this._pointerId=e.pointerId,e.preventDefault())});m(this,"_miniConfiguratorMove",async e=>{this._pointerMove(e),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}});m(this,"_pointerMove",async e=>{if(e.clientY<0||e.clientX<0||e.clientX>window.innerWidth||e.clientY>window.innerHeight)return;let o=e.clientX-this._x,s=e.clientY-this._y;const r=window.getComputedStyle(this.shadowRoot.host),n=parseFloat(r.width),h=parseFloat(r.height);o<0&&(o=0),s<0&&(s=0),s+h>=window.innerHeight&&(s=window.innerHeight-h),o+n>=window.innerWidth&&(o=window.innerWidth-n),this._updateConfiguratorPosition(o,s),e.preventDefault()});m(this,"_stopDragConfigurator",async e=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(e)});m(this,"_stopDragMiniConfigurator",async e=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(e)});m(this,"_stopDrag",async e=>{this._x=this._offset_x,this._y=this._offset_y});m(this,"_onResize",async e=>{this._handleAsusSpanning()});m(this,"_seamValueUpdated",async()=>{this.foldWidth=this._seam_slider.value,this.shadowRoot.host.style.setProperty("--device-fold-width",this.foldWidth+"px"),this._updateFoldablesFeature()});m(this,"_rotationFinished",e=>{this._preview.style.transition=""});this._verticalViewportSegments=1,this._horizontalViewportSegments=1}static get properties(){return{verticalViewportSegments:{type:Number},horizontalViewportSegments:{type:Number}}}_inIframe(){try{return window.self!==window.top}catch{return!0}}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches)return console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this);const e=window.getComputedStyle(this.shadowRoot.host);parseFloat(e.width);const o=parseFloat(e.height);this._updateConfiguratorPosition(20,window.innerHeight-o-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._verticalViewportSegments=1,this._horizontalViewportSegments=1,this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="portrait",this._deviceType=Q.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.horizontalViewportSegments=1,this.verticalViewportSegments=2,this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{this._addZenbookVariables(document.styleSheets[0]),this._addZenbookVariables(this._frame.contentDocument.styleSheets[0])},300)):(this.horizontalViewportSegments=1,this.verticalViewportSegments=1,this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this._orientationFromSegments()}_orientationFromSegments(){return this.horizontalViewportSegments===2&&this.verticalViewportSegments===1?"portrait":this.horizontalViewportSegments===1&&this.verticalViewportSegments===2?"landscape":"portrait"}_addZenbookVariables(e){e.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",e.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(e){this._fold_width=Math.max(0,e)}_orientationChanged(e){const o=this._orientation_select.selectedIndex;this._orientation_select[o].value==="portrait"?(this.horizontalViewportSegments=2,this.verticalViewportSegments=1):(this.horizontalViewportSegments=1,this.verticalViewportSegments=2),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){this._orientationFromSegments()!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this._orientationFromSegments(),this.horizontalViewportSegments===1&&this.verticalViewportSegments===1?this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation():this.horizontalViewportSegments===2?this._applyVerticalRotation():this._applyHorizontalRotation()}get horizontalViewportSegments(){return this._horizontalViewportSegments}set horizontalViewportSegments(e){let o=this._horizontalViewportSegments;this._orientation_select.selectedIndex=e===2?0:1,this._horizontalViewportSegments=e,this.requestUpdate("horizontalViewportSegments",o)}get verticalViewportSegments(){return this._verticalViewportSegments}set verticalViewportSegments(e){let o=this._verticalViewportSegments;this._orientation_select.selectedIndex=e===2?1:0,this._verticalViewportSegments=e,this.requestUpdate("verticalViewportSegments",o)}_deviceTypeChanged(e){const o=this._device_type_select.selectedIndex,s=this._device_type_select[o].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(this.verticalViewportSegments=1,this.horizontalViewportSegments=2,this._currentOrientation="portrait"),s){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this.foldWidth=24,this._deviceType=Q.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Q.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Q.Dual,this.foldWidth=28,this._currentDevice="duo";break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=Q.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Q.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this.verticalViewportSegments=1,this.horizontalViewportSegments=1,this._currentOrientation="portrait",this._currentDevice="duo",this.foldWidth=0,this._deviceType=Q.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature(),this._frame.contentWindow.location.reload(!0)}_calculateAndApplyScaleFactor(){const e=window.getComputedStyle(this._preview_container),o=window.getComputedStyle(this._device),s=parseInt(e.width,10),r=parseInt(e.height,10);let n=parseInt(o.width,10),h=parseInt(o.height,10),a=1;if(this._currentOrientation==="landscape"&&(n=parseInt(o.height,10),h=parseInt(o.width,10)),h>r||n>s){const l=r/h,c=s/n;a=c<l?c:l}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*a)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px")}this._deviceType===Q.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const e=new yo;e.foldSize=this.foldWidth,e.horizontalViewportSegments=this.horizontalViewportSegments,e.verticalViewportSegments=this.verticalViewportSegments,this._seam_slider.value=this.foldWidth}_debounce(e,o){let s;return function(){clearTimeout(s),s=setTimeout(()=>e.apply(this,arguments),o)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let e=this._offset_x,o=this._offset_y;const s=window.getComputedStyle(this.shadowRoot.host),r=parseFloat(s.width),n=parseFloat(s.height);this._offset_y+n>=window.innerHeight&&(o=window.innerHeight-n),this._offset_x+r>=window.innerWidth&&(e=window.innerWidth-r),this._updateConfiguratorPosition(e,o),this._updatePreviewConfiguration()}_updateConfiguratorPosition(e,o){this._offset_x=e,this._offset_y=o,this.shadowRoot.host.style.transform="translate3d("+e+"px, "+o+"px, 0)"}_toggleSpanning(){this.verticalViewportSegments!=1||this.horizontalViewportSegments!=1?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1||(this.verticalViewportSegments===2?(this.verticalViewportSegments=1,this.horizontalViewportSegments=2):(this.verticalViewportSegments=2,this.horizontalViewportSegments=1),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return It`
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
    </div>`}}m(Wr,"styles",Tr`
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
  `);customElements.define("foldable-device-configurator",Wr);try{self["workbox:window:6.5.3"]&&_()}catch{}function to(i,t){return new Promise(function(e){var o=new MessageChannel;o.port1.onmessage=function(s){e(s.data)},i.postMessage(t,[o.port2])})}function Ya(i,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}function Gs(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=i[e];return o}function Ka(i,t){var e;if(typeof Symbol>"u"||i[Symbol.iterator]==null){if(Array.isArray(i)||(e=function(s,r){if(s){if(typeof s=="string")return Gs(s,r);var n=Object.prototype.toString.call(s).slice(8,-1);return n==="Object"&&s.constructor&&(n=s.constructor.name),n==="Map"||n==="Set"?Array.from(s):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gs(s,r):void 0}}(i))||t&&i&&typeof i.length=="number"){e&&(i=e);var o=0;return function(){return o>=i.length?{done:!0}:{done:!1,value:i[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(e=i[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.5.3"]&&_()}catch{}var Ui=function(){var i=this;this.promise=new Promise(function(t,e){i.resolve=t,i.reject=e})};function Vi(i,t){var e=location.href;return new URL(i,e).href===new URL(t,e).href}var ee=function(i,t){this.type=i,Object.assign(this,t)};function Ae(i,t,e){return e?t?t(i):i:(i&&i.then||(i=Promise.resolve(i)),t?i.then(t):i)}function Za(){}var Xa={type:"SKIP_WAITING"};function Ys(i,t){if(!t)return i&&i.then?i.then(Za):Promise.resolve()}var Ja=function(i){var t,e;function o(h,a){var l,c;return a===void 0&&(a={}),(l=i.call(this)||this).nn={},l.tn=0,l.rn=new Ui,l.en=new Ui,l.on=new Ui,l.un=0,l.an=new Set,l.cn=function(){var d=l.fn,u=d.installing;l.tn>0||!Vi(u.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=u,d.removeEventListener("updatefound",l.cn)):(l.hn=u,l.an.add(u),l.rn.resolve(u)),++l.tn,u.addEventListener("statechange",l.ln)},l.ln=function(d){var u=l.fn,p=d.target,f=p.state,g=p===l.vn,v={sw:p,isExternal:g,originalEvent:d};!g&&l.mn&&(v.isUpdate=!0),l.dispatchEvent(new ee(f,v)),f==="installed"?l.wn=self.setTimeout(function(){f==="installed"&&u.waiting===p&&l.dispatchEvent(new ee("waiting",v))},200):f==="activating"&&(clearTimeout(l.wn),g||l.en.resolve(p))},l.dn=function(d){var u=l.hn,p=u!==navigator.serviceWorker.controller;l.dispatchEvent(new ee("controlling",{isExternal:p,originalEvent:d,sw:u,isUpdate:l.mn})),p||l.on.resolve(u)},l.gn=(c=function(d){var u=d.data,p=d.ports,f=d.source;return Ae(l.getSW(),function(){l.an.has(f)&&l.dispatchEvent(new ee("message",{data:u,originalEvent:d,ports:p,sw:f}))})},function(){for(var d=[],u=0;u<arguments.length;u++)d[u]=arguments[u];try{return Promise.resolve(c.apply(this,d))}catch(p){return Promise.reject(p)}}),l.sn=h,l.nn=a,navigator.serviceWorker.addEventListener("message",l.gn),l}e=i,(t=o).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var s,r,n=o.prototype;return n.register=function(h){var a=(h===void 0?{}:h).immediate,l=a!==void 0&&a;try{var c=this;return function(d,u){var p=d();return p&&p.then?p.then(u):u(p)}(function(){if(!l&&document.readyState!=="complete")return Ys(new Promise(function(d){return window.addEventListener("load",d)}))},function(){return c.mn=Boolean(navigator.serviceWorker.controller),c.yn=c.pn(),Ae(c.bn(),function(d){c.fn=d,c.yn&&(c.hn=c.yn,c.en.resolve(c.yn),c.on.resolve(c.yn),c.yn.addEventListener("statechange",c.ln,{once:!0}));var u=c.fn.waiting;return u&&Vi(u.scriptURL,c.sn.toString())&&(c.hn=u,Promise.resolve().then(function(){c.dispatchEvent(new ee("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),c.hn&&(c.rn.resolve(c.hn),c.an.add(c.hn)),c.fn.addEventListener("updatefound",c.cn),navigator.serviceWorker.addEventListener("controllerchange",c.dn),c.fn})})}catch(d){return Promise.reject(d)}},n.update=function(){try{return this.fn?Ys(this.fn.update()):void 0}catch(h){return Promise.reject(h)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(h){try{return Ae(this.getSW(),function(a){return to(a,h)})}catch(a){return Promise.reject(a)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&to(this.fn.waiting,Xa)},n.pn=function(){var h=navigator.serviceWorker.controller;return h&&Vi(h.scriptURL,this.sn.toString())?h:void 0},n.bn=function(){try{var h=this;return function(a,l){try{var c=a()}catch(d){return l(d)}return c&&c.then?c.then(void 0,l):c}(function(){return Ae(navigator.serviceWorker.register(h.sn,h.nn),function(a){return h.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},s=o,(r=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Ya(s.prototype,r),o}(function(){function i(){this.Pn=new Map}var t=i.prototype;return t.addEventListener=function(e,o){this.Sn(e).add(o)},t.removeEventListener=function(e,o){this.Sn(e).delete(o)},t.dispatchEvent=function(e){e.target=this;for(var o,s=Ka(this.Sn(e.type));!(o=s()).done;)(0,o.value)(e)},t.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},i}());Ii("/demos/foldship/");const Qa=(i,...t)=>{const e=be(i[0],"main-application");return Y([e],...t)},tl=["","A","B","C","D","E","F","G","H","I","J"];class Gr extends W{constructor(){super();m(this,"_timeBetweenRounds",1500);m(this,"_playMessage");m(this,"_swAlert");m(this,"_playing",!1);m(this,"_wb");m(this,"_wbRegistration");m(this,"_currentTime",0);this._round=0,this._roundDigits=["0"]}static get properties(){return{round:{type:String},roundDigits:{type:Array},currentTime:{type:String}}}set round(e){let o=this._round;this._round=e,this.requestUpdate("round",o),this.roundDigits=e.toString().split("")}get round(){return this._round}set roundDigits(e){let o=this._roundDigits;this._roundDigits=e,this.requestUpdate("roundDigits",o)}get roundDigits(){return this._roundDigits}set currentTime(e){let o=this._currentTime;this._currentTime=e,this.requestUpdate("currentTime",o)}get currentTime(){return this._currentTime}firstUpdated(){this._enemyGrid=this.shadowRoot.querySelector("#enemy-grid"),this._playerGrid=this.shadowRoot.querySelector("#player-grid"),this._playMessage=this.shadowRoot.querySelector("#play-message"),this._endGameMenu=this.shadowRoot.querySelector("#end-game-menu"),this._welcomeMenu=this.shadowRoot.querySelector("#welcome-menu"),this._endGameMessage=this.shadowRoot.querySelector("#end-game-message"),this._endGameTitle=this.shadowRoot.querySelector("#end-game-title"),this._welcomeMenu.open(),this._infobox=this.shadowRoot.querySelector("#infobox"),this._fullscreenRotate=this.shadowRoot.querySelector("#fullscreen-rotate"),this._fullscreenRotate.hide(),this._howTo=this.shadowRoot.querySelector("#how-to"),this._swAlert=this.shadowRoot.querySelector("#sw-alert"),this._fold=this.shadowRoot.querySelector(".fold"),this._foldContent=this.shadowRoot.querySelector(".fold-content"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new Ja("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()})}connectedCallback(){super.connectedCallback(),Ot(this)}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&to(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_deviceSupportsSpanningMQs(){return window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1}startGame(){this._deviceSupportsSpanningMQs()&&this._fullscreenRotate.setLabel("Ahoy Captain!<br>Please rotate your device to play.                                 <br> You can also span the window to play."),this._fullscreenRotate.show(),this._welcomeMenu.close(),this._enemyGrid.classList.remove("blocked"),this._playerGrid.style.visibility="visible",this._enemyGrid.style.visibility="visible",this._infobox.style.visibility="visible",this._playing=!0,this.shadowRoot.host.style.setProperty("--fold-visibility","visible"),this._currentTime=0,this._currentTimerId=setInterval(()=>{this.currentTime++},1e3)}restartGame(){this.round=0,clearInterval(this._currentTimerId),this._enemyGrid.classList.remove("blocked"),this._enemyGrid.restart(),this._playerGrid.restart(),this._playMessage.innerHTML="Let's get started, fire first.",this._endGameMenu.close(),this.startGame()}showHowTo(){this._welcomeMenu.close(),this._endGameMenu.close(),this._howTo.style.visibility="visible"}closeHowTo(){this.round>0?this._endGameMenu.open():this._welcomeMenu.open(),this._howTo.style.visibility="hidden"}playerPlayed(){this._enemyGrid.classList.add("blocked"),this._playMessage.innerHTML="You missed!",setTimeout(()=>this._playerGrid.enemyShoot(),this._timeBetweenRounds),this.round++}enemyPlayed(e){this._playMessage.innerHTML="I shot at "+tl[e.detail.x]+"-"+e.detail.y,setTimeout(()=>this.nextPlayerTurn(),this._timeBetweenRounds)}nextPlayerTurn(){this._playMessage.innerHTML="Your turn...",this._enemyGrid.classList.remove("blocked")}playerHit(e){this._playMessage.innerHTML="You hit my "+e.detail.type+"!<br> Shoot again."}playerSank(e){this._playMessage.innerHTML="You sank my "+e.detail.type+" :( !<br> Shoot again."}enemyHit(e){this._playMessage.innerHTML="Ah! I hit your "+e.detail.type+"!<br> I'll shoot again."}enemySank(e){this._playMessage.innerHTML="I sank your "+e.detail.type+"!<br> I'll shoot again."}playerWin(){this._playing=!1,this._fullscreenRotate.hide(),this._enemyGrid.classList.add("blocked"),this._endGameTitle.innerHTML="You won!",this._endGameMessage.innerHTML="You defeated your enemy in "+this._round+" rounds.",this._endGameMenu.open(),this._playMessage.innerHTML="Oh no :(, you won...",clearInterval(this._currentTimerId)}playerLost(){this._playing=!1,this._fullscreenRotate.hide(),this._enemyGrid.classList.add("blocked"),this._endGameTitle.innerHTML="You won!",this._endGameMessage.innerHTML="Your enemy defeated you in "+this._round+" rounds.",this._endGameMenu.open(),this._playMessage.innerHTML="Yeah, I won!",clearInterval(this._currentTimerId)}render(){return O`
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
            <div class="time fold-text">Elapsed time: ${this.currentTime} s</div>
            <div>
              <div class="fold-text">Number of rounds :</div>
                ${this.roundDigits.map(e=>O`
                    <img src="images/${e}.svg" class="fold-rounds" alt="Image of digit ${e}">
                `)}
              </div>
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
    `}}m(Gr,"styles",Qa`
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
    }

    .fold-text {
      color: #e35e20;
      margin-right: 10px;
      font-size: 3rem;
      display: inline;
    }

    .fold-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }

    .time {
      min-width: 15%;
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

      .fold-text {
        margin-bottom: 10px;
        margin-right: 0px;
        font-size: 0.9rem;
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
      }

      .fold-rounds {
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0) - 55px);
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
  `);customElements.define("main-application",Gr);
