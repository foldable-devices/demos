function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}/**
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
 */const Ee=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,q=(e,t,i=null)=>{for(;t!==i;){const s=t.nextSibling;e.removeChild(t),t=s}},R=`{{lit-${String(Math.random()).slice(2)}}}`,Ae=`<!--${R}-->`,Re=new RegExp(`${R}|${Ae}`);class Ie{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],o=document.createTreeWalker(t.content,133,null,!1);let r=0,n=-1,a=0;const{strings:u,values:{length:h}}=e;for(;a<h;){const d=o.nextNode();if(d!==null){if(n++,d.nodeType===1){if(d.hasAttributes()){const l=d.attributes,{length:p}=l;let m=0;for(let f=0;f<p;f++)Ce(l[f].name,"$lit$")&&m++;for(;m-- >0;){const f=u[a],g=Y.exec(f)[2],b=g.toLowerCase()+"$lit$",_=d.getAttribute(b);d.removeAttribute(b);const x=_.split(Re);this.parts.push({type:"attribute",index:n,name:g,strings:x}),a+=x.length-1}}d.tagName==="TEMPLATE"&&(s.push(d),o.currentNode=d.content)}else if(d.nodeType===3){const l=d.data;if(l.indexOf(R)>=0){const p=d.parentNode,m=l.split(Re),f=m.length-1;for(let g=0;g<f;g++){let b,_=m[g];if(_==="")b=O();else{const x=Y.exec(_);x!==null&&Ce(x[2],"$lit$")&&(_=_.slice(0,x.index)+x[1]+x[2].slice(0,-"$lit$".length)+x[3]),b=document.createTextNode(_)}p.insertBefore(b,d),this.parts.push({type:"node",index:++n})}m[f]===""?(p.insertBefore(O(),d),i.push(d)):d.data=m[f],a+=f}}else if(d.nodeType===8)if(d.data===R){const l=d.parentNode;d.previousSibling!==null&&n!==r||(n++,l.insertBefore(O(),d)),r=n,this.parts.push({type:"node",index:n}),d.nextSibling===null?d.data="":(i.push(d),n--),a++}else{let l=-1;for(;(l=d.data.indexOf(R,l+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=s.pop()}for(const d of i)d.parentNode.removeChild(d)}}const Ce=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},Oe=e=>e.index!==-1,O=()=>document.createComment(""),Y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,Ne=new WeakMap,Pe=e=>(...t)=>{const i=e(...t);return Ne.set(i,!0),i},F=e=>typeof e=="function"&&Ne.has(e),w={},ke={};/**
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
 */class K{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)i!==void 0&&i.setValue(e[t]),t++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const e=Ee?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let o,r=0,n=0,a=s.nextNode();for(;r<i.length;)if(o=i[r],Oe(o)){for(;n<o.index;)n++,a.nodeName==="TEMPLATE"&&(t.push(a),s.currentNode=a.content),(a=s.nextNode())===null&&(s.currentNode=t.pop(),a=s.nextNode());if(o.type==="node"){const u=this.processor.handleTextExpression(this.options);u.insertAfterNode(a.previousSibling),this.__parts.push(u)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return Ee&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
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
 */const rt=` ${R} `;class Le{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const o=this.strings[s],r=o.lastIndexOf("<!--");i=(r>-1||i)&&o.indexOf("-->",r+1)===-1;const n=Y.exec(o);t+=n===null?o+(i?rt:Ae):o.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+R}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}/**
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
 */const X=e=>e===null||!(typeof e=="object"||typeof e=="function"),He=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Fe{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new z(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let s=0;s<t;s++){i+=e[s];const o=this.parts[s];if(o!==void 0){const r=o.value;if(X(r)||!He(r))i+=typeof r=="string"?r:String(r);else for(const n of r)i+=typeof n=="string"?n:String(n)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class z{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===w||X(e)&&e===this.value||(this.value=e,F(e)||(this.committer.dirty=!0))}commit(){for(;F(this.value);){const e=this.value;this.value=w,e(this)}this.value!==w&&this.committer.commit()}}class J{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(O()),this.endNode=e.appendChild(O())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=O()),e.__insert(this.endNode=O())}insertAfterPart(e){e.__insert(this.startNode=O()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;F(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=w,t(this)}const e=this.__pendingValue;e!==w&&(X(e)?e!==this.value&&this.__commitText(e):e instanceof Le?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):He(e)?this.__commitIterable(e):e===ke?(this.value=ke,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i=typeof(e=e??"")=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof K&&this.value.template===t)this.value.update(e.values);else{const i=new K(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const o of e)i=t[s],i===void 0&&(i=new J(this.options),t.push(i),s===0?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(o),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){q(this.startNode.parentNode,e.nextSibling,this.endNode)}}class nt{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;F(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=w,t(this)}if(this.__pendingValue===w)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=w}}class at extends Fe{constructor(e,t,i){super(e,t,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new Z(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Z extends z{}let De=!1;(()=>{try{const e={get capture(){return De=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class dt{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=s=>this.handleEvent(s)}setValue(e){this.__pendingValue=e}commit(){for(;F(this.__pendingValue);){const o=this.__pendingValue;this.__pendingValue=w,o(this)}if(this.__pendingValue===w)return;const e=this.__pendingValue,t=this.value,i=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=e!=null&&(t==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=lt(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=w}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const lt=e=>e&&(De?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function ct(e){let t=D.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},D.set(e.type,t));let i=t.stringsArray.get(e.strings);if(i!==void 0)return i;const s=e.strings.join(R);return i=t.keyString.get(s),i===void 0&&(i=new Ie(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}const D=new Map,P=new WeakMap;/**
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
 */const ht=new class{handleAttributeExpressions(e,t,i,s){const o=t[0];return o==="."?new at(e,t.slice(1),i).parts:o==="@"?[new dt(e,t.slice(1),s.eventContext)]:o==="?"?[new nt(e,t.slice(1),i)]:new Fe(e,t,i).parts}handleTextExpression(e){return new J(e)}};/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const I=(e,...t)=>new Le(e,t,"html",ht);function Me(e,t){const{element:{content:i},parts:s}=e,o=document.createTreeWalker(i,133,null,!1);let r=M(s),n=s[r],a=-1,u=0;const h=[];let d=null;for(;o.nextNode();){a++;const l=o.currentNode;for(l.previousSibling===d&&(d=null),t.has(l)&&(h.push(l),d===null&&(d=l)),d!==null&&u++;n!==void 0&&n.index===a;)n.index=d!==null?-1:n.index-u,r=M(s,r),n=s[r]}h.forEach(l=>l.parentNode.removeChild(l))}const ut=e=>{let t=e.nodeType===11?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},M=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const s=e[i];if(Oe(s))return i}return-1};/**
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
 */const Ue=(e,t)=>`${e}--${t}`;let V=!0;window.ShadyCSS===void 0?V=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const pt=e=>t=>{const i=Ue(t.type,e);let s=D.get(i);s===void 0&&(s={stringsArray:new WeakMap,keyString:new Map},D.set(i,s));let o=s.stringsArray.get(t.strings);if(o!==void 0)return o;const r=t.strings.join(R);if(o=s.keyString.get(r),o===void 0){const n=t.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(n,e),o=new Ie(t,n),s.keyString.set(r,o)}return s.stringsArray.set(t.strings,o),o},mt=["html","svg"],ze=new Set,ft=(e,t,i)=>{ze.add(e);const s=i?i.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:r}=o;if(r===0)return void window.ShadyCSS.prepareTemplateStyles(s,e);const n=document.createElement("style");for(let h=0;h<r;h++){const d=o[h];d.parentNode.removeChild(d),n.textContent+=d.textContent}(h=>{mt.forEach(d=>{const l=D.get(Ue(d,h));l!==void 0&&l.keyString.forEach(p=>{const{element:{content:m}}=p,f=new Set;Array.from(m.querySelectorAll("style")).forEach(g=>{f.add(g)}),Me(p,f)})})})(e);const a=s.content;i?function(h,d,l=null){const{element:{content:p},parts:m}=h;if(l==null)return void p.appendChild(d);const f=document.createTreeWalker(p,133,null,!1);let g=M(m),b=0,_=-1;for(;f.nextNode();)for(_++,f.currentNode===l&&(b=ut(d),l.parentNode.insertBefore(d,l));g!==-1&&m[g].index===_;){if(b>0){for(;g!==-1;)m[g].index+=b,g=M(m,g);return}g=M(m,g)}}(i,n,a.firstChild):a.insertBefore(n,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const u=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&u!==null)t.insertBefore(u.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(n,a.firstChild);const h=new Set;h.add(n),Me(i,h)}};window.JSCompiler_renameProperty=(e,t)=>e;const Q={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Ve=(e,t)=>t!==e&&(t==t||e==e),ee={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:Ve};class je extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const s=this._attributeNameForProperty(i,t);s!==void 0&&(this._attributeToPropertyMap.set(s,i),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,i)=>this._classProperties.set(i,t))}}static createProperty(e,t=ee){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this._requestUpdate(e,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||ee}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const s of i)this.createProperty(s,t[s])}}static _attributeNameForProperty(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=Ve){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||Q,o=typeof s=="function"?s:s.fromAttribute;return o?o(e,i):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||Q.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const i=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,i)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=ee){const s=this.constructor,o=s._attributeNameForProperty(e,i);if(o!==void 0){const r=s._propertyValueToAttribute(t,i);if(r===void 0)return;this._updateState=8|this._updateState,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(s!==void 0){const o=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,o),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(e!==void 0){const s=this.constructor,o=s.getPropertyOptions(e);s._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),o.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(i){throw e=!1,this._markUpdated(),i}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,i)=>this._propertyToAttribute(i,this[i],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}je.finalized=!0;/**
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
 */const gt=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function S(e){return(t,i)=>i!==void 0?((s,o,r)=>{o.constructor.createProperty(r,s)})(e,t,i):gt(e,t)}function j(e){return(t,i)=>{const s={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return i!==void 0?_t(s,t,i):yt(s,t)}}const _t=(e,t,i)=>{Object.defineProperty(t,i,e)},yt=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Be="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,We=Symbol();class Ge{constructor(e,t){if(t!==We)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(Be?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const te=(e,...t)=>{const i=t.reduce((s,o,r)=>s+(n=>{if(n instanceof Ge)return n.cssText;if(typeof n=="number")return n;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${n}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[r+1],e[0]);return new Ge(i,We)};/**
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const $e={};class U extends je{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(e===void 0)this._styles=[];else if(Array.isArray(e)){const t=(o,r)=>o.reduceRight((n,a)=>Array.isArray(a)?t(a,n):(n.add(a),n),r),i=t(e,new Set),s=[];i.forEach(o=>s.unshift(o)),this._styles=s}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?Be?this.renderRoot.adoptedStyleSheets=e.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==$e&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(i=>{const s=document.createElement("style");s.textContent=i.cssText,this.renderRoot.appendChild(s)}))}render(){return $e}}U.finalized=!0,U.render=(e,t,i)=>{if(!i||typeof i!="object"||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,o=P.has(t),r=V&&t.nodeType===11&&!!t.host,n=r&&!ze.has(s),a=n?document.createDocumentFragment():t;if(((u,h,d)=>{let l=P.get(h);l===void 0&&(q(h,h.firstChild),P.set(h,l=new J(Object.assign({templateFactory:ct},d))),l.appendInto(h)),l.setValue(u),l.commit()})(e,a,Object.assign({templateFactory:pt(s)},i)),n){const u=P.get(a);P.delete(a);const h=u.value instanceof K?u.value.template:void 0;ft(s,a,h),q(t,t.firstChild),t.appendChild(a),P.set(t,u)}!o&&r&&window.ShadyCSS.styleElement(t.host)};/*! *****************************************************************************
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
***************************************************************************** */var qe=function(e,t){return(qe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,s){i.__proto__=s}||function(i,s){for(var o in s)s.hasOwnProperty(o)&&(i[o]=s[o])})(e,t)},ie=function(){return(ie=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function y(e,t,i,s){var o,r=arguments.length,n=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n;/**
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
 */}var vt=function(){function e(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();/**
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
*/const Ye=()=>{},bt={get passive(){return!1}};document.addEventListener("x",Ye,bt),document.removeEventListener("x",Ye);/**
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
*/class wt extends U{createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}/**
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
 */class St{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const i of t)this.classes.add(i)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const Ke=new WeakMap,Tt=Pe(e=>t=>{if(!(t instanceof z)||t instanceof Z||t.committer.name!=="class"||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=t,{element:s}=i;let o=Ke.get(t);o===void 0&&(s.setAttribute("class",i.strings.join(" ")),Ke.set(t,o=new Set));const r=s.classList||new St(s);o.forEach(n=>{n in e||(r.remove(n),o.delete(n))});for(const n in e){const a=e[n];a!=o.has(n)&&(a?(r.add(n),o.add(n)):(r.remove(n),o.delete(n)))}typeof r.commit=="function"&&r.commit()}),Xe=new WeakMap,se=Pe(e=>t=>{if(!(t instanceof z)||t instanceof Z||t.committer.name!=="style"||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=t,{style:s}=i.element;let o=Xe.get(t);o===void 0&&(s.cssText=i.strings.join(" "),Xe.set(t,o=new Set)),o.forEach(r=>{r in e||(o.delete(r),r.indexOf("-")===-1?s[r]=null:s.removeProperty(r))});for(const r in e)o.add(r),r.indexOf("-")===-1?s[r]=e[r]:s.setProperty(r,e[r])});/**
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
*/class xt extends wt{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(e){this.formElement&&this.formElement.setAttribute("aria-label",e)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",e=>{this.dispatchEvent(new Event("change",e))})}}const oe=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const s=t.constructor._observers;t.constructor._observers=new Map,s.forEach((o,r)=>t.constructor._observers.set(r,o))}}else{t.constructor._observers=new Map;const s=t.updated;t.updated=function(o){s.call(this,o),o.forEach((r,n)=>{const a=this.constructor._observers.get(n);a!==void 0&&a.call(this,this[n],r)})}}t.constructor._observers.set(i,e)};function re(e){return e===void 0&&(e=window),!!function(t){t===void 0&&(t=window);var i=!1;try{var s={get passive(){return i=!0,!1}},o=function(){};t.document.addEventListener("test",o,s),t.document.removeEventListener("test",o,s)}catch(r){i=!1}return i}(e)&&{passive:!0}}var Je={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},Ze={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function Qe(e){return Boolean(e.document)&&typeof e.document.createElement=="function"}/**
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
 */var E={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete",DISABLE_TOUCH_ACTION:"mdc-slider--disable-touch-action"},k={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},ne={PAGE_FACTOR:4},ae=typeof window!="undefined",de=ae&&!!window.PointerEvent,et=de?["pointerdown"]:["mousedown","touchstart"],tt=de?["pointerup"]:["mouseup","touchend"],Et={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},le="ArrowDown",B="ArrowLeft",W="ArrowRight",ce="ArrowUp",he="End",ue="Home",pe="PageDown",me="PageUp",At=function(e){function t(i){var s=e.call(this,ie(ie({},t.defaultAdapter),i))||this;return s.savedTabIndex_=NaN,s.active_=!1,s.inTransit_=!1,s.isDiscrete_=!1,s.hasTrackMarker_=!1,s.handlingThumbTargetEvt_=!1,s.min_=0,s.max_=100,s.step_=0,s.value_=0,s.disabled_=!1,s.preventFocusState_=!1,s.thumbContainerPointerHandler_=function(){return s.handlingThumbTargetEvt_=!0},s.interactionStartHandler_=function(o){return s.handleDown_(o)},s.keydownHandler_=function(o){return s.handleKeydown_(o)},s.focusHandler_=function(){return s.handleFocus_()},s.blurHandler_=function(){return s.handleBlur_()},s.resizeHandler_=function(){return s.layout()},s}return function(i,s){function o(){this.constructor=i}qe(i,s),i.prototype=s===null?Object.create(s):(o.prototype=s.prototype,new o)}(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return E},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return k},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return ne},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var i=this;this.isDiscrete_=this.adapter.hasClass(E.IS_DISCRETE),this.hasTrackMarker_=this.adapter.hasClass(E.HAS_TRACK_MARKER),et.forEach(function(s){i.adapter.registerInteractionHandler(s,i.interactionStartHandler_),i.adapter.registerThumbContainerInteractionHandler(s,i.thumbContainerPointerHandler_)}),de&&this.adapter.addClass(E.DISABLE_TOUCH_ACTION),this.adapter.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_),this.adapter.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&this.getStep()===0&&(this.step_=1)},t.prototype.destroy=function(){var i=this;et.forEach(function(s){i.adapter.deregisterInteractionHandler(s,i.interactionStartHandler_),i.adapter.deregisterThumbContainerInteractionHandler(s,i.thumbContainerPointerHandler_)}),this.adapter.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.deregisterResizeHandler(this.resizeHandler_)},t.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&this.getStep()!==0&&this.adapter.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},t.prototype.layout=function(){this.rect_=this.adapter.computeBoundingRect(),this.updateUIForCurrentValue_()},t.prototype.getValue=function(){return this.value_},t.prototype.setValue=function(i){this.setValue_(i,!1)},t.prototype.getMax=function(){return this.max_},t.prototype.setMax=function(i){if(i<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=i,this.setValue_(this.value_,!1,!0),this.adapter.setAttribute(k.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},t.prototype.getMin=function(){return this.min_},t.prototype.setMin=function(i){if(i>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=i,this.setValue_(this.value_,!1,!0),this.adapter.setAttribute(k.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},t.prototype.getStep=function(){return this.step_},t.prototype.setStep=function(i){if(i<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&(typeof i!="number"||i<1)&&(i=1),this.step_=i,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},t.prototype.isDisabled=function(){return this.disabled_},t.prototype.setDisabled=function(i){this.disabled_=i,this.toggleClass_(E.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter.getTabIndex(),this.adapter.setAttribute(k.ARIA_DISABLED,"true"),this.adapter.removeAttribute("tabindex")):(this.adapter.removeAttribute(k.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter.setAttribute("tabindex",String(this.savedTabIndex_)))},t.prototype.handleDown_=function(i){var s=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var o=function(a){s.handleMove_(a)},r=Et[i.type],n=function(){s.handleUp_(),s.adapter.deregisterBodyInteractionHandler(r,o),tt.forEach(function(a){return s.adapter.deregisterBodyInteractionHandler(a,n)})};this.adapter.registerBodyInteractionHandler(r,o),tt.forEach(function(a){return s.adapter.registerBodyInteractionHandler(a,n)}),this.setValueFromEvt_(i)}},t.prototype.handleMove_=function(i){i.preventDefault(),this.setValueFromEvt_(i)},t.prototype.handleUp_=function(){this.setActive_(!1),this.adapter.notifyChange()},t.prototype.getClientX_=function(i){return i.targetTouches&&i.targetTouches.length>0?i.targetTouches[0].clientX:i.clientX},t.prototype.setValueFromEvt_=function(i){var s=this.getClientX_(i),o=this.computeValueFromClientX_(s);this.setValue_(o,!0)},t.prototype.computeValueFromClientX_=function(i){var s=this.max_,o=this.min_,r=(i-this.rect_.left)/this.rect_.width;return this.adapter.isRTL()&&(r=1-r),o+r*(s-o)},t.prototype.handleKeydown_=function(i){var s=this.getKeyId_(i),o=this.getValueForKeyId_(s);isNaN(o)||(i.preventDefault(),this.adapter.addClass(E.FOCUS),this.setValue_(o,!0),this.adapter.notifyChange())},t.prototype.getKeyId_=function(i){return i.key===B||i.keyCode===37?B:i.key===W||i.keyCode===39?W:i.key===ce||i.keyCode===38?ce:i.key===le||i.keyCode===40?le:i.key===ue||i.keyCode===36?ue:i.key===he||i.keyCode===35?he:i.key===me||i.keyCode===33?me:i.key===pe||i.keyCode===34?pe:""},t.prototype.getValueForKeyId_=function(i){var s=this.max_,o=this.min_,r=this.step_||(s-o)/100;switch(this.adapter.isRTL()&&(i===B||i===W)&&(r=-r),i){case B:case le:return this.value_-r;case W:case ce:return this.value_+r;case ue:return this.min_;case he:return this.max_;case me:return this.value_+r*ne.PAGE_FACTOR;case pe:return this.value_-r*ne.PAGE_FACTOR;default:return NaN}},t.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter.addClass(E.FOCUS)},t.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter.removeClass(E.FOCUS)},t.prototype.setValue_=function(i,s,o){if(o===void 0&&(o=!1),i!==this.value_||o){var r=this.min_,n=this.max_,a=i===r||i===n;this.step_&&!a&&(i=this.quantize_(i)),i<r?i=r:i>n&&(i=n),i=i||0,this.value_=i,this.adapter.setAttribute(k.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),s&&(this.adapter.notifyInput(),this.isDiscrete_&&this.adapter.setMarkerValue(i))}},t.prototype.quantize_=function(i){return Math.round(i/this.step_)*this.step_},t.prototype.updateUIForCurrentValue_=function(){var i=this,s=this.max_,o=this.min_,r=(this.value_-o)/(s-o),n=r*this.rect_.width;this.adapter.isRTL()&&(n=this.rect_.width-n);var a=ae?function(d,l){if(Qe(d)&&l in Je){var p=d.document.createElement("div"),m=Je[l],f=m.standard,g=m.prefixed;return f in p.style?f:g}return l}(window,"transform"):"transform",u=ae?function(d,l){if(Qe(d)&&l in Ze){var p=d.document.createElement("div"),m=Ze[l],f=m.standard,g=m.prefixed;return m.cssProperty in p.style?f:g}return l}(window,"transitionend"):"transitionend";if(this.inTransit_){var h=function(){i.setInTransit_(!1),i.adapter.deregisterThumbContainerInteractionHandler(u,h)};this.adapter.registerThumbContainerInteractionHandler(u,h)}requestAnimationFrame(function(){i.adapter.setThumbContainerStyleProperty(a,"translateX("+n+"px) translateX(-50%)"),i.adapter.setTrackStyleProperty(a,"scaleX("+r+")")})},t.prototype.setActive_=function(i){this.active_=i,this.toggleClass_(E.ACTIVE,this.active_)},t.prototype.setInTransit_=function(i){this.inTransit_=i,this.toggleClass_(E.IN_TRANSIT,this.inTransit_)},t.prototype.toggleClass_=function(i,s){s?this.adapter.addClass(i):this.adapter.removeClass(i)},t}(vt);class v extends xt{constructor(){super(...arguments),this.mdcFoundationClass=At,this.min=0,this.max=100,this._value=0,this.step=0,this.disabled=!1,this.pin=!1,this.markers=!1,this.pinMarkerText="",this.trackMarkerContainerStyles={},this.thumbContainerStyles={},this.trackStyles={},this.isFoundationDestroyed=!1}set value(e){this.mdcFoundation&&this.mdcFoundation.setValue(e),this._value=e,this.requestUpdate("value",e)}get value(){return this.mdcFoundation?this.mdcFoundation.getValue():this._value}render(){const e=this.step!==0,t={"mdc-slider--discrete":e,"mdc-slider--display-markers":this.markers&&e};let i="";e&&this.markers&&(i=I`
        <div
            class="mdc-slider__track-marker-container"
            style="${se(this.trackMarkerContainerStyles)}">
        </div>`);let s="";return this.pin&&(s=I`
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`),I`
      <div class="mdc-slider ${Tt(t)}"
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
              style="${se(this.trackStyles)}">
          </div>
          ${i}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${se(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${s}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`}connectedCallback(){super.connectedCallback(),this.mdcRoot&&this.isFoundationDestroyed&&(this.isFoundationDestroyed=!1,this.mdcFoundation.init())}updated(e){const t=e.has("min"),i=e.has("max");t&&i?this.max<this.mdcFoundation.getMin()?(this.mdcFoundation.setMin(this.min),this.mdcFoundation.setMax(this.max)):(this.mdcFoundation.setMax(this.max),this.mdcFoundation.setMin(this.min)):t?this.mdcFoundation.setMin(this.min):i&&this.mdcFoundation.setMax(this.max),super.updated(e)}disconnectedCallback(){super.disconnectedCallback(),this.isFoundationDestroyed=!0,this.mdcFoundation.destroy()}createAdapter(){return Object.assign(Object.assign({},(e=this.mdcRoot,{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)})),{getAttribute:t=>this.mdcRoot.getAttribute(t),setAttribute:(t,i)=>this.mdcRoot.setAttribute(t,i),removeAttribute:t=>this.mdcRoot.removeAttribute(t),computeBoundingRect:()=>{const t=this.mdcRoot.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left+window.pageXOffset,right:t.right,top:t.top,width:t.width}},getTabIndex:()=>this.mdcRoot.tabIndex,registerInteractionHandler:(t,i)=>{const s=t==="touchstart"?re():void 0;this.mdcRoot.addEventListener(t,i,s)},deregisterInteractionHandler:(t,i)=>this.mdcRoot.removeEventListener(t,i),registerThumbContainerInteractionHandler:(t,i)=>{const s=t==="touchstart"?re():void 0;this.thumbContainer.addEventListener(t,i,s)},deregisterThumbContainerInteractionHandler:(t,i)=>this.thumbContainer.removeEventListener(t,i),registerBodyInteractionHandler:(t,i)=>document.body.addEventListener(t,i),deregisterBodyInteractionHandler:(t,i)=>document.body.removeEventListener(t,i),registerResizeHandler:t=>window.addEventListener("resize",t,re()),deregisterResizeHandler:t=>window.removeEventListener("resize",t),notifyInput:()=>{const t=this.mdcFoundation.getValue();t!==this._value&&(this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:this,composed:!0,bubbles:!0,cancelable:!0})))},notifyChange:()=>{this.dispatchEvent(new CustomEvent("change",{detail:this,composed:!0,bubbles:!0,cancelable:!0}))},setThumbContainerStyleProperty:(t,i)=>{this.thumbContainerStyles[t]=i,this.requestUpdate()},setTrackStyleProperty:(t,i)=>{this.trackStyles[t]=i,this.requestUpdate()},setMarkerValue:t=>this.pinMarkerText=t.toLocaleString(),setTrackMarkers:(t,i,s)=>{const o=t.toLocaleString(),r=`linear-gradient(to right, currentColor 2px, transparent 0) 0 center / calc((100% - 2px) / ${`((${i.toLocaleString()} - ${s.toLocaleString()}) / ${o})`}) 100% repeat-x`;this.trackMarkerContainerStyles.background=r,this.requestUpdate()},isRTL:()=>getComputedStyle(this.mdcRoot).direction==="rtl"});var e}resetFoundation(){this.mdcFoundation&&(this.mdcFoundation.destroy(),this.mdcFoundation.init())}async firstUpdated(){await super.firstUpdated(),this.mdcFoundation.setValue(this._value)}layout(){this.mdcFoundation.layout()}}var fe;y([j(".mdc-slider")],v.prototype,"mdcRoot",void 0),y([j(".mdc-slider")],v.prototype,"formElement",void 0),y([j(".mdc-slider__thumb-container")],v.prototype,"thumbContainer",void 0),y([j(".mdc-slider__pin-value-marker")],v.prototype,"pinMarker",void 0),y([S({type:Number})],v.prototype,"min",void 0),y([S({type:Number})],v.prototype,"max",void 0),y([S({type:Number})],v.prototype,"value",null),y([S({type:Number}),oe(function(e,t){t!==0!==(e!==0)&&this.resetFoundation(),this.mdcFoundation.setStep(e)})],v.prototype,"step",void 0),y([S({type:Boolean,reflect:!0}),oe(function(e){this.mdcFoundation.setDisabled(e)})],v.prototype,"disabled",void 0),y([S({type:Boolean,reflect:!0})],v.prototype,"pin",void 0),y([S({type:Boolean,reflect:!0}),oe(function(){this.mdcFoundation.setupTrackMarker()})],v.prototype,"markers",void 0),y([S({type:String})],v.prototype,"pinMarkerText",void 0),y([S({type:Object})],v.prototype,"trackMarkerContainerStyles",void 0),y([S({type:Object})],v.prototype,"thumbContainerStyles",void 0),y([S({type:Object})],v.prototype,"trackStyles",void 0),y([(fe={capture:!0,passive:!0},(e,t)=>t!==void 0?((i,s,o)=>{Object.assign(s[o],i)})(fe,e,t):((i,s)=>Object.assign(Object.assign({},s),{finisher(o){Object.assign(o.prototype[s.key],i)}}))(fe,e))],v.prototype,"layout",null);/**
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
*/const Rt=te`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disable-touch-action{touch-action:none}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;let ge=class extends v{};var _e;function it(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}ge.styles=Rt,ge=y([(_e="mwc-slider",e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(_e,e):((t,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){window.customElements.define(t,r)}}})(_e,e))],ge);var G=function(){try{var e=function(){if(!ye)return ye=!0,Promise.resolve(Promise.resolve(!1)).then(function(t){ye=t,window[T].dispatchEvent(new Event("change"))})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},T="__foldables__",ye=!1,ve=function(){function e(){var i=this;if(window[T]!==void 0)return window[T];var s=document.createDocumentFragment();this.addEventListener=s.addEventListener.bind(s),this.removeEventListener=s.removeEventListener.bind(s),this.dispatchEvent=function(o){if(o.type==="change"){var r="on"+o.type;return typeof i[r]=="function"&&i[r](o),s.dispatchEvent(o)}},window.addEventListener("message",function(o){o.data.action==="update"&&Object.assign(i,o.data.value)}),window.addEventListener("resize",function(){return function(o,r){var n;return function(){var a=arguments,u=this;clearTimeout(n),n=setTimeout(function(){return o.apply(u,a)},200)}}(G())})}var t;return e.prototype.getSegments=function(){if(this.spanning==="none")return[{left:0,top:0,width:window.innerWidth,height:window.innerHeight}];if(this.spanning==="single-fold-horizontal"){var i=(window.innerHeight-this.browserShellSize)/2,s=window.innerWidth;return[{top:0,left:0,width:s,height:i-this.foldSize/2},{top:i-this.foldSize/2,height:this.foldSize,left:0,width:s},{top:i+this.foldSize/2,left:0,width:s,height:i-this.foldSize/2}]}if(this.spanning==="single-fold-vertical"){var o=window.innerWidth/2-this.foldSize/2,r=window.innerHeight;return[{top:0,left:0,width:o,height:r},{top:0,height:r,left:o,width:this.foldSize},{top:0,left:window.innerWidth/2+this.foldSize/2,width:o,height:r}]}},(t=[{key:"spanning",get:function(){return sessionStorage.getItem(T+"-spanning")||"none"},set:function(i){if(!["none","single-fold-horizontal","single-fold-vertical"].includes(i))throw new TypeError(i);sessionStorage.setItem(T+"-spanning",i),G()}},{key:"foldSize",get:function(){return+sessionStorage.getItem(T+"-fold-size")||0},set:function(i){if(!(Number(i)>=0))throw new TypeError(i);sessionStorage.setItem(T+"-fold-size",i),G()}},{key:"browserShellSize",get:function(){return+sessionStorage.getItem(T+"-browser-shell-size")||0},set:function(i){if(!(Number(i)>=0))throw new TypeError(i);sessionStorage.setItem(T+"-browser-shell-size",i),G()}}])&&function(i,s){for(var o=0;o<s.length;o++){var r=s[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}(e.prototype,t),e}();window[T]=new ve,window.getWindowSegments=function(){var e=window[T].getSegments();return e.length===1?e:[e[0],e[2]]};var It=/\((.*?)\)/gi,Ct=/@media[^\(]+/gi;function Ot(e){var t,i=function(o){var r,n=new RegExp("(\\s*)(@media.*?\\bspanning\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}","gi");if(typeof o.matchAll=="function")r=Array.from(o.matchAll(n));else{for(r=[];r[r.length]=n.exec(o););r.length--}return r}(e),s=((t={})["single-fold-horizontal"]="",t["single-fold-vertical"]="",t.none="",t);return i.forEach(function(o){var r=o[1],n=o[2],a=o[3],u=o[4],h="none";n.indexOf("single-fold-horizontal")>-1&&(h="single-fold-horizontal"),n.indexOf("single-fold-vertical")>-1&&(h="single-fold-vertical");var d=n.match(Ct)||[],l=function(p){return p.match(It)||[]}(n);l=l.filter(function(p){return!p.includes("spanning")}).join(" and "),s[h]+=""+r+d+l+"{"+a+u+"}"}),s}var be=window.matchMedia("(spanning: single-fold-horizontal)").matches||window.matchMedia("(spanning: single-fold-vertical)").matches||window.matchMedia("(spanning: none)").matches||!1;console.info("CSS Spanning Media Queries are supported? "+be);var st,we=new ve;if(!be){var Se=Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));(st=Se,Promise.all(st.map(function(e){return e.href?fetch(e.href).then(function(t){return t.text()}):e.textContent}))).then(function(e){var t=new DocumentFragment;e.forEach(function(i,s){for(var o=function(l,p){return l.replace(new RegExp("(\\s*)(@media.*?\\bspanning\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}","gi"),p)}(i,""),r=Ot(i),n=Se[s].href||"inline",a=0,u=Object.entries(r);a<u.length;a++){var h=u[a];$[h[0]]+="/* origin: "+n+" */"+h[1]}var d=document.createElement("style");d.setAttribute("data-css-origin",n),d.textContent=o,t.appendChild(d)}),Se.forEach(function(i){return i.parentElement!=null&&i.parentElement.removeChild(i)}),document.head.appendChild(t),function(i){be||(ot(i),we.addEventListener("change",function(){return ot(i)}))}()})}var $={"single-fold-horizontal":"","single-fold-vertical":"",none:""};function ot(e){for(var t=we,i=e?$[e.nodeName.toLowerCase()][t.spanning]:$[t.spanning],s=e?$[e.nodeName.toLowerCase()]["non-spanning"]:null,o=we.getSegments(),r=0,n=Object.entries(o.length===1?{}:o[1]);r<n.length;r++){var a=n[r];u=a[1]+"px",i=i.replace(new RegExp("env\\(\\s*fold-"+a[0]+"\\s*\\)","gi"),u)}var u,h="__foldables_sheet__",d=function(p,m){for(var f,g=function(_,x){var H;if(typeof Symbol=="undefined"||_[Symbol.iterator]==null){if(Array.isArray(_)||(H=function(C,Nt){if(C){if(typeof C=="string")return it(C,void 0);var N=Object.prototype.toString.call(C).slice(8,-1);return N==="Object"&&C.constructor&&(N=C.constructor.name),N==="Map"||N==="Set"?Array.from(C):N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N)?it(C,void 0):void 0}}(_))){H&&(_=H);var xe=0;return function(){return xe>=_.length?{done:!0}:{done:!1,value:_[xe++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(H=_[Symbol.iterator]()).next.bind(H)}(p.querySelectorAll("."+h));!(f=g()).done;)f.value.remove();var b=document.createElement("style");b.className=h,b.textContent=m,p===document?document.head.appendChild(b):p.appendChild(b)};if(e){var l=e.shadowRoot;"adoptedStyleSheets"in l&&l.adoptedStyleSheets.length>0?l.adoptedStyleSheets[0].replace(s+i):d(l,i)}else d(document,i)}const A={Foldable:"foldable",Dual:"dual"};class L extends U{}c(L,"styles",te`
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
  `),customElements.define("close-icon",class extends L{render(){return I`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `}}),customElements.define("fullscreen-icon",class extends L{render(){return I`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `}}),customElements.define("splitview-icon",class extends L{render(){return I`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `}}),customElements.define("rotate-icon",class extends L{render(){return I`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `}}),customElements.define("minimize-icon",class extends L{render(){return I`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `}});class Te extends U{static get properties(){return{spanning:{type:String}}}_inIframe(){try{return window.self!==window.top}catch(e){return!0}}constructor(){super(),c(this,"_mini_configurator_header",void 0),c(this,"_mini_configurator",void 0),c(this,"_configurator",void 0),c(this,"_configurator_header",void 0),c(this,"_device_type_select",void 0),c(this,"_orientation_select",void 0),c(this,"_seam_slider",void 0),c(this,"_seam_container",void 0),c(this,"_preview",void 0),c(this,"_preview_container",void 0),c(this,"_device",void 0),c(this,"_frame",void 0),c(this,"_device_hinge",void 0),c(this,"_currentOrientation",void 0),c(this,"_currentDevice",void 0),c(this,"_isFullscreen",!1),c(this,"_spanning",void 0),c(this,"_fold_width",void 0),c(this,"_browser_shell_size",void 0),c(this,"_x",0),c(this,"_y",0),c(this,"_offset_x",0),c(this,"_offset_y",0),c(this,"_resizeHandler",void 0),c(this,"_handleKeyUp",e=>{e.keyCode==73&&e.ctrlKey&&this._showMiniConfigurator()}),c(this,"_startDragMiniConfigurator",async e=>{this._startDrag(e),this._mini_configurator_header.setPointerCapture(this._pointerId),this._mini_configurator_header.onpointerup=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointercancel=this._stopDragMiniConfigurator,this._mini_configurator_header.onpointermove=this._miniConfiguratorMove}),c(this,"_startDragConfigurator",async e=>{this._startDrag(e),this._configurator_header.setPointerCapture(this._pointerId),this._configurator_header.onpointerup=this._stopDragConfigurator,this._configurator_header.onpointercancel=this._stopDragConfigurator,this._configurator_header.onpointermove=this._pointerMove}),c(this,"_startDrag",async e=>{this._isFullscreen||(this._moved=!1,this._x=e.clientX-this._offset_x,this._y=e.clientY-this._offset_y,this._pointerId=e.pointerId,e.preventDefault())}),c(this,"_miniConfiguratorMove",async e=>{this._pointerMove(e),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y}}),c(this,"_pointerMove",async e=>{if(e.clientY<0||e.clientX<0||e.clientX>window.innerWidth||e.clientY>window.innerHeight)return;let t=e.clientX-this._x,i=e.clientY-this._y;const s=window.getComputedStyle(this.shadowRoot.host),o=parseFloat(s.width),r=parseFloat(s.height);t<0&&(t=0),i<0&&(i=0),i+r>=window.innerHeight&&(i=window.innerHeight-r),t+o>=window.innerWidth&&(t=window.innerWidth-o),this._updateConfiguratorPosition(t,i),e.preventDefault()}),c(this,"_stopDragConfigurator",async e=>{this._configurator_header.onpointerup=null,this._configurator_header.onpointermove=null,this._configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(e)}),c(this,"_stopDragMiniConfigurator",async e=>{this._mini_configurator_header.onpointerup=null,this._mini_configurator_header.onpointermove=null,this._mini_configurator_header.releasePointerCapture(this._pointerId),this._stopDrag(e)}),c(this,"_stopDrag",async e=>{this._x=this._offset_x,this._y=this._offset_y}),c(this,"_onResize",async e=>{this._handleAsusSpanning()}),c(this,"_seamValueUpdated",async e=>{this.foldWidth=e.target.value,this.shadowRoot.host.style.setProperty("--device-fold-width",e.target.value+"px"),this._updateFoldablesFeature()}),c(this,"_rotationFinished",e=>{this._preview.style.transition=""}),this._spanning="none"}firstUpdated(){if(this._inIframe())return void(this.shadowRoot.host.style.display="none");if(window.matchMedia("(spanning: single-fold-horizontal)").matches||window.matchMedia("(spanning: single-fold-vertical)").matches||window.matchMedia("(spanning: none)").matches||!1)return console.info("CSS Spanning Media Queries are supported, the configurator will hide itself."),void(this.shadowRoot.host.style.display="none");this._mini_configurator_header=this.shadowRoot.querySelector("#mini-configurator-header"),this._mini_configurator=this.shadowRoot.querySelector("#mini-configurator"),this._configurator=this.shadowRoot.querySelector("#configurator"),this._configurator_header=this.shadowRoot.querySelector("#configurator-header"),this._device_type_select=this.shadowRoot.querySelector("#device-select"),this._orientation_select=this.shadowRoot.querySelector("#orientation-select"),this._seam_slider=this.shadowRoot.getElementById("seam"),this._seam_container=this.shadowRoot.getElementById("seam-container"),this._configurator_header.onpointerdown=this._startDragConfigurator.bind(this),this._mini_configurator_header.onpointerdown=this._startDragMiniConfigurator.bind(this),this._device_type_select.onchange=this._deviceTypeChanged.bind(this),this._orientation_select.onchange=this._orientationChanged.bind(this),this._seam_slider.oninput=this._seamValueUpdated.bind(this);const e=window.getComputedStyle(this.shadowRoot.host),t=(parseFloat(e.width),parseFloat(e.height));this._updateConfiguratorPosition(20,window.innerHeight-t-20),this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._browser_shell_size=0,this._spanning="none",this.foldWidth=0,this._preview=this.shadowRoot.querySelector("#preview"),this._preview_container=this.shadowRoot.querySelector("#preview-container"),this._device=this.shadowRoot.querySelector("#device"),this._frame=this.shadowRoot.querySelector("#frame"),this._device_hinge=this.shadowRoot.querySelector("#device-hinge"),this._updateFoldablesFeature(),this._currentOrientation="none",this._deviceType=A.Dual,document.addEventListener("keyup",this._handleKeyUp,!1),console.log("Device Pixel Ratio : "+window.devicePixelRatio)}_handleAsusSpanning(){console.log(window.innerHeight),window.innerHeight>752?(this.spanning="single-fold-horizontal",this.foldWidth=30,this._updateFoldablesFeature(),setTimeout(()=>{for(const e of document.styleSheets)if(e.ownerNode.className==="__foldables_sheet__"){this._addZenbookVariables(e);break}for(const e of this._frame.contentDocument.styleSheets)if(e.ownerNode.className==="__foldables_sheet__"){this._addZenbookVariables(e);break}},200)):(this.spanning="none",this.foldWidth=0,this._updateFoldablesFeature()),this._currentOrientation=this.spanning}_addZenbookVariables(e){e.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}",e.cssRules.length)}get foldWidth(){return this._fold_width}set foldWidth(e){this._fold_width=Math.max(0,e)}_orientationChanged(e){const t=this._orientation_select.selectedIndex;this.spanning=this._orientation_select[t].value,this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor()}_applyVerticalRotation(){this._frame.style.width="calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))",this._frame.style.height="var(--device-screen1-height)",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) translateX(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor))"),this._frame.style.transform="",this._frame.style.top="calc(var(--device-border) + var(--device-bezel-vertical))",this._frame.style.left="calc(var(--device-bezel-horizontal) + var(--device-border))"}_applyHorizontalRotation(){this._frame.style.transform="rotate(-90deg) translateX(-100%)",this._frame.style.width="var(--device-screen1-height)",this._frame.style.height="calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))",this._isFullscreen?(this._preview.style.left="50%",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-50%)"):(this._preview.style.left="",this._preview.style.transform="scale(var(--scale-factor)) rotate(90deg) translateY(-100%)")}_updatePreviewRotation(){switch(this.spanning!=this._currentOrientation&&(this._preview.style.transition="transform 0.7s ease-in-out",this._preview.addEventListener("transitionend",this._rotationFinished)),this._currentOrientation=this.spanning,this.spanning){case"none":this._currentDevice==="asus"?this._applyHorizontalRotation():this._applyVerticalRotation();break;case"single-fold-vertical":this._applyVerticalRotation();break;case"single-fold-horizontal":this._applyHorizontalRotation()}}get spanning(){return this._spanning}set spanning(e){let t=this._spanning;switch(e){case"none":case"single-fold-vertical":this._orientation_select.selectedIndex=0;break;case"single-fold-horizontal":this._orientation_select.selectedIndex=1;break;default:e="none",this._orientation_select.selectedIndex=0}this._spanning=e,this.requestUpdate("spanning",t)}_deviceTypeChanged(e){const t=this._device_type_select.selectedIndex,i=this._device_type_select[t].value;switch(window.removeEventListener("resize",this._resizeHandler),this._resizeHandler=null,this.spanning==="none"&&(this._currentOrientation=this.spanning="single-fold-vertical"),i){case"custom":this._seam_container.style.display="flex",this._orientation_select.disabled=!1,this._seam_slider.disabled=!1,this._seam_slider.layout(),this.foldWidth=24,this._deviceType=A.Dual,this._currentDevice="custom";break;case"neo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=A.Dual,this.foldWidth=24,this._currentDevice="neo";break;case"duo":this._orientation_select.disabled=!1,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=A.Dual,this.foldWidth=28,this._currentDevice="duo",this._frame.contentWindow.location.reload(!0);break;case"asus":this._resizeHandler=this._debounce(this._onResize,200),window.addEventListener("resize",this._resizeHandler),this._deviceType=A.Dual,this._handleAsusSpanning(),this._currentDevice="asus",this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none";break;case"hsb":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!1,this._deviceType=A.Foldable,this._seam_slider.layout(),this.foldWidth=114,this._currentDevice="hsb";break;case"fold":this._orientation_select.disabled=!1,this._seam_container.style.display="flex",this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._deviceType=A.Foldable,this._seam_slider.layout(),this.foldWidth=10,this._currentDevice="fold";break;default:this._orientation_select.disabled=!0,this._seam_slider.disabled=!0,this._seam_container.style.display="none",this._currentOrientation=this.spanning="none",this._currentDevice="duo",this.foldWidth=0,this._deviceType=A.Dual}this._updatePreviewConfiguration(),this._updateFoldablesFeature()}_calculateAndApplyScaleFactor(){const e=window.getComputedStyle(this._preview_container),t=window.getComputedStyle(this._device),i=parseInt(e.width,10),s=parseInt(e.height,10);let o=parseInt(t.width,10),r=parseInt(t.height,10),n=1;if(this._currentOrientation=="single-fold-horizontal"&&(o=parseInt(t.height,10),r=parseInt(t.width,10)),r>s||o>i){const a=s/r,u=i/o;n=u<a?u:a}this.shadowRoot.host.style.setProperty("--scale-factor",Math.trunc(100*n)/100)}_updatePreviewConfiguration(){switch(this._currentDevice){case"neo":this.shadowRoot.host.style.setProperty("--device-screen1-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","960px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","960px"),this.shadowRoot.host.style.setProperty("--device-fold-width","24px");break;case"custom":case"duo":this.shadowRoot.host.style.setProperty("--device-screen1-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","450px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","600px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","600px"),this.shadowRoot.host.style.setProperty("--device-fold-width","28px");break;case"fold":this.shadowRoot.host.style.setProperty("--device-screen1-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","614px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","861px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","861px"),this.shadowRoot.host.style.setProperty("--device-fold-width","10px");break;case"asus":this.shadowRoot.host.style.setProperty("--device-screen1-width","440px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","720px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1396px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1396px"),this.shadowRoot.host.style.setProperty("--device-fold-width","30px");break;case"hsb":this.shadowRoot.host.style.setProperty("--device-screen1-width","1280px"),this.shadowRoot.host.style.setProperty("--device-screen2-width","1280px"),this.shadowRoot.host.style.setProperty("--device-screen1-height","1920px"),this.shadowRoot.host.style.setProperty("--device-screen2-height","1920px"),this.shadowRoot.host.style.setProperty("--device-fold-width","114px")}this._deviceType===A.Foldable?(this._device_hinge.classList.add("fold"),this._device_hinge.classList.remove("hinge")):(this._device_hinge.classList.remove("fold"),this._device_hinge.classList.add("hinge")),this._updatePreviewRotation(),this._calculateAndApplyScaleFactor()}_updateFoldablesFeature(){const e=new ve;e.foldSize=this.foldWidth,e.spanning=this.spanning,this._seam_slider.value=this.foldWidth}_debounce(e,t){let i;return function(){clearTimeout(i),i=setTimeout(()=>e.apply(this,arguments),t)}}_toggleFullscreen(){this._isFullscreen=!this._isFullscreen,this._isFullscreen?(this.shadowRoot.host.style.transform="",this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.classList.add("fullscreen")):(this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.add("configurator"),this._updateConfiguratorPosition(this._offset_x,this._offset_y)),this._updatePreviewConfiguration()}_closeConfigurator(){this.shadowRoot.host.style.visibility="hidden",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="hidden"}_showMiniConfigurator(){this._isFullscreen&&this._toggleFullscreen(),this.shadowRoot.host.classList.remove("fullscreen"),this.shadowRoot.host.classList.remove("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="none",this._preview.style.display="none",this._mini_configurator.style.visibility="visible",this._configurator.style.visibility="hidden",this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x,this._lastMiniConfiguratorPosition.y)}_showConfigurator(){this._frame.src||(this._frame.src=window.location.href),this._lastMiniConfiguratorPosition={x:this._offset_x,y:this._offset_y},this.shadowRoot.host.classList.add("configurator"),this.shadowRoot.host.style.visibility="visible",this._seam_slider.style.display="block",this._preview.style.display="flex",this._mini_configurator.style.visibility="hidden",this._configurator.style.visibility="visible";let e=this._offset_x,t=this._offset_y;const i=window.getComputedStyle(this.shadowRoot.host),s=parseFloat(i.width),o=parseFloat(i.height);this._offset_y+o>=window.innerHeight&&(t=window.innerHeight-o),this._offset_x+s>=window.innerWidth&&(e=window.innerWidth-s),this._updateConfiguratorPosition(e,t),this._updatePreviewConfiguration()}_updateConfiguratorPosition(e,t){this._offset_x=e,this._offset_y=t,this.shadowRoot.host.style.transform="translate3d("+e+"px, "+t+"px, 0)"}_toggleSpanning(){this.spanning!="none"?this._device_type_select.selectedIndex=0:this._device_type_select.selectedIndex=2,this._deviceTypeChanged()}_changeOrientation(){this.spanning!=="none"&&(this.spanning==="single-fold-vertical"?this.spanning="single-fold-horizontal":this.spanning="single-fold-vertical",this._updatePreviewRotation(),this._updateFoldablesFeature(),this._calculateAndApplyScaleFactor())}render(){return I`
    <div id="mini-configurator">
      <div class="header-background header" id="mini-configurator-header">Foldable Configurator</div>
      <div class="icon-row">
        <splitview-icon @click="${this._toggleSpanning}" class="${this.spanning!="none"?"toggle":""}"></splitview-icon>
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
    </div>`}}c(Te,"styles",te`
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
  `),customElements.define("foldable-device-configurator",Te);export{A as DeviceType,Te as FoldableDeviceConfigurator};
