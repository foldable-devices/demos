import{i as M,m as z,T as A,r as B,N,a as O}from"./lit-html-cb7f9ca3.js";/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const q=133;function C(a,b){const{element:{content:c},parts:d}=a,e=document.createTreeWalker(c,q,null,!1);let g=n(d),f=d[g],h=-1,j=0;const i=[];let k=null;for(;e.nextNode();){h++;const l=e.currentNode;for(l.previousSibling===k&&(k=null),b.has(l)&&(i.push(l),k===null&&(k=l)),k!==null&&j++;f!==void 0&&f.index===h;)f.index=k!==null?-1:f.index-j,g=n(d,g),f=d[g]}i.forEach(l=>l.parentNode.removeChild(l))}const P=a=>{let b=a.nodeType===11?0:1;const c=document.createTreeWalker(a,q,null,!1);for(;c.nextNode();)b++;return b},n=(a,b=-1)=>{for(let c=b+1;c<a.length;c++){const d=a[c];if(M(d))return c}return-1};function Q(a,b,c=null){const{element:{content:d},parts:e}=a;if(c===null||c===void 0){d.appendChild(b);return}const g=document.createTreeWalker(d,q,null,!1);let f=n(e),h=0,j=-1;for(;g.nextNode();){j++;const i=g.currentNode;for(i===c&&(h=P(b),c.parentNode.insertBefore(b,c));f!==-1&&e[f].index===j;){if(h>0){for(;f!==-1;)e[f].index+=h,f=n(e,f);return}f=n(e,f)}}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function R(a){let b=o.get(a.type);b===void 0&&(b={stringsArray:new WeakMap(),keyString:new Map()},o.set(a.type,b));let c=b.stringsArray.get(a.strings);if(c!==void 0)return c;const d=a.strings.join(z);return c=b.keyString.get(d),c===void 0&&(c=new A(a,a.getTemplateElement()),b.keyString.set(d,c)),b.stringsArray.set(a.strings,c),c}const o=new Map();/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const m=new WeakMap(),S=(a,b,c)=>{let d=m.get(b);d===void 0&&(B(b,b.firstChild),m.set(b,d=new N(Object.assign({templateFactory:R},c))),d.appendInto(b)),d.setValue(a),d.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const D=(a,b)=>`${a}--${b}`;let p=!0;typeof window.ShadyCSS==="undefined"?p=!1:typeof window.ShadyCSS.prepareTemplateDom==="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),p=!1);const T=a=>b=>{const c=D(b.type,a);let d=o.get(c);d===void 0&&(d={stringsArray:new WeakMap(),keyString:new Map()},o.set(c,d));let e=d.stringsArray.get(b.strings);if(e!==void 0)return e;const g=b.strings.join(z);e=d.keyString.get(g);if(e===void 0){const f=b.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(f,a),e=new A(b,f),d.keyString.set(g,e)}return d.stringsArray.set(b.strings,e),e},U=["html","svg"],V=a=>{U.forEach(b=>{const c=o.get(D(b,a));c!==void 0&&c.keyString.forEach(d=>{const{element:{content:e}}=d,g=new Set();Array.from(e.querySelectorAll("style")).forEach(f=>{g.add(f)}),C(d,g)})})},E=new Set(),W=(a,b,c)=>{E.add(a);const d=c?c.element:document.createElement("template"),e=b.querySelectorAll("style"),{length:g}=e;if(g===0){window.ShadyCSS.prepareTemplateStyles(d,a);return}const f=document.createElement("style");for(let i=0;i<g;i++){const k=e[i];k.parentNode.removeChild(k),f.textContent+=k.textContent}V(a);const h=d.content;c?Q(c,f,h.firstChild):h.insertBefore(f,h.firstChild),window.ShadyCSS.prepareTemplateStyles(d,a);const j=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&j!==null)b.insertBefore(j.cloneNode(!0),b.firstChild);else if(c){h.insertBefore(f,h.firstChild);const i=new Set();i.add(f),C(c,i)}},X=(a,b,c)=>{if(!c||typeof c!=="object"||!c.scopeName)throw new Error("The `scopeName` option is required.");const d=c.scopeName,e=m.has(b),g=p&&b.nodeType===11&&!!b.host,f=g&&!E.has(d),h=f?document.createDocumentFragment():b;S(a,h,Object.assign({templateFactory:T(d)},c));if(f){const j=m.get(h);m.delete(h);const i=j.value instanceof O?j.value.template:void 0;W(d,h,i),B(b,b.firstChild),b.appendChild(h),m.set(b,j)}!e&&g&&window.ShadyCSS.styleElement(b.host)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var F;window.JSCompiler_renameProperty=(a,b)=>a;const r={toAttribute(a,b){switch(b){case Boolean:return a?"":null;case Object:case Array:return a==null?a:JSON.stringify(a)}return a},fromAttribute(a,b){switch(b){case Boolean:return a!==null;case Number:return a===null?null:Number(a);case Object:case Array:return JSON.parse(a)}return a}},G=(a,b)=>b!==a&&(b===b||a===a),s={attribute:!0,type:String,converter:r,reflect:!1,hasChanged:G},t=1,u=1<<2,v=1<<3,w=1<<4,x="finalized";class H extends HTMLElement{constructor(){super();this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(a=>this._enableUpdatingResolver=a),this._changedProperties=new Map(),this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const a=[];return this._classProperties.forEach((b,c)=>{const d=this._attributeNameForProperty(c,b);d!==void 0&&(this._attributeToPropertyMap.set(d,c),a.push(d))}),a}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map();const a=Object.getPrototypeOf(this)._classProperties;a!==void 0&&a.forEach((b,c)=>this._classProperties.set(c,b))}}static createProperty(a,b=s){this._ensureClassProperties(),this._classProperties.set(a,b);if(b.noAccessor||this.prototype.hasOwnProperty(a))return;const c=typeof a==="symbol"?Symbol():`__${a}`,d=this.getPropertyDescriptor(a,c,b);d!==void 0&&Object.defineProperty(this.prototype,a,d)}static getPropertyDescriptor(a,b,c){return{get(){return this[b]},set(d){const e=this[a];this[b]=d,this._requestUpdate(a,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this._classProperties&&this._classProperties.get(a)||s}static finalize(){const a=Object.getPrototypeOf(this);a.hasOwnProperty(x)||a.finalize(),this[x]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map();if(this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const b=this.properties,c=[...Object.getOwnPropertyNames(b),...typeof Object.getOwnPropertySymbols==="function"?Object.getOwnPropertySymbols(b):[]];for(const d of c)this.createProperty(d,b[d])}}static _attributeNameForProperty(a,b){const c=b.attribute;return c===!1?void 0:typeof c==="string"?c:typeof a==="string"?a.toLowerCase():void 0}static _valueHasChanged(a,b,c=G){return c(a,b)}static _propertyValueFromAttribute(a,b){const c=b.type,d=b.converter||r,e=typeof d==="function"?d:d.fromAttribute;return e?e(a,c):a}static _propertyValueToAttribute(a,b){if(b.reflect===void 0)return;const c=b.type,d=b.converter,e=d&&d.toAttribute||r.toAttribute;return e(a,c)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((a,b)=>{if(this.hasOwnProperty(b)){const c=this[b];delete this[b],this._instanceProperties||(this._instanceProperties=new Map()),this._instanceProperties.set(b,c)}})}_applyInstanceProperties(){this._instanceProperties.forEach((a,b)=>this[b]=a),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(a,b,c){b!==c&&this._attributeToProperty(a,c)}_propertyToAttribute(a,b,c=s){const d=this.constructor,e=d._attributeNameForProperty(a,c);if(e!==void 0){const g=d._propertyValueToAttribute(b,c);if(g===void 0)return;this._updateState=this._updateState|v,g==null?this.removeAttribute(e):this.setAttribute(e,g),this._updateState=this._updateState&~v}}_attributeToProperty(a,b){if(this._updateState&v)return;const c=this.constructor,d=c._attributeToPropertyMap.get(a);if(d!==void 0){const e=c.getPropertyOptions(d);this._updateState=this._updateState|w,this[d]=c._propertyValueFromAttribute(b,e),this._updateState=this._updateState&~w}}_requestUpdate(a,b){let c=!0;if(a!==void 0){const d=this.constructor,e=d.getPropertyOptions(a);d._valueHasChanged(this[a],b,e.hasChanged)?(this._changedProperties.has(a)||this._changedProperties.set(a,b),e.reflect===!0&&!(this._updateState&w)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map()),this._reflectingProperties.set(a,e))):c=!1}!this._hasRequestedUpdate&&c&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(a,b){return this._requestUpdate(a,b),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|u;try{await this._updatePromise}catch(b){}const a=this.performUpdate();return a!=null&&await a,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&u}get hasUpdated(){return this._updateState&t}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let a=!1;const b=this._changedProperties;try{a=this.shouldUpdate(b),a?this.update(b):this._markUpdated()}catch(c){throw a=!1,this._markUpdated(),c}a&&(this._updateState&t||(this._updateState=this._updateState|t,this.firstUpdated(b)),this.updated(b))}_markUpdated(){this._changedProperties=new Map(),this._updateState=this._updateState&~u}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(a){return!0}update(a){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((b,c)=>this._propertyToAttribute(c,this[c],b)),this._reflectingProperties=void 0),this._markUpdated()}updated(a){}firstUpdated(a){}}F=x,H[F]=!0;/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const I="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class K{constructor(a,b){if(b!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a}get styleSheet(){return this._styleSheet===void 0&&(I?(this._styleSheet=new CSSStyleSheet(),this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Y=a=>{if(a instanceof K)return a.cssText;{if(typeof a==="number")return a;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${a}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)}},Z=(a,...b)=>{const c=b.reduce((d,e,g)=>d+Y(e)+a[g+1],a[0]);return new K(c,J)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const L={};class y extends H{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const a=this.getStyles();if(a===void 0)this._styles=[];else if(Array.isArray(a)){const b=(e,g)=>e.reduceRight((f,h)=>Array.isArray(h)?b(h,f):(f.add(h),f),g),c=b(a,new Set()),d=[];c.forEach(e=>d.unshift(e)),this._styles=d}else this._styles=[a]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const a=this.constructor._styles;if(a.length===0)return;window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(a.map(b=>b.cssText),this.localName):I?this.renderRoot.adoptedStyleSheets=a.map(b=>b.styleSheet):this._needsShimAdoptedStyleSheets=!0}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(a){const b=this.render();super.update(a),b!==L&&this.constructor.render(b,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(c=>{const d=document.createElement("style");d.textContent=c.cssText,this.renderRoot.appendChild(d)}))}render(){return L}}y.finalized=!0,y.render=X;export{y as L,Z as c};
