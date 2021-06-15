/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t, i, s, e;

const o = globalThis.trustedTypes,
      l = o ? o.createPolicy("lit-html", {
  createHTML: t => t
}) : void 0,
      n = `lit$${(Math.random() + "").slice(9)}$`,
      h = "?" + n,
      r = `<${h}>`,
      u = document,
      c = (t = "") => u.createComment(t),
      d = t => null === t || "object" != typeof t && "function" != typeof t,
      v = Array.isArray,
      a = t => {
  var i;
  return v(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
},
      f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      _ = /-->/g,
      m = />/g,
      p = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      $ = /'/g,
      g = /"/g,
      y = /^(?:script|style|textarea)$/i,
      b = t => (i, ...s) => ({
  _$litType$: t,
  strings: i,
  values: s
}),
      T = b(1),
      w = Symbol.for("lit-noChange"),
      A = Symbol.for("lit-nothing"),
      P = new WeakMap(),
      V = (t, i, s) => {
  var e, o;
  const l = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  let n = l._$litPart$;

  if (void 0 === n) {
    const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
    l._$litPart$ = n = new C(i.insertBefore(c(), t), t, void 0, s);
  }

  return n.I(t), n;
},
      E = u.createTreeWalker(u, 129, null, !1),
      M = (t, i) => {
  const s = t.length - 1,
        e = [];
  let o,
      h = 2 === i ? "<svg>" : "",
      u = f;

  for (let i = 0; i < s; i++) {
    const s = t[i];
    let l,
        c,
        d = -1,
        v = 0;

    for (; v < s.length && (u.lastIndex = v, c = u.exec(s), null !== c);) v = u.lastIndex, u === f ? "!--" === c[1] ? u = _ : void 0 !== c[1] ? u = m : void 0 !== c[2] ? (y.test(c[2]) && (o = RegExp("</" + c[2], "g")), u = p) : void 0 !== c[3] && (u = p) : u === p ? ">" === c[0] ? (u = null != o ? o : f, d = -1) : void 0 === c[1] ? d = -2 : (d = u.lastIndex - c[2].length, l = c[1], u = void 0 === c[3] ? p : '"' === c[3] ? g : $) : u === g || u === $ ? u = p : u === _ || u === m ? u = f : (u = p, o = void 0);

    const a = u === p && t[i + 1].startsWith("/>") ? " " : "";
    h += u === f ? s + r : d >= 0 ? (e.push(l), s.slice(0, d) + "$lit$" + s.slice(d) + n + a) : s + n + (-2 === d ? (e.push(void 0), i) : a);
  }

  const c = h + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
  return [void 0 !== l ? l.createHTML(c) : c, e];
};

class N {
  constructor({
    strings: t,
    _$litType$: i
  }, s) {
    let e;
    this.parts = [];
    let l = 0,
        r = 0;
    const u = t.length - 1,
          d = this.parts,
          [v, a] = M(t, i);

    if (this.el = N.createElement(v, s), E.currentNode = this.el.content, 2 === i) {
      const t = this.el.content,
            i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }

    for (; null !== (e = E.nextNode()) && d.length < u;) {
      if (1 === e.nodeType) {
        if (e.hasAttributes()) {
          const t = [];

          for (const i of e.getAttributeNames()) if (i.endsWith("$lit$") || i.startsWith(n)) {
            const s = a[r++];

            if (t.push(i), void 0 !== s) {
              const t = e.getAttribute(s.toLowerCase() + "$lit$").split(n),
                    i = /([.?@])?(.*)/.exec(s);
              d.push({
                type: 1,
                index: l,
                name: i[2],
                strings: t,
                ctor: "." === i[1] ? I : "?" === i[1] ? L : "@" === i[1] ? R : H
              });
            } else d.push({
              type: 6,
              index: l
            });
          }

          for (const i of t) e.removeAttribute(i);
        }

        if (y.test(e.tagName)) {
          const t = e.textContent.split(n),
                i = t.length - 1;

          if (i > 0) {
            e.textContent = o ? o.emptyScript : "";

            for (let s = 0; s < i; s++) e.append(t[s], c()), E.nextNode(), d.push({
              type: 2,
              index: ++l
            });

            e.append(t[i], c());
          }
        }
      } else if (8 === e.nodeType) if (e.data === h) d.push({
        type: 2,
        index: l
      });else {
        let t = -1;

        for (; -1 !== (t = e.data.indexOf(n, t + 1));) d.push({
          type: 7,
          index: l
        }), t += n.length - 1;
      }

      l++;
    }
  }

  static createElement(t, i) {
    const s = u.createElement("template");
    return s.innerHTML = t, s;
  }

}

function S(t, i, s = t, e) {
  var o, l, n, h;
  if (i === w) return i;
  let r = void 0 !== e ? null === (o = s.Σi) || void 0 === o ? void 0 : o[e] : s.Σo;
  const u = d(i) ? void 0 : i._$litDirective$;
  return (null == r ? void 0 : r.constructor) !== u && (null === (l = null == r ? void 0 : r.O) || void 0 === l || l.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r.T(t, s, e)), void 0 !== e ? (null !== (n = (h = s).Σi) && void 0 !== n ? n : h.Σi = [])[e] = r : s.Σo = r), void 0 !== r && (i = S(t, r.S(t, i.values), r, e)), i;
}

