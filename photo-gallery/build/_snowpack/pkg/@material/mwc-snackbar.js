import { a as __extends, c as __assign, M as MDCFoundation, _ as __decorate, i as i$1, e as e$2, B as BaseElement, d as addHasRemoveClass, n as n$1 } from '../common/foundation-b0bcffa8.js';
import { o as observer } from '../common/observer-b1dbd565.js';
import { r as r$2 } from '../common/lit-element-83875204.js';
import { w, p } from '../common/lit-html-a2fc150a.js';
import { i, t, e as e$1, o as o$1 } from '../common/class-map-72acdb61.js';

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
var cssClasses = {
  CLOSING: 'mdc-snackbar--closing',
  OPEN: 'mdc-snackbar--open',
  OPENING: 'mdc-snackbar--opening'
};
var strings = {
  ACTION_SELECTOR: '.mdc-snackbar__action',
  ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text',
  CLOSED_EVENT: 'MDCSnackbar:closed',
  CLOSING_EVENT: 'MDCSnackbar:closing',
  DISMISS_SELECTOR: '.mdc-snackbar__dismiss',
  LABEL_SELECTOR: '.mdc-snackbar__label',
  OPENED_EVENT: 'MDCSnackbar:opened',
  OPENING_EVENT: 'MDCSnackbar:opening',
  REASON_ACTION: 'action',
  REASON_DISMISS: 'dismiss',
  SURFACE_SELECTOR: '.mdc-snackbar__surface'
};
var numbers = {
  DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5000,
  INDETERMINATE: -1,
  MAX_AUTO_DISMISS_TIMEOUT_MS: 10000,
  MIN_AUTO_DISMISS_TIMEOUT_MS: 4000,
  // These variables need to be kept in sync with the values in _variables.scss.
  SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
  SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,

  /**
   * Number of milliseconds to wait between temporarily clearing the label text
   * in the DOM and subsequently restoring it. This is necessary to force IE 11
   * to pick up the `aria-live` content change and announce it to the user.
   */
  ARIA_LIVE_DELAY_MS: 1000
};

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
var OPENING = cssClasses.OPENING,
    OPEN = cssClasses.OPEN,
    CLOSING = cssClasses.CLOSING;
var REASON_ACTION = strings.REASON_ACTION,
    REASON_DISMISS = strings.REASON_DISMISS;

