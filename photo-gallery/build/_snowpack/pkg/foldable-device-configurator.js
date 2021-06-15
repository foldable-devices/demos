function e(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const t = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
      i = Symbol();

class s {
  constructor(e, t) {
    if (t !== i) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }

  get styleSheet() {
    return t && void 0 === this.t && (this.t = new CSSStyleSheet(), this.t.replaceSync(this.cssText)), this.t;
  }

  toString() {
    return this.cssText;
  }

}

const n = new Map(),
      r = e => {
  let t = n.get(e);
  return void 0 === t && n.set(e, t = new s(e, i)), t;
},
      o = (e, ...t) => {
  const i = 1 === e.length ? e[0] : t.reduce((t, i, n) => t + (e => {
    if (e instanceof s) return e.cssText;
    if ("number" == typeof e) return e;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + e[n + 1], e[0]);
  return r(i);
},
      a = t ? e => e : e => e instanceof CSSStyleSheet ? (e => {
  let t = "";

  for (const i of e.cssRules) t += i.cssText;

  return (e => r("string" == typeof e ? e : e + ""))(t);
})(e) : e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
;

var d, l, c, h;

const u = {
  toAttribute(e, t) {
    switch (t) {
      case Boolean:
        e = e ? "" : null;
        break;

      case Object:
      case Array:
        e = null == e ? e : JSON.stringify(e);
    }

    return e;
  },

  fromAttribute(e, t) {
    let i = e;

    switch (t) {
      case Boolean:
        i = null !== e;
        break;

      case Number:
        i = null === e ? null : Number(e);
        break;

      case Object:
      case Array:
        try {
          i = JSON.parse(e);
        } catch (e) {
          i = null;
        }

    }

    return i;
  }

},
      p = (e, t) => t !== e && (t == t || e == e),
      m = {
  attribute: !0,
  type: String,
  converter: u,
  reflect: !1,
  hasChanged: p
};

class f extends HTMLElement {
  constructor() {
    super(), this.Πi = new Map(), this.Πo = void 0, this.Πl = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this.Πh = null, this.u();
  }

  static addInitializer(e) {
    var t;
    null !== (t = this.v) && void 0 !== t || (this.v = []), this.v.push(e);
  }

  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((t, i) => {
      const s = this.Πp(i, t);
      void 0 !== s && (this.Πm.set(s, i), e.push(s));
    }), e;
  }

  static createProperty(e, t = m) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const i = "symbol" == typeof e ? Symbol() : "__" + e,
            s = this.getPropertyDescriptor(e, i, t);
      void 0 !== s && Object.defineProperty(this.prototype, e, s);
    }
  }

  static getPropertyDescriptor(e, t, i) {
    return {
      get() {
        return this[t];
      },

      set(s) {
        const n = this[e];
        this[t] = s, this.requestUpdate(e, n, i);
      },

      configurable: !0,
      enumerable: !0
    };
  }

  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || m;
  }

  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);

    if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this.Πm = new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties,
            t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];

      for (const i of t) this.createProperty(i, e[i]);
    }

    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }

  static finalizeStyles(e) {
    const t = [];

    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());

      for (const e of i) t.unshift(a(e));
    } else void 0 !== e && t.push(a(e));

    return t;
  }

  static "Πp"(e, t) {
    const i = t.attribute;
    return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0;
  }

  u() {
    var e;
    this.Πg = new Promise(e => this.enableUpdating = e), this.L = new Map(), this.Π_(), this.requestUpdate(), null === (e = this.constructor.v) || void 0 === e || e.forEach(e => e(this));
  }

  addController(e) {
    var t, i;
    (null !== (t = this.ΠU) && void 0 !== t ? t : this.ΠU = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (i = e.hostConnected) || void 0 === i || i.call(e));
  }

  removeController(e) {
    var t;
    null === (t = this.ΠU) || void 0 === t || t.splice(this.ΠU.indexOf(e) >>> 0, 1);
  }

  "Π_"() {
    this.constructor.elementProperties.forEach((e, t) => {
      this.hasOwnProperty(t) && (this.Πi.set(t, this[t]), delete this[t]);
    });
  }

  createRenderRoot() {
    var e;
    const i = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return ((e, i) => {
      t ? e.adoptedStyleSheets = i.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet) : i.forEach(t => {
        const i = document.createElement("style");
        i.textContent = t.cssText, e.appendChild(i);
      });
    })(i, this.constructor.elementStyles), i;
  }

  connectedCallback() {
    var e;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this.ΠU) || void 0 === e || e.forEach(e => {
      var t;
      return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e);
    }), this.Πl && (this.Πl(), this.Πo = this.Πl = void 0);
  }

  enableUpdating(e) {}

  disconnectedCallback() {
    var e;
    null === (e = this.ΠU) || void 0 === e || e.forEach(e => {
      var t;
      return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e);
    }), this.Πo = new Promise(e => this.Πl = e);
  }

  attributeChangedCallback(e, t, i) {
    this.K(e, i);
  }

  "Πj"(e, t, i = m) {
    var s, n;
    const r = this.constructor.Πp(e, i);

    if (void 0 !== r && !0 === i.reflect) {
      const o = (null !== (n = null === (s = i.converter) || void 0 === s ? void 0 : s.toAttribute) && void 0 !== n ? n : u.toAttribute)(t, i.type);
      this.Πh = e, null == o ? this.removeAttribute(r) : this.setAttribute(r, o), this.Πh = null;
    }
  }

  K(e, t) {
    var i, s, n;
    const r = this.constructor,
          o = r.Πm.get(e);

    if (void 0 !== o && this.Πh !== o) {
      const e = r.getPropertyOptions(o),
            a = e.converter,
            d = null !== (n = null !== (s = null === (i = a) || void 0 === i ? void 0 : i.fromAttribute) && void 0 !== s ? s : "function" == typeof a ? a : null) && void 0 !== n ? n : u.fromAttribute;
      this.Πh = o, this[o] = d(t, e.type), this.Πh = null;
    }
  }

  requestUpdate(e, t, i) {
    let s = !0;
    void 0 !== e && (((i = i || this.constructor.getPropertyOptions(e)).hasChanged || p)(this[e], t) ? (this.L.has(e) || this.L.set(e, t), !0 === i.reflect && this.Πh !== e && (void 0 === this.Πk && (this.Πk = new Map()), this.Πk.set(e, i))) : s = !1), !this.isUpdatePending && s && (this.Πg = this.Πq());
  }

  async "Πq"() {
    this.isUpdatePending = !0;

    try {
      for (await this.Πg; this.Πo;) await this.Πo;
    } catch (e) {
      Promise.reject(e);
    }

    const e = this.performUpdate();
    return null != e && (await e), !this.isUpdatePending;
  }

  performUpdate() {
    var e;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this.Πi && (this.Πi.forEach((e, t) => this[t] = e), this.Πi = void 0);
    let t = !1;
    const i = this.L;

    try {
      t = this.shouldUpdate(i), t ? (this.willUpdate(i), null === (e = this.ΠU) || void 0 === e || e.forEach(e => {
        var t;
        return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e);
      }), this.update(i)) : this.Π$();
    } catch (e) {
      throw t = !1, this.Π$(), e;
    }

    t && this.E(i);
  }

  willUpdate(e) {}

  E(e) {
    var t;
    null === (t = this.ΠU) || void 0 === t || t.forEach(e => {
      var t;
      return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }

  "Π$"() {
    this.L = new Map(), this.isUpdatePending = !1;
  }

  get updateComplete() {
    return this.getUpdateComplete();
  }

  getUpdateComplete() {
    return this.Πg;
  }

  shouldUpdate(e) {
    return !0;
  }

  update(e) {
    void 0 !== this.Πk && (this.Πk.forEach((e, t) => this.Πj(t, this[t], e)), this.Πk = void 0), this.Π$();
  }

  updated(e) {}

  firstUpdated(e) {}

}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


var v, _, g, y;

f.finalized = !0, f.elementProperties = new Map(), f.elementStyles = [], f.shadowRootOptions = {
  mode: "open"
}, null === (l = (d = globalThis).reactiveElementPlatformSupport) || void 0 === l || l.call(d, {
  ReactiveElement: f
}), (null !== (c = (h = globalThis).reactiveElementVersions) && void 0 !== c ? c : h.reactiveElementVersions = []).push("1.0.0-rc.2");

const w = globalThis.trustedTypes,
      b = w ? w.createPolicy("lit-html", {
  createHTML: e => e
}) : void 0,
      S = `lit$${(Math.random() + "").slice(9)}$`,
      x = "?" + S,
      C = `<${x}>`,
      k = document,
      E = (e = "") => k.createComment(e),
      P = e => null === e || "object" != typeof e && "function" != typeof e,
      A = Array.isArray,
      T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      R = /-->/g,
      I = />/g,
      N = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      z = /'/g,
      M = /"/g,
      H = /^(?:script|style|textarea)$/i,
      O = (e => (t, ...i) => ({
  _$litType$: e,
  strings: t,
  values: i
}))(1),
      F = Symbol.for("lit-noChange"),
      V = Symbol.for("lit-nothing"),
      U = new WeakMap(),
      L = k.createTreeWalker(k, 129, null, !1);

class D {
  constructor({
    strings: e,
    _$litType$: t
  }, i) {
    let s;
    this.parts = [];
    let n = 0,
        r = 0;

    const o = e.length - 1,
          a = this.parts,
          [d, l] = ((e, t) => {
      const i = e.length - 1,
            s = [];
      let n,
          r = 2 === t ? "<svg>" : "",
          o = T;

      for (let t = 0; t < i; t++) {
        const i = e[t];
        let a,
            d,
            l = -1,
            c = 0;

        for (; c < i.length && (o.lastIndex = c, d = o.exec(i), null !== d);) c = o.lastIndex, o === T ? "!--" === d[1] ? o = R : void 0 !== d[1] ? o = I : void 0 !== d[2] ? (H.test(d[2]) && (n = RegExp("</" + d[2], "g")), o = N) : void 0 !== d[3] && (o = N) : o === N ? ">" === d[0] ? (o = null != n ? n : T, l = -1) : void 0 === d[1] ? l = -2 : (l = o.lastIndex - d[2].length, a = d[1], o = void 0 === d[3] ? N : '"' === d[3] ? M : z) : o === M || o === z ? o = N : o === R || o === I ? o = T : (o = N, n = void 0);

        const h = o === N && e[t + 1].startsWith("/>") ? " " : "";
        r += o === T ? i + C : l >= 0 ? (s.push(a), i.slice(0, l) + "$lit$" + i.slice(l) + S + h) : i + S + (-2 === l ? (s.push(void 0), t) : h);
      }

      const a = r + (e[i] || "<?>") + (2 === t ? "</svg>" : "");
      return [void 0 !== b ? b.createHTML(a) : a, s];
    })(e, t);

    if (this.el = D.createElement(d, i), L.currentNode = this.el.content, 2 === t) {
      const e = this.el.content,
            t = e.firstChild;
      t.remove(), e.append(...t.childNodes);
    }

    for (; null !== (s = L.nextNode()) && a.length < o;) {
      if (1 === s.nodeType) {
        if (s.hasAttributes()) {
          const e = [];

          for (const t of s.getAttributeNames()) if (t.endsWith("$lit$") || t.startsWith(S)) {
            const i = l[r++];

            if (e.push(t), void 0 !== i) {
              const e = s.getAttribute(i.toLowerCase() + "$lit$").split(S),
                    t = /([.?@])?(.*)/.exec(i);
              a.push({
                type: 1,
                index: n,
                name: t[2],
                strings: e,
                ctor: "." === t[1] ? q : "?" === t[1] ? K : "@" === t[1] ? X : W
              });
            } else a.push({
              type: 6,
              index: n
            });
          }

          for (const t of e) s.removeAttribute(t);
        }

        if (H.test(s.tagName)) {
          const e = s.textContent.split(S),
                t = e.length - 1;

          if (t > 0) {
            s.textContent = w ? w.emptyScript : "";

            for (let i = 0; i < t; i++) s.append(e[i], E()), L.nextNode(), a.push({
              type: 2,
              index: ++n
            });

            s.append(e[t], E());
          }
        }
      } else if (8 === s.nodeType) if (s.data === x) a.push({
        type: 2,
        index: n
      });else {
        let e = -1;

        for (; -1 !== (e = s.data.indexOf(S, e + 1));) a.push({
          type: 7,
          index: n
        }), e += S.length - 1;
      }

      n++;
    }
  }

  static createElement(e, t) {
    const i = k.createElement("template");
    return i.innerHTML = e, i;
  }

}

function $(e, t, i = e, s) {
  var n, r, o, a;
  if (t === F) return t;
  let d = void 0 !== s ? null === (n = i.Σi) || void 0 === n ? void 0 : n[s] : i.Σo;
  const l = P(t) ? void 0 : t._$litDirective$;
  return (null == d ? void 0 : d.constructor) !== l && (null === (r = null == d ? void 0 : d.O) || void 0 === r || r.call(d, !1), void 0 === l ? d = void 0 : (d = new l(e), d.T(e, i, s)), void 0 !== s ? (null !== (o = (a = i).Σi) && void 0 !== o ? o : a.Σi = [])[s] = d : i.Σo = d), void 0 !== d && (t = $(e, d.S(e, t.values), d, s)), t;
}

class j {
  constructor(e, t) {
    this.l = [], this.N = void 0, this.D = e, this.M = t;
  }

  u(e) {
    var t;
    const {
      el: {
        content: i
      },
      parts: s
    } = this.D,
          n = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : k).importNode(i, !0);
    L.currentNode = n;
    let r = L.nextNode(),
        o = 0,
        a = 0,
        d = s[0];

    for (; void 0 !== d;) {
      if (o === d.index) {
        let t;
        2 === d.type ? t = new B(r, r.nextSibling, this, e) : 1 === d.type ? t = new d.ctor(r, d.name, d.strings, this, e) : 6 === d.type && (t = new J(r, this, e)), this.l.push(t), d = s[++a];
      }

      o !== (null == d ? void 0 : d.index) && (r = L.nextNode(), o++);
    }

    return n;
  }

  v(e) {
    let t = 0;

    for (const i of this.l) void 0 !== i && (void 0 !== i.strings ? (i.I(e, i, t), t += i.strings.length - 2) : i.I(e[t])), t++;
  }

}

