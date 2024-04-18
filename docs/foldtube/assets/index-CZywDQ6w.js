var Jr=Object.defineProperty;var Qr=(t,e,i)=>e in t?Jr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var g=(t,e,i)=>(Qr(t,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=globalThis,$i=be.ShadowRoot&&(be.ShadyCSS===void 0||be.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xi=Symbol(),Oi=new WeakMap;let er=class{constructor(e,i,o){if(this._$cssResult$=!0,o!==xi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if($i&&e===void 0){const o=i!==void 0&&i.length===1;o&&(e=Oi.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Oi.set(i,e))}return e}toString(){return this.cssText}};const ts=t=>new er(typeof t=="string"?t:t+"",void 0,xi),D=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new er(i,t,xi)},es=(t,e)=>{if($i)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const o=document.createElement("style"),r=be.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,t.appendChild(o)}},Ii=$i?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const o of e.cssRules)i+=o.cssText;return ts(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is,defineProperty:os,getOwnPropertyDescriptor:rs,getOwnPropertyNames:ss,getOwnPropertySymbols:ns,getPrototypeOf:as}=Object,ot=globalThis,Ni=ot.trustedTypes,ls=Ni?Ni.emptyScript:"",Le=ot.reactiveElementPolyfillSupport,Qt=(t,e)=>t,St={toAttribute(t,e){switch(e){case Boolean:t=t?ls:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Si=(t,e)=>!is(t,e),Fi={attribute:!0,type:String,converter:St,reflect:!1,hasChanged:Si};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ot.litPropertyMetadata??(ot.litPropertyMetadata=new WeakMap);let mt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=Fi){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(e,i),!i.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,i);r!==void 0&&os(this.prototype,e,r)}}static getPropertyDescriptor(e,i,o){const{get:r,set:s}=rs(this.prototype,e)??{get(){return this[i]},set(n){this[i]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const l=r==null?void 0:r.call(this);s.call(this,n),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Fi}static _$Ei(){if(this.hasOwnProperty(Qt("elementProperties")))return;const e=as(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Qt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Qt("properties"))){const i=this.properties,o=[...ss(i),...ns(i)];for(const r of o)this.createProperty(r,i[r])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[o,r]of i)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const r=this._$Eu(i,o);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const r of o)i.unshift(Ii(r))}else e!==void 0&&i.push(Ii(e));return i}static _$Eu(e,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var i;(i=this._$EO)==null||i.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return es(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var o;return(o=i.hostConnected)==null?void 0:o.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(i=>{var o;return(o=i.hostDisconnected)==null?void 0:o.call(i)})}attributeChangedCallback(e,i,o){this._$AK(e,o)}_$EC(e,i){var s;const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(r!==void 0&&o.reflect===!0){const n=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:St).toAttribute(i,o.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,i){var s;const o=this.constructor,r=o._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const n=o.getPropertyOptions(r),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)==null?void 0:s.fromAttribute)!==void 0?n.converter:St;this._$Em=r,this[r]=l.fromAttribute(i,n.type),this._$Em=null}}requestUpdate(e,i,o){if(e!==void 0){if(o??(o=this.constructor.getPropertyOptions(e)),!(o.hasChanged??Si)(this[e],i))return;this.P(e,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,i,o){this._$AL.has(e)||this._$AL.set(e,i),o.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,n]of r)n.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],n)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(o=this._$EO)==null||o.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(i)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(i)}willUpdate(e){}_$AE(e){var i;(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(e){}firstUpdated(e){}};mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},mt[Qt("elementProperties")]=new Map,mt[Qt("finalized")]=new Map,Le==null||Le({ReactiveElement:mt}),(ot.reactiveElementVersions??(ot.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=globalThis,$e=te.trustedTypes,Hi=$e?$e.createPolicy("lit-html",{createHTML:t=>t}):void 0,ir="$lit$",it=`lit$${Math.random().toFixed(9).slice(2)}$`,or="?"+it,cs=`<${or}>`,ut=document,re=()=>ut.createComment(""),se=t=>t===null||typeof t!="object"&&typeof t!="function",rr=Array.isArray,hs=t=>rr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Oe=`[ 	
\f\r]`,Ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Di=/-->/g,ji=/>/g,nt=RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bi=/'/g,qi=/"/g,sr=/^(?:script|style|textarea|title)$/i,ds=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),U=ds(1),Z=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Wi=new WeakMap,dt=ut.createTreeWalker(ut,129);function nr(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Hi!==void 0?Hi.createHTML(e):e}const us=(t,e)=>{const i=t.length-1,o=[];let r,s=e===2?"<svg>":"",n=Ht;for(let l=0;l<i;l++){const a=t[l];let c,d,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,d=n.exec(a),d!==null);)u=n.lastIndex,n===Ht?d[1]==="!--"?n=Di:d[1]!==void 0?n=ji:d[2]!==void 0?(sr.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=nt):d[3]!==void 0&&(n=nt):n===nt?d[0]===">"?(n=r??Ht,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?nt:d[3]==='"'?qi:Bi):n===qi||n===Bi?n=nt:n===Di||n===ji?n=Ht:(n=nt,r=void 0);const f=n===nt&&t[l+1].startsWith("/>")?" ":"";s+=n===Ht?a+cs:h>=0?(o.push(c),a.slice(0,h)+ir+a.slice(h)+it+f):a+it+(h===-2?l:f)}return[nr(t,s+(t[i]||"<?>")+(e===2?"</svg>":"")),o]};let ci=class ar{constructor({strings:e,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const l=e.length-1,a=this.parts,[c,d]=us(e,i);if(this.el=ar.createElement(c,o),dt.currentNode=this.el.content,i===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=dt.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(ir)){const u=d[n++],f=r.getAttribute(h).split(it),b=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:b[2],strings:f,ctor:b[1]==="."?fs:b[1]==="?"?vs:b[1]==="@"?ms:Ve}),r.removeAttribute(h)}else h.startsWith(it)&&(a.push({type:6,index:s}),r.removeAttribute(h));if(sr.test(r.tagName)){const h=r.textContent.split(it),u=h.length-1;if(u>0){r.textContent=$e?$e.emptyScript:"";for(let f=0;f<u;f++)r.append(h[f],re()),dt.nextNode(),a.push({type:2,index:++s});r.append(h[u],re())}}}else if(r.nodeType===8)if(r.data===or)a.push({type:2,index:s});else{let h=-1;for(;(h=r.data.indexOf(it,h+1))!==-1;)a.push({type:7,index:s}),h+=it.length-1}s++}}static createElement(e,i){const o=ut.createElement("template");return o.innerHTML=e,o}};function At(t,e,i=t,o){var n,l;if(e===Z)return e;let r=o!==void 0?(n=i._$Co)==null?void 0:n[o]:i._$Cl;const s=se(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,i,o)),o!==void 0?(i._$Co??(i._$Co=[]))[o]=r:i._$Cl=r),r!==void 0&&(e=At(t,r._$AS(t,e.values),r,o)),e}let ps=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:o}=this._$AD,r=((e==null?void 0:e.creationScope)??ut).importNode(i,!0);dt.currentNode=r;let s=dt.nextNode(),n=0,l=0,a=o[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new Ai(s,s.nextSibling,this,e):a.type===1?c=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(c=new gs(s,this,e)),this._$AV.push(c),a=o[++l]}n!==(a==null?void 0:a.index)&&(s=dt.nextNode(),n++)}return dt.currentNode=ut,r}p(e){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}},Ai=class lr{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,i,o,r){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=At(this,e,i),se(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==Z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):hs(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==M&&se(this._$AH)?this._$AA.nextSibling.data=e:this.T(ut.createTextNode(e)),this._$AH=e}$(e){var s;const{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ci.createElement(nr(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(i);else{const n=new ps(r,this),l=n.u(this.options);n.p(i),this.T(l),this._$AH=n}}_$AC(e){let i=Wi.get(e.strings);return i===void 0&&Wi.set(e.strings,i=new ci(e)),i}k(e){rr(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of e)r===i.length?i.push(o=new lr(this.S(re()),this.S(re()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(e=this._$AA.nextSibling,i){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,i);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}},Ve=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,o,r,s){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=M}_$AI(e,i=this,o,r){const s=this.strings;let n=!1;if(s===void 0)e=At(this,e,i,0),n=!se(e)||e!==this._$AH&&e!==Z,n&&(this._$AH=e);else{const l=e;let a,c;for(e=s[0],a=0;a<s.length-1;a++)c=At(this,l[o+a],i,a),c===Z&&(c=this._$AH[a]),n||(n=!se(c)||c!==this._$AH[a]),c===M?e=M:e!==M&&(e+=(c??"")+s[a+1]),this._$AH[a]=c}n&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},fs=class extends Ve{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},vs=class extends Ve{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},ms=class extends Ve{constructor(e,i,o,r,s){super(e,i,o,r,s),this.type=5}_$AI(e,i=this){if((e=At(this,e,i,0)??M)===Z)return;const o=this._$AH,r=e===M&&o!==M||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==M&&(o===M||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$AH.handleEvent(e)}},gs=class{constructor(e,i,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){At(this,e)}};const Ie=te.litHtmlPolyfillSupport;Ie==null||Ie(ci,Ai),(te.litHtmlVersions??(te.litHtmlVersions=[])).push("3.1.3");const bs=(t,e,i)=>{const o=(i==null?void 0:i.renderBefore)??e;let r=o._$litPart$;if(r===void 0){const s=(i==null?void 0:i.renderBefore)??null;o._$litPart$=r=new Ai(e.insertBefore(re(),s),s,void 0,i??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let G=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const e=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=e.firstChild),e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=bs(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Z}};var tr;G._$litElement$=!0,G.finalized=!0,(tr=globalThis.litElementHydrateSupport)==null||tr.call(globalThis,{LitElement:G});const Ne=globalThis.litElementPolyfillSupport;Ne==null||Ne({LitElement:G});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");function Ki(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var Dt=function(){try{window[F].updateSegments();var t=function(){if(!Fe)return Fe=!0,Promise.resolve(Promise.resolve(!1)).then(function(e){Fe=e,window[F].dispatchEvent(new Event("change"))})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},F="__foldables__",Fe=!1,cr=function(){function t(){var o=this;if(window[F]!==void 0)return window[F];var r=document.createDocumentFragment();this.addEventListener=r.addEventListener.bind(r),this.removeEventListener=r.removeEventListener.bind(r),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof o[n]=="function"&&o[n](s),r.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(o,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var l;return function(){var a=arguments,c=this;clearTimeout(l),l=setTimeout(function(){return s.apply(c,a)},n)}}(Dt(),200)})}var e,i=t.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var r=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,l=r/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:s,left:0,bottom:s+l,right:n,width:n,height:l},s+=o[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var c=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,h=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:h,right:h+c,bottom:d,width:c,height:d},h+=o[u].width,h+=this.foldSize;window.visualViewport.segments=o},i.randomizeSegmentsConfiguration=function(o){var r=Math.random()<.5,s=Math.round(Math.random()*(o-1)+1);r?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(e=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(F+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(F+"-horizontal-viewport-segments",o),Dt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(F+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(F+"-vertical-viewport-segments",o),Dt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(F+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(F+"-fold-size",o),Dt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(F+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(F+"-browser-shell-size",o),Dt()}}])&&function(o,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(t.prototype,e),t}();window[F]=new cr,window.visualViewport.segments===void 0&&window[F].updateSegments();var hr="-viewport-segments",ki="(\\s*)(@media.*?\\b"+hr+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",ys=/\((.*?)\)/gi,_s=/@media[^\(]+/gi,ws=/(horizontal-viewport-segments:)\s?(\d)/gi,$s=/(vertical-viewport-segments:)\s?(\d)/gi,xs=function(t){return new RegExp("env\\(\\s*"+t+"\\s*\\)","gi")};function dr(t,e){return t.replace(new RegExp(ki,"gi"),e)}function Zi(t,e){var i=t.matchAll(e);return i===null?[]:Array.from(i,function(o){return o[2]})[0]}function ur(t){var e=function(o){var r,s=new RegExp(ki,"gi");if(typeof o.matchAll=="function")r=Array.from(o.matchAll(s));else{for(r=[];r[r.length]=s.exec(o););r.length--}return r}(t),i=[[]];return e.forEach(function(o){var r=o[1],s=o[2],n=o[3],l=o[4],a=s.match(_s)||[],c=s.match(ys)||[],d=Zi(s,$s);d===void 0&&(d=1);var h=Zi(s,ws);h===void 0&&(h=1),c=c.filter(function(u){return!u.includes(hr)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][h]=""+r+a+c+"{"+n+l+"}"}),i}var Pe=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+Pe);var Yi,pr=new cr;if(!Pe){var He=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Yi=He,Promise.all(Yi.map(function(t){return t.href?fetch(t.href).then(function(e){return e.text()}):t.textContent}))).then(function(t){var e=new DocumentFragment;t.forEach(function(i,o){for(var r,s=dr(i,""),n=ur(i),l=He[o].href||"inline",a=0,c=Object.entries(n);a<c.length;a++){var d=c[a],h=d[0],u=d[1];rt[h]==null&&(rt[h]=[]);for(var f=0,b=Object.entries(u);f<b.length;f++){var w=b[f];rt[h][w[0]]="/* origin: "+l+" */"+w[1]}}if(l=="inline"||(r=i,new RegExp(ki,"gi").test(r))){var m=document.createElement("style");m.setAttribute("data-css-origin",l),m.textContent=s,e.appendChild(m)}else{var y=document.createElement("link");y.type="text/css",y.rel="stylesheet",y.href=l,e.appendChild(y)}}),He.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(e),pt()})}var rt=[[]];function Mt(t,e){if(Pe)return t;var i=dr(t,""),o=ur(t);e&&(rt[e]=[[]]);for(var r=e?rt[e]:rt,s=e?"":"/* origin: inline */",n=0,l=Object.entries(o);n<l.length;n++){var a=l[n],c=a[0],d=a[1];r[c]==null&&(r[c]=[]);for(var h=0,u=Object.entries(d);h<u.length;h++){var f=u[h];r[c][f[0]]=""+s+f[1]}}return r[0][0]=i,i}function pt(t){Pe||(Gi(t),pr.addEventListener("change",function(){return Gi(t)}))}function Gi(t){var e,i=pr,o=null;(e=t?rt[t.nodeName.toLowerCase()]:rt)[i.verticalViewportSegments]&&(o=e[i.verticalViewportSegments][i.horizontalViewportSegments]);var r,s=e[0][0]?e[0][0]:null;if(o){var n=window.visualViewport.segments,l=!1;n.length>1&&(l=!(n[0].height<window.innerHeight));for(var a=0,c=Object.entries(n);a<c.length;a++)for(var d=c[a],h=d[0],u=0,f=Object.entries(d[1]);u<f.length;u++){var b=f[u],w=b[0];r=b[1]+"px",o=o.replace(xs(l?"viewport-segment-"+w+" "+h+" 0":"viewport-segment-"+w+" 0 "+h),r)}var m="__foldables_sheet__",y=function(V,j){for(var C,A=function(k,pe){var I=typeof Symbol<"u"&&k[Symbol.iterator]||k["@@iterator"];if(I)return(I=I.call(k)).next.bind(I);if(Array.isArray(k)||(I=function(O,Ft){if(O){if(typeof O=="string")return Ki(O,Ft);var B=Object.prototype.toString.call(O).slice(8,-1);return B==="Object"&&O.constructor&&(B=O.constructor.name),B==="Map"||B==="Set"?Array.from(O):B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)?Ki(O,Ft):void 0}}(k))){I&&(k=I);var Nt=0;return function(){return Nt>=k.length?{done:!0}:{done:!1,value:k[Nt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(V.querySelectorAll("."+m));!(C=A()).done;)C.value.remove();var P=document.createElement("style");P.className=m,P.textContent=j,V===document?document.head.appendChild(P):V.appendChild(P)};if(t){var T=t.shadowRoot;"adoptedStyleSheets"in T&&T.adoptedStyleSheets.length>0?T.adoptedStyleSheets[0].replace(s+o):y(T,o)}else y(document,o)}}var hi="";function di(t){hi=t}function Ss(t=""){if(!hi){const e=[...document.getElementsByTagName("script")],i=e.find(o=>o.hasAttribute("data-shoelace"));if(i)di(i.getAttribute("data-shoelace"));else{const o=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let r="";o&&(r=o.getAttribute("src")),di(r.split("/").slice(0,-1).join("/"))}}return hi.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var As={name:"default",resolver:t=>Ss(`assets/icons/${t}.svg`)},ks=As,Xi={caret:`
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
  `},Cs={name:"system",resolver:t=>t in Xi?`data:image/svg+xml,${encodeURIComponent(Xi[t])}`:""},Es=Cs,zs=[ks,Es],ui=[];function Vs(t){ui.push(t)}function Ps(t){ui=ui.filter(e=>e!==t)}function Ji(t){return zs.find(e=>e.name===t)}var Ts=D`
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
`,fr=Object.defineProperty,Ms=Object.defineProperties,Rs=Object.getOwnPropertyDescriptor,Us=Object.getOwnPropertyDescriptors,Qi=Object.getOwnPropertySymbols,Ls=Object.prototype.hasOwnProperty,Os=Object.prototype.propertyIsEnumerable,to=(t,e,i)=>e in t?fr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Rt=(t,e)=>{for(var i in e||(e={}))Ls.call(e,i)&&to(t,i,e[i]);if(Qi)for(var i of Qi(e))Os.call(e,i)&&to(t,i,e[i]);return t},Ci=(t,e)=>Ms(t,Us(e)),p=(t,e,i,o)=>{for(var r=o>1?void 0:o?Rs(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&fr(e,i,r),r};function st(t,e){const i=Rt({waitUntilFirstUpdate:!1},e);return(o,r)=>{const{update:s}=o,n=Array.isArray(t)?t:[t];o.update=function(l){n.forEach(a=>{const c=a;if(l.has(c)){const d=l.get(c),h=this[c];d!==h&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](d,h)}}),s.call(this,l)}}}var Ut=D`
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
 */const Is={attribute:!0,type:String,converter:St,reflect:!1,hasChanged:Si},Ns=(t=Is,e,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,t),o==="accessor"){const{name:n}=i;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,t)},init(l){return l!==void 0&&this.P(n,void 0,t),l}}}if(o==="setter"){const{name:n}=i;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,t)}}throw Error("Unsupported decorator location: "+o)};function v(t){return(e,i)=>typeof i=="object"?Ns(t,e,i):((o,r,s)=>{const n=r.hasOwnProperty(s);return r.constructor.createProperty(s,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(t){return v({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eo=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Te(t,e){return(i,o,r)=>{const s=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(t))??null};if(e){const{get:n,set:l}=typeof o=="object"?i:r??(()=>{const a=Symbol();return{get(){return this[a]},set(c){this[a]=c}}})();return eo(i,o,{get(){let a=n.call(this);return a===void 0&&(a=s(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return eo(i,o,{get(){return s(this)}})}}var X=class extends G{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,Rt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){customElements.define(t,class extends e{},i);return}let r=" (unknown version)",s=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(s=" v"+o.version),!(r&&s&&r===s)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${s} has already been registered.`)}};X.version="2.15.0";X.dependencies={};p([v()],X.prototype,"dir",2);p([v()],X.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fs=(t,e)=>e===void 0?(t==null?void 0:t._$litType$)!==void 0:(t==null?void 0:t._$litType$)===e,Hs=t=>t.strings===void 0,Ds={},js=(t,e=Ds)=>t._$AH=e;var jt=Symbol(),fe=Symbol(),De,je=new Map,K=class extends X{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(e!=null&&e.spriteSheet){this.svg=U`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const r=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(r),this.svg}try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?jt:fe}catch{return fe}try{const r=document.createElement("div");r.innerHTML=await o.text();const s=r.firstElementChild;if(((i=s==null?void 0:s.tagName)==null?void 0:i.toLowerCase())!=="svg")return jt;De||(De=new DOMParser);const l=De.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):jt}catch{return jt}}connectedCallback(){super.connectedCallback(),Vs(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ps(this)}getIconSource(){const t=Ji(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?Ji(this.library):void 0;if(!e){this.svg=null;return}let r=je.get(e);if(r||(r=this.resolveIcon(e,o),je.set(e,r)),!this.initialRender)return;const s=await r;if(s===fe&&je.delete(e),e===this.getIconSource().url){if(Fs(s)){this.svg=s;return}switch(s){case fe:case jt:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};K.styles=[Ut,Ts];p([ue()],K.prototype,"svg",2);p([v({reflect:!0})],K.prototype,"name",2);p([v()],K.prototype,"src",2);p([v()],K.prototype,"label",2);p([v({reflect:!0})],K.prototype,"library",2);p([st("label")],K.prototype,"handleLabelChange",1);p([st(["name","src","library"])],K.prototype,"setIcon",1);K.define("sl-icon");var Bs=D`
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
 */const ct={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vr=t=>(...e)=>({_$litDirective$:t,values:e});let mr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=vr(class extends mr{constructor(t){var e;if(super(t),t.type!==ct.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const n=!!e[s];n===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(n?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return Z}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr=Symbol.for(""),qs=t=>{if((t==null?void 0:t.r)===gr)return t==null?void 0:t._$litStatic$},xe=(t,...e)=>({_$litStatic$:e.reduce((i,o,r)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[r+1],t[0]),r:gr}),io=new Map,Ws=t=>(e,...i)=>{const o=i.length;let r,s;const n=[],l=[];let a,c=0,d=!1;for(;c<o;){for(a=e[c];c<o&&(s=i[c],(r=qs(s))!==void 0);)a+=r+e[++c],d=!0;c!==o&&l.push(s),n.push(a),c++}if(c===o&&n.push(e[o]),d){const h=n.join("$$lit$$");(e=io.get(h))===void 0&&(n.raw=n,io.set(h,e=n)),i=l}return t(e,...i)},ye=Ws(U);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=t=>t??M;var W=class extends X{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?xe`a`:xe`button`;return ye`
      <${e}
        part="base"
        class=${ne({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${x(t?void 0:this.disabled)}
        type=${x(t?void 0:"button")}
        href=${x(t?this.href:void 0)}
        target=${x(t?this.target:void 0)}
        download=${x(t?this.download:void 0)}
        rel=${x(t&&this.target?"noreferrer noopener":void 0)}
        role=${x(t?void 0:"button")}
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
      </${e}>
    `}};W.styles=[Ut,Bs];W.dependencies={"sl-icon":K};p([Te(".icon-button")],W.prototype,"button",2);p([ue()],W.prototype,"hasFocus",2);p([v()],W.prototype,"name",2);p([v()],W.prototype,"library",2);p([v()],W.prototype,"src",2);p([v()],W.prototype,"href",2);p([v()],W.prototype,"target",2);p([v()],W.prototype,"download",2);p([v()],W.prototype,"label",2);p([v({type:Boolean,reflect:!0})],W.prototype,"disabled",2);var br=new Map,Ks=new WeakMap;function Zs(t){return t??{keyframes:[],options:{duration:0}}}function oo(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function yr(t,e){br.set(t,Zs(e))}function ro(t,e,i){const o=Ks.get(t);if(o!=null&&o[e])return oo(o[e],i.dir);const r=br.get(e);return r?oo(r,i.dir):{keyframes:[],options:{duration:0}}}function so(t,e){return new Promise(i=>{function o(r){r.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}function no(t,e,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,Ci(Rt({},i),{duration:Ys()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function Ys(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ao(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}const pi=new Set,Gs=new MutationObserver(xr),yt=new Map;let _r=document.documentElement.dir||"ltr",wr=document.documentElement.lang||navigator.language,ht;Gs.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function $r(...t){t.map(e=>{const i=e.$code.toLowerCase();yt.has(i)?yt.set(i,Object.assign(Object.assign({},yt.get(i)),e)):yt.set(i,e),ht||(ht=e)}),xr()}function xr(){_r=document.documentElement.dir||"ltr",wr=document.documentElement.lang||navigator.language,[...pi.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Xs=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){pi.add(this.host)}hostDisconnected(){pi.delete(this.host)}dir(){return`${this.host.dir||_r}`.toLowerCase()}lang(){return`${this.host.lang||wr}`.toLowerCase()}getTranslationData(e){var i,o;const r=new Intl.Locale(e.replace(/_/g,"-")),s=r==null?void 0:r.language.toLowerCase(),n=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",l=yt.get(`${s}-${n}`),a=yt.get(s);return{locale:r,language:s,region:n,primary:l,secondary:a}}exists(e,i){var o;const{primary:r,secondary:s}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||s&&s[e]||i.includeFallback&&ht&&ht[e])}term(e,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let s;if(o&&o[e])s=o[e];else if(r&&r[e])s=r[e];else if(ht&&ht[e])s=ht[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...i):s}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var Sr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};$r(Sr);var Js=Sr,Me=class extends Xs{};$r(Js);var Ei=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Qs=D`
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
`,ft=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),J=class extends X{constructor(){super(...arguments),this.hasSlotController=new Ei(this,"icon","suffix"),this.localize=new Me(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ao(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=ro(this,"alert.show",{dir:this.localize.dir()});await no(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await ao(this.base);const{keyframes:t,options:e}=ro(this,"alert.hide",{dir:this.localize.dir()});await no(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,so(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,so(this,"sl-after-hide")}async toast(){return new Promise(t=>{ft.parentElement===null&&document.body.append(ft),ft.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ft.removeChild(this),t(),ft.querySelector("sl-alert")===null&&ft.remove()},{once:!0})})}render(){return U`
      <div
        part="base"
        class=${ne({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?U`
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
    `}};J.styles=[Ut,Qs];J.dependencies={"sl-icon-button":W};p([Te('[part~="base"]')],J.prototype,"base",2);p([v({type:Boolean,reflect:!0})],J.prototype,"open",2);p([v({type:Boolean,reflect:!0})],J.prototype,"closable",2);p([v({reflect:!0})],J.prototype,"variant",2);p([v({type:Number})],J.prototype,"duration",2);p([st("open",{waitUntilFirstUpdate:!0})],J.prototype,"handleOpenChange",1);p([st("duration")],J.prototype,"handleDurationChange",1);yr("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});yr("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});J.define("sl-alert");var tn=D`
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
`,Ar=class extends X{constructor(){super(...arguments),this.localize=new Me(this)}render(){return U`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ar.styles=[Ut,tn];var Bt=new WeakMap,qt=new WeakMap,Wt=new WeakMap,Be=new WeakSet,ve=new WeakMap,kr=class{constructor(t,e){this.handleFormData=i=>{const o=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof r=="string"&&r.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(l=>{i.formData.append(r,l.toString())}):i.formData.append(r,s.toString()))},this.handleFormSubmit=i=>{var o;const r=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=Bt.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!s(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ve.set(this.host,[])},this.handleInteraction=i=>{const o=ve.get(this.host);o.includes(i.type)||o.push(i.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Rt({form:i=>{const o=i.form;if(o){const s=i.getRootNode().querySelector(`#${o}`);if(s)return s}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null?o:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,o)=>i.value=o,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),ve.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ve.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Bt.has(this.form)?Bt.get(this.form).add(this.host):Bt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),qt.has(this.form)||(qt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Wt.has(this.form)||(Wt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Bt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),qt.has(this.form)&&(this.form.reportValidity=qt.get(this.form),qt.delete(this.form)),Wt.has(this.form)&&(this.form.checkValidity=Wt.get(this.form),Wt.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Be.add(t):Be.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{e.hasAttribute(o)&&i.setAttribute(o,e.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!Be.has(e),o=!!e.required;e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},zi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Ci(Rt({},zi),{valid:!1,valueMissing:!0}));Object.freeze(Ci(Rt({},zi),{valid:!1,customError:!0}));var en=D`
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

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
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
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button[checked]]) {
    z-index: 2;
  }
`,S=class extends X{constructor(){super(...arguments),this.formControlController=new kr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ei(this,"[default]","prefix","suffix"),this.localize=new Me(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:zi}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?xe`a`:xe`button`;return ye`
      <${e}
        part="base"
        class=${ne({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${x(t?void 0:this.disabled)}
        type=${x(t?void 0:this.type)}
        title=${this.title}
        name=${x(t?void 0:this.name)}
        value=${x(t?void 0:this.value)}
        href=${x(t?this.href:void 0)}
        target=${x(t?this.target:void 0)}
        download=${x(t?this.download:void 0)}
        rel=${x(t?this.rel:void 0)}
        role=${x(t?void 0:"button")}
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
        ${this.caret?ye` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ye`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};S.styles=[Ut,en];S.dependencies={"sl-icon":K,"sl-spinner":Ar};p([Te(".button")],S.prototype,"button",2);p([ue()],S.prototype,"hasFocus",2);p([ue()],S.prototype,"invalid",2);p([v()],S.prototype,"title",2);p([v({reflect:!0})],S.prototype,"variant",2);p([v({reflect:!0})],S.prototype,"size",2);p([v({type:Boolean,reflect:!0})],S.prototype,"caret",2);p([v({type:Boolean,reflect:!0})],S.prototype,"disabled",2);p([v({type:Boolean,reflect:!0})],S.prototype,"loading",2);p([v({type:Boolean,reflect:!0})],S.prototype,"outline",2);p([v({type:Boolean,reflect:!0})],S.prototype,"pill",2);p([v({type:Boolean,reflect:!0})],S.prototype,"circle",2);p([v()],S.prototype,"type",2);p([v()],S.prototype,"name",2);p([v()],S.prototype,"value",2);p([v()],S.prototype,"href",2);p([v()],S.prototype,"target",2);p([v()],S.prototype,"rel",2);p([v()],S.prototype,"download",2);p([v()],S.prototype,"form",2);p([v({attribute:"formaction"})],S.prototype,"formAction",2);p([v({attribute:"formenctype"})],S.prototype,"formEnctype",2);p([v({attribute:"formmethod"})],S.prototype,"formMethod",2);p([v({attribute:"formnovalidate",type:Boolean})],S.prototype,"formNoValidate",2);p([v({attribute:"formtarget"})],S.prototype,"formTarget",2);p([st("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);S.define("sl-button");var on=D`
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
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
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
    background: inherit;
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
    -webkit-user-select: none;
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

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
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

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
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

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
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

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
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

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
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
`,rn=(t="value")=>(e,i)=>{const o=e.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,n,l){var a;const c=o.getPropertyOptions(t),d=typeof c.attribute=="string"?c.attribute:t;if(s===d){const h=c.converter||St,f=(typeof h=="function"?h:(a=h==null?void 0:h.fromAttribute)!=null?a:St.fromAttribute)(l,c.type);this[t]!==f&&(this[i]=f)}r.call(this,s,n,l)}},sn=D`
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
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nn=vr(class extends mr{constructor(t){if(super(t),t.type!==ct.PROPERTY&&t.type!==ct.ATTRIBUTE&&t.type!==ct.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Hs(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Z||e===M)return e;const i=t.element,o=t.name;if(t.type===ct.PROPERTY){if(e===i[o])return Z}else if(t.type===ct.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(o))return Z}else if(t.type===ct.ATTRIBUTE&&i.getAttribute(o)===e+"")return Z;return js(t),e}});var $=class extends X{constructor(){super(...arguments),this.formControlController=new kr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ei(this,"help-text","label"),this.localize=new Me(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){const r=e??this.input.selectionStart,s=i??this.input.selectionEnd;this.input.setRangeText(t,r,s,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,o=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return U`
      <div
        part="form-control"
        class=${ne({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
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
            class=${ne({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

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
              .value=${nn(this.value)}
              autocapitalize=${x(this.autocapitalize)}
              autocomplete=${x(this.autocomplete)}
              autocorrect=${x(this.autocorrect)}
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

            ${s?U`
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
            ${this.passwordToggle&&!this.disabled?U`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?U`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:U`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};$.styles=[Ut,sn,on];$.dependencies={"sl-icon":K};p([Te(".input__control")],$.prototype,"input",2);p([ue()],$.prototype,"hasFocus",2);p([v()],$.prototype,"title",2);p([v({reflect:!0})],$.prototype,"type",2);p([v()],$.prototype,"name",2);p([v()],$.prototype,"value",2);p([rn()],$.prototype,"defaultValue",2);p([v({reflect:!0})],$.prototype,"size",2);p([v({type:Boolean,reflect:!0})],$.prototype,"filled",2);p([v({type:Boolean,reflect:!0})],$.prototype,"pill",2);p([v()],$.prototype,"label",2);p([v({attribute:"help-text"})],$.prototype,"helpText",2);p([v({type:Boolean})],$.prototype,"clearable",2);p([v({type:Boolean,reflect:!0})],$.prototype,"disabled",2);p([v()],$.prototype,"placeholder",2);p([v({type:Boolean,reflect:!0})],$.prototype,"readonly",2);p([v({attribute:"password-toggle",type:Boolean})],$.prototype,"passwordToggle",2);p([v({attribute:"password-visible",type:Boolean})],$.prototype,"passwordVisible",2);p([v({attribute:"no-spin-buttons",type:Boolean})],$.prototype,"noSpinButtons",2);p([v({reflect:!0})],$.prototype,"form",2);p([v({type:Boolean,reflect:!0})],$.prototype,"required",2);p([v()],$.prototype,"pattern",2);p([v({type:Number})],$.prototype,"minlength",2);p([v({type:Number})],$.prototype,"maxlength",2);p([v()],$.prototype,"min",2);p([v()],$.prototype,"max",2);p([v()],$.prototype,"step",2);p([v()],$.prototype,"autocapitalize",2);p([v()],$.prototype,"autocorrect",2);p([v()],$.prototype,"autocomplete",2);p([v({type:Boolean})],$.prototype,"autofocus",2);p([v()],$.prototype,"enterkeyhint",2);p([v({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],$.prototype,"spellcheck",2);p([v()],$.prototype,"inputmode",2);p([st("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);p([st("step",{waitUntilFirstUpdate:!0})],$.prototype,"handleStepChange",1);p([st("value",{waitUntilFirstUpdate:!0})],$.prototype,"handleValueChange",1);$.define("sl-input");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=window,Vi=_e.ShadowRoot&&(_e.ShadyCSS===void 0||_e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pi=Symbol(),lo=new WeakMap;let Cr=class{constructor(e,i,o){if(this._$cssResult$=!0,o!==Pi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(Vi&&e===void 0){const o=i!==void 0&&i.length===1;o&&(e=lo.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&lo.set(i,e))}return e}toString(){return this.cssText}};const Er=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new Cr(i,t,Pi)},co=Vi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const o of e.cssRules)i+=o.cssText;return(o=>new Cr(typeof o=="string"?o:o+"",void 0,Pi))(i)})(t):t;var qe;const Se=window,ho=Se.trustedTypes,an=ho?ho.emptyScript:"",uo=Se.reactiveElementPolyfillSupport,fi={toAttribute(t,e){switch(e){case Boolean:t=t?an:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},zr=(t,e)=>e!==t&&(e==e||t==t),We={attribute:!0,type:String,converter:fi,reflect:!1,hasChanged:zr};let gt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=We){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const r=this[t];this[e]=o,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||We}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(co(o))}else t!==void 0&&e.push(co(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{Vi?i.adoptedStyleSheets=o.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):o.forEach(r=>{const s=document.createElement("style"),n=_e.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,i.appendChild(s)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=We){var o;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:fi).toAttribute(e,i.type);this._$El=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,r=o._$Ev.get(t);if(r!==void 0&&this._$El!==r){const s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:fi;this._$El=r,this[r]=n.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||zr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ke;gt.finalized=!0,gt.elementProperties=new Map,gt.elementStyles=[],gt.shadowRootOptions={mode:"open"},uo==null||uo({ReactiveElement:gt}),((qe=Se.reactiveElementVersions)!==null&&qe!==void 0?qe:Se.reactiveElementVersions=[]).push("1.6.1");const Ae=window,kt=Ae.trustedTypes,po=kt?kt.createPolicy("lit-html",{createHTML:t=>t}):void 0,tt=`lit$${(Math.random()+"").slice(9)}$`,Vr="?"+tt,ln=`<${Vr}>`,Ct=document,ae=(t="")=>Ct.createComment(t),le=t=>t===null||typeof t!="object"&&typeof t!="function",fo=Array.isArray,Kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vo=/-->/g,mo=/>/g,at=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),go=/'/g,bo=/"/g,yo=/^(?:script|style|textarea|title)$/i,Lt=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),Et=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),_o=new WeakMap,wt=Ct.createTreeWalker(Ct,129,null,!1);let vi=class Pr{constructor({strings:e,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const l=e.length-1,a=this.parts,[c,d]=((h,u)=>{const f=h.length-1,b=[];let w,m=u===2?"<svg>":"",y=Kt;for(let V=0;V<f;V++){const j=h[V];let C,A,P=-1,k=0;for(;k<j.length&&(y.lastIndex=k,A=y.exec(j),A!==null);)k=y.lastIndex,y===Kt?A[1]==="!--"?y=vo:A[1]!==void 0?y=mo:A[2]!==void 0?(yo.test(A[2])&&(w=RegExp("</"+A[2],"g")),y=at):A[3]!==void 0&&(y=at):y===at?A[0]===">"?(y=w??Kt,P=-1):A[1]===void 0?P=-2:(P=y.lastIndex-A[2].length,C=A[1],y=A[3]===void 0?at:A[3]==='"'?bo:go):y===bo||y===go?y=at:y===vo||y===mo?y=Kt:(y=at,w=void 0);const pe=y===at&&h[V+1].startsWith("/>")?" ":"";m+=y===Kt?j+ln:P>=0?(b.push(C),j.slice(0,P)+"$lit$"+j.slice(P)+tt+pe):j+tt+(P===-2?(b.push(void 0),V):pe)}const T=m+(h[f]||"<?>")+(u===2?"</svg>":"");if(!Array.isArray(h)||!h.hasOwnProperty("raw"))throw Error("invalid template strings array");return[po!==void 0?po.createHTML(T):T,b]})(e,i);if(this.el=Pr.createElement(c,o),wt.currentNode=this.el.content,i===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(r=wt.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes()){const h=[];for(const u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(tt)){const f=d[n++];if(h.push(u),f!==void 0){const b=r.getAttribute(f.toLowerCase()+"$lit$").split(tt),w=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:w[2],strings:b,ctor:w[1]==="."?cn:w[1]==="?"?dn:w[1]==="@"?un:Re})}else a.push({type:6,index:s})}for(const u of h)r.removeAttribute(u)}if(yo.test(r.tagName)){const h=r.textContent.split(tt),u=h.length-1;if(u>0){r.textContent=kt?kt.emptyScript:"";for(let f=0;f<u;f++)r.append(h[f],ae()),wt.nextNode(),a.push({type:2,index:++s});r.append(h[u],ae())}}}else if(r.nodeType===8)if(r.data===Vr)a.push({type:2,index:s});else{let h=-1;for(;(h=r.data.indexOf(tt,h+1))!==-1;)a.push({type:7,index:s}),h+=tt.length-1}s++}}static createElement(e,i){const o=Ct.createElement("template");return o.innerHTML=e,o}};function zt(t,e,i=t,o){var r,s,n,l;if(e===Et)return e;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const c=le(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),c===void 0?a=void 0:(a=new c(t),a._$AT(t,i,o)),o!==void 0?((n=(l=i)._$Co)!==null&&n!==void 0?n:l._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(e=zt(t,a._$AS(t,e.values),a,o)),e}let Ti=class Tr{constructor(e,i,o,r){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=r,this._$Cm=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,i;return(i=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&e.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=zt(this,e,i),le(e)?e===L||e==null||e===""?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==Et&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):(o=>fo(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function")(e)?this.k(e):this.g(e)}O(e,i=this._$AB){return this._$AA.parentNode.insertBefore(e,i)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==L&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ct.createTextNode(e)),this._$AH=e}$(e){var i;const{values:o,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=vi.createElement(r.h,this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(o);else{const n=new class{constructor(a,c){this.u=[],this._$AN=void 0,this._$AD=a,this._$AM=c}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(a){var c;const{el:{content:d},parts:h}=this._$AD,u=((c=a==null?void 0:a.creationScope)!==null&&c!==void 0?c:Ct).importNode(d,!0);wt.currentNode=u;let f=wt.nextNode(),b=0,w=0,m=h[0];for(;m!==void 0;){if(b===m.index){let y;m.type===2?y=new Ti(f,f.nextSibling,this,a):m.type===1?y=new m.ctor(f,m.name,m.strings,this,a):m.type===6&&(y=new pn(f,this,a)),this.u.push(y),m=h[++w]}b!==(m==null?void 0:m.index)&&(f=wt.nextNode(),b++)}return u}p(a){let c=0;for(const d of this.u)d!==void 0&&(d.strings!==void 0?(d._$AI(a,d,c),c+=d.strings.length-2):d._$AI(a[c])),c++}}(s,this),l=n.v(this.options);n.p(o),this.T(l),this._$AH=n}}_$AC(e){let i=_o.get(e.strings);return i===void 0&&_o.set(e.strings,i=new vi(e)),i}k(e){fo(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of e)r===i.length?i.push(o=new Tr(this.O(ae()),this.O(ae()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(e=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var i;this._$AM===void 0&&(this._$Cm=e,(i=this._$AP)===null||i===void 0||i.call(this,e))}},Re=class{constructor(t,e,i,o,r){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const r=this.strings;let s=!1;if(r===void 0)t=zt(this,t,e,0),s=!le(t)||t!==this._$AH&&t!==Et,s&&(this._$AH=t);else{const n=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=zt(this,n[i+l],e,l),a===Et&&(a=this._$AH[l]),s||(s=!le(a)||a!==this._$AH[l]),a===L?t=L:t!==L&&(t+=(a??"")+r[l+1]),this._$AH[l]=a}s&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},cn=class extends Re{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}};const hn=kt?kt.emptyScript:"";let dn=class extends Re{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,hn):this.element.removeAttribute(this.name)}},un=class extends Re{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=zt(this,t,e,0))!==null&&i!==void 0?i:L)===Et)return;const o=this._$AH,r=t===L&&o!==L||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==L&&(o===L||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},pn=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){zt(this,t)}};const wo=Ae.litHtmlPolyfillSupport;wo==null||wo(vi,Ti),((Ke=Ae.litHtmlVersions)!==null&&Ke!==void 0?Ke:Ae.litHtmlVersions=[]).push("2.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ze,Ye;let $t=class extends gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((i,o,r)=>{var s,n;const l=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:o;let a=l._$litPart$;if(a===void 0){const c=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=a=new Ti(o.insertBefore(ae(),c),c,void 0,r??{})}return a._$AI(i),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Et}};$t.finalized=!0,$t._$litElement$=!0,(Ze=globalThis.litElementHydrateSupport)===null||Ze===void 0||Ze.call(globalThis,{LitElement:$t});const $o=globalThis.litElementPolyfillSupport;$o==null||$o({LitElement:$t}),((Ye=globalThis.litElementVersions)!==null&&Ye!==void 0?Ye:globalThis.litElementVersions=[]).push("3.2.2");var Ge,Xe,we=window,Mi=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ri=Symbol(),xo=new WeakMap,Mr=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ri)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Mi&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=xo.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&xo.set(e,t))}return t}toString(){return this.cssText}},Je=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new Mr(i,t,Ri)},So=Mi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const o of e.cssRules)i+=o.cssText;return(o=>new Mr(typeof o=="string"?o:o+"",void 0,Ri))(i)})(t):t,ke=window,Ao=ke.trustedTypes,fn=Ao?Ao.emptyScript:"",ko=ke.reactiveElementPolyfillSupport,ce={toAttribute(t,e){switch(e){case Boolean:t=t?fn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Rr=(t,e)=>e!==t&&(e==e||t==t),Qe={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:Rr},bt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=Qe){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const r=this[t];this[e]=o,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Qe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(So(o))}else t!==void 0&&e.push(So(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{Mi?i.adoptedStyleSheets=o.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):o.forEach(r=>{const s=document.createElement("style"),n=we.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,i.appendChild(s)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Qe){var o;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:ce).toAttribute(e,i.type);this._$El=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,r=o._$Ev.get(t);if(r!==void 0&&this._$El!==r){const s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:ce;this._$El=r,this[r]=n.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Rr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};bt.finalized=!0,bt.elementProperties=new Map,bt.elementStyles=[],bt.shadowRootOptions={mode:"open"},ko==null||ko({ReactiveElement:bt}),((Ge=ke.reactiveElementVersions)!==null&&Ge!==void 0?Ge:ke.reactiveElementVersions=[]).push("1.6.1");var Co,Ce=window,Vt=Ce.trustedTypes,Eo=Vt?Vt.createPolicy("lit-html",{createHTML:t=>t}):void 0,et=`lit$${(Math.random()+"").slice(9)}$`,Ur="?"+et,vn=`<${Ur}>`,Pt=document,he=(t="")=>Pt.createComment(t),de=t=>t===null||typeof t!="object"&&typeof t!="function",zo=Array.isArray,Zt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vo=/-->/g,Po=/>/g,lt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),To=/'/g,Mo=/"/g,Ro=/^(?:script|style|textarea|title)$/i,Uo=(Co=1,(t,...e)=>({_$litType$:Co,strings:t,values:e})),Y=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Lo=new WeakMap,xt=Pt.createTreeWalker(Pt,129,null,!1),Ee=class{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,s=0;const n=t.length-1,l=this.parts,[a,c]=((d,h)=>{const u=d.length-1,f=[];let b,w=h===2?"<svg>":"",m=Zt;for(let T=0;T<u;T++){const V=d[T];let j,C,A=-1,P=0;for(;P<V.length&&(m.lastIndex=P,C=m.exec(V),C!==null);)P=m.lastIndex,m===Zt?C[1]==="!--"?m=Vo:C[1]!==void 0?m=Po:C[2]!==void 0?(Ro.test(C[2])&&(b=RegExp("</"+C[2],"g")),m=lt):C[3]!==void 0&&(m=lt):m===lt?C[0]===">"?(m=b??Zt,A=-1):C[1]===void 0?A=-2:(A=m.lastIndex-C[2].length,j=C[1],m=C[3]===void 0?lt:C[3]==='"'?Mo:To):m===Mo||m===To?m=lt:m===Vo||m===Po?m=Zt:(m=lt,b=void 0);const k=m===lt&&d[T+1].startsWith("/>")?" ":"";w+=m===Zt?V+vn:A>=0?(f.push(j),V.slice(0,A)+"$lit$"+V.slice(A)+et+k):V+et+(A===-2?(f.push(void 0),T):k)}const y=w+(d[u]||"<?>")+(h===2?"</svg>":"");if(!Array.isArray(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Eo!==void 0?Eo.createHTML(y):y,f]})(t,e);if(this.el=Ee.createElement(a,i),xt.currentNode=this.el.content,e===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(o=xt.nextNode())!==null&&l.length<n;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const h of o.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(et)){const u=c[s++];if(d.push(h),u!==void 0){const f=o.getAttribute(u.toLowerCase()+"$lit$").split(et),b=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:b[2],strings:f,ctor:b[1]==="."?mn:b[1]==="?"?bn:b[1]==="@"?yn:Ue})}else l.push({type:6,index:r})}for(const h of d)o.removeAttribute(h)}if(Ro.test(o.tagName)){const d=o.textContent.split(et),h=d.length-1;if(h>0){o.textContent=Vt?Vt.emptyScript:"";for(let u=0;u<h;u++)o.append(d[u],he()),xt.nextNode(),l.push({type:2,index:++r});o.append(d[h],he())}}}else if(o.nodeType===8)if(o.data===Ur)l.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(et,d+1))!==-1;)l.push({type:7,index:r}),d+=et.length-1}r++}}static createElement(t,e){const i=Pt.createElement("template");return i.innerHTML=t,i}};function Tt(t,e,i=t,o){var r,s,n,l;if(e===Y)return e;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const c=de(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),c===void 0?a=void 0:(a=new c(t),a._$AT(t,i,o)),o!==void 0?((n=(l=i)._$Co)!==null&&n!==void 0?n:l._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(e=Tt(t,a._$AS(t,e.values),a,o)),e}var ze=class{constructor(t,e,i,o){var r;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Tt(this,t,e),de(t)?t===R||t==null||t===""?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==Y&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(i=>zo(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function")(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==R&&de(this._$AH)?this._$AA.nextSibling.data=t:this.T(Pt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Ee.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(i);else{const s=new class{constructor(l,a){this.u=[],this._$AN=void 0,this._$AD=l,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(l){var a;const{el:{content:c},parts:d}=this._$AD,h=((a=l==null?void 0:l.creationScope)!==null&&a!==void 0?a:Pt).importNode(c,!0);xt.currentNode=h;let u=xt.nextNode(),f=0,b=0,w=d[0];for(;w!==void 0;){if(f===w.index){let m;w.type===2?m=new ze(u,u.nextSibling,this,l):w.type===1?m=new w.ctor(u,w.name,w.strings,this,l):w.type===6&&(m=new _n(u,this,l)),this.u.push(m),w=d[++b]}f!==(w==null?void 0:w.index)&&(u=xt.nextNode(),f++)}return h}p(l){let a=0;for(const c of this.u)c!==void 0&&(c.strings!==void 0?(c._$AI(l,c,a),a+=c.strings.length-2):c._$AI(l[a])),a++}}(r,this),n=s.v(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(t){let e=Lo.get(t.strings);return e===void 0&&Lo.set(t.strings,e=new Ee(t)),e}k(t){zo(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new ze(this.O(he()),this.O(he()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ue=class{constructor(t,e,i,o,r){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const r=this.strings;let s=!1;if(r===void 0)t=Tt(this,t,e,0),s=!de(t)||t!==this._$AH&&t!==Y,s&&(this._$AH=t);else{const n=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=Tt(this,n[i+l],e,l),a===Y&&(a=this._$AH[l]),s||(s=!de(a)||a!==this._$AH[l]),a===R?t=R:t!==R&&(t+=(a??"")+r[l+1]),this._$AH[l]=a}s&&!o&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},mn=class extends Ue{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}},gn=Vt?Vt.emptyScript:"",bn=class extends Ue{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,gn):this.element.removeAttribute(this.name)}},yn=class extends Ue{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=Tt(this,t,e,0))!==null&&i!==void 0?i:R)===Y)return;const o=this._$AH,r=t===R&&o!==R||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==R&&(o===R||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},_n=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Tt(this,t)}},Oo=Ce.litHtmlPolyfillSupport;Oo==null||Oo(Ee,ze),((Xe=Ce.litHtmlVersions)!==null&&Xe!==void 0?Xe:Ce.litHtmlVersions=[]).push("2.6.1");var ti,ei,ee=class extends bt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((i,o,r)=>{var s,n;const l=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:o;let a=l._$litPart$;if(a===void 0){const c=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=a=new ze(o.insertBefore(he(),c),c,void 0,r??{})}return a._$AI(i),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Y}};ee.finalized=!0,ee._$litElement$=!0,(ti=globalThis.litElementHydrateSupport)===null||ti===void 0||ti.call(globalThis,{LitElement:ee});var Io=globalThis.litElementPolyfillSupport;Io==null||Io({LitElement:ee}),((ei=globalThis.litElementVersions)!==null&&ei!==void 0?ei:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var ie,wn=Je`
  ${Je`
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
  ${Je`
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
`,mi=1,No=3,Fo=4,Lr=t=>(...e)=>({_$litDirective$:t,values:e}),Or=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},$n={},xn=Lr(class extends Or{constructor(t){if(super(t),t.type!==No&&t.type!==mi&&t.type!==Fo)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>e.strings===void 0)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Y||e===R)return e;const i=t.element,o=t.name;if(t.type===No){if(e===i[o])return Y}else if(t.type===Fo){if(!!e===i.hasAttribute(o))return Y}else if(t.type===mi&&i.getAttribute(o)===e+"")return Y;return((r,s=$n)=>{r._$AH=s})(t),e}}),Ir=Object.defineProperty,Sn=Object.defineProperties,An=Object.getOwnPropertyDescriptor,kn=Object.getOwnPropertyDescriptors,Ho=Object.getOwnPropertySymbols,Cn=Object.prototype.hasOwnProperty,En=Object.prototype.propertyIsEnumerable,Do=(t,e,i)=>e in t?Ir(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Ot=(t,e)=>{for(var i in e||(e={}))Cn.call(e,i)&&Do(t,i,e[i]);if(Ho)for(var i of Ho(e))En.call(e,i)&&Do(t,i,e[i]);return t},Ui=(t,e)=>Sn(t,kn(e)),z=(t,e,i,o)=>{for(var r,s=o>1?void 0:o?An(e,i):e,n=t.length-1;n>=0;n--)(r=t[n])&&(s=(o?r(e,i,s):r(s))||s);return o&&s&&Ir(e,i,s),s},Yt=new WeakMap,jo=new WeakMap,Gt=new WeakMap,gi=new Set,zn=new MutationObserver(Hr),_t=new Map,Nr=document.documentElement.dir||"ltr",Fr=document.documentElement.lang||navigator.language;function Hr(){Nr=document.documentElement.dir||"ltr",Fr=document.documentElement.lang||navigator.language,[...gi.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}zn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var Vn=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){gi.add(this.host)}hostDisconnected(){gi.delete(this.host)}dir(){return`${this.host.dir||Nr}`.toLowerCase()}lang(){return`${this.host.lang||Fr}`.toLowerCase()}term(t,...e){var i,o;const r=new Intl.Locale(this.lang()),s=r==null?void 0:r.language.toLowerCase(),n=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",l=_t.get(`${s}-${n}`),a=_t.get(s);let c;if(l&&l[t])c=l[t];else if(a&&a[t])c=a[t];else{if(!ie||!ie[t])return console.error(`No translation found for: ${String(t)}`),String(t);c=ie[t]}return typeof c=="function"?c(...e):c}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}},Pn=class extends Vn{};(function(...t){t.map(e=>{const i=e.$code.toLowerCase();_t.has(i)?_t.set(i,Object.assign(Object.assign({},_t.get(i)),e)):_t.set(i,e),ie||(ie=e)}),Hr()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var me=t=>t??R;function ii(t,e){const i=Ot({waitUntilFirstUpdate:!1},e);return(o,r)=>{const{update:s}=o,n=Array.isArray(t)?t:[t];o.update=function(l){n.forEach(a=>{const c=a;if(l.has(c)){const d=l.get(c),h=this[c];d!==h&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[r](d,h))}}),s.call(this,l)}}}var Bo=Lr(class extends Or{constructor(t){var e;if(super(t),t.type!==mi||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,o;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.nt.add(s);return this.render(e)}const r=t.element.classList;this.nt.forEach(s=>{s in e||(r.remove(s),this.nt.delete(s))});for(const s in e){const n=!!e[s];n===this.nt.has(s)||!((o=this.st)===null||o===void 0)&&o.has(s)||(n?(r.add(s),this.nt.add(s)):(r.remove(s),this.nt.delete(s)))}return Y}}),Tn=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Ui(Ot({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function N(t){return(e,i)=>i!==void 0?((o,r,s)=>{r.constructor.createProperty(s,o)})(t,e,i):Tn(t,e)}function qo(t){return N(Ui(Ot({},t),{state:!0}))}var oi,Mn=({finisher:t,descriptor:e})=>(i,o)=>{var r;if(o===void 0){const s=(r=i.originalKey)!==null&&r!==void 0?r:i.key,n=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:Ui(Ot({},i),{key:s});return t!=null&&(n.finisher=function(l){t(l,s)}),n}{const s=i.constructor;e!==void 0&&Object.defineProperty(i,o,e(o)),t==null||t(s,o)}};function Wo(t,e){return Mn({descriptor:i=>{const o={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const r=typeof i=="symbol"?Symbol():"__"+i;o.get=function(){var s,n;return this[r]===void 0&&(this[r]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&n!==void 0?n:null),this[r]}}return o}})}(oi=window.HTMLSlotElement)===null||oi===void 0||oi.prototype.assignedElements;var bi=class extends ee{emit(t,e){const i=new CustomEvent(t,Ot({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}};z([N()],bi.prototype,"dir",2),z([N()],bi.prototype,"lang",2);/*! Bundled license information:

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
*/var ri,E=class extends bi{constructor(){super(...arguments),this.formControlController=new class{constructor(t,e){(this.host=t).addController(this),this.options=Ot({form:i=>{if(i.hasAttribute("form")&&i.getAttribute("form")!==""){const o=i.getRootNode(),r=i.getAttribute("form");if(r)return o.getElementById(r)}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null&&o},reportValidity:i=>typeof i.reportValidity!="function"||i.reportValidity(),setValue:(i,o)=>i.value=o},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(t){t?(this.form=t,Yt.has(this.form)?Yt.get(this.form).add(this.host):Yt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Gt.has(this.form)||(Gt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=Yt.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Gt.has(this.form)&&(this.form.reportValidity=Gt.get(this.form),Gt.delete(this.form))),this.form=void 0}handleFormData(t){const e=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="sl-button";!e&&!r&&typeof i=="string"&&i.length>0&&o!==void 0&&(Array.isArray(o)?o.forEach(s=>{t.formData.append(i,s.toString())}):t.formData.append(i,o.toString()))}handleFormSubmit(t){var e;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((e=Yt.get(this.form))==null||e.forEach(r=>{this.setUserInteracted(r,!0)})),!this.form||this.form.noValidate||i||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if(typeof e.reportValidity=="function"&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){jo.set(t,e),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{e.hasAttribute(o)&&i.setAttribute(o,e.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){var e;const i=this.host,o=!!jo.get(i),r=!!i.required;(e=this.form)!=null&&e.noValidate?(i.removeAttribute("data-required"),i.removeAttribute("data-optional"),i.removeAttribute("data-invalid"),i.removeAttribute("data-valid"),i.removeAttribute("data-user-invalid"),i.removeAttribute("data-user-valid")):(i.toggleAttribute("data-required",r),i.toggleAttribute("data-optional",!r),i.toggleAttribute("data-invalid",!t),i.toggleAttribute("data-valid",t),i.toggleAttribute("data-user-invalid",!t&&o),i.toggleAttribute("data-user-valid",t&&o))}updateValidity(){const t=this.host;this.setValidity(t.checkValidity())}}(this),this.hasSlotController=new class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}}(this,"help-text","label"),this.localize=new Pn(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",100*t+"%")}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,i=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=e*t;if(this.localize.dir()==="rtl"){const s=`${e-r}px + ${t} * ${o}`;this.output.style.translate=`calc((${s} - ${i/2}px - ${o} / 2))`}else{const s=`${r}px - ${t} * ${o}`;this.output.style.translate=`calc(${s} - ${i/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.syncTooltip(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e;return Uo`
      <div
        part="form-control"
        class=${Bo({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
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
            class=${Bo({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              .value=${xn(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip==="none"||this.disabled?"":Uo`
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
    `}};function Ko(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}E.styles=wn,z([Wo(".range__control")],E.prototype,"input",2),z([Wo(".range__tooltip")],E.prototype,"output",2),z([qo()],E.prototype,"hasFocus",2),z([qo()],E.prototype,"hasTooltip",2),z([N()],E.prototype,"title",2),z([N()],E.prototype,"name",2),z([N({type:Number})],E.prototype,"value",2),z([N()],E.prototype,"label",2),z([N({attribute:"help-text"})],E.prototype,"helpText",2),z([N({type:Boolean,reflect:!0})],E.prototype,"disabled",2),z([N({type:Number})],E.prototype,"min",2),z([N({type:Number})],E.prototype,"max",2),z([N({type:Number})],E.prototype,"step",2),z([N()],E.prototype,"tooltip",2),z([N({attribute:!1})],E.prototype,"tooltipFormatter",2),z([N({reflect:!0})],E.prototype,"form",2),z([((t="value")=>(e,i)=>{const o=e.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,n,l){var a;const c=o.getPropertyOptions(t);if(s===(typeof c.attribute=="string"?c.attribute:t)){const d=c.converter||ce,h=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:ce.fromAttribute)(l,c.type);this[t]!==h&&(this[i]=h)}r.call(this,s,n,l)}})()],E.prototype,"defaultValue",2),z([ii("value",{waitUntilFirstUpdate:!0})],E.prototype,"handleValueChange",1),z([ii("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1),z([ii("hasTooltip",{waitUntilFirstUpdate:!0})],E.prototype,"syncRange",1),E=z([(ri="sl-range",t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(ri,t):((e,i)=>{const{kind:o,elements:r}=i;return{kind:o,elements:r,finisher(s){customElements.define(e,s)}}})(ri,t))],E);var Xt=function(){try{window[H].updateSegments();var t=function(){if(!si)return si=!0,Promise.resolve(Promise.resolve(!1)).then(function(e){si=e,window[H].dispatchEvent(new Event("change"))})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},H="__foldables__",si=!1,Li=function(){function t(){var o=this;if(window[H]!==void 0)return window[H];var r=document.createDocumentFragment();this.addEventListener=r.addEventListener.bind(r),this.removeEventListener=r.removeEventListener.bind(r),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof o[n]=="function"&&o[n](s),r.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(o,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var l;return function(){var a=arguments,c=this;clearTimeout(l),l=setTimeout(function(){return s.apply(c,a)},n)}}(Xt(),200)})}var e,i=t.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var r=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,l=r/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:s,left:0,bottom:s+l,right:n,width:n,height:l},s+=o[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var c=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,h=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:h,right:h+c,bottom:d,width:c,height:d},h+=o[u].width,h+=this.foldSize;window.visualViewport.segments=o},i.randomizeSegmentsConfiguration=function(o){var r=Math.random()<.5,s=Math.round(Math.random()*(o-1)+1);r?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(e=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(H+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(H+"-horizontal-viewport-segments",o),Xt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(H+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(H+"-vertical-viewport-segments",o),Xt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(H+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(H+"-fold-size",o),Xt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(H+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(H+"-browser-shell-size",o),Xt()}}])&&function(o,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(t.prototype,e),t}();window[H]=new Li,window.visualViewport.segments===void 0&&window[H].updateSegments();var Dr="-viewport-segments",yi="(\\s*)(@media.*?\\b"+Dr+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",Rn=/\((.*?)\)/gi,Un=/@media[^\(]+/gi,Ln=/(horizontal-viewport-segments:)\s?(\d)/gi,On=/(vertical-viewport-segments:)\s?(\d)/gi,In=function(t){return new RegExp("env\\(\\s*"+t+"\\s*\\)","gi")};function Zo(t,e){var i=t.matchAll(e);return i===null?[]:Array.from(i,function(o){return o[2]})[0]}function Nn(t){var e=function(o){var r,s=new RegExp(yi,"gi");if(typeof o.matchAll=="function")r=Array.from(o.matchAll(s));else{for(r=[];r[r.length]=s.exec(o););r.length--}return r}(t),i=[[]];return e.forEach(function(o){var r=o[1],s=o[2],n=o[3],l=o[4],a=s.match(Un)||[],c=s.match(Rn)||[],d=Zo(s,On);d===void 0&&(d=1);var h=Zo(s,Ln);h===void 0&&(h=1),c=c.filter(function(u){return!u.includes(Dr)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][h]=""+r+a+c+"{"+n+l+"}"}),i}var _i=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+_i);var Yo,jr=new Li;if(!_i){var ni=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Yo=ni,Promise.all(Yo.map(function(t){return t.href?fetch(t.href).then(function(e){return e.text()}):t.textContent}))).then(function(t){var e=new DocumentFragment;t.forEach(function(i,o){for(var r,s=function(T,V){return T.replace(new RegExp(yi,"gi"),V)}(i,""),n=Nn(i),l=ni[o].href||"inline",a=0,c=Object.entries(n);a<c.length;a++){var d=c[a],h=d[0],u=d[1];oe[h]==null&&(oe[h]=[]);for(var f=0,b=Object.entries(u);f<b.length;f++){var w=b[f];oe[h][w[0]]="/* origin: "+l+" */"+w[1]}}if(l=="inline"||(r=i,new RegExp(yi,"gi").test(r))){var m=document.createElement("style");m.setAttribute("data-css-origin",l),m.textContent=s,e.appendChild(m)}else{var y=document.createElement("link");y.type="text/css",y.rel="stylesheet",y.href=l,e.appendChild(y)}}),ni.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(e),function(i){_i||(Go(i),jr.addEventListener("change",function(){return Go(i)}))}()})}var oe=[[]];function Go(t){var e,i=jr,o=null;(e=t?oe[t.nodeName.toLowerCase()]:oe)[i.verticalViewportSegments]&&(o=e[i.verticalViewportSegments][i.horizontalViewportSegments]);var r,s=e[0][0]?e[0][0]:null;if(o){var n=window.visualViewport.segments,l=!1;n.length>1&&(l=!(n[0].height<window.innerHeight));for(var a=0,c=Object.entries(n);a<c.length;a++)for(var d=c[a],h=d[0],u=0,f=Object.entries(d[1]);u<f.length;u++){var b=f[u],w=b[0];r=b[1]+"px",o=o.replace(In(l?"viewport-segment-"+w+" "+h+" 0":"viewport-segment-"+w+" 0 "+h),r)}var m="__foldables_sheet__",y=function(V,j){for(var C,A=function(k,pe){var I=typeof Symbol<"u"&&k[Symbol.iterator]||k["@@iterator"];if(I)return(I=I.call(k)).next.bind(I);if(Array.isArray(k)||(I=function(O,Ft){if(O){if(typeof O=="string")return Ko(O,Ft);var B=Object.prototype.toString.call(O).slice(8,-1);return B==="Object"&&O.constructor&&(B=O.constructor.name),B==="Map"||B==="Set"?Array.from(O):B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)?Ko(O,Ft):void 0}}(k))){I&&(k=I);var Nt=0;return function(){return Nt>=k.length?{done:!0}:{done:!1,value:k[Nt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(V.querySelectorAll("."+m));!(C=A()).done;)C.value.remove();var P=document.createElement("style");P.className=m,P.textContent=j,V===document?document.head.appendChild(P):V.appendChild(P)};if(t){var T=t.shadowRoot;"adoptedStyleSheets"in T&&T.adoptedStyleSheets.length>0?T.adoptedStyleSheets[0].replace(s+o):y(T,o)}else y(document,o)}}const Q={Foldable:"foldable",Dual:"dual"};class It extends $t{}g(It,"styles",Er`
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
  `);customElements.define("close-icon",class extends It{render(){return Lt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}});customElements.define("fullscreen-icon",class extends It{render(){return Lt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}});customElements.define("splitview-icon",class extends It{render(){return Lt`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}});customElements.define("rotate-icon",class extends It{render(){return Lt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}});customElements.define("minimize-icon",class extends It{render(){return Lt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}});class Br extends $t{constructor(){super();g(this,"_mini_configurator_header");g(this,"_mini_configurator");g(this,"_configurator");g(this,"_configurator_header");g(this,"_device_type_select");g(this,"_orientation_select");g(this,"_seam_slider");g(this,"_seam_container");g(this,"_preview");g(this,"_preview_container");g(this,"_device");g(this,"_frame");g(this,"_device_hinge");g(this,"_currentOrientation");g(this,"_currentDevice");g(this,"_isFullscreen",!1);g(this,"_verticalViewportSegments",1);g(this,"_horizontalViewportSegments",1);g(this,"_fold_width");g(this,"_browser_shell_size");g(this,"_x",0);g(this,"_y",0);g(this,"_offset_x",0);g(this,"_offset_y",0);g(this,"_resizeHandler");g(this,"_handleKeyUp",i=>{i.keyCode==73&&i.ctrlKey&&this._showMiniConfigurator()});g(this,"_startDragMiniConfigurator",async i=>{this._startDrag(i),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove});g(this,"_startDragConfigurator",async i=>{this._startDrag(i),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove});g(this,"_startDrag",async i=>{this._isFullscreen||(this._moved=!1,this._x=i.clientX-this._offset_x,this._y=i.clientY-this._offset_y,this._pointerId=i.pointerId,i.preventDefault())});g(this,"_miniConfiguratorMove",async i=>{this._pointerMove(i),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}});g(this,"_pointerMove",async i=>{if(i.clientY<0||i.clientX<0||i.clientX>window.innerWidth||i.clientY>window.innerHeight)return;let o=i.clientX-this._x,r=i.clientY-this._y;const s=window.getComputedStyle(this.shadowRoot.host),n=parseFloat(s.width),l=parseFloat(s.height);o<0&&(o=0),r<0&&(r=0),r+l>=window.innerHeight&&(r=window.innerHeight-l),o+n>=window.innerWidth&&(o=window.innerWidth-n),this._updateConfiguratorPosition(o,r),i.preventDefault()});g(this,"_stopDragConfigurator",async i=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});g(this,"_stopDragMiniConfigurator",async i=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});g(this,"_stopDrag",async i=>{this._x=this._offset_x,this._y=this._offset_y});g(this,"_onResize",async i=>{this._handleAsusSpanning()});g(this,"_seamValueUpdated",async()=>{this.foldWidth=this._seam_slider.value,this.shadowRoot.host.style.setProperty("--device-fold-width",this.foldWidth+"px"),this._updateFoldablesFeature()});g(this,"_rotationFinished",i=>{this._preview.style.transition=""});this._verticalViewportSegments=1,this._horizontalViewportSegments=1}static get properties(){return{verticalViewportSegments:{type:Number},horizontalViewportSegments:{type:Number}}}_inIframe(){try{return window.self!==window.top}catch{return!0}}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches)return console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this);const i=window.getComputedStyle(this.shadowRoot.host);parseFloat(i.width);const o=parseFloat(i.height);this._updateConfiguratorPosition(20,window.innerHeight-o-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._verticalViewportSegments=1,this._horizontalViewportSegments=1,this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="portrait",this._deviceType=Q.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.horizontalViewportSegments=1,this.verticalViewportSegments=2,this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{this._addZenbookVariables(document.styleSheets[0]),this._addZenbookVariables(this._frame.contentDocument.styleSheets[0])},300)):(this.horizontalViewportSegments=1,this.verticalViewportSegments=1,this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this._orientationFromSegments()}_orientationFromSegments(){return this.horizontalViewportSegments===2&&this.verticalViewportSegments===1?"portrait":this.horizontalViewportSegments===1&&this.verticalViewportSegments===2?"landscape":"portrait"}_addZenbookVariables(i){i.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",i.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(i){this._fold_width=Math.max(0,i)}_orientationChanged(i){const o=this._orientation_select.selectedIndex;this._orientation_select[o].value==="portrait"?(this.horizontalViewportSegments=2,this.verticalViewportSegments=1):(this.horizontalViewportSegments=1,this.verticalViewportSegments=2),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){this._orientationFromSegments()!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this._orientationFromSegments(),this.horizontalViewportSegments===1&&this.verticalViewportSegments===1?this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation():this.horizontalViewportSegments===2?this._applyVerticalRotation():this._applyHorizontalRotation()}get horizontalViewportSegments(){return this._horizontalViewportSegments}set horizontalViewportSegments(i){let o=this._horizontalViewportSegments;this._orientation_select.selectedIndex=i===2?0:1,this._horizontalViewportSegments=i,this.requestUpdate("horizontalViewportSegments",o)}get verticalViewportSegments(){return this._verticalViewportSegments}set verticalViewportSegments(i){let o=this._verticalViewportSegments;this._orientation_select.selectedIndex=i===2?1:0,this._verticalViewportSegments=i,this.requestUpdate("verticalViewportSegments",o)}_deviceTypeChanged(i){const o=this._device_type_select.selectedIndex,r=this._device_type_select[o].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(this.verticalViewportSegments=1,this.horizontalViewportSegments=2,this._currentOrientation="portrait"),r){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this.foldWidth=24,this._deviceType=Q.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Q.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Q.Dual,this.foldWidth=28,this._currentDevice="duo";break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=Q.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Q.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this.verticalViewportSegments=1,this.horizontalViewportSegments=1,this._currentOrientation="portrait",this._currentDevice="duo",this.foldWidth=0,this._deviceType=Q.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature(),this._frame.contentWindow.location.reload(!0)}_calculateAndApplyScaleFactor(){const i=window.getComputedStyle(this._preview_container),o=window.getComputedStyle(this._device),r=parseInt(i.width,10),s=parseInt(i.height,10);let n=parseInt(o.width,10),l=parseInt(o.height,10),a=1;if(this._currentOrientation==="landscape"&&(n=parseInt(o.height,10),l=parseInt(o.width,10)),l>s||n>r){const c=s/l,d=r/n;a=d<c?d:c}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*a)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px")}this._deviceType===Q.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const i=new Li;i.foldSize=this.foldWidth,i.horizontalViewportSegments=this.horizontalViewportSegments,i.verticalViewportSegments=this.verticalViewportSegments,this._seam_slider.value=this.foldWidth}_debounce(i,o){let r;return function(){clearTimeout(r),r=setTimeout(()=>i.apply(this,arguments),o)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let i=this._offset_x,o=this._offset_y;const r=window.getComputedStyle(this.shadowRoot.host),s=parseFloat(r.width),n=parseFloat(r.height);this._offset_y+n>=window.innerHeight&&(o=window.innerHeight-n),this._offset_x+s>=window.innerWidth&&(i=window.innerWidth-s),this._updateConfiguratorPosition(i,o),this._updatePreviewConfiguration()}_updateConfiguratorPosition(i,o){this._offset_x=i,this._offset_y=o,this.shadowRoot.host.style.transform="translate3d("+i+"px, "+o+"px, 0)"}_toggleSpanning(){this.verticalViewportSegments!=1||this.horizontalViewportSegments!=1?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1||(this.verticalViewportSegments===2?(this.verticalViewportSegments=1,this.horizontalViewportSegments=2):(this.verticalViewportSegments=2,this.horizontalViewportSegments=1),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return Lt`
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
    </div>`}}g(Br,"styles",Er`
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
  `);customElements.define("foldable-device-configurator",Br);const q=[{name:"aurora",alt:"This is a beautiful picture of an air balloon in the sky.",channel:"SkyExplorer",title:"Auroras at night",views:"2M",date:"2 years",subscribers:"5M",description:"Filming Aurora in Norway. I was able to capture this beautiful nature show."},{name:"bird",alt:"Video of a red parrot",channel:"AnimalLover",title:"Beautiful red parrot",views:"3M",date:"1 year",subscribers:"5M",description:"Close up view on a red parrot from the Amazonia forest."},{name:"cat",alt:"Video of black and white cat",channel:"AnimalLover",title:"My beautiful cat",views:"10M",date:"5 month",subscribers:"5M",description:"Close up view on a black and white cat."},{name:"christmas",alt:"Video of a christmas ornament in the christmas tree",channel:"The joy of Christmas",title:"Handmade ornament",views:"500k",date:"3 years",subscribers:"5M",description:"Home made ornament turned out quite good when put up in the christmas tree."},{name:"clock",alt:"Video of a clock ticking",channel:"TikClock",title:"Close view of a ticking watch",views:"1M",date:"2 days",subscribers:"50k",description:"Showing the inner wheels of an old watch."},{name:"city",alt:"Video of a city",channel:"Architecture Lovers",title:"Fly by of a city",views:"20M",date:"2 months",subscribers:"245k",description:"Fly by in a city between the skyscrapers."},{name:"cloud",alt:"Video of clouds in the sky",channel:"SkyExplorer",title:"Beautiful clouds",views:"1M",date:"2 days",subscribers:"5M",description:"Filming the clouds as close as possible."},{name:"coffee",alt:"Video of coffee beans",channel:"Food Channel",title:"Inside a coffee factory",views:"200M",date:"1 year and 2 months",subscribers:"756k",description:"Close up of beans falling into a container for processing."},{name:"fish",alt:"Video of fishes in the ocean",channel:"Under the sea",title:"Inside a coffee factory",views:"200M",date:"1 year and 2 months",subscribers:"345k",description:"Underwater filming of a big group of blue fish which are bioluminescent."},{name:"flowers",alt:"Video of flowers with a human hand touching them",channel:"The Botanic Channel",title:"Spring is coming",views:"1M",date:"2 year and 2 months",subscribers:"3M",description:"Beautiful tree flowers blooming as the spring is coming."},{name:"flowers2",alt:"Video of flowers with a human hand touching them",channel:"The Botanic Channel",title:"Exploring the fields",views:"13M",date:"1 year and 9 months",subscribers:"3M",description:"Walking inside a field of flowers and touching them as I walk by."},{name:"forest",alt:"Video of a forest with snow",channel:"Into the woods",title:"Hike in the winter forest",views:"300K",date:"12 days",subscribers:"9M",description:"Hiking inside the forest during winter."},{name:"forest2",alt:"Video of a forest and cloudy sky",channel:"Into the woods",title:"Exploring the foggy forest",views:"546K",date:"45 days",subscribers:"9M",description:"The local forest was foggy during my morning hike, I recorded that shot while exploring."},{name:"frog",alt:"Video of a frog on a branch",channel:"AnimalLover",title:"What a cute frog",views:"908K",date:"2 hours",subscribers:"5M",description:"Close up view of a frog inside the Amazonian forest."},{name:"hand",alt:"Video of a human hand with sand",channel:"Smith32",title:"Macro of my sandy hand",views:"205K",date:"4 minutes",subscribers:"345",description:"Close up shot of sand running off my hand."},{name:"ink",alt:"Video of inking spreading in water",channel:"The digital artist",title:"Ink under water",views:"76M",date:"yesterday",subscribers:"1M",description:"Underwater filming of ink dropped into water."},{name:"jellyfish",alt:"Video of jellyfishes",channel:"Under the sea",title:"Jellyfishes under water",views:"32M",date:"3 months",subscribers:"345k",description:"Beautiful jellyfishes swimming as we scuba dive in Costa Rica."},{name:"mountains",alt:"Videos of a mountains with snow",channel:"TheClimber",title:"My view of the snowy mountain",views:"12M",date:"4 days",subscribers:"2M",description:"Filming the mountains while at the summit. You can see the sea of clouds"},{name:"mountains2",alt:"Videos of a mountains",channel:"TheClimber",title:"Exploring a pacific volcano",views:"23M",date:"23 days",subscribers:"2M",description:"Arial shot of a pacific island with the volcano crater."},{name:"ocean",alt:"Video of an ocean with waves",channel:"Under the sea",title:"Drone shot of the beach",views:"3M",date:"6 years",subscribers:"345k",description:"Shooting the waves on my local beach with a drone."},{name:"ocean2",alt:"Video of an ocean",channel:"Under the sea",title:"Calm and peaceful ocean",views:"6M",date:"3 years and 9 months",subscribers:"345k",description:"Drone footage of a the ocean at the end of the afternoon. It's calming with the waves slowly moving."},{name:"parachute",alt:"Video of a a man riding a parachute over mountains",channel:"Adrenaline Junkies",title:"Gliding in the sky",views:"5M",date:"today",subscribers:"23M",description:"Riding of the mountain and gliding over the valley."},{name:"particles",alt:"Video of green particles flying",channel:"The digital artist",title:"Green flying particles",views:"3M",date:"1 month",subscribers:"25M",description:"Green particles generated using a computer."},{name:"particles2",alt:"Video of yellow particles flying",channel:"The digital artist",title:"Fire particles effect",views:"11M",date:"2 years",subscribers:"25M",description:"Yellow particles generated using a computer."},{name:"road",alt:"Video of a road",channel:"SkyExplorer",title:"Drone shot of a road",views:"1M",date:"7 years",subscribers:"5M",description:"Filming the road in the countryside using my new drone."},{name:"sunrise",alt:"Video of a sunrise over a tree",channel:"SkyExplorer",title:"Sunrise by the tree",views:"45M",date:"4 years",subscribers:"5M",description:"Filing the sun rising inside my local forest. What a beautiful view."},{name:"sunset",alt:"Video of a sunset over a city",channel:"SkyExplorer",title:"Sunset over the city",views:"21M",date:"8 months",subscribers:"5M",description:"Enjoying the sunset happening over the city."},{name:"surf",alt:"Video of a man surfing",channel:"Under the sea",title:"Surfing the wave",views:"500M",date:"1 year and 10 months",subscribers:"345k",description:"Filing a surfer riding a wave."},{name:"train",alt:"Aerial video of a train",channel:"SkyExplorer",title:"Drone shot of a train",views:"67M",date:"5 months",subscribers:"5M",description:"Getting the drone to shot a moving train somewhere in the mountains."},{name:"vinyl",alt:"Video of a vinyl disc playing",channel:"The Note",title:"Vinyl playing close up",views:"45K",date:"14 hours",subscribers:"2k",description:"Close up view of vinyl playing"}];function qr(){for(let t=q.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1)),i=q[t];q[t]=q[e],q[e]=i}return q}function Fn(t){if(t===void 0)return q;let e=[];for(let i=0,o=0;i<q.length-1;i++)q[i].title.includes(t)&&(e[o]=q[i],o++);return e}function Hn(t){for(var e=q.length-1;e>0;e--)if(q[e].name===t)return q[e];return null}const vt=[{name:"John Doe",likes:"50",dislikes:"2",date:"3 days",comment:"This is an amazing video. Thanks for doing this."},{name:"Ruth D",likes:"30",dislikes:"0",date:"5 days",comment:"Great quality, please keep posting."},{name:"Ana M",likes:"200",dislikes:"1",date:"2 months",comment:"I always enjoy when this channel posts content."},{name:"Steve",likes:"10",dislikes:"15",date:"5 months",comment:"I would like longer shots, please."},{name:"Colin",likes:"1",dislikes:"1",date:"1 day",comment:"What a delight to watch!"},{name:"Pearl",likes:"3",dislikes:"0",date:"4 days",comment:"Attention to details is so good."},{name:"Alex",likes:"10",dislikes:"0",date:"2 months",comment:"I'm sure the next video will be amazing."},{name:"Rachel",likes:"110",dislikes:"3",date:"1 week",comment:"High quality content."},{name:"Thay",likes:"12",dislikes:"0",date:"2 days",comment:"Very good angle, I love it."},{name:"Liz",likes:"1",dislikes:"0",date:"5 months",comment:"Can't wait the next video."},{name:"Mark W",likes:"10",dislikes:"15",date:"2 hours",comment:"Great content as always."},{name:"Roberta N",likes:"25",dislikes:"1",date:"4 months",comment:"Keep uploading."}];function Xo(){for(let t=vt.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1)),i=vt[t];vt[t]=vt[e],vt[e]=i}return vt}const Dn=(t,...e)=>{const i=Mt(t[0],"title-bar");return D([i],...e)};class Wr extends G{constructor(){super(...arguments);g(this,"_searchInput")}connectedCallback(){super.connectedCallback(),pt(this)}firstUpdated(){this._searchInput=this.shadowRoot.querySelector("#search-input")}_redirectToHomePage(){document.location.href="/"}_textChanged(){let i=new CustomEvent("search-text-changed",{detail:{message:"search text changed",text:this._searchInput.value},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){return U`
            <div class="root">
                <sl-icon-button src="images/play-button.svg" label="FoldTube" class="logo" @click="${this._redirectToHomePage}"></sl-icon-button>
                <sl-input id="search-input" placeholder="Search" size="medium" pill class="search" @sl-change="${this._textChanged}">
                    <sl-icon name="search" slot="suffix" @click="${this._textChanged}"></sl-icon>
                </sl-input>
                <sl-icon name="bell" class="icon"></sl-icon>
                <sl-icon name="person" class="icon"></sl-icon>
            </div>
            `}}g(Wr,"styles",Dn`
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
    `);customElements.define("title-bar",Wr);const jn=(t,...e)=>{const i=Mt(t[0],"side-bar");return D([i],...e)};class Kr extends G{connectedCallback(){super.connectedCallback(),pt(this)}_videoClicked(e){let i=new CustomEvent("video-selected",{detail:{message:"search text changed",video:e.currentTarget},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){return U`
            <div class="root">
                ${qr().map(e=>U`
                    <video-thumbnail src="${e.name}" alt=${e.alt} title="${e.title}" date="${e.date}"
                    views="${e.views}" channel="${e.channel}" subscribers="${e.subscribers}" 
                    description="${e.description}" @click="${this._videoClicked}" horizontalLayout>
                    </video-thumbnail>
                `)}
            </div>
            `}}g(Kr,"styles",jn`
        .root {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
    `);customElements.define("side-bar",Kr);const Bn=(t,...e)=>{const i=Mt(t[0],"comments-section");return D([i],...e)};class Zr extends G{connectedCallback(){super.connectedCallback(),pt(this)}_random_color(){const e=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256),o=Math.floor(Math.random()*256);return"rgb("+e+","+i+","+o+")"}render(){return U`
        <div class="root">
            <div class="comments-header">${Xo().length} comments</div>
            ${Xo().map(e=>U`
                <div class="comment-container">
                    <div class="name-image" style="background-color: ${this._random_color()};">
                        ${e.name[0]}
                    </div>
                    <div class="comment-details">
                        <div class="name-details">
                            ${e.name} 
                            <div class="date-details">${e.date} ago</div>
                        </div>
                        <div class="comment-text">${e.comment}</div>
                        <div class="like-section">
                            <div class="date-details">
                            <sl-icon-button class="video-actions" name="hand-thumbs-up" label="like"></sl-icon-button> ${e.likes} 
                            <sl-icon-button class="video-actions" name="hand-thumbs-down" label="dislike"></sl-icon-button> ${e.dislikes}</div>
                        </div>
                    </div>
                </div>
            `)}
        </div>
        `}}g(Zr,"styles",Bn`
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
    `);customElements.define("comments-section",Zr);const qn=(t,...e)=>{const i=Mt(t[0],"video-player");return D([i],...e)};class Yr extends G{static get properties(){return{src:{type:String,reflectToAttribute:!0,attribute:!0},alt:{type:String,reflectToAttribute:!0,attribute:!0},title:{type:String,reflectToAttribute:!0,attribute:!0},channel:{type:String,reflectToAttribute:!0,attribute:!0},views:{type:String,reflectToAttribute:!0,attribute:!0},subscribers:{type:String,reflectToAttribute:!0,attribute:!0},date:{type:String,reflectToAttribute:!0,attribute:!0},description:{type:String,reflectToAttribute:!0,attribute:!0}}}set src(e){let i=this._src;this._src=e,this._video.load(),this.requestUpdate("src",i),this.play()}get src(){return this._src}set alt(e){let i=this._alt;this._alt=e,this.requestUpdate("alt",i)}get alt(){return this._alt}set title(e){let i=this._title;this._title=e,this.requestUpdate("title",i)}get title(){return this._title}set channel(e){let i=this._channel;this._channel=e,this.requestUpdate("channel",i)}get channel(){return this._channel}set views(e){let i=this._views;this._views=e,this.requestUpdate("views",i)}get views(){return this._views}set subscribers(e){let i=this._subscribers;this._subscribers=e,this.requestUpdate("subscribers",i)}get subscribers(){return this._subscribers}set date(e){let i=this._date;this._date=e,this.requestUpdate("date",i)}get date(){return this._date}set description(e){let i=this._description;this._description=e,this.requestUpdate("description",i)}get description(){return this._description}firstUpdated(){this._video=this.shadowRoot.querySelector("#video"),this._source=this.shadowRoot.querySelector("#source")}constructor(){super(),this._src="",this._alt="",this._title="",this._channel="",this._views="",this._date="",this._subscribers="",this._description=""}connectedCallback(){super.connectedCallback(),pt(this)}play(){this._video.play()}closePlayer(){this._video.pause(),this.shadowRoot.host.style.display="none"}_openVideo(e){this._video.pause();const i=e.detail.video;this.src=i.src,this.alt=i.alt,this.title=i.title,this.date=i.date,this.views=i.views,this.channel=i.channel,this.subscribers=i.subscribers,this.description=i.description,this._video.play();const o=document.location.href;history.pushState({video:this.src},null,o.substring(0,o.lastIndexOf("/"))+"/"+this.title)}render(){return U`
            <div class="root">
                <div class="content">
                    <div class="video-container">
                        <video preload="metadata" alt="${this.alt}" controls id="video">
                            <source src="videos/${this.src}.mp4" type="video/mp4" id="source">
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
                    <div class="fold"></div>
                    <side-bar @video-selected="${this._openVideo}"></side-bar>
                </div>
            </div>
        `}}g(Yr,"styles",qn`
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

        .fold {
            display: none;
        }

        side-bar {
            width: 40%;
        }

        @media (horizontal-viewport-segments: 2) {
            .video-container {
                width: env(viewport-segment-width 0 0);
            }

            .fold {
                display: block;
                width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
            }

            side-bar {
                width: env(viewport-segment-width 1 0);
            }
        }
    `);customElements.define("video-player",Yr);const Wn=(t,...e)=>{const i=Mt(t[0],"video-thumbnail");return D([i],...e)};class Gr extends G{static get properties(){return{src:{type:String,reflectToAttribute:!0,attribute:!0},title:{type:String,reflectToAttribute:!0,attribute:!0},channel:{type:String,reflectToAttribute:!0,attribute:!0},views:{type:String,reflectToAttribute:!0,attribute:!0},subscribers:{type:String,reflectToAttribute:!0,attribute:!0},date:{type:String,reflectToAttribute:!0,attribute:!0},alt:{type:String,reflectToAttribute:!0,attribute:!0},description:{type:String,reflectToAttribute:!0,attribute:!0},horizontalLayout:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set src(e){let i=this._src;this._src=e,this.requestUpdate("src",i)}get src(){return this._src}set title(e){let i=this._title;this._title=e,this.requestUpdate("title",i)}get title(){return this._title}set channel(e){let i=this._channel;this._channel=e,this.requestUpdate("channel",i)}get channel(){return this._channel}set views(e){let i=this._views;this._views=e,this.requestUpdate("views",i)}get views(){return this._views}set subscribers(e){let i=this._subscribers;this._subscribers=e,this.requestUpdate("subscribers",i)}get subscribers(){return this._subscribers}set date(e){let i=this._date;this._date=e,this.requestUpdate("date",i)}get date(){return this._date}set alt(e){let i=this._alt;this._alt=e,this.requestUpdate("alt",i)}get alt(){return this._alt}set description(e){let i=this._description;this._description=e,this.requestUpdate("description",i)}get description(){return this._description}set horizontalLayout(e){let i=this._horizontalLayout;this._horizontalLayout=e,this.requestUpdate("horizontalLayout",i)}get horizontalLayout(){return this._horizontalLayout}firstUpdated(){}constructor(){super(),this._src="",this._alt="",this._title="",this._channel="",this._views="",this._date="",this._subscribers="",this._description="",this._horizontalLayout=!1}connectedCallback(){super.connectedCallback(),pt(this)}render(){return U`
            <div class="root ${this.horizontalLayout?"horizontal":"vertical"}">
                <div class="thumbnail ${this.horizontalLayout?"thumbnail-horizontal":""}">
                    <picture>
                        <source srcset="images/thumbnails/${this.src}.webp" type="image/webp">
                        <img class="thumbnail-image" src="images/thumbnails/${this.src}.jpg" alt="${this.alt}"/>
                    </picture>
                </div>
                <div class="details ${this.horizontalLayout?"":"margin-top"}">
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
        `}}g(Gr,"styles",Wn`
        :host {
            width: 100%;
            height: 100%;
            cursor: pointer;
        }

        .root {
            display: flex;
            align-self: start;
            margin: 10px;
        }

        .vertical {
            flex-direction: column;
            margin-left: 10px;
        }

        .horizontal {
            flex-direction: row;
        }

        .thumbnail {
            width: 100%;
        }

        .thumbnail-horizontal {
            width: 50%;
        }

        .thumbnail-image {
            max-width: 100%;
            border-radius: 10px;
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
        }

        .margin-top {
            margin-top: 10px;
        }

        .hidden {
            display: none;
        }
    `);customElements.define("video-thumbnail",Gr);try{self["workbox:window:7.0.0"]&&_()}catch{}function wi(t,e){return new Promise(function(i){var o=new MessageChannel;o.port1.onmessage=function(r){i(r.data)},t.postMessage(e,[o.port2])})}function Kn(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Jo(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function Zn(t,e){var i;if(typeof Symbol>"u"||t[Symbol.iterator]==null){if(Array.isArray(t)||(i=function(r,s){if(r){if(typeof r=="string")return Jo(r,s);var n=Object.prototype.toString.call(r).slice(8,-1);return n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set"?Array.from(r):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Jo(r,s):void 0}}(t))||e&&t&&typeof t.length=="number"){i&&(t=i);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(i=t[Symbol.iterator]()).next.bind(i)}try{self["workbox:core:7.0.0"]&&_()}catch{}var ai=function(){var t=this;this.promise=new Promise(function(e,i){t.resolve=e,t.reject=i})};function li(t,e){var i=location.href;return new URL(t,i).href===new URL(e,i).href}var Jt=function(t,e){this.type=t,Object.assign(this,e)};function ge(t,e,i){return i?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function Yn(){}var Gn={type:"SKIP_WAITING"};function Qo(t,e){if(!e)return t&&t.then?t.then(Yn):Promise.resolve()}var Xn=function(t){var e,i;function o(l,a){var c,d;return a===void 0&&(a={}),(c=t.call(this)||this).nn={},c.tn=0,c.rn=new ai,c.en=new ai,c.on=new ai,c.un=0,c.an=new Set,c.cn=function(){var h=c.fn,u=h.installing;c.tn>0||!li(u.scriptURL,c.sn.toString())||performance.now()>c.un+6e4?(c.vn=u,h.removeEventListener("updatefound",c.cn)):(c.hn=u,c.an.add(u),c.rn.resolve(u)),++c.tn,u.addEventListener("statechange",c.ln)},c.ln=function(h){var u=c.fn,f=h.target,b=f.state,w=f===c.vn,m={sw:f,isExternal:w,originalEvent:h};!w&&c.mn&&(m.isUpdate=!0),c.dispatchEvent(new Jt(b,m)),b==="installed"?c.wn=self.setTimeout(function(){b==="installed"&&u.waiting===f&&c.dispatchEvent(new Jt("waiting",m))},200):b==="activating"&&(clearTimeout(c.wn),w||c.en.resolve(f))},c.dn=function(h){var u=c.hn,f=u!==navigator.serviceWorker.controller;c.dispatchEvent(new Jt("controlling",{isExternal:f,originalEvent:h,sw:u,isUpdate:c.mn})),f||c.on.resolve(u)},c.gn=(d=function(h){var u=h.data,f=h.ports,b=h.source;return ge(c.getSW(),function(){c.an.has(b)&&c.dispatchEvent(new Jt("message",{data:u,originalEvent:h,ports:f,sw:b}))})},function(){for(var h=[],u=0;u<arguments.length;u++)h[u]=arguments[u];try{return Promise.resolve(d.apply(this,h))}catch(f){return Promise.reject(f)}}),c.sn=l,c.nn=a,navigator.serviceWorker.addEventListener("message",c.gn),c}i=t,(e=o).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var r,s,n=o.prototype;return n.register=function(l){var a=(l===void 0?{}:l).immediate,c=a!==void 0&&a;try{var d=this;return function(h,u){var f=h();return f&&f.then?f.then(u):u(f)}(function(){if(!c&&document.readyState!=="complete")return Qo(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return d.mn=!!navigator.serviceWorker.controller,d.yn=d.pn(),ge(d.bn(),function(h){d.fn=h,d.yn&&(d.hn=d.yn,d.en.resolve(d.yn),d.on.resolve(d.yn),d.yn.addEventListener("statechange",d.ln,{once:!0}));var u=d.fn.waiting;return u&&li(u.scriptURL,d.sn.toString())&&(d.hn=u,Promise.resolve().then(function(){d.dispatchEvent(new Jt("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),d.hn&&(d.rn.resolve(d.hn),d.an.add(d.hn)),d.fn.addEventListener("updatefound",d.cn),navigator.serviceWorker.addEventListener("controllerchange",d.dn),d.fn})})}catch(h){return Promise.reject(h)}},n.update=function(){try{return this.fn?Qo(this.fn.update()):void 0}catch(l){return Promise.reject(l)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(l){try{return ge(this.getSW(),function(a){return wi(a,l)})}catch(a){return Promise.reject(a)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&wi(this.fn.waiting,Gn)},n.pn=function(){var l=navigator.serviceWorker.controller;return l&&li(l.scriptURL,this.sn.toString())?l:void 0},n.bn=function(){try{var l=this;return function(a,c){try{var d=a()}catch(h){return c(h)}return d&&d.then?d.then(void 0,c):d}(function(){return ge(navigator.serviceWorker.register(l.sn,l.nn),function(a){return l.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},r=o,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Kn(r.prototype,s),o}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(i,o){this.Sn(i).add(o)},e.removeEventListener=function(i,o){this.Sn(i).delete(o)},e.dispatchEvent=function(i){i.target=this;for(var o,r=Zn(this.Sn(i.type));!(o=r()).done;)(0,o.value)(i)},e.Sn=function(i){return this.Pn.has(i)||this.Pn.set(i,new Set),this.Pn.get(i)},t}());di("/demos/foldtube/");const Jn=(t,...e)=>{const i=Mt(t[0],"main-application");return D([i],...e)};class Xr extends G{constructor(){super();g(this,"_filter");g(this,"_swAlert");g(this,"_wb");g(this,"_wbRegistration");this._filter="",this._videos=qr()}static get properties(){return{videos:{type:Array,reflectToAttribute:!1,attribute:!0}}}set videos(i){let o=this._videos;this._videos=i,this.requestUpdate("videos",o)}get videos(){return this._videos}firstUpdated(){this._swAlert=this.shadowRoot.querySelector("#sw-alert"),this._player=this.shadowRoot.querySelector("#player"),this._videoList=this.shadowRoot.querySelector("#video-list"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new Xn("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()}),window.onpopstate=i=>{if(i.state===null)this._hidePlayer();else{const o=Hn(i.state.video);o!=null&&(this._showPlayer(),this._player.src=o.name,this._player.alt=o.alt,this._player.title=o.title,this._player.date=o.date,this._player.views=o.views,this._player.channel=o.channel,this._player.subscribers=o.subscribers,this._player.description=o.description,this._player.play())}}}_hidePlayer(){this._player.closePlayer(),this._videoList.style.display="grid"}_showPlayer(){this._player.style.display="inline",this._videoList.style.display="none"}connectedCallback(){super.connectedCallback(),pt(this)}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&wi(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_openVideo(i){this._showPlayer(),this._player.src=i.currentTarget.src,this._player.alt=i.currentTarget.alt,this._player.title=i.currentTarget.title,this._player.date=i.currentTarget.date,this._player.views=i.currentTarget.views,this._player.channel=i.currentTarget.channel,this._player.subscribers=i.currentTarget.subscribers,this._player.description=i.currentTarget.description,this._player.play(),history.pushState({video:this._player.src},null,document.location.href+"/"+this._player.title)}_filterVideos(i){this._hidePlayer(),this._filter=i.detail.text,this.videos=Fn(this._filter)}render(){return U`
      <foldable-device-configurator></foldable-device-configurator>
      <div class="content">
        <title-bar @search-text-changed="${this._filterVideos}"></title-bar>
        <div class="grid-list" id="video-list">
          ${this.videos.map(i=>U`
            <video-thumbnail src="${i.name}" alt=${i.alt} title="${i.title}" date="${i.date}"
            views="${i.views}" channel="${i.channel}" subscribers="${i.subscribers}" 
            description="${i.description}" @click="${this._openVideo}">
            </video-thumbnail>
          `)}
          <div class="fold"></div>
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
    `}}g(Xr,"styles",Jn`
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

    .fold {
      display: none;
    }

    @media (horizontal-viewport-segments: 2) {
      .grid-list {
        grid-template-columns: env(viewport-segment-width 0 0) calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)) env(viewport-segment-width 1 0);
      }

      .fold {
        display: block;
        grid-row: 1 / span 30;
        grid-column: 2;
      }
    }
  `);customElements.define("main-application",Xr);
