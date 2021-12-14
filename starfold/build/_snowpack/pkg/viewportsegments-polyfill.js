var e = function () {
  try {
    var e = function () {
      if (!i) return i = !0, Promise.resolve(Promise.resolve(!1)).then(function (e) {
        i = e, window[t].dispatchEvent(new Event("change"));
      });
    }();

    return Promise.resolve(e && e.then ? e.then(function () {}) : void 0);
  } catch (e) {
    return Promise.reject(e);
  }
},
    t = "__foldables__",
    i = !1;

function n(e, t) {
  var i;
  return function () {
    var n = arguments,
        r = this;
    clearTimeout(i), i = setTimeout(function () {
      return e.apply(r, n);
    }, t);
  };
}

var r = /*#__PURE__*/function () {
  function i() {
    var i = this;
    if (void 0 !== window[t]) return window[t];
    var r = document.createDocumentFragment();
    this.addEventListener = r.addEventListener.bind(r), this.removeEventListener = r.removeEventListener.bind(r), this.dispatchEvent = function (e) {
      if ("change" === e.type) {
        var t = "on" + e.type;
        return "function" == typeof i[t] && i[t](e), r.dispatchEvent(e);
      }
    }, window.addEventListener("message", function (e) {
      "update" === e.data.action && Object.assign(i, e.data.value);
    }), window.addEventListener("resize", function () {
      return n(e(), 200);
    });
  }

  var r,
      o = i.prototype;
  return o.getSegments = function () {
    if (1 === this.verticalViewportSegments && 1 === this.horizontalViewportSegments) return [{
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }];
    var e = [];
    if (this.verticalViewportSegments > 1) for (var t = this.verticalViewportSegments - 1, i = window.innerHeight - this.browserShellSize, n = 0, r = window.innerWidth, o = i / this.verticalViewportSegments - this.foldSize * t / this.verticalViewportSegments, s = 0; s < this.verticalViewportSegments + t; ++s) e[s] = s % 2 == 0 ? {
      top: n,
      left: 0,
      bottom: n + o,
      right: r,
      width: r,
      height: o
    } : {
      top: n,
      left: 0,
      right: r,
      bottom: n + this.foldSize,
      width: r,
      height: this.foldSize
    }, n += e[s].height;
    if (this.horizontalViewportSegments > 1) for (var h = this.horizontalViewportSegments - 1, a = window.innerWidth / this.horizontalViewportSegments - this.foldSize * h / this.horizontalViewportSegments, w = window.innerHeight, g = 0, l = 0; l < this.horizontalViewportSegments + h; ++l) e[l] = l % 2 == 0 ? {
      top: 0,
      left: g,
      right: g + a,
      bottom: w,
      width: a,
      height: w
    } : {
      top: 0,
      left: g,
      right: g + this.foldSize,
      bottom: w,
      width: this.foldSize,
      height: w
    }, g += e[l].width;
    return e;
  }, o.randomizeSegmentsConfiguration = function (e) {
    var t = Math.random() < .5,
        i = Math.round(Math.random() * (e - 1) + 1);
    t ? (this.verticalViewportSegments = i, this.horizontalViewportSegments = 1) : (this.horizontalViewportSegments = i, this.verticalViewportSegments = 1);
  }, (r = [{
    key: "horizontalViewportSegments",
    get: function () {
      return +sessionStorage.getItem(t + "-horizontal-viewport-segments") || 1;
    },
    set: function (i) {
      if (isNaN(i)) throw new TypeError(i);
      sessionStorage.setItem(t + "-horizontal-viewport-segments", i), e();
    }
  }, {
    key: "verticalViewportSegments",
    get: function () {
      return +sessionStorage.getItem(t + "-vertical-viewport-segments") || 1;
    },
    set: function (i) {
      if (isNaN(i)) throw new TypeError(i);
      sessionStorage.setItem(t + "-vertical-viewport-segments", i), e();
    }
  }, {
    key: "foldSize",
    get: function () {
      return +sessionStorage.getItem(t + "-fold-size") || 0;
    },
    set: function (i) {
      if (!(Number(i) >= 0)) throw new TypeError(i);
      sessionStorage.setItem(t + "-fold-size", i), e();
    }
  }, {
    key: "browserShellSize",
    get: function () {
      return +sessionStorage.getItem(t + "-browser-shell-size") || 0;
    },
    set: function (i) {
      if (!(Number(i) >= 0)) throw new TypeError(i);
      sessionStorage.setItem(t + "-browser-shell-size", i), e();
    }
  }]) && function (e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }(i.prototype, r), i;
}();

window[t] = new r(), void 0 === window.visualViewport.segments && (window.visualViewport.segments = function () {
  var e = window[t].getSegments();
  return 1 === e.length ? e : e.filter(function (e, t) {
    return t % 2 == 0;
  });
});

export { r as FoldablesFeature };
