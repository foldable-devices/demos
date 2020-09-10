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
 */const R=typeof window!=="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,C=(a,b,c=null)=>{for(;b!==c;){const d=b.nextSibling;a.removeChild(b),b=d}};/**
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
 */const o=`{{lit-${String(Math.random()).slice(2)}}}`,S=`<!--${o}-->`,T=new RegExp(`${o}|${S}`),w="$lit$";class U{constructor(a,b){this.parts=[],this.element=b;const c=[],d=[],e=document.createTreeWalker(b.content,133,null,!1);let g=0,f=-1,i=0;const{strings:k,values:{length:l}}=a;for(;i<l;){const h=e.nextNode();if(h===null){e.currentNode=d.pop();continue}f++;if(h.nodeType===1){if(h.hasAttributes()){const j=h.attributes,{length:B}=j;let r=0;for(let n=0;n<B;n++)V(j[n].name,w)&&r++;for(;r-- >0;){const n=k[i],u=D.exec(n)[2],v=u.toLowerCase()+w,s=h.getAttribute(v);h.removeAttribute(v);const p=s.split(T);this.parts.push({type:"attribute",index:f,name:u,strings:p}),i+=p.length-1}}h.tagName==="TEMPLATE"&&(d.push(h),e.currentNode=h.content)}else if(h.nodeType===3){const j=h.data;if(j.indexOf(o)>=0){const B=h.parentNode,r=j.split(T),n=r.length-1;for(let u=0;u<n;u++){let v,s=r[u];if(s==="")v=q();else{const p=D.exec(s);p!==null&&V(p[2],w)&&(s=s.slice(0,p.index)+p[1]+p[2].slice(0,-w.length)+p[3]),v=document.createTextNode(s)}B.insertBefore(v,h),this.parts.push({type:"node",index:++f})}r[n]===""?(B.insertBefore(q(),h),c.push(h)):h.data=r[n],i+=n}}else if(h.nodeType===8)if(h.data===o){const j=h.parentNode;(h.previousSibling===null||f===g)&&(f++,j.insertBefore(q(),h)),g=f,this.parts.push({type:"node",index:f}),h.nextSibling===null?h.data="":(c.push(h),f--),i++}else{let j=-1;for(;(j=h.data.indexOf(o,j+1))!==-1;)this.parts.push({type:"node",index:-1}),i++}}for(const h of c)h.parentNode.removeChild(h)}}const V=(a,b)=>{const c=a.length-b.length;return c>=0&&a.slice(c)===b},W=a=>a.index!==-1,q=()=>document.createComment(""),D=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */const E=133;function X(a,b){const{element:{content:c},parts:d}=a,e=document.createTreeWalker(c,E,null,!1);let g=x(d),f=d[g],i=-1,k=0;const l=[];let h=null;for(;e.nextNode();){i++;const j=e.currentNode;for(j.previousSibling===h&&(h=null),b.has(j)&&(l.push(j),h===null&&(h=j)),h!==null&&k++;f!==void 0&&f.index===i;)f.index=h!==null?-1:f.index-k,g=x(d,g),f=d[g]}l.forEach(j=>j.parentNode.removeChild(j))}const ma=a=>{let b=a.nodeType===11?0:1;const c=document.createTreeWalker(a,E,null,!1);for(;c.nextNode();)b++;return b},x=(a,b=-1)=>{for(let c=b+1;c<a.length;c++){const d=a[c];if(W(d))return c}return-1};function na(a,b,c=null){const{element:{content:d},parts:e}=a;if(c===null||c===void 0){d.appendChild(b);return}const g=document.createTreeWalker(d,E,null,!1);let f=x(e),i=0,k=-1;for(;g.nextNode();){k++;const l=g.currentNode;for(l===c&&(i=ma(b),c.parentNode.insertBefore(b,c));f!==-1&&e[f].index===k;){if(i>0){for(;f!==-1;)e[f].index+=i,f=x(e,f);return}f=x(e,f)}}}/**
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
 */const Y=new WeakMap(),oa=a=>(...b)=>{const c=a(...b);return Y.set(c,!0),c},y=a=>typeof a==="function"&&Y.has(a);/**
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
 */const m={},Z={};/**
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
 */class F{constructor(a,b,c){this.__parts=[],this.template=a,this.processor=b,this.options=c}update(a){let b=0;for(const c of this.__parts)c!==void 0&&c.setValue(a[b]),b++;for(const c of this.__parts)c!==void 0&&c.commit()}_clone(){const a=R?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),b=[],c=this.template.parts,d=document.createTreeWalker(a,133,null,!1);let e=0,g=0,f,i=d.nextNode();for(;e<c.length;){f=c[e];if(!W(f)){this.__parts.push(void 0),e++;continue}for(;g<f.index;)g++,i.nodeName==="TEMPLATE"&&(b.push(i),d.currentNode=i.content),(i=d.nextNode())===null&&(d.currentNode=b.pop(),i=d.nextNode());if(f.type==="node"){const k=this.processor.handleTextExpression(this.options);k.insertAfterNode(i.previousSibling),this.__parts.push(k)}else this.__parts.push(...this.processor.handleAttributeExpressions(i,f.name,f.strings,this.options));e++}return R&&(document.adoptNode(a),customElements.upgrade(a)),a}}/**
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
 */const pa=` ${o} `;class _{constructor(a,b,c,d){this.strings=a,this.values=b,this.type=c,this.processor=d}getHTML(){const a=this.strings.length-1;let b="",c=!1;for(let d=0;d<a;d++){const e=this.strings[d],g=e.lastIndexOf("<!--");c=(g>-1||c)&&e.indexOf("-->",g+1)===-1;const f=D.exec(e);f===null?b+=e+(c?pa:S):b+=e.substr(0,f.index)+f[1]+f[2]+w+f[3]+o}return b+=this.strings[a],b}getTemplateElement(){const a=document.createElement("template");return a.innerHTML=this.getHTML(),a}}/**
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
 */const G=a=>a===null||!(typeof a==="object"||typeof a==="function"),$=a=>Array.isArray(a)||!!(a&&a[Symbol.iterator]);class aa{constructor(a,b,c){this.dirty=!0,this.element=a,this.name=b,this.strings=c,this.parts=[];for(let d=0;d<c.length-1;d++)this.parts[d]=this._createPart()}_createPart(){return new H(this)}_getValue(){const a=this.strings,b=a.length-1;let c="";for(let d=0;d<b;d++){c+=a[d];const e=this.parts[d];if(e!==void 0){const g=e.value;if(G(g)||!$(g))c+=typeof g==="string"?g:String(g);else for(const f of g)c+=typeof f==="string"?f:String(f)}}return c+=a[b],c}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class H{constructor(a){this.value=void 0,this.committer=a}setValue(a){a!==m&&(!G(a)||a!==this.value)&&(this.value=a,y(a)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const a=this.value;this.value=m,a(this)}if(this.value===m)return;this.committer.commit()}}class I{constructor(a){this.value=void 0,this.__pendingValue=void 0,this.options=a}appendInto(a){this.startNode=a.appendChild(q()),this.endNode=a.appendChild(q())}insertAfterNode(a){this.startNode=a,this.endNode=a.nextSibling}appendIntoPart(a){a.__insert(this.startNode=q()),a.__insert(this.endNode=q())}insertAfterPart(a){a.__insert(this.startNode=q()),this.endNode=a.endNode,a.endNode=this.startNode}setValue(a){this.__pendingValue=a}commit(){if(this.startNode.parentNode===null)return;for(;y(this.__pendingValue);){const b=this.__pendingValue;this.__pendingValue=m,b(this)}const a=this.__pendingValue;if(a===m)return;G(a)?a!==this.value&&this.__commitText(a):a instanceof _?this.__commitTemplateResult(a):a instanceof Node?this.__commitNode(a):$(a)?this.__commitIterable(a):a===Z?(this.value=Z,this.clear()):this.__commitText(a)}__insert(a){this.endNode.parentNode.insertBefore(a,this.endNode)}__commitNode(a){if(this.value===a)return;this.clear(),this.__insert(a),this.value=a}__commitText(a){const b=this.startNode.nextSibling;a=a==null?"":a;const c=typeof a==="string"?a:String(a);b===this.endNode.previousSibling&&b.nodeType===3?b.data=c:this.__commitNode(document.createTextNode(c)),this.value=a}__commitTemplateResult(a){const b=this.options.templateFactory(a);if(this.value instanceof F&&this.value.template===b)this.value.update(a.values);else{const c=new F(b,a.processor,this.options),d=c._clone();c.update(a.values),this.__commitNode(d),this.value=c}}__commitIterable(a){Array.isArray(this.value)||(this.value=[],this.clear());const b=this.value;let c=0,d;for(const e of a)d=b[c],d===void 0&&(d=new I(this.options),b.push(d),c===0?d.appendIntoPart(this):d.insertAfterPart(b[c-1])),d.setValue(e),d.commit(),c++;c<b.length&&(b.length=c,this.clear(d&&d.endNode))}clear(a=this.startNode){C(this.startNode.parentNode,a.nextSibling,this.endNode)}}class qa{constructor(a,b,c){this.value=void 0,this.__pendingValue=void 0;if(c.length!==2||c[0]!==""||c[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=a,this.name=b,this.strings=c}setValue(a){this.__pendingValue=a}commit(){for(;y(this.__pendingValue);){const b=this.__pendingValue;this.__pendingValue=m,b(this)}if(this.__pendingValue===m)return;const a=!!this.__pendingValue;this.value!==a&&(a?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=a),this.__pendingValue=m}}class ra extends aa{constructor(a,b,c){super(a,b,c);this.single=c.length===2&&c[0]===""&&c[1]===""}_createPart(){return new ba(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ba extends H{}let ca=!1;(()=>{try{const a={get capture(){return ca=!0,!1}};window.addEventListener("test",a,a),window.removeEventListener("test",a,a)}catch(a){}})();class sa{constructor(a,b,c){this.value=void 0,this.__pendingValue=void 0,this.element=a,this.eventName=b,this.eventContext=c,this.__boundHandleEvent=d=>this.handleEvent(d)}setValue(a){this.__pendingValue=a}commit(){for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const a=this.__pendingValue,b=this.value,c=a==null||b!=null&&(a.capture!==b.capture||a.once!==b.once||a.passive!==b.passive),d=a!=null&&(b==null||c);c&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),d&&(this.__options=ta(a),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=a,this.__pendingValue=m}handleEvent(a){typeof this.value==="function"?this.value.call(this.eventContext||this.element,a):this.value.handleEvent(a)}}const ta=a=>a&&(ca?{capture:a.capture,passive:a.passive,once:a.once}:a.capture);/**
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
 */function ua(a){let b=z.get(a.type);b===void 0&&(b={stringsArray:new WeakMap(),keyString:new Map()},z.set(a.type,b));let c=b.stringsArray.get(a.strings);if(c!==void 0)return c;const d=a.strings.join(o);return c=b.keyString.get(d),c===void 0&&(c=new U(a,a.getTemplateElement()),b.keyString.set(d,c)),b.stringsArray.set(a.strings,c),c}const z=new Map();/**
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
 */const t=new WeakMap(),va=(a,b,c)=>{let d=t.get(b);d===void 0&&(C(b,b.firstChild),t.set(b,d=new I(Object.assign({templateFactory:ua},c))),d.appendInto(b)),d.setValue(a),d.commit()};/**
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
 */class wa{handleAttributeExpressions(a,b,c,d){const e=b[0];if(e==="."){const f=new ra(a,b.slice(1),c);return f.parts}if(e==="@")return[new sa(a,b.slice(1),d.eventContext)];if(e==="?")return[new qa(a,b.slice(1),c)];const g=new aa(a,b,c);return g.parts}handleTextExpression(a){return new I(a)}}const xa=new wa();/**
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
 */typeof window!=="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const ya=(a,...b)=>new _(a,b,"html",xa);/**
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
 */const da=(a,b)=>`${a}--${b}`;let A=!0;typeof window.ShadyCSS==="undefined"?A=!1:typeof window.ShadyCSS.prepareTemplateDom==="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),A=!1);const za=a=>b=>{const c=da(b.type,a);let d=z.get(c);d===void 0&&(d={stringsArray:new WeakMap(),keyString:new Map()},z.set(c,d));let e=d.stringsArray.get(b.strings);if(e!==void 0)return e;const g=b.strings.join(o);e=d.keyString.get(g);if(e===void 0){const f=b.getTemplateElement();A&&window.ShadyCSS.prepareTemplateDom(f,a),e=new U(b,f),d.keyString.set(g,e)}return d.stringsArray.set(b.strings,e),e},Aa=["html","svg"],Ba=a=>{Aa.forEach(b=>{const c=z.get(da(b,a));c!==void 0&&c.keyString.forEach(d=>{const{element:{content:e}}=d,g=new Set();Array.from(e.querySelectorAll("style")).forEach(f=>{g.add(f)}),X(d,g)})})},ea=new Set(),Ca=(a,b,c)=>{ea.add(a);const d=c?c.element:document.createElement("template"),e=b.querySelectorAll("style"),{length:g}=e;if(g===0){window.ShadyCSS.prepareTemplateStyles(d,a);return}const f=document.createElement("style");for(let l=0;l<g;l++){const h=e[l];h.parentNode.removeChild(h),f.textContent+=h.textContent}Ba(a);const i=d.content;c?na(c,f,i.firstChild):i.insertBefore(f,i.firstChild),window.ShadyCSS.prepareTemplateStyles(d,a);const k=i.querySelector("style");if(window.ShadyCSS.nativeShadow&&k!==null)b.insertBefore(k.cloneNode(!0),b.firstChild);else if(c){i.insertBefore(f,i.firstChild);const l=new Set();l.add(f),X(c,l)}},Da=(a,b,c)=>{if(!c||typeof c!=="object"||!c.scopeName)throw new Error("The `scopeName` option is required.");const d=c.scopeName,e=t.has(b),g=A&&b.nodeType===11&&!!b.host,f=g&&!ea.has(d),i=f?document.createDocumentFragment():b;va(a,i,Object.assign({templateFactory:za(d)},c));if(f){const k=t.get(i);t.delete(i);const l=k.value instanceof F?k.value.template:void 0;Ca(d,i,l),C(b,b.firstChild),b.appendChild(i),t.set(b,k)}!e&&g&&window.ShadyCSS.styleElement(b.host)};/**
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
 */var fa;window.JSCompiler_renameProperty=(a,b)=>a;const J={toAttribute(a,b){switch(b){case Boolean:return a?"":null;case Object:case Array:return a==null?a:JSON.stringify(a)}return a},fromAttribute(a,b){switch(b){case Boolean:return a!==null;case Number:return a===null?null:Number(a);case Object:case Array:return JSON.parse(a)}return a}},ga=(a,b)=>b!==a&&(b===b||a===a),K={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:ga},L=1,M=1<<2,N=1<<3,O=1<<4,P="finalized";class ha extends HTMLElement{constructor(){super();this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(a=>this._enableUpdatingResolver=a),this._changedProperties=new Map(),this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const a=[];return this._classProperties.forEach((b,c)=>{const d=this._attributeNameForProperty(c,b);d!==void 0&&(this._attributeToPropertyMap.set(d,c),a.push(d))}),a}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map();const a=Object.getPrototypeOf(this)._classProperties;a!==void 0&&a.forEach((b,c)=>this._classProperties.set(c,b))}}static createProperty(a,b=K){this._ensureClassProperties(),this._classProperties.set(a,b);if(b.noAccessor||this.prototype.hasOwnProperty(a))return;const c=typeof a==="symbol"?Symbol():`__${a}`,d=this.getPropertyDescriptor(a,c,b);d!==void 0&&Object.defineProperty(this.prototype,a,d)}static getPropertyDescriptor(a,b,c){return{get(){return this[b]},set(d){const e=this[a];this[b]=d,this._requestUpdate(a,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this._classProperties&&this._classProperties.get(a)||K}static finalize(){const a=Object.getPrototypeOf(this);a.hasOwnProperty(P)||a.finalize(),this[P]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map();if(this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const b=this.properties,c=[...Object.getOwnPropertyNames(b),...typeof Object.getOwnPropertySymbols==="function"?Object.getOwnPropertySymbols(b):[]];for(const d of c)this.createProperty(d,b[d])}}static _attributeNameForProperty(a,b){const c=b.attribute;return c===!1?void 0:typeof c==="string"?c:typeof a==="string"?a.toLowerCase():void 0}static _valueHasChanged(a,b,c=ga){return c(a,b)}static _propertyValueFromAttribute(a,b){const c=b.type,d=b.converter||J,e=typeof d==="function"?d:d.fromAttribute;return e?e(a,c):a}static _propertyValueToAttribute(a,b){if(b.reflect===void 0)return;const c=b.type,d=b.converter,e=d&&d.toAttribute||J.toAttribute;return e(a,c)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((a,b)=>{if(this.hasOwnProperty(b)){const c=this[b];delete this[b],this._instanceProperties||(this._instanceProperties=new Map()),this._instanceProperties.set(b,c)}})}_applyInstanceProperties(){this._instanceProperties.forEach((a,b)=>this[b]=a),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(a,b,c){b!==c&&this._attributeToProperty(a,c)}_propertyToAttribute(a,b,c=K){const d=this.constructor,e=d._attributeNameForProperty(a,c);if(e!==void 0){const g=d._propertyValueToAttribute(b,c);if(g===void 0)return;this._updateState=this._updateState|N,g==null?this.removeAttribute(e):this.setAttribute(e,g),this._updateState=this._updateState&~N}}_attributeToProperty(a,b){if(this._updateState&N)return;const c=this.constructor,d=c._attributeToPropertyMap.get(a);if(d!==void 0){const e=c.getPropertyOptions(d);this._updateState=this._updateState|O,this[d]=c._propertyValueFromAttribute(b,e),this._updateState=this._updateState&~O}}_requestUpdate(a,b){let c=!0;if(a!==void 0){const d=this.constructor,e=d.getPropertyOptions(a);d._valueHasChanged(this[a],b,e.hasChanged)?(this._changedProperties.has(a)||this._changedProperties.set(a,b),e.reflect===!0&&!(this._updateState&O)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map()),this._reflectingProperties.set(a,e))):c=!1}!this._hasRequestedUpdate&&c&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(a,b){return this._requestUpdate(a,b),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|M;try{await this._updatePromise}catch(b){}const a=this.performUpdate();return a!=null&&await a,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&M}get hasUpdated(){return this._updateState&L}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let a=!1;const b=this._changedProperties;try{a=this.shouldUpdate(b),a?this.update(b):this._markUpdated()}catch(c){throw a=!1,this._markUpdated(),c}a&&(this._updateState&L||(this._updateState=this._updateState|L,this.firstUpdated(b)),this.updated(b))}_markUpdated(){this._changedProperties=new Map(),this._updateState=this._updateState&~M}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(a){return!0}update(a){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((b,c)=>this._propertyToAttribute(c,this[c],b)),this._reflectingProperties=void 0),this._markUpdated()}updated(a){}firstUpdated(a){}}fa=P,ha[fa]=!0;/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ia="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ja=Symbol();class ka{constructor(a,b){if(b!==ja)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a}get styleSheet(){return this._styleSheet===void 0&&(ia?(this._styleSheet=new CSSStyleSheet(),this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Ea=a=>{if(a instanceof ka)return a.cssText;{if(typeof a==="number")return a;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${a}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)}},Fa=(a,...b)=>{const c=b.reduce((d,e,g)=>d+Ea(e)+a[g+1],a[0]);return new ka(c,ja)};/**
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const la={};class Q extends ha{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const a=this.getStyles();if(a===void 0)this._styles=[];else if(Array.isArray(a)){const b=(e,g)=>e.reduceRight((f,i)=>Array.isArray(i)?b(i,f):(f.add(i),f),g),c=b(a,new Set()),d=[];c.forEach(e=>d.unshift(e)),this._styles=d}else this._styles=[a]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const a=this.constructor._styles;if(a.length===0)return;window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(a.map(b=>b.cssText),this.localName):ia?this.renderRoot.adoptedStyleSheets=a.map(b=>b.styleSheet):this._needsShimAdoptedStyleSheets=!0}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(a){const b=this.render();super.update(a),b!==la&&this.constructor.render(b,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(c=>{const d=document.createElement("style");d.textContent=c.cssText,this.renderRoot.appendChild(d)}))}render(){return la}}Q.finalized=!0,Q.render=Da;export{H as A,Q as L,ba as P,Fa as c,oa as d,ya as h};
