function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}/**
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
 */const ya="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,V=(a,b,c=null)=>{for(;b!==c;){const d=b.nextSibling;a.removeChild(b),b=d}},B=`{{lit-${String(Math.random()).slice(2)}}}`,za=`<!--${B}-->`,Aa=new RegExp(`${B}|${za}`);class Ba{constructor(a,b){this.parts=[],this.element=b;const c=[],d=[],e=document.createTreeWalker(b.content,133,null,!1);let f=0,g=-1,h=0;const{strings:m,values:{length:l}}=a;for(;h<l;){const i=e.nextNode();if(null!==i){if(g++,1===i.nodeType){if(i.hasAttributes()){const j=i.attributes,{length:n}=j;let o=0;for(let p=0;p<n;p++)Ca(j[p].name,"$lit$")&&o++;for(;o-- >0;){const p=m[h],q=W.exec(p)[2],u=q.toLowerCase()+"$lit$",r=i.getAttribute(u);i.removeAttribute(u);const A=r.split(Aa);this.parts.push({type:"attribute",index:g,name:q,strings:A}),h+=A.length-1}}"TEMPLATE"===i.tagName&&(d.push(i),e.currentNode=i.content)}else if(3===i.nodeType){const j=i.data;if(j.indexOf(B)>=0){const n=i.parentNode,o=j.split(Aa),p=o.length-1;for(let q=0;q<p;q++){let u,r=o[q];if(""===r)u=D();else{const A=W.exec(r);null!==A&&Ca(A[2],"$lit$")&&(r=r.slice(0,A.index)+A[1]+A[2].slice(0,-"$lit$".length)+A[3]),u=document.createTextNode(r)}n.insertBefore(u,i),this.parts.push({type:"node",index:++g})}""===o[p]?(n.insertBefore(D(),i),c.push(i)):i.data=o[p],h+=p}}else if(8===i.nodeType)if(i.data===B){const j=i.parentNode;null!==i.previousSibling&&g!==f||(g++,j.insertBefore(D(),i)),f=g,this.parts.push({type:"node",index:g}),null===i.nextSibling?i.data="":(c.push(i),g--),h++}else{let j=-1;for(;-1!==(j=i.data.indexOf(B,j+1));)this.parts.push({type:"node",index:-1}),h++}}else e.currentNode=d.pop()}for(const i of c)i.parentNode.removeChild(i)}}const Ca=(a,b)=>{const c=a.length-b.length;return c>=0&&a.slice(c)===b},Da=a=>-1!==a.index,D=()=>document.createComment(""),W=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,Ea=new WeakMap(),Fa=a=>(...b)=>{const c=a(...b);return Ea.set(c,!0),c},J=a=>"function"==typeof a&&Ea.has(a),v={},Ga={};/**
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
 */class X{constructor(a,b,c){this.__parts=[],this.template=a,this.processor=b,this.options=c}update(a){let b=0;for(const c of this.__parts)void 0!==c&&c.setValue(a[b]),b++;for(const c of this.__parts)void 0!==c&&c.commit()}_clone(){const a=ya?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),b=[],c=this.template.parts,d=document.createTreeWalker(a,133,null,!1);let e,f=0,g=0,h=d.nextNode();for(;f<c.length;)if(e=c[f],Da(e)){for(;g<e.index;)g++,"TEMPLATE"===h.nodeName&&(b.push(h),d.currentNode=h.content),null===(h=d.nextNode())&&(d.currentNode=b.pop(),h=d.nextNode());if("node"===e.type){const m=this.processor.handleTextExpression(this.options);m.insertAfterNode(h.previousSibling),this.__parts.push(m)}else this.__parts.push(...this.processor.handleAttributeExpressions(h,e.name,e.strings,this.options));f++}else this.__parts.push(void 0),f++;return ya&&(document.adoptNode(a),customElements.upgrade(a)),a}}/**
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
 */const fb=` ${B} `;class Ha{constructor(a,b,c,d){this.strings=a,this.values=b,this.type=c,this.processor=d}getHTML(){const a=this.strings.length-1;let b="",c=!1;for(let d=0;d<a;d++){const e=this.strings[d],f=e.lastIndexOf("<!--");c=(f>-1||c)&&-1===e.indexOf("-->",f+1);const g=W.exec(e);b+=null===g?e+(c?fb:za):e.substr(0,g.index)+g[1]+g[2]+"$lit$"+g[3]+B}return b+=this.strings[a],b}getTemplateElement(){const a=document.createElement("template");return a.innerHTML=this.getHTML(),a}}/**
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
 */const Y=a=>null===a||!("object"==typeof a||"function"==typeof a),Ia=a=>Array.isArray(a)||!(!a||!a[Symbol.iterator]);class Ja{constructor(a,b,c){this.dirty=!0,this.element=a,this.name=b,this.strings=c,this.parts=[];for(let d=0;d<c.length-1;d++)this.parts[d]=this._createPart()}_createPart(){return new O(this)}_getValue(){const a=this.strings,b=a.length-1;let c="";for(let d=0;d<b;d++){c+=a[d];const e=this.parts[d];if(void 0!==e){const f=e.value;if(Y(f)||!Ia(f))c+="string"==typeof f?f:String(f);else for(const g of f)c+="string"==typeof g?g:String(g)}}return c+=a[b],c}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class O{constructor(a){this.value=void 0,this.committer=a}setValue(a){a===v||Y(a)&&a===this.value||(this.value=a,J(a)||(this.committer.dirty=!0))}commit(){for(;J(this.value);){const a=this.value;this.value=v,a(this)}this.value!==v&&this.committer.commit()}}class Z{constructor(a){this.value=void 0,this.__pendingValue=void 0,this.options=a}appendInto(a){this.startNode=a.appendChild(D()),this.endNode=a.appendChild(D())}insertAfterNode(a){this.startNode=a,this.endNode=a.nextSibling}appendIntoPart(a){a.__insert(this.startNode=D()),a.__insert(this.endNode=D())}insertAfterPart(a){a.__insert(this.startNode=D()),this.endNode=a.endNode,a.endNode=this.startNode}setValue(a){this.__pendingValue=a}commit(){if(null===this.startNode.parentNode)return;for(;J(this.__pendingValue);){const b=this.__pendingValue;this.__pendingValue=v,b(this)}const a=this.__pendingValue;a!==v&&(Y(a)?a!==this.value&&this.__commitText(a):a instanceof Ha?this.__commitTemplateResult(a):a instanceof Node?this.__commitNode(a):Ia(a)?this.__commitIterable(a):a===Ga?(this.value=Ga,this.clear()):this.__commitText(a))}__insert(a){this.endNode.parentNode.insertBefore(a,this.endNode)}__commitNode(a){this.value!==a&&(this.clear(),this.__insert(a),this.value=a)}__commitText(a){const b=this.startNode.nextSibling,c="string"==typeof(a=null==a?"":a)?a:String(a);b===this.endNode.previousSibling&&3===b.nodeType?b.data=c:this.__commitNode(document.createTextNode(c)),this.value=a}__commitTemplateResult(a){const b=this.options.templateFactory(a);if(this.value instanceof X&&this.value.template===b)this.value.update(a.values);else{const c=new X(b,a.processor,this.options),d=c._clone();c.update(a.values),this.__commitNode(d),this.value=c}}__commitIterable(a){Array.isArray(this.value)||(this.value=[],this.clear());const b=this.value;let c,d=0;for(const e of a)c=b[d],void 0===c&&(c=new Z(this.options),b.push(c),0===d?c.appendIntoPart(this):c.insertAfterPart(b[d-1])),c.setValue(e),c.commit(),d++;d<b.length&&(b.length=d,this.clear(c&&c.endNode))}clear(a=this.startNode){V(this.startNode.parentNode,a.nextSibling,this.endNode)}}class gb{constructor(a,b,c){if(this.value=void 0,this.__pendingValue=void 0,2!==c.length||""!==c[0]||""!==c[1])throw new Error("Boolean attributes can only contain a single expression");this.element=a,this.name=b,this.strings=c}setValue(a){this.__pendingValue=a}commit(){for(;J(this.__pendingValue);){const b=this.__pendingValue;this.__pendingValue=v,b(this)}if(this.__pendingValue===v)return;const a=!!this.__pendingValue;this.value!==a&&(a?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=a),this.__pendingValue=v}}class hb extends Ja{constructor(a,b,c){super(a,b,c),this.single=2===c.length&&""===c[0]&&""===c[1]}_createPart(){return new _(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class _ extends O{}let Ka=!1;(()=>{try{const a={get capture(){return Ka=!0,!1}};window.addEventListener("test",a,a),window.removeEventListener("test",a,a)}catch(a){}})();class ib{constructor(a,b,c){this.value=void 0,this.__pendingValue=void 0,this.element=a,this.eventName=b,this.eventContext=c,this.__boundHandleEvent=d=>this.handleEvent(d)}setValue(a){this.__pendingValue=a}commit(){for(;J(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const a=this.__pendingValue,b=this.value,c=null==a||null!=b&&(a.capture!==b.capture||a.once!==b.once||a.passive!==b.passive),d=null!=a&&(null==b||c);c&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),d&&(this.__options=jb(a),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=a,this.__pendingValue=v}handleEvent(a){"function"==typeof this.value?this.value.call(this.eventContext||this.element,a):this.value.handleEvent(a)}}const jb=a=>a&&(Ka?{capture:a.capture,passive:a.passive,once:a.once}:a.capture);function kb(a){let b=K.get(a.type);void 0===b&&(b={stringsArray:new WeakMap(),keyString:new Map()},K.set(a.type,b));let c=b.stringsArray.get(a.strings);if(void 0!==c)return c;const d=a.strings.join(B);return c=b.keyString.get(d),void 0===c&&(c=new Ba(a,a.getTemplateElement()),b.keyString.set(d,c)),b.stringsArray.set(a.strings,c),c}const K=new Map(),F=new WeakMap();/**
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
 */const lb=new class{handleAttributeExpressions(a,b,c,d){const e=b[0];return"."===e?new hb(a,b.slice(1),c).parts:"@"===e?[new ib(a,b.slice(1),d.eventContext)]:"?"===e?[new gb(a,b.slice(1),c)]:new Ja(a,b,c).parts}handleTextExpression(a){return new Z(a)}}();/**
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const C=(a,...b)=>new Ha(a,b,"html",lb);function La(a,b){const{element:{content:c},parts:d}=a,e=document.createTreeWalker(c,133,null,!1);let f=L(d),g=d[f],h=-1,m=0;const l=[];let i=null;for(;e.nextNode();){h++;const j=e.currentNode;for(j.previousSibling===i&&(i=null),b.has(j)&&(l.push(j),null===i&&(i=j)),null!==i&&m++;void 0!==g&&g.index===h;)g.index=null!==i?-1:g.index-m,f=L(d,f),g=d[f]}l.forEach(j=>j.parentNode.removeChild(j))}const mb=a=>{let b=11===a.nodeType?0:1;const c=document.createTreeWalker(a,133,null,!1);for(;c.nextNode();)b++;return b},L=(a,b=-1)=>{for(let c=b+1;c<a.length;c++){const d=a[c];if(Da(d))return c}return-1};/**
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
 */const Ma=(a,b)=>`${a}--${b}`;let P=!0;void 0===window.ShadyCSS?P=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),P=!1);const nb=a=>b=>{const c=Ma(b.type,a);let d=K.get(c);void 0===d&&(d={stringsArray:new WeakMap(),keyString:new Map()},K.set(c,d));let e=d.stringsArray.get(b.strings);if(void 0!==e)return e;const f=b.strings.join(B);if(e=d.keyString.get(f),void 0===e){const g=b.getTemplateElement();P&&window.ShadyCSS.prepareTemplateDom(g,a),e=new Ba(b,g),d.keyString.set(f,e)}return d.stringsArray.set(b.strings,e),e},ob=["html","svg"],Na=new Set(),pb=(a,b,c)=>{Na.add(a);const d=c?c.element:document.createElement("template"),e=b.querySelectorAll("style"),{length:f}=e;if(0===f)return void window.ShadyCSS.prepareTemplateStyles(d,a);const g=document.createElement("style");for(let l=0;l<f;l++){const i=e[l];i.parentNode.removeChild(i),g.textContent+=i.textContent}(l=>{ob.forEach(i=>{const j=K.get(Ma(i,l));void 0!==j&&j.keyString.forEach(n=>{const{element:{content:o}}=n,p=new Set();Array.from(o.querySelectorAll("style")).forEach(q=>{p.add(q)}),La(n,p)})})})(a);const h=d.content;c?function(l,i,j=null){const{element:{content:n},parts:o}=l;if(null==j)return void n.appendChild(i);const p=document.createTreeWalker(n,133,null,!1);let q=L(o),u=0,r=-1;for(;p.nextNode();)for(r++,p.currentNode===j&&(u=mb(i),j.parentNode.insertBefore(i,j));-1!==q&&o[q].index===r;){if(u>0){for(;-1!==q;)o[q].index+=u,q=L(o,q);return}q=L(o,q)}}(c,g,h.firstChild):h.insertBefore(g,h.firstChild),window.ShadyCSS.prepareTemplateStyles(d,a);const m=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==m)b.insertBefore(m.cloneNode(!0),b.firstChild);else if(c){h.insertBefore(g,h.firstChild);const l=new Set();l.add(g),La(c,l)}};window.JSCompiler_renameProperty=(a,b)=>a;const $={toAttribute(a,b){switch(b){case Boolean:return a?"":null;case Object:case Array:return null==a?a:JSON.stringify(a)}return a},fromAttribute(a,b){switch(b){case Boolean:return null!==a;case Number:return null===a?null:Number(a);case Object:case Array:return JSON.parse(a)}return a}},Oa=(a,b)=>b!==a&&(b==b||a==a),aa={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:Oa};class Pa extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(a=>this._enableUpdatingResolver=a),this._changedProperties=new Map(),this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const a=[];return this._classProperties.forEach((b,c)=>{const d=this._attributeNameForProperty(c,b);void 0!==d&&(this._attributeToPropertyMap.set(d,c),a.push(d))}),a}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map();const a=Object.getPrototypeOf(this)._classProperties;void 0!==a&&a.forEach((b,c)=>this._classProperties.set(c,b))}}static createProperty(a,b=aa){if(this._ensureClassProperties(),this._classProperties.set(a,b),b.noAccessor||this.prototype.hasOwnProperty(a))return;const c="symbol"==typeof a?Symbol():"__"+a,d=this.getPropertyDescriptor(a,c,b);void 0!==d&&Object.defineProperty(this.prototype,a,d)}static getPropertyDescriptor(a,b,c){return{get(){return this[b]},set(d){const e=this[a];this[b]=d,this._requestUpdate(a,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this._classProperties&&this._classProperties.get(a)||aa}static finalize(){const a=Object.getPrototypeOf(this);if(a.hasOwnProperty("finalized")||a.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map(),this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const b=this.properties,c=[...Object.getOwnPropertyNames(b),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(b):[]];for(const d of c)this.createProperty(d,b[d])}}static _attributeNameForProperty(a,b){const c=b.attribute;return!1===c?void 0:"string"==typeof c?c:"string"==typeof a?a.toLowerCase():void 0}static _valueHasChanged(a,b,c=Oa){return c(a,b)}static _propertyValueFromAttribute(a,b){const c=b.type,d=b.converter||$,e="function"==typeof d?d:d.fromAttribute;return e?e(a,c):a}static _propertyValueToAttribute(a,b){if(void 0===b.reflect)return;const c=b.type,d=b.converter;return(d&&d.toAttribute||$.toAttribute)(a,c)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((a,b)=>{if(this.hasOwnProperty(b)){const c=this[b];delete this[b],this._instanceProperties||(this._instanceProperties=new Map()),this._instanceProperties.set(b,c)}})}_applyInstanceProperties(){this._instanceProperties.forEach((a,b)=>this[b]=a),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(a,b,c){b!==c&&this._attributeToProperty(a,c)}_propertyToAttribute(a,b,c=aa){const d=this.constructor,e=d._attributeNameForProperty(a,c);if(void 0!==e){const f=d._propertyValueToAttribute(b,c);if(void 0===f)return;this._updateState=8|this._updateState,null==f?this.removeAttribute(e):this.setAttribute(e,f),this._updateState=-9&this._updateState}}_attributeToProperty(a,b){if(8&this._updateState)return;const c=this.constructor,d=c._attributeToPropertyMap.get(a);if(void 0!==d){const e=c.getPropertyOptions(d);this._updateState=16|this._updateState,this[d]=c._propertyValueFromAttribute(b,e),this._updateState=-17&this._updateState}}_requestUpdate(a,b){let c=!0;if(void 0!==a){const d=this.constructor,e=d.getPropertyOptions(a);d._valueHasChanged(this[a],b,e.hasChanged)?(this._changedProperties.has(a)||this._changedProperties.set(a,b),!0!==e.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map()),this._reflectingProperties.set(a,e))):c=!1}!this._hasRequestedUpdate&&c&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(a,b){return this._requestUpdate(a,b),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(b){}const a=this.performUpdate();return null!=a&&await a,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let a=!1;const b=this._changedProperties;try{a=this.shouldUpdate(b),a?this.update(b):this._markUpdated()}catch(c){throw a=!1,this._markUpdated(),c}a&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(b)),this.updated(b))}_markUpdated(){this._changedProperties=new Map(),this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(a){return!0}update(a){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((b,c)=>this._propertyToAttribute(c,this[c],b)),this._reflectingProperties=void 0),this._markUpdated()}updated(a){}firstUpdated(a){}}Pa.finalized=!0;/**
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
 */const qb=(a,b)=>"method"===b.kind&&b.descriptor&&!("value"in b.descriptor)?Object.assign(Object.assign({},b),{finisher(c){c.createProperty(b.key,a)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof b.initializer&&(this[b.key]=b.initializer.call(this))},finisher(c){c.createProperty(b.key,a)}};function w(a){return(b,c)=>void 0!==c?((d,e,f)=>{e.constructor.createProperty(f,d)})(a,b,c):qb(a,b)}function Q(a){return(b,c)=>{const d={get(){return this.renderRoot.querySelector(a)},enumerable:!0,configurable:!0};return void 0!==c?rb(d,b,c):sb(d,b)}}const rb=(a,b,c)=>{Object.defineProperty(b,c,a)},sb=(a,b)=>({kind:"method",placement:"prototype",key:b.key,descriptor:a});/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Qa="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ra=Symbol();class Sa{constructor(a,b){if(b!==Ra)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a}get styleSheet(){return void 0===this._styleSheet&&(Qa?(this._styleSheet=new CSSStyleSheet(),this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ba=(a,...b)=>{const c=b.reduce((d,e,f)=>d+(g=>{if(g instanceof Sa)return g.cssText;if("number"==typeof g)return g;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${g}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(e)+a[f+1],a[0]);return new Sa(c,Ra)};/**
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Ta={};class M extends Pa{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const a=this.getStyles();if(void 0===a)this._styles=[];else if(Array.isArray(a)){const b=(e,f)=>e.reduceRight((g,h)=>Array.isArray(h)?b(h,g):(g.add(h),g),f),c=b(a,new Set()),d=[];c.forEach(e=>d.unshift(e)),this._styles=d}else this._styles=[a]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const a=this.constructor._styles;0!==a.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Qa?this.renderRoot.adoptedStyleSheets=a.map(b=>b.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(a.map(b=>b.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(a){const b=this.render();super.update(a),b!==Ta&&this.constructor.render(b,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(c=>{const d=document.createElement("style");d.textContent=c.cssText,this.renderRoot.appendChild(d)}))}render(){return Ta}}M.finalized=!0,M.render=(a,b,c)=>{if(!c||"object"!=typeof c||!c.scopeName)throw new Error("The `scopeName` option is required.");const d=c.scopeName,e=F.has(b),f=P&&11===b.nodeType&&!!b.host,g=f&&!Na.has(d),h=g?document.createDocumentFragment():b;if(((m,l,i)=>{let j=F.get(l);void 0===j&&(V(l,l.firstChild),F.set(l,j=new Z(Object.assign({templateFactory:kb},i))),j.appendInto(l)),j.setValue(m),j.commit()})(a,h,Object.assign({templateFactory:nb(d)},c)),g){const m=F.get(h);F.delete(h);const l=m.value instanceof X?m.value.template:void 0;pb(d,h,l),V(b,b.firstChild),b.appendChild(h),F.set(b,m)}!e&&f&&window.ShadyCSS.styleElement(b.host)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ua=function(a,b){return(Ua=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var e in d)d.hasOwnProperty(e)&&(c[e]=d[e])})(a,b)},ca=function(){return(ca=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};function s(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g;/**
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
 */}var tb=function(){function a(b){void 0===b&&(b={}),this.adapter=b}return Object.defineProperty(a,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),a.prototype.init=function(){},a.prototype.destroy=function(){},a}();/**
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
*/const Va=()=>{},ub={get passive(){return!1}};document.addEventListener("x",Va,ub),document.removeEventListener("x",Va);/**
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
*/class vb extends M{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}/**
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
 */class wb{constructor(a){this.classes=new Set(),this.changed=!1,this.element=a;const b=(a.getAttribute("class")||"").split(/\s+/);for(const c of b)this.classes.add(c)}add(a){this.classes.add(a),this.changed=!0}remove(a){this.classes.delete(a),this.changed=!0}commit(){if(this.changed){let a="";this.classes.forEach(b=>a+=b+" "),this.element.setAttribute("class",a)}}}const Wa=new WeakMap(),xb=Fa(a=>b=>{if(!(b instanceof O)||b instanceof _||"class"!==b.committer.name||b.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:c}=b,{element:d}=c;let e=Wa.get(b);void 0===e&&(d.setAttribute("class",c.strings.join(" ")),Wa.set(b,e=new Set()));const f=d.classList||new wb(d);e.forEach(g=>{g in a||(f.remove(g),e.delete(g))});for(const g in a){const h=a[g];h!=e.has(g)&&(h?(f.add(g),e.add(g)):(f.remove(g),e.delete(g)))}"function"==typeof f.commit&&f.commit()}),Xa=new WeakMap(),da=Fa(a=>b=>{if(!(b instanceof O)||b instanceof _||"style"!==b.committer.name||b.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:c}=b,{style:d}=c.element;let e=Xa.get(b);void 0===e&&(d.cssText=c.strings.join(" "),Xa.set(b,e=new Set())),e.forEach(f=>{f in a||(e.delete(f),-1===f.indexOf("-")?d[f]=null:d.removeProperty(f))});for(const f in a)e.add(f),-1===f.indexOf("-")?d[f]=a[f]:d.setProperty(f,a[f])});/**
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
*/class yb extends vb{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(a){this.formElement&&this.formElement.setAttribute("aria-label",a)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",a=>{this.dispatchEvent(new Event("change",a))})}}const ea=a=>(b,c)=>{if(b.constructor._observers){if(!b.constructor.hasOwnProperty("_observers")){const d=b.constructor._observers;b.constructor._observers=new Map(),d.forEach((e,f)=>b.constructor._observers.set(f,e))}}else{b.constructor._observers=new Map();const d=b.updated;b.updated=function(e){d.call(this,e),e.forEach((f,g)=>{const h=this.constructor._observers.get(g);void 0!==h&&h.call(this,this[g],f)})}}b.constructor._observers.set(c,a)};function fa(a){return void 0===a&&(a=window),!!function(b){void 0===b&&(b=window);var c=!1;try{var d={get passive(){return c=!0,!1}},e=function(){};b.document.addEventListener("test",e,d),b.document.removeEventListener("test",e,d)}catch(f){c=!1}return c}(a)&&{passive:!0}}var Ya={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},Za={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function _a(a){return Boolean(a.document)&&"function"==typeof a.document.createElement}/**
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
 */var y={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete",DISABLE_TOUCH_ACTION:"mdc-slider--disable-touch-action"},G={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},ga={PAGE_FACTOR:4},ha="undefined"!=typeof window,ia=ha&&!!window.PointerEvent,$a=ia?["pointerdown"]:["mousedown","touchstart"],ab=ia?["pointerup"]:["mouseup","touchend"],zb={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},ja="ArrowDown",R="ArrowLeft",S="ArrowRight",ka="ArrowUp",la="End",ma="Home",na="PageDown",oa="PageUp",Ab=function(a){function b(c){var d=a.call(this,ca(ca({},b.defaultAdapter),c))||this;return d.savedTabIndex_=NaN,d.active_=!1,d.inTransit_=!1,d.isDiscrete_=!1,d.hasTrackMarker_=!1,d.handlingThumbTargetEvt_=!1,d.min_=0,d.max_=100,d.step_=0,d.value_=0,d.disabled_=!1,d.preventFocusState_=!1,d.thumbContainerPointerHandler_=function(){return d.handlingThumbTargetEvt_=!0},d.interactionStartHandler_=function(e){return d.handleDown_(e)},d.keydownHandler_=function(e){return d.handleKeydown_(e)},d.focusHandler_=function(){return d.handleFocus_()},d.blurHandler_=function(){return d.handleBlur_()},d.resizeHandler_=function(){return d.layout()},d}return function(c,d){function e(){this.constructor=c}Ua(c,d),c.prototype=null===d?Object.create(d):(e.prototype=d.prototype,new e())}(b,a),Object.defineProperty(b,"cssClasses",{get:function(){return y},enumerable:!0,configurable:!0}),Object.defineProperty(b,"strings",{get:function(){return G},enumerable:!0,configurable:!0}),Object.defineProperty(b,"numbers",{get:function(){return ga},enumerable:!0,configurable:!0}),Object.defineProperty(b,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),b.prototype.init=function(){var c=this;this.isDiscrete_=this.adapter.hasClass(y.IS_DISCRETE),this.hasTrackMarker_=this.adapter.hasClass(y.HAS_TRACK_MARKER),$a.forEach(function(d){c.adapter.registerInteractionHandler(d,c.interactionStartHandler_),c.adapter.registerThumbContainerInteractionHandler(d,c.thumbContainerPointerHandler_)}),ia&&this.adapter.addClass(y.DISABLE_TOUCH_ACTION),this.adapter.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_),this.adapter.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},b.prototype.destroy=function(){var c=this;$a.forEach(function(d){c.adapter.deregisterInteractionHandler(d,c.interactionStartHandler_),c.adapter.deregisterThumbContainerInteractionHandler(d,c.thumbContainerPointerHandler_)}),this.adapter.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.deregisterResizeHandler(this.resizeHandler_)},b.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},b.prototype.layout=function(){this.rect_=this.adapter.computeBoundingRect(),this.updateUIForCurrentValue_()},b.prototype.getValue=function(){return this.value_},b.prototype.setValue=function(c){this.setValue_(c,!1)},b.prototype.getMax=function(){return this.max_},b.prototype.setMax=function(c){if(c<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=c,this.setValue_(this.value_,!1,!0),this.adapter.setAttribute(G.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},b.prototype.getMin=function(){return this.min_},b.prototype.setMin=function(c){if(c>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=c,this.setValue_(this.value_,!1,!0),this.adapter.setAttribute(G.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},b.prototype.getStep=function(){return this.step_},b.prototype.setStep=function(c){if(c<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof c||c<1)&&(c=1),this.step_=c,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},b.prototype.isDisabled=function(){return this.disabled_},b.prototype.setDisabled=function(c){this.disabled_=c,this.toggleClass_(y.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter.getTabIndex(),this.adapter.setAttribute(G.ARIA_DISABLED,"true"),this.adapter.removeAttribute("tabindex")):(this.adapter.removeAttribute(G.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter.setAttribute("tabindex",String(this.savedTabIndex_)))},b.prototype.handleDown_=function(c){var d=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var e=function(h){d.handleMove_(h)},f=zb[c.type],g=function(){d.handleUp_(),d.adapter.deregisterBodyInteractionHandler(f,e),ab.forEach(function(h){return d.adapter.deregisterBodyInteractionHandler(h,g)})};this.adapter.registerBodyInteractionHandler(f,e),ab.forEach(function(h){return d.adapter.registerBodyInteractionHandler(h,g)}),this.setValueFromEvt_(c)}},b.prototype.handleMove_=function(c){c.preventDefault(),this.setValueFromEvt_(c)},b.prototype.handleUp_=function(){this.setActive_(!1),this.adapter.notifyChange()},b.prototype.getClientX_=function(c){return c.targetTouches&&c.targetTouches.length>0?c.targetTouches[0].clientX:c.clientX},b.prototype.setValueFromEvt_=function(c){var d=this.getClientX_(c),e=this.computeValueFromClientX_(d);this.setValue_(e,!0)},b.prototype.computeValueFromClientX_=function(c){var d=this.max_,e=this.min_,f=(c-this.rect_.left)/this.rect_.width;return this.adapter.isRTL()&&(f=1-f),e+f*(d-e)},b.prototype.handleKeydown_=function(c){var d=this.getKeyId_(c),e=this.getValueForKeyId_(d);isNaN(e)||(c.preventDefault(),this.adapter.addClass(y.FOCUS),this.setValue_(e,!0),this.adapter.notifyChange())},b.prototype.getKeyId_=function(c){return c.key===R||37===c.keyCode?R:c.key===S||39===c.keyCode?S:c.key===ka||38===c.keyCode?ka:c.key===ja||40===c.keyCode?ja:c.key===ma||36===c.keyCode?ma:c.key===la||35===c.keyCode?la:c.key===oa||33===c.keyCode?oa:c.key===na||34===c.keyCode?na:""},b.prototype.getValueForKeyId_=function(c){var d=this.max_,e=this.min_,f=this.step_||(d-e)/100;switch(this.adapter.isRTL()&&(c===R||c===S)&&(f=-f),c){case R:case ja:return this.value_-f;case S:case ka:return this.value_+f;case ma:return this.min_;case la:return this.max_;case oa:return this.value_+f*ga.PAGE_FACTOR;case na:return this.value_-f*ga.PAGE_FACTOR;default:return NaN}},b.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter.addClass(y.FOCUS)},b.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter.removeClass(y.FOCUS)},b.prototype.setValue_=function(c,d,e){if(void 0===e&&(e=!1),c!==this.value_||e){var f=this.min_,g=this.max_,h=c===f||c===g;this.step_&&!h&&(c=this.quantize_(c)),c<f?c=f:c>g&&(c=g),c=c||0,this.value_=c,this.adapter.setAttribute(G.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),d&&(this.adapter.notifyInput(),this.isDiscrete_&&this.adapter.setMarkerValue(c))}},b.prototype.quantize_=function(c){return Math.round(c/this.step_)*this.step_},b.prototype.updateUIForCurrentValue_=function(){var c=this,d=this.max_,e=this.min_,f=(this.value_-e)/(d-e),g=f*this.rect_.width;this.adapter.isRTL()&&(g=this.rect_.width-g);var h=ha?function(i,j){if(_a(i)&&j in Ya){var n=i.document.createElement("div"),o=Ya[j],p=o.standard,q=o.prefixed;return p in n.style?p:q}return j}(window,"transform"):"transform",m=ha?function(i,j){if(_a(i)&&j in Za){var n=i.document.createElement("div"),o=Za[j],p=o.standard,q=o.prefixed;return o.cssProperty in n.style?p:q}return j}(window,"transitionend"):"transitionend";if(this.inTransit_){var l=function(){c.setInTransit_(!1),c.adapter.deregisterThumbContainerInteractionHandler(m,l)};this.adapter.registerThumbContainerInteractionHandler(m,l)}requestAnimationFrame(function(){c.adapter.setThumbContainerStyleProperty(h,"translateX("+g+"px) translateX(-50%)"),c.adapter.setTrackStyleProperty(h,"scaleX("+f+")")})},b.prototype.setActive_=function(c){this.active_=c,this.toggleClass_(y.ACTIVE,this.active_)},b.prototype.setInTransit_=function(c){this.inTransit_=c,this.toggleClass_(y.IN_TRANSIT,this.inTransit_)},b.prototype.toggleClass_=function(c,d){d?this.adapter.addClass(c):this.adapter.removeClass(c)},b}(tb);class t extends yb{constructor(){super(...arguments),this.mdcFoundationClass=Ab,this.min=0,this.max=100,this._value=0,this.step=0,this.disabled=!1,this.pin=!1,this.markers=!1,this.pinMarkerText="",this.trackMarkerContainerStyles={},this.thumbContainerStyles={},this.trackStyles={},this.isFoundationDestroyed=!1}set value(a){this.mdcFoundation&&this.mdcFoundation.setValue(a),this._value=a,this.requestUpdate("value",a)}get value(){return this.mdcFoundation?this.mdcFoundation.getValue():this._value}render(){const a=0!==this.step,b={"mdc-slider--discrete":a,"mdc-slider--display-markers":this.markers&&a};let c="";a&&this.markers&&(c=C`
        <div
            class="mdc-slider__track-marker-container"
            style="${da(this.trackMarkerContainerStyles)}">
        </div>`);let d="";return this.pin&&(d=C`
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`),C`
      <div class="mdc-slider ${xb(b)}"
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
              style="${da(this.trackStyles)}">
          </div>
          ${c}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${da(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${d}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`}connectedCallback(){super.connectedCallback(),this.mdcRoot&&this.isFoundationDestroyed&&(this.isFoundationDestroyed=!1,this.mdcFoundation.init())}updated(a){const b=a.has("min"),c=a.has("max");b&&c?this.max<this.mdcFoundation.getMin()?(this.mdcFoundation.setMin(this.min),this.mdcFoundation.setMax(this.max)):(this.mdcFoundation.setMax(this.max),this.mdcFoundation.setMin(this.min)):b?this.mdcFoundation.setMin(this.min):c&&this.mdcFoundation.setMax(this.max),super.updated(a)}disconnectedCallback(){super.disconnectedCallback(),this.isFoundationDestroyed=!0,this.mdcFoundation.destroy()}createAdapter(){return Object.assign(Object.assign({},(a=this.mdcRoot,{addClass:b=>{a.classList.add(b)},removeClass:b=>{a.classList.remove(b)},hasClass:b=>a.classList.contains(b)})),{getAttribute:b=>this.mdcRoot.getAttribute(b),setAttribute:(b,c)=>this.mdcRoot.setAttribute(b,c),removeAttribute:b=>this.mdcRoot.removeAttribute(b),computeBoundingRect:()=>{const b=this.mdcRoot.getBoundingClientRect();return{bottom:b.bottom,height:b.height,left:b.left+window.pageXOffset,right:b.right,top:b.top,width:b.width}},getTabIndex:()=>this.mdcRoot.tabIndex,registerInteractionHandler:(b,c)=>{const d="touchstart"===b?fa():void 0;this.mdcRoot.addEventListener(b,c,d)},deregisterInteractionHandler:(b,c)=>this.mdcRoot.removeEventListener(b,c),registerThumbContainerInteractionHandler:(b,c)=>{const d="touchstart"===b?fa():void 0;this.thumbContainer.addEventListener(b,c,d)},deregisterThumbContainerInteractionHandler:(b,c)=>this.thumbContainer.removeEventListener(b,c),registerBodyInteractionHandler:(b,c)=>document.body.addEventListener(b,c),deregisterBodyInteractionHandler:(b,c)=>document.body.removeEventListener(b,c),registerResizeHandler:b=>window.addEventListener("resize",b,fa()),deregisterResizeHandler:b=>window.removeEventListener("resize",b),notifyInput:()=>{const b=this.mdcFoundation.getValue();b!==this._value&&(this.value=b,this.dispatchEvent(new CustomEvent("input",{detail:this,composed:!0,bubbles:!0,cancelable:!0})))},notifyChange:()=>{this.dispatchEvent(new CustomEvent("change",{detail:this,composed:!0,bubbles:!0,cancelable:!0}))},setThumbContainerStyleProperty:(b,c)=>{this.thumbContainerStyles[b]=c,this.requestUpdate()},setTrackStyleProperty:(b,c)=>{this.trackStyles[b]=c,this.requestUpdate()},setMarkerValue:b=>this.pinMarkerText=b.toLocaleString(),setTrackMarkers:(b,c,d)=>{const e=b.toLocaleString(),f=`linear-gradient(to right, currentColor 2px, transparent 0) 0 center / calc((100% - 2px) / ${`((${c.toLocaleString()} - ${d.toLocaleString()}) / ${e})`}) 100% repeat-x`;this.trackMarkerContainerStyles.background=f,this.requestUpdate()},isRTL:()=>"rtl"===getComputedStyle(this.mdcRoot).direction});var a}resetFoundation(){this.mdcFoundation&&(this.mdcFoundation.destroy(),this.mdcFoundation.init())}async firstUpdated(){await super.firstUpdated(),this.mdcFoundation.setValue(this._value)}layout(){this.mdcFoundation.layout()}}var pa;s([Q(".mdc-slider")],t.prototype,"mdcRoot",void 0),s([Q(".mdc-slider")],t.prototype,"formElement",void 0),s([Q(".mdc-slider__thumb-container")],t.prototype,"thumbContainer",void 0),s([Q(".mdc-slider__pin-value-marker")],t.prototype,"pinMarker",void 0),s([w({type:Number})],t.prototype,"min",void 0),s([w({type:Number})],t.prototype,"max",void 0),s([w({type:Number})],t.prototype,"value",null),s([w({type:Number}),ea(function(a,b){0!==b!==(0!==a)&&this.resetFoundation(),this.mdcFoundation.setStep(a)})],t.prototype,"step",void 0),s([w({type:Boolean,reflect:!0}),ea(function(a){this.mdcFoundation.setDisabled(a)})],t.prototype,"disabled",void 0),s([w({type:Boolean,reflect:!0})],t.prototype,"pin",void 0),s([w({type:Boolean,reflect:!0}),ea(function(){this.mdcFoundation.setupTrackMarker()})],t.prototype,"markers",void 0),s([w({type:String})],t.prototype,"pinMarkerText",void 0),s([w({type:Object})],t.prototype,"trackMarkerContainerStyles",void 0),s([w({type:Object})],t.prototype,"thumbContainerStyles",void 0),s([w({type:Object})],t.prototype,"trackStyles",void 0),s([(pa={capture:!0,passive:!0},(a,b)=>void 0!==b?((c,d,e)=>{Object.assign(d[e],c)})(pa,a,b):((c,d)=>Object.assign(Object.assign({},d),{finisher(e){Object.assign(e.prototype[d.key],c)}}))(pa,a))],t.prototype,"layout",null);/**
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
*/const Bb=ba`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disable-touch-action{touch-action:none}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;let qa=class extends t{};var ra;function bb(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}qa.styles=Bb,qa=s([(ra="mwc-slider",a=>"function"==typeof a?((b,c)=>(window.customElements.define(b,c),c))(ra,a):((b,c)=>{const{kind:d,elements:e}=c;return{kind:d,elements:e,finisher(f){window.customElements.define(b,f)}}})(ra,a))],qa);var T=function(){try{var a=function(){if(!sa)return sa=!0,Promise.resolve(Promise.resolve(!1)).then(function(b){sa=b,window[x].dispatchEvent(new Event("change"))})}();return Promise.resolve(a&&a.then?a.then(function(){}):void 0)}catch(b){return Promise.reject(b)}},x="__foldables__",sa=!1,ta=function(){function a(){var c=this;if(void 0!==window[x])return window[x];var d=document.createDocumentFragment();this.addEventListener=d.addEventListener.bind(d),this.removeEventListener=d.removeEventListener.bind(d),this.dispatchEvent=function(e){if("change"===e.type){var f="on"+e.type;return"function"==typeof c[f]&&c[f](e),d.dispatchEvent(e)}},window.addEventListener("message",function(e){"update"===e.data.action&&Object.assign(c,e.data.value)}),window.addEventListener("resize",function(){return function(e,f){var g;return function(){var h=arguments,m=this;clearTimeout(g),g=setTimeout(function(){return e.apply(m,h)},200)}}(T())})}var b;return a.prototype.getSegments=function(){if("none"===this.spanning)return[{left:0,top:0,width:window.innerWidth,height:window.innerHeight}];if("single-fold-horizontal"===this.spanning){var c=(window.innerHeight-this.browserShellSize)/2,d=window.innerWidth;return[{top:0,left:0,width:d,height:c-this.foldSize/2},{top:c-this.foldSize/2,height:this.foldSize,left:0,width:d},{top:c+this.foldSize/2,left:0,width:d,height:c-this.foldSize/2}]}if("single-fold-vertical"===this.spanning){var e=window.innerWidth/2-this.foldSize/2,f=window.innerHeight;return[{top:0,left:0,width:e,height:f},{top:0,height:f,left:e,width:this.foldSize},{top:0,left:window.innerWidth/2+this.foldSize/2,width:e,height:f}]}},(b=[{key:"spanning",get:function(){return sessionStorage.getItem(x+"-spanning")||"none"},set:function(c){if(!["none","single-fold-horizontal","single-fold-vertical"].includes(c))throw new TypeError(c);sessionStorage.setItem(x+"-spanning",c),T()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(x+"-fold-size")||0},set:function(c){if(!(Number(c)>=0))throw new TypeError(c);sessionStorage.setItem(x+"-fold-size",c),T()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(x+"-browser-shell-size")||0},set:function(c){if(!(Number(c)>=0))throw new TypeError(c);sessionStorage.setItem(x+"-browser-shell-size",c),T()}}])&&function(c,d){for(var e=0;e<d.length;e++){var f=d[e];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(c,f.key,f)}}(a.prototype,b),a}();window[x]=new ta(),window.getWindowSegments=function(){var a=window[x].getSegments();return 1===a.length?a:[a[0],a[2]]};var Cb=/\((.*?)\)/gi,Db=/@media[^\(]+/gi;function Eb(a){var b,c=function(e){var f,g=new RegExp("(\\s*)(@media.*?\\bspanning\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}","gi");if("function"==typeof e.matchAll)f=Array.from(e.matchAll(g));else{for(f=[];f[f.length]=g.exec(e););f.length--}return f}(a),d=((b={})["single-fold-horizontal"]="",b["single-fold-vertical"]="",b.none="",b);return c.forEach(function(e){var f=e[1],g=e[2],h=e[3],m=e[4],l="none";g.indexOf("single-fold-horizontal")>-1&&(l="single-fold-horizontal"),g.indexOf("single-fold-vertical")>-1&&(l="single-fold-vertical");var i=g.match(Db)||[],j=function(n){return n.match(Cb)||[]}(g);j=j.filter(function(n){return!n.includes("spanning")}).join(" and "),d[l]+=""+f+i+j+"{"+h+m+"}"}),d}var ua=window.matchMedia("(spanning: single-fold-horizontal)").matches||window.matchMedia("(spanning: single-fold-vertical)").matches||window.matchMedia("(spanning: none)").matches||!1;console.info("CSS Spanning Media Queries are supported? "+ua);var cb,va=new ta();if(!ua){var wa=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(cb=wa,Promise.all(cb.map(function(a){return a.href?fetch(a.href).then(function(b){return b.text()}):a.textContent}))).then(function(a){var b=new DocumentFragment();a.forEach(function(c,d){for(var e=function(j,n){return j.replace(new RegExp("(\\s*)(@media.*?\\bspanning\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}","gi"),n)}(c,""),f=Eb(c),g=wa[d].href||"inline",h=0,m=Object.entries(f);h<m.length;h++){var l=m[h];U[l[0]]+="/* origin: "+g+" */"+l[1]}var i=document.createElement("style");i.setAttribute("data-css-origin",g),i.textContent=e,b.appendChild(i)}),wa.forEach(function(c){return null!=c.parentElement&&c.parentElement.removeChild(c)}),document.head.appendChild(b),function(c){ua||(db(c),va.addEventListener("change",function(){return db(c)}))}()})}var U={"single-fold-horizontal":"","single-fold-vertical":"",none:""};function db(a){for(var b=va,c=a?U[a.nodeName.toLowerCase()][b.spanning]:U[b.spanning],d=a?U[a.nodeName.toLowerCase()]["non-spanning"]:null,e=va.getSegments(),f=0,g=Object.entries(1===e.length?{}:e[1]);f<g.length;f++){var h=g[f];m=h[1]+"px",c=c.replace(new RegExp("env\\(\\s*fold-"+h[0]+"\\s*\\)","gi"),m)}var m,l="__foldables_sheet__",i=function(n,o){for(var p,q=function(r,A){var N;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(N=function(E,Fb){if(E){if("string"==typeof E)return bb(E,void 0);var I=Object.prototype.toString.call(E).slice(8,-1);return"Object"===I&&E.constructor&&(I=E.constructor.name),"Map"===I||"Set"===I?Array.from(E):"Arguments"===I||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I)?bb(E,void 0):void 0}}(r))){N&&(r=N);var eb=0;return function(){return eb>=r.length?{done:!0}:{done:!1,value:r[eb++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(N=r[Symbol.iterator]()).next.bind(N)}(n.querySelectorAll("."+l));!(p=q()).done;)p.value.remove();var u=document.createElement("style");u.className=l,u.textContent=o,n===document?document.head.appendChild(u):n.appendChild(u)};if(a){var j=a.shadowRoot;"adoptedStyleSheets"in j&&j.adoptedStyleSheets.length>0?j.adoptedStyleSheets[0].replace(d+c):i(j,c)}else i(document,c)}const z={Foldable:"foldable",Dual:"dual"};class H extends M{}k(H,"styles",ba`
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
  `),customElements.define("close-icon",class extends H{render(){return C`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}}),customElements.define("fullscreen-icon",class extends H{render(){return C`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}}),customElements.define("splitview-icon",class extends H{render(){return C`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}}),customElements.define("rotate-icon",class extends H{render(){return C`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}}),customElements.define("minimize-icon",class extends H{render(){return C`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}});class xa extends M{static get properties(){return{spanning:{type:String}}}_inIframe(){try{return window.self!==window.top}catch(a){return!0}}constructor(){super(),k(this,"_mini_configurator_header",void 0),k(this,"_mini_configurator",void 0),k(this,"_configurator",void 0),k(this,"_configurator_header",void 0),k(this,"_device_type_select",void 0),k(this,"_orientation_select",void 0),k(this,"_seam_slider",void 0),k(this,"_seam_container",void 0),k(this,"_preview",void 0),k(this,"_preview_container",void 0),k(this,"_device",void 0),k(this,"_frame",void 0),k(this,"_device_hinge",void 0),k(this,"_currentOrientation",void 0),k(this,"_currentDevice",void 0),k(this,"_isFullscreen",!1),k(this,"_spanning",void 0),k(this,"_fold_width",void 0),k(this,"_browser_shell_size",void 0),k(this,"_x",0),k(this,"_y",0),k(this,"_offset_x",0),k(this,"_offset_y",0),k(this,"_resizeHandler",void 0),k(this,"_handleKeyUp",a=>{73==a.keyCode&&a.ctrlKey&&this._showMiniConfigurator()}),k(this,"_startDragMiniConfigurator",async a=>{this._startDrag(a),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove}),k(this,"_startDragConfigurator",async a=>{this._startDrag(a),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove}),k(this,"_startDrag",async a=>{this._isFullscreen||(this._moved=!1,this._x=a.clientX-this._offset_x,this._y=a.clientY-this._offset_y,this._pointerId=a.pointerId,a.preventDefault())}),k(this,"_miniConfiguratorMove",async a=>{this._pointerMove(a),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}}),k(this,"_pointerMove",async a=>{if(a.clientY<0||a.clientX<0||a.clientX>window.innerWidth||a.clientY>window.innerHeight)return;let b=a.clientX-this._x,c=a.clientY-this._y;const d=window.getComputedStyle(this.shadowRoot.host),e=parseFloat(d.width),f=parseFloat(d.height);b<0&&(b=0),c<0&&(c=0),c+f>=window.innerHeight&&(c=window.innerHeight-f),b+e>=window.innerWidth&&(b=window.innerWidth-e),this._updateConfiguratorPosition(b,c),a.preventDefault()}),k(this,"_stopDragConfigurator",async a=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(a)}),k(this,"_stopDragMiniConfigurator",async a=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(a)}),k(this,"_stopDrag",async a=>{this._x=this._offset_x,this._y=this._offset_y}),k(this,"_onResize",async a=>{this._handleAsusSpanning()}),k(this,"_seamValueUpdated",async a=>{this.foldWidth=a.target.value,this.shadowRoot.host.style.setProperty("--device-fold-width",a.target.value+"px"),this._updateFoldablesFeature()}),k(this,"_rotationFinished",a=>{this._preview.style.transition=""}),this._spanning="none"}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(spanning: single-fold-horizontal)").matches||window.matchMedia("(spanning: single-fold-vertical)").matches||window.matchMedia("(spanning: none)").matches||!1)return console.info("CSS Spanning Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this),this._seam_slider.oninput=this._seamValueUpdated.bind(this);const a=window.getComputedStyle(this.shadowRoot.host),b=(parseFloat(a.width),parseFloat(a.height));this._updateConfiguratorPosition(20,window.innerHeight-b-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._spanning="none",this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="none",this._deviceType=z.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.spanning="single-fold-horizontal",this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{for(const a of document.styleSheets)if("__foldables_sheet__"===a.ownerNode.className){this._addZenbookVariables(a);break}for(const a of this._frame.contentDocument.styleSheets)if("__foldables_sheet__"===a.ownerNode.className){this._addZenbookVariables(a);break}},200)):(this.spanning="none",this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this.spanning}_addZenbookVariables(a){a.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",a.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(a){this._fold_width=Math.max(0,a)}_orientationChanged(a){const b=this._orientation_select.selectedIndex;this.spanning=this._orientation_select[b].value,this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){switch(this.spanning!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this.spanning,this.spanning){case"none":"asus"===this._currentDevice?this._applyHorizontalRotation():this._applyVerticalRotation();break;case"single-fold-vertical":this._applyVerticalRotation();break;case"single-fold-horizontal":this._applyHorizontalRotation()}}get spanning(){return this._spanning}set spanning(a){let b=this._spanning;switch(a){case"none":case"single-fold-vertical":this._orientation_select.selectedIndex=0;break;case"single-fold-horizontal":this._orientation_select.selectedIndex=1;break;default:a="none",this._orientation_select.selectedIndex=0}this._spanning=a,this.requestUpdate("spanning",b)}_deviceTypeChanged(a){const b=this._device_type_select.selectedIndex,c=this._device_type_select[b].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,"none"===this.spanning&&(this._currentOrientation=this.spanning="single-fold-vertical"),c){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this._seam_slider.layout(),this.foldWidth=24,this._deviceType=z.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=z.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=z.Dual,this.foldWidth=28,this._currentDevice="duo",this._frame.contentWindow.location.reload(!0);break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=z.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"hsb":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!1,this._deviceType=z.Foldable,this._seam_slider.layout(),this.foldWidth=114,this._currentDevice="hsb";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=z.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._currentOrientation=this.spanning="none",this._currentDevice="duo",this.foldWidth=0,this._deviceType=z.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature()}_calculateAndApplyScaleFactor(){const a=window.getComputedStyle(this._preview_container),b=window.getComputedStyle(this._device),c=parseInt(a.width,10),d=parseInt(a.height,10);let e=parseInt(b.width,10),f=parseInt(b.height,10),g=1;if("single-fold-horizontal"==this._currentOrientation&&(e=parseInt(b.height,10),f=parseInt(b.width,10)),f>d||e>c){const h=d/f,m=c/e;g=m<h?m:h}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*g)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px");break;case"hsb":this.shadowRoot.host.style.setProperty("--device-screen1-width","1280px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","1280px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1920px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1920px"),this.shadowRoot.host.style.setProperty("--device-fold-width","114px")}this._deviceType===z.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const a=new ta();a.foldSize=this.foldWidth,a.spanning=this.spanning,this._seam_slider.value=this.foldWidth}_debounce(a,b){let c;return function(){clearTimeout(c),c=setTimeout(()=>a.apply(this,arguments),b)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let a=this._offset_x,b=this._offset_y;const c=window.getComputedStyle(this.shadowRoot.host),d=parseFloat(c.width),e=parseFloat(c.height);this._offset_y+e>=window.innerHeight&&(b=window.innerHeight-e),this._offset_x+d>=window.innerWidth&&(a=window.innerWidth-d),this._updateConfiguratorPosition(a,b),this._updatePreviewConfiguration()}_updateConfiguratorPosition(a,b){this._offset_x=a,this._offset_y=b,this.shadowRoot.host.style.transform="translate3d("+a+"px, "+b+"px, 0)"}_toggleSpanning(){"none"!=this.spanning?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){"none"!==this.spanning&&("single-fold-vertical"===this.spanning?this.spanning="single-fold-horizontal":this.spanning="single-fold-vertical",this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return C`
    <div id="mini-configurator">
      <div class="header-background header" id="mini-configurator-header">Foldable Configurator</div>
      <div class="icon-row">
        <splitview-icon @click="${this._toggleSpanning}" class="${"none"!=this.spanning?"toggle":""}"></splitview-icon>
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
    </div>`}}k(xa,"styles",ba`
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
  `),customElements.define("foldable-device-configurator",xa);export{z as DeviceType,xa as FoldableDeviceConfigurator};
