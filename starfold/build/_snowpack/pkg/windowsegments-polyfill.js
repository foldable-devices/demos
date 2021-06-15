var e = function () {
  try {
    var e = function () {
      if (!n) return n = !0, Promise.resolve(Promise.resolve(!1)).then(function (e) {
        n = e, window[t].dispatchEvent(new Event("change"));
      });
    }();

    return Promise.resolve(e && e.then ? e.then(function () {}) : void 0);
  } catch (e) {
    return Promise.reject(e);
  }
},
    t = "__foldables__",
    n = !1;

function i(e, t) {
  var n;
  return function () {
    var i = arguments,
        r = this;
    clearTimeout(n), n = setTimeout(function () {
      return e.apply(r, i);
    }, t);
  };
}

var r = function () {
  function n() {
    var n = this;
    if (void 0 !== window[t]) return window[t];
    var r = document.createDocumentFragment();
    this.addEventListener = r.addEventListener.bind(r), this.removeEventListener = r.removeEventListener.bind(r), this.dispatchEvent = function (e) {
      if ("change" === e.type) {
        var t = "on" + e.type;
        return "function" == typeof n[t] && n[t](e), r.dispatchEvent(e);
      }
    }, window.addEventListener("message", function (e) {
      "update" === e.data.action && Object.assign(n, e.data.value);
    }), window.addEventListener("resize", function () {
      return i(e(), 200);
    });
  }

  var r;
  return n.prototype.getSegments = function () {
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
      var n = window.innerWidth / 2 - this.foldSize / 2,
          i = window.innerHeight;
      return [{
        top: 0,
        left: 0,
        width: n,
        height: i
      }, {
        top: 0,
        height: i,
        left: n,
        width: this.foldSize
      }, {
        top: 0,
        left: window.innerWidth / 2 + this.foldSize / 2,
        width: n,
        height: i
      }];
    }
  }, (r = [{
    key: "screenSpanning",
    get: function () {
      return sessionStorage.getItem(t + "-spanning") || "none";
    },
    set: function (n) {
      if (!["none", "single-fold-horizontal", "single-fold-vertical"].includes(n)) throw new TypeError(n);
      sessionStorage.setItem(t + "-spanning", n), e();
    }
  }, {
    key: "foldSize",
    get: function () {
      return +sessionStorage.getItem(t + "-fold-size") || 0;
    },
    set: function (n) {
      if (!(Number(n) >= 0)) throw new TypeError(n);
      sessionStorage.setItem(t + "-fold-size", n), e();
    }
  }, {
    key: "browserShellSize",
    get: function () {
      return +sessionStorage.getItem(t + "-browser-shell-size") || 0;
    },
    set: function (n) {
      if (!(Number(n) >= 0)) throw new TypeError(n);
      sessionStorage.setItem(t + "-browser-shell-size", n), e();
    }
  }]) && function (e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }(n.prototype, r), n;
}();

window[t] = new r(), void 0 === window.getWindowSegments && (window.getWindowSegments = function () {
  var e = window[t].getSegments();
  return 1 === e.length ? e : [e[0], e[2]];
});

export { r as FoldablesFeature };
