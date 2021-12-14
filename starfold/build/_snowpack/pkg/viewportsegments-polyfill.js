var e = function () {
  try {
    window[t].updateSegments();

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
  return o.updateSegments = function () {
    1 === this.verticalViewportSegments && 1 === this.horizontalViewportSegments && (window.visualViewport.segments = null);
    var e = [];
    if (this.verticalViewportSegments > 1) for (var t = window.innerHeight - this.browserShellSize, i = 0, n = window.innerWidth, r = t / this.verticalViewportSegments - this.foldSize * (this.verticalViewportSegments - 1) / this.verticalViewportSegments, o = 0; o < this.verticalViewportSegments; ++o) e[o] = {
      top: i,
      left: 0,
      bottom: i + r,
      right: n,
      width: n,
      height: r
    }, i += e[o].height, i += this.foldSize;
    if (this.horizontalViewportSegments > 1) for (var s = window.innerWidth / this.horizontalViewportSegments - this.foldSize * (this.horizontalViewportSegments - 1) / this.horizontalViewportSegments, a = window.innerHeight, h = 0, w = 0; w < this.horizontalViewportSegments; ++w) e[w] = {
      top: 0,
      left: h,
      right: h + s,
      bottom: a,
      width: s,
      height: a
    }, h += e[w].width, h += this.foldSize;
    window.visualViewport.segments = e;
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

window[t] = new r(), void 0 === window.visualViewport.segments && window[t].updateSegments();

export { r as FoldablesFeature };
