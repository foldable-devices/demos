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
 */const $=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,E=(e,t,s=null)=>{for(;t!==s;){const r=t.nextSibling;e.removeChild(t),t=r}};/**
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
 */const f=`{{lit-${String(Math.random()).slice(2)}}}`,J=`<!--${f}-->`,K=new RegExp(`${f}|${J}`),T="$lit$";class X{constructor(e,t){this.parts=[],this.element=t;const s=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let a=0,n=-1,i=0;const{strings:h,values:{length:p}}=e;for(;i<p;){const l=o.nextNode();if(l===null){o.currentNode=r.pop();continue}if(n++,l.nodeType===1){if(l.hasAttributes()){const d=l.attributes,{length:P}=d;let g=0;for(let u=0;u<P;u++)Y(d[u].name,T)&&g++;for(;g-- >0;){const u=h[i],w=A.exec(u)[2],v=w.toLowerCase()+T,b=l.getAttribute(v);l.removeAttribute(v);const m=b.split(K);this.parts.push({type:"attribute",index:n,name:w,strings:m}),i+=m.length-1}}l.tagName==="TEMPLATE"&&(r.push(l),o.currentNode=l.content)}else if(l.nodeType===3){const d=l.data;if(d.indexOf(f)>=0){const P=l.parentNode,g=d.split(K),u=g.length-1;for(let w=0;w<u;w++){let v,b=g[w];if(b==="")v=y();else{const m=A.exec(b);m!==null&&Y(m[2],T)&&(b=b.slice(0,m.index)+m[1]+m[2].slice(0,-T.length)+m[3]),v=document.createTextNode(b)}P.insertBefore(v,l),this.parts.push({type:"node",index:++n})}g[u]===""?(P.insertBefore(y(),l),s.push(l)):l.data=g[u],i+=u}}else if(l.nodeType===8)if(l.data===f){const d=l.parentNode;(l.previousSibling===null||n===a)&&(n++,d.insertBefore(y(),l)),a=n,this.parts.push({type:"node",index:n}),l.nextSibling===null?l.data="":(s.push(l),n--),i++}else{let d=-1;for(;(d=l.data.indexOf(f,d+1))!==-1;)this.parts.push({type:"node",index:-1}),i++}}for(const l of s)l.parentNode.removeChild(l)}}const Y=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},Q=e=>e.index!==-1,y=()=>document.createComment(""),A=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */const k=133;function Z(e,t){const{element:{content:s},parts:r}=e,o=document.createTreeWalker(s,k,null,!1);let a=x(r),n=r[a],i=-1,h=0;const p=[];let l=null;for(;o.nextNode();){i++;const d=o.currentNode;for(d.previousSibling===l&&(l=null),t.has(d)&&(p.push(d),l===null&&(l=d)),l!==null&&h++;n!==void 0&&n.index===i;)n.index=l!==null?-1:n.index-h,a=x(r,a),n=r[a]}p.forEach(d=>d.parentNode.removeChild(d))}const ue=e=>{let t=e.nodeType===11?0:1;const s=document.createTreeWalker(e,k,null,!1);for(;s.nextNode();)t++;return t},x=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const r=e[s];if(Q(r))return s}return-1};function me(e,t,s=null){const{element:{content:r},parts:o}=e;if(s==null){r.appendChild(t);return}const a=document.createTreeWalker(r,k,null,!1);let n=x(o),i=0,h=-1;for(;a.nextNode();){h++;const p=a.currentNode;for(p===s&&(i=ue(t),s.parentNode.insertBefore(t,s));n!==-1&&o[n].index===h;){if(i>0){for(;n!==-1;)o[n].index+=i,n=x(o,n);return}n=x(o,n)}}}/**
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
 */const ee=new WeakMap(),fe=e=>(...t)=>{const s=e(...t);return ee.set(s,!0),s},_=e=>typeof e=="function"&&ee.has(e);/**
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
 */const c={},te={};/**
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
 */class I{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)s!==void 0&&s.setValue(e[t]),t++;for(const s of this.__parts)s!==void 0&&s.commit()}_clone(){const e=$?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let o=0,a=0,n,i=r.nextNode();for(;o<s.length;){if(n=s[o],!Q(n)){this.__parts.push(void 0),o++;continue}for(;a<n.index;)a++,i.nodeName==="TEMPLATE"&&(t.push(i),r.currentNode=i.content),(i=r.nextNode())===null&&(r.currentNode=t.pop(),i=r.nextNode());if(n.type==="node"){const h=this.processor.handleTextExpression(this.options);h.insertAfterNode(i.previousSibling),this.__parts.push(h)}else this.__parts.push(...this.processor.handleAttributeExpressions(i,n.name,n.strings,this.options));o++}return $&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
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
 */const se=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),ye=` ${f} `;class re{constructor(e,t,s,r){this.strings=e,this.values=t,this.type=s,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let r=0;r<e;r++){const o=this.strings[r],a=o.lastIndexOf("<!--");s=(a>-1||s)&&o.indexOf("-->",a+1)===-1;const n=A.exec(o);n===null?t+=o+(s?ye:J):t+=o.substr(0,n.index)+n[1]+n[2]+T+n[3]+f}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return se!==void 0&&(t=se.createHTML(t)),e.innerHTML=t,e}}/**
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
 */const O=e=>e===null||!(typeof e=="object"||typeof e=="function"),R=e=>Array.isArray(e)||!!(e&&e[Symbol.iterator]);class oe{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let r=0;r<s.length-1;r++)this.parts[r]=this._createPart()}_createPart(){return new M(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(t===1&&e[0]===""&&e[1]===""){const o=s[0].value;if(typeof o=="symbol")return String(o);if(typeof o=="string"||!R(o))return o}let r="";for(let o=0;o<t;o++){r+=e[o];const a=s[o];if(a!==void 0){const n=a.value;if(O(n)||!R(n))r+=typeof n=="string"?n:String(n);else for(const i of n)r+=typeof i=="string"?i:String(i)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class M{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==c&&(!O(e)||e!==this.value)&&(this.value=e,_(e)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){const e=this.value;this.value=c,e(this)}if(this.value===c)return;this.committer.commit()}}class U{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(y()),this.endNode=e.appendChild(y())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=y()),e.__insert(this.endNode=y())}insertAfterPart(e){e.__insert(this.startNode=y()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=c,t(this)}const e=this.__pendingValue;if(e===c)return;O(e)?e!==this.value&&this.__commitText(e):e instanceof re?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):R(e)?this.__commitIterable(e):e===te?(this.value=te,this.clear()):this.__commitText(e)}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){if(this.value===e)return;this.clear(),this.__insert(e),this.value=e}__commitText(e){const t=this.startNode.nextSibling;e=e??"";const s=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof I&&this.value.template===t)this.value.update(e.values);else{const s=new I(t,e.processor,this.options),r=s._clone();s.update(e.values),this.__commitNode(r),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s=0,r;for(const o of e)r=t[s],r===void 0&&(r=new U(this.options),t.push(r),s===0?r.appendIntoPart(this):r.insertAfterPart(t[s-1])),r.setValue(o),r.commit(),s++;s<t.length&&(t.length=s,this.clear(r&&r.endNode))}clear(e=this.startNode){E(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ge{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,s.length!==2||s[0]!==""||s[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=c,t(this)}if(this.__pendingValue===c)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=c}}class be extends oe{constructor(e,t,s){super(e,t,s);this.single=s.length===2&&s[0]===""&&s[1]===""}_createPart(){return new ne(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ne extends M{}let ie=!1;(()=>{try{const e={get capture(){return ie=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class we{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=r=>this.handleEvent(r)}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const o=this.__pendingValue;this.__pendingValue=c,o(this)}if(this.__pendingValue===c)return;const e=this.__pendingValue,t=this.value,s=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=e!=null&&(t==null||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=ve(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=c}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ve=e=>e&&(ie?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);/**
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
 */function Se(e){let t=C.get(e.type);t===void 0&&(t={stringsArray:new WeakMap(),keyString:new Map()},C.set(e.type,t));let s=t.stringsArray.get(e.strings);if(s!==void 0)return s;const r=e.strings.join(f);return s=t.keyString.get(r),s===void 0&&(s=new X(e,e.getTemplateElement()),t.keyString.set(r,s)),t.stringsArray.set(e.strings,s),s}const C=new Map();/**
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
 */const S=new WeakMap(),Te=(e,t,s)=>{let r=S.get(t);r===void 0&&(E(t,t.firstChild),S.set(t,r=new U(Object.assign({templateFactory:Se},s))),r.appendInto(t)),r.setValue(e),r.commit()};/**
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
 */class xe{handleAttributeExpressions(e,t,s,r){const o=t[0];if(o==="."){const n=new be(e,t.slice(1),s);return n.parts}if(o==="@")return[new we(e,t.slice(1),r.eventContext)];if(o==="?")return[new ge(e,t.slice(1),s)];const a=new oe(e,t,s);return a.parts}handleTextExpression(e){return new U(e)}}const _e=new xe();/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const Ce=(e,...t)=>new re(e,t,"html",_e);/**
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
 */const ae=(e,t)=>`${e}--${t}`;let N=!0;typeof window.ShadyCSS=="undefined"?N=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),N=!1);const Pe=e=>t=>{const s=ae(t.type,e);let r=C.get(s);r===void 0&&(r={stringsArray:new WeakMap(),keyString:new Map()},C.set(s,r));let o=r.stringsArray.get(t.strings);if(o!==void 0)return o;const a=t.strings.join(f);if(o=r.keyString.get(a),o===void 0){const n=t.getTemplateElement();N&&window.ShadyCSS.prepareTemplateDom(n,e),o=new X(t,n),r.keyString.set(a,o)}return r.stringsArray.set(t.strings,o),o},Ne=["html","svg"],Ee=e=>{Ne.forEach(t=>{const s=C.get(ae(t,e));s!==void 0&&s.keyString.forEach(r=>{const{element:{content:o}}=r,a=new Set();Array.from(o.querySelectorAll("style")).forEach(n=>{a.add(n)}),Z(r,a)})})},le=new Set(),Ae=(e,t,s)=>{le.add(e);const r=s?s.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:a}=o;if(a===0){window.ShadyCSS.prepareTemplateStyles(r,e);return}const n=document.createElement("style");for(let p=0;p<a;p++){const l=o[p];l.parentNode.removeChild(l),n.textContent+=l.textContent}Ee(e);const i=r.content;s?me(s,n,i.firstChild):i.insertBefore(n,i.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const h=i.querySelector("style");if(window.ShadyCSS.nativeShadow&&h!==null)t.insertBefore(h.cloneNode(!0),t.firstChild);else if(s){i.insertBefore(n,i.firstChild);const p=new Set();p.add(n),Z(s,p)}},ke=(e,t,s)=>{if(!s||typeof s!="object"||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,o=S.has(t),a=N&&t.nodeType===11&&!!t.host,n=a&&!le.has(r),i=n?document.createDocumentFragment():t;if(Te(e,i,Object.assign({templateFactory:Pe(r)},s)),n){const h=S.get(i);S.delete(i);const p=h.value instanceof I?h.value.template:void 0;Ae(r,i,p),E(t,t.firstChild),t.appendChild(i),S.set(t,h)}!o&&a&&window.ShadyCSS.styleElement(t.host)};/**
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
 */var de;window.JSCompiler_renameProperty=(e,t)=>e;const j={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},he=(e,t)=>t!==e&&(t===t||e===e),D={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:he},L=1,B=1<<2,F=1<<3,W=1<<4,V="finalized";class pe extends HTMLElement{constructor(){super();this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const r=this._attributeNameForProperty(s,t);r!==void 0&&(this._attributeToPropertyMap.set(r,s),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map();const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(e,t=D){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s=typeof e=="symbol"?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdateInternal(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||D}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(V)||e.finalize(),this[V]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map(),this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const r of s)this.createProperty(r,t[r])}}static _attributeNameForProperty(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=he){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,r=t.converter||j,o=typeof r=="function"?r:r.fromAttribute;return o?o(e,s):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const s=t.type,r=t.converter,o=r&&r.toAttribute||j.toAttribute;return o(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map(),this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const s=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map()),this._instanceProperties.set(t,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=D){const r=this.constructor,o=r._attributeNameForProperty(e,s);if(o!==void 0){const a=r._propertyValueToAttribute(t,s);if(a===void 0)return;this._updateState=this._updateState|F,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._updateState=this._updateState&~F}}_attributeToProperty(e,t){if(this._updateState&F)return;const s=this.constructor,r=s._attributeToPropertyMap.get(e);if(r!==void 0){const o=s.getPropertyOptions(r);this._updateState=this._updateState|W,this[r]=s._propertyValueFromAttribute(t,o),this._updateState=this._updateState&~W}}requestUpdateInternal(e,t,s){let r=!0;if(e!==void 0){const o=this.constructor;s=s||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),s.reflect===!0&&!(this._updateState&W)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map()),this._reflectingProperties.set(e,s))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|B;try{await this._updatePromise}catch(t){}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&B}get hasUpdated(){return this._updateState&L}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(s){throw e=!1,this._markUpdated(),s}e&&(this._updateState&L||(this._updateState=this._updateState|L,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map(),this._updateState=this._updateState&~B}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}de=V,pe[de]=!0;/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const H=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol();class z{constructor(e,t){if(t!==q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(H?(this._styleSheet=new CSSStyleSheet(),this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Ie=e=>new z(String(e),q),Oe=e=>{if(e instanceof z)return e.cssText;if(typeof e=="number")return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},Re=(e,...t)=>{const s=t.reduce((r,o,a)=>r+Oe(o)+e[a+1],e[0]);return new z(s,q)};/**
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ce={};class G extends pe{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(o,a)=>o.reduceRight((n,i)=>Array.isArray(i)?t(i,n):(n.add(i),n),a),s=t(e,new Set()),r=[];s.forEach(o=>r.unshift(o)),this._styles=r}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!H){const s=Array.prototype.slice.call(t.cssRules).reduce((r,o)=>r+o.cssText,"");return Ie(s)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;if(e.length===0)return;window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):H?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ce&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{const r=document.createElement("style");r.textContent=s.cssText,this.renderRoot.appendChild(r)}))}render(){return ce}}G.finalized=!0,G.render=ke;export{M as A,G as L,ne as P,Re as c,fe as d,Ce as h};
