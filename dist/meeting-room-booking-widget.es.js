var cp = Object.defineProperty;
var dp = (e, t, n) => t in e ? cp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var to = (e, t, n) => dp(e, typeof t != "symbol" ? t + "" : t, n);
import * as v from "react";
import M, { useState as Q, useLayoutEffect as pi, useEffect as Rt, forwardRef as hi, createElement as Ta, createContext as Bn, useContext as In, useRef as fp } from "react";
import * as Wr from "react-dom";
import Bl from "react-dom";
function pp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Il = { exports: {} }, Ne = Il.exports = {}, yt, bt;
function Ma() {
  throw new Error("setTimeout has not been defined");
}
function Ba() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? yt = setTimeout : yt = Ma;
  } catch {
    yt = Ma;
  }
  try {
    typeof clearTimeout == "function" ? bt = clearTimeout : bt = Ba;
  } catch {
    bt = Ba;
  }
})();
function Ll(e) {
  if (yt === setTimeout)
    return setTimeout(e, 0);
  if ((yt === Ma || !yt) && setTimeout)
    return yt = setTimeout, setTimeout(e, 0);
  try {
    return yt(e, 0);
  } catch {
    try {
      return yt.call(null, e, 0);
    } catch {
      return yt.call(this, e, 0);
    }
  }
}
function hp(e) {
  if (bt === clearTimeout)
    return clearTimeout(e);
  if ((bt === Ba || !bt) && clearTimeout)
    return bt = clearTimeout, clearTimeout(e);
  try {
    return bt(e);
  } catch {
    try {
      return bt.call(null, e);
    } catch {
      return bt.call(this, e);
    }
  }
}
var Ot = [], nr = !1, Nn, ho = -1;
function mp() {
  !nr || !Nn || (nr = !1, Nn.length ? Ot = Nn.concat(Ot) : ho = -1, Ot.length && Wl());
}
function Wl() {
  if (!nr) {
    var e = Ll(mp);
    nr = !0;
    for (var t = Ot.length; t; ) {
      for (Nn = Ot, Ot = []; ++ho < t; )
        Nn && Nn[ho].run();
      ho = -1, t = Ot.length;
    }
    Nn = null, nr = !1, hp(e);
  }
}
Ne.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      t[n - 1] = arguments[n];
  Ot.push(new $l(e, t)), Ot.length === 1 && !nr && Ll(Wl);
};
function $l(e, t) {
  this.fun = e, this.array = t;
}
$l.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Ne.title = "browser";
Ne.browser = !0;
Ne.env = {};
Ne.argv = [];
Ne.version = "";
Ne.versions = {};
function It() {
}
Ne.on = It;
Ne.addListener = It;
Ne.once = It;
Ne.off = It;
Ne.removeListener = It;
Ne.removeAllListeners = It;
Ne.emit = It;
Ne.prependListener = It;
Ne.prependOnceListener = It;
Ne.listeners = function(e) {
  return [];
};
Ne.binding = function(e) {
  throw new Error("process.binding is not supported");
};
Ne.cwd = function() {
  return "/";
};
Ne.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
Ne.umask = function() {
  return 0;
};
var gp = Il.exports;
const mi = /* @__PURE__ */ pp(gp);
var Ia = { exports: {} }, br = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ws;
function vp() {
  if (ws) return br;
  ws = 1;
  var e = M, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var d, p = {}, f = null, h = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (d in l) r.call(l, d) && !a.hasOwnProperty(d) && (p[d] = l[d]);
    if (s && s.defaultProps) for (d in l = s.defaultProps, l) p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: t, type: s, key: f, ref: h, props: p, _owner: o.current };
  }
  return br.Fragment = n, br.jsx = i, br.jsxs = i, br;
}
var wr = {}, xs;
function Dp() {
  return xs || (xs = 1, mi.env.NODE_ENV !== "production" && function() {
    var e = M, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function D(x) {
      if (x === null || typeof x != "object")
        return null;
      var A = m && x[m] || x[g];
      return typeof A == "function" ? A : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(x) {
      {
        for (var A = arguments.length, I = new Array(A > 1 ? A - 1 : 0), q = 1; q < A; q++)
          I[q - 1] = arguments[q];
        w("error", x, I);
      }
    }
    function w(x, A, I) {
      {
        var q = y.ReactDebugCurrentFrame, ce = q.getStackAddendum();
        ce !== "" && (A += "%s", I = I.concat([ce]));
        var he = I.map(function(ie) {
          return String(ie);
        });
        he.unshift("Warning: " + A), Function.prototype.apply.call(console[x], console, he);
      }
    }
    var C = !1, E = !1, F = !1, S = !1, P = !1, N;
    N = Symbol.for("react.module.reference");
    function k(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === r || x === a || P || x === o || x === c || x === d || S || x === h || C || E || F || typeof x == "object" && x !== null && (x.$$typeof === f || x.$$typeof === p || x.$$typeof === i || x.$$typeof === s || x.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === N || x.getModuleId !== void 0));
    }
    function L(x, A, I) {
      var q = x.displayName;
      if (q)
        return q;
      var ce = A.displayName || A.name || "";
      return ce !== "" ? I + "(" + ce + ")" : I;
    }
    function _(x) {
      return x.displayName || "Context";
    }
    function T(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case s:
            var A = x;
            return _(A) + ".Consumer";
          case i:
            var I = x;
            return _(I._context) + ".Provider";
          case l:
            return L(x, x.render, "ForwardRef");
          case p:
            var q = x.displayName || null;
            return q !== null ? q : T(x.type) || "Memo";
          case f: {
            var ce = x, he = ce._payload, ie = ce._init;
            try {
              return T(ie(he));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, W = 0, H, j, O, Y, ue, oe, ke;
    function ze() {
    }
    ze.__reactDisabledLog = !0;
    function Ae() {
      {
        if (W === 0) {
          H = console.log, j = console.info, O = console.warn, Y = console.error, ue = console.group, oe = console.groupCollapsed, ke = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        W++;
      }
    }
    function Be() {
      {
        if (W--, W === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, x, {
              value: H
            }),
            info: B({}, x, {
              value: j
            }),
            warn: B({}, x, {
              value: O
            }),
            error: B({}, x, {
              value: Y
            }),
            group: B({}, x, {
              value: ue
            }),
            groupCollapsed: B({}, x, {
              value: oe
            }),
            groupEnd: B({}, x, {
              value: ke
            })
          });
        }
        W < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Fe = y.ReactCurrentDispatcher, $;
    function Z(x, A, I) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (ce) {
            var q = ce.stack.trim().match(/\n( *(at )?)/);
            $ = q && q[1] || "";
          }
        return `
` + $ + x;
      }
    }
    var ge = !1, R;
    {
      var ae = typeof WeakMap == "function" ? WeakMap : Map;
      R = new ae();
    }
    function te(x, A) {
      if (!x || ge)
        return "";
      {
        var I = R.get(x);
        if (I !== void 0)
          return I;
      }
      var q;
      ge = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var he;
      he = Fe.current, Fe.current = null, Ae();
      try {
        if (A) {
          var ie = function() {
            throw Error();
          };
          if (Object.defineProperty(ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ie, []);
            } catch (qe) {
              q = qe;
            }
            Reflect.construct(x, [], ie);
          } else {
            try {
              ie.call();
            } catch (qe) {
              q = qe;
            }
            x.call(ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qe) {
            q = qe;
          }
          x();
        }
      } catch (qe) {
        if (qe && q && typeof qe.stack == "string") {
          for (var re = qe.stack.split(`
`), Ve = q.stack.split(`
`), Se = re.length - 1, Pe = Ve.length - 1; Se >= 1 && Pe >= 0 && re[Se] !== Ve[Pe]; )
            Pe--;
          for (; Se >= 1 && Pe >= 0; Se--, Pe--)
            if (re[Se] !== Ve[Pe]) {
              if (Se !== 1 || Pe !== 1)
                do
                  if (Se--, Pe--, Pe < 0 || re[Se] !== Ve[Pe]) {
                    var it = `
` + re[Se].replace(" at new ", " at ");
                    return x.displayName && it.includes("<anonymous>") && (it = it.replace("<anonymous>", x.displayName)), typeof x == "function" && R.set(x, it), it;
                  }
                while (Se >= 1 && Pe >= 0);
              break;
            }
        }
      } finally {
        ge = !1, Fe.current = he, Be(), Error.prepareStackTrace = ce;
      }
      var Un = x ? x.displayName || x.name : "", bn = Un ? Z(Un) : "";
      return typeof x == "function" && R.set(x, bn), bn;
    }
    function Oe(x, A, I) {
      return te(x, !1);
    }
    function Ie(x) {
      var A = x.prototype;
      return !!(A && A.isReactComponent);
    }
    function Re(x, A, I) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return te(x, Ie(x));
      if (typeof x == "string")
        return Z(x);
      switch (x) {
        case c:
          return Z("Suspense");
        case d:
          return Z("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case l:
            return Oe(x.render);
          case p:
            return Re(x.type, A, I);
          case f: {
            var q = x, ce = q._payload, he = q._init;
            try {
              return Re(he(ce), A, I);
            } catch {
            }
          }
        }
      return "";
    }
    var Le = Object.prototype.hasOwnProperty, rt = {}, ot = y.ReactDebugCurrentFrame;
    function Qe(x) {
      if (x) {
        var A = x._owner, I = Re(x.type, x._source, A ? A.type : null);
        ot.setExtraStackFrame(I);
      } else
        ot.setExtraStackFrame(null);
    }
    function Hn(x, A, I, q, ce) {
      {
        var he = Function.call.bind(Le);
        for (var ie in x)
          if (he(x, ie)) {
            var re = void 0;
            try {
              if (typeof x[ie] != "function") {
                var Ve = Error((q || "React class") + ": " + I + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ve.name = "Invariant Violation", Ve;
              }
              re = x[ie](A, ie, q, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Se) {
              re = Se;
            }
            re && !(re instanceof Error) && (Qe(ce), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", I, ie, typeof re), Qe(null)), re instanceof Error && !(re.message in rt) && (rt[re.message] = !0, Qe(ce), b("Failed %s type: %s", I, re.message), Qe(null));
          }
      }
    }
    var Dr = Array.isArray;
    function hn(x) {
      return Dr(x);
    }
    function vt(x) {
      {
        var A = typeof Symbol == "function" && Symbol.toStringTag, I = A && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return I;
      }
    }
    function yr(x) {
      try {
        return mn(x), !1;
      } catch {
        return !0;
      }
    }
    function mn(x) {
      return "" + x;
    }
    function Vn(x) {
      if (yr(x))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vt(x)), mn(x);
    }
    var Ue = y.ReactCurrentOwner, Yn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Gt, gn, at;
    at = {};
    function Xt(x) {
      if (Le.call(x, "ref")) {
        var A = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function vn(x) {
      if (Le.call(x, "key")) {
        var A = Object.getOwnPropertyDescriptor(x, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Dn(x, A) {
      if (typeof x.ref == "string" && Ue.current && A && Ue.current.stateNode !== A) {
        var I = T(Ue.current.type);
        at[I] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(Ue.current.type), x.ref), at[I] = !0);
      }
    }
    function V(x, A) {
      {
        var I = function() {
          Gt || (Gt = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        I.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function G(x, A) {
      {
        var I = function() {
          gn || (gn = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        I.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var fe = function(x, A, I, q, ce, he, ie) {
      var re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: A,
        ref: I,
        props: ie,
        // Record the component responsible for creating this element.
        _owner: he
      };
      return re._store = {}, Object.defineProperty(re._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(re, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.defineProperty(re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(re.props), Object.freeze(re)), re;
    };
    function X(x, A, I, q, ce) {
      {
        var he, ie = {}, re = null, Ve = null;
        I !== void 0 && (Vn(I), re = "" + I), vn(A) && (Vn(A.key), re = "" + A.key), Xt(A) && (Ve = A.ref, Dn(A, ce));
        for (he in A)
          Le.call(A, he) && !Yn.hasOwnProperty(he) && (ie[he] = A[he]);
        if (x && x.defaultProps) {
          var Se = x.defaultProps;
          for (he in Se)
            ie[he] === void 0 && (ie[he] = Se[he]);
        }
        if (re || Ve) {
          var Pe = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          re && V(ie, Pe), Ve && G(ie, Pe);
        }
        return fe(x, re, Ve, ce, q, Ue.current, ie);
      }
    }
    var pe = y.ReactCurrentOwner, ye = y.ReactDebugCurrentFrame;
    function Ee(x) {
      if (x) {
        var A = x._owner, I = Re(x.type, x._source, A ? A.type : null);
        ye.setExtraStackFrame(I);
      } else
        ye.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function ve(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function je() {
      {
        if (pe.current) {
          var x = T(pe.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function be(x) {
      return "";
    }
    var ut = {};
    function We(x) {
      {
        var A = je();
        if (!A) {
          var I = typeof x == "string" ? x : x.displayName || x.name;
          I && (A = `

Check the top-level render call using <` + I + ">.");
        }
        return A;
      }
    }
    function Kt(x, A) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var I = We(A);
        if (ut[I])
          return;
        ut[I] = !0;
        var q = "";
        x && x._owner && x._owner !== pe.current && (q = " It was passed a child from " + T(x._owner.type) + "."), Ee(x), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, q), Ee(null);
      }
    }
    function zn(x, A) {
      {
        if (typeof x != "object")
          return;
        if (hn(x))
          for (var I = 0; I < x.length; I++) {
            var q = x[I];
            ve(q) && Kt(q, A);
          }
        else if (ve(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var ce = D(x);
          if (typeof ce == "function" && ce !== x.entries)
            for (var he = ce.call(x), ie; !(ie = he.next()).done; )
              ve(ie.value) && Kt(ie.value, A);
        }
      }
    }
    function oa(x) {
      {
        var A = x.type;
        if (A == null || typeof A == "string")
          return;
        var I;
        if (typeof A == "function")
          I = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === p))
          I = A.propTypes;
        else
          return;
        if (I) {
          var q = T(A);
          Hn(I, x.props, "prop", q, x);
        } else if (A.PropTypes !== void 0 && !z) {
          z = !0;
          var ce = T(A);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function aa(x) {
      {
        for (var A = Object.keys(x.props), I = 0; I < A.length; I++) {
          var q = A[I];
          if (q !== "children" && q !== "key") {
            Ee(x), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Ee(null);
            break;
          }
        }
        x.ref !== null && (Ee(x), b("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    var Zr = {};
    function eo(x, A, I, q, ce, he) {
      {
        var ie = k(x);
        if (!ie) {
          var re = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ve = be();
          Ve ? re += Ve : re += je();
          var Se;
          x === null ? Se = "null" : hn(x) ? Se = "array" : x !== void 0 && x.$$typeof === t ? (Se = "<" + (T(x.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof x, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, re);
        }
        var Pe = X(x, A, I, ce, he);
        if (Pe == null)
          return Pe;
        if (ie) {
          var it = A.children;
          if (it !== void 0)
            if (q)
              if (hn(it)) {
                for (var Un = 0; Un < it.length; Un++)
                  zn(it[Un], x);
                Object.freeze && Object.freeze(it);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zn(it, x);
        }
        if (Le.call(A, "key")) {
          var bn = T(x), qe = Object.keys(A).filter(function(up) {
            return up !== "key";
          }), ua = qe.length > 0 ? "{key: someKey, " + qe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Zr[bn + ua]) {
            var lp = qe.length > 0 ? "{" + qe.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ua, bn, lp, bn), Zr[bn + ua] = !0;
          }
        }
        return x === r ? aa(Pe) : oa(Pe), Pe;
      }
    }
    function ia(x, A, I) {
      return eo(x, A, I, !0);
    }
    function sa(x, A, I) {
      return eo(x, A, I, !1);
    }
    var la = sa, yn = ia;
    wr.Fragment = r, wr.jsx = la, wr.jsxs = yn;
  }()), wr;
}
mi.env.NODE_ENV === "production" ? Ia.exports = vp() : Ia.exports = Dp();
var u = Ia.exports, Pr = {}, xr = Bl;
if (mi.env.NODE_ENV === "production")
  Pr.createRoot = xr.createRoot, Pr.hydrateRoot = xr.hydrateRoot;
else {
  var no = xr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Pr.createRoot = function(e, t) {
    no.usingClientEntryPoint = !0;
    try {
      return xr.createRoot(e, t);
    } finally {
      no.usingClientEntryPoint = !1;
    }
  }, Pr.hydrateRoot = function(e, t, n) {
    no.usingClientEntryPoint = !0;
    try {
      return xr.hydrateRoot(e, t, n);
    } finally {
      no.usingClientEntryPoint = !1;
    }
  };
}
function yp(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Hl(...e) {
  return (t) => e.forEach((n) => yp(n, t));
}
function le(...e) {
  return v.useCallback(Hl(...e), e);
}
var nn = v.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = v.Children.toArray(n), a = o.find(wp);
  if (a) {
    const i = a.props.children, s = o.map((l) => l === a ? v.Children.count(i) > 1 ? v.Children.only(null) : v.isValidElement(i) ? i.props.children : null : l);
    return /* @__PURE__ */ u.jsx(La, { ...r, ref: t, children: v.isValidElement(i) ? v.cloneElement(i, void 0, s) : null });
  }
  return /* @__PURE__ */ u.jsx(La, { ...r, ref: t, children: n });
});
nn.displayName = "Slot";
var La = v.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (v.isValidElement(n)) {
    const o = Cp(n);
    return v.cloneElement(n, {
      ...xp(r, n.props),
      // @ts-ignore
      ref: t ? Hl(t, o) : o
    });
  }
  return v.Children.count(n) > 1 ? v.Children.only(null) : null;
});
La.displayName = "SlotClone";
var bp = ({ children: e }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: e });
function wp(e) {
  return v.isValidElement(e) && e.type === bp;
}
function xp(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      a(...s), o(...s);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Cp(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Vl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Vl(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Ep() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = Vl(e)) && (r && (r += " "), r += t);
  return r;
}
const Cs = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Es = Ep, Yl = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Es(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((c) => {
    const d = n == null ? void 0 : n[c], p = a == null ? void 0 : a[c];
    if (d === null) return null;
    const f = Cs(d) || Cs(p);
    return o[c][f];
  }), s = n && Object.entries(n).reduce((c, d) => {
    let [p, f] = d;
    return f === void 0 || (c[p] = f), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, d) => {
    let { class: p, className: f, ...h } = d;
    return Object.entries(h).every((m) => {
      let [g, D] = m;
      return Array.isArray(D) ? D.includes({
        ...a,
        ...s
      }[g]) : {
        ...a,
        ...s
      }[g] === D;
    }) ? [
      ...c,
      p,
      f
    ] : c;
  }, []);
  return Es(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
function zl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = zl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Fp() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = zl(e)) && (r && (r += " "), r += t);
  return r;
}
const gi = "-", Sp = (e) => {
  const t = kp(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(gi);
      return s[0] === "" && s.length !== 1 && s.shift(), Ul(s, t) || Np(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const l = n[i] || [];
      return s && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, Ul = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Ul(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(gi);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, Fs = /^\[(.+)\]$/, Np = (e) => {
  if (Fs.test(e)) {
    const t = Fs.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, kp = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Pp(Object.entries(e.classGroups), n).forEach(([a, i]) => {
    Wa(i, r, a, t);
  }), r;
}, Wa = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Ss(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (jp(o)) {
        Wa(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      Wa(i, Ss(t, a), n, r);
    });
  });
}, Ss = (e, t) => {
  let n = e;
  return t.split(gi).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, jp = (e) => e.isThemeGetter, Pp = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, s]) => [t + i, s])) : a);
  return [n, o];
}) : e, _p = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    n.set(a, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = n.get(a);
      if (i !== void 0)
        return i;
      if ((i = r.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      n.has(a) ? n.set(a, i) : o(a, i);
    }
  };
}, ql = "!", Ap = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], a = t.length, i = (s) => {
    const l = [];
    let c = 0, d = 0, p;
    for (let D = 0; D < s.length; D++) {
      let y = s[D];
      if (c === 0) {
        if (y === o && (r || s.slice(D, D + a) === t)) {
          l.push(s.slice(d, D)), d = D + a;
          continue;
        }
        if (y === "/") {
          p = D;
          continue;
        }
      }
      y === "[" ? c++ : y === "]" && c--;
    }
    const f = l.length === 0 ? s : s.substring(d), h = f.startsWith(ql), m = h ? f.substring(1) : f, g = p && p > d ? p - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: h,
      baseClassName: m,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: i
  }) : i;
}, Op = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, Rp = (e) => ({
  cache: _p(e.cacheSize),
  parseClassName: Ap(e),
  ...Sp(e)
}), Tp = /\s+/, Mp = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = [], i = e.trim().split(Tp);
  let s = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const c = i[l], {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: h
    } = n(c);
    let m = !!h, g = r(m ? f.substring(0, h) : f);
    if (!g) {
      if (!m) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (g = r(f), !g) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      m = !1;
    }
    const D = Op(d).join(":"), y = p ? D + ql : D, b = y + g;
    if (a.includes(b))
      continue;
    a.push(b);
    const w = o(g, m);
    for (let C = 0; C < w.length; ++C) {
      const E = w[C];
      a.push(y + E);
    }
    s = c + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Bp() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Gl(t)) && (r && (r += " "), r += n);
  return r;
}
const Gl = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Gl(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Ip(e, ...t) {
  let n, r, o, a = i;
  function i(l) {
    const c = t.reduce((d, p) => p(d), e());
    return n = Rp(c), r = n.cache.get, o = n.cache.set, a = s, s(l);
  }
  function s(l) {
    const c = r(l);
    if (c)
      return c;
    const d = Mp(l, n);
    return o(l, d), d;
  }
  return function() {
    return a(Bp.apply(null, arguments));
  };
}
const we = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Xl = /^\[(?:([a-z-]+):)?(.+)\]$/i, Lp = /^\d+\/\d+$/, Wp = /* @__PURE__ */ new Set(["px", "full", "screen"]), $p = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Hp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Vp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Yp = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, jt = (e) => rr(e) || Wp.has(e) || Lp.test(e), Jt = (e) => pr(e, "length", Zp), rr = (e) => !!e && !Number.isNaN(Number(e)), ca = (e) => pr(e, "number", rr), Cr = (e) => !!e && Number.isInteger(Number(e)), Up = (e) => e.endsWith("%") && rr(e.slice(0, -1)), K = (e) => Xl.test(e), Qt = (e) => $p.test(e), qp = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Gp = (e) => pr(e, qp, Kl), Xp = (e) => pr(e, "position", Kl), Kp = /* @__PURE__ */ new Set(["image", "url"]), Jp = (e) => pr(e, Kp, th), Qp = (e) => pr(e, "", eh), Er = () => !0, pr = (e, t, n) => {
  const r = Xl.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Zp = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Hp.test(e) && !Vp.test(e)
), Kl = () => !1, eh = (e) => Yp.test(e), th = (e) => zp.test(e), nh = () => {
  const e = we("colors"), t = we("spacing"), n = we("blur"), r = we("brightness"), o = we("borderColor"), a = we("borderRadius"), i = we("borderSpacing"), s = we("borderWidth"), l = we("contrast"), c = we("grayscale"), d = we("hueRotate"), p = we("invert"), f = we("gap"), h = we("gradientColorStops"), m = we("gradientColorStopPositions"), g = we("inset"), D = we("margin"), y = we("opacity"), b = we("padding"), w = we("saturate"), C = we("scale"), E = we("sepia"), F = we("skew"), S = we("space"), P = we("translate"), N = () => ["auto", "contain", "none"], k = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", K, t], _ = () => [K, t], T = () => ["", jt, Jt], B = () => ["auto", rr, K], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], j = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Y = () => ["", "0", K], ue = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], oe = () => [rr, K];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Er],
      spacing: [jt, Jt],
      blur: ["none", "", Qt, K],
      brightness: oe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Qt, K],
      borderSpacing: _(),
      borderWidth: T(),
      contrast: oe(),
      grayscale: Y(),
      hueRotate: oe(),
      invert: Y(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Up, Jt],
      inset: L(),
      margin: L(),
      opacity: oe(),
      padding: _(),
      saturate: oe(),
      scale: oe(),
      sepia: Y(),
      skew: oe(),
      space: _(),
      translate: _()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", K]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Qt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ue()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ue()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...W(), K]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Cr, K]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: L()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", K]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Y()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Y()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Cr, K]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Er]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Cr, K]
        }, K]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Er]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Cr, K]
        }, K]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", K]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", K]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...O()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...O(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...O(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [D]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [D]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [D]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [D]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [D]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [D]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [D]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [D]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [D]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [S]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [S]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [K, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [K, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Qt]
        }, Qt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [K, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [K, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Qt, Jt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ca]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Er]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", K]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", rr, ca]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", jt, K]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", K]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", K]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...H(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", jt, Jt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", jt, K]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: _()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", K]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...W(), Xp]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Gp]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Jp]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...H(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: H()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...H()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [jt, K]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [jt, Jt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: T()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [jt, Jt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Qt, Qp]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Er]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...j(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": j()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Qt, K]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", K]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: oe()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", K]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: oe()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", K]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Cr, K]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [P]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [P]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [F]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [F]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", K]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", K]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [jt, Jt, ca]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, rh = /* @__PURE__ */ Ip(nh);
function J(...e) {
  return rh(Fp(e));
}
const $a = Yl(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ce = v.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => {
  const i = r ? nn : "button";
  return /* @__PURE__ */ u.jsx(
    i,
    {
      className: J($a({ variant: t, size: n, className: e })),
      ref: a,
      ...o
    }
  );
});
Ce.displayName = "Button";
function Jl(e) {
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ u.jsx("path", { d: "M8 2v4" }),
        /* @__PURE__ */ u.jsx("path", { d: "M16 2v4" }),
        /* @__PURE__ */ u.jsx("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }),
        /* @__PURE__ */ u.jsx("path", { d: "M3 10h18" }),
        /* @__PURE__ */ u.jsx("path", { d: "M8 14h.01" }),
        /* @__PURE__ */ u.jsx("path", { d: "M12 14h.01" }),
        /* @__PURE__ */ u.jsx("path", { d: "M16 14h.01" }),
        /* @__PURE__ */ u.jsx("path", { d: "M8 18h.01" }),
        /* @__PURE__ */ u.jsx("path", { d: "M12 18h.01" }),
        /* @__PURE__ */ u.jsx("path", { d: "M16 18h.01" })
      ]
    }
  );
}
function kn(e) {
  return /* @__PURE__ */ u.jsx(
    "svg",
    {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ u.jsx("path", { d: "M20 6 9 17l-5-5" })
    }
  );
}
function Ha(e) {
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ u.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ u.jsx("polyline", { points: "12 6 12 12 16 14" })
      ]
    }
  );
}
function oh(e) {
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
          }
        ),
        /* @__PURE__ */ u.jsx("path", { d: "m14.5 12.5 2-2" }),
        /* @__PURE__ */ u.jsx("path", { d: "m11.5 9.5 2-2" }),
        /* @__PURE__ */ u.jsx("path", { d: "m8.5 6.5 2-2" }),
        /* @__PURE__ */ u.jsx("path", { d: "m17.5 15.5 2-2" })
      ]
    }
  );
}
function ah(e) {
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ u.jsx("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
        /* @__PURE__ */ u.jsx("circle", { cx: "12", cy: "7", r: "4" })
      ]
    }
  );
}
function Ql(e) {
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ u.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
        /* @__PURE__ */ u.jsx("circle", { cx: "9", cy: "7", r: "4" }),
        /* @__PURE__ */ u.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
        /* @__PURE__ */ u.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
      ]
    }
  );
}
function Or(e) {
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 30 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ u.jsx("path", { d: "M5 12h18" }),
        /* @__PURE__ */ u.jsx("path", { d: "M18 5l7 7-7 7" })
      ]
    }
  );
}
function Jn(e) {
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 30 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ u.jsx("path", { d: "M25 12H7" }),
        /* @__PURE__ */ u.jsx("path", { d: "M12 5L5 12l7 7" })
      ]
    }
  );
}
function ih(e) {
  return /* @__PURE__ */ u.jsx(
    "svg",
    {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 30 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ u.jsx("path", { d: "M5 12h20" })
    }
  );
}
function sh(e) {
  return /* @__PURE__ */ u.jsx(
    "svg",
    {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ u.jsx("path", { d: "M12 5v14M5 12h14" })
    }
  );
}
function lh(e) {
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ u.jsx("path", { d: "M12 8v8M8 12l4-4 4 4" }),
        /* @__PURE__ */ u.jsx("path", { d: "M12 16V8" })
      ]
    }
  );
}
function se(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function nt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Ye(e, t) {
  const n = se(e);
  return isNaN(t) ? nt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function dt(e, t) {
  const n = se(e);
  if (isNaN(t)) return nt(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = nt(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const vi = 6048e5, uh = 864e5;
let ch = {};
function $r() {
  return ch;
}
function Et(e, t) {
  var s, l, c, d;
  const n = $r(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = se(e), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function An(e) {
  return Et(e, { weekStartsOn: 1 });
}
function Zl(e) {
  const t = se(e), n = t.getFullYear(), r = nt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = An(r), a = nt(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const i = An(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function ir(e) {
  const t = se(e);
  return t.setHours(0, 0, 0, 0), t;
}
function xo(e) {
  const t = se(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function xt(e, t) {
  const n = ir(e), r = ir(t), o = +n - xo(n), a = +r - xo(r);
  return Math.round((o - a) / uh);
}
function dh(e) {
  const t = Zl(e), n = nt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), An(n);
}
function Va(e, t) {
  const n = t * 7;
  return Ye(e, n);
}
function fh(e, t) {
  return dt(e, t * 12);
}
function ph(e) {
  let t;
  return e.forEach(function(n) {
    const r = se(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function hh(e) {
  let t;
  return e.forEach((n) => {
    const r = se(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Xe(e, t) {
  const n = ir(e), r = ir(t);
  return +n == +r;
}
function Di(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function mh(e) {
  if (!Di(e) && typeof e != "number")
    return !1;
  const t = se(e);
  return !isNaN(Number(t));
}
function Mr(e, t) {
  const n = se(e), r = se(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function gh(e, t, n) {
  const r = Et(e, n), o = Et(t, n), a = +r - xo(r), i = +o - xo(o);
  return Math.round((a - i) / vi);
}
function yi(e) {
  const t = se(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Ke(e) {
  const t = se(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function eu(e) {
  const t = se(e), n = nt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function bi(e, t) {
  var s, l, c, d;
  const n = $r(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = se(e), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function tu(e) {
  return bi(e, { weekStartsOn: 1 });
}
const vh = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Dh = (e, t, n) => {
  let r;
  const o = vh[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function da(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const yh = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, bh = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, wh = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, xh = {
  date: da({
    formats: yh,
    defaultWidth: "full"
  }),
  time: da({
    formats: bh,
    defaultWidth: "full"
  }),
  dateTime: da({
    formats: wh,
    defaultWidth: "full"
  })
}, Ch = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Eh = (e, t, n, r) => Ch[e];
function Fr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const Fh = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Sh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Nh = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, kh = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, jh = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Ph = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, _h = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Ah = {
  ordinalNumber: _h,
  era: Fr({
    values: Fh,
    defaultWidth: "wide"
  }),
  quarter: Fr({
    values: Sh,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Fr({
    values: Nh,
    defaultWidth: "wide"
  }),
  day: Fr({
    values: kh,
    defaultWidth: "wide"
  }),
  dayPeriod: Fr({
    values: jh,
    defaultWidth: "wide",
    formattingValues: Ph,
    defaultFormattingWidth: "wide"
  })
};
function Sr(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? Rh(s, (p) => p.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Oh(s, (p) => p.test(i))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(c)
    ) : c;
    const d = t.slice(i.length);
    return { value: c, rest: d };
  };
}
function Oh(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Rh(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Th(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const Mh = /^(\d+)(th|st|nd|rd)?/i, Bh = /\d+/i, Ih = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Lh = {
  any: [/^b/i, /^(a|c)/i]
}, Wh = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, $h = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Hh = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Vh = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Yh = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, zh = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Uh = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, qh = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Gh = {
  ordinalNumber: Th({
    matchPattern: Mh,
    parsePattern: Bh,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Sr({
    matchPatterns: Ih,
    defaultMatchWidth: "wide",
    parsePatterns: Lh,
    defaultParseWidth: "any"
  }),
  quarter: Sr({
    matchPatterns: Wh,
    defaultMatchWidth: "wide",
    parsePatterns: $h,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Sr({
    matchPatterns: Hh,
    defaultMatchWidth: "wide",
    parsePatterns: Vh,
    defaultParseWidth: "any"
  }),
  day: Sr({
    matchPatterns: Yh,
    defaultMatchWidth: "wide",
    parsePatterns: zh,
    defaultParseWidth: "any"
  }),
  dayPeriod: Sr({
    matchPatterns: Uh,
    defaultMatchWidth: "any",
    parsePatterns: qh,
    defaultParseWidth: "any"
  })
}, nu = {
  code: "en-US",
  formatDistance: Dh,
  formatLong: xh,
  formatRelative: Eh,
  localize: Ah,
  match: Gh,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Xh(e) {
  const t = se(e);
  return xt(t, eu(t)) + 1;
}
function ru(e) {
  const t = se(e), n = +An(t) - +dh(t);
  return Math.round(n / vi) + 1;
}
function ou(e, t) {
  var d, p, f, h;
  const n = se(e), r = n.getFullYear(), o = $r(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (f = o.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = nt(e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = Et(i, t), l = nt(e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const c = Et(l, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function Kh(e, t) {
  var s, l, c, d;
  const n = $r(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = ou(e, t), a = nt(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Et(a, t);
}
function au(e, t) {
  const n = se(e), r = +Et(n, t) - +Kh(n, t);
  return Math.round(r / vi) + 1;
}
function de(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Zt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return de(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : de(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return de(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return de(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return de(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return de(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return de(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return de(o, t.length);
  }
}, qn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ns = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return Zt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = ou(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return de(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : de(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Zl(e);
    return de(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return de(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return de(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return de(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Zt.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return de(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = au(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : de(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = ru(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : de(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Zt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Xh(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : de(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return de(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return de(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return de(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = qn.noon : r === 0 ? o = qn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = qn.evening : r >= 12 ? o = qn.afternoon : r >= 4 ? o = qn.morning : o = qn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Zt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Zt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : de(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : de(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Zt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Zt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Zt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return js(r);
      case "XXXX":
      case "XX":
        return xn(r);
      case "XXXXX":
      case "XXX":
      default:
        return xn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return js(r);
      case "xxxx":
      case "xx":
        return xn(r);
      case "xxxxx":
      case "xxx":
      default:
        return xn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ks(r, ":");
      case "OOOO":
      default:
        return "GMT" + xn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ks(r, ":");
      case "zzzz":
      default:
        return "GMT" + xn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return de(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return de(r, t.length);
  }
};
function ks(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + de(a, 2);
}
function js(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + de(Math.abs(e) / 60, 2) : xn(e, t);
}
function xn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = de(Math.trunc(r / 60), 2), a = de(r % 60, 2);
  return n + o + t + a;
}
const Ps = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, iu = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Jh = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Ps(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", Ps(r, t)).replace("{{time}}", iu(o, t));
}, Qh = {
  p: iu,
  P: Jh
}, Zh = /^D+$/, em = /^Y+$/, tm = ["D", "DD", "YY", "YYYY"];
function nm(e) {
  return Zh.test(e);
}
function rm(e) {
  return em.test(e);
}
function om(e, t, n) {
  const r = am(e, t, n);
  if (console.warn(r), tm.includes(e)) throw new RangeError(r);
}
function am(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const im = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, sm = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, lm = /^'([^]*?)'?$/, um = /''/g, cm = /[a-zA-Z]/;
function Lt(e, t, n) {
  var d, p, f, h, m, g, D, y;
  const r = $r(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? nu, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((g = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : g.weekStartsOn) ?? r.weekStartsOn ?? ((y = (D = r.locale) == null ? void 0 : D.options) == null ? void 0 : y.weekStartsOn) ?? 0, s = se(e);
  if (!mh(s))
    throw new RangeError("Invalid time value");
  let l = t.match(sm).map((b) => {
    const w = b[0];
    if (w === "p" || w === "P") {
      const C = Qh[w];
      return C(b, o.formatLong);
    }
    return b;
  }).join("").match(im).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const w = b[0];
    if (w === "'")
      return { isToken: !1, value: dm(b) };
    if (Ns[w])
      return { isToken: !0, value: b };
    if (w.match(cm))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + w + "`"
      );
    return { isToken: !1, value: b };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const c = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return l.map((b) => {
    if (!b.isToken) return b.value;
    const w = b.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && rm(w) || !(n != null && n.useAdditionalDayOfYearTokens) && nm(w)) && om(w, t, String(e));
    const C = Ns[w[0]];
    return C(s, w, o.localize, c);
  }).join("");
}
function dm(e) {
  const t = e.match(lm);
  return t ? t[1].replace(um, "'") : e;
}
function fm(e) {
  const t = se(e), n = t.getFullYear(), r = t.getMonth(), o = nt(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function pm(e) {
  return Math.trunc(+se(e) / 1e3);
}
function hm(e) {
  const t = se(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function mm(e, t) {
  return gh(
    hm(e),
    Ke(e),
    t
  ) + 1;
}
function Ya(e, t) {
  const n = se(e), r = se(t);
  return n.getTime() > r.getTime();
}
function su(e, t) {
  const n = se(e), r = se(t);
  return +n < +r;
}
function wi(e, t) {
  const n = se(e), r = se(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function gm(e, t) {
  const n = se(e), r = se(t);
  return n.getFullYear() === r.getFullYear();
}
function fa(e, t) {
  return Ye(e, -t);
}
function pa(e, t) {
  const n = se(e), r = n.getFullYear(), o = n.getDate(), a = nt(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const i = fm(a);
  return n.setMonth(t, Math.min(o, i)), n;
}
function _s(e, t) {
  const n = se(e);
  return isNaN(+n) ? nt(e, NaN) : (n.setFullYear(t), n);
}
function ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function vm(e, t) {
  const n = v.createContext(t);
  function r(a) {
    const { children: i, ...s } = a, l = v.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ u.jsx(n.Provider, { value: l, children: i });
  }
  function o(a) {
    const i = v.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [r, o];
}
function ln(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = v.createContext(i), l = n.length;
    n = [...n, i];
    function c(p) {
      const { scope: f, children: h, ...m } = p, g = (f == null ? void 0 : f[e][l]) || s, D = v.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ u.jsx(g.Provider, { value: D, children: h });
    }
    function d(p, f) {
      const h = (f == null ? void 0 : f[e][l]) || s, m = v.useContext(h);
      if (m) return m;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return c.displayName = a + "Provider", [c, d];
  }
  const o = () => {
    const a = n.map((i) => v.createContext(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return v.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, Dm(o, ...t)];
}
function Dm(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: c }) => {
        const p = l(a)[`__scope${c}`];
        return { ...s, ...p };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var He = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {
}, ym = v.useId || (() => {
}), bm = 0;
function jn(e) {
  const [t, n] = v.useState(ym());
  return He(() => {
    n((r) => r ?? String(bm++));
  }, [e]), t ? `radix-${t}` : "";
}
function $e(e) {
  const t = v.useRef(e);
  return v.useEffect(() => {
    t.current = e;
  }), v.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function sr({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = wm({ defaultProp: t, onChange: n }), a = e !== void 0, i = a ? e : r, s = $e(n), l = v.useCallback(
    (c) => {
      if (a) {
        const p = typeof c == "function" ? c(e) : c;
        p !== e && s(p);
      } else
        o(c);
    },
    [a, e, o, s]
  );
  return [i, l];
}
function wm({
  defaultProp: e,
  onChange: t
}) {
  const n = v.useState(e), [r] = n, o = v.useRef(r), a = $e(t);
  return v.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
var xm = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], ne = xm.reduce((e, t) => {
  const n = v.forwardRef((r, o) => {
    const { asChild: a, ...i } = r, s = a ? nn : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(s, { ...i, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Cm(e, t) {
  e && Wr.flushSync(() => e.dispatchEvent(t));
}
function Em(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = $e(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Fm = "DismissableLayer", za = "dismissableLayer.update", Sm = "dismissableLayer.pointerDownOutside", Nm = "dismissableLayer.focusOutside", As, lu = v.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ro = v.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, c = v.useContext(lu), [d, p] = v.useState(null), f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = v.useState({}), m = le(t, (S) => p(S)), g = Array.from(c.layers), [D] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = g.indexOf(D), b = d ? g.indexOf(d) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, C = b >= y, E = Pm((S) => {
      const P = S.target, N = [...c.branches].some((k) => k.contains(P));
      !C || N || (o == null || o(S), i == null || i(S), S.defaultPrevented || s == null || s());
    }, f), F = _m((S) => {
      const P = S.target;
      [...c.branches].some((k) => k.contains(P)) || (a == null || a(S), i == null || i(S), S.defaultPrevented || s == null || s());
    }, f);
    return Em((S) => {
      b === c.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && s && (S.preventDefault(), s()));
    }, f), v.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (As = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Os(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = As);
        };
    }, [d, f, n, c]), v.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Os());
    }, [d, c]), v.useEffect(() => {
      const S = () => h({});
      return document.addEventListener(za, S), () => document.removeEventListener(za, S);
    }, []), /* @__PURE__ */ u.jsx(
      ne.div,
      {
        ...l,
        ref: m,
        style: {
          pointerEvents: w ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ee(e.onFocusCapture, F.onFocusCapture),
        onBlurCapture: ee(e.onBlurCapture, F.onBlurCapture),
        onPointerDownCapture: ee(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
Ro.displayName = Fm;
var km = "DismissableLayerBranch", jm = v.forwardRef((e, t) => {
  const n = v.useContext(lu), r = v.useRef(null), o = le(t, r);
  return v.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ u.jsx(ne.div, { ...e, ref: o });
});
jm.displayName = km;
function Pm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = $e(e), r = v.useRef(!1), o = v.useRef(() => {
  });
  return v.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          uu(
            Sm,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function _m(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = $e(e), r = v.useRef(!1);
  return v.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && uu(Nm, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Os() {
  const e = new CustomEvent(za);
  document.dispatchEvent(e);
}
function uu(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Cm(o, a) : o.dispatchEvent(a);
}
var ha = "focusScope.autoFocusOnMount", ma = "focusScope.autoFocusOnUnmount", Rs = { bubbles: !1, cancelable: !0 }, Am = "FocusScope", To = v.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, l] = v.useState(null), c = $e(o), d = $e(a), p = v.useRef(null), f = le(t, (g) => l(g)), h = v.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  v.useEffect(() => {
    if (r) {
      let g = function(w) {
        if (h.paused || !s) return;
        const C = w.target;
        s.contains(C) ? p.current = C : en(p.current, { select: !0 });
      }, D = function(w) {
        if (h.paused || !s) return;
        const C = w.relatedTarget;
        C !== null && (s.contains(C) || en(p.current, { select: !0 }));
      }, y = function(w) {
        if (document.activeElement === document.body)
          for (const E of w)
            E.removedNodes.length > 0 && en(s);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", D);
      const b = new MutationObserver(y);
      return s && b.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", D), b.disconnect();
      };
    }
  }, [r, s, h.paused]), v.useEffect(() => {
    if (s) {
      Ms.add(h);
      const g = document.activeElement;
      if (!s.contains(g)) {
        const y = new CustomEvent(ha, Rs);
        s.addEventListener(ha, c), s.dispatchEvent(y), y.defaultPrevented || (Om(Im(cu(s)), { select: !0 }), document.activeElement === g && en(s));
      }
      return () => {
        s.removeEventListener(ha, c), setTimeout(() => {
          const y = new CustomEvent(ma, Rs);
          s.addEventListener(ma, d), s.dispatchEvent(y), y.defaultPrevented || en(g ?? document.body, { select: !0 }), s.removeEventListener(ma, d), Ms.remove(h);
        }, 0);
      };
    }
  }, [s, c, d, h]);
  const m = v.useCallback(
    (g) => {
      if (!n && !r || h.paused) return;
      const D = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, y = document.activeElement;
      if (D && y) {
        const b = g.currentTarget, [w, C] = Rm(b);
        w && C ? !g.shiftKey && y === C ? (g.preventDefault(), n && en(w, { select: !0 })) : g.shiftKey && y === w && (g.preventDefault(), n && en(C, { select: !0 })) : y === b && g.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ u.jsx(ne.div, { tabIndex: -1, ...i, ref: f, onKeyDown: m });
});
To.displayName = Am;
function Om(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (en(r, { select: t }), document.activeElement !== n) return;
}
function Rm(e) {
  const t = cu(e), n = Ts(t, e), r = Ts(t.reverse(), e);
  return [n, r];
}
function cu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ts(e, t) {
  for (const n of e)
    if (!Tm(n, { upTo: t })) return n;
}
function Tm(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Mm(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function en(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Mm(e) && t && e.select();
  }
}
var Ms = Bm();
function Bm() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Bs(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Bs(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Bs(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Im(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Lm = "Portal", Mo = v.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = v.useState(!1);
  He(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? Bl.createPortal(/* @__PURE__ */ u.jsx(ne.div, { ...r, ref: t }), i) : null;
});
Mo.displayName = Lm;
function Wm(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var mt = (e) => {
  const { present: t, children: n } = e, r = $m(t), o = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), a = le(r.ref, Hm(o));
  return typeof n == "function" || r.isPresent ? v.cloneElement(o, { ref: a }) : null;
};
mt.displayName = "Presence";
function $m(e) {
  const [t, n] = v.useState(), r = v.useRef({}), o = v.useRef(e), a = v.useRef("none"), i = e ? "mounted" : "unmounted", [s, l] = Wm(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return v.useEffect(() => {
    const c = ro(r.current);
    a.current = s === "mounted" ? c : "none";
  }, [s]), He(() => {
    const c = r.current, d = o.current;
    if (d !== e) {
      const f = a.current, h = ro(c);
      e ? l("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && f !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), He(() => {
    if (t) {
      const c = (p) => {
        const h = ro(r.current).includes(p.animationName);
        p.target === t && h && Wr.flushSync(() => l("ANIMATION_END"));
      }, d = (p) => {
        p.target === t && (a.current = ro(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: v.useCallback((c) => {
      c && (r.current = getComputedStyle(c)), n(c);
    }, [])
  };
}
function ro(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Hm(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ga = 0;
function xi() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Is()), document.body.insertAdjacentElement("beforeend", e[1] ?? Is()), ga++, () => {
      ga === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ga--;
    };
  }, []);
}
function Is() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var wt = function() {
  return wt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, wt.apply(this, arguments);
};
function du(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Vm(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var mo = "right-scroll-bar-position", go = "width-before-scroll-bar", Ym = "with-scroll-bars-hidden", zm = "--removed-body-scroll-bar-size";
function va(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Um(e, t) {
  var n = Q(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var qm = typeof window < "u" ? v.useLayoutEffect : v.useEffect, Ls = /* @__PURE__ */ new WeakMap();
function Gm(e, t) {
  var n = Um(null, function(r) {
    return e.forEach(function(o) {
      return va(o, r);
    });
  });
  return qm(function() {
    var r = Ls.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), i = n.current;
      o.forEach(function(s) {
        a.has(s) || va(s, null);
      }), a.forEach(function(s) {
        o.has(s) || va(s, i);
      });
    }
    Ls.set(n, e);
  }, [e]), n;
}
function Xm(e) {
  return e;
}
function Km(e, t) {
  t === void 0 && (t = Xm);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var l = function() {
        var d = i;
        i = [], d.forEach(a);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(d) {
          i.push(d), c();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return o;
}
function Jm(e) {
  e === void 0 && (e = {});
  var t = Km(null);
  return t.options = wt({ async: !0, ssr: !1 }, e), t;
}
var fu = function(e) {
  var t = e.sideCar, n = du(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, wt({}, n));
};
fu.isSideCarExport = !0;
function Qm(e, t) {
  return e.useMedium(t), fu;
}
var pu = Jm(), Da = function() {
}, Bo = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: Da,
    onWheelCapture: Da,
    onTouchMoveCapture: Da
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, p = e.shards, f = e.sideCar, h = e.noIsolation, m = e.inert, g = e.allowPinchZoom, D = e.as, y = D === void 0 ? "div" : D, b = e.gapMode, w = du(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = f, E = Gm([n, t]), F = wt(wt({}, w), o);
  return v.createElement(
    v.Fragment,
    null,
    d && v.createElement(C, { sideCar: pu, removeScrollBar: c, shards: p, noIsolation: h, inert: m, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: b }),
    i ? v.cloneElement(v.Children.only(s), wt(wt({}, F), { ref: E })) : v.createElement(y, wt({}, F, { className: l, ref: E }), s)
  );
});
Bo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Bo.classNames = {
  fullWidth: go,
  zeroRight: mo
};
var Zm = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function eg() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Zm();
  return t && e.setAttribute("nonce", t), e;
}
function tg(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ng(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var rg = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = eg()) && (tg(t, n), ng(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, og = function() {
  var e = rg();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, hu = function() {
  var e = og(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, ag = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ya = function(e) {
  return parseInt(e || "", 10) || 0;
}, ig = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ya(n), ya(r), ya(o)];
}, sg = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ag;
  var t = ig(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, lg = hu(), or = "data-scroll-locked", ug = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ym, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(or, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(mo, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(go, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(mo, " .").concat(mo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(go, " .").concat(go, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(or, `] {
    `).concat(zm, ": ").concat(s, `px;
  }
`);
}, Ws = function() {
  var e = parseInt(document.body.getAttribute(or) || "0", 10);
  return isFinite(e) ? e : 0;
}, cg = function() {
  v.useEffect(function() {
    return document.body.setAttribute(or, (Ws() + 1).toString()), function() {
      var e = Ws() - 1;
      e <= 0 ? document.body.removeAttribute(or) : document.body.setAttribute(or, e.toString());
    };
  }, []);
}, dg = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  cg();
  var a = v.useMemo(function() {
    return sg(o);
  }, [o]);
  return v.createElement(lg, { styles: ug(a, !t, o, n ? "" : "!important") });
}, Ua = !1;
if (typeof window < "u")
  try {
    var oo = Object.defineProperty({}, "passive", {
      get: function() {
        return Ua = !0, !0;
      }
    });
    window.addEventListener("test", oo, oo), window.removeEventListener("test", oo, oo);
  } catch {
    Ua = !1;
  }
var Gn = Ua ? { passive: !1 } : !1, fg = function(e) {
  return e.tagName === "TEXTAREA";
}, mu = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !fg(e) && n[t] === "visible")
  );
}, pg = function(e) {
  return mu(e, "overflowY");
}, hg = function(e) {
  return mu(e, "overflowX");
}, $s = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = gu(e, r);
    if (o) {
      var a = vu(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, mg = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, gg = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, gu = function(e, t) {
  return e === "v" ? pg(t) : hg(t);
}, vu = function(e, t) {
  return e === "v" ? mg(t) : gg(t);
}, vg = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Dg = function(e, t, n, r, o) {
  var a = vg(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, l = t.contains(s), c = !1, d = i > 0, p = 0, f = 0;
  do {
    var h = vu(e, s), m = h[0], g = h[1], D = h[2], y = g - D - a * m;
    (m || y) && gu(e, s) && (p += y, f += m), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (d && (Math.abs(p) < 1 || !o) || !d && (Math.abs(f) < 1 || !o)) && (c = !0), c;
}, ao = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Hs = function(e) {
  return [e.deltaX, e.deltaY];
}, Vs = function(e) {
  return e && "current" in e ? e.current : e;
}, yg = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, bg = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, wg = 0, Xn = [];
function xg(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(wg++)[0], a = v.useState(hu)[0], i = v.useRef(e);
  v.useEffect(function() {
    i.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = Vm([e.lockRef.current], (e.shards || []).map(Vs), !0).filter(Boolean);
      return g.forEach(function(D) {
        return D.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(D) {
          return D.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = v.useCallback(function(g, D) {
    if ("touches" in g && g.touches.length === 2)
      return !i.current.allowPinchZoom;
    var y = ao(g), b = n.current, w = "deltaX" in g ? g.deltaX : b[0] - y[0], C = "deltaY" in g ? g.deltaY : b[1] - y[1], E, F = g.target, S = Math.abs(w) > Math.abs(C) ? "h" : "v";
    if ("touches" in g && S === "h" && F.type === "range")
      return !1;
    var P = $s(S, F);
    if (!P)
      return !0;
    if (P ? E = S : (E = S === "v" ? "h" : "v", P = $s(S, F)), !P)
      return !1;
    if (!r.current && "changedTouches" in g && (w || C) && (r.current = E), !E)
      return !0;
    var N = r.current || E;
    return Dg(N, D, g, N === "h" ? w : C, !0);
  }, []), l = v.useCallback(function(g) {
    var D = g;
    if (!(!Xn.length || Xn[Xn.length - 1] !== a)) {
      var y = "deltaY" in D ? Hs(D) : ao(D), b = t.current.filter(function(E) {
        return E.name === D.type && (E.target === D.target || D.target === E.shadowParent) && yg(E.delta, y);
      })[0];
      if (b && b.should) {
        D.cancelable && D.preventDefault();
        return;
      }
      if (!b) {
        var w = (i.current.shards || []).map(Vs).filter(Boolean).filter(function(E) {
          return E.contains(D.target);
        }), C = w.length > 0 ? s(D, w[0]) : !i.current.noIsolation;
        C && D.cancelable && D.preventDefault();
      }
    }
  }, []), c = v.useCallback(function(g, D, y, b) {
    var w = { name: g, delta: D, target: y, should: b, shadowParent: Cg(y) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== w;
      });
    }, 1);
  }, []), d = v.useCallback(function(g) {
    n.current = ao(g), r.current = void 0;
  }, []), p = v.useCallback(function(g) {
    c(g.type, Hs(g), g.target, s(g, e.lockRef.current));
  }, []), f = v.useCallback(function(g) {
    c(g.type, ao(g), g.target, s(g, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return Xn.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Gn), document.addEventListener("touchmove", l, Gn), document.addEventListener("touchstart", d, Gn), function() {
      Xn = Xn.filter(function(g) {
        return g !== a;
      }), document.removeEventListener("wheel", l, Gn), document.removeEventListener("touchmove", l, Gn), document.removeEventListener("touchstart", d, Gn);
    };
  }, []);
  var h = e.removeScrollBar, m = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    m ? v.createElement(a, { styles: bg(o) }) : null,
    h ? v.createElement(dg, { gapMode: e.gapMode }) : null
  );
}
function Cg(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Eg = Qm(pu, xg);
var Io = v.forwardRef(function(e, t) {
  return v.createElement(Bo, wt({}, e, { ref: t, sideCar: Eg }));
});
Io.classNames = Bo.classNames;
var Fg = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Kn = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), so = {}, ba = 0, Du = function(e) {
  return e && (e.host || Du(e.parentNode));
}, Sg = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Du(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ng = function(e, t, n, r) {
  var o = Sg(t, Array.isArray(e) ? e : [e]);
  so[n] || (so[n] = /* @__PURE__ */ new WeakMap());
  var a = so[n], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(p) {
    !p || s.has(p) || (s.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var d = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (s.has(f))
        d(f);
      else
        try {
          var h = f.getAttribute(r), m = h !== null && h !== "false", g = (Kn.get(f) || 0) + 1, D = (a.get(f) || 0) + 1;
          Kn.set(f, g), a.set(f, D), i.push(f), g === 1 && m && io.set(f, !0), D === 1 && f.setAttribute(n, "true"), m || f.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", f, y);
        }
    });
  };
  return d(t), s.clear(), ba++, function() {
    i.forEach(function(p) {
      var f = Kn.get(p) - 1, h = a.get(p) - 1;
      Kn.set(p, f), a.set(p, h), f || (io.has(p) || p.removeAttribute(r), io.delete(p)), h || p.removeAttribute(n);
    }), ba--, ba || (Kn = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), so = {});
  };
}, Ci = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Fg(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Ng(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ei = "Dialog", [yu, KC] = ln(Ei), [kg, gt] = yu(Ei), bu = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = v.useRef(null), l = v.useRef(null), [c = !1, d] = sr({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ u.jsx(
    kg,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: jn(),
      titleId: jn(),
      descriptionId: jn(),
      open: c,
      onOpenChange: d,
      onOpenToggle: v.useCallback(() => d((p) => !p), [d]),
      modal: i,
      children: n
    }
  );
};
bu.displayName = Ei;
var wu = "DialogTrigger", xu = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(wu, n), a = le(t, o.triggerRef);
    return /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ni(o.open),
        ...r,
        ref: a,
        onClick: ee(e.onClick, o.onOpenToggle)
      }
    );
  }
);
xu.displayName = wu;
var Fi = "DialogPortal", [jg, Cu] = yu(Fi, {
  forceMount: void 0
}), Eu = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = gt(Fi, t);
  return /* @__PURE__ */ u.jsx(jg, { scope: t, forceMount: n, children: v.Children.map(r, (i) => /* @__PURE__ */ u.jsx(mt, { present: n || a.open, children: /* @__PURE__ */ u.jsx(Mo, { asChild: !0, container: o, children: i }) })) });
};
Eu.displayName = Fi;
var Co = "DialogOverlay", Fu = v.forwardRef(
  (e, t) => {
    const n = Cu(Co, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = gt(Co, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ u.jsx(mt, { present: r || a.open, children: /* @__PURE__ */ u.jsx(Pg, { ...o, ref: t }) }) : null;
  }
);
Fu.displayName = Co;
var Pg = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(Co, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(Io, { as: nn, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ u.jsx(
        ne.div,
        {
          "data-state": Ni(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), On = "DialogContent", Su = v.forwardRef(
  (e, t) => {
    const n = Cu(On, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = gt(On, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(mt, { present: r || a.open, children: a.modal ? /* @__PURE__ */ u.jsx(_g, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(Ag, { ...o, ref: t }) });
  }
);
Su.displayName = On;
var _g = v.forwardRef(
  (e, t) => {
    const n = gt(On, e.__scopeDialog), r = v.useRef(null), o = le(t, n.contentRef, r);
    return v.useEffect(() => {
      const a = r.current;
      if (a) return Ci(a);
    }, []), /* @__PURE__ */ u.jsx(
      Nu,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ee(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: ee(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: ee(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Ag = v.forwardRef(
  (e, t) => {
    const n = gt(On, e.__scopeDialog), r = v.useRef(!1), o = v.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      Nu,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Nu = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = gt(On, n), l = v.useRef(null), c = le(t, l);
    return xi(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        To,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ u.jsx(
            Ro,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Ni(s.open),
              ...i,
              ref: c,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(Og, { titleId: s.titleId }),
        /* @__PURE__ */ u.jsx(Tg, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Si = "DialogTitle", ku = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(Si, n);
    return /* @__PURE__ */ u.jsx(ne.h2, { id: o.titleId, ...r, ref: t });
  }
);
ku.displayName = Si;
var ju = "DialogDescription", Pu = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(ju, n);
    return /* @__PURE__ */ u.jsx(ne.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Pu.displayName = ju;
var _u = "DialogClose", Au = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = gt(_u, n);
    return /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ee(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Au.displayName = _u;
function Ni(e) {
  return e ? "open" : "closed";
}
var Ou = "DialogTitleWarning", [JC, Ru] = vm(Ou, {
  contentName: On,
  titleName: Si,
  docsSlug: "dialog"
}), Og = ({ titleId: e }) => {
  const t = Ru(Ou), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return v.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Rg = "DialogDescriptionWarning", Tg = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ru(Rg).contentName}}.`;
  return v.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Tu = bu, Mu = xu, Bu = Eu, ki = Fu, ji = Su, Pi = ku, _i = Pu, Mg = Au;
function Bg(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const Iu = M.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  scaleBackground: () => {
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  handleOnly: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  visible: !1,
  closeDrawer: () => {
  },
  setVisible: () => {
  },
  direction: "bottom"
}), Lo = () => {
  const e = M.useContext(Iu);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
Bg("[vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left]{overflow-x:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]::after{content:'';position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-handle]{display:block;position:relative;opacity:.8;margin-left:auto;margin-right:auto;height:5px;width:56px;border-radius:1rem;touch-action:pan-y;cursor:grab}[vaul-handle]:active,[vaul-handle]:hover{opacity:1}[vaul-handle]:active{cursor:grabbing}[vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible=false]){opacity:1}@media (hover:hover) and (pointer:fine){[vaul-drawer]{user-select:none}}@media (pointer:fine){[vaul-handle-hitarea]:{width:100%;height:100%}}");
const Lu = typeof window < "u" ? pi : Rt;
function qa(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function Ig() {
  return Ai(/^Mac/);
}
function Lg() {
  return Ai(/^iPhone/);
}
function Wg() {
  return Ai(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Ig() && navigator.maxTouchPoints > 1;
}
function Wu() {
  return Lg() || Wg();
}
function Ai(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const wa = typeof document < "u" && window.visualViewport;
function Ys(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function $u(e) {
  for (Ys(e) && (e = e.parentElement); e && !Ys(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const $g = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let lo = 0, xa;
function Hg(e = {}) {
  let { isDisabled: t } = e;
  Lu(() => {
    if (!t)
      return lo++, lo === 1 && (Wu() ? xa = Yg() : xa = Vg()), () => {
        lo--, lo === 0 && xa();
      };
  }, [
    t
  ]);
}
function Vg() {
  return qa(Hu(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function Yg() {
  let e, t = 0, n = (p) => {
    e = $u(p.target), !(e === document.documentElement && e === document.body) && (t = p.changedTouches[0].pageY);
  }, r = (p) => {
    if (!e || e === document.documentElement || e === document.body) {
      p.preventDefault();
      return;
    }
    let f = p.changedTouches[0].pageY, h = e.scrollTop, m = e.scrollHeight - e.clientHeight;
    m !== 0 && ((h <= 0 && f > t || h >= m && f < t) && p.preventDefault(), t = f);
  }, o = (p) => {
    let f = p.target;
    Ga(f) && f !== document.activeElement && (p.preventDefault(), f.style.transform = "translateY(-2000px)", f.focus(), requestAnimationFrame(() => {
      f.style.transform = "";
    }));
  }, a = (p) => {
    let f = p.target;
    Ga(f) && (f.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      f.style.transform = "", wa && (wa.height < window.innerHeight ? requestAnimationFrame(() => {
        zs(f);
      }) : wa.addEventListener("resize", () => zs(f), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, l = window.pageYOffset, c = qa(Hu(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let d = qa(Nr(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Nr(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), Nr(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), Nr(document, "focus", a, !0), Nr(window, "scroll", i));
  return () => {
    c(), d(), window.scrollTo(s, l);
  };
}
function Hu(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Nr(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function zs(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = $u(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const i = n.getBoundingClientRect().bottom;
      a > i && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function Ga(e) {
  return e instanceof HTMLInputElement && !$g.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function zg(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ug(...e) {
  return (t) => e.forEach((n) => zg(n, t));
}
function Vu(...e) {
  return v.useCallback(Ug(...e), e);
}
let kr = null;
function qg({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: a }) {
  const [i, s] = M.useState(() => typeof window < "u" ? window.location.href : ""), l = M.useRef(0), c = M.useCallback(() => {
    if (kr === null && e && !a) {
      kr = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: p, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-l.current}px`,
        left: `${-p}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const h = f - window.innerHeight;
        h && l.current >= f && (document.body.style.top = `${-(l.current + h)}px`);
      }), 300);
    }
  }, [
    e
  ]), d = M.useCallback(() => {
    if (kr !== null && !a) {
      const p = -parseInt(document.body.style.top, 10), f = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, kr), window.requestAnimationFrame(() => {
        if (o && i !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(f, p);
      }), kr = null;
    }
  }, [
    i
  ]);
  return M.useEffect(() => {
    function p() {
      l.current = window.scrollY;
    }
    return p(), window.addEventListener("scroll", p), () => {
      window.removeEventListener("scroll", p);
    };
  }, []), M.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && c(), t || window.setTimeout(() => {
      d();
    }, 500)) : d());
  }, [
    e,
    r,
    i,
    t,
    n,
    c,
    d
  ]), {
    restorePositionSetting: d
  };
}
const Yu = /* @__PURE__ */ new WeakMap();
function xe(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && Yu.set(e, r);
}
function uo(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = Yu.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
const _e = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function co(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[_e(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[_e(t) ? 5 : 4]) : null);
}
function Gg(e) {
  return 8 * (Math.log(e + 1) - 2);
}
const me = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, zu = 0.4;
function Uu(e) {
  const t = M.useRef(e);
  return M.useEffect(() => {
    t.current = e;
  }), M.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function Xg({ defaultProp: e, onChange: t }) {
  const n = M.useState(e), [r] = n, o = M.useRef(r), a = Uu(t);
  return M.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function Kg({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Xg({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : r, s = Uu(n), l = M.useCallback((c) => {
    if (a) {
      const p = typeof c == "function" ? c(e) : c;
      p !== e && s(p);
    } else
      o(c);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    l
  ];
}
function Jg({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: i, direction: s = "bottom" }) {
  const [l, c] = Kg({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), d = M.useMemo(() => l === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    l
  ]), p = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === l || !n, f = M.useMemo(() => n == null ? void 0 : n.findIndex((w) => w === l), [
    n,
    l
  ]), h = M.useMemo(() => {
    var w;
    return (w = n == null ? void 0 : n.map((C) => {
      const E = typeof window < "u", F = typeof C == "string";
      let S = 0;
      if (F && (S = parseInt(C, 10)), _e(s)) {
        const N = F ? S : E ? C * window.innerHeight : 0;
        return E ? s === "bottom" ? window.innerHeight - N : -window.innerHeight + N : N;
      }
      const P = F ? S : E ? C * window.innerWidth : 0;
      return E ? s === "right" ? window.innerWidth - P : -window.innerWidth + P : P;
    })) != null ? w : [];
  }, [
    n
  ]), m = M.useMemo(() => f !== null ? h == null ? void 0 : h[f] : null, [
    h,
    f
  ]), g = M.useCallback((w) => {
    var C;
    const E = (C = h == null ? void 0 : h.findIndex((F) => F === w)) != null ? C : null;
    i(E), xe(r.current, {
      transition: `transform ${me.DURATION}s cubic-bezier(${me.EASE.join(",")})`,
      transform: _e(s) ? `translate3d(0, ${w}px, 0)` : `translate3d(${w}px, 0, 0)`
    }), h && E !== h.length - 1 && E !== a ? xe(o.current, {
      transition: `opacity ${me.DURATION}s cubic-bezier(${me.EASE.join(",")})`,
      opacity: "0"
    }) : xe(o.current, {
      transition: `opacity ${me.DURATION}s cubic-bezier(${me.EASE.join(",")})`,
      opacity: "1"
    }), c(E !== null ? n == null ? void 0 : n[E] : null);
  }, [
    r.current,
    n,
    h,
    a,
    o,
    c
  ]);
  M.useEffect(() => {
    if (l || e) {
      var w;
      const C = (w = n == null ? void 0 : n.findIndex((E) => E === e || E === l)) != null ? w : -1;
      h && C !== -1 && typeof h[C] == "number" && g(h[C]);
    }
  }, [
    l,
    e,
    n,
    h,
    g
  ]);
  function D({ draggedDistance: w, closeDrawer: C, velocity: E, dismissible: F }) {
    if (a === void 0) return;
    const S = s === "bottom" || s === "right" ? (m ?? 0) - w : (m ?? 0) + w, P = f === a - 1, N = f === 0, k = w > 0;
    if (P && xe(o.current, {
      transition: `opacity ${me.DURATION}s cubic-bezier(${me.EASE.join(",")})`
    }), E > 2 && !k) {
      F ? C() : g(h[0]);
      return;
    }
    if (E > 2 && k && h && n) {
      g(h[n.length - 1]);
      return;
    }
    const L = h == null ? void 0 : h.reduce((T, B) => typeof T != "number" || typeof B != "number" ? T : Math.abs(B - S) < Math.abs(T - S) ? B : T), _ = _e(s) ? window.innerHeight : window.innerWidth;
    if (E > zu && Math.abs(w) < _ * 0.4) {
      const T = k ? 1 : -1;
      if (T > 0 && d) {
        g(h[n.length - 1]);
        return;
      }
      if (N && T < 0 && F && C(), f === null) return;
      g(h[f + T]);
      return;
    }
    g(L);
  }
  function y({ draggedDistance: w }) {
    if (m === null) return;
    const C = s === "bottom" || s === "right" ? m - w : m + w;
    (s === "bottom" || s === "right") && C < h[h.length - 1] || (s === "top" || s === "left") && C > h[h.length - 1] || xe(r.current, {
      transform: _e(s) ? `translate3d(0, ${C}px, 0)` : `translate3d(${C}px, 0, 0)`
    });
  }
  function b(w, C) {
    if (!n || typeof f != "number" || !h || a === void 0) return null;
    const E = f === a - 1;
    if (f >= a && C)
      return 0;
    if (E && !C) return 1;
    if (!p && !E) return null;
    const S = E ? f + 1 : f - 1, P = E ? h[S] - h[S - 1] : h[S + 1] - h[S], N = w / Math.abs(P);
    return E ? 1 - N : N;
  }
  return {
    isLastSnapPoint: d,
    activeSnapPoint: l,
    shouldFade: p,
    getPercentageDragged: b,
    setActiveSnapPoint: c,
    activeSnapPointIndex: f,
    onRelease: D,
    onDrag: y,
    snapPointsOffset: h
  };
}
const Qg = 0.25, Zg = 100, Us = 8, wn = 16, qs = 26, Ca = "vaul-dragging";
function qu({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: i, nested: s = !1, setBackgroundColorOnScale: l = !0, closeThreshold: c = Qg, scrollLockTimeout: d = Zg, dismissible: p = !0, handleOnly: f = !1, fadeFromIndex: h = i && i.length - 1, activeSnapPoint: m, setActiveSnapPoint: g, fixed: D, modal: y = !0, onClose: b, noBodyStyles: w, direction: C = "bottom", preventScrollRestoration: E = !0, disablePreventScroll: F = !1 }) {
  var S;
  const [P = !1, N] = M.useState(!1), [k, L] = M.useState(!1), [_, T] = M.useState(!1), [B, W] = M.useState(!1), [H, j] = M.useState(!1), [O, Y] = M.useState(!1), ue = M.useRef(null), oe = M.useRef(null), ke = M.useRef(null), ze = M.useRef(null), Ae = M.useRef(null), Be = M.useRef(!1), Fe = M.useRef(null), $ = M.useRef(0), Z = M.useRef(!1), ge = M.useRef(0), R = M.useRef(null), ae = M.useRef(((S = R.current) == null ? void 0 : S.getBoundingClientRect().height) || 0), te = M.useRef(0), Oe = M.useCallback((V) => {
    i && V === ot.length - 1 && (oe.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: Ie, activeSnapPointIndex: Re, setActiveSnapPoint: Le, onRelease: rt, snapPointsOffset: ot, onDrag: Qe, shouldFade: Hn, getPercentageDragged: Dr } = Jg({
    snapPoints: i,
    activeSnapPointProp: m,
    setActiveSnapPointProp: g,
    drawerRef: R,
    fadeFromIndex: h,
    overlayRef: ue,
    onSnapPointChange: Oe,
    direction: C
  });
  Hg({
    isDisabled: !P || H || !y || O || !k || F
  });
  const { restorePositionSetting: hn } = qg({
    isOpen: P,
    modal: y,
    nested: s,
    hasBeenOpened: k,
    preventScrollRestoration: E,
    noBodyStyles: w
  });
  function vt() {
    return (window.innerWidth - qs) / window.innerWidth;
  }
  function yr(V) {
    var G;
    !p && !i || R.current && !R.current.contains(V.target) || (ae.current = ((G = R.current) == null ? void 0 : G.getBoundingClientRect().height) || 0, j(!0), ke.current = /* @__PURE__ */ new Date(), Wu() && window.addEventListener("touchend", () => Be.current = !1, {
      once: !0
    }), V.target.setPointerCapture(V.pointerId), $.current = _e(C) ? V.clientY : V.clientX);
  }
  function mn(V, G) {
    var fe;
    let X = V;
    const pe = (fe = window.getSelection()) == null ? void 0 : fe.toString(), ye = R.current ? co(R.current, C) : null, Ee = /* @__PURE__ */ new Date();
    if (X.hasAttribute("data-vaul-no-drag") || X.closest("[data-vaul-no-drag]"))
      return !1;
    if (C === "right" || C === "left")
      return !0;
    if (oe.current && Ee.getTime() - oe.current.getTime() < 500)
      return !1;
    if (ye !== null && (C === "bottom" ? ye > 0 : ye < 0))
      return !0;
    if (pe && pe.length > 0)
      return !1;
    if (Ae.current && Ee.getTime() - Ae.current.getTime() < d && ye === 0 || G)
      return Ae.current = Ee, !1;
    for (; X; ) {
      if (X.scrollHeight > X.clientHeight) {
        if (X.scrollTop !== 0)
          return Ae.current = /* @__PURE__ */ new Date(), !1;
        if (X.getAttribute("role") === "dialog")
          return !0;
      }
      X = X.parentNode;
    }
    return !0;
  }
  function Vn(V) {
    if (R.current && H) {
      const G = C === "bottom" || C === "right" ? 1 : -1, fe = ($.current - (_e(C) ? V.clientY : V.clientX)) * G, X = fe > 0, pe = i && !p && !X;
      if (pe && Re === 0) return;
      const ye = Math.abs(fe), Ee = document.querySelector("[vaul-drawer-wrapper]");
      let z = ye / ae.current;
      const ve = Dr(ye, X);
      if (ve !== null && (z = ve), pe && z >= 1 || !Be.current && !mn(V.target, X)) return;
      if (R.current.classList.add(Ca), Be.current = !0, xe(R.current, {
        transition: "none"
      }), xe(ue.current, {
        transition: "none"
      }), i && Qe({
        draggedDistance: fe
      }), X && !i) {
        const be = Gg(fe), ut = Math.min(be * -1, 0) * G;
        xe(R.current, {
          transform: _e(C) ? `translate3d(0, ${ut}px, 0)` : `translate3d(${ut}px, 0, 0)`
        });
        return;
      }
      const je = 1 - z;
      if ((Hn || h && Re === h - 1) && (o == null || o(V, z), xe(ue.current, {
        opacity: `${je}`,
        transition: "none"
      }, !0)), Ee && ue.current && r) {
        const be = Math.min(vt() + z * (1 - vt()), 1), ut = 8 - z * 8, We = Math.max(0, 14 - z * 14);
        xe(Ee, {
          borderRadius: `${ut}px`,
          transform: _e(C) ? `scale(${be}) translate3d(0, ${We}px, 0)` : `scale(${be}) translate3d(${We}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!i) {
        const be = ye * G;
        xe(R.current, {
          transform: _e(C) ? `translate3d(0, ${be}px, 0)` : `translate3d(${be}px, 0, 0)`
        });
      }
    }
  }
  M.useEffect(() => () => {
    at(!1), hn();
  }, []), M.useEffect(() => {
    var V;
    function G() {
      if (!R.current) return;
      const fe = document.activeElement;
      if (Ga(fe) || Z.current) {
        var X;
        const pe = ((X = window.visualViewport) == null ? void 0 : X.height) || 0;
        let ye = window.innerHeight - pe;
        const Ee = R.current.getBoundingClientRect().height || 0;
        te.current || (te.current = Ee);
        const z = R.current.getBoundingClientRect().top;
        if (Math.abs(ge.current - ye) > 60 && (Z.current = !Z.current), i && i.length > 0 && ot && Re) {
          const ve = ot[Re] || 0;
          ye += ve;
        }
        if (ge.current = ye, Ee > pe || Z.current) {
          const ve = R.current.getBoundingClientRect().height;
          let je = ve;
          ve > pe && (je = pe - qs), D ? R.current.style.height = `${ve - Math.max(ye, 0)}px` : R.current.style.height = `${Math.max(je, pe - z)}px`;
        } else
          R.current.style.height = `${te.current}px`;
        i && i.length > 0 && !Z.current ? R.current.style.bottom = "0px" : R.current.style.bottom = `${Math.max(ye, 0)}px`;
      }
    }
    return (V = window.visualViewport) == null || V.addEventListener("resize", G), () => {
      var fe;
      return (fe = window.visualViewport) == null ? void 0 : fe.removeEventListener("resize", G);
    };
  }, [
    Re,
    i,
    ot
  ]);
  function Ue() {
    R.current && (Gt(), b == null || b(), xe(R.current, {
      transform: _e(C) ? `translate3d(0, ${C === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${C === "right" ? "100%" : "-100%"}, 0, 0)`,
      transition: `transform ${me.DURATION}s cubic-bezier(${me.EASE.join(",")})`
    }), xe(ue.current, {
      opacity: "0",
      transition: `opacity ${me.DURATION}s cubic-bezier(${me.EASE.join(",")})`
    }), at(!1), setTimeout(() => {
      T(!1), N(!1);
    }, 300), setTimeout(() => {
      i && Le(i[0]);
    }, me.DURATION * 1e3));
  }
  M.useEffect(() => {
    if (!P && r) {
      const V = setTimeout(() => {
        uo(document.body);
      }, 200);
      return () => clearTimeout(V);
    }
  }, [
    P,
    r
  ]), Lu(() => {
    e ? (N(!0), L(!0)) : Ue();
  }, [
    e
  ]), M.useEffect(() => {
    B && (t == null || t(P));
  }, [
    P
  ]), M.useEffect(() => {
    W(!0);
  }, []);
  function Yn() {
    if (!R.current) return;
    const V = document.querySelector("[vaul-drawer-wrapper]"), G = co(R.current, C);
    xe(R.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${me.DURATION}s cubic-bezier(${me.EASE.join(",")})`
    }), xe(ue.current, {
      transition: `opacity ${me.DURATION}s cubic-bezier(${me.EASE.join(",")})`,
      opacity: "1"
    }), r && G && G > 0 && P && xe(V, {
      borderRadius: `${Us}px`,
      overflow: "hidden",
      ..._e(C) ? {
        transform: `scale(${vt()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${vt()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${me.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${me.EASE.join(",")})`
    }, !0);
  }
  function Gt() {
    !H || !R.current || (R.current.classList.remove(Ca), Be.current = !1, j(!1), ze.current = /* @__PURE__ */ new Date());
  }
  function gn(V) {
    if (!H || !R.current) return;
    R.current.classList.remove(Ca), Be.current = !1, j(!1), ze.current = /* @__PURE__ */ new Date();
    const G = co(R.current, C);
    if (!mn(V.target, !1) || !G || Number.isNaN(G) || ke.current === null) return;
    const fe = ze.current.getTime() - ke.current.getTime(), X = $.current - (_e(C) ? V.clientY : V.clientX), pe = Math.abs(X) / fe;
    if (pe > 0.05 && (Y(!0), setTimeout(() => {
      Y(!1);
    }, 200)), i) {
      rt({
        draggedDistance: X * (C === "bottom" || C === "right" ? 1 : -1),
        closeDrawer: Ue,
        velocity: pe,
        dismissible: p
      }), a == null || a(V, !0);
      return;
    }
    if (C === "bottom" || C === "right" ? X > 0 : X < 0) {
      Yn(), a == null || a(V, !0);
      return;
    }
    if (pe > zu) {
      Ue(), a == null || a(V, !1);
      return;
    }
    var ye;
    const Ee = Math.min((ye = R.current.getBoundingClientRect().height) != null ? ye : 0, window.innerHeight);
    if (G >= Ee * c) {
      Ue(), a == null || a(V, !1);
      return;
    }
    a == null || a(V, !0), Yn();
  }
  M.useEffect(() => {
    P && (xe(document.documentElement, {
      scrollBehavior: "auto"
    }), oe.current = /* @__PURE__ */ new Date(), at(!0));
  }, [
    P
  ]), M.useEffect(() => {
    if (R.current && _) {
      var V;
      const G = R == null || (V = R.current) == null ? void 0 : V.querySelectorAll("*");
      G == null || G.forEach((fe) => {
        const X = fe;
        (X.scrollHeight > X.clientHeight || X.scrollWidth > X.clientWidth) && X.classList.add("vaul-scrollable");
      });
    }
  }, [
    _
  ]);
  function at(V) {
    const G = document.querySelector("[vaul-drawer-wrapper]");
    !G || !r || (V ? (l && (w || (xe(document.body, {
      background: document.body.style.backgroundColor || document.body.style.background
    }), xe(document.body, {
      background: "black"
    }, !0))), xe(G, {
      borderRadius: `${Us}px`,
      overflow: "hidden",
      ..._e(C) ? {
        transform: `scale(${vt()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${vt()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${me.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${me.EASE.join(",")})`
    })) : (uo(G, "overflow"), uo(G, "transform"), uo(G, "borderRadius"), xe(G, {
      transitionProperty: "transform, border-radius",
      transitionDuration: `${me.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${me.EASE.join(",")})`
    })));
  }
  function Xt(V) {
    const G = V ? (window.innerWidth - wn) / window.innerWidth : 1, fe = V ? -wn : 0;
    Fe.current && window.clearTimeout(Fe.current), xe(R.current, {
      transition: `transform ${me.DURATION}s cubic-bezier(${me.EASE.join(",")})`,
      transform: `scale(${G}) translate3d(0, ${fe}px, 0)`
    }), !V && R.current && (Fe.current = setTimeout(() => {
      const X = co(R.current, C);
      xe(R.current, {
        transition: "none",
        transform: _e(C) ? `translate3d(0, ${X}px, 0)` : `translate3d(${X}px, 0, 0)`
      });
    }, 500));
  }
  function vn(V, G) {
    if (G < 0) return;
    const fe = _e(C) ? window.innerHeight : window.innerWidth, X = (fe - wn) / fe, pe = X + G * (1 - X), ye = -wn + G * wn;
    xe(R.current, {
      transform: _e(C) ? `scale(${pe}) translate3d(0, ${ye}px, 0)` : `scale(${pe}) translate3d(${ye}px, 0, 0)`,
      transition: "none"
    });
  }
  function Dn(V, G) {
    const fe = _e(C) ? window.innerHeight : window.innerWidth, X = G ? (fe - wn) / fe : 1, pe = G ? -wn : 0;
    G && xe(R.current, {
      transition: `transform ${me.DURATION}s cubic-bezier(${me.EASE.join(",")})`,
      transform: _e(C) ? `scale(${X}) translate3d(0, ${pe}px, 0)` : `scale(${X}) translate3d(${pe}px, 0, 0)`
    });
  }
  return /* @__PURE__ */ M.createElement(Tu, {
    modal: y,
    onOpenChange: (V) => {
      if (e !== void 0) {
        t == null || t(V);
        return;
      }
      V ? (L(!0), N(V)) : Ue();
    },
    open: P
  }, /* @__PURE__ */ M.createElement(Iu.Provider, {
    value: {
      visible: _,
      activeSnapPoint: Ie,
      snapPoints: i,
      setActiveSnapPoint: Le,
      drawerRef: R,
      overlayRef: ue,
      scaleBackground: at,
      onOpenChange: t,
      onPress: yr,
      setVisible: T,
      onRelease: gn,
      onDrag: Vn,
      dismissible: p,
      handleOnly: f,
      isOpen: P,
      isDragging: H,
      shouldFade: Hn,
      closeDrawer: Ue,
      onNestedDrag: vn,
      onNestedOpenChange: Xt,
      onNestedRelease: Dn,
      keyboardIsOpen: Z,
      openProp: e,
      modal: y,
      snapPointsOffset: ot,
      direction: C
    }
  }, n));
}
const ev = 250, tv = 120, Gu = /* @__PURE__ */ M.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { visible: o, closeDrawer: a, isDragging: i, snapPoints: s, activeSnapPoint: l, setActiveSnapPoint: c, dismissible: d, handleOnly: p, onPress: f, onDrag: h } = Lo(), m = M.useRef(null), g = M.useRef(!1);
  function D() {
    if (g.current) {
      w();
      return;
    }
    window.setTimeout(() => {
      y();
    }, tv);
  }
  function y() {
    if (i || e || g.current) {
      w();
      return;
    }
    if (w(), (!s || s.length === 0) && d) {
      a();
      return;
    }
    if (l === s[s.length - 1] && d) {
      a();
      return;
    }
    const E = s.findIndex((S) => S === l);
    if (E === -1) return;
    const F = s[E + 1];
    c(F);
  }
  function b() {
    m.current = window.setTimeout(() => {
      g.current = !0;
    }, ev);
  }
  function w() {
    window.clearTimeout(m.current), g.current = !1;
  }
  return /* @__PURE__ */ M.createElement("div", {
    onClick: D,
    onDoubleClick: () => {
      g.current = !0, a();
    },
    onPointerCancel: w,
    onPointerDown: (C) => {
      p && f(C), b();
    },
    onPointerMove: (C) => {
      p && h(C);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "vaul-drawer-visible": o ? "true" : "false",
    "vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ M.createElement("span", {
    "vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
Gu.displayName = "Drawer.Handle";
const Xu = /* @__PURE__ */ M.forwardRef(function({ children: e, ...t }, n) {
  const { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: i, isOpen: s, visible: l } = Lo(), c = Vu(n, r), d = o && o.length > 0;
  return /* @__PURE__ */ M.createElement(ki, {
    onMouseUp: a,
    ref: c,
    "vaul-drawer-visible": l ? "true" : "false",
    "vaul-overlay": "",
    "vaul-snap-points": s && d ? "true" : "false",
    "vaul-snap-points-overlay": s && i ? "true" : "false",
    ...t
  });
});
Xu.displayName = "Drawer.Overlay";
const Ku = /* @__PURE__ */ M.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  const { drawerRef: i, onPress: s, onRelease: l, onDrag: c, dismissible: d, keyboardIsOpen: p, snapPointsOffset: f, visible: h, closeDrawer: m, modal: g, openProp: D, onOpenChange: y, setVisible: b, handleOnly: w, direction: C } = Lo(), E = Vu(a, i), F = M.useRef(null), S = M.useRef(!1), P = (N, k, L = 0) => {
    if (S.current) return !0;
    const _ = Math.abs(N.y), T = Math.abs(N.x), B = T > _, W = [
      "bottom",
      "right"
    ].includes(k) ? 1 : -1;
    if (k === "left" || k === "right") {
      if (!(N.x * W < 0) && T >= 0 && T <= L)
        return B;
    } else if (!(N.y * W < 0) && _ >= 0 && _ <= L)
      return !B;
    return S.current = !0, !0;
  };
  return M.useEffect(() => {
    b(!0);
  }, []), /* @__PURE__ */ M.createElement(ji, {
    "vaul-drawer": "",
    "vaul-drawer-direction": C,
    "vaul-drawer-visible": h ? "true" : "false",
    ...o,
    ref: E,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[0]}px`,
      ...r
    } : r,
    onOpenAutoFocus: (N) => {
      if (e)
        e(N);
      else {
        var k;
        N.preventDefault(), (k = i.current) == null || k.focus();
      }
    },
    onPointerDown: (N) => {
      w || (o.onPointerDown == null || o.onPointerDown.call(o, N), F.current = {
        x: N.clientX,
        y: N.clientY
      }, s(N));
    },
    onPointerDownOutside: (N) => {
      if (t == null || t(N), !g || N.defaultPrevented) {
        N.preventDefault();
        return;
      }
      p.current && (p.current = !1), N.preventDefault(), y == null || y(!1), !(!d || D !== void 0) && m();
    },
    onFocusOutside: (N) => {
      if (!g) {
        N.preventDefault();
        return;
      }
    },
    onEscapeKeyDown: (N) => {
      if (!g) {
        N.preventDefault();
        return;
      }
    },
    onPointerMove: (N) => {
      if (w || (o.onPointerMove == null || o.onPointerMove.call(o, N), !F.current)) return;
      const k = N.clientY - F.current.y, L = N.clientX - F.current.x, _ = N.pointerType === "touch" ? 10 : 2;
      P({
        x: L,
        y: k
      }, C, _) ? c(N) : (Math.abs(L) > _ || Math.abs(k) > _) && (F.current = null);
    },
    onPointerUp: (N) => {
      o.onPointerUp == null || o.onPointerUp.call(o, N), F.current = null, S.current = !1, l(N);
    }
  });
});
Ku.displayName = "Drawer.Content";
function nv({ onDrag: e, onOpenChange: t, ...n }) {
  const { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = Lo();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return /* @__PURE__ */ M.createElement(qu, {
    nested: !0,
    onClose: () => {
      o(!1);
    },
    onDrag: (i, s) => {
      r(i, s), e == null || e(i, s);
    },
    onOpenChange: (i) => {
      i && o(i), t == null || t(i);
    },
    onRelease: a,
    ...n
  });
}
const Wt = {
  Root: qu,
  NestedRoot: nv,
  Content: Ku,
  Handle: Gu,
  Overlay: Xu,
  Trigger: Mu,
  Portal: Bu,
  Close: Mg,
  Title: Pi,
  Description: _i
}, Ju = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ u.jsx(Wt.Root, { shouldScaleBackground: e, ...t });
Ju.displayName = "Drawer";
const rv = Wt.Portal, Qu = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Wt.Overlay,
  {
    ref: n,
    className: J("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
Qu.displayName = Wt.Overlay.displayName;
const Zu = v.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(rv, { children: [
  /* @__PURE__ */ u.jsx(Qu, {}),
  /* @__PURE__ */ u.jsxs(
    Wt.Content,
    {
      ref: r,
      className: J(
        "fixed inset-x-0 bottom-10 min-h-[90%] max-h-[95%] z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ u.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
Zu.displayName = "DrawerContent";
const ec = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: J("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
ec.displayName = "DrawerHeader";
const tc = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Wt.Title,
  {
    ref: n,
    className: J("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
tc.displayName = Wt.Title.displayName;
const ov = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Wt.Description,
  {
    ref: n,
    className: J("text-sm text-muted-foreground", e),
    ...t
  }
));
ov.displayName = Wt.Description.displayName;
var av = v.createContext(void 0);
function nc(e) {
  const t = v.useContext(av);
  return e || t || "ltr";
}
function Xa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function iv(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var Oi = "ScrollArea", [rc, QC] = ln(Oi), [sv, lt] = rc(Oi), oc = v.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, l] = v.useState(null), [c, d] = v.useState(null), [p, f] = v.useState(null), [h, m] = v.useState(null), [g, D] = v.useState(null), [y, b] = v.useState(0), [w, C] = v.useState(0), [E, F] = v.useState(!1), [S, P] = v.useState(!1), N = le(t, (L) => l(L)), k = nc(o);
    return /* @__PURE__ */ u.jsx(
      sv,
      {
        scope: n,
        type: r,
        dir: k,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: c,
        onViewportChange: d,
        content: p,
        onContentChange: f,
        scrollbarX: h,
        onScrollbarXChange: m,
        scrollbarXEnabled: E,
        onScrollbarXEnabledChange: F,
        scrollbarY: g,
        onScrollbarYChange: D,
        scrollbarYEnabled: S,
        onScrollbarYEnabledChange: P,
        onCornerWidthChange: b,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ u.jsx(
          ne.div,
          {
            dir: k,
            ...i,
            ref: N,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": w + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
oc.displayName = Oi;
var ac = "ScrollAreaViewport", ic = v.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, i = lt(ac, n), s = v.useRef(null), l = le(t, s, i.onViewportChange);
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ u.jsx(
        ne.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: l,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ u.jsx("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
ic.displayName = ac;
var St = "ScrollAreaScrollbar", Ri = v.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = lt(St, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return v.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ u.jsx(lv, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ u.jsx(uv, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ u.jsx(sc, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ u.jsx(Ti, { ...r, ref: t }) : null;
  }
);
Ri.displayName = St;
var lv = v.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = lt(St, e.__scopeScrollArea), [a, i] = v.useState(!1);
  return v.useEffect(() => {
    const s = o.scrollArea;
    let l = 0;
    if (s) {
      const c = () => {
        window.clearTimeout(l), i(!0);
      }, d = () => {
        l = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", c), s.addEventListener("pointerleave", d), () => {
        window.clearTimeout(l), s.removeEventListener("pointerenter", c), s.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ u.jsx(mt, { present: n || a, children: /* @__PURE__ */ u.jsx(
    sc,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), uv = v.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = lt(St, e.__scopeScrollArea), a = e.orientation === "horizontal", i = $o(() => l("SCROLL_END"), 100), [s, l] = iv("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return v.useEffect(() => {
    if (s === "idle") {
      const c = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(c);
    }
  }, [s, o.scrollHideDelay, l]), v.useEffect(() => {
    const c = o.viewport, d = a ? "scrollLeft" : "scrollTop";
    if (c) {
      let p = c[d];
      const f = () => {
        const h = c[d];
        p !== h && (l("SCROLL"), i()), p = h;
      };
      return c.addEventListener("scroll", f), () => c.removeEventListener("scroll", f);
    }
  }, [o.viewport, a, l, i]), /* @__PURE__ */ u.jsx(mt, { present: n || s !== "hidden", children: /* @__PURE__ */ u.jsx(
    Ti,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: ee(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: ee(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), sc = v.forwardRef((e, t) => {
  const n = lt(St, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, i] = v.useState(!1), s = e.orientation === "horizontal", l = $o(() => {
    if (n.viewport) {
      const c = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(s ? c : d);
    }
  }, 10);
  return lr(n.viewport, l), lr(n.content, l), /* @__PURE__ */ u.jsx(mt, { present: r || a, children: /* @__PURE__ */ u.jsx(
    Ti,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Ti = v.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = lt(St, e.__scopeScrollArea), a = v.useRef(null), i = v.useRef(0), [s, l] = v.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), c = fc(s.viewport, s.content), d = {
    ...r,
    sizes: s,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (f) => a.current = f,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (f) => i.current = f
  };
  function p(f, h) {
    return mv(f, i.current, s, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ u.jsx(
    cv,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const f = o.viewport.scrollLeft, h = Gs(f, s, o.dir);
          a.current.style.transform = `translate3d(${h}px, 0, 0)`;
        }
      },
      onWheelScroll: (f) => {
        o.viewport && (o.viewport.scrollLeft = f);
      },
      onDragScroll: (f) => {
        o.viewport && (o.viewport.scrollLeft = p(f, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ u.jsx(
    dv,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const f = o.viewport.scrollTop, h = Gs(f, s);
          a.current.style.transform = `translate3d(0, ${h}px, 0)`;
        }
      },
      onWheelScroll: (f) => {
        o.viewport && (o.viewport.scrollTop = f);
      },
      onDragScroll: (f) => {
        o.viewport && (o.viewport.scrollTop = p(f));
      }
    }
  ) : null;
}), cv = v.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = lt(St, e.__scopeScrollArea), [i, s] = v.useState(), l = v.useRef(null), c = le(t, l, a.onScrollbarXChange);
  return v.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ u.jsx(
    uc,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: c,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Wo(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const f = a.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(f), hc(f, p) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: Fo(i.paddingLeft),
            paddingEnd: Fo(i.paddingRight)
          }
        });
      }
    }
  );
}), dv = v.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = lt(St, e.__scopeScrollArea), [i, s] = v.useState(), l = v.useRef(null), c = le(t, l, a.onScrollbarYChange);
  return v.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ u.jsx(
    uc,
    {
      "data-orientation": "vertical",
      ...o,
      ref: c,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Wo(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const f = a.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(f), hc(f, p) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: Fo(i.paddingTop),
            paddingEnd: Fo(i.paddingBottom)
          }
        });
      }
    }
  );
}), [fv, lc] = rc(St), uc = v.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: l,
    onDragScroll: c,
    onWheelScroll: d,
    onResize: p,
    ...f
  } = e, h = lt(St, n), [m, g] = v.useState(null), D = le(t, (N) => g(N)), y = v.useRef(null), b = v.useRef(""), w = h.viewport, C = r.content - r.viewport, E = $e(d), F = $e(l), S = $o(p, 10);
  function P(N) {
    if (y.current) {
      const k = N.clientX - y.current.left, L = N.clientY - y.current.top;
      c({ x: k, y: L });
    }
  }
  return v.useEffect(() => {
    const N = (k) => {
      const L = k.target;
      (m == null ? void 0 : m.contains(L)) && E(k, C);
    };
    return document.addEventListener("wheel", N, { passive: !1 }), () => document.removeEventListener("wheel", N, { passive: !1 });
  }, [w, m, C, E]), v.useEffect(F, [r, F]), lr(m, S), lr(h.content, S), /* @__PURE__ */ u.jsx(
    fv,
    {
      scope: n,
      scrollbar: m,
      hasThumb: o,
      onThumbChange: $e(a),
      onThumbPointerUp: $e(i),
      onThumbPositionChange: F,
      onThumbPointerDown: $e(s),
      children: /* @__PURE__ */ u.jsx(
        ne.div,
        {
          ...f,
          ref: D,
          style: { position: "absolute", ...f.style },
          onPointerDown: ee(e.onPointerDown, (N) => {
            N.button === 0 && (N.target.setPointerCapture(N.pointerId), y.current = m.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), P(N));
          }),
          onPointerMove: ee(e.onPointerMove, P),
          onPointerUp: ee(e.onPointerUp, (N) => {
            const k = N.target;
            k.hasPointerCapture(N.pointerId) && k.releasePointerCapture(N.pointerId), document.body.style.webkitUserSelect = b.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), Eo = "ScrollAreaThumb", cc = v.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = lc(Eo, e.__scopeScrollArea);
    return /* @__PURE__ */ u.jsx(mt, { present: n || o.hasThumb, children: /* @__PURE__ */ u.jsx(pv, { ref: t, ...r }) });
  }
), pv = v.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = lt(Eo, n), i = lc(Eo, n), { onThumbPositionChange: s } = i, l = le(
      t,
      (p) => i.onThumbChange(p)
    ), c = v.useRef(), d = $o(() => {
      c.current && (c.current(), c.current = void 0);
    }, 100);
    return v.useEffect(() => {
      const p = a.viewport;
      if (p) {
        const f = () => {
          if (d(), !c.current) {
            const h = gv(p, s);
            c.current = h, s();
          }
        };
        return s(), p.addEventListener("scroll", f), () => p.removeEventListener("scroll", f);
      }
    }, [a.viewport, d, s]), /* @__PURE__ */ u.jsx(
      ne.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: ee(e.onPointerDownCapture, (p) => {
          const h = p.target.getBoundingClientRect(), m = p.clientX - h.left, g = p.clientY - h.top;
          i.onThumbPointerDown({ x: m, y: g });
        }),
        onPointerUp: ee(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
cc.displayName = Eo;
var Mi = "ScrollAreaCorner", dc = v.forwardRef(
  (e, t) => {
    const n = lt(Mi, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ u.jsx(hv, { ...e, ref: t }) : null;
  }
);
dc.displayName = Mi;
var hv = v.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = lt(Mi, n), [a, i] = v.useState(0), [s, l] = v.useState(0), c = !!(a && s);
  return lr(o.scrollbarX, () => {
    var p;
    const d = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(d), l(d);
  }), lr(o.scrollbarY, () => {
    var p;
    const d = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(d), i(d);
  }), c ? /* @__PURE__ */ u.jsx(
    ne.div,
    {
      ...r,
      ref: t,
      style: {
        width: a,
        height: s,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Fo(e) {
  return e ? parseInt(e, 10) : 0;
}
function fc(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Wo(e) {
  const t = fc(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function mv(e, t, n, r = "ltr") {
  const o = Wo(n), a = o / 2, i = t || a, s = o - i, l = n.scrollbar.paddingStart + i, c = n.scrollbar.size - n.scrollbar.paddingEnd - s, d = n.content - n.viewport, p = r === "ltr" ? [0, d] : [d * -1, 0];
  return pc([l, c], p)(e);
}
function Gs(e, t, n = "ltr") {
  const r = Wo(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - r, l = n === "ltr" ? [0, i] : [i * -1, 0], c = Xa(e, l);
  return pc([0, i], [0, s])(c);
}
function pc(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function hc(e, t) {
  return e > 0 && e < t;
}
var gv = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== a.left, s = n.top !== a.top;
    (i || s) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function $o(e, t) {
  const n = $e(e), r = v.useRef(0);
  return v.useEffect(() => () => window.clearTimeout(r.current), []), v.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function lr(e, t) {
  const n = $e(t);
  He(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var mc = oc, vv = ic, Dv = dc;
const yv = v.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  mc,
  {
    ref: r,
    className: J("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx(vv, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ u.jsx(gc, {}),
      /* @__PURE__ */ u.jsx(Dv, {})
    ]
  }
));
yv.displayName = mc.displayName;
const gc = v.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ u.jsx(
  Ri,
  {
    ref: r,
    orientation: t,
    className: J(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ u.jsx(cc, { className: "relative flex-1 rounded-full bg-border" })
  }
));
gc.displayName = Ri.displayName;
function bv(e) {
  const [t, n] = v.useState(!1);
  return v.useEffect(() => {
    function r(a) {
      n(a.matches);
    }
    const o = matchMedia(e);
    return o.addEventListener("change", r), n(o.matches), () => o.removeEventListener("change", r);
  }, [e]), t;
}
var wv = Object.create, Ho = Object.defineProperty, xv = Object.getOwnPropertyDescriptor, Cv = Object.getOwnPropertyNames, Ev = Object.getPrototypeOf, Fv = Object.prototype.hasOwnProperty, vc = (e) => {
  throw TypeError(e);
}, Sv = (e, t) => () => (e && (t = e(e = 0)), t), Bi = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Vo = (e, t) => {
  for (var n in t) Ho(e, n, { get: t[n], enumerable: !0 });
}, Dc = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of Cv(t)) !Fv.call(e, o) && o !== n && Ho(e, o, { get: () => t[o], enumerable: !(r = xv(t, o)) || r.enumerable });
  return e;
}, Yo = (e, t, n) => (n = e != null ? wv(Ev(e)) : {}, Dc(Ho(n, "default", { value: e, enumerable: !0 }), e)), Nv = (e) => Dc(Ho({}, "__esModule", { value: !0 }), e), kv = (e, t, n) => t.has(e) || vc("Cannot " + n), jv = (e, t, n) => t.has(e) ? vc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), jr = (e, t, n) => (kv(e, t, "access private method"), n), Ii = Bi((e, t) => {
  var n = new Proxy(String, { get: () => n });
  t.exports = n;
}), yc = {};
Vo(yc, { default: () => wc, shouldHighlight: () => bc });
var bc, wc, Pv = Sv(() => {
  bc = () => !1, wc = String;
}), _v = Bi((e, t) => {
  var n = String, r = function() {
    return { isColorSupported: !1, reset: n, bold: n, dim: n, italic: n, underline: n, inverse: n, hidden: n, strikethrough: n, black: n, red: n, green: n, yellow: n, blue: n, magenta: n, cyan: n, white: n, gray: n, bgBlack: n, bgRed: n, bgGreen: n, bgYellow: n, bgBlue: n, bgMagenta: n, bgCyan: n, bgWhite: n };
  };
  t.exports = r(), t.exports.createColors = r;
}), Av = Bi((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.codeFrameColumns = h, e.default = m;
  var t = (Pv(), Nv(yc)), n = o(_v(), !0);
  function r(g) {
    if (typeof WeakMap != "function") return null;
    var D = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap();
    return (r = function(b) {
      return b ? y : D;
    })(g);
  }
  function o(g, D) {
    if (g === null || typeof g != "object" && typeof g != "function") return { default: g };
    var y = r(D);
    if (y && y.has(g)) return y.get(g);
    var b = { __proto__: null }, w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var C in g) if (C !== "default" && {}.hasOwnProperty.call(g, C)) {
      var E = w ? Object.getOwnPropertyDescriptor(g, C) : null;
      E && (E.get || E.set) ? Object.defineProperty(b, C, E) : b[C] = g[C];
    }
    return b.default = g, y && y.set(g, b), b;
  }
  var a = n.default, i = (g, D) => (y) => g(D(y)), s;
  function l(g) {
    return g ? (s != null || (s = (0, n.createColors)(!0)), s) : a;
  }
  var c = !1;
  function d(g) {
    return { gutter: g.gray, marker: i(g.red, g.bold), message: i(g.red, g.bold) };
  }
  var p = /\r\n|[\n\r\u2028\u2029]/;
  function f(g, D, y) {
    let b = Object.assign({ column: 0, line: -1 }, g.start), w = Object.assign({}, b, g.end), { linesAbove: C = 2, linesBelow: E = 3 } = y || {}, F = b.line, S = b.column, P = w.line, N = w.column, k = Math.max(F - (C + 1), 0), L = Math.min(D.length, P + E);
    F === -1 && (k = 0), P === -1 && (L = D.length);
    let _ = P - F, T = {};
    if (_) for (let B = 0; B <= _; B++) {
      let W = B + F;
      if (!S) T[W] = !0;
      else if (B === 0) {
        let H = D[W - 1].length;
        T[W] = [S, H - S + 1];
      } else if (B === _) T[W] = [0, N];
      else {
        let H = D[W - B].length;
        T[W] = [0, H];
      }
    }
    else S === N ? S ? T[F] = [S, 0] : T[F] = !0 : T[F] = [S, N - S];
    return { start: k, end: L, markerLines: T };
  }
  function h(g, D, y = {}) {
    let b = (y.highlightCode || y.forceColor) && (0, t.shouldHighlight)(y), w = l(y.forceColor), C = d(w), E = (T, B) => b ? T(B) : B, F = g.split(p), { start: S, end: P, markerLines: N } = f(D, F, y), k = D.start && typeof D.start.column == "number", L = String(P).length, _ = (b ? (0, t.default)(g, y) : g).split(p, P).slice(S, P).map((T, B) => {
      let W = S + 1 + B, H = ` ${` ${W}`.slice(-L)} |`, j = N[W], O = !N[W + 1];
      if (j) {
        let Y = "";
        if (Array.isArray(j)) {
          let ue = T.slice(0, Math.max(j[0] - 1, 0)).replace(/[^\t]/g, " "), oe = j[1] || 1;
          Y = [`
 `, E(C.gutter, H.replace(/\d/g, " ")), " ", ue, E(C.marker, "^").repeat(oe)].join(""), O && y.message && (Y += " " + E(C.message, y.message));
        }
        return [E(C.marker, ">"), E(C.gutter, H), T.length > 0 ? ` ${T}` : "", Y].join("");
      } else return ` ${E(C.gutter, H)}${T.length > 0 ? ` ${T}` : ""}`;
    }).join(`
`);
    return y.message && !k && (_ = `${" ".repeat(L + 1)}${y.message}
${_}`), b ? w.reset(_) : _;
  }
  function m(g, D, y, b = {}) {
    if (!c) {
      c = !0;
      let w = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
      {
        let C = new Error(w);
        C.name = "DeprecationWarning", console.warn(new Error(w));
      }
    }
    return y = Math.max(y, 0), h(g, { start: { column: y, line: D } }, b);
  }
}), Ov = {};
Vo(Ov, { __debug: () => Ty, check: () => Oy, doc: () => sd, format: () => cd, formatWithCursor: () => ud, getSupportInfo: () => Ry, util: () => ld, version: () => uy });
var Rv = (e, t, n, r) => {
  if (!(e && t == null)) return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
}, zo = Rv;
function un() {
}
un.prototype = { diff: function(e, t) {
  var n, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = r.callback;
  typeof r == "function" && (o = r, r = {}), this.options = r;
  var a = this;
  function i(w) {
    return o ? (setTimeout(function() {
      o(void 0, w);
    }, 0), !0) : w;
  }
  e = this.castInput(e), t = this.castInput(t), e = this.removeEmpty(this.tokenize(e)), t = this.removeEmpty(this.tokenize(t));
  var s = t.length, l = e.length, c = 1, d = s + l;
  r.maxEditLength && (d = Math.min(d, r.maxEditLength));
  var p = (n = r.timeout) !== null && n !== void 0 ? n : 1 / 0, f = Date.now() + p, h = [{ oldPos: -1, lastComponent: void 0 }], m = this.extractCommon(h[0], t, e, 0);
  if (h[0].oldPos + 1 >= l && m + 1 >= s) return i([{ value: this.join(t), count: t.length }]);
  var g = -1 / 0, D = 1 / 0;
  function y() {
    for (var w = Math.max(g, -c); w <= Math.min(D, c); w += 2) {
      var C = void 0, E = h[w - 1], F = h[w + 1];
      E && (h[w - 1] = void 0);
      var S = !1;
      if (F) {
        var P = F.oldPos - w;
        S = F && 0 <= P && P < s;
      }
      var N = E && E.oldPos + 1 < l;
      if (!S && !N) {
        h[w] = void 0;
        continue;
      }
      if (!N || S && E.oldPos + 1 < F.oldPos ? C = a.addToPath(F, !0, void 0, 0) : C = a.addToPath(E, void 0, !0, 1), m = a.extractCommon(C, t, e, w), C.oldPos + 1 >= l && m + 1 >= s) return i(Tv(a, C.lastComponent, t, e, a.useLongestToken));
      h[w] = C, C.oldPos + 1 >= l && (D = Math.min(D, w - 1)), m + 1 >= s && (g = Math.max(g, w + 1));
    }
    c++;
  }
  if (o) (function w() {
    setTimeout(function() {
      if (c > d || Date.now() > f) return o();
      y() || w();
    }, 0);
  })();
  else for (; c <= d && Date.now() <= f; ) {
    var b = y();
    if (b) return b;
  }
}, addToPath: function(e, t, n, r) {
  var o = e.lastComponent;
  return o && o.added === t && o.removed === n ? { oldPos: e.oldPos + r, lastComponent: { count: o.count + 1, added: t, removed: n, previousComponent: o.previousComponent } } : { oldPos: e.oldPos + r, lastComponent: { count: 1, added: t, removed: n, previousComponent: o } };
}, extractCommon: function(e, t, n, r) {
  for (var o = t.length, a = n.length, i = e.oldPos, s = i - r, l = 0; s + 1 < o && i + 1 < a && this.equals(t[s + 1], n[i + 1]); ) s++, i++, l++;
  return l && (e.lastComponent = { count: l, previousComponent: e.lastComponent }), e.oldPos = i, s;
}, equals: function(e, t) {
  return this.options.comparator ? this.options.comparator(e, t) : e === t || this.options.ignoreCase && e.toLowerCase() === t.toLowerCase();
}, removeEmpty: function(e) {
  for (var t = [], n = 0; n < e.length; n++) e[n] && t.push(e[n]);
  return t;
}, castInput: function(e) {
  return e;
}, tokenize: function(e) {
  return e.split("");
}, join: function(e) {
  return e.join("");
} };
function Tv(e, t, n, r, o) {
  for (var a = [], i; t; ) a.push(t), i = t.previousComponent, delete t.previousComponent, t = i;
  a.reverse();
  for (var s = 0, l = a.length, c = 0, d = 0; s < l; s++) {
    var p = a[s];
    if (p.removed) {
      if (p.value = e.join(r.slice(d, d + p.count)), d += p.count, s && a[s - 1].added) {
        var f = a[s - 1];
        a[s - 1] = a[s], a[s] = f;
      }
    } else {
      if (!p.added && o) {
        var h = n.slice(c, c + p.count);
        h = h.map(function(g, D) {
          var y = r[d + D];
          return y.length > g.length ? y : g;
        }), p.value = e.join(h);
      } else p.value = e.join(n.slice(c, c + p.count));
      c += p.count, p.added || (d += p.count);
    }
  }
  var m = a[l - 1];
  return l > 1 && typeof m.value == "string" && (m.added || m.removed) && e.equals("", m.value) && (a[l - 2].value += m.value, a.pop()), a;
}
var Xs = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, Ks = /\S/, xc = new un();
xc.equals = function(e, t) {
  return this.options.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e === t || this.options.ignoreWhitespace && !Ks.test(e) && !Ks.test(t);
};
xc.tokenize = function(e) {
  for (var t = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), n = 0; n < t.length - 1; n++) !t[n + 1] && t[n + 2] && Xs.test(t[n]) && Xs.test(t[n + 2]) && (t[n] += t[n + 2], t.splice(n + 1, 2), n--);
  return t;
};
var Cc = new un();
Cc.tokenize = function(e) {
  this.options.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
  var t = [], n = e.split(/(\n|\r\n)/);
  n[n.length - 1] || n.pop();
  for (var r = 0; r < n.length; r++) {
    var o = n[r];
    r % 2 && !this.options.newlineIsToken ? t[t.length - 1] += o : (this.options.ignoreWhitespace && (o = o.trim()), t.push(o));
  }
  return t;
};
var Mv = new un();
Mv.tokenize = function(e) {
  return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var Bv = new un();
Bv.tokenize = function(e) {
  return e.split(/([{}:;,]|\s+)/);
};
function vo(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vo = function(t) {
    return typeof t;
  } : vo = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vo(e);
}
var Iv = Object.prototype.toString, Br = new un();
Br.useLongestToken = !0;
Br.tokenize = Cc.tokenize;
Br.castInput = function(e) {
  var t = this.options, n = t.undefinedReplacement, r = t.stringifyReplacer, o = r === void 0 ? function(a, i) {
    return typeof i > "u" ? n : i;
  } : r;
  return typeof e == "string" ? e : JSON.stringify(Ka(e, null, null, o), o, "  ");
};
Br.equals = function(e, t) {
  return un.prototype.equals.call(Br, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"));
};
function Ka(e, t, n, r, o) {
  t = t || [], n = n || [], r && (e = r(o, e));
  var a;
  for (a = 0; a < t.length; a += 1) if (t[a] === e) return n[a];
  var i;
  if (Iv.call(e) === "[object Array]") {
    for (t.push(e), i = new Array(e.length), n.push(i), a = 0; a < e.length; a += 1) i[a] = Ka(e[a], t, n, r, o);
    return t.pop(), n.pop(), i;
  }
  if (e && e.toJSON && (e = e.toJSON()), vo(e) === "object" && e !== null) {
    t.push(e), i = {}, n.push(i);
    var s = [], l;
    for (l in e) e.hasOwnProperty(l) && s.push(l);
    for (s.sort(), a = 0; a < s.length; a += 1) l = s[a], i[l] = Ka(e[l], t, n, r, l);
    t.pop(), n.pop();
  } else i = e;
  return i;
}
var So = new un();
So.tokenize = function(e) {
  return e.slice();
};
So.join = So.removeEmpty = function(e) {
  return e;
};
function Lv(e, t, n) {
  return So.diff(e, t, n);
}
function Wv(e) {
  let t = e.indexOf("\r");
  return t >= 0 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
}
function Li(e) {
  switch (e) {
    case "cr":
      return "\r";
    case "crlf":
      return `\r
`;
    default:
      return `
`;
  }
}
function Ec(e, t) {
  let n;
  switch (t) {
    case `
`:
      n = /\n/gu;
      break;
    case "\r":
      n = /\r/gu;
      break;
    case `\r
`:
      n = /\r\n/gu;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
  }
  let r = e.match(n);
  return r ? r.length : 0;
}
function $v(e) {
  return zo(!1, e, /\r\n?/gu, `
`);
}
var Ln = "string", Tt = "array", Wn = "cursor", $t = "indent", Ht = "align", Vt = "trim", Je = "group", Nt = "fill", et = "if-break", Yt = "indent-if-break", zt = "line-suffix", Ut = "line-suffix-boundary", Me = "line", kt = "label", st = "break-parent", Fc = /* @__PURE__ */ new Set([Wn, $t, Ht, Vt, Je, Nt, et, Yt, zt, Ut, Me, kt, st]);
function Hv(e) {
  if (typeof e == "string") return Ln;
  if (Array.isArray(e)) return Tt;
  if (!e) return;
  let { type: t } = e;
  if (Fc.has(t)) return t;
}
var $n = Hv, Vv = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function Yv(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if ($n(e)) throw new Error("doc is valid.");
  let n = Object.prototype.toString.call(e);
  if (n !== "[object Object]") return `Unexpected doc '${n}'.`;
  let r = Vv([...Fc].map((o) => `'${o}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
}
var zv = class extends Error {
  constructor(t) {
    super(Yv(t));
    to(this, "name", "InvalidDocError");
    this.doc = t;
  }
}, ur = zv, Js = {};
function Uv(e, t, n, r) {
  let o = [e];
  for (; o.length > 0; ) {
    let a = o.pop();
    if (a === Js) {
      n(o.pop());
      continue;
    }
    n && o.push(a, Js);
    let i = $n(a);
    if (!i) throw new ur(a);
    if ((t == null ? void 0 : t(a)) !== !1) switch (i) {
      case Tt:
      case Nt: {
        let s = i === Tt ? a : a.parts;
        for (let l = s.length, c = l - 1; c >= 0; --c) o.push(s[c]);
        break;
      }
      case et:
        o.push(a.flatContents, a.breakContents);
        break;
      case Je:
        if (r && a.expandedStates) for (let s = a.expandedStates.length, l = s - 1; l >= 0; --l) o.push(a.expandedStates[l]);
        else o.push(a.contents);
        break;
      case Ht:
      case $t:
      case Yt:
      case kt:
      case zt:
        o.push(a.contents);
        break;
      case Ln:
      case Wn:
      case Vt:
      case Ut:
      case Me:
      case st:
        break;
      default:
        throw new ur(a);
    }
  }
}
var Wi = Uv, qv = () => {
}, Gv = qv;
function No(e) {
  return { type: $t, contents: e };
}
function cr(e, t) {
  return { type: Ht, contents: t, n: e };
}
function Sc(e, t = {}) {
  return Gv(t.expandedStates), { type: Je, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function Xv(e) {
  return cr(Number.NEGATIVE_INFINITY, e);
}
function Kv(e) {
  return cr({ type: "root" }, e);
}
function Jv(e) {
  return cr(-1, e);
}
function Qv(e, t) {
  return Sc(e[0], { ...t, expandedStates: e });
}
function Nc(e) {
  return { type: Nt, parts: e };
}
function Zv(e, t = "", n = {}) {
  return { type: et, breakContents: e, flatContents: t, groupId: n.groupId };
}
function eD(e, t) {
  return { type: Yt, contents: e, groupId: t.groupId, negate: t.negate };
}
function Ja(e) {
  return { type: zt, contents: e };
}
var tD = { type: Ut }, Uo = { type: st }, nD = { type: Vt }, $i = { type: Me, hard: !0 }, kc = { type: Me, hard: !0, literal: !0 }, jc = { type: Me }, rD = { type: Me, soft: !0 }, Pn = [$i, Uo], Pc = [kc, Uo], Qa = { type: Wn };
function _c(e, t) {
  let n = [];
  for (let r = 0; r < t.length; r++) r !== 0 && n.push(e), n.push(t[r]);
  return n;
}
function Ac(e, t, n) {
  let r = e;
  if (t > 0) {
    for (let o = 0; o < Math.floor(t / n); ++o) r = No(r);
    r = cr(t % n, r), r = cr(Number.NEGATIVE_INFINITY, r);
  }
  return r;
}
function oD(e, t) {
  return e ? { type: kt, label: e, contents: t } : t;
}
function _t(e) {
  var t;
  if (!e) return "";
  if (Array.isArray(e)) {
    let n = [];
    for (let r of e) if (Array.isArray(r)) n.push(..._t(r));
    else {
      let o = _t(r);
      o !== "" && n.push(o);
    }
    return n;
  }
  return e.type === et ? { ...e, breakContents: _t(e.breakContents), flatContents: _t(e.flatContents) } : e.type === Je ? { ...e, contents: _t(e.contents), expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(_t) } : e.type === Nt ? { type: "fill", parts: e.parts.map(_t) } : e.contents ? { ...e, contents: _t(e.contents) } : e;
}
function aD(e) {
  let t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ new Set();
  return r(_t(e));
  function r(a, i, s) {
    var l, c;
    if (typeof a == "string") return JSON.stringify(a);
    if (Array.isArray(a)) {
      let d = a.map(r).filter(Boolean);
      return d.length === 1 ? d[0] : `[${d.join(", ")}]`;
    }
    if (a.type === Me) {
      let d = ((l = s == null ? void 0 : s[i + 1]) == null ? void 0 : l.type) === st;
      return a.literal ? d ? "literalline" : "literallineWithoutBreakParent" : a.hard ? d ? "hardline" : "hardlineWithoutBreakParent" : a.soft ? "softline" : "line";
    }
    if (a.type === st) return ((c = s == null ? void 0 : s[i - 1]) == null ? void 0 : c.type) === Me && s[i - 1].hard ? void 0 : "breakParent";
    if (a.type === Vt) return "trim";
    if (a.type === $t) return "indent(" + r(a.contents) + ")";
    if (a.type === Ht) return a.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + r(a.contents) + ")" : a.n < 0 ? "dedent(" + r(a.contents) + ")" : a.n.type === "root" ? "markAsRoot(" + r(a.contents) + ")" : "align(" + JSON.stringify(a.n) + ", " + r(a.contents) + ")";
    if (a.type === et) return "ifBreak(" + r(a.breakContents) + (a.flatContents ? ", " + r(a.flatContents) : "") + (a.groupId ? (a.flatContents ? "" : ', ""') + `, { groupId: ${o(a.groupId)} }` : "") + ")";
    if (a.type === Yt) {
      let d = [];
      a.negate && d.push("negate: true"), a.groupId && d.push(`groupId: ${o(a.groupId)}`);
      let p = d.length > 0 ? `, { ${d.join(", ")} }` : "";
      return `indentIfBreak(${r(a.contents)}${p})`;
    }
    if (a.type === Je) {
      let d = [];
      a.break && a.break !== "propagated" && d.push("shouldBreak: true"), a.id && d.push(`id: ${o(a.id)}`);
      let p = d.length > 0 ? `, { ${d.join(", ")} }` : "";
      return a.expandedStates ? `conditionalGroup([${a.expandedStates.map((f) => r(f)).join(",")}]${p})` : `group(${r(a.contents)}${p})`;
    }
    if (a.type === Nt) return `fill([${a.parts.map((d) => r(d)).join(", ")}])`;
    if (a.type === zt) return "lineSuffix(" + r(a.contents) + ")";
    if (a.type === Ut) return "lineSuffixBoundary";
    if (a.type === kt) return `label(${JSON.stringify(a.label)}, ${r(a.contents)})`;
    throw new Error("Unknown doc type " + a.type);
  }
  function o(a) {
    if (typeof a != "symbol") return JSON.stringify(String(a));
    if (a in t) return t[a];
    let i = a.description || "symbol";
    for (let s = 0; ; s++) {
      let l = i + (s > 0 ? ` #${s}` : "");
      if (!n.has(l)) return n.add(l), t[a] = `Symbol.for(${JSON.stringify(l)})`;
    }
  }
}
var iD = (e, t, n) => {
  if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[n < 0 ? t.length + n : n] : t.at(n);
}, Te = iD, sD = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function lD(e) {
  return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function uD(e) {
  return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9800 && e <= 9811 || e === 9855 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var cD = (e) => !(lD(e) || uD(e)), dD = /[^\x20-\x7F]/u;
function fD(e) {
  if (!e) return 0;
  if (!dD.test(e)) return e.length;
  e = e.replace(sD(), "  ");
  let t = 0;
  for (let n of e) {
    let r = n.codePointAt(0);
    r <= 31 || r >= 127 && r <= 159 || r >= 768 && r <= 879 || (t += cD(r) ? 1 : 2);
  }
  return t;
}
var Hi = fD;
function qo(e, t) {
  if (typeof e == "string") return t(e);
  let n = /* @__PURE__ */ new Map();
  return r(e);
  function r(a) {
    if (n.has(a)) return n.get(a);
    let i = o(a);
    return n.set(a, i), i;
  }
  function o(a) {
    switch ($n(a)) {
      case Tt:
        return t(a.map(r));
      case Nt:
        return t({ ...a, parts: a.parts.map(r) });
      case et:
        return t({ ...a, breakContents: r(a.breakContents), flatContents: r(a.flatContents) });
      case Je: {
        let { expandedStates: i, contents: s } = a;
        return i ? (i = i.map(r), s = i[0]) : s = r(s), t({ ...a, contents: s, expandedStates: i });
      }
      case Ht:
      case $t:
      case Yt:
      case kt:
      case zt:
        return t({ ...a, contents: r(a.contents) });
      case Ln:
      case Wn:
      case Vt:
      case Ut:
      case Me:
      case st:
        return t(a);
      default:
        throw new ur(a);
    }
  }
}
function Vi(e, t, n) {
  let r = n, o = !1;
  function a(i) {
    if (o) return !1;
    let s = t(i);
    s !== void 0 && (o = !0, r = s);
  }
  return Wi(e, a), r;
}
function pD(e) {
  if (e.type === Je && e.break || e.type === Me && e.hard || e.type === st) return !0;
}
function hD(e) {
  return Vi(e, pD, !1);
}
function Qs(e) {
  if (e.length > 0) {
    let t = Te(!1, e, -1);
    !t.expandedStates && !t.break && (t.break = "propagated");
  }
  return null;
}
function mD(e) {
  let t = /* @__PURE__ */ new Set(), n = [];
  function r(a) {
    if (a.type === st && Qs(n), a.type === Je) {
      if (n.push(a), t.has(a)) return !1;
      t.add(a);
    }
  }
  function o(a) {
    a.type === Je && n.pop().break && Qs(n);
  }
  Wi(e, r, o, !0);
}
function gD(e) {
  return e.type === Me && !e.hard ? e.soft ? "" : " " : e.type === et ? e.flatContents : e;
}
function vD(e) {
  return qo(e, gD);
}
function Zs(e) {
  for (e = [...e]; e.length >= 2 && Te(!1, e, -2).type === Me && Te(!1, e, -1).type === st; ) e.length -= 2;
  if (e.length > 0) {
    let t = Rr(Te(!1, e, -1));
    e[e.length - 1] = t;
  }
  return e;
}
function Rr(e) {
  switch ($n(e)) {
    case $t:
    case Yt:
    case Je:
    case zt:
    case kt: {
      let t = Rr(e.contents);
      return { ...e, contents: t };
    }
    case et:
      return { ...e, breakContents: Rr(e.breakContents), flatContents: Rr(e.flatContents) };
    case Nt:
      return { ...e, parts: Zs(e.parts) };
    case Tt:
      return Zs(e);
    case Ln:
      return e.replace(/[\n\r]*$/u, "");
    case Ht:
    case Wn:
    case Vt:
    case Ut:
    case Me:
    case st:
      break;
    default:
      throw new ur(e);
  }
  return e;
}
function Oc(e) {
  return Rr(yD(e));
}
function DD(e) {
  switch ($n(e)) {
    case Nt:
      if (e.parts.every((t) => t === "")) return "";
      break;
    case Je:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === Je && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
      break;
    case Ht:
    case $t:
    case Yt:
    case zt:
      if (!e.contents) return "";
      break;
    case et:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case Tt: {
      let t = [];
      for (let n of e) {
        if (!n) continue;
        let [r, ...o] = Array.isArray(n) ? n : [n];
        typeof r == "string" && typeof Te(!1, t, -1) == "string" ? t[t.length - 1] += r : t.push(r), t.push(...o);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case Ln:
    case Wn:
    case Vt:
    case Ut:
    case Me:
    case kt:
    case st:
      break;
    default:
      throw new ur(e);
  }
  return e;
}
function yD(e) {
  return qo(e, (t) => DD(t));
}
function bD(e, t = Pc) {
  return qo(e, (n) => typeof n == "string" ? _c(t, n.split(`
`)) : n);
}
function wD(e) {
  if (e.type === Me) return !0;
}
function xD(e) {
  return Vi(e, wD, !1);
}
function Rc(e, t) {
  return e.type === kt ? { ...e, contents: t(e.contents) } : t(e);
}
var Ge = Symbol("MODE_BREAK"), Dt = Symbol("MODE_FLAT"), Tr = Symbol("cursor");
function Tc() {
  return { value: "", length: 0, queue: [] };
}
function CD(e, t) {
  return Za(e, { type: "indent" }, t);
}
function ED(e, t, n) {
  return t === Number.NEGATIVE_INFINITY ? e.root || Tc() : t < 0 ? Za(e, { type: "dedent" }, n) : t ? t.type === "root" ? { ...e, root: e } : Za(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, n) : e;
}
function Za(e, t, n) {
  let r = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], o = "", a = 0, i = 0, s = 0;
  for (let m of r) switch (m.type) {
    case "indent":
      d(), n.useTabs ? l(1) : c(n.tabWidth);
      break;
    case "stringAlign":
      d(), o += m.n, a += m.n.length;
      break;
    case "numberAlign":
      i += 1, s += m.n;
      break;
    default:
      throw new Error(`Unexpected type '${m.type}'`);
  }
  return f(), { ...e, value: o, length: a, queue: r };
  function l(m) {
    o += "	".repeat(m), a += n.tabWidth * m;
  }
  function c(m) {
    o += " ".repeat(m), a += m;
  }
  function d() {
    n.useTabs ? p() : f();
  }
  function p() {
    i > 0 && l(i), h();
  }
  function f() {
    s > 0 && c(s), h();
  }
  function h() {
    i = 0, s = 0;
  }
}
function ei(e) {
  let t = 0, n = 0, r = e.length;
  e: for (; r--; ) {
    let o = e[r];
    if (o === Tr) {
      n++;
      continue;
    }
    for (let a = o.length - 1; a >= 0; a--) {
      let i = o[a];
      if (i === " " || i === "	") t++;
      else {
        e[r] = o.slice(0, a + 1);
        break e;
      }
    }
  }
  if (t > 0 || n > 0) for (e.length = r + 1; n-- > 0; ) e.push(Tr);
  return t;
}
function fo(e, t, n, r, o, a) {
  if (n === Number.POSITIVE_INFINITY) return !0;
  let i = t.length, s = [e], l = [];
  for (; n >= 0; ) {
    if (s.length === 0) {
      if (i === 0) return !0;
      s.push(t[--i]);
      continue;
    }
    let { mode: c, doc: d } = s.pop(), p = $n(d);
    switch (p) {
      case Ln:
        l.push(d), n -= Hi(d);
        break;
      case Tt:
      case Nt: {
        let f = p === Tt ? d : d.parts;
        for (let h = f.length - 1; h >= 0; h--) s.push({ mode: c, doc: f[h] });
        break;
      }
      case $t:
      case Ht:
      case Yt:
      case kt:
        s.push({ mode: c, doc: d.contents });
        break;
      case Vt:
        n += ei(l);
        break;
      case Je: {
        if (a && d.break) return !1;
        let f = d.break ? Ge : c, h = d.expandedStates && f === Ge ? Te(!1, d.expandedStates, -1) : d.contents;
        s.push({ mode: f, doc: h });
        break;
      }
      case et: {
        let f = (d.groupId ? o[d.groupId] || Dt : c) === Ge ? d.breakContents : d.flatContents;
        f && s.push({ mode: c, doc: f });
        break;
      }
      case Me:
        if (c === Ge || d.hard) return !0;
        d.soft || (l.push(" "), n--);
        break;
      case zt:
        r = !0;
        break;
      case Ut:
        if (r) return !1;
        break;
    }
  }
  return !1;
}
function Go(e, t) {
  let n = {}, r = t.printWidth, o = Li(t.endOfLine), a = 0, i = [{ ind: Tc(), mode: Ge, doc: e }], s = [], l = !1, c = [], d = 0;
  for (mD(e); i.length > 0; ) {
    let { ind: f, mode: h, doc: m } = i.pop();
    switch ($n(m)) {
      case Ln: {
        let g = o !== `
` ? zo(!1, m, `
`, o) : m;
        s.push(g), i.length > 0 && (a += Hi(g));
        break;
      }
      case Tt:
        for (let g = m.length - 1; g >= 0; g--) i.push({ ind: f, mode: h, doc: m[g] });
        break;
      case Wn:
        if (d >= 2) throw new Error("There are too many 'cursor' in doc.");
        s.push(Tr), d++;
        break;
      case $t:
        i.push({ ind: CD(f, t), mode: h, doc: m.contents });
        break;
      case Ht:
        i.push({ ind: ED(f, m.n, t), mode: h, doc: m.contents });
        break;
      case Vt:
        a -= ei(s);
        break;
      case Je:
        switch (h) {
          case Dt:
            if (!l) {
              i.push({ ind: f, mode: m.break ? Ge : Dt, doc: m.contents });
              break;
            }
          case Ge: {
            l = !1;
            let g = { ind: f, mode: Dt, doc: m.contents }, D = r - a, y = c.length > 0;
            if (!m.break && fo(g, i, D, y, n)) i.push(g);
            else if (m.expandedStates) {
              let b = Te(!1, m.expandedStates, -1);
              if (m.break) {
                i.push({ ind: f, mode: Ge, doc: b });
                break;
              } else for (let w = 1; w < m.expandedStates.length + 1; w++) if (w >= m.expandedStates.length) {
                i.push({ ind: f, mode: Ge, doc: b });
                break;
              } else {
                let C = m.expandedStates[w], E = { ind: f, mode: Dt, doc: C };
                if (fo(E, i, D, y, n)) {
                  i.push(E);
                  break;
                }
              }
            } else i.push({ ind: f, mode: Ge, doc: m.contents });
            break;
          }
        }
        m.id && (n[m.id] = Te(!1, i, -1).mode);
        break;
      case Nt: {
        let g = r - a, { parts: D } = m;
        if (D.length === 0) break;
        let [y, b] = D, w = { ind: f, mode: Dt, doc: y }, C = { ind: f, mode: Ge, doc: y }, E = fo(w, [], g, c.length > 0, n, !0);
        if (D.length === 1) {
          E ? i.push(w) : i.push(C);
          break;
        }
        let F = { ind: f, mode: Dt, doc: b }, S = { ind: f, mode: Ge, doc: b };
        if (D.length === 2) {
          E ? i.push(F, w) : i.push(S, C);
          break;
        }
        D.splice(0, 2);
        let P = { ind: f, mode: h, doc: Nc(D) }, N = D[0];
        fo({ ind: f, mode: Dt, doc: [y, b, N] }, [], g, c.length > 0, n, !0) ? i.push(P, F, w) : E ? i.push(P, S, w) : i.push(P, S, C);
        break;
      }
      case et:
      case Yt: {
        let g = m.groupId ? n[m.groupId] : h;
        if (g === Ge) {
          let D = m.type === et ? m.breakContents : m.negate ? m.contents : No(m.contents);
          D && i.push({ ind: f, mode: h, doc: D });
        }
        if (g === Dt) {
          let D = m.type === et ? m.flatContents : m.negate ? No(m.contents) : m.contents;
          D && i.push({ ind: f, mode: h, doc: D });
        }
        break;
      }
      case zt:
        c.push({ ind: f, mode: h, doc: m.contents });
        break;
      case Ut:
        c.length > 0 && i.push({ ind: f, mode: h, doc: $i });
        break;
      case Me:
        switch (h) {
          case Dt:
            if (m.hard) l = !0;
            else {
              m.soft || (s.push(" "), a += 1);
              break;
            }
          case Ge:
            if (c.length > 0) {
              i.push({ ind: f, mode: h, doc: m }, ...c.reverse()), c.length = 0;
              break;
            }
            m.literal ? f.root ? (s.push(o, f.root.value), a = f.root.length) : (s.push(o), a = 0) : (a -= ei(s), s.push(o + f.value), a = f.length);
            break;
        }
        break;
      case kt:
        i.push({ ind: f, mode: h, doc: m.contents });
        break;
      case st:
        break;
      default:
        throw new ur(m);
    }
    i.length === 0 && c.length > 0 && (i.push(...c.reverse()), c.length = 0);
  }
  let p = s.indexOf(Tr);
  if (p !== -1) {
    let f = s.indexOf(Tr, p + 1), h = s.slice(0, p).join(""), m = s.slice(p + 1, f).join(""), g = s.slice(f + 1).join("");
    return { formatted: h + m + g, cursorNodeStart: h.length, cursorNodeText: m };
  }
  return { formatted: s.join("") };
}
function FD(e, t, n = 0) {
  let r = 0;
  for (let o = n; o < e.length; ++o) e[o] === "	" ? r = r + t - r % t : r++;
  return r;
}
var Yi = FD, Cn, ti, Do, SD = class {
  constructor(e) {
    jv(this, Cn), this.stack = [e];
  }
  get key() {
    let { stack: e, siblings: t } = this;
    return Te(!1, e, t === null ? -2 : -4) ?? null;
  }
  get index() {
    return this.siblings === null ? null : Te(!1, this.stack, -2);
  }
  get node() {
    return Te(!1, this.stack, -1);
  }
  get parent() {
    return this.getNode(1);
  }
  get grandparent() {
    return this.getNode(2);
  }
  get isInArray() {
    return this.siblings !== null;
  }
  get siblings() {
    let { stack: e } = this, t = Te(!1, e, -3);
    return Array.isArray(t) ? t : null;
  }
  get next() {
    let { siblings: e } = this;
    return e === null ? null : e[this.index + 1];
  }
  get previous() {
    let { siblings: e } = this;
    return e === null ? null : e[this.index - 1];
  }
  get isFirst() {
    return this.index === 0;
  }
  get isLast() {
    let { siblings: e, index: t } = this;
    return e !== null && t === e.length - 1;
  }
  get isRoot() {
    return this.stack.length === 1;
  }
  get root() {
    return this.stack[0];
  }
  get ancestors() {
    return [...jr(this, Cn, Do).call(this)];
  }
  getName() {
    let { stack: e } = this, { length: t } = e;
    return t > 1 ? Te(!1, e, -2) : null;
  }
  getValue() {
    return Te(!1, this.stack, -1);
  }
  getNode(e = 0) {
    let t = jr(this, Cn, ti).call(this, e);
    return t === -1 ? null : this.stack[t];
  }
  getParentNode(e = 0) {
    return this.getNode(e + 1);
  }
  call(e, ...t) {
    let { stack: n } = this, { length: r } = n, o = Te(!1, n, -1);
    for (let a of t) o = o[a], n.push(a, o);
    try {
      return e(this);
    } finally {
      n.length = r;
    }
  }
  callParent(e, t = 0) {
    let n = jr(this, Cn, ti).call(this, t + 1), r = this.stack.splice(n + 1);
    try {
      return e(this);
    } finally {
      this.stack.push(...r);
    }
  }
  each(e, ...t) {
    let { stack: n } = this, { length: r } = n, o = Te(!1, n, -1);
    for (let a of t) o = o[a], n.push(a, o);
    try {
      for (let a = 0; a < o.length; ++a) n.push(a, o[a]), e(this, a, o), n.length -= 2;
    } finally {
      n.length = r;
    }
  }
  map(e, ...t) {
    let n = [];
    return this.each((r, o, a) => {
      n[o] = e(r, o, a);
    }, ...t), n;
  }
  match(...e) {
    let t = this.stack.length - 1, n = null, r = this.stack[t--];
    for (let o of e) {
      if (r === void 0) return !1;
      let a = null;
      if (typeof n == "number" && (a = n, n = this.stack[t--], r = this.stack[t--]), o && !o(r, n, a)) return !1;
      n = this.stack[t--], r = this.stack[t--];
    }
    return !0;
  }
  findAncestor(e) {
    for (let t of jr(this, Cn, Do).call(this)) if (e(t)) return t;
  }
  hasAncestor(e) {
    for (let t of jr(this, Cn, Do).call(this)) if (e(t)) return !0;
    return !1;
  }
};
Cn = /* @__PURE__ */ new WeakSet(), ti = function(e) {
  let { stack: t } = this;
  for (let n = t.length - 1; n >= 0; n -= 2) if (!Array.isArray(t[n]) && --e < 0) return n;
  return -1;
}, Do = function* () {
  let { stack: e } = this;
  for (let t = e.length - 3; t >= 0; t -= 2) {
    let n = e[t];
    Array.isArray(n) || (yield n);
  }
};
var ND = SD, Mc = new Proxy(() => {
}, { get: () => Mc }), ni = Mc;
function kD(e) {
  return e !== null && typeof e == "object";
}
var jD = kD;
function* Bc(e, t) {
  let { getVisitorKeys: n, filter: r = () => !0 } = t, o = (a) => jD(a) && r(a);
  for (let a of n(e)) {
    let i = e[a];
    if (Array.isArray(i)) for (let s of i) o(s) && (yield s);
    else o(i) && (yield i);
  }
}
function* PD(e, t) {
  let n = [e];
  for (let r = 0; r < n.length; r++) {
    let o = n[r];
    for (let a of Bc(o, t)) yield a, n.push(a);
  }
}
function Hr(e) {
  return (t, n, r) => {
    let o = !!(r != null && r.backwards);
    if (n === !1) return !1;
    let { length: a } = t, i = n;
    for (; i >= 0 && i < a; ) {
      let s = t.charAt(i);
      if (e instanceof RegExp) {
        if (!e.test(s)) return i;
      } else if (!e.includes(s)) return i;
      o ? i-- : i++;
    }
    return i === -1 || i === a ? i : !1;
  };
}
var _D = Hr(/\s/u), rn = Hr(" 	"), Ic = Hr(",; 	"), Lc = Hr(/[^\n\r]/u);
function AD(e, t, n) {
  let r = !!(n != null && n.backwards);
  if (t === !1) return !1;
  let o = e.charAt(t);
  if (r) {
    if (e.charAt(t - 1) === "\r" && o === `
`) return t - 2;
    if (o === `
` || o === "\r" || o === "\u2028" || o === "\u2029") return t - 1;
  } else {
    if (o === "\r" && e.charAt(t + 1) === `
`) return t + 2;
    if (o === `
` || o === "\r" || o === "\u2028" || o === "\u2029") return t + 1;
  }
  return t;
}
var Rn = AD;
function OD(e, t, n = {}) {
  let r = rn(e, n.backwards ? t - 1 : t, n), o = Rn(e, r, n);
  return r !== o;
}
var tn = OD;
function RD(e) {
  return Array.isArray(e) && e.length > 0;
}
var TD = RD, Wc = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]), MD = (e) => Object.keys(e).filter((t) => !Wc.has(t));
function BD(e) {
  return e ? (t) => e(t, Wc) : MD;
}
var Xo = BD;
function ID(e) {
  let t = e.type || e.kind || "(unknown type)", n = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
  return n.length > 20 && (n = n.slice(0, 19) + "…"), t + (n ? " " + n : "");
}
function zi(e, t) {
  (e.comments ?? (e.comments = [])).push(t), t.printed = !1, t.nodeDescription = ID(e);
}
function Qn(e, t) {
  t.leading = !0, t.trailing = !1, zi(e, t);
}
function En(e, t, n) {
  t.leading = !1, t.trailing = !1, n && (t.marker = n), zi(e, t);
}
function Zn(e, t) {
  t.leading = !1, t.trailing = !0, zi(e, t);
}
var Ea = /* @__PURE__ */ new WeakMap();
function Ui(e, t) {
  if (Ea.has(e)) return Ea.get(e);
  let { printer: { getCommentChildNodes: n, canAttachComment: r, getVisitorKeys: o }, locStart: a, locEnd: i } = t;
  if (!r) return [];
  let s = ((n == null ? void 0 : n(e, t)) ?? [...Bc(e, { getVisitorKeys: Xo(o) })]).flatMap((l) => r(l) ? [l] : Ui(l, t));
  return s.sort((l, c) => a(l) - a(c) || i(l) - i(c)), Ea.set(e, s), s;
}
function $c(e, t, n, r) {
  let { locStart: o, locEnd: a } = n, i = o(t), s = a(t), l = Ui(e, n), c, d, p = 0, f = l.length;
  for (; p < f; ) {
    let h = p + f >> 1, m = l[h], g = o(m), D = a(m);
    if (g <= i && s <= D) return $c(m, t, n, m);
    if (D <= i) {
      c = m, p = h + 1;
      continue;
    }
    if (s <= g) {
      d = m, f = h;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if ((r == null ? void 0 : r.type) === "TemplateLiteral") {
    let { quasis: h } = r, m = Sa(h, t, n);
    c && Sa(h, c, n) !== m && (c = null), d && Sa(h, d, n) !== m && (d = null);
  }
  return { enclosingNode: r, precedingNode: c, followingNode: d };
}
var Fa = () => !1;
function LD(e, t) {
  let { comments: n } = e;
  if (delete e.comments, !TD(n) || !t.printer.canAttachComment) return;
  let r = [], { locStart: o, locEnd: a, printer: { experimentalFeatures: { avoidAstMutation: i = !1 } = {}, handleComments: s = {} }, originalText: l } = t, { ownLine: c = Fa, endOfLine: d = Fa, remaining: p = Fa } = s, f = n.map((h, m) => ({ ...$c(e, h, t), comment: h, text: l, options: t, ast: e, isLastComment: n.length - 1 === m }));
  for (let [h, m] of f.entries()) {
    let { comment: g, precedingNode: D, enclosingNode: y, followingNode: b, text: w, options: C, ast: E, isLastComment: F } = m;
    if (C.parser === "json" || C.parser === "json5" || C.parser === "jsonc" || C.parser === "__js_expression" || C.parser === "__ts_expression" || C.parser === "__vue_expression" || C.parser === "__vue_ts_expression") {
      if (o(g) - o(E) <= 0) {
        Qn(E, g);
        continue;
      }
      if (a(g) - a(E) >= 0) {
        Zn(E, g);
        continue;
      }
    }
    let S;
    if (i ? S = [m] : (g.enclosingNode = y, g.precedingNode = D, g.followingNode = b, S = [g, w, C, E, F]), WD(w, C, f, h)) g.placement = "ownLine", c(...S) || (b ? Qn(b, g) : D ? Zn(D, g) : En(y || E, g));
    else if ($D(w, C, f, h)) g.placement = "endOfLine", d(...S) || (D ? Zn(D, g) : b ? Qn(b, g) : En(y || E, g));
    else if (g.placement = "remaining", !p(...S)) if (D && b) {
      let P = r.length;
      P > 0 && r[P - 1].followingNode !== b && el(r, C), r.push(m);
    } else D ? Zn(D, g) : b ? Qn(b, g) : En(y || E, g);
  }
  if (el(r, t), !i) for (let h of n) delete h.precedingNode, delete h.enclosingNode, delete h.followingNode;
}
var Hc = (e) => !/[\S\n\u2028\u2029]/u.test(e);
function WD(e, t, n, r) {
  let { comment: o, precedingNode: a } = n[r], { locStart: i, locEnd: s } = t, l = i(o);
  if (a) for (let c = r - 1; c >= 0; c--) {
    let { comment: d, precedingNode: p } = n[c];
    if (p !== a || !Hc(e.slice(s(d), l))) break;
    l = i(d);
  }
  return tn(e, l, { backwards: !0 });
}
function $D(e, t, n, r) {
  let { comment: o, followingNode: a } = n[r], { locStart: i, locEnd: s } = t, l = s(o);
  if (a) for (let c = r + 1; c < n.length; c++) {
    let { comment: d, followingNode: p } = n[c];
    if (p !== a || !Hc(e.slice(l, i(d)))) break;
    l = s(d);
  }
  return tn(e, l);
}
function el(e, t) {
  var n, r;
  let o = e.length;
  if (o === 0) return;
  let { precedingNode: a, followingNode: i } = e[0], s = t.locStart(i), l;
  for (l = o; l > 0; --l) {
    let { comment: c, precedingNode: d, followingNode: p } = e[l - 1];
    ni.strictEqual(d, a), ni.strictEqual(p, i);
    let f = t.originalText.slice(t.locEnd(c), s);
    if (((r = (n = t.printer).isGap) == null ? void 0 : r.call(n, f, t)) ?? /^[\s(]*$/u.test(f)) s = t.locStart(c);
    else break;
  }
  for (let [c, { comment: d }] of e.entries()) c < l ? Zn(a, d) : Qn(i, d);
  for (let c of [a, i]) c.comments && c.comments.length > 1 && c.comments.sort((d, p) => t.locStart(d) - t.locStart(p));
  e.length = 0;
}
function Sa(e, t, n) {
  let r = n.locStart(t) - 1;
  for (let o = 1; o < e.length; ++o) if (r < n.locStart(e[o])) return o - 1;
  return 0;
}
function HD(e, t) {
  let n = t - 1;
  n = rn(e, n, { backwards: !0 }), n = Rn(e, n, { backwards: !0 }), n = rn(e, n, { backwards: !0 });
  let r = Rn(e, n, { backwards: !0 });
  return n !== r;
}
var qi = HD;
function Vc(e, t) {
  let n = e.node;
  return n.printed = !0, t.printer.printComment(e, t);
}
function VD(e, t) {
  var n;
  let r = e.node, o = [Vc(e, t)], { printer: a, originalText: i, locStart: s, locEnd: l } = t;
  if ((n = a.isBlockComment) != null && n.call(a, r)) {
    let d = tn(i, l(r)) ? tn(i, s(r), { backwards: !0 }) ? Pn : jc : " ";
    o.push(d);
  } else o.push(Pn);
  let c = Rn(i, rn(i, l(r)));
  return c !== !1 && tn(i, c) && o.push(Pn), o;
}
function YD(e, t, n) {
  var r;
  let o = e.node, a = Vc(e, t), { printer: i, originalText: s, locStart: l } = t, c = (r = i.isBlockComment) == null ? void 0 : r.call(i, o);
  if (n != null && n.hasLineSuffix && !(n != null && n.isBlock) || tn(s, l(o), { backwards: !0 })) {
    let d = qi(s, l(o));
    return { doc: Ja([Pn, d ? Pn : "", a]), isBlock: c, hasLineSuffix: !0 };
  }
  return !c || n != null && n.hasLineSuffix ? { doc: [Ja([" ", a]), Uo], isBlock: c, hasLineSuffix: !0 } : { doc: [" ", a], isBlock: c, hasLineSuffix: !1 };
}
function zD(e, t) {
  let n = e.node;
  if (!n) return {};
  let r = t[Symbol.for("printedComments")];
  if ((n.comments || []).filter((s) => !r.has(s)).length === 0) return { leading: "", trailing: "" };
  let o = [], a = [], i;
  return e.each(() => {
    let s = e.node;
    if (r != null && r.has(s)) return;
    let { leading: l, trailing: c } = s;
    l ? o.push(VD(e, t)) : c && (i = YD(e, t, i), a.push(i.doc));
  }, "comments"), { leading: o, trailing: a };
}
function UD(e, t, n) {
  let { leading: r, trailing: o } = zD(e, n);
  return !r && !o ? t : Rc(t, (a) => [r, a, o]);
}
function qD(e) {
  let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: n } = e;
  for (let r of t) {
    if (!r.printed && !n.has(r)) throw new Error('Comment "' + r.value.trim() + '" was not printed. Please report this error!');
    delete r.printed;
  }
}
var Yc = class extends Error {
  constructor() {
    super(...arguments);
    to(this, "name", "ConfigError");
  }
}, tl = class extends Error {
  constructor() {
    super(...arguments);
    to(this, "name", "UndefinedParserError");
  }
}, GD = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }] }, plugins: { type: "path", array: !0, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: !1, description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`, cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
function zc({ plugins: e = [], showDeprecated: t = !1 } = {}) {
  let n = e.flatMap((o) => o.languages ?? []), r = [];
  for (let o of KD(Object.assign({}, ...e.map(({ options: a }) => a), GD))) !t && o.deprecated || (Array.isArray(o.choices) && (t || (o.choices = o.choices.filter((a) => !a.deprecated)), o.name === "parser" && (o.choices = [...o.choices, ...XD(o.choices, n, e)])), o.pluginDefaults = Object.fromEntries(e.filter((a) => {
    var i;
    return ((i = a.defaultOptions) == null ? void 0 : i[o.name]) !== void 0;
  }).map((a) => [a.name, a.defaultOptions[o.name]])), r.push(o));
  return { languages: n, options: r };
}
function* XD(e, t, n) {
  let r = new Set(e.map((o) => o.value));
  for (let o of t) if (o.parsers) {
    for (let a of o.parsers) if (!r.has(a)) {
      r.add(a);
      let i = n.find((l) => l.parsers && Object.prototype.hasOwnProperty.call(l.parsers, a)), s = o.name;
      i != null && i.name && (s += ` (plugin: ${i.name})`), yield { value: a, description: s };
    }
  }
}
function KD(e) {
  let t = [];
  for (let [n, r] of Object.entries(e)) {
    let o = { name: n, ...r };
    Array.isArray(o.default) && (o.default = Te(!1, o.default, -1).value), t.push(o);
  }
  return t;
}
var JD = (e) => String(e).split(/[/\\]/u).pop();
function nl(e, t) {
  if (!t) return;
  let n = JD(t).toLowerCase();
  return e.find(({ filenames: r }) => r == null ? void 0 : r.some((o) => o.toLowerCase() === n)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.some((o) => n.endsWith(o)));
}
function QD(e, t) {
  if (t) return e.find(({ name: n }) => n.toLowerCase() === t) ?? e.find(({ aliases: n }) => n == null ? void 0 : n.includes(t)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.includes(`.${t}`));
}
function ZD(e, t) {
  let n = e.plugins.flatMap((o) => o.languages ?? []), r = QD(n, t.language) ?? nl(n, t.physicalFile) ?? nl(n, t.file) ?? (t.physicalFile, void 0);
  return r == null ? void 0 : r.parsers[0];
}
var e0 = ZD, er = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
  if (e === null || typeof e != "object") return JSON.stringify(e);
  if (Array.isArray(e)) return `[${e.map((n) => er.value(n)).join(", ")}]`;
  let t = Object.keys(e);
  return t.length === 0 ? "{}" : `{ ${t.map((n) => `${er.key(n)}: ${er.value(e[n])}`).join(", ")} }`;
}, pair: ({ key: e, value: t }) => er.value({ [e]: t }) }, rl = Yo(Ii()), t0 = (e, t, { descriptor: n }) => {
  let r = [`${rl.default.yellow(typeof e == "string" ? n.key(e) : n.pair(e))} is deprecated`];
  return t && r.push(`we now treat it as ${rl.default.blue(typeof t == "string" ? n.key(t) : n.pair(t))}`), r.join("; ") + ".";
}, tr = Yo(Ii()), Uc = Symbol.for("vnopts.VALUE_NOT_EXIST"), yo = Symbol.for("vnopts.VALUE_UNCHANGED"), ol = " ".repeat(2), n0 = (e, t, n) => {
  let { text: r, list: o } = n.normalizeExpectedResult(n.schemas[e].expected(n)), a = [];
  return r && a.push(al(e, t, r, n.descriptor)), o && a.push([al(e, t, o.title, n.descriptor)].concat(o.values.map((i) => qc(i, n.loggerPrintWidth))).join(`
`)), Gc(a, n.loggerPrintWidth);
};
function al(e, t, n, r) {
  return [`Invalid ${tr.default.red(r.key(e))} value.`, `Expected ${tr.default.blue(n)},`, `but received ${t === Uc ? tr.default.gray("nothing") : tr.default.red(r.value(t))}.`].join(" ");
}
function qc({ text: e, list: t }, n) {
  let r = [];
  return e && r.push(`- ${tr.default.blue(e)}`), t && r.push([`- ${tr.default.blue(t.title)}:`].concat(t.values.map((o) => qc(o, n - ol.length).replace(/^|\n/g, `$&${ol}`))).join(`
`)), Gc(r, n);
}
function Gc(e, t) {
  if (e.length === 1) return e[0];
  let [n, r] = e, [o, a] = e.map((i) => i.split(`
`, 1)[0].length);
  return o > t && o > a ? r : n;
}
var il = Yo(Ii()), Na = [], sl = [];
function r0(e, t) {
  if (e === t) return 0;
  let n = e;
  e.length > t.length && (e = t, t = n);
  let r = e.length, o = t.length;
  for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-o); ) r--, o--;
  let a = 0;
  for (; a < r && e.charCodeAt(a) === t.charCodeAt(a); ) a++;
  if (r -= a, o -= a, r === 0) return o;
  let i, s, l, c, d = 0, p = 0;
  for (; d < r; ) sl[d] = e.charCodeAt(a + d), Na[d] = ++d;
  for (; p < o; ) for (i = t.charCodeAt(a + p), l = p++, s = p, d = 0; d < r; d++) c = i === sl[d] ? l : l + 1, l = Na[d], s = Na[d] = l > s ? c > s ? s + 1 : c : c > l ? l + 1 : c;
  return s;
}
var Xc = (e, t, { descriptor: n, logger: r, schemas: o }) => {
  let a = [`Ignored unknown option ${il.default.yellow(n.pair({ key: e, value: t }))}.`], i = Object.keys(o).sort().find((s) => r0(e, s) < 3);
  i && a.push(`Did you mean ${il.default.blue(n.key(i))}?`), r.warn(a.join(" "));
}, o0 = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
function a0(e, t) {
  let n = new e(t), r = Object.create(n);
  for (let o of o0) o in t && (r[o] = i0(t[o], n, cn.prototype[o].length));
  return r;
}
var cn = class {
  static create(e) {
    return a0(this, e);
  }
  constructor(e) {
    this.name = e.name;
  }
  default(e) {
  }
  expected(e) {
    return "nothing";
  }
  validate(e, t) {
    return !1;
  }
  deprecated(e, t) {
    return !1;
  }
  forward(e, t) {
  }
  redirect(e, t) {
  }
  overlap(e, t, n) {
    return e;
  }
  preprocess(e, t) {
    return e;
  }
  postprocess(e, t) {
    return yo;
  }
};
function i0(e, t, n) {
  return typeof e == "function" ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1)) : () => e;
}
var s0 = class extends cn {
  constructor(e) {
    super(e), this._sourceName = e.sourceName;
  }
  expected(e) {
    return e.schemas[this._sourceName].expected(e);
  }
  validate(e, t) {
    return t.schemas[this._sourceName].validate(e, t);
  }
  redirect(e, t) {
    return this._sourceName;
  }
}, l0 = class extends cn {
  expected() {
    return "anything";
  }
  validate() {
    return !0;
  }
}, u0 = class extends cn {
  constructor({ valueSchema: e, name: t = e.name, ...n }) {
    super({ ...n, name: t }), this._valueSchema = e;
  }
  expected(e) {
    let { text: t, list: n } = e.normalizeExpectedResult(this._valueSchema.expected(e));
    return { text: t && `an array of ${t}`, list: n && { title: "an array of the following values", values: [{ list: n }] } };
  }
  validate(e, t) {
    if (!Array.isArray(e)) return !1;
    let n = [];
    for (let r of e) {
      let o = t.normalizeValidateResult(this._valueSchema.validate(r, t), r);
      o !== !0 && n.push(o.value);
    }
    return n.length === 0 ? !0 : { value: n };
  }
  deprecated(e, t) {
    let n = [];
    for (let r of e) {
      let o = t.normalizeDeprecatedResult(this._valueSchema.deprecated(r, t), r);
      o !== !1 && n.push(...o.map(({ value: a }) => ({ value: [a] })));
    }
    return n;
  }
  forward(e, t) {
    let n = [];
    for (let r of e) {
      let o = t.normalizeForwardResult(this._valueSchema.forward(r, t), r);
      n.push(...o.map(ll));
    }
    return n;
  }
  redirect(e, t) {
    let n = [], r = [];
    for (let o of e) {
      let a = t.normalizeRedirectResult(this._valueSchema.redirect(o, t), o);
      "remain" in a && n.push(a.remain), r.push(...a.redirect.map(ll));
    }
    return n.length === 0 ? { redirect: r } : { redirect: r, remain: n };
  }
  overlap(e, t) {
    return e.concat(t);
  }
};
function ll({ from: e, to: t }) {
  return { from: [e], to: t };
}
var c0 = class extends cn {
  expected() {
    return "true or false";
  }
  validate(e) {
    return typeof e == "boolean";
  }
};
function d0(e, t) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let r of e) {
    let o = r[t];
    if (n[o]) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    n[o] = r;
  }
  return n;
}
function f0(e, t) {
  let n = /* @__PURE__ */ new Map();
  for (let r of e) {
    let o = r[t];
    if (n.has(o)) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    n.set(o, r);
  }
  return n;
}
function p0() {
  let e = /* @__PURE__ */ Object.create(null);
  return (t) => {
    let n = JSON.stringify(t);
    return e[n] ? !0 : (e[n] = !0, !1);
  };
}
function h0(e, t) {
  let n = [], r = [];
  for (let o of e) t(o) ? n.push(o) : r.push(o);
  return [n, r];
}
function m0(e) {
  return e === Math.floor(e);
}
function g0(e, t) {
  if (e === t) return 0;
  let n = typeof e, r = typeof t, o = ["undefined", "object", "boolean", "number", "string"];
  return n !== r ? o.indexOf(n) - o.indexOf(r) : n !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
}
function v0(e) {
  return (...t) => {
    let n = e(...t);
    return typeof n == "string" ? new Error(n) : n;
  };
}
function ul(e) {
  return e === void 0 ? {} : e;
}
function Kc(e) {
  if (typeof e == "string") return { text: e };
  let { text: t, list: n } = e;
  return D0((t || n) !== void 0, "Unexpected `expected` result, there should be at least one field."), n ? { text: t, list: { title: n.title, values: n.values.map(Kc) } } : { text: t };
}
function cl(e, t) {
  return e === !0 ? !0 : e === !1 ? { value: t } : e;
}
function dl(e, t, n = !1) {
  return e === !1 ? !1 : e === !0 ? n ? !0 : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? !1 : e;
}
function fl(e, t) {
  return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
}
function ri(e, t) {
  return e === void 0 ? [] : Array.isArray(e) ? e.map((n) => fl(n, t)) : [fl(e, t)];
}
function pl(e, t) {
  let n = ri(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
  return n.length === 0 ? { remain: t, redirect: n } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: n } : { redirect: n };
}
function D0(e, t) {
  if (!e) throw new Error(t);
}
var y0 = class extends cn {
  constructor(e) {
    super(e), this._choices = f0(e.choices.map((t) => t && typeof t == "object" ? t : { value: t }), "value");
  }
  expected({ descriptor: e }) {
    let t = Array.from(this._choices.keys()).map((o) => this._choices.get(o)).filter(({ hidden: o }) => !o).map((o) => o.value).sort(g0).map(e.value), n = t.slice(0, -2), r = t.slice(-2);
    return { text: n.concat(r.join(" or ")).join(", "), list: { title: "one of the following values", values: t } };
  }
  validate(e) {
    return this._choices.has(e);
  }
  deprecated(e) {
    let t = this._choices.get(e);
    return t && t.deprecated ? { value: e } : !1;
  }
  forward(e) {
    let t = this._choices.get(e);
    return t ? t.forward : void 0;
  }
  redirect(e) {
    let t = this._choices.get(e);
    return t ? t.redirect : void 0;
  }
}, b0 = class extends cn {
  expected() {
    return "a number";
  }
  validate(e, t) {
    return typeof e == "number";
  }
}, w0 = class extends b0 {
  expected() {
    return "an integer";
  }
  validate(e, t) {
    return t.normalizeValidateResult(super.validate(e, t), e) === !0 && m0(e);
  }
}, hl = class extends cn {
  expected() {
    return "a string";
  }
  validate(e) {
    return typeof e == "string";
  }
}, x0 = er, C0 = Xc, E0 = n0, F0 = t0, S0 = class {
  constructor(e, t) {
    let { logger: n = console, loggerPrintWidth: r = 80, descriptor: o = x0, unknown: a = C0, invalid: i = E0, deprecated: s = F0, missing: l = () => !1, required: c = () => !1, preprocess: d = (f) => f, postprocess: p = () => yo } = t || {};
    this._utils = { descriptor: o, logger: n || { warn: () => {
    } }, loggerPrintWidth: r, schemas: d0(e, "name"), normalizeDefaultResult: ul, normalizeExpectedResult: Kc, normalizeDeprecatedResult: dl, normalizeForwardResult: ri, normalizeRedirectResult: pl, normalizeValidateResult: cl }, this._unknownHandler = a, this._invalidHandler = v0(i), this._deprecatedHandler = s, this._identifyMissing = (f, h) => !(f in h) || l(f, h), this._identifyRequired = c, this._preprocess = d, this._postprocess = p, this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = p0();
  }
  normalize(e) {
    let t = {}, n = [this._preprocess(e, this._utils)], r = () => {
      for (; n.length !== 0; ) {
        let o = n.shift(), a = this._applyNormalization(o, t);
        n.push(...a);
      }
    };
    r();
    for (let o of Object.keys(this._utils.schemas)) {
      let a = this._utils.schemas[o];
      if (!(o in t)) {
        let i = ul(a.default(this._utils));
        "value" in i && n.push({ [o]: i.value });
      }
    }
    r();
    for (let o of Object.keys(this._utils.schemas)) {
      if (!(o in t)) continue;
      let a = this._utils.schemas[o], i = t[o], s = a.postprocess(i, this._utils);
      s !== yo && (this._applyValidation(s, o, a), t[o] = s);
    }
    return this._applyPostprocess(t), this._applyRequiredCheck(t), t;
  }
  _applyNormalization(e, t) {
    let n = [], { knownKeys: r, unknownKeys: o } = this._partitionOptionKeys(e);
    for (let a of r) {
      let i = this._utils.schemas[a], s = i.preprocess(e[a], this._utils);
      this._applyValidation(s, a, i);
      let l = ({ from: p, to: f }) => {
        n.push(typeof f == "string" ? { [f]: p } : { [f.key]: f.value });
      }, c = ({ value: p, redirectTo: f }) => {
        let h = dl(i.deprecated(p, this._utils), s, !0);
        if (h !== !1) if (h === !0) this._hasDeprecationWarned(a) || this._utils.logger.warn(this._deprecatedHandler(a, f, this._utils));
        else for (let { value: m } of h) {
          let g = { key: a, value: m };
          if (!this._hasDeprecationWarned(g)) {
            let D = typeof f == "string" ? { key: f, value: m } : f;
            this._utils.logger.warn(this._deprecatedHandler(g, D, this._utils));
          }
        }
      };
      ri(i.forward(s, this._utils), s).forEach(l);
      let d = pl(i.redirect(s, this._utils), s);
      if (d.redirect.forEach(l), "remain" in d) {
        let p = d.remain;
        t[a] = a in t ? i.overlap(t[a], p, this._utils) : p, c({ value: p });
      }
      for (let { from: p, to: f } of d.redirect) c({ value: p, redirectTo: f });
    }
    for (let a of o) {
      let i = e[a];
      this._applyUnknownHandler(a, i, t, (s, l) => {
        n.push({ [s]: l });
      });
    }
    return n;
  }
  _applyRequiredCheck(e) {
    for (let t of Object.keys(this._utils.schemas)) if (this._identifyMissing(t, e) && this._identifyRequired(t)) throw this._invalidHandler(t, Uc, this._utils);
  }
  _partitionOptionKeys(e) {
    let [t, n] = h0(Object.keys(e).filter((r) => !this._identifyMissing(r, e)), (r) => r in this._utils.schemas);
    return { knownKeys: t, unknownKeys: n };
  }
  _applyValidation(e, t, n) {
    let r = cl(n.validate(e, this._utils), e);
    if (r !== !0) throw this._invalidHandler(t, r.value, this._utils);
  }
  _applyUnknownHandler(e, t, n, r) {
    let o = this._unknownHandler(e, t, this._utils);
    if (o) for (let a of Object.keys(o)) {
      if (this._identifyMissing(a, o)) continue;
      let i = o[a];
      a in this._utils.schemas ? r(a, i) : n[a] = i;
    }
  }
  _applyPostprocess(e) {
    let t = this._postprocess(e, this._utils);
    if (t !== yo) {
      if (t.delete) for (let n of t.delete) delete e[n];
      if (t.override) {
        let { knownKeys: n, unknownKeys: r } = this._partitionOptionKeys(t.override);
        for (let o of n) {
          let a = t.override[o];
          this._applyValidation(a, o, this._utils.schemas[o]), e[o] = a;
        }
        for (let o of r) {
          let a = t.override[o];
          this._applyUnknownHandler(o, a, e, (i, s) => {
            let l = this._utils.schemas[i];
            this._applyValidation(s, i, l), e[i] = s;
          });
        }
      }
    }
  }
}, ka;
function N0(e, t, { logger: n = !1, isCLI: r = !1, passThrough: o = !1, FlagSchema: a, descriptor: i } = {}) {
  if (r) {
    if (!a) throw new Error("'FlagSchema' option is required.");
    if (!i) throw new Error("'descriptor' option is required.");
  } else i = er;
  let s = o ? Array.isArray(o) ? (f, h) => o.includes(f) ? { [f]: h } : void 0 : (f, h) => ({ [f]: h }) : (f, h, m) => {
    let { _: g, ...D } = m.schemas;
    return Xc(f, h, { ...m, schemas: D });
  }, l = k0(t, { isCLI: r, FlagSchema: a }), c = new S0(l, { logger: n, unknown: s, descriptor: i }), d = n !== !1;
  d && ka && (c._hasDeprecationWarned = ka);
  let p = c.normalize(e);
  return d && (ka = c._hasDeprecationWarned), p;
}
function k0(e, { isCLI: t, FlagSchema: n }) {
  let r = [];
  t && r.push(l0.create({ name: "_" }));
  for (let o of e) r.push(j0(o, { isCLI: t, optionInfos: e, FlagSchema: n })), o.alias && t && r.push(s0.create({ name: o.alias, sourceName: o.name }));
  return r;
}
function j0(e, { isCLI: t, optionInfos: n, FlagSchema: r }) {
  let { name: o } = e, a = { name: o }, i, s = {};
  switch (e.type) {
    case "int":
      i = w0, t && (a.preprocess = Number);
      break;
    case "string":
      i = hl;
      break;
    case "choice":
      i = y0, a.choices = e.choices.map((l) => l != null && l.redirect ? { ...l, redirect: { to: { key: e.name, value: l.redirect } } } : l);
      break;
    case "boolean":
      i = c0;
      break;
    case "flag":
      i = r, a.flags = n.flatMap((l) => [l.alias, l.description && l.name, l.oppositeDescription && `no-${l.name}`].filter(Boolean));
      break;
    case "path":
      i = hl;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (e.exception ? a.validate = (l, c, d) => e.exception(l) || c.validate(l, d) : a.validate = (l, c, d) => l === void 0 || c.validate(l, d), e.redirect && (s.redirect = (l) => l ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (s.deprecated = !0), t && !e.array) {
    let l = a.preprocess || ((c) => c);
    a.preprocess = (c, d, p) => d.preprocess(l(Array.isArray(c) ? Te(!1, c, -1) : c), p);
  }
  return e.array ? u0.create({ ...t ? { preprocess: (l) => Array.isArray(l) ? l : [l] } : {}, ...s, valueSchema: i.create(a) }) : i.create({ ...a, ...s });
}
var P0 = N0, _0 = (e, t, n) => {
  if (!(e && t == null)) {
    if (t.findLast) return t.findLast(n);
    for (let r = t.length - 1; r >= 0; r--) {
      let o = t[r];
      if (n(o, r, t)) return o;
    }
  }
}, Jc = _0;
function Qc(e, t) {
  if (!t) throw new Error("parserName is required.");
  let n = Jc(!1, e, (o) => o.parsers && Object.prototype.hasOwnProperty.call(o.parsers, t));
  if (n) return n;
  let r = `Couldn't resolve parser "${t}".`;
  throw r += " Plugins must be explicitly added to the standalone bundle.", new Yc(r);
}
function A0(e, t) {
  if (!t) throw new Error("astFormat is required.");
  let n = Jc(!1, e, (o) => o.printers && Object.prototype.hasOwnProperty.call(o.printers, t));
  if (n) return n;
  let r = `Couldn't find plugin for AST format "${t}".`;
  throw r += " Plugins must be explicitly added to the standalone bundle.", new Yc(r);
}
function Zc({ plugins: e, parser: t }) {
  let n = Qc(e, t);
  return ed(n, t);
}
function ed(e, t) {
  let n = e.parsers[t];
  return typeof n == "function" ? n() : n;
}
function O0(e, t) {
  let n = e.printers[t];
  return typeof n == "function" ? n() : n;
}
var ml = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
async function R0(e, t = {}) {
  var n;
  let r = { ...e };
  if (!r.parser) if (r.filepath) {
    if (r.parser = e0(r, { physicalFile: r.filepath }), !r.parser) throw new tl(`No parser could be inferred for file "${r.filepath}".`);
  } else throw new tl("No parser and no file path given, couldn't infer a parser.");
  let o = zc({ plugins: e.plugins, showDeprecated: !0 }).options, a = { ...ml, ...Object.fromEntries(o.filter((f) => f.default !== void 0).map((f) => [f.name, f.default])) }, i = Qc(r.plugins, r.parser), s = await ed(i, r.parser);
  r.astFormat = s.astFormat, r.locEnd = s.locEnd, r.locStart = s.locStart;
  let l = (n = i.printers) != null && n[s.astFormat] ? i : A0(r.plugins, s.astFormat), c = await O0(l, s.astFormat);
  r.printer = c;
  let d = l.defaultOptions ? Object.fromEntries(Object.entries(l.defaultOptions).filter(([, f]) => f !== void 0)) : {}, p = { ...a, ...d };
  for (let [f, h] of Object.entries(p)) (r[f] === null || r[f] === void 0) && (r[f] = h);
  return r.parser === "json" && (r.trailingComma = "none"), P0(r, o, { passThrough: Object.keys(ml), ...t });
}
var hr = R0, T0 = Yo(Av());
async function M0(e, t) {
  let n = await Zc(t), r = n.preprocess ? n.preprocess(e, t) : e;
  t.originalText = r;
  let o;
  try {
    o = await n.parse(r, t, t);
  } catch (a) {
    B0(a, e);
  }
  return { text: r, ast: o };
}
function B0(e, t) {
  let { loc: n } = e;
  if (n) {
    let r = (0, T0.codeFrameColumns)(t, n, { highlightCode: !0 });
    throw e.message += `
` + r, e.codeFrame = r, e;
  }
  throw e;
}
var Vr = M0;
async function I0(e, t, n, r, o) {
  let { embeddedLanguageFormatting: a, printer: { embed: i, hasPrettierIgnore: s = () => !1, getVisitorKeys: l } } = n;
  if (!i || a !== "auto") return;
  if (i.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
  let c = Xo(i.getVisitorKeys ?? l), d = [];
  h();
  let p = e.stack;
  for (let { print: m, node: g, pathStack: D } of d) try {
    e.stack = D;
    let y = await m(f, t, e, n);
    y && o.set(g, y);
  } catch (y) {
    if (globalThis.PRETTIER_DEBUG) throw y;
  }
  e.stack = p;
  function f(m, g) {
    return L0(m, g, n, r);
  }
  function h() {
    let { node: m } = e;
    if (m === null || typeof m != "object" || s(e)) return;
    for (let D of c(m)) Array.isArray(m[D]) ? e.each(h, D) : e.call(h, D);
    let g = i(e, n);
    if (g) {
      if (typeof g == "function") {
        d.push({ print: g, node: m, pathStack: [...e.stack] });
        return;
      }
      o.set(m, g);
    }
  }
}
async function L0(e, t, n, r) {
  let o = await hr({ ...n, ...t, parentParser: n.parser, originalText: e }, { passThrough: !0 }), { ast: a } = await Vr(e, o), i = await r(a, o);
  return Oc(i);
}
function W0(e, t) {
  let { originalText: n, [Symbol.for("comments")]: r, locStart: o, locEnd: a, [Symbol.for("printedComments")]: i } = t, { node: s } = e, l = o(s), c = a(s);
  for (let d of r) o(d) >= l && a(d) <= c && i.add(d);
  return n.slice(l, c);
}
var $0 = W0;
async function Ko(e, t) {
  ({ ast: e } = await td(e, t));
  let n = /* @__PURE__ */ new Map(), r = new ND(e), o = /* @__PURE__ */ new Map();
  await I0(r, i, t, Ko, o);
  let a = await gl(r, t, i, void 0, o);
  return qD(t), a;
  function i(l, c) {
    return l === void 0 || l === r ? s(c) : Array.isArray(l) ? r.call(() => s(c), ...l) : r.call(() => s(c), l);
  }
  function s(l) {
    let c = r.node;
    if (c == null) return "";
    let d = c && typeof c == "object" && l === void 0;
    if (d && n.has(c)) return n.get(c);
    let p = gl(r, t, i, l, o);
    return d && n.set(c, p), p;
  }
}
function gl(e, t, n, r, o) {
  var a;
  let { node: i } = e, { printer: s } = t, l;
  return (a = s.hasPrettierIgnore) != null && a.call(s, e) ? l = $0(e, t) : o.has(i) ? l = o.get(i) : l = s.print(e, t, n, r), i === t.cursorNode && (l = Rc(l, (c) => [Qa, c, Qa])), s.printComment && (!s.willPrintOwnComments || !s.willPrintOwnComments(e, t)) && (l = UD(e, l, t)), l;
}
async function td(e, t) {
  let n = e.comments ?? [];
  t[Symbol.for("comments")] = n, t[Symbol.for("tokens")] = e.tokens ?? [], t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), LD(e, t);
  let { printer: { preprocess: r } } = t;
  return e = r ? await r(e, t) : e, { ast: e, comments: n };
}
function H0(e, t) {
  let { cursorOffset: n, locStart: r, locEnd: o } = t, a = Xo(t.printer.getVisitorKeys), i = (l) => r(l) <= n && o(l) >= n, s = e;
  for (let l of PD(e, { getVisitorKeys: a, filter: i })) s = l;
  return s;
}
var V0 = H0;
function Y0(e, t) {
  let { printer: { massageAstNode: n, getVisitorKeys: r } } = t;
  if (!n) return e;
  let o = Xo(r), a = n.ignoredProperties ?? /* @__PURE__ */ new Set();
  return i(e);
  function i(s, l) {
    if (!(s !== null && typeof s == "object")) return s;
    if (Array.isArray(s)) return s.map((f) => i(f, l)).filter(Boolean);
    let c = {}, d = new Set(o(s));
    for (let f in s) !Object.prototype.hasOwnProperty.call(s, f) || a.has(f) || (d.has(f) ? c[f] = i(s[f], s) : c[f] = s[f]);
    let p = n(s, c, l);
    if (p !== null) return p ?? c;
  }
}
var z0 = Y0, U0 = (e, t, n) => {
  if (!(e && t == null)) {
    if (t.findLastIndex) return t.findLastIndex(n);
    for (let r = t.length - 1; r >= 0; r--) {
      let o = t[r];
      if (n(o, r, t)) return r;
    }
    return -1;
  }
}, q0 = U0, G0 = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
function X0(e, t) {
  let n = [e.node, ...e.parentNodes], r = /* @__PURE__ */ new Set([t.node, ...t.parentNodes]);
  return n.find((o) => nd.has(o.type) && r.has(o));
}
function vl(e) {
  let t = q0(!1, e, (n) => n.type !== "Program" && n.type !== "File");
  return t === -1 ? e : e.slice(0, t + 1);
}
function K0(e, t, { locStart: n, locEnd: r }) {
  let o = e.node, a = t.node;
  if (o === a) return { startNode: o, endNode: a };
  let i = n(e.node);
  for (let l of vl(t.parentNodes)) if (n(l) >= i) a = l;
  else break;
  let s = r(t.node);
  for (let l of vl(e.parentNodes)) {
    if (r(l) <= s) o = l;
    else break;
    if (o === a) break;
  }
  return { startNode: o, endNode: a };
}
function oi(e, t, n, r, o = [], a) {
  let { locStart: i, locEnd: s } = n, l = i(e), c = s(e);
  if (!(t > c || t < l || a === "rangeEnd" && t === l || a === "rangeStart" && t === c)) {
    for (let d of Ui(e, n)) {
      let p = oi(d, t, n, r, [e, ...o], a);
      if (p) return p;
    }
    if (!r || r(e, o[0])) return { node: e, parentNodes: o };
  }
}
function J0(e, t) {
  return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
var nd = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), Q0 = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function Dl(e, t, n) {
  if (!t) return !1;
  switch (e.parser) {
    case "flow":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "__babel_estree":
      return J0(t.type, n == null ? void 0 : n.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return nd.has(t.type);
    case "graphql":
      return Q0.has(t.kind);
    case "vue":
      return t.tag !== "root";
  }
  return !1;
}
function Z0(e, t, n) {
  let { rangeStart: r, rangeEnd: o, locStart: a, locEnd: i } = t;
  ni.ok(o > r);
  let s = e.slice(r, o).search(/\S/u), l = s === -1;
  if (!l) for (r += s; o > r && !/\S/u.test(e[o - 1]); --o) ;
  let c = oi(n, r, t, (h, m) => Dl(t, h, m), [], "rangeStart"), d = l ? c : oi(n, o, t, (h) => Dl(t, h), [], "rangeEnd");
  if (!c || !d) return { rangeStart: 0, rangeEnd: 0 };
  let p, f;
  if (G0(t)) {
    let h = X0(c, d);
    p = h, f = h;
  } else ({ startNode: p, endNode: f } = K0(c, d, t));
  return { rangeStart: Math.min(a(p), a(f)), rangeEnd: Math.max(i(p), i(f)) };
}
var rd = "\uFEFF", yl = Symbol("cursor");
async function od(e, t, n = 0) {
  if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: r, text: o } = await Vr(e, t);
  t.cursorOffset >= 0 && (t.cursorNode = V0(r, t));
  let a = await Ko(r, t);
  n > 0 && (a = Ac([Pn, a], n, t.tabWidth));
  let i = Go(a, t);
  if (n > 0) {
    let l = i.formatted.trim();
    i.cursorNodeStart !== void 0 && (i.cursorNodeStart -= i.formatted.indexOf(l)), i.formatted = l + Li(t.endOfLine);
  }
  let s = t[Symbol.for("comments")];
  if (t.cursorOffset >= 0) {
    let l, c, d, p, f;
    if (t.cursorNode && i.cursorNodeText ? (l = t.locStart(t.cursorNode), c = o.slice(l, t.locEnd(t.cursorNode)), d = t.cursorOffset - l, p = i.cursorNodeStart, f = i.cursorNodeText) : (l = 0, c = o, d = t.cursorOffset, p = 0, f = i.formatted), c === f) return { formatted: i.formatted, cursorOffset: p + d, comments: s };
    let h = c.split("");
    h.splice(d, 0, yl);
    let m = f.split(""), g = Lv(h, m), D = p;
    for (let y of g) if (y.removed) {
      if (y.value.includes(yl)) break;
    } else D += y.count;
    return { formatted: i.formatted, cursorOffset: D, comments: s };
  }
  return { formatted: i.formatted, cursorOffset: -1, comments: s };
}
async function ey(e, t) {
  let { ast: n, text: r } = await Vr(e, t), { rangeStart: o, rangeEnd: a } = Z0(r, t, n), i = r.slice(o, a), s = Math.min(o, r.lastIndexOf(`
`, o) + 1), l = r.slice(s, o).match(/^\s*/u)[0], c = Yi(l, t.tabWidth), d = await od(i, { ...t, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t.cursorOffset > o && t.cursorOffset <= a ? t.cursorOffset - o : -1, endOfLine: "lf" }, c), p = d.formatted.trimEnd(), { cursorOffset: f } = t;
  f > a ? f += p.length - i.length : d.cursorOffset >= 0 && (f = d.cursorOffset + o);
  let h = r.slice(0, o) + p + r.slice(a);
  if (t.endOfLine !== "lf") {
    let m = Li(t.endOfLine);
    f >= 0 && m === `\r
` && (f += Ec(h.slice(0, f), `
`)), h = zo(!1, h, `
`, m);
  }
  return { formatted: h, cursorOffset: f, comments: d.comments };
}
function ja(e, t, n) {
  return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? n : t;
}
function bl(e, t) {
  let { cursorOffset: n, rangeStart: r, rangeEnd: o } = t;
  return n = ja(e, n, -1), r = ja(e, r, 0), o = ja(e, o, e.length), { ...t, cursorOffset: n, rangeStart: r, rangeEnd: o };
}
function ad(e, t) {
  let { cursorOffset: n, rangeStart: r, rangeEnd: o, endOfLine: a } = bl(e, t), i = e.charAt(0) === rd;
  if (i && (e = e.slice(1), n--, r--, o--), a === "auto" && (a = Wv(e)), e.includes("\r")) {
    let s = (l) => Ec(e.slice(0, Math.max(l, 0)), `\r
`);
    n -= s(n), r -= s(r), o -= s(o), e = $v(e);
  }
  return { hasBOM: i, text: e, options: bl(e, { ...t, cursorOffset: n, rangeStart: r, rangeEnd: o, endOfLine: a }) };
}
async function wl(e, t) {
  let n = await Zc(t);
  return !n.hasPragma || n.hasPragma(e);
}
async function id(e, t) {
  let { hasBOM: n, text: r, options: o } = ad(e, await hr(t));
  if (o.rangeStart >= o.rangeEnd && r !== "" || o.requirePragma && !await wl(r, o)) return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
  let a;
  return o.rangeStart > 0 || o.rangeEnd < r.length ? a = await ey(r, o) : (!o.requirePragma && o.insertPragma && o.printer.insertPragma && !await wl(r, o) && (r = o.printer.insertPragma(r)), a = await od(r, o)), n && (a.formatted = rd + a.formatted, a.cursorOffset >= 0 && a.cursorOffset++), a;
}
async function ty(e, t, n) {
  let { text: r, options: o } = ad(e, await hr(t)), a = await Vr(r, o);
  return n && (n.preprocessForPrint && (a.ast = await td(a.ast, o)), n.massage && (a.ast = z0(a.ast, o))), a;
}
async function ny(e, t) {
  t = await hr(t);
  let n = await Ko(e, t);
  return Go(n, t);
}
async function ry(e, t) {
  let n = aD(e), { formatted: r } = await id(n, { ...t, parser: "__js_expression" });
  return r;
}
async function oy(e, t) {
  t = await hr(t);
  let { ast: n } = await Vr(e, t);
  return Ko(n, t);
}
async function ay(e, t) {
  return Go(e, await hr(t));
}
var sd = {};
Vo(sd, { builders: () => iy, printer: () => sy, utils: () => ly });
var iy = { join: _c, line: jc, softline: rD, hardline: Pn, literalline: Pc, group: Sc, conditionalGroup: Qv, fill: Nc, lineSuffix: Ja, lineSuffixBoundary: tD, cursor: Qa, breakParent: Uo, ifBreak: Zv, trim: nD, indent: No, indentIfBreak: eD, align: cr, addAlignmentToDoc: Ac, markAsRoot: Kv, dedentToRoot: Xv, dedent: Jv, hardlineWithoutBreakParent: $i, literallineWithoutBreakParent: kc, label: oD, concat: (e) => e }, sy = { printDocToString: Go }, ly = { willBreak: hD, traverseDoc: Wi, findInDoc: Vi, mapDoc: qo, removeLines: vD, stripTrailingHardline: Oc, replaceEndOfLine: bD, canBreak: xD }, uy = "3.3.3", ld = {};
Vo(ld, { addDanglingComment: () => En, addLeadingComment: () => Qn, addTrailingComment: () => Zn, getAlignmentSize: () => Yi, getIndentSize: () => my, getMaxContinuousCount: () => Dy, getNextNonSpaceNonCommentCharacter: () => by, getNextNonSpaceNonCommentCharacterIndex: () => ky, getStringWidth: () => Hi, hasNewline: () => tn, hasNewlineInRange: () => xy, hasSpaces: () => Ey, isNextLineEmpty: () => Ay, isNextLineEmptyAfterIndex: () => Ji, isPreviousLineEmpty: () => Py, makeString: () => Sy, skip: () => Hr, skipEverythingButNewLine: () => Lc, skipInlineComment: () => Gi, skipNewline: () => Rn, skipSpaces: () => rn, skipToLineEnd: () => Ic, skipTrailingComment: () => Xi, skipWhitespace: () => _D });
function cy(e, t) {
  if (t === !1) return !1;
  if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
    for (let n = t + 2; n < e.length; ++n) if (e.charAt(n) === "*" && e.charAt(n + 1) === "/") return n + 2;
  }
  return t;
}
var Gi = cy;
function dy(e, t) {
  return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? Lc(e, t) : t;
}
var Xi = dy;
function fy(e, t) {
  let n = null, r = t;
  for (; r !== n; ) n = r, r = rn(e, r), r = Gi(e, r), r = Xi(e, r), r = Rn(e, r);
  return r;
}
var Ki = fy;
function py(e, t) {
  let n = null, r = t;
  for (; r !== n; ) n = r, r = Ic(e, r), r = Gi(e, r), r = rn(e, r);
  return r = Xi(e, r), r = Rn(e, r), r !== !1 && tn(e, r);
}
var Ji = py;
function hy(e, t) {
  let n = e.lastIndexOf(`
`);
  return n === -1 ? 0 : Yi(e.slice(n + 1).match(/^[\t ]*/u)[0], t);
}
var my = hy;
function gy(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function vy(e, t) {
  let n = e.match(new RegExp(`(${gy(t)})+`, "gu"));
  return n === null ? 0 : n.reduce((r, o) => Math.max(r, o.length / t.length), 0);
}
var Dy = vy;
function yy(e, t) {
  let n = Ki(e, t);
  return n === !1 ? "" : e.charAt(n);
}
var by = yy;
function wy(e, t, n) {
  for (let r = t; r < n; ++r) if (e.charAt(r) === `
`) return !0;
  return !1;
}
var xy = wy;
function Cy(e, t, n = {}) {
  return rn(e, n.backwards ? t - 1 : t, n) !== t;
}
var Ey = Cy;
function Fy(e, t, n) {
  let r = t === '"' ? "'" : '"', o = zo(!1, e, /\\(.)|(["'])/gsu, (a, i, s) => i === r ? i : s === t ? "\\" + s : s || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(i) ? i : "\\" + i));
  return t + o + t;
}
var Sy = Fy;
function Ny(e, t, n) {
  return Ki(e, n(t));
}
function ky(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Ki(e, t) : Ny(...arguments);
}
function jy(e, t, n) {
  return qi(e, n(t));
}
function Py(e, t) {
  return arguments.length === 2 || typeof t == "number" ? qi(e, t) : jy(...arguments);
}
function _y(e, t, n) {
  return Ji(e, n(t));
}
function Ay(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Ji(e, t) : _y(...arguments);
}
function Sn(e, t = 1) {
  return async (...n) => {
    let r = n[t] ?? {}, o = r.plugins ?? [];
    return n[t] = { ...r, plugins: Array.isArray(o) ? o : Object.values(o) }, e(...n);
  };
}
var ud = Sn(id);
async function cd(e, t) {
  let { formatted: n } = await ud(e, { ...t, cursorOffset: -1 });
  return n;
}
async function Oy(e, t) {
  return await cd(e, t) === e;
}
var Ry = Sn(zc, 0), Ty = { parse: Sn(ty), formatAST: Sn(ny), formatDoc: Sn(ry), printToDoc: Sn(oy), printDocToString: Sn(ay) };
const My = ({
  date: e,
  guests: t,
  time: n,
  venue: r,
  tableSetup: o,
  currentStep: a,
  setCurrentStep: i,
  isStep1Valid: s,
  checkStep1Errors: l,
  isStep3Valid: c,
  checkStep3Errors: d,
  facilitiesSelected: p,
  cateringSelected: f,
  selectedEventPackages: h,
  totalExclVat: m
}) => {
  const [g, D] = Q(!1), y = bv("(min-width: 1024px)"), b = h.reduce((E, F) => {
    const S = F.duration;
    return E[S] || (E[S] = { ...F, quantity: 0, totalPrice: 0 }), E[S].quantity += 1, E[S].totalPrice += F.price, E;
  }, {}), w = Object.entries(b).map(([E, F]) => F), C = () => /* @__PURE__ */ u.jsxs("div", { className: " mt-4 space-y-6", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ u.jsx(Jl, { className: "h-5 w-5 text-muted-foreground" }),
      /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: e ? Lt(e, "PPP") : "Pick a date" })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ u.jsx(Ql, { className: "h-5 w-5 text-muted-foreground" }),
      /* @__PURE__ */ u.jsxs("p", { className: "text-sm", children: [
        t,
        " ",
        t > 0 ? "people" : "Select Number Guests"
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ u.jsx(Ha, { className: "h-5 w-5 text-muted-foreground" }),
      /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: n ? "Arrival at " + n : "Select Time" })
    ] }),
    /* @__PURE__ */ u.jsx("hr", {}),
    /* @__PURE__ */ u.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ u.jsx("h4", { className: "text-sm font-bold", children: "Venue Preference" }),
      /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: r ? r + " - " + o : "Select a venue" })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ u.jsx("h4", { className: "text-sm font-bold", children: "Always included" }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ u.jsx(kn, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: "Conference system" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ u.jsx(kn, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: "Presentation screen" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ u.jsx(kn, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: "Post it's & markers" })
      ] })
    ] }),
    a > 1 && h.every((E) => E) && r && t > 0 && /* @__PURE__ */ u.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ u.jsx("h4", { className: "text-sm font-bold", children: "Selected Services" }),
      w.map((E, F) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: `${E.duration} hour meeting x ${E.quantity}` }),
        /* @__PURE__ */ u.jsxs("span", { className: "text-sm", children: [
          E.totalPrice,
          "€"
        ] })
      ] }, F)),
      p.map((E, F) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ u.jsxs("span", { className: "text-sm", children: [
          `${E.title}`,
          /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: h.length > 1 ? " per day" : "" })
        ] }),
        /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: `${E.price}€` })
      ] }, F)),
      f.map((E, F) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ u.jsxs("span", { className: "text-sm", children: [
          `${E.name} x ${E.quantity}`,
          /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: h.length > 1 ? " per day" : "" })
        ] }),
        /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: `${E.price * E.quantity}€` })
      ] }, F)),
      a > 1 && r && t > 0 && /* @__PURE__ */ u.jsx("hr", {}),
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ u.jsx("span", { className: "text-md font-medium", children: "Total excl. VAT" }),
        /* @__PURE__ */ u.jsx("span", { className: "text-md font-medium", children: `${m}€` })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ u.jsx("span", { className: "text-xs text-muted-foreground", children: "Per person" }),
        /* @__PURE__ */ u.jsx("span", { className: "text-sm text-muted-foreground", children: `${parseFloat(m / t).toFixed(2)}€` })
      ] })
    ] })
  ] });
  return y ? /* @__PURE__ */ u.jsx("div", { className: "w-1/4 p-8 bg-gray-50 overflow-visible mt-0 rounded-md", children: /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col sticky top-10 space-x-2", children: [
    /* @__PURE__ */ u.jsx("h3", { className: "text-lg font-bold", children: "Overview" }),
    /* @__PURE__ */ u.jsx(C, {})
  ] }) }) : /* @__PURE__ */ u.jsxs(Ju, { open: g, onOpenChange: D, children: [
    /* @__PURE__ */ u.jsx("div", { className: "h-fit inset-x-0 z-[40] m-0 flex items-center h-auto flex-col rounded-t-[10px] border bg-background", children: /* @__PURE__ */ u.jsxs("div", { className: "w-full flex flex-row items-center justify-between p-2", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2 bg-gray-50 rounded-full p-1 px-2 text-primary", onClick: () => D(!0), children: [
        /* @__PURE__ */ u.jsx("span", { className: "text-sm text-muted-foreground font-medium", children: "Overview" }),
        /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center bg-gray-100 h-8 w-8 rounded-full m-1", children: /* @__PURE__ */ u.jsx(lh, { className: "h-8 w-8 text-primary" }) })
      ] }),
      a === 1 && /* @__PURE__ */ u.jsx(Ce, { className: "ml-auto", disabled: !s(), onClick: () => l() && s() && i(2), children: "Add Event Options" }),
      a === 2 && /* @__PURE__ */ u.jsxs("div", { className: "relative space-x-4 flex justify-center items-center", children: [
        /* @__PURE__ */ u.jsx(Ce, { variant: "outline", onClick: () => i(1), children: /* @__PURE__ */ u.jsx(Jn, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
        /* @__PURE__ */ u.jsx(Ce, { className: "ml-auto", onClick: () => i(3), children: "Next" })
      ] }),
      a === 3 && /* @__PURE__ */ u.jsxs("div", { className: "flex space-x-4 items-center", children: [
        /* @__PURE__ */ u.jsx(Ce, { variant: "outline", onClick: () => i(2), children: /* @__PURE__ */ u.jsx(Jn, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
        /* @__PURE__ */ u.jsxs(Ce, { onClick: () => d() && c() && handleSubmit(), children: [
          "Request Proposal ",
          /* @__PURE__ */ u.jsx(Or, { className: "ml-2 h-5 w-5 text-white" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ u.jsx(Zu, { className: "block lg:hidden", children: /* @__PURE__ */ u.jsxs("div", { className: "h-[95%] p-4 lg:p-0 w-full flex flex-col fixed", children: [
      /* @__PURE__ */ u.jsx(ec, { children: /* @__PURE__ */ u.jsx(tc, { children: "Event Overview" }) }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-between justify-start h-full overflow-y-auto", children: [
        /* @__PURE__ */ u.jsx(C, {}),
        a === 1 && /* @__PURE__ */ u.jsx(Ce, { className: "w-full mt-auto", disabled: !s(), onClick: () => {
          i(2), D(!1);
        }, children: "Add Event Options" }),
        a === 2 && /* @__PURE__ */ u.jsxs("div", { className: "relative mt-12 space-x-4 flex justify-center items-center", children: [
          /* @__PURE__ */ u.jsx(Ce, { variant: "outline", onClick: () => {
            i(1), D(!1);
          }, children: /* @__PURE__ */ u.jsx(Jn, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
          /* @__PURE__ */ u.jsx(Ce, { className: "ml-auto w-full", onClick: () => {
            i(3), D(!1);
          }, children: "Next" })
        ] }),
        a === 3 && /* @__PURE__ */ u.jsxs("div", { className: "relative mt-12 space-x-4 flex justify-center items-cente", children: [
          /* @__PURE__ */ u.jsx(Ce, { variant: "outline", onClick: () => {
            i(2), D(!1);
          }, children: /* @__PURE__ */ u.jsx(Jn, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
          /* @__PURE__ */ u.jsxs(Ce, { className: "w-full", disabled: !c(), children: [
            "Request Proposal ",
            /* @__PURE__ */ u.jsx(Or, { className: "ml-2 h-5 w-5 text-white" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
var By = "Label", dd = v.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  ne.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
dd.displayName = By;
var fd = dd;
const Iy = Yl(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Fn = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(fd, { ref: n, className: J(Iy(), e), ...t }));
Fn.displayName = fd.displayName;
const ct = v.forwardRef(({ className: e, type: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  "input",
  {
    type: t,
    className: J(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: r,
    ...n
  }
));
ct.displayName = "Input";
function Qi(e) {
  const t = v.useRef({ value: e, previous: e });
  return v.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Zi(e) {
  const [t, n] = v.useState(void 0);
  return He(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, s = c.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var es = "Switch", [Ly, ZC] = ln(es), [Wy, $y] = Ly(es), pd = v.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l = "on",
      onCheckedChange: c,
      ...d
    } = e, [p, f] = v.useState(null), h = le(t, (b) => f(b)), m = v.useRef(!1), g = p ? !!p.closest("form") : !0, [D = !1, y] = sr({
      prop: o,
      defaultProp: a,
      onChange: c
    });
    return /* @__PURE__ */ u.jsxs(Wy, { scope: n, checked: D, disabled: s, children: [
      /* @__PURE__ */ u.jsx(
        ne.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": D,
          "aria-required": i,
          "data-state": gd(D),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...d,
          ref: h,
          onClick: ee(e.onClick, (b) => {
            y((w) => !w), g && (m.current = b.isPropagationStopped(), m.current || b.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ u.jsx(
        Hy,
        {
          control: p,
          bubbles: !m.current,
          name: r,
          value: l,
          checked: D,
          required: i,
          disabled: s,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
pd.displayName = es;
var hd = "SwitchThumb", md = v.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = $y(hd, n);
    return /* @__PURE__ */ u.jsx(
      ne.span,
      {
        "data-state": gd(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
md.displayName = hd;
var Hy = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = v.useRef(null), i = Qi(n), s = Zi(t);
  return v.useEffect(() => {
    const l = a.current, c = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(c, "checked").set;
    if (i !== n && p) {
      const f = new Event("click", { bubbles: r });
      p.call(l, n), l.dispatchEvent(f);
    }
  }, [i, n, r]), /* @__PURE__ */ u.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...s,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function gd(e) {
  return e ? "checked" : "unchecked";
}
var vd = pd, Vy = md;
const Dd = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  vd,
  {
    className: J(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ u.jsx(
      Vy,
      {
        className: J(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Dd.displayName = vd.displayName;
const Yr = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    className: J("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
  }
));
Yr.displayName = "Card";
const Yy = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    className: J("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Yy.displayName = "CardHeader";
const zy = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "h3",
  {
    ref: n,
    className: J("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
  }
));
zy.displayName = "CardTitle";
const Uy = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "p",
  {
    ref: n,
    className: J("text-sm text-muted-foreground", e),
    ...t
  }
));
Uy.displayName = "CardDescription";
const zr = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx("div", { ref: n, className: J("p-6 pt-0", e), ...t }));
zr.displayName = "CardContent";
const qy = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    className: J("flex items-center p-6 pt-0", e),
    ...t
  }
));
qy.displayName = "CardFooter";
function xl({ title: e, id: t, description: n, onClick: r, isSelected: o, noneSelected: a, isDisabled: i }) {
  return /* @__PURE__ */ u.jsx(Yr, { className: J(
    "relative hover:opacity-[1] bg-gray-50",
    o ? "border-primary" : a ? "" : "opacity-[0.5]",
    i ? "cursor-not-allowed opacity-[0.5] hover:opacity-[0.5]" : ""
  ), children: /* @__PURE__ */ u.jsxs(zr, { className: "p-6", children: [
    /* @__PURE__ */ u.jsx("h4", { className: "text-lg font-bold", children: e }),
    /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: n }),
    /* @__PURE__ */ u.jsxs(Ce, { className: "mt-4 outline-none", disabled: i, onClick: r, children: [
      /* @__PURE__ */ u.jsx("span", { className: o && "hidden", children: "Choose" }),
      /* @__PURE__ */ u.jsx("div", { className: `${!o && "hidden"} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`, children: /* @__PURE__ */ u.jsx(kn, { className: "h-4 w-4 text-white " }) })
    ] })
  ] }) });
}
function Gy({
  isSelected: e,
  venue_name: t,
  venue_description: n,
  image_url: r,
  capacity: o,
  area: a,
  onClick: i
}) {
  return /* @__PURE__ */ u.jsx(
    Yr,
    {
      className: J("relative bg-gray-50 border-2 shadow-md border-transparent hover:border-primary hover:cursor-pointer", e && "border-primary"),
      onClick: i,
      children: /* @__PURE__ */ u.jsxs(zr, { className: "p-6", children: [
        /* @__PURE__ */ u.jsx(
          "img",
          {
            src: r,
            alt: t,
            loading: "lazy",
            className: "w-full h-40 rounded-md object-cover"
          }
        ),
        /* @__PURE__ */ u.jsx("h4", { className: "text-lg font-bold mt-4", children: t }),
        /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: n }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [
          /* @__PURE__ */ u.jsx(Ql, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ u.jsxs("p", { className: "text-sm", children: [
            "up to ",
            o,
            " people"
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [
          /* @__PURE__ */ u.jsx(oh, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: `${a} m^2` })
        ] }),
        /* @__PURE__ */ u.jsxs(Ce, { className: "mt-4 outline-none", onClick: i, children: [
          /* @__PURE__ */ u.jsx("span", { className: e && "hidden", children: "Choose" }),
          /* @__PURE__ */ u.jsx("div", { className: `${!e && "hidden"} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`, children: /* @__PURE__ */ u.jsx(kn, { className: "h-4 w-4 text-white " }) })
        ] })
      ] })
    }
  );
}
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yd = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ky = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = hi(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, l) => Ta(
    "svg",
    {
      ref: l,
      ...Ky,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: yd("lucide", o),
      ...s
    },
    [
      ...i.map(([c, d]) => Ta(c, d)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = (e, t) => {
  const n = hi(
    ({ className: r, ...o }, a) => Ta(Jy, {
      ref: a,
      iconNode: t,
      className: yd(`lucide-${Xy(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bd = Ur("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wd = Ur("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = Ur("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = Ur("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eb = Ur("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
var U = function() {
  return U = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, U.apply(this, arguments);
};
function tb(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function xd(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function qr(e) {
  return e.mode === "multiple";
}
function Gr(e) {
  return e.mode === "range";
}
function Jo(e) {
  return e.mode === "single";
}
var nb = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function rb(e, t) {
  return Lt(e, "LLLL y", t);
}
function ob(e, t) {
  return Lt(e, "d", t);
}
function ab(e, t) {
  return Lt(e, "LLLL", t);
}
function ib(e) {
  return "".concat(e);
}
function sb(e, t) {
  return Lt(e, "cccccc", t);
}
function lb(e, t) {
  return Lt(e, "yyyy", t);
}
var ub = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: rb,
  formatDay: ob,
  formatMonthCaption: ab,
  formatWeekNumber: ib,
  formatWeekdayName: sb,
  formatYearCaption: lb
}), cb = function(e, t, n) {
  return Lt(e, "do MMMM (EEEE)", n);
}, db = function() {
  return "Month: ";
}, fb = function() {
  return "Go to next month";
}, pb = function() {
  return "Go to previous month";
}, hb = function(e, t) {
  return Lt(e, "cccc", t);
}, mb = function(e) {
  return "Week n. ".concat(e);
}, gb = function() {
  return "Year: ";
}, vb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: cb,
  labelMonthDropdown: db,
  labelNext: fb,
  labelPrevious: pb,
  labelWeekNumber: mb,
  labelWeekday: hb,
  labelYearDropdown: gb
});
function Db() {
  var e = "buttons", t = nb, n = nu, r = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: ub,
    labels: vb,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function yb(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return r ? a = Ke(r) : t && (a = new Date(t, 0, 1)), o ? i = yi(o) : n && (i = new Date(n, 11, 31)), {
    fromDate: a ? ir(a) : void 0,
    toDate: i ? ir(i) : void 0
  };
}
var Cd = Bn(void 0);
function bb(e) {
  var t, n = e.initialProps, r = Db(), o = yb(n), a = o.fromDate, i = o.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var l;
  (Jo(n) || qr(n) || Gr(n)) && (l = n.onSelect);
  var c = U(U(U({}, r), n), { captionLayout: s, classNames: U(U({}, r.classNames), n.classNames), components: U({}, n.components), formatters: U(U({}, r.formatters), n.formatters), fromDate: a, labels: U(U({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: U(U({}, r.modifiers), n.modifiers), modifiersClassNames: U(U({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: l, styles: U(U({}, r.styles), n.styles), toDate: i });
  return u.jsx(Cd.Provider, { value: c, children: e.children });
}
function De() {
  var e = In(Cd);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Ed(e) {
  var t = De(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return u.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function wb(e) {
  return u.jsx("svg", U({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: u.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Fd(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, l = e.style, c = De(), d = (n = (t = c.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : wb;
  return u.jsxs("div", { className: s, style: l, children: [u.jsx("span", { className: c.classNames.vhidden, children: e["aria-label"] }), u.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: c.classNames.dropdown, style: c.styles.dropdown, value: o, onChange: r, children: a }), u.jsxs("div", { className: c.classNames.caption_label, style: c.styles.caption_label, "aria-hidden": "true", children: [i, u.jsx(d, { className: c.classNames.dropdown_icon, style: c.styles.dropdown_icon })] })] });
}
function xb(e) {
  var t, n = De(), r = n.fromDate, o = n.toDate, a = n.styles, i = n.locale, s = n.formatters.formatMonthCaption, l = n.classNames, c = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return u.jsx(u.Fragment, {});
  if (!o)
    return u.jsx(u.Fragment, {});
  var p = [];
  if (gm(r, o))
    for (var f = Ke(r), h = r.getMonth(); h <= o.getMonth(); h++)
      p.push(pa(f, h));
  else
    for (var f = Ke(/* @__PURE__ */ new Date()), h = 0; h <= 11; h++)
      p.push(pa(f, h));
  var m = function(D) {
    var y = Number(D.target.value), b = pa(Ke(e.displayMonth), y);
    e.onChange(b);
  }, g = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : Fd;
  return u.jsx(g, { name: "months", "aria-label": d(), className: l.dropdown_month, style: a.dropdown_month, onChange: m, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: p.map(function(D) {
    return u.jsx("option", { value: D.getMonth(), children: s(D, { locale: i }) }, D.getMonth());
  }) });
}
function Cb(e) {
  var t, n = e.displayMonth, r = De(), o = r.fromDate, a = r.toDate, i = r.locale, s = r.styles, l = r.classNames, c = r.components, d = r.formatters.formatYearCaption, p = r.labels.labelYearDropdown, f = [];
  if (!o)
    return u.jsx(u.Fragment, {});
  if (!a)
    return u.jsx(u.Fragment, {});
  for (var h = o.getFullYear(), m = a.getFullYear(), g = h; g <= m; g++)
    f.push(_s(eu(/* @__PURE__ */ new Date()), g));
  var D = function(b) {
    var w = _s(Ke(n), Number(b.target.value));
    e.onChange(w);
  }, y = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : Fd;
  return u.jsx(y, { name: "years", "aria-label": p(), className: l.dropdown_year, style: s.dropdown_year, onChange: D, value: n.getFullYear(), caption: d(n, { locale: i }), children: f.map(function(b) {
    return u.jsx("option", { value: b.getFullYear(), children: d(b, { locale: i }) }, b.getFullYear());
  }) });
}
function Eb(e, t) {
  var n = Q(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function Fb(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, l = s === void 0 ? 1 : s;
  if (a && Mr(a, o) < 0) {
    var c = -1 * (l - 1);
    o = dt(a, c);
  }
  return i && Mr(o, i) < 0 && (o = i), Ke(o);
}
function Sb() {
  var e = De(), t = Fb(e), n = Eb(t, e.month), r = n[0], o = n[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var l = Ke(i);
      o(l), (s = e.onMonthChange) === null || s === void 0 || s.call(e, l);
    }
  };
  return [r, a];
}
function Nb(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Ke(e), a = Ke(dt(o, r)), i = Mr(a, o), s = [], l = 0; l < i; l++) {
    var c = dt(o, l);
    s.push(c);
  }
  return n && (s = s.reverse()), s;
}
function kb(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Ke(e);
    if (!n)
      return dt(s, i);
    var l = Mr(n, e);
    if (!(l < a))
      return dt(s, i);
  }
}
function jb(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Ke(e);
    if (!n)
      return dt(s, -i);
    var l = Mr(s, n);
    if (!(l <= 0))
      return dt(s, -i);
  }
}
var Sd = Bn(void 0);
function Pb(e) {
  var t = De(), n = Sb(), r = n[0], o = n[1], a = Nb(r, t), i = kb(r, t), s = jb(r, t), l = function(p) {
    return a.some(function(f) {
      return wi(p, f);
    });
  }, c = function(p, f) {
    l(p) || (f && su(p, f) ? o(dt(p, 1 + t.numberOfMonths * -1)) : o(p));
  }, d = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: c,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: l
  };
  return u.jsx(Sd.Provider, { value: d, children: e.children });
}
function Xr() {
  var e = In(Sd);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Cl(e) {
  var t, n = De(), r = n.classNames, o = n.styles, a = n.components, i = Xr().goToMonth, s = function(d) {
    i(dt(d, e.displayIndex ? -e.displayIndex : 0));
  }, l = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Ed, c = u.jsx(l, { id: e.id, displayMonth: e.displayMonth });
  return u.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [u.jsx("div", { className: r.vhidden, children: c }), u.jsx(xb, { onChange: s, displayMonth: e.displayMonth }), u.jsx(Cb, { onChange: s, displayMonth: e.displayMonth })] });
}
function _b(e) {
  return u.jsx("svg", U({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Ab(e) {
  return u.jsx("svg", U({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var ko = hi(function(e, t) {
  var n = De(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = U(U({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), u.jsx("button", U({}, e, { ref: t, type: "button", className: i, style: s }));
});
function Ob(e) {
  var t, n, r = De(), o = r.dir, a = r.locale, i = r.classNames, s = r.styles, l = r.labels, c = l.labelPrevious, d = l.labelNext, p = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return u.jsx(u.Fragment, {});
  var f = c(e.previousMonth, { locale: a }), h = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), m = d(e.nextMonth, { locale: a }), g = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), D = (t = p == null ? void 0 : p.IconRight) !== null && t !== void 0 ? t : Ab, y = (n = p == null ? void 0 : p.IconLeft) !== null && n !== void 0 ? n : _b;
  return u.jsxs("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && u.jsx(ko, { name: "previous-month", "aria-label": f, className: h, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? u.jsx(D, { className: i.nav_icon, style: s.nav_icon }) : u.jsx(y, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && u.jsx(ko, { name: "next-month", "aria-label": m, className: g, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? u.jsx(y, { className: i.nav_icon, style: s.nav_icon }) : u.jsx(D, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function El(e) {
  var t = De().numberOfMonths, n = Xr(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, i = n.displayMonths, s = i.findIndex(function(m) {
    return wi(e.displayMonth, m);
  }), l = s === 0, c = s === i.length - 1, d = t > 1 && (l || !c), p = t > 1 && (c || !l), f = function() {
    r && a(r);
  }, h = function() {
    o && a(o);
  };
  return u.jsx(Ob, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: p, nextMonth: o, previousMonth: r, onPreviousClick: f, onNextClick: h });
}
function Rb(e) {
  var t, n = De(), r = n.classNames, o = n.disableNavigation, a = n.styles, i = n.captionLayout, s = n.components, l = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : Ed, c;
  return o ? c = u.jsx(l, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? c = u.jsx(Cl, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? c = u.jsxs(u.Fragment, { children: [u.jsx(Cl, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), u.jsx(El, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : c = u.jsxs(u.Fragment, { children: [u.jsx(l, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(El, { displayMonth: e.displayMonth, id: e.id })] }), u.jsx("div", { className: r.caption, style: a.caption, children: c });
}
function Tb(e) {
  var t = De(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? u.jsx("tfoot", { className: o, style: r.tfoot, children: u.jsx("tr", { children: u.jsx("td", { colSpan: 8, children: n }) }) }) : u.jsx(u.Fragment, {});
}
function Mb(e, t, n) {
  for (var r = n ? An(/* @__PURE__ */ new Date()) : Et(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = Ye(r, a);
    o.push(i);
  }
  return o;
}
function Bb() {
  var e = De(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, l = e.labels.labelWeekday, c = Mb(o, a, i);
  return u.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && u.jsx("td", { style: n.head_cell, className: t.head_cell }), c.map(function(d, p) {
    return u.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": l(d, { locale: o }), children: s(d, { locale: o }) }, p);
  })] });
}
function Ib() {
  var e, t = De(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : Bb;
  return u.jsx("thead", { style: r.head, className: n.head, children: u.jsx(a, {}) });
}
function Lb(e) {
  var t = De(), n = t.locale, r = t.formatters.formatDay;
  return u.jsx(u.Fragment, { children: r(e.date, { locale: n }) });
}
var ts = Bn(void 0);
function Wb(e) {
  if (!qr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return u.jsx(ts.Provider, { value: t, children: e.children });
  }
  return u.jsx($b, { initialProps: e.initialProps, children: e.children });
}
function $b(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, i = function(c, d, p) {
    var f, h;
    (f = t.onDayClick) === null || f === void 0 || f.call(t, c, d, p);
    var m = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!m) {
      var g = !!(!d.selected && a && (r == null ? void 0 : r.length) === a);
      if (!g) {
        var D = r ? xd([], r) : [];
        if (d.selected) {
          var y = D.findIndex(function(b) {
            return Xe(c, b);
          });
          D.splice(y, 1);
        } else
          D.push(c);
        (h = t.onSelect) === null || h === void 0 || h.call(t, D, c, d, p);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(c) {
    var d = a && r.length > a - 1, p = r.some(function(f) {
      return Xe(f, c);
    });
    return !!(d && !p);
  });
  var l = {
    selected: r,
    onDayClick: i,
    modifiers: s
  };
  return u.jsx(ts.Provider, { value: l, children: n });
}
function ns() {
  var e = In(ts);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function Hb(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Xe(o, e) && Xe(r, e) ? void 0 : Xe(o, e) ? { from: o, to: void 0 } : Xe(r, e) ? void 0 : Ya(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? Ya(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? su(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var rs = Bn(void 0);
function Vb(e) {
  if (!Gr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return u.jsx(rs.Provider, { value: t, children: e.children });
  }
  return u.jsx(Yb, { initialProps: e.initialProps, children: e.children });
}
function Yb(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, i = o.to, s = t.min, l = t.max, c = function(h, m, g) {
    var D, y;
    (D = t.onDayClick) === null || D === void 0 || D.call(t, h, m, g);
    var b = Hb(h, r);
    (y = t.onSelect) === null || y === void 0 || y.call(t, b, h, m, g);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (d.range_start = [a], i ? (d.range_end = [i], Xe(a, i) || (d.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : d.range_end = [a]) : i && (d.range_start = [i], d.range_end = [i]), s && (a && !i && d.disabled.push({
    after: fa(a, s - 1),
    before: Ye(a, s - 1)
  }), a && i && d.disabled.push({
    after: a,
    before: Ye(a, s - 1)
  }), !a && i && d.disabled.push({
    after: fa(i, s - 1),
    before: Ye(i, s - 1)
  })), l) {
    if (a && !i && (d.disabled.push({
      before: Ye(a, -l + 1)
    }), d.disabled.push({
      after: Ye(a, l - 1)
    })), a && i) {
      var p = xt(i, a) + 1, f = l - p;
      d.disabled.push({
        before: fa(a, f)
      }), d.disabled.push({
        after: Ye(i, f)
      });
    }
    !a && i && (d.disabled.push({
      before: Ye(i, -l + 1)
    }), d.disabled.push({
      after: Ye(i, l - 1)
    }));
  }
  return u.jsx(rs.Provider, { value: { selected: r, onDayClick: c, modifiers: d }, children: n });
}
function os() {
  var e = In(rs);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function bo(e) {
  return Array.isArray(e) ? xd([], e) : e !== void 0 ? [e] : [];
}
function zb(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = bo(o);
  }), t;
}
var ft;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(ft || (ft = {}));
var Ub = ft.Selected, Pt = ft.Disabled, qb = ft.Hidden, Gb = ft.Today, Pa = ft.RangeEnd, _a = ft.RangeMiddle, Aa = ft.RangeStart, Xb = ft.Outside;
function Kb(e, t, n) {
  var r, o = (r = {}, r[Ub] = bo(e.selected), r[Pt] = bo(e.disabled), r[qb] = bo(e.hidden), r[Gb] = [e.today], r[Pa] = [], r[_a] = [], r[Aa] = [], r[Xb] = [], r);
  return e.fromDate && o[Pt].push({ before: e.fromDate }), e.toDate && o[Pt].push({ after: e.toDate }), qr(e) ? o[Pt] = o[Pt].concat(t.modifiers[Pt]) : Gr(e) && (o[Pt] = o[Pt].concat(n.modifiers[Pt]), o[Aa] = n.modifiers[Aa], o[_a] = n.modifiers[_a], o[Pa] = n.modifiers[Pa]), o;
}
var Nd = Bn(void 0);
function Jb(e) {
  var t = De(), n = ns(), r = os(), o = Kb(t, n, r), a = zb(t.modifiers), i = U(U({}, o), a);
  return u.jsx(Nd.Provider, { value: i, children: e.children });
}
function kd() {
  var e = In(Nd);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Qb(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Zb(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function ew(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function tw(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function nw(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function rw(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = xt(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var i = xt(e, r) >= 0 && xt(o, e) >= 0;
    return i;
  }
  return o ? Xe(o, e) : r ? Xe(r, e) : !1;
}
function ow(e) {
  return Di(e);
}
function aw(e) {
  return Array.isArray(e) && e.every(Di);
}
function iw(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (ow(n))
      return Xe(e, n);
    if (aw(n))
      return n.includes(e);
    if (Zb(n))
      return rw(e, n);
    if (nw(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Qb(n)) {
      var r = xt(n.before, e), o = xt(n.after, e), a = r > 0, i = o < 0, s = Ya(n.before, n.after);
      return s ? i && a : a || i;
    }
    return ew(n) ? xt(e, n.after) > 0 : tw(n) ? xt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function as(e, t, n) {
  var r = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return iw(e, s) && a.push(i), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !wi(e, n) && (o.outside = !0), o;
}
function sw(e, t) {
  for (var n = Ke(e[0]), r = yi(e[e.length - 1]), o, a, i = n; i <= r; ) {
    var s = as(i, t), l = !s.disabled && !s.hidden;
    if (!l) {
      i = Ye(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), o || (o = i), i = Ye(i, 1);
  }
  return a || o;
}
var lw = 365;
function jd(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, l = o.weekStartsOn, c = o.fromDate, d = o.toDate, p = o.locale, f = {
    day: Ye,
    week: Va,
    month: dt,
    year: fh,
    startOfWeek: function(D) {
      return o.ISOWeek ? An(D) : Et(D, { locale: p, weekStartsOn: l });
    },
    endOfWeek: function(D) {
      return o.ISOWeek ? tu(D) : bi(D, { locale: p, weekStartsOn: l });
    }
  }, h = f[n](e, r === "after" ? 1 : -1);
  r === "before" && c ? h = ph([c, h]) : r === "after" && d && (h = hh([d, h]));
  var m = !0;
  if (a) {
    var g = as(h, a);
    m = !g.disabled && !g.hidden;
  }
  return m ? h : s.count > lw ? s.lastFocused : jd(h, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: U(U({}, s), { count: s.count + 1 })
  });
}
var Pd = Bn(void 0);
function uw(e) {
  var t = Xr(), n = kd(), r = Q(), o = r[0], a = r[1], i = Q(), s = i[0], l = i[1], c = sw(t.displayMonths, n), d = o ?? (s && t.isDateDisplayed(s)) ? s : c, p = function() {
    l(o), a(void 0);
  }, f = function(D) {
    a(D);
  }, h = De(), m = function(D, y) {
    if (o) {
      var b = jd(o, {
        moveBy: D,
        direction: y,
        context: h,
        modifiers: n
      });
      Xe(o, b) || (t.goToDate(b, o), f(b));
    }
  }, g = {
    focusedDay: o,
    focusTarget: d,
    blur: p,
    focus: f,
    focusDayAfter: function() {
      return m("day", "after");
    },
    focusDayBefore: function() {
      return m("day", "before");
    },
    focusWeekAfter: function() {
      return m("week", "after");
    },
    focusWeekBefore: function() {
      return m("week", "before");
    },
    focusMonthBefore: function() {
      return m("month", "before");
    },
    focusMonthAfter: function() {
      return m("month", "after");
    },
    focusYearBefore: function() {
      return m("year", "before");
    },
    focusYearAfter: function() {
      return m("year", "after");
    },
    focusStartOfWeek: function() {
      return m("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return m("endOfWeek", "after");
    }
  };
  return u.jsx(Pd.Provider, { value: g, children: e.children });
}
function is() {
  var e = In(Pd);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function cw(e, t) {
  var n = kd(), r = as(e, n, t);
  return r;
}
var ss = Bn(void 0);
function dw(e) {
  if (!Jo(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return u.jsx(ss.Provider, { value: t, children: e.children });
  }
  return u.jsx(fw, { initialProps: e.initialProps, children: e.children });
}
function fw(e) {
  var t = e.initialProps, n = e.children, r = function(a, i, s) {
    var l, c, d;
    if ((l = t.onDayClick) === null || l === void 0 || l.call(t, a, i, s), i.selected && !t.required) {
      (c = t.onSelect) === null || c === void 0 || c.call(t, void 0, a, i, s);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, a, a, i, s);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return u.jsx(ss.Provider, { value: o, children: n });
}
function _d() {
  var e = In(ss);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function pw(e, t) {
  var n = De(), r = _d(), o = ns(), a = os(), i = is(), s = i.focusDayAfter, l = i.focusDayBefore, c = i.focusWeekAfter, d = i.focusWeekBefore, p = i.blur, f = i.focus, h = i.focusMonthBefore, m = i.focusMonthAfter, g = i.focusYearBefore, D = i.focusYearAfter, y = i.focusStartOfWeek, b = i.focusEndOfWeek, w = function(j) {
    var O, Y, ue, oe;
    Jo(n) ? (O = r.onDayClick) === null || O === void 0 || O.call(r, e, t, j) : qr(n) ? (Y = o.onDayClick) === null || Y === void 0 || Y.call(o, e, t, j) : Gr(n) ? (ue = a.onDayClick) === null || ue === void 0 || ue.call(a, e, t, j) : (oe = n.onDayClick) === null || oe === void 0 || oe.call(n, e, t, j);
  }, C = function(j) {
    var O;
    f(e), (O = n.onDayFocus) === null || O === void 0 || O.call(n, e, t, j);
  }, E = function(j) {
    var O;
    p(), (O = n.onDayBlur) === null || O === void 0 || O.call(n, e, t, j);
  }, F = function(j) {
    var O;
    (O = n.onDayMouseEnter) === null || O === void 0 || O.call(n, e, t, j);
  }, S = function(j) {
    var O;
    (O = n.onDayMouseLeave) === null || O === void 0 || O.call(n, e, t, j);
  }, P = function(j) {
    var O;
    (O = n.onDayPointerEnter) === null || O === void 0 || O.call(n, e, t, j);
  }, N = function(j) {
    var O;
    (O = n.onDayPointerLeave) === null || O === void 0 || O.call(n, e, t, j);
  }, k = function(j) {
    var O;
    (O = n.onDayTouchCancel) === null || O === void 0 || O.call(n, e, t, j);
  }, L = function(j) {
    var O;
    (O = n.onDayTouchEnd) === null || O === void 0 || O.call(n, e, t, j);
  }, _ = function(j) {
    var O;
    (O = n.onDayTouchMove) === null || O === void 0 || O.call(n, e, t, j);
  }, T = function(j) {
    var O;
    (O = n.onDayTouchStart) === null || O === void 0 || O.call(n, e, t, j);
  }, B = function(j) {
    var O;
    (O = n.onDayKeyUp) === null || O === void 0 || O.call(n, e, t, j);
  }, W = function(j) {
    var O;
    switch (j.key) {
      case "ArrowLeft":
        j.preventDefault(), j.stopPropagation(), n.dir === "rtl" ? s() : l();
        break;
      case "ArrowRight":
        j.preventDefault(), j.stopPropagation(), n.dir === "rtl" ? l() : s();
        break;
      case "ArrowDown":
        j.preventDefault(), j.stopPropagation(), c();
        break;
      case "ArrowUp":
        j.preventDefault(), j.stopPropagation(), d();
        break;
      case "PageUp":
        j.preventDefault(), j.stopPropagation(), j.shiftKey ? g() : h();
        break;
      case "PageDown":
        j.preventDefault(), j.stopPropagation(), j.shiftKey ? D() : m();
        break;
      case "Home":
        j.preventDefault(), j.stopPropagation(), y();
        break;
      case "End":
        j.preventDefault(), j.stopPropagation(), b();
        break;
    }
    (O = n.onDayKeyDown) === null || O === void 0 || O.call(n, e, t, j);
  }, H = {
    onClick: w,
    onFocus: C,
    onBlur: E,
    onKeyDown: W,
    onKeyUp: B,
    onMouseEnter: F,
    onMouseLeave: S,
    onPointerEnter: P,
    onPointerLeave: N,
    onTouchCancel: k,
    onTouchEnd: L,
    onTouchMove: _,
    onTouchStart: T
  };
  return H;
}
function hw() {
  var e = De(), t = _d(), n = ns(), r = os(), o = Jo(e) ? t.selected : qr(e) ? n.selected : Gr(e) ? r.selected : void 0;
  return o;
}
function mw(e) {
  return Object.values(ft).includes(e);
}
function gw(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (mw(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function vw(e, t) {
  var n = U({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = U(U({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function Dw(e, t, n) {
  var r, o, a, i = De(), s = is(), l = cw(e, t), c = pw(e, l), d = hw(), p = !!(i.onDayClick || i.mode !== "default");
  Rt(function() {
    var F;
    l.outside || s.focusedDay && p && Xe(s.focusedDay, e) && ((F = n.current) === null || F === void 0 || F.focus());
  }, [
    s.focusedDay,
    e,
    n,
    p,
    l.outside
  ]);
  var f = gw(i, l).join(" "), h = vw(i, l), m = !!(l.outside && !i.showOutsideDays || l.hidden), g = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : Lb, D = u.jsx(g, { date: e, displayMonth: t, activeModifiers: l }), y = {
    style: h,
    className: f,
    children: D,
    role: "gridcell"
  }, b = s.focusTarget && Xe(s.focusTarget, e) && !l.outside, w = s.focusedDay && Xe(s.focusedDay, e), C = U(U(U({}, y), (r = { disabled: l.disabled, role: "gridcell" }, r["aria-selected"] = l.selected, r.tabIndex = w || b ? 0 : -1, r)), c), E = {
    isButton: p,
    isHidden: m,
    activeModifiers: l,
    selectedDays: d,
    buttonProps: C,
    divProps: y
  };
  return E;
}
function yw(e) {
  var t = fp(null), n = Dw(e.date, e.displayMonth, t);
  return n.isHidden ? u.jsx("div", { role: "gridcell" }) : n.isButton ? u.jsx(ko, U({ name: "day", ref: t }, n.buttonProps)) : u.jsx("div", U({}, n.divProps));
}
function bw(e) {
  var t = e.number, n = e.dates, r = De(), o = r.onWeekNumberClick, a = r.styles, i = r.classNames, s = r.locale, l = r.labels.labelWeekNumber, c = r.formatters.formatWeekNumber, d = c(Number(t), { locale: s });
  if (!o)
    return u.jsx("span", { className: i.weeknumber, style: a.weeknumber, children: d });
  var p = l(Number(t), { locale: s }), f = function(h) {
    o(t, n, h);
  };
  return u.jsx(ko, { name: "week-number", "aria-label": p, className: i.weeknumber, style: a.weeknumber, onClick: f, children: d });
}
function ww(e) {
  var t, n, r = De(), o = r.styles, a = r.classNames, i = r.showWeekNumber, s = r.components, l = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : yw, c = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : bw, d;
  return i && (d = u.jsx("td", { className: a.cell, style: o.cell, children: u.jsx(c, { number: e.weekNumber, dates: e.dates }) })), u.jsxs("tr", { className: a.row, style: o.row, children: [d, e.dates.map(function(p) {
    return u.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: u.jsx(l, { displayMonth: e.displayMonth, date: p }) }, pm(p));
  })] });
}
function Fl(e, t, n) {
  for (var r = n != null && n.ISOWeek ? tu(t) : bi(t, n), o = n != null && n.ISOWeek ? An(e) : Et(e, n), a = xt(r, o), i = [], s = 0; s <= a; s++)
    i.push(Ye(o, s));
  var l = i.reduce(function(c, d) {
    var p = n != null && n.ISOWeek ? ru(d) : au(d, n), f = c.find(function(h) {
      return h.weekNumber === p;
    });
    return f ? (f.dates.push(d), c) : (c.push({
      weekNumber: p,
      dates: [d]
    }), c);
  }, []);
  return l;
}
function xw(e, t) {
  var n = Fl(Ke(e), yi(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = mm(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], i = Va(a, 6 - r), s = Fl(Va(a, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function Cw(e) {
  var t, n, r, o = De(), a = o.locale, i = o.classNames, s = o.styles, l = o.hideHead, c = o.fixedWeeks, d = o.components, p = o.weekStartsOn, f = o.firstWeekContainsDate, h = o.ISOWeek, m = xw(e.displayMonth, {
    useFixedWeeks: !!c,
    ISOWeek: h,
    locale: a,
    weekStartsOn: p,
    firstWeekContainsDate: f
  }), g = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : Ib, D = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : ww, y = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : Tb;
  return u.jsxs("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!l && u.jsx(g, {}), u.jsx("tbody", { className: i.tbody, style: s.tbody, children: m.map(function(b) {
    return u.jsx(D, { displayMonth: e.displayMonth, dates: b.dates, weekNumber: b.weekNumber }, b.weekNumber);
  }) }), u.jsx(y, { displayMonth: e.displayMonth })] });
}
function Ew() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Fw = Ew() ? pi : Rt, Oa = !1, Sw = 0;
function Sl() {
  return "react-day-picker-".concat(++Sw);
}
function Nw(e) {
  var t, n = e ?? (Oa ? Sl() : null), r = Q(n), o = r[0], a = r[1];
  return Fw(function() {
    o === null && a(Sl());
  }, []), Rt(function() {
    Oa === !1 && (Oa = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function kw(e) {
  var t, n, r = De(), o = r.dir, a = r.classNames, i = r.styles, s = r.components, l = Xr().displayMonths, c = Nw(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, p = [a.month], f = i.month, h = e.displayIndex === 0, m = e.displayIndex === l.length - 1, g = !h && !m;
  o === "rtl" && (t = [h, m], m = t[0], h = t[1]), h && (p.push(a.caption_start), f = U(U({}, f), i.caption_start)), m && (p.push(a.caption_end), f = U(U({}, f), i.caption_end)), g && (p.push(a.caption_between), f = U(U({}, f), i.caption_between));
  var D = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : Rb;
  return u.jsxs("div", { className: p.join(" "), style: f, children: [u.jsx(D, { id: c, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(Cw, { id: d, "aria-labelledby": c, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function jw(e) {
  var t = De(), n = t.classNames, r = t.styles;
  return u.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function Pw(e) {
  var t, n, r = e.initialProps, o = De(), a = is(), i = Xr(), s = Q(!1), l = s[0], c = s[1];
  Rt(function() {
    o.initialFocus && a.focusTarget && (l || (a.focus(a.focusTarget), c(!0)));
  }, [
    o.initialFocus,
    l,
    a.focus,
    a.focusTarget,
    a
  ]);
  var d = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && d.push(o.classNames.multiple_months), o.showWeekNumber && d.push(o.classNames.with_weeknumber);
  var p = U(U({}, o.styles.root), o.style), f = Object.keys(r).filter(function(m) {
    return m.startsWith("data-");
  }).reduce(function(m, g) {
    var D;
    return U(U({}, m), (D = {}, D[g] = r[g], D));
  }, {}), h = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : jw;
  return u.jsx("div", U({ className: d.join(" "), style: p, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, f, { children: u.jsx(h, { children: i.displayMonths.map(function(m, g) {
    return u.jsx(kw, { displayIndex: g, displayMonth: m }, g);
  }) }) }));
}
function _w(e) {
  var t = e.children, n = tb(e, ["children"]);
  return u.jsx(bb, { initialProps: n, children: u.jsx(Pb, { children: u.jsx(dw, { initialProps: n, children: u.jsx(Wb, { initialProps: n, children: u.jsx(Vb, { initialProps: n, children: u.jsx(Jb, { children: u.jsx(uw, { children: t }) }) }) }) }) }) });
}
function Aw(e) {
  return u.jsx(_w, U({}, e, { children: u.jsx(Pw, { initialProps: e }) }));
}
function Ad({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ u.jsx(
    Aw,
    {
      showOutsideDays: n,
      className: J("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: J(
          $a({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: J(
          $a({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: ({ ...o }) => /* @__PURE__ */ u.jsx(Qy, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ u.jsx(Zy, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
Ad.displayName = "Calendar";
const Ow = ["top", "right", "bottom", "left"], Ct = Math.min, Ze = Math.max, jo = Math.round, po = Math.floor, on = (e) => ({
  x: e,
  y: e
}), Rw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Tw = {
  start: "end",
  end: "start"
};
function ai(e, t, n) {
  return Ze(e, Ct(t, n));
}
function Mt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Bt(e) {
  return e.split("-")[0];
}
function mr(e) {
  return e.split("-")[1];
}
function ls(e) {
  return e === "x" ? "y" : "x";
}
function us(e) {
  return e === "y" ? "height" : "width";
}
function an(e) {
  return ["top", "bottom"].includes(Bt(e)) ? "y" : "x";
}
function cs(e) {
  return ls(an(e));
}
function Mw(e, t, n) {
  n === void 0 && (n = !1);
  const r = mr(e), o = cs(e), a = us(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Po(i)), [i, Po(i)];
}
function Bw(e) {
  const t = Po(e);
  return [ii(e), t, ii(t)];
}
function ii(e) {
  return e.replace(/start|end/g, (t) => Tw[t]);
}
function Iw(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function Lw(e, t, n, r) {
  const o = mr(e);
  let a = Iw(Bt(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(ii)))), a;
}
function Po(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Rw[t]);
}
function Ww(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Od(e) {
  return typeof e != "number" ? Ww(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function _o(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Nl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = an(t), i = cs(t), s = us(i), l = Bt(t), c = a === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (mr(t)) {
    case "start":
      h[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      h[i] += f * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const $w = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: p
  } = Nl(c, r, l), f = r, h = {}, m = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: D,
      fn: y
    } = s[g], {
      x: b,
      y: w,
      data: C,
      reset: E
    } = await y({
      x: d,
      y: p,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = b ?? d, p = w ?? p, h = {
      ...h,
      [D]: {
        ...h[D],
        ...C
      }
    }, E && m <= 50 && (m++, typeof E == "object" && (E.placement && (f = E.placement), E.rects && (c = E.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: p
    } = Nl(c, f, l)), g = -1);
  }
  return {
    x: d,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function Ir(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = Mt(t, e), m = Od(h), D = s[f ? p === "floating" ? "reference" : "floating" : p], y = _o(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(D))) == null || n ? D : D.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), b = p === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), C = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = _o(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (y.top - E.top + m.top) / C.y,
    bottom: (E.bottom - y.bottom + m.bottom) / C.y,
    left: (y.left - E.left + m.left) / C.x,
    right: (E.right - y.right + m.right) / C.x
  };
}
const Hw = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: l
    } = t, {
      element: c,
      padding: d = 0
    } = Mt(e, t) || {};
    if (c == null)
      return {};
    const p = Od(d), f = {
      x: n,
      y: r
    }, h = cs(o), m = us(h), g = await i.getDimensions(c), D = h === "y", y = D ? "top" : "left", b = D ? "bottom" : "right", w = D ? "clientHeight" : "clientWidth", C = a.reference[m] + a.reference[h] - f[h] - a.floating[m], E = f[h] - a.reference[h], F = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let S = F ? F[w] : 0;
    (!S || !await (i.isElement == null ? void 0 : i.isElement(F))) && (S = s.floating[w] || a.floating[m]);
    const P = C / 2 - E / 2, N = S / 2 - g[m] / 2 - 1, k = Ct(p[y], N), L = Ct(p[b], N), _ = k, T = S - g[m] - L, B = S / 2 - g[m] / 2 + P, W = ai(_, B, T), H = !l.arrow && mr(o) != null && B !== W && a.reference[m] / 2 - (B < _ ? k : L) - g[m] / 2 < 0, j = H ? B < _ ? B - _ : B - T : 0;
    return {
      [h]: f[h] + j,
      data: {
        [h]: W,
        centerOffset: B - W - j,
        ...H && {
          alignmentOffset: j
        }
      },
      reset: H
    };
  }
}), Vw = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: l,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: p = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...D
      } = Mt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = Bt(o), b = an(s), w = Bt(s) === s, C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), E = f || (w || !g ? [Po(s)] : Bw(s)), F = m !== "none";
      !f && F && E.push(...Lw(s, g, m, C));
      const S = [s, ...E], P = await Ir(t, D), N = [];
      let k = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (d && N.push(P[y]), p) {
        const B = Mw(o, i, C);
        N.push(P[B[0]], P[B[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: N
      }], !N.every((B) => B <= 0)) {
        var L, _;
        const B = (((L = a.flip) == null ? void 0 : L.index) || 0) + 1, W = S[B];
        if (W)
          return {
            data: {
              index: B,
              overflows: k
            },
            reset: {
              placement: W
            }
          };
        let H = (_ = k.filter((j) => j.overflows[0] <= 0).sort((j, O) => j.overflows[1] - O.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!H)
          switch (h) {
            case "bestFit": {
              var T;
              const j = (T = k.filter((O) => {
                if (F) {
                  const Y = an(O.placement);
                  return Y === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((Y) => Y > 0).reduce((Y, ue) => Y + ue, 0)]).sort((O, Y) => O[1] - Y[1])[0]) == null ? void 0 : T[0];
              j && (H = j);
              break;
            }
            case "initialPlacement":
              H = s;
              break;
          }
        if (o !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
function kl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function jl(e) {
  return Ow.some((t) => e[t] >= 0);
}
const Yw = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Mt(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Ir(t, {
            ...o,
            elementContext: "reference"
          }), i = kl(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: jl(i)
            }
          };
        }
        case "escaped": {
          const a = await Ir(t, {
            ...o,
            altBoundary: !0
          }), i = kl(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: jl(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function zw(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Bt(n), s = mr(n), l = an(n) === "y", c = ["left", "top"].includes(i) ? -1 : 1, d = a && l ? -1 : 1, p = Mt(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: m
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return s && typeof m == "number" && (h = s === "end" ? m * -1 : m), l ? {
    x: h * d,
    y: f * c
  } : {
    x: f * c,
    y: h * d
  };
}
const Uw = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, l = await zw(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, qw = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (D) => {
            let {
              x: y,
              y: b
            } = D;
            return {
              x: y,
              y: b
            };
          }
        },
        ...l
      } = Mt(e, t), c = {
        x: n,
        y: r
      }, d = await Ir(t, l), p = an(Bt(o)), f = ls(p);
      let h = c[f], m = c[p];
      if (a) {
        const D = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", b = h + d[D], w = h - d[y];
        h = ai(b, h, w);
      }
      if (i) {
        const D = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", b = m + d[D], w = m - d[y];
        m = ai(b, m, w);
      }
      const g = s.fn({
        ...t,
        [f]: h,
        [p]: m
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r
        }
      };
    }
  };
}, Gw = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = Mt(e, t), d = {
        x: n,
        y: r
      }, p = an(o), f = ls(p);
      let h = d[f], m = d[p];
      const g = Mt(s, t), D = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const w = f === "y" ? "height" : "width", C = a.reference[f] - a.floating[w] + D.mainAxis, E = a.reference[f] + a.reference[w] - D.mainAxis;
        h < C ? h = C : h > E && (h = E);
      }
      if (c) {
        var y, b;
        const w = f === "y" ? "width" : "height", C = ["top", "left"].includes(Bt(o)), E = a.reference[p] - a.floating[w] + (C && ((y = i.offset) == null ? void 0 : y[p]) || 0) + (C ? 0 : D.crossAxis), F = a.reference[p] + a.reference[w] + (C ? 0 : ((b = i.offset) == null ? void 0 : b[p]) || 0) - (C ? D.crossAxis : 0);
        m < E ? m = E : m > F && (m = F);
      }
      return {
        [f]: h,
        [p]: m
      };
    }
  };
}, Xw = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: a
      } = t, {
        apply: i = () => {
        },
        ...s
      } = Mt(e, t), l = await Ir(t, s), c = Bt(n), d = mr(n), p = an(n) === "y", {
        width: f,
        height: h
      } = r.floating;
      let m, g;
      c === "top" || c === "bottom" ? (m = c, g = d === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = c, m = d === "end" ? "top" : "bottom");
      const D = h - l.top - l.bottom, y = f - l.left - l.right, b = Ct(h - l[m], D), w = Ct(f - l[g], y), C = !t.middlewareData.shift;
      let E = b, F = w;
      if (p ? F = d || C ? Ct(w, y) : y : E = d || C ? Ct(b, D) : D, C && !d) {
        const P = Ze(l.left, 0), N = Ze(l.right, 0), k = Ze(l.top, 0), L = Ze(l.bottom, 0);
        p ? F = f - 2 * (P !== 0 || N !== 0 ? P + N : Ze(l.left, l.right)) : E = h - 2 * (k !== 0 || L !== 0 ? k + L : Ze(l.top, l.bottom));
      }
      await i({
        ...t,
        availableWidth: F,
        availableHeight: E
      });
      const S = await o.getDimensions(a.floating);
      return f !== S.width || h !== S.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function gr(e) {
  return Rd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qt(e) {
  var t;
  return (t = (Rd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Rd(e) {
  return e instanceof Node || e instanceof tt(e).Node;
}
function pt(e) {
  return e instanceof Element || e instanceof tt(e).Element;
}
function Ft(e) {
  return e instanceof HTMLElement || e instanceof tt(e).HTMLElement;
}
function Pl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot;
}
function Kr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ht(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Kw(e) {
  return ["table", "td", "th"].includes(gr(e));
}
function Qo(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ds(e) {
  const t = fs(), n = pt(e) ? ht(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Jw(e) {
  let t = sn(e);
  for (; Ft(t) && !dr(t); ) {
    if (ds(t))
      return t;
    if (Qo(t))
      return null;
    t = sn(t);
  }
  return null;
}
function fs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function dr(e) {
  return ["html", "body", "#document"].includes(gr(e));
}
function ht(e) {
  return tt(e).getComputedStyle(e);
}
function Zo(e) {
  return pt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function sn(e) {
  if (gr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Pl(e) && e.host || // Fallback.
    qt(e)
  );
  return Pl(t) ? t.host : t;
}
function Td(e) {
  const t = sn(e);
  return dr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ft(t) && Kr(t) ? t : Td(t);
}
function Lr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Td(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = tt(o);
  if (a) {
    const s = si(i);
    return t.concat(i, i.visualViewport || [], Kr(o) ? o : [], s && n ? Lr(s) : []);
  }
  return t.concat(o, Lr(o, [], n));
}
function si(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Md(e) {
  const t = ht(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ft(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = jo(n) !== a || jo(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function ps(e) {
  return pt(e) ? e : e.contextElement;
}
function ar(e) {
  const t = ps(e);
  if (!Ft(t))
    return on(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Md(t);
  let i = (a ? jo(n.width) : n.width) / r, s = (a ? jo(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Qw = /* @__PURE__ */ on(0);
function Bd(e) {
  const t = tt(e);
  return !fs() || !t.visualViewport ? Qw : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Zw(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== tt(e) ? !1 : t;
}
function Tn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = ps(e);
  let i = on(1);
  t && (r ? pt(r) && (i = ar(r)) : i = ar(e));
  const s = Zw(a, n, r) ? Bd(a) : on(0);
  let l = (o.left + s.x) / i.x, c = (o.top + s.y) / i.y, d = o.width / i.x, p = o.height / i.y;
  if (a) {
    const f = tt(a), h = r && pt(r) ? tt(r) : r;
    let m = f, g = si(m);
    for (; g && r && h !== m; ) {
      const D = ar(g), y = g.getBoundingClientRect(), b = ht(g), w = y.left + (g.clientLeft + parseFloat(b.paddingLeft)) * D.x, C = y.top + (g.clientTop + parseFloat(b.paddingTop)) * D.y;
      l *= D.x, c *= D.y, d *= D.x, p *= D.y, l += w, c += C, m = tt(g), g = si(m);
    }
  }
  return _o({
    width: d,
    height: p,
    x: l,
    y: c
  });
}
function ex(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = qt(r), s = t ? Qo(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = on(1);
  const d = on(0), p = Ft(r);
  if ((p || !p && !a) && ((gr(r) !== "body" || Kr(i)) && (l = Zo(r)), Ft(r))) {
    const f = Tn(r);
    c = ar(r), d.x = f.x + r.clientLeft, d.y = f.y + r.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y
  };
}
function tx(e) {
  return Array.from(e.getClientRects());
}
function Id(e) {
  return Tn(qt(e)).left + Zo(e).scrollLeft;
}
function nx(e) {
  const t = qt(e), n = Zo(e), r = e.ownerDocument.body, o = Ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Id(e);
  const s = -n.scrollTop;
  return ht(r).direction === "rtl" && (i += Ze(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function rx(e, t) {
  const n = tt(e), r = qt(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const c = fs();
    (!c || c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function ox(e, t) {
  const n = Tn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Ft(e) ? ar(e) : on(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, c = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function _l(e, t, n) {
  let r;
  if (t === "viewport")
    r = rx(e, n);
  else if (t === "document")
    r = nx(qt(e));
  else if (pt(t))
    r = ox(t, n);
  else {
    const o = Bd(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return _o(r);
}
function Ld(e, t) {
  const n = sn(e);
  return n === t || !pt(n) || dr(n) ? !1 : ht(n).position === "fixed" || Ld(n, t);
}
function ax(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Lr(e, [], !1).filter((s) => pt(s) && gr(s) !== "body"), o = null;
  const a = ht(e).position === "fixed";
  let i = a ? sn(e) : e;
  for (; pt(i) && !dr(i); ) {
    const s = ht(i), l = ds(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Kr(i) && !l && Ld(e, i)) ? r = r.filter((d) => d !== i) : o = s, i = sn(i);
  }
  return t.set(e, r), r;
}
function ix(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Qo(t) ? [] : ax(t, this._c) : [].concat(n), r], s = i[0], l = i.reduce((c, d) => {
    const p = _l(t, d, o);
    return c.top = Ze(p.top, c.top), c.right = Ct(p.right, c.right), c.bottom = Ct(p.bottom, c.bottom), c.left = Ze(p.left, c.left), c;
  }, _l(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function sx(e) {
  const {
    width: t,
    height: n
  } = Md(e);
  return {
    width: t,
    height: n
  };
}
function lx(e, t, n) {
  const r = Ft(t), o = qt(t), a = n === "fixed", i = Tn(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = on(0);
  if (r || !r && !a)
    if ((gr(t) !== "body" || Kr(o)) && (s = Zo(t)), r) {
      const p = Tn(t, !0, a, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else o && (l.x = Id(o));
  const c = i.left + s.scrollLeft - l.x, d = i.top + s.scrollTop - l.y;
  return {
    x: c,
    y: d,
    width: i.width,
    height: i.height
  };
}
function Ra(e) {
  return ht(e).position === "static";
}
function Al(e, t) {
  return !Ft(e) || ht(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Wd(e, t) {
  const n = tt(e);
  if (Qo(e))
    return n;
  if (!Ft(e)) {
    let o = sn(e);
    for (; o && !dr(o); ) {
      if (pt(o) && !Ra(o))
        return o;
      o = sn(o);
    }
    return n;
  }
  let r = Al(e, t);
  for (; r && Kw(r) && Ra(r); )
    r = Al(r, t);
  return r && dr(r) && Ra(r) && !ds(r) ? n : r || Jw(e) || n;
}
const ux = async function(e) {
  const t = this.getOffsetParent || Wd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: lx(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function cx(e) {
  return ht(e).direction === "rtl";
}
const dx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ex,
  getDocumentElement: qt,
  getClippingRect: ix,
  getOffsetParent: Wd,
  getElementRects: ux,
  getClientRects: tx,
  getDimensions: sx,
  getScale: ar,
  isElement: pt,
  isRTL: cx
};
function fx(e, t) {
  let n = null, r;
  const o = qt(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const {
      left: c,
      top: d,
      width: p,
      height: f
    } = e.getBoundingClientRect();
    if (s || t(), !p || !f)
      return;
    const h = po(d), m = po(o.clientWidth - (c + p)), g = po(o.clientHeight - (d + f)), D = po(c), b = {
      rootMargin: -h + "px " + -m + "px " + -g + "px " + -D + "px",
      threshold: Ze(0, Ct(1, l)) || 1
    };
    let w = !0;
    function C(E) {
      const F = E[0].intersectionRatio;
      if (F !== l) {
        if (!w)
          return i();
        F ? i(!1, F) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, b);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function px(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = ps(e), d = o || a ? [...c ? Lr(c) : [], ...Lr(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const p = c && s ? fx(c, n) : null;
  let f = -1, h = null;
  i && (h = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === c && h && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var w;
      (w = h) == null || w.observe(t);
    })), n();
  }), c && !l && h.observe(c), h.observe(t));
  let m, g = l ? Tn(e) : null;
  l && D();
  function D() {
    const y = Tn(e);
    g && (y.x !== g.x || y.y !== g.y || y.width !== g.width || y.height !== g.height) && n(), g = y, m = requestAnimationFrame(D);
  }
  return n(), () => {
    var y;
    d.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), p == null || p(), (y = h) == null || y.disconnect(), h = null, l && cancelAnimationFrame(m);
  };
}
const hx = Uw, mx = qw, gx = Vw, vx = Xw, Dx = Yw, Ol = Hw, yx = Gw, bx = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: dx,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return $w(e, t, {
    ...o,
    platform: a
  });
};
var wo = typeof document < "u" ? pi : Rt;
function Ao(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ao(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Ao(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function $d(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Rl(e, t) {
  const n = $d(e);
  return Math.round(t * n) / n;
}
function Tl(e) {
  const t = v.useRef(e);
  return wo(() => {
    t.current = e;
  }), t;
}
function wx(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: c
  } = e, [d, p] = v.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, h] = v.useState(r);
  Ao(f, r) || h(r);
  const [m, g] = v.useState(null), [D, y] = v.useState(null), b = v.useCallback((j) => {
    j !== F.current && (F.current = j, g(j));
  }, []), w = v.useCallback((j) => {
    j !== S.current && (S.current = j, y(j));
  }, []), C = a || m, E = i || D, F = v.useRef(null), S = v.useRef(null), P = v.useRef(d), N = l != null, k = Tl(l), L = Tl(o), _ = v.useCallback(() => {
    if (!F.current || !S.current)
      return;
    const j = {
      placement: t,
      strategy: n,
      middleware: f
    };
    L.current && (j.platform = L.current), bx(F.current, S.current, j).then((O) => {
      const Y = {
        ...O,
        isPositioned: !0
      };
      T.current && !Ao(P.current, Y) && (P.current = Y, Wr.flushSync(() => {
        p(Y);
      }));
    });
  }, [f, t, n, L]);
  wo(() => {
    c === !1 && P.current.isPositioned && (P.current.isPositioned = !1, p((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [c]);
  const T = v.useRef(!1);
  wo(() => (T.current = !0, () => {
    T.current = !1;
  }), []), wo(() => {
    if (C && (F.current = C), E && (S.current = E), C && E) {
      if (k.current)
        return k.current(C, E, _);
      _();
    }
  }, [C, E, _, k, N]);
  const B = v.useMemo(() => ({
    reference: F,
    floating: S,
    setReference: b,
    setFloating: w
  }), [b, w]), W = v.useMemo(() => ({
    reference: C,
    floating: E
  }), [C, E]), H = v.useMemo(() => {
    const j = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return j;
    const O = Rl(W.floating, d.x), Y = Rl(W.floating, d.y);
    return s ? {
      ...j,
      transform: "translate(" + O + "px, " + Y + "px)",
      ...$d(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: Y
    };
  }, [n, s, W.floating, d.x, d.y]);
  return v.useMemo(() => ({
    ...d,
    update: _,
    refs: B,
    elements: W,
    floatingStyles: H
  }), [d, _, B, W, H]);
}
const xx = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Ol({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ol({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Cx = (e, t) => ({
  ...hx(e),
  options: [e, t]
}), Ex = (e, t) => ({
  ...mx(e),
  options: [e, t]
}), Fx = (e, t) => ({
  ...yx(e),
  options: [e, t]
}), Sx = (e, t) => ({
  ...gx(e),
  options: [e, t]
}), Nx = (e, t) => ({
  ...vx(e),
  options: [e, t]
}), kx = (e, t) => ({
  ...Dx(e),
  options: [e, t]
}), jx = (e, t) => ({
  ...xx(e),
  options: [e, t]
});
var Px = "Arrow", Hd = v.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ u.jsx(
    ne.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ u.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Hd.displayName = Px;
var _x = Hd, hs = "Popper", [Vd, ea] = ln(hs), [Ax, Yd] = Vd(hs), zd = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = v.useState(null);
  return /* @__PURE__ */ u.jsx(Ax, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
zd.displayName = hs;
var Ud = "PopperAnchor", qd = v.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Yd(Ud, n), i = v.useRef(null), s = le(t, i);
    return v.useEffect(() => {
      a.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ u.jsx(ne.div, { ...o, ref: s });
  }
);
qd.displayName = Ud;
var ms = "PopperContent", [Ox, Rx] = Vd(ms), Gd = v.forwardRef(
  (e, t) => {
    var $, Z, ge, R, ae, te;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: d = 0,
      sticky: p = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: m,
      ...g
    } = e, D = Yd(ms, n), [y, b] = v.useState(null), w = le(t, (Oe) => b(Oe)), [C, E] = v.useState(null), F = Zi(C), S = (F == null ? void 0 : F.width) ?? 0, P = (F == null ? void 0 : F.height) ?? 0, N = r + (a !== "center" ? "-" + a : ""), k = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, L = Array.isArray(c) ? c : [c], _ = L.length > 0, T = {
      padding: k,
      boundary: L.filter(Mx),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: _
    }, { refs: B, floatingStyles: W, placement: H, isPositioned: j, middlewareData: O } = wx({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: N,
      whileElementsMounted: (...Oe) => px(...Oe, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: D.anchor
      },
      middleware: [
        Cx({ mainAxis: o + P, alignmentAxis: i }),
        l && Ex({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? Fx() : void 0,
          ...T
        }),
        l && Sx({ ...T }),
        Nx({
          ...T,
          apply: ({ elements: Oe, rects: Ie, availableWidth: Re, availableHeight: Le }) => {
            const { width: rt, height: ot } = Ie.reference, Qe = Oe.floating.style;
            Qe.setProperty("--radix-popper-available-width", `${Re}px`), Qe.setProperty("--radix-popper-available-height", `${Le}px`), Qe.setProperty("--radix-popper-anchor-width", `${rt}px`), Qe.setProperty("--radix-popper-anchor-height", `${ot}px`);
          }
        }),
        C && jx({ element: C, padding: s }),
        Bx({ arrowWidth: S, arrowHeight: P }),
        f && kx({ strategy: "referenceHidden", ...T })
      ]
    }), [Y, ue] = Jd(H), oe = $e(m);
    He(() => {
      j && (oe == null || oe());
    }, [j, oe]);
    const ke = ($ = O.arrow) == null ? void 0 : $.x, ze = (Z = O.arrow) == null ? void 0 : Z.y, Ae = ((ge = O.arrow) == null ? void 0 : ge.centerOffset) !== 0, [Be, Fe] = v.useState();
    return He(() => {
      y && Fe(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: j ? W.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Be,
          "--radix-popper-transform-origin": [
            (R = O.transformOrigin) == null ? void 0 : R.x,
            (ae = O.transformOrigin) == null ? void 0 : ae.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((te = O.hide) == null ? void 0 : te.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u.jsx(
          Ox,
          {
            scope: n,
            placedSide: Y,
            onArrowChange: E,
            arrowX: ke,
            arrowY: ze,
            shouldHideArrow: Ae,
            children: /* @__PURE__ */ u.jsx(
              ne.div,
              {
                "data-side": Y,
                "data-align": ue,
                ...g,
                ref: w,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: j ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Gd.displayName = ms;
var Xd = "PopperArrow", Tx = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Kd = v.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Rx(Xd, r), i = Tx[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ u.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ u.jsx(
          _x,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Kd.displayName = Xd;
function Mx(e) {
  return e !== null;
}
var Bx = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var D, y, b;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((D = o.arrow) == null ? void 0 : D.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, d] = Jd(n), p = { start: "0%", center: "50%", end: "100%" }[d], f = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2, h = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let m = "", g = "";
    return c === "bottom" ? (m = i ? p : `${f}px`, g = `${-l}px`) : c === "top" ? (m = i ? p : `${f}px`, g = `${r.floating.height + l}px`) : c === "right" ? (m = `${-l}px`, g = i ? p : `${h}px`) : c === "left" && (m = `${r.floating.width + l}px`, g = i ? p : `${h}px`), { data: { x: m, y: g } };
  }
});
function Jd(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Qd = zd, gs = qd, Zd = Gd, ef = Kd, vs = "Popover", [tf, eE] = ln(vs, [
  ea
]), Jr = ea(), [Ix, dn] = tf(vs), nf = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = Jr(t), l = v.useRef(null), [c, d] = v.useState(!1), [p = !1, f] = sr({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ u.jsx(Qd, { ...s, children: /* @__PURE__ */ u.jsx(
    Ix,
    {
      scope: t,
      contentId: jn(),
      triggerRef: l,
      open: p,
      onOpenChange: f,
      onOpenToggle: v.useCallback(() => f((h) => !h), [f]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: v.useCallback(() => d(!0), []),
      onCustomAnchorRemove: v.useCallback(() => d(!1), []),
      modal: i,
      children: n
    }
  ) });
};
nf.displayName = vs;
var rf = "PopoverAnchor", Lx = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = dn(rf, n), a = Jr(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return v.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ u.jsx(gs, { ...a, ...r, ref: t });
  }
);
Lx.displayName = rf;
var of = "PopoverTrigger", af = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = dn(of, n), a = Jr(n), i = le(t, o.triggerRef), s = /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": df(o.open),
        ...r,
        ref: i,
        onClick: ee(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ u.jsx(gs, { asChild: !0, ...a, children: s });
  }
);
af.displayName = of;
var Ds = "PopoverPortal", [Wx, $x] = tf(Ds, {
  forceMount: void 0
}), sf = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = dn(Ds, t);
  return /* @__PURE__ */ u.jsx(Wx, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(mt, { present: n || a.open, children: /* @__PURE__ */ u.jsx(Mo, { asChild: !0, container: o, children: r }) }) });
};
sf.displayName = Ds;
var fr = "PopoverContent", lf = v.forwardRef(
  (e, t) => {
    const n = $x(fr, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = dn(fr, e.__scopePopover);
    return /* @__PURE__ */ u.jsx(mt, { present: r || a.open, children: a.modal ? /* @__PURE__ */ u.jsx(Hx, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(Vx, { ...o, ref: t }) });
  }
);
lf.displayName = fr;
var Hx = v.forwardRef(
  (e, t) => {
    const n = dn(fr, e.__scopePopover), r = v.useRef(null), o = le(t, r), a = v.useRef(!1);
    return v.useEffect(() => {
      const i = r.current;
      if (i) return Ci(i);
    }, []), /* @__PURE__ */ u.jsx(Io, { as: nn, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
      uf,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ee(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), a.current || (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: ee(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0, c = s.button === 2 || l;
            a.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: ee(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Vx = v.forwardRef(
  (e, t) => {
    const n = dn(fr, e.__scopePopover), r = v.useRef(!1), o = v.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      uf,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), uf = v.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: d,
      ...p
    } = e, f = dn(fr, n), h = Jr(n);
    return xi(), /* @__PURE__ */ u.jsx(
      To,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ u.jsx(
          Ro,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: d,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => f.onOpenChange(!1),
            children: /* @__PURE__ */ u.jsx(
              Zd,
              {
                "data-state": df(f.open),
                role: "dialog",
                id: f.contentId,
                ...h,
                ...p,
                ref: t,
                style: {
                  ...p.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), cf = "PopoverClose", Yx = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = dn(cf, n);
    return /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ee(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Yx.displayName = cf;
var zx = "PopoverArrow", Ux = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Jr(n);
    return /* @__PURE__ */ u.jsx(ef, { ...o, ...r, ref: t });
  }
);
Ux.displayName = zx;
function df(e) {
  return e ? "open" : "closed";
}
var qx = nf, Gx = af, Xx = sf, ff = lf;
const Kx = qx, Jx = Gx, pf = v.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ u.jsx(Xx, { children: /* @__PURE__ */ u.jsx(
  ff,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: J(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
pf.displayName = ff.displayName;
function Ml({ date: e, setDate: t }) {
  return /* @__PURE__ */ u.jsxs(Kx, { children: [
    /* @__PURE__ */ u.jsx(Jx, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
      Ce,
      {
        variant: "outline",
        className: J(
          "w-full justify-start text-left font-normal",
          !e && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ u.jsx(Jl, { className: "mr-2 h-4 w-4" }),
          e ? Lt(e, "PPP") : /* @__PURE__ */ u.jsx("span", { children: "Pick a date" })
        ]
      }
    ) }),
    /* @__PURE__ */ u.jsx(pf, { className: "w-auto p-0", align: "start", onOpenAutoFocus: (n) => n.preventDefault(), children: /* @__PURE__ */ u.jsx(
      Ad,
      {
        mode: "single",
        selected: e,
        onSelect: t,
        initialFocus: !0,
        disabled: (n) => n < /* @__PURE__ */ new Date() || n > (/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() + 1)
      }
    ) })
  ] });
}
function Qx(e) {
  const t = e + "CollectionProvider", [n, r] = ln(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (h) => {
    const { scope: m, children: g } = h, D = M.useRef(null), y = M.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u.jsx(o, { scope: m, itemMap: y, collectionRef: D, children: g });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", l = M.forwardRef(
    (h, m) => {
      const { scope: g, children: D } = h, y = a(s, g), b = le(m, y.collectionRef);
      return /* @__PURE__ */ u.jsx(nn, { ref: b, children: D });
    }
  );
  l.displayName = s;
  const c = e + "CollectionItemSlot", d = "data-radix-collection-item", p = M.forwardRef(
    (h, m) => {
      const { scope: g, children: D, ...y } = h, b = M.useRef(null), w = le(m, b), C = a(c, g);
      return M.useEffect(() => (C.itemMap.set(b, { ref: b, ...y }), () => void C.itemMap.delete(b))), /* @__PURE__ */ u.jsx(nn, { [d]: "", ref: w, children: D });
    }
  );
  p.displayName = c;
  function f(h) {
    const m = a(e + "CollectionConsumer", h);
    return M.useCallback(() => {
      const D = m.collectionRef.current;
      if (!D) return [];
      const y = Array.from(D.querySelectorAll(`[${d}]`));
      return Array.from(m.itemMap.values()).sort(
        (C, E) => y.indexOf(C.ref.current) - y.indexOf(E.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: i, Slot: l, ItemSlot: p },
    f,
    r
  ];
}
var Zx = "VisuallyHidden", hf = v.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(
    ne.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
hf.displayName = Zx;
var eC = [" ", "Enter", "ArrowUp", "ArrowDown"], tC = [" ", "Enter"], Qr = "Select", [ta, na, nC] = Qx(Qr), [vr, tE] = ln(Qr, [
  nC,
  ea
]), ra = ea(), [rC, fn] = vr(Qr), [oC, aC] = vr(Qr), mf = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: l,
    dir: c,
    name: d,
    autoComplete: p,
    disabled: f,
    required: h
  } = e, m = ra(t), [g, D] = v.useState(null), [y, b] = v.useState(null), [w, C] = v.useState(!1), E = nc(c), [F = !1, S] = sr({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [P, N] = sr({
    prop: i,
    defaultProp: s,
    onChange: l
  }), k = v.useRef(null), L = g ? !!g.closest("form") : !0, [_, T] = v.useState(/* @__PURE__ */ new Set()), B = Array.from(_).map((W) => W.props.value).join(";");
  return /* @__PURE__ */ u.jsx(Qd, { ...m, children: /* @__PURE__ */ u.jsxs(
    rC,
    {
      required: h,
      scope: t,
      trigger: g,
      onTriggerChange: D,
      valueNode: y,
      onValueNodeChange: b,
      valueNodeHasChildren: w,
      onValueNodeHasChildrenChange: C,
      contentId: jn(),
      value: P,
      onValueChange: N,
      open: F,
      onOpenChange: S,
      dir: E,
      triggerPointerDownPosRef: k,
      disabled: f,
      children: [
        /* @__PURE__ */ u.jsx(ta.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
          oC,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: v.useCallback((W) => {
              T((H) => new Set(H).add(W));
            }, []),
            onNativeOptionRemove: v.useCallback((W) => {
              T((H) => {
                const j = new Set(H);
                return j.delete(W), j;
              });
            }, []),
            children: n
          }
        ) }),
        L ? /* @__PURE__ */ u.jsxs(
          Wf,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: d,
            autoComplete: p,
            value: P,
            onChange: (W) => N(W.target.value),
            disabled: f,
            children: [
              P === void 0 ? /* @__PURE__ */ u.jsx("option", { value: "" }) : null,
              Array.from(_)
            ]
          },
          B
        ) : null
      ]
    }
  ) });
};
mf.displayName = Qr;
var gf = "SelectTrigger", vf = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = ra(n), i = fn(gf, n), s = i.disabled || r, l = le(t, i.onTriggerChange), c = na(n), [d, p, f] = $f((m) => {
      const g = c().filter((b) => !b.disabled), D = g.find((b) => b.value === i.value), y = Hf(g, m, D);
      y !== void 0 && i.onValueChange(y.value);
    }), h = () => {
      s || (i.onOpenChange(!0), f());
    };
    return /* @__PURE__ */ u.jsx(gs, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": Lf(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: ee(o.onClick, (m) => {
          m.currentTarget.focus();
        }),
        onPointerDown: ee(o.onPointerDown, (m) => {
          const g = m.target;
          g.hasPointerCapture(m.pointerId) && g.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && (h(), i.triggerPointerDownPosRef.current = {
            x: Math.round(m.pageX),
            y: Math.round(m.pageY)
          }, m.preventDefault());
        }),
        onKeyDown: ee(o.onKeyDown, (m) => {
          const g = d.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && p(m.key), !(g && m.key === " ") && eC.includes(m.key) && (h(), m.preventDefault());
        })
      }
    ) });
  }
);
vf.displayName = gf;
var Df = "SelectValue", yf = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i = "", ...s } = e, l = fn(Df, n), { onValueNodeHasChildrenChange: c } = l, d = a !== void 0, p = le(t, l.onValueNodeChange);
    return He(() => {
      c(d);
    }, [c, d]), /* @__PURE__ */ u.jsx(
      ne.span,
      {
        ...s,
        ref: p,
        style: { pointerEvents: "none" },
        children: Lf(l.value) ? /* @__PURE__ */ u.jsx(u.Fragment, { children: i }) : a
      }
    );
  }
);
yf.displayName = Df;
var iC = "SelectIcon", bf = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ u.jsx(ne.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
bf.displayName = iC;
var sC = "SelectPortal", wf = (e) => /* @__PURE__ */ u.jsx(Mo, { asChild: !0, ...e });
wf.displayName = sC;
var Mn = "SelectContent", xf = v.forwardRef(
  (e, t) => {
    const n = fn(Mn, e.__scopeSelect), [r, o] = v.useState();
    if (He(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Wr.createPortal(
        /* @__PURE__ */ u.jsx(Cf, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx(ta.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ u.jsx(Ef, { ...e, ref: t });
  }
);
xf.displayName = Mn;
var At = 10, [Cf, pn] = vr(Mn), lC = "SelectContentImpl", Ef = v.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
      sideOffset: l,
      align: c,
      alignOffset: d,
      arrowPadding: p,
      collisionBoundary: f,
      collisionPadding: h,
      sticky: m,
      hideWhenDetached: g,
      avoidCollisions: D,
      //
      ...y
    } = e, b = fn(Mn, n), [w, C] = v.useState(null), [E, F] = v.useState(null), S = le(t, ($) => C($)), [P, N] = v.useState(null), [k, L] = v.useState(
      null
    ), _ = na(n), [T, B] = v.useState(!1), W = v.useRef(!1);
    v.useEffect(() => {
      if (w) return Ci(w);
    }, [w]), xi();
    const H = v.useCallback(
      ($) => {
        const [Z, ...ge] = _().map((te) => te.ref.current), [R] = ge.slice(-1), ae = document.activeElement;
        for (const te of $)
          if (te === ae || (te == null || te.scrollIntoView({ block: "nearest" }), te === Z && E && (E.scrollTop = 0), te === R && E && (E.scrollTop = E.scrollHeight), te == null || te.focus(), document.activeElement !== ae)) return;
      },
      [_, E]
    ), j = v.useCallback(
      () => H([P, w]),
      [H, P, w]
    );
    v.useEffect(() => {
      T && j();
    }, [T, j]);
    const { onOpenChange: O, triggerPointerDownPosRef: Y } = b;
    v.useEffect(() => {
      if (w) {
        let $ = { x: 0, y: 0 };
        const Z = (R) => {
          var ae, te;
          $ = {
            x: Math.abs(Math.round(R.pageX) - (((ae = Y.current) == null ? void 0 : ae.x) ?? 0)),
            y: Math.abs(Math.round(R.pageY) - (((te = Y.current) == null ? void 0 : te.y) ?? 0))
          };
        }, ge = (R) => {
          $.x <= 10 && $.y <= 10 ? R.preventDefault() : w.contains(R.target) || O(!1), document.removeEventListener("pointermove", Z), Y.current = null;
        };
        return Y.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", ge, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", ge, { capture: !0 });
        };
      }
    }, [w, O, Y]), v.useEffect(() => {
      const $ = () => O(!1);
      return window.addEventListener("blur", $), window.addEventListener("resize", $), () => {
        window.removeEventListener("blur", $), window.removeEventListener("resize", $);
      };
    }, [O]);
    const [ue, oe] = $f(($) => {
      const Z = _().filter((ae) => !ae.disabled), ge = Z.find((ae) => ae.ref.current === document.activeElement), R = Hf(Z, $, ge);
      R && setTimeout(() => R.ref.current.focus());
    }), ke = v.useCallback(
      ($, Z, ge) => {
        const R = !W.current && !ge;
        (b.value !== void 0 && b.value === Z || R) && (N($), R && (W.current = !0));
      },
      [b.value]
    ), ze = v.useCallback(() => w == null ? void 0 : w.focus(), [w]), Ae = v.useCallback(
      ($, Z, ge) => {
        const R = !W.current && !ge;
        (b.value !== void 0 && b.value === Z || R) && L($);
      },
      [b.value]
    ), Be = r === "popper" ? li : Ff, Fe = Be === li ? {
      side: s,
      sideOffset: l,
      align: c,
      alignOffset: d,
      arrowPadding: p,
      collisionBoundary: f,
      collisionPadding: h,
      sticky: m,
      hideWhenDetached: g,
      avoidCollisions: D
    } : {};
    return /* @__PURE__ */ u.jsx(
      Cf,
      {
        scope: n,
        content: w,
        viewport: E,
        onViewportChange: F,
        itemRefCallback: ke,
        selectedItem: P,
        onItemLeave: ze,
        itemTextRefCallback: Ae,
        focusSelectedItem: j,
        selectedItemText: k,
        position: r,
        isPositioned: T,
        searchRef: ue,
        children: /* @__PURE__ */ u.jsx(Io, { as: nn, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          To,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: ($) => {
              $.preventDefault();
            },
            onUnmountAutoFocus: ee(o, ($) => {
              var Z;
              (Z = b.trigger) == null || Z.focus({ preventScroll: !0 }), $.preventDefault();
            }),
            children: /* @__PURE__ */ u.jsx(
              Ro,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: ($) => $.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ u.jsx(
                  Be,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: ($) => $.preventDefault(),
                    ...y,
                    ...Fe,
                    onPlaced: () => B(!0),
                    ref: S,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: ee(y.onKeyDown, ($) => {
                      const Z = $.ctrlKey || $.altKey || $.metaKey;
                      if ($.key === "Tab" && $.preventDefault(), !Z && $.key.length === 1 && oe($.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key)) {
                        let R = _().filter((ae) => !ae.disabled).map((ae) => ae.ref.current);
                        if (["ArrowUp", "End"].includes($.key) && (R = R.slice().reverse()), ["ArrowUp", "ArrowDown"].includes($.key)) {
                          const ae = $.target, te = R.indexOf(ae);
                          R = R.slice(te + 1);
                        }
                        setTimeout(() => H(R)), $.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Ef.displayName = lC;
var uC = "SelectItemAlignedPosition", Ff = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = fn(Mn, n), i = pn(Mn, n), [s, l] = v.useState(null), [c, d] = v.useState(null), p = le(t, (S) => d(S)), f = na(n), h = v.useRef(!1), m = v.useRef(!0), { viewport: g, selectedItem: D, selectedItemText: y, focusSelectedItem: b } = i, w = v.useCallback(() => {
    if (a.trigger && a.valueNode && s && c && g && D && y) {
      const S = a.trigger.getBoundingClientRect(), P = c.getBoundingClientRect(), N = a.valueNode.getBoundingClientRect(), k = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ae = k.left - P.left, te = N.left - ae, Oe = S.left - te, Ie = S.width + Oe, Re = Math.max(Ie, P.width), Le = window.innerWidth - At, rt = Xa(te, [At, Le - Re]);
        s.style.minWidth = Ie + "px", s.style.left = rt + "px";
      } else {
        const ae = P.right - k.right, te = window.innerWidth - N.right - ae, Oe = window.innerWidth - S.right - te, Ie = S.width + Oe, Re = Math.max(Ie, P.width), Le = window.innerWidth - At, rt = Xa(te, [At, Le - Re]);
        s.style.minWidth = Ie + "px", s.style.right = rt + "px";
      }
      const L = f(), _ = window.innerHeight - At * 2, T = g.scrollHeight, B = window.getComputedStyle(c), W = parseInt(B.borderTopWidth, 10), H = parseInt(B.paddingTop, 10), j = parseInt(B.borderBottomWidth, 10), O = parseInt(B.paddingBottom, 10), Y = W + H + T + O + j, ue = Math.min(D.offsetHeight * 5, Y), oe = window.getComputedStyle(g), ke = parseInt(oe.paddingTop, 10), ze = parseInt(oe.paddingBottom, 10), Ae = S.top + S.height / 2 - At, Be = _ - Ae, Fe = D.offsetHeight / 2, $ = D.offsetTop + Fe, Z = W + H + $, ge = Y - Z;
      if (Z <= Ae) {
        const ae = D === L[L.length - 1].ref.current;
        s.style.bottom = "0px";
        const te = c.clientHeight - g.offsetTop - g.offsetHeight, Oe = Math.max(
          Be,
          Fe + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ae ? ze : 0) + te + j
        ), Ie = Z + Oe;
        s.style.height = Ie + "px";
      } else {
        const ae = D === L[0].ref.current;
        s.style.top = "0px";
        const Oe = Math.max(
          Ae,
          W + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ae ? ke : 0) + Fe
        ) + ge;
        s.style.height = Oe + "px", g.scrollTop = Z - Ae + g.offsetTop;
      }
      s.style.margin = `${At}px 0`, s.style.minHeight = ue + "px", s.style.maxHeight = _ + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    f,
    a.trigger,
    a.valueNode,
    s,
    c,
    g,
    D,
    y,
    a.dir,
    r
  ]);
  He(() => w(), [w]);
  const [C, E] = v.useState();
  He(() => {
    c && E(window.getComputedStyle(c).zIndex);
  }, [c]);
  const F = v.useCallback(
    (S) => {
      S && m.current === !0 && (w(), b == null || b(), m.current = !1);
    },
    [w, b]
  );
  return /* @__PURE__ */ u.jsx(
    dC,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: F,
      children: /* @__PURE__ */ u.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ u.jsx(
            ne.div,
            {
              ...o,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
Ff.displayName = uC;
var cC = "SelectPopperPosition", li = v.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = At,
    ...a
  } = e, i = ra(n);
  return /* @__PURE__ */ u.jsx(
    Zd,
    {
      ...i,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
li.displayName = cC;
var [dC, ys] = vr(Mn, {}), ui = "SelectViewport", Sf = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = pn(ui, n), i = ys(ui, n), s = le(t, a.onViewportChange), l = v.useRef(0);
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ u.jsx(ta.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(
        ne.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...o.style
          },
          onScroll: ee(o.onScroll, (c) => {
            const d = c.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: f } = i;
            if (f != null && f.current && p) {
              const h = Math.abs(l.current - d.scrollTop);
              if (h > 0) {
                const m = window.innerHeight - At * 2, g = parseFloat(p.style.minHeight), D = parseFloat(p.style.height), y = Math.max(g, D);
                if (y < m) {
                  const b = y + h, w = Math.min(m, b), C = b - w;
                  p.style.height = w + "px", p.style.bottom === "0px" && (d.scrollTop = C > 0 ? C : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Sf.displayName = ui;
var Nf = "SelectGroup", [fC, pC] = vr(Nf), hC = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = jn();
    return /* @__PURE__ */ u.jsx(fC, { scope: n, id: o, children: /* @__PURE__ */ u.jsx(ne.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
hC.displayName = Nf;
var kf = "SelectLabel", jf = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = pC(kf, n);
    return /* @__PURE__ */ u.jsx(ne.div, { id: o.id, ...r, ref: t });
  }
);
jf.displayName = kf;
var Oo = "SelectItem", [mC, Pf] = vr(Oo), _f = v.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = fn(Oo, n), l = pn(Oo, n), c = s.value === r, [d, p] = v.useState(a ?? ""), [f, h] = v.useState(!1), m = le(
      t,
      (y) => {
        var b;
        return (b = l.itemRefCallback) == null ? void 0 : b.call(l, y, r, o);
      }
    ), g = jn(), D = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ u.jsx(
      mC,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: c,
        onItemTextChange: v.useCallback((y) => {
          p((b) => b || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u.jsx(
          ta.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ u.jsx(
              ne.div,
              {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": c && f,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: m,
                onFocus: ee(i.onFocus, () => h(!0)),
                onBlur: ee(i.onBlur, () => h(!1)),
                onPointerUp: ee(i.onPointerUp, D),
                onPointerMove: ee(i.onPointerMove, (y) => {
                  var b;
                  o ? (b = l.onItemLeave) == null || b.call(l) : y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ee(i.onPointerLeave, (y) => {
                  var b;
                  y.currentTarget === document.activeElement && ((b = l.onItemLeave) == null || b.call(l));
                }),
                onKeyDown: ee(i.onKeyDown, (y) => {
                  var w;
                  ((w = l.searchRef) == null ? void 0 : w.current) !== "" && y.key === " " || (tC.includes(y.key) && D(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
_f.displayName = Oo;
var _r = "SelectItemText", Af = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, i = fn(_r, n), s = pn(_r, n), l = Pf(_r, n), c = aC(_r, n), [d, p] = v.useState(null), f = le(
      t,
      (y) => p(y),
      l.onItemTextChange,
      (y) => {
        var b;
        return (b = s.itemTextRefCallback) == null ? void 0 : b.call(s, y, l.value, l.disabled);
      }
    ), h = d == null ? void 0 : d.textContent, m = v.useMemo(
      () => /* @__PURE__ */ u.jsx("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: D } = c;
    return He(() => (g(m), () => D(m)), [g, D, m]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(ne.span, { id: l.textId, ...a, ref: f }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? Wr.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
Af.displayName = _r;
var Of = "SelectItemIndicator", Rf = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Pf(Of, n).isSelected ? /* @__PURE__ */ u.jsx(ne.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Rf.displayName = Of;
var ci = "SelectScrollUpButton", Tf = v.forwardRef((e, t) => {
  const n = pn(ci, e.__scopeSelect), r = ys(ci, e.__scopeSelect), [o, a] = v.useState(!1), i = le(t, r.onScrollButtonChange);
  return He(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const c = l.scrollTop > 0;
        a(c);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    Bf,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Tf.displayName = ci;
var di = "SelectScrollDownButton", Mf = v.forwardRef((e, t) => {
  const n = pn(di, e.__scopeSelect), r = ys(di, e.__scopeSelect), [o, a] = v.useState(!1), i = le(t, r.onScrollButtonChange);
  return He(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const c = l.scrollHeight - l.clientHeight, d = Math.ceil(l.scrollTop) < c;
        a(d);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    Bf,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Mf.displayName = di;
var Bf = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = pn("SelectScrollButton", n), i = v.useRef(null), s = na(n), l = v.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return v.useEffect(() => () => l(), [l]), He(() => {
    var d;
    const c = s().find((p) => p.ref.current === document.activeElement);
    (d = c == null ? void 0 : c.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ u.jsx(
    ne.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: ee(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: ee(o.onPointerMove, () => {
        var c;
        (c = a.onItemLeave) == null || c.call(a), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: ee(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), gC = "SelectSeparator", If = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(ne.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
If.displayName = gC;
var fi = "SelectArrow", vC = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ra(n), a = fn(fi, n), i = pn(fi, n);
    return a.open && i.position === "popper" ? /* @__PURE__ */ u.jsx(ef, { ...o, ...r, ref: t }) : null;
  }
);
vC.displayName = fi;
function Lf(e) {
  return e === "" || e === void 0;
}
var Wf = v.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = v.useRef(null), a = le(t, o), i = Qi(n);
    return v.useEffect(() => {
      const s = o.current, l = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== n && d) {
        const p = new Event("change", { bubbles: !0 });
        d.call(s, n), s.dispatchEvent(p);
      }
    }, [i, n]), /* @__PURE__ */ u.jsx(hf, { asChild: !0, children: /* @__PURE__ */ u.jsx("select", { ...r, ref: a, defaultValue: n }) });
  }
);
Wf.displayName = "BubbleSelect";
function $f(e) {
  const t = $e(e), n = v.useRef(""), r = v.useRef(0), o = v.useCallback(
    (i) => {
      const s = n.current + i;
      t(s), function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(s);
    },
    [t]
  ), a = v.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return v.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function Hf(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = DC(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function DC(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var yC = mf, Vf = vf, bC = yf, wC = bf, xC = wf, Yf = xf, CC = Sf, zf = jf, Uf = _f, EC = Af, FC = Rf, qf = Tf, Gf = Mf, Xf = If;
const SC = yC, NC = bC, Kf = v.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Vf,
  {
    ref: r,
    className: J(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground   focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ u.jsx(wC, { asChild: !0, children: /* @__PURE__ */ u.jsx(wd, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Kf.displayName = Vf.displayName;
const Jf = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  qf,
  {
    ref: n,
    className: J("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(eb, { className: "h-4 w-4" })
  }
));
Jf.displayName = qf.displayName;
const Qf = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Gf,
  {
    ref: n,
    className: J("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(wd, { className: "h-4 w-4" })
  }
));
Qf.displayName = Gf.displayName;
const Zf = v.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ u.jsx(xC, { children: /* @__PURE__ */ u.jsxs(
  Yf,
  {
    ref: o,
    className: J(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ u.jsx(Jf, {}),
      /* @__PURE__ */ u.jsx(
        CC,
        {
          className: J("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
          children: t
        }
      ),
      /* @__PURE__ */ u.jsx(Qf, {})
    ]
  }
) }));
Zf.displayName = Yf.displayName;
const kC = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  zf,
  {
    ref: n,
    className: J("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
kC.displayName = zf.displayName;
const Ar = v.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Uf,
  {
    ref: r,
    className: J(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(FC, { children: /* @__PURE__ */ u.jsx(bd, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ u.jsx(EC, { children: t })
    ]
  }
));
Ar.displayName = Uf.displayName;
const jC = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Xf,
  {
    ref: n,
    className: J("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
jC.displayName = Xf.displayName;
const PC = ({
  guests: e,
  setGuests: t,
  guestsError: n,
  setGuestsError: r,
  date: o,
  setDate: a,
  dateError: i,
  endDate: s,
  setEndDate: l,
  endDateError: c,
  time: d,
  setTime: p,
  timeError: f,
  endTime: h,
  setEndTime: m,
  isMultiDay: g,
  setMultiDay: D,
  tableSetup: y,
  setTableSetup: b,
  venue: w,
  setVenue: C,
  eventPackages: E,
  selectedEventPackages: F,
  setSelectedEventPackages: S,
  venues: P
}) => {
  const N = (k, L) => {
    const _ = [...F];
    _[k] = L, S(_);
  };
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs("div", { className: "space-y-4 mt-8 grid grid-rows-2 justify-center lg:max-w-[680px] mx-auto", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "grid md:grid-cols-2 space-y-8 md:space-y-0 md:space-x-4 ", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ u.jsx(Fn, { htmlFor: "guests", children: "Number of guests" }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ u.jsx(
              ct,
              {
                className: `pr-8 ${n && "border-red-500"}`,
                type: "number",
                id: "guests",
                placeholder: "12",
                max: "22",
                value: e,
                onChange: (k) => {
                  t(k.target.value), r(null);
                }
              }
            ),
            /* @__PURE__ */ u.jsx(ah, { className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" })
          ] }),
          n && /* @__PURE__ */ u.jsx("p", { className: "text-red-500 text-sm mt-1", children: n })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ u.jsx(Fn, { htmlFor: "date", children: "When is it happening" }),
          /* @__PURE__ */ u.jsx("div", { className: "relative mt-2", children: /* @__PURE__ */ u.jsx(
            Ml,
            {
              date: o,
              setDate: (k) => {
                a(k), l(new Date(k).setDate(new Date(k).getDate() + 1));
              }
            }
          ) }),
          i && /* @__PURE__ */ u.jsx("p", { className: "text-red-500 text-sm mt-1", children: i })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4 items-end", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex-1 lg:max-w-[330px]", children: [
          /* @__PURE__ */ u.jsx(Fn, { htmlFor: "time", children: "Time of arrival" }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ u.jsx(
              ct,
              {
                type: "time",
                id: "time",
                placeholder: "09:00 am",
                value: d,
                className: `w-full ${f && "border-red-500"}`,
                onChange: (k) => {
                  p(k.target.value);
                  let L = (/* @__PURE__ */ new Date()).setHours(parseInt(k.target.value.split(":")[0]) + 8);
                  L = new Date(L).setMinutes(k.target.value.split(":")[1]), m(new Date(L).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
                }
              }
            ),
            /* @__PURE__ */ u.jsx(Ha, { className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" })
          ] }),
          f && /* @__PURE__ */ u.jsx("p", { className: "text-red-500 text-sm mt-1", children: f })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ u.jsx(Dd, { id: "multi-day", checked: g, onClick: (k) => {
            D(!g), o && !g ? (l((/* @__PURE__ */ new Date()).setDate(new Date(o).getDate() + 1)), d && m(new Date(o).setHours(new Date(o).getHours() + 8)).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })) : (l((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 2)), m("17:00"));
          } }),
          /* @__PURE__ */ u.jsx(Fn, { htmlFor: "multi-day", children: "Multi day event" })
        ] })
      ] }),
      g && /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsxs("div", { className: "grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ u.jsx(Fn, { htmlFor: "end-date", children: "End date" }),
          /* @__PURE__ */ u.jsx("div", { className: "relative mt-2", children: /* @__PURE__ */ u.jsx(
            Ml,
            {
              date: s,
              setDate: l
            }
          ) }),
          c && /* @__PURE__ */ u.jsx("p", { className: "text-red-500 text-sm mt-1", children: c })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ u.jsx(Fn, { htmlFor: "end-time", children: "Time of Departure" }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ u.jsx(ct, { type: "time", id: "end-time", min: d ? d + ":00" : "10:00:00", placeholder: "17:00", value: h, onChange: (k) => m(k.target.value) }),
            /* @__PURE__ */ u.jsx(Ha, { className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsxs("div", { className: "mt-12 space-y-8 flex flex-col items-center", children: [
        /* @__PURE__ */ u.jsx("h3", { className: "text-center text-lg font-bold", children: `Select Packages${g ? " for each day" : ""}` }),
        g && o && s ? Array.from({ length: new Date(s).getDate() - new Date(o).getDate() + 1 }, (k, L) => /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Day ",
            L + 1
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "flex space-x-4 mt-4", children: E.map((_) => /* @__PURE__ */ u.jsx(
            xl,
            {
              title: `${_.duration_hours} Hours`,
              description: _.description,
              onClick: () => N(L, _.id),
              id: _.id,
              isSelected: F[L] === _.id,
              noneSelected: !F[L],
              value: _.id
            },
            _.id
          )) })
        ] }, L)) : /* @__PURE__ */ u.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-4 mt-4", children: E.map((k) => /* @__PURE__ */ u.jsx(
          xl,
          {
            title: `${k.duration_hours} Hours`,
            description: k.description,
            onClick: () => N(0, k.id),
            id: k.id,
            isSelected: F.length > 0 && F[0] === k.id,
            noneSelected: F.length === 0,
            value: k.id
          },
          k.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "mt-12 space-y-8 flex flex-col items-center", children: [
      /* @__PURE__ */ u.jsxs("h3", { className: "text-lg font-bold text-center", children: [
        "Venue Preference ",
        /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: "(optional)" })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "flex items-center space-x-2 mt-4", children: /* @__PURE__ */ u.jsxs(SC, { onValueChange: (k) => b(k), defaultValue: "Boardroom", children: [
        /* @__PURE__ */ u.jsx(Kf, { className: "w-[180px]", children: /* @__PURE__ */ u.jsx(NC, { placeholder: "Boardroom Setup" }) }),
        /* @__PURE__ */ u.jsxs(Zf, { children: [
          /* @__PURE__ */ u.jsx(Ar, { value: "Boardroom", children: "Boardroom" }),
          /* @__PURE__ */ u.jsx(Ar, { value: "U-Shape", children: "U-Shape" }),
          /* @__PURE__ */ u.jsx(Ar, { value: "Classroom", children: "Classroom" }),
          /* @__PURE__ */ u.jsx(Ar, { value: "Intimate", children: "Intimate - no tables" })
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsx("div", { className: "grid md:grid-cols-2 gap-4 mt-4", children: P.map((k) => /* @__PURE__ */ u.jsx(
        Gy,
        {
          venue_name: k.name,
          venue_description: k.description,
          image_url: k.images[0],
          capacity: k.capacity,
          area: k.area,
          isSelected: k.id === w,
          onClick: () => C(k.id)
        },
        k.id
      )) })
    ] })
  ] });
}, _C = ({ title: e, description: t, image_url: n, isSelected: r, onClick: o }) => /* @__PURE__ */ u.jsx(
  Yr,
  {
    className: J("relative bg-gray-50 border-2 shadow-sm border-transparent hover:border-primary cursor-pointer", r && "border-primary"),
    onClick: o,
    children: /* @__PURE__ */ u.jsxs(zr, { className: "p-6 flex flex-col items-left justify-between cursor-pointer h-full", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-left h-full", children: [
        /* @__PURE__ */ u.jsx(
          "img",
          {
            src: n,
            alt: e,
            loading: "lazy",
            className: "w-full aspect-ratio-1 rounded-md object-cover"
          }
        ),
        /* @__PURE__ */ u.jsx("h4", { className: "text-sm sm:text-md font-medium mt-4", children: e }),
        /* @__PURE__ */ u.jsx("p", { className: "text-xs sm:text-sm mt-2", children: t })
      ] }),
      /* @__PURE__ */ u.jsxs(Ce, { className: "mt-4 w-fit outline-none", onClick: o, children: [
        /* @__PURE__ */ u.jsx("span", { className: r && "hidden", children: "Choose" }),
        /* @__PURE__ */ u.jsx("div", { className: `${!r && "hidden"} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`, children: /* @__PURE__ */ u.jsx(kn, { className: "h-4 w-4 text-white " }) })
      ] })
    ] })
  }
), AC = ({ guests: e, title: t, description: n, quantity: r = 0, image_url: o, isSelected: a, onClick: i, onQuantityChange: s }) => /* @__PURE__ */ u.jsx(
  Yr,
  {
    className: J("relative bg-gray-50 border-2 shadow-sm border-transparent hover:border-primary cursor-pointer", a && "border-primary"),
    onClick: () => {
      a || i();
    },
    children: /* @__PURE__ */ u.jsxs(zr, { className: "p-6 flex flex-col items-left justify-between cursor-pointer h-full", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-left h-full", children: [
        /* @__PURE__ */ u.jsx(
          "img",
          {
            src: o,
            alt: t,
            loading: "lazy",
            className: "w-full aspect-ratio-1 rounded-md object-cover"
          }
        ),
        /* @__PURE__ */ u.jsx("h4", { className: "text-sm sm:text-md font-medium mt-4", children: t }),
        /* @__PURE__ */ u.jsx("p", { className: "text-xs sm:text-sm mt-2", children: n })
      ] }),
      a ? /* @__PURE__ */ u.jsxs("div", { className: "mt-4 w-fit flex items-center justify-center rounded-full border-primary border-2 p-1 space-x-3", children: [
        /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center bg-primary h-6 w-6 rounded-full m-1", children: /* @__PURE__ */ u.jsx(kn, { className: "h-4 w-4 text-white" }) }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
          /* @__PURE__ */ u.jsx("p", { className: "text-primary font-medium", children: r }),
          /* @__PURE__ */ u.jsx(
            Ce,
            {
              variant: "outline",
              className: "!h-7 !w-7 p-1 group rounded-full flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-white text-lg",
              onClick: () => s(r - 1),
              disabled: !0,
              children: /* @__PURE__ */ u.jsx(ih, { className: "h-5 w-5 text-primary group-hover:text-white" })
            }
          ),
          /* @__PURE__ */ u.jsx(
            Ce,
            {
              variant: "outline",
              className: "!h-7 !w-7 p-1 group rounded-full flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-white text-lg",
              onClick: () => s(r + 1),
              disabled: !0,
              children: /* @__PURE__ */ u.jsx(sh, { className: "h-6 w-6 text-primary group-hover:text-white" })
            }
          )
        ] })
      ] }) : /* @__PURE__ */ u.jsx(Ce, { className: "mt-2 w-fit", children: "Add" })
    ] })
  }
), OC = ({ facilities: e, catering: t, guests: n, facilitiesSelected: r, setFacilitiesSelected: o, cateringSelected: a, setCateringSelected: i, comments: s, setComments: l }) => {
  const c = (f) => {
    r.includes(f) ? o(r.filter((h) => h !== f)) : o([...r, f]);
  }, d = (f) => {
    const h = a.some((m) => m.id === f);
    i(h ? a.filter((m) => m.id !== f) : [...a, { id: f, quantity: n }]);
  }, p = (f, h) => {
    if (h <= 0) {
      i(a.filter((m) => m.id !== f));
      return;
    }
    i(a.map(
      (m) => m.id === f ? { ...m, quantity: h } : m
    ));
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col space-y-8 mt-8", children: [
    /* @__PURE__ */ u.jsx("h2", { className: "text-2xl font-bold text-center", children: "Make your event complete" }),
    /* @__PURE__ */ u.jsx("p", { className: "text-center text-muted-foreground", children: "Choose one of the default packages or create your custom event" }),
    /* @__PURE__ */ u.jsxs("div", { children: [
      /* @__PURE__ */ u.jsx("h3", { className: "text-lg text-primary font-medium", children: "Facilities" }),
      /* @__PURE__ */ u.jsx("div", { className: "grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 mt-4", children: e.map((f) => /* @__PURE__ */ u.jsx(
        _C,
        {
          title: f.title,
          description: f.description,
          image_url: f.image,
          isSelected: r.includes(f.id),
          onClick: () => c(f.id)
        },
        f.id
      )) })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { children: [
      /* @__PURE__ */ u.jsx("h3", { className: "text-lg text-primary font-medium", children: "Catering arrangements" }),
      /* @__PURE__ */ u.jsx("p", { className: "text-muted-foreground mt-2", children: "Specific delivery times are be added later from your customer portal." }),
      /* @__PURE__ */ u.jsx("div", { className: "grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 mt-4", children: t.map((f) => {
        const h = a.find((m) => m.id === f.id);
        return /* @__PURE__ */ u.jsx(
          AC,
          {
            guests: n,
            title: f.title,
            description: f.description,
            image_url: f.image,
            isSelected: !!h,
            quantity: h ? h.quantity : 0,
            onClick: () => d(f.id),
            onQuantityChange: (m) => p(f.id, m)
          },
          f.id
        );
      }) })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { children: [
      /* @__PURE__ */ u.jsx("h3", { className: "text-lg text-primary", children: "Special Requests / Comments" }),
      /* @__PURE__ */ u.jsx(
        "textarea",
        {
          className: "w-full p-4 border rounded mt-2 bg-gray-50 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50",
          rows: "4",
          placeholder: "Let us know how we can help with your event.",
          value: s,
          onChange: (f) => l(f.target.value)
        }
      )
    ] })
  ] });
};
var bs = "Checkbox", [RC, nE] = ln(bs), [TC, MC] = RC(bs), ep = v.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l = "on",
      onCheckedChange: c,
      ...d
    } = e, [p, f] = v.useState(null), h = le(t, (w) => f(w)), m = v.useRef(!1), g = p ? !!p.closest("form") : !0, [D = !1, y] = sr({
      prop: o,
      defaultProp: a,
      onChange: c
    }), b = v.useRef(D);
    return v.useEffect(() => {
      const w = p == null ? void 0 : p.form;
      if (w) {
        const C = () => y(b.current);
        return w.addEventListener("reset", C), () => w.removeEventListener("reset", C);
      }
    }, [p, y]), /* @__PURE__ */ u.jsxs(TC, { scope: n, state: D, disabled: s, children: [
      /* @__PURE__ */ u.jsx(
        ne.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": _n(D) ? "mixed" : D,
          "aria-required": i,
          "data-state": rp(D),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...d,
          ref: h,
          onKeyDown: ee(e.onKeyDown, (w) => {
            w.key === "Enter" && w.preventDefault();
          }),
          onClick: ee(e.onClick, (w) => {
            y((C) => _n(C) ? !0 : !C), g && (m.current = w.isPropagationStopped(), m.current || w.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ u.jsx(
        BC,
        {
          control: p,
          bubbles: !m.current,
          name: r,
          value: l,
          checked: D,
          required: i,
          disabled: s,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ep.displayName = bs;
var tp = "CheckboxIndicator", np = v.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = MC(tp, n);
    return /* @__PURE__ */ u.jsx(mt, { present: r || _n(a.state) || a.state === !0, children: /* @__PURE__ */ u.jsx(
      ne.span,
      {
        "data-state": rp(a.state),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
np.displayName = tp;
var BC = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = v.useRef(null), i = Qi(n), s = Zi(t);
  return v.useEffect(() => {
    const l = a.current, c = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(c, "checked").set;
    if (i !== n && p) {
      const f = new Event("click", { bubbles: r });
      l.indeterminate = _n(n), p.call(l, _n(n) ? !1 : n), l.dispatchEvent(f);
    }
  }, [i, n, r]), /* @__PURE__ */ u.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: _n(n) ? !1 : n,
      ...o,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...s,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function _n(e) {
  return e === "indeterminate";
}
function rp(e) {
  return _n(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var op = ep, IC = np;
const ap = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  op,
  {
    ref: n,
    className: J(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(IC, { className: J("flex items-center justify-center text-current"), children: /* @__PURE__ */ u.jsx(bd, { className: "h-4 w-4" }) })
  }
));
ap.displayName = op.displayName;
const LC = ({
  company: e,
  setCompany: t,
  firstName: n,
  setFirstName: r,
  lastName: o,
  setLastName: a,
  email: i,
  setEmail: s,
  phone: l,
  setPhone: c,
  agreeTerms: d,
  setAgreeTerms: p,
  companyError: f,
  firstNameError: h,
  lastNameError: m,
  emailError: g,
  phoneError: D,
  agreeTermsError: y,
  isStep3Valid: b
}) => /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col space-y-8 mt-8 max-w-[480px] mx-auto", children: [
  /* @__PURE__ */ u.jsx("h2", { className: "text-2xl font-bold text-center", children: "Your contact details" }),
  /* @__PURE__ */ u.jsx("p", { className: "text-center text-muted-foreground", children: "Your Free Quote is almost there. No strings attached ;)" }),
  /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
    /* @__PURE__ */ u.jsx(ct, { placeholder: "Event name (optional)" }),
    /* @__PURE__ */ u.jsx(ct, { placeholder: "Team name (optional)" })
  ] }),
  /* @__PURE__ */ u.jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ u.jsxs("h3", { className: "text-lg", children: [
      "Contact Details ",
      /* @__PURE__ */ u.jsx("span", { className: "text-sm text-red-400", children: "(required)" })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-1 gap-4 mt-4", children: [
      /* @__PURE__ */ u.jsx(
        ct,
        {
          placeholder: "Company name",
          className: f ? "border-red-500" : "",
          value: e,
          onChange: (w) => t(w.target.value)
        }
      ),
      f && /* @__PURE__ */ u.jsx("p", { className: "text-red-500 text-sm mt-1", children: f }),
      /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ u.jsx(ct, { placeholder: "First name", className: h ? "border-red-500" : "", value: n, onChange: (w) => r(w.target.value) }),
        /* @__PURE__ */ u.jsx(ct, { placeholder: "Last name", className: m ? "border-red-500" : "", value: o, onChange: (w) => a(w.target.value) })
      ] }),
      /* @__PURE__ */ u.jsx(ct, { placeholder: "Email (company email preferred)", className: g ? "border-red-500" : "", value: i, onChange: (w) => s(w.target.value) }),
      /* @__PURE__ */ u.jsx(ct, { placeholder: "Phone", className: D ? "border-red-500" : "", value: l, onChange: (w) => c(w.target.value) })
    ] })
  ] }),
  /* @__PURE__ */ u.jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ u.jsxs("label", { className: "inline-flex items-center", htmlFor: "agree-terms", children: [
      /* @__PURE__ */ u.jsx(
        ap,
        {
          id: "agree-terms",
          className: y ? "border-red-500" : "",
          checked: d,
          onCheckedChange: () => p(!d)
        }
      ),
      /* @__PURE__ */ u.jsx("span", { className: "ml-2 text-muted-foreground text-sm", children: "I agree to the terms & conditions and EU data processing" })
    ] }),
    y && /* @__PURE__ */ u.jsx("p", { className: "text-red-500 text-sm mt-1", children: y })
  ] }),
  /* @__PURE__ */ u.jsx("p", { className: "text-muted-foreground text-sm", children: "We will prepare a proposal for your event without any commitment. You will gain access to a personalised portal where you can manage your proposal online." }),
  /* @__PURE__ */ u.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ u.jsx(Ce, { className: "w-full", disabled: !b(), children: "Request Proposal" }) })
] });
function WC() {
  var Ee;
  const [e, t] = Q(""), [n, r] = Q((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 1)), [o, a] = Q(""), [i, s] = Q("09:00"), [l, c] = Q(""), [d, p] = Q(!1), [f, h] = Q("Boardroom"), [m, g] = Q(""), [D, y] = Q([]), [b, w] = Q([]), [C, E] = Q(""), [F, S] = Q(""), [P, N] = Q(""), [k, L] = Q(""), [_, T] = Q(""), [B, W] = Q(""), [H, j] = Q(!1), [O, Y] = Q([]), [ue, oe] = Q([]), [ke, ze] = Q([]), [Ae, Be] = Q(0), [Fe, $] = Q(1), [Z, ge] = Q(null), [R, ae] = Q(null), [te, Oe] = Q(null), [Ie, Re] = Q(null), [Le, rt] = Q(null), [ot, Qe] = Q(null), [Hn, Dr] = Q(null), [hn, vt] = Q(null), [yr, mn] = Q(null), [Vn, Ue] = Q(null);
  Rt(() => {
    Y(Yn), oe(Gt);
  }, []), Rt(() => {
    let z = 0;
    m && ke.length > 0 && ke.forEach((ve, je) => {
      const be = gn.find((We) => We.venue_id === m && We.package_id === ve);
      be && be.price && (z += be.price), D.map((We) => at.find((Kt) => Kt.id === We)).forEach((We) => {
        z += We.price;
      }), b.forEach((We) => {
        const Kt = Xt.find((zn) => zn.id === We.id);
        z += Kt.price * We.quantity;
      });
    }), Be(z.toFixed(2));
  }, [m, d, o, D, b]), Rt(() => {
    fe();
  }, [Fe]);
  const Yn = [
    {
      id: "1",
      name: "Blossom Private Space",
      description: "With a spacious garden can host teams up to...",
      images: ["/Blossom_hero_widget.jpg"],
      capacity: 22,
      area: 70
    },
    {
      id: "2",
      name: "Aurora Private Space",
      description: "With a spacious garden can host teams up to...",
      images: ["/Aurora_hero_widget.jpg"],
      capacity: 22,
      area: 70
    }
  ], Gt = [
    {
      id: "1",
      duration_hours: 8,
      duration_minutes: 0,
      description: "Includes Post-its, markers & Presentation screen.",
      is_multi_day: !0,
      is_increment_rate: null
    },
    {
      id: "2",
      duration_hours: 4,
      duration_minutes: 0,
      description: "Includes Post-its, markers & Presentation screen.",
      is_multi_day: !0,
      is_increment_rate: null
    },
    {
      id: "3",
      duration_hours: 1,
      duration_minutes: 0,
      description: "Includes Post-its, markers & Presentation screen.",
      is_multi_day: !1,
      is_increment_rate: 1
    }
  ], gn = [
    {
      id: "1",
      venue_id: "1",
      package_id: "1",
      price: 520
    },
    {
      id: "2",
      venue_id: "1",
      package_id: "2",
      price: 320
    },
    {
      id: "3",
      venue_id: "1",
      package_id: "3",
      price: 120
    },
    {
      id: "4",
      venue_id: "2",
      package_id: "1",
      price: 480
    },
    {
      id: "5",
      venue_id: "2",
      package_id: "2",
      price: 280
    },
    {
      id: "6",
      venue_id: "2",
      package_id: "3",
      price: 80
    }
  ], at = [
    {
      id: 1,
      title: "Presentation Screen",
      price: 100,
      description: '60" portable screen with wireless and HDMI connection.',
      image: "/tv_presentation_form_m.jpg"
    },
    {
      id: 2,
      title: "Post-its & Markers",
      price: 20,
      description: "Various colours/sizes of markers and post-its.",
      image: "/postits_form_m.jpg"
    },
    {
      id: 3,
      title: "Conference System",
      price: 150,
      description: "Wide angle camera with external microphones.",
      image: "/conference_form_m.jpg"
    },
    {
      id: 4,
      title: "Flip Charts",
      price: 30,
      description: "Set of 2 flip-charts with paper.",
      image: "/flipcharts_form_m.jpg"
    }
  ], Xt = [
    {
      id: 1,
      title: "Beverages",
      price: 10,
      description: "Unlimited Coffee, tea and soft drinks.",
      image: "/beverages_form_m.jpg"
    },
    {
      id: 2,
      title: "Snacks",
      price: 15,
      description: "Prepared during your check-in.",
      image: "/snacks_form_m.jpg"
    },
    {
      id: 3,
      title: "Breakfast",
      price: 25,
      description: "Via catering partners. Time of delivery specified later.",
      image: "/breakfast_form_m.jpg"
    },
    {
      id: 4,
      title: "Lunch",
      price: 40,
      description: "Via catering partners. Time of delivery specified later.",
      image: "/lunch_form_m.jpg"
    }
  ], vn = () => e > 0 && n !== "" && i !== "" && ke.length > 0 && m !== "" && (d ? o !== "" : !0), Dn = () => ((!e || e <= 0) && ge("Please select the number of guests"), n || ae("Please select a date"), i || Oe("Please select a time"), o && o < n && Re("End date must be after start date"), !0), V = () => F !== "" && P !== "" && k !== "" && _ !== "" && B !== "" && H, G = () => (F || rt("Please enter your company name"), P || Qe("Please enter your first name"), k || Dr("Please enter your last name"), _ || vt("Please enter your email"), B || mn("Please enter your phone number"), H || Ue("Please agree to the terms and conditions"), !0), fe = () => {
    document.getElementById("modal-content").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };
  async function X() {
    return (await (await fetch(
      "https://betadev.comidor.com/Services?unit=APIAccessTokens&s_tokenAppId=jIcwr4eot11VMSKdVCz3&s_tokenTenantId=creativepointdev&s_tokenSecret=OLUJdj7nJoho080JomNd&contextCode=Default&client=creativepointdev&dataAction=s_getAccessToken&responseFormat=json&responseCodes=true"
    )).text()).substring(43, 244);
  }
  const pe = async () => {
    var z;
    if (Dn() && G() && vn() && V()) {
      console.log("Submit data to Comidor");
      const ve = "https://betadev.comidor.com/Services", je = new URLSearchParams(window.location.search);
      console.log("queryParams: ", je);
      let be = new Date(n);
      d && (be = new Date(o));
      const ut = (z = O.find((yn) => yn.id === m)) == null ? void 0 : z.name.split(" ")[0], We = {
        u_contactFirstName: P,
        u_contactLastName: k,
        u_email: _,
        u_resStartDate: new Date(n).toISOString().slice(0, 10).replace(/-/g, ""),
        u_resEndDate: new Date(be).toISOString().slice(0, 10).replace(/-/g, ""),
        u_resStartTime: i,
        u_resEndTime: l,
        u_duration: ke.map((yn) => Gt.find((x) => x.id === yn).duration_hours),
        u_teamSize: e,
        u_venueName: ut,
        u_tableLayout: f,
        u_hasHardware: D.includes(1) ? 1 : 0,
        u_hasFlipcharts: D.includes(2) ? 1 : 0,
        u_hasUnlimitedCoffee: b.includes(1) ? 1 : 0,
        u_hasBreakfast: b.includes(3) ? 1 : 0,
        u_hasLunch: b.includes(4) ? 1 : 0,
        u_hasSnacks: b.includes(2) ? 1 : 0,
        u_hasDinner: b.includes(5) ? 1 : 0,
        client: "creativepointdev",
        unit: "APP_000134",
        dataAction: "u_createReservation",
        u_customQuote: 1,
        u_preventEmailCommunications: 1,
        responseFormat: "json"
      }, Kt = await X(), zn = new URLSearchParams(We), oa = ve + "?" + zn.toString();
      console.log("full_url: ", oa), console.log("authToken: ", Kt);
      const aa = je.get("adsID"), Zr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, ""), eo = ke.map((yn) => Gt.find((x) => x.id === yn).duration_hours).join(", "), ia = Ae, sa = ut, la = {
        "First Name": P,
        "Last Name": k,
        Company: F,
        "Team Size": e,
        Email: _,
        Phone: B,
        "Quote Date": Zr,
        "Event Start Date": new Date(n).toISOString().slice(0, 10),
        "Event End Date": new Date(be).toISOString().slice(0, 10),
        Duration: eo,
        "Total Value": ia,
        Venue: sa,
        adsID: aa
      };
      await ye(la);
    }
  }, ye = async (z) => {
    const ve = [
      z["First Name"],
      z["Last Name"],
      z.Company,
      z["Team Size"],
      z.Email,
      z.Phone,
      z["Quote Date"],
      z["Event Start Date"],
      z["Event End Date"],
      z.Duration,
      z["Total Value"],
      z.Venue,
      z.adsID
    ];
    try {
      const je = await fetch("https://google-sheets-api-wrapper.vercel.app/append-data", {
        // const response = await fetch(`http://localhost:5001/append-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: ve })
        // Stringify the entire body
      }), be = await je.json();
      je.ok ? console.log("Data successfully submitted:", be) : console.error("Error appending data:", be);
    } catch (je) {
      console.error("Failed to submit data:", je);
    }
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "grid grid-rows-[1fr_fit]  overflow-hidden lg:flex lg:flex-row justify-center lg:space-x-8 lg:overflow-visible", children: [
    /* @__PURE__ */ u.jsxs("div", { id: "modal-content", className: "min-w-[90vw] w-full lg:min-w-fit lg:w-3/4 p-2 md:p-8 mt-8 overflow-scroll", children: [
      Fe === 1 && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx("h2", { className: "text-2xl font-bold text-center", children: "Let's get you started" }),
        /* @__PURE__ */ u.jsx("p", { className: "text-center text-muted-foreground mt-6", children: "When and with how many people will you meet?" }),
        /* @__PURE__ */ u.jsx(
          PC,
          {
            guests: e,
            setGuests: t,
            guestsError: Z,
            setGuestsError: ge,
            date: n,
            setDate: r,
            dateError: R,
            endDate: o,
            setEndDate: a,
            endDateError: Ie,
            time: i,
            setTime: s,
            timeError: te,
            endTime: l,
            setEndTime: c,
            isMultiDay: d,
            setMultiDay: p,
            tableSetup: f,
            setTableSetup: h,
            venue: m,
            setVenue: g,
            eventPackages: ue,
            selectedEventPackages: ke,
            setSelectedEventPackages: ze,
            venues: O
          }
        ),
        /* @__PURE__ */ u.jsx("div", { className: "mt-12 space-y-8 flex flex-col items-center", children: /* @__PURE__ */ u.jsxs(Ce, { className: "mt-8", onClick: () => Dn() && vn() && $(2), children: [
          "Add Event Options ",
          /* @__PURE__ */ u.jsx(Or, { className: "ml-2 h-5 w-5 text-white" })
        ] }) })
      ] }),
      Fe === 2 && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(
          OC,
          {
            guests: e,
            facilitiesSelected: D,
            setFacilitiesSelected: y,
            cateringSelected: b,
            setCateringSelected: w,
            comments: C,
            setComments: E,
            catering: Xt,
            facilities: at
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: "hidden md:flex relative mt-12 space-x-4 flex justify-end items-center", children: [
          /* @__PURE__ */ u.jsx("span", { className: "absolute top-1/2 left-0 text-muted-foreground", children: "Step 2 of 3" }),
          /* @__PURE__ */ u.jsx(Ce, { variant: "outline", className: "mt-8", onClick: () => $(1), children: /* @__PURE__ */ u.jsx(Jn, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
          /* @__PURE__ */ u.jsxs(Ce, { className: "mt-8", onClick: () => $(3), children: [
            "Next ",
            /* @__PURE__ */ u.jsx(Or, { className: "ml-2 h-5 w-5 text-white" })
          ] })
        ] })
      ] }),
      Fe === 3 && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(
          LC,
          {
            company: F,
            setCompany: S,
            firstName: P,
            setFirstName: N,
            lastName: k,
            setLastName: L,
            email: _,
            setEmail: T,
            phone: B,
            setPhone: W,
            agreeTerms: H,
            setAgreeTerms: j,
            companyError: Le,
            firstNameError: ot,
            lastNameError: Hn,
            emailError: hn,
            phoneError: yr,
            agreeTermsError: Vn,
            isStep3Valid: V
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: "hidden md:flex mt-12 flex justify-between items-center", children: [
          /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: "Step 3 of 3" }),
          /* @__PURE__ */ u.jsxs("div", { className: "flex space-x-4 items-center", children: [
            /* @__PURE__ */ u.jsx(Ce, { variant: "outline", onClick: () => $(2), children: /* @__PURE__ */ u.jsx(Jn, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
            /* @__PURE__ */ u.jsxs(Ce, { onClick: () => V() && pe(), children: [
              "Request Proposal ",
              /* @__PURE__ */ u.jsx(Or, { className: "ml-2 h-5 w-5 text-white" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsx(
      My,
      {
        date: n,
        guests: e,
        time: i,
        venue: (Ee = O.find((z) => z.id === m)) == null ? void 0 : Ee.name,
        tableSetup: f,
        isMultiDay: d,
        endDate: o,
        currentStep: Fe,
        setCurrentStep: $,
        isStep1Valid: vn,
        checkStep1Errors: Dn,
        isStep3Valid: V,
        checkStep3Errors: G,
        selectedEventPackages: ke.map((z) => {
          var ve, je;
          return {
            ...z,
            duration: (ve = ue.find((be) => be.id === z)) == null ? void 0 : ve.duration_hours,
            price: (je = gn.find((be) => be.venue_id === m && be.package_id === z)) == null ? void 0 : je.price
          };
        }),
        facilitiesSelected: at.filter((z) => D.includes(z.id)),
        cateringSelected: b.map((z) => ({ ...z, name: Xt.find((ve) => ve.id === z.id).title, price: Xt.find((ve) => ve.id === z.id).price })),
        totalExclVat: Ae
      }
    )
  ] });
}
const $C = Tu, HC = Mu, VC = Bu, ip = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  ki,
  {
    ref: n,
    className: J(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ip.displayName = ki.displayName;
const sp = v.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(VC, { children: [
  /* @__PURE__ */ u.jsx(ip, {}),
  /* @__PURE__ */ u.jsx(
    ji,
    {
      ref: r,
      className: J(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: t
    }
  )
] }));
sp.displayName = ji.displayName;
const YC = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Pi,
  {
    ref: n,
    className: J("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
YC.displayName = Pi.displayName;
const zC = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  _i,
  {
    ref: n,
    className: J("text-sm text-muted-foreground", e),
    ...t
  }
));
zC.displayName = _i.displayName;
function UC() {
  const [e, t] = Q(!1);
  return /* @__PURE__ */ u.jsx("div", { className: "fixed right-10 bottom-10", children: /* @__PURE__ */ u.jsxs($C, { children: [
    /* @__PURE__ */ u.jsx(HC, { asChild: !0, children: /* @__PURE__ */ u.jsx(Ce, { onClick: () => t(!0), children: "Book Now" }) }),
    /* @__PURE__ */ u.jsx(sp, { className: "h-[95%] md:h-[95vh] max-w-[95vw] p-0 md:overflow-scroll", children: /* @__PURE__ */ u.jsx(WC, {}) })
  ] }) });
}
window.MeetingRoomBookingWidget = (e) => {
  Pr.createRoot(
    document.getElementById(e)
  ).render(
    /* @__PURE__ */ u.jsx(UC, {})
  );
};