var MDCSnackbarFoundation =
/** @class */
function (_super) {
  __extends(MDCSnackbarFoundation, _super);

  function MDCSnackbarFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCSnackbarFoundation.defaultAdapter), adapter)) || this;

    _this.opened = false;
    _this.animationFrame = 0;
    _this.animationTimer = 0;
    _this.autoDismissTimer = 0;
    _this.autoDismissTimeoutMs = numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
    _this.closeOnEscape = true;
    return _this;
  }

  Object.defineProperty(MDCSnackbarFoundation, "cssClasses", {
    get: function () {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation, "strings", {
    get: function () {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation, "numbers", {
    get: function () {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        announce: function () {
          return undefined;
        },
        notifyClosed: function () {
          return undefined;
        },
        notifyClosing: function () {
          return undefined;
        },
        notifyOpened: function () {
          return undefined;
        },
        notifyOpening: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        }
      };
    },
    enumerable: false,
    configurable: true
  });

  MDCSnackbarFoundation.prototype.destroy = function () {
    this.clearAutoDismissTimer();
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
    clearTimeout(this.animationTimer);
    this.animationTimer = 0;
    this.adapter.removeClass(OPENING);
    this.adapter.removeClass(OPEN);
    this.adapter.removeClass(CLOSING);
  };

  MDCSnackbarFoundation.prototype.open = function () {
    var _this = this;

    this.clearAutoDismissTimer();
    this.opened = true;
    this.adapter.notifyOpening();
    this.adapter.removeClass(CLOSING);
    this.adapter.addClass(OPENING);
    this.adapter.announce(); // Wait a frame once display is no longer "none", to establish basis for animation

    this.runNextAnimationFrame(function () {
      _this.adapter.addClass(OPEN);

      _this.animationTimer = setTimeout(function () {
        var timeoutMs = _this.getTimeoutMs();

        _this.handleAnimationTimerEnd();

        _this.adapter.notifyOpened();

        if (timeoutMs !== numbers.INDETERMINATE) {
          _this.autoDismissTimer = setTimeout(function () {
            _this.close(REASON_DISMISS);
          }, timeoutMs);
        }
      }, numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS);
    });
  };
  /**
   * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
   *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
   *     client-specific values may also be used if desired.
   */


  MDCSnackbarFoundation.prototype.close = function (reason) {
    var _this = this;

    if (reason === void 0) {
      reason = '';
    }

    if (!this.opened) {
      // Avoid redundant close calls (and events), e.g. repeated interactions as the snackbar is animating closed
      return;
    }

    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
    this.clearAutoDismissTimer();
    this.opened = false;
    this.adapter.notifyClosing(reason);
    this.adapter.addClass(cssClasses.CLOSING);
    this.adapter.removeClass(cssClasses.OPEN);
    this.adapter.removeClass(cssClasses.OPENING);
    clearTimeout(this.animationTimer);
    this.animationTimer = setTimeout(function () {
      _this.handleAnimationTimerEnd();

      _this.adapter.notifyClosed(reason);
    }, numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
  };

  MDCSnackbarFoundation.prototype.isOpen = function () {
    return this.opened;
  };

  MDCSnackbarFoundation.prototype.getTimeoutMs = function () {
    return this.autoDismissTimeoutMs;
  };

  MDCSnackbarFoundation.prototype.setTimeoutMs = function (timeoutMs) {
    // Use shorter variable names to make the code more readable
    var minValue = numbers.MIN_AUTO_DISMISS_TIMEOUT_MS;
    var maxValue = numbers.MAX_AUTO_DISMISS_TIMEOUT_MS;
    var indeterminateValue = numbers.INDETERMINATE;

    if (timeoutMs === numbers.INDETERMINATE || timeoutMs <= maxValue && timeoutMs >= minValue) {
      this.autoDismissTimeoutMs = timeoutMs;
    } else {
      throw new Error("\n        timeoutMs must be an integer in the range " + minValue + "\u2013" + maxValue + "\n        (or " + indeterminateValue + " to disable), but got '" + timeoutMs + "'");
    }
  };

  MDCSnackbarFoundation.prototype.getCloseOnEscape = function () {
    return this.closeOnEscape;
  };

  MDCSnackbarFoundation.prototype.setCloseOnEscape = function (closeOnEscape) {
    this.closeOnEscape = closeOnEscape;
  };

  MDCSnackbarFoundation.prototype.handleKeyDown = function (evt) {
    var isEscapeKey = evt.key === 'Escape' || evt.keyCode === 27;

    if (isEscapeKey && this.getCloseOnEscape()) {
      this.close(REASON_DISMISS);
    }
  };

  MDCSnackbarFoundation.prototype.handleActionButtonClick = function (_evt) {
    this.close(REASON_ACTION);
  };

  MDCSnackbarFoundation.prototype.handleActionIconClick = function (_evt) {
    this.close(REASON_DISMISS);
  };

  MDCSnackbarFoundation.prototype.clearAutoDismissTimer = function () {
    clearTimeout(this.autoDismissTimer);
    this.autoDismissTimer = 0;
  };

  MDCSnackbarFoundation.prototype.handleAnimationTimerEnd = function () {
    this.animationTimer = 0;
    this.adapter.removeClass(cssClasses.OPENING);
    this.adapter.removeClass(cssClasses.CLOSING);
  };
  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */


  MDCSnackbarFoundation.prototype.runNextAnimationFrame = function (callback) {
    var _this = this;

    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = requestAnimationFrame(function () {
      _this.animationFrame = 0;
      clearTimeout(_this.animationTimer);
      _this.animationTimer = setTimeout(callback, 0);
    });
  };

  return MDCSnackbarFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const r = o => void 0 === o.strings;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const e = (i, t) => {
  var s, o;
  const n = i._$AN;
  if (void 0 === n) return !1;

  for (const i of n) null === (o = (s = i)._$AO) || void 0 === o || o.call(s, t, !1), e(i, t);

  return !0;
},
      o = i => {
  let t, s;

  do {
    if (void 0 === (t = i._$AM)) break;
    s = t._$AN, s.delete(i), i = t;
  } while (0 === (null == s ? void 0 : s.size));
},
      n = i => {
  for (let t; t = i._$AM; i = t) {
    let s = t._$AN;
    if (void 0 === s) t._$AN = s = new Set();else if (s.has(i)) break;
    s.add(i), l(t);
  }
};

function r$1(i) {
  void 0 !== this._$AN ? (o(this), this._$AM = i, n(this)) : this._$AM = i;
}

function h(i, t = !1, s = 0) {
  const n = this._$AH,
        r = this._$AN;
  if (void 0 !== r && 0 !== r.size) if (t) {
    if (Array.isArray(n)) for (let i = s; i < n.length; i++) e(n[i], !1), o(n[i]);else null != n && (e(n, !1), o(n));
  } else e(this, i);
}

const l = i => {
  var t$1, e, o, n;
  i.type == t.CHILD && (null !== (t$1 = (o = i)._$AP) && void 0 !== t$1 || (o._$AP = h), null !== (e = (n = i)._$AQ) && void 0 !== e || (n._$AQ = r$1));
};

class d extends i {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }

  _$AT(i, t, s) {
    super._$AT(i, t, s), n(this), this.isConnected = i._$AU;
  }

  _$AO(i, t = !0) {
    var s, n;
    i !== this.isConnected && (this.isConnected = i, i ? null === (s = this.reconnected) || void 0 === s || s.call(this) : null === (n = this.disconnected) || void 0 === n || n.call(this)), t && (e(this, i), o(this));
  }

  setValue(t) {
    if (r(this._$Ct)) this._$Ct._$AI(t, this);else {
      const i = [...this._$Ct._$AH];
      i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
    }
  }

  disconnected() {}

  reconnected() {}

}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const {
  ARIA_LIVE_DELAY_MS
} = MDCSnackbarFoundation.numbers;
/**
 * A lit directive implementation of @material/mdc-snackbar/util.ts#announce,
 * which does some tricks to ensure that snackbar labels will be handled
 * correctly by screen readers.
 *
 * The existing MDC announce util function is difficult to use directly here,
 * because Lit can crash when DOM that it is managing changes outside of its
 * purvue. In this case, we would render our labelText as the text content of
 * the label div, but the MDC announce function then clears that text content,
 * and resets it after a timeout (see below for why). We do the same thing here,
 * but in a way that fits into Lit's lifecycle.
 *
 * TODO(aomarks) Investigate whether this can be simplified; but to do that we
 * first need testing infrastructure to verify that it remains compatible with
 * screen readers. For example, can we just create an entirely new label node
 * every time we open or labelText changes? If not, and the async text/::before
 * swap is strictly required, can we at elast make this directive more generic
 * (e.g. so that we don't hard-code the name of the label class).
 */

class AccessibleSnackbarLabel extends d {
  constructor(partInfo) {
    super(partInfo);
    this.labelEl = null;
    this.timerId = null;
    this.previousPart = null;

    if (partInfo.type !== t.CHILD) {
      throw new Error('AccessibleSnackbarLabel only supports child parts.');
    }
  }

  update(part, [labelText, isOpen]) {
    var _a;

    if (!isOpen) {
      // We never need to do anything if we're closed, even if the label also
      // changed in this batch of changes. We'll fully reset the label text
      // whenever we next open.
      return;
    }

    if (this.labelEl === null) {
      // Create the label element once, the first time we open.
      const wrapperEl = document.createElement('div');
      const labelTemplate = p`<div class="mdc-snackbar__label" role="status" aria-live="polite"></div>`;
      w(labelTemplate, wrapperEl);
      const labelEl = wrapperEl.firstElementChild;
      labelEl.textContent = labelText; // endNode can't be a Document, so it must have a parent.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      (_a = part.endNode) === null || _a === void 0 ? void 0 : _a.parentNode.insertBefore(labelEl, part.endNode);
      this.labelEl = labelEl; // No need to do anything more for ARIA the first time we open. We just
      // created the element with the current label, so screen readers will
      // detect it fine.

      return labelEl;
    }

    const labelEl = this.labelEl; // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing
    // the message twice.

    labelEl.setAttribute('aria-live', 'off'); // Temporarily clear `textContent` to force a DOM mutation event that will
    // be detected by screen readers. `aria-live` elements are only announced
    // when the element's `textContent` *changes*, so snackbars sent to the
    // browser in the initial HTML response won't be read unless we clear the
    // element's `textContent` first. Similarly, displaying the same snackbar
    // message twice in a row doesn't trigger a DOM mutation event, so screen
    // readers won't announce the second message unless we first clear
    // `textContent`.
    //
    // We have to clear the label text two different ways to make it work in
    // all browsers and screen readers:
    //
    //   1. `textContent = ''` is required for IE11 + JAWS
    //   2. the lit render of `'&nbsp;'` is required for Chrome + JAWS and
    //       NVDA
    //
    // All other browser/screen reader combinations support both methods.
    //
    // The wrapper `<span>` visually hides the space character so that it
    // doesn't cause jank when added/removed. N.B.: Setting `position:
    // absolute`, `opacity: 0`, or `height: 0` prevents Chrome from detecting
    // the DOM change.
    //
    // This technique has been tested in:
    //
    //   * JAWS 2019:
    //       - Chrome 70
    //       - Firefox 60 (ESR)
    //       - IE 11
    //   * NVDA 2018:
    //       - Chrome 70
    //       - Firefox 60 (ESR)
    //       - IE 11
    //   * ChromeVox 53

    labelEl.textContent = ''; // Updating an element using both Lit's `render` as well as setting its
    // `textContent` can cause later renders to throw because setting
    // `textContent` will remove Lit's part marker comments. This directive
    // needs to set `labelEl`'s `textContent` to trigger the expected screen
    // reader behavior, so it needs to avoid `render` for `labelEl` altogether.

    const spaceSpan = document.createElement('span');
    spaceSpan.style.display = 'inline-block';
    spaceSpan.style.width = '0';
    spaceSpan.style.height = '1px';
    spaceSpan.textContent = '\u00A0'; // U+00A0 is &nbsp;

    labelEl.appendChild(spaceSpan); // Prevent visual jank by temporarily displaying the label text in the
    // ::before pseudo-element. CSS generated content is normally announced by
    // screen readers (except in IE 11; see
    // https://tink.uk/accessibility-support-for-css-generated-content/);
    // however, `aria-live` is turned off, so this DOM update will be ignored
    // by screen readers.

    labelEl.setAttribute('data-mdc-snackbar-label-text', labelText);

    if (this.timerId !== null) {
      // We hadn't yet swapped the textContent back in since the last time we
      // opened or changed the label. Cancel that task so we don't clobber the
      // new label.
      clearTimeout(this.timerId);
    }

    this.timerId = window.setTimeout(() => {
      this.timerId = null; // Allow screen readers to announce changes to the DOM again.

      labelEl.setAttribute('aria-live', 'polite'); // Remove the message from the ::before pseudo-element.

      labelEl.removeAttribute('data-mdc-snackbar-label-text'); // Restore the original label text, which will be announced by
      // screen readers.

      labelEl.textContent = labelText;
      this.setValue(this.labelEl);
    }, ARIA_LIVE_DELAY_MS);
    return labelEl;
  }

  render(labelText, isOpen) {
    if (!isOpen) {
      return p``;
    }

    return p`
      <div class="mdc-snackbar__label" role="status" aria-live="polite">${labelText}</div>`;
  }

}

const accessibleSnackbarLabel = e$1(AccessibleSnackbarLabel);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const {
  OPENING_EVENT,
  OPENED_EVENT,
  CLOSING_EVENT,
  CLOSED_EVENT
} = MDCSnackbarFoundation.strings;
class SnackbarBase extends BaseElement {
  constructor() {
    super(...arguments);
    this.mdcFoundationClass = MDCSnackbarFoundation;
    this.open = false;
    this.timeoutMs = 5000;
    this.closeOnEscape = false;
    this.labelText = '';
    this.stacked = false;
    this.leading = false;
    this.reason = '';
  }

  render() {
    const classes = {
      'mdc-snackbar--stacked': this.stacked,
      'mdc-snackbar--leading': this.leading
    };
    return p`
      <div class="mdc-snackbar ${o$1(classes)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${accessibleSnackbarLabel(this.labelText, this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`;
  }

  createAdapter() {
    return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), {
      announce: () => {
        /* We handle announce ourselves with the accessible directive. */
      },
      notifyClosed: reason => {
        this.dispatchEvent(new CustomEvent(CLOSED_EVENT, {
          bubbles: true,
          cancelable: true,
          detail: {
            reason: reason
          }
        }));
      },
      notifyClosing: reason => {
        this.open = false;
        this.dispatchEvent(new CustomEvent(CLOSING_EVENT, {
          bubbles: true,
          cancelable: true,
          detail: {
            reason: reason
          }
        }));
      },
      notifyOpened: () => {
        this.dispatchEvent(new CustomEvent(OPENED_EVENT, {
          bubbles: true,
          cancelable: true
        }));
      },
      notifyOpening: () => {
        this.open = true;
        this.dispatchEvent(new CustomEvent(OPENING_EVENT, {
          bubbles: true,
          cancelable: true
        }));
      }
    });
  }
  /** @export */


  show() {
    this.open = true;
  }
  /** @export */


  close(reason = '') {
    this.reason = reason;
    this.open = false;
  }

  firstUpdated() {
    super.firstUpdated();

    if (this.open) {
      this.mdcFoundation.open();
    }
  }

  _handleKeydown(e) {
    this.mdcFoundation.handleKeyDown(e);
  }

  _handleActionClick(e) {
    this.mdcFoundation.handleActionButtonClick(e);
  }

  _handleDismissClick(e) {
    this.mdcFoundation.handleActionIconClick(e);
  }

}

