var Qs=Object.defineProperty;var tn=(e,t,i)=>t in e?Qs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var f=(e,t,i)=>(tn(e,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=window,cr=Pe.ShadowRoot&&(Pe.ShadyCSS===void 0||Pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,as=Symbol(),Cr=new WeakMap;let en=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==as)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(cr&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=Cr.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Cr.set(i,t))}return t}toString(){return this.cssText}};const rn=e=>new en(typeof e=="string"?e:e+"",void 0,as),on=(e,t)=>{cr?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const r=document.createElement("style"),o=Pe.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)})},zr=cr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return rn(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var si;const Le=window,Pr=Le.trustedTypes,sn=Pr?Pr.emptyScript:"",Tr=Le.reactiveElementPolyfillSupport,ji={toAttribute(e,t){switch(t){case Boolean:e=e?sn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ls=(e,t)=>t!==e&&(t==t||e==e),ni={attribute:!0,type:String,converter:ji,reflect:!1,hasChanged:ls};let Jt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,r)=>{const o=this._$Ep(r,i);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,i=ni){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,i);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,i,r){return{get(){return this[i]},set(o){const s=this[t];this[i]=o,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ni}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,r=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of r)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)i.unshift(zr(o))}else t!==void 0&&i.push(zr(t));return i}static _$Ep(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,r;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return on(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostConnected)===null||r===void 0?void 0:r.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostDisconnected)===null||r===void 0?void 0:r.call(i)})}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$EO(t,i,r=ni){var o;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:ji).toAttribute(i,r.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,i){var r;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=o.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:ji;this._$El=s,this[s]=h.fromAttribute(i,n.type),this._$El=null}}requestUpdate(t,i,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||ls)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let i=!1;const r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(r)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(r)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,r)=>this._$EO(r,this[r],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Jt.finalized=!0,Jt.elementProperties=new Map,Jt.elementStyles=[],Jt.shadowRootOptions={mode:"open"},Tr==null||Tr({ReactiveElement:Jt}),((si=Le.reactiveElementVersions)!==null&&si!==void 0?si:Le.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ai;const Me=window,Rt=Me.trustedTypes,Ur=Rt?Rt.createPolicy("lit-html",{createHTML:e=>e}):void 0,ot=`lit$${(Math.random()+"").slice(9)}$`,hs="?"+ot,nn=`<${hs}>`,Ot=document,fe=(e="")=>Ot.createComment(e),me=e=>e===null||typeof e!="object"&&typeof e!="function",cs=Array.isArray,an=e=>cs(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rr=/-->/g,Or=/>/g,lt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vr=/'/g,Lr=/"/g,ds=/^(?:script|style|textarea|title)$/i,ln=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Ne=ln(1),ft=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Mr=new WeakMap,Ct=Ot.createTreeWalker(Ot,129,null,!1),hn=(e,t)=>{const i=e.length-1,r=[];let o,s=t===2?"<svg>":"",n=Gt;for(let a=0;a<i;a++){const l=e[a];let d,c,u=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===Gt?c[1]==="!--"?n=Rr:c[1]!==void 0?n=Or:c[2]!==void 0?(ds.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=lt):c[3]!==void 0&&(n=lt):n===lt?c[0]===">"?(n=o??Gt,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?lt:c[3]==='"'?Lr:Vr):n===Lr||n===Vr?n=lt:n===Rr||n===Or?n=Gt:(n=lt,o=void 0);const y=n===lt&&e[a+1].startsWith("/>")?" ":"";s+=n===Gt?l+nn:u>=0?(r.push(d),l.slice(0,u)+"$lit$"+l.slice(u)+ot+y):l+ot+(u===-2?(r.push(void 0),a):y)}const h=s+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ur!==void 0?Ur.createHTML(h):h,r]};let Bi=class us{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,d]=hn(t,i);if(this.el=us.createElement(l,r),Ct.currentNode=this.el.content,i===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(o=Ct.nextNode())!==null&&a.length<h;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const u of o.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(ot)){const p=d[n++];if(c.push(u),p!==void 0){const y=o.getAttribute(p.toLowerCase()+"$lit$").split(ot),b=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:b[2],strings:y,ctor:b[1]==="."?dn:b[1]==="?"?pn:b[1]==="@"?vn:Je})}else a.push({type:6,index:s})}for(const u of c)o.removeAttribute(u)}if(ds.test(o.tagName)){const c=o.textContent.split(ot),u=c.length-1;if(u>0){o.textContent=Rt?Rt.emptyScript:"";for(let p=0;p<u;p++)o.append(c[p],fe()),Ct.nextNode(),a.push({type:2,index:++s});o.append(c[u],fe())}}}else if(o.nodeType===8)if(o.data===hs)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(ot,c+1))!==-1;)a.push({type:7,index:s}),c+=ot.length-1}s++}}static createElement(t,i){const r=Ot.createElement("template");return r.innerHTML=t,r}};function Vt(e,t,i=e,r){var o,s,n,h;if(t===ft)return t;let a=r!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[r]:i._$Cl;const l=me(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,r)),r!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[r]=a:i._$Cl=a),a!==void 0&&(t=Vt(e,a._$AS(e,t.values),a,r)),t}let cn=class{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:r},parts:o}=this._$AD,s=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:Ot).importNode(r,!0);Ct.currentNode=s;let n=Ct.nextNode(),h=0,a=0,l=o[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new dr(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new fn(n,this,t)),this.u.push(d),l=o[++a]}h!==(l==null?void 0:l.index)&&(n=Ct.nextNode(),h++)}return s}p(t){let i=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}},dr=class ps{constructor(t,i,r,o){var s;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this._$Cm=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Vt(this,t,i),me(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==ft&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):an(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==O&&me(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ot.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Bi.createElement(o.h,this.options)),o);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(r);else{const n=new cn(s,this),h=n.v(this.options);n.p(r),this.T(h),this._$AH=n}}_$AC(t){let i=Mr.get(t.strings);return i===void 0&&Mr.set(t.strings,i=new Bi(t)),i}k(t){cs(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const s of t)o===i.length?i.push(r=new ps(this.O(fe()),this.O(fe()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},Je=class{constructor(t,i,r,o,s){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,r,o){const s=this.strings;let n=!1;if(s===void 0)t=Vt(this,t,i,0),n=!me(t)||t!==this._$AH&&t!==ft,n&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Vt(this,h[r+a],i,a),l===ft&&(l=this._$AH[a]),n||(n=!me(l)||l!==this._$AH[a]),l===O?t=O:t!==O&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}n&&!o&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},dn=class extends Je{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}};const un=Rt?Rt.emptyScript:"";let pn=class extends Je{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,un):this.element.removeAttribute(this.name)}},vn=class extends Je{constructor(t,i,r,o,s){super(t,i,r,o,s),this.type=5}_$AI(t,i=this){var r;if((t=(r=Vt(this,t,i,0))!==null&&r!==void 0?r:O)===ft)return;const o=this._$AH,s=t===O&&o!==O||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==O&&(o===O||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,r;typeof this._$AH=="function"?this._$AH.call((r=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},fn=class{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Vt(this,t)}};const Nr=Me.litHtmlPolyfillSupport;Nr==null||Nr(Bi,dr),((ai=Me.litHtmlVersions)!==null&&ai!==void 0?ai:Me.litHtmlVersions=[]).push("2.6.1");const mn=(e,t,i)=>{var r,o;const s=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:t;let n=s._$litPart$;if(n===void 0){const h=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=n=new dr(t.insertBefore(fe(),h),h,void 0,i??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=window,ur=Te.ShadowRoot&&(Te.ShadyCSS===void 0||Te.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pr=Symbol(),Hr=new WeakMap;let vs=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==pr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(ur&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=Hr.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Hr.set(i,t))}return t}toString(){return this.cssText}};const gn=e=>new vs(typeof e=="string"?e:e+"",void 0,pr),bn=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new vs(i,e,pr)},_n=(e,t)=>{ur?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const r=document.createElement("style"),o=Te.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)})},Dr=ur?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return gn(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var li;const He=window,Fr=He.trustedTypes,yn=Fr?Fr.emptyScript:"",Ir=He.reactiveElementPolyfillSupport,qi={toAttribute(e,t){switch(t){case Boolean:e=e?yn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},fs=(e,t)=>t!==e&&(t==t||e==e),hi={attribute:!0,type:String,converter:qi,reflect:!1,hasChanged:fs};let wt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,r)=>{const o=this._$Ep(r,i);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,i=hi){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,i);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,i,r){return{get(){return this[i]},set(o){const s=this[t];this[i]=o,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||hi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,r=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of r)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)i.unshift(Dr(o))}else t!==void 0&&i.push(Dr(t));return i}static _$Ep(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,r;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return _n(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostConnected)===null||r===void 0?void 0:r.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostDisconnected)===null||r===void 0?void 0:r.call(i)})}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$EO(t,i,r=hi){var o;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:qi).toAttribute(i,r.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,i){var r;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=o.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:qi;this._$El=s,this[s]=h.fromAttribute(i,n.type),this._$El=null}}requestUpdate(t,i,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||fs)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let i=!1;const r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(r)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(r)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,r)=>this._$EO(r,this[r],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};wt.finalized=!0,wt.elementProperties=new Map,wt.elementStyles=[],wt.shadowRootOptions={mode:"open"},Ir==null||Ir({ReactiveElement:wt}),((li=He.reactiveElementVersions)!==null&&li!==void 0?li:He.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ci,di;let vt=class extends wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const r=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=r.firstChild),r}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mn(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ft}};vt.finalized=!0,vt._$litElement$=!0,(ci=globalThis.litElementHydrateSupport)===null||ci===void 0||ci.call(globalThis,{LitElement:vt});const jr=globalThis.litElementPolyfillSupport;jr==null||jr({LitElement:vt});((di=globalThis.litElementVersions)!==null&&di!==void 0?di:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},$n=e=>(...t)=>({_$litDirective$:e,values:t});let Sn=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const An=$n(class extends Sn{constructor(e){var t;if(super(e),e.type!==wn.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,r;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.nt.add(s);return this.render(t)}const o=e.element.classList;this.nt.forEach(s=>{s in t||(o.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((r=this.st)===null||r===void 0)&&r.has(s)||(n?(o.add(s),this.nt.add(s)):(o.remove(s),this.nt.delete(s)))}return ft}});var Ue=window,vr=Ue.ShadowRoot&&(Ue.ShadyCSS===void 0||Ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fr=Symbol(),Br=new WeakMap,ms=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==fr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(vr&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=Br.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Br.set(i,t))}return t}toString(){return this.cssText}},xn=e=>new ms(typeof e=="string"?e:e+"",void 0,fr),at=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new ms(i,e,fr)},En=(e,t)=>{vr?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const r=document.createElement("style"),o=Ue.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)})},qr=vr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return xn(i)})(e):e,ui,De=window,Wr=De.trustedTypes,kn=Wr?Wr.emptyScript:"",Kr=De.reactiveElementPolyfillSupport,ge={toAttribute(e,t){switch(t){case Boolean:e=e?kn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},gs=(e,t)=>t!==e&&(t==t||e==e),pi={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:gs},$t=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,r)=>{const o=this._$Ep(r,i);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,i=pi){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,i);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,i,r){return{get(){return this[i]},set(o){const s=this[t];this[i]=o,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||pi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,r=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of r)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)i.unshift(qr(o))}else t!==void 0&&i.push(qr(t));return i}static _$Ep(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,r;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return En(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostConnected)===null||r===void 0?void 0:r.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostDisconnected)===null||r===void 0?void 0:r.call(i)})}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$EO(t,i,r=pi){var o;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:ge).toAttribute(i,r.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,i){var r;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=o.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:ge;this._$El=s,this[s]=h.fromAttribute(i,n.type),this._$El=null}}requestUpdate(t,i,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||gs)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let i=!1;const r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(r)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(r)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,r)=>this._$EO(r,this[r],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};$t.finalized=!0,$t.elementProperties=new Map,$t.elementStyles=[],$t.shadowRootOptions={mode:"open"},Kr==null||Kr({ReactiveElement:$t}),((ui=De.reactiveElementVersions)!==null&&ui!==void 0?ui:De.reactiveElementVersions=[]).push("1.6.1");var vi,Fe=window,Lt=Fe.trustedTypes,Zr=Lt?Lt.createPolicy("lit-html",{createHTML:e=>e}):void 0,st=`lit$${(Math.random()+"").slice(9)}$`,bs="?"+st,Cn=`<${bs}>`,Mt=document,be=(e="")=>Mt.createComment(e),_e=e=>e===null||typeof e!="object"&&typeof e!="function",_s=Array.isArray,zn=e=>_s(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Qt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xr=/-->/g,Yr=/>/g,ht=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jr=/'/g,Gr=/"/g,ys=/^(?:script|style|textarea|title)$/i,Pn=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),X=Pn(1),K=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Qr=new WeakMap,zt=Mt.createTreeWalker(Mt,129,null,!1),Tn=(e,t)=>{const i=e.length-1,r=[];let o,s=t===2?"<svg>":"",n=Qt;for(let a=0;a<i;a++){const l=e[a];let d,c,u=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===Qt?c[1]==="!--"?n=Xr:c[1]!==void 0?n=Yr:c[2]!==void 0?(ys.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=ht):c[3]!==void 0&&(n=ht):n===ht?c[0]===">"?(n=o??Qt,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?ht:c[3]==='"'?Gr:Jr):n===Gr||n===Jr?n=ht:n===Xr||n===Yr?n=Qt:(n=ht,o=void 0);const y=n===ht&&e[a+1].startsWith("/>")?" ":"";s+=n===Qt?l+Cn:u>=0?(r.push(d),l.slice(0,u)+"$lit$"+l.slice(u)+st+y):l+st+(u===-2?(r.push(void 0),a):y)}const h=s+(e[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Zr!==void 0?Zr.createHTML(h):h,r]},Ie=class{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,d]=Tn(t,i);if(this.el=Ie.createElement(l,r),zt.currentNode=this.el.content,i===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(o=zt.nextNode())!==null&&a.length<h;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const u of o.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(st)){const p=d[n++];if(c.push(u),p!==void 0){const y=o.getAttribute(p.toLowerCase()+"$lit$").split(st),b=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:b[2],strings:y,ctor:b[1]==="."?Rn:b[1]==="?"?Vn:b[1]==="@"?Ln:Qe})}else a.push({type:6,index:s})}for(const u of c)o.removeAttribute(u)}if(ys.test(o.tagName)){const c=o.textContent.split(st),u=c.length-1;if(u>0){o.textContent=Lt?Lt.emptyScript:"";for(let p=0;p<u;p++)o.append(c[p],be()),zt.nextNode(),a.push({type:2,index:++s});o.append(c[u],be())}}}else if(o.nodeType===8)if(o.data===bs)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(st,c+1))!==-1;)a.push({type:7,index:s}),c+=st.length-1}s++}}static createElement(t,i){const r=Mt.createElement("template");return r.innerHTML=t,r}};function Nt(e,t,i=e,r){var o,s,n,h;if(t===K)return t;let a=r!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[r]:i._$Cl;const l=_e(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,r)),r!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[r]=a:i._$Cl=a),a!==void 0&&(t=Nt(e,a._$AS(e,t.values),a,r)),t}var Un=class{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:r},parts:o}=this._$AD,s=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:Mt).importNode(r,!0);zt.currentNode=s;let n=zt.nextNode(),h=0,a=0,l=o[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Ge(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new Mn(n,this,t)),this.u.push(d),l=o[++a]}h!==(l==null?void 0:l.index)&&(n=zt.nextNode(),h++)}return s}p(t){let i=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}},Ge=class{constructor(t,i,r,o){var s;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this._$Cm=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Nt(this,t,i),_e(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==K&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):zn(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==P&&_e(this._$AH)?this._$AA.nextSibling.data=t:this.T(Mt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Ie.createElement(o.h,this.options)),o);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(r);else{const n=new Un(s,this),h=n.v(this.options);n.p(r),this.T(h),this._$AH=n}}_$AC(t){let i=Qr.get(t.strings);return i===void 0&&Qr.set(t.strings,i=new Ie(t)),i}k(t){_s(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const s of t)o===i.length?i.push(r=new Ge(this.O(be()),this.O(be()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},Qe=class{constructor(e,t,i,r,o){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const o=this.strings;let s=!1;if(o===void 0)e=Nt(this,e,t,0),s=!_e(e)||e!==this._$AH&&e!==K,s&&(this._$AH=e);else{const n=e;let h,a;for(e=o[0],h=0;h<o.length-1;h++)a=Nt(this,n[i+h],t,h),a===K&&(a=this._$AH[h]),s||(s=!_e(a)||a!==this._$AH[h]),a===P?e=P:e!==P&&(e+=(a??"")+o[h+1]),this._$AH[h]=a}s&&!r&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Rn=class extends Qe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}},On=Lt?Lt.emptyScript:"",Vn=class extends Qe{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,On):this.element.removeAttribute(this.name)}},Ln=class extends Qe{constructor(t,i,r,o,s){super(t,i,r,o,s),this.type=5}_$AI(t,i=this){var r;if((t=(r=Nt(this,t,i,0))!==null&&r!==void 0?r:P)===K)return;const o=this._$AH,s=t===P&&o!==P||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==P&&(o===P||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,r;typeof this._$AH=="function"?this._$AH.call((r=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},Mn=class{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Nt(this,t)}},to=Fe.litHtmlPolyfillSupport;to==null||to(Ie,Ge),((vi=Fe.litHtmlVersions)!==null&&vi!==void 0?vi:Fe.litHtmlVersions=[]).push("2.6.1");var Nn=(e,t,i)=>{var r,o;const s=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:t;let n=s._$litPart$;if(n===void 0){const h=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=n=new Ge(t.insertBefore(be(),h),h,void 0,i??{})}return n._$AI(e),n},fi,mi,ce=class extends $t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Nn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return K}};ce.finalized=!0,ce._$litElement$=!0,(fi=globalThis.litElementHydrateSupport)===null||fi===void 0||fi.call(globalThis,{LitElement:ce});var eo=globalThis.litElementPolyfillSupport;eo==null||eo({LitElement:ce});((mi=globalThis.litElementVersions)!==null&&mi!==void 0?mi:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var mt=at`
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
`,Hn=at`
  ${mt}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function io(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Dn(e){var t,i;const r=[];function o(h){h instanceof HTMLElement&&(r.push(h),h.shadowRoot!==null&&h.shadowRoot.mode==="open"&&o(h.shadowRoot)),[...h.children].forEach(a=>o(a))}o(e);const s=(t=r.find(h=>io(h)))!=null?t:null,n=(i=r.reverse().find(h=>io(h)))!=null?i:null;return{start:s,end:n}}var te=[],Fn=class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){te.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){te=te.filter(e=>e!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return te[te.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=Dn(this.element),i=this.tabDirection==="forward"?e:t;typeof(i==null?void 0:i.focus)=="function"&&i.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){e.key==="Tab"&&e.shiftKey&&(this.tabDirection="backward",requestAnimationFrame(()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}},Wi=new Set;function In(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function gi(e){if(Wi.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=In();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function bi(e){Wi.delete(e),Wi.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scrollbar-width"))}function je(e,t){return new Promise(i=>{function r(o){o.target===e&&(e.removeEventListener(t,r),i())}e.addEventListener(t,r)})}var ws=Object.defineProperty,jn=Object.defineProperties,Bn=Object.getOwnPropertyDescriptor,qn=Object.getOwnPropertyDescriptors,ro=Object.getOwnPropertySymbols,Wn=Object.prototype.hasOwnProperty,Kn=Object.prototype.propertyIsEnumerable,oo=(e,t,i)=>t in e?ws(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,gt=(e,t)=>{for(var i in t||(t={}))Wn.call(t,i)&&oo(e,i,t[i]);if(ro)for(var i of ro(t))Kn.call(t,i)&&oo(e,i,t[i]);return e},ti=(e,t)=>jn(e,qn(t)),v=(e,t,i,r)=>{for(var o=r>1?void 0:r?Bn(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(o=(r?n(t,i,o):n(o))||o);return r&&o&&ws(t,i,o),o};function ut(e,t,i){return new Promise(r=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,ti(gt({},i),{duration:Zn()?0:i.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function Zn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function xt(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{const r=requestAnimationFrame(i);t.addEventListener("cancel",()=>r,{once:!0}),t.addEventListener("finish",()=>r,{once:!0}),t.cancel()})))}var $s=new Map,Xn=new WeakMap;function Yn(e){return e??{keyframes:[],options:{duration:0}}}function so(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function W(e,t){$s.set(e,Yn(t))}function pt(e,t,i){const r=Xn.get(e);if(r!=null&&r[t])return so(r[t],i.dir);const o=$s.get(t);return o?so(o,i.dir):{keyframes:[],options:{duration:0}}}var Ki=new Set,Jn=new MutationObserver(xs),Et=new Map,Ss=document.documentElement.dir||"ltr",As=document.documentElement.lang||navigator.language,de;Jn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Gn(...e){e.map(t=>{const i=t.$code.toLowerCase();Et.has(i)?Et.set(i,Object.assign(Object.assign({},Et.get(i)),t)):Et.set(i,t),de||(de=t)}),xs()}function xs(){Ss=document.documentElement.dir||"ltr",As=document.documentElement.lang||navigator.language,[...Ki.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Qn=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ki.add(this.host)}hostDisconnected(){Ki.delete(this.host)}dir(){return`${this.host.dir||Ss}`.toLowerCase()}lang(){return`${this.host.lang||As}`.toLowerCase()}term(e,...t){var i,r;const o=new Intl.Locale(this.lang()),s=o==null?void 0:o.language.toLowerCase(),n=(r=(i=o==null?void 0:o.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&r!==void 0?r:"",h=Et.get(`${s}-${n}`),a=Et.get(s);let l;if(h&&h[e])l=h[e];else if(a&&a[e])l=a[e];else if(de&&de[e])l=de[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof l=="function"?l(...t):l}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}},ei=class extends Qn{},ta={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Gn(ta);var mr=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},z=e=>e??P;/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function G(e,t){const i=gt({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:s}=r,n=Array.isArray(e)?e:[e];r.update=function(h){n.forEach(a=>{const l=a;if(h.has(l)){const d=h.get(l),c=this[l];d!==c&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](d,c)}}),s.call(this,h)}}}var rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},gr=e=>(...t)=>({_$litDirective$:e,values:t}),br=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var xe=gr(class extends br{constructor(e){var t;if(super(e),e.type!==rt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,r;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.nt.add(s);return this.render(t)}const o=e.element.classList;this.nt.forEach(s=>{s in t||(o.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((r=this.st)===null||r===void 0)&&r.has(s)||(n?(o.add(s),this.nt.add(s)):(o.remove(s),this.nt.delete(s)))}return K}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var bt=e=>t=>typeof t=="function"?((i,r)=>(customElements.define(i,r),r))(e,t):((i,r)=>{const{kind:o,elements:s}=r;return{kind:o,elements:s,finisher(n){customElements.define(i,n)}}})(e,t),ea=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?ti(gt({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function g(e){return(t,i)=>i!==void 0?((r,o,s)=>{o.constructor.createProperty(s,r)})(e,t,i):ea(e,t)}function Ee(e){return g(ti(gt({},e),{state:!0}))}var ia=({finisher:e,descriptor:t})=>(i,r)=>{var o;if(r===void 0){const s=(o=i.originalKey)!==null&&o!==void 0?o:i.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:ti(gt({},i),{key:s});return e!=null&&(n.finisher=function(h){e(h,s)}),n}{const s=i.constructor;t!==void 0&&Object.defineProperty(i,r,t(r)),e==null||e(s,r)}};function _t(e,t){return ia({descriptor:i=>{const r={get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const o=typeof i=="symbol"?Symbol():"__"+i;r.get=function(){var s,n;return this[o]===void 0&&(this[o]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[o]}}return r}})}var _i;((_i=window.HTMLSlotElement)===null||_i===void 0?void 0:_i.prototype.assignedElements)!=null;var Q=class extends ce{emit(e,t){const i=new CustomEvent(e,gt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}};v([g()],Q.prototype,"dir",2);v([g()],Q.prototype,"lang",2);/*! Bundled license information:

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
*/function no(e){return e.charAt(0).toUpperCase()+e.slice(1)}var B=class extends Q{constructor(){super(...arguments),this.hasSlotController=new mr(this,"footer"),this.localize=new ei(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new Fn(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),gi(this)))}disconnectedCallback(){super.disconnectedCallback(),bi(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=pt(this,"drawer.denyClose",{dir:this.localize.dir()});ut(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(e){this.open&&!this.contained&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),gi(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([xt(this.drawer),xt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=pt(this,`drawer.show${no(this.placement)}`,{dir:this.localize.dir()}),i=pt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([ut(this.panel,t.keyframes,t.options),ut(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),bi(this)),await Promise.all([xt(this.drawer),xt(this.overlay)]);const e=pt(this,`drawer.hide${no(this.placement)}`,{dir:this.localize.dir()}),t=pt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([ut(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),ut(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),gi(this)),this.open&&this.contained&&(this.modal.deactivate(),bi(this))}async show(){if(!this.open)return this.open=!0,je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,je(this,"sl-after-hide")}render(){return X`
      <div
        part="base"
        class=${xe({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${z(this.noHeader?this.label:void 0)}
          aria-labelledby=${z(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":X`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};B.styles=Hn;v([_t(".drawer")],B.prototype,"drawer",2);v([_t(".drawer__panel")],B.prototype,"panel",2);v([_t(".drawer__overlay")],B.prototype,"overlay",2);v([g({type:Boolean,reflect:!0})],B.prototype,"open",2);v([g({reflect:!0})],B.prototype,"label",2);v([g({reflect:!0})],B.prototype,"placement",2);v([g({type:Boolean,reflect:!0})],B.prototype,"contained",2);v([g({attribute:"no-header",type:Boolean,reflect:!0})],B.prototype,"noHeader",2);v([G("open",{waitUntilFirstUpdate:!0})],B.prototype,"handleOpenChange",1);v([G("contained",{waitUntilFirstUpdate:!0})],B.prototype,"handleNoModalChange",1);B=v([bt("sl-drawer")],B);W("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});W("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});W("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});W("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});W("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});W("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});W("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});W("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});W("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});W("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});W("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var ra=at`
  ${mt}

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
`,Es=Symbol.for(""),oa=e=>{if((e==null?void 0:e.r)===Es)return e==null?void 0:e._$litStatic$},Be=(e,...t)=>({_$litStatic$:t.reduce((i,r,o)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:Es}),ao=new Map,sa=e=>(t,...i)=>{const r=i.length;let o,s;const n=[],h=[];let a,l=0,d=!1;for(;l<r;){for(a=t[l];l<r&&(s=i[l],(o=oa(s))!==void 0);)a+=o+t[++l],d=!0;h.push(s),n.push(a),l++}if(l===r&&n.push(t[r]),d){const c=n.join("$$lit$$");(t=ao.get(c))===void 0&&(n.raw=n,ao.set(c,t=n)),i=h}return e(t,...i)},Re=sa(X);/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var q=class extends Q{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Be`a`:Be`button`;return Re`
      <${t}
        part="base"
        class=${xe({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${z(e?void 0:this.disabled)}
        type=${z(e?void 0:"button")}
        href=${z(e?this.href:void 0)}
        target=${z(e?this.target:void 0)}
        download=${z(e?this.download:void 0)}
        rel=${z(e&&this.target?"noreferrer noopener":void 0)}
        role=${z(e?void 0:"button")}
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
      </${t}>
    `}};q.styles=ra;v([_t(".icon-button")],q.prototype,"button",2);v([Ee()],q.prototype,"hasFocus",2);v([g()],q.prototype,"name",2);v([g()],q.prototype,"library",2);v([g()],q.prototype,"src",2);v([g()],q.prototype,"href",2);v([g()],q.prototype,"target",2);v([g()],q.prototype,"download",2);v([g()],q.prototype,"label",2);v([g({type:Boolean,reflect:!0})],q.prototype,"disabled",2);q=v([bt("sl-icon-button")],q);var Zi="";function Xi(e){Zi=e}function na(){if(!Zi){const e=[...document.getElementsByTagName("script")],t=e.find(i=>i.hasAttribute("data-shoelace"));if(t)Xi(t.getAttribute("data-shoelace"));else{const i=e.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src));let r="";i&&(r=i.getAttribute("src")),Xi(r.split("/").slice(0,-1).join("/"))}}return Zi.replace(/\/$/,"")}var aa={name:"default",resolver:e=>`${na()}/assets/icons/${e}.svg`},la=aa,lo={caret:`
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
  `},ha={name:"system",resolver:e=>e in lo?`data:image/svg+xml,${encodeURIComponent(lo[e])}`:""},ca=ha,da=[la,ca],Yi=[];function ua(e){Yi.push(e)}function pa(e){Yi=Yi.filter(t=>t!==e)}function ho(e){return da.find(t=>t.name===e)}var yi=new Map;function va(e,t="cors"){if(yi.has(e))return yi.get(e);const i=fetch(e,{mode:t}).then(async r=>({ok:r.ok,status:r.status,html:await r.text()}));return yi.set(e,i),i}var wi=new Map;async function fa(e){if(wi.has(e))return wi.get(e);const t=await va(e),i={ok:t.ok,status:t.status,svg:null};if(t.ok){const r=document.createElement("div");r.innerHTML=t.html;const o=r.firstElementChild;i.svg=(o==null?void 0:o.tagName.toLowerCase())==="svg"?o.outerHTML:""}return wi.set(e,i),i}var ma=at`
  ${mt}

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
`,Ji=class extends br{constructor(e){if(super(e),this.it=P,e.type!==rt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===P||e==null)return this._t=void 0,this.it=e;if(e===K)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ji.directiveName="unsafeHTML",Ji.resultType=1;var Gi=class extends Ji{};Gi.directiveName="unsafeSVG",Gi.resultType=2;var ga=gr(Gi),$i,Y=class extends Q{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),ua(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),pa(this)}getUrl(){const e=ho(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=ho(this.library),i=this.getUrl();if($i||($i=new DOMParser),i)try{const r=await fa(i);if(i!==this.getUrl())return;if(r.ok){const s=$i.parseFromString(r.svg,"text/html").body.querySelector("svg");s!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,s),this.svg=s.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}render(){return X` ${ga(this.svg)} `}};Y.styles=ma;v([Ee()],Y.prototype,"svg",2);v([g({reflect:!0})],Y.prototype,"name",2);v([g()],Y.prototype,"src",2);v([g()],Y.prototype,"label",2);v([g({reflect:!0})],Y.prototype,"library",2);v([G("label")],Y.prototype,"handleLabelChange",1);v([G(["name","src","library"])],Y.prototype,"setIcon",1);Y=v([bt("sl-icon")],Y);/*! Bundled license information:

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
*/var ba=e=>e.strings===void 0,_a={},ya=(e,t=_a)=>e._$AH=t,co=gr(class extends br{constructor(e){if(super(e),e.type!==rt.PROPERTY&&e.type!==rt.ATTRIBUTE&&e.type!==rt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ba(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===K||t===P)return t;const i=e.element,r=e.name;if(e.type===rt.PROPERTY){if(t===i[r])return K}else if(e.type===rt.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(r))return K}else if(e.type===rt.ATTRIBUTE&&i.getAttribute(r)===t+"")return K;return ya(e),t}});/*! Bundled license information:

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
*/var wa=(e="value")=>(t,i)=>{const r=t.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(s,n,h){var a;const l=r.getPropertyOptions(e),d=typeof l.attribute=="string"?l.attribute:e;if(s===d){const c=l.converter||ge,p=(typeof c=="function"?c:(a=c==null?void 0:c.fromAttribute)!=null?a:ge.fromAttribute)(h,l.type);this[e]!==p&&(this[i]=p)}o.call(this,s,n,h)}},$a=at`
  ${mt}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,ee=new WeakMap,uo=new WeakMap,ie=new WeakMap,ks=class{constructor(e,t){(this.host=e).addController(this),this.options=gt({form:i=>{if(i.hasAttribute("form")&&i.getAttribute("form")!==""){const r=i.getRootNode(),o=i.getAttribute("form");if(o)return r.getElementById(o)}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var r;return(r=i.disabled)!=null?r:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,setValue:(i,r)=>i.value=r},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(e){e?(this.form=e,ee.has(this.form)?ee.get(this.form).add(this.host):ee.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ie.has(this.form)||(ie.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=ee.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ie.has(this.form)&&(this.form.reportValidity=ie.get(this.form),ie.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),i=this.options.name(this.host),r=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";!t&&!o&&typeof i=="string"&&i.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(s=>{e.formData.append(i,s.toString())}):e.formData.append(i,r.toString()))}handleFormSubmit(e){var t;const i=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=ee.get(this.form))==null||t.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!i&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){uo.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&i.setAttribute(r,t.getAttribute(r))})),this.form.append(i),i.click(),i.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){var t;const i=this.host,r=Boolean(uo.get(i)),o=Boolean(i.required);(t=this.form)!=null&&t.noValidate?(i.removeAttribute("data-required"),i.removeAttribute("data-optional"),i.removeAttribute("data-invalid"),i.removeAttribute("data-valid"),i.removeAttribute("data-user-invalid"),i.removeAttribute("data-user-valid")):(i.toggleAttribute("data-required",o),i.toggleAttribute("data-optional",!o),i.toggleAttribute("data-invalid",!e),i.toggleAttribute("data-valid",e),i.toggleAttribute("data-user-invalid",!e&&r),i.toggleAttribute("data-user-valid",e&&r))}updateValidity(){const e=this.host;this.setValidity(e.checkValidity())}},M=class extends Q{constructor(){super(...arguments),this.formControlController=new ks(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return X`
      <label
        part="base"
        class=${xe({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${z(this.value)}
          .indeterminate=${co(this.indeterminate)}
          .checked=${co(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?X`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?X`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <slot part="label" class="checkbox__label"></slot>
      </label>
    `}};M.styles=$a;v([_t('input[type="checkbox"]')],M.prototype,"input",2);v([Ee()],M.prototype,"hasFocus",2);v([g()],M.prototype,"title",2);v([g()],M.prototype,"name",2);v([g()],M.prototype,"value",2);v([g({reflect:!0})],M.prototype,"size",2);v([g({type:Boolean,reflect:!0})],M.prototype,"disabled",2);v([g({type:Boolean,reflect:!0})],M.prototype,"checked",2);v([g({type:Boolean,reflect:!0})],M.prototype,"indeterminate",2);v([wa("checked")],M.prototype,"defaultChecked",2);v([g({reflect:!0})],M.prototype,"form",2);v([g({type:Boolean,reflect:!0})],M.prototype,"required",2);v([G("disabled",{waitUntilFirstUpdate:!0})],M.prototype,"handleDisabledChange",1);v([G(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],M.prototype,"handleStateChange",1);M=v([bt("sl-checkbox")],M);var Sa=at`
  ${mt}

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
`,yt=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),J=class extends Q{constructor(){super(...arguments),this.hasSlotController=new mr(this,"icon","suffix"),this.localize=new ei(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await xt(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=pt(this,"alert.show",{dir:this.localize.dir()});await ut(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await xt(this.base);const{keyframes:e,options:t}=pt(this,"alert.hide",{dir:this.localize.dir()});await ut(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,je(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,je(this,"sl-after-hide")}async toast(){return new Promise(e=>{yt.parentElement===null&&document.body.append(yt),yt.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{yt.removeChild(this),e(),yt.querySelector("sl-alert")===null&&yt.remove()},{once:!0})})}render(){return X`
      <div
        part="base"
        class=${xe({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?X`
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
    `}};J.styles=Sa;v([_t('[part~="base"]')],J.prototype,"base",2);v([g({type:Boolean,reflect:!0})],J.prototype,"open",2);v([g({type:Boolean,reflect:!0})],J.prototype,"closable",2);v([g({reflect:!0})],J.prototype,"variant",2);v([g({type:Number})],J.prototype,"duration",2);v([G("open",{waitUntilFirstUpdate:!0})],J.prototype,"handleOpenChange",1);v([G("duration")],J.prototype,"handleDurationChange",1);J=v([bt("sl-alert")],J);W("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});W("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var Aa=at`
  ${mt}

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
`,$=class extends Q{constructor(){super(...arguments),this.formControlController=new ks(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),i=e.getAttribute("form");return t.getElementById(i)}return e.closest("form")}}),this.hasSlotController=new mr(this,"[default]","prefix","suffix"),this.localize=new ei(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Be`a`:Be`button`;return Re`
      <${t}
        part="base"
        class=${xe({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${z(e?void 0:this.disabled)}
        type=${z(e?void 0:this.type)}
        title=${this.title}
        name=${z(e?void 0:this.name)}
        value=${z(e?void 0:this.value)}
        href=${z(e?this.href:void 0)}
        target=${z(e?this.target:void 0)}
        download=${z(e?this.download:void 0)}
        rel=${z(e&&this.target?"noreferrer noopener":void 0)}
        role=${z(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Re` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Re`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};$.styles=Aa;v([_t(".button")],$.prototype,"button",2);v([Ee()],$.prototype,"hasFocus",2);v([Ee()],$.prototype,"invalid",2);v([g()],$.prototype,"title",2);v([g({reflect:!0})],$.prototype,"variant",2);v([g({reflect:!0})],$.prototype,"size",2);v([g({type:Boolean,reflect:!0})],$.prototype,"caret",2);v([g({type:Boolean,reflect:!0})],$.prototype,"disabled",2);v([g({type:Boolean,reflect:!0})],$.prototype,"loading",2);v([g({type:Boolean,reflect:!0})],$.prototype,"outline",2);v([g({type:Boolean,reflect:!0})],$.prototype,"pill",2);v([g({type:Boolean,reflect:!0})],$.prototype,"circle",2);v([g()],$.prototype,"type",2);v([g()],$.prototype,"name",2);v([g()],$.prototype,"value",2);v([g()],$.prototype,"href",2);v([g()],$.prototype,"target",2);v([g()],$.prototype,"download",2);v([g()],$.prototype,"form",2);v([g({attribute:"formaction"})],$.prototype,"formAction",2);v([g({attribute:"formenctype"})],$.prototype,"formEnctype",2);v([g({attribute:"formmethod"})],$.prototype,"formMethod",2);v([g({attribute:"formnovalidate",type:Boolean})],$.prototype,"formNoValidate",2);v([g({attribute:"formtarget"})],$.prototype,"formTarget",2);v([G("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);$=v([bt("sl-button")],$);var xa=at`
  ${mt}

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
`,Qi=class extends Q{constructor(){super(...arguments),this.localize=new ei(this)}render(){return X`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Qi.styles=xa;Qi=v([bt("sl-spinner")],Qi);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=window,_r=Oe.ShadowRoot&&(Oe.ShadyCSS===void 0||Oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yr=Symbol(),po=new WeakMap;let Cs=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==yr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(_r&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=po.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&po.set(i,t))}return t}toString(){return this.cssText}};const zs=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Cs(i,e,yr)},vo=_r?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return(r=>new Cs(typeof r=="string"?r:r+"",void 0,yr))(i)})(e):e;var Si;const qe=window,fo=qe.trustedTypes,Ea=fo?fo.emptyScript:"",mo=qe.reactiveElementPolyfillSupport,tr={toAttribute(e,t){switch(t){case Boolean:e=e?Ea:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Ps=(e,t)=>t!==e&&(t==t||e==e),Ai={attribute:!0,type:String,converter:tr,reflect:!1,hasChanged:Ps};let St=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,r)=>{const o=this._$Ep(r,i);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,i=Ai){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,i);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,i,r){return{get(){return this[i]},set(o){const s=this[t];this[i]=o,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ai}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,r=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of r)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)i.unshift(vo(o))}else t!==void 0&&i.push(vo(t));return i}static _$Ep(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,r;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((r,o)=>{_r?r.adoptedStyleSheets=o.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):o.forEach(s=>{const n=document.createElement("style"),h=Oe.litNonce;h!==void 0&&n.setAttribute("nonce",h),n.textContent=s.cssText,r.appendChild(n)})})(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostConnected)===null||r===void 0?void 0:r.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostDisconnected)===null||r===void 0?void 0:r.call(i)})}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$EO(t,i,r=Ai){var o;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:tr).toAttribute(i,r.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,i){var r;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const n=o.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:tr;this._$El=s,this[s]=h.fromAttribute(i,n.type),this._$El=null}}requestUpdate(t,i,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Ps)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let i=!1;const r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(r)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(r)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,r)=>this._$EO(r,this[r],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xi;St.finalized=!0,St.elementProperties=new Map,St.elementStyles=[],St.shadowRootOptions={mode:"open"},mo==null||mo({ReactiveElement:St}),((Si=qe.reactiveElementVersions)!==null&&Si!==void 0?Si:qe.reactiveElementVersions=[]).push("1.6.1");const We=window,Ht=We.trustedTypes,go=Ht?Ht.createPolicy("lit-html",{createHTML:e=>e}):void 0,et=`lit$${(Math.random()+"").slice(9)}$`,Ts="?"+et,ka=`<${Ts}>`,Dt=document,ye=(e="")=>Dt.createComment(e),we=e=>e===null||typeof e!="object"&&typeof e!="function",bo=Array.isArray,re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_o=/-->/g,yo=/>/g,ct=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wo=/'/g,$o=/"/g,So=/^(?:script|style|textarea|title)$/i,Wt=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),Ft=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Ao=new WeakMap,Pt=Dt.createTreeWalker(Dt,129,null,!1);let er=class Us{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let s=0,n=0;const h=t.length-1,a=this.parts,[l,d]=((c,u)=>{const p=c.length-1,y=[];let b,m=u===2?"<svg>":"",w=re;for(let C=0;C<p;C++){const I=c[C];let x,S,T=-1,A=0;for(;A<I.length&&(w.lastIndex=A,S=w.exec(I),S!==null);)A=w.lastIndex,w===re?S[1]==="!--"?w=_o:S[1]!==void 0?w=yo:S[2]!==void 0?(So.test(S[2])&&(b=RegExp("</"+S[2],"g")),w=ct):S[3]!==void 0&&(w=ct):w===ct?S[0]===">"?(w=b??re,T=-1):S[1]===void 0?T=-2:(T=w.lastIndex-S[2].length,x=S[1],w=S[3]===void 0?ct:S[3]==='"'?$o:wo):w===$o||w===wo?w=ct:w===_o||w===yo?w=re:(w=ct,b=void 0);const ke=w===ct&&c[C+1].startsWith("/>")?" ":"";m+=w===re?I+ka:T>=0?(y.push(x),I.slice(0,T)+"$lit$"+I.slice(T)+et+ke):I+et+(T===-2?(y.push(void 0),C):ke)}const U=m+(c[p]||"<?>")+(u===2?"</svg>":"");if(!Array.isArray(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return[go!==void 0?go.createHTML(U):U,y]})(t,i);if(this.el=Us.createElement(l,r),Pt.currentNode=this.el.content,i===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(o=Pt.nextNode())!==null&&a.length<h;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const u of o.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(et)){const p=d[n++];if(c.push(u),p!==void 0){const y=o.getAttribute(p.toLowerCase()+"$lit$").split(et),b=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:b[2],strings:y,ctor:b[1]==="."?Ca:b[1]==="?"?Pa:b[1]==="@"?Ta:ii})}else a.push({type:6,index:s})}for(const u of c)o.removeAttribute(u)}if(So.test(o.tagName)){const c=o.textContent.split(et),u=c.length-1;if(u>0){o.textContent=Ht?Ht.emptyScript:"";for(let p=0;p<u;p++)o.append(c[p],ye()),Pt.nextNode(),a.push({type:2,index:++s});o.append(c[u],ye())}}}else if(o.nodeType===8)if(o.data===Ts)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(et,c+1))!==-1;)a.push({type:7,index:s}),c+=et.length-1}s++}}static createElement(t,i){const r=Dt.createElement("template");return r.innerHTML=t,r}};function It(e,t,i=e,r){var o,s,n,h;if(t===Ft)return t;let a=r!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[r]:i._$Cl;const l=we(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,r)),r!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[r]=a:i._$Cl=a),a!==void 0&&(t=It(e,a._$AS(e,t.values),a,r)),t}let wr=class Rs{constructor(t,i,r,o){var s;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this._$Cm=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=It(this,t,i),we(t)?t===V||t==null||t===""?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==Ft&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(r=>bo(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function")(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==V&&we(this._$AH)?this._$AA.nextSibling.data=t:this.T(Dt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=er.createElement(o.h,this.options)),o);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(r);else{const n=new class{constructor(a,l){this.u=[],this._$AN=void 0,this._$AD=a,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(a){var l;const{el:{content:d},parts:c}=this._$AD,u=((l=a==null?void 0:a.creationScope)!==null&&l!==void 0?l:Dt).importNode(d,!0);Pt.currentNode=u;let p=Pt.nextNode(),y=0,b=0,m=c[0];for(;m!==void 0;){if(y===m.index){let w;m.type===2?w=new wr(p,p.nextSibling,this,a):m.type===1?w=new m.ctor(p,m.name,m.strings,this,a):m.type===6&&(w=new Ua(p,this,a)),this.u.push(w),m=c[++b]}y!==(m==null?void 0:m.index)&&(p=Pt.nextNode(),y++)}return u}p(a){let l=0;for(const d of this.u)d!==void 0&&(d.strings!==void 0?(d._$AI(a,d,l),l+=d.strings.length-2):d._$AI(a[l])),l++}}(s,this),h=n.v(this.options);n.p(r),this.T(h),this._$AH=n}}_$AC(t){let i=Ao.get(t.strings);return i===void 0&&Ao.set(t.strings,i=new er(t)),i}k(t){bo(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const s of t)o===i.length?i.push(r=new Rs(this.O(ye()),this.O(ye()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},ii=class{constructor(e,t,i,r,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const o=this.strings;let s=!1;if(o===void 0)e=It(this,e,t,0),s=!we(e)||e!==this._$AH&&e!==Ft,s&&(this._$AH=e);else{const n=e;let h,a;for(e=o[0],h=0;h<o.length-1;h++)a=It(this,n[i+h],t,h),a===Ft&&(a=this._$AH[h]),s||(s=!we(a)||a!==this._$AH[h]),a===V?e=V:e!==V&&(e+=(a??"")+o[h+1]),this._$AH[h]=a}s&&!r&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ca=class extends ii{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}};const za=Ht?Ht.emptyScript:"";let Pa=class extends ii{constructor(){super(...arguments),this.type=4}j(e){e&&e!==V?this.element.setAttribute(this.name,za):this.element.removeAttribute(this.name)}},Ta=class extends ii{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=It(this,e,t,0))!==null&&i!==void 0?i:V)===Ft)return;const r=this._$AH,o=e===V&&r!==V||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==V&&(r===V||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Ua=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){It(this,e)}};const xo=We.litHtmlPolyfillSupport;xo==null||xo(er,wr),((xi=We.litHtmlVersions)!==null&&xi!==void 0?xi:We.litHtmlVersions=[]).push("2.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ei,ki;let Tt=class extends St{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((i,r,o)=>{var s,n;const h=(s=o==null?void 0:o.renderBefore)!==null&&s!==void 0?s:r;let a=h._$litPart$;if(a===void 0){const l=(n=o==null?void 0:o.renderBefore)!==null&&n!==void 0?n:null;h._$litPart$=a=new wr(r.insertBefore(ye(),l),l,void 0,o??{})}return a._$AI(i),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ft}};Tt.finalized=!0,Tt._$litElement$=!0,(Ei=globalThis.litElementHydrateSupport)===null||Ei===void 0||Ei.call(globalThis,{LitElement:Tt});const Eo=globalThis.litElementPolyfillSupport;Eo==null||Eo({LitElement:Tt}),((ki=globalThis.litElementVersions)!==null&&ki!==void 0?ki:globalThis.litElementVersions=[]).push("3.2.2");var Ci,zi,Ve=window,$r=Ve.ShadowRoot&&(Ve.ShadyCSS===void 0||Ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Sr=Symbol(),ko=new WeakMap,Os=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Sr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($r&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ko.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ko.set(t,e))}return e}toString(){return this.cssText}},Pi=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Os(i,e,Sr)},Co=$r?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return(r=>new Os(typeof r=="string"?r:r+"",void 0,Sr))(i)})(e):e,Ke=window,zo=Ke.trustedTypes,Ra=zo?zo.emptyScript:"",Po=Ke.reactiveElementPolyfillSupport,$e={toAttribute(e,t){switch(t){case Boolean:e=e?Ra:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Vs=(e,t)=>t!==e&&(t==t||e==e),Ti={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:Vs},At=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=Ti){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ti}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Co(r))}else e!==void 0&&t.push(Co(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{$r?i.adoptedStyleSheets=r.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):r.forEach(o=>{const s=document.createElement("style"),n=Ve.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=o.cssText,i.appendChild(s)})})(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Ti){var r;const o=this.constructor._$Ep(e,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:$e).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,o=r._$Ev.get(e);if(o!==void 0&&this._$El!==o){const s=r.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:$e;this._$El=o,this[o]=n.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Vs)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};At.finalized=!0,At.elementProperties=new Map,At.elementStyles=[],At.shadowRootOptions={mode:"open"},Po==null||Po({ReactiveElement:At}),((Ci=Ke.reactiveElementVersions)!==null&&Ci!==void 0?Ci:Ke.reactiveElementVersions=[]).push("1.6.1");var To,Ze=window,jt=Ze.trustedTypes,Uo=jt?jt.createPolicy("lit-html",{createHTML:e=>e}):void 0,it=`lit$${(Math.random()+"").slice(9)}$`,Ls="?"+it,Oa=`<${Ls}>`,Bt=document,Se=(e="")=>Bt.createComment(e),Ae=e=>e===null||typeof e!="object"&&typeof e!="function",Ro=Array.isArray,oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oo=/-->/g,Vo=/>/g,dt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lo=/'/g,Mo=/"/g,No=/^(?:script|style|textarea|title)$/i,Ho=(To=1,(e,...t)=>({_$litType$:To,strings:e,values:t})),Z=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Do=new WeakMap,Ut=Bt.createTreeWalker(Bt,129,null,!1),Xe=class{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,s=0;const n=e.length-1,h=this.parts,[a,l]=((d,c)=>{const u=d.length-1,p=[];let y,b=c===2?"<svg>":"",m=oe;for(let U=0;U<u;U++){const C=d[U];let I,x,S=-1,T=0;for(;T<C.length&&(m.lastIndex=T,x=m.exec(C),x!==null);)T=m.lastIndex,m===oe?x[1]==="!--"?m=Oo:x[1]!==void 0?m=Vo:x[2]!==void 0?(No.test(x[2])&&(y=RegExp("</"+x[2],"g")),m=dt):x[3]!==void 0&&(m=dt):m===dt?x[0]===">"?(m=y??oe,S=-1):x[1]===void 0?S=-2:(S=m.lastIndex-x[2].length,I=x[1],m=x[3]===void 0?dt:x[3]==='"'?Mo:Lo):m===Mo||m===Lo?m=dt:m===Oo||m===Vo?m=oe:(m=dt,y=void 0);const A=m===dt&&d[U+1].startsWith("/>")?" ":"";b+=m===oe?C+Oa:S>=0?(p.push(I),C.slice(0,S)+"$lit$"+C.slice(S)+it+A):C+it+(S===-2?(p.push(void 0),U):A)}const w=b+(d[u]||"<?>")+(c===2?"</svg>":"");if(!Array.isArray(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Uo!==void 0?Uo.createHTML(w):w,p]})(e,t);if(this.el=Xe.createElement(a,i),Ut.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(r=Ut.nextNode())!==null&&h.length<n;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const c of r.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(it)){const u=l[s++];if(d.push(c),u!==void 0){const p=r.getAttribute(u.toLowerCase()+"$lit$").split(it),y=/([.?@])?(.*)/.exec(u);h.push({type:1,index:o,name:y[2],strings:p,ctor:y[1]==="."?Va:y[1]==="?"?Ma:y[1]==="@"?Na:ri})}else h.push({type:6,index:o})}for(const c of d)r.removeAttribute(c)}if(No.test(r.tagName)){const d=r.textContent.split(it),c=d.length-1;if(c>0){r.textContent=jt?jt.emptyScript:"";for(let u=0;u<c;u++)r.append(d[u],Se()),Ut.nextNode(),h.push({type:2,index:++o});r.append(d[c],Se())}}}else if(r.nodeType===8)if(r.data===Ls)h.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(it,d+1))!==-1;)h.push({type:7,index:o}),d+=it.length-1}o++}}static createElement(e,t){const i=Bt.createElement("template");return i.innerHTML=e,i}};function qt(e,t,i=e,r){var o,s,n,h;if(t===Z)return t;let a=r!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[r]:i._$Cl;const l=Ae(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,i,r)),r!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[r]=a:i._$Cl=a),a!==void 0&&(t=qt(e,a._$AS(e,t.values),a,r)),t}var Ye=class{constructor(e,t,i,r){var o;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cm=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=qt(this,e,t),Ae(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==Z&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):(i=>Ro(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function")(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==R&&Ae(this._$AH)?this._$AA.nextSibling.data=e:this.T(Bt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Xe.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(i);else{const s=new class{constructor(h,a){this.u=[],this._$AN=void 0,this._$AD=h,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(h){var a;const{el:{content:l},parts:d}=this._$AD,c=((a=h==null?void 0:h.creationScope)!==null&&a!==void 0?a:Bt).importNode(l,!0);Ut.currentNode=c;let u=Ut.nextNode(),p=0,y=0,b=d[0];for(;b!==void 0;){if(p===b.index){let m;b.type===2?m=new Ye(u,u.nextSibling,this,h):b.type===1?m=new b.ctor(u,b.name,b.strings,this,h):b.type===6&&(m=new Ha(u,this,h)),this.u.push(m),b=d[++y]}p!==(b==null?void 0:b.index)&&(u=Ut.nextNode(),p++)}return c}p(h){let a=0;for(const l of this.u)l!==void 0&&(l.strings!==void 0?(l._$AI(h,l,a),a+=l.strings.length-2):l._$AI(h[a])),a++}}(o,this),n=s.v(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(e){let t=Do.get(e.strings);return t===void 0&&Do.set(e.strings,t=new Xe(e)),t}k(e){Ro(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new Ye(this.O(Se()),this.O(Se()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ri=class{constructor(e,t,i,r,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const o=this.strings;let s=!1;if(o===void 0)e=qt(this,e,t,0),s=!Ae(e)||e!==this._$AH&&e!==Z,s&&(this._$AH=e);else{const n=e;let h,a;for(e=o[0],h=0;h<o.length-1;h++)a=qt(this,n[i+h],t,h),a===Z&&(a=this._$AH[h]),s||(s=!Ae(a)||a!==this._$AH[h]),a===R?e=R:e!==R&&(e+=(a??"")+o[h+1]),this._$AH[h]=a}s&&!r&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Va=class extends ri{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}},La=jt?jt.emptyScript:"",Ma=class extends ri{constructor(){super(...arguments),this.type=4}j(e){e&&e!==R?this.element.setAttribute(this.name,La):this.element.removeAttribute(this.name)}},Na=class extends ri{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=qt(this,e,t,0))!==null&&i!==void 0?i:R)===Z)return;const r=this._$AH,o=e===R&&r!==R||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==R&&(r===R||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Ha=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){qt(this,e)}},Fo=Ze.litHtmlPolyfillSupport;Fo==null||Fo(Xe,Ye),((zi=Ze.litHtmlVersions)!==null&&zi!==void 0?zi:Ze.litHtmlVersions=[]).push("2.6.1");var Ui,Ri,ue=class extends At{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((i,r,o)=>{var s,n;const h=(s=o==null?void 0:o.renderBefore)!==null&&s!==void 0?s:r;let a=h._$litPart$;if(a===void 0){const l=(n=o==null?void 0:o.renderBefore)!==null&&n!==void 0?n:null;h._$litPart$=a=new Ye(r.insertBefore(Se(),l),l,void 0,o??{})}return a._$AI(i),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Z}};ue.finalized=!0,ue._$litElement$=!0,(Ui=globalThis.litElementHydrateSupport)===null||Ui===void 0||Ui.call(globalThis,{LitElement:ue});var Io=globalThis.litElementPolyfillSupport;Io==null||Io({LitElement:ue}),((Ri=globalThis.litElementVersions)!==null&&Ri!==void 0?Ri:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

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
*/var pe,Da=Pi`
  ${Pi`
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
  ${Pi`
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
`,ir=1,jo=3,Bo=4,Ms=e=>(...t)=>({_$litDirective$:e,values:t}),Ns=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Fa={},Ia=Ms(class extends Ns{constructor(e){if(super(e),e.type!==jo&&e.type!==ir&&e.type!==Bo)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>t.strings===void 0)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Z||t===R)return t;const i=e.element,r=e.name;if(e.type===jo){if(t===i[r])return Z}else if(e.type===Bo){if(!!t===i.hasAttribute(r))return Z}else if(e.type===ir&&i.getAttribute(r)===t+"")return Z;return((o,s=Fa)=>{o._$AH=s})(e),t}}),Hs=Object.defineProperty,ja=Object.defineProperties,Ba=Object.getOwnPropertyDescriptor,qa=Object.getOwnPropertyDescriptors,qo=Object.getOwnPropertySymbols,Wa=Object.prototype.hasOwnProperty,Ka=Object.prototype.propertyIsEnumerable,Wo=(e,t,i)=>t in e?Hs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Kt=(e,t)=>{for(var i in t||(t={}))Wa.call(t,i)&&Wo(e,i,t[i]);if(qo)for(var i of qo(t))Ka.call(t,i)&&Wo(e,i,t[i]);return e},Ar=(e,t)=>ja(e,qa(t)),k=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?Ba(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&Hs(t,i,s),s},se=new WeakMap,Ko=new WeakMap,ne=new WeakMap,rr=new Set,Za=new MutationObserver(Is),kt=new Map,Ds=document.documentElement.dir||"ltr",Fs=document.documentElement.lang||navigator.language;function Is(){Ds=document.documentElement.dir||"ltr",Fs=document.documentElement.lang||navigator.language,[...rr.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}Za.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var Xa=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){rr.add(this.host)}hostDisconnected(){rr.delete(this.host)}dir(){return`${this.host.dir||Ds}`.toLowerCase()}lang(){return`${this.host.lang||Fs}`.toLowerCase()}term(e,...t){var i,r;const o=new Intl.Locale(this.lang()),s=o==null?void 0:o.language.toLowerCase(),n=(r=(i=o==null?void 0:o.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&r!==void 0?r:"",h=kt.get(`${s}-${n}`),a=kt.get(s);let l;if(h&&h[e])l=h[e];else if(a&&a[e])l=a[e];else{if(!pe||!pe[e])return console.error(`No translation found for: ${String(e)}`),String(e);l=pe[e]}return typeof l=="function"?l(...t):l}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}},Ya=class extends Xa{};(function(...e){e.map(t=>{const i=t.$code.toLowerCase();kt.has(i)?kt.set(i,Object.assign(Object.assign({},kt.get(i)),t)):kt.set(i,t),pe||(pe=t)}),Is()})({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var Ce=e=>e??R;function Oi(e,t){const i=Kt({waitUntilFirstUpdate:!1},t);return(r,o)=>{const{update:s}=r,n=Array.isArray(e)?e:[e];r.update=function(h){n.forEach(a=>{const l=a;if(h.has(l)){const d=h.get(l),c=this[l];d!==c&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](d,c))}}),s.call(this,h)}}}var Zo=Ms(class extends Ns{constructor(e){var t;if(super(e),e.type!==ir||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,r;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.nt.add(s);return this.render(t)}const o=e.element.classList;this.nt.forEach(s=>{s in t||(o.remove(s),this.nt.delete(s))});for(const s in t){const n=!!t[s];n===this.nt.has(s)||!((r=this.st)===null||r===void 0)&&r.has(s)||(n?(o.add(s),this.nt.add(s)):(o.remove(s),this.nt.delete(s)))}return Z}}),Ja=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Ar(Kt({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function H(e){return(t,i)=>i!==void 0?((r,o,s)=>{o.constructor.createProperty(s,r)})(e,t,i):Ja(e,t)}function Xo(e){return H(Ar(Kt({},e),{state:!0}))}var Vi,Ga=({finisher:e,descriptor:t})=>(i,r)=>{var o;if(r===void 0){const s=(o=i.originalKey)!==null&&o!==void 0?o:i.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:Ar(Kt({},i),{key:s});return e!=null&&(n.finisher=function(h){e(h,s)}),n}{const s=i.constructor;t!==void 0&&Object.defineProperty(i,r,t(r)),e==null||e(s,r)}};function Yo(e,t){return Ga({descriptor:i=>{const r={get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const o=typeof i=="symbol"?Symbol():"__"+i;r.get=function(){var s,n;return this[o]===void 0&&(this[o]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[o]}}return r}})}(Vi=window.HTMLSlotElement)===null||Vi===void 0||Vi.prototype.assignedElements;var or=class extends ue{emit(e,t){const i=new CustomEvent(e,Kt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}};k([H()],or.prototype,"dir",2),k([H()],or.prototype,"lang",2);/*! Bundled license information:

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
*/var Li,E=class extends or{constructor(){super(...arguments),this.formControlController=new class{constructor(e,t){(this.host=e).addController(this),this.options=Kt({form:i=>{if(i.hasAttribute("form")&&i.getAttribute("form")!==""){const r=i.getRootNode(),o=i.getAttribute("form");if(o)return r.getElementById(o)}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var r;return(r=i.disabled)!=null&&r},reportValidity:i=>typeof i.reportValidity!="function"||i.reportValidity(),setValue:(i,r)=>i.value=r},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(e){e?(this.form=e,se.has(this.form)?se.get(this.form).add(this.host):se.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ne.has(this.form)||(ne.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=se.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ne.has(this.form)&&(this.form.reportValidity=ne.get(this.form),ne.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),i=this.options.name(this.host),r=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";!t&&!o&&typeof i=="string"&&i.length>0&&r!==void 0&&(Array.isArray(r)?r.forEach(s=>{e.formData.append(i,s.toString())}):e.formData.append(i,r.toString()))}handleFormSubmit(e){var t;const i=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=se.get(this.form))==null||t.forEach(o=>{this.setUserInteracted(o,!0)})),!this.form||this.form.noValidate||i||r(this.host)||(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){Ko.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&i.setAttribute(r,t.getAttribute(r))})),this.form.append(i),i.click(),i.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){var t;const i=this.host,r=Boolean(Ko.get(i)),o=Boolean(i.required);(t=this.form)!=null&&t.noValidate?(i.removeAttribute("data-required"),i.removeAttribute("data-optional"),i.removeAttribute("data-invalid"),i.removeAttribute("data-valid"),i.removeAttribute("data-user-invalid"),i.removeAttribute("data-user-valid")):(i.toggleAttribute("data-required",o),i.toggleAttribute("data-optional",!o),i.toggleAttribute("data-invalid",!e),i.toggleAttribute("data-valid",e),i.toggleAttribute("data-user-invalid",!e&&r),i.toggleAttribute("data-user-valid",e&&r))}updateValidity(){const e=this.host;this.setValidity(e.checkValidity())}}(this),this.hasSlotController=new class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}}(this,"help-text","label"),this.localize=new Ya(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",100*e+"%")}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,i=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=t*e;if(this.localize.dir()==="rtl"){const s=`${t-o}px + ${e} * ${r}`;this.output.style.translate=`calc((${s} - ${i/2}px - ${r} / 2))`}else{const s=`${o}px - ${e} * ${r}`;this.output.style.translate=`calc(${s} - ${i/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,r=!!this.helpText||!!t;return Ho`
      <div
        part="form-control"
        class=${Zo({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":r})}
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
            class=${Zo({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${Ce(this.name)}
              ?disabled=${this.disabled}
              min=${Ce(this.min)}
              max=${Ce(this.max)}
              step=${Ce(this.step)}
              .value=${Ia(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip==="none"||this.disabled?"":Ho`
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
    `}};function Jo(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}E.styles=Da,k([Yo(".range__control")],E.prototype,"input",2),k([Yo(".range__tooltip")],E.prototype,"output",2),k([Xo()],E.prototype,"hasFocus",2),k([Xo()],E.prototype,"hasTooltip",2),k([H()],E.prototype,"title",2),k([H()],E.prototype,"name",2),k([H({type:Number})],E.prototype,"value",2),k([H()],E.prototype,"label",2),k([H({attribute:"help-text"})],E.prototype,"helpText",2),k([H({type:Boolean,reflect:!0})],E.prototype,"disabled",2),k([H({type:Number})],E.prototype,"min",2),k([H({type:Number})],E.prototype,"max",2),k([H({type:Number})],E.prototype,"step",2),k([H()],E.prototype,"tooltip",2),k([H({attribute:!1})],E.prototype,"tooltipFormatter",2),k([H({reflect:!0})],E.prototype,"form",2),k([((e="value")=>(t,i)=>{const r=t.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(s,n,h){var a;const l=r.getPropertyOptions(e);if(s===(typeof l.attribute=="string"?l.attribute:e)){const d=l.converter||$e,c=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:$e.fromAttribute)(h,l.type);this[e]!==c&&(this[i]=c)}o.call(this,s,n,h)}})()],E.prototype,"defaultValue",2),k([Oi("value",{waitUntilFirstUpdate:!0})],E.prototype,"handleValueChange",1),k([Oi("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1),k([Oi("hasTooltip",{waitUntilFirstUpdate:!0})],E.prototype,"syncRange",1),E=k([(Li="sl-range",e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(Li,e):((t,i)=>{const{kind:r,elements:o}=i;return{kind:r,elements:o,finisher(s){customElements.define(t,s)}}})(Li,e))],E);var ae=function(){try{window[D].updateSegments();var e=function(){if(!Mi)return Mi=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){Mi=t,window[D].dispatchEvent(new Event("change"))})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},D="__foldables__",Mi=!1,xr=function(){function e(){var r=this;if(window[D]!==void 0)return window[D];var o=document.createDocumentFragment();this.addEventListener=o.addEventListener.bind(o),this.removeEventListener=o.removeEventListener.bind(o),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof r[n]=="function"&&r[n](s),o.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(r,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var h;return function(){var a=arguments,l=this;clearTimeout(h),h=setTimeout(function(){return s.apply(l,a)},n)}}(ae(),200)})}var t,i=e.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var r=[];if(this.verticalViewportSegments>1)for(var o=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,h=o/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)r[a]={top:s,left:0,bottom:s+h,right:n,width:n,height:h},s+=r[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var l=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)r[u]={top:0,left:c,right:c+l,bottom:d,width:l,height:d},c+=r[u].width,c+=this.foldSize;window.visualViewport.segments=r},i.randomizeSegmentsConfiguration=function(r){var o=Math.random()<.5,s=Math.round(Math.random()*(r-1)+1);o?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(D+"-horizontal-viewport-segments")||1},set:function(r){if(isNaN(r))throw new TypeError(r);sessionStorage.setItem(D+"-horizontal-viewport-segments",r),ae()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(D+"-vertical-viewport-segments")||1},set:function(r){if(isNaN(r))throw new TypeError(r);sessionStorage.setItem(D+"-vertical-viewport-segments",r),ae()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(D+"-fold-size")||0},set:function(r){if(!(Number(r)>=0))throw new TypeError(r);sessionStorage.setItem(D+"-fold-size",r),ae()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(D+"-browser-shell-size")||0},set:function(r){if(!(Number(r)>=0))throw new TypeError(r);sessionStorage.setItem(D+"-browser-shell-size",r),ae()}}])&&function(r,o){for(var s=0;s<o.length;s++){var n=o[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}(e.prototype,t),e}();window[D]=new xr,window.visualViewport.segments===void 0&&window[D].updateSegments();var js="-viewport-segments",sr="(\\s*)(@media.*?\\b"+js+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",Qa=/\((.*?)\)/gi,tl=/@media[^\(]+/gi,el=/(horizontal-viewport-segments:)\s?(\d)/gi,il=/(vertical-viewport-segments:)\s?(\d)/gi,rl=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")};function Go(e,t){var i=e.matchAll(t);return i===null?[]:Array.from(i,function(r){return r[2]})[0]}function ol(e){var t=function(r){var o,s=new RegExp(sr,"gi");if(typeof r.matchAll=="function")o=Array.from(r.matchAll(s));else{for(o=[];o[o.length]=s.exec(r););o.length--}return o}(e),i=[[]];return t.forEach(function(r){var o=r[1],s=r[2],n=r[3],h=r[4],a=s.match(tl)||[],l=s.match(Qa)||[],d=Go(s,il);d===void 0&&(d=1);var c=Go(s,el);c===void 0&&(c=1),l=l.filter(function(u){return!u.includes(js)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][c]=""+o+a+l+"{"+n+h+"}"}),i}var nr=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+nr);var Qo,Bs=new xr;if(!nr){var Ni=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Qo=Ni,Promise.all(Qo.map(function(e){return e.href?fetch(e.href).then(function(t){return t.text()}):e.textContent}))).then(function(e){var t=new DocumentFragment;e.forEach(function(i,r){for(var o,s=function(U,C){return U.replace(new RegExp(sr,"gi"),C)}(i,""),n=ol(i),h=Ni[r].href||"inline",a=0,l=Object.entries(n);a<l.length;a++){var d=l[a],c=d[0],u=d[1];ve[c]==null&&(ve[c]=[]);for(var p=0,y=Object.entries(u);p<y.length;p++){var b=y[p];ve[c][b[0]]="/* origin: "+h+" */"+b[1]}}if(h=="inline"||(o=i,new RegExp(sr,"gi").test(o))){var m=document.createElement("style");m.setAttribute("data-css-origin",h),m.textContent=s,t.appendChild(m)}else{var w=document.createElement("link");w.type="text/css",w.rel="stylesheet",w.href=h,t.appendChild(w)}}),Ni.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(t),function(i){nr||(ts(i),Bs.addEventListener("change",function(){return ts(i)}))}()})}var ve=[[]];function ts(e){var t,i=Bs,r=null;(t=e?ve[e.nodeName.toLowerCase()]:ve)[i.verticalViewportSegments]&&(r=t[i.verticalViewportSegments][i.horizontalViewportSegments]);var o,s=t[0][0]?t[0][0]:null;if(r){var n=window.visualViewport.segments,h=!1;n.length>1&&(h=!(n[0].height<window.innerHeight));for(var a=0,l=Object.entries(n);a<l.length;a++)for(var d=l[a],c=d[0],u=0,p=Object.entries(d[1]);u<p.length;u++){var y=p[u],b=y[0];o=y[1]+"px",r=r.replace(rl(h?"viewport-segment-"+b+" "+c+" 0":"viewport-segment-"+b+" 0 "+c),o)}var m="__foldables_sheet__",w=function(C,I){for(var x,S=function(A,ke){var N=typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(N)return(N=N.call(A)).next.bind(N);if(Array.isArray(A)||(N=function(L,Yt){if(L){if(typeof L=="string")return Jo(L,Yt);var j=Object.prototype.toString.call(L).slice(8,-1);return j==="Object"&&L.constructor&&(j=L.constructor.name),j==="Map"||j==="Set"?Array.from(L):j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)?Jo(L,Yt):void 0}}(A))){N&&(A=N);var Xt=0;return function(){return Xt>=A.length?{done:!0}:{done:!1,value:A[Xt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(C.querySelectorAll("."+m));!(x=S()).done;)x.value.remove();var T=document.createElement("style");T.className=m,T.textContent=I,C===document?document.head.appendChild(T):C.appendChild(T)};if(e){var U=e.shadowRoot;"adoptedStyleSheets"in U&&U.adoptedStyleSheets.length>0?U.adoptedStyleSheets[0].replace(s+r):w(U,r)}else w(document,r)}}const tt={Foldable:"foldable",Dual:"dual"};class Zt extends Tt{}f(Zt,"styles",zs`
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
  `);customElements.define("close-icon",class extends Zt{render(){return Wt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}});customElements.define("fullscreen-icon",class extends Zt{render(){return Wt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}});customElements.define("splitview-icon",class extends Zt{render(){return Wt`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}});customElements.define("rotate-icon",class extends Zt{render(){return Wt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}});customElements.define("minimize-icon",class extends Zt{render(){return Wt`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}});class qs extends Tt{constructor(){super();f(this,"_mini_configurator_header");f(this,"_mini_configurator");f(this,"_configurator");f(this,"_configurator_header");f(this,"_device_type_select");f(this,"_orientation_select");f(this,"_seam_slider");f(this,"_seam_container");f(this,"_preview");f(this,"_preview_container");f(this,"_device");f(this,"_frame");f(this,"_device_hinge");f(this,"_currentOrientation");f(this,"_currentDevice");f(this,"_isFullscreen",!1);f(this,"_verticalViewportSegments",1);f(this,"_horizontalViewportSegments",1);f(this,"_fold_width");f(this,"_browser_shell_size");f(this,"_x",0);f(this,"_y",0);f(this,"_offset_x",0);f(this,"_offset_y",0);f(this,"_resizeHandler");f(this,"_handleKeyUp",i=>{i.keyCode==73&&i.ctrlKey&&this._showMiniConfigurator()});f(this,"_startDragMiniConfigurator",async i=>{this._startDrag(i),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove});f(this,"_startDragConfigurator",async i=>{this._startDrag(i),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove});f(this,"_startDrag",async i=>{this._isFullscreen||(this._moved=!1,this._x=i.clientX-this._offset_x,this._y=i.clientY-this._offset_y,this._pointerId=i.pointerId,i.preventDefault())});f(this,"_miniConfiguratorMove",async i=>{this._pointerMove(i),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}});f(this,"_pointerMove",async i=>{if(i.clientY<0||i.clientX<0||i.clientX>window.innerWidth||i.clientY>window.innerHeight)return;let r=i.clientX-this._x,o=i.clientY-this._y;const s=window.getComputedStyle(this.shadowRoot.host),n=parseFloat(s.width),h=parseFloat(s.height);r<0&&(r=0),o<0&&(o=0),o+h>=window.innerHeight&&(o=window.innerHeight-h),r+n>=window.innerWidth&&(r=window.innerWidth-n),this._updateConfiguratorPosition(r,o),i.preventDefault()});f(this,"_stopDragConfigurator",async i=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});f(this,"_stopDragMiniConfigurator",async i=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(i)});f(this,"_stopDrag",async i=>{this._x=this._offset_x,this._y=this._offset_y});f(this,"_onResize",async i=>{this._handleAsusSpanning()});f(this,"_seamValueUpdated",async()=>{this.foldWidth=this._seam_slider.value,this.shadowRoot.host.style.setProperty("--device-fold-width",this.foldWidth+"px"),this._updateFoldablesFeature()});f(this,"_rotationFinished",i=>{this._preview.style.transition=""});this._verticalViewportSegments=1,this._horizontalViewportSegments=1}static get properties(){return{verticalViewportSegments:{type:Number},horizontalViewportSegments:{type:Number}}}_inIframe(){try{return window.self!==window.top}catch{return!0}}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches)return console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this);const i=window.getComputedStyle(this.shadowRoot.host);parseFloat(i.width);const r=parseFloat(i.height);this._updateConfiguratorPosition(20,window.innerHeight-r-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._verticalViewportSegments=1,this._horizontalViewportSegments=1,this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="portrait",this._deviceType=tt.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.horizontalViewportSegments=1,this.verticalViewportSegments=2,this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{this._addZenbookVariables(document.styleSheets[0]),this._addZenbookVariables(this._frame.contentDocument.styleSheets[0])},300)):(this.horizontalViewportSegments=1,this.verticalViewportSegments=1,this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this._orientationFromSegments()}_orientationFromSegments(){return this.horizontalViewportSegments===2&&this.verticalViewportSegments===1?"portrait":this.horizontalViewportSegments===1&&this.verticalViewportSegments===2?"landscape":"portrait"}_addZenbookVariables(i){i.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",i.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(i){this._fold_width=Math.max(0,i)}_orientationChanged(i){const r=this._orientation_select.selectedIndex;this._orientation_select[r].value==="portrait"?(this.horizontalViewportSegments=2,this.verticalViewportSegments=1):(this.horizontalViewportSegments=1,this.verticalViewportSegments=2),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){this._orientationFromSegments()!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this._orientationFromSegments(),this.horizontalViewportSegments===1&&this.verticalViewportSegments===1?this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation():this.horizontalViewportSegments===2?this._applyVerticalRotation():this._applyHorizontalRotation()}get horizontalViewportSegments(){return this._horizontalViewportSegments}set horizontalViewportSegments(i){let r=this._horizontalViewportSegments;this._orientation_select.selectedIndex=i===2?0:1,this._horizontalViewportSegments=i,this.requestUpdate("horizontalViewportSegments",r)}get verticalViewportSegments(){return this._verticalViewportSegments}set verticalViewportSegments(i){let r=this._verticalViewportSegments;this._orientation_select.selectedIndex=i===2?1:0,this._verticalViewportSegments=i,this.requestUpdate("verticalViewportSegments",r)}_deviceTypeChanged(i){const r=this._device_type_select.selectedIndex,o=this._device_type_select[r].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(this.verticalViewportSegments=1,this.horizontalViewportSegments=2,this._currentOrientation="portrait"),o){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this.foldWidth=24,this._deviceType=tt.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=tt.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=tt.Dual,this.foldWidth=28,this._currentDevice="duo";break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=tt.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=tt.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this.verticalViewportSegments=1,this.horizontalViewportSegments=1,this._currentOrientation="portrait",this._currentDevice="duo",this.foldWidth=0,this._deviceType=tt.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature(),this._frame.contentWindow.location.reload(!0)}_calculateAndApplyScaleFactor(){const i=window.getComputedStyle(this._preview_container),r=window.getComputedStyle(this._device),o=parseInt(i.width,10),s=parseInt(i.height,10);let n=parseInt(r.width,10),h=parseInt(r.height,10),a=1;if(this._currentOrientation==="landscape"&&(n=parseInt(r.height,10),h=parseInt(r.width,10)),h>s||n>o){const l=s/h,d=o/n;a=d<l?d:l}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*a)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px")}this._deviceType===tt.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const i=new xr;i.foldSize=this.foldWidth,i.horizontalViewportSegments=this.horizontalViewportSegments,i.verticalViewportSegments=this.verticalViewportSegments,this._seam_slider.value=this.foldWidth}_debounce(i,r){let o;return function(){clearTimeout(o),o=setTimeout(()=>i.apply(this,arguments),r)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let i=this._offset_x,r=this._offset_y;const o=window.getComputedStyle(this.shadowRoot.host),s=parseFloat(o.width),n=parseFloat(o.height);this._offset_y+n>=window.innerHeight&&(r=window.innerHeight-n),this._offset_x+s>=window.innerWidth&&(i=window.innerWidth-s),this._updateConfiguratorPosition(i,r),this._updatePreviewConfiguration()}_updateConfiguratorPosition(i,r){this._offset_x=i,this._offset_y=r,this.shadowRoot.host.style.transform="translate3d("+i+"px, "+r+"px, 0)"}_toggleSpanning(){this.verticalViewportSegments!=1||this.horizontalViewportSegments!=1?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1||(this.verticalViewportSegments===2?(this.verticalViewportSegments=1,this.horizontalViewportSegments=2):(this.verticalViewportSegments=2,this.horizontalViewportSegments=1),this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return Wt`
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
    </div>`}}f(qs,"styles",zs`
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
  `);customElements.define("foldable-device-configurator",qs);function es(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var le=function(){try{window[F].updateSegments();var e=function(){if(!Hi)return Hi=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){Hi=t,window[F].dispatchEvent(new Event("change"))})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},F="__foldables__",Hi=!1,Ws=function(){function e(){var r=this;if(window[F]!==void 0)return window[F];var o=document.createDocumentFragment();this.addEventListener=o.addEventListener.bind(o),this.removeEventListener=o.removeEventListener.bind(o),this.dispatchEvent=function(s){if(s.type==="change"){var n="on"+s.type;return typeof r[n]=="function"&&r[n](s),o.dispatchEvent(s)}},window.addEventListener("message",function(s){s.data.action==="update"&&Object.assign(r,s.data.value)}),window.addEventListener("resize",function(){return function(s,n){var h;return function(){var a=arguments,l=this;clearTimeout(h),h=setTimeout(function(){return s.apply(l,a)},n)}}(le(),200)})}var t,i=e.prototype;return i.updateSegments=function(){this.verticalViewportSegments===1&&this.horizontalViewportSegments===1&&(window.visualViewport.segments=null);var r=[];if(this.verticalViewportSegments>1)for(var o=window.innerHeight-this.browserShellSize,s=0,n=window.innerWidth,h=o/this.verticalViewportSegments-this.foldSize*(this.verticalViewportSegments-1)/this.verticalViewportSegments,a=0;a<this.verticalViewportSegments;++a)r[a]={top:s,left:0,bottom:s+h,right:n,width:n,height:h},s+=r[a].height,s+=this.foldSize;if(this.horizontalViewportSegments>1)for(var l=window.innerWidth/this.horizontalViewportSegments-this.foldSize*(this.horizontalViewportSegments-1)/this.horizontalViewportSegments,d=window.innerHeight,c=0,u=0;u<this.horizontalViewportSegments;++u)r[u]={top:0,left:c,right:c+l,bottom:d,width:l,height:d},c+=r[u].width,c+=this.foldSize;window.visualViewport.segments=r},i.randomizeSegmentsConfiguration=function(r){var o=Math.random()<.5,s=Math.round(Math.random()*(r-1)+1);o?(this.verticalViewportSegments=s,this.horizontalViewportSegments=1):(this.horizontalViewportSegments=s,this.verticalViewportSegments=1)},(t=[{key:"horizontalViewportSegments",get:function(){return+sessionStorage.getItem(F+"-horizontal-viewport-segments")||1},set:function(r){if(isNaN(r))throw new TypeError(r);sessionStorage.setItem(F+"-horizontal-viewport-segments",r),le()}},{key:"verticalViewportSegments",get:function(){return+sessionStorage.getItem(F+"-vertical-viewport-segments")||1},set:function(r){if(isNaN(r))throw new TypeError(r);sessionStorage.setItem(F+"-vertical-viewport-segments",r),le()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(F+"-fold-size")||0},set:function(r){if(!(Number(r)>=0))throw new TypeError(r);sessionStorage.setItem(F+"-fold-size",r),le()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(F+"-browser-shell-size")||0},set:function(r){if(!(Number(r)>=0))throw new TypeError(r);sessionStorage.setItem(F+"-browser-shell-size",r),le()}}])&&function(r,o){for(var s=0;s<o.length;s++){var n=o[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}(e.prototype,t),e}();window[F]=new Ws,window.visualViewport.segments===void 0&&window[F].updateSegments();var Ks="-viewport-segments",Er="(\\s*)(@media.*?\\b"+Ks+"\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",sl=/\((.*?)\)/gi,nl=/@media[^\(]+/gi,al=/(horizontal-viewport-segments:)\s?(\d)/gi,ll=/(vertical-viewport-segments:)\s?(\d)/gi,hl=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")};function Zs(e,t){return e.replace(new RegExp(Er,"gi"),t)}function is(e,t){var i=e.matchAll(t);return i===null?[]:Array.from(i,function(r){return r[2]})[0]}function Xs(e){var t=function(r){var o,s=new RegExp(Er,"gi");if(typeof r.matchAll=="function")o=Array.from(r.matchAll(s));else{for(o=[];o[o.length]=s.exec(r););o.length--}return o}(e),i=[[]];return t.forEach(function(r){var o=r[1],s=r[2],n=r[3],h=r[4],a=s.match(nl)||[],l=s.match(sl)||[],d=is(s,ll);d===void 0&&(d=1);var c=is(s,al);c===void 0&&(c=1),l=l.filter(function(u){return!u.includes(Ks)}).join(" and "),i[d]===void 0&&(i[d]=new Array),i[d][c]=""+o+a+l+"{"+n+h+"}"}),i}var oi=window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1;console.info("CSS Viewport Segments are supported? "+oi);var rs,Ys=new Ws;if(!oi){var Di=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(rs=Di,Promise.all(rs.map(function(e){return e.href?fetch(e.href).then(function(t){return t.text()}):e.textContent}))).then(function(e){var t=new DocumentFragment;e.forEach(function(i,r){for(var o,s=Zs(i,""),n=Xs(i),h=Di[r].href||"inline",a=0,l=Object.entries(n);a<l.length;a++){var d=l[a],c=d[0],u=d[1];nt[c]==null&&(nt[c]=[]);for(var p=0,y=Object.entries(u);p<y.length;p++){var b=y[p];nt[c][b[0]]="/* origin: "+h+" */"+b[1]}}if(h=="inline"||(o=i,new RegExp(Er,"gi").test(o))){var m=document.createElement("style");m.setAttribute("data-css-origin",h),m.textContent=s,t.appendChild(m)}else{var w=document.createElement("link");w.type="text/css",w.rel="stylesheet",w.href=h,t.appendChild(w)}}),Di.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(t),Js()})}var nt=[[]];function cl(e,t){if(oi)return e;var i=Zs(e,""),r=Xs(e);t&&(nt[t]=[[]]);for(var o=t?nt[t]:nt,s=t?"":"/* origin: inline */",n=0,h=Object.entries(r);n<h.length;n++){var a=h[n],l=a[0],d=a[1];o[l]==null&&(o[l]=[]);for(var c=0,u=Object.entries(d);c<u.length;c++){var p=u[c];o[l][p[0]]=""+s+p[1]}}return o[0][0]=i,i}function Js(e){oi||(os(e),Ys.addEventListener("change",function(){return os(e)}))}function os(e){var t,i=Ys,r=null;(t=e?nt[e.nodeName.toLowerCase()]:nt)[i.verticalViewportSegments]&&(r=t[i.verticalViewportSegments][i.horizontalViewportSegments]);var o,s=t[0][0]?t[0][0]:null;if(r){var n=window.visualViewport.segments,h=!1;n.length>1&&(h=!(n[0].height<window.innerHeight));for(var a=0,l=Object.entries(n);a<l.length;a++)for(var d=l[a],c=d[0],u=0,p=Object.entries(d[1]);u<p.length;u++){var y=p[u],b=y[0];o=y[1]+"px",r=r.replace(hl(h?"viewport-segment-"+b+" "+c+" 0":"viewport-segment-"+b+" 0 "+c),o)}var m="__foldables_sheet__",w=function(C,I){for(var x,S=function(A,ke){var N=typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(N)return(N=N.call(A)).next.bind(N);if(Array.isArray(A)||(N=function(L,Yt){if(L){if(typeof L=="string")return es(L,Yt);var j=Object.prototype.toString.call(L).slice(8,-1);return j==="Object"&&L.constructor&&(j=L.constructor.name),j==="Map"||j==="Set"?Array.from(L):j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)?es(L,Yt):void 0}}(A))){N&&(A=N);var Xt=0;return function(){return Xt>=A.length?{done:!0}:{done:!1,value:A[Xt++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(C.querySelectorAll("."+m));!(x=S()).done;)x.value.remove();var T=document.createElement("style");T.className=m,T.textContent=I,C===document?document.head.appendChild(T):C.appendChild(T)};if(e){var U=e.shadowRoot;"adoptedStyleSheets"in U&&U.adoptedStyleSheets.length>0?U.adoptedStyleSheets[0].replace(s+r):w(U,r)}else w(document,r)}}try{self["workbox:window:6.5.3"]&&_()}catch{}function ar(e,t){return new Promise(function(i){var r=new MessageChannel;r.port1.onmessage=function(o){i(o.data)},e.postMessage(t,[r.port2])})}function dl(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ss(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function ul(e,t){var i;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(i=function(o,s){if(o){if(typeof o=="string")return ss(o,s);var n=Object.prototype.toString.call(o).slice(8,-1);return n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set"?Array.from(o):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ss(o,s):void 0}}(e))||t&&e&&typeof e.length=="number"){i&&(e=i);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(i=e[Symbol.iterator]()).next.bind(i)}try{self["workbox:core:6.5.3"]&&_()}catch{}var Fi=function(){var e=this;this.promise=new Promise(function(t,i){e.resolve=t,e.reject=i})};function Ii(e,t){var i=location.href;return new URL(e,i).href===new URL(t,i).href}var he=function(e,t){this.type=e,Object.assign(this,t)};function ze(e,t,i){return i?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function pl(){}var vl={type:"SKIP_WAITING"};function ns(e,t){if(!t)return e&&e.then?e.then(pl):Promise.resolve()}var fl=function(e){var t,i;function r(h,a){var l,d;return a===void 0&&(a={}),(l=e.call(this)||this).nn={},l.tn=0,l.rn=new Fi,l.en=new Fi,l.on=new Fi,l.un=0,l.an=new Set,l.cn=function(){var c=l.fn,u=c.installing;l.tn>0||!Ii(u.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=u,c.removeEventListener("updatefound",l.cn)):(l.hn=u,l.an.add(u),l.rn.resolve(u)),++l.tn,u.addEventListener("statechange",l.ln)},l.ln=function(c){var u=l.fn,p=c.target,y=p.state,b=p===l.vn,m={sw:p,isExternal:b,originalEvent:c};!b&&l.mn&&(m.isUpdate=!0),l.dispatchEvent(new he(y,m)),y==="installed"?l.wn=self.setTimeout(function(){y==="installed"&&u.waiting===p&&l.dispatchEvent(new he("waiting",m))},200):y==="activating"&&(clearTimeout(l.wn),b||l.en.resolve(p))},l.dn=function(c){var u=l.hn,p=u!==navigator.serviceWorker.controller;l.dispatchEvent(new he("controlling",{isExternal:p,originalEvent:c,sw:u,isUpdate:l.mn})),p||l.on.resolve(u)},l.gn=(d=function(c){var u=c.data,p=c.ports,y=c.source;return ze(l.getSW(),function(){l.an.has(y)&&l.dispatchEvent(new he("message",{data:u,originalEvent:c,ports:p,sw:y}))})},function(){for(var c=[],u=0;u<arguments.length;u++)c[u]=arguments[u];try{return Promise.resolve(d.apply(this,c))}catch(p){return Promise.reject(p)}}),l.sn=h,l.nn=a,navigator.serviceWorker.addEventListener("message",l.gn),l}i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var o,s,n=r.prototype;return n.register=function(h){var a=(h===void 0?{}:h).immediate,l=a!==void 0&&a;try{var d=this;return function(c,u){var p=c();return p&&p.then?p.then(u):u(p)}(function(){if(!l&&document.readyState!=="complete")return ns(new Promise(function(c){return window.addEventListener("load",c)}))},function(){return d.mn=Boolean(navigator.serviceWorker.controller),d.yn=d.pn(),ze(d.bn(),function(c){d.fn=c,d.yn&&(d.hn=d.yn,d.en.resolve(d.yn),d.on.resolve(d.yn),d.yn.addEventListener("statechange",d.ln,{once:!0}));var u=d.fn.waiting;return u&&Ii(u.scriptURL,d.sn.toString())&&(d.hn=u,Promise.resolve().then(function(){d.dispatchEvent(new he("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),d.hn&&(d.rn.resolve(d.hn),d.an.add(d.hn)),d.fn.addEventListener("updatefound",d.cn),navigator.serviceWorker.addEventListener("controllerchange",d.dn),d.fn})})}catch(c){return Promise.reject(c)}},n.update=function(){try{return this.fn?ns(this.fn.update()):void 0}catch(h){return Promise.reject(h)}},n.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(h){try{return ze(this.getSW(),function(a){return ar(a,h)})}catch(a){return Promise.reject(a)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&ar(this.fn.waiting,vl)},n.pn=function(){var h=navigator.serviceWorker.controller;return h&&Ii(h.scriptURL,this.sn.toString())?h:void 0},n.bn=function(){try{var h=this;return function(a,l){try{var d=a()}catch(c){return l(c)}return d&&d.then?d.then(void 0,l):d}(function(){return ze(navigator.serviceWorker.register(h.sn,h.nn),function(a){return h.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},o=r,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&dl(o.prototype,s),r}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(i,r){this.Sn(i).add(r)},t.removeEventListener=function(i,r){this.Sn(i).delete(r)},t.dispatchEvent=function(i){i.target=this;for(var r,o=ul(this.Sn(i.type));!(r=o()).done;)(0,r.value)(i)},t.Sn=function(i){return this.Pn.has(i)||this.Pn.set(i,new Set),this.Pn.get(i)},e}());Xi("/demos/photo-gallery/");const kr=(e,...t)=>{const i=cl(e[0],"main-application");return bn([i],...t)};class Gs extends vt{render(){return Ne`
      <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    `}}f(Gs,"styles",kr`
    .spinner {
      width: 65px;
      height: 65px;
      animation: rotator 1.4s linear infinite;
    }

    @keyframes rotator {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(270deg); }
    }

    .path {
      stroke-dasharray: 187;
      stroke-dashoffset: 0;
      transform-origin: center;
      animation:
        dash 1.4s ease-in-out infinite,
        colors 6.4s ease-in-out infinite;
    }

    @keyframes colors {
      0% { stroke: #4285F4; }
      25% { stroke: #DE3E35; }
      50% { stroke: #F7C223; }
      75% { stroke: #1B9A59; }
      100% { stroke: #4285F4; }
    }

    @keyframes dash {
      0% {
        stroke-dashoffset: 187;
      }
      50% {
        stroke-dashoffset: 46.75;
        transform: rotate(135deg);
      }
      100% {
        stroke-dashoffset: 187;
        transform: rotate(450deg);
      }
    }
  `);customElements.define("circular-progress",Gs);class lr extends vt{constructor(){super(...arguments);f(this,"_spinner");f(this,"_image");f(this,"_legend")}firstUpdated(){this._spinner=this.shadowRoot.querySelector("circular-progress"),this._image=this.shadowRoot.querySelector("img"),this._legend=this.shadowRoot.querySelector("#text")}updated(i){i.has("src")&&(this._spinner.style.visibility="visible",this._image.addEventListener("load",()=>{this._spinner.style.visibility="hidden",this.style.visibility="visible",this._legend.innerText=this.description},{once:!0}),this._image.src=this.src)}render(){return Ne`
      <div id="wrapper">
        <img/>
        <div id="text"></div>
        <circular-progress></circular-progress>
      </div>
    `}}f(lr,"styles",kr`
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

    circular-progress {
      position: absolute;
      top: 50%;
    }
  `),f(lr,"properties",{src:{type:String},description:{type:String}});customElements.define("detail-img",lr);class hr extends vt{constructor(){super();f(this,"_full_img");f(this,"_detail_img");f(this,"_detail_container");f(this,"_detail");f(this,"_detail_select");f(this,"_drawer");f(this,"_spinner");f(this,"_styleCheckbox");f(this,"_fold");f(this,"_gallery");f(this,"_fullview_container");f(this,"_swAlert");f(this,"_wb");f(this,"_wbRegistration");f(this,"_styleChanged",i=>{if(this._styleCheckbox.checked)this._fullview_container.style.height="100vh",this._detail_container.style.display="flex",this._fold.style.display="flex";else{let r=window.getComputedStyle(this._gallery).getPropertyValue("height");this._fullview_container.style.height=r,this._detail_container.style.display="none",this._fold.style.display="none",this._gallery.style.height="100vh",this._gallery.style.width="100vw"}});this._full_view_container_classes={hidden:!0}}firstUpdated(){this._gallery=this.shadowRoot.querySelector(".gallery"),this._full_img=this.shadowRoot.querySelector("#full-img"),this._detail_img=this.shadowRoot.querySelector("detail-img"),this._detail_container=this.shadowRoot.querySelector(".detail-container"),this._detail=this.shadowRoot.querySelector(".detail"),this._detail_select=this.shadowRoot.querySelector(".detail-select"),this._spinner=this.shadowRoot.querySelector("circular-progress"),this._drawer=this.shadowRoot.querySelector("#drawer"),this._swAlert=this.shadowRoot.querySelector("#sw-alert"),this._fold=this.shadowRoot.querySelector(".fold"),this._styleCheckbox=this.shadowRoot.querySelector("sl-checkbox"),this._fullview_container=this.shadowRoot.querySelector(".fullview-container"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new fl("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()})}connectedCallback(){super.connectedCallback(),Js(this)}_openDrawer(){this._drawer.open=!0}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&ar(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_openPicture(i){const o=i.currentTarget.children[1].currentSrc.replace("-l","");if(window.getComputedStyle(this._detail_container).width!="0px"&&this._styleCheckbox.checked){if(this._detail_select.style.display="none",this._detail.style.visibility="visible",this._detail_img.src===o)return;this._detail_img.description=i.currentTarget.children[1].alt,this._detail_img.src=o,this._detail_img.style.visibility="hidden"}else this._full_view_container_classes={hidden:!1},this._full_img.setAttribute("src",o),this._spinner.style.visibility="visible",this._full_img.addEventListener("load",()=>{this._spinner.style.visibility="hidden"},{once:!0}),this._current_image=i.currentTarget}_closePicture(){this._full_view_container_classes={hidden:!0}}_previousPicture(i){if(i.stopPropagation(),this._current_image.parentNode.previousElementSibling){const r=this._current_image.parentNode.previousElementSibling.children[0],s=r.children[1].currentSrc.replace("-l","");this._full_img.setAttribute("src",s),this._current_image=r}}_nextPicture(i){if(i.stopPropagation(),this._current_image.parentNode.nextElementSibling){const r=this._current_image.parentNode.nextElementSibling.children[0],s=r.children[1].currentSrc.replace("-l","");this._full_img.setAttribute("src",s),this._current_image=r}}render(){const i=[{name:"images/air-balloon-l",alt:"This is a beautiful picture of an air balloon in the sky."},{name:"images/asia-l",alt:"This photo depicts a woman on a boat somewhere in Asia."},{name:"images/china-l",alt:"Architecture in China, a tower of a building."},{name:"images/church-l",alt:"A black church in the middle of nowhere."},{name:"images/city-l",alt:"A modern city somewhere in Asia."},{name:"images/waterfall2-l",alt:"River with a tiny waterfall."},{name:"images/cloud-l",alt:"Clouds in the sky, view from high altitude."},{name:"images/desert-l",alt:"A desert with cactus."},{name:"images/river2-l",alt:"A river inside a canyon."},{name:"images/disney-l",alt:"The Disney castle in Orlando"},{name:"images/forest-l",alt:"A road crossing a green forest"},{name:"images/greece-l",alt:"Greece architecture"},{name:"images/city2-l",alt:"A city street with an arch"},{name:"images/lake-l",alt:"Women coming out of a lake somewhere lost in the nature"},{name:"images/mountain-l",alt:"Peak of a high mountain and a cloudy sky"},{name:"images/new-york-l",alt:"A street in New York"},{name:"images/pool-l",alt:"Relaxing pool in a luxury hotel"},{name:"images/restaurant-l",alt:"Restaurant on the edge of a river somewhere in France"},{name:"images/river-l",alt:"River with people kayaking"},{name:"images/road-l",alt:"Long straight road somewhere in USA"},{name:"images/sand-l",alt:"Desert with rocky mountains on the background"},{name:"images/sea-l",alt:"Beautiful transparent sea water somewhere in the pacific"},{name:"images/sfo-l",alt:"Golden gate in San Francisco"},{name:"images/stars-l",alt:"Wonderful astronomy shot of stars in the sky"},{name:"images/tents-l",alt:"Camping tents hanging on a cliff"},{name:"images/waterfall-l",alt:"Picture of a waterfall between big rocks"},{name:"images/mountain2-l",alt:"Beautiful picture of a mountain landscape"},{name:"images/wave-l",alt:"This is a picture from a wave in the ocean"},{name:"images/aerial-l",alt:"This is an aerial picture of a city"},{name:"images/building-l",alt:"This is a picture from inside a building"},{name:"images/catamaran-l",alt:"This is a picture of a catamaran with blue water"},{name:"images/cats-l",alt:"Thisa picture of two cats sleeping"},{name:"images/egypt-l",alt:"This is a picture from somewhere in Egypt"},{name:"images/feather-l",alt:"This is a picture of colorful feathers"},{name:"images/fruits-l",alt:"This is a picture of a water bottle and fruits"},{name:"images/golden-gate-l",alt:"This is a picture of the Golden Gate"},{name:"images/marocco-l",alt:"This is a picture of ancient building in Marocco"},{name:"images/milky-way-l",alt:"This is a picture from the Milky Way"},{name:"images/palm-tree-l",alt:"This is a picture of palm trees with beautiful weather"},{name:"images/rainbow-l",alt:"This is a picture of a rainbow from a light"},{name:"images/road2-l",alt:"This is a picture from a road with a lot of trees"},{name:"images/surf-l",alt:"This is a picture of a surfer"},{name:"images/volcano-l",alt:"This is an aerial picture of a volcano"}];return Ne`
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
          <sl-icon-button name="list" label="menu" 
              class="menu-icon" @click="${this._openDrawer}">
          </sl-icon-button>
          <div class="gallery">
            ${i.map(r=>Ne`
              <figure class="gallery-item">
                <picture @click="${this._openPicture}">
                  <source srcset="${r.name}.webp" type="image/webp">
                  <img src="${r.name}.jpg" class="gallery-img" alt=${r.alt}>
                </picture>
              </figure>
            `)}
          </div>

          <div class="fold angled stripes"></div>

          <div class="detail-container">
            <div class="detail-select">Select an image in the gallery.</div>
            <div class="detail">
              <detail-img></detail-img>
            </div>
          </div>

          <div class="fullview-container ${An(this._full_view_container_classes)}" @click="${this._closePicture}">
            <div class="close" @click="${this._closePicture}"></div>
            <div class="arrow-left" @click="${this._previousPicture}"></div>
            <circular-progress></circular-progress>
            <img id="full-img">
            <div class="arrow-right" @click="${this._nextPicture}"></div>
          </div>
        </div>
        <sl-drawer label="Configuration" id="drawer" placement="start">
          <div class="drawer">
              Split UX : <sl-checkbox checked @sl-change="${this._styleChanged}"></sl-checkbox>
          </div>
        </sl-drawer>
    `}}f(hr,"styles",kr`
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

    .arrow-left {
      width: 30px;
      height: 30px;
      border-bottom: solid 10px white;
      border-left: solid 10px white;
      opacity: 0.7;
      border-radius: 15%;
      transform: rotate(45deg);
    }

    .arrow-right {
      width: 30px;
      height: 30px;
      border-top: solid 10px white;
      border-right: solid 10px white;
      opacity: 0.7;
      border-radius: 15%;
      transform: rotate(45deg);
    }

    .arrow-right:hover, .arrow-left:hover {
      opacity: 1;
    }

    #full-img {
      height: 95%;
      width: 85%;
      object-fit: contain;
      user-select: none;
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

    .gallery {
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

    .stripes {
      height: 250px;
      width: 200px;
      background-size: 40px 40px;
    }

    .angled {
      background-color: #737373;
      background-image:
        linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
        transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
        transparent 75%, transparent);
    }

    .fold {
      height: 0;
      width: 0;
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

    circular-progress {
      position: absolute;
      top: 50%;
    }

    sl-checkbox {
      margin-left: 4px;
    }

    .menu-icon {
      position: absolute;
      top: 5px;
      left: 5px;
      color: white;
    }

    .drawer {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-left: 12px;
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
  `),f(hr,"properties",{_full_view_container_classes:{type:String}});customElements.define("main-application",hr);