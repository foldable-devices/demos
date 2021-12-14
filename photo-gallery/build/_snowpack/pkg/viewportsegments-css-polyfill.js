function e(e, t) {
  (null == t || t > e.length) && (t = e.length);

  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];

  return r;
}

var t = function () {
  try {
    window[n].updateSegments();

    var e = function () {
      if (!r) return r = !0, Promise.resolve(Promise.resolve(!1)).then(function (e) {
        r = e, window[n].dispatchEvent(new Event("change"));
      });
    }();

    return Promise.resolve(e && e.then ? e.then(function () {}) : void 0);
  } catch (e) {
    return Promise.reject(e);
  }
},
    n = "__foldables__",
    r = !1,
    i = /*#__PURE__*/function () {
  function e() {
    var e = this;
    if (void 0 !== window[n]) return window[n];
    var r = document.createDocumentFragment();
    this.addEventListener = r.addEventListener.bind(r), this.removeEventListener = r.removeEventListener.bind(r), this.dispatchEvent = function (t) {
      if ("change" === t.type) {
        var n = "on" + t.type;
        return "function" == typeof e[n] && e[n](t), r.dispatchEvent(t);
      }
    }, window.addEventListener("message", function (t) {
      "update" === t.data.action && Object.assign(e, t.data.value);
    }), window.addEventListener("resize", function () {
      return function (e, t) {
        var n;
        return function () {
          var t = arguments,
              r = this;
          clearTimeout(n), n = setTimeout(function () {
            return e.apply(r, t);
          }, 200);
        };
      }(t());
    });
  }

  var r,
      i = e.prototype;
  return i.updateSegments = function () {
    1 === this.verticalViewportSegments && 1 === this.horizontalViewportSegments && (window.visualViewport.segments = null);
    var e = [];
    if (this.verticalViewportSegments > 1) for (var t = window.innerHeight - this.browserShellSize, n = 0, r = window.innerWidth, i = t / this.verticalViewportSegments - this.foldSize * (this.verticalViewportSegments - 1) / this.verticalViewportSegments, o = 0; o < this.verticalViewportSegments; ++o) e[o] = {
      top: n,
      left: 0,
      bottom: n + i,
      right: r,
      width: r,
      height: i
    }, n += e[o].height, n += this.foldSize;
    if (this.horizontalViewportSegments > 1) for (var a = window.innerWidth / this.horizontalViewportSegments - this.foldSize * (this.horizontalViewportSegments - 1) / this.horizontalViewportSegments, s = window.innerHeight, l = 0, c = 0; c < this.horizontalViewportSegments; ++c) e[c] = {
      top: 0,
      left: l,
      right: l + a,
      bottom: s,
      width: a,
      height: s
    }, l += e[c].width, l += this.foldSize;
    window.visualViewport.segments = e;
  }, i.randomizeSegmentsConfiguration = function (e) {
    var t = Math.random() < .5,
        n = Math.round(Math.random() * (e - 1) + 1);
    t ? (this.verticalViewportSegments = n, this.horizontalViewportSegments = 1) : (this.horizontalViewportSegments = n, this.verticalViewportSegments = 1);
  }, (r = [{
    key: "horizontalViewportSegments",
    get: function () {
      return +sessionStorage.getItem(n + "-horizontal-viewport-segments") || 1;
    },
    set: function (e) {
      if (isNaN(e)) throw new TypeError(e);
      sessionStorage.setItem(n + "-horizontal-viewport-segments", e), t();
    }
  }, {
    key: "verticalViewportSegments",
    get: function () {
      return +sessionStorage.getItem(n + "-vertical-viewport-segments") || 1;
    },
    set: function (e) {
      if (isNaN(e)) throw new TypeError(e);
      sessionStorage.setItem(n + "-vertical-viewport-segments", e), t();
    }
  }, {
    key: "foldSize",
    get: function () {
      return +sessionStorage.getItem(n + "-fold-size") || 0;
    },
    set: function (e) {
      if (!(Number(e) >= 0)) throw new TypeError(e);
      sessionStorage.setItem(n + "-fold-size", e), t();
    }
  }, {
    key: "browserShellSize",
    get: function () {
      return +sessionStorage.getItem(n + "-browser-shell-size") || 0;
    },
    set: function (e) {
      if (!(Number(e) >= 0)) throw new TypeError(e);
      sessionStorage.setItem(n + "-browser-shell-size", e), t();
    }
  }]) && function (e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }(e.prototype, r), e;
}();

