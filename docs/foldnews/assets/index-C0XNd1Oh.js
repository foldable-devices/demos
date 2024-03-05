var Ir=Object.defineProperty;var Dr=(t,e,i)=>e in t?Ir(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var b=(t,e,i)=>(Dr(t,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=globalThis,pi=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vi=Symbol(),Vi=new WeakMap;let Ko=class{constructor(e,i,o){if(this._$cssResult$=!0,o!==vi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(pi&&e===void 0){const o=i!==void 0&&i.length===1;o&&(e=Vi.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Vi.set(i,e))}return e}toString(){return this.cssText}};const Hr=t=>new Ko(typeof t=="string"?t:t+"",void 0,vi),Q=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new Ko(i,t,vi)},Fr=(t,e)=>{if(pi)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const o=document.createElement("style"),r=ce.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,t.appendChild(o)}},Ri=pi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const o of e.cssRules)i+=o.cssText;return Hr(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:jr,defineProperty:Br,getOwnPropertyDescriptor:Wr,getOwnPropertyNames:qr,getOwnPropertySymbols:Zr,getPrototypeOf:Kr}=Object,Y=globalThis,Ti=Y.trustedTypes,Xr=Ti?Ti.emptyScript:"",Ce=Y.reactiveElementPolyfillSupport,Bt=(t,e)=>t,pe={toAttribute(t,e){switch(e){case Boolean:t=t?Xr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},fi=(t,e)=>!jr(t,e),Oi={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:fi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Y.litPropertyMetadata??(Y.litPropertyMetadata=new WeakMap);let ht=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=Oi){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(e,i),!i.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,i);r!==void 0&&Br(this.prototype,e,r)}}static getPropertyDescriptor(e,i,o){const{get:r,set:s}=Wr(this.prototype,e)??{get(){return this[i]},set(n){this[i]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const l=r==null?void 0:r.call(this);s.call(this,n),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Oi}static _$Ei(){if(this.hasOwnProperty(Bt("elementProperties")))return;const e=Kr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Bt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Bt("properties"))){const i=this.properties,o=[...qr(i),...Zr(i)];for(const r of o)this.createProperty(r,i[r])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[o,r]of i)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const r=this._$Eu(i,o);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const r of o)i.unshift(Ri(r))}else e!==void 0&&i.push(Ri(e));return i}static _$Eu(e,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var i;(i=this._$EO)==null||i.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fr(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var o;return(o=i.hostConnected)==null?void 0:o.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(i=>{var o;return(o=i.hostDisconnected)==null?void 0:o.call(i)})}attributeChangedCallback(e,i,o){this._$AK(e,o)}_$EC(e,i){var s;const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(r!==void 0&&o.reflect===!0){const n=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:pe).toAttribute(i,o.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,i){var s;const o=this.constructor,r=o._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const n=o.getPropertyOptions(r),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)==null?void 0:s.fromAttribute)!==void 0?n.converter:pe;this._$Em=r,this[r]=l.fromAttribute(i,n.type),this._$Em=null}}requestUpdate(e,i,o){if(e!==void 0){if(o??(o=this.constructor.getPropertyOptions(e)),!(o.hasChanged??fi)(this[e],i))return;this.P(e,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,i,o){this._$AL.has(e)||this._$AL.set(e,i),o.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,n]of r)n.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],n)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(o=this._$EO)==null||o.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(i)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(i)}willUpdate(e){}_$AE(e){var i;(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(e){}firstUpdated(e){}};ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},ht[Bt("elementProperties")]=new Map,ht[Bt("finalized")]=new Map,Ce==null||Ce({ReactiveElement:ht}),(Y.reactiveElementVersions??(Y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=globalThis,ve=Wt.trustedTypes,Mi=ve?ve.createPolicy("lit-html",{createHTML:t=>t}):void 0,Xo="$lit$",G=`lit$${(Math.random()+"").slice(9)}$`,Go="?"+G,Gr=`<${Go}>`,nt=document,Xt=()=>nt.createComment(""),Gt=t=>t===null||typeof t!="object"&&typeof t!="function",Yo=Array.isArray,Yr=t=>Yo(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ke=`[ 	
\f\r]`,Rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Li=/-->/g,Ui=/>/g,tt=RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ni=/'/g,Ii=/"/g,Jo=/^(?:script|style|textarea|title)$/i,Jr=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),at=Jr(1),lt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Di=new WeakMap,rt=nt.createTreeWalker(nt,129);function Qo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mi!==void 0?Mi.createHTML(e):e}const Qr=(t,e)=>{const i=t.length-1,o=[];let r,s=e===2?"<svg>":"",n=Rt;for(let l=0;l<i;l++){const a=t[l];let c,d,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,d=n.exec(a),d!==null);)u=n.lastIndex,n===Rt?d[1]==="!--"?n=Li:d[1]!==void 0?n=Ui:d[2]!==void 0?(Jo.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=tt):d[3]!==void 0&&(n=tt):n===tt?d[0]===">"?(n=r??Rt,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?tt:d[3]==='"'?Ii:Ni):n===Ii||n===Ni?n=tt:n===Li||n===Ui?n=Rt:(n=tt,r=void 0);const p=n===tt&&t[l+1].startsWith("/>")?" ":"";s+=n===Rt?a+Gr:h>=0?(o.push(c),a.slice(0,h)+Xo+a.slice(h)+G+p):a+G+(h===-2?l:p)}return[Qo(t,s+(t[i]||"<?>")+(e===2?"</svg>":"")),o]};let ti=class tr{constructor({strings:e,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const l=e.length-1,a=this.parts,[c,d]=Qr(e,i);if(this.el=tr.createElement(c,o),rt.currentNode=this.el.content,i===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=rt.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(Xo)){const u=d[n++],p=r.getAttribute(h).split(G),m=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:m[2],strings:p,ctor:m[1]==="."?es:m[1]==="?"?is:m[1]==="@"?os:$e}),r.removeAttribute(h)}else h.startsWith(G)&&(a.push({type:6,index:s}),r.removeAttribute(h));if(Jo.test(r.tagName)){const h=r.textContent.split(G),u=h.length-1;if(u>0){r.textContent=ve?ve.emptyScript:"";for(let p=0;p<u;p++)r.append(h[p],Xt()),rt.nextNode(),a.push({type:2,index:++s});r.append(h[u],Xt())}}}else if(r.nodeType===8)if(r.data===Go)a.push({type:2,index:s});else{let h=-1;for(;(h=r.data.indexOf(G,h+1))!==-1;)a.push({type:7,index:s}),h+=G.length-1}s++}}static createElement(e,i){const o=nt.createElement("template");return o.innerHTML=e,o}};function bt(t,e,i=t,o){var n,l;if(e===lt)return e;let r=o!==void 0?(n=i._$Co)==null?void 0:n[o]:i._$Cl;const s=Gt(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,i,o)),o!==void 0?(i._$Co??(i._$Co=[]))[o]=r:i._$Cl=r),r!==void 0&&(e=bt(t,r._$AS(t,e.values),r,o)),e}let ts=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:o}=this._$AD,r=((e==null?void 0:e.creationScope)??nt).importNode(i,!0);rt.currentNode=r;let s=rt.nextNode(),n=0,l=0,a=o[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new mi(s,s.nextSibling,this,e):a.type===1?c=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(c=new rs(s,this,e)),this._$AV.push(c),a=o[++l]}n!==(a==null?void 0:a.index)&&(s=rt.nextNode(),n++)}return rt.currentNode=nt,r}p(e){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}},mi=class er{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,i,o,r){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=bt(this,e,i),Gt(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==lt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Yr(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==T&&Gt(this._$AH)?this._$AA.nextSibling.data=e:this.T(nt.createTextNode(e)),this._$AH=e}$(e){var s;const{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ti.createElement(Qo(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(i);else{const n=new ts(r,this),l=n.u(this.options);n.p(i),this.T(l),this._$AH=n}}_$AC(e){let i=Di.get(e.strings);return i===void 0&&Di.set(e.strings,i=new ti(e)),i}k(e){Yo(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of e)r===i.length?i.push(o=new er(this.S(Xt()),this.S(Xt()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(e=this._$AA.nextSibling,i){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,i);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}},$e=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,o,r,s){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=T}_$AI(e,i=this,o,r){const s=this.strings;let n=!1;if(s===void 0)e=bt(this,e,i,0),n=!Gt(e)||e!==this._$AH&&e!==lt,n&&(this._$AH=e);else{const l=e;let a,c;for(e=s[0],a=0;a<s.length-1;a++)c=bt(this,l[o+a],i,a),c===lt&&(c=this._$AH[a]),n||(n=!Gt(c)||c!==this._$AH[a]),c===T?e=T:e!==T&&(e+=(c??"")+s[a+1]),this._$AH[a]=c}n&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},es=class extends $e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},is=class extends $e{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},os=class extends $e{constructor(e,i,o,r,s){super(e,i,o,r,s),this.type=5}_$AI(e,i=this){if((e=bt(this,e,i,0)??T)===lt)return;const o=this._$AH,r=e===T&&o!==T||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==T&&(o===T||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$AH.handleEvent(e)}},rs=class{constructor(e,i,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){bt(this,e)}};const ze=Wt.litHtmlPolyfillSupport;ze==null||ze(ti,mi),(Wt.litHtmlVersions??(Wt.litHtmlVersions=[])).push("3.1.2");const ss=(t,e,i)=>{const o=(i==null?void 0:i.renderBefore)??e;let r=o._$litPart$;if(r===void 0){const s=(i==null?void 0:i.renderBefore)??null;o._$litPart$=r=new mi(e.insertBefore(Xt(),s),s,void 0,i??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let st=class extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const e=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=e.firstChild),e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ss(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return lt}};var Zo;st._$litElement$=!0,st.finalized=!0,(Zo=globalThis.litElementHydrateSupport)==null||Zo.call(globalThis,{LitElement:st});const Pe=globalThis.litElementPolyfillSupport;Pe==null||Pe({LitElement:st});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");function Hi(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var Tt=function(){try{window[N].updateSegments();var t=function(){if(!Ve)return Ve=!0,Promise.resolve(Promise.resolve(!1)).then(function(e){Ve=e,window[N].dispatchEvent(new Event("change"))})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},N="__foldables__",Ve=!1,ir=function(){function t(){var o=this;if(window[N]!==void 0)return window[N];var r=document.createDocumentFragment();this.addEventListener=r.addEventListener.bind(r),this.removeEventListener=r.removeEventListener.bind(r),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof o[n]=="function"&&o[n](s),r.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(o,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var l;return function(){var a=arguments,c=this;clearTimeout(l),l=setTimeout(function(){return s.apply(c,a)},n)}}(Tt(),200)})}var e,i=t.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var r=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,l=r/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:s,left:0,bottom:s+l,right:n,width:n,height:l},s+=o[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var c=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,h=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:h,right:h+c,bottom:d,width:c,height:d},h+=o[u].width,h+=this.foldSize;window.visualViewport.segments=o},i.randomizeSegmentsConfiguration=function(o){var r=Math.random()<.5,s=Math.round(Math.random()*(o-1)+1);r?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(e=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(N+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(N+"-horizontal-viewport-segments",o),Tt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(N+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(N+"-vertical-viewport-segments",o),Tt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(N+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(N+"-fold-size",o),Tt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(N+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(N+"-browser-shell-size",o),Tt()}}])&&function(o,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(t.prototype,e),t}();window[N]=new ir,window.visualViewport.segments===void 0&&window[N].updateSegments();var or="-viewport-segments",gi="(\\s*)(@media.*?\\b"+or+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",ns=/\((.*?)\)/gi,as=/@media[^\(]+/gi,ls=/(horizontal-viewport-segments:)\s?(\d)/gi,cs=/(vertical-viewport-segments:)\s?(\d)/gi,hs=function(t){return new RegExp("env\\(\\s*"+t+"\\s*\\)","gi")};function rr(t,e){return t.replace(new RegExp(gi,"gi"),e)}function Fi(t,e){var i=t.matchAll(e);return i===null?[]:Array.from(i,function(o){return o[2]})[0]}function sr(t){var e=function(o){var r,s=new RegExp(gi,"gi");if(typeof o.matchAll=="function")r=Array.from(o.matchAll(s));else{for(r=[];r[r.length]=s.exec(o););r.length--}return r}(t),i=[[]];return e.forEach(function(o){var r=o[1],s=o[2],n=o[3],l=o[4],a=s.match(as)||[],c=s.match(ns)||[],d=Fi(s,cs);d===void 0&&(d=1);var h=Fi(s,ls);h===void 0&&(h=1),c=c.filter(function(u){return!u.includes(or)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][h]=""+r+a+c+"{"+n+l+"}"}),i}var xe=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+xe);var ji,nr=new ir;if(!xe){var Re=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(ji=Re,Promise.all(ji.map(function(t){return t.href?fetch(t.href).then(function(e){return e.text()}):t.textContent}))).then(function(t){var e=new DocumentFragment;t.forEach(function(i,o){for(var r,s=rr(i,""),n=sr(i),l=Re[o].href||"inline",a=0,c=Object.entries(n);a<c.length;a++){var d=c[a],h=d[0],u=d[1];J[h]==null&&(J[h]=[]);for(var p=0,m=Object.entries(u);p<m.length;p++){var y=m[p];J[h][y[0]]="/* origin: "+l+" */"+y[1]}}if(l=="inline"||(r=i,new RegExp(gi,"gi").test(r))){var v=document.createElement("style");v.setAttribute("data-css-origin",l),v.textContent=s,e.appendChild(v)}else{var g=document.createElement("link");g.type="text/css",g.rel="stylesheet",g.href=l,e.appendChild(g)}}),Re.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(e),bi()})}var J=[[]];function ar(t,e){if(xe)return t;var i=rr(t,""),o=sr(t);e&&(J[e]=[[]]);for(var r=e?J[e]:J,s=e?"":"/* origin: inline */",n=0,l=Object.entries(o);n<l.length;n++){var a=l[n],c=a[0],d=a[1];r[c]==null&&(r[c]=[]);for(var h=0,u=Object.entries(d);h<u.length;h++){var p=u[h];r[c][p[0]]=""+s+p[1]}}return r[0][0]=i,i}function bi(t){xe||(Bi(t),nr.addEventListener("change",function(){return Bi(t)}))}function Bi(t){var e,i=nr,o=null;(e=t?J[t.nodeName.toLowerCase()]:J)[i.verticalViewportSegments]&&(o=e[i.verticalViewportSegments][i.horizontalViewportSegments]);var r,s=e[0][0]?e[0][0]:null;if(o){var n=window.visualViewport.segments,l=!1;n.length>1&&(l=!(n[0].height<window.innerHeight));for(var a=0,c=Object.entries(n);a<c.length;a++)for(var d=c[a],h=d[0],u=0,p=Object.entries(d[1]);u<p.length;u++){var m=p[u],y=m[0];r=m[1]+"px",o=o.replace(hs(l?"viewport-segment-"+y+" "+h+" 0":"viewport-segment-"+y+" 0 "+h),r)}var v="__foldables_sheet__",g=function(k,D){for(var A,x=function(S,re){var L=typeof Symbol<"u"&&S[Symbol.iterator]||S["@@iterator"];if(L)return(L=L.call(S)).next.bind(L);if(Array.isArray(S)||(L=function(M,Vt){if(M){if(typeof M=="string")return Hi(M,Vt);var H=Object.prototype.toString.call(M).slice(8,-1);return H==="Object"&&M.constructor&&(H=M.constructor.name),H==="Map"||H==="Set"?Array.from(M):H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H)?Hi(M,Vt):void 0}}(S))){L&&(S=L);var Pt=0;return function(){return Pt>=S.length?{done:!0}:{done:!1,value:S[Pt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(k.querySelectorAll("."+v));!(A=x()).done;)A.value.remove();var z=document.createElement("style");z.className=v,z.textContent=D,k===document?document.head.appendChild(z):k.appendChild(z)};if(t){var P=t.shadowRoot;"adoptedStyleSheets"in P&&P.adoptedStyleSheets.length>0?P.adoptedStyleSheets[0].replace(s+o):g(P,o)}else g(document,o)}}var ei="";function ii(t){ei=t}function ds(t=""){if(!ei){const e=[...document.getElementsByTagName("script")],i=e.find(o=>o.hasAttribute("data-shoelace"));if(i)ii(i.getAttribute("data-shoelace"));else{const o=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let r="";o&&(r=o.getAttribute("src")),ii(r.split("/").slice(0,-1).join("/"))}}return ei.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var us={name:"default",resolver:t=>ds(`assets/icons/${t}.svg`)},ps=us,Wi={caret:`
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
  `},vs={name:"system",resolver:t=>t in Wi?`data:image/svg+xml,${encodeURIComponent(Wi[t])}`:""},fs=vs,ms=[ps,fs],oi=[];function gs(t){oi.push(t)}function bs(t){oi=oi.filter(e=>e!==t)}function qi(t){return ms.find(e=>e.name===t)}var ys=Q`
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
`,lr=Object.defineProperty,ws=Object.defineProperties,_s=Object.getOwnPropertyDescriptor,$s=Object.getOwnPropertyDescriptors,Zi=Object.getOwnPropertySymbols,xs=Object.prototype.hasOwnProperty,Ss=Object.prototype.propertyIsEnumerable,Ki=(t,e,i)=>e in t?lr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Et=(t,e)=>{for(var i in e||(e={}))xs.call(e,i)&&Ki(t,i,e[i]);if(Zi)for(var i of Zi(e))Ss.call(e,i)&&Ki(t,i,e[i]);return t},yi=(t,e)=>ws(t,$s(e)),f=(t,e,i,o)=>{for(var r=o>1?void 0:o?_s(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&lr(e,i,r),r};function ie(t,e){const i=Et({waitUntilFirstUpdate:!1},e);return(o,r)=>{const{update:s}=o,n=Array.isArray(t)?t:[t];o.update=function(l){n.forEach(a=>{const c=a;if(l.has(c)){const d=l.get(c),h=this[c];d!==h&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](d,h)}}),s.call(this,l)}}}var oe=Q`
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
 */const As={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:fi},Es=(t=As,e,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,t),o==="accessor"){const{name:n}=i;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,t)},init(l){return l!==void 0&&this.P(n,void 0,t),l}}}if(o==="setter"){const{name:n}=i;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,t)}}throw Error("Unsupported decorator location: "+o)};function w(t){return(e,i)=>typeof i=="object"?Es(t,e,i):((o,r,s)=>{const n=r.hasOwnProperty(s);return r.constructor.createProperty(s,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Se(t){return w({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wi(t,e){return(i,o,r)=>{const s=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(t))??null};if(e){const{get:n,set:l}=typeof o=="object"?i:r??(()=>{const a=Symbol();return{get(){return this[a]},set(c){this[a]=c}}})();return Xi(i,o,{get(){let a=n.call(this);return a===void 0&&(a=s(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return Xi(i,o,{get(){return s(this)}})}}var q=class extends st{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,Et({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){customElements.define(t,class extends e{},i);return}let r=" (unknown version)",s=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(s=" v"+o.version),!(r&&s&&r===s)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${s} has already been registered.`)}};q.version="2.14.0";q.dependencies={};f([w()],q.prototype,"dir",2);f([w()],q.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs=(t,e)=>e===void 0?(t==null?void 0:t._$litType$)!==void 0:(t==null?void 0:t._$litType$)===e;var Ot=Symbol(),se=Symbol(),Te,Oe=new Map,B=class extends q{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(e!=null&&e.spriteSheet)return at`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?Ot:se}catch{return se}try{const r=document.createElement("div");r.innerHTML=await o.text();const s=r.firstElementChild;if(((i=s==null?void 0:s.tagName)==null?void 0:i.toLowerCase())!=="svg")return Ot;Te||(Te=new DOMParser);const l=Te.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Ot}catch{return Ot}}connectedCallback(){super.connectedCallback(),gs(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),bs(this)}getIconSource(){const t=qi(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?qi(this.library):void 0;if(!e){this.svg=null;return}let r=Oe.get(e);if(r||(r=this.resolveIcon(e,o),Oe.set(e,r)),!this.initialRender)return;const s=await r;if(s===se&&Oe.delete(e),e===this.getIconSource().url){if(Cs(s)){this.svg=s;return}switch(s){case se:case Ot:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};B.styles=[oe,ys];f([Se()],B.prototype,"svg",2);f([w({reflect:!0})],B.prototype,"name",2);f([w()],B.prototype,"src",2);f([w()],B.prototype,"label",2);f([w({reflect:!0})],B.prototype,"library",2);f([ie("label")],B.prototype,"handleLabelChange",1);f([ie(["name","src","library"])],B.prototype,"setIcon",1);B.define("sl-icon");var ks=Q`
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
 */const zs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ps=t=>(...e)=>({_$litDirective$:t,values:e});let Vs=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=Ps(class extends Vs{constructor(t){var e;if(super(t),t.type!==zs.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const n=!!e[s];n===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(n?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return lt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr=Symbol.for(""),Rs=t=>{if((t==null?void 0:t.r)===cr)return t==null?void 0:t._$litStatic$},fe=(t,...e)=>({_$litStatic$:e.reduce((i,o,r)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[r+1],t[0]),r:cr}),Gi=new Map,Ts=t=>(e,...i)=>{const o=i.length;let r,s;const n=[],l=[];let a,c=0,d=!1;for(;c<o;){for(a=e[c];c<o&&(s=i[c],(r=Rs(s))!==void 0);)a+=r+e[++c],d=!0;c!==o&&l.push(s),n.push(a),c++}if(c===o&&n.push(e[o]),d){const h=n.join("$$lit$$");(e=Gi.get(h))===void 0&&(n.raw=n,Gi.set(h,e=n)),i=l}return t(e,...i)},he=Ts(at);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=t=>t??T;var F=class extends q{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?fe`a`:fe`button`;return he`
      <${e}
        part="base"
        class=${_i({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${R(t?void 0:this.disabled)}
        type=${R(t?void 0:"button")}
        href=${R(t?this.href:void 0)}
        target=${R(t?this.target:void 0)}
        download=${R(t?this.download:void 0)}
        rel=${R(t&&this.target?"noreferrer noopener":void 0)}
        role=${R(t?void 0:"button")}
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
      </${e}>
    `}};F.styles=[oe,ks];F.dependencies={"sl-icon":B};f([wi(".icon-button")],F.prototype,"button",2);f([Se()],F.prototype,"hasFocus",2);f([w()],F.prototype,"name",2);f([w()],F.prototype,"library",2);f([w()],F.prototype,"src",2);f([w()],F.prototype,"href",2);f([w()],F.prototype,"target",2);f([w()],F.prototype,"download",2);f([w()],F.prototype,"label",2);f([w({type:Boolean,reflect:!0})],F.prototype,"disabled",2);var hr=new Map,Os=new WeakMap;function Ms(t){return t??{keyframes:[],options:{duration:0}}}function Yi(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function dr(t,e){hr.set(t,Ms(e))}function Ji(t,e,i){const o=Os.get(t);if(o!=null&&o[e])return Yi(o[e],i.dir);const r=hr.get(e);return r?Yi(r,i.dir):{keyframes:[],options:{duration:0}}}function Qi(t,e){return new Promise(i=>{function o(r){r.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}function to(t,e,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,yi(Et({},i),{duration:Ls()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function Ls(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function eo(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}var ur=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};const ri=new Set,Us=new MutationObserver(mr),pt=new Map;let pr=document.documentElement.dir||"ltr",vr=document.documentElement.lang||navigator.language,ot;Us.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function fr(...t){t.map(e=>{const i=e.$code.toLowerCase();pt.has(i)?pt.set(i,Object.assign(Object.assign({},pt.get(i)),e)):pt.set(i,e),ot||(ot=e)}),mr()}function mr(){pr=document.documentElement.dir||"ltr",vr=document.documentElement.lang||navigator.language,[...ri.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Ns=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ri.add(this.host)}hostDisconnected(){ri.delete(this.host)}dir(){return`${this.host.dir||pr}`.toLowerCase()}lang(){return`${this.host.lang||vr}`.toLowerCase()}getTranslationData(e){var i,o;const r=new Intl.Locale(e.replace(/_/g,"-")),s=r==null?void 0:r.language.toLowerCase(),n=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",l=pt.get(`${s}-${n}`),a=pt.get(s);return{locale:r,language:s,region:n,primary:l,secondary:a}}exists(e,i){var o;const{primary:r,secondary:s}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||s&&s[e]||i.includeFallback&&ot&&ot[e])}term(e,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let s;if(o&&o[e])s=o[e];else if(r&&r[e])s=r[e];else if(ot&&ot[e])s=ot[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...i):s}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var gr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};fr(gr);var Is=gr,$i=class extends Ns{};fr(Is);var Ds=Q`
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
`,ct=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),W=class extends q{constructor(){super(...arguments),this.hasSlotController=new ur(this,"icon","suffix"),this.localize=new $i(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await eo(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=Ji(this,"alert.show",{dir:this.localize.dir()});await to(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await eo(this.base);const{keyframes:t,options:e}=Ji(this,"alert.hide",{dir:this.localize.dir()});await to(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Qi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Qi(this,"sl-after-hide")}async toast(){return new Promise(t=>{ct.parentElement===null&&document.body.append(ct),ct.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ct.removeChild(this),t(),ct.querySelector("sl-alert")===null&&ct.remove()},{once:!0})})}render(){return at`
      <div
        part="base"
        class=${_i({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?at`
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
    `}};W.styles=[oe,Ds];W.dependencies={"sl-icon-button":F};f([wi('[part~="base"]')],W.prototype,"base",2);f([w({type:Boolean,reflect:!0})],W.prototype,"open",2);f([w({type:Boolean,reflect:!0})],W.prototype,"closable",2);f([w({reflect:!0})],W.prototype,"variant",2);f([w({type:Number})],W.prototype,"duration",2);f([ie("open",{waitUntilFirstUpdate:!0})],W.prototype,"handleOpenChange",1);f([ie("duration")],W.prototype,"handleDurationChange",1);dr("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});dr("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});W.define("sl-alert");var Hs=Q`
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
`,br=class extends q{constructor(){super(...arguments),this.localize=new $i(this)}render(){return at`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};br.styles=[oe,Hs];var Mt=new WeakMap,Lt=new WeakMap,Ut=new WeakMap,Me=new WeakSet,ne=new WeakMap,Fs=class{constructor(t,e){this.handleFormData=i=>{const o=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof r=="string"&&r.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(l=>{i.formData.append(r,l.toString())}):i.formData.append(r,s.toString()))},this.handleFormSubmit=i=>{var o;const r=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=Mt.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!s(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ne.set(this.host,[])},this.handleInteraction=i=>{const o=ne.get(this.host);o.includes(i.type)||o.push(i.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Et({form:i=>{const o=i.form;if(o){const s=i.getRootNode().getElementById(o);if(s)return s}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null?o:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,o)=>i.value=o,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),ne.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ne.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Mt.has(this.form)?Mt.get(this.form).add(this.host):Mt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Lt.has(this.form)||(Lt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ut.has(this.form)||(Ut.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Mt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Lt.has(this.form)&&(this.form.reportValidity=Lt.get(this.form),Lt.delete(this.form)),Ut.has(this.form)&&(this.form.checkValidity=Ut.get(this.form),Ut.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Me.add(t):Me.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{e.hasAttribute(o)&&i.setAttribute(o,e.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!Me.has(e),o=!!e.required;e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},xi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(yi(Et({},xi),{valid:!1,valueMissing:!0}));Object.freeze(yi(Et({},xi),{valid:!1,customError:!0}));var js=Q`
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
`,$=class extends q{constructor(){super(...arguments),this.formControlController=new Fs(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ur(this,"[default]","prefix","suffix"),this.localize=new $i(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:xi}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?fe`a`:fe`button`;return he`
      <${e}
        part="base"
        class=${_i({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${R(t?void 0:this.disabled)}
        type=${R(t?void 0:this.type)}
        title=${this.title}
        name=${R(t?void 0:this.name)}
        value=${R(t?void 0:this.value)}
        href=${R(t?this.href:void 0)}
        target=${R(t?this.target:void 0)}
        download=${R(t?this.download:void 0)}
        rel=${R(t?this.rel:void 0)}
        role=${R(t?void 0:"button")}
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
        ${this.caret?he` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?he`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};$.styles=[oe,js];$.dependencies={"sl-icon":B,"sl-spinner":br};f([wi(".button")],$.prototype,"button",2);f([Se()],$.prototype,"hasFocus",2);f([Se()],$.prototype,"invalid",2);f([w()],$.prototype,"title",2);f([w({reflect:!0})],$.prototype,"variant",2);f([w({reflect:!0})],$.prototype,"size",2);f([w({type:Boolean,reflect:!0})],$.prototype,"caret",2);f([w({type:Boolean,reflect:!0})],$.prototype,"disabled",2);f([w({type:Boolean,reflect:!0})],$.prototype,"loading",2);f([w({type:Boolean,reflect:!0})],$.prototype,"outline",2);f([w({type:Boolean,reflect:!0})],$.prototype,"pill",2);f([w({type:Boolean,reflect:!0})],$.prototype,"circle",2);f([w()],$.prototype,"type",2);f([w()],$.prototype,"name",2);f([w()],$.prototype,"value",2);f([w()],$.prototype,"href",2);f([w()],$.prototype,"target",2);f([w()],$.prototype,"rel",2);f([w()],$.prototype,"download",2);f([w()],$.prototype,"form",2);f([w({attribute:"formaction"})],$.prototype,"formAction",2);f([w({attribute:"formenctype"})],$.prototype,"formEnctype",2);f([w({attribute:"formmethod"})],$.prototype,"formMethod",2);f([w({attribute:"formnovalidate",type:Boolean})],$.prototype,"formNoValidate",2);f([w({attribute:"formtarget"})],$.prototype,"formTarget",2);f([ie("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);$.define("sl-button");const Bs=(t,...e)=>{const i=ar(t[0],"news-article");return Q([i],...e)};class yr extends st{static get properties(){return{picturePosition:{type:String,reflectToAttribute:!0,attribute:!0}}}set picturePosition(e){let i=this._picturePosition;this._picturePosition=e,(window.matchMedia("(min-width: 320px) and (max-width: 1024px)").matches||!1)&&(this._picturePosition="top"),this.requestUpdate("picturePosition",i),this._text&&this._togglePicturePosition()}get picturePosition(){return this._picturePosition}constructor(){super(),this._picturePosition="top"}firstUpdated(){this._text=this.shadowRoot.querySelector("#text"),this._content=this.shadowRoot.querySelector("#content"),this._togglePicturePosition()}_togglePicturePosition(){switch(this._picturePosition){case"left":this._text.classList.add("large-text"),this._content.style.flexDirection="row";break;case"right":this._text.classList.add("large-text"),this._content.style.flexDirection="row-reverse";break;case"top":this._text.classList.remove("large-text"),this._content.style.flexDirection="column";break;case"bottom":this._text.classList.remove("large-text"),this._content.style.flexDirection="column-reverse";break}}connectedCallback(){super.connectedCallback(),bi(this)}render(){return at`
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
    `}}b(yr,"styles",Bs`
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

  `);customElements.define("news-article",yr);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=window,Si=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ai=Symbol(),io=new WeakMap;let wr=class{constructor(e,i,o){if(this._$cssResult$=!0,o!==Ai)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(Si&&e===void 0){const o=i!==void 0&&i.length===1;o&&(e=io.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&io.set(i,e))}return e}toString(){return this.cssText}};const _r=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new wr(i,t,Ai)},oo=Si?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const o of e.cssRules)i+=o.cssText;return(o=>new wr(typeof o=="string"?o:o+"",void 0,Ai))(i)})(t):t;var Le;const me=window,ro=me.trustedTypes,Ws=ro?ro.emptyScript:"",so=me.reactiveElementPolyfillSupport,si={toAttribute(t,e){switch(e){case Boolean:t=t?Ws:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},$r=(t,e)=>e!==t&&(e==e||t==t),Ue={attribute:!0,type:String,converter:si,reflect:!1,hasChanged:$r};let dt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=Ue){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const r=this[t];this[e]=o,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ue}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(oo(o))}else t!==void 0&&e.push(oo(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{Si?i.adoptedStyleSheets=o.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):o.forEach(r=>{const s=document.createElement("style"),n=de.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,i.appendChild(s)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Ue){var o;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:si).toAttribute(e,i.type);this._$El=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,r=o._$Ev.get(t);if(r!==void 0&&this._$El!==r){const s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:si;this._$El=r,this[r]=n.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||$r)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ne;dt.finalized=!0,dt.elementProperties=new Map,dt.elementStyles=[],dt.shadowRootOptions={mode:"open"},so==null||so({ReactiveElement:dt}),((Le=me.reactiveElementVersions)!==null&&Le!==void 0?Le:me.reactiveElementVersions=[]).push("1.6.1");const ge=window,yt=ge.trustedTypes,no=yt?yt.createPolicy("lit-html",{createHTML:t=>t}):void 0,K=`lit$${(Math.random()+"").slice(9)}$`,xr="?"+K,qs=`<${xr}>`,wt=document,Yt=(t="")=>wt.createComment(t),Jt=t=>t===null||typeof t!="object"&&typeof t!="function",ao=Array.isArray,Nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lo=/-->/g,co=/>/g,et=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ho=/'/g,uo=/"/g,po=/^(?:script|style|textarea|title)$/i,Ct=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),_t=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),vo=new WeakMap,ft=wt.createTreeWalker(wt,129,null,!1);let ni=class Sr{constructor({strings:e,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const l=e.length-1,a=this.parts,[c,d]=((h,u)=>{const p=h.length-1,m=[];let y,v=u===2?"<svg>":"",g=Nt;for(let k=0;k<p;k++){const D=h[k];let A,x,z=-1,S=0;for(;S<D.length&&(g.lastIndex=S,x=g.exec(D),x!==null);)S=g.lastIndex,g===Nt?x[1]==="!--"?g=lo:x[1]!==void 0?g=co:x[2]!==void 0?(po.test(x[2])&&(y=RegExp("</"+x[2],"g")),g=et):x[3]!==void 0&&(g=et):g===et?x[0]===">"?(g=y??Nt,z=-1):x[1]===void 0?z=-2:(z=g.lastIndex-x[2].length,A=x[1],g=x[3]===void 0?et:x[3]==='"'?uo:ho):g===uo||g===ho?g=et:g===lo||g===co?g=Nt:(g=et,y=void 0);const re=g===et&&h[k+1].startsWith("/>")?" ":"";v+=g===Nt?D+qs:z>=0?(m.push(A),D.slice(0,z)+"$lit$"+D.slice(z)+K+re):D+K+(z===-2?(m.push(void 0),k):re)}const P=v+(h[p]||"<?>")+(u===2?"</svg>":"");if(!Array.isArray(h)||!h.hasOwnProperty("raw"))throw Error("invalid template strings array");return[no!==void 0?no.createHTML(P):P,m]})(e,i);if(this.el=Sr.createElement(c,o),ft.currentNode=this.el.content,i===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(r=ft.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes()){const h=[];for(const u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(K)){const p=d[n++];if(h.push(u),p!==void 0){const m=r.getAttribute(p.toLowerCase()+"$lit$").split(K),y=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:y[2],strings:m,ctor:y[1]==="."?Zs:y[1]==="?"?Xs:y[1]==="@"?Gs:Ae})}else a.push({type:6,index:s})}for(const u of h)r.removeAttribute(u)}if(po.test(r.tagName)){const h=r.textContent.split(K),u=h.length-1;if(u>0){r.textContent=yt?yt.emptyScript:"";for(let p=0;p<u;p++)r.append(h[p],Yt()),ft.nextNode(),a.push({type:2,index:++s});r.append(h[u],Yt())}}}else if(r.nodeType===8)if(r.data===xr)a.push({type:2,index:s});else{let h=-1;for(;(h=r.data.indexOf(K,h+1))!==-1;)a.push({type:7,index:s}),h+=K.length-1}s++}}static createElement(e,i){const o=wt.createElement("template");return o.innerHTML=e,o}};function $t(t,e,i=t,o){var r,s,n,l;if(e===_t)return e;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const c=Jt(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),c===void 0?a=void 0:(a=new c(t),a._$AT(t,i,o)),o!==void 0?((n=(l=i)._$Co)!==null&&n!==void 0?n:l._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(e=$t(t,a._$AS(t,e.values),a,o)),e}let Ei=class Ar{constructor(e,i,o,r){var s;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=r,this._$Cm=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,i;return(i=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&e.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=$t(this,e,i),Jt(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==_t&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):(o=>ao(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function")(e)?this.k(e):this.g(e)}O(e,i=this._$AB){return this._$AA.parentNode.insertBefore(e,i)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==O&&Jt(this._$AH)?this._$AA.nextSibling.data=e:this.T(wt.createTextNode(e)),this._$AH=e}$(e){var i;const{values:o,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ni.createElement(r.h,this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(o);else{const n=new class{constructor(a,c){this.u=[],this._$AN=void 0,this._$AD=a,this._$AM=c}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(a){var c;const{el:{content:d},parts:h}=this._$AD,u=((c=a==null?void 0:a.creationScope)!==null&&c!==void 0?c:wt).importNode(d,!0);ft.currentNode=u;let p=ft.nextNode(),m=0,y=0,v=h[0];for(;v!==void 0;){if(m===v.index){let g;v.type===2?g=new Ei(p,p.nextSibling,this,a):v.type===1?g=new v.ctor(p,v.name,v.strings,this,a):v.type===6&&(g=new Ys(p,this,a)),this.u.push(g),v=h[++y]}m!==(v==null?void 0:v.index)&&(p=ft.nextNode(),m++)}return u}p(a){let c=0;for(const d of this.u)d!==void 0&&(d.strings!==void 0?(d._$AI(a,d,c),c+=d.strings.length-2):d._$AI(a[c])),c++}}(s,this),l=n.v(this.options);n.p(o),this.T(l),this._$AH=n}}_$AC(e){let i=vo.get(e.strings);return i===void 0&&vo.set(e.strings,i=new ni(e)),i}k(e){ao(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of e)r===i.length?i.push(o=new Ar(this.O(Yt()),this.O(Yt()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(e=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var i;this._$AM===void 0&&(this._$Cm=e,(i=this._$AP)===null||i===void 0||i.call(this,e))}},Ae=class{constructor(t,e,i,o,r){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const r=this.strings;let s=!1;if(r===void 0)t=$t(this,t,e,0),s=!Jt(t)||t!==this._$AH&&t!==_t,s&&(this._$AH=t);else{const n=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=$t(this,n[i+l],e,l),a===_t&&(a=this._$AH[l]),s||(s=!Jt(a)||a!==this._$AH[l]),a===O?t=O:t!==O&&(t+=(a??"")+r[l+1]),this._$AH[l]=a}s&&!o&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Zs=class extends Ae{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}};const Ks=yt?yt.emptyScript:"";let Xs=class extends Ae{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,Ks):this.element.removeAttribute(this.name)}},Gs=class extends Ae{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=$t(this,t,e,0))!==null&&i!==void 0?i:O)===_t)return;const o=this._$AH,r=t===O&&o!==O||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==O&&(o===O||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Ys=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){$t(this,t)}};const fo=ge.litHtmlPolyfillSupport;fo==null||fo(ni,Ei),((Ne=ge.litHtmlVersions)!==null&&Ne!==void 0?Ne:ge.litHtmlVersions=[]).push("2.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ie,De;let mt=class extends dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((i,o,r)=>{var s,n;const l=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:o;let a=l._$litPart$;if(a===void 0){const c=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=a=new Ei(o.insertBefore(Yt(),c),c,void 0,r??{})}return a._$AI(i),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return _t}};mt.finalized=!0,mt._$litElement$=!0,(Ie=globalThis.litElementHydrateSupport)===null||Ie===void 0||Ie.call(globalThis,{LitElement:mt});const mo=globalThis.litElementPolyfillSupport;mo==null||mo({LitElement:mt}),((De=globalThis.litElementVersions)!==null&&De!==void 0?De:globalThis.litElementVersions=[]).push("3.2.2");var He,Fe,ue=window,Ci=ue.ShadowRoot&&(ue.ShadyCSS===void 0||ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ki=Symbol(),go=new WeakMap,Er=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ki)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ci&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=go.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&go.set(e,t))}return t}toString(){return this.cssText}},je=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new Er(i,t,ki)},bo=Ci?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const o of e.cssRules)i+=o.cssText;return(o=>new Er(typeof o=="string"?o:o+"",void 0,ki))(i)})(t):t,be=window,yo=be.trustedTypes,Js=yo?yo.emptyScript:"",wo=be.reactiveElementPolyfillSupport,Qt={toAttribute(t,e){switch(e){case Boolean:t=t?Js:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Cr=(t,e)=>e!==t&&(e==e||t==t),Be={attribute:!0,type:String,converter:Qt,reflect:!1,hasChanged:Cr},ut=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=Be){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const r=this[t];this[e]=o,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Be}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(bo(o))}else t!==void 0&&e.push(bo(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{Ci?i.adoptedStyleSheets=o.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):o.forEach(r=>{const s=document.createElement("style"),n=ue.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,i.appendChild(s)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Be){var o;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Qt).toAttribute(e,i.type);this._$El=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,r=o._$Ev.get(t);if(r!==void 0&&this._$El!==r){const s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:Qt;this._$El=r,this[r]=n.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Cr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ut.finalized=!0,ut.elementProperties=new Map,ut.elementStyles=[],ut.shadowRootOptions={mode:"open"},wo==null||wo({ReactiveElement:ut}),((He=be.reactiveElementVersions)!==null&&He!==void 0?He:be.reactiveElementVersions=[]).push("1.6.1");var _o,ye=window,xt=ye.trustedTypes,$o=xt?xt.createPolicy("lit-html",{createHTML:t=>t}):void 0,X=`lit$${(Math.random()+"").slice(9)}$`,kr="?"+X,Qs=`<${kr}>`,St=document,te=(t="")=>St.createComment(t),ee=t=>t===null||typeof t!="object"&&typeof t!="function",xo=Array.isArray,It=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,So=/-->/g,Ao=/>/g,it=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Eo=/'/g,Co=/"/g,ko=/^(?:script|style|textarea|title)$/i,zo=(_o=1,(t,...e)=>({_$litType$:_o,strings:t,values:e})),j=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Po=new WeakMap,gt=St.createTreeWalker(St,129,null,!1),we=class{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,s=0;const n=t.length-1,l=this.parts,[a,c]=((d,h)=>{const u=d.length-1,p=[];let m,y=h===2?"<svg>":"",v=It;for(let P=0;P<u;P++){const k=d[P];let D,A,x=-1,z=0;for(;z<k.length&&(v.lastIndex=z,A=v.exec(k),A!==null);)z=v.lastIndex,v===It?A[1]==="!--"?v=So:A[1]!==void 0?v=Ao:A[2]!==void 0?(ko.test(A[2])&&(m=RegExp("</"+A[2],"g")),v=it):A[3]!==void 0&&(v=it):v===it?A[0]===">"?(v=m??It,x=-1):A[1]===void 0?x=-2:(x=v.lastIndex-A[2].length,D=A[1],v=A[3]===void 0?it:A[3]==='"'?Co:Eo):v===Co||v===Eo?v=it:v===So||v===Ao?v=It:(v=it,m=void 0);const S=v===it&&d[P+1].startsWith("/>")?" ":"";y+=v===It?k+Qs:x>=0?(p.push(D),k.slice(0,x)+"$lit$"+k.slice(x)+X+S):k+X+(x===-2?(p.push(void 0),P):S)}const g=y+(d[u]||"<?>")+(h===2?"</svg>":"");if(!Array.isArray(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return[$o!==void 0?$o.createHTML(g):g,p]})(t,e);if(this.el=we.createElement(a,i),gt.currentNode=this.el.content,e===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(o=gt.nextNode())!==null&&l.length<n;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const h of o.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(X)){const u=c[s++];if(d.push(h),u!==void 0){const p=o.getAttribute(u.toLowerCase()+"$lit$").split(X),m=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:m[2],strings:p,ctor:m[1]==="."?tn:m[1]==="?"?on:m[1]==="@"?rn:Ee})}else l.push({type:6,index:r})}for(const h of d)o.removeAttribute(h)}if(ko.test(o.tagName)){const d=o.textContent.split(X),h=d.length-1;if(h>0){o.textContent=xt?xt.emptyScript:"";for(let u=0;u<h;u++)o.append(d[u],te()),gt.nextNode(),l.push({type:2,index:++r});o.append(d[h],te())}}}else if(o.nodeType===8)if(o.data===kr)l.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(X,d+1))!==-1;)l.push({type:7,index:r}),d+=X.length-1}r++}}static createElement(t,e){const i=St.createElement("template");return i.innerHTML=t,i}};function At(t,e,i=t,o){var r,s,n,l;if(e===j)return e;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const c=ee(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),c===void 0?a=void 0:(a=new c(t),a._$AT(t,i,o)),o!==void 0?((n=(l=i)._$Co)!==null&&n!==void 0?n:l._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(e=At(t,a._$AS(t,e.values),a,o)),e}var _e=class{constructor(t,e,i,o){var r;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=At(this,t,e),ee(t)?t===V||t==null||t===""?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==j&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(i=>xo(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function")(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==V&&ee(this._$AH)?this._$AA.nextSibling.data=t:this.T(St.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=we.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(i);else{const s=new class{constructor(l,a){this.u=[],this._$AN=void 0,this._$AD=l,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(l){var a;const{el:{content:c},parts:d}=this._$AD,h=((a=l==null?void 0:l.creationScope)!==null&&a!==void 0?a:St).importNode(c,!0);gt.currentNode=h;let u=gt.nextNode(),p=0,m=0,y=d[0];for(;y!==void 0;){if(p===y.index){let v;y.type===2?v=new _e(u,u.nextSibling,this,l):y.type===1?v=new y.ctor(u,y.name,y.strings,this,l):y.type===6&&(v=new sn(u,this,l)),this.u.push(v),y=d[++m]}p!==(y==null?void 0:y.index)&&(u=gt.nextNode(),p++)}return h}p(l){let a=0;for(const c of this.u)c!==void 0&&(c.strings!==void 0?(c._$AI(l,c,a),a+=c.strings.length-2):c._$AI(l[a])),a++}}(r,this),n=s.v(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(t){let e=Po.get(t.strings);return e===void 0&&Po.set(t.strings,e=new we(t)),e}k(t){xo(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new _e(this.O(te()),this.O(te()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ee=class{constructor(t,e,i,o,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const r=this.strings;let s=!1;if(r===void 0)t=At(this,t,e,0),s=!ee(t)||t!==this._$AH&&t!==j,s&&(this._$AH=t);else{const n=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=At(this,n[i+l],e,l),a===j&&(a=this._$AH[l]),s||(s=!ee(a)||a!==this._$AH[l]),a===V?t=V:t!==V&&(t+=(a??"")+r[l+1]),this._$AH[l]=a}s&&!o&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},tn=class extends Ee{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}},en=xt?xt.emptyScript:"",on=class extends Ee{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,en):this.element.removeAttribute(this.name)}},rn=class extends Ee{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=At(this,t,e,0))!==null&&i!==void 0?i:V)===j)return;const o=this._$AH,r=t===V&&o!==V||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==V&&(o===V||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},sn=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){At(this,t)}},Vo=ye.litHtmlPolyfillSupport;Vo==null||Vo(we,_e),((Fe=ye.litHtmlVersions)!==null&&Fe!==void 0?Fe:ye.litHtmlVersions=[]).push("2.6.1");var We,qe,qt=class extends ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((i,o,r)=>{var s,n;const l=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:o;let a=l._$litPart$;if(a===void 0){const c=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=a=new _e(o.insertBefore(te(),c),c,void 0,r??{})}return a._$AI(i),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return j}};qt.finalized=!0,qt._$litElement$=!0,(We=globalThis.litElementHydrateSupport)===null||We===void 0||We.call(globalThis,{LitElement:qt});var Ro=globalThis.litElementPolyfillSupport;Ro==null||Ro({LitElement:qt}),((qe=globalThis.litElementVersions)!==null&&qe!==void 0?qe:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var Zt,nn=je`
  ${je`
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
  ${je`
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
`,ai=1,To=3,Oo=4,zr=t=>(...e)=>({_$litDirective$:t,values:e}),Pr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},an={},ln=zr(class extends Pr{constructor(t){if(super(t),t.type!==To&&t.type!==ai&&t.type!==Oo)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>e.strings===void 0)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===j||e===V)return e;const i=t.element,o=t.name;if(t.type===To){if(e===i[o])return j}else if(t.type===Oo){if(!!e===i.hasAttribute(o))return j}else if(t.type===ai&&i.getAttribute(o)===e+"")return j;return((r,s=an)=>{r._$AH=s})(t),e}}),Vr=Object.defineProperty,cn=Object.defineProperties,hn=Object.getOwnPropertyDescriptor,dn=Object.getOwnPropertyDescriptors,Mo=Object.getOwnPropertySymbols,un=Object.prototype.hasOwnProperty,pn=Object.prototype.propertyIsEnumerable,Lo=(t,e,i)=>e in t?Vr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,kt=(t,e)=>{for(var i in e||(e={}))un.call(e,i)&&Lo(t,i,e[i]);if(Mo)for(var i of Mo(e))pn.call(e,i)&&Lo(t,i,e[i]);return t},zi=(t,e)=>cn(t,dn(e)),C=(t,e,i,o)=>{for(var r,s=o>1?void 0:o?hn(e,i):e,n=t.length-1;n>=0;n--)(r=t[n])&&(s=(o?r(e,i,s):r(s))||s);return o&&s&&Vr(e,i,s),s},Dt=new WeakMap,Uo=new WeakMap,Ht=new WeakMap,li=new Set,vn=new MutationObserver(Or),vt=new Map,Rr=document.documentElement.dir||"ltr",Tr=document.documentElement.lang||navigator.language;function Or(){Rr=document.documentElement.dir||"ltr",Tr=document.documentElement.lang||navigator.language,[...li.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}vn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var fn=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){li.add(this.host)}hostDisconnected(){li.delete(this.host)}dir(){return`${this.host.dir||Rr}`.toLowerCase()}lang(){return`${this.host.lang||Tr}`.toLowerCase()}term(t,...e){var i,o;const r=new Intl.Locale(this.lang()),s=r==null?void 0:r.language.toLowerCase(),n=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",l=vt.get(`${s}-${n}`),a=vt.get(s);let c;if(l&&l[t])c=l[t];else if(a&&a[t])c=a[t];else{if(!Zt||!Zt[t])return console.error(`No translation found for: ${String(t)}`),String(t);c=Zt[t]}return typeof c=="function"?c(...e):c}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}},mn=class extends fn{};(function(...t){t.map(e=>{const i=e.$code.toLowerCase();vt.has(i)?vt.set(i,Object.assign(Object.assign({},vt.get(i)),e)):vt.set(i,e),Zt||(Zt=e)}),Or()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var ae=t=>t??V;function Ze(t,e){const i=kt({waitUntilFirstUpdate:!1},e);return(o,r)=>{const{update:s}=o,n=Array.isArray(t)?t:[t];o.update=function(l){n.forEach(a=>{const c=a;if(l.has(c)){const d=l.get(c),h=this[c];d!==h&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[r](d,h))}}),s.call(this,l)}}}var No=zr(class extends Pr{constructor(t){var e;if(super(t),t.type!==ai||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,o;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.nt.add(s);return this.render(e)}const r=t.element.classList;this.nt.forEach(s=>{s in e||(r.remove(s),this.nt.delete(s))});for(const s in e){const n=!!e[s];n===this.nt.has(s)||!((o=this.st)===null||o===void 0)&&o.has(s)||(n?(r.add(s),this.nt.add(s)):(r.remove(s),this.nt.delete(s)))}return j}}),gn=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?zi(kt({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function U(t){return(e,i)=>i!==void 0?((o,r,s)=>{r.constructor.createProperty(s,o)})(t,e,i):gn(t,e)}function Io(t){return U(zi(kt({},t),{state:!0}))}var Ke,bn=({finisher:t,descriptor:e})=>(i,o)=>{var r;if(o===void 0){const s=(r=i.originalKey)!==null&&r!==void 0?r:i.key,n=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:zi(kt({},i),{key:s});return t!=null&&(n.finisher=function(l){t(l,s)}),n}{const s=i.constructor;e!==void 0&&Object.defineProperty(i,o,e(o)),t==null||t(s,o)}};function Do(t,e){return bn({descriptor:i=>{const o={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const r=typeof i=="symbol"?Symbol():"__"+i;o.get=function(){var s,n;return this[r]===void 0&&(this[r]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&n!==void 0?n:null),this[r]}}return o}})}(Ke=window.HTMLSlotElement)===null||Ke===void 0||Ke.prototype.assignedElements;var ci=class extends qt{emit(t,e){const i=new CustomEvent(t,kt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}};C([U()],ci.prototype,"dir",2),C([U()],ci.prototype,"lang",2);/*! Bundled license information:

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
*/var Xe,E=class extends ci{constructor(){super(...arguments),this.formControlController=new class{constructor(t,e){(this.host=t).addController(this),this.options=kt({form:i=>{if(i.hasAttribute("form")&&i.getAttribute("form")!==""){const o=i.getRootNode(),r=i.getAttribute("form");if(r)return o.getElementById(r)}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null&&o},reportValidity:i=>typeof i.reportValidity!="function"||i.reportValidity(),setValue:(i,o)=>i.value=o},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(t){t?(this.form=t,Dt.has(this.form)?Dt.get(this.form).add(this.host):Dt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ht.has(this.form)||(Ht.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=Dt.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ht.has(this.form)&&(this.form.reportValidity=Ht.get(this.form),Ht.delete(this.form))),this.form=void 0}handleFormData(t){const e=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="sl-button";!e&&!r&&typeof i=="string"&&i.length>0&&o!==void 0&&(Array.isArray(o)?o.forEach(s=>{t.formData.append(i,s.toString())}):t.formData.append(i,o.toString()))}handleFormSubmit(t){var e;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((e=Dt.get(this.form))==null||e.forEach(r=>{this.setUserInteracted(r,!0)})),!this.form||this.form.noValidate||i||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if(typeof e.reportValidity=="function"&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){Uo.set(t,e),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{e.hasAttribute(o)&&i.setAttribute(o,e.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){var e;const i=this.host,o=!!Uo.get(i),r=!!i.required;(e=this.form)!=null&&e.noValidate?(i.removeAttribute("data-required"),i.removeAttribute("data-optional"),i.removeAttribute("data-invalid"),i.removeAttribute("data-valid"),i.removeAttribute("data-user-invalid"),i.removeAttribute("data-user-valid")):(i.toggleAttribute("data-required",r),i.toggleAttribute("data-optional",!r),i.toggleAttribute("data-invalid",!t),i.toggleAttribute("data-valid",t),i.toggleAttribute("data-user-invalid",!t&&o),i.toggleAttribute("data-user-valid",t&&o))}updateValidity(){const t=this.host;this.setValidity(t.checkValidity())}}(this),this.hasSlotController=new class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}}(this,"help-text","label"),this.localize=new mn(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",100*t+"%")}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,i=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=e*t;if(this.localize.dir()==="rtl"){const s=`${e-r}px + ${t} * ${o}`;this.output.style.translate=`calc((${s} - ${i/2}px - ${o} / 2))`}else{const s=`${r}px - ${t} * ${o}`;this.output.style.translate=`calc(${s} - ${i/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.syncTooltip(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e;return zo`
      <div
        part="form-control"
        class=${No({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
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
            class=${No({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${ae(this.name)}
              ?disabled=${this.disabled}
              min=${ae(this.min)}
              max=${ae(this.max)}
              step=${ae(this.step)}
              .value=${ln(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip==="none"||this.disabled?"":zo`
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
    `}};function Ho(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}E.styles=nn,C([Do(".range__control")],E.prototype,"input",2),C([Do(".range__tooltip")],E.prototype,"output",2),C([Io()],E.prototype,"hasFocus",2),C([Io()],E.prototype,"hasTooltip",2),C([U()],E.prototype,"title",2),C([U()],E.prototype,"name",2),C([U({type:Number})],E.prototype,"value",2),C([U()],E.prototype,"label",2),C([U({attribute:"help-text"})],E.prototype,"helpText",2),C([U({type:Boolean,reflect:!0})],E.prototype,"disabled",2),C([U({type:Number})],E.prototype,"min",2),C([U({type:Number})],E.prototype,"max",2),C([U({type:Number})],E.prototype,"step",2),C([U()],E.prototype,"tooltip",2),C([U({attribute:!1})],E.prototype,"tooltipFormatter",2),C([U({reflect:!0})],E.prototype,"form",2),C([((t="value")=>(e,i)=>{const o=e.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,n,l){var a;const c=o.getPropertyOptions(t);if(s===(typeof c.attribute=="string"?c.attribute:t)){const d=c.converter||Qt,h=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:Qt.fromAttribute)(l,c.type);this[t]!==h&&(this[i]=h)}r.call(this,s,n,l)}})()],E.prototype,"defaultValue",2),C([Ze("value",{waitUntilFirstUpdate:!0})],E.prototype,"handleValueChange",1),C([Ze("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1),C([Ze("hasTooltip",{waitUntilFirstUpdate:!0})],E.prototype,"syncRange",1),E=C([(Xe="sl-range",t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(Xe,t):((e,i)=>{const{kind:o,elements:r}=i;return{kind:o,elements:r,finisher(s){customElements.define(e,s)}}})(Xe,t))],E);var Ft=function(){try{window[I].updateSegments();var t=function(){if(!Ge)return Ge=!0,Promise.resolve(Promise.resolve(!1)).then(function(e){Ge=e,window[I].dispatchEvent(new Event("change"))})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},I="__foldables__",Ge=!1,Pi=function(){function t(){var o=this;if(window[I]!==void 0)return window[I];var r=document.createDocumentFragment();this.addEventListener=r.addEventListener.bind(r),this.removeEventListener=r.removeEventListener.bind(r),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof o[n]=="function"&&o[n](s),r.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(o,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var l;return function(){var a=arguments,c=this;clearTimeout(l),l=setTimeout(function(){return s.apply(c,a)},n)}}(Ft(),200)})}var e,i=t.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var r=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,l=r/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:s,left:0,bottom:s+l,right:n,width:n,height:l},s+=o[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var c=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,h=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:h,right:h+c,bottom:d,width:c,height:d},h+=o[u].width,h+=this.foldSize;window.visualViewport.segments=o},i.randomizeSegmentsConfiguration=function(o){var r=Math.random()<.5,s=Math.round(Math.random()*(o-1)+1);r?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(e=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(I+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(I+"-horizontal-viewport-segments",o),Ft()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(I+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(I+"-vertical-viewport-segments",o),Ft()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(I+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(I+"-fold-size",o),Ft()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(I+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(I+"-browser-shell-size",o),Ft()}}])&&function(o,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(t.prototype,e),t}();window[I]=new Pi,window.visualViewport.segments===void 0&&window[I].updateSegments();var Mr="-viewport-segments",hi="(\\s*)(@media.*?\\b"+Mr+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",yn=/\((.*?)\)/gi,wn=/@media[^\(]+/gi,_n=/(horizontal-viewport-segments:)\s?(\d)/gi,$n=/(vertical-viewport-segments:)\s?(\d)/gi,xn=function(t){return new RegExp("env\\(\\s*"+t+"\\s*\\)","gi")};function Fo(t,e){var i=t.matchAll(e);return i===null?[]:Array.from(i,function(o){return o[2]})[0]}function Sn(t){var e=function(o){var r,s=new RegExp(hi,"gi");if(typeof o.matchAll=="function")r=Array.from(o.matchAll(s));else{for(r=[];r[r.length]=s.exec(o););r.length--}return r}(t),i=[[]];return e.forEach(function(o){var r=o[1],s=o[2],n=o[3],l=o[4],a=s.match(wn)||[],c=s.match(yn)||[],d=Fo(s,$n);d===void 0&&(d=1);var h=Fo(s,_n);h===void 0&&(h=1),c=c.filter(function(u){return!u.includes(Mr)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][h]=""+r+a+c+"{"+n+l+"}"}),i}var di=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+di);var jo,Lr=new Pi;if(!di){var Ye=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(jo=Ye,Promise.all(jo.map(function(t){return t.href?fetch(t.href).then(function(e){return e.text()}):t.textContent}))).then(function(t){var e=new DocumentFragment;t.forEach(function(i,o){for(var r,s=function(P,k){return P.replace(new RegExp(hi,"gi"),k)}(i,""),n=Sn(i),l=Ye[o].href||"inline",a=0,c=Object.entries(n);a<c.length;a++){var d=c[a],h=d[0],u=d[1];Kt[h]==null&&(Kt[h]=[]);for(var p=0,m=Object.entries(u);p<m.length;p++){var y=m[p];Kt[h][y[0]]="/* origin: "+l+" */"+y[1]}}if(l=="inline"||(r=i,new RegExp(hi,"gi").test(r))){var v=document.createElement("style");v.setAttribute("data-css-origin",l),v.textContent=s,e.appendChild(v)}else{var g=document.createElement("link");g.type="text/css",g.rel="stylesheet",g.href=l,e.appendChild(g)}}),Ye.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(e),function(i){di||(Bo(i),Lr.addEventListener("change",function(){return Bo(i)}))}()})}var Kt=[[]];function Bo(t){var e,i=Lr,o=null;(e=t?Kt[t.nodeName.toLowerCase()]:Kt)[i.verticalViewportSegments]&&(o=e[i.verticalViewportSegments][i.horizontalViewportSegments]);var r,s=e[0][0]?e[0][0]:null;if(o){var n=window.visualViewport.segments,l=!1;n.length>1&&(l=!(n[0].height<window.innerHeight));for(var a=0,c=Object.entries(n);a<c.length;a++)for(var d=c[a],h=d[0],u=0,p=Object.entries(d[1]);u<p.length;u++){var m=p[u],y=m[0];r=m[1]+"px",o=o.replace(xn(l?"viewport-segment-"+y+" "+h+" 0":"viewport-segment-"+y+" 0 "+h),r)}var v="__foldables_sheet__",g=function(k,D){for(var A,x=function(S,re){var L=typeof Symbol<"u"&&S[Symbol.iterator]||S["@@iterator"];if(L)return(L=L.call(S)).next.bind(L);if(Array.isArray(S)||(L=function(M,Vt){if(M){if(typeof M=="string")return Ho(M,Vt);var H=Object.prototype.toString.call(M).slice(8,-1);return H==="Object"&&M.constructor&&(H=M.constructor.name),H==="Map"||H==="Set"?Array.from(M):H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H)?Ho(M,Vt):void 0}}(S))){L&&(S=L);var Pt=0;return function(){return Pt>=S.length?{done:!0}:{done:!1,value:S[Pt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(k.querySelectorAll("."+v));!(A=x()).done;)A.value.remove();var z=document.createElement("style");z.className=v,z.textContent=D,k===document?document.head.appendChild(z):k.appendChild(z)};if(t){var P=t.shadowRoot;"adoptedStyleSheets"in P&&P.adoptedStyleSheets.length>0?P.adoptedStyleSheets[0].replace(s+o):g(P,o)}else g(document,o)}}const Z={Foldable:"foldable",Dual:"dual"};class zt extends mt{}b(zt,"styles",_r`
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
  `);customElements.define("close-icon",class extends zt{render(){return Ct`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}});customElements.define("fullscreen-icon",class extends zt{render(){return Ct`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}});customElements.define("splitview-icon",class extends zt{render(){return Ct`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}});customElements.define("rotate-icon",class extends zt{render(){return Ct`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}});customElements.define("minimize-icon",class extends zt{render(){return Ct`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}});class Ur extends mt{constructor(){super();b(this,"_mini_configurator_header");b(this,"_mini_configurator");b(this,"_configurator");b(this,"_configurator_header");b(this,"_device_type_select");b(this,"_orientation_select");b(this,"_seam_slider");b(this,"_seam_container");b(this,"_preview");b(this,"_preview_container");b(this,"_device");b(this,"_frame");b(this,"_device_hinge");b(this,"_currentOrientation");b(this,"_currentDevice");b(this,"_isFullscreen",!1);b(this,"_verticalViewportSegments",1);b(this,"_horizontalViewportSegments",1);b(this,"_fold_width");b(this,"_browser_shell_size");b(this,"_x",0);b(this,"_y",0);b(this,"_offset_x",0);b(this,"_offset_y",0);b(this,"_resizeHandler");b(this,"_handleKeyUp",i=>{i.keyCode==73&&i.ctrlKey&&this._showMiniConfigurator()});b(this,"_startDragMiniConfigurator",async i=>{this._startDrag(i),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove});b(this,"_startDragConfigurator",async i=>{this._startDrag(i),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove});b(this,"_startDrag",async i=>{this._isFullscreen||(this._moved=!1,this._x=i.clientX-this._offset_x,this._y=i.clientY-this._offset_y,this._pointerId=i.pointerId,i.preventDefault())});b(this,"_miniConfiguratorMove",async i=>{this._pointerMove(i),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}});b(this,"_pointerMove",async i=>{if(i.clientY<0||i.clientX<0||i.clientX>window.innerWidth||i.clientY>window.innerHeight)return;let o=i.clientX-this._x,r=i.clientY-this._y;const s=window.getComputedStyle(this.shadowRoot.host),n=parseFloat(s.width),l=parseFloat(s.height);o<0&&(o=0),r<0&&(r=0),r+l>=window.innerHeight&&(r=window.innerHeight-l),o+n>=window.innerWidth&&(o=window.innerWidth-n),this._updateConfiguratorPosition(o,r),i.preventDefault()});b(this,"_stopDragConfigurator",async i=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});b(this,"_stopDragMiniConfigurator",async i=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});b(this,"_stopDrag",async i=>{this._x=this._offset_x,this._y=this._offset_y});b(this,"_onResize",async i=>{this._handleAsusSpanning()});b(this,"_seamValueUpdated",async()=>{this.foldWidth=this._seam_slider.value,this.shadowRoot.host.style.setProperty("--device-fold-width",this.foldWidth+"px"),this._updateFoldablesFeature()});b(this,"_rotationFinished",i=>{this._preview.style.transition=""});this._verticalViewportSegments=1,this._horizontalViewportSegments=1}static get properties(){return{verticalViewportSegments:{type:Number},horizontalViewportSegments:{type:Number}}}_inIframe(){try{return window.self!==window.top}catch{return!0}}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches)return console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this);const i=window.getComputedStyle(this.shadowRoot.host);parseFloat(i.width);const o=parseFloat(i.height);this._updateConfiguratorPosition(20,window.innerHeight-o-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._verticalViewportSegments=1,this._horizontalViewportSegments=1,this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="portrait",this._deviceType=Z.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.horizontalViewportSegments=1,this.verticalViewportSegments=2,this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{this._addZenbookVariables(document.styleSheets[0]),this._addZenbookVariables(this._frame.contentDocument.styleSheets[0])},300)):(this.horizontalViewportSegments=1,this.verticalViewportSegments=1,this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this._orientationFromSegments()}_orientationFromSegments(){return this.horizontalViewportSegments===2&&this.verticalViewportSegments===1?"portrait":this.horizontalViewportSegments===1&&this.verticalViewportSegments===2?"landscape":"portrait"}_addZenbookVariables(i){i.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",i.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(i){this._fold_width=Math.max(0,i)}_orientationChanged(i){const o=this._orientation_select.selectedIndex;this._orientation_select[o].value==="portrait"?(this.horizontalViewportSegments=2,this.verticalViewportSegments=1):(this.horizontalViewportSegments=1,this.verticalViewportSegments=2),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){this._orientationFromSegments()!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this._orientationFromSegments(),this.horizontalViewportSegments===1&&this.verticalViewportSegments===1?this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation():this.horizontalViewportSegments===2?this._applyVerticalRotation():this._applyHorizontalRotation()}get horizontalViewportSegments(){return this._horizontalViewportSegments}set horizontalViewportSegments(i){let o=this._horizontalViewportSegments;this._orientation_select.selectedIndex=i===2?0:1,this._horizontalViewportSegments=i,this.requestUpdate("horizontalViewportSegments",o)}get verticalViewportSegments(){return this._verticalViewportSegments}set verticalViewportSegments(i){let o=this._verticalViewportSegments;this._orientation_select.selectedIndex=i===2?1:0,this._verticalViewportSegments=i,this.requestUpdate("verticalViewportSegments",o)}_deviceTypeChanged(i){const o=this._device_type_select.selectedIndex,r=this._device_type_select[o].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(this.verticalViewportSegments=1,this.horizontalViewportSegments=2,this._currentOrientation="portrait"),r){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this.foldWidth=24,this._deviceType=Z.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Z.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Z.Dual,this.foldWidth=28,this._currentDevice="duo";break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=Z.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Z.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this.verticalViewportSegments=1,this.horizontalViewportSegments=1,this._currentOrientation="portrait",this._currentDevice="duo",this.foldWidth=0,this._deviceType=Z.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature(),this._frame.contentWindow.location.reload(!0)}_calculateAndApplyScaleFactor(){const i=window.getComputedStyle(this._preview_container),o=window.getComputedStyle(this._device),r=parseInt(i.width,10),s=parseInt(i.height,10);let n=parseInt(o.width,10),l=parseInt(o.height,10),a=1;if(this._currentOrientation==="landscape"&&(n=parseInt(o.height,10),l=parseInt(o.width,10)),l>s||n>r){const c=s/l,d=r/n;a=d<c?d:c}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*a)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px")}this._deviceType===Z.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const i=new Pi;i.foldSize=this.foldWidth,i.horizontalViewportSegments=this.horizontalViewportSegments,i.verticalViewportSegments=this.verticalViewportSegments,this._seam_slider.value=this.foldWidth}_debounce(i,o){let r;return function(){clearTimeout(r),r=setTimeout(()=>i.apply(this,arguments),o)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let i=this._offset_x,o=this._offset_y;const r=window.getComputedStyle(this.shadowRoot.host),s=parseFloat(r.width),n=parseFloat(r.height);this._offset_y+n>=window.innerHeight&&(o=window.innerHeight-n),this._offset_x+s>=window.innerWidth&&(i=window.innerWidth-s),this._updateConfiguratorPosition(i,o),this._updatePreviewConfiguration()}_updateConfiguratorPosition(i,o){this._offset_x=i,this._offset_y=o,this.shadowRoot.host.style.transform="translate3d("+i+"px, "+o+"px, 0)"}_toggleSpanning(){this.verticalViewportSegments!=1||this.horizontalViewportSegments!=1?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1||(this.verticalViewportSegments===2?(this.verticalViewportSegments=1,this.horizontalViewportSegments=2):(this.verticalViewportSegments=2,this.horizontalViewportSegments=1),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return Ct`
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
    </div>`}}b(Ur,"styles",_r`
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
  `);customElements.define("foldable-device-configurator",Ur);try{self["workbox:window:7.0.0"]&&_()}catch{}function ui(t,e){return new Promise(function(i){var o=new MessageChannel;o.port1.onmessage=function(r){i(r.data)},t.postMessage(e,[o.port2])})}function An(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Wo(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function En(t,e){var i;if(typeof Symbol>"u"||t[Symbol.iterator]==null){if(Array.isArray(t)||(i=function(r,s){if(r){if(typeof r=="string")return Wo(r,s);var n=Object.prototype.toString.call(r).slice(8,-1);return n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set"?Array.from(r):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Wo(r,s):void 0}}(t))||e&&t&&typeof t.length=="number"){i&&(t=i);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(i=t[Symbol.iterator]()).next.bind(i)}try{self["workbox:core:7.0.0"]&&_()}catch{}var Je=function(){var t=this;this.promise=new Promise(function(e,i){t.resolve=e,t.reject=i})};function Qe(t,e){var i=location.href;return new URL(t,i).href===new URL(e,i).href}var jt=function(t,e){this.type=t,Object.assign(this,e)};function le(t,e,i){return i?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function Cn(){}var kn={type:"SKIP_WAITING"};function qo(t,e){if(!e)return t&&t.then?t.then(Cn):Promise.resolve()}var zn=function(t){var e,i;function o(l,a){var c,d;return a===void 0&&(a={}),(c=t.call(this)||this).nn={},c.tn=0,c.rn=new Je,c.en=new Je,c.on=new Je,c.un=0,c.an=new Set,c.cn=function(){var h=c.fn,u=h.installing;c.tn>0||!Qe(u.scriptURL,c.sn.toString())||performance.now()>c.un+6e4?(c.vn=u,h.removeEventListener("updatefound",c.cn)):(c.hn=u,c.an.add(u),c.rn.resolve(u)),++c.tn,u.addEventListener("statechange",c.ln)},c.ln=function(h){var u=c.fn,p=h.target,m=p.state,y=p===c.vn,v={sw:p,isExternal:y,originalEvent:h};!y&&c.mn&&(v.isUpdate=!0),c.dispatchEvent(new jt(m,v)),m==="installed"?c.wn=self.setTimeout(function(){m==="installed"&&u.waiting===p&&c.dispatchEvent(new jt("waiting",v))},200):m==="activating"&&(clearTimeout(c.wn),y||c.en.resolve(p))},c.dn=function(h){var u=c.hn,p=u!==navigator.serviceWorker.controller;c.dispatchEvent(new jt("controlling",{isExternal:p,originalEvent:h,sw:u,isUpdate:c.mn})),p||c.on.resolve(u)},c.gn=(d=function(h){var u=h.data,p=h.ports,m=h.source;return le(c.getSW(),function(){c.an.has(m)&&c.dispatchEvent(new jt("message",{data:u,originalEvent:h,ports:p,sw:m}))})},function(){for(var h=[],u=0;u<arguments.length;u++)h[u]=arguments[u];try{return Promise.resolve(d.apply(this,h))}catch(p){return Promise.reject(p)}}),c.sn=l,c.nn=a,navigator.serviceWorker.addEventListener("message",c.gn),c}i=t,(e=o).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var r,s,n=o.prototype;return n.register=function(l){var a=(l===void 0?{}:l).immediate,c=a!==void 0&&a;try{var d=this;return function(h,u){var p=h();return p&&p.then?p.then(u):u(p)}(function(){if(!c&&document.readyState!=="complete")return qo(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return d.mn=!!navigator.serviceWorker.controller,d.yn=d.pn(),le(d.bn(),function(h){d.fn=h,d.yn&&(d.hn=d.yn,d.en.resolve(d.yn),d.on.resolve(d.yn),d.yn.addEventListener("statechange",d.ln,{once:!0}));var u=d.fn.waiting;return u&&Qe(u.scriptURL,d.sn.toString())&&(d.hn=u,Promise.resolve().then(function(){d.dispatchEvent(new jt("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),d.hn&&(d.rn.resolve(d.hn),d.an.add(d.hn)),d.fn.addEventListener("updatefound",d.cn),navigator.serviceWorker.addEventListener("controllerchange",d.dn),d.fn})})}catch(h){return Promise.reject(h)}},n.update=function(){try{return this.fn?qo(this.fn.update()):void 0}catch(l){return Promise.reject(l)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(l){try{return le(this.getSW(),function(a){return ui(a,l)})}catch(a){return Promise.reject(a)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&ui(this.fn.waiting,kn)},n.pn=function(){var l=navigator.serviceWorker.controller;return l&&Qe(l.scriptURL,this.sn.toString())?l:void 0},n.bn=function(){try{var l=this;return function(a,c){try{var d=a()}catch(h){return c(h)}return d&&d.then?d.then(void 0,c):d}(function(){return le(navigator.serviceWorker.register(l.sn,l.nn),function(a){return l.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},r=o,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&An(r.prototype,s),o}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(i,o){this.Sn(i).add(o)},e.removeEventListener=function(i,o){this.Sn(i).delete(o)},e.dispatchEvent=function(i){i.target=this;for(var o,r=En(this.Sn(i.type));!(o=r()).done;)(0,o.value)(i)},e.Sn=function(i){return this.Pn.has(i)||this.Pn.set(i,new Set),this.Pn.get(i)},t}());ii("/demos/foldnews/");const Pn=(t,...e)=>{const i=ar(t[0],"main-application");return Q([i],...e)};class Nr extends st{constructor(){super();b(this,"_swAlert");b(this,"_wb");b(this,"_wbRegistration")}firstUpdated(){this._swAlert=this.shadowRoot.querySelector("#sw-alert"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new zn("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()})}connectedCallback(){super.connectedCallback(),bi(this)}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&ui(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}render(){return at`
      <foldable-device-configurator></foldable-device-configurator>
      <div class="content paper">
        <div class="header">
          <div class="header-main">
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
            <div class="fold">
              <div class="crease"></div>
              <div class="crease2"></div>
            </div>
            <div class="title-right">
              <div>The Fold News</div>
              <div class="logo-container">
                <picture>
                  <source srcset="images/foldnews-logo.webp" type="image/webp">
                  <img class="logo" src="images/foldnews-logo.png" alt="Fold news logo">
                </picture>
              </div>
            </div>
          </div>
          <div class="date">
            <div class="date-text">Portland, OR - June 7th, 2011</div>
            <div class="fold">
              <div class="crease"></div>
              <div class="crease2"></div>
            </div>
          </div>
        </div>
        <div class="frontpage paper">
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
          <div class="fold fold-cell">
            <div class="crease"></div>
            <div class="crease2"></div>
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
    `}}b(Nr,"styles",Pn`
    :host {
      width: 100vw;
      height: 100vh;
      --background-color: #f9f7f1;
      --default-fold-width: 40px;
      --default-fold-half-width: 20px;
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
      display: flex;
      align-items: center;
      flex-direction: column;
      height: 17vh;
    }

    .header-main {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      height: 13vh;
    }

    .header-title {
      flex-grow: 2;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
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

    .paper {
      background-image: url('images/paper_texture.webp');
      background-position: center;
      background-repeat: repeat;
    }

    .date {
      text-transform: uppercase;
      border-bottom: 2px solid black;
      border-top: 2px solid black;
      text-align: center;
      font-weight: 700;
      font-size: 15px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 4vh;
    }

    .date-text {
      padding: 20px 0px 20px 0px;
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

    .fold {
      display: none;
    }

    .cell {
      padding: 10px;
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
        height: 100%;
        flex-shrink: 0;
        display: flex;
      }

      .crease {
        border-right: 2px solid #bcbcbc;
        width: 50%;
        height: 100%;
        background-image:
          linear-gradient(
          to right,
            rgba(76, 53, 73, 0.00) 0%,
            rgba(76, 53, 73, 0.02) 2%,
            rgba(76, 53, 73, 0.00) 60%,
            rgba(76, 53, 73, 0.16) 94%
          );
      }

      .crease2 {
        width: 50%;
        height: 100%;
        background-image:
          linear-gradient(
          to right,
            rgba(76, 53, 73, 0.06) 0%,
            rgba(76, 53, 73, 0.10) 2%,
            rgba(76, 53, 73, 0.16) 6%,
            rgba(76, 53, 73, 0.00) 40%
          );
      }

      .fold-cell {
        grid-row: 1 / span 3;
        grid-column: 2;
      }

      .frontpage {
        grid-template-columns: env(viewport-segment-width 0 0) calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
      }

      .title-left {
        width: env(viewport-segment-width 1 0);
      }

      .title-right {
        width: env(viewport-segment-width 0 0);
        flex-shrink: 0;
      }

      .date {
        justify-content: flex-start;
      }

      .date-text {
        width: env(viewport-segment-width 0 0);
      }

      .header-main {
        flex-direction: row-reverse;
        justify-content: flex-start;
      }

      .cell {
        border-left: solid 1px black;
        border-right: solid 1px black;
        border-bottom: solid 1px black;
      }

      .cell-1 {
        grid-row: 1 / span 1;
        flex-shrink: 0;
      }

      .cell-2 {
        grid-column: 3;
        flex-shrink: 0;
      }

      .cell-4 {
        grid-row: 2 / span 1;
        grid-column: 1;
      }

      .cell-5 {
        grid-row: 3 / span 1;
      }

      .cell-3 {
        grid-row: 2;
        grid-column: 3;
      }

      .picture {
        display: block;
        max-width: 100%;
      }
    }

    /* This block is for smaller foldable devices */
    @media (horizontal-viewport-segments: 2) and (max-width: 1024px) {
      .fold {
        width: var(--default-fold-width);
      }

      .title-right {
        width: calc(env(viewport-segment-width 0 0) - var(--default-fold-half-width));
      }

      .date-text {
        width: calc(env(viewport-segment-width 0 0) - var(--default-fold-half-width));
      }

      .frontpage {
        display: grid;
        grid-template-columns: calc(env(viewport-segment-width 0 0) - var(--default-fold-half-width)) var(--default-fold-width);
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .fold {
        display: none;
      }

      .frontpage {
        display: grid;
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
    }

    @media (min-width: 320px) and (max-width: 1024px) and (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .frontpage {
        display: flex;
        flex-direction: column;
      }
    }
  `);customElements.define("main-application",Nr);
