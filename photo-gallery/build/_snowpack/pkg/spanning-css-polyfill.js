function e(e, n) {
  (null == n || n > e.length) && (n = e.length);

  for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];

  return r;
}

var n = function () {
  try {
    var e = function () {
      if (!r) return r = !0, Promise.resolve(Promise.resolve(!1)).then(function (e) {
        r = e, window[t].dispatchEvent(new Event("change"));
      });
    }();

    return Promise.resolve(e && e.then ? e.then(function () {}) : void 0);
  } catch (e) {
    return Promise.reject(e);
  }
},
    t = "__foldables__",
    r = !1,
    i = function () {
  function e() {
    var e = this;
    if (void 0 !== window[t]) return window[t];
    var r = document.createDocumentFragment();
    this.addEventListener = r.addEventListener.bind(r), this.removeEventListener = r.removeEventListener.bind(r), this.dispatchEvent = function (n) {
      if ("change" === n.type) {
        var t = "on" + n.type;
        return "function" == typeof e[t] && e[t](n), r.dispatchEvent(n);
      }
    }, window.addEventListener("message", function (n) {
      "update" === n.data.action && Object.assign(e, n.data.value);
    }), window.addEventListener("resize", function () {
      return function (e, n) {
        var t;
        return function () {
          var n = arguments,
              r = this;
          clearTimeout(t), t = setTimeout(function () {
            return e.apply(r, n);
          }, 200);
        };
      }(n());
    });
  }

  var r;
  return e.prototype.getSegments = function () {
    if ("none" === this.screenSpanning) return [{
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }];

    if ("single-fold-horizontal" === this.screenSpanning) {
      var e = (window.innerHeight - this.browserShellSize) / 2,
          n = window.innerWidth;
      return [{
        top: 0,
        left: 0,
        width: n,
        height: e - this.foldSize / 2
      }, {
        top: e - this.foldSize / 2,
        height: this.foldSize,
        left: 0,
        width: n
      }, {
        top: e + this.foldSize / 2,
        left: 0,
        width: n,
        height: e - this.foldSize / 2
      }];
    }

    if ("single-fold-vertical" === this.screenSpanning) {
      var t = window.innerWidth / 2 - this.foldSize / 2,
          r = window.innerHeight;
      return [{
        top: 0,
        left: 0,
        width: t,
        height: r
      }, {
        top: 0,
        height: r,
        left: t,
        width: this.foldSize
      }, {
        top: 0,
        left: window.innerWidth / 2 + this.foldSize / 2,
        width: t,
        height: r
      }];
    }
  }, (r = [{
    key: "screenSpanning",
    get: function () {
      return sessionStorage.getItem(t + "-spanning") || "none";
    },
    set: function (e) {
      if (!["none", "single-fold-horizontal", "single-fold-vertical"].includes(e)) throw new TypeError(e);
      sessionStorage.setItem(t + "-spanning", e), n();
    }
  }, {
    key: "foldSize",
    get: function () {
      return +sessionStorage.getItem(t + "-fold-size") || 0;
    },
    set: function (e) {
      if (!(Number(e) >= 0)) throw new TypeError(e);
      sessionStorage.setItem(t + "-fold-size", e), n();
    }
  }, {
    key: "browserShellSize",
    get: function () {
      return +sessionStorage.getItem(t + "-browser-shell-size") || 0;
    },
    set: function (e) {
      if (!(Number(e) >= 0)) throw new TypeError(e);
      sessionStorage.setItem(t + "-browser-shell-size", e), n();
    }
  }]) && function (e, n) {
    for (var t = 0; t < n.length; t++) {
      var r = n[t];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }(e.prototype, r), e;
}();

window[t] = new i(), void 0 === window.getWindowSegments && (window.getWindowSegments = function () {
  var e = window[t].getSegments();
  return 1 === e.length ? e : [e[0], e[2]];
});
var o = /\((.*?)\)/gi,
    a = /@media[^\(]+/gi;

function s(e, n) {
  return e.replace(new RegExp("(\\s*)(@media.*?\\bscreen-spanning\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}", "gi"), n);
}

function l(e) {
  var n,
      t = function (e) {
    var n,
        t = new RegExp("(\\s*)(@media.*?\\bscreen-spanning\\b[^{]+)\\{([\\s\\S]+?\\})(\\s*)\\}", "gi");
    if ("function" == typeof e.matchAll) n = Array.from(e.matchAll(t));else {
      for (n = []; n[n.length] = t.exec(e););

      n.length--;
    }
    return n;
  }(e),
      r = ((n = {})["single-fold-horizontal"] = "", n["single-fold-vertical"] = "", n.none = "", n);

  return t.forEach(function (e) {
    var n = e[1],
        t = e[2],
        i = e[3],
        s = e[4],
        l = "none";
    t.indexOf("single-fold-horizontal") > -1 && (l = "single-fold-horizontal"), t.indexOf("single-fold-vertical") > -1 && (l = "single-fold-vertical");
    var d = t.match(a) || [],
        c = t.match(o) || [];
    c = c.filter(function (e) {
      return !e.includes("screen-spanning");
    }).join(" and "), r[l] += "" + n + d + c + "{" + i + s + "}";
  }), r;
}

var d = window.matchMedia("(screen-spanning: single-fold-horizontal)").matches || window.matchMedia("(screen-spanning: single-fold-vertical)").matches || window.matchMedia("(screen-spanning: none)").matches || !1;
console.info("CSS Spanning Media Queries are supported? " + d);
var c,
    f = new i();

if (!d) {
  var h = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));
  (c = h, Promise.all(c.map(function (e) {
    return e.href ? fetch(e.href).then(function (e) {
      return e.text();
    }) : e.textContent;
  }))).then(function (e) {
    var n = new DocumentFragment();
    e.forEach(function (e, t) {
      for (var r = s(e, ""), i = l(e), o = h[t].href || "inline", a = 0, d = Object.entries(i); a < d.length; a++) {
        var c = d[a];
        u[c[0]] += "/* origin: " + o + " */" + c[1];
      }

      var f = document.createElement("style");
      f.setAttribute("data-css-origin", o), f.textContent = r, n.appendChild(f);
    }), h.forEach(function (e) {
      return null != e.parentElement && e.parentElement.removeChild(e);
    }), document.head.appendChild(n), v();
  });
}

