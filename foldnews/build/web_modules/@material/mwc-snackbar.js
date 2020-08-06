import{d as z,f as r,M as A,_ as g,q as s,p as l,B,b as C,g as D,c as E}from"../common/class-map-d7725032.js";import{d as F,h as G,c as H}from"../common/lit-element-9c695caa.js";/**
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
*/const o=d=>(b,a)=>{if(b.constructor._observers){if(!b.constructor.hasOwnProperty("_observers")){const c=b.constructor._observers;b.constructor._observers=new Map(),c.forEach((e,f)=>b.constructor._observers.set(f,e))}}else{b.constructor._observers=new Map();const c=b.updated;b.updated=function(e){c.call(this,e),e.forEach((f,k)=>{const Q=this.constructor._observers,y=Q.get(k);y!==void 0&&y.call(this,this[k],f)})}}b.constructor._observers.set(a,d)};/**
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
 */var h={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},p={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},i={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
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
 */var t=h.OPENING,u=h.OPEN,v=h.CLOSING,I=p.REASON_ACTION,q=p.REASON_DISMISS,m=function(d){z(b,d);function b(a){var c=d.call(this,r(r({},b.defaultAdapter),a))||this;return c.isOpen_=!1,c.animationFrame_=0,c.animationTimer_=0,c.autoDismissTimer_=0,c.autoDismissTimeoutMs_=i.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,c.closeOnEscape_=!0,c}return Object.defineProperty(b,"cssClasses",{get:function(){return h},enumerable:!0,configurable:!0}),Object.defineProperty(b,"strings",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(b,"numbers",{get:function(){return i},enumerable:!0,configurable:!0}),Object.defineProperty(b,"defaultAdapter",{get:function(){return{addClass:function(){return},announce:function(){return},notifyClosed:function(){return},notifyClosing:function(){return},notifyOpened:function(){return},notifyOpening:function(){return},removeClass:function(){return}}},enumerable:!0,configurable:!0}),b.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter.removeClass(t),this.adapter.removeClass(u),this.adapter.removeClass(v)},b.prototype.open=function(){var a=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.removeClass(v),this.adapter.addClass(t),this.adapter.announce(),this.runNextAnimationFrame_(function(){a.adapter.addClass(u),a.animationTimer_=setTimeout(function(){var c=a.getTimeoutMs();a.handleAnimationTimerEnd_(),a.adapter.notifyOpened(),c!==i.INDETERMINATE&&(a.autoDismissTimer_=setTimeout(function(){a.close(q)},c))},i.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},b.prototype.close=function(a){var c=this;a===void 0&&(a="");if(!this.isOpen_)return;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter.notifyClosing(a),this.adapter.addClass(h.CLOSING),this.adapter.removeClass(h.OPEN),this.adapter.removeClass(h.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(function(){c.handleAnimationTimerEnd_(),c.adapter.notifyClosed(a)},i.SNACKBAR_ANIMATION_CLOSE_TIME_MS)},b.prototype.isOpen=function(){return this.isOpen_},b.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},b.prototype.setTimeoutMs=function(a){var c=i.MIN_AUTO_DISMISS_TIMEOUT_MS,e=i.MAX_AUTO_DISMISS_TIMEOUT_MS,f=i.INDETERMINATE;if(a===i.INDETERMINATE||a<=e&&a>=c)this.autoDismissTimeoutMs_=a;else throw new Error(`
        timeoutMs must be an integer in the range `+c+"–"+e+`
        (or `+f+" to disable), but got '"+a+"'")},b.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},b.prototype.setCloseOnEscape=function(a){this.closeOnEscape_=a},b.prototype.handleKeyDown=function(a){var c=a.key==="Escape"||a.keyCode===27;c&&this.getCloseOnEscape()&&this.close(q)},b.prototype.handleActionButtonClick=function(a){this.close(I)},b.prototype.handleActionIconClick=function(a){this.close(q)},b.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},b.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(h.OPENING),this.adapter.removeClass(h.CLOSING)},b.prototype.runNextAnimationFrame_=function(a){var c=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){c.animationFrame_=0,clearTimeout(c.animationTimer_),c.animationTimer_=setTimeout(a,0)})},b}(A);/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const{ARIA_LIVE_LABEL_TEXT_ATTR:w}=m.strings,{ARIA_LIVE_DELAY_MS:J}=m.numbers,x=new WeakMap(),K=F((d,b)=>a=>{if(!b)return;let c=x.get(a);if(c===void 0){const k=document.createElement("div");k.setAttribute("class","mdc-snackbar__label"),k.setAttribute("role","status"),k.setAttribute("aria-live","polite"),k.textContent=d,a.endNode.parentNode.insertBefore(k,a.endNode),c={labelEl:k,timerId:null},x.set(a,c);return}const e=c,f=e.labelEl;f.setAttribute("aria-live","off"),f.textContent="",f.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',f.setAttribute(w,d),e.timerId!==null&&clearTimeout(e.timerId),e.timerId=window.setTimeout(()=>{e.timerId=null,f.setAttribute("aria-live","polite"),f.removeAttribute(w),f.textContent=d},J)}),{OPENING_EVENT:L,OPENED_EVENT:M,CLOSING_EVENT:N,CLOSED_EVENT:O}=m.strings;class j extends B{constructor(){super(...arguments);this.mdcFoundationClass=m,this.open=!1,this.timeoutMs=5e3,this.closeOnEscape=!1,this.labelText="",this.stacked=!1,this.leading=!1,this.reason=""}render(){const d={"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading};return G`
      <div class="mdc-snackbar ${C(d)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${K(this.labelText,this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},D(this.mdcRoot)),{announce:()=>{},notifyClosed:d=>{this.dispatchEvent(new CustomEvent(O,{bubbles:!0,cancelable:!0,detail:{reason:d}}))},notifyClosing:d=>{this.open=!1,this.dispatchEvent(new CustomEvent(N,{bubbles:!0,cancelable:!0,detail:{reason:d}}))},notifyOpened:()=>{this.dispatchEvent(new CustomEvent(M,{bubbles:!0,cancelable:!0}))},notifyOpening:()=>{this.open=!0,this.dispatchEvent(new CustomEvent(L,{bubbles:!0,cancelable:!0}))}})}show(){this.open=!0}close(d=""){this.reason=d,this.open=!1}firstUpdated(){super.firstUpdated(),this.open&&this.mdcFoundation.open()}_handleKeydown(d){this.mdcFoundation.handleKeyDown(d)}_handleActionClick(d){this.mdcFoundation.handleActionButtonClick(d)}_handleDismissClick(d){this.mdcFoundation.handleActionIconClick(d)}}g([s(".mdc-snackbar")],j.prototype,"mdcRoot",void 0),g([s(".mdc-snackbar__label")],j.prototype,"labelElement",void 0),g([l({type:Boolean,reflect:!0}),o(function(d){this.mdcFoundation&&(d?this.mdcFoundation.open():(this.mdcFoundation.close(this.reason),this.reason=""))})],j.prototype,"open",void 0),g([o(function(d){this.mdcFoundation.setTimeoutMs(d)}),l({type:Number})],j.prototype,"timeoutMs",void 0),g([o(function(d){this.mdcFoundation.setCloseOnEscape(d)}),l({type:Boolean})],j.prototype,"closeOnEscape",void 0),g([l({type:String})],j.prototype,"labelText",void 0),g([l({type:Boolean})],j.prototype,"stacked",void 0),g([l({type:Boolean})],j.prototype,"leading",void 0);/**
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
*/const P=H`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:rgba(255,255,255,.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc}.mdc-snackbar__action:hover::before{opacity:.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss{color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss::before,.mdc-snackbar__dismiss::after{background-color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss:hover::before{opacity:.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,.mdc-snackbar__dismiss.mdc-snackbar__dismiss img{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var(--mdc-snackbar-action-color, #bb86fc)}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),slot[name=dismiss]::slotted(mwc-icon-button)[dir=rtl]{margin-left:0;margin-right:8px}`;let n=class d extends j{};n.styles=P,n=g([E("mwc-snackbar")],n);export{n as Snackbar};
