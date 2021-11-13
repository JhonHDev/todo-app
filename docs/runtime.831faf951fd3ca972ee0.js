(() => {
  'use strict';
  var r = {},
    t = {};
  function e(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { exports: {} });
    return r[n](o, o.exports, e), o.exports;
  }
  (e.m = r),
    (e.x = (r) => {}),
    (e.n = (r) => {
      var t = r && r.__esModule ? () => r.default : () => r;
      return e.d(t, { a: t }), t;
    }),
    (e.d = (r, t) => {
      for (var n in t)
        e.o(t, n) &&
          !e.o(r, n) &&
          Object.defineProperty(r, n, { enumerable: !0, get: t[n] });
    }),
    (e.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (r) {
        if ('object' == typeof window) return window;
      }
    })()),
    (e.o = (r, t) => Object.prototype.hasOwnProperty.call(r, t)),
    (() => {
      var r;
      e.g.importScripts && (r = e.g.location + '');
      var t = e.g.document;
      if (!r && t && (t.currentScript && (r = t.currentScript.src), !r)) {
        var n = t.getElementsByTagName('script');
        n.length && (r = n[n.length - 1].src);
      }
      if (!r)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (r = r
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (e.p = r);
    })(),
    (() => {
      var r = { 666: 0 },
        t = [],
        n = (r) => {},
        o = (o, a) => {
          for (var i, p, [c, u, l, s] = a, h = 0, f = []; h < c.length; h++)
            (p = c[h]), e.o(r, p) && r[p] && f.push(r[p][0]), (r[p] = 0);
          for (i in u) e.o(u, i) && (e.m[i] = u[i]);
          for (l && l(e), o && o(a); f.length; ) f.shift()();
          return s && t.push.apply(t, s), n();
        },
        a = (self.webpackChunktodo_app = self.webpackChunktodo_app || []);
      function i() {
        for (var n, o = 0; o < t.length; o++) {
          for (var a = t[o], i = !0, p = 1; p < a.length; p++) {
            var c = a[p];
            0 !== r[c] && (i = !1);
          }
          i && (t.splice(o--, 1), (n = e((e.s = a[0]))));
        }
        return 0 === t.length && (e.x(), (e.x = (r) => {})), n;
      }
      a.forEach(o.bind(null, 0)), (a.push = o.bind(null, a.push.bind(a)));
      var p = e.x;
      e.x = () => ((e.x = p || ((r) => {})), (n = i)());
    })(),
    e.x();
})();
//# sourceMappingURL=runtime.831faf951fd3ca972ee0.js.map