__decorate([i$1('.mdc-snackbar')], SnackbarBase.prototype, "mdcRoot", void 0);

__decorate([i$1('.mdc-snackbar__label')], SnackbarBase.prototype, "labelElement", void 0);

__decorate([e$2({
  type: Boolean,
  reflect: true
}), observer(function (value) {
  if (this.mdcFoundation) {
    if (value) {
      this.mdcFoundation.open();
    } else {
      this.mdcFoundation.close(this.reason);
      this.reason = '';
    }
  }
})], SnackbarBase.prototype, "open", void 0);

__decorate([observer(function (value) {
  this.mdcFoundation.setTimeoutMs(value);
}), e$2({
  type: Number
})], SnackbarBase.prototype, "timeoutMs", void 0);

__decorate([observer(function (value) {
  this.mdcFoundation.setCloseOnEscape(value);
}), e$2({
  type: Boolean
})], SnackbarBase.prototype, "closeOnEscape", void 0);

__decorate([e$2({
  type: String
})], SnackbarBase.prototype, "labelText", void 0);

__decorate([e$2({
  type: Boolean
})], SnackbarBase.prototype, "stacked", void 0);

__decorate([e$2({
  type: Boolean
})], SnackbarBase.prototype, "leading", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles = r$2`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover::before,.mdc-snackbar__action.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:36px;height:36px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var( --mdc-snackbar-action-color, #bb86fc )}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),::slotted(mwc-icon-buttonslot[name=dismiss][dir=rtl]){margin-left:0;margin-right:8px}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Snackbar = class Snackbar extends SnackbarBase {};
Snackbar.styles = [styles];
Snackbar = __decorate([n$1('mwc-snackbar')], Snackbar);

export { Snackbar };
