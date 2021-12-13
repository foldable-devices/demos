import { b } from './lit-html-a2fc150a.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
},
      e = t => (...e) => ({
  _$litDirective$: t,
  values: e
});

class i {
  constructor(t) {}

  get _$AU() {
    return this._$AM._$AU;
  }

  _$AT(t, e, i) {
    this._$Ct = t, this._$AM = e, this._$Ci = i;
  }

  _$AS(t, e) {
    return this.update(t, e);
  }

  update(t, e) {
    return this.render(...e);
  }

}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const o = e(class extends i {
  constructor(t$1) {
    var i;
    if (super(t$1), t$1.type !== t.ATTRIBUTE || "class" !== t$1.name || (null === (i = t$1.strings) || void 0 === i ? void 0 : i.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }

  render(t) {
    return " " + Object.keys(t).filter(i => t[i]).join(" ") + " ";
  }

  update(i, [s]) {
    var r, o;

    if (void 0 === this.st) {
      this.st = new Set(), void 0 !== i.strings && (this.et = new Set(i.strings.join(" ").split(/\s/).filter(t => "" !== t)));

      for (const t in s) s[t] && !(null === (r = this.et) || void 0 === r ? void 0 : r.has(t)) && this.st.add(t);

      return this.render(s);
    }

    const e = i.element.classList;
    this.st.forEach(t => {
      t in s || (e.remove(t), this.st.delete(t));
    });

    for (const t in s) {
      const i = !!s[t];
      i === this.st.has(t) || (null === (o = this.et) || void 0 === o ? void 0 : o.has(t)) || (i ? (e.add(t), this.st.add(t)) : (e.remove(t), this.st.delete(t)));
    }

    return b;
  }

});

export { e, i, o, t };
