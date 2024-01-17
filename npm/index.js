(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(":root{--cursor-general: url();--cursor-pointer: url();--cursor-text: url()}._mainContainer_hfgmu_9{width:100%}._general_hfgmu_13{cursor:var(--cursor-general),default}._pointer_hfgmu_17{cursor:var(--cursor-pointer),default}._text_hfgmu_21{cursor:var(--cursor-text),default}")),document.head.appendChild(r)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var fr = Object.defineProperty;
var dr = (v, i, l) => i in v ? fr(v, i, { enumerable: !0, configurable: !0, writable: !0, value: l }) : v[i] = l;
var V = (v, i, l) => (dr(v, typeof i != "symbol" ? i + "" : i, l), l);
import Oe, { useRef as vr, useState as pr, useEffect as Q } from "react";
var ee = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function gr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var v = Oe, i = Symbol.for("react.element"), l = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), E = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), re = Symbol.iterator, ke = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var O = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ne("error", e, t);
      }
    }
    function Ne(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, Ae = !1, Fe = !1, $e = !1, Le = !1, te;
    te = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === S || Le || e === R || e === b || e === y || $e || e === $ || De || Ae || Fe || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === C || e.$$typeof === _ || e.$$typeof === E || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case l:
          return "Portal";
        case S:
          return "Profiler";
        case R:
          return "StrictMode";
        case b:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return ne(r) + ".Consumer";
          case _:
            var t = e;
            return ne(t._context) + ".Provider";
          case d:
            return Ye(e, e.render, "ForwardRef");
          case C:
            var n = e.displayName || null;
            return n !== null ? n : x(e.type) || "Memo";
          case w: {
            var s = e, u = s._payload, o = s._init;
            try {
              return x(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, N = 0, ae, oe, se, ie, ue, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function We() {
      {
        if (N === 0) {
          ae = console.log, oe = console.info, se = console.warn, ie = console.error, ue = console.group, le = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function Me() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ae
            }),
            info: P({}, e, {
              value: oe
            }),
            warn: P({}, e, {
              value: se
            }),
            error: P({}, e, {
              value: ie
            }),
            group: P({}, e, {
              value: ue
            }),
            groupCollapsed: P({}, e, {
              value: le
            }),
            groupEnd: P({}, e, {
              value: ce
            })
          });
        }
        N < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = O.ReactCurrentDispatcher, G;
    function L(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var J = !1, I;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      I = new Ve();
    }
    function de(e, r) {
      if (!e || J)
        return "";
      {
        var t = I.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, We();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (T) {
              n = T;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (T) {
              n = T;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            n = T;
          }
          e();
        }
      } catch (T) {
        if (T && n && typeof T.stack == "string") {
          for (var a = T.stack.split(`
`), g = n.stack.split(`
`), c = a.length - 1, f = g.length - 1; c >= 1 && f >= 0 && a[c] !== g[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== g[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== g[f]) {
                    var m = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && I.set(e, m), m;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        J = !1, q.current = u, Me(), Error.prepareStackTrace = s;
      }
      var j = e ? e.displayName || e.name : "", Te = j ? L(j) : "";
      return typeof e == "function" && I.set(e, Te), Te;
    }
    function Ue(e, r, t) {
      return de(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Be(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case b:
          return L("Suspense");
        case y:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ue(e.render);
          case C:
            return Y(e.type, r, t);
          case w: {
            var n = e, s = n._payload, u = n._init;
            try {
              return Y(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ve = {}, pe = O.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, s) {
      {
        var u = Function.call.bind(W);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (M(s), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, M(s), p("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Ge = Array.isArray;
    function z(e) {
      return Ge(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function he(e) {
      if (ze(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ge(e);
    }
    var D = O.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, me, H;
    H = {};
    function Ke(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = x(D.current.type);
        H[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(D.current.type), e.ref), H[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          ye || (ye = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          me || (me = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, s, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, s) {
      {
        var u, o = {}, a = null, g = null;
        t !== void 0 && (he(t), a = "" + t), Xe(r) && (he(r.key), a = "" + r.key), Ke(r) && (g = r.ref, Ze(r, s));
        for (u in r)
          W.call(r, u) && !He.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            o[u] === void 0 && (o[u] = c[u]);
        }
        if (a || g) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, f), g && er(o, f);
        }
        return rr(e, a, g, s, n, D.current, o);
      }
    }
    var K = O.ReactCurrentOwner, _e = O.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Ee() {
      {
        if (K.current) {
          var e = x(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function ar(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + x(e._owner.type) + "."), k(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Re(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = je(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), o; !(o = u.next()).done; )
              Z(o.value) && Re(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = x(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var s = x(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function xe(e, r, t, n, s, u) {
      {
        var o = Ie(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = nr(s);
          g ? a += g : a += Ee();
          var c;
          e === null ? c = "null" : z(e) ? c = "array" : e !== void 0 && e.$$typeof === i ? (c = "<" + (x(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = tr(e, r, t, s, u);
        if (f == null)
          return f;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (z(m)) {
                for (var j = 0; j < m.length; j++)
                  Ce(m[j], e);
                Object.freeze && Object.freeze(m);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(m, e);
        }
        return e === h ? sr(f) : or(f), f;
      }
    }
    function ir(e, r, t) {
      return xe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return xe(e, r, t, !1);
    }
    var lr = ur, cr = ir;
    A.Fragment = h, A.jsx = lr, A.jsxs = cr;
  }()), A;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function hr() {
  if (we)
    return F;
  we = 1;
  var v = Oe, i = Symbol.for("react.element"), l = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, R = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(E, d, b) {
    var y, C = {}, w = null, $ = null;
    b !== void 0 && (w = "" + b), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && ($ = d.ref);
    for (y in d)
      h.call(d, y) && !S.hasOwnProperty(y) && (C[y] = d[y]);
    if (E && E.defaultProps)
      for (y in d = E.defaultProps, d)
        C[y] === void 0 && (C[y] = d[y]);
    return { $$typeof: i, type: E, key: w, ref: $, props: C, _owner: R.current };
  }
  return F.Fragment = l, F.jsx = _, F.jsxs = _, F;
}
process.env.NODE_ENV === "production" ? ee.exports = hr() : ee.exports = gr();
var yr = ee.exports;
const mr = "_mainContainer_hfgmu_9", _r = "_general_hfgmu_13", Er = "_pointer_hfgmu_17", br = "_text_hfgmu_21", B = {
  mainContainer: mr,
  general: _r,
  pointer: Er,
  text: br
}, U = {
  general: B.general,
  pointer: B.pointer,
  text: B.text
};
class Rr {
  constructor(i) {
    V(this, "container");
    this.container = i;
  }
  general() {
    this.container.classList.add(`${U.general}`), this.container.querySelectorAll("button").forEach((i) => {
      i instanceof HTMLButtonElement && i.classList.add(`${U.general}`);
    });
  }
  pointer() {
    this.container.querySelectorAll("a").forEach((i) => {
      i.classList.add(`${U.pointer}`);
    });
  }
  text() {
    this.container.querySelectorAll("input, textarea").forEach((l) => {
      l.classList.add(`${U.text}`);
    });
  }
  all() {
    this.general(), this.pointer(), this.text();
  }
}
async function Cr(v) {
  const i = {
    general: "",
    pointer: "",
    text: ""
  };
  for (const [l, h] of Object.entries(v)) {
    const R = await xr(h);
    i[l] = R;
  }
  return i;
}
const xr = async (v) => (await import(v)).default, Tr = {
  general: "./assets/blue/NeonCursor04-Blue.cur",
  pointer: "./assets/blue/NeonLinkSelect04-Blue.cur",
  text: "./assets/blue/NeonTextSelect04-Blue.cur"
}, Sr = {
  general: "./assets/yellow/NeonCursor07-Yellow.cur",
  pointer: "./assets/yellow/NeonLinkSelect07-Yellow.cur",
  text: "./assets/yellow/NeonTextSelect07-Yellow.cur"
}, wr = {
  general: "./assets/red/NeonCursor01-Red.cur",
  pointer: "./assets/red/NeonLinkSelect01-Red.cur",
  text: "./assets/red/NeonTextSelect01-Red.cur"
}, Pr = {
  general: "./assets/purple/NeonCursor03-Purple.cur",
  pointer: "./assets/purple/NeonLinkSelect03-Purple.cur",
  text: "./assets/purple/NeonTextSelect03-Purple.cur"
}, Or = {
  general: "./assets/pink/NeonCursor02-Pink.cur",
  pointer: "./assets/pink/NeonLinkSelect02-Pink.cur",
  text: "./assets/pink/NeonTextSelect02-Pink.cur"
}, kr = {
  general: "./assets/orange/NeonCursor08-Orange.cur",
  pointer: "./assets/orange/NeonLinkSelect08-Orange.cur",
  text: "./assets/orange/NeonTextSelect08-Orange.cur"
}, jr = {
  general: "./assets/green/NeonCursor06-Green.cur",
  pointer: "./assets/green/NeonLinkSelect06-Green.cur",
  text: "./assets/green/NeonTextSelect06-Green.cur"
}, Nr = {
  general: "./assets/cyan/NeonCursor05-Cyan.cur",
  pointer: "./assets/cyan/NeonLinkSelect05-Cyan.cur",
  text: "./assets/cyan/NeonTextSelect05-Cyan.cur"
}, Pe = { blue: Tr, yellow: Sr, red: wr, purple: Pr, pink: Or, orange: kr, green: jr, cyan: Nr };
class Dr {
  constructor(i, l) {
    V(this, "cursors");
    V(this, "container");
    if (!l || !(l instanceof HTMLDivElement))
      throw new Error("Invalid container provided.");
    this.cursors = i, this.container = l;
  }
  general() {
    this.cursors.general && this.container.style.setProperty(
      "--cursor-general",
      `url(${this.cursors.general})`
    );
  }
  pointer() {
    this.cursors.pointer && this.container.style.setProperty(
      "--cursor-pointer",
      `url(${this.cursors.pointer})`
    );
  }
  text() {
    this.cursors.text && this.container.style.setProperty(
      "--cursor-text",
      `url(${this.cursors.text})`
    );
  }
  all() {
    this.general(), this.pointer(), this.text();
  }
}
const $r = ({ ...v }) => {
  const { children: i, type: l, customCursors: h, className: R, style: S } = v, _ = vr(null), [E, d] = pr();
  return Q(() => {
    E && Cr(E).then((b) => {
      _.current && new Dr(b, _.current).all();
    });
  }, [E]), Q(() => {
    if (!h && l) {
      const b = Pe[l];
      d(b);
    } else
      d(h || Pe.blue);
  }, [h, l]), Q(() => {
    _.current && new Rr(_.current).all();
  }, [i]), /* @__PURE__ */ yr.jsx(
    "div",
    {
      ref: _,
      className: `${B.mainContainer}  ${R || ""}`,
      style: S && S,
      children: i
    }
  );
};
export {
  $r as default
};