class B {
  constructor(e, t, i, s) {
    this.type = 2, this.N = void 0, this.A = e, this.B = t, this.M = i, this.options = s;
  }

  setConnected(e) {
    var t;
    null === (t = this.P) || void 0 === t || t.call(this, e);
  }

  get parentNode() {
    return this.A.parentNode;
  }

  get startNode() {
    return this.A;
  }

  get endNode() {
    return this.B;
  }

  I(e, t = this) {
    e = $(this, e, t), P(e) ? e === V || null == e || "" === e ? (this.H !== V && this.R(), this.H = V) : e !== this.H && e !== F && this.m(e) : void 0 !== e._$litType$ ? this._(e) : void 0 !== e.nodeType ? this.$(e) : (e => {
      var t;
      return A(e) || "function" == typeof (null === (t = e) || void 0 === t ? void 0 : t[Symbol.iterator]);
    })(e) ? this.g(e) : this.m(e);
  }

  k(e, t = this.B) {
    return this.A.parentNode.insertBefore(e, t);
  }

  $(e) {
    this.H !== e && (this.R(), this.H = this.k(e));
  }

  m(e) {
    const t = this.A.nextSibling;
    null !== t && 3 === t.nodeType && (null === this.B ? null === t.nextSibling : t === this.B.previousSibling) ? t.data = e : this.$(k.createTextNode(e)), this.H = e;
  }

  _(e) {
    var t;
    const {
      values: i,
      _$litType$: s
    } = e,
          n = "number" == typeof s ? this.C(e) : (void 0 === s.el && (s.el = D.createElement(s.h, this.options)), s);
    if ((null === (t = this.H) || void 0 === t ? void 0 : t.D) === n) this.H.v(i);else {
      const e = new j(n, this),
            t = e.u(this.options);
      e.v(i), this.$(t), this.H = e;
    }
  }

  C(e) {
    let t = U.get(e.strings);
    return void 0 === t && U.set(e.strings, t = new D(e)), t;
  }

  g(e) {
    A(this.H) || (this.H = [], this.R());
    const t = this.H;
    let i,
        s = 0;

    for (const n of e) s === t.length ? t.push(i = new B(this.k(E()), this.k(E()), this, this.options)) : i = t[s], i.I(n), s++;

    s < t.length && (this.R(i && i.B.nextSibling, s), t.length = s);
  }

  R(e = this.A.nextSibling, t) {
    var i;

    for (null === (i = this.P) || void 0 === i || i.call(this, !1, !0, t); e && e !== this.B;) {
      const t = e.nextSibling;
      e.remove(), e = t;
    }
  }

}

class W {
  constructor(e, t, i, s, n) {
    this.type = 1, this.H = V, this.N = void 0, this.V = void 0, this.element = e, this.name = t, this.M = s, this.options = n, i.length > 2 || "" !== i[0] || "" !== i[1] ? (this.H = Array(i.length - 1).fill(V), this.strings = i) : this.H = V;
  }

  get tagName() {
    return this.element.tagName;
  }

  I(e, t = this, i, s) {
    const n = this.strings;
    let r = !1;
    if (void 0 === n) e = $(this, e, t, 0), r = !P(e) || e !== this.H && e !== F, r && (this.H = e);else {
      const s = e;
      let o, a;

      for (e = n[0], o = 0; o < n.length - 1; o++) a = $(this, s[i + o], t, o), a === F && (a = this.H[o]), r || (r = !P(a) || a !== this.H[o]), a === V ? e = V : e !== V && (e += (null != a ? a : "") + n[o + 1]), this.H[o] = a;
    }
    r && !s && this.W(e);
  }

  W(e) {
    e === V ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "");
  }

}

class q extends W {
  constructor() {
    super(...arguments), this.type = 3;
  }

  W(e) {
    this.element[this.name] = e === V ? void 0 : e;
  }

}

class K extends W {
  constructor() {
    super(...arguments), this.type = 4;
  }

  W(e) {
    e && e !== V ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
  }

}

class X extends W {
  constructor() {
    super(...arguments), this.type = 5;
  }

  I(e, t = this) {
    var i;
    if ((e = null !== (i = $(this, e, t, 0)) && void 0 !== i ? i : V) === F) return;
    const s = this.H,
          n = e === V && s !== V || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive,
          r = e !== V && (s === V || n);
    n && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, e), this.H = e;
  }

  handleEvent(e) {
    var t, i;
    "function" == typeof this.H ? this.H.call(null !== (i = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== i ? i : this.element, e) : this.H.handleEvent(e);
  }

}

class J {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this.N = void 0, this.V = void 0, this.M = t, this.options = i;
  }

  I(e) {
    $(this, e);
  }

}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


var Y, Z, G, Q, ee, te;
null === (_ = (v = globalThis).litHtmlPlatformSupport) || void 0 === _ || _.call(v, D, B), (null !== (g = (y = globalThis).litHtmlVersions) && void 0 !== g ? g : y.litHtmlVersions = []).push("2.0.0-rc.3"), (null !== (Y = (te = globalThis).litElementVersions) && void 0 !== Y ? Y : te.litElementVersions = []).push("3.0.0-rc.2");

class ie extends f {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this.Φt = void 0;
  }

  createRenderRoot() {
    var e, t;
    const i = super.createRenderRoot();
    return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = i.firstChild), i;
  }

  update(e) {
    const t = this.render();
    super.update(e), this.Φt = ((e, t, i) => {
      var s, n;
      const r = null !== (s = null == i ? void 0 : i.renderBefore) && void 0 !== s ? s : t;
      let o = r._$litPart$;

      if (void 0 === o) {
        const e = null !== (n = null == i ? void 0 : i.renderBefore) && void 0 !== n ? n : null;
        r._$litPart$ = o = new B(t.insertBefore(E(), e), e, void 0, i);
      }

      return o.I(e), o;
    })(t, this.renderRoot, this.renderOptions);
  }

  connectedCallback() {
    var e;
    super.connectedCallback(), null === (e = this.Φt) || void 0 === e || e.setConnected(!0);
  }

  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), null === (e = this.Φt) || void 0 === e || e.setConnected(!1);
  }

  render() {
    return F;
  }

}
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


function se(e, t, i, s) {
  var n,
      r = arguments.length,
      o = r < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, i, o) : n(t, i)) || o);
  return r > 3 && o && Object.defineProperty(t, i, o), o;
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
   */
}

ie.finalized = !0, ie._$litElement$ = !0, null === (G = (Z = globalThis).litElementHydrateSupport) || void 0 === G || G.call(Z, {
  LitElement: ie
}), null === (ee = (Q = globalThis).litElementPlatformSupport) || void 0 === ee || ee.call(Q, {
  LitElement: ie
});

const ne = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
      re = (e, t, i = null) => {
  for (; t !== i;) {
    const i = t.nextSibling;
    e.removeChild(t), t = i;
  }
},
      oe = `{{lit-${String(Math.random()).slice(2)}}}`,
      ae = `\x3c!--${oe}--\x3e`,
      de = new RegExp(`${oe}|${ae}`);

class le {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const i = [],
          s = [],
          n = document.createTreeWalker(t.content, 133, null, !1);
    let r = 0,
        o = -1,
        a = 0;
    const {
      strings: d,
      values: {
        length: l
      }
    } = e;

    for (; a < l;) {
      const e = n.nextNode();

      if (null !== e) {
        if (o++, 1 === e.nodeType) {
          if (e.hasAttributes()) {
            const t = e.attributes,
                  {
              length: i
            } = t;
            let s = 0;

            for (let e = 0; e < i; e++) ce(t[e].name, "$lit$") && s++;

            for (; s-- > 0;) {
              const t = d[a],
                    i = pe.exec(t)[2],
                    s = i.toLowerCase() + "$lit$",
                    n = e.getAttribute(s);
              e.removeAttribute(s);
              const r = n.split(de);
              this.parts.push({
                type: "attribute",
                index: o,
                name: i,
                strings: r
              }), a += r.length - 1;
            }
          }

          "TEMPLATE" === e.tagName && (s.push(e), n.currentNode = e.content);
        } else if (3 === e.nodeType) {
          const t = e.data;

          if (t.indexOf(oe) >= 0) {
            const s = e.parentNode,
                  n = t.split(de),
                  r = n.length - 1;

            for (let t = 0; t < r; t++) {
              let i,
                  r = n[t];
              if ("" === r) i = ue();else {
                const e = pe.exec(r);
                null !== e && ce(e[2], "$lit$") && (r = r.slice(0, e.index) + e[1] + e[2].slice(0, -"$lit$".length) + e[3]), i = document.createTextNode(r);
              }
              s.insertBefore(i, e), this.parts.push({
                type: "node",
                index: ++o
              });
            }

            "" === n[r] ? (s.insertBefore(ue(), e), i.push(e)) : e.data = n[r], a += r;
          }
        } else if (8 === e.nodeType) if (e.data === oe) {
          const t = e.parentNode;
          null !== e.previousSibling && o !== r || (o++, t.insertBefore(ue(), e)), r = o, this.parts.push({
            type: "node",
            index: o
          }), null === e.nextSibling ? e.data = "" : (i.push(e), o--), a++;
        } else {
          let t = -1;

          for (; -1 !== (t = e.data.indexOf(oe, t + 1));) this.parts.push({
            type: "node",
            index: -1
          }), a++;
        }
      } else n.currentNode = s.pop();
    }

    for (const e of i) e.parentNode.removeChild(e);
  }

}

const ce = (e, t) => {
  const i = e.length - t.length;
  return i >= 0 && e.slice(i) === t;
},
      he = e => -1 !== e.index,
      ue = () => document.createComment(""),
      pe = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

function me(e, t) {
  const {
    element: {
      content: i
    },
    parts: s
  } = e,
        n = document.createTreeWalker(i, 133, null, !1);
  let r = ve(s),
      o = s[r],
      a = -1,
      d = 0;
  const l = [];
  let c = null;

  for (; n.nextNode();) {
    a++;
    const e = n.currentNode;

    for (e.previousSibling === c && (c = null), t.has(e) && (l.push(e), null === c && (c = e)), null !== c && d++; void 0 !== o && o.index === a;) o.index = null !== c ? -1 : o.index - d, r = ve(s, r), o = s[r];
  }

  l.forEach(e => e.parentNode.removeChild(e));
}

const fe = e => {
  let t = 11 === e.nodeType ? 0 : 1;
  const i = document.createTreeWalker(e, 133, null, !1);

  for (; i.nextNode();) t++;

  return t;
},
      ve = (e, t = -1) => {
  for (let i = t + 1; i < e.length; i++) {
    const t = e[i];
    if (he(t)) return i;
  }

  return -1;
};
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
 */


const _e = new WeakMap(),
      ge = e => (...t) => {
  const i = e(...t);
  return _e.set(i, !0), i;
},
      ye = e => "function" == typeof e && _e.has(e),
      we = {},
      be = {};
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
 */


class Se {
  constructor(e, t, i) {
    this.__parts = [], this.template = e, this.processor = t, this.options = i;
  }

  update(e) {
    let t = 0;

    for (const i of this.__parts) void 0 !== i && i.setValue(e[t]), t++;

    for (const e of this.__parts) void 0 !== e && e.commit();
  }

  _clone() {
    const e = ne ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
          t = [],
          i = this.template.parts,
          s = document.createTreeWalker(e, 133, null, !1);
    let n,
        r = 0,
        o = 0,
        a = s.nextNode();

    for (; r < i.length;) if (n = i[r], he(n)) {
      for (; o < n.index;) o++, "TEMPLATE" === a.nodeName && (t.push(a), s.currentNode = a.content), null === (a = s.nextNode()) && (s.currentNode = t.pop(), a = s.nextNode());

      if ("node" === n.type) {
        const e = this.processor.handleTextExpression(this.options);
        e.insertAfterNode(a.previousSibling), this.__parts.push(e);
      } else this.__parts.push(...this.processor.handleAttributeExpressions(a, n.name, n.strings, this.options));

      r++;
    } else this.__parts.push(void 0), r++;

    return ne && (document.adoptNode(e), customElements.upgrade(e)), e;
  }

}
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
 */


const xe = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
  createHTML: e => e
}),
      Ce = ` ${oe} `;

class ke {
  constructor(e, t, i, s) {
    this.strings = e, this.values = t, this.type = i, this.processor = s;
  }

  getHTML() {
    const e = this.strings.length - 1;
    let t = "",
        i = !1;

    for (let s = 0; s < e; s++) {
      const e = this.strings[s],
            n = e.lastIndexOf("\x3c!--");
      i = (n > -1 || i) && -1 === e.indexOf("--\x3e", n + 1);
      const r = pe.exec(e);
      t += null === r ? e + (i ? Ce : ae) : e.substr(0, r.index) + r[1] + r[2] + "$lit$" + r[3] + oe;
    }

    return t += this.strings[e], t;
  }

  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return void 0 !== xe && (t = xe.createHTML(t)), e.innerHTML = t, e;
  }

}
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
 */


