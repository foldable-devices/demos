var As=Object.defineProperty;var Cs=(t,i,e)=>i in t?As(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var u=(t,i,e)=>(Cs(t,typeof i!="symbol"?i+"":i,e),e);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=globalThis,hi=re.ShadowRoot&&(re.ShadyCSS===void 0||re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ci=Symbol(),Ei=new WeakMap;let Do=class{constructor(i,e,o){if(this._$cssResult$=!0,o!==ci)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=e}get styleSheet(){let i=this.o;const e=this.t;if(hi&&i===void 0){const o=e!==void 0&&e.length===1;o&&(i=Ei.get(e)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),o&&Ei.set(e,i))}return i}toString(){return this.cssText}};const Es=t=>new Do(typeof t=="string"?t:t+"",void 0,ci),K=(t,...i)=>{const e=t.length===1?t[0]:i.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new Do(e,t,ci)},zs=(t,i)=>{if(hi)t.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of i){const o=document.createElement("style"),s=re.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,t.appendChild(o)}},zi=hi?t=>t:t=>t instanceof CSSStyleSheet?(i=>{let e="";for(const o of i.cssRules)e+=o.cssText;return Es(e)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ks,defineProperty:Ps,getOwnPropertyDescriptor:Ts,getOwnPropertyNames:Rs,getOwnPropertySymbols:Ms,getPrototypeOf:Vs}=Object,X=globalThis,ki=X.trustedTypes,Os=ki?ki.emptyScript:"",Se=X.reactiveElementPolyfillSupport,Nt=(t,i)=>t,he={toAttribute(t,i){switch(i){case Boolean:t=t?Os:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=t!==null;break;case Number:e=t===null?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch{e=null}}return e}},di=(t,i)=>!ks(t,i),Pi={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:di};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),X.litPropertyMetadata??(X.litPropertyMetadata=new WeakMap);let ht=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??(this.l=[])).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,e=Pi){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(i,e),!e.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(i,o,e);s!==void 0&&Ps(this.prototype,i,s)}}static getPropertyDescriptor(i,e,o){const{get:s,set:r}=Ts(this.prototype,i)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);r.call(this,n),this.requestUpdate(i,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??Pi}static _$Ei(){if(this.hasOwnProperty(Nt("elementProperties")))return;const i=Vs(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Nt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Nt("properties"))){const e=this.properties,o=[...Rs(e),...Ms(e)];for(const s of o)this.createProperty(s,e[s])}const i=this[Symbol.metadata];if(i!==null){const e=litPropertyMetadata.get(i);if(e!==void 0)for(const[o,s]of e)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const s=this._$Eu(e,o);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const e=[];if(Array.isArray(i)){const o=new Set(i.flat(1/0).reverse());for(const s of o)e.unshift(zi(s))}else i!==void 0&&e.push(zi(i));return e}static _$Eu(i,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(e=>e(this))}addController(i){var e;(this._$EO??(this._$EO=new Set)).add(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)==null||e.call(i))}removeController(i){var e;(e=this._$EO)==null||e.delete(i)}_$E_(){const i=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(i.set(o,this[o]),delete this[o]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zs(i,this.constructor.elementStyles),i}connectedCallback(){var i;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$EO)==null||i.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(i,e,o){this._$AK(i,o)}_$EC(i,e){var r;const o=this.constructor.elementProperties.get(i),s=this.constructor._$Eu(i,o);if(s!==void 0&&o.reflect===!0){const n=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:he).toAttribute(e,o.type);this._$Em=i,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(i,e){var r;const o=this.constructor,s=o._$Eh.get(i);if(s!==void 0&&this._$Em!==s){const n=o.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:he;this._$Em=s,this[s]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(i,e,o){if(i!==void 0){if(o??(o=this.constructor.getPropertyOptions(i)),!(o.hasChanged??di)(this[i],e))return;this.P(i,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(i,e,o){this._$AL.has(i)||this._$AL.set(i,e),o.reflect===!0&&this._$Em!==i&&(this._$Ej??(this._$Ej=new Set)).add(i)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EU()}catch(s){throw i=!1,this._$EU(),s}i&&this._$AE(e)}willUpdate(i){}_$AE(i){var e;(e=this._$EO)==null||e.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(i){}firstUpdated(i){}};ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},ht[Nt("elementProperties")]=new Map,ht[Nt("finalized")]=new Map,Se==null||Se({ReactiveElement:ht}),(X.reactiveElementVersions??(X.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=globalThis,ce=Ht.trustedTypes,Ti=ce?ce.createPolicy("lit-html",{createHTML:t=>t}):void 0,No="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,Ho="?"+G,Ls=`<${Ho}>`,st=document,qt=()=>st.createComment(""),Yt=t=>t===null||typeof t!="object"&&typeof t!="function",Fo=Array.isArray,Us=t=>Fo(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",xe=`[ 	
\f\r]`,kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ri=/-->/g,Mi=/>/g,J=RegExp(`>|${xe}(?:([^\\s"'>=/]+)(${xe}*=${xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vi=/'/g,Oi=/"/g,jo=/^(?:script|style|textarea|title)$/i,Is=t=>(i,...e)=>({_$litType$:t,strings:i,values:e}),rt=Is(1),nt=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Li=new WeakMap,it=st.createTreeWalker(st,129);function Wo(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ti!==void 0?Ti.createHTML(i):i}const Bs=(t,i)=>{const e=t.length-1,o=[];let s,r=i===2?"<svg>":"",n=kt;for(let l=0;l<e;l++){const a=t[l];let h,d,c=-1,p=0;for(;p<a.length&&(n.lastIndex=p,d=n.exec(a),d!==null);)p=n.lastIndex,n===kt?d[1]==="!--"?n=Ri:d[1]!==void 0?n=Mi:d[2]!==void 0?(jo.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=J):d[3]!==void 0&&(n=J):n===J?d[0]===">"?(n=s??kt,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?J:d[3]==='"'?Oi:Vi):n===Oi||n===Vi?n=J:n===Ri||n===Mi?n=kt:(n=J,s=void 0);const m=n===J&&t[l+1].startsWith("/>")?" ":"";r+=n===kt?a+Ls:c>=0?(o.push(h),a.slice(0,c)+No+a.slice(c)+G+m):a+G+(c===-2?l:m)}return[Wo(t,r+(t[e]||"<?>")+(i===2?"</svg>":"")),o]};let Xe=class qo{constructor({strings:i,_$litType$:e},o){let s;this.parts=[];let r=0,n=0;const l=i.length-1,a=this.parts,[h,d]=Bs(i,e);if(this.el=qo.createElement(h,o),it.currentNode=this.el.content,e===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=it.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(No)){const p=d[n++],m=s.getAttribute(c).split(G),b=/([.?@])?(.*)/.exec(p);a.push({type:1,index:r,name:b[2],strings:m,ctor:b[1]==="."?Ns:b[1]==="?"?Hs:b[1]==="@"?Fs:_e}),s.removeAttribute(c)}else c.startsWith(G)&&(a.push({type:6,index:r}),s.removeAttribute(c));if(jo.test(s.tagName)){const c=s.textContent.split(G),p=c.length-1;if(p>0){s.textContent=ce?ce.emptyScript:"";for(let m=0;m<p;m++)s.append(c[m],qt()),it.nextNode(),a.push({type:2,index:++r});s.append(c[p],qt())}}}else if(s.nodeType===8)if(s.data===Ho)a.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(G,c+1))!==-1;)a.push({type:7,index:r}),c+=G.length-1}r++}}static createElement(i,e){const o=st.createElement("template");return o.innerHTML=i,o}};function vt(t,i,e=t,o){var n,l;if(i===nt)return i;let s=o!==void 0?(n=e._$Co)==null?void 0:n[o]:e._$Cl;const r=Yt(i)?void 0:i._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),r===void 0?s=void 0:(s=new r(t),s._$AT(t,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=s:e._$Cl=s),s!==void 0&&(i=vt(t,s._$AS(t,i.values),s,o)),i}let Ds=class{constructor(i,e){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:e},parts:o}=this._$AD,s=((i==null?void 0:i.creationScope)??st).importNode(e,!0);it.currentNode=s;let r=it.nextNode(),n=0,l=0,a=o[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new ui(r,r.nextSibling,this,i):a.type===1?h=new a.ctor(r,a.name,a.strings,this,i):a.type===6&&(h=new js(r,this,i)),this._$AV.push(h),a=o[++l]}n!==(a==null?void 0:a.index)&&(r=it.nextNode(),n++)}return it.currentNode=st,s}p(i){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(i,o,e),e+=o.strings.length-2):o._$AI(i[e])),e++}},ui=class Yo{get _$AU(){var i;return((i=this._$AM)==null?void 0:i._$AU)??this._$Cv}constructor(i,e,o,s){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=i,this._$AB=e,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let i=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=e.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,e=this){i=vt(this,i,e),Yt(i)?i===k||i==null||i===""?(this._$AH!==k&&this._$AR(),this._$AH=k):i!==this._$AH&&i!==nt&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Us(i)?this.k(i):this._(i)}S(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.S(i))}_(i){this._$AH!==k&&Yt(this._$AH)?this._$AA.nextSibling.data=i:this.T(st.createTextNode(i)),this._$AH=i}$(i){var r;const{values:e,_$litType$:o}=i,s=typeof o=="number"?this._$AC(i):(o.el===void 0&&(o.el=Xe.createElement(Wo(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const n=new Ds(s,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(i){let e=Li.get(i.strings);return e===void 0&&Li.set(i.strings,e=new Xe(i)),e}k(i){Fo(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of i)s===e.length?e.push(o=new Yo(this.S(qt()),this.S(qt()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(i=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);i&&i!==this._$AB;){const s=i.nextSibling;i.remove(),i=s}}setConnected(i){var e;this._$AM===void 0&&(this._$Cv=i,(e=this._$AP)==null||e.call(this,i))}},_e=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,e,o,s,r){this.type=1,this._$AH=k,this._$AN=void 0,this.element=i,this.name=e,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=k}_$AI(i,e=this,o,s){const r=this.strings;let n=!1;if(r===void 0)i=vt(this,i,e,0),n=!Yt(i)||i!==this._$AH&&i!==nt,n&&(this._$AH=i);else{const l=i;let a,h;for(i=r[0],a=0;a<r.length-1;a++)h=vt(this,l[o+a],e,a),h===nt&&(h=this._$AH[a]),n||(n=!Yt(h)||h!==this._$AH[a]),h===k?i=k:i!==k&&(i+=(h??"")+r[a+1]),this._$AH[a]=h}n&&!s&&this.j(i)}j(i){i===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},Ns=class extends _e{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===k?void 0:i}},Hs=class extends _e{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==k)}},Fs=class extends _e{constructor(i,e,o,s,r){super(i,e,o,s,r),this.type=5}_$AI(i,e=this){if((i=vt(this,i,e,0)??k)===nt)return;const o=this._$AH,s=i===k&&o!==k||i.capture!==o.capture||i.once!==o.once||i.passive!==o.passive,r=i!==k&&(o===k||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,i):this._$AH.handleEvent(i)}},js=class{constructor(i,e,o){this.element=i,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(i){vt(this,i)}};const Ae=Ht.litHtmlPolyfillSupport;Ae==null||Ae(Xe,ui),(Ht.litHtmlVersions??(Ht.litHtmlVersions=[])).push("3.1.3");const Ws=(t,i,e)=>{const o=(e==null?void 0:e.renderBefore)??i;let s=o._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;o._$litPart$=s=new ui(i.insertBefore(qt(),r),r,void 0,e??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ot=class extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const i=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=i.firstChild),i}update(i){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Ws(e,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return nt}};var Bo;ot._$litElement$=!0,ot.finalized=!0,(Bo=globalThis.litElementHydrateSupport)==null||Bo.call(globalThis,{LitElement:ot});const Ce=globalThis.litElementPolyfillSupport;Ce==null||Ce({LitElement:ot});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");var Pt=function(){try{window[L].updateSegments();var t=function(){if(!Ee)return Ee=!0,Promise.resolve(Promise.resolve(!1)).then(function(i){Ee=i,window[L].dispatchEvent(new Event("change"))})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(i){return Promise.reject(i)}},L="__foldables__",Ee=!1;function qs(t,i){var e;return function(){var o=arguments,s=this;clearTimeout(e),e=setTimeout(function(){return t.apply(s,o)},i)}}var Ke=function(){function t(){var o=this;if(window.visualViewport==null){if(window[L]!==void 0)return window[L];var s=document.createDocumentFragment();this.addEventListener=s.addEventListener.bind(s),this.removeEventListener=s.removeEventListener.bind(s),this.dispatchEvent=function(r){if(r.type==="change"){var n="on"+r.type;return typeof o[n]=="function"&&o[n](r),s.dispatchEvent(r)}},window.addEventListener("message",function(r){r.data.action==="update"&&Object.assign(o,r.data.value)}),window.addEventListener("resize",function(){return qs(Pt(),200)})}}var i,e=t.prototype;return e.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var s=window.innerHeight-this.browserShellSize,r=0,n=window.innerWidth,l=s/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:r,left:0,bottom:r+l,right:n,width:n,height:l},r+=o[a].height,r+=this.foldSize;if(this.horizontalViewportSegments>1)for(var h=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,p=0;p<this.horizontalViewportSegments;++p)o[p]={top:0,left:c,right:c+h,bottom:d,width:h,height:d},c+=o[p].width,c+=this.foldSize;window.visualViewport.segments=o},e.randomizeSegmentsConfiguration=function(o){var s=Math.random()<.5,r=Math.round(Math.random()*(o-1)+1);s?(this.verticalViewportSegments=r,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=r,this.verticalViewportSegments=1)},(i=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(L+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(L+"-horizontal-viewport-segments",o),Pt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(L+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(L+"-vertical-viewport-segments",o),Pt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(L+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(L+"-fold-size",o),Pt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(L+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(L+"-browser-shell-size",o),Pt()}}])&&function(o,s){for(var r=0;r<s.length;r++){var n=s[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(t.prototype,i),t}();window[L]=new Ke,window.visualViewport===void 0&&window.visualViewport.segments===void 0&&window[L].updateSegments();try{self["workbox:window:7.0.0"]&&_()}catch{}function Ze(t,i){return new Promise(function(e){var o=new MessageChannel;o.port1.onmessage=function(s){e(s.data)},t.postMessage(i,[o.port2])})}function Ys(t,i){for(var e=0;e<i.length;e++){var o=i[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Ui(t,i){(i==null||i>t.length)&&(i=t.length);for(var e=0,o=new Array(i);e<i;e++)o[e]=t[e];return o}function Gs(t,i){var e;if(typeof Symbol>"u"||t[Symbol.iterator]==null){if(Array.isArray(t)||(e=function(s,r){if(s){if(typeof s=="string")return Ui(s,r);var n=Object.prototype.toString.call(s).slice(8,-1);return n==="Object"&&s.constructor&&(n=s.constructor.name),n==="Map"||n==="Set"?Array.from(s):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ui(s,r):void 0}}(t))||i&&t&&typeof t.length=="number"){e&&(t=e);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(e=t[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:7.0.0"]&&_()}catch{}var ze=function(){var t=this;this.promise=new Promise(function(i,e){t.resolve=i,t.reject=e})};function ke(t,i){var e=location.href;return new URL(t,e).href===new URL(i,e).href}var Tt=function(t,i){this.type=t,Object.assign(this,i)};function ee(t,i,e){return e?i?i(t):t:(t&&t.then||(t=Promise.resolve(t)),i?t.then(i):t)}function Xs(){}var Ks={type:"SKIP_WAITING"};function Ii(t,i){if(!i)return t&&t.then?t.then(Xs):Promise.resolve()}var Zs=function(t){var i,e;function o(l,a){var h,d;return a===void 0&&(a={}),(h=t.call(this)||this).nn={},h.tn=0,h.rn=new ze,h.en=new ze,h.on=new ze,h.un=0,h.an=new Set,h.cn=function(){var c=h.fn,p=c.installing;h.tn>0||!ke(p.scriptURL,h.sn.toString())||performance.now()>h.un+6e4?(h.vn=p,c.removeEventListener("updatefound",h.cn)):(h.hn=p,h.an.add(p),h.rn.resolve(p)),++h.tn,p.addEventListener("statechange",h.ln)},h.ln=function(c){var p=h.fn,m=c.target,b=m.state,w=m===h.vn,g={sw:m,isExternal:w,originalEvent:c};!w&&h.mn&&(g.isUpdate=!0),h.dispatchEvent(new Tt(b,g)),b==="installed"?h.wn=self.setTimeout(function(){b==="installed"&&p.waiting===m&&h.dispatchEvent(new Tt("waiting",g))},200):b==="activating"&&(clearTimeout(h.wn),w||h.en.resolve(m))},h.dn=function(c){var p=h.hn,m=p!==navigator.serviceWorker.controller;h.dispatchEvent(new Tt("controlling",{isExternal:m,originalEvent:c,sw:p,isUpdate:h.mn})),m||h.on.resolve(p)},h.gn=(d=function(c){var p=c.data,m=c.ports,b=c.source;return ee(h.getSW(),function(){h.an.has(b)&&h.dispatchEvent(new Tt("message",{data:p,originalEvent:c,ports:m,sw:b}))})},function(){for(var c=[],p=0;p<arguments.length;p++)c[p]=arguments[p];try{return Promise.resolve(d.apply(this,c))}catch(m){return Promise.reject(m)}}),h.sn=l,h.nn=a,navigator.serviceWorker.addEventListener("message",h.gn),h}e=t,(i=o).prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e;var s,r,n=o.prototype;return n.register=function(l){var a=(l===void 0?{}:l).immediate,h=a!==void 0&&a;try{var d=this;return function(c,p){var m=c();return m&&m.then?m.then(p):p(m)}(function(){if(!h&&document.readyState!=="complete")return Ii(new Promise(function(c){return window.addEventListener("load",c)}))},function(){return d.mn=!!navigator.serviceWorker.controller,d.yn=d.pn(),ee(d.bn(),function(c){d.fn=c,d.yn&&(d.hn=d.yn,d.en.resolve(d.yn),d.on.resolve(d.yn),d.yn.addEventListener("statechange",d.ln,{once:!0}));var p=d.fn.waiting;return p&&ke(p.scriptURL,d.sn.toString())&&(d.hn=p,Promise.resolve().then(function(){d.dispatchEvent(new Tt("waiting",{sw:p,wasWaitingBeforeRegister:!0}))}).then(function(){})),d.hn&&(d.rn.resolve(d.hn),d.an.add(d.hn)),d.fn.addEventListener("updatefound",d.cn),navigator.serviceWorker.addEventListener("controllerchange",d.dn),d.fn})})}catch(c){return Promise.reject(c)}},n.update=function(){try{return this.fn?Ii(this.fn.update()):void 0}catch(l){return Promise.reject(l)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(l){try{return ee(this.getSW(),function(a){return Ze(a,l)})}catch(a){return Promise.reject(a)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Ze(this.fn.waiting,Ks)},n.pn=function(){var l=navigator.serviceWorker.controller;return l&&ke(l.scriptURL,this.sn.toString())?l:void 0},n.bn=function(){try{var l=this;return function(a,h){try{var d=a()}catch(c){return h(c)}return d&&d.then?d.then(void 0,h):d}(function(){return ee(navigator.serviceWorker.register(l.sn,l.nn),function(a){return l.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},s=o,(r=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Ys(s.prototype,r),o}(function(){function t(){this.Pn=new Map}var i=t.prototype;return i.addEventListener=function(e,o){this.Sn(e).add(o)},i.removeEventListener=function(e,o){this.Sn(e).delete(o)},i.dispatchEvent=function(e){e.target=this;for(var o,s=Gs(this.Sn(e.type));!(o=s()).done;)(0,o.value)(e)},i.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},t}()),Je="";function Qe(t){Je=t}function Js(t=""){if(!Je){const i=[...document.getElementsByTagName("script")],e=i.find(o=>o.hasAttribute("data-shoelace"));if(e)Qe(e.getAttribute("data-shoelace"));else{const o=i.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let s="";o&&(s=o.getAttribute("src")),Qe(s.split("/").slice(0,-1).join("/"))}}return Je.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Qs={name:"default",resolver:t=>Js(`assets/icons/${t}.svg`)},tr=Qs,Bi={caret:`
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
  `},er={name:"system",resolver:t=>t in Bi?`data:image/svg+xml,${encodeURIComponent(Bi[t])}`:""},ir=er,or=[tr,ir],ti=[];function sr(t){ti.push(t)}function rr(t){ti=ti.filter(i=>i!==t)}function Di(t){return or.find(i=>i.name===t)}var nr=K`
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
`,Go=Object.defineProperty,ar=Object.defineProperties,lr=Object.getOwnPropertyDescriptor,hr=Object.getOwnPropertyDescriptors,Ni=Object.getOwnPropertySymbols,cr=Object.prototype.hasOwnProperty,dr=Object.prototype.propertyIsEnumerable,Hi=(t,i,e)=>i in t?Go(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,At=(t,i)=>{for(var e in i||(i={}))cr.call(i,e)&&Hi(t,e,i[e]);if(Ni)for(var e of Ni(i))dr.call(i,e)&&Hi(t,e,i[e]);return t},pi=(t,i)=>ar(t,hr(i)),f=(t,i,e,o)=>{for(var s=o>1?void 0:o?lr(i,e):i,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=(o?n(i,e,s):n(s))||s);return o&&s&&Go(i,e,s),s};function Qt(t,i){const e=At({waitUntilFirstUpdate:!1},i);return(o,s)=>{const{update:r}=o,n=Array.isArray(t)?t:[t];o.update=function(l){n.forEach(a=>{const h=a;if(l.has(h)){const d=l.get(h),c=this[h];d!==c&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[s](d,c)}}),r.call(this,l)}}}var te=K`
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
 */const ur={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:di},pr=(t=ur,i,e)=>{const{kind:o,metadata:s}=e;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(e.name,t),o==="accessor"){const{name:n}=e;return{set(l){const a=i.get.call(this);i.set.call(this,l),this.requestUpdate(n,a,t)},init(l){return l!==void 0&&this.P(n,void 0,t),l}}}if(o==="setter"){const{name:n}=e;return function(l){const a=this[n];i.call(this,l),this.requestUpdate(n,a,t)}}throw Error("Unsupported decorator location: "+o)};function v(t){return(i,e)=>typeof e=="object"?pr(t,i,e):((o,s,r)=>{const n=s.hasOwnProperty(r);return s.constructor.createProperty(r,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(s,r):void 0})(t,i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function be(t){return v({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fi=(t,i,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(t,i,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mi(t,i){return(e,o,s)=>{const r=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(t))??null};if(i){const{get:n,set:l}=typeof o=="object"?e:s??(()=>{const a=Symbol();return{get(){return this[a]},set(h){this[a]=h}}})();return Fi(e,o,{get(){let a=n.call(this);return a===void 0&&(a=r(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return Fi(e,o,{get(){return r(this)}})}}var F=class extends ot{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,i])=>{this.constructor.define(t,i)})}emit(t,i){const e=new CustomEvent(t,At({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return this.dispatchEvent(e),e}static define(t,i=this,e={}){const o=customElements.get(t);if(!o){customElements.define(t,class extends i{},e);return}let s=" (unknown version)",r=s;"version"in i&&i.version&&(s=" v"+i.version),"version"in o&&o.version&&(r=" v"+o.version),!(s&&r&&s===r)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${r} has already been registered.`)}};F.version="2.15.0";F.dependencies={};f([v()],F.prototype,"dir",2);f([v()],F.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mr=(t,i)=>i===void 0?(t==null?void 0:t._$litType$)!==void 0:(t==null?void 0:t._$litType$)===i;var Rt=Symbol(),ie=Symbol(),Pe,Te=new Map,N=class extends F{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,i){var e;let o;if(i!=null&&i.spriteSheet){this.svg=rt`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");return typeof i.mutator=="function"&&i.mutator(s),this.svg}try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?Rt:ie}catch{return ie}try{const s=document.createElement("div");s.innerHTML=await o.text();const r=s.firstElementChild;if(((e=r==null?void 0:r.tagName)==null?void 0:e.toLowerCase())!=="svg")return Rt;Pe||(Pe=new DOMParser);const l=Pe.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Rt}catch{return Rt}}connectedCallback(){super.connectedCallback(),sr(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),rr(this)}getIconSource(){const t=Di(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:i,fromLibrary:e}=this.getIconSource(),o=e?Di(this.library):void 0;if(!i){this.svg=null;return}let s=Te.get(i);if(s||(s=this.resolveIcon(i,o),Te.set(i,s)),!this.initialRender)return;const r=await s;if(r===ie&&Te.delete(i),i===this.getIconSource().url){if(mr(r)){this.svg=r;return}switch(r){case ie:case Rt:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};N.styles=[te,nr];f([be()],N.prototype,"svg",2);f([v({reflect:!0})],N.prototype,"name",2);f([v()],N.prototype,"src",2);f([v()],N.prototype,"label",2);f([v({reflect:!0})],N.prototype,"library",2);f([Qt("label")],N.prototype,"handleLabelChange",1);f([Qt(["name","src","library"])],N.prototype,"setIcon",1);N.define("sl-icon");var gr=K`
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
 */const fr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vr=t=>(...i)=>({_$litDirective$:t,values:i});let _r=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,e,o){this._$Ct=i,this._$AM=e,this._$Ci=o}_$AS(i,e){return this.update(i,e)}update(i,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=vr(class extends _r{constructor(t){var i;if(super(t),t.type!==fr.ATTRIBUTE||t.name!=="class"||((i=t.strings)==null?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(i=>t[i]).join(" ")+" "}update(t,[i]){var o,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in i)i[r]&&!((o=this.nt)!=null&&o.has(r))&&this.st.add(r);return this.render(i)}const e=t.element.classList;for(const r of this.st)r in i||(e.remove(r),this.st.delete(r));for(const r in i){const n=!!i[r];n===this.st.has(r)||(s=this.nt)!=null&&s.has(r)||(n?(e.add(r),this.st.add(r)):(e.remove(r),this.st.delete(r)))}return nt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xo=Symbol.for(""),br=t=>{if((t==null?void 0:t.r)===Xo)return t==null?void 0:t._$litStatic$},de=(t,...i)=>({_$litStatic$:i.reduce((e,o,s)=>e+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[s+1],t[0]),r:Xo}),ji=new Map,yr=t=>(i,...e)=>{const o=e.length;let s,r;const n=[],l=[];let a,h=0,d=!1;for(;h<o;){for(a=i[h];h<o&&(r=e[h],(s=br(r))!==void 0);)a+=s+i[++h],d=!0;h!==o&&l.push(r),n.push(a),h++}if(h===o&&n.push(i[o]),d){const c=n.join("$$lit$$");(i=ji.get(c))===void 0&&(n.raw=n,ji.set(c,i=n)),e=l}return t(i,...e)},ne=yr(rt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=t=>t??k;var I=class extends F{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,i=t?de`a`:de`button`;return ne`
      <${i}
        part="base"
        class=${gi({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${z(t?void 0:this.disabled)}
        type=${z(t?void 0:"button")}
        href=${z(t?this.href:void 0)}
        target=${z(t?this.target:void 0)}
        download=${z(t?this.download:void 0)}
        rel=${z(t&&this.target?"noreferrer noopener":void 0)}
        role=${z(t?void 0:"button")}
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
      </${i}>
    `}};I.styles=[te,gr];I.dependencies={"sl-icon":N};f([mi(".icon-button")],I.prototype,"button",2);f([be()],I.prototype,"hasFocus",2);f([v()],I.prototype,"name",2);f([v()],I.prototype,"library",2);f([v()],I.prototype,"src",2);f([v()],I.prototype,"href",2);f([v()],I.prototype,"target",2);f([v()],I.prototype,"download",2);f([v()],I.prototype,"label",2);f([v({type:Boolean,reflect:!0})],I.prototype,"disabled",2);var Ko=new Map,wr=new WeakMap;function $r(t){return t??{keyframes:[],options:{duration:0}}}function Wi(t,i){return i.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Zo(t,i){Ko.set(t,$r(i))}function qi(t,i,e){const o=wr.get(t);if(o!=null&&o[i])return Wi(o[i],e.dir);const s=Ko.get(i);return s?Wi(s,e.dir):{keyframes:[],options:{duration:0}}}function Yi(t,i){return new Promise(e=>{function o(s){s.target===t&&(t.removeEventListener(i,o),e())}t.addEventListener(i,o)})}function Gi(t,i,e){return new Promise(o=>{if((e==null?void 0:e.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(i,pi(At({},e),{duration:Sr()?0:e.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})})}function Sr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Xi(t){return Promise.all(t.getAnimations().map(i=>new Promise(e=>{i.cancel(),requestAnimationFrame(e)})))}const ei=new Set,xr=new MutationObserver(es),ut=new Map;let Jo=document.documentElement.dir||"ltr",Qo=document.documentElement.lang||navigator.language,et;xr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function ts(...t){t.map(i=>{const e=i.$code.toLowerCase();ut.has(e)?ut.set(e,Object.assign(Object.assign({},ut.get(e)),i)):ut.set(e,i),et||(et=i)}),es()}function es(){Jo=document.documentElement.dir||"ltr",Qo=document.documentElement.lang||navigator.language,[...ei.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Ar=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){ei.add(this.host)}hostDisconnected(){ei.delete(this.host)}dir(){return`${this.host.dir||Jo}`.toLowerCase()}lang(){return`${this.host.lang||Qo}`.toLowerCase()}getTranslationData(i){var e,o;const s=new Intl.Locale(i.replace(/_/g,"-")),r=s==null?void 0:s.language.toLowerCase(),n=(o=(e=s==null?void 0:s.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",l=ut.get(`${r}-${n}`),a=ut.get(r);return{locale:s,language:r,region:n,primary:l,secondary:a}}exists(i,e){var o;const{primary:s,secondary:r}=this.getTranslationData((o=e.lang)!==null&&o!==void 0?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[i]||r&&r[i]||e.includeFallback&&et&&et[i])}term(i,...e){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let r;if(o&&o[i])r=o[i];else if(s&&s[i])r=s[i];else if(et&&et[i])r=et[i];else return console.error(`No translation found for: ${String(i)}`),String(i);return typeof r=="function"?r(...e):r}date(i,e){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),e).format(i)}number(i,e){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),e).format(i)}relativeTime(i,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(i,e)}};var is={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,i)=>`Go to slide ${t} of ${i}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ts(is);var Cr=is,fi=class extends Ar{};ts(Cr);var os=class{constructor(t,...i){this.slotNames=[],this.handleSlotChange=e=>{const o=e.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=i}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const i=t;if(i.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!i.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Er=K`
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
`,lt=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),H=class extends F{constructor(){super(...arguments),this.hasSlotController=new os(this,"icon","suffix"),this.localize=new fi(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Xi(this.base),this.base.hidden=!1;const{keyframes:t,options:i}=qi(this,"alert.show",{dir:this.localize.dir()});await Gi(this.base,t,i),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Xi(this.base);const{keyframes:t,options:i}=qi(this,"alert.hide",{dir:this.localize.dir()});await Gi(this.base,t,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Yi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Yi(this,"sl-after-hide")}async toast(){return new Promise(t=>{lt.parentElement===null&&document.body.append(lt),lt.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{lt.removeChild(this),t(),lt.querySelector("sl-alert")===null&&lt.remove()},{once:!0})})}render(){return rt`
      <div
        part="base"
        class=${gi({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?rt`
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
    `}};H.styles=[te,Er];H.dependencies={"sl-icon-button":I};f([mi('[part~="base"]')],H.prototype,"base",2);f([v({type:Boolean,reflect:!0})],H.prototype,"open",2);f([v({type:Boolean,reflect:!0})],H.prototype,"closable",2);f([v({reflect:!0})],H.prototype,"variant",2);f([v({type:Number})],H.prototype,"duration",2);f([Qt("open",{waitUntilFirstUpdate:!0})],H.prototype,"handleOpenChange",1);f([Qt("duration")],H.prototype,"handleDurationChange",1);Zo("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Zo("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});H.define("sl-alert");var zr=K`
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
`,ss=class extends F{constructor(){super(...arguments),this.localize=new fi(this)}render(){return rt`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ss.styles=[te,zr];var Mt=new WeakMap,Vt=new WeakMap,Ot=new WeakMap,Re=new WeakSet,oe=new WeakMap,kr=class{constructor(t,i){this.handleFormData=e=>{const o=this.options.disabled(this.host),s=this.options.name(this.host),r=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof s=="string"&&s.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(l=>{e.formData.append(s,l.toString())}):e.formData.append(s,r.toString()))},this.handleFormSubmit=e=>{var o;const s=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=Mt.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),oe.set(this.host,[])},this.handleInteraction=e=>{const o=oe.get(this.host);o.includes(e.type)||o.push(e.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const o of e)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const o of e)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=At({form:e=>{const o=e.form;if(o){const r=e.getRootNode().querySelector(`#${o}`);if(r)return r}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var o;return(o=e.disabled)!=null?o:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity=="function"?e.checkValidity():!0,setValue:(e,o)=>e.value=o,assumeInteractionOn:["sl-input"]},i)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),oe.set(this.host,[]),this.options.assumeInteractionOn.forEach(i=>{this.host.addEventListener(i,this.handleInteraction)})}hostDisconnected(){this.detachForm(),oe.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Mt.has(this.form)?Mt.get(this.form).add(this.host):Mt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Vt.has(this.form)||(Vt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ot.has(this.form)||(Ot.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Mt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Vt.has(this.form)&&(this.form.reportValidity=Vt.get(this.form),Vt.delete(this.form)),Ot.has(this.form)&&(this.form.checkValidity=Ot.get(this.form),Ot.delete(this.form)),this.form=void 0))}setUserInteracted(t,i){i?Re.add(t):Re.delete(t),t.requestUpdate()}doAction(t,i){if(this.form){const e=document.createElement("button");e.type=t,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",i&&(e.name=i.name,e.value=i.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{i.hasAttribute(o)&&e.setAttribute(o,i.getAttribute(o))})),this.form.append(e),e.click(),e.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const i=this.host,e=!!Re.has(i),o=!!i.required;i.toggleAttribute("data-required",o),i.toggleAttribute("data-optional",!o),i.toggleAttribute("data-invalid",!t),i.toggleAttribute("data-valid",t),i.toggleAttribute("data-user-invalid",!t&&e),i.toggleAttribute("data-user-valid",t&&e)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const i=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||i.preventDefault(),this.host.dispatchEvent(i)||t==null||t.preventDefault()}},vi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(pi(At({},vi),{valid:!1,valueMissing:!0}));Object.freeze(pi(At({},vi),{valid:!1,customError:!0}));var Pr=K`
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
`,$=class extends F{constructor(){super(...arguments),this.formControlController=new kr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new os(this,"[default]","prefix","suffix"),this.localize=new fi(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:vi}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),i=t?de`a`:de`button`;return ne`
      <${i}
        part="base"
        class=${gi({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${z(t?void 0:this.disabled)}
        type=${z(t?void 0:this.type)}
        title=${this.title}
        name=${z(t?void 0:this.name)}
        value=${z(t?void 0:this.value)}
        href=${z(t?this.href:void 0)}
        target=${z(t?this.target:void 0)}
        download=${z(t?this.download:void 0)}
        rel=${z(t?this.rel:void 0)}
        role=${z(t?void 0:"button")}
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
        ${this.caret?ne` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ne`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${i}>
    `}};$.styles=[te,Pr];$.dependencies={"sl-icon":N,"sl-spinner":ss};f([mi(".button")],$.prototype,"button",2);f([be()],$.prototype,"hasFocus",2);f([be()],$.prototype,"invalid",2);f([v()],$.prototype,"title",2);f([v({reflect:!0})],$.prototype,"variant",2);f([v({reflect:!0})],$.prototype,"size",2);f([v({type:Boolean,reflect:!0})],$.prototype,"caret",2);f([v({type:Boolean,reflect:!0})],$.prototype,"disabled",2);f([v({type:Boolean,reflect:!0})],$.prototype,"loading",2);f([v({type:Boolean,reflect:!0})],$.prototype,"outline",2);f([v({type:Boolean,reflect:!0})],$.prototype,"pill",2);f([v({type:Boolean,reflect:!0})],$.prototype,"circle",2);f([v()],$.prototype,"type",2);f([v()],$.prototype,"name",2);f([v()],$.prototype,"value",2);f([v()],$.prototype,"href",2);f([v()],$.prototype,"target",2);f([v()],$.prototype,"rel",2);f([v()],$.prototype,"download",2);f([v()],$.prototype,"form",2);f([v({attribute:"formaction"})],$.prototype,"formAction",2);f([v({attribute:"formenctype"})],$.prototype,"formEnctype",2);f([v({attribute:"formmethod"})],$.prototype,"formMethod",2);f([v({attribute:"formnovalidate",type:Boolean})],$.prototype,"formNoValidate",2);f([v({attribute:"formtarget"})],$.prototype,"formTarget",2);f([Qt("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);$.define("sl-button");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=window,_i=ae.ShadowRoot&&(ae.ShadyCSS===void 0||ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bi=Symbol(),Ki=new WeakMap;let rs=class{constructor(t,i,e){if(this._$cssResult$=!0,e!==bi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(_i&&t===void 0){const e=i!==void 0&&i.length===1;e&&(t=Ki.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&Ki.set(i,t))}return t}toString(){return this.cssText}};const ns=(t,...i)=>{const e=t.length===1?t[0]:i.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new rs(e,t,bi)},Zi=_i?t=>t:t=>t instanceof CSSStyleSheet?(i=>{let e="";for(const o of i.cssRules)e+=o.cssText;return(o=>new rs(typeof o=="string"?o:o+"",void 0,bi))(e)})(t):t;var Me;const ue=window,Ji=ue.trustedTypes,Tr=Ji?Ji.emptyScript:"",Qi=ue.reactiveElementPolyfillSupport,ii={toAttribute(t,i){switch(i){case Boolean:t=t?Tr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=t!==null;break;case Number:e=t===null?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch{e=null}}return e}},as=(t,i)=>i!==t&&(i==i||t==t),Ve={attribute:!0,type:String,converter:ii,reflect:!1,hasChanged:as};let ct=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,e)=>{const o=this._$Ep(e,i);o!==void 0&&(this._$Ev.set(o,e),t.push(o))}),t}static createProperty(t,i=Ve){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,e,i);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(o){const s=this[t];this[i]=o,this.requestUpdate(t,s,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ve}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,e=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of e)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const o of e)i.unshift(Zi(o))}else t!==void 0&&i.push(Zi(t));return i}static _$Ep(t,i){const e=i.attribute;return e===!1?void 0:typeof e=="string"?e:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,e;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)===null||e===void 0||e.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{_i?e.adoptedStyleSheets=o.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):o.forEach(s=>{const r=document.createElement("style"),n=ae.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=s.cssText,e.appendChild(r)})})(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var e;return(e=i.hostConnected)===null||e===void 0?void 0:e.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var e;return(e=i.hostDisconnected)===null||e===void 0?void 0:e.call(i)})}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=Ve){var o;const s=this.constructor._$Ep(t,e);if(s!==void 0&&e.reflect===!0){const r=(((o=e.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?e.converter:ii).toAttribute(i,e.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,i){var e;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=o.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:((e=r.converter)===null||e===void 0?void 0:e.fromAttribute)!==void 0?r.converter:ii;this._$El=s,this[s]=n.fromAttribute(i,r.type),this._$El=null}}requestUpdate(t,i,e){let o=!0;t!==void 0&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||as)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),e.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,e))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(e)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(e=>{var o;return(o=e.hostUpdated)===null||o===void 0?void 0:o.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,e)=>this._$EO(e,this[e],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oe;ct.finalized=!0,ct.elementProperties=new Map,ct.elementStyles=[],ct.shadowRootOptions={mode:"open"},Qi==null||Qi({ReactiveElement:ct}),((Me=ue.reactiveElementVersions)!==null&&Me!==void 0?Me:ue.reactiveElementVersions=[]).push("1.6.1");const pe=window,_t=pe.trustedTypes,to=_t?_t.createPolicy("lit-html",{createHTML:t=>t}):void 0,q=`lit$${(Math.random()+"").slice(9)}$`,ls="?"+q,Rr=`<${ls}>`,bt=document,Gt=(t="")=>bt.createComment(t),Xt=t=>t===null||typeof t!="object"&&typeof t!="function",eo=Array.isArray,Lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,io=/-->/g,oo=/>/g,Q=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),so=/'/g,ro=/"/g,no=/^(?:script|style|textarea|title)$/i,Ct=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),yt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),ao=new WeakMap,mt=bt.createTreeWalker(bt,129,null,!1);let oi=class hs{constructor({strings:i,_$litType$:e},o){let s;this.parts=[];let r=0,n=0;const l=i.length-1,a=this.parts,[h,d]=((c,p)=>{const m=c.length-1,b=[];let w,g=p===2?"<svg>":"",y=Lt;for(let P=0;P<m;P++){const B=c[P];let C,S,R=-1,V=0;for(;V<B.length&&(y.lastIndex=V,S=y.exec(B),S!==null);)V=y.lastIndex,y===Lt?S[1]==="!--"?y=io:S[1]!==void 0?y=oo:S[2]!==void 0?(no.test(S[2])&&(w=RegExp("</"+S[2],"g")),y=Q):S[3]!==void 0&&(y=Q):y===Q?S[0]===">"?(y=w??Lt,R=-1):S[1]===void 0?R=-2:(R=y.lastIndex-S[2].length,C=S[1],y=S[3]===void 0?Q:S[3]==='"'?ro:so):y===ro||y===so?y=Q:y===io||y===oo?y=Lt:(y=Q,w=void 0);const $e=y===Q&&c[P+1].startsWith("/>")?" ":"";g+=y===Lt?B+Rr:R>=0?(b.push(C),B.slice(0,R)+"$lit$"+B.slice(R)+q+$e):B+q+(R===-2?(b.push(void 0),P):$e)}const M=g+(c[m]||"<?>")+(p===2?"</svg>":"");if(!Array.isArray(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return[to!==void 0?to.createHTML(M):M,b]})(i,e);if(this.el=hs.createElement(h,o),mt.currentNode=this.el.content,e===2){const c=this.el.content,p=c.firstChild;p.remove(),c.append(...p.childNodes)}for(;(s=mt.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const p of s.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(q)){const m=d[n++];if(c.push(p),m!==void 0){const b=s.getAttribute(m.toLowerCase()+"$lit$").split(q),w=/([.?@])?(.*)/.exec(m);a.push({type:1,index:r,name:w[2],strings:b,ctor:w[1]==="."?Mr:w[1]==="?"?Or:w[1]==="@"?Lr:ye})}else a.push({type:6,index:r})}for(const p of c)s.removeAttribute(p)}if(no.test(s.tagName)){const c=s.textContent.split(q),p=c.length-1;if(p>0){s.textContent=_t?_t.emptyScript:"";for(let m=0;m<p;m++)s.append(c[m],Gt()),mt.nextNode(),a.push({type:2,index:++r});s.append(c[p],Gt())}}}else if(s.nodeType===8)if(s.data===ls)a.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(q,c+1))!==-1;)a.push({type:7,index:r}),c+=q.length-1}r++}}static createElement(i,e){const o=bt.createElement("template");return o.innerHTML=i,o}};function wt(t,i,e=t,o){var s,r,n,l;if(i===yt)return i;let a=o!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[o]:e._$Cl;const h=Xt(i)?void 0:i._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),h===void 0?a=void 0:(a=new h(t),a._$AT(t,e,o)),o!==void 0?((n=(l=e)._$Co)!==null&&n!==void 0?n:l._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(i=wt(t,a._$AS(t,i.values),a,o)),i}let yi=class cs{constructor(i,e,o,s){var r;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=i,this._$AB=e,this._$AM=o,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var i,e;return(e=(i=this._$AM)===null||i===void 0?void 0:i._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let i=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&i.nodeType===11&&(i=e.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,e=this){i=wt(this,i,e),Xt(i)?i===T||i==null||i===""?(this._$AH!==T&&this._$AR(),this._$AH=T):i!==this._$AH&&i!==yt&&this.g(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):(o=>eo(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function")(i)?this.k(i):this.g(i)}O(i,e=this._$AB){return this._$AA.parentNode.insertBefore(i,e)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}g(i){this._$AH!==T&&Xt(this._$AH)?this._$AA.nextSibling.data=i:this.T(bt.createTextNode(i)),this._$AH=i}$(i){var e;const{values:o,_$litType$:s}=i,r=typeof s=="number"?this._$AC(i):(s.el===void 0&&(s.el=oi.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(o);else{const n=new class{constructor(a,h){this.u=[],this._$AN=void 0,this._$AD=a,this._$AM=h}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(a){var h;const{el:{content:d},parts:c}=this._$AD,p=((h=a==null?void 0:a.creationScope)!==null&&h!==void 0?h:bt).importNode(d,!0);mt.currentNode=p;let m=mt.nextNode(),b=0,w=0,g=c[0];for(;g!==void 0;){if(b===g.index){let y;g.type===2?y=new yi(m,m.nextSibling,this,a):g.type===1?y=new g.ctor(m,g.name,g.strings,this,a):g.type===6&&(y=new Ur(m,this,a)),this.u.push(y),g=c[++w]}b!==(g==null?void 0:g.index)&&(m=mt.nextNode(),b++)}return p}p(a){let h=0;for(const d of this.u)d!==void 0&&(d.strings!==void 0?(d._$AI(a,d,h),h+=d.strings.length-2):d._$AI(a[h])),h++}}(r,this),l=n.v(this.options);n.p(o),this.T(l),this._$AH=n}}_$AC(i){let e=ao.get(i.strings);return e===void 0&&ao.set(i.strings,e=new oi(i)),e}k(i){eo(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of i)s===e.length?e.push(o=new cs(this.O(Gt()),this.O(Gt()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(i=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);i&&i!==this._$AB;){const s=i.nextSibling;i.remove(),i=s}}setConnected(i){var e;this._$AM===void 0&&(this._$Cm=i,(e=this._$AP)===null||e===void 0||e.call(this,i))}},ye=class{constructor(t,i,e,o,s){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,o){const s=this.strings;let r=!1;if(s===void 0)t=wt(this,t,i,0),r=!Xt(t)||t!==this._$AH&&t!==yt,r&&(this._$AH=t);else{const n=t;let l,a;for(t=s[0],l=0;l<s.length-1;l++)a=wt(this,n[e+l],i,l),a===yt&&(a=this._$AH[l]),r||(r=!Xt(a)||a!==this._$AH[l]),a===T?t=T:t!==T&&(t+=(a??"")+s[l+1]),this._$AH[l]=a}r&&!o&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Mr=class extends ye{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}};const Vr=_t?_t.emptyScript:"";let Or=class extends ye{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,Vr):this.element.removeAttribute(this.name)}},Lr=class extends ye{constructor(t,i,e,o,s){super(t,i,e,o,s),this.type=5}_$AI(t,i=this){var e;if((t=(e=wt(this,t,i,0))!==null&&e!==void 0?e:T)===yt)return;const o=this._$AH,s=t===T&&o!==T||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==T&&(o===T||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;typeof this._$AH=="function"?this._$AH.call((e=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&e!==void 0?e:this.element,t):this._$AH.handleEvent(t)}},Ur=class{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){wt(this,t)}};const lo=pe.litHtmlPolyfillSupport;lo==null||lo(oi,yi),((Oe=pe.litHtmlVersions)!==null&&Oe!==void 0?Oe:pe.litHtmlVersions=[]).push("2.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Le,Ue;let gt=class extends ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((e,o,s)=>{var r,n;const l=(r=s==null?void 0:s.renderBefore)!==null&&r!==void 0?r:o;let a=l._$litPart$;if(a===void 0){const h=(n=s==null?void 0:s.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=a=new yi(o.insertBefore(Gt(),h),h,void 0,s??{})}return a._$AI(e),a})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return yt}};gt.finalized=!0,gt._$litElement$=!0,(Le=globalThis.litElementHydrateSupport)===null||Le===void 0||Le.call(globalThis,{LitElement:gt});const ho=globalThis.litElementPolyfillSupport;ho==null||ho({LitElement:gt}),((Ue=globalThis.litElementVersions)!==null&&Ue!==void 0?Ue:globalThis.litElementVersions=[]).push("3.2.2");var Ie,Be,le=window,wi=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$i=Symbol(),co=new WeakMap,ds=class{constructor(t,i,e){if(this._$cssResult$=!0,e!==$i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(wi&&t===void 0){const e=i!==void 0&&i.length===1;e&&(t=co.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&co.set(i,t))}return t}toString(){return this.cssText}},De=(t,...i)=>{const e=t.length===1?t[0]:i.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new ds(e,t,$i)},uo=wi?t=>t:t=>t instanceof CSSStyleSheet?(i=>{let e="";for(const o of i.cssRules)e+=o.cssText;return(o=>new ds(typeof o=="string"?o:o+"",void 0,$i))(e)})(t):t,me=window,po=me.trustedTypes,Ir=po?po.emptyScript:"",mo=me.reactiveElementPolyfillSupport,Kt={toAttribute(t,i){switch(i){case Boolean:t=t?Ir:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=t!==null;break;case Number:e=t===null?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch{e=null}}return e}},us=(t,i)=>i!==t&&(i==i||t==t),Ne={attribute:!0,type:String,converter:Kt,reflect:!1,hasChanged:us},dt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,e)=>{const o=this._$Ep(e,i);o!==void 0&&(this._$Ev.set(o,e),t.push(o))}),t}static createProperty(t,i=Ne){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,e,i);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(o){const s=this[t];this[i]=o,this.requestUpdate(t,s,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ne}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,e=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of e)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const o of e)i.unshift(uo(o))}else t!==void 0&&i.push(uo(t));return i}static _$Ep(t,i){const e=i.attribute;return e===!1?void 0:typeof e=="string"?e:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,e;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)===null||e===void 0||e.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{wi?e.adoptedStyleSheets=o.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):o.forEach(s=>{const r=document.createElement("style"),n=le.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=s.cssText,e.appendChild(r)})})(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var e;return(e=i.hostConnected)===null||e===void 0?void 0:e.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var e;return(e=i.hostDisconnected)===null||e===void 0?void 0:e.call(i)})}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=Ne){var o;const s=this.constructor._$Ep(t,e);if(s!==void 0&&e.reflect===!0){const r=(((o=e.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?e.converter:Kt).toAttribute(i,e.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,i){var e;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=o.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:((e=r.converter)===null||e===void 0?void 0:e.fromAttribute)!==void 0?r.converter:Kt;this._$El=s,this[s]=n.fromAttribute(i,r.type),this._$El=null}}requestUpdate(t,i,e){let o=!0;t!==void 0&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||us)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),e.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,e))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(e)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(e=>{var o;return(o=e.hostUpdated)===null||o===void 0?void 0:o.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,e)=>this._$EO(e,this[e],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};dt.finalized=!0,dt.elementProperties=new Map,dt.elementStyles=[],dt.shadowRootOptions={mode:"open"},mo==null||mo({ReactiveElement:dt}),((Ie=me.reactiveElementVersions)!==null&&Ie!==void 0?Ie:me.reactiveElementVersions=[]).push("1.6.1");var go,ge=window,$t=ge.trustedTypes,fo=$t?$t.createPolicy("lit-html",{createHTML:t=>t}):void 0,Y=`lit$${(Math.random()+"").slice(9)}$`,ps="?"+Y,Br=`<${ps}>`,St=document,Zt=(t="")=>St.createComment(t),Jt=t=>t===null||typeof t!="object"&&typeof t!="function",vo=Array.isArray,Ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_o=/-->/g,bo=/>/g,tt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yo=/'/g,wo=/"/g,$o=/^(?:script|style|textarea|title)$/i,So=(go=1,(t,...i)=>({_$litType$:go,strings:t,values:i})),D=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),xo=new WeakMap,ft=St.createTreeWalker(St,129,null,!1),fe=class{constructor({strings:t,_$litType$:i},e){let o;this.parts=[];let s=0,r=0;const n=t.length-1,l=this.parts,[a,h]=((d,c)=>{const p=d.length-1,m=[];let b,w=c===2?"<svg>":"",g=Ut;for(let M=0;M<p;M++){const P=d[M];let B,C,S=-1,R=0;for(;R<P.length&&(g.lastIndex=R,C=g.exec(P),C!==null);)R=g.lastIndex,g===Ut?C[1]==="!--"?g=_o:C[1]!==void 0?g=bo:C[2]!==void 0?($o.test(C[2])&&(b=RegExp("</"+C[2],"g")),g=tt):C[3]!==void 0&&(g=tt):g===tt?C[0]===">"?(g=b??Ut,S=-1):C[1]===void 0?S=-2:(S=g.lastIndex-C[2].length,B=C[1],g=C[3]===void 0?tt:C[3]==='"'?wo:yo):g===wo||g===yo?g=tt:g===_o||g===bo?g=Ut:(g=tt,b=void 0);const V=g===tt&&d[M+1].startsWith("/>")?" ":"";w+=g===Ut?P+Br:S>=0?(m.push(B),P.slice(0,S)+"$lit$"+P.slice(S)+Y+V):P+Y+(S===-2?(m.push(void 0),M):V)}const y=w+(d[p]||"<?>")+(c===2?"</svg>":"");if(!Array.isArray(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return[fo!==void 0?fo.createHTML(y):y,m]})(t,i);if(this.el=fe.createElement(a,e),ft.currentNode=this.el.content,i===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(o=ft.nextNode())!==null&&l.length<n;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const c of o.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(Y)){const p=h[r++];if(d.push(c),p!==void 0){const m=o.getAttribute(p.toLowerCase()+"$lit$").split(Y),b=/([.?@])?(.*)/.exec(p);l.push({type:1,index:s,name:b[2],strings:m,ctor:b[1]==="."?Dr:b[1]==="?"?Hr:b[1]==="@"?Fr:we})}else l.push({type:6,index:s})}for(const c of d)o.removeAttribute(c)}if($o.test(o.tagName)){const d=o.textContent.split(Y),c=d.length-1;if(c>0){o.textContent=$t?$t.emptyScript:"";for(let p=0;p<c;p++)o.append(d[p],Zt()),ft.nextNode(),l.push({type:2,index:++s});o.append(d[c],Zt())}}}else if(o.nodeType===8)if(o.data===ps)l.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(Y,d+1))!==-1;)l.push({type:7,index:s}),d+=Y.length-1}s++}}static createElement(t,i){const e=St.createElement("template");return e.innerHTML=t,e}};function xt(t,i,e=t,o){var s,r,n,l;if(i===D)return i;let a=o!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[o]:e._$Cl;const h=Jt(i)?void 0:i._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),h===void 0?a=void 0:(a=new h(t),a._$AT(t,e,o)),o!==void 0?((n=(l=e)._$Co)!==null&&n!==void 0?n:l._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(i=xt(t,a._$AS(t,i.values),a,o)),i}var ve=class{constructor(t,i,e,o){var s;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=o,this._$Cm=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=xt(this,t,i),Jt(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==D&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(e=>vo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function")(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==E&&Jt(this._$AH)?this._$AA.nextSibling.data=t:this.T(St.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=fe.createElement(o.h,this.options)),o);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(e);else{const r=new class{constructor(l,a){this.u=[],this._$AN=void 0,this._$AD=l,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(l){var a;const{el:{content:h},parts:d}=this._$AD,c=((a=l==null?void 0:l.creationScope)!==null&&a!==void 0?a:St).importNode(h,!0);ft.currentNode=c;let p=ft.nextNode(),m=0,b=0,w=d[0];for(;w!==void 0;){if(m===w.index){let g;w.type===2?g=new ve(p,p.nextSibling,this,l):w.type===1?g=new w.ctor(p,w.name,w.strings,this,l):w.type===6&&(g=new jr(p,this,l)),this.u.push(g),w=d[++b]}m!==(w==null?void 0:w.index)&&(p=ft.nextNode(),m++)}return c}p(l){let a=0;for(const h of this.u)h!==void 0&&(h.strings!==void 0?(h._$AI(l,h,a),a+=h.strings.length-2):h._$AI(l[a])),a++}}(s,this),n=r.v(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let i=xo.get(t.strings);return i===void 0&&xo.set(t.strings,i=new fe(t)),i}k(t){vo(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,o=0;for(const s of t)o===i.length?i.push(e=new ve(this.O(Zt()),this.O(Zt()),this,this.options)):e=i[o],e._$AI(s),o++;o<i.length&&(this._$AR(e&&e._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var e;for((e=this._$AP)===null||e===void 0||e.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},we=class{constructor(t,i,e,o,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,o){const s=this.strings;let r=!1;if(s===void 0)t=xt(this,t,i,0),r=!Jt(t)||t!==this._$AH&&t!==D,r&&(this._$AH=t);else{const n=t;let l,a;for(t=s[0],l=0;l<s.length-1;l++)a=xt(this,n[e+l],i,l),a===D&&(a=this._$AH[l]),r||(r=!Jt(a)||a!==this._$AH[l]),a===E?t=E:t!==E&&(t+=(a??"")+s[l+1]),this._$AH[l]=a}r&&!o&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Dr=class extends we{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}},Nr=$t?$t.emptyScript:"",Hr=class extends we{constructor(){super(...arguments),this.type=4}j(t){t&&t!==E?this.element.setAttribute(this.name,Nr):this.element.removeAttribute(this.name)}},Fr=class extends we{constructor(t,i,e,o,s){super(t,i,e,o,s),this.type=5}_$AI(t,i=this){var e;if((t=(e=xt(this,t,i,0))!==null&&e!==void 0?e:E)===D)return;const o=this._$AH,s=t===E&&o!==E||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==E&&(o===E||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;typeof this._$AH=="function"?this._$AH.call((e=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&e!==void 0?e:this.element,t):this._$AH.handleEvent(t)}},jr=class{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){xt(this,t)}},Ao=ge.litHtmlPolyfillSupport;Ao==null||Ao(fe,ve),((Be=ge.litHtmlVersions)!==null&&Be!==void 0?Be:ge.litHtmlVersions=[]).push("2.6.1");var He,Fe,Ft=class extends dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((e,o,s)=>{var r,n;const l=(r=s==null?void 0:s.renderBefore)!==null&&r!==void 0?r:o;let a=l._$litPart$;if(a===void 0){const h=(n=s==null?void 0:s.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=a=new ve(o.insertBefore(Zt(),h),h,void 0,s??{})}return a._$AI(e),a})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return D}};Ft.finalized=!0,Ft._$litElement$=!0,(He=globalThis.litElementHydrateSupport)===null||He===void 0||He.call(globalThis,{LitElement:Ft});var Co=globalThis.litElementPolyfillSupport;Co==null||Co({LitElement:Ft}),((Fe=globalThis.litElementVersions)!==null&&Fe!==void 0?Fe:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var jt,Wr=De`
  ${De`
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
  ${De`
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
`,si=1,Eo=3,zo=4,ms=t=>(...i)=>({_$litDirective$:t,values:i}),gs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}},qr={},Yr=ms(class extends gs{constructor(t){if(super(t),t.type!==Eo&&t.type!==si&&t.type!==zo)throw Error("The `live` directive is not allowed on child or event bindings");if(!(i=>i.strings===void 0)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[i]){if(i===D||i===E)return i;const e=t.element,o=t.name;if(t.type===Eo){if(i===e[o])return D}else if(t.type===zo){if(!!i===e.hasAttribute(o))return D}else if(t.type===si&&e.getAttribute(o)===i+"")return D;return((s,r=qr)=>{s._$AH=r})(t),i}}),fs=Object.defineProperty,Gr=Object.defineProperties,Xr=Object.getOwnPropertyDescriptor,Kr=Object.getOwnPropertyDescriptors,ko=Object.getOwnPropertySymbols,Zr=Object.prototype.hasOwnProperty,Jr=Object.prototype.propertyIsEnumerable,Po=(t,i,e)=>i in t?fs(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Et=(t,i)=>{for(var e in i||(i={}))Zr.call(i,e)&&Po(t,e,i[e]);if(ko)for(var e of ko(i))Jr.call(i,e)&&Po(t,e,i[e]);return t},Si=(t,i)=>Gr(t,Kr(i)),A=(t,i,e,o)=>{for(var s,r=o>1?void 0:o?Xr(i,e):i,n=t.length-1;n>=0;n--)(s=t[n])&&(r=(o?s(i,e,r):s(r))||r);return o&&r&&fs(i,e,r),r},It=new WeakMap,To=new WeakMap,Bt=new WeakMap,ri=new Set,Qr=new MutationObserver(bs),pt=new Map,vs=document.documentElement.dir||"ltr",_s=document.documentElement.lang||navigator.language;function bs(){vs=document.documentElement.dir||"ltr",_s=document.documentElement.lang||navigator.language,[...ri.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}Qr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var tn=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ri.add(this.host)}hostDisconnected(){ri.delete(this.host)}dir(){return`${this.host.dir||vs}`.toLowerCase()}lang(){return`${this.host.lang||_s}`.toLowerCase()}term(t,...i){var e,o;const s=new Intl.Locale(this.lang()),r=s==null?void 0:s.language.toLowerCase(),n=(o=(e=s==null?void 0:s.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&o!==void 0?o:"",l=pt.get(`${r}-${n}`),a=pt.get(r);let h;if(l&&l[t])h=l[t];else if(a&&a[t])h=a[t];else{if(!jt||!jt[t])return console.error(`No translation found for: ${String(t)}`),String(t);h=jt[t]}return typeof h=="function"?h(...i):h}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,e){return new Intl.RelativeTimeFormat(this.lang(),e).format(t,i)}},en=class extends tn{};(function(...t){t.map(i=>{const e=i.$code.toLowerCase();pt.has(e)?pt.set(e,Object.assign(Object.assign({},pt.get(e)),i)):pt.set(e,i),jt||(jt=i)}),bs()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var se=t=>t??E;function je(t,i){const e=Et({waitUntilFirstUpdate:!1},i);return(o,s)=>{const{update:r}=o,n=Array.isArray(t)?t:[t];o.update=function(l){n.forEach(a=>{const h=a;if(l.has(h)){const d=l.get(h),c=this[h];d!==c&&(e.waitUntilFirstUpdate&&!this.hasUpdated||this[s](d,c))}}),r.call(this,l)}}}var Ro=ms(class extends gs{constructor(t){var i;if(super(t),t.type!==si||t.name!=="class"||((i=t.strings)===null||i===void 0?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(i=>t[i]).join(" ")+" "}update(t,[i]){var e,o;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in i)i[r]&&!(!((e=this.st)===null||e===void 0)&&e.has(r))&&this.nt.add(r);return this.render(i)}const s=t.element.classList;this.nt.forEach(r=>{r in i||(s.remove(r),this.nt.delete(r))});for(const r in i){const n=!!i[r];n===this.nt.has(r)||!((o=this.st)===null||o===void 0)&&o.has(r)||(n?(s.add(r),this.nt.add(r)):(s.remove(r),this.nt.delete(r)))}return D}}),on=(t,i)=>i.kind==="method"&&i.descriptor&&!("value"in i.descriptor)?Si(Et({},i),{finisher(e){e.createProperty(i.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){typeof i.initializer=="function"&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function O(t){return(i,e)=>e!==void 0?((o,s,r)=>{s.constructor.createProperty(r,o)})(t,i,e):on(t,i)}function Mo(t){return O(Si(Et({},t),{state:!0}))}var We,sn=({finisher:t,descriptor:i})=>(e,o)=>{var s;if(o===void 0){const r=(s=e.originalKey)!==null&&s!==void 0?s:e.key,n=i!=null?{kind:"method",placement:"prototype",key:r,descriptor:i(e.key)}:Si(Et({},e),{key:r});return t!=null&&(n.finisher=function(l){t(l,r)}),n}{const r=e.constructor;i!==void 0&&Object.defineProperty(e,o,i(o)),t==null||t(r,o)}};function Vo(t,i){return sn({descriptor:e=>{const o={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(i){const s=typeof e=="symbol"?Symbol():"__"+e;o.get=function(){var r,n;return this[s]===void 0&&(this[s]=(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&n!==void 0?n:null),this[s]}}return o}})}(We=window.HTMLSlotElement)===null||We===void 0||We.prototype.assignedElements;var ni=class extends Ft{emit(t,i){const e=new CustomEvent(t,Et({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return this.dispatchEvent(e),e}};A([O()],ni.prototype,"dir",2),A([O()],ni.prototype,"lang",2);/*! Bundled license information:

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
*/var qe,x=class extends ni{constructor(){super(...arguments),this.formControlController=new class{constructor(t,i){(this.host=t).addController(this),this.options=Et({form:e=>{if(e.hasAttribute("form")&&e.getAttribute("form")!==""){const o=e.getRootNode(),s=e.getAttribute("form");if(s)return o.getElementById(s)}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var o;return(o=e.disabled)!=null&&o},reportValidity:e=>typeof e.reportValidity!="function"||e.reportValidity(),setValue:(e,o)=>e.value=o},i),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(t){t?(this.form=t,It.has(this.form)?It.get(this.form).add(this.host):It.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Bt.has(this.form)||(Bt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=It.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Bt.has(this.form)&&(this.form.reportValidity=Bt.get(this.form),Bt.delete(this.form))),this.form=void 0}handleFormData(t){const i=this.options.disabled(this.host),e=this.options.name(this.host),o=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";!i&&!s&&typeof e=="string"&&e.length>0&&o!==void 0&&(Array.isArray(o)?o.forEach(r=>{t.formData.append(e,r.toString())}):t.formData.append(e,o.toString()))}handleFormSubmit(t){var i;const e=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=It.get(this.form))==null||i.forEach(s=>{this.setUserInteracted(s,!0)})),!this.form||this.form.noValidate||e||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const i of t)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0}setUserInteracted(t,i){To.set(t,i),t.requestUpdate()}doAction(t,i){if(this.form){const e=document.createElement("button");e.type=t,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",i&&(e.name=i.name,e.value=i.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{i.hasAttribute(o)&&e.setAttribute(o,i.getAttribute(o))})),this.form.append(e),e.click(),e.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){var i;const e=this.host,o=!!To.get(e),s=!!e.required;(i=this.form)!=null&&i.noValidate?(e.removeAttribute("data-required"),e.removeAttribute("data-optional"),e.removeAttribute("data-invalid"),e.removeAttribute("data-valid"),e.removeAttribute("data-user-invalid"),e.removeAttribute("data-user-valid")):(e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o))}updateValidity(){const t=this.host;this.setValidity(t.checkValidity())}}(this),this.hasSlotController=new class{constructor(t,...i){this.slotNames=[],(this.host=t).addController(this),this.slotNames=i,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const i=t;if(i.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!i.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const i=t.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()}}(this,"help-text","label"),this.localize=new en(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",100*t+"%")}syncTooltip(t){if(this.output!==null){const i=this.input.offsetWidth,e=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),s=i*t;if(this.localize.dir()==="rtl"){const r=`${i-s}px + ${t} * ${o}`;this.output.style.translate=`calc((${r} - ${e/2}px - ${o} / 2))`}else{const r=`${s}px - ${t} * ${o}`;this.output.style.translate=`calc(${r} - ${e/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.syncTooltip(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),e=!!this.label||!!t,o=!!this.helpText||!!i;return So`
      <div
        part="form-control"
        class=${Ro({"form-control":!0,"form-control--medium":!0,"form-control--has-label":e,"form-control--has-help-text":o})}
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
            class=${Ro({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${se(this.name)}
              ?disabled=${this.disabled}
              min=${se(this.min)}
              max=${se(this.max)}
              step=${se(this.step)}
              .value=${Yr(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip==="none"||this.disabled?"":So`
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
    `}};function Oo(t,i){(i==null||i>t.length)&&(i=t.length);for(var e=0,o=new Array(i);e<i;e++)o[e]=t[e];return o}x.styles=Wr,A([Vo(".range__control")],x.prototype,"input",2),A([Vo(".range__tooltip")],x.prototype,"output",2),A([Mo()],x.prototype,"hasFocus",2),A([Mo()],x.prototype,"hasTooltip",2),A([O()],x.prototype,"title",2),A([O()],x.prototype,"name",2),A([O({type:Number})],x.prototype,"value",2),A([O()],x.prototype,"label",2),A([O({attribute:"help-text"})],x.prototype,"helpText",2),A([O({type:Boolean,reflect:!0})],x.prototype,"disabled",2),A([O({type:Number})],x.prototype,"min",2),A([O({type:Number})],x.prototype,"max",2),A([O({type:Number})],x.prototype,"step",2),A([O()],x.prototype,"tooltip",2),A([O({attribute:!1})],x.prototype,"tooltipFormatter",2),A([O({reflect:!0})],x.prototype,"form",2),A([((t="value")=>(i,e)=>{const o=i.constructor,s=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(r,n,l){var a;const h=o.getPropertyOptions(t);if(r===(typeof h.attribute=="string"?h.attribute:t)){const d=h.converter||Kt,c=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:Kt.fromAttribute)(l,h.type);this[t]!==c&&(this[e]=c)}s.call(this,r,n,l)}})()],x.prototype,"defaultValue",2),A([je("value",{waitUntilFirstUpdate:!0})],x.prototype,"handleValueChange",1),A([je("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1),A([je("hasTooltip",{waitUntilFirstUpdate:!0})],x.prototype,"syncRange",1),x=A([(qe="sl-range",t=>typeof t=="function"?((i,e)=>(customElements.define(i,e),e))(qe,t):((i,e)=>{const{kind:o,elements:s}=e;return{kind:o,elements:s,finisher(r){customElements.define(i,r)}}})(qe,t))],x);var Dt=function(){try{window[U].updateSegments();var t=function(){if(!Ye)return Ye=!0,Promise.resolve(Promise.resolve(!1)).then(function(i){Ye=i,window[U].dispatchEvent(new Event("change"))})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(i){return Promise.reject(i)}},U="__foldables__",Ye=!1,xi=function(){function t(){var o=this;if(window[U]!==void 0)return window[U];var s=document.createDocumentFragment();this.addEventListener=s.addEventListener.bind(s),this.removeEventListener=s.removeEventListener.bind(s),this.dispatchEvent=function(r){if(r.type==="change"){var n="on"+r.type;return typeof o[n]=="function"&&o[n](r),s.dispatchEvent(r)}},window.addEventListener("message",function(r){r.data.action==="update"&&Object.assign(o,r.data.value)}),window.addEventListener("resize",function(){return function(r,n){var l;return function(){var a=arguments,h=this;clearTimeout(l),l=setTimeout(function(){return r.apply(h,a)},n)}}(Dt(),200)})}var i,e=t.prototype;return e.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var s=window.innerHeight-this.browserShellSize,r=0,n=window.innerWidth,l=s/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:r,left:0,bottom:r+l,right:n,width:n,height:l},r+=o[a].height,r+=this.foldSize;if(this.horizontalViewportSegments>1)for(var h=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,p=0;p<this.horizontalViewportSegments;++p)o[p]={top:0,left:c,right:c+h,bottom:d,width:h,height:d},c+=o[p].width,c+=this.foldSize;window.visualViewport.segments=o},e.randomizeSegmentsConfiguration=function(o){var s=Math.random()<.5,r=Math.round(Math.random()*(o-1)+1);s?(this.verticalViewportSegments=r,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=r,this.verticalViewportSegments=1)},(i=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(U+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(U+"-horizontal-viewport-segments",o),Dt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(U+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(U+"-vertical-viewport-segments",o),Dt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(U+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(U+"-fold-size",o),Dt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(U+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(U+"-browser-shell-size",o),Dt()}}])&&function(o,s){for(var r=0;r<s.length;r++){var n=s[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(t.prototype,i),t}();window[U]=new xi,window.visualViewport.segments===void 0&&window[U].updateSegments();var ys="-viewport-segments",ai="(\\s*)(@media.*?\\b"+ys+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",rn=/\((.*?)\)/gi,nn=/@media[^\(]+/gi,an=/(horizontal-viewport-segments:)\s?(\d)/gi,ln=/(vertical-viewport-segments:)\s?(\d)/gi,hn=function(t){return new RegExp("env\\(\\s*"+t+"\\s*\\)","gi")};function Lo(t,i){var e=t.matchAll(i);return e===null?[]:Array.from(e,function(o){return o[2]})[0]}function cn(t){var i=function(o){var s,r=new RegExp(ai,"gi");if(typeof o.matchAll=="function")s=Array.from(o.matchAll(r));else{for(s=[];s[s.length]=r.exec(o););s.length--}return s}(t),e=[[]];return i.forEach(function(o){var s=o[1],r=o[2],n=o[3],l=o[4],a=r.match(nn)||[],h=r.match(rn)||[],d=Lo(r,ln);d===void 0&&(d=1);var c=Lo(r,an);c===void 0&&(c=1),h=h.filter(function(p){return!p.includes(ys)}).join(" and "),e[d]===void 0&&(e[d]=new Array),e[d][c]=""+s+a+h+"{"+n+l+"}"}),e}var li=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+li);var Uo,ws=new xi;if(!li){var Ge=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Uo=Ge,Promise.all(Uo.map(function(t){return t.href?fetch(t.href).then(function(i){return i.text()}):t.textContent}))).then(function(t){var i=new DocumentFragment;t.forEach(function(e,o){for(var s,r=function(M,P){return M.replace(new RegExp(ai,"gi"),P)}(e,""),n=cn(e),l=Ge[o].href||"inline",a=0,h=Object.entries(n);a<h.length;a++){var d=h[a],c=d[0],p=d[1];Wt[c]==null&&(Wt[c]=[]);for(var m=0,b=Object.entries(p);m<b.length;m++){var w=b[m];Wt[c][w[0]]="/* origin: "+l+" */"+w[1]}}if(l=="inline"||(s=e,new RegExp(ai,"gi").test(s))){var g=document.createElement("style");g.setAttribute("data-css-origin",l),g.textContent=r,i.appendChild(g)}else{var y=document.createElement("link");y.type="text/css",y.rel="stylesheet",y.href=l,i.appendChild(y)}}),Ge.forEach(function(e){return e.parentElement!=null&&e.parentElement.removeChild(e)}),document.head.appendChild(i),function(e){li||(Io(e),ws.addEventListener("change",function(){return Io(e)}))}()})}var Wt=[[]];function Io(t){var i,e=ws,o=null;(i=t?Wt[t.nodeName.toLowerCase()]:Wt)[e.verticalViewportSegments]&&(o=i[e.verticalViewportSegments][e.horizontalViewportSegments]);var s,r=i[0][0]?i[0][0]:null;if(o){var n=window.visualViewport.segments,l=!1;n.length>1&&(l=!(n[0].height<window.innerHeight));for(var a=0,h=Object.entries(n);a<h.length;a++)for(var d=h[a],c=d[0],p=0,m=Object.entries(d[1]);p<m.length;p++){var b=m[p],w=b[0];s=b[1]+"px",o=o.replace(hn(l?"viewport-segment-"+w+" "+c+" 0":"viewport-segment-"+w+" 0 "+c),s)}var g="__foldables_sheet__",y=function(P,B){for(var C,S=function(V,$e){var Z=typeof Symbol<"u"&&V[Symbol.iterator]||V["@@iterator"];if(Z)return(Z=Z.call(V)).next.bind(Z);if(Array.isArray(V)||(Z=function(j,Ci){if(j){if(typeof j=="string")return Oo(j,Ci);var at=Object.prototype.toString.call(j).slice(8,-1);return at==="Object"&&j.constructor&&(at=j.constructor.name),at==="Map"||at==="Set"?Array.from(j):at==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(at)?Oo(j,Ci):void 0}}(V))){Z&&(V=Z);var Ai=0;return function(){return Ai>=V.length?{done:!0}:{done:!1,value:V[Ai++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(P.querySelectorAll("."+g));!(C=S()).done;)C.value.remove();var R=document.createElement("style");R.className=g,R.textContent=B,P===document?document.head.appendChild(R):P.appendChild(R)};if(t){var M=t.shadowRoot;"adoptedStyleSheets"in M&&M.adoptedStyleSheets.length>0?M.adoptedStyleSheets[0].replace(r+o):y(M,o)}else y(document,o)}}const W={Foldable:"foldable",Dual:"dual"};class zt extends gt{}u(zt,"styles",ns`
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
    `}});class $s extends gt{constructor(){super();u(this,"_mini_configurator_header");u(this,"_mini_configurator");u(this,"_configurator");u(this,"_configurator_header");u(this,"_device_type_select");u(this,"_orientation_select");u(this,"_seam_slider");u(this,"_seam_container");u(this,"_preview");u(this,"_preview_container");u(this,"_device");u(this,"_frame");u(this,"_device_hinge");u(this,"_currentOrientation");u(this,"_currentDevice");u(this,"_isFullscreen",!1);u(this,"_verticalViewportSegments",1);u(this,"_horizontalViewportSegments",1);u(this,"_fold_width");u(this,"_browser_shell_size");u(this,"_x",0);u(this,"_y",0);u(this,"_offset_x",0);u(this,"_offset_y",0);u(this,"_resizeHandler");u(this,"_handleKeyUp",e=>{e.keyCode==73&&e.ctrlKey&&this._showMiniConfigurator()});u(this,"_startDragMiniConfigurator",async e=>{this._startDrag(e),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove});u(this,"_startDragConfigurator",async e=>{this._startDrag(e),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove});u(this,"_startDrag",async e=>{this._isFullscreen||(this._moved=!1,this._x=e.clientX-this._offset_x,this._y=e.clientY-this._offset_y,this._pointerId=e.pointerId,e.preventDefault())});u(this,"_miniConfiguratorMove",async e=>{this._pointerMove(e),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}});u(this,"_pointerMove",async e=>{if(e.clientY<0||e.clientX<0||e.clientX>window.innerWidth||e.clientY>window.innerHeight)return;let o=e.clientX-this._x,s=e.clientY-this._y;const r=window.getComputedStyle(this.shadowRoot.host),n=parseFloat(r.width),l=parseFloat(r.height);o<0&&(o=0),s<0&&(s=0),s+l>=window.innerHeight&&(s=window.innerHeight-l),o+n>=window.innerWidth&&(o=window.innerWidth-n),this._updateConfiguratorPosition(o,s),e.preventDefault()});u(this,"_stopDragConfigurator",async e=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(e)});u(this,"_stopDragMiniConfigurator",async e=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(e)});u(this,"_stopDrag",async e=>{this._x=this._offset_x,this._y=this._offset_y});u(this,"_onResize",async e=>{this._handleAsusSpanning()});u(this,"_seamValueUpdated",async()=>{this.foldWidth=this._seam_slider.value,this.shadowRoot.host.style.setProperty("--device-fold-width",this.foldWidth+"px"),this._updateFoldablesFeature()});u(this,"_rotationFinished",e=>{this._preview.style.transition=""});this._verticalViewportSegments=1,this._horizontalViewportSegments=1}static get properties(){return{verticalViewportSegments:{type:Number},horizontalViewportSegments:{type:Number}}}_inIframe(){try{return window.self!==window.top}catch{return!0}}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches)return console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this);const e=window.getComputedStyle(this.shadowRoot.host);parseFloat(e.width);const o=parseFloat(e.height);this._updateConfiguratorPosition(20,window.innerHeight-o-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._verticalViewportSegments=1,this._horizontalViewportSegments=1,this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="portrait",this._deviceType=W.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.horizontalViewportSegments=1,this.verticalViewportSegments=2,this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{this._addZenbookVariables(document.styleSheets[0]),this._addZenbookVariables(this._frame.contentDocument.styleSheets[0])},300)):(this.horizontalViewportSegments=1,this.verticalViewportSegments=1,this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this._orientationFromSegments()}_orientationFromSegments(){return this.horizontalViewportSegments===2&&this.verticalViewportSegments===1?"portrait":this.horizontalViewportSegments===1&&this.verticalViewportSegments===2?"landscape":"portrait"}_addZenbookVariables(e){e.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",e.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(e){this._fold_width=Math.max(0,e)}_orientationChanged(e){const o=this._orientation_select.selectedIndex;this._orientation_select[o].value==="portrait"?(this.horizontalViewportSegments=2,this.verticalViewportSegments=1):(this.horizontalViewportSegments=1,this.verticalViewportSegments=2),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){this._orientationFromSegments()!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this._orientationFromSegments(),this.horizontalViewportSegments===1&&this.verticalViewportSegments===1?this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation():this.horizontalViewportSegments===2?this._applyVerticalRotation():this._applyHorizontalRotation()}get horizontalViewportSegments(){return this._horizontalViewportSegments}set horizontalViewportSegments(e){let o=this._horizontalViewportSegments;this._orientation_select.selectedIndex=e===2?0:1,this._horizontalViewportSegments=e,this.requestUpdate("horizontalViewportSegments",o)}get verticalViewportSegments(){return this._verticalViewportSegments}set verticalViewportSegments(e){let o=this._verticalViewportSegments;this._orientation_select.selectedIndex=e===2?1:0,this._verticalViewportSegments=e,this.requestUpdate("verticalViewportSegments",o)}_deviceTypeChanged(e){const o=this._device_type_select.selectedIndex,s=this._device_type_select[o].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(this.verticalViewportSegments=1,this.horizontalViewportSegments=2,this._currentOrientation="portrait"),s){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this.foldWidth=24,this._deviceType=W.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=W.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=W.Dual,this.foldWidth=28,this._currentDevice="duo";break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=W.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=W.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this.verticalViewportSegments=1,this.horizontalViewportSegments=1,this._currentOrientation="portrait",this._currentDevice="duo",this.foldWidth=0,this._deviceType=W.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature(),this._frame.contentWindow.location.reload(!0)}_calculateAndApplyScaleFactor(){const e=window.getComputedStyle(this._preview_container),o=window.getComputedStyle(this._device),s=parseInt(e.width,10),r=parseInt(e.height,10);let n=parseInt(o.width,10),l=parseInt(o.height,10),a=1;if(this._currentOrientation==="landscape"&&(n=parseInt(o.height,10),l=parseInt(o.width,10)),l>r||n>s){const h=r/l,d=s/n;a=d<h?d:h}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*a)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px")}this._deviceType===W.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const e=new xi;e.foldSize=this.foldWidth,e.horizontalViewportSegments=this.horizontalViewportSegments,e.verticalViewportSegments=this.verticalViewportSegments,this._seam_slider.value=this.foldWidth}_debounce(e,o){let s;return function(){clearTimeout(s),s=setTimeout(()=>e.apply(this,arguments),o)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let e=this._offset_x,o=this._offset_y;const s=window.getComputedStyle(this.shadowRoot.host),r=parseFloat(s.width),n=parseFloat(s.height);this._offset_y+n>=window.innerHeight&&(o=window.innerHeight-n),this._offset_x+r>=window.innerWidth&&(e=window.innerWidth-r),this._updateConfiguratorPosition(e,o),this._updatePreviewConfiguration()}_updateConfiguratorPosition(e,o){this._offset_x=e,this._offset_y=o,this.shadowRoot.host.style.transform="translate3d("+e+"px, "+o+"px, 0)"}_toggleSpanning(){this.verticalViewportSegments!=1||this.horizontalViewportSegments!=1?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1||(this.verticalViewportSegments===2?(this.verticalViewportSegments=1,this.horizontalViewportSegments=2):(this.verticalViewportSegments=2,this.horizontalViewportSegments=1),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return Ct`
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
    </div>`}}u($s,"styles",ns`
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
  `);customElements.define("foldable-device-configurator",$s);class Ss extends ot{constructor(){super();u(this,"_spanning",!1)}firstUpdated(){}handleSpanning(){const e=window.visualViewport.segments;this._spanning=e&&e.length>1;let o=this.shadowRoot.host.style;if(this._spanning){const s=e[0];s.width>s.height?(o.top="5vh",o.left="calc(50vw - 20vw)",o.width="40vw",o.height=s.height/1.5+"px"):(o.top="calc(50vh - 12.5vh)",o.width="25vw",o.left="calc(25vw - 12.5vw)",o.height=e[0].height/3+"px")}else o.top="",o.left="",o.width="",o.height=""}close(){this.shadowRoot.host.style.visibility="hidden"}open(){this.shadowRoot.host.style.visibility="visible"}render(){return rt`
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
    `}}u(Ss,"styles",K`
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
  `);customElements.define("game-menu",Ss);Qe("/demos/starfold/");class xs extends ot{constructor(){super();u(this,"_swAlert");u(this,"_wb");u(this,"_wbRegistration");u(this,"_mainMenu");u(this,"_pauseMenu");u(this,"_aboutMenu");u(this,"_lostMenu");u(this,"_pauseButton");u(this,"_pauseButtonPos",{x:0,y:0});u(this,"_pauseButtonSize",80);u(this,"_ship");u(this,"_shipSize",80);u(this,"_controllerSize",70);u(this,"_controllerSizeTouch",60);u(this,"_shipObject",{x:0,y:0});u(this,"_background1Y",0);u(this,"_background2Y",0);u(this,"_meteorSize",80);u(this,"_meteorImage");u(this,"_meteorImage2");u(this,"_meteors",[]);u(this,"_explosionImage");u(this,"_currentTime",0);u(this,"_startTime",0);u(this,"_timeSize");u(this,"_timeX");u(this,"_timeY");u(this,"_velocity",1);u(this,"_paused",!0);u(this,"_dead",!0);u(this,"_spanning",!1);u(this,"_playAreaSize");u(this,"_controllerArea");u(this,"_enableDebug",!1);u(this,"_pointerDown",!1);u(this,"_currentPointerTimeout",[]);u(this,"_pointerId");u(this,"_touchSensitivity",10);u(this,"_touchingLeftController",!1);u(this,"_touchingRightController",!1);u(this,"_touchingUpController",!1);u(this,"_touchingDownController",!1);u(this,"_yButtonImage");u(this,"_yButtonSize",100);u(this,"_yButtonPos",{x:0,y:0});u(this,"_touchingYButton",!1);u(this,"_missileImage");u(this,"_missileWidth",20);u(this,"_missileHeight",30);u(this,"_missiles",[]);u(this,"_handleKeyDown",e=>{this._paused||(e.keyCode==37?this._moveShipLeft():e.keyCode==39?this._moveShipRight():e.keyCode==27?this._pauseGame():e.keyCode==40?this._moveShipDown():e.keyCode==38?this._moveShipUp():e.keyCode==32&&this._fireMissile())});u(this,"_onPointerDown",async e=>{if(!(this._paused||this._dead)){if(this._clearPointerTimeout(),this._isTouchingPauseButton(e)){this._pauseGame();return}this._touchingLeftController=this._isTouchingAController(this._leftControllerPos,e),this._touchingRightController=this._isTouchingAController(this._rightControllerPos,e),this._touchingUpController=this._isTouchingAController(this._upControllerPos,e),this._touchingDownController=this._isTouchingAController(this._downControllerPos,e),(this._touchingLeftController||this._touchingRightController||this._touchingUpController||this._touchingDownController)&&(this._pointerDown=!0,this._pointerId=e.pointerId,this._canvas.setPointerCapture(this._pointerId),e.preventDefault(),this._touchingLeftController?this._moveShipLeft():this._touchingRightController?this._moveShipRight():this._touchingUpController?this._moveShipUp():this._touchingDownController&&this._moveShipDown(),this._currentPointerTimeout.push(setTimeout(o=>this._simulateLongPress(this._touchingLeftController,this._touchingRightController,this._touchingUpController,this._touchingDownController),300))),this._touchingYButton=this._isTouchingYButton(e),this._touchingYButton&&this._fireMissile()}});u(this,"_onPointerMove",async e=>{this._paused||this._dead||this._isTouchingController(e)||(this._pointerDown=!1,this._clearPointerTimeout())});u(this,"_onPointerUp",async e=>{this._paused||this._dead||(this._pointerDown=!1,this._touchingLeftController=this._touchingRightController=this._touchingUpController=this._touchingDownController=this._touchingYButton=!1,this._clearPointerTimeout(),this._pointerId!=null&&(this._canvas.releasePointerCapture(this._pointerId),this._pointerId=void 0))});u(this,"_simulateLongPress",async(e,o,s,r)=>{this._pointerDown&&(e?this._moveShipLeft():o?this._moveShipRight():s?this._moveShipUp():r&&this._moveShipDown(),this._currentPointerTimeout.push(setTimeout(n=>this._simulateLongPress(e,o,s,r),50)))});u(this,"_drawCanvas",e=>{if(this._paused)return;this._context.clearRect(0,0,this._canvas.width,this._canvas.height),this._drawBackground(),this._drawMeteors(),this._drawMissiles(),this._drawShip(),this._drawTime(),this._spanning?(this._drawControllerSegment(),this._drawController(this._controllerSize),this._drawControllerHighlight(this._controllerSize),this._drawPauseButton()):(this._drawController(this._controllerSizeTouch),this._drawControllerHighlight(this._controllerSizeTouch)),this._drawYButton();let o=Math.round(window.performance.now()/1e3)-this._startTime;if(this.currentTime==o){requestAnimationFrame(this._drawCanvas);return}this.currentTime=o;const s=5-this._velocity<=0?1:5-this._velocity;this.currentTime%s===0&&this._addNewMeteors(),this.currentTime%30==0&&this._velocity++,requestAnimationFrame(this._drawCanvas)});u(this,"_onResize",async e=>{const o=window.getComputedStyle(this._canvas);this._canvas.width=parseInt(o.width,10),this._canvas.height=parseInt(o.height,10),this._handleSpanning(),this._paused&&this._drawBackground(),setTimeout(s=>this._handleSpanning(),2e3)});this._currentTime=0}static get properties(){return{currentTime:{type:String}}}set currentTime(e){let o=this._currentTime;this._currentTime=e,this.requestUpdate("currentTime",o)}get currentTime(){return this._currentTime}firstUpdated(){if(this._canvas=this.shadowRoot.querySelector("#canvas"),this._canvas&&this._canvas.getContext&&(this._context=this._canvas.getContext("2d")),!this._context){console.error("Your browser doesn't support canvas, this demo won't work");return}this._swAlert=this.shadowRoot.querySelector("#sw-alert"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new Zs("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()});const e=window.getComputedStyle(this._canvas);if(this._canvas.width=parseInt(e.width,10),this._canvas.height=parseInt(e.height,10),console.log("canvas size : "+this._canvas.width+"x"+this._canvas.height),this._context.font="20px Russo One",window.addEventListener("resize",this._onResize),this._mainMenu=this.shadowRoot.querySelector("#main-menu"),this._mainMenu.open(),this._pauseMenu=this.shadowRoot.querySelector("#pause-menu"),this._aboutMenu=this.shadowRoot.querySelector("#about-menu"),this._lostMenu=this.shadowRoot.querySelector("#lost-menu"),this._pauseButton=this.shadowRoot.querySelector("#pause-button"),this._ship=this.shadowRoot.querySelector("#ship"),this._meteorImage=this.shadowRoot.querySelector("#meteor"),this._meteorImage2=this.shadowRoot.querySelector("#meteor2"),this._background=this.shadowRoot.querySelector("#background"),this._explosionImage=this.shadowRoot.querySelector("#explosion"),this._controllerLeftImage=this.shadowRoot.querySelector("#left-controller"),this._controllerRightImage=this.shadowRoot.querySelector("#right-controller"),this._controllerUpImage=this.shadowRoot.querySelector("#up-controller"),this._controllerDownImage=this.shadowRoot.querySelector("#down-controller"),this._missileImage=this.shadowRoot.querySelector("#missile"),this._yButtonImage=this.shadowRoot.querySelector("#y-button"),document.addEventListener("keydown",this._handleKeyDown,!1),this._canvas.onpointerdown=this._onPointerDown.bind(this),this._canvas.onpointermove=this._onPointerMove.bind(this),this._canvas.onpointercancel=this._onPointerUp.bind(this),this._canvas.onpointerup=this._onPointerUp.bind(this),this._timeSize=this._context.measureText("Elapsed Time : 2222s").width,this._handleSpanning(),this._background.onload=this._drawBackground.bind(this),window.visualViewport==null&&typeof Ke<"u"){const o=new Ke;o.onchange=()=>this._handleSpanning()}screen.orientation.addEventListener("change",this._handleOrientationChange),navigator.devicePosture!=null&&navigator.devicePosture.addEventListener("change",()=>this._handleSpanning())}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&Ze(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_deviceSupportsSpanningMQs(){return window.matchMedia("(spanning: single-fold-horizontal)").matches||window.matchMedia("(spanning: single-fold-vertical)").matches||window.matchMedia("(spanning: none)").matches||!1}_startGame(){this._mainMenu.close(),this._lostMenu.close(),this._pauseMenu.close(),this._paused=!1,this._dead=!1,this._meteors=[],this._missiles=[],this.currentTime=0,this._velocity=2,this._startTime=Math.round(window.performance.now()/1e3),this._updateGameLayout(),this._shipObject={x:this._playAreaSize.width/2-this._shipSize/2,y:this._playAreaSize.height-this._shipSize,size:this._shipSize},this._background2Y=-this._playAreaSize.height,this._background1Y=-this._playAreaSize.height,this._touchingYButton=this._touchingLeftController=this._touchingRightController=this._touchingUpController=this._touchingDownController=!1,this._pointerDown=!1,this._addNewMeteors(),this._spanning||this._showPauseButton(),requestAnimationFrame(this._drawCanvas)}_hidePauseButton(){this._pauseButton.classList.add("hidden")}_showPauseButton(){this._pauseButton.classList.remove("hidden")}_pauseGame(){this._paused||(this._paused=!0,this._touchingYButton=this._touchingLeftController=this._touchingRightController=this._touchingUpController=this._touchingDownController=!1,this._hidePauseButton(),this._pauseMenu.open())}_resumeGame(){this._paused&&(this._paused=!1,this._pauseMenu.close(),this._spanning||this._showPauseButton(),requestAnimationFrame(this._drawCanvas))}_lostGame(){this._paused||(this._paused=!0,this._dead=!0,this._clearPointerTimeout(),this._lostMenu.open())}_showAbout(){this._mainMenu.close(),this._aboutMenu.open()}_openMainMenu(){this._mainMenu.open(),this._aboutMenu.close()}_addNewMeteors(){let e=Math.round(this._playAreaSize.width/this._meteorSize/4);for(let o=0;o<e;++o)this._addRandomMeteor()}_addRandomMeteor(){let e=this._getRandomInt(0,this._playAreaSize.width-this._meteorSize),o=this._getRandomInt(0,-500);for(const s of this._meteors)if(this._checkCollision(s,{x:e,y:o,size:this._meteorSize}))return this._addRandomMeteor();this._meteors.push({x:e,y:o,destroyed:!1,size:this._meteorSize,spriteId:Math.random()>=.5})}_removeMeteor(e){for(let o=this._meteors.length;o--;){const s=this._meteors[o];if(s.destroyed&&e.y==s.y&&e.x==s.x){this._meteors.splice(o,1);break}}}_getRandomInt(e,o){return Math.floor(Math.random()*(o-e+1))+e}_drawShip(){this._dead?this._context.drawImage(this._explosionImage,this._shipObject.x,this._shipObject.y,this._shipObject.size+10,this._shipObject.size+10):this._context.drawImage(this._ship,this._shipObject.x,this._shipObject.y,this._shipObject.size,this._shipObject.size)}_drawBackground(){this._background1Y=this._background1Y-1,this._background2Y=this._background2Y+1,this._background1Y<-2*this._playAreaSize.height&&(this._background1Y=0),this._background2Y>this._playAreaSize.height&&(this._background2Y=-this._playAreaSize.height),this._context.drawImage(this._background,0,this._background2Y,this._playAreaSize.width,this._playAreaSize.height),this._context.save(),this._context.scale(-1,-1),this._context.drawImage(this._background,-this._playAreaSize.width,this._background1Y,this._playAreaSize.width,this._playAreaSize.height),this._context.restore()}_drawMeteors(){for(const e of this._meteors){const o=e.spriteId?this._meteorImage:this._meteorImage2;if(e.destroyed?this._context.drawImage(this._explosionImage,e.x,e.y,e.size,e.size):this._context.drawImage(o,e.x,e.y,e.size,e.size),this._enableDebug){this._context.save();const s=e.x+" "+e.y;this._context.font="20px serif",this._context.strokeStyle="#ffffff",this._context.strokeText(s,e.x,e.y+e.size/2),this._context.restore()}!e.destroyed&&this._checkCollision(e,this._shipObject)&&this._lostGame(),e.y+=this._velocity}for(let e=this._meteors.length;e--;)this._meteors[e].y>this._playAreaSize.height&&this._meteors.splice(e,1)}_drawMissiles(){for(let e=this._missiles.length;e--;){const o=this._missiles[e];if(this._context.drawImage(this._missileImage,o.x,o.y,this._missileWidth,this._missileHeight),this._enableDebug){this._context.save();const s=o.x+" "+o.y;this._context.font="20px serif",this._context.strokeStyle="#ffffff",this._context.strokeText(s,o.x,o.y+this._missileWidth/2),this._context.restore()}for(const s of this._meteors)if(this._checkCollision(o,s)){s.destroyed=!0,this._missiles.splice(e,1),setTimeout(()=>this._removeMeteor(s),300);break}o.y-=10}for(let e=this._missiles.length;e--;)this._missiles[e].y<0&&this._missiles.splice(e,1)}_checkCollision(e,o){return e.x+e.size>=o.x&&e.x<=o.x+o.size&&e.y+e.size>=o.y&&e.y<=o.y+o.size}_drawTime(){const e="Elapsed Time : "+this.currentTime+"s";this._context.font="20px Russo One",this._context.fillStyle="#fbc02d",this._context.fillText(e,this._timeX,this._timeY)}_drawControllerSegment(){this._context.save(),this._context.fillStyle="black",this._context.fillRect(this._controllerArea.left,this._controllerArea.top,this._controllerArea.width,this._controllerArea.height),this._context.restore()}_drawController(e){this._context.save(),this._context.drawImage(this._controllerLeftImage,this._leftControllerPos.x,this._leftControllerPos.y,e,e),this._drawMiddleController(e),this._context.drawImage(this._controllerRightImage,this._rightControllerPos.x,this._rightControllerPos.y,e,e),this._context.drawImage(this._controllerUpImage,this._upControllerPos.x,this._upControllerPos.y,e,e),this._context.drawImage(this._controllerDownImage,this._downControllerPos.x,this._downControllerPos.y,e,e),this._context.restore()}_drawMiddleController(e){this._context.fillStyle="white",this._context.strokeStyle="#333333",this._context.lineWidth="3",this._context.fillRect(this._leftControllerPos.x+e,this._leftControllerPos.y+1,e,e-2),this._context.beginPath(),this._context.rect(this._leftControllerPos.x+e,this._leftControllerPos.y+1,e,e-2),this._context.stroke()}_drawControllerHighlight(e){this._context.save(),this._context.globalAlpha=.7,this._context.fillStyle="black",this._touchingLeftController?this._context.fillRect(this._leftControllerPos.x,this._leftControllerPos.y,e,e):this._touchingRightController?this._context.fillRect(this._rightControllerPos.x,this._rightControllerPos.y,e,e):this._touchingUpController?this._context.fillRect(this._upControllerPos.x,this._upControllerPos.y,e,e):this._touchingDownController&&this._context.fillRect(this._downControllerPos.x,this._downControllerPos.y,e,e),this._context.restore()}_drawPauseButton(){this._context.drawImage(this._pauseButton,this._pauseButtonPos.x,this._pauseButtonPos.y,this._pauseButtonSize,this._pauseButtonSize)}_drawYButton(){this._context.drawImage(this._yButtonImage,this._yButtonPos.x,this._yButtonPos.y,this._yButtonSize,this._yButtonSize),this._touchingYButton&&(this._context.save(),this._context.globalAlpha=.7,this._context.beginPath(),this._context.arc(this._yButtonPos.x+this._yButtonSize/2,this._yButtonPos.y+this._yButtonSize/2,this._yButtonSize/2,0,2*Math.PI),this._context.strokeStyle="black",this._context.stroke(),this._context.fillStyle="black",this._context.fill(),this._context.restore())}_isTouchingPauseButton(e){return e.clientX>=this._pauseButtonPos.x-this._touchSensitivity&&e.clientX<=this._pauseButtonPos.x+this._pauseButtonSize+this._touchSensitivity&&e.clientY>=this._pauseButtonPos.y-this._touchSensitivity&&e.clientY<=this._pauseButtonPos.y+this._pauseButtonSize+this._touchSensitivity}_isTouchingYButton(e){return e.clientX>=this._yButtonPos.x-this._touchSensitivity&&e.clientX<=this._yButtonPos.x+this._yButtonSize+this._touchSensitivity&&e.clientY>=this._yButtonPos.y-this._touchSensitivity&&e.clientY<=this._yButtonPos.y+this._yButtonSize+this._touchSensitivity}_isTouchingAController(e,o){return o.clientX>=e.x-this._touchSensitivity&&o.clientX<=e.x+this._controllerSize+this._touchSensitivity&&o.clientY>=e.y-this._touchSensitivity&&o.clientY<=e.y+this._controllerSize+this._touchSensitivity}_isTouchingController(e){const o=this._isTouchingAController(this._leftControllerPos,e),s=this._isTouchingAController(this._rightControllerPos,e),r=this._isTouchingAController(this._upControllerPos,e),n=this._isTouchingAController(this._downControllerPos,e);return o||s||r||n}_clearPointerTimeout(){for(const e of this._currentPointerTimeout)clearTimeout(e);this._currentPointerTimeout=[]}_moveShipLeft(){this._shipObject.x<=5||this._paused||(this._shipObject.x-=5)}_moveShipRight(){this._shipObject.x+5>=this._playAreaSize.width-this._shipObject.size||this._paused||(this._shipObject.x+=5)}_moveShipDown(){this._shipObject.y+5>=this._playAreaSize.height-this._shipObject.size||this._paused||(this._shipObject.y+=5)}_moveShipUp(){this._shipObject.y<=5||this._paused||(this._shipObject.y-=5)}_fireMissile(){this._missiles.push({x:this._shipObject.x+this._shipSize/2-this._missileWidth/2,y:this._shipObject.y-10,size:this._missileWidth})}_handleSpanning(){const e=window.visualViewport.segments;this._spanning=e&&e.length>1&&e[0].height<this._canvas.height,this._updateGameLayout(),this._spanning?this._hidePauseButton():this._showPauseButton(),this._mainMenu.handleSpanning(),this._pauseMenu.handleSpanning(),this._aboutMenu.handleSpanning(),this._lostMenu.handleSpanning()}_handleOrientationChange(e){this._pauseGame(),this._updateGameLayout(),this._mainMenu.handleSpanning(),this._pauseMenu.handleSpanning(),this._aboutMenu.handleSpanning(),this._lostMenu.handleSpanning()}_updateGameLayout(){let e;this._playAreaSize&&(e={width:this._playAreaSize.width,height:this._playAreaSize.height});const o=window.visualViewport.segments;if(this._shipSize=80,this._meteorSize=80,this._missileWidth=20,this._missileHeight=30,o&&o.length>1&&o[0].height<this._canvas.height?(this._playAreaSize={left:o[0].left,top:o[0].top,width:o[0].width,height:o[0].height},this._controllerArea={left:o[1].left,top:o[1].top,width:o[1].width,height:o[1].height},o[0].height<400&&(this._shipSize=50,this._meteorSize=50,this._missileWidth=12,this._missileHeight=17),this._pauseButtonPos={x:this._controllerArea.left+this._controllerArea.width/2-this._pauseButtonSize/2,y:this._controllerArea.top+this._controllerArea.height/2-this._pauseButtonSize/2},this._yButtonPos={x:this._controllerArea.left+this._controllerArea.width-this._yButtonSize*1.5,y:this._controllerArea.top+this._controllerArea.height/2-this._yButtonSize/2},this._leftControllerPos={x:this._controllerArea.left,y:this._controllerArea.top+this._controllerArea.height/2-this._controllerSize/2},this._rightControllerPos={x:this._controllerArea.left+2*this._controllerSize,y:this._controllerArea.top+this._controllerArea.height/2-this._controllerSize/2},this._upControllerPos={x:this._controllerArea.left+this._controllerSize,y:this._controllerArea.top+this._controllerArea.height/2-this._controllerSize*3/2},this._downControllerPos={x:this._controllerArea.left+this._controllerSize,y:this._controllerArea.top+this._controllerArea.height/2+this._controllerSize/2}):(this._playAreaSize={width:this._canvas.width,height:this._canvas.height},this._controllerArea={left:0,top:0,width:0,height:0},this._leftControllerPos={x:0,y:this._playAreaSize.height-2*this._controllerSizeTouch},this._rightControllerPos={x:2*this._controllerSizeTouch,y:this._playAreaSize.height-2*this._controllerSizeTouch},this._upControllerPos={x:this._controllerSizeTouch,y:this._playAreaSize.height-3*this._controllerSizeTouch},this._rightControllerPos={x:2*this._controllerSizeTouch,y:this._playAreaSize.height-2*this._controllerSizeTouch},this._downControllerPos={x:this._controllerSizeTouch,y:this._playAreaSize.height-this._controllerSizeTouch},this._pauseButtonPos={x:0,y:0},this._yButtonPos={x:this._playAreaSize.width-this._yButtonSize-10,y:this._playAreaSize.height-this._yButtonSize-10}),e){const s=this._shipObject.x/e.width;this._shipObject.x=this._playAreaSize.width*s;const r=this._shipObject.y/e.height;this._shipObject.y=this._playAreaSize.height*r,this._makeObjectFitInPlayBoundaries(this._shipObject);for(const a of this._meteors){const h=a.x/e.width;a.x=this._playAreaSize.width*h;let d=a.y/e.height;a.y=this._playAreaSize.height*d,this._makeObjectFitInPlayBoundaries(a)}const n=this._background1Y/e.height;this._background1Y=this._playAreaSize.height*n;const l=this._background2Y/e.height;this._background2Y=this._playAreaSize.height*l}this._timeX=this._playAreaSize.width-this._timeSize,this._timeY=30}_makeObjectFitInPlayBoundaries(e){e.x<this._playAreaSize.left?e.x=this._playAreaSize.left:e.x+e.size>this._playAreaSize.width&&(e.x=this._playAreaSize.width-e.size),e.y<this._playAreaSize.top?e.y=this._playAreaSize.top:e.y+e.size>this._playAreaSize.height&&(e.y=this._playAreaSize.height-e.size)}render(){return rt`
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
    `}}u(xs,"styles",K`
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
  `);customElements.define("main-application",xs);