window[n] = new i(), void 0 === window.visualViewport.segments && window[n].updateSegments();
var o = /\((.*?)\)/gi,
    a = /@media[^\(]+/gi,
    s = /(horizontal-viewport-segments:)\s?(\d)/gi,
    l = /(vertical-viewport-segments:)\s?(\d)/gi;

function c(e, t) {
  return e.replace(new RegExp("(\\s*)(@media.*?\\b-viewport-segments\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}", "gi"), t);
}

function h(e, t) {
  var n = e.matchAll(t);
  return null === n ? [] : Array.from(n, function (e) {
    return e[2];
  })[0];
}

function u(e) {
  var t = function (e) {
    var t,
        n = new RegExp("(\\s*)(@media.*?\\b-viewport-segments\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}", "gi");
    if ("function" == typeof e.matchAll) t = Array.from(e.matchAll(n));else {
      for (t = []; t[t.length] = n.exec(e););

      t.length--;
    }
    return t;
  }(e),
      n = [[]];

  return t.forEach(function (e) {
    var t = e[1],
        r = e[2],
        i = e[3],
        c = e[4],
        u = r.match(a) || [],
        m = r.match(o) || [],
        d = h(r, l);
    void 0 === d && (d = 1);
    var v = h(r, s);
    void 0 === v && (v = 1), m = m.filter(function (e) {
      return !e.includes("-viewport-segments");
    }).join(" and "), void 0 === n[d] && (n[d] = new Array()), n[d][v] = "" + t + u + m + "{" + i + c + "}";
  }), n;
}

var m = window.matchMedia("(vertical-viewport-segments)").matches || window.matchMedia("(horizontal-viewport-segments)").matches || !1;
console.info("CSS Viewport Segments are supported? " + m);
var d,
    v = new i();

if (!m) {
  var f = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));
  (d = f, Promise.all(d.map(function (e) {
    return e.href ? fetch(e.href).then(function (e) {
      return e.text();
    }) : e.textContent;
  }))).then(function (e) {
    var t = new DocumentFragment();
    e.forEach(function (e, n) {
      for (var r = c(e, ""), i = u(e), o = f[n].href || "inline", a = 0, s = Object.entries(i); a < s.length; a++) {
        var l = s[a],
            h = l[0],
            m = l[1];
        null == g[h] && (g[h] = []);

        for (var d = 0, v = Object.entries(m); d < v.length; d++) {
          var w = v[d];
          g[h][w[0]] = "/* origin: " + o + " */" + w[1];
        }
      }

      var p = document.createElement("style");
      p.setAttribute("data-css-origin", o), p.textContent = r, t.appendChild(p);
    }), f.forEach(function (e) {
      return null != e.parentElement && e.parentElement.removeChild(e);
    }), document.head.appendChild(t), p();
  });
}

var g = [[]];

function w(e, t) {
  if (m) return e;
  var n = c(e, ""),
      r = u(e);
  t && (g[t] = [[]]);

  for (var i = t ? g[t] : g, o = t ? "" : "/* origin: inline */", a = 0, s = Object.entries(r); a < s.length; a++) {
    var l = s[a],
        h = l[0],
        d = l[1];
    null == i[h] && (i[h] = []);

    for (var v = 0, f = Object.entries(d); v < f.length; v++) {
      var w = f[v];
      i[h][w[0]] = "" + o + w[1];
    }
  }

  return i[0][0] = n, n;
}

function p(e) {
  m || (S(e), v.addEventListener("change", function () {
    return S(e);
  }));
}

function S(t) {
  var n,
      r = v,
      i = null;
  (n = t ? g[t.nodeName.toLowerCase()] : g)[r.verticalViewportSegments] && (i = n[r.verticalViewportSegments][r.horizontalViewportSegments]);
  var o,
      a = n[0][0] ? n[0][0] : null;

  if (i) {
    var s = window.visualViewport.segments,
        l = !1;
    s.length > 1 && (l = !(s[0].height < window.innerHeight));

    for (var c = 0, h = Object.entries(s); c < h.length; c++) for (var u = h[c], m = u[0], d = 0, f = Object.entries(u[1]); d < f.length; d++) {
      var w = f[d],
          p = w[0];
      o = w[1] + "px", i = i.replace(new RegExp("env\\(\\s*" + (l ? "viewport-segment-" + p + " " + m + " 0" : "viewport-segment-" + p + " 0 " + m) + "\\s*\\)", "gi"), o);
    }

    var S = "__foldables_sheet__",
        y = function (t, n) {
      for (var r, i = function (t, n) {
        var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (r) return (r = r.call(t)).next.bind(r);

        if (Array.isArray(t) || (r = function (t, n) {
          if (t) {
            if ("string" == typeof t) return e(t, n);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? e(t, n) : void 0;
          }
        }(t))) {
          r && (t = r);
          var i = 0;
          return function () {
            return i >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[i++]
            };
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }(t.querySelectorAll("." + S)); !(r = i()).done;) r.value.remove();

      var o = document.createElement("style");
      o.className = S, o.textContent = n, t === document ? document.head.appendChild(o) : t.appendChild(o);
    };

    if (t) {
      var b = t.shadowRoot;
      "adoptedStyleSheets" in b && b.adoptedStyleSheets.length > 0 ? b.adoptedStyleSheets[0].replace(a + i) : y(b, i);
    } else y(document, i);
  }
}

export { w as adjustCSS, p as observe };