const Ee = e => null === e || !("object" == typeof e || "function" == typeof e),
      Pe = e => Array.isArray(e) || !(!e || !e[Symbol.iterator]);

class Ae {
  constructor(e, t, i) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = i, this.parts = [];

    for (let e = 0; e < i.length - 1; e++) this.parts[e] = this._createPart();
  }

  _createPart() {
    return new Te(this);
  }

  _getValue() {
    const e = this.strings,
          t = e.length - 1,
          i = this.parts;

    if (1 === t && "" === e[0] && "" === e[1]) {
      const e = i[0].value;
      if ("symbol" == typeof e) return String(e);
      if ("string" == typeof e || !Pe(e)) return e;
    }

    let s = "";

    for (let n = 0; n < t; n++) {
      s += e[n];
      const t = i[n];

      if (void 0 !== t) {
        const e = t.value;
        if (Ee(e) || !Pe(e)) s += "string" == typeof e ? e : String(e);else for (const t of e) s += "string" == typeof t ? t : String(t);
      }
    }

    return s += e[t], s;
  }

  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }

}

class Te {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }

  setValue(e) {
    e === we || Ee(e) && e === this.value || (this.value = e, ye(e) || (this.committer.dirty = !0));
  }

  commit() {
    for (; ye(this.value);) {
      const e = this.value;
      this.value = we, e(this);
    }

    this.value !== we && this.committer.commit();
  }

}

class Re {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }

  appendInto(e) {
    this.startNode = e.appendChild(ue()), this.endNode = e.appendChild(ue());
  }

  insertAfterNode(e) {
    this.startNode = e, this.endNode = e.nextSibling;
  }

  appendIntoPart(e) {
    e.__insert(this.startNode = ue()), e.__insert(this.endNode = ue());
  }

  insertAfterPart(e) {
    e.__insert(this.startNode = ue()), this.endNode = e.endNode, e.endNode = this.startNode;
  }

  setValue(e) {
    this.__pendingValue = e;
  }

  commit() {
    if (null === this.startNode.parentNode) return;

    for (; ye(this.__pendingValue);) {
      const e = this.__pendingValue;
      this.__pendingValue = we, e(this);
    }

    const e = this.__pendingValue;
    e !== we && (Ee(e) ? e !== this.value && this.__commitText(e) : e instanceof ke ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Pe(e) ? this.__commitIterable(e) : e === be ? (this.value = be, this.clear()) : this.__commitText(e));
  }

  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }

  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), this.value = e);
  }

  __commitText(e) {
    const t = this.startNode.nextSibling,
          i = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
    t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = i : this.__commitNode(document.createTextNode(i)), this.value = e;
  }

  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof Se && this.value.template === t) this.value.update(e.values);else {
      const i = new Se(t, e.processor, this.options),
            s = i._clone();

      i.update(e.values), this.__commitNode(s), this.value = i;
    }
  }

  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let i,
        s = 0;

    for (const n of e) i = t[s], void 0 === i && (i = new Re(this.options), t.push(i), 0 === s ? i.appendIntoPart(this) : i.insertAfterPart(t[s - 1])), i.setValue(n), i.commit(), s++;

    s < t.length && (t.length = s, this.clear(i && i.endNode));
  }

  clear(e = this.startNode) {
    re(this.startNode.parentNode, e.nextSibling, this.endNode);
  }

}

class Ie {
  constructor(e, t, i) {
    if (this.value = void 0, this.__pendingValue = void 0, 2 !== i.length || "" !== i[0] || "" !== i[1]) throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = i;
  }

  setValue(e) {
    this.__pendingValue = e;
  }

  commit() {
    for (; ye(this.__pendingValue);) {
      const e = this.__pendingValue;
      this.__pendingValue = we, e(this);
    }

    if (this.__pendingValue === we) return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = we;
  }

}

class Ne extends Ae {
  constructor(e, t, i) {
    super(e, t, i), this.single = 2 === i.length && "" === i[0] && "" === i[1];
  }

  _createPart() {
    return new ze(this);
  }

  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }

  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }

}

class ze extends Te {}

let Me = !1;

(() => {
  try {
    const e = {
      get capture() {
        return Me = !0, !1;
      }

    };
    window.addEventListener("test", e, e), window.removeEventListener("test", e, e);
  } catch (e) {}
})();

class He {
  constructor(e, t, i) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = i, this.__boundHandleEvent = e => this.handleEvent(e);
  }

  setValue(e) {
    this.__pendingValue = e;
  }

  commit() {
    for (; ye(this.__pendingValue);) {
      const e = this.__pendingValue;
      this.__pendingValue = we, e(this);
    }

    if (this.__pendingValue === we) return;
    const e = this.__pendingValue,
          t = this.value,
          i = null == e || null != t && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive),
          s = null != e && (null == t || i);
    i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), s && (this.__options = Oe(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = we;
  }

  handleEvent(e) {
    "function" == typeof this.value ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }

}

const Oe = e => e && (Me ? {
  capture: e.capture,
  passive: e.passive,
  once: e.once
} : e.capture)
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
 */
;

function Fe(e) {
  let t = Ve.get(e.type);
  void 0 === t && (t = {
    stringsArray: new WeakMap(),
    keyString: new Map()
  }, Ve.set(e.type, t));
  let i = t.stringsArray.get(e.strings);
  if (void 0 !== i) return i;
  const s = e.strings.join(oe);
  return i = t.keyString.get(s), void 0 === i && (i = new le(e, e.getTemplateElement()), t.keyString.set(s, i)), t.stringsArray.set(e.strings, i), i;
}

const Ve = new Map(),
      Ue = new WeakMap();
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
 */

const Le = new
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
 */
class {
  handleAttributeExpressions(e, t, i, s) {
    const n = t[0];

    if ("." === n) {
      return new Ne(e, t.slice(1), i).parts;
    }

    if ("@" === n) return [new He(e, t.slice(1), s.eventContext)];
    if ("?" === n) return [new Ie(e, t.slice(1), i)];
    return new Ae(e, t, i).parts;
  }

  handleTextExpression(e) {
    return new Re(e);
  }

}();
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
 */

"undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");

const De = (e, ...t) => new ke(e, t, "html", Le)
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
 */
,
      $e = (e, t) => `${e}--${t}`;

let je = !0;
void 0 === window.ShadyCSS ? je = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), je = !1);

const Be = e => t => {
  const i = $e(t.type, e);
  let s = Ve.get(i);
  void 0 === s && (s = {
    stringsArray: new WeakMap(),
    keyString: new Map()
  }, Ve.set(i, s));
  let n = s.stringsArray.get(t.strings);
  if (void 0 !== n) return n;
  const r = t.strings.join(oe);

  if (n = s.keyString.get(r), void 0 === n) {
    const i = t.getTemplateElement();
    je && window.ShadyCSS.prepareTemplateDom(i, e), n = new le(t, i), s.keyString.set(r, n);
  }

  return s.stringsArray.set(t.strings, n), n;
},
      We = ["html", "svg"],
      qe = new Set(),
      Ke = (e, t, i) => {
  qe.add(e);
  const s = i ? i.element : document.createElement("template"),
        n = t.querySelectorAll("style"),
        {
    length: r
  } = n;
  if (0 === r) return void window.ShadyCSS.prepareTemplateStyles(s, e);
  const o = document.createElement("style");

  for (let e = 0; e < r; e++) {
    const t = n[e];
    t.parentNode.removeChild(t), o.textContent += t.textContent;
  }

  (e => {
    We.forEach(t => {
      const i = Ve.get($e(t, e));
      void 0 !== i && i.keyString.forEach(e => {
        const {
          element: {
            content: t
          }
        } = e,
              i = new Set();
        Array.from(t.querySelectorAll("style")).forEach(e => {
          i.add(e);
        }), me(e, i);
      });
    });
  })(e);

  const a = s.content;
  i ? function (e, t, i = null) {
    const {
      element: {
        content: s
      },
      parts: n
    } = e;
    if (null == i) return void s.appendChild(t);
    const r = document.createTreeWalker(s, 133, null, !1);
    let o = ve(n),
        a = 0,
        d = -1;

    for (; r.nextNode();) for (d++, r.currentNode === i && (a = fe(t), i.parentNode.insertBefore(t, i)); -1 !== o && n[o].index === d;) {
      if (a > 0) {
        for (; -1 !== o;) n[o].index += a, o = ve(n, o);

        return;
      }

      o = ve(n, o);
    }
  }(i, o, a.firstChild) : a.insertBefore(o, a.firstChild), window.ShadyCSS.prepareTemplateStyles(s, e);
  const d = a.querySelector("style");
  if (window.ShadyCSS.nativeShadow && null !== d) t.insertBefore(d.cloneNode(!0), t.firstChild);else if (i) {
    a.insertBefore(o, a.firstChild);
    const e = new Set();
    e.add(o), me(i, e);
  }
};

window.JSCompiler_renameProperty = (e, t) => e;

const Xe = {
  toAttribute(e, t) {
    switch (t) {
      case Boolean:
        return e ? "" : null;

      case Object:
      case Array:
        return null == e ? e : JSON.stringify(e);
    }

    return e;
  },

  fromAttribute(e, t) {
    switch (t) {
      case Boolean:
        return null !== e;

      case Number:
        return null === e ? null : Number(e);

      case Object:
      case Array:
        return JSON.parse(e);
    }

    return e;
  }

},
      Je = (e, t) => t !== e && (t == t || e == e),
      Ye = {
  attribute: !0,
  type: String,
  converter: Xe,
  reflect: !1,
  hasChanged: Je
};

class Ze extends HTMLElement {
  constructor() {
    super(), this.initialize();
  }

  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this._classProperties.forEach((t, i) => {
      const s = this._attributeNameForProperty(i, t);

      void 0 !== s && (this._attributeToPropertyMap.set(s, i), e.push(s));
    }), e;
  }

  static _ensureClassProperties() {
    if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
      this._classProperties = new Map();

      const e = Object.getPrototypeOf(this)._classProperties;

      void 0 !== e && e.forEach((e, t) => this._classProperties.set(t, e));
    }
  }

  static createProperty(e, t = Ye) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
    const i = "symbol" == typeof e ? Symbol() : `__${e}`,
          s = this.getPropertyDescriptor(e, i, t);
    void 0 !== s && Object.defineProperty(this.prototype, e, s);
  }

  static getPropertyDescriptor(e, t, i) {
    return {
      get() {
        return this[t];
      },

      set(s) {
        const n = this[e];
        this[t] = s, this.requestUpdateInternal(e, n, i);
      },

      configurable: !0,
      enumerable: !0
    };
  }

  static getPropertyOptions(e) {
    return this._classProperties && this._classProperties.get(e) || Ye;
  }

  static finalize() {
    const e = Object.getPrototypeOf(this);

    if (e.hasOwnProperty("finalized") || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const e = this.properties,
            t = [...Object.getOwnPropertyNames(e), ...("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [])];

      for (const i of t) this.createProperty(i, e[i]);
    }
  }

  static _attributeNameForProperty(e, t) {
    const i = t.attribute;
    return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0;
  }

  static _valueHasChanged(e, t, i = Je) {
    return i(e, t);
  }

  static _propertyValueFromAttribute(e, t) {
    const i = t.type,
          s = t.converter || Xe,
          n = "function" == typeof s ? s : s.fromAttribute;
    return n ? n(e, i) : e;
  }

  static _propertyValueToAttribute(e, t) {
    if (void 0 === t.reflect) return;
    const i = t.type,
          s = t.converter;
    return (s && s.toAttribute || Xe.toAttribute)(e, i);
  }

  initialize() {
    this._updateState = 0, this._updatePromise = new Promise(e => this._enableUpdatingResolver = e), this._changedProperties = new Map(), this._saveInstanceProperties(), this.requestUpdateInternal();
  }

  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((e, t) => {
      if (this.hasOwnProperty(t)) {
        const e = this[t];
        delete this[t], this._instanceProperties || (this._instanceProperties = new Map()), this._instanceProperties.set(t, e);
      }
    });
  }

  _applyInstanceProperties() {
    this._instanceProperties.forEach((e, t) => this[t] = e), this._instanceProperties = void 0;
  }

  connectedCallback() {
    this.enableUpdating();
  }

  enableUpdating() {
    void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0);
  }

  disconnectedCallback() {}

  attributeChangedCallback(e, t, i) {
    t !== i && this._attributeToProperty(e, i);
  }

  _propertyToAttribute(e, t, i = Ye) {
    const s = this.constructor,
          n = s._attributeNameForProperty(e, i);

    if (void 0 !== n) {
      const e = s._propertyValueToAttribute(t, i);

      if (void 0 === e) return;
      this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(n) : this.setAttribute(n, e), this._updateState = -9 & this._updateState;
    }
  }

  _attributeToProperty(e, t) {
    if (8 & this._updateState) return;

    const i = this.constructor,
          s = i._attributeToPropertyMap.get(e);

    if (void 0 !== s) {
      const e = i.getPropertyOptions(s);
      this._updateState = 16 | this._updateState, this[s] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState;
    }
  }

  requestUpdateInternal(e, t, i) {
    let s = !0;

    if (void 0 !== e) {
      const n = this.constructor;
      i = i || n.getPropertyOptions(e), n._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== i.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map()), this._reflectingProperties.set(e, i))) : s = !1;
    }

    !this._hasRequestedUpdate && s && (this._updatePromise = this._enqueueUpdate());
  }

  requestUpdate(e, t) {
    return this.requestUpdateInternal(e, t), this.updateComplete;
  }

  async _enqueueUpdate() {
    this._updateState = 4 | this._updateState;

    try {
      await this._updatePromise;
    } catch (e) {}

    const e = this.performUpdate();
    return null != e && (await e), !this._hasRequestedUpdate;
  }

  get _hasRequestedUpdate() {
    return 4 & this._updateState;
  }

  get hasUpdated() {
    return 1 & this._updateState;
  }

  performUpdate() {
    if (!this._hasRequestedUpdate) return;
    this._instanceProperties && this._applyInstanceProperties();
    let e = !1;
    const t = this._changedProperties;

    try {
      e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated();
    } catch (t) {
      throw e = !1, this._markUpdated(), t;
    }

    e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t));
  }

  _markUpdated() {
    this._changedProperties = new Map(), this._updateState = -5 & this._updateState;
  }

  get updateComplete() {
    return this._getUpdateComplete();
  }

  _getUpdateComplete() {
    return this._updatePromise;
  }

  shouldUpdate(e) {
    return !0;
  }

  update(e) {
    void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((e, t) => this._propertyToAttribute(t, this[t], e)), this._reflectingProperties = void 0), this._markUpdated();
  }

  updated(e) {}

  firstUpdated(e) {}

}

