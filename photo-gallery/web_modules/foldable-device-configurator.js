function e(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}
/**
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
 */const t=new WeakMap,i=e=>(...i)=>{const s=e(...i);return t.set(s,!0),s},s=e=>"function"==typeof e&&t.has(e),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},o={},a={},d=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${d}--\x3e`,c=new RegExp(`${d}|${l}`);class h{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],n=document.createTreeWalker(t.content,133,null,!1);let r=0,o=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=n.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)u(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=l[a],i=_.exec(t)[2],s=i.toLowerCase()+"$lit$",n=e.getAttribute(s);e.removeAttribute(s);const r=n.split(c);this.parts.push({type:"attribute",index:o,name:i,strings:r}),a+=r.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(d)>=0){const s=e.parentNode,n=t.split(c),r=n.length-1;for(let t=0;t<r;t++){let i,r=n[t];if(""===r)i=m();else{const e=_.exec(r);null!==e&&u(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(r)}s.insertBefore(i,e),this.parts.push({type:"node",index:++o})}""===n[r]?(s.insertBefore(m(),e),i.push(e)):e.data=n[r],a+=r}}else if(8===e.nodeType)if(e.data===d){const t=e.parentNode;null!==e.previousSibling&&o!==r||(o++,t.insertBefore(m(),e)),r=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(i.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(d,t+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const u=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},p=e=>-1!==e.index,m=()=>document.createComment(""),_=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
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
 */class f{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let r,o=0,a=0,d=s.nextNode();for(;o<i.length;)if(r=i[o],p(r)){for(;a<r.index;)a++,"TEMPLATE"===d.nodeName&&(t.push(d),s.currentNode=d.content),null===(d=s.nextNode())&&(s.currentNode=t.pop(),d=s.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(d.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return n&&(document.adoptNode(e),customElements.upgrade(e)),e
/**
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
 */}}const v=` ${d} `;class g{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const e=this.strings[s],n=e.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===e.indexOf("--\x3e",n+1);const r=_.exec(e);t+=null===r?e+(i?v:l):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+d}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e
/**
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
 */}}const y=e=>null===e||!("object"==typeof e||"function"==typeof e),b=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class w{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new x(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let s=0;s<t;s++){i+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(y(e)||!b(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===o||y(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=o,e(this)}this.value!==o&&this.committer.commit()}}class S{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=m()),e.__insert(this.endNode=m())}insertAfterPart(e){e.__insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o,e(this)}const e=this.__pendingValue;e!==o&&(y(e)?e!==this.value&&this.__commitText(e):e instanceof g?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):b(e)?this.__commitIterable(e):e===a?(this.value=a,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof f&&this.value.template===t)this.value.update(e.values);else{const i=new f(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const n of e)i=t[s],void 0===i&&(i=new S(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(n),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){r(this.startNode.parentNode,e.nextSibling,this.endNode)}}class k{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o,e(this)}if(this.__pendingValue===o)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=o}}class C extends w{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends x{}let P=!1;try{const e={get capture(){return P=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(t){}class R{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o,e(this)}if(this.__pendingValue===o)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=o}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(P?{capture:e.capture,passive:e.passive,once:e.once}:e.capture
/**
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
 */),T=new class{handleAttributeExpressions(e,t,i,s){const n=t[0];return"."===n?new C(e,t.slice(1),i).parts:"@"===n?[new R(e,t.slice(1),s.eventContext)]:"?"===n?[new k(e,t.slice(1),i)]:new w(e,t,i).parts}handleTextExpression(e){return new S(e)}};
/**
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
 */
function z(e){let t=I.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},I.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(d);return i=t.keyString.get(s),void 0===i&&(i=new h(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}const I=new Map,N=new WeakMap;
/**
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
 */
/**
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
 */(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const F=(e,...t)=>new g(e,t,"html",T)
/**
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
 */;function O(e,t){const{element:{content:i},parts:s}=e,n=document.createTreeWalker(i,133,null,!1);let r=H(s),o=s[r],a=-1,d=0;const l=[];let c=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(l.push(e),null===c&&(c=e)),null!==c&&d++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-d,r=H(s,r),o=s[r]}l.forEach(e=>e.parentNode.removeChild(e))}const V=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},H=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(p(t))return i}return-1},M=(e,t)=>`${e}--${t}`
/**
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
 */;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const D=e=>t=>{const i=M(t.type,e);let s=I.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},I.set(i,s));let n=s.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(d);if(n=s.keyString.get(r),void 0===n){const i=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(i,e),n=new h(t,i),s.keyString.set(r,n)}return s.stringsArray.set(t.strings,n),n},U=["html","svg"],j=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const B={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},$=(e,t)=>t!==e&&(t==t||e==e),q={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:$},W=Promise.resolve(!0);class X extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=q){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[i]},set(t){const s=this[e];this[i]=t,this._requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=$){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||B,n="function"==typeof s?s:s.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||B.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=q){const s=this.constructor,n=s._attributeNameForProperty(e,i);if(void 0!==n){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i._classProperties.get(s)||q;this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const s=this.constructor,n=s._classProperties.get(e)||q;s._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const i=this._updatePromise;this._updatePromise=new Promise((i,s)=>{e=i,t=s});try{await i}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}X.finalized=!0;
/**
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
 */
const K=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}}:Object.assign({},t,{finisher(i){i.createProperty(t.key,e)}});function J(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):K(e,t)}function Y(e){return(t,i)=>{const s={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==i?G(s,t,i):Z(s,t)}}const G=(e,t,i)=>{Object.defineProperty(t,i,e)},Z=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),Q="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ie=(e,...t)=>{const i=t.reduce((t,i,s)=>t+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1],e[0]);return new te(i,ee)};
/**
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");class se extends X{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];return Array.isArray(e)?(e=>e.flat?e.flat(1/0):function e(t,i=[]){for(let s=0,n=t.length;s<n;s++){const n=t[s];Array.isArray(n)?e(n,i):i.push(n)}return i}(e))(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e)):e&&t.push(e),t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof g&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}se.finalized=!0,se.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,n=N.has(t),o=L&&11===t.nodeType&&!!t.host,a=o&&!j.has(s),d=a?document.createDocumentFragment():t;if(((e,t,i)=>{let s=N.get(t);void 0===s&&(r(t,t.firstChild),N.set(t,s=new S(Object.assign({templateFactory:z},i))),s.appendInto(t)),s.setValue(e),s.commit()})(e,d,Object.assign({templateFactory:D(s)},i)),a){const e=N.get(d);N.delete(d),((e,t,i)=>{j.add(e);const s=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let e=0;e<r;e++){const t=n[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{U.forEach(t=>{const i=I.get(M(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),O(e,i)})})})(e);const a=s.content;i?function(e,t,i=null){const{element:{content:s},parts:n}=e;if(null==i)return void s.appendChild(t);const r=document.createTreeWalker(s,133,null,!1);let o=H(n),a=0,d=-1;for(;r.nextNode();)for(d++,r.currentNode===i&&(a=V(t),i.parentNode.insertBefore(t,i));-1!==o&&n[o].index===d;){if(a>0){for(;-1!==o;)n[o].index+=a,o=H(n,o);return}o=H(n,o)}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const d=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)t.insertBefore(d.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),O(i,e)}})(s,d,e.value instanceof f?e.value.template:void 0),r(t,t.firstChild),t.appendChild(d),N.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var ne=function(e,t){return(ne=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},re=function(){return(re=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function oe(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const ae=new WeakMap,de=i(e=>t=>{if(!(t instanceof x)||t instanceof E||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=t,{element:s}=i;ae.has(t)||(s.className=i.strings.join(" "));const{classList:n}=s,r=ae.get(t);for(const t in r)t in e||n.remove(t);for(const t in e){const i=e[t];r&&i===r[t]||n[i?"add":"remove"](t)}ae.set(t,e)});
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function le(e){return void 0===e&&(e=window),!!function(e){void 0===e&&(e=window);var t=!1;try{var i={get passive(){return t=!0,!1}},s=function(){};e.document.addEventListener("test",s,i),e.document.removeEventListener("test",s,i)}catch(e){t=!1}return t}
/**
  @license
  Copyright 2018 Google Inc. All Rights Reserved.
  
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */(e)&&{passive:!0}}const ce=()=>{},he={get passive(){return!1}};document.addEventListener("x",ce,he),document.removeEventListener("x",ce);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class ue extends se{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class pe extends ue{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(e){this.formElement&&this.formElement.setAttribute("aria-label",e)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",e=>{this.dispatchEvent(new Event("change",e))})}}const me=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach((e,i)=>t.constructor._observers.set(i,e))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)})}}t.constructor._observers.set(i,e)}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */;var _e={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},fe={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function ve(e){return Boolean(e.document)&&"function"==typeof e.document.createElement}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ge=function(){function e(e){void 0===e&&(e={}),this.adapter_=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),ye={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete"},be={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},we={PAGE_FACTOR:4},xe=["mousedown","pointerdown","touchstart"],Se=["mouseup","pointerup","touchend"],ke={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},Ce="ArrowDown",Ee="ArrowLeft",Pe="ArrowRight",Re="ArrowUp",Ae="Home",Te="PageDown",ze="PageUp",Ie=function(e){function t(i){var s=e.call(this,re({},t.defaultAdapter,i))||this;return s.savedTabIndex_=NaN,s.active_=!1,s.inTransit_=!1,s.isDiscrete_=!1,s.hasTrackMarker_=!1,s.handlingThumbTargetEvt_=!1,s.min_=0,s.max_=100,s.step_=0,s.value_=0,s.disabled_=!1,s.preventFocusState_=!1,s.thumbContainerPointerHandler_=function(){return s.handlingThumbTargetEvt_=!0},s.interactionStartHandler_=function(e){return s.handleDown_(e)},s.keydownHandler_=function(e){return s.handleKeydown_(e)},s.focusHandler_=function(){return s.handleFocus_()},s.blurHandler_=function(){return s.handleBlur_()},s.resizeHandler_=function(){return s.layout()},s}return function(e,t){function i(){this.constructor=e}ne(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return ye},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return be},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return we},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this;this.isDiscrete_=this.adapter_.hasClass(ye.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(ye.HAS_TRACK_MARKER),xe.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.interactionStartHandler_),e.adapter_.registerThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},t.prototype.destroy=function(){var e=this;xe.forEach((function(t){e.adapter_.deregisterInteractionHandler(t,e.interactionStartHandler_),e.adapter_.deregisterThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_)},t.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter_.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},t.prototype.layout=function(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()},t.prototype.getValue=function(){return this.value_},t.prototype.setValue=function(e){this.setValue_(e,!1)},t.prototype.getMax=function(){return this.max_},t.prototype.setMax=function(e){if(e<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=e,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(be.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},t.prototype.getMin=function(){return this.min_},t.prototype.setMin=function(e){if(e>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=e,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(be.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},t.prototype.getStep=function(){return this.step_},t.prototype.setStep=function(e){if(e<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof e||e<1)&&(e=1),this.step_=e,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},t.prototype.isDisabled=function(){return this.disabled_},t.prototype.setDisabled=function(e){this.disabled_=e,this.toggleClass_(ye.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(be.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(be.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))},t.prototype.handleDown_=function(e){var t=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var i=function(e){t.handleMove_(e)},s=ke[e.type],n=function(){t.handleUp_(),t.adapter_.deregisterBodyInteractionHandler(s,i),Se.forEach((function(e){return t.adapter_.deregisterBodyInteractionHandler(e,n)}))};this.adapter_.registerBodyInteractionHandler(s,i),Se.forEach((function(e){return t.adapter_.registerBodyInteractionHandler(e,n)})),this.setValueFromEvt_(e)}},t.prototype.handleMove_=function(e){e.preventDefault(),this.setValueFromEvt_(e)},t.prototype.handleUp_=function(){this.setActive_(!1),this.adapter_.notifyChange()},t.prototype.getClientX_=function(e){return e.targetTouches&&e.targetTouches.length>0?e.targetTouches[0].clientX:e.clientX},t.prototype.setValueFromEvt_=function(e){var t=this.getClientX_(e),i=this.computeValueFromClientX_(t);this.setValue_(i,!0)},t.prototype.computeValueFromClientX_=function(e){var t=this.max_,i=this.min_,s=(e-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(s=1-s),i+s*(t-i)},t.prototype.handleKeydown_=function(e){var t=this.getKeyId_(e),i=this.getValueForKeyId_(t);isNaN(i)||(e.preventDefault(),this.adapter_.addClass(ye.FOCUS),this.setValue_(i,!0),this.adapter_.notifyChange())},t.prototype.getKeyId_=function(e){return e.key===Ee||37===e.keyCode?Ee:e.key===Pe||39===e.keyCode?Pe:e.key===Re||38===e.keyCode?Re:e.key===Ce||40===e.keyCode?Ce:e.key===Ae||36===e.keyCode?Ae:"End"===e.key||35===e.keyCode?"End":e.key===ze||33===e.keyCode?ze:e.key===Te||34===e.keyCode?Te:""},t.prototype.getValueForKeyId_=function(e){var t=this.max_,i=this.min_,s=this.step_||(t-i)/100;switch(this.adapter_.isRTL()&&(e===Ee||e===Pe)&&(s=-s),e){case Ee:case Ce:return this.value_-s;case Pe:case Re:return this.value_+s;case Ae:return this.min_;case"End":return this.max_;case ze:return this.value_+s*we.PAGE_FACTOR;case Te:return this.value_-s*we.PAGE_FACTOR;default:return NaN}},t.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter_.addClass(ye.FOCUS)},t.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter_.removeClass(ye.FOCUS)},t.prototype.setValue_=function(e,t,i){if(void 0===i&&(i=!1),e!==this.value_||i){var s=this.min_,n=this.max_,r=e===s||e===n;this.step_&&!r&&(e=this.quantize_(e)),e<s?e=s:e>n&&(e=n),e=e||0,this.value_=e,this.adapter_.setAttribute(be.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),t&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(e))}},t.prototype.quantize_=function(e){return Math.round(e/this.step_)*this.step_},t.prototype.updateUIForCurrentValue_=function(){var e=this,t=this.max_,i=this.min_,s=(this.value_-i)/(t-i),n=s*this.rect_.width;this.adapter_.isRTL()&&(n=this.rect_.width-n);var r=function(e,t){if(ve(e)&&t in _e){var i=e.document.createElement("div"),s=_e[t],n=s.standard,r=s.prefixed;return n in i.style?n:r}return t}(window,"transform"),o=function(e,t){if(ve(e)&&t in fe){var i=e.document.createElement("div"),s=fe[t],n=s.standard,r=s.prefixed;return s.cssProperty in i.style?n:r}return t}(window,"transitionend");if(this.inTransit_){var a=function(){e.setInTransit_(!1),e.adapter_.deregisterThumbContainerInteractionHandler(o,a)};this.adapter_.registerThumbContainerInteractionHandler(o,a)}requestAnimationFrame((function(){e.adapter_.setThumbContainerStyleProperty(r,"translateX("+n+"px) translateX(-50%)"),e.adapter_.setTrackStyleProperty(r,"scaleX("+s+")")}))},t.prototype.setActive_=function(e){this.active_=e,this.toggleClass_(ye.ACTIVE,this.active_)},t.prototype.setInTransit_=function(e){this.inTransit_=e,this.toggleClass_(ye.IN_TRANSIT,this.inTransit_)},t.prototype.toggleClass_=function(e,t){t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},t}(ge);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ne=new WeakMap,Fe=i(e=>t=>{if(!(t instanceof x)||t instanceof E||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=t,{style:s}=i.element;Ne.has(t)||(s.cssText=i.strings.join(" "));const n=Ne.get(t);for(const t in n)t in e||(-1===t.indexOf("-")?s[t]=null:s.removeProperty(t));for(const t in e)-1===t.indexOf("-")?s[t]=e[t]:s.setProperty(t,e[t]);Ne.set(t,e)});class Oe extends pe{constructor(){super(...arguments),this.mdcFoundationClass=Ie,this.value=0,this.min=0,this.max=100,this.step=0,this.disabled=!1,this.pin=!1,this.markers=!1,this.pinMarkerText="",this.trackMarkerContainerStyles={},this.thumbContainerStyles={},this.trackStyles={},this.isFoundationDestroyed=!1}render(){const e=0!==this.step,t={"mdc-slider--discrete":e,"mdc-slider--display-markers":this.markers&&e};let i="";e&&this.markers&&(i=F`
        <div
            class="mdc-slider__track-marker-container"
            style="${Fe(this.trackMarkerContainerStyles)}">
        </div>`);let s="";return this.pin&&(s=F`
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`),F`
      <div class="mdc-slider ${de(t)}"
           tabindex="0" role="slider"
           aria-valuemin="${this.min}" aria-valuemax="${this.max}"
           aria-valuenow="${this.value}"
           aria-disabled="${this.disabled.toString()}"
           data-step="${this.step}"
           @mousedown=${this.layout}
           @touchstart=${this.layout}>
        <div class="mdc-slider__track-container">
          <div
              class="mdc-slider__track"
              style="${Fe(this.trackStyles)}">
          </div>
          ${i}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${Fe(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${s}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`}connectedCallback(){super.connectedCallback(),this.mdcRoot&&this.isFoundationDestroyed&&(this.isFoundationDestroyed=!1,this.mdcFoundation.init())}disconnectedCallback(){super.disconnectedCallback(),this.isFoundationDestroyed=!0,this.mdcFoundation.destroy()}createAdapter(){return Object.assign(Object.assign({},(e=this.mdcRoot,{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)})),{getAttribute:e=>this.mdcRoot.getAttribute(e),setAttribute:(e,t)=>this.mdcRoot.setAttribute(e,t),removeAttribute:e=>this.mdcRoot.removeAttribute(e),computeBoundingRect:()=>{const e=this.mdcRoot.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left+window.pageXOffset,right:e.right,top:e.top,width:e.width}},getTabIndex:()=>this.mdcRoot.tabIndex,registerInteractionHandler:(e,t)=>{const i="touchstart"===e?le():void 0;this.mdcRoot.addEventListener(e,t,i)},deregisterInteractionHandler:(e,t)=>this.mdcRoot.removeEventListener(e,t),registerThumbContainerInteractionHandler:(e,t)=>{const i="touchstart"===e?le():void 0;this.thumbContainer.addEventListener(e,t,i)},deregisterThumbContainerInteractionHandler:(e,t)=>this.thumbContainer.removeEventListener(e,t),registerBodyInteractionHandler:(e,t)=>document.body.addEventListener(e,t),deregisterBodyInteractionHandler:(e,t)=>document.body.removeEventListener(e,t),registerResizeHandler:e=>window.addEventListener("resize",e,le()),deregisterResizeHandler:e=>window.removeEventListener("resize",e),notifyInput:()=>{const e=this.mdcFoundation.getValue();e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent("input",{detail:this,composed:!0,bubbles:!0,cancelable:!0})))},notifyChange:()=>{this.dispatchEvent(new CustomEvent("change",{detail:this,composed:!0,bubbles:!0,cancelable:!0}))},setThumbContainerStyleProperty:(e,t)=>{this.thumbContainerStyles[e]=t,this.requestUpdate()},setTrackStyleProperty:(e,t)=>{this.trackStyles[e]=t,this.requestUpdate()},setMarkerValue:e=>this.pinMarkerText=e.toLocaleString(),setTrackMarkers:(e,t,i)=>{const s=e.toLocaleString(),n=`linear-gradient(to right, currentColor 2px, transparent 0) ${`0 center / calc((100% - 2px) / ${`((${t.toLocaleString()} - ${i.toLocaleString()}) / ${s})`}) 100% repeat-x`}`;this.trackMarkerContainerStyles.background=n,this.requestUpdate()},isRTL:()=>"rtl"===getComputedStyle(this.mdcRoot).direction});var e}resetFoundation(){this.mdcFoundation&&(this.mdcFoundation.destroy(),this.mdcFoundation.init())}layout(){this.mdcFoundation.layout()}}oe([Y(".mdc-slider")],Oe.prototype,"mdcRoot",void 0),oe([Y(".mdc-slider")],Oe.prototype,"formElement",void 0),oe([Y(".mdc-slider__thumb-container")],Oe.prototype,"thumbContainer",void 0),oe([Y(".mdc-slider__pin-value-marker")],Oe.prototype,"pinMarker",void 0),oe([J({type:Number}),me((function(e){this.mdcFoundation.setValue(e)}))],Oe.prototype,"value",void 0),oe([J({type:Number}),me((function(e){this.mdcFoundation.setMin(e)}))],Oe.prototype,"min",void 0),oe([J({type:Number}),me((function(e){this.mdcFoundation.setMax(e)}))],Oe.prototype,"max",void 0),oe([J({type:Number}),me((function(e,t){0!==t!=(0!==e)&&this.resetFoundation(),this.mdcFoundation.setStep(e)}))],Oe.prototype,"step",void 0),oe([J({type:Boolean,reflect:!0}),me((function(e){this.mdcFoundation.setDisabled(e)}))],Oe.prototype,"disabled",void 0),oe([J({type:Boolean,reflect:!0})],Oe.prototype,"pin",void 0),oe([J({type:Boolean,reflect:!0}),me((function(){this.mdcFoundation.setupTrackMarker()}))],Oe.prototype,"markers",void 0),oe([J({type:String})],Oe.prototype,"pinMarkerText",void 0),oe([J({type:Object})],Oe.prototype,"trackMarkerContainerStyles",void 0),oe([J({type:Object})],Oe.prototype,"thumbContainerStyles",void 0),oe([J({type:Object})],Oe.prototype,"trackStyles",void 0),oe([(e=>(t,i)=>void 0!==i?((e,t,i)=>{Object.assign(t[i],e)})(e,t,i):((e,t)=>Object.assign({},t,{finisher(i){Object.assign(i.prototype[t.key],e)}}))(e,t)
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/)({capture:!0,passive:!0})],Oe.prototype,"layout",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Ve=ie`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;let He=class extends Oe{};He.styles=Ve,He=oe([e=>"function"==typeof e?((e,t)=>(window.customElements.define("mwc-slider",t),t))(0,e):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(e){window.customElements.define("mwc-slider",e)}}})(0,e)],He);var Me=function(){try{var e=function(){if(!De)return De=!0,Promise.resolve(Promise.resolve(!1)).then((function(e){De=e,window[Le].dispatchEvent(new Event("change"))}))}();return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(e){return Promise.reject(e)}},Le="__foldables__",De=!1,Ue=function(){var e=this;if(void 0!==window[Le])return window[Le];var t=document.createDocumentFragment();this.addEventListener=t.addEventListener.bind(t),this.removeEventListener=t.removeEventListener.bind(t),this.dispatchEvent=function(i){if("change"===i.type){var s="on"+i.type;return"function"==typeof e[s]&&e[s](i),t.dispatchEvent(i)}},window.addEventListener("message",(function(t){"update"===t.data.action&&Object.assign(e,t.data.value)})),window.addEventListener("resize",(function(){return function(e,t){var i;return function(){var t=arguments,s=this;clearTimeout(i),i=setTimeout((function(){return e.apply(s,t)}),200)}}(Me())}))},je={spanning:{configurable:!0},foldSize:{configurable:!0},browserShellSize:{configurable:!0}};je.spanning.get=function(){return sessionStorage.getItem(Le+"-spanning")||"none"},je.spanning.set=function(e){if(!["none","single-fold-horizontal","single-fold-vertical"].includes(e))throw new TypeError(e);sessionStorage.setItem(Le+"-spanning",e),Me()},je.foldSize.get=function(){return+sessionStorage.getItem(Le+"-fold-size")||0},je.foldSize.set=function(e){if(!(Number(e)>=0))throw new TypeError(e);sessionStorage.setItem(Le+"-fold-size",e),Me()},je.browserShellSize.get=function(){return+sessionStorage.getItem(Le+"-browser-shell-size")||0},je.browserShellSize.set=function(e){if(!(Number(e)>=0))throw new TypeError(e);sessionStorage.setItem(Le+"-browser-shell-size",e),Me()},Ue.prototype.getSegments=function(){if("none"===this.spanning)return[{left:0,top:0,width:window.innerWidth,height:window.innerHeight}];if("single-fold-horizontal"===this.spanning){var e=(window.innerHeight-this.browserShellSize)/2,t=window.innerWidth;return[{top:0,left:0,width:t,height:e-this.foldSize/2},{top:e-this.foldSize/2,height:this.foldSize,left:0,width:t},{top:e+this.foldSize/2,left:0,width:t,height:window.innerHeight}]}if("single-fold-vertical"===this.spanning){var i=window.innerWidth/2-this.foldSize/2,s=window.innerHeight;return[{top:0,left:0,width:i,height:s},{top:0,height:s,left:i,width:this.foldSize},{top:0,left:window.innerWidth/2+this.foldSize/2,width:i,height:s}]}},Object.defineProperties(Ue.prototype,je),window[Le]=new Ue,window.getWindowSegments=function(){var e=window[Le].getSegments();return[e[0],e[2]]};var Be="single-fold-horizontal",$e="single-fold-vertical",qe="(\\s*)(@media.*?\\bspanning\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}",We=/\((.*?)\)/gi,Xe=/@media[^\(]+/gi,Ke=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")},Je=window.matchMedia("(spanning: single-fold-horizontal)").matches||window.matchMedia("(spanning: single-fold-vertical)").matches||window.matchMedia("(spanning: none)").matches||!1;console.info("CSS Spanning Media Queries are supported? "+Je);var Ye,Ge=new Ue;if(!Je){var Ze=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(Ye=Ze,Promise.all(Ye.map((function(e){return e.href?fetch(e.href).then((function(e){return e.text()})):e.textContent})))).then((function(e){var t=new DocumentFragment;e.forEach((function(e,i){for(var s=function(e,t){return e.replace(new RegExp(qe,"gi"),"")}(e),n=function(e){var t=function(e){var t,i=new RegExp(qe,"gi");if("function"==typeof e.matchAll)t=Array.from(e.matchAll(i));else{for(t=[];t[t.length]=i.exec(e););t.length--}return t}(e),i={"single-fold-horizontal":"","single-fold-vertical":"",none:""};return t.forEach((function(e){var t=e[1],s=e[2],n=e[3],r=e[4],o="none";s.indexOf(Be)>-1&&(o=Be),s.indexOf($e)>-1&&(o=$e);var a=s.match(Xe)||[],d=s.match(We)||[];d=d.filter((function(e){return!e.includes("spanning")})).join(" and "),i[o]+=""+t+a+d+"{"+n+r+"}"})),i}(e),r=Ze[i].href||"inline",o=0,a=Object.entries(n);o<a.length;o+=1){var d=a[o];Qe[d[0]]+="/* origin: "+r+" */"+d[1]}var l=document.createElement("style");l.setAttribute("data-css-origin",r),l.textContent=s,t.appendChild(l)})),Ze.forEach((function(e){return null!=e.parentElement&&e.parentElement.removeChild(e)})),document.head.appendChild(t),function(e){Je||(et(e),Ge.addEventListener("change",(function(){return et(e)})))}()}))}var Qe={"single-fold-horizontal":"","single-fold-vertical":"",none:""};function et(e){for(var t,i=Ge,s=e?Qe[e.nodeName.toLowerCase()][i.spanning]:Qe[i.spanning],n=e?Qe[e.nodeName.toLowerCase()]["non-spanning"]:null,r=Ge.getSegments(),o=0,a=Object.entries(1===r.length?{}:r[1]);o<a.length;o+=1){var d=a[o];t=d[1]+"px",s=s.replace(Ke("fold-"+d[0]),t)}var l="__foldables_sheet__",c=function(e,t){for(var i=0,s=e.querySelectorAll("."+l);i<s.length;i+=1)s[i].remove();var n=document.createElement("style");n.className=l,n.textContent=t,e===document?document.head.appendChild(n):e.appendChild(n)};if(e){var h=e.shadowRoot;"adoptedStyleSheets"in h&&h.adoptedStyleSheets.length>0?h.adoptedStyleSheets[0].replace(n+s):c(h,s)}else c(document,s)}class tt extends se{constructor(...t){super(...t),e(this,"_header",void 0),e(this,"_device_type_select",void 0),e(this,"_orientation_select",void 0),e(this,"_seam_slider",void 0),e(this,"_seam_container",void 0),e(this,"_preview",void 0),e(this,"_preview_container",void 0),e(this,"_device",void 0),e(this,"_frame",void 0),e(this,"_device_hinge",void 0),e(this,"_currentOrientation",void 0),e(this,"_currentDevice",void 0),e(this,"_isFullscreen",!1),e(this,"_spanning",void 0),e(this,"_fold_width",void 0),e(this,"_browser_shell_size",void 0),e(this,"_position_x",void 0),e(this,"_position_y",void 0),e(this,"_resizeHandler",void 0),e(this,"_handleKeyUp",e=>{73==e.keyCode&&e.ctrlKey&&(this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex")}),e(this,"_startDrag",async e=>{this._isFullscreen||(this._position_x=e.clientX,this._position_y=e.clientY,this._pointerId=e.pointerId,this._header.setPointerCapture(this._pointerId),this._header.onpointerup=this._stopDrag,this._header.onpointercancel=this._stopDrag,this._header.onpointermove=this._pointerMove,e.preventDefault())}),e(this,"_pointerMove",async e=>{const t=this._position_x-e.clientX,i=this._position_y-e.clientY;this._position_x=e.clientX,this._position_y=e.clientY,this.shadowRoot.host.style.top=this.shadowRoot.host.offsetTop-i+"px",this.shadowRoot.host.style.left=this.shadowRoot.host.offsetLeft-t+"px",e.preventDefault()}),e(this,"_stopDrag",async e=>{this._header.onpointerup=null,this._header.onpointermove=null,this._header.releasePointerCapture(this._pointerId)}),e(this,"_onResize",async e=>{this._handleAsusSpanning()}),e(this,"_seamValueUpdated",async e=>{this.foldWidth=e.target.value,this.shadowRoot.host.style.setProperty("--device-fold-width",e.target.value+"px"),this._updateFoldablesFeature()}),e(this,"_rotationFinished",e=>{this._preview.style.transition=""})}_inIframe(){try{return window.self!==window.top}catch(e){return!0}}firstUpdated(){if(!this._inIframe())return window.matchMedia("(spanning: single-fold-horizontal)").matches||window.matchMedia("(spanning: single-fold-vertical)").matches||window.matchMedia("(spanning: none)").matches?(console.info("CSS Spanning Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none")):(this._header=this.shadowRoot.querySelector("#header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._header.onpointerdown=this._startDrag.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this),this._seam_slider.oninput=this._seamValueUpdated.bind(this),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this.spanning="none",this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._frame.src=window.location.href,this._updateFoldablesFeature(),this._currentOrientation="none",document.addEventListener("keyup",this._handleKeyUp,!1),void console.log("Device Pixel Ratio : "+window.devicePixelRatio));this.shadowRoot.host.style.display="none"}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.spanning="single-fold-horizontal",this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{for(const e of document.styleSheets)if("__foldables_sheet__"===e.ownerNode.className){this._addZenbookVariables(e);break}for(const e of this._frame.contentDocument.styleSheets)if("__foldables_sheet__"===e.ownerNode.className){this._addZenbookVariables(e);break}},200)):(this.spanning="none",this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this.spanning}_addZenbookVariables(e){e.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",e.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(e){this._fold_width=Math.max(0,e)}_orientationChanged(e){const t=this._orientation_select.selectedIndex;this.spanning=this._orientation_select[t].value,this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){switch(this._spanning!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this.spanning,this.spanning){case"none":"asus"===this._currentDevice?this._applyHorizontalRotation():this._applyVerticalRotation();break;case"single-fold-vertical":this._applyVerticalRotation();break;case"single-fold-horizontal":this._applyHorizontalRotation()}}get spanning(){return this._spanning}set spanning(e){switch(e){case"none":case"single-fold-vertical":this._orientation_select.selectedIndex=0;break;case"single-fold-horizontal":this._orientation_select.selectedIndex=1;break;default:e="none",this._orientation_select.selectedIndex=0}this._spanning=e}_deviceTypeChanged(e){const t=this._device_type_select.selectedIndex,i=this._device_type_select[t].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,i){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this._seam_slider.layout(),this.foldWidth=24,"none"===this._spanning&&(this._currentOrientation=this.spanning="single-fold-vertical"),this._currentDevice="custom",this._updatePreviewConfiguration(),this._updateFoldablesFeature();break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge"),this.foldWidth=24,this._currentDevice="neo","none"===this._spanning&&(this._currentOrientation=this.spanning="single-fold-vertical"),this._updatePreviewConfiguration(),this._updateFoldablesFeature();break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge"),this.foldWidth=28,this._currentDevice="duo","none"===this._spanning&&(this._currentOrientation=this.spanning="single-fold-vertical"),this._updatePreviewConfiguration(),this._updateFoldablesFeature();break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge"),this._handleAsusSpanning(),this._currentDevice="asus",this._updatePreviewConfiguration(),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"hsb":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!1,this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge"),this._seam_slider.layout(),this.foldWidth=114,"none"===this._spanning&&(this._currentOrientation=this.spanning="single-fold-horizontal"),this._currentDevice="hsb",this._updatePreviewConfiguration(),this._updateFoldablesFeature();break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._currentOrientation=this.spanning="none",this._currentDevice="duo",this.foldWidth=0,this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge"),this._updatePreviewConfiguration(),this._updateFoldablesFeature()}}_calculateAndApplyScaleFactor(){const e=window.getComputedStyle(this._preview_container),t=window.getComputedStyle(this._device),i=parseInt(e.width,10),s=parseInt(e.height,10);let n=parseInt(t.width,10),r=parseInt(t.height,10),o=1;if("single-fold-horizontal"==this._currentOrientation&&(n=parseInt(t.height,10),r=parseInt(t.width,10)),r>s||n>i){const e=s/r,t=i/n;o=t<e?t:e}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*o)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px");break;case"hsb":this.shadowRoot.host.style.setProperty("--device-screen1-width","1280px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","1280px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1920px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1920px"),this.shadowRoot.host.style.setProperty("--device-fold-width","114px")}this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const e=new Ue;e.foldSize=this.foldWidth,e.spanning=this.spanning,this._seam_slider.value=this.foldWidth}_debounce(e,t){let i;return function(){clearTimeout(i),i=setTimeout(()=>e.apply(this,arguments),t)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.top="0px",this.shadowRoot.host.style.left="0px",this.shadowRoot.host.style.right="",this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.style.top="16px",this.shadowRoot.host.style.left="",this.shadowRoot.host.style.right="80px"),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none"}render(){return F`
    <div id="wrapper">
      <div class="close" @click="${this._closeConfigurator}">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
        </svg>
      </div>
      <div class="fullscreen" @click="${this._toggleFullscreen}">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
          <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
          <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
          <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
          <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
        </svg>
      </div>
      <div id="header">Foldable Devices</div>
      <div id="content">
        <label for="device-select" class="category">Device</label>
        <select id="device-select">
          <option value="standard">Off</option>
          <option value="custom">Custom...</option>
          <optgroup label="Presets">
            <option value="neo">Surface Neo</option>
            <option value="duo">Surface Duo</option>
            <option value="asus">Asus Zenbook Pro Duo</option>
            <option value="hsb">HSB</option>
          </optgroup>
        </select>
        <label for="orientation-select" class="category">Orientation</label>
        <select id="orientation-select" disabled>
          <option value="single-fold-vertical">Vertical</option>
          <option value="single-fold-horizontal">Horizontal</option>
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
          <label for="seam" class="category">Seam width</label>
          <mwc-slider markers pin step="5" value="30" min="0" max="200" id="seam" disabled></mwc-slider>
        </div>
        <div class="legend"> If you close the configurator use CTRL + i to show it again </div>
      </div>
    </div>`}}e(tt,"styles",ie`
    :host {
      z-index: 9999;
      position: absolute;
      width: 450px;
      height: 430px;
      font-size: 12px;
      background-color: white;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
      top: 16px;
      right: 80px;
      border: 1px solid grey;
      overscroll-behavior: contain;

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
    }

    :host(.fullscreen) {
      height: 100vh;
      width: 100vw;
      top: 0px;
      left: 0px;
    }

    #header {
      background-color: #f2f2f2;
      border-bottom: 1px solid #cccccc;
      height: 28px;
      cursor: move;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      touch-action: none;
    }


    #wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
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

    mwc-slider {
      --mdc-theme-secondary: black;
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

    .close {
      position: absolute;
      right: 5px;
      top: 5px;
      width: 18px;
      height: 18px;
      opacity: 0.5;
      cursor: initial;
    }

    .close:hover {
      opacity: 1;
    }

    .fullscreen {
      position: absolute;
      right: 30px;
      top: 5px;
      width: 18px;
      height: 18px;
      opacity: 0.5;
      cursor: initial;
    }

    .fullscreen:hover {
      opacity: 1;
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
  `),customElements.define("foldable-device-configurator",tt);export{tt as FoldableDeviceConfigurator};
//# sourceMappingURL=foldable-device-configurator.js.map
