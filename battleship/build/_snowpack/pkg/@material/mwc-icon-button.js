import { p as property, q as query, b as queryAsync, i as internalProperty, e as eventOptions, L as LitElement, h as html, c as css, a as customElement } from '../common/class-map-f4bfc9ed.js';
import { R as RippleHandlers } from '../common/ripple-handlers-56213382.js';

/*! *****************************************************************************
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
***************************************************************************** */
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
@license
Copyright 2021 Google Inc. All Rights Reserved.

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
// tslint:disable:no-any
// eslint-disable @typescript-eslint/no-explicit-any

/**
 * TypeScript version of the decorator
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators
 */
function tsDecorator(prototype, name, descriptor) {
  const constructor = prototype.constructor;

  if (!descriptor) {
    /**
     * lit-element uses internal properties with two leading underscores to
     * provide storage for accessors
     */
    const litInternalPropertyKey = `__${name}`;
    descriptor = constructor.getPropertyDescriptor(name, litInternalPropertyKey);

    if (!descriptor) {
      throw new Error('@ariaProperty must be used after a @property decorator');
    }
  } // descriptor must exist at this point, reassign so typescript understands


  const propDescriptor = descriptor;
  let attribute = '';

  if (!propDescriptor.set) {
    throw new Error(`@ariaProperty requires a setter for ${name}`);
  }

  const wrappedDescriptor = {
    configurable: true,
    enumerable: true,

    set(value) {
      if (attribute === '') {
        const options = constructor.getPropertyOptions(name); // the attribute will be a string at runtime

        attribute = options.attribute;
      }

      if (this.hasAttribute(attribute)) {
        this.removeAttribute(attribute);
      }

      propDescriptor.set.call(this, value);
    }

  };

  if (propDescriptor.get) {
    wrappedDescriptor.get = function () {
      return propDescriptor.get.call(this);
    };
  }

  return wrappedDescriptor;
}
/**
 * A property decorator proxies an aria attribute to an internal node
 *
 * This decorator is only intended for use with ARIA attributes, such as `role`
 * and `aria-label` due to screenreader needs.
 *
 * Upon first render, `@ariaProperty` will remove the attribute from the host
 * element to prevent screenreaders from reading the host instead of the
 * internal node.
 *
 * This decorator should only be used for non-Symbol public fields decorated
 * with `@property`, or on a setter with an optional getter.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @ariaProperty
 *   @property({ type: String, attribute: 'aria-label' })
 *   ariaLabel?: string;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */


function ariaProperty(protoOrDescriptor, name, descriptor) {
  if (name !== undefined) {
    return tsDecorator(protoOrDescriptor, name, descriptor);
  } else {
    throw new Error('@ariaProperty only supports TypeScript Decorators');
  }
}

/** @soyCompatible */

class IconButtonBase extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.icon = '';
    this.shouldRenderRipple = false;
    this.rippleHandlers = new RippleHandlers(() => {
      this.shouldRenderRipple = true;
      return this.ripple;
    });
  }
  /** @soyTemplate */


  renderRipple() {
    return this.shouldRenderRipple ? html`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` : '';
  }

  focus() {
    const buttonElement = this.buttonElement;

    if (buttonElement) {
      this.rippleHandlers.startFocus();
      buttonElement.focus();
    }
  }

  blur() {
    const buttonElement = this.buttonElement;

    if (buttonElement) {
      this.rippleHandlers.endFocus();
      buttonElement.blur();
    }
  }
  /** @soyTemplate */


  render() {
    return html`<button
        class="mdc-icon-button"
        aria-label="${this.ariaLabel || this.icon}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span
      ><slot></slot
    ></span>
  </button>`;
  }

  handleRippleMouseDown(event) {
    const onUp = () => {
      window.removeEventListener('mouseup', onUp);
      this.handleRippleDeactivate();
    };

    window.addEventListener('mouseup', onUp);
    this.rippleHandlers.startPress(event);
  }

  handleRippleTouchStart(event) {
    this.rippleHandlers.startPress(event);
  }

  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }

  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }

  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }

  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }

  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }

}

__decorate([property({
  type: Boolean,
  reflect: true
})], IconButtonBase.prototype, "disabled", void 0);

__decorate([property({
  type: String
})], IconButtonBase.prototype, "icon", void 0);

__decorate([ariaProperty, property({
  type: String,
  attribute: 'aria-label'
})], IconButtonBase.prototype, "ariaLabel", void 0);

__decorate([query('button')], IconButtonBase.prototype, "buttonElement", void 0);

__decorate([queryAsync('mwc-ripple')], IconButtonBase.prototype, "ripple", void 0);

__decorate([internalProperty()], IconButtonBase.prototype, "shouldRenderRipple", void 0);

__decorate([eventOptions({
  passive: true
})], IconButtonBase.prototype, "handleRippleMouseDown", null);

__decorate([eventOptions({
  passive: true
})], IconButtonBase.prototype, "handleRippleTouchStart", null);

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
const style = css`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;

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
/** @soyCompatible */

let IconButton = class IconButton extends IconButtonBase {};
IconButton.styles = style;
IconButton = __decorate([customElement('mwc-icon-button')], IconButton);

export { IconButton };