Ze.finalized = !0;
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
 */

const Ge = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? Object.assign(Object.assign({}, t), {
  finisher(i) {
    i.createProperty(t.key, e);
  }

}) : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},

  initializer() {
    "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this));
  },

  finisher(i) {
    i.createProperty(t.key, e);
  }

};

function Qe(e) {
  return (t, i) => void 0 !== i ? ((e, t, i) => {
    t.constructor.createProperty(i, e);
  })(e, t, i) : Ge(e, t);
}

function et(e) {
  return Qe({
    attribute: !1,
    hasChanged: null == e ? void 0 : e.hasChanged
  });
}

function tt(e, t) {
  return (i, s) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(e);
      },

      enumerable: !0,
      configurable: !0
    };

    if (t) {
      const t = "symbol" == typeof s ? Symbol() : `__${s}`;

      n.get = function () {
        return void 0 === this[t] && (this[t] = this.renderRoot.querySelector(e)), this[t];
      };
    }

    return void 0 !== s ? it(n, i, s) : st(n, i);
  };
}

const it = (e, t, i) => {
  Object.defineProperty(t, i, e);
},
      st = (e, t) => ({
  kind: "method",
  placement: "prototype",
  key: t.key,
  descriptor: e
});
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


const nt = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
      rt = Symbol();

class ot {
  constructor(e, t) {
    if (t !== rt) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }

  get styleSheet() {
    return void 0 === this._styleSheet && (nt ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }

  toString() {
    return this.cssText;
  }

}
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
 */


(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
const at = {};

class dt extends Ze {
  static getStyles() {
    return this.styles;
  }

  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
    const e = this.getStyles();

    if (Array.isArray(e)) {
      const t = (e, i) => e.reduceRight((e, i) => Array.isArray(i) ? t(i, e) : (e.add(i), e), i),
            i = t(e, new Set()),
            s = [];

      i.forEach(e => s.unshift(e)), this._styles = s;
    } else this._styles = void 0 === e ? [] : [e];

    this._styles = this._styles.map(e => {
      if (e instanceof CSSStyleSheet && !nt) {
        const t = Array.prototype.slice.call(e.cssRules).reduce((e, t) => e + t.cssText, "");
        return new ot(String(t), rt);
      }

      return e;
    });
  }

  initialize() {
    super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
  }

  createRenderRoot() {
    return this.attachShadow({
      mode: "open"
    });
  }

  adoptStyles() {
    const e = this.constructor._styles;
    0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? nt ? this.renderRoot.adoptedStyleSheets = e.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e => e.cssText), this.localName));
  }

  connectedCallback() {
    super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
  }

  update(e) {
    const t = this.render();
    super.update(e), t !== at && this.constructor.render(t, this.renderRoot, {
      scopeName: this.localName,
      eventContext: this
    }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach(e => {
      const t = document.createElement("style");
      t.textContent = e.cssText, this.renderRoot.appendChild(t);
    }));
  }

  render() {
    return at;
  }

}
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


function lt(e) {
  return void 0 === e && (e = window), !!function (e) {
    void 0 === e && (e = window);
    var t = !1;

    try {
      var i = {
        get passive() {
          return t = !0, !1;
        }

      },
          s = function () {};

      e.document.addEventListener("test", s, i), e.document.removeEventListener("test", s, i);
    } catch (e) {
      t = !1;
    }

    return t;
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
  (e) && {
    passive: !0
  };
}

function ct(e, t, i) {
  if (void 0 !== t) return function (e, t, i) {
    const s = e.constructor;

    if (!i) {
      const e = `__${t}`;
      if (!(i = s.getPropertyDescriptor(t, e))) throw new Error("@ariaProperty must be used after a @property decorator");
    }

    const n = i;
    let r = "";
    if (!n.set) throw new Error(`@ariaProperty requires a setter for ${t}`);
    const o = {
      configurable: !0,
      enumerable: !0,

      set(e) {
        if ("" === r) {
          const e = s.getPropertyOptions(t);
          r = e.attribute;
        }

        this.hasAttribute(r) && this.removeAttribute(r), n.set.call(this, e);
      }

    };
    return n.get && (o.get = function () {
      return n.get.call(this);
    }), o;
  }(e, t, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
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


dt.finalized = !0, dt.render = (e, t, i) => {
  if (!i || "object" != typeof i || !i.scopeName) throw new Error("The `scopeName` option is required.");
  const s = i.scopeName,
        n = Ue.has(t),
        r = je && 11 === t.nodeType && !!t.host,
        o = r && !qe.has(s),
        a = o ? document.createDocumentFragment() : t;

  if (((e, t, i) => {
    let s = Ue.get(t);
    void 0 === s && (re(t, t.firstChild), Ue.set(t, s = new Re(Object.assign({
      templateFactory: Fe
    }, i))), s.appendInto(t)), s.setValue(e), s.commit();
  })(e, a, Object.assign({
    templateFactory: Be(s)
  }, i)), o) {
    const e = Ue.get(a);
    Ue.delete(a);
    const i = e.value instanceof Se ? e.value.template : void 0;
    Ke(s, a, i), re(t, t.firstChild), t.appendChild(a), Ue.set(t, e);
  }

  !n && r && window.ShadyCSS.styleElement(t.host);
};

const ht = () => {},
      ut = {
  get passive() {
    return !1;
  }

};

document.addEventListener("x", ht, ut), document.removeEventListener("x", ht);
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

class pt extends dt {
  click() {
    if (this.mdcRoot) return this.mdcRoot.focus(), void this.mdcRoot.click();
    super.click();
  }

  createFoundation() {
    void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(), this.mdcFoundationClass && (this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter()), this.mdcFoundation.init());
  }

  firstUpdated() {
    this.createFoundation();
  }

}
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


class mt extends pt {
  createRenderRoot() {
    return this.attachShadow({
      mode: "open",
      delegatesFocus: !0
    });
  }

  click() {
    this.formElement && (this.formElement.focus(), this.formElement.click());
  }

  setAriaLabel(e) {
    this.formElement && this.formElement.setAttribute("aria-label", e);
  }

  firstUpdated() {
    super.firstUpdated(), this.shadowRoot && this.mdcRoot.addEventListener("change", e => {
      this.dispatchEvent(new Event("change", e));
    });
  }

}
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


const ft = e => (t, i) => {
  if (t.constructor._observers) {
    if (!t.constructor.hasOwnProperty("_observers")) {
      const e = t.constructor._observers;
      t.constructor._observers = new Map(), e.forEach((e, i) => t.constructor._observers.set(i, e));
    }
  } else {
    t.constructor._observers = new Map();
    const e = t.updated;

    t.updated = function (t) {
      e.call(this, t), t.forEach((e, t) => {
        const i = this.constructor._observers.get(t);

        void 0 !== i && i.call(this, this[t], e);
      });
    };
  }

  t.constructor._observers.set(i, e);
}
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
;

var vt = function (e, t) {
  return (vt = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
  })(e, t);
};

var _t = function () {
  return (_t = Object.assign || function (e) {
    for (var t, i = 1, s = arguments.length; i < s; i++) for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);

    return e;
  }).apply(this, arguments);
},
    gt = {
  animation: {
    prefixed: "-webkit-animation",
    standard: "animation"
  },
  transform: {
    prefixed: "-webkit-transform",
    standard: "transform"
  },
  transition: {
    prefixed: "-webkit-transition",
    standard: "transition"
  }
},
    yt = {
  animationend: {
    cssProperty: "animation",
    prefixed: "webkitAnimationEnd",
    standard: "animationend"
  },
  animationiteration: {
    cssProperty: "animation",
    prefixed: "webkitAnimationIteration",
    standard: "animationiteration"
  },
  animationstart: {
    cssProperty: "animation",
    prefixed: "webkitAnimationStart",
    standard: "animationstart"
  },
  transitionend: {
    cssProperty: "transition",
    prefixed: "webkitTransitionEnd",
    standard: "transitionend"
  }
};
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


function wt(e) {
  return Boolean(e.document) && "function" == typeof e.document.createElement;
}
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


