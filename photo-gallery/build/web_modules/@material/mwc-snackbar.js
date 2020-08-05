import{b as y,d as r,M as z,_ as e,q as s,p as k,B as A,f as B,c as C}from"../common/foundation-abacfa5e.js";import{d as D,h as E}from"../common/lit-html-cb7f9ca3.js";import{c as F}from"../common/lit-element-dfc47780.js";import{classMap as G}from"../lit-html/directives/class-map.js";import{o}from"../common/observer-306f3f70.js";/**
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
 */var f={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},p={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},g={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
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
 */var t=f.OPENING,u=f.OPEN,v=f.CLOSING,H=p.REASON_ACTION,q=p.REASON_DISMISS,m=function(c){y(d,c);function d(a){var b=c.call(this,r(r({},d.defaultAdapter),a))||this;return b.isOpen_=!1,b.animationFrame_=0,b.animationTimer_=0,b.autoDismissTimer_=0,b.autoDismissTimeoutMs_=g.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,b.closeOnEscape_=!0,b}return Object.defineProperty(d,"cssClasses",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(d,"strings",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(d,"numbers",{get:function(){return g},enumerable:!0,configurable:!0}),Object.defineProperty(d,"defaultAdapter",{get:function(){return{addClass:function(){return},announce:function(){return},notifyClosed:function(){return},notifyClosing:function(){return},notifyOpened:function(){return},notifyOpening:function(){return},removeClass:function(){return}}},enumerable:!0,configurable:!0}),d.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter.removeClass(t),this.adapter.removeClass(u),this.adapter.removeClass(v)},d.prototype.open=function(){var a=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.removeClass(v),this.adapter.addClass(t),this.adapter.announce(),this.runNextAnimationFrame_(function(){a.adapter.addClass(u),a.animationTimer_=setTimeout(function(){var b=a.getTimeoutMs();a.handleAnimationTimerEnd_(),a.adapter.notifyOpened(),b!==g.INDETERMINATE&&(a.autoDismissTimer_=setTimeout(function(){a.close(q)},b))},g.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},d.prototype.close=function(a){var b=this;a===void 0&&(a="");if(!this.isOpen_)return;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter.notifyClosing(a),this.adapter.addClass(f.CLOSING),this.adapter.removeClass(f.OPEN),this.adapter.removeClass(f.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(function(){b.handleAnimationTimerEnd_(),b.adapter.notifyClosed(a)},g.SNACKBAR_ANIMATION_CLOSE_TIME_MS)},d.prototype.isOpen=function(){return this.isOpen_},d.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},d.prototype.setTimeoutMs=function(a){var b=g.MIN_AUTO_DISMISS_TIMEOUT_MS,j=g.MAX_AUTO_DISMISS_TIMEOUT_MS,i=g.INDETERMINATE;if(a===g.INDETERMINATE||a<=j&&a>=b)this.autoDismissTimeoutMs_=a;else throw new Error(`
        timeoutMs must be an integer in the range `+b+"–"+j+`
        (or `+i+" to disable), but got '"+a+"'")},d.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},d.prototype.setCloseOnEscape=function(a){this.closeOnEscape_=a},d.prototype.handleKeyDown=function(a){var b=a.key==="Escape"||a.keyCode===27;b&&this.getCloseOnEscape()&&this.close(q)},d.prototype.handleActionButtonClick=function(a){this.close(H)},d.prototype.handleActionIconClick=function(a){this.close(q)},d.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},d.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(f.OPENING),this.adapter.removeClass(f.CLOSING)},d.prototype.runNextAnimationFrame_=function(a){var b=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){b.animationFrame_=0,clearTimeout(b.animationTimer_),b.animationTimer_=setTimeout(a,0)})},d}(z);/**
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
*/const{ARIA_LIVE_LABEL_TEXT_ATTR:w}=m.strings,{ARIA_LIVE_DELAY_MS:I}=m.numbers,x=new WeakMap(),J=D((c,d)=>a=>{if(!d)return;let b=x.get(a);if(b===void 0){const l=document.createElement("div");l.setAttribute("class","mdc-snackbar__label"),l.setAttribute("role","status"),l.setAttribute("aria-live","polite"),l.textContent=c,a.endNode.parentNode.insertBefore(l,a.endNode),b={labelEl:l,timerId:null},x.set(a,b);return}const j=b,i=j.labelEl;i.setAttribute("aria-live","off"),i.textContent="",i.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',i.setAttribute(w,c),j.timerId!==null&&clearTimeout(j.timerId),j.timerId=window.setTimeout(()=>{j.timerId=null,i.setAttribute("aria-live","polite"),i.removeAttribute(w),i.textContent=c},I)}),{OPENING_EVENT:K,OPENED_EVENT:L,CLOSING_EVENT:M,CLOSED_EVENT:N}=m.strings;class h extends A{constructor(){super(...arguments);this.mdcFoundationClass=m,this.open=!1,this.timeoutMs=5e3,this.closeOnEscape=!1,this.labelText="",this.stacked=!1,this.leading=!1,this.reason=""}render(){const c={"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading};return E`
      <div class="mdc-snackbar ${G(c)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${J(this.labelText,this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},B(this.mdcRoot)),{announce:()=>{},notifyClosed:c=>{this.dispatchEvent(new CustomEvent(N,{bubbles:!0,cancelable:!0,detail:{reason:c}}))},notifyClosing:c=>{this.open=!1,this.dispatchEvent(new CustomEvent(M,{bubbles:!0,cancelable:!0,detail:{reason:c}}))},notifyOpened:()=>{this.dispatchEvent(new CustomEvent(L,{bubbles:!0,cancelable:!0}))},notifyOpening:()=>{this.open=!0,this.dispatchEvent(new CustomEvent(K,{bubbles:!0,cancelable:!0}))}})}show(){this.open=!0}close(c=""){this.reason=c,this.open=!1}firstUpdated(){super.firstUpdated(),this.open&&this.mdcFoundation.open()}_handleKeydown(c){this.mdcFoundation.handleKeyDown(c)}_handleActionClick(c){this.mdcFoundation.handleActionButtonClick(c)}_handleDismissClick(c){this.mdcFoundation.handleActionIconClick(c)}}e([s(".mdc-snackbar")],h.prototype,"mdcRoot",void 0),e([s(".mdc-snackbar__label")],h.prototype,"labelElement",void 0),e([k({type:Boolean,reflect:!0}),o(function(c){this.mdcFoundation&&(c?this.mdcFoundation.open():(this.mdcFoundation.close(this.reason),this.reason=""))})],h.prototype,"open",void 0),e([o(function(c){this.mdcFoundation.setTimeoutMs(c)}),k({type:Number})],h.prototype,"timeoutMs",void 0),e([o(function(c){this.mdcFoundation.setCloseOnEscape(c)}),k({type:Boolean})],h.prototype,"closeOnEscape",void 0),e([k({type:String})],h.prototype,"labelText",void 0),e([k({type:Boolean})],h.prototype,"stacked",void 0),e([k({type:Boolean})],h.prototype,"leading",void 0);/**
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
*/const O=F`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:rgba(255,255,255,.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc}.mdc-snackbar__action:hover::before{opacity:.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss{color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss::before,.mdc-snackbar__dismiss::after{background-color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss:hover::before{opacity:.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,.mdc-snackbar__dismiss.mdc-snackbar__dismiss img{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var(--mdc-snackbar-action-color, #bb86fc)}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),slot[name=dismiss]::slotted(mwc-icon-button)[dir=rtl]{margin-left:0;margin-right:8px}`;let n=class c extends h{};n.styles=O,n=e([C("mwc-snackbar")],n);export{n as Snackbar};
