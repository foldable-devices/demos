import{_ as h,p as l,c as q}from"../common/foundation-20f6cb99.js";import{d as r,n as m,N as s,h as t}from"../common/lit-html-ec56d68b.js";import{c as n,t as u,L as v}from"../common/lit-element-11ef2908.js";import{s as w,M as x}from"../common/foundation-693a2bf7.js";/**
 * @license
 * Copyright 2018 Google Inc.
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
 */function y(a,c){var d=a.matches||a.webkitMatchesSelector||a.msMatchesSelector;return d.call(a,c)}/**
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
 */function i(a){return a===void 0&&(a=window),z(a)?{passive:!0}:!1}function z(a){a===void 0&&(a=window);var c=!1;try{var d={get passive(){return c=!0,!1}},g=function(){};a.document.addEventListener("test",g,d),a.document.removeEventListener("test",g,d)}catch(e){c=!1}return c}/**
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
*/const A=n`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`;/**
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
*/const B=w(window);class C{constructor(a){this.foundation=a}startPress(){this.foundation.activate()}endPress(){this.foundation.deactivate()}startFocus(){this.foundation.handleFocus()}endFocus(){this.foundation.handleBlur()}destroy(){this.foundation.destroy()}setUnbounded(a){this.foundation.setUnbounded(a)}}const D=navigator.userAgent.match(/Safari/);let o=!1;const E=()=>{o=!0;const a=document.createElement("style"),c=new s({templateFactory:u});c.appendInto(a),c.setValue(A),c.commit(),document.head.appendChild(a)},F=a=>{D&&!o&&E();const c=a.surfaceNode,d=a.interactionNode||c;d.getRootNode()!==c.getRootNode()&&(d.style.position===""&&(d.style.position="relative"));const g={browserSupportsCssVars:()=>B,isUnbounded:()=>a.unbounded===void 0?!0:a.unbounded,isSurfaceActive:()=>y(d,":active"),isSurfaceDisabled:()=>Boolean(d.hasAttribute("disabled")),addClass:b=>c.classList.add(b),removeClass:b=>c.classList.remove(b),containsEventTarget:b=>d.contains(b),registerInteractionHandler:(b,f)=>d.addEventListener(b,f,i()),deregisterInteractionHandler:(b,f)=>d.removeEventListener(b,f,i()),registerDocumentInteractionHandler:(b,f)=>document.documentElement.addEventListener(b,f,i()),deregisterDocumentInteractionHandler:(b,f)=>document.documentElement.removeEventListener(b,f,i()),registerResizeHandler:b=>window.addEventListener("resize",b),deregisterResizeHandler:b=>window.removeEventListener("resize",b),updateCssVariable:(b,f)=>c.style.setProperty(b,f),computeBoundingRect:()=>c.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})},e=new x(g);return e.init(),new C(e)},p=new WeakMap(),G=r((a={})=>c=>{const d=c.committer.element,g=a.interactionNode||d;let e=c.value;const b=p.get(e);b!==void 0&&b!==g&&(e.destroy(),e=m),e===m?(e=F(Object.assign({},a,{surfaceNode:d})),p.set(e,g),c.setValue(e)):(a.unbounded!==void 0&&e.setUnbounded(a.unbounded),a.disabled!==void 0&&e.setUnbounded(a.disabled)),a.active===!0?e.startPress():a.active===!1&&e.endPress()});class j extends v{constructor(){super(...arguments);this.disabled=!1,this.icon="",this.label=""}render(){return t`<button
    .ripple="${G()}"
    class="mdc-icon-button"
    aria-label="${this.label||this.icon}"
    ?disabled="${this.disabled}">
    <i class="material-icons">${this.icon}</i>
    <slot></slot>
  </button>`}}h([l({type:Boolean,reflect:!0})],j.prototype,"disabled",void 0),h([l({type:String})],j.prototype,"icon",void 0),h([l({type:String})],j.prototype,"label",void 0);/**
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
*/const H=n`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000}.mdc-icon-button:hover::before{opacity:.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc((var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2)}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}.mdc-ripple-upgraded:focus::before,.mdc-ripple-upgraded:focus::after{background-color:currentColor;background-color:var(--mdc-theme-on-primary, currentColor);opacity:0.12;opacity:var(--mdc-icon-button-ripple-opacity, 0.12)}`;/**
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
*/let k=class a extends j{};k.styles=H,k=h([q("mwc-icon-button")],k);export{k as IconButton};
