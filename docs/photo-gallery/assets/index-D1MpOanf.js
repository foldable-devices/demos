var jr=Object.defineProperty;var Br=(e,t,i)=>t in e?jr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var g=(e,t,i)=>(Br(e,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=globalThis,wi=pe.ShadowRoot&&(pe.ShadyCSS===void 0||pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$i=Symbol(),Ui=new WeakMap;let tr=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==$i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(wi&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=Ui.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ui.set(i,t))}return t}toString(){return this.cssText}};const Wr=e=>new tr(typeof e=="string"?e:e+"",void 0,$i),ot=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new tr(i,e,$i)},qr=(e,t)=>{if(wi)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const o=document.createElement("style"),r=pe.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}},Oi=wi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return Wr(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Kr,defineProperty:Zr,getOwnPropertyDescriptor:Xr,getOwnPropertyNames:Yr,getOwnPropertySymbols:Gr,getPrototypeOf:Jr}=Object,et=globalThis,Ni=et.trustedTypes,Qr=Ni?Ni.emptyScript:"",Te=et.reactiveElementPolyfillSupport,Xt=(e,t)=>e,me={toAttribute(e,t){switch(t){case Boolean:e=e?Qr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Si=(e,t)=>!Kr(e,t),Ii={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:Si};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),et.litPropertyMetadata??(et.litPropertyMetadata=new WeakMap);let vt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Ii){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,i);r!==void 0&&Zr(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){const{get:r,set:s}=Xr(this.prototype,t)??{get(){return this[i]},set(n){this[i]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const l=r==null?void 0:r.call(this);s.call(this,n),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ii}static _$Ei(){if(this.hasOwnProperty(Xt("elementProperties")))return;const t=Jr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Xt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xt("properties"))){const i=this.properties,o=[...Yr(i),...Gr(i)];for(const r of o)this.createProperty(r,i[r])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[o,r]of i)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const r=this._$Eu(i,o);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(Oi(r))}else t!==void 0&&i.push(Oi(t));return i}static _$Eu(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qr(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostConnected)==null?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostDisconnected)==null?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EC(t,i){var s;const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const n=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:me).toAttribute(i,o.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,i){var s;const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=o.getPropertyOptions(r),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)==null?void 0:s.fromAttribute)!==void 0?n.converter:me;this._$Em=r,this[r]=l.fromAttribute(i,n.type),this._$Em=null}}requestUpdate(t,i,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??Si)(this[t],i))return;this.P(t,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,o){this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,n]of r)n.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],n)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(o=this._$EO)==null||o.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(i)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}};vt.elementStyles=[],vt.shadowRootOptions={mode:"open"},vt[Xt("elementProperties")]=new Map,vt[Xt("finalized")]=new Map,Te==null||Te({ReactiveElement:vt}),(et.reactiveElementVersions??(et.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=globalThis,be=Yt.trustedTypes,Di=be?be.createPolicy("lit-html",{createHTML:e=>e}):void 0,er="$lit$",Q=`lit$${(Math.random()+"").slice(9)}$`,ir="?"+Q,ts=`<${ir}>`,ct=document,te=()=>ct.createComment(""),ee=e=>e===null||typeof e!="object"&&typeof e!="function",or=Array.isArray,es=e=>or(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Re=`[ 	
\f\r]`,Ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hi=/-->/g,Fi=/>/g,rt=RegExp(`>|${Re}(?:([^\\s"'>=/]+)(${Re}*=${Re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ji=/'/g,Bi=/"/g,rr=/^(?:script|style|textarea|title)$/i,is=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),j=is(1),dt=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Wi=new WeakMap,lt=ct.createTreeWalker(ct,129);function sr(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Di!==void 0?Di.createHTML(t):t}const os=(e,t)=>{const i=e.length-1,o=[];let r,s=t===2?"<svg>":"",n=Ot;for(let l=0;l<i;l++){const a=e[l];let h,d,c=-1,u=0;for(;u<a.length&&(n.lastIndex=u,d=n.exec(a),d!==null);)u=n.lastIndex,n===Ot?d[1]==="!--"?n=Hi:d[1]!==void 0?n=Fi:d[2]!==void 0?(rr.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=rt):d[3]!==void 0&&(n=rt):n===rt?d[0]===">"?(n=r??Ot,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?rt:d[3]==='"'?Bi:ji):n===Bi||n===ji?n=rt:n===Hi||n===Fi?n=Ot:(n=rt,r=void 0);const v=n===rt&&e[l+1].startsWith("/>")?" ":"";s+=n===Ot?a+ts:c>=0?(o.push(h),a.slice(0,c)+er+a.slice(c)+Q+v):a+Q+(c===-2?l:v)}return[sr(e,s+(e[i]||"<?>")+(t===2?"</svg>":"")),o]};let ri=class nr{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const l=t.length-1,a=this.parts,[h,d]=os(t,i);if(this.el=nr.createElement(h,o),lt.currentNode=this.el.content,i===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=lt.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(er)){const u=d[n++],v=r.getAttribute(c).split(Q),b=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:b[2],strings:v,ctor:b[1]==="."?ss:b[1]==="?"?ns:b[1]==="@"?as:Ee}),r.removeAttribute(c)}else c.startsWith(Q)&&(a.push({type:6,index:s}),r.removeAttribute(c));if(rr.test(r.tagName)){const c=r.textContent.split(Q),u=c.length-1;if(u>0){r.textContent=be?be.emptyScript:"";for(let v=0;v<u;v++)r.append(c[v],te()),lt.nextNode(),a.push({type:2,index:++s});r.append(c[u],te())}}}else if(r.nodeType===8)if(r.data===ir)a.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(Q,c+1))!==-1;)a.push({type:7,index:s}),c+=Q.length-1}s++}}static createElement(t,i){const o=ct.createElement("template");return o.innerHTML=t,o}};function $t(e,t,i=e,o){var n,l;if(t===dt)return t;let r=o!==void 0?(n=i._$Co)==null?void 0:n[o]:i._$Cl;const s=ee(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(e),r._$AT(e,i,o)),o!==void 0?(i._$Co??(i._$Co=[]))[o]=r:i._$Cl=r),r!==void 0&&(t=$t(e,r._$AS(e,t.values),r,o)),t}let rs=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:o}=this._$AD,r=((t==null?void 0:t.creationScope)??ct).importNode(i,!0);lt.currentNode=r;let s=lt.nextNode(),n=0,l=0,a=o[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new xi(s,s.nextSibling,this,t):a.type===1?h=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(h=new ls(s,this,t)),this._$AV.push(h),a=o[++l]}n!==(a==null?void 0:a.index)&&(s=lt.nextNode(),n++)}return lt.currentNode=ct,r}p(t){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}},xi=class ar{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,o,r){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=$t(this,t,i),ee(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==dt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):es(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==L&&ee(this._$AH)?this._$AA.nextSibling.data=t:this.T(ct.createTextNode(t)),this._$AH=t}$(t){var s;const{values:i,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ri.createElement(sr(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(i);else{const n=new rs(r,this),l=n.u(this.options);n.p(i),this.T(l),this._$AH=n}}_$AC(t){let i=Wi.get(t.strings);return i===void 0&&Wi.set(t.strings,i=new ri(t)),i}k(t){or(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new ar(this.S(te()),this.S(te()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}},Ee=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,o,r,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=L}_$AI(t,i=this,o,r){const s=this.strings;let n=!1;if(s===void 0)t=$t(this,t,i,0),n=!ee(t)||t!==this._$AH&&t!==dt,n&&(this._$AH=t);else{const l=t;let a,h;for(t=s[0],a=0;a<s.length-1;a++)h=$t(this,l[o+a],i,a),h===dt&&(h=this._$AH[a]),n||(n=!ee(h)||h!==this._$AH[a]),h===L?t=L:t!==L&&(t+=(h??"")+s[a+1]),this._$AH[a]=h}n&&!r&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ss=class extends Ee{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}},ns=class extends Ee{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}},as=class extends Ee{constructor(t,i,o,r,s){super(t,i,o,r,s),this.type=5}_$AI(t,i=this){if((t=$t(this,t,i,0)??L)===dt)return;const o=this._$AH,r=t===L&&o!==L||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==L&&(o===L||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}},ls=class{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){$t(this,t)}};const Ve=Yt.litHtmlPolyfillSupport;Ve==null||Ve(ri,xi),(Yt.litHtmlVersions??(Yt.litHtmlVersions=[])).push("3.1.2");const hs=(e,t,i)=>{const o=(i==null?void 0:i.renderBefore)??t;let r=o._$litPart$;if(r===void 0){const s=(i==null?void 0:i.renderBefore)??null;o._$litPart$=r=new xi(t.insertBefore(te(),s),s,void 0,i??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ht=class extends vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=hs(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return dt}};var Qo;ht._$litElement$=!0,ht.finalized=!0,(Qo=globalThis.litElementHydrateSupport)==null||Qo.call(globalThis,{LitElement:ht});const Le=globalThis.litElementPolyfillSupport;Le==null||Le({LitElement:ht});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ds=e=>(...t)=>({_$litDirective$:e,values:t});let us=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=ds(class extends us{constructor(e){var t;if(super(e),e.type!==cs.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(t)}const i=e.element.classList;for(const s of this.st)s in t||(i.remove(s),this.st.delete(s));for(const s in t){const n=!!t[s];n===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(n?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return dt}});var si="";function ni(e){si=e}function ps(e=""){if(!si){const t=[...document.getElementsByTagName("script")],i=t.find(o=>o.hasAttribute("data-shoelace"));if(i)ni(i.getAttribute("data-shoelace"));else{const o=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let r="";o&&(r=o.getAttribute("src")),ni(r.split("/").slice(0,-1).join("/"))}}return si.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var vs={name:"default",resolver:e=>ps(`assets/icons/${e}.svg`)},gs=vs,qi={caret:`
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
  `},fs={name:"system",resolver:e=>e in qi?`data:image/svg+xml,${encodeURIComponent(qi[e])}`:""},ms=fs,bs=[gs,ms],ai=[];function ys(e){ai.push(e)}function _s(e){ai=ai.filter(t=>t!==e)}function Ki(e){return bs.find(t=>t.name===e)}var ws=ot`
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
`,lr=Object.defineProperty,$s=Object.defineProperties,Ss=Object.getOwnPropertyDescriptor,xs=Object.getOwnPropertyDescriptors,Zi=Object.getOwnPropertySymbols,As=Object.prototype.hasOwnProperty,Es=Object.prototype.propertyIsEnumerable,Xi=(e,t,i)=>t in e?lr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Pt=(e,t)=>{for(var i in t||(t={}))As.call(t,i)&&Xi(e,i,t[i]);if(Zi)for(var i of Zi(t))Es.call(t,i)&&Xi(e,i,t[i]);return e},Ai=(e,t)=>$s(e,xs(t)),p=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ss(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&lr(t,i,r),r};function K(e,t){const i=Pt({waitUntilFirstUpdate:!1},t);return(o,r)=>{const{update:s}=o,n=Array.isArray(e)?e:[e];o.update=function(l){n.forEach(a=>{const h=a;if(l.has(h)){const d=l.get(h),c=this[h];d!==c&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](d,c)}}),s.call(this,l)}}}var Tt=ot`
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
 */const Cs={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:Si},ks=(e=Cs,t,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,e),o==="accessor"){const{name:n}=i;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,e)},init(l){return l!==void 0&&this.P(n,void 0,e),l}}}if(o==="setter"){const{name:n}=i;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,e)}}throw Error("Unsupported decorator location: "+o)};function m(e){return(t,i)=>typeof i=="object"?ks(e,t,i):((o,r,s)=>{const n=r.hasOwnProperty(s);return r.constructor.createProperty(s,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(e){return m({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zs(e){return(t,i)=>{const o=typeof t=="function"?t:t[i];Object.assign(o,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yi=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ae(e,t){return(i,o,r)=>{const s=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(e))??null};if(t){const{get:n,set:l}=typeof o=="object"?i:r??(()=>{const a=Symbol();return{get(){return this[a]},set(h){this[a]=h}}})();return Yi(i,o,{get(){let a=n.call(this);return a===void 0&&(a=s(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return Yi(i,o,{get(){return s(this)}})}}var Z=class extends ht{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const i=new CustomEvent(e,Pt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const o=customElements.get(e);if(!o){customElements.define(e,class extends t{},i);return}let r=" (unknown version)",s=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in o&&o.version&&(s=" v"+o.version),!(r&&s&&r===s)&&console.warn(`Attempted to register <${e}>${r}, but <${e}>${s} has already been registered.`)}};Z.version="2.15.0";Z.dependencies={};p([m()],Z.prototype,"dir",2);p([m()],Z.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ps=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t;var Nt=Symbol(),he=Symbol(),Me,Ue=new Map,W=class extends Z{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let o;if(t!=null&&t.spriteSheet){this.svg=j`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const r=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(r),this.svg}try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?Nt:he}catch{return he}try{const r=document.createElement("div");r.innerHTML=await o.text();const s=r.firstElementChild;if(((i=s==null?void 0:s.tagName)==null?void 0:i.toLowerCase())!=="svg")return Nt;Me||(Me=new DOMParser);const l=Me.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Nt}catch{return Nt}}connectedCallback(){super.connectedCallback(),ys(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),_s(this)}getIconSource(){const e=Ki(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:i}=this.getIconSource(),o=i?Ki(this.library):void 0;if(!t){this.svg=null;return}let r=Ue.get(t);if(r||(r=this.resolveIcon(t,o),Ue.set(t,r)),!this.initialRender)return;const s=await r;if(s===he&&Ue.delete(t),t===this.getIconSource().url){if(Ps(s)){this.svg=s;return}switch(s){case he:case Nt:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(e=o==null?void 0:o.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};W.styles=[Tt,ws];p([ut()],W.prototype,"svg",2);p([m({reflect:!0})],W.prototype,"name",2);p([m()],W.prototype,"src",2);p([m()],W.prototype,"label",2);p([m({reflect:!0})],W.prototype,"library",2);p([K("label")],W.prototype,"handleLabelChange",1);p([K(["name","src","library"])],W.prototype,"setIcon",1);W.define("sl-icon");var Ts=ot`
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
 */const hr=Symbol.for(""),Rs=e=>{if((e==null?void 0:e.r)===hr)return e==null?void 0:e._$litStatic$},ye=(e,...t)=>({_$litStatic$:t.reduce((i,o,r)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[r+1],e[0]),r:hr}),Gi=new Map,Vs=e=>(t,...i)=>{const o=i.length;let r,s;const n=[],l=[];let a,h=0,d=!1;for(;h<o;){for(a=t[h];h<o&&(s=i[h],(r=Rs(s))!==void 0);)a+=r+t[++h],d=!0;h!==o&&l.push(s),n.push(a),h++}if(h===o&&n.push(t[o]),d){const c=n.join("$$lit$$");(t=Gi.get(c))===void 0&&(n.raw=n,Gi.set(c,t=n)),i=l}return e(t,...i)},ve=Vs(j);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=e=>e??L;var B=class extends Z{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?ye`a`:ye`button`;return ve`
      <${t}
        part="base"
        class=${tt({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${V(e?void 0:this.disabled)}
        type=${V(e?void 0:"button")}
        href=${V(e?this.href:void 0)}
        target=${V(e?this.target:void 0)}
        download=${V(e?this.download:void 0)}
        rel=${V(e&&this.target?"noreferrer noopener":void 0)}
        role=${V(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${V(this.name)}
          library=${V(this.library)}
          src=${V(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};B.styles=[Tt,Ts];B.dependencies={"sl-icon":W};p([ae(".icon-button")],B.prototype,"button",2);p([ut()],B.prototype,"hasFocus",2);p([m()],B.prototype,"name",2);p([m()],B.prototype,"library",2);p([m()],B.prototype,"src",2);p([m()],B.prototype,"href",2);p([m()],B.prototype,"target",2);p([m()],B.prototype,"download",2);p([m()],B.prototype,"label",2);p([m({type:Boolean,reflect:!0})],B.prototype,"disabled",2);var cr=new Map,Ls=new WeakMap;function Ms(e){return e??{keyframes:[],options:{duration:0}}}function Ji(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function dr(e,t){cr.set(e,Ms(t))}function Qi(e,t,i){const o=Ls.get(e);if(o!=null&&o[t])return Ji(o[t],i.dir);const r=cr.get(t);return r?Ji(r,i.dir):{keyframes:[],options:{duration:0}}}function li(e,t){return new Promise(i=>{function o(r){r.target===e&&(e.removeEventListener(t,o),i())}e.addEventListener(t,o)})}function to(e,t,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,Ai(Pt({},i),{duration:hi()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function hi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function eo(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{t.cancel(),requestAnimationFrame(i)})))}const ci=new Set,Us=new MutationObserver(gr),mt=new Map;let ur=document.documentElement.dir||"ltr",pr=document.documentElement.lang||navigator.language,at;Us.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function vr(...e){e.map(t=>{const i=t.$code.toLowerCase();mt.has(i)?mt.set(i,Object.assign(Object.assign({},mt.get(i)),t)):mt.set(i,t),at||(at=t)}),gr()}function gr(){ur=document.documentElement.dir||"ltr",pr=document.documentElement.lang||navigator.language,[...ci.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Os=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ci.add(this.host)}hostDisconnected(){ci.delete(this.host)}dir(){return`${this.host.dir||ur}`.toLowerCase()}lang(){return`${this.host.lang||pr}`.toLowerCase()}getTranslationData(t){var i,o;const r=new Intl.Locale(t.replace(/_/g,"-")),s=r==null?void 0:r.language.toLowerCase(),n=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",l=mt.get(`${s}-${n}`),a=mt.get(s);return{locale:r,language:s,region:n,primary:l,secondary:a}}exists(t,i){var o;const{primary:r,secondary:s}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[t]||s&&s[t]||i.includeFallback&&at&&at[t])}term(t,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(r&&r[t])s=r[t];else if(at&&at[t])s=at[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...i):s}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,i)}};var fr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};vr(fr);var Ns=fr,Ce=class extends Os{};vr(Ns);var mr=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Is=ot`
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
`,pt=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),X=class extends Z{constructor(){super(...arguments),this.hasSlotController=new mr(this,"icon","suffix"),this.localize=new Ce(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await eo(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=Qi(this,"alert.show",{dir:this.localize.dir()});await to(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await eo(this.base);const{keyframes:e,options:t}=Qi(this,"alert.hide",{dir:this.localize.dir()});await to(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,li(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,li(this,"sl-after-hide")}async toast(){return new Promise(e=>{pt.parentElement===null&&document.body.append(pt),pt.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{pt.removeChild(this),e(),pt.querySelector("sl-alert")===null&&pt.remove()},{once:!0})})}render(){return j`
      <div
        part="base"
        class=${tt({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?j`
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
    `}};X.styles=[Tt,Is];X.dependencies={"sl-icon-button":B};p([ae('[part~="base"]')],X.prototype,"base",2);p([m({type:Boolean,reflect:!0})],X.prototype,"open",2);p([m({type:Boolean,reflect:!0})],X.prototype,"closable",2);p([m({reflect:!0})],X.prototype,"variant",2);p([m({type:Number})],X.prototype,"duration",2);p([K("open",{waitUntilFirstUpdate:!0})],X.prototype,"handleOpenChange",1);p([K("duration")],X.prototype,"handleDurationChange",1);dr("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});dr("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});X.define("sl-alert");var Ds=ot`
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
`,Ei=class extends Z{constructor(){super(...arguments),this.localize=new Ce(this)}render(){return j`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ei.styles=[Tt,Ds];var It=new WeakMap,Dt=new WeakMap,Ht=new WeakMap,Oe=new WeakSet,ce=new WeakMap,Hs=class{constructor(e,t){this.handleFormData=i=>{const o=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof r=="string"&&r.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(l=>{i.formData.append(r,l.toString())}):i.formData.append(r,s.toString()))},this.handleFormSubmit=i=>{var o;const r=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=It.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!s(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ce.set(this.host,[])},this.handleInteraction=i=>{const o=ce.get(this.host);o.includes(i.type)||o.push(i.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Pt({form:i=>{const o=i.form;if(o){const s=i.getRootNode().querySelector(`#${o}`);if(s)return s}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null?o:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,o)=>i.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),ce.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ce.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,It.has(this.form)?It.get(this.form).add(this.host):It.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Dt.has(this.form)||(Dt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ht.has(this.form)||(Ht.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=It.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Dt.has(this.form)&&(this.form.reportValidity=Dt.get(this.form),Dt.delete(this.form)),Ht.has(this.form)&&(this.form.checkValidity=Ht.get(this.form),Ht.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Oe.add(e):Oe.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&i.setAttribute(o,t.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,i=!!Oe.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Ci=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Ai(Pt({},Ci),{valid:!1,valueMissing:!0}));Object.freeze(Ai(Pt({},Ci),{valid:!1,customError:!0}));var Fs=ot`
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
`,$=class extends Z{constructor(){super(...arguments),this.formControlController=new Hs(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new mr(this,"[default]","prefix","suffix"),this.localize=new Ce(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ci}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?ye`a`:ye`button`;return ve`
      <${t}
        part="base"
        class=${tt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${V(e?void 0:this.disabled)}
        type=${V(e?void 0:this.type)}
        title=${this.title}
        name=${V(e?void 0:this.name)}
        value=${V(e?void 0:this.value)}
        href=${V(e?this.href:void 0)}
        target=${V(e?this.target:void 0)}
        download=${V(e?this.download:void 0)}
        rel=${V(e?this.rel:void 0)}
        role=${V(e?void 0:"button")}
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
        ${this.caret?ve` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ve`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};$.styles=[Tt,Fs];$.dependencies={"sl-icon":W,"sl-spinner":Ei};p([ae(".button")],$.prototype,"button",2);p([ut()],$.prototype,"hasFocus",2);p([ut()],$.prototype,"invalid",2);p([m()],$.prototype,"title",2);p([m({reflect:!0})],$.prototype,"variant",2);p([m({reflect:!0})],$.prototype,"size",2);p([m({type:Boolean,reflect:!0})],$.prototype,"caret",2);p([m({type:Boolean,reflect:!0})],$.prototype,"disabled",2);p([m({type:Boolean,reflect:!0})],$.prototype,"loading",2);p([m({type:Boolean,reflect:!0})],$.prototype,"outline",2);p([m({type:Boolean,reflect:!0})],$.prototype,"pill",2);p([m({type:Boolean,reflect:!0})],$.prototype,"circle",2);p([m()],$.prototype,"type",2);p([m()],$.prototype,"name",2);p([m()],$.prototype,"value",2);p([m()],$.prototype,"href",2);p([m()],$.prototype,"target",2);p([m()],$.prototype,"rel",2);p([m()],$.prototype,"download",2);p([m()],$.prototype,"form",2);p([m({attribute:"formaction"})],$.prototype,"formAction",2);p([m({attribute:"formenctype"})],$.prototype,"formEnctype",2);p([m({attribute:"formmethod"})],$.prototype,"formMethod",2);p([m({attribute:"formnovalidate",type:Boolean})],$.prototype,"formNoValidate",2);p([m({attribute:"formtarget"})],$.prototype,"formTarget",2);p([K("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);$.define("sl-button");function io(e,t,i){const o=r=>Object.is(r,-0)?0:r;return e<t?o(t):e>i?o(i):o(e)}var js=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Bs=ot`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ws(e,t){if(e!==void 0){let i=0;for(const o of e)yield t(o,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*qs(e,t,i=1){const o=t===void 0?0:e;t??(t=e);for(let r=o;i>0?r<t:t<r;r+=i)yield r}var Ks=(e,t)=>{let i=0;return function(...o){window.clearTimeout(i),i=window.setTimeout(()=>{e.call(this,...o)},t)}},oo=(e,t,i)=>{const o=e[t];e[t]=function(...r){o.call(this,...r),i.call(this,o,...r)}},Zs="onscrollend"in window;if(!Zs){const e=new Set,t=new WeakMap,i=r=>{for(const s of r.changedTouches)e.add(s.identifier)},o=r=>{for(const s of r.changedTouches)e.delete(s.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),oo(EventTarget.prototype,"addEventListener",function(r,s){if(s!=="scrollend")return;const n=Ks(()=>{e.size?n():this.dispatchEvent(new Event("scrollend"))},100);r.call(this,"scroll",n,{passive:!0}),t.set(this,n)}),oo(EventTarget.prototype,"removeEventListener",function(r,s){if(s!=="scrollend")return;const n=t.get(this);n&&r.call(this,"scroll",n,{passive:!0})})}var z=class extends Z{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new js(this,()=>this.next()),this.localize=new Ce(this),this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const o=e.scrollLeft,r=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==o||i!==r)&&(e.scrollTo({left:o,top:r,behavior:hi()?"auto":"smooth"}),await li(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(i=>[...i.addedNodes,...i.removedNodes].some(o=>this.isCarouselItem(o)&&!o.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:i,loop:o}=this,r=o?e/i:(e-t)/i+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,i=this.localize.dir()==="rtl",o=t.closest('[part~="pagination-item"]')!==null,r=e.key==="ArrowDown"||!i&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft",s=e.key==="ArrowUp"||!i&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight";e.preventDefault(),s&&this.previous(),r&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{var n;const l=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const o of t){const r=o.target;r.toggleAttribute("inert",!o.isIntersecting),r.classList.toggle("--in-view",o.isIntersecting),r.setAttribute("aria-hidden",o.isIntersecting?"false":"true")}const i=t.find(o=>o.isIntersecting);if(i)if(this.loop&&i.target.hasAttribute("data-clone")){const o=Number(i.target.getAttribute("data-clone"));this.goToSlide(o,"instant")}else{const r=this.getSlides().indexOf(i.target);this.activeSlide=Math.ceil(r/this.slidesPerMove)*this.slidesPerMove}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1)}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.synchronizeSlides(),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,i=e.slice(-t),o=e.slice(0,t);i.reverse().forEach((r,s)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(e.length-s-1)),this.prepend(n)}),o.forEach((r,s)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(s)),this.append(n)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,i)=>{t.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((i,o)=>{(o+t)%t===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:i,loop:o}=this,r=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!r.length)return;const n=o?(e+r.length)%r.length:io(e,0,r.length-1);this.activeSlide=n;const l=io(e+(o?i:0),0,s.length-1),a=s[l];this.scrollToSlide(a,hi()?"auto":t)}scrollToSlide(e,t="smooth"){const i=this.scrollContainer,o=i.getBoundingClientRect(),r=e.getBoundingClientRect(),s=r.left-o.left,n=r.top-o.top;i.scrollTo({left:s+i.scrollLeft,top:n+i.scrollTop,behavior:t})}render(){const{slidesPerMove:e,scrolling:t}=this,i=this.getPageCount(),o=this.getCurrentPage(),r=this.canScrollPrev(),s=this.canScrollNext(),n=this.localize.dir()==="ltr";return j`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${tt({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?j`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${tt({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${tt({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!s})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?j`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Ws(qs(i),l=>{const a=l===o;return j`
                    <button
                      part="pagination-item ${a?"pagination-item--active":""}"
                      class="${tt({"carousel__pagination-item":!0,"carousel__pagination-item--active":a})}"
                      role="tab"
                      aria-selected="${a?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,i)}"
                      tabindex=${a?"0":"-1"}
                      @click=${()=>this.goToSlide(l*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};z.styles=[Tt,Bs];z.dependencies={"sl-icon":W};p([m({type:Boolean,reflect:!0})],z.prototype,"loop",2);p([m({type:Boolean,reflect:!0})],z.prototype,"navigation",2);p([m({type:Boolean,reflect:!0})],z.prototype,"pagination",2);p([m({type:Boolean,reflect:!0})],z.prototype,"autoplay",2);p([m({type:Number,attribute:"autoplay-interval"})],z.prototype,"autoplayInterval",2);p([m({type:Number,attribute:"slides-per-page"})],z.prototype,"slidesPerPage",2);p([m({type:Number,attribute:"slides-per-move"})],z.prototype,"slidesPerMove",2);p([m()],z.prototype,"orientation",2);p([m({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],z.prototype,"mouseDragging",2);p([ae(".carousel__slides")],z.prototype,"scrollContainer",2);p([ae(".carousel__pagination")],z.prototype,"paginationContainer",2);p([ut()],z.prototype,"activeSlide",2);p([ut()],z.prototype,"scrolling",2);p([ut()],z.prototype,"dragging",2);p([zs({passive:!0})],z.prototype,"handleScroll",1);p([K("loop",{waitUntilFirstUpdate:!0}),K("slidesPerPage",{waitUntilFirstUpdate:!0})],z.prototype,"initializeSlides",1);p([K("activeSlide")],z.prototype,"handelSlideChange",1);p([K("slidesPerMove")],z.prototype,"updateSlidesSnap",1);p([K("autoplay")],z.prototype,"handleAutoplayChange",1);z.define("sl-carousel");Ei.define("sl-spinner");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=window,ki=ge.ShadowRoot&&(ge.ShadyCSS===void 0||ge.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zi=Symbol(),ro=new WeakMap;let br=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==zi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(ki&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=ro.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&ro.set(i,t))}return t}toString(){return this.cssText}};const yr=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new br(i,e,zi)},so=ki?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return(o=>new br(typeof o=="string"?o:o+"",void 0,zi))(i)})(e):e;var Ne;const _e=window,no=_e.trustedTypes,Xs=no?no.emptyScript:"",ao=_e.reactiveElementPolyfillSupport,di={toAttribute(e,t){switch(t){case Boolean:e=e?Xs:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},_r=(e,t)=>t!==e&&(t==t||e==e),Ie={attribute:!0,type:String,converter:di,reflect:!1,hasChanged:_r};let gt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,o)=>{const r=this._$Ep(o,i);r!==void 0&&(this._$Ev.set(r,o),t.push(r))}),t}static createProperty(t,i=Ie){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,i);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){return{get(){return this[i]},set(r){const s=this[t];this[i]=r,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ie}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,o=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const r of o)this.createProperty(r,i[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(so(r))}else t!==void 0&&i.push(so(t));return i}static _$Ep(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,o;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((o,r)=>{ki?o.adoptedStyleSheets=r.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):r.forEach(s=>{const n=document.createElement("style"),l=ge.litNonce;l!==void 0&&n.setAttribute("nonce",l),n.textContent=s.cssText,o.appendChild(n)})})(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostConnected)===null||o===void 0?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostDisconnected)===null||o===void 0?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EO(t,i,o=Ie){var r;const s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){const n=(((r=o.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?o.converter:di).toAttribute(i,o.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,i){var o;const r=this.constructor,s=r._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=r.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:di;this._$El=s,this[s]=l.fromAttribute(i,n.type),this._$El=null}}requestUpdate(t,i,o){let r=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||_r)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let i=!1;const o=this._$AL;try{i=this.shouldUpdate(o),i?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(o)):this._$Ek()}catch(r){throw i=!1,this._$Ek(),r}i&&this._$AE(o)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(o=>{var r;return(r=o.hostUpdated)===null||r===void 0?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,o)=>this._$EO(o,this[o],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De;gt.finalized=!0,gt.elementProperties=new Map,gt.elementStyles=[],gt.shadowRootOptions={mode:"open"},ao==null||ao({ReactiveElement:gt}),((Ne=_e.reactiveElementVersions)!==null&&Ne!==void 0?Ne:_e.reactiveElementVersions=[]).push("1.6.1");const we=window,St=we.trustedTypes,lo=St?St.createPolicy("lit-html",{createHTML:e=>e}):void 0,G=`lit$${(Math.random()+"").slice(9)}$`,wr="?"+G,Ys=`<${wr}>`,xt=document,ie=(e="")=>xt.createComment(e),oe=e=>e===null||typeof e!="object"&&typeof e!="function",ho=Array.isArray,Ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,co=/-->/g,uo=/>/g,st=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),po=/'/g,vo=/"/g,go=/^(?:script|style|textarea|title)$/i,Rt=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),At=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),fo=new WeakMap,yt=xt.createTreeWalker(xt,129,null,!1);let ui=class $r{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const l=t.length-1,a=this.parts,[h,d]=((c,u)=>{const v=c.length-1,b=[];let w,f=u===2?"<svg>":"",y=Ft;for(let k=0;k<v;k++){const H=c[k];let A,S,P=-1,x=0;for(;x<H.length&&(y.lastIndex=x,S=y.exec(H),S!==null);)x=y.lastIndex,y===Ft?S[1]==="!--"?y=co:S[1]!==void 0?y=uo:S[2]!==void 0?(go.test(S[2])&&(w=RegExp("</"+S[2],"g")),y=st):S[3]!==void 0&&(y=st):y===st?S[0]===">"?(y=w??Ft,P=-1):S[1]===void 0?P=-2:(P=y.lastIndex-S[2].length,A=S[1],y=S[3]===void 0?st:S[3]==='"'?vo:po):y===vo||y===po?y=st:y===co||y===uo?y=Ft:(y=st,w=void 0);const le=y===st&&c[k+1].startsWith("/>")?" ":"";f+=y===Ft?H+Ys:P>=0?(b.push(A),H.slice(0,P)+"$lit$"+H.slice(P)+G+le):H+G+(P===-2?(b.push(void 0),k):le)}const T=f+(c[v]||"<?>")+(u===2?"</svg>":"");if(!Array.isArray(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return[lo!==void 0?lo.createHTML(T):T,b]})(t,i);if(this.el=$r.createElement(h,o),yt.currentNode=this.el.content,i===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(r=yt.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(G)){const v=d[n++];if(c.push(u),v!==void 0){const b=r.getAttribute(v.toLowerCase()+"$lit$").split(G),w=/([.?@])?(.*)/.exec(v);a.push({type:1,index:s,name:w[2],strings:b,ctor:w[1]==="."?Gs:w[1]==="?"?Qs:w[1]==="@"?tn:ke})}else a.push({type:6,index:s})}for(const u of c)r.removeAttribute(u)}if(go.test(r.tagName)){const c=r.textContent.split(G),u=c.length-1;if(u>0){r.textContent=St?St.emptyScript:"";for(let v=0;v<u;v++)r.append(c[v],ie()),yt.nextNode(),a.push({type:2,index:++s});r.append(c[u],ie())}}}else if(r.nodeType===8)if(r.data===wr)a.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(G,c+1))!==-1;)a.push({type:7,index:s}),c+=G.length-1}s++}}static createElement(t,i){const o=xt.createElement("template");return o.innerHTML=t,o}};function Et(e,t,i=e,o){var r,s,n,l;if(t===At)return t;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const h=oe(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),h===void 0?a=void 0:(a=new h(e),a._$AT(e,i,o)),o!==void 0?((n=(l=i)._$Co)!==null&&n!==void 0?n:l._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=Et(e,a._$AS(e,t.values),a,o)),t}let Pi=class Sr{constructor(t,i,o,r){var s;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cm=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Et(this,t,i),oe(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==At&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(o=>ho(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function")(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==M&&oe(this._$AH)?this._$AA.nextSibling.data=t:this.T(xt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:o,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ui.createElement(r.h,this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(o);else{const n=new class{constructor(a,h){this.u=[],this._$AN=void 0,this._$AD=a,this._$AM=h}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(a){var h;const{el:{content:d},parts:c}=this._$AD,u=((h=a==null?void 0:a.creationScope)!==null&&h!==void 0?h:xt).importNode(d,!0);yt.currentNode=u;let v=yt.nextNode(),b=0,w=0,f=c[0];for(;f!==void 0;){if(b===f.index){let y;f.type===2?y=new Pi(v,v.nextSibling,this,a):f.type===1?y=new f.ctor(v,f.name,f.strings,this,a):f.type===6&&(y=new en(v,this,a)),this.u.push(y),f=c[++w]}b!==(f==null?void 0:f.index)&&(v=yt.nextNode(),b++)}return u}p(a){let h=0;for(const d of this.u)d!==void 0&&(d.strings!==void 0?(d._$AI(a,d,h),h+=d.strings.length-2):d._$AI(a[h])),h++}}(s,this),l=n.v(this.options);n.p(o),this.T(l),this._$AH=n}}_$AC(t){let i=fo.get(t.strings);return i===void 0&&fo.set(t.strings,i=new ui(t)),i}k(t){ho(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new Sr(this.O(ie()),this.O(ie()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},ke=class{constructor(e,t,i,o,r){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=Et(this,e,t,0),s=!oe(e)||e!==this._$AH&&e!==At,s&&(this._$AH=e);else{const n=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=Et(this,n[i+l],t,l),a===At&&(a=this._$AH[l]),s||(s=!oe(a)||a!==this._$AH[l]),a===M?e=M:e!==M&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}s&&!o&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Gs=class extends ke{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}};const Js=St?St.emptyScript:"";let Qs=class extends ke{constructor(){super(...arguments),this.type=4}j(e){e&&e!==M?this.element.setAttribute(this.name,Js):this.element.removeAttribute(this.name)}},tn=class extends ke{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Et(this,e,t,0))!==null&&i!==void 0?i:M)===At)return;const o=this._$AH,r=e===M&&o!==M||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==M&&(o===M||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},en=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Et(this,e)}};const mo=we.litHtmlPolyfillSupport;mo==null||mo(ui,Pi),((De=we.litHtmlVersions)!==null&&De!==void 0?De:we.litHtmlVersions=[]).push("2.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var He,Fe;let _t=class extends gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((i,o,r)=>{var s,n;const l=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:o;let a=l._$litPart$;if(a===void 0){const h=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=a=new Pi(o.insertBefore(ie(),h),h,void 0,r??{})}return a._$AI(i),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return At}};_t.finalized=!0,_t._$litElement$=!0,(He=globalThis.litElementHydrateSupport)===null||He===void 0||He.call(globalThis,{LitElement:_t});const bo=globalThis.litElementPolyfillSupport;bo==null||bo({LitElement:_t}),((Fe=globalThis.litElementVersions)!==null&&Fe!==void 0?Fe:globalThis.litElementVersions=[]).push("3.2.2");var je,Be,fe=window,Ti=fe.ShadowRoot&&(fe.ShadyCSS===void 0||fe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ri=Symbol(),yo=new WeakMap,xr=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ri)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ti&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=yo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&yo.set(t,e))}return e}toString(){return this.cssText}},We=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new xr(i,e,Ri)},_o=Ti?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return(o=>new xr(typeof o=="string"?o:o+"",void 0,Ri))(i)})(e):e,$e=window,wo=$e.trustedTypes,on=wo?wo.emptyScript:"",$o=$e.reactiveElementPolyfillSupport,re={toAttribute(e,t){switch(t){case Boolean:e=e?on:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Ar=(e,t)=>t!==e&&(t==t||e==e),qe={attribute:!0,type:String,converter:re,reflect:!1,hasChanged:Ar},ft=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=qe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||qe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(_o(o))}else e!==void 0&&t.push(_o(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{Ti?i.adoptedStyleSheets=o.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):o.forEach(r=>{const s=document.createElement("style"),n=fe.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,i.appendChild(s)})})(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=qe){var o;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:re).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,r=o._$Ev.get(e);if(r!==void 0&&this._$El!==r){const s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:re;this._$El=r,this[r]=n.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ar)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ft.finalized=!0,ft.elementProperties=new Map,ft.elementStyles=[],ft.shadowRootOptions={mode:"open"},$o==null||$o({ReactiveElement:ft}),((je=$e.reactiveElementVersions)!==null&&je!==void 0?je:$e.reactiveElementVersions=[]).push("1.6.1");var So,Se=window,Ct=Se.trustedTypes,xo=Ct?Ct.createPolicy("lit-html",{createHTML:e=>e}):void 0,J=`lit$${(Math.random()+"").slice(9)}$`,Er="?"+J,rn=`<${Er}>`,kt=document,se=(e="")=>kt.createComment(e),ne=e=>e===null||typeof e!="object"&&typeof e!="function",Ao=Array.isArray,jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Eo=/-->/g,Co=/>/g,nt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ko=/'/g,zo=/"/g,Po=/^(?:script|style|textarea|title)$/i,To=(So=1,(e,...t)=>({_$litType$:So,strings:e,values:t})),q=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Ro=new WeakMap,wt=kt.createTreeWalker(kt,129,null,!1),xe=class{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0;const n=e.length-1,l=this.parts,[a,h]=((d,c)=>{const u=d.length-1,v=[];let b,w=c===2?"<svg>":"",f=jt;for(let T=0;T<u;T++){const k=d[T];let H,A,S=-1,P=0;for(;P<k.length&&(f.lastIndex=P,A=f.exec(k),A!==null);)P=f.lastIndex,f===jt?A[1]==="!--"?f=Eo:A[1]!==void 0?f=Co:A[2]!==void 0?(Po.test(A[2])&&(b=RegExp("</"+A[2],"g")),f=nt):A[3]!==void 0&&(f=nt):f===nt?A[0]===">"?(f=b??jt,S=-1):A[1]===void 0?S=-2:(S=f.lastIndex-A[2].length,H=A[1],f=A[3]===void 0?nt:A[3]==='"'?zo:ko):f===zo||f===ko?f=nt:f===Eo||f===Co?f=jt:(f=nt,b=void 0);const x=f===nt&&d[T+1].startsWith("/>")?" ":"";w+=f===jt?k+rn:S>=0?(v.push(H),k.slice(0,S)+"$lit$"+k.slice(S)+J+x):k+J+(S===-2?(v.push(void 0),T):x)}const y=w+(d[u]||"<?>")+(c===2?"</svg>":"");if(!Array.isArray(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return[xo!==void 0?xo.createHTML(y):y,v]})(e,t);if(this.el=xe.createElement(a,i),wt.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(o=wt.nextNode())!==null&&l.length<n;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const c of o.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(J)){const u=h[s++];if(d.push(c),u!==void 0){const v=o.getAttribute(u.toLowerCase()+"$lit$").split(J),b=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:b[2],strings:v,ctor:b[1]==="."?sn:b[1]==="?"?an:b[1]==="@"?ln:ze})}else l.push({type:6,index:r})}for(const c of d)o.removeAttribute(c)}if(Po.test(o.tagName)){const d=o.textContent.split(J),c=d.length-1;if(c>0){o.textContent=Ct?Ct.emptyScript:"";for(let u=0;u<c;u++)o.append(d[u],se()),wt.nextNode(),l.push({type:2,index:++r});o.append(d[c],se())}}}else if(o.nodeType===8)if(o.data===Er)l.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(J,d+1))!==-1;)l.push({type:7,index:r}),d+=J.length-1}r++}}static createElement(e,t){const i=kt.createElement("template");return i.innerHTML=e,i}};function zt(e,t,i=e,o){var r,s,n,l;if(t===q)return t;let a=o!==void 0?(r=i._$Co)===null||r===void 0?void 0:r[o]:i._$Cl;const h=ne(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),h===void 0?a=void 0:(a=new h(e),a._$AT(e,i,o)),o!==void 0?((n=(l=i)._$Co)!==null&&n!==void 0?n:l._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=zt(e,a._$AS(e,t.values),a,o)),t}var Ae=class{constructor(e,t,i,o){var r;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cm=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=zt(this,e,t),ne(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==q&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):(i=>Ao(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function")(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==R&&ne(this._$AH)?this._$AA.nextSibling.data=e:this.T(kt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=xe.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.p(i);else{const s=new class{constructor(l,a){this.u=[],this._$AN=void 0,this._$AD=l,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(l){var a;const{el:{content:h},parts:d}=this._$AD,c=((a=l==null?void 0:l.creationScope)!==null&&a!==void 0?a:kt).importNode(h,!0);wt.currentNode=c;let u=wt.nextNode(),v=0,b=0,w=d[0];for(;w!==void 0;){if(v===w.index){let f;w.type===2?f=new Ae(u,u.nextSibling,this,l):w.type===1?f=new w.ctor(u,w.name,w.strings,this,l):w.type===6&&(f=new hn(u,this,l)),this.u.push(f),w=d[++b]}v!==(w==null?void 0:w.index)&&(u=wt.nextNode(),v++)}return c}p(l){let a=0;for(const h of this.u)h!==void 0&&(h.strings!==void 0?(h._$AI(l,h,a),a+=h.strings.length-2):h._$AI(l[a])),a++}}(r,this),n=s.v(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(e){let t=Ro.get(e.strings);return t===void 0&&Ro.set(e.strings,t=new xe(e)),t}k(e){Ao(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new Ae(this.O(se()),this.O(se()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ze=class{constructor(e,t,i,o,r){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=zt(this,e,t,0),s=!ne(e)||e!==this._$AH&&e!==q,s&&(this._$AH=e);else{const n=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=zt(this,n[i+l],t,l),a===q&&(a=this._$AH[l]),s||(s=!ne(a)||a!==this._$AH[l]),a===R?e=R:e!==R&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}s&&!o&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},sn=class extends ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}},nn=Ct?Ct.emptyScript:"",an=class extends ze{constructor(){super(...arguments),this.type=4}j(e){e&&e!==R?this.element.setAttribute(this.name,nn):this.element.removeAttribute(this.name)}},ln=class extends ze{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=zt(this,e,t,0))!==null&&i!==void 0?i:R)===q)return;const o=this._$AH,r=e===R&&o!==R||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==R&&(o===R||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},hn=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){zt(this,e)}},Vo=Se.litHtmlPolyfillSupport;Vo==null||Vo(xe,Ae),((Be=Se.litHtmlVersions)!==null&&Be!==void 0?Be:Se.litHtmlVersions=[]).push("2.6.1");var Ke,Ze,Gt=class extends ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((i,o,r)=>{var s,n;const l=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:o;let a=l._$litPart$;if(a===void 0){const h=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=a=new Ae(o.insertBefore(se(),h),h,void 0,r??{})}return a._$AI(i),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return q}};Gt.finalized=!0,Gt._$litElement$=!0,(Ke=globalThis.litElementHydrateSupport)===null||Ke===void 0||Ke.call(globalThis,{LitElement:Gt});var Lo=globalThis.litElementPolyfillSupport;Lo==null||Lo({LitElement:Gt}),((Ze=globalThis.litElementVersions)!==null&&Ze!==void 0?Ze:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var Jt,cn=We`
  ${We`
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
  ${We`
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
`,pi=1,Mo=3,Uo=4,Cr=e=>(...t)=>({_$litDirective$:e,values:t}),kr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},dn={},un=Cr(class extends kr{constructor(e){if(super(e),e.type!==Mo&&e.type!==pi&&e.type!==Uo)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>t.strings===void 0)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===q||t===R)return t;const i=e.element,o=e.name;if(e.type===Mo){if(t===i[o])return q}else if(e.type===Uo){if(!!t===i.hasAttribute(o))return q}else if(e.type===pi&&i.getAttribute(o)===t+"")return q;return((r,s=dn)=>{r._$AH=s})(e),t}}),zr=Object.defineProperty,pn=Object.defineProperties,vn=Object.getOwnPropertyDescriptor,gn=Object.getOwnPropertyDescriptors,Oo=Object.getOwnPropertySymbols,fn=Object.prototype.hasOwnProperty,mn=Object.prototype.propertyIsEnumerable,No=(e,t,i)=>t in e?zr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Vt=(e,t)=>{for(var i in t||(t={}))fn.call(t,i)&&No(e,i,t[i]);if(Oo)for(var i of Oo(t))mn.call(t,i)&&No(e,i,t[i]);return e},Vi=(e,t)=>pn(e,gn(t)),C=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?vn(t,i):t,n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&zr(t,i,s),s},Bt=new WeakMap,Io=new WeakMap,Wt=new WeakMap,vi=new Set,bn=new MutationObserver(Rr),bt=new Map,Pr=document.documentElement.dir||"ltr",Tr=document.documentElement.lang||navigator.language;function Rr(){Pr=document.documentElement.dir||"ltr",Tr=document.documentElement.lang||navigator.language,[...vi.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}bn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var yn=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){vi.add(this.host)}hostDisconnected(){vi.delete(this.host)}dir(){return`${this.host.dir||Pr}`.toLowerCase()}lang(){return`${this.host.lang||Tr}`.toLowerCase()}term(e,...t){var i,o;const r=new Intl.Locale(this.lang()),s=r==null?void 0:r.language.toLowerCase(),n=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",l=bt.get(`${s}-${n}`),a=bt.get(s);let h;if(l&&l[e])h=l[e];else if(a&&a[e])h=a[e];else{if(!Jt||!Jt[e])return console.error(`No translation found for: ${String(e)}`),String(e);h=Jt[e]}return typeof h=="function"?h(...t):h}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}},_n=class extends yn{};(function(...e){e.map(t=>{const i=t.$code.toLowerCase();bt.has(i)?bt.set(i,Object.assign(Object.assign({},bt.get(i)),t)):bt.set(i,t),Jt||(Jt=t)}),Rr()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var de=e=>e??R;function Xe(e,t){const i=Vt({waitUntilFirstUpdate:!1},t);return(o,r)=>{const{update:s}=o,n=Array.isArray(e)?e:[e];o.update=function(l){n.forEach(a=>{const h=a;if(l.has(h)){const d=l.get(h),c=this[h];d!==c&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[r](d,c))}}),s.call(this,l)}}}var Do=Cr(class extends kr{constructor(e){var t;if(super(e),e.type!==pi||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,o;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.nt.add(s);return this.render(t)}const r=e.element.classList;this.nt.forEach(s=>{s in t||(r.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((o=this.st)===null||o===void 0)&&o.has(s)||(n?(r.add(s),this.nt.add(s)):(r.remove(s),this.nt.delete(s)))}return q}}),wn=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Vi(Vt({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function N(e){return(t,i)=>i!==void 0?((o,r,s)=>{r.constructor.createProperty(s,o)})(e,t,i):wn(e,t)}function Ho(e){return N(Vi(Vt({},e),{state:!0}))}var Ye,$n=({finisher:e,descriptor:t})=>(i,o)=>{var r;if(o===void 0){const s=(r=i.originalKey)!==null&&r!==void 0?r:i.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:Vi(Vt({},i),{key:s});return e!=null&&(n.finisher=function(l){e(l,s)}),n}{const s=i.constructor;t!==void 0&&Object.defineProperty(i,o,t(o)),e==null||e(s,o)}};function Fo(e,t){return $n({descriptor:i=>{const o={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const r=typeof i=="symbol"?Symbol():"__"+i;o.get=function(){var s,n;return this[r]===void 0&&(this[r]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[r]}}return o}})}(Ye=window.HTMLSlotElement)===null||Ye===void 0||Ye.prototype.assignedElements;var gi=class extends Gt{emit(e,t){const i=new CustomEvent(e,Vt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}};C([N()],gi.prototype,"dir",2),C([N()],gi.prototype,"lang",2);/*! Bundled license information:

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
*/var Ge,E=class extends gi{constructor(){super(...arguments),this.formControlController=new class{constructor(e,t){(this.host=e).addController(this),this.options=Vt({form:i=>{if(i.hasAttribute("form")&&i.getAttribute("form")!==""){const o=i.getRootNode(),r=i.getAttribute("form");if(r)return o.getElementById(r)}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null&&o},reportValidity:i=>typeof i.reportValidity!="function"||i.reportValidity(),setValue:(i,o)=>i.value=o},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(e){e?(this.form=e,Bt.has(this.form)?Bt.get(this.form).add(this.host):Bt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Wt.has(this.form)||(Wt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=Bt.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Wt.has(this.form)&&(this.form.reportValidity=Wt.get(this.form),Wt.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="sl-button";!t&&!r&&typeof i=="string"&&i.length>0&&o!==void 0&&(Array.isArray(o)?o.forEach(s=>{e.formData.append(i,s.toString())}):e.formData.append(i,o.toString()))}handleFormSubmit(e){var t;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=Bt.get(this.form))==null||t.forEach(r=>{this.setUserInteracted(r,!0)})),!this.form||this.form.noValidate||i||o(this.host)||(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){Io.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&i.setAttribute(o,t.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){var t;const i=this.host,o=!!Io.get(i),r=!!i.required;(t=this.form)!=null&&t.noValidate?(i.removeAttribute("data-required"),i.removeAttribute("data-optional"),i.removeAttribute("data-invalid"),i.removeAttribute("data-valid"),i.removeAttribute("data-user-invalid"),i.removeAttribute("data-user-valid")):(i.toggleAttribute("data-required",r),i.toggleAttribute("data-optional",!r),i.toggleAttribute("data-invalid",!e),i.toggleAttribute("data-valid",e),i.toggleAttribute("data-user-invalid",!e&&o),i.toggleAttribute("data-user-valid",e&&o))}updateValidity(){const e=this.host;this.setValidity(e.checkValidity())}}(this),this.hasSlotController=new class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}}(this,"help-text","label"),this.localize=new _n(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",100*e+"%")}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,i=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=t*e;if(this.localize.dir()==="rtl"){const s=`${t-r}px + ${e} * ${o}`;this.output.style.translate=`calc((${s} - ${i/2}px - ${o} / 2))`}else{const s=`${r}px - ${e} * ${o}`;this.output.style.translate=`calc(${s} - ${i/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,o=!!this.helpText||!!t;return To`
      <div
        part="form-control"
        class=${Do({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
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
            class=${Do({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${de(this.name)}
              ?disabled=${this.disabled}
              min=${de(this.min)}
              max=${de(this.max)}
              step=${de(this.step)}
              .value=${un(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip==="none"||this.disabled?"":To`
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
    `}};function jo(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}E.styles=cn,C([Fo(".range__control")],E.prototype,"input",2),C([Fo(".range__tooltip")],E.prototype,"output",2),C([Ho()],E.prototype,"hasFocus",2),C([Ho()],E.prototype,"hasTooltip",2),C([N()],E.prototype,"title",2),C([N()],E.prototype,"name",2),C([N({type:Number})],E.prototype,"value",2),C([N()],E.prototype,"label",2),C([N({attribute:"help-text"})],E.prototype,"helpText",2),C([N({type:Boolean,reflect:!0})],E.prototype,"disabled",2),C([N({type:Number})],E.prototype,"min",2),C([N({type:Number})],E.prototype,"max",2),C([N({type:Number})],E.prototype,"step",2),C([N()],E.prototype,"tooltip",2),C([N({attribute:!1})],E.prototype,"tooltipFormatter",2),C([N({reflect:!0})],E.prototype,"form",2),C([((e="value")=>(t,i)=>{const o=t.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,n,l){var a;const h=o.getPropertyOptions(e);if(s===(typeof h.attribute=="string"?h.attribute:e)){const d=h.converter||re,c=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:re.fromAttribute)(l,h.type);this[e]!==c&&(this[i]=c)}r.call(this,s,n,l)}})()],E.prototype,"defaultValue",2),C([Xe("value",{waitUntilFirstUpdate:!0})],E.prototype,"handleValueChange",1),C([Xe("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1),C([Xe("hasTooltip",{waitUntilFirstUpdate:!0})],E.prototype,"syncRange",1),E=C([(Ge="sl-range",e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(Ge,e):((t,i)=>{const{kind:o,elements:r}=i;return{kind:o,elements:r,finisher(s){customElements.define(t,s)}}})(Ge,e))],E);var qt=function(){try{window[I].updateSegments();var e=function(){if(!Je)return Je=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){Je=t,window[I].dispatchEvent(new Event("change"))})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},I="__foldables__",Je=!1,Li=function(){function e(){var o=this;if(window[I]!==void 0)return window[I];var r=document.createDocumentFragment();this.addEventListener=r.addEventListener.bind(r),this.removeEventListener=r.removeEventListener.bind(r),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof o[n]=="function"&&o[n](s),r.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(o,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var l;return function(){var a=arguments,h=this;clearTimeout(l),l=setTimeout(function(){return s.apply(h,a)},n)}}(qt(),200)})}var t,i=e.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var r=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,l=r/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:s,left:0,bottom:s+l,right:n,width:n,height:l},s+=o[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var h=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:c,right:c+h,bottom:d,width:h,height:d},c+=o[u].width,c+=this.foldSize;window.visualViewport.segments=o},i.randomizeSegmentsConfiguration=function(o){var r=Math.random()<.5,s=Math.round(Math.random()*(o-1)+1);r?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(I+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(I+"-horizontal-viewport-segments",o),qt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(I+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(I+"-vertical-viewport-segments",o),qt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(I+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(I+"-fold-size",o),qt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(I+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(I+"-browser-shell-size",o),qt()}}])&&function(o,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(e.prototype,t),e}();window[I]=new Li,window.visualViewport.segments===void 0&&window[I].updateSegments();var Vr="-viewport-segments",fi="(\\s*)(@media.*?\\b"+Vr+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",Sn=/\((.*?)\)/gi,xn=/@media[^\(]+/gi,An=/(horizontal-viewport-segments:)\s?(\d)/gi,En=/(vertical-viewport-segments:)\s?(\d)/gi,Cn=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")};function Bo(e,t){var i=e.matchAll(t);return i===null?[]:Array.from(i,function(o){return o[2]})[0]}function kn(e){var t=function(o){var r,s=new RegExp(fi,"gi");if(typeof o.matchAll=="function")r=Array.from(o.matchAll(s));else{for(r=[];r[r.length]=s.exec(o););r.length--}return r}(e),i=[[]];return t.forEach(function(o){var r=o[1],s=o[2],n=o[3],l=o[4],a=s.match(xn)||[],h=s.match(Sn)||[],d=Bo(s,En);d===void 0&&(d=1);var c=Bo(s,An);c===void 0&&(c=1),h=h.filter(function(u){return!u.includes(Vr)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][c]=""+r+a+h+"{"+n+l+"}"}),i}var mi=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+mi);var Wo,Lr=new Li;if(!mi){var Qe=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Wo=Qe,Promise.all(Wo.map(function(e){return e.href?fetch(e.href).then(function(t){return t.text()}):e.textContent}))).then(function(e){var t=new DocumentFragment;e.forEach(function(i,o){for(var r,s=function(T,k){return T.replace(new RegExp(fi,"gi"),k)}(i,""),n=kn(i),l=Qe[o].href||"inline",a=0,h=Object.entries(n);a<h.length;a++){var d=h[a],c=d[0],u=d[1];Qt[c]==null&&(Qt[c]=[]);for(var v=0,b=Object.entries(u);v<b.length;v++){var w=b[v];Qt[c][w[0]]="/* origin: "+l+" */"+w[1]}}if(l=="inline"||(r=i,new RegExp(fi,"gi").test(r))){var f=document.createElement("style");f.setAttribute("data-css-origin",l),f.textContent=s,t.appendChild(f)}else{var y=document.createElement("link");y.type="text/css",y.rel="stylesheet",y.href=l,t.appendChild(y)}}),Qe.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(t),function(i){mi||(qo(i),Lr.addEventListener("change",function(){return qo(i)}))}()})}var Qt=[[]];function qo(e){var t,i=Lr,o=null;(t=e?Qt[e.nodeName.toLowerCase()]:Qt)[i.verticalViewportSegments]&&(o=t[i.verticalViewportSegments][i.horizontalViewportSegments]);var r,s=t[0][0]?t[0][0]:null;if(o){var n=window.visualViewport.segments,l=!1;n.length>1&&(l=!(n[0].height<window.innerHeight));for(var a=0,h=Object.entries(n);a<h.length;a++)for(var d=h[a],c=d[0],u=0,v=Object.entries(d[1]);u<v.length;u++){var b=v[u],w=b[0];r=b[1]+"px",o=o.replace(Cn(l?"viewport-segment-"+w+" "+c+" 0":"viewport-segment-"+w+" 0 "+c),r)}var f="__foldables_sheet__",y=function(k,H){for(var A,S=function(x,le){var O=typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"];if(O)return(O=O.call(x)).next.bind(O);if(Array.isArray(x)||(O=function(U,Ut){if(U){if(typeof U=="string")return jo(U,Ut);var F=Object.prototype.toString.call(U).slice(8,-1);return F==="Object"&&U.constructor&&(F=U.constructor.name),F==="Map"||F==="Set"?Array.from(U):F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)?jo(U,Ut):void 0}}(x))){O&&(x=O);var Mt=0;return function(){return Mt>=x.length?{done:!0}:{done:!1,value:x[Mt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(k.querySelectorAll("."+f));!(A=S()).done;)A.value.remove();var P=document.createElement("style");P.className=f,P.textContent=H,k===document?document.head.appendChild(P):k.appendChild(P)};if(e){var T=e.shadowRoot;"adoptedStyleSheets"in T&&T.adoptedStyleSheets.length>0?T.adoptedStyleSheets[0].replace(s+o):y(T,o)}else y(document,o)}}const Y={Foldable:"foldable",Dual:"dual"};class Lt extends _t{}g(Lt,"styles",yr`
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
  `);customElements.define("close-icon",class extends Lt{render(){return Rt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}});customElements.define("fullscreen-icon",class extends Lt{render(){return Rt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}});customElements.define("splitview-icon",class extends Lt{render(){return Rt`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}});customElements.define("rotate-icon",class extends Lt{render(){return Rt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}});customElements.define("minimize-icon",class extends Lt{render(){return Rt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}});class Mr extends _t{constructor(){super();g(this,"_mini_configurator_header");g(this,"_mini_configurator");g(this,"_configurator");g(this,"_configurator_header");g(this,"_device_type_select");g(this,"_orientation_select");g(this,"_seam_slider");g(this,"_seam_container");g(this,"_preview");g(this,"_preview_container");g(this,"_device");g(this,"_frame");g(this,"_device_hinge");g(this,"_currentOrientation");g(this,"_currentDevice");g(this,"_isFullscreen",!1);g(this,"_verticalViewportSegments",1);g(this,"_horizontalViewportSegments",1);g(this,"_fold_width");g(this,"_browser_shell_size");g(this,"_x",0);g(this,"_y",0);g(this,"_offset_x",0);g(this,"_offset_y",0);g(this,"_resizeHandler");g(this,"_handleKeyUp",i=>{i.keyCode==73&&i.ctrlKey&&this._showMiniConfigurator()});g(this,"_startDragMiniConfigurator",async i=>{this._startDrag(i),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove});g(this,"_startDragConfigurator",async i=>{this._startDrag(i),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove});g(this,"_startDrag",async i=>{this._isFullscreen||(this._moved=!1,this._x=i.clientX-this._offset_x,this._y=i.clientY-this._offset_y,this._pointerId=i.pointerId,i.preventDefault())});g(this,"_miniConfiguratorMove",async i=>{this._pointerMove(i),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}});g(this,"_pointerMove",async i=>{if(i.clientY<0||i.clientX<0||i.clientX>window.innerWidth||i.clientY>window.innerHeight)return;let o=i.clientX-this._x,r=i.clientY-this._y;const s=window.getComputedStyle(this.shadowRoot.host),n=parseFloat(s.width),l=parseFloat(s.height);o<0&&(o=0),r<0&&(r=0),r+l>=window.innerHeight&&(r=window.innerHeight-l),o+n>=window.innerWidth&&(o=window.innerWidth-n),this._updateConfiguratorPosition(o,r),i.preventDefault()});g(this,"_stopDragConfigurator",async i=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});g(this,"_stopDragMiniConfigurator",async i=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});g(this,"_stopDrag",async i=>{this._x=this._offset_x,this._y=this._offset_y});g(this,"_onResize",async i=>{this._handleAsusSpanning()});g(this,"_seamValueUpdated",async()=>{this.foldWidth=this._seam_slider.value,this.shadowRoot.host.style.setProperty("--device-fold-width",this.foldWidth+"px"),this._updateFoldablesFeature()});g(this,"_rotationFinished",i=>{this._preview.style.transition=""});this._verticalViewportSegments=1,this._horizontalViewportSegments=1}static get properties(){return{verticalViewportSegments:{type:Number},horizontalViewportSegments:{type:Number}}}_inIframe(){try{return window.self!==window.top}catch{return!0}}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches)return console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this);const i=window.getComputedStyle(this.shadowRoot.host);parseFloat(i.width);const o=parseFloat(i.height);this._updateConfiguratorPosition(20,window.innerHeight-o-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._verticalViewportSegments=1,this._horizontalViewportSegments=1,this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="portrait",this._deviceType=Y.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.horizontalViewportSegments=1,this.verticalViewportSegments=2,this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{this._addZenbookVariables(document.styleSheets[0]),this._addZenbookVariables(this._frame.contentDocument.styleSheets[0])},300)):(this.horizontalViewportSegments=1,this.verticalViewportSegments=1,this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this._orientationFromSegments()}_orientationFromSegments(){return this.horizontalViewportSegments===2&&this.verticalViewportSegments===1?"portrait":this.horizontalViewportSegments===1&&this.verticalViewportSegments===2?"landscape":"portrait"}_addZenbookVariables(i){i.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",i.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(i){this._fold_width=Math.max(0,i)}_orientationChanged(i){const o=this._orientation_select.selectedIndex;this._orientation_select[o].value==="portrait"?(this.horizontalViewportSegments=2,this.verticalViewportSegments=1):(this.horizontalViewportSegments=1,this.verticalViewportSegments=2),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){this._orientationFromSegments()!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this._orientationFromSegments(),this.horizontalViewportSegments===1&&this.verticalViewportSegments===1?this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation():this.horizontalViewportSegments===2?this._applyVerticalRotation():this._applyHorizontalRotation()}get horizontalViewportSegments(){return this._horizontalViewportSegments}set horizontalViewportSegments(i){let o=this._horizontalViewportSegments;this._orientation_select.selectedIndex=i===2?0:1,this._horizontalViewportSegments=i,this.requestUpdate("horizontalViewportSegments",o)}get verticalViewportSegments(){return this._verticalViewportSegments}set verticalViewportSegments(i){let o=this._verticalViewportSegments;this._orientation_select.selectedIndex=i===2?1:0,this._verticalViewportSegments=i,this.requestUpdate("verticalViewportSegments",o)}_deviceTypeChanged(i){const o=this._device_type_select.selectedIndex,r=this._device_type_select[o].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(this.verticalViewportSegments=1,this.horizontalViewportSegments=2,this._currentOrientation="portrait"),r){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this.foldWidth=24,this._deviceType=Y.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Y.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Y.Dual,this.foldWidth=28,this._currentDevice="duo";break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=Y.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Y.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this.verticalViewportSegments=1,this.horizontalViewportSegments=1,this._currentOrientation="portrait",this._currentDevice="duo",this.foldWidth=0,this._deviceType=Y.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature(),this._frame.contentWindow.location.reload(!0)}_calculateAndApplyScaleFactor(){const i=window.getComputedStyle(this._preview_container),o=window.getComputedStyle(this._device),r=parseInt(i.width,10),s=parseInt(i.height,10);let n=parseInt(o.width,10),l=parseInt(o.height,10),a=1;if(this._currentOrientation==="landscape"&&(n=parseInt(o.height,10),l=parseInt(o.width,10)),l>s||n>r){const h=s/l,d=r/n;a=d<h?d:h}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*a)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px")}this._deviceType===Y.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const i=new Li;i.foldSize=this.foldWidth,i.horizontalViewportSegments=this.horizontalViewportSegments,i.verticalViewportSegments=this.verticalViewportSegments,this._seam_slider.value=this.foldWidth}_debounce(i,o){let r;return function(){clearTimeout(r),r=setTimeout(()=>i.apply(this,arguments),o)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let i=this._offset_x,o=this._offset_y;const r=window.getComputedStyle(this.shadowRoot.host),s=parseFloat(r.width),n=parseFloat(r.height);this._offset_y+n>=window.innerHeight&&(o=window.innerHeight-n),this._offset_x+s>=window.innerWidth&&(i=window.innerWidth-s),this._updateConfiguratorPosition(i,o),this._updatePreviewConfiguration()}_updateConfiguratorPosition(i,o){this._offset_x=i,this._offset_y=o,this.shadowRoot.host.style.transform="translate3d("+i+"px, "+o+"px, 0)"}_toggleSpanning(){this.verticalViewportSegments!=1||this.horizontalViewportSegments!=1?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1||(this.verticalViewportSegments===2?(this.verticalViewportSegments=1,this.horizontalViewportSegments=2):(this.verticalViewportSegments=2,this.horizontalViewportSegments=1),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return Rt`
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
    </div>`}}g(Mr,"styles",yr`
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
  `);customElements.define("foldable-device-configurator",Mr);function Ko(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}var Kt=function(){try{window[D].updateSegments();var e=function(){if(!ti)return ti=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){ti=t,window[D].dispatchEvent(new Event("change"))})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},D="__foldables__",ti=!1,Ur=function(){function e(){var o=this;if(window[D]!==void 0)return window[D];var r=document.createDocumentFragment();this.addEventListener=r.addEventListener.bind(r),this.removeEventListener=r.removeEventListener.bind(r),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof o[n]=="function"&&o[n](s),r.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(o,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var l;return function(){var a=arguments,h=this;clearTimeout(l),l=setTimeout(function(){return s.apply(h,a)},n)}}(Kt(),200)})}var t,i=e.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var o=[];if(this.verticalViewportSegments>1)for(var r=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,l=r/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)o[a]={top:s,left:0,bottom:s+l,right:n,width:n,height:l},s+=o[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var h=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)o[u]={top:0,left:c,right:c+h,bottom:d,width:h,height:d},c+=o[u].width,c+=this.foldSize;window.visualViewport.segments=o},i.randomizeSegmentsConfiguration=function(o){var r=Math.random()<.5,s=Math.round(Math.random()*(o-1)+1);r?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(D+"-horizontal-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(D+"-horizontal-viewport-segments",o),Kt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(D+"-vertical-viewport-segments")||1},set:function(o){if(isNaN(o))throw new TypeError(o);sessionStorage.setItem(D+"-vertical-viewport-segments",o),Kt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(D+"-fold-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(D+"-fold-size",o),Kt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(D+"-browser-shell-size")||0},set:function(o){if(!(Number(o)>=0))throw new TypeError(o);sessionStorage.setItem(D+"-browser-shell-size",o),Kt()}}])&&function(o,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(e.prototype,t),e}();window[D]=new Ur,window.visualViewport.segments===void 0&&window[D].updateSegments();var Or="-viewport-segments",Mi="(\\s*)(@media.*?\\b"+Or+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",zn=/\((.*?)\)/gi,Pn=/@media[^\(]+/gi,Tn=/(horizontal-viewport-segments:)\s?(\d)/gi,Rn=/(vertical-viewport-segments:)\s?(\d)/gi,Vn=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")};function Nr(e,t){return e.replace(new RegExp(Mi,"gi"),t)}function Zo(e,t){var i=e.matchAll(t);return i===null?[]:Array.from(i,function(o){return o[2]})[0]}function Ir(e){var t=function(o){var r,s=new RegExp(Mi,"gi");if(typeof o.matchAll=="function")r=Array.from(o.matchAll(s));else{for(r=[];r[r.length]=s.exec(o););r.length--}return r}(e),i=[[]];return t.forEach(function(o){var r=o[1],s=o[2],n=o[3],l=o[4],a=s.match(Pn)||[],h=s.match(zn)||[],d=Zo(s,Rn);d===void 0&&(d=1);var c=Zo(s,Tn);c===void 0&&(c=1),h=h.filter(function(u){return!u.includes(Or)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][c]=""+r+a+h+"{"+n+l+"}"}),i}var Pe=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+Pe);var Xo,Dr=new Ur;if(!Pe){var ei=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Xo=ei,Promise.all(Xo.map(function(e){return e.href?fetch(e.href).then(function(t){return t.text()}):e.textContent}))).then(function(e){var t=new DocumentFragment;e.forEach(function(i,o){for(var r,s=Nr(i,""),n=Ir(i),l=ei[o].href||"inline",a=0,h=Object.entries(n);a<h.length;a++){var d=h[a],c=d[0],u=d[1];it[c]==null&&(it[c]=[]);for(var v=0,b=Object.entries(u);v<b.length;v++){var w=b[v];it[c][w[0]]="/* origin: "+l+" */"+w[1]}}if(l=="inline"||(r=i,new RegExp(Mi,"gi").test(r))){var f=document.createElement("style");f.setAttribute("data-css-origin",l),f.textContent=s,t.appendChild(f)}else{var y=document.createElement("link");y.type="text/css",y.rel="stylesheet",y.href=l,t.appendChild(y)}}),ei.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(t),Hr()})}var it=[[]];function Ln(e,t){if(Pe)return e;var i=Nr(e,""),o=Ir(e);t&&(it[t]=[[]]);for(var r=t?it[t]:it,s=t?"":"/* origin: inline */",n=0,l=Object.entries(o);n<l.length;n++){var a=l[n],h=a[0],d=a[1];r[h]==null&&(r[h]=[]);for(var c=0,u=Object.entries(d);c<u.length;c++){var v=u[c];r[h][v[0]]=""+s+v[1]}}return r[0][0]=i,i}function Hr(e){Pe||(Yo(e),Dr.addEventListener("change",function(){return Yo(e)}))}function Yo(e){var t,i=Dr,o=null;(t=e?it[e.nodeName.toLowerCase()]:it)[i.verticalViewportSegments]&&(o=t[i.verticalViewportSegments][i.horizontalViewportSegments]);var r,s=t[0][0]?t[0][0]:null;if(o){var n=window.visualViewport.segments,l=!1;n.length>1&&(l=!(n[0].height<window.innerHeight));for(var a=0,h=Object.entries(n);a<h.length;a++)for(var d=h[a],c=d[0],u=0,v=Object.entries(d[1]);u<v.length;u++){var b=v[u],w=b[0];r=b[1]+"px",o=o.replace(Vn(l?"viewport-segment-"+w+" "+c+" 0":"viewport-segment-"+w+" 0 "+c),r)}var f="__foldables_sheet__",y=function(k,H){for(var A,S=function(x,le){var O=typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"];if(O)return(O=O.call(x)).next.bind(O);if(Array.isArray(x)||(O=function(U,Ut){if(U){if(typeof U=="string")return Ko(U,Ut);var F=Object.prototype.toString.call(U).slice(8,-1);return F==="Object"&&U.constructor&&(F=U.constructor.name),F==="Map"||F==="Set"?Array.from(U):F==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)?Ko(U,Ut):void 0}}(x))){O&&(x=O);var Mt=0;return function(){return Mt>=x.length?{done:!0}:{done:!1,value:x[Mt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(k.querySelectorAll("."+f));!(A=S()).done;)A.value.remove();var P=document.createElement("style");P.className=f,P.textContent=H,k===document?document.head.appendChild(P):k.appendChild(P)};if(e){var T=e.shadowRoot;"adoptedStyleSheets"in T&&T.adoptedStyleSheets.length>0?T.adoptedStyleSheets[0].replace(s+o):y(T,o)}else y(document,o)}}try{self["workbox:window:7.0.0"]&&_()}catch{}function bi(e,t){return new Promise(function(i){var o=new MessageChannel;o.port1.onmessage=function(r){i(r.data)},e.postMessage(t,[o.port2])})}function Mn(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Go(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}function Un(e,t){var i;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(i=function(r,s){if(r){if(typeof r=="string")return Go(r,s);var n=Object.prototype.toString.call(r).slice(8,-1);return n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set"?Array.from(r):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Go(r,s):void 0}}(e))||t&&e&&typeof e.length=="number"){i&&(e=i);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(i=e[Symbol.iterator]()).next.bind(i)}try{self["workbox:core:7.0.0"]&&_()}catch{}var ii=function(){var e=this;this.promise=new Promise(function(t,i){e.resolve=t,e.reject=i})};function oi(e,t){var i=location.href;return new URL(e,i).href===new URL(t,i).href}var Zt=function(e,t){this.type=e,Object.assign(this,t)};function ue(e,t,i){return i?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function On(){}var Nn={type:"SKIP_WAITING"};function Jo(e,t){if(!t)return e&&e.then?e.then(On):Promise.resolve()}var In=function(e){var t,i;function o(l,a){var h,d;return a===void 0&&(a={}),(h=e.call(this)||this).nn={},h.tn=0,h.rn=new ii,h.en=new ii,h.on=new ii,h.un=0,h.an=new Set,h.cn=function(){var c=h.fn,u=c.installing;h.tn>0||!oi(u.scriptURL,h.sn.toString())||performance.now()>h.un+6e4?(h.vn=u,c.removeEventListener("updatefound",h.cn)):(h.hn=u,h.an.add(u),h.rn.resolve(u)),++h.tn,u.addEventListener("statechange",h.ln)},h.ln=function(c){var u=h.fn,v=c.target,b=v.state,w=v===h.vn,f={sw:v,isExternal:w,originalEvent:c};!w&&h.mn&&(f.isUpdate=!0),h.dispatchEvent(new Zt(b,f)),b==="installed"?h.wn=self.setTimeout(function(){b==="installed"&&u.waiting===v&&h.dispatchEvent(new Zt("waiting",f))},200):b==="activating"&&(clearTimeout(h.wn),w||h.en.resolve(v))},h.dn=function(c){var u=h.hn,v=u!==navigator.serviceWorker.controller;h.dispatchEvent(new Zt("controlling",{isExternal:v,originalEvent:c,sw:u,isUpdate:h.mn})),v||h.on.resolve(u)},h.gn=(d=function(c){var u=c.data,v=c.ports,b=c.source;return ue(h.getSW(),function(){h.an.has(b)&&h.dispatchEvent(new Zt("message",{data:u,originalEvent:c,ports:v,sw:b}))})},function(){for(var c=[],u=0;u<arguments.length;u++)c[u]=arguments[u];try{return Promise.resolve(d.apply(this,c))}catch(v){return Promise.reject(v)}}),h.sn=l,h.nn=a,navigator.serviceWorker.addEventListener("message",h.gn),h}i=e,(t=o).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var r,s,n=o.prototype;return n.register=function(l){var a=(l===void 0?{}:l).immediate,h=a!==void 0&&a;try{var d=this;return function(c,u){var v=c();return v&&v.then?v.then(u):u(v)}(function(){if(!h&&document.readyState!=="complete")return Jo(new Promise(function(c){return window.addEventListener("load",c)}))},function(){return d.mn=!!navigator.serviceWorker.controller,d.yn=d.pn(),ue(d.bn(),function(c){d.fn=c,d.yn&&(d.hn=d.yn,d.en.resolve(d.yn),d.on.resolve(d.yn),d.yn.addEventListener("statechange",d.ln,{once:!0}));var u=d.fn.waiting;return u&&oi(u.scriptURL,d.sn.toString())&&(d.hn=u,Promise.resolve().then(function(){d.dispatchEvent(new Zt("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),d.hn&&(d.rn.resolve(d.hn),d.an.add(d.hn)),d.fn.addEventListener("updatefound",d.cn),navigator.serviceWorker.addEventListener("controllerchange",d.dn),d.fn})})}catch(c){return Promise.reject(c)}},n.update=function(){try{return this.fn?Jo(this.fn.update()):void 0}catch(l){return Promise.reject(l)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(l){try{return ue(this.getSW(),function(a){return bi(a,l)})}catch(a){return Promise.reject(a)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&bi(this.fn.waiting,Nn)},n.pn=function(){var l=navigator.serviceWorker.controller;return l&&oi(l.scriptURL,this.sn.toString())?l:void 0},n.bn=function(){try{var l=this;return function(a,h){try{var d=a()}catch(c){return h(c)}return d&&d.then?d.then(void 0,h):d}(function(){return ue(navigator.serviceWorker.register(l.sn,l.nn),function(a){return l.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},r=o,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Mn(r.prototype,s),o}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(i,o){this.Sn(i).add(o)},t.removeEventListener=function(i,o){this.Sn(i).delete(o)},t.dispatchEvent=function(i){i.target=this;for(var o,r=Un(this.Sn(i.type));!(o=r()).done;)(0,o.value)(i)},t.Sn=function(i){return this.Pn.has(i)||this.Pn.set(i,new Set),this.Pn.get(i)},e}());ni("/demos/photo-gallery/");const Fr=(e,...t)=>{const i=Ln(e[0],"main-application");return ot([i],...t)};class yi extends ht{constructor(){super(...arguments);g(this,"_spinner");g(this,"_image");g(this,"_legend")}firstUpdated(){this._spinner=this.shadowRoot.querySelector("sl-spinner"),this._image=this.shadowRoot.querySelector("img"),this._legend=this.shadowRoot.querySelector("#text")}updated(i){i.has("src")&&(this._spinner.style.visibility="visible",this._image.addEventListener("load",()=>{this._spinner.style.visibility="hidden",this.style.visibility="visible",this._legend.innerText=this.description},{once:!0}),this._image.src=this.src)}render(){return j`
      <div id="wrapper">
        <img/>
        <div id="text"></div>
        <sl-spinner></sl-spinner>
      </div>
    `}}g(yi,"styles",Fr`
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
  `),g(yi,"properties",{src:{type:String},description:{type:String}});customElements.define("detail-img",yi);class _i extends ht{constructor(){super();g(this,"_carousel");g(this,"_detail_img");g(this,"_detail_container");g(this,"_detail");g(this,"_detail_select");g(this,"_drawer");g(this,"_spinner");g(this,"_fold");g(this,"_gallery");g(this,"_fullview_container");g(this,"_swAlert");g(this,"_wb");g(this,"_wbRegistration");this._full_view_container_classes={hidden:!0}}firstUpdated(){this._gallery=this.shadowRoot.querySelector(".gallery"),this._carousel=this.shadowRoot.querySelector("sl-carousel"),this._detail_img=this.shadowRoot.querySelector("detail-img"),this._detail_container=this.shadowRoot.querySelector(".detail-container"),this._detail=this.shadowRoot.querySelector(".detail"),this._detail_select=this.shadowRoot.querySelector(".detail-select"),this._spinner=this.shadowRoot.querySelector("sl-spinner"),this._drawer=this.shadowRoot.querySelector("#drawer"),this._swAlert=this.shadowRoot.querySelector("#sw-alert"),this._fold=this.shadowRoot.querySelector(".fold"),this._fullview_container=this.shadowRoot.querySelector(".fullview-container"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new In("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()}),screen.orientation.addEventListener("change",i=>{this._closePicture()})}connectedCallback(){super.connectedCallback(),Hr(this)}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&bi(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_openCarousel(i){const r=i.currentTarget.children[1].currentSrc.replace("-l",""),s=window.matchMedia("(vertical-viewport-segments: 2)").matches,n=window.matchMedia("(horizontal-viewport-segments: 2)").matches;if(navigator.devicePosture!=null&&(navigator.devicePosture.type==="folded"&&n||navigator.devicePosture.type==="continuous"&&(s||n))){if(this._detail_select.style.display="none",this._detail.style.visibility="visible",this._detail_img.src===r)return;this._detail_img.description=i.currentTarget.children[1].alt,this._detail_img.src=r,this._detail_img.style.visibility="hidden"}else this._showSpinner(),this._current_image=i.currentTarget,this._full_view_container_classes={hidden:!1},this._carousel.updateComplete.then(()=>{const l=Number(i.currentTarget.children[1].getAttribute("index"));this._carousel.children[l+1].children[0].children[1].getAttribute("loaded")=="true"&&this._hideSpinner(),this._carousel.goToSlide(l,"instant")})}_showSpinner(){this._spinner.style.visibility="visible"}_hideSpinner(){this._spinner.style.visibility="hidden"}_pictureLoaded(i){i.target.setAttribute("loaded","true"),this._hideSpinner()}_slideChange(i){i.detail.slide.children[0].children[1].getAttribute("loaded")=="false"&&this._showSpinner()}_closePicture(){this._full_view_container_classes={hidden:!0}}render(){const i=[{name:"images/air-balloon-l",hires:"images/air-balloon",alt:"This is a beautiful picture of an air balloon in the sky."},{name:"images/asia-l",hires:"images/asia",alt:"This photo depicts a woman on a boat somewhere in Asia."},{name:"images/china-l",hires:"images/china",alt:"Architecture in China, a tower of a building."},{name:"images/church-l",hires:"images/church",alt:"A black church in the middle of nowhere."},{name:"images/city-l",hires:"images/city",alt:"A modern city somewhere in Asia."},{name:"images/waterfall2-l",hires:"images/waterfall2",alt:"River with a tiny waterfall."},{name:"images/cloud-l",hires:"images/cloud",alt:"Clouds in the sky, view from high altitude."},{name:"images/desert-l",hires:"images/desert",alt:"A desert with cactus."},{name:"images/river2-l",hires:"images/river2",alt:"A river inside a canyon."},{name:"images/disney-l",hires:"images/disney",alt:"The Disney castle in Orlando"},{name:"images/forest-l",hires:"images/forest",alt:"A road crossing a green forest"},{name:"images/greece-l",hires:"images/greece",alt:"Greece architecture"},{name:"images/city2-l",hires:"images/city2",alt:"A city street with an arch"},{name:"images/lake-l",hires:"images/lake",alt:"Women coming out of a lake somewhere lost in the nature"},{name:"images/mountain-l",hires:"images/mountain",alt:"Peak of a high mountain and a cloudy sky"},{name:"images/new-york-l",hires:"images/new-york",alt:"A street in New York"},{name:"images/pool-l",hires:"images/pool",alt:"Relaxing pool in a luxury hotel"},{name:"images/restaurant-l",hires:"images/restaurant",alt:"Restaurant on the edge of a river somewhere in France"},{name:"images/river-l",hires:"images/river",alt:"River with people kayaking"},{name:"images/road-l",hires:"images/road",alt:"Long straight road somewhere in USA"},{name:"images/sand-l",hires:"images/sand",alt:"Desert with rocky mountains on the background"},{name:"images/sea-l",hires:"images/sea",alt:"Beautiful transparent sea water somewhere in the pacific"},{name:"images/sfo-l",hires:"images/sfo",alt:"Golden gate in San Francisco"},{name:"images/stars-l",hires:"images/stars",alt:"Wonderful astronomy shot of stars in the sky"},{name:"images/tents-l",hires:"images/tents",alt:"Camping tents hanging on a cliff"},{name:"images/waterfall-l",hires:"images/waterfall",alt:"Picture of a waterfall between big rocks"},{name:"images/mountain2-l",hires:"images/mountain2",alt:"Beautiful picture of a mountain landscape"},{name:"images/wave-l",hires:"images/wave",alt:"This is a picture from a wave in the ocean"},{name:"images/aerial-l",hires:"images/aerial",alt:"This is an aerial picture of a city"},{name:"images/building-l",hires:"images/building",alt:"This is a picture from inside a building"},{name:"images/catamaran-l",hires:"images/catamaran",alt:"This is a picture of a catamaran with blue water"},{name:"images/cats-l",hires:"images/cats",alt:"Thisa picture of two cats sleeping"},{name:"images/egypt-l",hires:"images/egypt",alt:"This is a picture from somewhere in Egypt"},{name:"images/feather-l",hires:"images/feather",alt:"This is a picture of colorful feathers"},{name:"images/fruits-l",hires:"images/fruits",alt:"This is a picture of a water bottle and fruits"},{name:"images/golden-gate-l",hires:"images/golden-gate",alt:"This is a picture of the Golden Gate"},{name:"images/marocco-l",hires:"images/marocco",alt:"This is a picture of ancient building in Marocco"},{name:"images/milky-way-l",hires:"images/milky-way",alt:"This is a picture from the Milky Way"},{name:"images/palm-tree-l",hires:"images/palm-tree",alt:"This is a picture of palm trees with beautiful weather"},{name:"images/rainbow-l",hires:"images/rainbow",alt:"This is a picture of a rainbow from a light"},{name:"images/road2-l",hires:"images/road2",alt:"This is a picture from a road with a lot of trees"},{name:"images/surf-l",hires:"images/surf",alt:"This is a picture of a surfer"},{name:"images/volcano-l",hires:"images/volcano",alt:"This is an aerial picture of a volcano"}];return j`
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
            ${i.map((o,r)=>j`
              <figure class="gallery-item">
                <picture @click="${this._openCarousel}">
                  <source srcset="${o.name}.webp" type="image/webp">
                  <img src="${o.name}.jpg" class="gallery-img" alt=${o.alt} index="${r}">
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

          <div class="fullview-container ${tt(this._full_view_container_classes)}">
            <div class="close" @click="${this._closePicture}"></div>
            <sl-carousel navigation loop mouse-dragging @sl-slide-change="${this._slideChange}">
              ${i.map(o=>j`
                <sl-carousel-item>
                  <picture class="carousel-item">
                    <source srcset="${o.hires}.webp" type="image/webp">
                    <img src="${o.hires}.jpg" class="carousel-img" alt=${o.alt} loading="lazy" loaded="false" @load="${this._pictureLoaded}">
                  </picture>
                </sl-carousel-item>
              `)}
              <sl-spinner></sl-spinner>
            </sl-carousel>
          </div>
        </div>
    `}}g(_i,"styles",Fr`
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
      z-index: 3;
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

    sl-carousel {
      width: 100%;
      height: 90%;
    }

    sl-carousel-item {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .carousel-item {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .carousel-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    sl-carousel::part(navigation-button) {
      color: white;
      height: 50px;
      background-color: gray;
    }

    .gallery {
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

      sl-carousel {
        height: env(viewport-segment-bottom 0 0);
      }

      .fullview-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
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
  `),g(_i,"properties",{_full_view_container_classes:{type:String}});customElements.define("main-application",_i);
