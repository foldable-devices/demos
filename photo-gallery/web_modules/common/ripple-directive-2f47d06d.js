import{_ as t,a as e,M as a}from"./foundation-dc06f16c.js";import{e as i,n,N as r,u as s}from"./lit-html-99d404bd.js";import{css as o}from"../lit-element.js";
/**
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
 */
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
 */
function d(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var a={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,a),t.document.removeEventListener("test",i,a)}catch(t){e=!1}return e}
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
 */(t)&&{passive:!0}}var c,u={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},p={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},l={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
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
 */
var _=["touchstart","pointerdown","mousedown","keydown"],v=["touchend","pointerup","mouseup","contextmenu"],m=[],f=function(a){function i(t){var n=a.call(this,e({},i.defaultAdapter,t))||this;return n.activationAnimationHasEnded_=!1,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.fgScale_="0",n.frame_={width:0,height:0},n.initialSize_=0,n.layoutFrame_=0,n.maxRadius_=0,n.unboundedCoords_={left:0,top:0},n.activationState_=n.defaultActivationState_(),n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.activateHandler_=function(t){return n.activate_(t)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n}return t(i,a),Object.defineProperty(i,"cssClasses",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return l},enumerable:!0,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),i.prototype.init=function(){var t=this,e=this.supportsPressRipple_();if(this.registerRootHandlers_(e),e){var a=i.cssClasses,n=a.ROOT,r=a.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.addClass(n),t.adapter_.isUnbounded()&&(t.adapter_.addClass(r),t.layoutInternal_())}))}},i.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(i.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(i.cssClasses.FG_DEACTIVATION));var e=i.cssClasses,a=e.ROOT,n=e.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.removeClass(a),t.adapter_.removeClass(n),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},i.prototype.activate=function(t){this.activate_(t)},i.prototype.deactivate=function(){this.deactivate_()},i.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},i.prototype.setUnbounded=function(t){var e=i.cssClasses.UNBOUNDED;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},i.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.addClass(i.cssClasses.BG_FOCUSED)}))},i.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.removeClass(i.cssClasses.BG_FOCUSED)}))},i.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},i.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},i.prototype.registerRootHandlers_=function(t){var e=this;t&&(_.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},i.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):v.forEach((function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},i.prototype.deregisterRootHandlers_=function(){var t=this;_.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},i.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),v.forEach((function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},i.prototype.removeCssVars_=function(){var t=this,e=i.strings;Object.keys(e).forEach((function(a){0===a.indexOf("VAR_")&&t.adapter_.updateCssVariable(e[a],null)}))},i.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var a=this.activationState_;if(!a.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==t&&i.type!==t.type))a.isActivated=!0,a.isProgrammatic=void 0===t,a.activationEvent=t,a.wasActivatedByPointer=!a.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&m.length>0&&m.some((function(t){return e.adapter_.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(m.push(t.target),this.registerDeactivationHandlers_(t)),a.wasElementMadeActive=this.checkElementMadeActive_(t),a.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){m=[],a.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(a.wasElementMadeActive=e.checkElementMadeActive_(t),a.wasElementMadeActive&&e.animateActivation_()),a.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},i.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},i.prototype.animateActivation_=function(){var t=this,e=i.strings,a=e.VAR_FG_TRANSLATE_START,n=e.VAR_FG_TRANSLATE_END,r=i.cssClasses,s=r.FG_DEACTIVATION,o=r.FG_ACTIVATION,d=i.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",u="";if(!this.adapter_.isUnbounded()){var p=this.getFgTranslationCoordinates_(),l=p.startPoint,_=p.endPoint;c=l.x+"px, "+l.y+"px",u=_.x+"px, "+_.y+"px"}this.adapter_.updateCssVariable(a,c),this.adapter_.updateCssVariable(n,u),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(s),this.adapter_.computeBoundingRect(),this.adapter_.addClass(o),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),d)},i.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,a=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,a){if(!t)return{x:0,y:0};var i,n,r=e.x,s=e.y,o=r+a.left,d=s+a.top;if("touchstart"===t.type){var c=t;i=c.changedTouches[0].pageX-o,n=c.changedTouches[0].pageY-d}else{var u=t;i=u.pageX-o,n=u.pageY-d}return{x:i,y:n}}(a,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},i.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,e=i.cssClasses.FG_DEACTIVATION,a=this.activationState_,n=a.hasDeactivationUXRun,r=a.isActivated;(n||!r)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(e),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter_.removeClass(e)}),l.FG_DEACTIVATION_MS))},i.prototype.rmBoundedActivationClasses_=function(){var t=i.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},i.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),i.numbers.TAP_DELAY_MS)},i.prototype.deactivate_=function(){var t=this,a=this.activationState_;if(a.isActivated){var i=e({},a);a.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(i)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(i),t.resetActivationState_()})))}},i.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,a=t.wasElementMadeActive;(e||a)&&this.runDeactivationUXLogicIfReady_()},i.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var e=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?e:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+i.numbers.PADDING;var a=Math.floor(e*i.numbers.INITIAL_ORIGIN_SCALE);this.adapter_.isUnbounded()&&a%2!=0?this.initialSize_=a-1:this.initialSize_=a,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},i.prototype.updateLayoutCssVars_=function(){var t=i.strings,e=t.VAR_FG_SIZE,a=t.VAR_LEFT,n=t.VAR_TOP,r=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(e,this.initialSize_+"px"),this.adapter_.updateCssVariable(r,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(a,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(n,this.unboundedCoords_.top+"px"))},i}(a);
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
const h=o`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`
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
*/,g=function(t,e){void 0===e&&(e=!1);var a,i=t.CSS;if("boolean"==typeof c&&!e)return c;if(!(i&&"function"==typeof i.supports))return!1;var n=i.supports("--css-vars","yes"),r=i.supports("(--css-vars: yes)")&&i.supports("color","#00000000");return a=n||r,e||(c=a),a}(window),A=navigator.userAgent.match(/Safari/);let y=!1;const C=t=>{A&&!y&&(()=>{y=!0;const t=document.createElement("style"),e=new r({templateFactory:s});e.appendInto(t),e.setValue(h),e.commit(),document.head.appendChild(t)})();const e=t.surfaceNode,a=t.interactionNode||e;a.getRootNode()!==e.getRootNode()&&""===a.style.position&&(a.style.position="relative");const i=new f({browserSupportsCssVars:()=>g,isUnbounded:()=>void 0===t.unbounded||t.unbounded,isSurfaceActive:()=>{return e=":active",((t=a).matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e);var t,e},isSurfaceDisabled:()=>Boolean(a.hasAttribute("disabled")),addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),containsEventTarget:t=>a.contains(t),registerInteractionHandler:(t,e)=>a.addEventListener(t,e,d()),deregisterInteractionHandler:(t,e)=>a.removeEventListener(t,e,d()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,d()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,d()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(t,a)=>e.style.setProperty(t,a),computeBoundingRect:()=>e.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})});return i.init(),i},T=new WeakMap,E=i((t={})=>e=>{const a=e.committer.element,i=t.interactionNode||a;let r=e.value;const s=T.get(r);void 0!==s&&s!==i&&(r.destroy(),r=n),r===n?(r=C(Object.assign({},t,{surfaceNode:a})),T.set(r,i),e.setValue(r)):(void 0!==t.unbounded&&r.setUnbounded(t.unbounded),void 0!==t.disabled&&r.setUnbounded(t.disabled)),!0===t.active?r.activate():!1===t.active&&r.deactivate()});export{E as a,C as r};
//# sourceMappingURL=ripple-directive-2f47d06d.js.map
