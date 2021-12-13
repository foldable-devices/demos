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
      i = Symbol(),
      r = new Map();

class s {
  constructor(e, t) {
    if (this._$cssResult$ = !0, t !== i) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }

  get styleSheet() {
    let e = r.get(this.cssText);
    return t && void 0 === e && (r.set(this.cssText, e = new CSSStyleSheet()), e.replaceSync(this.cssText)), e;
  }

  toString() {
    return this.cssText;
  }

}

const n = t ? e => e : e => e instanceof CSSStyleSheet ? (e => {
  let t = "";

  for (const i of e.cssRules) t += i.cssText;

  return (e => new s("string" == typeof e ? e : e + "", i))(t);
})(e) : e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
;
var o;

const a = window.trustedTypes,
      d = a ? a.emptyScript : "",
      c = window.reactiveElementPolyfillSupport,
      l = {
  toAttribute(e, t) {
    switch (t) {
      case Boolean:
        e = e ? d : null;
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
      h = (e, t) => t !== e && (t == t || e == e),
      p = {
  attribute: !0,
  type: String,
  converter: l,
  reflect: !1,
  hasChanged: h
};

class u extends HTMLElement {
  constructor() {
    super(), this._$Et = new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$Ei = null, this.o();
  }

  static addInitializer(e) {
    var t;
    null !== (t = this.l) && void 0 !== t || (this.l = []), this.l.push(e);
  }

  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((t, i) => {
      const r = this._$Eh(i, t);

      void 0 !== r && (this._$Eu.set(r, i), e.push(r));
    }), e;
  }

  static createProperty(e, t = p) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const i = "symbol" == typeof e ? Symbol() : "__" + e,
            r = this.getPropertyDescriptor(e, i, t);
      void 0 !== r && Object.defineProperty(this.prototype, e, r);
    }
  }

  static getPropertyDescriptor(e, t, i) {
    return {
      get() {
        return this[t];
      },

      set(r) {
        const s = this[e];
        this[t] = r, this.requestUpdate(e, s, i);
      },

      configurable: !0,
      enumerable: !0
    };
  }

  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || p;
  }

  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);

    if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
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

      for (const e of i) t.unshift(n(e));
    } else void 0 !== e && t.push(n(e));

    return t;
  }

  static _$Eh(e, t) {
    const i = t.attribute;
    return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0;
  }

  o() {
    var e;
    this._$Ep = new Promise(e => this.enableUpdating = e), this._$AL = new Map(), this._$Em(), this.requestUpdate(), null === (e = this.constructor.l) || void 0 === e || e.forEach(e => e(this));
  }

  addController(e) {
    var t, i;
    (null !== (t = this._$Eg) && void 0 !== t ? t : this._$Eg = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (i = e.hostConnected) || void 0 === i || i.call(e));
  }

  removeController(e) {
    var t;
    null === (t = this._$Eg) || void 0 === t || t.splice(this._$Eg.indexOf(e) >>> 0, 1);
  }

  _$Em() {
    this.constructor.elementProperties.forEach((e, t) => {
      this.hasOwnProperty(t) && (this._$Et.set(t, this[t]), delete this[t]);
    });
  }

  createRenderRoot() {
    var e;
    const i = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return ((e, i) => {
      t ? e.adoptedStyleSheets = i.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet) : i.forEach(t => {
        const i = document.createElement("style"),
              r = window.litNonce;
        void 0 !== r && i.setAttribute("nonce", r), i.textContent = t.cssText, e.appendChild(i);
      });
    })(i, this.constructor.elementStyles), i;
  }

  connectedCallback() {
    var e;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$Eg) || void 0 === e || e.forEach(e => {
      var t;
      return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e);
    });
  }

  enableUpdating(e) {}

  disconnectedCallback() {
    var e;
    null === (e = this._$Eg) || void 0 === e || e.forEach(e => {
      var t;
      return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e);
    });
  }

  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }

  _$ES(e, t, i = p) {
    var r, s;

    const n = this.constructor._$Eh(e, i);

    if (void 0 !== n && !0 === i.reflect) {
      const o = (null !== (s = null === (r = i.converter) || void 0 === r ? void 0 : r.toAttribute) && void 0 !== s ? s : l.toAttribute)(t, i.type);
      this._$Ei = e, null == o ? this.removeAttribute(n) : this.setAttribute(n, o), this._$Ei = null;
    }
  }

  _$AK(e, t) {
    var i, r, s;

    const n = this.constructor,
          o = n._$Eu.get(e);

    if (void 0 !== o && this._$Ei !== o) {
      const e = n.getPropertyOptions(o),
            a = e.converter,
            d = null !== (s = null !== (r = null === (i = a) || void 0 === i ? void 0 : i.fromAttribute) && void 0 !== r ? r : "function" == typeof a ? a : null) && void 0 !== s ? s : l.fromAttribute;
      this._$Ei = o, this[o] = d(t, e.type), this._$Ei = null;
    }
  }

  requestUpdate(e, t, i) {
    let r = !0;
    void 0 !== e && (((i = i || this.constructor.getPropertyOptions(e)).hasChanged || h)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === i.reflect && this._$Ei !== e && (void 0 === this._$E_ && (this._$E_ = new Map()), this._$E_.set(e, i))) : r = !1), !this.isUpdatePending && r && (this._$Ep = this._$EC());
  }

  async _$EC() {
    this.isUpdatePending = !0;

    try {
      await this._$Ep;
    } catch (e) {
      Promise.reject(e);
    }

    const e = this.scheduleUpdate();
    return null != e && (await e), !this.isUpdatePending;
  }

  scheduleUpdate() {
    return this.performUpdate();
  }

  performUpdate() {
    var e;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((e, t) => this[t] = e), this._$Et = void 0);
    let t = !1;
    const i = this._$AL;

    try {
      t = this.shouldUpdate(i), t ? (this.willUpdate(i), null === (e = this._$Eg) || void 0 === e || e.forEach(e => {
        var t;
        return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e);
      }), this.update(i)) : this._$EU();
    } catch (e) {
      throw t = !1, this._$EU(), e;
    }

    t && this._$AE(i);
  }

  willUpdate(e) {}

  _$AE(e) {
    var t;
    null === (t = this._$Eg) || void 0 === t || t.forEach(e => {
      var t;
      return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }

  _$EU() {
    this._$AL = new Map(), this.isUpdatePending = !1;
  }

  get updateComplete() {
    return this.getUpdateComplete();
  }

  getUpdateComplete() {
    return this._$Ep;
  }

  shouldUpdate(e) {
    return !0;
  }

  update(e) {
    void 0 !== this._$E_ && (this._$E_.forEach((e, t) => this._$ES(t, this[t], e)), this._$E_ = void 0), this._$EU();
  }

  updated(e) {}

  firstUpdated(e) {}

}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


var m;
u.finalized = !0, u.elementProperties = new Map(), u.elementStyles = [], u.shadowRootOptions = {
  mode: "open"
}, null == c || c({
  ReactiveElement: u
}), (null !== (o = globalThis.reactiveElementVersions) && void 0 !== o ? o : globalThis.reactiveElementVersions = []).push("1.0.2");

const v = globalThis.trustedTypes,
      f = v ? v.createPolicy("lit-html", {
  createHTML: e => e
}) : void 0,
      g = `lit$${(Math.random() + "").slice(9)}$`,
      y = "?" + g,
      b = `<${y}>`,
      _ = document,
      w = (e = "") => _.createComment(e),
      S = e => null === e || "object" != typeof e && "function" != typeof e,
      T = Array.isArray,
      E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      A = /-->/g,
      x = />/g,
      R = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      C = /'/g,
      k = /"/g,
      $ = /^(?:script|style|textarea)$/i,
      I = (e => (t, ...i) => ({
  _$litType$: e,
  strings: t,
  values: i
}))(1),
      P = Symbol.for("lit-noChange"),
      D = Symbol.for("lit-nothing"),
      z = new WeakMap(),
      V = _.createTreeWalker(_, 129, null, !1);

class F {
  constructor({
    strings: e,
    _$litType$: t
  }, i) {
    let r;
    this.parts = [];
    let s = 0,
        n = 0;

    const o = e.length - 1,
          a = this.parts,
          [d, c] = ((e, t) => {
      const i = e.length - 1,
            r = [];
      let s,
          n = 2 === t ? "<svg>" : "",
          o = E;

      for (let t = 0; t < i; t++) {
        const i = e[t];
        let a,
            d,
            c = -1,
            l = 0;

        for (; l < i.length && (o.lastIndex = l, d = o.exec(i), null !== d);) l = o.lastIndex, o === E ? "!--" === d[1] ? o = A : void 0 !== d[1] ? o = x : void 0 !== d[2] ? ($.test(d[2]) && (s = RegExp("</" + d[2], "g")), o = R) : void 0 !== d[3] && (o = R) : o === R ? ">" === d[0] ? (o = null != s ? s : E, c = -1) : void 0 === d[1] ? c = -2 : (c = o.lastIndex - d[2].length, a = d[1], o = void 0 === d[3] ? R : '"' === d[3] ? k : C) : o === k || o === C ? o = R : o === A || o === x ? o = E : (o = R, s = void 0);

        const h = o === R && e[t + 1].startsWith("/>") ? " " : "";
        n += o === E ? i + b : c >= 0 ? (r.push(a), i.slice(0, c) + "$lit$" + i.slice(c) + g + h) : i + g + (-2 === c ? (r.push(void 0), t) : h);
      }

      const a = n + (e[i] || "<?>") + (2 === t ? "</svg>" : "");
      return [void 0 !== f ? f.createHTML(a) : a, r];
    })(e, t);

    if (this.el = F.createElement(d, i), V.currentNode = this.el.content, 2 === t) {
      const e = this.el.content,
            t = e.firstChild;
      t.remove(), e.append(...t.childNodes);
    }

    for (; null !== (r = V.nextNode()) && a.length < o;) {
      if (1 === r.nodeType) {
        if (r.hasAttributes()) {
          const e = [];

          for (const t of r.getAttributeNames()) if (t.endsWith("$lit$") || t.startsWith(g)) {
            const i = c[n++];

            if (e.push(t), void 0 !== i) {
              const e = r.getAttribute(i.toLowerCase() + "$lit$").split(g),
                    t = /([.?@])?(.*)/.exec(i);
              a.push({
                type: 1,
                index: s,
                name: t[2],
                strings: e,
                ctor: "." === t[1] ? U : "?" === t[1] ? B : "@" === t[1] ? j : N
              });
            } else a.push({
              type: 6,
              index: s
            });
          }

          for (const t of e) r.removeAttribute(t);
        }

        if ($.test(r.tagName)) {
          const e = r.textContent.split(g),
                t = e.length - 1;

          if (t > 0) {
            r.textContent = v ? v.emptyScript : "";

            for (let i = 0; i < t; i++) r.append(e[i], w()), V.nextNode(), a.push({
              type: 2,
              index: ++s
            });

            r.append(e[t], w());
          }
        }
      } else if (8 === r.nodeType) if (r.data === y) a.push({
        type: 2,
        index: s
      });else {
        let e = -1;

        for (; -1 !== (e = r.data.indexOf(g, e + 1));) a.push({
          type: 7,
          index: s
        }), e += g.length - 1;
      }

      s++;
    }
  }

  static createElement(e, t) {
    const i = _.createElement("template");

    return i.innerHTML = e, i;
  }

}

function H(e, t, i = e, r) {
  var s, n, o, a;
  if (t === P) return t;
  let d = void 0 !== r ? null === (s = i._$Cl) || void 0 === s ? void 0 : s[r] : i._$Cu;
  const c = S(t) ? void 0 : t._$litDirective$;
  return (null == d ? void 0 : d.constructor) !== c && (null === (n = null == d ? void 0 : d._$AO) || void 0 === n || n.call(d, !1), void 0 === c ? d = void 0 : (d = new c(e), d._$AT(e, i, r)), void 0 !== r ? (null !== (o = (a = i)._$Cl) && void 0 !== o ? o : a._$Cl = [])[r] = d : i._$Cu = d), void 0 !== d && (t = H(e, d._$AS(e, t.values), d, r)), t;
}

class M {
  constructor(e, t) {
    this.v = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }

  get parentNode() {
    return this._$AM.parentNode;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  p(e) {
    var t;
    const {
      el: {
        content: i
      },
      parts: r
    } = this._$AD,
          s = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : _).importNode(i, !0);
    V.currentNode = s;
    let n = V.nextNode(),
        o = 0,
        a = 0,
        d = r[0];

    for (; void 0 !== d;) {
      if (o === d.index) {
        let t;
        2 === d.type ? t = new L(n, n.nextSibling, this, e) : 1 === d.type ? t = new d.ctor(n, d.name, d.strings, this, e) : 6 === d.type && (t = new W(n, this, e)), this.v.push(t), d = r[++a];
      }

      o !== (null == d ? void 0 : d.index) && (n = V.nextNode(), o++);
    }

    return s;
  }

  m(e) {
    let t = 0;

    for (const i of this.v) void 0 !== i && (void 0 !== i.strings ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }

}

class L {
  constructor(e, t, i, r) {
    var s;
    this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = r, this._$Cg = null === (s = null == r ? void 0 : r.isConnected) || void 0 === s || s;
  }

  get _$AU() {
    var e, t;
    return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cg;
  }

  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return void 0 !== t && 11 === e.nodeType && (e = t.parentNode), e;
  }

  get startNode() {
    return this._$AA;
  }

  get endNode() {
    return this._$AB;
  }

  _$AI(e, t = this) {
    e = H(this, e, t), S(e) ? e === D || null == e || "" === e ? (this._$AH !== D && this._$AR(), this._$AH = D) : e !== this._$AH && e !== P && this.$(e) : void 0 !== e._$litType$ ? this.T(e) : void 0 !== e.nodeType ? this.S(e) : (e => {
      var t;
      return T(e) || "function" == typeof (null === (t = e) || void 0 === t ? void 0 : t[Symbol.iterator]);
    })(e) ? this.M(e) : this.$(e);
  }

  A(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t);
  }

  S(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.A(e));
  }

  $(e) {
    this._$AH !== D && S(this._$AH) ? this._$AA.nextSibling.data = e : this.S(_.createTextNode(e)), this._$AH = e;
  }

  T(e) {
    var t;
    const {
      values: i,
      _$litType$: r
    } = e,
          s = "number" == typeof r ? this._$AC(e) : (void 0 === r.el && (r.el = F.createElement(r.h, this.options)), r);
    if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === s) this._$AH.m(i);else {
      const e = new M(s, this),
            t = e.p(this.options);
      e.m(i), this.S(t), this._$AH = e;
    }
  }

  _$AC(e) {
    let t = z.get(e.strings);
    return void 0 === t && z.set(e.strings, t = new F(e)), t;
  }

  M(e) {
    T(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i,
        r = 0;

    for (const s of e) r === t.length ? t.push(i = new L(this.A(w()), this.A(w()), this, this.options)) : i = t[r], i._$AI(s), r++;

    r < t.length && (this._$AR(i && i._$AB.nextSibling, r), t.length = r);
  }

  _$AR(e = this._$AA.nextSibling, t) {
    var i;

    for (null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, t); e && e !== this._$AB;) {
      const t = e.nextSibling;
      e.remove(), e = t;
    }
  }

  setConnected(e) {
    var t;
    void 0 === this._$AM && (this._$Cg = e, null === (t = this._$AP) || void 0 === t || t.call(this, e));
  }

}

