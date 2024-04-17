var jo=Object.defineProperty;var Bo=(e,t,i)=>t in e?jo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var v=(e,t,i)=>(Bo(e,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=globalThis,wi=pe.ShadowRoot&&(pe.ShadyCSS===void 0||pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$i=Symbol(),Ui=new WeakMap;let Qr=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==$i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(wi&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=Ui.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ui.set(i,t))}return t}toString(){return this.cssText}};const qo=e=>new Qr(typeof e=="string"?e:e+"",void 0,$i),rt=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Qr(i,e,$i)},Wo=(e,t)=>{if(wi)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const r=document.createElement("style"),o=pe.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)}},Oi=wi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return qo(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ko,defineProperty:Zo,getOwnPropertyDescriptor:Xo,getOwnPropertyNames:Yo,getOwnPropertySymbols:Go,getPrototypeOf:Jo}=Object,et=globalThis,Ni=et.trustedTypes,Qo=Ni?Ni.emptyScript:"",Re=et.reactiveElementPolyfillSupport,Xt=(e,t)=>e,fe={toAttribute(e,t){switch(t){case Boolean:e=e?Qo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Si=(e,t)=>!Ko(e,t),Ii={attribute:!0,type:String,converter:fe,reflect:!1,hasChanged:Si};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),et.litPropertyMetadata??(et.litPropertyMetadata=new WeakMap);let gt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Ii){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,i);o!==void 0&&Zo(this.prototype,t,o)}}static getPropertyDescriptor(t,i,r){const{get:o,set:s}=Xo(this.prototype,t)??{get(){return this[i]},set(n){this[i]=n}};return{get(){return o==null?void 0:o.call(this)},set(n){const l=o==null?void 0:o.call(this);s.call(this,n),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ii}static _$Ei(){if(this.hasOwnProperty(Xt("elementProperties")))return;const t=Jo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Xt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xt("properties"))){const i=this.properties,r=[...Yo(i),...Go(i)];for(const o of r)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[r,o]of i)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[i,r]of this.elementProperties){const o=this._$Eu(i,r);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)i.unshift(Oi(o))}else t!==void 0&&i.push(Oi(t));return i}static _$Eu(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const r of i.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Wo(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostConnected)==null?void 0:r.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostDisconnected)==null?void 0:r.call(i)})}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$EC(t,i){var s;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const n=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:fe).toAttribute(i,r.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,i){var s;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const n=r.getPropertyOptions(o),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)==null?void 0:s.fromAttribute)!==void 0?n.converter:fe;this._$Em=o,this[o]=l.fromAttribute(i,n.type),this._$Em=null}}requestUpdate(t,i,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Si)(this[t],i))return;this.P(t,i,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,r){this._$AL.has(t)||this._$AL.set(t,i),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,n]of o)n.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],n)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(r=this._$EO)==null||r.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(i)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}};gt.elementStyles=[],gt.shadowRootOptions={mode:"open"},gt[Xt("elementProperties")]=new Map,gt[Xt("finalized")]=new Map,Re==null||Re({ReactiveElement:gt}),(et.reactiveElementVersions??(et.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=globalThis,be=Yt.trustedTypes,Di=be?be.createPolicy("lit-html",{createHTML:e=>e}):void 0,to="$lit$",Q=`lit$${(Math.random()+"").slice(9)}$`,eo="?"+Q,ts=`<${eo}>`,ct=document,te=()=>ct.createComment(""),ee=e=>e===null||typeof e!="object"&&typeof e!="function",io=Array.isArray,es=e=>io(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Te=`[ 	
\f\r]`,Ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fi=/-->/g,Hi=/>/g,ot=RegExp(`>|${Te}(?:([^\\s"'>=/]+)(${Te}*=${Te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ji=/'/g,Bi=/"/g,ro=/^(?:script|style|textarea|title)$/i,is=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),j=is(1),dt=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),qi=new WeakMap,lt=ct.createTreeWalker(ct,129);function oo(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Di!==void 0?Di.createHTML(t):t}const rs=(e,t)=>{const i=e.length-1,r=[];let o,s=t===2?"<svg>":"",n=Ot;for(let l=0;l<i;l++){const a=e[l];let h,d,c=-1,u=0;for(;u<a.length&&(n.lastIndex=u,d=n.exec(a),d!==null);)u=n.lastIndex,n===Ot?d[1]==="!--"?n=Fi:d[1]!==void 0?n=Hi:d[2]!==void 0?(ro.test(d[2])&&(o=RegExp("</"+d[2],"g")),n=ot):d[3]!==void 0&&(n=ot):n===ot?d[0]===">"?(n=o??Ot,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?ot:d[3]==='"'?Bi:ji):n===Bi||n===ji?n=ot:n===Fi||n===Hi?n=Ot:(n=ot,o=void 0);const g=n===ot&&e[l+1].startsWith("/>")?" ":"";s+=n===Ot?a+ts:c>=0?(r.push(h),a.slice(0,c)+to+a.slice(c)+Q+g):a+Q+(c===-2?l:g)}return[oo(e,s+(e[i]||"<?>")+(t===2?"</svg>":"")),r]};let oi=class so{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let s=0,n=0;const l=t.length-1,a=this.parts,[h,d]=rs(t,i);if(this.el=so.createElement(h,r),lt.currentNode=this.el.content,i===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=lt.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(to)){const u=d[n++],g=o.getAttribute(c).split(Q),b=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:b[2],strings:g,ctor:b[1]==="."?ss:b[1]==="?"?ns:b[1]==="@"?as:Ee}),o.removeAttribute(c)}else c.startsWith(Q)&&(a.push({type:6,index:s}),o.removeAttribute(c));if(ro.test(o.tagName)){const c=o.textContent.split(Q),u=c.length-1;if(u>0){o.textContent=be?be.emptyScript:"";for(let g=0;g<u;g++)o.append(c[g],te()),lt.nextNode(),a.push({type:2,index:++s});o.append(c[u],te())}}}else if(o.nodeType===8)if(o.data===eo)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(Q,c+1))!==-1;)a.push({type:7,index:s}),c+=Q.length-1}s++}}static createElement(t,i){const r=ct.createElement("template");return r.innerHTML=t,r}};function $t(e,t,i=e,r){var n,l;if(t===dt)return t;let o=r!==void 0?(n=i._$Co)==null?void 0:n[r]:i._$Cl;const s=ee(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==s&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,i,r)),r!==void 0?(i._$Co??(i._$Co=[]))[r]=o:i._$Cl=o),o!==void 0&&(t=$t(e,o._$AS(e,t.values),o,r)),t}let os=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??ct).importNode(i,!0);lt.currentNode=o;let s=lt.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new xi(s,s.nextSibling,this,t):a.type===1?h=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(h=new ls(s,this,t)),this._$AV.push(h),a=r[++l]}n!==(a==null?void 0:a.index)&&(s=lt.nextNode(),n++)}return lt.currentNode=ct,o}p(t){let i=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}},xi=class no{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,r,o){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=$t(this,t,i),ee(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==dt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):es(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==L&&ee(this._$AH)?this._$AA.nextSibling.data=t:this.T(ct.createTextNode(t)),this._$AH=t}$(t){var s;const{values:i,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=oi.createElement(oo(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===o)this._$AH.p(i);else{const n=new os(o,this),l=n.u(this.options);n.p(i),this.T(l),this._$AH=n}}_$AC(t){let i=qi.get(t.strings);return i===void 0&&qi.set(t.strings,i=new oi(t)),i}k(t){io(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const s of t)o===i.length?i.push(r=new no(this.S(te()),this.S(te()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}},Ee=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,r,o,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=L}_$AI(t,i=this,r,o){const s=this.strings;let n=!1;if(s===void 0)t=$t(this,t,i,0),n=!ee(t)||t!==this._$AH&&t!==dt,n&&(this._$AH=t);else{const l=t;let a,h;for(t=s[0],a=0;a<s.length-1;a++)h=$t(this,l[r+a],i,a),h===dt&&(h=this._$AH[a]),n||(n=!ee(h)||h!==this._$AH[a]),h===L?t=L:t!==L&&(t+=(h??"")+s[a+1]),this._$AH[a]=h}n&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ss=class extends Ee{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}},ns=class extends Ee{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}},as=class extends Ee{constructor(t,i,r,o,s){super(t,i,r,o,s),this.type=5}_$AI(t,i=this){if((t=$t(this,t,i,0)??L)===dt)return;const r=this._$AH,o=t===L&&r!==L||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==L&&(r===L||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}},ls=class{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){$t(this,t)}};const Ve=Yt.litHtmlPolyfillSupport;Ve==null||Ve(oi,xi),(Yt.litHtmlVersions??(Yt.litHtmlVersions=[])).push("3.1.2");const hs=(e,t,i)=>{const r=(i==null?void 0:i.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const s=(i==null?void 0:i.renderBefore)??null;r._$litPart$=o=new xi(t.insertBefore(te(),s),s,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ht=class extends gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=hs(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return dt}};var Jr;ht._$litElement$=!0,ht.finalized=!0,(Jr=globalThis.litElementHydrateSupport)==null||Jr.call(globalThis,{LitElement:ht});const Le=globalThis.litElementPolyfillSupport;Le==null||Le({LitElement:ht});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ds=e=>(...t)=>({_$litDirective$:e,values:t});let us=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=ds(class extends us{constructor(e){var t;if(super(e),e.type!==cs.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((r=this.nt)!=null&&r.has(s))&&this.st.add(s);return this.render(t)}const i=e.element.classList;for(const s of this.st)s in t||(i.remove(s),this.st.delete(s));for(const s in t){const n=!!t[s];n===this.st.has(s)||(o=this.nt)!=null&&o.has(s)||(n?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return dt}});var si="";function ni(e){si=e}function ps(e=""){if(!si){const t=[...document.getElementsByTagName("script")],i=t.find(r=>r.hasAttribute("data-shoelace"));if(i)ni(i.getAttribute("data-shoelace"));else{const r=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let o="";r&&(o=r.getAttribute("src")),ni(o.split("/").slice(0,-1).join("/"))}}return si.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var gs={name:"default",resolver:e=>ps(`assets/icons/${e}.svg`)},vs=gs,Wi={caret:`
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
  `},ms={name:"system",resolver:e=>e in Wi?`data:image/svg+xml,${encodeURIComponent(Wi[e])}`:""},fs=ms,bs=[vs,fs],ai=[];function _s(e){ai.push(e)}function ys(e){ai=ai.filter(t=>t!==e)}function Ki(e){return bs.find(t=>t.name===e)}var ws=rt`
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
`,ao=Object.defineProperty,$s=Object.defineProperties,Ss=Object.getOwnPropertyDescriptor,xs=Object.getOwnPropertyDescriptors,Zi=Object.getOwnPropertySymbols,As=Object.prototype.hasOwnProperty,Es=Object.prototype.propertyIsEnumerable,Xi=(e,t,i)=>t in e?ao(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Pt=(e,t)=>{for(var i in t||(t={}))As.call(t,i)&&Xi(e,i,t[i]);if(Zi)for(var i of Zi(t))Es.call(t,i)&&Xi(e,i,t[i]);return e},Ai=(e,t)=>$s(e,xs(t)),p=(e,t,i,r)=>{for(var o=r>1?void 0:r?Ss(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=(r?n(t,i,o):n(o))||o);return r&&o&&ao(t,i,o),o};function K(e,t){const i=Pt({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:s}=r,n=Array.isArray(e)?e:[e];r.update=function(l){n.forEach(a=>{const h=a;if(l.has(h)){const d=l.get(h),c=this[h];d!==c&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](d,c)}}),s.call(this,l)}}}var Rt=rt`
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
 */const Cs={attribute:!0,type:String,converter:fe,reflect:!1,hasChanged:Si},ks=(e=Cs,t,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,e),r==="accessor"){const{name:n}=i;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,e)},init(l){return l!==void 0&&this.P(n,void 0,e),l}}}if(r==="setter"){const{name:n}=i;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,e)}}throw Error("Unsupported decorator location: "+r)};function f(e){return(t,i)=>typeof i=="object"?ks(e,t,i):((r,o,s)=>{const n=o.hasOwnProperty(s);return o.constructor.createProperty(s,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(e){return f({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zs(e){return(t,i)=>{const r=typeof t=="function"?t:t[i];Object.assign(r,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yi=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ae(e,t){return(i,r,o)=>{const s=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(e))??null};if(t){const{get:n,set:l}=typeof r=="object"?i:o??(()=>{const a=Symbol();return{get(){return this[a]},set(h){this[a]=h}}})();return Yi(i,r,{get(){let a=n.call(this);return a===void 0&&(a=s(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return Yi(i,r,{get(){return s(this)}})}}var Z=class extends ht{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const i=new CustomEvent(e,Pt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const r=customElements.get(e);if(!r){customElements.define(e,class extends t{},i);return}let o=" (unknown version)",s=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in r&&r.version&&(s=" v"+r.version),!(o&&s&&o===s)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${s} has already been registered.`)}};Z.version="2.15.0";Z.dependencies={};p([f()],Z.prototype,"dir",2);p([f()],Z.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ps=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t;var Nt=Symbol(),he=Symbol(),Me,Ue=new Map,q=class extends Z{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let r;if(t!=null&&t.spriteSheet){this.svg=j`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(o),this.svg}try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?Nt:he}catch{return he}try{const o=document.createElement("div");o.innerHTML=await r.text();const s=o.firstElementChild;if(((i=s==null?void 0:s.tagName)==null?void 0:i.toLowerCase())!=="svg")return Nt;Me||(Me=new DOMParser);const l=Me.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Nt}catch{return Nt}}connectedCallback(){super.connectedCallback(),_s(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ys(this)}getIconSource(){const e=Ki(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:i}=this.getIconSource(),r=i?Ki(this.library):void 0;if(!t){this.svg=null;return}let o=Ue.get(t);if(o||(o=this.resolveIcon(t,r),Ue.set(t,o)),!this.initialRender)return;const s=await o;if(s===he&&Ue.delete(t),t===this.getIconSource().url){if(Ps(s)){this.svg=s;return}switch(s){case he:case Nt:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(e=r==null?void 0:r.mutator)==null||e.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};q.styles=[Rt,ws];p([ut()],q.prototype,"svg",2);p([f({reflect:!0})],q.prototype,"name",2);p([f()],q.prototype,"src",2);p([f()],q.prototype,"label",2);p([f({reflect:!0})],q.prototype,"library",2);p([K("label")],q.prototype,"handleLabelChange",1);p([K(["name","src","library"])],q.prototype,"setIcon",1);q.define("sl-icon");var Rs=rt`
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
 */const lo=Symbol.for(""),Ts=e=>{if((e==null?void 0:e.r)===lo)return e==null?void 0:e._$litStatic$},_e=(e,...t)=>({_$litStatic$:t.reduce((i,r,o)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:lo}),Gi=new Map,Vs=e=>(t,...i)=>{const r=i.length;let o,s;const n=[],l=[];let a,h=0,d=!1;for(;h<r;){for(a=t[h];h<r&&(s=i[h],(o=Ts(s))!==void 0);)a+=o+t[++h],d=!0;h!==r&&l.push(s),n.push(a),h++}if(h===r&&n.push(t[r]),d){const c=n.join("$$lit$$");(t=Gi.get(c))===void 0&&(n.raw=n,Gi.set(c,t=n)),i=l}return e(t,...i)},ge=Vs(j);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=e=>e??L;var B=class extends Z{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?_e`a`:_e`button`;return ge`
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
    `}};B.styles=[Rt,Rs];B.dependencies={"sl-icon":q};p([ae(".icon-button")],B.prototype,"button",2);p([ut()],B.prototype,"hasFocus",2);p([f()],B.prototype,"name",2);p([f()],B.prototype,"library",2);p([f()],B.prototype,"src",2);p([f()],B.prototype,"href",2);p([f()],B.prototype,"target",2);p([f()],B.prototype,"download",2);p([f()],B.prototype,"label",2);p([f({type:Boolean,reflect:!0})],B.prototype,"disabled",2);var ho=new Map,Ls=new WeakMap;function Ms(e){return e??{keyframes:[],options:{duration:0}}}function Ji(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function co(e,t){ho.set(e,Ms(t))}function Qi(e,t,i){const r=Ls.get(e);if(r!=null&&r[t])return Ji(r[t],i.dir);const o=ho.get(t);return o?Ji(o,i.dir):{keyframes:[],options:{duration:0}}}function li(e,t){return new Promise(i=>{function r(o){o.target===e&&(e.removeEventListener(t,r),i())}e.addEventListener(t,r)})}function tr(e,t,i){return new Promise(r=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,Ai(Pt({},i),{duration:hi()?0:i.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function hi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function er(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{t.cancel(),requestAnimationFrame(i)})))}const ci=new Set,Us=new MutationObserver(vo),ft=new Map;let uo=document.documentElement.dir||"ltr",po=document.documentElement.lang||navigator.language,at;Us.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function go(...e){e.map(t=>{const i=t.$code.toLowerCase();ft.has(i)?ft.set(i,Object.assign(Object.assign({},ft.get(i)),t)):ft.set(i,t),at||(at=t)}),vo()}function vo(){uo=document.documentElement.dir||"ltr",po=document.documentElement.lang||navigator.language,[...ci.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Os=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ci.add(this.host)}hostDisconnected(){ci.delete(this.host)}dir(){return`${this.host.dir||uo}`.toLowerCase()}lang(){return`${this.host.lang||po}`.toLowerCase()}getTranslationData(t){var i,r;const o=new Intl.Locale(t.replace(/_/g,"-")),s=o==null?void 0:o.language.toLowerCase(),n=(r=(i=o==null?void 0:o.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&r!==void 0?r:"",l=ft.get(`${s}-${n}`),a=ft.get(s);return{locale:o,language:s,region:n,primary:l,secondary:a}}exists(t,i){var r;const{primary:o,secondary:s}=this.getTranslationData((r=i.lang)!==null&&r!==void 0?r:this.lang());return i=Object.assign({includeFallback:!1},i),!!(o&&o[t]||s&&s[t]||i.includeFallback&&at&&at[t])}term(t,...i){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let s;if(r&&r[t])s=r[t];else if(o&&o[t])s=o[t];else if(at&&at[t])s=at[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...i):s}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,i)}};var mo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};go(mo);var Ns=mo,Ce=class extends Os{};go(Ns);var fo=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=i=>{const r=i.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Is=rt`
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
`,pt=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),X=class extends Z{constructor(){super(...arguments),this.hasSlotController=new fo(this,"icon","suffix"),this.localize=new Ce(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await er(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=Qi(this,"alert.show",{dir:this.localize.dir()});await tr(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await er(this.base);const{keyframes:e,options:t}=Qi(this,"alert.hide",{dir:this.localize.dir()});await tr(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,li(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,li(this,"sl-after-hide")}async toast(){return new Promise(e=>{pt.parentElement===null&&document.body.append(pt),pt.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{pt.removeChild(this),e(),pt.querySelector("sl-alert")===null&&pt.remove()},{once:!0})})}render(){return j`
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
    `}};X.styles=[Rt,Is];X.dependencies={"sl-icon-button":B};p([ae('[part~="base"]')],X.prototype,"base",2);p([f({type:Boolean,reflect:!0})],X.prototype,"open",2);p([f({type:Boolean,reflect:!0})],X.prototype,"closable",2);p([f({reflect:!0})],X.prototype,"variant",2);p([f({type:Number})],X.prototype,"duration",2);p([K("open",{waitUntilFirstUpdate:!0})],X.prototype,"handleOpenChange",1);p([K("duration")],X.prototype,"handleDurationChange",1);co("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});co("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});X.define("sl-alert");var Ds=rt`
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
    `}};Ei.styles=[Rt,Ds];var It=new WeakMap,Dt=new WeakMap,Ft=new WeakMap,Oe=new WeakSet,ce=new WeakMap,Fs=class{constructor(e,t){this.handleFormData=i=>{const r=this.options.disabled(this.host),o=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!n&&typeof o=="string"&&o.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(l=>{i.formData.append(o,l.toString())}):i.formData.append(o,s.toString()))},this.handleFormSubmit=i=>{var r;const o=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=It.get(this.form))==null||r.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!o&&!s(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ce.set(this.host,[])},this.handleInteraction=i=>{const r=ce.get(this.host);r.includes(i.type)||r.push(i.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const r of i)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const r of i)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Pt({form:i=>{const r=i.form;if(r){const s=i.getRootNode().querySelector(`#${r}`);if(s)return s}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var r;return(r=i.disabled)!=null?r:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,r)=>i.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),ce.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ce.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,It.has(this.form)?It.get(this.form).add(this.host):It.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Dt.has(this.form)||(Dt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ft.has(this.form)||(Ft.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=It.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Dt.has(this.form)&&(this.form.reportValidity=Dt.get(this.form),Dt.delete(this.form)),Ft.has(this.form)&&(this.form.checkValidity=Ft.get(this.form),Ft.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Oe.add(e):Oe.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&i.setAttribute(r,t.getAttribute(r))})),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,i=!!Oe.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Ci=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Ai(Pt({},Ci),{valid:!1,valueMissing:!0}));Object.freeze(Ai(Pt({},Ci),{valid:!1,customError:!0}));var Hs=rt`
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
`,$=class extends Z{constructor(){super(...arguments),this.formControlController=new Fs(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new fo(this,"[default]","prefix","suffix"),this.localize=new Ce(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ci}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?_e`a`:_e`button`;return ge`
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
        ${this.caret?ge` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ge`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};$.styles=[Rt,Hs];$.dependencies={"sl-icon":q,"sl-spinner":Ei};p([ae(".button")],$.prototype,"button",2);p([ut()],$.prototype,"hasFocus",2);p([ut()],$.prototype,"invalid",2);p([f()],$.prototype,"title",2);p([f({reflect:!0})],$.prototype,"variant",2);p([f({reflect:!0})],$.prototype,"size",2);p([f({type:Boolean,reflect:!0})],$.prototype,"caret",2);p([f({type:Boolean,reflect:!0})],$.prototype,"disabled",2);p([f({type:Boolean,reflect:!0})],$.prototype,"loading",2);p([f({type:Boolean,reflect:!0})],$.prototype,"outline",2);p([f({type:Boolean,reflect:!0})],$.prototype,"pill",2);p([f({type:Boolean,reflect:!0})],$.prototype,"circle",2);p([f()],$.prototype,"type",2);p([f()],$.prototype,"name",2);p([f()],$.prototype,"value",2);p([f()],$.prototype,"href",2);p([f()],$.prototype,"target",2);p([f()],$.prototype,"rel",2);p([f()],$.prototype,"download",2);p([f()],$.prototype,"form",2);p([f({attribute:"formaction"})],$.prototype,"formAction",2);p([f({attribute:"formenctype"})],$.prototype,"formEnctype",2);p([f({attribute:"formmethod"})],$.prototype,"formMethod",2);p([f({attribute:"formnovalidate",type:Boolean})],$.prototype,"formNoValidate",2);p([f({attribute:"formtarget"})],$.prototype,"formTarget",2);p([K("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);$.define("sl-button");function ir(e,t,i){const r=o=>Object.is(o,-0)?0:o;return e<t?r(t):e>i?r(i):r(e)}var js=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Bs=rt`
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
 */function*qs(e,t){if(e!==void 0){let i=0;for(const r of e)yield t(r,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ws(e,t,i=1){const r=t===void 0?0:e;t??(t=e);for(let o=r;i>0?o<t:t<o;o+=i)yield o}var Ks=(e,t)=>{let i=0;return function(...r){window.clearTimeout(i),i=window.setTimeout(()=>{e.call(this,...r)},t)}},rr=(e,t,i)=>{const r=e[t];e[t]=function(...o){r.call(this,...o),i.call(this,r,...o)}},Zs="onscrollend"in window;if(!Zs){const e=new Set,t=new WeakMap,i=o=>{for(const s of o.changedTouches)e.add(s.identifier)},r=o=>{for(const s of o.changedTouches)e.delete(s.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),rr(EventTarget.prototype,"addEventListener",function(o,s){if(s!=="scrollend")return;const n=Ks(()=>{e.size?n():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",n,{passive:!0}),t.set(this,n)}),rr(EventTarget.prototype,"removeEventListener",function(o,s){if(s!=="scrollend")return;const n=t.get(this);n&&o.call(this,"scroll",n,{passive:!0})})}var z=class extends Z{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new js(this,()=>this.next()),this.localize=new Ce(this),this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const r=e.scrollLeft,o=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==r||i!==o)&&(e.scrollTo({left:r,top:o,behavior:hi()?"auto":"smooth"}),await li(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(i=>[...i.addedNodes,...i.removedNodes].some(r=>this.isCarouselItem(r)&&!r.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:i,loop:r}=this,o=r?e/i:(e-t)/i+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,i=this.localize.dir()==="rtl",r=t.closest('[part~="pagination-item"]')!==null,o=e.key==="ArrowDown"||!i&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft",s=e.key==="ArrowUp"||!i&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight";e.preventDefault(),s&&this.previous(),o&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{var n;const l=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const r of t){const o=r.target;o.toggleAttribute("inert",!r.isIntersecting),o.classList.toggle("--in-view",r.isIntersecting),o.setAttribute("aria-hidden",r.isIntersecting?"false":"true")}const i=t.find(r=>r.isIntersecting);if(i)if(this.loop&&i.target.hasAttribute("data-clone")){const r=Number(i.target.getAttribute("data-clone"));this.goToSlide(r,"instant")}else{const o=this.getSlides().indexOf(i.target);this.activeSlide=Math.ceil(o/this.slidesPerMove)*this.slidesPerMove}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1)}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.synchronizeSlides(),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,i=e.slice(-t),r=e.slice(0,t);i.reverse().forEach((o,s)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(e.length-s-1)),this.prepend(n)}),r.forEach((o,s)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(s)),this.append(n)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,i)=>{t.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((i,r)=>{(r+t)%t===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:i,loop:r}=this,o=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!o.length)return;const n=r?(e+o.length)%o.length:ir(e,0,o.length-1);this.activeSlide=n;const l=ir(e+(r?i:0),0,s.length-1),a=s[l];this.scrollToSlide(a,hi()?"auto":t)}scrollToSlide(e,t="smooth"){const i=this.scrollContainer,r=i.getBoundingClientRect(),o=e.getBoundingClientRect(),s=o.left-r.left,n=o.top-r.top;i.scrollTo({left:s+i.scrollLeft,top:n+i.scrollTop,behavior:t})}render(){const{slidesPerMove:e,scrolling:t}=this,i=this.getPageCount(),r=this.getCurrentPage(),o=this.canScrollPrev(),s=this.canScrollNext(),n=this.localize.dir()==="ltr";return j`
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
                  class="${tt({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
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
                ${qs(Ws(i),l=>{const a=l===r;return j`
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
    `}};z.styles=[Rt,Bs];z.dependencies={"sl-icon":q};p([f({type:Boolean,reflect:!0})],z.prototype,"loop",2);p([f({type:Boolean,reflect:!0})],z.prototype,"navigation",2);p([f({type:Boolean,reflect:!0})],z.prototype,"pagination",2);p([f({type:Boolean,reflect:!0})],z.prototype,"autoplay",2);p([f({type:Number,attribute:"autoplay-interval"})],z.prototype,"autoplayInterval",2);p([f({type:Number,attribute:"slides-per-page"})],z.prototype,"slidesPerPage",2);p([f({type:Number,attribute:"slides-per-move"})],z.prototype,"slidesPerMove",2);p([f()],z.prototype,"orientation",2);p([f({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],z.prototype,"mouseDragging",2);p([ae(".carousel__slides")],z.prototype,"scrollContainer",2);p([ae(".carousel__pagination")],z.prototype,"paginationContainer",2);p([ut()],z.prototype,"activeSlide",2);p([ut()],z.prototype,"scrolling",2);p([ut()],z.prototype,"dragging",2);p([zs({passive:!0})],z.prototype,"handleScroll",1);p([K("loop",{waitUntilFirstUpdate:!0}),K("slidesPerPage",{waitUntilFirstUpdate:!0})],z.prototype,"initializeSlides",1);p([K("activeSlide")],z.prototype,"handelSlideChange",1);p([K("slidesPerMove")],z.prototype,"updateSlidesSnap",1);p([K("autoplay")],z.prototype,"handleAutoplayChange",1);z.define("sl-carousel");Ei.define("sl-spinner");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=window,ki=ve.ShadowRoot&&(ve.ShadyCSS===void 0||ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zi=Symbol(),or=new WeakMap;let bo=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==zi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(ki&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=or.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&or.set(i,t))}return t}toString(){return this.cssText}};const _o=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new bo(i,e,zi)},sr=ki?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return(r=>new bo(typeof r=="string"?r:r+"",void 0,zi))(i)})(e):e;var Ne;const ye=window,nr=ye.trustedTypes,Xs=nr?nr.emptyScript:"",ar=ye.reactiveElementPolyfillSupport,di={toAttribute(e,t){switch(t){case Boolean:e=e?Xs:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},yo=(e,t)=>t!==e&&(t==t||e==e),Ie={attribute:!0,type:String,converter:di,reflect:!1,hasChanged:yo};let vt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,r)=>{const o=this._$Ep(r,i);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,i=Ie){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,i);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,i,r){return{get(){return this[i]},set(o){const s=this[t];this[i]=o,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ie}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,r=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of r)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)i.unshift(sr(o))}else t!==void 0&&i.push(sr(t));return i}static _$Ep(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,r;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((r,o)=>{ki?r.adoptedStyleSheets=o.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):o.forEach(s=>{const n=document.createElement("style"),l=ve.litNonce;l!==void 0&&n.setAttribute("nonce",l),n.textContent=s.cssText,r.appendChild(n)})})(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostConnected)===null||r===void 0?void 0:r.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostDisconnected)===null||r===void 0?void 0:r.call(i)})}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$EO(t,i,r=Ie){var o;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:di).toAttribute(i,r.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,i){var r;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=o.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:di;this._$El=s,this[s]=l.fromAttribute(i,n.type),this._$El=null}}requestUpdate(t,i,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||yo)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let i=!1;const r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(r)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(r)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,r)=>this._$EO(r,this[r],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De;vt.finalized=!0,vt.elementProperties=new Map,vt.elementStyles=[],vt.shadowRootOptions={mode:"open"},ar==null||ar({ReactiveElement:vt}),((Ne=ye.reactiveElementVersions)!==null&&Ne!==void 0?Ne:ye.reactiveElementVersions=[]).push("1.6.1");const we=window,St=we.trustedTypes,lr=St?St.createPolicy("lit-html",{createHTML:e=>e}):void 0,G=`lit$${(Math.random()+"").slice(9)}$`,wo="?"+G,Ys=`<${wo}>`,xt=document,ie=(e="")=>xt.createComment(e),re=e=>e===null||typeof e!="object"&&typeof e!="function",hr=Array.isArray,Ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cr=/-->/g,dr=/>/g,st=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ur=/'/g,pr=/"/g,gr=/^(?:script|style|textarea|title)$/i,Tt=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),At=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),vr=new WeakMap,_t=xt.createTreeWalker(xt,129,null,!1);let ui=class $o{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let s=0,n=0;const l=t.length-1,a=this.parts,[h,d]=((c,u)=>{const g=c.length-1,b=[];let w,m=u===2?"<svg>":"",y=Ht;for(let k=0;k<g;k++){const F=c[k];let A,S,P=-1,x=0;for(;x<F.length&&(y.lastIndex=x,S=y.exec(F),S!==null);)x=y.lastIndex,y===Ht?S[1]==="!--"?y=cr:S[1]!==void 0?y=dr:S[2]!==void 0?(gr.test(S[2])&&(w=RegExp("</"+S[2],"g")),y=st):S[3]!==void 0&&(y=st):y===st?S[0]===">"?(y=w??Ht,P=-1):S[1]===void 0?P=-2:(P=y.lastIndex-S[2].length,A=S[1],y=S[3]===void 0?st:S[3]==='"'?pr:ur):y===pr||y===ur?y=st:y===cr||y===dr?y=Ht:(y=st,w=void 0);const le=y===st&&c[k+1].startsWith("/>")?" ":"";m+=y===Ht?F+Ys:P>=0?(b.push(A),F.slice(0,P)+"$lit$"+F.slice(P)+G+le):F+G+(P===-2?(b.push(void 0),k):le)}const R=m+(c[g]||"<?>")+(u===2?"</svg>":"");if(!Array.isArray(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return[lr!==void 0?lr.createHTML(R):R,b]})(t,i);if(this.el=$o.createElement(h,r),_t.currentNode=this.el.content,i===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(o=_t.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const u of o.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(G)){const g=d[n++];if(c.push(u),g!==void 0){const b=o.getAttribute(g.toLowerCase()+"$lit$").split(G),w=/([.?@])?(.*)/.exec(g);a.push({type:1,index:s,name:w[2],strings:b,ctor:w[1]==="."?Gs:w[1]==="?"?Qs:w[1]==="@"?tn:ke})}else a.push({type:6,index:s})}for(const u of c)o.removeAttribute(u)}if(gr.test(o.tagName)){const c=o.textContent.split(G),u=c.length-1;if(u>0){o.textContent=St?St.emptyScript:"";for(let g=0;g<u;g++)o.append(c[g],ie()),_t.nextNode(),a.push({type:2,index:++s});o.append(c[u],ie())}}}else if(o.nodeType===8)if(o.data===wo)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(G,c+1))!==-1;)a.push({type:7,index:s}),c+=G.length-1}s++}}static createElement(t,i){const r=xt.createElement("template");return r.innerHTML=t,r}};function Et(e,t,i=e,r){var o,s,n,l;if(t===At)return t;let a=r!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[r]:i._$Cl;const h=re(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),h===void 0?a=void 0:(a=new h(e),a._$AT(e,i,r)),r!==void 0?((n=(l=i)._$Co)!==null&&n!==void 0?n:l._$Co=[])[r]=a:i._$Cl=a),a!==void 0&&(t=Et(e,a._$AS(e,t.values),a,r)),t}let Pi=class So{constructor(t,i,r,o){var s;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this._$Cm=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Et(this,t,i),re(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==At&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(r=>hr(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function")(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==M&&re(this._$AH)?this._$AA.nextSibling.data=t:this.T(xt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ui.createElement(o.h,this.options)),o);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(r);else{const n=new class{constructor(a,h){this.u=[],this._$AN=void 0,this._$AD=a,this._$AM=h}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(a){var h;const{el:{content:d},parts:c}=this._$AD,u=((h=a==null?void 0:a.creationScope)!==null&&h!==void 0?h:xt).importNode(d,!0);_t.currentNode=u;let g=_t.nextNode(),b=0,w=0,m=c[0];for(;m!==void 0;){if(b===m.index){let y;m.type===2?y=new Pi(g,g.nextSibling,this,a):m.type===1?y=new m.ctor(g,m.name,m.strings,this,a):m.type===6&&(y=new en(g,this,a)),this.u.push(y),m=c[++w]}b!==(m==null?void 0:m.index)&&(g=_t.nextNode(),b++)}return u}p(a){let h=0;for(const d of this.u)d!==void 0&&(d.strings!==void 0?(d._$AI(a,d,h),h+=d.strings.length-2):d._$AI(a[h])),h++}}(s,this),l=n.v(this.options);n.p(r),this.T(l),this._$AH=n}}_$AC(t){let i=vr.get(t.strings);return i===void 0&&vr.set(t.strings,i=new ui(t)),i}k(t){hr(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const s of t)o===i.length?i.push(r=new So(this.O(ie()),this.O(ie()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},ke=class{constructor(e,t,i,r,o){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const o=this.strings;let s=!1;if(o===void 0)e=Et(this,e,t,0),s=!re(e)||e!==this._$AH&&e!==At,s&&(this._$AH=e);else{const n=e;let l,a;for(e=o[0],l=0;l<o.length-1;l++)a=Et(this,n[i+l],t,l),a===At&&(a=this._$AH[l]),s||(s=!re(a)||a!==this._$AH[l]),a===M?e=M:e!==M&&(e+=(a??"")+o[l+1]),this._$AH[l]=a}s&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Gs=class extends ke{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}};const Js=St?St.emptyScript:"";let Qs=class extends ke{constructor(){super(...arguments),this.type=4}j(e){e&&e!==M?this.element.setAttribute(this.name,Js):this.element.removeAttribute(this.name)}},tn=class extends ke{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=Et(this,e,t,0))!==null&&i!==void 0?i:M)===At)return;const r=this._$AH,o=e===M&&r!==M||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==M&&(r===M||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},en=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Et(this,e)}};const mr=we.litHtmlPolyfillSupport;mr==null||mr(ui,Pi),((De=we.litHtmlVersions)!==null&&De!==void 0?De:we.litHtmlVersions=[]).push("2.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fe,He;let yt=class extends vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((i,r,o)=>{var s,n;const l=(s=o==null?void 0:o.renderBefore)!==null&&s!==void 0?s:r;let a=l._$litPart$;if(a===void 0){const h=(n=o==null?void 0:o.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=a=new Pi(r.insertBefore(ie(),h),h,void 0,o??{})}return a._$AI(i),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return At}};yt.finalized=!0,yt._$litElement$=!0,(Fe=globalThis.litElementHydrateSupport)===null||Fe===void 0||Fe.call(globalThis,{LitElement:yt});const fr=globalThis.litElementPolyfillSupport;fr==null||fr({LitElement:yt}),((He=globalThis.litElementVersions)!==null&&He!==void 0?He:globalThis.litElementVersions=[]).push("3.2.2");var je,Be,me=window,Ri=me.ShadowRoot&&(me.ShadyCSS===void 0||me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ti=Symbol(),br=new WeakMap,xo=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ti)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ri&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=br.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&br.set(t,e))}return e}toString(){return this.cssText}},qe=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new xo(i,e,Ti)},_r=Ri?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return(r=>new xo(typeof r=="string"?r:r+"",void 0,Ti))(i)})(e):e,$e=window,yr=$e.trustedTypes,rn=yr?yr.emptyScript:"",wr=$e.reactiveElementPolyfillSupport,oe={toAttribute(e,t){switch(t){case Boolean:e=e?rn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Ao=(e,t)=>t!==e&&(t==t||e==e),We={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:Ao},mt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=We){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||We}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(_r(r))}else e!==void 0&&t.push(_r(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{Ri?i.adoptedStyleSheets=r.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):r.forEach(o=>{const s=document.createElement("style"),n=me.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=o.cssText,i.appendChild(s)})})(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=We){var r;const o=this.constructor._$Ep(e,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:oe).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,o=r._$Ev.get(e);if(o!==void 0&&this._$El!==o){const s=r.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:oe;this._$El=o,this[o]=n.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ao)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};mt.finalized=!0,mt.elementProperties=new Map,mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},wr==null||wr({ReactiveElement:mt}),((je=$e.reactiveElementVersions)!==null&&je!==void 0?je:$e.reactiveElementVersions=[]).push("1.6.1");var $r,Se=window,Ct=Se.trustedTypes,Sr=Ct?Ct.createPolicy("lit-html",{createHTML:e=>e}):void 0,J=`lit$${(Math.random()+"").slice(9)}$`,Eo="?"+J,on=`<${Eo}>`,kt=document,se=(e="")=>kt.createComment(e),ne=e=>e===null||typeof e!="object"&&typeof e!="function",xr=Array.isArray,jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ar=/-->/g,Er=/>/g,nt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cr=/'/g,kr=/"/g,zr=/^(?:script|style|textarea|title)$/i,Pr=($r=1,(e,...t)=>({_$litType$:$r,strings:e,values:t})),W=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Rr=new WeakMap,wt=kt.createTreeWalker(kt,129,null,!1),xe=class{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,s=0;const n=e.length-1,l=this.parts,[a,h]=((d,c)=>{const u=d.length-1,g=[];let b,w=c===2?"<svg>":"",m=jt;for(let R=0;R<u;R++){const k=d[R];let F,A,S=-1,P=0;for(;P<k.length&&(m.lastIndex=P,A=m.exec(k),A!==null);)P=m.lastIndex,m===jt?A[1]==="!--"?m=Ar:A[1]!==void 0?m=Er:A[2]!==void 0?(zr.test(A[2])&&(b=RegExp("</"+A[2],"g")),m=nt):A[3]!==void 0&&(m=nt):m===nt?A[0]===">"?(m=b??jt,S=-1):A[1]===void 0?S=-2:(S=m.lastIndex-A[2].length,F=A[1],m=A[3]===void 0?nt:A[3]==='"'?kr:Cr):m===kr||m===Cr?m=nt:m===Ar||m===Er?m=jt:(m=nt,b=void 0);const x=m===nt&&d[R+1].startsWith("/>")?" ":"";w+=m===jt?k+on:S>=0?(g.push(F),k.slice(0,S)+"$lit$"+k.slice(S)+J+x):k+J+(S===-2?(g.push(void 0),R):x)}const y=w+(d[u]||"<?>")+(c===2?"</svg>":"");if(!Array.isArray(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Sr!==void 0?Sr.createHTML(y):y,g]})(e,t);if(this.el=xe.createElement(a,i),wt.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(r=wt.nextNode())!==null&&l.length<n;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const c of r.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(J)){const u=h[s++];if(d.push(c),u!==void 0){const g=r.getAttribute(u.toLowerCase()+"$lit$").split(J),b=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:b[2],strings:g,ctor:b[1]==="."?sn:b[1]==="?"?an:b[1]==="@"?ln:ze})}else l.push({type:6,index:o})}for(const c of d)r.removeAttribute(c)}if(zr.test(r.tagName)){const d=r.textContent.split(J),c=d.length-1;if(c>0){r.textContent=Ct?Ct.emptyScript:"";for(let u=0;u<c;u++)r.append(d[u],se()),wt.nextNode(),l.push({type:2,index:++o});r.append(d[c],se())}}}else if(r.nodeType===8)if(r.data===Eo)l.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(J,d+1))!==-1;)l.push({type:7,index:o}),d+=J.length-1}o++}}static createElement(e,t){const i=kt.createElement("template");return i.innerHTML=e,i}};function zt(e,t,i=e,r){var o,s,n,l;if(t===W)return t;let a=r!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[r]:i._$Cl;const h=ne(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),h===void 0?a=void 0:(a=new h(e),a._$AT(e,i,r)),r!==void 0?((n=(l=i)._$Co)!==null&&n!==void 0?n:l._$Co=[])[r]=a:i._$Cl=a),a!==void 0&&(t=zt(e,a._$AS(e,t.values),a,r)),t}var Ae=class{constructor(e,t,i,r){var o;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cm=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=zt(this,e,t),ne(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==W&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):(i=>xr(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function")(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==T&&ne(this._$AH)?this._$AA.nextSibling.data=e:this.T(kt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=xe.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(i);else{const s=new class{constructor(l,a){this.u=[],this._$AN=void 0,this._$AD=l,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(l){var a;const{el:{content:h},parts:d}=this._$AD,c=((a=l==null?void 0:l.creationScope)!==null&&a!==void 0?a:kt).importNode(h,!0);wt.currentNode=c;let u=wt.nextNode(),g=0,b=0,w=d[0];for(;w!==void 0;){if(g===w.index){let m;w.type===2?m=new Ae(u,u.nextSibling,this,l):w.type===1?m=new w.ctor(u,w.name,w.strings,this,l):w.type===6&&(m=new hn(u,this,l)),this.u.push(m),w=d[++b]}g!==(w==null?void 0:w.index)&&(u=wt.nextNode(),g++)}return c}p(l){let a=0;for(const h of this.u)h!==void 0&&(h.strings!==void 0?(h._$AI(l,h,a),a+=h.strings.length-2):h._$AI(l[a])),a++}}(o,this),n=s.v(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(e){let t=Rr.get(e.strings);return t===void 0&&Rr.set(e.strings,t=new xe(e)),t}k(e){xr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new Ae(this.O(se()),this.O(se()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ze=class{constructor(e,t,i,r,o){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const o=this.strings;let s=!1;if(o===void 0)e=zt(this,e,t,0),s=!ne(e)||e!==this._$AH&&e!==W,s&&(this._$AH=e);else{const n=e;let l,a;for(e=o[0],l=0;l<o.length-1;l++)a=zt(this,n[i+l],t,l),a===W&&(a=this._$AH[l]),s||(s=!ne(a)||a!==this._$AH[l]),a===T?e=T:e!==T&&(e+=(a??"")+o[l+1]),this._$AH[l]=a}s&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},sn=class extends ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},nn=Ct?Ct.emptyScript:"",an=class extends ze{constructor(){super(...arguments),this.type=4}j(e){e&&e!==T?this.element.setAttribute(this.name,nn):this.element.removeAttribute(this.name)}},ln=class extends ze{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=zt(this,e,t,0))!==null&&i!==void 0?i:T)===W)return;const r=this._$AH,o=e===T&&r!==T||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==T&&(r===T||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},hn=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){zt(this,e)}},Tr=Se.litHtmlPolyfillSupport;Tr==null||Tr(xe,Ae),((Be=Se.litHtmlVersions)!==null&&Be!==void 0?Be:Se.litHtmlVersions=[]).push("2.6.1");var Ke,Ze,Gt=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((i,r,o)=>{var s,n;const l=(s=o==null?void 0:o.renderBefore)!==null&&s!==void 0?s:r;let a=l._$litPart$;if(a===void 0){const h=(n=o==null?void 0:o.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=a=new Ae(r.insertBefore(se(),h),h,void 0,o??{})}return a._$AI(i),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return W}};Gt.finalized=!0,Gt._$litElement$=!0,(Ke=globalThis.litElementHydrateSupport)===null||Ke===void 0||Ke.call(globalThis,{LitElement:Gt});var Vr=globalThis.litElementPolyfillSupport;Vr==null||Vr({LitElement:Gt}),((Ze=globalThis.litElementVersions)!==null&&Ze!==void 0?Ze:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var Jt,cn=qe`
  ${qe`
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
  ${qe`
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
`,pi=1,Lr=3,Mr=4,Co=e=>(...t)=>({_$litDirective$:e,values:t}),ko=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},dn={},un=Co(class extends ko{constructor(e){if(super(e),e.type!==Lr&&e.type!==pi&&e.type!==Mr)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>t.strings===void 0)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===W||t===T)return t;const i=e.element,r=e.name;if(e.type===Lr){if(t===i[r])return W}else if(e.type===Mr){if(!!t===i.hasAttribute(r))return W}else if(e.type===pi&&i.getAttribute(r)===t+"")return W;return((o,s=dn)=>{o._$AH=s})(e),t}}),zo=Object.defineProperty,pn=Object.defineProperties,gn=Object.getOwnPropertyDescriptor,vn=Object.getOwnPropertyDescriptors,Ur=Object.getOwnPropertySymbols,mn=Object.prototype.hasOwnProperty,fn=Object.prototype.propertyIsEnumerable,Or=(e,t,i)=>t in e?zo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Vt=(e,t)=>{for(var i in t||(t={}))mn.call(t,i)&&Or(e,i,t[i]);if(Ur)for(var i of Ur(t))fn.call(t,i)&&Or(e,i,t[i]);return e},Vi=(e,t)=>pn(e,vn(t)),C=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?gn(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&zo(t,i,s),s},Bt=new WeakMap,Nr=new WeakMap,qt=new WeakMap,gi=new Set,bn=new MutationObserver(To),bt=new Map,Po=document.documentElement.dir||"ltr",Ro=document.documentElement.lang||navigator.language;function To(){Po=document.documentElement.dir||"ltr",Ro=document.documentElement.lang||navigator.language,[...gi.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}bn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var _n=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){gi.add(this.host)}hostDisconnected(){gi.delete(this.host)}dir(){return`${this.host.dir||Po}`.toLowerCase()}lang(){return`${this.host.lang||Ro}`.toLowerCase()}term(e,...t){var i,r;const o=new Intl.Locale(this.lang()),s=o==null?void 0:o.language.toLowerCase(),n=(r=(i=o==null?void 0:o.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&r!==void 0?r:"",l=bt.get(`${s}-${n}`),a=bt.get(s);let h;if(l&&l[e])h=l[e];else if(a&&a[e])h=a[e];else{if(!Jt||!Jt[e])return console.error(`No translation found for: ${String(e)}`),String(e);h=Jt[e]}return typeof h=="function"?h(...t):h}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}},yn=class extends _n{};(function(...e){e.map(t=>{const i=t.$code.toLowerCase();bt.has(i)?bt.set(i,Object.assign(Object.assign({},bt.get(i)),t)):bt.set(i,t),Jt||(Jt=t)}),To()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var de=e=>e??T;function Xe(e,t){const i=Vt({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:s}=r,n=Array.isArray(e)?e:[e];r.update=function(l){n.forEach(a=>{const h=a;if(l.has(h)){const d=l.get(h),c=this[h];d!==c&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](d,c))}}),s.call(this,l)}}}var Ir=Co(class extends ko{constructor(e){var t;if(super(e),e.type!==pi||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,r;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.nt.add(s);return this.render(t)}const o=e.element.classList;this.nt.forEach(s=>{s in t||(o.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((r=this.st)===null||r===void 0)&&r.has(s)||(n?(o.add(s),this.nt.add(s)):(o.remove(s),this.nt.delete(s)))}return W}}),wn=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Vi(Vt({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function N(e){return(t,i)=>i!==void 0?((r,o,s)=>{o.constructor.createProperty(s,r)})(e,t,i):wn(e,t)}function Dr(e){return N(Vi(Vt({},e),{state:!0}))}var Ye,$n=({finisher:e,descriptor:t})=>(i,r)=>{var o;if(r===void 0){const s=(o=i.originalKey)!==null&&o!==void 0?o:i.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:Vi(Vt({},i),{key:s});return e!=null&&(n.finisher=function(l){e(l,s)}),n}{const s=i.constructor;t!==void 0&&Object.defineProperty(i,r,t(r)),e==null||e(s,r)}};function Fr(e,t){return $n({descriptor:i=>{const r={get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const o=typeof i=="symbol"?Symbol():"__"+i;r.get=function(){var s,n;return this[o]===void 0&&(this[o]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[o]}}return r}})}(Ye=window.HTMLSlotElement)===null||Ye===void 0||Ye.prototype.assignedElements;var vi=class extends Gt{emit(e,t){const i=new CustomEvent(e,Vt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}};C([N()],vi.prototype,"dir",2),C([N()],vi.prototype,"lang",2);/*! Bundled license information:

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
*/var Ge,E=class extends vi{constructor(){super(...arguments),this.formControlController=new class{constructor(e,t){(this.host=e).addController(this),this.options=Vt({form:i=>{if(i.hasAttribute("form")&&i.getAttribute("form")!==""){const r=i.getRootNode(),o=i.getAttribute("form");if(o)return r.getElementById(o)}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var r;return(r=i.disabled)!=null&&r},reportValidity:i=>typeof i.reportValidity!="function"||i.reportValidity(),setValue:(i,r)=>i.value=r},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(e){e?(this.form=e,Bt.has(this.form)?Bt.get(this.form).add(this.host):Bt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),qt.has(this.form)||(qt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=Bt.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),qt.has(this.form)&&(this.form.reportValidity=qt.get(this.form),qt.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),i=this.options.name(this.host),r=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";!t&&!o&&typeof i=="string"&&i.length>0&&r!==void 0&&(Array.isArray(r)?r.forEach(s=>{e.formData.append(i,s.toString())}):e.formData.append(i,r.toString()))}handleFormSubmit(e){var t;const i=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=Bt.get(this.form))==null||t.forEach(o=>{this.setUserInteracted(o,!0)})),!this.form||this.form.noValidate||i||r(this.host)||(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){Nr.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&i.setAttribute(r,t.getAttribute(r))})),this.form.append(i),i.click(),i.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){var t;const i=this.host,r=!!Nr.get(i),o=!!i.required;(t=this.form)!=null&&t.noValidate?(i.removeAttribute("data-required"),i.removeAttribute("data-optional"),i.removeAttribute("data-invalid"),i.removeAttribute("data-valid"),i.removeAttribute("data-user-invalid"),i.removeAttribute("data-user-valid")):(i.toggleAttribute("data-required",o),i.toggleAttribute("data-optional",!o),i.toggleAttribute("data-invalid",!e),i.toggleAttribute("data-valid",e),i.toggleAttribute("data-user-invalid",!e&&r),i.toggleAttribute("data-user-valid",e&&r))}updateValidity(){const e=this.host;this.setValidity(e.checkValidity())}}(this),this.hasSlotController=new class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}}(this,"help-text","label"),this.localize=new yn(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",100*e+"%")}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,i=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=t*e;if(this.localize.dir()==="rtl"){const s=`${t-o}px + ${e} * ${r}`;this.output.style.translate=`calc((${s} - ${i/2}px - ${r} / 2))`}else{const s=`${o}px - ${e} * ${r}`;this.output.style.translate=`calc(${s} - ${i/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,r=!!this.helpText||!!t;return Pr`
      <div
        part="form-control"
        class=${Ir({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":r})}
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
            class=${Ir({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
            ${this.tooltip==="none"||this.disabled?"":Pr`
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
    `}};function Hr(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}E.styles=cn,C([Fr(".range__control")],E.prototype,"input",2),C([Fr(".range__tooltip")],E.prototype,"output",2),C([Dr()],E.prototype,"hasFocus",2),C([Dr()],E.prototype,"hasTooltip",2),C([N()],E.prototype,"title",2),C([N()],E.prototype,"name",2),C([N({type:Number})],E.prototype,"value",2),C([N()],E.prototype,"label",2),C([N({attribute:"help-text"})],E.prototype,"helpText",2),C([N({type:Boolean,reflect:!0})],E.prototype,"disabled",2),C([N({type:Number})],E.prototype,"min",2),C([N({type:Number})],E.prototype,"max",2),C([N({type:Number})],E.prototype,"step",2),C([N()],E.prototype,"tooltip",2),C([N({attribute:!1})],E.prototype,"tooltipFormatter",2),C([N({reflect:!0})],E.prototype,"form",2),C([((e="value")=>(t,i)=>{const r=t.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(s,n,l){var a;const h=r.getPropertyOptions(e);if(s===(typeof h.attribute=="string"?h.attribute:e)){const d=h.converter||oe,c=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:oe.fromAttribute)(l,h.type);this[e]!==c&&(this[i]=c)}o.call(this,s,n,l)}})()],E.prototype,"defaultValue",2),C([Xe("value",{waitUntilFirstUpdate:!0})],E.prototype,"handleValueChange",1),C([Xe("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1),C([Xe("hasTooltip",{waitUntilFirstUpdate:!0})],E.prototype,"syncRange",1),E=C([(Ge="sl-range",e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(Ge,e):((t,i)=>{const{kind:r,elements:o}=i;return{kind:r,elements:o,finisher(s){customElements.define(t,s)}}})(Ge,e))],E);var Wt=function(){try{window[I].updateSegments();var e=function(){if(!Je)return Je=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){Je=t,window[I].dispatchEvent(new Event("change"))})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},I="__foldables__",Je=!1,Li=function(){function e(){var r=this;if(window[I]!==void 0)return window[I];var o=document.createDocumentFragment();this.addEventListener=o.addEventListener.bind(o),this.removeEventListener=o.removeEventListener.bind(o),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof r[n]=="function"&&r[n](s),o.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(r,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var l;return function(){var a=arguments,h=this;clearTimeout(l),l=setTimeout(function(){return s.apply(h,a)},n)}}(Wt(),200)})}var t,i=e.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var r=[];if(this.verticalViewportSegments>1)for(var o=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,l=o/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)r[a]={top:s,left:0,bottom:s+l,right:n,width:n,height:l},s+=r[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var h=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)r[u]={top:0,left:c,right:c+h,bottom:d,width:h,height:d},c+=r[u].width,c+=this.foldSize;window.visualViewport.segments=r},i.randomizeSegmentsConfiguration=function(r){var o=Math.random()<.5,s=Math.round(Math.random()*(r-1)+1);o?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(I+"-horizontal-viewport-segments")||1},set:function(r){if(isNaN(r))throw new TypeError(r);sessionStorage.setItem(I+"-horizontal-viewport-segments",r),Wt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(I+"-vertical-viewport-segments")||1},set:function(r){if(isNaN(r))throw new TypeError(r);sessionStorage.setItem(I+"-vertical-viewport-segments",r),Wt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(I+"-fold-size")||0},set:function(r){if(!(Number(r)>=0))throw new TypeError(r);sessionStorage.setItem(I+"-fold-size",r),Wt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(I+"-browser-shell-size")||0},set:function(r){if(!(Number(r)>=0))throw new TypeError(r);sessionStorage.setItem(I+"-browser-shell-size",r),Wt()}}])&&function(r,o){for(var s=0;s<o.length;s++){var n=o[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}(e.prototype,t),e}();window[I]=new Li,window.visualViewport.segments===void 0&&window[I].updateSegments();var Vo="-viewport-segments",mi="(\\s*)(@media.*?\\b"+Vo+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",Sn=/\((.*?)\)/gi,xn=/@media[^\(]+/gi,An=/(horizontal-viewport-segments:)\s?(\d)/gi,En=/(vertical-viewport-segments:)\s?(\d)/gi,Cn=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")};function jr(e,t){var i=e.matchAll(t);return i===null?[]:Array.from(i,function(r){return r[2]})[0]}function kn(e){var t=function(r){var o,s=new RegExp(mi,"gi");if(typeof r.matchAll=="function")o=Array.from(r.matchAll(s));else{for(o=[];o[o.length]=s.exec(r););o.length--}return o}(e),i=[[]];return t.forEach(function(r){var o=r[1],s=r[2],n=r[3],l=r[4],a=s.match(xn)||[],h=s.match(Sn)||[],d=jr(s,En);d===void 0&&(d=1);var c=jr(s,An);c===void 0&&(c=1),h=h.filter(function(u){return!u.includes(Vo)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][c]=""+o+a+h+"{"+n+l+"}"}),i}var fi=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+fi);var Br,Lo=new Li;if(!fi){var Qe=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Br=Qe,Promise.all(Br.map(function(e){return e.href?fetch(e.href).then(function(t){return t.text()}):e.textContent}))).then(function(e){var t=new DocumentFragment;e.forEach(function(i,r){for(var o,s=function(R,k){return R.replace(new RegExp(mi,"gi"),k)}(i,""),n=kn(i),l=Qe[r].href||"inline",a=0,h=Object.entries(n);a<h.length;a++){var d=h[a],c=d[0],u=d[1];Qt[c]==null&&(Qt[c]=[]);for(var g=0,b=Object.entries(u);g<b.length;g++){var w=b[g];Qt[c][w[0]]="/* origin: "+l+" */"+w[1]}}if(l=="inline"||(o=i,new RegExp(mi,"gi").test(o))){var m=document.createElement("style");m.setAttribute("data-css-origin",l),m.textContent=s,t.appendChild(m)}else{var y=document.createElement("link");y.type="text/css",y.rel="stylesheet",y.href=l,t.appendChild(y)}}),Qe.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(t),function(i){fi||(qr(i),Lo.addEventListener("change",function(){return qr(i)}))}()})}var Qt=[[]];function qr(e){var t,i=Lo,r=null;(t=e?Qt[e.nodeName.toLowerCase()]:Qt)[i.verticalViewportSegments]&&(r=t[i.verticalViewportSegments][i.horizontalViewportSegments]);var o,s=t[0][0]?t[0][0]:null;if(r){var n=window.visualViewport.segments,l=!1;n.length>1&&(l=!(n[0].height<window.innerHeight));for(var a=0,h=Object.entries(n);a<h.length;a++)for(var d=h[a],c=d[0],u=0,g=Object.entries(d[1]);u<g.length;u++){var b=g[u],w=b[0];o=b[1]+"px",r=r.replace(Cn(l?"viewport-segment-"+w+" "+c+" 0":"viewport-segment-"+w+" 0 "+c),o)}var m="__foldables_sheet__",y=function(k,F){for(var A,S=function(x,le){var O=typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"];if(O)return(O=O.call(x)).next.bind(O);if(Array.isArray(x)||(O=function(U,Ut){if(U){if(typeof U=="string")return Hr(U,Ut);var H=Object.prototype.toString.call(U).slice(8,-1);return H==="Object"&&U.constructor&&(H=U.constructor.name),H==="Map"||H==="Set"?Array.from(U):H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H)?Hr(U,Ut):void 0}}(x))){O&&(x=O);var Mt=0;return function(){return Mt>=x.length?{done:!0}:{done:!1,value:x[Mt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(k.querySelectorAll("."+m));!(A=S()).done;)A.value.remove();var P=document.createElement("style");P.className=m,P.textContent=F,k===document?document.head.appendChild(P):k.appendChild(P)};if(e){var R=e.shadowRoot;"adoptedStyleSheets"in R&&R.adoptedStyleSheets.length>0?R.adoptedStyleSheets[0].replace(s+r):y(R,r)}else y(document,r)}}const Y={Foldable:"foldable",Dual:"dual"};class Lt extends yt{}v(Lt,"styles",_o`
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
  `);customElements.define("close-icon",class extends Lt{render(){return Tt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}});customElements.define("fullscreen-icon",class extends Lt{render(){return Tt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}});customElements.define("splitview-icon",class extends Lt{render(){return Tt`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}});customElements.define("rotate-icon",class extends Lt{render(){return Tt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}});customElements.define("minimize-icon",class extends Lt{render(){return Tt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}});class Mo extends yt{constructor(){super();v(this,"_mini_configurator_header");v(this,"_mini_configurator");v(this,"_configurator");v(this,"_configurator_header");v(this,"_device_type_select");v(this,"_orientation_select");v(this,"_seam_slider");v(this,"_seam_container");v(this,"_preview");v(this,"_preview_container");v(this,"_device");v(this,"_frame");v(this,"_device_hinge");v(this,"_currentOrientation");v(this,"_currentDevice");v(this,"_isFullscreen",!1);v(this,"_verticalViewportSegments",1);v(this,"_horizontalViewportSegments",1);v(this,"_fold_width");v(this,"_browser_shell_size");v(this,"_x",0);v(this,"_y",0);v(this,"_offset_x",0);v(this,"_offset_y",0);v(this,"_resizeHandler");v(this,"_handleKeyUp",i=>{i.keyCode==73&&i.ctrlKey&&this._showMiniConfigurator()});v(this,"_startDragMiniConfigurator",async i=>{this._startDrag(i),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove});v(this,"_startDragConfigurator",async i=>{this._startDrag(i),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove});v(this,"_startDrag",async i=>{this._isFullscreen||(this._moved=!1,this._x=i.clientX-this._offset_x,this._y=i.clientY-this._offset_y,this._pointerId=i.pointerId,i.preventDefault())});v(this,"_miniConfiguratorMove",async i=>{this._pointerMove(i),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}});v(this,"_pointerMove",async i=>{if(i.clientY<0||i.clientX<0||i.clientX>window.innerWidth||i.clientY>window.innerHeight)return;let r=i.clientX-this._x,o=i.clientY-this._y;const s=window.getComputedStyle(this.shadowRoot.host),n=parseFloat(s.width),l=parseFloat(s.height);r<0&&(r=0),o<0&&(o=0),o+l>=window.innerHeight&&(o=window.innerHeight-l),r+n>=window.innerWidth&&(r=window.innerWidth-n),this._updateConfiguratorPosition(r,o),i.preventDefault()});v(this,"_stopDragConfigurator",async i=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});v(this,"_stopDragMiniConfigurator",async i=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});v(this,"_stopDrag",async i=>{this._x=this._offset_x,this._y=this._offset_y});v(this,"_onResize",async i=>{this._handleAsusSpanning()});v(this,"_seamValueUpdated",async()=>{this.foldWidth=this._seam_slider.value,this.shadowRoot.host.style.setProperty("--device-fold-width",this.foldWidth+"px"),this._updateFoldablesFeature()});v(this,"_rotationFinished",i=>{this._preview.style.transition=""});this._verticalViewportSegments=1,this._horizontalViewportSegments=1}static get properties(){return{verticalViewportSegments:{type:Number},horizontalViewportSegments:{type:Number}}}_inIframe(){try{return window.self!==window.top}catch{return!0}}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches)return console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this);const i=window.getComputedStyle(this.shadowRoot.host);parseFloat(i.width);const r=parseFloat(i.height);this._updateConfiguratorPosition(20,window.innerHeight-r-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._verticalViewportSegments=1,this._horizontalViewportSegments=1,this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="portrait",this._deviceType=Y.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.horizontalViewportSegments=1,this.verticalViewportSegments=2,this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{this._addZenbookVariables(document.styleSheets[0]),this._addZenbookVariables(this._frame.contentDocument.styleSheets[0])},300)):(this.horizontalViewportSegments=1,this.verticalViewportSegments=1,this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this._orientationFromSegments()}_orientationFromSegments(){return this.horizontalViewportSegments===2&&this.verticalViewportSegments===1?"portrait":this.horizontalViewportSegments===1&&this.verticalViewportSegments===2?"landscape":"portrait"}_addZenbookVariables(i){i.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",i.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(i){this._fold_width=Math.max(0,i)}_orientationChanged(i){const r=this._orientation_select.selectedIndex;this._orientation_select[r].value==="portrait"?(this.horizontalViewportSegments=2,this.verticalViewportSegments=1):(this.horizontalViewportSegments=1,this.verticalViewportSegments=2),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){this._orientationFromSegments()!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this._orientationFromSegments(),this.horizontalViewportSegments===1&&this.verticalViewportSegments===1?this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation():this.horizontalViewportSegments===2?this._applyVerticalRotation():this._applyHorizontalRotation()}get horizontalViewportSegments(){return this._horizontalViewportSegments}set horizontalViewportSegments(i){let r=this._horizontalViewportSegments;this._orientation_select.selectedIndex=i===2?0:1,this._horizontalViewportSegments=i,this.requestUpdate("horizontalViewportSegments",r)}get verticalViewportSegments(){return this._verticalViewportSegments}set verticalViewportSegments(i){let r=this._verticalViewportSegments;this._orientation_select.selectedIndex=i===2?1:0,this._verticalViewportSegments=i,this.requestUpdate("verticalViewportSegments",r)}_deviceTypeChanged(i){const r=this._device_type_select.selectedIndex,o=this._device_type_select[r].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(this.verticalViewportSegments=1,this.horizontalViewportSegments=2,this._currentOrientation="portrait"),o){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this.foldWidth=24,this._deviceType=Y.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Y.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Y.Dual,this.foldWidth=28,this._currentDevice="duo";break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=Y.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=Y.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this.verticalViewportSegments=1,this.horizontalViewportSegments=1,this._currentOrientation="portrait",this._currentDevice="duo",this.foldWidth=0,this._deviceType=Y.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature(),this._frame.contentWindow.location.reload(!0)}_calculateAndApplyScaleFactor(){const i=window.getComputedStyle(this._preview_container),r=window.getComputedStyle(this._device),o=parseInt(i.width,10),s=parseInt(i.height,10);let n=parseInt(r.width,10),l=parseInt(r.height,10),a=1;if(this._currentOrientation==="landscape"&&(n=parseInt(r.height,10),l=parseInt(r.width,10)),l>s||n>o){const h=s/l,d=o/n;a=d<h?d:h}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*a)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px")}this._deviceType===Y.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const i=new Li;i.foldSize=this.foldWidth,i.horizontalViewportSegments=this.horizontalViewportSegments,i.verticalViewportSegments=this.verticalViewportSegments,this._seam_slider.value=this.foldWidth}_debounce(i,r){let o;return function(){clearTimeout(o),o=setTimeout(()=>i.apply(this,arguments),r)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let i=this._offset_x,r=this._offset_y;const o=window.getComputedStyle(this.shadowRoot.host),s=parseFloat(o.width),n=parseFloat(o.height);this._offset_y+n>=window.innerHeight&&(r=window.innerHeight-n),this._offset_x+s>=window.innerWidth&&(i=window.innerWidth-s),this._updateConfiguratorPosition(i,r),this._updatePreviewConfiguration()}_updateConfiguratorPosition(i,r){this._offset_x=i,this._offset_y=r,this.shadowRoot.host.style.transform="translate3d("+i+"px, "+r+"px, 0)"}_toggleSpanning(){this.verticalViewportSegments!=1||this.horizontalViewportSegments!=1?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1||(this.verticalViewportSegments===2?(this.verticalViewportSegments=1,this.horizontalViewportSegments=2):(this.verticalViewportSegments=2,this.horizontalViewportSegments=1),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return Tt`
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
    </div>`}}v(Mo,"styles",_o`
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
  `);customElements.define("foldable-device-configurator",Mo);function Wr(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var Kt=function(){try{window[D].updateSegments();var e=function(){if(!ti)return ti=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){ti=t,window[D].dispatchEvent(new Event("change"))})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},D="__foldables__",ti=!1,Uo=function(){function e(){var r=this;if(window[D]!==void 0)return window[D];var o=document.createDocumentFragment();this.addEventListener=o.addEventListener.bind(o),this.removeEventListener=o.removeEventListener.bind(o),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof r[n]=="function"&&r[n](s),o.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(r,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var l;return function(){var a=arguments,h=this;clearTimeout(l),l=setTimeout(function(){return s.apply(h,a)},n)}}(Kt(),200)})}var t,i=e.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var r=[];if(this.verticalViewportSegments>1)for(var o=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,l=o/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)r[a]={top:s,left:0,bottom:s+l,right:n,width:n,height:l},s+=r[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var h=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)r[u]={top:0,left:c,right:c+h,bottom:d,width:h,height:d},c+=r[u].width,c+=this.foldSize;window.visualViewport.segments=r},i.randomizeSegmentsConfiguration=function(r){var o=Math.random()<.5,s=Math.round(Math.random()*(r-1)+1);o?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(D+"-horizontal-viewport-segments")||1},set:function(r){if(isNaN(r))throw new TypeError(r);sessionStorage.setItem(D+"-horizontal-viewport-segments",r),Kt()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(D+"-vertical-viewport-segments")||1},set:function(r){if(isNaN(r))throw new TypeError(r);sessionStorage.setItem(D+"-vertical-viewport-segments",r),Kt()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(D+"-fold-size")||0},set:function(r){if(!(Number(r)>=0))throw new TypeError(r);sessionStorage.setItem(D+"-fold-size",r),Kt()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(D+"-browser-shell-size")||0},set:function(r){if(!(Number(r)>=0))throw new TypeError(r);sessionStorage.setItem(D+"-browser-shell-size",r),Kt()}}])&&function(r,o){for(var s=0;s<o.length;s++){var n=o[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}(e.prototype,t),e}();window[D]=new Uo,window.visualViewport.segments===void 0&&window[D].updateSegments();var Oo="-viewport-segments",Mi="(\\s*)(@media.*?\\b"+Oo+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",zn=/\((.*?)\)/gi,Pn=/@media[^\(]+/gi,Rn=/(horizontal-viewport-segments:)\s?(\d)/gi,Tn=/(vertical-viewport-segments:)\s?(\d)/gi,Vn=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")};function No(e,t){return e.replace(new RegExp(Mi,"gi"),t)}function Kr(e,t){var i=e.matchAll(t);return i===null?[]:Array.from(i,function(r){return r[2]})[0]}function Io(e){var t=function(r){var o,s=new RegExp(Mi,"gi");if(typeof r.matchAll=="function")o=Array.from(r.matchAll(s));else{for(o=[];o[o.length]=s.exec(r););o.length--}return o}(e),i=[[]];return t.forEach(function(r){var o=r[1],s=r[2],n=r[3],l=r[4],a=s.match(Pn)||[],h=s.match(zn)||[],d=Kr(s,Tn);d===void 0&&(d=1);var c=Kr(s,Rn);c===void 0&&(c=1),h=h.filter(function(u){return!u.includes(Oo)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][c]=""+o+a+h+"{"+n+l+"}"}),i}var Pe=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+Pe);var Zr,Do=new Uo;if(!Pe){var ei=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Zr=ei,Promise.all(Zr.map(function(e){return e.href?fetch(e.href).then(function(t){return t.text()}):e.textContent}))).then(function(e){var t=new DocumentFragment;e.forEach(function(i,r){for(var o,s=No(i,""),n=Io(i),l=ei[r].href||"inline",a=0,h=Object.entries(n);a<h.length;a++){var d=h[a],c=d[0],u=d[1];it[c]==null&&(it[c]=[]);for(var g=0,b=Object.entries(u);g<b.length;g++){var w=b[g];it[c][w[0]]="/* origin: "+l+" */"+w[1]}}if(l=="inline"||(o=i,new RegExp(Mi,"gi").test(o))){var m=document.createElement("style");m.setAttribute("data-css-origin",l),m.textContent=s,t.appendChild(m)}else{var y=document.createElement("link");y.type="text/css",y.rel="stylesheet",y.href=l,t.appendChild(y)}}),ei.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(t),Fo()})}var it=[[]];function Ln(e,t){if(Pe)return e;var i=No(e,""),r=Io(e);t&&(it[t]=[[]]);for(var o=t?it[t]:it,s=t?"":"/* origin: inline */",n=0,l=Object.entries(r);n<l.length;n++){var a=l[n],h=a[0],d=a[1];o[h]==null&&(o[h]=[]);for(var c=0,u=Object.entries(d);c<u.length;c++){var g=u[c];o[h][g[0]]=""+s+g[1]}}return o[0][0]=i,i}function Fo(e){Pe||(Xr(e),Do.addEventListener("change",function(){return Xr(e)}))}function Xr(e){var t,i=Do,r=null;(t=e?it[e.nodeName.toLowerCase()]:it)[i.verticalViewportSegments]&&(r=t[i.verticalViewportSegments][i.horizontalViewportSegments]);var o,s=t[0][0]?t[0][0]:null;if(r){var n=window.visualViewport.segments,l=!1;n.length>1&&(l=!(n[0].height<window.innerHeight));for(var a=0,h=Object.entries(n);a<h.length;a++)for(var d=h[a],c=d[0],u=0,g=Object.entries(d[1]);u<g.length;u++){var b=g[u],w=b[0];o=b[1]+"px",r=r.replace(Vn(l?"viewport-segment-"+w+" "+c+" 0":"viewport-segment-"+w+" 0 "+c),o)}var m="__foldables_sheet__",y=function(k,F){for(var A,S=function(x,le){var O=typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"];if(O)return(O=O.call(x)).next.bind(O);if(Array.isArray(x)||(O=function(U,Ut){if(U){if(typeof U=="string")return Wr(U,Ut);var H=Object.prototype.toString.call(U).slice(8,-1);return H==="Object"&&U.constructor&&(H=U.constructor.name),H==="Map"||H==="Set"?Array.from(U):H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H)?Wr(U,Ut):void 0}}(x))){O&&(x=O);var Mt=0;return function(){return Mt>=x.length?{done:!0}:{done:!1,value:x[Mt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(k.querySelectorAll("."+m));!(A=S()).done;)A.value.remove();var P=document.createElement("style");P.className=m,P.textContent=F,k===document?document.head.appendChild(P):k.appendChild(P)};if(e){var R=e.shadowRoot;"adoptedStyleSheets"in R&&R.adoptedStyleSheets.length>0?R.adoptedStyleSheets[0].replace(s+r):y(R,r)}else y(document,r)}}try{self["workbox:window:7.0.0"]&&_()}catch{}function bi(e,t){return new Promise(function(i){var r=new MessageChannel;r.port1.onmessage=function(o){i(o.data)},e.postMessage(t,[r.port2])})}function Mn(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Yr(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function Un(e,t){var i;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(i=function(o,s){if(o){if(typeof o=="string")return Yr(o,s);var n=Object.prototype.toString.call(o).slice(8,-1);return n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set"?Array.from(o):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yr(o,s):void 0}}(e))||t&&e&&typeof e.length=="number"){i&&(e=i);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(i=e[Symbol.iterator]()).next.bind(i)}try{self["workbox:core:7.0.0"]&&_()}catch{}var ii=function(){var e=this;this.promise=new Promise(function(t,i){e.resolve=t,e.reject=i})};function ri(e,t){var i=location.href;return new URL(e,i).href===new URL(t,i).href}var Zt=function(e,t){this.type=e,Object.assign(this,t)};function ue(e,t,i){return i?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function On(){}var Nn={type:"SKIP_WAITING"};function Gr(e,t){if(!t)return e&&e.then?e.then(On):Promise.resolve()}var In=function(e){var t,i;function r(l,a){var h,d;return a===void 0&&(a={}),(h=e.call(this)||this).nn={},h.tn=0,h.rn=new ii,h.en=new ii,h.on=new ii,h.un=0,h.an=new Set,h.cn=function(){var c=h.fn,u=c.installing;h.tn>0||!ri(u.scriptURL,h.sn.toString())||performance.now()>h.un+6e4?(h.vn=u,c.removeEventListener("updatefound",h.cn)):(h.hn=u,h.an.add(u),h.rn.resolve(u)),++h.tn,u.addEventListener("statechange",h.ln)},h.ln=function(c){var u=h.fn,g=c.target,b=g.state,w=g===h.vn,m={sw:g,isExternal:w,originalEvent:c};!w&&h.mn&&(m.isUpdate=!0),h.dispatchEvent(new Zt(b,m)),b==="installed"?h.wn=self.setTimeout(function(){b==="installed"&&u.waiting===g&&h.dispatchEvent(new Zt("waiting",m))},200):b==="activating"&&(clearTimeout(h.wn),w||h.en.resolve(g))},h.dn=function(c){var u=h.hn,g=u!==navigator.serviceWorker.controller;h.dispatchEvent(new Zt("controlling",{isExternal:g,originalEvent:c,sw:u,isUpdate:h.mn})),g||h.on.resolve(u)},h.gn=(d=function(c){var u=c.data,g=c.ports,b=c.source;return ue(h.getSW(),function(){h.an.has(b)&&h.dispatchEvent(new Zt("message",{data:u,originalEvent:c,ports:g,sw:b}))})},function(){for(var c=[],u=0;u<arguments.length;u++)c[u]=arguments[u];try{return Promise.resolve(d.apply(this,c))}catch(g){return Promise.reject(g)}}),h.sn=l,h.nn=a,navigator.serviceWorker.addEventListener("message",h.gn),h}i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var o,s,n=r.prototype;return n.register=function(l){var a=(l===void 0?{}:l).immediate,h=a!==void 0&&a;try{var d=this;return function(c,u){var g=c();return g&&g.then?g.then(u):u(g)}(function(){if(!h&&document.readyState!=="complete")return Gr(new Promise(function(c){return window.addEventListener("load",c)}))},function(){return d.mn=!!navigator.serviceWorker.controller,d.yn=d.pn(),ue(d.bn(),function(c){d.fn=c,d.yn&&(d.hn=d.yn,d.en.resolve(d.yn),d.on.resolve(d.yn),d.yn.addEventListener("statechange",d.ln,{once:!0}));var u=d.fn.waiting;return u&&ri(u.scriptURL,d.sn.toString())&&(d.hn=u,Promise.resolve().then(function(){d.dispatchEvent(new Zt("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),d.hn&&(d.rn.resolve(d.hn),d.an.add(d.hn)),d.fn.addEventListener("updatefound",d.cn),navigator.serviceWorker.addEventListener("controllerchange",d.dn),d.fn})})}catch(c){return Promise.reject(c)}},n.update=function(){try{return this.fn?Gr(this.fn.update()):void 0}catch(l){return Promise.reject(l)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(l){try{return ue(this.getSW(),function(a){return bi(a,l)})}catch(a){return Promise.reject(a)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&bi(this.fn.waiting,Nn)},n.pn=function(){var l=navigator.serviceWorker.controller;return l&&ri(l.scriptURL,this.sn.toString())?l:void 0},n.bn=function(){try{var l=this;return function(a,h){try{var d=a()}catch(c){return h(c)}return d&&d.then?d.then(void 0,h):d}(function(){return ue(navigator.serviceWorker.register(l.sn,l.nn),function(a){return l.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},o=r,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Mn(o.prototype,s),r}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(i,r){this.Sn(i).add(r)},t.removeEventListener=function(i,r){this.Sn(i).delete(r)},t.dispatchEvent=function(i){i.target=this;for(var r,o=Un(this.Sn(i.type));!(r=o()).done;)(0,r.value)(i)},t.Sn=function(i){return this.Pn.has(i)||this.Pn.set(i,new Set),this.Pn.get(i)},e}());ni("/demos/photo-gallery/");const Ho=(e,...t)=>{const i=Ln(e[0],"main-application");return rt([i],...t)};class _i extends ht{constructor(){super(...arguments);v(this,"_spinner");v(this,"_canvas");v(this,"_canvasWrapper");v(this,"_context");v(this,"_image");v(this,"_legend");v(this,"_brightness_range");v(this,"_contrast_range");v(this,"_hue_range");v(this,"_sepia_range");v(this,"_saturation_range");v(this,"_grayscale_range")}firstUpdated(){this._spinner=this.shadowRoot.querySelector("sl-spinner"),this._image=this.shadowRoot.querySelector("img"),this._legend=this.shadowRoot.querySelector("#text"),this._brightness_range=this.shadowRoot.querySelector("#brightness-range"),this._contrast_range=this.shadowRoot.querySelector("#contrast-range"),this._hue_range=this.shadowRoot.querySelector("#hue-range"),this._sepia_range=this.shadowRoot.querySelector("#sepia-range"),this._saturation_range=this.shadowRoot.querySelector("#saturation-range"),this._grayscale_range=this.shadowRoot.querySelector("#grayscale-range"),this._canvas=this.shadowRoot.querySelector("#canvas"),this._canvasWrapper=this.shadowRoot.querySelector("#canvas-wrapper"),this._context=this._canvas.getContext("2d")}updated(i){i.has("src")&&(this._spinner.style.visibility="visible",this._image.addEventListener("load",()=>{this._spinner.style.visibility="hidden",this.style.visibility="visible",this._legend.innerText=this.description,this._applyFilters()},{once:!0}),this._image.src=this.src,this._resetRanges())}_resetRanges(){this._brightness_range.value=this._brightness_range.defaultValue,this._contrast_range.value=this._contrast_range.defaultValue,this._hue_range.value=this._hue_range.defaultValue,this._sepia_range.value=this._sepia_range.defaultValue,this._saturation_range.value=this._saturation_range.defaultValue,this._grayscale_range.value=this._grayscale_range.defaultValue}_applyFilters(){const i="brightness("+this._brightness_range.value+"%) contrast("+this._contrast_range.value+"%) grayscale("+this._grayscale_range.value+"%) saturate("+this._saturation_range.value+"%) sepia("+this._sepia_range.value+"%) hue-rotate("+this._hue_range.value+"deg)";this._canvas.width=this._canvasWrapper.clientWidth*window.devicePixelRatio,this._canvas.height=this._canvasWrapper.clientHeight*window.devicePixelRatio;const r=this._canvas.width/this._image.width,o=this._canvas.height/this._image.height,s=Math.min(r,o),n=(this._canvas.width-this._image.width*s)/2,l=(this._canvas.height-this._image.height*s)/2;this._context.filter=i,this._context.drawImage(this._image,0,0,this._image.width,this._image.height,n,l,s*this._image.width,s*this._image.height)}render(){return j`
      <div id="wrapper">
        <img/>
        <div id="canvas-wrapper">
          <canvas id="canvas"></canvas>
        </div>
        <div id="text"></div>
        <div class="editing">
          <sl-range label="Brightness" min="0" max="300" value="100" id="brightness-range" @sl-change="${this._applyFilters}"></sl-range>
          <sl-range label="Contrast" min="0" max="200" value="100" id="contrast-range" @sl-change="${this._applyFilters}"></sl-range>
          <sl-range label="Saturation" min="0" max="300" value="100" id="saturation-range" @sl-change="${this._applyFilters}"></sl-range>
          <sl-range label="Sepia" min="0" max="200" value="0" id="sepia-range" @sl-change="${this._applyFilters}"></sl-range>
          <sl-range label="Grayscale" min="0" max="100" value="0" id="grayscale-range" @sl-change="${this._applyFilters}"></sl-range>
          <sl-range label="Hue" min="0" max="360" value="0" id="hue-range" @sl-change="${this._applyFilters}"></sl-range>
        </div>
        <sl-spinner></sl-spinner>
      </div>
    `}}v(_i,"styles",Ho`
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
      height: 10%;
      margin-top: 15px;
    }

    img {
      display: none;
    }

    #canvas-wrapper {
      min-height: 70%;
      height: 70%;
      width: 90%;
      margin-top: 40px;
    }

    @media (max-width: 1024px) {
      #canvas-wrapper {
        min-height: 40%;
        height: 40%;
      }
    }

    canvas {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    sl-spinner {
      position: absolute;
      top: 50%;
      font-size: 3rem;
      --track-width: 8px;
    }

    .editing {
      display: grid;
      grid-template-columns: 2fr 2fr;
      width: 100%;
      height: 20%;
      margin-bottom: 30px;
    }

    sl-range {
      margin: 15px;
    }
  `),v(_i,"properties",{src:{type:String},description:{type:String}});customElements.define("detail-img",_i);class yi extends ht{constructor(){super();v(this,"_carousel");v(this,"_detail_img");v(this,"_detail_container");v(this,"_detail");v(this,"_detail_select");v(this,"_drawer");v(this,"_spinner");v(this,"_fold");v(this,"_gallery");v(this,"_fullview_container");v(this,"_swAlert");v(this,"_wb");v(this,"_wbRegistration");this._full_view_container_classes={hidden:!0}}firstUpdated(){this._gallery=this.shadowRoot.querySelector(".gallery"),this._carousel=this.shadowRoot.querySelector("sl-carousel"),this._detail_img=this.shadowRoot.querySelector("detail-img"),this._detail_container=this.shadowRoot.querySelector(".detail-container"),this._detail=this.shadowRoot.querySelector(".detail"),this._detail_select=this.shadowRoot.querySelector(".detail-select"),this._spinner=this.shadowRoot.querySelector("sl-spinner"),this._drawer=this.shadowRoot.querySelector("#drawer"),this._swAlert=this.shadowRoot.querySelector("#sw-alert"),this._fold=this.shadowRoot.querySelector(".fold"),this._fullview_container=this.shadowRoot.querySelector(".fullview-container"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new In("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()}),screen.orientation.addEventListener("change",i=>{this._closePicture()})}connectedCallback(){super.connectedCallback(),Fo(this)}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&bi(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_openCarousel(i){const o=i.currentTarget.children[1].currentSrc.replace("-l",""),s=window.matchMedia("(vertical-viewport-segments: 2)").matches,n=window.matchMedia("(horizontal-viewport-segments: 2)").matches;if(navigator.devicePosture!=null&&(navigator.devicePosture.type==="folded"&&n||navigator.devicePosture.type==="continuous"&&(s||n))){if(this._detail_select.style.display="none",this._detail.style.visibility="visible",this._detail_img.src===o)return;this._detail_img.description=i.currentTarget.children[1].alt,this._detail_img.src=o,this._detail_img.style.visibility="hidden"}else this._showSpinner(),this._current_image=i.currentTarget,this._full_view_container_classes={hidden:!1},this._carousel.updateComplete.then(()=>{const l=Number(i.currentTarget.children[1].getAttribute("index"));this._carousel.children[l+1].children[0].children[1].getAttribute("loaded")=="true"&&this._hideSpinner(),this._carousel.goToSlide(l,"instant")})}_showSpinner(){this._spinner.style.visibility="visible"}_hideSpinner(){this._spinner.style.visibility="hidden"}_pictureLoaded(i){i.target.setAttribute("loaded","true"),this._hideSpinner()}_slideChange(i){i.detail.slide.children[0].children[1].getAttribute("loaded")=="false"&&this._showSpinner()}_closePicture(){this._full_view_container_classes={hidden:!0}}render(){const i=[{name:"images/air-balloon-l",hires:"images/air-balloon",alt:"This is a beautiful picture of an air balloon in the sky."},{name:"images/asia-l",hires:"images/asia",alt:"This photo depicts a woman on a boat somewhere in Asia."},{name:"images/china-l",hires:"images/china",alt:"Architecture in China, a tower of a building."},{name:"images/church-l",hires:"images/church",alt:"A black church in the middle of nowhere."},{name:"images/city-l",hires:"images/city",alt:"A modern city somewhere in Asia."},{name:"images/waterfall2-l",hires:"images/waterfall2",alt:"River with a tiny waterfall."},{name:"images/cloud-l",hires:"images/cloud",alt:"Clouds in the sky, view from high altitude."},{name:"images/desert-l",hires:"images/desert",alt:"A desert with cactus."},{name:"images/river2-l",hires:"images/river2",alt:"A river inside a canyon."},{name:"images/disney-l",hires:"images/disney",alt:"The Disney castle in Orlando"},{name:"images/forest-l",hires:"images/forest",alt:"A road crossing a green forest"},{name:"images/greece-l",hires:"images/greece",alt:"Greece architecture"},{name:"images/city2-l",hires:"images/city2",alt:"A city street with an arch"},{name:"images/lake-l",hires:"images/lake",alt:"Women coming out of a lake somewhere lost in the nature"},{name:"images/mountain-l",hires:"images/mountain",alt:"Peak of a high mountain and a cloudy sky"},{name:"images/new-york-l",hires:"images/new-york",alt:"A street in New York"},{name:"images/pool-l",hires:"images/pool",alt:"Relaxing pool in a luxury hotel"},{name:"images/restaurant-l",hires:"images/restaurant",alt:"Restaurant on the edge of a river somewhere in France"},{name:"images/river-l",hires:"images/river",alt:"River with people kayaking"},{name:"images/road-l",hires:"images/road",alt:"Long straight road somewhere in USA"},{name:"images/sand-l",hires:"images/sand",alt:"Desert with rocky mountains on the background"},{name:"images/sea-l",hires:"images/sea",alt:"Beautiful transparent sea water somewhere in the pacific"},{name:"images/sfo-l",hires:"images/sfo",alt:"Golden gate in San Francisco"},{name:"images/stars-l",hires:"images/stars",alt:"Wonderful astronomy shot of stars in the sky"},{name:"images/tents-l",hires:"images/tents",alt:"Camping tents hanging on a cliff"},{name:"images/waterfall-l",hires:"images/waterfall",alt:"Picture of a waterfall between big rocks"},{name:"images/mountain2-l",hires:"images/mountain2",alt:"Beautiful picture of a mountain landscape"},{name:"images/wave-l",hires:"images/wave",alt:"This is a picture from a wave in the ocean"},{name:"images/aerial-l",hires:"images/aerial",alt:"This is an aerial picture of a city"},{name:"images/building-l",hires:"images/building",alt:"This is a picture from inside a building"},{name:"images/catamaran-l",hires:"images/catamaran",alt:"This is a picture of a catamaran with blue water"},{name:"images/cats-l",hires:"images/cats",alt:"Thisa picture of two cats sleeping"},{name:"images/egypt-l",hires:"images/egypt",alt:"This is a picture from somewhere in Egypt"},{name:"images/feather-l",hires:"images/feather",alt:"This is a picture of colorful feathers"},{name:"images/fruits-l",hires:"images/fruits",alt:"This is a picture of a water bottle and fruits"},{name:"images/golden-gate-l",hires:"images/golden-gate",alt:"This is a picture of the Golden Gate"},{name:"images/marocco-l",hires:"images/marocco",alt:"This is a picture of ancient building in Marocco"},{name:"images/milky-way-l",hires:"images/milky-way",alt:"This is a picture from the Milky Way"},{name:"images/palm-tree-l",hires:"images/palm-tree",alt:"This is a picture of palm trees with beautiful weather"},{name:"images/rainbow-l",hires:"images/rainbow",alt:"This is a picture of a rainbow from a light"},{name:"images/road2-l",hires:"images/road2",alt:"This is a picture from a road with a lot of trees"},{name:"images/surf-l",hires:"images/surf",alt:"This is a picture of a surfer"},{name:"images/volcano-l",hires:"images/volcano",alt:"This is an aerial picture of a volcano"}];return j`
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
            ${i.map((r,o)=>j`
              <figure class="gallery-item">
                <picture @click="${this._openCarousel}">
                  <source srcset="${r.name}.webp" type="image/webp">
                  <img src="${r.name}.jpg" class="gallery-img" alt=${r.alt} index="${o}">
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
              ${i.map(r=>j`
                <sl-carousel-item>
                  <picture class="carousel-item">
                    <source srcset="${r.hires}.webp" type="image/webp">
                    <img src="${r.hires}.jpg" class="carousel-img" alt=${r.alt} loading="lazy" loaded="false" @load="${this._pictureLoaded}">
                  </picture>
                </sl-carousel-item>
              `)}
              <sl-spinner></sl-spinner>
            </sl-carousel>
          </div>
        </div>
    `}}v(yi,"styles",Ho`
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
      height: 100%;
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
  `),v(yi,"properties",{_full_view_container_classes:{type:String}});customElements.define("main-application",yi);