var u = {
  "single-fold-horizontal": "",
  "single-fold-vertical": "",
  none: ""
};

function g(e, n) {
  if (d) return e;
  var t = s(e, ""),
      r = l(e);
  n && (u[n] = {
    "single-fold-horizontal": "",
    "single-fold-vertical": "",
    none: ""
  });

  for (var i = n ? u[n] : u, o = n ? "" : "/* origin: inline */", a = 0, c = Object.entries(r); a < c.length; a++) {
    var f = c[a];
    i[f[0]] += "" + o + f[1];
  }

  return i["non-spanning"] = t, t;
}

function v(e) {
  d || (p(e), f.addEventListener("change", function () {
    return p(e);
  }));
}

function p(n) {
  for (var t = f, r = n ? u[n.nodeName.toLowerCase()][t.screenSpanning] : u[t.screenSpanning], i = n ? u[n.nodeName.toLowerCase()]["non-spanning"] : null, o = f.getSegments(), a = 0, s = Object.entries(1 === o.length ? {} : o[1]); a < s.length; a++) {
    var l = s[a];
    d = l[1] + "px", r = r.replace(new RegExp("env\\(\\s*fold-" + l[0] + "\\s*\\)", "gi"), d);
  }

  var d,
      c = "__foldables_sheet__",
      h = function (n, t) {
    for (var r, i = function (n, t) {
      var r = "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
      if (r) return (r = r.call(n)).next.bind(r);

      if (Array.isArray(n) || (r = function (n, t) {
        if (n) {
          if ("string" == typeof n) return e(n, t);
          var r = Object.prototype.toString.call(n).slice(8, -1);
          return "Object" === r && n.constructor && (r = n.constructor.name), "Map" === r || "Set" === r ? Array.from(n) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? e(n, t) : void 0;
        }
      }(n))) {
        r && (n = r);
        var i = 0;
        return function () {
          return i >= n.length ? {
            done: !0
          } : {
            done: !1,
            value: n[i++]
          };
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }(n.querySelectorAll("." + c)); !(r = i()).done;) r.value.remove();

    var o = document.createElement("style");
    o.className = c, o.textContent = t, n === document ? document.head.appendChild(o) : n.appendChild(o);
  };

  if (n) {
    var g = n.shadowRoot;
    "adoptedStyleSheets" in g && g.adoptedStyleSheets.length > 0 ? g.adoptedStyleSheets[0].replace(i + r) : h(g, r);
  } else h(document, r);
}

export { g as adjustCSS, v as observe };