var bt = function () {
  function e(e) {
    void 0 === e && (e = {}), this.adapter = e;
  }

  return Object.defineProperty(e, "cssClasses", {
    get: function () {
      return {};
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "strings", {
    get: function () {
      return {};
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "numbers", {
    get: function () {
      return {};
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "defaultAdapter", {
    get: function () {
      return {};
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.init = function () {}, e.prototype.destroy = function () {}, e;
}(),
    St = {
  ACTIVE: "mdc-slider--active",
  DISABLED: "mdc-slider--disabled",
  DISCRETE: "mdc-slider--discrete",
  FOCUS: "mdc-slider--focus",
  HAS_TRACK_MARKER: "mdc-slider--display-markers",
  IN_TRANSIT: "mdc-slider--in-transit",
  IS_DISCRETE: "mdc-slider--discrete",
  DISABLE_TOUCH_ACTION: "mdc-slider--disable-touch-action"
},
    xt = {
  ARIA_DISABLED: "aria-disabled",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  CHANGE_EVENT: "MDCSlider:change",
  INPUT_EVENT: "MDCSlider:input",
  PIN_VALUE_MARKER_SELECTOR: ".mdc-slider__pin-value-marker",
  STEP_DATA_ATTR: "data-step",
  THUMB_CONTAINER_SELECTOR: ".mdc-slider__thumb-container",
  TRACK_MARKER_CONTAINER_SELECTOR: ".mdc-slider__track-marker-container",
  TRACK_SELECTOR: ".mdc-slider__track"
},
    Ct = {
  PAGE_FACTOR: 4
},
    kt = "undefined" != typeof window,
    Et = kt && !!window.PointerEvent,
    Pt = Et ? ["pointerdown"] : ["mousedown", "touchstart"],
    At = Et ? ["pointerup"] : ["mouseup", "touchend"],
    Tt = {
  mousedown: "mousemove",
  pointerdown: "pointermove",
  touchstart: "touchmove"
},
    Rt = "ArrowDown",
    It = "ArrowLeft",
    Nt = "ArrowRight",
    zt = "ArrowUp",
    Mt = "End",
    Ht = "Home",
    Ot = "PageDown",
    Ft = "PageUp",
    Vt = function (e) {
  function t(i) {
    var s = e.call(this, _t(_t({}, t.defaultAdapter), i)) || this;
    return s.savedTabIndex_ = NaN, s.active_ = !1, s.inTransit_ = !1, s.isDiscrete_ = !1, s.hasTrackMarker_ = !1, s.handlingThumbTargetEvt_ = !1, s.min_ = 0, s.max_ = 100, s.step_ = 0, s.value_ = 0, s.disabled_ = !1, s.preventFocusState_ = !1, s.thumbContainerPointerHandler_ = function () {
      return s.handlingThumbTargetEvt_ = !0;
    }, s.interactionStartHandler_ = function (e) {
      return s.handleDown_(e);
    }, s.keydownHandler_ = function (e) {
      return s.handleKeydown_(e);
    }, s.focusHandler_ = function () {
      return s.handleFocus_();
    }, s.blurHandler_ = function () {
      return s.handleBlur_();
    }, s.resizeHandler_ = function () {
      return s.layout();
    }, s;
  }

  return function (e, t) {
    function i() {
      this.constructor = e;
    }

    vt(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
  }(t, e), Object.defineProperty(t, "cssClasses", {
    get: function () {
      return St;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(t, "strings", {
    get: function () {
      return xt;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(t, "numbers", {
    get: function () {
      return Ct;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(t, "defaultAdapter", {
    get: function () {
      return {
        hasClass: function () {
          return !1;
        },
        addClass: function () {},
        removeClass: function () {},
        getAttribute: function () {
          return null;
        },
        setAttribute: function () {},
        removeAttribute: function () {},
        computeBoundingRect: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        getTabIndex: function () {
          return 0;
        },
        registerInteractionHandler: function () {},
        deregisterInteractionHandler: function () {},
        registerThumbContainerInteractionHandler: function () {},
        deregisterThumbContainerInteractionHandler: function () {},
        registerBodyInteractionHandler: function () {},
        deregisterBodyInteractionHandler: function () {},
        registerResizeHandler: function () {},
        deregisterResizeHandler: function () {},
        notifyInput: function () {},
        notifyChange: function () {},
        setThumbContainerStyleProperty: function () {},
        setTrackStyleProperty: function () {},
        setMarkerValue: function () {},
        setTrackMarkers: function () {},
        isRTL: function () {
          return !1;
        }
      };
    },
    enumerable: !0,
    configurable: !0
  }), t.prototype.init = function () {
    var e = this;
    this.isDiscrete_ = this.adapter.hasClass(St.IS_DISCRETE), this.hasTrackMarker_ = this.adapter.hasClass(St.HAS_TRACK_MARKER), Pt.forEach(function (t) {
      e.adapter.registerInteractionHandler(t, e.interactionStartHandler_), e.adapter.registerThumbContainerInteractionHandler(t, e.thumbContainerPointerHandler_);
    }), Et && this.adapter.addClass(St.DISABLE_TOUCH_ACTION), this.adapter.registerInteractionHandler("keydown", this.keydownHandler_), this.adapter.registerInteractionHandler("focus", this.focusHandler_), this.adapter.registerInteractionHandler("blur", this.blurHandler_), this.adapter.registerResizeHandler(this.resizeHandler_), this.layout(), this.isDiscrete_ && 0 === this.getStep() && (this.step_ = 1);
  }, t.prototype.destroy = function () {
    var e = this;
    Pt.forEach(function (t) {
      e.adapter.deregisterInteractionHandler(t, e.interactionStartHandler_), e.adapter.deregisterThumbContainerInteractionHandler(t, e.thumbContainerPointerHandler_);
    }), this.adapter.deregisterInteractionHandler("keydown", this.keydownHandler_), this.adapter.deregisterInteractionHandler("focus", this.focusHandler_), this.adapter.deregisterInteractionHandler("blur", this.blurHandler_), this.adapter.deregisterResizeHandler(this.resizeHandler_);
  }, t.prototype.setupTrackMarker = function () {
    this.isDiscrete_ && this.hasTrackMarker_ && 0 !== this.getStep() && this.adapter.setTrackMarkers(this.getStep(), this.getMax(), this.getMin());
  }, t.prototype.layout = function () {
    this.rect_ = this.adapter.computeBoundingRect(), this.updateUIForCurrentValue_();
  }, t.prototype.getValue = function () {
    return this.value_;
  }, t.prototype.setValue = function (e) {
    this.setValue_(e, !1);
  }, t.prototype.getMax = function () {
    return this.max_;
  }, t.prototype.setMax = function (e) {
    if (e < this.min_) throw new Error("Cannot set max to be less than the slider's minimum value");
    this.max_ = e, this.setValue_(this.value_, !1, !0), this.adapter.setAttribute(xt.ARIA_VALUEMAX, String(this.max_)), this.setupTrackMarker();
  }, t.prototype.getMin = function () {
    return this.min_;
  }, t.prototype.setMin = function (e) {
    if (e > this.max_) throw new Error("Cannot set min to be greater than the slider's maximum value");
    this.min_ = e, this.setValue_(this.value_, !1, !0), this.adapter.setAttribute(xt.ARIA_VALUEMIN, String(this.min_)), this.setupTrackMarker();
  }, t.prototype.getStep = function () {
    return this.step_;
  }, t.prototype.setStep = function (e) {
    if (e < 0) throw new Error("Step cannot be set to a negative number");
    this.isDiscrete_ && ("number" != typeof e || e < 1) && (e = 1), this.step_ = e, this.setValue_(this.value_, !1, !0), this.setupTrackMarker();
  }, t.prototype.isDisabled = function () {
    return this.disabled_;
  }, t.prototype.setDisabled = function (e) {
    this.disabled_ = e, this.toggleClass_(St.DISABLED, this.disabled_), this.disabled_ ? (this.savedTabIndex_ = this.adapter.getTabIndex(), this.adapter.setAttribute(xt.ARIA_DISABLED, "true"), this.adapter.removeAttribute("tabindex")) : (this.adapter.removeAttribute(xt.ARIA_DISABLED), isNaN(this.savedTabIndex_) || this.adapter.setAttribute("tabindex", String(this.savedTabIndex_)));
  }, t.prototype.handleDown_ = function (e) {
    var t = this;

    if (!this.disabled_) {
      this.preventFocusState_ = !0, this.setInTransit_(!this.handlingThumbTargetEvt_), this.handlingThumbTargetEvt_ = !1, this.setActive_(!0);

      var i = function (e) {
        t.handleMove_(e);
      },
          s = Tt[e.type],
          n = function () {
        t.handleUp_(), t.adapter.deregisterBodyInteractionHandler(s, i), At.forEach(function (e) {
          return t.adapter.deregisterBodyInteractionHandler(e, n);
        });
      };

      this.adapter.registerBodyInteractionHandler(s, i), At.forEach(function (e) {
        return t.adapter.registerBodyInteractionHandler(e, n);
      }), this.setValueFromEvt_(e);
    }
  }, t.prototype.handleMove_ = function (e) {
    e.preventDefault(), this.setValueFromEvt_(e);
  }, t.prototype.handleUp_ = function () {
    this.setActive_(!1), this.adapter.notifyChange();
  }, t.prototype.getClientX_ = function (e) {
    return e.targetTouches && e.targetTouches.length > 0 ? e.targetTouches[0].clientX : e.clientX;
  }, t.prototype.setValueFromEvt_ = function (e) {
    var t = this.getClientX_(e),
        i = this.computeValueFromClientX_(t);
    this.setValue_(i, !0);
  }, t.prototype.computeValueFromClientX_ = function (e) {
    var t = this.max_,
        i = this.min_,
        s = (e - this.rect_.left) / this.rect_.width;
    return this.adapter.isRTL() && (s = 1 - s), i + s * (t - i);
  }, t.prototype.handleKeydown_ = function (e) {
    var t = this.getKeyId_(e),
        i = this.getValueForKeyId_(t);
    isNaN(i) || (e.preventDefault(), this.adapter.addClass(St.FOCUS), this.setValue_(i, !0), this.adapter.notifyChange());
  }, t.prototype.getKeyId_ = function (e) {
    return e.key === It || 37 === e.keyCode ? It : e.key === Nt || 39 === e.keyCode ? Nt : e.key === zt || 38 === e.keyCode ? zt : e.key === Rt || 40 === e.keyCode ? Rt : e.key === Ht || 36 === e.keyCode ? Ht : e.key === Mt || 35 === e.keyCode ? Mt : e.key === Ft || 33 === e.keyCode ? Ft : e.key === Ot || 34 === e.keyCode ? Ot : "";
  }, t.prototype.getValueForKeyId_ = function (e) {
    var t = this,
        i = t.max_,
        s = t.min_,
        n = t.step_ || (i - s) / 100;

    switch (this.adapter.isRTL() && (e === It || e === Nt) && (n = -n), e) {
      case It:
      case Rt:
        return this.value_ - n;

      case Nt:
      case zt:
        return this.value_ + n;

      case Ht:
        return this.min_;

      case Mt:
        return this.max_;

      case Ft:
        return this.value_ + n * Ct.PAGE_FACTOR;

      case Ot:
        return this.value_ - n * Ct.PAGE_FACTOR;

      default:
        return NaN;
    }
  }, t.prototype.handleFocus_ = function () {
    this.preventFocusState_ || this.adapter.addClass(St.FOCUS);
  }, t.prototype.handleBlur_ = function () {
    this.preventFocusState_ = !1, this.adapter.removeClass(St.FOCUS);
  }, t.prototype.setValue_ = function (e, t, i) {
    if (void 0 === i && (i = !1), e !== this.value_ || i) {
      var s = this.min_,
          n = this.max_,
          r = e === s || e === n;
      this.step_ && !r && (e = this.quantize_(e)), e < s ? e = s : e > n && (e = n), e = e || 0, this.value_ = e, this.adapter.setAttribute(xt.ARIA_VALUENOW, String(this.value_)), this.updateUIForCurrentValue_(), t && (this.adapter.notifyInput(), this.isDiscrete_ && this.adapter.setMarkerValue(e));
    }
  }, t.prototype.quantize_ = function (e) {
    return Math.round(e / this.step_) * this.step_;
  }, t.prototype.updateUIForCurrentValue_ = function () {
    var e = this,
        t = this,
        i = t.max_,
        s = t.min_,
        n = (t.value_ - s) / (i - s),
        r = n * this.rect_.width;
    this.adapter.isRTL() && (r = this.rect_.width - r);
    var o = kt ? function (e, t) {
      if (wt(e) && t in gt) {
        var i = e.document.createElement("div"),
            s = gt[t],
            n = s.standard,
            r = s.prefixed;
        return n in i.style ? n : r;
      }

      return t;
    }(window, "transform") : "transform",
        a = kt ? function (e, t) {
      if (wt(e) && t in yt) {
        var i = e.document.createElement("div"),
            s = yt[t],
            n = s.standard,
            r = s.prefixed;
        return s.cssProperty in i.style ? n : r;
      }

      return t;
    }(window, "transitionend") : "transitionend";

    if (this.inTransit_) {
      var d = function () {
        e.setInTransit_(!1), e.adapter.deregisterThumbContainerInteractionHandler(a, d);
      };

      this.adapter.registerThumbContainerInteractionHandler(a, d);
    }

    requestAnimationFrame(function () {
      e.adapter.setThumbContainerStyleProperty(o, "translateX(" + r + "px) translateX(-50%)"), e.adapter.setTrackStyleProperty(o, "scaleX(" + n + ")");
    });
  }, t.prototype.setActive_ = function (e) {
    this.active_ = e, this.toggleClass_(St.ACTIVE, this.active_);
  }, t.prototype.setInTransit_ = function (e) {
    this.inTransit_ = e, this.toggleClass_(St.IN_TRANSIT, this.inTransit_);
  }, t.prototype.toggleClass_ = function (e, t) {
    t ? this.adapter.addClass(e) : this.adapter.removeClass(e);
  }, t;
}(bt);
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */


class Ut {
  constructor(e) {
    this.classes = new Set(), this.changed = !1, this.element = e;
    const t = (e.getAttribute("class") || "").split(/\s+/);

    for (const e of t) this.classes.add(e);
  }

  add(e) {
    this.classes.add(e), this.changed = !0;
  }

  remove(e) {
    this.classes.delete(e), this.changed = !0;
  }

  commit() {
    if (this.changed) {
      let e = "";
      this.classes.forEach(t => e += t + " "), this.element.setAttribute("class", e);
    }
  }

}

const Lt = new WeakMap(),
      Dt = ge(e => t => {
  if (!(t instanceof Te) || t instanceof ze || "class" !== t.committer.name || t.committer.parts.length > 1) throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const {
    committer: i
  } = t,
        {
    element: s
  } = i;
  let n = Lt.get(t);
  void 0 === n && (s.setAttribute("class", i.strings.join(" ")), Lt.set(t, n = new Set()));
  const r = s.classList || new Ut(s);
  n.forEach(t => {
    t in e || (r.remove(t), n.delete(t));
  });

  for (const t in e) {
    const i = e[t];
    i != n.has(t) && (i ? (r.add(t), n.add(t)) : (r.remove(t), n.delete(t)));
  }

  "function" == typeof r.commit && r.commit();
}),
      $t = new WeakMap(),
      jt = ge(e => t => {
  const i = $t.get(t);

  if (void 0 === e && t instanceof Te) {
    if (void 0 !== i || !$t.has(t)) {
      const e = t.committer.name;
      t.committer.element.removeAttribute(e);
    }
  } else e !== i && t.setValue(e);

  $t.set(t, e);
}),
      Bt = new WeakMap(),
      Wt = ge(e => t => {
  if (!(t instanceof Te) || t instanceof ze || "style" !== t.committer.name || t.committer.parts.length > 1) throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const {
    committer: i
  } = t,
        {
    style: s
  } = i.element;
  let n = Bt.get(t);
  void 0 === n && (s.cssText = i.strings.join(" "), Bt.set(t, n = new Set())), n.forEach(t => {
    t in e || (n.delete(t), -1 === t.indexOf("-") ? s[t] = null : s.removeProperty(t));
  });

  for (const t in e) n.add(t), -1 === t.indexOf("-") ? s[t] = e[t] : s.setProperty(t, e[t]);
});

class qt extends mt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Vt, this.min = 0, this.max = 100, this._value = 0, this.step = 0, this.disabled = !1, this.pin = !1, this.markers = !1, this.pinMarkerText = "", this.trackMarkerContainerStyles = {}, this.thumbContainerStyles = {}, this.trackStyles = {}, this.isFoundationDestroyed = !1;
  }

  set value(e) {
    this.mdcFoundation && this.mdcFoundation.setValue(e), this._value = e, this.requestUpdate("value", e);
  }

  get value() {
    return this.mdcFoundation ? this.mdcFoundation.getValue() : this._value;
  }

  render() {
    const e = 0 !== this.step,
          t = {
      "mdc-slider--discrete": e,
      "mdc-slider--display-markers": this.markers && e
    };
    let i = "";
    e && this.markers && (i = De`
        <div
            class="mdc-slider__track-marker-container"
            style="${Wt(this.trackMarkerContainerStyles)}">
        </div>`);
    let s = "";
    return this.pin && (s = De`
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`), De`
      <div class="mdc-slider ${Dt(t)}"
           tabindex="0" role="slider"
           aria-label="${jt(this.ariaLabel)}"
           aria-labelledby="${jt(this.ariaLabelledBy)}"
           aria-valuemin="${this.min}" aria-valuemax="${this.max}"
           aria-valuenow="${this.value}"
           aria-disabled="${this.disabled.toString()}"
           data-step="${this.step}"
           @mousedown=${this.layout}
           @touchstart=${this.layout}>
        <div class="mdc-slider__track-container">
          <div
              class="mdc-slider__track"
              style="${Wt(this.trackStyles)}">
          </div>
          ${i}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${Wt(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${s}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`;
  }

  connectedCallback() {
    super.connectedCallback(), this.mdcRoot && this.isFoundationDestroyed && (this.isFoundationDestroyed = !1, this.mdcFoundation.init());
  }

  updated(e) {
    const t = e.has("min"),
          i = e.has("max");
    t && i ? this.max < this.mdcFoundation.getMin() ? (this.mdcFoundation.setMin(this.min), this.mdcFoundation.setMax(this.max)) : (this.mdcFoundation.setMax(this.max), this.mdcFoundation.setMin(this.min)) : t ? this.mdcFoundation.setMin(this.min) : i && this.mdcFoundation.setMax(this.max), super.updated(e);
  }

  disconnectedCallback() {
    super.disconnectedCallback(), this.isFoundationDestroyed = !0, this.mdcFoundation.destroy();
  }

  createAdapter() {
    return Object.assign(Object.assign({}, (e = this.mdcRoot, {
      addClass: t => {
        e.classList.add(t);
      },
      removeClass: t => {
        e.classList.remove(t);
      },
      hasClass: t => e.classList.contains(t)
    })), {
      getAttribute: e => this.mdcRoot.getAttribute(e),
      setAttribute: (e, t) => this.mdcRoot.setAttribute(e, t),
      removeAttribute: e => this.mdcRoot.removeAttribute(e),
      computeBoundingRect: () => {
        const e = this.mdcRoot.getBoundingClientRect();
        return {
          bottom: e.bottom,
          height: e.height,
          left: e.left + window.pageXOffset,
          right: e.right,
          top: e.top,
          width: e.width
        };
      },
      getTabIndex: () => this.mdcRoot.tabIndex,
      registerInteractionHandler: (e, t) => {
        const i = "touchstart" === e ? lt() : void 0;
        this.mdcRoot.addEventListener(e, t, i);
      },
      deregisterInteractionHandler: (e, t) => this.mdcRoot.removeEventListener(e, t),
      registerThumbContainerInteractionHandler: (e, t) => {
        const i = "touchstart" === e ? lt() : void 0;
        this.thumbContainer.addEventListener(e, t, i);
      },
      deregisterThumbContainerInteractionHandler: (e, t) => this.thumbContainer.removeEventListener(e, t),
      registerBodyInteractionHandler: (e, t) => document.body.addEventListener(e, t),
      deregisterBodyInteractionHandler: (e, t) => document.body.removeEventListener(e, t),
      registerResizeHandler: e => window.addEventListener("resize", e, lt()),
      deregisterResizeHandler: e => window.removeEventListener("resize", e),
      notifyInput: () => {
        const e = this.mdcFoundation.getValue();
        e !== this._value && (this.value = e, this.dispatchEvent(new CustomEvent("input", {
          detail: this,
          composed: !0,
          bubbles: !0,
          cancelable: !0
        })));
      },
      notifyChange: () => {
        this.dispatchEvent(new CustomEvent("change", {
          detail: this,
          composed: !0,
          bubbles: !0,
          cancelable: !0
        }));
      },
      setThumbContainerStyleProperty: (e, t) => {
        this.thumbContainerStyles[e] = t, this.requestUpdate();
      },
      setTrackStyleProperty: (e, t) => {
        this.trackStyles[e] = t, this.requestUpdate();
      },
      setMarkerValue: e => this.pinMarkerText = e.toLocaleString(),
      setTrackMarkers: (e, t, i) => {
        const s = e.toLocaleString(),
              n = `linear-gradient(to right, currentColor 2px, transparent 0) ${`0 center / calc((100% - 2px) / ${`((${t.toLocaleString()} - ${i.toLocaleString()}) / ${s})`}) 100% repeat-x`}`;
        this.trackMarkerContainerStyles.background = n, this.requestUpdate();
      },
      isRTL: () => "rtl" === getComputedStyle(this.mdcRoot).direction
    });
    var e;
  }

  resetFoundation() {
    this.mdcFoundation && (this.mdcFoundation.destroy(), this.mdcFoundation.init());
  }

  async firstUpdated() {
    await super.firstUpdated(), this.mdcFoundation.setValue(this._value);
  }

  layout() {
    this.mdcFoundation.layout();
  }

}

var Kt;
se([tt(".mdc-slider")], qt.prototype, "mdcRoot", void 0), se([tt(".mdc-slider")], qt.prototype, "formElement", void 0), se([tt(".mdc-slider__thumb-container")], qt.prototype, "thumbContainer", void 0), se([tt(".mdc-slider__pin-value-marker")], qt.prototype, "pinMarker", void 0), se([Qe({
  type: Number
})], qt.prototype, "min", void 0), se([Qe({
  type: Number
})], qt.prototype, "max", void 0), se([Qe({
  type: Number
})], qt.prototype, "value", null), se([Qe({
  type: Number
}), ft(function (e, t) {
  0 !== t !== (0 !== e) && this.resetFoundation(), this.mdcFoundation.setStep(e);
})], qt.prototype, "step", void 0), se([Qe({
  type: Boolean,
  reflect: !0
}), ft(function (e) {
  this.mdcFoundation.setDisabled(e);
})], qt.prototype, "disabled", void 0), se([Qe({
  type: Boolean,
  reflect: !0
})], qt.prototype, "pin", void 0), se([Qe({
  type: Boolean,
  reflect: !0
}), ft(function () {
  this.mdcFoundation.setupTrackMarker();
})], qt.prototype, "markers", void 0), se([et()], qt.prototype, "pinMarkerText", void 0), se([et()], qt.prototype, "trackMarkerContainerStyles", void 0), se([et()], qt.prototype, "thumbContainerStyles", void 0), se([et()], qt.prototype, "trackStyles", void 0), se([ct, Qe({
  attribute: "aria-label"
})], qt.prototype, "ariaLabel", void 0), se([ct, Qe({
  attribute: "aria-labelledby"
})], qt.prototype, "ariaLabelledBy", void 0), se([(Kt = {
  capture: !0,
  passive: !0
}, (e, t) => void 0 !== t ? ((e, t, i) => {
  Object.assign(t[i], e);
})(Kt, e, t) : ((e, t) => Object.assign(Object.assign({}, t), {
  finisher(i) {
    Object.assign(i.prototype[t.key], e);
  }

}))(Kt, e))], qt.prototype, "layout", null);
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

const Xt = ((e, ...t) => {
  const i = t.reduce((t, i, s) => t + (e => {
    if (e instanceof ot) return e.cssText;
    if ("number" == typeof e) return e;
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`);
  })(i) + e[s + 1], e[0]);
  return new ot(i, rt);
})`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disable-touch-action{touch-action:none}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;
let Jt = class extends qt {};
var Yt;

function Zt(e, t) {
  (null == t || t > e.length) && (t = e.length);

  for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];

  return s;
}

Jt.styles = Xt, Jt = se([(Yt = "mwc-slider", e => "function" == typeof e ? ((e, t) => (window.customElements.define(e, t), t))(Yt, e) : ((e, t) => {
  const {
    kind: i,
    elements: s
  } = t;
  return {
    kind: i,
    elements: s,

    finisher(t) {
      window.customElements.define(e, t);
    }

  };
})(Yt, e))], Jt);

var Gt = function () {
  try {
    var e = function () {
      if (!ei) return ei = !0, Promise.resolve(Promise.resolve(!1)).then(function (e) {
        ei = e, window[Qt].dispatchEvent(new Event("change"));
      });
    }();

    return Promise.resolve(e && e.then ? e.then(function () {}) : void 0);
  } catch (e) {
    return Promise.reject(e);
  }
},
    Qt = "__foldables__",
    ei = !1,
    ti = function () {
  function e() {
    var e = this;
    if (void 0 !== window[Qt]) return window[Qt];
    var t = document.createDocumentFragment();
    this.addEventListener = t.addEventListener.bind(t), this.removeEventListener = t.removeEventListener.bind(t), this.dispatchEvent = function (i) {
      if ("change" === i.type) {
        var s = "on" + i.type;
        return "function" == typeof e[s] && e[s](i), t.dispatchEvent(i);
      }
    }, window.addEventListener("message", function (t) {
      "update" === t.data.action && Object.assign(e, t.data.value);
    }), window.addEventListener("resize", function () {
      return function (e, t) {
        var i;
        return function () {
          var t = arguments,
              s = this;
          clearTimeout(i), i = setTimeout(function () {
            return e.apply(s, t);
          }, 200);
        };
      }(Gt());
    });
  }

  var t;
  return e.prototype.getSegments = function () {
    if ("none" === this.screenSpanning) return [{
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }];

    if ("single-fold-horizontal" === this.screenSpanning) {
      var e = (window.innerHeight - this.browserShellSize) / 2,
          t = window.innerWidth;
      return [{
        top: 0,
        left: 0,
        width: t,
        height: e - this.foldSize / 2
      }, {
        top: e - this.foldSize / 2,
        height: this.foldSize,
        left: 0,
        width: t
      }, {
        top: e + this.foldSize / 2,
        left: 0,
        width: t,
        height: e - this.foldSize / 2
      }];
    }

    if ("single-fold-vertical" === this.screenSpanning) {
      var i = window.innerWidth / 2 - this.foldSize / 2,
          s = window.innerHeight;
      return [{
        top: 0,
        left: 0,
        width: i,
        height: s
      }, {
        top: 0,
        height: s,
        left: i,
        width: this.foldSize
      }, {
        top: 0,
        left: window.innerWidth / 2 + this.foldSize / 2,
        width: i,
        height: s
      }];
    }
  }, (t = [{
    key: "screenSpanning",
    get: function () {
      return sessionStorage.getItem(Qt + "-spanning") || "none";
    },
    set: function (e) {
      if (!["none", "single-fold-horizontal", "single-fold-vertical"].includes(e)) throw new TypeError(e);
      sessionStorage.setItem(Qt + "-spanning", e), Gt();
    }
  }, {
    key: "foldSize",
    get: function () {
      return +sessionStorage.getItem(Qt + "-fold-size") || 0;
    },
    set: function (e) {
      if (!(Number(e) >= 0)) throw new TypeError(e);
      sessionStorage.setItem(Qt + "-fold-size", e), Gt();
    }
  }, {
    key: "browserShellSize",
    get: function () {
      return +sessionStorage.getItem(Qt + "-browser-shell-size") || 0;
    },
    set: function (e) {
      if (!(Number(e) >= 0)) throw new TypeError(e);
      sessionStorage.setItem(Qt + "-browser-shell-size", e), Gt();
    }
  }]) && function (e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }(e.prototype, t), e;
}();

window[Qt] = new ti(), void 0 === window.getWindowSegments && (window.getWindowSegments = function () {
  var e = window[Qt].getSegments();
  return 1 === e.length ? e : [e[0], e[2]];
});
var ii = /\((.*?)\)/gi,
    si = /@media[^\(]+/gi;

function ni(e) {
  var t,
      i = function (e) {
    var t,
        i = new RegExp("(\\s*)(@media.*?\\bscreen-spanning\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}", "gi");
    if ("function" == typeof e.matchAll) t = Array.from(e.matchAll(i));else {
      for (t = []; t[t.length] = i.exec(e););

      t.length--;
    }
    return t;
  }(e),
      s = ((t = {})["single-fold-horizontal"] = "", t["single-fold-vertical"] = "", t.none = "", t);

  return i.forEach(function (e) {
    var t = e[1],
        i = e[2],
        n = e[3],
        r = e[4],
        o = "none";
    i.indexOf("single-fold-horizontal") > -1 && (o = "single-fold-horizontal"), i.indexOf("single-fold-vertical") > -1 && (o = "single-fold-vertical");
    var a = i.match(si) || [],
        d = i.match(ii) || [];
    d = d.filter(function (e) {
      return !e.includes("screen-spanning");
    }).join(" and "), s[o] += "" + t + a + d + "{" + n + r + "}";
  }), s;
}

var ri = window.matchMedia("(screen-spanning: single-fold-horizontal)").matches || window.matchMedia("(screen-spanning: single-fold-vertical)").matches || window.matchMedia("(screen-spanning: none)").matches || !1;
console.info("CSS Spanning Media Queries are supported? " + ri);
var oi,
    ai = new ti();

if (!ri) {
  var di = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));
  (oi = di, Promise.all(oi.map(function (e) {
    return e.href ? fetch(e.href).then(function (e) {
      return e.text();
    }) : e.textContent;
  }))).then(function (e) {
    var t = new DocumentFragment();
    e.forEach(function (e, i) {
      for (var s = function (e, t) {
        return e.replace(new RegExp("(\\s*)(@media.*?\\bscreen-spanning\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}", "gi"), t);
      }(e, ""), n = ni(e), r = di[i].href || "inline", o = 0, a = Object.entries(n); o < a.length; o++) {
        var d = a[o];
        li[d[0]] += "/* origin: " + r + " */" + d[1];
      }

      var l = document.createElement("style");
      l.setAttribute("data-css-origin", r), l.textContent = s, t.appendChild(l);
    }), di.forEach(function (e) {
      return null != e.parentElement && e.parentElement.removeChild(e);
    }), document.head.appendChild(t), function (e) {
      ri || (ci(e), ai.addEventListener("change", function () {
        return ci(e);
      }));
    }();
  });
}

var li = {
  "single-fold-horizontal": "",
  "single-fold-vertical": "",
  none: ""
};

function ci(e) {
  for (var t = ai, i = e ? li[e.nodeName.toLowerCase()][t.screenSpanning] : li[t.screenSpanning], s = e ? li[e.nodeName.toLowerCase()]["non-spanning"] : null, n = ai.getSegments(), r = 0, o = Object.entries(1 === n.length ? {} : n[1]); r < o.length; r++) {
    var a = o[r];
    d = a[1] + "px", i = i.replace(new RegExp("env\\(\\s*fold-" + a[0] + "\\s*\\)", "gi"), d);
  }

  var d,
      l = "__foldables_sheet__",
      c = function (e, t) {
    for (var i, s = function (e, t) {
      var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (i) return (i = i.call(e)).next.bind(i);

      if (Array.isArray(e) || (i = function (e, t) {
        if (e) {
          if ("string" == typeof e) return Zt(e, t);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Zt(e, t) : void 0;
        }
      }(e))) {
        i && (e = i);
        var s = 0;
        return function () {
          return s >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[s++]
          };
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }(e.querySelectorAll("." + l)); !(i = s()).done;) i.value.remove();

    var n = document.createElement("style");
    n.className = l, n.textContent = t, e === document ? document.head.appendChild(n) : e.appendChild(n);
  };

  if (e) {
    var h = e.shadowRoot;
    "adoptedStyleSheets" in h && h.adoptedStyleSheets.length > 0 ? h.adoptedStyleSheets[0].replace(s + i) : c(h, i);
  } else c(document, i);
}

const hi = {
  Foldable: "foldable",
  Dual: "dual"
};

class ui extends ie {}

e(ui, "styles", o`
    :host {
      width: 20px;
      height: 20px;
      cursor: pointer;
      opacity: 0.5;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host(:hover) {
      opacity: 1;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `);
customElements.define("close-icon", class extends ui {
  render() {
    return O`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `;
  }

});
customElements.define("fullscreen-icon", class extends ui {
  render() {
    return O`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `;
  }

});
customElements.define("splitview-icon", class extends ui {
  render() {
    return O`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `;
  }

});
customElements.define("rotate-icon", class extends ui {
  render() {
    return O`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `;
  }

});
customElements.define("minimize-icon", class extends ui {
  render() {
    return O`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `;
  }

});

class pi extends ie {
  static get properties() {
    return {
      spanning: {
        type: String
      }
    };
  }

  _inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return !0;
    }
  }

  constructor() {
    super(), e(this, "_mini_configurator_header", void 0), e(this, "_mini_configurator", void 0), e(this, "_configurator", void 0), e(this, "_configurator_header", void 0), e(this, "_device_type_select", void 0), e(this, "_orientation_select", void 0), e(this, "_seam_slider", void 0), e(this, "_seam_container", void 0), e(this, "_preview", void 0), e(this, "_preview_container", void 0), e(this, "_device", void 0), e(this, "_frame", void 0), e(this, "_device_hinge", void 0), e(this, "_currentOrientation", void 0), e(this, "_currentDevice", void 0), e(this, "_isFullscreen", !1), e(this, "_spanning", void 0), e(this, "_fold_width", void 0), e(this, "_browser_shell_size", void 0), e(this, "_x", 0), e(this, "_y", 0), e(this, "_offset_x", 0), e(this, "_offset_y", 0), e(this, "_resizeHandler", void 0), e(this, "_handleKeyUp", e => {
      73 == e.keyCode && e.ctrlKey && this._showMiniConfigurator();
    }), e(this, "_startDragMiniConfigurator", async e => {
      this._startDrag(e), this._mini_configurator_header.setPointerCapture(this._pointerId), this._mini_configurator_header.onpointerup = this._stopDragMiniConfigurator, this._mini_configurator_header.onpointercancel = this._stopDragMiniConfigurator, this._mini_configurator_header.onpointermove = this._miniConfiguratorMove;
    }), e(this, "_startDragConfigurator", async e => {
      this._startDrag(e), this._configurator_header.setPointerCapture(this._pointerId), this._configurator_header.onpointerup = this._stopDragConfigurator, this._configurator_header.onpointercancel = this._stopDragConfigurator, this._configurator_header.onpointermove = this._pointerMove;
    }), e(this, "_startDrag", async e => {
      this._isFullscreen || (this._moved = !1, this._x = e.clientX - this._offset_x, this._y = e.clientY - this._offset_y, this._pointerId = e.pointerId, e.preventDefault());
    }), e(this, "_miniConfiguratorMove", async e => {
      this._pointerMove(e), this._lastMiniConfiguratorPosition = {
        x: this._offset_x,
        y: this._offset_y
      };
    }), e(this, "_pointerMove", async e => {
      if (e.clientY < 0 || e.clientX < 0 || e.clientX > window.innerWidth || e.clientY > window.innerHeight) return;
      let t = e.clientX - this._x,
          i = e.clientY - this._y;
      const s = window.getComputedStyle(this.shadowRoot.host),
            n = parseFloat(s.width),
            r = parseFloat(s.height);
      t < 0 && (t = 0), i < 0 && (i = 0), i + r >= window.innerHeight && (i = window.innerHeight - r), t + n >= window.innerWidth && (t = window.innerWidth - n), this._updateConfiguratorPosition(t, i), e.preventDefault();
    }), e(this, "_stopDragConfigurator", async e => {
      this._configurator_header.onpointerup = null, this._configurator_header.onpointermove = null, this._configurator_header.releasePointerCapture(this._pointerId), this._stopDrag(e);
    }), e(this, "_stopDragMiniConfigurator", async e => {
      this._mini_configurator_header.onpointerup = null, this._mini_configurator_header.onpointermove = null, this._mini_configurator_header.releasePointerCapture(this._pointerId), this._stopDrag(e);
    }), e(this, "_stopDrag", async e => {
      this._x = this._offset_x, this._y = this._offset_y;
    }), e(this, "_onResize", async e => {
      this._handleAsusSpanning();
    }), e(this, "_seamValueUpdated", async e => {
      this.foldWidth = e.target.value, this.shadowRoot.host.style.setProperty("--device-fold-width", e.target.value + "px"), this._updateFoldablesFeature();
    }), e(this, "_rotationFinished", e => {
      this._preview.style.transition = "";
    }), this._spanning = "none";
  }

  firstUpdated() {
    if (this._inIframe()) return void (this.shadowRoot.host.style.display = "none");
    if (window.matchMedia("(screen-spanning: single-fold-horizontal)").matches || window.matchMedia("(screen-spanning: single-fold-vertical)").matches || window.matchMedia("(screen-spanning: none)").matches || !1) return console.info("CSS Spanning Media Queries are supported, the configurator will hide itself."), void (this.shadowRoot.host.style.display = "none");
    this._mini_configurator_header = this.shadowRoot.querySelector("#mini-configurator-header"), this._mini_configurator = this.shadowRoot.querySelector("#mini-configurator"), this._configurator = this.shadowRoot.querySelector("#configurator"), this._configurator_header = this.shadowRoot.querySelector("#configurator-header"), this._device_type_select = this.shadowRoot.querySelector("#device-select"), this._orientation_select = this.shadowRoot.querySelector("#orientation-select"), this._seam_slider = this.shadowRoot.getElementById("seam"), this._seam_container = this.shadowRoot.getElementById("seam-container"), this._configurator_header.onpointerdown = this._startDragConfigurator.bind(this), this._mini_configurator_header.onpointerdown = this._startDragMiniConfigurator.bind(this), this._device_type_select.onchange = this._deviceTypeChanged.bind(this), this._orientation_select.onchange = this._orientationChanged.bind(this), this._seam_slider.oninput = this._seamValueUpdated.bind(this);
    const e = window.getComputedStyle(this.shadowRoot.host);
    parseFloat(e.width);
    const t = parseFloat(e.height);
    this._updateConfiguratorPosition(20, window.innerHeight - t - 20), this._orientation_select.disabled = !0, this._seam_slider.disabled = !0, this._browser_shell_size = 0, this._spanning = "none", this.foldWidth = 0, this._preview = this.shadowRoot.querySelector("#preview"), this._preview_container = this.shadowRoot.querySelector("#preview-container"), this._device = this.shadowRoot.querySelector("#device"), this._frame = this.shadowRoot.querySelector("#frame"), this._device_hinge = this.shadowRoot.querySelector("#device-hinge"), this._updateFoldablesFeature(), this._currentOrientation = "none", this._deviceType = hi.Dual, document.addEventListener("keyup", this._handleKeyUp, !1), console.log("Device Pixel Ratio : " + window.devicePixelRatio);
  }

  _handleAsusSpanning() {
    console.log(window.innerHeight), window.innerHeight > 752 ? (this.spanning = "single-fold-horizontal", this.foldWidth = 30, this._updateFoldablesFeature(), setTimeout(() => {
      for (const e of document.styleSheets) if ("__foldables_sheet__" === e.ownerNode.className) {
        this._addZenbookVariables(e);

        break;
      }

      for (const e of this._frame.contentDocument.styleSheets) if ("__foldables_sheet__" === e.ownerNode.className) {
        this._addZenbookVariables(e);

        break;
      }
    }, 200)) : (this.spanning = "none", this.foldWidth = 0, this._updateFoldablesFeature()), this._currentOrientation = this.spanning;
  }

  _addZenbookVariables(e) {
    e.insertRule("body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}", e.cssRules.length);
  }

  get foldWidth() {
    return this._fold_width;
  }

  set foldWidth(e) {
    this._fold_width = Math.max(0, e);
  }

  _orientationChanged(e) {
    const t = this._orientation_select.selectedIndex;
    this.spanning = this._orientation_select[t].value, this._updatePreviewRotation(), this._updateFoldablesFeature(), this._calculateAndApplyScaleFactor();
  }

  _applyVerticalRotation() {
    this._frame.style.width = "calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))", this._frame.style.height = "var(--device-screen1-height)", this._isFullscreen ? (this._preview.style.left = "50%", this._preview.style.transform = "scale(var(--scale-factor)) translateX(-50%)") : (this._preview.style.left = "", this._preview.style.transform = "scale(var(--scale-factor))"), this._frame.style.transform = "", this._frame.style.top = "calc(var(--device-border) + var(--device-bezel-vertical))", this._frame.style.left = "calc(var(--device-bezel-horizontal) + var(--device-border))";
  }

  _applyHorizontalRotation() {
    this._frame.style.transform = "rotate(-90deg) translateX(-100%)", this._frame.style.width = "var(--device-screen1-height)", this._frame.style.height = "calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))", this._isFullscreen ? (this._preview.style.left = "50%", this._preview.style.transform = "scale(var(--scale-factor)) rotate(90deg) translateY(-50%)") : (this._preview.style.left = "", this._preview.style.transform = "scale(var(--scale-factor)) rotate(90deg) translateY(-100%)");
  }

  _updatePreviewRotation() {
    switch (this.spanning != this._currentOrientation && (this._preview.style.transition = "transform 0.7s ease-in-out", this._preview.addEventListener("transitionend", this._rotationFinished)), this._currentOrientation = this.spanning, this.spanning) {
      case "none":
        "asus" === this._currentDevice ? this._applyHorizontalRotation() : this._applyVerticalRotation();
        break;

      case "single-fold-vertical":
        this._applyVerticalRotation();

        break;

      case "single-fold-horizontal":
        this._applyHorizontalRotation();

    }
  }

  get spanning() {
    return this._spanning;
  }

  set spanning(e) {
    let t = this._spanning;

    switch (e) {
      case "none":
      case "single-fold-vertical":
        this._orientation_select.selectedIndex = 0;
        break;

      case "single-fold-horizontal":
        this._orientation_select.selectedIndex = 1;
        break;

      default:
        e = "none", this._orientation_select.selectedIndex = 0;
    }

    this._spanning = e, this.requestUpdate("spanning", t);
  }

  _deviceTypeChanged(e) {
    const t = this._device_type_select.selectedIndex,
          i = this._device_type_select[t].value;

    switch (window.removeEventListener("resize", this._resizeHandler), this._resizeHandler = null, "none" === this.spanning && (this._currentOrientation = this.spanning = "single-fold-vertical"), i) {
      case "custom":
        this._seam_container.style.display = "flex", this._orientation_select.disabled = !1, this._seam_slider.disabled = !1, this._seam_slider.layout(), this.foldWidth = 24, this._deviceType = hi.Dual, this._currentDevice = "custom";
        break;

      case "neo":
        this._orientation_select.disabled = !1, this._seam_slider.disabled = !0, this._seam_container.style.display = "none", this._deviceType = hi.Dual, this.foldWidth = 24, this._currentDevice = "neo";
        break;

      case "duo":
        this._orientation_select.disabled = !1, this._seam_slider.disabled = !0, this._seam_container.style.display = "none", this._deviceType = hi.Dual, this.foldWidth = 28, this._currentDevice = "duo";
        break;

      case "asus":
        this._resizeHandler = this._debounce(this._onResize, 200), window.addEventListener("resize", this._resizeHandler), this._deviceType = hi.Dual, this._handleAsusSpanning(), this._currentDevice = "asus", this._orientation_select.disabled = !0, this._seam_slider.disabled = !0, this._seam_container.style.display = "none";
        break;

      case "fold":
        this._orientation_select.disabled = !1, this._seam_container.style.display = "flex", this._seam_slider.disabled = !0, this._seam_container.style.display = "none", this._deviceType = hi.Foldable, this._seam_slider.layout(), this.foldWidth = 10, this._currentDevice = "fold";
        break;

      default:
        this._orientation_select.disabled = !0, this._seam_slider.disabled = !0, this._seam_container.style.display = "none", this._currentOrientation = this.spanning = "none", this._currentDevice = "duo", this.foldWidth = 0, this._deviceType = hi.Dual;
    }

    this._updatePreviewConfiguration(), this._updateFoldablesFeature(), this._frame.contentWindow.location.reload(!0);
  }

  _calculateAndApplyScaleFactor() {
    const e = window.getComputedStyle(this._preview_container),
          t = window.getComputedStyle(this._device),
          i = parseInt(e.width, 10),
          s = parseInt(e.height, 10);
    let n = parseInt(t.width, 10),
        r = parseInt(t.height, 10),
        o = 1;

    if ("single-fold-horizontal" == this._currentOrientation && (n = parseInt(t.height, 10), r = parseInt(t.width, 10)), r > s || n > i) {
      const e = s / r,
            t = i / n;
      o = t < e ? t : e;
    }

    this.shadowRoot.host.style.setProperty("--scale-factor", Math.trunc(100 * o) / 100);
  }

  _updatePreviewConfiguration() {
    switch (this._currentDevice) {
      case "neo":
        this.shadowRoot.host.style.setProperty("--device-screen1-width", "720px"), this.shadowRoot.host.style.setProperty("--device-screen2-width", "720px"), this.shadowRoot.host.style.setProperty("--device-screen1-height", "960px"), this.shadowRoot.host.style.setProperty("--device-screen2-height", "960px"), this.shadowRoot.host.style.setProperty("--device-fold-width", "24px");
        break;

      case "custom":
      case "duo":
        this.shadowRoot.host.style.setProperty("--device-screen1-width", "450px"), this.shadowRoot.host.style.setProperty("--device-screen2-width", "450px"), this.shadowRoot.host.style.setProperty("--device-screen1-height", "600px"), this.shadowRoot.host.style.setProperty("--device-screen2-height", "600px"), this.shadowRoot.host.style.setProperty("--device-fold-width", "28px");
        break;

      case "fold":
        this.shadowRoot.host.style.setProperty("--device-screen1-width", "614px"), this.shadowRoot.host.style.setProperty("--device-screen2-width", "614px"), this.shadowRoot.host.style.setProperty("--device-screen1-height", "861px"), this.shadowRoot.host.style.setProperty("--device-screen2-height", "861px"), this.shadowRoot.host.style.setProperty("--device-fold-width", "10px");
        break;

      case "asus":
        this.shadowRoot.host.style.setProperty("--device-screen1-width", "440px"), this.shadowRoot.host.style.setProperty("--device-screen2-width", "720px"), this.shadowRoot.host.style.setProperty("--device-screen1-height", "1396px"), this.shadowRoot.host.style.setProperty("--device-screen2-height", "1396px"), this.shadowRoot.host.style.setProperty("--device-fold-width", "30px");
    }

    this._deviceType === hi.Foldable ? (this._device_hinge.classList.add("fold"), this._device_hinge.classList.remove("hinge")) : (this._device_hinge.classList.remove("fold"), this._device_hinge.classList.add("hinge")), this._updatePreviewRotation(), this._calculateAndApplyScaleFactor();
  }

  _updateFoldablesFeature() {
    const e = new ti();
    e.foldSize = this.foldWidth, e.screenSpanning = this.spanning, this._seam_slider.value = this.foldWidth;
  }

  _debounce(e, t) {
    let i;
    return function () {
      clearTimeout(i), i = setTimeout(() => e.apply(this, arguments), t);
    };
  }

  _toggleFullscreen() {
    this._isFullscreen = !this._isFullscreen, this._isFullscreen ? (this.shadowRoot.host.style.transform = "", this.shadowRoot.host.classList.remove("configurator"), this.shadowRoot.host.classList.add("fullscreen")) : (this.shadowRoot.host.classList.remove("fullscreen"), this.shadowRoot.host.classList.add("configurator"), this._updateConfiguratorPosition(this._offset_x, this._offset_y)), this._updatePreviewConfiguration();
  }

  _closeConfigurator() {
    this.shadowRoot.host.style.visibility = "hidden", this._seam_slider.style.display = "none", this._preview.style.display = "none", this._mini_configurator.style.visibility = "hidden", this._configurator.style.visibility = "hidden";
  }

  _showMiniConfigurator() {
    this._isFullscreen && this._toggleFullscreen(), this.shadowRoot.host.classList.remove("fullscreen"), this.shadowRoot.host.classList.remove("configurator"), this.shadowRoot.host.style.visibility = "visible", this._seam_slider.style.display = "none", this._preview.style.display = "none", this._mini_configurator.style.visibility = "visible", this._configurator.style.visibility = "hidden", this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x, this._lastMiniConfiguratorPosition.y);
  }

  _showConfigurator() {
    this._frame.src || (this._frame.src = window.location.href), this._lastMiniConfiguratorPosition = {
      x: this._offset_x,
      y: this._offset_y
    }, this.shadowRoot.host.classList.add("configurator"), this.shadowRoot.host.style.visibility = "visible", this._seam_slider.style.display = "block", this._preview.style.display = "flex", this._mini_configurator.style.visibility = "hidden", this._configurator.style.visibility = "visible";
    let e = this._offset_x,
        t = this._offset_y;
    const i = window.getComputedStyle(this.shadowRoot.host),
          s = parseFloat(i.width),
          n = parseFloat(i.height);
    this._offset_y + n >= window.innerHeight && (t = window.innerHeight - n), this._offset_x + s >= window.innerWidth && (e = window.innerWidth - s), this._updateConfiguratorPosition(e, t), this._updatePreviewConfiguration();
  }

  _updateConfiguratorPosition(e, t) {
    this._offset_x = e, this._offset_y = t, this.shadowRoot.host.style.transform = "translate3d(" + e + "px, " + t + "px, 0)";
  }

  _toggleSpanning() {
    "none" != this.spanning ? this._device_type_select.selectedIndex = 0 : this._device_type_select.selectedIndex = 2, this._deviceTypeChanged();
  }

  _changeOrientation() {
    "none" !== this.spanning && ("single-fold-vertical" === this.spanning ? this.spanning = "single-fold-horizontal" : this.spanning = "single-fold-vertical", this._updatePreviewRotation(), this._updateFoldablesFeature(), this._calculateAndApplyScaleFactor());
  }

  render() {
    return O`
    <div id="mini-configurator">
      <div class="header-background header" id="mini-configurator-header">Foldable Configurator</div>
      <div class="icon-row">
        <splitview-icon @click="${this._toggleSpanning}" class="${"none" != this.spanning ? "toggle" : ""}"></splitview-icon>
        <rotate-icon @click="${this._changeOrientation}"></rotate-icon>
        <fullscreen-icon @click="${this._showConfigurator}"></fullscreen-icon>
        <close-icon @click="${this._closeConfigurator}"></close-icon>
      </div>
    </div>
    <div id="configurator">
      <div class="header-background header-configurator">
        <div id="configurator-header">Foldable Configurator</div>
        <div class="icons">
          <minimize-icon @click="${this._showMiniConfigurator}"></minimize-icon>
          <fullscreen-icon @click="${this._toggleFullscreen}"></fullscreen-icon>
          <close-icon @click="${this._closeConfigurator}"></close-icon>
        </div>
      </div>
      <div id="content">
        <label for="device-select" class="category">Device</label>
        <select id="device-select">
          <option value="standard">Off</option>
          <option value="custom">Custom...</option>
          <optgroup label="Presets">
            <option value="neo">Surface Neo</option>
            <option value="duo">Surface Duo</option>
            <option value="asus">Asus Zenbook Pro Duo</option>
            <option value="fold">Samsung Galaxy Fold</option>
          </optgroup>
        </select>
        <label for="orientation-select" class="category">Orientation</label>
        <select id="orientation-select" disabled>
          <option value="single-fold-vertical">Vertical</option>
          <option value="single-fold-horizontal">Horizontal</option>
        </select>
        <div id="preview-text">Below is an emulated version on the device when spanning :</div>
        <div id="preview-container">
          <div id="preview">
            <div id="device">
              <div class="screen right"></div>
              <div class="hinge" id="device-hinge">
                <div class="hinge-element"></div>
                <div class="hole"></div>
                <div class="hinge-element"></div>
              </div>
              <div class="screen left"></div>
            </div>
            <iframe id="frame" title="Preview of the device"></iframe>
          </div>
        </div>
        <div id="seam-container">
          <label for="seam" class="category">Seam width</label>
          <mwc-slider markers pin step="5" value="30" min="0" max="200" id="seam" disabled></mwc-slider>
        </div>
        <div class="legend"> If you close the configurator use CTRL + i to show it again </div>
      </div>
    </div>`;
  }

}

e(pi, "styles", o`
    :host {
      z-index: 9999;
      position: absolute;
      font-size: 12px;
      width: 12vw;
      height: 50px;

      /* Surface Duo */
      --device-screen1-width: 450px;
      --device-screen2-width: 450px;
      --device-screen1-height: 600px;
      --device-screen2-height: 600px;
      --device-border: 7px;
      --device-bezel-vertical: 19px;
      --device-bezel-horizontal: 8px;
      --device-fold-width: 28px;
      --scale-factor: 0.44;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      :host {
        width: 30vw;
      }
    }

    :host(.fullscreen) {
      height: 100vh;
      width: 100vw;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }

    :host(.configurator) {
      width: 450px;
      height: 430px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }

    #mini-configurator {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #f2f2f2;
      border: 1px solid #cccccc;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }

    #mini-configurator-header {
      font-size: 0.9em;
      height: 20px;
      margin-bottom: 5px;
    }

    .icon-row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .toggle {
      background-color: #b8b8b8;
      opacity: 1;
      border-radius: 4px;
    }

    #main-icon:hover {
      opacity: 0.8;
    }

    #main-icon {
      width: 100%;
      height: auto;
    }

    .header-background {
      background-color: #f2f2f2;
      border-bottom: 1px solid #cccccc;
      height: 28px;
    }

    .header {
      cursor: move;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      touch-action: none;
    }

    .header-configurator {
      cursor: move;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    #configurator {
      display: flex;
      flex-direction: column;
      background-color: white;
      overscroll-behavior: contain;
      width: 100%;
      height: 100%;
      visibility: hidden;
      border: 2px solid grey;
    }

    #configurator-header {
      flex-grow: 2;
      align-self: stretch;
      user-select: none;
      touch-action: none;
      cursor: move;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .icons {
      flex-basis: 90px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    #content {
      display: grid;
      grid-template-columns: 100px auto;
      grid-template-rows: auto auto auto 1fr auto auto;
      align-items: center;
      justify-items: start;
      height: 95%;
    }

    #content > * {
      margin: 12px 12px 0px 12px;
    }

    mwc-slider {
      --mdc-theme-secondary: black;
      width: 80%;
      margin-left: 12px;
    }

    #seam-container {
      grid-column: span 2;
      justify-content: flex-start;
      align-items: center;
      width: calc(100% - 32px);
      display: none;
    }

    #preview-text {
      grid-column: span 2;
      font-size : 1em;
    }

    #preview-container {
      grid-column: span 2;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      height: 100%;
      width: calc(100% - 34px);
    }

    #preview {
      transform: scale(var(--scale-factor));
      transform-origin: top left;
      position: fixed;
    }

    .preview-center {
      transform-origin: top left;
      transform: scale(var(--scale-factor)) translateX(-50%);
      left: 50%;
    }

    #device {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: calc( var(--device-screen2-width) + var(--device-screen1-width) +
          var(--device-fold-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen1-height) + 2 * var(--device-bezel-vertical));
      background-color: black;
      border-radius: 10px;
      border: var(--device-border) solid #b8b8b8;
    }

    .screen {
      pointer-events: none;
      background-color: black;
      border-radius: 10px;
    }

    .left {
      width: calc(var(--device-screen1-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen1-height) + 2 * var(--device-bezel-vertical));
    }

    .right {
      width: calc(var(--device-screen2-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen2 -height) + 2 * var(--device-bezel-vertical));
    }

    .hole {
      background-color: white;
      width: 5px;
      height: 100%;
    }

    .hinge-element {
      background-color: #b8b8b8;
      width: var(--device-fold-width);
      height: calc(var(--device-bezel-vertical) / 2);
      border-radius: 5px;
    }

    .hinge {
      width: var(--device-fold-width);
      height: calc(var(--device-screen1-height) + 2 *var(--device-bezel-vertical));
      z-index: 6;
      background-color: black;
      border: var(--device-border) solid black;
      border-top: var(--device-border) solid #b8b8b8;
      border-bottom: var(--device-border) solid #b8b8b8;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      border-radius: 10px;
    }

    .fold {
      width: calc(var(--device-fold-width) + 2 * var(--device-border));
      height: calc(var(--device-screen1-height) + 2 *var(--device-bezel-vertical));
      opacity: 0.4;
      z-index: 6;
      background-color: white;
    }

    .fold > * {
      display: none;
    }

    #frame {
      position: absolute;
      top: calc(var(--device-bezel-vertical) + var(--device-border));
      left: calc(var(--device-bezel-horizontal) + var(--device-border));
      width: calc(var(--device-screen1-width) + var(--device-screen2-width) +
        var(--device-fold-width));
      height: var(--device-screen1-height);
      z-index: 3;
      border: none;
      border-radius: 10px;
      transform-origin: top left;
    }

    .legend {
      font-size : 0.8em;
      height: 20px;
      text-align: center;
      grid-column: span 2;
    }
  `), customElements.define("foldable-device-configurator", pi);

export { hi as DeviceType, pi as FoldableDeviceConfigurator };
