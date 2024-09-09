var b1 = Object.defineProperty;
var F1 = (e, t, n) => t in e ? b1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Aa = (e, t, n) => F1(e, typeof t != "symbol" ? t + "" : t, n);
function k1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function $h(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wh = { exports: {} }, ss = {}, zh = { exports: {} }, Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var da = Symbol.for("react.element"), N1 = Symbol.for("react.portal"), P1 = Symbol.for("react.fragment"), _1 = Symbol.for("react.strict_mode"), j1 = Symbol.for("react.profiler"), A1 = Symbol.for("react.provider"), O1 = Symbol.for("react.context"), T1 = Symbol.for("react.forward_ref"), R1 = Symbol.for("react.suspense"), M1 = Symbol.for("react.memo"), L1 = Symbol.for("react.lazy"), gp = Symbol.iterator;
function I1(e) {
  return e === null || typeof e != "object" ? null : (e = gp && e[gp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Hh = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Vh = Object.assign, Uh = {};
function Jo(e, t, n) {
  this.props = e, this.context = t, this.refs = Uh, this.updater = n || Hh;
}
Jo.prototype.isReactComponent = {};
Jo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yh() {
}
Yh.prototype = Jo.prototype;
function gd(e, t, n) {
  this.props = e, this.context = t, this.refs = Uh, this.updater = n || Hh;
}
var yd = gd.prototype = new Yh();
yd.constructor = gd;
Vh(yd, Jo.prototype);
yd.isPureReactComponent = !0;
var yp = Array.isArray, Kh = Object.prototype.hasOwnProperty, Dd = { current: null }, Qh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xh(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) Kh.call(t, r) && !Qh.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: da, type: e, key: i, ref: a, props: o, _owner: Dd.current };
}
function B1(e, t) {
  return { $$typeof: da, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function wd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === da;
}
function $1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Dp = /\/+/g;
function eu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? $1("" + e.key) : t.toString(36);
}
function al(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (i) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case da:
        case N1:
          a = !0;
      }
  }
  if (a) return a = e, o = o(a), e = r === "" ? "." + eu(a, 0) : r, yp(o) ? (n = "", e != null && (n = e.replace(Dp, "$&/") + "/"), al(o, t, n, "", function(u) {
    return u;
  })) : o != null && (wd(o) && (o = B1(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Dp, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", yp(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var s = r + eu(i, l);
    a += al(i, t, n, s, o);
  }
  else if (s = I1(e), typeof s == "function") for (e = s.call(e), l = 0; !(i = e.next()).done; ) i = i.value, s = r + eu(i, l++), a += al(i, t, n, s, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Oa(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return al(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function W1(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var rt = { current: null }, ll = { transition: null }, z1 = { ReactCurrentDispatcher: rt, ReactCurrentBatchConfig: ll, ReactCurrentOwner: Dd };
function Gh() {
  throw Error("act(...) is not supported in production builds of React.");
}
Z.Children = { map: Oa, forEach: function(e, t, n) {
  Oa(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Oa(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Oa(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!wd(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Z.Component = Jo;
Z.Fragment = P1;
Z.Profiler = j1;
Z.PureComponent = gd;
Z.StrictMode = _1;
Z.Suspense = R1;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z1;
Z.act = Gh;
Z.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Vh({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Dd.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (s in t) Kh.call(t, s) && !Qh.hasOwnProperty(s) && (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: da, type: e.type, key: o, ref: i, props: r, _owner: a };
};
Z.createContext = function(e) {
  return e = { $$typeof: O1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: A1, _context: e }, e.Consumer = e;
};
Z.createElement = Xh;
Z.createFactory = function(e) {
  var t = Xh.bind(null, e);
  return t.type = e, t;
};
Z.createRef = function() {
  return { current: null };
};
Z.forwardRef = function(e) {
  return { $$typeof: T1, render: e };
};
Z.isValidElement = wd;
Z.lazy = function(e) {
  return { $$typeof: L1, _payload: { _status: -1, _result: e }, _init: W1 };
};
Z.memo = function(e, t) {
  return { $$typeof: M1, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function(e) {
  var t = ll.transition;
  ll.transition = {};
  try {
    e();
  } finally {
    ll.transition = t;
  }
};
Z.unstable_act = Gh;
Z.useCallback = function(e, t) {
  return rt.current.useCallback(e, t);
};
Z.useContext = function(e) {
  return rt.current.useContext(e);
};
Z.useDebugValue = function() {
};
Z.useDeferredValue = function(e) {
  return rt.current.useDeferredValue(e);
};
Z.useEffect = function(e, t) {
  return rt.current.useEffect(e, t);
};
Z.useId = function() {
  return rt.current.useId();
};
Z.useImperativeHandle = function(e, t, n) {
  return rt.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function(e, t) {
  return rt.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function(e, t) {
  return rt.current.useLayoutEffect(e, t);
};
Z.useMemo = function(e, t) {
  return rt.current.useMemo(e, t);
};
Z.useReducer = function(e, t, n) {
  return rt.current.useReducer(e, t, n);
};
Z.useRef = function(e) {
  return rt.current.useRef(e);
};
Z.useState = function(e) {
  return rt.current.useState(e);
};
Z.useSyncExternalStore = function(e, t, n) {
  return rt.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function() {
  return rt.current.useTransition();
};
Z.version = "18.3.1";
zh.exports = Z;
var D = zh.exports;
const M = /* @__PURE__ */ $h(D), H1 = /* @__PURE__ */ k1({
  __proto__: null,
  default: M
}, [D]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V1 = D, U1 = Symbol.for("react.element"), Y1 = Symbol.for("react.fragment"), K1 = Object.prototype.hasOwnProperty, Q1 = V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, X1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function qh(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) K1.call(t, r) && !X1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: U1, type: e, key: i, ref: a, props: o, _owner: Q1.current };
}
ss.Fragment = Y1;
ss.jsx = qh;
ss.jsxs = qh;
Wh.exports = ss;
var c = Wh.exports, bl = {}, Jh = { exports: {} }, bt = {}, Zh = { exports: {} }, ev = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(F, O) {
    var B = F.length;
    F.push(O);
    e: for (; 0 < B; ) {
      var V = B - 1 >>> 1, te = F[V];
      if (0 < o(te, O)) F[V] = O, F[B] = te, B = V;
      else break e;
    }
  }
  function n(F) {
    return F.length === 0 ? null : F[0];
  }
  function r(F) {
    if (F.length === 0) return null;
    var O = F[0], B = F.pop();
    if (B !== O) {
      F[0] = B;
      e: for (var V = 0, te = F.length, Ye = te >>> 1; V < Ye; ) {
        var me = 2 * (V + 1) - 1, Me = F[me], he = me + 1, W = F[he];
        if (0 > o(Me, B)) he < te && 0 > o(W, Me) ? (F[V] = W, F[he] = B, V = he) : (F[V] = Me, F[me] = B, V = me);
        else if (he < te && 0 > o(W, B)) F[V] = W, F[he] = B, V = he;
        else break e;
      }
    }
    return O;
  }
  function o(F, O) {
    var B = F.sortIndex - O.sortIndex;
    return B !== 0 ? B : F.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var a = Date, l = a.now();
    e.unstable_now = function() {
      return a.now() - l;
    };
  }
  var s = [], u = [], d = 1, p = null, f = 3, m = !1, h = !1, g = !1, x = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(F) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= F) r(u), O.sortIndex = O.expirationTime, t(s, O);
      else break;
      O = n(u);
    }
  }
  function C(F) {
    if (g = !1, w(F), !h) if (n(s) !== null) h = !0, H(E);
    else {
      var O = n(u);
      O !== null && _(C, O.startTime - F);
    }
  }
  function E(F, O) {
    h = !1, g && (g = !1, y(k), k = -1), m = !0;
    var B = f;
    try {
      for (w(O), p = n(s); p !== null && (!(p.expirationTime > O) || F && !T()); ) {
        var V = p.callback;
        if (typeof V == "function") {
          p.callback = null, f = p.priorityLevel;
          var te = V(p.expirationTime <= O);
          O = e.unstable_now(), typeof te == "function" ? p.callback = te : p === n(s) && r(s), w(O);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var Ye = !0;
      else {
        var me = n(u);
        me !== null && _(C, me.startTime - O), Ye = !1;
      }
      return Ye;
    } finally {
      p = null, f = B, m = !1;
    }
  }
  var S = !1, b = null, k = -1, P = 5, N = -1;
  function T() {
    return !(e.unstable_now() - N < P);
  }
  function j() {
    if (b !== null) {
      var F = e.unstable_now();
      N = F;
      var O = !0;
      try {
        O = b(!0, F);
      } finally {
        O ? L() : (S = !1, b = null);
      }
    } else S = !1;
  }
  var L;
  if (typeof v == "function") L = function() {
    v(j);
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), z = I.port2;
    I.port1.onmessage = j, L = function() {
      z.postMessage(null);
    };
  } else L = function() {
    x(j, 0);
  };
  function H(F) {
    b = F, S || (S = !0, L());
  }
  function _(F, O) {
    k = x(function() {
      F(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(F) {
    F.callback = null;
  }, e.unstable_continueExecution = function() {
    h || m || (h = !0, H(E));
  }, e.unstable_forceFrameRate = function(F) {
    0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < F ? Math.floor(1e3 / F) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(F) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = f;
    }
    var B = f;
    f = O;
    try {
      return F();
    } finally {
      f = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(F, O) {
    switch (F) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        F = 3;
    }
    var B = f;
    f = F;
    try {
      return O();
    } finally {
      f = B;
    }
  }, e.unstable_scheduleCallback = function(F, O, B) {
    var V = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? V + B : V) : B = V, F) {
      case 1:
        var te = -1;
        break;
      case 2:
        te = 250;
        break;
      case 5:
        te = 1073741823;
        break;
      case 4:
        te = 1e4;
        break;
      default:
        te = 5e3;
    }
    return te = B + te, F = { id: d++, callback: O, priorityLevel: F, startTime: B, expirationTime: te, sortIndex: -1 }, B > V ? (F.sortIndex = B, t(u, F), n(s) === null && F === n(u) && (g ? (y(k), k = -1) : g = !0, _(C, B - V))) : (F.sortIndex = te, t(s, F), h || m || (h = !0, H(E))), F;
  }, e.unstable_shouldYield = T, e.unstable_wrapCallback = function(F) {
    var O = f;
    return function() {
      var B = f;
      f = O;
      try {
        return F.apply(this, arguments);
      } finally {
        f = B;
      }
    };
  };
})(ev);
Zh.exports = ev;
var G1 = Zh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q1 = D, Et = G1;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var tv = /* @__PURE__ */ new Set(), Vi = {};
function Zr(e, t) {
  Io(e, t), Io(e + "Capture", t);
}
function Io(e, t) {
  for (Vi[e] = t, e = 0; e < t.length; e++) tv.add(t[e]);
}
var Cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), qu = Object.prototype.hasOwnProperty, J1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, wp = {}, xp = {};
function Z1(e) {
  return qu.call(xp, e) ? !0 : qu.call(wp, e) ? !1 : J1.test(e) ? xp[e] = !0 : (wp[e] = !0, !1);
}
function ex(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function tx(e, t, n, r) {
  if (t === null || typeof t > "u" || ex(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function ot(e, t, n, r, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var Ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ve[e] = new ot(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ve[t] = new ot(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ve[e] = new ot(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ve[e] = new ot(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ve[e] = new ot(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ve[e] = new ot(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ve[e] = new ot(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ve[e] = new ot(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ve[e] = new ot(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xd = /[\-:]([a-z])/g;
function Cd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    xd,
    Cd
  );
  Ve[t] = new ot(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(xd, Cd);
  Ve[t] = new ot(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(xd, Cd);
  Ve[t] = new ot(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ve[e] = new ot(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ve.xlinkHref = new ot("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ve[e] = new ot(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ed(e, t, n, r) {
  var o = Ve.hasOwnProperty(t) ? Ve[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (tx(t, n, o, r) && (n = null), r || o === null ? Z1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pn = q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ta = Symbol.for("react.element"), fo = Symbol.for("react.portal"), po = Symbol.for("react.fragment"), Sd = Symbol.for("react.strict_mode"), Ju = Symbol.for("react.profiler"), nv = Symbol.for("react.provider"), rv = Symbol.for("react.context"), bd = Symbol.for("react.forward_ref"), Zu = Symbol.for("react.suspense"), ec = Symbol.for("react.suspense_list"), Fd = Symbol.for("react.memo"), Xn = Symbol.for("react.lazy"), ov = Symbol.for("react.offscreen"), Cp = Symbol.iterator;
function di(e) {
  return e === null || typeof e != "object" ? null : (e = Cp && e[Cp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Fe = Object.assign, tu;
function Fi(e) {
  if (tu === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    tu = t && t[1] || "";
  }
  return `
` + tu + e;
}
var nu = !1;
function ru(e, t) {
  if (!e || nu) return "";
  nu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), a = o.length - 1, l = i.length - 1; 1 <= a && 0 <= l && o[a] !== i[l]; ) l--;
      for (; 1 <= a && 0 <= l; a--, l--) if (o[a] !== i[l]) {
        if (a !== 1 || l !== 1)
          do
            if (a--, l--, 0 > l || o[a] !== i[l]) {
              var s = `
` + o[a].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= a && 0 <= l);
        break;
      }
    }
  } finally {
    nu = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Fi(e) : "";
}
function nx(e) {
  switch (e.tag) {
    case 5:
      return Fi(e.type);
    case 16:
      return Fi("Lazy");
    case 13:
      return Fi("Suspense");
    case 19:
      return Fi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ru(e.type, !1), e;
    case 11:
      return e = ru(e.type.render, !1), e;
    case 1:
      return e = ru(e.type, !0), e;
    default:
      return "";
  }
}
function tc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case po:
      return "Fragment";
    case fo:
      return "Portal";
    case Ju:
      return "Profiler";
    case Sd:
      return "StrictMode";
    case Zu:
      return "Suspense";
    case ec:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case rv:
      return (e.displayName || "Context") + ".Consumer";
    case nv:
      return (e._context.displayName || "Context") + ".Provider";
    case bd:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Fd:
      return t = e.displayName || null, t !== null ? t : tc(e.type) || "Memo";
    case Xn:
      t = e._payload, e = e._init;
      try {
        return tc(e(t));
      } catch {
      }
  }
  return null;
}
function rx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return tc(t);
    case 8:
      return t === Sd ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function cr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function iv(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ox(e) {
  var t = iv(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(a) {
      r = "" + a, i.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Ra(e) {
  e._valueTracker || (e._valueTracker = ox(e));
}
function av(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = iv(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Fl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function nc(e, t) {
  var n = t.checked;
  return Fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ep(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = cr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function lv(e, t) {
  t = t.checked, t != null && Ed(e, "checked", t, !1);
}
function rc(e, t) {
  lv(e, t);
  var n = cr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? oc(e, t.type, n) : t.hasOwnProperty("defaultValue") && oc(e, t.type, cr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Sp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function oc(e, t, n) {
  (t !== "number" || Fl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ki = Array.isArray;
function Po(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + cr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ic(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return Fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function bp(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (ki(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: cr(n) };
}
function sv(e, t) {
  var n = cr(t.value), r = cr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Fp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function uv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ac(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? uv(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ma, cv = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ma = Ma || document.createElement("div"), Ma.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ma.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Ui(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ai = {
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
}, ix = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ai).forEach(function(e) {
  ix.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ai[t] = Ai[e];
  });
});
function dv(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ai.hasOwnProperty(e) && Ai[e] ? ("" + t).trim() : t + "px";
}
function fv(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = dv(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var ax = Fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function lc(e, t) {
  if (t) {
    if (ax[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function sc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var uc = null;
function kd(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var cc = null, _o = null, jo = null;
function kp(e) {
  if (e = ma(e)) {
    if (typeof cc != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = ps(t), cc(e.stateNode, e.type, t));
  }
}
function pv(e) {
  _o ? jo ? jo.push(e) : jo = [e] : _o = e;
}
function mv() {
  if (_o) {
    var e = _o, t = jo;
    if (jo = _o = null, kp(e), t) for (e = 0; e < t.length; e++) kp(t[e]);
  }
}
function hv(e, t) {
  return e(t);
}
function vv() {
}
var ou = !1;
function gv(e, t, n) {
  if (ou) return e(t, n);
  ou = !0;
  try {
    return hv(e, t, n);
  } finally {
    ou = !1, (_o !== null || jo !== null) && (vv(), mv());
  }
}
function Yi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ps(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var dc = !1;
if (Cn) try {
  var fi = {};
  Object.defineProperty(fi, "passive", { get: function() {
    dc = !0;
  } }), window.addEventListener("test", fi, fi), window.removeEventListener("test", fi, fi);
} catch {
  dc = !1;
}
function lx(e, t, n, r, o, i, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Oi = !1, kl = null, Nl = !1, fc = null, sx = { onError: function(e) {
  Oi = !0, kl = e;
} };
function ux(e, t, n, r, o, i, a, l, s) {
  Oi = !1, kl = null, lx.apply(sx, arguments);
}
function cx(e, t, n, r, o, i, a, l, s) {
  if (ux.apply(this, arguments), Oi) {
    if (Oi) {
      var u = kl;
      Oi = !1, kl = null;
    } else throw Error(A(198));
    Nl || (Nl = !0, fc = u);
  }
}
function eo(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function yv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Np(e) {
  if (eo(e) !== e) throw Error(A(188));
}
function dx(e) {
  var t = e.alternate;
  if (!t) {
    if (t = eo(e), t === null) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Np(o), e;
        if (i === r) return Np(o), t;
        i = i.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          a = !0, n = o, r = i;
          break;
        }
        if (l === r) {
          a = !0, r = o, n = i;
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            a = !0, n = i, r = o;
            break;
          }
          if (l === r) {
            a = !0, r = i, n = o;
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function Dv(e) {
  return e = dx(e), e !== null ? wv(e) : null;
}
function wv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var xv = Et.unstable_scheduleCallback, Pp = Et.unstable_cancelCallback, fx = Et.unstable_shouldYield, px = Et.unstable_requestPaint, je = Et.unstable_now, mx = Et.unstable_getCurrentPriorityLevel, Nd = Et.unstable_ImmediatePriority, Cv = Et.unstable_UserBlockingPriority, Pl = Et.unstable_NormalPriority, hx = Et.unstable_LowPriority, Ev = Et.unstable_IdlePriority, us = null, rn = null;
function vx(e) {
  if (rn && typeof rn.onCommitFiberRoot == "function") try {
    rn.onCommitFiberRoot(us, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var $t = Math.clz32 ? Math.clz32 : Dx, gx = Math.log, yx = Math.LN2;
function Dx(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (gx(e) / yx | 0) | 0;
}
var La = 64, Ia = 4194304;
function Ni(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function _l(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? r = Ni(l) : (i &= a, i !== 0 && (r = Ni(i)));
  } else a = n & ~o, a !== 0 ? r = Ni(a) : i !== 0 && (r = Ni(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - $t(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function wx(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function xx(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - $t(i), l = 1 << a, s = o[a];
    s === -1 ? (!(l & n) || l & r) && (o[a] = wx(l, t)) : s <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function pc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Sv() {
  var e = La;
  return La <<= 1, !(La & 4194240) && (La = 64), e;
}
function iu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fa(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $t(t), e[t] = n;
}
function Cx(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - $t(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Pd(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var ue = 0;
function bv(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Fv, _d, kv, Nv, Pv, mc = !1, Ba = [], tr = null, nr = null, rr = null, Ki = /* @__PURE__ */ new Map(), Qi = /* @__PURE__ */ new Map(), qn = [], Ex = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function _p(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      tr = null;
      break;
    case "dragenter":
    case "dragleave":
      nr = null;
      break;
    case "mouseover":
    case "mouseout":
      rr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ki.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qi.delete(t.pointerId);
  }
}
function pi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = ma(t), t !== null && _d(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Sx(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return tr = pi(tr, e, t, n, r, o), !0;
    case "dragenter":
      return nr = pi(nr, e, t, n, r, o), !0;
    case "mouseover":
      return rr = pi(rr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ki.set(i, pi(Ki.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Qi.set(i, pi(Qi.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function _v(e) {
  var t = Tr(e.target);
  if (t !== null) {
    var n = eo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = yv(n), t !== null) {
          e.blockedOn = t, Pv(e.priority, function() {
            kv(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function sl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      uc = r, n.target.dispatchEvent(r), uc = null;
    } else return t = ma(n), t !== null && _d(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function jp(e, t, n) {
  sl(e) && n.delete(t);
}
function bx() {
  mc = !1, tr !== null && sl(tr) && (tr = null), nr !== null && sl(nr) && (nr = null), rr !== null && sl(rr) && (rr = null), Ki.forEach(jp), Qi.forEach(jp);
}
function mi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, mc || (mc = !0, Et.unstable_scheduleCallback(Et.unstable_NormalPriority, bx)));
}
function Xi(e) {
  function t(o) {
    return mi(o, e);
  }
  if (0 < Ba.length) {
    mi(Ba[0], e);
    for (var n = 1; n < Ba.length; n++) {
      var r = Ba[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (tr !== null && mi(tr, e), nr !== null && mi(nr, e), rr !== null && mi(rr, e), Ki.forEach(t), Qi.forEach(t), n = 0; n < qn.length; n++) r = qn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qn.length && (n = qn[0], n.blockedOn === null); ) _v(n), n.blockedOn === null && qn.shift();
}
var Ao = Pn.ReactCurrentBatchConfig, jl = !0;
function Fx(e, t, n, r) {
  var o = ue, i = Ao.transition;
  Ao.transition = null;
  try {
    ue = 1, jd(e, t, n, r);
  } finally {
    ue = o, Ao.transition = i;
  }
}
function kx(e, t, n, r) {
  var o = ue, i = Ao.transition;
  Ao.transition = null;
  try {
    ue = 4, jd(e, t, n, r);
  } finally {
    ue = o, Ao.transition = i;
  }
}
function jd(e, t, n, r) {
  if (jl) {
    var o = hc(e, t, n, r);
    if (o === null) hu(e, t, r, Al, n), _p(e, r);
    else if (Sx(o, e, t, n, r)) r.stopPropagation();
    else if (_p(e, r), t & 4 && -1 < Ex.indexOf(e)) {
      for (; o !== null; ) {
        var i = ma(o);
        if (i !== null && Fv(i), i = hc(e, t, n, r), i === null && hu(e, t, r, Al, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else hu(e, t, r, null, n);
  }
}
var Al = null;
function hc(e, t, n, r) {
  if (Al = null, e = kd(r), e = Tr(e), e !== null) if (t = eo(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = yv(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Al = e, null;
}
function jv(e) {
  switch (e) {
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
      switch (mx()) {
        case Nd:
          return 1;
        case Cv:
          return 4;
        case Pl:
        case hx:
          return 16;
        case Ev:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zn = null, Ad = null, ul = null;
function Av() {
  if (ul) return ul;
  var e, t = Ad, n = t.length, r, o = "value" in Zn ? Zn.value : Zn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++) ;
  return ul = o.slice(e, 1 < r ? 1 - r : void 0);
}
function cl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function $a() {
  return !0;
}
function Ap() {
  return !1;
}
function Ft(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? $a : Ap, this.isPropagationStopped = Ap, this;
  }
  return Fe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = $a);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = $a);
  }, persist: function() {
  }, isPersistent: $a }), t;
}
var Zo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Od = Ft(Zo), pa = Fe({}, Zo, { view: 0, detail: 0 }), Nx = Ft(pa), au, lu, hi, cs = Fe({}, pa, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Td, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== hi && (hi && e.type === "mousemove" ? (au = e.screenX - hi.screenX, lu = e.screenY - hi.screenY) : lu = au = 0, hi = e), au);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : lu;
} }), Op = Ft(cs), Px = Fe({}, cs, { dataTransfer: 0 }), _x = Ft(Px), jx = Fe({}, pa, { relatedTarget: 0 }), su = Ft(jx), Ax = Fe({}, Zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ox = Ft(Ax), Tx = Fe({}, Zo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Rx = Ft(Tx), Mx = Fe({}, Zo, { data: 0 }), Tp = Ft(Mx), Lx = {
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
}, Ix = {
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
}, Bx = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function $x(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Bx[e]) ? !!t[e] : !1;
}
function Td() {
  return $x;
}
var Wx = Fe({}, pa, { key: function(e) {
  if (e.key) {
    var t = Lx[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = cl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ix[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Td, charCode: function(e) {
  return e.type === "keypress" ? cl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? cl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), zx = Ft(Wx), Hx = Fe({}, cs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rp = Ft(Hx), Vx = Fe({}, pa, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Td }), Ux = Ft(Vx), Yx = Fe({}, Zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kx = Ft(Yx), Qx = Fe({}, cs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Xx = Ft(Qx), Gx = [9, 13, 27, 32], Rd = Cn && "CompositionEvent" in window, Ti = null;
Cn && "documentMode" in document && (Ti = document.documentMode);
var qx = Cn && "TextEvent" in window && !Ti, Ov = Cn && (!Rd || Ti && 8 < Ti && 11 >= Ti), Mp = " ", Lp = !1;
function Tv(e, t) {
  switch (e) {
    case "keyup":
      return Gx.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Rv(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var mo = !1;
function Jx(e, t) {
  switch (e) {
    case "compositionend":
      return Rv(t);
    case "keypress":
      return t.which !== 32 ? null : (Lp = !0, Mp);
    case "textInput":
      return e = t.data, e === Mp && Lp ? null : e;
    default:
      return null;
  }
}
function Zx(e, t) {
  if (mo) return e === "compositionend" || !Rd && Tv(e, t) ? (e = Av(), ul = Ad = Zn = null, mo = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ov && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var eC = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ip(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!eC[e.type] : t === "textarea";
}
function Mv(e, t, n, r) {
  pv(r), t = Ol(t, "onChange"), 0 < t.length && (n = new Od("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ri = null, Gi = null;
function tC(e) {
  Kv(e, 0);
}
function ds(e) {
  var t = go(e);
  if (av(t)) return e;
}
function nC(e, t) {
  if (e === "change") return t;
}
var Lv = !1;
if (Cn) {
  var uu;
  if (Cn) {
    var cu = "oninput" in document;
    if (!cu) {
      var Bp = document.createElement("div");
      Bp.setAttribute("oninput", "return;"), cu = typeof Bp.oninput == "function";
    }
    uu = cu;
  } else uu = !1;
  Lv = uu && (!document.documentMode || 9 < document.documentMode);
}
function $p() {
  Ri && (Ri.detachEvent("onpropertychange", Iv), Gi = Ri = null);
}
function Iv(e) {
  if (e.propertyName === "value" && ds(Gi)) {
    var t = [];
    Mv(t, Gi, e, kd(e)), gv(tC, t);
  }
}
function rC(e, t, n) {
  e === "focusin" ? ($p(), Ri = t, Gi = n, Ri.attachEvent("onpropertychange", Iv)) : e === "focusout" && $p();
}
function oC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ds(Gi);
}
function iC(e, t) {
  if (e === "click") return ds(t);
}
function aC(e, t) {
  if (e === "input" || e === "change") return ds(t);
}
function lC(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var zt = typeof Object.is == "function" ? Object.is : lC;
function qi(e, t) {
  if (zt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!qu.call(t, o) || !zt(e[o], t[o])) return !1;
  }
  return !0;
}
function Wp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zp(e, t) {
  var n = Wp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Wp(n);
  }
}
function Bv(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function $v() {
  for (var e = window, t = Fl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fl(e.document);
  }
  return t;
}
function Md(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function sC(e) {
  var t = $v(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Bv(n.ownerDocument.documentElement, n)) {
    if (r !== null && Md(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = zp(n, i);
        var a = zp(
          n,
          r
        );
        o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var uC = Cn && "documentMode" in document && 11 >= document.documentMode, ho = null, vc = null, Mi = null, gc = !1;
function Hp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  gc || ho == null || ho !== Fl(r) || (r = ho, "selectionStart" in r && Md(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Mi && qi(Mi, r) || (Mi = r, r = Ol(vc, "onSelect"), 0 < r.length && (t = new Od("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ho)));
}
function Wa(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var vo = { animationend: Wa("Animation", "AnimationEnd"), animationiteration: Wa("Animation", "AnimationIteration"), animationstart: Wa("Animation", "AnimationStart"), transitionend: Wa("Transition", "TransitionEnd") }, du = {}, Wv = {};
Cn && (Wv = document.createElement("div").style, "AnimationEvent" in window || (delete vo.animationend.animation, delete vo.animationiteration.animation, delete vo.animationstart.animation), "TransitionEvent" in window || delete vo.transitionend.transition);
function fs(e) {
  if (du[e]) return du[e];
  if (!vo[e]) return e;
  var t = vo[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wv) return du[e] = t[n];
  return e;
}
var zv = fs("animationend"), Hv = fs("animationiteration"), Vv = fs("animationstart"), Uv = fs("transitionend"), Yv = /* @__PURE__ */ new Map(), Vp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gr(e, t) {
  Yv.set(e, t), Zr(t, [e]);
}
for (var fu = 0; fu < Vp.length; fu++) {
  var pu = Vp[fu], cC = pu.toLowerCase(), dC = pu[0].toUpperCase() + pu.slice(1);
  gr(cC, "on" + dC);
}
gr(zv, "onAnimationEnd");
gr(Hv, "onAnimationIteration");
gr(Vv, "onAnimationStart");
gr("dblclick", "onDoubleClick");
gr("focusin", "onFocus");
gr("focusout", "onBlur");
gr(Uv, "onTransitionEnd");
Io("onMouseEnter", ["mouseout", "mouseover"]);
Io("onMouseLeave", ["mouseout", "mouseover"]);
Io("onPointerEnter", ["pointerout", "pointerover"]);
Io("onPointerLeave", ["pointerout", "pointerover"]);
Zr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Pi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fC = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));
function Up(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, cx(r, t, void 0, e), e.currentTarget = null;
}
function Kv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var l = r[a], s = l.instance, u = l.currentTarget;
        if (l = l.listener, s !== i && o.isPropagationStopped()) break e;
        Up(o, l, u), i = s;
      }
      else for (a = 0; a < r.length; a++) {
        if (l = r[a], s = l.instance, u = l.currentTarget, l = l.listener, s !== i && o.isPropagationStopped()) break e;
        Up(o, l, u), i = s;
      }
    }
  }
  if (Nl) throw e = fc, Nl = !1, fc = null, e;
}
function ge(e, t) {
  var n = t[Cc];
  n === void 0 && (n = t[Cc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Qv(t, e, 2, !1), n.add(r));
}
function mu(e, t, n) {
  var r = 0;
  t && (r |= 4), Qv(n, e, r, t);
}
var za = "_reactListening" + Math.random().toString(36).slice(2);
function Ji(e) {
  if (!e[za]) {
    e[za] = !0, tv.forEach(function(n) {
      n !== "selectionchange" && (fC.has(n) || mu(n, !1, e), mu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[za] || (t[za] = !0, mu("selectionchange", !1, t));
  }
}
function Qv(e, t, n, r) {
  switch (jv(t)) {
    case 1:
      var o = Fx;
      break;
    case 4:
      o = kx;
      break;
    default:
      o = jd;
  }
  n = o.bind(null, t, n, e), o = void 0, !dc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function hu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var a = r.tag;
    if (a === 3 || a === 4) {
      var l = r.stateNode.containerInfo;
      if (l === o || l.nodeType === 8 && l.parentNode === o) break;
      if (a === 4) for (a = r.return; a !== null; ) {
        var s = a.tag;
        if ((s === 3 || s === 4) && (s = a.stateNode.containerInfo, s === o || s.nodeType === 8 && s.parentNode === o)) return;
        a = a.return;
      }
      for (; l !== null; ) {
        if (a = Tr(l), a === null) return;
        if (s = a.tag, s === 5 || s === 6) {
          r = i = a;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  gv(function() {
    var u = i, d = kd(n), p = [];
    e: {
      var f = Yv.get(e);
      if (f !== void 0) {
        var m = Od, h = e;
        switch (e) {
          case "keypress":
            if (cl(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = zx;
            break;
          case "focusin":
            h = "focus", m = su;
            break;
          case "focusout":
            h = "blur", m = su;
            break;
          case "beforeblur":
          case "afterblur":
            m = su;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Op;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = _x;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Ux;
            break;
          case zv:
          case Hv:
          case Vv:
            m = Ox;
            break;
          case Uv:
            m = Kx;
            break;
          case "scroll":
            m = Nx;
            break;
          case "wheel":
            m = Xx;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Rx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Rp;
        }
        var g = (t & 4) !== 0, x = !g && e === "scroll", y = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var v = u, w; v !== null; ) {
          w = v;
          var C = w.stateNode;
          if (w.tag === 5 && C !== null && (w = C, y !== null && (C = Yi(v, y), C != null && g.push(Zi(v, C, w)))), x) break;
          v = v.return;
        }
        0 < g.length && (f = new m(f, h, null, n, d), p.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", f && n !== uc && (h = n.relatedTarget || n.fromElement) && (Tr(h) || h[En])) break e;
        if ((m || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window, m ? (h = n.relatedTarget || n.toElement, m = u, h = h ? Tr(h) : null, h !== null && (x = eo(h), h !== x || h.tag !== 5 && h.tag !== 6) && (h = null)) : (m = null, h = u), m !== h)) {
          if (g = Op, C = "onMouseLeave", y = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (g = Rp, C = "onPointerLeave", y = "onPointerEnter", v = "pointer"), x = m == null ? f : go(m), w = h == null ? f : go(h), f = new g(C, v + "leave", m, n, d), f.target = x, f.relatedTarget = w, C = null, Tr(d) === u && (g = new g(y, v + "enter", h, n, d), g.target = w, g.relatedTarget = x, C = g), x = C, m && h) t: {
            for (g = m, y = h, v = 0, w = g; w; w = ao(w)) v++;
            for (w = 0, C = y; C; C = ao(C)) w++;
            for (; 0 < v - w; ) g = ao(g), v--;
            for (; 0 < w - v; ) y = ao(y), w--;
            for (; v--; ) {
              if (g === y || y !== null && g === y.alternate) break t;
              g = ao(g), y = ao(y);
            }
            g = null;
          }
          else g = null;
          m !== null && Yp(p, f, m, g, !1), h !== null && x !== null && Yp(p, x, h, g, !0);
        }
      }
      e: {
        if (f = u ? go(u) : window, m = f.nodeName && f.nodeName.toLowerCase(), m === "select" || m === "input" && f.type === "file") var E = nC;
        else if (Ip(f)) if (Lv) E = aC;
        else {
          E = oC;
          var S = rC;
        }
        else (m = f.nodeName) && m.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = iC);
        if (E && (E = E(e, u))) {
          Mv(p, E, n, d);
          break e;
        }
        S && S(e, f, u), e === "focusout" && (S = f._wrapperState) && S.controlled && f.type === "number" && oc(f, "number", f.value);
      }
      switch (S = u ? go(u) : window, e) {
        case "focusin":
          (Ip(S) || S.contentEditable === "true") && (ho = S, vc = u, Mi = null);
          break;
        case "focusout":
          Mi = vc = ho = null;
          break;
        case "mousedown":
          gc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          gc = !1, Hp(p, n, d);
          break;
        case "selectionchange":
          if (uC) break;
        case "keydown":
        case "keyup":
          Hp(p, n, d);
      }
      var b;
      if (Rd) e: {
        switch (e) {
          case "compositionstart":
            var k = "onCompositionStart";
            break e;
          case "compositionend":
            k = "onCompositionEnd";
            break e;
          case "compositionupdate":
            k = "onCompositionUpdate";
            break e;
        }
        k = void 0;
      }
      else mo ? Tv(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k && (Ov && n.locale !== "ko" && (mo || k !== "onCompositionStart" ? k === "onCompositionEnd" && mo && (b = Av()) : (Zn = d, Ad = "value" in Zn ? Zn.value : Zn.textContent, mo = !0)), S = Ol(u, k), 0 < S.length && (k = new Tp(k, e, null, n, d), p.push({ event: k, listeners: S }), b ? k.data = b : (b = Rv(n), b !== null && (k.data = b)))), (b = qx ? Jx(e, n) : Zx(e, n)) && (u = Ol(u, "onBeforeInput"), 0 < u.length && (d = new Tp("onBeforeInput", "beforeinput", null, n, d), p.push({ event: d, listeners: u }), d.data = b));
    }
    Kv(p, t);
  });
}
function Zi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ol(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Yi(e, n), i != null && r.unshift(Zi(e, i, o)), i = Yi(e, t), i != null && r.push(Zi(e, i, o))), e = e.return;
  }
  return r;
}
function ao(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yp(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n, s = l.alternate, u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (s = Yi(n, i), s != null && a.unshift(Zi(n, s, l))) : o || (s = Yi(n, i), s != null && a.push(Zi(n, s, l)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var pC = /\r\n?/g, mC = /\u0000|\uFFFD/g;
function Kp(e) {
  return (typeof e == "string" ? e : "" + e).replace(pC, `
`).replace(mC, "");
}
function Ha(e, t, n) {
  if (t = Kp(t), Kp(e) !== t && n) throw Error(A(425));
}
function Tl() {
}
var yc = null, Dc = null;
function wc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var xc = typeof setTimeout == "function" ? setTimeout : void 0, hC = typeof clearTimeout == "function" ? clearTimeout : void 0, Qp = typeof Promise == "function" ? Promise : void 0, vC = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qp < "u" ? function(e) {
  return Qp.resolve(null).then(e).catch(gC);
} : xc;
function gC(e) {
  setTimeout(function() {
    throw e;
  });
}
function vu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Xi(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Xi(t);
}
function or(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Xp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ei = Math.random().toString(36).slice(2), Zt = "__reactFiber$" + ei, ea = "__reactProps$" + ei, En = "__reactContainer$" + ei, Cc = "__reactEvents$" + ei, yC = "__reactListeners$" + ei, DC = "__reactHandles$" + ei;
function Tr(e) {
  var t = e[Zt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[En] || n[Zt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Xp(e); e !== null; ) {
        if (n = e[Zt]) return n;
        e = Xp(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ma(e) {
  return e = e[Zt] || e[En], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function go(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function ps(e) {
  return e[ea] || null;
}
var Ec = [], yo = -1;
function yr(e) {
  return { current: e };
}
function we(e) {
  0 > yo || (e.current = Ec[yo], Ec[yo] = null, yo--);
}
function fe(e, t) {
  yo++, Ec[yo] = e.current, e.current = t;
}
var dr = {}, qe = yr(dr), dt = yr(!1), Hr = dr;
function Bo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function ft(e) {
  return e = e.childContextTypes, e != null;
}
function Rl() {
  we(dt), we(qe);
}
function Gp(e, t, n) {
  if (qe.current !== dr) throw Error(A(168));
  fe(qe, t), fe(dt, n);
}
function Xv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, rx(e) || "Unknown", o));
  return Fe({}, n, r);
}
function Ml(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dr, Hr = qe.current, fe(qe, e), fe(dt, dt.current), !0;
}
function qp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = Xv(e, t, Hr), r.__reactInternalMemoizedMergedChildContext = e, we(dt), we(qe), fe(qe, e)) : we(dt), fe(dt, n);
}
var yn = null, ms = !1, gu = !1;
function Gv(e) {
  yn === null ? yn = [e] : yn.push(e);
}
function wC(e) {
  ms = !0, Gv(e);
}
function Dr() {
  if (!gu && yn !== null) {
    gu = !0;
    var e = 0, t = ue;
    try {
      var n = yn;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      yn = null, ms = !1;
    } catch (o) {
      throw yn !== null && (yn = yn.slice(e + 1)), xv(Nd, Dr), o;
    } finally {
      ue = t, gu = !1;
    }
  }
  return null;
}
var Do = [], wo = 0, Ll = null, Il = 0, kt = [], Nt = 0, Vr = null, Dn = 1, wn = "";
function kr(e, t) {
  Do[wo++] = Il, Do[wo++] = Ll, Ll = e, Il = t;
}
function qv(e, t, n) {
  kt[Nt++] = Dn, kt[Nt++] = wn, kt[Nt++] = Vr, Vr = e;
  var r = Dn;
  e = wn;
  var o = 32 - $t(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - $t(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, Dn = 1 << 32 - $t(t) + o | n << o | r, wn = i + e;
  } else Dn = 1 << i | n << o | r, wn = e;
}
function Ld(e) {
  e.return !== null && (kr(e, 1), qv(e, 1, 0));
}
function Id(e) {
  for (; e === Ll; ) Ll = Do[--wo], Do[wo] = null, Il = Do[--wo], Do[wo] = null;
  for (; e === Vr; ) Vr = kt[--Nt], kt[Nt] = null, wn = kt[--Nt], kt[Nt] = null, Dn = kt[--Nt], kt[Nt] = null;
}
var wt = null, Dt = null, xe = !1, Bt = null;
function Jv(e, t) {
  var n = Pt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Jp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, wt = e, Dt = or(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, wt = e, Dt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Vr !== null ? { id: Dn, overflow: wn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Pt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, wt = e, Dt = null, !0) : !1;
    default:
      return !1;
  }
}
function Sc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bc(e) {
  if (xe) {
    var t = Dt;
    if (t) {
      var n = t;
      if (!Jp(e, t)) {
        if (Sc(e)) throw Error(A(418));
        t = or(n.nextSibling);
        var r = wt;
        t && Jp(e, t) ? Jv(r, n) : (e.flags = e.flags & -4097 | 2, xe = !1, wt = e);
      }
    } else {
      if (Sc(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, xe = !1, wt = e;
    }
  }
}
function Zp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  wt = e;
}
function Va(e) {
  if (e !== wt) return !1;
  if (!xe) return Zp(e), xe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wc(e.type, e.memoizedProps)), t && (t = Dt)) {
    if (Sc(e)) throw Zv(), Error(A(418));
    for (; t; ) Jv(e, t), t = or(t.nextSibling);
  }
  if (Zp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Dt = or(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Dt = null;
    }
  } else Dt = wt ? or(e.stateNode.nextSibling) : null;
  return !0;
}
function Zv() {
  for (var e = Dt; e; ) e = or(e.nextSibling);
}
function $o() {
  Dt = wt = null, xe = !1;
}
function Bd(e) {
  Bt === null ? Bt = [e] : Bt.push(e);
}
var xC = Pn.ReactCurrentBatchConfig;
function vi(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var l = o.refs;
        a === null ? delete l[i] : l[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Ua(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function em(e) {
  var t = e._init;
  return t(e._payload);
}
function eg(e) {
  function t(y, v) {
    if (e) {
      var w = y.deletions;
      w === null ? (y.deletions = [v], y.flags |= 16) : w.push(v);
    }
  }
  function n(y, v) {
    if (!e) return null;
    for (; v !== null; ) t(y, v), v = v.sibling;
    return null;
  }
  function r(y, v) {
    for (y = /* @__PURE__ */ new Map(); v !== null; ) v.key !== null ? y.set(v.key, v) : y.set(v.index, v), v = v.sibling;
    return y;
  }
  function o(y, v) {
    return y = sr(y, v), y.index = 0, y.sibling = null, y;
  }
  function i(y, v, w) {
    return y.index = w, e ? (w = y.alternate, w !== null ? (w = w.index, w < v ? (y.flags |= 2, v) : w) : (y.flags |= 2, v)) : (y.flags |= 1048576, v);
  }
  function a(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function l(y, v, w, C) {
    return v === null || v.tag !== 6 ? (v = Su(w, y.mode, C), v.return = y, v) : (v = o(v, w), v.return = y, v);
  }
  function s(y, v, w, C) {
    var E = w.type;
    return E === po ? d(y, v, w.props.children, C, w.key) : v !== null && (v.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Xn && em(E) === v.type) ? (C = o(v, w.props), C.ref = vi(y, v, w), C.return = y, C) : (C = gl(w.type, w.key, w.props, null, y.mode, C), C.ref = vi(y, v, w), C.return = y, C);
  }
  function u(y, v, w, C) {
    return v === null || v.tag !== 4 || v.stateNode.containerInfo !== w.containerInfo || v.stateNode.implementation !== w.implementation ? (v = bu(w, y.mode, C), v.return = y, v) : (v = o(v, w.children || []), v.return = y, v);
  }
  function d(y, v, w, C, E) {
    return v === null || v.tag !== 7 ? (v = Ir(w, y.mode, C, E), v.return = y, v) : (v = o(v, w), v.return = y, v);
  }
  function p(y, v, w) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return v = Su("" + v, y.mode, w), v.return = y, v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ta:
          return w = gl(v.type, v.key, v.props, null, y.mode, w), w.ref = vi(y, null, v), w.return = y, w;
        case fo:
          return v = bu(v, y.mode, w), v.return = y, v;
        case Xn:
          var C = v._init;
          return p(y, C(v._payload), w);
      }
      if (ki(v) || di(v)) return v = Ir(v, y.mode, w, null), v.return = y, v;
      Ua(y, v);
    }
    return null;
  }
  function f(y, v, w, C) {
    var E = v !== null ? v.key : null;
    if (typeof w == "string" && w !== "" || typeof w == "number") return E !== null ? null : l(y, v, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ta:
          return w.key === E ? s(y, v, w, C) : null;
        case fo:
          return w.key === E ? u(y, v, w, C) : null;
        case Xn:
          return E = w._init, f(
            y,
            v,
            E(w._payload),
            C
          );
      }
      if (ki(w) || di(w)) return E !== null ? null : d(y, v, w, C, null);
      Ua(y, w);
    }
    return null;
  }
  function m(y, v, w, C, E) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return y = y.get(w) || null, l(v, y, "" + C, E);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Ta:
          return y = y.get(C.key === null ? w : C.key) || null, s(v, y, C, E);
        case fo:
          return y = y.get(C.key === null ? w : C.key) || null, u(v, y, C, E);
        case Xn:
          var S = C._init;
          return m(y, v, w, S(C._payload), E);
      }
      if (ki(C) || di(C)) return y = y.get(w) || null, d(v, y, C, E, null);
      Ua(v, C);
    }
    return null;
  }
  function h(y, v, w, C) {
    for (var E = null, S = null, b = v, k = v = 0, P = null; b !== null && k < w.length; k++) {
      b.index > k ? (P = b, b = null) : P = b.sibling;
      var N = f(y, b, w[k], C);
      if (N === null) {
        b === null && (b = P);
        break;
      }
      e && b && N.alternate === null && t(y, b), v = i(N, v, k), S === null ? E = N : S.sibling = N, S = N, b = P;
    }
    if (k === w.length) return n(y, b), xe && kr(y, k), E;
    if (b === null) {
      for (; k < w.length; k++) b = p(y, w[k], C), b !== null && (v = i(b, v, k), S === null ? E = b : S.sibling = b, S = b);
      return xe && kr(y, k), E;
    }
    for (b = r(y, b); k < w.length; k++) P = m(b, y, k, w[k], C), P !== null && (e && P.alternate !== null && b.delete(P.key === null ? k : P.key), v = i(P, v, k), S === null ? E = P : S.sibling = P, S = P);
    return e && b.forEach(function(T) {
      return t(y, T);
    }), xe && kr(y, k), E;
  }
  function g(y, v, w, C) {
    var E = di(w);
    if (typeof E != "function") throw Error(A(150));
    if (w = E.call(w), w == null) throw Error(A(151));
    for (var S = E = null, b = v, k = v = 0, P = null, N = w.next(); b !== null && !N.done; k++, N = w.next()) {
      b.index > k ? (P = b, b = null) : P = b.sibling;
      var T = f(y, b, N.value, C);
      if (T === null) {
        b === null && (b = P);
        break;
      }
      e && b && T.alternate === null && t(y, b), v = i(T, v, k), S === null ? E = T : S.sibling = T, S = T, b = P;
    }
    if (N.done) return n(
      y,
      b
    ), xe && kr(y, k), E;
    if (b === null) {
      for (; !N.done; k++, N = w.next()) N = p(y, N.value, C), N !== null && (v = i(N, v, k), S === null ? E = N : S.sibling = N, S = N);
      return xe && kr(y, k), E;
    }
    for (b = r(y, b); !N.done; k++, N = w.next()) N = m(b, y, k, N.value, C), N !== null && (e && N.alternate !== null && b.delete(N.key === null ? k : N.key), v = i(N, v, k), S === null ? E = N : S.sibling = N, S = N);
    return e && b.forEach(function(j) {
      return t(y, j);
    }), xe && kr(y, k), E;
  }
  function x(y, v, w, C) {
    if (typeof w == "object" && w !== null && w.type === po && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ta:
          e: {
            for (var E = w.key, S = v; S !== null; ) {
              if (S.key === E) {
                if (E = w.type, E === po) {
                  if (S.tag === 7) {
                    n(y, S.sibling), v = o(S, w.props.children), v.return = y, y = v;
                    break e;
                  }
                } else if (S.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Xn && em(E) === S.type) {
                  n(y, S.sibling), v = o(S, w.props), v.ref = vi(y, S, w), v.return = y, y = v;
                  break e;
                }
                n(y, S);
                break;
              } else t(y, S);
              S = S.sibling;
            }
            w.type === po ? (v = Ir(w.props.children, y.mode, C, w.key), v.return = y, y = v) : (C = gl(w.type, w.key, w.props, null, y.mode, C), C.ref = vi(y, v, w), C.return = y, y = C);
          }
          return a(y);
        case fo:
          e: {
            for (S = w.key; v !== null; ) {
              if (v.key === S) if (v.tag === 4 && v.stateNode.containerInfo === w.containerInfo && v.stateNode.implementation === w.implementation) {
                n(y, v.sibling), v = o(v, w.children || []), v.return = y, y = v;
                break e;
              } else {
                n(y, v);
                break;
              }
              else t(y, v);
              v = v.sibling;
            }
            v = bu(w, y.mode, C), v.return = y, y = v;
          }
          return a(y);
        case Xn:
          return S = w._init, x(y, v, S(w._payload), C);
      }
      if (ki(w)) return h(y, v, w, C);
      if (di(w)) return g(y, v, w, C);
      Ua(y, w);
    }
    return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, v !== null && v.tag === 6 ? (n(y, v.sibling), v = o(v, w), v.return = y, y = v) : (n(y, v), v = Su(w, y.mode, C), v.return = y, y = v), a(y)) : n(y, v);
  }
  return x;
}
var Wo = eg(!0), tg = eg(!1), Bl = yr(null), $l = null, xo = null, $d = null;
function Wd() {
  $d = xo = $l = null;
}
function zd(e) {
  var t = Bl.current;
  we(Bl), e._currentValue = t;
}
function Fc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Oo(e, t) {
  $l = e, $d = xo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ut = !0), e.firstContext = null);
}
function jt(e) {
  var t = e._currentValue;
  if ($d !== e) if (e = { context: e, memoizedValue: t, next: null }, xo === null) {
    if ($l === null) throw Error(A(308));
    xo = e, $l.dependencies = { lanes: 0, firstContext: e };
  } else xo = xo.next = e;
  return t;
}
var Rr = null;
function Hd(e) {
  Rr === null ? Rr = [e] : Rr.push(e);
}
function ng(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Hd(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Sn(e, r);
}
function Sn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Gn = !1;
function Vd(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function rg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function xn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ir(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ie & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Sn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Hd(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Sn(e, n);
}
function dl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Pd(e, n);
  }
}
function tm(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = a : i = i.next = a, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Wl(e, t, n, r) {
  var o = e.updateQueue;
  Gn = !1;
  var i = o.firstBaseUpdate, a = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l, u = s.next;
    s.next = null, a === null ? i = u : a.next = u, a = s;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== a && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = s));
  }
  if (i !== null) {
    var p = o.baseState;
    a = 0, d = u = s = null, l = i;
    do {
      var f = l.lane, m = l.eventTime;
      if ((r & f) === f) {
        d !== null && (d = d.next = {
          eventTime: m,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var h = e, g = l;
          switch (f = t, m = n, g.tag) {
            case 1:
              if (h = g.payload, typeof h == "function") {
                p = h.call(m, p, f);
                break e;
              }
              p = h;
              break e;
            case 3:
              h.flags = h.flags & -65537 | 128;
            case 0:
              if (h = g.payload, f = typeof h == "function" ? h.call(m, p, f) : h, f == null) break e;
              p = Fe({}, p, f);
              break e;
            case 2:
              Gn = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [l] : f.push(l));
      } else m = { eventTime: m, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (u = d = m, s = p) : d = d.next = m, a |= f;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        f = l, l = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (s = p), o.baseState = s, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        a |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Yr |= a, e.lanes = a, e.memoizedState = p;
  }
}
function nm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(A(191, o));
      o.call(r);
    }
  }
}
var ha = {}, on = yr(ha), ta = yr(ha), na = yr(ha);
function Mr(e) {
  if (e === ha) throw Error(A(174));
  return e;
}
function Ud(e, t) {
  switch (fe(na, t), fe(ta, e), fe(on, ha), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ac(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ac(t, e);
  }
  we(on), fe(on, t);
}
function zo() {
  we(on), we(ta), we(na);
}
function og(e) {
  Mr(na.current);
  var t = Mr(on.current), n = ac(t, e.type);
  t !== n && (fe(ta, e), fe(on, n));
}
function Yd(e) {
  ta.current === e && (we(on), we(ta));
}
var Se = yr(0);
function zl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var yu = [];
function Kd() {
  for (var e = 0; e < yu.length; e++) yu[e]._workInProgressVersionPrimary = null;
  yu.length = 0;
}
var fl = Pn.ReactCurrentDispatcher, Du = Pn.ReactCurrentBatchConfig, Ur = 0, be = null, Te = null, Le = null, Hl = !1, Li = !1, ra = 0, CC = 0;
function Ke() {
  throw Error(A(321));
}
function Qd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!zt(e[n], t[n])) return !1;
  return !0;
}
function Xd(e, t, n, r, o, i) {
  if (Ur = i, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fl.current = e === null || e.memoizedState === null ? FC : kC, e = n(r, o), Li) {
    i = 0;
    do {
      if (Li = !1, ra = 0, 25 <= i) throw Error(A(301));
      i += 1, Le = Te = null, t.updateQueue = null, fl.current = NC, e = n(r, o);
    } while (Li);
  }
  if (fl.current = Vl, t = Te !== null && Te.next !== null, Ur = 0, Le = Te = be = null, Hl = !1, t) throw Error(A(300));
  return e;
}
function Gd() {
  var e = ra !== 0;
  return ra = 0, e;
}
function Jt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Le === null ? be.memoizedState = Le = e : Le = Le.next = e, Le;
}
function At() {
  if (Te === null) {
    var e = be.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = Le === null ? be.memoizedState : Le.next;
  if (t !== null) Le = t, Te = e;
  else {
    if (e === null) throw Error(A(310));
    Te = e, e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }, Le === null ? be.memoizedState = Le = e : Le = Le.next = e;
  }
  return Le;
}
function oa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wu(e) {
  var t = At(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Te, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      o.next = i.next, i.next = a;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var l = a = null, s = null, u = i;
    do {
      var d = u.lane;
      if ((Ur & d) === d) s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        s === null ? (l = s = p, a = r) : s = s.next = p, be.lanes |= d, Yr |= d;
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? a = r : s.next = l, zt(r, t.memoizedState) || (ut = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, be.lanes |= i, Yr |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xu(e) {
  var t = At(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== o);
    zt(i, t.memoizedState) || (ut = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function ig() {
}
function ag(e, t) {
  var n = be, r = At(), o = t(), i = !zt(r.memoizedState, o);
  if (i && (r.memoizedState = o, ut = !0), r = r.queue, qd(ug.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Le !== null && Le.memoizedState.tag & 1) {
    if (n.flags |= 2048, ia(9, sg.bind(null, n, r, o, t), void 0, null), Be === null) throw Error(A(349));
    Ur & 30 || lg(n, t, o);
  }
  return o;
}
function lg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function sg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, cg(t) && dg(e);
}
function ug(e, t, n) {
  return n(function() {
    cg(t) && dg(e);
  });
}
function cg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zt(e, n);
  } catch {
    return !0;
  }
}
function dg(e) {
  var t = Sn(e, 1);
  t !== null && Wt(t, e, 1, -1);
}
function rm(e) {
  var t = Jt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: oa, lastRenderedState: e }, t.queue = e, e = e.dispatch = bC.bind(null, be, e), [t.memoizedState, e];
}
function ia(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function fg() {
  return At().memoizedState;
}
function pl(e, t, n, r) {
  var o = Jt();
  be.flags |= e, o.memoizedState = ia(1 | t, n, void 0, r === void 0 ? null : r);
}
function hs(e, t, n, r) {
  var o = At();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Te !== null) {
    var a = Te.memoizedState;
    if (i = a.destroy, r !== null && Qd(r, a.deps)) {
      o.memoizedState = ia(t, n, i, r);
      return;
    }
  }
  be.flags |= e, o.memoizedState = ia(1 | t, n, i, r);
}
function om(e, t) {
  return pl(8390656, 8, e, t);
}
function qd(e, t) {
  return hs(2048, 8, e, t);
}
function pg(e, t) {
  return hs(4, 2, e, t);
}
function mg(e, t) {
  return hs(4, 4, e, t);
}
function hg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function vg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, hs(4, 4, hg.bind(null, t, e), n);
}
function Jd() {
}
function gg(e, t) {
  var n = At();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function yg(e, t) {
  var n = At();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Dg(e, t, n) {
  return Ur & 21 ? (zt(n, t) || (n = Sv(), be.lanes |= n, Yr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ut = !0), e.memoizedState = n);
}
function EC(e, t) {
  var n = ue;
  ue = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Du.transition;
  Du.transition = {};
  try {
    e(!1), t();
  } finally {
    ue = n, Du.transition = r;
  }
}
function wg() {
  return At().memoizedState;
}
function SC(e, t, n) {
  var r = lr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, xg(e)) Cg(t, n);
  else if (n = ng(e, t, n, r), n !== null) {
    var o = nt();
    Wt(n, e, r, o), Eg(n, t, r);
  }
}
function bC(e, t, n) {
  var r = lr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xg(e)) Cg(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var a = t.lastRenderedState, l = i(a, n);
      if (o.hasEagerState = !0, o.eagerState = l, zt(l, a)) {
        var s = t.interleaved;
        s === null ? (o.next = o, Hd(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = ng(e, t, o, r), n !== null && (o = nt(), Wt(n, e, r, o), Eg(n, t, r));
  }
}
function xg(e) {
  var t = e.alternate;
  return e === be || t !== null && t === be;
}
function Cg(e, t) {
  Li = Hl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Eg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Pd(e, n);
  }
}
var Vl = { readContext: jt, useCallback: Ke, useContext: Ke, useEffect: Ke, useImperativeHandle: Ke, useInsertionEffect: Ke, useLayoutEffect: Ke, useMemo: Ke, useReducer: Ke, useRef: Ke, useState: Ke, useDebugValue: Ke, useDeferredValue: Ke, useTransition: Ke, useMutableSource: Ke, useSyncExternalStore: Ke, useId: Ke, unstable_isNewReconciler: !1 }, FC = { readContext: jt, useCallback: function(e, t) {
  return Jt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: jt, useEffect: om, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, pl(
    4194308,
    4,
    hg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return pl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return pl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Jt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Jt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = SC.bind(null, be, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Jt();
  return e = { current: e }, t.memoizedState = e;
}, useState: rm, useDebugValue: Jd, useDeferredValue: function(e) {
  return Jt().memoizedState = e;
}, useTransition: function() {
  var e = rm(!1), t = e[0];
  return e = EC.bind(null, e[1]), Jt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = be, o = Jt();
  if (xe) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), Be === null) throw Error(A(349));
    Ur & 30 || lg(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, om(ug.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ia(9, sg.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Jt(), t = Be.identifierPrefix;
  if (xe) {
    var n = wn, r = Dn;
    n = (r & ~(1 << 32 - $t(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ra++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = CC++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, kC = {
  readContext: jt,
  useCallback: gg,
  useContext: jt,
  useEffect: qd,
  useImperativeHandle: vg,
  useInsertionEffect: pg,
  useLayoutEffect: mg,
  useMemo: yg,
  useReducer: wu,
  useRef: fg,
  useState: function() {
    return wu(oa);
  },
  useDebugValue: Jd,
  useDeferredValue: function(e) {
    var t = At();
    return Dg(t, Te.memoizedState, e);
  },
  useTransition: function() {
    var e = wu(oa)[0], t = At().memoizedState;
    return [e, t];
  },
  useMutableSource: ig,
  useSyncExternalStore: ag,
  useId: wg,
  unstable_isNewReconciler: !1
}, NC = { readContext: jt, useCallback: gg, useContext: jt, useEffect: qd, useImperativeHandle: vg, useInsertionEffect: pg, useLayoutEffect: mg, useMemo: yg, useReducer: xu, useRef: fg, useState: function() {
  return xu(oa);
}, useDebugValue: Jd, useDeferredValue: function(e) {
  var t = At();
  return Te === null ? t.memoizedState = e : Dg(t, Te.memoizedState, e);
}, useTransition: function() {
  var e = xu(oa)[0], t = At().memoizedState;
  return [e, t];
}, useMutableSource: ig, useSyncExternalStore: ag, useId: wg, unstable_isNewReconciler: !1 };
function Mt(e, t) {
  if (e && e.defaultProps) {
    t = Fe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function kc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Fe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var vs = { isMounted: function(e) {
  return (e = e._reactInternals) ? eo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = nt(), o = lr(e), i = xn(r, o);
  i.payload = t, n != null && (i.callback = n), t = ir(e, i, o), t !== null && (Wt(t, e, o, r), dl(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = nt(), o = lr(e), i = xn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ir(e, i, o), t !== null && (Wt(t, e, o, r), dl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = nt(), r = lr(e), o = xn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = ir(e, o, r), t !== null && (Wt(t, e, r, n), dl(t, e, r));
} };
function im(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !qi(n, r) || !qi(o, i) : !0;
}
function Sg(e, t, n) {
  var r = !1, o = dr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = jt(i) : (o = ft(t) ? Hr : qe.current, r = t.contextTypes, i = (r = r != null) ? Bo(e, o) : dr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function am(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vs.enqueueReplaceState(t, t.state, null);
}
function Nc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Vd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = jt(i) : (i = ft(t) ? Hr : qe.current, o.context = Bo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (kc(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && vs.enqueueReplaceState(o, o.state, null), Wl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ho(e, t) {
  try {
    var n = "", r = t;
    do
      n += nx(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Cu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var PC = typeof WeakMap == "function" ? WeakMap : Map;
function bg(e, t, n) {
  n = xn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Yl || (Yl = !0, Bc = r), Pc(e, t);
  }, n;
}
function Fg(e, t, n) {
  n = xn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Pc(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Pc(e, t), typeof r != "function" && (ar === null ? ar = /* @__PURE__ */ new Set([this]) : ar.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function lm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new PC();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = HC.bind(null, e, t, n), t.then(e, e));
}
function sm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function um(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = xn(-1, 1), t.tag = 2, ir(n, t, 1))), n.lanes |= 1), e);
}
var _C = Pn.ReactCurrentOwner, ut = !1;
function et(e, t, n, r) {
  t.child = e === null ? tg(t, null, n, r) : Wo(t, e.child, n, r);
}
function cm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Oo(t, o), r = Xd(e, t, n, r, i, o), n = Gd(), e !== null && !ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, bn(e, t, o)) : (xe && n && Ld(t), t.flags |= 1, et(e, t, r, o), t.child);
}
function dm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !lf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, kg(e, t, i, r, o)) : (e = gl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : qi, n(a, r) && e.ref === t.ref) return bn(e, t, o);
  }
  return t.flags |= 1, e = sr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function kg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (qi(i, r) && e.ref === t.ref) if (ut = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (ut = !0);
    else return t.lanes = e.lanes, bn(e, t, o);
  }
  return _c(e, t, n, r, o);
}
function Ng(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, fe(Eo, gt), gt |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, fe(Eo, gt), gt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, fe(Eo, gt), gt |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, fe(Eo, gt), gt |= r;
  return et(e, t, o, n), t.child;
}
function Pg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function _c(e, t, n, r, o) {
  var i = ft(n) ? Hr : qe.current;
  return i = Bo(t, i), Oo(t, o), n = Xd(e, t, n, r, i, o), r = Gd(), e !== null && !ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, bn(e, t, o)) : (xe && r && Ld(t), t.flags |= 1, et(e, t, n, o), t.child);
}
function fm(e, t, n, r, o) {
  if (ft(n)) {
    var i = !0;
    Ml(t);
  } else i = !1;
  if (Oo(t, o), t.stateNode === null) ml(e, t), Sg(t, n, r), Nc(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, l = t.memoizedProps;
    a.props = l;
    var s = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = jt(u) : (u = ft(n) ? Hr : qe.current, u = Bo(t, u));
    var d = n.getDerivedStateFromProps, p = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    p || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== r || s !== u) && am(t, a, r, u), Gn = !1;
    var f = t.memoizedState;
    a.state = f, Wl(t, r, a, o), s = t.memoizedState, l !== r || f !== s || dt.current || Gn ? (typeof d == "function" && (kc(t, n, d, r), s = t.memoizedState), (l = Gn || im(t, n, l, r, f, s, u)) ? (p || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), a.props = r, a.state = s, a.context = u, r = l) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, rg(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Mt(t.type, l), a.props = u, p = t.pendingProps, f = a.context, s = n.contextType, typeof s == "object" && s !== null ? s = jt(s) : (s = ft(n) ? Hr : qe.current, s = Bo(t, s));
    var m = n.getDerivedStateFromProps;
    (d = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== p || f !== s) && am(t, a, r, s), Gn = !1, f = t.memoizedState, a.state = f, Wl(t, r, a, o);
    var h = t.memoizedState;
    l !== p || f !== h || dt.current || Gn ? (typeof m == "function" && (kc(t, n, m, r), h = t.memoizedState), (u = Gn || im(t, n, u, r, f, h, s) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, h, s), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, h, s)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), a.props = r, a.state = h, a.context = s, r = u) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return jc(e, t, n, r, i, o);
}
function jc(e, t, n, r, o, i) {
  Pg(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && qp(t, n, !1), bn(e, t, i);
  r = t.stateNode, _C.current = t;
  var l = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Wo(t, e.child, null, i), t.child = Wo(t, null, l, i)) : et(e, t, l, i), t.memoizedState = r.state, o && qp(t, n, !0), t.child;
}
function _g(e) {
  var t = e.stateNode;
  t.pendingContext ? Gp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gp(e, t.context, !1), Ud(e, t.containerInfo);
}
function pm(e, t, n, r, o) {
  return $o(), Bd(o), t.flags |= 256, et(e, t, n, r), t.child;
}
var Ac = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jg(e, t, n) {
  var r = t.pendingProps, o = Se.current, i = !1, a = (t.flags & 128) !== 0, l;
  if ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), fe(Se, o & 1), e === null)
    return bc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Ds(a, r, 0, null), e = Ir(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Oc(n), t.memoizedState = Ac, e) : Zd(t, a));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return jC(e, t, a, r, l, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, l = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = sr(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = sr(l, i) : (i = Ir(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? Oc(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = Ac, r;
  }
  return i = e.child, e = i.sibling, r = sr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Zd(e, t) {
  return t = Ds({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ya(e, t, n, r) {
  return r !== null && Bd(r), Wo(t, e.child, null, n), e = Zd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function jC(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Cu(Error(A(422))), Ya(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ds({ mode: "visible", children: r.children }, o, 0, null), i = Ir(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Wo(t, e.child, null, a), t.child.memoizedState = Oc(a), t.memoizedState = Ac, i);
  if (!(t.mode & 1)) return Ya(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(A(419)), r = Cu(i, r, void 0), Ya(e, t, a, r);
  }
  if (l = (a & e.childLanes) !== 0, ut || l) {
    if (r = Be, r !== null) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Sn(e, o), Wt(r, e, o, -1));
    }
    return af(), r = Cu(Error(A(421))), Ya(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = VC.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Dt = or(o.nextSibling), wt = t, xe = !0, Bt = null, e !== null && (kt[Nt++] = Dn, kt[Nt++] = wn, kt[Nt++] = Vr, Dn = e.id, wn = e.overflow, Vr = t), t = Zd(t, r.children), t.flags |= 4096, t);
}
function mm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fc(e.return, t, n);
}
function Eu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Ag(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (et(e, t, r.children, n), r = Se.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && mm(e, n, t);
      else if (e.tag === 19) mm(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (fe(Se, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && zl(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Eu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && zl(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Eu(t, !0, n, null, i);
      break;
    case "together":
      Eu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ml(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function bn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Yr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = sr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = sr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function AC(e, t, n) {
  switch (t.tag) {
    case 3:
      _g(t), $o();
      break;
    case 5:
      og(t);
      break;
    case 1:
      ft(t.type) && Ml(t);
      break;
    case 4:
      Ud(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      fe(Bl, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (fe(Se, Se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? jg(e, t, n) : (fe(Se, Se.current & 1), e = bn(e, t, n), e !== null ? e.sibling : null);
      fe(Se, Se.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ag(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), fe(Se, Se.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ng(e, t, n);
  }
  return bn(e, t, n);
}
var Og, Tc, Tg, Rg;
Og = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Tc = function() {
};
Tg = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Mr(on.current);
    var i = null;
    switch (n) {
      case "input":
        o = nc(e, o), r = nc(e, r), i = [];
        break;
      case "select":
        o = Fe({}, o, { value: void 0 }), r = Fe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = ic(e, o), r = ic(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Tl);
    }
    lc(n, r);
    var a;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (a in l) l.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Vi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && s !== l && (s != null || l != null)) if (u === "style") if (l) {
        for (a in l) !l.hasOwnProperty(a) || s && s.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in s) s.hasOwnProperty(a) && l[a] !== s[a] && (n || (n = {}), n[a] = s[a]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = s;
      else u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, s != null && l !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Vi.hasOwnProperty(u) ? (s != null && u === "onScroll" && ge("scroll", e), i || l === s || (i = [])) : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Rg = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gi(e, t) {
  if (!xe) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Qe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function OC(e, t, n) {
  var r = t.pendingProps;
  switch (Id(t), t.tag) {
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
      return Qe(t), null;
    case 1:
      return ft(t.type) && Rl(), Qe(t), null;
    case 3:
      return r = t.stateNode, zo(), we(dt), we(qe), Kd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Va(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Bt !== null && (zc(Bt), Bt = null))), Tc(e, t), Qe(t), null;
    case 5:
      Yd(t);
      var o = Mr(na.current);
      if (n = t.type, e !== null && t.stateNode != null) Tg(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Qe(t), null;
        }
        if (e = Mr(on.current), Va(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Zt] = t, r[ea] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ge("cancel", r), ge("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Pi.length; o++) ge(Pi[o], r);
              break;
            case "source":
              ge("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ge(
                "error",
                r
              ), ge("load", r);
              break;
            case "details":
              ge("toggle", r);
              break;
            case "input":
              Ep(r, i), ge("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ge("invalid", r);
              break;
            case "textarea":
              bp(r, i), ge("invalid", r);
          }
          lc(n, i), o = null;
          for (var a in i) if (i.hasOwnProperty(a)) {
            var l = i[a];
            a === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Ha(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Ha(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Vi.hasOwnProperty(a) && l != null && a === "onScroll" && ge("scroll", r);
          }
          switch (n) {
            case "input":
              Ra(r), Sp(r, i, !0);
              break;
            case "textarea":
              Ra(r), Fp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Tl);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = uv(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Zt] = t, e[ea] = r, Og(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = sc(n, r), n) {
              case "dialog":
                ge("cancel", e), ge("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Pi.length; o++) ge(Pi[o], e);
                o = r;
                break;
              case "source":
                ge("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ge(
                  "error",
                  e
                ), ge("load", e), o = r;
                break;
              case "details":
                ge("toggle", e), o = r;
                break;
              case "input":
                Ep(e, r), o = nc(e, r), ge("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Fe({}, r, { value: void 0 }), ge("invalid", e);
                break;
              case "textarea":
                bp(e, r), o = ic(e, r), ge("invalid", e);
                break;
              default:
                o = r;
            }
            lc(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "style" ? fv(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && cv(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Ui(e, s) : typeof s == "number" && Ui(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Vi.hasOwnProperty(i) ? s != null && i === "onScroll" && ge("scroll", e) : s != null && Ed(e, i, s, a));
            }
            switch (n) {
              case "input":
                Ra(e), Sp(e, r, !1);
                break;
              case "textarea":
                Ra(e), Fp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Po(e, !!r.multiple, i, !1) : r.defaultValue != null && Po(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Tl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Qe(t), null;
    case 6:
      if (e && t.stateNode != null) Rg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = Mr(na.current), Mr(on.current), Va(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Zt] = t, (i = r.nodeValue !== n) && (e = wt, e !== null)) switch (e.tag) {
            case 3:
              Ha(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ha(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Zt] = t, t.stateNode = r;
      }
      return Qe(t), null;
    case 13:
      if (we(Se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (xe && Dt !== null && t.mode & 1 && !(t.flags & 128)) Zv(), $o(), t.flags |= 98560, i = !1;
        else if (i = Va(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(A(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(A(317));
            i[Zt] = t;
          } else $o(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Qe(t), i = !1;
        } else Bt !== null && (zc(Bt), Bt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Se.current & 1 ? Re === 0 && (Re = 3) : af())), t.updateQueue !== null && (t.flags |= 4), Qe(t), null);
    case 4:
      return zo(), Tc(e, t), e === null && Ji(t.stateNode.containerInfo), Qe(t), null;
    case 10:
      return zd(t.type._context), Qe(t), null;
    case 17:
      return ft(t.type) && Rl(), Qe(t), null;
    case 19:
      if (we(Se), i = t.memoizedState, i === null) return Qe(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null) if (r) gi(i, !1);
      else {
        if (Re !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = zl(e), a !== null) {
            for (t.flags |= 128, gi(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return fe(Se, Se.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && je() > Vo && (t.flags |= 128, r = !0, gi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = zl(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), gi(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !xe) return Qe(t), null;
        } else 2 * je() - i.renderingStartTime > Vo && n !== 1073741824 && (t.flags |= 128, r = !0, gi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = je(), t.sibling = null, n = Se.current, fe(Se, r ? n & 1 | 2 : n & 1), t) : (Qe(t), null);
    case 22:
    case 23:
      return of(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? gt & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function TC(e, t) {
  switch (Id(t), t.tag) {
    case 1:
      return ft(t.type) && Rl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return zo(), we(dt), we(qe), Kd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Yd(t), null;
    case 13:
      if (we(Se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        $o();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return we(Se), null;
    case 4:
      return zo(), null;
    case 10:
      return zd(t.type._context), null;
    case 22:
    case 23:
      return of(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ka = !1, Xe = !1, RC = typeof WeakSet == "function" ? WeakSet : Set, $ = null;
function Co(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    _e(e, t, r);
  }
  else n.current = null;
}
function Rc(e, t, n) {
  try {
    n();
  } catch (r) {
    _e(e, t, r);
  }
}
var hm = !1;
function MC(e, t) {
  if (yc = jl, e = $v(), Md(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var a = 0, l = -1, s = -1, u = 0, d = 0, p = e, f = null;
        t: for (; ; ) {
          for (var m; p !== n || o !== 0 && p.nodeType !== 3 || (l = a + o), p !== i || r !== 0 && p.nodeType !== 3 || (s = a + r), p.nodeType === 3 && (a += p.nodeValue.length), (m = p.firstChild) !== null; )
            f = p, p = m;
          for (; ; ) {
            if (p === e) break t;
            if (f === n && ++u === o && (l = a), f === i && ++d === r && (s = a), (m = p.nextSibling) !== null) break;
            p = f, f = p.parentNode;
          }
          p = m;
        }
        n = l === -1 || s === -1 ? null : { start: l, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Dc = { focusedElem: e, selectionRange: n }, jl = !1, $ = t; $ !== null; ) if (t = $, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, $ = e;
  else for (; $ !== null; ) {
    t = $;
    try {
      var h = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (h !== null) {
            var g = h.memoizedProps, x = h.memoizedState, y = t.stateNode, v = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Mt(t.type, g), x);
            y.__reactInternalSnapshotBeforeUpdate = v;
          }
          break;
        case 3:
          var w = t.stateNode.containerInfo;
          w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(A(163));
      }
    } catch (C) {
      _e(t, t.return, C);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, $ = e;
      break;
    }
    $ = t.return;
  }
  return h = hm, hm = !1, h;
}
function Ii(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Rc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function gs(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Mc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Mg(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Mg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Zt], delete t[ea], delete t[Cc], delete t[yC], delete t[DC])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Lg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vm(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Lg(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Lc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Tl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Lc(e, t, n), e = e.sibling; e !== null; ) Lc(e, t, n), e = e.sibling;
}
function Ic(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ic(e, t, n), e = e.sibling; e !== null; ) Ic(e, t, n), e = e.sibling;
}
var ze = null, Lt = !1;
function Vn(e, t, n) {
  for (n = n.child; n !== null; ) Ig(e, t, n), n = n.sibling;
}
function Ig(e, t, n) {
  if (rn && typeof rn.onCommitFiberUnmount == "function") try {
    rn.onCommitFiberUnmount(us, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Xe || Co(n, t);
    case 6:
      var r = ze, o = Lt;
      ze = null, Vn(e, t, n), ze = r, Lt = o, ze !== null && (Lt ? (e = ze, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null && (Lt ? (e = ze, n = n.stateNode, e.nodeType === 8 ? vu(e.parentNode, n) : e.nodeType === 1 && vu(e, n), Xi(e)) : vu(ze, n.stateNode));
      break;
    case 4:
      r = ze, o = Lt, ze = n.stateNode.containerInfo, Lt = !0, Vn(e, t, n), ze = r, Lt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Xe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && Rc(n, t, a), o = o.next;
        } while (o !== r);
      }
      Vn(e, t, n);
      break;
    case 1:
      if (!Xe && (Co(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        _e(n, t, l);
      }
      Vn(e, t, n);
      break;
    case 21:
      Vn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Xe = (r = Xe) || n.memoizedState !== null, Vn(e, t, n), Xe = r) : Vn(e, t, n);
      break;
    default:
      Vn(e, t, n);
  }
}
function gm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new RC()), t.forEach(function(r) {
      var o = UC.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Rt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, a = t, l = a;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            ze = l.stateNode, Lt = !1;
            break e;
          case 3:
            ze = l.stateNode.containerInfo, Lt = !0;
            break e;
          case 4:
            ze = l.stateNode.containerInfo, Lt = !0;
            break e;
        }
        l = l.return;
      }
      if (ze === null) throw Error(A(160));
      Ig(i, a, o), ze = null, Lt = !1;
      var s = o.alternate;
      s !== null && (s.return = null), o.return = null;
    } catch (u) {
      _e(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Bg(t, e), t = t.sibling;
}
function Bg(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Rt(t, e), Gt(e), r & 4) {
        try {
          Ii(3, e, e.return), gs(3, e);
        } catch (g) {
          _e(e, e.return, g);
        }
        try {
          Ii(5, e, e.return);
        } catch (g) {
          _e(e, e.return, g);
        }
      }
      break;
    case 1:
      Rt(t, e), Gt(e), r & 512 && n !== null && Co(n, n.return);
      break;
    case 5:
      if (Rt(t, e), Gt(e), r & 512 && n !== null && Co(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ui(o, "");
        } catch (g) {
          _e(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, l = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          l === "input" && i.type === "radio" && i.name != null && lv(o, i), sc(l, a);
          var u = sc(l, i);
          for (a = 0; a < s.length; a += 2) {
            var d = s[a], p = s[a + 1];
            d === "style" ? fv(o, p) : d === "dangerouslySetInnerHTML" ? cv(o, p) : d === "children" ? Ui(o, p) : Ed(o, d, p, u);
          }
          switch (l) {
            case "input":
              rc(o, i);
              break;
            case "textarea":
              sv(o, i);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var m = i.value;
              m != null ? Po(o, !!i.multiple, m, !1) : f !== !!i.multiple && (i.defaultValue != null ? Po(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Po(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[ea] = i;
        } catch (g) {
          _e(e, e.return, g);
        }
      }
      break;
    case 6:
      if (Rt(t, e), Gt(e), r & 4) {
        if (e.stateNode === null) throw Error(A(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (g) {
          _e(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Rt(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Xi(t.containerInfo);
      } catch (g) {
        _e(e, e.return, g);
      }
      break;
    case 4:
      Rt(t, e), Gt(e);
      break;
    case 13:
      Rt(t, e), Gt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (nf = je())), r & 4 && gm(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Xe = (u = Xe) || d, Rt(t, e), Xe = u) : Rt(t, e), Gt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for ($ = e, d = e.child; d !== null; ) {
          for (p = $ = d; $ !== null; ) {
            switch (f = $, m = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ii(4, f, f.return);
                break;
              case 1:
                Co(f, f.return);
                var h = f.stateNode;
                if (typeof h.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
                  } catch (g) {
                    _e(r, n, g);
                  }
                }
                break;
              case 5:
                Co(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Dm(p);
                  continue;
                }
            }
            m !== null ? (m.return = f, $ = m) : Dm(p);
          }
          d = d.sibling;
        }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                o = p.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = p.stateNode, s = p.memoizedProps.style, a = s != null && s.hasOwnProperty("display") ? s.display : null, l.style.display = dv("display", a));
              } catch (g) {
                _e(e, e.return, g);
              }
            }
          } else if (p.tag === 6) {
            if (d === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (g) {
              _e(e, e.return, g);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), p = p.return;
          }
          d === p && (d = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      Rt(t, e), Gt(e), r & 4 && gm(e);
      break;
    case 21:
      break;
    default:
      Rt(
        t,
        e
      ), Gt(e);
  }
}
function Gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Lg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ui(o, ""), r.flags &= -33);
          var i = vm(e);
          Ic(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, l = vm(e);
          Lc(e, l, a);
          break;
        default:
          throw Error(A(161));
      }
    } catch (s) {
      _e(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function LC(e, t, n) {
  $ = e, $g(e);
}
function $g(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var o = $, i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Ka;
      if (!a) {
        var l = o.alternate, s = l !== null && l.memoizedState !== null || Xe;
        l = Ka;
        var u = Xe;
        if (Ka = a, (Xe = s) && !u) for ($ = o; $ !== null; ) a = $, s = a.child, a.tag === 22 && a.memoizedState !== null ? wm(o) : s !== null ? (s.return = a, $ = s) : wm(o);
        for (; i !== null; ) $ = i, $g(i), i = i.sibling;
        $ = o, Ka = l, Xe = u;
      }
      ym(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, $ = i) : ym(e);
  }
}
function ym(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Xe || gs(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Xe) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Mt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && nm(t, i, r);
            break;
          case 3:
            var a = t.updateQueue;
            if (a !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              nm(t, a, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
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
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var d = u.memoizedState;
                if (d !== null) {
                  var p = d.dehydrated;
                  p !== null && Xi(p);
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
            throw Error(A(163));
        }
        Xe || t.flags & 512 && Mc(t);
      } catch (f) {
        _e(t, t.return, f);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function Dm(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function wm(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gs(4, t);
          } catch (s) {
            _e(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              _e(t, o, s);
            }
          }
          var i = t.return;
          try {
            Mc(t);
          } catch (s) {
            _e(t, i, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Mc(t);
          } catch (s) {
            _e(t, a, s);
          }
      }
    } catch (s) {
      _e(t, t.return, s);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, $ = l;
      break;
    }
    $ = t.return;
  }
}
var IC = Math.ceil, Ul = Pn.ReactCurrentDispatcher, ef = Pn.ReactCurrentOwner, _t = Pn.ReactCurrentBatchConfig, ie = 0, Be = null, Oe = null, He = 0, gt = 0, Eo = yr(0), Re = 0, aa = null, Yr = 0, ys = 0, tf = 0, Bi = null, st = null, nf = 0, Vo = 1 / 0, vn = null, Yl = !1, Bc = null, ar = null, Qa = !1, er = null, Kl = 0, $i = 0, $c = null, hl = -1, vl = 0;
function nt() {
  return ie & 6 ? je() : hl !== -1 ? hl : hl = je();
}
function lr(e) {
  return e.mode & 1 ? ie & 2 && He !== 0 ? He & -He : xC.transition !== null ? (vl === 0 && (vl = Sv()), vl) : (e = ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : jv(e.type)), e) : 1;
}
function Wt(e, t, n, r) {
  if (50 < $i) throw $i = 0, $c = null, Error(A(185));
  fa(e, n, r), (!(ie & 2) || e !== Be) && (e === Be && (!(ie & 2) && (ys |= n), Re === 4 && Jn(e, He)), pt(e, r), n === 1 && ie === 0 && !(t.mode & 1) && (Vo = je() + 500, ms && Dr()));
}
function pt(e, t) {
  var n = e.callbackNode;
  xx(e, t);
  var r = _l(e, e === Be ? He : 0);
  if (r === 0) n !== null && Pp(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Pp(n), t === 1) e.tag === 0 ? wC(xm.bind(null, e)) : Gv(xm.bind(null, e)), vC(function() {
      !(ie & 6) && Dr();
    }), n = null;
    else {
      switch (bv(r)) {
        case 1:
          n = Nd;
          break;
        case 4:
          n = Cv;
          break;
        case 16:
          n = Pl;
          break;
        case 536870912:
          n = Ev;
          break;
        default:
          n = Pl;
      }
      n = Qg(n, Wg.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Wg(e, t) {
  if (hl = -1, vl = 0, ie & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (To() && e.callbackNode !== n) return null;
  var r = _l(e, e === Be ? He : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ql(e, r);
  else {
    t = r;
    var o = ie;
    ie |= 2;
    var i = Hg();
    (Be !== e || He !== t) && (vn = null, Vo = je() + 500, Lr(e, t));
    do
      try {
        WC();
        break;
      } catch (l) {
        zg(e, l);
      }
    while (!0);
    Wd(), Ul.current = i, ie = o, Oe !== null ? t = 0 : (Be = null, He = 0, t = Re);
  }
  if (t !== 0) {
    if (t === 2 && (o = pc(e), o !== 0 && (r = o, t = Wc(e, o))), t === 1) throw n = aa, Lr(e, 0), Jn(e, r), pt(e, je()), n;
    if (t === 6) Jn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !BC(o) && (t = Ql(e, r), t === 2 && (i = pc(e), i !== 0 && (r = i, t = Wc(e, i))), t === 1)) throw n = aa, Lr(e, 0), Jn(e, r), pt(e, je()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Nr(e, st, vn);
          break;
        case 3:
          if (Jn(e, r), (r & 130023424) === r && (t = nf + 500 - je(), 10 < t)) {
            if (_l(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              nt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = xc(Nr.bind(null, e, st, vn), t);
            break;
          }
          Nr(e, st, vn);
          break;
        case 4:
          if (Jn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - $t(r);
            i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
          }
          if (r = o, r = je() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * IC(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = xc(Nr.bind(null, e, st, vn), r);
            break;
          }
          Nr(e, st, vn);
          break;
        case 5:
          Nr(e, st, vn);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return pt(e, je()), e.callbackNode === n ? Wg.bind(null, e) : null;
}
function Wc(e, t) {
  var n = Bi;
  return e.current.memoizedState.isDehydrated && (Lr(e, t).flags |= 256), e = Ql(e, t), e !== 2 && (t = st, st = n, t !== null && zc(t)), e;
}
function zc(e) {
  st === null ? st = e : st.push.apply(st, e);
}
function BC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!zt(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Jn(e, t) {
  for (t &= ~tf, t &= ~ys, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $t(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function xm(e) {
  if (ie & 6) throw Error(A(327));
  To();
  var t = _l(e, 0);
  if (!(t & 1)) return pt(e, je()), null;
  var n = Ql(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = pc(e);
    r !== 0 && (t = r, n = Wc(e, r));
  }
  if (n === 1) throw n = aa, Lr(e, 0), Jn(e, t), pt(e, je()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Nr(e, st, vn), pt(e, je()), null;
}
function rf(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    ie = n, ie === 0 && (Vo = je() + 500, ms && Dr());
  }
}
function Kr(e) {
  er !== null && er.tag === 0 && !(ie & 6) && To();
  var t = ie;
  ie |= 1;
  var n = _t.transition, r = ue;
  try {
    if (_t.transition = null, ue = 1, e) return e();
  } finally {
    ue = r, _t.transition = n, ie = t, !(ie & 6) && Dr();
  }
}
function of() {
  gt = Eo.current, we(Eo);
}
function Lr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, hC(n)), Oe !== null) for (n = Oe.return; n !== null; ) {
    var r = n;
    switch (Id(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Rl();
        break;
      case 3:
        zo(), we(dt), we(qe), Kd();
        break;
      case 5:
        Yd(r);
        break;
      case 4:
        zo();
        break;
      case 13:
        we(Se);
        break;
      case 19:
        we(Se);
        break;
      case 10:
        zd(r.type._context);
        break;
      case 22:
      case 23:
        of();
    }
    n = n.return;
  }
  if (Be = e, Oe = e = sr(e.current, null), He = gt = t, Re = 0, aa = null, tf = ys = Yr = 0, st = Bi = null, Rr !== null) {
    for (t = 0; t < Rr.length; t++) if (n = Rr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var a = i.next;
        i.next = o, r.next = a;
      }
      n.pending = r;
    }
    Rr = null;
  }
  return e;
}
function zg(e, t) {
  do {
    var n = Oe;
    try {
      if (Wd(), fl.current = Vl, Hl) {
        for (var r = be.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Hl = !1;
      }
      if (Ur = 0, Le = Te = be = null, Li = !1, ra = 0, ef.current = null, n === null || n.return === null) {
        Re = 1, aa = t, Oe = null;
        break;
      }
      e: {
        var i = e, a = n.return, l = n, s = t;
        if (t = He, l.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var u = s, d = l, p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = d.alternate;
            f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var m = sm(a);
          if (m !== null) {
            m.flags &= -257, um(m, a, l, i, t), m.mode & 1 && lm(i, u, t), t = m, s = u;
            var h = t.updateQueue;
            if (h === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(s), t.updateQueue = g;
            } else h.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              lm(i, u, t), af();
              break e;
            }
            s = Error(A(426));
          }
        } else if (xe && l.mode & 1) {
          var x = sm(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), um(x, a, l, i, t), Bd(Ho(s, l));
            break e;
          }
        }
        i = s = Ho(s, l), Re !== 4 && (Re = 2), Bi === null ? Bi = [i] : Bi.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var y = bg(i, s, t);
              tm(i, y);
              break e;
            case 1:
              l = s;
              var v = i.type, w = i.stateNode;
              if (!(i.flags & 128) && (typeof v.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (ar === null || !ar.has(w)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var C = Fg(i, l, t);
                tm(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ug(n);
    } catch (E) {
      t = E, Oe === n && n !== null && (Oe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Hg() {
  var e = Ul.current;
  return Ul.current = Vl, e === null ? Vl : e;
}
function af() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4), Be === null || !(Yr & 268435455) && !(ys & 268435455) || Jn(Be, He);
}
function Ql(e, t) {
  var n = ie;
  ie |= 2;
  var r = Hg();
  (Be !== e || He !== t) && (vn = null, Lr(e, t));
  do
    try {
      $C();
      break;
    } catch (o) {
      zg(e, o);
    }
  while (!0);
  if (Wd(), ie = n, Ul.current = r, Oe !== null) throw Error(A(261));
  return Be = null, He = 0, Re;
}
function $C() {
  for (; Oe !== null; ) Vg(Oe);
}
function WC() {
  for (; Oe !== null && !fx(); ) Vg(Oe);
}
function Vg(e) {
  var t = Kg(e.alternate, e, gt);
  e.memoizedProps = e.pendingProps, t === null ? Ug(e) : Oe = t, ef.current = null;
}
function Ug(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = TC(n, t), n !== null) {
        n.flags &= 32767, Oe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Re = 6, Oe = null;
        return;
      }
    } else if (n = OC(n, t, gt), n !== null) {
      Oe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Oe = t;
      return;
    }
    Oe = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function Nr(e, t, n) {
  var r = ue, o = _t.transition;
  try {
    _t.transition = null, ue = 1, zC(e, t, n, r);
  } finally {
    _t.transition = o, ue = r;
  }
  return null;
}
function zC(e, t, n, r) {
  do
    To();
  while (er !== null);
  if (ie & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Cx(e, i), e === Be && (Oe = Be = null, He = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Qa || (Qa = !0, Qg(Pl, function() {
    return To(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = _t.transition, _t.transition = null;
    var a = ue;
    ue = 1;
    var l = ie;
    ie |= 4, ef.current = null, MC(e, n), Bg(n, e), sC(Dc), jl = !!yc, Dc = yc = null, e.current = n, LC(n), px(), ie = l, ue = a, _t.transition = i;
  } else e.current = n;
  if (Qa && (Qa = !1, er = e, Kl = o), i = e.pendingLanes, i === 0 && (ar = null), vx(n.stateNode), pt(e, je()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Yl) throw Yl = !1, e = Bc, Bc = null, e;
  return Kl & 1 && e.tag !== 0 && To(), i = e.pendingLanes, i & 1 ? e === $c ? $i++ : ($i = 0, $c = e) : $i = 0, Dr(), null;
}
function To() {
  if (er !== null) {
    var e = bv(Kl), t = _t.transition, n = ue;
    try {
      if (_t.transition = null, ue = 16 > e ? 16 : e, er === null) var r = !1;
      else {
        if (e = er, er = null, Kl = 0, ie & 6) throw Error(A(331));
        var o = ie;
        for (ie |= 4, $ = e.current; $ !== null; ) {
          var i = $, a = i.child;
          if ($.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for ($ = u; $ !== null; ) {
                  var d = $;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ii(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) p.return = d, $ = p;
                  else for (; $ !== null; ) {
                    d = $;
                    var f = d.sibling, m = d.return;
                    if (Mg(d), d === u) {
                      $ = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = m, $ = f;
                      break;
                    }
                    $ = m;
                  }
                }
              }
              var h = i.alternate;
              if (h !== null) {
                var g = h.child;
                if (g !== null) {
                  h.child = null;
                  do {
                    var x = g.sibling;
                    g.sibling = null, g = x;
                  } while (g !== null);
                }
              }
              $ = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) a.return = i, $ = a;
          else e: for (; $ !== null; ) {
            if (i = $, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Ii(9, i, i.return);
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, $ = y;
              break e;
            }
            $ = i.return;
          }
        }
        var v = e.current;
        for ($ = v; $ !== null; ) {
          a = $;
          var w = a.child;
          if (a.subtreeFlags & 2064 && w !== null) w.return = a, $ = w;
          else e: for (a = v; $ !== null; ) {
            if (l = $, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  gs(9, l);
              }
            } catch (E) {
              _e(l, l.return, E);
            }
            if (l === a) {
              $ = null;
              break e;
            }
            var C = l.sibling;
            if (C !== null) {
              C.return = l.return, $ = C;
              break e;
            }
            $ = l.return;
          }
        }
        if (ie = o, Dr(), rn && typeof rn.onPostCommitFiberRoot == "function") try {
          rn.onPostCommitFiberRoot(us, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ue = n, _t.transition = t;
    }
  }
  return !1;
}
function Cm(e, t, n) {
  t = Ho(n, t), t = bg(e, t, 1), e = ir(e, t, 1), t = nt(), e !== null && (fa(e, 1, t), pt(e, t));
}
function _e(e, t, n) {
  if (e.tag === 3) Cm(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Cm(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ar === null || !ar.has(r))) {
        e = Ho(n, e), e = Fg(t, e, 1), t = ir(t, e, 1), e = nt(), t !== null && (fa(t, 1, e), pt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function HC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = nt(), e.pingedLanes |= e.suspendedLanes & n, Be === e && (He & n) === n && (Re === 4 || Re === 3 && (He & 130023424) === He && 500 > je() - nf ? Lr(e, 0) : tf |= n), pt(e, t);
}
function Yg(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ia, Ia <<= 1, !(Ia & 130023424) && (Ia = 4194304)) : t = 1);
  var n = nt();
  e = Sn(e, t), e !== null && (fa(e, t, n), pt(e, n));
}
function VC(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Yg(e, n);
}
function UC(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), Yg(e, n);
}
var Kg;
Kg = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || dt.current) ut = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ut = !1, AC(e, t, n);
    ut = !!(e.flags & 131072);
  }
  else ut = !1, xe && t.flags & 1048576 && qv(t, Il, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ml(e, t), e = t.pendingProps;
      var o = Bo(t, qe.current);
      Oo(t, n), o = Xd(null, t, r, e, o, n);
      var i = Gd();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ft(r) ? (i = !0, Ml(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Vd(t), o.updater = vs, t.stateNode = o, o._reactInternals = t, Nc(t, r, e, n), t = jc(null, t, r, !0, i, n)) : (t.tag = 0, xe && i && Ld(t), et(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ml(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = KC(r), e = Mt(r, e), o) {
          case 0:
            t = _c(null, t, r, e, n);
            break e;
          case 1:
            t = fm(null, t, r, e, n);
            break e;
          case 11:
            t = cm(null, t, r, e, n);
            break e;
          case 14:
            t = dm(null, t, r, Mt(r.type, e), n);
            break e;
        }
        throw Error(A(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Mt(r, o), _c(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Mt(r, o), fm(e, t, r, o, n);
    case 3:
      e: {
        if (_g(t), e === null) throw Error(A(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, rg(e, t), Wl(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Ho(Error(A(423)), t), t = pm(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Ho(Error(A(424)), t), t = pm(e, t, r, n, o);
          break e;
        } else for (Dt = or(t.stateNode.containerInfo.firstChild), wt = t, xe = !0, Bt = null, n = tg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if ($o(), r === o) {
            t = bn(e, t, n);
            break e;
          }
          et(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return og(t), e === null && bc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, wc(r, o) ? a = null : i !== null && wc(r, i) && (t.flags |= 32), Pg(e, t), et(e, t, a, n), t.child;
    case 6:
      return e === null && bc(t), null;
    case 13:
      return jg(e, t, n);
    case 4:
      return Ud(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wo(t, null, r, n) : et(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Mt(r, o), cm(e, t, r, o, n);
    case 7:
      return et(e, t, t.pendingProps, n), t.child;
    case 8:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, fe(Bl, r._currentValue), r._currentValue = a, i !== null) if (zt(i.value, a)) {
          if (i.children === o.children && !dt.current) {
            t = bn(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            a = i.child;
            for (var s = l.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = xn(-1, n & -n), s.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var d = u.pending;
                    d === null ? s.next = s : (s.next = d.next, d.next = s), u.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Fc(
                  i.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (a = i.return, a === null) throw Error(A(341));
            a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n), Fc(a, n, t), a = i.sibling;
          } else a = i.child;
          if (a !== null) a.return = i;
          else for (a = i; a !== null; ) {
            if (a === t) {
              a = null;
              break;
            }
            if (i = a.sibling, i !== null) {
              i.return = a.return, a = i;
              break;
            }
            a = a.return;
          }
          i = a;
        }
        et(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Oo(t, n), o = jt(o), r = r(o), t.flags |= 1, et(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Mt(r, t.pendingProps), o = Mt(r.type, o), dm(e, t, r, o, n);
    case 15:
      return kg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Mt(r, o), ml(e, t), t.tag = 1, ft(r) ? (e = !0, Ml(t)) : e = !1, Oo(t, n), Sg(t, r, o), Nc(t, r, o, n), jc(null, t, r, !0, e, n);
    case 19:
      return Ag(e, t, n);
    case 22:
      return Ng(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Qg(e, t) {
  return xv(e, t);
}
function YC(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Pt(e, t, n, r) {
  return new YC(e, t, n, r);
}
function lf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function KC(e) {
  if (typeof e == "function") return lf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === bd) return 11;
    if (e === Fd) return 14;
  }
  return 2;
}
function sr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Pt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function gl(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function") lf(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case po:
      return Ir(n.children, o, i, t);
    case Sd:
      a = 8, o |= 8;
      break;
    case Ju:
      return e = Pt(12, n, t, o | 2), e.elementType = Ju, e.lanes = i, e;
    case Zu:
      return e = Pt(13, n, t, o), e.elementType = Zu, e.lanes = i, e;
    case ec:
      return e = Pt(19, n, t, o), e.elementType = ec, e.lanes = i, e;
    case ov:
      return Ds(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case nv:
          a = 10;
          break e;
        case rv:
          a = 9;
          break e;
        case bd:
          a = 11;
          break e;
        case Fd:
          a = 14;
          break e;
        case Xn:
          a = 16, r = null;
          break e;
      }
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = Pt(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ir(e, t, n, r) {
  return e = Pt(7, e, r, t), e.lanes = n, e;
}
function Ds(e, t, n, r) {
  return e = Pt(22, e, r, t), e.elementType = ov, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Su(e, t, n) {
  return e = Pt(6, e, null, t), e.lanes = n, e;
}
function bu(e, t, n) {
  return t = Pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function QC(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = iu(0), this.expirationTimes = iu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = iu(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function sf(e, t, n, r, o, i, a, l, s) {
  return e = new QC(e, t, n, l, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Pt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vd(i), e;
}
function XC(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: fo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Xg(e) {
  if (!e) return dr;
  e = e._reactInternals;
  e: {
    if (eo(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ft(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ft(n)) return Xv(e, n, t);
  }
  return t;
}
function Gg(e, t, n, r, o, i, a, l, s) {
  return e = sf(n, r, !0, e, o, i, a, l, s), e.context = Xg(null), n = e.current, r = nt(), o = lr(n), i = xn(r, o), i.callback = t ?? null, ir(n, i, o), e.current.lanes = o, fa(e, o, r), pt(e, r), e;
}
function ws(e, t, n, r) {
  var o = t.current, i = nt(), a = lr(o);
  return n = Xg(n), t.context === null ? t.context = n : t.pendingContext = n, t = xn(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ir(o, t, a), e !== null && (Wt(e, o, a, i), dl(e, o, a)), a;
}
function Xl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Em(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function uf(e, t) {
  Em(e, t), (e = e.alternate) && Em(e, t);
}
function GC() {
  return null;
}
var qg = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function cf(e) {
  this._internalRoot = e;
}
xs.prototype.render = cf.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  ws(e, t, null, null);
};
xs.prototype.unmount = cf.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kr(function() {
      ws(null, e, null, null);
    }), t[En] = null;
  }
};
function xs(e) {
  this._internalRoot = e;
}
xs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Nv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qn.length && t !== 0 && t < qn[n].priority; n++) ;
    qn.splice(n, 0, e), n === 0 && _v(e);
  }
};
function df(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Cs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Sm() {
}
function qC(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Xl(a);
        i.call(u);
      };
    }
    var a = Gg(t, r, e, 0, null, !1, !1, "", Sm);
    return e._reactRootContainer = a, e[En] = a.current, Ji(e.nodeType === 8 ? e.parentNode : e), Kr(), a;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Xl(s);
      l.call(u);
    };
  }
  var s = sf(e, 0, !1, null, null, !1, !1, "", Sm);
  return e._reactRootContainer = s, e[En] = s.current, Ji(e.nodeType === 8 ? e.parentNode : e), Kr(function() {
    ws(t, s, n, r);
  }), s;
}
function Es(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var s = Xl(a);
        l.call(s);
      };
    }
    ws(t, a, e, o);
  } else a = qC(n, t, e, o, r);
  return Xl(a);
}
Fv = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ni(t.pendingLanes);
        n !== 0 && (Pd(t, n | 1), pt(t, je()), !(ie & 6) && (Vo = je() + 500, Dr()));
      }
      break;
    case 13:
      Kr(function() {
        var r = Sn(e, 1);
        if (r !== null) {
          var o = nt();
          Wt(r, e, 1, o);
        }
      }), uf(e, 1);
  }
};
_d = function(e) {
  if (e.tag === 13) {
    var t = Sn(e, 134217728);
    if (t !== null) {
      var n = nt();
      Wt(t, e, 134217728, n);
    }
    uf(e, 134217728);
  }
};
kv = function(e) {
  if (e.tag === 13) {
    var t = lr(e), n = Sn(e, t);
    if (n !== null) {
      var r = nt();
      Wt(n, e, t, r);
    }
    uf(e, t);
  }
};
Nv = function() {
  return ue;
};
Pv = function(e, t) {
  var n = ue;
  try {
    return ue = e, t();
  } finally {
    ue = n;
  }
};
cc = function(e, t, n) {
  switch (t) {
    case "input":
      if (rc(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ps(r);
            if (!o) throw Error(A(90));
            av(r), rc(r, o);
          }
        }
      }
      break;
    case "textarea":
      sv(e, n);
      break;
    case "select":
      t = n.value, t != null && Po(e, !!n.multiple, t, !1);
  }
};
hv = rf;
vv = Kr;
var JC = { usingClientEntryPoint: !1, Events: [ma, go, ps, pv, mv, rf] }, yi = { findFiberByHostInstance: Tr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ZC = { bundleType: yi.bundleType, version: yi.version, rendererPackageName: yi.rendererPackageName, rendererConfig: yi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Pn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Dv(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: yi.findFiberByHostInstance || GC, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xa.isDisabled && Xa.supportsFiber) try {
    us = Xa.inject(ZC), rn = Xa;
  } catch {
  }
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JC;
bt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!df(t)) throw Error(A(200));
  return XC(e, t, null, n);
};
bt.createRoot = function(e, t) {
  if (!df(e)) throw Error(A(299));
  var n = !1, r = "", o = qg;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = sf(e, 1, !1, null, null, n, !1, r, o), e[En] = t.current, Ji(e.nodeType === 8 ? e.parentNode : e), new cf(t);
};
bt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = Dv(t), e = e === null ? null : e.stateNode, e;
};
bt.flushSync = function(e) {
  return Kr(e);
};
bt.hydrate = function(e, t, n) {
  if (!Cs(t)) throw Error(A(200));
  return Es(null, e, t, !0, n);
};
bt.hydrateRoot = function(e, t, n) {
  if (!df(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = qg;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Gg(t, null, e, 1, n ?? null, o, !1, i, a), e[En] = t.current, Ji(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new xs(t);
};
bt.render = function(e, t, n) {
  if (!Cs(t)) throw Error(A(200));
  return Es(null, e, t, !1, n);
};
bt.unmountComponentAtNode = function(e) {
  if (!Cs(e)) throw Error(A(40));
  return e._reactRootContainer ? (Kr(function() {
    Es(null, null, e, !1, function() {
      e._reactRootContainer = null, e[En] = null;
    });
  }), !0) : !1;
};
bt.unstable_batchedUpdates = rf;
bt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Cs(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Es(e, t, n, !1, r);
};
bt.version = "18.3.1-next-f1338f8080-20240426";
function Jg() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jg);
    } catch (e) {
      console.error(e);
    }
}
Jg(), Jh.exports = bt;
var to = Jh.exports;
const e2 = /* @__PURE__ */ $h(to);
var bm = to;
bl.createRoot = bm.createRoot, bl.hydrateRoot = bm.hydrateRoot;
function t2(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Zg(...e) {
  return (t) => e.forEach((n) => t2(n, t));
}
function le(...e) {
  return D.useCallback(Zg(...e), e);
}
var fr = D.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = D.Children.toArray(n), i = o.find(r2);
  if (i) {
    const a = i.props.children, l = o.map((s) => s === i ? D.Children.count(a) > 1 ? D.Children.only(null) : D.isValidElement(a) ? a.props.children : null : s);
    return /* @__PURE__ */ c.jsx(Hc, { ...r, ref: t, children: D.isValidElement(a) ? D.cloneElement(a, void 0, l) : null });
  }
  return /* @__PURE__ */ c.jsx(Hc, { ...r, ref: t, children: n });
});
fr.displayName = "Slot";
var Hc = D.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (D.isValidElement(n)) {
    const o = i2(n);
    return D.cloneElement(n, {
      ...o2(r, n.props),
      // @ts-ignore
      ref: t ? Zg(t, o) : o
    });
  }
  return D.Children.count(n) > 1 ? D.Children.only(null) : null;
});
Hc.displayName = "SlotClone";
var n2 = ({ children: e }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: e });
function r2(e) {
  return D.isValidElement(e) && e.type === n2;
}
function o2(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
      i(...l), o(...l);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function i2(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function e0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = e0(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function a2() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = e0(e)) && (r && (r += " "), r += t);
  return r;
}
const Fm = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, km = a2, t0 = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return km(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((u) => {
    const d = n == null ? void 0 : n[u], p = i == null ? void 0 : i[u];
    if (d === null) return null;
    const f = Fm(d) || Fm(p);
    return o[u][f];
  }), l = n && Object.entries(n).reduce((u, d) => {
    let [p, f] = d;
    return f === void 0 || (u[p] = f), u;
  }, {}), s = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
    let { class: p, className: f, ...m } = d;
    return Object.entries(m).every((h) => {
      let [g, x] = h;
      return Array.isArray(x) ? x.includes({
        ...i,
        ...l
      }[g]) : {
        ...i,
        ...l
      }[g] === x;
    }) ? [
      ...u,
      p,
      f
    ] : u;
  }, []);
  return km(e, a, s, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
function n0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = n0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function l2() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = n0(e)) && (r && (r += " "), r += t);
  return r;
}
const ff = "-", s2 = (e) => {
  const t = c2(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split(ff);
      return l[0] === "" && l.length !== 1 && l.shift(), r0(l, t) || u2(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const s = n[a] || [];
      return l && r[a] ? [...s, ...r[a]] : s;
    }
  };
}, r0 = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? r0(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(ff);
  return (a = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : a.classGroupId;
}, Nm = /^\[(.+)\]$/, u2 = (e) => {
  if (Nm.test(e)) {
    const t = Nm.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, c2 = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return f2(Object.entries(e.classGroups), n).forEach(([i, a]) => {
    Vc(a, r, i, t);
  }), r;
}, Vc = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Pm(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (d2(o)) {
        Vc(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      Vc(a, Pm(t, i), n, r);
    });
  });
}, Pm = (e, t) => {
  let n = e;
  return t.split(ff).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, d2 = (e) => e.isThemeGetter, f2 = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, l]) => [t + a, l])) : i);
  return [n, o];
}) : e, p2 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (i, a) => {
    n.set(i, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = n.get(i);
      if (a !== void 0)
        return a;
      if ((a = r.get(i)) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      n.has(i) ? n.set(i, a) : o(i, a);
    }
  };
}, o0 = "!", m2 = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, a = (l) => {
    const s = [];
    let u = 0, d = 0, p;
    for (let x = 0; x < l.length; x++) {
      let y = l[x];
      if (u === 0) {
        if (y === o && (r || l.slice(x, x + i) === t)) {
          s.push(l.slice(d, x)), d = x + i;
          continue;
        }
        if (y === "/") {
          p = x;
          continue;
        }
      }
      y === "[" ? u++ : y === "]" && u--;
    }
    const f = s.length === 0 ? l : l.substring(d), m = f.startsWith(o0), h = m ? f.substring(1) : f, g = p && p > d ? p - d : void 0;
    return {
      modifiers: s,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (l) => n({
    className: l,
    parseClassName: a
  }) : a;
}, h2 = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, v2 = (e) => ({
  cache: p2(e.cacheSize),
  parseClassName: m2(e),
  ...s2(e)
}), g2 = /\s+/, y2 = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(g2);
  let l = "";
  for (let s = a.length - 1; s >= 0; s -= 1) {
    const u = a[s], {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: m
    } = n(u);
    let h = !!m, g = r(h ? f.substring(0, m) : f);
    if (!g) {
      if (!h) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (g = r(f), !g) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      h = !1;
    }
    const x = h2(d).join(":"), y = p ? x + o0 : x, v = y + g;
    if (i.includes(v))
      continue;
    i.push(v);
    const w = o(g, h);
    for (let C = 0; C < w.length; ++C) {
      const E = w[C];
      i.push(y + E);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function D2() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = i0(t)) && (r && (r += " "), r += n);
  return r;
}
const i0 = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = i0(e[r])) && (n && (n += " "), n += t);
  return n;
};
function w2(e, ...t) {
  let n, r, o, i = a;
  function a(s) {
    const u = t.reduce((d, p) => p(d), e());
    return n = v2(u), r = n.cache.get, o = n.cache.set, i = l, l(s);
  }
  function l(s) {
    const u = r(s);
    if (u)
      return u;
    const d = y2(s, n);
    return o(s, d), d;
  }
  return function() {
    return i(D2.apply(null, arguments));
  };
}
const ve = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, a0 = /^\[(?:([a-z-]+):)?(.+)\]$/i, x2 = /^\d+\/\d+$/, C2 = /* @__PURE__ */ new Set(["px", "full", "screen"]), E2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, S2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, b2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, F2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, k2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, pn = (e) => Ro(e) || C2.has(e) || x2.test(e), Un = (e) => ti(e, "length", R2), Ro = (e) => !!e && !Number.isNaN(Number(e)), Fu = (e) => ti(e, "number", Ro), Di = (e) => !!e && Number.isInteger(Number(e)), N2 = (e) => e.endsWith("%") && Ro(e.slice(0, -1)), X = (e) => a0.test(e), Yn = (e) => E2.test(e), P2 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), _2 = (e) => ti(e, P2, l0), j2 = (e) => ti(e, "position", l0), A2 = /* @__PURE__ */ new Set(["image", "url"]), O2 = (e) => ti(e, A2, L2), T2 = (e) => ti(e, "", M2), wi = () => !0, ti = (e, t, n) => {
  const r = a0.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, R2 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  S2.test(e) && !b2.test(e)
), l0 = () => !1, M2 = (e) => F2.test(e), L2 = (e) => k2.test(e), I2 = () => {
  const e = ve("colors"), t = ve("spacing"), n = ve("blur"), r = ve("brightness"), o = ve("borderColor"), i = ve("borderRadius"), a = ve("borderSpacing"), l = ve("borderWidth"), s = ve("contrast"), u = ve("grayscale"), d = ve("hueRotate"), p = ve("invert"), f = ve("gap"), m = ve("gradientColorStops"), h = ve("gradientColorStopPositions"), g = ve("inset"), x = ve("margin"), y = ve("opacity"), v = ve("padding"), w = ve("saturate"), C = ve("scale"), E = ve("sepia"), S = ve("skew"), b = ve("space"), k = ve("translate"), P = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", X, t], j = () => [X, t], L = () => ["", pn, Un], I = () => ["auto", Ro, X], z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], _ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], O = () => ["", "0", X], B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], V = () => [Ro, X];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [wi],
      spacing: [pn, Un],
      blur: ["none", "", Yn, X],
      brightness: V(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Yn, X],
      borderSpacing: j(),
      borderWidth: L(),
      contrast: V(),
      grayscale: O(),
      hueRotate: V(),
      invert: O(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [N2, Un],
      inset: T(),
      margin: T(),
      opacity: V(),
      padding: j(),
      saturate: V(),
      scale: V(),
      sepia: O(),
      skew: V(),
      space: j(),
      translate: j()
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
        columns: [Yn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": B()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": B()
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
        object: [...z(), X]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
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
        z: ["auto", Di, X]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: T()
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
        grow: O()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: O()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Di, X]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [wi]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Di, X]
        }, X]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [wi]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Di, X]
        }, X]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
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
        justify: ["normal", ...F()]
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
        content: ["normal", ...F(), "baseline"]
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
        "place-content": [...F(), "baseline"]
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
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [b]
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
        "space-y": [b]
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
          screen: [Yn]
        }, Yn]
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
        text: ["base", Yn, Un]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Fu]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [wi]
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
        "line-clamp": ["none", Ro, Fu]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", pn, X]
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
        decoration: ["auto", "from-font", pn, Un]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", pn, X]
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
        indent: j()
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
        bg: [...z(), j2]
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
        bg: ["auto", "cover", "contain", _2]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, O2]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
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
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
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
        "divide-x": [l]
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
        "divide-y": [l]
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
        "outline-offset": [pn, X]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [pn, Un]
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
        ring: L()
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
        "ring-offset": [pn, Un]
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
        shadow: ["", "inner", "none", Yn, T2]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [wi]
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
        "mix-blend": [..._(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": _()
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
        contrast: [s]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Yn, X]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
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
        "backdrop-contrast": [s]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
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
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
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
        duration: V()
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
        delay: V()
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
        rotate: [Di, X]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [k]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [k]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [S]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [S]
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
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
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
        stroke: [pn, Un, Fu]
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
}, B2 = /* @__PURE__ */ w2(I2);
function G(...e) {
  return B2(l2(e));
}
const Uc = t0(
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
), De = D.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
  const a = r ? fr : "button";
  return /* @__PURE__ */ c.jsx(
    a,
    {
      className: G(Uc({ variant: t, size: n, className: e })),
      ref: i,
      ...o
    }
  );
});
De.displayName = "Button";
function s0(e) {
  return /* @__PURE__ */ c.jsxs(
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
        /* @__PURE__ */ c.jsx("path", { d: "M8 2v4" }),
        /* @__PURE__ */ c.jsx("path", { d: "M16 2v4" }),
        /* @__PURE__ */ c.jsx("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }),
        /* @__PURE__ */ c.jsx("path", { d: "M3 10h18" }),
        /* @__PURE__ */ c.jsx("path", { d: "M8 14h.01" }),
        /* @__PURE__ */ c.jsx("path", { d: "M12 14h.01" }),
        /* @__PURE__ */ c.jsx("path", { d: "M16 14h.01" }),
        /* @__PURE__ */ c.jsx("path", { d: "M8 18h.01" }),
        /* @__PURE__ */ c.jsx("path", { d: "M12 18h.01" }),
        /* @__PURE__ */ c.jsx("path", { d: "M16 18h.01" })
      ]
    }
  );
}
function Br(e) {
  return /* @__PURE__ */ c.jsx(
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
      children: /* @__PURE__ */ c.jsx("path", { d: "M20 6 9 17l-5-5" })
    }
  );
}
function Yc(e) {
  return /* @__PURE__ */ c.jsxs(
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
        /* @__PURE__ */ c.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ c.jsx("polyline", { points: "12 6 12 12 16 14" })
      ]
    }
  );
}
function $2(e) {
  return /* @__PURE__ */ c.jsxs(
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
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
          }
        ),
        /* @__PURE__ */ c.jsx("path", { d: "m14.5 12.5 2-2" }),
        /* @__PURE__ */ c.jsx("path", { d: "m11.5 9.5 2-2" }),
        /* @__PURE__ */ c.jsx("path", { d: "m8.5 6.5 2-2" }),
        /* @__PURE__ */ c.jsx("path", { d: "m17.5 15.5 2-2" })
      ]
    }
  );
}
function W2(e) {
  return /* @__PURE__ */ c.jsxs(
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
        /* @__PURE__ */ c.jsx("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
        /* @__PURE__ */ c.jsx("circle", { cx: "12", cy: "7", r: "4" })
      ]
    }
  );
}
function u0(e) {
  return /* @__PURE__ */ c.jsxs(
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
        /* @__PURE__ */ c.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
        /* @__PURE__ */ c.jsx("circle", { cx: "9", cy: "7", r: "4" }),
        /* @__PURE__ */ c.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
        /* @__PURE__ */ c.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
      ]
    }
  );
}
function Wi(e) {
  return /* @__PURE__ */ c.jsxs(
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
        /* @__PURE__ */ c.jsx("path", { d: "M5 12h18" }),
        /* @__PURE__ */ c.jsx("path", { d: "M18 5l7 7-7 7" })
      ]
    }
  );
}
function So(e) {
  return /* @__PURE__ */ c.jsxs(
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
        /* @__PURE__ */ c.jsx("path", { d: "M25 12H7" }),
        /* @__PURE__ */ c.jsx("path", { d: "M12 5L5 12l7 7" })
      ]
    }
  );
}
function z2(e) {
  return /* @__PURE__ */ c.jsx(
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
      children: /* @__PURE__ */ c.jsx("path", { d: "M5 12h20" })
    }
  );
}
function H2(e) {
  return /* @__PURE__ */ c.jsx(
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
      children: /* @__PURE__ */ c.jsx("path", { d: "M12 5v14M5 12h14" })
    }
  );
}
function V2(e) {
  return /* @__PURE__ */ c.jsxs(
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
        /* @__PURE__ */ c.jsx("path", { d: "M12 8v8M8 12l4-4 4 4" }),
        /* @__PURE__ */ c.jsx("path", { d: "M12 16V8" })
      ]
    }
  );
}
function ae(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function St(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function tt(e, t) {
  const n = ae(e);
  return isNaN(t) ? St(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Ht(e, t) {
  const n = ae(e);
  if (isNaN(t)) return St(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = St(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const i = o.getDate();
  return r >= i ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const pf = 6048e5, U2 = 864e5;
let Y2 = {};
function va() {
  return Y2;
}
function an(e, t) {
  var l, s, u, d;
  const n = va(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((s = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : s.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ae(e), i = o.getDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function Qr(e) {
  return an(e, { weekStartsOn: 1 });
}
function c0(e) {
  const t = ae(e), n = t.getFullYear(), r = St(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = Qr(r), i = St(e, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const a = Qr(i);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= a.getTime() ? n : n - 1;
}
function Uo(e) {
  const t = ae(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Gl(e) {
  const t = ae(e), n = new Date(
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
function tn(e, t) {
  const n = Uo(e), r = Uo(t), o = +n - Gl(n), i = +r - Gl(r);
  return Math.round((o - i) / U2);
}
function K2(e) {
  const t = c0(e), n = St(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Qr(n);
}
function Kc(e, t) {
  const n = t * 7;
  return tt(e, n);
}
function Q2(e, t) {
  return Ht(e, t * 12);
}
function X2(e) {
  let t;
  return e.forEach(function(n) {
    const r = ae(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function G2(e) {
  let t;
  return e.forEach((n) => {
    const r = ae(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function ct(e, t) {
  const n = Uo(e), r = Uo(t);
  return +n == +r;
}
function mf(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function q2(e) {
  if (!mf(e) && typeof e != "number")
    return !1;
  const t = ae(e);
  return !isNaN(Number(t));
}
function la(e, t) {
  const n = ae(e), r = ae(t), o = n.getFullYear() - r.getFullYear(), i = n.getMonth() - r.getMonth();
  return o * 12 + i;
}
function J2(e, t, n) {
  const r = an(e, n), o = an(t, n), i = +r - Gl(r), a = +o - Gl(o);
  return Math.round((i - a) / pf);
}
function hf(e) {
  const t = ae(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function mt(e) {
  const t = ae(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function d0(e) {
  const t = ae(e), n = St(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function vf(e, t) {
  var l, s, u, d;
  const n = va(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((s = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : s.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ae(e), i = o.getDay(), a = (i < r ? -7 : 0) + 6 - (i - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function f0(e) {
  return vf(e, { weekStartsOn: 1 });
}
const Z2 = {
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
}, eE = (e, t, n) => {
  let r;
  const o = Z2[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function ku(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const tE = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, nE = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, rE = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, oE = {
  date: ku({
    formats: tE,
    defaultWidth: "full"
  }),
  time: ku({
    formats: nE,
    defaultWidth: "full"
  }),
  dateTime: ku({
    formats: rE,
    defaultWidth: "full"
  })
}, iE = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, aE = (e, t, n, r) => iE[e];
function xi(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[l] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[l] || e.values[a];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
const lE = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, sE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, uE = {
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
}, cE = {
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
}, dE = {
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
}, fE = {
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
}, pE = (e, t) => {
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
}, mE = {
  ordinalNumber: pE,
  era: xi({
    values: lE,
    defaultWidth: "wide"
  }),
  quarter: xi({
    values: sE,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: xi({
    values: uE,
    defaultWidth: "wide"
  }),
  day: xi({
    values: cE,
    defaultWidth: "wide"
  }),
  dayPeriod: xi({
    values: dE,
    defaultWidth: "wide",
    formattingValues: fE,
    defaultFormattingWidth: "wide"
  })
};
function Ci(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(l) ? vE(l, (p) => p.test(a)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      hE(l, (p) => p.test(a))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(s) : s, u = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(u)
    ) : u;
    const d = t.slice(a.length);
    return { value: u, rest: d };
  };
}
function hE(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function vE(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function gE(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const l = t.slice(o.length);
    return { value: a, rest: l };
  };
}
const yE = /^(\d+)(th|st|nd|rd)?/i, DE = /\d+/i, wE = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, xE = {
  any: [/^b/i, /^(a|c)/i]
}, CE = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, EE = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, SE = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, bE = {
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
}, FE = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, kE = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, NE = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, PE = {
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
}, _E = {
  ordinalNumber: gE({
    matchPattern: yE,
    parsePattern: DE,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ci({
    matchPatterns: wE,
    defaultMatchWidth: "wide",
    parsePatterns: xE,
    defaultParseWidth: "any"
  }),
  quarter: Ci({
    matchPatterns: CE,
    defaultMatchWidth: "wide",
    parsePatterns: EE,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ci({
    matchPatterns: SE,
    defaultMatchWidth: "wide",
    parsePatterns: bE,
    defaultParseWidth: "any"
  }),
  day: Ci({
    matchPatterns: FE,
    defaultMatchWidth: "wide",
    parsePatterns: kE,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ci({
    matchPatterns: NE,
    defaultMatchWidth: "any",
    parsePatterns: PE,
    defaultParseWidth: "any"
  })
}, p0 = {
  code: "en-US",
  formatDistance: eE,
  formatLong: oE,
  formatRelative: aE,
  localize: mE,
  match: _E,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function jE(e) {
  const t = ae(e);
  return tn(t, d0(t)) + 1;
}
function m0(e) {
  const t = ae(e), n = +Qr(t) - +K2(t);
  return Math.round(n / pf) + 1;
}
function h0(e, t) {
  var d, p, f, m;
  const n = ae(e), r = n.getFullYear(), o = va(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((m = (f = o.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, a = St(e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const l = an(a, t), s = St(e, 0);
  s.setFullYear(r, 0, i), s.setHours(0, 0, 0, 0);
  const u = an(s, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function AE(e, t) {
  var l, s, u, d;
  const n = va(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((s = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : s.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = h0(e, t), i = St(e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), an(i, t);
}
function v0(e, t) {
  const n = ae(e), r = +an(n, t) - +AE(n, t);
  return Math.round(r / pf) + 1;
}
function se(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Kn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return se(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : se(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return se(e.getDate(), t.length);
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
    return se(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return se(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return se(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return se(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return se(o, t.length);
  }
}, lo = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, _m = {
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
    return Kn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = h0(e, r), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = i % 100;
      return se(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : se(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = c0(e);
    return se(n, t.length);
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
    return se(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return se(r, 2);
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
        return se(r, 2);
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
        return Kn.M(e, t);
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
        return se(r + 1, 2);
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
    const o = v0(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : se(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = m0(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : se(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Kn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = jE(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : se(r, t.length);
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
    const o = e.getDay(), i = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return se(i, 2);
      case "eo":
        return n.ordinalNumber(i, { unit: "day" });
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
    const o = e.getDay(), i = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return se(i, t.length);
      case "co":
        return n.ordinalNumber(i, { unit: "day" });
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
        return se(o, t.length);
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
    switch (r === 12 ? o = lo.noon : r === 0 ? o = lo.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = lo.evening : r >= 12 ? o = lo.afternoon : r >= 4 ? o = lo.morning : o = lo.night, t) {
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
    return Kn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Kn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : se(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : se(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Kn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Kn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Kn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Am(r);
      case "XXXX":
      case "XX":
        return Pr(r);
      case "XXXXX":
      case "XXX":
      default:
        return Pr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Am(r);
      case "xxxx":
      case "xx":
        return Pr(r);
      case "xxxxx":
      case "xxx":
      default:
        return Pr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + jm(r, ":");
      case "OOOO":
      default:
        return "GMT" + Pr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + jm(r, ":");
      case "zzzz":
      default:
        return "GMT" + Pr(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return se(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return se(r, t.length);
  }
};
function jm(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + se(i, 2);
}
function Am(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + se(Math.abs(e) / 60, 2) : Pr(e, t);
}
function Pr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = se(Math.trunc(r / 60), 2), i = se(r % 60, 2);
  return n + o + t + i;
}
const Om = (e, t) => {
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
}, g0 = (e, t) => {
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
}, OE = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Om(e, t);
  let i;
  switch (r) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", Om(r, t)).replace("{{time}}", g0(o, t));
}, TE = {
  p: g0,
  P: OE
}, RE = /^D+$/, ME = /^Y+$/, LE = ["D", "DD", "YY", "YYYY"];
function IE(e) {
  return RE.test(e);
}
function BE(e) {
  return ME.test(e);
}
function $E(e, t, n) {
  const r = WE(e, t, n);
  if (console.warn(r), LE.includes(e)) throw new RangeError(r);
}
function WE(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const zE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, HE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, VE = /^'([^]*?)'?$/, UE = /''/g, YE = /[a-zA-Z]/;
function _n(e, t, n) {
  var d, p, f, m, h, g, x, y;
  const r = va(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? p0, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((m = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((g = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : g.weekStartsOn) ?? r.weekStartsOn ?? ((y = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : y.weekStartsOn) ?? 0, l = ae(e);
  if (!q2(l))
    throw new RangeError("Invalid time value");
  let s = t.match(HE).map((v) => {
    const w = v[0];
    if (w === "p" || w === "P") {
      const C = TE[w];
      return C(v, o.formatLong);
    }
    return v;
  }).join("").match(zE).map((v) => {
    if (v === "''")
      return { isToken: !1, value: "'" };
    const w = v[0];
    if (w === "'")
      return { isToken: !1, value: KE(v) };
    if (_m[w])
      return { isToken: !0, value: v };
    if (w.match(YE))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + w + "`"
      );
    return { isToken: !1, value: v };
  });
  o.localize.preprocessor && (s = o.localize.preprocessor(l, s));
  const u = {
    firstWeekContainsDate: i,
    weekStartsOn: a,
    locale: o
  };
  return s.map((v) => {
    if (!v.isToken) return v.value;
    const w = v.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && BE(w) || !(n != null && n.useAdditionalDayOfYearTokens) && IE(w)) && $E(w, t, String(e));
    const C = _m[w[0]];
    return C(l, w, o.localize, u);
  }).join("");
}
function KE(e) {
  const t = e.match(VE);
  return t ? t[1].replace(UE, "'") : e;
}
function QE(e) {
  const t = ae(e), n = t.getFullYear(), r = t.getMonth(), o = St(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function XE(e) {
  return Math.trunc(+ae(e) / 1e3);
}
function GE(e) {
  const t = ae(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function qE(e, t) {
  return J2(
    GE(e),
    mt(e),
    t
  ) + 1;
}
function Qc(e, t) {
  const n = ae(e), r = ae(t);
  return n.getTime() > r.getTime();
}
function y0(e, t) {
  const n = ae(e), r = ae(t);
  return +n < +r;
}
function gf(e, t) {
  const n = ae(e), r = ae(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function JE(e, t) {
  const n = ae(e), r = ae(t);
  return n.getFullYear() === r.getFullYear();
}
function Nu(e, t) {
  return tt(e, -t);
}
function Pu(e, t) {
  const n = ae(e), r = n.getFullYear(), o = n.getDate(), i = St(e, 0);
  i.setFullYear(r, t, 15), i.setHours(0, 0, 0, 0);
  const a = QE(i);
  return n.setMonth(t, Math.min(o, a)), n;
}
function Tm(e, t) {
  const n = ae(e);
  return isNaN(+n) ? St(e, NaN) : (n.setFullYear(t), n);
}
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function ZE(e, t) {
  const n = D.createContext(t);
  function r(i) {
    const { children: a, ...l } = i, s = D.useMemo(() => l, Object.values(l));
    return /* @__PURE__ */ c.jsx(n.Provider, { value: s, children: a });
  }
  function o(i) {
    const a = D.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [r, o];
}
function wr(e, t = []) {
  let n = [];
  function r(i, a) {
    const l = D.createContext(a), s = n.length;
    n = [...n, a];
    function u(p) {
      const { scope: f, children: m, ...h } = p, g = (f == null ? void 0 : f[e][s]) || l, x = D.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ c.jsx(g.Provider, { value: x, children: m });
    }
    function d(p, f) {
      const m = (f == null ? void 0 : f[e][s]) || l, h = D.useContext(m);
      if (h) return h;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return u.displayName = i + "Provider", [u, d];
  }
  const o = () => {
    const i = n.map((a) => D.createContext(a));
    return function(l) {
      const s = (l == null ? void 0 : l[e]) || i;
      return D.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: s } }),
        [l, s]
      );
    };
  };
  return o.scopeName = e, [r, eS(o, ...t)];
}
function eS(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((l, { useScope: s, scopeName: u }) => {
        const p = s(i)[`__scope${u}`];
        return { ...l, ...p };
      }, {});
      return D.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Je = globalThis != null && globalThis.document ? D.useLayoutEffect : () => {
}, tS = H1.useId || (() => {
}), nS = 0;
function $r(e) {
  const [t, n] = D.useState(tS());
  return Je(() => {
    n((r) => r ?? String(nS++));
  }, [e]), t ? `radix-${t}` : "";
}
function Ge(e) {
  const t = D.useRef(e);
  return D.useEffect(() => {
    t.current = e;
  }), D.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Yo({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = rS({ defaultProp: t, onChange: n }), i = e !== void 0, a = i ? e : r, l = Ge(n), s = D.useCallback(
    (u) => {
      if (i) {
        const p = typeof u == "function" ? u(e) : u;
        p !== e && l(p);
      } else
        o(u);
    },
    [i, e, o, l]
  );
  return [a, s];
}
function rS({
  defaultProp: e,
  onChange: t
}) {
  const n = D.useState(e), [r] = n, o = D.useRef(r), i = Ge(t);
  return D.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
var oS = [
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
], ee = oS.reduce((e, t) => {
  const n = D.forwardRef((r, o) => {
    const { asChild: i, ...a } = r, l = i ? fr : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...a, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function iS(e, t) {
  e && to.flushSync(() => e.dispatchEvent(t));
}
function aS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ge(e);
  D.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var lS = "DismissableLayer", Xc = "dismissableLayer.update", sS = "dismissableLayer.pointerDownOutside", uS = "dismissableLayer.focusOutside", Rm, D0 = D.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ss = D.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: l,
      ...s
    } = e, u = D.useContext(D0), [d, p] = D.useState(null), f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = D.useState({}), h = le(t, (b) => p(b)), g = Array.from(u.layers), [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = g.indexOf(x), v = d ? g.indexOf(d) : -1, w = u.layersWithOutsidePointerEventsDisabled.size > 0, C = v >= y, E = fS((b) => {
      const k = b.target, P = [...u.branches].some((N) => N.contains(k));
      !C || P || (o == null || o(b), a == null || a(b), b.defaultPrevented || l == null || l());
    }, f), S = pS((b) => {
      const k = b.target;
      [...u.branches].some((N) => N.contains(k)) || (i == null || i(b), a == null || a(b), b.defaultPrevented || l == null || l());
    }, f);
    return aS((b) => {
      v === u.layers.size - 1 && (r == null || r(b), !b.defaultPrevented && l && (b.preventDefault(), l()));
    }, f), D.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Rm = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Mm(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Rm);
        };
    }, [d, f, n, u]), D.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Mm());
    }, [d, u]), D.useEffect(() => {
      const b = () => m({});
      return document.addEventListener(Xc, b), () => document.removeEventListener(Xc, b);
    }, []), /* @__PURE__ */ c.jsx(
      ee.div,
      {
        ...s,
        ref: h,
        style: {
          pointerEvents: w ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: J(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: J(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: J(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
Ss.displayName = lS;
var cS = "DismissableLayerBranch", dS = D.forwardRef((e, t) => {
  const n = D.useContext(D0), r = D.useRef(null), o = le(t, r);
  return D.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(ee.div, { ...e, ref: o });
});
dS.displayName = cS;
function fS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ge(e), r = D.useRef(!1), o = D.useRef(() => {
  });
  return D.useEffect(() => {
    const i = (l) => {
      if (l.target && !r.current) {
        let s = function() {
          w0(
            sS,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = s, t.addEventListener("click", o.current, { once: !0 })) : s();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function pS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ge(e), r = D.useRef(!1);
  return D.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && w0(uS, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Mm() {
  const e = new CustomEvent(Xc);
  document.dispatchEvent(e);
}
function w0(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? iS(o, i) : o.dispatchEvent(i);
}
var _u = "focusScope.autoFocusOnMount", ju = "focusScope.autoFocusOnUnmount", Lm = { bubbles: !1, cancelable: !0 }, mS = "FocusScope", bs = D.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [l, s] = D.useState(null), u = Ge(o), d = Ge(i), p = D.useRef(null), f = le(t, (g) => s(g)), m = D.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  D.useEffect(() => {
    if (r) {
      let g = function(w) {
        if (m.paused || !l) return;
        const C = w.target;
        l.contains(C) ? p.current = C : Qn(p.current, { select: !0 });
      }, x = function(w) {
        if (m.paused || !l) return;
        const C = w.relatedTarget;
        C !== null && (l.contains(C) || Qn(p.current, { select: !0 }));
      }, y = function(w) {
        if (document.activeElement === document.body)
          for (const E of w)
            E.removedNodes.length > 0 && Qn(l);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", x);
      const v = new MutationObserver(y);
      return l && v.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", x), v.disconnect();
      };
    }
  }, [r, l, m.paused]), D.useEffect(() => {
    if (l) {
      Bm.add(m);
      const g = document.activeElement;
      if (!l.contains(g)) {
        const y = new CustomEvent(_u, Lm);
        l.addEventListener(_u, u), l.dispatchEvent(y), y.defaultPrevented || (hS(wS(x0(l)), { select: !0 }), document.activeElement === g && Qn(l));
      }
      return () => {
        l.removeEventListener(_u, u), setTimeout(() => {
          const y = new CustomEvent(ju, Lm);
          l.addEventListener(ju, d), l.dispatchEvent(y), y.defaultPrevented || Qn(g ?? document.body, { select: !0 }), l.removeEventListener(ju, d), Bm.remove(m);
        }, 0);
      };
    }
  }, [l, u, d, m]);
  const h = D.useCallback(
    (g) => {
      if (!n && !r || m.paused) return;
      const x = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, y = document.activeElement;
      if (x && y) {
        const v = g.currentTarget, [w, C] = vS(v);
        w && C ? !g.shiftKey && y === C ? (g.preventDefault(), n && Qn(w, { select: !0 })) : g.shiftKey && y === w && (g.preventDefault(), n && Qn(C, { select: !0 })) : y === v && g.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ c.jsx(ee.div, { tabIndex: -1, ...a, ref: f, onKeyDown: h });
});
bs.displayName = mS;
function hS(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Qn(r, { select: t }), document.activeElement !== n) return;
}
function vS(e) {
  const t = x0(e), n = Im(t, e), r = Im(t.reverse(), e);
  return [n, r];
}
function x0(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Im(e, t) {
  for (const n of e)
    if (!gS(n, { upTo: t })) return n;
}
function gS(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function yS(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && yS(e) && t && e.select();
  }
}
var Bm = DS();
function DS() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = $m(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = $m(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function $m(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function wS(e) {
  return e.filter((t) => t.tagName !== "A");
}
var xS = "Portal", Fs = D.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [o, i] = D.useState(!1);
  Je(() => i(!0), []);
  const a = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return a ? e2.createPortal(/* @__PURE__ */ c.jsx(ee.div, { ...r, ref: t }), a) : null;
});
Fs.displayName = xS;
function CS(e, t) {
  return D.useReducer((n, r) => t[n][r] ?? n, e);
}
var Kt = (e) => {
  const { present: t, children: n } = e, r = ES(t), o = typeof n == "function" ? n({ present: r.isPresent }) : D.Children.only(n), i = le(r.ref, SS(o));
  return typeof n == "function" || r.isPresent ? D.cloneElement(o, { ref: i }) : null;
};
Kt.displayName = "Presence";
function ES(e) {
  const [t, n] = D.useState(), r = D.useRef({}), o = D.useRef(e), i = D.useRef("none"), a = e ? "mounted" : "unmounted", [l, s] = CS(a, {
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
  return D.useEffect(() => {
    const u = Ga(r.current);
    i.current = l === "mounted" ? u : "none";
  }, [l]), Je(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const f = i.current, m = Ga(u);
      e ? s("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? s("UNMOUNT") : s(d && f !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, s]), Je(() => {
    if (t) {
      const u = (p) => {
        const m = Ga(r.current).includes(p.animationName);
        p.target === t && m && to.flushSync(() => s("ANIMATION_END"));
      }, d = (p) => {
        p.target === t && (i.current = Ga(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      s("ANIMATION_END");
  }, [t, s]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: D.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function Ga(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function SS(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Au = 0;
function yf() {
  D.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Wm()), document.body.insertAdjacentElement("beforeend", e[1] ?? Wm()), Au++, () => {
      Au === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Au--;
    };
  }, []);
}
function Wm() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var en = function() {
  return en = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, en.apply(this, arguments);
};
function C0(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function bS(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var yl = "right-scroll-bar-position", Dl = "width-before-scroll-bar", FS = "with-scroll-bars-hidden", kS = "--removed-body-scroll-bar-size";
function Ou(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function NS(e, t) {
  var n = D.useState(function() {
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
var PS = typeof window < "u" ? D.useLayoutEffect : D.useEffect, zm = /* @__PURE__ */ new WeakMap();
function _S(e, t) {
  var n = NS(null, function(r) {
    return e.forEach(function(o) {
      return Ou(o, r);
    });
  });
  return PS(function() {
    var r = zm.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), a = n.current;
      o.forEach(function(l) {
        i.has(l) || Ou(l, null);
      }), i.forEach(function(l) {
        o.has(l) || Ou(l, a);
      });
    }
    zm.set(n, e);
  }, [e]), n;
}
function jS(e) {
  return e;
}
function AS(e, t) {
  t === void 0 && (t = jS);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return n.push(a), function() {
        n = n.filter(function(l) {
          return l !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(i);
      }
      n = {
        push: function(l) {
          return i(l);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (n.length) {
        var l = n;
        n = [], l.forEach(i), a = n;
      }
      var s = function() {
        var d = a;
        a = [], d.forEach(i);
      }, u = function() {
        return Promise.resolve().then(s);
      };
      u(), n = {
        push: function(d) {
          a.push(d), u();
        },
        filter: function(d) {
          return a = a.filter(d), n;
        }
      };
    }
  };
  return o;
}
function OS(e) {
  e === void 0 && (e = {});
  var t = AS(null);
  return t.options = en({ async: !0, ssr: !1 }, e), t;
}
var E0 = function(e) {
  var t = e.sideCar, n = C0(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return D.createElement(r, en({}, n));
};
E0.isSideCarExport = !0;
function TS(e, t) {
  return e.useMedium(t), E0;
}
var S0 = OS(), Tu = function() {
}, ks = D.forwardRef(function(e, t) {
  var n = D.useRef(null), r = D.useState({
    onScrollCapture: Tu,
    onWheelCapture: Tu,
    onTouchMoveCapture: Tu
  }), o = r[0], i = r[1], a = e.forwardProps, l = e.children, s = e.className, u = e.removeScrollBar, d = e.enabled, p = e.shards, f = e.sideCar, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, x = e.as, y = x === void 0 ? "div" : x, v = e.gapMode, w = C0(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = f, E = _S([n, t]), S = en(en({}, w), o);
  return D.createElement(
    D.Fragment,
    null,
    d && D.createElement(C, { sideCar: S0, removeScrollBar: u, shards: p, noIsolation: m, inert: h, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: v }),
    a ? D.cloneElement(D.Children.only(l), en(en({}, S), { ref: E })) : D.createElement(y, en({}, S, { className: s, ref: E }), l)
  );
});
ks.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ks.classNames = {
  fullWidth: Dl,
  zeroRight: yl
};
var RS = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function MS() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = RS();
  return t && e.setAttribute("nonce", t), e;
}
function LS(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function IS(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var BS = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = MS()) && (LS(t, n), IS(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, $S = function() {
  var e = BS();
  return function(t, n) {
    D.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, b0 = function() {
  var e = $S(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, WS = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ru = function(e) {
  return parseInt(e || "", 10) || 0;
}, zS = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ru(n), Ru(r), Ru(o)];
}, HS = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return WS;
  var t = zS(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, VS = b0(), Mo = "data-scroll-locked", US = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(FS, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(Mo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(yl, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Dl, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(yl, " .").concat(yl, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Dl, " .").concat(Dl, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Mo, `] {
    `).concat(kS, ": ").concat(l, `px;
  }
`);
}, Hm = function() {
  var e = parseInt(document.body.getAttribute(Mo) || "0", 10);
  return isFinite(e) ? e : 0;
}, YS = function() {
  D.useEffect(function() {
    return document.body.setAttribute(Mo, (Hm() + 1).toString()), function() {
      var e = Hm() - 1;
      e <= 0 ? document.body.removeAttribute(Mo) : document.body.setAttribute(Mo, e.toString());
    };
  }, []);
}, KS = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  YS();
  var i = D.useMemo(function() {
    return HS(o);
  }, [o]);
  return D.createElement(VS, { styles: US(i, !t, o, n ? "" : "!important") });
}, Gc = !1;
if (typeof window < "u")
  try {
    var qa = Object.defineProperty({}, "passive", {
      get: function() {
        return Gc = !0, !0;
      }
    });
    window.addEventListener("test", qa, qa), window.removeEventListener("test", qa, qa);
  } catch {
    Gc = !1;
  }
var so = Gc ? { passive: !1 } : !1, QS = function(e) {
  return e.tagName === "TEXTAREA";
}, F0 = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !QS(e) && n[t] === "visible")
  );
}, XS = function(e) {
  return F0(e, "overflowY");
}, GS = function(e) {
  return F0(e, "overflowX");
}, Vm = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = k0(e, r);
    if (o) {
      var i = N0(e, r), a = i[1], l = i[2];
      if (a > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, qS = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, JS = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, k0 = function(e, t) {
  return e === "v" ? XS(t) : GS(t);
}, N0 = function(e, t) {
  return e === "v" ? qS(t) : JS(t);
}, ZS = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, eb = function(e, t, n, r, o) {
  var i = ZS(e, window.getComputedStyle(t).direction), a = i * r, l = n.target, s = t.contains(l), u = !1, d = a > 0, p = 0, f = 0;
  do {
    var m = N0(e, l), h = m[0], g = m[1], x = m[2], y = g - x - i * h;
    (h || y) && k0(e, l) && (p += y, f += h), l instanceof ShadowRoot ? l = l.host : l = l.parentNode;
  } while (
    // portaled content
    !s && l !== document.body || // self content
    s && (t.contains(l) || t === l)
  );
  return (d && (Math.abs(p) < 1 || !o) || !d && (Math.abs(f) < 1 || !o)) && (u = !0), u;
}, Ja = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Um = function(e) {
  return [e.deltaX, e.deltaY];
}, Ym = function(e) {
  return e && "current" in e ? e.current : e;
}, tb = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, nb = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, rb = 0, uo = [];
function ob(e) {
  var t = D.useRef([]), n = D.useRef([0, 0]), r = D.useRef(), o = D.useState(rb++)[0], i = D.useState(b0)[0], a = D.useRef(e);
  D.useEffect(function() {
    a.current = e;
  }, [e]), D.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = bS([e.lockRef.current], (e.shards || []).map(Ym), !0).filter(Boolean);
      return g.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = D.useCallback(function(g, x) {
    if ("touches" in g && g.touches.length === 2)
      return !a.current.allowPinchZoom;
    var y = Ja(g), v = n.current, w = "deltaX" in g ? g.deltaX : v[0] - y[0], C = "deltaY" in g ? g.deltaY : v[1] - y[1], E, S = g.target, b = Math.abs(w) > Math.abs(C) ? "h" : "v";
    if ("touches" in g && b === "h" && S.type === "range")
      return !1;
    var k = Vm(b, S);
    if (!k)
      return !0;
    if (k ? E = b : (E = b === "v" ? "h" : "v", k = Vm(b, S)), !k)
      return !1;
    if (!r.current && "changedTouches" in g && (w || C) && (r.current = E), !E)
      return !0;
    var P = r.current || E;
    return eb(P, x, g, P === "h" ? w : C, !0);
  }, []), s = D.useCallback(function(g) {
    var x = g;
    if (!(!uo.length || uo[uo.length - 1] !== i)) {
      var y = "deltaY" in x ? Um(x) : Ja(x), v = t.current.filter(function(E) {
        return E.name === x.type && (E.target === x.target || x.target === E.shadowParent) && tb(E.delta, y);
      })[0];
      if (v && v.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!v) {
        var w = (a.current.shards || []).map(Ym).filter(Boolean).filter(function(E) {
          return E.contains(x.target);
        }), C = w.length > 0 ? l(x, w[0]) : !a.current.noIsolation;
        C && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = D.useCallback(function(g, x, y, v) {
    var w = { name: g, delta: x, target: y, should: v, shadowParent: ib(y) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== w;
      });
    }, 1);
  }, []), d = D.useCallback(function(g) {
    n.current = Ja(g), r.current = void 0;
  }, []), p = D.useCallback(function(g) {
    u(g.type, Um(g), g.target, l(g, e.lockRef.current));
  }, []), f = D.useCallback(function(g) {
    u(g.type, Ja(g), g.target, l(g, e.lockRef.current));
  }, []);
  D.useEffect(function() {
    return uo.push(i), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", s, so), document.addEventListener("touchmove", s, so), document.addEventListener("touchstart", d, so), function() {
      uo = uo.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", s, so), document.removeEventListener("touchmove", s, so), document.removeEventListener("touchstart", d, so);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return D.createElement(
    D.Fragment,
    null,
    h ? D.createElement(i, { styles: nb(o) }) : null,
    m ? D.createElement(KS, { gapMode: e.gapMode }) : null
  );
}
function ib(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ab = TS(S0, ob);
var Ns = D.forwardRef(function(e, t) {
  return D.createElement(ks, en({}, e, { ref: t, sideCar: ab }));
});
Ns.classNames = ks.classNames;
var lb = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, co = /* @__PURE__ */ new WeakMap(), Za = /* @__PURE__ */ new WeakMap(), el = {}, Mu = 0, P0 = function(e) {
  return e && (e.host || P0(e.parentNode));
}, sb = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = P0(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ub = function(e, t, n, r) {
  var o = sb(t, Array.isArray(e) ? e : [e]);
  el[n] || (el[n] = /* @__PURE__ */ new WeakMap());
  var i = el[n], a = [], l = /* @__PURE__ */ new Set(), s = new Set(o), u = function(p) {
    !p || l.has(p) || (l.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var d = function(p) {
    !p || s.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (l.has(f))
        d(f);
      else
        try {
          var m = f.getAttribute(r), h = m !== null && m !== "false", g = (co.get(f) || 0) + 1, x = (i.get(f) || 0) + 1;
          co.set(f, g), i.set(f, x), a.push(f), g === 1 && h && Za.set(f, !0), x === 1 && f.setAttribute(n, "true"), h || f.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", f, y);
        }
    });
  };
  return d(t), l.clear(), Mu++, function() {
    a.forEach(function(p) {
      var f = co.get(p) - 1, m = i.get(p) - 1;
      co.set(p, f), i.set(p, m), f || (Za.has(p) || p.removeAttribute(r), Za.delete(p)), m || p.removeAttribute(n);
    }), Mu--, Mu || (co = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ new WeakMap(), Za = /* @__PURE__ */ new WeakMap(), el = {});
  };
}, Df = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = lb(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), ub(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, wf = "Dialog", [_0, O4] = wr(wf), [cb, Qt] = _0(wf), j0 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, l = D.useRef(null), s = D.useRef(null), [u = !1, d] = Yo({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ c.jsx(
    cb,
    {
      scope: t,
      triggerRef: l,
      contentRef: s,
      contentId: $r(),
      titleId: $r(),
      descriptionId: $r(),
      open: u,
      onOpenChange: d,
      onOpenToggle: D.useCallback(() => d((p) => !p), [d]),
      modal: a,
      children: n
    }
  );
};
j0.displayName = wf;
var A0 = "DialogTrigger", O0 = D.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(A0, n), i = le(t, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      ee.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ef(o.open),
        ...r,
        ref: i,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
O0.displayName = A0;
var xf = "DialogPortal", [db, T0] = _0(xf, {
  forceMount: void 0
}), R0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Qt(xf, t);
  return /* @__PURE__ */ c.jsx(db, { scope: t, forceMount: n, children: D.Children.map(r, (a) => /* @__PURE__ */ c.jsx(Kt, { present: n || i.open, children: /* @__PURE__ */ c.jsx(Fs, { asChild: !0, container: o, children: a }) })) });
};
R0.displayName = xf;
var ql = "DialogOverlay", M0 = D.forwardRef(
  (e, t) => {
    const n = T0(ql, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Qt(ql, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ c.jsx(Kt, { present: r || i.open, children: /* @__PURE__ */ c.jsx(fb, { ...o, ref: t }) }) : null;
  }
);
M0.displayName = ql;
var fb = D.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(ql, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Ns, { as: fr, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        ee.div,
        {
          "data-state": Ef(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Xr = "DialogContent", L0 = D.forwardRef(
  (e, t) => {
    const n = T0(Xr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Qt(Xr, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(Kt, { present: r || i.open, children: i.modal ? /* @__PURE__ */ c.jsx(pb, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(mb, { ...o, ref: t }) });
  }
);
L0.displayName = Xr;
var pb = D.forwardRef(
  (e, t) => {
    const n = Qt(Xr, e.__scopeDialog), r = D.useRef(null), o = le(t, n.contentRef, r);
    return D.useEffect(() => {
      const i = r.current;
      if (i) return Df(i);
    }, []), /* @__PURE__ */ c.jsx(
      I0,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: J(e.onCloseAutoFocus, (i) => {
          var a;
          i.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: J(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: J(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), mb = D.forwardRef(
  (e, t) => {
    const n = Qt(Xr, e.__scopeDialog), r = D.useRef(!1), o = D.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      I0,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var a, l;
          (a = e.onCloseAutoFocus) == null || a.call(e, i), i.defaultPrevented || (r.current || (l = n.triggerRef.current) == null || l.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var s, u;
          (s = e.onInteractOutside) == null || s.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = i.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), I0 = D.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, l = Qt(Xr, n), s = D.useRef(null), u = le(t, s);
    return yf(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        bs,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ c.jsx(
            Ss,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": Ef(l.open),
              ...a,
              ref: u,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(hb, { titleId: l.titleId }),
        /* @__PURE__ */ c.jsx(gb, { contentRef: s, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), Cf = "DialogTitle", B0 = D.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(Cf, n);
    return /* @__PURE__ */ c.jsx(ee.h2, { id: o.titleId, ...r, ref: t });
  }
);
B0.displayName = Cf;
var $0 = "DialogDescription", W0 = D.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt($0, n);
    return /* @__PURE__ */ c.jsx(ee.p, { id: o.descriptionId, ...r, ref: t });
  }
);
W0.displayName = $0;
var z0 = "DialogClose", H0 = D.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(z0, n);
    return /* @__PURE__ */ c.jsx(
      ee.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: J(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
H0.displayName = z0;
function Ef(e) {
  return e ? "open" : "closed";
}
var V0 = "DialogTitleWarning", [T4, U0] = ZE(V0, {
  contentName: Xr,
  titleName: Cf,
  docsSlug: "dialog"
}), hb = ({ titleId: e }) => {
  const t = U0(V0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return D.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, vb = "DialogDescriptionWarning", gb = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${U0(vb).contentName}}.`;
  return D.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Y0 = j0, K0 = O0, Q0 = R0, Sf = M0, bf = L0, Ff = B0, kf = W0, yb = H0;
function Db(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const X0 = M.createContext({
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
}), Ps = () => {
  const e = M.useContext(X0);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
Db("[vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left]{overflow-x:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]::after{content:'';position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-handle]{display:block;position:relative;opacity:.8;margin-left:auto;margin-right:auto;height:5px;width:56px;border-radius:1rem;touch-action:pan-y;cursor:grab}[vaul-handle]:active,[vaul-handle]:hover{opacity:1}[vaul-handle]:active{cursor:grabbing}[vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible=false]){opacity:1}@media (hover:hover) and (pointer:fine){[vaul-drawer]{user-select:none}}@media (pointer:fine){[vaul-handle-hitarea]:{width:100%;height:100%}}");
const G0 = typeof window < "u" ? D.useLayoutEffect : D.useEffect;
function qc(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function wb() {
  return Nf(/^Mac/);
}
function xb() {
  return Nf(/^iPhone/);
}
function Cb() {
  return Nf(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  wb() && navigator.maxTouchPoints > 1;
}
function q0() {
  return xb() || Cb();
}
function Nf(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const Lu = typeof document < "u" && window.visualViewport;
function Km(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function J0(e) {
  for (Km(e) && (e = e.parentElement); e && !Km(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const Eb = /* @__PURE__ */ new Set([
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
let tl = 0, Iu;
function Sb(e = {}) {
  let { isDisabled: t } = e;
  G0(() => {
    if (!t)
      return tl++, tl === 1 && (q0() ? Iu = Fb() : Iu = bb()), () => {
        tl--, tl === 0 && Iu();
      };
  }, [
    t
  ]);
}
function bb() {
  return qc(Z0(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function Fb() {
  let e, t = 0, n = (p) => {
    e = J0(p.target), !(e === document.documentElement && e === document.body) && (t = p.changedTouches[0].pageY);
  }, r = (p) => {
    if (!e || e === document.documentElement || e === document.body) {
      p.preventDefault();
      return;
    }
    let f = p.changedTouches[0].pageY, m = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    h !== 0 && ((m <= 0 && f > t || m >= h && f < t) && p.preventDefault(), t = f);
  }, o = (p) => {
    let f = p.target;
    Jc(f) && f !== document.activeElement && (p.preventDefault(), f.style.transform = "translateY(-2000px)", f.focus(), requestAnimationFrame(() => {
      f.style.transform = "";
    }));
  }, i = (p) => {
    let f = p.target;
    Jc(f) && (f.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      f.style.transform = "", Lu && (Lu.height < window.innerHeight ? requestAnimationFrame(() => {
        Qm(f);
      }) : Lu.addEventListener("resize", () => Qm(f), {
        once: !0
      }));
    }));
  }, a = () => {
    window.scrollTo(0, 0);
  }, l = window.pageXOffset, s = window.pageYOffset, u = qc(Z0(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let d = qc(Ei(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Ei(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), Ei(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), Ei(document, "focus", i, !0), Ei(window, "scroll", a));
  return () => {
    u(), d(), window.scrollTo(l, s);
  };
}
function Z0(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Ei(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Qm(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = J0(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, i = e.getBoundingClientRect().bottom;
      const a = n.getBoundingClientRect().bottom;
      i > a && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function Jc(e) {
  return e instanceof HTMLInputElement && !Eb.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function kb(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Nb(...e) {
  return (t) => e.forEach((n) => kb(n, t));
}
function ey(...e) {
  return D.useCallback(Nb(...e), e);
}
let Si = null;
function Pb({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: i }) {
  const [a, l] = M.useState(() => typeof window < "u" ? window.location.href : ""), s = M.useRef(0), u = M.useCallback(() => {
    if (Si === null && e && !i) {
      Si = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: p, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-s.current}px`,
        left: `${-p}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const m = f - window.innerHeight;
        m && s.current >= f && (document.body.style.top = `${-(s.current + m)}px`);
      }), 300);
    }
  }, [
    e
  ]), d = M.useCallback(() => {
    if (Si !== null && !i) {
      const p = -parseInt(document.body.style.top, 10), f = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Si), window.requestAnimationFrame(() => {
        if (o && a !== window.location.href) {
          l(window.location.href);
          return;
        }
        window.scrollTo(f, p);
      }), Si = null;
    }
  }, [
    a
  ]);
  return M.useEffect(() => {
    function p() {
      s.current = window.scrollY;
    }
    return p(), window.addEventListener("scroll", p), () => {
      window.removeEventListener("scroll", p);
    };
  }, []), M.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && u(), t || window.setTimeout(() => {
      d();
    }, 500)) : d());
  }, [
    e,
    r,
    a,
    t,
    n,
    u,
    d
  ]), {
    restorePositionSetting: d
  };
}
const ty = /* @__PURE__ */ new WeakMap();
function ye(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, i]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, i);
      return;
    }
    r[o] = e.style[o], e.style[o] = i;
  }), !n && ty.set(e, r);
}
function nl(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = ty.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
const Ae = (e) => {
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
function rl(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[Ae(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[Ae(t) ? 5 : 4]) : null);
}
function _b(e) {
  return 8 * (Math.log(e + 1) - 2);
}
const ce = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, ny = 0.4;
function ry(e) {
  const t = M.useRef(e);
  return M.useEffect(() => {
    t.current = e;
  }), M.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function jb({ defaultProp: e, onChange: t }) {
  const n = M.useState(e), [r] = n, o = M.useRef(r), i = ry(t);
  return M.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
function Ab({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = jb({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, a = i ? e : r, l = ry(n), s = M.useCallback((u) => {
    if (i) {
      const p = typeof u == "function" ? u(e) : u;
      p !== e && l(p);
    } else
      o(u);
  }, [
    i,
    e,
    o,
    l
  ]);
  return [
    a,
    s
  ];
}
function Ob({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: i, onSnapPointChange: a, direction: l = "bottom" }) {
  const [s, u] = Ab({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), d = M.useMemo(() => s === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    s
  ]), p = n && n.length > 0 && (i || i === 0) && !Number.isNaN(i) && n[i] === s || !n, f = M.useMemo(() => n == null ? void 0 : n.findIndex((w) => w === s), [
    n,
    s
  ]), m = M.useMemo(() => {
    var w;
    return (w = n == null ? void 0 : n.map((C) => {
      const E = typeof window < "u", S = typeof C == "string";
      let b = 0;
      if (S && (b = parseInt(C, 10)), Ae(l)) {
        const P = S ? b : E ? C * window.innerHeight : 0;
        return E ? l === "bottom" ? window.innerHeight - P : -window.innerHeight + P : P;
      }
      const k = S ? b : E ? C * window.innerWidth : 0;
      return E ? l === "right" ? window.innerWidth - k : -window.innerWidth + k : k;
    })) != null ? w : [];
  }, [
    n
  ]), h = M.useMemo(() => f !== null ? m == null ? void 0 : m[f] : null, [
    m,
    f
  ]), g = M.useCallback((w) => {
    var C;
    const E = (C = m == null ? void 0 : m.findIndex((S) => S === w)) != null ? C : null;
    a(E), ye(r.current, {
      transition: `transform ${ce.DURATION}s cubic-bezier(${ce.EASE.join(",")})`,
      transform: Ae(l) ? `translate3d(0, ${w}px, 0)` : `translate3d(${w}px, 0, 0)`
    }), m && E !== m.length - 1 && E !== i ? ye(o.current, {
      transition: `opacity ${ce.DURATION}s cubic-bezier(${ce.EASE.join(",")})`,
      opacity: "0"
    }) : ye(o.current, {
      transition: `opacity ${ce.DURATION}s cubic-bezier(${ce.EASE.join(",")})`,
      opacity: "1"
    }), u(E !== null ? n == null ? void 0 : n[E] : null);
  }, [
    r.current,
    n,
    m,
    i,
    o,
    u
  ]);
  M.useEffect(() => {
    if (s || e) {
      var w;
      const C = (w = n == null ? void 0 : n.findIndex((E) => E === e || E === s)) != null ? w : -1;
      m && C !== -1 && typeof m[C] == "number" && g(m[C]);
    }
  }, [
    s,
    e,
    n,
    m,
    g
  ]);
  function x({ draggedDistance: w, closeDrawer: C, velocity: E, dismissible: S }) {
    if (i === void 0) return;
    const b = l === "bottom" || l === "right" ? (h ?? 0) - w : (h ?? 0) + w, k = f === i - 1, P = f === 0, N = w > 0;
    if (k && ye(o.current, {
      transition: `opacity ${ce.DURATION}s cubic-bezier(${ce.EASE.join(",")})`
    }), E > 2 && !N) {
      S ? C() : g(m[0]);
      return;
    }
    if (E > 2 && N && m && n) {
      g(m[n.length - 1]);
      return;
    }
    const T = m == null ? void 0 : m.reduce((L, I) => typeof L != "number" || typeof I != "number" ? L : Math.abs(I - b) < Math.abs(L - b) ? I : L), j = Ae(l) ? window.innerHeight : window.innerWidth;
    if (E > ny && Math.abs(w) < j * 0.4) {
      const L = N ? 1 : -1;
      if (L > 0 && d) {
        g(m[n.length - 1]);
        return;
      }
      if (P && L < 0 && S && C(), f === null) return;
      g(m[f + L]);
      return;
    }
    g(T);
  }
  function y({ draggedDistance: w }) {
    if (h === null) return;
    const C = l === "bottom" || l === "right" ? h - w : h + w;
    (l === "bottom" || l === "right") && C < m[m.length - 1] || (l === "top" || l === "left") && C > m[m.length - 1] || ye(r.current, {
      transform: Ae(l) ? `translate3d(0, ${C}px, 0)` : `translate3d(${C}px, 0, 0)`
    });
  }
  function v(w, C) {
    if (!n || typeof f != "number" || !m || i === void 0) return null;
    const E = f === i - 1;
    if (f >= i && C)
      return 0;
    if (E && !C) return 1;
    if (!p && !E) return null;
    const b = E ? f + 1 : f - 1, k = E ? m[b] - m[b - 1] : m[b + 1] - m[b], P = w / Math.abs(k);
    return E ? 1 - P : P;
  }
  return {
    isLastSnapPoint: d,
    activeSnapPoint: s,
    shouldFade: p,
    getPercentageDragged: v,
    setActiveSnapPoint: u,
    activeSnapPointIndex: f,
    onRelease: x,
    onDrag: y,
    snapPointsOffset: m
  };
}
const Tb = 0.25, Rb = 100, Xm = 8, Fr = 16, Gm = 26, Bu = "vaul-dragging";
function oy({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: i, snapPoints: a, nested: l = !1, setBackgroundColorOnScale: s = !0, closeThreshold: u = Tb, scrollLockTimeout: d = Rb, dismissible: p = !0, handleOnly: f = !1, fadeFromIndex: m = a && a.length - 1, activeSnapPoint: h, setActiveSnapPoint: g, fixed: x, modal: y = !0, onClose: v, noBodyStyles: w, direction: C = "bottom", preventScrollRestoration: E = !0, disablePreventScroll: S = !1 }) {
  var b;
  const [k = !1, P] = M.useState(!1), [N, T] = M.useState(!1), [j, L] = M.useState(!1), [I, z] = M.useState(!1), [H, _] = M.useState(!1), [F, O] = M.useState(!1), B = M.useRef(null), V = M.useRef(null), te = M.useRef(null), Ye = M.useRef(null), me = M.useRef(null), Me = M.useRef(!1), he = M.useRef(null), W = M.useRef(0), ne = M.useRef(!1), ke = M.useRef(0), R = M.useRef(null), oe = M.useRef(((b = R.current) == null ? void 0 : b.getBoundingClientRect().height) || 0), re = M.useRef(0), $e = M.useCallback((U) => {
    a && U === fn.length - 1 && (V.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: it, activeSnapPointIndex: vt, setActiveSnapPoint: Xt, onRelease: dn, snapPointsOffset: fn, onDrag: Bn, shouldFade: Na, getPercentageDragged: Qs } = Ob({
    snapPoints: a,
    activeSnapPointProp: h,
    setActiveSnapPointProp: g,
    drawerRef: R,
    fadeFromIndex: m,
    overlayRef: B,
    onSnapPointChange: $e,
    direction: C
  });
  Sb({
    isDisabled: !k || H || !y || F || !N || S
  });
  const { restorePositionSetting: Xs } = Pb({
    isOpen: k,
    modal: y,
    nested: l,
    hasBeenOpened: N,
    preventScrollRestoration: E,
    noBodyStyles: w
  });
  function $n() {
    return (window.innerWidth - Gm) / window.innerWidth;
  }
  function Gs(U) {
    var Q;
    !p && !a || R.current && !R.current.contains(U.target) || (oe.current = ((Q = R.current) == null ? void 0 : Q.getBoundingClientRect().height) || 0, _(!0), te.current = /* @__PURE__ */ new Date(), q0() && window.addEventListener("touchend", () => Me.current = !1, {
      once: !0
    }), U.target.setPointerCapture(U.pointerId), W.current = Ae(C) ? U.clientY : U.clientX);
  }
  function Pa(U, Q) {
    var de;
    let q = U;
    const Ce = (de = window.getSelection()) == null ? void 0 : de.toString(), Ne = R.current ? rl(R.current, C) : null, Ze = /* @__PURE__ */ new Date();
    if (q.hasAttribute("data-vaul-no-drag") || q.closest("[data-vaul-no-drag]"))
      return !1;
    if (C === "right" || C === "left")
      return !0;
    if (V.current && Ze.getTime() - V.current.getTime() < 500)
      return !1;
    if (Ne !== null && (C === "bottom" ? Ne > 0 : Ne < 0))
      return !0;
    if (Ce && Ce.length > 0)
      return !1;
    if (me.current && Ze.getTime() - me.current.getTime() < d && Ne === 0 || Q)
      return me.current = Ze, !1;
    for (; q; ) {
      if (q.scrollHeight > q.clientHeight) {
        if (q.scrollTop !== 0)
          return me.current = /* @__PURE__ */ new Date(), !1;
        if (q.getAttribute("role") === "dialog")
          return !0;
      }
      q = q.parentNode;
    }
    return !0;
  }
  function qs(U) {
    if (R.current && H) {
      const Q = C === "bottom" || C === "right" ? 1 : -1, de = (W.current - (Ae(C) ? U.clientY : U.clientX)) * Q, q = de > 0, Ce = a && !p && !q;
      if (Ce && vt === 0) return;
      const Ne = Math.abs(de), Ze = document.querySelector("[vaul-drawer-wrapper]");
      let K = Ne / oe.current;
      const Pe = Qs(Ne, q);
      if (Pe !== null && (K = Pe), Ce && K >= 1 || !Me.current && !Pa(U.target, q)) return;
      if (R.current.classList.add(Bu), Me.current = !0, ye(R.current, {
        transition: "none"
      }), ye(B.current, {
        transition: "none"
      }), a && Bn({
        draggedDistance: de
      }), q && !a) {
        const Ee = _b(de), Hn = Math.min(Ee * -1, 0) * Q;
        ye(R.current, {
          transform: Ae(C) ? `translate3d(0, ${Hn}px, 0)` : `translate3d(${Hn}px, 0, 0)`
        });
        return;
      }
      const We = 1 - K;
      if ((Na || m && vt === m - 1) && (o == null || o(U, K), ye(B.current, {
        opacity: `${We}`,
        transition: "none"
      }, !0)), Ze && B.current && r) {
        const Ee = Math.min($n() + K * (1 - $n()), 1), Hn = 8 - K * 8, at = Math.max(0, 14 - K * 14);
        ye(Ze, {
          borderRadius: `${Hn}px`,
          transform: Ae(C) ? `scale(${Ee}) translate3d(0, ${at}px, 0)` : `scale(${Ee}) translate3d(${at}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const Ee = Ne * Q;
        ye(R.current, {
          transform: Ae(C) ? `translate3d(0, ${Ee}px, 0)` : `translate3d(${Ee}px, 0, 0)`
        });
      }
    }
  }
  M.useEffect(() => () => {
    zn(!1), Xs();
  }, []), M.useEffect(() => {
    var U;
    function Q() {
      if (!R.current) return;
      const de = document.activeElement;
      if (Jc(de) || ne.current) {
        var q;
        const Ce = ((q = window.visualViewport) == null ? void 0 : q.height) || 0;
        let Ne = window.innerHeight - Ce;
        const Ze = R.current.getBoundingClientRect().height || 0;
        re.current || (re.current = Ze);
        const K = R.current.getBoundingClientRect().top;
        if (Math.abs(ke.current - Ne) > 60 && (ne.current = !ne.current), a && a.length > 0 && fn && vt) {
          const Pe = fn[vt] || 0;
          Ne += Pe;
        }
        if (ke.current = Ne, Ze > Ce || ne.current) {
          const Pe = R.current.getBoundingClientRect().height;
          let We = Pe;
          Pe > Ce && (We = Ce - Gm), x ? R.current.style.height = `${Pe - Math.max(Ne, 0)}px` : R.current.style.height = `${Math.max(We, Ce - K)}px`;
        } else
          R.current.style.height = `${re.current}px`;
        a && a.length > 0 && !ne.current ? R.current.style.bottom = "0px" : R.current.style.bottom = `${Math.max(Ne, 0)}px`;
      }
    }
    return (U = window.visualViewport) == null || U.addEventListener("resize", Q), () => {
      var de;
      return (de = window.visualViewport) == null ? void 0 : de.removeEventListener("resize", Q);
    };
  }, [
    vt,
    a,
    fn
  ]);
  function Wn() {
    R.current && (ai(), v == null || v(), ye(R.current, {
      transform: Ae(C) ? `translate3d(0, ${C === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${C === "right" ? "100%" : "-100%"}, 0, 0)`,
      transition: `transform ${ce.DURATION}s cubic-bezier(${ce.EASE.join(",")})`
    }), ye(B.current, {
      opacity: "0",
      transition: `opacity ${ce.DURATION}s cubic-bezier(${ce.EASE.join(",")})`
    }), zn(!1), setTimeout(() => {
      L(!1), P(!1);
    }, 300), setTimeout(() => {
      a && Xt(a[0]);
    }, ce.DURATION * 1e3));
  }
  M.useEffect(() => {
    if (!k && r) {
      const U = setTimeout(() => {
        nl(document.body);
      }, 200);
      return () => clearTimeout(U);
    }
  }, [
    k,
    r
  ]), G0(() => {
    e ? (P(!0), T(!0)) : Wn();
  }, [
    e
  ]), M.useEffect(() => {
    I && (t == null || t(k));
  }, [
    k
  ]), M.useEffect(() => {
    z(!0);
  }, []);
  function _a() {
    if (!R.current) return;
    const U = document.querySelector("[vaul-drawer-wrapper]"), Q = rl(R.current, C);
    ye(R.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${ce.DURATION}s cubic-bezier(${ce.EASE.join(",")})`
    }), ye(B.current, {
      transition: `opacity ${ce.DURATION}s cubic-bezier(${ce.EASE.join(",")})`,
      opacity: "1"
    }), r && Q && Q > 0 && k && ye(U, {
      borderRadius: `${Xm}px`,
      overflow: "hidden",
      ...Ae(C) ? {
        transform: `scale(${$n()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${$n()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${ce.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${ce.EASE.join(",")})`
    }, !0);
  }
  function ai() {
    !H || !R.current || (R.current.classList.remove(Bu), Me.current = !1, _(!1), Ye.current = /* @__PURE__ */ new Date());
  }
  function ja(U) {
    if (!H || !R.current) return;
    R.current.classList.remove(Bu), Me.current = !1, _(!1), Ye.current = /* @__PURE__ */ new Date();
    const Q = rl(R.current, C);
    if (!Pa(U.target, !1) || !Q || Number.isNaN(Q) || te.current === null) return;
    const de = Ye.current.getTime() - te.current.getTime(), q = W.current - (Ae(C) ? U.clientY : U.clientX), Ce = Math.abs(q) / de;
    if (Ce > 0.05 && (O(!0), setTimeout(() => {
      O(!1);
    }, 200)), a) {
      dn({
        draggedDistance: q * (C === "bottom" || C === "right" ? 1 : -1),
        closeDrawer: Wn,
        velocity: Ce,
        dismissible: p
      }), i == null || i(U, !0);
      return;
    }
    if (C === "bottom" || C === "right" ? q > 0 : q < 0) {
      _a(), i == null || i(U, !0);
      return;
    }
    if (Ce > ny) {
      Wn(), i == null || i(U, !1);
      return;
    }
    var Ne;
    const Ze = Math.min((Ne = R.current.getBoundingClientRect().height) != null ? Ne : 0, window.innerHeight);
    if (Q >= Ze * u) {
      Wn(), i == null || i(U, !1);
      return;
    }
    i == null || i(U, !0), _a();
  }
  M.useEffect(() => {
    k && (ye(document.documentElement, {
      scrollBehavior: "auto"
    }), V.current = /* @__PURE__ */ new Date(), zn(!0));
  }, [
    k
  ]), M.useEffect(() => {
    if (R.current && j) {
      var U;
      const Q = R == null || (U = R.current) == null ? void 0 : U.querySelectorAll("*");
      Q == null || Q.forEach((de) => {
        const q = de;
        (q.scrollHeight > q.clientHeight || q.scrollWidth > q.clientWidth) && q.classList.add("vaul-scrollable");
      });
    }
  }, [
    j
  ]);
  function zn(U) {
    const Q = document.querySelector("[vaul-drawer-wrapper]");
    !Q || !r || (U ? (s && (w || (ye(document.body, {
      background: document.body.style.backgroundColor || document.body.style.background
    }), ye(document.body, {
      background: "black"
    }, !0))), ye(Q, {
      borderRadius: `${Xm}px`,
      overflow: "hidden",
      ...Ae(C) ? {
        transform: `scale(${$n()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${$n()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${ce.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${ce.EASE.join(",")})`
    })) : (nl(Q, "overflow"), nl(Q, "transform"), nl(Q, "borderRadius"), ye(Q, {
      transitionProperty: "transform, border-radius",
      transitionDuration: `${ce.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${ce.EASE.join(",")})`
    })));
  }
  function io(U) {
    const Q = U ? (window.innerWidth - Fr) / window.innerWidth : 1, de = U ? -Fr : 0;
    he.current && window.clearTimeout(he.current), ye(R.current, {
      transition: `transform ${ce.DURATION}s cubic-bezier(${ce.EASE.join(",")})`,
      transform: `scale(${Q}) translate3d(0, ${de}px, 0)`
    }), !U && R.current && (he.current = setTimeout(() => {
      const q = rl(R.current, C);
      ye(R.current, {
        transition: "none",
        transform: Ae(C) ? `translate3d(0, ${q}px, 0)` : `translate3d(${q}px, 0, 0)`
      });
    }, 500));
  }
  function li(U, Q) {
    if (Q < 0) return;
    const de = Ae(C) ? window.innerHeight : window.innerWidth, q = (de - Fr) / de, Ce = q + Q * (1 - q), Ne = -Fr + Q * Fr;
    ye(R.current, {
      transform: Ae(C) ? `scale(${Ce}) translate3d(0, ${Ne}px, 0)` : `scale(${Ce}) translate3d(${Ne}px, 0, 0)`,
      transition: "none"
    });
  }
  function si(U, Q) {
    const de = Ae(C) ? window.innerHeight : window.innerWidth, q = Q ? (de - Fr) / de : 1, Ce = Q ? -Fr : 0;
    Q && ye(R.current, {
      transition: `transform ${ce.DURATION}s cubic-bezier(${ce.EASE.join(",")})`,
      transform: Ae(C) ? `scale(${q}) translate3d(0, ${Ce}px, 0)` : `scale(${q}) translate3d(${Ce}px, 0, 0)`
    });
  }
  return /* @__PURE__ */ M.createElement(Y0, {
    modal: y,
    onOpenChange: (U) => {
      if (e !== void 0) {
        t == null || t(U);
        return;
      }
      U ? (T(!0), P(U)) : Wn();
    },
    open: k
  }, /* @__PURE__ */ M.createElement(X0.Provider, {
    value: {
      visible: j,
      activeSnapPoint: it,
      snapPoints: a,
      setActiveSnapPoint: Xt,
      drawerRef: R,
      overlayRef: B,
      scaleBackground: zn,
      onOpenChange: t,
      onPress: Gs,
      setVisible: L,
      onRelease: ja,
      onDrag: qs,
      dismissible: p,
      handleOnly: f,
      isOpen: k,
      isDragging: H,
      shouldFade: Na,
      closeDrawer: Wn,
      onNestedDrag: li,
      onNestedOpenChange: io,
      onNestedRelease: si,
      keyboardIsOpen: ne,
      openProp: e,
      modal: y,
      snapPointsOffset: fn,
      direction: C
    }
  }, n));
}
const Mb = 250, Lb = 120, iy = /* @__PURE__ */ M.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { visible: o, closeDrawer: i, isDragging: a, snapPoints: l, activeSnapPoint: s, setActiveSnapPoint: u, dismissible: d, handleOnly: p, onPress: f, onDrag: m } = Ps(), h = M.useRef(null), g = M.useRef(!1);
  function x() {
    if (g.current) {
      w();
      return;
    }
    window.setTimeout(() => {
      y();
    }, Lb);
  }
  function y() {
    if (a || e || g.current) {
      w();
      return;
    }
    if (w(), (!l || l.length === 0) && d) {
      i();
      return;
    }
    if (s === l[l.length - 1] && d) {
      i();
      return;
    }
    const E = l.findIndex((b) => b === s);
    if (E === -1) return;
    const S = l[E + 1];
    u(S);
  }
  function v() {
    h.current = window.setTimeout(() => {
      g.current = !0;
    }, Mb);
  }
  function w() {
    window.clearTimeout(h.current), g.current = !1;
  }
  return /* @__PURE__ */ M.createElement("div", {
    onClick: x,
    onDoubleClick: () => {
      g.current = !0, i();
    },
    onPointerCancel: w,
    onPointerDown: (C) => {
      p && f(C), v();
    },
    onPointerMove: (C) => {
      p && m(C);
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
iy.displayName = "Drawer.Handle";
const ay = /* @__PURE__ */ M.forwardRef(function({ children: e, ...t }, n) {
  const { overlayRef: r, snapPoints: o, onRelease: i, shouldFade: a, isOpen: l, visible: s } = Ps(), u = ey(n, r), d = o && o.length > 0;
  return /* @__PURE__ */ M.createElement(Sf, {
    onMouseUp: i,
    ref: u,
    "vaul-drawer-visible": s ? "true" : "false",
    "vaul-overlay": "",
    "vaul-snap-points": l && d ? "true" : "false",
    "vaul-snap-points-overlay": l && a ? "true" : "false",
    ...t
  });
});
ay.displayName = "Drawer.Overlay";
const ly = /* @__PURE__ */ M.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, i) {
  const { drawerRef: a, onPress: l, onRelease: s, onDrag: u, dismissible: d, keyboardIsOpen: p, snapPointsOffset: f, visible: m, closeDrawer: h, modal: g, openProp: x, onOpenChange: y, setVisible: v, handleOnly: w, direction: C } = Ps(), E = ey(i, a), S = M.useRef(null), b = M.useRef(!1), k = (P, N, T = 0) => {
    if (b.current) return !0;
    const j = Math.abs(P.y), L = Math.abs(P.x), I = L > j, z = [
      "bottom",
      "right"
    ].includes(N) ? 1 : -1;
    if (N === "left" || N === "right") {
      if (!(P.x * z < 0) && L >= 0 && L <= T)
        return I;
    } else if (!(P.y * z < 0) && j >= 0 && j <= T)
      return !I;
    return b.current = !0, !0;
  };
  return M.useEffect(() => {
    v(!0);
  }, []), /* @__PURE__ */ M.createElement(bf, {
    "vaul-drawer": "",
    "vaul-drawer-direction": C,
    "vaul-drawer-visible": m ? "true" : "false",
    ...o,
    ref: E,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[0]}px`,
      ...r
    } : r,
    onOpenAutoFocus: (P) => {
      if (e)
        e(P);
      else {
        var N;
        P.preventDefault(), (N = a.current) == null || N.focus();
      }
    },
    onPointerDown: (P) => {
      w || (o.onPointerDown == null || o.onPointerDown.call(o, P), S.current = {
        x: P.clientX,
        y: P.clientY
      }, l(P));
    },
    onPointerDownOutside: (P) => {
      if (t == null || t(P), !g || P.defaultPrevented) {
        P.preventDefault();
        return;
      }
      p.current && (p.current = !1), P.preventDefault(), y == null || y(!1), !(!d || x !== void 0) && h();
    },
    onFocusOutside: (P) => {
      if (!g) {
        P.preventDefault();
        return;
      }
    },
    onEscapeKeyDown: (P) => {
      if (!g) {
        P.preventDefault();
        return;
      }
    },
    onPointerMove: (P) => {
      if (w || (o.onPointerMove == null || o.onPointerMove.call(o, P), !S.current)) return;
      const N = P.clientY - S.current.y, T = P.clientX - S.current.x, j = P.pointerType === "touch" ? 10 : 2;
      k({
        x: T,
        y: N
      }, C, j) ? u(P) : (Math.abs(T) > j || Math.abs(N) > j) && (S.current = null);
    },
    onPointerUp: (P) => {
      o.onPointerUp == null || o.onPointerUp.call(o, P), S.current = null, b.current = !1, s(P);
    }
  });
});
ly.displayName = "Drawer.Content";
function Ib({ onDrag: e, onOpenChange: t, ...n }) {
  const { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: i } = Ps();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return /* @__PURE__ */ M.createElement(oy, {
    nested: !0,
    onClose: () => {
      o(!1);
    },
    onDrag: (a, l) => {
      r(a, l), e == null || e(a, l);
    },
    onOpenChange: (a) => {
      a && o(a), t == null || t(a);
    },
    onRelease: i,
    ...n
  });
}
const jn = {
  Root: oy,
  NestedRoot: Ib,
  Content: ly,
  Handle: iy,
  Overlay: ay,
  Trigger: K0,
  Portal: Q0,
  Close: yb,
  Title: Ff,
  Description: kf
}, sy = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ c.jsx(jn.Root, { shouldScaleBackground: e, ...t });
sy.displayName = "Drawer";
const Bb = jn.Portal, uy = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  jn.Overlay,
  {
    ref: n,
    className: G("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
uy.displayName = jn.Overlay.displayName;
const cy = D.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(Bb, { children: [
  /* @__PURE__ */ c.jsx(uy, {}),
  /* @__PURE__ */ c.jsxs(
    jn.Content,
    {
      ref: r,
      className: G(
        "fixed inset-x-0 bottom-10 min-h-[90%] max-h-[95%] z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ c.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
cy.displayName = "DrawerContent";
const dy = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: G("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
dy.displayName = "DrawerHeader";
const fy = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  jn.Title,
  {
    ref: n,
    className: G("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
fy.displayName = jn.Title.displayName;
const $b = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  jn.Description,
  {
    ref: n,
    className: G("text-sm text-muted-foreground", e),
    ...t
  }
));
$b.displayName = jn.Description.displayName;
var Wb = D.createContext(void 0);
function py(e) {
  const t = D.useContext(Wb);
  return e || t || "ltr";
}
function Zc(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function zb(e, t) {
  return D.useReducer((n, r) => t[n][r] ?? n, e);
}
var Pf = "ScrollArea", [my, R4] = wr(Pf), [Hb, Tt] = my(Pf), hy = D.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: i = 600,
      ...a
    } = e, [l, s] = D.useState(null), [u, d] = D.useState(null), [p, f] = D.useState(null), [m, h] = D.useState(null), [g, x] = D.useState(null), [y, v] = D.useState(0), [w, C] = D.useState(0), [E, S] = D.useState(!1), [b, k] = D.useState(!1), P = le(t, (T) => s(T)), N = py(o);
    return /* @__PURE__ */ c.jsx(
      Hb,
      {
        scope: n,
        type: r,
        dir: N,
        scrollHideDelay: i,
        scrollArea: l,
        viewport: u,
        onViewportChange: d,
        content: p,
        onContentChange: f,
        scrollbarX: m,
        onScrollbarXChange: h,
        scrollbarXEnabled: E,
        onScrollbarXEnabledChange: S,
        scrollbarY: g,
        onScrollbarYChange: x,
        scrollbarYEnabled: b,
        onScrollbarYEnabledChange: k,
        onCornerWidthChange: v,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ c.jsx(
          ee.div,
          {
            dir: N,
            ...a,
            ref: P,
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
hy.displayName = Pf;
var vy = "ScrollAreaViewport", gy = D.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...i } = e, a = Tt(vy, n), l = D.useRef(null), s = le(t, l, a.onViewportChange);
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ c.jsx(
        ee.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...i,
          ref: s,
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
            overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ c.jsx("div", { ref: a.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
gy.displayName = vy;
var sn = "ScrollAreaScrollbar", _f = D.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Tt(sn, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: a } = o, l = e.orientation === "horizontal";
    return D.useEffect(() => (l ? i(!0) : a(!0), () => {
      l ? i(!1) : a(!1);
    }), [l, i, a]), o.type === "hover" ? /* @__PURE__ */ c.jsx(Vb, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ c.jsx(Ub, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ c.jsx(yy, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ c.jsx(jf, { ...r, ref: t }) : null;
  }
);
_f.displayName = sn;
var Vb = D.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Tt(sn, e.__scopeScrollArea), [i, a] = D.useState(!1);
  return D.useEffect(() => {
    const l = o.scrollArea;
    let s = 0;
    if (l) {
      const u = () => {
        window.clearTimeout(s), a(!0);
      }, d = () => {
        s = window.setTimeout(() => a(!1), o.scrollHideDelay);
      };
      return l.addEventListener("pointerenter", u), l.addEventListener("pointerleave", d), () => {
        window.clearTimeout(s), l.removeEventListener("pointerenter", u), l.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ c.jsx(Kt, { present: n || i, children: /* @__PURE__ */ c.jsx(
    yy,
    {
      "data-state": i ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), Ub = D.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Tt(sn, e.__scopeScrollArea), i = e.orientation === "horizontal", a = js(() => s("SCROLL_END"), 100), [l, s] = zb("hidden", {
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
  return D.useEffect(() => {
    if (l === "idle") {
      const u = window.setTimeout(() => s("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [l, o.scrollHideDelay, s]), D.useEffect(() => {
    const u = o.viewport, d = i ? "scrollLeft" : "scrollTop";
    if (u) {
      let p = u[d];
      const f = () => {
        const m = u[d];
        p !== m && (s("SCROLL"), a()), p = m;
      };
      return u.addEventListener("scroll", f), () => u.removeEventListener("scroll", f);
    }
  }, [o.viewport, i, s, a]), /* @__PURE__ */ c.jsx(Kt, { present: n || l !== "hidden", children: /* @__PURE__ */ c.jsx(
    jf,
    {
      "data-state": l === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: J(e.onPointerEnter, () => s("POINTER_ENTER")),
      onPointerLeave: J(e.onPointerLeave, () => s("POINTER_LEAVE"))
    }
  ) });
}), yy = D.forwardRef((e, t) => {
  const n = Tt(sn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [i, a] = D.useState(!1), l = e.orientation === "horizontal", s = js(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      a(l ? u : d);
    }
  }, 10);
  return Ko(n.viewport, s), Ko(n.content, s), /* @__PURE__ */ c.jsx(Kt, { present: r || i, children: /* @__PURE__ */ c.jsx(
    jf,
    {
      "data-state": i ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), jf = D.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Tt(sn, e.__scopeScrollArea), i = D.useRef(null), a = D.useRef(0), [l, s] = D.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = Ey(l.viewport, l.content), d = {
    ...r,
    sizes: l,
    onSizesChange: s,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (f) => i.current = f,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (f) => a.current = f
  };
  function p(f, m) {
    return qb(f, a.current, l, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ c.jsx(
    Yb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const f = o.viewport.scrollLeft, m = qm(f, l, o.dir);
          i.current.style.transform = `translate3d(${m}px, 0, 0)`;
        }
      },
      onWheelScroll: (f) => {
        o.viewport && (o.viewport.scrollLeft = f);
      },
      onDragScroll: (f) => {
        o.viewport && (o.viewport.scrollLeft = p(f, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ c.jsx(
    Kb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const f = o.viewport.scrollTop, m = qm(f, l);
          i.current.style.transform = `translate3d(0, ${m}px, 0)`;
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
}), Yb = D.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Tt(sn, e.__scopeScrollArea), [a, l] = D.useState(), s = D.useRef(null), u = le(t, s, i.onScrollbarXChange);
  return D.useEffect(() => {
    s.current && l(getComputedStyle(s.current));
  }, [s]), /* @__PURE__ */ c.jsx(
    wy,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": _s(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, p) => {
        if (i.viewport) {
          const f = i.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(f), by(f, p) && d.preventDefault();
        }
      },
      onResize: () => {
        s.current && i.viewport && a && r({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: s.current.clientWidth,
            paddingStart: Zl(a.paddingLeft),
            paddingEnd: Zl(a.paddingRight)
          }
        });
      }
    }
  );
}), Kb = D.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, i = Tt(sn, e.__scopeScrollArea), [a, l] = D.useState(), s = D.useRef(null), u = le(t, s, i.onScrollbarYChange);
  return D.useEffect(() => {
    s.current && l(getComputedStyle(s.current));
  }, [s]), /* @__PURE__ */ c.jsx(
    wy,
    {
      "data-orientation": "vertical",
      ...o,
      ref: u,
      sizes: n,
      style: {
        top: 0,
        right: i.dir === "ltr" ? 0 : void 0,
        left: i.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": _s(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, p) => {
        if (i.viewport) {
          const f = i.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(f), by(f, p) && d.preventDefault();
        }
      },
      onResize: () => {
        s.current && i.viewport && a && r({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: s.current.clientHeight,
            paddingStart: Zl(a.paddingTop),
            paddingEnd: Zl(a.paddingBottom)
          }
        });
      }
    }
  );
}), [Qb, Dy] = my(sn), wy = D.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: i,
    onThumbPointerUp: a,
    onThumbPointerDown: l,
    onThumbPositionChange: s,
    onDragScroll: u,
    onWheelScroll: d,
    onResize: p,
    ...f
  } = e, m = Tt(sn, n), [h, g] = D.useState(null), x = le(t, (P) => g(P)), y = D.useRef(null), v = D.useRef(""), w = m.viewport, C = r.content - r.viewport, E = Ge(d), S = Ge(s), b = js(p, 10);
  function k(P) {
    if (y.current) {
      const N = P.clientX - y.current.left, T = P.clientY - y.current.top;
      u({ x: N, y: T });
    }
  }
  return D.useEffect(() => {
    const P = (N) => {
      const T = N.target;
      (h == null ? void 0 : h.contains(T)) && E(N, C);
    };
    return document.addEventListener("wheel", P, { passive: !1 }), () => document.removeEventListener("wheel", P, { passive: !1 });
  }, [w, h, C, E]), D.useEffect(S, [r, S]), Ko(h, b), Ko(m.content, b), /* @__PURE__ */ c.jsx(
    Qb,
    {
      scope: n,
      scrollbar: h,
      hasThumb: o,
      onThumbChange: Ge(i),
      onThumbPointerUp: Ge(a),
      onThumbPositionChange: S,
      onThumbPointerDown: Ge(l),
      children: /* @__PURE__ */ c.jsx(
        ee.div,
        {
          ...f,
          ref: x,
          style: { position: "absolute", ...f.style },
          onPointerDown: J(e.onPointerDown, (P) => {
            P.button === 0 && (P.target.setPointerCapture(P.pointerId), y.current = h.getBoundingClientRect(), v.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), k(P));
          }),
          onPointerMove: J(e.onPointerMove, k),
          onPointerUp: J(e.onPointerUp, (P) => {
            const N = P.target;
            N.hasPointerCapture(P.pointerId) && N.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = v.current, m.viewport && (m.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), Jl = "ScrollAreaThumb", xy = D.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Dy(Jl, e.__scopeScrollArea);
    return /* @__PURE__ */ c.jsx(Kt, { present: n || o.hasThumb, children: /* @__PURE__ */ c.jsx(Xb, { ref: t, ...r }) });
  }
), Xb = D.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, i = Tt(Jl, n), a = Dy(Jl, n), { onThumbPositionChange: l } = a, s = le(
      t,
      (p) => a.onThumbChange(p)
    ), u = D.useRef(), d = js(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return D.useEffect(() => {
      const p = i.viewport;
      if (p) {
        const f = () => {
          if (d(), !u.current) {
            const m = Jb(p, l);
            u.current = m, l();
          }
        };
        return l(), p.addEventListener("scroll", f), () => p.removeEventListener("scroll", f);
      }
    }, [i.viewport, d, l]), /* @__PURE__ */ c.jsx(
      ee.div,
      {
        "data-state": a.hasThumb ? "visible" : "hidden",
        ...o,
        ref: s,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: J(e.onPointerDownCapture, (p) => {
          const m = p.target.getBoundingClientRect(), h = p.clientX - m.left, g = p.clientY - m.top;
          a.onThumbPointerDown({ x: h, y: g });
        }),
        onPointerUp: J(e.onPointerUp, a.onThumbPointerUp)
      }
    );
  }
);
xy.displayName = Jl;
var Af = "ScrollAreaCorner", Cy = D.forwardRef(
  (e, t) => {
    const n = Tt(Af, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ c.jsx(Gb, { ...e, ref: t }) : null;
  }
);
Cy.displayName = Af;
var Gb = D.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Tt(Af, n), [i, a] = D.useState(0), [l, s] = D.useState(0), u = !!(i && l);
  return Ko(o.scrollbarX, () => {
    var p;
    const d = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(d), s(d);
  }), Ko(o.scrollbarY, () => {
    var p;
    const d = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(d), a(d);
  }), u ? /* @__PURE__ */ c.jsx(
    ee.div,
    {
      ...r,
      ref: t,
      style: {
        width: i,
        height: l,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Zl(e) {
  return e ? parseInt(e, 10) : 0;
}
function Ey(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function _s(e) {
  const t = Ey(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function qb(e, t, n, r = "ltr") {
  const o = _s(n), i = o / 2, a = t || i, l = o - a, s = n.scrollbar.paddingStart + a, u = n.scrollbar.size - n.scrollbar.paddingEnd - l, d = n.content - n.viewport, p = r === "ltr" ? [0, d] : [d * -1, 0];
  return Sy([s, u], p)(e);
}
function qm(e, t, n = "ltr") {
  const r = _s(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, a = t.content - t.viewport, l = i - r, s = n === "ltr" ? [0, a] : [a * -1, 0], u = Zc(e, s);
  return Sy([0, a], [0, l])(u);
}
function Sy(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function by(e, t) {
  return e > 0 && e < t;
}
var Jb = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, a = n.left !== i.left, l = n.top !== i.top;
    (a || l) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function js(e, t) {
  const n = Ge(e), r = D.useRef(0);
  return D.useEffect(() => () => window.clearTimeout(r.current), []), D.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Ko(e, t) {
  const n = Ge(t);
  Je(() => {
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
var Fy = hy, Zb = gy, eF = Cy;
const tF = D.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  Fy,
  {
    ref: r,
    className: G("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ c.jsx(Zb, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ c.jsx(ky, {}),
      /* @__PURE__ */ c.jsx(eF, {})
    ]
  }
));
tF.displayName = Fy.displayName;
const ky = D.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ c.jsx(
  _f,
  {
    ref: r,
    orientation: t,
    className: G(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ c.jsx(xy, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ky.displayName = _f.displayName;
function nF(e) {
  const [t, n] = D.useState(!1);
  return D.useEffect(() => {
    function r(i) {
      n(i.matches);
    }
    const o = matchMedia(e);
    return o.addEventListener("change", r), n(o.matches), () => o.removeEventListener("change", r);
  }, [e]), t;
}
var rF = Object.create, As = Object.defineProperty, oF = Object.getOwnPropertyDescriptor, iF = Object.getOwnPropertyNames, aF = Object.getPrototypeOf, lF = Object.prototype.hasOwnProperty, Ny = (e) => {
  throw TypeError(e);
}, sF = (e, t) => () => (e && (t = e(e = 0)), t), Of = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Os = (e, t) => {
  for (var n in t) As(e, n, { get: t[n], enumerable: !0 });
}, Py = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of iF(t)) !lF.call(e, o) && o !== n && As(e, o, { get: () => t[o], enumerable: !(r = oF(t, o)) || r.enumerable });
  return e;
}, Ts = (e, t, n) => (n = e != null ? rF(aF(e)) : {}, Py(As(n, "default", { value: e, enumerable: !0 }), e)), uF = (e) => Py(As({}, "__esModule", { value: !0 }), e), cF = (e, t, n) => t.has(e) || Ny("Cannot " + n), dF = (e, t, n) => t.has(e) ? Ny("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), bi = (e, t, n) => (cF(e, t, "access private method"), n), Tf = Of((e, t) => {
  var n = new Proxy(String, { get: () => n });
  t.exports = n;
}), _y = {};
Os(_y, { default: () => Ay, shouldHighlight: () => jy });
var jy, Ay, fF = sF(() => {
  jy = () => !1, Ay = String;
}), pF = Of((e, t) => {
  var n = String, r = function() {
    return { isColorSupported: !1, reset: n, bold: n, dim: n, italic: n, underline: n, inverse: n, hidden: n, strikethrough: n, black: n, red: n, green: n, yellow: n, blue: n, magenta: n, cyan: n, white: n, gray: n, bgBlack: n, bgRed: n, bgGreen: n, bgYellow: n, bgBlue: n, bgMagenta: n, bgCyan: n, bgWhite: n };
  };
  t.exports = r(), t.exports.createColors = r;
}), mF = Of((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.codeFrameColumns = m, e.default = h;
  var t = (fF(), uF(_y)), n = o(pF(), !0);
  function r(g) {
    if (typeof WeakMap != "function") return null;
    var x = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap();
    return (r = function(v) {
      return v ? y : x;
    })(g);
  }
  function o(g, x) {
    if (g === null || typeof g != "object" && typeof g != "function") return { default: g };
    var y = r(x);
    if (y && y.has(g)) return y.get(g);
    var v = { __proto__: null }, w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var C in g) if (C !== "default" && {}.hasOwnProperty.call(g, C)) {
      var E = w ? Object.getOwnPropertyDescriptor(g, C) : null;
      E && (E.get || E.set) ? Object.defineProperty(v, C, E) : v[C] = g[C];
    }
    return v.default = g, y && y.set(g, v), v;
  }
  var i = n.default, a = (g, x) => (y) => g(x(y)), l;
  function s(g) {
    return g ? (l != null || (l = (0, n.createColors)(!0)), l) : i;
  }
  var u = !1;
  function d(g) {
    return { gutter: g.gray, marker: a(g.red, g.bold), message: a(g.red, g.bold) };
  }
  var p = /\r\n|[\n\r\u2028\u2029]/;
  function f(g, x, y) {
    let v = Object.assign({ column: 0, line: -1 }, g.start), w = Object.assign({}, v, g.end), { linesAbove: C = 2, linesBelow: E = 3 } = y || {}, S = v.line, b = v.column, k = w.line, P = w.column, N = Math.max(S - (C + 1), 0), T = Math.min(x.length, k + E);
    S === -1 && (N = 0), k === -1 && (T = x.length);
    let j = k - S, L = {};
    if (j) for (let I = 0; I <= j; I++) {
      let z = I + S;
      if (!b) L[z] = !0;
      else if (I === 0) {
        let H = x[z - 1].length;
        L[z] = [b, H - b + 1];
      } else if (I === j) L[z] = [0, P];
      else {
        let H = x[z - I].length;
        L[z] = [0, H];
      }
    }
    else b === P ? b ? L[S] = [b, 0] : L[S] = !0 : L[S] = [b, P - b];
    return { start: N, end: T, markerLines: L };
  }
  function m(g, x, y = {}) {
    let v = (y.highlightCode || y.forceColor) && (0, t.shouldHighlight)(y), w = s(y.forceColor), C = d(w), E = (L, I) => v ? L(I) : I, S = g.split(p), { start: b, end: k, markerLines: P } = f(x, S, y), N = x.start && typeof x.start.column == "number", T = String(k).length, j = (v ? (0, t.default)(g, y) : g).split(p, k).slice(b, k).map((L, I) => {
      let z = b + 1 + I, H = ` ${` ${z}`.slice(-T)} |`, _ = P[z], F = !P[z + 1];
      if (_) {
        let O = "";
        if (Array.isArray(_)) {
          let B = L.slice(0, Math.max(_[0] - 1, 0)).replace(/[^\t]/g, " "), V = _[1] || 1;
          O = [`
 `, E(C.gutter, H.replace(/\d/g, " ")), " ", B, E(C.marker, "^").repeat(V)].join(""), F && y.message && (O += " " + E(C.message, y.message));
        }
        return [E(C.marker, ">"), E(C.gutter, H), L.length > 0 ? ` ${L}` : "", O].join("");
      } else return ` ${E(C.gutter, H)}${L.length > 0 ? ` ${L}` : ""}`;
    }).join(`
`);
    return y.message && !N && (j = `${" ".repeat(T + 1)}${y.message}
${j}`), v ? w.reset(j) : j;
  }
  function h(g, x, y, v = {}) {
    if (!u) {
      u = !0;
      let w = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
      {
        let C = new Error(w);
        C.name = "DeprecationWarning", console.warn(new Error(w));
      }
    }
    return y = Math.max(y, 0), m(g, { start: { column: y, line: x } }, v);
  }
}), hF = {};
Os(hF, { __debug: () => gP, check: () => hP, doc: () => yD, format: () => xD, formatWithCursor: () => wD, getSupportInfo: () => vP, util: () => DD, version: () => UN });
var vF = (e, t, n, r) => {
  if (!(e && t == null)) return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
}, Rs = vF;
function xr() {
}
xr.prototype = { diff: function(e, t) {
  var n, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = r.callback;
  typeof r == "function" && (o = r, r = {}), this.options = r;
  var i = this;
  function a(w) {
    return o ? (setTimeout(function() {
      o(void 0, w);
    }, 0), !0) : w;
  }
  e = this.castInput(e), t = this.castInput(t), e = this.removeEmpty(this.tokenize(e)), t = this.removeEmpty(this.tokenize(t));
  var l = t.length, s = e.length, u = 1, d = l + s;
  r.maxEditLength && (d = Math.min(d, r.maxEditLength));
  var p = (n = r.timeout) !== null && n !== void 0 ? n : 1 / 0, f = Date.now() + p, m = [{ oldPos: -1, lastComponent: void 0 }], h = this.extractCommon(m[0], t, e, 0);
  if (m[0].oldPos + 1 >= s && h + 1 >= l) return a([{ value: this.join(t), count: t.length }]);
  var g = -1 / 0, x = 1 / 0;
  function y() {
    for (var w = Math.max(g, -u); w <= Math.min(x, u); w += 2) {
      var C = void 0, E = m[w - 1], S = m[w + 1];
      E && (m[w - 1] = void 0);
      var b = !1;
      if (S) {
        var k = S.oldPos - w;
        b = S && 0 <= k && k < l;
      }
      var P = E && E.oldPos + 1 < s;
      if (!b && !P) {
        m[w] = void 0;
        continue;
      }
      if (!P || b && E.oldPos + 1 < S.oldPos ? C = i.addToPath(S, !0, void 0, 0) : C = i.addToPath(E, void 0, !0, 1), h = i.extractCommon(C, t, e, w), C.oldPos + 1 >= s && h + 1 >= l) return a(gF(i, C.lastComponent, t, e, i.useLongestToken));
      m[w] = C, C.oldPos + 1 >= s && (x = Math.min(x, w - 1)), h + 1 >= l && (g = Math.max(g, w + 1));
    }
    u++;
  }
  if (o) (function w() {
    setTimeout(function() {
      if (u > d || Date.now() > f) return o();
      y() || w();
    }, 0);
  })();
  else for (; u <= d && Date.now() <= f; ) {
    var v = y();
    if (v) return v;
  }
}, addToPath: function(e, t, n, r) {
  var o = e.lastComponent;
  return o && o.added === t && o.removed === n ? { oldPos: e.oldPos + r, lastComponent: { count: o.count + 1, added: t, removed: n, previousComponent: o.previousComponent } } : { oldPos: e.oldPos + r, lastComponent: { count: 1, added: t, removed: n, previousComponent: o } };
}, extractCommon: function(e, t, n, r) {
  for (var o = t.length, i = n.length, a = e.oldPos, l = a - r, s = 0; l + 1 < o && a + 1 < i && this.equals(t[l + 1], n[a + 1]); ) l++, a++, s++;
  return s && (e.lastComponent = { count: s, previousComponent: e.lastComponent }), e.oldPos = a, l;
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
function gF(e, t, n, r, o) {
  for (var i = [], a; t; ) i.push(t), a = t.previousComponent, delete t.previousComponent, t = a;
  i.reverse();
  for (var l = 0, s = i.length, u = 0, d = 0; l < s; l++) {
    var p = i[l];
    if (p.removed) {
      if (p.value = e.join(r.slice(d, d + p.count)), d += p.count, l && i[l - 1].added) {
        var f = i[l - 1];
        i[l - 1] = i[l], i[l] = f;
      }
    } else {
      if (!p.added && o) {
        var m = n.slice(u, u + p.count);
        m = m.map(function(g, x) {
          var y = r[d + x];
          return y.length > g.length ? y : g;
        }), p.value = e.join(m);
      } else p.value = e.join(n.slice(u, u + p.count));
      u += p.count, p.added || (d += p.count);
    }
  }
  var h = i[s - 1];
  return s > 1 && typeof h.value == "string" && (h.added || h.removed) && e.equals("", h.value) && (i[s - 2].value += h.value, i.pop()), i;
}
var Jm = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, Zm = /\S/, Oy = new xr();
Oy.equals = function(e, t) {
  return this.options.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e === t || this.options.ignoreWhitespace && !Zm.test(e) && !Zm.test(t);
};
Oy.tokenize = function(e) {
  for (var t = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), n = 0; n < t.length - 1; n++) !t[n + 1] && t[n + 2] && Jm.test(t[n]) && Jm.test(t[n + 2]) && (t[n] += t[n + 2], t.splice(n + 1, 2), n--);
  return t;
};
var Ty = new xr();
Ty.tokenize = function(e) {
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
var yF = new xr();
yF.tokenize = function(e) {
  return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var DF = new xr();
DF.tokenize = function(e) {
  return e.split(/([{}:;,]|\s+)/);
};
function wl(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wl = function(t) {
    return typeof t;
  } : wl = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wl(e);
}
var wF = Object.prototype.toString, sa = new xr();
sa.useLongestToken = !0;
sa.tokenize = Ty.tokenize;
sa.castInput = function(e) {
  var t = this.options, n = t.undefinedReplacement, r = t.stringifyReplacer, o = r === void 0 ? function(i, a) {
    return typeof a > "u" ? n : a;
  } : r;
  return typeof e == "string" ? e : JSON.stringify(ed(e, null, null, o), o, "  ");
};
sa.equals = function(e, t) {
  return xr.prototype.equals.call(sa, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"));
};
function ed(e, t, n, r, o) {
  t = t || [], n = n || [], r && (e = r(o, e));
  var i;
  for (i = 0; i < t.length; i += 1) if (t[i] === e) return n[i];
  var a;
  if (wF.call(e) === "[object Array]") {
    for (t.push(e), a = new Array(e.length), n.push(a), i = 0; i < e.length; i += 1) a[i] = ed(e[i], t, n, r, o);
    return t.pop(), n.pop(), a;
  }
  if (e && e.toJSON && (e = e.toJSON()), wl(e) === "object" && e !== null) {
    t.push(e), a = {}, n.push(a);
    var l = [], s;
    for (s in e) e.hasOwnProperty(s) && l.push(s);
    for (l.sort(), i = 0; i < l.length; i += 1) s = l[i], a[s] = ed(e[s], t, n, r, s);
    t.pop(), n.pop();
  } else a = e;
  return a;
}
var es = new xr();
es.tokenize = function(e) {
  return e.slice();
};
es.join = es.removeEmpty = function(e) {
  return e;
};
function xF(e, t, n) {
  return es.diff(e, t, n);
}
function CF(e) {
  let t = e.indexOf("\r");
  return t >= 0 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
}
function Rf(e) {
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
function Ry(e, t) {
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
function EF(e) {
  return Rs(!1, e, /\r\n?/gu, `
`);
}
var no = "string", Fn = "array", ro = "cursor", An = "indent", On = "align", Tn = "trim", ht = "group", un = "fill", xt = "if-break", Rn = "indent-if-break", Mn = "line-suffix", Ln = "line-suffix-boundary", Ue = "line", cn = "label", Ot = "break-parent", My = /* @__PURE__ */ new Set([ro, An, On, Tn, ht, un, xt, Rn, Mn, Ln, Ue, cn, Ot]);
function SF(e) {
  if (typeof e == "string") return no;
  if (Array.isArray(e)) return Fn;
  if (!e) return;
  let { type: t } = e;
  if (My.has(t)) return t;
}
var oo = SF, bF = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function FF(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (oo(e)) throw new Error("doc is valid.");
  let n = Object.prototype.toString.call(e);
  if (n !== "[object Object]") return `Unexpected doc '${n}'.`;
  let r = bF([...My].map((o) => `'${o}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
}
var kF = class extends Error {
  constructor(t) {
    super(FF(t));
    Aa(this, "name", "InvalidDocError");
    this.doc = t;
  }
}, Qo = kF, eh = {};
function NF(e, t, n, r) {
  let o = [e];
  for (; o.length > 0; ) {
    let i = o.pop();
    if (i === eh) {
      n(o.pop());
      continue;
    }
    n && o.push(i, eh);
    let a = oo(i);
    if (!a) throw new Qo(i);
    if ((t == null ? void 0 : t(i)) !== !1) switch (a) {
      case Fn:
      case un: {
        let l = a === Fn ? i : i.parts;
        for (let s = l.length, u = s - 1; u >= 0; --u) o.push(l[u]);
        break;
      }
      case xt:
        o.push(i.flatContents, i.breakContents);
        break;
      case ht:
        if (r && i.expandedStates) for (let l = i.expandedStates.length, s = l - 1; s >= 0; --s) o.push(i.expandedStates[s]);
        else o.push(i.contents);
        break;
      case On:
      case An:
      case Rn:
      case cn:
      case Mn:
        o.push(i.contents);
        break;
      case no:
      case ro:
      case Tn:
      case Ln:
      case Ue:
      case Ot:
        break;
      default:
        throw new Qo(i);
    }
  }
}
var Mf = NF, PF = () => {
}, _F = PF;
function ts(e) {
  return { type: An, contents: e };
}
function Xo(e, t) {
  return { type: On, contents: t, n: e };
}
function Ly(e, t = {}) {
  return _F(t.expandedStates), { type: ht, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function jF(e) {
  return Xo(Number.NEGATIVE_INFINITY, e);
}
function AF(e) {
  return Xo({ type: "root" }, e);
}
function OF(e) {
  return Xo(-1, e);
}
function TF(e, t) {
  return Ly(e[0], { ...t, expandedStates: e });
}
function Iy(e) {
  return { type: un, parts: e };
}
function RF(e, t = "", n = {}) {
  return { type: xt, breakContents: e, flatContents: t, groupId: n.groupId };
}
function MF(e, t) {
  return { type: Rn, contents: e, groupId: t.groupId, negate: t.negate };
}
function td(e) {
  return { type: Mn, contents: e };
}
var LF = { type: Ln }, Ms = { type: Ot }, IF = { type: Tn }, Lf = { type: Ue, hard: !0 }, By = { type: Ue, hard: !0, literal: !0 }, $y = { type: Ue }, BF = { type: Ue, soft: !0 }, Wr = [Lf, Ms], Wy = [By, Ms], nd = { type: ro };
function zy(e, t) {
  let n = [];
  for (let r = 0; r < t.length; r++) r !== 0 && n.push(e), n.push(t[r]);
  return n;
}
function Hy(e, t, n) {
  let r = e;
  if (t > 0) {
    for (let o = 0; o < Math.floor(t / n); ++o) r = ts(r);
    r = Xo(t % n, r), r = Xo(Number.NEGATIVE_INFINITY, r);
  }
  return r;
}
function $F(e, t) {
  return e ? { type: cn, label: e, contents: t } : t;
}
function hn(e) {
  var t;
  if (!e) return "";
  if (Array.isArray(e)) {
    let n = [];
    for (let r of e) if (Array.isArray(r)) n.push(...hn(r));
    else {
      let o = hn(r);
      o !== "" && n.push(o);
    }
    return n;
  }
  return e.type === xt ? { ...e, breakContents: hn(e.breakContents), flatContents: hn(e.flatContents) } : e.type === ht ? { ...e, contents: hn(e.contents), expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(hn) } : e.type === un ? { type: "fill", parts: e.parts.map(hn) } : e.contents ? { ...e, contents: hn(e.contents) } : e;
}
function WF(e) {
  let t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ new Set();
  return r(hn(e));
  function r(i, a, l) {
    var s, u;
    if (typeof i == "string") return JSON.stringify(i);
    if (Array.isArray(i)) {
      let d = i.map(r).filter(Boolean);
      return d.length === 1 ? d[0] : `[${d.join(", ")}]`;
    }
    if (i.type === Ue) {
      let d = ((s = l == null ? void 0 : l[a + 1]) == null ? void 0 : s.type) === Ot;
      return i.literal ? d ? "literalline" : "literallineWithoutBreakParent" : i.hard ? d ? "hardline" : "hardlineWithoutBreakParent" : i.soft ? "softline" : "line";
    }
    if (i.type === Ot) return ((u = l == null ? void 0 : l[a - 1]) == null ? void 0 : u.type) === Ue && l[a - 1].hard ? void 0 : "breakParent";
    if (i.type === Tn) return "trim";
    if (i.type === An) return "indent(" + r(i.contents) + ")";
    if (i.type === On) return i.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + r(i.contents) + ")" : i.n < 0 ? "dedent(" + r(i.contents) + ")" : i.n.type === "root" ? "markAsRoot(" + r(i.contents) + ")" : "align(" + JSON.stringify(i.n) + ", " + r(i.contents) + ")";
    if (i.type === xt) return "ifBreak(" + r(i.breakContents) + (i.flatContents ? ", " + r(i.flatContents) : "") + (i.groupId ? (i.flatContents ? "" : ', ""') + `, { groupId: ${o(i.groupId)} }` : "") + ")";
    if (i.type === Rn) {
      let d = [];
      i.negate && d.push("negate: true"), i.groupId && d.push(`groupId: ${o(i.groupId)}`);
      let p = d.length > 0 ? `, { ${d.join(", ")} }` : "";
      return `indentIfBreak(${r(i.contents)}${p})`;
    }
    if (i.type === ht) {
      let d = [];
      i.break && i.break !== "propagated" && d.push("shouldBreak: true"), i.id && d.push(`id: ${o(i.id)}`);
      let p = d.length > 0 ? `, { ${d.join(", ")} }` : "";
      return i.expandedStates ? `conditionalGroup([${i.expandedStates.map((f) => r(f)).join(",")}]${p})` : `group(${r(i.contents)}${p})`;
    }
    if (i.type === un) return `fill([${i.parts.map((d) => r(d)).join(", ")}])`;
    if (i.type === Mn) return "lineSuffix(" + r(i.contents) + ")";
    if (i.type === Ln) return "lineSuffixBoundary";
    if (i.type === cn) return `label(${JSON.stringify(i.label)}, ${r(i.contents)})`;
    throw new Error("Unknown doc type " + i.type);
  }
  function o(i) {
    if (typeof i != "symbol") return JSON.stringify(String(i));
    if (i in t) return t[i];
    let a = i.description || "symbol";
    for (let l = 0; ; l++) {
      let s = a + (l > 0 ? ` #${l}` : "");
      if (!n.has(s)) return n.add(s), t[i] = `Symbol.for(${JSON.stringify(s)})`;
    }
  }
}
var zF = (e, t, n) => {
  if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[n < 0 ? t.length + n : n] : t.at(n);
}, Ie = zF, HF = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function VF(e) {
  return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function UF(e) {
  return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9800 && e <= 9811 || e === 9855 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var YF = (e) => !(VF(e) || UF(e)), KF = /[^\x20-\x7F]/u;
function QF(e) {
  if (!e) return 0;
  if (!KF.test(e)) return e.length;
  e = e.replace(HF(), "  ");
  let t = 0;
  for (let n of e) {
    let r = n.codePointAt(0);
    r <= 31 || r >= 127 && r <= 159 || r >= 768 && r <= 879 || (t += YF(r) ? 1 : 2);
  }
  return t;
}
var If = QF;
function Ls(e, t) {
  if (typeof e == "string") return t(e);
  let n = /* @__PURE__ */ new Map();
  return r(e);
  function r(i) {
    if (n.has(i)) return n.get(i);
    let a = o(i);
    return n.set(i, a), a;
  }
  function o(i) {
    switch (oo(i)) {
      case Fn:
        return t(i.map(r));
      case un:
        return t({ ...i, parts: i.parts.map(r) });
      case xt:
        return t({ ...i, breakContents: r(i.breakContents), flatContents: r(i.flatContents) });
      case ht: {
        let { expandedStates: a, contents: l } = i;
        return a ? (a = a.map(r), l = a[0]) : l = r(l), t({ ...i, contents: l, expandedStates: a });
      }
      case On:
      case An:
      case Rn:
      case cn:
      case Mn:
        return t({ ...i, contents: r(i.contents) });
      case no:
      case ro:
      case Tn:
      case Ln:
      case Ue:
      case Ot:
        return t(i);
      default:
        throw new Qo(i);
    }
  }
}
function Bf(e, t, n) {
  let r = n, o = !1;
  function i(a) {
    if (o) return !1;
    let l = t(a);
    l !== void 0 && (o = !0, r = l);
  }
  return Mf(e, i), r;
}
function XF(e) {
  if (e.type === ht && e.break || e.type === Ue && e.hard || e.type === Ot) return !0;
}
function GF(e) {
  return Bf(e, XF, !1);
}
function th(e) {
  if (e.length > 0) {
    let t = Ie(!1, e, -1);
    !t.expandedStates && !t.break && (t.break = "propagated");
  }
  return null;
}
function qF(e) {
  let t = /* @__PURE__ */ new Set(), n = [];
  function r(i) {
    if (i.type === Ot && th(n), i.type === ht) {
      if (n.push(i), t.has(i)) return !1;
      t.add(i);
    }
  }
  function o(i) {
    i.type === ht && n.pop().break && th(n);
  }
  Mf(e, r, o, !0);
}
function JF(e) {
  return e.type === Ue && !e.hard ? e.soft ? "" : " " : e.type === xt ? e.flatContents : e;
}
function ZF(e) {
  return Ls(e, JF);
}
function nh(e) {
  for (e = [...e]; e.length >= 2 && Ie(!1, e, -2).type === Ue && Ie(!1, e, -1).type === Ot; ) e.length -= 2;
  if (e.length > 0) {
    let t = zi(Ie(!1, e, -1));
    e[e.length - 1] = t;
  }
  return e;
}
function zi(e) {
  switch (oo(e)) {
    case An:
    case Rn:
    case ht:
    case Mn:
    case cn: {
      let t = zi(e.contents);
      return { ...e, contents: t };
    }
    case xt:
      return { ...e, breakContents: zi(e.breakContents), flatContents: zi(e.flatContents) };
    case un:
      return { ...e, parts: nh(e.parts) };
    case Fn:
      return nh(e);
    case no:
      return e.replace(/[\n\r]*$/u, "");
    case On:
    case ro:
    case Tn:
    case Ln:
    case Ue:
    case Ot:
      break;
    default:
      throw new Qo(e);
  }
  return e;
}
function Vy(e) {
  return zi(tk(e));
}
function ek(e) {
  switch (oo(e)) {
    case un:
      if (e.parts.every((t) => t === "")) return "";
      break;
    case ht:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === ht && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
      break;
    case On:
    case An:
    case Rn:
    case Mn:
      if (!e.contents) return "";
      break;
    case xt:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case Fn: {
      let t = [];
      for (let n of e) {
        if (!n) continue;
        let [r, ...o] = Array.isArray(n) ? n : [n];
        typeof r == "string" && typeof Ie(!1, t, -1) == "string" ? t[t.length - 1] += r : t.push(r), t.push(...o);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case no:
    case ro:
    case Tn:
    case Ln:
    case Ue:
    case cn:
    case Ot:
      break;
    default:
      throw new Qo(e);
  }
  return e;
}
function tk(e) {
  return Ls(e, (t) => ek(t));
}
function nk(e, t = Wy) {
  return Ls(e, (n) => typeof n == "string" ? zy(t, n.split(`
`)) : n);
}
function rk(e) {
  if (e.type === Ue) return !0;
}
function ok(e) {
  return Bf(e, rk, !1);
}
function Uy(e, t) {
  return e.type === cn ? { ...e, contents: t(e.contents) } : t(e);
}
var lt = Symbol("MODE_BREAK"), qt = Symbol("MODE_FLAT"), Hi = Symbol("cursor");
function Yy() {
  return { value: "", length: 0, queue: [] };
}
function ik(e, t) {
  return rd(e, { type: "indent" }, t);
}
function ak(e, t, n) {
  return t === Number.NEGATIVE_INFINITY ? e.root || Yy() : t < 0 ? rd(e, { type: "dedent" }, n) : t ? t.type === "root" ? { ...e, root: e } : rd(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, n) : e;
}
function rd(e, t, n) {
  let r = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], o = "", i = 0, a = 0, l = 0;
  for (let h of r) switch (h.type) {
    case "indent":
      d(), n.useTabs ? s(1) : u(n.tabWidth);
      break;
    case "stringAlign":
      d(), o += h.n, i += h.n.length;
      break;
    case "numberAlign":
      a += 1, l += h.n;
      break;
    default:
      throw new Error(`Unexpected type '${h.type}'`);
  }
  return f(), { ...e, value: o, length: i, queue: r };
  function s(h) {
    o += "	".repeat(h), i += n.tabWidth * h;
  }
  function u(h) {
    o += " ".repeat(h), i += h;
  }
  function d() {
    n.useTabs ? p() : f();
  }
  function p() {
    a > 0 && s(a), m();
  }
  function f() {
    l > 0 && u(l), m();
  }
  function m() {
    a = 0, l = 0;
  }
}
function od(e) {
  let t = 0, n = 0, r = e.length;
  e: for (; r--; ) {
    let o = e[r];
    if (o === Hi) {
      n++;
      continue;
    }
    for (let i = o.length - 1; i >= 0; i--) {
      let a = o[i];
      if (a === " " || a === "	") t++;
      else {
        e[r] = o.slice(0, i + 1);
        break e;
      }
    }
  }
  if (t > 0 || n > 0) for (e.length = r + 1; n-- > 0; ) e.push(Hi);
  return t;
}
function ol(e, t, n, r, o, i) {
  if (n === Number.POSITIVE_INFINITY) return !0;
  let a = t.length, l = [e], s = [];
  for (; n >= 0; ) {
    if (l.length === 0) {
      if (a === 0) return !0;
      l.push(t[--a]);
      continue;
    }
    let { mode: u, doc: d } = l.pop(), p = oo(d);
    switch (p) {
      case no:
        s.push(d), n -= If(d);
        break;
      case Fn:
      case un: {
        let f = p === Fn ? d : d.parts;
        for (let m = f.length - 1; m >= 0; m--) l.push({ mode: u, doc: f[m] });
        break;
      }
      case An:
      case On:
      case Rn:
      case cn:
        l.push({ mode: u, doc: d.contents });
        break;
      case Tn:
        n += od(s);
        break;
      case ht: {
        if (i && d.break) return !1;
        let f = d.break ? lt : u, m = d.expandedStates && f === lt ? Ie(!1, d.expandedStates, -1) : d.contents;
        l.push({ mode: f, doc: m });
        break;
      }
      case xt: {
        let f = (d.groupId ? o[d.groupId] || qt : u) === lt ? d.breakContents : d.flatContents;
        f && l.push({ mode: u, doc: f });
        break;
      }
      case Ue:
        if (u === lt || d.hard) return !0;
        d.soft || (s.push(" "), n--);
        break;
      case Mn:
        r = !0;
        break;
      case Ln:
        if (r) return !1;
        break;
    }
  }
  return !1;
}
function Is(e, t) {
  let n = {}, r = t.printWidth, o = Rf(t.endOfLine), i = 0, a = [{ ind: Yy(), mode: lt, doc: e }], l = [], s = !1, u = [], d = 0;
  for (qF(e); a.length > 0; ) {
    let { ind: f, mode: m, doc: h } = a.pop();
    switch (oo(h)) {
      case no: {
        let g = o !== `
` ? Rs(!1, h, `
`, o) : h;
        l.push(g), a.length > 0 && (i += If(g));
        break;
      }
      case Fn:
        for (let g = h.length - 1; g >= 0; g--) a.push({ ind: f, mode: m, doc: h[g] });
        break;
      case ro:
        if (d >= 2) throw new Error("There are too many 'cursor' in doc.");
        l.push(Hi), d++;
        break;
      case An:
        a.push({ ind: ik(f, t), mode: m, doc: h.contents });
        break;
      case On:
        a.push({ ind: ak(f, h.n, t), mode: m, doc: h.contents });
        break;
      case Tn:
        i -= od(l);
        break;
      case ht:
        switch (m) {
          case qt:
            if (!s) {
              a.push({ ind: f, mode: h.break ? lt : qt, doc: h.contents });
              break;
            }
          case lt: {
            s = !1;
            let g = { ind: f, mode: qt, doc: h.contents }, x = r - i, y = u.length > 0;
            if (!h.break && ol(g, a, x, y, n)) a.push(g);
            else if (h.expandedStates) {
              let v = Ie(!1, h.expandedStates, -1);
              if (h.break) {
                a.push({ ind: f, mode: lt, doc: v });
                break;
              } else for (let w = 1; w < h.expandedStates.length + 1; w++) if (w >= h.expandedStates.length) {
                a.push({ ind: f, mode: lt, doc: v });
                break;
              } else {
                let C = h.expandedStates[w], E = { ind: f, mode: qt, doc: C };
                if (ol(E, a, x, y, n)) {
                  a.push(E);
                  break;
                }
              }
            } else a.push({ ind: f, mode: lt, doc: h.contents });
            break;
          }
        }
        h.id && (n[h.id] = Ie(!1, a, -1).mode);
        break;
      case un: {
        let g = r - i, { parts: x } = h;
        if (x.length === 0) break;
        let [y, v] = x, w = { ind: f, mode: qt, doc: y }, C = { ind: f, mode: lt, doc: y }, E = ol(w, [], g, u.length > 0, n, !0);
        if (x.length === 1) {
          E ? a.push(w) : a.push(C);
          break;
        }
        let S = { ind: f, mode: qt, doc: v }, b = { ind: f, mode: lt, doc: v };
        if (x.length === 2) {
          E ? a.push(S, w) : a.push(b, C);
          break;
        }
        x.splice(0, 2);
        let k = { ind: f, mode: m, doc: Iy(x) }, P = x[0];
        ol({ ind: f, mode: qt, doc: [y, v, P] }, [], g, u.length > 0, n, !0) ? a.push(k, S, w) : E ? a.push(k, b, w) : a.push(k, b, C);
        break;
      }
      case xt:
      case Rn: {
        let g = h.groupId ? n[h.groupId] : m;
        if (g === lt) {
          let x = h.type === xt ? h.breakContents : h.negate ? h.contents : ts(h.contents);
          x && a.push({ ind: f, mode: m, doc: x });
        }
        if (g === qt) {
          let x = h.type === xt ? h.flatContents : h.negate ? ts(h.contents) : h.contents;
          x && a.push({ ind: f, mode: m, doc: x });
        }
        break;
      }
      case Mn:
        u.push({ ind: f, mode: m, doc: h.contents });
        break;
      case Ln:
        u.length > 0 && a.push({ ind: f, mode: m, doc: Lf });
        break;
      case Ue:
        switch (m) {
          case qt:
            if (h.hard) s = !0;
            else {
              h.soft || (l.push(" "), i += 1);
              break;
            }
          case lt:
            if (u.length > 0) {
              a.push({ ind: f, mode: m, doc: h }, ...u.reverse()), u.length = 0;
              break;
            }
            h.literal ? f.root ? (l.push(o, f.root.value), i = f.root.length) : (l.push(o), i = 0) : (i -= od(l), l.push(o + f.value), i = f.length);
            break;
        }
        break;
      case cn:
        a.push({ ind: f, mode: m, doc: h.contents });
        break;
      case Ot:
        break;
      default:
        throw new Qo(h);
    }
    a.length === 0 && u.length > 0 && (a.push(...u.reverse()), u.length = 0);
  }
  let p = l.indexOf(Hi);
  if (p !== -1) {
    let f = l.indexOf(Hi, p + 1), m = l.slice(0, p).join(""), h = l.slice(p + 1, f).join(""), g = l.slice(f + 1).join("");
    return { formatted: m + h + g, cursorNodeStart: m.length, cursorNodeText: h };
  }
  return { formatted: l.join("") };
}
function lk(e, t, n = 0) {
  let r = 0;
  for (let o = n; o < e.length; ++o) e[o] === "	" ? r = r + t - r % t : r++;
  return r;
}
var $f = lk, _r, id, xl, sk = class {
  constructor(e) {
    dF(this, _r), this.stack = [e];
  }
  get key() {
    let { stack: e, siblings: t } = this;
    return Ie(!1, e, t === null ? -2 : -4) ?? null;
  }
  get index() {
    return this.siblings === null ? null : Ie(!1, this.stack, -2);
  }
  get node() {
    return Ie(!1, this.stack, -1);
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
    let { stack: e } = this, t = Ie(!1, e, -3);
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
    return [...bi(this, _r, xl).call(this)];
  }
  getName() {
    let { stack: e } = this, { length: t } = e;
    return t > 1 ? Ie(!1, e, -2) : null;
  }
  getValue() {
    return Ie(!1, this.stack, -1);
  }
  getNode(e = 0) {
    let t = bi(this, _r, id).call(this, e);
    return t === -1 ? null : this.stack[t];
  }
  getParentNode(e = 0) {
    return this.getNode(e + 1);
  }
  call(e, ...t) {
    let { stack: n } = this, { length: r } = n, o = Ie(!1, n, -1);
    for (let i of t) o = o[i], n.push(i, o);
    try {
      return e(this);
    } finally {
      n.length = r;
    }
  }
  callParent(e, t = 0) {
    let n = bi(this, _r, id).call(this, t + 1), r = this.stack.splice(n + 1);
    try {
      return e(this);
    } finally {
      this.stack.push(...r);
    }
  }
  each(e, ...t) {
    let { stack: n } = this, { length: r } = n, o = Ie(!1, n, -1);
    for (let i of t) o = o[i], n.push(i, o);
    try {
      for (let i = 0; i < o.length; ++i) n.push(i, o[i]), e(this, i, o), n.length -= 2;
    } finally {
      n.length = r;
    }
  }
  map(e, ...t) {
    let n = [];
    return this.each((r, o, i) => {
      n[o] = e(r, o, i);
    }, ...t), n;
  }
  match(...e) {
    let t = this.stack.length - 1, n = null, r = this.stack[t--];
    for (let o of e) {
      if (r === void 0) return !1;
      let i = null;
      if (typeof n == "number" && (i = n, n = this.stack[t--], r = this.stack[t--]), o && !o(r, n, i)) return !1;
      n = this.stack[t--], r = this.stack[t--];
    }
    return !0;
  }
  findAncestor(e) {
    for (let t of bi(this, _r, xl).call(this)) if (e(t)) return t;
  }
  hasAncestor(e) {
    for (let t of bi(this, _r, xl).call(this)) if (e(t)) return !0;
    return !1;
  }
};
_r = /* @__PURE__ */ new WeakSet(), id = function(e) {
  let { stack: t } = this;
  for (let n = t.length - 1; n >= 0; n -= 2) if (!Array.isArray(t[n]) && --e < 0) return n;
  return -1;
}, xl = function* () {
  let { stack: e } = this;
  for (let t = e.length - 3; t >= 0; t -= 2) {
    let n = e[t];
    Array.isArray(n) || (yield n);
  }
};
var uk = sk, Ky = new Proxy(() => {
}, { get: () => Ky }), ad = Ky;
function ck(e) {
  return e !== null && typeof e == "object";
}
var dk = ck;
function* Qy(e, t) {
  let { getVisitorKeys: n, filter: r = () => !0 } = t, o = (i) => dk(i) && r(i);
  for (let i of n(e)) {
    let a = e[i];
    if (Array.isArray(a)) for (let l of a) o(l) && (yield l);
    else o(a) && (yield a);
  }
}
function* fk(e, t) {
  let n = [e];
  for (let r = 0; r < n.length; r++) {
    let o = n[r];
    for (let i of Qy(o, t)) yield i, n.push(i);
  }
}
function ga(e) {
  return (t, n, r) => {
    let o = !!(r != null && r.backwards);
    if (n === !1) return !1;
    let { length: i } = t, a = n;
    for (; a >= 0 && a < i; ) {
      let l = t.charAt(a);
      if (e instanceof RegExp) {
        if (!e.test(l)) return a;
      } else if (!e.includes(l)) return a;
      o ? a-- : a++;
    }
    return a === -1 || a === i ? a : !1;
  };
}
var pk = ga(/\s/u), pr = ga(" 	"), Xy = ga(",; 	"), Gy = ga(/[^\n\r]/u);
function mk(e, t, n) {
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
var Gr = mk;
function hk(e, t, n = {}) {
  let r = pr(e, n.backwards ? t - 1 : t, n), o = Gr(e, r, n);
  return r !== o;
}
var ur = hk;
function vk(e) {
  return Array.isArray(e) && e.length > 0;
}
var gk = vk, qy = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]), yk = (e) => Object.keys(e).filter((t) => !qy.has(t));
function Dk(e) {
  return e ? (t) => e(t, qy) : yk;
}
var Bs = Dk;
function wk(e) {
  let t = e.type || e.kind || "(unknown type)", n = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
  return n.length > 20 && (n = n.slice(0, 19) + "…"), t + (n ? " " + n : "");
}
function Wf(e, t) {
  (e.comments ?? (e.comments = [])).push(t), t.printed = !1, t.nodeDescription = wk(e);
}
function bo(e, t) {
  t.leading = !0, t.trailing = !1, Wf(e, t);
}
function jr(e, t, n) {
  t.leading = !1, t.trailing = !1, n && (t.marker = n), Wf(e, t);
}
function Fo(e, t) {
  t.leading = !1, t.trailing = !0, Wf(e, t);
}
var $u = /* @__PURE__ */ new WeakMap();
function zf(e, t) {
  if ($u.has(e)) return $u.get(e);
  let { printer: { getCommentChildNodes: n, canAttachComment: r, getVisitorKeys: o }, locStart: i, locEnd: a } = t;
  if (!r) return [];
  let l = ((n == null ? void 0 : n(e, t)) ?? [...Qy(e, { getVisitorKeys: Bs(o) })]).flatMap((s) => r(s) ? [s] : zf(s, t));
  return l.sort((s, u) => i(s) - i(u) || a(s) - a(u)), $u.set(e, l), l;
}
function Jy(e, t, n, r) {
  let { locStart: o, locEnd: i } = n, a = o(t), l = i(t), s = zf(e, n), u, d, p = 0, f = s.length;
  for (; p < f; ) {
    let m = p + f >> 1, h = s[m], g = o(h), x = i(h);
    if (g <= a && l <= x) return Jy(h, t, n, h);
    if (x <= a) {
      u = h, p = m + 1;
      continue;
    }
    if (l <= g) {
      d = h, f = m;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if ((r == null ? void 0 : r.type) === "TemplateLiteral") {
    let { quasis: m } = r, h = zu(m, t, n);
    u && zu(m, u, n) !== h && (u = null), d && zu(m, d, n) !== h && (d = null);
  }
  return { enclosingNode: r, precedingNode: u, followingNode: d };
}
var Wu = () => !1;
function xk(e, t) {
  let { comments: n } = e;
  if (delete e.comments, !gk(n) || !t.printer.canAttachComment) return;
  let r = [], { locStart: o, locEnd: i, printer: { experimentalFeatures: { avoidAstMutation: a = !1 } = {}, handleComments: l = {} }, originalText: s } = t, { ownLine: u = Wu, endOfLine: d = Wu, remaining: p = Wu } = l, f = n.map((m, h) => ({ ...Jy(e, m, t), comment: m, text: s, options: t, ast: e, isLastComment: n.length - 1 === h }));
  for (let [m, h] of f.entries()) {
    let { comment: g, precedingNode: x, enclosingNode: y, followingNode: v, text: w, options: C, ast: E, isLastComment: S } = h;
    if (C.parser === "json" || C.parser === "json5" || C.parser === "jsonc" || C.parser === "__js_expression" || C.parser === "__ts_expression" || C.parser === "__vue_expression" || C.parser === "__vue_ts_expression") {
      if (o(g) - o(E) <= 0) {
        bo(E, g);
        continue;
      }
      if (i(g) - i(E) >= 0) {
        Fo(E, g);
        continue;
      }
    }
    let b;
    if (a ? b = [h] : (g.enclosingNode = y, g.precedingNode = x, g.followingNode = v, b = [g, w, C, E, S]), Ck(w, C, f, m)) g.placement = "ownLine", u(...b) || (v ? bo(v, g) : x ? Fo(x, g) : jr(y || E, g));
    else if (Ek(w, C, f, m)) g.placement = "endOfLine", d(...b) || (x ? Fo(x, g) : v ? bo(v, g) : jr(y || E, g));
    else if (g.placement = "remaining", !p(...b)) if (x && v) {
      let k = r.length;
      k > 0 && r[k - 1].followingNode !== v && rh(r, C), r.push(h);
    } else x ? Fo(x, g) : v ? bo(v, g) : jr(y || E, g);
  }
  if (rh(r, t), !a) for (let m of n) delete m.precedingNode, delete m.enclosingNode, delete m.followingNode;
}
var Zy = (e) => !/[\S\n\u2028\u2029]/u.test(e);
function Ck(e, t, n, r) {
  let { comment: o, precedingNode: i } = n[r], { locStart: a, locEnd: l } = t, s = a(o);
  if (i) for (let u = r - 1; u >= 0; u--) {
    let { comment: d, precedingNode: p } = n[u];
    if (p !== i || !Zy(e.slice(l(d), s))) break;
    s = a(d);
  }
  return ur(e, s, { backwards: !0 });
}
function Ek(e, t, n, r) {
  let { comment: o, followingNode: i } = n[r], { locStart: a, locEnd: l } = t, s = l(o);
  if (i) for (let u = r + 1; u < n.length; u++) {
    let { comment: d, followingNode: p } = n[u];
    if (p !== i || !Zy(e.slice(s, a(d)))) break;
    s = l(d);
  }
  return ur(e, s);
}
function rh(e, t) {
  var n, r;
  let o = e.length;
  if (o === 0) return;
  let { precedingNode: i, followingNode: a } = e[0], l = t.locStart(a), s;
  for (s = o; s > 0; --s) {
    let { comment: u, precedingNode: d, followingNode: p } = e[s - 1];
    ad.strictEqual(d, i), ad.strictEqual(p, a);
    let f = t.originalText.slice(t.locEnd(u), l);
    if (((r = (n = t.printer).isGap) == null ? void 0 : r.call(n, f, t)) ?? /^[\s(]*$/u.test(f)) l = t.locStart(u);
    else break;
  }
  for (let [u, { comment: d }] of e.entries()) u < s ? Fo(i, d) : bo(a, d);
  for (let u of [i, a]) u.comments && u.comments.length > 1 && u.comments.sort((d, p) => t.locStart(d) - t.locStart(p));
  e.length = 0;
}
function zu(e, t, n) {
  let r = n.locStart(t) - 1;
  for (let o = 1; o < e.length; ++o) if (r < n.locStart(e[o])) return o - 1;
  return 0;
}
function Sk(e, t) {
  let n = t - 1;
  n = pr(e, n, { backwards: !0 }), n = Gr(e, n, { backwards: !0 }), n = pr(e, n, { backwards: !0 });
  let r = Gr(e, n, { backwards: !0 });
  return n !== r;
}
var Hf = Sk;
function eD(e, t) {
  let n = e.node;
  return n.printed = !0, t.printer.printComment(e, t);
}
function bk(e, t) {
  var n;
  let r = e.node, o = [eD(e, t)], { printer: i, originalText: a, locStart: l, locEnd: s } = t;
  if ((n = i.isBlockComment) != null && n.call(i, r)) {
    let d = ur(a, s(r)) ? ur(a, l(r), { backwards: !0 }) ? Wr : $y : " ";
    o.push(d);
  } else o.push(Wr);
  let u = Gr(a, pr(a, s(r)));
  return u !== !1 && ur(a, u) && o.push(Wr), o;
}
function Fk(e, t, n) {
  var r;
  let o = e.node, i = eD(e, t), { printer: a, originalText: l, locStart: s } = t, u = (r = a.isBlockComment) == null ? void 0 : r.call(a, o);
  if (n != null && n.hasLineSuffix && !(n != null && n.isBlock) || ur(l, s(o), { backwards: !0 })) {
    let d = Hf(l, s(o));
    return { doc: td([Wr, d ? Wr : "", i]), isBlock: u, hasLineSuffix: !0 };
  }
  return !u || n != null && n.hasLineSuffix ? { doc: [td([" ", i]), Ms], isBlock: u, hasLineSuffix: !0 } : { doc: [" ", i], isBlock: u, hasLineSuffix: !1 };
}
function kk(e, t) {
  let n = e.node;
  if (!n) return {};
  let r = t[Symbol.for("printedComments")];
  if ((n.comments || []).filter((l) => !r.has(l)).length === 0) return { leading: "", trailing: "" };
  let o = [], i = [], a;
  return e.each(() => {
    let l = e.node;
    if (r != null && r.has(l)) return;
    let { leading: s, trailing: u } = l;
    s ? o.push(bk(e, t)) : u && (a = Fk(e, t, a), i.push(a.doc));
  }, "comments"), { leading: o, trailing: i };
}
function Nk(e, t, n) {
  let { leading: r, trailing: o } = kk(e, n);
  return !r && !o ? t : Uy(t, (i) => [r, i, o]);
}
function Pk(e) {
  let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: n } = e;
  for (let r of t) {
    if (!r.printed && !n.has(r)) throw new Error('Comment "' + r.value.trim() + '" was not printed. Please report this error!');
    delete r.printed;
  }
}
var tD = class extends Error {
  constructor() {
    super(...arguments);
    Aa(this, "name", "ConfigError");
  }
}, oh = class extends Error {
  constructor() {
    super(...arguments);
    Aa(this, "name", "UndefinedParserError");
  }
}, _k = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }] }, plugins: { type: "path", array: !0, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: !1, description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`, cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
function nD({ plugins: e = [], showDeprecated: t = !1 } = {}) {
  let n = e.flatMap((o) => o.languages ?? []), r = [];
  for (let o of Ak(Object.assign({}, ...e.map(({ options: i }) => i), _k))) !t && o.deprecated || (Array.isArray(o.choices) && (t || (o.choices = o.choices.filter((i) => !i.deprecated)), o.name === "parser" && (o.choices = [...o.choices, ...jk(o.choices, n, e)])), o.pluginDefaults = Object.fromEntries(e.filter((i) => {
    var a;
    return ((a = i.defaultOptions) == null ? void 0 : a[o.name]) !== void 0;
  }).map((i) => [i.name, i.defaultOptions[o.name]])), r.push(o));
  return { languages: n, options: r };
}
function* jk(e, t, n) {
  let r = new Set(e.map((o) => o.value));
  for (let o of t) if (o.parsers) {
    for (let i of o.parsers) if (!r.has(i)) {
      r.add(i);
      let a = n.find((s) => s.parsers && Object.prototype.hasOwnProperty.call(s.parsers, i)), l = o.name;
      a != null && a.name && (l += ` (plugin: ${a.name})`), yield { value: i, description: l };
    }
  }
}
function Ak(e) {
  let t = [];
  for (let [n, r] of Object.entries(e)) {
    let o = { name: n, ...r };
    Array.isArray(o.default) && (o.default = Ie(!1, o.default, -1).value), t.push(o);
  }
  return t;
}
var Ok = (e) => String(e).split(/[/\\]/u).pop();
function ih(e, t) {
  if (!t) return;
  let n = Ok(t).toLowerCase();
  return e.find(({ filenames: r }) => r == null ? void 0 : r.some((o) => o.toLowerCase() === n)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.some((o) => n.endsWith(o)));
}
function Tk(e, t) {
  if (t) return e.find(({ name: n }) => n.toLowerCase() === t) ?? e.find(({ aliases: n }) => n == null ? void 0 : n.includes(t)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.includes(`.${t}`));
}
function Rk(e, t) {
  let n = e.plugins.flatMap((o) => o.languages ?? []), r = Tk(n, t.language) ?? ih(n, t.physicalFile) ?? ih(n, t.file) ?? (t.physicalFile, void 0);
  return r == null ? void 0 : r.parsers[0];
}
var Mk = Rk, ko = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
  if (e === null || typeof e != "object") return JSON.stringify(e);
  if (Array.isArray(e)) return `[${e.map((n) => ko.value(n)).join(", ")}]`;
  let t = Object.keys(e);
  return t.length === 0 ? "{}" : `{ ${t.map((n) => `${ko.key(n)}: ${ko.value(e[n])}`).join(", ")} }`;
}, pair: ({ key: e, value: t }) => ko.value({ [e]: t }) }, ah = Ts(Tf()), Lk = (e, t, { descriptor: n }) => {
  let r = [`${ah.default.yellow(typeof e == "string" ? n.key(e) : n.pair(e))} is deprecated`];
  return t && r.push(`we now treat it as ${ah.default.blue(typeof t == "string" ? n.key(t) : n.pair(t))}`), r.join("; ") + ".";
}, No = Ts(Tf()), rD = Symbol.for("vnopts.VALUE_NOT_EXIST"), Cl = Symbol.for("vnopts.VALUE_UNCHANGED"), lh = " ".repeat(2), Ik = (e, t, n) => {
  let { text: r, list: o } = n.normalizeExpectedResult(n.schemas[e].expected(n)), i = [];
  return r && i.push(sh(e, t, r, n.descriptor)), o && i.push([sh(e, t, o.title, n.descriptor)].concat(o.values.map((a) => oD(a, n.loggerPrintWidth))).join(`
`)), iD(i, n.loggerPrintWidth);
};
function sh(e, t, n, r) {
  return [`Invalid ${No.default.red(r.key(e))} value.`, `Expected ${No.default.blue(n)},`, `but received ${t === rD ? No.default.gray("nothing") : No.default.red(r.value(t))}.`].join(" ");
}
function oD({ text: e, list: t }, n) {
  let r = [];
  return e && r.push(`- ${No.default.blue(e)}`), t && r.push([`- ${No.default.blue(t.title)}:`].concat(t.values.map((o) => oD(o, n - lh.length).replace(/^|\n/g, `$&${lh}`))).join(`
`)), iD(r, n);
}
function iD(e, t) {
  if (e.length === 1) return e[0];
  let [n, r] = e, [o, i] = e.map((a) => a.split(`
`, 1)[0].length);
  return o > t && o > i ? r : n;
}
var uh = Ts(Tf()), Hu = [], ch = [];
function Bk(e, t) {
  if (e === t) return 0;
  let n = e;
  e.length > t.length && (e = t, t = n);
  let r = e.length, o = t.length;
  for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-o); ) r--, o--;
  let i = 0;
  for (; i < r && e.charCodeAt(i) === t.charCodeAt(i); ) i++;
  if (r -= i, o -= i, r === 0) return o;
  let a, l, s, u, d = 0, p = 0;
  for (; d < r; ) ch[d] = e.charCodeAt(i + d), Hu[d] = ++d;
  for (; p < o; ) for (a = t.charCodeAt(i + p), s = p++, l = p, d = 0; d < r; d++) u = a === ch[d] ? s : s + 1, s = Hu[d], l = Hu[d] = s > l ? u > l ? l + 1 : u : u > s ? s + 1 : u;
  return l;
}
var aD = (e, t, { descriptor: n, logger: r, schemas: o }) => {
  let i = [`Ignored unknown option ${uh.default.yellow(n.pair({ key: e, value: t }))}.`], a = Object.keys(o).sort().find((l) => Bk(e, l) < 3);
  a && i.push(`Did you mean ${uh.default.blue(n.key(a))}?`), r.warn(i.join(" "));
}, $k = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
function Wk(e, t) {
  let n = new e(t), r = Object.create(n);
  for (let o of $k) o in t && (r[o] = zk(t[o], n, Cr.prototype[o].length));
  return r;
}
var Cr = class {
  static create(e) {
    return Wk(this, e);
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
    return Cl;
  }
};
function zk(e, t, n) {
  return typeof e == "function" ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1)) : () => e;
}
var Hk = class extends Cr {
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
}, Vk = class extends Cr {
  expected() {
    return "anything";
  }
  validate() {
    return !0;
  }
}, Uk = class extends Cr {
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
      o !== !1 && n.push(...o.map(({ value: i }) => ({ value: [i] })));
    }
    return n;
  }
  forward(e, t) {
    let n = [];
    for (let r of e) {
      let o = t.normalizeForwardResult(this._valueSchema.forward(r, t), r);
      n.push(...o.map(dh));
    }
    return n;
  }
  redirect(e, t) {
    let n = [], r = [];
    for (let o of e) {
      let i = t.normalizeRedirectResult(this._valueSchema.redirect(o, t), o);
      "remain" in i && n.push(i.remain), r.push(...i.redirect.map(dh));
    }
    return n.length === 0 ? { redirect: r } : { redirect: r, remain: n };
  }
  overlap(e, t) {
    return e.concat(t);
  }
};
function dh({ from: e, to: t }) {
  return { from: [e], to: t };
}
var Yk = class extends Cr {
  expected() {
    return "true or false";
  }
  validate(e) {
    return typeof e == "boolean";
  }
};
function Kk(e, t) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let r of e) {
    let o = r[t];
    if (n[o]) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    n[o] = r;
  }
  return n;
}
function Qk(e, t) {
  let n = /* @__PURE__ */ new Map();
  for (let r of e) {
    let o = r[t];
    if (n.has(o)) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    n.set(o, r);
  }
  return n;
}
function Xk() {
  let e = /* @__PURE__ */ Object.create(null);
  return (t) => {
    let n = JSON.stringify(t);
    return e[n] ? !0 : (e[n] = !0, !1);
  };
}
function Gk(e, t) {
  let n = [], r = [];
  for (let o of e) t(o) ? n.push(o) : r.push(o);
  return [n, r];
}
function qk(e) {
  return e === Math.floor(e);
}
function Jk(e, t) {
  if (e === t) return 0;
  let n = typeof e, r = typeof t, o = ["undefined", "object", "boolean", "number", "string"];
  return n !== r ? o.indexOf(n) - o.indexOf(r) : n !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
}
function Zk(e) {
  return (...t) => {
    let n = e(...t);
    return typeof n == "string" ? new Error(n) : n;
  };
}
function fh(e) {
  return e === void 0 ? {} : e;
}
function lD(e) {
  if (typeof e == "string") return { text: e };
  let { text: t, list: n } = e;
  return eN((t || n) !== void 0, "Unexpected `expected` result, there should be at least one field."), n ? { text: t, list: { title: n.title, values: n.values.map(lD) } } : { text: t };
}
function ph(e, t) {
  return e === !0 ? !0 : e === !1 ? { value: t } : e;
}
function mh(e, t, n = !1) {
  return e === !1 ? !1 : e === !0 ? n ? !0 : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? !1 : e;
}
function hh(e, t) {
  return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
}
function ld(e, t) {
  return e === void 0 ? [] : Array.isArray(e) ? e.map((n) => hh(n, t)) : [hh(e, t)];
}
function vh(e, t) {
  let n = ld(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
  return n.length === 0 ? { remain: t, redirect: n } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: n } : { redirect: n };
}
function eN(e, t) {
  if (!e) throw new Error(t);
}
var tN = class extends Cr {
  constructor(e) {
    super(e), this._choices = Qk(e.choices.map((t) => t && typeof t == "object" ? t : { value: t }), "value");
  }
  expected({ descriptor: e }) {
    let t = Array.from(this._choices.keys()).map((o) => this._choices.get(o)).filter(({ hidden: o }) => !o).map((o) => o.value).sort(Jk).map(e.value), n = t.slice(0, -2), r = t.slice(-2);
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
}, nN = class extends Cr {
  expected() {
    return "a number";
  }
  validate(e, t) {
    return typeof e == "number";
  }
}, rN = class extends nN {
  expected() {
    return "an integer";
  }
  validate(e, t) {
    return t.normalizeValidateResult(super.validate(e, t), e) === !0 && qk(e);
  }
}, gh = class extends Cr {
  expected() {
    return "a string";
  }
  validate(e) {
    return typeof e == "string";
  }
}, oN = ko, iN = aD, aN = Ik, lN = Lk, sN = class {
  constructor(e, t) {
    let { logger: n = console, loggerPrintWidth: r = 80, descriptor: o = oN, unknown: i = iN, invalid: a = aN, deprecated: l = lN, missing: s = () => !1, required: u = () => !1, preprocess: d = (f) => f, postprocess: p = () => Cl } = t || {};
    this._utils = { descriptor: o, logger: n || { warn: () => {
    } }, loggerPrintWidth: r, schemas: Kk(e, "name"), normalizeDefaultResult: fh, normalizeExpectedResult: lD, normalizeDeprecatedResult: mh, normalizeForwardResult: ld, normalizeRedirectResult: vh, normalizeValidateResult: ph }, this._unknownHandler = i, this._invalidHandler = Zk(a), this._deprecatedHandler = l, this._identifyMissing = (f, m) => !(f in m) || s(f, m), this._identifyRequired = u, this._preprocess = d, this._postprocess = p, this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = Xk();
  }
  normalize(e) {
    let t = {}, n = [this._preprocess(e, this._utils)], r = () => {
      for (; n.length !== 0; ) {
        let o = n.shift(), i = this._applyNormalization(o, t);
        n.push(...i);
      }
    };
    r();
    for (let o of Object.keys(this._utils.schemas)) {
      let i = this._utils.schemas[o];
      if (!(o in t)) {
        let a = fh(i.default(this._utils));
        "value" in a && n.push({ [o]: a.value });
      }
    }
    r();
    for (let o of Object.keys(this._utils.schemas)) {
      if (!(o in t)) continue;
      let i = this._utils.schemas[o], a = t[o], l = i.postprocess(a, this._utils);
      l !== Cl && (this._applyValidation(l, o, i), t[o] = l);
    }
    return this._applyPostprocess(t), this._applyRequiredCheck(t), t;
  }
  _applyNormalization(e, t) {
    let n = [], { knownKeys: r, unknownKeys: o } = this._partitionOptionKeys(e);
    for (let i of r) {
      let a = this._utils.schemas[i], l = a.preprocess(e[i], this._utils);
      this._applyValidation(l, i, a);
      let s = ({ from: p, to: f }) => {
        n.push(typeof f == "string" ? { [f]: p } : { [f.key]: f.value });
      }, u = ({ value: p, redirectTo: f }) => {
        let m = mh(a.deprecated(p, this._utils), l, !0);
        if (m !== !1) if (m === !0) this._hasDeprecationWarned(i) || this._utils.logger.warn(this._deprecatedHandler(i, f, this._utils));
        else for (let { value: h } of m) {
          let g = { key: i, value: h };
          if (!this._hasDeprecationWarned(g)) {
            let x = typeof f == "string" ? { key: f, value: h } : f;
            this._utils.logger.warn(this._deprecatedHandler(g, x, this._utils));
          }
        }
      };
      ld(a.forward(l, this._utils), l).forEach(s);
      let d = vh(a.redirect(l, this._utils), l);
      if (d.redirect.forEach(s), "remain" in d) {
        let p = d.remain;
        t[i] = i in t ? a.overlap(t[i], p, this._utils) : p, u({ value: p });
      }
      for (let { from: p, to: f } of d.redirect) u({ value: p, redirectTo: f });
    }
    for (let i of o) {
      let a = e[i];
      this._applyUnknownHandler(i, a, t, (l, s) => {
        n.push({ [l]: s });
      });
    }
    return n;
  }
  _applyRequiredCheck(e) {
    for (let t of Object.keys(this._utils.schemas)) if (this._identifyMissing(t, e) && this._identifyRequired(t)) throw this._invalidHandler(t, rD, this._utils);
  }
  _partitionOptionKeys(e) {
    let [t, n] = Gk(Object.keys(e).filter((r) => !this._identifyMissing(r, e)), (r) => r in this._utils.schemas);
    return { knownKeys: t, unknownKeys: n };
  }
  _applyValidation(e, t, n) {
    let r = ph(n.validate(e, this._utils), e);
    if (r !== !0) throw this._invalidHandler(t, r.value, this._utils);
  }
  _applyUnknownHandler(e, t, n, r) {
    let o = this._unknownHandler(e, t, this._utils);
    if (o) for (let i of Object.keys(o)) {
      if (this._identifyMissing(i, o)) continue;
      let a = o[i];
      i in this._utils.schemas ? r(i, a) : n[i] = a;
    }
  }
  _applyPostprocess(e) {
    let t = this._postprocess(e, this._utils);
    if (t !== Cl) {
      if (t.delete) for (let n of t.delete) delete e[n];
      if (t.override) {
        let { knownKeys: n, unknownKeys: r } = this._partitionOptionKeys(t.override);
        for (let o of n) {
          let i = t.override[o];
          this._applyValidation(i, o, this._utils.schemas[o]), e[o] = i;
        }
        for (let o of r) {
          let i = t.override[o];
          this._applyUnknownHandler(o, i, e, (a, l) => {
            let s = this._utils.schemas[a];
            this._applyValidation(l, a, s), e[a] = l;
          });
        }
      }
    }
  }
}, Vu;
function uN(e, t, { logger: n = !1, isCLI: r = !1, passThrough: o = !1, FlagSchema: i, descriptor: a } = {}) {
  if (r) {
    if (!i) throw new Error("'FlagSchema' option is required.");
    if (!a) throw new Error("'descriptor' option is required.");
  } else a = ko;
  let l = o ? Array.isArray(o) ? (f, m) => o.includes(f) ? { [f]: m } : void 0 : (f, m) => ({ [f]: m }) : (f, m, h) => {
    let { _: g, ...x } = h.schemas;
    return aD(f, m, { ...h, schemas: x });
  }, s = cN(t, { isCLI: r, FlagSchema: i }), u = new sN(s, { logger: n, unknown: l, descriptor: a }), d = n !== !1;
  d && Vu && (u._hasDeprecationWarned = Vu);
  let p = u.normalize(e);
  return d && (Vu = u._hasDeprecationWarned), p;
}
function cN(e, { isCLI: t, FlagSchema: n }) {
  let r = [];
  t && r.push(Vk.create({ name: "_" }));
  for (let o of e) r.push(dN(o, { isCLI: t, optionInfos: e, FlagSchema: n })), o.alias && t && r.push(Hk.create({ name: o.alias, sourceName: o.name }));
  return r;
}
function dN(e, { isCLI: t, optionInfos: n, FlagSchema: r }) {
  let { name: o } = e, i = { name: o }, a, l = {};
  switch (e.type) {
    case "int":
      a = rN, t && (i.preprocess = Number);
      break;
    case "string":
      a = gh;
      break;
    case "choice":
      a = tN, i.choices = e.choices.map((s) => s != null && s.redirect ? { ...s, redirect: { to: { key: e.name, value: s.redirect } } } : s);
      break;
    case "boolean":
      a = Yk;
      break;
    case "flag":
      a = r, i.flags = n.flatMap((s) => [s.alias, s.description && s.name, s.oppositeDescription && `no-${s.name}`].filter(Boolean));
      break;
    case "path":
      a = gh;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (e.exception ? i.validate = (s, u, d) => e.exception(s) || u.validate(s, d) : i.validate = (s, u, d) => s === void 0 || u.validate(s, d), e.redirect && (l.redirect = (s) => s ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (l.deprecated = !0), t && !e.array) {
    let s = i.preprocess || ((u) => u);
    i.preprocess = (u, d, p) => d.preprocess(s(Array.isArray(u) ? Ie(!1, u, -1) : u), p);
  }
  return e.array ? Uk.create({ ...t ? { preprocess: (s) => Array.isArray(s) ? s : [s] } : {}, ...l, valueSchema: a.create(i) }) : a.create({ ...i, ...l });
}
var fN = uN, pN = (e, t, n) => {
  if (!(e && t == null)) {
    if (t.findLast) return t.findLast(n);
    for (let r = t.length - 1; r >= 0; r--) {
      let o = t[r];
      if (n(o, r, t)) return o;
    }
  }
}, sD = pN;
function uD(e, t) {
  if (!t) throw new Error("parserName is required.");
  let n = sD(!1, e, (o) => o.parsers && Object.prototype.hasOwnProperty.call(o.parsers, t));
  if (n) return n;
  let r = `Couldn't resolve parser "${t}".`;
  throw r += " Plugins must be explicitly added to the standalone bundle.", new tD(r);
}
function mN(e, t) {
  if (!t) throw new Error("astFormat is required.");
  let n = sD(!1, e, (o) => o.printers && Object.prototype.hasOwnProperty.call(o.printers, t));
  if (n) return n;
  let r = `Couldn't find plugin for AST format "${t}".`;
  throw r += " Plugins must be explicitly added to the standalone bundle.", new tD(r);
}
function cD({ plugins: e, parser: t }) {
  let n = uD(e, t);
  return dD(n, t);
}
function dD(e, t) {
  let n = e.parsers[t];
  return typeof n == "function" ? n() : n;
}
function hN(e, t) {
  let n = e.printers[t];
  return typeof n == "function" ? n() : n;
}
var yh = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
async function vN(e, t = {}) {
  var n;
  let r = { ...e };
  if (!r.parser) if (r.filepath) {
    if (r.parser = Mk(r, { physicalFile: r.filepath }), !r.parser) throw new oh(`No parser could be inferred for file "${r.filepath}".`);
  } else throw new oh("No parser and no file path given, couldn't infer a parser.");
  let o = nD({ plugins: e.plugins, showDeprecated: !0 }).options, i = { ...yh, ...Object.fromEntries(o.filter((f) => f.default !== void 0).map((f) => [f.name, f.default])) }, a = uD(r.plugins, r.parser), l = await dD(a, r.parser);
  r.astFormat = l.astFormat, r.locEnd = l.locEnd, r.locStart = l.locStart;
  let s = (n = a.printers) != null && n[l.astFormat] ? a : mN(r.plugins, l.astFormat), u = await hN(s, l.astFormat);
  r.printer = u;
  let d = s.defaultOptions ? Object.fromEntries(Object.entries(s.defaultOptions).filter(([, f]) => f !== void 0)) : {}, p = { ...i, ...d };
  for (let [f, m] of Object.entries(p)) (r[f] === null || r[f] === void 0) && (r[f] = m);
  return r.parser === "json" && (r.trailingComma = "none"), fN(r, o, { passThrough: Object.keys(yh), ...t });
}
var ni = vN, gN = Ts(mF());
async function yN(e, t) {
  let n = await cD(t), r = n.preprocess ? n.preprocess(e, t) : e;
  t.originalText = r;
  let o;
  try {
    o = await n.parse(r, t, t);
  } catch (i) {
    DN(i, e);
  }
  return { text: r, ast: o };
}
function DN(e, t) {
  let { loc: n } = e;
  if (n) {
    let r = (0, gN.codeFrameColumns)(t, n, { highlightCode: !0 });
    throw e.message += `
` + r, e.codeFrame = r, e;
  }
  throw e;
}
var ya = yN;
async function wN(e, t, n, r, o) {
  let { embeddedLanguageFormatting: i, printer: { embed: a, hasPrettierIgnore: l = () => !1, getVisitorKeys: s } } = n;
  if (!a || i !== "auto") return;
  if (a.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
  let u = Bs(a.getVisitorKeys ?? s), d = [];
  m();
  let p = e.stack;
  for (let { print: h, node: g, pathStack: x } of d) try {
    e.stack = x;
    let y = await h(f, t, e, n);
    y && o.set(g, y);
  } catch (y) {
    if (globalThis.PRETTIER_DEBUG) throw y;
  }
  e.stack = p;
  function f(h, g) {
    return xN(h, g, n, r);
  }
  function m() {
    let { node: h } = e;
    if (h === null || typeof h != "object" || l(e)) return;
    for (let x of u(h)) Array.isArray(h[x]) ? e.each(m, x) : e.call(m, x);
    let g = a(e, n);
    if (g) {
      if (typeof g == "function") {
        d.push({ print: g, node: h, pathStack: [...e.stack] });
        return;
      }
      o.set(h, g);
    }
  }
}
async function xN(e, t, n, r) {
  let o = await ni({ ...n, ...t, parentParser: n.parser, originalText: e }, { passThrough: !0 }), { ast: i } = await ya(e, o), a = await r(i, o);
  return Vy(a);
}
function CN(e, t) {
  let { originalText: n, [Symbol.for("comments")]: r, locStart: o, locEnd: i, [Symbol.for("printedComments")]: a } = t, { node: l } = e, s = o(l), u = i(l);
  for (let d of r) o(d) >= s && i(d) <= u && a.add(d);
  return n.slice(s, u);
}
var EN = CN;
async function $s(e, t) {
  ({ ast: e } = await fD(e, t));
  let n = /* @__PURE__ */ new Map(), r = new uk(e), o = /* @__PURE__ */ new Map();
  await wN(r, a, t, $s, o);
  let i = await Dh(r, t, a, void 0, o);
  return Pk(t), i;
  function a(s, u) {
    return s === void 0 || s === r ? l(u) : Array.isArray(s) ? r.call(() => l(u), ...s) : r.call(() => l(u), s);
  }
  function l(s) {
    let u = r.node;
    if (u == null) return "";
    let d = u && typeof u == "object" && s === void 0;
    if (d && n.has(u)) return n.get(u);
    let p = Dh(r, t, a, s, o);
    return d && n.set(u, p), p;
  }
}
function Dh(e, t, n, r, o) {
  var i;
  let { node: a } = e, { printer: l } = t, s;
  return (i = l.hasPrettierIgnore) != null && i.call(l, e) ? s = EN(e, t) : o.has(a) ? s = o.get(a) : s = l.print(e, t, n, r), a === t.cursorNode && (s = Uy(s, (u) => [nd, u, nd])), l.printComment && (!l.willPrintOwnComments || !l.willPrintOwnComments(e, t)) && (s = Nk(e, s, t)), s;
}
async function fD(e, t) {
  let n = e.comments ?? [];
  t[Symbol.for("comments")] = n, t[Symbol.for("tokens")] = e.tokens ?? [], t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), xk(e, t);
  let { printer: { preprocess: r } } = t;
  return e = r ? await r(e, t) : e, { ast: e, comments: n };
}
function SN(e, t) {
  let { cursorOffset: n, locStart: r, locEnd: o } = t, i = Bs(t.printer.getVisitorKeys), a = (s) => r(s) <= n && o(s) >= n, l = e;
  for (let s of fk(e, { getVisitorKeys: i, filter: a })) l = s;
  return l;
}
var bN = SN;
function FN(e, t) {
  let { printer: { massageAstNode: n, getVisitorKeys: r } } = t;
  if (!n) return e;
  let o = Bs(r), i = n.ignoredProperties ?? /* @__PURE__ */ new Set();
  return a(e);
  function a(l, s) {
    if (!(l !== null && typeof l == "object")) return l;
    if (Array.isArray(l)) return l.map((f) => a(f, s)).filter(Boolean);
    let u = {}, d = new Set(o(l));
    for (let f in l) !Object.prototype.hasOwnProperty.call(l, f) || i.has(f) || (d.has(f) ? u[f] = a(l[f], l) : u[f] = l[f]);
    let p = n(l, u, s);
    if (p !== null) return p ?? u;
  }
}
var kN = FN, NN = (e, t, n) => {
  if (!(e && t == null)) {
    if (t.findLastIndex) return t.findLastIndex(n);
    for (let r = t.length - 1; r >= 0; r--) {
      let o = t[r];
      if (n(o, r, t)) return r;
    }
    return -1;
  }
}, PN = NN, _N = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
function jN(e, t) {
  let n = [e.node, ...e.parentNodes], r = /* @__PURE__ */ new Set([t.node, ...t.parentNodes]);
  return n.find((o) => pD.has(o.type) && r.has(o));
}
function wh(e) {
  let t = PN(!1, e, (n) => n.type !== "Program" && n.type !== "File");
  return t === -1 ? e : e.slice(0, t + 1);
}
function AN(e, t, { locStart: n, locEnd: r }) {
  let o = e.node, i = t.node;
  if (o === i) return { startNode: o, endNode: i };
  let a = n(e.node);
  for (let s of wh(t.parentNodes)) if (n(s) >= a) i = s;
  else break;
  let l = r(t.node);
  for (let s of wh(e.parentNodes)) {
    if (r(s) <= l) o = s;
    else break;
    if (o === i) break;
  }
  return { startNode: o, endNode: i };
}
function sd(e, t, n, r, o = [], i) {
  let { locStart: a, locEnd: l } = n, s = a(e), u = l(e);
  if (!(t > u || t < s || i === "rangeEnd" && t === s || i === "rangeStart" && t === u)) {
    for (let d of zf(e, n)) {
      let p = sd(d, t, n, r, [e, ...o], i);
      if (p) return p;
    }
    if (!r || r(e, o[0])) return { node: e, parentNodes: o };
  }
}
function ON(e, t) {
  return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
var pD = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), TN = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function xh(e, t, n) {
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
      return ON(t.type, n == null ? void 0 : n.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return pD.has(t.type);
    case "graphql":
      return TN.has(t.kind);
    case "vue":
      return t.tag !== "root";
  }
  return !1;
}
function RN(e, t, n) {
  let { rangeStart: r, rangeEnd: o, locStart: i, locEnd: a } = t;
  ad.ok(o > r);
  let l = e.slice(r, o).search(/\S/u), s = l === -1;
  if (!s) for (r += l; o > r && !/\S/u.test(e[o - 1]); --o) ;
  let u = sd(n, r, t, (m, h) => xh(t, m, h), [], "rangeStart"), d = s ? u : sd(n, o, t, (m) => xh(t, m), [], "rangeEnd");
  if (!u || !d) return { rangeStart: 0, rangeEnd: 0 };
  let p, f;
  if (_N(t)) {
    let m = jN(u, d);
    p = m, f = m;
  } else ({ startNode: p, endNode: f } = AN(u, d, t));
  return { rangeStart: Math.min(i(p), i(f)), rangeEnd: Math.max(a(p), a(f)) };
}
var mD = "\uFEFF", Ch = Symbol("cursor");
async function hD(e, t, n = 0) {
  if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: r, text: o } = await ya(e, t);
  t.cursorOffset >= 0 && (t.cursorNode = bN(r, t));
  let i = await $s(r, t);
  n > 0 && (i = Hy([Wr, i], n, t.tabWidth));
  let a = Is(i, t);
  if (n > 0) {
    let s = a.formatted.trim();
    a.cursorNodeStart !== void 0 && (a.cursorNodeStart -= a.formatted.indexOf(s)), a.formatted = s + Rf(t.endOfLine);
  }
  let l = t[Symbol.for("comments")];
  if (t.cursorOffset >= 0) {
    let s, u, d, p, f;
    if (t.cursorNode && a.cursorNodeText ? (s = t.locStart(t.cursorNode), u = o.slice(s, t.locEnd(t.cursorNode)), d = t.cursorOffset - s, p = a.cursorNodeStart, f = a.cursorNodeText) : (s = 0, u = o, d = t.cursorOffset, p = 0, f = a.formatted), u === f) return { formatted: a.formatted, cursorOffset: p + d, comments: l };
    let m = u.split("");
    m.splice(d, 0, Ch);
    let h = f.split(""), g = xF(m, h), x = p;
    for (let y of g) if (y.removed) {
      if (y.value.includes(Ch)) break;
    } else x += y.count;
    return { formatted: a.formatted, cursorOffset: x, comments: l };
  }
  return { formatted: a.formatted, cursorOffset: -1, comments: l };
}
async function MN(e, t) {
  let { ast: n, text: r } = await ya(e, t), { rangeStart: o, rangeEnd: i } = RN(r, t, n), a = r.slice(o, i), l = Math.min(o, r.lastIndexOf(`
`, o) + 1), s = r.slice(l, o).match(/^\s*/u)[0], u = $f(s, t.tabWidth), d = await hD(a, { ...t, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t.cursorOffset > o && t.cursorOffset <= i ? t.cursorOffset - o : -1, endOfLine: "lf" }, u), p = d.formatted.trimEnd(), { cursorOffset: f } = t;
  f > i ? f += p.length - a.length : d.cursorOffset >= 0 && (f = d.cursorOffset + o);
  let m = r.slice(0, o) + p + r.slice(i);
  if (t.endOfLine !== "lf") {
    let h = Rf(t.endOfLine);
    f >= 0 && h === `\r
` && (f += Ry(m.slice(0, f), `
`)), m = Rs(!1, m, `
`, h);
  }
  return { formatted: m, cursorOffset: f, comments: d.comments };
}
function Uu(e, t, n) {
  return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? n : t;
}
function Eh(e, t) {
  let { cursorOffset: n, rangeStart: r, rangeEnd: o } = t;
  return n = Uu(e, n, -1), r = Uu(e, r, 0), o = Uu(e, o, e.length), { ...t, cursorOffset: n, rangeStart: r, rangeEnd: o };
}
function vD(e, t) {
  let { cursorOffset: n, rangeStart: r, rangeEnd: o, endOfLine: i } = Eh(e, t), a = e.charAt(0) === mD;
  if (a && (e = e.slice(1), n--, r--, o--), i === "auto" && (i = CF(e)), e.includes("\r")) {
    let l = (s) => Ry(e.slice(0, Math.max(s, 0)), `\r
`);
    n -= l(n), r -= l(r), o -= l(o), e = EF(e);
  }
  return { hasBOM: a, text: e, options: Eh(e, { ...t, cursorOffset: n, rangeStart: r, rangeEnd: o, endOfLine: i }) };
}
async function Sh(e, t) {
  let n = await cD(t);
  return !n.hasPragma || n.hasPragma(e);
}
async function gD(e, t) {
  let { hasBOM: n, text: r, options: o } = vD(e, await ni(t));
  if (o.rangeStart >= o.rangeEnd && r !== "" || o.requirePragma && !await Sh(r, o)) return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
  let i;
  return o.rangeStart > 0 || o.rangeEnd < r.length ? i = await MN(r, o) : (!o.requirePragma && o.insertPragma && o.printer.insertPragma && !await Sh(r, o) && (r = o.printer.insertPragma(r)), i = await hD(r, o)), n && (i.formatted = mD + i.formatted, i.cursorOffset >= 0 && i.cursorOffset++), i;
}
async function LN(e, t, n) {
  let { text: r, options: o } = vD(e, await ni(t)), i = await ya(r, o);
  return n && (n.preprocessForPrint && (i.ast = await fD(i.ast, o)), n.massage && (i.ast = kN(i.ast, o))), i;
}
async function IN(e, t) {
  t = await ni(t);
  let n = await $s(e, t);
  return Is(n, t);
}
async function BN(e, t) {
  let n = WF(e), { formatted: r } = await gD(n, { ...t, parser: "__js_expression" });
  return r;
}
async function $N(e, t) {
  t = await ni(t);
  let { ast: n } = await ya(e, t);
  return $s(n, t);
}
async function WN(e, t) {
  return Is(e, await ni(t));
}
var yD = {};
Os(yD, { builders: () => zN, printer: () => HN, utils: () => VN });
var zN = { join: zy, line: $y, softline: BF, hardline: Wr, literalline: Wy, group: Ly, conditionalGroup: TF, fill: Iy, lineSuffix: td, lineSuffixBoundary: LF, cursor: nd, breakParent: Ms, ifBreak: RF, trim: IF, indent: ts, indentIfBreak: MF, align: Xo, addAlignmentToDoc: Hy, markAsRoot: AF, dedentToRoot: jF, dedent: OF, hardlineWithoutBreakParent: Lf, literallineWithoutBreakParent: By, label: $F, concat: (e) => e }, HN = { printDocToString: Is }, VN = { willBreak: GF, traverseDoc: Mf, findInDoc: Bf, mapDoc: Ls, removeLines: ZF, stripTrailingHardline: Vy, replaceEndOfLine: nk, canBreak: ok }, UN = "3.3.3", DD = {};
Os(DD, { addDanglingComment: () => jr, addLeadingComment: () => bo, addTrailingComment: () => Fo, getAlignmentSize: () => $f, getIndentSize: () => qN, getMaxContinuousCount: () => eP, getNextNonSpaceNonCommentCharacter: () => nP, getNextNonSpaceNonCommentCharacterIndex: () => cP, getStringWidth: () => If, hasNewline: () => ur, hasNewlineInRange: () => oP, hasSpaces: () => aP, isNextLineEmpty: () => mP, isNextLineEmptyAfterIndex: () => Kf, isPreviousLineEmpty: () => fP, makeString: () => sP, skip: () => ga, skipEverythingButNewLine: () => Gy, skipInlineComment: () => Vf, skipNewline: () => Gr, skipSpaces: () => pr, skipToLineEnd: () => Xy, skipTrailingComment: () => Uf, skipWhitespace: () => pk });
function YN(e, t) {
  if (t === !1) return !1;
  if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
    for (let n = t + 2; n < e.length; ++n) if (e.charAt(n) === "*" && e.charAt(n + 1) === "/") return n + 2;
  }
  return t;
}
var Vf = YN;
function KN(e, t) {
  return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? Gy(e, t) : t;
}
var Uf = KN;
function QN(e, t) {
  let n = null, r = t;
  for (; r !== n; ) n = r, r = pr(e, r), r = Vf(e, r), r = Uf(e, r), r = Gr(e, r);
  return r;
}
var Yf = QN;
function XN(e, t) {
  let n = null, r = t;
  for (; r !== n; ) n = r, r = Xy(e, r), r = Vf(e, r), r = pr(e, r);
  return r = Uf(e, r), r = Gr(e, r), r !== !1 && ur(e, r);
}
var Kf = XN;
function GN(e, t) {
  let n = e.lastIndexOf(`
`);
  return n === -1 ? 0 : $f(e.slice(n + 1).match(/^[\t ]*/u)[0], t);
}
var qN = GN;
function JN(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function ZN(e, t) {
  let n = e.match(new RegExp(`(${JN(t)})+`, "gu"));
  return n === null ? 0 : n.reduce((r, o) => Math.max(r, o.length / t.length), 0);
}
var eP = ZN;
function tP(e, t) {
  let n = Yf(e, t);
  return n === !1 ? "" : e.charAt(n);
}
var nP = tP;
function rP(e, t, n) {
  for (let r = t; r < n; ++r) if (e.charAt(r) === `
`) return !0;
  return !1;
}
var oP = rP;
function iP(e, t, n = {}) {
  return pr(e, n.backwards ? t - 1 : t, n) !== t;
}
var aP = iP;
function lP(e, t, n) {
  let r = t === '"' ? "'" : '"', o = Rs(!1, e, /\\(.)|(["'])/gsu, (i, a, l) => a === r ? a : l === t ? "\\" + l : l || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(a) ? a : "\\" + a));
  return t + o + t;
}
var sP = lP;
function uP(e, t, n) {
  return Yf(e, n(t));
}
function cP(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Yf(e, t) : uP(...arguments);
}
function dP(e, t, n) {
  return Hf(e, n(t));
}
function fP(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Hf(e, t) : dP(...arguments);
}
function pP(e, t, n) {
  return Kf(e, n(t));
}
function mP(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Kf(e, t) : pP(...arguments);
}
function Or(e, t = 1) {
  return async (...n) => {
    let r = n[t] ?? {}, o = r.plugins ?? [];
    return n[t] = { ...r, plugins: Array.isArray(o) ? o : Object.values(o) }, e(...n);
  };
}
var wD = Or(gD);
async function xD(e, t) {
  let { formatted: n } = await wD(e, { ...t, cursorOffset: -1 });
  return n;
}
async function hP(e, t) {
  return await xD(e, t) === e;
}
var vP = Or(nD, 0), gP = { parse: Or(LN), formatAST: Or(IN), formatDoc: Or(BN), printToDoc: Or($N), printDocToString: Or(WN) };
const yP = ({
  date: e,
  guests: t,
  time: n,
  venue: r,
  tableSetup: o,
  currentStep: i,
  setCurrentStep: a,
  isStep1Valid: l,
  checkStep1Errors: s,
  isStep3Valid: u,
  checkStep3Errors: d,
  facilitiesSelected: p,
  cateringSelected: f,
  selectedEventPackages: m,
  totalExclVat: h
}) => {
  const [g, x] = D.useState(!1), y = nF("(min-width: 1024px)"), v = m.reduce((E, S) => {
    const b = S.duration;
    return E[b] || (E[b] = { ...S, quantity: 0, totalPrice: 0 }), E[b].quantity += 1, E[b].totalPrice += S.price, E;
  }, {}), w = Object.entries(v).map(([E, S]) => S), C = () => /* @__PURE__ */ c.jsxs("div", { className: " mt-4 space-y-6", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ c.jsx(s0, { className: "h-5 w-5 text-muted-foreground" }),
      /* @__PURE__ */ c.jsx("p", { className: "text-sm", children: e ? _n(e, "PPP") : "Pick a date" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ c.jsx(u0, { className: "h-5 w-5 text-muted-foreground" }),
      /* @__PURE__ */ c.jsxs("p", { className: "text-sm", children: [
        t,
        " ",
        t > 0 ? "people" : "Select Number Guests"
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ c.jsx(Yc, { className: "h-5 w-5 text-muted-foreground" }),
      /* @__PURE__ */ c.jsx("p", { className: "text-sm", children: n ? "Arrival at " + n : "Select Time" })
    ] }),
    /* @__PURE__ */ c.jsx("hr", {}),
    /* @__PURE__ */ c.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ c.jsx("h4", { className: "text-sm font-bold", children: "Venue Preference" }),
      /* @__PURE__ */ c.jsx("p", { className: "text-sm", children: r ? r + " - " + o : "Select a venue" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ c.jsx("h4", { className: "text-sm font-bold", children: "Always included" }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ c.jsx(Br, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ c.jsx("p", { className: "text-sm", children: "Conference system" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ c.jsx(Br, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ c.jsx("p", { className: "text-sm", children: "Presentation screen" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ c.jsx(Br, { className: "h-5 w-5 text-muted-foreground" }),
        /* @__PURE__ */ c.jsx("p", { className: "text-sm", children: "Post it's & markers" })
      ] })
    ] }),
    i > 1 && m.every((E) => E) && r && t > 0 && /* @__PURE__ */ c.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ c.jsx("h4", { className: "text-sm font-bold", children: "Selected Services" }),
      w.map((E, S) => /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: `${E.duration} hour meeting x ${E.quantity}` }),
        /* @__PURE__ */ c.jsxs("span", { className: "text-sm", children: [
          E.totalPrice,
          "€"
        ] })
      ] }, S)),
      p.map((E, S) => /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ c.jsxs("span", { className: "text-sm", children: [
          `${E.title}`,
          /* @__PURE__ */ c.jsx("span", { className: "text-muted-foreground", children: m.length > 1 ? " per day" : "" })
        ] }),
        /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: `${E.price}€` })
      ] }, S)),
      f.map((E, S) => /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ c.jsxs("span", { className: "text-sm", children: [
          `${E.name} x ${E.quantity}`,
          /* @__PURE__ */ c.jsx("span", { className: "text-muted-foreground", children: m.length > 1 ? " per day" : "" })
        ] }),
        /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: `${E.price * E.quantity}€` })
      ] }, S)),
      i > 1 && r && t > 0 && /* @__PURE__ */ c.jsx("hr", {}),
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ c.jsx("span", { className: "text-md font-medium", children: "Total excl. VAT" }),
        /* @__PURE__ */ c.jsx("span", { className: "text-md font-medium", children: `${h}€` })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between space-x-2", children: [
        /* @__PURE__ */ c.jsx("span", { className: "text-xs text-muted-foreground", children: "Per person" }),
        /* @__PURE__ */ c.jsx("span", { className: "text-sm text-muted-foreground", children: `${parseFloat(h / t).toFixed(2)}€` })
      ] })
    ] })
  ] });
  return y ? /* @__PURE__ */ c.jsx("div", { className: "w-1/4 p-8 bg-gray-50 overflow-visible mt-0 rounded-md", children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col sticky top-10 space-x-2", children: [
    /* @__PURE__ */ c.jsx("h3", { className: "text-lg font-bold", children: "Overview" }),
    /* @__PURE__ */ c.jsx(C, {})
  ] }) }) : /* @__PURE__ */ c.jsxs(sy, { open: g, onOpenChange: x, children: [
    /* @__PURE__ */ c.jsx("div", { className: "h-fit inset-x-0 z-[40] m-0 flex items-center h-auto flex-col rounded-t-[10px] border bg-background", children: /* @__PURE__ */ c.jsxs("div", { className: "w-full flex flex-row items-center justify-between p-2", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2 bg-gray-50 rounded-full p-1 px-2 text-primary", onClick: () => x(!0), children: [
        /* @__PURE__ */ c.jsx("span", { className: "text-sm text-muted-foreground font-medium", children: "Overview" }),
        /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-center bg-gray-100 h-8 w-8 rounded-full m-1", children: /* @__PURE__ */ c.jsx(V2, { className: "h-8 w-8 text-primary" }) })
      ] }),
      i === 1 && /* @__PURE__ */ c.jsx(De, { className: "ml-auto", disabled: !l(), onClick: () => s() && l() && a(2), children: "Add Event Options" }),
      i === 2 && /* @__PURE__ */ c.jsxs("div", { className: "relative space-x-4 flex justify-center items-center", children: [
        /* @__PURE__ */ c.jsx(De, { variant: "outline", onClick: () => a(1), children: /* @__PURE__ */ c.jsx(So, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
        /* @__PURE__ */ c.jsx(De, { className: "ml-auto", onClick: () => a(3), children: "Next" })
      ] }),
      i === 3 && /* @__PURE__ */ c.jsxs("div", { className: "flex space-x-4 items-center", children: [
        /* @__PURE__ */ c.jsx(De, { variant: "outline", onClick: () => a(2), children: /* @__PURE__ */ c.jsx(So, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
        /* @__PURE__ */ c.jsxs(De, { onClick: () => d() && u() && handleSubmit(), children: [
          "Request Proposal ",
          /* @__PURE__ */ c.jsx(Wi, { className: "ml-2 h-5 w-5 text-white" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ c.jsx(cy, { className: "block lg:hidden", children: /* @__PURE__ */ c.jsxs("div", { className: "h-[95%] p-4 lg:p-0 w-full flex flex-col fixed", children: [
      /* @__PURE__ */ c.jsx(dy, { children: /* @__PURE__ */ c.jsx(fy, { children: "Event Overview" }) }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-between justify-start h-full overflow-y-auto", children: [
        /* @__PURE__ */ c.jsx(C, {}),
        i === 1 && /* @__PURE__ */ c.jsx(De, { className: "w-full mt-auto", disabled: !l(), onClick: () => {
          a(2), x(!1);
        }, children: "Add Event Options" }),
        i === 2 && /* @__PURE__ */ c.jsxs("div", { className: "relative mt-12 space-x-4 flex justify-center items-center", children: [
          /* @__PURE__ */ c.jsx(De, { variant: "outline", onClick: () => {
            a(1), x(!1);
          }, children: /* @__PURE__ */ c.jsx(So, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
          /* @__PURE__ */ c.jsx(De, { className: "ml-auto w-full", onClick: () => {
            a(3), x(!1);
          }, children: "Next" })
        ] }),
        i === 3 && /* @__PURE__ */ c.jsxs("div", { className: "relative mt-12 space-x-4 flex justify-center items-cente", children: [
          /* @__PURE__ */ c.jsx(De, { variant: "outline", onClick: () => {
            a(2), x(!1);
          }, children: /* @__PURE__ */ c.jsx(So, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
          /* @__PURE__ */ c.jsxs(De, { className: "w-full", disabled: !u(), children: [
            "Request Proposal ",
            /* @__PURE__ */ c.jsx(Wi, { className: "ml-2 h-5 w-5 text-white" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
var DP = "Label", CD = D.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  ee.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
CD.displayName = DP;
var ED = CD;
const wP = t0(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Ar = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(ED, { ref: n, className: G(wP(), e), ...t }));
Ar.displayName = ED.displayName;
const It = D.forwardRef(({ className: e, type: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  "input",
  {
    type: t,
    className: G(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: r,
    ...n
  }
));
It.displayName = "Input";
function Qf(e) {
  const t = D.useRef({ value: e, previous: e });
  return D.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Xf(e) {
  const [t, n] = D.useState(void 0);
  return Je(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let a, l;
        if ("borderBoxSize" in i) {
          const s = i.borderBoxSize, u = Array.isArray(s) ? s[0] : s;
          a = u.inlineSize, l = u.blockSize;
        } else
          a = e.offsetWidth, l = e.offsetHeight;
        n({ width: a, height: l });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Gf = "Switch", [xP, M4] = wr(Gf), [CP, EP] = xP(Gf), SD = D.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: i,
      required: a,
      disabled: l,
      value: s = "on",
      onCheckedChange: u,
      ...d
    } = e, [p, f] = D.useState(null), m = le(t, (v) => f(v)), h = D.useRef(!1), g = p ? !!p.closest("form") : !0, [x = !1, y] = Yo({
      prop: o,
      defaultProp: i,
      onChange: u
    });
    return /* @__PURE__ */ c.jsxs(CP, { scope: n, checked: x, disabled: l, children: [
      /* @__PURE__ */ c.jsx(
        ee.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": x,
          "aria-required": a,
          "data-state": kD(x),
          "data-disabled": l ? "" : void 0,
          disabled: l,
          value: s,
          ...d,
          ref: m,
          onClick: J(e.onClick, (v) => {
            y((w) => !w), g && (h.current = v.isPropagationStopped(), h.current || v.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ c.jsx(
        SP,
        {
          control: p,
          bubbles: !h.current,
          name: r,
          value: s,
          checked: x,
          required: a,
          disabled: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
SD.displayName = Gf;
var bD = "SwitchThumb", FD = D.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = EP(bD, n);
    return /* @__PURE__ */ c.jsx(
      ee.span,
      {
        "data-state": kD(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
FD.displayName = bD;
var SP = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, i = D.useRef(null), a = Qf(n), l = Xf(t);
  return D.useEffect(() => {
    const s = i.current, u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (a !== n && p) {
      const f = new Event("click", { bubbles: r });
      p.call(s, n), s.dispatchEvent(f);
    }
  }, [a, n, r]), /* @__PURE__ */ c.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: i,
      style: {
        ...e.style,
        ...l,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function kD(e) {
  return e ? "checked" : "unchecked";
}
var ND = SD, bP = FD;
const PD = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  ND,
  {
    className: G(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ c.jsx(
      bP,
      {
        className: G(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
PD.displayName = ND.displayName;
const Da = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "div",
  {
    ref: n,
    className: G("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
  }
));
Da.displayName = "Card";
const FP = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "div",
  {
    ref: n,
    className: G("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
FP.displayName = "CardHeader";
const kP = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "h3",
  {
    ref: n,
    className: G("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
  }
));
kP.displayName = "CardTitle";
const NP = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "p",
  {
    ref: n,
    className: G("text-sm text-muted-foreground", e),
    ...t
  }
));
NP.displayName = "CardDescription";
const wa = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("div", { ref: n, className: G("p-6 pt-0", e), ...t }));
wa.displayName = "CardContent";
const PP = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "div",
  {
    ref: n,
    className: G("flex items-center p-6 pt-0", e),
    ...t
  }
));
PP.displayName = "CardFooter";
function bh({ title: e, id: t, description: n, onClick: r, isSelected: o, noneSelected: i, isDisabled: a }) {
  return /* @__PURE__ */ c.jsx(Da, { className: G(
    "relative hover:opacity-[1] bg-gray-50",
    o ? "border-primary" : i ? "" : "opacity-[0.5]",
    a ? "cursor-not-allowed opacity-[0.5] hover:opacity-[0.5]" : ""
  ), children: /* @__PURE__ */ c.jsxs(wa, { className: "p-6", children: [
    /* @__PURE__ */ c.jsx("h4", { className: "text-lg font-bold", children: e }),
    /* @__PURE__ */ c.jsx("p", { className: "text-sm", children: n }),
    /* @__PURE__ */ c.jsxs(De, { className: "mt-4 outline-none", disabled: a, onClick: r, children: [
      /* @__PURE__ */ c.jsx("span", { className: o && "hidden", children: "Choose" }),
      /* @__PURE__ */ c.jsx("div", { className: `${!o && "hidden"} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`, children: /* @__PURE__ */ c.jsx(Br, { className: "h-4 w-4 text-white " }) })
    ] })
  ] }) });
}
function _P({
  isSelected: e,
  venue_name: t,
  venue_description: n,
  image_url: r,
  capacity: o,
  area: i,
  onClick: a
}) {
  return /* @__PURE__ */ c.jsx(
    Da,
    {
      className: G("relative bg-gray-50 border-2 shadow-md border-transparent hover:border-primary hover:cursor-pointer", e && "border-primary"),
      onClick: a,
      children: /* @__PURE__ */ c.jsxs(wa, { className: "p-6", children: [
        /* @__PURE__ */ c.jsx(
          "img",
          {
            src: r,
            alt: t,
            loading: "lazy",
            className: "w-full h-40 rounded-md object-cover"
          }
        ),
        /* @__PURE__ */ c.jsx("h4", { className: "text-lg font-bold mt-4", children: t }),
        /* @__PURE__ */ c.jsx("p", { className: "text-sm", children: n }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [
          /* @__PURE__ */ c.jsx(u0, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ c.jsxs("p", { className: "text-sm", children: [
            "up to ",
            o,
            " people"
          ] })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [
          /* @__PURE__ */ c.jsx($2, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-sm", children: `${i} m^2` })
        ] }),
        /* @__PURE__ */ c.jsxs(De, { className: "mt-4 outline-none", onClick: a, children: [
          /* @__PURE__ */ c.jsx("span", { className: e && "hidden", children: "Choose" }),
          /* @__PURE__ */ c.jsx("div", { className: `${!e && "hidden"} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`, children: /* @__PURE__ */ c.jsx(Br, { className: "h-4 w-4 text-white " }) })
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
const jP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _D = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var AP = {
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
const OP = D.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...l
  }, s) => D.createElement(
    "svg",
    {
      ref: s,
      ...AP,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: _D("lucide", o),
      ...l
    },
    [
      ...a.map(([u, d]) => D.createElement(u, d)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xa = (e, t) => {
  const n = D.forwardRef(
    ({ className: r, ...o }, i) => D.createElement(OP, {
      ref: i,
      iconNode: t,
      className: _D(`lucide-${jP(e)}`, r),
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
const jD = xa("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AD = xa("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TP = xa("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RP = xa("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MP = xa("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
var Y = function() {
  return Y = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Y.apply(this, arguments);
};
function LP(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function OD(e, t, n) {
  for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Ca(e) {
  return e.mode === "multiple";
}
function Ea(e) {
  return e.mode === "range";
}
function Ws(e) {
  return e.mode === "single";
}
var IP = {
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
function BP(e, t) {
  return _n(e, "LLLL y", t);
}
function $P(e, t) {
  return _n(e, "d", t);
}
function WP(e, t) {
  return _n(e, "LLLL", t);
}
function zP(e) {
  return "".concat(e);
}
function HP(e, t) {
  return _n(e, "cccccc", t);
}
function VP(e, t) {
  return _n(e, "yyyy", t);
}
var UP = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: BP,
  formatDay: $P,
  formatMonthCaption: WP,
  formatWeekNumber: zP,
  formatWeekdayName: HP,
  formatYearCaption: VP
}), YP = function(e, t, n) {
  return _n(e, "do MMMM (EEEE)", n);
}, KP = function() {
  return "Month: ";
}, QP = function() {
  return "Go to next month";
}, XP = function() {
  return "Go to previous month";
}, GP = function(e, t) {
  return _n(e, "cccc", t);
}, qP = function(e) {
  return "Week n. ".concat(e);
}, JP = function() {
  return "Year: ";
}, ZP = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: YP,
  labelMonthDropdown: KP,
  labelNext: QP,
  labelPrevious: XP,
  labelWeekNumber: qP,
  labelWeekday: GP,
  labelYearDropdown: JP
});
function e_() {
  var e = "buttons", t = IP, n = p0, r = {}, o = {}, i = 1, a = {}, l = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: UP,
    labels: ZP,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: i,
    styles: a,
    today: l,
    mode: "default"
  };
}
function t_(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, i = e.fromDate, a = e.toDate;
  return r ? i = mt(r) : t && (i = new Date(t, 0, 1)), o ? a = hf(o) : n && (a = new Date(n, 11, 31)), {
    fromDate: i ? Uo(i) : void 0,
    toDate: a ? Uo(a) : void 0
  };
}
var TD = D.createContext(void 0);
function n_(e) {
  var t, n = e.initialProps, r = e_(), o = t_(n), i = o.fromDate, a = o.toDate, l = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  l !== "buttons" && (!i || !a) && (l = "buttons");
  var s;
  (Ws(n) || Ca(n) || Ea(n)) && (s = n.onSelect);
  var u = Y(Y(Y({}, r), n), { captionLayout: l, classNames: Y(Y({}, r.classNames), n.classNames), components: Y({}, n.components), formatters: Y(Y({}, r.formatters), n.formatters), fromDate: i, labels: Y(Y({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Y(Y({}, r.modifiers), n.modifiers), modifiersClassNames: Y(Y({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: s, styles: Y(Y({}, r.styles), n.styles), toDate: a });
  return c.jsx(TD.Provider, { value: u, children: e.children });
}
function pe() {
  var e = D.useContext(TD);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function RD(e) {
  var t = pe(), n = t.locale, r = t.classNames, o = t.styles, i = t.formatters.formatCaption;
  return c.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: i(e.displayMonth, { locale: n }) });
}
function r_(e) {
  return c.jsx("svg", Y({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: c.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function MD(e) {
  var t, n, r = e.onChange, o = e.value, i = e.children, a = e.caption, l = e.className, s = e.style, u = pe(), d = (n = (t = u.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : r_;
  return c.jsxs("div", { className: l, style: s, children: [c.jsx("span", { className: u.classNames.vhidden, children: e["aria-label"] }), c.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: u.classNames.dropdown, style: u.styles.dropdown, value: o, onChange: r, children: i }), c.jsxs("div", { className: u.classNames.caption_label, style: u.styles.caption_label, "aria-hidden": "true", children: [a, c.jsx(d, { className: u.classNames.dropdown_icon, style: u.styles.dropdown_icon })] })] });
}
function o_(e) {
  var t, n = pe(), r = n.fromDate, o = n.toDate, i = n.styles, a = n.locale, l = n.formatters.formatMonthCaption, s = n.classNames, u = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return c.jsx(c.Fragment, {});
  if (!o)
    return c.jsx(c.Fragment, {});
  var p = [];
  if (JE(r, o))
    for (var f = mt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      p.push(Pu(f, m));
  else
    for (var f = mt(/* @__PURE__ */ new Date()), m = 0; m <= 11; m++)
      p.push(Pu(f, m));
  var h = function(x) {
    var y = Number(x.target.value), v = Pu(mt(e.displayMonth), y);
    e.onChange(v);
  }, g = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : MD;
  return c.jsx(g, { name: "months", "aria-label": d(), className: s.dropdown_month, style: i.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: l(e.displayMonth, { locale: a }), children: p.map(function(x) {
    return c.jsx("option", { value: x.getMonth(), children: l(x, { locale: a }) }, x.getMonth());
  }) });
}
function i_(e) {
  var t, n = e.displayMonth, r = pe(), o = r.fromDate, i = r.toDate, a = r.locale, l = r.styles, s = r.classNames, u = r.components, d = r.formatters.formatYearCaption, p = r.labels.labelYearDropdown, f = [];
  if (!o)
    return c.jsx(c.Fragment, {});
  if (!i)
    return c.jsx(c.Fragment, {});
  for (var m = o.getFullYear(), h = i.getFullYear(), g = m; g <= h; g++)
    f.push(Tm(d0(/* @__PURE__ */ new Date()), g));
  var x = function(v) {
    var w = Tm(mt(n), Number(v.target.value));
    e.onChange(w);
  }, y = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : MD;
  return c.jsx(y, { name: "years", "aria-label": p(), className: s.dropdown_year, style: l.dropdown_year, onChange: x, value: n.getFullYear(), caption: d(n, { locale: a }), children: f.map(function(v) {
    return c.jsx("option", { value: v.getFullYear(), children: d(v, { locale: a }) }, v.getFullYear());
  }) });
}
function a_(e, t) {
  var n = D.useState(e), r = n[0], o = n[1], i = t === void 0 ? r : t;
  return [i, o];
}
function l_(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), i = e.toDate, a = e.fromDate, l = e.numberOfMonths, s = l === void 0 ? 1 : l;
  if (i && la(i, o) < 0) {
    var u = -1 * (s - 1);
    o = Ht(i, u);
  }
  return a && la(o, a) < 0 && (o = a), mt(o);
}
function s_() {
  var e = pe(), t = l_(e), n = a_(t, e.month), r = n[0], o = n[1], i = function(a) {
    var l;
    if (!e.disableNavigation) {
      var s = mt(a);
      o(s), (l = e.onMonthChange) === null || l === void 0 || l.call(e, s);
    }
  };
  return [r, i];
}
function u_(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = mt(e), i = mt(Ht(o, r)), a = la(i, o), l = [], s = 0; s < a; s++) {
    var u = Ht(o, s);
    l.push(u);
  }
  return n && (l = l.reverse()), l;
}
function c_(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, i = o === void 0 ? 1 : o, a = r ? i : 1, l = mt(e);
    if (!n)
      return Ht(l, a);
    var s = la(n, e);
    if (!(s < i))
      return Ht(l, a);
  }
}
function d_(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, i = o === void 0 ? 1 : o, a = r ? i : 1, l = mt(e);
    if (!n)
      return Ht(l, -a);
    var s = la(l, n);
    if (!(s <= 0))
      return Ht(l, -a);
  }
}
var LD = D.createContext(void 0);
function f_(e) {
  var t = pe(), n = s_(), r = n[0], o = n[1], i = u_(r, t), a = c_(r, t), l = d_(r, t), s = function(p) {
    return i.some(function(f) {
      return gf(p, f);
    });
  }, u = function(p, f) {
    s(p) || (f && y0(p, f) ? o(Ht(p, 1 + t.numberOfMonths * -1)) : o(p));
  }, d = {
    currentMonth: r,
    displayMonths: i,
    goToMonth: o,
    goToDate: u,
    previousMonth: l,
    nextMonth: a,
    isDateDisplayed: s
  };
  return c.jsx(LD.Provider, { value: d, children: e.children });
}
function Sa() {
  var e = D.useContext(LD);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Fh(e) {
  var t, n = pe(), r = n.classNames, o = n.styles, i = n.components, a = Sa().goToMonth, l = function(d) {
    a(Ht(d, e.displayIndex ? -e.displayIndex : 0));
  }, s = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : RD, u = c.jsx(s, { id: e.id, displayMonth: e.displayMonth });
  return c.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [c.jsx("div", { className: r.vhidden, children: u }), c.jsx(o_, { onChange: l, displayMonth: e.displayMonth }), c.jsx(i_, { onChange: l, displayMonth: e.displayMonth })] });
}
function p_(e) {
  return c.jsx("svg", Y({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: c.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function m_(e) {
  return c.jsx("svg", Y({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: c.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var ns = D.forwardRef(function(e, t) {
  var n = pe(), r = n.classNames, o = n.styles, i = [r.button_reset, r.button];
  e.className && i.push(e.className);
  var a = i.join(" "), l = Y(Y({}, o.button_reset), o.button);
  return e.style && Object.assign(l, e.style), c.jsx("button", Y({}, e, { ref: t, type: "button", className: a, style: l }));
});
function h_(e) {
  var t, n, r = pe(), o = r.dir, i = r.locale, a = r.classNames, l = r.styles, s = r.labels, u = s.labelPrevious, d = s.labelNext, p = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return c.jsx(c.Fragment, {});
  var f = u(e.previousMonth, { locale: i }), m = [
    a.nav_button,
    a.nav_button_previous
  ].join(" "), h = d(e.nextMonth, { locale: i }), g = [
    a.nav_button,
    a.nav_button_next
  ].join(" "), x = (t = p == null ? void 0 : p.IconRight) !== null && t !== void 0 ? t : m_, y = (n = p == null ? void 0 : p.IconLeft) !== null && n !== void 0 ? n : p_;
  return c.jsxs("div", { className: a.nav, style: l.nav, children: [!e.hidePrevious && c.jsx(ns, { name: "previous-month", "aria-label": f, className: m, style: l.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? c.jsx(x, { className: a.nav_icon, style: l.nav_icon }) : c.jsx(y, { className: a.nav_icon, style: l.nav_icon }) }), !e.hideNext && c.jsx(ns, { name: "next-month", "aria-label": h, className: g, style: l.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? c.jsx(y, { className: a.nav_icon, style: l.nav_icon }) : c.jsx(x, { className: a.nav_icon, style: l.nav_icon }) })] });
}
function kh(e) {
  var t = pe().numberOfMonths, n = Sa(), r = n.previousMonth, o = n.nextMonth, i = n.goToMonth, a = n.displayMonths, l = a.findIndex(function(h) {
    return gf(e.displayMonth, h);
  }), s = l === 0, u = l === a.length - 1, d = t > 1 && (s || !u), p = t > 1 && (u || !s), f = function() {
    r && i(r);
  }, m = function() {
    o && i(o);
  };
  return c.jsx(h_, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: p, nextMonth: o, previousMonth: r, onPreviousClick: f, onNextClick: m });
}
function v_(e) {
  var t, n = pe(), r = n.classNames, o = n.disableNavigation, i = n.styles, a = n.captionLayout, l = n.components, s = (t = l == null ? void 0 : l.CaptionLabel) !== null && t !== void 0 ? t : RD, u;
  return o ? u = c.jsx(s, { id: e.id, displayMonth: e.displayMonth }) : a === "dropdown" ? u = c.jsx(Fh, { displayMonth: e.displayMonth, id: e.id }) : a === "dropdown-buttons" ? u = c.jsxs(c.Fragment, { children: [c.jsx(Fh, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), c.jsx(kh, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : u = c.jsxs(c.Fragment, { children: [c.jsx(s, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), c.jsx(kh, { displayMonth: e.displayMonth, id: e.id })] }), c.jsx("div", { className: r.caption, style: i.caption, children: u });
}
function g_(e) {
  var t = pe(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? c.jsx("tfoot", { className: o, style: r.tfoot, children: c.jsx("tr", { children: c.jsx("td", { colSpan: 8, children: n }) }) }) : c.jsx(c.Fragment, {});
}
function y_(e, t, n) {
  for (var r = n ? Qr(/* @__PURE__ */ new Date()) : an(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], i = 0; i < 7; i++) {
    var a = tt(r, i);
    o.push(a);
  }
  return o;
}
function D_() {
  var e = pe(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, i = e.weekStartsOn, a = e.ISOWeek, l = e.formatters.formatWeekdayName, s = e.labels.labelWeekday, u = y_(o, i, a);
  return c.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && c.jsx("td", { style: n.head_cell, className: t.head_cell }), u.map(function(d, p) {
    return c.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": s(d, { locale: o }), children: l(d, { locale: o }) }, p);
  })] });
}
function w_() {
  var e, t = pe(), n = t.classNames, r = t.styles, o = t.components, i = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : D_;
  return c.jsx("thead", { style: r.head, className: n.head, children: c.jsx(i, {}) });
}
function x_(e) {
  var t = pe(), n = t.locale, r = t.formatters.formatDay;
  return c.jsx(c.Fragment, { children: r(e.date, { locale: n }) });
}
var qf = D.createContext(void 0);
function C_(e) {
  if (!Ca(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return c.jsx(qf.Provider, { value: t, children: e.children });
  }
  return c.jsx(E_, { initialProps: e.initialProps, children: e.children });
}
function E_(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, i = t.max, a = function(u, d, p) {
    var f, m;
    (f = t.onDayClick) === null || f === void 0 || f.call(t, u, d, p);
    var h = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var g = !!(!d.selected && i && (r == null ? void 0 : r.length) === i);
      if (!g) {
        var x = r ? OD([], r) : [];
        if (d.selected) {
          var y = x.findIndex(function(v) {
            return ct(u, v);
          });
          x.splice(y, 1);
        } else
          x.push(u);
        (m = t.onSelect) === null || m === void 0 || m.call(t, x, u, d, p);
      }
    }
  }, l = {
    disabled: []
  };
  r && l.disabled.push(function(u) {
    var d = i && r.length > i - 1, p = r.some(function(f) {
      return ct(f, u);
    });
    return !!(d && !p);
  });
  var s = {
    selected: r,
    onDayClick: a,
    modifiers: l
  };
  return c.jsx(qf.Provider, { value: s, children: n });
}
function Jf() {
  var e = D.useContext(qf);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function S_(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? ct(o, e) && ct(r, e) ? void 0 : ct(o, e) ? { from: o, to: void 0 } : ct(r, e) ? void 0 : Qc(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? Qc(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? y0(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var Zf = D.createContext(void 0);
function b_(e) {
  if (!Ea(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return c.jsx(Zf.Provider, { value: t, children: e.children });
  }
  return c.jsx(F_, { initialProps: e.initialProps, children: e.children });
}
function F_(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, i = o.from, a = o.to, l = t.min, s = t.max, u = function(m, h, g) {
    var x, y;
    (x = t.onDayClick) === null || x === void 0 || x.call(t, m, h, g);
    var v = S_(m, r);
    (y = t.onSelect) === null || y === void 0 || y.call(t, v, m, h, g);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (i ? (d.range_start = [i], a ? (d.range_end = [a], ct(i, a) || (d.range_middle = [
    {
      after: i,
      before: a
    }
  ])) : d.range_end = [i]) : a && (d.range_start = [a], d.range_end = [a]), l && (i && !a && d.disabled.push({
    after: Nu(i, l - 1),
    before: tt(i, l - 1)
  }), i && a && d.disabled.push({
    after: i,
    before: tt(i, l - 1)
  }), !i && a && d.disabled.push({
    after: Nu(a, l - 1),
    before: tt(a, l - 1)
  })), s) {
    if (i && !a && (d.disabled.push({
      before: tt(i, -s + 1)
    }), d.disabled.push({
      after: tt(i, s - 1)
    })), i && a) {
      var p = tn(a, i) + 1, f = s - p;
      d.disabled.push({
        before: Nu(i, f)
      }), d.disabled.push({
        after: tt(a, f)
      });
    }
    !i && a && (d.disabled.push({
      before: tt(a, -s + 1)
    }), d.disabled.push({
      after: tt(a, s - 1)
    }));
  }
  return c.jsx(Zf.Provider, { value: { selected: r, onDayClick: u, modifiers: d }, children: n });
}
function ep() {
  var e = D.useContext(Zf);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function El(e) {
  return Array.isArray(e) ? OD([], e) : e !== void 0 ? [e] : [];
}
function k_(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = El(o);
  }), t;
}
var Vt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Vt || (Vt = {}));
var N_ = Vt.Selected, mn = Vt.Disabled, P_ = Vt.Hidden, __ = Vt.Today, Yu = Vt.RangeEnd, Ku = Vt.RangeMiddle, Qu = Vt.RangeStart, j_ = Vt.Outside;
function A_(e, t, n) {
  var r, o = (r = {}, r[N_] = El(e.selected), r[mn] = El(e.disabled), r[P_] = El(e.hidden), r[__] = [e.today], r[Yu] = [], r[Ku] = [], r[Qu] = [], r[j_] = [], r);
  return e.fromDate && o[mn].push({ before: e.fromDate }), e.toDate && o[mn].push({ after: e.toDate }), Ca(e) ? o[mn] = o[mn].concat(t.modifiers[mn]) : Ea(e) && (o[mn] = o[mn].concat(n.modifiers[mn]), o[Qu] = n.modifiers[Qu], o[Ku] = n.modifiers[Ku], o[Yu] = n.modifiers[Yu]), o;
}
var ID = D.createContext(void 0);
function O_(e) {
  var t = pe(), n = Jf(), r = ep(), o = A_(t, n, r), i = k_(t.modifiers), a = Y(Y({}, o), i);
  return c.jsx(ID.Provider, { value: a, children: e.children });
}
function BD() {
  var e = D.useContext(ID);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function T_(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function R_(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function M_(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function L_(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function I_(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function B_(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var i = tn(o, r) < 0;
    i && (n = [o, r], r = n[0], o = n[1]);
    var a = tn(e, r) >= 0 && tn(o, e) >= 0;
    return a;
  }
  return o ? ct(o, e) : r ? ct(r, e) : !1;
}
function $_(e) {
  return mf(e);
}
function W_(e) {
  return Array.isArray(e) && e.every(mf);
}
function z_(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if ($_(n))
      return ct(e, n);
    if (W_(n))
      return n.includes(e);
    if (R_(n))
      return B_(e, n);
    if (I_(n))
      return n.dayOfWeek.includes(e.getDay());
    if (T_(n)) {
      var r = tn(n.before, e), o = tn(n.after, e), i = r > 0, a = o < 0, l = Qc(n.before, n.after);
      return l ? a && i : i || a;
    }
    return M_(n) ? tn(e, n.after) > 0 : L_(n) ? tn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function tp(e, t, n) {
  var r = Object.keys(t).reduce(function(i, a) {
    var l = t[a];
    return z_(e, l) && i.push(a), i;
  }, []), o = {};
  return r.forEach(function(i) {
    return o[i] = !0;
  }), n && !gf(e, n) && (o.outside = !0), o;
}
function H_(e, t) {
  for (var n = mt(e[0]), r = hf(e[e.length - 1]), o, i, a = n; a <= r; ) {
    var l = tp(a, t), s = !l.disabled && !l.hidden;
    if (!s) {
      a = tt(a, 1);
      continue;
    }
    if (l.selected)
      return a;
    l.today && !i && (i = a), o || (o = a), a = tt(a, 1);
  }
  return i || o;
}
var V_ = 365;
function $D(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, i = t.modifiers, a = t.retry, l = a === void 0 ? { count: 0, lastFocused: e } : a, s = o.weekStartsOn, u = o.fromDate, d = o.toDate, p = o.locale, f = {
    day: tt,
    week: Kc,
    month: Ht,
    year: Q2,
    startOfWeek: function(x) {
      return o.ISOWeek ? Qr(x) : an(x, { locale: p, weekStartsOn: s });
    },
    endOfWeek: function(x) {
      return o.ISOWeek ? f0(x) : vf(x, { locale: p, weekStartsOn: s });
    }
  }, m = f[n](e, r === "after" ? 1 : -1);
  r === "before" && u ? m = X2([u, m]) : r === "after" && d && (m = G2([d, m]));
  var h = !0;
  if (i) {
    var g = tp(m, i);
    h = !g.disabled && !g.hidden;
  }
  return h ? m : l.count > V_ ? l.lastFocused : $D(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: i,
    retry: Y(Y({}, l), { count: l.count + 1 })
  });
}
var WD = D.createContext(void 0);
function U_(e) {
  var t = Sa(), n = BD(), r = D.useState(), o = r[0], i = r[1], a = D.useState(), l = a[0], s = a[1], u = H_(t.displayMonths, n), d = o ?? (l && t.isDateDisplayed(l)) ? l : u, p = function() {
    s(o), i(void 0);
  }, f = function(x) {
    i(x);
  }, m = pe(), h = function(x, y) {
    if (o) {
      var v = $D(o, {
        moveBy: x,
        direction: y,
        context: m,
        modifiers: n
      });
      ct(o, v) || (t.goToDate(v, o), f(v));
    }
  }, g = {
    focusedDay: o,
    focusTarget: d,
    blur: p,
    focus: f,
    focusDayAfter: function() {
      return h("day", "after");
    },
    focusDayBefore: function() {
      return h("day", "before");
    },
    focusWeekAfter: function() {
      return h("week", "after");
    },
    focusWeekBefore: function() {
      return h("week", "before");
    },
    focusMonthBefore: function() {
      return h("month", "before");
    },
    focusMonthAfter: function() {
      return h("month", "after");
    },
    focusYearBefore: function() {
      return h("year", "before");
    },
    focusYearAfter: function() {
      return h("year", "after");
    },
    focusStartOfWeek: function() {
      return h("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return h("endOfWeek", "after");
    }
  };
  return c.jsx(WD.Provider, { value: g, children: e.children });
}
function np() {
  var e = D.useContext(WD);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Y_(e, t) {
  var n = BD(), r = tp(e, n, t);
  return r;
}
var rp = D.createContext(void 0);
function K_(e) {
  if (!Ws(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return c.jsx(rp.Provider, { value: t, children: e.children });
  }
  return c.jsx(Q_, { initialProps: e.initialProps, children: e.children });
}
function Q_(e) {
  var t = e.initialProps, n = e.children, r = function(i, a, l) {
    var s, u, d;
    if ((s = t.onDayClick) === null || s === void 0 || s.call(t, i, a, l), a.selected && !t.required) {
      (u = t.onSelect) === null || u === void 0 || u.call(t, void 0, i, a, l);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, i, i, a, l);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return c.jsx(rp.Provider, { value: o, children: n });
}
function zD() {
  var e = D.useContext(rp);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function X_(e, t) {
  var n = pe(), r = zD(), o = Jf(), i = ep(), a = np(), l = a.focusDayAfter, s = a.focusDayBefore, u = a.focusWeekAfter, d = a.focusWeekBefore, p = a.blur, f = a.focus, m = a.focusMonthBefore, h = a.focusMonthAfter, g = a.focusYearBefore, x = a.focusYearAfter, y = a.focusStartOfWeek, v = a.focusEndOfWeek, w = function(_) {
    var F, O, B, V;
    Ws(n) ? (F = r.onDayClick) === null || F === void 0 || F.call(r, e, t, _) : Ca(n) ? (O = o.onDayClick) === null || O === void 0 || O.call(o, e, t, _) : Ea(n) ? (B = i.onDayClick) === null || B === void 0 || B.call(i, e, t, _) : (V = n.onDayClick) === null || V === void 0 || V.call(n, e, t, _);
  }, C = function(_) {
    var F;
    f(e), (F = n.onDayFocus) === null || F === void 0 || F.call(n, e, t, _);
  }, E = function(_) {
    var F;
    p(), (F = n.onDayBlur) === null || F === void 0 || F.call(n, e, t, _);
  }, S = function(_) {
    var F;
    (F = n.onDayMouseEnter) === null || F === void 0 || F.call(n, e, t, _);
  }, b = function(_) {
    var F;
    (F = n.onDayMouseLeave) === null || F === void 0 || F.call(n, e, t, _);
  }, k = function(_) {
    var F;
    (F = n.onDayPointerEnter) === null || F === void 0 || F.call(n, e, t, _);
  }, P = function(_) {
    var F;
    (F = n.onDayPointerLeave) === null || F === void 0 || F.call(n, e, t, _);
  }, N = function(_) {
    var F;
    (F = n.onDayTouchCancel) === null || F === void 0 || F.call(n, e, t, _);
  }, T = function(_) {
    var F;
    (F = n.onDayTouchEnd) === null || F === void 0 || F.call(n, e, t, _);
  }, j = function(_) {
    var F;
    (F = n.onDayTouchMove) === null || F === void 0 || F.call(n, e, t, _);
  }, L = function(_) {
    var F;
    (F = n.onDayTouchStart) === null || F === void 0 || F.call(n, e, t, _);
  }, I = function(_) {
    var F;
    (F = n.onDayKeyUp) === null || F === void 0 || F.call(n, e, t, _);
  }, z = function(_) {
    var F;
    switch (_.key) {
      case "ArrowLeft":
        _.preventDefault(), _.stopPropagation(), n.dir === "rtl" ? l() : s();
        break;
      case "ArrowRight":
        _.preventDefault(), _.stopPropagation(), n.dir === "rtl" ? s() : l();
        break;
      case "ArrowDown":
        _.preventDefault(), _.stopPropagation(), u();
        break;
      case "ArrowUp":
        _.preventDefault(), _.stopPropagation(), d();
        break;
      case "PageUp":
        _.preventDefault(), _.stopPropagation(), _.shiftKey ? g() : m();
        break;
      case "PageDown":
        _.preventDefault(), _.stopPropagation(), _.shiftKey ? x() : h();
        break;
      case "Home":
        _.preventDefault(), _.stopPropagation(), y();
        break;
      case "End":
        _.preventDefault(), _.stopPropagation(), v();
        break;
    }
    (F = n.onDayKeyDown) === null || F === void 0 || F.call(n, e, t, _);
  }, H = {
    onClick: w,
    onFocus: C,
    onBlur: E,
    onKeyDown: z,
    onKeyUp: I,
    onMouseEnter: S,
    onMouseLeave: b,
    onPointerEnter: k,
    onPointerLeave: P,
    onTouchCancel: N,
    onTouchEnd: T,
    onTouchMove: j,
    onTouchStart: L
  };
  return H;
}
function G_() {
  var e = pe(), t = zD(), n = Jf(), r = ep(), o = Ws(e) ? t.selected : Ca(e) ? n.selected : Ea(e) ? r.selected : void 0;
  return o;
}
function q_(e) {
  return Object.values(Vt).includes(e);
}
function J_(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (q_(r)) {
      var i = e.classNames["day_".concat(r)];
      i && n.push(i);
    }
  }), n;
}
function Z_(e, t) {
  var n = Y({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Y(Y({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function ej(e, t, n) {
  var r, o, i, a = pe(), l = np(), s = Y_(e, t), u = X_(e, s), d = G_(), p = !!(a.onDayClick || a.mode !== "default");
  D.useEffect(function() {
    var S;
    s.outside || l.focusedDay && p && ct(l.focusedDay, e) && ((S = n.current) === null || S === void 0 || S.focus());
  }, [
    l.focusedDay,
    e,
    n,
    p,
    s.outside
  ]);
  var f = J_(a, s).join(" "), m = Z_(a, s), h = !!(s.outside && !a.showOutsideDays || s.hidden), g = (i = (o = a.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && i !== void 0 ? i : x_, x = c.jsx(g, { date: e, displayMonth: t, activeModifiers: s }), y = {
    style: m,
    className: f,
    children: x,
    role: "gridcell"
  }, v = l.focusTarget && ct(l.focusTarget, e) && !s.outside, w = l.focusedDay && ct(l.focusedDay, e), C = Y(Y(Y({}, y), (r = { disabled: s.disabled, role: "gridcell" }, r["aria-selected"] = s.selected, r.tabIndex = w || v ? 0 : -1, r)), u), E = {
    isButton: p,
    isHidden: h,
    activeModifiers: s,
    selectedDays: d,
    buttonProps: C,
    divProps: y
  };
  return E;
}
function tj(e) {
  var t = D.useRef(null), n = ej(e.date, e.displayMonth, t);
  return n.isHidden ? c.jsx("div", { role: "gridcell" }) : n.isButton ? c.jsx(ns, Y({ name: "day", ref: t }, n.buttonProps)) : c.jsx("div", Y({}, n.divProps));
}
function nj(e) {
  var t = e.number, n = e.dates, r = pe(), o = r.onWeekNumberClick, i = r.styles, a = r.classNames, l = r.locale, s = r.labels.labelWeekNumber, u = r.formatters.formatWeekNumber, d = u(Number(t), { locale: l });
  if (!o)
    return c.jsx("span", { className: a.weeknumber, style: i.weeknumber, children: d });
  var p = s(Number(t), { locale: l }), f = function(m) {
    o(t, n, m);
  };
  return c.jsx(ns, { name: "week-number", "aria-label": p, className: a.weeknumber, style: i.weeknumber, onClick: f, children: d });
}
function rj(e) {
  var t, n, r = pe(), o = r.styles, i = r.classNames, a = r.showWeekNumber, l = r.components, s = (t = l == null ? void 0 : l.Day) !== null && t !== void 0 ? t : tj, u = (n = l == null ? void 0 : l.WeekNumber) !== null && n !== void 0 ? n : nj, d;
  return a && (d = c.jsx("td", { className: i.cell, style: o.cell, children: c.jsx(u, { number: e.weekNumber, dates: e.dates }) })), c.jsxs("tr", { className: i.row, style: o.row, children: [d, e.dates.map(function(p) {
    return c.jsx("td", { className: i.cell, style: o.cell, role: "presentation", children: c.jsx(s, { displayMonth: e.displayMonth, date: p }) }, XE(p));
  })] });
}
function Nh(e, t, n) {
  for (var r = n != null && n.ISOWeek ? f0(t) : vf(t, n), o = n != null && n.ISOWeek ? Qr(e) : an(e, n), i = tn(r, o), a = [], l = 0; l <= i; l++)
    a.push(tt(o, l));
  var s = a.reduce(function(u, d) {
    var p = n != null && n.ISOWeek ? m0(d) : v0(d, n), f = u.find(function(m) {
      return m.weekNumber === p;
    });
    return f ? (f.dates.push(d), u) : (u.push({
      weekNumber: p,
      dates: [d]
    }), u);
  }, []);
  return s;
}
function oj(e, t) {
  var n = Nh(mt(e), hf(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = qE(e, t);
    if (r < 6) {
      var o = n[n.length - 1], i = o.dates[o.dates.length - 1], a = Kc(i, 6 - r), l = Nh(Kc(i, 1), a, t);
      n.push.apply(n, l);
    }
  }
  return n;
}
function ij(e) {
  var t, n, r, o = pe(), i = o.locale, a = o.classNames, l = o.styles, s = o.hideHead, u = o.fixedWeeks, d = o.components, p = o.weekStartsOn, f = o.firstWeekContainsDate, m = o.ISOWeek, h = oj(e.displayMonth, {
    useFixedWeeks: !!u,
    ISOWeek: m,
    locale: i,
    weekStartsOn: p,
    firstWeekContainsDate: f
  }), g = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : w_, x = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : rj, y = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : g_;
  return c.jsxs("table", { id: e.id, className: a.table, style: l.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!s && c.jsx(g, {}), c.jsx("tbody", { className: a.tbody, style: l.tbody, children: h.map(function(v) {
    return c.jsx(x, { displayMonth: e.displayMonth, dates: v.dates, weekNumber: v.weekNumber }, v.weekNumber);
  }) }), c.jsx(y, { displayMonth: e.displayMonth })] });
}
function aj() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var lj = aj() ? D.useLayoutEffect : D.useEffect, Xu = !1, sj = 0;
function Ph() {
  return "react-day-picker-".concat(++sj);
}
function uj(e) {
  var t, n = e ?? (Xu ? Ph() : null), r = D.useState(n), o = r[0], i = r[1];
  return lj(function() {
    o === null && i(Ph());
  }, []), D.useEffect(function() {
    Xu === !1 && (Xu = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function cj(e) {
  var t, n, r = pe(), o = r.dir, i = r.classNames, a = r.styles, l = r.components, s = Sa().displayMonths, u = uj(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, p = [i.month], f = a.month, m = e.displayIndex === 0, h = e.displayIndex === s.length - 1, g = !m && !h;
  o === "rtl" && (t = [m, h], h = t[0], m = t[1]), m && (p.push(i.caption_start), f = Y(Y({}, f), a.caption_start)), h && (p.push(i.caption_end), f = Y(Y({}, f), a.caption_end)), g && (p.push(i.caption_between), f = Y(Y({}, f), a.caption_between));
  var x = (n = l == null ? void 0 : l.Caption) !== null && n !== void 0 ? n : v_;
  return c.jsxs("div", { className: p.join(" "), style: f, children: [c.jsx(x, { id: u, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), c.jsx(ij, { id: d, "aria-labelledby": u, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function dj(e) {
  var t = pe(), n = t.classNames, r = t.styles;
  return c.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function fj(e) {
  var t, n, r = e.initialProps, o = pe(), i = np(), a = Sa(), l = D.useState(!1), s = l[0], u = l[1];
  D.useEffect(function() {
    o.initialFocus && i.focusTarget && (s || (i.focus(i.focusTarget), u(!0)));
  }, [
    o.initialFocus,
    s,
    i.focus,
    i.focusTarget,
    i
  ]);
  var d = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && d.push(o.classNames.multiple_months), o.showWeekNumber && d.push(o.classNames.with_weeknumber);
  var p = Y(Y({}, o.styles.root), o.style), f = Object.keys(r).filter(function(h) {
    return h.startsWith("data-");
  }).reduce(function(h, g) {
    var x;
    return Y(Y({}, h), (x = {}, x[g] = r[g], x));
  }, {}), m = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : dj;
  return c.jsx("div", Y({ className: d.join(" "), style: p, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, f, { children: c.jsx(m, { children: a.displayMonths.map(function(h, g) {
    return c.jsx(cj, { displayIndex: g, displayMonth: h }, g);
  }) }) }));
}
function pj(e) {
  var t = e.children, n = LP(e, ["children"]);
  return c.jsx(n_, { initialProps: n, children: c.jsx(f_, { children: c.jsx(K_, { initialProps: n, children: c.jsx(C_, { initialProps: n, children: c.jsx(b_, { initialProps: n, children: c.jsx(O_, { children: c.jsx(U_, { children: t }) }) }) }) }) }) });
}
function mj(e) {
  return c.jsx(pj, Y({}, e, { children: c.jsx(fj, { initialProps: e }) }));
}
function HD({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ c.jsx(
    mj,
    {
      showOutsideDays: n,
      className: G("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: G(
          Uc({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: G(
          Uc({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ c.jsx(TP, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ c.jsx(RP, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
HD.displayName = "Calendar";
const hj = ["top", "right", "bottom", "left"], nn = Math.min, yt = Math.max, rs = Math.round, il = Math.floor, mr = (e) => ({
  x: e,
  y: e
}), vj = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, gj = {
  start: "end",
  end: "start"
};
function ud(e, t, n) {
  return yt(e, nn(t, n));
}
function kn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Nn(e) {
  return e.split("-")[0];
}
function ri(e) {
  return e.split("-")[1];
}
function op(e) {
  return e === "x" ? "y" : "x";
}
function ip(e) {
  return e === "y" ? "height" : "width";
}
function hr(e) {
  return ["top", "bottom"].includes(Nn(e)) ? "y" : "x";
}
function ap(e) {
  return op(hr(e));
}
function yj(e, t, n) {
  n === void 0 && (n = !1);
  const r = ri(e), o = ap(e), i = ip(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = os(a)), [a, os(a)];
}
function Dj(e) {
  const t = os(e);
  return [cd(e), t, cd(t)];
}
function cd(e) {
  return e.replace(/start|end/g, (t) => gj[t]);
}
function wj(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : a;
    default:
      return [];
  }
}
function xj(e, t, n, r) {
  const o = ri(e);
  let i = wj(Nn(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(cd)))), i;
}
function os(e) {
  return e.replace(/left|right|bottom|top/g, (t) => vj[t]);
}
function Cj(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function VD(e) {
  return typeof e != "number" ? Cj(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function is(e) {
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
function _h(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = hr(t), a = ap(t), l = ip(a), s = Nn(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[l] / 2 - o[l] / 2;
  let m;
  switch (s) {
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
        y: p
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (ri(t)) {
    case "start":
      m[a] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      m[a] += f * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const Ej = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, l = i.filter(Boolean), s = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: p
  } = _h(u, r, s), f = r, m = {}, h = 0;
  for (let g = 0; g < l.length; g++) {
    const {
      name: x,
      fn: y
    } = l[g], {
      x: v,
      y: w,
      data: C,
      reset: E
    } = await y({
      x: d,
      y: p,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = v ?? d, p = w ?? p, m = {
      ...m,
      [x]: {
        ...m[x],
        ...C
      }
    }, E && h <= 50 && (h++, typeof E == "object" && (E.placement && (f = E.placement), E.rects && (u = E.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: p
    } = _h(u, f, s)), g = -1);
  }
  return {
    x: d,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: m
  };
};
async function ua(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: l,
    strategy: s
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = kn(t, e), h = VD(m), x = l[f ? p === "floating" ? "reference" : "floating" : p], y = is(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: s
  })), v = p === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), C = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = is(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: v,
    offsetParent: w,
    strategy: s
  }) : v);
  return {
    top: (y.top - E.top + h.top) / C.y,
    bottom: (E.bottom - y.bottom + h.bottom) / C.y,
    left: (y.left - E.left + h.left) / C.x,
    right: (E.right - y.right + h.right) / C.x
  };
}
const Sj = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: l,
      middlewareData: s
    } = t, {
      element: u,
      padding: d = 0
    } = kn(e, t) || {};
    if (u == null)
      return {};
    const p = VD(d), f = {
      x: n,
      y: r
    }, m = ap(o), h = ip(m), g = await a.getDimensions(u), x = m === "y", y = x ? "top" : "left", v = x ? "bottom" : "right", w = x ? "clientHeight" : "clientWidth", C = i.reference[h] + i.reference[m] - f[m] - i.floating[h], E = f[m] - i.reference[m], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let b = S ? S[w] : 0;
    (!b || !await (a.isElement == null ? void 0 : a.isElement(S))) && (b = l.floating[w] || i.floating[h]);
    const k = C / 2 - E / 2, P = b / 2 - g[h] / 2 - 1, N = nn(p[y], P), T = nn(p[v], P), j = N, L = b - g[h] - T, I = b / 2 - g[h] / 2 + k, z = ud(j, I, L), H = !s.arrow && ri(o) != null && I !== z && i.reference[h] / 2 - (I < j ? N : T) - g[h] / 2 < 0, _ = H ? I < j ? I - j : I - L : 0;
    return {
      [m]: f[m] + _,
      data: {
        [m]: z,
        centerOffset: I - z - _,
        ...H && {
          alignmentOffset: _
        }
      },
      reset: H
    };
  }
}), bj = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: l,
        platform: s,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: p = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...x
      } = kn(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const y = Nn(o), v = hr(l), w = Nn(l) === l, C = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)), E = f || (w || !g ? [os(l)] : Dj(l)), S = h !== "none";
      !f && S && E.push(...xj(l, g, h, C));
      const b = [l, ...E], k = await ua(t, x), P = [];
      let N = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && P.push(k[y]), p) {
        const I = yj(o, a, C);
        P.push(k[I[0]], k[I[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: P
      }], !P.every((I) => I <= 0)) {
        var T, j;
        const I = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, z = b[I];
        if (z)
          return {
            data: {
              index: I,
              overflows: N
            },
            reset: {
              placement: z
            }
          };
        let H = (j = N.filter((_) => _.overflows[0] <= 0).sort((_, F) => _.overflows[1] - F.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!H)
          switch (m) {
            case "bestFit": {
              var L;
              const _ = (L = N.filter((F) => {
                if (S) {
                  const O = hr(F.placement);
                  return O === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((O) => O > 0).reduce((O, B) => O + B, 0)]).sort((F, O) => F[1] - O[1])[0]) == null ? void 0 : L[0];
              _ && (H = _);
              break;
            }
            case "initialPlacement":
              H = l;
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
function jh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ah(e) {
  return hj.some((t) => e[t] >= 0);
}
const Fj = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = kn(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await ua(t, {
            ...o,
            elementContext: "reference"
          }), a = jh(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Ah(a)
            }
          };
        }
        case "escaped": {
          const i = await ua(t, {
            ...o,
            altBoundary: !0
          }), a = jh(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Ah(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function kj(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Nn(n), l = ri(n), s = hr(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, d = i && s ? -1 : 1, p = kn(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: h
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
  return l && typeof h == "number" && (m = l === "end" ? h * -1 : h), s ? {
    x: m * d,
    y: f * u
  } : {
    x: f * u,
    y: m * d
  };
}
const Nj = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: l
      } = t, s = await kj(t, e);
      return a === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: o + s.x,
        y: i + s.y,
        data: {
          ...s,
          placement: a
        }
      };
    }
  };
}, Pj = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (x) => {
            let {
              x: y,
              y: v
            } = x;
            return {
              x: y,
              y: v
            };
          }
        },
        ...s
      } = kn(e, t), u = {
        x: n,
        y: r
      }, d = await ua(t, s), p = hr(Nn(o)), f = op(p);
      let m = u[f], h = u[p];
      if (i) {
        const x = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", v = m + d[x], w = m - d[y];
        m = ud(v, m, w);
      }
      if (a) {
        const x = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", v = h + d[x], w = h - d[y];
        h = ud(v, h, w);
      }
      const g = l.fn({
        ...t,
        [f]: m,
        [p]: h
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
}, _j = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: a
      } = t, {
        offset: l = 0,
        mainAxis: s = !0,
        crossAxis: u = !0
      } = kn(e, t), d = {
        x: n,
        y: r
      }, p = hr(o), f = op(p);
      let m = d[f], h = d[p];
      const g = kn(l, t), x = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (s) {
        const w = f === "y" ? "height" : "width", C = i.reference[f] - i.floating[w] + x.mainAxis, E = i.reference[f] + i.reference[w] - x.mainAxis;
        m < C ? m = C : m > E && (m = E);
      }
      if (u) {
        var y, v;
        const w = f === "y" ? "width" : "height", C = ["top", "left"].includes(Nn(o)), E = i.reference[p] - i.floating[w] + (C && ((y = a.offset) == null ? void 0 : y[p]) || 0) + (C ? 0 : x.crossAxis), S = i.reference[p] + i.reference[w] + (C ? 0 : ((v = a.offset) == null ? void 0 : v[p]) || 0) - (C ? x.crossAxis : 0);
        h < E ? h = E : h > S && (h = S);
      }
      return {
        [f]: m,
        [p]: h
      };
    }
  };
}, jj = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: i
      } = t, {
        apply: a = () => {
        },
        ...l
      } = kn(e, t), s = await ua(t, l), u = Nn(n), d = ri(n), p = hr(n) === "y", {
        width: f,
        height: m
      } = r.floating;
      let h, g;
      u === "top" || u === "bottom" ? (h = u, g = d === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = u, h = d === "end" ? "top" : "bottom");
      const x = m - s.top - s.bottom, y = f - s.left - s.right, v = nn(m - s[h], x), w = nn(f - s[g], y), C = !t.middlewareData.shift;
      let E = v, S = w;
      if (p ? S = d || C ? nn(w, y) : y : E = d || C ? nn(v, x) : x, C && !d) {
        const k = yt(s.left, 0), P = yt(s.right, 0), N = yt(s.top, 0), T = yt(s.bottom, 0);
        p ? S = f - 2 * (k !== 0 || P !== 0 ? k + P : yt(s.left, s.right)) : E = m - 2 * (N !== 0 || T !== 0 ? N + T : yt(s.top, s.bottom));
      }
      await a({
        ...t,
        availableWidth: S,
        availableHeight: E
      });
      const b = await o.getDimensions(i.floating);
      return f !== b.width || m !== b.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function oi(e) {
  return UD(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ct(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function In(e) {
  var t;
  return (t = (UD(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function UD(e) {
  return e instanceof Node || e instanceof Ct(e).Node;
}
function Ut(e) {
  return e instanceof Element || e instanceof Ct(e).Element;
}
function ln(e) {
  return e instanceof HTMLElement || e instanceof Ct(e).HTMLElement;
}
function Oh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ct(e).ShadowRoot;
}
function ba(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Yt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Aj(e) {
  return ["table", "td", "th"].includes(oi(e));
}
function zs(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function lp(e) {
  const t = sp(), n = Ut(e) ? Yt(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Oj(e) {
  let t = vr(e);
  for (; ln(t) && !Go(t); ) {
    if (lp(t))
      return t;
    if (zs(t))
      return null;
    t = vr(t);
  }
  return null;
}
function sp() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Go(e) {
  return ["html", "body", "#document"].includes(oi(e));
}
function Yt(e) {
  return Ct(e).getComputedStyle(e);
}
function Hs(e) {
  return Ut(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function vr(e) {
  if (oi(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Oh(e) && e.host || // Fallback.
    In(e)
  );
  return Oh(t) ? t.host : t;
}
function YD(e) {
  const t = vr(e);
  return Go(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ln(t) && ba(t) ? t : YD(t);
}
function ca(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = YD(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ct(o);
  if (i) {
    const l = dd(a);
    return t.concat(a, a.visualViewport || [], ba(o) ? o : [], l && n ? ca(l) : []);
  }
  return t.concat(o, ca(o, [], n));
}
function dd(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function KD(e) {
  const t = Yt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ln(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, l = rs(n) !== i || rs(r) !== a;
  return l && (n = i, r = a), {
    width: n,
    height: r,
    $: l
  };
}
function up(e) {
  return Ut(e) ? e : e.contextElement;
}
function Lo(e) {
  const t = up(e);
  if (!ln(t))
    return mr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = KD(t);
  let a = (i ? rs(n.width) : n.width) / r, l = (i ? rs(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: a,
    y: l
  };
}
const Tj = /* @__PURE__ */ mr(0);
function QD(e) {
  const t = Ct(e);
  return !sp() || !t.visualViewport ? Tj : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Rj(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ct(e) ? !1 : t;
}
function qr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = up(e);
  let a = mr(1);
  t && (r ? Ut(r) && (a = Lo(r)) : a = Lo(e));
  const l = Rj(i, n, r) ? QD(i) : mr(0);
  let s = (o.left + l.x) / a.x, u = (o.top + l.y) / a.y, d = o.width / a.x, p = o.height / a.y;
  if (i) {
    const f = Ct(i), m = r && Ut(r) ? Ct(r) : r;
    let h = f, g = dd(h);
    for (; g && r && m !== h; ) {
      const x = Lo(g), y = g.getBoundingClientRect(), v = Yt(g), w = y.left + (g.clientLeft + parseFloat(v.paddingLeft)) * x.x, C = y.top + (g.clientTop + parseFloat(v.paddingTop)) * x.y;
      s *= x.x, u *= x.y, d *= x.x, p *= x.y, s += w, u += C, h = Ct(g), g = dd(h);
    }
  }
  return is({
    width: d,
    height: p,
    x: s,
    y: u
  });
}
function Mj(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = In(r), l = t ? zs(t.floating) : !1;
  if (r === a || l && i)
    return n;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = mr(1);
  const d = mr(0), p = ln(r);
  if ((p || !p && !i) && ((oi(r) !== "body" || ba(a)) && (s = Hs(r)), ln(r))) {
    const f = qr(r);
    u = Lo(r), d.x = f.x + r.clientLeft, d.y = f.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - s.scrollLeft * u.x + d.x,
    y: n.y * u.y - s.scrollTop * u.y + d.y
  };
}
function Lj(e) {
  return Array.from(e.getClientRects());
}
function XD(e) {
  return qr(In(e)).left + Hs(e).scrollLeft;
}
function Ij(e) {
  const t = In(e), n = Hs(e), r = e.ownerDocument.body, o = yt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = yt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + XD(e);
  const l = -n.scrollTop;
  return Yt(r).direction === "rtl" && (a += yt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: l
  };
}
function Bj(e, t) {
  const n = Ct(e), r = In(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, l = 0, s = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = sp();
    (!u || u && t === "fixed") && (l = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: l,
    y: s
  };
}
function $j(e, t) {
  const n = qr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ln(e) ? Lo(e) : mr(1), a = e.clientWidth * i.x, l = e.clientHeight * i.y, s = o * i.x, u = r * i.y;
  return {
    width: a,
    height: l,
    x: s,
    y: u
  };
}
function Th(e, t, n) {
  let r;
  if (t === "viewport")
    r = Bj(e, n);
  else if (t === "document")
    r = Ij(In(e));
  else if (Ut(t))
    r = $j(t, n);
  else {
    const o = QD(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return is(r);
}
function GD(e, t) {
  const n = vr(e);
  return n === t || !Ut(n) || Go(n) ? !1 : Yt(n).position === "fixed" || GD(n, t);
}
function Wj(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ca(e, [], !1).filter((l) => Ut(l) && oi(l) !== "body"), o = null;
  const i = Yt(e).position === "fixed";
  let a = i ? vr(e) : e;
  for (; Ut(a) && !Go(a); ) {
    const l = Yt(a), s = lp(a);
    !s && l.position === "fixed" && (o = null), (i ? !s && !o : !s && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ba(a) && !s && GD(e, a)) ? r = r.filter((d) => d !== a) : o = l, a = vr(a);
  }
  return t.set(e, r), r;
}
function zj(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? zs(t) ? [] : Wj(t, this._c) : [].concat(n), r], l = a[0], s = a.reduce((u, d) => {
    const p = Th(t, d, o);
    return u.top = yt(p.top, u.top), u.right = nn(p.right, u.right), u.bottom = nn(p.bottom, u.bottom), u.left = yt(p.left, u.left), u;
  }, Th(t, l, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function Hj(e) {
  const {
    width: t,
    height: n
  } = KD(e);
  return {
    width: t,
    height: n
  };
}
function Vj(e, t, n) {
  const r = ln(t), o = In(t), i = n === "fixed", a = qr(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = mr(0);
  if (r || !r && !i)
    if ((oi(t) !== "body" || ba(o)) && (l = Hs(t)), r) {
      const p = qr(t, !0, i, t);
      s.x = p.x + t.clientLeft, s.y = p.y + t.clientTop;
    } else o && (s.x = XD(o));
  const u = a.left + l.scrollLeft - s.x, d = a.top + l.scrollTop - s.y;
  return {
    x: u,
    y: d,
    width: a.width,
    height: a.height
  };
}
function Gu(e) {
  return Yt(e).position === "static";
}
function Rh(e, t) {
  return !ln(e) || Yt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function qD(e, t) {
  const n = Ct(e);
  if (zs(e))
    return n;
  if (!ln(e)) {
    let o = vr(e);
    for (; o && !Go(o); ) {
      if (Ut(o) && !Gu(o))
        return o;
      o = vr(o);
    }
    return n;
  }
  let r = Rh(e, t);
  for (; r && Aj(r) && Gu(r); )
    r = Rh(r, t);
  return r && Go(r) && Gu(r) && !lp(r) ? n : r || Oj(e) || n;
}
const Uj = async function(e) {
  const t = this.getOffsetParent || qD, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Vj(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Yj(e) {
  return Yt(e).direction === "rtl";
}
const Kj = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mj,
  getDocumentElement: In,
  getClippingRect: zj,
  getOffsetParent: qD,
  getElementRects: Uj,
  getClientRects: Lj,
  getDimensions: Hj,
  getScale: Lo,
  isElement: Ut,
  isRTL: Yj
};
function Qj(e, t) {
  let n = null, r;
  const o = In(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function a(l, s) {
    l === void 0 && (l = !1), s === void 0 && (s = 1), i();
    const {
      left: u,
      top: d,
      width: p,
      height: f
    } = e.getBoundingClientRect();
    if (l || t(), !p || !f)
      return;
    const m = il(d), h = il(o.clientWidth - (u + p)), g = il(o.clientHeight - (d + f)), x = il(u), v = {
      rootMargin: -m + "px " + -h + "px " + -g + "px " + -x + "px",
      threshold: yt(0, nn(1, s)) || 1
    };
    let w = !0;
    function C(E) {
      const S = E[0].intersectionRatio;
      if (S !== s) {
        if (!w)
          return a();
        S ? a(!1, S) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, v);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function Xj(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = r, u = up(e), d = o || i ? [...u ? ca(u) : [], ...ca(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), i && y.addEventListener("resize", n);
  });
  const p = u && l ? Qj(u, n) : null;
  let f = -1, m = null;
  a && (m = new ResizeObserver((y) => {
    let [v] = y;
    v && v.target === u && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var w;
      (w = m) == null || w.observe(t);
    })), n();
  }), u && !s && m.observe(u), m.observe(t));
  let h, g = s ? qr(e) : null;
  s && x();
  function x() {
    const y = qr(e);
    g && (y.x !== g.x || y.y !== g.y || y.width !== g.width || y.height !== g.height) && n(), g = y, h = requestAnimationFrame(x);
  }
  return n(), () => {
    var y;
    d.forEach((v) => {
      o && v.removeEventListener("scroll", n), i && v.removeEventListener("resize", n);
    }), p == null || p(), (y = m) == null || y.disconnect(), m = null, s && cancelAnimationFrame(h);
  };
}
const Gj = Nj, qj = Pj, Jj = bj, Zj = jj, e3 = Fj, Mh = Sj, t3 = _j, n3 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Kj,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Ej(e, t, {
    ...o,
    platform: i
  });
};
var Sl = typeof document < "u" ? D.useLayoutEffect : D.useEffect;
function as(e, t) {
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
        if (!as(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !as(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function JD(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Lh(e, t) {
  const n = JD(e);
  return Math.round(t * n) / n;
}
function Ih(e) {
  const t = D.useRef(e);
  return Sl(() => {
    t.current = e;
  }), t;
}
function r3(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: l = !0,
    whileElementsMounted: s,
    open: u
  } = e, [d, p] = D.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, m] = D.useState(r);
  as(f, r) || m(r);
  const [h, g] = D.useState(null), [x, y] = D.useState(null), v = D.useCallback((_) => {
    _ !== S.current && (S.current = _, g(_));
  }, []), w = D.useCallback((_) => {
    _ !== b.current && (b.current = _, y(_));
  }, []), C = i || h, E = a || x, S = D.useRef(null), b = D.useRef(null), k = D.useRef(d), P = s != null, N = Ih(s), T = Ih(o), j = D.useCallback(() => {
    if (!S.current || !b.current)
      return;
    const _ = {
      placement: t,
      strategy: n,
      middleware: f
    };
    T.current && (_.platform = T.current), n3(S.current, b.current, _).then((F) => {
      const O = {
        ...F,
        isPositioned: !0
      };
      L.current && !as(k.current, O) && (k.current = O, to.flushSync(() => {
        p(O);
      }));
    });
  }, [f, t, n, T]);
  Sl(() => {
    u === !1 && k.current.isPositioned && (k.current.isPositioned = !1, p((_) => ({
      ..._,
      isPositioned: !1
    })));
  }, [u]);
  const L = D.useRef(!1);
  Sl(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Sl(() => {
    if (C && (S.current = C), E && (b.current = E), C && E) {
      if (N.current)
        return N.current(C, E, j);
      j();
    }
  }, [C, E, j, N, P]);
  const I = D.useMemo(() => ({
    reference: S,
    floating: b,
    setReference: v,
    setFloating: w
  }), [v, w]), z = D.useMemo(() => ({
    reference: C,
    floating: E
  }), [C, E]), H = D.useMemo(() => {
    const _ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!z.floating)
      return _;
    const F = Lh(z.floating, d.x), O = Lh(z.floating, d.y);
    return l ? {
      ..._,
      transform: "translate(" + F + "px, " + O + "px)",
      ...JD(z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: O
    };
  }, [n, l, z.floating, d.x, d.y]);
  return D.useMemo(() => ({
    ...d,
    update: j,
    refs: I,
    elements: z,
    floatingStyles: H
  }), [d, j, I, z, H]);
}
const o3 = (e) => {
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
      return r && t(r) ? r.current != null ? Mh({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Mh({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, i3 = (e, t) => ({
  ...Gj(e),
  options: [e, t]
}), a3 = (e, t) => ({
  ...qj(e),
  options: [e, t]
}), l3 = (e, t) => ({
  ...t3(e),
  options: [e, t]
}), s3 = (e, t) => ({
  ...Jj(e),
  options: [e, t]
}), u3 = (e, t) => ({
  ...Zj(e),
  options: [e, t]
}), c3 = (e, t) => ({
  ...e3(e),
  options: [e, t]
}), d3 = (e, t) => ({
  ...o3(e),
  options: [e, t]
});
var f3 = "Arrow", ZD = D.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ c.jsx(
    ee.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ c.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ZD.displayName = f3;
var p3 = ZD, cp = "Popper", [ew, Vs] = wr(cp), [m3, tw] = ew(cp), nw = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = D.useState(null);
  return /* @__PURE__ */ c.jsx(m3, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
nw.displayName = cp;
var rw = "PopperAnchor", ow = D.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = tw(rw, n), a = D.useRef(null), l = le(t, a);
    return D.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || a.current);
    }), r ? null : /* @__PURE__ */ c.jsx(ee.div, { ...o, ref: l });
  }
);
ow.displayName = rw;
var dp = "PopperContent", [h3, v3] = ew(dp), iw = D.forwardRef(
  (e, t) => {
    var W, ne, ke, R, oe, re;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: l = 0,
      avoidCollisions: s = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: p = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: h,
      ...g
    } = e, x = tw(dp, n), [y, v] = D.useState(null), w = le(t, ($e) => v($e)), [C, E] = D.useState(null), S = Xf(C), b = (S == null ? void 0 : S.width) ?? 0, k = (S == null ? void 0 : S.height) ?? 0, P = r + (i !== "center" ? "-" + i : ""), N = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, T = Array.isArray(u) ? u : [u], j = T.length > 0, L = {
      padding: N,
      boundary: T.filter(y3),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: j
    }, { refs: I, floatingStyles: z, placement: H, isPositioned: _, middlewareData: F } = r3({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: P,
      whileElementsMounted: (...$e) => Xj(...$e, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        i3({ mainAxis: o + k, alignmentAxis: a }),
        s && a3({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? l3() : void 0,
          ...L
        }),
        s && s3({ ...L }),
        u3({
          ...L,
          apply: ({ elements: $e, rects: it, availableWidth: vt, availableHeight: Xt }) => {
            const { width: dn, height: fn } = it.reference, Bn = $e.floating.style;
            Bn.setProperty("--radix-popper-available-width", `${vt}px`), Bn.setProperty("--radix-popper-available-height", `${Xt}px`), Bn.setProperty("--radix-popper-anchor-width", `${dn}px`), Bn.setProperty("--radix-popper-anchor-height", `${fn}px`);
          }
        }),
        C && d3({ element: C, padding: l }),
        D3({ arrowWidth: b, arrowHeight: k }),
        f && c3({ strategy: "referenceHidden", ...L })
      ]
    }), [O, B] = sw(H), V = Ge(h);
    Je(() => {
      _ && (V == null || V());
    }, [_, V]);
    const te = (W = F.arrow) == null ? void 0 : W.x, Ye = (ne = F.arrow) == null ? void 0 : ne.y, me = ((ke = F.arrow) == null ? void 0 : ke.centerOffset) !== 0, [Me, he] = D.useState();
    return Je(() => {
      y && he(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: _ ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Me,
          "--radix-popper-transform-origin": [
            (R = F.transformOrigin) == null ? void 0 : R.x,
            (oe = F.transformOrigin) == null ? void 0 : oe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((re = F.hide) == null ? void 0 : re.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ c.jsx(
          h3,
          {
            scope: n,
            placedSide: O,
            onArrowChange: E,
            arrowX: te,
            arrowY: Ye,
            shouldHideArrow: me,
            children: /* @__PURE__ */ c.jsx(
              ee.div,
              {
                "data-side": O,
                "data-align": B,
                ...g,
                ref: w,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: _ ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
iw.displayName = dp;
var aw = "PopperArrow", g3 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, lw = D.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = v3(aw, r), a = g3[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ c.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ c.jsx(
          p3,
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
lw.displayName = aw;
function y3(e) {
  return e !== null;
}
var D3 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, y, v;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, l = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [u, d] = sw(n), p = { start: "0%", center: "50%", end: "100%" }[d], f = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + l / 2, m = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + s / 2;
    let h = "", g = "";
    return u === "bottom" ? (h = a ? p : `${f}px`, g = `${-s}px`) : u === "top" ? (h = a ? p : `${f}px`, g = `${r.floating.height + s}px`) : u === "right" ? (h = `${-s}px`, g = a ? p : `${m}px`) : u === "left" && (h = `${r.floating.width + s}px`, g = a ? p : `${m}px`), { data: { x: h, y: g } };
  }
});
function sw(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var uw = nw, fp = ow, cw = iw, dw = lw, pp = "Popover", [fw, L4] = wr(pp, [
  Vs
]), Fa = Vs(), [w3, Er] = fw(pp), pw = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !1
  } = e, l = Fa(t), s = D.useRef(null), [u, d] = D.useState(!1), [p = !1, f] = Yo({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ c.jsx(uw, { ...l, children: /* @__PURE__ */ c.jsx(
    w3,
    {
      scope: t,
      contentId: $r(),
      triggerRef: s,
      open: p,
      onOpenChange: f,
      onOpenToggle: D.useCallback(() => f((m) => !m), [f]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: D.useCallback(() => d(!0), []),
      onCustomAnchorRemove: D.useCallback(() => d(!1), []),
      modal: a,
      children: n
    }
  ) });
};
pw.displayName = pp;
var mw = "PopoverAnchor", x3 = D.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Er(mw, n), i = Fa(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: l } = o;
    return D.useEffect(() => (a(), () => l()), [a, l]), /* @__PURE__ */ c.jsx(fp, { ...i, ...r, ref: t });
  }
);
x3.displayName = mw;
var hw = "PopoverTrigger", vw = D.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Er(hw, n), i = Fa(n), a = le(t, o.triggerRef), l = /* @__PURE__ */ c.jsx(
      ee.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": xw(o.open),
        ...r,
        ref: a,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? l : /* @__PURE__ */ c.jsx(fp, { asChild: !0, ...i, children: l });
  }
);
vw.displayName = hw;
var mp = "PopoverPortal", [C3, E3] = fw(mp, {
  forceMount: void 0
}), gw = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = Er(mp, t);
  return /* @__PURE__ */ c.jsx(C3, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Kt, { present: n || i.open, children: /* @__PURE__ */ c.jsx(Fs, { asChild: !0, container: o, children: r }) }) });
};
gw.displayName = mp;
var qo = "PopoverContent", yw = D.forwardRef(
  (e, t) => {
    const n = E3(qo, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Er(qo, e.__scopePopover);
    return /* @__PURE__ */ c.jsx(Kt, { present: r || i.open, children: i.modal ? /* @__PURE__ */ c.jsx(S3, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(b3, { ...o, ref: t }) });
  }
);
yw.displayName = qo;
var S3 = D.forwardRef(
  (e, t) => {
    const n = Er(qo, e.__scopePopover), r = D.useRef(null), o = le(t, r), i = D.useRef(!1);
    return D.useEffect(() => {
      const a = r.current;
      if (a) return Df(a);
    }, []), /* @__PURE__ */ c.jsx(Ns, { as: fr, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      Dw,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: J(e.onCloseAutoFocus, (a) => {
          var l;
          a.preventDefault(), i.current || (l = n.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: J(
          e.onPointerDownOutside,
          (a) => {
            const l = a.detail.originalEvent, s = l.button === 0 && l.ctrlKey === !0, u = l.button === 2 || s;
            i.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: J(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), b3 = D.forwardRef(
  (e, t) => {
    const n = Er(qo, e.__scopePopover), r = D.useRef(!1), o = D.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Dw,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var a, l;
          (a = e.onCloseAutoFocus) == null || a.call(e, i), i.defaultPrevented || (r.current || (l = n.triggerRef.current) == null || l.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var s, u;
          (s = e.onInteractOutside) == null || s.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = i.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), Dw = D.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: a,
      onEscapeKeyDown: l,
      onPointerDownOutside: s,
      onFocusOutside: u,
      onInteractOutside: d,
      ...p
    } = e, f = Er(qo, n), m = Fa(n);
    return yf(), /* @__PURE__ */ c.jsx(
      bs,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ c.jsx(
          Ss,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: d,
            onEscapeKeyDown: l,
            onPointerDownOutside: s,
            onFocusOutside: u,
            onDismiss: () => f.onOpenChange(!1),
            children: /* @__PURE__ */ c.jsx(
              cw,
              {
                "data-state": xw(f.open),
                role: "dialog",
                id: f.contentId,
                ...m,
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
), ww = "PopoverClose", F3 = D.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Er(ww, n);
    return /* @__PURE__ */ c.jsx(
      ee.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: J(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
F3.displayName = ww;
var k3 = "PopoverArrow", N3 = D.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Fa(n);
    return /* @__PURE__ */ c.jsx(dw, { ...o, ...r, ref: t });
  }
);
N3.displayName = k3;
function xw(e) {
  return e ? "open" : "closed";
}
var P3 = pw, _3 = vw, j3 = gw, Cw = yw;
const A3 = P3, O3 = _3, Ew = D.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(j3, { children: /* @__PURE__ */ c.jsx(
  Cw,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: G(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Ew.displayName = Cw.displayName;
function Bh({ date: e, setDate: t }) {
  return /* @__PURE__ */ c.jsxs(A3, { children: [
    /* @__PURE__ */ c.jsx(O3, { asChild: !0, children: /* @__PURE__ */ c.jsxs(
      De,
      {
        variant: "outline",
        className: G(
          "w-full justify-start text-left font-normal",
          !e && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ c.jsx(s0, { className: "mr-2 h-4 w-4" }),
          e ? _n(e, "PPP") : /* @__PURE__ */ c.jsx("span", { children: "Pick a date" })
        ]
      }
    ) }),
    /* @__PURE__ */ c.jsx(Ew, { className: "w-auto p-0", align: "start", onOpenAutoFocus: (n) => n.preventDefault(), children: /* @__PURE__ */ c.jsx(
      HD,
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
function T3(e) {
  const t = e + "CollectionProvider", [n, r] = wr(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (m) => {
    const { scope: h, children: g } = m, x = M.useRef(null), y = M.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: h, itemMap: y, collectionRef: x, children: g });
  };
  a.displayName = t;
  const l = e + "CollectionSlot", s = M.forwardRef(
    (m, h) => {
      const { scope: g, children: x } = m, y = i(l, g), v = le(h, y.collectionRef);
      return /* @__PURE__ */ c.jsx(fr, { ref: v, children: x });
    }
  );
  s.displayName = l;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", p = M.forwardRef(
    (m, h) => {
      const { scope: g, children: x, ...y } = m, v = M.useRef(null), w = le(h, v), C = i(u, g);
      return M.useEffect(() => (C.itemMap.set(v, { ref: v, ...y }), () => void C.itemMap.delete(v))), /* @__PURE__ */ c.jsx(fr, { [d]: "", ref: w, children: x });
    }
  );
  p.displayName = u;
  function f(m) {
    const h = i(e + "CollectionConsumer", m);
    return M.useCallback(() => {
      const x = h.collectionRef.current;
      if (!x) return [];
      const y = Array.from(x.querySelectorAll(`[${d}]`));
      return Array.from(h.itemMap.values()).sort(
        (C, E) => y.indexOf(C.ref.current) - y.indexOf(E.ref.current)
      );
    }, [h.collectionRef, h.itemMap]);
  }
  return [
    { Provider: a, Slot: s, ItemSlot: p },
    f,
    r
  ];
}
var R3 = "VisuallyHidden", Sw = D.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    ee.span,
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
Sw.displayName = R3;
var M3 = [" ", "Enter", "ArrowUp", "ArrowDown"], L3 = [" ", "Enter"], ka = "Select", [Us, Ys, I3] = T3(ka), [ii, I4] = wr(ka, [
  I3,
  Vs
]), Ks = Vs(), [B3, Sr] = ii(ka), [$3, W3] = ii(ka), bw = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: a,
    defaultValue: l,
    onValueChange: s,
    dir: u,
    name: d,
    autoComplete: p,
    disabled: f,
    required: m
  } = e, h = Ks(t), [g, x] = D.useState(null), [y, v] = D.useState(null), [w, C] = D.useState(!1), E = py(u), [S = !1, b] = Yo({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [k, P] = Yo({
    prop: a,
    defaultProp: l,
    onChange: s
  }), N = D.useRef(null), T = g ? !!g.closest("form") : !0, [j, L] = D.useState(/* @__PURE__ */ new Set()), I = Array.from(j).map((z) => z.props.value).join(";");
  return /* @__PURE__ */ c.jsx(uw, { ...h, children: /* @__PURE__ */ c.jsxs(
    B3,
    {
      required: m,
      scope: t,
      trigger: g,
      onTriggerChange: x,
      valueNode: y,
      onValueNodeChange: v,
      valueNodeHasChildren: w,
      onValueNodeHasChildrenChange: C,
      contentId: $r(),
      value: k,
      onValueChange: P,
      open: S,
      onOpenChange: b,
      dir: E,
      triggerPointerDownPosRef: N,
      disabled: f,
      children: [
        /* @__PURE__ */ c.jsx(Us.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          $3,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: D.useCallback((z) => {
              L((H) => new Set(H).add(z));
            }, []),
            onNativeOptionRemove: D.useCallback((z) => {
              L((H) => {
                const _ = new Set(H);
                return _.delete(z), _;
              });
            }, []),
            children: n
          }
        ) }),
        T ? /* @__PURE__ */ c.jsxs(
          Gw,
          {
            "aria-hidden": !0,
            required: m,
            tabIndex: -1,
            name: d,
            autoComplete: p,
            value: k,
            onChange: (z) => P(z.target.value),
            disabled: f,
            children: [
              k === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(j)
            ]
          },
          I
        ) : null
      ]
    }
  ) });
};
bw.displayName = ka;
var Fw = "SelectTrigger", kw = D.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Ks(n), a = Sr(Fw, n), l = a.disabled || r, s = le(t, a.onTriggerChange), u = Ys(n), [d, p, f] = qw((h) => {
      const g = u().filter((v) => !v.disabled), x = g.find((v) => v.value === a.value), y = Jw(g, h, x);
      y !== void 0 && a.onValueChange(y.value);
    }), m = () => {
      l || (a.onOpenChange(!0), f());
    };
    return /* @__PURE__ */ c.jsx(fp, { asChild: !0, ...i, children: /* @__PURE__ */ c.jsx(
      ee.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": Xw(a.value) ? "" : void 0,
        ...o,
        ref: s,
        onClick: J(o.onClick, (h) => {
          h.currentTarget.focus();
        }),
        onPointerDown: J(o.onPointerDown, (h) => {
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (m(), a.triggerPointerDownPosRef.current = {
            x: Math.round(h.pageX),
            y: Math.round(h.pageY)
          }, h.preventDefault());
        }),
        onKeyDown: J(o.onKeyDown, (h) => {
          const g = d.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(g && h.key === " ") && M3.includes(h.key) && (m(), h.preventDefault());
        })
      }
    ) });
  }
);
kw.displayName = Fw;
var Nw = "SelectValue", Pw = D.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: a = "", ...l } = e, s = Sr(Nw, n), { onValueNodeHasChildrenChange: u } = s, d = i !== void 0, p = le(t, s.onValueNodeChange);
    return Je(() => {
      u(d);
    }, [u, d]), /* @__PURE__ */ c.jsx(
      ee.span,
      {
        ...l,
        ref: p,
        style: { pointerEvents: "none" },
        children: Xw(s.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: a }) : i
      }
    );
  }
);
Pw.displayName = Nw;
var z3 = "SelectIcon", _w = D.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(ee.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
_w.displayName = z3;
var H3 = "SelectPortal", jw = (e) => /* @__PURE__ */ c.jsx(Fs, { asChild: !0, ...e });
jw.displayName = H3;
var Jr = "SelectContent", Aw = D.forwardRef(
  (e, t) => {
    const n = Sr(Jr, e.__scopeSelect), [r, o] = D.useState();
    if (Je(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? to.createPortal(
        /* @__PURE__ */ c.jsx(Ow, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(Us.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(Tw, { ...e, ref: t });
  }
);
Aw.displayName = Jr;
var gn = 10, [Ow, br] = ii(Jr), V3 = "SelectContentImpl", Tw = D.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: l,
      sideOffset: s,
      align: u,
      alignOffset: d,
      arrowPadding: p,
      collisionBoundary: f,
      collisionPadding: m,
      sticky: h,
      hideWhenDetached: g,
      avoidCollisions: x,
      //
      ...y
    } = e, v = Sr(Jr, n), [w, C] = D.useState(null), [E, S] = D.useState(null), b = le(t, (W) => C(W)), [k, P] = D.useState(null), [N, T] = D.useState(
      null
    ), j = Ys(n), [L, I] = D.useState(!1), z = D.useRef(!1);
    D.useEffect(() => {
      if (w) return Df(w);
    }, [w]), yf();
    const H = D.useCallback(
      (W) => {
        const [ne, ...ke] = j().map((re) => re.ref.current), [R] = ke.slice(-1), oe = document.activeElement;
        for (const re of W)
          if (re === oe || (re == null || re.scrollIntoView({ block: "nearest" }), re === ne && E && (E.scrollTop = 0), re === R && E && (E.scrollTop = E.scrollHeight), re == null || re.focus(), document.activeElement !== oe)) return;
      },
      [j, E]
    ), _ = D.useCallback(
      () => H([k, w]),
      [H, k, w]
    );
    D.useEffect(() => {
      L && _();
    }, [L, _]);
    const { onOpenChange: F, triggerPointerDownPosRef: O } = v;
    D.useEffect(() => {
      if (w) {
        let W = { x: 0, y: 0 };
        const ne = (R) => {
          var oe, re;
          W = {
            x: Math.abs(Math.round(R.pageX) - (((oe = O.current) == null ? void 0 : oe.x) ?? 0)),
            y: Math.abs(Math.round(R.pageY) - (((re = O.current) == null ? void 0 : re.y) ?? 0))
          };
        }, ke = (R) => {
          W.x <= 10 && W.y <= 10 ? R.preventDefault() : w.contains(R.target) || F(!1), document.removeEventListener("pointermove", ne), O.current = null;
        };
        return O.current !== null && (document.addEventListener("pointermove", ne), document.addEventListener("pointerup", ke, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ne), document.removeEventListener("pointerup", ke, { capture: !0 });
        };
      }
    }, [w, F, O]), D.useEffect(() => {
      const W = () => F(!1);
      return window.addEventListener("blur", W), window.addEventListener("resize", W), () => {
        window.removeEventListener("blur", W), window.removeEventListener("resize", W);
      };
    }, [F]);
    const [B, V] = qw((W) => {
      const ne = j().filter((oe) => !oe.disabled), ke = ne.find((oe) => oe.ref.current === document.activeElement), R = Jw(ne, W, ke);
      R && setTimeout(() => R.ref.current.focus());
    }), te = D.useCallback(
      (W, ne, ke) => {
        const R = !z.current && !ke;
        (v.value !== void 0 && v.value === ne || R) && (P(W), R && (z.current = !0));
      },
      [v.value]
    ), Ye = D.useCallback(() => w == null ? void 0 : w.focus(), [w]), me = D.useCallback(
      (W, ne, ke) => {
        const R = !z.current && !ke;
        (v.value !== void 0 && v.value === ne || R) && T(W);
      },
      [v.value]
    ), Me = r === "popper" ? fd : Rw, he = Me === fd ? {
      side: l,
      sideOffset: s,
      align: u,
      alignOffset: d,
      arrowPadding: p,
      collisionBoundary: f,
      collisionPadding: m,
      sticky: h,
      hideWhenDetached: g,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ c.jsx(
      Ow,
      {
        scope: n,
        content: w,
        viewport: E,
        onViewportChange: S,
        itemRefCallback: te,
        selectedItem: k,
        onItemLeave: Ye,
        itemTextRefCallback: me,
        focusSelectedItem: _,
        selectedItemText: N,
        position: r,
        isPositioned: L,
        searchRef: B,
        children: /* @__PURE__ */ c.jsx(Ns, { as: fr, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          bs,
          {
            asChild: !0,
            trapped: v.open,
            onMountAutoFocus: (W) => {
              W.preventDefault();
            },
            onUnmountAutoFocus: J(o, (W) => {
              var ne;
              (ne = v.trigger) == null || ne.focus({ preventScroll: !0 }), W.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              Ss,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (W) => W.preventDefault(),
                onDismiss: () => v.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  Me,
                  {
                    role: "listbox",
                    id: v.contentId,
                    "data-state": v.open ? "open" : "closed",
                    dir: v.dir,
                    onContextMenu: (W) => W.preventDefault(),
                    ...y,
                    ...he,
                    onPlaced: () => I(!0),
                    ref: b,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: J(y.onKeyDown, (W) => {
                      const ne = W.ctrlKey || W.altKey || W.metaKey;
                      if (W.key === "Tab" && W.preventDefault(), !ne && W.key.length === 1 && V(W.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(W.key)) {
                        let R = j().filter((oe) => !oe.disabled).map((oe) => oe.ref.current);
                        if (["ArrowUp", "End"].includes(W.key) && (R = R.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(W.key)) {
                          const oe = W.target, re = R.indexOf(oe);
                          R = R.slice(re + 1);
                        }
                        setTimeout(() => H(R)), W.preventDefault();
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
Tw.displayName = V3;
var U3 = "SelectItemAlignedPosition", Rw = D.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = Sr(Jr, n), a = br(Jr, n), [l, s] = D.useState(null), [u, d] = D.useState(null), p = le(t, (b) => d(b)), f = Ys(n), m = D.useRef(!1), h = D.useRef(!0), { viewport: g, selectedItem: x, selectedItemText: y, focusSelectedItem: v } = a, w = D.useCallback(() => {
    if (i.trigger && i.valueNode && l && u && g && x && y) {
      const b = i.trigger.getBoundingClientRect(), k = u.getBoundingClientRect(), P = i.valueNode.getBoundingClientRect(), N = y.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const oe = N.left - k.left, re = P.left - oe, $e = b.left - re, it = b.width + $e, vt = Math.max(it, k.width), Xt = window.innerWidth - gn, dn = Zc(re, [gn, Xt - vt]);
        l.style.minWidth = it + "px", l.style.left = dn + "px";
      } else {
        const oe = k.right - N.right, re = window.innerWidth - P.right - oe, $e = window.innerWidth - b.right - re, it = b.width + $e, vt = Math.max(it, k.width), Xt = window.innerWidth - gn, dn = Zc(re, [gn, Xt - vt]);
        l.style.minWidth = it + "px", l.style.right = dn + "px";
      }
      const T = f(), j = window.innerHeight - gn * 2, L = g.scrollHeight, I = window.getComputedStyle(u), z = parseInt(I.borderTopWidth, 10), H = parseInt(I.paddingTop, 10), _ = parseInt(I.borderBottomWidth, 10), F = parseInt(I.paddingBottom, 10), O = z + H + L + F + _, B = Math.min(x.offsetHeight * 5, O), V = window.getComputedStyle(g), te = parseInt(V.paddingTop, 10), Ye = parseInt(V.paddingBottom, 10), me = b.top + b.height / 2 - gn, Me = j - me, he = x.offsetHeight / 2, W = x.offsetTop + he, ne = z + H + W, ke = O - ne;
      if (ne <= me) {
        const oe = x === T[T.length - 1].ref.current;
        l.style.bottom = "0px";
        const re = u.clientHeight - g.offsetTop - g.offsetHeight, $e = Math.max(
          Me,
          he + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (oe ? Ye : 0) + re + _
        ), it = ne + $e;
        l.style.height = it + "px";
      } else {
        const oe = x === T[0].ref.current;
        l.style.top = "0px";
        const $e = Math.max(
          me,
          z + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (oe ? te : 0) + he
        ) + ke;
        l.style.height = $e + "px", g.scrollTop = ne - me + g.offsetTop;
      }
      l.style.margin = `${gn}px 0`, l.style.minHeight = B + "px", l.style.maxHeight = j + "px", r == null || r(), requestAnimationFrame(() => m.current = !0);
    }
  }, [
    f,
    i.trigger,
    i.valueNode,
    l,
    u,
    g,
    x,
    y,
    i.dir,
    r
  ]);
  Je(() => w(), [w]);
  const [C, E] = D.useState();
  Je(() => {
    u && E(window.getComputedStyle(u).zIndex);
  }, [u]);
  const S = D.useCallback(
    (b) => {
      b && h.current === !0 && (w(), v == null || v(), h.current = !1);
    },
    [w, v]
  );
  return /* @__PURE__ */ c.jsx(
    K3,
    {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: S,
      children: /* @__PURE__ */ c.jsx(
        "div",
        {
          ref: s,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ c.jsx(
            ee.div,
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
Rw.displayName = U3;
var Y3 = "SelectPopperPosition", fd = D.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = gn,
    ...i
  } = e, a = Ks(n);
  return /* @__PURE__ */ c.jsx(
    cw,
    {
      ...a,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
fd.displayName = Y3;
var [K3, hp] = ii(Jr, {}), pd = "SelectViewport", Mw = D.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = br(pd, n), a = hp(pd, n), l = le(t, i.onViewportChange), s = D.useRef(0);
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ c.jsx(Us.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
        ee.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: l,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...o.style
          },
          onScroll: J(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: f } = a;
            if (f != null && f.current && p) {
              const m = Math.abs(s.current - d.scrollTop);
              if (m > 0) {
                const h = window.innerHeight - gn * 2, g = parseFloat(p.style.minHeight), x = parseFloat(p.style.height), y = Math.max(g, x);
                if (y < h) {
                  const v = y + m, w = Math.min(h, v), C = v - w;
                  p.style.height = w + "px", p.style.bottom === "0px" && (d.scrollTop = C > 0 ? C : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            s.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Mw.displayName = pd;
var Lw = "SelectGroup", [Q3, X3] = ii(Lw), G3 = D.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = $r();
    return /* @__PURE__ */ c.jsx(Q3, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(ee.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
G3.displayName = Lw;
var Iw = "SelectLabel", Bw = D.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = X3(Iw, n);
    return /* @__PURE__ */ c.jsx(ee.div, { id: o.id, ...r, ref: t });
  }
);
Bw.displayName = Iw;
var ls = "SelectItem", [q3, $w] = ii(ls), Ww = D.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...a
    } = e, l = Sr(ls, n), s = br(ls, n), u = l.value === r, [d, p] = D.useState(i ?? ""), [f, m] = D.useState(!1), h = le(
      t,
      (y) => {
        var v;
        return (v = s.itemRefCallback) == null ? void 0 : v.call(s, y, r, o);
      }
    ), g = $r(), x = () => {
      o || (l.onValueChange(r), l.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      q3,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: u,
        onItemTextChange: D.useCallback((y) => {
          p((v) => v || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ c.jsx(
          Us.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ c.jsx(
              ee.div,
              {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": u && f,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: h,
                onFocus: J(a.onFocus, () => m(!0)),
                onBlur: J(a.onBlur, () => m(!1)),
                onPointerUp: J(a.onPointerUp, x),
                onPointerMove: J(a.onPointerMove, (y) => {
                  var v;
                  o ? (v = s.onItemLeave) == null || v.call(s) : y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: J(a.onPointerLeave, (y) => {
                  var v;
                  y.currentTarget === document.activeElement && ((v = s.onItemLeave) == null || v.call(s));
                }),
                onKeyDown: J(a.onKeyDown, (y) => {
                  var w;
                  ((w = s.searchRef) == null ? void 0 : w.current) !== "" && y.key === " " || (L3.includes(y.key) && x(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Ww.displayName = ls;
var _i = "SelectItemText", zw = D.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, a = Sr(_i, n), l = br(_i, n), s = $w(_i, n), u = W3(_i, n), [d, p] = D.useState(null), f = le(
      t,
      (y) => p(y),
      s.onItemTextChange,
      (y) => {
        var v;
        return (v = l.itemTextRefCallback) == null ? void 0 : v.call(l, y, s.value, s.disabled);
      }
    ), m = d == null ? void 0 : d.textContent, h = D.useMemo(
      () => /* @__PURE__ */ c.jsx("option", { value: s.value, disabled: s.disabled, children: m }, s.value),
      [s.disabled, s.value, m]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: x } = u;
    return Je(() => (g(h), () => x(h)), [g, x, h]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(ee.span, { id: s.textId, ...i, ref: f }),
      s.isSelected && a.valueNode && !a.valueNodeHasChildren ? to.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
zw.displayName = _i;
var Hw = "SelectItemIndicator", Vw = D.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return $w(Hw, n).isSelected ? /* @__PURE__ */ c.jsx(ee.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Vw.displayName = Hw;
var md = "SelectScrollUpButton", Uw = D.forwardRef((e, t) => {
  const n = br(md, e.__scopeSelect), r = hp(md, e.__scopeSelect), [o, i] = D.useState(!1), a = le(t, r.onScrollButtonChange);
  return Je(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const u = s.scrollTop > 0;
        i(u);
      };
      const s = n.viewport;
      return l(), s.addEventListener("scroll", l), () => s.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    Kw,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: s } = n;
        l && s && (l.scrollTop = l.scrollTop - s.offsetHeight);
      }
    }
  ) : null;
});
Uw.displayName = md;
var hd = "SelectScrollDownButton", Yw = D.forwardRef((e, t) => {
  const n = br(hd, e.__scopeSelect), r = hp(hd, e.__scopeSelect), [o, i] = D.useState(!1), a = le(t, r.onScrollButtonChange);
  return Je(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const u = s.scrollHeight - s.clientHeight, d = Math.ceil(s.scrollTop) < u;
        i(d);
      };
      const s = n.viewport;
      return l(), s.addEventListener("scroll", l), () => s.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    Kw,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: s } = n;
        l && s && (l.scrollTop = l.scrollTop + s.offsetHeight);
      }
    }
  ) : null;
});
Yw.displayName = hd;
var Kw = D.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = br("SelectScrollButton", n), a = D.useRef(null), l = Ys(n), s = D.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return D.useEffect(() => () => s(), [s]), Je(() => {
    var d;
    const u = l().find((p) => p.ref.current === document.activeElement);
    (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [l]), /* @__PURE__ */ c.jsx(
    ee.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: J(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: J(o.onPointerMove, () => {
        var u;
        (u = i.onItemLeave) == null || u.call(i), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: J(o.onPointerLeave, () => {
        s();
      })
    }
  );
}), J3 = "SelectSeparator", Qw = D.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(ee.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Qw.displayName = J3;
var vd = "SelectArrow", Z3 = D.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ks(n), i = Sr(vd, n), a = br(vd, n);
    return i.open && a.position === "popper" ? /* @__PURE__ */ c.jsx(dw, { ...o, ...r, ref: t }) : null;
  }
);
Z3.displayName = vd;
function Xw(e) {
  return e === "" || e === void 0;
}
var Gw = D.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = D.useRef(null), i = le(t, o), a = Qf(n);
    return D.useEffect(() => {
      const l = o.current, s = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        s,
        "value"
      ).set;
      if (a !== n && d) {
        const p = new Event("change", { bubbles: !0 });
        d.call(l, n), l.dispatchEvent(p);
      }
    }, [a, n]), /* @__PURE__ */ c.jsx(Sw, { asChild: !0, children: /* @__PURE__ */ c.jsx("select", { ...r, ref: i, defaultValue: n }) });
  }
);
Gw.displayName = "BubbleSelect";
function qw(e) {
  const t = Ge(e), n = D.useRef(""), r = D.useRef(0), o = D.useCallback(
    (a) => {
      const l = n.current + a;
      t(l), function s(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => s(""), 1e3));
      }(l);
    },
    [t]
  ), i = D.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return D.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function Jw(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = e4(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const s = a.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function e4(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var t4 = bw, Zw = kw, n4 = Pw, r4 = _w, o4 = jw, e1 = Aw, i4 = Mw, t1 = Bw, n1 = Ww, a4 = zw, l4 = Vw, r1 = Uw, o1 = Yw, i1 = Qw;
const s4 = t4, u4 = n4, a1 = D.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  Zw,
  {
    ref: r,
    className: G(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground   focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ c.jsx(r4, { asChild: !0, children: /* @__PURE__ */ c.jsx(AD, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
a1.displayName = Zw.displayName;
const l1 = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  r1,
  {
    ref: n,
    className: G("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ c.jsx(MP, { className: "h-4 w-4" })
  }
));
l1.displayName = r1.displayName;
const s1 = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  o1,
  {
    ref: n,
    className: G("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ c.jsx(AD, { className: "h-4 w-4" })
  }
));
s1.displayName = o1.displayName;
const u1 = D.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ c.jsx(o4, { children: /* @__PURE__ */ c.jsxs(
  e1,
  {
    ref: o,
    className: G(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ c.jsx(l1, {}),
      /* @__PURE__ */ c.jsx(
        i4,
        {
          className: G("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
          children: t
        }
      ),
      /* @__PURE__ */ c.jsx(s1, {})
    ]
  }
) }));
u1.displayName = e1.displayName;
const c4 = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  t1,
  {
    ref: n,
    className: G("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
c4.displayName = t1.displayName;
const ji = D.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  n1,
  {
    ref: r,
    className: G(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ c.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ c.jsx(l4, { children: /* @__PURE__ */ c.jsx(jD, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ c.jsx(a4, { children: t })
    ]
  }
));
ji.displayName = n1.displayName;
const d4 = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  i1,
  {
    ref: n,
    className: G("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
d4.displayName = i1.displayName;
const f4 = ({
  guests: e,
  setGuests: t,
  guestsError: n,
  setGuestsError: r,
  date: o,
  setDate: i,
  dateError: a,
  endDate: l,
  setEndDate: s,
  endDateError: u,
  time: d,
  setTime: p,
  timeError: f,
  endTime: m,
  setEndTime: h,
  isMultiDay: g,
  setMultiDay: x,
  tableSetup: y,
  setTableSetup: v,
  venue: w,
  setVenue: C,
  eventPackages: E,
  selectedEventPackages: S,
  setSelectedEventPackages: b,
  venues: k
}) => {
  const P = (N, T) => {
    const j = [...S];
    j[N] = T, b(j);
  };
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "space-y-4 mt-8 grid grid-rows-2 justify-center lg:max-w-[680px] mx-auto", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "grid md:grid-cols-2 space-y-8 md:space-y-0 md:space-x-4 ", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ c.jsx(Ar, { htmlFor: "guests", children: "Number of guests" }),
          /* @__PURE__ */ c.jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ c.jsx(
              It,
              {
                className: `pr-8 ${n && "border-red-500"}`,
                type: "number",
                id: "guests",
                placeholder: "12",
                max: "22",
                value: e,
                onChange: (N) => {
                  t(N.target.value), r(null);
                }
              }
            ),
            /* @__PURE__ */ c.jsx(W2, { className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" })
          ] }),
          n && /* @__PURE__ */ c.jsx("p", { className: "text-red-500 text-sm mt-1", children: n })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ c.jsx(Ar, { htmlFor: "date", children: "When is it happening" }),
          /* @__PURE__ */ c.jsx("div", { className: "relative mt-2", children: /* @__PURE__ */ c.jsx(
            Bh,
            {
              date: o,
              setDate: (N) => {
                i(N), s(new Date(N).setDate(new Date(N).getDate() + 1));
              }
            }
          ) }),
          a && /* @__PURE__ */ c.jsx("p", { className: "text-red-500 text-sm mt-1", children: a })
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4 items-end", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex-1 lg:max-w-[330px]", children: [
          /* @__PURE__ */ c.jsx(Ar, { htmlFor: "time", children: "Time of arrival" }),
          /* @__PURE__ */ c.jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ c.jsx(
              It,
              {
                type: "time",
                id: "time",
                placeholder: "09:00 am",
                value: d,
                className: `w-full ${f && "border-red-500"}`,
                onChange: (N) => {
                  p(N.target.value);
                  let T = (/* @__PURE__ */ new Date()).setHours(parseInt(N.target.value.split(":")[0]) + 8);
                  T = new Date(T).setMinutes(N.target.value.split(":")[1]), h(new Date(T).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
                }
              }
            ),
            /* @__PURE__ */ c.jsx(Yc, { className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" })
          ] }),
          f && /* @__PURE__ */ c.jsx("p", { className: "text-red-500 text-sm mt-1", children: f })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ c.jsx(PD, { id: "multi-day", checked: g, onClick: (N) => {
            x(!g), o && !g ? (s((/* @__PURE__ */ new Date()).setDate(new Date(o).getDate() + 1)), d && h(new Date(o).setHours(new Date(o).getHours() + 8)).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })) : (s((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 2)), h("17:00"));
          } }),
          /* @__PURE__ */ c.jsx(Ar, { htmlFor: "multi-day", children: "Multi day event" })
        ] })
      ] }),
      g && /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsxs("div", { className: "grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ c.jsx(Ar, { htmlFor: "end-date", children: "End date" }),
          /* @__PURE__ */ c.jsx("div", { className: "relative mt-2", children: /* @__PURE__ */ c.jsx(
            Bh,
            {
              date: l,
              setDate: s
            }
          ) }),
          u && /* @__PURE__ */ c.jsx("p", { className: "text-red-500 text-sm mt-1", children: u })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "lg:max-w-[330px] w-full", children: [
          /* @__PURE__ */ c.jsx(Ar, { htmlFor: "end-time", children: "Time of Departure" }),
          /* @__PURE__ */ c.jsxs("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ c.jsx(It, { type: "time", id: "end-time", min: d ? d + ":00" : "10:00:00", placeholder: "17:00", value: m, onChange: (N) => h(N.target.value) }),
            /* @__PURE__ */ c.jsx(Yc, { className: "absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ c.jsxs("div", { className: "mt-12 space-y-8 flex flex-col items-center", children: [
        /* @__PURE__ */ c.jsx("h3", { className: "text-center text-lg font-bold", children: `Select Packages${g ? " for each day" : ""}` }),
        g && o && l ? Array.from({ length: new Date(l).getDate() - new Date(o).getDate() + 1 }, (N, T) => /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Day ",
            T + 1
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "flex space-x-4 mt-4", children: E.map((j) => /* @__PURE__ */ c.jsx(
            bh,
            {
              title: `${j.duration_hours} Hours`,
              description: j.description,
              onClick: () => P(T, j.id),
              id: j.id,
              isSelected: S[T] === j.id,
              noneSelected: !S[T],
              value: j.id
            },
            j.id
          )) })
        ] }, T)) : /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-4 mt-4", children: E.map((N) => /* @__PURE__ */ c.jsx(
          bh,
          {
            title: `${N.duration_hours} Hours`,
            description: N.description,
            onClick: () => P(0, N.id),
            id: N.id,
            isSelected: S.length > 0 && S[0] === N.id,
            noneSelected: S.length === 0,
            value: N.id
          },
          N.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "mt-12 space-y-8 flex flex-col items-center", children: [
      /* @__PURE__ */ c.jsxs("h3", { className: "text-lg font-bold text-center", children: [
        "Venue Preference ",
        /* @__PURE__ */ c.jsx("span", { className: "text-muted-foreground", children: "(optional)" })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "flex items-center space-x-2 mt-4", children: /* @__PURE__ */ c.jsxs(s4, { onValueChange: (N) => v(N), defaultValue: "Boardroom", children: [
        /* @__PURE__ */ c.jsx(a1, { className: "w-[180px]", children: /* @__PURE__ */ c.jsx(u4, { placeholder: "Boardroom Setup" }) }),
        /* @__PURE__ */ c.jsxs(u1, { children: [
          /* @__PURE__ */ c.jsx(ji, { value: "Boardroom", children: "Boardroom" }),
          /* @__PURE__ */ c.jsx(ji, { value: "U-Shape", children: "U-Shape" }),
          /* @__PURE__ */ c.jsx(ji, { value: "Classroom", children: "Classroom" }),
          /* @__PURE__ */ c.jsx(ji, { value: "Intimate", children: "Intimate - no tables" })
        ] })
      ] }) }),
      /* @__PURE__ */ c.jsx("div", { className: "grid md:grid-cols-2 gap-4 mt-4", children: k.map((N) => /* @__PURE__ */ c.jsx(
        _P,
        {
          venue_name: N.name,
          venue_description: N.description,
          image_url: N.images[0],
          capacity: N.capacity,
          area: N.area,
          isSelected: N.id === w,
          onClick: () => C(N.id)
        },
        N.id
      )) })
    ] })
  ] });
}, p4 = ({ title: e, description: t, image_url: n, isSelected: r, onClick: o }) => /* @__PURE__ */ c.jsx(
  Da,
  {
    className: G("relative bg-gray-50 border-2 shadow-sm border-transparent hover:border-primary cursor-pointer", r && "border-primary"),
    onClick: o,
    children: /* @__PURE__ */ c.jsxs(wa, { className: "p-6 flex flex-col items-left justify-between cursor-pointer h-full", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-left h-full", children: [
        /* @__PURE__ */ c.jsx(
          "img",
          {
            src: n,
            alt: e,
            loading: "lazy",
            className: "w-full aspect-ratio-1 rounded-md object-cover"
          }
        ),
        /* @__PURE__ */ c.jsx("h4", { className: "text-sm sm:text-md font-medium mt-4", children: e }),
        /* @__PURE__ */ c.jsx("p", { className: "text-xs sm:text-sm mt-2", children: t })
      ] }),
      /* @__PURE__ */ c.jsxs(De, { className: "mt-4 w-fit outline-none", onClick: o, children: [
        /* @__PURE__ */ c.jsx("span", { className: r && "hidden", children: "Choose" }),
        /* @__PURE__ */ c.jsx("div", { className: `${!r && "hidden"} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`, children: /* @__PURE__ */ c.jsx(Br, { className: "h-4 w-4 text-white " }) })
      ] })
    ] })
  }
), m4 = ({ guests: e, title: t, description: n, quantity: r = 0, image_url: o, isSelected: i, onClick: a, onQuantityChange: l }) => /* @__PURE__ */ c.jsx(
  Da,
  {
    className: G("relative bg-gray-50 border-2 shadow-sm border-transparent hover:border-primary cursor-pointer", i && "border-primary"),
    onClick: () => {
      i || a();
    },
    children: /* @__PURE__ */ c.jsxs(wa, { className: "p-6 flex flex-col items-left justify-between cursor-pointer h-full", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-left h-full", children: [
        /* @__PURE__ */ c.jsx(
          "img",
          {
            src: o,
            alt: t,
            loading: "lazy",
            className: "w-full aspect-ratio-1 rounded-md object-cover"
          }
        ),
        /* @__PURE__ */ c.jsx("h4", { className: "text-sm sm:text-md font-medium mt-4", children: t }),
        /* @__PURE__ */ c.jsx("p", { className: "text-xs sm:text-sm mt-2", children: n })
      ] }),
      i ? /* @__PURE__ */ c.jsxs("div", { className: "mt-4 w-fit flex items-center justify-center rounded-full border-primary border-2 p-1 space-x-3", children: [
        /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-center bg-primary h-6 w-6 rounded-full m-1", children: /* @__PURE__ */ c.jsx(Br, { className: "h-4 w-4 text-white" }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-primary font-medium", children: r }),
          /* @__PURE__ */ c.jsx(
            De,
            {
              variant: "outline",
              className: "!h-7 !w-7 p-1 group rounded-full flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-white text-lg",
              onClick: () => l(r - 1),
              disabled: !0,
              children: /* @__PURE__ */ c.jsx(z2, { className: "h-5 w-5 text-primary group-hover:text-white" })
            }
          ),
          /* @__PURE__ */ c.jsx(
            De,
            {
              variant: "outline",
              className: "!h-7 !w-7 p-1 group rounded-full flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-white text-lg",
              onClick: () => l(r + 1),
              disabled: !0,
              children: /* @__PURE__ */ c.jsx(H2, { className: "h-6 w-6 text-primary group-hover:text-white" })
            }
          )
        ] })
      ] }) : /* @__PURE__ */ c.jsx(De, { className: "mt-2 w-fit", children: "Add" })
    ] })
  }
), h4 = ({ facilities: e, catering: t, guests: n, facilitiesSelected: r, setFacilitiesSelected: o, cateringSelected: i, setCateringSelected: a, comments: l, setComments: s }) => {
  const u = (f) => {
    r.includes(f) ? o(r.filter((m) => m !== f)) : o([...r, f]);
  }, d = (f) => {
    const m = i.some((h) => h.id === f);
    a(m ? i.filter((h) => h.id !== f) : [...i, { id: f, quantity: n }]);
  }, p = (f, m) => {
    if (m <= 0) {
      a(i.filter((h) => h.id !== f));
      return;
    }
    a(i.map(
      (h) => h.id === f ? { ...h, quantity: m } : h
    ));
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col space-y-8 mt-8", children: [
    /* @__PURE__ */ c.jsx("h2", { className: "text-2xl font-bold text-center", children: "Make your event complete" }),
    /* @__PURE__ */ c.jsx("p", { className: "text-center text-muted-foreground", children: "Choose one of the default packages or create your custom event" }),
    /* @__PURE__ */ c.jsxs("div", { children: [
      /* @__PURE__ */ c.jsx("h3", { className: "text-lg text-primary font-medium", children: "Facilities" }),
      /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 mt-4", children: e.map((f) => /* @__PURE__ */ c.jsx(
        p4,
        {
          title: f.title,
          description: f.description,
          image_url: f.image,
          isSelected: r.includes(f.id),
          onClick: () => u(f.id)
        },
        f.id
      )) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { children: [
      /* @__PURE__ */ c.jsx("h3", { className: "text-lg text-primary font-medium", children: "Catering arrangements" }),
      /* @__PURE__ */ c.jsx("p", { className: "text-muted-foreground mt-2", children: "Specific delivery times are be added later from your customer portal." }),
      /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 mt-4", children: t.map((f) => {
        const m = i.find((h) => h.id === f.id);
        return /* @__PURE__ */ c.jsx(
          m4,
          {
            guests: n,
            title: f.title,
            description: f.description,
            image_url: f.image,
            isSelected: !!m,
            quantity: m ? m.quantity : 0,
            onClick: () => d(f.id),
            onQuantityChange: (h) => p(f.id, h)
          },
          f.id
        );
      }) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { children: [
      /* @__PURE__ */ c.jsx("h3", { className: "text-lg text-primary", children: "Special Requests / Comments" }),
      /* @__PURE__ */ c.jsx(
        "textarea",
        {
          className: "w-full p-4 border rounded mt-2 bg-gray-50 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50",
          rows: "4",
          placeholder: "Let us know how we can help with your event.",
          value: l,
          onChange: (f) => s(f.target.value)
        }
      )
    ] })
  ] });
};
var vp = "Checkbox", [v4, B4] = wr(vp), [g4, y4] = v4(vp), c1 = D.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: i,
      required: a,
      disabled: l,
      value: s = "on",
      onCheckedChange: u,
      ...d
    } = e, [p, f] = D.useState(null), m = le(t, (w) => f(w)), h = D.useRef(!1), g = p ? !!p.closest("form") : !0, [x = !1, y] = Yo({
      prop: o,
      defaultProp: i,
      onChange: u
    }), v = D.useRef(x);
    return D.useEffect(() => {
      const w = p == null ? void 0 : p.form;
      if (w) {
        const C = () => y(v.current);
        return w.addEventListener("reset", C), () => w.removeEventListener("reset", C);
      }
    }, [p, y]), /* @__PURE__ */ c.jsxs(g4, { scope: n, state: x, disabled: l, children: [
      /* @__PURE__ */ c.jsx(
        ee.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": zr(x) ? "mixed" : x,
          "aria-required": a,
          "data-state": p1(x),
          "data-disabled": l ? "" : void 0,
          disabled: l,
          value: s,
          ...d,
          ref: m,
          onKeyDown: J(e.onKeyDown, (w) => {
            w.key === "Enter" && w.preventDefault();
          }),
          onClick: J(e.onClick, (w) => {
            y((C) => zr(C) ? !0 : !C), g && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ c.jsx(
        D4,
        {
          control: p,
          bubbles: !h.current,
          name: r,
          value: s,
          checked: x,
          required: a,
          disabled: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
c1.displayName = vp;
var d1 = "CheckboxIndicator", f1 = D.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, i = y4(d1, n);
    return /* @__PURE__ */ c.jsx(Kt, { present: r || zr(i.state) || i.state === !0, children: /* @__PURE__ */ c.jsx(
      ee.span,
      {
        "data-state": p1(i.state),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
f1.displayName = d1;
var D4 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, i = D.useRef(null), a = Qf(n), l = Xf(t);
  return D.useEffect(() => {
    const s = i.current, u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (a !== n && p) {
      const f = new Event("click", { bubbles: r });
      s.indeterminate = zr(n), p.call(s, zr(n) ? !1 : n), s.dispatchEvent(f);
    }
  }, [a, n, r]), /* @__PURE__ */ c.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: zr(n) ? !1 : n,
      ...o,
      tabIndex: -1,
      ref: i,
      style: {
        ...e.style,
        ...l,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function zr(e) {
  return e === "indeterminate";
}
function p1(e) {
  return zr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var m1 = c1, w4 = f1;
const h1 = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  m1,
  {
    ref: n,
    className: G(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ c.jsx(w4, { className: G("flex items-center justify-center text-current"), children: /* @__PURE__ */ c.jsx(jD, { className: "h-4 w-4" }) })
  }
));
h1.displayName = m1.displayName;
const x4 = ({
  company: e,
  setCompany: t,
  firstName: n,
  setFirstName: r,
  lastName: o,
  setLastName: i,
  email: a,
  setEmail: l,
  phone: s,
  setPhone: u,
  agreeTerms: d,
  setAgreeTerms: p,
  companyError: f,
  firstNameError: m,
  lastNameError: h,
  emailError: g,
  phoneError: x,
  agreeTermsError: y,
  isStep3Valid: v
}) => /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col space-y-8 mt-8 max-w-[480px] mx-auto", children: [
  /* @__PURE__ */ c.jsx("h2", { className: "text-2xl font-bold text-center", children: "Your contact details" }),
  /* @__PURE__ */ c.jsx("p", { className: "text-center text-muted-foreground", children: "Your Free Quote is almost there. No strings attached ;)" }),
  /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
    /* @__PURE__ */ c.jsx(It, { placeholder: "Event name (optional)" }),
    /* @__PURE__ */ c.jsx(It, { placeholder: "Team name (optional)" })
  ] }),
  /* @__PURE__ */ c.jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ c.jsxs("h3", { className: "text-lg", children: [
      "Contact Details ",
      /* @__PURE__ */ c.jsx("span", { className: "text-sm text-red-400", children: "(required)" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-1 gap-4 mt-4", children: [
      /* @__PURE__ */ c.jsx(
        It,
        {
          placeholder: "Company name",
          className: f ? "border-red-500" : "",
          value: e,
          onChange: (w) => t(w.target.value)
        }
      ),
      f && /* @__PURE__ */ c.jsx("p", { className: "text-red-500 text-sm mt-1", children: f }),
      /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ c.jsx(It, { placeholder: "First name", className: m ? "border-red-500" : "", value: n, onChange: (w) => r(w.target.value) }),
        /* @__PURE__ */ c.jsx(It, { placeholder: "Last name", className: h ? "border-red-500" : "", value: o, onChange: (w) => i(w.target.value) })
      ] }),
      /* @__PURE__ */ c.jsx(It, { placeholder: "Email (company email preferred)", className: g ? "border-red-500" : "", value: a, onChange: (w) => l(w.target.value) }),
      /* @__PURE__ */ c.jsx(It, { placeholder: "Phone", className: x ? "border-red-500" : "", value: s, onChange: (w) => u(w.target.value) })
    ] })
  ] }),
  /* @__PURE__ */ c.jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ c.jsxs("label", { className: "inline-flex items-center", htmlFor: "agree-terms", children: [
      /* @__PURE__ */ c.jsx(
        h1,
        {
          id: "agree-terms",
          className: y ? "border-red-500" : "",
          checked: d,
          onCheckedChange: () => p(!d)
        }
      ),
      /* @__PURE__ */ c.jsx("span", { className: "ml-2 text-muted-foreground text-sm", children: "I agree to the terms & conditions and EU data processing" })
    ] }),
    y && /* @__PURE__ */ c.jsx("p", { className: "text-red-500 text-sm mt-1", children: y })
  ] }),
  /* @__PURE__ */ c.jsx("p", { className: "text-muted-foreground text-sm", children: "We will prepare a proposal for your event without any commitment. You will gain access to a personalised portal where you can manage your proposal online." }),
  /* @__PURE__ */ c.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ c.jsx(De, { className: "w-full", disabled: !v(), children: "Request Proposal" }) })
] });
function C4() {
  var Ze;
  const [e, t] = D.useState(""), [n, r] = D.useState((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 1)), [o, i] = D.useState(""), [a, l] = D.useState("09:00"), [s, u] = D.useState(""), [d, p] = D.useState(!1), [f, m] = D.useState("Boardroom"), [h, g] = D.useState(""), [x, y] = D.useState([]), [v, w] = D.useState([]), [C, E] = D.useState(""), [S, b] = D.useState(""), [k, P] = D.useState(""), [N, T] = D.useState(""), [j, L] = D.useState(""), [I, z] = D.useState(""), [H, _] = D.useState(!1), [F, O] = D.useState([]), [B, V] = D.useState([]), [te, Ye] = D.useState([]), [me, Me] = D.useState(0), [he, W] = D.useState(1), [ne, ke] = D.useState(null), [R, oe] = D.useState(null), [re, $e] = D.useState(null), [it, vt] = D.useState(null), [Xt, dn] = D.useState(null), [fn, Bn] = D.useState(null), [Na, Qs] = D.useState(null), [Xs, $n] = D.useState(null), [Gs, Pa] = D.useState(null), [qs, Wn] = D.useState(null);
  D.useEffect(() => {
    O(_a), V(ai);
  }, []), D.useEffect(() => {
    let K = 0;
    h && te.length > 0 && te.forEach((Pe, We) => {
      const Ee = ja.find((at) => at.venue_id === h && at.package_id === Pe);
      Ee && Ee.price && (K += Ee.price), x.map((at) => zn.find((ui) => ui.id === at)).forEach((at) => {
        K += at.price;
      }), v.forEach((at) => {
        const ui = io.find((Js) => Js.id === at.id);
        K += ui.price * at.quantity;
      });
    }), Me(K.toFixed(2));
  }, [h, d, o, x, v]), D.useEffect(() => {
    de();
  }, [he]);
  const _a = [
    {
      id: "1",
      name: "Blossom Private Space",
      description: "With a spacious garden can host teams up to...",
      images: [new URL("./Blossom_hero_widget.jpg", import.meta.url).href],
      // Correctly resolve the image
      capacity: 22,
      area: 70
    },
    {
      id: "2",
      name: "Aurora Private Space",
      description: "With a spacious garden can host teams up to...",
      images: [new URL("./Aurora_hero_widget.jpg", import.meta.url).href],
      // Correctly resolve the image
      capacity: 22,
      area: 70
    }
  ], ai = [
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
  ], ja = [
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
  ], zn = [
    {
      id: 1,
      title: "Presentation Screen",
      price: 100,
      description: '60" portable screen with wireless and HDMI connection.',
      image: new URL("./presentation_form_m.jpg", import.meta.url).href
    },
    {
      id: 2,
      title: "Post-its & Markers",
      price: 20,
      description: "Various colours/sizes of markers and post-its.",
      image: new URL("./postits_form_m.jpg", import.meta.url).href
    },
    {
      id: 3,
      title: "Conference System",
      price: 150,
      description: "Wide angle camera with external microphones.",
      image: new URL("./conference_form_m.jpg", import.meta.url).href
    },
    {
      id: 4,
      title: "Flip Charts",
      price: 30,
      description: "Set of 2 flip-charts with paper.",
      image: new URL("./flipcharts_form_m.jpg", import.meta.url).href
    }
  ], io = [
    {
      id: 1,
      title: "Beverages",
      price: 10,
      description: "Unlimited Coffee, tea and soft drinks.",
      image: new URL("./beverages_form_m.jpg", import.meta.url).href
    },
    {
      id: 2,
      title: "Snacks",
      price: 15,
      description: "Prepared during your check-in.",
      image: new URL("./snacks_form_m.jpg", import.meta.url).href
    },
    {
      id: 3,
      title: "Breakfast",
      price: 25,
      description: "Via catering partners. Time of delivery specified later.",
      image: new URL("./breakfast_form_m.jpg", import.meta.url).href
    },
    {
      id: 4,
      title: "Lunch",
      price: 40,
      description: "Via catering partners. Time of delivery specified later.",
      image: new URL("./lunch_form_m.jpg", import.meta.url).href
    }
  ], li = () => e > 0 && n !== "" && a !== "" && te.length > 0 && h !== "" && (d ? o !== "" : !0), si = () => ((!e || e <= 0) && ke("Please select the number of guests"), n || oe("Please select a date"), a || $e("Please select a time"), o && o < n && vt("End date must be after start date"), !0), U = () => S !== "" && k !== "" && N !== "" && j !== "" && I !== "" && H, Q = () => (S || dn("Please enter your company name"), k || Bn("Please enter your first name"), N || Qs("Please enter your last name"), j || $n("Please enter your email"), I || Pa("Please enter your phone number"), H || Wn("Please agree to the terms and conditions"), !0), de = () => {
    document.getElementById("modal-content").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };
  async function q() {
    return (await (await fetch(
      "https://betadev.comidor.com/Services?unit=APIAccessTokens&s_tokenAppId=jIcwr4eot11VMSKdVCz3&s_tokenTenantId=creativepointdev&s_tokenSecret=OLUJdj7nJoho080JomNd&contextCode=Default&client=creativepointdev&dataAction=s_getAccessToken&responseFormat=json&responseCodes=true"
    )).text()).substring(43, 244);
  }
  const Ce = async () => {
    var K;
    if (si() && Q() && li() && U()) {
      console.log("Submit data to Comidor");
      const Pe = "https://betadev.comidor.com/Services", We = new URLSearchParams(window.location.search);
      console.log("queryParams: ", We);
      let Ee = new Date(n);
      d && (Ee = new Date(o));
      const Hn = (K = F.find((ci) => ci.id === h)) == null ? void 0 : K.name.split(" ")[0], at = {
        u_contactFirstName: k,
        u_contactLastName: N,
        u_email: j,
        u_resStartDate: new Date(n).toISOString().slice(0, 10).replace(/-/g, ""),
        u_resEndDate: new Date(Ee).toISOString().slice(0, 10).replace(/-/g, ""),
        u_resStartTime: a,
        u_resEndTime: s,
        u_duration: te.map((ci) => ai.find((Zs) => Zs.id === ci).duration_hours),
        u_teamSize: e,
        u_venueName: Hn,
        u_tableLayout: f,
        u_hasHardware: x.includes(1) ? 1 : 0,
        u_hasFlipcharts: x.includes(2) ? 1 : 0,
        u_hasUnlimitedCoffee: v.includes(1) ? 1 : 0,
        u_hasBreakfast: v.includes(3) ? 1 : 0,
        u_hasLunch: v.includes(4) ? 1 : 0,
        u_hasSnacks: v.includes(2) ? 1 : 0,
        u_hasDinner: v.includes(5) ? 1 : 0,
        client: "creativepointdev",
        unit: "APP_000134",
        dataAction: "u_createReservation",
        u_customQuote: 1,
        u_preventEmailCommunications: 1,
        responseFormat: "json"
      }, ui = await q(), Js = new URLSearchParams(at), y1 = Pe + "?" + Js.toString();
      console.log("full_url: ", y1), console.log("authToken: ", ui);
      const D1 = We.get("adsID"), w1 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, ""), x1 = te.map((ci) => ai.find((Zs) => Zs.id === ci).duration_hours).join(", "), C1 = me, E1 = Hn, S1 = {
        "First Name": k,
        "Last Name": N,
        Company: S,
        "Team Size": e,
        Email: j,
        Phone: I,
        "Quote Date": w1,
        "Event Start Date": new Date(n).toISOString().slice(0, 10),
        "Event End Date": new Date(Ee).toISOString().slice(0, 10),
        Duration: x1,
        "Total Value": C1,
        Venue: E1,
        adsID: D1
      };
      await Ne(S1);
    }
  }, Ne = async (K) => {
    const Pe = [
      K["First Name"],
      K["Last Name"],
      K.Company,
      K["Team Size"],
      K.Email,
      K.Phone,
      K["Quote Date"],
      K["Event Start Date"],
      K["Event End Date"],
      K.Duration,
      K["Total Value"],
      K.Venue,
      K.adsID
    ];
    try {
      const We = await fetch("https://google-sheets-api-wrapper.vercel.app/append-data", {
        // const response = await fetch(`http://localhost:5001/append-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: Pe })
        // Stringify the entire body
      }), Ee = await We.json();
      We.ok ? console.log("Data successfully submitted:", Ee) : console.error("Error appending data:", Ee);
    } catch (We) {
      console.error("Failed to submit data:", We);
    }
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "grid grid-rows-[1fr_fit]  overflow-hidden lg:flex lg:flex-row justify-center lg:space-x-8 lg:overflow-visible", children: [
    /* @__PURE__ */ c.jsxs("div", { id: "modal-content", className: "min-w-[90vw] w-full lg:min-w-fit lg:w-3/4 p-2 md:p-8 mt-8 overflow-scroll", children: [
      he === 1 && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-2xl font-bold text-center", children: "Let's get you started" }),
        /* @__PURE__ */ c.jsx("p", { className: "text-center text-muted-foreground mt-6", children: "When and with how many people will you meet?" }),
        /* @__PURE__ */ c.jsx(
          f4,
          {
            guests: e,
            setGuests: t,
            guestsError: ne,
            setGuestsError: ke,
            date: n,
            setDate: r,
            dateError: R,
            endDate: o,
            setEndDate: i,
            endDateError: it,
            time: a,
            setTime: l,
            timeError: re,
            endTime: s,
            setEndTime: u,
            isMultiDay: d,
            setMultiDay: p,
            tableSetup: f,
            setTableSetup: m,
            venue: h,
            setVenue: g,
            eventPackages: B,
            selectedEventPackages: te,
            setSelectedEventPackages: Ye,
            venues: F
          }
        ),
        /* @__PURE__ */ c.jsx("div", { className: "mt-12 space-y-8 flex flex-col items-center", children: /* @__PURE__ */ c.jsxs(De, { className: "mt-8", onClick: () => si() && li() && W(2), children: [
          "Add Event Options ",
          /* @__PURE__ */ c.jsx(Wi, { className: "ml-2 h-5 w-5 text-white" })
        ] }) })
      ] }),
      he === 2 && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(
          h4,
          {
            guests: e,
            facilitiesSelected: x,
            setFacilitiesSelected: y,
            cateringSelected: v,
            setCateringSelected: w,
            comments: C,
            setComments: E,
            catering: io,
            facilities: zn
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "hidden md:flex relative mt-12 space-x-4 flex justify-end items-center", children: [
          /* @__PURE__ */ c.jsx("span", { className: "absolute top-1/2 left-0 text-muted-foreground", children: "Step 2 of 3" }),
          /* @__PURE__ */ c.jsx(De, { variant: "outline", className: "mt-8", onClick: () => W(1), children: /* @__PURE__ */ c.jsx(So, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
          /* @__PURE__ */ c.jsxs(De, { className: "mt-8", onClick: () => W(3), children: [
            "Next ",
            /* @__PURE__ */ c.jsx(Wi, { className: "ml-2 h-5 w-5 text-white" })
          ] })
        ] })
      ] }),
      he === 3 && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(
          x4,
          {
            company: S,
            setCompany: b,
            firstName: k,
            setFirstName: P,
            lastName: N,
            setLastName: T,
            email: j,
            setEmail: L,
            phone: I,
            setPhone: z,
            agreeTerms: H,
            setAgreeTerms: _,
            companyError: Xt,
            firstNameError: fn,
            lastNameError: Na,
            emailError: Xs,
            phoneError: Gs,
            agreeTermsError: qs,
            isStep3Valid: U
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "hidden md:flex mt-12 flex justify-between items-center", children: [
          /* @__PURE__ */ c.jsx("span", { className: "text-muted-foreground", children: "Step 3 of 3" }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex space-x-4 items-center", children: [
            /* @__PURE__ */ c.jsx(De, { variant: "outline", onClick: () => W(2), children: /* @__PURE__ */ c.jsx(So, { className: "mr-2 h-5 w-5 text-muted-foreground" }) }),
            /* @__PURE__ */ c.jsxs(De, { onClick: () => U() && Ce(), children: [
              "Request Proposal ",
              /* @__PURE__ */ c.jsx(Wi, { className: "ml-2 h-5 w-5 text-white" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx(
      yP,
      {
        date: n,
        guests: e,
        time: a,
        venue: (Ze = F.find((K) => K.id === h)) == null ? void 0 : Ze.name,
        tableSetup: f,
        isMultiDay: d,
        endDate: o,
        currentStep: he,
        setCurrentStep: W,
        isStep1Valid: li,
        checkStep1Errors: si,
        isStep3Valid: U,
        checkStep3Errors: Q,
        selectedEventPackages: te.map((K) => {
          var Pe, We;
          return {
            ...K,
            duration: (Pe = B.find((Ee) => Ee.id === K)) == null ? void 0 : Pe.duration_hours,
            price: (We = ja.find((Ee) => Ee.venue_id === h && Ee.package_id === K)) == null ? void 0 : We.price
          };
        }),
        facilitiesSelected: zn.filter((K) => x.includes(K.id)),
        cateringSelected: v.map((K) => ({ ...K, name: io.find((Pe) => Pe.id === K.id).title, price: io.find((Pe) => Pe.id === K.id).price })),
        totalExclVat: me
      }
    )
  ] });
}
const E4 = Y0, S4 = K0, b4 = Q0, v1 = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Sf,
  {
    ref: n,
    className: G(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
v1.displayName = Sf.displayName;
const g1 = D.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(b4, { children: [
  /* @__PURE__ */ c.jsx(v1, {}),
  /* @__PURE__ */ c.jsx(
    bf,
    {
      ref: r,
      className: G(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: t
    }
  )
] }));
g1.displayName = bf.displayName;
const F4 = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ff,
  {
    ref: n,
    className: G("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
F4.displayName = Ff.displayName;
const k4 = D.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  kf,
  {
    ref: n,
    className: G("text-sm text-muted-foreground", e),
    ...t
  }
));
k4.displayName = kf.displayName;
function N4() {
  const [e, t] = D.useState(!1);
  return /* @__PURE__ */ c.jsxs(E4, { children: [
    /* @__PURE__ */ c.jsx(S4, { asChild: !0, children: /* @__PURE__ */ c.jsx(De, { onClick: () => t(!0), children: "Book Now" }) }),
    /* @__PURE__ */ c.jsx(g1, { className: "h-[95%] md:h-[95vh] max-w-[95vw] p-0 md:overflow-scroll", children: /* @__PURE__ */ c.jsx(C4, {}) })
  ] });
}
const P4 = "", _4 = !1;
class j4 extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    console.log("Development mode:", _4);
    const t = document.createElement("div");
    this.shadowRoot.appendChild(t), this.style.position = "fixed", this.style.bottom = "20px", this.style.right = "20px", this.style.zIndex = "49";
    {
      const n = document.createElement("style");
      n.textContent = P4, this.shadowRoot.appendChild(n);
    }
    bl.createRoot(t).render(/* @__PURE__ */ c.jsx(N4, {}));
  }
  disconnectedCallback() {
    bl.unmountComponentAtNode(this.shadowRoot);
  }
}
customElements.define("meeting-room-widget", j4);
