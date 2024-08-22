var If = Object.defineProperty;
var Lf = (e, t, n) => t in e ? If(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Vr = (e, t, n) => Lf(e, typeof t != "symbol" ? t + "" : t, n);
import * as v from "react";
import M, { useState as Q, useLayoutEffect as $a, useEffect as kt, forwardRef as Ha, createElement as ha, createContext as Nn, useContext as jn, useRef as Wf } from "react";
import * as jr from "react-dom";
import fl from "react-dom";
var ma = { exports: {} }, ur = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qi;
function $f() {
  if (Qi) return ur;
  Qi = 1;
  var e = M, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var d, h = {}, f = null, m = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (d in l) r.call(l, d) && !a.hasOwnProperty(d) && (h[d] = l[d]);
    if (s && s.defaultProps) for (d in l = s.defaultProps, l) h[d] === void 0 && (h[d] = l[d]);
    return { $$typeof: t, type: s, key: f, ref: m, props: h, _owner: o.current };
  }
  return ur.Fragment = n, ur.jsx = i, ur.jsxs = i, ur;
}
var cr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zi;
function Hf() {
  return Zi || (Zi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = M, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), p = Symbol.iterator, g = "@@iterator";
    function D(x) {
      if (x === null || typeof x != "object")
        return null;
      var A = p && x[p] || x[g];
      return typeof A == "function" ? A : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(x) {
      {
        for (var A = arguments.length, I = new Array(A > 1 ? A - 1 : 0), z = 1; z < A; z++)
          I[z - 1] = arguments[z];
        w("error", x, I);
      }
    }
    function w(x, A, I) {
      {
        var z = y.ReactDebugCurrentFrame, ce = z.getStackAddendum();
        ce !== "" && (A += "%s", I = I.concat([ce]));
        var pe = I.map(function(ae) {
          return String(ae);
        });
        pe.unshift("Warning: " + A), Function.prototype.apply.call(console[x], console, pe);
      }
    }
    var C = !1, E = !1, F = !1, S = !1, _ = !1, N;
    N = Symbol.for("react.module.reference");
    function j(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === r || x === a || _ || x === o || x === c || x === d || S || x === m || C || E || F || typeof x == "object" && x !== null && (x.$$typeof === f || x.$$typeof === h || x.$$typeof === i || x.$$typeof === s || x.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === N || x.getModuleId !== void 0));
    }
    function B(x, A, I) {
      var z = x.displayName;
      if (z)
        return z;
      var ce = A.displayName || A.name || "";
      return ce !== "" ? I + "(" + ce + ")" : I;
    }
    function P(x) {
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
            return P(A) + ".Consumer";
          case i:
            var I = x;
            return P(I._context) + ".Provider";
          case l:
            return B(x, x.render, "ForwardRef");
          case h:
            var z = x.displayName || null;
            return z !== null ? z : T(x.type) || "Memo";
          case f: {
            var ce = x, pe = ce._payload, ae = ce._init;
            try {
              return T(ae(pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, W = 0, H, k, O, J, fe, se, xe;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function _e() {
      {
        if (W === 0) {
          H = console.log, k = console.info, O = console.warn, J = console.error, fe = console.group, se = console.groupCollapsed, xe = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
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
    function Te() {
      {
        if (W--, W === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, x, {
              value: H
            }),
            info: L({}, x, {
              value: k
            }),
            warn: L({}, x, {
              value: O
            }),
            error: L({}, x, {
              value: J
            }),
            group: L({}, x, {
              value: fe
            }),
            groupCollapsed: L({}, x, {
              value: se
            }),
            groupEnd: L({}, x, {
              value: xe
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
            var z = ce.stack.trim().match(/\n( *(at )?)/);
            $ = z && z[1] || "";
          }
        return `
` + $ + x;
      }
    }
    var ve = !1, R;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      R = new oe();
    }
    function te(x, A) {
      if (!x || ve)
        return "";
      {
        var I = R.get(x);
        if (I !== void 0)
          return I;
      }
      var z;
      ve = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pe;
      pe = Fe.current, Fe.current = null, _e();
      try {
        if (A) {
          var ae = function() {
            throw Error();
          };
          if (Object.defineProperty(ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ae, []);
            } catch (ze) {
              z = ze;
            }
            Reflect.construct(x, [], ae);
          } else {
            try {
              ae.call();
            } catch (ze) {
              z = ze;
            }
            x.call(ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ze) {
            z = ze;
          }
          x();
        }
      } catch (ze) {
        if (ze && z && typeof ze.stack == "string") {
          for (var re = ze.stack.split(`
`), $e = z.stack.split(`
`), Se = re.length - 1, je = $e.length - 1; Se >= 1 && je >= 0 && re[Se] !== $e[je]; )
            je--;
          for (; Se >= 1 && je >= 0; Se--, je--)
            if (re[Se] !== $e[je]) {
              if (Se !== 1 || je !== 1)
                do
                  if (Se--, je--, je < 0 || re[Se] !== $e[je]) {
                    var ot = `
` + re[Se].replace(" at new ", " at ");
                    return x.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", x.displayName)), typeof x == "function" && R.set(x, ot), ot;
                  }
                while (Se >= 1 && je >= 0);
              break;
            }
        }
      } finally {
        ve = !1, Fe.current = pe, Te(), Error.prepareStackTrace = ce;
      }
      var Mn = x ? x.displayName || x.name : "", cn = Mn ? Z(Mn) : "";
      return typeof x == "function" && R.set(x, cn), cn;
    }
    function Pe(x, A, I) {
      return te(x, !1);
    }
    function Me(x) {
      var A = x.prototype;
      return !!(A && A.isReactComponent);
    }
    function Ae(x, A, I) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return te(x, Me(x));
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
            return Pe(x.render);
          case h:
            return Ae(x.type, A, I);
          case f: {
            var z = x, ce = z._payload, pe = z._init;
            try {
              return Ae(pe(ce), A, I);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, tt = {}, nt = y.ReactDebugCurrentFrame;
    function Ke(x) {
      if (x) {
        var A = x._owner, I = Ae(x.type, x._source, A ? A.type : null);
        nt.setExtraStackFrame(I);
      } else
        nt.setExtraStackFrame(null);
    }
    function An(x, A, I, z, ce) {
      {
        var pe = Function.call.bind(Be);
        for (var ae in x)
          if (pe(x, ae)) {
            var re = void 0;
            try {
              if (typeof x[ae] != "function") {
                var $e = Error((z || "React class") + ": " + I + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $e.name = "Invariant Violation", $e;
              }
              re = x[ae](A, ae, z, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Se) {
              re = Se;
            }
            re && !(re instanceof Error) && (Ke(ce), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", I, ae, typeof re), Ke(null)), re instanceof Error && !(re.message in tt) && (tt[re.message] = !0, Ke(ce), b("Failed %s type: %s", I, re.message), Ke(null));
          }
      }
    }
    var sr = Array.isArray;
    function rn(x) {
      return sr(x);
    }
    function mt(x) {
      {
        var A = typeof Symbol == "function" && Symbol.toStringTag, I = A && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return I;
      }
    }
    function lr(x) {
      try {
        return on(x), !1;
      } catch {
        return !0;
      }
    }
    function on(x) {
      return "" + x;
    }
    function On(x) {
      if (lr(x))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mt(x)), on(x);
    }
    var Ye = y.ReactCurrentOwner, Rn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, an, sn, rt;
    rt = {};
    function Ht(x) {
      if (Be.call(x, "ref")) {
        var A = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function ln(x) {
      if (Be.call(x, "key")) {
        var A = Object.getOwnPropertyDescriptor(x, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function un(x, A) {
      if (typeof x.ref == "string" && Ye.current && A && Ye.current.stateNode !== A) {
        var I = T(Ye.current.type);
        rt[I] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(Ye.current.type), x.ref), rt[I] = !0);
      }
    }
    function V(x, A) {
      {
        var I = function() {
          an || (an = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        I.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function U(x, A) {
      {
        var I = function() {
          sn || (sn = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        I.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var he = function(x, A, I, z, ce, pe, ae) {
      var re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: A,
        ref: I,
        props: ae,
        // Record the component responsible for creating this element.
        _owner: pe
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
        value: z
      }), Object.defineProperty(re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(re.props), Object.freeze(re)), re;
    };
    function G(x, A, I, z, ce) {
      {
        var pe, ae = {}, re = null, $e = null;
        I !== void 0 && (On(I), re = "" + I), ln(A) && (On(A.key), re = "" + A.key), Ht(A) && ($e = A.ref, un(A, ce));
        for (pe in A)
          Be.call(A, pe) && !Rn.hasOwnProperty(pe) && (ae[pe] = A[pe]);
        if (x && x.defaultProps) {
          var Se = x.defaultProps;
          for (pe in Se)
            ae[pe] === void 0 && (ae[pe] = Se[pe]);
        }
        if (re || $e) {
          var je = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          re && V(ae, je), $e && U(ae, je);
        }
        return he(x, re, $e, ce, z, Ye.current, ae);
      }
    }
    var me = y.ReactCurrentOwner, q = y.ReactDebugCurrentFrame;
    function ue(x) {
      if (x) {
        var A = x._owner, I = Ae(x.type, x._source, A ? A.type : null);
        q.setExtraStackFrame(I);
      } else
        q.setExtraStackFrame(null);
    }
    var Ne;
    Ne = !1;
    function Ce(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function Ie() {
      {
        if (me.current) {
          var x = T(me.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Ee(x) {
      return "";
    }
    var st = {};
    function Tn(x) {
      {
        var A = Ie();
        if (!A) {
          var I = typeof x == "string" ? x : x.displayName || x.name;
          I && (A = `

Check the top-level render call using <` + I + ">.");
        }
        return A;
      }
    }
    function Gi(x, A) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var I = Tn(A);
        if (st[I])
          return;
        st[I] = !0;
        var z = "";
        x && x._owner && x._owner !== me.current && (z = " It was passed a child from " + T(x._owner.type) + "."), ue(x), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, z), ue(null);
      }
    }
    function Xi(x, A) {
      {
        if (typeof x != "object")
          return;
        if (rn(x))
          for (var I = 0; I < x.length; I++) {
            var z = x[I];
            Ce(z) && Gi(z, A);
          }
        else if (Ce(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var ce = D(x);
          if (typeof ce == "function" && ce !== x.entries)
            for (var pe = ce.call(x), ae; !(ae = pe.next()).done; )
              Ce(ae.value) && Gi(ae.value, A);
        }
      }
    }
    function Pf(x) {
      {
        var A = x.type;
        if (A == null || typeof A == "string")
          return;
        var I;
        if (typeof A == "function")
          I = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === h))
          I = A.propTypes;
        else
          return;
        if (I) {
          var z = T(A);
          An(I, x.props, "prop", z, x);
        } else if (A.PropTypes !== void 0 && !Ne) {
          Ne = !0;
          var ce = T(A);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _f(x) {
      {
        for (var A = Object.keys(x.props), I = 0; I < A.length; I++) {
          var z = A[I];
          if (z !== "children" && z !== "key") {
            ue(x), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), ue(null);
            break;
          }
        }
        x.ref !== null && (ue(x), b("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    var Ki = {};
    function Ji(x, A, I, z, ce, pe) {
      {
        var ae = j(x);
        if (!ae) {
          var re = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $e = Ee();
          $e ? re += $e : re += Ie();
          var Se;
          x === null ? Se = "null" : rn(x) ? Se = "array" : x !== void 0 && x.$$typeof === t ? (Se = "<" + (T(x.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof x, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, re);
        }
        var je = G(x, A, I, ce, pe);
        if (je == null)
          return je;
        if (ae) {
          var ot = A.children;
          if (ot !== void 0)
            if (z)
              if (rn(ot)) {
                for (var Mn = 0; Mn < ot.length; Mn++)
                  Xi(ot[Mn], x);
                Object.freeze && Object.freeze(ot);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xi(ot, x);
        }
        if (Be.call(A, "key")) {
          var cn = T(x), ze = Object.keys(A).filter(function(Bf) {
            return Bf !== "key";
          }), Ho = ze.length > 0 ? "{key: someKey, " + ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ki[cn + Ho]) {
            var Mf = ze.length > 0 ? "{" + ze.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ho, cn, Mf, cn), Ki[cn + Ho] = !0;
          }
        }
        return x === r ? _f(je) : Pf(je), je;
      }
    }
    function Af(x, A, I) {
      return Ji(x, A, I, !0);
    }
    function Of(x, A, I) {
      return Ji(x, A, I, !1);
    }
    var Rf = Of, Tf = Af;
    cr.Fragment = r, cr.jsx = Rf, cr.jsxs = Tf;
  }()), cr;
}
process.env.NODE_ENV === "production" ? ma.exports = $f() : ma.exports = Hf();
var u = ma.exports, yr = {}, dr = fl;
if (process.env.NODE_ENV === "production")
  yr.createRoot = dr.createRoot, yr.hydrateRoot = dr.hydrateRoot;
else {
  var Yr = dr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  yr.createRoot = function(e, t) {
    Yr.usingClientEntryPoint = !0;
    try {
      return dr.createRoot(e, t);
    } finally {
      Yr.usingClientEntryPoint = !1;
    }
  }, yr.hydrateRoot = function(e, t, n) {
    Yr.usingClientEntryPoint = !0;
    try {
      return dr.hydrateRoot(e, t, n);
    } finally {
      Yr.usingClientEntryPoint = !1;
    }
  };
}
function Vf(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function hl(...e) {
  return (t) => e.forEach((n) => Vf(n, t));
}
function le(...e) {
  return v.useCallback(hl(...e), e);
}
var Gt = v.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = v.Children.toArray(n), a = o.find(zf);
  if (a) {
    const i = a.props.children, s = o.map((l) => l === a ? v.Children.count(i) > 1 ? v.Children.only(null) : v.isValidElement(i) ? i.props.children : null : l);
    return /* @__PURE__ */ u.jsx(pa, { ...r, ref: t, children: v.isValidElement(i) ? v.cloneElement(i, void 0, s) : null });
  }
  return /* @__PURE__ */ u.jsx(pa, { ...r, ref: t, children: n });
});
Gt.displayName = "Slot";
var pa = v.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (v.isValidElement(n)) {
    const o = qf(n);
    return v.cloneElement(n, {
      ...Uf(r, n.props),
      // @ts-ignore
      ref: t ? hl(t, o) : o
    });
  }
  return v.Children.count(n) > 1 ? v.Children.only(null) : null;
});
pa.displayName = "SlotClone";
var Yf = ({ children: e }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: e });
function zf(e) {
  return v.isValidElement(e) && e.type === Yf;
}
function Uf(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      a(...s), o(...s);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function qf(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ml(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = ml(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Gf() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = ml(e)) && (r && (r += " "), r += t);
  return r;
}
const es = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, ts = Gf, pl = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return ts(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((c) => {
    const d = n == null ? void 0 : n[c], h = a == null ? void 0 : a[c];
    if (d === null) return null;
    const f = es(d) || es(h);
    return o[c][f];
  }), s = n && Object.entries(n).reduce((c, d) => {
    let [h, f] = d;
    return f === void 0 || (c[h] = f), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, d) => {
    let { class: h, className: f, ...m } = d;
    return Object.entries(m).every((p) => {
      let [g, D] = p;
      return Array.isArray(D) ? D.includes({
        ...a,
        ...s
      }[g]) : {
        ...a,
        ...s
      }[g] === D;
    }) ? [
      ...c,
      h,
      f
    ] : c;
  }, []);
  return ts(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
function gl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = gl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Xf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = gl(e)) && (r && (r += " "), r += t);
  return r;
}
const Va = "-";
function Kf(e) {
  const t = Qf(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function o(i) {
    const s = i.split(Va);
    return s[0] === "" && s.length !== 1 && s.shift(), vl(s, t) || Jf(i);
  }
  function a(i, s) {
    const l = n[i] || [];
    return s && r[i] ? [...l, ...r[i]] : l;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  };
}
function vl(e, t) {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? vl(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Va);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}
const ns = /^\[(.+)\]$/;
function Jf(e) {
  if (ns.test(e)) {
    const t = ns.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Qf(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return eh(Object.entries(e.classGroups), n).forEach(([a, i]) => {
    ga(i, r, a, t);
  }), r;
}
function ga(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : rs(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Zf(o)) {
        ga(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      ga(i, rs(t, a), n, r);
    });
  });
}
function rs(e, t) {
  let n = e;
  return t.split(Va).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Zf(e) {
  return e.isThemeGetter;
}
function eh(e, t) {
  return t ? e.map(([n, r]) => {
    const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, s]) => [t + i, s])) : a);
    return [n, o];
  }) : e;
}
function th(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(a, i) {
    n.set(a, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
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
}
const Dl = "!";
function nh(e) {
  const t = e.separator, n = t.length === 1, r = t[0], o = t.length;
  return function(i) {
    const s = [];
    let l = 0, c = 0, d;
    for (let g = 0; g < i.length; g++) {
      let D = i[g];
      if (l === 0) {
        if (D === r && (n || i.slice(g, g + o) === t)) {
          s.push(i.slice(c, g)), c = g + o;
          continue;
        }
        if (D === "/") {
          d = g;
          continue;
        }
      }
      D === "[" ? l++ : D === "]" && l--;
    }
    const h = s.length === 0 ? i : i.substring(c), f = h.startsWith(Dl), m = f ? h.substring(1) : h, p = d && d > c ? d - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: f,
      baseClassName: m,
      maybePostfixModifierPosition: p
    };
  };
}
function rh(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function oh(e) {
  return {
    cache: th(e.cacheSize),
    splitModifiers: nh(e),
    ...Kf(e)
  };
}
const ah = /\s+/;
function ih(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = /* @__PURE__ */ new Set();
  return e.trim().split(ah).map((i) => {
    const {
      modifiers: s,
      hasImportantModifier: l,
      baseClassName: c,
      maybePostfixModifierPosition: d
    } = n(i);
    let h = r(d ? c.substring(0, d) : c), f = !!d;
    if (!h) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (h = r(c), !h)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      f = !1;
    }
    const m = rh(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? m + Dl : m,
      classGroupId: h,
      originalClassName: i,
      hasPostfixModifier: f
    };
  }).reverse().filter((i) => {
    if (!i.isTailwindClass)
      return !0;
    const {
      modifierId: s,
      classGroupId: l,
      hasPostfixModifier: c
    } = i, d = s + l;
    return a.has(d) ? !1 : (a.add(d), o(l, c).forEach((h) => a.add(s + h)), !0);
  }).reverse().map((i) => i.originalClassName).join(" ");
}
function sh() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = yl(t)) && (r && (r += " "), r += n);
  return r;
}
function yl(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = yl(e[r])) && (n && (n += " "), n += t);
  return n;
}
function lh(e, ...t) {
  let n, r, o, a = i;
  function i(l) {
    const c = t.reduce((d, h) => h(d), e());
    return n = oh(c), r = n.cache.get, o = n.cache.set, a = s, s(l);
  }
  function s(l) {
    const c = r(l);
    if (c)
      return c;
    const d = ih(l, n);
    return o(l, d), d;
  }
  return function() {
    return a(sh.apply(null, arguments));
  };
}
function ye(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const bl = /^\[(?:([a-z-]+):)?(.+)\]$/i, uh = /^\d+\/\d+$/, ch = /* @__PURE__ */ new Set(["px", "full", "screen"]), dh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, fh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, mh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ph = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Ft(e) {
  return vn(e) || ch.has(e) || uh.test(e);
}
function Vt(e) {
  return tr(e, "length", Ch);
}
function vn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function zr(e) {
  return tr(e, "number", vn);
}
function fr(e) {
  return !!e && Number.isInteger(Number(e));
}
function gh(e) {
  return e.endsWith("%") && vn(e.slice(0, -1));
}
function X(e) {
  return bl.test(e);
}
function Yt(e) {
  return dh.test(e);
}
const vh = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Dh(e) {
  return tr(e, vh, wl);
}
function yh(e) {
  return tr(e, "position", wl);
}
const bh = /* @__PURE__ */ new Set(["image", "url"]);
function wh(e) {
  return tr(e, bh, Fh);
}
function xh(e) {
  return tr(e, "", Eh);
}
function hr() {
  return !0;
}
function tr(e, t, n) {
  const r = bl.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function Ch(e) {
  return fh.test(e) && !hh.test(e);
}
function wl() {
  return !1;
}
function Eh(e) {
  return mh.test(e);
}
function Fh(e) {
  return ph.test(e);
}
function Sh() {
  const e = ye("colors"), t = ye("spacing"), n = ye("blur"), r = ye("brightness"), o = ye("borderColor"), a = ye("borderRadius"), i = ye("borderSpacing"), s = ye("borderWidth"), l = ye("contrast"), c = ye("grayscale"), d = ye("hueRotate"), h = ye("invert"), f = ye("gap"), m = ye("gradientColorStops"), p = ye("gradientColorStopPositions"), g = ye("inset"), D = ye("margin"), y = ye("opacity"), b = ye("padding"), w = ye("saturate"), C = ye("scale"), E = ye("sepia"), F = ye("skew"), S = ye("space"), _ = ye("translate"), N = () => ["auto", "contain", "none"], j = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", X, t], P = () => [X, t], T = () => ["", Ft, Vt], L = () => ["auto", vn, X], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], k = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], J = () => ["", "0", X], fe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], se = () => [vn, zr], xe = () => [vn, X];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [hr],
      spacing: [Ft, Vt],
      blur: ["none", "", Yt, X],
      brightness: se(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Yt, X],
      borderSpacing: P(),
      borderWidth: T(),
      contrast: se(),
      grayscale: J(),
      hueRotate: xe(),
      invert: J(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [gh, Vt],
      inset: B(),
      margin: B(),
      opacity: se(),
      padding: P(),
      saturate: se(),
      scale: se(),
      sepia: J(),
      skew: xe(),
      space: P(),
      translate: P()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", X]
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
        columns: [Yt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": fe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": fe()
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
        object: [...W(), X]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: j()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": j()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": j()
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
        z: ["auto", fr, X]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
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
        flex: ["1", "auto", "initial", "none", X]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: J()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: J()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", fr, X]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [hr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", fr, X]
        }, X]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [hr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [fr, X]
        }, X]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
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
        "auto-cols": ["auto", "min", "max", "fr", X]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", X]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [X, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [X, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Yt]
        }, Yt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [X, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Yt, Vt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", zr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [hr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", X]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", vn, zr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ft, X]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", X]
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
        decoration: ["auto", "from-font", Ft, Vt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ft, X]
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
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X]
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
        content: ["none", X]
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
        bg: [...W(), yh]
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
        bg: ["auto", "cover", "contain", Dh]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, wh]
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
        from: [p]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [p]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
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
        "outline-offset": [Ft, X]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ft, Vt]
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
        "ring-offset": [Ft, Vt]
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
        shadow: ["", "inner", "none", Yt, xh]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [hr]
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
        "mix-blend": [...k(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": k()
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
        "drop-shadow": ["", "none", Yt, X]
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
        invert: [h]
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
        "backdrop-invert": [h]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", X]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: xe()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", X]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: xe()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", X]
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
        rotate: [fr, X]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [_]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [_]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X]
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
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
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
        "will-change": ["auto", "scroll", "contents", "transform", X]
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
        stroke: [Ft, Vt, zr]
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
}
const Nh = /* @__PURE__ */ lh(Sh);
function K(...e) {
  return Nh(Xf(e));
}
const va = pl(
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
), we = v.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => {
  const i = r ? Gt : "button";
  return /* @__PURE__ */ u.jsx(
    i,
    {
      className: K(va({ variant: t, size: n, className: e })),
      ref: a,
      ...o
    }
  );
});
we.displayName = "Button";
function xl(e) {
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
function Dn(e) {
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
function Da(e) {
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
function jh(e) {
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
function kh(e) {
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
function Cl(e) {
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
function xr(e) {
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
function $n(e) {
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
function Ph(e) {
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
function _h(e) {
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
function Ah(e) {
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
function ie(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function et(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function He(e, t) {
  const n = ie(e);
  return isNaN(t) ? et(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function ut(e, t) {
  const n = ie(e);
  if (isNaN(t)) return et(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = et(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const Ya = 6048e5, Oh = 864e5;
let Rh = {};
function kr() {
  return Rh;
}
function yt(e, t) {
  var s, l, c, d;
  const n = kr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ie(e), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function xn(e) {
  return yt(e, { weekStartsOn: 1 });
}
function El(e) {
  const t = ie(e), n = t.getFullYear(), r = et(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = xn(r), a = et(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const i = xn(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function Gn(e) {
  const t = ie(e);
  return t.setHours(0, 0, 0, 0), t;
}
function lo(e) {
  const t = ie(e), n = new Date(
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
function vt(e, t) {
  const n = Gn(e), r = Gn(t), o = +n - lo(n), a = +r - lo(r);
  return Math.round((o - a) / Oh);
}
function Th(e) {
  const t = El(e), n = et(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), xn(n);
}
function ya(e, t) {
  const n = t * 7;
  return He(e, n);
}
function Mh(e, t) {
  return ut(e, t * 12);
}
function Bh(e) {
  let t;
  return e.forEach(function(n) {
    const r = ie(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Ih(e) {
  let t;
  return e.forEach((n) => {
    const r = ie(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function qe(e, t) {
  const n = Gn(e), r = Gn(t);
  return +n == +r;
}
function za(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Lh(e) {
  if (!za(e) && typeof e != "number")
    return !1;
  const t = ie(e);
  return !isNaN(Number(t));
}
function Fr(e, t) {
  const n = ie(e), r = ie(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function Wh(e, t, n) {
  const r = yt(e, n), o = yt(t, n), a = +r - lo(r), i = +o - lo(o);
  return Math.round((a - i) / Ya);
}
function Ua(e) {
  const t = ie(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Ge(e) {
  const t = ie(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Fl(e) {
  const t = ie(e), n = et(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function qa(e, t) {
  var s, l, c, d;
  const n = kr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ie(e), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function Sl(e) {
  return qa(e, { weekStartsOn: 1 });
}
const $h = {
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
}, Hh = (e, t, n) => {
  let r;
  const o = $h[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Vo(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Vh = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Yh = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, zh = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Uh = {
  date: Vo({
    formats: Vh,
    defaultWidth: "full"
  }),
  time: Vo({
    formats: Yh,
    defaultWidth: "full"
  }),
  dateTime: Vo({
    formats: zh,
    defaultWidth: "full"
  })
}, qh = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Gh = (e, t, n, r) => qh[e];
function mr(e) {
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
const Xh = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Kh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Jh = {
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
}, Qh = {
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
}, Zh = {
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
}, em = {
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
}, tm = (e, t) => {
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
}, nm = {
  ordinalNumber: tm,
  era: mr({
    values: Xh,
    defaultWidth: "wide"
  }),
  quarter: mr({
    values: Kh,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: mr({
    values: Jh,
    defaultWidth: "wide"
  }),
  day: mr({
    values: Qh,
    defaultWidth: "wide"
  }),
  dayPeriod: mr({
    values: Zh,
    defaultWidth: "wide",
    formattingValues: em,
    defaultFormattingWidth: "wide"
  })
};
function pr(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? om(s, (h) => h.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      rm(s, (h) => h.test(i))
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
function rm(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function om(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function am(e) {
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
const im = /^(\d+)(th|st|nd|rd)?/i, sm = /\d+/i, lm = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, um = {
  any: [/^b/i, /^(a|c)/i]
}, cm = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, dm = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, fm = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, hm = {
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
}, mm = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, pm = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, gm = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, vm = {
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
}, Dm = {
  ordinalNumber: am({
    matchPattern: im,
    parsePattern: sm,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: pr({
    matchPatterns: lm,
    defaultMatchWidth: "wide",
    parsePatterns: um,
    defaultParseWidth: "any"
  }),
  quarter: pr({
    matchPatterns: cm,
    defaultMatchWidth: "wide",
    parsePatterns: dm,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: pr({
    matchPatterns: fm,
    defaultMatchWidth: "wide",
    parsePatterns: hm,
    defaultParseWidth: "any"
  }),
  day: pr({
    matchPatterns: mm,
    defaultMatchWidth: "wide",
    parsePatterns: pm,
    defaultParseWidth: "any"
  }),
  dayPeriod: pr({
    matchPatterns: gm,
    defaultMatchWidth: "any",
    parsePatterns: vm,
    defaultParseWidth: "any"
  })
}, Nl = {
  code: "en-US",
  formatDistance: Hh,
  formatLong: Uh,
  formatRelative: Gh,
  localize: nm,
  match: Dm,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ym(e) {
  const t = ie(e);
  return vt(t, Fl(t)) + 1;
}
function jl(e) {
  const t = ie(e), n = +xn(t) - +Th(t);
  return Math.round(n / Ya) + 1;
}
function kl(e, t) {
  var d, h, f, m;
  const n = ie(e), r = n.getFullYear(), o = kr(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((m = (f = o.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, i = et(e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = yt(i, t), l = et(e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const c = yt(l, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function bm(e, t) {
  var s, l, c, d;
  const n = kr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = kl(e, t), a = et(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), yt(a, t);
}
function Pl(e, t) {
  const n = ie(e), r = +yt(n, t) - +bm(n, t);
  return Math.round(r / Ya) + 1;
}
function de(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const zt = {
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
}, Bn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, os = {
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
    return zt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = kl(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return de(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : de(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = El(e);
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
        return zt.M(e, t);
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
    const o = Pl(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : de(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = jl(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : de(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : zt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = ym(e);
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
    switch (r === 12 ? o = Bn.noon : r === 0 ? o = Bn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Bn.evening : r >= 12 ? o = Bn.afternoon : r >= 4 ? o = Bn.morning : o = Bn.night, t) {
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
    return zt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : zt.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : zt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : zt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return zt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return is(r);
      case "XXXX":
      case "XX":
        return fn(r);
      case "XXXXX":
      case "XXX":
      default:
        return fn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return is(r);
      case "xxxx":
      case "xx":
        return fn(r);
      case "xxxxx":
      case "xxx":
      default:
        return fn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + as(r, ":");
      case "OOOO":
      default:
        return "GMT" + fn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + as(r, ":");
      case "zzzz":
      default:
        return "GMT" + fn(r, ":");
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
function as(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + de(a, 2);
}
function is(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + de(Math.abs(e) / 60, 2) : fn(e, t);
}
function fn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = de(Math.trunc(r / 60), 2), a = de(r % 60, 2);
  return n + o + t + a;
}
const ss = (e, t) => {
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
}, _l = (e, t) => {
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
}, wm = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return ss(e, t);
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
  return a.replace("{{date}}", ss(r, t)).replace("{{time}}", _l(o, t));
}, xm = {
  p: _l,
  P: wm
}, Cm = /^D+$/, Em = /^Y+$/, Fm = ["D", "DD", "YY", "YYYY"];
function Sm(e) {
  return Cm.test(e);
}
function Nm(e) {
  return Em.test(e);
}
function jm(e, t, n) {
  const r = km(e, t, n);
  if (console.warn(r), Fm.includes(e)) throw new RangeError(r);
}
function km(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Pm = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, _m = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Am = /^'([^]*?)'?$/, Om = /''/g, Rm = /[a-zA-Z]/;
function Ot(e, t, n) {
  var d, h, f, m, p, g, D, y;
  const r = kr(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Nl, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((h = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((m = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((g = (p = n == null ? void 0 : n.locale) == null ? void 0 : p.options) == null ? void 0 : g.weekStartsOn) ?? r.weekStartsOn ?? ((y = (D = r.locale) == null ? void 0 : D.options) == null ? void 0 : y.weekStartsOn) ?? 0, s = ie(e);
  if (!Lh(s))
    throw new RangeError("Invalid time value");
  let l = t.match(_m).map((b) => {
    const w = b[0];
    if (w === "p" || w === "P") {
      const C = xm[w];
      return C(b, o.formatLong);
    }
    return b;
  }).join("").match(Pm).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const w = b[0];
    if (w === "'")
      return { isToken: !1, value: Tm(b) };
    if (os[w])
      return { isToken: !0, value: b };
    if (w.match(Rm))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && Nm(w) || !(n != null && n.useAdditionalDayOfYearTokens) && Sm(w)) && jm(w, t, String(e));
    const C = os[w[0]];
    return C(s, w, o.localize, c);
  }).join("");
}
function Tm(e) {
  const t = e.match(Am);
  return t ? t[1].replace(Om, "'") : e;
}
function Mm(e) {
  const t = ie(e), n = t.getFullYear(), r = t.getMonth(), o = et(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Bm(e) {
  return Math.trunc(+ie(e) / 1e3);
}
function Im(e) {
  const t = ie(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Lm(e, t) {
  return Wh(
    Im(e),
    Ge(e),
    t
  ) + 1;
}
function ba(e, t) {
  const n = ie(e), r = ie(t);
  return n.getTime() > r.getTime();
}
function Al(e, t) {
  const n = ie(e), r = ie(t);
  return +n < +r;
}
function Ga(e, t) {
  const n = ie(e), r = ie(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Wm(e, t) {
  const n = ie(e), r = ie(t);
  return n.getFullYear() === r.getFullYear();
}
function Yo(e, t) {
  return He(e, -t);
}
function zo(e, t) {
  const n = ie(e), r = n.getFullYear(), o = n.getDate(), a = et(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const i = Mm(a);
  return n.setMonth(t, Math.min(o, i)), n;
}
function ls(e, t) {
  const n = ie(e);
  return isNaN(+n) ? et(e, NaN) : (n.setFullYear(t), n);
}
function ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function $m(e, t) {
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
function Qt(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = v.createContext(i), l = n.length;
    n = [...n, i];
    function c(h) {
      const { scope: f, children: m, ...p } = h, g = (f == null ? void 0 : f[e][l]) || s, D = v.useMemo(() => p, Object.values(p));
      return /* @__PURE__ */ u.jsx(g.Provider, { value: D, children: m });
    }
    function d(h, f) {
      const m = (f == null ? void 0 : f[e][l]) || s, p = v.useContext(m);
      if (p) return p;
      if (i !== void 0) return i;
      throw new Error(`\`${h}\` must be used within \`${a}\``);
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
  return o.scopeName = e, [r, Hm(o, ...t)];
}
function Hm(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: c }) => {
        const h = l(a)[`__scope${c}`];
        return { ...s, ...h };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var We = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {
}, Vm = v.useId || (() => {
}), Ym = 0;
function yn(e) {
  const [t, n] = v.useState(Vm());
  return We(() => {
    n((r) => r ?? String(Ym++));
  }, [e]), t ? `radix-${t}` : "";
}
function Le(e) {
  const t = v.useRef(e);
  return v.useEffect(() => {
    t.current = e;
  }), v.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Xn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = zm({ defaultProp: t, onChange: n }), a = e !== void 0, i = a ? e : r, s = Le(n), l = v.useCallback(
    (c) => {
      if (a) {
        const h = typeof c == "function" ? c(e) : c;
        h !== e && s(h);
      } else
        o(c);
    },
    [a, e, o, s]
  );
  return [i, l];
}
function zm({
  defaultProp: e,
  onChange: t
}) {
  const n = v.useState(e), [r] = n, o = v.useRef(r), a = Le(t);
  return v.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
var Um = [
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
], ne = Um.reduce((e, t) => {
  const n = v.forwardRef((r, o) => {
    const { asChild: a, ...i } = r, s = a ? Gt : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(s, { ...i, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function qm(e, t) {
  e && jr.flushSync(() => e.dispatchEvent(t));
}
function Gm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Le(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Xm = "DismissableLayer", wa = "dismissableLayer.update", Km = "dismissableLayer.pointerDownOutside", Jm = "dismissableLayer.focusOutside", us, Ol = v.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), bo = v.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, c = v.useContext(Ol), [d, h] = v.useState(null), f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = v.useState({}), p = le(t, (S) => h(S)), g = Array.from(c.layers), [D] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = g.indexOf(D), b = d ? g.indexOf(d) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, C = b >= y, E = ep((S) => {
      const _ = S.target, N = [...c.branches].some((j) => j.contains(_));
      !C || N || (o == null || o(S), i == null || i(S), S.defaultPrevented || s == null || s());
    }, f), F = tp((S) => {
      const _ = S.target;
      [...c.branches].some((j) => j.contains(_)) || (a == null || a(S), i == null || i(S), S.defaultPrevented || s == null || s());
    }, f);
    return Gm((S) => {
      b === c.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && s && (S.preventDefault(), s()));
    }, f), v.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (us = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), cs(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = us);
        };
    }, [d, f, n, c]), v.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), cs());
    }, [d, c]), v.useEffect(() => {
      const S = () => m({});
      return document.addEventListener(wa, S), () => document.removeEventListener(wa, S);
    }, []), /* @__PURE__ */ u.jsx(
      ne.div,
      {
        ...l,
        ref: p,
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
bo.displayName = Xm;
var Qm = "DismissableLayerBranch", Zm = v.forwardRef((e, t) => {
  const n = v.useContext(Ol), r = v.useRef(null), o = le(t, r);
  return v.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ u.jsx(ne.div, { ...e, ref: o });
});
Zm.displayName = Qm;
function ep(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Le(e), r = v.useRef(!1), o = v.useRef(() => {
  });
  return v.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Rl(
            Km,
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
function tp(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Le(e), r = v.useRef(!1);
  return v.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Rl(Jm, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function cs() {
  const e = new CustomEvent(wa);
  document.dispatchEvent(e);
}
function Rl(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? qm(o, a) : o.dispatchEvent(a);
}
var Uo = "focusScope.autoFocusOnMount", qo = "focusScope.autoFocusOnUnmount", ds = { bubbles: !1, cancelable: !0 }, np = "FocusScope", wo = v.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, l] = v.useState(null), c = Le(o), d = Le(a), h = v.useRef(null), f = le(t, (g) => l(g)), m = v.useRef({
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
        if (m.paused || !s) return;
        const C = w.target;
        s.contains(C) ? h.current = C : Ut(h.current, { select: !0 });
      }, D = function(w) {
        if (m.paused || !s) return;
        const C = w.relatedTarget;
        C !== null && (s.contains(C) || Ut(h.current, { select: !0 }));
      }, y = function(w) {
        if (document.activeElement === document.body)
          for (const E of w)
            E.removedNodes.length > 0 && Ut(s);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", D);
      const b = new MutationObserver(y);
      return s && b.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", D), b.disconnect();
      };
    }
  }, [r, s, m.paused]), v.useEffect(() => {
    if (s) {
      hs.add(m);
      const g = document.activeElement;
      if (!s.contains(g)) {
        const y = new CustomEvent(Uo, ds);
        s.addEventListener(Uo, c), s.dispatchEvent(y), y.defaultPrevented || (rp(lp(Tl(s)), { select: !0 }), document.activeElement === g && Ut(s));
      }
      return () => {
        s.removeEventListener(Uo, c), setTimeout(() => {
          const y = new CustomEvent(qo, ds);
          s.addEventListener(qo, d), s.dispatchEvent(y), y.defaultPrevented || Ut(g ?? document.body, { select: !0 }), s.removeEventListener(qo, d), hs.remove(m);
        }, 0);
      };
    }
  }, [s, c, d, m]);
  const p = v.useCallback(
    (g) => {
      if (!n && !r || m.paused) return;
      const D = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, y = document.activeElement;
      if (D && y) {
        const b = g.currentTarget, [w, C] = op(b);
        w && C ? !g.shiftKey && y === C ? (g.preventDefault(), n && Ut(w, { select: !0 })) : g.shiftKey && y === w && (g.preventDefault(), n && Ut(C, { select: !0 })) : y === b && g.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ u.jsx(ne.div, { tabIndex: -1, ...i, ref: f, onKeyDown: p });
});
wo.displayName = np;
function rp(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ut(r, { select: t }), document.activeElement !== n) return;
}
function op(e) {
  const t = Tl(e), n = fs(t, e), r = fs(t.reverse(), e);
  return [n, r];
}
function Tl(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function fs(e, t) {
  for (const n of e)
    if (!ap(n, { upTo: t })) return n;
}
function ap(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ip(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ut(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ip(e) && t && e.select();
  }
}
var hs = sp();
function sp() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ms(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ms(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function ms(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function lp(e) {
  return e.filter((t) => t.tagName !== "A");
}
var up = "Portal", xo = v.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = v.useState(!1);
  We(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? fl.createPortal(/* @__PURE__ */ u.jsx(ne.div, { ...r, ref: t }), i) : null;
});
xo.displayName = up;
function cp(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var ft = (e) => {
  const { present: t, children: n } = e, r = dp(t), o = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), a = le(r.ref, fp(o));
  return typeof n == "function" || r.isPresent ? v.cloneElement(o, { ref: a }) : null;
};
ft.displayName = "Presence";
function dp(e) {
  const [t, n] = v.useState(), r = v.useRef({}), o = v.useRef(e), a = v.useRef("none"), i = e ? "mounted" : "unmounted", [s, l] = cp(i, {
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
    const c = Ur(r.current);
    a.current = s === "mounted" ? c : "none";
  }, [s]), We(() => {
    const c = r.current, d = o.current;
    if (d !== e) {
      const f = a.current, m = Ur(c);
      e ? l("MOUNT") : m === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && f !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), We(() => {
    if (t) {
      const c = (h) => {
        const m = Ur(r.current).includes(h.animationName);
        h.target === t && m && jr.flushSync(() => l("ANIMATION_END"));
      }, d = (h) => {
        h.target === t && (a.current = Ur(r.current));
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
function Ur(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function fp(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Go = 0;
function Xa() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ps()), document.body.insertAdjacentElement("beforeend", e[1] ?? ps()), Go++, () => {
      Go === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Go--;
    };
  }, []);
}
function ps() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var gt = function() {
  return gt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, gt.apply(this, arguments);
};
function Ml(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function hp(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var no = "right-scroll-bar-position", ro = "width-before-scroll-bar", mp = "with-scroll-bars-hidden", pp = "--removed-body-scroll-bar-size";
function Xo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function gp(e, t) {
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
var vp = typeof window < "u" ? v.useLayoutEffect : v.useEffect, gs = /* @__PURE__ */ new WeakMap();
function Dp(e, t) {
  var n = gp(null, function(r) {
    return e.forEach(function(o) {
      return Xo(o, r);
    });
  });
  return vp(function() {
    var r = gs.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), i = n.current;
      o.forEach(function(s) {
        a.has(s) || Xo(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Xo(s, i);
      });
    }
    gs.set(n, e);
  }, [e]), n;
}
function yp(e) {
  return e;
}
function bp(e, t) {
  t === void 0 && (t = yp);
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
function wp(e) {
  e === void 0 && (e = {});
  var t = bp(null);
  return t.options = gt({ async: !0, ssr: !1 }, e), t;
}
var Bl = function(e) {
  var t = e.sideCar, n = Ml(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, gt({}, n));
};
Bl.isSideCarExport = !0;
function xp(e, t) {
  return e.useMedium(t), Bl;
}
var Il = wp(), Ko = function() {
}, Co = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: Ko,
    onWheelCapture: Ko,
    onTouchMoveCapture: Ko
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, h = e.shards, f = e.sideCar, m = e.noIsolation, p = e.inert, g = e.allowPinchZoom, D = e.as, y = D === void 0 ? "div" : D, b = e.gapMode, w = Ml(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = f, E = Dp([n, t]), F = gt(gt({}, w), o);
  return v.createElement(
    v.Fragment,
    null,
    d && v.createElement(C, { sideCar: Il, removeScrollBar: c, shards: h, noIsolation: m, inert: p, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: b }),
    i ? v.cloneElement(v.Children.only(s), gt(gt({}, F), { ref: E })) : v.createElement(y, gt({}, F, { className: l, ref: E }), s)
  );
});
Co.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Co.classNames = {
  fullWidth: ro,
  zeroRight: no
};
var Cp = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Ep() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Cp();
  return t && e.setAttribute("nonce", t), e;
}
function Fp(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Sp(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Np = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Ep()) && (Fp(t, n), Sp(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, jp = function() {
  var e = Np();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ll = function() {
  var e = jp(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, kp = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Jo = function(e) {
  return parseInt(e || "", 10) || 0;
}, Pp = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Jo(n), Jo(r), Jo(o)];
}, _p = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return kp;
  var t = Pp(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Ap = Ll(), Un = "data-scroll-locked", Op = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(mp, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Un, `] {
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
  
  .`).concat(no, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ro, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(no, " .").concat(no, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ro, " .").concat(ro, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Un, `] {
    `).concat(pp, ": ").concat(s, `px;
  }
`);
}, vs = function() {
  var e = parseInt(document.body.getAttribute(Un) || "0", 10);
  return isFinite(e) ? e : 0;
}, Rp = function() {
  v.useEffect(function() {
    return document.body.setAttribute(Un, (vs() + 1).toString()), function() {
      var e = vs() - 1;
      e <= 0 ? document.body.removeAttribute(Un) : document.body.setAttribute(Un, e.toString());
    };
  }, []);
}, Tp = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Rp();
  var a = v.useMemo(function() {
    return _p(o);
  }, [o]);
  return v.createElement(Ap, { styles: Op(a, !t, o, n ? "" : "!important") });
}, xa = !1;
if (typeof window < "u")
  try {
    var qr = Object.defineProperty({}, "passive", {
      get: function() {
        return xa = !0, !0;
      }
    });
    window.addEventListener("test", qr, qr), window.removeEventListener("test", qr, qr);
  } catch {
    xa = !1;
  }
var In = xa ? { passive: !1 } : !1, Mp = function(e) {
  return e.tagName === "TEXTAREA";
}, Wl = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Mp(e) && n[t] === "visible")
  );
}, Bp = function(e) {
  return Wl(e, "overflowY");
}, Ip = function(e) {
  return Wl(e, "overflowX");
}, Ds = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = $l(e, r);
    if (o) {
      var a = Hl(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Lp = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Wp = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, $l = function(e, t) {
  return e === "v" ? Bp(t) : Ip(t);
}, Hl = function(e, t) {
  return e === "v" ? Lp(t) : Wp(t);
}, $p = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Hp = function(e, t, n, r, o) {
  var a = $p(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, l = t.contains(s), c = !1, d = i > 0, h = 0, f = 0;
  do {
    var m = Hl(e, s), p = m[0], g = m[1], D = m[2], y = g - D - a * p;
    (p || y) && $l(e, s) && (h += y, f += p), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (d && (Math.abs(h) < 1 || !o) || !d && (Math.abs(f) < 1 || !o)) && (c = !0), c;
}, Gr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ys = function(e) {
  return [e.deltaX, e.deltaY];
}, bs = function(e) {
  return e && "current" in e ? e.current : e;
}, Vp = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Yp = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, zp = 0, Ln = [];
function Up(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(zp++)[0], a = v.useState(Ll)[0], i = v.useRef(e);
  v.useEffect(function() {
    i.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = hp([e.lockRef.current], (e.shards || []).map(bs), !0).filter(Boolean);
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
    var y = Gr(g), b = n.current, w = "deltaX" in g ? g.deltaX : b[0] - y[0], C = "deltaY" in g ? g.deltaY : b[1] - y[1], E, F = g.target, S = Math.abs(w) > Math.abs(C) ? "h" : "v";
    if ("touches" in g && S === "h" && F.type === "range")
      return !1;
    var _ = Ds(S, F);
    if (!_)
      return !0;
    if (_ ? E = S : (E = S === "v" ? "h" : "v", _ = Ds(S, F)), !_)
      return !1;
    if (!r.current && "changedTouches" in g && (w || C) && (r.current = E), !E)
      return !0;
    var N = r.current || E;
    return Hp(N, D, g, N === "h" ? w : C, !0);
  }, []), l = v.useCallback(function(g) {
    var D = g;
    if (!(!Ln.length || Ln[Ln.length - 1] !== a)) {
      var y = "deltaY" in D ? ys(D) : Gr(D), b = t.current.filter(function(E) {
        return E.name === D.type && (E.target === D.target || D.target === E.shadowParent) && Vp(E.delta, y);
      })[0];
      if (b && b.should) {
        D.cancelable && D.preventDefault();
        return;
      }
      if (!b) {
        var w = (i.current.shards || []).map(bs).filter(Boolean).filter(function(E) {
          return E.contains(D.target);
        }), C = w.length > 0 ? s(D, w[0]) : !i.current.noIsolation;
        C && D.cancelable && D.preventDefault();
      }
    }
  }, []), c = v.useCallback(function(g, D, y, b) {
    var w = { name: g, delta: D, target: y, should: b, shadowParent: qp(y) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== w;
      });
    }, 1);
  }, []), d = v.useCallback(function(g) {
    n.current = Gr(g), r.current = void 0;
  }, []), h = v.useCallback(function(g) {
    c(g.type, ys(g), g.target, s(g, e.lockRef.current));
  }, []), f = v.useCallback(function(g) {
    c(g.type, Gr(g), g.target, s(g, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return Ln.push(a), e.setCallbacks({
      onScrollCapture: h,
      onWheelCapture: h,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, In), document.addEventListener("touchmove", l, In), document.addEventListener("touchstart", d, In), function() {
      Ln = Ln.filter(function(g) {
        return g !== a;
      }), document.removeEventListener("wheel", l, In), document.removeEventListener("touchmove", l, In), document.removeEventListener("touchstart", d, In);
    };
  }, []);
  var m = e.removeScrollBar, p = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    p ? v.createElement(a, { styles: Yp(o) }) : null,
    m ? v.createElement(Tp, { gapMode: e.gapMode }) : null
  );
}
function qp(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Gp = xp(Il, Up);
var Eo = v.forwardRef(function(e, t) {
  return v.createElement(Co, gt({}, e, { ref: t, sideCar: Gp }));
});
Eo.classNames = Co.classNames;
var Xp = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Wn = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Kr = {}, Qo = 0, Vl = function(e) {
  return e && (e.host || Vl(e.parentNode));
}, Kp = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Vl(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Jp = function(e, t, n, r) {
  var o = Kp(t, Array.isArray(e) ? e : [e]);
  Kr[n] || (Kr[n] = /* @__PURE__ */ new WeakMap());
  var a = Kr[n], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(h) {
    !h || s.has(h) || (s.add(h), c(h.parentNode));
  };
  o.forEach(c);
  var d = function(h) {
    !h || l.has(h) || Array.prototype.forEach.call(h.children, function(f) {
      if (s.has(f))
        d(f);
      else
        try {
          var m = f.getAttribute(r), p = m !== null && m !== "false", g = (Wn.get(f) || 0) + 1, D = (a.get(f) || 0) + 1;
          Wn.set(f, g), a.set(f, D), i.push(f), g === 1 && p && Xr.set(f, !0), D === 1 && f.setAttribute(n, "true"), p || f.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", f, y);
        }
    });
  };
  return d(t), s.clear(), Qo++, function() {
    i.forEach(function(h) {
      var f = Wn.get(h) - 1, m = a.get(h) - 1;
      Wn.set(h, f), a.set(h, m), f || (Xr.has(h) || h.removeAttribute(r), Xr.delete(h)), m || h.removeAttribute(n);
    }), Qo--, Qo || (Wn = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Kr = {});
  };
}, Ka = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Xp(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Jp(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ja = "Dialog", [Yl, DC] = Qt(Ja), [Qp, ht] = Yl(Ja), zl = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = v.useRef(null), l = v.useRef(null), [c = !1, d] = Xn({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ u.jsx(
    Qp,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: yn(),
      titleId: yn(),
      descriptionId: yn(),
      open: c,
      onOpenChange: d,
      onOpenToggle: v.useCallback(() => d((h) => !h), [d]),
      modal: i,
      children: n
    }
  );
};
zl.displayName = Ja;
var Ul = "DialogTrigger", ql = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ht(Ul, n), a = le(t, o.triggerRef);
    return /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ei(o.open),
        ...r,
        ref: a,
        onClick: ee(e.onClick, o.onOpenToggle)
      }
    );
  }
);
ql.displayName = Ul;
var Qa = "DialogPortal", [Zp, Gl] = Yl(Qa, {
  forceMount: void 0
}), Xl = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = ht(Qa, t);
  return /* @__PURE__ */ u.jsx(Zp, { scope: t, forceMount: n, children: v.Children.map(r, (i) => /* @__PURE__ */ u.jsx(ft, { present: n || a.open, children: /* @__PURE__ */ u.jsx(xo, { asChild: !0, container: o, children: i }) })) });
};
Xl.displayName = Qa;
var uo = "DialogOverlay", Kl = v.forwardRef(
  (e, t) => {
    const n = Gl(uo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ht(uo, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ u.jsx(ft, { present: r || a.open, children: /* @__PURE__ */ u.jsx(eg, { ...o, ref: t }) }) : null;
  }
);
Kl.displayName = uo;
var eg = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ht(uo, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(Eo, { as: Gt, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ u.jsx(
        ne.div,
        {
          "data-state": ei(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Cn = "DialogContent", Jl = v.forwardRef(
  (e, t) => {
    const n = Gl(Cn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ht(Cn, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(ft, { present: r || a.open, children: a.modal ? /* @__PURE__ */ u.jsx(tg, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(ng, { ...o, ref: t }) });
  }
);
Jl.displayName = Cn;
var tg = v.forwardRef(
  (e, t) => {
    const n = ht(Cn, e.__scopeDialog), r = v.useRef(null), o = le(t, n.contentRef, r);
    return v.useEffect(() => {
      const a = r.current;
      if (a) return Ka(a);
    }, []), /* @__PURE__ */ u.jsx(
      Ql,
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
), ng = v.forwardRef(
  (e, t) => {
    const n = ht(Cn, e.__scopeDialog), r = v.useRef(!1), o = v.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      Ql,
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
), Ql = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = ht(Cn, n), l = v.useRef(null), c = le(t, l);
    return Xa(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        wo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ u.jsx(
            bo,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": ei(s.open),
              ...i,
              ref: c,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(rg, { titleId: s.titleId }),
        /* @__PURE__ */ u.jsx(ag, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Za = "DialogTitle", Zl = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ht(Za, n);
    return /* @__PURE__ */ u.jsx(ne.h2, { id: o.titleId, ...r, ref: t });
  }
);
Zl.displayName = Za;
var eu = "DialogDescription", tu = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ht(eu, n);
    return /* @__PURE__ */ u.jsx(ne.p, { id: o.descriptionId, ...r, ref: t });
  }
);
tu.displayName = eu;
var nu = "DialogClose", ru = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ht(nu, n);
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
ru.displayName = nu;
function ei(e) {
  return e ? "open" : "closed";
}
var ou = "DialogTitleWarning", [yC, au] = $m(ou, {
  contentName: Cn,
  titleName: Za,
  docsSlug: "dialog"
}), rg = ({ titleId: e }) => {
  const t = au(ou), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return v.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, og = "DialogDescriptionWarning", ag = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${au(og).contentName}}.`;
  return v.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, iu = zl, su = ql, lu = Xl, ti = Kl, ni = Jl, ri = Zl, oi = tu, ig = ru;
function sg(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const uu = M.createContext({
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
}), Fo = () => {
  const e = M.useContext(uu);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
sg("[vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left]{overflow-x:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]::after{content:'';position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-handle]{display:block;position:relative;opacity:.8;margin-left:auto;margin-right:auto;height:5px;width:56px;border-radius:1rem;touch-action:pan-y;cursor:grab}[vaul-handle]:active,[vaul-handle]:hover{opacity:1}[vaul-handle]:active{cursor:grabbing}[vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible=false]){opacity:1}@media (hover:hover) and (pointer:fine){[vaul-drawer]{user-select:none}}@media (pointer:fine){[vaul-handle-hitarea]:{width:100%;height:100%}}");
const lg = typeof window < "u" ? $a : kt;
function Ca(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function ug() {
  return ai(/^Mac/);
}
function cg() {
  return ai(/^iPhone/);
}
function dg() {
  return ai(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  ug() && navigator.maxTouchPoints > 1;
}
function cu() {
  return cg() || dg();
}
function ai(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const Zo = typeof document < "u" && window.visualViewport;
function ws(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function du(e) {
  for (ws(e) && (e = e.parentElement); e && !ws(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const fg = /* @__PURE__ */ new Set([
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
let Jr = 0, ea;
function hg(e = {}) {
  let { isDisabled: t } = e;
  lg(() => {
    if (!t)
      return Jr++, Jr === 1 && (cu() ? ea = pg() : ea = mg()), () => {
        Jr--, Jr === 0 && ea();
      };
  }, [
    t
  ]);
}
function mg() {
  return Ca(fu(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function pg() {
  let e, t = 0, n = (h) => {
    e = du(h.target), !(e === document.documentElement && e === document.body) && (t = h.changedTouches[0].pageY);
  }, r = (h) => {
    if (!e || e === document.documentElement || e === document.body) {
      h.preventDefault();
      return;
    }
    let f = h.changedTouches[0].pageY, m = e.scrollTop, p = e.scrollHeight - e.clientHeight;
    p !== 0 && ((m <= 0 && f > t || m >= p && f < t) && h.preventDefault(), t = f);
  }, o = (h) => {
    let f = h.target;
    Ea(f) && f !== document.activeElement && (h.preventDefault(), f.style.transform = "translateY(-2000px)", f.focus(), requestAnimationFrame(() => {
      f.style.transform = "";
    }));
  }, a = (h) => {
    let f = h.target;
    Ea(f) && (f.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      f.style.transform = "", Zo && (Zo.height < window.innerHeight ? requestAnimationFrame(() => {
        xs(f);
      }) : Zo.addEventListener("resize", () => xs(f), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, l = window.pageYOffset, c = Ca(fu(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let d = Ca(gr(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), gr(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), gr(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), gr(document, "focus", a, !0), gr(window, "scroll", i));
  return () => {
    c(), d(), window.scrollTo(s, l);
  };
}
function fu(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function gr(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function xs(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = du(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const i = n.getBoundingClientRect().bottom;
      a > i && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function Ea(e) {
  return e instanceof HTMLInputElement && !fg.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function gg(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function vg(...e) {
  return (t) => e.forEach((n) => gg(n, t));
}
function hu(...e) {
  return v.useCallback(vg(...e), e);
}
let vr = null;
function Dg({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: a }) {
  const [i, s] = M.useState(() => typeof window < "u" ? window.location.href : ""), l = M.useRef(0), c = M.useCallback(() => {
    if (vr === null && e && !a) {
      vr = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: h, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-l.current}px`,
        left: `${-h}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const m = f - window.innerHeight;
        m && l.current >= f && (document.body.style.top = `${-(l.current + m)}px`);
      }), 300);
    }
  }, [
    e
  ]), d = M.useCallback(() => {
    if (vr !== null && !a) {
      const h = -parseInt(document.body.style.top, 10), f = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, vr), window.requestAnimationFrame(() => {
        if (o && i !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(f, h);
      }), vr = null;
    }
  }, [
    i
  ]);
  return M.useEffect(() => {
    function h() {
      l.current = window.scrollY;
    }
    return h(), window.addEventListener("scroll", h), () => {
      window.removeEventListener("scroll", h);
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
const mu = /* @__PURE__ */ new WeakMap();
function be(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && mu.set(e, r);
}
function Qr(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = mu.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
const ke = (e) => {
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
function Zr(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[ke(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[ke(t) ? 5 : 4]) : null);
}
function yg(e) {
  return 8 * (Math.log(e + 1) - 2);
}
const ge = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, pu = 0.4;
function gu(e) {
  const t = M.useRef(e);
  return M.useEffect(() => {
    t.current = e;
  }), M.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function bg({ defaultProp: e, onChange: t }) {
  const n = M.useState(e), [r] = n, o = M.useRef(r), a = gu(t);
  return M.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function wg({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = bg({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : r, s = gu(n), l = M.useCallback((c) => {
    if (a) {
      const h = typeof c == "function" ? c(e) : c;
      h !== e && s(h);
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
function xg({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: i, direction: s = "bottom" }) {
  const [l, c] = wg({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), d = M.useMemo(() => l === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    l
  ]), h = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === l || !n, f = M.useMemo(() => n == null ? void 0 : n.findIndex((w) => w === l), [
    n,
    l
  ]), m = M.useMemo(() => {
    var w;
    return (w = n == null ? void 0 : n.map((C) => {
      const E = typeof window < "u", F = typeof C == "string";
      let S = 0;
      if (F && (S = parseInt(C, 10)), ke(s)) {
        const N = F ? S : E ? C * window.innerHeight : 0;
        return E ? s === "bottom" ? window.innerHeight - N : -window.innerHeight + N : N;
      }
      const _ = F ? S : E ? C * window.innerWidth : 0;
      return E ? s === "right" ? window.innerWidth - _ : -window.innerWidth + _ : _;
    })) != null ? w : [];
  }, [
    n
  ]), p = M.useMemo(() => f !== null ? m == null ? void 0 : m[f] : null, [
    m,
    f
  ]), g = M.useCallback((w) => {
    var C;
    const E = (C = m == null ? void 0 : m.findIndex((F) => F === w)) != null ? C : null;
    i(E), be(r.current, {
      transition: `transform ${ge.DURATION}s cubic-bezier(${ge.EASE.join(",")})`,
      transform: ke(s) ? `translate3d(0, ${w}px, 0)` : `translate3d(${w}px, 0, 0)`
    }), m && E !== m.length - 1 && E !== a ? be(o.current, {
      transition: `opacity ${ge.DURATION}s cubic-bezier(${ge.EASE.join(",")})`,
      opacity: "0"
    }) : be(o.current, {
      transition: `opacity ${ge.DURATION}s cubic-bezier(${ge.EASE.join(",")})`,
      opacity: "1"
    }), c(E !== null ? n == null ? void 0 : n[E] : null);
  }, [
    r.current,
    n,
    m,
    a,
    o,
    c
  ]);
  M.useEffect(() => {
    if (l || e) {
      var w;
      const C = (w = n == null ? void 0 : n.findIndex((E) => E === e || E === l)) != null ? w : -1;
      m && C !== -1 && typeof m[C] == "number" && g(m[C]);
    }
  }, [
    l,
    e,
    n,
    m,
    g
  ]);
  function D({ draggedDistance: w, closeDrawer: C, velocity: E, dismissible: F }) {
    if (a === void 0) return;
    const S = s === "bottom" || s === "right" ? (p ?? 0) - w : (p ?? 0) + w, _ = f === a - 1, N = f === 0, j = w > 0;
    if (_ && be(o.current, {
      transition: `opacity ${ge.DURATION}s cubic-bezier(${ge.EASE.join(",")})`
    }), E > 2 && !j) {
      F ? C() : g(m[0]);
      return;
    }
    if (E > 2 && j && m && n) {
      g(m[n.length - 1]);
      return;
    }
    const B = m == null ? void 0 : m.reduce((T, L) => typeof T != "number" || typeof L != "number" ? T : Math.abs(L - S) < Math.abs(T - S) ? L : T), P = ke(s) ? window.innerHeight : window.innerWidth;
    if (E > pu && Math.abs(w) < P * 0.4) {
      const T = j ? 1 : -1;
      if (T > 0 && d) {
        g(m[n.length - 1]);
        return;
      }
      if (N && T < 0 && F && C(), f === null) return;
      g(m[f + T]);
      return;
    }
    g(B);
  }
  function y({ draggedDistance: w }) {
    if (p === null) return;
    const C = s === "bottom" || s === "right" ? p - w : p + w;
    (s === "bottom" || s === "right") && C < m[m.length - 1] || (s === "top" || s === "left") && C > m[m.length - 1] || be(r.current, {
      transform: ke(s) ? `translate3d(0, ${C}px, 0)` : `translate3d(${C}px, 0, 0)`
    });
  }
  function b(w, C) {
    if (!n || typeof f != "number" || !m || a === void 0) return null;
    const E = f === a - 1;
    if (f >= a && C)
      return 0;
    if (E && !C) return 1;
    if (!h && !E) return null;
    const S = E ? f + 1 : f - 1, _ = E ? m[S] - m[S - 1] : m[S + 1] - m[S], N = w / Math.abs(_);
    return E ? 1 - N : N;
  }
  return {
    isLastSnapPoint: d,
    activeSnapPoint: l,
    shouldFade: h,
    getPercentageDragged: b,
    setActiveSnapPoint: c,
    activeSnapPointIndex: f,
    onRelease: D,
    onDrag: y,
    snapPointsOffset: m
  };
}
const Cg = 0.25, Eg = 100, Cs = 8, dn = 16, Es = 26, ta = "vaul-dragging";
function vu({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: i, nested: s = !1, setBackgroundColorOnScale: l = !0, closeThreshold: c = Cg, scrollLockTimeout: d = Eg, dismissible: h = !0, handleOnly: f = !1, fadeFromIndex: m = i && i.length - 1, activeSnapPoint: p, setActiveSnapPoint: g, fixed: D, modal: y = !0, onClose: b, noBodyStyles: w, direction: C = "bottom", preventScrollRestoration: E = !0, disablePreventScroll: F = !1 }) {
  var S;
  const [_ = !1, N] = M.useState(!1), [j, B] = M.useState(!1), [P, T] = M.useState(!1), [L, W] = M.useState(!1), [H, k] = M.useState(!1), [O, J] = M.useState(!1), fe = M.useRef(null), se = M.useRef(null), xe = M.useRef(null), Ve = M.useRef(null), _e = M.useRef(null), Te = M.useRef(!1), Fe = M.useRef(null), $ = M.useRef(0), Z = M.useRef(!1), ve = M.useRef(0), R = M.useRef(null), oe = M.useRef(((S = R.current) == null ? void 0 : S.getBoundingClientRect().height) || 0), te = M.useRef(0), Pe = M.useCallback((V) => {
    i && V === nt.length - 1 && (se.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: Me, activeSnapPointIndex: Ae, setActiveSnapPoint: Be, onRelease: tt, snapPointsOffset: nt, onDrag: Ke, shouldFade: An, getPercentageDragged: sr } = xg({
    snapPoints: i,
    activeSnapPointProp: p,
    setActiveSnapPointProp: g,
    drawerRef: R,
    fadeFromIndex: m,
    overlayRef: fe,
    onSnapPointChange: Pe,
    direction: C
  });
  hg({
    isDisabled: !_ || H || !y || O || !j || F
  });
  const { restorePositionSetting: rn } = Dg({
    isOpen: _,
    modal: y,
    nested: s,
    hasBeenOpened: j,
    preventScrollRestoration: E,
    noBodyStyles: w
  });
  function mt() {
    return (window.innerWidth - Es) / window.innerWidth;
  }
  function lr(V) {
    var U;
    !h && !i || R.current && !R.current.contains(V.target) || (oe.current = ((U = R.current) == null ? void 0 : U.getBoundingClientRect().height) || 0, k(!0), xe.current = /* @__PURE__ */ new Date(), cu() && window.addEventListener("touchend", () => Te.current = !1, {
      once: !0
    }), V.target.setPointerCapture(V.pointerId), $.current = ke(C) ? V.clientY : V.clientX);
  }
  function on(V, U) {
    var he;
    let G = V;
    const me = (he = window.getSelection()) == null ? void 0 : he.toString(), q = R.current ? Zr(R.current, C) : null, ue = /* @__PURE__ */ new Date();
    if (G.hasAttribute("data-vaul-no-drag") || G.closest("[data-vaul-no-drag]"))
      return !1;
    if (C === "right" || C === "left")
      return !0;
    if (se.current && ue.getTime() - se.current.getTime() < 500)
      return !1;
    if (q !== null && (C === "bottom" ? q > 0 : q < 0))
      return !0;
    if (me && me.length > 0)
      return !1;
    if (_e.current && ue.getTime() - _e.current.getTime() < d && q === 0 || U)
      return _e.current = ue, !1;
    for (; G; ) {
      if (G.scrollHeight > G.clientHeight) {
        if (G.scrollTop !== 0)
          return _e.current = /* @__PURE__ */ new Date(), !1;
        if (G.getAttribute("role") === "dialog")
          return !0;
      }
      G = G.parentNode;
    }
    return !0;
  }
  function On(V) {
    if (R.current && H) {
      const U = C === "bottom" || C === "right" ? 1 : -1, he = ($.current - (ke(C) ? V.clientY : V.clientX)) * U, G = he > 0, me = i && !h && !G;
      if (me && Ae === 0) return;
      const q = Math.abs(he), ue = document.querySelector("[vaul-drawer-wrapper]");
      let Ne = q / oe.current;
      const Ce = sr(q, G);
      if (Ce !== null && (Ne = Ce), me && Ne >= 1 || !Te.current && !on(V.target, G)) return;
      if (R.current.classList.add(ta), Te.current = !0, be(R.current, {
        transition: "none"
      }), be(fe.current, {
        transition: "none"
      }), i && Ke({
        draggedDistance: he
      }), G && !i) {
        const Ee = yg(he), st = Math.min(Ee * -1, 0) * U;
        be(R.current, {
          transform: ke(C) ? `translate3d(0, ${st}px, 0)` : `translate3d(${st}px, 0, 0)`
        });
        return;
      }
      const Ie = 1 - Ne;
      if ((An || m && Ae === m - 1) && (o == null || o(V, Ne), be(fe.current, {
        opacity: `${Ie}`,
        transition: "none"
      }, !0)), ue && fe.current && r) {
        const Ee = Math.min(mt() + Ne * (1 - mt()), 1), st = 8 - Ne * 8, Tn = Math.max(0, 14 - Ne * 14);
        be(ue, {
          borderRadius: `${st}px`,
          transform: ke(C) ? `scale(${Ee}) translate3d(0, ${Tn}px, 0)` : `scale(${Ee}) translate3d(${Tn}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!i) {
        const Ee = q * U;
        be(R.current, {
          transform: ke(C) ? `translate3d(0, ${Ee}px, 0)` : `translate3d(${Ee}px, 0, 0)`
        });
      }
    }
  }
  M.useEffect(() => () => {
    rt(!1), rn();
  }, []), M.useEffect(() => {
    var V;
    function U() {
      if (!R.current) return;
      const he = document.activeElement;
      if (Ea(he) || Z.current) {
        var G;
        const me = ((G = window.visualViewport) == null ? void 0 : G.height) || 0;
        let q = window.innerHeight - me;
        const ue = R.current.getBoundingClientRect().height || 0;
        te.current || (te.current = ue);
        const Ne = R.current.getBoundingClientRect().top;
        if (Math.abs(ve.current - q) > 60 && (Z.current = !Z.current), i && i.length > 0 && nt && Ae) {
          const Ce = nt[Ae] || 0;
          q += Ce;
        }
        if (ve.current = q, ue > me || Z.current) {
          const Ce = R.current.getBoundingClientRect().height;
          let Ie = Ce;
          Ce > me && (Ie = me - Es), D ? R.current.style.height = `${Ce - Math.max(q, 0)}px` : R.current.style.height = `${Math.max(Ie, me - Ne)}px`;
        } else
          R.current.style.height = `${te.current}px`;
        i && i.length > 0 && !Z.current ? R.current.style.bottom = "0px" : R.current.style.bottom = `${Math.max(q, 0)}px`;
      }
    }
    return (V = window.visualViewport) == null || V.addEventListener("resize", U), () => {
      var he;
      return (he = window.visualViewport) == null ? void 0 : he.removeEventListener("resize", U);
    };
  }, [
    Ae,
    i,
    nt
  ]);
  function Ye() {
    R.current && (an(), b == null || b(), be(R.current, {
      transform: ke(C) ? `translate3d(0, ${C === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${C === "right" ? "100%" : "-100%"}, 0, 0)`,
      transition: `transform ${ge.DURATION}s cubic-bezier(${ge.EASE.join(",")})`
    }), be(fe.current, {
      opacity: "0",
      transition: `opacity ${ge.DURATION}s cubic-bezier(${ge.EASE.join(",")})`
    }), rt(!1), setTimeout(() => {
      T(!1), N(!1);
    }, 300), setTimeout(() => {
      i && Be(i[0]);
    }, ge.DURATION * 1e3));
  }
  M.useEffect(() => {
    if (!_ && r) {
      const V = setTimeout(() => {
        Qr(document.body);
      }, 200);
      return () => clearTimeout(V);
    }
  }, [
    _,
    r
  ]), M.useLayoutEffect(() => {
    e ? (N(!0), B(!0)) : Ye();
  }, [
    e
  ]), M.useEffect(() => {
    L && (t == null || t(_));
  }, [
    _
  ]), M.useEffect(() => {
    W(!0);
  }, []);
  function Rn() {
    if (!R.current) return;
    const V = document.querySelector("[vaul-drawer-wrapper]"), U = Zr(R.current, C);
    be(R.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${ge.DURATION}s cubic-bezier(${ge.EASE.join(",")})`
    }), be(fe.current, {
      transition: `opacity ${ge.DURATION}s cubic-bezier(${ge.EASE.join(",")})`,
      opacity: "1"
    }), r && U && U > 0 && _ && be(V, {
      borderRadius: `${Cs}px`,
      overflow: "hidden",
      ...ke(C) ? {
        transform: `scale(${mt()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${mt()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${ge.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${ge.EASE.join(",")})`
    }, !0);
  }
  function an() {
    !H || !R.current || (R.current.classList.remove(ta), Te.current = !1, k(!1), Ve.current = /* @__PURE__ */ new Date());
  }
  function sn(V) {
    if (!H || !R.current) return;
    R.current.classList.remove(ta), Te.current = !1, k(!1), Ve.current = /* @__PURE__ */ new Date();
    const U = Zr(R.current, C);
    if (!on(V.target, !1) || !U || Number.isNaN(U) || xe.current === null) return;
    const he = Ve.current.getTime() - xe.current.getTime(), G = $.current - (ke(C) ? V.clientY : V.clientX), me = Math.abs(G) / he;
    if (me > 0.05 && (J(!0), setTimeout(() => {
      J(!1);
    }, 200)), i) {
      tt({
        draggedDistance: G * (C === "bottom" || C === "right" ? 1 : -1),
        closeDrawer: Ye,
        velocity: me,
        dismissible: h
      }), a == null || a(V, !0);
      return;
    }
    if (C === "bottom" || C === "right" ? G > 0 : G < 0) {
      Rn(), a == null || a(V, !0);
      return;
    }
    if (me > pu) {
      Ye(), a == null || a(V, !1);
      return;
    }
    var q;
    const ue = Math.min((q = R.current.getBoundingClientRect().height) != null ? q : 0, window.innerHeight);
    if (U >= ue * c) {
      Ye(), a == null || a(V, !1);
      return;
    }
    a == null || a(V, !0), Rn();
  }
  M.useEffect(() => {
    _ && (be(document.documentElement, {
      scrollBehavior: "auto"
    }), se.current = /* @__PURE__ */ new Date(), rt(!0));
  }, [
    _
  ]), M.useEffect(() => {
    if (R.current && P) {
      var V;
      const U = R == null || (V = R.current) == null ? void 0 : V.querySelectorAll("*");
      U == null || U.forEach((he) => {
        const G = he;
        (G.scrollHeight > G.clientHeight || G.scrollWidth > G.clientWidth) && G.classList.add("vaul-scrollable");
      });
    }
  }, [
    P
  ]);
  function rt(V) {
    const U = document.querySelector("[vaul-drawer-wrapper]");
    !U || !r || (V ? (l && (w || (be(document.body, {
      background: document.body.style.backgroundColor || document.body.style.background
    }), be(document.body, {
      background: "black"
    }, !0))), be(U, {
      borderRadius: `${Cs}px`,
      overflow: "hidden",
      ...ke(C) ? {
        transform: `scale(${mt()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${mt()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${ge.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${ge.EASE.join(",")})`
    })) : (Qr(U, "overflow"), Qr(U, "transform"), Qr(U, "borderRadius"), be(U, {
      transitionProperty: "transform, border-radius",
      transitionDuration: `${ge.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${ge.EASE.join(",")})`
    })));
  }
  function Ht(V) {
    const U = V ? (window.innerWidth - dn) / window.innerWidth : 1, he = V ? -dn : 0;
    Fe.current && window.clearTimeout(Fe.current), be(R.current, {
      transition: `transform ${ge.DURATION}s cubic-bezier(${ge.EASE.join(",")})`,
      transform: `scale(${U}) translate3d(0, ${he}px, 0)`
    }), !V && R.current && (Fe.current = setTimeout(() => {
      const G = Zr(R.current, C);
      be(R.current, {
        transition: "none",
        transform: ke(C) ? `translate3d(0, ${G}px, 0)` : `translate3d(${G}px, 0, 0)`
      });
    }, 500));
  }
  function ln(V, U) {
    if (U < 0) return;
    const he = ke(C) ? window.innerHeight : window.innerWidth, G = (he - dn) / he, me = G + U * (1 - G), q = -dn + U * dn;
    be(R.current, {
      transform: ke(C) ? `scale(${me}) translate3d(0, ${q}px, 0)` : `scale(${me}) translate3d(${q}px, 0, 0)`,
      transition: "none"
    });
  }
  function un(V, U) {
    const he = ke(C) ? window.innerHeight : window.innerWidth, G = U ? (he - dn) / he : 1, me = U ? -dn : 0;
    U && be(R.current, {
      transition: `transform ${ge.DURATION}s cubic-bezier(${ge.EASE.join(",")})`,
      transform: ke(C) ? `scale(${G}) translate3d(0, ${me}px, 0)` : `scale(${G}) translate3d(${me}px, 0, 0)`
    });
  }
  return /* @__PURE__ */ M.createElement(iu, {
    modal: y,
    onOpenChange: (V) => {
      if (e !== void 0) {
        t == null || t(V);
        return;
      }
      V ? (B(!0), N(V)) : Ye();
    },
    open: _
  }, /* @__PURE__ */ M.createElement(uu.Provider, {
    value: {
      visible: P,
      activeSnapPoint: Me,
      snapPoints: i,
      setActiveSnapPoint: Be,
      drawerRef: R,
      overlayRef: fe,
      scaleBackground: rt,
      onOpenChange: t,
      onPress: lr,
      setVisible: T,
      onRelease: sn,
      onDrag: On,
      dismissible: h,
      handleOnly: f,
      isOpen: _,
      isDragging: H,
      shouldFade: An,
      closeDrawer: Ye,
      onNestedDrag: ln,
      onNestedOpenChange: Ht,
      onNestedRelease: un,
      keyboardIsOpen: Z,
      openProp: e,
      modal: y,
      snapPointsOffset: nt,
      direction: C
    }
  }, n));
}
const Fg = 250, Sg = 120, Du = /* @__PURE__ */ M.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { visible: o, closeDrawer: a, isDragging: i, snapPoints: s, activeSnapPoint: l, setActiveSnapPoint: c, dismissible: d, handleOnly: h, onPress: f, onDrag: m } = Fo(), p = M.useRef(null), g = M.useRef(!1);
  function D() {
    if (g.current) {
      w();
      return;
    }
    window.setTimeout(() => {
      y();
    }, Sg);
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
    p.current = window.setTimeout(() => {
      g.current = !0;
    }, Fg);
  }
  function w() {
    window.clearTimeout(p.current), g.current = !1;
  }
  return /* @__PURE__ */ M.createElement("div", {
    onClick: D,
    onDoubleClick: () => {
      g.current = !0, a();
    },
    onPointerCancel: w,
    onPointerDown: (C) => {
      h && f(C), b();
    },
    onPointerMove: (C) => {
      h && m(C);
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
Du.displayName = "Drawer.Handle";
const yu = /* @__PURE__ */ M.forwardRef(function({ children: e, ...t }, n) {
  const { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: i, isOpen: s, visible: l } = Fo(), c = hu(n, r), d = o && o.length > 0;
  return /* @__PURE__ */ M.createElement(ti, {
    onMouseUp: a,
    ref: c,
    "vaul-drawer-visible": l ? "true" : "false",
    "vaul-overlay": "",
    "vaul-snap-points": s && d ? "true" : "false",
    "vaul-snap-points-overlay": s && i ? "true" : "false",
    ...t
  });
});
yu.displayName = "Drawer.Overlay";
const bu = /* @__PURE__ */ M.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  const { drawerRef: i, onPress: s, onRelease: l, onDrag: c, dismissible: d, keyboardIsOpen: h, snapPointsOffset: f, visible: m, closeDrawer: p, modal: g, openProp: D, onOpenChange: y, setVisible: b, handleOnly: w, direction: C } = Fo(), E = hu(a, i), F = M.useRef(null), S = M.useRef(!1), _ = (N, j, B = 0) => {
    if (S.current) return !0;
    const P = Math.abs(N.y), T = Math.abs(N.x), L = T > P, W = [
      "bottom",
      "right"
    ].includes(j) ? 1 : -1;
    if (j === "left" || j === "right") {
      if (!(N.x * W < 0) && T >= 0 && T <= B)
        return L;
    } else if (!(N.y * W < 0) && P >= 0 && P <= B)
      return !L;
    return S.current = !0, !0;
  };
  return M.useEffect(() => {
    b(!0);
  }, []), /* @__PURE__ */ M.createElement(ni, {
    "vaul-drawer": "",
    "vaul-drawer-direction": C,
    "vaul-drawer-visible": m ? "true" : "false",
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
        var j;
        N.preventDefault(), (j = i.current) == null || j.focus();
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
      h.current && (h.current = !1), N.preventDefault(), y == null || y(!1), !(!d || D !== void 0) && p();
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
      const j = N.clientY - F.current.y, B = N.clientX - F.current.x, P = N.pointerType === "touch" ? 10 : 2;
      _({
        x: B,
        y: j
      }, C, P) ? c(N) : (Math.abs(B) > P || Math.abs(j) > P) && (F.current = null);
    },
    onPointerUp: (N) => {
      o.onPointerUp == null || o.onPointerUp.call(o, N), F.current = null, S.current = !1, l(N);
    }
  });
});
bu.displayName = "Drawer.Content";
function Ng({ onDrag: e, onOpenChange: t, ...n }) {
  const { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = Fo();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return /* @__PURE__ */ M.createElement(vu, {
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
const Rt = {
  Root: vu,
  NestedRoot: Ng,
  Content: bu,
  Handle: Du,
  Overlay: yu,
  Trigger: su,
  Portal: lu,
  Close: ig,
  Title: ri,
  Description: oi
}, wu = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ u.jsx(Rt.Root, { shouldScaleBackground: e, ...t });
wu.displayName = "Drawer";
const jg = Rt.Portal, xu = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Rt.Overlay,
  {
    ref: n,
    className: K("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
xu.displayName = Rt.Overlay.displayName;
const Cu = v.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(jg, { children: [
  /* @__PURE__ */ u.jsx(xu, {}),
  /* @__PURE__ */ u.jsxs(
    Rt.Content,
    {
      ref: r,
      className: K(
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
Cu.displayName = "DrawerContent";
const Eu = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: K("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
Eu.displayName = "DrawerHeader";
const Fu = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Rt.Title,
  {
    ref: n,
    className: K("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
Fu.displayName = Rt.Title.displayName;
const kg = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Rt.Description,
  {
    ref: n,
    className: K("text-sm text-muted-foreground", e),
    ...t
  }
));
kg.displayName = Rt.Description.displayName;
var Pg = v.createContext(void 0);
function Su(e) {
  const t = v.useContext(Pg);
  return e || t || "ltr";
}
function Fa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function _g(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var ii = "ScrollArea", [Nu, bC] = Qt(ii), [Ag, it] = Nu(ii), ju = v.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, l] = v.useState(null), [c, d] = v.useState(null), [h, f] = v.useState(null), [m, p] = v.useState(null), [g, D] = v.useState(null), [y, b] = v.useState(0), [w, C] = v.useState(0), [E, F] = v.useState(!1), [S, _] = v.useState(!1), N = le(t, (B) => l(B)), j = Su(o);
    return /* @__PURE__ */ u.jsx(
      Ag,
      {
        scope: n,
        type: r,
        dir: j,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: c,
        onViewportChange: d,
        content: h,
        onContentChange: f,
        scrollbarX: m,
        onScrollbarXChange: p,
        scrollbarXEnabled: E,
        onScrollbarXEnabledChange: F,
        scrollbarY: g,
        onScrollbarYChange: D,
        scrollbarYEnabled: S,
        onScrollbarYEnabledChange: _,
        onCornerWidthChange: b,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ u.jsx(
          ne.div,
          {
            dir: j,
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
ju.displayName = ii;
var ku = "ScrollAreaViewport", Pu = v.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, i = it(ku, n), s = v.useRef(null), l = le(t, s, i.onViewportChange);
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
Pu.displayName = ku;
var xt = "ScrollAreaScrollbar", si = v.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = it(xt, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return v.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ u.jsx(Og, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ u.jsx(Rg, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ u.jsx(_u, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ u.jsx(li, { ...r, ref: t }) : null;
  }
);
si.displayName = xt;
var Og = v.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = it(xt, e.__scopeScrollArea), [a, i] = v.useState(!1);
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
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ u.jsx(ft, { present: n || a, children: /* @__PURE__ */ u.jsx(
    _u,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), Rg = v.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = it(xt, e.__scopeScrollArea), a = e.orientation === "horizontal", i = No(() => l("SCROLL_END"), 100), [s, l] = _g("hidden", {
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
      let h = c[d];
      const f = () => {
        const m = c[d];
        h !== m && (l("SCROLL"), i()), h = m;
      };
      return c.addEventListener("scroll", f), () => c.removeEventListener("scroll", f);
    }
  }, [o.viewport, a, l, i]), /* @__PURE__ */ u.jsx(ft, { present: n || s !== "hidden", children: /* @__PURE__ */ u.jsx(
    li,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: ee(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: ee(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), _u = v.forwardRef((e, t) => {
  const n = it(xt, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, i] = v.useState(!1), s = e.orientation === "horizontal", l = No(() => {
    if (n.viewport) {
      const c = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(s ? c : d);
    }
  }, 10);
  return Kn(n.viewport, l), Kn(n.content, l), /* @__PURE__ */ u.jsx(ft, { present: r || a, children: /* @__PURE__ */ u.jsx(
    li,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), li = v.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = it(xt, e.__scopeScrollArea), a = v.useRef(null), i = v.useRef(0), [s, l] = v.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), c = Mu(s.viewport, s.content), d = {
    ...r,
    sizes: s,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (f) => a.current = f,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (f) => i.current = f
  };
  function h(f, m) {
    return Wg(f, i.current, s, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ u.jsx(
    Tg,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const f = o.viewport.scrollLeft, m = Fs(f, s, o.dir);
          a.current.style.transform = `translate3d(${m}px, 0, 0)`;
        }
      },
      onWheelScroll: (f) => {
        o.viewport && (o.viewport.scrollLeft = f);
      },
      onDragScroll: (f) => {
        o.viewport && (o.viewport.scrollLeft = h(f, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ u.jsx(
    Mg,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const f = o.viewport.scrollTop, m = Fs(f, s);
          a.current.style.transform = `translate3d(0, ${m}px, 0)`;
        }
      },
      onWheelScroll: (f) => {
        o.viewport && (o.viewport.scrollTop = f);
      },
      onDragScroll: (f) => {
        o.viewport && (o.viewport.scrollTop = h(f));
      }
    }
  ) : null;
}), Tg = v.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = it(xt, e.__scopeScrollArea), [i, s] = v.useState(), l = v.useRef(null), c = le(t, l, a.onScrollbarXChange);
  return v.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ u.jsx(
    Ou,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: c,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": So(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, h) => {
        if (a.viewport) {
          const f = a.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(f), Iu(f, h) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: fo(i.paddingLeft),
            paddingEnd: fo(i.paddingRight)
          }
        });
      }
    }
  );
}), Mg = v.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = it(xt, e.__scopeScrollArea), [i, s] = v.useState(), l = v.useRef(null), c = le(t, l, a.onScrollbarYChange);
  return v.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ u.jsx(
    Ou,
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
        "--radix-scroll-area-thumb-height": So(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, h) => {
        if (a.viewport) {
          const f = a.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(f), Iu(f, h) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: fo(i.paddingTop),
            paddingEnd: fo(i.paddingBottom)
          }
        });
      }
    }
  );
}), [Bg, Au] = Nu(xt), Ou = v.forwardRef((e, t) => {
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
    onResize: h,
    ...f
  } = e, m = it(xt, n), [p, g] = v.useState(null), D = le(t, (N) => g(N)), y = v.useRef(null), b = v.useRef(""), w = m.viewport, C = r.content - r.viewport, E = Le(d), F = Le(l), S = No(h, 10);
  function _(N) {
    if (y.current) {
      const j = N.clientX - y.current.left, B = N.clientY - y.current.top;
      c({ x: j, y: B });
    }
  }
  return v.useEffect(() => {
    const N = (j) => {
      const B = j.target;
      (p == null ? void 0 : p.contains(B)) && E(j, C);
    };
    return document.addEventListener("wheel", N, { passive: !1 }), () => document.removeEventListener("wheel", N, { passive: !1 });
  }, [w, p, C, E]), v.useEffect(F, [r, F]), Kn(p, S), Kn(m.content, S), /* @__PURE__ */ u.jsx(
    Bg,
    {
      scope: n,
      scrollbar: p,
      hasThumb: o,
      onThumbChange: Le(a),
      onThumbPointerUp: Le(i),
      onThumbPositionChange: F,
      onThumbPointerDown: Le(s),
      children: /* @__PURE__ */ u.jsx(
        ne.div,
        {
          ...f,
          ref: D,
          style: { position: "absolute", ...f.style },
          onPointerDown: ee(e.onPointerDown, (N) => {
            N.button === 0 && (N.target.setPointerCapture(N.pointerId), y.current = p.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), _(N));
          }),
          onPointerMove: ee(e.onPointerMove, _),
          onPointerUp: ee(e.onPointerUp, (N) => {
            const j = N.target;
            j.hasPointerCapture(N.pointerId) && j.releasePointerCapture(N.pointerId), document.body.style.webkitUserSelect = b.current, m.viewport && (m.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), co = "ScrollAreaThumb", Ru = v.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Au(co, e.__scopeScrollArea);
    return /* @__PURE__ */ u.jsx(ft, { present: n || o.hasThumb, children: /* @__PURE__ */ u.jsx(Ig, { ref: t, ...r }) });
  }
), Ig = v.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = it(co, n), i = Au(co, n), { onThumbPositionChange: s } = i, l = le(
      t,
      (h) => i.onThumbChange(h)
    ), c = v.useRef(), d = No(() => {
      c.current && (c.current(), c.current = void 0);
    }, 100);
    return v.useEffect(() => {
      const h = a.viewport;
      if (h) {
        const f = () => {
          if (d(), !c.current) {
            const m = $g(h, s);
            c.current = m, s();
          }
        };
        return s(), h.addEventListener("scroll", f), () => h.removeEventListener("scroll", f);
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
        onPointerDownCapture: ee(e.onPointerDownCapture, (h) => {
          const m = h.target.getBoundingClientRect(), p = h.clientX - m.left, g = h.clientY - m.top;
          i.onThumbPointerDown({ x: p, y: g });
        }),
        onPointerUp: ee(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
Ru.displayName = co;
var ui = "ScrollAreaCorner", Tu = v.forwardRef(
  (e, t) => {
    const n = it(ui, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ u.jsx(Lg, { ...e, ref: t }) : null;
  }
);
Tu.displayName = ui;
var Lg = v.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = it(ui, n), [a, i] = v.useState(0), [s, l] = v.useState(0), c = !!(a && s);
  return Kn(o.scrollbarX, () => {
    var h;
    const d = ((h = o.scrollbarX) == null ? void 0 : h.offsetHeight) || 0;
    o.onCornerHeightChange(d), l(d);
  }), Kn(o.scrollbarY, () => {
    var h;
    const d = ((h = o.scrollbarY) == null ? void 0 : h.offsetWidth) || 0;
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
function fo(e) {
  return e ? parseInt(e, 10) : 0;
}
function Mu(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function So(e) {
  const t = Mu(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Wg(e, t, n, r = "ltr") {
  const o = So(n), a = o / 2, i = t || a, s = o - i, l = n.scrollbar.paddingStart + i, c = n.scrollbar.size - n.scrollbar.paddingEnd - s, d = n.content - n.viewport, h = r === "ltr" ? [0, d] : [d * -1, 0];
  return Bu([l, c], h)(e);
}
function Fs(e, t, n = "ltr") {
  const r = So(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - r, l = n === "ltr" ? [0, i] : [i * -1, 0], c = Fa(e, l);
  return Bu([0, i], [0, s])(c);
}
function Bu(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Iu(e, t) {
  return e > 0 && e < t;
}
var $g = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== a.left, s = n.top !== a.top;
    (i || s) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function No(e, t) {
  const n = Le(e), r = v.useRef(0);
  return v.useEffect(() => () => window.clearTimeout(r.current), []), v.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Kn(e, t) {
  const n = Le(t);
  We(() => {
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
var Lu = ju, Hg = Pu, Vg = Tu;
const Yg = v.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  Lu,
  {
    ref: r,
    className: K("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx(Hg, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ u.jsx(Wu, {}),
      /* @__PURE__ */ u.jsx(Vg, {})
    ]
  }
));
Yg.displayName = Lu.displayName;
const Wu = v.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ u.jsx(
  si,
  {
    ref: r,
    orientation: t,
    className: K(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ u.jsx(Ru, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Wu.displayName = si.displayName;
function zg(e) {
  const [t, n] = v.useState(!1);
  return v.useEffect(() => {
    function r(a) {
      n(a.matches);
    }
    const o = matchMedia(e);
    return o.addEventListener("change", r), n(o.matches), () => o.removeEventListener("change", r);
  }, [e]), t;
}
var Ug = Object.create, jo = Object.defineProperty, qg = Object.getOwnPropertyDescriptor, Gg = Object.getOwnPropertyNames, Xg = Object.getPrototypeOf, Kg = Object.prototype.hasOwnProperty, $u = (e) => {
  throw TypeError(e);
}, Jg = (e, t) => () => (e && (t = e(e = 0)), t), Pr = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), ko = (e, t) => {
  for (var n in t) jo(e, n, { get: t[n], enumerable: !0 });
}, Hu = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of Gg(t)) !Kg.call(e, o) && o !== n && jo(e, o, { get: () => t[o], enumerable: !(r = qg(t, o)) || r.enumerable });
  return e;
}, _r = (e, t, n) => (n = e != null ? Ug(Xg(e)) : {}, Hu(jo(n, "default", { value: e, enumerable: !0 }), e)), Qg = (e) => Hu(jo({}, "__esModule", { value: !0 }), e), Zg = (e, t, n) => t.has(e) || $u("Cannot " + n), ev = (e, t, n) => t.has(e) ? $u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Dr = (e, t, n) => (Zg(e, t, "access private method"), n), tv = Pr((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t;
  function t() {
  }
  t.prototype = { diff: function(r, o) {
    var a, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = i.callback;
    typeof i == "function" && (s = i, i = {}), this.options = i;
    var l = this;
    function c(F) {
      return s ? (setTimeout(function() {
        s(void 0, F);
      }, 0), !0) : F;
    }
    r = this.castInput(r), o = this.castInput(o), r = this.removeEmpty(this.tokenize(r)), o = this.removeEmpty(this.tokenize(o));
    var d = o.length, h = r.length, f = 1, m = d + h;
    i.maxEditLength && (m = Math.min(m, i.maxEditLength));
    var p = (a = i.timeout) !== null && a !== void 0 ? a : 1 / 0, g = Date.now() + p, D = [{ oldPos: -1, lastComponent: void 0 }], y = this.extractCommon(D[0], o, r, 0);
    if (D[0].oldPos + 1 >= h && y + 1 >= d) return c([{ value: this.join(o), count: o.length }]);
    var b = -1 / 0, w = 1 / 0;
    function C() {
      for (var F = Math.max(b, -f); F <= Math.min(w, f); F += 2) {
        var S = void 0, _ = D[F - 1], N = D[F + 1];
        _ && (D[F - 1] = void 0);
        var j = !1;
        if (N) {
          var B = N.oldPos - F;
          j = N && 0 <= B && B < d;
        }
        var P = _ && _.oldPos + 1 < h;
        if (!j && !P) {
          D[F] = void 0;
          continue;
        }
        if (!P || j && _.oldPos + 1 < N.oldPos ? S = l.addToPath(N, !0, void 0, 0) : S = l.addToPath(_, void 0, !0, 1), y = l.extractCommon(S, o, r, F), S.oldPos + 1 >= h && y + 1 >= d) return c(n(l, S.lastComponent, o, r, l.useLongestToken));
        D[F] = S, S.oldPos + 1 >= h && (w = Math.min(w, F - 1)), y + 1 >= d && (b = Math.max(b, F + 1));
      }
      f++;
    }
    if (s) (function F() {
      setTimeout(function() {
        if (f > m || Date.now() > g) return s();
        C() || F();
      }, 0);
    })();
    else for (; f <= m && Date.now() <= g; ) {
      var E = C();
      if (E) return E;
    }
  }, addToPath: function(r, o, a, i) {
    var s = r.lastComponent;
    return s && s.added === o && s.removed === a ? { oldPos: r.oldPos + i, lastComponent: { count: s.count + 1, added: o, removed: a, previousComponent: s.previousComponent } } : { oldPos: r.oldPos + i, lastComponent: { count: 1, added: o, removed: a, previousComponent: s } };
  }, extractCommon: function(r, o, a, i) {
    for (var s = o.length, l = a.length, c = r.oldPos, d = c - i, h = 0; d + 1 < s && c + 1 < l && this.equals(o[d + 1], a[c + 1]); ) d++, c++, h++;
    return h && (r.lastComponent = { count: h, previousComponent: r.lastComponent }), r.oldPos = c, d;
  }, equals: function(r, o) {
    return this.options.comparator ? this.options.comparator(r, o) : r === o || this.options.ignoreCase && r.toLowerCase() === o.toLowerCase();
  }, removeEmpty: function(r) {
    for (var o = [], a = 0; a < r.length; a++) r[a] && o.push(r[a]);
    return o;
  }, castInput: function(r) {
    return r;
  }, tokenize: function(r) {
    return r.split("");
  }, join: function(r) {
    return r.join("");
  } };
  function n(r, o, a, i, s) {
    for (var l = [], c; o; ) l.push(o), c = o.previousComponent, delete o.previousComponent, o = c;
    l.reverse();
    for (var d = 0, h = l.length, f = 0, m = 0; d < h; d++) {
      var p = l[d];
      if (p.removed) {
        if (p.value = r.join(i.slice(m, m + p.count)), m += p.count, d && l[d - 1].added) {
          var g = l[d - 1];
          l[d - 1] = l[d], l[d] = g;
        }
      } else {
        if (!p.added && s) {
          var D = a.slice(f, f + p.count);
          D = D.map(function(b, w) {
            var C = i[m + w];
            return C.length > b.length ? C : b;
          }), p.value = r.join(D);
        } else p.value = r.join(a.slice(f, f + p.count));
        f += p.count, p.added || (m += p.count);
      }
    }
    var y = l[h - 1];
    return h > 1 && typeof y.value == "string" && (y.added || y.removed) && r.equals("", y.value) && (l[h - 2].value += y.value, l.pop()), l;
  }
}), nv = Pr((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.diffArrays = o, e.arrayDiff = void 0;
  var t = n(tv());
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var r = new t.default();
  e.arrayDiff = r, r.tokenize = function(a) {
    return a.slice();
  }, r.join = r.removeEmpty = function(a) {
    return a;
  };
  function o(a, i, s) {
    return r.diff(a, i, s);
  }
}), ci = Pr((e, t) => {
  var n = new Proxy(String, { get: () => n });
  t.exports = n;
}), Vu = {};
ko(Vu, { default: () => zu, shouldHighlight: () => Yu });
var Yu, zu, rv = Jg(() => {
  Yu = () => !1, zu = String;
}), ov = Pr((e, t) => {
  var n = String, r = function() {
    return { isColorSupported: !1, reset: n, bold: n, dim: n, italic: n, underline: n, inverse: n, hidden: n, strikethrough: n, black: n, red: n, green: n, yellow: n, blue: n, magenta: n, cyan: n, white: n, gray: n, bgBlack: n, bgRed: n, bgGreen: n, bgYellow: n, bgBlue: n, bgMagenta: n, bgCyan: n, bgWhite: n };
  };
  t.exports = r(), t.exports.createColors = r;
}), av = Pr((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.codeFrameColumns = m, e.default = p;
  var t = (rv(), Qg(Vu)), n = o(ov(), !0);
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
  var h = /\r\n|[\n\r\u2028\u2029]/;
  function f(g, D, y) {
    let b = Object.assign({ column: 0, line: -1 }, g.start), w = Object.assign({}, b, g.end), { linesAbove: C = 2, linesBelow: E = 3 } = y || {}, F = b.line, S = b.column, _ = w.line, N = w.column, j = Math.max(F - (C + 1), 0), B = Math.min(D.length, _ + E);
    F === -1 && (j = 0), _ === -1 && (B = D.length);
    let P = _ - F, T = {};
    if (P) for (let L = 0; L <= P; L++) {
      let W = L + F;
      if (!S) T[W] = !0;
      else if (L === 0) {
        let H = D[W - 1].length;
        T[W] = [S, H - S + 1];
      } else if (L === P) T[W] = [0, N];
      else {
        let H = D[W - L].length;
        T[W] = [0, H];
      }
    }
    else S === N ? S ? T[F] = [S, 0] : T[F] = !0 : T[F] = [S, N - S];
    return { start: j, end: B, markerLines: T };
  }
  function m(g, D, y = {}) {
    let b = (y.highlightCode || y.forceColor) && (0, t.shouldHighlight)(y), w = l(y.forceColor), C = d(w), E = (T, L) => b ? T(L) : L, F = g.split(h), { start: S, end: _, markerLines: N } = f(D, F, y), j = D.start && typeof D.start.column == "number", B = String(_).length, P = (b ? (0, t.default)(g, y) : g).split(h, _).slice(S, _).map((T, L) => {
      let W = S + 1 + L, H = ` ${` ${W}`.slice(-B)} |`, k = N[W], O = !N[W + 1];
      if (k) {
        let J = "";
        if (Array.isArray(k)) {
          let fe = T.slice(0, Math.max(k[0] - 1, 0)).replace(/[^\t]/g, " "), se = k[1] || 1;
          J = [`
 `, E(C.gutter, H.replace(/\d/g, " ")), " ", fe, E(C.marker, "^").repeat(se)].join(""), O && y.message && (J += " " + E(C.message, y.message));
        }
        return [E(C.marker, ">"), E(C.gutter, H), T.length > 0 ? ` ${T}` : "", J].join("");
      } else return ` ${E(C.gutter, H)}${T.length > 0 ? ` ${T}` : ""}`;
    }).join(`
`);
    return y.message && !j && (P = `${" ".repeat(B + 1)}${y.message}
${P}`), b ? w.reset(P) : P;
  }
  function p(g, D, y, b = {}) {
    if (!c) {
      c = !0;
      let w = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
      {
        let C = new Error(w);
        C.name = "DeprecationWarning", console.warn(new Error(w));
      }
    }
    return y = Math.max(y, 0), m(g, { start: { column: y, line: D } }, b);
  }
}), iv = {};
ko(iv, { __debug: () => ny, check: () => ey, doc: () => kc, format: () => Ac, formatWithCursor: () => _c, getSupportInfo: () => ty, util: () => Pc, version: () => P0 });
var sv = (e, t, n, r) => {
  if (!(e && t == null)) return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
}, Po = sv, lv = _r(nv());
function uv(e) {
  let t = e.indexOf("\r");
  return t >= 0 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
}
function di(e) {
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
function Uu(e, t) {
  let n;
  switch (t) {
    case `
`:
      n = /\n/g;
      break;
    case "\r":
      n = /\r/g;
      break;
    case `\r
`:
      n = /\r\n/g;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
  }
  let r = e.match(n);
  return r ? r.length : 0;
}
function cv(e) {
  return Po(!1, e, /\r\n?/g, `
`);
}
var kn = "string", Pt = "array", Pn = "cursor", Tt = "indent", Mt = "align", Bt = "trim", Xe = "group", Ct = "fill", Qe = "if-break", It = "indent-if-break", Lt = "line-suffix", Wt = "line-suffix-boundary", Re = "line", Et = "label", at = "break-parent", qu = /* @__PURE__ */ new Set([Pn, Tt, Mt, Bt, Xe, Ct, Qe, It, Lt, Wt, Re, Et, at]);
function dv(e) {
  if (typeof e == "string") return kn;
  if (Array.isArray(e)) return Pt;
  if (!e) return;
  let { type: t } = e;
  if (qu.has(t)) return t;
}
var _n = dv, fv = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function hv(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (_n(e)) throw new Error("doc is valid.");
  let n = Object.prototype.toString.call(e);
  if (n !== "[object Object]") return `Unexpected doc '${n}'.`;
  let r = fv([...qu].map((o) => `'${o}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
}
var mv = class extends Error {
  constructor(t) {
    super(hv(t));
    Vr(this, "name", "InvalidDocError");
    this.doc = t;
  }
}, Jn = mv, Ss = {};
function pv(e, t, n, r) {
  let o = [e];
  for (; o.length > 0; ) {
    let a = o.pop();
    if (a === Ss) {
      n(o.pop());
      continue;
    }
    n && o.push(a, Ss);
    let i = _n(a);
    if (!i) throw new Jn(a);
    if ((t == null ? void 0 : t(a)) !== !1) switch (i) {
      case Pt:
      case Ct: {
        let s = i === Pt ? a : a.parts;
        for (let l = s.length, c = l - 1; c >= 0; --c) o.push(s[c]);
        break;
      }
      case Qe:
        o.push(a.flatContents, a.breakContents);
        break;
      case Xe:
        if (r && a.expandedStates) for (let s = a.expandedStates.length, l = s - 1; l >= 0; --l) o.push(a.expandedStates[l]);
        else o.push(a.contents);
        break;
      case Mt:
      case Tt:
      case It:
      case Et:
      case Lt:
        o.push(a.contents);
        break;
      case kn:
      case Pn:
      case Bt:
      case Wt:
      case Re:
      case at:
        break;
      default:
        throw new Jn(a);
    }
  }
}
var fi = pv, gv = () => {
}, vv = gv;
function ho(e) {
  return { type: Tt, contents: e };
}
function Qn(e, t) {
  return { type: Mt, contents: t, n: e };
}
function Gu(e, t = {}) {
  return vv(t.expandedStates), { type: Xe, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function Dv(e) {
  return Qn(Number.NEGATIVE_INFINITY, e);
}
function yv(e) {
  return Qn({ type: "root" }, e);
}
function bv(e) {
  return Qn(-1, e);
}
function wv(e, t) {
  return Gu(e[0], { ...t, expandedStates: e });
}
function Xu(e) {
  return { type: Ct, parts: e };
}
function xv(e, t = "", n = {}) {
  return { type: Qe, breakContents: e, flatContents: t, groupId: n.groupId };
}
function Cv(e, t) {
  return { type: It, contents: e, groupId: t.groupId, negate: t.negate };
}
function Sa(e) {
  return { type: Lt, contents: e };
}
var Ev = { type: Wt }, _o = { type: at }, Fv = { type: Bt }, hi = { type: Re, hard: !0 }, Ku = { type: Re, hard: !0, literal: !0 }, Ju = { type: Re }, Sv = { type: Re, soft: !0 }, bn = [hi, _o], Qu = [Ku, _o], Na = { type: Pn };
function Zu(e, t) {
  let n = [];
  for (let r = 0; r < t.length; r++) r !== 0 && n.push(e), n.push(t[r]);
  return n;
}
function ec(e, t, n) {
  let r = e;
  if (t > 0) {
    for (let o = 0; o < Math.floor(t / n); ++o) r = ho(r);
    r = Qn(t % n, r), r = Qn(Number.NEGATIVE_INFINITY, r);
  }
  return r;
}
function Nv(e, t) {
  return e ? { type: Et, label: e, contents: t } : t;
}
function Nt(e) {
  var t;
  if (!e) return "";
  if (Array.isArray(e)) {
    let n = [];
    for (let r of e) if (Array.isArray(r)) n.push(...Nt(r));
    else {
      let o = Nt(r);
      o !== "" && n.push(o);
    }
    return n;
  }
  return e.type === Qe ? { ...e, breakContents: Nt(e.breakContents), flatContents: Nt(e.flatContents) } : e.type === Xe ? { ...e, contents: Nt(e.contents), expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(Nt) } : e.type === Ct ? { type: "fill", parts: e.parts.map(Nt) } : e.contents ? { ...e, contents: Nt(e.contents) } : e;
}
function jv(e) {
  let t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ new Set();
  return r(Nt(e));
  function r(a, i, s) {
    var l, c;
    if (typeof a == "string") return JSON.stringify(a);
    if (Array.isArray(a)) {
      let d = a.map(r).filter(Boolean);
      return d.length === 1 ? d[0] : `[${d.join(", ")}]`;
    }
    if (a.type === Re) {
      let d = ((l = s == null ? void 0 : s[i + 1]) == null ? void 0 : l.type) === at;
      return a.literal ? d ? "literalline" : "literallineWithoutBreakParent" : a.hard ? d ? "hardline" : "hardlineWithoutBreakParent" : a.soft ? "softline" : "line";
    }
    if (a.type === at) return ((c = s == null ? void 0 : s[i - 1]) == null ? void 0 : c.type) === Re && s[i - 1].hard ? void 0 : "breakParent";
    if (a.type === Bt) return "trim";
    if (a.type === Tt) return "indent(" + r(a.contents) + ")";
    if (a.type === Mt) return a.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + r(a.contents) + ")" : a.n < 0 ? "dedent(" + r(a.contents) + ")" : a.n.type === "root" ? "markAsRoot(" + r(a.contents) + ")" : "align(" + JSON.stringify(a.n) + ", " + r(a.contents) + ")";
    if (a.type === Qe) return "ifBreak(" + r(a.breakContents) + (a.flatContents ? ", " + r(a.flatContents) : "") + (a.groupId ? (a.flatContents ? "" : ', ""') + `, { groupId: ${o(a.groupId)} }` : "") + ")";
    if (a.type === It) {
      let d = [];
      a.negate && d.push("negate: true"), a.groupId && d.push(`groupId: ${o(a.groupId)}`);
      let h = d.length > 0 ? `, { ${d.join(", ")} }` : "";
      return `indentIfBreak(${r(a.contents)}${h})`;
    }
    if (a.type === Xe) {
      let d = [];
      a.break && a.break !== "propagated" && d.push("shouldBreak: true"), a.id && d.push(`id: ${o(a.id)}`);
      let h = d.length > 0 ? `, { ${d.join(", ")} }` : "";
      return a.expandedStates ? `conditionalGroup([${a.expandedStates.map((f) => r(f)).join(",")}]${h})` : `group(${r(a.contents)}${h})`;
    }
    if (a.type === Ct) return `fill([${a.parts.map((d) => r(d)).join(", ")}])`;
    if (a.type === Lt) return "lineSuffix(" + r(a.contents) + ")";
    if (a.type === Wt) return "lineSuffixBoundary";
    if (a.type === Et) return `label(${JSON.stringify(a.label)}, ${r(a.contents)})`;
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
var kv = (e, t, n) => {
  if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[n < 0 ? t.length + n : n] : t.at(n);
}, Oe = kv, Pv = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function _v(e) {
  return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function Av(e) {
  return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9800 && e <= 9811 || e === 9855 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var Ov = (e) => !(_v(e) || Av(e)), Rv = /[^\x20-\x7F]/;
function Tv(e) {
  if (!e) return 0;
  if (!Rv.test(e)) return e.length;
  e = e.replace(Pv(), "  ");
  let t = 0;
  for (let n of e) {
    let r = n.codePointAt(0);
    r <= 31 || r >= 127 && r <= 159 || r >= 768 && r <= 879 || (t += Ov(r) ? 1 : 2);
  }
  return t;
}
var mi = Tv;
function Ao(e, t) {
  if (typeof e == "string") return t(e);
  let n = /* @__PURE__ */ new Map();
  return r(e);
  function r(a) {
    if (n.has(a)) return n.get(a);
    let i = o(a);
    return n.set(a, i), i;
  }
  function o(a) {
    switch (_n(a)) {
      case Pt:
        return t(a.map(r));
      case Ct:
        return t({ ...a, parts: a.parts.map(r) });
      case Qe:
        return t({ ...a, breakContents: r(a.breakContents), flatContents: r(a.flatContents) });
      case Xe: {
        let { expandedStates: i, contents: s } = a;
        return i ? (i = i.map(r), s = i[0]) : s = r(s), t({ ...a, contents: s, expandedStates: i });
      }
      case Mt:
      case Tt:
      case It:
      case Et:
      case Lt:
        return t({ ...a, contents: r(a.contents) });
      case kn:
      case Pn:
      case Bt:
      case Wt:
      case Re:
      case at:
        return t(a);
      default:
        throw new Jn(a);
    }
  }
}
function pi(e, t, n) {
  let r = n, o = !1;
  function a(i) {
    if (o) return !1;
    let s = t(i);
    s !== void 0 && (o = !0, r = s);
  }
  return fi(e, a), r;
}
function Mv(e) {
  if (e.type === Xe && e.break || e.type === Re && e.hard || e.type === at) return !0;
}
function Bv(e) {
  return pi(e, Mv, !1);
}
function Ns(e) {
  if (e.length > 0) {
    let t = Oe(!1, e, -1);
    !t.expandedStates && !t.break && (t.break = "propagated");
  }
  return null;
}
function Iv(e) {
  let t = /* @__PURE__ */ new Set(), n = [];
  function r(a) {
    if (a.type === at && Ns(n), a.type === Xe) {
      if (n.push(a), t.has(a)) return !1;
      t.add(a);
    }
  }
  function o(a) {
    a.type === Xe && n.pop().break && Ns(n);
  }
  fi(e, r, o, !0);
}
function Lv(e) {
  return e.type === Re && !e.hard ? e.soft ? "" : " " : e.type === Qe ? e.flatContents : e;
}
function Wv(e) {
  return Ao(e, Lv);
}
function js(e) {
  for (e = [...e]; e.length >= 2 && Oe(!1, e, -2).type === Re && Oe(!1, e, -1).type === at; ) e.length -= 2;
  if (e.length > 0) {
    let t = Cr(Oe(!1, e, -1));
    e[e.length - 1] = t;
  }
  return e;
}
function Cr(e) {
  switch (_n(e)) {
    case Tt:
    case It:
    case Xe:
    case Lt:
    case Et: {
      let t = Cr(e.contents);
      return { ...e, contents: t };
    }
    case Qe:
      return { ...e, breakContents: Cr(e.breakContents), flatContents: Cr(e.flatContents) };
    case Ct:
      return { ...e, parts: js(e.parts) };
    case Pt:
      return js(e);
    case kn:
      return e.replace(/[\n\r]*$/, "");
    case Mt:
    case Pn:
    case Bt:
    case Wt:
    case Re:
    case at:
      break;
    default:
      throw new Jn(e);
  }
  return e;
}
function tc(e) {
  return Cr(Hv(e));
}
function $v(e) {
  switch (_n(e)) {
    case Ct:
      if (e.parts.every((t) => t === "")) return "";
      break;
    case Xe:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === Xe && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
      break;
    case Mt:
    case Tt:
    case It:
    case Lt:
      if (!e.contents) return "";
      break;
    case Qe:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case Pt: {
      let t = [];
      for (let n of e) {
        if (!n) continue;
        let [r, ...o] = Array.isArray(n) ? n : [n];
        typeof r == "string" && typeof Oe(!1, t, -1) == "string" ? t[t.length - 1] += r : t.push(r), t.push(...o);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case kn:
    case Pn:
    case Bt:
    case Wt:
    case Re:
    case Et:
    case at:
      break;
    default:
      throw new Jn(e);
  }
  return e;
}
function Hv(e) {
  return Ao(e, (t) => $v(t));
}
function Vv(e, t = Qu) {
  return Ao(e, (n) => typeof n == "string" ? Zu(t, n.split(`
`)) : n);
}
function Yv(e) {
  if (e.type === Re) return !0;
}
function zv(e) {
  return pi(e, Yv, !1);
}
function nc(e, t) {
  return e.type === Et ? { ...e, contents: t(e.contents) } : t(e);
}
var Ue = Symbol("MODE_BREAK"), pt = Symbol("MODE_FLAT"), Er = Symbol("cursor");
function rc() {
  return { value: "", length: 0, queue: [] };
}
function Uv(e, t) {
  return ja(e, { type: "indent" }, t);
}
function qv(e, t, n) {
  return t === Number.NEGATIVE_INFINITY ? e.root || rc() : t < 0 ? ja(e, { type: "dedent" }, n) : t ? t.type === "root" ? { ...e, root: e } : ja(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, n) : e;
}
function ja(e, t, n) {
  let r = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], o = "", a = 0, i = 0, s = 0;
  for (let p of r) switch (p.type) {
    case "indent":
      d(), n.useTabs ? l(1) : c(n.tabWidth);
      break;
    case "stringAlign":
      d(), o += p.n, a += p.n.length;
      break;
    case "numberAlign":
      i += 1, s += p.n;
      break;
    default:
      throw new Error(`Unexpected type '${p.type}'`);
  }
  return f(), { ...e, value: o, length: a, queue: r };
  function l(p) {
    o += "	".repeat(p), a += n.tabWidth * p;
  }
  function c(p) {
    o += " ".repeat(p), a += p;
  }
  function d() {
    n.useTabs ? h() : f();
  }
  function h() {
    i > 0 && l(i), m();
  }
  function f() {
    s > 0 && c(s), m();
  }
  function m() {
    i = 0, s = 0;
  }
}
function ka(e) {
  let t = 0, n = 0, r = e.length;
  e: for (; r--; ) {
    let o = e[r];
    if (o === Er) {
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
  if (t > 0 || n > 0) for (e.length = r + 1; n-- > 0; ) e.push(Er);
  return t;
}
function eo(e, t, n, r, o, a) {
  if (n === Number.POSITIVE_INFINITY) return !0;
  let i = t.length, s = [e], l = [];
  for (; n >= 0; ) {
    if (s.length === 0) {
      if (i === 0) return !0;
      s.push(t[--i]);
      continue;
    }
    let { mode: c, doc: d } = s.pop(), h = _n(d);
    switch (h) {
      case kn:
        l.push(d), n -= mi(d);
        break;
      case Pt:
      case Ct: {
        let f = h === Pt ? d : d.parts;
        for (let m = f.length - 1; m >= 0; m--) s.push({ mode: c, doc: f[m] });
        break;
      }
      case Tt:
      case Mt:
      case It:
      case Et:
        s.push({ mode: c, doc: d.contents });
        break;
      case Bt:
        n += ka(l);
        break;
      case Xe: {
        if (a && d.break) return !1;
        let f = d.break ? Ue : c, m = d.expandedStates && f === Ue ? Oe(!1, d.expandedStates, -1) : d.contents;
        s.push({ mode: f, doc: m });
        break;
      }
      case Qe: {
        let f = (d.groupId ? o[d.groupId] || pt : c) === Ue ? d.breakContents : d.flatContents;
        f && s.push({ mode: c, doc: f });
        break;
      }
      case Re:
        if (c === Ue || d.hard) return !0;
        d.soft || (l.push(" "), n--);
        break;
      case Lt:
        r = !0;
        break;
      case Wt:
        if (r) return !1;
        break;
    }
  }
  return !1;
}
function Oo(e, t) {
  let n = {}, r = t.printWidth, o = di(t.endOfLine), a = 0, i = [{ ind: rc(), mode: Ue, doc: e }], s = [], l = !1, c = [], d = 0;
  for (Iv(e); i.length > 0; ) {
    let { ind: f, mode: m, doc: p } = i.pop();
    switch (_n(p)) {
      case kn: {
        let g = o !== `
` ? Po(!1, p, `
`, o) : p;
        s.push(g), i.length > 0 && (a += mi(g));
        break;
      }
      case Pt:
        for (let g = p.length - 1; g >= 0; g--) i.push({ ind: f, mode: m, doc: p[g] });
        break;
      case Pn:
        if (d >= 2) throw new Error("There are too many 'cursor' in doc.");
        s.push(Er), d++;
        break;
      case Tt:
        i.push({ ind: Uv(f, t), mode: m, doc: p.contents });
        break;
      case Mt:
        i.push({ ind: qv(f, p.n, t), mode: m, doc: p.contents });
        break;
      case Bt:
        a -= ka(s);
        break;
      case Xe:
        switch (m) {
          case pt:
            if (!l) {
              i.push({ ind: f, mode: p.break ? Ue : pt, doc: p.contents });
              break;
            }
          case Ue: {
            l = !1;
            let g = { ind: f, mode: pt, doc: p.contents }, D = r - a, y = c.length > 0;
            if (!p.break && eo(g, i, D, y, n)) i.push(g);
            else if (p.expandedStates) {
              let b = Oe(!1, p.expandedStates, -1);
              if (p.break) {
                i.push({ ind: f, mode: Ue, doc: b });
                break;
              } else for (let w = 1; w < p.expandedStates.length + 1; w++) if (w >= p.expandedStates.length) {
                i.push({ ind: f, mode: Ue, doc: b });
                break;
              } else {
                let C = p.expandedStates[w], E = { ind: f, mode: pt, doc: C };
                if (eo(E, i, D, y, n)) {
                  i.push(E);
                  break;
                }
              }
            } else i.push({ ind: f, mode: Ue, doc: p.contents });
            break;
          }
        }
        p.id && (n[p.id] = Oe(!1, i, -1).mode);
        break;
      case Ct: {
        let g = r - a, { parts: D } = p;
        if (D.length === 0) break;
        let [y, b] = D, w = { ind: f, mode: pt, doc: y }, C = { ind: f, mode: Ue, doc: y }, E = eo(w, [], g, c.length > 0, n, !0);
        if (D.length === 1) {
          E ? i.push(w) : i.push(C);
          break;
        }
        let F = { ind: f, mode: pt, doc: b }, S = { ind: f, mode: Ue, doc: b };
        if (D.length === 2) {
          E ? i.push(F, w) : i.push(S, C);
          break;
        }
        D.splice(0, 2);
        let _ = { ind: f, mode: m, doc: Xu(D) }, N = D[0];
        eo({ ind: f, mode: pt, doc: [y, b, N] }, [], g, c.length > 0, n, !0) ? i.push(_, F, w) : E ? i.push(_, S, w) : i.push(_, S, C);
        break;
      }
      case Qe:
      case It: {
        let g = p.groupId ? n[p.groupId] : m;
        if (g === Ue) {
          let D = p.type === Qe ? p.breakContents : p.negate ? p.contents : ho(p.contents);
          D && i.push({ ind: f, mode: m, doc: D });
        }
        if (g === pt) {
          let D = p.type === Qe ? p.flatContents : p.negate ? ho(p.contents) : p.contents;
          D && i.push({ ind: f, mode: m, doc: D });
        }
        break;
      }
      case Lt:
        c.push({ ind: f, mode: m, doc: p.contents });
        break;
      case Wt:
        c.length > 0 && i.push({ ind: f, mode: m, doc: hi });
        break;
      case Re:
        switch (m) {
          case pt:
            if (p.hard) l = !0;
            else {
              p.soft || (s.push(" "), a += 1);
              break;
            }
          case Ue:
            if (c.length > 0) {
              i.push({ ind: f, mode: m, doc: p }, ...c.reverse()), c.length = 0;
              break;
            }
            p.literal ? f.root ? (s.push(o, f.root.value), a = f.root.length) : (s.push(o), a = 0) : (a -= ka(s), s.push(o + f.value), a = f.length);
            break;
        }
        break;
      case Et:
        i.push({ ind: f, mode: m, doc: p.contents });
        break;
      case at:
        break;
      default:
        throw new Jn(p);
    }
    i.length === 0 && c.length > 0 && (i.push(...c.reverse()), c.length = 0);
  }
  let h = s.indexOf(Er);
  if (h !== -1) {
    let f = s.indexOf(Er, h + 1), m = s.slice(0, h).join(""), p = s.slice(h + 1, f).join(""), g = s.slice(f + 1).join("");
    return { formatted: m + p + g, cursorNodeStart: m.length, cursorNodeText: p };
  }
  return { formatted: s.join("") };
}
function Gv(e, t, n = 0) {
  let r = 0;
  for (let o = n; o < e.length; ++o) e[o] === "	" ? r = r + t - r % t : r++;
  return r;
}
var gi = Gv, hn, Pa, oo, Xv = class {
  constructor(e) {
    ev(this, hn), this.stack = [e];
  }
  get key() {
    let { stack: e, siblings: t } = this;
    return Oe(!1, e, t === null ? -2 : -4) ?? null;
  }
  get index() {
    return this.siblings === null ? null : Oe(!1, this.stack, -2);
  }
  get node() {
    return Oe(!1, this.stack, -1);
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
    let { stack: e } = this, t = Oe(!1, e, -3);
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
    return [...Dr(this, hn, oo).call(this)];
  }
  getName() {
    let { stack: e } = this, { length: t } = e;
    return t > 1 ? Oe(!1, e, -2) : null;
  }
  getValue() {
    return Oe(!1, this.stack, -1);
  }
  getNode(e = 0) {
    let t = Dr(this, hn, Pa).call(this, e);
    return t === -1 ? null : this.stack[t];
  }
  getParentNode(e = 0) {
    return this.getNode(e + 1);
  }
  call(e, ...t) {
    let { stack: n } = this, { length: r } = n, o = Oe(!1, n, -1);
    for (let a of t) o = o[a], n.push(a, o);
    try {
      return e(this);
    } finally {
      n.length = r;
    }
  }
  callParent(e, t = 0) {
    let n = Dr(this, hn, Pa).call(this, t + 1), r = this.stack.splice(n + 1);
    try {
      return e(this);
    } finally {
      this.stack.push(...r);
    }
  }
  each(e, ...t) {
    let { stack: n } = this, { length: r } = n, o = Oe(!1, n, -1);
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
    for (let t of Dr(this, hn, oo).call(this)) if (e(t)) return t;
  }
  hasAncestor(e) {
    for (let t of Dr(this, hn, oo).call(this)) if (e(t)) return !0;
    return !1;
  }
};
hn = /* @__PURE__ */ new WeakSet(), Pa = function(e) {
  let { stack: t } = this;
  for (let n = t.length - 1; n >= 0; n -= 2) if (!Array.isArray(t[n]) && --e < 0) return n;
  return -1;
}, oo = function* () {
  let { stack: e } = this;
  for (let t = e.length - 3; t >= 0; t -= 2) {
    let n = e[t];
    Array.isArray(n) || (yield n);
  }
};
var Kv = Xv, oc = new Proxy(() => {
}, { get: () => oc }), _a = oc;
function Jv(e) {
  return e !== null && typeof e == "object";
}
var Qv = Jv;
function* ac(e, t) {
  let { getVisitorKeys: n, filter: r = () => !0 } = t, o = (a) => Qv(a) && r(a);
  for (let a of n(e)) {
    let i = e[a];
    if (Array.isArray(i)) for (let s of i) o(s) && (yield s);
    else o(i) && (yield i);
  }
}
function* Zv(e, t) {
  let n = [e];
  for (let r = 0; r < n.length; r++) {
    let o = n[r];
    for (let a of ac(o, t)) yield a, n.push(a);
  }
}
function Ar(e) {
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
var eD = Ar(/\s/), Xt = Ar(" 	"), ic = Ar(",; 	"), sc = Ar(/[^\n\r]/);
function tD(e, t, n) {
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
var En = tD;
function nD(e, t, n = {}) {
  let r = Xt(e, n.backwards ? t - 1 : t, n), o = En(e, r, n);
  return r !== o;
}
var qt = nD;
function rD(e) {
  return Array.isArray(e) && e.length > 0;
}
var oD = rD, lc = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]), aD = (e) => Object.keys(e).filter((t) => !lc.has(t));
function iD(e) {
  return e ? (t) => e(t, lc) : aD;
}
var Ro = iD;
function sD(e) {
  let t = e.type || e.kind || "(unknown type)", n = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
  return n.length > 20 && (n = n.slice(0, 19) + "…"), t + (n ? " " + n : "");
}
function vi(e, t) {
  (e.comments ?? (e.comments = [])).push(t), t.printed = !1, t.nodeDescription = sD(e);
}
function Hn(e, t) {
  t.leading = !0, t.trailing = !1, vi(e, t);
}
function mn(e, t, n) {
  t.leading = !1, t.trailing = !1, n && (t.marker = n), vi(e, t);
}
function Vn(e, t) {
  t.leading = !1, t.trailing = !0, vi(e, t);
}
var na = /* @__PURE__ */ new WeakMap();
function Di(e, t) {
  if (na.has(e)) return na.get(e);
  let { printer: { getCommentChildNodes: n, canAttachComment: r, getVisitorKeys: o }, locStart: a, locEnd: i } = t;
  if (!r) return [];
  let s = ((n == null ? void 0 : n(e, t)) ?? [...ac(e, { getVisitorKeys: Ro(o) })]).flatMap((l) => r(l) ? [l] : Di(l, t));
  return s.sort((l, c) => a(l) - a(c) || i(l) - i(c)), na.set(e, s), s;
}
function uc(e, t, n, r) {
  let { locStart: o, locEnd: a } = n, i = o(t), s = a(t), l = Di(e, n), c, d, h = 0, f = l.length;
  for (; h < f; ) {
    let m = h + f >> 1, p = l[m], g = o(p), D = a(p);
    if (g <= i && s <= D) return uc(p, t, n, p);
    if (D <= i) {
      c = p, h = m + 1;
      continue;
    }
    if (s <= g) {
      d = p, f = m;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if ((r == null ? void 0 : r.type) === "TemplateLiteral") {
    let { quasis: m } = r, p = oa(m, t, n);
    c && oa(m, c, n) !== p && (c = null), d && oa(m, d, n) !== p && (d = null);
  }
  return { enclosingNode: r, precedingNode: c, followingNode: d };
}
var ra = () => !1;
function lD(e, t) {
  let { comments: n } = e;
  if (delete e.comments, !oD(n) || !t.printer.canAttachComment) return;
  let r = [], { locStart: o, locEnd: a, printer: { experimentalFeatures: { avoidAstMutation: i = !1 } = {}, handleComments: s = {} }, originalText: l } = t, { ownLine: c = ra, endOfLine: d = ra, remaining: h = ra } = s, f = n.map((m, p) => ({ ...uc(e, m, t), comment: m, text: l, options: t, ast: e, isLastComment: n.length - 1 === p }));
  for (let [m, p] of f.entries()) {
    let { comment: g, precedingNode: D, enclosingNode: y, followingNode: b, text: w, options: C, ast: E, isLastComment: F } = p;
    if (C.parser === "json" || C.parser === "json5" || C.parser === "jsonc" || C.parser === "__js_expression" || C.parser === "__ts_expression" || C.parser === "__vue_expression" || C.parser === "__vue_ts_expression") {
      if (o(g) - o(E) <= 0) {
        Hn(E, g);
        continue;
      }
      if (a(g) - a(E) >= 0) {
        Vn(E, g);
        continue;
      }
    }
    let S;
    if (i ? S = [p] : (g.enclosingNode = y, g.precedingNode = D, g.followingNode = b, S = [g, w, C, E, F]), uD(w, C, f, m)) g.placement = "ownLine", c(...S) || (b ? Hn(b, g) : D ? Vn(D, g) : mn(y || E, g));
    else if (cD(w, C, f, m)) g.placement = "endOfLine", d(...S) || (D ? Vn(D, g) : b ? Hn(b, g) : mn(y || E, g));
    else if (g.placement = "remaining", !h(...S)) if (D && b) {
      let _ = r.length;
      _ > 0 && r[_ - 1].followingNode !== b && ks(r, C), r.push(p);
    } else D ? Vn(D, g) : b ? Hn(b, g) : mn(y || E, g);
  }
  if (ks(r, t), !i) for (let m of n) delete m.precedingNode, delete m.enclosingNode, delete m.followingNode;
}
var cc = (e) => !/[\S\n\u2028\u2029]/.test(e);
function uD(e, t, n, r) {
  let { comment: o, precedingNode: a } = n[r], { locStart: i, locEnd: s } = t, l = i(o);
  if (a) for (let c = r - 1; c >= 0; c--) {
    let { comment: d, precedingNode: h } = n[c];
    if (h !== a || !cc(e.slice(s(d), l))) break;
    l = i(d);
  }
  return qt(e, l, { backwards: !0 });
}
function cD(e, t, n, r) {
  let { comment: o, followingNode: a } = n[r], { locStart: i, locEnd: s } = t, l = s(o);
  if (a) for (let c = r + 1; c < n.length; c++) {
    let { comment: d, followingNode: h } = n[c];
    if (h !== a || !cc(e.slice(l, i(d)))) break;
    l = s(d);
  }
  return qt(e, l);
}
function ks(e, t) {
  var n, r;
  let o = e.length;
  if (o === 0) return;
  let { precedingNode: a, followingNode: i } = e[0], s = t.locStart(i), l;
  for (l = o; l > 0; --l) {
    let { comment: c, precedingNode: d, followingNode: h } = e[l - 1];
    _a.strictEqual(d, a), _a.strictEqual(h, i);
    let f = t.originalText.slice(t.locEnd(c), s);
    if (((r = (n = t.printer).isGap) == null ? void 0 : r.call(n, f, t)) ?? /^[\s(]*$/.test(f)) s = t.locStart(c);
    else break;
  }
  for (let [c, { comment: d }] of e.entries()) c < l ? Vn(a, d) : Hn(i, d);
  for (let c of [a, i]) c.comments && c.comments.length > 1 && c.comments.sort((d, h) => t.locStart(d) - t.locStart(h));
  e.length = 0;
}
function oa(e, t, n) {
  let r = n.locStart(t) - 1;
  for (let o = 1; o < e.length; ++o) if (r < n.locStart(e[o])) return o - 1;
  return 0;
}
function dD(e, t) {
  let n = t - 1;
  n = Xt(e, n, { backwards: !0 }), n = En(e, n, { backwards: !0 }), n = Xt(e, n, { backwards: !0 });
  let r = En(e, n, { backwards: !0 });
  return n !== r;
}
var yi = dD;
function dc(e, t) {
  let n = e.node;
  return n.printed = !0, t.printer.printComment(e, t);
}
function fD(e, t) {
  var n;
  let r = e.node, o = [dc(e, t)], { printer: a, originalText: i, locStart: s, locEnd: l } = t;
  if ((n = a.isBlockComment) != null && n.call(a, r)) {
    let d = qt(i, l(r)) ? qt(i, s(r), { backwards: !0 }) ? bn : Ju : " ";
    o.push(d);
  } else o.push(bn);
  let c = En(i, Xt(i, l(r)));
  return c !== !1 && qt(i, c) && o.push(bn), o;
}
function hD(e, t, n) {
  var r;
  let o = e.node, a = dc(e, t), { printer: i, originalText: s, locStart: l } = t, c = (r = i.isBlockComment) == null ? void 0 : r.call(i, o);
  if (n != null && n.hasLineSuffix && !(n != null && n.isBlock) || qt(s, l(o), { backwards: !0 })) {
    let d = yi(s, l(o));
    return { doc: Sa([bn, d ? bn : "", a]), isBlock: c, hasLineSuffix: !0 };
  }
  return !c || n != null && n.hasLineSuffix ? { doc: [Sa([" ", a]), _o], isBlock: c, hasLineSuffix: !0 } : { doc: [" ", a], isBlock: c, hasLineSuffix: !1 };
}
function mD(e, t) {
  let n = e.node;
  if (!n) return {};
  let r = t[Symbol.for("printedComments")];
  if ((n.comments || []).filter((s) => !r.has(s)).length === 0) return { leading: "", trailing: "" };
  let o = [], a = [], i;
  return e.each(() => {
    let s = e.node;
    if (r != null && r.has(s)) return;
    let { leading: l, trailing: c } = s;
    l ? o.push(fD(e, t)) : c && (i = hD(e, t, i), a.push(i.doc));
  }, "comments"), { leading: o, trailing: a };
}
function pD(e, t, n) {
  let { leading: r, trailing: o } = mD(e, n);
  return !r && !o ? t : nc(t, (a) => [r, a, o]);
}
function gD(e) {
  let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: n } = e;
  for (let r of t) {
    if (!r.printed && !n.has(r)) throw new Error('Comment "' + r.value.trim() + '" was not printed. Please report this error!');
    delete r.printed;
  }
}
var fc = class extends Error {
  constructor() {
    super(...arguments);
    Vr(this, "name", "ConfigError");
  }
}, Ps = class extends Error {
  constructor() {
    super(...arguments);
    Vr(this, "name", "UndefinedParserError");
  }
}, vD = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }] }, plugins: { type: "path", array: !0, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: !1, description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`, cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
function hc({ plugins: e = [], showDeprecated: t = !1 } = {}) {
  let n = e.flatMap((o) => o.languages ?? []), r = [];
  for (let o of yD(Object.assign({}, ...e.map(({ options: a }) => a), vD))) !t && o.deprecated || (Array.isArray(o.choices) && (t || (o.choices = o.choices.filter((a) => !a.deprecated)), o.name === "parser" && (o.choices = [...o.choices, ...DD(o.choices, n, e)])), o.pluginDefaults = Object.fromEntries(e.filter((a) => {
    var i;
    return ((i = a.defaultOptions) == null ? void 0 : i[o.name]) !== void 0;
  }).map((a) => [a.name, a.defaultOptions[o.name]])), r.push(o));
  return { languages: n, options: r };
}
function* DD(e, t, n) {
  let r = new Set(e.map((o) => o.value));
  for (let o of t) if (o.parsers) {
    for (let a of o.parsers) if (!r.has(a)) {
      r.add(a);
      let i = n.find((l) => l.parsers && Object.prototype.hasOwnProperty.call(l.parsers, a)), s = o.name;
      i != null && i.name && (s += ` (plugin: ${i.name})`), yield { value: a, description: s };
    }
  }
}
function yD(e) {
  let t = [];
  for (let [n, r] of Object.entries(e)) {
    let o = { name: n, ...r };
    Array.isArray(o.default) && (o.default = Oe(!1, o.default, -1).value), t.push(o);
  }
  return t;
}
var bD = (e) => String(e).split(/[/\\]/).pop();
function _s(e, t) {
  if (!t) return;
  let n = bD(t).toLowerCase();
  return e.find(({ filenames: r }) => r == null ? void 0 : r.some((o) => o.toLowerCase() === n)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.some((o) => n.endsWith(o)));
}
function wD(e, t) {
  if (t) return e.find(({ name: n }) => n.toLowerCase() === t) ?? e.find(({ aliases: n }) => n == null ? void 0 : n.includes(t)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.includes(`.${t}`));
}
function xD(e, t) {
  let n = e.plugins.flatMap((o) => o.languages ?? []), r = wD(n, t.language) ?? _s(n, t.physicalFile) ?? _s(n, t.file) ?? (t.physicalFile, void 0);
  return r == null ? void 0 : r.parsers[0];
}
var CD = xD, Yn = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
  if (e === null || typeof e != "object") return JSON.stringify(e);
  if (Array.isArray(e)) return `[${e.map((n) => Yn.value(n)).join(", ")}]`;
  let t = Object.keys(e);
  return t.length === 0 ? "{}" : `{ ${t.map((n) => `${Yn.key(n)}: ${Yn.value(e[n])}`).join(", ")} }`;
}, pair: ({ key: e, value: t }) => Yn.value({ [e]: t }) }, As = _r(ci()), ED = (e, t, { descriptor: n }) => {
  let r = [`${As.default.yellow(typeof e == "string" ? n.key(e) : n.pair(e))} is deprecated`];
  return t && r.push(`we now treat it as ${As.default.blue(typeof t == "string" ? n.key(t) : n.pair(t))}`), r.join("; ") + ".";
}, zn = _r(ci()), mc = Symbol.for("vnopts.VALUE_NOT_EXIST"), ao = Symbol.for("vnopts.VALUE_UNCHANGED"), Os = " ".repeat(2), FD = (e, t, n) => {
  let { text: r, list: o } = n.normalizeExpectedResult(n.schemas[e].expected(n)), a = [];
  return r && a.push(Rs(e, t, r, n.descriptor)), o && a.push([Rs(e, t, o.title, n.descriptor)].concat(o.values.map((i) => pc(i, n.loggerPrintWidth))).join(`
`)), gc(a, n.loggerPrintWidth);
};
function Rs(e, t, n, r) {
  return [`Invalid ${zn.default.red(r.key(e))} value.`, `Expected ${zn.default.blue(n)},`, `but received ${t === mc ? zn.default.gray("nothing") : zn.default.red(r.value(t))}.`].join(" ");
}
function pc({ text: e, list: t }, n) {
  let r = [];
  return e && r.push(`- ${zn.default.blue(e)}`), t && r.push([`- ${zn.default.blue(t.title)}:`].concat(t.values.map((o) => pc(o, n - Os.length).replace(/^|\n/g, `$&${Os}`))).join(`
`)), gc(r, n);
}
function gc(e, t) {
  if (e.length === 1) return e[0];
  let [n, r] = e, [o, a] = e.map((i) => i.split(`
`, 1)[0].length);
  return o > t && o > a ? r : n;
}
var Ts = _r(ci()), aa = [], Ms = [];
function SD(e, t) {
  if (e === t) return 0;
  let n = e;
  e.length > t.length && (e = t, t = n);
  let r = e.length, o = t.length;
  for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-o); ) r--, o--;
  let a = 0;
  for (; a < r && e.charCodeAt(a) === t.charCodeAt(a); ) a++;
  if (r -= a, o -= a, r === 0) return o;
  let i, s, l, c, d = 0, h = 0;
  for (; d < r; ) Ms[d] = e.charCodeAt(a + d), aa[d] = ++d;
  for (; h < o; ) for (i = t.charCodeAt(a + h), l = h++, s = h, d = 0; d < r; d++) c = i === Ms[d] ? l : l + 1, l = aa[d], s = aa[d] = l > s ? c > s ? s + 1 : c : c > l ? l + 1 : c;
  return s;
}
var vc = (e, t, { descriptor: n, logger: r, schemas: o }) => {
  let a = [`Ignored unknown option ${Ts.default.yellow(n.pair({ key: e, value: t }))}.`], i = Object.keys(o).sort().find((s) => SD(e, s) < 3);
  i && a.push(`Did you mean ${Ts.default.blue(n.key(i))}?`), r.warn(a.join(" "));
}, ND = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
function jD(e, t) {
  let n = new e(t), r = Object.create(n);
  for (let o of ND) o in t && (r[o] = kD(t[o], n, Zt.prototype[o].length));
  return r;
}
var Zt = class {
  static create(e) {
    return jD(this, e);
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
    return ao;
  }
};
function kD(e, t, n) {
  return typeof e == "function" ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1)) : () => e;
}
var PD = class extends Zt {
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
}, _D = class extends Zt {
  expected() {
    return "anything";
  }
  validate() {
    return !0;
  }
}, AD = class extends Zt {
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
      n.push(...o.map(Bs));
    }
    return n;
  }
  redirect(e, t) {
    let n = [], r = [];
    for (let o of e) {
      let a = t.normalizeRedirectResult(this._valueSchema.redirect(o, t), o);
      "remain" in a && n.push(a.remain), r.push(...a.redirect.map(Bs));
    }
    return n.length === 0 ? { redirect: r } : { redirect: r, remain: n };
  }
  overlap(e, t) {
    return e.concat(t);
  }
};
function Bs({ from: e, to: t }) {
  return { from: [e], to: t };
}
var OD = class extends Zt {
  expected() {
    return "true or false";
  }
  validate(e) {
    return typeof e == "boolean";
  }
};
function RD(e, t) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let r of e) {
    let o = r[t];
    if (n[o]) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    n[o] = r;
  }
  return n;
}
function TD(e, t) {
  let n = /* @__PURE__ */ new Map();
  for (let r of e) {
    let o = r[t];
    if (n.has(o)) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    n.set(o, r);
  }
  return n;
}
function MD() {
  let e = /* @__PURE__ */ Object.create(null);
  return (t) => {
    let n = JSON.stringify(t);
    return e[n] ? !0 : (e[n] = !0, !1);
  };
}
function BD(e, t) {
  let n = [], r = [];
  for (let o of e) t(o) ? n.push(o) : r.push(o);
  return [n, r];
}
function ID(e) {
  return e === Math.floor(e);
}
function LD(e, t) {
  if (e === t) return 0;
  let n = typeof e, r = typeof t, o = ["undefined", "object", "boolean", "number", "string"];
  return n !== r ? o.indexOf(n) - o.indexOf(r) : n !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
}
function WD(e) {
  return (...t) => {
    let n = e(...t);
    return typeof n == "string" ? new Error(n) : n;
  };
}
function Is(e) {
  return e === void 0 ? {} : e;
}
function Dc(e) {
  if (typeof e == "string") return { text: e };
  let { text: t, list: n } = e;
  return $D((t || n) !== void 0, "Unexpected `expected` result, there should be at least one field."), n ? { text: t, list: { title: n.title, values: n.values.map(Dc) } } : { text: t };
}
function Ls(e, t) {
  return e === !0 ? !0 : e === !1 ? { value: t } : e;
}
function Ws(e, t, n = !1) {
  return e === !1 ? !1 : e === !0 ? n ? !0 : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? !1 : e;
}
function $s(e, t) {
  return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
}
function Aa(e, t) {
  return e === void 0 ? [] : Array.isArray(e) ? e.map((n) => $s(n, t)) : [$s(e, t)];
}
function Hs(e, t) {
  let n = Aa(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
  return n.length === 0 ? { remain: t, redirect: n } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: n } : { redirect: n };
}
function $D(e, t) {
  if (!e) throw new Error(t);
}
var HD = class extends Zt {
  constructor(e) {
    super(e), this._choices = TD(e.choices.map((t) => t && typeof t == "object" ? t : { value: t }), "value");
  }
  expected({ descriptor: e }) {
    let t = Array.from(this._choices.keys()).map((o) => this._choices.get(o)).filter(({ hidden: o }) => !o).map((o) => o.value).sort(LD).map(e.value), n = t.slice(0, -2), r = t.slice(-2);
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
}, VD = class extends Zt {
  expected() {
    return "a number";
  }
  validate(e, t) {
    return typeof e == "number";
  }
}, YD = class extends VD {
  expected() {
    return "an integer";
  }
  validate(e, t) {
    return t.normalizeValidateResult(super.validate(e, t), e) === !0 && ID(e);
  }
}, Vs = class extends Zt {
  expected() {
    return "a string";
  }
  validate(e) {
    return typeof e == "string";
  }
}, zD = Yn, UD = vc, qD = FD, GD = ED, XD = class {
  constructor(e, t) {
    let { logger: n = console, loggerPrintWidth: r = 80, descriptor: o = zD, unknown: a = UD, invalid: i = qD, deprecated: s = GD, missing: l = () => !1, required: c = () => !1, preprocess: d = (f) => f, postprocess: h = () => ao } = t || {};
    this._utils = { descriptor: o, logger: n || { warn: () => {
    } }, loggerPrintWidth: r, schemas: RD(e, "name"), normalizeDefaultResult: Is, normalizeExpectedResult: Dc, normalizeDeprecatedResult: Ws, normalizeForwardResult: Aa, normalizeRedirectResult: Hs, normalizeValidateResult: Ls }, this._unknownHandler = a, this._invalidHandler = WD(i), this._deprecatedHandler = s, this._identifyMissing = (f, m) => !(f in m) || l(f, m), this._identifyRequired = c, this._preprocess = d, this._postprocess = h, this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = MD();
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
        let i = Is(a.default(this._utils));
        "value" in i && n.push({ [o]: i.value });
      }
    }
    r();
    for (let o of Object.keys(this._utils.schemas)) {
      if (!(o in t)) continue;
      let a = this._utils.schemas[o], i = t[o], s = a.postprocess(i, this._utils);
      s !== ao && (this._applyValidation(s, o, a), t[o] = s);
    }
    return this._applyPostprocess(t), this._applyRequiredCheck(t), t;
  }
  _applyNormalization(e, t) {
    let n = [], { knownKeys: r, unknownKeys: o } = this._partitionOptionKeys(e);
    for (let a of r) {
      let i = this._utils.schemas[a], s = i.preprocess(e[a], this._utils);
      this._applyValidation(s, a, i);
      let l = ({ from: h, to: f }) => {
        n.push(typeof f == "string" ? { [f]: h } : { [f.key]: f.value });
      }, c = ({ value: h, redirectTo: f }) => {
        let m = Ws(i.deprecated(h, this._utils), s, !0);
        if (m !== !1) if (m === !0) this._hasDeprecationWarned(a) || this._utils.logger.warn(this._deprecatedHandler(a, f, this._utils));
        else for (let { value: p } of m) {
          let g = { key: a, value: p };
          if (!this._hasDeprecationWarned(g)) {
            let D = typeof f == "string" ? { key: f, value: p } : f;
            this._utils.logger.warn(this._deprecatedHandler(g, D, this._utils));
          }
        }
      };
      Aa(i.forward(s, this._utils), s).forEach(l);
      let d = Hs(i.redirect(s, this._utils), s);
      if (d.redirect.forEach(l), "remain" in d) {
        let h = d.remain;
        t[a] = a in t ? i.overlap(t[a], h, this._utils) : h, c({ value: h });
      }
      for (let { from: h, to: f } of d.redirect) c({ value: h, redirectTo: f });
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
    for (let t of Object.keys(this._utils.schemas)) if (this._identifyMissing(t, e) && this._identifyRequired(t)) throw this._invalidHandler(t, mc, this._utils);
  }
  _partitionOptionKeys(e) {
    let [t, n] = BD(Object.keys(e).filter((r) => !this._identifyMissing(r, e)), (r) => r in this._utils.schemas);
    return { knownKeys: t, unknownKeys: n };
  }
  _applyValidation(e, t, n) {
    let r = Ls(n.validate(e, this._utils), e);
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
    if (t !== ao) {
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
}, ia;
function KD(e, t, { logger: n = !1, isCLI: r = !1, passThrough: o = !1, FlagSchema: a, descriptor: i } = {}) {
  if (r) {
    if (!a) throw new Error("'FlagSchema' option is required.");
    if (!i) throw new Error("'descriptor' option is required.");
  } else i = Yn;
  let s = o ? Array.isArray(o) ? (f, m) => o.includes(f) ? { [f]: m } : void 0 : (f, m) => ({ [f]: m }) : (f, m, p) => {
    let { _: g, ...D } = p.schemas;
    return vc(f, m, { ...p, schemas: D });
  }, l = JD(t, { isCLI: r, FlagSchema: a }), c = new XD(l, { logger: n, unknown: s, descriptor: i }), d = n !== !1;
  d && ia && (c._hasDeprecationWarned = ia);
  let h = c.normalize(e);
  return d && (ia = c._hasDeprecationWarned), h;
}
function JD(e, { isCLI: t, FlagSchema: n }) {
  let r = [];
  t && r.push(_D.create({ name: "_" }));
  for (let o of e) r.push(QD(o, { isCLI: t, optionInfos: e, FlagSchema: n })), o.alias && t && r.push(PD.create({ name: o.alias, sourceName: o.name }));
  return r;
}
function QD(e, { isCLI: t, optionInfos: n, FlagSchema: r }) {
  let { name: o } = e, a = { name: o }, i, s = {};
  switch (e.type) {
    case "int":
      i = YD, t && (a.preprocess = Number);
      break;
    case "string":
      i = Vs;
      break;
    case "choice":
      i = HD, a.choices = e.choices.map((l) => l != null && l.redirect ? { ...l, redirect: { to: { key: e.name, value: l.redirect } } } : l);
      break;
    case "boolean":
      i = OD;
      break;
    case "flag":
      i = r, a.flags = n.flatMap((l) => [l.alias, l.description && l.name, l.oppositeDescription && `no-${l.name}`].filter(Boolean));
      break;
    case "path":
      i = Vs;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (e.exception ? a.validate = (l, c, d) => e.exception(l) || c.validate(l, d) : a.validate = (l, c, d) => l === void 0 || c.validate(l, d), e.redirect && (s.redirect = (l) => l ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (s.deprecated = !0), t && !e.array) {
    let l = a.preprocess || ((c) => c);
    a.preprocess = (c, d, h) => d.preprocess(l(Array.isArray(c) ? Oe(!1, c, -1) : c), h);
  }
  return e.array ? AD.create({ ...t ? { preprocess: (l) => Array.isArray(l) ? l : [l] } : {}, ...s, valueSchema: i.create(a) }) : i.create({ ...a, ...s });
}
var ZD = KD, e0 = (e, t, n) => {
  if (!(e && t == null)) {
    if (t.findLast) return t.findLast(n);
    for (let r = t.length - 1; r >= 0; r--) {
      let o = t[r];
      if (n(o, r, t)) return o;
    }
  }
}, yc = e0;
function bc(e, t) {
  if (!t) throw new Error("parserName is required.");
  let n = yc(!1, e, (o) => o.parsers && Object.prototype.hasOwnProperty.call(o.parsers, t));
  if (n) return n;
  let r = `Couldn't resolve parser "${t}".`;
  throw r += " Plugins must be explicitly added to the standalone bundle.", new fc(r);
}
function t0(e, t) {
  if (!t) throw new Error("astFormat is required.");
  let n = yc(!1, e, (o) => o.printers && Object.prototype.hasOwnProperty.call(o.printers, t));
  if (n) return n;
  let r = `Couldn't find plugin for AST format "${t}".`;
  throw r += " Plugins must be explicitly added to the standalone bundle.", new fc(r);
}
function wc({ plugins: e, parser: t }) {
  let n = bc(e, t);
  return xc(n, t);
}
function xc(e, t) {
  let n = e.parsers[t];
  return typeof n == "function" ? n() : n;
}
function n0(e, t) {
  let n = e.printers[t];
  return typeof n == "function" ? n() : n;
}
var Ys = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
async function r0(e, t = {}) {
  var n;
  let r = { ...e };
  if (!r.parser) if (r.filepath) {
    if (r.parser = CD(r, { physicalFile: r.filepath }), !r.parser) throw new Ps(`No parser could be inferred for file "${r.filepath}".`);
  } else throw new Ps("No parser and no file path given, couldn't infer a parser.");
  let o = hc({ plugins: e.plugins, showDeprecated: !0 }).options, a = { ...Ys, ...Object.fromEntries(o.filter((f) => f.default !== void 0).map((f) => [f.name, f.default])) }, i = bc(r.plugins, r.parser), s = await xc(i, r.parser);
  r.astFormat = s.astFormat, r.locEnd = s.locEnd, r.locStart = s.locStart;
  let l = (n = i.printers) != null && n[s.astFormat] ? i : t0(r.plugins, s.astFormat), c = await n0(l, s.astFormat);
  r.printer = c;
  let d = l.defaultOptions ? Object.fromEntries(Object.entries(l.defaultOptions).filter(([, f]) => f !== void 0)) : {}, h = { ...a, ...d };
  for (let [f, m] of Object.entries(h)) (r[f] === null || r[f] === void 0) && (r[f] = m);
  return r.parser === "json" && (r.trailingComma = "none"), ZD(r, o, { passThrough: Object.keys(Ys), ...t });
}
var nr = r0, o0 = _r(av());
async function a0(e, t) {
  let n = await wc(t), r = n.preprocess ? n.preprocess(e, t) : e;
  t.originalText = r;
  let o;
  try {
    o = await n.parse(r, t, t);
  } catch (a) {
    i0(a, e);
  }
  return { text: r, ast: o };
}
function i0(e, t) {
  let { loc: n } = e;
  if (n) {
    let r = (0, o0.codeFrameColumns)(t, n, { highlightCode: !0 });
    throw e.message += `
` + r, e.codeFrame = r, e;
  }
  throw e;
}
var Or = a0;
async function s0(e, t, n, r, o) {
  let { embeddedLanguageFormatting: a, printer: { embed: i, hasPrettierIgnore: s = () => !1, getVisitorKeys: l } } = n;
  if (!i || a !== "auto") return;
  if (i.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
  let c = Ro(i.getVisitorKeys ?? l), d = [];
  m();
  let h = e.stack;
  for (let { print: p, node: g, pathStack: D } of d) try {
    e.stack = D;
    let y = await p(f, t, e, n);
    y && o.set(g, y);
  } catch (y) {
    if (globalThis.PRETTIER_DEBUG) throw y;
  }
  e.stack = h;
  function f(p, g) {
    return l0(p, g, n, r);
  }
  function m() {
    let { node: p } = e;
    if (p === null || typeof p != "object" || s(e)) return;
    for (let D of c(p)) Array.isArray(p[D]) ? e.each(m, D) : e.call(m, D);
    let g = i(e, n);
    if (g) {
      if (typeof g == "function") {
        d.push({ print: g, node: p, pathStack: [...e.stack] });
        return;
      }
      o.set(p, g);
    }
  }
}
async function l0(e, t, n, r) {
  let o = await nr({ ...n, ...t, parentParser: n.parser, originalText: e }, { passThrough: !0 }), { ast: a } = await Or(e, o), i = await r(a, o);
  return tc(i);
}
function u0(e, t) {
  let { originalText: n, [Symbol.for("comments")]: r, locStart: o, locEnd: a, [Symbol.for("printedComments")]: i } = t, { node: s } = e, l = o(s), c = a(s);
  for (let d of r) o(d) >= l && a(d) <= c && i.add(d);
  return n.slice(l, c);
}
var c0 = u0;
async function To(e, t) {
  ({ ast: e } = await Cc(e, t));
  let n = /* @__PURE__ */ new Map(), r = new Kv(e), o = /* @__PURE__ */ new Map();
  await s0(r, i, t, To, o);
  let a = await zs(r, t, i, void 0, o);
  return gD(t), a;
  function i(l, c) {
    return l === void 0 || l === r ? s(c) : Array.isArray(l) ? r.call(() => s(c), ...l) : r.call(() => s(c), l);
  }
  function s(l) {
    let c = r.node;
    if (c == null) return "";
    let d = c && typeof c == "object" && l === void 0;
    if (d && n.has(c)) return n.get(c);
    let h = zs(r, t, i, l, o);
    return d && n.set(c, h), h;
  }
}
function zs(e, t, n, r, o) {
  var a;
  let { node: i } = e, { printer: s } = t, l;
  return (a = s.hasPrettierIgnore) != null && a.call(s, e) ? l = c0(e, t) : o.has(i) ? l = o.get(i) : l = s.print(e, t, n, r), i === t.cursorNode && (l = nc(l, (c) => [Na, c, Na])), s.printComment && (!s.willPrintOwnComments || !s.willPrintOwnComments(e, t)) && (l = pD(e, l, t)), l;
}
async function Cc(e, t) {
  let n = e.comments ?? [];
  t[Symbol.for("comments")] = n, t[Symbol.for("tokens")] = e.tokens ?? [], t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), lD(e, t);
  let { printer: { preprocess: r } } = t;
  return e = r ? await r(e, t) : e, { ast: e, comments: n };
}
function d0(e, t) {
  let { cursorOffset: n, locStart: r, locEnd: o } = t, a = Ro(t.printer.getVisitorKeys), i = (l) => r(l) <= n && o(l) >= n, s = e;
  for (let l of Zv(e, { getVisitorKeys: a, filter: i })) s = l;
  return s;
}
var f0 = d0;
function h0(e, t) {
  let { printer: { massageAstNode: n, getVisitorKeys: r } } = t;
  if (!n) return e;
  let o = Ro(r), a = n.ignoredProperties ?? /* @__PURE__ */ new Set();
  return i(e);
  function i(s, l) {
    if (!(s !== null && typeof s == "object")) return s;
    if (Array.isArray(s)) return s.map((f) => i(f, l)).filter(Boolean);
    let c = {}, d = new Set(o(s));
    for (let f in s) !Object.prototype.hasOwnProperty.call(s, f) || a.has(f) || (d.has(f) ? c[f] = i(s[f], s) : c[f] = s[f]);
    let h = n(s, c, l);
    if (h !== null) return h ?? c;
  }
}
var m0 = h0, p0 = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
function g0(e, t) {
  let n = [e.node, ...e.parentNodes], r = /* @__PURE__ */ new Set([t.node, ...t.parentNodes]);
  return n.find((o) => Ec.has(o.type) && r.has(o));
}
function Us(e) {
  let t = e.length - 1;
  for (; ; ) {
    let n = e[t];
    if ((n == null ? void 0 : n.type) === "Program" || (n == null ? void 0 : n.type) === "File") t--;
    else break;
  }
  return e.slice(0, t + 1);
}
function v0(e, t, { locStart: n, locEnd: r }) {
  let o = e.node, a = t.node;
  if (o === a) return { startNode: o, endNode: a };
  let i = n(e.node);
  for (let l of Us(t.parentNodes)) if (n(l) >= i) a = l;
  else break;
  let s = r(t.node);
  for (let l of Us(e.parentNodes)) {
    if (r(l) <= s) o = l;
    else break;
    if (o === a) break;
  }
  return { startNode: o, endNode: a };
}
function Oa(e, t, n, r, o = [], a) {
  let { locStart: i, locEnd: s } = n, l = i(e), c = s(e);
  if (!(t > c || t < l || a === "rangeEnd" && t === l || a === "rangeStart" && t === c)) {
    for (let d of Di(e, n)) {
      let h = Oa(d, t, n, r, [e, ...o], a);
      if (h) return h;
    }
    if (!r || r(e, o[0])) return { node: e, parentNodes: o };
  }
}
function D0(e, t) {
  return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
var Ec = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), y0 = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function qs(e, t, n) {
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
      return D0(t.type, n == null ? void 0 : n.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return Ec.has(t.type);
    case "graphql":
      return y0.has(t.kind);
    case "vue":
      return t.tag !== "root";
  }
  return !1;
}
function b0(e, t, n) {
  let { rangeStart: r, rangeEnd: o, locStart: a, locEnd: i } = t;
  _a.ok(o > r);
  let s = e.slice(r, o).search(/\S/), l = s === -1;
  if (!l) for (r += s; o > r && !/\S/.test(e[o - 1]); --o) ;
  let c = Oa(n, r, t, (m, p) => qs(t, m, p), [], "rangeStart"), d = l ? c : Oa(n, o, t, (m) => qs(t, m), [], "rangeEnd");
  if (!c || !d) return { rangeStart: 0, rangeEnd: 0 };
  let h, f;
  if (p0(t)) {
    let m = g0(c, d);
    h = m, f = m;
  } else ({ startNode: h, endNode: f } = v0(c, d, t));
  return { rangeStart: Math.min(a(h), a(f)), rangeEnd: Math.max(i(h), i(f)) };
}
var Fc = "\uFEFF", Gs = Symbol("cursor");
async function Sc(e, t, n = 0) {
  if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: r, text: o } = await Or(e, t);
  t.cursorOffset >= 0 && (t.cursorNode = f0(r, t));
  let a = await To(r, t);
  n > 0 && (a = ec([bn, a], n, t.tabWidth));
  let i = Oo(a, t);
  if (n > 0) {
    let l = i.formatted.trim();
    i.cursorNodeStart !== void 0 && (i.cursorNodeStart -= i.formatted.indexOf(l)), i.formatted = l + di(t.endOfLine);
  }
  let s = t[Symbol.for("comments")];
  if (t.cursorOffset >= 0) {
    let l, c, d, h, f;
    if (t.cursorNode && i.cursorNodeText ? (l = t.locStart(t.cursorNode), c = o.slice(l, t.locEnd(t.cursorNode)), d = t.cursorOffset - l, h = i.cursorNodeStart, f = i.cursorNodeText) : (l = 0, c = o, d = t.cursorOffset, h = 0, f = i.formatted), c === f) return { formatted: i.formatted, cursorOffset: h + d, comments: s };
    let m = c.split("");
    m.splice(d, 0, Gs);
    let p = f.split(""), g = (0, lv.diffArrays)(m, p), D = h;
    for (let y of g) if (y.removed) {
      if (y.value.includes(Gs)) break;
    } else D += y.count;
    return { formatted: i.formatted, cursorOffset: D, comments: s };
  }
  return { formatted: i.formatted, cursorOffset: -1, comments: s };
}
async function w0(e, t) {
  let { ast: n, text: r } = await Or(e, t), { rangeStart: o, rangeEnd: a } = b0(r, t, n), i = r.slice(o, a), s = Math.min(o, r.lastIndexOf(`
`, o) + 1), l = r.slice(s, o).match(/^\s*/)[0], c = gi(l, t.tabWidth), d = await Sc(i, { ...t, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t.cursorOffset > o && t.cursorOffset <= a ? t.cursorOffset - o : -1, endOfLine: "lf" }, c), h = d.formatted.trimEnd(), { cursorOffset: f } = t;
  f > a ? f += h.length - i.length : d.cursorOffset >= 0 && (f = d.cursorOffset + o);
  let m = r.slice(0, o) + h + r.slice(a);
  if (t.endOfLine !== "lf") {
    let p = di(t.endOfLine);
    f >= 0 && p === `\r
` && (f += Uu(m.slice(0, f), `
`)), m = Po(!1, m, `
`, p);
  }
  return { formatted: m, cursorOffset: f, comments: d.comments };
}
function sa(e, t, n) {
  return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? n : t;
}
function Xs(e, t) {
  let { cursorOffset: n, rangeStart: r, rangeEnd: o } = t;
  return n = sa(e, n, -1), r = sa(e, r, 0), o = sa(e, o, e.length), { ...t, cursorOffset: n, rangeStart: r, rangeEnd: o };
}
function Nc(e, t) {
  let { cursorOffset: n, rangeStart: r, rangeEnd: o, endOfLine: a } = Xs(e, t), i = e.charAt(0) === Fc;
  if (i && (e = e.slice(1), n--, r--, o--), a === "auto" && (a = uv(e)), e.includes("\r")) {
    let s = (l) => Uu(e.slice(0, Math.max(l, 0)), `\r
`);
    n -= s(n), r -= s(r), o -= s(o), e = cv(e);
  }
  return { hasBOM: i, text: e, options: Xs(e, { ...t, cursorOffset: n, rangeStart: r, rangeEnd: o, endOfLine: a }) };
}
async function Ks(e, t) {
  let n = await wc(t);
  return !n.hasPragma || n.hasPragma(e);
}
async function jc(e, t) {
  let { hasBOM: n, text: r, options: o } = Nc(e, await nr(t));
  if (o.rangeStart >= o.rangeEnd && r !== "" || o.requirePragma && !await Ks(r, o)) return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
  let a;
  return o.rangeStart > 0 || o.rangeEnd < r.length ? a = await w0(r, o) : (!o.requirePragma && o.insertPragma && o.printer.insertPragma && !await Ks(r, o) && (r = o.printer.insertPragma(r)), a = await Sc(r, o)), n && (a.formatted = Fc + a.formatted, a.cursorOffset >= 0 && a.cursorOffset++), a;
}
async function x0(e, t, n) {
  let { text: r, options: o } = Nc(e, await nr(t)), a = await Or(r, o);
  return n && (n.preprocessForPrint && (a.ast = await Cc(a.ast, o)), n.massage && (a.ast = m0(a.ast, o))), a;
}
async function C0(e, t) {
  t = await nr(t);
  let n = await To(e, t);
  return Oo(n, t);
}
async function E0(e, t) {
  let n = jv(e), { formatted: r } = await jc(n, { ...t, parser: "__js_expression" });
  return r;
}
async function F0(e, t) {
  t = await nr(t);
  let { ast: n } = await Or(e, t);
  return To(n, t);
}
async function S0(e, t) {
  return Oo(e, await nr(t));
}
var kc = {};
ko(kc, { builders: () => N0, printer: () => j0, utils: () => k0 });
var N0 = { join: Zu, line: Ju, softline: Sv, hardline: bn, literalline: Qu, group: Gu, conditionalGroup: wv, fill: Xu, lineSuffix: Sa, lineSuffixBoundary: Ev, cursor: Na, breakParent: _o, ifBreak: xv, trim: Fv, indent: ho, indentIfBreak: Cv, align: Qn, addAlignmentToDoc: ec, markAsRoot: yv, dedentToRoot: Dv, dedent: bv, hardlineWithoutBreakParent: hi, literallineWithoutBreakParent: Ku, label: Nv, concat: (e) => e }, j0 = { printDocToString: Oo }, k0 = { willBreak: Bv, traverseDoc: fi, findInDoc: pi, mapDoc: Ao, removeLines: Wv, stripTrailingHardline: tc, replaceEndOfLine: Vv, canBreak: zv }, P0 = "3.3.2", Pc = {};
ko(Pc, { addDanglingComment: () => mn, addLeadingComment: () => Hn, addTrailingComment: () => Vn, getAlignmentSize: () => gi, getIndentSize: () => M0, getMaxContinuousCount: () => L0, getNextNonSpaceNonCommentCharacter: () => $0, getNextNonSpaceNonCommentCharacterIndex: () => X0, getStringWidth: () => mi, hasNewline: () => qt, hasNewlineInRange: () => V0, hasSpaces: () => z0, isNextLineEmpty: () => Z0, isNextLineEmptyAfterIndex: () => Ci, isPreviousLineEmpty: () => J0, makeString: () => q0, skip: () => Ar, skipEverythingButNewLine: () => sc, skipInlineComment: () => bi, skipNewline: () => En, skipSpaces: () => Xt, skipToLineEnd: () => ic, skipTrailingComment: () => wi, skipWhitespace: () => eD });
function _0(e, t) {
  if (t === !1) return !1;
  if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
    for (let n = t + 2; n < e.length; ++n) if (e.charAt(n) === "*" && e.charAt(n + 1) === "/") return n + 2;
  }
  return t;
}
var bi = _0;
function A0(e, t) {
  return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? sc(e, t) : t;
}
var wi = A0;
function O0(e, t) {
  let n = null, r = t;
  for (; r !== n; ) n = r, r = Xt(e, r), r = bi(e, r), r = wi(e, r), r = En(e, r);
  return r;
}
var xi = O0;
function R0(e, t) {
  let n = null, r = t;
  for (; r !== n; ) n = r, r = ic(e, r), r = bi(e, r), r = Xt(e, r);
  return r = wi(e, r), r = En(e, r), r !== !1 && qt(e, r);
}
var Ci = R0;
function T0(e, t) {
  let n = e.lastIndexOf(`
`);
  return n === -1 ? 0 : gi(e.slice(n + 1).match(/^[\t ]*/)[0], t);
}
var M0 = T0;
function B0(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function I0(e, t) {
  let n = e.match(new RegExp(`(${B0(t)})+`, "g"));
  return n === null ? 0 : n.reduce((r, o) => Math.max(r, o.length / t.length), 0);
}
var L0 = I0;
function W0(e, t) {
  let n = xi(e, t);
  return n === !1 ? "" : e.charAt(n);
}
var $0 = W0;
function H0(e, t, n) {
  for (let r = t; r < n; ++r) if (e.charAt(r) === `
`) return !0;
  return !1;
}
var V0 = H0;
function Y0(e, t, n = {}) {
  return Xt(e, n.backwards ? t - 1 : t, n) !== t;
}
var z0 = Y0;
function U0(e, t, n) {
  let r = t === '"' ? "'" : '"', o = Po(!1, e, /\\(.)|(["'])/gs, (a, i, s) => i === r ? i : s === t ? "\\" + s : s || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(i) ? i : "\\" + i));
  return t + o + t;
}
var q0 = U0;
function G0(e, t, n) {
  return xi(e, n(t));
}
function X0(e, t) {
  return arguments.length === 2 || typeof t == "number" ? xi(e, t) : G0(...arguments);
}
function K0(e, t, n) {
  return yi(e, n(t));
}
function J0(e, t) {
  return arguments.length === 2 || typeof t == "number" ? yi(e, t) : K0(...arguments);
}
function Q0(e, t, n) {
  return Ci(e, n(t));
}
function Z0(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Ci(e, t) : Q0(...arguments);
}
function gn(e, t = 1) {
  return async (...n) => {
    let r = n[t] ?? {}, o = r.plugins ?? [];
    return n[t] = { ...r, plugins: Array.isArray(o) ? o : Object.values(o) }, e(...n);
  };
}
var _c = gn(jc);
async function Ac(e, t) {
  let { formatted: n } = await _c(e, { ...t, cursorOffset: -1 });
  return n;
}
async function ey(e, t) {
  return await Ac(e, t) === e;
}
var ty = gn(hc, 0), ny = { parse: gn(x0), formatAST: gn(C0), formatDoc: gn(E0), printToDoc: gn(F0), printDocToString: gn(S0) };
const ry = ({
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
  facilitiesSelected: h,
  cateringSelected: f,
  selectedEventPackages: m,
  totalExclVat: p
}) => {
  const [g, D] = Q(!1), y = zg("(min-width: 1024px)"), b = m.reduce((E, F) => {
    const S = F.duration;
    return E[S] || (E[S] = { ...F, quantity: 0, totalPrice: 0 }), E[S].quantity += 1, E[S].totalPrice += F.price, E;
  }, {}), w = Object.entries(b).map(([E, F]) => F), C = () => /* @__PURE__ */ u.jsxs("div", { className: " mt-4 space-y-6", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ u.jsx(xl, { className: "h-5 w-5 text-muted-foreground" }),
      /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: e ? Ot(e, "PPP") : "Pick a date" })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ u.jsx(Cl, { className: "h-5 w-5 text-muted-foreground" }),
      /* @__PURE__ */ u.jsxs("p", { className: "text-sm", children: [
        t,
        " ",
        t > 0 ? "people" : "Select Number Guests"
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ u.jsx(Da, { className: "h-5 w-5 text-muted-foreground" }),
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
        /* @__PURE__ */ u.jsx(Dn, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: "Conference system" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ u.jsx(Dn, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: "Presentation screen" })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ u.jsx(Dn, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: "Post it's & markers" })
      ] })
    ] }),
    a > 1 && m.every((E) => E) && r && t > 0 && /* @__PURE__ */ u.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ u.jsx("h4", { className: "text-sm font-bold", children: "Selected Services" }),
      w.map((E, F) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: `${E.duration} hour meeting x ${E.quantity}` }),
        /* @__PURE__ */ u.jsxs("span", { className: "text-sm", children: [
          E.totalPrice,
          "€"
        ] })
      ] }, F)),
      h.map((E, F) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ u.jsxs("span", { className: "text-sm", children: [
          `${E.title}`,
          /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: m.length > 1 ? " per day" : "" })
        ] }),
        /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: `${E.price}€` })
      ] }, F)),
      f.map((E, F) => /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ u.jsxs("span", { className: "text-sm", children: [
          `${E.name} x ${E.quantity}`,
          /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: m.length > 1 ? " per day" : "" })
        ] }),
        /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: `${E.price * E.quantity}€` })
      ] }, F)),
      a > 1 && r && t > 0 && /* @__PURE__ */ u.jsx("hr", {}),
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ u.jsx("span", { className: "text-md font-medium", children: "Total excl. VAT" }),
        /* @__PURE__ */ u.jsx("span", { className: "text-md font-medium", children: `${p}€` })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ u.jsx("span", { className: "text-xs text-muted-foreground", children: "Per person" }),
        /* @__PURE__ */ u.jsx("span", { className: "text-sm text-muted-foreground", children: `${parseFloat(p / t).toFixed(2)}€` })
      ] })
    ] })
  ] });
  return y ? /* @__PURE__ */ u.jsx("div", { className: "w-1/4 p-8 bg-gray-50 overflow-visible mt-0 rounded-md", children: /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col sticky top-10 space-x-2", children: [
    /* @__PURE__ */ u.jsx("h3", { className: "text-lg font-bold", children: "Overview" }),
    /* @__PURE__ */ u.jsx(C, {})
  ] }) }) : /* @__PURE__ */ u.jsxs(wu, { open: g, onOpenChange: D, children: [
    /* @__PURE__ */ u.jsx("div", { className: "h-fit inset-x-0 z-[40] m-0 flex items-center h-auto flex-col rounded-t-[10px] border bg-background", children: /* @__PURE__ */ u.jsxs("div", { className: "w-full flex flex-row items-center justify-between p-2", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2 bg-gray-50 rounded-full p-1 px-2 text-primary", onClick: () => D(!0), children: [
        /* @__PURE__ */ u.jsx("span", { className: "text-sm text-muted-foreground font-medium", children: "Overview" }),
        /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center bg-gray-100 h-8 w-8 rounded-full m-1", children: /* @__PURE__ */ u.jsx(Ah, { className: "h-8 w-8 text-primary" }) })
      ] }),
      a === 1 && /* @__PURE__ */ u.jsx(we, { className: "ml-auto", disabled: !s(), onClick: () => l() && s() && i(2), children: "Add Event Options" }),
      a === 2 && /* @__PURE__ */ u.jsxs("div", { className: "relative space-x-4 flex justify-center items-center", children: [
        /* @__PURE__ */ u.jsx(we, { variant: "outline", onClick: () => i(1), children: /* @__PURE__ */ u.jsx($n, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
        /* @__PURE__ */ u.jsx(we, { className: "ml-auto", onClick: () => i(3), children: "Next" })
      ] }),
      a === 3 && /* @__PURE__ */ u.jsxs("div", { className: "flex space-x-4 items-center", children: [
        /* @__PURE__ */ u.jsx(we, { variant: "outline", onClick: () => i(2), children: /* @__PURE__ */ u.jsx($n, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
        /* @__PURE__ */ u.jsxs(we, { onClick: () => d() && c() && handleSubmit(), children: [
          "Request Proposal ",
          /* @__PURE__ */ u.jsx(xr, { className: "ml-2 h-5 w-5 text-white" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ u.jsx(Cu, { className: "block lg:hidden", children: /* @__PURE__ */ u.jsxs("div", { className: "h-[95%] p-4 lg:p-0 w-full flex flex-col fixed", children: [
      /* @__PURE__ */ u.jsx(Eu, { children: /* @__PURE__ */ u.jsx(Fu, { children: "Event Overview" }) }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-between justify-start h-full overflow-y-auto", children: [
        /* @__PURE__ */ u.jsx(C, {}),
        a === 1 && /* @__PURE__ */ u.jsx(we, { className: "w-full mt-auto", disabled: !s(), onClick: () => {
          i(2), D(!1);
        }, children: "Add Event Options" }),
        a === 2 && /* @__PURE__ */ u.jsxs("div", { className: "relative mt-12 space-x-4 flex justify-center items-center", children: [
          /* @__PURE__ */ u.jsx(we, { variant: "outline", onClick: () => {
            i(1), D(!1);
          }, children: /* @__PURE__ */ u.jsx($n, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
          /* @__PURE__ */ u.jsx(we, { className: "ml-auto w-full", onClick: () => {
            i(3), D(!1);
          }, children: "Next" })
        ] }),
        a === 3 && /* @__PURE__ */ u.jsxs("div", { className: "relative mt-12 space-x-4 flex justify-center items-cente", children: [
          /* @__PURE__ */ u.jsx(we, { variant: "outline", onClick: () => {
            i(2), D(!1);
          }, children: /* @__PURE__ */ u.jsx($n, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
          /* @__PURE__ */ u.jsxs(we, { className: "w-full", disabled: !c(), children: [
            "Request Proposal ",
            /* @__PURE__ */ u.jsx(xr, { className: "ml-2 h-5 w-5 text-white" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
var oy = "Label", Oc = v.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
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
Oc.displayName = oy;
var Rc = Oc;
const ay = pl(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), pn = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(Rc, { ref: n, className: K(ay(), e), ...t }));
pn.displayName = Rc.displayName;
const lt = v.forwardRef(({ className: e, type: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  "input",
  {
    type: t,
    className: K(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: r,
    ...n
  }
));
lt.displayName = "Input";
function Ei(e) {
  const t = v.useRef({ value: e, previous: e });
  return v.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Fi(e) {
  const [t, n] = v.useState(void 0);
  return We(() => {
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
var Si = "Switch", [iy, wC] = Qt(Si), [sy, ly] = iy(Si), Tc = v.forwardRef(
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
    } = e, [h, f] = v.useState(null), m = le(t, (b) => f(b)), p = v.useRef(!1), g = h ? !!h.closest("form") : !0, [D = !1, y] = Xn({
      prop: o,
      defaultProp: a,
      onChange: c
    });
    return /* @__PURE__ */ u.jsxs(sy, { scope: n, checked: D, disabled: s, children: [
      /* @__PURE__ */ u.jsx(
        ne.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": D,
          "aria-required": i,
          "data-state": Ic(D),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...d,
          ref: m,
          onClick: ee(e.onClick, (b) => {
            y((w) => !w), g && (p.current = b.isPropagationStopped(), p.current || b.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ u.jsx(
        uy,
        {
          control: h,
          bubbles: !p.current,
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
Tc.displayName = Si;
var Mc = "SwitchThumb", Bc = v.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = ly(Mc, n);
    return /* @__PURE__ */ u.jsx(
      ne.span,
      {
        "data-state": Ic(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Bc.displayName = Mc;
var uy = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = v.useRef(null), i = Ei(n), s = Fi(t);
  return v.useEffect(() => {
    const l = a.current, c = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(c, "checked").set;
    if (i !== n && h) {
      const f = new Event("click", { bubbles: r });
      h.call(l, n), l.dispatchEvent(f);
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
function Ic(e) {
  return e ? "checked" : "unchecked";
}
var Lc = Tc, cy = Bc;
const Wc = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Lc,
  {
    className: K(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ u.jsx(
      cy,
      {
        className: K(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Wc.displayName = Lc.displayName;
const Rr = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    className: K("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
  }
));
Rr.displayName = "Card";
const dy = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    className: K("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
dy.displayName = "CardHeader";
const fy = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "h3",
  {
    ref: n,
    className: K("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
  }
));
fy.displayName = "CardTitle";
const hy = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "p",
  {
    ref: n,
    className: K("text-sm text-muted-foreground", e),
    ...t
  }
));
hy.displayName = "CardDescription";
const Tr = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx("div", { ref: n, className: K("p-6 pt-0", e), ...t }));
Tr.displayName = "CardContent";
const my = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: n,
    className: K("flex items-center p-6 pt-0", e),
    ...t
  }
));
my.displayName = "CardFooter";
function Js({ title: e, id: t, description: n, onClick: r, isSelected: o, noneSelected: a, isDisabled: i }) {
  return /* @__PURE__ */ u.jsx(Rr, { className: K(
    "relative hover:opacity-[1] bg-gray-50",
    o ? "border-primary" : a ? "" : "opacity-[0.5]",
    i ? "cursor-not-allowed opacity-[0.5] hover:opacity-[0.5]" : ""
  ), children: /* @__PURE__ */ u.jsxs(Tr, { className: "p-6", children: [
    /* @__PURE__ */ u.jsx("h4", { className: "text-lg font-bold", children: e }),
    /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: n }),
    /* @__PURE__ */ u.jsxs(we, { className: "mt-4 outline-none", disabled: i, onClick: r, children: [
      /* @__PURE__ */ u.jsx("span", { className: o && "hidden", children: "Choose" }),
      /* @__PURE__ */ u.jsx("div", { className: `${!o && "hidden"} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`, children: /* @__PURE__ */ u.jsx(Dn, { className: "h-4 w-4 text-white " }) })
    ] })
  ] }) });
}
function py({
  isSelected: e,
  venue_name: t,
  venue_description: n,
  image_url: r,
  capacity: o,
  area: a,
  onClick: i
}) {
  return /* @__PURE__ */ u.jsx(
    Rr,
    {
      className: K("relative bg-gray-50 border-2 shadow-md border-transparent hover:border-primary hover:cursor-pointer", e && "border-primary"),
      onClick: i,
      children: /* @__PURE__ */ u.jsxs(Tr, { className: "p-6", children: [
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
          /* @__PURE__ */ u.jsx(Cl, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ u.jsxs("p", { className: "text-sm", children: [
            "up to ",
            o,
            " people"
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [
          /* @__PURE__ */ u.jsx(jh, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: `${a} m^2` })
        ] }),
        /* @__PURE__ */ u.jsxs(we, { className: "mt-4 outline-none", onClick: i, children: [
          /* @__PURE__ */ u.jsx("span", { className: e && "hidden", children: "Choose" }),
          /* @__PURE__ */ u.jsx("div", { className: `${!e && "hidden"} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`, children: /* @__PURE__ */ u.jsx(Dn, { className: "h-4 w-4 text-white " }) })
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
const gy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $c = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vy = {
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
const Dy = Ha(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, l) => ha(
    "svg",
    {
      ref: l,
      ...vy,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: $c("lucide", o),
      ...s
    },
    [
      ...i.map(([c, d]) => ha(c, d)),
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
const Mr = (e, t) => {
  const n = Ha(
    ({ className: r, ...o }, a) => ha(Dy, {
      ref: a,
      iconNode: t,
      className: $c(`lucide-${gy(e)}`, r),
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
const Hc = Mr("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vc = Mr("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = Mr("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const by = Mr("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = Mr("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
var Y = function() {
  return Y = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Y.apply(this, arguments);
};
function xy(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Yc(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Br(e) {
  return e.mode === "multiple";
}
function Ir(e) {
  return e.mode === "range";
}
function Mo(e) {
  return e.mode === "single";
}
var Cy = {
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
function Ey(e, t) {
  return Ot(e, "LLLL y", t);
}
function Fy(e, t) {
  return Ot(e, "d", t);
}
function Sy(e, t) {
  return Ot(e, "LLLL", t);
}
function Ny(e) {
  return "".concat(e);
}
function jy(e, t) {
  return Ot(e, "cccccc", t);
}
function ky(e, t) {
  return Ot(e, "yyyy", t);
}
var Py = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Ey,
  formatDay: Fy,
  formatMonthCaption: Sy,
  formatWeekNumber: Ny,
  formatWeekdayName: jy,
  formatYearCaption: ky
}), _y = function(e, t, n) {
  return Ot(e, "do MMMM (EEEE)", n);
}, Ay = function() {
  return "Month: ";
}, Oy = function() {
  return "Go to next month";
}, Ry = function() {
  return "Go to previous month";
}, Ty = function(e, t) {
  return Ot(e, "cccc", t);
}, My = function(e) {
  return "Week n. ".concat(e);
}, By = function() {
  return "Year: ";
}, Iy = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: _y,
  labelMonthDropdown: Ay,
  labelNext: Oy,
  labelPrevious: Ry,
  labelWeekNumber: My,
  labelWeekday: Ty,
  labelYearDropdown: By
});
function Ly() {
  var e = "buttons", t = Cy, n = Nl, r = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Py,
    labels: Iy,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function Wy(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return r ? a = Ge(r) : t && (a = new Date(t, 0, 1)), o ? i = Ua(o) : n && (i = new Date(n, 11, 31)), {
    fromDate: a ? Gn(a) : void 0,
    toDate: i ? Gn(i) : void 0
  };
}
var zc = Nn(void 0);
function $y(e) {
  var t, n = e.initialProps, r = Ly(), o = Wy(n), a = o.fromDate, i = o.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var l;
  (Mo(n) || Br(n) || Ir(n)) && (l = n.onSelect);
  var c = Y(Y(Y({}, r), n), { captionLayout: s, classNames: Y(Y({}, r.classNames), n.classNames), components: Y({}, n.components), formatters: Y(Y({}, r.formatters), n.formatters), fromDate: a, labels: Y(Y({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Y(Y({}, r.modifiers), n.modifiers), modifiersClassNames: Y(Y({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: l, styles: Y(Y({}, r.styles), n.styles), toDate: i });
  return u.jsx(zc.Provider, { value: c, children: e.children });
}
function De() {
  var e = jn(zc);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Uc(e) {
  var t = De(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return u.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function Hy(e) {
  return u.jsx("svg", Y({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: u.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function qc(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, l = e.style, c = De(), d = (n = (t = c.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Hy;
  return u.jsxs("div", { className: s, style: l, children: [u.jsx("span", { className: c.classNames.vhidden, children: e["aria-label"] }), u.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: c.classNames.dropdown, style: c.styles.dropdown, value: o, onChange: r, children: a }), u.jsxs("div", { className: c.classNames.caption_label, style: c.styles.caption_label, "aria-hidden": "true", children: [i, u.jsx(d, { className: c.classNames.dropdown_icon, style: c.styles.dropdown_icon })] })] });
}
function Vy(e) {
  var t, n = De(), r = n.fromDate, o = n.toDate, a = n.styles, i = n.locale, s = n.formatters.formatMonthCaption, l = n.classNames, c = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return u.jsx(u.Fragment, {});
  if (!o)
    return u.jsx(u.Fragment, {});
  var h = [];
  if (Wm(r, o))
    for (var f = Ge(r), m = r.getMonth(); m <= o.getMonth(); m++)
      h.push(zo(f, m));
  else
    for (var f = Ge(/* @__PURE__ */ new Date()), m = 0; m <= 11; m++)
      h.push(zo(f, m));
  var p = function(D) {
    var y = Number(D.target.value), b = zo(Ge(e.displayMonth), y);
    e.onChange(b);
  }, g = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : qc;
  return u.jsx(g, { name: "months", "aria-label": d(), className: l.dropdown_month, style: a.dropdown_month, onChange: p, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: h.map(function(D) {
    return u.jsx("option", { value: D.getMonth(), children: s(D, { locale: i }) }, D.getMonth());
  }) });
}
function Yy(e) {
  var t, n = e.displayMonth, r = De(), o = r.fromDate, a = r.toDate, i = r.locale, s = r.styles, l = r.classNames, c = r.components, d = r.formatters.formatYearCaption, h = r.labels.labelYearDropdown, f = [];
  if (!o)
    return u.jsx(u.Fragment, {});
  if (!a)
    return u.jsx(u.Fragment, {});
  for (var m = o.getFullYear(), p = a.getFullYear(), g = m; g <= p; g++)
    f.push(ls(Fl(/* @__PURE__ */ new Date()), g));
  var D = function(b) {
    var w = ls(Ge(n), Number(b.target.value));
    e.onChange(w);
  }, y = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : qc;
  return u.jsx(y, { name: "years", "aria-label": h(), className: l.dropdown_year, style: s.dropdown_year, onChange: D, value: n.getFullYear(), caption: d(n, { locale: i }), children: f.map(function(b) {
    return u.jsx("option", { value: b.getFullYear(), children: d(b, { locale: i }) }, b.getFullYear());
  }) });
}
function zy(e, t) {
  var n = Q(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function Uy(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, l = s === void 0 ? 1 : s;
  if (a && Fr(a, o) < 0) {
    var c = -1 * (l - 1);
    o = ut(a, c);
  }
  return i && Fr(o, i) < 0 && (o = i), Ge(o);
}
function qy() {
  var e = De(), t = Uy(e), n = zy(t, e.month), r = n[0], o = n[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var l = Ge(i);
      o(l), (s = e.onMonthChange) === null || s === void 0 || s.call(e, l);
    }
  };
  return [r, a];
}
function Gy(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Ge(e), a = Ge(ut(o, r)), i = Fr(a, o), s = [], l = 0; l < i; l++) {
    var c = ut(o, l);
    s.push(c);
  }
  return n && (s = s.reverse()), s;
}
function Xy(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Ge(e);
    if (!n)
      return ut(s, i);
    var l = Fr(n, e);
    if (!(l < a))
      return ut(s, i);
  }
}
function Ky(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Ge(e);
    if (!n)
      return ut(s, -i);
    var l = Fr(s, n);
    if (!(l <= 0))
      return ut(s, -i);
  }
}
var Gc = Nn(void 0);
function Jy(e) {
  var t = De(), n = qy(), r = n[0], o = n[1], a = Gy(r, t), i = Xy(r, t), s = Ky(r, t), l = function(h) {
    return a.some(function(f) {
      return Ga(h, f);
    });
  }, c = function(h, f) {
    l(h) || (f && Al(h, f) ? o(ut(h, 1 + t.numberOfMonths * -1)) : o(h));
  }, d = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: c,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: l
  };
  return u.jsx(Gc.Provider, { value: d, children: e.children });
}
function Lr() {
  var e = jn(Gc);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Qs(e) {
  var t, n = De(), r = n.classNames, o = n.styles, a = n.components, i = Lr().goToMonth, s = function(d) {
    i(ut(d, e.displayIndex ? -e.displayIndex : 0));
  }, l = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Uc, c = u.jsx(l, { id: e.id, displayMonth: e.displayMonth });
  return u.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [u.jsx("div", { className: r.vhidden, children: c }), u.jsx(Vy, { onChange: s, displayMonth: e.displayMonth }), u.jsx(Yy, { onChange: s, displayMonth: e.displayMonth })] });
}
function Qy(e) {
  return u.jsx("svg", Y({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Zy(e) {
  return u.jsx("svg", Y({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: u.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var mo = Ha(function(e, t) {
  var n = De(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = Y(Y({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), u.jsx("button", Y({}, e, { ref: t, type: "button", className: i, style: s }));
});
function eb(e) {
  var t, n, r = De(), o = r.dir, a = r.locale, i = r.classNames, s = r.styles, l = r.labels, c = l.labelPrevious, d = l.labelNext, h = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return u.jsx(u.Fragment, {});
  var f = c(e.previousMonth, { locale: a }), m = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), p = d(e.nextMonth, { locale: a }), g = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), D = (t = h == null ? void 0 : h.IconRight) !== null && t !== void 0 ? t : Zy, y = (n = h == null ? void 0 : h.IconLeft) !== null && n !== void 0 ? n : Qy;
  return u.jsxs("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && u.jsx(mo, { name: "previous-month", "aria-label": f, className: m, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? u.jsx(D, { className: i.nav_icon, style: s.nav_icon }) : u.jsx(y, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && u.jsx(mo, { name: "next-month", "aria-label": p, className: g, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? u.jsx(y, { className: i.nav_icon, style: s.nav_icon }) : u.jsx(D, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function Zs(e) {
  var t = De().numberOfMonths, n = Lr(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, i = n.displayMonths, s = i.findIndex(function(p) {
    return Ga(e.displayMonth, p);
  }), l = s === 0, c = s === i.length - 1, d = t > 1 && (l || !c), h = t > 1 && (c || !l), f = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return u.jsx(eb, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: h, nextMonth: o, previousMonth: r, onPreviousClick: f, onNextClick: m });
}
function tb(e) {
  var t, n = De(), r = n.classNames, o = n.disableNavigation, a = n.styles, i = n.captionLayout, s = n.components, l = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : Uc, c;
  return o ? c = u.jsx(l, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? c = u.jsx(Qs, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? c = u.jsxs(u.Fragment, { children: [u.jsx(Qs, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), u.jsx(Zs, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : c = u.jsxs(u.Fragment, { children: [u.jsx(l, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(Zs, { displayMonth: e.displayMonth, id: e.id })] }), u.jsx("div", { className: r.caption, style: a.caption, children: c });
}
function nb(e) {
  var t = De(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? u.jsx("tfoot", { className: o, style: r.tfoot, children: u.jsx("tr", { children: u.jsx("td", { colSpan: 8, children: n }) }) }) : u.jsx(u.Fragment, {});
}
function rb(e, t, n) {
  for (var r = n ? xn(/* @__PURE__ */ new Date()) : yt(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = He(r, a);
    o.push(i);
  }
  return o;
}
function ob() {
  var e = De(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, l = e.labels.labelWeekday, c = rb(o, a, i);
  return u.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && u.jsx("td", { style: n.head_cell, className: t.head_cell }), c.map(function(d, h) {
    return u.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": l(d, { locale: o }), children: s(d, { locale: o }) }, h);
  })] });
}
function ab() {
  var e, t = De(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : ob;
  return u.jsx("thead", { style: r.head, className: n.head, children: u.jsx(a, {}) });
}
function ib(e) {
  var t = De(), n = t.locale, r = t.formatters.formatDay;
  return u.jsx(u.Fragment, { children: r(e.date, { locale: n }) });
}
var Ni = Nn(void 0);
function sb(e) {
  if (!Br(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return u.jsx(Ni.Provider, { value: t, children: e.children });
  }
  return u.jsx(lb, { initialProps: e.initialProps, children: e.children });
}
function lb(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, i = function(c, d, h) {
    var f, m;
    (f = t.onDayClick) === null || f === void 0 || f.call(t, c, d, h);
    var p = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!p) {
      var g = !!(!d.selected && a && (r == null ? void 0 : r.length) === a);
      if (!g) {
        var D = r ? Yc([], r) : [];
        if (d.selected) {
          var y = D.findIndex(function(b) {
            return qe(c, b);
          });
          D.splice(y, 1);
        } else
          D.push(c);
        (m = t.onSelect) === null || m === void 0 || m.call(t, D, c, d, h);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(c) {
    var d = a && r.length > a - 1, h = r.some(function(f) {
      return qe(f, c);
    });
    return !!(d && !h);
  });
  var l = {
    selected: r,
    onDayClick: i,
    modifiers: s
  };
  return u.jsx(Ni.Provider, { value: l, children: n });
}
function ji() {
  var e = jn(Ni);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function ub(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? qe(o, e) && qe(r, e) ? void 0 : qe(o, e) ? { from: o, to: void 0 } : qe(r, e) ? void 0 : ba(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? ba(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? Al(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var ki = Nn(void 0);
function cb(e) {
  if (!Ir(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return u.jsx(ki.Provider, { value: t, children: e.children });
  }
  return u.jsx(db, { initialProps: e.initialProps, children: e.children });
}
function db(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, i = o.to, s = t.min, l = t.max, c = function(m, p, g) {
    var D, y;
    (D = t.onDayClick) === null || D === void 0 || D.call(t, m, p, g);
    var b = ub(m, r);
    (y = t.onSelect) === null || y === void 0 || y.call(t, b, m, p, g);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (d.range_start = [a], i ? (d.range_end = [i], qe(a, i) || (d.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : d.range_end = [a]) : i && (d.range_start = [i], d.range_end = [i]), s && (a && !i && d.disabled.push({
    after: Yo(a, s - 1),
    before: He(a, s - 1)
  }), a && i && d.disabled.push({
    after: a,
    before: He(a, s - 1)
  }), !a && i && d.disabled.push({
    after: Yo(i, s - 1),
    before: He(i, s - 1)
  })), l) {
    if (a && !i && (d.disabled.push({
      before: He(a, -l + 1)
    }), d.disabled.push({
      after: He(a, l - 1)
    })), a && i) {
      var h = vt(i, a) + 1, f = l - h;
      d.disabled.push({
        before: Yo(a, f)
      }), d.disabled.push({
        after: He(i, f)
      });
    }
    !a && i && (d.disabled.push({
      before: He(i, -l + 1)
    }), d.disabled.push({
      after: He(i, l - 1)
    }));
  }
  return u.jsx(ki.Provider, { value: { selected: r, onDayClick: c, modifiers: d }, children: n });
}
function Pi() {
  var e = jn(ki);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function io(e) {
  return Array.isArray(e) ? Yc([], e) : e !== void 0 ? [e] : [];
}
function fb(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = io(o);
  }), t;
}
var ct;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(ct || (ct = {}));
var hb = ct.Selected, St = ct.Disabled, mb = ct.Hidden, pb = ct.Today, la = ct.RangeEnd, ua = ct.RangeMiddle, ca = ct.RangeStart, gb = ct.Outside;
function vb(e, t, n) {
  var r, o = (r = {}, r[hb] = io(e.selected), r[St] = io(e.disabled), r[mb] = io(e.hidden), r[pb] = [e.today], r[la] = [], r[ua] = [], r[ca] = [], r[gb] = [], r);
  return e.fromDate && o[St].push({ before: e.fromDate }), e.toDate && o[St].push({ after: e.toDate }), Br(e) ? o[St] = o[St].concat(t.modifiers[St]) : Ir(e) && (o[St] = o[St].concat(n.modifiers[St]), o[ca] = n.modifiers[ca], o[ua] = n.modifiers[ua], o[la] = n.modifiers[la]), o;
}
var Xc = Nn(void 0);
function Db(e) {
  var t = De(), n = ji(), r = Pi(), o = vb(t, n, r), a = fb(t.modifiers), i = Y(Y({}, o), a);
  return u.jsx(Xc.Provider, { value: i, children: e.children });
}
function Kc() {
  var e = jn(Xc);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function yb(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function bb(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function wb(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function xb(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Cb(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Eb(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = vt(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var i = vt(e, r) >= 0 && vt(o, e) >= 0;
    return i;
  }
  return o ? qe(o, e) : r ? qe(r, e) : !1;
}
function Fb(e) {
  return za(e);
}
function Sb(e) {
  return Array.isArray(e) && e.every(za);
}
function Nb(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (Fb(n))
      return qe(e, n);
    if (Sb(n))
      return n.includes(e);
    if (bb(n))
      return Eb(e, n);
    if (Cb(n))
      return n.dayOfWeek.includes(e.getDay());
    if (yb(n)) {
      var r = vt(n.before, e), o = vt(n.after, e), a = r > 0, i = o < 0, s = ba(n.before, n.after);
      return s ? i && a : a || i;
    }
    return wb(n) ? vt(e, n.after) > 0 : xb(n) ? vt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function _i(e, t, n) {
  var r = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return Nb(e, s) && a.push(i), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Ga(e, n) && (o.outside = !0), o;
}
function jb(e, t) {
  for (var n = Ge(e[0]), r = Ua(e[e.length - 1]), o, a, i = n; i <= r; ) {
    var s = _i(i, t), l = !s.disabled && !s.hidden;
    if (!l) {
      i = He(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), o || (o = i), i = He(i, 1);
  }
  return a || o;
}
var kb = 365;
function Jc(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, l = o.weekStartsOn, c = o.fromDate, d = o.toDate, h = o.locale, f = {
    day: He,
    week: ya,
    month: ut,
    year: Mh,
    startOfWeek: function(D) {
      return o.ISOWeek ? xn(D) : yt(D, { locale: h, weekStartsOn: l });
    },
    endOfWeek: function(D) {
      return o.ISOWeek ? Sl(D) : qa(D, { locale: h, weekStartsOn: l });
    }
  }, m = f[n](e, r === "after" ? 1 : -1);
  r === "before" && c ? m = Bh([c, m]) : r === "after" && d && (m = Ih([d, m]));
  var p = !0;
  if (a) {
    var g = _i(m, a);
    p = !g.disabled && !g.hidden;
  }
  return p ? m : s.count > kb ? s.lastFocused : Jc(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Y(Y({}, s), { count: s.count + 1 })
  });
}
var Qc = Nn(void 0);
function Pb(e) {
  var t = Lr(), n = Kc(), r = Q(), o = r[0], a = r[1], i = Q(), s = i[0], l = i[1], c = jb(t.displayMonths, n), d = o ?? (s && t.isDateDisplayed(s)) ? s : c, h = function() {
    l(o), a(void 0);
  }, f = function(D) {
    a(D);
  }, m = De(), p = function(D, y) {
    if (o) {
      var b = Jc(o, {
        moveBy: D,
        direction: y,
        context: m,
        modifiers: n
      });
      qe(o, b) || (t.goToDate(b, o), f(b));
    }
  }, g = {
    focusedDay: o,
    focusTarget: d,
    blur: h,
    focus: f,
    focusDayAfter: function() {
      return p("day", "after");
    },
    focusDayBefore: function() {
      return p("day", "before");
    },
    focusWeekAfter: function() {
      return p("week", "after");
    },
    focusWeekBefore: function() {
      return p("week", "before");
    },
    focusMonthBefore: function() {
      return p("month", "before");
    },
    focusMonthAfter: function() {
      return p("month", "after");
    },
    focusYearBefore: function() {
      return p("year", "before");
    },
    focusYearAfter: function() {
      return p("year", "after");
    },
    focusStartOfWeek: function() {
      return p("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return p("endOfWeek", "after");
    }
  };
  return u.jsx(Qc.Provider, { value: g, children: e.children });
}
function Ai() {
  var e = jn(Qc);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function _b(e, t) {
  var n = Kc(), r = _i(e, n, t);
  return r;
}
var Oi = Nn(void 0);
function Ab(e) {
  if (!Mo(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return u.jsx(Oi.Provider, { value: t, children: e.children });
  }
  return u.jsx(Ob, { initialProps: e.initialProps, children: e.children });
}
function Ob(e) {
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
  return u.jsx(Oi.Provider, { value: o, children: n });
}
function Zc() {
  var e = jn(Oi);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function Rb(e, t) {
  var n = De(), r = Zc(), o = ji(), a = Pi(), i = Ai(), s = i.focusDayAfter, l = i.focusDayBefore, c = i.focusWeekAfter, d = i.focusWeekBefore, h = i.blur, f = i.focus, m = i.focusMonthBefore, p = i.focusMonthAfter, g = i.focusYearBefore, D = i.focusYearAfter, y = i.focusStartOfWeek, b = i.focusEndOfWeek, w = function(k) {
    var O, J, fe, se;
    Mo(n) ? (O = r.onDayClick) === null || O === void 0 || O.call(r, e, t, k) : Br(n) ? (J = o.onDayClick) === null || J === void 0 || J.call(o, e, t, k) : Ir(n) ? (fe = a.onDayClick) === null || fe === void 0 || fe.call(a, e, t, k) : (se = n.onDayClick) === null || se === void 0 || se.call(n, e, t, k);
  }, C = function(k) {
    var O;
    f(e), (O = n.onDayFocus) === null || O === void 0 || O.call(n, e, t, k);
  }, E = function(k) {
    var O;
    h(), (O = n.onDayBlur) === null || O === void 0 || O.call(n, e, t, k);
  }, F = function(k) {
    var O;
    (O = n.onDayMouseEnter) === null || O === void 0 || O.call(n, e, t, k);
  }, S = function(k) {
    var O;
    (O = n.onDayMouseLeave) === null || O === void 0 || O.call(n, e, t, k);
  }, _ = function(k) {
    var O;
    (O = n.onDayPointerEnter) === null || O === void 0 || O.call(n, e, t, k);
  }, N = function(k) {
    var O;
    (O = n.onDayPointerLeave) === null || O === void 0 || O.call(n, e, t, k);
  }, j = function(k) {
    var O;
    (O = n.onDayTouchCancel) === null || O === void 0 || O.call(n, e, t, k);
  }, B = function(k) {
    var O;
    (O = n.onDayTouchEnd) === null || O === void 0 || O.call(n, e, t, k);
  }, P = function(k) {
    var O;
    (O = n.onDayTouchMove) === null || O === void 0 || O.call(n, e, t, k);
  }, T = function(k) {
    var O;
    (O = n.onDayTouchStart) === null || O === void 0 || O.call(n, e, t, k);
  }, L = function(k) {
    var O;
    (O = n.onDayKeyUp) === null || O === void 0 || O.call(n, e, t, k);
  }, W = function(k) {
    var O;
    switch (k.key) {
      case "ArrowLeft":
        k.preventDefault(), k.stopPropagation(), n.dir === "rtl" ? s() : l();
        break;
      case "ArrowRight":
        k.preventDefault(), k.stopPropagation(), n.dir === "rtl" ? l() : s();
        break;
      case "ArrowDown":
        k.preventDefault(), k.stopPropagation(), c();
        break;
      case "ArrowUp":
        k.preventDefault(), k.stopPropagation(), d();
        break;
      case "PageUp":
        k.preventDefault(), k.stopPropagation(), k.shiftKey ? g() : m();
        break;
      case "PageDown":
        k.preventDefault(), k.stopPropagation(), k.shiftKey ? D() : p();
        break;
      case "Home":
        k.preventDefault(), k.stopPropagation(), y();
        break;
      case "End":
        k.preventDefault(), k.stopPropagation(), b();
        break;
    }
    (O = n.onDayKeyDown) === null || O === void 0 || O.call(n, e, t, k);
  }, H = {
    onClick: w,
    onFocus: C,
    onBlur: E,
    onKeyDown: W,
    onKeyUp: L,
    onMouseEnter: F,
    onMouseLeave: S,
    onPointerEnter: _,
    onPointerLeave: N,
    onTouchCancel: j,
    onTouchEnd: B,
    onTouchMove: P,
    onTouchStart: T
  };
  return H;
}
function Tb() {
  var e = De(), t = Zc(), n = ji(), r = Pi(), o = Mo(e) ? t.selected : Br(e) ? n.selected : Ir(e) ? r.selected : void 0;
  return o;
}
function Mb(e) {
  return Object.values(ct).includes(e);
}
function Bb(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (Mb(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function Ib(e, t) {
  var n = Y({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Y(Y({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function Lb(e, t, n) {
  var r, o, a, i = De(), s = Ai(), l = _b(e, t), c = Rb(e, l), d = Tb(), h = !!(i.onDayClick || i.mode !== "default");
  kt(function() {
    var F;
    l.outside || s.focusedDay && h && qe(s.focusedDay, e) && ((F = n.current) === null || F === void 0 || F.focus());
  }, [
    s.focusedDay,
    e,
    n,
    h,
    l.outside
  ]);
  var f = Bb(i, l).join(" "), m = Ib(i, l), p = !!(l.outside && !i.showOutsideDays || l.hidden), g = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : ib, D = u.jsx(g, { date: e, displayMonth: t, activeModifiers: l }), y = {
    style: m,
    className: f,
    children: D,
    role: "gridcell"
  }, b = s.focusTarget && qe(s.focusTarget, e) && !l.outside, w = s.focusedDay && qe(s.focusedDay, e), C = Y(Y(Y({}, y), (r = { disabled: l.disabled, role: "gridcell" }, r["aria-selected"] = l.selected, r.tabIndex = w || b ? 0 : -1, r)), c), E = {
    isButton: h,
    isHidden: p,
    activeModifiers: l,
    selectedDays: d,
    buttonProps: C,
    divProps: y
  };
  return E;
}
function Wb(e) {
  var t = Wf(null), n = Lb(e.date, e.displayMonth, t);
  return n.isHidden ? u.jsx("div", { role: "gridcell" }) : n.isButton ? u.jsx(mo, Y({ name: "day", ref: t }, n.buttonProps)) : u.jsx("div", Y({}, n.divProps));
}
function $b(e) {
  var t = e.number, n = e.dates, r = De(), o = r.onWeekNumberClick, a = r.styles, i = r.classNames, s = r.locale, l = r.labels.labelWeekNumber, c = r.formatters.formatWeekNumber, d = c(Number(t), { locale: s });
  if (!o)
    return u.jsx("span", { className: i.weeknumber, style: a.weeknumber, children: d });
  var h = l(Number(t), { locale: s }), f = function(m) {
    o(t, n, m);
  };
  return u.jsx(mo, { name: "week-number", "aria-label": h, className: i.weeknumber, style: a.weeknumber, onClick: f, children: d });
}
function Hb(e) {
  var t, n, r = De(), o = r.styles, a = r.classNames, i = r.showWeekNumber, s = r.components, l = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : Wb, c = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : $b, d;
  return i && (d = u.jsx("td", { className: a.cell, style: o.cell, children: u.jsx(c, { number: e.weekNumber, dates: e.dates }) })), u.jsxs("tr", { className: a.row, style: o.row, children: [d, e.dates.map(function(h) {
    return u.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: u.jsx(l, { displayMonth: e.displayMonth, date: h }) }, Bm(h));
  })] });
}
function el(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Sl(t) : qa(t, n), o = n != null && n.ISOWeek ? xn(e) : yt(e, n), a = vt(r, o), i = [], s = 0; s <= a; s++)
    i.push(He(o, s));
  var l = i.reduce(function(c, d) {
    var h = n != null && n.ISOWeek ? jl(d) : Pl(d, n), f = c.find(function(m) {
      return m.weekNumber === h;
    });
    return f ? (f.dates.push(d), c) : (c.push({
      weekNumber: h,
      dates: [d]
    }), c);
  }, []);
  return l;
}
function Vb(e, t) {
  var n = el(Ge(e), Ua(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Lm(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], i = ya(a, 6 - r), s = el(ya(a, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function Yb(e) {
  var t, n, r, o = De(), a = o.locale, i = o.classNames, s = o.styles, l = o.hideHead, c = o.fixedWeeks, d = o.components, h = o.weekStartsOn, f = o.firstWeekContainsDate, m = o.ISOWeek, p = Vb(e.displayMonth, {
    useFixedWeeks: !!c,
    ISOWeek: m,
    locale: a,
    weekStartsOn: h,
    firstWeekContainsDate: f
  }), g = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : ab, D = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : Hb, y = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : nb;
  return u.jsxs("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!l && u.jsx(g, {}), u.jsx("tbody", { className: i.tbody, style: s.tbody, children: p.map(function(b) {
    return u.jsx(D, { displayMonth: e.displayMonth, dates: b.dates, weekNumber: b.weekNumber }, b.weekNumber);
  }) }), u.jsx(y, { displayMonth: e.displayMonth })] });
}
function zb() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Ub = zb() ? $a : kt, da = !1, qb = 0;
function tl() {
  return "react-day-picker-".concat(++qb);
}
function Gb(e) {
  var t, n = e ?? (da ? tl() : null), r = Q(n), o = r[0], a = r[1];
  return Ub(function() {
    o === null && a(tl());
  }, []), kt(function() {
    da === !1 && (da = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function Xb(e) {
  var t, n, r = De(), o = r.dir, a = r.classNames, i = r.styles, s = r.components, l = Lr().displayMonths, c = Gb(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, h = [a.month], f = i.month, m = e.displayIndex === 0, p = e.displayIndex === l.length - 1, g = !m && !p;
  o === "rtl" && (t = [m, p], p = t[0], m = t[1]), m && (h.push(a.caption_start), f = Y(Y({}, f), i.caption_start)), p && (h.push(a.caption_end), f = Y(Y({}, f), i.caption_end)), g && (h.push(a.caption_between), f = Y(Y({}, f), i.caption_between));
  var D = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : tb;
  return u.jsxs("div", { className: h.join(" "), style: f, children: [u.jsx(D, { id: c, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), u.jsx(Yb, { id: d, "aria-labelledby": c, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function Kb(e) {
  var t = De(), n = t.classNames, r = t.styles;
  return u.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function Jb(e) {
  var t, n, r = e.initialProps, o = De(), a = Ai(), i = Lr(), s = Q(!1), l = s[0], c = s[1];
  kt(function() {
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
  var h = Y(Y({}, o.styles.root), o.style), f = Object.keys(r).filter(function(p) {
    return p.startsWith("data-");
  }).reduce(function(p, g) {
    var D;
    return Y(Y({}, p), (D = {}, D[g] = r[g], D));
  }, {}), m = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : Kb;
  return u.jsx("div", Y({ className: d.join(" "), style: h, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, f, { children: u.jsx(m, { children: i.displayMonths.map(function(p, g) {
    return u.jsx(Xb, { displayIndex: g, displayMonth: p }, g);
  }) }) }));
}
function Qb(e) {
  var t = e.children, n = xy(e, ["children"]);
  return u.jsx($y, { initialProps: n, children: u.jsx(Jy, { children: u.jsx(Ab, { initialProps: n, children: u.jsx(sb, { initialProps: n, children: u.jsx(cb, { initialProps: n, children: u.jsx(Db, { children: u.jsx(Pb, { children: t }) }) }) }) }) }) });
}
function Zb(e) {
  return u.jsx(Qb, Y({}, e, { children: u.jsx(Jb, { initialProps: e }) }));
}
function ed({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ u.jsx(
    Zb,
    {
      showOutsideDays: n,
      className: K("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: K(
          va({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: K(
          va({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ u.jsx(yy, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ u.jsx(by, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
ed.displayName = "Calendar";
const ew = ["top", "right", "bottom", "left"], Dt = Math.min, Je = Math.max, po = Math.round, to = Math.floor, Kt = (e) => ({
  x: e,
  y: e
}), tw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, nw = {
  start: "end",
  end: "start"
};
function Ra(e, t, n) {
  return Je(e, Dt(t, n));
}
function _t(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function At(e) {
  return e.split("-")[0];
}
function rr(e) {
  return e.split("-")[1];
}
function Ri(e) {
  return e === "x" ? "y" : "x";
}
function Ti(e) {
  return e === "y" ? "height" : "width";
}
function or(e) {
  return ["top", "bottom"].includes(At(e)) ? "y" : "x";
}
function Mi(e) {
  return Ri(or(e));
}
function rw(e, t, n) {
  n === void 0 && (n = !1);
  const r = rr(e), o = Mi(e), a = Ti(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = go(i)), [i, go(i)];
}
function ow(e) {
  const t = go(e);
  return [Ta(e), t, Ta(t)];
}
function Ta(e) {
  return e.replace(/start|end/g, (t) => nw[t]);
}
function aw(e, t, n) {
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
function iw(e, t, n, r) {
  const o = rr(e);
  let a = aw(At(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Ta)))), a;
}
function go(e) {
  return e.replace(/left|right|bottom|top/g, (t) => tw[t]);
}
function sw(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function td(e) {
  return typeof e != "number" ? sw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function vo(e) {
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
function nl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = or(t), i = Mi(t), s = Ti(i), l = At(t), c = a === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: h
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: h
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (rr(t)) {
    case "start":
      m[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      m[i] += f * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const lw = async (e, t, n) => {
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
    y: h
  } = nl(c, r, l), f = r, m = {}, p = 0;
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
      y: h,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: m,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = b ?? d, h = w ?? h, m = {
      ...m,
      [D]: {
        ...m[D],
        ...C
      }
    }, E && p <= 50 && (p++, typeof E == "object" && (E.placement && (f = E.placement), E.rects && (c = E.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: h
    } = nl(c, f, l)), g = -1);
  }
  return {
    x: d,
    y: h,
    placement: f,
    strategy: o,
    middlewareData: m
  };
};
async function Sr(e, t) {
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
    elementContext: h = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = _t(t, e), p = td(m), D = s[f ? h === "floating" ? "reference" : "floating" : h], y = vo(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(D))) == null || n ? D : D.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
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
  }, E = vo(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (y.top - E.top + p.top) / C.y,
    bottom: (E.bottom - y.bottom + p.bottom) / C.y,
    left: (y.left - E.left + p.left) / C.x,
    right: (E.right - y.right + p.right) / C.x
  };
}
const uw = (e) => ({
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
    } = _t(e, t) || {};
    if (c == null)
      return {};
    const h = td(d), f = {
      x: n,
      y: r
    }, m = Mi(o), p = Ti(m), g = await i.getDimensions(c), D = m === "y", y = D ? "top" : "left", b = D ? "bottom" : "right", w = D ? "clientHeight" : "clientWidth", C = a.reference[p] + a.reference[m] - f[m] - a.floating[p], E = f[m] - a.reference[m], F = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let S = F ? F[w] : 0;
    (!S || !await (i.isElement == null ? void 0 : i.isElement(F))) && (S = s.floating[w] || a.floating[p]);
    const _ = C / 2 - E / 2, N = S / 2 - g[p] / 2 - 1, j = Dt(h[y], N), B = Dt(h[b], N), P = j, T = S - g[p] - B, L = S / 2 - g[p] / 2 + _, W = Ra(P, L, T), H = !l.arrow && rr(o) != null && L !== W && a.reference[p] / 2 - (L < P ? j : B) - g[p] / 2 < 0, k = H ? L < P ? L - P : L - T : 0;
    return {
      [m]: f[m] + k,
      data: {
        [m]: W,
        centerOffset: L - W - k,
        ...H && {
          alignmentOffset: k
        }
      },
      reset: H
    };
  }
}), cw = function(e) {
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
        crossAxis: h = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...D
      } = _t(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = At(o), b = At(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = f || (b || !g ? [go(s)] : ow(s));
      !f && p !== "none" && C.push(...iw(s, g, p, w));
      const E = [s, ...C], F = await Sr(t, D), S = [];
      let _ = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (d && S.push(F[y]), h) {
        const P = rw(o, i, w);
        S.push(F[P[0]], F[P[1]]);
      }
      if (_ = [..._, {
        placement: o,
        overflows: S
      }], !S.every((P) => P <= 0)) {
        var N, j;
        const P = (((N = a.flip) == null ? void 0 : N.index) || 0) + 1, T = E[P];
        if (T)
          return {
            data: {
              index: P,
              overflows: _
            },
            reset: {
              placement: T
            }
          };
        let L = (j = _.filter((W) => W.overflows[0] <= 0).sort((W, H) => W.overflows[1] - H.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!L)
          switch (m) {
            case "bestFit": {
              var B;
              const W = (B = _.map((H) => [H.placement, H.overflows.filter((k) => k > 0).reduce((k, O) => k + O, 0)]).sort((H, k) => H[1] - k[1])[0]) == null ? void 0 : B[0];
              W && (L = W);
              break;
            }
            case "initialPlacement":
              L = s;
              break;
          }
        if (o !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function rl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ol(e) {
  return ew.some((t) => e[t] >= 0);
}
const dw = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = _t(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Sr(t, {
            ...o,
            elementContext: "reference"
          }), i = rl(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: ol(i)
            }
          };
        }
        case "escaped": {
          const a = await Sr(t, {
            ...o,
            altBoundary: !0
          }), i = rl(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: ol(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function fw(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = At(n), s = rr(n), l = or(n) === "y", c = ["left", "top"].includes(i) ? -1 : 1, d = a && l ? -1 : 1, h = _t(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: p
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...h
  };
  return s && typeof p == "number" && (m = s === "end" ? p * -1 : p), l ? {
    x: m * d,
    y: f * c
  } : {
    x: f * c,
    y: m * d
  };
}
const hw = function(e) {
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
      } = t, l = await fw(t, e);
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
}, mw = function(e) {
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
      } = _t(e, t), c = {
        x: n,
        y: r
      }, d = await Sr(t, l), h = or(At(o)), f = Ri(h);
      let m = c[f], p = c[h];
      if (a) {
        const D = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", b = m + d[D], w = m - d[y];
        m = Ra(b, m, w);
      }
      if (i) {
        const D = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", b = p + d[D], w = p - d[y];
        p = Ra(b, p, w);
      }
      const g = s.fn({
        ...t,
        [f]: m,
        [h]: p
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
}, pw = function(e) {
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
      } = _t(e, t), d = {
        x: n,
        y: r
      }, h = or(o), f = Ri(h);
      let m = d[f], p = d[h];
      const g = _t(s, t), D = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const w = f === "y" ? "height" : "width", C = a.reference[f] - a.floating[w] + D.mainAxis, E = a.reference[f] + a.reference[w] - D.mainAxis;
        m < C ? m = C : m > E && (m = E);
      }
      if (c) {
        var y, b;
        const w = f === "y" ? "width" : "height", C = ["top", "left"].includes(At(o)), E = a.reference[h] - a.floating[w] + (C && ((y = i.offset) == null ? void 0 : y[h]) || 0) + (C ? 0 : D.crossAxis), F = a.reference[h] + a.reference[w] + (C ? 0 : ((b = i.offset) == null ? void 0 : b[h]) || 0) - (C ? D.crossAxis : 0);
        p < E ? p = E : p > F && (p = F);
      }
      return {
        [f]: m,
        [h]: p
      };
    }
  };
}, gw = function(e) {
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
      } = _t(e, t), l = await Sr(t, s), c = At(n), d = rr(n), h = or(n) === "y", {
        width: f,
        height: m
      } = r.floating;
      let p, g;
      c === "top" || c === "bottom" ? (p = c, g = d === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = c, p = d === "end" ? "top" : "bottom");
      const D = m - l.top - l.bottom, y = f - l.left - l.right, b = Dt(m - l[p], D), w = Dt(f - l[g], y), C = !t.middlewareData.shift;
      let E = b, F = w;
      if (h ? F = d || C ? Dt(w, y) : y : E = d || C ? Dt(b, D) : D, C && !d) {
        const _ = Je(l.left, 0), N = Je(l.right, 0), j = Je(l.top, 0), B = Je(l.bottom, 0);
        h ? F = f - 2 * (_ !== 0 || N !== 0 ? _ + N : Je(l.left, l.right)) : E = m - 2 * (j !== 0 || B !== 0 ? j + B : Je(l.top, l.bottom));
      }
      await i({
        ...t,
        availableWidth: F,
        availableHeight: E
      });
      const S = await o.getDimensions(a.floating);
      return f !== S.width || m !== S.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ar(e) {
  return nd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ze(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $t(e) {
  var t;
  return (t = (nd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function nd(e) {
  return e instanceof Node || e instanceof Ze(e).Node;
}
function bt(e) {
  return e instanceof Element || e instanceof Ze(e).Element;
}
function wt(e) {
  return e instanceof HTMLElement || e instanceof Ze(e).HTMLElement;
}
function al(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot;
}
function Wr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = dt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function vw(e) {
  return ["table", "td", "th"].includes(ar(e));
}
function Bi(e) {
  const t = Ii(), n = dt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Dw(e) {
  let t = Jt(e);
  for (; wt(t) && !Zn(t); ) {
    if (Bi(t))
      return t;
    t = Jt(t);
  }
  return null;
}
function Ii() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Zn(e) {
  return ["html", "body", "#document"].includes(ar(e));
}
function dt(e) {
  return Ze(e).getComputedStyle(e);
}
function Bo(e) {
  return bt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Jt(e) {
  if (ar(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    al(e) && e.host || // Fallback.
    $t(e)
  );
  return al(t) ? t.host : t;
}
function rd(e) {
  const t = Jt(e);
  return Zn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : wt(t) && Wr(t) ? t : rd(t);
}
function Nr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = rd(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Ze(o);
  return a ? t.concat(i, i.visualViewport || [], Wr(o) ? o : [], i.frameElement && n ? Nr(i.frameElement) : []) : t.concat(o, Nr(o, [], n));
}
function od(e) {
  const t = dt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = wt(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = po(n) !== a || po(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function Li(e) {
  return bt(e) ? e : e.contextElement;
}
function qn(e) {
  const t = Li(e);
  if (!wt(t))
    return Kt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = od(t);
  let i = (a ? po(n.width) : n.width) / r, s = (a ? po(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const yw = /* @__PURE__ */ Kt(0);
function ad(e) {
  const t = Ze(e);
  return !Ii() || !t.visualViewport ? yw : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function bw(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ze(e) ? !1 : t;
}
function Fn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Li(e);
  let i = Kt(1);
  t && (r ? bt(r) && (i = qn(r)) : i = qn(e));
  const s = bw(a, n, r) ? ad(a) : Kt(0);
  let l = (o.left + s.x) / i.x, c = (o.top + s.y) / i.y, d = o.width / i.x, h = o.height / i.y;
  if (a) {
    const f = Ze(a), m = r && bt(r) ? Ze(r) : r;
    let p = f, g = p.frameElement;
    for (; g && r && m !== p; ) {
      const D = qn(g), y = g.getBoundingClientRect(), b = dt(g), w = y.left + (g.clientLeft + parseFloat(b.paddingLeft)) * D.x, C = y.top + (g.clientTop + parseFloat(b.paddingTop)) * D.y;
      l *= D.x, c *= D.y, d *= D.x, h *= D.y, l += w, c += C, p = Ze(g), g = p.frameElement;
    }
  }
  return vo({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
const ww = [":popover-open", ":modal"];
function Wi(e) {
  return ww.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function xw(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = $t(r), s = t ? Wi(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Kt(1);
  const d = Kt(0), h = wt(r);
  if ((h || !h && !a) && ((ar(r) !== "body" || Wr(i)) && (l = Bo(r)), wt(r))) {
    const f = Fn(r);
    c = qn(r), d.x = f.x + r.clientLeft, d.y = f.y + r.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y
  };
}
function Cw(e) {
  return Array.from(e.getClientRects());
}
function id(e) {
  return Fn($t(e)).left + Bo(e).scrollLeft;
}
function Ew(e) {
  const t = $t(e), n = Bo(e), r = e.ownerDocument.body, o = Je(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Je(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + id(e);
  const s = -n.scrollTop;
  return dt(r).direction === "rtl" && (i += Je(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function Fw(e, t) {
  const n = Ze(e), r = $t(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const c = Ii();
    (!c || c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function Sw(e, t) {
  const n = Fn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = wt(e) ? qn(e) : Kt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, c = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function il(e, t, n) {
  let r;
  if (t === "viewport")
    r = Fw(e, n);
  else if (t === "document")
    r = Ew($t(e));
  else if (bt(t))
    r = Sw(t, n);
  else {
    const o = ad(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return vo(r);
}
function sd(e, t) {
  const n = Jt(e);
  return n === t || !bt(n) || Zn(n) ? !1 : dt(n).position === "fixed" || sd(n, t);
}
function Nw(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Nr(e, [], !1).filter((s) => bt(s) && ar(s) !== "body"), o = null;
  const a = dt(e).position === "fixed";
  let i = a ? Jt(e) : e;
  for (; bt(i) && !Zn(i); ) {
    const s = dt(i), l = Bi(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Wr(i) && !l && sd(e, i)) ? r = r.filter((d) => d !== i) : o = s, i = Jt(i);
  }
  return t.set(e, r), r;
}
function jw(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Wi(t) ? [] : Nw(t, this._c) : [].concat(n), r], s = i[0], l = i.reduce((c, d) => {
    const h = il(t, d, o);
    return c.top = Je(h.top, c.top), c.right = Dt(h.right, c.right), c.bottom = Dt(h.bottom, c.bottom), c.left = Je(h.left, c.left), c;
  }, il(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function kw(e) {
  const {
    width: t,
    height: n
  } = od(e);
  return {
    width: t,
    height: n
  };
}
function Pw(e, t, n) {
  const r = wt(t), o = $t(t), a = n === "fixed", i = Fn(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Kt(0);
  if (r || !r && !a)
    if ((ar(t) !== "body" || Wr(o)) && (s = Bo(t)), r) {
      const h = Fn(t, !0, a, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && (l.x = id(o));
  const c = i.left + s.scrollLeft - l.x, d = i.top + s.scrollTop - l.y;
  return {
    x: c,
    y: d,
    width: i.width,
    height: i.height
  };
}
function fa(e) {
  return dt(e).position === "static";
}
function sl(e, t) {
  return !wt(e) || dt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function ld(e, t) {
  const n = Ze(e);
  if (Wi(e))
    return n;
  if (!wt(e)) {
    let o = Jt(e);
    for (; o && !Zn(o); ) {
      if (bt(o) && !fa(o))
        return o;
      o = Jt(o);
    }
    return n;
  }
  let r = sl(e, t);
  for (; r && vw(r) && fa(r); )
    r = sl(r, t);
  return r && Zn(r) && fa(r) && !Bi(r) ? n : r || Dw(e) || n;
}
const _w = async function(e) {
  const t = this.getOffsetParent || ld, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Pw(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Aw(e) {
  return dt(e).direction === "rtl";
}
const Ow = {
  convertOffsetParentRelativeRectToViewportRelativeRect: xw,
  getDocumentElement: $t,
  getClippingRect: jw,
  getOffsetParent: ld,
  getElementRects: _w,
  getClientRects: Cw,
  getDimensions: kw,
  getScale: qn,
  isElement: bt,
  isRTL: Aw
};
function Rw(e, t) {
  let n = null, r;
  const o = $t(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const {
      left: c,
      top: d,
      width: h,
      height: f
    } = e.getBoundingClientRect();
    if (s || t(), !h || !f)
      return;
    const m = to(d), p = to(o.clientWidth - (c + h)), g = to(o.clientHeight - (d + f)), D = to(c), b = {
      rootMargin: -m + "px " + -p + "px " + -g + "px " + -D + "px",
      threshold: Je(0, Dt(1, l)) || 1
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
function Tw(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Li(e), d = o || a ? [...c ? Nr(c) : [], ...Nr(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const h = c && s ? Rw(c, n) : null;
  let f = -1, m = null;
  i && (m = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === c && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var w;
      (w = m) == null || w.observe(t);
    })), n();
  }), c && !l && m.observe(c), m.observe(t));
  let p, g = l ? Fn(e) : null;
  l && D();
  function D() {
    const y = Fn(e);
    g && (y.x !== g.x || y.y !== g.y || y.width !== g.width || y.height !== g.height) && n(), g = y, p = requestAnimationFrame(D);
  }
  return n(), () => {
    var y;
    d.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), h == null || h(), (y = m) == null || y.disconnect(), m = null, l && cancelAnimationFrame(p);
  };
}
const Mw = hw, Bw = mw, Iw = cw, Lw = gw, Ww = dw, ll = uw, $w = pw, Hw = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ow,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return lw(e, t, {
    ...o,
    platform: a
  });
};
var so = typeof document < "u" ? $a : kt;
function Do(e, t) {
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
        if (!Do(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Do(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ud(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ul(e, t) {
  const n = ud(e);
  return Math.round(t * n) / n;
}
function cl(e) {
  const t = v.useRef(e);
  return so(() => {
    t.current = e;
  }), t;
}
function Vw(e) {
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
  } = e, [d, h] = v.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, m] = v.useState(r);
  Do(f, r) || m(r);
  const [p, g] = v.useState(null), [D, y] = v.useState(null), b = v.useCallback((k) => {
    k !== F.current && (F.current = k, g(k));
  }, []), w = v.useCallback((k) => {
    k !== S.current && (S.current = k, y(k));
  }, []), C = a || p, E = i || D, F = v.useRef(null), S = v.useRef(null), _ = v.useRef(d), N = l != null, j = cl(l), B = cl(o), P = v.useCallback(() => {
    if (!F.current || !S.current)
      return;
    const k = {
      placement: t,
      strategy: n,
      middleware: f
    };
    B.current && (k.platform = B.current), Hw(F.current, S.current, k).then((O) => {
      const J = {
        ...O,
        isPositioned: !0
      };
      T.current && !Do(_.current, J) && (_.current = J, jr.flushSync(() => {
        h(J);
      }));
    });
  }, [f, t, n, B]);
  so(() => {
    c === !1 && _.current.isPositioned && (_.current.isPositioned = !1, h((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [c]);
  const T = v.useRef(!1);
  so(() => (T.current = !0, () => {
    T.current = !1;
  }), []), so(() => {
    if (C && (F.current = C), E && (S.current = E), C && E) {
      if (j.current)
        return j.current(C, E, P);
      P();
    }
  }, [C, E, P, j, N]);
  const L = v.useMemo(() => ({
    reference: F,
    floating: S,
    setReference: b,
    setFloating: w
  }), [b, w]), W = v.useMemo(() => ({
    reference: C,
    floating: E
  }), [C, E]), H = v.useMemo(() => {
    const k = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return k;
    const O = ul(W.floating, d.x), J = ul(W.floating, d.y);
    return s ? {
      ...k,
      transform: "translate(" + O + "px, " + J + "px)",
      ...ud(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: J
    };
  }, [n, s, W.floating, d.x, d.y]);
  return v.useMemo(() => ({
    ...d,
    update: P,
    refs: L,
    elements: W,
    floatingStyles: H
  }), [d, P, L, W, H]);
}
const Yw = (e) => {
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
      return r && t(r) ? r.current != null ? ll({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ll({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, zw = (e, t) => ({
  ...Mw(e),
  options: [e, t]
}), Uw = (e, t) => ({
  ...Bw(e),
  options: [e, t]
}), qw = (e, t) => ({
  ...$w(e),
  options: [e, t]
}), Gw = (e, t) => ({
  ...Iw(e),
  options: [e, t]
}), Xw = (e, t) => ({
  ...Lw(e),
  options: [e, t]
}), Kw = (e, t) => ({
  ...Ww(e),
  options: [e, t]
}), Jw = (e, t) => ({
  ...Yw(e),
  options: [e, t]
});
var Qw = "Arrow", cd = v.forwardRef((e, t) => {
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
cd.displayName = Qw;
var Zw = cd, $i = "Popper", [dd, Io] = Qt($i), [ex, fd] = dd($i), hd = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = v.useState(null);
  return /* @__PURE__ */ u.jsx(ex, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
hd.displayName = $i;
var md = "PopperAnchor", pd = v.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = fd(md, n), i = v.useRef(null), s = le(t, i);
    return v.useEffect(() => {
      a.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ u.jsx(ne.div, { ...o, ref: s });
  }
);
pd.displayName = md;
var Hi = "PopperContent", [tx, nx] = dd(Hi), gd = v.forwardRef(
  (e, t) => {
    var $, Z, ve, R, oe, te;
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
      sticky: h = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: p,
      ...g
    } = e, D = fd(Hi, n), [y, b] = v.useState(null), w = le(t, (Pe) => b(Pe)), [C, E] = v.useState(null), F = Fi(C), S = (F == null ? void 0 : F.width) ?? 0, _ = (F == null ? void 0 : F.height) ?? 0, N = r + (a !== "center" ? "-" + a : ""), j = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, B = Array.isArray(c) ? c : [c], P = B.length > 0, T = {
      padding: j,
      boundary: B.filter(ox),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: P
    }, { refs: L, floatingStyles: W, placement: H, isPositioned: k, middlewareData: O } = Vw({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: N,
      whileElementsMounted: (...Pe) => Tw(...Pe, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: D.anchor
      },
      middleware: [
        zw({ mainAxis: o + _, alignmentAxis: i }),
        l && Uw({
          mainAxis: !0,
          crossAxis: !1,
          limiter: h === "partial" ? qw() : void 0,
          ...T
        }),
        l && Gw({ ...T }),
        Xw({
          ...T,
          apply: ({ elements: Pe, rects: Me, availableWidth: Ae, availableHeight: Be }) => {
            const { width: tt, height: nt } = Me.reference, Ke = Pe.floating.style;
            Ke.setProperty("--radix-popper-available-width", `${Ae}px`), Ke.setProperty("--radix-popper-available-height", `${Be}px`), Ke.setProperty("--radix-popper-anchor-width", `${tt}px`), Ke.setProperty("--radix-popper-anchor-height", `${nt}px`);
          }
        }),
        C && Jw({ element: C, padding: s }),
        ax({ arrowWidth: S, arrowHeight: _ }),
        f && Kw({ strategy: "referenceHidden", ...T })
      ]
    }), [J, fe] = yd(H), se = Le(p);
    We(() => {
      k && (se == null || se());
    }, [k, se]);
    const xe = ($ = O.arrow) == null ? void 0 : $.x, Ve = (Z = O.arrow) == null ? void 0 : Z.y, _e = ((ve = O.arrow) == null ? void 0 : ve.centerOffset) !== 0, [Te, Fe] = v.useState();
    return We(() => {
      y && Fe(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: k ? W.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Te,
          "--radix-popper-transform-origin": [
            (R = O.transformOrigin) == null ? void 0 : R.x,
            (oe = O.transformOrigin) == null ? void 0 : oe.y
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
          tx,
          {
            scope: n,
            placedSide: J,
            onArrowChange: E,
            arrowX: xe,
            arrowY: Ve,
            shouldHideArrow: _e,
            children: /* @__PURE__ */ u.jsx(
              ne.div,
              {
                "data-side": J,
                "data-align": fe,
                ...g,
                ref: w,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: k ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
gd.displayName = Hi;
var vd = "PopperArrow", rx = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Dd = v.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = nx(vd, r), i = rx[a.placedSide];
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
          Zw,
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
Dd.displayName = vd;
function ox(e) {
  return e !== null;
}
var ax = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var D, y, b;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((D = o.arrow) == null ? void 0 : D.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, d] = yd(n), h = { start: "0%", center: "50%", end: "100%" }[d], f = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2, m = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let p = "", g = "";
    return c === "bottom" ? (p = i ? h : `${f}px`, g = `${-l}px`) : c === "top" ? (p = i ? h : `${f}px`, g = `${r.floating.height + l}px`) : c === "right" ? (p = `${-l}px`, g = i ? h : `${m}px`) : c === "left" && (p = `${r.floating.width + l}px`, g = i ? h : `${m}px`), { data: { x: p, y: g } };
  }
});
function yd(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var bd = hd, Vi = pd, wd = gd, xd = Dd, Yi = "Popover", [Cd, xC] = Qt(Yi, [
  Io
]), $r = Io(), [ix, en] = Cd(Yi), Ed = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = $r(t), l = v.useRef(null), [c, d] = v.useState(!1), [h = !1, f] = Xn({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ u.jsx(bd, { ...s, children: /* @__PURE__ */ u.jsx(
    ix,
    {
      scope: t,
      contentId: yn(),
      triggerRef: l,
      open: h,
      onOpenChange: f,
      onOpenToggle: v.useCallback(() => f((m) => !m), [f]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: v.useCallback(() => d(!0), []),
      onCustomAnchorRemove: v.useCallback(() => d(!1), []),
      modal: i,
      children: n
    }
  ) });
};
Ed.displayName = Yi;
var Fd = "PopoverAnchor", sx = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = en(Fd, n), a = $r(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return v.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ u.jsx(Vi, { ...a, ...r, ref: t });
  }
);
sx.displayName = Fd;
var Sd = "PopoverTrigger", Nd = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = en(Sd, n), a = $r(n), i = le(t, o.triggerRef), s = /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ad(o.open),
        ...r,
        ref: i,
        onClick: ee(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ u.jsx(Vi, { asChild: !0, ...a, children: s });
  }
);
Nd.displayName = Sd;
var zi = "PopoverPortal", [lx, ux] = Cd(zi, {
  forceMount: void 0
}), jd = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = en(zi, t);
  return /* @__PURE__ */ u.jsx(lx, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(ft, { present: n || a.open, children: /* @__PURE__ */ u.jsx(xo, { asChild: !0, container: o, children: r }) }) });
};
jd.displayName = zi;
var er = "PopoverContent", kd = v.forwardRef(
  (e, t) => {
    const n = ux(er, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = en(er, e.__scopePopover);
    return /* @__PURE__ */ u.jsx(ft, { present: r || a.open, children: a.modal ? /* @__PURE__ */ u.jsx(cx, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(dx, { ...o, ref: t }) });
  }
);
kd.displayName = er;
var cx = v.forwardRef(
  (e, t) => {
    const n = en(er, e.__scopePopover), r = v.useRef(null), o = le(t, r), a = v.useRef(!1);
    return v.useEffect(() => {
      const i = r.current;
      if (i) return Ka(i);
    }, []), /* @__PURE__ */ u.jsx(Eo, { as: Gt, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
      Pd,
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
), dx = v.forwardRef(
  (e, t) => {
    const n = en(er, e.__scopePopover), r = v.useRef(!1), o = v.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      Pd,
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
), Pd = v.forwardRef(
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
      ...h
    } = e, f = en(er, n), m = $r(n);
    return Xa(), /* @__PURE__ */ u.jsx(
      wo,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ u.jsx(
          bo,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: d,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => f.onOpenChange(!1),
            children: /* @__PURE__ */ u.jsx(
              wd,
              {
                "data-state": Ad(f.open),
                role: "dialog",
                id: f.contentId,
                ...m,
                ...h,
                ref: t,
                style: {
                  ...h.style,
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
), _d = "PopoverClose", fx = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = en(_d, n);
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
fx.displayName = _d;
var hx = "PopoverArrow", mx = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = $r(n);
    return /* @__PURE__ */ u.jsx(xd, { ...o, ...r, ref: t });
  }
);
mx.displayName = hx;
function Ad(e) {
  return e ? "open" : "closed";
}
var px = Ed, gx = Nd, vx = jd, Od = kd;
const Dx = px, yx = gx, Rd = v.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ u.jsx(vx, { children: /* @__PURE__ */ u.jsx(
  Od,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: K(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Rd.displayName = Od.displayName;
function dl({ date: e, setDate: t }) {
  return /* @__PURE__ */ u.jsxs(Dx, { children: [
    /* @__PURE__ */ u.jsx(yx, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
      we,
      {
        variant: "outline",
        className: K(
          "w-full justify-start text-left font-normal",
          !e && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ u.jsx(xl, { className: "mr-2 h-4 w-4" }),
          e ? Ot(e, "PPP") : /* @__PURE__ */ u.jsx("span", { children: "Pick a date" })
        ]
      }
    ) }),
    /* @__PURE__ */ u.jsx(Rd, { className: "w-auto p-0", align: "start", onOpenAutoFocus: (n) => n.preventDefault(), children: /* @__PURE__ */ u.jsx(
      ed,
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
function bx(e) {
  const t = e + "CollectionProvider", [n, r] = Qt(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (m) => {
    const { scope: p, children: g } = m, D = M.useRef(null), y = M.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u.jsx(o, { scope: p, itemMap: y, collectionRef: D, children: g });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", l = M.forwardRef(
    (m, p) => {
      const { scope: g, children: D } = m, y = a(s, g), b = le(p, y.collectionRef);
      return /* @__PURE__ */ u.jsx(Gt, { ref: b, children: D });
    }
  );
  l.displayName = s;
  const c = e + "CollectionItemSlot", d = "data-radix-collection-item", h = M.forwardRef(
    (m, p) => {
      const { scope: g, children: D, ...y } = m, b = M.useRef(null), w = le(p, b), C = a(c, g);
      return M.useEffect(() => (C.itemMap.set(b, { ref: b, ...y }), () => void C.itemMap.delete(b))), /* @__PURE__ */ u.jsx(Gt, { [d]: "", ref: w, children: D });
    }
  );
  h.displayName = c;
  function f(m) {
    const p = a(e + "CollectionConsumer", m);
    return M.useCallback(() => {
      const D = p.collectionRef.current;
      if (!D) return [];
      const y = Array.from(D.querySelectorAll(`[${d}]`));
      return Array.from(p.itemMap.values()).sort(
        (C, E) => y.indexOf(C.ref.current) - y.indexOf(E.ref.current)
      );
    }, [p.collectionRef, p.itemMap]);
  }
  return [
    { Provider: i, Slot: l, ItemSlot: h },
    f,
    r
  ];
}
var wx = "VisuallyHidden", Td = v.forwardRef(
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
Td.displayName = wx;
var xx = [" ", "Enter", "ArrowUp", "ArrowDown"], Cx = [" ", "Enter"], Hr = "Select", [Lo, Wo, Ex] = bx(Hr), [ir, CC] = Qt(Hr, [
  Ex,
  Io
]), $o = Io(), [Fx, tn] = ir(Hr), [Sx, Nx] = ir(Hr), Md = (e) => {
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
    autoComplete: h,
    disabled: f,
    required: m
  } = e, p = $o(t), [g, D] = v.useState(null), [y, b] = v.useState(null), [w, C] = v.useState(!1), E = Su(c), [F = !1, S] = Xn({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [_, N] = Xn({
    prop: i,
    defaultProp: s,
    onChange: l
  }), j = v.useRef(null), B = g ? !!g.closest("form") : !0, [P, T] = v.useState(/* @__PURE__ */ new Set()), L = Array.from(P).map((W) => W.props.value).join(";");
  return /* @__PURE__ */ u.jsx(bd, { ...p, children: /* @__PURE__ */ u.jsxs(
    Fx,
    {
      required: m,
      scope: t,
      trigger: g,
      onTriggerChange: D,
      valueNode: y,
      onValueNodeChange: b,
      valueNodeHasChildren: w,
      onValueNodeHasChildrenChange: C,
      contentId: yn(),
      value: _,
      onValueChange: N,
      open: F,
      onOpenChange: S,
      dir: E,
      triggerPointerDownPosRef: j,
      disabled: f,
      children: [
        /* @__PURE__ */ u.jsx(Lo.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
          Sx,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: v.useCallback((W) => {
              T((H) => new Set(H).add(W));
            }, []),
            onNativeOptionRemove: v.useCallback((W) => {
              T((H) => {
                const k = new Set(H);
                return k.delete(W), k;
              });
            }, []),
            children: n
          }
        ) }),
        B ? /* @__PURE__ */ u.jsxs(
          lf,
          {
            "aria-hidden": !0,
            required: m,
            tabIndex: -1,
            name: d,
            autoComplete: h,
            value: _,
            onChange: (W) => N(W.target.value),
            disabled: f,
            children: [
              _ === void 0 ? /* @__PURE__ */ u.jsx("option", { value: "" }) : null,
              Array.from(P)
            ]
          },
          L
        ) : null
      ]
    }
  ) });
};
Md.displayName = Hr;
var Bd = "SelectTrigger", Id = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = $o(n), i = tn(Bd, n), s = i.disabled || r, l = le(t, i.onTriggerChange), c = Wo(n), [d, h, f] = uf((p) => {
      const g = c().filter((b) => !b.disabled), D = g.find((b) => b.value === i.value), y = cf(g, p, D);
      y !== void 0 && i.onValueChange(y.value);
    }), m = () => {
      s || (i.onOpenChange(!0), f());
    };
    return /* @__PURE__ */ u.jsx(Vi, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
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
        "data-placeholder": sf(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: ee(o.onClick, (p) => {
          p.currentTarget.focus();
        }),
        onPointerDown: ee(o.onPointerDown, (p) => {
          const g = p.target;
          g.hasPointerCapture(p.pointerId) && g.releasePointerCapture(p.pointerId), p.button === 0 && p.ctrlKey === !1 && (m(), i.triggerPointerDownPosRef.current = {
            x: Math.round(p.pageX),
            y: Math.round(p.pageY)
          }, p.preventDefault());
        }),
        onKeyDown: ee(o.onKeyDown, (p) => {
          const g = d.current !== "";
          !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && h(p.key), !(g && p.key === " ") && xx.includes(p.key) && (m(), p.preventDefault());
        })
      }
    ) });
  }
);
Id.displayName = Bd;
var Ld = "SelectValue", Wd = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i = "", ...s } = e, l = tn(Ld, n), { onValueNodeHasChildrenChange: c } = l, d = a !== void 0, h = le(t, l.onValueNodeChange);
    return We(() => {
      c(d);
    }, [c, d]), /* @__PURE__ */ u.jsx(
      ne.span,
      {
        ...s,
        ref: h,
        style: { pointerEvents: "none" },
        children: sf(l.value) ? /* @__PURE__ */ u.jsx(u.Fragment, { children: i }) : a
      }
    );
  }
);
Wd.displayName = Ld;
var jx = "SelectIcon", $d = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ u.jsx(ne.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
$d.displayName = jx;
var kx = "SelectPortal", Hd = (e) => /* @__PURE__ */ u.jsx(xo, { asChild: !0, ...e });
Hd.displayName = kx;
var Sn = "SelectContent", Vd = v.forwardRef(
  (e, t) => {
    const n = tn(Sn, e.__scopeSelect), [r, o] = v.useState();
    if (We(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? jr.createPortal(
        /* @__PURE__ */ u.jsx(Yd, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx(Lo.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ u.jsx(zd, { ...e, ref: t });
  }
);
Vd.displayName = Sn;
var jt = 10, [Yd, nn] = ir(Sn), Px = "SelectContentImpl", zd = v.forwardRef(
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
      arrowPadding: h,
      collisionBoundary: f,
      collisionPadding: m,
      sticky: p,
      hideWhenDetached: g,
      avoidCollisions: D,
      //
      ...y
    } = e, b = tn(Sn, n), [w, C] = v.useState(null), [E, F] = v.useState(null), S = le(t, ($) => C($)), [_, N] = v.useState(null), [j, B] = v.useState(
      null
    ), P = Wo(n), [T, L] = v.useState(!1), W = v.useRef(!1);
    v.useEffect(() => {
      if (w) return Ka(w);
    }, [w]), Xa();
    const H = v.useCallback(
      ($) => {
        const [Z, ...ve] = P().map((te) => te.ref.current), [R] = ve.slice(-1), oe = document.activeElement;
        for (const te of $)
          if (te === oe || (te == null || te.scrollIntoView({ block: "nearest" }), te === Z && E && (E.scrollTop = 0), te === R && E && (E.scrollTop = E.scrollHeight), te == null || te.focus(), document.activeElement !== oe)) return;
      },
      [P, E]
    ), k = v.useCallback(
      () => H([_, w]),
      [H, _, w]
    );
    v.useEffect(() => {
      T && k();
    }, [T, k]);
    const { onOpenChange: O, triggerPointerDownPosRef: J } = b;
    v.useEffect(() => {
      if (w) {
        let $ = { x: 0, y: 0 };
        const Z = (R) => {
          var oe, te;
          $ = {
            x: Math.abs(Math.round(R.pageX) - (((oe = J.current) == null ? void 0 : oe.x) ?? 0)),
            y: Math.abs(Math.round(R.pageY) - (((te = J.current) == null ? void 0 : te.y) ?? 0))
          };
        }, ve = (R) => {
          $.x <= 10 && $.y <= 10 ? R.preventDefault() : w.contains(R.target) || O(!1), document.removeEventListener("pointermove", Z), J.current = null;
        };
        return J.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", ve, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", ve, { capture: !0 });
        };
      }
    }, [w, O, J]), v.useEffect(() => {
      const $ = () => O(!1);
      return window.addEventListener("blur", $), window.addEventListener("resize", $), () => {
        window.removeEventListener("blur", $), window.removeEventListener("resize", $);
      };
    }, [O]);
    const [fe, se] = uf(($) => {
      const Z = P().filter((oe) => !oe.disabled), ve = Z.find((oe) => oe.ref.current === document.activeElement), R = cf(Z, $, ve);
      R && setTimeout(() => R.ref.current.focus());
    }), xe = v.useCallback(
      ($, Z, ve) => {
        const R = !W.current && !ve;
        (b.value !== void 0 && b.value === Z || R) && (N($), R && (W.current = !0));
      },
      [b.value]
    ), Ve = v.useCallback(() => w == null ? void 0 : w.focus(), [w]), _e = v.useCallback(
      ($, Z, ve) => {
        const R = !W.current && !ve;
        (b.value !== void 0 && b.value === Z || R) && B($);
      },
      [b.value]
    ), Te = r === "popper" ? Ma : Ud, Fe = Te === Ma ? {
      side: s,
      sideOffset: l,
      align: c,
      alignOffset: d,
      arrowPadding: h,
      collisionBoundary: f,
      collisionPadding: m,
      sticky: p,
      hideWhenDetached: g,
      avoidCollisions: D
    } : {};
    return /* @__PURE__ */ u.jsx(
      Yd,
      {
        scope: n,
        content: w,
        viewport: E,
        onViewportChange: F,
        itemRefCallback: xe,
        selectedItem: _,
        onItemLeave: Ve,
        itemTextRefCallback: _e,
        focusSelectedItem: k,
        selectedItemText: j,
        position: r,
        isPositioned: T,
        searchRef: fe,
        children: /* @__PURE__ */ u.jsx(Eo, { as: Gt, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          wo,
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
              bo,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: ($) => $.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ u.jsx(
                  Te,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: ($) => $.preventDefault(),
                    ...y,
                    ...Fe,
                    onPlaced: () => L(!0),
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
                      if ($.key === "Tab" && $.preventDefault(), !Z && $.key.length === 1 && se($.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key)) {
                        let R = P().filter((oe) => !oe.disabled).map((oe) => oe.ref.current);
                        if (["ArrowUp", "End"].includes($.key) && (R = R.slice().reverse()), ["ArrowUp", "ArrowDown"].includes($.key)) {
                          const oe = $.target, te = R.indexOf(oe);
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
zd.displayName = Px;
var _x = "SelectItemAlignedPosition", Ud = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = tn(Sn, n), i = nn(Sn, n), [s, l] = v.useState(null), [c, d] = v.useState(null), h = le(t, (S) => d(S)), f = Wo(n), m = v.useRef(!1), p = v.useRef(!0), { viewport: g, selectedItem: D, selectedItemText: y, focusSelectedItem: b } = i, w = v.useCallback(() => {
    if (a.trigger && a.valueNode && s && c && g && D && y) {
      const S = a.trigger.getBoundingClientRect(), _ = c.getBoundingClientRect(), N = a.valueNode.getBoundingClientRect(), j = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const oe = j.left - _.left, te = N.left - oe, Pe = S.left - te, Me = S.width + Pe, Ae = Math.max(Me, _.width), Be = window.innerWidth - jt, tt = Fa(te, [jt, Be - Ae]);
        s.style.minWidth = Me + "px", s.style.left = tt + "px";
      } else {
        const oe = _.right - j.right, te = window.innerWidth - N.right - oe, Pe = window.innerWidth - S.right - te, Me = S.width + Pe, Ae = Math.max(Me, _.width), Be = window.innerWidth - jt, tt = Fa(te, [jt, Be - Ae]);
        s.style.minWidth = Me + "px", s.style.right = tt + "px";
      }
      const B = f(), P = window.innerHeight - jt * 2, T = g.scrollHeight, L = window.getComputedStyle(c), W = parseInt(L.borderTopWidth, 10), H = parseInt(L.paddingTop, 10), k = parseInt(L.borderBottomWidth, 10), O = parseInt(L.paddingBottom, 10), J = W + H + T + O + k, fe = Math.min(D.offsetHeight * 5, J), se = window.getComputedStyle(g), xe = parseInt(se.paddingTop, 10), Ve = parseInt(se.paddingBottom, 10), _e = S.top + S.height / 2 - jt, Te = P - _e, Fe = D.offsetHeight / 2, $ = D.offsetTop + Fe, Z = W + H + $, ve = J - Z;
      if (Z <= _e) {
        const oe = D === B[B.length - 1].ref.current;
        s.style.bottom = "0px";
        const te = c.clientHeight - g.offsetTop - g.offsetHeight, Pe = Math.max(
          Te,
          Fe + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (oe ? Ve : 0) + te + k
        ), Me = Z + Pe;
        s.style.height = Me + "px";
      } else {
        const oe = D === B[0].ref.current;
        s.style.top = "0px";
        const Pe = Math.max(
          _e,
          W + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (oe ? xe : 0) + Fe
        ) + ve;
        s.style.height = Pe + "px", g.scrollTop = Z - _e + g.offsetTop;
      }
      s.style.margin = `${jt}px 0`, s.style.minHeight = fe + "px", s.style.maxHeight = P + "px", r == null || r(), requestAnimationFrame(() => m.current = !0);
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
  We(() => w(), [w]);
  const [C, E] = v.useState();
  We(() => {
    c && E(window.getComputedStyle(c).zIndex);
  }, [c]);
  const F = v.useCallback(
    (S) => {
      S && p.current === !0 && (w(), b == null || b(), p.current = !1);
    },
    [w, b]
  );
  return /* @__PURE__ */ u.jsx(
    Ox,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: m,
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
              ref: h,
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
Ud.displayName = _x;
var Ax = "SelectPopperPosition", Ma = v.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = jt,
    ...a
  } = e, i = $o(n);
  return /* @__PURE__ */ u.jsx(
    wd,
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
Ma.displayName = Ax;
var [Ox, Ui] = ir(Sn, {}), Ba = "SelectViewport", qd = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = nn(Ba, n), i = Ui(Ba, n), s = le(t, a.onViewportChange), l = v.useRef(0);
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
      /* @__PURE__ */ u.jsx(Lo.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(
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
            const d = c.currentTarget, { contentWrapper: h, shouldExpandOnScrollRef: f } = i;
            if (f != null && f.current && h) {
              const m = Math.abs(l.current - d.scrollTop);
              if (m > 0) {
                const p = window.innerHeight - jt * 2, g = parseFloat(h.style.minHeight), D = parseFloat(h.style.height), y = Math.max(g, D);
                if (y < p) {
                  const b = y + m, w = Math.min(p, b), C = b - w;
                  h.style.height = w + "px", h.style.bottom === "0px" && (d.scrollTop = C > 0 ? C : 0, h.style.justifyContent = "flex-end");
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
qd.displayName = Ba;
var Gd = "SelectGroup", [Rx, Tx] = ir(Gd), Mx = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = yn();
    return /* @__PURE__ */ u.jsx(Rx, { scope: n, id: o, children: /* @__PURE__ */ u.jsx(ne.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Mx.displayName = Gd;
var Xd = "SelectLabel", Kd = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Tx(Xd, n);
    return /* @__PURE__ */ u.jsx(ne.div, { id: o.id, ...r, ref: t });
  }
);
Kd.displayName = Xd;
var yo = "SelectItem", [Bx, Jd] = ir(yo), Qd = v.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = tn(yo, n), l = nn(yo, n), c = s.value === r, [d, h] = v.useState(a ?? ""), [f, m] = v.useState(!1), p = le(
      t,
      (y) => {
        var b;
        return (b = l.itemRefCallback) == null ? void 0 : b.call(l, y, r, o);
      }
    ), g = yn(), D = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ u.jsx(
      Bx,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: c,
        onItemTextChange: v.useCallback((y) => {
          h((b) => b || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u.jsx(
          Lo.ItemSlot,
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
                ref: p,
                onFocus: ee(i.onFocus, () => m(!0)),
                onBlur: ee(i.onBlur, () => m(!1)),
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
                  ((w = l.searchRef) == null ? void 0 : w.current) !== "" && y.key === " " || (Cx.includes(y.key) && D(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Qd.displayName = yo;
var br = "SelectItemText", Zd = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, i = tn(br, n), s = nn(br, n), l = Jd(br, n), c = Nx(br, n), [d, h] = v.useState(null), f = le(
      t,
      (y) => h(y),
      l.onItemTextChange,
      (y) => {
        var b;
        return (b = s.itemTextRefCallback) == null ? void 0 : b.call(s, y, l.value, l.disabled);
      }
    ), m = d == null ? void 0 : d.textContent, p = v.useMemo(
      () => /* @__PURE__ */ u.jsx("option", { value: l.value, disabled: l.disabled, children: m }, l.value),
      [l.disabled, l.value, m]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: D } = c;
    return We(() => (g(p), () => D(p)), [g, D, p]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(ne.span, { id: l.textId, ...a, ref: f }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? jr.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
Zd.displayName = br;
var ef = "SelectItemIndicator", tf = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Jd(ef, n).isSelected ? /* @__PURE__ */ u.jsx(ne.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
tf.displayName = ef;
var Ia = "SelectScrollUpButton", nf = v.forwardRef((e, t) => {
  const n = nn(Ia, e.__scopeSelect), r = Ui(Ia, e.__scopeSelect), [o, a] = v.useState(!1), i = le(t, r.onScrollButtonChange);
  return We(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const c = l.scrollTop > 0;
        a(c);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    of,
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
nf.displayName = Ia;
var La = "SelectScrollDownButton", rf = v.forwardRef((e, t) => {
  const n = nn(La, e.__scopeSelect), r = Ui(La, e.__scopeSelect), [o, a] = v.useState(!1), i = le(t, r.onScrollButtonChange);
  return We(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const c = l.scrollHeight - l.clientHeight, d = Math.ceil(l.scrollTop) < c;
        a(d);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    of,
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
rf.displayName = La;
var of = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = nn("SelectScrollButton", n), i = v.useRef(null), s = Wo(n), l = v.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return v.useEffect(() => () => l(), [l]), We(() => {
    var d;
    const c = s().find((h) => h.ref.current === document.activeElement);
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
}), Ix = "SelectSeparator", af = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(ne.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
af.displayName = Ix;
var Wa = "SelectArrow", Lx = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = $o(n), a = tn(Wa, n), i = nn(Wa, n);
    return a.open && i.position === "popper" ? /* @__PURE__ */ u.jsx(xd, { ...o, ...r, ref: t }) : null;
  }
);
Lx.displayName = Wa;
function sf(e) {
  return e === "" || e === void 0;
}
var lf = v.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = v.useRef(null), a = le(t, o), i = Ei(n);
    return v.useEffect(() => {
      const s = o.current, l = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== n && d) {
        const h = new Event("change", { bubbles: !0 });
        d.call(s, n), s.dispatchEvent(h);
      }
    }, [i, n]), /* @__PURE__ */ u.jsx(Td, { asChild: !0, children: /* @__PURE__ */ u.jsx("select", { ...r, ref: a, defaultValue: n }) });
  }
);
lf.displayName = "BubbleSelect";
function uf(e) {
  const t = Le(e), n = v.useRef(""), r = v.useRef(0), o = v.useCallback(
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
function cf(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = Wx(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Wx(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var $x = Md, df = Id, Hx = Wd, Vx = $d, Yx = Hd, ff = Vd, zx = qd, hf = Kd, mf = Qd, Ux = Zd, qx = tf, pf = nf, gf = rf, vf = af;
const Gx = $x, Xx = Hx, Df = v.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  df,
  {
    ref: r,
    className: K(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground   focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ u.jsx(Vx, { asChild: !0, children: /* @__PURE__ */ u.jsx(Vc, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Df.displayName = df.displayName;
const yf = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  pf,
  {
    ref: n,
    className: K("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(wy, { className: "h-4 w-4" })
  }
));
yf.displayName = pf.displayName;
const bf = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  gf,
  {
    ref: n,
    className: K("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ u.jsx(Vc, { className: "h-4 w-4" })
  }
));
bf.displayName = gf.displayName;
const wf = v.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ u.jsx(Yx, { children: /* @__PURE__ */ u.jsxs(
  ff,
  {
    ref: o,
    className: K(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ u.jsx(yf, {}),
      /* @__PURE__ */ u.jsx(
        zx,
        {
          className: K("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
          children: t
        }
      ),
      /* @__PURE__ */ u.jsx(bf, {})
    ]
  }
) }));
wf.displayName = ff.displayName;
const Kx = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  hf,
  {
    ref: n,
    className: K("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Kx.displayName = hf.displayName;
const wr = v.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  mf,
  {
    ref: r,
    className: K(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(qx, { children: /* @__PURE__ */ u.jsx(Hc, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ u.jsx(Ux, { children: t })
    ]
  }
));
wr.displayName = mf.displayName;
const Jx = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  vf,
  {
    ref: n,
    className: K("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Jx.displayName = vf.displayName;
const Qx = ({
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
  setTime: h,
  timeError: f,
  endTime: m,
  setEndTime: p,
  isMultiDay: g,
  setMultiDay: D,
  tableSetup: y,
  setTableSetup: b,
  venue: w,
  setVenue: C,
  eventPackages: E,
  selectedEventPackages: F,
  setSelectedEventPackages: S,
  venues: _
}) => {
  const N = (j, B) => {
    const P = [...F];
    P[j] = B, S(P);
  };
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs("div", { className: "space-y-4 mt-8 grid grid-rows-2 justify-center lg:max-w-[680px] mx-auto", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "grid md:grid-cols-2 space-y-8 md:space-y-0 md:space-x-4 ", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ u.jsx(pn, { htmlFor: "guests", children: "Number of guests" }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ u.jsx(
              lt,
              {
                className: `pr-8 ${n && "border-red-500"}`,
                type: "number",
                id: "guests",
                placeholder: "12",
                max: "22",
                value: e,
                onChange: (j) => {
                  t(j.target.value), r(null);
                }
              }
            ),
            /* @__PURE__ */ u.jsx(kh, { className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" })
          ] }),
          n && /* @__PURE__ */ u.jsx("p", { className: "text-red-500 text-sm mt-1", children: n })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ u.jsx(pn, { htmlFor: "date", children: "When is it happening" }),
          /* @__PURE__ */ u.jsx("div", { className: "relative mt-2", children: /* @__PURE__ */ u.jsx(
            dl,
            {
              date: o,
              setDate: (j) => {
                a(j), l(new Date(j).setDate(new Date(j).getDate() + 1));
              }
            }
          ) }),
          i && /* @__PURE__ */ u.jsx("p", { className: "text-red-500 text-sm mt-1", children: i })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4 items-end", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex-1 lg:max-w-[330px]", children: [
          /* @__PURE__ */ u.jsx(pn, { htmlFor: "time", children: "Time of arrival" }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ u.jsx(
              lt,
              {
                type: "time",
                id: "time",
                placeholder: "09:00 am",
                value: d,
                className: `w-full ${f && "border-red-500"}`,
                onChange: (j) => {
                  h(j.target.value);
                  let B = (/* @__PURE__ */ new Date()).setHours(parseInt(j.target.value.split(":")[0]) + 8);
                  B = new Date(B).setMinutes(j.target.value.split(":")[1]), p(new Date(B).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
                }
              }
            ),
            /* @__PURE__ */ u.jsx(Da, { className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" })
          ] }),
          f && /* @__PURE__ */ u.jsx("p", { className: "text-red-500 text-sm mt-1", children: f })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ u.jsx(Wc, { id: "multi-day", checked: g, onClick: (j) => {
            D(!g), o && !g ? (l((/* @__PURE__ */ new Date()).setDate(new Date(o).getDate() + 1)), d && p(new Date(o).setHours(new Date(o).getHours() + 8)).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })) : (l((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 2)), p("17:00"));
          } }),
          /* @__PURE__ */ u.jsx(pn, { htmlFor: "multi-day", children: "Multi day event" })
        ] })
      ] }),
      g && /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsxs("div", { className: "grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ u.jsx(pn, { htmlFor: "end-date", children: "End date" }),
          /* @__PURE__ */ u.jsx("div", { className: "relative mt-2", children: /* @__PURE__ */ u.jsx(
            dl,
            {
              date: s,
              setDate: l
            }
          ) }),
          c && /* @__PURE__ */ u.jsx("p", { className: "text-red-500 text-sm mt-1", children: c })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ u.jsx(pn, { htmlFor: "end-time", children: "Time of Departure" }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ u.jsx(lt, { type: "time", id: "end-time", min: d ? d + ":00" : "10:00:00", placeholder: "17:00", value: m, onChange: (j) => p(j.target.value) }),
            /* @__PURE__ */ u.jsx(Da, { className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsxs("div", { className: "mt-12 space-y-8 flex flex-col items-center", children: [
        /* @__PURE__ */ u.jsx("h3", { className: "text-center text-lg font-bold", children: `Select Packages${g ? " for each day" : ""}` }),
        g && o && s ? Array.from({ length: new Date(s).getDate() - new Date(o).getDate() + 1 }, (j, B) => /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Day ",
            B + 1
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "flex space-x-4 mt-4", children: E.map((P) => /* @__PURE__ */ u.jsx(
            Js,
            {
              title: `${P.duration_hours} Hours`,
              description: P.description,
              onClick: () => N(B, P.id),
              id: P.id,
              isSelected: F[B] === P.id,
              noneSelected: !F[B],
              value: P.id
            },
            P.id
          )) })
        ] }, B)) : /* @__PURE__ */ u.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-4 mt-4", children: E.map((j) => /* @__PURE__ */ u.jsx(
          Js,
          {
            title: `${j.duration_hours} Hours`,
            description: j.description,
            onClick: () => N(0, j.id),
            id: j.id,
            isSelected: F.length > 0 && F[0] === j.id,
            noneSelected: F.length === 0,
            value: j.id
          },
          j.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "mt-12 space-y-8 flex flex-col items-center", children: [
      /* @__PURE__ */ u.jsxs("h3", { className: "text-lg font-bold text-center", children: [
        "Venue Preference ",
        /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: "(optional)" })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "flex items-center space-x-2 mt-4", children: /* @__PURE__ */ u.jsxs(Gx, { onValueChange: (j) => b(j), defaultValue: "Boardroom", children: [
        /* @__PURE__ */ u.jsx(Df, { className: "w-[180px]", children: /* @__PURE__ */ u.jsx(Xx, { placeholder: "Boardroom Setup" }) }),
        /* @__PURE__ */ u.jsxs(wf, { children: [
          /* @__PURE__ */ u.jsx(wr, { value: "Boardroom", children: "Boardroom" }),
          /* @__PURE__ */ u.jsx(wr, { value: "U-Shape", children: "U-Shape" }),
          /* @__PURE__ */ u.jsx(wr, { value: "Classroom", children: "Classroom" }),
          /* @__PURE__ */ u.jsx(wr, { value: "Intimate", children: "Intimate - no tables" })
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsx("div", { className: "grid md:grid-cols-2 gap-4 mt-4", children: _.map((j) => /* @__PURE__ */ u.jsx(
        py,
        {
          venue_name: j.name,
          venue_description: j.description,
          image_url: j.images[0],
          capacity: j.capacity,
          area: j.area,
          isSelected: j.id === w,
          onClick: () => C(j.id)
        },
        j.id
      )) })
    ] })
  ] });
}, Zx = ({ title: e, description: t, image_url: n, isSelected: r, onClick: o }) => /* @__PURE__ */ u.jsx(
  Rr,
  {
    className: K("relative bg-gray-50 border-2 shadow-sm border-transparent hover:border-primary cursor-pointer", r && "border-primary"),
    onClick: o,
    children: /* @__PURE__ */ u.jsxs(Tr, { className: "p-6 flex flex-col items-left justify-between cursor-pointer h-full", children: [
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
      /* @__PURE__ */ u.jsxs(we, { className: "mt-4 w-fit outline-none", onClick: o, children: [
        /* @__PURE__ */ u.jsx("span", { className: r && "hidden", children: "Choose" }),
        /* @__PURE__ */ u.jsx("div", { className: `${!r && "hidden"} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`, children: /* @__PURE__ */ u.jsx(Dn, { className: "h-4 w-4 text-white " }) })
      ] })
    ] })
  }
), eC = ({ guests: e, title: t, description: n, quantity: r = 0, image_url: o, isSelected: a, onClick: i, onQuantityChange: s }) => /* @__PURE__ */ u.jsx(
  Rr,
  {
    className: K("relative bg-gray-50 border-2 shadow-sm border-transparent hover:border-primary cursor-pointer", a && "border-primary"),
    onClick: () => {
      a || i();
    },
    children: /* @__PURE__ */ u.jsxs(Tr, { className: "p-6 flex flex-col items-left justify-between cursor-pointer h-full", children: [
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
        /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center bg-primary h-6 w-6 rounded-full m-1", children: /* @__PURE__ */ u.jsx(Dn, { className: "h-4 w-4 text-white" }) }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
          /* @__PURE__ */ u.jsx("p", { className: "text-primary font-medium", children: r }),
          /* @__PURE__ */ u.jsx(
            we,
            {
              variant: "outline",
              className: "!h-7 !w-7 p-1 group rounded-full flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-white text-lg",
              onClick: () => s(r - 1),
              disabled: r <= 0,
              children: /* @__PURE__ */ u.jsx(Ph, { className: "h-5 w-5 text-primary group-hover:text-white" })
            }
          ),
          /* @__PURE__ */ u.jsx(
            we,
            {
              variant: "outline",
              className: "!h-7 !w-7 p-1 group rounded-full flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-white text-lg",
              onClick: () => s(r + 1),
              disabled: r >= e,
              children: /* @__PURE__ */ u.jsx(_h, { className: "h-6 w-6 text-primary group-hover:text-white" })
            }
          )
        ] })
      ] }) : /* @__PURE__ */ u.jsx(we, { className: "mt-2 w-fit", children: "Add" })
    ] })
  }
), tC = ({ facilities: e, catering: t, guests: n, facilitiesSelected: r, setFacilitiesSelected: o, cateringSelected: a, setCateringSelected: i, comments: s, setComments: l }) => {
  const c = (f) => {
    r.includes(f) ? o(r.filter((m) => m !== f)) : o([...r, f]);
  }, d = (f) => {
    const m = a.some((p) => p.id === f);
    i(m ? a.filter((p) => p.id !== f) : [...a, { id: f, quantity: 1 }]);
  }, h = (f, m) => {
    if (m <= 0) {
      i(a.filter((p) => p.id !== f));
      return;
    }
    i(a.map(
      (p) => p.id === f ? { ...p, quantity: m } : p
    ));
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col space-y-8 mt-8", children: [
    /* @__PURE__ */ u.jsx("h2", { className: "text-2xl font-bold text-center", children: "Make your event complete" }),
    /* @__PURE__ */ u.jsx("p", { className: "text-center text-muted-foreground", children: "Choose one of the default packages or create your custom event" }),
    /* @__PURE__ */ u.jsxs("div", { children: [
      /* @__PURE__ */ u.jsx("h3", { className: "text-lg text-primary font-medium", children: "Facilities" }),
      /* @__PURE__ */ u.jsx("div", { className: "grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 mt-4", children: e.map((f) => /* @__PURE__ */ u.jsx(
        Zx,
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
        const m = a.find((p) => p.id === f.id);
        return /* @__PURE__ */ u.jsx(
          eC,
          {
            guests: n,
            title: f.title,
            description: f.description,
            image_url: f.image,
            isSelected: !!m,
            quantity: m ? m.quantity : 0,
            onClick: () => d(f.id),
            onQuantityChange: (p) => h(f.id, p)
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
var qi = "Checkbox", [nC, EC] = Qt(qi), [rC, oC] = nC(qi), xf = v.forwardRef(
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
    } = e, [h, f] = v.useState(null), m = le(t, (w) => f(w)), p = v.useRef(!1), g = h ? !!h.closest("form") : !0, [D = !1, y] = Xn({
      prop: o,
      defaultProp: a,
      onChange: c
    }), b = v.useRef(D);
    return v.useEffect(() => {
      const w = h == null ? void 0 : h.form;
      if (w) {
        const C = () => y(b.current);
        return w.addEventListener("reset", C), () => w.removeEventListener("reset", C);
      }
    }, [h, y]), /* @__PURE__ */ u.jsxs(rC, { scope: n, state: D, disabled: s, children: [
      /* @__PURE__ */ u.jsx(
        ne.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": wn(D) ? "mixed" : D,
          "aria-required": i,
          "data-state": Ff(D),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...d,
          ref: m,
          onKeyDown: ee(e.onKeyDown, (w) => {
            w.key === "Enter" && w.preventDefault();
          }),
          onClick: ee(e.onClick, (w) => {
            y((C) => wn(C) ? !0 : !C), g && (p.current = w.isPropagationStopped(), p.current || w.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ u.jsx(
        aC,
        {
          control: h,
          bubbles: !p.current,
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
xf.displayName = qi;
var Cf = "CheckboxIndicator", Ef = v.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = oC(Cf, n);
    return /* @__PURE__ */ u.jsx(ft, { present: r || wn(a.state) || a.state === !0, children: /* @__PURE__ */ u.jsx(
      ne.span,
      {
        "data-state": Ff(a.state),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
Ef.displayName = Cf;
var aC = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = v.useRef(null), i = Ei(n), s = Fi(t);
  return v.useEffect(() => {
    const l = a.current, c = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(c, "checked").set;
    if (i !== n && h) {
      const f = new Event("click", { bubbles: r });
      l.indeterminate = wn(n), h.call(l, wn(n) ? !1 : n), l.dispatchEvent(f);
    }
  }, [i, n, r]), /* @__PURE__ */ u.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: wn(n) ? !1 : n,
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
function wn(e) {
  return e === "indeterminate";
}
function Ff(e) {
  return wn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var Sf = xf, iC = Ef;
const Nf = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Sf,
  {
    ref: n,
    className: K(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u.jsx(iC, { className: K("flex items-center justify-center text-current"), children: /* @__PURE__ */ u.jsx(Hc, { className: "h-4 w-4" }) })
  }
));
Nf.displayName = Sf.displayName;
const sC = ({
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
  setAgreeTerms: h,
  companyError: f,
  firstNameError: m,
  lastNameError: p,
  emailError: g,
  phoneError: D,
  agreeTermsError: y,
  isStep3Valid: b
}) => /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col space-y-8 mt-8 max-w-[480px] mx-auto", children: [
  /* @__PURE__ */ u.jsx("h2", { className: "text-2xl font-bold text-center", children: "Your contact details" }),
  /* @__PURE__ */ u.jsx("p", { className: "text-center text-muted-foreground", children: "Your Free Quote is almost there. No strings attached ;)" }),
  /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
    /* @__PURE__ */ u.jsx(lt, { placeholder: "Event name (optional)" }),
    /* @__PURE__ */ u.jsx(lt, { placeholder: "Team name (optional)" })
  ] }),
  /* @__PURE__ */ u.jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ u.jsxs("h3", { className: "text-lg", children: [
      "Contact Details ",
      /* @__PURE__ */ u.jsx("span", { className: "text-sm text-red-400", children: "(required)" })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-1 gap-4 mt-4", children: [
      /* @__PURE__ */ u.jsx(
        lt,
        {
          placeholder: "Company name",
          className: f ? "border-red-500" : "",
          value: e,
          onChange: (w) => t(w.target.value)
        }
      ),
      f && /* @__PURE__ */ u.jsx("p", { className: "text-red-500 text-sm mt-1", children: f }),
      /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ u.jsx(lt, { placeholder: "First name", className: m ? "border-red-500" : "", value: n, onChange: (w) => r(w.target.value) }),
        /* @__PURE__ */ u.jsx(lt, { placeholder: "Last name", className: p ? "border-red-500" : "", value: o, onChange: (w) => a(w.target.value) })
      ] }),
      /* @__PURE__ */ u.jsx(lt, { placeholder: "Email (company email preferred)", className: g ? "border-red-500" : "", value: i, onChange: (w) => s(w.target.value) }),
      /* @__PURE__ */ u.jsx(lt, { placeholder: "Phone", className: D ? "border-red-500" : "", value: l, onChange: (w) => c(w.target.value) })
    ] })
  ] }),
  /* @__PURE__ */ u.jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ u.jsxs("label", { className: "inline-flex items-center", children: [
      /* @__PURE__ */ u.jsx(
        Nf,
        {
          className: y ? "border-red-500" : "",
          checked: d,
          onChange: (w) => h(w.target.checked)
        }
      ),
      /* @__PURE__ */ u.jsx("span", { className: "ml-2 text-muted-foreground text-sm", children: "I agree to the terms & conditions and EU data processing" })
    ] }),
    y && /* @__PURE__ */ u.jsx("p", { className: "text-red-500 text-sm mt-1", children: y })
  ] }),
  /* @__PURE__ */ u.jsx("p", { className: "text-muted-foreground text-sm", children: "We will prepare a proposal for your event without any commitment. You will gain access to a personalised portal where you can manage your proposal online." }),
  /* @__PURE__ */ u.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ u.jsx(we, { className: "w-full", disabled: !b(), children: "Request Proposal" }) })
] });
function lC() {
  var me;
  const [e, t] = Q(""), [n, r] = Q((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 1)), [o, a] = Q(""), [i, s] = Q("09:00"), [l, c] = Q(""), [d, h] = Q(!1), [f, m] = Q("Boardroom"), [p, g] = Q(""), [D, y] = Q([]), [b, w] = Q([]), [C, E] = Q(""), [F, S] = Q(""), [_, N] = Q(""), [j, B] = Q(""), [P, T] = Q(""), [L, W] = Q(""), [H, k] = Q(!1), [O, J] = Q([]), [fe, se] = Q([]), [xe, Ve] = Q([]), [_e, Te] = Q(0), [Fe, $] = Q(1), [Z, ve] = Q(null), [R, oe] = Q(null), [te, Pe] = Q(null), [Me, Ae] = Q(null), [Be, tt] = Q(null), [nt, Ke] = Q(null), [An, sr] = Q(null), [rn, mt] = Q(null), [lr, on] = Q(null), [On, Ye] = Q(null);
  kt(() => {
    J(Rn), se(an);
  }, []), kt(() => {
    let q = 0;
    p && xe.length > 0 && xe.forEach((ue, Ne) => {
      const Ce = sn.find((Ee) => Ee.venue_id === p && Ee.package_id === ue);
      Ce && Ce.price && (q += Ce.price), D.map((Ee) => rt.find((st) => st.id === Ee)).forEach((Ee) => {
        q += Ee.price;
      }), b.forEach((Ee) => {
        const st = Ht.find((Tn) => Tn.id === Ee.id);
        q += st.price * Ee.quantity;
      });
    }), Te(q.toFixed(2));
  }, [p, d, o, D, b]), kt(() => {
    he();
  }, [Fe]);
  const Rn = [
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
  ], an = [
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
  ], sn = [
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
  ], rt = [
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
  ], Ht = [
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
  ], ln = () => e > 0 && n !== "" && i !== "" && xe.length > 0 && p !== "" && (d ? o !== "" : !0), un = () => ((!e || e <= 0) && ve("Please select the number of guests"), n || oe("Please select a date"), i || Pe("Please select a time"), o && o < n && Ae("End date must be after start date"), !0), V = () => F !== "" && _ !== "" && j !== "" && P !== "" && L !== "" && H, U = () => (F || tt("Please enter your company name"), _ || Ke("Please enter your first name"), j || sr("Please enter your last name"), P || mt("Please enter your email"), L || on("Please enter your phone number"), H || Ye("Please agree to the terms and conditions"), !0), he = () => {
    console.log("scrolling to top"), document.getElementById("modal-content").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }, G = () => {
    if (un() && U() && ln() && V()) {
      console.log("Submit data to Comidor");
      let q = new Date(n);
      d && (q = new Date(o));
      const ue = {
        u_contactFirstName: _,
        u_contactLastName: j,
        u_email: P,
        u_resStartDate: n,
        u_resEndDate: q,
        u_resStartTime: i,
        u_resEndTime: l,
        u_duration: xe.map((Ie) => an.find((Ee) => Ee.id === Ie).duration_hours),
        u_teamSize: e,
        u_venueName: p,
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
      }, Ne = new URLSearchParams(ue), Ce = url + "?" + Ne.toString();
      fetch(Ce, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: "application/json",
          "Content-Type": "application/xml"
        }
      }).then(async (Ie) => await Ie.json()).then((Ie) => {
        console.log("proposal created successfully"), console.log(Ie);
      }).catch((Ie) => console.error("Error:", Ie));
    }
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "grid grid-rows-[1fr_fit]  overflow-hidden lg:flex lg:flex-row justify-center lg:space-x-8 lg:overflow-visible", children: [
    /* @__PURE__ */ u.jsxs("div", { id: "modal-content", className: "min-w-[90vw] w-full lg:min-w-fit lg:w-3/4 p-2 md:p-8 mt-8 overflow-scroll", children: [
      Fe === 1 && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx("h2", { className: "text-2xl font-bold text-center", children: "Let's get you started" }),
        /* @__PURE__ */ u.jsx("p", { className: "text-center text-muted-foreground mt-6", children: "When and with how many people will you meet?" }),
        /* @__PURE__ */ u.jsx(
          Qx,
          {
            guests: e,
            setGuests: t,
            guestsError: Z,
            setGuestsError: ve,
            date: n,
            setDate: r,
            dateError: R,
            endDate: o,
            setEndDate: a,
            endDateError: Me,
            time: i,
            setTime: s,
            timeError: te,
            endTime: l,
            setEndTime: c,
            isMultiDay: d,
            setMultiDay: h,
            tableSetup: f,
            setTableSetup: m,
            venue: p,
            setVenue: g,
            eventPackages: fe,
            selectedEventPackages: xe,
            setSelectedEventPackages: Ve,
            venues: O
          }
        ),
        /* @__PURE__ */ u.jsx("div", { className: "mt-12 space-y-8 flex flex-col items-center", children: /* @__PURE__ */ u.jsxs(we, { className: "mt-8", onClick: () => un() && ln() && $(2), children: [
          "Add Event Options ",
          /* @__PURE__ */ u.jsx(xr, { className: "ml-2 h-5 w-5 text-white" })
        ] }) })
      ] }),
      Fe === 2 && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(
          tC,
          {
            guests: e,
            facilitiesSelected: D,
            setFacilitiesSelected: y,
            cateringSelected: b,
            setCateringSelected: w,
            comments: C,
            setComments: E,
            catering: Ht,
            facilities: rt
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: "hidden md:flex relative mt-12 space-x-4 flex justify-end items-center", children: [
          /* @__PURE__ */ u.jsx("span", { className: "absolute top-1/2 left-0 text-muted-foreground", children: "Step 2 of 3" }),
          /* @__PURE__ */ u.jsx(we, { variant: "outline", className: "mt-8", onClick: () => $(1), children: /* @__PURE__ */ u.jsx($n, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
          /* @__PURE__ */ u.jsxs(we, { className: "mt-8", onClick: () => $(3), children: [
            "Next ",
            /* @__PURE__ */ u.jsx(xr, { className: "ml-2 h-5 w-5 text-white" })
          ] })
        ] })
      ] }),
      Fe === 3 && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(
          sC,
          {
            company: F,
            setCompany: S,
            firstName: _,
            setFirstName: N,
            lastName: j,
            setLastName: B,
            email: P,
            setEmail: T,
            phone: L,
            setPhone: W,
            agreeTerms: H,
            setAgreeTerms: k,
            companyError: Be,
            firstNameError: nt,
            lastNameError: An,
            emailError: rn,
            phoneError: lr,
            agreeTermsError: On,
            isStep3Valid: V
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: "hidden md:flex mt-12 flex justify-between items-center", children: [
          /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: "Step 3 of 3" }),
          /* @__PURE__ */ u.jsxs("div", { className: "flex space-x-4 items-center", children: [
            /* @__PURE__ */ u.jsx(we, { variant: "outline", onClick: () => $(2), children: /* @__PURE__ */ u.jsx($n, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
            /* @__PURE__ */ u.jsxs(we, { onClick: () => V() && G(), children: [
              "Request Proposal ",
              /* @__PURE__ */ u.jsx(xr, { className: "ml-2 h-5 w-5 text-white" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsx(
      ry,
      {
        date: n,
        guests: e,
        time: i,
        venue: (me = O.find((q) => q.id === p)) == null ? void 0 : me.name,
        tableSetup: f,
        isMultiDay: d,
        endDate: o,
        currentStep: Fe,
        setCurrentStep: $,
        isStep1Valid: ln,
        checkStep1Errors: un,
        isStep3Valid: V,
        checkStep3Errors: U,
        selectedEventPackages: xe.map((q) => {
          var ue, Ne;
          return {
            ...q,
            duration: (ue = fe.find((Ce) => Ce.id === q)) == null ? void 0 : ue.duration_hours,
            price: (Ne = sn.find((Ce) => Ce.venue_id === p && Ce.package_id === q)) == null ? void 0 : Ne.price
          };
        }),
        facilitiesSelected: rt.filter((q) => D.includes(q.id)),
        cateringSelected: b.map((q) => ({ ...q, name: Ht.find((ue) => ue.id === q.id).title, price: Ht.find((ue) => ue.id === q.id).price })),
        totalExclVat: _e
      }
    )
  ] });
}
const uC = iu, cC = su, dC = lu, jf = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  ti,
  {
    ref: n,
    className: K(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
jf.displayName = ti.displayName;
const kf = v.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(dC, { children: [
  /* @__PURE__ */ u.jsx(jf, {}),
  /* @__PURE__ */ u.jsx(
    ni,
    {
      ref: r,
      className: K(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: t
    }
  )
] }));
kf.displayName = ni.displayName;
const fC = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  ri,
  {
    ref: n,
    className: K("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
fC.displayName = ri.displayName;
const hC = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  oi,
  {
    ref: n,
    className: K("text-sm text-muted-foreground", e),
    ...t
  }
));
hC.displayName = oi.displayName;
function mC() {
  const [e, t] = Q(!1);
  return /* @__PURE__ */ u.jsx("div", { className: "fixed right-10 bottom-10", children: /* @__PURE__ */ u.jsxs(uC, { children: [
    /* @__PURE__ */ u.jsx(cC, { asChild: !0, children: /* @__PURE__ */ u.jsx(we, { onClick: () => t(!0), children: "Book Now" }) }),
    /* @__PURE__ */ u.jsx(kf, { className: "h-[95%] md:h-[95vh] max-w-[95vw] p-0 md:overflow-scroll", children: /* @__PURE__ */ u.jsx(lC, {}) })
  ] }) });
}
window.MeetingRoomBookingWidget = (e) => {
  yr.render(
    /* @__PURE__ */ u.jsx(mC, {}),
    document.getElementById(e)
  );
};
