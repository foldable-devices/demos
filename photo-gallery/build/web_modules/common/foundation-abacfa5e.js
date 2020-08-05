import{L as o}from"./lit-element-dfc47780.js";/*! *****************************************************************************
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
***************************************************************************** */var h=function(b,a){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var e in d)d.hasOwnProperty(e)&&(c[e]=d[e])},h(b,a)};function p(b,a){h(b,a);function c(){this.constructor=b}b.prototype=a===null?Object.create(a):(c.prototype=a.prototype,new c())}var i=function(){return i=Object.assign||function b(a){for(var c,d=1,e=arguments.length;d<e;d++){c=arguments[d];for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(a[f]=c[f])}return a},i.apply(this,arguments)};function q(b,a,c,d){var e=arguments.length,f=e<3?a:d===null?d=Object.getOwnPropertyDescriptor(a,c):d,g;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")f=Reflect.decorate(b,a,c,d);else for(var j=b.length-1;j>=0;j--)(g=b[j])&&(f=(e<3?g(f):e>3?g(a,c,f):g(a,c))||f);return e>3&&f&&Object.defineProperty(a,c,f),f}/**
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
 */const r=(b,a)=>(window.customElements.define(b,a),a),s=(b,a)=>{const{kind:c,elements:d}=a;return{kind:c,elements:d,finisher(e){window.customElements.define(b,e)}}},t=b=>a=>typeof a==="function"?r(b,a):s(b,a),u=(b,a)=>a.kind==="method"&&a.descriptor&&!("value"in a.descriptor)?Object.assign(Object.assign({},a),{finisher(c){c.createProperty(a.key,b)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof a.initializer==="function"&&(this[a.key]=a.initializer.call(this))},finisher(c){c.createProperty(a.key,b)}},v=(b,a,c)=>{a.constructor.createProperty(c,b)};function k(b){return(a,c)=>c!==void 0?v(b,a,c):u(b,a)}function w(b){return k({attribute:!1,hasChanged:b===null||b===void 0?void 0:b.hasChanged})}function x(b){return(a,c)=>{const d={get(){return this.renderRoot.querySelector(b)},enumerable:!0,configurable:!0};return c!==void 0?l(d,a,c):m(d,a)}}function y(b){return(a,c)=>{const d={async get(){return await this.updateComplete,this.renderRoot.querySelector(b)},enumerable:!0,configurable:!0};return c!==void 0?l(d,a,c):m(d,a)}}const l=(b,a,c)=>{Object.defineProperty(a,c,b)},m=(b,a)=>({kind:"method",placement:"prototype",key:a.key,descriptor:b}),z=(b,a)=>Object.assign(Object.assign({},a),{finisher(c){Object.assign(c.prototype[a.key],b)}}),A=(b,a,c)=>{Object.assign(a[c],b)};function B(b){return(a,c)=>c!==void 0?A(b,a,c):z(b,a)}/**
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
*/function C(b){return{addClass:a=>{b.classList.add(a)},removeClass:a=>{b.classList.remove(a)},hasClass:a=>b.classList.contains(a)}}const n=()=>{},D={get passive(){return!1}};document.addEventListener("x",n,D),document.removeEventListener("x",n);/**
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
*/class E extends o{createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}/**
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
 */var F=function(){function b(a){a===void 0&&(a={}),this.adapter=a}return Object.defineProperty(b,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(b,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(b,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(b,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),b.prototype.init=function(){},b.prototype.destroy=function(){},b}();export{E as B,F as M,q as _,y as a,p as b,t as c,i as d,B as e,C as f,w as i,k as p,x as q};
