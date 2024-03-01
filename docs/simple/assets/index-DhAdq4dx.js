var ze=Object.defineProperty;var Pe=(e,t,r)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var w=(e,t,r)=>(Pe(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=globalThis,Lt=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mt=Symbol(),Vt=new WeakMap;let le=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==Mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Lt&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Vt.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Vt.set(r,t))}return t}toString(){return this.cssText}};const Te=e=>new le(typeof e=="string"?e:e+"",void 0,Mt),C=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new le(r,e,Mt)},Le=(e,t)=>{if(Lt)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),i=ct.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)}},Bt=Lt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Te(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Me,defineProperty:Ue,getOwnPropertyDescriptor:Oe,getOwnPropertyNames:Ie,getOwnPropertySymbols:Re,getPrototypeOf:Ve}=Object,P=globalThis,Ht=P.trustedTypes,Be=Ht?Ht.emptyScript:"",mt=P.reactiveElementPolyfillSupport,X=(e,t)=>e,F={toAttribute(e,t){switch(t){case Boolean:e=e?Be:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ut=(e,t)=>!Me(e,t),Nt={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:Ut};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),P.litPropertyMetadata??(P.litPropertyMetadata=new WeakMap);class H extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Nt){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,r);i!==void 0&&Ue(this.prototype,t,i)}}static getPropertyDescriptor(t,r,o){const{get:i,set:s}=Oe(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const c=i==null?void 0:i.call(this);s.call(this,n),this.requestUpdate(t,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Nt}static _$Ei(){if(this.hasOwnProperty(X("elementProperties")))return;const t=Ve(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(X("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(X("properties"))){const r=this.properties,o=[...Ie(r),...Re(r)];for(const i of o)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)r.unshift(Bt(i))}else t!==void 0&&r.push(Bt(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Le(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostConnected)==null?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EC(t,r){var s;const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){const n=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:F).toAttribute(r,o.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,r){var s;const o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=o.getPropertyOptions(i),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)==null?void 0:s.fromAttribute)!==void 0?n.converter:F;this._$Em=i,this[i]=c.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(t,r,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??Ut)(this[t],r))return;this.P(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,o){this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i)n.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],n)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(o=this._$EO)==null||o.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(r)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdated)==null?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[X("elementProperties")]=new Map,H[X("finalized")]=new Map,mt==null||mt({ReactiveElement:H}),(P.reactiveElementVersions??(P.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=globalThis,ht=tt.trustedTypes,Dt=ht?ht.createPolicy("lit-html",{createHTML:e=>e}):void 0,ce="$lit$",z=`lit$${(Math.random()+"").slice(9)}$`,de="?"+z,He=`<${de}>`,I=document,et=()=>I.createComment(""),rt=e=>e===null||typeof e!="object"&&typeof e!="function",he=Array.isArray,Ne=e=>he(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",yt=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ft=/-->/g,jt=/>/g,L=RegExp(`>|${yt}(?:([^\\s"'>=/]+)(${yt}*=${yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wt=/'/g,qt=/"/g,ue=/^(?:script|style|textarea|title)$/i,De=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),T=De(1),k=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Kt=new WeakMap,O=I.createTreeWalker(I,129);function pe(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dt!==void 0?Dt.createHTML(t):t}const Fe=(e,t)=>{const r=e.length-1,o=[];let i,s=t===2?"<svg>":"",n=K;for(let c=0;c<r;c++){const l=e[c];let a,u,h=-1,f=0;for(;f<l.length&&(n.lastIndex=f,u=n.exec(l),u!==null);)f=n.lastIndex,n===K?u[1]==="!--"?n=Ft:u[1]!==void 0?n=jt:u[2]!==void 0?(ue.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=L):u[3]!==void 0&&(n=L):n===L?u[0]===">"?(n=i??K,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,a=u[1],n=u[3]===void 0?L:u[3]==='"'?qt:Wt):n===qt||n===Wt?n=L:n===Ft||n===jt?n=K:(n=L,i=void 0);const b=n===L&&e[c+1].startsWith("/>")?" ":"";s+=n===K?l+He:h>=0?(o.push(a),l.slice(0,h)+ce+l.slice(h)+z+b):l+z+(h===-2?c:b)}return[pe(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),o]};class ot{constructor({strings:t,_$litType$:r},o){let i;this.parts=[];let s=0,n=0;const c=t.length-1,l=this.parts,[a,u]=Fe(t,r);if(this.el=ot.createElement(a,o),O.currentNode=this.el.content,r===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=O.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ce)){const f=u[n++],b=i.getAttribute(h).split(z),x=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:x[2],strings:b,ctor:x[1]==="."?We:x[1]==="?"?qe:x[1]==="@"?Ke:pt}),i.removeAttribute(h)}else h.startsWith(z)&&(l.push({type:6,index:s}),i.removeAttribute(h));if(ue.test(i.tagName)){const h=i.textContent.split(z),f=h.length-1;if(f>0){i.textContent=ht?ht.emptyScript:"";for(let b=0;b<f;b++)i.append(h[b],et()),O.nextNode(),l.push({type:2,index:++s});i.append(h[f],et())}}}else if(i.nodeType===8)if(i.data===de)l.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(z,h+1))!==-1;)l.push({type:7,index:s}),h+=z.length-1}s++}}static createElement(t,r){const o=I.createElement("template");return o.innerHTML=t,o}}function j(e,t,r=e,o){var n,c;if(t===k)return t;let i=o!==void 0?(n=r._$Co)==null?void 0:n[o]:r._$Cl;const s=rt(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,r,o)),o!==void 0?(r._$Co??(r._$Co=[]))[o]=i:r._$Cl=i),i!==void 0&&(t=j(e,i._$AS(e,t.values),i,o)),t}class je{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,i=((t==null?void 0:t.creationScope)??I).importNode(r,!0);O.currentNode=i;let s=O.nextNode(),n=0,c=0,l=o[0];for(;l!==void 0;){if(n===l.index){let a;l.type===2?a=new it(s,s.nextSibling,this,t):l.type===1?a=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(a=new Qe(s,this,t)),this._$AV.push(a),l=o[++c]}n!==(l==null?void 0:l.index)&&(s=O.nextNode(),n++)}return O.currentNode=I,i}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class it{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,o,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=j(this,t,r),rt(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ne(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==m&&rt(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){var s;const{values:r,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ot.createElement(pe(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(r);else{const n=new je(i,this),c=n.u(this.options);n.p(r),this.T(c),this._$AH=n}}_$AC(t){let r=Kt.get(t.strings);return r===void 0&&Kt.set(t.strings,r=new ot(t)),r}k(t){he(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const s of t)i===r.length?r.push(o=new it(this.S(et()),this.S(et()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,i,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=m}_$AI(t,r=this,o,i){const s=this.strings;let n=!1;if(s===void 0)t=j(this,t,r,0),n=!rt(t)||t!==this._$AH&&t!==k,n&&(this._$AH=t);else{const c=t;let l,a;for(t=s[0],l=0;l<s.length-1;l++)a=j(this,c[o+l],r,l),a===k&&(a=this._$AH[l]),n||(n=!rt(a)||a!==this._$AH[l]),a===m?t=m:t!==m&&(t+=(a??"")+s[l+1]),this._$AH[l]=a}n&&!i&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class We extends pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}class qe extends pt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}}class Ke extends pt{constructor(t,r,o,i,s){super(t,r,o,i,s),this.type=5}_$AI(t,r=this){if((t=j(this,t,r,0)??m)===k)return;const o=this._$AH,i=t===m&&o!==m||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==m&&(o===m||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class Qe{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const wt=tt.litHtmlPolyfillSupport;wt==null||wt(ot,it),(tt.litHtmlVersions??(tt.litHtmlVersions=[])).push("3.1.2");const Ze=(e,t,r)=>{const o=(r==null?void 0:r.renderBefore)??t;let i=o._$litPart$;if(i===void 0){const s=(r==null?void 0:r.renderBefore)??null;o._$litPart$=i=new it(t.insertBefore(et(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let D=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ze(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return k}};var ae;D._$litElement$=!0,D.finalized=!0,(ae=globalThis.litElementHydrateSupport)==null||ae.call(globalThis,{LitElement:D});const _t=globalThis.litElementPolyfillSupport;_t==null||_t({LitElement:D});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");try{self["workbox:window:7.0.0"]&&_()}catch{}function Ct(e,t){return new Promise(function(r){var o=new MessageChannel;o.port1.onmessage=function(i){r(i.data)},e.postMessage(t,[o.port2])})}function Ye(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Qt(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function Ge(e,t){var r;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=function(i,s){if(i){if(typeof i=="string")return Qt(i,s);var n=Object.prototype.toString.call(i).slice(8,-1);return n==="Object"&&i.constructor&&(n=i.constructor.name),n==="Map"||n==="Set"?Array.from(i):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Qt(i,s):void 0}}(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(r=e[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:7.0.0"]&&_()}catch{}var $t=function(){var e=this;this.promise=new Promise(function(t,r){e.resolve=t,e.reject=r})};function xt(e,t){var r=location.href;return new URL(e,r).href===new URL(t,r).href}var Q=function(e,t){this.type=e,Object.assign(this,t)};function nt(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function Je(){}var Xe={type:"SKIP_WAITING"};function Zt(e,t){if(!t)return e&&e.then?e.then(Je):Promise.resolve()}var tr=function(e){var t,r;function o(c,l){var a,u;return l===void 0&&(l={}),(a=e.call(this)||this).nn={},a.tn=0,a.rn=new $t,a.en=new $t,a.on=new $t,a.un=0,a.an=new Set,a.cn=function(){var h=a.fn,f=h.installing;a.tn>0||!xt(f.scriptURL,a.sn.toString())||performance.now()>a.un+6e4?(a.vn=f,h.removeEventListener("updatefound",a.cn)):(a.hn=f,a.an.add(f),a.rn.resolve(f)),++a.tn,f.addEventListener("statechange",a.ln)},a.ln=function(h){var f=a.fn,b=h.target,x=b.state,gt=b===a.vn,vt={sw:b,isExternal:gt,originalEvent:h};!gt&&a.mn&&(vt.isUpdate=!0),a.dispatchEvent(new Q(x,vt)),x==="installed"?a.wn=self.setTimeout(function(){x==="installed"&&f.waiting===b&&a.dispatchEvent(new Q("waiting",vt))},200):x==="activating"&&(clearTimeout(a.wn),gt||a.en.resolve(b))},a.dn=function(h){var f=a.hn,b=f!==navigator.serviceWorker.controller;a.dispatchEvent(new Q("controlling",{isExternal:b,originalEvent:h,sw:f,isUpdate:a.mn})),b||a.on.resolve(f)},a.gn=(u=function(h){var f=h.data,b=h.ports,x=h.source;return nt(a.getSW(),function(){a.an.has(x)&&a.dispatchEvent(new Q("message",{data:f,originalEvent:h,ports:b,sw:x}))})},function(){for(var h=[],f=0;f<arguments.length;f++)h[f]=arguments[f];try{return Promise.resolve(u.apply(this,h))}catch(b){return Promise.reject(b)}}),a.sn=c,a.nn=l,navigator.serviceWorker.addEventListener("message",a.gn),a}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i,s,n=o.prototype;return n.register=function(c){var l=(c===void 0?{}:c).immediate,a=l!==void 0&&l;try{var u=this;return function(h,f){var b=h();return b&&b.then?b.then(f):f(b)}(function(){if(!a&&document.readyState!=="complete")return Zt(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return u.mn=!!navigator.serviceWorker.controller,u.yn=u.pn(),nt(u.bn(),function(h){u.fn=h,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var f=u.fn.waiting;return f&&xt(f.scriptURL,u.sn.toString())&&(u.hn=f,Promise.resolve().then(function(){u.dispatchEvent(new Q("waiting",{sw:f,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(h){return Promise.reject(h)}},n.update=function(){try{return this.fn?Zt(this.fn.update()):void 0}catch(c){return Promise.reject(c)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(c){try{return nt(this.getSW(),function(l){return Ct(l,c)})}catch(l){return Promise.reject(l)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Ct(this.fn.waiting,Xe)},n.pn=function(){var c=navigator.serviceWorker.controller;return c&&xt(c.scriptURL,this.sn.toString())?c:void 0},n.bn=function(){try{var c=this;return function(l,a){try{var u=l()}catch(h){return a(h)}return u&&u.then?u.then(void 0,a):u}(function(){return nt(navigator.serviceWorker.register(c.sn,c.nn),function(l){return c.un=performance.now(),l})},function(l){throw l})}catch(l){return Promise.reject(l)}},i=o,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Ye(i.prototype,s),o}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(r,o){this.Sn(r).add(o)},t.removeEventListener=function(r,o){this.Sn(r).delete(o)},t.dispatchEvent=function(r){r.target=this;for(var o,i=Ge(this.Sn(r.type));!(o=i()).done;)(0,o.value)(r)},t.Sn=function(r){return this.Pn.has(r)||this.Pn.set(r,new Set),this.Pn.get(r)},e}()),er=C`
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
`,ft=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const o=r.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},R=C`
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
`,fe=Object.defineProperty,rr=Object.defineProperties,or=Object.getOwnPropertyDescriptor,ir=Object.getOwnPropertyDescriptors,Yt=Object.getOwnPropertySymbols,sr=Object.prototype.hasOwnProperty,nr=Object.prototype.propertyIsEnumerable,Gt=(e,t,r)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,q=(e,t)=>{for(var r in t||(t={}))sr.call(t,r)&&Gt(e,r,t[r]);if(Yt)for(var r of Yt(t))nr.call(t,r)&&Gt(e,r,t[r]);return e},Ot=(e,t)=>rr(e,ir(t)),d=(e,t,r,o)=>{for(var i=o>1?void 0:o?or(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&fe(t,r,i),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ar={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:Ut},lr=(e=ar,t,r)=>{const{kind:o,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,e),o==="accessor"){const{name:n}=r;return{set(c){const l=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,l,e)},init(c){return c!==void 0&&this.P(n,void 0,e),c}}}if(o==="setter"){const{name:n}=r;return function(c){const l=this[n];t.call(this,c),this.requestUpdate(n,l,e)}}throw Error("Unsupported decorator location: "+o)};function p(e){return(t,r)=>typeof r=="object"?lr(e,t,r):((o,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function st(e){return p({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(e,t){return(r,o,i)=>{const s=n=>{var c;return((c=n.renderRoot)==null?void 0:c.querySelector(e))??null};if(t){const{get:n,set:c}=typeof o=="object"?r:i??(()=>{const l=Symbol();return{get(){return this[l]},set(a){this[l]=a}}})();return Jt(r,o,{get(){let l=n.call(this);return l===void 0&&(l=s(this),(l!==null||this.hasUpdated)&&c.call(this,l)),l}})}return Jt(r,o,{get(){return s(this)}})}}var A=class extends D{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,q({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const o=customElements.get(e);if(!o){customElements.define(e,class extends t{},r);return}let i=" (unknown version)",s=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in o&&o.version&&(s=" v"+o.version),!(i&&s&&i===s)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${s} has already been registered.`)}};A.version="2.14.0";A.dependencies={};d([p()],A.prototype,"dir",2);d([p()],A.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},be=e=>(...t)=>({_$litDirective$:e,values:t});class ge{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=be(class extends ge{constructor(e){var t;if(super(e),e.type!==M.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(t)}const r=e.element.classList;for(const s of this.st)s in t||(r.remove(s),this.st.delete(s));for(const s in t){const n=!!t[s];n===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(n?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return k}});var ve=class extends A{constructor(){super(...arguments),this.hasSlotController=new ft(this,"footer","header","image")}render(){return T`
      <div
        part="base"
        class=${W({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};ve.styles=[R,er];ve.define("sl-card");var Et="";function zt(e){Et=e}function cr(e=""){if(!Et){const t=[...document.getElementsByTagName("script")],r=t.find(o=>o.hasAttribute("data-shoelace"));if(r)zt(r.getAttribute("data-shoelace"));else{const o=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let i="";o&&(i=o.getAttribute("src")),zt(i.split("/").slice(0,-1).join("/"))}}return Et.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var dr={name:"default",resolver:e=>cr(`assets/icons/${e}.svg`)},hr=dr,Xt={caret:`
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
  `},ur={name:"system",resolver:e=>e in Xt?`data:image/svg+xml,${encodeURIComponent(Xt[e])}`:""},pr=ur,fr=[hr,pr],Pt=[];function br(e){Pt.push(e)}function gr(e){Pt=Pt.filter(t=>t!==e)}function te(e){return fr.find(t=>t.name===e)}var vr=C`
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
`;function V(e,t){const r=q({waitUntilFirstUpdate:!1},t);return(o,i)=>{const{update:s}=o,n=Array.isArray(e)?e:[e];o.update=function(c){n.forEach(l=>{const a=l;if(c.has(a)){const u=c.get(a),h=this[a];u!==h&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](u,h)}}),s.call(this,c)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mr=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,yr=e=>e.strings===void 0,wr={},_r=(e,t=wr)=>e._$AH=t;var Z=Symbol(),at=Symbol(),kt,At=new Map,S=class extends A{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(t!=null&&t.spriteSheet)return T`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?Z:at}catch{return at}try{const i=document.createElement("div");i.innerHTML=await o.text();const s=i.firstElementChild;if(((r=s==null?void 0:s.tagName)==null?void 0:r.toLowerCase())!=="svg")return Z;kt||(kt=new DOMParser);const c=kt.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):Z}catch{return Z}}connectedCallback(){super.connectedCallback(),br(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),gr(this)}getIconSource(){const e=te(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),o=r?te(this.library):void 0;if(!t){this.svg=null;return}let i=At.get(t);if(i||(i=this.resolveIcon(t,o),At.set(t,i)),!this.initialRender)return;const s=await i;if(s===at&&At.delete(t),t===this.getIconSource().url){if(mr(s)){this.svg=s;return}switch(s){case at:case Z:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(e=o==null?void 0:o.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};S.styles=[R,vr];d([st()],S.prototype,"svg",2);d([p({reflect:!0})],S.prototype,"name",2);d([p()],S.prototype,"src",2);d([p()],S.prototype,"label",2);d([p({reflect:!0})],S.prototype,"library",2);d([V("label")],S.prototype,"handleLabelChange",1);d([V(["name","src","library"])],S.prototype,"setIcon",1);S.define("sl-icon");var $r=C`
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
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=Symbol.for(""),xr=e=>{if((e==null?void 0:e.r)===me)return e==null?void 0:e._$litStatic$},ut=(e,...t)=>({_$litStatic$:t.reduce((r,o,i)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[i+1],e[0]),r:me}),ee=new Map,kr=e=>(t,...r)=>{const o=r.length;let i,s;const n=[],c=[];let l,a=0,u=!1;for(;a<o;){for(l=t[a];a<o&&(s=r[a],(i=xr(s))!==void 0);)l+=i+t[++a],u=!0;a!==o&&c.push(s),n.push(l),a++}if(a===o&&n.push(t[o]),u){const h=n.join("$$lit$$");(t=ee.get(h))===void 0&&(n.raw=n,ee.set(h,t=n)),r=c}return e(t,...r)},dt=kr(T);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=e=>e??m;var $=class extends A{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?ut`a`:ut`button`;return dt`
      <${t}
        part="base"
        class=${W({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${v(e?void 0:this.disabled)}
        type=${v(e?void 0:"button")}
        href=${v(e?this.href:void 0)}
        target=${v(e?this.target:void 0)}
        download=${v(e?this.download:void 0)}
        rel=${v(e&&this.target?"noreferrer noopener":void 0)}
        role=${v(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${v(this.name)}
          library=${v(this.library)}
          src=${v(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};$.styles=[R,$r];$.dependencies={"sl-icon":S};d([bt(".icon-button")],$.prototype,"button",2);d([st()],$.prototype,"hasFocus",2);d([p()],$.prototype,"name",2);d([p()],$.prototype,"library",2);d([p()],$.prototype,"src",2);d([p()],$.prototype,"href",2);d([p()],$.prototype,"target",2);d([p()],$.prototype,"download",2);d([p()],$.prototype,"label",2);d([p({type:Boolean,reflect:!0})],$.prototype,"disabled",2);var ye=new Map,Ar=new WeakMap;function Sr(e){return e??{keyframes:[],options:{duration:0}}}function re(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function we(e,t){ye.set(e,Sr(t))}function oe(e,t,r){const o=Ar.get(e);if(o!=null&&o[t])return re(o[t],r.dir);const i=ye.get(t);return i?re(i,r.dir):{keyframes:[],options:{duration:0}}}function ie(e,t){return new Promise(r=>{function o(i){i.target===e&&(e.removeEventListener(t,o),r())}e.addEventListener(t,o)})}function se(e,t,r){return new Promise(o=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,Ot(q({},r),{duration:Cr()?0:r.duration}));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function Cr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ne(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}const Tt=new Set,Er=new MutationObserver(ke),N=new Map;let _e=document.documentElement.dir||"ltr",$e=document.documentElement.lang||navigator.language,U;Er.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function xe(...e){e.map(t=>{const r=t.$code.toLowerCase();N.has(r)?N.set(r,Object.assign(Object.assign({},N.get(r)),t)):N.set(r,t),U||(U=t)}),ke()}function ke(){_e=document.documentElement.dir||"ltr",$e=document.documentElement.lang||navigator.language,[...Tt.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let zr=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Tt.add(this.host)}hostDisconnected(){Tt.delete(this.host)}dir(){return`${this.host.dir||_e}`.toLowerCase()}lang(){return`${this.host.lang||$e}`.toLowerCase()}getTranslationData(t){var r,o;const i=new Intl.Locale(t.replace(/_/g,"-")),s=i==null?void 0:i.language.toLowerCase(),n=(o=(r=i==null?void 0:i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",c=N.get(`${s}-${n}`),l=N.get(s);return{locale:i,language:s,region:n,primary:c,secondary:l}}exists(t,r){var o;const{primary:i,secondary:s}=this.getTranslationData((o=r.lang)!==null&&o!==void 0?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||s&&s[t]||r.includeFallback&&U&&U[t])}term(t,...r){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(i&&i[t])s=i[t];else if(U&&U[t])s=U[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...r):s}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,r)}};var Ae={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};xe(Ae);var Pr=Ae,It=class extends zr{};xe(Pr);var Tr=C`
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
`,B=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),E=class extends A{constructor(){super(...arguments),this.hasSlotController=new ft(this,"icon","suffix"),this.localize=new It(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ne(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=oe(this,"alert.show",{dir:this.localize.dir()});await se(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await ne(this.base);const{keyframes:e,options:t}=oe(this,"alert.hide",{dir:this.localize.dir()});await se(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,ie(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ie(this,"sl-after-hide")}async toast(){return new Promise(e=>{B.parentElement===null&&document.body.append(B),B.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{B.removeChild(this),e(),B.querySelector("sl-alert")===null&&B.remove()},{once:!0})})}render(){return T`
      <div
        part="base"
        class=${W({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?T`
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
    `}};E.styles=[R,Tr];E.dependencies={"sl-icon-button":$};d([bt('[part~="base"]')],E.prototype,"base",2);d([p({type:Boolean,reflect:!0})],E.prototype,"open",2);d([p({type:Boolean,reflect:!0})],E.prototype,"closable",2);d([p({reflect:!0})],E.prototype,"variant",2);d([p({type:Number})],E.prototype,"duration",2);d([V("open",{waitUntilFirstUpdate:!0})],E.prototype,"handleOpenChange",1);d([V("duration")],E.prototype,"handleDurationChange",1);we("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});we("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});E.define("sl-alert");var Lr=C`
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
`,Se=class extends A{constructor(){super(...arguments),this.localize=new It(this)}render(){return T`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Se.styles=[R,Lr];var Y=new WeakMap,G=new WeakMap,J=new WeakMap,St=new WeakSet,lt=new WeakMap,Ce=class{constructor(e,t){this.handleFormData=r=>{const o=this.options.disabled(this.host),i=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof i=="string"&&i.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(c=>{r.formData.append(i,c.toString())}):r.formData.append(i,s.toString()))},this.handleFormSubmit=r=>{var o;const i=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=Y.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!i&&!s(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),lt.set(this.host,[])},this.handleInteraction=r=>{const o=lt.get(this.host);o.includes(r.type)||o.push(r.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=q({form:r=>{const o=r.form;if(o){const s=r.getRootNode().getElementById(o);if(s)return s}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),lt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),lt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Y.has(this.form)?Y.get(this.form).add(this.host):Y.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),G.has(this.form)||(G.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),J.has(this.form)||(J.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Y.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),G.has(this.form)&&(this.form.reportValidity=G.get(this.form),G.delete(this.form)),J.has(this.form)&&(this.form.checkValidity=J.get(this.form),J.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?St.add(e):St.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!St.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Rt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Ot(q({},Rt),{valid:!1,valueMissing:!0}));Object.freeze(Ot(q({},Rt),{valid:!1,customError:!0}));var Mr=C`
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
`,g=class extends A{constructor(){super(...arguments),this.formControlController=new Ce(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ft(this,"[default]","prefix","suffix"),this.localize=new It(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Rt}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?ut`a`:ut`button`;return dt`
      <${t}
        part="base"
        class=${W({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${v(e?void 0:this.disabled)}
        type=${v(e?void 0:this.type)}
        title=${this.title}
        name=${v(e?void 0:this.name)}
        value=${v(e?void 0:this.value)}
        href=${v(e?this.href:void 0)}
        target=${v(e?this.target:void 0)}
        download=${v(e?this.download:void 0)}
        rel=${v(e?this.rel:void 0)}
        role=${v(e?void 0:"button")}
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
        ${this.caret?dt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?dt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};g.styles=[R,Mr];g.dependencies={"sl-icon":S,"sl-spinner":Se};d([bt(".button")],g.prototype,"button",2);d([st()],g.prototype,"hasFocus",2);d([st()],g.prototype,"invalid",2);d([p()],g.prototype,"title",2);d([p({reflect:!0})],g.prototype,"variant",2);d([p({reflect:!0})],g.prototype,"size",2);d([p({type:Boolean,reflect:!0})],g.prototype,"caret",2);d([p({type:Boolean,reflect:!0})],g.prototype,"disabled",2);d([p({type:Boolean,reflect:!0})],g.prototype,"loading",2);d([p({type:Boolean,reflect:!0})],g.prototype,"outline",2);d([p({type:Boolean,reflect:!0})],g.prototype,"pill",2);d([p({type:Boolean,reflect:!0})],g.prototype,"circle",2);d([p()],g.prototype,"type",2);d([p()],g.prototype,"name",2);d([p()],g.prototype,"value",2);d([p()],g.prototype,"href",2);d([p()],g.prototype,"target",2);d([p()],g.prototype,"rel",2);d([p()],g.prototype,"download",2);d([p()],g.prototype,"form",2);d([p({attribute:"formaction"})],g.prototype,"formAction",2);d([p({attribute:"formenctype"})],g.prototype,"formEnctype",2);d([p({attribute:"formmethod"})],g.prototype,"formMethod",2);d([p({attribute:"formnovalidate",type:Boolean})],g.prototype,"formNoValidate",2);d([p({attribute:"formtarget"})],g.prototype,"formTarget",2);d([V("disabled",{waitUntilFirstUpdate:!0})],g.prototype,"handleDisabledChange",1);g.define("sl-button");var Ur=C`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Or=C`
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
`,Ir=(e="value")=>(t,r)=>{const o=t.constructor,i=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,n,c){var l;const a=o.getPropertyOptions(e),u=typeof a.attribute=="string"?a.attribute:e;if(s===u){const h=a.converter||F,b=(typeof h=="function"?h:(l=h==null?void 0:h.fromAttribute)!=null?l:F.fromAttribute)(c,a.type);this[e]!==b&&(this[r]=b)}i.call(this,s,n,c)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rr=be(class extends ge{constructor(e){if(super(e),e.type!==M.PROPERTY&&e.type!==M.ATTRIBUTE&&e.type!==M.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!yr(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===k||t===m)return t;const r=e.element,o=e.name;if(e.type===M.PROPERTY){if(t===r[o])return k}else if(e.type===M.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(o))return k}else if(e.type===M.ATTRIBUTE&&r.getAttribute(o)===t+"")return k;return _r(e),t}});var y=class extends A{constructor(){super(...arguments),this.formControlController=new Ce(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new ft(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return T`
      <div
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${W({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${v(this.value)}
            .checked=${Rr(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};y.styles=[R,Or,Ur];d([bt('input[type="checkbox"]')],y.prototype,"input",2);d([st()],y.prototype,"hasFocus",2);d([p()],y.prototype,"title",2);d([p()],y.prototype,"name",2);d([p()],y.prototype,"value",2);d([p({reflect:!0})],y.prototype,"size",2);d([p({type:Boolean,reflect:!0})],y.prototype,"disabled",2);d([p({type:Boolean,reflect:!0})],y.prototype,"checked",2);d([Ir("checked")],y.prototype,"defaultChecked",2);d([p({reflect:!0})],y.prototype,"form",2);d([p({type:Boolean,reflect:!0})],y.prototype,"required",2);d([p({attribute:"help-text"})],y.prototype,"helpText",2);d([V("checked",{waitUntilFirstUpdate:!0})],y.prototype,"handleCheckedChange",1);d([V("disabled",{waitUntilFirstUpdate:!0})],y.prototype,"handleDisabledChange",1);y.define("sl-switch");zt("/demos/simple/");class Ee extends D{constructor(){super();w(this,"_swAlert");w(this,"_wb");w(this,"_wbRegistration");w(this,"_segmentContainer");w(this,"_col1");w(this,"_col1Text");w(this,"_col2");w(this,"_col2Text");w(this,"_cardText");w(this,"_foldedImage");w(this,"_continuousImage");w(this,"_iframe");this._viewportWidth=0,this._viewportHeight=0}static get properties(){return{viewportWidth:{type:String},viewportHeight:{type:String}}}set viewportHeight(r){let o=this._viewportHeight;this._viewportHeight=r,this.requestUpdate("viewportHeight",o)}get viewportHeight(){return this._viewportHeight}set viewportWidth(r){let o=this._viewportWidth;this._viewportWidth=r,this.requestUpdate("viewportWidth",o)}get viewportWidth(){return this._viewportWidth}firstUpdated(){this._swAlert=this.shadowRoot.querySelector("#sw-alert"),this._segmentContainer=this.shadowRoot.querySelector("#segment-container"),this._col1=this.shadowRoot.querySelector("#col1"),this._col1Text=this.shadowRoot.querySelector("#col1-text"),this._col2=this.shadowRoot.querySelector("#col1"),this._col2Text=this.shadowRoot.querySelector("#col2-text"),this._cardText=this.shadowRoot.querySelector("#card-text"),this._continuousImage=this.shadowRoot.querySelector("#continuous-image"),this._foldedImage=this.shadowRoot.querySelector("#folded-image"),this._iframe=this.shadowRoot.querySelector("#iframe"),this._iframeSwitch=this.shadowRoot.querySelector("#iframe-switch"),console.log("Viewport Size : "+window.innerWidth+"x"+window.innerHeight),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new tr("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()}),this._mediaQueryHorizontalSegments=window.matchMedia("(horizontal-viewport-segments: 2)"),this._mediaQueryHorizontalSegments.onchange=()=>{this._viewportSegmentsEnabled()},this._mediaQueryHorizontalSegments.matches&&this._viewportSegmentsEnabled(),this._mediaQueryVerticalSegments=window.matchMedia("(vertical-viewport-segments: 2)"),this._mediaQueryVerticalSegments.onchange=()=>{this._viewportSegmentsEnabled()},this._mediaQueryVerticalSegments.matches&&this._viewportSegmentsEnabled(),navigator.devicePosture!=null?(console.log("Posture at page load : "+navigator.devicePosture.type),this._cardText.innerHTML=navigator.devicePosture.type,this._showDevicePostureImage(navigator.devicePosture.type),navigator.devicePosture.onchange=()=>{this._cardText.innerHTML=navigator.devicePosture.type,this._showDevicePostureImage(navigator.devicePosture.type),this._viewportSegmentsEnabled()}):(this._cardText.innerHTML="Not supported by browser.",this._showDevicePostureImage()),this.viewportWidth=window.innerWidth,this.viewportHeight=window.innerHeight}_showDevicePostureImage(r){console.log("Posture Changed "+r),r==="continuous"?(this._foldedImage.style.display="none",this._continuousImage.style.display="block"):r==="folded"?(this._foldedImage.style.display="block",this._continuousImage.style.display="none"):(this._foldedImage.style.display="none",this._continuousImage.style.display="none")}_viewportSegmentsEnabled(){console.log("Viewport Segments changed");let r=getComputedStyle(this._col1),o=getComputedStyle(this._col2);this._col1Text.innerHTML="Viewport Segment #1 <br> Dimensions: "+r.width+" - "+r.height,this._col2Text.innerHTML="Viewport Segment #2 <br> Dimensions: "+o.width+" - "+o.height,this.viewportWidth=window.innerWidth,this.viewportHeight=window.innerHeight}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&Ct(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_toggleIframe(){this._iframeSwitch.checked?this._iframe.style.display="block":this._iframe.style.display="none"}render(){return T`
      <sl-card class="posture-header">
        The viewport dimension is ${this.viewportWidth} x ${this.viewportHeight}. <br>
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
        <br>
        The current posture of the device is : 
        <div id="card-text"></div>
      </sl-card>
      <div id="segment-css-container">
        <div class="not-supported"> CSS Viewport Segments and Device Posture APIs are not supported in this browser.</div>
        <div id="col1">
          <div id="col1-text" class="segment-text"></div>
        </div>
        <div id="fold" class="angled stripes">
          Folded Area
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
      <sl-switch id="iframe-switch" @click="${this._toggleIframe}">Toggle iframe</sl-switch>
      <iframe id="iframe" src="iframe-test.html" width="300" height="150" frameborder="0"></iframe>
    `}}w(Ee,"styles",C`
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
      bottom: auto;
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

    #fold {
      visibility: hidden;
      background-color: black;
      color: yellow;
      font-size: 1.4rem;
      font-style: italic;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .stripes {
      height: 250px;
      width: 200px;
      background-size: 40px 40px;
    }

    .angled {
      background-color: #737373;
      background-image: linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
      transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
      transparent 75%, transparent);
    }

    #iframe-switch {
      color: white;
      position: absolute;
      top: 20px;
      right: 20px;
    }

    #iframe {
      position: absolute;
      bottom: 20px;
      right: 20px;
      z-index: 20;
      display: none;
      border-radius: 20px;
    }

    @media(device-posture: folded) {
      .not-supported {
        display: none;
      }

      .posture-header {
        bottom: 0;
        left: calc(50vw - 200px);
        display: block;
      }
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
        background-color: steelblue;
      }

      #fold {
        visibility: visible;
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
        height: 100%;
        font-size: 1rem;
      }

      #col2 {
        display: flex;
        background-color: green;
      }

      .segment-text {
        display: block;
        margin-top: 50px;
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
        background-color: pink;
      }

      #fold {
        visibility: visible;
        width: 100%;
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));
      }

      #col2 {
        display: flex;
        background-color: seagreen;
      }

      .segment-text {
        display: block;
      }

      .posture-header {
        top: auto;
        bottom: 30px;
        left: calc(50vw - 200px);
        display: block;
      }
    }

    /* This block is for smaller foldable devices */
    @media (vertical-viewport-segments: 2) and (max-width: 1024px) {
      .posture-header {
        height: 200px;
        left: 50px;
      }

      .posture-header [slot='image'] {
        height: 100px;
      }

      /* Unfortunately on Android the fold is 0 */
      #fold {
        visibility: hidden;
      }

      .segment-text {
        height: 50px;
      }
    }

    @media (horizontal-viewport-segments: 2) and (max-width: 1024px) {
      .posture-header {
        width: env(viewport-segment-left 1 0);
        left: 0;
      }

      .posture-header [slot='image'] {
        width: env(viewport-segment-left 1 0);
      }

      /* Unfortunately on Android the fold is 0 */
      #fold {
        visibility: hidden;
      }

      .segment-text {
        height: 50px;
      }
    }
  `);customElements.define("main-application",Ee);