class k {
  constructor(t, i) {
    this.l = [], this.N = void 0, this.D = t, this.M = i;
  }

  u(t) {
    var i;
    const {
      el: {
        content: s
      },
      parts: e
    } = this.D,
          o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : u).importNode(s, !0);
    E.currentNode = o;
    let l = E.nextNode(),
        n = 0,
        h = 0,
        r = e[0];

    for (; void 0 !== r;) {
      if (n === r.index) {
        let i;
        2 === r.type ? i = new C(l, l.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(l, r.name, r.strings, this, t) : 6 === r.type && (i = new z(l, this, t)), this.l.push(i), r = e[++h];
      }

      n !== (null == r ? void 0 : r.index) && (l = E.nextNode(), n++);
    }

    return o;
  }

  v(t) {
    let i = 0;

    for (const s of this.l) void 0 !== s && (void 0 !== s.strings ? (s.I(t, s, i), i += s.strings.length - 2) : s.I(t[i])), i++;
  }

}

class C {
  constructor(t, i, s, e) {
    this.type = 2, this.N = void 0, this.A = t, this.B = i, this.M = s, this.options = e;
  }

  setConnected(t) {
    var i;
    null === (i = this.P) || void 0 === i || i.call(this, t);
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

  I(t, i = this) {
    t = S(this, t, i), d(t) ? t === A || null == t || "" === t ? (this.H !== A && this.R(), this.H = A) : t !== this.H && t !== w && this.m(t) : void 0 !== t._$litType$ ? this._(t) : void 0 !== t.nodeType ? this.$(t) : a(t) ? this.g(t) : this.m(t);
  }

  k(t, i = this.B) {
    return this.A.parentNode.insertBefore(t, i);
  }

  $(t) {
    this.H !== t && (this.R(), this.H = this.k(t));
  }

  m(t) {
    const i = this.A.nextSibling;
    null !== i && 3 === i.nodeType && (null === this.B ? null === i.nextSibling : i === this.B.previousSibling) ? i.data = t : this.$(u.createTextNode(t)), this.H = t;
  }

  _(t) {
    var i;
    const {
      values: s,
      _$litType$: e
    } = t,
          o = "number" == typeof e ? this.C(t) : (void 0 === e.el && (e.el = N.createElement(e.h, this.options)), e);
    if ((null === (i = this.H) || void 0 === i ? void 0 : i.D) === o) this.H.v(s);else {
      const t = new k(o, this),
            i = t.u(this.options);
      t.v(s), this.$(i), this.H = t;
    }
  }

  C(t) {
    let i = P.get(t.strings);
    return void 0 === i && P.set(t.strings, i = new N(t)), i;
  }

  g(t) {
    v(this.H) || (this.H = [], this.R());
    const i = this.H;
    let s,
        e = 0;

    for (const o of t) e === i.length ? i.push(s = new C(this.k(c()), this.k(c()), this, this.options)) : s = i[e], s.I(o), e++;

    e < i.length && (this.R(s && s.B.nextSibling, e), i.length = e);
  }

  R(t = this.A.nextSibling, i) {
    var s;

    for (null === (s = this.P) || void 0 === s || s.call(this, !1, !0, i); t && t !== this.B;) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }

}

class H {
  constructor(t, i, s, e, o) {
    this.type = 1, this.H = A, this.N = void 0, this.V = void 0, this.element = t, this.name = i, this.M = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this.H = Array(s.length - 1).fill(A), this.strings = s) : this.H = A;
  }

  get tagName() {
    return this.element.tagName;
  }

  I(t, i = this, s, e) {
    const o = this.strings;
    let l = !1;
    if (void 0 === o) t = S(this, t, i, 0), l = !d(t) || t !== this.H && t !== w, l && (this.H = t);else {
      const e = t;
      let n, h;

      for (t = o[0], n = 0; n < o.length - 1; n++) h = S(this, e[s + n], i, n), h === w && (h = this.H[n]), l || (l = !d(h) || h !== this.H[n]), h === A ? t = A : t !== A && (t += (null != h ? h : "") + o[n + 1]), this.H[n] = h;
    }
    l && !e && this.W(t);
  }

  W(t) {
    t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
  }

}

class I extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }

  W(t) {
    this.element[this.name] = t === A ? void 0 : t;
  }

}

class L extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }

  W(t) {
    t && t !== A ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
  }

}

class R extends H {
  constructor() {
    super(...arguments), this.type = 5;
  }

  I(t, i = this) {
    var s;
    if ((t = null !== (s = S(this, t, i, 0)) && void 0 !== s ? s : A) === w) return;
    const e = this.H,
          o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
          l = t !== A && (e === A || o);
    o && this.element.removeEventListener(this.name, this, e), l && this.element.addEventListener(this.name, this, t), this.H = t;
  }

  handleEvent(t) {
    var i, s;
    "function" == typeof this.H ? this.H.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this.H.handleEvent(t);
  }

}

class z {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this.N = void 0, this.V = void 0, this.M = i, this.options = s;
  }

  I(t) {
    S(this, t);
  }

}
null === (i = (t = globalThis).litHtmlPlatformSupport) || void 0 === i || i.call(t, N, C), (null !== (s = (e = globalThis).litHtmlVersions) && void 0 !== s ? s : e.litHtmlVersions = []).push("2.0.0-rc.3");

export { T, V, w };
