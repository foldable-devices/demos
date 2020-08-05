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
 */const C=typeof window!=="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,D=(a,c,b=null)=>{for(;c!==b;){const d=c.nextSibling;a.removeChild(c),c=d}};/**
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
 */const n=`{{lit-${String(Math.random()).slice(2)}}}`,E=`<!--${n}-->`,F=new RegExp(`${n}|${E}`),t="$lit$";class P{constructor(a,c){this.parts=[],this.element=c;const b=[],d=[],g=document.createTreeWalker(c.content,133,null,!1);let h=0,f=-1,i=0;const{strings:v,values:{length:Z}}=a;for(;i<Z;){const e=g.nextNode();if(e===null){g.currentNode=d.pop();continue}f++;if(e.nodeType===1){if(e.hasAttributes()){const k=e.attributes,{length:w}=k;let p=0;for(let l=0;l<w;l++)G(k[l].name,t)&&p++;for(;p-- >0;){const l=v[i],r=x.exec(l)[2],s=r.toLowerCase()+t,q=e.getAttribute(s);e.removeAttribute(s);const m=q.split(F);this.parts.push({type:"attribute",index:f,name:r,strings:m}),i+=m.length-1}}e.tagName==="TEMPLATE"&&(d.push(e),g.currentNode=e.content)}else if(e.nodeType===3){const k=e.data;if(k.indexOf(n)>=0){const w=e.parentNode,p=k.split(F),l=p.length-1;for(let r=0;r<l;r++){let s,q=p[r];if(q==="")s=o();else{const m=x.exec(q);m!==null&&G(m[2],t)&&(q=q.slice(0,m.index)+m[1]+m[2].slice(0,-t.length)+m[3]),s=document.createTextNode(q)}w.insertBefore(s,e),this.parts.push({type:"node",index:++f})}p[l]===""?(w.insertBefore(o(),e),b.push(e)):e.data=p[l],i+=l}}else if(e.nodeType===8)if(e.data===n){const k=e.parentNode;(e.previousSibling===null||f===h)&&(f++,k.insertBefore(o(),e)),h=f,this.parts.push({type:"node",index:f}),e.nextSibling===null?e.data="":(b.push(e),f--),i++}else{let k=-1;for(;(k=e.data.indexOf(n,k+1))!==-1;)this.parts.push({type:"node",index:-1}),i++}}for(const e of b)e.parentNode.removeChild(e)}}const G=(a,c)=>{const b=a.length-c.length;return b>=0&&a.slice(b)===c},H=a=>a.index!==-1,o=()=>document.createComment(""),x=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */const I=new WeakMap(),Q=a=>(...c)=>{const b=a(...c);return I.set(b,!0),b},u=a=>typeof a==="function"&&I.has(a);/**
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
 */const j={},J={};/**
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
 */class y{constructor(a,c,b){this.__parts=[],this.template=a,this.processor=c,this.options=b}update(a){let c=0;for(const b of this.__parts)b!==void 0&&b.setValue(a[c]),c++;for(const b of this.__parts)b!==void 0&&b.commit()}_clone(){const a=C?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),c=[],b=this.template.parts,d=document.createTreeWalker(a,133,null,!1);let g=0,h=0,f,i=d.nextNode();for(;g<b.length;){f=b[g];if(!H(f)){this.__parts.push(void 0),g++;continue}for(;h<f.index;)h++,i.nodeName==="TEMPLATE"&&(c.push(i),d.currentNode=i.content),(i=d.nextNode())===null&&(d.currentNode=c.pop(),i=d.nextNode());if(f.type==="node"){const v=this.processor.handleTextExpression(this.options);v.insertAfterNode(i.previousSibling),this.__parts.push(v)}else this.__parts.push(...this.processor.handleAttributeExpressions(i,f.name,f.strings,this.options));g++}return C&&(document.adoptNode(a),customElements.upgrade(a)),a}}/**
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
 */const R=` ${n} `;class K{constructor(a,c,b,d){this.strings=a,this.values=c,this.type=b,this.processor=d}getHTML(){const a=this.strings.length-1;let c="",b=!1;for(let d=0;d<a;d++){const g=this.strings[d],h=g.lastIndexOf("<!--");b=(h>-1||b)&&g.indexOf("-->",h+1)===-1;const f=x.exec(g);f===null?c+=g+(b?R:E):c+=g.substr(0,f.index)+f[1]+f[2]+t+f[3]+n}return c+=this.strings[a],c}getTemplateElement(){const a=document.createElement("template");return a.innerHTML=this.getHTML(),a}}/**
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
 */const z=a=>a===null||!(typeof a==="object"||typeof a==="function"),L=a=>Array.isArray(a)||!!(a&&a[Symbol.iterator]);class M{constructor(a,c,b){this.dirty=!0,this.element=a,this.name=c,this.strings=b,this.parts=[];for(let d=0;d<b.length-1;d++)this.parts[d]=this._createPart()}_createPart(){return new A(this)}_getValue(){const a=this.strings,c=a.length-1;let b="";for(let d=0;d<c;d++){b+=a[d];const g=this.parts[d];if(g!==void 0){const h=g.value;if(z(h)||!L(h))b+=typeof h==="string"?h:String(h);else for(const f of h)b+=typeof f==="string"?f:String(f)}}return b+=a[c],b}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class A{constructor(a){this.value=void 0,this.committer=a}setValue(a){a!==j&&(!z(a)||a!==this.value)&&(this.value=a,u(a)||(this.committer.dirty=!0))}commit(){for(;u(this.value);){const a=this.value;this.value=j,a(this)}if(this.value===j)return;this.committer.commit()}}class B{constructor(a){this.value=void 0,this.__pendingValue=void 0,this.options=a}appendInto(a){this.startNode=a.appendChild(o()),this.endNode=a.appendChild(o())}insertAfterNode(a){this.startNode=a,this.endNode=a.nextSibling}appendIntoPart(a){a.__insert(this.startNode=o()),a.__insert(this.endNode=o())}insertAfterPart(a){a.__insert(this.startNode=o()),this.endNode=a.endNode,a.endNode=this.startNode}setValue(a){this.__pendingValue=a}commit(){if(this.startNode.parentNode===null)return;for(;u(this.__pendingValue);){const c=this.__pendingValue;this.__pendingValue=j,c(this)}const a=this.__pendingValue;if(a===j)return;z(a)?a!==this.value&&this.__commitText(a):a instanceof K?this.__commitTemplateResult(a):a instanceof Node?this.__commitNode(a):L(a)?this.__commitIterable(a):a===J?(this.value=J,this.clear()):this.__commitText(a)}__insert(a){this.endNode.parentNode.insertBefore(a,this.endNode)}__commitNode(a){if(this.value===a)return;this.clear(),this.__insert(a),this.value=a}__commitText(a){const c=this.startNode.nextSibling;a=a==null?"":a;const b=typeof a==="string"?a:String(a);c===this.endNode.previousSibling&&c.nodeType===3?c.data=b:this.__commitNode(document.createTextNode(b)),this.value=a}__commitTemplateResult(a){const c=this.options.templateFactory(a);if(this.value instanceof y&&this.value.template===c)this.value.update(a.values);else{const b=new y(c,a.processor,this.options),d=b._clone();b.update(a.values),this.__commitNode(d),this.value=b}}__commitIterable(a){Array.isArray(this.value)||(this.value=[],this.clear());const c=this.value;let b=0,d;for(const g of a)d=c[b],d===void 0&&(d=new B(this.options),c.push(d),b===0?d.appendIntoPart(this):d.insertAfterPart(c[b-1])),d.setValue(g),d.commit(),b++;b<c.length&&(c.length=b,this.clear(d&&d.endNode))}clear(a=this.startNode){D(this.startNode.parentNode,a.nextSibling,this.endNode)}}class S{constructor(a,c,b){this.value=void 0,this.__pendingValue=void 0;if(b.length!==2||b[0]!==""||b[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=a,this.name=c,this.strings=b}setValue(a){this.__pendingValue=a}commit(){for(;u(this.__pendingValue);){const c=this.__pendingValue;this.__pendingValue=j,c(this)}if(this.__pendingValue===j)return;const a=!!this.__pendingValue;this.value!==a&&(a?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=a),this.__pendingValue=j}}class T extends M{constructor(a,c,b){super(a,c,b);this.single=b.length===2&&b[0]===""&&b[1]===""}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends A{}let O=!1;(()=>{try{const a={get capture(){return O=!0,!1}};window.addEventListener("test",a,a),window.removeEventListener("test",a,a)}catch(a){}})();class U{constructor(a,c,b){this.value=void 0,this.__pendingValue=void 0,this.element=a,this.eventName=c,this.eventContext=b,this.__boundHandleEvent=d=>this.handleEvent(d)}setValue(a){this.__pendingValue=a}commit(){for(;u(this.__pendingValue);){const g=this.__pendingValue;this.__pendingValue=j,g(this)}if(this.__pendingValue===j)return;const a=this.__pendingValue,c=this.value,b=a==null||c!=null&&(a.capture!==c.capture||a.once!==c.once||a.passive!==c.passive),d=a!=null&&(c==null||b);b&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),d&&(this.__options=V(a),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=a,this.__pendingValue=j}handleEvent(a){typeof this.value==="function"?this.value.call(this.eventContext||this.element,a):this.value.handleEvent(a)}}const V=a=>a&&(O?{capture:a.capture,passive:a.passive,once:a.once}:a.capture);/**
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
 */class W{handleAttributeExpressions(a,c,b,d){const g=c[0];if(g==="."){const f=new T(a,c.slice(1),b);return f.parts}if(g==="@")return[new U(a,c.slice(1),d.eventContext)];if(g==="?")return[new S(a,c.slice(1),b)];const h=new M(a,c,b);return h.parts}handleTextExpression(a){return new B(a)}}const X=new W();/**
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
 */typeof window!=="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const Y=(a,...c)=>new K(a,c,"html",X);export{A,B as N,N as P,P as T,y as a,Q as d,Y as h,H as i,n as m,j as n,D as r};
