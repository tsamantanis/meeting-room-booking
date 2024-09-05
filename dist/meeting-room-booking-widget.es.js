var Jx = Object.defineProperty;
var Zx = (e, n, r) => n in e ? Jx(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r;
var Gl = (e, n, r) => Zx(e, typeof n != "symbol" ? n + "" : n, r);
function e1(e, n) {
  for (var r = 0; r < n.length; r++) {
    const i = n[r];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const l in i)
        if (l !== "default" && !(l in e)) {
          const s = Object.getOwnPropertyDescriptor(i, l);
          s && Object.defineProperty(e, l, s.get ? s : {
            enumerable: !0,
            get: () => i[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Mv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lv = { exports: {} }, va = {}, Iv = { exports: {} }, _e = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vh;
function t1() {
  if (vh) return _e;
  vh = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), D = Symbol.iterator;
  function y(A) {
    return A === null || typeof A != "object" ? null : (A = D && A[D] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var x = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, E = {};
  function b(A, V, ye) {
    this.props = A, this.context = V, this.refs = E, this.updater = ye || x;
  }
  b.prototype.isReactComponent = {}, b.prototype.setState = function(A, V) {
    if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, A, V, "setState");
  }, b.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function F() {
  }
  F.prototype = b.prototype;
  function k(A, V, ye) {
    this.props = A, this.context = V, this.refs = E, this.updater = ye || x;
  }
  var _ = k.prototype = new F();
  _.constructor = k, C(_, b.prototype), _.isPureReactComponent = !0;
  var P = Array.isArray, O = Object.prototype.hasOwnProperty, B = { current: null }, W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(A, V, ye) {
    var pe, xe = {}, De = null, ee = null;
    if (V != null) for (pe in V.ref !== void 0 && (ee = V.ref), V.key !== void 0 && (De = "" + V.key), V) O.call(V, pe) && !W.hasOwnProperty(pe) && (xe[pe] = V[pe]);
    var ue = arguments.length - 2;
    if (ue === 1) xe.children = ye;
    else if (1 < ue) {
      for (var Ce = Array(ue), Z = 0; Z < ue; Z++) Ce[Z] = arguments[Z + 2];
      xe.children = Ce;
    }
    if (A && A.defaultProps) for (pe in ue = A.defaultProps, ue) xe[pe] === void 0 && (xe[pe] = ue[pe]);
    return { $$typeof: e, type: A, key: De, ref: ee, props: xe, _owner: B.current };
  }
  function $(A, V) {
    return { $$typeof: e, type: A.type, key: V, ref: A.ref, props: A.props, _owner: A._owner };
  }
  function H(A) {
    return typeof A == "object" && A !== null && A.$$typeof === e;
  }
  function ne(A) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(ye) {
      return V[ye];
    });
  }
  var Y = /\/+/g;
  function te(A, V) {
    return typeof A == "object" && A !== null && A.key != null ? ne("" + A.key) : V.toString(36);
  }
  function re(A, V, ye, pe, xe) {
    var De = typeof A;
    (De === "undefined" || De === "boolean") && (A = null);
    var ee = !1;
    if (A === null) ee = !0;
    else switch (De) {
      case "string":
      case "number":
        ee = !0;
        break;
      case "object":
        switch (A.$$typeof) {
          case e:
          case n:
            ee = !0;
        }
    }
    if (ee) return ee = A, xe = xe(ee), A = pe === "" ? "." + te(ee, 0) : pe, P(xe) ? (ye = "", A != null && (ye = A.replace(Y, "$&/") + "/"), re(xe, V, ye, "", function(Z) {
      return Z;
    })) : xe != null && (H(xe) && (xe = $(xe, ye + (!xe.key || ee && ee.key === xe.key ? "" : ("" + xe.key).replace(Y, "$&/") + "/") + A)), V.push(xe)), 1;
    if (ee = 0, pe = pe === "" ? "." : pe + ":", P(A)) for (var ue = 0; ue < A.length; ue++) {
      De = A[ue];
      var Ce = pe + te(De, ue);
      ee += re(De, V, ye, Ce, xe);
    }
    else if (Ce = y(A), typeof Ce == "function") for (A = Ce.call(A), ue = 0; !(De = A.next()).done; ) De = De.value, Ce = pe + te(De, ue++), ee += re(De, V, ye, Ce, xe);
    else if (De === "object") throw V = String(A), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
    return ee;
  }
  function ae(A, V, ye) {
    if (A == null) return A;
    var pe = [], xe = 0;
    return re(A, pe, "", "", function(De) {
      return V.call(ye, De, xe++);
    }), pe;
  }
  function le(A) {
    if (A._status === -1) {
      var V = A._result;
      V = V(), V.then(function(ye) {
        (A._status === 0 || A._status === -1) && (A._status = 1, A._result = ye);
      }, function(ye) {
        (A._status === 0 || A._status === -1) && (A._status = 2, A._result = ye);
      }), A._status === -1 && (A._status = 0, A._result = V);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var z = { current: null }, R = { transition: null }, X = { ReactCurrentDispatcher: z, ReactCurrentBatchConfig: R, ReactCurrentOwner: B };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return _e.Children = { map: ae, forEach: function(A, V, ye) {
    ae(A, function() {
      V.apply(this, arguments);
    }, ye);
  }, count: function(A) {
    var V = 0;
    return ae(A, function() {
      V++;
    }), V;
  }, toArray: function(A) {
    return ae(A, function(V) {
      return V;
    }) || [];
  }, only: function(A) {
    if (!H(A)) throw Error("React.Children.only expected to receive a single React element child.");
    return A;
  } }, _e.Component = b, _e.Fragment = r, _e.Profiler = l, _e.PureComponent = k, _e.StrictMode = i, _e.Suspense = p, _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, _e.act = q, _e.cloneElement = function(A, V, ye) {
    if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
    var pe = C({}, A.props), xe = A.key, De = A.ref, ee = A._owner;
    if (V != null) {
      if (V.ref !== void 0 && (De = V.ref, ee = B.current), V.key !== void 0 && (xe = "" + V.key), A.type && A.type.defaultProps) var ue = A.type.defaultProps;
      for (Ce in V) O.call(V, Ce) && !W.hasOwnProperty(Ce) && (pe[Ce] = V[Ce] === void 0 && ue !== void 0 ? ue[Ce] : V[Ce]);
    }
    var Ce = arguments.length - 2;
    if (Ce === 1) pe.children = ye;
    else if (1 < Ce) {
      ue = Array(Ce);
      for (var Z = 0; Z < Ce; Z++) ue[Z] = arguments[Z + 2];
      pe.children = ue;
    }
    return { $$typeof: e, type: A.type, key: xe, ref: De, props: pe, _owner: ee };
  }, _e.createContext = function(A) {
    return A = { $$typeof: c, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, A.Provider = { $$typeof: s, _context: A }, A.Consumer = A;
  }, _e.createElement = U, _e.createFactory = function(A) {
    var V = U.bind(null, A);
    return V.type = A, V;
  }, _e.createRef = function() {
    return { current: null };
  }, _e.forwardRef = function(A) {
    return { $$typeof: d, render: A };
  }, _e.isValidElement = H, _e.lazy = function(A) {
    return { $$typeof: g, _payload: { _status: -1, _result: A }, _init: le };
  }, _e.memo = function(A, V) {
    return { $$typeof: v, type: A, compare: V === void 0 ? null : V };
  }, _e.startTransition = function(A) {
    var V = R.transition;
    R.transition = {};
    try {
      A();
    } finally {
      R.transition = V;
    }
  }, _e.unstable_act = q, _e.useCallback = function(A, V) {
    return z.current.useCallback(A, V);
  }, _e.useContext = function(A) {
    return z.current.useContext(A);
  }, _e.useDebugValue = function() {
  }, _e.useDeferredValue = function(A) {
    return z.current.useDeferredValue(A);
  }, _e.useEffect = function(A, V) {
    return z.current.useEffect(A, V);
  }, _e.useId = function() {
    return z.current.useId();
  }, _e.useImperativeHandle = function(A, V, ye) {
    return z.current.useImperativeHandle(A, V, ye);
  }, _e.useInsertionEffect = function(A, V) {
    return z.current.useInsertionEffect(A, V);
  }, _e.useLayoutEffect = function(A, V) {
    return z.current.useLayoutEffect(A, V);
  }, _e.useMemo = function(A, V) {
    return z.current.useMemo(A, V);
  }, _e.useReducer = function(A, V, ye) {
    return z.current.useReducer(A, V, ye);
  }, _e.useRef = function(A) {
    return z.current.useRef(A);
  }, _e.useState = function(A) {
    return z.current.useState(A);
  }, _e.useSyncExternalStore = function(A, V, ye) {
    return z.current.useSyncExternalStore(A, V, ye);
  }, _e.useTransition = function() {
    return z.current.useTransition();
  }, _e.version = "18.3.1", _e;
}
Iv.exports = t1();
var w = Iv.exports;
const oe = /* @__PURE__ */ Mv(w), n1 = /* @__PURE__ */ e1({
  __proto__: null,
  default: oe
}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gh;
function r1() {
  if (gh) return va;
  gh = 1;
  var e = w, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, p, v) {
    var g, D = {}, y = null, x = null;
    v !== void 0 && (y = "" + v), p.key !== void 0 && (y = "" + p.key), p.ref !== void 0 && (x = p.ref);
    for (g in p) i.call(p, g) && !s.hasOwnProperty(g) && (D[g] = p[g]);
    if (d && d.defaultProps) for (g in p = d.defaultProps, p) D[g] === void 0 && (D[g] = p[g]);
    return { $$typeof: n, type: d, key: y, ref: x, props: D, _owner: l.current };
  }
  return va.Fragment = r, va.jsx = c, va.jsxs = c, va;
}
Lv.exports = r1();
var m = Lv.exports, od = {}, Bv = { exports: {} }, Mt = {}, jc = { exports: {} }, Ac = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yh;
function o1() {
  return yh || (yh = 1, function(e) {
    function n(R, X) {
      var q = R.length;
      R.push(X);
      e: for (; 0 < q; ) {
        var A = q - 1 >>> 1, V = R[A];
        if (0 < l(V, X)) R[A] = X, R[q] = V, q = A;
        else break e;
      }
    }
    function r(R) {
      return R.length === 0 ? null : R[0];
    }
    function i(R) {
      if (R.length === 0) return null;
      var X = R[0], q = R.pop();
      if (q !== X) {
        R[0] = q;
        e: for (var A = 0, V = R.length, ye = V >>> 1; A < ye; ) {
          var pe = 2 * (A + 1) - 1, xe = R[pe], De = pe + 1, ee = R[De];
          if (0 > l(xe, q)) De < V && 0 > l(ee, xe) ? (R[A] = ee, R[De] = q, A = De) : (R[A] = xe, R[pe] = q, A = pe);
          else if (De < V && 0 > l(ee, q)) R[A] = ee, R[De] = q, A = De;
          else break e;
        }
      }
      return X;
    }
    function l(R, X) {
      var q = R.sortIndex - X.sortIndex;
      return q !== 0 ? q : R.id - X.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var s = performance;
      e.unstable_now = function() {
        return s.now();
      };
    } else {
      var c = Date, d = c.now();
      e.unstable_now = function() {
        return c.now() - d;
      };
    }
    var p = [], v = [], g = 1, D = null, y = 3, x = !1, C = !1, E = !1, b = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _(R) {
      for (var X = r(v); X !== null; ) {
        if (X.callback === null) i(v);
        else if (X.startTime <= R) i(v), X.sortIndex = X.expirationTime, n(p, X);
        else break;
        X = r(v);
      }
    }
    function P(R) {
      if (E = !1, _(R), !C) if (r(p) !== null) C = !0, le(O);
      else {
        var X = r(v);
        X !== null && z(P, X.startTime - R);
      }
    }
    function O(R, X) {
      C = !1, E && (E = !1, F(U), U = -1), x = !0;
      var q = y;
      try {
        for (_(X), D = r(p); D !== null && (!(D.expirationTime > X) || R && !ne()); ) {
          var A = D.callback;
          if (typeof A == "function") {
            D.callback = null, y = D.priorityLevel;
            var V = A(D.expirationTime <= X);
            X = e.unstable_now(), typeof V == "function" ? D.callback = V : D === r(p) && i(p), _(X);
          } else i(p);
          D = r(p);
        }
        if (D !== null) var ye = !0;
        else {
          var pe = r(v);
          pe !== null && z(P, pe.startTime - X), ye = !1;
        }
        return ye;
      } finally {
        D = null, y = q, x = !1;
      }
    }
    var B = !1, W = null, U = -1, $ = 5, H = -1;
    function ne() {
      return !(e.unstable_now() - H < $);
    }
    function Y() {
      if (W !== null) {
        var R = e.unstable_now();
        H = R;
        var X = !0;
        try {
          X = W(!0, R);
        } finally {
          X ? te() : (B = !1, W = null);
        }
      } else B = !1;
    }
    var te;
    if (typeof k == "function") te = function() {
      k(Y);
    };
    else if (typeof MessageChannel < "u") {
      var re = new MessageChannel(), ae = re.port2;
      re.port1.onmessage = Y, te = function() {
        ae.postMessage(null);
      };
    } else te = function() {
      b(Y, 0);
    };
    function le(R) {
      W = R, B || (B = !0, te());
    }
    function z(R, X) {
      U = b(function() {
        R(e.unstable_now());
      }, X);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, e.unstable_continueExecution = function() {
      C || x || (C = !0, le(O));
    }, e.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < R ? Math.floor(1e3 / R) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return y;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(p);
    }, e.unstable_next = function(R) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = y;
      }
      var q = y;
      y = X;
      try {
        return R();
      } finally {
        y = q;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(R, X) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var q = y;
      y = R;
      try {
        return X();
      } finally {
        y = q;
      }
    }, e.unstable_scheduleCallback = function(R, X, q) {
      var A = e.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? A + q : A) : q = A, R) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = q + V, R = { id: g++, callback: X, priorityLevel: R, startTime: q, expirationTime: V, sortIndex: -1 }, q > A ? (R.sortIndex = q, n(v, R), r(p) === null && R === r(v) && (E ? (F(U), U = -1) : E = !0, z(P, q - A))) : (R.sortIndex = V, n(p, R), C || x || (C = !0, le(O))), R;
    }, e.unstable_shouldYield = ne, e.unstable_wrapCallback = function(R) {
      var X = y;
      return function() {
        var q = y;
        y = X;
        try {
          return R.apply(this, arguments);
        } finally {
          y = q;
        }
      };
    };
  }(Ac)), Ac;
}
var Dh;
function i1() {
  return Dh || (Dh = 1, jc.exports = o1()), jc.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wh;
function a1() {
  if (wh) return Mt;
  wh = 1;
  var e = w, n = i1();
  function r(t) {
    for (var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, a = 1; a < arguments.length; a++) o += "&args[]=" + encodeURIComponent(arguments[a]);
    return "Minified React error #" + t + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var i = /* @__PURE__ */ new Set(), l = {};
  function s(t, o) {
    c(t, o), c(t + "Capture", o);
  }
  function c(t, o) {
    for (l[t] = o, t = 0; t < o.length; t++) i.add(o[t]);
  }
  var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, v = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, D = {};
  function y(t) {
    return p.call(D, t) ? !0 : p.call(g, t) ? !1 : v.test(t) ? D[t] = !0 : (g[t] = !0, !1);
  }
  function x(t, o, a, u) {
    if (a !== null && a.type === 0) return !1;
    switch (typeof o) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : a !== null ? !a.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
      default:
        return !1;
    }
  }
  function C(t, o, a, u) {
    if (o === null || typeof o > "u" || x(t, o, a, u)) return !0;
    if (u) return !1;
    if (a !== null) switch (a.type) {
      case 3:
        return !o;
      case 4:
        return o === !1;
      case 5:
        return isNaN(o);
      case 6:
        return isNaN(o) || 1 > o;
    }
    return !1;
  }
  function E(t, o, a, u, f, h, S) {
    this.acceptsBooleans = o === 2 || o === 3 || o === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = a, this.propertyName = t, this.type = o, this.sanitizeURL = h, this.removeEmptyString = S;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    b[t] = new E(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var o = t[0];
    b[o] = new E(o, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    b[t] = new E(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    b[t] = new E(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    b[t] = new E(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    b[t] = new E(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    b[t] = new E(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    b[t] = new E(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    b[t] = new E(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var F = /[\-:]([a-z])/g;
  function k(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var o = t.replace(
      F,
      k
    );
    b[o] = new E(o, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var o = t.replace(F, k);
    b[o] = new E(o, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var o = t.replace(F, k);
    b[o] = new E(o, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    b[t] = new E(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new E("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    b[t] = new E(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  function _(t, o, a, u) {
    var f = b.hasOwnProperty(o) ? b[o] : null;
    (f !== null ? f.type !== 0 : u || !(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (C(o, a, f, u) && (a = null), u || f === null ? y(o) && (a === null ? t.removeAttribute(o) : t.setAttribute(o, "" + a)) : f.mustUseProperty ? t[f.propertyName] = a === null ? f.type === 3 ? !1 : "" : a : (o = f.attributeName, u = f.attributeNamespace, a === null ? t.removeAttribute(o) : (f = f.type, a = f === 3 || f === 4 && a === !0 ? "" : "" + a, u ? t.setAttributeNS(u, o, a) : t.setAttribute(o, a))));
  }
  var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, O = Symbol.for("react.element"), B = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), ne = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), R = Symbol.iterator;
  function X(t) {
    return t === null || typeof t != "object" ? null : (t = R && t[R] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var q = Object.assign, A;
  function V(t) {
    if (A === void 0) try {
      throw Error();
    } catch (a) {
      var o = a.stack.trim().match(/\n( *(at )?)/);
      A = o && o[1] || "";
    }
    return `
` + A + t;
  }
  var ye = !1;
  function pe(t, o) {
    if (!t || ye) return "";
    ye = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (o) if (o = function() {
        throw Error();
      }, Object.defineProperty(o.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(o, []);
        } catch (I) {
          var u = I;
        }
        Reflect.construct(t, [], o);
      } else {
        try {
          o.call();
        } catch (I) {
          u = I;
        }
        t.call(o.prototype);
      }
      else {
        try {
          throw Error();
        } catch (I) {
          u = I;
        }
        t();
      }
    } catch (I) {
      if (I && u && typeof I.stack == "string") {
        for (var f = I.stack.split(`
`), h = u.stack.split(`
`), S = f.length - 1, N = h.length - 1; 1 <= S && 0 <= N && f[S] !== h[N]; ) N--;
        for (; 1 <= S && 0 <= N; S--, N--) if (f[S] !== h[N]) {
          if (S !== 1 || N !== 1)
            do
              if (S--, N--, 0 > N || f[S] !== h[N]) {
                var j = `
` + f[S].replace(" at new ", " at ");
                return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), j;
              }
            while (1 <= S && 0 <= N);
          break;
        }
      }
    } finally {
      ye = !1, Error.prepareStackTrace = a;
    }
    return (t = t ? t.displayName || t.name : "") ? V(t) : "";
  }
  function xe(t) {
    switch (t.tag) {
      case 5:
        return V(t.type);
      case 16:
        return V("Lazy");
      case 13:
        return V("Suspense");
      case 19:
        return V("SuspenseList");
      case 0:
      case 2:
      case 15:
        return t = pe(t.type, !1), t;
      case 11:
        return t = pe(t.type.render, !1), t;
      case 1:
        return t = pe(t.type, !0), t;
      default:
        return "";
    }
  }
  function De(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case W:
        return "Fragment";
      case B:
        return "Portal";
      case $:
        return "Profiler";
      case U:
        return "StrictMode";
      case te:
        return "Suspense";
      case re:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case ne:
        return (t.displayName || "Context") + ".Consumer";
      case H:
        return (t._context.displayName || "Context") + ".Provider";
      case Y:
        var o = t.render;
        return t = t.displayName, t || (t = o.displayName || o.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case ae:
        return o = t.displayName || null, o !== null ? o : De(t.type) || "Memo";
      case le:
        o = t._payload, t = t._init;
        try {
          return De(t(o));
        } catch {
        }
    }
    return null;
  }
  function ee(t) {
    var o = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (o.displayName || "Context") + ".Consumer";
      case 10:
        return (o._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return t = o.render, t = t.displayName || t.name || "", o.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return o;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return De(o);
      case 8:
        return o === U ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof o == "function") return o.displayName || o.name || null;
        if (typeof o == "string") return o;
    }
    return null;
  }
  function ue(t) {
    switch (typeof t) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Ce(t) {
    var o = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (o === "checkbox" || o === "radio");
  }
  function Z(t) {
    var o = Ce(t) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(t.constructor.prototype, o), u = "" + t[o];
    if (!t.hasOwnProperty(o) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var f = a.get, h = a.set;
      return Object.defineProperty(t, o, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(S) {
        u = "" + S, h.call(this, S);
      } }), Object.defineProperty(t, o, { enumerable: a.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(S) {
        u = "" + S;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[o];
      } };
    }
  }
  function Ne(t) {
    t._valueTracker || (t._valueTracker = Z(t));
  }
  function je(t) {
    if (!t) return !1;
    var o = t._valueTracker;
    if (!o) return !0;
    var a = o.getValue(), u = "";
    return t && (u = Ce(t) ? t.checked ? "true" : "false" : t.value), t = u, t !== a ? (o.setValue(t), !0) : !1;
  }
  function tt(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function dt(t, o) {
    var a = o.checked;
    return q({}, o, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: a ?? t._wrapperState.initialChecked });
  }
  function wt(t, o) {
    var a = o.defaultValue == null ? "" : o.defaultValue, u = o.checked != null ? o.checked : o.defaultChecked;
    a = ue(o.value != null ? o.value : a), t._wrapperState = { initialChecked: u, initialValue: a, controlled: o.type === "checkbox" || o.type === "radio" ? o.checked != null : o.value != null };
  }
  function zt(t, o) {
    o = o.checked, o != null && _(t, "checked", o, !1);
  }
  function $t(t, o) {
    zt(t, o);
    var a = ue(o.value), u = o.type;
    if (a != null) u === "number" ? (a === 0 && t.value === "" || t.value != a) && (t.value = "" + a) : t.value !== "" + a && (t.value = "" + a);
    else if (u === "submit" || u === "reset") {
      t.removeAttribute("value");
      return;
    }
    o.hasOwnProperty("value") ? Jt(t, o.type, a) : o.hasOwnProperty("defaultValue") && Jt(t, o.type, ue(o.defaultValue)), o.checked == null && o.defaultChecked != null && (t.defaultChecked = !!o.defaultChecked);
  }
  function qt(t, o, a) {
    if (o.hasOwnProperty("value") || o.hasOwnProperty("defaultValue")) {
      var u = o.type;
      if (!(u !== "submit" && u !== "reset" || o.value !== void 0 && o.value !== null)) return;
      o = "" + t._wrapperState.initialValue, a || o === t.value || (t.value = o), t.defaultValue = o;
    }
    a = t.name, a !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, a !== "" && (t.name = a);
  }
  function Jt(t, o, a) {
    (o !== "number" || tt(t.ownerDocument) !== t) && (a == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + a && (t.defaultValue = "" + a));
  }
  var bn = Array.isArray;
  function Fn(t, o, a, u) {
    if (t = t.options, o) {
      o = {};
      for (var f = 0; f < a.length; f++) o["$" + a[f]] = !0;
      for (a = 0; a < t.length; a++) f = o.hasOwnProperty("$" + t[a].value), t[a].selected !== f && (t[a].selected = f), f && u && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + ue(a), o = null, f = 0; f < t.length; f++) {
        if (t[f].value === a) {
          t[f].selected = !0, u && (t[f].defaultSelected = !0);
          return;
        }
        o !== null || t[f].disabled || (o = t[f]);
      }
      o !== null && (o.selected = !0);
    }
  }
  function eo(t, o) {
    if (o.dangerouslySetInnerHTML != null) throw Error(r(91));
    return q({}, o, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
  }
  function un(t, o) {
    var a = o.value;
    if (a == null) {
      if (a = o.children, o = o.defaultValue, a != null) {
        if (o != null) throw Error(r(92));
        if (bn(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        o = a;
      }
      o == null && (o = ""), a = o;
    }
    t._wrapperState = { initialValue: ue(a) };
  }
  function Io(t, o) {
    var a = ue(o.value), u = ue(o.defaultValue);
    a != null && (a = "" + a, a !== t.value && (t.value = a), o.defaultValue == null && t.defaultValue !== a && (t.defaultValue = a)), u != null && (t.defaultValue = "" + u);
  }
  function to(t) {
    var o = t.textContent;
    o === t._wrapperState.initialValue && o !== "" && o !== null && (t.value = o);
  }
  function Bo(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Zt(t, o) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Bo(o) : t === "http://www.w3.org/2000/svg" && o === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
  }
  var $n, hr = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(o, a, u, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return t(o, a, u, f);
      });
    } : t;
  }(function(t, o) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = o;
    else {
      for ($n = $n || document.createElement("div"), $n.innerHTML = "<svg>" + o.valueOf().toString() + "</svg>", o = $n.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
      for (; o.firstChild; ) t.appendChild(o.firstChild);
    }
  });
  function kn(t, o) {
    if (o) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = o;
        return;
      }
    }
    t.textContent = o;
  }
  var Pt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, vr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Pt).forEach(function(t) {
    vr.forEach(function(o) {
      o = o + t.charAt(0).toUpperCase() + t.substring(1), Pt[o] = Pt[t];
    });
  });
  function gr(t, o, a) {
    return o == null || typeof o == "boolean" || o === "" ? "" : a || typeof o != "number" || o === 0 || Pt.hasOwnProperty(t) && Pt[t] ? ("" + o).trim() : o + "px";
  }
  function yr(t, o) {
    t = t.style;
    for (var a in o) if (o.hasOwnProperty(a)) {
      var u = a.indexOf("--") === 0, f = gr(a, o[a], u);
      a === "float" && (a = "cssFloat"), u ? t.setProperty(a, f) : t[a] = f;
    }
  }
  var me = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Se(t, o) {
    if (o) {
      if (me[t] && (o.children != null || o.dangerouslySetInnerHTML != null)) throw Error(r(137, t));
      if (o.dangerouslySetInnerHTML != null) {
        if (o.children != null) throw Error(r(60));
        if (typeof o.dangerouslySetInnerHTML != "object" || !("__html" in o.dangerouslySetInnerHTML)) throw Error(r(61));
      }
      if (o.style != null && typeof o.style != "object") throw Error(r(62));
    }
  }
  function Le(t, o) {
    if (t.indexOf("-") === -1) return typeof o.is == "string";
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var be = null;
  function We(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var $e = null, nt = null, he = null;
  function Ye(t) {
    if (t = ta(t)) {
      if (typeof $e != "function") throw Error(r(280));
      var o = t.stateNode;
      o && (o = dl(o), $e(t.stateNode, t.type, o));
    }
  }
  function at(t) {
    nt ? he ? he.push(t) : he = [t] : nt = t;
  }
  function He() {
    if (nt) {
      var t = nt, o = he;
      if (he = nt = null, Ye(t), o) for (t = 0; t < o.length; t++) Ye(o[t]);
    }
  }
  function cn(t, o) {
    return t(o);
  }
  function vt() {
  }
  var Hn = !1;
  function Wo(t, o, a) {
    if (Hn) return t(o, a);
    Hn = !0;
    try {
      return cn(t, o, a);
    } finally {
      Hn = !1, (nt !== null || he !== null) && (vt(), He());
    }
  }
  function no(t, o) {
    var a = t.stateNode;
    if (a === null) return null;
    var u = dl(a);
    if (u === null) return null;
    a = u[o];
    e: switch (o) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (t = t.type, u = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !u;
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(r(231, o, typeof a));
    return a;
  }
  var Ri = !1;
  if (d) try {
    var ro = {};
    Object.defineProperty(ro, "passive", { get: function() {
      Ri = !0;
    } }), window.addEventListener("test", ro, ro), window.removeEventListener("test", ro, ro);
  } catch {
    Ri = !1;
  }
  function Gs(t, o, a, u, f, h, S, N, j) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      o.apply(a, I);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var oo = !1, zo = null, $o = !1, Vn = null, Mi = { onError: function(t) {
    oo = !0, zo = t;
  } };
  function aw(t, o, a, u, f, h, S, N, j) {
    oo = !1, zo = null, Gs.apply(Mi, arguments);
  }
  function lw(t, o, a, u, f, h, S, N, j) {
    if (aw.apply(this, arguments), oo) {
      if (oo) {
        var I = zo;
        oo = !1, zo = null;
      } else throw Error(r(198));
      $o || ($o = !0, Vn = I);
    }
  }
  function io(t) {
    var o = t, a = t;
    if (t.alternate) for (; o.return; ) o = o.return;
    else {
      t = o;
      do
        o = t, o.flags & 4098 && (a = o.return), t = o.return;
      while (t);
    }
    return o.tag === 3 ? a : null;
  }
  function Bf(t) {
    if (t.tag === 13) {
      var o = t.memoizedState;
      if (o === null && (t = t.alternate, t !== null && (o = t.memoizedState)), o !== null) return o.dehydrated;
    }
    return null;
  }
  function Wf(t) {
    if (io(t) !== t) throw Error(r(188));
  }
  function sw(t) {
    var o = t.alternate;
    if (!o) {
      if (o = io(t), o === null) throw Error(r(188));
      return o !== t ? null : t;
    }
    for (var a = t, u = o; ; ) {
      var f = a.return;
      if (f === null) break;
      var h = f.alternate;
      if (h === null) {
        if (u = f.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (f.child === h.child) {
        for (h = f.child; h; ) {
          if (h === a) return Wf(f), t;
          if (h === u) return Wf(f), o;
          h = h.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== u.return) a = f, u = h;
      else {
        for (var S = !1, N = f.child; N; ) {
          if (N === a) {
            S = !0, a = f, u = h;
            break;
          }
          if (N === u) {
            S = !0, u = f, a = h;
            break;
          }
          N = N.sibling;
        }
        if (!S) {
          for (N = h.child; N; ) {
            if (N === a) {
              S = !0, a = h, u = f;
              break;
            }
            if (N === u) {
              S = !0, u = h, a = f;
              break;
            }
            N = N.sibling;
          }
          if (!S) throw Error(r(189));
        }
      }
      if (a.alternate !== u) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? t : o;
  }
  function zf(t) {
    return t = sw(t), t !== null ? $f(t) : null;
  }
  function $f(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
      var o = $f(t);
      if (o !== null) return o;
      t = t.sibling;
    }
    return null;
  }
  var Hf = n.unstable_scheduleCallback, Vf = n.unstable_cancelCallback, uw = n.unstable_shouldYield, cw = n.unstable_requestPaint, ot = n.unstable_now, dw = n.unstable_getCurrentPriorityLevel, qs = n.unstable_ImmediatePriority, Uf = n.unstable_UserBlockingPriority, Ua = n.unstable_NormalPriority, fw = n.unstable_LowPriority, Yf = n.unstable_IdlePriority, Ya = null, Nn = null;
  function pw(t) {
    if (Nn && typeof Nn.onCommitFiberRoot == "function") try {
      Nn.onCommitFiberRoot(Ya, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
  }
  var dn = Math.clz32 ? Math.clz32 : vw, mw = Math.log, hw = Math.LN2;
  function vw(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (mw(t) / hw | 0) | 0;
  }
  var Ka = 64, Qa = 4194304;
  function Li(t) {
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function Xa(t, o) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0, f = t.suspendedLanes, h = t.pingedLanes, S = a & 268435455;
    if (S !== 0) {
      var N = S & ~f;
      N !== 0 ? u = Li(N) : (h &= S, h !== 0 && (u = Li(h)));
    } else S = a & ~f, S !== 0 ? u = Li(S) : h !== 0 && (u = Li(h));
    if (u === 0) return 0;
    if (o !== 0 && o !== u && !(o & f) && (f = u & -u, h = o & -o, f >= h || f === 16 && (h & 4194240) !== 0)) return o;
    if (u & 4 && (u |= a & 16), o = t.entangledLanes, o !== 0) for (t = t.entanglements, o &= u; 0 < o; ) a = 31 - dn(o), f = 1 << a, u |= t[a], o &= ~f;
    return u;
  }
  function gw(t, o) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return o + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return o + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yw(t, o) {
    for (var a = t.suspendedLanes, u = t.pingedLanes, f = t.expirationTimes, h = t.pendingLanes; 0 < h; ) {
      var S = 31 - dn(h), N = 1 << S, j = f[S];
      j === -1 ? (!(N & a) || N & u) && (f[S] = gw(N, o)) : j <= o && (t.expiredLanes |= N), h &= ~N;
    }
  }
  function Js(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function Kf() {
    var t = Ka;
    return Ka <<= 1, !(Ka & 4194240) && (Ka = 64), t;
  }
  function Zs(t) {
    for (var o = [], a = 0; 31 > a; a++) o.push(t);
    return o;
  }
  function Ii(t, o, a) {
    t.pendingLanes |= o, o !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, o = 31 - dn(o), t[o] = a;
  }
  function Dw(t, o) {
    var a = t.pendingLanes & ~o;
    t.pendingLanes = o, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= o, t.mutableReadLanes &= o, t.entangledLanes &= o, o = t.entanglements;
    var u = t.eventTimes;
    for (t = t.expirationTimes; 0 < a; ) {
      var f = 31 - dn(a), h = 1 << f;
      o[f] = 0, u[f] = -1, t[f] = -1, a &= ~h;
    }
  }
  function eu(t, o) {
    var a = t.entangledLanes |= o;
    for (t = t.entanglements; a; ) {
      var u = 31 - dn(a), f = 1 << u;
      f & o | t[u] & o && (t[u] |= o), a &= ~f;
    }
  }
  var Ie = 0;
  function Qf(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Xf, tu, Gf, qf, Jf, nu = !1, Ga = [], Dr = null, wr = null, xr = null, Bi = /* @__PURE__ */ new Map(), Wi = /* @__PURE__ */ new Map(), Cr = [], ww = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Zf(t, o) {
    switch (t) {
      case "focusin":
      case "focusout":
        Dr = null;
        break;
      case "dragenter":
      case "dragleave":
        wr = null;
        break;
      case "mouseover":
      case "mouseout":
        xr = null;
        break;
      case "pointerover":
      case "pointerout":
        Bi.delete(o.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wi.delete(o.pointerId);
    }
  }
  function zi(t, o, a, u, f, h) {
    return t === null || t.nativeEvent !== h ? (t = { blockedOn: o, domEventName: a, eventSystemFlags: u, nativeEvent: h, targetContainers: [f] }, o !== null && (o = ta(o), o !== null && tu(o)), t) : (t.eventSystemFlags |= u, o = t.targetContainers, f !== null && o.indexOf(f) === -1 && o.push(f), t);
  }
  function xw(t, o, a, u, f) {
    switch (o) {
      case "focusin":
        return Dr = zi(Dr, t, o, a, u, f), !0;
      case "dragenter":
        return wr = zi(wr, t, o, a, u, f), !0;
      case "mouseover":
        return xr = zi(xr, t, o, a, u, f), !0;
      case "pointerover":
        var h = f.pointerId;
        return Bi.set(h, zi(Bi.get(h) || null, t, o, a, u, f)), !0;
      case "gotpointercapture":
        return h = f.pointerId, Wi.set(h, zi(Wi.get(h) || null, t, o, a, u, f)), !0;
    }
    return !1;
  }
  function ep(t) {
    var o = ao(t.target);
    if (o !== null) {
      var a = io(o);
      if (a !== null) {
        if (o = a.tag, o === 13) {
          if (o = Bf(a), o !== null) {
            t.blockedOn = o, Jf(t.priority, function() {
              Gf(a);
            });
            return;
          }
        } else if (o === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function qa(t) {
    if (t.blockedOn !== null) return !1;
    for (var o = t.targetContainers; 0 < o.length; ) {
      var a = ou(t.domEventName, t.eventSystemFlags, o[0], t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var u = new a.constructor(a.type, a);
        be = u, a.target.dispatchEvent(u), be = null;
      } else return o = ta(a), o !== null && tu(o), t.blockedOn = a, !1;
      o.shift();
    }
    return !0;
  }
  function tp(t, o, a) {
    qa(t) && a.delete(o);
  }
  function Cw() {
    nu = !1, Dr !== null && qa(Dr) && (Dr = null), wr !== null && qa(wr) && (wr = null), xr !== null && qa(xr) && (xr = null), Bi.forEach(tp), Wi.forEach(tp);
  }
  function $i(t, o) {
    t.blockedOn === o && (t.blockedOn = null, nu || (nu = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, Cw)));
  }
  function Hi(t) {
    function o(f) {
      return $i(f, t);
    }
    if (0 < Ga.length) {
      $i(Ga[0], t);
      for (var a = 1; a < Ga.length; a++) {
        var u = Ga[a];
        u.blockedOn === t && (u.blockedOn = null);
      }
    }
    for (Dr !== null && $i(Dr, t), wr !== null && $i(wr, t), xr !== null && $i(xr, t), Bi.forEach(o), Wi.forEach(o), a = 0; a < Cr.length; a++) u = Cr[a], u.blockedOn === t && (u.blockedOn = null);
    for (; 0 < Cr.length && (a = Cr[0], a.blockedOn === null); ) ep(a), a.blockedOn === null && Cr.shift();
  }
  var Ho = P.ReactCurrentBatchConfig, Ja = !0;
  function Ew(t, o, a, u) {
    var f = Ie, h = Ho.transition;
    Ho.transition = null;
    try {
      Ie = 1, ru(t, o, a, u);
    } finally {
      Ie = f, Ho.transition = h;
    }
  }
  function Sw(t, o, a, u) {
    var f = Ie, h = Ho.transition;
    Ho.transition = null;
    try {
      Ie = 4, ru(t, o, a, u);
    } finally {
      Ie = f, Ho.transition = h;
    }
  }
  function ru(t, o, a, u) {
    if (Ja) {
      var f = ou(t, o, a, u);
      if (f === null) xu(t, o, u, Za, a), Zf(t, u);
      else if (xw(f, t, o, a, u)) u.stopPropagation();
      else if (Zf(t, u), o & 4 && -1 < ww.indexOf(t)) {
        for (; f !== null; ) {
          var h = ta(f);
          if (h !== null && Xf(h), h = ou(t, o, a, u), h === null && xu(t, o, u, Za, a), h === f) break;
          f = h;
        }
        f !== null && u.stopPropagation();
      } else xu(t, o, u, null, a);
    }
  }
  var Za = null;
  function ou(t, o, a, u) {
    if (Za = null, t = We(u), t = ao(t), t !== null) if (o = io(t), o === null) t = null;
    else if (a = o.tag, a === 13) {
      if (t = Bf(o), t !== null) return t;
      t = null;
    } else if (a === 3) {
      if (o.stateNode.current.memoizedState.isDehydrated) return o.tag === 3 ? o.stateNode.containerInfo : null;
      t = null;
    } else o !== t && (t = null);
    return Za = t, null;
  }
  function np(t) {
    switch (t) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (dw()) {
          case qs:
            return 1;
          case Uf:
            return 4;
          case Ua:
          case fw:
            return 16;
          case Yf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Er = null, iu = null, el = null;
  function rp() {
    if (el) return el;
    var t, o = iu, a = o.length, u, f = "value" in Er ? Er.value : Er.textContent, h = f.length;
    for (t = 0; t < a && o[t] === f[t]; t++) ;
    var S = a - t;
    for (u = 1; u <= S && o[a - u] === f[h - u]; u++) ;
    return el = f.slice(t, 1 < u ? 1 - u : void 0);
  }
  function tl(t) {
    var o = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && o === 13 && (t = 13)) : t = o, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function nl() {
    return !0;
  }
  function op() {
    return !1;
  }
  function Ht(t) {
    function o(a, u, f, h, S) {
      this._reactName = a, this._targetInst = f, this.type = u, this.nativeEvent = h, this.target = S, this.currentTarget = null;
      for (var N in t) t.hasOwnProperty(N) && (a = t[N], this[N] = a ? a(h) : h[N]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? nl : op, this.isPropagationStopped = op, this;
    }
    return q(o.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var a = this.nativeEvent;
      a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = nl);
    }, stopPropagation: function() {
      var a = this.nativeEvent;
      a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = nl);
    }, persist: function() {
    }, isPersistent: nl }), o;
  }
  var Vo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, au = Ht(Vo), Vi = q({}, Vo, { view: 0, detail: 0 }), bw = Ht(Vi), lu, su, Ui, rl = q({}, Vi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: cu, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== Ui && (Ui && t.type === "mousemove" ? (lu = t.screenX - Ui.screenX, su = t.screenY - Ui.screenY) : su = lu = 0, Ui = t), lu);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : su;
  } }), ip = Ht(rl), Fw = q({}, rl, { dataTransfer: 0 }), kw = Ht(Fw), Nw = q({}, Vi, { relatedTarget: 0 }), uu = Ht(Nw), _w = q({}, Vo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Pw = Ht(_w), jw = q({}, Vo, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), Aw = Ht(jw), Ow = q({}, Vo, { data: 0 }), ap = Ht(Ow), Tw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Rw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Mw = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Lw(t) {
    var o = this.nativeEvent;
    return o.getModifierState ? o.getModifierState(t) : (t = Mw[t]) ? !!o[t] : !1;
  }
  function cu() {
    return Lw;
  }
  var Iw = q({}, Vi, { key: function(t) {
    if (t.key) {
      var o = Tw[t.key] || t.key;
      if (o !== "Unidentified") return o;
    }
    return t.type === "keypress" ? (t = tl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Rw[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: cu, charCode: function(t) {
    return t.type === "keypress" ? tl(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? tl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), Bw = Ht(Iw), Ww = q({}, rl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), lp = Ht(Ww), zw = q({}, Vi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: cu }), $w = Ht(zw), Hw = q({}, Vo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Vw = Ht(Hw), Uw = q({}, rl, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yw = Ht(Uw), Kw = [9, 13, 27, 32], du = d && "CompositionEvent" in window, Yi = null;
  d && "documentMode" in document && (Yi = document.documentMode);
  var Qw = d && "TextEvent" in window && !Yi, sp = d && (!du || Yi && 8 < Yi && 11 >= Yi), up = " ", cp = !1;
  function dp(t, o) {
    switch (t) {
      case "keyup":
        return Kw.indexOf(o.keyCode) !== -1;
      case "keydown":
        return o.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function fp(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Uo = !1;
  function Xw(t, o) {
    switch (t) {
      case "compositionend":
        return fp(o);
      case "keypress":
        return o.which !== 32 ? null : (cp = !0, up);
      case "textInput":
        return t = o.data, t === up && cp ? null : t;
      default:
        return null;
    }
  }
  function Gw(t, o) {
    if (Uo) return t === "compositionend" || !du && dp(t, o) ? (t = rp(), el = iu = Er = null, Uo = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(o.ctrlKey || o.altKey || o.metaKey) || o.ctrlKey && o.altKey) {
          if (o.char && 1 < o.char.length) return o.char;
          if (o.which) return String.fromCharCode(o.which);
        }
        return null;
      case "compositionend":
        return sp && o.locale !== "ko" ? null : o.data;
      default:
        return null;
    }
  }
  var qw = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function pp(t) {
    var o = t && t.nodeName && t.nodeName.toLowerCase();
    return o === "input" ? !!qw[t.type] : o === "textarea";
  }
  function mp(t, o, a, u) {
    at(u), o = sl(o, "onChange"), 0 < o.length && (a = new au("onChange", "change", null, a, u), t.push({ event: a, listeners: o }));
  }
  var Ki = null, Qi = null;
  function Jw(t) {
    Ap(t, 0);
  }
  function ol(t) {
    var o = Go(t);
    if (je(o)) return t;
  }
  function Zw(t, o) {
    if (t === "change") return o;
  }
  var hp = !1;
  if (d) {
    var fu;
    if (d) {
      var pu = "oninput" in document;
      if (!pu) {
        var vp = document.createElement("div");
        vp.setAttribute("oninput", "return;"), pu = typeof vp.oninput == "function";
      }
      fu = pu;
    } else fu = !1;
    hp = fu && (!document.documentMode || 9 < document.documentMode);
  }
  function gp() {
    Ki && (Ki.detachEvent("onpropertychange", yp), Qi = Ki = null);
  }
  function yp(t) {
    if (t.propertyName === "value" && ol(Qi)) {
      var o = [];
      mp(o, Qi, t, We(t)), Wo(Jw, o);
    }
  }
  function ex(t, o, a) {
    t === "focusin" ? (gp(), Ki = o, Qi = a, Ki.attachEvent("onpropertychange", yp)) : t === "focusout" && gp();
  }
  function tx(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return ol(Qi);
  }
  function nx(t, o) {
    if (t === "click") return ol(o);
  }
  function rx(t, o) {
    if (t === "input" || t === "change") return ol(o);
  }
  function ox(t, o) {
    return t === o && (t !== 0 || 1 / t === 1 / o) || t !== t && o !== o;
  }
  var fn = typeof Object.is == "function" ? Object.is : ox;
  function Xi(t, o) {
    if (fn(t, o)) return !0;
    if (typeof t != "object" || t === null || typeof o != "object" || o === null) return !1;
    var a = Object.keys(t), u = Object.keys(o);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var f = a[u];
      if (!p.call(o, f) || !fn(t[f], o[f])) return !1;
    }
    return !0;
  }
  function Dp(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function wp(t, o) {
    var a = Dp(t);
    t = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = t + a.textContent.length, t <= o && u >= o) return { node: a, offset: o - t };
        t = u;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Dp(a);
    }
  }
  function xp(t, o) {
    return t && o ? t === o ? !0 : t && t.nodeType === 3 ? !1 : o && o.nodeType === 3 ? xp(t, o.parentNode) : "contains" in t ? t.contains(o) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(o) & 16) : !1 : !1;
  }
  function Cp() {
    for (var t = window, o = tt(); o instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof o.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = o.contentWindow;
      else break;
      o = tt(t.document);
    }
    return o;
  }
  function mu(t) {
    var o = t && t.nodeName && t.nodeName.toLowerCase();
    return o && (o === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || o === "textarea" || t.contentEditable === "true");
  }
  function ix(t) {
    var o = Cp(), a = t.focusedElem, u = t.selectionRange;
    if (o !== a && a && a.ownerDocument && xp(a.ownerDocument.documentElement, a)) {
      if (u !== null && mu(a)) {
        if (o = u.start, t = u.end, t === void 0 && (t = o), "selectionStart" in a) a.selectionStart = o, a.selectionEnd = Math.min(t, a.value.length);
        else if (t = (o = a.ownerDocument || document) && o.defaultView || window, t.getSelection) {
          t = t.getSelection();
          var f = a.textContent.length, h = Math.min(u.start, f);
          u = u.end === void 0 ? h : Math.min(u.end, f), !t.extend && h > u && (f = u, u = h, h = f), f = wp(a, h);
          var S = wp(
            a,
            u
          );
          f && S && (t.rangeCount !== 1 || t.anchorNode !== f.node || t.anchorOffset !== f.offset || t.focusNode !== S.node || t.focusOffset !== S.offset) && (o = o.createRange(), o.setStart(f.node, f.offset), t.removeAllRanges(), h > u ? (t.addRange(o), t.extend(S.node, S.offset)) : (o.setEnd(S.node, S.offset), t.addRange(o)));
        }
      }
      for (o = [], t = a; t = t.parentNode; ) t.nodeType === 1 && o.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof a.focus == "function" && a.focus(), a = 0; a < o.length; a++) t = o[a], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var ax = d && "documentMode" in document && 11 >= document.documentMode, Yo = null, hu = null, Gi = null, vu = !1;
  function Ep(t, o, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    vu || Yo == null || Yo !== tt(u) || (u = Yo, "selectionStart" in u && mu(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Gi && Xi(Gi, u) || (Gi = u, u = sl(hu, "onSelect"), 0 < u.length && (o = new au("onSelect", "select", null, o, a), t.push({ event: o, listeners: u }), o.target = Yo)));
  }
  function il(t, o) {
    var a = {};
    return a[t.toLowerCase()] = o.toLowerCase(), a["Webkit" + t] = "webkit" + o, a["Moz" + t] = "moz" + o, a;
  }
  var Ko = { animationend: il("Animation", "AnimationEnd"), animationiteration: il("Animation", "AnimationIteration"), animationstart: il("Animation", "AnimationStart"), transitionend: il("Transition", "TransitionEnd") }, gu = {}, Sp = {};
  d && (Sp = document.createElement("div").style, "AnimationEvent" in window || (delete Ko.animationend.animation, delete Ko.animationiteration.animation, delete Ko.animationstart.animation), "TransitionEvent" in window || delete Ko.transitionend.transition);
  function al(t) {
    if (gu[t]) return gu[t];
    if (!Ko[t]) return t;
    var o = Ko[t], a;
    for (a in o) if (o.hasOwnProperty(a) && a in Sp) return gu[t] = o[a];
    return t;
  }
  var bp = al("animationend"), Fp = al("animationiteration"), kp = al("animationstart"), Np = al("transitionend"), _p = /* @__PURE__ */ new Map(), Pp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Sr(t, o) {
    _p.set(t, o), s(o, [t]);
  }
  for (var yu = 0; yu < Pp.length; yu++) {
    var Du = Pp[yu], lx = Du.toLowerCase(), sx = Du[0].toUpperCase() + Du.slice(1);
    Sr(lx, "on" + sx);
  }
  Sr(bp, "onAnimationEnd"), Sr(Fp, "onAnimationIteration"), Sr(kp, "onAnimationStart"), Sr("dblclick", "onDoubleClick"), Sr("focusin", "onFocus"), Sr("focusout", "onBlur"), Sr(Np, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ux = new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));
  function jp(t, o, a) {
    var u = t.type || "unknown-event";
    t.currentTarget = a, lw(u, o, void 0, t), t.currentTarget = null;
  }
  function Ap(t, o) {
    o = (o & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var u = t[a], f = u.event;
      u = u.listeners;
      e: {
        var h = void 0;
        if (o) for (var S = u.length - 1; 0 <= S; S--) {
          var N = u[S], j = N.instance, I = N.currentTarget;
          if (N = N.listener, j !== h && f.isPropagationStopped()) break e;
          jp(f, N, I), h = j;
        }
        else for (S = 0; S < u.length; S++) {
          if (N = u[S], j = N.instance, I = N.currentTarget, N = N.listener, j !== h && f.isPropagationStopped()) break e;
          jp(f, N, I), h = j;
        }
      }
    }
    if ($o) throw t = Vn, $o = !1, Vn = null, t;
  }
  function Ke(t, o) {
    var a = o[ku];
    a === void 0 && (a = o[ku] = /* @__PURE__ */ new Set());
    var u = t + "__bubble";
    a.has(u) || (Op(o, t, 2, !1), a.add(u));
  }
  function wu(t, o, a) {
    var u = 0;
    o && (u |= 4), Op(a, t, u, o);
  }
  var ll = "_reactListening" + Math.random().toString(36).slice(2);
  function Ji(t) {
    if (!t[ll]) {
      t[ll] = !0, i.forEach(function(a) {
        a !== "selectionchange" && (ux.has(a) || wu(a, !1, t), wu(a, !0, t));
      });
      var o = t.nodeType === 9 ? t : t.ownerDocument;
      o === null || o[ll] || (o[ll] = !0, wu("selectionchange", !1, o));
    }
  }
  function Op(t, o, a, u) {
    switch (np(o)) {
      case 1:
        var f = Ew;
        break;
      case 4:
        f = Sw;
        break;
      default:
        f = ru;
    }
    a = f.bind(null, o, a, t), f = void 0, !Ri || o !== "touchstart" && o !== "touchmove" && o !== "wheel" || (f = !0), u ? f !== void 0 ? t.addEventListener(o, a, { capture: !0, passive: f }) : t.addEventListener(o, a, !0) : f !== void 0 ? t.addEventListener(o, a, { passive: f }) : t.addEventListener(o, a, !1);
  }
  function xu(t, o, a, u, f) {
    var h = u;
    if (!(o & 1) && !(o & 2) && u !== null) e: for (; ; ) {
      if (u === null) return;
      var S = u.tag;
      if (S === 3 || S === 4) {
        var N = u.stateNode.containerInfo;
        if (N === f || N.nodeType === 8 && N.parentNode === f) break;
        if (S === 4) for (S = u.return; S !== null; ) {
          var j = S.tag;
          if ((j === 3 || j === 4) && (j = S.stateNode.containerInfo, j === f || j.nodeType === 8 && j.parentNode === f)) return;
          S = S.return;
        }
        for (; N !== null; ) {
          if (S = ao(N), S === null) return;
          if (j = S.tag, j === 5 || j === 6) {
            u = h = S;
            continue e;
          }
          N = N.parentNode;
        }
      }
      u = u.return;
    }
    Wo(function() {
      var I = h, Q = We(a), G = [];
      e: {
        var K = _p.get(t);
        if (K !== void 0) {
          var ie = au, ce = t;
          switch (t) {
            case "keypress":
              if (tl(a) === 0) break e;
            case "keydown":
            case "keyup":
              ie = Bw;
              break;
            case "focusin":
              ce = "focus", ie = uu;
              break;
            case "focusout":
              ce = "blur", ie = uu;
              break;
            case "beforeblur":
            case "afterblur":
              ie = uu;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ie = ip;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ie = kw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ie = $w;
              break;
            case bp:
            case Fp:
            case kp:
              ie = Pw;
              break;
            case Np:
              ie = Vw;
              break;
            case "scroll":
              ie = bw;
              break;
            case "wheel":
              ie = Yw;
              break;
            case "copy":
            case "cut":
            case "paste":
              ie = Aw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ie = lp;
          }
          var de = (o & 4) !== 0, it = !de && t === "scroll", M = de ? K !== null ? K + "Capture" : null : K;
          de = [];
          for (var T = I, L; T !== null; ) {
            L = T;
            var J = L.stateNode;
            if (L.tag === 5 && J !== null && (L = J, M !== null && (J = no(T, M), J != null && de.push(Zi(T, J, L)))), it) break;
            T = T.return;
          }
          0 < de.length && (K = new ie(K, ce, null, a, Q), G.push({ event: K, listeners: de }));
        }
      }
      if (!(o & 7)) {
        e: {
          if (K = t === "mouseover" || t === "pointerover", ie = t === "mouseout" || t === "pointerout", K && a !== be && (ce = a.relatedTarget || a.fromElement) && (ao(ce) || ce[Un])) break e;
          if ((ie || K) && (K = Q.window === Q ? Q : (K = Q.ownerDocument) ? K.defaultView || K.parentWindow : window, ie ? (ce = a.relatedTarget || a.toElement, ie = I, ce = ce ? ao(ce) : null, ce !== null && (it = io(ce), ce !== it || ce.tag !== 5 && ce.tag !== 6) && (ce = null)) : (ie = null, ce = I), ie !== ce)) {
            if (de = ip, J = "onMouseLeave", M = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (de = lp, J = "onPointerLeave", M = "onPointerEnter", T = "pointer"), it = ie == null ? K : Go(ie), L = ce == null ? K : Go(ce), K = new de(J, T + "leave", ie, a, Q), K.target = it, K.relatedTarget = L, J = null, ao(Q) === I && (de = new de(M, T + "enter", ce, a, Q), de.target = L, de.relatedTarget = it, J = de), it = J, ie && ce) t: {
              for (de = ie, M = ce, T = 0, L = de; L; L = Qo(L)) T++;
              for (L = 0, J = M; J; J = Qo(J)) L++;
              for (; 0 < T - L; ) de = Qo(de), T--;
              for (; 0 < L - T; ) M = Qo(M), L--;
              for (; T--; ) {
                if (de === M || M !== null && de === M.alternate) break t;
                de = Qo(de), M = Qo(M);
              }
              de = null;
            }
            else de = null;
            ie !== null && Tp(G, K, ie, de, !1), ce !== null && it !== null && Tp(G, it, ce, de, !0);
          }
        }
        e: {
          if (K = I ? Go(I) : window, ie = K.nodeName && K.nodeName.toLowerCase(), ie === "select" || ie === "input" && K.type === "file") var fe = Zw;
          else if (pp(K)) if (hp) fe = rx;
          else {
            fe = tx;
            var ve = ex;
          }
          else (ie = K.nodeName) && ie.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (fe = nx);
          if (fe && (fe = fe(t, I))) {
            mp(G, fe, a, Q);
            break e;
          }
          ve && ve(t, K, I), t === "focusout" && (ve = K._wrapperState) && ve.controlled && K.type === "number" && Jt(K, "number", K.value);
        }
        switch (ve = I ? Go(I) : window, t) {
          case "focusin":
            (pp(ve) || ve.contentEditable === "true") && (Yo = ve, hu = I, Gi = null);
            break;
          case "focusout":
            Gi = hu = Yo = null;
            break;
          case "mousedown":
            vu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vu = !1, Ep(G, a, Q);
            break;
          case "selectionchange":
            if (ax) break;
          case "keydown":
          case "keyup":
            Ep(G, a, Q);
        }
        var ge;
        if (du) e: {
          switch (t) {
            case "compositionstart":
              var Ee = "onCompositionStart";
              break e;
            case "compositionend":
              Ee = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ee = "onCompositionUpdate";
              break e;
          }
          Ee = void 0;
        }
        else Uo ? dp(t, a) && (Ee = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (sp && a.locale !== "ko" && (Uo || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Uo && (ge = rp()) : (Er = Q, iu = "value" in Er ? Er.value : Er.textContent, Uo = !0)), ve = sl(I, Ee), 0 < ve.length && (Ee = new ap(Ee, t, null, a, Q), G.push({ event: Ee, listeners: ve }), ge ? Ee.data = ge : (ge = fp(a), ge !== null && (Ee.data = ge)))), (ge = Qw ? Xw(t, a) : Gw(t, a)) && (I = sl(I, "onBeforeInput"), 0 < I.length && (Q = new ap("onBeforeInput", "beforeinput", null, a, Q), G.push({ event: Q, listeners: I }), Q.data = ge));
      }
      Ap(G, o);
    });
  }
  function Zi(t, o, a) {
    return { instance: t, listener: o, currentTarget: a };
  }
  function sl(t, o) {
    for (var a = o + "Capture", u = []; t !== null; ) {
      var f = t, h = f.stateNode;
      f.tag === 5 && h !== null && (f = h, h = no(t, a), h != null && u.unshift(Zi(t, h, f)), h = no(t, o), h != null && u.push(Zi(t, h, f))), t = t.return;
    }
    return u;
  }
  function Qo(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function Tp(t, o, a, u, f) {
    for (var h = o._reactName, S = []; a !== null && a !== u; ) {
      var N = a, j = N.alternate, I = N.stateNode;
      if (j !== null && j === u) break;
      N.tag === 5 && I !== null && (N = I, f ? (j = no(a, h), j != null && S.unshift(Zi(a, j, N))) : f || (j = no(a, h), j != null && S.push(Zi(a, j, N)))), a = a.return;
    }
    S.length !== 0 && t.push({ event: o, listeners: S });
  }
  var cx = /\r\n?/g, dx = /\u0000|\uFFFD/g;
  function Rp(t) {
    return (typeof t == "string" ? t : "" + t).replace(cx, `
`).replace(dx, "");
  }
  function ul(t, o, a) {
    if (o = Rp(o), Rp(t) !== o && a) throw Error(r(425));
  }
  function cl() {
  }
  var Cu = null, Eu = null;
  function Su(t, o) {
    return t === "textarea" || t === "noscript" || typeof o.children == "string" || typeof o.children == "number" || typeof o.dangerouslySetInnerHTML == "object" && o.dangerouslySetInnerHTML !== null && o.dangerouslySetInnerHTML.__html != null;
  }
  var bu = typeof setTimeout == "function" ? setTimeout : void 0, fx = typeof clearTimeout == "function" ? clearTimeout : void 0, Mp = typeof Promise == "function" ? Promise : void 0, px = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mp < "u" ? function(t) {
    return Mp.resolve(null).then(t).catch(mx);
  } : bu;
  function mx(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Fu(t, o) {
    var a = o, u = 0;
    do {
      var f = a.nextSibling;
      if (t.removeChild(a), f && f.nodeType === 8) if (a = f.data, a === "/$") {
        if (u === 0) {
          t.removeChild(f), Hi(o);
          return;
        }
        u--;
      } else a !== "$" && a !== "$?" && a !== "$!" || u++;
      a = f;
    } while (a);
    Hi(o);
  }
  function br(t) {
    for (; t != null; t = t.nextSibling) {
      var o = t.nodeType;
      if (o === 1 || o === 3) break;
      if (o === 8) {
        if (o = t.data, o === "$" || o === "$!" || o === "$?") break;
        if (o === "/$") return null;
      }
    }
    return t;
  }
  function Lp(t) {
    t = t.previousSibling;
    for (var o = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (o === 0) return t;
          o--;
        } else a === "/$" && o++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var Xo = Math.random().toString(36).slice(2), _n = "__reactFiber$" + Xo, ea = "__reactProps$" + Xo, Un = "__reactContainer$" + Xo, ku = "__reactEvents$" + Xo, hx = "__reactListeners$" + Xo, vx = "__reactHandles$" + Xo;
  function ao(t) {
    var o = t[_n];
    if (o) return o;
    for (var a = t.parentNode; a; ) {
      if (o = a[Un] || a[_n]) {
        if (a = o.alternate, o.child !== null || a !== null && a.child !== null) for (t = Lp(t); t !== null; ) {
          if (a = t[_n]) return a;
          t = Lp(t);
        }
        return o;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function ta(t) {
    return t = t[_n] || t[Un], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function Go(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(r(33));
  }
  function dl(t) {
    return t[ea] || null;
  }
  var Nu = [], qo = -1;
  function Fr(t) {
    return { current: t };
  }
  function Qe(t) {
    0 > qo || (t.current = Nu[qo], Nu[qo] = null, qo--);
  }
  function Ve(t, o) {
    qo++, Nu[qo] = t.current, t.current = o;
  }
  var kr = {}, xt = Fr(kr), jt = Fr(!1), lo = kr;
  function Jo(t, o) {
    var a = t.type.contextTypes;
    if (!a) return kr;
    var u = t.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === o) return u.__reactInternalMemoizedMaskedChildContext;
    var f = {}, h;
    for (h in a) f[h] = o[h];
    return u && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = o, t.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function At(t) {
    return t = t.childContextTypes, t != null;
  }
  function fl() {
    Qe(jt), Qe(xt);
  }
  function Ip(t, o, a) {
    if (xt.current !== kr) throw Error(r(168));
    Ve(xt, o), Ve(jt, a);
  }
  function Bp(t, o, a) {
    var u = t.stateNode;
    if (o = o.childContextTypes, typeof u.getChildContext != "function") return a;
    u = u.getChildContext();
    for (var f in u) if (!(f in o)) throw Error(r(108, ee(t) || "Unknown", f));
    return q({}, a, u);
  }
  function pl(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || kr, lo = xt.current, Ve(xt, t), Ve(jt, jt.current), !0;
  }
  function Wp(t, o, a) {
    var u = t.stateNode;
    if (!u) throw Error(r(169));
    a ? (t = Bp(t, o, lo), u.__reactInternalMemoizedMergedChildContext = t, Qe(jt), Qe(xt), Ve(xt, t)) : Qe(jt), Ve(jt, a);
  }
  var Yn = null, ml = !1, _u = !1;
  function zp(t) {
    Yn === null ? Yn = [t] : Yn.push(t);
  }
  function gx(t) {
    ml = !0, zp(t);
  }
  function Nr() {
    if (!_u && Yn !== null) {
      _u = !0;
      var t = 0, o = Ie;
      try {
        var a = Yn;
        for (Ie = 1; t < a.length; t++) {
          var u = a[t];
          do
            u = u(!0);
          while (u !== null);
        }
        Yn = null, ml = !1;
      } catch (f) {
        throw Yn !== null && (Yn = Yn.slice(t + 1)), Hf(qs, Nr), f;
      } finally {
        Ie = o, _u = !1;
      }
    }
    return null;
  }
  var Zo = [], ei = 0, hl = null, vl = 0, en = [], tn = 0, so = null, Kn = 1, Qn = "";
  function uo(t, o) {
    Zo[ei++] = vl, Zo[ei++] = hl, hl = t, vl = o;
  }
  function $p(t, o, a) {
    en[tn++] = Kn, en[tn++] = Qn, en[tn++] = so, so = t;
    var u = Kn;
    t = Qn;
    var f = 32 - dn(u) - 1;
    u &= ~(1 << f), a += 1;
    var h = 32 - dn(o) + f;
    if (30 < h) {
      var S = f - f % 5;
      h = (u & (1 << S) - 1).toString(32), u >>= S, f -= S, Kn = 1 << 32 - dn(o) + f | a << f | u, Qn = h + t;
    } else Kn = 1 << h | a << f | u, Qn = t;
  }
  function Pu(t) {
    t.return !== null && (uo(t, 1), $p(t, 1, 0));
  }
  function ju(t) {
    for (; t === hl; ) hl = Zo[--ei], Zo[ei] = null, vl = Zo[--ei], Zo[ei] = null;
    for (; t === so; ) so = en[--tn], en[tn] = null, Qn = en[--tn], en[tn] = null, Kn = en[--tn], en[tn] = null;
  }
  var Vt = null, Ut = null, Je = !1, pn = null;
  function Hp(t, o) {
    var a = an(5, null, null, 0);
    a.elementType = "DELETED", a.stateNode = o, a.return = t, o = t.deletions, o === null ? (t.deletions = [a], t.flags |= 16) : o.push(a);
  }
  function Vp(t, o) {
    switch (t.tag) {
      case 5:
        var a = t.type;
        return o = o.nodeType !== 1 || a.toLowerCase() !== o.nodeName.toLowerCase() ? null : o, o !== null ? (t.stateNode = o, Vt = t, Ut = br(o.firstChild), !0) : !1;
      case 6:
        return o = t.pendingProps === "" || o.nodeType !== 3 ? null : o, o !== null ? (t.stateNode = o, Vt = t, Ut = null, !0) : !1;
      case 13:
        return o = o.nodeType !== 8 ? null : o, o !== null ? (a = so !== null ? { id: Kn, overflow: Qn } : null, t.memoizedState = { dehydrated: o, treeContext: a, retryLane: 1073741824 }, a = an(18, null, null, 0), a.stateNode = o, a.return = t, t.child = a, Vt = t, Ut = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Au(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function Ou(t) {
    if (Je) {
      var o = Ut;
      if (o) {
        var a = o;
        if (!Vp(t, o)) {
          if (Au(t)) throw Error(r(418));
          o = br(a.nextSibling);
          var u = Vt;
          o && Vp(t, o) ? Hp(u, a) : (t.flags = t.flags & -4097 | 2, Je = !1, Vt = t);
        }
      } else {
        if (Au(t)) throw Error(r(418));
        t.flags = t.flags & -4097 | 2, Je = !1, Vt = t;
      }
    }
  }
  function Up(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
    Vt = t;
  }
  function gl(t) {
    if (t !== Vt) return !1;
    if (!Je) return Up(t), Je = !0, !1;
    var o;
    if ((o = t.tag !== 3) && !(o = t.tag !== 5) && (o = t.type, o = o !== "head" && o !== "body" && !Su(t.type, t.memoizedProps)), o && (o = Ut)) {
      if (Au(t)) throw Yp(), Error(r(418));
      for (; o; ) Hp(t, o), o = br(o.nextSibling);
    }
    if (Up(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      e: {
        for (t = t.nextSibling, o = 0; t; ) {
          if (t.nodeType === 8) {
            var a = t.data;
            if (a === "/$") {
              if (o === 0) {
                Ut = br(t.nextSibling);
                break e;
              }
              o--;
            } else a !== "$" && a !== "$!" && a !== "$?" || o++;
          }
          t = t.nextSibling;
        }
        Ut = null;
      }
    } else Ut = Vt ? br(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Yp() {
    for (var t = Ut; t; ) t = br(t.nextSibling);
  }
  function ti() {
    Ut = Vt = null, Je = !1;
  }
  function Tu(t) {
    pn === null ? pn = [t] : pn.push(t);
  }
  var yx = P.ReactCurrentBatchConfig;
  function na(t, o, a) {
    if (t = a.ref, t !== null && typeof t != "function" && typeof t != "object") {
      if (a._owner) {
        if (a = a._owner, a) {
          if (a.tag !== 1) throw Error(r(309));
          var u = a.stateNode;
        }
        if (!u) throw Error(r(147, t));
        var f = u, h = "" + t;
        return o !== null && o.ref !== null && typeof o.ref == "function" && o.ref._stringRef === h ? o.ref : (o = function(S) {
          var N = f.refs;
          S === null ? delete N[h] : N[h] = S;
        }, o._stringRef = h, o);
      }
      if (typeof t != "string") throw Error(r(284));
      if (!a._owner) throw Error(r(290, t));
    }
    return t;
  }
  function yl(t, o) {
    throw t = Object.prototype.toString.call(o), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : t));
  }
  function Kp(t) {
    var o = t._init;
    return o(t._payload);
  }
  function Qp(t) {
    function o(M, T) {
      if (t) {
        var L = M.deletions;
        L === null ? (M.deletions = [T], M.flags |= 16) : L.push(T);
      }
    }
    function a(M, T) {
      if (!t) return null;
      for (; T !== null; ) o(M, T), T = T.sibling;
      return null;
    }
    function u(M, T) {
      for (M = /* @__PURE__ */ new Map(); T !== null; ) T.key !== null ? M.set(T.key, T) : M.set(T.index, T), T = T.sibling;
      return M;
    }
    function f(M, T) {
      return M = Mr(M, T), M.index = 0, M.sibling = null, M;
    }
    function h(M, T, L) {
      return M.index = L, t ? (L = M.alternate, L !== null ? (L = L.index, L < T ? (M.flags |= 2, T) : L) : (M.flags |= 2, T)) : (M.flags |= 1048576, T);
    }
    function S(M) {
      return t && M.alternate === null && (M.flags |= 2), M;
    }
    function N(M, T, L, J) {
      return T === null || T.tag !== 6 ? (T = bc(L, M.mode, J), T.return = M, T) : (T = f(T, L), T.return = M, T);
    }
    function j(M, T, L, J) {
      var fe = L.type;
      return fe === W ? Q(M, T, L.props.children, J, L.key) : T !== null && (T.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === le && Kp(fe) === T.type) ? (J = f(T, L.props), J.ref = na(M, T, L), J.return = M, J) : (J = $l(L.type, L.key, L.props, null, M.mode, J), J.ref = na(M, T, L), J.return = M, J);
    }
    function I(M, T, L, J) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== L.containerInfo || T.stateNode.implementation !== L.implementation ? (T = Fc(L, M.mode, J), T.return = M, T) : (T = f(T, L.children || []), T.return = M, T);
    }
    function Q(M, T, L, J, fe) {
      return T === null || T.tag !== 7 ? (T = yo(L, M.mode, J, fe), T.return = M, T) : (T = f(T, L), T.return = M, T);
    }
    function G(M, T, L) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return T = bc("" + T, M.mode, L), T.return = M, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case O:
            return L = $l(T.type, T.key, T.props, null, M.mode, L), L.ref = na(M, null, T), L.return = M, L;
          case B:
            return T = Fc(T, M.mode, L), T.return = M, T;
          case le:
            var J = T._init;
            return G(M, J(T._payload), L);
        }
        if (bn(T) || X(T)) return T = yo(T, M.mode, L, null), T.return = M, T;
        yl(M, T);
      }
      return null;
    }
    function K(M, T, L, J) {
      var fe = T !== null ? T.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return fe !== null ? null : N(M, T, "" + L, J);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case O:
            return L.key === fe ? j(M, T, L, J) : null;
          case B:
            return L.key === fe ? I(M, T, L, J) : null;
          case le:
            return fe = L._init, K(
              M,
              T,
              fe(L._payload),
              J
            );
        }
        if (bn(L) || X(L)) return fe !== null ? null : Q(M, T, L, J, null);
        yl(M, L);
      }
      return null;
    }
    function ie(M, T, L, J, fe) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return M = M.get(L) || null, N(T, M, "" + J, fe);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case O:
            return M = M.get(J.key === null ? L : J.key) || null, j(T, M, J, fe);
          case B:
            return M = M.get(J.key === null ? L : J.key) || null, I(T, M, J, fe);
          case le:
            var ve = J._init;
            return ie(M, T, L, ve(J._payload), fe);
        }
        if (bn(J) || X(J)) return M = M.get(L) || null, Q(T, M, J, fe, null);
        yl(T, J);
      }
      return null;
    }
    function ce(M, T, L, J) {
      for (var fe = null, ve = null, ge = T, Ee = T = 0, mt = null; ge !== null && Ee < L.length; Ee++) {
        ge.index > Ee ? (mt = ge, ge = null) : mt = ge.sibling;
        var Re = K(M, ge, L[Ee], J);
        if (Re === null) {
          ge === null && (ge = mt);
          break;
        }
        t && ge && Re.alternate === null && o(M, ge), T = h(Re, T, Ee), ve === null ? fe = Re : ve.sibling = Re, ve = Re, ge = mt;
      }
      if (Ee === L.length) return a(M, ge), Je && uo(M, Ee), fe;
      if (ge === null) {
        for (; Ee < L.length; Ee++) ge = G(M, L[Ee], J), ge !== null && (T = h(ge, T, Ee), ve === null ? fe = ge : ve.sibling = ge, ve = ge);
        return Je && uo(M, Ee), fe;
      }
      for (ge = u(M, ge); Ee < L.length; Ee++) mt = ie(ge, M, Ee, L[Ee], J), mt !== null && (t && mt.alternate !== null && ge.delete(mt.key === null ? Ee : mt.key), T = h(mt, T, Ee), ve === null ? fe = mt : ve.sibling = mt, ve = mt);
      return t && ge.forEach(function(Lr) {
        return o(M, Lr);
      }), Je && uo(M, Ee), fe;
    }
    function de(M, T, L, J) {
      var fe = X(L);
      if (typeof fe != "function") throw Error(r(150));
      if (L = fe.call(L), L == null) throw Error(r(151));
      for (var ve = fe = null, ge = T, Ee = T = 0, mt = null, Re = L.next(); ge !== null && !Re.done; Ee++, Re = L.next()) {
        ge.index > Ee ? (mt = ge, ge = null) : mt = ge.sibling;
        var Lr = K(M, ge, Re.value, J);
        if (Lr === null) {
          ge === null && (ge = mt);
          break;
        }
        t && ge && Lr.alternate === null && o(M, ge), T = h(Lr, T, Ee), ve === null ? fe = Lr : ve.sibling = Lr, ve = Lr, ge = mt;
      }
      if (Re.done) return a(
        M,
        ge
      ), Je && uo(M, Ee), fe;
      if (ge === null) {
        for (; !Re.done; Ee++, Re = L.next()) Re = G(M, Re.value, J), Re !== null && (T = h(Re, T, Ee), ve === null ? fe = Re : ve.sibling = Re, ve = Re);
        return Je && uo(M, Ee), fe;
      }
      for (ge = u(M, ge); !Re.done; Ee++, Re = L.next()) Re = ie(ge, M, Ee, Re.value, J), Re !== null && (t && Re.alternate !== null && ge.delete(Re.key === null ? Ee : Re.key), T = h(Re, T, Ee), ve === null ? fe = Re : ve.sibling = Re, ve = Re);
      return t && ge.forEach(function(qx) {
        return o(M, qx);
      }), Je && uo(M, Ee), fe;
    }
    function it(M, T, L, J) {
      if (typeof L == "object" && L !== null && L.type === W && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case O:
            e: {
              for (var fe = L.key, ve = T; ve !== null; ) {
                if (ve.key === fe) {
                  if (fe = L.type, fe === W) {
                    if (ve.tag === 7) {
                      a(M, ve.sibling), T = f(ve, L.props.children), T.return = M, M = T;
                      break e;
                    }
                  } else if (ve.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === le && Kp(fe) === ve.type) {
                    a(M, ve.sibling), T = f(ve, L.props), T.ref = na(M, ve, L), T.return = M, M = T;
                    break e;
                  }
                  a(M, ve);
                  break;
                } else o(M, ve);
                ve = ve.sibling;
              }
              L.type === W ? (T = yo(L.props.children, M.mode, J, L.key), T.return = M, M = T) : (J = $l(L.type, L.key, L.props, null, M.mode, J), J.ref = na(M, T, L), J.return = M, M = J);
            }
            return S(M);
          case B:
            e: {
              for (ve = L.key; T !== null; ) {
                if (T.key === ve) if (T.tag === 4 && T.stateNode.containerInfo === L.containerInfo && T.stateNode.implementation === L.implementation) {
                  a(M, T.sibling), T = f(T, L.children || []), T.return = M, M = T;
                  break e;
                } else {
                  a(M, T);
                  break;
                }
                else o(M, T);
                T = T.sibling;
              }
              T = Fc(L, M.mode, J), T.return = M, M = T;
            }
            return S(M);
          case le:
            return ve = L._init, it(M, T, ve(L._payload), J);
        }
        if (bn(L)) return ce(M, T, L, J);
        if (X(L)) return de(M, T, L, J);
        yl(M, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, T !== null && T.tag === 6 ? (a(M, T.sibling), T = f(T, L), T.return = M, M = T) : (a(M, T), T = bc(L, M.mode, J), T.return = M, M = T), S(M)) : a(M, T);
    }
    return it;
  }
  var ni = Qp(!0), Xp = Qp(!1), Dl = Fr(null), wl = null, ri = null, Ru = null;
  function Mu() {
    Ru = ri = wl = null;
  }
  function Lu(t) {
    var o = Dl.current;
    Qe(Dl), t._currentValue = o;
  }
  function Iu(t, o, a) {
    for (; t !== null; ) {
      var u = t.alternate;
      if ((t.childLanes & o) !== o ? (t.childLanes |= o, u !== null && (u.childLanes |= o)) : u !== null && (u.childLanes & o) !== o && (u.childLanes |= o), t === a) break;
      t = t.return;
    }
  }
  function oi(t, o) {
    wl = t, Ru = ri = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & o && (Ot = !0), t.firstContext = null);
  }
  function nn(t) {
    var o = t._currentValue;
    if (Ru !== t) if (t = { context: t, memoizedValue: o, next: null }, ri === null) {
      if (wl === null) throw Error(r(308));
      ri = t, wl.dependencies = { lanes: 0, firstContext: t };
    } else ri = ri.next = t;
    return o;
  }
  var co = null;
  function Bu(t) {
    co === null ? co = [t] : co.push(t);
  }
  function Gp(t, o, a, u) {
    var f = o.interleaved;
    return f === null ? (a.next = a, Bu(o)) : (a.next = f.next, f.next = a), o.interleaved = a, Xn(t, u);
  }
  function Xn(t, o) {
    t.lanes |= o;
    var a = t.alternate;
    for (a !== null && (a.lanes |= o), a = t, t = t.return; t !== null; ) t.childLanes |= o, a = t.alternate, a !== null && (a.childLanes |= o), a = t, t = t.return;
    return a.tag === 3 ? a.stateNode : null;
  }
  var _r = !1;
  function Wu(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function qp(t, o) {
    t = t.updateQueue, o.updateQueue === t && (o.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function Gn(t, o) {
    return { eventTime: t, lane: o, tag: 0, payload: null, callback: null, next: null };
  }
  function Pr(t, o, a) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (u = u.shared, Oe & 2) {
      var f = u.pending;
      return f === null ? o.next = o : (o.next = f.next, f.next = o), u.pending = o, Xn(t, a);
    }
    return f = u.interleaved, f === null ? (o.next = o, Bu(u)) : (o.next = f.next, f.next = o), u.interleaved = o, Xn(t, a);
  }
  function xl(t, o, a) {
    if (o = o.updateQueue, o !== null && (o = o.shared, (a & 4194240) !== 0)) {
      var u = o.lanes;
      u &= t.pendingLanes, a |= u, o.lanes = a, eu(t, a);
    }
  }
  function Jp(t, o) {
    var a = t.updateQueue, u = t.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var f = null, h = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var S = { eventTime: a.eventTime, lane: a.lane, tag: a.tag, payload: a.payload, callback: a.callback, next: null };
          h === null ? f = h = S : h = h.next = S, a = a.next;
        } while (a !== null);
        h === null ? f = h = o : h = h.next = o;
      } else f = h = o;
      a = { baseState: u.baseState, firstBaseUpdate: f, lastBaseUpdate: h, shared: u.shared, effects: u.effects }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = o : t.next = o, a.lastBaseUpdate = o;
  }
  function Cl(t, o, a, u) {
    var f = t.updateQueue;
    _r = !1;
    var h = f.firstBaseUpdate, S = f.lastBaseUpdate, N = f.shared.pending;
    if (N !== null) {
      f.shared.pending = null;
      var j = N, I = j.next;
      j.next = null, S === null ? h = I : S.next = I, S = j;
      var Q = t.alternate;
      Q !== null && (Q = Q.updateQueue, N = Q.lastBaseUpdate, N !== S && (N === null ? Q.firstBaseUpdate = I : N.next = I, Q.lastBaseUpdate = j));
    }
    if (h !== null) {
      var G = f.baseState;
      S = 0, Q = I = j = null, N = h;
      do {
        var K = N.lane, ie = N.eventTime;
        if ((u & K) === K) {
          Q !== null && (Q = Q.next = {
            eventTime: ie,
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          });
          e: {
            var ce = t, de = N;
            switch (K = o, ie = a, de.tag) {
              case 1:
                if (ce = de.payload, typeof ce == "function") {
                  G = ce.call(ie, G, K);
                  break e;
                }
                G = ce;
                break e;
              case 3:
                ce.flags = ce.flags & -65537 | 128;
              case 0:
                if (ce = de.payload, K = typeof ce == "function" ? ce.call(ie, G, K) : ce, K == null) break e;
                G = q({}, G, K);
                break e;
              case 2:
                _r = !0;
            }
          }
          N.callback !== null && N.lane !== 0 && (t.flags |= 64, K = f.effects, K === null ? f.effects = [N] : K.push(N));
        } else ie = { eventTime: ie, lane: K, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, Q === null ? (I = Q = ie, j = G) : Q = Q.next = ie, S |= K;
        if (N = N.next, N === null) {
          if (N = f.shared.pending, N === null) break;
          K = N, N = K.next, K.next = null, f.lastBaseUpdate = K, f.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (j = G), f.baseState = j, f.firstBaseUpdate = I, f.lastBaseUpdate = Q, o = f.shared.interleaved, o !== null) {
        f = o;
        do
          S |= f.lane, f = f.next;
        while (f !== o);
      } else h === null && (f.shared.lanes = 0);
      mo |= S, t.lanes = S, t.memoizedState = G;
    }
  }
  function Zp(t, o, a) {
    if (t = o.effects, o.effects = null, t !== null) for (o = 0; o < t.length; o++) {
      var u = t[o], f = u.callback;
      if (f !== null) {
        if (u.callback = null, u = a, typeof f != "function") throw Error(r(191, f));
        f.call(u);
      }
    }
  }
  var ra = {}, Pn = Fr(ra), oa = Fr(ra), ia = Fr(ra);
  function fo(t) {
    if (t === ra) throw Error(r(174));
    return t;
  }
  function zu(t, o) {
    switch (Ve(ia, o), Ve(oa, t), Ve(Pn, ra), t = o.nodeType, t) {
      case 9:
      case 11:
        o = (o = o.documentElement) ? o.namespaceURI : Zt(null, "");
        break;
      default:
        t = t === 8 ? o.parentNode : o, o = t.namespaceURI || null, t = t.tagName, o = Zt(o, t);
    }
    Qe(Pn), Ve(Pn, o);
  }
  function ii() {
    Qe(Pn), Qe(oa), Qe(ia);
  }
  function em(t) {
    fo(ia.current);
    var o = fo(Pn.current), a = Zt(o, t.type);
    o !== a && (Ve(oa, t), Ve(Pn, a));
  }
  function $u(t) {
    oa.current === t && (Qe(Pn), Qe(oa));
  }
  var Ze = Fr(0);
  function El(t) {
    for (var o = t; o !== null; ) {
      if (o.tag === 13) {
        var a = o.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || a.data === "$!")) return o;
      } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
        if (o.flags & 128) return o;
      } else if (o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === t) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === t) return null;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
    return null;
  }
  var Hu = [];
  function Vu() {
    for (var t = 0; t < Hu.length; t++) Hu[t]._workInProgressVersionPrimary = null;
    Hu.length = 0;
  }
  var Sl = P.ReactCurrentDispatcher, Uu = P.ReactCurrentBatchConfig, po = 0, et = null, ut = null, ft = null, bl = !1, aa = !1, la = 0, Dx = 0;
  function Ct() {
    throw Error(r(321));
  }
  function Yu(t, o) {
    if (o === null) return !1;
    for (var a = 0; a < o.length && a < t.length; a++) if (!fn(t[a], o[a])) return !1;
    return !0;
  }
  function Ku(t, o, a, u, f, h) {
    if (po = h, et = o, o.memoizedState = null, o.updateQueue = null, o.lanes = 0, Sl.current = t === null || t.memoizedState === null ? Ex : Sx, t = a(u, f), aa) {
      h = 0;
      do {
        if (aa = !1, la = 0, 25 <= h) throw Error(r(301));
        h += 1, ft = ut = null, o.updateQueue = null, Sl.current = bx, t = a(u, f);
      } while (aa);
    }
    if (Sl.current = Nl, o = ut !== null && ut.next !== null, po = 0, ft = ut = et = null, bl = !1, o) throw Error(r(300));
    return t;
  }
  function Qu() {
    var t = la !== 0;
    return la = 0, t;
  }
  function jn() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ft === null ? et.memoizedState = ft = t : ft = ft.next = t, ft;
  }
  function rn() {
    if (ut === null) {
      var t = et.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ut.next;
    var o = ft === null ? et.memoizedState : ft.next;
    if (o !== null) ft = o, ut = t;
    else {
      if (t === null) throw Error(r(310));
      ut = t, t = { memoizedState: ut.memoizedState, baseState: ut.baseState, baseQueue: ut.baseQueue, queue: ut.queue, next: null }, ft === null ? et.memoizedState = ft = t : ft = ft.next = t;
    }
    return ft;
  }
  function sa(t, o) {
    return typeof o == "function" ? o(t) : o;
  }
  function Xu(t) {
    var o = rn(), a = o.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var u = ut, f = u.baseQueue, h = a.pending;
    if (h !== null) {
      if (f !== null) {
        var S = f.next;
        f.next = h.next, h.next = S;
      }
      u.baseQueue = f = h, a.pending = null;
    }
    if (f !== null) {
      h = f.next, u = u.baseState;
      var N = S = null, j = null, I = h;
      do {
        var Q = I.lane;
        if ((po & Q) === Q) j !== null && (j = j.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), u = I.hasEagerState ? I.eagerState : t(u, I.action);
        else {
          var G = {
            lane: Q,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          j === null ? (N = j = G, S = u) : j = j.next = G, et.lanes |= Q, mo |= Q;
        }
        I = I.next;
      } while (I !== null && I !== h);
      j === null ? S = u : j.next = N, fn(u, o.memoizedState) || (Ot = !0), o.memoizedState = u, o.baseState = S, o.baseQueue = j, a.lastRenderedState = u;
    }
    if (t = a.interleaved, t !== null) {
      f = t;
      do
        h = f.lane, et.lanes |= h, mo |= h, f = f.next;
      while (f !== t);
    } else f === null && (a.lanes = 0);
    return [o.memoizedState, a.dispatch];
  }
  function Gu(t) {
    var o = rn(), a = o.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var u = a.dispatch, f = a.pending, h = o.memoizedState;
    if (f !== null) {
      a.pending = null;
      var S = f = f.next;
      do
        h = t(h, S.action), S = S.next;
      while (S !== f);
      fn(h, o.memoizedState) || (Ot = !0), o.memoizedState = h, o.baseQueue === null && (o.baseState = h), a.lastRenderedState = h;
    }
    return [h, u];
  }
  function tm() {
  }
  function nm(t, o) {
    var a = et, u = rn(), f = o(), h = !fn(u.memoizedState, f);
    if (h && (u.memoizedState = f, Ot = !0), u = u.queue, qu(im.bind(null, a, u, t), [t]), u.getSnapshot !== o || h || ft !== null && ft.memoizedState.tag & 1) {
      if (a.flags |= 2048, ua(9, om.bind(null, a, u, f, o), void 0, null), pt === null) throw Error(r(349));
      po & 30 || rm(a, o, f);
    }
    return f;
  }
  function rm(t, o, a) {
    t.flags |= 16384, t = { getSnapshot: o, value: a }, o = et.updateQueue, o === null ? (o = { lastEffect: null, stores: null }, et.updateQueue = o, o.stores = [t]) : (a = o.stores, a === null ? o.stores = [t] : a.push(t));
  }
  function om(t, o, a, u) {
    o.value = a, o.getSnapshot = u, am(o) && lm(t);
  }
  function im(t, o, a) {
    return a(function() {
      am(o) && lm(t);
    });
  }
  function am(t) {
    var o = t.getSnapshot;
    t = t.value;
    try {
      var a = o();
      return !fn(t, a);
    } catch {
      return !0;
    }
  }
  function lm(t) {
    var o = Xn(t, 1);
    o !== null && gn(o, t, 1, -1);
  }
  function sm(t) {
    var o = jn();
    return typeof t == "function" && (t = t()), o.memoizedState = o.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: sa, lastRenderedState: t }, o.queue = t, t = t.dispatch = Cx.bind(null, et, t), [o.memoizedState, t];
  }
  function ua(t, o, a, u) {
    return t = { tag: t, create: o, destroy: a, deps: u, next: null }, o = et.updateQueue, o === null ? (o = { lastEffect: null, stores: null }, et.updateQueue = o, o.lastEffect = t.next = t) : (a = o.lastEffect, a === null ? o.lastEffect = t.next = t : (u = a.next, a.next = t, t.next = u, o.lastEffect = t)), t;
  }
  function um() {
    return rn().memoizedState;
  }
  function Fl(t, o, a, u) {
    var f = jn();
    et.flags |= t, f.memoizedState = ua(1 | o, a, void 0, u === void 0 ? null : u);
  }
  function kl(t, o, a, u) {
    var f = rn();
    u = u === void 0 ? null : u;
    var h = void 0;
    if (ut !== null) {
      var S = ut.memoizedState;
      if (h = S.destroy, u !== null && Yu(u, S.deps)) {
        f.memoizedState = ua(o, a, h, u);
        return;
      }
    }
    et.flags |= t, f.memoizedState = ua(1 | o, a, h, u);
  }
  function cm(t, o) {
    return Fl(8390656, 8, t, o);
  }
  function qu(t, o) {
    return kl(2048, 8, t, o);
  }
  function dm(t, o) {
    return kl(4, 2, t, o);
  }
  function fm(t, o) {
    return kl(4, 4, t, o);
  }
  function pm(t, o) {
    if (typeof o == "function") return t = t(), o(t), function() {
      o(null);
    };
    if (o != null) return t = t(), o.current = t, function() {
      o.current = null;
    };
  }
  function mm(t, o, a) {
    return a = a != null ? a.concat([t]) : null, kl(4, 4, pm.bind(null, o, t), a);
  }
  function Ju() {
  }
  function hm(t, o) {
    var a = rn();
    o = o === void 0 ? null : o;
    var u = a.memoizedState;
    return u !== null && o !== null && Yu(o, u[1]) ? u[0] : (a.memoizedState = [t, o], t);
  }
  function vm(t, o) {
    var a = rn();
    o = o === void 0 ? null : o;
    var u = a.memoizedState;
    return u !== null && o !== null && Yu(o, u[1]) ? u[0] : (t = t(), a.memoizedState = [t, o], t);
  }
  function gm(t, o, a) {
    return po & 21 ? (fn(a, o) || (a = Kf(), et.lanes |= a, mo |= a, t.baseState = !0), o) : (t.baseState && (t.baseState = !1, Ot = !0), t.memoizedState = a);
  }
  function wx(t, o) {
    var a = Ie;
    Ie = a !== 0 && 4 > a ? a : 4, t(!0);
    var u = Uu.transition;
    Uu.transition = {};
    try {
      t(!1), o();
    } finally {
      Ie = a, Uu.transition = u;
    }
  }
  function ym() {
    return rn().memoizedState;
  }
  function xx(t, o, a) {
    var u = Tr(t);
    if (a = { lane: u, action: a, hasEagerState: !1, eagerState: null, next: null }, Dm(t)) wm(o, a);
    else if (a = Gp(t, o, a, u), a !== null) {
      var f = Nt();
      gn(a, t, u, f), xm(a, o, u);
    }
  }
  function Cx(t, o, a) {
    var u = Tr(t), f = { lane: u, action: a, hasEagerState: !1, eagerState: null, next: null };
    if (Dm(t)) wm(o, f);
    else {
      var h = t.alternate;
      if (t.lanes === 0 && (h === null || h.lanes === 0) && (h = o.lastRenderedReducer, h !== null)) try {
        var S = o.lastRenderedState, N = h(S, a);
        if (f.hasEagerState = !0, f.eagerState = N, fn(N, S)) {
          var j = o.interleaved;
          j === null ? (f.next = f, Bu(o)) : (f.next = j.next, j.next = f), o.interleaved = f;
          return;
        }
      } catch {
      } finally {
      }
      a = Gp(t, o, f, u), a !== null && (f = Nt(), gn(a, t, u, f), xm(a, o, u));
    }
  }
  function Dm(t) {
    var o = t.alternate;
    return t === et || o !== null && o === et;
  }
  function wm(t, o) {
    aa = bl = !0;
    var a = t.pending;
    a === null ? o.next = o : (o.next = a.next, a.next = o), t.pending = o;
  }
  function xm(t, o, a) {
    if (a & 4194240) {
      var u = o.lanes;
      u &= t.pendingLanes, a |= u, o.lanes = a, eu(t, a);
    }
  }
  var Nl = { readContext: nn, useCallback: Ct, useContext: Ct, useEffect: Ct, useImperativeHandle: Ct, useInsertionEffect: Ct, useLayoutEffect: Ct, useMemo: Ct, useReducer: Ct, useRef: Ct, useState: Ct, useDebugValue: Ct, useDeferredValue: Ct, useTransition: Ct, useMutableSource: Ct, useSyncExternalStore: Ct, useId: Ct, unstable_isNewReconciler: !1 }, Ex = { readContext: nn, useCallback: function(t, o) {
    return jn().memoizedState = [t, o === void 0 ? null : o], t;
  }, useContext: nn, useEffect: cm, useImperativeHandle: function(t, o, a) {
    return a = a != null ? a.concat([t]) : null, Fl(
      4194308,
      4,
      pm.bind(null, o, t),
      a
    );
  }, useLayoutEffect: function(t, o) {
    return Fl(4194308, 4, t, o);
  }, useInsertionEffect: function(t, o) {
    return Fl(4, 2, t, o);
  }, useMemo: function(t, o) {
    var a = jn();
    return o = o === void 0 ? null : o, t = t(), a.memoizedState = [t, o], t;
  }, useReducer: function(t, o, a) {
    var u = jn();
    return o = a !== void 0 ? a(o) : o, u.memoizedState = u.baseState = o, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: o }, u.queue = t, t = t.dispatch = xx.bind(null, et, t), [u.memoizedState, t];
  }, useRef: function(t) {
    var o = jn();
    return t = { current: t }, o.memoizedState = t;
  }, useState: sm, useDebugValue: Ju, useDeferredValue: function(t) {
    return jn().memoizedState = t;
  }, useTransition: function() {
    var t = sm(!1), o = t[0];
    return t = wx.bind(null, t[1]), jn().memoizedState = t, [o, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, o, a) {
    var u = et, f = jn();
    if (Je) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else {
      if (a = o(), pt === null) throw Error(r(349));
      po & 30 || rm(u, o, a);
    }
    f.memoizedState = a;
    var h = { value: a, getSnapshot: o };
    return f.queue = h, cm(im.bind(
      null,
      u,
      h,
      t
    ), [t]), u.flags |= 2048, ua(9, om.bind(null, u, h, a, o), void 0, null), a;
  }, useId: function() {
    var t = jn(), o = pt.identifierPrefix;
    if (Je) {
      var a = Qn, u = Kn;
      a = (u & ~(1 << 32 - dn(u) - 1)).toString(32) + a, o = ":" + o + "R" + a, a = la++, 0 < a && (o += "H" + a.toString(32)), o += ":";
    } else a = Dx++, o = ":" + o + "r" + a.toString(32) + ":";
    return t.memoizedState = o;
  }, unstable_isNewReconciler: !1 }, Sx = {
    readContext: nn,
    useCallback: hm,
    useContext: nn,
    useEffect: qu,
    useImperativeHandle: mm,
    useInsertionEffect: dm,
    useLayoutEffect: fm,
    useMemo: vm,
    useReducer: Xu,
    useRef: um,
    useState: function() {
      return Xu(sa);
    },
    useDebugValue: Ju,
    useDeferredValue: function(t) {
      var o = rn();
      return gm(o, ut.memoizedState, t);
    },
    useTransition: function() {
      var t = Xu(sa)[0], o = rn().memoizedState;
      return [t, o];
    },
    useMutableSource: tm,
    useSyncExternalStore: nm,
    useId: ym,
    unstable_isNewReconciler: !1
  }, bx = { readContext: nn, useCallback: hm, useContext: nn, useEffect: qu, useImperativeHandle: mm, useInsertionEffect: dm, useLayoutEffect: fm, useMemo: vm, useReducer: Gu, useRef: um, useState: function() {
    return Gu(sa);
  }, useDebugValue: Ju, useDeferredValue: function(t) {
    var o = rn();
    return ut === null ? o.memoizedState = t : gm(o, ut.memoizedState, t);
  }, useTransition: function() {
    var t = Gu(sa)[0], o = rn().memoizedState;
    return [t, o];
  }, useMutableSource: tm, useSyncExternalStore: nm, useId: ym, unstable_isNewReconciler: !1 };
  function mn(t, o) {
    if (t && t.defaultProps) {
      o = q({}, o), t = t.defaultProps;
      for (var a in t) o[a] === void 0 && (o[a] = t[a]);
      return o;
    }
    return o;
  }
  function Zu(t, o, a, u) {
    o = t.memoizedState, a = a(u, o), a = a == null ? o : q({}, o, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var _l = { isMounted: function(t) {
    return (t = t._reactInternals) ? io(t) === t : !1;
  }, enqueueSetState: function(t, o, a) {
    t = t._reactInternals;
    var u = Nt(), f = Tr(t), h = Gn(u, f);
    h.payload = o, a != null && (h.callback = a), o = Pr(t, h, f), o !== null && (gn(o, t, f, u), xl(o, t, f));
  }, enqueueReplaceState: function(t, o, a) {
    t = t._reactInternals;
    var u = Nt(), f = Tr(t), h = Gn(u, f);
    h.tag = 1, h.payload = o, a != null && (h.callback = a), o = Pr(t, h, f), o !== null && (gn(o, t, f, u), xl(o, t, f));
  }, enqueueForceUpdate: function(t, o) {
    t = t._reactInternals;
    var a = Nt(), u = Tr(t), f = Gn(a, u);
    f.tag = 2, o != null && (f.callback = o), o = Pr(t, f, u), o !== null && (gn(o, t, u, a), xl(o, t, u));
  } };
  function Cm(t, o, a, u, f, h, S) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(u, h, S) : o.prototype && o.prototype.isPureReactComponent ? !Xi(a, u) || !Xi(f, h) : !0;
  }
  function Em(t, o, a) {
    var u = !1, f = kr, h = o.contextType;
    return typeof h == "object" && h !== null ? h = nn(h) : (f = At(o) ? lo : xt.current, u = o.contextTypes, h = (u = u != null) ? Jo(t, f) : kr), o = new o(a, h), t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = _l, t.stateNode = o, o._reactInternals = t, u && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = f, t.__reactInternalMemoizedMaskedChildContext = h), o;
  }
  function Sm(t, o, a, u) {
    t = o.state, typeof o.componentWillReceiveProps == "function" && o.componentWillReceiveProps(a, u), typeof o.UNSAFE_componentWillReceiveProps == "function" && o.UNSAFE_componentWillReceiveProps(a, u), o.state !== t && _l.enqueueReplaceState(o, o.state, null);
  }
  function ec(t, o, a, u) {
    var f = t.stateNode;
    f.props = a, f.state = t.memoizedState, f.refs = {}, Wu(t);
    var h = o.contextType;
    typeof h == "object" && h !== null ? f.context = nn(h) : (h = At(o) ? lo : xt.current, f.context = Jo(t, h)), f.state = t.memoizedState, h = o.getDerivedStateFromProps, typeof h == "function" && (Zu(t, o, h, a), f.state = t.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (o = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), o !== f.state && _l.enqueueReplaceState(f, f.state, null), Cl(t, a, f, u), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function ai(t, o) {
    try {
      var a = "", u = o;
      do
        a += xe(u), u = u.return;
      while (u);
      var f = a;
    } catch (h) {
      f = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: t, source: o, stack: f, digest: null };
  }
  function tc(t, o, a) {
    return { value: t, source: null, stack: a ?? null, digest: o ?? null };
  }
  function nc(t, o) {
    try {
      console.error(o.value);
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  var Fx = typeof WeakMap == "function" ? WeakMap : Map;
  function bm(t, o, a) {
    a = Gn(-1, a), a.tag = 3, a.payload = { element: null };
    var u = o.value;
    return a.callback = function() {
      Ml || (Ml = !0, gc = u), nc(t, o);
    }, a;
  }
  function Fm(t, o, a) {
    a = Gn(-1, a), a.tag = 3;
    var u = t.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = o.value;
      a.payload = function() {
        return u(f);
      }, a.callback = function() {
        nc(t, o);
      };
    }
    var h = t.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (a.callback = function() {
      nc(t, o), typeof u != "function" && (Ar === null ? Ar = /* @__PURE__ */ new Set([this]) : Ar.add(this));
      var S = o.stack;
      this.componentDidCatch(o.value, { componentStack: S !== null ? S : "" });
    }), a;
  }
  function km(t, o, a) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new Fx();
      var f = /* @__PURE__ */ new Set();
      u.set(o, f);
    } else f = u.get(o), f === void 0 && (f = /* @__PURE__ */ new Set(), u.set(o, f));
    f.has(a) || (f.add(a), t = Wx.bind(null, t, o, a), o.then(t, t));
  }
  function Nm(t) {
    do {
      var o;
      if ((o = t.tag === 13) && (o = t.memoizedState, o = o !== null ? o.dehydrated !== null : !0), o) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function _m(t, o, a, u, f) {
    return t.mode & 1 ? (t.flags |= 65536, t.lanes = f, t) : (t === o ? t.flags |= 65536 : (t.flags |= 128, a.flags |= 131072, a.flags &= -52805, a.tag === 1 && (a.alternate === null ? a.tag = 17 : (o = Gn(-1, 1), o.tag = 2, Pr(a, o, 1))), a.lanes |= 1), t);
  }
  var kx = P.ReactCurrentOwner, Ot = !1;
  function kt(t, o, a, u) {
    o.child = t === null ? Xp(o, null, a, u) : ni(o, t.child, a, u);
  }
  function Pm(t, o, a, u, f) {
    a = a.render;
    var h = o.ref;
    return oi(o, f), u = Ku(t, o, a, u, h, f), a = Qu(), t !== null && !Ot ? (o.updateQueue = t.updateQueue, o.flags &= -2053, t.lanes &= ~f, qn(t, o, f)) : (Je && a && Pu(o), o.flags |= 1, kt(t, o, u, f), o.child);
  }
  function jm(t, o, a, u, f) {
    if (t === null) {
      var h = a.type;
      return typeof h == "function" && !Sc(h) && h.defaultProps === void 0 && a.compare === null && a.defaultProps === void 0 ? (o.tag = 15, o.type = h, Am(t, o, h, u, f)) : (t = $l(a.type, null, u, o, o.mode, f), t.ref = o.ref, t.return = o, o.child = t);
    }
    if (h = t.child, !(t.lanes & f)) {
      var S = h.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Xi, a(S, u) && t.ref === o.ref) return qn(t, o, f);
    }
    return o.flags |= 1, t = Mr(h, u), t.ref = o.ref, t.return = o, o.child = t;
  }
  function Am(t, o, a, u, f) {
    if (t !== null) {
      var h = t.memoizedProps;
      if (Xi(h, u) && t.ref === o.ref) if (Ot = !1, o.pendingProps = u = h, (t.lanes & f) !== 0) t.flags & 131072 && (Ot = !0);
      else return o.lanes = t.lanes, qn(t, o, f);
    }
    return rc(t, o, a, u, f);
  }
  function Om(t, o, a) {
    var u = o.pendingProps, f = u.children, h = t !== null ? t.memoizedState : null;
    if (u.mode === "hidden") if (!(o.mode & 1)) o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ve(si, Yt), Yt |= a;
    else {
      if (!(a & 1073741824)) return t = h !== null ? h.baseLanes | a : a, o.lanes = o.childLanes = 1073741824, o.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, o.updateQueue = null, Ve(si, Yt), Yt |= t, null;
      o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = h !== null ? h.baseLanes : a, Ve(si, Yt), Yt |= u;
    }
    else h !== null ? (u = h.baseLanes | a, o.memoizedState = null) : u = a, Ve(si, Yt), Yt |= u;
    return kt(t, o, f, a), o.child;
  }
  function Tm(t, o) {
    var a = o.ref;
    (t === null && a !== null || t !== null && t.ref !== a) && (o.flags |= 512, o.flags |= 2097152);
  }
  function rc(t, o, a, u, f) {
    var h = At(a) ? lo : xt.current;
    return h = Jo(o, h), oi(o, f), a = Ku(t, o, a, u, h, f), u = Qu(), t !== null && !Ot ? (o.updateQueue = t.updateQueue, o.flags &= -2053, t.lanes &= ~f, qn(t, o, f)) : (Je && u && Pu(o), o.flags |= 1, kt(t, o, a, f), o.child);
  }
  function Rm(t, o, a, u, f) {
    if (At(a)) {
      var h = !0;
      pl(o);
    } else h = !1;
    if (oi(o, f), o.stateNode === null) jl(t, o), Em(o, a, u), ec(o, a, u, f), u = !0;
    else if (t === null) {
      var S = o.stateNode, N = o.memoizedProps;
      S.props = N;
      var j = S.context, I = a.contextType;
      typeof I == "object" && I !== null ? I = nn(I) : (I = At(a) ? lo : xt.current, I = Jo(o, I));
      var Q = a.getDerivedStateFromProps, G = typeof Q == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      G || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (N !== u || j !== I) && Sm(o, S, u, I), _r = !1;
      var K = o.memoizedState;
      S.state = K, Cl(o, u, S, f), j = o.memoizedState, N !== u || K !== j || jt.current || _r ? (typeof Q == "function" && (Zu(o, a, Q, u), j = o.memoizedState), (N = _r || Cm(o, a, N, u, K, j, I)) ? (G || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (o.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (o.flags |= 4194308), o.memoizedProps = u, o.memoizedState = j), S.props = u, S.state = j, S.context = I, u = N) : (typeof S.componentDidMount == "function" && (o.flags |= 4194308), u = !1);
    } else {
      S = o.stateNode, qp(t, o), N = o.memoizedProps, I = o.type === o.elementType ? N : mn(o.type, N), S.props = I, G = o.pendingProps, K = S.context, j = a.contextType, typeof j == "object" && j !== null ? j = nn(j) : (j = At(a) ? lo : xt.current, j = Jo(o, j));
      var ie = a.getDerivedStateFromProps;
      (Q = typeof ie == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (N !== G || K !== j) && Sm(o, S, u, j), _r = !1, K = o.memoizedState, S.state = K, Cl(o, u, S, f);
      var ce = o.memoizedState;
      N !== G || K !== ce || jt.current || _r ? (typeof ie == "function" && (Zu(o, a, ie, u), ce = o.memoizedState), (I = _r || Cm(o, a, I, u, K, ce, j) || !1) ? (Q || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(u, ce, j), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(u, ce, j)), typeof S.componentDidUpdate == "function" && (o.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (o.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || N === t.memoizedProps && K === t.memoizedState || (o.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || N === t.memoizedProps && K === t.memoizedState || (o.flags |= 1024), o.memoizedProps = u, o.memoizedState = ce), S.props = u, S.state = ce, S.context = j, u = I) : (typeof S.componentDidUpdate != "function" || N === t.memoizedProps && K === t.memoizedState || (o.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || N === t.memoizedProps && K === t.memoizedState || (o.flags |= 1024), u = !1);
    }
    return oc(t, o, a, u, h, f);
  }
  function oc(t, o, a, u, f, h) {
    Tm(t, o);
    var S = (o.flags & 128) !== 0;
    if (!u && !S) return f && Wp(o, a, !1), qn(t, o, h);
    u = o.stateNode, kx.current = o;
    var N = S && typeof a.getDerivedStateFromError != "function" ? null : u.render();
    return o.flags |= 1, t !== null && S ? (o.child = ni(o, t.child, null, h), o.child = ni(o, null, N, h)) : kt(t, o, N, h), o.memoizedState = u.state, f && Wp(o, a, !0), o.child;
  }
  function Mm(t) {
    var o = t.stateNode;
    o.pendingContext ? Ip(t, o.pendingContext, o.pendingContext !== o.context) : o.context && Ip(t, o.context, !1), zu(t, o.containerInfo);
  }
  function Lm(t, o, a, u, f) {
    return ti(), Tu(f), o.flags |= 256, kt(t, o, a, u), o.child;
  }
  var ic = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ac(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function Im(t, o, a) {
    var u = o.pendingProps, f = Ze.current, h = !1, S = (o.flags & 128) !== 0, N;
    if ((N = S) || (N = t !== null && t.memoizedState === null ? !1 : (f & 2) !== 0), N ? (h = !0, o.flags &= -129) : (t === null || t.memoizedState !== null) && (f |= 1), Ve(Ze, f & 1), t === null)
      return Ou(o), t = o.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (o.mode & 1 ? t.data === "$!" ? o.lanes = 8 : o.lanes = 1073741824 : o.lanes = 1, null) : (S = u.children, t = u.fallback, h ? (u = o.mode, h = o.child, S = { mode: "hidden", children: S }, !(u & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = S) : h = Hl(S, u, 0, null), t = yo(t, u, a, null), h.return = o, t.return = o, h.sibling = t, o.child = h, o.child.memoizedState = ac(a), o.memoizedState = ic, t) : lc(o, S));
    if (f = t.memoizedState, f !== null && (N = f.dehydrated, N !== null)) return Nx(t, o, S, u, N, f, a);
    if (h) {
      h = u.fallback, S = o.mode, f = t.child, N = f.sibling;
      var j = { mode: "hidden", children: u.children };
      return !(S & 1) && o.child !== f ? (u = o.child, u.childLanes = 0, u.pendingProps = j, o.deletions = null) : (u = Mr(f, j), u.subtreeFlags = f.subtreeFlags & 14680064), N !== null ? h = Mr(N, h) : (h = yo(h, S, a, null), h.flags |= 2), h.return = o, u.return = o, u.sibling = h, o.child = u, u = h, h = o.child, S = t.child.memoizedState, S = S === null ? ac(a) : { baseLanes: S.baseLanes | a, cachePool: null, transitions: S.transitions }, h.memoizedState = S, h.childLanes = t.childLanes & ~a, o.memoizedState = ic, u;
    }
    return h = t.child, t = h.sibling, u = Mr(h, { mode: "visible", children: u.children }), !(o.mode & 1) && (u.lanes = a), u.return = o, u.sibling = null, t !== null && (a = o.deletions, a === null ? (o.deletions = [t], o.flags |= 16) : a.push(t)), o.child = u, o.memoizedState = null, u;
  }
  function lc(t, o) {
    return o = Hl({ mode: "visible", children: o }, t.mode, 0, null), o.return = t, t.child = o;
  }
  function Pl(t, o, a, u) {
    return u !== null && Tu(u), ni(o, t.child, null, a), t = lc(o, o.pendingProps.children), t.flags |= 2, o.memoizedState = null, t;
  }
  function Nx(t, o, a, u, f, h, S) {
    if (a)
      return o.flags & 256 ? (o.flags &= -257, u = tc(Error(r(422))), Pl(t, o, S, u)) : o.memoizedState !== null ? (o.child = t.child, o.flags |= 128, null) : (h = u.fallback, f = o.mode, u = Hl({ mode: "visible", children: u.children }, f, 0, null), h = yo(h, f, S, null), h.flags |= 2, u.return = o, h.return = o, u.sibling = h, o.child = u, o.mode & 1 && ni(o, t.child, null, S), o.child.memoizedState = ac(S), o.memoizedState = ic, h);
    if (!(o.mode & 1)) return Pl(t, o, S, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u) var N = u.dgst;
      return u = N, h = Error(r(419)), u = tc(h, u, void 0), Pl(t, o, S, u);
    }
    if (N = (S & t.childLanes) !== 0, Ot || N) {
      if (u = pt, u !== null) {
        switch (S & -S) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = f & (u.suspendedLanes | S) ? 0 : f, f !== 0 && f !== h.retryLane && (h.retryLane = f, Xn(t, f), gn(u, t, f, -1));
      }
      return Ec(), u = tc(Error(r(421))), Pl(t, o, S, u);
    }
    return f.data === "$?" ? (o.flags |= 128, o.child = t.child, o = zx.bind(null, t), f._reactRetry = o, null) : (t = h.treeContext, Ut = br(f.nextSibling), Vt = o, Je = !0, pn = null, t !== null && (en[tn++] = Kn, en[tn++] = Qn, en[tn++] = so, Kn = t.id, Qn = t.overflow, so = o), o = lc(o, u.children), o.flags |= 4096, o);
  }
  function Bm(t, o, a) {
    t.lanes |= o;
    var u = t.alternate;
    u !== null && (u.lanes |= o), Iu(t.return, o, a);
  }
  function sc(t, o, a, u, f) {
    var h = t.memoizedState;
    h === null ? t.memoizedState = { isBackwards: o, rendering: null, renderingStartTime: 0, last: u, tail: a, tailMode: f } : (h.isBackwards = o, h.rendering = null, h.renderingStartTime = 0, h.last = u, h.tail = a, h.tailMode = f);
  }
  function Wm(t, o, a) {
    var u = o.pendingProps, f = u.revealOrder, h = u.tail;
    if (kt(t, o, u.children, a), u = Ze.current, u & 2) u = u & 1 | 2, o.flags |= 128;
    else {
      if (t !== null && t.flags & 128) e: for (t = o.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Bm(t, a, o);
        else if (t.tag === 19) Bm(t, a, o);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === o) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === o) break e;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      u &= 1;
    }
    if (Ve(Ze, u), !(o.mode & 1)) o.memoizedState = null;
    else switch (f) {
      case "forwards":
        for (a = o.child, f = null; a !== null; ) t = a.alternate, t !== null && El(t) === null && (f = a), a = a.sibling;
        a = f, a === null ? (f = o.child, o.child = null) : (f = a.sibling, a.sibling = null), sc(o, !1, f, a, h);
        break;
      case "backwards":
        for (a = null, f = o.child, o.child = null; f !== null; ) {
          if (t = f.alternate, t !== null && El(t) === null) {
            o.child = f;
            break;
          }
          t = f.sibling, f.sibling = a, a = f, f = t;
        }
        sc(o, !0, a, null, h);
        break;
      case "together":
        sc(o, !1, null, null, void 0);
        break;
      default:
        o.memoizedState = null;
    }
    return o.child;
  }
  function jl(t, o) {
    !(o.mode & 1) && t !== null && (t.alternate = null, o.alternate = null, o.flags |= 2);
  }
  function qn(t, o, a) {
    if (t !== null && (o.dependencies = t.dependencies), mo |= o.lanes, !(a & o.childLanes)) return null;
    if (t !== null && o.child !== t.child) throw Error(r(153));
    if (o.child !== null) {
      for (t = o.child, a = Mr(t, t.pendingProps), o.child = a, a.return = o; t.sibling !== null; ) t = t.sibling, a = a.sibling = Mr(t, t.pendingProps), a.return = o;
      a.sibling = null;
    }
    return o.child;
  }
  function _x(t, o, a) {
    switch (o.tag) {
      case 3:
        Mm(o), ti();
        break;
      case 5:
        em(o);
        break;
      case 1:
        At(o.type) && pl(o);
        break;
      case 4:
        zu(o, o.stateNode.containerInfo);
        break;
      case 10:
        var u = o.type._context, f = o.memoizedProps.value;
        Ve(Dl, u._currentValue), u._currentValue = f;
        break;
      case 13:
        if (u = o.memoizedState, u !== null)
          return u.dehydrated !== null ? (Ve(Ze, Ze.current & 1), o.flags |= 128, null) : a & o.child.childLanes ? Im(t, o, a) : (Ve(Ze, Ze.current & 1), t = qn(t, o, a), t !== null ? t.sibling : null);
        Ve(Ze, Ze.current & 1);
        break;
      case 19:
        if (u = (a & o.childLanes) !== 0, t.flags & 128) {
          if (u) return Wm(t, o, a);
          o.flags |= 128;
        }
        if (f = o.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Ve(Ze, Ze.current), u) break;
        return null;
      case 22:
      case 23:
        return o.lanes = 0, Om(t, o, a);
    }
    return qn(t, o, a);
  }
  var zm, uc, $m, Hm;
  zm = function(t, o) {
    for (var a = o.child; a !== null; ) {
      if (a.tag === 5 || a.tag === 6) t.appendChild(a.stateNode);
      else if (a.tag !== 4 && a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === o) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === o) return;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
  }, uc = function() {
  }, $m = function(t, o, a, u) {
    var f = t.memoizedProps;
    if (f !== u) {
      t = o.stateNode, fo(Pn.current);
      var h = null;
      switch (a) {
        case "input":
          f = dt(t, f), u = dt(t, u), h = [];
          break;
        case "select":
          f = q({}, f, { value: void 0 }), u = q({}, u, { value: void 0 }), h = [];
          break;
        case "textarea":
          f = eo(t, f), u = eo(t, u), h = [];
          break;
        default:
          typeof f.onClick != "function" && typeof u.onClick == "function" && (t.onclick = cl);
      }
      Se(a, u);
      var S;
      a = null;
      for (I in f) if (!u.hasOwnProperty(I) && f.hasOwnProperty(I) && f[I] != null) if (I === "style") {
        var N = f[I];
        for (S in N) N.hasOwnProperty(S) && (a || (a = {}), a[S] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (l.hasOwnProperty(I) ? h || (h = []) : (h = h || []).push(I, null));
      for (I in u) {
        var j = u[I];
        if (N = f != null ? f[I] : void 0, u.hasOwnProperty(I) && j !== N && (j != null || N != null)) if (I === "style") if (N) {
          for (S in N) !N.hasOwnProperty(S) || j && j.hasOwnProperty(S) || (a || (a = {}), a[S] = "");
          for (S in j) j.hasOwnProperty(S) && N[S] !== j[S] && (a || (a = {}), a[S] = j[S]);
        } else a || (h || (h = []), h.push(
          I,
          a
        )), a = j;
        else I === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, N = N ? N.__html : void 0, j != null && N !== j && (h = h || []).push(I, j)) : I === "children" ? typeof j != "string" && typeof j != "number" || (h = h || []).push(I, "" + j) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (l.hasOwnProperty(I) ? (j != null && I === "onScroll" && Ke("scroll", t), h || N === j || (h = [])) : (h = h || []).push(I, j));
      }
      a && (h = h || []).push("style", a);
      var I = h;
      (o.updateQueue = I) && (o.flags |= 4);
    }
  }, Hm = function(t, o, a, u) {
    a !== u && (o.flags |= 4);
  };
  function ca(t, o) {
    if (!Je) switch (t.tailMode) {
      case "hidden":
        o = t.tail;
        for (var a = null; o !== null; ) o.alternate !== null && (a = o), o = o.sibling;
        a === null ? t.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = t.tail;
        for (var u = null; a !== null; ) a.alternate !== null && (u = a), a = a.sibling;
        u === null ? o || t.tail === null ? t.tail = null : t.tail.sibling = null : u.sibling = null;
    }
  }
  function Et(t) {
    var o = t.alternate !== null && t.alternate.child === t.child, a = 0, u = 0;
    if (o) for (var f = t.child; f !== null; ) a |= f.lanes | f.childLanes, u |= f.subtreeFlags & 14680064, u |= f.flags & 14680064, f.return = t, f = f.sibling;
    else for (f = t.child; f !== null; ) a |= f.lanes | f.childLanes, u |= f.subtreeFlags, u |= f.flags, f.return = t, f = f.sibling;
    return t.subtreeFlags |= u, t.childLanes = a, o;
  }
  function Px(t, o, a) {
    var u = o.pendingProps;
    switch (ju(o), o.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Et(o), null;
      case 1:
        return At(o.type) && fl(), Et(o), null;
      case 3:
        return u = o.stateNode, ii(), Qe(jt), Qe(xt), Vu(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (t === null || t.child === null) && (gl(o) ? o.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(o.flags & 256) || (o.flags |= 1024, pn !== null && (wc(pn), pn = null))), uc(t, o), Et(o), null;
      case 5:
        $u(o);
        var f = fo(ia.current);
        if (a = o.type, t !== null && o.stateNode != null) $m(t, o, a, u, f), t.ref !== o.ref && (o.flags |= 512, o.flags |= 2097152);
        else {
          if (!u) {
            if (o.stateNode === null) throw Error(r(166));
            return Et(o), null;
          }
          if (t = fo(Pn.current), gl(o)) {
            u = o.stateNode, a = o.type;
            var h = o.memoizedProps;
            switch (u[_n] = o, u[ea] = h, t = (o.mode & 1) !== 0, a) {
              case "dialog":
                Ke("cancel", u), Ke("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ke("load", u);
                break;
              case "video":
              case "audio":
                for (f = 0; f < qi.length; f++) Ke(qi[f], u);
                break;
              case "source":
                Ke("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Ke(
                  "error",
                  u
                ), Ke("load", u);
                break;
              case "details":
                Ke("toggle", u);
                break;
              case "input":
                wt(u, h), Ke("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!h.multiple }, Ke("invalid", u);
                break;
              case "textarea":
                un(u, h), Ke("invalid", u);
            }
            Se(a, h), f = null;
            for (var S in h) if (h.hasOwnProperty(S)) {
              var N = h[S];
              S === "children" ? typeof N == "string" ? u.textContent !== N && (h.suppressHydrationWarning !== !0 && ul(u.textContent, N, t), f = ["children", N]) : typeof N == "number" && u.textContent !== "" + N && (h.suppressHydrationWarning !== !0 && ul(
                u.textContent,
                N,
                t
              ), f = ["children", "" + N]) : l.hasOwnProperty(S) && N != null && S === "onScroll" && Ke("scroll", u);
            }
            switch (a) {
              case "input":
                Ne(u), qt(u, h, !0);
                break;
              case "textarea":
                Ne(u), to(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (u.onclick = cl);
            }
            u = f, o.updateQueue = u, u !== null && (o.flags |= 4);
          } else {
            S = f.nodeType === 9 ? f : f.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Bo(a)), t === "http://www.w3.org/1999/xhtml" ? a === "script" ? (t = S.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof u.is == "string" ? t = S.createElement(a, { is: u.is }) : (t = S.createElement(a), a === "select" && (S = t, u.multiple ? S.multiple = !0 : u.size && (S.size = u.size))) : t = S.createElementNS(t, a), t[_n] = o, t[ea] = u, zm(t, o, !1, !1), o.stateNode = t;
            e: {
              switch (S = Le(a, u), a) {
                case "dialog":
                  Ke("cancel", t), Ke("close", t), f = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ke("load", t), f = u;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < qi.length; f++) Ke(qi[f], t);
                  f = u;
                  break;
                case "source":
                  Ke("error", t), f = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Ke(
                    "error",
                    t
                  ), Ke("load", t), f = u;
                  break;
                case "details":
                  Ke("toggle", t), f = u;
                  break;
                case "input":
                  wt(t, u), f = dt(t, u), Ke("invalid", t);
                  break;
                case "option":
                  f = u;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!u.multiple }, f = q({}, u, { value: void 0 }), Ke("invalid", t);
                  break;
                case "textarea":
                  un(t, u), f = eo(t, u), Ke("invalid", t);
                  break;
                default:
                  f = u;
              }
              Se(a, f), N = f;
              for (h in N) if (N.hasOwnProperty(h)) {
                var j = N[h];
                h === "style" ? yr(t, j) : h === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && hr(t, j)) : h === "children" ? typeof j == "string" ? (a !== "textarea" || j !== "") && kn(t, j) : typeof j == "number" && kn(t, "" + j) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (l.hasOwnProperty(h) ? j != null && h === "onScroll" && Ke("scroll", t) : j != null && _(t, h, j, S));
              }
              switch (a) {
                case "input":
                  Ne(t), qt(t, u, !1);
                  break;
                case "textarea":
                  Ne(t), to(t);
                  break;
                case "option":
                  u.value != null && t.setAttribute("value", "" + ue(u.value));
                  break;
                case "select":
                  t.multiple = !!u.multiple, h = u.value, h != null ? Fn(t, !!u.multiple, h, !1) : u.defaultValue != null && Fn(
                    t,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (t.onclick = cl);
              }
              switch (a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (o.flags |= 4);
          }
          o.ref !== null && (o.flags |= 512, o.flags |= 2097152);
        }
        return Et(o), null;
      case 6:
        if (t && o.stateNode != null) Hm(t, o, t.memoizedProps, u);
        else {
          if (typeof u != "string" && o.stateNode === null) throw Error(r(166));
          if (a = fo(ia.current), fo(Pn.current), gl(o)) {
            if (u = o.stateNode, a = o.memoizedProps, u[_n] = o, (h = u.nodeValue !== a) && (t = Vt, t !== null)) switch (t.tag) {
              case 3:
                ul(u.nodeValue, a, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 && ul(u.nodeValue, a, (t.mode & 1) !== 0);
            }
            h && (o.flags |= 4);
          } else u = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(u), u[_n] = o, o.stateNode = u;
        }
        return Et(o), null;
      case 13:
        if (Qe(Ze), u = o.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (Je && Ut !== null && o.mode & 1 && !(o.flags & 128)) Yp(), ti(), o.flags |= 98560, h = !1;
          else if (h = gl(o), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!h) throw Error(r(318));
              if (h = o.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(r(317));
              h[_n] = o;
            } else ti(), !(o.flags & 128) && (o.memoizedState = null), o.flags |= 4;
            Et(o), h = !1;
          } else pn !== null && (wc(pn), pn = null), h = !0;
          if (!h) return o.flags & 65536 ? o : null;
        }
        return o.flags & 128 ? (o.lanes = a, o) : (u = u !== null, u !== (t !== null && t.memoizedState !== null) && u && (o.child.flags |= 8192, o.mode & 1 && (t === null || Ze.current & 1 ? ct === 0 && (ct = 3) : Ec())), o.updateQueue !== null && (o.flags |= 4), Et(o), null);
      case 4:
        return ii(), uc(t, o), t === null && Ji(o.stateNode.containerInfo), Et(o), null;
      case 10:
        return Lu(o.type._context), Et(o), null;
      case 17:
        return At(o.type) && fl(), Et(o), null;
      case 19:
        if (Qe(Ze), h = o.memoizedState, h === null) return Et(o), null;
        if (u = (o.flags & 128) !== 0, S = h.rendering, S === null) if (u) ca(h, !1);
        else {
          if (ct !== 0 || t !== null && t.flags & 128) for (t = o.child; t !== null; ) {
            if (S = El(t), S !== null) {
              for (o.flags |= 128, ca(h, !1), u = S.updateQueue, u !== null && (o.updateQueue = u, o.flags |= 4), o.subtreeFlags = 0, u = a, a = o.child; a !== null; ) h = a, t = u, h.flags &= 14680066, S = h.alternate, S === null ? (h.childLanes = 0, h.lanes = t, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = S.childLanes, h.lanes = S.lanes, h.child = S.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = S.memoizedProps, h.memoizedState = S.memoizedState, h.updateQueue = S.updateQueue, h.type = S.type, t = S.dependencies, h.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), a = a.sibling;
              return Ve(Ze, Ze.current & 1 | 2), o.child;
            }
            t = t.sibling;
          }
          h.tail !== null && ot() > ui && (o.flags |= 128, u = !0, ca(h, !1), o.lanes = 4194304);
        }
        else {
          if (!u) if (t = El(S), t !== null) {
            if (o.flags |= 128, u = !0, a = t.updateQueue, a !== null && (o.updateQueue = a, o.flags |= 4), ca(h, !0), h.tail === null && h.tailMode === "hidden" && !S.alternate && !Je) return Et(o), null;
          } else 2 * ot() - h.renderingStartTime > ui && a !== 1073741824 && (o.flags |= 128, u = !0, ca(h, !1), o.lanes = 4194304);
          h.isBackwards ? (S.sibling = o.child, o.child = S) : (a = h.last, a !== null ? a.sibling = S : o.child = S, h.last = S);
        }
        return h.tail !== null ? (o = h.tail, h.rendering = o, h.tail = o.sibling, h.renderingStartTime = ot(), o.sibling = null, a = Ze.current, Ve(Ze, u ? a & 1 | 2 : a & 1), o) : (Et(o), null);
      case 22:
      case 23:
        return Cc(), u = o.memoizedState !== null, t !== null && t.memoizedState !== null !== u && (o.flags |= 8192), u && o.mode & 1 ? Yt & 1073741824 && (Et(o), o.subtreeFlags & 6 && (o.flags |= 8192)) : Et(o), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, o.tag));
  }
  function jx(t, o) {
    switch (ju(o), o.tag) {
      case 1:
        return At(o.type) && fl(), t = o.flags, t & 65536 ? (o.flags = t & -65537 | 128, o) : null;
      case 3:
        return ii(), Qe(jt), Qe(xt), Vu(), t = o.flags, t & 65536 && !(t & 128) ? (o.flags = t & -65537 | 128, o) : null;
      case 5:
        return $u(o), null;
      case 13:
        if (Qe(Ze), t = o.memoizedState, t !== null && t.dehydrated !== null) {
          if (o.alternate === null) throw Error(r(340));
          ti();
        }
        return t = o.flags, t & 65536 ? (o.flags = t & -65537 | 128, o) : null;
      case 19:
        return Qe(Ze), null;
      case 4:
        return ii(), null;
      case 10:
        return Lu(o.type._context), null;
      case 22:
      case 23:
        return Cc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Al = !1, St = !1, Ax = typeof WeakSet == "function" ? WeakSet : Set, se = null;
  function li(t, o) {
    var a = t.ref;
    if (a !== null) if (typeof a == "function") try {
      a(null);
    } catch (u) {
      rt(t, o, u);
    }
    else a.current = null;
  }
  function cc(t, o, a) {
    try {
      a();
    } catch (u) {
      rt(t, o, u);
    }
  }
  var Vm = !1;
  function Ox(t, o) {
    if (Cu = Ja, t = Cp(), mu(t)) {
      if ("selectionStart" in t) var a = { start: t.selectionStart, end: t.selectionEnd };
      else e: {
        a = (a = t.ownerDocument) && a.defaultView || window;
        var u = a.getSelection && a.getSelection();
        if (u && u.rangeCount !== 0) {
          a = u.anchorNode;
          var f = u.anchorOffset, h = u.focusNode;
          u = u.focusOffset;
          try {
            a.nodeType, h.nodeType;
          } catch {
            a = null;
            break e;
          }
          var S = 0, N = -1, j = -1, I = 0, Q = 0, G = t, K = null;
          t: for (; ; ) {
            for (var ie; G !== a || f !== 0 && G.nodeType !== 3 || (N = S + f), G !== h || u !== 0 && G.nodeType !== 3 || (j = S + u), G.nodeType === 3 && (S += G.nodeValue.length), (ie = G.firstChild) !== null; )
              K = G, G = ie;
            for (; ; ) {
              if (G === t) break t;
              if (K === a && ++I === f && (N = S), K === h && ++Q === u && (j = S), (ie = G.nextSibling) !== null) break;
              G = K, K = G.parentNode;
            }
            G = ie;
          }
          a = N === -1 || j === -1 ? null : { start: N, end: j };
        } else a = null;
      }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Eu = { focusedElem: t, selectionRange: a }, Ja = !1, se = o; se !== null; ) if (o = se, t = o.child, (o.subtreeFlags & 1028) !== 0 && t !== null) t.return = o, se = t;
    else for (; se !== null; ) {
      o = se;
      try {
        var ce = o.alternate;
        if (o.flags & 1024) switch (o.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ce !== null) {
              var de = ce.memoizedProps, it = ce.memoizedState, M = o.stateNode, T = M.getSnapshotBeforeUpdate(o.elementType === o.type ? de : mn(o.type, de), it);
              M.__reactInternalSnapshotBeforeUpdate = T;
            }
            break;
          case 3:
            var L = o.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(r(163));
        }
      } catch (J) {
        rt(o, o.return, J);
      }
      if (t = o.sibling, t !== null) {
        t.return = o.return, se = t;
        break;
      }
      se = o.return;
    }
    return ce = Vm, Vm = !1, ce;
  }
  function da(t, o, a) {
    var u = o.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & t) === t) {
          var h = f.destroy;
          f.destroy = void 0, h !== void 0 && cc(o, a, h);
        }
        f = f.next;
      } while (f !== u);
    }
  }
  function Ol(t, o) {
    if (o = o.updateQueue, o = o !== null ? o.lastEffect : null, o !== null) {
      var a = o = o.next;
      do {
        if ((a.tag & t) === t) {
          var u = a.create;
          a.destroy = u();
        }
        a = a.next;
      } while (a !== o);
    }
  }
  function dc(t) {
    var o = t.ref;
    if (o !== null) {
      var a = t.stateNode;
      switch (t.tag) {
        case 5:
          t = a;
          break;
        default:
          t = a;
      }
      typeof o == "function" ? o(t) : o.current = t;
    }
  }
  function Um(t) {
    var o = t.alternate;
    o !== null && (t.alternate = null, Um(o)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (o = t.stateNode, o !== null && (delete o[_n], delete o[ea], delete o[ku], delete o[hx], delete o[vx])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function Ym(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function Km(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ym(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function fc(t, o, a) {
    var u = t.tag;
    if (u === 5 || u === 6) t = t.stateNode, o ? a.nodeType === 8 ? a.parentNode.insertBefore(t, o) : a.insertBefore(t, o) : (a.nodeType === 8 ? (o = a.parentNode, o.insertBefore(t, a)) : (o = a, o.appendChild(t)), a = a._reactRootContainer, a != null || o.onclick !== null || (o.onclick = cl));
    else if (u !== 4 && (t = t.child, t !== null)) for (fc(t, o, a), t = t.sibling; t !== null; ) fc(t, o, a), t = t.sibling;
  }
  function pc(t, o, a) {
    var u = t.tag;
    if (u === 5 || u === 6) t = t.stateNode, o ? a.insertBefore(t, o) : a.appendChild(t);
    else if (u !== 4 && (t = t.child, t !== null)) for (pc(t, o, a), t = t.sibling; t !== null; ) pc(t, o, a), t = t.sibling;
  }
  var gt = null, hn = !1;
  function jr(t, o, a) {
    for (a = a.child; a !== null; ) Qm(t, o, a), a = a.sibling;
  }
  function Qm(t, o, a) {
    if (Nn && typeof Nn.onCommitFiberUnmount == "function") try {
      Nn.onCommitFiberUnmount(Ya, a);
    } catch {
    }
    switch (a.tag) {
      case 5:
        St || li(a, o);
      case 6:
        var u = gt, f = hn;
        gt = null, jr(t, o, a), gt = u, hn = f, gt !== null && (hn ? (t = gt, a = a.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(a) : t.removeChild(a)) : gt.removeChild(a.stateNode));
        break;
      case 18:
        gt !== null && (hn ? (t = gt, a = a.stateNode, t.nodeType === 8 ? Fu(t.parentNode, a) : t.nodeType === 1 && Fu(t, a), Hi(t)) : Fu(gt, a.stateNode));
        break;
      case 4:
        u = gt, f = hn, gt = a.stateNode.containerInfo, hn = !0, jr(t, o, a), gt = u, hn = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!St && (u = a.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          f = u = u.next;
          do {
            var h = f, S = h.destroy;
            h = h.tag, S !== void 0 && (h & 2 || h & 4) && cc(a, o, S), f = f.next;
          } while (f !== u);
        }
        jr(t, o, a);
        break;
      case 1:
        if (!St && (li(a, o), u = a.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = a.memoizedProps, u.state = a.memoizedState, u.componentWillUnmount();
        } catch (N) {
          rt(a, o, N);
        }
        jr(t, o, a);
        break;
      case 21:
        jr(t, o, a);
        break;
      case 22:
        a.mode & 1 ? (St = (u = St) || a.memoizedState !== null, jr(t, o, a), St = u) : jr(t, o, a);
        break;
      default:
        jr(t, o, a);
    }
  }
  function Xm(t) {
    var o = t.updateQueue;
    if (o !== null) {
      t.updateQueue = null;
      var a = t.stateNode;
      a === null && (a = t.stateNode = new Ax()), o.forEach(function(u) {
        var f = $x.bind(null, t, u);
        a.has(u) || (a.add(u), u.then(f, f));
      });
    }
  }
  function vn(t, o) {
    var a = o.deletions;
    if (a !== null) for (var u = 0; u < a.length; u++) {
      var f = a[u];
      try {
        var h = t, S = o, N = S;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 5:
              gt = N.stateNode, hn = !1;
              break e;
            case 3:
              gt = N.stateNode.containerInfo, hn = !0;
              break e;
            case 4:
              gt = N.stateNode.containerInfo, hn = !0;
              break e;
          }
          N = N.return;
        }
        if (gt === null) throw Error(r(160));
        Qm(h, S, f), gt = null, hn = !1;
        var j = f.alternate;
        j !== null && (j.return = null), f.return = null;
      } catch (I) {
        rt(f, o, I);
      }
    }
    if (o.subtreeFlags & 12854) for (o = o.child; o !== null; ) Gm(o, t), o = o.sibling;
  }
  function Gm(t, o) {
    var a = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (vn(o, t), An(t), u & 4) {
          try {
            da(3, t, t.return), Ol(3, t);
          } catch (de) {
            rt(t, t.return, de);
          }
          try {
            da(5, t, t.return);
          } catch (de) {
            rt(t, t.return, de);
          }
        }
        break;
      case 1:
        vn(o, t), An(t), u & 512 && a !== null && li(a, a.return);
        break;
      case 5:
        if (vn(o, t), An(t), u & 512 && a !== null && li(a, a.return), t.flags & 32) {
          var f = t.stateNode;
          try {
            kn(f, "");
          } catch (de) {
            rt(t, t.return, de);
          }
        }
        if (u & 4 && (f = t.stateNode, f != null)) {
          var h = t.memoizedProps, S = a !== null ? a.memoizedProps : h, N = t.type, j = t.updateQueue;
          if (t.updateQueue = null, j !== null) try {
            N === "input" && h.type === "radio" && h.name != null && zt(f, h), Le(N, S);
            var I = Le(N, h);
            for (S = 0; S < j.length; S += 2) {
              var Q = j[S], G = j[S + 1];
              Q === "style" ? yr(f, G) : Q === "dangerouslySetInnerHTML" ? hr(f, G) : Q === "children" ? kn(f, G) : _(f, Q, G, I);
            }
            switch (N) {
              case "input":
                $t(f, h);
                break;
              case "textarea":
                Io(f, h);
                break;
              case "select":
                var K = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!h.multiple;
                var ie = h.value;
                ie != null ? Fn(f, !!h.multiple, ie, !1) : K !== !!h.multiple && (h.defaultValue != null ? Fn(
                  f,
                  !!h.multiple,
                  h.defaultValue,
                  !0
                ) : Fn(f, !!h.multiple, h.multiple ? [] : "", !1));
            }
            f[ea] = h;
          } catch (de) {
            rt(t, t.return, de);
          }
        }
        break;
      case 6:
        if (vn(o, t), An(t), u & 4) {
          if (t.stateNode === null) throw Error(r(162));
          f = t.stateNode, h = t.memoizedProps;
          try {
            f.nodeValue = h;
          } catch (de) {
            rt(t, t.return, de);
          }
        }
        break;
      case 3:
        if (vn(o, t), An(t), u & 4 && a !== null && a.memoizedState.isDehydrated) try {
          Hi(o.containerInfo);
        } catch (de) {
          rt(t, t.return, de);
        }
        break;
      case 4:
        vn(o, t), An(t);
        break;
      case 13:
        vn(o, t), An(t), f = t.child, f.flags & 8192 && (h = f.memoizedState !== null, f.stateNode.isHidden = h, !h || f.alternate !== null && f.alternate.memoizedState !== null || (vc = ot())), u & 4 && Xm(t);
        break;
      case 22:
        if (Q = a !== null && a.memoizedState !== null, t.mode & 1 ? (St = (I = St) || Q, vn(o, t), St = I) : vn(o, t), An(t), u & 8192) {
          if (I = t.memoizedState !== null, (t.stateNode.isHidden = I) && !Q && t.mode & 1) for (se = t, Q = t.child; Q !== null; ) {
            for (G = se = Q; se !== null; ) {
              switch (K = se, ie = K.child, K.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  da(4, K, K.return);
                  break;
                case 1:
                  li(K, K.return);
                  var ce = K.stateNode;
                  if (typeof ce.componentWillUnmount == "function") {
                    u = K, a = K.return;
                    try {
                      o = u, ce.props = o.memoizedProps, ce.state = o.memoizedState, ce.componentWillUnmount();
                    } catch (de) {
                      rt(u, a, de);
                    }
                  }
                  break;
                case 5:
                  li(K, K.return);
                  break;
                case 22:
                  if (K.memoizedState !== null) {
                    Zm(G);
                    continue;
                  }
              }
              ie !== null ? (ie.return = K, se = ie) : Zm(G);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, G = t; ; ) {
            if (G.tag === 5) {
              if (Q === null) {
                Q = G;
                try {
                  f = G.stateNode, I ? (h = f.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (N = G.stateNode, j = G.memoizedProps.style, S = j != null && j.hasOwnProperty("display") ? j.display : null, N.style.display = gr("display", S));
                } catch (de) {
                  rt(t, t.return, de);
                }
              }
            } else if (G.tag === 6) {
              if (Q === null) try {
                G.stateNode.nodeValue = I ? "" : G.memoizedProps;
              } catch (de) {
                rt(t, t.return, de);
              }
            } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === t) && G.child !== null) {
              G.child.return = G, G = G.child;
              continue;
            }
            if (G === t) break e;
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === t) break e;
              Q === G && (Q = null), G = G.return;
            }
            Q === G && (Q = null), G.sibling.return = G.return, G = G.sibling;
          }
        }
        break;
      case 19:
        vn(o, t), An(t), u & 4 && Xm(t);
        break;
      case 21:
        break;
      default:
        vn(
          o,
          t
        ), An(t);
    }
  }
  function An(t) {
    var o = t.flags;
    if (o & 2) {
      try {
        e: {
          for (var a = t.return; a !== null; ) {
            if (Ym(a)) {
              var u = a;
              break e;
            }
            a = a.return;
          }
          throw Error(r(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (kn(f, ""), u.flags &= -33);
            var h = Km(t);
            pc(t, h, f);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, N = Km(t);
            fc(t, N, S);
            break;
          default:
            throw Error(r(161));
        }
      } catch (j) {
        rt(t, t.return, j);
      }
      t.flags &= -3;
    }
    o & 4096 && (t.flags &= -4097);
  }
  function Tx(t, o, a) {
    se = t, qm(t);
  }
  function qm(t, o, a) {
    for (var u = (t.mode & 1) !== 0; se !== null; ) {
      var f = se, h = f.child;
      if (f.tag === 22 && u) {
        var S = f.memoizedState !== null || Al;
        if (!S) {
          var N = f.alternate, j = N !== null && N.memoizedState !== null || St;
          N = Al;
          var I = St;
          if (Al = S, (St = j) && !I) for (se = f; se !== null; ) S = se, j = S.child, S.tag === 22 && S.memoizedState !== null ? eh(f) : j !== null ? (j.return = S, se = j) : eh(f);
          for (; h !== null; ) se = h, qm(h), h = h.sibling;
          se = f, Al = N, St = I;
        }
        Jm(t);
      } else f.subtreeFlags & 8772 && h !== null ? (h.return = f, se = h) : Jm(t);
    }
  }
  function Jm(t) {
    for (; se !== null; ) {
      var o = se;
      if (o.flags & 8772) {
        var a = o.alternate;
        try {
          if (o.flags & 8772) switch (o.tag) {
            case 0:
            case 11:
            case 15:
              St || Ol(5, o);
              break;
            case 1:
              var u = o.stateNode;
              if (o.flags & 4 && !St) if (a === null) u.componentDidMount();
              else {
                var f = o.elementType === o.type ? a.memoizedProps : mn(o.type, a.memoizedProps);
                u.componentDidUpdate(f, a.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var h = o.updateQueue;
              h !== null && Zp(o, h, u);
              break;
            case 3:
              var S = o.updateQueue;
              if (S !== null) {
                if (a = null, o.child !== null) switch (o.child.tag) {
                  case 5:
                    a = o.child.stateNode;
                    break;
                  case 1:
                    a = o.child.stateNode;
                }
                Zp(o, S, a);
              }
              break;
            case 5:
              var N = o.stateNode;
              if (a === null && o.flags & 4) {
                a = N;
                var j = o.memoizedProps;
                switch (o.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    j.autoFocus && a.focus();
                    break;
                  case "img":
                    j.src && (a.src = j.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (o.memoizedState === null) {
                var I = o.alternate;
                if (I !== null) {
                  var Q = I.memoizedState;
                  if (Q !== null) {
                    var G = Q.dehydrated;
                    G !== null && Hi(G);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(r(163));
          }
          St || o.flags & 512 && dc(o);
        } catch (K) {
          rt(o, o.return, K);
        }
      }
      if (o === t) {
        se = null;
        break;
      }
      if (a = o.sibling, a !== null) {
        a.return = o.return, se = a;
        break;
      }
      se = o.return;
    }
  }
  function Zm(t) {
    for (; se !== null; ) {
      var o = se;
      if (o === t) {
        se = null;
        break;
      }
      var a = o.sibling;
      if (a !== null) {
        a.return = o.return, se = a;
        break;
      }
      se = o.return;
    }
  }
  function eh(t) {
    for (; se !== null; ) {
      var o = se;
      try {
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            var a = o.return;
            try {
              Ol(4, o);
            } catch (j) {
              rt(o, a, j);
            }
            break;
          case 1:
            var u = o.stateNode;
            if (typeof u.componentDidMount == "function") {
              var f = o.return;
              try {
                u.componentDidMount();
              } catch (j) {
                rt(o, f, j);
              }
            }
            var h = o.return;
            try {
              dc(o);
            } catch (j) {
              rt(o, h, j);
            }
            break;
          case 5:
            var S = o.return;
            try {
              dc(o);
            } catch (j) {
              rt(o, S, j);
            }
        }
      } catch (j) {
        rt(o, o.return, j);
      }
      if (o === t) {
        se = null;
        break;
      }
      var N = o.sibling;
      if (N !== null) {
        N.return = o.return, se = N;
        break;
      }
      se = o.return;
    }
  }
  var Rx = Math.ceil, Tl = P.ReactCurrentDispatcher, mc = P.ReactCurrentOwner, on = P.ReactCurrentBatchConfig, Oe = 0, pt = null, lt = null, yt = 0, Yt = 0, si = Fr(0), ct = 0, fa = null, mo = 0, Rl = 0, hc = 0, pa = null, Tt = null, vc = 0, ui = 1 / 0, Jn = null, Ml = !1, gc = null, Ar = null, Ll = !1, Or = null, Il = 0, ma = 0, yc = null, Bl = -1, Wl = 0;
  function Nt() {
    return Oe & 6 ? ot() : Bl !== -1 ? Bl : Bl = ot();
  }
  function Tr(t) {
    return t.mode & 1 ? Oe & 2 && yt !== 0 ? yt & -yt : yx.transition !== null ? (Wl === 0 && (Wl = Kf()), Wl) : (t = Ie, t !== 0 || (t = window.event, t = t === void 0 ? 16 : np(t.type)), t) : 1;
  }
  function gn(t, o, a, u) {
    if (50 < ma) throw ma = 0, yc = null, Error(r(185));
    Ii(t, a, u), (!(Oe & 2) || t !== pt) && (t === pt && (!(Oe & 2) && (Rl |= a), ct === 4 && Rr(t, yt)), Rt(t, u), a === 1 && Oe === 0 && !(o.mode & 1) && (ui = ot() + 500, ml && Nr()));
  }
  function Rt(t, o) {
    var a = t.callbackNode;
    yw(t, o);
    var u = Xa(t, t === pt ? yt : 0);
    if (u === 0) a !== null && Vf(a), t.callbackNode = null, t.callbackPriority = 0;
    else if (o = u & -u, t.callbackPriority !== o) {
      if (a != null && Vf(a), o === 1) t.tag === 0 ? gx(nh.bind(null, t)) : zp(nh.bind(null, t)), px(function() {
        !(Oe & 6) && Nr();
      }), a = null;
      else {
        switch (Qf(u)) {
          case 1:
            a = qs;
            break;
          case 4:
            a = Uf;
            break;
          case 16:
            a = Ua;
            break;
          case 536870912:
            a = Yf;
            break;
          default:
            a = Ua;
        }
        a = ch(a, th.bind(null, t));
      }
      t.callbackPriority = o, t.callbackNode = a;
    }
  }
  function th(t, o) {
    if (Bl = -1, Wl = 0, Oe & 6) throw Error(r(327));
    var a = t.callbackNode;
    if (ci() && t.callbackNode !== a) return null;
    var u = Xa(t, t === pt ? yt : 0);
    if (u === 0) return null;
    if (u & 30 || u & t.expiredLanes || o) o = zl(t, u);
    else {
      o = u;
      var f = Oe;
      Oe |= 2;
      var h = oh();
      (pt !== t || yt !== o) && (Jn = null, ui = ot() + 500, vo(t, o));
      do
        try {
          Ix();
          break;
        } catch (N) {
          rh(t, N);
        }
      while (!0);
      Mu(), Tl.current = h, Oe = f, lt !== null ? o = 0 : (pt = null, yt = 0, o = ct);
    }
    if (o !== 0) {
      if (o === 2 && (f = Js(t), f !== 0 && (u = f, o = Dc(t, f))), o === 1) throw a = fa, vo(t, 0), Rr(t, u), Rt(t, ot()), a;
      if (o === 6) Rr(t, u);
      else {
        if (f = t.current.alternate, !(u & 30) && !Mx(f) && (o = zl(t, u), o === 2 && (h = Js(t), h !== 0 && (u = h, o = Dc(t, h))), o === 1)) throw a = fa, vo(t, 0), Rr(t, u), Rt(t, ot()), a;
        switch (t.finishedWork = f, t.finishedLanes = u, o) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            go(t, Tt, Jn);
            break;
          case 3:
            if (Rr(t, u), (u & 130023424) === u && (o = vc + 500 - ot(), 10 < o)) {
              if (Xa(t, 0) !== 0) break;
              if (f = t.suspendedLanes, (f & u) !== u) {
                Nt(), t.pingedLanes |= t.suspendedLanes & f;
                break;
              }
              t.timeoutHandle = bu(go.bind(null, t, Tt, Jn), o);
              break;
            }
            go(t, Tt, Jn);
            break;
          case 4:
            if (Rr(t, u), (u & 4194240) === u) break;
            for (o = t.eventTimes, f = -1; 0 < u; ) {
              var S = 31 - dn(u);
              h = 1 << S, S = o[S], S > f && (f = S), u &= ~h;
            }
            if (u = f, u = ot() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Rx(u / 1960)) - u, 10 < u) {
              t.timeoutHandle = bu(go.bind(null, t, Tt, Jn), u);
              break;
            }
            go(t, Tt, Jn);
            break;
          case 5:
            go(t, Tt, Jn);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return Rt(t, ot()), t.callbackNode === a ? th.bind(null, t) : null;
  }
  function Dc(t, o) {
    var a = pa;
    return t.current.memoizedState.isDehydrated && (vo(t, o).flags |= 256), t = zl(t, o), t !== 2 && (o = Tt, Tt = a, o !== null && wc(o)), t;
  }
  function wc(t) {
    Tt === null ? Tt = t : Tt.push.apply(Tt, t);
  }
  function Mx(t) {
    for (var o = t; ; ) {
      if (o.flags & 16384) {
        var a = o.updateQueue;
        if (a !== null && (a = a.stores, a !== null)) for (var u = 0; u < a.length; u++) {
          var f = a[u], h = f.getSnapshot;
          f = f.value;
          try {
            if (!fn(h(), f)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (a = o.child, o.subtreeFlags & 16384 && a !== null) a.return = o, o = a;
      else {
        if (o === t) break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t) return !0;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }
    return !0;
  }
  function Rr(t, o) {
    for (o &= ~hc, o &= ~Rl, t.suspendedLanes |= o, t.pingedLanes &= ~o, t = t.expirationTimes; 0 < o; ) {
      var a = 31 - dn(o), u = 1 << a;
      t[a] = -1, o &= ~u;
    }
  }
  function nh(t) {
    if (Oe & 6) throw Error(r(327));
    ci();
    var o = Xa(t, 0);
    if (!(o & 1)) return Rt(t, ot()), null;
    var a = zl(t, o);
    if (t.tag !== 0 && a === 2) {
      var u = Js(t);
      u !== 0 && (o = u, a = Dc(t, u));
    }
    if (a === 1) throw a = fa, vo(t, 0), Rr(t, o), Rt(t, ot()), a;
    if (a === 6) throw Error(r(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = o, go(t, Tt, Jn), Rt(t, ot()), null;
  }
  function xc(t, o) {
    var a = Oe;
    Oe |= 1;
    try {
      return t(o);
    } finally {
      Oe = a, Oe === 0 && (ui = ot() + 500, ml && Nr());
    }
  }
  function ho(t) {
    Or !== null && Or.tag === 0 && !(Oe & 6) && ci();
    var o = Oe;
    Oe |= 1;
    var a = on.transition, u = Ie;
    try {
      if (on.transition = null, Ie = 1, t) return t();
    } finally {
      Ie = u, on.transition = a, Oe = o, !(Oe & 6) && Nr();
    }
  }
  function Cc() {
    Yt = si.current, Qe(si);
  }
  function vo(t, o) {
    t.finishedWork = null, t.finishedLanes = 0;
    var a = t.timeoutHandle;
    if (a !== -1 && (t.timeoutHandle = -1, fx(a)), lt !== null) for (a = lt.return; a !== null; ) {
      var u = a;
      switch (ju(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && fl();
          break;
        case 3:
          ii(), Qe(jt), Qe(xt), Vu();
          break;
        case 5:
          $u(u);
          break;
        case 4:
          ii();
          break;
        case 13:
          Qe(Ze);
          break;
        case 19:
          Qe(Ze);
          break;
        case 10:
          Lu(u.type._context);
          break;
        case 22:
        case 23:
          Cc();
      }
      a = a.return;
    }
    if (pt = t, lt = t = Mr(t.current, null), yt = Yt = o, ct = 0, fa = null, hc = Rl = mo = 0, Tt = pa = null, co !== null) {
      for (o = 0; o < co.length; o++) if (a = co[o], u = a.interleaved, u !== null) {
        a.interleaved = null;
        var f = u.next, h = a.pending;
        if (h !== null) {
          var S = h.next;
          h.next = f, u.next = S;
        }
        a.pending = u;
      }
      co = null;
    }
    return t;
  }
  function rh(t, o) {
    do {
      var a = lt;
      try {
        if (Mu(), Sl.current = Nl, bl) {
          for (var u = et.memoizedState; u !== null; ) {
            var f = u.queue;
            f !== null && (f.pending = null), u = u.next;
          }
          bl = !1;
        }
        if (po = 0, ft = ut = et = null, aa = !1, la = 0, mc.current = null, a === null || a.return === null) {
          ct = 1, fa = o, lt = null;
          break;
        }
        e: {
          var h = t, S = a.return, N = a, j = o;
          if (o = yt, N.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var I = j, Q = N, G = Q.tag;
            if (!(Q.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var K = Q.alternate;
              K ? (Q.updateQueue = K.updateQueue, Q.memoizedState = K.memoizedState, Q.lanes = K.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var ie = Nm(S);
            if (ie !== null) {
              ie.flags &= -257, _m(ie, S, N, h, o), ie.mode & 1 && km(h, I, o), o = ie, j = I;
              var ce = o.updateQueue;
              if (ce === null) {
                var de = /* @__PURE__ */ new Set();
                de.add(j), o.updateQueue = de;
              } else ce.add(j);
              break e;
            } else {
              if (!(o & 1)) {
                km(h, I, o), Ec();
                break e;
              }
              j = Error(r(426));
            }
          } else if (Je && N.mode & 1) {
            var it = Nm(S);
            if (it !== null) {
              !(it.flags & 65536) && (it.flags |= 256), _m(it, S, N, h, o), Tu(ai(j, N));
              break e;
            }
          }
          h = j = ai(j, N), ct !== 4 && (ct = 2), pa === null ? pa = [h] : pa.push(h), h = S;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, o &= -o, h.lanes |= o;
                var M = bm(h, j, o);
                Jp(h, M);
                break e;
              case 1:
                N = j;
                var T = h.type, L = h.stateNode;
                if (!(h.flags & 128) && (typeof T.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ar === null || !Ar.has(L)))) {
                  h.flags |= 65536, o &= -o, h.lanes |= o;
                  var J = Fm(h, N, o);
                  Jp(h, J);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        ah(a);
      } catch (fe) {
        o = fe, lt === a && a !== null && (lt = a = a.return);
        continue;
      }
      break;
    } while (!0);
  }
  function oh() {
    var t = Tl.current;
    return Tl.current = Nl, t === null ? Nl : t;
  }
  function Ec() {
    (ct === 0 || ct === 3 || ct === 2) && (ct = 4), pt === null || !(mo & 268435455) && !(Rl & 268435455) || Rr(pt, yt);
  }
  function zl(t, o) {
    var a = Oe;
    Oe |= 2;
    var u = oh();
    (pt !== t || yt !== o) && (Jn = null, vo(t, o));
    do
      try {
        Lx();
        break;
      } catch (f) {
        rh(t, f);
      }
    while (!0);
    if (Mu(), Oe = a, Tl.current = u, lt !== null) throw Error(r(261));
    return pt = null, yt = 0, ct;
  }
  function Lx() {
    for (; lt !== null; ) ih(lt);
  }
  function Ix() {
    for (; lt !== null && !uw(); ) ih(lt);
  }
  function ih(t) {
    var o = uh(t.alternate, t, Yt);
    t.memoizedProps = t.pendingProps, o === null ? ah(t) : lt = o, mc.current = null;
  }
  function ah(t) {
    var o = t;
    do {
      var a = o.alternate;
      if (t = o.return, o.flags & 32768) {
        if (a = jx(a, o), a !== null) {
          a.flags &= 32767, lt = a;
          return;
        }
        if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
        else {
          ct = 6, lt = null;
          return;
        }
      } else if (a = Px(a, o, Yt), a !== null) {
        lt = a;
        return;
      }
      if (o = o.sibling, o !== null) {
        lt = o;
        return;
      }
      lt = o = t;
    } while (o !== null);
    ct === 0 && (ct = 5);
  }
  function go(t, o, a) {
    var u = Ie, f = on.transition;
    try {
      on.transition = null, Ie = 1, Bx(t, o, a, u);
    } finally {
      on.transition = f, Ie = u;
    }
    return null;
  }
  function Bx(t, o, a, u) {
    do
      ci();
    while (Or !== null);
    if (Oe & 6) throw Error(r(327));
    a = t.finishedWork;
    var f = t.finishedLanes;
    if (a === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, a === t.current) throw Error(r(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var h = a.lanes | a.childLanes;
    if (Dw(t, h), t === pt && (lt = pt = null, yt = 0), !(a.subtreeFlags & 2064) && !(a.flags & 2064) || Ll || (Ll = !0, ch(Ua, function() {
      return ci(), null;
    })), h = (a.flags & 15990) !== 0, a.subtreeFlags & 15990 || h) {
      h = on.transition, on.transition = null;
      var S = Ie;
      Ie = 1;
      var N = Oe;
      Oe |= 4, mc.current = null, Ox(t, a), Gm(a, t), ix(Eu), Ja = !!Cu, Eu = Cu = null, t.current = a, Tx(a), cw(), Oe = N, Ie = S, on.transition = h;
    } else t.current = a;
    if (Ll && (Ll = !1, Or = t, Il = f), h = t.pendingLanes, h === 0 && (Ar = null), pw(a.stateNode), Rt(t, ot()), o !== null) for (u = t.onRecoverableError, a = 0; a < o.length; a++) f = o[a], u(f.value, { componentStack: f.stack, digest: f.digest });
    if (Ml) throw Ml = !1, t = gc, gc = null, t;
    return Il & 1 && t.tag !== 0 && ci(), h = t.pendingLanes, h & 1 ? t === yc ? ma++ : (ma = 0, yc = t) : ma = 0, Nr(), null;
  }
  function ci() {
    if (Or !== null) {
      var t = Qf(Il), o = on.transition, a = Ie;
      try {
        if (on.transition = null, Ie = 16 > t ? 16 : t, Or === null) var u = !1;
        else {
          if (t = Or, Or = null, Il = 0, Oe & 6) throw Error(r(331));
          var f = Oe;
          for (Oe |= 4, se = t.current; se !== null; ) {
            var h = se, S = h.child;
            if (se.flags & 16) {
              var N = h.deletions;
              if (N !== null) {
                for (var j = 0; j < N.length; j++) {
                  var I = N[j];
                  for (se = I; se !== null; ) {
                    var Q = se;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        da(8, Q, h);
                    }
                    var G = Q.child;
                    if (G !== null) G.return = Q, se = G;
                    else for (; se !== null; ) {
                      Q = se;
                      var K = Q.sibling, ie = Q.return;
                      if (Um(Q), Q === I) {
                        se = null;
                        break;
                      }
                      if (K !== null) {
                        K.return = ie, se = K;
                        break;
                      }
                      se = ie;
                    }
                  }
                }
                var ce = h.alternate;
                if (ce !== null) {
                  var de = ce.child;
                  if (de !== null) {
                    ce.child = null;
                    do {
                      var it = de.sibling;
                      de.sibling = null, de = it;
                    } while (de !== null);
                  }
                }
                se = h;
              }
            }
            if (h.subtreeFlags & 2064 && S !== null) S.return = h, se = S;
            else e: for (; se !== null; ) {
              if (h = se, h.flags & 2048) switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  da(9, h, h.return);
              }
              var M = h.sibling;
              if (M !== null) {
                M.return = h.return, se = M;
                break e;
              }
              se = h.return;
            }
          }
          var T = t.current;
          for (se = T; se !== null; ) {
            S = se;
            var L = S.child;
            if (S.subtreeFlags & 2064 && L !== null) L.return = S, se = L;
            else e: for (S = T; se !== null; ) {
              if (N = se, N.flags & 2048) try {
                switch (N.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ol(9, N);
                }
              } catch (fe) {
                rt(N, N.return, fe);
              }
              if (N === S) {
                se = null;
                break e;
              }
              var J = N.sibling;
              if (J !== null) {
                J.return = N.return, se = J;
                break e;
              }
              se = N.return;
            }
          }
          if (Oe = f, Nr(), Nn && typeof Nn.onPostCommitFiberRoot == "function") try {
            Nn.onPostCommitFiberRoot(Ya, t);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Ie = a, on.transition = o;
      }
    }
    return !1;
  }
  function lh(t, o, a) {
    o = ai(a, o), o = bm(t, o, 1), t = Pr(t, o, 1), o = Nt(), t !== null && (Ii(t, 1, o), Rt(t, o));
  }
  function rt(t, o, a) {
    if (t.tag === 3) lh(t, t, a);
    else for (; o !== null; ) {
      if (o.tag === 3) {
        lh(o, t, a);
        break;
      } else if (o.tag === 1) {
        var u = o.stateNode;
        if (typeof o.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ar === null || !Ar.has(u))) {
          t = ai(a, t), t = Fm(o, t, 1), o = Pr(o, t, 1), t = Nt(), o !== null && (Ii(o, 1, t), Rt(o, t));
          break;
        }
      }
      o = o.return;
    }
  }
  function Wx(t, o, a) {
    var u = t.pingCache;
    u !== null && u.delete(o), o = Nt(), t.pingedLanes |= t.suspendedLanes & a, pt === t && (yt & a) === a && (ct === 4 || ct === 3 && (yt & 130023424) === yt && 500 > ot() - vc ? vo(t, 0) : hc |= a), Rt(t, o);
  }
  function sh(t, o) {
    o === 0 && (t.mode & 1 ? (o = Qa, Qa <<= 1, !(Qa & 130023424) && (Qa = 4194304)) : o = 1);
    var a = Nt();
    t = Xn(t, o), t !== null && (Ii(t, o, a), Rt(t, a));
  }
  function zx(t) {
    var o = t.memoizedState, a = 0;
    o !== null && (a = o.retryLane), sh(t, a);
  }
  function $x(t, o) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var u = t.stateNode, f = t.memoizedState;
        f !== null && (a = f.retryLane);
        break;
      case 19:
        u = t.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    u !== null && u.delete(o), sh(t, a);
  }
  var uh;
  uh = function(t, o, a) {
    if (t !== null) if (t.memoizedProps !== o.pendingProps || jt.current) Ot = !0;
    else {
      if (!(t.lanes & a) && !(o.flags & 128)) return Ot = !1, _x(t, o, a);
      Ot = !!(t.flags & 131072);
    }
    else Ot = !1, Je && o.flags & 1048576 && $p(o, vl, o.index);
    switch (o.lanes = 0, o.tag) {
      case 2:
        var u = o.type;
        jl(t, o), t = o.pendingProps;
        var f = Jo(o, xt.current);
        oi(o, a), f = Ku(null, o, u, t, f, a);
        var h = Qu();
        return o.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (o.tag = 1, o.memoizedState = null, o.updateQueue = null, At(u) ? (h = !0, pl(o)) : h = !1, o.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Wu(o), f.updater = _l, o.stateNode = f, f._reactInternals = o, ec(o, u, t, a), o = oc(null, o, u, !0, h, a)) : (o.tag = 0, Je && h && Pu(o), kt(null, o, f, a), o = o.child), o;
      case 16:
        u = o.elementType;
        e: {
          switch (jl(t, o), t = o.pendingProps, f = u._init, u = f(u._payload), o.type = u, f = o.tag = Vx(u), t = mn(u, t), f) {
            case 0:
              o = rc(null, o, u, t, a);
              break e;
            case 1:
              o = Rm(null, o, u, t, a);
              break e;
            case 11:
              o = Pm(null, o, u, t, a);
              break e;
            case 14:
              o = jm(null, o, u, mn(u.type, t), a);
              break e;
          }
          throw Error(r(
            306,
            u,
            ""
          ));
        }
        return o;
      case 0:
        return u = o.type, f = o.pendingProps, f = o.elementType === u ? f : mn(u, f), rc(t, o, u, f, a);
      case 1:
        return u = o.type, f = o.pendingProps, f = o.elementType === u ? f : mn(u, f), Rm(t, o, u, f, a);
      case 3:
        e: {
          if (Mm(o), t === null) throw Error(r(387));
          u = o.pendingProps, h = o.memoizedState, f = h.element, qp(t, o), Cl(o, u, null, a);
          var S = o.memoizedState;
          if (u = S.element, h.isDehydrated) if (h = { element: u, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, o.updateQueue.baseState = h, o.memoizedState = h, o.flags & 256) {
            f = ai(Error(r(423)), o), o = Lm(t, o, u, a, f);
            break e;
          } else if (u !== f) {
            f = ai(Error(r(424)), o), o = Lm(t, o, u, a, f);
            break e;
          } else for (Ut = br(o.stateNode.containerInfo.firstChild), Vt = o, Je = !0, pn = null, a = Xp(o, null, u, a), o.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (ti(), u === f) {
              o = qn(t, o, a);
              break e;
            }
            kt(t, o, u, a);
          }
          o = o.child;
        }
        return o;
      case 5:
        return em(o), t === null && Ou(o), u = o.type, f = o.pendingProps, h = t !== null ? t.memoizedProps : null, S = f.children, Su(u, f) ? S = null : h !== null && Su(u, h) && (o.flags |= 32), Tm(t, o), kt(t, o, S, a), o.child;
      case 6:
        return t === null && Ou(o), null;
      case 13:
        return Im(t, o, a);
      case 4:
        return zu(o, o.stateNode.containerInfo), u = o.pendingProps, t === null ? o.child = ni(o, null, u, a) : kt(t, o, u, a), o.child;
      case 11:
        return u = o.type, f = o.pendingProps, f = o.elementType === u ? f : mn(u, f), Pm(t, o, u, f, a);
      case 7:
        return kt(t, o, o.pendingProps, a), o.child;
      case 8:
        return kt(t, o, o.pendingProps.children, a), o.child;
      case 12:
        return kt(t, o, o.pendingProps.children, a), o.child;
      case 10:
        e: {
          if (u = o.type._context, f = o.pendingProps, h = o.memoizedProps, S = f.value, Ve(Dl, u._currentValue), u._currentValue = S, h !== null) if (fn(h.value, S)) {
            if (h.children === f.children && !jt.current) {
              o = qn(t, o, a);
              break e;
            }
          } else for (h = o.child, h !== null && (h.return = o); h !== null; ) {
            var N = h.dependencies;
            if (N !== null) {
              S = h.child;
              for (var j = N.firstContext; j !== null; ) {
                if (j.context === u) {
                  if (h.tag === 1) {
                    j = Gn(-1, a & -a), j.tag = 2;
                    var I = h.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var Q = I.pending;
                      Q === null ? j.next = j : (j.next = Q.next, Q.next = j), I.pending = j;
                    }
                  }
                  h.lanes |= a, j = h.alternate, j !== null && (j.lanes |= a), Iu(
                    h.return,
                    a,
                    o
                  ), N.lanes |= a;
                  break;
                }
                j = j.next;
              }
            } else if (h.tag === 10) S = h.type === o.type ? null : h.child;
            else if (h.tag === 18) {
              if (S = h.return, S === null) throw Error(r(341));
              S.lanes |= a, N = S.alternate, N !== null && (N.lanes |= a), Iu(S, a, o), S = h.sibling;
            } else S = h.child;
            if (S !== null) S.return = h;
            else for (S = h; S !== null; ) {
              if (S === o) {
                S = null;
                break;
              }
              if (h = S.sibling, h !== null) {
                h.return = S.return, S = h;
                break;
              }
              S = S.return;
            }
            h = S;
          }
          kt(t, o, f.children, a), o = o.child;
        }
        return o;
      case 9:
        return f = o.type, u = o.pendingProps.children, oi(o, a), f = nn(f), u = u(f), o.flags |= 1, kt(t, o, u, a), o.child;
      case 14:
        return u = o.type, f = mn(u, o.pendingProps), f = mn(u.type, f), jm(t, o, u, f, a);
      case 15:
        return Am(t, o, o.type, o.pendingProps, a);
      case 17:
        return u = o.type, f = o.pendingProps, f = o.elementType === u ? f : mn(u, f), jl(t, o), o.tag = 1, At(u) ? (t = !0, pl(o)) : t = !1, oi(o, a), Em(o, u, f), ec(o, u, f, a), oc(null, o, u, !0, t, a);
      case 19:
        return Wm(t, o, a);
      case 22:
        return Om(t, o, a);
    }
    throw Error(r(156, o.tag));
  };
  function ch(t, o) {
    return Hf(t, o);
  }
  function Hx(t, o, a, u) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = o, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function an(t, o, a, u) {
    return new Hx(t, o, a, u);
  }
  function Sc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Vx(t) {
    if (typeof t == "function") return Sc(t) ? 1 : 0;
    if (t != null) {
      if (t = t.$$typeof, t === Y) return 11;
      if (t === ae) return 14;
    }
    return 2;
  }
  function Mr(t, o) {
    var a = t.alternate;
    return a === null ? (a = an(t.tag, o, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = o, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 14680064, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, o = t.dependencies, a.dependencies = o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a;
  }
  function $l(t, o, a, u, f, h) {
    var S = 2;
    if (u = t, typeof t == "function") Sc(t) && (S = 1);
    else if (typeof t == "string") S = 5;
    else e: switch (t) {
      case W:
        return yo(a.children, f, h, o);
      case U:
        S = 8, f |= 8;
        break;
      case $:
        return t = an(12, a, o, f | 2), t.elementType = $, t.lanes = h, t;
      case te:
        return t = an(13, a, o, f), t.elementType = te, t.lanes = h, t;
      case re:
        return t = an(19, a, o, f), t.elementType = re, t.lanes = h, t;
      case z:
        return Hl(a, f, h, o);
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case H:
            S = 10;
            break e;
          case ne:
            S = 9;
            break e;
          case Y:
            S = 11;
            break e;
          case ae:
            S = 14;
            break e;
          case le:
            S = 16, u = null;
            break e;
        }
        throw Error(r(130, t == null ? t : typeof t, ""));
    }
    return o = an(S, a, o, f), o.elementType = t, o.type = u, o.lanes = h, o;
  }
  function yo(t, o, a, u) {
    return t = an(7, t, u, o), t.lanes = a, t;
  }
  function Hl(t, o, a, u) {
    return t = an(22, t, u, o), t.elementType = z, t.lanes = a, t.stateNode = { isHidden: !1 }, t;
  }
  function bc(t, o, a) {
    return t = an(6, t, null, o), t.lanes = a, t;
  }
  function Fc(t, o, a) {
    return o = an(4, t.children !== null ? t.children : [], t.key, o), o.lanes = a, o.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, o;
  }
  function Ux(t, o, a, u, f) {
    this.tag = o, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zs(0), this.expirationTimes = Zs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zs(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function kc(t, o, a, u, f, h, S, N, j) {
    return t = new Ux(t, o, a, N, j), o === 1 ? (o = 1, h === !0 && (o |= 8)) : o = 0, h = an(3, null, null, o), t.current = h, h.stateNode = t, h.memoizedState = { element: u, isDehydrated: a, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wu(h), t;
  }
  function Yx(t, o, a) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: B, key: u == null ? null : "" + u, children: t, containerInfo: o, implementation: a };
  }
  function dh(t) {
    if (!t) return kr;
    t = t._reactInternals;
    e: {
      if (io(t) !== t || t.tag !== 1) throw Error(r(170));
      var o = t;
      do {
        switch (o.tag) {
          case 3:
            o = o.stateNode.context;
            break e;
          case 1:
            if (At(o.type)) {
              o = o.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        o = o.return;
      } while (o !== null);
      throw Error(r(171));
    }
    if (t.tag === 1) {
      var a = t.type;
      if (At(a)) return Bp(t, a, o);
    }
    return o;
  }
  function fh(t, o, a, u, f, h, S, N, j) {
    return t = kc(a, u, !0, t, f, h, S, N, j), t.context = dh(null), a = t.current, u = Nt(), f = Tr(a), h = Gn(u, f), h.callback = o ?? null, Pr(a, h, f), t.current.lanes = f, Ii(t, f, u), Rt(t, u), t;
  }
  function Vl(t, o, a, u) {
    var f = o.current, h = Nt(), S = Tr(f);
    return a = dh(a), o.context === null ? o.context = a : o.pendingContext = a, o = Gn(h, S), o.payload = { element: t }, u = u === void 0 ? null : u, u !== null && (o.callback = u), t = Pr(f, o, S), t !== null && (gn(t, f, S, h), xl(t, f, S)), S;
  }
  function Ul(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function ph(t, o) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < o ? a : o;
    }
  }
  function Nc(t, o) {
    ph(t, o), (t = t.alternate) && ph(t, o);
  }
  function Kx() {
    return null;
  }
  var mh = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function _c(t) {
    this._internalRoot = t;
  }
  Yl.prototype.render = _c.prototype.render = function(t) {
    var o = this._internalRoot;
    if (o === null) throw Error(r(409));
    Vl(t, o, null, null);
  }, Yl.prototype.unmount = _c.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var o = t.containerInfo;
      ho(function() {
        Vl(null, t, null, null);
      }), o[Un] = null;
    }
  };
  function Yl(t) {
    this._internalRoot = t;
  }
  Yl.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var o = qf();
      t = { blockedOn: null, target: t, priority: o };
      for (var a = 0; a < Cr.length && o !== 0 && o < Cr[a].priority; a++) ;
      Cr.splice(a, 0, t), a === 0 && ep(t);
    }
  };
  function Pc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function Kl(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function hh() {
  }
  function Qx(t, o, a, u, f) {
    if (f) {
      if (typeof u == "function") {
        var h = u;
        u = function() {
          var I = Ul(S);
          h.call(I);
        };
      }
      var S = fh(o, u, t, 0, null, !1, !1, "", hh);
      return t._reactRootContainer = S, t[Un] = S.current, Ji(t.nodeType === 8 ? t.parentNode : t), ho(), S;
    }
    for (; f = t.lastChild; ) t.removeChild(f);
    if (typeof u == "function") {
      var N = u;
      u = function() {
        var I = Ul(j);
        N.call(I);
      };
    }
    var j = kc(t, 0, !1, null, null, !1, !1, "", hh);
    return t._reactRootContainer = j, t[Un] = j.current, Ji(t.nodeType === 8 ? t.parentNode : t), ho(function() {
      Vl(o, j, a, u);
    }), j;
  }
  function Ql(t, o, a, u, f) {
    var h = a._reactRootContainer;
    if (h) {
      var S = h;
      if (typeof f == "function") {
        var N = f;
        f = function() {
          var j = Ul(S);
          N.call(j);
        };
      }
      Vl(o, S, t, f);
    } else S = Qx(a, o, t, f, u);
    return Ul(S);
  }
  Xf = function(t) {
    switch (t.tag) {
      case 3:
        var o = t.stateNode;
        if (o.current.memoizedState.isDehydrated) {
          var a = Li(o.pendingLanes);
          a !== 0 && (eu(o, a | 1), Rt(o, ot()), !(Oe & 6) && (ui = ot() + 500, Nr()));
        }
        break;
      case 13:
        ho(function() {
          var u = Xn(t, 1);
          if (u !== null) {
            var f = Nt();
            gn(u, t, 1, f);
          }
        }), Nc(t, 1);
    }
  }, tu = function(t) {
    if (t.tag === 13) {
      var o = Xn(t, 134217728);
      if (o !== null) {
        var a = Nt();
        gn(o, t, 134217728, a);
      }
      Nc(t, 134217728);
    }
  }, Gf = function(t) {
    if (t.tag === 13) {
      var o = Tr(t), a = Xn(t, o);
      if (a !== null) {
        var u = Nt();
        gn(a, t, o, u);
      }
      Nc(t, o);
    }
  }, qf = function() {
    return Ie;
  }, Jf = function(t, o) {
    var a = Ie;
    try {
      return Ie = t, o();
    } finally {
      Ie = a;
    }
  }, $e = function(t, o, a) {
    switch (o) {
      case "input":
        if ($t(t, a), o = a.name, a.type === "radio" && o != null) {
          for (a = t; a.parentNode; ) a = a.parentNode;
          for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + o) + '][type="radio"]'), o = 0; o < a.length; o++) {
            var u = a[o];
            if (u !== t && u.form === t.form) {
              var f = dl(u);
              if (!f) throw Error(r(90));
              je(u), $t(u, f);
            }
          }
        }
        break;
      case "textarea":
        Io(t, a);
        break;
      case "select":
        o = a.value, o != null && Fn(t, !!a.multiple, o, !1);
    }
  }, cn = xc, vt = ho;
  var Xx = { usingClientEntryPoint: !1, Events: [ta, Go, dl, at, He, xc] }, ha = { findFiberByHostInstance: ao, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Gx = { bundleType: ha.bundleType, version: ha.version, rendererPackageName: ha.rendererPackageName, rendererConfig: ha.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: P.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return t = zf(t), t === null ? null : t.stateNode;
  }, findFiberByHostInstance: ha.findFiberByHostInstance || Kx, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xl.isDisabled && Xl.supportsFiber) try {
      Ya = Xl.inject(Gx), Nn = Xl;
    } catch {
    }
  }
  return Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xx, Mt.createPortal = function(t, o) {
    var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Pc(o)) throw Error(r(200));
    return Yx(t, o, null, a);
  }, Mt.createRoot = function(t, o) {
    if (!Pc(t)) throw Error(r(299));
    var a = !1, u = "", f = mh;
    return o != null && (o.unstable_strictMode === !0 && (a = !0), o.identifierPrefix !== void 0 && (u = o.identifierPrefix), o.onRecoverableError !== void 0 && (f = o.onRecoverableError)), o = kc(t, 1, !1, null, null, a, !1, u, f), t[Un] = o.current, Ji(t.nodeType === 8 ? t.parentNode : t), new _c(o);
  }, Mt.findDOMNode = function(t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var o = t._reactInternals;
    if (o === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = zf(o), t = t === null ? null : t.stateNode, t;
  }, Mt.flushSync = function(t) {
    return ho(t);
  }, Mt.hydrate = function(t, o, a) {
    if (!Kl(o)) throw Error(r(200));
    return Ql(null, t, o, !0, a);
  }, Mt.hydrateRoot = function(t, o, a) {
    if (!Pc(t)) throw Error(r(405));
    var u = a != null && a.hydratedSources || null, f = !1, h = "", S = mh;
    if (a != null && (a.unstable_strictMode === !0 && (f = !0), a.identifierPrefix !== void 0 && (h = a.identifierPrefix), a.onRecoverableError !== void 0 && (S = a.onRecoverableError)), o = fh(o, null, t, 1, a ?? null, f, !1, h, S), t[Un] = o.current, Ji(t), u) for (t = 0; t < u.length; t++) a = u[t], f = a._getVersion, f = f(a._source), o.mutableSourceEagerHydrationData == null ? o.mutableSourceEagerHydrationData = [a, f] : o.mutableSourceEagerHydrationData.push(
      a,
      f
    );
    return new Yl(o);
  }, Mt.render = function(t, o, a) {
    if (!Kl(o)) throw Error(r(200));
    return Ql(null, t, o, !1, a);
  }, Mt.unmountComponentAtNode = function(t) {
    if (!Kl(t)) throw Error(r(40));
    return t._reactRootContainer ? (ho(function() {
      Ql(null, null, t, !1, function() {
        t._reactRootContainer = null, t[Un] = null;
      });
    }), !0) : !1;
  }, Mt.unstable_batchedUpdates = xc, Mt.unstable_renderSubtreeIntoContainer = function(t, o, a, u) {
    if (!Kl(a)) throw Error(r(200));
    if (t == null || t._reactInternals === void 0) throw Error(r(38));
    return Ql(t, o, a, !1, u);
  }, Mt.version = "18.3.1-next-f1338f8080-20240426", Mt;
}
function Wv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wv);
    } catch (e) {
      console.error(e);
    }
}
Wv(), Bv.exports = a1();
var To = Bv.exports;
const l1 = /* @__PURE__ */ Mv(To);
var xh = To;
od.createRoot = xh.createRoot, od.hydrateRoot = xh.hydrateRoot;
function s1(e, n) {
  typeof e == "function" ? e(n) : e != null && (e.current = n);
}
function zv(...e) {
  return (n) => e.forEach((r) => s1(r, n));
}
function Me(...e) {
  return w.useCallback(zv(...e), e);
}
var Hr = w.forwardRef((e, n) => {
  const { children: r, ...i } = e, l = w.Children.toArray(r), s = l.find(c1);
  if (s) {
    const c = s.props.children, d = l.map((p) => p === s ? w.Children.count(c) > 1 ? w.Children.only(null) : w.isValidElement(c) ? c.props.children : null : p);
    return /* @__PURE__ */ m.jsx(id, { ...i, ref: n, children: w.isValidElement(c) ? w.cloneElement(c, void 0, d) : null });
  }
  return /* @__PURE__ */ m.jsx(id, { ...i, ref: n, children: r });
});
Hr.displayName = "Slot";
var id = w.forwardRef((e, n) => {
  const { children: r, ...i } = e;
  if (w.isValidElement(r)) {
    const l = f1(r);
    return w.cloneElement(r, {
      ...d1(i, r.props),
      // @ts-ignore
      ref: n ? zv(n, l) : l
    });
  }
  return w.Children.count(r) > 1 ? w.Children.only(null) : null;
});
id.displayName = "SlotClone";
var u1 = ({ children: e }) => /* @__PURE__ */ m.jsx(m.Fragment, { children: e });
function c1(e) {
  return w.isValidElement(e) && e.type === u1;
}
function d1(e, n) {
  const r = { ...n };
  for (const i in n) {
    const l = e[i], s = n[i];
    /^on[A-Z]/.test(i) ? l && s ? r[i] = (...d) => {
      s(...d), l(...d);
    } : l && (r[i] = l) : i === "style" ? r[i] = { ...l, ...s } : i === "className" && (r[i] = [l, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function f1(e) {
  var i, l;
  let n = (i = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : i.get, r = n && "isReactWarning" in n && n.isReactWarning;
  return r ? e.ref : (n = (l = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : l.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function $v(e) {
  var n, r, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (n = 0; n < e.length; n++) e[n] && (r = $v(e[n])) && (i && (i += " "), i += r);
  else for (n in e) e[n] && (i && (i += " "), i += n);
  return i;
}
function p1() {
  for (var e, n, r = 0, i = ""; r < arguments.length; ) (e = arguments[r++]) && (n = $v(e)) && (i && (i += " "), i += n);
  return i;
}
const Ch = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Eh = p1, Hv = (e, n) => (r) => {
  var i;
  if ((n == null ? void 0 : n.variants) == null) return Eh(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: l, defaultVariants: s } = n, c = Object.keys(l).map((v) => {
    const g = r == null ? void 0 : r[v], D = s == null ? void 0 : s[v];
    if (g === null) return null;
    const y = Ch(g) || Ch(D);
    return l[v][y];
  }), d = r && Object.entries(r).reduce((v, g) => {
    let [D, y] = g;
    return y === void 0 || (v[D] = y), v;
  }, {}), p = n == null || (i = n.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((v, g) => {
    let { class: D, className: y, ...x } = g;
    return Object.entries(x).every((C) => {
      let [E, b] = C;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...d
      }[E]) : {
        ...s,
        ...d
      }[E] === b;
    }) ? [
      ...v,
      D,
      y
    ] : v;
  }, []);
  return Eh(e, c, p, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function Vv(e) {
  var n, r, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var l = e.length;
    for (n = 0; n < l; n++) e[n] && (r = Vv(e[n])) && (i && (i += " "), i += r);
  } else for (r in e) e[r] && (i && (i += " "), i += r);
  return i;
}
function m1() {
  for (var e, n, r = 0, i = "", l = arguments.length; r < l; r++) (e = arguments[r]) && (n = Vv(e)) && (i && (i += " "), i += n);
  return i;
}
const Od = "-", h1 = (e) => {
  const n = g1(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: i
  } = e;
  return {
    getClassGroupId: (c) => {
      const d = c.split(Od);
      return d[0] === "" && d.length !== 1 && d.shift(), Uv(d, n) || v1(c);
    },
    getConflictingClassGroupIds: (c, d) => {
      const p = r[c] || [];
      return d && i[c] ? [...p, ...i[c]] : p;
    }
  };
}, Uv = (e, n) => {
  var c;
  if (e.length === 0)
    return n.classGroupId;
  const r = e[0], i = n.nextPart.get(r), l = i ? Uv(e.slice(1), i) : void 0;
  if (l)
    return l;
  if (n.validators.length === 0)
    return;
  const s = e.join(Od);
  return (c = n.validators.find(({
    validator: d
  }) => d(s))) == null ? void 0 : c.classGroupId;
}, Sh = /^\[(.+)\]$/, v1 = (e) => {
  if (Sh.test(e)) {
    const n = Sh.exec(e)[1], r = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, g1 = (e) => {
  const {
    theme: n,
    prefix: r
  } = e, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return D1(Object.entries(e.classGroups), r).forEach(([s, c]) => {
    ad(c, i, s, n);
  }), i;
}, ad = (e, n, r, i) => {
  e.forEach((l) => {
    if (typeof l == "string") {
      const s = l === "" ? n : bh(n, l);
      s.classGroupId = r;
      return;
    }
    if (typeof l == "function") {
      if (y1(l)) {
        ad(l(i), n, r, i);
        return;
      }
      n.validators.push({
        validator: l,
        classGroupId: r
      });
      return;
    }
    Object.entries(l).forEach(([s, c]) => {
      ad(c, bh(n, s), r, i);
    });
  });
}, bh = (e, n) => {
  let r = e;
  return n.split(Od).forEach((i) => {
    r.nextPart.has(i) || r.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(i);
  }), r;
}, y1 = (e) => e.isThemeGetter, D1 = (e, n) => n ? e.map(([r, i]) => {
  const l = i.map((s) => typeof s == "string" ? n + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([c, d]) => [n + c, d])) : s);
  return [r, l];
}) : e, w1 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  const l = (s, c) => {
    r.set(s, c), n++, n > e && (n = 0, i = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let c = r.get(s);
      if (c !== void 0)
        return c;
      if ((c = i.get(s)) !== void 0)
        return l(s, c), c;
    },
    set(s, c) {
      r.has(s) ? r.set(s, c) : l(s, c);
    }
  };
}, Yv = "!", x1 = (e) => {
  const {
    separator: n,
    experimentalParseClassName: r
  } = e, i = n.length === 1, l = n[0], s = n.length, c = (d) => {
    const p = [];
    let v = 0, g = 0, D;
    for (let b = 0; b < d.length; b++) {
      let F = d[b];
      if (v === 0) {
        if (F === l && (i || d.slice(b, b + s) === n)) {
          p.push(d.slice(g, b)), g = b + s;
          continue;
        }
        if (F === "/") {
          D = b;
          continue;
        }
      }
      F === "[" ? v++ : F === "]" && v--;
    }
    const y = p.length === 0 ? d : d.substring(g), x = y.startsWith(Yv), C = x ? y.substring(1) : y, E = D && D > g ? D - g : void 0;
    return {
      modifiers: p,
      hasImportantModifier: x,
      baseClassName: C,
      maybePostfixModifierPosition: E
    };
  };
  return r ? (d) => r({
    className: d,
    parseClassName: c
  }) : c;
}, C1 = (e) => {
  if (e.length <= 1)
    return e;
  const n = [];
  let r = [];
  return e.forEach((i) => {
    i[0] === "[" ? (n.push(...r.sort(), i), r = []) : r.push(i);
  }), n.push(...r.sort()), n;
}, E1 = (e) => ({
  cache: w1(e.cacheSize),
  parseClassName: x1(e),
  ...h1(e)
}), S1 = /\s+/, b1 = (e, n) => {
  const {
    parseClassName: r,
    getClassGroupId: i,
    getConflictingClassGroupIds: l
  } = n, s = [], c = e.trim().split(S1);
  let d = "";
  for (let p = c.length - 1; p >= 0; p -= 1) {
    const v = c[p], {
      modifiers: g,
      hasImportantModifier: D,
      baseClassName: y,
      maybePostfixModifierPosition: x
    } = r(v);
    let C = !!x, E = i(C ? y.substring(0, x) : y);
    if (!E) {
      if (!C) {
        d = v + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (E = i(y), !E) {
        d = v + (d.length > 0 ? " " + d : d);
        continue;
      }
      C = !1;
    }
    const b = C1(g).join(":"), F = D ? b + Yv : b, k = F + E;
    if (s.includes(k))
      continue;
    s.push(k);
    const _ = l(E, C);
    for (let P = 0; P < _.length; ++P) {
      const O = _[P];
      s.push(F + O);
    }
    d = v + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function F1() {
  let e = 0, n, r, i = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (r = Kv(n)) && (i && (i += " "), i += r);
  return i;
}
const Kv = (e) => {
  if (typeof e == "string")
    return e;
  let n, r = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (n = Kv(e[i])) && (r && (r += " "), r += n);
  return r;
};
function k1(e, ...n) {
  let r, i, l, s = c;
  function c(p) {
    const v = n.reduce((g, D) => D(g), e());
    return r = E1(v), i = r.cache.get, l = r.cache.set, s = d, d(p);
  }
  function d(p) {
    const v = i(p);
    if (v)
      return v;
    const g = b1(p, r);
    return l(p, g), g;
  }
  return function() {
    return s(F1.apply(null, arguments));
  };
}
const Xe = (e) => {
  const n = (r) => r[e] || [];
  return n.isThemeGetter = !0, n;
}, Qv = /^\[(?:([a-z-]+):)?(.+)\]$/i, N1 = /^\d+\/\d+$/, _1 = /* @__PURE__ */ new Set(["px", "full", "screen"]), P1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, j1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, A1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, O1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, T1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Zn = (e) => wi(e) || _1.has(e) || N1.test(e), Ir = (e) => Pi(e, "length", $1), wi = (e) => !!e && !Number.isNaN(Number(e)), Oc = (e) => Pi(e, "number", wi), ga = (e) => !!e && Number.isInteger(Number(e)), R1 = (e) => e.endsWith("%") && wi(e.slice(0, -1)), Fe = (e) => Qv.test(e), Br = (e) => P1.test(e), M1 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), L1 = (e) => Pi(e, M1, Xv), I1 = (e) => Pi(e, "position", Xv), B1 = /* @__PURE__ */ new Set(["image", "url"]), W1 = (e) => Pi(e, B1, V1), z1 = (e) => Pi(e, "", H1), ya = () => !0, Pi = (e, n, r) => {
  const i = Qv.exec(e);
  return i ? i[1] ? typeof n == "string" ? i[1] === n : n.has(i[1]) : r(i[2]) : !1;
}, $1 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  j1.test(e) && !A1.test(e)
), Xv = () => !1, H1 = (e) => O1.test(e), V1 = (e) => T1.test(e), U1 = () => {
  const e = Xe("colors"), n = Xe("spacing"), r = Xe("blur"), i = Xe("brightness"), l = Xe("borderColor"), s = Xe("borderRadius"), c = Xe("borderSpacing"), d = Xe("borderWidth"), p = Xe("contrast"), v = Xe("grayscale"), g = Xe("hueRotate"), D = Xe("invert"), y = Xe("gap"), x = Xe("gradientColorStops"), C = Xe("gradientColorStopPositions"), E = Xe("inset"), b = Xe("margin"), F = Xe("opacity"), k = Xe("padding"), _ = Xe("saturate"), P = Xe("scale"), O = Xe("sepia"), B = Xe("skew"), W = Xe("space"), U = Xe("translate"), $ = () => ["auto", "contain", "none"], H = () => ["auto", "hidden", "clip", "visible", "scroll"], ne = () => ["auto", Fe, n], Y = () => [Fe, n], te = () => ["", Zn, Ir], re = () => ["auto", wi, Fe], ae = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], le = () => ["solid", "dashed", "dotted", "double", "none"], z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], R = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], X = () => ["", "0", Fe], q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], A = () => [wi, Fe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ya],
      spacing: [Zn, Ir],
      blur: ["none", "", Br, Fe],
      brightness: A(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Br, Fe],
      borderSpacing: Y(),
      borderWidth: te(),
      contrast: A(),
      grayscale: X(),
      hueRotate: A(),
      invert: X(),
      gap: Y(),
      gradientColorStops: [e],
      gradientColorStopPositions: [R1, Ir],
      inset: ne(),
      margin: ne(),
      opacity: A(),
      padding: Y(),
      saturate: A(),
      scale: A(),
      sepia: X(),
      skew: A(),
      space: Y(),
      translate: Y()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Fe]
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
        columns: [Br]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": q()
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
        object: [...ae(), Fe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: $()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": $()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": $()
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
        inset: [E]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [E]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [E]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [E]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [E]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [E]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [E]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [E]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [E]
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
        z: ["auto", ga, Fe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ne()
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
        flex: ["1", "auto", "initial", "none", Fe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: X()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: X()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ga, Fe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ya]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ga, Fe]
        }, Fe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": re()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": re()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ya]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ga, Fe]
        }, Fe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": re()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": re()
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
        "auto-cols": ["auto", "min", "max", "fr", Fe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Fe]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [y]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [y]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [y]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...R()]
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
        content: ["normal", ...R(), "baseline"]
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
        "place-content": [...R(), "baseline"]
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
        p: [k]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [k]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [k]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [k]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [k]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [k]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [k]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [k]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [k]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [W]
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
        "space-y": [W]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Fe, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Fe, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Fe, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [Br]
        }, Br]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Fe, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Fe, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Fe, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Fe, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Br, Ir]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Oc]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ya]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Fe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", wi, Oc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Zn, Fe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Fe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Fe]
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
        "placeholder-opacity": [F]
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
        "text-opacity": [F]
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
        decoration: [...le(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Zn, Ir]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Zn, Fe]
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
        indent: Y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Fe]
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
        content: ["none", Fe]
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
        "bg-opacity": [F]
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
        bg: [...ae(), I1]
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
        bg: ["auto", "cover", "contain", L1]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, W1]
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
        from: [C]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [C]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [x]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [x]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [x]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [d]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [d]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [d]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [d]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [d]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [d]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [d]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [d]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [d]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [F]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...le(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [d]
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
        "divide-y": [d]
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
        "divide-opacity": [F]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: le()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [l]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [l]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [l]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [l]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [l]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [l]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [l]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [l]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...le()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Zn, Fe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Zn, Ir]
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
        ring: te()
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
        "ring-opacity": [F]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Zn, Ir]
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
        shadow: ["", "inner", "none", Br, z1]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ya]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [F]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...z(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": z()
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
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [i]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [p]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Br, Fe]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [v]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [D]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [O]
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
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [i]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [p]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [v]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [D]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [F]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [O]
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
        "border-spacing": [c]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [c]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [c]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Fe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: A()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Fe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: A()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Fe]
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
        scale: [P]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [P]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [P]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ga, Fe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [U]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [U]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [B]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [B]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Fe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Fe]
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
        "scroll-m": Y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Y()
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
        "will-change": ["auto", "scroll", "contents", "transform", Fe]
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
        stroke: [Zn, Ir, Oc]
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
}, Y1 = /* @__PURE__ */ k1(U1);
function ke(...e) {
  return Y1(m1(e));
}
const ld = Hv(
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
), qe = w.forwardRef(({ className: e, variant: n, size: r, asChild: i = !1, ...l }, s) => {
  const c = i ? Hr : "button";
  return /* @__PURE__ */ m.jsx(
    c,
    {
      className: ke(ld({ variant: n, size: r, className: e })),
      ref: s,
      ...l
    }
  );
});
qe.displayName = "Button";
function Gv(e) {
  return /* @__PURE__ */ m.jsxs(
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
        /* @__PURE__ */ m.jsx("path", { d: "M8 2v4" }),
        /* @__PURE__ */ m.jsx("path", { d: "M16 2v4" }),
        /* @__PURE__ */ m.jsx("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }),
        /* @__PURE__ */ m.jsx("path", { d: "M3 10h18" }),
        /* @__PURE__ */ m.jsx("path", { d: "M8 14h.01" }),
        /* @__PURE__ */ m.jsx("path", { d: "M12 14h.01" }),
        /* @__PURE__ */ m.jsx("path", { d: "M16 14h.01" }),
        /* @__PURE__ */ m.jsx("path", { d: "M8 18h.01" }),
        /* @__PURE__ */ m.jsx("path", { d: "M12 18h.01" }),
        /* @__PURE__ */ m.jsx("path", { d: "M16 18h.01" })
      ]
    }
  );
}
function bo(e) {
  return /* @__PURE__ */ m.jsx(
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
      children: /* @__PURE__ */ m.jsx("path", { d: "M20 6 9 17l-5-5" })
    }
  );
}
function sd(e) {
  return /* @__PURE__ */ m.jsxs(
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
        /* @__PURE__ */ m.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ m.jsx("polyline", { points: "12 6 12 12 16 14" })
      ]
    }
  );
}
function K1(e) {
  return /* @__PURE__ */ m.jsxs(
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
        /* @__PURE__ */ m.jsx(
          "path",
          {
            d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
          }
        ),
        /* @__PURE__ */ m.jsx("path", { d: "m14.5 12.5 2-2" }),
        /* @__PURE__ */ m.jsx("path", { d: "m11.5 9.5 2-2" }),
        /* @__PURE__ */ m.jsx("path", { d: "m8.5 6.5 2-2" }),
        /* @__PURE__ */ m.jsx("path", { d: "m17.5 15.5 2-2" })
      ]
    }
  );
}
function Q1(e) {
  return /* @__PURE__ */ m.jsxs(
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
        /* @__PURE__ */ m.jsx("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
        /* @__PURE__ */ m.jsx("circle", { cx: "12", cy: "7", r: "4" })
      ]
    }
  );
}
function qv(e) {
  return /* @__PURE__ */ m.jsxs(
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
        /* @__PURE__ */ m.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
        /* @__PURE__ */ m.jsx("circle", { cx: "9", cy: "7", r: "4" }),
        /* @__PURE__ */ m.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
        /* @__PURE__ */ m.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
      ]
    }
  );
}
function Fa(e) {
  return /* @__PURE__ */ m.jsxs(
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
        /* @__PURE__ */ m.jsx("path", { d: "M5 12h18" }),
        /* @__PURE__ */ m.jsx("path", { d: "M18 5l7 7-7 7" })
      ]
    }
  );
}
function hi(e) {
  return /* @__PURE__ */ m.jsxs(
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
        /* @__PURE__ */ m.jsx("path", { d: "M25 12H7" }),
        /* @__PURE__ */ m.jsx("path", { d: "M12 5L5 12l7 7" })
      ]
    }
  );
}
function X1(e) {
  return /* @__PURE__ */ m.jsx(
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
      children: /* @__PURE__ */ m.jsx("path", { d: "M5 12h20" })
    }
  );
}
function G1(e) {
  return /* @__PURE__ */ m.jsx(
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
      children: /* @__PURE__ */ m.jsx("path", { d: "M12 5v14M5 12h14" })
    }
  );
}
function q1(e) {
  return /* @__PURE__ */ m.jsxs(
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
        /* @__PURE__ */ m.jsx("path", { d: "M12 8v8M8 12l4-4 4 4" }),
        /* @__PURE__ */ m.jsx("path", { d: "M12 16V8" })
      ]
    }
  );
}
function Te(e) {
  const n = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && n === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || n === "[object Number]" || typeof e == "string" || n === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Gt(e, n) {
  return e instanceof Date ? new e.constructor(n) : new Date(n);
}
function _t(e, n) {
  const r = Te(e);
  return isNaN(n) ? Gt(e, NaN) : (n && r.setDate(r.getDate() + n), r);
}
function Dn(e, n) {
  const r = Te(e);
  if (isNaN(n)) return Gt(e, NaN);
  if (!n)
    return r;
  const i = r.getDate(), l = Gt(e, r.getTime());
  l.setMonth(r.getMonth() + n + 1, 0);
  const s = l.getDate();
  return i >= s ? l : (r.setFullYear(
    l.getFullYear(),
    l.getMonth(),
    i
  ), r);
}
const Td = 6048e5, J1 = 864e5;
let Z1 = {};
function Oa() {
  return Z1;
}
function Ln(e, n) {
  var d, p, v, g;
  const r = Oa(), i = (n == null ? void 0 : n.weekStartsOn) ?? ((p = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((g = (v = r.locale) == null ? void 0 : v.options) == null ? void 0 : g.weekStartsOn) ?? 0, l = Te(e), s = l.getDay(), c = (s < i ? 7 : 0) + s - i;
  return l.setDate(l.getDate() - c), l.setHours(0, 0, 0, 0), l;
}
function _o(e) {
  return Ln(e, { weekStartsOn: 1 });
}
function Jv(e) {
  const n = Te(e), r = n.getFullYear(), i = Gt(e, 0);
  i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const l = _o(i), s = Gt(e, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const c = _o(s);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function Ei(e) {
  const n = Te(e);
  return n.setHours(0, 0, 0, 0), n;
}
function ms(e) {
  const n = Te(e), r = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return r.setUTCFullYear(n.getFullYear()), +e - +r;
}
function Rn(e, n) {
  const r = Ei(e), i = Ei(n), l = +r - ms(r), s = +i - ms(i);
  return Math.round((l - s) / J1);
}
function eC(e) {
  const n = Jv(e), r = Gt(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), _o(r);
}
function ud(e, n) {
  const r = n * 7;
  return _t(e, r);
}
function tC(e, n) {
  return Dn(e, n * 12);
}
function nC(e) {
  let n;
  return e.forEach(function(r) {
    const i = Te(r);
    (n === void 0 || n < i || isNaN(Number(i))) && (n = i);
  }), n || /* @__PURE__ */ new Date(NaN);
}
function rC(e) {
  let n;
  return e.forEach((r) => {
    const i = Te(r);
    (!n || n > i || isNaN(+i)) && (n = i);
  }), n || /* @__PURE__ */ new Date(NaN);
}
function It(e, n) {
  const r = Ei(e), i = Ei(n);
  return +r == +i;
}
function Rd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function oC(e) {
  if (!Rd(e) && typeof e != "number")
    return !1;
  const n = Te(e);
  return !isNaN(Number(n));
}
function _a(e, n) {
  const r = Te(e), i = Te(n), l = r.getFullYear() - i.getFullYear(), s = r.getMonth() - i.getMonth();
  return l * 12 + s;
}
function iC(e, n, r) {
  const i = Ln(e, r), l = Ln(n, r), s = +i - ms(i), c = +l - ms(l);
  return Math.round((s - c) / Td);
}
function Md(e) {
  const n = Te(e), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Bt(e) {
  const n = Te(e);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Zv(e) {
  const n = Te(e), r = Gt(e, 0);
  return r.setFullYear(n.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function Ld(e, n) {
  var d, p, v, g;
  const r = Oa(), i = (n == null ? void 0 : n.weekStartsOn) ?? ((p = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((g = (v = r.locale) == null ? void 0 : v.options) == null ? void 0 : g.weekStartsOn) ?? 0, l = Te(e), s = l.getDay(), c = (s < i ? -7 : 0) + 6 - (s - i);
  return l.setDate(l.getDate() + c), l.setHours(23, 59, 59, 999), l;
}
function eg(e) {
  return Ld(e, { weekStartsOn: 1 });
}
const aC = {
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
}, lC = (e, n, r) => {
  let i;
  const l = aC[e];
  return typeof l == "string" ? i = l : n === 1 ? i = l.one : i = l.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + i : i + " ago" : i;
};
function Tc(e) {
  return (n = {}) => {
    const r = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const sC = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, uC = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, cC = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, dC = {
  date: Tc({
    formats: sC,
    defaultWidth: "full"
  }),
  time: Tc({
    formats: uC,
    defaultWidth: "full"
  }),
  dateTime: Tc({
    formats: cC,
    defaultWidth: "full"
  })
}, fC = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, pC = (e, n, r, i) => fC[e];
function Da(e) {
  return (n, r) => {
    const i = r != null && r.context ? String(r.context) : "standalone";
    let l;
    if (i === "formatting" && e.formattingValues) {
      const c = e.defaultFormattingWidth || e.defaultWidth, d = r != null && r.width ? String(r.width) : c;
      l = e.formattingValues[d] || e.formattingValues[c];
    } else {
      const c = e.defaultWidth, d = r != null && r.width ? String(r.width) : e.defaultWidth;
      l = e.values[d] || e.values[c];
    }
    const s = e.argumentCallback ? e.argumentCallback(n) : n;
    return l[s];
  };
}
const mC = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, hC = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, vC = {
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
}, gC = {
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
}, yC = {
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
}, DC = {
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
}, wC = (e, n) => {
  const r = Number(e), i = r % 100;
  if (i > 20 || i < 10)
    switch (i % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, xC = {
  ordinalNumber: wC,
  era: Da({
    values: mC,
    defaultWidth: "wide"
  }),
  quarter: Da({
    values: hC,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Da({
    values: vC,
    defaultWidth: "wide"
  }),
  day: Da({
    values: gC,
    defaultWidth: "wide"
  }),
  dayPeriod: Da({
    values: yC,
    defaultWidth: "wide",
    formattingValues: DC,
    defaultFormattingWidth: "wide"
  })
};
function wa(e) {
  return (n, r = {}) => {
    const i = r.width, l = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth], s = n.match(l);
    if (!s)
      return null;
    const c = s[0], d = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth], p = Array.isArray(d) ? EC(d, (D) => D.test(c)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      CC(d, (D) => D.test(c))
    );
    let v;
    v = e.valueCallback ? e.valueCallback(p) : p, v = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(v)
    ) : v;
    const g = n.slice(c.length);
    return { value: v, rest: g };
  };
}
function CC(e, n) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && n(e[r]))
      return r;
}
function EC(e, n) {
  for (let r = 0; r < e.length; r++)
    if (n(e[r]))
      return r;
}
function SC(e) {
  return (n, r = {}) => {
    const i = n.match(e.matchPattern);
    if (!i) return null;
    const l = i[0], s = n.match(e.parsePattern);
    if (!s) return null;
    let c = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    c = r.valueCallback ? r.valueCallback(c) : c;
    const d = n.slice(l.length);
    return { value: c, rest: d };
  };
}
const bC = /^(\d+)(th|st|nd|rd)?/i, FC = /\d+/i, kC = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, NC = {
  any: [/^b/i, /^(a|c)/i]
}, _C = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, PC = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, jC = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, AC = {
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
}, OC = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, TC = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, RC = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, MC = {
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
}, LC = {
  ordinalNumber: SC({
    matchPattern: bC,
    parsePattern: FC,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: wa({
    matchPatterns: kC,
    defaultMatchWidth: "wide",
    parsePatterns: NC,
    defaultParseWidth: "any"
  }),
  quarter: wa({
    matchPatterns: _C,
    defaultMatchWidth: "wide",
    parsePatterns: PC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: wa({
    matchPatterns: jC,
    defaultMatchWidth: "wide",
    parsePatterns: AC,
    defaultParseWidth: "any"
  }),
  day: wa({
    matchPatterns: OC,
    defaultMatchWidth: "wide",
    parsePatterns: TC,
    defaultParseWidth: "any"
  }),
  dayPeriod: wa({
    matchPatterns: RC,
    defaultMatchWidth: "any",
    parsePatterns: MC,
    defaultParseWidth: "any"
  })
}, tg = {
  code: "en-US",
  formatDistance: lC,
  formatLong: dC,
  formatRelative: pC,
  localize: xC,
  match: LC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function IC(e) {
  const n = Te(e);
  return Rn(n, Zv(n)) + 1;
}
function ng(e) {
  const n = Te(e), r = +_o(n) - +eC(n);
  return Math.round(r / Td) + 1;
}
function rg(e, n) {
  var g, D, y, x;
  const r = Te(e), i = r.getFullYear(), l = Oa(), s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((D = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : D.firstWeekContainsDate) ?? l.firstWeekContainsDate ?? ((x = (y = l.locale) == null ? void 0 : y.options) == null ? void 0 : x.firstWeekContainsDate) ?? 1, c = Gt(e, 0);
  c.setFullYear(i + 1, 0, s), c.setHours(0, 0, 0, 0);
  const d = Ln(c, n), p = Gt(e, 0);
  p.setFullYear(i, 0, s), p.setHours(0, 0, 0, 0);
  const v = Ln(p, n);
  return r.getTime() >= d.getTime() ? i + 1 : r.getTime() >= v.getTime() ? i : i - 1;
}
function BC(e, n) {
  var d, p, v, g;
  const r = Oa(), i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (v = r.locale) == null ? void 0 : v.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, l = rg(e, n), s = Gt(e, 0);
  return s.setFullYear(l, 0, i), s.setHours(0, 0, 0, 0), Ln(s, n);
}
function og(e, n) {
  const r = Te(e), i = +Ln(r, n) - +BC(r, n);
  return Math.round(i / Td) + 1;
}
function Be(e, n) {
  const r = e < 0 ? "-" : "", i = Math.abs(e).toString().padStart(n, "0");
  return r + i;
}
const Wr = {
  // Year
  y(e, n) {
    const r = e.getFullYear(), i = r > 0 ? r : 1 - r;
    return Be(n === "yy" ? i % 100 : i, n.length);
  },
  // Month
  M(e, n) {
    const r = e.getMonth();
    return n === "M" ? String(r + 1) : Be(r + 1, 2);
  },
  // Day of the month
  d(e, n) {
    return Be(e.getDate(), n.length);
  },
  // AM or PM
  a(e, n) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, n) {
    return Be(e.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(e, n) {
    return Be(e.getHours(), n.length);
  },
  // Minute
  m(e, n) {
    return Be(e.getMinutes(), n.length);
  },
  // Second
  s(e, n) {
    return Be(e.getSeconds(), n.length);
  },
  // Fraction of second
  S(e, n) {
    const r = n.length, i = e.getMilliseconds(), l = Math.trunc(
      i * Math.pow(10, r - 3)
    );
    return Be(l, n.length);
  }
}, di = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Fh = {
  // Era
  G: function(e, n, r) {
    const i = e.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(i, { width: "abbreviated" });
      case "GGGGG":
        return r.era(i, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(i, { width: "wide" });
    }
  },
  // Year
  y: function(e, n, r) {
    if (n === "yo") {
      const i = e.getFullYear(), l = i > 0 ? i : 1 - i;
      return r.ordinalNumber(l, { unit: "year" });
    }
    return Wr.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, r, i) {
    const l = rg(e, i), s = l > 0 ? l : 1 - l;
    if (n === "YY") {
      const c = s % 100;
      return Be(c, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, { unit: "year" }) : Be(s, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const r = Jv(e);
    return Be(r, n.length);
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
  u: function(e, n) {
    const r = e.getFullYear();
    return Be(r, n.length);
  },
  // Quarter
  Q: function(e, n, r) {
    const i = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(i);
      case "QQ":
        return Be(i, 2);
      case "Qo":
        return r.ordinalNumber(i, { unit: "quarter" });
      case "QQQ":
        return r.quarter(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(i, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, n, r) {
    const i = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(i);
      case "qq":
        return Be(i, 2);
      case "qo":
        return r.ordinalNumber(i, { unit: "quarter" });
      case "qqq":
        return r.quarter(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(i, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, n, r) {
    const i = e.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return Wr.M(e, n);
      case "Mo":
        return r.ordinalNumber(i + 1, { unit: "month" });
      case "MMM":
        return r.month(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(i, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(i, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, n, r) {
    const i = e.getMonth();
    switch (n) {
      case "L":
        return String(i + 1);
      case "LL":
        return Be(i + 1, 2);
      case "Lo":
        return r.ordinalNumber(i + 1, { unit: "month" });
      case "LLL":
        return r.month(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(i, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(i, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, n, r, i) {
    const l = og(e, i);
    return n === "wo" ? r.ordinalNumber(l, { unit: "week" }) : Be(l, n.length);
  },
  // ISO week of year
  I: function(e, n, r) {
    const i = ng(e);
    return n === "Io" ? r.ordinalNumber(i, { unit: "week" }) : Be(i, n.length);
  },
  // Day of the month
  d: function(e, n, r) {
    return n === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Wr.d(e, n);
  },
  // Day of year
  D: function(e, n, r) {
    const i = IC(e);
    return n === "Do" ? r.ordinalNumber(i, { unit: "dayOfYear" }) : Be(i, n.length);
  },
  // Day of week
  E: function(e, n, r) {
    const i = e.getDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, n, r, i) {
    const l = e.getDay(), s = (l - i.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(s);
      case "ee":
        return Be(s, 2);
      case "eo":
        return r.ordinalNumber(s, { unit: "day" });
      case "eee":
        return r.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(l, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(l, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, n, r, i) {
    const l = e.getDay(), s = (l - i.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(s);
      case "cc":
        return Be(s, n.length);
      case "co":
        return r.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return r.day(l, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(l, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(l, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, n, r) {
    const i = e.getDay(), l = i === 0 ? 7 : i;
    switch (n) {
      case "i":
        return String(l);
      case "ii":
        return Be(l, n.length);
      case "io":
        return r.ordinalNumber(l, { unit: "day" });
      case "iii":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, n, r) {
    const l = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, n, r) {
    const i = e.getHours();
    let l;
    switch (i === 12 ? l = di.noon : i === 0 ? l = di.midnight : l = i / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, n, r) {
    const i = e.getHours();
    let l;
    switch (i >= 17 ? l = di.evening : i >= 12 ? l = di.afternoon : i >= 4 ? l = di.morning : l = di.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, n, r) {
    if (n === "ho") {
      let i = e.getHours() % 12;
      return i === 0 && (i = 12), r.ordinalNumber(i, { unit: "hour" });
    }
    return Wr.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, r) {
    return n === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Wr.H(e, n);
  },
  // Hour [0-11]
  K: function(e, n, r) {
    const i = e.getHours() % 12;
    return n === "Ko" ? r.ordinalNumber(i, { unit: "hour" }) : Be(i, n.length);
  },
  // Hour [1-24]
  k: function(e, n, r) {
    let i = e.getHours();
    return i === 0 && (i = 24), n === "ko" ? r.ordinalNumber(i, { unit: "hour" }) : Be(i, n.length);
  },
  // Minute
  m: function(e, n, r) {
    return n === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Wr.m(e, n);
  },
  // Second
  s: function(e, n, r) {
    return n === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Wr.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return Wr.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, r) {
    const i = e.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (n) {
      case "X":
        return Nh(i);
      case "XXXX":
      case "XX":
        return wo(i);
      case "XXXXX":
      case "XXX":
      default:
        return wo(i, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, r) {
    const i = e.getTimezoneOffset();
    switch (n) {
      case "x":
        return Nh(i);
      case "xxxx":
      case "xx":
        return wo(i);
      case "xxxxx":
      case "xxx":
      default:
        return wo(i, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, r) {
    const i = e.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + kh(i, ":");
      case "OOOO":
      default:
        return "GMT" + wo(i, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, r) {
    const i = e.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + kh(i, ":");
      case "zzzz":
      default:
        return "GMT" + wo(i, ":");
    }
  },
  // Seconds timestamp
  t: function(e, n, r) {
    const i = Math.trunc(e.getTime() / 1e3);
    return Be(i, n.length);
  },
  // Milliseconds timestamp
  T: function(e, n, r) {
    const i = e.getTime();
    return Be(i, n.length);
  }
};
function kh(e, n = "") {
  const r = e > 0 ? "-" : "+", i = Math.abs(e), l = Math.trunc(i / 60), s = i % 60;
  return s === 0 ? r + String(l) : r + String(l) + n + Be(s, 2);
}
function Nh(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Be(Math.abs(e) / 60, 2) : wo(e, n);
}
function wo(e, n = "") {
  const r = e > 0 ? "-" : "+", i = Math.abs(e), l = Be(Math.trunc(i / 60), 2), s = Be(i % 60, 2);
  return r + l + n + s;
}
const _h = (e, n) => {
  switch (e) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, ig = (e, n) => {
  switch (e) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, WC = (e, n) => {
  const r = e.match(/(P+)(p+)?/) || [], i = r[1], l = r[2];
  if (!l)
    return _h(e, n);
  let s;
  switch (i) {
    case "P":
      s = n.dateTime({ width: "short" });
      break;
    case "PP":
      s = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = n.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", _h(i, n)).replace("{{time}}", ig(l, n));
}, zC = {
  p: ig,
  P: WC
}, $C = /^D+$/, HC = /^Y+$/, VC = ["D", "DD", "YY", "YYYY"];
function UC(e) {
  return $C.test(e);
}
function YC(e) {
  return HC.test(e);
}
function KC(e, n, r) {
  const i = QC(e, n, r);
  if (console.warn(i), VC.includes(e)) throw new RangeError(i);
}
function QC(e, n, r) {
  const i = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const XC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, GC = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, qC = /^'([^]*?)'?$/, JC = /''/g, ZC = /[a-zA-Z]/;
function ar(e, n, r) {
  var g, D, y, x, C, E, b, F;
  const i = Oa(), l = (r == null ? void 0 : r.locale) ?? i.locale ?? tg, s = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((D = (g = r == null ? void 0 : r.locale) == null ? void 0 : g.options) == null ? void 0 : D.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((x = (y = i.locale) == null ? void 0 : y.options) == null ? void 0 : x.firstWeekContainsDate) ?? 1, c = (r == null ? void 0 : r.weekStartsOn) ?? ((E = (C = r == null ? void 0 : r.locale) == null ? void 0 : C.options) == null ? void 0 : E.weekStartsOn) ?? i.weekStartsOn ?? ((F = (b = i.locale) == null ? void 0 : b.options) == null ? void 0 : F.weekStartsOn) ?? 0, d = Te(e);
  if (!oC(d))
    throw new RangeError("Invalid time value");
  let p = n.match(GC).map((k) => {
    const _ = k[0];
    if (_ === "p" || _ === "P") {
      const P = zC[_];
      return P(k, l.formatLong);
    }
    return k;
  }).join("").match(XC).map((k) => {
    if (k === "''")
      return { isToken: !1, value: "'" };
    const _ = k[0];
    if (_ === "'")
      return { isToken: !1, value: e2(k) };
    if (Fh[_])
      return { isToken: !0, value: k };
    if (_.match(ZC))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + _ + "`"
      );
    return { isToken: !1, value: k };
  });
  l.localize.preprocessor && (p = l.localize.preprocessor(d, p));
  const v = {
    firstWeekContainsDate: s,
    weekStartsOn: c,
    locale: l
  };
  return p.map((k) => {
    if (!k.isToken) return k.value;
    const _ = k.value;
    (!(r != null && r.useAdditionalWeekYearTokens) && YC(_) || !(r != null && r.useAdditionalDayOfYearTokens) && UC(_)) && KC(_, n, String(e));
    const P = Fh[_[0]];
    return P(d, _, l.localize, v);
  }).join("");
}
function e2(e) {
  const n = e.match(qC);
  return n ? n[1].replace(JC, "'") : e;
}
function t2(e) {
  const n = Te(e), r = n.getFullYear(), i = n.getMonth(), l = Gt(e, 0);
  return l.setFullYear(r, i + 1, 0), l.setHours(0, 0, 0, 0), l.getDate();
}
function n2(e) {
  return Math.trunc(+Te(e) / 1e3);
}
function r2(e) {
  const n = Te(e), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(0, 0, 0, 0), n;
}
function o2(e, n) {
  return iC(
    r2(e),
    Bt(e),
    n
  ) + 1;
}
function cd(e, n) {
  const r = Te(e), i = Te(n);
  return r.getTime() > i.getTime();
}
function ag(e, n) {
  const r = Te(e), i = Te(n);
  return +r < +i;
}
function Id(e, n) {
  const r = Te(e), i = Te(n);
  return r.getFullYear() === i.getFullYear() && r.getMonth() === i.getMonth();
}
function i2(e, n) {
  const r = Te(e), i = Te(n);
  return r.getFullYear() === i.getFullYear();
}
function Rc(e, n) {
  return _t(e, -n);
}
function Mc(e, n) {
  const r = Te(e), i = r.getFullYear(), l = r.getDate(), s = Gt(e, 0);
  s.setFullYear(i, n, 15), s.setHours(0, 0, 0, 0);
  const c = t2(s);
  return r.setMonth(n, Math.min(l, c)), r;
}
function Ph(e, n) {
  const r = Te(e);
  return isNaN(+r) ? Gt(e, NaN) : (r.setFullYear(n), r);
}
function Pe(e, n, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(l) {
    if (e == null || e(l), r === !1 || !l.defaultPrevented)
      return n == null ? void 0 : n(l);
  };
}
function a2(e, n) {
  const r = w.createContext(n);
  function i(s) {
    const { children: c, ...d } = s, p = w.useMemo(() => d, Object.values(d));
    return /* @__PURE__ */ m.jsx(r.Provider, { value: p, children: c });
  }
  function l(s) {
    const c = w.useContext(r);
    if (c) return c;
    if (n !== void 0) return n;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return i.displayName = e + "Provider", [i, l];
}
function Qr(e, n = []) {
  let r = [];
  function i(s, c) {
    const d = w.createContext(c), p = r.length;
    r = [...r, c];
    function v(D) {
      const { scope: y, children: x, ...C } = D, E = (y == null ? void 0 : y[e][p]) || d, b = w.useMemo(() => C, Object.values(C));
      return /* @__PURE__ */ m.jsx(E.Provider, { value: b, children: x });
    }
    function g(D, y) {
      const x = (y == null ? void 0 : y[e][p]) || d, C = w.useContext(x);
      if (C) return C;
      if (c !== void 0) return c;
      throw new Error(`\`${D}\` must be used within \`${s}\``);
    }
    return v.displayName = s + "Provider", [v, g];
  }
  const l = () => {
    const s = r.map((c) => w.createContext(c));
    return function(d) {
      const p = (d == null ? void 0 : d[e]) || s;
      return w.useMemo(
        () => ({ [`__scope${e}`]: { ...d, [e]: p } }),
        [d, p]
      );
    };
  };
  return l.scopeName = e, [i, l2(l, ...n)];
}
function l2(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const r = () => {
    const i = e.map((l) => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function(s) {
      const c = i.reduce((d, { useScope: p, scopeName: v }) => {
        const D = p(s)[`__scope${v}`];
        return { ...d, ...D };
      }, {});
      return w.useMemo(() => ({ [`__scope${n.scopeName}`]: c }), [c]);
    };
  };
  return r.scopeName = n.scopeName, r;
}
var Ft = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {
}, s2 = n1.useId || (() => {
}), u2 = 0;
function Fo(e) {
  const [n, r] = w.useState(s2());
  return Ft(() => {
    r((i) => i ?? String(u2++));
  }, [e]), n ? `radix-${n}` : "";
}
function bt(e) {
  const n = w.useRef(e);
  return w.useEffect(() => {
    n.current = e;
  }), w.useMemo(() => (...r) => {
    var i;
    return (i = n.current) == null ? void 0 : i.call(n, ...r);
  }, []);
}
function Si({
  prop: e,
  defaultProp: n,
  onChange: r = () => {
  }
}) {
  const [i, l] = c2({ defaultProp: n, onChange: r }), s = e !== void 0, c = s ? e : i, d = bt(r), p = w.useCallback(
    (v) => {
      if (s) {
        const D = typeof v == "function" ? v(e) : v;
        D !== e && d(D);
      } else
        l(v);
    },
    [s, e, l, d]
  );
  return [c, p];
}
function c2({
  defaultProp: e,
  onChange: n
}) {
  const r = w.useState(e), [i] = r, l = w.useRef(i), s = bt(n);
  return w.useEffect(() => {
    l.current !== i && (s(i), l.current = i);
  }, [i, l, s]), r;
}
var d2 = [
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
], Ae = d2.reduce((e, n) => {
  const r = w.forwardRef((i, l) => {
    const { asChild: s, ...c } = i, d = s ? Hr : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m.jsx(d, { ...c, ref: l });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function f2(e, n) {
  e && To.flushSync(() => e.dispatchEvent(n));
}
function p2(e, n = globalThis == null ? void 0 : globalThis.document) {
  const r = bt(e);
  w.useEffect(() => {
    const i = (l) => {
      l.key === "Escape" && r(l);
    };
    return n.addEventListener("keydown", i, { capture: !0 }), () => n.removeEventListener("keydown", i, { capture: !0 });
  }, [r, n]);
}
var m2 = "DismissableLayer", dd = "dismissableLayer.update", h2 = "dismissableLayer.pointerDownOutside", v2 = "dismissableLayer.focusOutside", jh, lg = w.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Fs = w.forwardRef(
  (e, n) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: i,
      onPointerDownOutside: l,
      onFocusOutside: s,
      onInteractOutside: c,
      onDismiss: d,
      ...p
    } = e, v = w.useContext(lg), [g, D] = w.useState(null), y = (g == null ? void 0 : g.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, x] = w.useState({}), C = Me(n, (W) => D(W)), E = Array.from(v.layers), [b] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1), F = E.indexOf(b), k = g ? E.indexOf(g) : -1, _ = v.layersWithOutsidePointerEventsDisabled.size > 0, P = k >= F, O = D2((W) => {
      const U = W.target, $ = [...v.branches].some((H) => H.contains(U));
      !P || $ || (l == null || l(W), c == null || c(W), W.defaultPrevented || d == null || d());
    }, y), B = w2((W) => {
      const U = W.target;
      [...v.branches].some((H) => H.contains(U)) || (s == null || s(W), c == null || c(W), W.defaultPrevented || d == null || d());
    }, y);
    return p2((W) => {
      k === v.layers.size - 1 && (i == null || i(W), !W.defaultPrevented && d && (W.preventDefault(), d()));
    }, y), w.useEffect(() => {
      if (g)
        return r && (v.layersWithOutsidePointerEventsDisabled.size === 0 && (jh = y.body.style.pointerEvents, y.body.style.pointerEvents = "none"), v.layersWithOutsidePointerEventsDisabled.add(g)), v.layers.add(g), Ah(), () => {
          r && v.layersWithOutsidePointerEventsDisabled.size === 1 && (y.body.style.pointerEvents = jh);
        };
    }, [g, y, r, v]), w.useEffect(() => () => {
      g && (v.layers.delete(g), v.layersWithOutsidePointerEventsDisabled.delete(g), Ah());
    }, [g, v]), w.useEffect(() => {
      const W = () => x({});
      return document.addEventListener(dd, W), () => document.removeEventListener(dd, W);
    }, []), /* @__PURE__ */ m.jsx(
      Ae.div,
      {
        ...p,
        ref: C,
        style: {
          pointerEvents: _ ? P ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Pe(e.onFocusCapture, B.onFocusCapture),
        onBlurCapture: Pe(e.onBlurCapture, B.onBlurCapture),
        onPointerDownCapture: Pe(
          e.onPointerDownCapture,
          O.onPointerDownCapture
        )
      }
    );
  }
);
Fs.displayName = m2;
var g2 = "DismissableLayerBranch", y2 = w.forwardRef((e, n) => {
  const r = w.useContext(lg), i = w.useRef(null), l = Me(n, i);
  return w.useEffect(() => {
    const s = i.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ m.jsx(Ae.div, { ...e, ref: l });
});
y2.displayName = g2;
function D2(e, n = globalThis == null ? void 0 : globalThis.document) {
  const r = bt(e), i = w.useRef(!1), l = w.useRef(() => {
  });
  return w.useEffect(() => {
    const s = (d) => {
      if (d.target && !i.current) {
        let p = function() {
          sg(
            h2,
            r,
            v,
            { discrete: !0 }
          );
        };
        const v = { originalEvent: d };
        d.pointerType === "touch" ? (n.removeEventListener("click", l.current), l.current = p, n.addEventListener("click", l.current, { once: !0 })) : p();
      } else
        n.removeEventListener("click", l.current);
      i.current = !1;
    }, c = window.setTimeout(() => {
      n.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(c), n.removeEventListener("pointerdown", s), n.removeEventListener("click", l.current);
    };
  }, [n, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => i.current = !0
  };
}
function w2(e, n = globalThis == null ? void 0 : globalThis.document) {
  const r = bt(e), i = w.useRef(!1);
  return w.useEffect(() => {
    const l = (s) => {
      s.target && !i.current && sg(v2, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", l), () => n.removeEventListener("focusin", l);
  }, [n, r]), {
    onFocusCapture: () => i.current = !0,
    onBlurCapture: () => i.current = !1
  };
}
function Ah() {
  const e = new CustomEvent(dd);
  document.dispatchEvent(e);
}
function sg(e, n, r, { discrete: i }) {
  const l = r.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  n && l.addEventListener(e, n, { once: !0 }), i ? f2(l, s) : l.dispatchEvent(s);
}
var Lc = "focusScope.autoFocusOnMount", Ic = "focusScope.autoFocusOnUnmount", Oh = { bubbles: !1, cancelable: !0 }, x2 = "FocusScope", ks = w.forwardRef((e, n) => {
  const {
    loop: r = !1,
    trapped: i = !1,
    onMountAutoFocus: l,
    onUnmountAutoFocus: s,
    ...c
  } = e, [d, p] = w.useState(null), v = bt(l), g = bt(s), D = w.useRef(null), y = Me(n, (E) => p(E)), x = w.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  w.useEffect(() => {
    if (i) {
      let E = function(_) {
        if (x.paused || !d) return;
        const P = _.target;
        d.contains(P) ? D.current = P : zr(D.current, { select: !0 });
      }, b = function(_) {
        if (x.paused || !d) return;
        const P = _.relatedTarget;
        P !== null && (d.contains(P) || zr(D.current, { select: !0 }));
      }, F = function(_) {
        if (document.activeElement === document.body)
          for (const O of _)
            O.removedNodes.length > 0 && zr(d);
      };
      document.addEventListener("focusin", E), document.addEventListener("focusout", b);
      const k = new MutationObserver(F);
      return d && k.observe(d, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", E), document.removeEventListener("focusout", b), k.disconnect();
      };
    }
  }, [i, d, x.paused]), w.useEffect(() => {
    if (d) {
      Rh.add(x);
      const E = document.activeElement;
      if (!d.contains(E)) {
        const F = new CustomEvent(Lc, Oh);
        d.addEventListener(Lc, v), d.dispatchEvent(F), F.defaultPrevented || (C2(k2(ug(d)), { select: !0 }), document.activeElement === E && zr(d));
      }
      return () => {
        d.removeEventListener(Lc, v), setTimeout(() => {
          const F = new CustomEvent(Ic, Oh);
          d.addEventListener(Ic, g), d.dispatchEvent(F), F.defaultPrevented || zr(E ?? document.body, { select: !0 }), d.removeEventListener(Ic, g), Rh.remove(x);
        }, 0);
      };
    }
  }, [d, v, g, x]);
  const C = w.useCallback(
    (E) => {
      if (!r && !i || x.paused) return;
      const b = E.key === "Tab" && !E.altKey && !E.ctrlKey && !E.metaKey, F = document.activeElement;
      if (b && F) {
        const k = E.currentTarget, [_, P] = E2(k);
        _ && P ? !E.shiftKey && F === P ? (E.preventDefault(), r && zr(_, { select: !0 })) : E.shiftKey && F === _ && (E.preventDefault(), r && zr(P, { select: !0 })) : F === k && E.preventDefault();
      }
    },
    [r, i, x.paused]
  );
  return /* @__PURE__ */ m.jsx(Ae.div, { tabIndex: -1, ...c, ref: y, onKeyDown: C });
});
ks.displayName = x2;
function C2(e, { select: n = !1 } = {}) {
  const r = document.activeElement;
  for (const i of e)
    if (zr(i, { select: n }), document.activeElement !== r) return;
}
function E2(e) {
  const n = ug(e), r = Th(n, e), i = Th(n.reverse(), e);
  return [r, i];
}
function ug(e) {
  const n = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const l = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || l ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) n.push(r.currentNode);
  return n;
}
function Th(e, n) {
  for (const r of e)
    if (!S2(r, { upTo: n })) return r;
}
function S2(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function b2(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function zr(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && b2(e) && n && e.select();
  }
}
var Rh = F2();
function F2() {
  let e = [];
  return {
    add(n) {
      const r = e[0];
      n !== r && (r == null || r.pause()), e = Mh(e, n), e.unshift(n);
    },
    remove(n) {
      var r;
      e = Mh(e, n), (r = e[0]) == null || r.resume();
    }
  };
}
function Mh(e, n) {
  const r = [...e], i = r.indexOf(n);
  return i !== -1 && r.splice(i, 1), r;
}
function k2(e) {
  return e.filter((n) => n.tagName !== "A");
}
var N2 = "Portal", Ns = w.forwardRef((e, n) => {
  var d;
  const { container: r, ...i } = e, [l, s] = w.useState(!1);
  Ft(() => s(!0), []);
  const c = r || l && ((d = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : d.body);
  return c ? l1.createPortal(/* @__PURE__ */ m.jsx(Ae.div, { ...i, ref: n }), c) : null;
});
Ns.displayName = N2;
function _2(e, n) {
  return w.useReducer((r, i) => n[r][i] ?? r, e);
}
var En = (e) => {
  const { present: n, children: r } = e, i = P2(n), l = typeof r == "function" ? r({ present: i.isPresent }) : w.Children.only(r), s = Me(i.ref, j2(l));
  return typeof r == "function" || i.isPresent ? w.cloneElement(l, { ref: s }) : null;
};
En.displayName = "Presence";
function P2(e) {
  const [n, r] = w.useState(), i = w.useRef({}), l = w.useRef(e), s = w.useRef("none"), c = e ? "mounted" : "unmounted", [d, p] = _2(c, {
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
  return w.useEffect(() => {
    const v = ql(i.current);
    s.current = d === "mounted" ? v : "none";
  }, [d]), Ft(() => {
    const v = i.current, g = l.current;
    if (g !== e) {
      const y = s.current, x = ql(v);
      e ? p("MOUNT") : x === "none" || (v == null ? void 0 : v.display) === "none" ? p("UNMOUNT") : p(g && y !== x ? "ANIMATION_OUT" : "UNMOUNT"), l.current = e;
    }
  }, [e, p]), Ft(() => {
    if (n) {
      const v = (D) => {
        const x = ql(i.current).includes(D.animationName);
        D.target === n && x && To.flushSync(() => p("ANIMATION_END"));
      }, g = (D) => {
        D.target === n && (s.current = ql(i.current));
      };
      return n.addEventListener("animationstart", g), n.addEventListener("animationcancel", v), n.addEventListener("animationend", v), () => {
        n.removeEventListener("animationstart", g), n.removeEventListener("animationcancel", v), n.removeEventListener("animationend", v);
      };
    } else
      p("ANIMATION_END");
  }, [n, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(d),
    ref: w.useCallback((v) => {
      v && (i.current = getComputedStyle(v)), r(v);
    }, [])
  };
}
function ql(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function j2(e) {
  var i, l;
  let n = (i = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : i.get, r = n && "isReactWarning" in n && n.isReactWarning;
  return r ? e.ref : (n = (l = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : l.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Bc = 0;
function Bd() {
  w.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Lh()), document.body.insertAdjacentElement("beforeend", e[1] ?? Lh()), Bc++, () => {
      Bc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Bc--;
    };
  }, []);
}
function Lh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Tn = function() {
  return Tn = Object.assign || function(n) {
    for (var r, i = 1, l = arguments.length; i < l; i++) {
      r = arguments[i];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (n[s] = r[s]);
    }
    return n;
  }, Tn.apply(this, arguments);
};
function cg(e, n) {
  var r = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(e); l < i.length; l++)
      n.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[l]) && (r[i[l]] = e[i[l]]);
  return r;
}
function A2(e, n, r) {
  if (r || arguments.length === 2) for (var i = 0, l = n.length, s; i < l; i++)
    (s || !(i in n)) && (s || (s = Array.prototype.slice.call(n, 0, i)), s[i] = n[i]);
  return e.concat(s || Array.prototype.slice.call(n));
}
var ls = "right-scroll-bar-position", ss = "width-before-scroll-bar", O2 = "with-scroll-bars-hidden", T2 = "--removed-body-scroll-bar-size";
function Wc(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function R2(e, n) {
  var r = w.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: n,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(i) {
          var l = r.value;
          l !== i && (r.value = i, r.callback(i, l));
        }
      }
    };
  })[0];
  return r.callback = n, r.facade;
}
var M2 = typeof window < "u" ? w.useLayoutEffect : w.useEffect, Ih = /* @__PURE__ */ new WeakMap();
function L2(e, n) {
  var r = R2(null, function(i) {
    return e.forEach(function(l) {
      return Wc(l, i);
    });
  });
  return M2(function() {
    var i = Ih.get(r);
    if (i) {
      var l = new Set(i), s = new Set(e), c = r.current;
      l.forEach(function(d) {
        s.has(d) || Wc(d, null);
      }), s.forEach(function(d) {
        l.has(d) || Wc(d, c);
      });
    }
    Ih.set(r, e);
  }, [e]), r;
}
function I2(e) {
  return e;
}
function B2(e, n) {
  n === void 0 && (n = I2);
  var r = [], i = !1, l = {
    read: function() {
      if (i)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(s) {
      var c = n(s, i);
      return r.push(c), function() {
        r = r.filter(function(d) {
          return d !== c;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (i = !0; r.length; ) {
        var c = r;
        r = [], c.forEach(s);
      }
      r = {
        push: function(d) {
          return s(d);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(s) {
      i = !0;
      var c = [];
      if (r.length) {
        var d = r;
        r = [], d.forEach(s), c = r;
      }
      var p = function() {
        var g = c;
        c = [], g.forEach(s);
      }, v = function() {
        return Promise.resolve().then(p);
      };
      v(), r = {
        push: function(g) {
          c.push(g), v();
        },
        filter: function(g) {
          return c = c.filter(g), r;
        }
      };
    }
  };
  return l;
}
function W2(e) {
  e === void 0 && (e = {});
  var n = B2(null);
  return n.options = Tn({ async: !0, ssr: !1 }, e), n;
}
var dg = function(e) {
  var n = e.sideCar, r = cg(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var i = n.read();
  if (!i)
    throw new Error("Sidecar medium not found");
  return w.createElement(i, Tn({}, r));
};
dg.isSideCarExport = !0;
function z2(e, n) {
  return e.useMedium(n), dg;
}
var fg = W2(), zc = function() {
}, _s = w.forwardRef(function(e, n) {
  var r = w.useRef(null), i = w.useState({
    onScrollCapture: zc,
    onWheelCapture: zc,
    onTouchMoveCapture: zc
  }), l = i[0], s = i[1], c = e.forwardProps, d = e.children, p = e.className, v = e.removeScrollBar, g = e.enabled, D = e.shards, y = e.sideCar, x = e.noIsolation, C = e.inert, E = e.allowPinchZoom, b = e.as, F = b === void 0 ? "div" : b, k = e.gapMode, _ = cg(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = y, O = L2([r, n]), B = Tn(Tn({}, _), l);
  return w.createElement(
    w.Fragment,
    null,
    g && w.createElement(P, { sideCar: fg, removeScrollBar: v, shards: D, noIsolation: x, inert: C, setCallbacks: s, allowPinchZoom: !!E, lockRef: r, gapMode: k }),
    c ? w.cloneElement(w.Children.only(d), Tn(Tn({}, B), { ref: O })) : w.createElement(F, Tn({}, B, { className: p, ref: O }), d)
  );
});
_s.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
_s.classNames = {
  fullWidth: ss,
  zeroRight: ls
};
var $2 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function H2() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = $2();
  return n && e.setAttribute("nonce", n), e;
}
function V2(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function U2(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var Y2 = function() {
  var e = 0, n = null;
  return {
    add: function(r) {
      e == 0 && (n = H2()) && (V2(n, r), U2(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, K2 = function() {
  var e = Y2();
  return function(n, r) {
    w.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && r]);
  };
}, pg = function() {
  var e = K2(), n = function(r) {
    var i = r.styles, l = r.dynamic;
    return e(i, l), null;
  };
  return n;
}, Q2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $c = function(e) {
  return parseInt(e || "", 10) || 0;
}, X2 = function(e) {
  var n = window.getComputedStyle(document.body), r = n[e === "padding" ? "paddingLeft" : "marginLeft"], i = n[e === "padding" ? "paddingTop" : "marginTop"], l = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [$c(r), $c(i), $c(l)];
}, G2 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Q2;
  var n = X2(e), r = document.documentElement.clientWidth, i = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, i - r + n[2] - n[0])
  };
}, q2 = pg(), xi = "data-scroll-locked", J2 = function(e, n, r, i) {
  var l = e.left, s = e.top, c = e.right, d = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(O2, ` {
   overflow: hidden `).concat(i, `;
   padding-right: `).concat(d, "px ").concat(i, `;
  }
  body[`).concat(xi, `] {
    overflow: hidden `).concat(i, `;
    overscroll-behavior: contain;
    `).concat([
    n && "position: relative ".concat(i, ";"),
    r === "margin" && `
    padding-left: `.concat(l, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(d, "px ").concat(i, `;
    `),
    r === "padding" && "padding-right: ".concat(d, "px ").concat(i, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ls, ` {
    right: `).concat(d, "px ").concat(i, `;
  }
  
  .`).concat(ss, ` {
    margin-right: `).concat(d, "px ").concat(i, `;
  }
  
  .`).concat(ls, " .").concat(ls, ` {
    right: 0 `).concat(i, `;
  }
  
  .`).concat(ss, " .").concat(ss, ` {
    margin-right: 0 `).concat(i, `;
  }
  
  body[`).concat(xi, `] {
    `).concat(T2, ": ").concat(d, `px;
  }
`);
}, Bh = function() {
  var e = parseInt(document.body.getAttribute(xi) || "0", 10);
  return isFinite(e) ? e : 0;
}, Z2 = function() {
  w.useEffect(function() {
    return document.body.setAttribute(xi, (Bh() + 1).toString()), function() {
      var e = Bh() - 1;
      e <= 0 ? document.body.removeAttribute(xi) : document.body.setAttribute(xi, e.toString());
    };
  }, []);
}, eE = function(e) {
  var n = e.noRelative, r = e.noImportant, i = e.gapMode, l = i === void 0 ? "margin" : i;
  Z2();
  var s = w.useMemo(function() {
    return G2(l);
  }, [l]);
  return w.createElement(q2, { styles: J2(s, !n, l, r ? "" : "!important") });
}, fd = !1;
if (typeof window < "u")
  try {
    var Jl = Object.defineProperty({}, "passive", {
      get: function() {
        return fd = !0, !0;
      }
    });
    window.addEventListener("test", Jl, Jl), window.removeEventListener("test", Jl, Jl);
  } catch {
    fd = !1;
  }
var fi = fd ? { passive: !1 } : !1, tE = function(e) {
  return e.tagName === "TEXTAREA";
}, mg = function(e, n) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[n] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !tE(e) && r[n] === "visible")
  );
}, nE = function(e) {
  return mg(e, "overflowY");
}, rE = function(e) {
  return mg(e, "overflowX");
}, Wh = function(e, n) {
  var r = n.ownerDocument, i = n;
  do {
    typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
    var l = hg(e, i);
    if (l) {
      var s = vg(e, i), c = s[1], d = s[2];
      if (c > d)
        return !0;
    }
    i = i.parentNode;
  } while (i && i !== r.body);
  return !1;
}, oE = function(e) {
  var n = e.scrollTop, r = e.scrollHeight, i = e.clientHeight;
  return [
    n,
    r,
    i
  ];
}, iE = function(e) {
  var n = e.scrollLeft, r = e.scrollWidth, i = e.clientWidth;
  return [
    n,
    r,
    i
  ];
}, hg = function(e, n) {
  return e === "v" ? nE(n) : rE(n);
}, vg = function(e, n) {
  return e === "v" ? oE(n) : iE(n);
}, aE = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, lE = function(e, n, r, i, l) {
  var s = aE(e, window.getComputedStyle(n).direction), c = s * i, d = r.target, p = n.contains(d), v = !1, g = c > 0, D = 0, y = 0;
  do {
    var x = vg(e, d), C = x[0], E = x[1], b = x[2], F = E - b - s * C;
    (C || F) && hg(e, d) && (D += F, y += C), d instanceof ShadowRoot ? d = d.host : d = d.parentNode;
  } while (
    // portaled content
    !p && d !== document.body || // self content
    p && (n.contains(d) || n === d)
  );
  return (g && (Math.abs(D) < 1 || !l) || !g && (Math.abs(y) < 1 || !l)) && (v = !0), v;
}, Zl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, zh = function(e) {
  return [e.deltaX, e.deltaY];
}, $h = function(e) {
  return e && "current" in e ? e.current : e;
}, sE = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, uE = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, cE = 0, pi = [];
function dE(e) {
  var n = w.useRef([]), r = w.useRef([0, 0]), i = w.useRef(), l = w.useState(cE++)[0], s = w.useState(pg)[0], c = w.useRef(e);
  w.useEffect(function() {
    c.current = e;
  }, [e]), w.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(l));
      var E = A2([e.lockRef.current], (e.shards || []).map($h), !0).filter(Boolean);
      return E.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(l));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(l)), E.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(l));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var d = w.useCallback(function(E, b) {
    if ("touches" in E && E.touches.length === 2)
      return !c.current.allowPinchZoom;
    var F = Zl(E), k = r.current, _ = "deltaX" in E ? E.deltaX : k[0] - F[0], P = "deltaY" in E ? E.deltaY : k[1] - F[1], O, B = E.target, W = Math.abs(_) > Math.abs(P) ? "h" : "v";
    if ("touches" in E && W === "h" && B.type === "range")
      return !1;
    var U = Wh(W, B);
    if (!U)
      return !0;
    if (U ? O = W : (O = W === "v" ? "h" : "v", U = Wh(W, B)), !U)
      return !1;
    if (!i.current && "changedTouches" in E && (_ || P) && (i.current = O), !O)
      return !0;
    var $ = i.current || O;
    return lE($, b, E, $ === "h" ? _ : P, !0);
  }, []), p = w.useCallback(function(E) {
    var b = E;
    if (!(!pi.length || pi[pi.length - 1] !== s)) {
      var F = "deltaY" in b ? zh(b) : Zl(b), k = n.current.filter(function(O) {
        return O.name === b.type && (O.target === b.target || b.target === O.shadowParent) && sE(O.delta, F);
      })[0];
      if (k && k.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!k) {
        var _ = (c.current.shards || []).map($h).filter(Boolean).filter(function(O) {
          return O.contains(b.target);
        }), P = _.length > 0 ? d(b, _[0]) : !c.current.noIsolation;
        P && b.cancelable && b.preventDefault();
      }
    }
  }, []), v = w.useCallback(function(E, b, F, k) {
    var _ = { name: E, delta: b, target: F, should: k, shadowParent: fE(F) };
    n.current.push(_), setTimeout(function() {
      n.current = n.current.filter(function(P) {
        return P !== _;
      });
    }, 1);
  }, []), g = w.useCallback(function(E) {
    r.current = Zl(E), i.current = void 0;
  }, []), D = w.useCallback(function(E) {
    v(E.type, zh(E), E.target, d(E, e.lockRef.current));
  }, []), y = w.useCallback(function(E) {
    v(E.type, Zl(E), E.target, d(E, e.lockRef.current));
  }, []);
  w.useEffect(function() {
    return pi.push(s), e.setCallbacks({
      onScrollCapture: D,
      onWheelCapture: D,
      onTouchMoveCapture: y
    }), document.addEventListener("wheel", p, fi), document.addEventListener("touchmove", p, fi), document.addEventListener("touchstart", g, fi), function() {
      pi = pi.filter(function(E) {
        return E !== s;
      }), document.removeEventListener("wheel", p, fi), document.removeEventListener("touchmove", p, fi), document.removeEventListener("touchstart", g, fi);
    };
  }, []);
  var x = e.removeScrollBar, C = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    C ? w.createElement(s, { styles: uE(l) }) : null,
    x ? w.createElement(eE, { gapMode: e.gapMode }) : null
  );
}
function fE(e) {
  for (var n = null; e !== null; )
    e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
  return n;
}
const pE = z2(fg, dE);
var Ps = w.forwardRef(function(e, n) {
  return w.createElement(_s, Tn({}, e, { ref: n, sideCar: pE }));
});
Ps.classNames = _s.classNames;
var mE = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, mi = /* @__PURE__ */ new WeakMap(), es = /* @__PURE__ */ new WeakMap(), ts = {}, Hc = 0, gg = function(e) {
  return e && (e.host || gg(e.parentNode));
}, hE = function(e, n) {
  return n.map(function(r) {
    if (e.contains(r))
      return r;
    var i = gg(r);
    return i && e.contains(i) ? i : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, vE = function(e, n, r, i) {
  var l = hE(n, Array.isArray(e) ? e : [e]);
  ts[r] || (ts[r] = /* @__PURE__ */ new WeakMap());
  var s = ts[r], c = [], d = /* @__PURE__ */ new Set(), p = new Set(l), v = function(D) {
    !D || d.has(D) || (d.add(D), v(D.parentNode));
  };
  l.forEach(v);
  var g = function(D) {
    !D || p.has(D) || Array.prototype.forEach.call(D.children, function(y) {
      if (d.has(y))
        g(y);
      else
        try {
          var x = y.getAttribute(i), C = x !== null && x !== "false", E = (mi.get(y) || 0) + 1, b = (s.get(y) || 0) + 1;
          mi.set(y, E), s.set(y, b), c.push(y), E === 1 && C && es.set(y, !0), b === 1 && y.setAttribute(r, "true"), C || y.setAttribute(i, "true");
        } catch (F) {
          console.error("aria-hidden: cannot operate on ", y, F);
        }
    });
  };
  return g(n), d.clear(), Hc++, function() {
    c.forEach(function(D) {
      var y = mi.get(D) - 1, x = s.get(D) - 1;
      mi.set(D, y), s.set(D, x), y || (es.has(D) || D.removeAttribute(i), es.delete(D)), x || D.removeAttribute(r);
    }), Hc--, Hc || (mi = /* @__PURE__ */ new WeakMap(), mi = /* @__PURE__ */ new WeakMap(), es = /* @__PURE__ */ new WeakMap(), ts = {});
  };
}, Wd = function(e, n, r) {
  r === void 0 && (r = "data-aria-hidden");
  var i = Array.from(Array.isArray(e) ? e : [e]), l = mE(e);
  return l ? (i.push.apply(i, Array.from(l.querySelectorAll("[aria-live]"))), vE(i, l, r, "aria-hidden")) : function() {
    return null;
  };
}, zd = "Dialog", [yg, Lj] = Qr(zd), [gE, Sn] = yg(zd), Dg = (e) => {
  const {
    __scopeDialog: n,
    children: r,
    open: i,
    defaultOpen: l,
    onOpenChange: s,
    modal: c = !0
  } = e, d = w.useRef(null), p = w.useRef(null), [v = !1, g] = Si({
    prop: i,
    defaultProp: l,
    onChange: s
  });
  return /* @__PURE__ */ m.jsx(
    gE,
    {
      scope: n,
      triggerRef: d,
      contentRef: p,
      contentId: Fo(),
      titleId: Fo(),
      descriptionId: Fo(),
      open: v,
      onOpenChange: g,
      onOpenToggle: w.useCallback(() => g((D) => !D), [g]),
      modal: c,
      children: r
    }
  );
};
Dg.displayName = zd;
var wg = "DialogTrigger", xg = w.forwardRef(
  (e, n) => {
    const { __scopeDialog: r, ...i } = e, l = Sn(wg, r), s = Me(n, l.triggerRef);
    return /* @__PURE__ */ m.jsx(
      Ae.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": l.open,
        "aria-controls": l.contentId,
        "data-state": Vd(l.open),
        ...i,
        ref: s,
        onClick: Pe(e.onClick, l.onOpenToggle)
      }
    );
  }
);
xg.displayName = wg;
var $d = "DialogPortal", [yE, Cg] = yg($d, {
  forceMount: void 0
}), Eg = (e) => {
  const { __scopeDialog: n, forceMount: r, children: i, container: l } = e, s = Sn($d, n);
  return /* @__PURE__ */ m.jsx(yE, { scope: n, forceMount: r, children: w.Children.map(i, (c) => /* @__PURE__ */ m.jsx(En, { present: r || s.open, children: /* @__PURE__ */ m.jsx(Ns, { asChild: !0, container: l, children: c }) })) });
};
Eg.displayName = $d;
var hs = "DialogOverlay", Sg = w.forwardRef(
  (e, n) => {
    const r = Cg(hs, e.__scopeDialog), { forceMount: i = r.forceMount, ...l } = e, s = Sn(hs, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ m.jsx(En, { present: i || s.open, children: /* @__PURE__ */ m.jsx(DE, { ...l, ref: n }) }) : null;
  }
);
Sg.displayName = hs;
var DE = w.forwardRef(
  (e, n) => {
    const { __scopeDialog: r, ...i } = e, l = Sn(hs, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m.jsx(Ps, { as: Hr, allowPinchZoom: !0, shards: [l.contentRef], children: /* @__PURE__ */ m.jsx(
        Ae.div,
        {
          "data-state": Vd(l.open),
          ...i,
          ref: n,
          style: { pointerEvents: "auto", ...i.style }
        }
      ) })
    );
  }
), Po = "DialogContent", bg = w.forwardRef(
  (e, n) => {
    const r = Cg(Po, e.__scopeDialog), { forceMount: i = r.forceMount, ...l } = e, s = Sn(Po, e.__scopeDialog);
    return /* @__PURE__ */ m.jsx(En, { present: i || s.open, children: s.modal ? /* @__PURE__ */ m.jsx(wE, { ...l, ref: n }) : /* @__PURE__ */ m.jsx(xE, { ...l, ref: n }) });
  }
);
bg.displayName = Po;
var wE = w.forwardRef(
  (e, n) => {
    const r = Sn(Po, e.__scopeDialog), i = w.useRef(null), l = Me(n, r.contentRef, i);
    return w.useEffect(() => {
      const s = i.current;
      if (s) return Wd(s);
    }, []), /* @__PURE__ */ m.jsx(
      Fg,
      {
        ...e,
        ref: l,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Pe(e.onCloseAutoFocus, (s) => {
          var c;
          s.preventDefault(), (c = r.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: Pe(e.onPointerDownOutside, (s) => {
          const c = s.detail.originalEvent, d = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || d) && s.preventDefault();
        }),
        onFocusOutside: Pe(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), xE = w.forwardRef(
  (e, n) => {
    const r = Sn(Po, e.__scopeDialog), i = w.useRef(!1), l = w.useRef(!1);
    return /* @__PURE__ */ m.jsx(
      Fg,
      {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var c, d;
          (c = e.onCloseAutoFocus) == null || c.call(e, s), s.defaultPrevented || (i.current || (d = r.triggerRef.current) == null || d.focus(), s.preventDefault()), i.current = !1, l.current = !1;
        },
        onInteractOutside: (s) => {
          var p, v;
          (p = e.onInteractOutside) == null || p.call(e, s), s.defaultPrevented || (i.current = !0, s.detail.originalEvent.type === "pointerdown" && (l.current = !0));
          const c = s.target;
          ((v = r.triggerRef.current) == null ? void 0 : v.contains(c)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && l.current && s.preventDefault();
        }
      }
    );
  }
), Fg = w.forwardRef(
  (e, n) => {
    const { __scopeDialog: r, trapFocus: i, onOpenAutoFocus: l, onCloseAutoFocus: s, ...c } = e, d = Sn(Po, r), p = w.useRef(null), v = Me(n, p);
    return Bd(), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        ks,
        {
          asChild: !0,
          loop: !0,
          trapped: i,
          onMountAutoFocus: l,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ m.jsx(
            Fs,
            {
              role: "dialog",
              id: d.contentId,
              "aria-describedby": d.descriptionId,
              "aria-labelledby": d.titleId,
              "data-state": Vd(d.open),
              ...c,
              ref: v,
              onDismiss: () => d.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx(CE, { titleId: d.titleId }),
        /* @__PURE__ */ m.jsx(SE, { contentRef: p, descriptionId: d.descriptionId })
      ] })
    ] });
  }
), Hd = "DialogTitle", kg = w.forwardRef(
  (e, n) => {
    const { __scopeDialog: r, ...i } = e, l = Sn(Hd, r);
    return /* @__PURE__ */ m.jsx(Ae.h2, { id: l.titleId, ...i, ref: n });
  }
);
kg.displayName = Hd;
var Ng = "DialogDescription", _g = w.forwardRef(
  (e, n) => {
    const { __scopeDialog: r, ...i } = e, l = Sn(Ng, r);
    return /* @__PURE__ */ m.jsx(Ae.p, { id: l.descriptionId, ...i, ref: n });
  }
);
_g.displayName = Ng;
var Pg = "DialogClose", jg = w.forwardRef(
  (e, n) => {
    const { __scopeDialog: r, ...i } = e, l = Sn(Pg, r);
    return /* @__PURE__ */ m.jsx(
      Ae.button,
      {
        type: "button",
        ...i,
        ref: n,
        onClick: Pe(e.onClick, () => l.onOpenChange(!1))
      }
    );
  }
);
jg.displayName = Pg;
function Vd(e) {
  return e ? "open" : "closed";
}
var Ag = "DialogTitleWarning", [Ij, Og] = a2(Ag, {
  contentName: Po,
  titleName: Hd,
  docsSlug: "dialog"
}), CE = ({ titleId: e }) => {
  const n = Og(Ag), r = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
  return w.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, EE = "DialogDescriptionWarning", SE = ({ contentRef: e, descriptionId: n }) => {
  const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Og(EE).contentName}}.`;
  return w.useEffect(() => {
    var s;
    const l = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    n && l && (document.getElementById(n) || console.warn(i));
  }, [i, e, n]), null;
}, Tg = Dg, Rg = xg, Mg = Eg, Ud = Sg, Yd = bg, Kd = kg, Qd = _g, bE = jg;
function FE(e) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
const Lg = oe.createContext({
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
}), js = () => {
  const e = oe.useContext(Lg);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
FE("[vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left]{overflow-x:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]::after{content:'';position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-handle]{display:block;position:relative;opacity:.8;margin-left:auto;margin-right:auto;height:5px;width:56px;border-radius:1rem;touch-action:pan-y;cursor:grab}[vaul-handle]:active,[vaul-handle]:hover{opacity:1}[vaul-handle]:active{cursor:grabbing}[vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible=false]){opacity:1}@media (hover:hover) and (pointer:fine){[vaul-drawer]{user-select:none}}@media (pointer:fine){[vaul-handle-hitarea]:{width:100%;height:100%}}");
const Ig = typeof window < "u" ? w.useLayoutEffect : w.useEffect;
function pd(...e) {
  return (...n) => {
    for (let r of e)
      typeof r == "function" && r(...n);
  };
}
function kE() {
  return Xd(/^Mac/);
}
function NE() {
  return Xd(/^iPhone/);
}
function _E() {
  return Xd(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  kE() && navigator.maxTouchPoints > 1;
}
function Bg() {
  return NE() || _E();
}
function Xd(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const Vc = typeof document < "u" && window.visualViewport;
function Hh(e) {
  let n = window.getComputedStyle(e);
  return /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
}
function Wg(e) {
  for (Hh(e) && (e = e.parentElement); e && !Hh(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const PE = /* @__PURE__ */ new Set([
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
let ns = 0, Uc;
function jE(e = {}) {
  let { isDisabled: n } = e;
  Ig(() => {
    if (!n)
      return ns++, ns === 1 && (Bg() ? Uc = OE() : Uc = AE()), () => {
        ns--, ns === 0 && Uc();
      };
  }, [
    n
  ]);
}
function AE() {
  return pd(zg(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function OE() {
  let e, n = 0, r = (D) => {
    e = Wg(D.target), !(e === document.documentElement && e === document.body) && (n = D.changedTouches[0].pageY);
  }, i = (D) => {
    if (!e || e === document.documentElement || e === document.body) {
      D.preventDefault();
      return;
    }
    let y = D.changedTouches[0].pageY, x = e.scrollTop, C = e.scrollHeight - e.clientHeight;
    C !== 0 && ((x <= 0 && y > n || x >= C && y < n) && D.preventDefault(), n = y);
  }, l = (D) => {
    let y = D.target;
    md(y) && y !== document.activeElement && (D.preventDefault(), y.style.transform = "translateY(-2000px)", y.focus(), requestAnimationFrame(() => {
      y.style.transform = "";
    }));
  }, s = (D) => {
    let y = D.target;
    md(y) && (y.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      y.style.transform = "", Vc && (Vc.height < window.innerHeight ? requestAnimationFrame(() => {
        Vh(y);
      }) : Vc.addEventListener("resize", () => Vh(y), {
        once: !0
      }));
    }));
  }, c = () => {
    window.scrollTo(0, 0);
  }, d = window.pageXOffset, p = window.pageYOffset, v = pd(zg(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let g = pd(xa(document, "touchstart", r, {
    passive: !1,
    capture: !0
  }), xa(document, "touchmove", i, {
    passive: !1,
    capture: !0
  }), xa(document, "touchend", l, {
    passive: !1,
    capture: !0
  }), xa(document, "focus", s, !0), xa(window, "scroll", c));
  return () => {
    v(), g(), window.scrollTo(d, p);
  };
}
function zg(e, n, r) {
  let i = e.style[n];
  return e.style[n] = r, () => {
    e.style[n] = i;
  };
}
function xa(e, n, r, i) {
  return e.addEventListener(n, r, i), () => {
    e.removeEventListener(n, r, i);
  };
}
function Vh(e) {
  let n = document.scrollingElement || document.documentElement;
  for (; e && e !== n; ) {
    let r = Wg(e);
    if (r !== document.documentElement && r !== document.body && r !== e) {
      let i = r.getBoundingClientRect().top, l = e.getBoundingClientRect().top, s = e.getBoundingClientRect().bottom;
      const c = r.getBoundingClientRect().bottom;
      s > c && (r.scrollTop += l - i);
    }
    e = r.parentElement;
  }
}
function md(e) {
  return e instanceof HTMLInputElement && !PE.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function TE(e, n) {
  typeof e == "function" ? e(n) : e != null && (e.current = n);
}
function RE(...e) {
  return (n) => e.forEach((r) => TE(r, n));
}
function $g(...e) {
  return w.useCallback(RE(...e), e);
}
let Ca = null;
function ME({ isOpen: e, modal: n, nested: r, hasBeenOpened: i, preventScrollRestoration: l, noBodyStyles: s }) {
  const [c, d] = oe.useState(() => typeof window < "u" ? window.location.href : ""), p = oe.useRef(0), v = oe.useCallback(() => {
    if (Ca === null && e && !s) {
      Ca = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: D, innerHeight: y } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-p.current}px`,
        left: `${-D}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const x = y - window.innerHeight;
        x && p.current >= y && (document.body.style.top = `${-(p.current + x)}px`);
      }), 300);
    }
  }, [
    e
  ]), g = oe.useCallback(() => {
    if (Ca !== null && !s) {
      const D = -parseInt(document.body.style.top, 10), y = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Ca), window.requestAnimationFrame(() => {
        if (l && c !== window.location.href) {
          d(window.location.href);
          return;
        }
        window.scrollTo(y, D);
      }), Ca = null;
    }
  }, [
    c
  ]);
  return oe.useEffect(() => {
    function D() {
      p.current = window.scrollY;
    }
    return D(), window.addEventListener("scroll", D), () => {
      window.removeEventListener("scroll", D);
    };
  }, []), oe.useEffect(() => {
    r || !i || (e ? (!window.matchMedia("(display-mode: standalone)").matches && v(), n || window.setTimeout(() => {
      g();
    }, 500)) : g());
  }, [
    e,
    i,
    c,
    n,
    r,
    v,
    g
  ]), {
    restorePositionSetting: g
  };
}
const Hg = /* @__PURE__ */ new WeakMap();
function Ge(e, n, r = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let i = {};
  Object.entries(n).forEach(([l, s]) => {
    if (l.startsWith("--")) {
      e.style.setProperty(l, s);
      return;
    }
    i[l] = e.style[l], e.style[l] = s;
  }), !r && Hg.set(e, i);
}
function rs(e, n) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = Hg.get(e);
  r && (n ? e.style[n] = r[n] : Object.entries(r).forEach(([i, l]) => {
    e.style[i] = l;
  }));
}
const st = (e) => {
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
function os(e, n) {
  if (!e)
    return null;
  const r = window.getComputedStyle(e), i = (
    // @ts-ignore
    r.transform || r.webkitTransform || r.mozTransform
  );
  let l = i.match(/^matrix3d\((.+)\)$/);
  return l ? parseFloat(l[1].split(", ")[st(n) ? 13 : 12]) : (l = i.match(/^matrix\((.+)\)$/), l ? parseFloat(l[1].split(", ")[st(n) ? 5 : 4]) : null);
}
function LE(e) {
  return 8 * (Math.log(e + 1) - 2);
}
const ze = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, Vg = 0.4;
function Ug(e) {
  const n = oe.useRef(e);
  return oe.useEffect(() => {
    n.current = e;
  }), oe.useMemo(() => (...r) => n.current == null ? void 0 : n.current.call(n, ...r), []);
}
function IE({ defaultProp: e, onChange: n }) {
  const r = oe.useState(e), [i] = r, l = oe.useRef(i), s = Ug(n);
  return oe.useEffect(() => {
    l.current !== i && (s(i), l.current = i);
  }, [
    i,
    l,
    s
  ]), r;
}
function BE({ prop: e, defaultProp: n, onChange: r = () => {
} }) {
  const [i, l] = IE({
    defaultProp: n,
    onChange: r
  }), s = e !== void 0, c = s ? e : i, d = Ug(r), p = oe.useCallback((v) => {
    if (s) {
      const D = typeof v == "function" ? v(e) : v;
      D !== e && d(D);
    } else
      l(v);
  }, [
    s,
    e,
    l,
    d
  ]);
  return [
    c,
    p
  ];
}
function WE({ activeSnapPointProp: e, setActiveSnapPointProp: n, snapPoints: r, drawerRef: i, overlayRef: l, fadeFromIndex: s, onSnapPointChange: c, direction: d = "bottom" }) {
  const [p, v] = BE({
    prop: e,
    defaultProp: r == null ? void 0 : r[0],
    onChange: n
  }), g = oe.useMemo(() => p === (r == null ? void 0 : r[r.length - 1]) || null, [
    r,
    p
  ]), D = r && r.length > 0 && (s || s === 0) && !Number.isNaN(s) && r[s] === p || !r, y = oe.useMemo(() => r == null ? void 0 : r.findIndex((_) => _ === p), [
    r,
    p
  ]), x = oe.useMemo(() => {
    var _;
    return (_ = r == null ? void 0 : r.map((P) => {
      const O = typeof window < "u", B = typeof P == "string";
      let W = 0;
      if (B && (W = parseInt(P, 10)), st(d)) {
        const $ = B ? W : O ? P * window.innerHeight : 0;
        return O ? d === "bottom" ? window.innerHeight - $ : -window.innerHeight + $ : $;
      }
      const U = B ? W : O ? P * window.innerWidth : 0;
      return O ? d === "right" ? window.innerWidth - U : -window.innerWidth + U : U;
    })) != null ? _ : [];
  }, [
    r
  ]), C = oe.useMemo(() => y !== null ? x == null ? void 0 : x[y] : null, [
    x,
    y
  ]), E = oe.useCallback((_) => {
    var P;
    const O = (P = x == null ? void 0 : x.findIndex((B) => B === _)) != null ? P : null;
    c(O), Ge(i.current, {
      transition: `transform ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      transform: st(d) ? `translate3d(0, ${_}px, 0)` : `translate3d(${_}px, 0, 0)`
    }), x && O !== x.length - 1 && O !== s ? Ge(l.current, {
      transition: `opacity ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      opacity: "0"
    }) : Ge(l.current, {
      transition: `opacity ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      opacity: "1"
    }), v(O !== null ? r == null ? void 0 : r[O] : null);
  }, [
    i.current,
    r,
    x,
    s,
    l,
    v
  ]);
  oe.useEffect(() => {
    if (p || e) {
      var _;
      const P = (_ = r == null ? void 0 : r.findIndex((O) => O === e || O === p)) != null ? _ : -1;
      x && P !== -1 && typeof x[P] == "number" && E(x[P]);
    }
  }, [
    p,
    e,
    r,
    x,
    E
  ]);
  function b({ draggedDistance: _, closeDrawer: P, velocity: O, dismissible: B }) {
    if (s === void 0) return;
    const W = d === "bottom" || d === "right" ? (C ?? 0) - _ : (C ?? 0) + _, U = y === s - 1, $ = y === 0, H = _ > 0;
    if (U && Ge(l.current, {
      transition: `opacity ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`
    }), O > 2 && !H) {
      B ? P() : E(x[0]);
      return;
    }
    if (O > 2 && H && x && r) {
      E(x[r.length - 1]);
      return;
    }
    const ne = x == null ? void 0 : x.reduce((te, re) => typeof te != "number" || typeof re != "number" ? te : Math.abs(re - W) < Math.abs(te - W) ? re : te), Y = st(d) ? window.innerHeight : window.innerWidth;
    if (O > Vg && Math.abs(_) < Y * 0.4) {
      const te = H ? 1 : -1;
      if (te > 0 && g) {
        E(x[r.length - 1]);
        return;
      }
      if ($ && te < 0 && B && P(), y === null) return;
      E(x[y + te]);
      return;
    }
    E(ne);
  }
  function F({ draggedDistance: _ }) {
    if (C === null) return;
    const P = d === "bottom" || d === "right" ? C - _ : C + _;
    (d === "bottom" || d === "right") && P < x[x.length - 1] || (d === "top" || d === "left") && P > x[x.length - 1] || Ge(i.current, {
      transform: st(d) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
    });
  }
  function k(_, P) {
    if (!r || typeof y != "number" || !x || s === void 0) return null;
    const O = y === s - 1;
    if (y >= s && P)
      return 0;
    if (O && !P) return 1;
    if (!D && !O) return null;
    const W = O ? y + 1 : y - 1, U = O ? x[W] - x[W - 1] : x[W + 1] - x[W], $ = _ / Math.abs(U);
    return O ? 1 - $ : $;
  }
  return {
    isLastSnapPoint: g,
    activeSnapPoint: p,
    shouldFade: D,
    getPercentageDragged: k,
    setActiveSnapPoint: v,
    activeSnapPointIndex: y,
    onRelease: b,
    onDrag: F,
    snapPointsOffset: x
  };
}
const zE = 0.25, $E = 100, Uh = 8, Do = 16, Yh = 26, Yc = "vaul-dragging";
function Yg({ open: e, onOpenChange: n, children: r, shouldScaleBackground: i, onDrag: l, onRelease: s, snapPoints: c, nested: d = !1, setBackgroundColorOnScale: p = !0, closeThreshold: v = zE, scrollLockTimeout: g = $E, dismissible: D = !0, handleOnly: y = !1, fadeFromIndex: x = c && c.length - 1, activeSnapPoint: C, setActiveSnapPoint: E, fixed: b, modal: F = !0, onClose: k, noBodyStyles: _, direction: P = "bottom", preventScrollRestoration: O = !0, disablePreventScroll: B = !1 }) {
  var W;
  const [U = !1, $] = oe.useState(!1), [H, ne] = oe.useState(!1), [Y, te] = oe.useState(!1), [re, ae] = oe.useState(!1), [le, z] = oe.useState(!1), [R, X] = oe.useState(!1), q = oe.useRef(null), A = oe.useRef(null), V = oe.useRef(null), ye = oe.useRef(null), pe = oe.useRef(null), xe = oe.useRef(!1), De = oe.useRef(null), ee = oe.useRef(0), ue = oe.useRef(!1), Ce = oe.useRef(0), Z = oe.useRef(null), Ne = oe.useRef(((W = Z.current) == null ? void 0 : W.getBoundingClientRect().height) || 0), je = oe.useRef(0), tt = oe.useCallback((me) => {
    c && me === qt.length - 1 && (A.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: dt, activeSnapPointIndex: wt, setActiveSnapPoint: zt, onRelease: $t, snapPointsOffset: qt, onDrag: Jt, shouldFade: bn, getPercentageDragged: Fn } = WE({
    snapPoints: c,
    activeSnapPointProp: C,
    setActiveSnapPointProp: E,
    drawerRef: Z,
    fadeFromIndex: x,
    overlayRef: q,
    onSnapPointChange: tt,
    direction: P
  });
  jE({
    isDisabled: !U || le || !F || R || !H || B
  });
  const { restorePositionSetting: eo } = ME({
    isOpen: U,
    modal: F,
    nested: d,
    hasBeenOpened: H,
    preventScrollRestoration: O,
    noBodyStyles: _
  });
  function un() {
    return (window.innerWidth - Yh) / window.innerWidth;
  }
  function Io(me) {
    var Se;
    !D && !c || Z.current && !Z.current.contains(me.target) || (Ne.current = ((Se = Z.current) == null ? void 0 : Se.getBoundingClientRect().height) || 0, z(!0), V.current = /* @__PURE__ */ new Date(), Bg() && window.addEventListener("touchend", () => xe.current = !1, {
      once: !0
    }), me.target.setPointerCapture(me.pointerId), ee.current = st(P) ? me.clientY : me.clientX);
  }
  function to(me, Se) {
    var Le;
    let be = me;
    const We = (Le = window.getSelection()) == null ? void 0 : Le.toString(), $e = Z.current ? os(Z.current, P) : null, nt = /* @__PURE__ */ new Date();
    if (be.hasAttribute("data-vaul-no-drag") || be.closest("[data-vaul-no-drag]"))
      return !1;
    if (P === "right" || P === "left")
      return !0;
    if (A.current && nt.getTime() - A.current.getTime() < 500)
      return !1;
    if ($e !== null && (P === "bottom" ? $e > 0 : $e < 0))
      return !0;
    if (We && We.length > 0)
      return !1;
    if (pe.current && nt.getTime() - pe.current.getTime() < g && $e === 0 || Se)
      return pe.current = nt, !1;
    for (; be; ) {
      if (be.scrollHeight > be.clientHeight) {
        if (be.scrollTop !== 0)
          return pe.current = /* @__PURE__ */ new Date(), !1;
        if (be.getAttribute("role") === "dialog")
          return !0;
      }
      be = be.parentNode;
    }
    return !0;
  }
  function Bo(me) {
    if (Z.current && le) {
      const Se = P === "bottom" || P === "right" ? 1 : -1, Le = (ee.current - (st(P) ? me.clientY : me.clientX)) * Se, be = Le > 0, We = c && !D && !be;
      if (We && wt === 0) return;
      const $e = Math.abs(Le), nt = document.querySelector("[vaul-drawer-wrapper]");
      let he = $e / Ne.current;
      const Ye = Fn($e, be);
      if (Ye !== null && (he = Ye), We && he >= 1 || !xe.current && !to(me.target, be)) return;
      if (Z.current.classList.add(Yc), xe.current = !0, Ge(Z.current, {
        transition: "none"
      }), Ge(q.current, {
        transition: "none"
      }), c && Jt({
        draggedDistance: Le
      }), be && !c) {
        const He = LE(Le), cn = Math.min(He * -1, 0) * Se;
        Ge(Z.current, {
          transform: st(P) ? `translate3d(0, ${cn}px, 0)` : `translate3d(${cn}px, 0, 0)`
        });
        return;
      }
      const at = 1 - he;
      if ((bn || x && wt === x - 1) && (l == null || l(me, he), Ge(q.current, {
        opacity: `${at}`,
        transition: "none"
      }, !0)), nt && q.current && i) {
        const He = Math.min(un() + he * (1 - un()), 1), cn = 8 - he * 8, vt = Math.max(0, 14 - he * 14);
        Ge(nt, {
          borderRadius: `${cn}px`,
          transform: st(P) ? `scale(${He}) translate3d(0, ${vt}px, 0)` : `scale(${He}) translate3d(${vt}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!c) {
        const He = $e * Se;
        Ge(Z.current, {
          transform: st(P) ? `translate3d(0, ${He}px, 0)` : `translate3d(${He}px, 0, 0)`
        });
      }
    }
  }
  oe.useEffect(() => () => {
    Pt(!1), eo();
  }, []), oe.useEffect(() => {
    var me;
    function Se() {
      if (!Z.current) return;
      const Le = document.activeElement;
      if (md(Le) || ue.current) {
        var be;
        const We = ((be = window.visualViewport) == null ? void 0 : be.height) || 0;
        let $e = window.innerHeight - We;
        const nt = Z.current.getBoundingClientRect().height || 0;
        je.current || (je.current = nt);
        const he = Z.current.getBoundingClientRect().top;
        if (Math.abs(Ce.current - $e) > 60 && (ue.current = !ue.current), c && c.length > 0 && qt && wt) {
          const Ye = qt[wt] || 0;
          $e += Ye;
        }
        if (Ce.current = $e, nt > We || ue.current) {
          const Ye = Z.current.getBoundingClientRect().height;
          let at = Ye;
          Ye > We && (at = We - Yh), b ? Z.current.style.height = `${Ye - Math.max($e, 0)}px` : Z.current.style.height = `${Math.max(at, We - he)}px`;
        } else
          Z.current.style.height = `${je.current}px`;
        c && c.length > 0 && !ue.current ? Z.current.style.bottom = "0px" : Z.current.style.bottom = `${Math.max($e, 0)}px`;
      }
    }
    return (me = window.visualViewport) == null || me.addEventListener("resize", Se), () => {
      var Le;
      return (Le = window.visualViewport) == null ? void 0 : Le.removeEventListener("resize", Se);
    };
  }, [
    wt,
    c,
    qt
  ]);
  function Zt() {
    Z.current && (hr(), k == null || k(), Ge(Z.current, {
      transform: st(P) ? `translate3d(0, ${P === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${P === "right" ? "100%" : "-100%"}, 0, 0)`,
      transition: `transform ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`
    }), Ge(q.current, {
      opacity: "0",
      transition: `opacity ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`
    }), Pt(!1), setTimeout(() => {
      te(!1), $(!1);
    }, 300), setTimeout(() => {
      c && zt(c[0]);
    }, ze.DURATION * 1e3));
  }
  oe.useEffect(() => {
    if (!U && i) {
      const me = setTimeout(() => {
        rs(document.body);
      }, 200);
      return () => clearTimeout(me);
    }
  }, [
    U,
    i
  ]), Ig(() => {
    e ? ($(!0), ne(!0)) : Zt();
  }, [
    e
  ]), oe.useEffect(() => {
    re && (n == null || n(U));
  }, [
    U
  ]), oe.useEffect(() => {
    ae(!0);
  }, []);
  function $n() {
    if (!Z.current) return;
    const me = document.querySelector("[vaul-drawer-wrapper]"), Se = os(Z.current, P);
    Ge(Z.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`
    }), Ge(q.current, {
      transition: `opacity ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      opacity: "1"
    }), i && Se && Se > 0 && U && Ge(me, {
      borderRadius: `${Uh}px`,
      overflow: "hidden",
      ...st(P) ? {
        transform: `scale(${un()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${un()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${ze.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${ze.EASE.join(",")})`
    }, !0);
  }
  function hr() {
    !le || !Z.current || (Z.current.classList.remove(Yc), xe.current = !1, z(!1), ye.current = /* @__PURE__ */ new Date());
  }
  function kn(me) {
    if (!le || !Z.current) return;
    Z.current.classList.remove(Yc), xe.current = !1, z(!1), ye.current = /* @__PURE__ */ new Date();
    const Se = os(Z.current, P);
    if (!to(me.target, !1) || !Se || Number.isNaN(Se) || V.current === null) return;
    const Le = ye.current.getTime() - V.current.getTime(), be = ee.current - (st(P) ? me.clientY : me.clientX), We = Math.abs(be) / Le;
    if (We > 0.05 && (X(!0), setTimeout(() => {
      X(!1);
    }, 200)), c) {
      $t({
        draggedDistance: be * (P === "bottom" || P === "right" ? 1 : -1),
        closeDrawer: Zt,
        velocity: We,
        dismissible: D
      }), s == null || s(me, !0);
      return;
    }
    if (P === "bottom" || P === "right" ? be > 0 : be < 0) {
      $n(), s == null || s(me, !0);
      return;
    }
    if (We > Vg) {
      Zt(), s == null || s(me, !1);
      return;
    }
    var $e;
    const nt = Math.min(($e = Z.current.getBoundingClientRect().height) != null ? $e : 0, window.innerHeight);
    if (Se >= nt * v) {
      Zt(), s == null || s(me, !1);
      return;
    }
    s == null || s(me, !0), $n();
  }
  oe.useEffect(() => {
    U && (Ge(document.documentElement, {
      scrollBehavior: "auto"
    }), A.current = /* @__PURE__ */ new Date(), Pt(!0));
  }, [
    U
  ]), oe.useEffect(() => {
    if (Z.current && Y) {
      var me;
      const Se = Z == null || (me = Z.current) == null ? void 0 : me.querySelectorAll("*");
      Se == null || Se.forEach((Le) => {
        const be = Le;
        (be.scrollHeight > be.clientHeight || be.scrollWidth > be.clientWidth) && be.classList.add("vaul-scrollable");
      });
    }
  }, [
    Y
  ]);
  function Pt(me) {
    const Se = document.querySelector("[vaul-drawer-wrapper]");
    !Se || !i || (me ? (p && (_ || (Ge(document.body, {
      background: document.body.style.backgroundColor || document.body.style.background
    }), Ge(document.body, {
      background: "black"
    }, !0))), Ge(Se, {
      borderRadius: `${Uh}px`,
      overflow: "hidden",
      ...st(P) ? {
        transform: `scale(${un()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${un()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${ze.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${ze.EASE.join(",")})`
    })) : (rs(Se, "overflow"), rs(Se, "transform"), rs(Se, "borderRadius"), Ge(Se, {
      transitionProperty: "transform, border-radius",
      transitionDuration: `${ze.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${ze.EASE.join(",")})`
    })));
  }
  function vr(me) {
    const Se = me ? (window.innerWidth - Do) / window.innerWidth : 1, Le = me ? -Do : 0;
    De.current && window.clearTimeout(De.current), Ge(Z.current, {
      transition: `transform ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      transform: `scale(${Se}) translate3d(0, ${Le}px, 0)`
    }), !me && Z.current && (De.current = setTimeout(() => {
      const be = os(Z.current, P);
      Ge(Z.current, {
        transition: "none",
        transform: st(P) ? `translate3d(0, ${be}px, 0)` : `translate3d(${be}px, 0, 0)`
      });
    }, 500));
  }
  function gr(me, Se) {
    if (Se < 0) return;
    const Le = st(P) ? window.innerHeight : window.innerWidth, be = (Le - Do) / Le, We = be + Se * (1 - be), $e = -Do + Se * Do;
    Ge(Z.current, {
      transform: st(P) ? `scale(${We}) translate3d(0, ${$e}px, 0)` : `scale(${We}) translate3d(${$e}px, 0, 0)`,
      transition: "none"
    });
  }
  function yr(me, Se) {
    const Le = st(P) ? window.innerHeight : window.innerWidth, be = Se ? (Le - Do) / Le : 1, We = Se ? -Do : 0;
    Se && Ge(Z.current, {
      transition: `transform ${ze.DURATION}s cubic-bezier(${ze.EASE.join(",")})`,
      transform: st(P) ? `scale(${be}) translate3d(0, ${We}px, 0)` : `scale(${be}) translate3d(${We}px, 0, 0)`
    });
  }
  return /* @__PURE__ */ oe.createElement(Tg, {
    modal: F,
    onOpenChange: (me) => {
      if (e !== void 0) {
        n == null || n(me);
        return;
      }
      me ? (ne(!0), $(me)) : Zt();
    },
    open: U
  }, /* @__PURE__ */ oe.createElement(Lg.Provider, {
    value: {
      visible: Y,
      activeSnapPoint: dt,
      snapPoints: c,
      setActiveSnapPoint: zt,
      drawerRef: Z,
      overlayRef: q,
      scaleBackground: Pt,
      onOpenChange: n,
      onPress: Io,
      setVisible: te,
      onRelease: kn,
      onDrag: Bo,
      dismissible: D,
      handleOnly: y,
      isOpen: U,
      isDragging: le,
      shouldFade: bn,
      closeDrawer: Zt,
      onNestedDrag: gr,
      onNestedOpenChange: vr,
      onNestedRelease: yr,
      keyboardIsOpen: ue,
      openProp: e,
      modal: F,
      snapPointsOffset: qt,
      direction: P
    }
  }, r));
}
const HE = 250, VE = 120, Kg = /* @__PURE__ */ oe.forwardRef(function({ preventCycle: e = !1, children: n, ...r }, i) {
  const { visible: l, closeDrawer: s, isDragging: c, snapPoints: d, activeSnapPoint: p, setActiveSnapPoint: v, dismissible: g, handleOnly: D, onPress: y, onDrag: x } = js(), C = oe.useRef(null), E = oe.useRef(!1);
  function b() {
    if (E.current) {
      _();
      return;
    }
    window.setTimeout(() => {
      F();
    }, VE);
  }
  function F() {
    if (c || e || E.current) {
      _();
      return;
    }
    if (_(), (!d || d.length === 0) && g) {
      s();
      return;
    }
    if (p === d[d.length - 1] && g) {
      s();
      return;
    }
    const O = d.findIndex((W) => W === p);
    if (O === -1) return;
    const B = d[O + 1];
    v(B);
  }
  function k() {
    C.current = window.setTimeout(() => {
      E.current = !0;
    }, HE);
  }
  function _() {
    window.clearTimeout(C.current), E.current = !1;
  }
  return /* @__PURE__ */ oe.createElement("div", {
    onClick: b,
    onDoubleClick: () => {
      E.current = !0, s();
    },
    onPointerCancel: _,
    onPointerDown: (P) => {
      D && y(P), k();
    },
    onPointerMove: (P) => {
      D && x(P);
    },
    // onPointerUp is already handled by the content component
    ref: i,
    "vaul-drawer-visible": l ? "true" : "false",
    "vaul-handle": "",
    "aria-hidden": "true",
    ...r
  }, /* @__PURE__ */ oe.createElement("span", {
    "vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, n));
});
Kg.displayName = "Drawer.Handle";
const Qg = /* @__PURE__ */ oe.forwardRef(function({ children: e, ...n }, r) {
  const { overlayRef: i, snapPoints: l, onRelease: s, shouldFade: c, isOpen: d, visible: p } = js(), v = $g(r, i), g = l && l.length > 0;
  return /* @__PURE__ */ oe.createElement(Ud, {
    onMouseUp: s,
    ref: v,
    "vaul-drawer-visible": p ? "true" : "false",
    "vaul-overlay": "",
    "vaul-snap-points": d && g ? "true" : "false",
    "vaul-snap-points-overlay": d && c ? "true" : "false",
    ...n
  });
});
Qg.displayName = "Drawer.Overlay";
const Xg = /* @__PURE__ */ oe.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: n, onAnimationEnd: r, style: i, ...l }, s) {
  const { drawerRef: c, onPress: d, onRelease: p, onDrag: v, dismissible: g, keyboardIsOpen: D, snapPointsOffset: y, visible: x, closeDrawer: C, modal: E, openProp: b, onOpenChange: F, setVisible: k, handleOnly: _, direction: P } = js(), O = $g(s, c), B = oe.useRef(null), W = oe.useRef(!1), U = ($, H, ne = 0) => {
    if (W.current) return !0;
    const Y = Math.abs($.y), te = Math.abs($.x), re = te > Y, ae = [
      "bottom",
      "right"
    ].includes(H) ? 1 : -1;
    if (H === "left" || H === "right") {
      if (!($.x * ae < 0) && te >= 0 && te <= ne)
        return re;
    } else if (!($.y * ae < 0) && Y >= 0 && Y <= ne)
      return !re;
    return W.current = !0, !0;
  };
  return oe.useEffect(() => {
    k(!0);
  }, []), /* @__PURE__ */ oe.createElement(Yd, {
    "vaul-drawer": "",
    "vaul-drawer-direction": P,
    "vaul-drawer-visible": x ? "true" : "false",
    ...l,
    ref: O,
    style: y && y.length > 0 ? {
      "--snap-point-height": `${y[0]}px`,
      ...i
    } : i,
    onOpenAutoFocus: ($) => {
      if (e)
        e($);
      else {
        var H;
        $.preventDefault(), (H = c.current) == null || H.focus();
      }
    },
    onPointerDown: ($) => {
      _ || (l.onPointerDown == null || l.onPointerDown.call(l, $), B.current = {
        x: $.clientX,
        y: $.clientY
      }, d($));
    },
    onPointerDownOutside: ($) => {
      if (n == null || n($), !E || $.defaultPrevented) {
        $.preventDefault();
        return;
      }
      D.current && (D.current = !1), $.preventDefault(), F == null || F(!1), !(!g || b !== void 0) && C();
    },
    onFocusOutside: ($) => {
      if (!E) {
        $.preventDefault();
        return;
      }
    },
    onEscapeKeyDown: ($) => {
      if (!E) {
        $.preventDefault();
        return;
      }
    },
    onPointerMove: ($) => {
      if (_ || (l.onPointerMove == null || l.onPointerMove.call(l, $), !B.current)) return;
      const H = $.clientY - B.current.y, ne = $.clientX - B.current.x, Y = $.pointerType === "touch" ? 10 : 2;
      U({
        x: ne,
        y: H
      }, P, Y) ? v($) : (Math.abs(ne) > Y || Math.abs(H) > Y) && (B.current = null);
    },
    onPointerUp: ($) => {
      l.onPointerUp == null || l.onPointerUp.call(l, $), B.current = null, W.current = !1, p($);
    }
  });
});
Xg.displayName = "Drawer.Content";
function UE({ onDrag: e, onOpenChange: n, ...r }) {
  const { onNestedDrag: i, onNestedOpenChange: l, onNestedRelease: s } = js();
  if (!i)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return /* @__PURE__ */ oe.createElement(Yg, {
    nested: !0,
    onClose: () => {
      l(!1);
    },
    onDrag: (c, d) => {
      i(c, d), e == null || e(c, d);
    },
    onOpenChange: (c) => {
      c && l(c), n == null || n(c);
    },
    onRelease: s,
    ...r
  });
}
const lr = {
  Root: Yg,
  NestedRoot: UE,
  Content: Xg,
  Handle: Kg,
  Overlay: Qg,
  Trigger: Rg,
  Portal: Mg,
  Close: bE,
  Title: Kd,
  Description: Qd
}, Gg = ({
  shouldScaleBackground: e = !0,
  ...n
}) => /* @__PURE__ */ m.jsx(lr.Root, { shouldScaleBackground: e, ...n });
Gg.displayName = "Drawer";
const YE = lr.Portal, qg = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  lr.Overlay,
  {
    ref: r,
    className: ke("fixed inset-0 z-50 bg-black/80", e),
    ...n
  }
));
qg.displayName = lr.Overlay.displayName;
const Jg = w.forwardRef(({ className: e, children: n, ...r }, i) => /* @__PURE__ */ m.jsxs(YE, { children: [
  /* @__PURE__ */ m.jsx(qg, {}),
  /* @__PURE__ */ m.jsxs(
    lr.Content,
    {
      ref: i,
      className: ke(
        "fixed inset-x-0 bottom-10 min-h-[90%] max-h-[95%] z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ m.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        n
      ]
    }
  )
] }));
Jg.displayName = "DrawerContent";
const Zg = ({
  className: e,
  ...n
}) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: ke("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...n
  }
);
Zg.displayName = "DrawerHeader";
const e0 = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  lr.Title,
  {
    ref: r,
    className: ke("text-lg font-semibold leading-none tracking-tight", e),
    ...n
  }
));
e0.displayName = lr.Title.displayName;
const KE = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  lr.Description,
  {
    ref: r,
    className: ke("text-sm text-muted-foreground", e),
    ...n
  }
));
KE.displayName = lr.Description.displayName;
var QE = w.createContext(void 0);
function t0(e) {
  const n = w.useContext(QE);
  return e || n || "ltr";
}
function hd(e, [n, r]) {
  return Math.min(r, Math.max(n, e));
}
function XE(e, n) {
  return w.useReducer((r, i) => n[r][i] ?? r, e);
}
var Gd = "ScrollArea", [n0, Bj] = Qr(Gd), [GE, sn] = n0(Gd), r0 = w.forwardRef(
  (e, n) => {
    const {
      __scopeScrollArea: r,
      type: i = "hover",
      dir: l,
      scrollHideDelay: s = 600,
      ...c
    } = e, [d, p] = w.useState(null), [v, g] = w.useState(null), [D, y] = w.useState(null), [x, C] = w.useState(null), [E, b] = w.useState(null), [F, k] = w.useState(0), [_, P] = w.useState(0), [O, B] = w.useState(!1), [W, U] = w.useState(!1), $ = Me(n, (ne) => p(ne)), H = t0(l);
    return /* @__PURE__ */ m.jsx(
      GE,
      {
        scope: r,
        type: i,
        dir: H,
        scrollHideDelay: s,
        scrollArea: d,
        viewport: v,
        onViewportChange: g,
        content: D,
        onContentChange: y,
        scrollbarX: x,
        onScrollbarXChange: C,
        scrollbarXEnabled: O,
        onScrollbarXEnabledChange: B,
        scrollbarY: E,
        onScrollbarYChange: b,
        scrollbarYEnabled: W,
        onScrollbarYEnabledChange: U,
        onCornerWidthChange: k,
        onCornerHeightChange: P,
        children: /* @__PURE__ */ m.jsx(
          Ae.div,
          {
            dir: H,
            ...c,
            ref: $,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": F + "px",
              "--radix-scroll-area-corner-height": _ + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
r0.displayName = Gd;
var o0 = "ScrollAreaViewport", i0 = w.forwardRef(
  (e, n) => {
    const { __scopeScrollArea: r, children: i, nonce: l, ...s } = e, c = sn(o0, r), d = w.useRef(null), p = Me(n, d, c.onViewportChange);
    return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: l
        }
      ),
      /* @__PURE__ */ m.jsx(
        Ae.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...s,
          ref: p,
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
            overflowX: c.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: c.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ m.jsx("div", { ref: c.onContentChange, style: { minWidth: "100%", display: "table" }, children: i })
        }
      )
    ] });
  }
);
i0.displayName = o0;
var Bn = "ScrollAreaScrollbar", qd = w.forwardRef(
  (e, n) => {
    const { forceMount: r, ...i } = e, l = sn(Bn, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: c } = l, d = e.orientation === "horizontal";
    return w.useEffect(() => (d ? s(!0) : c(!0), () => {
      d ? s(!1) : c(!1);
    }), [d, s, c]), l.type === "hover" ? /* @__PURE__ */ m.jsx(qE, { ...i, ref: n, forceMount: r }) : l.type === "scroll" ? /* @__PURE__ */ m.jsx(JE, { ...i, ref: n, forceMount: r }) : l.type === "auto" ? /* @__PURE__ */ m.jsx(a0, { ...i, ref: n, forceMount: r }) : l.type === "always" ? /* @__PURE__ */ m.jsx(Jd, { ...i, ref: n }) : null;
  }
);
qd.displayName = Bn;
var qE = w.forwardRef((e, n) => {
  const { forceMount: r, ...i } = e, l = sn(Bn, e.__scopeScrollArea), [s, c] = w.useState(!1);
  return w.useEffect(() => {
    const d = l.scrollArea;
    let p = 0;
    if (d) {
      const v = () => {
        window.clearTimeout(p), c(!0);
      }, g = () => {
        p = window.setTimeout(() => c(!1), l.scrollHideDelay);
      };
      return d.addEventListener("pointerenter", v), d.addEventListener("pointerleave", g), () => {
        window.clearTimeout(p), d.removeEventListener("pointerenter", v), d.removeEventListener("pointerleave", g);
      };
    }
  }, [l.scrollArea, l.scrollHideDelay]), /* @__PURE__ */ m.jsx(En, { present: r || s, children: /* @__PURE__ */ m.jsx(
    a0,
    {
      "data-state": s ? "visible" : "hidden",
      ...i,
      ref: n
    }
  ) });
}), JE = w.forwardRef((e, n) => {
  const { forceMount: r, ...i } = e, l = sn(Bn, e.__scopeScrollArea), s = e.orientation === "horizontal", c = Os(() => p("SCROLL_END"), 100), [d, p] = XE("hidden", {
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
  return w.useEffect(() => {
    if (d === "idle") {
      const v = window.setTimeout(() => p("HIDE"), l.scrollHideDelay);
      return () => window.clearTimeout(v);
    }
  }, [d, l.scrollHideDelay, p]), w.useEffect(() => {
    const v = l.viewport, g = s ? "scrollLeft" : "scrollTop";
    if (v) {
      let D = v[g];
      const y = () => {
        const x = v[g];
        D !== x && (p("SCROLL"), c()), D = x;
      };
      return v.addEventListener("scroll", y), () => v.removeEventListener("scroll", y);
    }
  }, [l.viewport, s, p, c]), /* @__PURE__ */ m.jsx(En, { present: r || d !== "hidden", children: /* @__PURE__ */ m.jsx(
    Jd,
    {
      "data-state": d === "hidden" ? "hidden" : "visible",
      ...i,
      ref: n,
      onPointerEnter: Pe(e.onPointerEnter, () => p("POINTER_ENTER")),
      onPointerLeave: Pe(e.onPointerLeave, () => p("POINTER_LEAVE"))
    }
  ) });
}), a0 = w.forwardRef((e, n) => {
  const r = sn(Bn, e.__scopeScrollArea), { forceMount: i, ...l } = e, [s, c] = w.useState(!1), d = e.orientation === "horizontal", p = Os(() => {
    if (r.viewport) {
      const v = r.viewport.offsetWidth < r.viewport.scrollWidth, g = r.viewport.offsetHeight < r.viewport.scrollHeight;
      c(d ? v : g);
    }
  }, 10);
  return bi(r.viewport, p), bi(r.content, p), /* @__PURE__ */ m.jsx(En, { present: i || s, children: /* @__PURE__ */ m.jsx(
    Jd,
    {
      "data-state": s ? "visible" : "hidden",
      ...l,
      ref: n
    }
  ) });
}), Jd = w.forwardRef((e, n) => {
  const { orientation: r = "vertical", ...i } = e, l = sn(Bn, e.__scopeScrollArea), s = w.useRef(null), c = w.useRef(0), [d, p] = w.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), v = d0(d.viewport, d.content), g = {
    ...i,
    sizes: d,
    onSizesChange: p,
    hasThumb: v > 0 && v < 1,
    onThumbChange: (y) => s.current = y,
    onThumbPointerUp: () => c.current = 0,
    onThumbPointerDown: (y) => c.current = y
  };
  function D(y, x) {
    return oS(y, c.current, d, x);
  }
  return r === "horizontal" ? /* @__PURE__ */ m.jsx(
    ZE,
    {
      ...g,
      ref: n,
      onThumbPositionChange: () => {
        if (l.viewport && s.current) {
          const y = l.viewport.scrollLeft, x = Kh(y, d, l.dir);
          s.current.style.transform = `translate3d(${x}px, 0, 0)`;
        }
      },
      onWheelScroll: (y) => {
        l.viewport && (l.viewport.scrollLeft = y);
      },
      onDragScroll: (y) => {
        l.viewport && (l.viewport.scrollLeft = D(y, l.dir));
      }
    }
  ) : r === "vertical" ? /* @__PURE__ */ m.jsx(
    eS,
    {
      ...g,
      ref: n,
      onThumbPositionChange: () => {
        if (l.viewport && s.current) {
          const y = l.viewport.scrollTop, x = Kh(y, d);
          s.current.style.transform = `translate3d(0, ${x}px, 0)`;
        }
      },
      onWheelScroll: (y) => {
        l.viewport && (l.viewport.scrollTop = y);
      },
      onDragScroll: (y) => {
        l.viewport && (l.viewport.scrollTop = D(y));
      }
    }
  ) : null;
}), ZE = w.forwardRef((e, n) => {
  const { sizes: r, onSizesChange: i, ...l } = e, s = sn(Bn, e.__scopeScrollArea), [c, d] = w.useState(), p = w.useRef(null), v = Me(n, p, s.onScrollbarXChange);
  return w.useEffect(() => {
    p.current && d(getComputedStyle(p.current));
  }, [p]), /* @__PURE__ */ m.jsx(
    s0,
    {
      "data-orientation": "horizontal",
      ...l,
      ref: v,
      sizes: r,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": As(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (g) => e.onThumbPointerDown(g.x),
      onDragScroll: (g) => e.onDragScroll(g.x),
      onWheelScroll: (g, D) => {
        if (s.viewport) {
          const y = s.viewport.scrollLeft + g.deltaX;
          e.onWheelScroll(y), p0(y, D) && g.preventDefault();
        }
      },
      onResize: () => {
        p.current && s.viewport && c && i({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: p.current.clientWidth,
            paddingStart: gs(c.paddingLeft),
            paddingEnd: gs(c.paddingRight)
          }
        });
      }
    }
  );
}), eS = w.forwardRef((e, n) => {
  const { sizes: r, onSizesChange: i, ...l } = e, s = sn(Bn, e.__scopeScrollArea), [c, d] = w.useState(), p = w.useRef(null), v = Me(n, p, s.onScrollbarYChange);
  return w.useEffect(() => {
    p.current && d(getComputedStyle(p.current));
  }, [p]), /* @__PURE__ */ m.jsx(
    s0,
    {
      "data-orientation": "vertical",
      ...l,
      ref: v,
      sizes: r,
      style: {
        top: 0,
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": As(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (g) => e.onThumbPointerDown(g.y),
      onDragScroll: (g) => e.onDragScroll(g.y),
      onWheelScroll: (g, D) => {
        if (s.viewport) {
          const y = s.viewport.scrollTop + g.deltaY;
          e.onWheelScroll(y), p0(y, D) && g.preventDefault();
        }
      },
      onResize: () => {
        p.current && s.viewport && c && i({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: p.current.clientHeight,
            paddingStart: gs(c.paddingTop),
            paddingEnd: gs(c.paddingBottom)
          }
        });
      }
    }
  );
}), [tS, l0] = n0(Bn), s0 = w.forwardRef((e, n) => {
  const {
    __scopeScrollArea: r,
    sizes: i,
    hasThumb: l,
    onThumbChange: s,
    onThumbPointerUp: c,
    onThumbPointerDown: d,
    onThumbPositionChange: p,
    onDragScroll: v,
    onWheelScroll: g,
    onResize: D,
    ...y
  } = e, x = sn(Bn, r), [C, E] = w.useState(null), b = Me(n, ($) => E($)), F = w.useRef(null), k = w.useRef(""), _ = x.viewport, P = i.content - i.viewport, O = bt(g), B = bt(p), W = Os(D, 10);
  function U($) {
    if (F.current) {
      const H = $.clientX - F.current.left, ne = $.clientY - F.current.top;
      v({ x: H, y: ne });
    }
  }
  return w.useEffect(() => {
    const $ = (H) => {
      const ne = H.target;
      (C == null ? void 0 : C.contains(ne)) && O(H, P);
    };
    return document.addEventListener("wheel", $, { passive: !1 }), () => document.removeEventListener("wheel", $, { passive: !1 });
  }, [_, C, P, O]), w.useEffect(B, [i, B]), bi(C, W), bi(x.content, W), /* @__PURE__ */ m.jsx(
    tS,
    {
      scope: r,
      scrollbar: C,
      hasThumb: l,
      onThumbChange: bt(s),
      onThumbPointerUp: bt(c),
      onThumbPositionChange: B,
      onThumbPointerDown: bt(d),
      children: /* @__PURE__ */ m.jsx(
        Ae.div,
        {
          ...y,
          ref: b,
          style: { position: "absolute", ...y.style },
          onPointerDown: Pe(e.onPointerDown, ($) => {
            $.button === 0 && ($.target.setPointerCapture($.pointerId), F.current = C.getBoundingClientRect(), k.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", x.viewport && (x.viewport.style.scrollBehavior = "auto"), U($));
          }),
          onPointerMove: Pe(e.onPointerMove, U),
          onPointerUp: Pe(e.onPointerUp, ($) => {
            const H = $.target;
            H.hasPointerCapture($.pointerId) && H.releasePointerCapture($.pointerId), document.body.style.webkitUserSelect = k.current, x.viewport && (x.viewport.style.scrollBehavior = ""), F.current = null;
          })
        }
      )
    }
  );
}), vs = "ScrollAreaThumb", u0 = w.forwardRef(
  (e, n) => {
    const { forceMount: r, ...i } = e, l = l0(vs, e.__scopeScrollArea);
    return /* @__PURE__ */ m.jsx(En, { present: r || l.hasThumb, children: /* @__PURE__ */ m.jsx(nS, { ref: n, ...i }) });
  }
), nS = w.forwardRef(
  (e, n) => {
    const { __scopeScrollArea: r, style: i, ...l } = e, s = sn(vs, r), c = l0(vs, r), { onThumbPositionChange: d } = c, p = Me(
      n,
      (D) => c.onThumbChange(D)
    ), v = w.useRef(), g = Os(() => {
      v.current && (v.current(), v.current = void 0);
    }, 100);
    return w.useEffect(() => {
      const D = s.viewport;
      if (D) {
        const y = () => {
          if (g(), !v.current) {
            const x = iS(D, d);
            v.current = x, d();
          }
        };
        return d(), D.addEventListener("scroll", y), () => D.removeEventListener("scroll", y);
      }
    }, [s.viewport, g, d]), /* @__PURE__ */ m.jsx(
      Ae.div,
      {
        "data-state": c.hasThumb ? "visible" : "hidden",
        ...l,
        ref: p,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...i
        },
        onPointerDownCapture: Pe(e.onPointerDownCapture, (D) => {
          const x = D.target.getBoundingClientRect(), C = D.clientX - x.left, E = D.clientY - x.top;
          c.onThumbPointerDown({ x: C, y: E });
        }),
        onPointerUp: Pe(e.onPointerUp, c.onThumbPointerUp)
      }
    );
  }
);
u0.displayName = vs;
var Zd = "ScrollAreaCorner", c0 = w.forwardRef(
  (e, n) => {
    const r = sn(Zd, e.__scopeScrollArea), i = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && i ? /* @__PURE__ */ m.jsx(rS, { ...e, ref: n }) : null;
  }
);
c0.displayName = Zd;
var rS = w.forwardRef((e, n) => {
  const { __scopeScrollArea: r, ...i } = e, l = sn(Zd, r), [s, c] = w.useState(0), [d, p] = w.useState(0), v = !!(s && d);
  return bi(l.scrollbarX, () => {
    var D;
    const g = ((D = l.scrollbarX) == null ? void 0 : D.offsetHeight) || 0;
    l.onCornerHeightChange(g), p(g);
  }), bi(l.scrollbarY, () => {
    var D;
    const g = ((D = l.scrollbarY) == null ? void 0 : D.offsetWidth) || 0;
    l.onCornerWidthChange(g), c(g);
  }), v ? /* @__PURE__ */ m.jsx(
    Ae.div,
    {
      ...i,
      ref: n,
      style: {
        width: s,
        height: d,
        position: "absolute",
        right: l.dir === "ltr" ? 0 : void 0,
        left: l.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function gs(e) {
  return e ? parseInt(e, 10) : 0;
}
function d0(e, n) {
  const r = e / n;
  return isNaN(r) ? 0 : r;
}
function As(e) {
  const n = d0(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, i = (e.scrollbar.size - r) * n;
  return Math.max(i, 18);
}
function oS(e, n, r, i = "ltr") {
  const l = As(r), s = l / 2, c = n || s, d = l - c, p = r.scrollbar.paddingStart + c, v = r.scrollbar.size - r.scrollbar.paddingEnd - d, g = r.content - r.viewport, D = i === "ltr" ? [0, g] : [g * -1, 0];
  return f0([p, v], D)(e);
}
function Kh(e, n, r = "ltr") {
  const i = As(n), l = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, s = n.scrollbar.size - l, c = n.content - n.viewport, d = s - i, p = r === "ltr" ? [0, c] : [c * -1, 0], v = hd(e, p);
  return f0([0, c], [0, d])(v);
}
function f0(e, n) {
  return (r) => {
    if (e[0] === e[1] || n[0] === n[1]) return n[0];
    const i = (n[1] - n[0]) / (e[1] - e[0]);
    return n[0] + i * (r - e[0]);
  };
}
function p0(e, n) {
  return e > 0 && e < n;
}
var iS = (e, n = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, i = 0;
  return function l() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, c = r.left !== s.left, d = r.top !== s.top;
    (c || d) && n(), r = s, i = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(i);
};
function Os(e, n) {
  const r = bt(e), i = w.useRef(0);
  return w.useEffect(() => () => window.clearTimeout(i.current), []), w.useCallback(() => {
    window.clearTimeout(i.current), i.current = window.setTimeout(r, n);
  }, [r, n]);
}
function bi(e, n) {
  const r = bt(n);
  Ft(() => {
    let i = 0;
    if (e) {
      const l = new ResizeObserver(() => {
        cancelAnimationFrame(i), i = window.requestAnimationFrame(r);
      });
      return l.observe(e), () => {
        window.cancelAnimationFrame(i), l.unobserve(e);
      };
    }
  }, [e, r]);
}
var m0 = r0, aS = i0, lS = c0;
const sS = w.forwardRef(({ className: e, children: n, ...r }, i) => /* @__PURE__ */ m.jsxs(
  m0,
  {
    ref: i,
    className: ke("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ m.jsx(aS, { className: "h-full w-full rounded-[inherit]", children: n }),
      /* @__PURE__ */ m.jsx(h0, {}),
      /* @__PURE__ */ m.jsx(lS, {})
    ]
  }
));
sS.displayName = m0.displayName;
const h0 = w.forwardRef(({ className: e, orientation: n = "vertical", ...r }, i) => /* @__PURE__ */ m.jsx(
  qd,
  {
    ref: i,
    orientation: n,
    className: ke(
      "flex touch-none select-none transition-colors",
      n === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      n === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...r,
    children: /* @__PURE__ */ m.jsx(u0, { className: "relative flex-1 rounded-full bg-border" })
  }
));
h0.displayName = qd.displayName;
function uS(e) {
  const [n, r] = w.useState(!1);
  return w.useEffect(() => {
    function i(s) {
      r(s.matches);
    }
    const l = matchMedia(e);
    return l.addEventListener("change", i), r(l.matches), () => l.removeEventListener("change", i);
  }, [e]), n;
}
var cS = Object.create, Ts = Object.defineProperty, dS = Object.getOwnPropertyDescriptor, fS = Object.getOwnPropertyNames, pS = Object.getPrototypeOf, mS = Object.prototype.hasOwnProperty, v0 = (e) => {
  throw TypeError(e);
}, hS = (e, n) => () => (e && (n = e(e = 0)), n), ef = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports), Rs = (e, n) => {
  for (var r in n) Ts(e, r, { get: n[r], enumerable: !0 });
}, g0 = (e, n, r, i) => {
  if (n && typeof n == "object" || typeof n == "function") for (let l of fS(n)) !mS.call(e, l) && l !== r && Ts(e, l, { get: () => n[l], enumerable: !(i = dS(n, l)) || i.enumerable });
  return e;
}, Ms = (e, n, r) => (r = e != null ? cS(pS(e)) : {}, g0(Ts(r, "default", { value: e, enumerable: !0 }), e)), vS = (e) => g0(Ts({}, "__esModule", { value: !0 }), e), gS = (e, n, r) => n.has(e) || v0("Cannot " + r), yS = (e, n, r) => n.has(e) ? v0("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(e) : n.set(e, r), Ea = (e, n, r) => (gS(e, n, "access private method"), r), tf = ef((e, n) => {
  var r = new Proxy(String, { get: () => r });
  n.exports = r;
}), y0 = {};
Rs(y0, { default: () => w0, shouldHighlight: () => D0 });
var D0, w0, DS = hS(() => {
  D0 = () => !1, w0 = String;
}), wS = ef((e, n) => {
  var r = String, i = function() {
    return { isColorSupported: !1, reset: r, bold: r, dim: r, italic: r, underline: r, inverse: r, hidden: r, strikethrough: r, black: r, red: r, green: r, yellow: r, blue: r, magenta: r, cyan: r, white: r, gray: r, bgBlack: r, bgRed: r, bgGreen: r, bgYellow: r, bgBlue: r, bgMagenta: r, bgCyan: r, bgWhite: r };
  };
  n.exports = i(), n.exports.createColors = i;
}), xS = ef((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.codeFrameColumns = x, e.default = C;
  var n = (DS(), vS(y0)), r = l(wS(), !0);
  function i(E) {
    if (typeof WeakMap != "function") return null;
    var b = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap();
    return (i = function(k) {
      return k ? F : b;
    })(E);
  }
  function l(E, b) {
    if (E === null || typeof E != "object" && typeof E != "function") return { default: E };
    var F = i(b);
    if (F && F.has(E)) return F.get(E);
    var k = { __proto__: null }, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var P in E) if (P !== "default" && {}.hasOwnProperty.call(E, P)) {
      var O = _ ? Object.getOwnPropertyDescriptor(E, P) : null;
      O && (O.get || O.set) ? Object.defineProperty(k, P, O) : k[P] = E[P];
    }
    return k.default = E, F && F.set(E, k), k;
  }
  var s = r.default, c = (E, b) => (F) => E(b(F)), d;
  function p(E) {
    return E ? (d != null || (d = (0, r.createColors)(!0)), d) : s;
  }
  var v = !1;
  function g(E) {
    return { gutter: E.gray, marker: c(E.red, E.bold), message: c(E.red, E.bold) };
  }
  var D = /\r\n|[\n\r\u2028\u2029]/;
  function y(E, b, F) {
    let k = Object.assign({ column: 0, line: -1 }, E.start), _ = Object.assign({}, k, E.end), { linesAbove: P = 2, linesBelow: O = 3 } = F || {}, B = k.line, W = k.column, U = _.line, $ = _.column, H = Math.max(B - (P + 1), 0), ne = Math.min(b.length, U + O);
    B === -1 && (H = 0), U === -1 && (ne = b.length);
    let Y = U - B, te = {};
    if (Y) for (let re = 0; re <= Y; re++) {
      let ae = re + B;
      if (!W) te[ae] = !0;
      else if (re === 0) {
        let le = b[ae - 1].length;
        te[ae] = [W, le - W + 1];
      } else if (re === Y) te[ae] = [0, $];
      else {
        let le = b[ae - re].length;
        te[ae] = [0, le];
      }
    }
    else W === $ ? W ? te[B] = [W, 0] : te[B] = !0 : te[B] = [W, $ - W];
    return { start: H, end: ne, markerLines: te };
  }
  function x(E, b, F = {}) {
    let k = (F.highlightCode || F.forceColor) && (0, n.shouldHighlight)(F), _ = p(F.forceColor), P = g(_), O = (te, re) => k ? te(re) : re, B = E.split(D), { start: W, end: U, markerLines: $ } = y(b, B, F), H = b.start && typeof b.start.column == "number", ne = String(U).length, Y = (k ? (0, n.default)(E, F) : E).split(D, U).slice(W, U).map((te, re) => {
      let ae = W + 1 + re, le = ` ${` ${ae}`.slice(-ne)} |`, z = $[ae], R = !$[ae + 1];
      if (z) {
        let X = "";
        if (Array.isArray(z)) {
          let q = te.slice(0, Math.max(z[0] - 1, 0)).replace(/[^\t]/g, " "), A = z[1] || 1;
          X = [`
 `, O(P.gutter, le.replace(/\d/g, " ")), " ", q, O(P.marker, "^").repeat(A)].join(""), R && F.message && (X += " " + O(P.message, F.message));
        }
        return [O(P.marker, ">"), O(P.gutter, le), te.length > 0 ? ` ${te}` : "", X].join("");
      } else return ` ${O(P.gutter, le)}${te.length > 0 ? ` ${te}` : ""}`;
    }).join(`
`);
    return F.message && !H && (Y = `${" ".repeat(ne + 1)}${F.message}
${Y}`), k ? _.reset(Y) : Y;
  }
  function C(E, b, F, k = {}) {
    if (!v) {
      v = !0;
      let _ = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
      {
        let P = new Error(_);
        P.name = "DeprecationWarning", console.warn(new Error(_));
      }
    }
    return F = Math.max(F, 0), x(E, { start: { column: F, line: b } }, k);
  }
}), CS = {};
Rs(CS, { __debug: () => Sk, check: () => Ck, doc: () => ay, format: () => uy, formatWithCursor: () => sy, getSupportInfo: () => Ek, util: () => ly, version: () => JF });
var ES = (e, n, r, i) => {
  if (!(e && n == null)) return n.replaceAll ? n.replaceAll(r, i) : r.global ? n.replace(r, i) : n.split(r).join(i);
}, Ls = ES;
function Xr() {
}
Xr.prototype = { diff: function(e, n) {
  var r, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = i.callback;
  typeof i == "function" && (l = i, i = {}), this.options = i;
  var s = this;
  function c(_) {
    return l ? (setTimeout(function() {
      l(void 0, _);
    }, 0), !0) : _;
  }
  e = this.castInput(e), n = this.castInput(n), e = this.removeEmpty(this.tokenize(e)), n = this.removeEmpty(this.tokenize(n));
  var d = n.length, p = e.length, v = 1, g = d + p;
  i.maxEditLength && (g = Math.min(g, i.maxEditLength));
  var D = (r = i.timeout) !== null && r !== void 0 ? r : 1 / 0, y = Date.now() + D, x = [{ oldPos: -1, lastComponent: void 0 }], C = this.extractCommon(x[0], n, e, 0);
  if (x[0].oldPos + 1 >= p && C + 1 >= d) return c([{ value: this.join(n), count: n.length }]);
  var E = -1 / 0, b = 1 / 0;
  function F() {
    for (var _ = Math.max(E, -v); _ <= Math.min(b, v); _ += 2) {
      var P = void 0, O = x[_ - 1], B = x[_ + 1];
      O && (x[_ - 1] = void 0);
      var W = !1;
      if (B) {
        var U = B.oldPos - _;
        W = B && 0 <= U && U < d;
      }
      var $ = O && O.oldPos + 1 < p;
      if (!W && !$) {
        x[_] = void 0;
        continue;
      }
      if (!$ || W && O.oldPos + 1 < B.oldPos ? P = s.addToPath(B, !0, void 0, 0) : P = s.addToPath(O, void 0, !0, 1), C = s.extractCommon(P, n, e, _), P.oldPos + 1 >= p && C + 1 >= d) return c(SS(s, P.lastComponent, n, e, s.useLongestToken));
      x[_] = P, P.oldPos + 1 >= p && (b = Math.min(b, _ - 1)), C + 1 >= d && (E = Math.max(E, _ + 1));
    }
    v++;
  }
  if (l) (function _() {
    setTimeout(function() {
      if (v > g || Date.now() > y) return l();
      F() || _();
    }, 0);
  })();
  else for (; v <= g && Date.now() <= y; ) {
    var k = F();
    if (k) return k;
  }
}, addToPath: function(e, n, r, i) {
  var l = e.lastComponent;
  return l && l.added === n && l.removed === r ? { oldPos: e.oldPos + i, lastComponent: { count: l.count + 1, added: n, removed: r, previousComponent: l.previousComponent } } : { oldPos: e.oldPos + i, lastComponent: { count: 1, added: n, removed: r, previousComponent: l } };
}, extractCommon: function(e, n, r, i) {
  for (var l = n.length, s = r.length, c = e.oldPos, d = c - i, p = 0; d + 1 < l && c + 1 < s && this.equals(n[d + 1], r[c + 1]); ) d++, c++, p++;
  return p && (e.lastComponent = { count: p, previousComponent: e.lastComponent }), e.oldPos = c, d;
}, equals: function(e, n) {
  return this.options.comparator ? this.options.comparator(e, n) : e === n || this.options.ignoreCase && e.toLowerCase() === n.toLowerCase();
}, removeEmpty: function(e) {
  for (var n = [], r = 0; r < e.length; r++) e[r] && n.push(e[r]);
  return n;
}, castInput: function(e) {
  return e;
}, tokenize: function(e) {
  return e.split("");
}, join: function(e) {
  return e.join("");
} };
function SS(e, n, r, i, l) {
  for (var s = [], c; n; ) s.push(n), c = n.previousComponent, delete n.previousComponent, n = c;
  s.reverse();
  for (var d = 0, p = s.length, v = 0, g = 0; d < p; d++) {
    var D = s[d];
    if (D.removed) {
      if (D.value = e.join(i.slice(g, g + D.count)), g += D.count, d && s[d - 1].added) {
        var y = s[d - 1];
        s[d - 1] = s[d], s[d] = y;
      }
    } else {
      if (!D.added && l) {
        var x = r.slice(v, v + D.count);
        x = x.map(function(E, b) {
          var F = i[g + b];
          return F.length > E.length ? F : E;
        }), D.value = e.join(x);
      } else D.value = e.join(r.slice(v, v + D.count));
      v += D.count, D.added || (g += D.count);
    }
  }
  var C = s[p - 1];
  return p > 1 && typeof C.value == "string" && (C.added || C.removed) && e.equals("", C.value) && (s[p - 2].value += C.value, s.pop()), s;
}
var Qh = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, Xh = /\S/, x0 = new Xr();
x0.equals = function(e, n) {
  return this.options.ignoreCase && (e = e.toLowerCase(), n = n.toLowerCase()), e === n || this.options.ignoreWhitespace && !Xh.test(e) && !Xh.test(n);
};
x0.tokenize = function(e) {
  for (var n = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), r = 0; r < n.length - 1; r++) !n[r + 1] && n[r + 2] && Qh.test(n[r]) && Qh.test(n[r + 2]) && (n[r] += n[r + 2], n.splice(r + 1, 2), r--);
  return n;
};
var C0 = new Xr();
C0.tokenize = function(e) {
  this.options.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
  var n = [], r = e.split(/(\n|\r\n)/);
  r[r.length - 1] || r.pop();
  for (var i = 0; i < r.length; i++) {
    var l = r[i];
    i % 2 && !this.options.newlineIsToken ? n[n.length - 1] += l : (this.options.ignoreWhitespace && (l = l.trim()), n.push(l));
  }
  return n;
};
var bS = new Xr();
bS.tokenize = function(e) {
  return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var FS = new Xr();
FS.tokenize = function(e) {
  return e.split(/([{}:;,]|\s+)/);
};
function us(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? us = function(n) {
    return typeof n;
  } : us = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, us(e);
}
var kS = Object.prototype.toString, Pa = new Xr();
Pa.useLongestToken = !0;
Pa.tokenize = C0.tokenize;
Pa.castInput = function(e) {
  var n = this.options, r = n.undefinedReplacement, i = n.stringifyReplacer, l = i === void 0 ? function(s, c) {
    return typeof c > "u" ? r : c;
  } : i;
  return typeof e == "string" ? e : JSON.stringify(vd(e, null, null, l), l, "  ");
};
Pa.equals = function(e, n) {
  return Xr.prototype.equals.call(Pa, e.replace(/,([\r\n])/g, "$1"), n.replace(/,([\r\n])/g, "$1"));
};
function vd(e, n, r, i, l) {
  n = n || [], r = r || [], i && (e = i(l, e));
  var s;
  for (s = 0; s < n.length; s += 1) if (n[s] === e) return r[s];
  var c;
  if (kS.call(e) === "[object Array]") {
    for (n.push(e), c = new Array(e.length), r.push(c), s = 0; s < e.length; s += 1) c[s] = vd(e[s], n, r, i, l);
    return n.pop(), r.pop(), c;
  }
  if (e && e.toJSON && (e = e.toJSON()), us(e) === "object" && e !== null) {
    n.push(e), c = {}, r.push(c);
    var d = [], p;
    for (p in e) e.hasOwnProperty(p) && d.push(p);
    for (d.sort(), s = 0; s < d.length; s += 1) p = d[s], c[p] = vd(e[p], n, r, i, p);
    n.pop(), r.pop();
  } else c = e;
  return c;
}
var ys = new Xr();
ys.tokenize = function(e) {
  return e.slice();
};
ys.join = ys.removeEmpty = function(e) {
  return e;
};
function NS(e, n, r) {
  return ys.diff(e, n, r);
}
function _S(e) {
  let n = e.indexOf("\r");
  return n >= 0 ? e.charAt(n + 1) === `
` ? "crlf" : "cr" : "lf";
}
function nf(e) {
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
function E0(e, n) {
  let r;
  switch (n) {
    case `
`:
      r = /\n/gu;
      break;
    case "\r":
      r = /\r/gu;
      break;
    case `\r
`:
      r = /\r\n/gu;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(n)}.`);
  }
  let i = e.match(r);
  return i ? i.length : 0;
}
function PS(e) {
  return Ls(!1, e, /\r\n?/gu, `
`);
}
var Ro = "string", rr = "array", Mo = "cursor", sr = "indent", ur = "align", cr = "trim", Wt = "group", Wn = "fill", Qt = "if-break", dr = "indent-if-break", fr = "line-suffix", pr = "line-suffix-boundary", Dt = "line", zn = "label", ln = "break-parent", S0 = /* @__PURE__ */ new Set([Mo, sr, ur, cr, Wt, Wn, Qt, dr, fr, pr, Dt, zn, ln]);
function jS(e) {
  if (typeof e == "string") return Ro;
  if (Array.isArray(e)) return rr;
  if (!e) return;
  let { type: n } = e;
  if (S0.has(n)) return n;
}
var Lo = jS, AS = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function OS(e) {
  let n = e === null ? "null" : typeof e;
  if (n !== "string" && n !== "object") return `Unexpected doc '${n}', 
Expected it to be 'string' or 'object'.`;
  if (Lo(e)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let i = AS([...S0].map((l) => `'${l}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${i}.`;
}
var TS = class extends Error {
  constructor(n) {
    super(OS(n));
    Gl(this, "name", "InvalidDocError");
    this.doc = n;
  }
}, Fi = TS, Gh = {};
function RS(e, n, r, i) {
  let l = [e];
  for (; l.length > 0; ) {
    let s = l.pop();
    if (s === Gh) {
      r(l.pop());
      continue;
    }
    r && l.push(s, Gh);
    let c = Lo(s);
    if (!c) throw new Fi(s);
    if ((n == null ? void 0 : n(s)) !== !1) switch (c) {
      case rr:
      case Wn: {
        let d = c === rr ? s : s.parts;
        for (let p = d.length, v = p - 1; v >= 0; --v) l.push(d[v]);
        break;
      }
      case Qt:
        l.push(s.flatContents, s.breakContents);
        break;
      case Wt:
        if (i && s.expandedStates) for (let d = s.expandedStates.length, p = d - 1; p >= 0; --p) l.push(s.expandedStates[p]);
        else l.push(s.contents);
        break;
      case ur:
      case sr:
      case dr:
      case zn:
      case fr:
        l.push(s.contents);
        break;
      case Ro:
      case Mo:
      case cr:
      case pr:
      case Dt:
      case ln:
        break;
      default:
        throw new Fi(s);
    }
  }
}
var rf = RS, MS = () => {
}, LS = MS;
function Ds(e) {
  return { type: sr, contents: e };
}
function ki(e, n) {
  return { type: ur, contents: n, n: e };
}
function b0(e, n = {}) {
  return LS(n.expandedStates), { type: Wt, id: n.id, contents: e, break: !!n.shouldBreak, expandedStates: n.expandedStates };
}
function IS(e) {
  return ki(Number.NEGATIVE_INFINITY, e);
}
function BS(e) {
  return ki({ type: "root" }, e);
}
function WS(e) {
  return ki(-1, e);
}
function zS(e, n) {
  return b0(e[0], { ...n, expandedStates: e });
}
function F0(e) {
  return { type: Wn, parts: e };
}
function $S(e, n = "", r = {}) {
  return { type: Qt, breakContents: e, flatContents: n, groupId: r.groupId };
}
function HS(e, n) {
  return { type: dr, contents: e, groupId: n.groupId, negate: n.negate };
}
function gd(e) {
  return { type: fr, contents: e };
}
var VS = { type: pr }, Is = { type: ln }, US = { type: cr }, of = { type: Dt, hard: !0 }, k0 = { type: Dt, hard: !0, literal: !0 }, N0 = { type: Dt }, YS = { type: Dt, soft: !0 }, ko = [of, Is], _0 = [k0, Is], yd = { type: Mo };
function P0(e, n) {
  let r = [];
  for (let i = 0; i < n.length; i++) i !== 0 && r.push(e), r.push(n[i]);
  return r;
}
function j0(e, n, r) {
  let i = e;
  if (n > 0) {
    for (let l = 0; l < Math.floor(n / r); ++l) i = Ds(i);
    i = ki(n % r, i), i = ki(Number.NEGATIVE_INFINITY, i);
  }
  return i;
}
function KS(e, n) {
  return e ? { type: zn, label: e, contents: n } : n;
}
function tr(e) {
  var n;
  if (!e) return "";
  if (Array.isArray(e)) {
    let r = [];
    for (let i of e) if (Array.isArray(i)) r.push(...tr(i));
    else {
      let l = tr(i);
      l !== "" && r.push(l);
    }
    return r;
  }
  return e.type === Qt ? { ...e, breakContents: tr(e.breakContents), flatContents: tr(e.flatContents) } : e.type === Wt ? { ...e, contents: tr(e.contents), expandedStates: (n = e.expandedStates) == null ? void 0 : n.map(tr) } : e.type === Wn ? { type: "fill", parts: e.parts.map(tr) } : e.contents ? { ...e, contents: tr(e.contents) } : e;
}
function QS(e) {
  let n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ new Set();
  return i(tr(e));
  function i(s, c, d) {
    var p, v;
    if (typeof s == "string") return JSON.stringify(s);
    if (Array.isArray(s)) {
      let g = s.map(i).filter(Boolean);
      return g.length === 1 ? g[0] : `[${g.join(", ")}]`;
    }
    if (s.type === Dt) {
      let g = ((p = d == null ? void 0 : d[c + 1]) == null ? void 0 : p.type) === ln;
      return s.literal ? g ? "literalline" : "literallineWithoutBreakParent" : s.hard ? g ? "hardline" : "hardlineWithoutBreakParent" : s.soft ? "softline" : "line";
    }
    if (s.type === ln) return ((v = d == null ? void 0 : d[c - 1]) == null ? void 0 : v.type) === Dt && d[c - 1].hard ? void 0 : "breakParent";
    if (s.type === cr) return "trim";
    if (s.type === sr) return "indent(" + i(s.contents) + ")";
    if (s.type === ur) return s.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + i(s.contents) + ")" : s.n < 0 ? "dedent(" + i(s.contents) + ")" : s.n.type === "root" ? "markAsRoot(" + i(s.contents) + ")" : "align(" + JSON.stringify(s.n) + ", " + i(s.contents) + ")";
    if (s.type === Qt) return "ifBreak(" + i(s.breakContents) + (s.flatContents ? ", " + i(s.flatContents) : "") + (s.groupId ? (s.flatContents ? "" : ', ""') + `, { groupId: ${l(s.groupId)} }` : "") + ")";
    if (s.type === dr) {
      let g = [];
      s.negate && g.push("negate: true"), s.groupId && g.push(`groupId: ${l(s.groupId)}`);
      let D = g.length > 0 ? `, { ${g.join(", ")} }` : "";
      return `indentIfBreak(${i(s.contents)}${D})`;
    }
    if (s.type === Wt) {
      let g = [];
      s.break && s.break !== "propagated" && g.push("shouldBreak: true"), s.id && g.push(`id: ${l(s.id)}`);
      let D = g.length > 0 ? `, { ${g.join(", ")} }` : "";
      return s.expandedStates ? `conditionalGroup([${s.expandedStates.map((y) => i(y)).join(",")}]${D})` : `group(${i(s.contents)}${D})`;
    }
    if (s.type === Wn) return `fill([${s.parts.map((g) => i(g)).join(", ")}])`;
    if (s.type === fr) return "lineSuffix(" + i(s.contents) + ")";
    if (s.type === pr) return "lineSuffixBoundary";
    if (s.type === zn) return `label(${JSON.stringify(s.label)}, ${i(s.contents)})`;
    throw new Error("Unknown doc type " + s.type);
  }
  function l(s) {
    if (typeof s != "symbol") return JSON.stringify(String(s));
    if (s in n) return n[s];
    let c = s.description || "symbol";
    for (let d = 0; ; d++) {
      let p = c + (d > 0 ? ` #${d}` : "");
      if (!r.has(p)) return r.add(p), n[s] = `Symbol.for(${JSON.stringify(p)})`;
    }
  }
}
var XS = (e, n, r) => {
  if (!(e && n == null)) return Array.isArray(n) || typeof n == "string" ? n[r < 0 ? n.length + r : r] : n.at(r);
}, ht = XS, GS = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function qS(e) {
  return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function JS(e) {
  return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9800 && e <= 9811 || e === 9855 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var ZS = (e) => !(qS(e) || JS(e)), eb = /[^\x20-\x7F]/u;
function tb(e) {
  if (!e) return 0;
  if (!eb.test(e)) return e.length;
  e = e.replace(GS(), "  ");
  let n = 0;
  for (let r of e) {
    let i = r.codePointAt(0);
    i <= 31 || i >= 127 && i <= 159 || i >= 768 && i <= 879 || (n += ZS(i) ? 1 : 2);
  }
  return n;
}
var af = tb;
function Bs(e, n) {
  if (typeof e == "string") return n(e);
  let r = /* @__PURE__ */ new Map();
  return i(e);
  function i(s) {
    if (r.has(s)) return r.get(s);
    let c = l(s);
    return r.set(s, c), c;
  }
  function l(s) {
    switch (Lo(s)) {
      case rr:
        return n(s.map(i));
      case Wn:
        return n({ ...s, parts: s.parts.map(i) });
      case Qt:
        return n({ ...s, breakContents: i(s.breakContents), flatContents: i(s.flatContents) });
      case Wt: {
        let { expandedStates: c, contents: d } = s;
        return c ? (c = c.map(i), d = c[0]) : d = i(d), n({ ...s, contents: d, expandedStates: c });
      }
      case ur:
      case sr:
      case dr:
      case zn:
      case fr:
        return n({ ...s, contents: i(s.contents) });
      case Ro:
      case Mo:
      case cr:
      case pr:
      case Dt:
      case ln:
        return n(s);
      default:
        throw new Fi(s);
    }
  }
}
function lf(e, n, r) {
  let i = r, l = !1;
  function s(c) {
    if (l) return !1;
    let d = n(c);
    d !== void 0 && (l = !0, i = d);
  }
  return rf(e, s), i;
}
function nb(e) {
  if (e.type === Wt && e.break || e.type === Dt && e.hard || e.type === ln) return !0;
}
function rb(e) {
  return lf(e, nb, !1);
}
function qh(e) {
  if (e.length > 0) {
    let n = ht(!1, e, -1);
    !n.expandedStates && !n.break && (n.break = "propagated");
  }
  return null;
}
function ob(e) {
  let n = /* @__PURE__ */ new Set(), r = [];
  function i(s) {
    if (s.type === ln && qh(r), s.type === Wt) {
      if (r.push(s), n.has(s)) return !1;
      n.add(s);
    }
  }
  function l(s) {
    s.type === Wt && r.pop().break && qh(r);
  }
  rf(e, i, l, !0);
}
function ib(e) {
  return e.type === Dt && !e.hard ? e.soft ? "" : " " : e.type === Qt ? e.flatContents : e;
}
function ab(e) {
  return Bs(e, ib);
}
function Jh(e) {
  for (e = [...e]; e.length >= 2 && ht(!1, e, -2).type === Dt && ht(!1, e, -1).type === ln; ) e.length -= 2;
  if (e.length > 0) {
    let n = ka(ht(!1, e, -1));
    e[e.length - 1] = n;
  }
  return e;
}
function ka(e) {
  switch (Lo(e)) {
    case sr:
    case dr:
    case Wt:
    case fr:
    case zn: {
      let n = ka(e.contents);
      return { ...e, contents: n };
    }
    case Qt:
      return { ...e, breakContents: ka(e.breakContents), flatContents: ka(e.flatContents) };
    case Wn:
      return { ...e, parts: Jh(e.parts) };
    case rr:
      return Jh(e);
    case Ro:
      return e.replace(/[\n\r]*$/u, "");
    case ur:
    case Mo:
    case cr:
    case pr:
    case Dt:
    case ln:
      break;
    default:
      throw new Fi(e);
  }
  return e;
}
function A0(e) {
  return ka(sb(e));
}
function lb(e) {
  switch (Lo(e)) {
    case Wn:
      if (e.parts.every((n) => n === "")) return "";
      break;
    case Wt:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === Wt && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
      break;
    case ur:
    case sr:
    case dr:
    case fr:
      if (!e.contents) return "";
      break;
    case Qt:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case rr: {
      let n = [];
      for (let r of e) {
        if (!r) continue;
        let [i, ...l] = Array.isArray(r) ? r : [r];
        typeof i == "string" && typeof ht(!1, n, -1) == "string" ? n[n.length - 1] += i : n.push(i), n.push(...l);
      }
      return n.length === 0 ? "" : n.length === 1 ? n[0] : n;
    }
    case Ro:
    case Mo:
    case cr:
    case pr:
    case Dt:
    case zn:
    case ln:
      break;
    default:
      throw new Fi(e);
  }
  return e;
}
function sb(e) {
  return Bs(e, (n) => lb(n));
}
function ub(e, n = _0) {
  return Bs(e, (r) => typeof r == "string" ? P0(n, r.split(`
`)) : r);
}
function cb(e) {
  if (e.type === Dt) return !0;
}
function db(e) {
  return lf(e, cb, !1);
}
function O0(e, n) {
  return e.type === zn ? { ...e, contents: n(e.contents) } : n(e);
}
var Lt = Symbol("MODE_BREAK"), On = Symbol("MODE_FLAT"), Na = Symbol("cursor");
function T0() {
  return { value: "", length: 0, queue: [] };
}
function fb(e, n) {
  return Dd(e, { type: "indent" }, n);
}
function pb(e, n, r) {
  return n === Number.NEGATIVE_INFINITY ? e.root || T0() : n < 0 ? Dd(e, { type: "dedent" }, r) : n ? n.type === "root" ? { ...e, root: e } : Dd(e, { type: typeof n == "string" ? "stringAlign" : "numberAlign", n }, r) : e;
}
function Dd(e, n, r) {
  let i = n.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, n], l = "", s = 0, c = 0, d = 0;
  for (let C of i) switch (C.type) {
    case "indent":
      g(), r.useTabs ? p(1) : v(r.tabWidth);
      break;
    case "stringAlign":
      g(), l += C.n, s += C.n.length;
      break;
    case "numberAlign":
      c += 1, d += C.n;
      break;
    default:
      throw new Error(`Unexpected type '${C.type}'`);
  }
  return y(), { ...e, value: l, length: s, queue: i };
  function p(C) {
    l += "	".repeat(C), s += r.tabWidth * C;
  }
  function v(C) {
    l += " ".repeat(C), s += C;
  }
  function g() {
    r.useTabs ? D() : y();
  }
  function D() {
    c > 0 && p(c), x();
  }
  function y() {
    d > 0 && v(d), x();
  }
  function x() {
    c = 0, d = 0;
  }
}
function wd(e) {
  let n = 0, r = 0, i = e.length;
  e: for (; i--; ) {
    let l = e[i];
    if (l === Na) {
      r++;
      continue;
    }
    for (let s = l.length - 1; s >= 0; s--) {
      let c = l[s];
      if (c === " " || c === "	") n++;
      else {
        e[i] = l.slice(0, s + 1);
        break e;
      }
    }
  }
  if (n > 0 || r > 0) for (e.length = i + 1; r-- > 0; ) e.push(Na);
  return n;
}
function is(e, n, r, i, l, s) {
  if (r === Number.POSITIVE_INFINITY) return !0;
  let c = n.length, d = [e], p = [];
  for (; r >= 0; ) {
    if (d.length === 0) {
      if (c === 0) return !0;
      d.push(n[--c]);
      continue;
    }
    let { mode: v, doc: g } = d.pop(), D = Lo(g);
    switch (D) {
      case Ro:
        p.push(g), r -= af(g);
        break;
      case rr:
      case Wn: {
        let y = D === rr ? g : g.parts;
        for (let x = y.length - 1; x >= 0; x--) d.push({ mode: v, doc: y[x] });
        break;
      }
      case sr:
      case ur:
      case dr:
      case zn:
        d.push({ mode: v, doc: g.contents });
        break;
      case cr:
        r += wd(p);
        break;
      case Wt: {
        if (s && g.break) return !1;
        let y = g.break ? Lt : v, x = g.expandedStates && y === Lt ? ht(!1, g.expandedStates, -1) : g.contents;
        d.push({ mode: y, doc: x });
        break;
      }
      case Qt: {
        let y = (g.groupId ? l[g.groupId] || On : v) === Lt ? g.breakContents : g.flatContents;
        y && d.push({ mode: v, doc: y });
        break;
      }
      case Dt:
        if (v === Lt || g.hard) return !0;
        g.soft || (p.push(" "), r--);
        break;
      case fr:
        i = !0;
        break;
      case pr:
        if (i) return !1;
        break;
    }
  }
  return !1;
}
function Ws(e, n) {
  let r = {}, i = n.printWidth, l = nf(n.endOfLine), s = 0, c = [{ ind: T0(), mode: Lt, doc: e }], d = [], p = !1, v = [], g = 0;
  for (ob(e); c.length > 0; ) {
    let { ind: y, mode: x, doc: C } = c.pop();
    switch (Lo(C)) {
      case Ro: {
        let E = l !== `
` ? Ls(!1, C, `
`, l) : C;
        d.push(E), c.length > 0 && (s += af(E));
        break;
      }
      case rr:
        for (let E = C.length - 1; E >= 0; E--) c.push({ ind: y, mode: x, doc: C[E] });
        break;
      case Mo:
        if (g >= 2) throw new Error("There are too many 'cursor' in doc.");
        d.push(Na), g++;
        break;
      case sr:
        c.push({ ind: fb(y, n), mode: x, doc: C.contents });
        break;
      case ur:
        c.push({ ind: pb(y, C.n, n), mode: x, doc: C.contents });
        break;
      case cr:
        s -= wd(d);
        break;
      case Wt:
        switch (x) {
          case On:
            if (!p) {
              c.push({ ind: y, mode: C.break ? Lt : On, doc: C.contents });
              break;
            }
          case Lt: {
            p = !1;
            let E = { ind: y, mode: On, doc: C.contents }, b = i - s, F = v.length > 0;
            if (!C.break && is(E, c, b, F, r)) c.push(E);
            else if (C.expandedStates) {
              let k = ht(!1, C.expandedStates, -1);
              if (C.break) {
                c.push({ ind: y, mode: Lt, doc: k });
                break;
              } else for (let _ = 1; _ < C.expandedStates.length + 1; _++) if (_ >= C.expandedStates.length) {
                c.push({ ind: y, mode: Lt, doc: k });
                break;
              } else {
                let P = C.expandedStates[_], O = { ind: y, mode: On, doc: P };
                if (is(O, c, b, F, r)) {
                  c.push(O);
                  break;
                }
              }
            } else c.push({ ind: y, mode: Lt, doc: C.contents });
            break;
          }
        }
        C.id && (r[C.id] = ht(!1, c, -1).mode);
        break;
      case Wn: {
        let E = i - s, { parts: b } = C;
        if (b.length === 0) break;
        let [F, k] = b, _ = { ind: y, mode: On, doc: F }, P = { ind: y, mode: Lt, doc: F }, O = is(_, [], E, v.length > 0, r, !0);
        if (b.length === 1) {
          O ? c.push(_) : c.push(P);
          break;
        }
        let B = { ind: y, mode: On, doc: k }, W = { ind: y, mode: Lt, doc: k };
        if (b.length === 2) {
          O ? c.push(B, _) : c.push(W, P);
          break;
        }
        b.splice(0, 2);
        let U = { ind: y, mode: x, doc: F0(b) }, $ = b[0];
        is({ ind: y, mode: On, doc: [F, k, $] }, [], E, v.length > 0, r, !0) ? c.push(U, B, _) : O ? c.push(U, W, _) : c.push(U, W, P);
        break;
      }
      case Qt:
      case dr: {
        let E = C.groupId ? r[C.groupId] : x;
        if (E === Lt) {
          let b = C.type === Qt ? C.breakContents : C.negate ? C.contents : Ds(C.contents);
          b && c.push({ ind: y, mode: x, doc: b });
        }
        if (E === On) {
          let b = C.type === Qt ? C.flatContents : C.negate ? Ds(C.contents) : C.contents;
          b && c.push({ ind: y, mode: x, doc: b });
        }
        break;
      }
      case fr:
        v.push({ ind: y, mode: x, doc: C.contents });
        break;
      case pr:
        v.length > 0 && c.push({ ind: y, mode: x, doc: of });
        break;
      case Dt:
        switch (x) {
          case On:
            if (C.hard) p = !0;
            else {
              C.soft || (d.push(" "), s += 1);
              break;
            }
          case Lt:
            if (v.length > 0) {
              c.push({ ind: y, mode: x, doc: C }, ...v.reverse()), v.length = 0;
              break;
            }
            C.literal ? y.root ? (d.push(l, y.root.value), s = y.root.length) : (d.push(l), s = 0) : (s -= wd(d), d.push(l + y.value), s = y.length);
            break;
        }
        break;
      case zn:
        c.push({ ind: y, mode: x, doc: C.contents });
        break;
      case ln:
        break;
      default:
        throw new Fi(C);
    }
    c.length === 0 && v.length > 0 && (c.push(...v.reverse()), v.length = 0);
  }
  let D = d.indexOf(Na);
  if (D !== -1) {
    let y = d.indexOf(Na, D + 1), x = d.slice(0, D).join(""), C = d.slice(D + 1, y).join(""), E = d.slice(y + 1).join("");
    return { formatted: x + C + E, cursorNodeStart: x.length, cursorNodeText: C };
  }
  return { formatted: d.join("") };
}
function mb(e, n, r = 0) {
  let i = 0;
  for (let l = r; l < e.length; ++l) e[l] === "	" ? i = i + n - i % n : i++;
  return i;
}
var sf = mb, xo, xd, cs, hb = class {
  constructor(e) {
    yS(this, xo), this.stack = [e];
  }
  get key() {
    let { stack: e, siblings: n } = this;
    return ht(!1, e, n === null ? -2 : -4) ?? null;
  }
  get index() {
    return this.siblings === null ? null : ht(!1, this.stack, -2);
  }
  get node() {
    return ht(!1, this.stack, -1);
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
    let { stack: e } = this, n = ht(!1, e, -3);
    return Array.isArray(n) ? n : null;
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
    let { siblings: e, index: n } = this;
    return e !== null && n === e.length - 1;
  }
  get isRoot() {
    return this.stack.length === 1;
  }
  get root() {
    return this.stack[0];
  }
  get ancestors() {
    return [...Ea(this, xo, cs).call(this)];
  }
  getName() {
    let { stack: e } = this, { length: n } = e;
    return n > 1 ? ht(!1, e, -2) : null;
  }
  getValue() {
    return ht(!1, this.stack, -1);
  }
  getNode(e = 0) {
    let n = Ea(this, xo, xd).call(this, e);
    return n === -1 ? null : this.stack[n];
  }
  getParentNode(e = 0) {
    return this.getNode(e + 1);
  }
  call(e, ...n) {
    let { stack: r } = this, { length: i } = r, l = ht(!1, r, -1);
    for (let s of n) l = l[s], r.push(s, l);
    try {
      return e(this);
    } finally {
      r.length = i;
    }
  }
  callParent(e, n = 0) {
    let r = Ea(this, xo, xd).call(this, n + 1), i = this.stack.splice(r + 1);
    try {
      return e(this);
    } finally {
      this.stack.push(...i);
    }
  }
  each(e, ...n) {
    let { stack: r } = this, { length: i } = r, l = ht(!1, r, -1);
    for (let s of n) l = l[s], r.push(s, l);
    try {
      for (let s = 0; s < l.length; ++s) r.push(s, l[s]), e(this, s, l), r.length -= 2;
    } finally {
      r.length = i;
    }
  }
  map(e, ...n) {
    let r = [];
    return this.each((i, l, s) => {
      r[l] = e(i, l, s);
    }, ...n), r;
  }
  match(...e) {
    let n = this.stack.length - 1, r = null, i = this.stack[n--];
    for (let l of e) {
      if (i === void 0) return !1;
      let s = null;
      if (typeof r == "number" && (s = r, r = this.stack[n--], i = this.stack[n--]), l && !l(i, r, s)) return !1;
      r = this.stack[n--], i = this.stack[n--];
    }
    return !0;
  }
  findAncestor(e) {
    for (let n of Ea(this, xo, cs).call(this)) if (e(n)) return n;
  }
  hasAncestor(e) {
    for (let n of Ea(this, xo, cs).call(this)) if (e(n)) return !0;
    return !1;
  }
};
xo = /* @__PURE__ */ new WeakSet(), xd = function(e) {
  let { stack: n } = this;
  for (let r = n.length - 1; r >= 0; r -= 2) if (!Array.isArray(n[r]) && --e < 0) return r;
  return -1;
}, cs = function* () {
  let { stack: e } = this;
  for (let n = e.length - 3; n >= 0; n -= 2) {
    let r = e[n];
    Array.isArray(r) || (yield r);
  }
};
var vb = hb, R0 = new Proxy(() => {
}, { get: () => R0 }), Cd = R0;
function gb(e) {
  return e !== null && typeof e == "object";
}
var yb = gb;
function* M0(e, n) {
  let { getVisitorKeys: r, filter: i = () => !0 } = n, l = (s) => yb(s) && i(s);
  for (let s of r(e)) {
    let c = e[s];
    if (Array.isArray(c)) for (let d of c) l(d) && (yield d);
    else l(c) && (yield c);
  }
}
function* Db(e, n) {
  let r = [e];
  for (let i = 0; i < r.length; i++) {
    let l = r[i];
    for (let s of M0(l, n)) yield s, r.push(s);
  }
}
function Ta(e) {
  return (n, r, i) => {
    let l = !!(i != null && i.backwards);
    if (r === !1) return !1;
    let { length: s } = n, c = r;
    for (; c >= 0 && c < s; ) {
      let d = n.charAt(c);
      if (e instanceof RegExp) {
        if (!e.test(d)) return c;
      } else if (!e.includes(d)) return c;
      l ? c-- : c++;
    }
    return c === -1 || c === s ? c : !1;
  };
}
var wb = Ta(/\s/u), Vr = Ta(" 	"), L0 = Ta(",; 	"), I0 = Ta(/[^\n\r]/u);
function xb(e, n, r) {
  let i = !!(r != null && r.backwards);
  if (n === !1) return !1;
  let l = e.charAt(n);
  if (i) {
    if (e.charAt(n - 1) === "\r" && l === `
`) return n - 2;
    if (l === `
` || l === "\r" || l === "\u2028" || l === "\u2029") return n - 1;
  } else {
    if (l === "\r" && e.charAt(n + 1) === `
`) return n + 2;
    if (l === `
` || l === "\r" || l === "\u2028" || l === "\u2029") return n + 1;
  }
  return n;
}
var jo = xb;
function Cb(e, n, r = {}) {
  let i = Vr(e, r.backwards ? n - 1 : n, r), l = jo(e, i, r);
  return i !== l;
}
var $r = Cb;
function Eb(e) {
  return Array.isArray(e) && e.length > 0;
}
var Sb = Eb, B0 = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]), bb = (e) => Object.keys(e).filter((n) => !B0.has(n));
function Fb(e) {
  return e ? (n) => e(n, B0) : bb;
}
var zs = Fb;
function kb(e) {
  let n = e.type || e.kind || "(unknown type)", r = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
  return r.length > 20 && (r = r.slice(0, 19) + "…"), n + (r ? " " + r : "");
}
function uf(e, n) {
  (e.comments ?? (e.comments = [])).push(n), n.printed = !1, n.nodeDescription = kb(e);
}
function vi(e, n) {
  n.leading = !0, n.trailing = !1, uf(e, n);
}
function Co(e, n, r) {
  n.leading = !1, n.trailing = !1, r && (n.marker = r), uf(e, n);
}
function gi(e, n) {
  n.leading = !1, n.trailing = !0, uf(e, n);
}
var Kc = /* @__PURE__ */ new WeakMap();
function cf(e, n) {
  if (Kc.has(e)) return Kc.get(e);
  let { printer: { getCommentChildNodes: r, canAttachComment: i, getVisitorKeys: l }, locStart: s, locEnd: c } = n;
  if (!i) return [];
  let d = ((r == null ? void 0 : r(e, n)) ?? [...M0(e, { getVisitorKeys: zs(l) })]).flatMap((p) => i(p) ? [p] : cf(p, n));
  return d.sort((p, v) => s(p) - s(v) || c(p) - c(v)), Kc.set(e, d), d;
}
function W0(e, n, r, i) {
  let { locStart: l, locEnd: s } = r, c = l(n), d = s(n), p = cf(e, r), v, g, D = 0, y = p.length;
  for (; D < y; ) {
    let x = D + y >> 1, C = p[x], E = l(C), b = s(C);
    if (E <= c && d <= b) return W0(C, n, r, C);
    if (b <= c) {
      v = C, D = x + 1;
      continue;
    }
    if (d <= E) {
      g = C, y = x;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if ((i == null ? void 0 : i.type) === "TemplateLiteral") {
    let { quasis: x } = i, C = Xc(x, n, r);
    v && Xc(x, v, r) !== C && (v = null), g && Xc(x, g, r) !== C && (g = null);
  }
  return { enclosingNode: i, precedingNode: v, followingNode: g };
}
var Qc = () => !1;
function Nb(e, n) {
  let { comments: r } = e;
  if (delete e.comments, !Sb(r) || !n.printer.canAttachComment) return;
  let i = [], { locStart: l, locEnd: s, printer: { experimentalFeatures: { avoidAstMutation: c = !1 } = {}, handleComments: d = {} }, originalText: p } = n, { ownLine: v = Qc, endOfLine: g = Qc, remaining: D = Qc } = d, y = r.map((x, C) => ({ ...W0(e, x, n), comment: x, text: p, options: n, ast: e, isLastComment: r.length - 1 === C }));
  for (let [x, C] of y.entries()) {
    let { comment: E, precedingNode: b, enclosingNode: F, followingNode: k, text: _, options: P, ast: O, isLastComment: B } = C;
    if (P.parser === "json" || P.parser === "json5" || P.parser === "jsonc" || P.parser === "__js_expression" || P.parser === "__ts_expression" || P.parser === "__vue_expression" || P.parser === "__vue_ts_expression") {
      if (l(E) - l(O) <= 0) {
        vi(O, E);
        continue;
      }
      if (s(E) - s(O) >= 0) {
        gi(O, E);
        continue;
      }
    }
    let W;
    if (c ? W = [C] : (E.enclosingNode = F, E.precedingNode = b, E.followingNode = k, W = [E, _, P, O, B]), _b(_, P, y, x)) E.placement = "ownLine", v(...W) || (k ? vi(k, E) : b ? gi(b, E) : Co(F || O, E));
    else if (Pb(_, P, y, x)) E.placement = "endOfLine", g(...W) || (b ? gi(b, E) : k ? vi(k, E) : Co(F || O, E));
    else if (E.placement = "remaining", !D(...W)) if (b && k) {
      let U = i.length;
      U > 0 && i[U - 1].followingNode !== k && Zh(i, P), i.push(C);
    } else b ? gi(b, E) : k ? vi(k, E) : Co(F || O, E);
  }
  if (Zh(i, n), !c) for (let x of r) delete x.precedingNode, delete x.enclosingNode, delete x.followingNode;
}
var z0 = (e) => !/[\S\n\u2028\u2029]/u.test(e);
function _b(e, n, r, i) {
  let { comment: l, precedingNode: s } = r[i], { locStart: c, locEnd: d } = n, p = c(l);
  if (s) for (let v = i - 1; v >= 0; v--) {
    let { comment: g, precedingNode: D } = r[v];
    if (D !== s || !z0(e.slice(d(g), p))) break;
    p = c(g);
  }
  return $r(e, p, { backwards: !0 });
}
function Pb(e, n, r, i) {
  let { comment: l, followingNode: s } = r[i], { locStart: c, locEnd: d } = n, p = d(l);
  if (s) for (let v = i + 1; v < r.length; v++) {
    let { comment: g, followingNode: D } = r[v];
    if (D !== s || !z0(e.slice(p, c(g)))) break;
    p = d(g);
  }
  return $r(e, p);
}
function Zh(e, n) {
  var r, i;
  let l = e.length;
  if (l === 0) return;
  let { precedingNode: s, followingNode: c } = e[0], d = n.locStart(c), p;
  for (p = l; p > 0; --p) {
    let { comment: v, precedingNode: g, followingNode: D } = e[p - 1];
    Cd.strictEqual(g, s), Cd.strictEqual(D, c);
    let y = n.originalText.slice(n.locEnd(v), d);
    if (((i = (r = n.printer).isGap) == null ? void 0 : i.call(r, y, n)) ?? /^[\s(]*$/u.test(y)) d = n.locStart(v);
    else break;
  }
  for (let [v, { comment: g }] of e.entries()) v < p ? gi(s, g) : vi(c, g);
  for (let v of [s, c]) v.comments && v.comments.length > 1 && v.comments.sort((g, D) => n.locStart(g) - n.locStart(D));
  e.length = 0;
}
function Xc(e, n, r) {
  let i = r.locStart(n) - 1;
  for (let l = 1; l < e.length; ++l) if (i < r.locStart(e[l])) return l - 1;
  return 0;
}
function jb(e, n) {
  let r = n - 1;
  r = Vr(e, r, { backwards: !0 }), r = jo(e, r, { backwards: !0 }), r = Vr(e, r, { backwards: !0 });
  let i = jo(e, r, { backwards: !0 });
  return r !== i;
}
var df = jb;
function $0(e, n) {
  let r = e.node;
  return r.printed = !0, n.printer.printComment(e, n);
}
function Ab(e, n) {
  var r;
  let i = e.node, l = [$0(e, n)], { printer: s, originalText: c, locStart: d, locEnd: p } = n;
  if ((r = s.isBlockComment) != null && r.call(s, i)) {
    let g = $r(c, p(i)) ? $r(c, d(i), { backwards: !0 }) ? ko : N0 : " ";
    l.push(g);
  } else l.push(ko);
  let v = jo(c, Vr(c, p(i)));
  return v !== !1 && $r(c, v) && l.push(ko), l;
}
function Ob(e, n, r) {
  var i;
  let l = e.node, s = $0(e, n), { printer: c, originalText: d, locStart: p } = n, v = (i = c.isBlockComment) == null ? void 0 : i.call(c, l);
  if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || $r(d, p(l), { backwards: !0 })) {
    let g = df(d, p(l));
    return { doc: gd([ko, g ? ko : "", s]), isBlock: v, hasLineSuffix: !0 };
  }
  return !v || r != null && r.hasLineSuffix ? { doc: [gd([" ", s]), Is], isBlock: v, hasLineSuffix: !0 } : { doc: [" ", s], isBlock: v, hasLineSuffix: !1 };
}
function Tb(e, n) {
  let r = e.node;
  if (!r) return {};
  let i = n[Symbol.for("printedComments")];
  if ((r.comments || []).filter((d) => !i.has(d)).length === 0) return { leading: "", trailing: "" };
  let l = [], s = [], c;
  return e.each(() => {
    let d = e.node;
    if (i != null && i.has(d)) return;
    let { leading: p, trailing: v } = d;
    p ? l.push(Ab(e, n)) : v && (c = Ob(e, n, c), s.push(c.doc));
  }, "comments"), { leading: l, trailing: s };
}
function Rb(e, n, r) {
  let { leading: i, trailing: l } = Tb(e, r);
  return !i && !l ? n : O0(n, (s) => [i, s, l]);
}
function Mb(e) {
  let { [Symbol.for("comments")]: n, [Symbol.for("printedComments")]: r } = e;
  for (let i of n) {
    if (!i.printed && !r.has(i)) throw new Error('Comment "' + i.value.trim() + '" was not printed. Please report this error!');
    delete i.printed;
  }
}
var H0 = class extends Error {
  constructor() {
    super(...arguments);
    Gl(this, "name", "ConfigError");
  }
}, ev = class extends Error {
  constructor() {
    super(...arguments);
    Gl(this, "name", "UndefinedParserError");
  }
}, Lb = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }] }, plugins: { type: "path", array: !0, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: !1, description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`, cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
function V0({ plugins: e = [], showDeprecated: n = !1 } = {}) {
  let r = e.flatMap((l) => l.languages ?? []), i = [];
  for (let l of Bb(Object.assign({}, ...e.map(({ options: s }) => s), Lb))) !n && l.deprecated || (Array.isArray(l.choices) && (n || (l.choices = l.choices.filter((s) => !s.deprecated)), l.name === "parser" && (l.choices = [...l.choices, ...Ib(l.choices, r, e)])), l.pluginDefaults = Object.fromEntries(e.filter((s) => {
    var c;
    return ((c = s.defaultOptions) == null ? void 0 : c[l.name]) !== void 0;
  }).map((s) => [s.name, s.defaultOptions[l.name]])), i.push(l));
  return { languages: r, options: i };
}
function* Ib(e, n, r) {
  let i = new Set(e.map((l) => l.value));
  for (let l of n) if (l.parsers) {
    for (let s of l.parsers) if (!i.has(s)) {
      i.add(s);
      let c = r.find((p) => p.parsers && Object.prototype.hasOwnProperty.call(p.parsers, s)), d = l.name;
      c != null && c.name && (d += ` (plugin: ${c.name})`), yield { value: s, description: d };
    }
  }
}
function Bb(e) {
  let n = [];
  for (let [r, i] of Object.entries(e)) {
    let l = { name: r, ...i };
    Array.isArray(l.default) && (l.default = ht(!1, l.default, -1).value), n.push(l);
  }
  return n;
}
var Wb = (e) => String(e).split(/[/\\]/u).pop();
function tv(e, n) {
  if (!n) return;
  let r = Wb(n).toLowerCase();
  return e.find(({ filenames: i }) => i == null ? void 0 : i.some((l) => l.toLowerCase() === r)) ?? e.find(({ extensions: i }) => i == null ? void 0 : i.some((l) => r.endsWith(l)));
}
function zb(e, n) {
  if (n) return e.find(({ name: r }) => r.toLowerCase() === n) ?? e.find(({ aliases: r }) => r == null ? void 0 : r.includes(n)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${n}`));
}
function $b(e, n) {
  let r = e.plugins.flatMap((l) => l.languages ?? []), i = zb(r, n.language) ?? tv(r, n.physicalFile) ?? tv(r, n.file) ?? (n.physicalFile, void 0);
  return i == null ? void 0 : i.parsers[0];
}
var Hb = $b, yi = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
  if (e === null || typeof e != "object") return JSON.stringify(e);
  if (Array.isArray(e)) return `[${e.map((r) => yi.value(r)).join(", ")}]`;
  let n = Object.keys(e);
  return n.length === 0 ? "{}" : `{ ${n.map((r) => `${yi.key(r)}: ${yi.value(e[r])}`).join(", ")} }`;
}, pair: ({ key: e, value: n }) => yi.value({ [e]: n }) }, nv = Ms(tf()), Vb = (e, n, { descriptor: r }) => {
  let i = [`${nv.default.yellow(typeof e == "string" ? r.key(e) : r.pair(e))} is deprecated`];
  return n && i.push(`we now treat it as ${nv.default.blue(typeof n == "string" ? r.key(n) : r.pair(n))}`), i.join("; ") + ".";
}, Di = Ms(tf()), U0 = Symbol.for("vnopts.VALUE_NOT_EXIST"), ds = Symbol.for("vnopts.VALUE_UNCHANGED"), rv = " ".repeat(2), Ub = (e, n, r) => {
  let { text: i, list: l } = r.normalizeExpectedResult(r.schemas[e].expected(r)), s = [];
  return i && s.push(ov(e, n, i, r.descriptor)), l && s.push([ov(e, n, l.title, r.descriptor)].concat(l.values.map((c) => Y0(c, r.loggerPrintWidth))).join(`
`)), K0(s, r.loggerPrintWidth);
};
function ov(e, n, r, i) {
  return [`Invalid ${Di.default.red(i.key(e))} value.`, `Expected ${Di.default.blue(r)},`, `but received ${n === U0 ? Di.default.gray("nothing") : Di.default.red(i.value(n))}.`].join(" ");
}
function Y0({ text: e, list: n }, r) {
  let i = [];
  return e && i.push(`- ${Di.default.blue(e)}`), n && i.push([`- ${Di.default.blue(n.title)}:`].concat(n.values.map((l) => Y0(l, r - rv.length).replace(/^|\n/g, `$&${rv}`))).join(`
`)), K0(i, r);
}
function K0(e, n) {
  if (e.length === 1) return e[0];
  let [r, i] = e, [l, s] = e.map((c) => c.split(`
`, 1)[0].length);
  return l > n && l > s ? i : r;
}
var iv = Ms(tf()), Gc = [], av = [];
function Yb(e, n) {
  if (e === n) return 0;
  let r = e;
  e.length > n.length && (e = n, n = r);
  let i = e.length, l = n.length;
  for (; i > 0 && e.charCodeAt(~-i) === n.charCodeAt(~-l); ) i--, l--;
  let s = 0;
  for (; s < i && e.charCodeAt(s) === n.charCodeAt(s); ) s++;
  if (i -= s, l -= s, i === 0) return l;
  let c, d, p, v, g = 0, D = 0;
  for (; g < i; ) av[g] = e.charCodeAt(s + g), Gc[g] = ++g;
  for (; D < l; ) for (c = n.charCodeAt(s + D), p = D++, d = D, g = 0; g < i; g++) v = c === av[g] ? p : p + 1, p = Gc[g], d = Gc[g] = p > d ? v > d ? d + 1 : v : v > p ? p + 1 : v;
  return d;
}
var Q0 = (e, n, { descriptor: r, logger: i, schemas: l }) => {
  let s = [`Ignored unknown option ${iv.default.yellow(r.pair({ key: e, value: n }))}.`], c = Object.keys(l).sort().find((d) => Yb(e, d) < 3);
  c && s.push(`Did you mean ${iv.default.blue(r.key(c))}?`), i.warn(s.join(" "));
}, Kb = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
function Qb(e, n) {
  let r = new e(n), i = Object.create(r);
  for (let l of Kb) l in n && (i[l] = Xb(n[l], r, Gr.prototype[l].length));
  return i;
}
var Gr = class {
  static create(e) {
    return Qb(this, e);
  }
  constructor(e) {
    this.name = e.name;
  }
  default(e) {
  }
  expected(e) {
    return "nothing";
  }
  validate(e, n) {
    return !1;
  }
  deprecated(e, n) {
    return !1;
  }
  forward(e, n) {
  }
  redirect(e, n) {
  }
  overlap(e, n, r) {
    return e;
  }
  preprocess(e, n) {
    return e;
  }
  postprocess(e, n) {
    return ds;
  }
};
function Xb(e, n, r) {
  return typeof e == "function" ? (...i) => e(...i.slice(0, r - 1), n, ...i.slice(r - 1)) : () => e;
}
var Gb = class extends Gr {
  constructor(e) {
    super(e), this._sourceName = e.sourceName;
  }
  expected(e) {
    return e.schemas[this._sourceName].expected(e);
  }
  validate(e, n) {
    return n.schemas[this._sourceName].validate(e, n);
  }
  redirect(e, n) {
    return this._sourceName;
  }
}, qb = class extends Gr {
  expected() {
    return "anything";
  }
  validate() {
    return !0;
  }
}, Jb = class extends Gr {
  constructor({ valueSchema: e, name: n = e.name, ...r }) {
    super({ ...r, name: n }), this._valueSchema = e;
  }
  expected(e) {
    let { text: n, list: r } = e.normalizeExpectedResult(this._valueSchema.expected(e));
    return { text: n && `an array of ${n}`, list: r && { title: "an array of the following values", values: [{ list: r }] } };
  }
  validate(e, n) {
    if (!Array.isArray(e)) return !1;
    let r = [];
    for (let i of e) {
      let l = n.normalizeValidateResult(this._valueSchema.validate(i, n), i);
      l !== !0 && r.push(l.value);
    }
    return r.length === 0 ? !0 : { value: r };
  }
  deprecated(e, n) {
    let r = [];
    for (let i of e) {
      let l = n.normalizeDeprecatedResult(this._valueSchema.deprecated(i, n), i);
      l !== !1 && r.push(...l.map(({ value: s }) => ({ value: [s] })));
    }
    return r;
  }
  forward(e, n) {
    let r = [];
    for (let i of e) {
      let l = n.normalizeForwardResult(this._valueSchema.forward(i, n), i);
      r.push(...l.map(lv));
    }
    return r;
  }
  redirect(e, n) {
    let r = [], i = [];
    for (let l of e) {
      let s = n.normalizeRedirectResult(this._valueSchema.redirect(l, n), l);
      "remain" in s && r.push(s.remain), i.push(...s.redirect.map(lv));
    }
    return r.length === 0 ? { redirect: i } : { redirect: i, remain: r };
  }
  overlap(e, n) {
    return e.concat(n);
  }
};
function lv({ from: e, to: n }) {
  return { from: [e], to: n };
}
var Zb = class extends Gr {
  expected() {
    return "true or false";
  }
  validate(e) {
    return typeof e == "boolean";
  }
};
function eF(e, n) {
  let r = /* @__PURE__ */ Object.create(null);
  for (let i of e) {
    let l = i[n];
    if (r[l]) throw new Error(`Duplicate ${n} ${JSON.stringify(l)}`);
    r[l] = i;
  }
  return r;
}
function tF(e, n) {
  let r = /* @__PURE__ */ new Map();
  for (let i of e) {
    let l = i[n];
    if (r.has(l)) throw new Error(`Duplicate ${n} ${JSON.stringify(l)}`);
    r.set(l, i);
  }
  return r;
}
function nF() {
  let e = /* @__PURE__ */ Object.create(null);
  return (n) => {
    let r = JSON.stringify(n);
    return e[r] ? !0 : (e[r] = !0, !1);
  };
}
function rF(e, n) {
  let r = [], i = [];
  for (let l of e) n(l) ? r.push(l) : i.push(l);
  return [r, i];
}
function oF(e) {
  return e === Math.floor(e);
}
function iF(e, n) {
  if (e === n) return 0;
  let r = typeof e, i = typeof n, l = ["undefined", "object", "boolean", "number", "string"];
  return r !== i ? l.indexOf(r) - l.indexOf(i) : r !== "string" ? Number(e) - Number(n) : e.localeCompare(n);
}
function aF(e) {
  return (...n) => {
    let r = e(...n);
    return typeof r == "string" ? new Error(r) : r;
  };
}
function sv(e) {
  return e === void 0 ? {} : e;
}
function X0(e) {
  if (typeof e == "string") return { text: e };
  let { text: n, list: r } = e;
  return lF((n || r) !== void 0, "Unexpected `expected` result, there should be at least one field."), r ? { text: n, list: { title: r.title, values: r.values.map(X0) } } : { text: n };
}
function uv(e, n) {
  return e === !0 ? !0 : e === !1 ? { value: n } : e;
}
function cv(e, n, r = !1) {
  return e === !1 ? !1 : e === !0 ? r ? !0 : [{ value: n }] : "value" in e ? [e] : e.length === 0 ? !1 : e;
}
function dv(e, n) {
  return typeof e == "string" || "key" in e ? { from: n, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: n, to: e.to };
}
function Ed(e, n) {
  return e === void 0 ? [] : Array.isArray(e) ? e.map((r) => dv(r, n)) : [dv(e, n)];
}
function fv(e, n) {
  let r = Ed(typeof e == "object" && "redirect" in e ? e.redirect : e, n);
  return r.length === 0 ? { remain: n, redirect: r } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: r } : { redirect: r };
}
function lF(e, n) {
  if (!e) throw new Error(n);
}
var sF = class extends Gr {
  constructor(e) {
    super(e), this._choices = tF(e.choices.map((n) => n && typeof n == "object" ? n : { value: n }), "value");
  }
  expected({ descriptor: e }) {
    let n = Array.from(this._choices.keys()).map((l) => this._choices.get(l)).filter(({ hidden: l }) => !l).map((l) => l.value).sort(iF).map(e.value), r = n.slice(0, -2), i = n.slice(-2);
    return { text: r.concat(i.join(" or ")).join(", "), list: { title: "one of the following values", values: n } };
  }
  validate(e) {
    return this._choices.has(e);
  }
  deprecated(e) {
    let n = this._choices.get(e);
    return n && n.deprecated ? { value: e } : !1;
  }
  forward(e) {
    let n = this._choices.get(e);
    return n ? n.forward : void 0;
  }
  redirect(e) {
    let n = this._choices.get(e);
    return n ? n.redirect : void 0;
  }
}, uF = class extends Gr {
  expected() {
    return "a number";
  }
  validate(e, n) {
    return typeof e == "number";
  }
}, cF = class extends uF {
  expected() {
    return "an integer";
  }
  validate(e, n) {
    return n.normalizeValidateResult(super.validate(e, n), e) === !0 && oF(e);
  }
}, pv = class extends Gr {
  expected() {
    return "a string";
  }
  validate(e) {
    return typeof e == "string";
  }
}, dF = yi, fF = Q0, pF = Ub, mF = Vb, hF = class {
  constructor(e, n) {
    let { logger: r = console, loggerPrintWidth: i = 80, descriptor: l = dF, unknown: s = fF, invalid: c = pF, deprecated: d = mF, missing: p = () => !1, required: v = () => !1, preprocess: g = (y) => y, postprocess: D = () => ds } = n || {};
    this._utils = { descriptor: l, logger: r || { warn: () => {
    } }, loggerPrintWidth: i, schemas: eF(e, "name"), normalizeDefaultResult: sv, normalizeExpectedResult: X0, normalizeDeprecatedResult: cv, normalizeForwardResult: Ed, normalizeRedirectResult: fv, normalizeValidateResult: uv }, this._unknownHandler = s, this._invalidHandler = aF(c), this._deprecatedHandler = d, this._identifyMissing = (y, x) => !(y in x) || p(y, x), this._identifyRequired = v, this._preprocess = g, this._postprocess = D, this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = nF();
  }
  normalize(e) {
    let n = {}, r = [this._preprocess(e, this._utils)], i = () => {
      for (; r.length !== 0; ) {
        let l = r.shift(), s = this._applyNormalization(l, n);
        r.push(...s);
      }
    };
    i();
    for (let l of Object.keys(this._utils.schemas)) {
      let s = this._utils.schemas[l];
      if (!(l in n)) {
        let c = sv(s.default(this._utils));
        "value" in c && r.push({ [l]: c.value });
      }
    }
    i();
    for (let l of Object.keys(this._utils.schemas)) {
      if (!(l in n)) continue;
      let s = this._utils.schemas[l], c = n[l], d = s.postprocess(c, this._utils);
      d !== ds && (this._applyValidation(d, l, s), n[l] = d);
    }
    return this._applyPostprocess(n), this._applyRequiredCheck(n), n;
  }
  _applyNormalization(e, n) {
    let r = [], { knownKeys: i, unknownKeys: l } = this._partitionOptionKeys(e);
    for (let s of i) {
      let c = this._utils.schemas[s], d = c.preprocess(e[s], this._utils);
      this._applyValidation(d, s, c);
      let p = ({ from: D, to: y }) => {
        r.push(typeof y == "string" ? { [y]: D } : { [y.key]: y.value });
      }, v = ({ value: D, redirectTo: y }) => {
        let x = cv(c.deprecated(D, this._utils), d, !0);
        if (x !== !1) if (x === !0) this._hasDeprecationWarned(s) || this._utils.logger.warn(this._deprecatedHandler(s, y, this._utils));
        else for (let { value: C } of x) {
          let E = { key: s, value: C };
          if (!this._hasDeprecationWarned(E)) {
            let b = typeof y == "string" ? { key: y, value: C } : y;
            this._utils.logger.warn(this._deprecatedHandler(E, b, this._utils));
          }
        }
      };
      Ed(c.forward(d, this._utils), d).forEach(p);
      let g = fv(c.redirect(d, this._utils), d);
      if (g.redirect.forEach(p), "remain" in g) {
        let D = g.remain;
        n[s] = s in n ? c.overlap(n[s], D, this._utils) : D, v({ value: D });
      }
      for (let { from: D, to: y } of g.redirect) v({ value: D, redirectTo: y });
    }
    for (let s of l) {
      let c = e[s];
      this._applyUnknownHandler(s, c, n, (d, p) => {
        r.push({ [d]: p });
      });
    }
    return r;
  }
  _applyRequiredCheck(e) {
    for (let n of Object.keys(this._utils.schemas)) if (this._identifyMissing(n, e) && this._identifyRequired(n)) throw this._invalidHandler(n, U0, this._utils);
  }
  _partitionOptionKeys(e) {
    let [n, r] = rF(Object.keys(e).filter((i) => !this._identifyMissing(i, e)), (i) => i in this._utils.schemas);
    return { knownKeys: n, unknownKeys: r };
  }
  _applyValidation(e, n, r) {
    let i = uv(r.validate(e, this._utils), e);
    if (i !== !0) throw this._invalidHandler(n, i.value, this._utils);
  }
  _applyUnknownHandler(e, n, r, i) {
    let l = this._unknownHandler(e, n, this._utils);
    if (l) for (let s of Object.keys(l)) {
      if (this._identifyMissing(s, l)) continue;
      let c = l[s];
      s in this._utils.schemas ? i(s, c) : r[s] = c;
    }
  }
  _applyPostprocess(e) {
    let n = this._postprocess(e, this._utils);
    if (n !== ds) {
      if (n.delete) for (let r of n.delete) delete e[r];
      if (n.override) {
        let { knownKeys: r, unknownKeys: i } = this._partitionOptionKeys(n.override);
        for (let l of r) {
          let s = n.override[l];
          this._applyValidation(s, l, this._utils.schemas[l]), e[l] = s;
        }
        for (let l of i) {
          let s = n.override[l];
          this._applyUnknownHandler(l, s, e, (c, d) => {
            let p = this._utils.schemas[c];
            this._applyValidation(d, c, p), e[c] = d;
          });
        }
      }
    }
  }
}, qc;
function vF(e, n, { logger: r = !1, isCLI: i = !1, passThrough: l = !1, FlagSchema: s, descriptor: c } = {}) {
  if (i) {
    if (!s) throw new Error("'FlagSchema' option is required.");
    if (!c) throw new Error("'descriptor' option is required.");
  } else c = yi;
  let d = l ? Array.isArray(l) ? (y, x) => l.includes(y) ? { [y]: x } : void 0 : (y, x) => ({ [y]: x }) : (y, x, C) => {
    let { _: E, ...b } = C.schemas;
    return Q0(y, x, { ...C, schemas: b });
  }, p = gF(n, { isCLI: i, FlagSchema: s }), v = new hF(p, { logger: r, unknown: d, descriptor: c }), g = r !== !1;
  g && qc && (v._hasDeprecationWarned = qc);
  let D = v.normalize(e);
  return g && (qc = v._hasDeprecationWarned), D;
}
function gF(e, { isCLI: n, FlagSchema: r }) {
  let i = [];
  n && i.push(qb.create({ name: "_" }));
  for (let l of e) i.push(yF(l, { isCLI: n, optionInfos: e, FlagSchema: r })), l.alias && n && i.push(Gb.create({ name: l.alias, sourceName: l.name }));
  return i;
}
function yF(e, { isCLI: n, optionInfos: r, FlagSchema: i }) {
  let { name: l } = e, s = { name: l }, c, d = {};
  switch (e.type) {
    case "int":
      c = cF, n && (s.preprocess = Number);
      break;
    case "string":
      c = pv;
      break;
    case "choice":
      c = sF, s.choices = e.choices.map((p) => p != null && p.redirect ? { ...p, redirect: { to: { key: e.name, value: p.redirect } } } : p);
      break;
    case "boolean":
      c = Zb;
      break;
    case "flag":
      c = i, s.flags = r.flatMap((p) => [p.alias, p.description && p.name, p.oppositeDescription && `no-${p.name}`].filter(Boolean));
      break;
    case "path":
      c = pv;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (e.exception ? s.validate = (p, v, g) => e.exception(p) || v.validate(p, g) : s.validate = (p, v, g) => p === void 0 || v.validate(p, g), e.redirect && (d.redirect = (p) => p ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (d.deprecated = !0), n && !e.array) {
    let p = s.preprocess || ((v) => v);
    s.preprocess = (v, g, D) => g.preprocess(p(Array.isArray(v) ? ht(!1, v, -1) : v), D);
  }
  return e.array ? Jb.create({ ...n ? { preprocess: (p) => Array.isArray(p) ? p : [p] } : {}, ...d, valueSchema: c.create(s) }) : c.create({ ...s, ...d });
}
var DF = vF, wF = (e, n, r) => {
  if (!(e && n == null)) {
    if (n.findLast) return n.findLast(r);
    for (let i = n.length - 1; i >= 0; i--) {
      let l = n[i];
      if (r(l, i, n)) return l;
    }
  }
}, G0 = wF;
function q0(e, n) {
  if (!n) throw new Error("parserName is required.");
  let r = G0(!1, e, (l) => l.parsers && Object.prototype.hasOwnProperty.call(l.parsers, n));
  if (r) return r;
  let i = `Couldn't resolve parser "${n}".`;
  throw i += " Plugins must be explicitly added to the standalone bundle.", new H0(i);
}
function xF(e, n) {
  if (!n) throw new Error("astFormat is required.");
  let r = G0(!1, e, (l) => l.printers && Object.prototype.hasOwnProperty.call(l.printers, n));
  if (r) return r;
  let i = `Couldn't find plugin for AST format "${n}".`;
  throw i += " Plugins must be explicitly added to the standalone bundle.", new H0(i);
}
function J0({ plugins: e, parser: n }) {
  let r = q0(e, n);
  return Z0(r, n);
}
function Z0(e, n) {
  let r = e.parsers[n];
  return typeof r == "function" ? r() : r;
}
function CF(e, n) {
  let r = e.printers[n];
  return typeof r == "function" ? r() : r;
}
var mv = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
async function EF(e, n = {}) {
  var r;
  let i = { ...e };
  if (!i.parser) if (i.filepath) {
    if (i.parser = Hb(i, { physicalFile: i.filepath }), !i.parser) throw new ev(`No parser could be inferred for file "${i.filepath}".`);
  } else throw new ev("No parser and no file path given, couldn't infer a parser.");
  let l = V0({ plugins: e.plugins, showDeprecated: !0 }).options, s = { ...mv, ...Object.fromEntries(l.filter((y) => y.default !== void 0).map((y) => [y.name, y.default])) }, c = q0(i.plugins, i.parser), d = await Z0(c, i.parser);
  i.astFormat = d.astFormat, i.locEnd = d.locEnd, i.locStart = d.locStart;
  let p = (r = c.printers) != null && r[d.astFormat] ? c : xF(i.plugins, d.astFormat), v = await CF(p, d.astFormat);
  i.printer = v;
  let g = p.defaultOptions ? Object.fromEntries(Object.entries(p.defaultOptions).filter(([, y]) => y !== void 0)) : {}, D = { ...s, ...g };
  for (let [y, x] of Object.entries(D)) (i[y] === null || i[y] === void 0) && (i[y] = x);
  return i.parser === "json" && (i.trailingComma = "none"), DF(i, l, { passThrough: Object.keys(mv), ...n });
}
var ji = EF, SF = Ms(xS());
async function bF(e, n) {
  let r = await J0(n), i = r.preprocess ? r.preprocess(e, n) : e;
  n.originalText = i;
  let l;
  try {
    l = await r.parse(i, n, n);
  } catch (s) {
    FF(s, e);
  }
  return { text: i, ast: l };
}
function FF(e, n) {
  let { loc: r } = e;
  if (r) {
    let i = (0, SF.codeFrameColumns)(n, r, { highlightCode: !0 });
    throw e.message += `
` + i, e.codeFrame = i, e;
  }
  throw e;
}
var Ra = bF;
async function kF(e, n, r, i, l) {
  let { embeddedLanguageFormatting: s, printer: { embed: c, hasPrettierIgnore: d = () => !1, getVisitorKeys: p } } = r;
  if (!c || s !== "auto") return;
  if (c.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
  let v = zs(c.getVisitorKeys ?? p), g = [];
  x();
  let D = e.stack;
  for (let { print: C, node: E, pathStack: b } of g) try {
    e.stack = b;
    let F = await C(y, n, e, r);
    F && l.set(E, F);
  } catch (F) {
    if (globalThis.PRETTIER_DEBUG) throw F;
  }
  e.stack = D;
  function y(C, E) {
    return NF(C, E, r, i);
  }
  function x() {
    let { node: C } = e;
    if (C === null || typeof C != "object" || d(e)) return;
    for (let b of v(C)) Array.isArray(C[b]) ? e.each(x, b) : e.call(x, b);
    let E = c(e, r);
    if (E) {
      if (typeof E == "function") {
        g.push({ print: E, node: C, pathStack: [...e.stack] });
        return;
      }
      l.set(C, E);
    }
  }
}
async function NF(e, n, r, i) {
  let l = await ji({ ...r, ...n, parentParser: r.parser, originalText: e }, { passThrough: !0 }), { ast: s } = await Ra(e, l), c = await i(s, l);
  return A0(c);
}
function _F(e, n) {
  let { originalText: r, [Symbol.for("comments")]: i, locStart: l, locEnd: s, [Symbol.for("printedComments")]: c } = n, { node: d } = e, p = l(d), v = s(d);
  for (let g of i) l(g) >= p && s(g) <= v && c.add(g);
  return r.slice(p, v);
}
var PF = _F;
async function $s(e, n) {
  ({ ast: e } = await ey(e, n));
  let r = /* @__PURE__ */ new Map(), i = new vb(e), l = /* @__PURE__ */ new Map();
  await kF(i, c, n, $s, l);
  let s = await hv(i, n, c, void 0, l);
  return Mb(n), s;
  function c(p, v) {
    return p === void 0 || p === i ? d(v) : Array.isArray(p) ? i.call(() => d(v), ...p) : i.call(() => d(v), p);
  }
  function d(p) {
    let v = i.node;
    if (v == null) return "";
    let g = v && typeof v == "object" && p === void 0;
    if (g && r.has(v)) return r.get(v);
    let D = hv(i, n, c, p, l);
    return g && r.set(v, D), D;
  }
}
function hv(e, n, r, i, l) {
  var s;
  let { node: c } = e, { printer: d } = n, p;
  return (s = d.hasPrettierIgnore) != null && s.call(d, e) ? p = PF(e, n) : l.has(c) ? p = l.get(c) : p = d.print(e, n, r, i), c === n.cursorNode && (p = O0(p, (v) => [yd, v, yd])), d.printComment && (!d.willPrintOwnComments || !d.willPrintOwnComments(e, n)) && (p = Rb(e, p, n)), p;
}
async function ey(e, n) {
  let r = e.comments ?? [];
  n[Symbol.for("comments")] = r, n[Symbol.for("tokens")] = e.tokens ?? [], n[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), Nb(e, n);
  let { printer: { preprocess: i } } = n;
  return e = i ? await i(e, n) : e, { ast: e, comments: r };
}
function jF(e, n) {
  let { cursorOffset: r, locStart: i, locEnd: l } = n, s = zs(n.printer.getVisitorKeys), c = (p) => i(p) <= r && l(p) >= r, d = e;
  for (let p of Db(e, { getVisitorKeys: s, filter: c })) d = p;
  return d;
}
var AF = jF;
function OF(e, n) {
  let { printer: { massageAstNode: r, getVisitorKeys: i } } = n;
  if (!r) return e;
  let l = zs(i), s = r.ignoredProperties ?? /* @__PURE__ */ new Set();
  return c(e);
  function c(d, p) {
    if (!(d !== null && typeof d == "object")) return d;
    if (Array.isArray(d)) return d.map((y) => c(y, p)).filter(Boolean);
    let v = {}, g = new Set(l(d));
    for (let y in d) !Object.prototype.hasOwnProperty.call(d, y) || s.has(y) || (g.has(y) ? v[y] = c(d[y], d) : v[y] = d[y]);
    let D = r(d, v, p);
    if (D !== null) return D ?? v;
  }
}
var TF = OF, RF = (e, n, r) => {
  if (!(e && n == null)) {
    if (n.findLastIndex) return n.findLastIndex(r);
    for (let i = n.length - 1; i >= 0; i--) {
      let l = n[i];
      if (r(l, i, n)) return i;
    }
    return -1;
  }
}, MF = RF, LF = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
function IF(e, n) {
  let r = [e.node, ...e.parentNodes], i = /* @__PURE__ */ new Set([n.node, ...n.parentNodes]);
  return r.find((l) => ty.has(l.type) && i.has(l));
}
function vv(e) {
  let n = MF(!1, e, (r) => r.type !== "Program" && r.type !== "File");
  return n === -1 ? e : e.slice(0, n + 1);
}
function BF(e, n, { locStart: r, locEnd: i }) {
  let l = e.node, s = n.node;
  if (l === s) return { startNode: l, endNode: s };
  let c = r(e.node);
  for (let p of vv(n.parentNodes)) if (r(p) >= c) s = p;
  else break;
  let d = i(n.node);
  for (let p of vv(e.parentNodes)) {
    if (i(p) <= d) l = p;
    else break;
    if (l === s) break;
  }
  return { startNode: l, endNode: s };
}
function Sd(e, n, r, i, l = [], s) {
  let { locStart: c, locEnd: d } = r, p = c(e), v = d(e);
  if (!(n > v || n < p || s === "rangeEnd" && n === p || s === "rangeStart" && n === v)) {
    for (let g of cf(e, r)) {
      let D = Sd(g, n, r, i, [e, ...l], s);
      if (D) return D;
    }
    if (!i || i(e, l[0])) return { node: e, parentNodes: l };
  }
}
function WF(e, n) {
  return n !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
var ty = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), zF = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function gv(e, n, r) {
  if (!n) return !1;
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
      return WF(n.type, r == null ? void 0 : r.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return ty.has(n.type);
    case "graphql":
      return zF.has(n.kind);
    case "vue":
      return n.tag !== "root";
  }
  return !1;
}
function $F(e, n, r) {
  let { rangeStart: i, rangeEnd: l, locStart: s, locEnd: c } = n;
  Cd.ok(l > i);
  let d = e.slice(i, l).search(/\S/u), p = d === -1;
  if (!p) for (i += d; l > i && !/\S/u.test(e[l - 1]); --l) ;
  let v = Sd(r, i, n, (x, C) => gv(n, x, C), [], "rangeStart"), g = p ? v : Sd(r, l, n, (x) => gv(n, x), [], "rangeEnd");
  if (!v || !g) return { rangeStart: 0, rangeEnd: 0 };
  let D, y;
  if (LF(n)) {
    let x = IF(v, g);
    D = x, y = x;
  } else ({ startNode: D, endNode: y } = BF(v, g, n));
  return { rangeStart: Math.min(s(D), s(y)), rangeEnd: Math.max(c(D), c(y)) };
}
var ny = "\uFEFF", yv = Symbol("cursor");
async function ry(e, n, r = 0) {
  if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: i, text: l } = await Ra(e, n);
  n.cursorOffset >= 0 && (n.cursorNode = AF(i, n));
  let s = await $s(i, n);
  r > 0 && (s = j0([ko, s], r, n.tabWidth));
  let c = Ws(s, n);
  if (r > 0) {
    let p = c.formatted.trim();
    c.cursorNodeStart !== void 0 && (c.cursorNodeStart -= c.formatted.indexOf(p)), c.formatted = p + nf(n.endOfLine);
  }
  let d = n[Symbol.for("comments")];
  if (n.cursorOffset >= 0) {
    let p, v, g, D, y;
    if (n.cursorNode && c.cursorNodeText ? (p = n.locStart(n.cursorNode), v = l.slice(p, n.locEnd(n.cursorNode)), g = n.cursorOffset - p, D = c.cursorNodeStart, y = c.cursorNodeText) : (p = 0, v = l, g = n.cursorOffset, D = 0, y = c.formatted), v === y) return { formatted: c.formatted, cursorOffset: D + g, comments: d };
    let x = v.split("");
    x.splice(g, 0, yv);
    let C = y.split(""), E = NS(x, C), b = D;
    for (let F of E) if (F.removed) {
      if (F.value.includes(yv)) break;
    } else b += F.count;
    return { formatted: c.formatted, cursorOffset: b, comments: d };
  }
  return { formatted: c.formatted, cursorOffset: -1, comments: d };
}
async function HF(e, n) {
  let { ast: r, text: i } = await Ra(e, n), { rangeStart: l, rangeEnd: s } = $F(i, n, r), c = i.slice(l, s), d = Math.min(l, i.lastIndexOf(`
`, l) + 1), p = i.slice(d, l).match(/^\s*/u)[0], v = sf(p, n.tabWidth), g = await ry(c, { ...n, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: n.cursorOffset > l && n.cursorOffset <= s ? n.cursorOffset - l : -1, endOfLine: "lf" }, v), D = g.formatted.trimEnd(), { cursorOffset: y } = n;
  y > s ? y += D.length - c.length : g.cursorOffset >= 0 && (y = g.cursorOffset + l);
  let x = i.slice(0, l) + D + i.slice(s);
  if (n.endOfLine !== "lf") {
    let C = nf(n.endOfLine);
    y >= 0 && C === `\r
` && (y += E0(x.slice(0, y), `
`)), x = Ls(!1, x, `
`, C);
  }
  return { formatted: x, cursorOffset: y, comments: g.comments };
}
function Jc(e, n, r) {
  return typeof n != "number" || Number.isNaN(n) || n < 0 || n > e.length ? r : n;
}
function Dv(e, n) {
  let { cursorOffset: r, rangeStart: i, rangeEnd: l } = n;
  return r = Jc(e, r, -1), i = Jc(e, i, 0), l = Jc(e, l, e.length), { ...n, cursorOffset: r, rangeStart: i, rangeEnd: l };
}
function oy(e, n) {
  let { cursorOffset: r, rangeStart: i, rangeEnd: l, endOfLine: s } = Dv(e, n), c = e.charAt(0) === ny;
  if (c && (e = e.slice(1), r--, i--, l--), s === "auto" && (s = _S(e)), e.includes("\r")) {
    let d = (p) => E0(e.slice(0, Math.max(p, 0)), `\r
`);
    r -= d(r), i -= d(i), l -= d(l), e = PS(e);
  }
  return { hasBOM: c, text: e, options: Dv(e, { ...n, cursorOffset: r, rangeStart: i, rangeEnd: l, endOfLine: s }) };
}
async function wv(e, n) {
  let r = await J0(n);
  return !r.hasPragma || r.hasPragma(e);
}
async function iy(e, n) {
  let { hasBOM: r, text: i, options: l } = oy(e, await ji(n));
  if (l.rangeStart >= l.rangeEnd && i !== "" || l.requirePragma && !await wv(i, l)) return { formatted: e, cursorOffset: n.cursorOffset, comments: [] };
  let s;
  return l.rangeStart > 0 || l.rangeEnd < i.length ? s = await HF(i, l) : (!l.requirePragma && l.insertPragma && l.printer.insertPragma && !await wv(i, l) && (i = l.printer.insertPragma(i)), s = await ry(i, l)), r && (s.formatted = ny + s.formatted, s.cursorOffset >= 0 && s.cursorOffset++), s;
}
async function VF(e, n, r) {
  let { text: i, options: l } = oy(e, await ji(n)), s = await Ra(i, l);
  return r && (r.preprocessForPrint && (s.ast = await ey(s.ast, l)), r.massage && (s.ast = TF(s.ast, l))), s;
}
async function UF(e, n) {
  n = await ji(n);
  let r = await $s(e, n);
  return Ws(r, n);
}
async function YF(e, n) {
  let r = QS(e), { formatted: i } = await iy(r, { ...n, parser: "__js_expression" });
  return i;
}
async function KF(e, n) {
  n = await ji(n);
  let { ast: r } = await Ra(e, n);
  return $s(r, n);
}
async function QF(e, n) {
  return Ws(e, await ji(n));
}
var ay = {};
Rs(ay, { builders: () => XF, printer: () => GF, utils: () => qF });
var XF = { join: P0, line: N0, softline: YS, hardline: ko, literalline: _0, group: b0, conditionalGroup: zS, fill: F0, lineSuffix: gd, lineSuffixBoundary: VS, cursor: yd, breakParent: Is, ifBreak: $S, trim: US, indent: Ds, indentIfBreak: HS, align: ki, addAlignmentToDoc: j0, markAsRoot: BS, dedentToRoot: IS, dedent: WS, hardlineWithoutBreakParent: of, literallineWithoutBreakParent: k0, label: KS, concat: (e) => e }, GF = { printDocToString: Ws }, qF = { willBreak: rb, traverseDoc: rf, findInDoc: lf, mapDoc: Bs, removeLines: ab, stripTrailingHardline: A0, replaceEndOfLine: ub, canBreak: db }, JF = "3.3.3", ly = {};
Rs(ly, { addDanglingComment: () => Co, addLeadingComment: () => vi, addTrailingComment: () => gi, getAlignmentSize: () => sf, getIndentSize: () => ok, getMaxContinuousCount: () => lk, getNextNonSpaceNonCommentCharacter: () => uk, getNextNonSpaceNonCommentCharacterIndex: () => gk, getStringWidth: () => af, hasNewline: () => $r, hasNewlineInRange: () => dk, hasSpaces: () => pk, isNextLineEmpty: () => xk, isNextLineEmptyAfterIndex: () => hf, isPreviousLineEmpty: () => Dk, makeString: () => hk, skip: () => Ta, skipEverythingButNewLine: () => I0, skipInlineComment: () => ff, skipNewline: () => jo, skipSpaces: () => Vr, skipToLineEnd: () => L0, skipTrailingComment: () => pf, skipWhitespace: () => wb });
function ZF(e, n) {
  if (n === !1) return !1;
  if (e.charAt(n) === "/" && e.charAt(n + 1) === "*") {
    for (let r = n + 2; r < e.length; ++r) if (e.charAt(r) === "*" && e.charAt(r + 1) === "/") return r + 2;
  }
  return n;
}
var ff = ZF;
function ek(e, n) {
  return n === !1 ? !1 : e.charAt(n) === "/" && e.charAt(n + 1) === "/" ? I0(e, n) : n;
}
var pf = ek;
function tk(e, n) {
  let r = null, i = n;
  for (; i !== r; ) r = i, i = Vr(e, i), i = ff(e, i), i = pf(e, i), i = jo(e, i);
  return i;
}
var mf = tk;
function nk(e, n) {
  let r = null, i = n;
  for (; i !== r; ) r = i, i = L0(e, i), i = ff(e, i), i = Vr(e, i);
  return i = pf(e, i), i = jo(e, i), i !== !1 && $r(e, i);
}
var hf = nk;
function rk(e, n) {
  let r = e.lastIndexOf(`
`);
  return r === -1 ? 0 : sf(e.slice(r + 1).match(/^[\t ]*/u)[0], n);
}
var ok = rk;
function ik(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function ak(e, n) {
  let r = e.match(new RegExp(`(${ik(n)})+`, "gu"));
  return r === null ? 0 : r.reduce((i, l) => Math.max(i, l.length / n.length), 0);
}
var lk = ak;
function sk(e, n) {
  let r = mf(e, n);
  return r === !1 ? "" : e.charAt(r);
}
var uk = sk;
function ck(e, n, r) {
  for (let i = n; i < r; ++i) if (e.charAt(i) === `
`) return !0;
  return !1;
}
var dk = ck;
function fk(e, n, r = {}) {
  return Vr(e, r.backwards ? n - 1 : n, r) !== n;
}
var pk = fk;
function mk(e, n, r) {
  let i = n === '"' ? "'" : '"', l = Ls(!1, e, /\\(.)|(["'])/gsu, (s, c, d) => c === i ? c : d === n ? "\\" + d : d || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(c) ? c : "\\" + c));
  return n + l + n;
}
var hk = mk;
function vk(e, n, r) {
  return mf(e, r(n));
}
function gk(e, n) {
  return arguments.length === 2 || typeof n == "number" ? mf(e, n) : vk(...arguments);
}
function yk(e, n, r) {
  return df(e, r(n));
}
function Dk(e, n) {
  return arguments.length === 2 || typeof n == "number" ? df(e, n) : yk(...arguments);
}
function wk(e, n, r) {
  return hf(e, r(n));
}
function xk(e, n) {
  return arguments.length === 2 || typeof n == "number" ? hf(e, n) : wk(...arguments);
}
function So(e, n = 1) {
  return async (...r) => {
    let i = r[n] ?? {}, l = i.plugins ?? [];
    return r[n] = { ...i, plugins: Array.isArray(l) ? l : Object.values(l) }, e(...r);
  };
}
var sy = So(iy);
async function uy(e, n) {
  let { formatted: r } = await sy(e, { ...n, cursorOffset: -1 });
  return r;
}
async function Ck(e, n) {
  return await uy(e, n) === e;
}
var Ek = So(V0, 0), Sk = { parse: So(VF), formatAST: So(UF), formatDoc: So(YF), printToDoc: So(KF), printDocToString: So(QF) };
const bk = ({
  date: e,
  guests: n,
  time: r,
  venue: i,
  tableSetup: l,
  currentStep: s,
  setCurrentStep: c,
  isStep1Valid: d,
  checkStep1Errors: p,
  isStep3Valid: v,
  checkStep3Errors: g,
  facilitiesSelected: D,
  cateringSelected: y,
  selectedEventPackages: x,
  totalExclVat: C
}) => {
  const [E, b] = w.useState(!1), F = uS("(min-width: 1024px)"), k = x.reduce((O, B) => {
    const W = B.duration;
    return O[W] || (O[W] = { ...B, quantity: 0, totalPrice: 0 }), O[W].quantity += 1, O[W].totalPrice += B.price, O;
  }, {}), _ = Object.entries(k).map(([O, B]) => B), P = () => /* @__PURE__ */ m.jsxs("div", { className: " mt-4 space-y-6", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ m.jsx(Gv, { className: "h-5 w-5 text-muted-foreground" }),
      /* @__PURE__ */ m.jsx("p", { className: "text-sm", children: e ? ar(e, "PPP") : "Pick a date" })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ m.jsx(qv, { className: "h-5 w-5 text-muted-foreground" }),
      /* @__PURE__ */ m.jsxs("p", { className: "text-sm", children: [
        n,
        " ",
        n > 0 ? "people" : "Select Number Guests"
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ m.jsx(sd, { className: "h-5 w-5 text-muted-foreground" }),
      /* @__PURE__ */ m.jsx("p", { className: "text-sm", children: r ? "Arrival at " + r : "Select Time" })
    ] }),
    /* @__PURE__ */ m.jsx("hr", {}),
    /* @__PURE__ */ m.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ m.jsx("h4", { className: "text-sm font-bold", children: "Venue Preference" }),
      /* @__PURE__ */ m.jsx("p", { className: "text-sm", children: i ? i + " - " + l : "Select a venue" })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ m.jsx("h4", { className: "text-sm font-bold", children: "Always included" }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ m.jsx(bo, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ m.jsx("p", { className: "text-sm", children: "Conference system" })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ m.jsx(bo, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ m.jsx("p", { className: "text-sm", children: "Presentation screen" })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ m.jsx(bo, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ m.jsx("p", { className: "text-sm", children: "Post it's & markers" })
      ] })
    ] }),
    s > 1 && x.every((O) => O) && i && n > 0 && /* @__PURE__ */ m.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ m.jsx("h4", { className: "text-sm font-bold", children: "Selected Services" }),
      _.map((O, B) => /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ m.jsx("span", { className: "text-sm", children: `${O.duration} hour meeting x ${O.quantity}` }),
        /* @__PURE__ */ m.jsxs("span", { className: "text-sm", children: [
          O.totalPrice,
          "€"
        ] })
      ] }, B)),
      D.map((O, B) => /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ m.jsxs("span", { className: "text-sm", children: [
          `${O.title}`,
          /* @__PURE__ */ m.jsx("span", { className: "text-muted-foreground", children: x.length > 1 ? " per day" : "" })
        ] }),
        /* @__PURE__ */ m.jsx("span", { className: "text-sm", children: `${O.price}€` })
      ] }, B)),
      y.map((O, B) => /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ m.jsxs("span", { className: "text-sm", children: [
          `${O.name} x ${O.quantity}`,
          /* @__PURE__ */ m.jsx("span", { className: "text-muted-foreground", children: x.length > 1 ? " per day" : "" })
        ] }),
        /* @__PURE__ */ m.jsx("span", { className: "text-sm", children: `${O.price * O.quantity}€` })
      ] }, B)),
      s > 1 && i && n > 0 && /* @__PURE__ */ m.jsx("hr", {}),
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ m.jsx("span", { className: "text-md font-medium", children: "Total excl. VAT" }),
        /* @__PURE__ */ m.jsx("span", { className: "text-md font-medium", children: `${C}€` })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ m.jsx("span", { className: "text-xs text-muted-foreground", children: "Per person" }),
        /* @__PURE__ */ m.jsx("span", { className: "text-sm text-muted-foreground", children: `${parseFloat(C / n).toFixed(2)}€` })
      ] })
    ] })
  ] });
  return F ? /* @__PURE__ */ m.jsx("div", { className: "w-1/4 p-8 bg-gray-50 overflow-visible mt-0 rounded-md", children: /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col sticky top-10 space-x-2", children: [
    /* @__PURE__ */ m.jsx("h3", { className: "text-lg font-bold", children: "Overview" }),
    /* @__PURE__ */ m.jsx(P, {})
  ] }) }) : /* @__PURE__ */ m.jsxs(Gg, { open: E, onOpenChange: b, children: [
    /* @__PURE__ */ m.jsx("div", { className: "h-fit inset-x-0 z-[40] m-0 flex items-center h-auto flex-col rounded-t-[10px] border bg-background", children: /* @__PURE__ */ m.jsxs("div", { className: "w-full flex flex-row items-center justify-between p-2", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2 bg-gray-50 rounded-full p-1 px-2 text-primary", onClick: () => b(!0), children: [
        /* @__PURE__ */ m.jsx("span", { className: "text-sm text-muted-foreground font-medium", children: "Overview" }),
        /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-center bg-gray-100 h-8 w-8 rounded-full m-1", children: /* @__PURE__ */ m.jsx(q1, { className: "h-8 w-8 text-primary" }) })
      ] }),
      s === 1 && /* @__PURE__ */ m.jsx(qe, { className: "ml-auto", disabled: !d(), onClick: () => p() && d() && c(2), children: "Add Event Options" }),
      s === 2 && /* @__PURE__ */ m.jsxs("div", { className: "relative space-x-4 flex justify-center items-center", children: [
        /* @__PURE__ */ m.jsx(qe, { variant: "outline", onClick: () => c(1), children: /* @__PURE__ */ m.jsx(hi, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
        /* @__PURE__ */ m.jsx(qe, { className: "ml-auto", onClick: () => c(3), children: "Next" })
      ] }),
      s === 3 && /* @__PURE__ */ m.jsxs("div", { className: "flex space-x-4 items-center", children: [
        /* @__PURE__ */ m.jsx(qe, { variant: "outline", onClick: () => c(2), children: /* @__PURE__ */ m.jsx(hi, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
        /* @__PURE__ */ m.jsxs(qe, { onClick: () => g() && v() && handleSubmit(), children: [
          "Request Proposal ",
          /* @__PURE__ */ m.jsx(Fa, { className: "ml-2 h-5 w-5 text-white" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ m.jsx(Jg, { className: "block lg:hidden", children: /* @__PURE__ */ m.jsxs("div", { className: "h-[95%] p-4 lg:p-0 w-full flex flex-col fixed", children: [
      /* @__PURE__ */ m.jsx(Zg, { children: /* @__PURE__ */ m.jsx(e0, { children: "Event Overview" }) }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col items-between justify-start h-full overflow-y-auto", children: [
        /* @__PURE__ */ m.jsx(P, {}),
        s === 1 && /* @__PURE__ */ m.jsx(qe, { className: "w-full mt-auto", disabled: !d(), onClick: () => {
          c(2), b(!1);
        }, children: "Add Event Options" }),
        s === 2 && /* @__PURE__ */ m.jsxs("div", { className: "relative mt-12 space-x-4 flex justify-center items-center", children: [
          /* @__PURE__ */ m.jsx(qe, { variant: "outline", onClick: () => {
            c(1), b(!1);
          }, children: /* @__PURE__ */ m.jsx(hi, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
          /* @__PURE__ */ m.jsx(qe, { className: "ml-auto w-full", onClick: () => {
            c(3), b(!1);
          }, children: "Next" })
        ] }),
        s === 3 && /* @__PURE__ */ m.jsxs("div", { className: "relative mt-12 space-x-4 flex justify-center items-cente", children: [
          /* @__PURE__ */ m.jsx(qe, { variant: "outline", onClick: () => {
            c(2), b(!1);
          }, children: /* @__PURE__ */ m.jsx(hi, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
          /* @__PURE__ */ m.jsxs(qe, { className: "w-full", disabled: !v(), children: [
            "Request Proposal ",
            /* @__PURE__ */ m.jsx(Fa, { className: "ml-2 h-5 w-5 text-white" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
var Fk = "Label", cy = w.forwardRef((e, n) => /* @__PURE__ */ m.jsx(
  Ae.label,
  {
    ...e,
    ref: n,
    onMouseDown: (r) => {
      var l;
      r.target.closest("button, input, select, textarea") || ((l = e.onMouseDown) == null || l.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
cy.displayName = Fk;
var dy = cy;
const kk = Hv(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Eo = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(dy, { ref: r, className: ke(kk(), e), ...n }));
Eo.displayName = dy.displayName;
const yn = w.forwardRef(({ className: e, type: n, ...r }, i) => /* @__PURE__ */ m.jsx(
  "input",
  {
    type: n,
    className: ke(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: i,
    ...r
  }
));
yn.displayName = "Input";
function vf(e) {
  const n = w.useRef({ value: e, previous: e });
  return w.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
function gf(e) {
  const [n, r] = w.useState(void 0);
  return Ft(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const i = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const s = l[0];
        let c, d;
        if ("borderBoxSize" in s) {
          const p = s.borderBoxSize, v = Array.isArray(p) ? p[0] : p;
          c = v.inlineSize, d = v.blockSize;
        } else
          c = e.offsetWidth, d = e.offsetHeight;
        r({ width: c, height: d });
      });
      return i.observe(e, { box: "border-box" }), () => i.unobserve(e);
    } else
      r(void 0);
  }, [e]), n;
}
var yf = "Switch", [Nk, Wj] = Qr(yf), [_k, Pk] = Nk(yf), fy = w.forwardRef(
  (e, n) => {
    const {
      __scopeSwitch: r,
      name: i,
      checked: l,
      defaultChecked: s,
      required: c,
      disabled: d,
      value: p = "on",
      onCheckedChange: v,
      ...g
    } = e, [D, y] = w.useState(null), x = Me(n, (k) => y(k)), C = w.useRef(!1), E = D ? !!D.closest("form") : !0, [b = !1, F] = Si({
      prop: l,
      defaultProp: s,
      onChange: v
    });
    return /* @__PURE__ */ m.jsxs(_k, { scope: r, checked: b, disabled: d, children: [
      /* @__PURE__ */ m.jsx(
        Ae.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": b,
          "aria-required": c,
          "data-state": hy(b),
          "data-disabled": d ? "" : void 0,
          disabled: d,
          value: p,
          ...g,
          ref: x,
          onClick: Pe(e.onClick, (k) => {
            F((_) => !_), E && (C.current = k.isPropagationStopped(), C.current || k.stopPropagation());
          })
        }
      ),
      E && /* @__PURE__ */ m.jsx(
        jk,
        {
          control: D,
          bubbles: !C.current,
          name: i,
          value: p,
          checked: b,
          required: c,
          disabled: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
fy.displayName = yf;
var py = "SwitchThumb", my = w.forwardRef(
  (e, n) => {
    const { __scopeSwitch: r, ...i } = e, l = Pk(py, r);
    return /* @__PURE__ */ m.jsx(
      Ae.span,
      {
        "data-state": hy(l.checked),
        "data-disabled": l.disabled ? "" : void 0,
        ...i,
        ref: n
      }
    );
  }
);
my.displayName = py;
var jk = (e) => {
  const { control: n, checked: r, bubbles: i = !0, ...l } = e, s = w.useRef(null), c = vf(r), d = gf(n);
  return w.useEffect(() => {
    const p = s.current, v = window.HTMLInputElement.prototype, D = Object.getOwnPropertyDescriptor(v, "checked").set;
    if (c !== r && D) {
      const y = new Event("click", { bubbles: i });
      D.call(p, r), p.dispatchEvent(y);
    }
  }, [c, r, i]), /* @__PURE__ */ m.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: r,
      ...l,
      tabIndex: -1,
      ref: s,
      style: {
        ...e.style,
        ...d,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function hy(e) {
  return e ? "checked" : "unchecked";
}
var vy = fy, Ak = my;
const gy = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  vy,
  {
    className: ke(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...n,
    ref: r,
    children: /* @__PURE__ */ m.jsx(
      Ak,
      {
        className: ke(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
gy.displayName = vy.displayName;
const Ma = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ref: r,
    className: ke("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...n
  }
));
Ma.displayName = "Card";
const Ok = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ref: r,
    className: ke("flex flex-col space-y-1.5 p-6", e),
    ...n
  }
));
Ok.displayName = "CardHeader";
const Tk = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  "h3",
  {
    ref: r,
    className: ke("text-2xl font-semibold leading-none tracking-tight", e),
    ...n
  }
));
Tk.displayName = "CardTitle";
const Rk = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  "p",
  {
    ref: r,
    className: ke("text-sm text-muted-foreground", e),
    ...n
  }
));
Rk.displayName = "CardDescription";
const La = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx("div", { ref: r, className: ke("p-6 pt-0", e), ...n }));
La.displayName = "CardContent";
const Mk = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ref: r,
    className: ke("flex items-center p-6 pt-0", e),
    ...n
  }
));
Mk.displayName = "CardFooter";
function xv({ title: e, id: n, description: r, onClick: i, isSelected: l, noneSelected: s, isDisabled: c }) {
  return /* @__PURE__ */ m.jsx(Ma, { className: ke(
    "relative hover:opacity-[1] bg-gray-50",
    l ? "border-primary" : s ? "" : "opacity-[0.5]",
    c ? "cursor-not-allowed opacity-[0.5] hover:opacity-[0.5]" : ""
  ), children: /* @__PURE__ */ m.jsxs(La, { className: "p-6", children: [
    /* @__PURE__ */ m.jsx("h4", { className: "text-lg font-bold", children: e }),
    /* @__PURE__ */ m.jsx("p", { className: "text-sm", children: r }),
    /* @__PURE__ */ m.jsxs(qe, { className: "mt-4 outline-none", disabled: c, onClick: i, children: [
      /* @__PURE__ */ m.jsx("span", { className: l && "hidden", children: "Choose" }),
      /* @__PURE__ */ m.jsx("div", { className: `${!l && "hidden"} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`, children: /* @__PURE__ */ m.jsx(bo, { className: "h-4 w-4 text-white " }) })
    ] })
  ] }) });
}
function Lk({
  isSelected: e,
  venue_name: n,
  venue_description: r,
  image_url: i,
  capacity: l,
  area: s,
  onClick: c
}) {
  return /* @__PURE__ */ m.jsx(
    Ma,
    {
      className: ke("relative bg-gray-50 border-2 shadow-md border-transparent hover:border-primary hover:cursor-pointer", e && "border-primary"),
      onClick: c,
      children: /* @__PURE__ */ m.jsxs(La, { className: "p-6", children: [
        /* @__PURE__ */ m.jsx(
          "img",
          {
            src: i,
            alt: n,
            loading: "lazy",
            className: "w-full h-40 rounded-md object-cover"
          }
        ),
        /* @__PURE__ */ m.jsx("h4", { className: "text-lg font-bold mt-4", children: n }),
        /* @__PURE__ */ m.jsx("p", { className: "text-sm", children: r }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [
          /* @__PURE__ */ m.jsx(qv, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ m.jsxs("p", { className: "text-sm", children: [
            "up to ",
            l,
            " people"
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [
          /* @__PURE__ */ m.jsx(K1, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ m.jsx("p", { className: "text-sm", children: `${s} m^2` })
        ] }),
        /* @__PURE__ */ m.jsxs(qe, { className: "mt-4 outline-none", onClick: c, children: [
          /* @__PURE__ */ m.jsx("span", { className: e && "hidden", children: "Choose" }),
          /* @__PURE__ */ m.jsx("div", { className: `${!e && "hidden"} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`, children: /* @__PURE__ */ m.jsx(bo, { className: "h-4 w-4 text-white " }) })
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
const Ik = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yy = (...e) => e.filter((n, r, i) => !!n && i.indexOf(n) === r).join(" ");
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Bk = {
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
const Wk = w.forwardRef(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: i,
    className: l = "",
    children: s,
    iconNode: c,
    ...d
  }, p) => w.createElement(
    "svg",
    {
      ref: p,
      ...Bk,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: i ? Number(r) * 24 / Number(n) : r,
      className: yy("lucide", l),
      ...d
    },
    [
      ...c.map(([v, g]) => w.createElement(v, g)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ia = (e, n) => {
  const r = w.forwardRef(
    ({ className: i, ...l }, s) => w.createElement(Wk, {
      ref: s,
      iconNode: n,
      className: yy(`lucide-${Ik(e)}`, i),
      ...l
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dy = Ia("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = Ia("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zk = Ia("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $k = Ia("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hk = Ia("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
var we = function() {
  return we = Object.assign || function(n) {
    for (var r, i = 1, l = arguments.length; i < l; i++) {
      r = arguments[i];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (n[s] = r[s]);
    }
    return n;
  }, we.apply(this, arguments);
};
function Vk(e, n) {
  var r = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(e); l < i.length; l++)
      n.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[l]) && (r[i[l]] = e[i[l]]);
  return r;
}
function xy(e, n, r) {
  for (var i = 0, l = n.length, s; i < l; i++)
    (s || !(i in n)) && (s || (s = Array.prototype.slice.call(n, 0, i)), s[i] = n[i]);
  return e.concat(s || Array.prototype.slice.call(n));
}
function Ba(e) {
  return e.mode === "multiple";
}
function Wa(e) {
  return e.mode === "range";
}
function Hs(e) {
  return e.mode === "single";
}
var Uk = {
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
function Yk(e, n) {
  return ar(e, "LLLL y", n);
}
function Kk(e, n) {
  return ar(e, "d", n);
}
function Qk(e, n) {
  return ar(e, "LLLL", n);
}
function Xk(e) {
  return "".concat(e);
}
function Gk(e, n) {
  return ar(e, "cccccc", n);
}
function qk(e, n) {
  return ar(e, "yyyy", n);
}
var Jk = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Yk,
  formatDay: Kk,
  formatMonthCaption: Qk,
  formatWeekNumber: Xk,
  formatWeekdayName: Gk,
  formatYearCaption: qk
}), Zk = function(e, n, r) {
  return ar(e, "do MMMM (EEEE)", r);
}, eN = function() {
  return "Month: ";
}, tN = function() {
  return "Go to next month";
}, nN = function() {
  return "Go to previous month";
}, rN = function(e, n) {
  return ar(e, "cccc", n);
}, oN = function(e) {
  return "Week n. ".concat(e);
}, iN = function() {
  return "Year: ";
}, aN = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Zk,
  labelMonthDropdown: eN,
  labelNext: tN,
  labelPrevious: nN,
  labelWeekNumber: oN,
  labelWeekday: rN,
  labelYearDropdown: iN
});
function lN() {
  var e = "buttons", n = Uk, r = tg, i = {}, l = {}, s = 1, c = {}, d = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: n,
    formatters: Jk,
    labels: aN,
    locale: r,
    modifiersClassNames: i,
    modifiers: l,
    numberOfMonths: s,
    styles: c,
    today: d,
    mode: "default"
  };
}
function sN(e) {
  var n = e.fromYear, r = e.toYear, i = e.fromMonth, l = e.toMonth, s = e.fromDate, c = e.toDate;
  return i ? s = Bt(i) : n && (s = new Date(n, 0, 1)), l ? c = Md(l) : r && (c = new Date(r, 11, 31)), {
    fromDate: s ? Ei(s) : void 0,
    toDate: c ? Ei(c) : void 0
  };
}
var Cy = w.createContext(void 0);
function uN(e) {
  var n, r = e.initialProps, i = lN(), l = sN(r), s = l.fromDate, c = l.toDate, d = (n = r.captionLayout) !== null && n !== void 0 ? n : i.captionLayout;
  d !== "buttons" && (!s || !c) && (d = "buttons");
  var p;
  (Hs(r) || Ba(r) || Wa(r)) && (p = r.onSelect);
  var v = we(we(we({}, i), r), { captionLayout: d, classNames: we(we({}, i.classNames), r.classNames), components: we({}, r.components), formatters: we(we({}, i.formatters), r.formatters), fromDate: s, labels: we(we({}, i.labels), r.labels), mode: r.mode || i.mode, modifiers: we(we({}, i.modifiers), r.modifiers), modifiersClassNames: we(we({}, i.modifiersClassNames), r.modifiersClassNames), onSelect: p, styles: we(we({}, i.styles), r.styles), toDate: c });
  return m.jsx(Cy.Provider, { value: v, children: e.children });
}
function Ue() {
  var e = w.useContext(Cy);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Ey(e) {
  var n = Ue(), r = n.locale, i = n.classNames, l = n.styles, s = n.formatters.formatCaption;
  return m.jsx("div", { className: i.caption_label, style: l.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: s(e.displayMonth, { locale: r }) });
}
function cN(e) {
  return m.jsx("svg", we({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: m.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Sy(e) {
  var n, r, i = e.onChange, l = e.value, s = e.children, c = e.caption, d = e.className, p = e.style, v = Ue(), g = (r = (n = v.components) === null || n === void 0 ? void 0 : n.IconDropdown) !== null && r !== void 0 ? r : cN;
  return m.jsxs("div", { className: d, style: p, children: [m.jsx("span", { className: v.classNames.vhidden, children: e["aria-label"] }), m.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: v.classNames.dropdown, style: v.styles.dropdown, value: l, onChange: i, children: s }), m.jsxs("div", { className: v.classNames.caption_label, style: v.styles.caption_label, "aria-hidden": "true", children: [c, m.jsx(g, { className: v.classNames.dropdown_icon, style: v.styles.dropdown_icon })] })] });
}
function dN(e) {
  var n, r = Ue(), i = r.fromDate, l = r.toDate, s = r.styles, c = r.locale, d = r.formatters.formatMonthCaption, p = r.classNames, v = r.components, g = r.labels.labelMonthDropdown;
  if (!i)
    return m.jsx(m.Fragment, {});
  if (!l)
    return m.jsx(m.Fragment, {});
  var D = [];
  if (i2(i, l))
    for (var y = Bt(i), x = i.getMonth(); x <= l.getMonth(); x++)
      D.push(Mc(y, x));
  else
    for (var y = Bt(/* @__PURE__ */ new Date()), x = 0; x <= 11; x++)
      D.push(Mc(y, x));
  var C = function(b) {
    var F = Number(b.target.value), k = Mc(Bt(e.displayMonth), F);
    e.onChange(k);
  }, E = (n = v == null ? void 0 : v.Dropdown) !== null && n !== void 0 ? n : Sy;
  return m.jsx(E, { name: "months", "aria-label": g(), className: p.dropdown_month, style: s.dropdown_month, onChange: C, value: e.displayMonth.getMonth(), caption: d(e.displayMonth, { locale: c }), children: D.map(function(b) {
    return m.jsx("option", { value: b.getMonth(), children: d(b, { locale: c }) }, b.getMonth());
  }) });
}
function fN(e) {
  var n, r = e.displayMonth, i = Ue(), l = i.fromDate, s = i.toDate, c = i.locale, d = i.styles, p = i.classNames, v = i.components, g = i.formatters.formatYearCaption, D = i.labels.labelYearDropdown, y = [];
  if (!l)
    return m.jsx(m.Fragment, {});
  if (!s)
    return m.jsx(m.Fragment, {});
  for (var x = l.getFullYear(), C = s.getFullYear(), E = x; E <= C; E++)
    y.push(Ph(Zv(/* @__PURE__ */ new Date()), E));
  var b = function(k) {
    var _ = Ph(Bt(r), Number(k.target.value));
    e.onChange(_);
  }, F = (n = v == null ? void 0 : v.Dropdown) !== null && n !== void 0 ? n : Sy;
  return m.jsx(F, { name: "years", "aria-label": D(), className: p.dropdown_year, style: d.dropdown_year, onChange: b, value: r.getFullYear(), caption: g(r, { locale: c }), children: y.map(function(k) {
    return m.jsx("option", { value: k.getFullYear(), children: g(k, { locale: c }) }, k.getFullYear());
  }) });
}
function pN(e, n) {
  var r = w.useState(e), i = r[0], l = r[1], s = n === void 0 ? i : n;
  return [s, l];
}
function mN(e) {
  var n = e.month, r = e.defaultMonth, i = e.today, l = n || r || i || /* @__PURE__ */ new Date(), s = e.toDate, c = e.fromDate, d = e.numberOfMonths, p = d === void 0 ? 1 : d;
  if (s && _a(s, l) < 0) {
    var v = -1 * (p - 1);
    l = Dn(s, v);
  }
  return c && _a(l, c) < 0 && (l = c), Bt(l);
}
function hN() {
  var e = Ue(), n = mN(e), r = pN(n, e.month), i = r[0], l = r[1], s = function(c) {
    var d;
    if (!e.disableNavigation) {
      var p = Bt(c);
      l(p), (d = e.onMonthChange) === null || d === void 0 || d.call(e, p);
    }
  };
  return [i, s];
}
function vN(e, n) {
  for (var r = n.reverseMonths, i = n.numberOfMonths, l = Bt(e), s = Bt(Dn(l, i)), c = _a(s, l), d = [], p = 0; p < c; p++) {
    var v = Dn(l, p);
    d.push(v);
  }
  return r && (d = d.reverse()), d;
}
function gN(e, n) {
  if (!n.disableNavigation) {
    var r = n.toDate, i = n.pagedNavigation, l = n.numberOfMonths, s = l === void 0 ? 1 : l, c = i ? s : 1, d = Bt(e);
    if (!r)
      return Dn(d, c);
    var p = _a(r, e);
    if (!(p < s))
      return Dn(d, c);
  }
}
function yN(e, n) {
  if (!n.disableNavigation) {
    var r = n.fromDate, i = n.pagedNavigation, l = n.numberOfMonths, s = l === void 0 ? 1 : l, c = i ? s : 1, d = Bt(e);
    if (!r)
      return Dn(d, -c);
    var p = _a(d, r);
    if (!(p <= 0))
      return Dn(d, -c);
  }
}
var by = w.createContext(void 0);
function DN(e) {
  var n = Ue(), r = hN(), i = r[0], l = r[1], s = vN(i, n), c = gN(i, n), d = yN(i, n), p = function(D) {
    return s.some(function(y) {
      return Id(D, y);
    });
  }, v = function(D, y) {
    p(D) || (y && ag(D, y) ? l(Dn(D, 1 + n.numberOfMonths * -1)) : l(D));
  }, g = {
    currentMonth: i,
    displayMonths: s,
    goToMonth: l,
    goToDate: v,
    previousMonth: d,
    nextMonth: c,
    isDateDisplayed: p
  };
  return m.jsx(by.Provider, { value: g, children: e.children });
}
function za() {
  var e = w.useContext(by);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Cv(e) {
  var n, r = Ue(), i = r.classNames, l = r.styles, s = r.components, c = za().goToMonth, d = function(g) {
    c(Dn(g, e.displayIndex ? -e.displayIndex : 0));
  }, p = (n = s == null ? void 0 : s.CaptionLabel) !== null && n !== void 0 ? n : Ey, v = m.jsx(p, { id: e.id, displayMonth: e.displayMonth });
  return m.jsxs("div", { className: i.caption_dropdowns, style: l.caption_dropdowns, children: [m.jsx("div", { className: i.vhidden, children: v }), m.jsx(dN, { onChange: d, displayMonth: e.displayMonth }), m.jsx(fN, { onChange: d, displayMonth: e.displayMonth })] });
}
function wN(e) {
  return m.jsx("svg", we({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: m.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function xN(e) {
  return m.jsx("svg", we({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: m.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var ws = w.forwardRef(function(e, n) {
  var r = Ue(), i = r.classNames, l = r.styles, s = [i.button_reset, i.button];
  e.className && s.push(e.className);
  var c = s.join(" "), d = we(we({}, l.button_reset), l.button);
  return e.style && Object.assign(d, e.style), m.jsx("button", we({}, e, { ref: n, type: "button", className: c, style: d }));
});
function CN(e) {
  var n, r, i = Ue(), l = i.dir, s = i.locale, c = i.classNames, d = i.styles, p = i.labels, v = p.labelPrevious, g = p.labelNext, D = i.components;
  if (!e.nextMonth && !e.previousMonth)
    return m.jsx(m.Fragment, {});
  var y = v(e.previousMonth, { locale: s }), x = [
    c.nav_button,
    c.nav_button_previous
  ].join(" "), C = g(e.nextMonth, { locale: s }), E = [
    c.nav_button,
    c.nav_button_next
  ].join(" "), b = (n = D == null ? void 0 : D.IconRight) !== null && n !== void 0 ? n : xN, F = (r = D == null ? void 0 : D.IconLeft) !== null && r !== void 0 ? r : wN;
  return m.jsxs("div", { className: c.nav, style: d.nav, children: [!e.hidePrevious && m.jsx(ws, { name: "previous-month", "aria-label": y, className: x, style: d.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: l === "rtl" ? m.jsx(b, { className: c.nav_icon, style: d.nav_icon }) : m.jsx(F, { className: c.nav_icon, style: d.nav_icon }) }), !e.hideNext && m.jsx(ws, { name: "next-month", "aria-label": C, className: E, style: d.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: l === "rtl" ? m.jsx(F, { className: c.nav_icon, style: d.nav_icon }) : m.jsx(b, { className: c.nav_icon, style: d.nav_icon }) })] });
}
function Ev(e) {
  var n = Ue().numberOfMonths, r = za(), i = r.previousMonth, l = r.nextMonth, s = r.goToMonth, c = r.displayMonths, d = c.findIndex(function(C) {
    return Id(e.displayMonth, C);
  }), p = d === 0, v = d === c.length - 1, g = n > 1 && (p || !v), D = n > 1 && (v || !p), y = function() {
    i && s(i);
  }, x = function() {
    l && s(l);
  };
  return m.jsx(CN, { displayMonth: e.displayMonth, hideNext: g, hidePrevious: D, nextMonth: l, previousMonth: i, onPreviousClick: y, onNextClick: x });
}
function EN(e) {
  var n, r = Ue(), i = r.classNames, l = r.disableNavigation, s = r.styles, c = r.captionLayout, d = r.components, p = (n = d == null ? void 0 : d.CaptionLabel) !== null && n !== void 0 ? n : Ey, v;
  return l ? v = m.jsx(p, { id: e.id, displayMonth: e.displayMonth }) : c === "dropdown" ? v = m.jsx(Cv, { displayMonth: e.displayMonth, id: e.id }) : c === "dropdown-buttons" ? v = m.jsxs(m.Fragment, { children: [m.jsx(Cv, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), m.jsx(Ev, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : v = m.jsxs(m.Fragment, { children: [m.jsx(p, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), m.jsx(Ev, { displayMonth: e.displayMonth, id: e.id })] }), m.jsx("div", { className: i.caption, style: s.caption, children: v });
}
function SN(e) {
  var n = Ue(), r = n.footer, i = n.styles, l = n.classNames.tfoot;
  return r ? m.jsx("tfoot", { className: l, style: i.tfoot, children: m.jsx("tr", { children: m.jsx("td", { colSpan: 8, children: r }) }) }) : m.jsx(m.Fragment, {});
}
function bN(e, n, r) {
  for (var i = r ? _o(/* @__PURE__ */ new Date()) : Ln(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: n }), l = [], s = 0; s < 7; s++) {
    var c = _t(i, s);
    l.push(c);
  }
  return l;
}
function FN() {
  var e = Ue(), n = e.classNames, r = e.styles, i = e.showWeekNumber, l = e.locale, s = e.weekStartsOn, c = e.ISOWeek, d = e.formatters.formatWeekdayName, p = e.labels.labelWeekday, v = bN(l, s, c);
  return m.jsxs("tr", { style: r.head_row, className: n.head_row, children: [i && m.jsx("td", { style: r.head_cell, className: n.head_cell }), v.map(function(g, D) {
    return m.jsx("th", { scope: "col", className: n.head_cell, style: r.head_cell, "aria-label": p(g, { locale: l }), children: d(g, { locale: l }) }, D);
  })] });
}
function kN() {
  var e, n = Ue(), r = n.classNames, i = n.styles, l = n.components, s = (e = l == null ? void 0 : l.HeadRow) !== null && e !== void 0 ? e : FN;
  return m.jsx("thead", { style: i.head, className: r.head, children: m.jsx(s, {}) });
}
function NN(e) {
  var n = Ue(), r = n.locale, i = n.formatters.formatDay;
  return m.jsx(m.Fragment, { children: i(e.date, { locale: r }) });
}
var Df = w.createContext(void 0);
function _N(e) {
  if (!Ba(e.initialProps)) {
    var n = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return m.jsx(Df.Provider, { value: n, children: e.children });
  }
  return m.jsx(PN, { initialProps: e.initialProps, children: e.children });
}
function PN(e) {
  var n = e.initialProps, r = e.children, i = n.selected, l = n.min, s = n.max, c = function(v, g, D) {
    var y, x;
    (y = n.onDayClick) === null || y === void 0 || y.call(n, v, g, D);
    var C = !!(g.selected && l && (i == null ? void 0 : i.length) === l);
    if (!C) {
      var E = !!(!g.selected && s && (i == null ? void 0 : i.length) === s);
      if (!E) {
        var b = i ? xy([], i) : [];
        if (g.selected) {
          var F = b.findIndex(function(k) {
            return It(v, k);
          });
          b.splice(F, 1);
        } else
          b.push(v);
        (x = n.onSelect) === null || x === void 0 || x.call(n, b, v, g, D);
      }
    }
  }, d = {
    disabled: []
  };
  i && d.disabled.push(function(v) {
    var g = s && i.length > s - 1, D = i.some(function(y) {
      return It(y, v);
    });
    return !!(g && !D);
  });
  var p = {
    selected: i,
    onDayClick: c,
    modifiers: d
  };
  return m.jsx(Df.Provider, { value: p, children: r });
}
function wf() {
  var e = w.useContext(Df);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function jN(e, n) {
  var r = n || {}, i = r.from, l = r.to;
  return i && l ? It(l, e) && It(i, e) ? void 0 : It(l, e) ? { from: l, to: void 0 } : It(i, e) ? void 0 : cd(i, e) ? { from: e, to: l } : { from: i, to: e } : l ? cd(e, l) ? { from: l, to: e } : { from: e, to: l } : i ? ag(e, i) ? { from: e, to: i } : { from: i, to: e } : { from: e, to: void 0 };
}
var xf = w.createContext(void 0);
function AN(e) {
  if (!Wa(e.initialProps)) {
    var n = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return m.jsx(xf.Provider, { value: n, children: e.children });
  }
  return m.jsx(ON, { initialProps: e.initialProps, children: e.children });
}
function ON(e) {
  var n = e.initialProps, r = e.children, i = n.selected, l = i || {}, s = l.from, c = l.to, d = n.min, p = n.max, v = function(x, C, E) {
    var b, F;
    (b = n.onDayClick) === null || b === void 0 || b.call(n, x, C, E);
    var k = jN(x, i);
    (F = n.onSelect) === null || F === void 0 || F.call(n, k, x, C, E);
  }, g = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (s ? (g.range_start = [s], c ? (g.range_end = [c], It(s, c) || (g.range_middle = [
    {
      after: s,
      before: c
    }
  ])) : g.range_end = [s]) : c && (g.range_start = [c], g.range_end = [c]), d && (s && !c && g.disabled.push({
    after: Rc(s, d - 1),
    before: _t(s, d - 1)
  }), s && c && g.disabled.push({
    after: s,
    before: _t(s, d - 1)
  }), !s && c && g.disabled.push({
    after: Rc(c, d - 1),
    before: _t(c, d - 1)
  })), p) {
    if (s && !c && (g.disabled.push({
      before: _t(s, -p + 1)
    }), g.disabled.push({
      after: _t(s, p - 1)
    })), s && c) {
      var D = Rn(c, s) + 1, y = p - D;
      g.disabled.push({
        before: Rc(s, y)
      }), g.disabled.push({
        after: _t(c, y)
      });
    }
    !s && c && (g.disabled.push({
      before: _t(c, -p + 1)
    }), g.disabled.push({
      after: _t(c, p - 1)
    }));
  }
  return m.jsx(xf.Provider, { value: { selected: i, onDayClick: v, modifiers: g }, children: r });
}
function Cf() {
  var e = w.useContext(xf);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function fs(e) {
  return Array.isArray(e) ? xy([], e) : e !== void 0 ? [e] : [];
}
function TN(e) {
  var n = {};
  return Object.entries(e).forEach(function(r) {
    var i = r[0], l = r[1];
    n[i] = fs(l);
  }), n;
}
var wn;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(wn || (wn = {}));
var RN = wn.Selected, er = wn.Disabled, MN = wn.Hidden, LN = wn.Today, Zc = wn.RangeEnd, ed = wn.RangeMiddle, td = wn.RangeStart, IN = wn.Outside;
function BN(e, n, r) {
  var i, l = (i = {}, i[RN] = fs(e.selected), i[er] = fs(e.disabled), i[MN] = fs(e.hidden), i[LN] = [e.today], i[Zc] = [], i[ed] = [], i[td] = [], i[IN] = [], i);
  return e.fromDate && l[er].push({ before: e.fromDate }), e.toDate && l[er].push({ after: e.toDate }), Ba(e) ? l[er] = l[er].concat(n.modifiers[er]) : Wa(e) && (l[er] = l[er].concat(r.modifiers[er]), l[td] = r.modifiers[td], l[ed] = r.modifiers[ed], l[Zc] = r.modifiers[Zc]), l;
}
var Fy = w.createContext(void 0);
function WN(e) {
  var n = Ue(), r = wf(), i = Cf(), l = BN(n, r, i), s = TN(n.modifiers), c = we(we({}, l), s);
  return m.jsx(Fy.Provider, { value: c, children: e.children });
}
function ky() {
  var e = w.useContext(Fy);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function zN(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function $N(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function HN(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function VN(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function UN(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function YN(e, n) {
  var r, i = n.from, l = n.to;
  if (i && l) {
    var s = Rn(l, i) < 0;
    s && (r = [l, i], i = r[0], l = r[1]);
    var c = Rn(e, i) >= 0 && Rn(l, e) >= 0;
    return c;
  }
  return l ? It(l, e) : i ? It(i, e) : !1;
}
function KN(e) {
  return Rd(e);
}
function QN(e) {
  return Array.isArray(e) && e.every(Rd);
}
function XN(e, n) {
  return n.some(function(r) {
    if (typeof r == "boolean")
      return r;
    if (KN(r))
      return It(e, r);
    if (QN(r))
      return r.includes(e);
    if ($N(r))
      return YN(e, r);
    if (UN(r))
      return r.dayOfWeek.includes(e.getDay());
    if (zN(r)) {
      var i = Rn(r.before, e), l = Rn(r.after, e), s = i > 0, c = l < 0, d = cd(r.before, r.after);
      return d ? c && s : s || c;
    }
    return HN(r) ? Rn(e, r.after) > 0 : VN(r) ? Rn(r.before, e) > 0 : typeof r == "function" ? r(e) : !1;
  });
}
function Ef(e, n, r) {
  var i = Object.keys(n).reduce(function(s, c) {
    var d = n[c];
    return XN(e, d) && s.push(c), s;
  }, []), l = {};
  return i.forEach(function(s) {
    return l[s] = !0;
  }), r && !Id(e, r) && (l.outside = !0), l;
}
function GN(e, n) {
  for (var r = Bt(e[0]), i = Md(e[e.length - 1]), l, s, c = r; c <= i; ) {
    var d = Ef(c, n), p = !d.disabled && !d.hidden;
    if (!p) {
      c = _t(c, 1);
      continue;
    }
    if (d.selected)
      return c;
    d.today && !s && (s = c), l || (l = c), c = _t(c, 1);
  }
  return s || l;
}
var qN = 365;
function Ny(e, n) {
  var r = n.moveBy, i = n.direction, l = n.context, s = n.modifiers, c = n.retry, d = c === void 0 ? { count: 0, lastFocused: e } : c, p = l.weekStartsOn, v = l.fromDate, g = l.toDate, D = l.locale, y = {
    day: _t,
    week: ud,
    month: Dn,
    year: tC,
    startOfWeek: function(b) {
      return l.ISOWeek ? _o(b) : Ln(b, { locale: D, weekStartsOn: p });
    },
    endOfWeek: function(b) {
      return l.ISOWeek ? eg(b) : Ld(b, { locale: D, weekStartsOn: p });
    }
  }, x = y[r](e, i === "after" ? 1 : -1);
  i === "before" && v ? x = nC([v, x]) : i === "after" && g && (x = rC([g, x]));
  var C = !0;
  if (s) {
    var E = Ef(x, s);
    C = !E.disabled && !E.hidden;
  }
  return C ? x : d.count > qN ? d.lastFocused : Ny(x, {
    moveBy: r,
    direction: i,
    context: l,
    modifiers: s,
    retry: we(we({}, d), { count: d.count + 1 })
  });
}
var _y = w.createContext(void 0);
function JN(e) {
  var n = za(), r = ky(), i = w.useState(), l = i[0], s = i[1], c = w.useState(), d = c[0], p = c[1], v = GN(n.displayMonths, r), g = l ?? (d && n.isDateDisplayed(d)) ? d : v, D = function() {
    p(l), s(void 0);
  }, y = function(b) {
    s(b);
  }, x = Ue(), C = function(b, F) {
    if (l) {
      var k = Ny(l, {
        moveBy: b,
        direction: F,
        context: x,
        modifiers: r
      });
      It(l, k) || (n.goToDate(k, l), y(k));
    }
  }, E = {
    focusedDay: l,
    focusTarget: g,
    blur: D,
    focus: y,
    focusDayAfter: function() {
      return C("day", "after");
    },
    focusDayBefore: function() {
      return C("day", "before");
    },
    focusWeekAfter: function() {
      return C("week", "after");
    },
    focusWeekBefore: function() {
      return C("week", "before");
    },
    focusMonthBefore: function() {
      return C("month", "before");
    },
    focusMonthAfter: function() {
      return C("month", "after");
    },
    focusYearBefore: function() {
      return C("year", "before");
    },
    focusYearAfter: function() {
      return C("year", "after");
    },
    focusStartOfWeek: function() {
      return C("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return C("endOfWeek", "after");
    }
  };
  return m.jsx(_y.Provider, { value: E, children: e.children });
}
function Sf() {
  var e = w.useContext(_y);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function ZN(e, n) {
  var r = ky(), i = Ef(e, r, n);
  return i;
}
var bf = w.createContext(void 0);
function e_(e) {
  if (!Hs(e.initialProps)) {
    var n = {
      selected: void 0
    };
    return m.jsx(bf.Provider, { value: n, children: e.children });
  }
  return m.jsx(t_, { initialProps: e.initialProps, children: e.children });
}
function t_(e) {
  var n = e.initialProps, r = e.children, i = function(s, c, d) {
    var p, v, g;
    if ((p = n.onDayClick) === null || p === void 0 || p.call(n, s, c, d), c.selected && !n.required) {
      (v = n.onSelect) === null || v === void 0 || v.call(n, void 0, s, c, d);
      return;
    }
    (g = n.onSelect) === null || g === void 0 || g.call(n, s, s, c, d);
  }, l = {
    selected: n.selected,
    onDayClick: i
  };
  return m.jsx(bf.Provider, { value: l, children: r });
}
function Py() {
  var e = w.useContext(bf);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function n_(e, n) {
  var r = Ue(), i = Py(), l = wf(), s = Cf(), c = Sf(), d = c.focusDayAfter, p = c.focusDayBefore, v = c.focusWeekAfter, g = c.focusWeekBefore, D = c.blur, y = c.focus, x = c.focusMonthBefore, C = c.focusMonthAfter, E = c.focusYearBefore, b = c.focusYearAfter, F = c.focusStartOfWeek, k = c.focusEndOfWeek, _ = function(z) {
    var R, X, q, A;
    Hs(r) ? (R = i.onDayClick) === null || R === void 0 || R.call(i, e, n, z) : Ba(r) ? (X = l.onDayClick) === null || X === void 0 || X.call(l, e, n, z) : Wa(r) ? (q = s.onDayClick) === null || q === void 0 || q.call(s, e, n, z) : (A = r.onDayClick) === null || A === void 0 || A.call(r, e, n, z);
  }, P = function(z) {
    var R;
    y(e), (R = r.onDayFocus) === null || R === void 0 || R.call(r, e, n, z);
  }, O = function(z) {
    var R;
    D(), (R = r.onDayBlur) === null || R === void 0 || R.call(r, e, n, z);
  }, B = function(z) {
    var R;
    (R = r.onDayMouseEnter) === null || R === void 0 || R.call(r, e, n, z);
  }, W = function(z) {
    var R;
    (R = r.onDayMouseLeave) === null || R === void 0 || R.call(r, e, n, z);
  }, U = function(z) {
    var R;
    (R = r.onDayPointerEnter) === null || R === void 0 || R.call(r, e, n, z);
  }, $ = function(z) {
    var R;
    (R = r.onDayPointerLeave) === null || R === void 0 || R.call(r, e, n, z);
  }, H = function(z) {
    var R;
    (R = r.onDayTouchCancel) === null || R === void 0 || R.call(r, e, n, z);
  }, ne = function(z) {
    var R;
    (R = r.onDayTouchEnd) === null || R === void 0 || R.call(r, e, n, z);
  }, Y = function(z) {
    var R;
    (R = r.onDayTouchMove) === null || R === void 0 || R.call(r, e, n, z);
  }, te = function(z) {
    var R;
    (R = r.onDayTouchStart) === null || R === void 0 || R.call(r, e, n, z);
  }, re = function(z) {
    var R;
    (R = r.onDayKeyUp) === null || R === void 0 || R.call(r, e, n, z);
  }, ae = function(z) {
    var R;
    switch (z.key) {
      case "ArrowLeft":
        z.preventDefault(), z.stopPropagation(), r.dir === "rtl" ? d() : p();
        break;
      case "ArrowRight":
        z.preventDefault(), z.stopPropagation(), r.dir === "rtl" ? p() : d();
        break;
      case "ArrowDown":
        z.preventDefault(), z.stopPropagation(), v();
        break;
      case "ArrowUp":
        z.preventDefault(), z.stopPropagation(), g();
        break;
      case "PageUp":
        z.preventDefault(), z.stopPropagation(), z.shiftKey ? E() : x();
        break;
      case "PageDown":
        z.preventDefault(), z.stopPropagation(), z.shiftKey ? b() : C();
        break;
      case "Home":
        z.preventDefault(), z.stopPropagation(), F();
        break;
      case "End":
        z.preventDefault(), z.stopPropagation(), k();
        break;
    }
    (R = r.onDayKeyDown) === null || R === void 0 || R.call(r, e, n, z);
  }, le = {
    onClick: _,
    onFocus: P,
    onBlur: O,
    onKeyDown: ae,
    onKeyUp: re,
    onMouseEnter: B,
    onMouseLeave: W,
    onPointerEnter: U,
    onPointerLeave: $,
    onTouchCancel: H,
    onTouchEnd: ne,
    onTouchMove: Y,
    onTouchStart: te
  };
  return le;
}
function r_() {
  var e = Ue(), n = Py(), r = wf(), i = Cf(), l = Hs(e) ? n.selected : Ba(e) ? r.selected : Wa(e) ? i.selected : void 0;
  return l;
}
function o_(e) {
  return Object.values(wn).includes(e);
}
function i_(e, n) {
  var r = [e.classNames.day];
  return Object.keys(n).forEach(function(i) {
    var l = e.modifiersClassNames[i];
    if (l)
      r.push(l);
    else if (o_(i)) {
      var s = e.classNames["day_".concat(i)];
      s && r.push(s);
    }
  }), r;
}
function a_(e, n) {
  var r = we({}, e.styles.day);
  return Object.keys(n).forEach(function(i) {
    var l;
    r = we(we({}, r), (l = e.modifiersStyles) === null || l === void 0 ? void 0 : l[i]);
  }), r;
}
function l_(e, n, r) {
  var i, l, s, c = Ue(), d = Sf(), p = ZN(e, n), v = n_(e, p), g = r_(), D = !!(c.onDayClick || c.mode !== "default");
  w.useEffect(function() {
    var B;
    p.outside || d.focusedDay && D && It(d.focusedDay, e) && ((B = r.current) === null || B === void 0 || B.focus());
  }, [
    d.focusedDay,
    e,
    r,
    D,
    p.outside
  ]);
  var y = i_(c, p).join(" "), x = a_(c, p), C = !!(p.outside && !c.showOutsideDays || p.hidden), E = (s = (l = c.components) === null || l === void 0 ? void 0 : l.DayContent) !== null && s !== void 0 ? s : NN, b = m.jsx(E, { date: e, displayMonth: n, activeModifiers: p }), F = {
    style: x,
    className: y,
    children: b,
    role: "gridcell"
  }, k = d.focusTarget && It(d.focusTarget, e) && !p.outside, _ = d.focusedDay && It(d.focusedDay, e), P = we(we(we({}, F), (i = { disabled: p.disabled, role: "gridcell" }, i["aria-selected"] = p.selected, i.tabIndex = _ || k ? 0 : -1, i)), v), O = {
    isButton: D,
    isHidden: C,
    activeModifiers: p,
    selectedDays: g,
    buttonProps: P,
    divProps: F
  };
  return O;
}
function s_(e) {
  var n = w.useRef(null), r = l_(e.date, e.displayMonth, n);
  return r.isHidden ? m.jsx("div", { role: "gridcell" }) : r.isButton ? m.jsx(ws, we({ name: "day", ref: n }, r.buttonProps)) : m.jsx("div", we({}, r.divProps));
}
function u_(e) {
  var n = e.number, r = e.dates, i = Ue(), l = i.onWeekNumberClick, s = i.styles, c = i.classNames, d = i.locale, p = i.labels.labelWeekNumber, v = i.formatters.formatWeekNumber, g = v(Number(n), { locale: d });
  if (!l)
    return m.jsx("span", { className: c.weeknumber, style: s.weeknumber, children: g });
  var D = p(Number(n), { locale: d }), y = function(x) {
    l(n, r, x);
  };
  return m.jsx(ws, { name: "week-number", "aria-label": D, className: c.weeknumber, style: s.weeknumber, onClick: y, children: g });
}
function c_(e) {
  var n, r, i = Ue(), l = i.styles, s = i.classNames, c = i.showWeekNumber, d = i.components, p = (n = d == null ? void 0 : d.Day) !== null && n !== void 0 ? n : s_, v = (r = d == null ? void 0 : d.WeekNumber) !== null && r !== void 0 ? r : u_, g;
  return c && (g = m.jsx("td", { className: s.cell, style: l.cell, children: m.jsx(v, { number: e.weekNumber, dates: e.dates }) })), m.jsxs("tr", { className: s.row, style: l.row, children: [g, e.dates.map(function(D) {
    return m.jsx("td", { className: s.cell, style: l.cell, role: "presentation", children: m.jsx(p, { displayMonth: e.displayMonth, date: D }) }, n2(D));
  })] });
}
function Sv(e, n, r) {
  for (var i = r != null && r.ISOWeek ? eg(n) : Ld(n, r), l = r != null && r.ISOWeek ? _o(e) : Ln(e, r), s = Rn(i, l), c = [], d = 0; d <= s; d++)
    c.push(_t(l, d));
  var p = c.reduce(function(v, g) {
    var D = r != null && r.ISOWeek ? ng(g) : og(g, r), y = v.find(function(x) {
      return x.weekNumber === D;
    });
    return y ? (y.dates.push(g), v) : (v.push({
      weekNumber: D,
      dates: [g]
    }), v);
  }, []);
  return p;
}
function d_(e, n) {
  var r = Sv(Bt(e), Md(e), n);
  if (n != null && n.useFixedWeeks) {
    var i = o2(e, n);
    if (i < 6) {
      var l = r[r.length - 1], s = l.dates[l.dates.length - 1], c = ud(s, 6 - i), d = Sv(ud(s, 1), c, n);
      r.push.apply(r, d);
    }
  }
  return r;
}
function f_(e) {
  var n, r, i, l = Ue(), s = l.locale, c = l.classNames, d = l.styles, p = l.hideHead, v = l.fixedWeeks, g = l.components, D = l.weekStartsOn, y = l.firstWeekContainsDate, x = l.ISOWeek, C = d_(e.displayMonth, {
    useFixedWeeks: !!v,
    ISOWeek: x,
    locale: s,
    weekStartsOn: D,
    firstWeekContainsDate: y
  }), E = (n = g == null ? void 0 : g.Head) !== null && n !== void 0 ? n : kN, b = (r = g == null ? void 0 : g.Row) !== null && r !== void 0 ? r : c_, F = (i = g == null ? void 0 : g.Footer) !== null && i !== void 0 ? i : SN;
  return m.jsxs("table", { id: e.id, className: c.table, style: d.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!p && m.jsx(E, {}), m.jsx("tbody", { className: c.tbody, style: d.tbody, children: C.map(function(k) {
    return m.jsx(b, { displayMonth: e.displayMonth, dates: k.dates, weekNumber: k.weekNumber }, k.weekNumber);
  }) }), m.jsx(F, { displayMonth: e.displayMonth })] });
}
function p_() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var m_ = p_() ? w.useLayoutEffect : w.useEffect, nd = !1, h_ = 0;
function bv() {
  return "react-day-picker-".concat(++h_);
}
function v_(e) {
  var n, r = e ?? (nd ? bv() : null), i = w.useState(r), l = i[0], s = i[1];
  return m_(function() {
    l === null && s(bv());
  }, []), w.useEffect(function() {
    nd === !1 && (nd = !0);
  }, []), (n = e ?? l) !== null && n !== void 0 ? n : void 0;
}
function g_(e) {
  var n, r, i = Ue(), l = i.dir, s = i.classNames, c = i.styles, d = i.components, p = za().displayMonths, v = v_(i.id ? "".concat(i.id, "-").concat(e.displayIndex) : void 0), g = i.id ? "".concat(i.id, "-grid-").concat(e.displayIndex) : void 0, D = [s.month], y = c.month, x = e.displayIndex === 0, C = e.displayIndex === p.length - 1, E = !x && !C;
  l === "rtl" && (n = [x, C], C = n[0], x = n[1]), x && (D.push(s.caption_start), y = we(we({}, y), c.caption_start)), C && (D.push(s.caption_end), y = we(we({}, y), c.caption_end)), E && (D.push(s.caption_between), y = we(we({}, y), c.caption_between));
  var b = (r = d == null ? void 0 : d.Caption) !== null && r !== void 0 ? r : EN;
  return m.jsxs("div", { className: D.join(" "), style: y, children: [m.jsx(b, { id: v, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), m.jsx(f_, { id: g, "aria-labelledby": v, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function y_(e) {
  var n = Ue(), r = n.classNames, i = n.styles;
  return m.jsx("div", { className: r.months, style: i.months, children: e.children });
}
function D_(e) {
  var n, r, i = e.initialProps, l = Ue(), s = Sf(), c = za(), d = w.useState(!1), p = d[0], v = d[1];
  w.useEffect(function() {
    l.initialFocus && s.focusTarget && (p || (s.focus(s.focusTarget), v(!0)));
  }, [
    l.initialFocus,
    p,
    s.focus,
    s.focusTarget,
    s
  ]);
  var g = [l.classNames.root, l.className];
  l.numberOfMonths > 1 && g.push(l.classNames.multiple_months), l.showWeekNumber && g.push(l.classNames.with_weeknumber);
  var D = we(we({}, l.styles.root), l.style), y = Object.keys(i).filter(function(C) {
    return C.startsWith("data-");
  }).reduce(function(C, E) {
    var b;
    return we(we({}, C), (b = {}, b[E] = i[E], b));
  }, {}), x = (r = (n = i.components) === null || n === void 0 ? void 0 : n.Months) !== null && r !== void 0 ? r : y_;
  return m.jsx("div", we({ className: g.join(" "), style: D, dir: l.dir, id: l.id, nonce: i.nonce, title: i.title, lang: i.lang }, y, { children: m.jsx(x, { children: c.displayMonths.map(function(C, E) {
    return m.jsx(g_, { displayIndex: E, displayMonth: C }, E);
  }) }) }));
}
function w_(e) {
  var n = e.children, r = Vk(e, ["children"]);
  return m.jsx(uN, { initialProps: r, children: m.jsx(DN, { children: m.jsx(e_, { initialProps: r, children: m.jsx(_N, { initialProps: r, children: m.jsx(AN, { initialProps: r, children: m.jsx(WN, { children: m.jsx(JN, { children: n }) }) }) }) }) }) });
}
function x_(e) {
  return m.jsx(w_, we({}, e, { children: m.jsx(D_, { initialProps: e }) }));
}
function jy({
  className: e,
  classNames: n,
  showOutsideDays: r = !0,
  ...i
}) {
  return /* @__PURE__ */ m.jsx(
    x_,
    {
      showOutsideDays: r,
      className: ke("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: ke(
          ld({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: ke(
          ld({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...n
      },
      components: {
        IconLeft: ({ ...l }) => /* @__PURE__ */ m.jsx(zk, { className: "h-4 w-4" }),
        IconRight: ({ ...l }) => /* @__PURE__ */ m.jsx($k, { className: "h-4 w-4" })
      },
      ...i
    }
  );
}
jy.displayName = "Calendar";
const C_ = ["top", "right", "bottom", "left"], Mn = Math.min, Kt = Math.max, xs = Math.round, as = Math.floor, Ur = (e) => ({
  x: e,
  y: e
}), E_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, S_ = {
  start: "end",
  end: "start"
};
function bd(e, n, r) {
  return Kt(e, Mn(n, r));
}
function or(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function ir(e) {
  return e.split("-")[0];
}
function Ai(e) {
  return e.split("-")[1];
}
function Ff(e) {
  return e === "x" ? "y" : "x";
}
function kf(e) {
  return e === "y" ? "height" : "width";
}
function Yr(e) {
  return ["top", "bottom"].includes(ir(e)) ? "y" : "x";
}
function Nf(e) {
  return Ff(Yr(e));
}
function b_(e, n, r) {
  r === void 0 && (r = !1);
  const i = Ai(e), l = Nf(e), s = kf(l);
  let c = l === "x" ? i === (r ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return n.reference[s] > n.floating[s] && (c = Cs(c)), [c, Cs(c)];
}
function F_(e) {
  const n = Cs(e);
  return [Fd(e), n, Fd(n)];
}
function Fd(e) {
  return e.replace(/start|end/g, (n) => S_[n]);
}
function k_(e, n, r) {
  const i = ["left", "right"], l = ["right", "left"], s = ["top", "bottom"], c = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? n ? l : i : n ? i : l;
    case "left":
    case "right":
      return n ? s : c;
    default:
      return [];
  }
}
function N_(e, n, r, i) {
  const l = Ai(e);
  let s = k_(ir(e), r === "start", i);
  return l && (s = s.map((c) => c + "-" + l), n && (s = s.concat(s.map(Fd)))), s;
}
function Cs(e) {
  return e.replace(/left|right|bottom|top/g, (n) => E_[n]);
}
function __(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ay(e) {
  return typeof e != "number" ? __(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Es(e) {
  const {
    x: n,
    y: r,
    width: i,
    height: l
  } = e;
  return {
    width: i,
    height: l,
    top: r,
    left: n,
    right: n + i,
    bottom: r + l,
    x: n,
    y: r
  };
}
function Fv(e, n, r) {
  let {
    reference: i,
    floating: l
  } = e;
  const s = Yr(n), c = Nf(n), d = kf(c), p = ir(n), v = s === "y", g = i.x + i.width / 2 - l.width / 2, D = i.y + i.height / 2 - l.height / 2, y = i[d] / 2 - l[d] / 2;
  let x;
  switch (p) {
    case "top":
      x = {
        x: g,
        y: i.y - l.height
      };
      break;
    case "bottom":
      x = {
        x: g,
        y: i.y + i.height
      };
      break;
    case "right":
      x = {
        x: i.x + i.width,
        y: D
      };
      break;
    case "left":
      x = {
        x: i.x - l.width,
        y: D
      };
      break;
    default:
      x = {
        x: i.x,
        y: i.y
      };
  }
  switch (Ai(n)) {
    case "start":
      x[c] -= y * (r && v ? -1 : 1);
      break;
    case "end":
      x[c] += y * (r && v ? -1 : 1);
      break;
  }
  return x;
}
const P_ = async (e, n, r) => {
  const {
    placement: i = "bottom",
    strategy: l = "absolute",
    middleware: s = [],
    platform: c
  } = r, d = s.filter(Boolean), p = await (c.isRTL == null ? void 0 : c.isRTL(n));
  let v = await c.getElementRects({
    reference: e,
    floating: n,
    strategy: l
  }), {
    x: g,
    y: D
  } = Fv(v, i, p), y = i, x = {}, C = 0;
  for (let E = 0; E < d.length; E++) {
    const {
      name: b,
      fn: F
    } = d[E], {
      x: k,
      y: _,
      data: P,
      reset: O
    } = await F({
      x: g,
      y: D,
      initialPlacement: i,
      placement: y,
      strategy: l,
      middlewareData: x,
      rects: v,
      platform: c,
      elements: {
        reference: e,
        floating: n
      }
    });
    g = k ?? g, D = _ ?? D, x = {
      ...x,
      [b]: {
        ...x[b],
        ...P
      }
    }, O && C <= 50 && (C++, typeof O == "object" && (O.placement && (y = O.placement), O.rects && (v = O.rects === !0 ? await c.getElementRects({
      reference: e,
      floating: n,
      strategy: l
    }) : O.rects), {
      x: g,
      y: D
    } = Fv(v, y, p)), E = -1);
  }
  return {
    x: g,
    y: D,
    placement: y,
    strategy: l,
    middlewareData: x
  };
};
async function ja(e, n) {
  var r;
  n === void 0 && (n = {});
  const {
    x: i,
    y: l,
    platform: s,
    rects: c,
    elements: d,
    strategy: p
  } = e, {
    boundary: v = "clippingAncestors",
    rootBoundary: g = "viewport",
    elementContext: D = "floating",
    altBoundary: y = !1,
    padding: x = 0
  } = or(n, e), C = Ay(x), b = d[y ? D === "floating" ? "reference" : "floating" : D], F = Es(await s.getClippingRect({
    element: (r = await (s.isElement == null ? void 0 : s.isElement(b))) == null || r ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(d.floating)),
    boundary: v,
    rootBoundary: g,
    strategy: p
  })), k = D === "floating" ? {
    x: i,
    y: l,
    width: c.floating.width,
    height: c.floating.height
  } : c.reference, _ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d.floating)), P = await (s.isElement == null ? void 0 : s.isElement(_)) ? await (s.getScale == null ? void 0 : s.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = Es(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: d,
    rect: k,
    offsetParent: _,
    strategy: p
  }) : k);
  return {
    top: (F.top - O.top + C.top) / P.y,
    bottom: (O.bottom - F.bottom + C.bottom) / P.y,
    left: (F.left - O.left + C.left) / P.x,
    right: (O.right - F.right + C.right) / P.x
  };
}
const j_ = (e) => ({
  name: "arrow",
  options: e,
  async fn(n) {
    const {
      x: r,
      y: i,
      placement: l,
      rects: s,
      platform: c,
      elements: d,
      middlewareData: p
    } = n, {
      element: v,
      padding: g = 0
    } = or(e, n) || {};
    if (v == null)
      return {};
    const D = Ay(g), y = {
      x: r,
      y: i
    }, x = Nf(l), C = kf(x), E = await c.getDimensions(v), b = x === "y", F = b ? "top" : "left", k = b ? "bottom" : "right", _ = b ? "clientHeight" : "clientWidth", P = s.reference[C] + s.reference[x] - y[x] - s.floating[C], O = y[x] - s.reference[x], B = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(v));
    let W = B ? B[_] : 0;
    (!W || !await (c.isElement == null ? void 0 : c.isElement(B))) && (W = d.floating[_] || s.floating[C]);
    const U = P / 2 - O / 2, $ = W / 2 - E[C] / 2 - 1, H = Mn(D[F], $), ne = Mn(D[k], $), Y = H, te = W - E[C] - ne, re = W / 2 - E[C] / 2 + U, ae = bd(Y, re, te), le = !p.arrow && Ai(l) != null && re !== ae && s.reference[C] / 2 - (re < Y ? H : ne) - E[C] / 2 < 0, z = le ? re < Y ? re - Y : re - te : 0;
    return {
      [x]: y[x] + z,
      data: {
        [x]: ae,
        centerOffset: re - ae - z,
        ...le && {
          alignmentOffset: z
        }
      },
      reset: le
    };
  }
}), A_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(n) {
      var r, i;
      const {
        placement: l,
        middlewareData: s,
        rects: c,
        initialPlacement: d,
        platform: p,
        elements: v
      } = n, {
        mainAxis: g = !0,
        crossAxis: D = !0,
        fallbackPlacements: y,
        fallbackStrategy: x = "bestFit",
        fallbackAxisSideDirection: C = "none",
        flipAlignment: E = !0,
        ...b
      } = or(e, n);
      if ((r = s.arrow) != null && r.alignmentOffset)
        return {};
      const F = ir(l), k = Yr(d), _ = ir(d) === d, P = await (p.isRTL == null ? void 0 : p.isRTL(v.floating)), O = y || (_ || !E ? [Cs(d)] : F_(d)), B = C !== "none";
      !y && B && O.push(...N_(d, E, C, P));
      const W = [d, ...O], U = await ja(n, b), $ = [];
      let H = ((i = s.flip) == null ? void 0 : i.overflows) || [];
      if (g && $.push(U[F]), D) {
        const re = b_(l, c, P);
        $.push(U[re[0]], U[re[1]]);
      }
      if (H = [...H, {
        placement: l,
        overflows: $
      }], !$.every((re) => re <= 0)) {
        var ne, Y;
        const re = (((ne = s.flip) == null ? void 0 : ne.index) || 0) + 1, ae = W[re];
        if (ae)
          return {
            data: {
              index: re,
              overflows: H
            },
            reset: {
              placement: ae
            }
          };
        let le = (Y = H.filter((z) => z.overflows[0] <= 0).sort((z, R) => z.overflows[1] - R.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!le)
          switch (x) {
            case "bestFit": {
              var te;
              const z = (te = H.filter((R) => {
                if (B) {
                  const X = Yr(R.placement);
                  return X === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((X) => X > 0).reduce((X, q) => X + q, 0)]).sort((R, X) => R[1] - X[1])[0]) == null ? void 0 : te[0];
              z && (le = z);
              break;
            }
            case "initialPlacement":
              le = d;
              break;
          }
        if (l !== le)
          return {
            reset: {
              placement: le
            }
          };
      }
      return {};
    }
  };
};
function kv(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function Nv(e) {
  return C_.some((n) => e[n] >= 0);
}
const O_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(n) {
      const {
        rects: r
      } = n, {
        strategy: i = "referenceHidden",
        ...l
      } = or(e, n);
      switch (i) {
        case "referenceHidden": {
          const s = await ja(n, {
            ...l,
            elementContext: "reference"
          }), c = kv(s, r.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: Nv(c)
            }
          };
        }
        case "escaped": {
          const s = await ja(n, {
            ...l,
            altBoundary: !0
          }), c = kv(s, r.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: Nv(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function T_(e, n) {
  const {
    placement: r,
    platform: i,
    elements: l
  } = e, s = await (i.isRTL == null ? void 0 : i.isRTL(l.floating)), c = ir(r), d = Ai(r), p = Yr(r) === "y", v = ["left", "top"].includes(c) ? -1 : 1, g = s && p ? -1 : 1, D = or(n, e);
  let {
    mainAxis: y,
    crossAxis: x,
    alignmentAxis: C
  } = typeof D == "number" ? {
    mainAxis: D,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...D
  };
  return d && typeof C == "number" && (x = d === "end" ? C * -1 : C), p ? {
    x: x * g,
    y: y * v
  } : {
    x: y * v,
    y: x * g
  };
}
const R_ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(n) {
      var r, i;
      const {
        x: l,
        y: s,
        placement: c,
        middlewareData: d
      } = n, p = await T_(n, e);
      return c === ((r = d.offset) == null ? void 0 : r.placement) && (i = d.arrow) != null && i.alignmentOffset ? {} : {
        x: l + p.x,
        y: s + p.y,
        data: {
          ...p,
          placement: c
        }
      };
    }
  };
}, M_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(n) {
      const {
        x: r,
        y: i,
        placement: l
      } = n, {
        mainAxis: s = !0,
        crossAxis: c = !1,
        limiter: d = {
          fn: (b) => {
            let {
              x: F,
              y: k
            } = b;
            return {
              x: F,
              y: k
            };
          }
        },
        ...p
      } = or(e, n), v = {
        x: r,
        y: i
      }, g = await ja(n, p), D = Yr(ir(l)), y = Ff(D);
      let x = v[y], C = v[D];
      if (s) {
        const b = y === "y" ? "top" : "left", F = y === "y" ? "bottom" : "right", k = x + g[b], _ = x - g[F];
        x = bd(k, x, _);
      }
      if (c) {
        const b = D === "y" ? "top" : "left", F = D === "y" ? "bottom" : "right", k = C + g[b], _ = C - g[F];
        C = bd(k, C, _);
      }
      const E = d.fn({
        ...n,
        [y]: x,
        [D]: C
      });
      return {
        ...E,
        data: {
          x: E.x - r,
          y: E.y - i
        }
      };
    }
  };
}, L_ = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(n) {
      const {
        x: r,
        y: i,
        placement: l,
        rects: s,
        middlewareData: c
      } = n, {
        offset: d = 0,
        mainAxis: p = !0,
        crossAxis: v = !0
      } = or(e, n), g = {
        x: r,
        y: i
      }, D = Yr(l), y = Ff(D);
      let x = g[y], C = g[D];
      const E = or(d, n), b = typeof E == "number" ? {
        mainAxis: E,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...E
      };
      if (p) {
        const _ = y === "y" ? "height" : "width", P = s.reference[y] - s.floating[_] + b.mainAxis, O = s.reference[y] + s.reference[_] - b.mainAxis;
        x < P ? x = P : x > O && (x = O);
      }
      if (v) {
        var F, k;
        const _ = y === "y" ? "width" : "height", P = ["top", "left"].includes(ir(l)), O = s.reference[D] - s.floating[_] + (P && ((F = c.offset) == null ? void 0 : F[D]) || 0) + (P ? 0 : b.crossAxis), B = s.reference[D] + s.reference[_] + (P ? 0 : ((k = c.offset) == null ? void 0 : k[D]) || 0) - (P ? b.crossAxis : 0);
        C < O ? C = O : C > B && (C = B);
      }
      return {
        [y]: x,
        [D]: C
      };
    }
  };
}, I_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(n) {
      const {
        placement: r,
        rects: i,
        platform: l,
        elements: s
      } = n, {
        apply: c = () => {
        },
        ...d
      } = or(e, n), p = await ja(n, d), v = ir(r), g = Ai(r), D = Yr(r) === "y", {
        width: y,
        height: x
      } = i.floating;
      let C, E;
      v === "top" || v === "bottom" ? (C = v, E = g === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (E = v, C = g === "end" ? "top" : "bottom");
      const b = x - p.top - p.bottom, F = y - p.left - p.right, k = Mn(x - p[C], b), _ = Mn(y - p[E], F), P = !n.middlewareData.shift;
      let O = k, B = _;
      if (D ? B = g || P ? Mn(_, F) : F : O = g || P ? Mn(k, b) : b, P && !g) {
        const U = Kt(p.left, 0), $ = Kt(p.right, 0), H = Kt(p.top, 0), ne = Kt(p.bottom, 0);
        D ? B = y - 2 * (U !== 0 || $ !== 0 ? U + $ : Kt(p.left, p.right)) : O = x - 2 * (H !== 0 || ne !== 0 ? H + ne : Kt(p.top, p.bottom));
      }
      await c({
        ...n,
        availableWidth: B,
        availableHeight: O
      });
      const W = await l.getDimensions(s.floating);
      return y !== W.width || x !== W.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Oi(e) {
  return Oy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Xt(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function mr(e) {
  var n;
  return (n = (Oy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function Oy(e) {
  return e instanceof Node || e instanceof Xt(e).Node;
}
function xn(e) {
  return e instanceof Element || e instanceof Xt(e).Element;
}
function In(e) {
  return e instanceof HTMLElement || e instanceof Xt(e).HTMLElement;
}
function _v(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Xt(e).ShadowRoot;
}
function $a(e) {
  const {
    overflow: n,
    overflowX: r,
    overflowY: i,
    display: l
  } = Cn(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + i + r) && !["inline", "contents"].includes(l);
}
function B_(e) {
  return ["table", "td", "th"].includes(Oi(e));
}
function Vs(e) {
  return [":popover-open", ":modal"].some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
function _f(e) {
  const n = Pf(), r = xn(e) ? Cn(e) : e;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !n && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !n && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((i) => (r.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some((i) => (r.contain || "").includes(i));
}
function W_(e) {
  let n = Kr(e);
  for (; In(n) && !Ni(n); ) {
    if (_f(n))
      return n;
    if (Vs(n))
      return null;
    n = Kr(n);
  }
  return null;
}
function Pf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ni(e) {
  return ["html", "body", "#document"].includes(Oi(e));
}
function Cn(e) {
  return Xt(e).getComputedStyle(e);
}
function Us(e) {
  return xn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Kr(e) {
  if (Oi(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    _v(e) && e.host || // Fallback.
    mr(e)
  );
  return _v(n) ? n.host : n;
}
function Ty(e) {
  const n = Kr(e);
  return Ni(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : In(n) && $a(n) ? n : Ty(n);
}
function Aa(e, n, r) {
  var i;
  n === void 0 && (n = []), r === void 0 && (r = !0);
  const l = Ty(e), s = l === ((i = e.ownerDocument) == null ? void 0 : i.body), c = Xt(l);
  if (s) {
    const d = kd(c);
    return n.concat(c, c.visualViewport || [], $a(l) ? l : [], d && r ? Aa(d) : []);
  }
  return n.concat(l, Aa(l, [], r));
}
function kd(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ry(e) {
  const n = Cn(e);
  let r = parseFloat(n.width) || 0, i = parseFloat(n.height) || 0;
  const l = In(e), s = l ? e.offsetWidth : r, c = l ? e.offsetHeight : i, d = xs(r) !== s || xs(i) !== c;
  return d && (r = s, i = c), {
    width: r,
    height: i,
    $: d
  };
}
function jf(e) {
  return xn(e) ? e : e.contextElement;
}
function Ci(e) {
  const n = jf(e);
  if (!In(n))
    return Ur(1);
  const r = n.getBoundingClientRect(), {
    width: i,
    height: l,
    $: s
  } = Ry(n);
  let c = (s ? xs(r.width) : r.width) / i, d = (s ? xs(r.height) : r.height) / l;
  return (!c || !Number.isFinite(c)) && (c = 1), (!d || !Number.isFinite(d)) && (d = 1), {
    x: c,
    y: d
  };
}
const z_ = /* @__PURE__ */ Ur(0);
function My(e) {
  const n = Xt(e);
  return !Pf() || !n.visualViewport ? z_ : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function $_(e, n, r) {
  return n === void 0 && (n = !1), !r || n && r !== Xt(e) ? !1 : n;
}
function Ao(e, n, r, i) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  const l = e.getBoundingClientRect(), s = jf(e);
  let c = Ur(1);
  n && (i ? xn(i) && (c = Ci(i)) : c = Ci(e));
  const d = $_(s, r, i) ? My(s) : Ur(0);
  let p = (l.left + d.x) / c.x, v = (l.top + d.y) / c.y, g = l.width / c.x, D = l.height / c.y;
  if (s) {
    const y = Xt(s), x = i && xn(i) ? Xt(i) : i;
    let C = y, E = kd(C);
    for (; E && i && x !== C; ) {
      const b = Ci(E), F = E.getBoundingClientRect(), k = Cn(E), _ = F.left + (E.clientLeft + parseFloat(k.paddingLeft)) * b.x, P = F.top + (E.clientTop + parseFloat(k.paddingTop)) * b.y;
      p *= b.x, v *= b.y, g *= b.x, D *= b.y, p += _, v += P, C = Xt(E), E = kd(C);
    }
  }
  return Es({
    width: g,
    height: D,
    x: p,
    y: v
  });
}
function H_(e) {
  let {
    elements: n,
    rect: r,
    offsetParent: i,
    strategy: l
  } = e;
  const s = l === "fixed", c = mr(i), d = n ? Vs(n.floating) : !1;
  if (i === c || d && s)
    return r;
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  }, v = Ur(1);
  const g = Ur(0), D = In(i);
  if ((D || !D && !s) && ((Oi(i) !== "body" || $a(c)) && (p = Us(i)), In(i))) {
    const y = Ao(i);
    v = Ci(i), g.x = y.x + i.clientLeft, g.y = y.y + i.clientTop;
  }
  return {
    width: r.width * v.x,
    height: r.height * v.y,
    x: r.x * v.x - p.scrollLeft * v.x + g.x,
    y: r.y * v.y - p.scrollTop * v.y + g.y
  };
}
function V_(e) {
  return Array.from(e.getClientRects());
}
function Ly(e) {
  return Ao(mr(e)).left + Us(e).scrollLeft;
}
function U_(e) {
  const n = mr(e), r = Us(e), i = e.ownerDocument.body, l = Kt(n.scrollWidth, n.clientWidth, i.scrollWidth, i.clientWidth), s = Kt(n.scrollHeight, n.clientHeight, i.scrollHeight, i.clientHeight);
  let c = -r.scrollLeft + Ly(e);
  const d = -r.scrollTop;
  return Cn(i).direction === "rtl" && (c += Kt(n.clientWidth, i.clientWidth) - l), {
    width: l,
    height: s,
    x: c,
    y: d
  };
}
function Y_(e, n) {
  const r = Xt(e), i = mr(e), l = r.visualViewport;
  let s = i.clientWidth, c = i.clientHeight, d = 0, p = 0;
  if (l) {
    s = l.width, c = l.height;
    const v = Pf();
    (!v || v && n === "fixed") && (d = l.offsetLeft, p = l.offsetTop);
  }
  return {
    width: s,
    height: c,
    x: d,
    y: p
  };
}
function K_(e, n) {
  const r = Ao(e, !0, n === "fixed"), i = r.top + e.clientTop, l = r.left + e.clientLeft, s = In(e) ? Ci(e) : Ur(1), c = e.clientWidth * s.x, d = e.clientHeight * s.y, p = l * s.x, v = i * s.y;
  return {
    width: c,
    height: d,
    x: p,
    y: v
  };
}
function Pv(e, n, r) {
  let i;
  if (n === "viewport")
    i = Y_(e, r);
  else if (n === "document")
    i = U_(mr(e));
  else if (xn(n))
    i = K_(n, r);
  else {
    const l = My(e);
    i = {
      ...n,
      x: n.x - l.x,
      y: n.y - l.y
    };
  }
  return Es(i);
}
function Iy(e, n) {
  const r = Kr(e);
  return r === n || !xn(r) || Ni(r) ? !1 : Cn(r).position === "fixed" || Iy(r, n);
}
function Q_(e, n) {
  const r = n.get(e);
  if (r)
    return r;
  let i = Aa(e, [], !1).filter((d) => xn(d) && Oi(d) !== "body"), l = null;
  const s = Cn(e).position === "fixed";
  let c = s ? Kr(e) : e;
  for (; xn(c) && !Ni(c); ) {
    const d = Cn(c), p = _f(c);
    !p && d.position === "fixed" && (l = null), (s ? !p && !l : !p && d.position === "static" && !!l && ["absolute", "fixed"].includes(l.position) || $a(c) && !p && Iy(e, c)) ? i = i.filter((g) => g !== c) : l = d, c = Kr(c);
  }
  return n.set(e, i), i;
}
function X_(e) {
  let {
    element: n,
    boundary: r,
    rootBoundary: i,
    strategy: l
  } = e;
  const c = [...r === "clippingAncestors" ? Vs(n) ? [] : Q_(n, this._c) : [].concat(r), i], d = c[0], p = c.reduce((v, g) => {
    const D = Pv(n, g, l);
    return v.top = Kt(D.top, v.top), v.right = Mn(D.right, v.right), v.bottom = Mn(D.bottom, v.bottom), v.left = Kt(D.left, v.left), v;
  }, Pv(n, d, l));
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top
  };
}
function G_(e) {
  const {
    width: n,
    height: r
  } = Ry(e);
  return {
    width: n,
    height: r
  };
}
function q_(e, n, r) {
  const i = In(n), l = mr(n), s = r === "fixed", c = Ao(e, !0, s, n);
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const p = Ur(0);
  if (i || !i && !s)
    if ((Oi(n) !== "body" || $a(l)) && (d = Us(n)), i) {
      const D = Ao(n, !0, s, n);
      p.x = D.x + n.clientLeft, p.y = D.y + n.clientTop;
    } else l && (p.x = Ly(l));
  const v = c.left + d.scrollLeft - p.x, g = c.top + d.scrollTop - p.y;
  return {
    x: v,
    y: g,
    width: c.width,
    height: c.height
  };
}
function rd(e) {
  return Cn(e).position === "static";
}
function jv(e, n) {
  return !In(e) || Cn(e).position === "fixed" ? null : n ? n(e) : e.offsetParent;
}
function By(e, n) {
  const r = Xt(e);
  if (Vs(e))
    return r;
  if (!In(e)) {
    let l = Kr(e);
    for (; l && !Ni(l); ) {
      if (xn(l) && !rd(l))
        return l;
      l = Kr(l);
    }
    return r;
  }
  let i = jv(e, n);
  for (; i && B_(i) && rd(i); )
    i = jv(i, n);
  return i && Ni(i) && rd(i) && !_f(i) ? r : i || W_(e) || r;
}
const J_ = async function(e) {
  const n = this.getOffsetParent || By, r = this.getDimensions, i = await r(e.floating);
  return {
    reference: q_(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function Z_(e) {
  return Cn(e).direction === "rtl";
}
const eP = {
  convertOffsetParentRelativeRectToViewportRelativeRect: H_,
  getDocumentElement: mr,
  getClippingRect: X_,
  getOffsetParent: By,
  getElementRects: J_,
  getClientRects: V_,
  getDimensions: G_,
  getScale: Ci,
  isElement: xn,
  isRTL: Z_
};
function tP(e, n) {
  let r = null, i;
  const l = mr(e);
  function s() {
    var d;
    clearTimeout(i), (d = r) == null || d.disconnect(), r = null;
  }
  function c(d, p) {
    d === void 0 && (d = !1), p === void 0 && (p = 1), s();
    const {
      left: v,
      top: g,
      width: D,
      height: y
    } = e.getBoundingClientRect();
    if (d || n(), !D || !y)
      return;
    const x = as(g), C = as(l.clientWidth - (v + D)), E = as(l.clientHeight - (g + y)), b = as(v), k = {
      rootMargin: -x + "px " + -C + "px " + -E + "px " + -b + "px",
      threshold: Kt(0, Mn(1, p)) || 1
    };
    let _ = !0;
    function P(O) {
      const B = O[0].intersectionRatio;
      if (B !== p) {
        if (!_)
          return c();
        B ? c(!1, B) : i = setTimeout(() => {
          c(!1, 1e-7);
        }, 1e3);
      }
      _ = !1;
    }
    try {
      r = new IntersectionObserver(P, {
        ...k,
        // Handle <iframe>s
        root: l.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(P, k);
    }
    r.observe(e);
  }
  return c(!0), s;
}
function nP(e, n, r, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: l = !0,
    ancestorResize: s = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: d = typeof IntersectionObserver == "function",
    animationFrame: p = !1
  } = i, v = jf(e), g = l || s ? [...v ? Aa(v) : [], ...Aa(n)] : [];
  g.forEach((F) => {
    l && F.addEventListener("scroll", r, {
      passive: !0
    }), s && F.addEventListener("resize", r);
  });
  const D = v && d ? tP(v, r) : null;
  let y = -1, x = null;
  c && (x = new ResizeObserver((F) => {
    let [k] = F;
    k && k.target === v && x && (x.unobserve(n), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var _;
      (_ = x) == null || _.observe(n);
    })), r();
  }), v && !p && x.observe(v), x.observe(n));
  let C, E = p ? Ao(e) : null;
  p && b();
  function b() {
    const F = Ao(e);
    E && (F.x !== E.x || F.y !== E.y || F.width !== E.width || F.height !== E.height) && r(), E = F, C = requestAnimationFrame(b);
  }
  return r(), () => {
    var F;
    g.forEach((k) => {
      l && k.removeEventListener("scroll", r), s && k.removeEventListener("resize", r);
    }), D == null || D(), (F = x) == null || F.disconnect(), x = null, p && cancelAnimationFrame(C);
  };
}
const rP = R_, oP = M_, iP = A_, aP = I_, lP = O_, Av = j_, sP = L_, uP = (e, n, r) => {
  const i = /* @__PURE__ */ new Map(), l = {
    platform: eP,
    ...r
  }, s = {
    ...l.platform,
    _c: i
  };
  return P_(e, n, {
    ...l,
    platform: s
  });
};
var ps = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function Ss(e, n) {
  if (e === n)
    return !0;
  if (typeof e != typeof n)
    return !1;
  if (typeof e == "function" && e.toString() === n.toString())
    return !0;
  let r, i, l;
  if (e && n && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== n.length) return !1;
      for (i = r; i-- !== 0; )
        if (!Ss(e[i], n[i]))
          return !1;
      return !0;
    }
    if (l = Object.keys(e), r = l.length, r !== Object.keys(n).length)
      return !1;
    for (i = r; i-- !== 0; )
      if (!{}.hasOwnProperty.call(n, l[i]))
        return !1;
    for (i = r; i-- !== 0; ) {
      const s = l[i];
      if (!(s === "_owner" && e.$$typeof) && !Ss(e[s], n[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function Wy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ov(e, n) {
  const r = Wy(e);
  return Math.round(n * r) / r;
}
function Tv(e) {
  const n = w.useRef(e);
  return ps(() => {
    n.current = e;
  }), n;
}
function cP(e) {
  e === void 0 && (e = {});
  const {
    placement: n = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: l,
    elements: {
      reference: s,
      floating: c
    } = {},
    transform: d = !0,
    whileElementsMounted: p,
    open: v
  } = e, [g, D] = w.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [y, x] = w.useState(i);
  Ss(y, i) || x(i);
  const [C, E] = w.useState(null), [b, F] = w.useState(null), k = w.useCallback((z) => {
    z !== B.current && (B.current = z, E(z));
  }, []), _ = w.useCallback((z) => {
    z !== W.current && (W.current = z, F(z));
  }, []), P = s || C, O = c || b, B = w.useRef(null), W = w.useRef(null), U = w.useRef(g), $ = p != null, H = Tv(p), ne = Tv(l), Y = w.useCallback(() => {
    if (!B.current || !W.current)
      return;
    const z = {
      placement: n,
      strategy: r,
      middleware: y
    };
    ne.current && (z.platform = ne.current), uP(B.current, W.current, z).then((R) => {
      const X = {
        ...R,
        isPositioned: !0
      };
      te.current && !Ss(U.current, X) && (U.current = X, To.flushSync(() => {
        D(X);
      }));
    });
  }, [y, n, r, ne]);
  ps(() => {
    v === !1 && U.current.isPositioned && (U.current.isPositioned = !1, D((z) => ({
      ...z,
      isPositioned: !1
    })));
  }, [v]);
  const te = w.useRef(!1);
  ps(() => (te.current = !0, () => {
    te.current = !1;
  }), []), ps(() => {
    if (P && (B.current = P), O && (W.current = O), P && O) {
      if (H.current)
        return H.current(P, O, Y);
      Y();
    }
  }, [P, O, Y, H, $]);
  const re = w.useMemo(() => ({
    reference: B,
    floating: W,
    setReference: k,
    setFloating: _
  }), [k, _]), ae = w.useMemo(() => ({
    reference: P,
    floating: O
  }), [P, O]), le = w.useMemo(() => {
    const z = {
      position: r,
      left: 0,
      top: 0
    };
    if (!ae.floating)
      return z;
    const R = Ov(ae.floating, g.x), X = Ov(ae.floating, g.y);
    return d ? {
      ...z,
      transform: "translate(" + R + "px, " + X + "px)",
      ...Wy(ae.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: R,
      top: X
    };
  }, [r, d, ae.floating, g.x, g.y]);
  return w.useMemo(() => ({
    ...g,
    update: Y,
    refs: re,
    elements: ae,
    floatingStyles: le
  }), [g, Y, re, ae, le]);
}
const dP = (e) => {
  function n(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: i,
        padding: l
      } = typeof e == "function" ? e(r) : e;
      return i && n(i) ? i.current != null ? Av({
        element: i.current,
        padding: l
      }).fn(r) : {} : i ? Av({
        element: i,
        padding: l
      }).fn(r) : {};
    }
  };
}, fP = (e, n) => ({
  ...rP(e),
  options: [e, n]
}), pP = (e, n) => ({
  ...oP(e),
  options: [e, n]
}), mP = (e, n) => ({
  ...sP(e),
  options: [e, n]
}), hP = (e, n) => ({
  ...iP(e),
  options: [e, n]
}), vP = (e, n) => ({
  ...aP(e),
  options: [e, n]
}), gP = (e, n) => ({
  ...lP(e),
  options: [e, n]
}), yP = (e, n) => ({
  ...dP(e),
  options: [e, n]
});
var DP = "Arrow", zy = w.forwardRef((e, n) => {
  const { children: r, width: i = 10, height: l = 5, ...s } = e;
  return /* @__PURE__ */ m.jsx(
    Ae.svg,
    {
      ...s,
      ref: n,
      width: i,
      height: l,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ m.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
zy.displayName = DP;
var wP = zy, Af = "Popper", [$y, Ys] = Qr(Af), [xP, Hy] = $y(Af), Vy = (e) => {
  const { __scopePopper: n, children: r } = e, [i, l] = w.useState(null);
  return /* @__PURE__ */ m.jsx(xP, { scope: n, anchor: i, onAnchorChange: l, children: r });
};
Vy.displayName = Af;
var Uy = "PopperAnchor", Yy = w.forwardRef(
  (e, n) => {
    const { __scopePopper: r, virtualRef: i, ...l } = e, s = Hy(Uy, r), c = w.useRef(null), d = Me(n, c);
    return w.useEffect(() => {
      s.onAnchorChange((i == null ? void 0 : i.current) || c.current);
    }), i ? null : /* @__PURE__ */ m.jsx(Ae.div, { ...l, ref: d });
  }
);
Yy.displayName = Uy;
var Of = "PopperContent", [CP, EP] = $y(Of), Ky = w.forwardRef(
  (e, n) => {
    var ee, ue, Ce, Z, Ne, je;
    const {
      __scopePopper: r,
      side: i = "bottom",
      sideOffset: l = 0,
      align: s = "center",
      alignOffset: c = 0,
      arrowPadding: d = 0,
      avoidCollisions: p = !0,
      collisionBoundary: v = [],
      collisionPadding: g = 0,
      sticky: D = "partial",
      hideWhenDetached: y = !1,
      updatePositionStrategy: x = "optimized",
      onPlaced: C,
      ...E
    } = e, b = Hy(Of, r), [F, k] = w.useState(null), _ = Me(n, (tt) => k(tt)), [P, O] = w.useState(null), B = gf(P), W = (B == null ? void 0 : B.width) ?? 0, U = (B == null ? void 0 : B.height) ?? 0, $ = i + (s !== "center" ? "-" + s : ""), H = typeof g == "number" ? g : { top: 0, right: 0, bottom: 0, left: 0, ...g }, ne = Array.isArray(v) ? v : [v], Y = ne.length > 0, te = {
      padding: H,
      boundary: ne.filter(bP),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Y
    }, { refs: re, floatingStyles: ae, placement: le, isPositioned: z, middlewareData: R } = cP({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: $,
      whileElementsMounted: (...tt) => nP(...tt, {
        animationFrame: x === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        fP({ mainAxis: l + U, alignmentAxis: c }),
        p && pP({
          mainAxis: !0,
          crossAxis: !1,
          limiter: D === "partial" ? mP() : void 0,
          ...te
        }),
        p && hP({ ...te }),
        vP({
          ...te,
          apply: ({ elements: tt, rects: dt, availableWidth: wt, availableHeight: zt }) => {
            const { width: $t, height: qt } = dt.reference, Jt = tt.floating.style;
            Jt.setProperty("--radix-popper-available-width", `${wt}px`), Jt.setProperty("--radix-popper-available-height", `${zt}px`), Jt.setProperty("--radix-popper-anchor-width", `${$t}px`), Jt.setProperty("--radix-popper-anchor-height", `${qt}px`);
          }
        }),
        P && yP({ element: P, padding: d }),
        FP({ arrowWidth: W, arrowHeight: U }),
        y && gP({ strategy: "referenceHidden", ...te })
      ]
    }), [X, q] = Gy(le), A = bt(C);
    Ft(() => {
      z && (A == null || A());
    }, [z, A]);
    const V = (ee = R.arrow) == null ? void 0 : ee.x, ye = (ue = R.arrow) == null ? void 0 : ue.y, pe = ((Ce = R.arrow) == null ? void 0 : Ce.centerOffset) !== 0, [xe, De] = w.useState();
    return Ft(() => {
      F && De(window.getComputedStyle(F).zIndex);
    }, [F]), /* @__PURE__ */ m.jsx(
      "div",
      {
        ref: re.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ae,
          transform: z ? ae.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: xe,
          "--radix-popper-transform-origin": [
            (Z = R.transformOrigin) == null ? void 0 : Z.x,
            (Ne = R.transformOrigin) == null ? void 0 : Ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((je = R.hide) == null ? void 0 : je.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ m.jsx(
          CP,
          {
            scope: r,
            placedSide: X,
            onArrowChange: O,
            arrowX: V,
            arrowY: ye,
            shouldHideArrow: pe,
            children: /* @__PURE__ */ m.jsx(
              Ae.div,
              {
                "data-side": X,
                "data-align": q,
                ...E,
                ref: _,
                style: {
                  ...E.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: z ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Ky.displayName = Of;
var Qy = "PopperArrow", SP = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Xy = w.forwardRef(function(n, r) {
  const { __scopePopper: i, ...l } = n, s = EP(Qy, i), c = SP[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ m.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [c]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ m.jsx(
          wP,
          {
            ...l,
            ref: r,
            style: {
              ...l.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Xy.displayName = Qy;
function bP(e) {
  return e !== null;
}
var FP = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    var b, F, k;
    const { placement: r, rects: i, middlewareData: l } = n, c = ((b = l.arrow) == null ? void 0 : b.centerOffset) !== 0, d = c ? 0 : e.arrowWidth, p = c ? 0 : e.arrowHeight, [v, g] = Gy(r), D = { start: "0%", center: "50%", end: "100%" }[g], y = (((F = l.arrow) == null ? void 0 : F.x) ?? 0) + d / 2, x = (((k = l.arrow) == null ? void 0 : k.y) ?? 0) + p / 2;
    let C = "", E = "";
    return v === "bottom" ? (C = c ? D : `${y}px`, E = `${-p}px`) : v === "top" ? (C = c ? D : `${y}px`, E = `${i.floating.height + p}px`) : v === "right" ? (C = `${-p}px`, E = c ? D : `${x}px`) : v === "left" && (C = `${i.floating.width + p}px`, E = c ? D : `${x}px`), { data: { x: C, y: E } };
  }
});
function Gy(e) {
  const [n, r = "center"] = e.split("-");
  return [n, r];
}
var qy = Vy, Tf = Yy, Jy = Ky, Zy = Xy, Rf = "Popover", [eD, zj] = Qr(Rf, [
  Ys
]), Ha = Ys(), [kP, qr] = eD(Rf), tD = (e) => {
  const {
    __scopePopover: n,
    children: r,
    open: i,
    defaultOpen: l,
    onOpenChange: s,
    modal: c = !1
  } = e, d = Ha(n), p = w.useRef(null), [v, g] = w.useState(!1), [D = !1, y] = Si({
    prop: i,
    defaultProp: l,
    onChange: s
  });
  return /* @__PURE__ */ m.jsx(qy, { ...d, children: /* @__PURE__ */ m.jsx(
    kP,
    {
      scope: n,
      contentId: Fo(),
      triggerRef: p,
      open: D,
      onOpenChange: y,
      onOpenToggle: w.useCallback(() => y((x) => !x), [y]),
      hasCustomAnchor: v,
      onCustomAnchorAdd: w.useCallback(() => g(!0), []),
      onCustomAnchorRemove: w.useCallback(() => g(!1), []),
      modal: c,
      children: r
    }
  ) });
};
tD.displayName = Rf;
var nD = "PopoverAnchor", NP = w.forwardRef(
  (e, n) => {
    const { __scopePopover: r, ...i } = e, l = qr(nD, r), s = Ha(r), { onCustomAnchorAdd: c, onCustomAnchorRemove: d } = l;
    return w.useEffect(() => (c(), () => d()), [c, d]), /* @__PURE__ */ m.jsx(Tf, { ...s, ...i, ref: n });
  }
);
NP.displayName = nD;
var rD = "PopoverTrigger", oD = w.forwardRef(
  (e, n) => {
    const { __scopePopover: r, ...i } = e, l = qr(rD, r), s = Ha(r), c = Me(n, l.triggerRef), d = /* @__PURE__ */ m.jsx(
      Ae.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": l.open,
        "aria-controls": l.contentId,
        "data-state": uD(l.open),
        ...i,
        ref: c,
        onClick: Pe(e.onClick, l.onOpenToggle)
      }
    );
    return l.hasCustomAnchor ? d : /* @__PURE__ */ m.jsx(Tf, { asChild: !0, ...s, children: d });
  }
);
oD.displayName = rD;
var Mf = "PopoverPortal", [_P, PP] = eD(Mf, {
  forceMount: void 0
}), iD = (e) => {
  const { __scopePopover: n, forceMount: r, children: i, container: l } = e, s = qr(Mf, n);
  return /* @__PURE__ */ m.jsx(_P, { scope: n, forceMount: r, children: /* @__PURE__ */ m.jsx(En, { present: r || s.open, children: /* @__PURE__ */ m.jsx(Ns, { asChild: !0, container: l, children: i }) }) });
};
iD.displayName = Mf;
var _i = "PopoverContent", aD = w.forwardRef(
  (e, n) => {
    const r = PP(_i, e.__scopePopover), { forceMount: i = r.forceMount, ...l } = e, s = qr(_i, e.__scopePopover);
    return /* @__PURE__ */ m.jsx(En, { present: i || s.open, children: s.modal ? /* @__PURE__ */ m.jsx(jP, { ...l, ref: n }) : /* @__PURE__ */ m.jsx(AP, { ...l, ref: n }) });
  }
);
aD.displayName = _i;
var jP = w.forwardRef(
  (e, n) => {
    const r = qr(_i, e.__scopePopover), i = w.useRef(null), l = Me(n, i), s = w.useRef(!1);
    return w.useEffect(() => {
      const c = i.current;
      if (c) return Wd(c);
    }, []), /* @__PURE__ */ m.jsx(Ps, { as: Hr, allowPinchZoom: !0, children: /* @__PURE__ */ m.jsx(
      lD,
      {
        ...e,
        ref: l,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Pe(e.onCloseAutoFocus, (c) => {
          var d;
          c.preventDefault(), s.current || (d = r.triggerRef.current) == null || d.focus();
        }),
        onPointerDownOutside: Pe(
          e.onPointerDownOutside,
          (c) => {
            const d = c.detail.originalEvent, p = d.button === 0 && d.ctrlKey === !0, v = d.button === 2 || p;
            s.current = v;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Pe(
          e.onFocusOutside,
          (c) => c.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), AP = w.forwardRef(
  (e, n) => {
    const r = qr(_i, e.__scopePopover), i = w.useRef(!1), l = w.useRef(!1);
    return /* @__PURE__ */ m.jsx(
      lD,
      {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var c, d;
          (c = e.onCloseAutoFocus) == null || c.call(e, s), s.defaultPrevented || (i.current || (d = r.triggerRef.current) == null || d.focus(), s.preventDefault()), i.current = !1, l.current = !1;
        },
        onInteractOutside: (s) => {
          var p, v;
          (p = e.onInteractOutside) == null || p.call(e, s), s.defaultPrevented || (i.current = !0, s.detail.originalEvent.type === "pointerdown" && (l.current = !0));
          const c = s.target;
          ((v = r.triggerRef.current) == null ? void 0 : v.contains(c)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && l.current && s.preventDefault();
        }
      }
    );
  }
), lD = w.forwardRef(
  (e, n) => {
    const {
      __scopePopover: r,
      trapFocus: i,
      onOpenAutoFocus: l,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: c,
      onEscapeKeyDown: d,
      onPointerDownOutside: p,
      onFocusOutside: v,
      onInteractOutside: g,
      ...D
    } = e, y = qr(_i, r), x = Ha(r);
    return Bd(), /* @__PURE__ */ m.jsx(
      ks,
      {
        asChild: !0,
        loop: !0,
        trapped: i,
        onMountAutoFocus: l,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ m.jsx(
          Fs,
          {
            asChild: !0,
            disableOutsidePointerEvents: c,
            onInteractOutside: g,
            onEscapeKeyDown: d,
            onPointerDownOutside: p,
            onFocusOutside: v,
            onDismiss: () => y.onOpenChange(!1),
            children: /* @__PURE__ */ m.jsx(
              Jy,
              {
                "data-state": uD(y.open),
                role: "dialog",
                id: y.contentId,
                ...x,
                ...D,
                ref: n,
                style: {
                  ...D.style,
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
), sD = "PopoverClose", OP = w.forwardRef(
  (e, n) => {
    const { __scopePopover: r, ...i } = e, l = qr(sD, r);
    return /* @__PURE__ */ m.jsx(
      Ae.button,
      {
        type: "button",
        ...i,
        ref: n,
        onClick: Pe(e.onClick, () => l.onOpenChange(!1))
      }
    );
  }
);
OP.displayName = sD;
var TP = "PopoverArrow", RP = w.forwardRef(
  (e, n) => {
    const { __scopePopover: r, ...i } = e, l = Ha(r);
    return /* @__PURE__ */ m.jsx(Zy, { ...l, ...i, ref: n });
  }
);
RP.displayName = TP;
function uD(e) {
  return e ? "open" : "closed";
}
var MP = tD, LP = oD, IP = iD, cD = aD;
const BP = MP, WP = LP, dD = w.forwardRef(({ className: e, align: n = "center", sideOffset: r = 4, ...i }, l) => /* @__PURE__ */ m.jsx(IP, { children: /* @__PURE__ */ m.jsx(
  cD,
  {
    ref: l,
    align: n,
    sideOffset: r,
    className: ke(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...i
  }
) }));
dD.displayName = cD.displayName;
function Rv({ date: e, setDate: n }) {
  return /* @__PURE__ */ m.jsxs(BP, { children: [
    /* @__PURE__ */ m.jsx(WP, { asChild: !0, children: /* @__PURE__ */ m.jsxs(
      qe,
      {
        variant: "outline",
        className: ke(
          "w-full justify-start text-left font-normal",
          !e && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ m.jsx(Gv, { className: "mr-2 h-4 w-4" }),
          e ? ar(e, "PPP") : /* @__PURE__ */ m.jsx("span", { children: "Pick a date" })
        ]
      }
    ) }),
    /* @__PURE__ */ m.jsx(dD, { className: "w-auto p-0", align: "start", onOpenAutoFocus: (r) => r.preventDefault(), children: /* @__PURE__ */ m.jsx(
      jy,
      {
        mode: "single",
        selected: e,
        onSelect: n,
        initialFocus: !0,
        disabled: (r) => r < /* @__PURE__ */ new Date() || r > (/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() + 1)
      }
    ) })
  ] });
}
function zP(e) {
  const n = e + "CollectionProvider", [r, i] = Qr(n), [l, s] = r(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), c = (x) => {
    const { scope: C, children: E } = x, b = oe.useRef(null), F = oe.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m.jsx(l, { scope: C, itemMap: F, collectionRef: b, children: E });
  };
  c.displayName = n;
  const d = e + "CollectionSlot", p = oe.forwardRef(
    (x, C) => {
      const { scope: E, children: b } = x, F = s(d, E), k = Me(C, F.collectionRef);
      return /* @__PURE__ */ m.jsx(Hr, { ref: k, children: b });
    }
  );
  p.displayName = d;
  const v = e + "CollectionItemSlot", g = "data-radix-collection-item", D = oe.forwardRef(
    (x, C) => {
      const { scope: E, children: b, ...F } = x, k = oe.useRef(null), _ = Me(C, k), P = s(v, E);
      return oe.useEffect(() => (P.itemMap.set(k, { ref: k, ...F }), () => void P.itemMap.delete(k))), /* @__PURE__ */ m.jsx(Hr, { [g]: "", ref: _, children: b });
    }
  );
  D.displayName = v;
  function y(x) {
    const C = s(e + "CollectionConsumer", x);
    return oe.useCallback(() => {
      const b = C.collectionRef.current;
      if (!b) return [];
      const F = Array.from(b.querySelectorAll(`[${g}]`));
      return Array.from(C.itemMap.values()).sort(
        (P, O) => F.indexOf(P.ref.current) - F.indexOf(O.ref.current)
      );
    }, [C.collectionRef, C.itemMap]);
  }
  return [
    { Provider: c, Slot: p, ItemSlot: D },
    y,
    i
  ];
}
var $P = "VisuallyHidden", fD = w.forwardRef(
  (e, n) => /* @__PURE__ */ m.jsx(
    Ae.span,
    {
      ...e,
      ref: n,
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
fD.displayName = $P;
var HP = [" ", "Enter", "ArrowUp", "ArrowDown"], VP = [" ", "Enter"], Va = "Select", [Ks, Qs, UP] = zP(Va), [Ti, $j] = Qr(Va, [
  UP,
  Ys
]), Xs = Ys(), [YP, Jr] = Ti(Va), [KP, QP] = Ti(Va), pD = (e) => {
  const {
    __scopeSelect: n,
    children: r,
    open: i,
    defaultOpen: l,
    onOpenChange: s,
    value: c,
    defaultValue: d,
    onValueChange: p,
    dir: v,
    name: g,
    autoComplete: D,
    disabled: y,
    required: x
  } = e, C = Xs(n), [E, b] = w.useState(null), [F, k] = w.useState(null), [_, P] = w.useState(!1), O = t0(v), [B = !1, W] = Si({
    prop: i,
    defaultProp: l,
    onChange: s
  }), [U, $] = Si({
    prop: c,
    defaultProp: d,
    onChange: p
  }), H = w.useRef(null), ne = E ? !!E.closest("form") : !0, [Y, te] = w.useState(/* @__PURE__ */ new Set()), re = Array.from(Y).map((ae) => ae.props.value).join(";");
  return /* @__PURE__ */ m.jsx(qy, { ...C, children: /* @__PURE__ */ m.jsxs(
    YP,
    {
      required: x,
      scope: n,
      trigger: E,
      onTriggerChange: b,
      valueNode: F,
      onValueNodeChange: k,
      valueNodeHasChildren: _,
      onValueNodeHasChildrenChange: P,
      contentId: Fo(),
      value: U,
      onValueChange: $,
      open: B,
      onOpenChange: W,
      dir: O,
      triggerPointerDownPosRef: H,
      disabled: y,
      children: [
        /* @__PURE__ */ m.jsx(Ks.Provider, { scope: n, children: /* @__PURE__ */ m.jsx(
          KP,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: w.useCallback((ae) => {
              te((le) => new Set(le).add(ae));
            }, []),
            onNativeOptionRemove: w.useCallback((ae) => {
              te((le) => {
                const z = new Set(le);
                return z.delete(ae), z;
              });
            }, []),
            children: r
          }
        ) }),
        ne ? /* @__PURE__ */ m.jsxs(
          ID,
          {
            "aria-hidden": !0,
            required: x,
            tabIndex: -1,
            name: g,
            autoComplete: D,
            value: U,
            onChange: (ae) => $(ae.target.value),
            disabled: y,
            children: [
              U === void 0 ? /* @__PURE__ */ m.jsx("option", { value: "" }) : null,
              Array.from(Y)
            ]
          },
          re
        ) : null
      ]
    }
  ) });
};
pD.displayName = Va;
var mD = "SelectTrigger", hD = w.forwardRef(
  (e, n) => {
    const { __scopeSelect: r, disabled: i = !1, ...l } = e, s = Xs(r), c = Jr(mD, r), d = c.disabled || i, p = Me(n, c.onTriggerChange), v = Qs(r), [g, D, y] = BD((C) => {
      const E = v().filter((k) => !k.disabled), b = E.find((k) => k.value === c.value), F = WD(E, C, b);
      F !== void 0 && c.onValueChange(F.value);
    }), x = () => {
      d || (c.onOpenChange(!0), y());
    };
    return /* @__PURE__ */ m.jsx(Tf, { asChild: !0, ...s, children: /* @__PURE__ */ m.jsx(
      Ae.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": c.contentId,
        "aria-expanded": c.open,
        "aria-required": c.required,
        "aria-autocomplete": "none",
        dir: c.dir,
        "data-state": c.open ? "open" : "closed",
        disabled: d,
        "data-disabled": d ? "" : void 0,
        "data-placeholder": LD(c.value) ? "" : void 0,
        ...l,
        ref: p,
        onClick: Pe(l.onClick, (C) => {
          C.currentTarget.focus();
        }),
        onPointerDown: Pe(l.onPointerDown, (C) => {
          const E = C.target;
          E.hasPointerCapture(C.pointerId) && E.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && (x(), c.triggerPointerDownPosRef.current = {
            x: Math.round(C.pageX),
            y: Math.round(C.pageY)
          }, C.preventDefault());
        }),
        onKeyDown: Pe(l.onKeyDown, (C) => {
          const E = g.current !== "";
          !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && D(C.key), !(E && C.key === " ") && HP.includes(C.key) && (x(), C.preventDefault());
        })
      }
    ) });
  }
);
hD.displayName = mD;
var vD = "SelectValue", gD = w.forwardRef(
  (e, n) => {
    const { __scopeSelect: r, className: i, style: l, children: s, placeholder: c = "", ...d } = e, p = Jr(vD, r), { onValueNodeHasChildrenChange: v } = p, g = s !== void 0, D = Me(n, p.onValueNodeChange);
    return Ft(() => {
      v(g);
    }, [v, g]), /* @__PURE__ */ m.jsx(
      Ae.span,
      {
        ...d,
        ref: D,
        style: { pointerEvents: "none" },
        children: LD(p.value) ? /* @__PURE__ */ m.jsx(m.Fragment, { children: c }) : s
      }
    );
  }
);
gD.displayName = vD;
var XP = "SelectIcon", yD = w.forwardRef(
  (e, n) => {
    const { __scopeSelect: r, children: i, ...l } = e;
    return /* @__PURE__ */ m.jsx(Ae.span, { "aria-hidden": !0, ...l, ref: n, children: i || "▼" });
  }
);
yD.displayName = XP;
var GP = "SelectPortal", DD = (e) => /* @__PURE__ */ m.jsx(Ns, { asChild: !0, ...e });
DD.displayName = GP;
var Oo = "SelectContent", wD = w.forwardRef(
  (e, n) => {
    const r = Jr(Oo, e.__scopeSelect), [i, l] = w.useState();
    if (Ft(() => {
      l(new DocumentFragment());
    }, []), !r.open) {
      const s = i;
      return s ? To.createPortal(
        /* @__PURE__ */ m.jsx(xD, { scope: e.__scopeSelect, children: /* @__PURE__ */ m.jsx(Ks.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ m.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ m.jsx(CD, { ...e, ref: n });
  }
);
wD.displayName = Oo;
var nr = 10, [xD, Zr] = Ti(Oo), qP = "SelectContentImpl", CD = w.forwardRef(
  (e, n) => {
    const {
      __scopeSelect: r,
      position: i = "item-aligned",
      onCloseAutoFocus: l,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      //
      // PopperContent props
      side: d,
      sideOffset: p,
      align: v,
      alignOffset: g,
      arrowPadding: D,
      collisionBoundary: y,
      collisionPadding: x,
      sticky: C,
      hideWhenDetached: E,
      avoidCollisions: b,
      //
      ...F
    } = e, k = Jr(Oo, r), [_, P] = w.useState(null), [O, B] = w.useState(null), W = Me(n, (ee) => P(ee)), [U, $] = w.useState(null), [H, ne] = w.useState(
      null
    ), Y = Qs(r), [te, re] = w.useState(!1), ae = w.useRef(!1);
    w.useEffect(() => {
      if (_) return Wd(_);
    }, [_]), Bd();
    const le = w.useCallback(
      (ee) => {
        const [ue, ...Ce] = Y().map((je) => je.ref.current), [Z] = Ce.slice(-1), Ne = document.activeElement;
        for (const je of ee)
          if (je === Ne || (je == null || je.scrollIntoView({ block: "nearest" }), je === ue && O && (O.scrollTop = 0), je === Z && O && (O.scrollTop = O.scrollHeight), je == null || je.focus(), document.activeElement !== Ne)) return;
      },
      [Y, O]
    ), z = w.useCallback(
      () => le([U, _]),
      [le, U, _]
    );
    w.useEffect(() => {
      te && z();
    }, [te, z]);
    const { onOpenChange: R, triggerPointerDownPosRef: X } = k;
    w.useEffect(() => {
      if (_) {
        let ee = { x: 0, y: 0 };
        const ue = (Z) => {
          var Ne, je;
          ee = {
            x: Math.abs(Math.round(Z.pageX) - (((Ne = X.current) == null ? void 0 : Ne.x) ?? 0)),
            y: Math.abs(Math.round(Z.pageY) - (((je = X.current) == null ? void 0 : je.y) ?? 0))
          };
        }, Ce = (Z) => {
          ee.x <= 10 && ee.y <= 10 ? Z.preventDefault() : _.contains(Z.target) || R(!1), document.removeEventListener("pointermove", ue), X.current = null;
        };
        return X.current !== null && (document.addEventListener("pointermove", ue), document.addEventListener("pointerup", Ce, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ue), document.removeEventListener("pointerup", Ce, { capture: !0 });
        };
      }
    }, [_, R, X]), w.useEffect(() => {
      const ee = () => R(!1);
      return window.addEventListener("blur", ee), window.addEventListener("resize", ee), () => {
        window.removeEventListener("blur", ee), window.removeEventListener("resize", ee);
      };
    }, [R]);
    const [q, A] = BD((ee) => {
      const ue = Y().filter((Ne) => !Ne.disabled), Ce = ue.find((Ne) => Ne.ref.current === document.activeElement), Z = WD(ue, ee, Ce);
      Z && setTimeout(() => Z.ref.current.focus());
    }), V = w.useCallback(
      (ee, ue, Ce) => {
        const Z = !ae.current && !Ce;
        (k.value !== void 0 && k.value === ue || Z) && ($(ee), Z && (ae.current = !0));
      },
      [k.value]
    ), ye = w.useCallback(() => _ == null ? void 0 : _.focus(), [_]), pe = w.useCallback(
      (ee, ue, Ce) => {
        const Z = !ae.current && !Ce;
        (k.value !== void 0 && k.value === ue || Z) && ne(ee);
      },
      [k.value]
    ), xe = i === "popper" ? Nd : ED, De = xe === Nd ? {
      side: d,
      sideOffset: p,
      align: v,
      alignOffset: g,
      arrowPadding: D,
      collisionBoundary: y,
      collisionPadding: x,
      sticky: C,
      hideWhenDetached: E,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ m.jsx(
      xD,
      {
        scope: r,
        content: _,
        viewport: O,
        onViewportChange: B,
        itemRefCallback: V,
        selectedItem: U,
        onItemLeave: ye,
        itemTextRefCallback: pe,
        focusSelectedItem: z,
        selectedItemText: H,
        position: i,
        isPositioned: te,
        searchRef: q,
        children: /* @__PURE__ */ m.jsx(Ps, { as: Hr, allowPinchZoom: !0, children: /* @__PURE__ */ m.jsx(
          ks,
          {
            asChild: !0,
            trapped: k.open,
            onMountAutoFocus: (ee) => {
              ee.preventDefault();
            },
            onUnmountAutoFocus: Pe(l, (ee) => {
              var ue;
              (ue = k.trigger) == null || ue.focus({ preventScroll: !0 }), ee.preventDefault();
            }),
            children: /* @__PURE__ */ m.jsx(
              Fs,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: c,
                onFocusOutside: (ee) => ee.preventDefault(),
                onDismiss: () => k.onOpenChange(!1),
                children: /* @__PURE__ */ m.jsx(
                  xe,
                  {
                    role: "listbox",
                    id: k.contentId,
                    "data-state": k.open ? "open" : "closed",
                    dir: k.dir,
                    onContextMenu: (ee) => ee.preventDefault(),
                    ...F,
                    ...De,
                    onPlaced: () => re(!0),
                    ref: W,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...F.style
                    },
                    onKeyDown: Pe(F.onKeyDown, (ee) => {
                      const ue = ee.ctrlKey || ee.altKey || ee.metaKey;
                      if (ee.key === "Tab" && ee.preventDefault(), !ue && ee.key.length === 1 && A(ee.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(ee.key)) {
                        let Z = Y().filter((Ne) => !Ne.disabled).map((Ne) => Ne.ref.current);
                        if (["ArrowUp", "End"].includes(ee.key) && (Z = Z.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(ee.key)) {
                          const Ne = ee.target, je = Z.indexOf(Ne);
                          Z = Z.slice(je + 1);
                        }
                        setTimeout(() => le(Z)), ee.preventDefault();
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
CD.displayName = qP;
var JP = "SelectItemAlignedPosition", ED = w.forwardRef((e, n) => {
  const { __scopeSelect: r, onPlaced: i, ...l } = e, s = Jr(Oo, r), c = Zr(Oo, r), [d, p] = w.useState(null), [v, g] = w.useState(null), D = Me(n, (W) => g(W)), y = Qs(r), x = w.useRef(!1), C = w.useRef(!0), { viewport: E, selectedItem: b, selectedItemText: F, focusSelectedItem: k } = c, _ = w.useCallback(() => {
    if (s.trigger && s.valueNode && d && v && E && b && F) {
      const W = s.trigger.getBoundingClientRect(), U = v.getBoundingClientRect(), $ = s.valueNode.getBoundingClientRect(), H = F.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const Ne = H.left - U.left, je = $.left - Ne, tt = W.left - je, dt = W.width + tt, wt = Math.max(dt, U.width), zt = window.innerWidth - nr, $t = hd(je, [nr, zt - wt]);
        d.style.minWidth = dt + "px", d.style.left = $t + "px";
      } else {
        const Ne = U.right - H.right, je = window.innerWidth - $.right - Ne, tt = window.innerWidth - W.right - je, dt = W.width + tt, wt = Math.max(dt, U.width), zt = window.innerWidth - nr, $t = hd(je, [nr, zt - wt]);
        d.style.minWidth = dt + "px", d.style.right = $t + "px";
      }
      const ne = y(), Y = window.innerHeight - nr * 2, te = E.scrollHeight, re = window.getComputedStyle(v), ae = parseInt(re.borderTopWidth, 10), le = parseInt(re.paddingTop, 10), z = parseInt(re.borderBottomWidth, 10), R = parseInt(re.paddingBottom, 10), X = ae + le + te + R + z, q = Math.min(b.offsetHeight * 5, X), A = window.getComputedStyle(E), V = parseInt(A.paddingTop, 10), ye = parseInt(A.paddingBottom, 10), pe = W.top + W.height / 2 - nr, xe = Y - pe, De = b.offsetHeight / 2, ee = b.offsetTop + De, ue = ae + le + ee, Ce = X - ue;
      if (ue <= pe) {
        const Ne = b === ne[ne.length - 1].ref.current;
        d.style.bottom = "0px";
        const je = v.clientHeight - E.offsetTop - E.offsetHeight, tt = Math.max(
          xe,
          De + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Ne ? ye : 0) + je + z
        ), dt = ue + tt;
        d.style.height = dt + "px";
      } else {
        const Ne = b === ne[0].ref.current;
        d.style.top = "0px";
        const tt = Math.max(
          pe,
          ae + E.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Ne ? V : 0) + De
        ) + Ce;
        d.style.height = tt + "px", E.scrollTop = ue - pe + E.offsetTop;
      }
      d.style.margin = `${nr}px 0`, d.style.minHeight = q + "px", d.style.maxHeight = Y + "px", i == null || i(), requestAnimationFrame(() => x.current = !0);
    }
  }, [
    y,
    s.trigger,
    s.valueNode,
    d,
    v,
    E,
    b,
    F,
    s.dir,
    i
  ]);
  Ft(() => _(), [_]);
  const [P, O] = w.useState();
  Ft(() => {
    v && O(window.getComputedStyle(v).zIndex);
  }, [v]);
  const B = w.useCallback(
    (W) => {
      W && C.current === !0 && (_(), k == null || k(), C.current = !1);
    },
    [_, k]
  );
  return /* @__PURE__ */ m.jsx(
    ej,
    {
      scope: r,
      contentWrapper: d,
      shouldExpandOnScrollRef: x,
      onScrollButtonChange: B,
      children: /* @__PURE__ */ m.jsx(
        "div",
        {
          ref: p,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: P
          },
          children: /* @__PURE__ */ m.jsx(
            Ae.div,
            {
              ...l,
              ref: D,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...l.style
              }
            }
          )
        }
      )
    }
  );
});
ED.displayName = JP;
var ZP = "SelectPopperPosition", Nd = w.forwardRef((e, n) => {
  const {
    __scopeSelect: r,
    align: i = "start",
    collisionPadding: l = nr,
    ...s
  } = e, c = Xs(r);
  return /* @__PURE__ */ m.jsx(
    Jy,
    {
      ...c,
      ...s,
      ref: n,
      align: i,
      collisionPadding: l,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Nd.displayName = ZP;
var [ej, Lf] = Ti(Oo, {}), _d = "SelectViewport", SD = w.forwardRef(
  (e, n) => {
    const { __scopeSelect: r, nonce: i, ...l } = e, s = Zr(_d, r), c = Lf(_d, r), d = Me(n, s.onViewportChange), p = w.useRef(0);
    return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: i
        }
      ),
      /* @__PURE__ */ m.jsx(Ks.Slot, { scope: r, children: /* @__PURE__ */ m.jsx(
        Ae.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...l,
          ref: d,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...l.style
          },
          onScroll: Pe(l.onScroll, (v) => {
            const g = v.currentTarget, { contentWrapper: D, shouldExpandOnScrollRef: y } = c;
            if (y != null && y.current && D) {
              const x = Math.abs(p.current - g.scrollTop);
              if (x > 0) {
                const C = window.innerHeight - nr * 2, E = parseFloat(D.style.minHeight), b = parseFloat(D.style.height), F = Math.max(E, b);
                if (F < C) {
                  const k = F + x, _ = Math.min(C, k), P = k - _;
                  D.style.height = _ + "px", D.style.bottom === "0px" && (g.scrollTop = P > 0 ? P : 0, D.style.justifyContent = "flex-end");
                }
              }
            }
            p.current = g.scrollTop;
          })
        }
      ) })
    ] });
  }
);
SD.displayName = _d;
var bD = "SelectGroup", [tj, nj] = Ti(bD), rj = w.forwardRef(
  (e, n) => {
    const { __scopeSelect: r, ...i } = e, l = Fo();
    return /* @__PURE__ */ m.jsx(tj, { scope: r, id: l, children: /* @__PURE__ */ m.jsx(Ae.div, { role: "group", "aria-labelledby": l, ...i, ref: n }) });
  }
);
rj.displayName = bD;
var FD = "SelectLabel", kD = w.forwardRef(
  (e, n) => {
    const { __scopeSelect: r, ...i } = e, l = nj(FD, r);
    return /* @__PURE__ */ m.jsx(Ae.div, { id: l.id, ...i, ref: n });
  }
);
kD.displayName = FD;
var bs = "SelectItem", [oj, ND] = Ti(bs), _D = w.forwardRef(
  (e, n) => {
    const {
      __scopeSelect: r,
      value: i,
      disabled: l = !1,
      textValue: s,
      ...c
    } = e, d = Jr(bs, r), p = Zr(bs, r), v = d.value === i, [g, D] = w.useState(s ?? ""), [y, x] = w.useState(!1), C = Me(
      n,
      (F) => {
        var k;
        return (k = p.itemRefCallback) == null ? void 0 : k.call(p, F, i, l);
      }
    ), E = Fo(), b = () => {
      l || (d.onValueChange(i), d.onOpenChange(!1));
    };
    if (i === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ m.jsx(
      oj,
      {
        scope: r,
        value: i,
        disabled: l,
        textId: E,
        isSelected: v,
        onItemTextChange: w.useCallback((F) => {
          D((k) => k || ((F == null ? void 0 : F.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ m.jsx(
          Ks.ItemSlot,
          {
            scope: r,
            value: i,
            disabled: l,
            textValue: g,
            children: /* @__PURE__ */ m.jsx(
              Ae.div,
              {
                role: "option",
                "aria-labelledby": E,
                "data-highlighted": y ? "" : void 0,
                "aria-selected": v && y,
                "data-state": v ? "checked" : "unchecked",
                "aria-disabled": l || void 0,
                "data-disabled": l ? "" : void 0,
                tabIndex: l ? void 0 : -1,
                ...c,
                ref: C,
                onFocus: Pe(c.onFocus, () => x(!0)),
                onBlur: Pe(c.onBlur, () => x(!1)),
                onPointerUp: Pe(c.onPointerUp, b),
                onPointerMove: Pe(c.onPointerMove, (F) => {
                  var k;
                  l ? (k = p.onItemLeave) == null || k.call(p) : F.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Pe(c.onPointerLeave, (F) => {
                  var k;
                  F.currentTarget === document.activeElement && ((k = p.onItemLeave) == null || k.call(p));
                }),
                onKeyDown: Pe(c.onKeyDown, (F) => {
                  var _;
                  ((_ = p.searchRef) == null ? void 0 : _.current) !== "" && F.key === " " || (VP.includes(F.key) && b(), F.key === " " && F.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
_D.displayName = bs;
var Sa = "SelectItemText", PD = w.forwardRef(
  (e, n) => {
    const { __scopeSelect: r, className: i, style: l, ...s } = e, c = Jr(Sa, r), d = Zr(Sa, r), p = ND(Sa, r), v = QP(Sa, r), [g, D] = w.useState(null), y = Me(
      n,
      (F) => D(F),
      p.onItemTextChange,
      (F) => {
        var k;
        return (k = d.itemTextRefCallback) == null ? void 0 : k.call(d, F, p.value, p.disabled);
      }
    ), x = g == null ? void 0 : g.textContent, C = w.useMemo(
      () => /* @__PURE__ */ m.jsx("option", { value: p.value, disabled: p.disabled, children: x }, p.value),
      [p.disabled, p.value, x]
    ), { onNativeOptionAdd: E, onNativeOptionRemove: b } = v;
    return Ft(() => (E(C), () => b(C)), [E, b, C]), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(Ae.span, { id: p.textId, ...s, ref: y }),
      p.isSelected && c.valueNode && !c.valueNodeHasChildren ? To.createPortal(s.children, c.valueNode) : null
    ] });
  }
);
PD.displayName = Sa;
var jD = "SelectItemIndicator", AD = w.forwardRef(
  (e, n) => {
    const { __scopeSelect: r, ...i } = e;
    return ND(jD, r).isSelected ? /* @__PURE__ */ m.jsx(Ae.span, { "aria-hidden": !0, ...i, ref: n }) : null;
  }
);
AD.displayName = jD;
var Pd = "SelectScrollUpButton", OD = w.forwardRef((e, n) => {
  const r = Zr(Pd, e.__scopeSelect), i = Lf(Pd, e.__scopeSelect), [l, s] = w.useState(!1), c = Me(n, i.onScrollButtonChange);
  return Ft(() => {
    if (r.viewport && r.isPositioned) {
      let d = function() {
        const v = p.scrollTop > 0;
        s(v);
      };
      const p = r.viewport;
      return d(), p.addEventListener("scroll", d), () => p.removeEventListener("scroll", d);
    }
  }, [r.viewport, r.isPositioned]), l ? /* @__PURE__ */ m.jsx(
    RD,
    {
      ...e,
      ref: c,
      onAutoScroll: () => {
        const { viewport: d, selectedItem: p } = r;
        d && p && (d.scrollTop = d.scrollTop - p.offsetHeight);
      }
    }
  ) : null;
});
OD.displayName = Pd;
var jd = "SelectScrollDownButton", TD = w.forwardRef((e, n) => {
  const r = Zr(jd, e.__scopeSelect), i = Lf(jd, e.__scopeSelect), [l, s] = w.useState(!1), c = Me(n, i.onScrollButtonChange);
  return Ft(() => {
    if (r.viewport && r.isPositioned) {
      let d = function() {
        const v = p.scrollHeight - p.clientHeight, g = Math.ceil(p.scrollTop) < v;
        s(g);
      };
      const p = r.viewport;
      return d(), p.addEventListener("scroll", d), () => p.removeEventListener("scroll", d);
    }
  }, [r.viewport, r.isPositioned]), l ? /* @__PURE__ */ m.jsx(
    RD,
    {
      ...e,
      ref: c,
      onAutoScroll: () => {
        const { viewport: d, selectedItem: p } = r;
        d && p && (d.scrollTop = d.scrollTop + p.offsetHeight);
      }
    }
  ) : null;
});
TD.displayName = jd;
var RD = w.forwardRef((e, n) => {
  const { __scopeSelect: r, onAutoScroll: i, ...l } = e, s = Zr("SelectScrollButton", r), c = w.useRef(null), d = Qs(r), p = w.useCallback(() => {
    c.current !== null && (window.clearInterval(c.current), c.current = null);
  }, []);
  return w.useEffect(() => () => p(), [p]), Ft(() => {
    var g;
    const v = d().find((D) => D.ref.current === document.activeElement);
    (g = v == null ? void 0 : v.ref.current) == null || g.scrollIntoView({ block: "nearest" });
  }, [d]), /* @__PURE__ */ m.jsx(
    Ae.div,
    {
      "aria-hidden": !0,
      ...l,
      ref: n,
      style: { flexShrink: 0, ...l.style },
      onPointerDown: Pe(l.onPointerDown, () => {
        c.current === null && (c.current = window.setInterval(i, 50));
      }),
      onPointerMove: Pe(l.onPointerMove, () => {
        var v;
        (v = s.onItemLeave) == null || v.call(s), c.current === null && (c.current = window.setInterval(i, 50));
      }),
      onPointerLeave: Pe(l.onPointerLeave, () => {
        p();
      })
    }
  );
}), ij = "SelectSeparator", MD = w.forwardRef(
  (e, n) => {
    const { __scopeSelect: r, ...i } = e;
    return /* @__PURE__ */ m.jsx(Ae.div, { "aria-hidden": !0, ...i, ref: n });
  }
);
MD.displayName = ij;
var Ad = "SelectArrow", aj = w.forwardRef(
  (e, n) => {
    const { __scopeSelect: r, ...i } = e, l = Xs(r), s = Jr(Ad, r), c = Zr(Ad, r);
    return s.open && c.position === "popper" ? /* @__PURE__ */ m.jsx(Zy, { ...l, ...i, ref: n }) : null;
  }
);
aj.displayName = Ad;
function LD(e) {
  return e === "" || e === void 0;
}
var ID = w.forwardRef(
  (e, n) => {
    const { value: r, ...i } = e, l = w.useRef(null), s = Me(n, l), c = vf(r);
    return w.useEffect(() => {
      const d = l.current, p = window.HTMLSelectElement.prototype, g = Object.getOwnPropertyDescriptor(
        p,
        "value"
      ).set;
      if (c !== r && g) {
        const D = new Event("change", { bubbles: !0 });
        g.call(d, r), d.dispatchEvent(D);
      }
    }, [c, r]), /* @__PURE__ */ m.jsx(fD, { asChild: !0, children: /* @__PURE__ */ m.jsx("select", { ...i, ref: s, defaultValue: r }) });
  }
);
ID.displayName = "BubbleSelect";
function BD(e) {
  const n = bt(e), r = w.useRef(""), i = w.useRef(0), l = w.useCallback(
    (c) => {
      const d = r.current + c;
      n(d), function p(v) {
        r.current = v, window.clearTimeout(i.current), v !== "" && (i.current = window.setTimeout(() => p(""), 1e3));
      }(d);
    },
    [n]
  ), s = w.useCallback(() => {
    r.current = "", window.clearTimeout(i.current);
  }, []);
  return w.useEffect(() => () => window.clearTimeout(i.current), []), [r, l, s];
}
function WD(e, n, r) {
  const l = n.length > 1 && Array.from(n).every((v) => v === n[0]) ? n[0] : n, s = r ? e.indexOf(r) : -1;
  let c = lj(e, Math.max(s, 0));
  l.length === 1 && (c = c.filter((v) => v !== r));
  const p = c.find(
    (v) => v.textValue.toLowerCase().startsWith(l.toLowerCase())
  );
  return p !== r ? p : void 0;
}
function lj(e, n) {
  return e.map((r, i) => e[(n + i) % e.length]);
}
var sj = pD, zD = hD, uj = gD, cj = yD, dj = DD, $D = wD, fj = SD, HD = kD, VD = _D, pj = PD, mj = AD, UD = OD, YD = TD, KD = MD;
const hj = sj, vj = uj, QD = w.forwardRef(({ className: e, children: n, ...r }, i) => /* @__PURE__ */ m.jsxs(
  zD,
  {
    ref: i,
    className: ke(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground   focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ m.jsx(cj, { asChild: !0, children: /* @__PURE__ */ m.jsx(wy, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
QD.displayName = zD.displayName;
const XD = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  UD,
  {
    ref: r,
    className: ke("flex cursor-default items-center justify-center py-1", e),
    ...n,
    children: /* @__PURE__ */ m.jsx(Hk, { className: "h-4 w-4" })
  }
));
XD.displayName = UD.displayName;
const GD = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  YD,
  {
    ref: r,
    className: ke("flex cursor-default items-center justify-center py-1", e),
    ...n,
    children: /* @__PURE__ */ m.jsx(wy, { className: "h-4 w-4" })
  }
));
GD.displayName = YD.displayName;
const qD = w.forwardRef(({ className: e, children: n, position: r = "popper", ...i }, l) => /* @__PURE__ */ m.jsx(dj, { children: /* @__PURE__ */ m.jsxs(
  $D,
  {
    ref: l,
    className: ke(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...i,
    children: [
      /* @__PURE__ */ m.jsx(XD, {}),
      /* @__PURE__ */ m.jsx(
        fj,
        {
          className: ke("p-1", r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
          children: n
        }
      ),
      /* @__PURE__ */ m.jsx(GD, {})
    ]
  }
) }));
qD.displayName = $D.displayName;
const gj = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  HD,
  {
    ref: r,
    className: ke("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...n
  }
));
gj.displayName = HD.displayName;
const ba = w.forwardRef(({ className: e, children: n, ...r }, i) => /* @__PURE__ */ m.jsxs(
  VD,
  {
    ref: i,
    className: ke(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ m.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m.jsx(mj, { children: /* @__PURE__ */ m.jsx(Dy, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ m.jsx(pj, { children: n })
    ]
  }
));
ba.displayName = VD.displayName;
const yj = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  KD,
  {
    ref: r,
    className: ke("-mx-1 my-1 h-px bg-muted", e),
    ...n
  }
));
yj.displayName = KD.displayName;
const Dj = ({
  guests: e,
  setGuests: n,
  guestsError: r,
  setGuestsError: i,
  date: l,
  setDate: s,
  dateError: c,
  endDate: d,
  setEndDate: p,
  endDateError: v,
  time: g,
  setTime: D,
  timeError: y,
  endTime: x,
  setEndTime: C,
  isMultiDay: E,
  setMultiDay: b,
  tableSetup: F,
  setTableSetup: k,
  venue: _,
  setVenue: P,
  eventPackages: O,
  selectedEventPackages: B,
  setSelectedEventPackages: W,
  venues: U
}) => {
  const $ = (H, ne) => {
    const Y = [...B];
    Y[H] = ne, W(Y);
  };
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsxs("div", { className: "space-y-4 mt-8 grid grid-rows-2 justify-center lg:max-w-[680px] mx-auto", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "grid md:grid-cols-2 space-y-8 md:space-y-0 md:space-x-4 ", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ m.jsx(Eo, { htmlFor: "guests", children: "Number of guests" }),
          /* @__PURE__ */ m.jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ m.jsx(
              yn,
              {
                className: `pr-8 ${r && "border-red-500"}`,
                type: "number",
                id: "guests",
                placeholder: "12",
                max: "22",
                value: e,
                onChange: (H) => {
                  n(H.target.value), i(null);
                }
              }
            ),
            /* @__PURE__ */ m.jsx(Q1, { className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" })
          ] }),
          r && /* @__PURE__ */ m.jsx("p", { className: "text-red-500 text-sm mt-1", children: r })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ m.jsx(Eo, { htmlFor: "date", children: "When is it happening" }),
          /* @__PURE__ */ m.jsx("div", { className: "relative mt-2", children: /* @__PURE__ */ m.jsx(
            Rv,
            {
              date: l,
              setDate: (H) => {
                s(H), p(new Date(H).setDate(new Date(H).getDate() + 1));
              }
            }
          ) }),
          c && /* @__PURE__ */ m.jsx("p", { className: "text-red-500 text-sm mt-1", children: c })
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4 items-end", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "flex-1 lg:max-w-[330px]", children: [
          /* @__PURE__ */ m.jsx(Eo, { htmlFor: "time", children: "Time of arrival" }),
          /* @__PURE__ */ m.jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ m.jsx(
              yn,
              {
                type: "time",
                id: "time",
                placeholder: "09:00 am",
                value: g,
                className: `w-full ${y && "border-red-500"}`,
                onChange: (H) => {
                  D(H.target.value);
                  let ne = (/* @__PURE__ */ new Date()).setHours(parseInt(H.target.value.split(":")[0]) + 8);
                  ne = new Date(ne).setMinutes(H.target.value.split(":")[1]), C(new Date(ne).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
                }
              }
            ),
            /* @__PURE__ */ m.jsx(sd, { className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" })
          ] }),
          y && /* @__PURE__ */ m.jsx("p", { className: "text-red-500 text-sm mt-1", children: y })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ m.jsx(gy, { id: "multi-day", checked: E, onClick: (H) => {
            b(!E), l && !E ? (p((/* @__PURE__ */ new Date()).setDate(new Date(l).getDate() + 1)), g && C(new Date(l).setHours(new Date(l).getHours() + 8)).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })) : (p((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 2)), C("17:00"));
          } }),
          /* @__PURE__ */ m.jsx(Eo, { htmlFor: "multi-day", children: "Multi day event" })
        ] })
      ] }),
      E && /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsxs("div", { className: "grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ m.jsx(Eo, { htmlFor: "end-date", children: "End date" }),
          /* @__PURE__ */ m.jsx("div", { className: "relative mt-2", children: /* @__PURE__ */ m.jsx(
            Rv,
            {
              date: d,
              setDate: p
            }
          ) }),
          v && /* @__PURE__ */ m.jsx("p", { className: "text-red-500 text-sm mt-1", children: v })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ m.jsx(Eo, { htmlFor: "end-time", children: "Time of Departure" }),
          /* @__PURE__ */ m.jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ m.jsx(yn, { type: "time", id: "end-time", min: g ? g + ":00" : "10:00:00", placeholder: "17:00", value: x, onChange: (H) => C(H.target.value) }),
            /* @__PURE__ */ m.jsx(sd, { className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ m.jsxs("div", { className: "mt-12 space-y-8 flex flex-col items-center", children: [
        /* @__PURE__ */ m.jsx("h3", { className: "text-center text-lg font-bold", children: `Select Packages${E ? " for each day" : ""}` }),
        E && l && d ? Array.from({ length: new Date(d).getDate() - new Date(l).getDate() + 1 }, (H, ne) => /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ m.jsxs("div", { children: [
            "Day ",
            ne + 1
          ] }),
          /* @__PURE__ */ m.jsx("div", { className: "flex space-x-4 mt-4", children: O.map((Y) => /* @__PURE__ */ m.jsx(
            xv,
            {
              title: `${Y.duration_hours} Hours`,
              description: Y.description,
              onClick: () => $(ne, Y.id),
              id: Y.id,
              isSelected: B[ne] === Y.id,
              noneSelected: !B[ne],
              value: Y.id
            },
            Y.id
          )) })
        ] }, ne)) : /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-4 mt-4", children: O.map((H) => /* @__PURE__ */ m.jsx(
          xv,
          {
            title: `${H.duration_hours} Hours`,
            description: H.description,
            onClick: () => $(0, H.id),
            id: H.id,
            isSelected: B.length > 0 && B[0] === H.id,
            noneSelected: B.length === 0,
            value: H.id
          },
          H.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "mt-12 space-y-8 flex flex-col items-center", children: [
      /* @__PURE__ */ m.jsxs("h3", { className: "text-lg font-bold text-center", children: [
        "Venue Preference ",
        /* @__PURE__ */ m.jsx("span", { className: "text-muted-foreground", children: "(optional)" })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: "flex items-center space-x-2 mt-4", children: /* @__PURE__ */ m.jsxs(hj, { onValueChange: (H) => k(H), defaultValue: "Boardroom", children: [
        /* @__PURE__ */ m.jsx(QD, { className: "w-[180px]", children: /* @__PURE__ */ m.jsx(vj, { placeholder: "Boardroom Setup" }) }),
        /* @__PURE__ */ m.jsxs(qD, { children: [
          /* @__PURE__ */ m.jsx(ba, { value: "Boardroom", children: "Boardroom" }),
          /* @__PURE__ */ m.jsx(ba, { value: "U-Shape", children: "U-Shape" }),
          /* @__PURE__ */ m.jsx(ba, { value: "Classroom", children: "Classroom" }),
          /* @__PURE__ */ m.jsx(ba, { value: "Intimate", children: "Intimate - no tables" })
        ] })
      ] }) }),
      /* @__PURE__ */ m.jsx("div", { className: "grid md:grid-cols-2 gap-4 mt-4", children: U.map((H) => /* @__PURE__ */ m.jsx(
        Lk,
        {
          venue_name: H.name,
          venue_description: H.description,
          image_url: H.images[0],
          capacity: H.capacity,
          area: H.area,
          isSelected: H.id === _,
          onClick: () => P(H.id)
        },
        H.id
      )) })
    ] })
  ] });
}, wj = ({ title: e, description: n, image_url: r, isSelected: i, onClick: l }) => /* @__PURE__ */ m.jsx(
  Ma,
  {
    className: ke("relative bg-gray-50 border-2 shadow-sm border-transparent hover:border-primary cursor-pointer", i && "border-primary"),
    onClick: l,
    children: /* @__PURE__ */ m.jsxs(La, { className: "p-6 flex flex-col items-left justify-between cursor-pointer h-full", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col items-left h-full", children: [
        /* @__PURE__ */ m.jsx(
          "img",
          {
            src: r,
            alt: e,
            loading: "lazy",
            className: "w-full aspect-ratio-1 rounded-md object-cover"
          }
        ),
        /* @__PURE__ */ m.jsx("h4", { className: "text-sm sm:text-md font-medium mt-4", children: e }),
        /* @__PURE__ */ m.jsx("p", { className: "text-xs sm:text-sm mt-2", children: n })
      ] }),
      /* @__PURE__ */ m.jsxs(qe, { className: "mt-4 w-fit outline-none", onClick: l, children: [
        /* @__PURE__ */ m.jsx("span", { className: i && "hidden", children: "Choose" }),
        /* @__PURE__ */ m.jsx("div", { className: `${!i && "hidden"} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`, children: /* @__PURE__ */ m.jsx(bo, { className: "h-4 w-4 text-white " }) })
      ] })
    ] })
  }
), xj = ({ guests: e, title: n, description: r, quantity: i = 0, image_url: l, isSelected: s, onClick: c, onQuantityChange: d }) => /* @__PURE__ */ m.jsx(
  Ma,
  {
    className: ke("relative bg-gray-50 border-2 shadow-sm border-transparent hover:border-primary cursor-pointer", s && "border-primary"),
    onClick: () => {
      s || c();
    },
    children: /* @__PURE__ */ m.jsxs(La, { className: "p-6 flex flex-col items-left justify-between cursor-pointer h-full", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col items-left h-full", children: [
        /* @__PURE__ */ m.jsx(
          "img",
          {
            src: l,
            alt: n,
            loading: "lazy",
            className: "w-full aspect-ratio-1 rounded-md object-cover"
          }
        ),
        /* @__PURE__ */ m.jsx("h4", { className: "text-sm sm:text-md font-medium mt-4", children: n }),
        /* @__PURE__ */ m.jsx("p", { className: "text-xs sm:text-sm mt-2", children: r })
      ] }),
      s ? /* @__PURE__ */ m.jsxs("div", { className: "mt-4 w-fit flex items-center justify-center rounded-full border-primary border-2 p-1 space-x-3", children: [
        /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-center bg-primary h-6 w-6 rounded-full m-1", children: /* @__PURE__ */ m.jsx(bo, { className: "h-4 w-4 text-white" }) }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
          /* @__PURE__ */ m.jsx("p", { className: "text-primary font-medium", children: i }),
          /* @__PURE__ */ m.jsx(
            qe,
            {
              variant: "outline",
              className: "!h-7 !w-7 p-1 group rounded-full flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-white text-lg",
              onClick: () => d(i - 1),
              disabled: !0,
              children: /* @__PURE__ */ m.jsx(X1, { className: "h-5 w-5 text-primary group-hover:text-white" })
            }
          ),
          /* @__PURE__ */ m.jsx(
            qe,
            {
              variant: "outline",
              className: "!h-7 !w-7 p-1 group rounded-full flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-white text-lg",
              onClick: () => d(i + 1),
              disabled: !0,
              children: /* @__PURE__ */ m.jsx(G1, { className: "h-6 w-6 text-primary group-hover:text-white" })
            }
          )
        ] })
      ] }) : /* @__PURE__ */ m.jsx(qe, { className: "mt-2 w-fit", children: "Add" })
    ] })
  }
), Cj = ({ facilities: e, catering: n, guests: r, facilitiesSelected: i, setFacilitiesSelected: l, cateringSelected: s, setCateringSelected: c, comments: d, setComments: p }) => {
  const v = (y) => {
    i.includes(y) ? l(i.filter((x) => x !== y)) : l([...i, y]);
  }, g = (y) => {
    const x = s.some((C) => C.id === y);
    c(x ? s.filter((C) => C.id !== y) : [...s, { id: y, quantity: r }]);
  }, D = (y, x) => {
    if (x <= 0) {
      c(s.filter((C) => C.id !== y));
      return;
    }
    c(s.map(
      (C) => C.id === y ? { ...C, quantity: x } : C
    ));
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col space-y-8 mt-8", children: [
    /* @__PURE__ */ m.jsx("h2", { className: "text-2xl font-bold text-center", children: "Make your event complete" }),
    /* @__PURE__ */ m.jsx("p", { className: "text-center text-muted-foreground", children: "Choose one of the default packages or create your custom event" }),
    /* @__PURE__ */ m.jsxs("div", { children: [
      /* @__PURE__ */ m.jsx("h3", { className: "text-lg text-primary font-medium", children: "Facilities" }),
      /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 mt-4", children: e.map((y) => /* @__PURE__ */ m.jsx(
        wj,
        {
          title: y.title,
          description: y.description,
          image_url: y.image,
          isSelected: i.includes(y.id),
          onClick: () => v(y.id)
        },
        y.id
      )) })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { children: [
      /* @__PURE__ */ m.jsx("h3", { className: "text-lg text-primary font-medium", children: "Catering arrangements" }),
      /* @__PURE__ */ m.jsx("p", { className: "text-muted-foreground mt-2", children: "Specific delivery times are be added later from your customer portal." }),
      /* @__PURE__ */ m.jsx("div", { className: "grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 mt-4", children: n.map((y) => {
        const x = s.find((C) => C.id === y.id);
        return /* @__PURE__ */ m.jsx(
          xj,
          {
            guests: r,
            title: y.title,
            description: y.description,
            image_url: y.image,
            isSelected: !!x,
            quantity: x ? x.quantity : 0,
            onClick: () => g(y.id),
            onQuantityChange: (C) => D(y.id, C)
          },
          y.id
        );
      }) })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { children: [
      /* @__PURE__ */ m.jsx("h3", { className: "text-lg text-primary", children: "Special Requests / Comments" }),
      /* @__PURE__ */ m.jsx(
        "textarea",
        {
          className: "w-full p-4 border rounded mt-2 bg-gray-50 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50",
          rows: "4",
          placeholder: "Let us know how we can help with your event.",
          value: d,
          onChange: (y) => p(y.target.value)
        }
      )
    ] })
  ] });
};
var If = "Checkbox", [Ej, Hj] = Qr(If), [Sj, bj] = Ej(If), JD = w.forwardRef(
  (e, n) => {
    const {
      __scopeCheckbox: r,
      name: i,
      checked: l,
      defaultChecked: s,
      required: c,
      disabled: d,
      value: p = "on",
      onCheckedChange: v,
      ...g
    } = e, [D, y] = w.useState(null), x = Me(n, (_) => y(_)), C = w.useRef(!1), E = D ? !!D.closest("form") : !0, [b = !1, F] = Si({
      prop: l,
      defaultProp: s,
      onChange: v
    }), k = w.useRef(b);
    return w.useEffect(() => {
      const _ = D == null ? void 0 : D.form;
      if (_) {
        const P = () => F(k.current);
        return _.addEventListener("reset", P), () => _.removeEventListener("reset", P);
      }
    }, [D, F]), /* @__PURE__ */ m.jsxs(Sj, { scope: r, state: b, disabled: d, children: [
      /* @__PURE__ */ m.jsx(
        Ae.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": No(b) ? "mixed" : b,
          "aria-required": c,
          "data-state": tw(b),
          "data-disabled": d ? "" : void 0,
          disabled: d,
          value: p,
          ...g,
          ref: x,
          onKeyDown: Pe(e.onKeyDown, (_) => {
            _.key === "Enter" && _.preventDefault();
          }),
          onClick: Pe(e.onClick, (_) => {
            F((P) => No(P) ? !0 : !P), E && (C.current = _.isPropagationStopped(), C.current || _.stopPropagation());
          })
        }
      ),
      E && /* @__PURE__ */ m.jsx(
        Fj,
        {
          control: D,
          bubbles: !C.current,
          name: i,
          value: p,
          checked: b,
          required: c,
          disabled: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
JD.displayName = If;
var ZD = "CheckboxIndicator", ew = w.forwardRef(
  (e, n) => {
    const { __scopeCheckbox: r, forceMount: i, ...l } = e, s = bj(ZD, r);
    return /* @__PURE__ */ m.jsx(En, { present: i || No(s.state) || s.state === !0, children: /* @__PURE__ */ m.jsx(
      Ae.span,
      {
        "data-state": tw(s.state),
        "data-disabled": s.disabled ? "" : void 0,
        ...l,
        ref: n,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
ew.displayName = ZD;
var Fj = (e) => {
  const { control: n, checked: r, bubbles: i = !0, ...l } = e, s = w.useRef(null), c = vf(r), d = gf(n);
  return w.useEffect(() => {
    const p = s.current, v = window.HTMLInputElement.prototype, D = Object.getOwnPropertyDescriptor(v, "checked").set;
    if (c !== r && D) {
      const y = new Event("click", { bubbles: i });
      p.indeterminate = No(r), D.call(p, No(r) ? !1 : r), p.dispatchEvent(y);
    }
  }, [c, r, i]), /* @__PURE__ */ m.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: No(r) ? !1 : r,
      ...l,
      tabIndex: -1,
      ref: s,
      style: {
        ...e.style,
        ...d,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function No(e) {
  return e === "indeterminate";
}
function tw(e) {
  return No(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var nw = JD, kj = ew;
const rw = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  nw,
  {
    ref: r,
    className: ke(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...n,
    children: /* @__PURE__ */ m.jsx(kj, { className: ke("flex items-center justify-center text-current"), children: /* @__PURE__ */ m.jsx(Dy, { className: "h-4 w-4" }) })
  }
));
rw.displayName = nw.displayName;
const Nj = ({
  company: e,
  setCompany: n,
  firstName: r,
  setFirstName: i,
  lastName: l,
  setLastName: s,
  email: c,
  setEmail: d,
  phone: p,
  setPhone: v,
  agreeTerms: g,
  setAgreeTerms: D,
  companyError: y,
  firstNameError: x,
  lastNameError: C,
  emailError: E,
  phoneError: b,
  agreeTermsError: F,
  isStep3Valid: k
}) => /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col space-y-8 mt-8 max-w-[480px] mx-auto", children: [
  /* @__PURE__ */ m.jsx("h2", { className: "text-2xl font-bold text-center", children: "Your contact details" }),
  /* @__PURE__ */ m.jsx("p", { className: "text-center text-muted-foreground", children: "Your Free Quote is almost there. No strings attached ;)" }),
  /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
    /* @__PURE__ */ m.jsx(yn, { placeholder: "Event name (optional)" }),
    /* @__PURE__ */ m.jsx(yn, { placeholder: "Team name (optional)" })
  ] }),
  /* @__PURE__ */ m.jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ m.jsxs("h3", { className: "text-lg", children: [
      "Contact Details ",
      /* @__PURE__ */ m.jsx("span", { className: "text-sm text-red-400", children: "(required)" })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-1 gap-4 mt-4", children: [
      /* @__PURE__ */ m.jsx(
        yn,
        {
          placeholder: "Company name",
          className: y ? "border-red-500" : "",
          value: e,
          onChange: (_) => n(_.target.value)
        }
      ),
      y && /* @__PURE__ */ m.jsx("p", { className: "text-red-500 text-sm mt-1", children: y }),
      /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ m.jsx(yn, { placeholder: "First name", className: x ? "border-red-500" : "", value: r, onChange: (_) => i(_.target.value) }),
        /* @__PURE__ */ m.jsx(yn, { placeholder: "Last name", className: C ? "border-red-500" : "", value: l, onChange: (_) => s(_.target.value) })
      ] }),
      /* @__PURE__ */ m.jsx(yn, { placeholder: "Email (company email preferred)", className: E ? "border-red-500" : "", value: c, onChange: (_) => d(_.target.value) }),
      /* @__PURE__ */ m.jsx(yn, { placeholder: "Phone", className: b ? "border-red-500" : "", value: p, onChange: (_) => v(_.target.value) })
    ] })
  ] }),
  /* @__PURE__ */ m.jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ m.jsxs("label", { className: "inline-flex items-center", htmlFor: "agree-terms", children: [
      /* @__PURE__ */ m.jsx(
        rw,
        {
          id: "agree-terms",
          className: F ? "border-red-500" : "",
          checked: g,
          onCheckedChange: () => D(!g)
        }
      ),
      /* @__PURE__ */ m.jsx("span", { className: "ml-2 text-muted-foreground text-sm", children: "I agree to the terms & conditions and EU data processing" })
    ] }),
    F && /* @__PURE__ */ m.jsx("p", { className: "text-red-500 text-sm mt-1", children: F })
  ] }),
  /* @__PURE__ */ m.jsx("p", { className: "text-muted-foreground text-sm", children: "We will prepare a proposal for your event without any commitment. You will gain access to a personalised portal where you can manage your proposal online." }),
  /* @__PURE__ */ m.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ m.jsx(qe, { className: "w-full", disabled: !k(), children: "Request Proposal" }) })
] });
function _j() {
  var nt;
  const [e, n] = w.useState(""), [r, i] = w.useState((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 1)), [l, s] = w.useState(""), [c, d] = w.useState("09:00"), [p, v] = w.useState(""), [g, D] = w.useState(!1), [y, x] = w.useState("Boardroom"), [C, E] = w.useState(""), [b, F] = w.useState([]), [k, _] = w.useState([]), [P, O] = w.useState(""), [B, W] = w.useState(""), [U, $] = w.useState(""), [H, ne] = w.useState(""), [Y, te] = w.useState(""), [re, ae] = w.useState(""), [le, z] = w.useState(!1), [R, X] = w.useState([]), [q, A] = w.useState([]), [V, ye] = w.useState([]), [pe, xe] = w.useState(0), [De, ee] = w.useState(1), [ue, Ce] = w.useState(null), [Z, Ne] = w.useState(null), [je, tt] = w.useState(null), [dt, wt] = w.useState(null), [zt, $t] = w.useState(null), [qt, Jt] = w.useState(null), [bn, Fn] = w.useState(null), [eo, un] = w.useState(null), [Io, to] = w.useState(null), [Bo, Zt] = w.useState(null);
  w.useEffect(() => {
    X($n), A(hr);
  }, []), w.useEffect(() => {
    let he = 0;
    C && V.length > 0 && V.forEach((Ye, at) => {
      const He = kn.find((vt) => vt.venue_id === C && vt.package_id === Ye);
      He && He.price && (he += He.price), b.map((vt) => Pt.find((Hn) => Hn.id === vt)).forEach((vt) => {
        he += vt.price;
      }), k.forEach((vt) => {
        const Hn = vr.find((Wo) => Wo.id === vt.id);
        he += Hn.price * vt.quantity;
      });
    }), xe(he.toFixed(2));
  }, [C, g, l, b, k]), w.useEffect(() => {
    Le();
  }, [De]);
  const $n = [
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
  ], hr = [
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
  ], kn = [
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
  ], Pt = [
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
  ], vr = [
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
  ], gr = () => e > 0 && r !== "" && c !== "" && V.length > 0 && C !== "" && (g ? l !== "" : !0), yr = () => ((!e || e <= 0) && Ce("Please select the number of guests"), r || Ne("Please select a date"), c || tt("Please select a time"), l && l < r && wt("End date must be after start date"), !0), me = () => B !== "" && U !== "" && H !== "" && Y !== "" && re !== "" && le, Se = () => (B || $t("Please enter your company name"), U || Jt("Please enter your first name"), H || Fn("Please enter your last name"), Y || un("Please enter your email"), re || to("Please enter your phone number"), le || Zt("Please agree to the terms and conditions"), !0), Le = () => {
    document.getElementById("modal-content").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };
  async function be() {
    return (await (await fetch(
      "https://betadev.comidor.com/Services?unit=APIAccessTokens&s_tokenAppId=jIcwr4eot11VMSKdVCz3&s_tokenTenantId=creativepointdev&s_tokenSecret=OLUJdj7nJoho080JomNd&contextCode=Default&client=creativepointdev&dataAction=s_getAccessToken&responseFormat=json&responseCodes=true"
    )).text()).substring(43, 244);
  }
  const We = async () => {
    var he;
    if (yr() && Se() && gr() && me()) {
      console.log("Submit data to Comidor");
      const Ye = "https://betadev.comidor.com/Services", at = new URLSearchParams(window.location.search);
      console.log("queryParams: ", at);
      let He = new Date(r);
      g && (He = new Date(l));
      const cn = (he = R.find((Vn) => Vn.id === C)) == null ? void 0 : he.name.split(" ")[0], vt = {
        u_contactFirstName: U,
        u_contactLastName: H,
        u_email: Y,
        u_resStartDate: new Date(r).toISOString().slice(0, 10).replace(/-/g, ""),
        u_resEndDate: new Date(He).toISOString().slice(0, 10).replace(/-/g, ""),
        u_resStartTime: c,
        u_resEndTime: p,
        u_duration: V.map((Vn) => hr.find((Mi) => Mi.id === Vn).duration_hours),
        u_teamSize: e,
        u_venueName: cn,
        u_tableLayout: y,
        u_hasHardware: b.includes(1) ? 1 : 0,
        u_hasFlipcharts: b.includes(2) ? 1 : 0,
        u_hasUnlimitedCoffee: k.includes(1) ? 1 : 0,
        u_hasBreakfast: k.includes(3) ? 1 : 0,
        u_hasLunch: k.includes(4) ? 1 : 0,
        u_hasSnacks: k.includes(2) ? 1 : 0,
        u_hasDinner: k.includes(5) ? 1 : 0,
        client: "creativepointdev",
        unit: "APP_000134",
        dataAction: "u_createReservation",
        u_customQuote: 1,
        u_preventEmailCommunications: 1,
        responseFormat: "json"
      }, Hn = await be(), Wo = new URLSearchParams(vt), no = Ye + "?" + Wo.toString();
      console.log("full_url: ", no), console.log("authToken: ", Hn);
      const Ri = at.get("adsID"), ro = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, ""), Gs = V.map((Vn) => hr.find((Mi) => Mi.id === Vn).duration_hours).join(", "), oo = pe, zo = cn, $o = {
        "First Name": U,
        "Last Name": H,
        Company: B,
        "Team Size": e,
        Email: Y,
        Phone: re,
        "Quote Date": ro,
        "Event Start Date": new Date(r).toISOString().slice(0, 10),
        "Event End Date": new Date(He).toISOString().slice(0, 10),
        Duration: Gs,
        "Total Value": oo,
        Venue: zo,
        adsID: Ri
      };
      await $e($o);
    }
  }, $e = async (he) => {
    console.log("https://google-sheets-api-wrapper.vercel.app/");
    const Ye = [
      he["First Name"],
      he["Last Name"],
      he.Company,
      he["Team Size"],
      he.Email,
      he.Phone,
      he["Quote Date"],
      he["Event Start Date"],
      he["Event End Date"],
      he.Duration,
      he["Total Value"],
      he.Venue,
      he.adsID
    ];
    try {
      const at = await fetch("http://localhost:5001/append-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: Ye })
        // Stringify the entire body
      }), He = await at.json();
      at.ok ? console.log("Data successfully submitted:", He) : console.error("Error appending data:", He);
    } catch (at) {
      console.error("Failed to submit data:", at);
    }
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "grid grid-rows-[1fr_fit]  overflow-hidden lg:flex lg:flex-row justify-center lg:space-x-8 lg:overflow-visible", children: [
    /* @__PURE__ */ m.jsxs("div", { id: "modal-content", className: "min-w-[90vw] w-full lg:min-w-fit lg:w-3/4 p-2 md:p-8 mt-8 overflow-scroll", children: [
      De === 1 && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx("h2", { className: "text-2xl font-bold text-center", children: "Let's get you started" }),
        /* @__PURE__ */ m.jsx("p", { className: "text-center text-muted-foreground mt-6", children: "When and with how many people will you meet?" }),
        /* @__PURE__ */ m.jsx(
          Dj,
          {
            guests: e,
            setGuests: n,
            guestsError: ue,
            setGuestsError: Ce,
            date: r,
            setDate: i,
            dateError: Z,
            endDate: l,
            setEndDate: s,
            endDateError: dt,
            time: c,
            setTime: d,
            timeError: je,
            endTime: p,
            setEndTime: v,
            isMultiDay: g,
            setMultiDay: D,
            tableSetup: y,
            setTableSetup: x,
            venue: C,
            setVenue: E,
            eventPackages: q,
            selectedEventPackages: V,
            setSelectedEventPackages: ye,
            venues: R
          }
        ),
        /* @__PURE__ */ m.jsx("div", { className: "mt-12 space-y-8 flex flex-col items-center", children: /* @__PURE__ */ m.jsxs(qe, { className: "mt-8", onClick: () => yr() && gr() && ee(2), children: [
          "Add Event Options ",
          /* @__PURE__ */ m.jsx(Fa, { className: "ml-2 h-5 w-5 text-white" })
        ] }) })
      ] }),
      De === 2 && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx(
          Cj,
          {
            guests: e,
            facilitiesSelected: b,
            setFacilitiesSelected: F,
            cateringSelected: k,
            setCateringSelected: _,
            comments: P,
            setComments: O,
            catering: vr,
            facilities: Pt
          }
        ),
        /* @__PURE__ */ m.jsxs("div", { className: "hidden md:flex relative mt-12 space-x-4 flex justify-end items-center", children: [
          /* @__PURE__ */ m.jsx("span", { className: "absolute top-1/2 left-0 text-muted-foreground", children: "Step 2 of 3" }),
          /* @__PURE__ */ m.jsx(qe, { variant: "outline", className: "mt-8", onClick: () => ee(1), children: /* @__PURE__ */ m.jsx(hi, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
          /* @__PURE__ */ m.jsxs(qe, { className: "mt-8", onClick: () => ee(3), children: [
            "Next ",
            /* @__PURE__ */ m.jsx(Fa, { className: "ml-2 h-5 w-5 text-white" })
          ] })
        ] })
      ] }),
      De === 3 && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx(
          Nj,
          {
            company: B,
            setCompany: W,
            firstName: U,
            setFirstName: $,
            lastName: H,
            setLastName: ne,
            email: Y,
            setEmail: te,
            phone: re,
            setPhone: ae,
            agreeTerms: le,
            setAgreeTerms: z,
            companyError: zt,
            firstNameError: qt,
            lastNameError: bn,
            emailError: eo,
            phoneError: Io,
            agreeTermsError: Bo,
            isStep3Valid: me
          }
        ),
        /* @__PURE__ */ m.jsxs("div", { className: "hidden md:flex mt-12 flex justify-between items-center", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-muted-foreground", children: "Step 3 of 3" }),
          /* @__PURE__ */ m.jsxs("div", { className: "flex space-x-4 items-center", children: [
            /* @__PURE__ */ m.jsx(qe, { variant: "outline", onClick: () => ee(2), children: /* @__PURE__ */ m.jsx(hi, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
            /* @__PURE__ */ m.jsxs(qe, { onClick: () => me() && We(), children: [
              "Request Proposal ",
              /* @__PURE__ */ m.jsx(Fa, { className: "ml-2 h-5 w-5 text-white" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ m.jsx(
      bk,
      {
        date: r,
        guests: e,
        time: c,
        venue: (nt = R.find((he) => he.id === C)) == null ? void 0 : nt.name,
        tableSetup: y,
        isMultiDay: g,
        endDate: l,
        currentStep: De,
        setCurrentStep: ee,
        isStep1Valid: gr,
        checkStep1Errors: yr,
        isStep3Valid: me,
        checkStep3Errors: Se,
        selectedEventPackages: V.map((he) => {
          var Ye, at;
          return {
            ...he,
            duration: (Ye = q.find((He) => He.id === he)) == null ? void 0 : Ye.duration_hours,
            price: (at = kn.find((He) => He.venue_id === C && He.package_id === he)) == null ? void 0 : at.price
          };
        }),
        facilitiesSelected: Pt.filter((he) => b.includes(he.id)),
        cateringSelected: k.map((he) => ({ ...he, name: vr.find((Ye) => Ye.id === he.id).title, price: vr.find((Ye) => Ye.id === he.id).price })),
        totalExclVat: pe
      }
    )
  ] });
}
const Pj = Tg, jj = Rg, Aj = Mg, ow = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  Ud,
  {
    ref: r,
    className: ke(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n
  }
));
ow.displayName = Ud.displayName;
const iw = w.forwardRef(({ className: e, children: n, ...r }, i) => /* @__PURE__ */ m.jsxs(Aj, { children: [
  /* @__PURE__ */ m.jsx(ow, {}),
  /* @__PURE__ */ m.jsx(
    Yd,
    {
      ref: i,
      className: ke(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...r,
      children: n
    }
  )
] }));
iw.displayName = Yd.displayName;
const Oj = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  Kd,
  {
    ref: r,
    className: ke("text-lg font-semibold leading-none tracking-tight", e),
    ...n
  }
));
Oj.displayName = Kd.displayName;
const Tj = w.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ m.jsx(
  Qd,
  {
    ref: r,
    className: ke("text-sm text-muted-foreground", e),
    ...n
  }
));
Tj.displayName = Qd.displayName;
function Rj() {
  const [e, n] = w.useState(!1);
  return /* @__PURE__ */ m.jsx("div", { className: "fixed right-10 bottom-10", children: /* @__PURE__ */ m.jsxs(Pj, { children: [
    /* @__PURE__ */ m.jsx(jj, { asChild: !0, children: /* @__PURE__ */ m.jsx(qe, { onClick: () => n(!0), children: "Book Now" }) }),
    /* @__PURE__ */ m.jsx(iw, { className: "h-[95%] md:h-[95vh] max-w-[95vw] p-0 md:overflow-scroll", children: /* @__PURE__ */ m.jsx(_j, {}) })
  ] }) });
}
window.MeetingRoomBookingWidget = (e) => {
  od.createRoot(
    document.getElementById(e)
  ).render(
    /* @__PURE__ */ m.jsx(Rj, {})
  );
};