class N {
  constructor(e, t, i, r, s) {
    this.type = 1, this._$AH = D, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = s, i.length > 2 || "" !== i[0] || "" !== i[1] ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = D;
  }

  get tagName() {
    return this.element.tagName;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  _$AI(e, t = this, i, r) {
    const s = this.strings;
    let n = !1;
    if (void 0 === s) e = H(this, e, t, 0), n = !S(e) || e !== this._$AH && e !== P, n && (this._$AH = e);else {
      const r = e;
      let o, a;

      for (e = s[0], o = 0; o < s.length - 1; o++) a = H(this, r[i + o], t, o), a === P && (a = this._$AH[o]), n || (n = !S(a) || a !== this._$AH[o]), a === D ? e = D : e !== D && (e += (null != a ? a : "") + s[o + 1]), this._$AH[o] = a;
    }
    n && !r && this.k(e);
  }

  k(e) {
    e === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "");
  }

}

class U extends N {
  constructor() {
    super(...arguments), this.type = 3;
  }

  k(e) {
    this.element[this.name] = e === D ? void 0 : e;
  }

}

const O = v ? v.emptyScript : "";

class B extends N {
  constructor() {
    super(...arguments), this.type = 4;
  }

  k(e) {
    e && e !== D ? this.element.setAttribute(this.name, O) : this.element.removeAttribute(this.name);
  }

}

class j extends N {
  constructor(e, t, i, r, s) {
    super(e, t, i, r, s), this.type = 5;
  }

  _$AI(e, t = this) {
    var i;
    if ((e = null !== (i = H(this, e, t, 0)) && void 0 !== i ? i : D) === P) return;
    const r = this._$AH,
          s = e === D && r !== D || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive,
          n = e !== D && (r === D || s);
    s && this.element.removeEventListener(this.name, this, r), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }

  handleEvent(e) {
    var t, i;
    "function" == typeof this._$AH ? this._$AH.call(null !== (i = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== i ? i : this.element, e) : this._$AH.handleEvent(e);
  }

}

class W {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  _$AI(e) {
    H(this, e);
  }

}

const q = window.litHtmlPolyfillSupport;
null == q || q(F, L), (null !== (m = globalThis.litHtmlVersions) && void 0 !== m ? m : globalThis.litHtmlVersions = []).push("2.0.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const X = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
      G = Symbol(),
      K = new Map();

class Y {
  constructor(e, t) {
    if (this._$cssResult$ = !0, t !== G) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }

  get styleSheet() {
    let e = K.get(this.cssText);
    return X && void 0 === e && (K.set(this.cssText, e = new CSSStyleSheet()), e.replaceSync(this.cssText)), e;
  }

  toString() {
    return this.cssText;
  }

}

const Z = (e, ...t) => {
  const i = 1 === e.length ? e[0] : t.reduce((t, i, r) => t + (e => {
    if (!0 === e._$cssResult$) return e.cssText;
    if ("number" == typeof e) return e;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + e[r + 1], e[0]);
  return new Y(i, G);
},
      J = X ? e => e : e => e instanceof CSSStyleSheet ? (e => {
  let t = "";

  for (const i of e.cssRules) t += i.cssText;

  return (e => new Y("string" == typeof e ? e : e + "", G))(t);
})(e) : e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
;

var Q;

const ee = window.trustedTypes,
      te = ee ? ee.emptyScript : "",
      ie = window.reactiveElementPolyfillSupport,
      re = {
  toAttribute(e, t) {
    switch (t) {
      case Boolean:
        e = e ? te : null;
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
      se = (e, t) => t !== e && (t == t || e == e),
      ne = {
  attribute: !0,
  type: String,
  converter: re,
  reflect: !1,
  hasChanged: se
};

class oe extends HTMLElement {
  constructor() {
    super(), this._$Et = new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$Ei = null, this.o();
  }

  static addInitializer(e) {
    var t;
    null !== (t = this.l) && void 0 !== t || (this.l = []), this.l.push(e);
  }

  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((t, i) => {
      const r = this._$Eh(i, t);

      void 0 !== r && (this._$Eu.set(r, i), e.push(r));
    }), e;
  }

  static createProperty(e, t = ne) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const i = "symbol" == typeof e ? Symbol() : "__" + e,
            r = this.getPropertyDescriptor(e, i, t);
      void 0 !== r && Object.defineProperty(this.prototype, e, r);
    }
  }

  static getPropertyDescriptor(e, t, i) {
    return {
      get() {
        return this[t];
      },

      set(r) {
        const s = this[e];
        this[t] = r, this.requestUpdate(e, s, i);
      },

      configurable: !0,
      enumerable: !0
    };
  }

  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || ne;
  }

  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);

    if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
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

      for (const e of i) t.unshift(J(e));
    } else void 0 !== e && t.push(J(e));

    return t;
  }

  static _$Eh(e, t) {
    const i = t.attribute;
    return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0;
  }

  o() {
    var e;
    this._$Ep = new Promise(e => this.enableUpdating = e), this._$AL = new Map(), this._$Em(), this.requestUpdate(), null === (e = this.constructor.l) || void 0 === e || e.forEach(e => e(this));
  }

  addController(e) {
    var t, i;
    (null !== (t = this._$Eg) && void 0 !== t ? t : this._$Eg = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (i = e.hostConnected) || void 0 === i || i.call(e));
  }

  removeController(e) {
    var t;
    null === (t = this._$Eg) || void 0 === t || t.splice(this._$Eg.indexOf(e) >>> 0, 1);
  }

  _$Em() {
    this.constructor.elementProperties.forEach((e, t) => {
      this.hasOwnProperty(t) && (this._$Et.set(t, this[t]), delete this[t]);
    });
  }

  createRenderRoot() {
    var e;
    const t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return ((e, t) => {
      X ? e.adoptedStyleSheets = t.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach(t => {
        const i = document.createElement("style"),
              r = window.litNonce;
        void 0 !== r && i.setAttribute("nonce", r), i.textContent = t.cssText, e.appendChild(i);
      });
    })(t, this.constructor.elementStyles), t;
  }

  connectedCallback() {
    var e;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$Eg) || void 0 === e || e.forEach(e => {
      var t;
      return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e);
    });
  }

  enableUpdating(e) {}

  disconnectedCallback() {
    var e;
    null === (e = this._$Eg) || void 0 === e || e.forEach(e => {
      var t;
      return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e);
    });
  }

  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }

  _$ES(e, t, i = ne) {
    var r, s;

    const n = this.constructor._$Eh(e, i);

    if (void 0 !== n && !0 === i.reflect) {
      const o = (null !== (s = null === (r = i.converter) || void 0 === r ? void 0 : r.toAttribute) && void 0 !== s ? s : re.toAttribute)(t, i.type);
      this._$Ei = e, null == o ? this.removeAttribute(n) : this.setAttribute(n, o), this._$Ei = null;
    }
  }

  _$AK(e, t) {
    var i, r, s;

    const n = this.constructor,
          o = n._$Eu.get(e);

    if (void 0 !== o && this._$Ei !== o) {
      const e = n.getPropertyOptions(o),
            a = e.converter,
            d = null !== (s = null !== (r = null === (i = a) || void 0 === i ? void 0 : i.fromAttribute) && void 0 !== r ? r : "function" == typeof a ? a : null) && void 0 !== s ? s : re.fromAttribute;
      this._$Ei = o, this[o] = d(t, e.type), this._$Ei = null;
    }
  }

  requestUpdate(e, t, i) {
    let r = !0;
    void 0 !== e && (((i = i || this.constructor.getPropertyOptions(e)).hasChanged || se)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === i.reflect && this._$Ei !== e && (void 0 === this._$E_ && (this._$E_ = new Map()), this._$E_.set(e, i))) : r = !1), !this.isUpdatePending && r && (this._$Ep = this._$EC());
  }

  async _$EC() {
    this.isUpdatePending = !0;

    try {
      await this._$Ep;
    } catch (e) {
      Promise.reject(e);
    }

    const e = this.scheduleUpdate();
    return null != e && (await e), !this.isUpdatePending;
  }

  scheduleUpdate() {
    return this.performUpdate();
  }

  performUpdate() {
    var e;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((e, t) => this[t] = e), this._$Et = void 0);
    let t = !1;
    const i = this._$AL;

    try {
      t = this.shouldUpdate(i), t ? (this.willUpdate(i), null === (e = this._$Eg) || void 0 === e || e.forEach(e => {
        var t;
        return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e);
      }), this.update(i)) : this._$EU();
    } catch (e) {
      throw t = !1, this._$EU(), e;
    }

    t && this._$AE(i);
  }

  willUpdate(e) {}

  _$AE(e) {
    var t;
    null === (t = this._$Eg) || void 0 === t || t.forEach(e => {
      var t;
      return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }

  _$EU() {
    this._$AL = new Map(), this.isUpdatePending = !1;
  }

  get updateComplete() {
    return this.getUpdateComplete();
  }

  getUpdateComplete() {
    return this._$Ep;
  }

  shouldUpdate(e) {
    return !0;
  }

  update(e) {
    void 0 !== this._$E_ && (this._$E_.forEach((e, t) => this._$ES(t, this[t], e)), this._$E_ = void 0), this._$EU();
  }

  updated(e) {}

  firstUpdated(e) {}

}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


var ae, de;
oe.finalized = !0, oe.elementProperties = new Map(), oe.elementStyles = [], oe.shadowRootOptions = {
  mode: "open"
}, null == ie || ie({
  ReactiveElement: oe
}), (null !== (Q = globalThis.reactiveElementVersions) && void 0 !== Q ? Q : globalThis.reactiveElementVersions = []).push("1.0.2");

class ce extends oe {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Dt = void 0;
  }

  createRenderRoot() {
    var e, t;
    const i = super.createRenderRoot();
    return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = i.firstChild), i;
  }

  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Dt = ((e, t, i) => {
      var r, s;
      const n = null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r ? r : t;
      let o = n._$litPart$;

      if (void 0 === o) {
        const e = null !== (s = null == i ? void 0 : i.renderBefore) && void 0 !== s ? s : null;
        n._$litPart$ = o = new L(t.insertBefore(w(), e), e, void 0, null != i ? i : {});
      }

      return o._$AI(e), o;
    })(t, this.renderRoot, this.renderOptions);
  }

  connectedCallback() {
    var e;
    super.connectedCallback(), null === (e = this._$Dt) || void 0 === e || e.setConnected(!0);
  }

  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), null === (e = this._$Dt) || void 0 === e || e.setConnected(!1);
  }

  render() {
    return P;
  }

}

ce.finalized = !0, ce._$litElement$ = !0, null === (ae = globalThis.litElementHydrateSupport) || void 0 === ae || ae.call(globalThis, {
  LitElement: ce
});
const le = globalThis.litElementPolyfillSupport;
null == le || le({
  LitElement: ce
}), (null !== (de = globalThis.litElementVersions) && void 0 !== de ? de : globalThis.litElementVersions = []).push("3.0.2");
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

var he = function (e, t) {
  return he = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
  }, he(e, t);
};

function pe(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

  function i() {
    this.constructor = e;
  }

  he(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}

var ue = function () {
  return ue = Object.assign || function (e) {
    for (var t, i = 1, r = arguments.length; i < r; i++) for (var s in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);

    return e;
  }, ue.apply(this, arguments);
};

function me(e, t, i, r) {
  var s,
      n = arguments.length,
      o = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, r);else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o);
  return n > 3 && o && Object.defineProperty(t, i, o), o;
}

