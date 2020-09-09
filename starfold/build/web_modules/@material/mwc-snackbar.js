import{d as N,f as g,M as k,_ as r,q as E,p as m,B as w,b as v,g as x,c as C}from"../common/class-map-dfb09cbe.js";import{d as R,h as L,c as M}from"../common/lit-element-aad803a2.js";/**
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
*/const u=i=>(t,e)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const n=t.constructor._observers;t.constructor._observers=new Map,n.forEach((a,s)=>t.constructor._observers.set(s,a))}}else{t.constructor._observers=new Map;const n=t.updated;t.updated=function(a){n.call(this,a),a.forEach((s,o)=>{const S=this.constructor._observers,_=S.get(o);_!==void 0&&_.call(this,this[o],s)})}}t.constructor._observers.set(e,i)};/**
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
 */var c={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},b={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},d={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
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
 */var T=c.OPENING,y=c.OPEN,I=c.CLOSING,D=b.REASON_ACTION,f=b.REASON_DISMISS,p=function(i){N(t,i);function t(e){var n=i.call(this,g(g({},t.defaultAdapter),e))||this;return n.isOpen_=!1,n.animationFrame_=0,n.animationTimer_=0,n.autoDismissTimer_=0,n.autoDismissTimeoutMs_=d.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,n.closeOnEscape_=!0,n}return Object.defineProperty(t,"cssClasses",{get:function(){return c},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return b},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){return},announce:function(){return},notifyClosed:function(){return},notifyClosing:function(){return},notifyOpened:function(){return},notifyOpening:function(){return},removeClass:function(){return}}},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter.removeClass(T),this.adapter.removeClass(y),this.adapter.removeClass(I)},t.prototype.open=function(){var e=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.removeClass(I),this.adapter.addClass(T),this.adapter.announce(),this.runNextAnimationFrame_(function(){e.adapter.addClass(y),e.animationTimer_=setTimeout(function(){var n=e.getTimeoutMs();e.handleAnimationTimerEnd_(),e.adapter.notifyOpened(),n!==d.INDETERMINATE&&(e.autoDismissTimer_=setTimeout(function(){e.close(f)},n))},d.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},t.prototype.close=function(e){var n=this;if(e===void 0&&(e=""),!this.isOpen_)return;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter.notifyClosing(e),this.adapter.addClass(c.CLOSING),this.adapter.removeClass(c.OPEN),this.adapter.removeClass(c.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(function(){n.handleAnimationTimerEnd_(),n.adapter.notifyClosed(e)},d.SNACKBAR_ANIMATION_CLOSE_TIME_MS)},t.prototype.isOpen=function(){return this.isOpen_},t.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},t.prototype.setTimeoutMs=function(e){var n=d.MIN_AUTO_DISMISS_TIMEOUT_MS,a=d.MAX_AUTO_DISMISS_TIMEOUT_MS,s=d.INDETERMINATE;if(e===d.INDETERMINATE||e<=a&&e>=n)this.autoDismissTimeoutMs_=e;else throw new Error(`
        timeoutMs must be an integer in the range `+n+"–"+a+`
        (or `+s+" to disable), but got '"+e+"'")},t.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},t.prototype.setCloseOnEscape=function(e){this.closeOnEscape_=e},t.prototype.handleKeyDown=function(e){var n=e.key==="Escape"||e.keyCode===27;n&&this.getCloseOnEscape()&&this.close(f)},t.prototype.handleActionButtonClick=function(e){this.close(D)},t.prototype.handleActionIconClick=function(e){this.close(f)},t.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},t.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(c.OPENING),this.adapter.removeClass(c.CLOSING)},t.prototype.runNextAnimationFrame_=function(e){var n=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){n.animationFrame_=0,clearTimeout(n.animationTimer_),n.animationTimer_=setTimeout(e,0)})},t}(k);/**
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
*/const{ARIA_LIVE_LABEL_TEXT_ATTR:O}=p.strings,{ARIA_LIVE_DELAY_MS:F}=p.numbers,A=new WeakMap,H=R((i,t)=>e=>{if(!t)return;let n=A.get(e);if(n===void 0){const o=document.createElement("div");o.setAttribute("class","mdc-snackbar__label"),o.setAttribute("role","status"),o.setAttribute("aria-live","polite"),o.textContent=i,e.endNode.parentNode.insertBefore(o,e.endNode),n={labelEl:o,timerId:null},A.set(e,n);return}const a=n,s=a.labelEl;s.setAttribute("aria-live","off"),s.textContent="",s.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',s.setAttribute(O,i),a.timerId!==null&&clearTimeout(a.timerId),a.timerId=window.setTimeout(()=>{a.timerId=null,s.setAttribute("aria-live","polite"),s.removeAttribute(O),s.textContent=i},F)}),{OPENING_EVENT:U,OPENED_EVENT:W,CLOSING_EVENT:P,CLOSED_EVENT:G}=p.strings;class l extends w{constructor(){super(...arguments);this.mdcFoundationClass=p,this.open=!1,this.timeoutMs=5e3,this.closeOnEscape=!1,this.labelText="",this.stacked=!1,this.leading=!1,this.reason=""}render(){const i={"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading};return L`
      <div class="mdc-snackbar ${v(i)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${H(this.labelText,this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},x(this.mdcRoot)),{announce:()=>{},notifyClosed:i=>{this.dispatchEvent(new CustomEvent(G,{bubbles:!0,cancelable:!0,detail:{reason:i}}))},notifyClosing:i=>{this.open=!1,this.dispatchEvent(new CustomEvent(P,{bubbles:!0,cancelable:!0,detail:{reason:i}}))},notifyOpened:()=>{this.dispatchEvent(new CustomEvent(W,{bubbles:!0,cancelable:!0}))},notifyOpening:()=>{this.open=!0,this.dispatchEvent(new CustomEvent(U,{bubbles:!0,cancelable:!0}))}})}show(){this.open=!0}close(i=""){this.reason=i,this.open=!1}firstUpdated(){super.firstUpdated(),this.open&&this.mdcFoundation.open()}_handleKeydown(i){this.mdcFoundation.handleKeyDown(i)}_handleActionClick(i){this.mdcFoundation.handleActionButtonClick(i)}_handleDismissClick(i){this.mdcFoundation.handleActionIconClick(i)}}r([E(".mdc-snackbar")],l.prototype,"mdcRoot",void 0),r([E(".mdc-snackbar__label")],l.prototype,"labelElement",void 0),r([m({type:Boolean,reflect:!0}),u(function(i){this.mdcFoundation&&(i?this.mdcFoundation.open():(this.mdcFoundation.close(this.reason),this.reason=""))})],l.prototype,"open",void 0),r([u(function(i){this.mdcFoundation.setTimeoutMs(i)}),m({type:Number})],l.prototype,"timeoutMs",void 0),r([u(function(i){this.mdcFoundation.setCloseOnEscape(i)}),m({type:Boolean})],l.prototype,"closeOnEscape",void 0),r([m({type:String})],l.prototype,"labelText",void 0),r([m({type:Boolean})],l.prototype,"stacked",void 0),r([m({type:Boolean})],l.prototype,"leading",void 0);/**
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
*/const B=M`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:rgba(255,255,255,.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc}.mdc-snackbar__action:hover::before{opacity:.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss{color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss::before,.mdc-snackbar__dismiss::after{background-color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss:hover::before{opacity:.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,.mdc-snackbar__dismiss.mdc-snackbar__dismiss img{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var(--mdc-snackbar-action-color, #bb86fc)}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),slot[name=dismiss]::slotted(mwc-icon-button)[dir=rtl]{margin-left:0;margin-right:8px}`;let h=class extends l{};h.styles=B,h=r([C("mwc-snackbar")],h);export{h as Snackbar};