function ve(e) {
  var t = "function" == typeof Symbol && Symbol.iterator,
      i = t && e[t],
      r = 0;
  if (i) return i.call(e);
  if (e && "number" == typeof e.length) return {
    next: function () {
      return e && r >= e.length && (e = void 0), {
        value: e && e[r++],
        done: !e
      };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const fe = e => t => "function" == typeof t ? ((e, t) => (window.customElements.define(e, t), t))(e, t) : ((e, t) => {
  const {
    kind: i,
    elements: r
  } = t;
  return {
    kind: i,
    elements: r,

    finisher(t) {
      window.customElements.define(e, t);
    }

  };
})(e, t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
,
      ge = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? { ...t,

  finisher(i) {
    i.createProperty(t.key, e);
  }

} : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  originalKey: t.key,

  initializer() {
    "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this));
  },

  finisher(i) {
    i.createProperty(t.key, e);
  }

};

function ye(e) {
  return (t, i) => void 0 !== i ? ((e, t, i) => {
    t.constructor.createProperty(i, e);
  })(e, t, i) : ge(e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


function be(e) {
  return ye({ ...e,
    state: !0
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const _e = ({
  finisher: e,
  descriptor: t
}) => (i, r) => {
  var s;

  if (void 0 === r) {
    const r = null !== (s = i.originalKey) && void 0 !== s ? s : i.key,
          n = null != t ? {
      kind: "method",
      placement: "prototype",
      key: r,
      descriptor: t(i.key)
    } : { ...i,
      key: r
    };
    return null != e && (n.finisher = function (t) {
      e(t, r);
    }), n;
  }

  {
    const s = i.constructor;
    void 0 !== t && Object.defineProperty(i, r, t(r)), null == e || e(s, r);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
;

function we(e, t) {
  return _e({
    descriptor: i => {
      const r = {
        get() {
          var t, i;
          return null !== (i = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e)) && void 0 !== i ? i : null;
        },

        enumerable: !0,
        configurable: !0
      };

      if (t) {
        const t = "symbol" == typeof i ? Symbol() : "__" + i;

        r.get = function () {
          var i, r;
          return void 0 === this[t] && (this[t] = null !== (r = null === (i = this.renderRoot) || void 0 === i ? void 0 : i.querySelector(e)) && void 0 !== r ? r : null), this[t];
        };
      }

      return r;
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */


const Se = Z`.mdc-slider{cursor:pointer;height:48px;margin:0 24px;position:relative;touch-action:pan-y}.mdc-slider .mdc-slider__track{height:4px;position:absolute;top:50%;transform:translateY(-50%);width:100%}.mdc-slider .mdc-slider__track--active,.mdc-slider .mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider .mdc-slider__track--active{border-radius:3px;height:6px;overflow:hidden;top:-1px}.mdc-slider .mdc-slider__track--active_fill{border-top:6px solid;box-sizing:border-box;height:100%;width:100%;position:relative;-webkit-transform-origin:left;transform-origin:left}[dir=rtl] .mdc-slider .mdc-slider__track--active_fill,.mdc-slider .mdc-slider__track--active_fill[dir=rtl]{-webkit-transform-origin:right;transform-origin:right}.mdc-slider .mdc-slider__track--inactive{border-radius:2px;height:4px;left:0;top:0}.mdc-slider .mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}.mdc-slider .mdc-slider__track--active_fill{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-slider.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider .mdc-slider__track--inactive{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);opacity:.24}.mdc-slider.mdc-slider--disabled .mdc-slider__track--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:.24}.mdc-slider .mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:translateX(-50%)}.mdc-slider .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0.4, 0, 1, 1);align-items:center;border-radius:4px;display:flex;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom}.mdc-slider .mdc-slider__value-indicator::before{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0}.mdc-slider .mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}@media(prefers-reduced-motion){.mdc-slider .mdc-slider__value-indicator,.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:none}}.mdc-slider .mdc-slider__value-indicator-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit)}.mdc-slider .mdc-slider__value-indicator{background-color:#000;opacity:.6}.mdc-slider .mdc-slider__value-indicator::before{border-top-color:#000}.mdc-slider .mdc-slider__value-indicator{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-slider .mdc-slider__thumb{display:flex;height:48px;left:-24px;outline:none;position:absolute;user-select:none;width:48px}.mdc-slider .mdc-slider__thumb--top{z-index:1}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-style:solid;border-width:1px;box-sizing:content-box}.mdc-slider .mdc-slider__thumb-knob{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);border:10px solid;border-radius:50%;box-sizing:border-box;height:20px;left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);width:20px}.mdc-slider .mdc-slider__thumb-knob{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider .mdc-slider__thumb::before,.mdc-slider .mdc-slider__thumb::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-slider .mdc-slider__thumb:hover::before,.mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-slider .mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider .mdc-slider__tick-mark--active,.mdc-slider .mdc-slider__tick-mark--inactive{border-radius:50%;height:2px;width:2px}.mdc-slider .mdc-slider__tick-mark--active{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff);opacity:.6}.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--active{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff);opacity:.6}.mdc-slider .mdc-slider__tick-mark--inactive{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);opacity:.6}.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:.6}.mdc-slider.mdc-slider--disabled{opacity:.38;cursor:auto}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:transform 80ms ease}@media(prefers-reduced-motion){.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:none}}.mdc-slider__input{cursor:pointer;left:0;margin:0;height:100%;opacity:0;pointer-events:none;position:absolute;top:0;width:100%}:host{outline:none;display:block;-webkit-tap-highlight-color:transparent}.ripple{--mdc-ripple-color:#6200ee;--mdc-ripple-color:var(--mdc-theme-primary, #6200ee)}`
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
;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

const Te = () => {},
      Ee = {
  get passive() {
    return !1;
  }

};

document.addEventListener("x", Te, Ee), document.removeEventListener("x", Te);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

class Ae extends ce {
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


var xe = function () {
  function e(e) {
    void 0 === e && (e = {}), this.adapter = e;
  }

  return Object.defineProperty(e, "cssClasses", {
    get: function () {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "strings", {
    get: function () {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "numbers", {
    get: function () {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "defaultAdapter", {
    get: function () {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.init = function () {}, e.prototype.destroy = function () {}, e;
}(),
    Re = {
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
},
    Ce = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
},
    ke = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: .6,
  PADDING: 10,
  TAP_DELAY_MS: 300
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


var $e = ["touchstart", "pointerdown", "mousedown", "keydown"],
    Ie = ["touchend", "pointerup", "mouseup", "contextmenu"],
    Pe = [],
    De = function (e) {
  function t(i) {
    var r = e.call(this, ue(ue({}, t.defaultAdapter), i)) || this;
    return r.activationAnimationHasEnded = !1, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = {
      width: 0,
      height: 0
    }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = {
      left: 0,
      top: 0
    }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function () {
      r.activationAnimationHasEnded = !0, r.runDeactivationUXLogicIfReady();
    }, r.activateHandler = function (e) {
      r.activateImpl(e);
    }, r.deactivateHandler = function () {
      r.deactivateImpl();
    }, r.focusHandler = function () {
      r.handleFocus();
    }, r.blurHandler = function () {
      r.handleBlur();
    }, r.resizeHandler = function () {
      r.layout();
    }, r;
  }

  return pe(t, e), Object.defineProperty(t, "cssClasses", {
    get: function () {
      return Re;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "strings", {
    get: function () {
      return Ce;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "numbers", {
    get: function () {
      return ke;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {},
        browserSupportsCssVars: function () {
          return !0;
        },
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
        containsEventTarget: function () {
          return !0;
        },
        deregisterDocumentInteractionHandler: function () {},
        deregisterInteractionHandler: function () {},
        deregisterResizeHandler: function () {},
        getWindowPageOffset: function () {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function () {
          return !0;
        },
        isSurfaceDisabled: function () {
          return !0;
        },
        isUnbounded: function () {
          return !0;
        },
        registerDocumentInteractionHandler: function () {},
        registerInteractionHandler: function () {},
        registerResizeHandler: function () {},
        removeClass: function () {},
        updateCssVariable: function () {}
      };
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.init = function () {
    var e = this,
        i = this.supportsPressRipple();

    if (this.registerRootHandlers(i), i) {
      var r = t.cssClasses,
          s = r.ROOT,
          n = r.UNBOUNDED;
      requestAnimationFrame(function () {
        e.adapter.addClass(s), e.adapter.isUnbounded() && (e.adapter.addClass(n), e.layoutInternal());
      });
    }
  }, t.prototype.destroy = function () {
    var e = this;

    if (this.supportsPressRipple()) {
      this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));
      var i = t.cssClasses,
          r = i.ROOT,
          s = i.UNBOUNDED;
      requestAnimationFrame(function () {
        e.adapter.removeClass(r), e.adapter.removeClass(s), e.removeCssVars();
      });
    }

    this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
  }, t.prototype.activate = function (e) {
    this.activateImpl(e);
  }, t.prototype.deactivate = function () {
    this.deactivateImpl();
  }, t.prototype.layout = function () {
    var e = this;
    this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function () {
      e.layoutInternal(), e.layoutFrame = 0;
    });
  }, t.prototype.setUnbounded = function (e) {
    var i = t.cssClasses.UNBOUNDED;
    e ? this.adapter.addClass(i) : this.adapter.removeClass(i);
  }, t.prototype.handleFocus = function () {
    var e = this;
    requestAnimationFrame(function () {
      return e.adapter.addClass(t.cssClasses.BG_FOCUSED);
    });
  }, t.prototype.handleBlur = function () {
    var e = this;
    requestAnimationFrame(function () {
      return e.adapter.removeClass(t.cssClasses.BG_FOCUSED);
    });
  }, t.prototype.supportsPressRipple = function () {
    return this.adapter.browserSupportsCssVars();
  }, t.prototype.defaultActivationState = function () {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: !1,
      isActivated: !1,
      isProgrammatic: !1,
      wasActivatedByPointer: !1,
      wasElementMadeActive: !1
    };
  }, t.prototype.registerRootHandlers = function (e) {
    var t, i;

    if (e) {
      try {
        for (var r = ve($e), s = r.next(); !s.done; s = r.next()) {
          var n = s.value;
          this.adapter.registerInteractionHandler(n, this.activateHandler);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          s && !s.done && (i = r.return) && i.call(r);
        } finally {
          if (t) throw t.error;
        }
      }

      this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
    }

    this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
  }, t.prototype.registerDeactivationHandlers = function (e) {
    var t, i;
    if ("keydown" === e.type) this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);else try {
      for (var r = ve(Ie), s = r.next(); !s.done; s = r.next()) {
        var n = s.value;
        this.adapter.registerDocumentInteractionHandler(n, this.deactivateHandler);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (i = r.return) && i.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
  }, t.prototype.deregisterRootHandlers = function () {
    var e, t;

    try {
      for (var i = ve($e), r = i.next(); !r.done; r = i.next()) {
        var s = r.value;
        this.adapter.deregisterInteractionHandler(s, this.activateHandler);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        r && !r.done && (t = i.return) && t.call(i);
      } finally {
        if (e) throw e.error;
      }
    }

    this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
  }, t.prototype.deregisterDeactivationHandlers = function () {
    var e, t;
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);

    try {
      for (var i = ve(Ie), r = i.next(); !r.done; r = i.next()) {
        var s = r.value;
        this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        r && !r.done && (t = i.return) && t.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
  }, t.prototype.removeCssVars = function () {
    var e = this,
        i = t.strings;
    Object.keys(i).forEach(function (t) {
      0 === t.indexOf("VAR_") && e.adapter.updateCssVariable(i[t], null);
    });
  }, t.prototype.activateImpl = function (e) {
    var t = this;

    if (!this.adapter.isSurfaceDisabled()) {
      var i = this.activationState;

      if (!i.isActivated) {
        var r = this.previousActivationEvent;
        if (!(r && void 0 !== e && r.type !== e.type)) i.isActivated = !0, i.isProgrammatic = void 0 === e, i.activationEvent = e, i.wasActivatedByPointer = !i.isProgrammatic && void 0 !== e && ("mousedown" === e.type || "touchstart" === e.type || "pointerdown" === e.type), void 0 !== e && Pe.length > 0 && Pe.some(function (e) {
          return t.adapter.containsEventTarget(e);
        }) ? this.resetActivationState() : (void 0 !== e && (Pe.push(e.target), this.registerDeactivationHandlers(e)), i.wasElementMadeActive = this.checkElementMadeActive(e), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function () {
          Pe = [], i.wasElementMadeActive || void 0 === e || " " !== e.key && 32 !== e.keyCode || (i.wasElementMadeActive = t.checkElementMadeActive(e), i.wasElementMadeActive && t.animateActivation()), i.wasElementMadeActive || (t.activationState = t.defaultActivationState());
        }));
      }
    }
  }, t.prototype.checkElementMadeActive = function (e) {
    return void 0 === e || "keydown" !== e.type || this.adapter.isSurfaceActive();
  }, t.prototype.animateActivation = function () {
    var e = this,
        i = t.strings,
        r = i.VAR_FG_TRANSLATE_START,
        s = i.VAR_FG_TRANSLATE_END,
        n = t.cssClasses,
        o = n.FG_DEACTIVATION,
        a = n.FG_ACTIVATION,
        d = t.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var c = "",
        l = "";

    if (!this.adapter.isUnbounded()) {
      var h = this.getFgTranslationCoordinates(),
          p = h.startPoint,
          u = h.endPoint;
      c = p.x + "px, " + p.y + "px", l = u.x + "px, " + u.y + "px";
    }

    this.adapter.updateCssVariable(r, c), this.adapter.updateCssVariable(s, l), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(a), this.activationTimer = setTimeout(function () {
      e.activationTimerCallback();
    }, d);
  }, t.prototype.getFgTranslationCoordinates = function () {
    var e,
        t = this.activationState,
        i = t.activationEvent;
    return e = t.wasActivatedByPointer ? function (e, t, i) {
      if (!e) return {
        x: 0,
        y: 0
      };
      var r,
          s,
          n = t.x,
          o = t.y,
          a = n + i.left,
          d = o + i.top;

      if ("touchstart" === e.type) {
        var c = e;
        r = c.changedTouches[0].pageX - a, s = c.changedTouches[0].pageY - d;
      } else {
        var l = e;
        r = l.pageX - a, s = l.pageY - d;
      }

      return {
        x: r,
        y: s
      };
    }(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : {
      x: this.frame.width / 2,
      y: this.frame.height / 2
    }, {
      startPoint: e = {
        x: e.x - this.initialSize / 2,
        y: e.y - this.initialSize / 2
      },
      endPoint: {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      }
    };
  }, t.prototype.runDeactivationUXLogicIfReady = function () {
    var e = this,
        i = t.cssClasses.FG_DEACTIVATION,
        r = this.activationState,
        s = r.hasDeactivationUXRun,
        n = r.isActivated;
    (s || !n) && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function () {
      e.adapter.removeClass(i);
    }, ke.FG_DEACTIVATION_MS));
  }, t.prototype.rmBoundedActivationClasses = function () {
    var e = t.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(e), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
  }, t.prototype.resetActivationState = function () {
    var e = this;
    this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function () {
      return e.previousActivationEvent = void 0;
    }, t.numbers.TAP_DELAY_MS);
  }, t.prototype.deactivateImpl = function () {
    var e = this,
        t = this.activationState;

    if (t.isActivated) {
      var i = ue({}, t);
      t.isProgrammatic ? (requestAnimationFrame(function () {
        e.animateDeactivation(i);
      }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function () {
        e.activationState.hasDeactivationUXRun = !0, e.animateDeactivation(i), e.resetActivationState();
      }));
    }
  }, t.prototype.animateDeactivation = function (e) {
    var t = e.wasActivatedByPointer,
        i = e.wasElementMadeActive;
    (t || i) && this.runDeactivationUXLogicIfReady();
  }, t.prototype.layoutInternal = function () {
    var e = this;
    this.frame = this.adapter.computeBoundingRect();
    var i = Math.max(this.frame.height, this.frame.width);
    this.maxRadius = this.adapter.isUnbounded() ? i : Math.sqrt(Math.pow(e.frame.width, 2) + Math.pow(e.frame.height, 2)) + t.numbers.PADDING;
    var r = Math.floor(i * t.numbers.INITIAL_ORIGIN_SCALE);
    this.adapter.isUnbounded() && r % 2 != 0 ? this.initialSize = r - 1 : this.initialSize = r, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
  }, t.prototype.updateLayoutCssVars = function () {
    var e = t.strings,
        i = e.VAR_FG_SIZE,
        r = e.VAR_LEFT,
        s = e.VAR_TOP,
        n = e.VAR_FG_SCALE;
    this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(n, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
      left: Math.round(this.frame.width / 2 - this.initialSize / 2),
      top: Math.round(this.frame.height / 2 - this.initialSize / 2)
    }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(s, this.unboundedCoords.top + "px"));
  }, t;
}(xe),
    ze = De;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const Ve = 1,
      Fe = e => (...t) => ({
  _$litDirective$: e,
  values: t
});

class He {
  constructor(e) {}

  get _$AU() {
    return this._$AM._$AU;
  }

  _$AT(e, t, i) {
    this._$Ct = e, this._$AM = t, this._$Ci = i;
  }

  _$AS(e, t) {
    return this.update(e, t);
  }

  update(e, t) {
    return this.render(...t);
  }

}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const Me = Fe(class extends He {
  constructor(e) {
    var t;
    if (super(e), e.type !== Ve || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }

  render(e) {
    return " " + Object.keys(e).filter(t => e[t]).join(" ") + " ";
  }

  update(e, [t]) {
    var i, r;

    if (void 0 === this.st) {
      this.st = new Set(), void 0 !== e.strings && (this.et = new Set(e.strings.join(" ").split(/\s/).filter(e => "" !== e)));

      for (const e in t) t[e] && !(null === (i = this.et) || void 0 === i ? void 0 : i.has(e)) && this.st.add(e);

      return this.render(t);
    }

    const s = e.element.classList;
    this.st.forEach(e => {
      e in t || (s.remove(e), this.st.delete(e));
    });

    for (const e in t) {
      const i = !!t[e];
      i === this.st.has(e) || (null === (r = this.et) || void 0 === r ? void 0 : r.has(e)) || (i ? (s.add(e), this.st.add(e)) : (s.remove(e), this.st.delete(e)));
    }

    return P;
  }

}),
      Le = Fe(class extends He {
  constructor(e) {
    var t;
    if (super(e), e.type !== Ve || "style" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }

  render(e) {
    return Object.keys(e).reduce((t, i) => {
      const r = e[i];
      return null == r ? t : t + `${i = i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
    }, "");
  }

  update(e, [t]) {
    const {
      style: i
    } = e.element;

    if (void 0 === this.ut) {
      this.ut = new Set();

      for (const e in t) this.ut.add(e);

      return this.render(t);
    }

    this.ut.forEach(e => {
      null == t[e] && (this.ut.delete(e), e.includes("-") ? i.removeProperty(e) : i[e] = "");
    });

    for (const e in t) {
      const r = t[e];
      null != r && (this.ut.add(e), e.includes("-") ? i.setProperty(e, r) : i[e] = r);
    }

    return P;
  }

});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

class Ne extends Ae {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = ze;
  }

  get isActive() {
    return e = this.parentElement || this, t = ":active", (e.matches || e.webkitMatchesSelector || e.msMatchesSelector).call(e, t);
    var e, t;
  }

  createAdapter() {
    return {
      browserSupportsCssVars: () => !0,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: e => {
        switch (e) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !0;
            break;

          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !0;
            break;

          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !0;
        }
      },
      removeClass: e => {
        switch (e) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !1;
            break;

          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !1;
            break;

          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !1;
        }
      },
      containsEventTarget: () => !0,
      registerInteractionHandler: () => {},
      deregisterInteractionHandler: () => {},
      registerDocumentInteractionHandler: () => {},
      deregisterDocumentInteractionHandler: () => {},
      registerResizeHandler: () => {},
      deregisterResizeHandler: () => {},
      updateCssVariable: (e, t) => {
        switch (e) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = t;
            break;

          case "--mdc-ripple-fg-size":
            this.fgSize = t;
            break;

          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = t;
            break;

          case "--mdc-ripple-fg-translate-start":
            this.translateStart = t;
            break;

          case "--mdc-ripple-left":
            this.leftPos = t;
            break;

          case "--mdc-ripple-top":
            this.topPos = t;
        }
      },
      computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      })
    };
  }

  startPress(e) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(e);
    });
  }

  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }

  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }

  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }

  startHover() {
    this.hovering = !0;
  }

  endHover() {
    this.hovering = !1;
  }

  waitForFoundation(e) {
    this.mdcFoundation ? e() : this.updateComplete.then(e);
  }

  update(e) {
    e.has("disabled") && this.disabled && this.endHover(), super.update(e);
  }

  render() {
    const e = this.activated && (this.primary || !this.accent),
          t = this.selected && (this.primary || !this.accent),
          i = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": e,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": t,
      "mdc-ripple-surface--accent--selected": this.accent && this.selected,
      "mdc-ripple-surface--disabled": this.disabled,
      "mdc-ripple-surface--hover": this.hovering,
      "mdc-ripple-surface--primary": this.primary,
      "mdc-ripple-surface--selected": this.selected,
      "mdc-ripple-upgraded--background-focused": this.bgFocused,
      "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
      "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
      "mdc-ripple-upgraded--unbounded": this.unbounded,
      "mdc-ripple-surface--internal-use-state-layer-custom-properties": this.internalUseStateLayerCustomProperties
    };
    return I`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Me(i)}"
          style="${Le({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }

}

me([we(".mdc-ripple-surface")], Ne.prototype, "mdcRoot", void 0), me([ye({
  type: Boolean
})], Ne.prototype, "primary", void 0), me([ye({
  type: Boolean
})], Ne.prototype, "accent", void 0), me([ye({
  type: Boolean
})], Ne.prototype, "unbounded", void 0), me([ye({
  type: Boolean
})], Ne.prototype, "disabled", void 0), me([ye({
  type: Boolean
})], Ne.prototype, "activated", void 0), me([ye({
  type: Boolean
})], Ne.prototype, "selected", void 0), me([ye({
  type: Boolean
})], Ne.prototype, "internalUseStateLayerCustomProperties", void 0), me([be()], Ne.prototype, "hovering", void 0), me([be()], Ne.prototype, "bgFocused", void 0), me([be()], Ne.prototype, "fgActivation", void 0), me([be()], Ne.prototype, "fgDeactivation", void 0), me([be()], Ne.prototype, "fgScale", void 0), me([be()], Ne.prototype, "fgSize", void 0), me([be()], Ne.prototype, "translateStart", void 0), me([be()], Ne.prototype, "translateEnd", void 0), me([be()], Ne.prototype, "leftPos", void 0), me([be()], Ne.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */

const Ue = Z`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
;
let Oe = class extends Ne {};
/**
 * @license
 * Copyright 2020 Google Inc.
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

var Be, je, We, qe;

function Xe(e, t, i) {
  if (void 0 !== t)
    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    return function (e, t, i) {
      const r = e.constructor;

      if (!i) {
        const e = `__${t}`;
        if (!(i = r.getPropertyDescriptor(t, e))) throw new Error("@ariaProperty must be used after a @property decorator");
      }

      const s = i;
      let n = "";
      if (!s.set) throw new Error(`@ariaProperty requires a setter for ${t}`);
      if (e.dispatchWizEvent) return i;
      const o = {
        configurable: !0,
        enumerable: !0,

        set(e) {
          if ("" === n) {
            const e = r.getPropertyOptions(t);
            n = "string" == typeof e.attribute ? e.attribute : t;
          }

          this.hasAttribute(n) && this.removeAttribute(n), s.set.call(this, e);
        }

      };
      return s.get && (o.get = function () {
        return s.get.call(this);
      }), o;
    }(e, t, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


Oe.styles = [Ue], Oe = me([fe("mwc-ripple")], Oe), function (e) {
  e[e.ACTIVE = 0] = "ACTIVE", e[e.INACTIVE = 1] = "INACTIVE";
}(Be || (Be = {})), function (e) {
  e[e.START = 1] = "START", e[e.END = 2] = "END";
}(je || (je = {}));
const Ge = null !== (qe = null === (We = window.ShadyDOM) || void 0 === We ? void 0 : We.inUse) && void 0 !== qe && qe;

class Ke extends Ae {
  constructor() {
    super(...arguments), this.disabled = !1, this.containingForm = null, this.formDataListener = e => {
      this.disabled || this.setFormData(e.formData);
    };
  }

  findFormElement() {
    if (!this.shadowRoot || Ge) return null;
    const e = this.getRootNode().querySelectorAll("form");

    for (const t of Array.from(e)) if (t.contains(this)) return t;

    return null;
  }

  connectedCallback() {
    var e;
    super.connectedCallback(), this.containingForm = this.findFormElement(), null === (e = this.containingForm) || void 0 === e || e.addEventListener("formdata", this.formDataListener);
  }

  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), null === (e = this.containingForm) || void 0 === e || e.removeEventListener("formdata", this.formDataListener), this.containingForm = null;
  }

  click() {
    this.formElement && !this.disabled && (this.formElement.focus(), this.formElement.click());
  }

  firstUpdated() {
    super.firstUpdated(), this.shadowRoot && this.mdcRoot.addEventListener("change", e => {
      this.dispatchEvent(new Event("change", e));
    });
  }

}

Ke.shadowRootOptions = {
  mode: "open",
  delegatesFocus: !0
}, me([ye({
  type: Boolean
})], Ke.prototype, "disabled", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

class Ye {
  constructor(e) {
    this.startPress = t => {
      e().then(e => {
        e && e.startPress(t);
      });
    }, this.endPress = () => {
      e().then(e => {
        e && e.endPress();
      });
    }, this.startFocus = () => {
      e().then(e => {
        e && e.startFocus();
      });
    }, this.endFocus = () => {
      e().then(e => {
        e && e.endFocus();
      });
    }, this.startHover = () => {
      e().then(e => {
        e && e.startHover();
      });
    }, this.endHover = () => {
      e().then(e => {
        e && e.endHover();
      });
    };
  }

}
/**
 * @license
 * Copyright 2020 Google Inc.
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


var Ze = function () {
  function e() {
    this.rafIDs = new Map();
  }

  return e.prototype.request = function (e, t) {
    var i = this;
    this.cancel(e);
    var r = requestAnimationFrame(function (r) {
      i.rafIDs.delete(e), t(r);
    });
    this.rafIDs.set(e, r);
  }, e.prototype.cancel = function (e) {
    var t = this.rafIDs.get(e);
    t && (cancelAnimationFrame(t), this.rafIDs.delete(e));
  }, e.prototype.cancelAll = function () {
    var e = this;
    this.rafIDs.forEach(function (t, i) {
      e.cancel(i);
    });
  }, e.prototype.getQueue = function () {
    var e = [];
    return this.rafIDs.forEach(function (t, i) {
      e.push(i);
    }), e;
  }, e;
}(),
    Je = {
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


function Qe(e, t) {
  if (function (e) {
    return Boolean(e.document) && "function" == typeof e.document.createElement;
  }(e) && t in Je) {
    var i = e.document.createElement("div"),
        r = Je[t],
        s = r.standard,
        n = r.prefixed;
    return s in i.style ? s : n;
  }

  return t;
}
/**
 * @license
 * Copyright 2020 Google Inc.
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


var et,
    tt = "mdc-slider--disabled",
    it = "mdc-slider--discrete",
    rt = "mdc-slider--range",
    st = "mdc-slider__thumb--focused",
    nt = "mdc-slider__thumb--top",
    ot = "mdc-slider__thumb--with-indicator",
    at = "mdc-slider--tick-marks",
    dt = 1,
    ct = 5,
    lt = "aria-valuetext",
    ht = "disabled",
    pt = "min",
    ut = "max",
    mt = "value",
    vt = "step";
!function (e) {
  e.SLIDER_UPDATE = "slider_update";
}(et || (et = {}));

var ft = "undefined" != typeof window,
    gt = function (e) {
  function t(i) {
    var r = e.call(this, ue(ue({}, t.defaultAdapter), i)) || this;
    return r.initialStylesRemoved = !1, r.isDisabled = !1, r.isDiscrete = !1, r.step = dt, r.hasTickMarks = !1, r.isRange = !1, r.thumb = null, r.downEventClientX = null, r.startThumbKnobWidth = 0, r.endThumbKnobWidth = 0, r.animFrame = new Ze(), r;
  }

  return pe(t, e), Object.defineProperty(t, "defaultAdapter", {
    get: function () {
      return {
        hasClass: function () {
          return !1;
        },
        addClass: function () {},
        removeClass: function () {},
        addThumbClass: function () {},
        removeThumbClass: function () {},
        getAttribute: function () {
          return null;
        },
        getInputValue: function () {
          return "";
        },
        setInputValue: function () {},
        getInputAttribute: function () {
          return null;
        },
        setInputAttribute: function () {
          return null;
        },
        removeInputAttribute: function () {
          return null;
        },
        focusInput: function () {},
        isInputFocused: function () {
          return !1;
        },
        getThumbKnobWidth: function () {
          return 0;
        },
        getThumbBoundingClientRect: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        getBoundingClientRect: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        isRTL: function () {
          return !1;
        },
        setThumbStyleProperty: function () {},
        removeThumbStyleProperty: function () {},
        setTrackActiveStyleProperty: function () {},
        removeTrackActiveStyleProperty: function () {},
        setValueIndicatorText: function () {},
        getValueToAriaValueTextFn: function () {
          return null;
        },
        updateTickMarks: function () {},
        setPointerCapture: function () {},
        emitChangeEvent: function () {},
        emitInputEvent: function () {},
        emitDragStartEvent: function () {},
        emitDragEndEvent: function () {},
        registerEventHandler: function () {},
        deregisterEventHandler: function () {},
        registerThumbEventHandler: function () {},
        deregisterThumbEventHandler: function () {},
        registerInputEventHandler: function () {},
        deregisterInputEventHandler: function () {},
        registerBodyEventHandler: function () {},
        deregisterBodyEventHandler: function () {},
        registerWindowEventHandler: function () {},
        deregisterWindowEventHandler: function () {}
      };
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.init = function () {
    var e = this;
    this.isDisabled = this.adapter.hasClass(tt), this.isDiscrete = this.adapter.hasClass(it), this.hasTickMarks = this.adapter.hasClass(at), this.isRange = this.adapter.hasClass(rt);
    var t = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(pt, this.isRange ? je.START : je.END), pt),
        i = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(ut, je.END), ut),
        r = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(mt, je.END), mt),
        s = this.isRange ? this.convertAttributeValueToNumber(this.adapter.getInputAttribute(mt, je.START), mt) : t,
        n = this.adapter.getInputAttribute(vt, je.END),
        o = n ? this.convertAttributeValueToNumber(n, vt) : this.step;
    this.validateProperties({
      min: t,
      max: i,
      value: r,
      valueStart: s,
      step: o
    }), this.min = t, this.max = i, this.value = r, this.valueStart = s, this.step = o, this.numDecimalPlaces = yt(this.step), this.valueBeforeDownEvent = r, this.valueStartBeforeDownEvent = s, this.mousedownOrTouchstartListener = this.handleMousedownOrTouchstart.bind(this), this.moveListener = this.handleMove.bind(this), this.pointerdownListener = this.handlePointerdown.bind(this), this.pointerupListener = this.handlePointerup.bind(this), this.thumbMouseenterListener = this.handleThumbMouseenter.bind(this), this.thumbMouseleaveListener = this.handleThumbMouseleave.bind(this), this.inputStartChangeListener = function () {
      e.handleInputChange(je.START);
    }, this.inputEndChangeListener = function () {
      e.handleInputChange(je.END);
    }, this.inputStartFocusListener = function () {
      e.handleInputFocus(je.START);
    }, this.inputEndFocusListener = function () {
      e.handleInputFocus(je.END);
    }, this.inputStartBlurListener = function () {
      e.handleInputBlur(je.START);
    }, this.inputEndBlurListener = function () {
      e.handleInputBlur(je.END);
    }, this.resizeListener = this.handleResize.bind(this), this.registerEventHandlers();
  }, t.prototype.destroy = function () {
    this.deregisterEventHandlers();
  }, t.prototype.setMin = function (e) {
    this.min = e, this.isRange || (this.valueStart = e), this.updateUI();
  }, t.prototype.setMax = function (e) {
    this.max = e, this.updateUI();
  }, t.prototype.getMin = function () {
    return this.min;
  }, t.prototype.getMax = function () {
    return this.max;
  }, t.prototype.getValue = function () {
    return this.value;
  }, t.prototype.setValue = function (e) {
    if (this.isRange && e < this.valueStart) throw new Error("end thumb value (" + e + ") must be >= start thumb value (" + this.valueStart + ")");
    this.updateValue(e, je.END);
  }, t.prototype.getValueStart = function () {
    if (!this.isRange) throw new Error("`valueStart` is only applicable for range sliders.");
    return this.valueStart;
  }, t.prototype.setValueStart = function (e) {
    if (!this.isRange) throw new Error("`valueStart` is only applicable for range sliders.");
    if (this.isRange && e > this.value) throw new Error("start thumb value (" + e + ") must be <= end thumb value (" + this.value + ")");
    this.updateValue(e, je.START);
  }, t.prototype.setStep = function (e) {
    this.step = e, this.numDecimalPlaces = yt(e), this.updateUI();
  }, t.prototype.setIsDiscrete = function (e) {
    this.isDiscrete = e, this.updateValueIndicatorUI(), this.updateTickMarksUI();
  }, t.prototype.getStep = function () {
    return this.step;
  }, t.prototype.setHasTickMarks = function (e) {
    this.hasTickMarks = e, this.updateTickMarksUI();
  }, t.prototype.getDisabled = function () {
    return this.isDisabled;
  }, t.prototype.setDisabled = function (e) {
    this.isDisabled = e, e ? (this.adapter.addClass(tt), this.isRange && this.adapter.setInputAttribute(ht, "", je.START), this.adapter.setInputAttribute(ht, "", je.END)) : (this.adapter.removeClass(tt), this.isRange && this.adapter.removeInputAttribute(ht, je.START), this.adapter.removeInputAttribute(ht, je.END));
  }, t.prototype.getIsRange = function () {
    return this.isRange;
  }, t.prototype.layout = function (e) {
    var t = (void 0 === e ? {} : e).skipUpdateUI;
    this.rect = this.adapter.getBoundingClientRect(), this.isRange && (this.startThumbKnobWidth = this.adapter.getThumbKnobWidth(je.START), this.endThumbKnobWidth = this.adapter.getThumbKnobWidth(je.END)), t || this.updateUI();
  }, t.prototype.handleResize = function () {
    this.layout();
  }, t.prototype.handleDown = function (e) {
    if (!this.isDisabled) {
      this.valueStartBeforeDownEvent = this.valueStart, this.valueBeforeDownEvent = this.value;
      var t = null != e.clientX ? e.clientX : e.targetTouches[0].clientX;
      this.downEventClientX = t;
      var i = this.mapClientXOnSliderScale(t);
      this.thumb = this.getThumbFromDownEvent(t, i), null !== this.thumb && (this.handleDragStart(e, i, this.thumb), this.updateValue(i, this.thumb, {
        emitInputEvent: !0
      }));
    }
  }, t.prototype.handleMove = function (e) {
    if (!this.isDisabled) {
      e.preventDefault();
      var t = null != e.clientX ? e.clientX : e.targetTouches[0].clientX,
          i = null != this.thumb;

      if (this.thumb = this.getThumbFromMoveEvent(t), null !== this.thumb) {
        var r = this.mapClientXOnSliderScale(t);
        i || (this.handleDragStart(e, r, this.thumb), this.adapter.emitDragStartEvent(r, this.thumb)), this.updateValue(r, this.thumb, {
          emitInputEvent: !0
        });
      }
    }
  }, t.prototype.handleUp = function () {
    if (!this.isDisabled && null !== this.thumb) {
      var e = this.thumb === je.START ? this.valueStartBeforeDownEvent : this.valueBeforeDownEvent,
          t = this.thumb === je.START ? this.valueStart : this.value;
      e !== t && this.adapter.emitChangeEvent(t, this.thumb), this.adapter.emitDragEndEvent(t, this.thumb), this.thumb = null;
    }
  }, t.prototype.handleThumbMouseenter = function () {
    this.isDiscrete && this.isRange && (this.adapter.addThumbClass(ot, je.START), this.adapter.addThumbClass(ot, je.END));
  }, t.prototype.handleThumbMouseleave = function () {
    this.isDiscrete && this.isRange && (this.adapter.isInputFocused(je.START) || this.adapter.isInputFocused(je.END) || (this.adapter.removeThumbClass(ot, je.START), this.adapter.removeThumbClass(ot, je.END)));
  }, t.prototype.handleMousedownOrTouchstart = function (e) {
    var t = this,
        i = "mousedown" === e.type ? "mousemove" : "touchmove";
    this.adapter.registerBodyEventHandler(i, this.moveListener);

    var r = function () {
      t.handleUp(), t.adapter.deregisterBodyEventHandler(i, t.moveListener), t.adapter.deregisterEventHandler("mouseup", r), t.adapter.deregisterEventHandler("touchend", r);
    };

    this.adapter.registerBodyEventHandler("mouseup", r), this.adapter.registerBodyEventHandler("touchend", r), this.handleDown(e);
  }, t.prototype.handlePointerdown = function (e) {
    this.adapter.setPointerCapture(e.pointerId), this.adapter.registerEventHandler("pointermove", this.moveListener), this.handleDown(e);
  }, t.prototype.handleInputChange = function (e) {
    var t = Number(this.adapter.getInputValue(e));
    e === je.START ? this.setValueStart(t) : this.setValue(t), this.adapter.emitChangeEvent(e === je.START ? this.valueStart : this.value, e), this.adapter.emitInputEvent(e === je.START ? this.valueStart : this.value, e);
  }, t.prototype.handleInputFocus = function (e) {
    if (this.adapter.addThumbClass(st, e), this.isDiscrete && (this.adapter.addThumbClass(ot, e), this.isRange)) {
      var t = e === je.START ? je.END : je.START;
      this.adapter.addThumbClass(ot, t);
    }
  }, t.prototype.handleInputBlur = function (e) {
    if (this.adapter.removeThumbClass(st, e), this.isDiscrete && (this.adapter.removeThumbClass(ot, e), this.isRange)) {
      var t = e === je.START ? je.END : je.START;
      this.adapter.removeThumbClass(ot, t);
    }
  }, t.prototype.handleDragStart = function (e, t, i) {
    this.adapter.emitDragStartEvent(t, i), this.adapter.focusInput(i), e.preventDefault();
  }, t.prototype.getThumbFromDownEvent = function (e, t) {
    if (!this.isRange) return je.END;
    var i = this.adapter.getThumbBoundingClientRect(je.START),
        r = this.adapter.getThumbBoundingClientRect(je.END),
        s = e >= i.left && e <= i.right,
        n = e >= r.left && e <= r.right;
    return s && n ? null : s ? je.START : n ? je.END : t < this.valueStart ? je.START : t > this.value ? je.END : t - this.valueStart <= this.value - t ? je.START : je.END;
  }, t.prototype.getThumbFromMoveEvent = function (e) {
    if (null !== this.thumb) return this.thumb;
    if (null === this.downEventClientX) throw new Error("`downEventClientX` is null after move event.");
    return Math.abs(this.downEventClientX - e) < ct ? this.thumb : e < this.downEventClientX ? this.adapter.isRTL() ? je.END : je.START : this.adapter.isRTL() ? je.START : je.END;
  }, t.prototype.updateUI = function (e) {
    this.updateThumbAndInputAttributes(e), this.updateThumbAndTrackUI(e), this.updateValueIndicatorUI(e), this.updateTickMarksUI();
  }, t.prototype.updateThumbAndInputAttributes = function (e) {
    if (e) {
      var t = this.isRange && e === je.START ? this.valueStart : this.value,
          i = String(t);
      this.adapter.setInputAttribute(mt, i, e), this.isRange && e === je.START ? this.adapter.setInputAttribute(pt, i, je.END) : this.isRange && e === je.END && this.adapter.setInputAttribute(ut, i, je.START), this.adapter.getInputValue(e) !== i && this.adapter.setInputValue(i, e);
      var r = this.adapter.getValueToAriaValueTextFn();
      r && this.adapter.setInputAttribute(lt, r(t), e);
    }
  }, t.prototype.updateValueIndicatorUI = function (e) {
    if (this.isDiscrete) {
      var t = this.isRange && e === je.START ? this.valueStart : this.value;
      this.adapter.setValueIndicatorText(t, e === je.START ? je.START : je.END), !e && this.isRange && this.adapter.setValueIndicatorText(this.valueStart, je.START);
    }
  }, t.prototype.updateTickMarksUI = function () {
    if (this.isDiscrete && this.hasTickMarks) {
      var e = (this.valueStart - this.min) / this.step,
          t = (this.value - this.valueStart) / this.step + 1,
          i = (this.max - this.value) / this.step,
          r = Array.from({
        length: e
      }).fill(Be.INACTIVE),
          s = Array.from({
        length: t
      }).fill(Be.ACTIVE),
          n = Array.from({
        length: i
      }).fill(Be.INACTIVE);
      this.adapter.updateTickMarks(r.concat(s).concat(n));
    }
  }, t.prototype.mapClientXOnSliderScale = function (e) {
    var t = (e - this.rect.left) / this.rect.width;
    this.adapter.isRTL() && (t = 1 - t);
    var i = this.min + t * (this.max - this.min);
    return i === this.max || i === this.min ? i : Number(this.quantize(i).toFixed(this.numDecimalPlaces));
  }, t.prototype.quantize = function (e) {
    var t = Math.round((e - this.min) / this.step);
    return this.min + t * this.step;
  }, t.prototype.updateValue = function (e, t, i) {
    var r = (void 0 === i ? {} : i).emitInputEvent;

    if (e = this.clampValue(e, t), this.isRange && t === je.START) {
      if (this.valueStart === e) return;
      this.valueStart = e;
    } else {
      if (this.value === e) return;
      this.value = e;
    }

    this.updateUI(t), r && this.adapter.emitInputEvent(t === je.START ? this.valueStart : this.value, t);
  }, t.prototype.clampValue = function (e, t) {
    return e = Math.min(Math.max(e, this.min), this.max), this.isRange && t === je.START && e > this.value ? this.value : this.isRange && t === je.END && e < this.valueStart ? this.valueStart : e;
  }, t.prototype.updateThumbAndTrackUI = function (e) {
    var t = this,
        i = this.max,
        r = this.min,
        s = (this.value - this.valueStart) / (i - r),
        n = s * this.rect.width,
        o = this.adapter.isRTL(),
        a = ft ? Qe(window, "transform") : "transform";

    if (this.isRange) {
      var d = this.adapter.isRTL() ? (i - this.value) / (i - r) * this.rect.width : (this.valueStart - r) / (i - r) * this.rect.width,
          c = d + n;
      this.animFrame.request(et.SLIDER_UPDATE, function () {
        !o && e === je.START || o && e !== je.START ? (t.adapter.setTrackActiveStyleProperty("transform-origin", "right"), t.adapter.setTrackActiveStyleProperty("left", "unset"), t.adapter.setTrackActiveStyleProperty("right", t.rect.width - c + "px")) : (t.adapter.setTrackActiveStyleProperty("transform-origin", "left"), t.adapter.setTrackActiveStyleProperty("right", "unset"), t.adapter.setTrackActiveStyleProperty("left", d + "px")), t.adapter.setTrackActiveStyleProperty(a, "scaleX(" + s + ")");
        var i = o ? c : d,
            r = t.adapter.isRTL() ? d : c;
        e !== je.START && e && t.initialStylesRemoved || t.adapter.setThumbStyleProperty(a, "translateX(" + i + "px)", je.START), e !== je.END && e && t.initialStylesRemoved || t.adapter.setThumbStyleProperty(a, "translateX(" + r + "px)", je.END), t.removeInitialStyles(o), t.updateOverlappingThumbsUI(i, r, e);
      });
    } else this.animFrame.request(et.SLIDER_UPDATE, function () {
      var e = o ? t.rect.width - n : n;
      t.adapter.setThumbStyleProperty(a, "translateX(" + e + "px)", je.END), t.adapter.setTrackActiveStyleProperty(a, "scaleX(" + s + ")"), t.removeInitialStyles(o);
    });
  }, t.prototype.removeInitialStyles = function (e) {
    if (!this.initialStylesRemoved) {
      var t = e ? "right" : "left";
      this.adapter.removeThumbStyleProperty(t, je.END), this.isRange && this.adapter.removeThumbStyleProperty(t, je.START), this.initialStylesRemoved = !0, this.resetTrackAndThumbAnimation();
    }
  }, t.prototype.resetTrackAndThumbAnimation = function () {
    var e = this;

    if (this.isDiscrete) {
      var t = ft ? Qe(window, "transition") : "transition",
          i = "all 0s ease 0s";
      this.adapter.setThumbStyleProperty(t, i, je.END), this.isRange && this.adapter.setThumbStyleProperty(t, i, je.START), this.adapter.setTrackActiveStyleProperty(t, i), requestAnimationFrame(function () {
        e.adapter.removeThumbStyleProperty(t, je.END), e.adapter.removeTrackActiveStyleProperty(t), e.isRange && e.adapter.removeThumbStyleProperty(t, je.START);
      });
    }
  }, t.prototype.updateOverlappingThumbsUI = function (e, t, i) {
    var r = !1;

    if (this.adapter.isRTL()) {
      var s = e - this.startThumbKnobWidth / 2;
      r = t + this.endThumbKnobWidth / 2 >= s;
    } else {
      r = e + this.startThumbKnobWidth / 2 >= t - this.endThumbKnobWidth / 2;
    }

    r ? (this.adapter.addThumbClass(nt, i || je.END), this.adapter.removeThumbClass(nt, i === je.START ? je.END : je.START)) : (this.adapter.removeThumbClass(nt, je.START), this.adapter.removeThumbClass(nt, je.END));
  }, t.prototype.convertAttributeValueToNumber = function (e, t) {
    if (null === e) throw new Error("MDCSliderFoundation: `" + t + "` must be non-null.");
    var i = Number(e);
    if (isNaN(i)) throw new Error("MDCSliderFoundation: `" + t + "` value is `" + e + "`, but must be a number.");
    return i;
  }, t.prototype.validateProperties = function (e) {
    var t = e.min,
        i = e.max,
        r = e.value,
        s = e.valueStart,
        n = e.step;
    if (t >= i) throw new Error("MDCSliderFoundation: min must be strictly less than max. Current: [min: " + t + ", max: " + i + "]");
    if (n <= 0) throw new Error("MDCSliderFoundation: step must be a positive number. Current step: " + this.step);

    if (this.isRange) {
      if (r < t || r > i || s < t || s > i) throw new Error("MDCSliderFoundation: values must be in [min, max] range. Current values: [start value: " + s + ", end value: " + r + "]");
      if (s > r) throw new Error("MDCSliderFoundation: start value must be <= end value. Current values: [start value: " + s + ", end value: " + r + "]");
      var o = (r - t) / n;
      if ((s - t) / n % 1 != 0 || o % 1 != 0) throw new Error("MDCSliderFoundation: Slider values must be valid based on the step value. Current values: [start value: " + s + ", end value: " + r + "]");
    } else {
      if (r < t || r > i) throw new Error("MDCSliderFoundation: value must be in [min, max] range. Current value: " + r);
      if ((o = (r - t) / n) % 1 != 0) throw new Error("MDCSliderFoundation: Slider value must be valid based on the step value. Current value: " + r);
    }
  }, t.prototype.registerEventHandlers = function () {
    this.adapter.registerWindowEventHandler("resize", this.resizeListener), t.SUPPORTS_POINTER_EVENTS ? (this.adapter.registerEventHandler("pointerdown", this.pointerdownListener), this.adapter.registerEventHandler("pointerup", this.pointerupListener)) : (this.adapter.registerEventHandler("mousedown", this.mousedownOrTouchstartListener), this.adapter.registerEventHandler("touchstart", this.mousedownOrTouchstartListener)), this.isRange && (this.adapter.registerThumbEventHandler(je.START, "mouseenter", this.thumbMouseenterListener), this.adapter.registerThumbEventHandler(je.START, "mouseleave", this.thumbMouseleaveListener), this.adapter.registerInputEventHandler(je.START, "change", this.inputStartChangeListener), this.adapter.registerInputEventHandler(je.START, "focus", this.inputStartFocusListener), this.adapter.registerInputEventHandler(je.START, "blur", this.inputStartBlurListener)), this.adapter.registerThumbEventHandler(je.END, "mouseenter", this.thumbMouseenterListener), this.adapter.registerThumbEventHandler(je.END, "mouseleave", this.thumbMouseleaveListener), this.adapter.registerInputEventHandler(je.END, "change", this.inputEndChangeListener), this.adapter.registerInputEventHandler(je.END, "focus", this.inputEndFocusListener), this.adapter.registerInputEventHandler(je.END, "blur", this.inputEndBlurListener);
  }, t.prototype.deregisterEventHandlers = function () {
    this.adapter.deregisterWindowEventHandler("resize", this.resizeListener), t.SUPPORTS_POINTER_EVENTS ? (this.adapter.deregisterEventHandler("pointerdown", this.pointerdownListener), this.adapter.deregisterEventHandler("pointerup", this.pointerupListener)) : (this.adapter.deregisterEventHandler("mousedown", this.mousedownOrTouchstartListener), this.adapter.deregisterEventHandler("touchstart", this.mousedownOrTouchstartListener)), this.isRange && (this.adapter.deregisterThumbEventHandler(je.START, "mouseenter", this.thumbMouseenterListener), this.adapter.deregisterThumbEventHandler(je.START, "mouseleave", this.thumbMouseleaveListener), this.adapter.deregisterInputEventHandler(je.START, "change", this.inputStartChangeListener), this.adapter.deregisterInputEventHandler(je.START, "focus", this.inputStartFocusListener), this.adapter.deregisterInputEventHandler(je.START, "blur", this.inputStartBlurListener)), this.adapter.deregisterThumbEventHandler(je.END, "mouseenter", this.thumbMouseenterListener), this.adapter.deregisterThumbEventHandler(je.END, "mouseleave", this.thumbMouseleaveListener), this.adapter.deregisterInputEventHandler(je.END, "change", this.inputEndChangeListener), this.adapter.deregisterInputEventHandler(je.END, "focus", this.inputEndFocusListener), this.adapter.deregisterInputEventHandler(je.END, "blur", this.inputEndBlurListener);
  }, t.prototype.handlePointerup = function () {
    this.handleUp(), this.adapter.deregisterEventHandler("pointermove", this.moveListener);
  }, t.SUPPORTS_POINTER_EVENTS = ft && Boolean(window.PointerEvent) && !(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document), t;
}(xe);

function yt(e) {
  var t = /(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(e));
  if (!t) return 0;
  var i = t[1] || "",
      r = t[2] || 0;
  return Math.max(0, ("0" === i ? 0 : i.length) - Number(r));
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const bt = e => null != e ? e : D
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
;

class _t extends Ke {
  constructor() {
    super(...arguments), this.mdcFoundationClass = gt, this.disabled = !1, this.min = 0, this.max = 100, this.valueEnd = 0, this.name = "", this.step = 1, this.withTickMarks = !1, this.discrete = !1, this.tickMarks = [], this.trackTransformOriginStyle = "", this.trackLeftStyle = "", this.trackRightStyle = "", this.trackTransitionStyle = "", this.endThumbWithIndicator = !1, this.endThumbTop = !1, this.shouldRenderEndRipple = !1, this.endThumbTransformStyle = "", this.endThumbTransitionStyle = "", this.valueToAriaTextTransform = null, this.valueToValueIndicatorTransform = e => `${e}`, this.boundMoveListener = null, this.endRippleHandlers = new Ye(() => (this.shouldRenderEndRipple = !0, this.endRipple));
  }

  update(e) {
    if (e.has("valueEnd") && this.mdcFoundation) {
      this.mdcFoundation.setValue(this.valueEnd);
      const e = this.mdcFoundation.getValue();
      e !== this.valueEnd && (this.valueEnd = e);
    }

    e.has("discrete") && (this.discrete || (this.tickMarks = [])), super.update(e);
  }

  render() {
    return this.renderRootEl(I`
      ${this.renderStartInput()}
      ${this.renderEndInput()}
      ${this.renderTrack()}
      ${this.renderTickMarks()}
      ${this.renderStartThumb()}
      ${this.renderEndThumb()}`);
  }

  renderRootEl(e) {
    const t = Me({
      "mdc-slider--disabled": this.disabled,
      "mdc-slider--discrete": this.discrete
    });
    return I`
    <div
        class="mdc-slider ${t}"
        @pointerdown=${this.onPointerdown}
        @pointerup=${this.onPointerup}
        @contextmenu=${this.onContextmenu}>
      ${e}
    </div>`;
  }

  renderStartInput() {
    return D;
  }

  renderEndInput() {
    var e;
    return I`
      <input
          class="mdc-slider__input end"
          type="range"
          step=${this.step}
          min=${this.min}
          max=${this.max}
          .value=${this.valueEnd}
          @change=${this.onEndChange}
          @focus=${this.onEndFocus}
          @blur=${this.onEndBlur}
          ?disabled=${this.disabled}
          name=${this.name}
          aria-label=${bt(this.ariaLabel)}
          aria-labelledby=${bt(this.ariaLabelledBy)}
          aria-describedby=${bt(this.ariaDescribedBy)}
          aria-valuetext=${bt(null === (e = this.valueToAriaTextTransform) || void 0 === e ? void 0 : e.call(this, this.valueEnd))}>
    `;
  }

  renderTrack() {
    return D;
  }

  renderTickMarks() {
    return this.withTickMarks ? I`
      <div class="mdc-slider__tick-marks">
        ${this.tickMarks.map(e => {
      const t = e === Be.ACTIVE;
      return I`<div class="${t ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive"}"></div>`;
    })}
      </div>` : D;
  }

  renderStartThumb() {
    return D;
  }

  renderEndThumb() {
    const e = Me({
      "mdc-slider__thumb--with-indicator": this.endThumbWithIndicator,
      "mdc-slider__thumb--top": this.endThumbTop
    }),
          t = Le({
      "-webkit-transform": this.endThumbTransformStyle,
      transform: this.endThumbTransformStyle,
      "-webkit-transition": this.endThumbTransitionStyle,
      transition: this.endThumbTransitionStyle,
      left: this.endThumbTransformStyle || "rtl" === getComputedStyle(this).direction ? "" : `calc(${(this.valueEnd - this.min) / (this.max - this.min) * 100}% - 24px)`,
      right: this.endThumbTransformStyle || "rtl" !== getComputedStyle(this).direction ? "" : `calc(${(this.valueEnd - this.min) / (this.max - this.min) * 100}% - 24px)`
    }),
          i = this.shouldRenderEndRipple ? I`<mwc-ripple class="ripple" unbounded></mwc-ripple>` : D;
    return I`
      <div
          class="mdc-slider__thumb end ${e}"
          style=${t}
          @mouseenter=${this.onEndMouseenter}
          @mouseleave=${this.onEndMouseleave}>
        ${i}
        ${this.renderValueIndicator(this.valueToValueIndicatorTransform(this.valueEnd))}
        <div class="mdc-slider__thumb-knob"></div>
      </div>
    `;
  }

  renderValueIndicator(e) {
    return this.discrete ? I`
    <div class="mdc-slider__value-indicator-container" aria-hidden="true">
      <div class="mdc-slider__value-indicator">
        <span class="mdc-slider__value-indicator-text">
          ${e}
        </span>
      </div>
    </div>` : D;
  }

  disconnectedCallback() {
    super.disconnectedCallback(), this.mdcFoundation && this.mdcFoundation.destroy();
  }

  createAdapter() {}

  async firstUpdated() {
    super.firstUpdated(), await this.layout(!0);
  }

  updated(e) {
    super.updated(e), this.mdcFoundation && (e.has("disabled") && this.mdcFoundation.setDisabled(this.disabled), e.has("min") && this.mdcFoundation.setMin(this.min), e.has("max") && this.mdcFoundation.setMax(this.max), e.has("step") && this.mdcFoundation.setStep(this.step), e.has("discrete") && this.mdcFoundation.setIsDiscrete(this.discrete), e.has("withTickMarks") && this.mdcFoundation.setHasTickMarks(this.withTickMarks));
  }

  async layout(e = !1) {
    var t;
    null === (t = this.mdcFoundation) || void 0 === t || t.layout({
      skipUpdateUI: e
    }), this.requestUpdate(), await this.updateComplete;
  }

  onEndChange(e) {
    var t;
    this.valueEnd = Number(e.target.value), null === (t = this.mdcFoundation) || void 0 === t || t.handleInputChange(je.END);
  }

  onEndFocus() {
    var e;
    null === (e = this.mdcFoundation) || void 0 === e || e.handleInputFocus(je.END), this.endRippleHandlers.startFocus();
  }

  onEndBlur() {
    var e;
    null === (e = this.mdcFoundation) || void 0 === e || e.handleInputBlur(je.END), this.endRippleHandlers.endFocus();
  }

  onEndMouseenter() {
    var e;
    null === (e = this.mdcFoundation) || void 0 === e || e.handleThumbMouseenter(), this.endRippleHandlers.startHover();
  }

  onEndMouseleave() {
    var e;
    null === (e = this.mdcFoundation) || void 0 === e || e.handleThumbMouseleave(), this.endRippleHandlers.endHover();
  }

  onPointerdown(e) {
    this.layout(), this.mdcFoundation && (this.mdcFoundation.handlePointerdown(e), this.boundMoveListener = this.mdcFoundation.handleMove.bind(this.mdcFoundation), this.mdcRoot.addEventListener("pointermove", this.boundMoveListener));
  }

  onPointerup() {
    this.mdcFoundation && (this.mdcFoundation.handleUp(), this.boundMoveListener && (this.mdcRoot.removeEventListener("pointermove", this.boundMoveListener), this.boundMoveListener = null));
  }

  onContextmenu(e) {
    e.preventDefault();
  }

  setFormData(e) {
    this.name && e.append(this.name, `${this.valueEnd}`);
  }

}

me([we("input.end")], _t.prototype, "formElement", void 0), me([we(".mdc-slider")], _t.prototype, "mdcRoot", void 0), me([we(".end.mdc-slider__thumb")], _t.prototype, "endThumb", void 0), me([we(".end.mdc-slider__thumb .mdc-slider__thumb-knob")], _t.prototype, "endThumbKnob", void 0), me([function (e) {
  return _e({
    descriptor: t => ({
      async get() {
        var t;
        return await this.updateComplete, null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e);
      },

      enumerable: !0,
      configurable: !0
    })
  });
}(".end .ripple")], _t.prototype, "endRipple", void 0), me([ye({
  type: Boolean,
  reflect: !0
})], _t.prototype, "disabled", void 0), me([ye({
  type: Number
})], _t.prototype, "min", void 0), me([ye({
  type: Number
})], _t.prototype, "max", void 0), me([ye({
  type: Number
})], _t.prototype, "valueEnd", void 0), me([ye({
  type: String
})], _t.prototype, "name", void 0), me([ye({
  type: Number
})], _t.prototype, "step", void 0), me([ye({
  type: Boolean
})], _t.prototype, "withTickMarks", void 0), me([ye({
  type: Boolean
})], _t.prototype, "discrete", void 0), me([be()], _t.prototype, "tickMarks", void 0), me([be()], _t.prototype, "trackTransformOriginStyle", void 0), me([be()], _t.prototype, "trackLeftStyle", void 0), me([be()], _t.prototype, "trackRightStyle", void 0), me([be()], _t.prototype, "trackTransitionStyle", void 0), me([be()], _t.prototype, "endThumbWithIndicator", void 0), me([be()], _t.prototype, "endThumbTop", void 0), me([be()], _t.prototype, "shouldRenderEndRipple", void 0), me([be()], _t.prototype, "endThumbTransformStyle", void 0), me([be()], _t.prototype, "endThumbTransitionStyle", void 0), me([Xe, ye({
  type: String,
  attribute: "aria-label"
})], _t.prototype, "ariaLabel", void 0), me([Xe, ye({
  type: String,
  attribute: "aria-labelledby"
})], _t.prototype, "ariaLabelledBy", void 0), me([Xe, ye({
  type: String,
  attribute: "aria-describedby"
})], _t.prototype, "ariaDescribedBy", void 0);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

class wt extends _t {
  get value() {
    return this.valueEnd;
  }

  set value(e) {
    this.valueEnd = e;
  }

  renderTrack() {
    const e = Le({
      "transform-origin": this.trackTransformOriginStyle,
      left: this.trackLeftStyle,
      right: this.trackRightStyle,
      "-webkit-transform": `scaleX(${(this.valueEnd - this.min) / (this.max - this.min)})`,
      transform: `scaleX(${(this.valueEnd - this.min) / (this.max - this.min)})`,
      "-webkit-transition": this.trackTransitionStyle,
      transition: this.trackTransitionStyle
    });
    return I`
      <div class="mdc-slider__track">
        <div class="mdc-slider__track--inactive"></div>
        <div class="mdc-slider__track--active">
          <div
              class="mdc-slider__track--active_fill"
              style=${e}>
          </div>
        </div>
      </div>`;
  }

  createAdapter() {
    return {
      addClass: e => {
        if ("mdc-slider--disabled" === e) this.disabled = !0;
      },
      removeClass: e => {
        if ("mdc-slider--disabled" === e) this.disabled = !1;
      },
      hasClass: e => {
        switch (e) {
          case "mdc-slider--disabled":
            return this.disabled;

          case "mdc-slider--discrete":
            return this.discrete;

          default:
            return !1;
        }
      },
      addThumbClass: (e, t) => {
        if (t !== je.START && "mdc-slider__thumb--with-indicator" === e) this.endThumbWithIndicator = !0;
      },
      removeThumbClass: (e, t) => {
        if (t !== je.START && "mdc-slider__thumb--with-indicator" === e) this.endThumbWithIndicator = !1;
      },
      registerEventHandler: () => {},
      deregisterEventHandler: () => {},
      registerBodyEventHandler: (e, t) => {
        document.body.addEventListener(e, t);
      },
      deregisterBodyEventHandler: (e, t) => {
        document.body.removeEventListener(e, t);
      },
      registerInputEventHandler: (e, t, i) => {
        e !== je.START && this.formElement.addEventListener(t, i);
      },
      deregisterInputEventHandler: (e, t, i) => {
        e !== je.START && this.formElement.removeEventListener(t, i);
      },
      registerThumbEventHandler: () => {},
      deregisterThumbEventHandler: () => {},
      registerWindowEventHandler: (e, t) => {
        window.addEventListener(e, t);
      },
      deregisterWindowEventHandler: (e, t) => {
        window.addEventListener(e, t);
      },
      emitChangeEvent: (e, t) => {
        if (t === je.START) return;
        const i = new CustomEvent("change", {
          bubbles: !0,
          composed: !0,
          detail: {
            value: e,
            thumb: t
          }
        });
        this.dispatchEvent(i);
      },
      emitDragEndEvent: (e, t) => {
        t !== je.START && this.endRippleHandlers.endPress();
      },
      emitDragStartEvent: (e, t) => {
        t !== je.START && this.endRippleHandlers.startPress();
      },
      emitInputEvent: (e, t) => {
        if (t === je.START) return;
        const i = new CustomEvent("input", {
          bubbles: !0,
          composed: !0,
          detail: {
            value: e,
            thumb: t
          }
        });
        this.dispatchEvent(i);
      },
      focusInput: e => {
        e !== je.START && this.formElement.focus();
      },
      getAttribute: () => "",
      getBoundingClientRect: () => this.mdcRoot.getBoundingClientRect(),
      getInputAttribute: (e, t) => {
        if (t === je.START) return null;

        switch (e) {
          case "min":
            return this.min.toString();

          case "max":
            return this.max.toString();

          case "value":
            return this.valueEnd.toString();

          case "step":
            return this.step.toString();

          default:
            return null;
        }
      },
      getInputValue: e => e === je.START ? "" : this.valueEnd.toString(),
      getThumbBoundingClientRect: e => e === je.START ? this.getBoundingClientRect() : this.endThumb.getBoundingClientRect(),
      getThumbKnobWidth: e => e === je.START ? 0 : this.endThumbKnob.getBoundingClientRect().width,
      getValueToAriaValueTextFn: () => this.valueToAriaTextTransform,
      isInputFocused: e => {
        if (e === je.START) return !1;

        const t = ((e = window.document) => {
          let t = e.activeElement;
          const i = [];
          if (!t) return i;

          for (; t && (i.push(t), t.shadowRoot);) t = t.shadowRoot.activeElement;

          return i;
        })();

        return t[t.length - 1] === this.formElement;
      },
      isRTL: () => "rtl" === getComputedStyle(this).direction,
      setInputAttribute: (e, t, i) => {
        je.START;
      },
      removeInputAttribute: e => {},
      setThumbStyleProperty: (e, t, i) => {
        if (i !== je.START) switch (e) {
          case "transform":
          case "-webkit-transform":
            this.endThumbTransformStyle = t;
            break;

          case "transition":
          case "-webkit-transition":
            this.endThumbTransitionStyle = t;
        }
      },
      removeThumbStyleProperty: (e, t) => {
        if (t !== je.START) switch (e) {
          case "left":
          case "right":
            break;

          case "transition":
          case "-webkit-transition":
            this.endThumbTransitionStyle = "";
        }
      },
      setTrackActiveStyleProperty: (e, t) => {
        switch (e) {
          case "transform-origin":
            this.trackTransformOriginStyle = t;
            break;

          case "left":
            this.trackLeftStyle = t;
            break;

          case "right":
            this.trackRightStyle = t;
            break;

          case "transform":
          case "-webkit-transform":
            break;

          case "transition":
          case "-webkit-transition":
            this.trackTransitionStyle = t;
        }
      },
      removeTrackActiveStyleProperty: e => {
        switch (e) {
          case "transition":
          case "-webkit-transition":
            this.trackTransitionStyle = "";
        }
      },
      setInputValue: (e, t) => {
        t !== je.START && (this.valueEnd = Number(e));
      },
      setPointerCapture: e => {
        this.mdcRoot.setPointerCapture(e);
      },
      setValueIndicatorText: () => {},
      updateTickMarks: e => {
        this.tickMarks = e;
      }
    };
  }

}

me([ye({
  type: Number
})], wt.prototype, "value", null);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

let St = class extends wt {};

function Tt(e, t) {
  (null == t || t > e.length) && (t = e.length);

  for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];

  return r;
}

St.styles = [Se], St = me([fe("mwc-slider")], St);

var Et = function () {
  try {
    var e = function () {
      if (!xt) return xt = !0, Promise.resolve(Promise.resolve(!1)).then(function (e) {
        xt = e, window[At].dispatchEvent(new Event("change"));
      });
    }();

    return Promise.resolve(e && e.then ? e.then(function () {}) : void 0);
  } catch (e) {
    return Promise.reject(e);
  }
},
    At = "__foldables__",
    xt = !1,
    Rt = function () {
  function e() {
    var e = this;
    if (void 0 !== window[At]) return window[At];
    var t = document.createDocumentFragment();
    this.addEventListener = t.addEventListener.bind(t), this.removeEventListener = t.removeEventListener.bind(t), this.dispatchEvent = function (i) {
      if ("change" === i.type) {
        var r = "on" + i.type;
        return "function" == typeof e[r] && e[r](i), t.dispatchEvent(i);
      }
    }, window.addEventListener("message", function (t) {
      "update" === t.data.action && Object.assign(e, t.data.value);
    }), window.addEventListener("resize", function () {
      return function (e, t) {
        var i;
        return function () {
          var t = arguments,
              r = this;
          clearTimeout(i), i = setTimeout(function () {
            return e.apply(r, t);
          }, 200);
        };
      }(Et());
    });
  }

  var t,
      i = e.prototype;
  return i.getSegments = function () {
    if (1 === this.verticalViewportSegments && 1 === this.horizontalViewportSegments) return [{
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }];
    var e = [];
    if (this.verticalViewportSegments > 1) for (var t = this.verticalViewportSegments - 1, i = window.innerHeight - this.browserShellSize, r = 0, s = window.innerWidth, n = i / this.verticalViewportSegments - this.foldSize * t / this.verticalViewportSegments, o = 0; o < this.verticalViewportSegments + t; ++o) e[o] = o % 2 == 0 ? {
      top: r,
      left: 0,
      bottom: r + n,
      right: s,
      width: s,
      height: n
    } : {
      top: r,
      left: 0,
      right: s,
      bottom: r + this.foldSize,
      width: s,
      height: this.foldSize
    }, r += e[o].height;
    if (this.horizontalViewportSegments > 1) for (var a = this.horizontalViewportSegments - 1, d = window.innerWidth / this.horizontalViewportSegments - this.foldSize * a / this.horizontalViewportSegments, c = window.innerHeight, l = 0, h = 0; h < this.horizontalViewportSegments + a; ++h) e[h] = h % 2 == 0 ? {
      top: 0,
      left: l,
      right: l + d,
      bottom: c,
      width: d,
      height: c
    } : {
      top: 0,
      left: l,
      right: l + this.foldSize,
      bottom: c,
      width: this.foldSize,
      height: c
    }, l += e[h].width;
    return e;
  }, i.randomizeSegmentsConfiguration = function (e) {
    var t = Math.random() < .5,
        i = Math.round(Math.random() * (e - 1) + 1);
    t ? (this.verticalViewportSegments = i, this.horizontalViewportSegments = 1) : (this.horizontalViewportSegments = i, this.verticalViewportSegments = 1);
  }, (t = [{
    key: "horizontalViewportSegments",
    get: function () {
      return +sessionStorage.getItem(At + "-horizontal-viewport-segments") || 1;
    },
    set: function (e) {
      if (isNaN(e)) throw new TypeError(e);
      sessionStorage.setItem(At + "-horizontal-viewport-segments", e), Et();
    }
  }, {
    key: "verticalViewportSegments",
    get: function () {
      return +sessionStorage.getItem(At + "-vertical-viewport-segments") || 1;
    },
    set: function (e) {
      if (isNaN(e)) throw new TypeError(e);
      sessionStorage.setItem(At + "-vertical-viewport-segments", e), Et();
    }
  }, {
    key: "foldSize",
    get: function () {
      return +sessionStorage.getItem(At + "-fold-size") || 0;
    },
    set: function (e) {
      if (!(Number(e) >= 0)) throw new TypeError(e);
      sessionStorage.setItem(At + "-fold-size", e), Et();
    }
  }, {
    key: "browserShellSize",
    get: function () {
      return +sessionStorage.getItem(At + "-browser-shell-size") || 0;
    },
    set: function (e) {
      if (!(Number(e) >= 0)) throw new TypeError(e);
      sessionStorage.setItem(At + "-browser-shell-size", e), Et();
    }
  }]) && function (e, t) {
    for (var i = 0; i < t.length; i++) {
      var r = t[i];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }(e.prototype, t), e;
}();

window[At] = new Rt(), void 0 === window.visualViewport.segments && (window.visualViewport.segments = function () {
  var e = window[At].getSegments();
  return 1 === e.length ? e : e.filter(function (e, t) {
    return t % 2 == 0;
  });
});
var Ct = /\((.*?)\)/gi,
    kt = /@media[^\(]+/gi,
    $t = /(horizontal-viewport-segments:)\s?(\d)/gi,
    It = /(vertical-viewport-segments:)\s?(\d)/gi;

function Pt(e, t) {
  var i = e.matchAll(t);
  return null === i ? [] : Array.from(i, function (e) {
    return e[2];
  })[0];
}

function Dt(e) {
  var t = function (e) {
    var t,
        i = new RegExp("(\\s*)(@media.*?\\b-viewport-segments\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}", "gi");
    if ("function" == typeof e.matchAll) t = Array.from(e.matchAll(i));else {
      for (t = []; t[t.length] = i.exec(e););

      t.length--;
    }
    return t;
  }(e),
      i = [[]];

  return t.forEach(function (e) {
    var t = e[1],
        r = e[2],
        s = e[3],
        n = e[4],
        o = r.match(kt) || [],
        a = r.match(Ct) || [],
        d = Pt(r, It);
    void 0 === d && (d = 1);
    var c = Pt(r, $t);
    void 0 === c && (c = 1), a = a.filter(function (e) {
      return !e.includes("-viewport-segments");
    }).join(" and "), void 0 === i[d] && (i[d] = new Array()), i[d][c] = "" + t + o + a + "{" + s + n + "}";
  }), i;
}

var zt = window.matchMedia("(vertical-viewport-segments)").matches || window.matchMedia("(horizontal-viewport-segments)").matches || !1;
console.info("CSS Viewport Segments are supported? " + zt);
var Vt,
    Ft = new Rt();

if (!zt) {
  var Ht = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));
  (Vt = Ht, Promise.all(Vt.map(function (e) {
    return e.href ? fetch(e.href).then(function (e) {
      return e.text();
    }) : e.textContent;
  }))).then(function (e) {
    var t = new DocumentFragment();
    e.forEach(function (e, i) {
      for (var r = function (e, t) {
        return e.replace(new RegExp("(\\s*)(@media.*?\\b-viewport-segments\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}", "gi"), t);
      }(e, ""), s = Dt(e), n = Ht[i].href || "inline", o = 0, a = Object.entries(s); o < a.length; o++) {
        var d = a[o],
            c = d[0],
            l = d[1];
        null == Mt[c] && (Mt[c] = []);

        for (var h = 0, p = Object.entries(l); h < p.length; h++) {
          var u = p[h];
          Mt[c][u[0]] = "/* origin: " + n + " */" + u[1];
        }
      }

      var m = document.createElement("style");
      m.setAttribute("data-css-origin", n), m.textContent = r, t.appendChild(m);
    }), Ht.forEach(function (e) {
      return null != e.parentElement && e.parentElement.removeChild(e);
    }), document.head.appendChild(t), function (e) {
      zt || (Lt(e), Ft.addEventListener("change", function () {
        return Lt(e);
      }));
    }();
  });
}

var Mt = [[]];

function Lt(e) {
  var t,
      i = Ft,
      r = null;
  (t = e ? Mt[e.nodeName.toLowerCase()] : Mt)[i.verticalViewportSegments] && (r = t[i.verticalViewportSegments][i.horizontalViewportSegments]);
  var s,
      n = t[0][0] ? t[0][0] : null;

  if (r) {
    for (var o = window.visualViewport.segments(), a = !(o[0].height < window.innerHeight), d = 0, c = Object.entries(o); d < c.length; d++) for (var l = c[d], h = l[0], p = 0, u = Object.entries(l[1]); p < u.length; p++) {
      var m = u[p],
          v = m[0];
      s = m[1] + "px", r = r.replace(new RegExp("env\\(\\s*" + (a ? "viewport-segment-" + v + " " + h + " 0" : "viewport-segment-" + v + " 0 " + h) + "\\s*\\)", "gi"), s);
    }

    var f = "__foldables_sheet__",
        g = function (e, t) {
      for (var i, r = function (e, t) {
        var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (i) return (i = i.call(e)).next.bind(i);

        if (Array.isArray(e) || (i = function (e, t) {
          if (e) {
            if ("string" == typeof e) return Tt(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Tt(e, t) : void 0;
          }
        }(e))) {
          i && (e = i);
          var r = 0;
          return function () {
            return r >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[r++]
            };
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }(e.querySelectorAll("." + f)); !(i = r()).done;) i.value.remove();

      var s = document.createElement("style");
      s.className = f, s.textContent = t, e === document ? document.head.appendChild(s) : e.appendChild(s);
    };

    if (e) {
      var y = e.shadowRoot;
      "adoptedStyleSheets" in y && y.adoptedStyleSheets.length > 0 ? y.adoptedStyleSheets[0].replace(n + r) : g(y, r);
    } else g(document, r);
  }
}

const Nt = {
  Foldable: "foldable",
  Dual: "dual"
};

class Ut extends ce {}

e(Ut, "styles", Z`
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
customElements.define("close-icon", class extends Ut {
  render() {
    return I`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `;
  }

});
customElements.define("fullscreen-icon", class extends Ut {
  render() {
    return I`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `;
  }

});
customElements.define("splitview-icon", class extends Ut {
  render() {
    return I`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `;
  }

});
customElements.define("rotate-icon", class extends Ut {
  render() {
    return I`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `;
  }

});
customElements.define("minimize-icon", class extends Ut {
  render() {
    return I`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `;
  }

});

class Ot extends ce {
  static get properties() {
    return {
      verticalViewportSegments: {
        type: Number
      },
      horizontalViewportSegments: {
        type: Number
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
    super(), e(this, "_mini_configurator_header", void 0), e(this, "_mini_configurator", void 0), e(this, "_configurator", void 0), e(this, "_configurator_header", void 0), e(this, "_device_type_select", void 0), e(this, "_orientation_select", void 0), e(this, "_seam_slider", void 0), e(this, "_seam_container", void 0), e(this, "_preview", void 0), e(this, "_preview_container", void 0), e(this, "_device", void 0), e(this, "_frame", void 0), e(this, "_device_hinge", void 0), e(this, "_currentOrientation", void 0), e(this, "_currentDevice", void 0), e(this, "_isFullscreen", !1), e(this, "_verticalViewportSegments", 1), e(this, "_horizontalViewportSegments", 1), e(this, "_fold_width", void 0), e(this, "_browser_shell_size", void 0), e(this, "_x", 0), e(this, "_y", 0), e(this, "_offset_x", 0), e(this, "_offset_y", 0), e(this, "_resizeHandler", void 0), e(this, "_handleKeyUp", e => {
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
      const r = window.getComputedStyle(this.shadowRoot.host),
            s = parseFloat(r.width),
            n = parseFloat(r.height);
      t < 0 && (t = 0), i < 0 && (i = 0), i + n >= window.innerHeight && (i = window.innerHeight - n), t + s >= window.innerWidth && (t = window.innerWidth - s), this._updateConfiguratorPosition(t, i), e.preventDefault();
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
    }), this._verticalViewportSegments = 1, this._horizontalViewportSegments = 1;
  }

  firstUpdated() {
    if (this._inIframe()) return void (this.shadowRoot.host.style.display = "none");
    if (window.matchMedia("(vertical-viewport-segments)").matches || window.matchMedia("(horizontal-viewport-segments)").matches || !1) return console.info("CSS Viewport Segments Media Queries are supported, the configurator will hide itself."), void (this.shadowRoot.host.style.display = "none");
    this._mini_configurator_header = this.shadowRoot.querySelector("#mini-configurator-header"), this._mini_configurator = this.shadowRoot.querySelector("#mini-configurator"), this._configurator = this.shadowRoot.querySelector("#configurator"), this._configurator_header = this.shadowRoot.querySelector("#configurator-header"), this._device_type_select = this.shadowRoot.querySelector("#device-select"), this._orientation_select = this.shadowRoot.querySelector("#orientation-select"), this._seam_slider = this.shadowRoot.getElementById("seam"), this._seam_container = this.shadowRoot.getElementById("seam-container"), this._configurator_header.onpointerdown = this._startDragConfigurator.bind(this), this._mini_configurator_header.onpointerdown = this._startDragMiniConfigurator.bind(this), this._device_type_select.onchange = this._deviceTypeChanged.bind(this), this._orientation_select.onchange = this._orientationChanged.bind(this), this._seam_slider.oninput = this._seamValueUpdated.bind(this);
    const e = window.getComputedStyle(this.shadowRoot.host);
    parseFloat(e.width);
    const t = parseFloat(e.height);
    this._updateConfiguratorPosition(20, window.innerHeight - t - 20), this._orientation_select.disabled = !0, this._seam_slider.disabled = !0, this._browser_shell_size = 0, this._verticalViewportSegments = 1, this._horizontalViewportSegments = 1, this.foldWidth = 0, this._preview = this.shadowRoot.querySelector("#preview"), this._preview_container = this.shadowRoot.querySelector("#preview-container"), this._device = this.shadowRoot.querySelector("#device"), this._frame = this.shadowRoot.querySelector("#frame"), this._device_hinge = this.shadowRoot.querySelector("#device-hinge"), this._updateFoldablesFeature(), this._currentOrientation = "portrait", this._deviceType = Nt.Dual, document.addEventListener("keyup", this._handleKeyUp, !1), console.log("Device Pixel Ratio : " + window.devicePixelRatio);
  }

  _handleAsusSpanning() {
    console.log(window.innerHeight), window.innerHeight > 752 ? (this.horizontalViewportSegments = 1, this.verticalViewportSegments = 2, this.foldWidth = 30, this._updateFoldablesFeature(), setTimeout(() => {
      this._addZenbookVariables(document.styleSheets[0]), this._addZenbookVariables(this._frame.contentDocument.styleSheets[0]);
    }, 300)) : (this.horizontalViewportSegments = 1, this.verticalViewportSegments = 1, this.foldWidth = 0, this._updateFoldablesFeature()), this._currentOrientation = this._orientationFromSegments();
  }

  _orientationFromSegments() {
    return 2 === this.horizontalViewportSegments && 1 === this.verticalViewportSegments ? "portrait" : 1 === this.horizontalViewportSegments && 2 === this.verticalViewportSegments ? "landscape" : "portrait";
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
    "portrait" === this._orientation_select[t].value ? (this.horizontalViewportSegments = 2, this.verticalViewportSegments = 1) : (this.horizontalViewportSegments = 1, this.verticalViewportSegments = 2), this._updatePreviewRotation(), this._updateFoldablesFeature(), this._calculateAndApplyScaleFactor();
  }

  _applyVerticalRotation() {
    this._frame.style.width = "calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))", this._frame.style.height = "var(--device-screen1-height)", this._isFullscreen ? (this._preview.style.left = "50%", this._preview.style.transform = "scale(var(--scale-factor)) translateX(-50%)") : (this._preview.style.left = "", this._preview.style.transform = "scale(var(--scale-factor))"), this._frame.style.transform = "", this._frame.style.top = "calc(var(--device-border) + var(--device-bezel-vertical))", this._frame.style.left = "calc(var(--device-bezel-horizontal) + var(--device-border))";
  }

  _applyHorizontalRotation() {
    this._frame.style.transform = "rotate(-90deg) translateX(-100%)", this._frame.style.width = "var(--device-screen1-height)", this._frame.style.height = "calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))", this._isFullscreen ? (this._preview.style.left = "50%", this._preview.style.transform = "scale(var(--scale-factor)) rotate(90deg) translateY(-50%)") : (this._preview.style.left = "", this._preview.style.transform = "scale(var(--scale-factor)) rotate(90deg) translateY(-100%)");
  }

  _updatePreviewRotation() {
    this._orientationFromSegments() != this._currentOrientation && (this._preview.style.transition = "transform 0.7s ease-in-out", this._preview.addEventListener("transitionend", this._rotationFinished)), this._currentOrientation = this._orientationFromSegments(), 1 === this.horizontalViewportSegments && 1 === this.verticalViewportSegments ? "asus" === this._currentDevice ? this._applyHorizontalRotation() : this._applyVerticalRotation() : 2 === this.horizontalViewportSegments ? this._applyVerticalRotation() : this._applyHorizontalRotation();
  }

  get horizontalViewportSegments() {
    return this._horizontalViewportSegments;
  }

  set horizontalViewportSegments(e) {
    let t = this._horizontalViewportSegments;
    this._orientation_select.selectedIndex = 2 === e ? 0 : 1, this._horizontalViewportSegments = e, this.requestUpdate("horizontalViewportSegments", t);
  }

  get verticalViewportSegments() {
    return this._verticalViewportSegments;
  }

  set verticalViewportSegments(e) {
    let t = this._verticalViewportSegments;
    this._orientation_select.selectedIndex = 2 === e ? 1 : 0, this._verticalViewportSegments = e, this.requestUpdate("verticalViewportSegments", t);
  }

  _deviceTypeChanged(e) {
    const t = this._device_type_select.selectedIndex,
          i = this._device_type_select[t].value;

    switch (window.removeEventListener("resize", this._resizeHandler), this._resizeHandler = null, 1 === this.verticalViewportSegments && 1 === this.horizontalViewportSegments && (this.verticalViewportSegments = 1, this.horizontalViewportSegments = 2, this._currentOrientation = "portrait"), i) {
      case "custom":
        this._seam_container.style.display = "flex", this._orientation_select.disabled = !1, this._seam_slider.disabled = !1, this._seam_slider.layout(), this.foldWidth = 24, this._deviceType = Nt.Dual, this._currentDevice = "custom";
        break;

      case "neo":
        this._orientation_select.disabled = !1, this._seam_slider.disabled = !0, this._seam_container.style.display = "none", this._deviceType = Nt.Dual, this.foldWidth = 24, this._currentDevice = "neo";
        break;

      case "duo":
        this._orientation_select.disabled = !1, this._seam_slider.disabled = !0, this._seam_container.style.display = "none", this._deviceType = Nt.Dual, this.foldWidth = 28, this._currentDevice = "duo";
        break;

      case "asus":
        this._resizeHandler = this._debounce(this._onResize, 200), window.addEventListener("resize", this._resizeHandler), this._deviceType = Nt.Dual, this._handleAsusSpanning(), this._currentDevice = "asus", this._orientation_select.disabled = !0, this._seam_slider.disabled = !0, this._seam_container.style.display = "none";
        break;

      case "fold":
        this._orientation_select.disabled = !1, this._seam_container.style.display = "flex", this._seam_slider.disabled = !0, this._seam_container.style.display = "none", this._deviceType = Nt.Foldable, this._seam_slider.layout(), this.foldWidth = 10, this._currentDevice = "fold";
        break;

      default:
        this._orientation_select.disabled = !0, this._seam_slider.disabled = !0, this._seam_container.style.display = "none", this.verticalViewportSegments = 1, this.horizontalViewportSegments = 1, this._currentOrientation = "portrait", this._currentDevice = "duo", this.foldWidth = 0, this._deviceType = Nt.Dual;
    }

    this._updatePreviewConfiguration(), this._updateFoldablesFeature(), this._frame.contentWindow.location.reload(!0);
  }

  _calculateAndApplyScaleFactor() {
    const e = window.getComputedStyle(this._preview_container),
          t = window.getComputedStyle(this._device),
          i = parseInt(e.width, 10),
          r = parseInt(e.height, 10);
    let s = parseInt(t.width, 10),
        n = parseInt(t.height, 10),
        o = 1;

    if ("landscape" === this._currentOrientation && (s = parseInt(t.height, 10), n = parseInt(t.width, 10)), n > r || s > i) {
      const e = r / n,
            t = i / s;
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

    this._deviceType === Nt.Foldable ? (this._device_hinge.classList.add("fold"), this._device_hinge.classList.remove("hinge")) : (this._device_hinge.classList.remove("fold"), this._device_hinge.classList.add("hinge")), this._updatePreviewRotation(), this._calculateAndApplyScaleFactor();
  }

  _updateFoldablesFeature() {
    const e = new Rt();
    e.foldSize = this.foldWidth, e.horizontalViewportSegments = this.horizontalViewportSegments, e.verticalViewportSegments = this.verticalViewportSegments, this._seam_slider.value = this.foldWidth;
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
          r = parseFloat(i.width),
          s = parseFloat(i.height);
    this._offset_y + s >= window.innerHeight && (t = window.innerHeight - s), this._offset_x + r >= window.innerWidth && (e = window.innerWidth - r), this._updateConfiguratorPosition(e, t), this._updatePreviewConfiguration();
  }

  _updateConfiguratorPosition(e, t) {
    this._offset_x = e, this._offset_y = t, this.shadowRoot.host.style.transform = "translate3d(" + e + "px, " + t + "px, 0)";
  }

  _toggleSpanning() {
    1 != this.verticalViewportSegments || 1 != this.horizontalViewportSegments ? this._device_type_select.selectedIndex = 0 : this._device_type_select.selectedIndex = 2, this._deviceTypeChanged();
  }

  _changeOrientation() {
    1 === this.verticalViewportSegments && 1 === this.horizontalViewportSegments || (2 === this.verticalViewportSegments ? (this.verticalViewportSegments = 1, this.horizontalViewportSegments = 2) : (this.verticalViewportSegments = 2, this.horizontalViewportSegments = 1), this._updatePreviewRotation(), this._updateFoldablesFeature(), this._calculateAndApplyScaleFactor());
  }

  render() {
    return I`
    <div id="mini-configurator">
      <div class="header-background header" id="mini-configurator-header">Foldable Configurator</div>
      <div class="icon-row">
        <splitview-icon @click="${this._toggleSpanning}" class="${1 === this.verticalViewportSegments && 1 === this.horizontalViewportSegments ? "" : "toggle"}"></splitview-icon>
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
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
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

e(Ot, "styles", Z`
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
      --mdc-theme-primary: black;
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
  `), customElements.define("foldable-device-configurator", Ot);

export { Nt as DeviceType, Ot as FoldableDeviceConfigurator };
