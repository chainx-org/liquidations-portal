! function webpackUniversalModuleDefinition(t, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports["@makerdao/services-core"] = r() : t["@makerdao/services-core"] = r()
}(window, (function () {
    return function (t) {
        var r = {};

        function __webpack_require__(o) {
            if (r[o]) return r[o].exports;
            var i = r[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(i.exports, i, i.exports, __webpack_require__), i.l = !0, i.exports
        }
        return __webpack_require__.m = t, __webpack_require__.c = r, __webpack_require__.d = function (t, r, o) {
            __webpack_require__.o(t, r) || Object.defineProperty(t, r, {
                enumerable: !0,
                get: o
            })
        }, __webpack_require__.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, __webpack_require__.t = function (t, r) {
            if (1 & r && (t = __webpack_require__(t)), 8 & r) return t;
            if (4 & r && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (__webpack_require__.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & r && "string" != typeof t)
                for (var i in t) __webpack_require__.d(o, i, function (r) {
                    return t[r]
                }.bind(null, i));
            return o
        }, __webpack_require__.n = function (t) {
            var r = t && t.__esModule ? function getDefault() {
                return t.default
            } : function getModuleExports() {
                return t
            };
            return __webpack_require__.d(r, "a", r), r
        }, __webpack_require__.o = function (t, r) {
            return Object.prototype.hasOwnProperty.call(t, r)
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 32)
    }([function (t, r) {
        t.exports = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
    }, function (t, r) {
        t.exports = function _classCallCheck(t, r) {
            if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
        }
    }, function (t, r) {
        function _getPrototypeOf(r) {
            return t.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, _getPrototypeOf(r)
        }
        t.exports = _getPrototypeOf
    }, function (t, r) {
        function _typeof(r) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = _typeof = function _typeof(t) {
                return typeof t
            } : t.exports = _typeof = function _typeof(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, _typeof(r)
        }
        t.exports = _typeof
    }, function (t, r) {
        function _defineProperties(t, r) {
            for (var o = 0; o < r.length; o++) {
                var i = r[o];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        t.exports = function _createClass(t, r, o) {
            return r && _defineProperties(t.prototype, r), o && _defineProperties(t, o), t
        }
    }, function (t, r, o) {
        var i = o(14);
        t.exports = function _inherits(t, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(r && r.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), r && i(t, r)
        }
    }, function (t, r, o) {
        var i = o(3),
            a = o(36);
        t.exports = function _possibleConstructorReturn(t, r) {
            return !r || "object" !== i(r) && "function" != typeof r ? a(t) : r
        }
    }, function (t, r, o) {
        var i = o(0);
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.serviceTypeTransitions = r.default = void 0;
        var a = i(o(16));
        r.default = {
            LOCAL: "LOCAL",
            PUBLIC: "PUBLIC",
            PRIVATE: "PRIVATE"
        };
        var u = {
            LOCAL: {
                CREATED: [a.default.INITIALIZING],
                INITIALIZING: [a.default.CREATED, a.default.READY],
                READY: [a.default.ERROR],
                ERROR: []
            },
            PUBLIC: {
                CREATED: [a.default.INITIALIZING],
                INITIALIZING: [a.default.CREATED, a.default.OFFLINE],
                OFFLINE: [a.default.CONNECTING],
                CONNECTING: [a.default.OFFLINE, a.default.READY],
                READY: [a.default.OFFLINE, a.default.ERROR],
                ERROR: []
            },
            PRIVATE: {
                CREATED: [a.default.INITIALIZING],
                INITIALIZING: [a.default.CREATED, a.default.OFFLINE],
                OFFLINE: [a.default.CONNECTING],
                CONNECTING: [a.default.OFFLINE, a.default.ONLINE],
                ONLINE: [a.default.OFFLINE, a.default.AUTHENTICATING],
                AUTHENTICATING: [a.default.ONLINE, a.default.READY],
                READY: [a.default.OFFLINE, a.default.ONLINE, a.default.ERROR],
                ERROR: []
            }
        };
        r.serviceTypeTransitions = u
    }, function (t, r, o) {
        var i = o(26),
            a = "object" == typeof self && self && self.Object === Object && self,
            u = i || a || Function("return this")();
        t.exports = u
    }, function (t, r, o) {
        var i = o(0);
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var a = i(o(1)),
            u = i(o(4)),
            c = i(o(13)),
            l = i(o(7)),
            d = i(o(16));

        function _defineLifeCycleMethods(t) {
            void 0 === this.initialize && (this.initialize = function () {}), t !== l.default.LOCAL && (void 0 === this.connect && (this.connect = function () {}), this.disconnect = function () {}), t === l.default.PRIVATE && (void 0 === this.authenticate && (this.authenticate = function () {}), this.deauthenticate = function () {})
        }

        function _buildServiceManager(t, r, o) {
            var i = this,
                a = t === l.default.LOCAL ? null : function (t) {
                    return i.disconnect = t, i.connect()
                },
                u = t !== l.default.PRIVATE ? null : function (t) {
                    return i.deauthenticate = t, i.authenticate()
                };
            return new c.default(r, o, (function (t) {
                return i.initialize(t)
            }), a, u)
        }

        function _installLifeCycleHooks(t) {
            var r = this;
            t.onInitialized((function () {
                t.type() !== l.default.LOCAL && t.dependencies().forEach((function (t) {
                    r.get(t).manager().onDisconnected((function () {
                        return r.disconnect()
                    }))
                })), t.type() === l.default.PRIVATE && t.dependencies().forEach((function (t) {
                    r.get(t).manager().onDeauthenticated((function () {
                        return r.deauthenticate()
                    }))
                }))
            }))
        }

        function _guardLifeCycleMethods() {
            var t = {
                initialize: this.initialize,
                connect: this.connect,
                authenticate: this.authenticate
            };
            this.initialize = function (r) {
                if (this.manager().state() !== d.default.INITIALIZING) throw new Error("Expected state INITIALIZING, but got " + this.manager().state() + ". Did you mean to call service.manager().initialize() instead of service.initialize()?");
                return t.initialize.apply(this, [r])
            }, void 0 !== t.connect && (this.connect = function () {
                if (this.manager().state() !== d.default.CONNECTING) throw new Error("Expected state CONNECTING, but got " + this.manager().state() + ". Did you mean to call service.manager().connect() instead of service.connect()?");
                return t.connect.apply(this)
            }), void 0 !== t.authenticate && (this.authenticate = function () {
                if (this.manager().state() !== d.default.AUTHENTICATING) throw new Error("Expected state AUTHENTICATING, but got " + this.manager().state() + ". Did you mean to call service.manager().authenticate() instead of service.authenticate()?");
                return t.authenticate.apply(this)
            })
        }
        var h = function () {
            function ServiceBase(t, r) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                if ((0, a.default)(this, ServiceBase), r || (r = this.constructor.role), this.constructor.dependencies && (o = this.constructor.dependencies), void 0 === l.default[t]) throw new Error("Invalid ServiceType: " + t);
                _defineLifeCycleMethods.call(this, t), this._serviceManager = _buildServiceManager.call(this, t, r, o), _installLifeCycleHooks.call(this, this._serviceManager), _guardLifeCycleMethods.call(this)
            }
            return (0, u.default)(ServiceBase, [{
                key: "manager",
                value: function manager() {
                    return this._serviceManager
                }
            }, {
                key: "get",
                value: function get(t) {
                    return this._serviceManager.dependency(t)
                }
            }]), ServiceBase
        }();
        r.default = h
    }, function (t, r, o) {
        var i = o(17)(Object, "create");
        t.exports = i
    }, function (t, r, o) {
        var i = o(73);
        t.exports = function assocIndexOf(t, r) {
            for (var o = t.length; o--;)
                if (i(t[o][0], r)) return o;
            return -1
        }
    }, function (t, r, o) {
        var i = o(79);
        t.exports = function getMapData(t, r) {
            var o = t.__data__;
            return i(r) ? o["string" == typeof r ? "string" : "hash"] : o.map
        }
    }, function (t, r, o) {
        var i = o(0);
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.DependencyNotResolvedError = r.UnknownDependencyError = r.InvalidServiceError = r.default = void 0;
        var a = i(o(3)),
            u = i(o(34)),
            c = i(o(4)),
            l = i(o(1)),
            d = i(o(5)),
            h = i(o(6)),
            p = i(o(2)),
            v = i(o(15)),
            y = i(o(40));

        function _createSuper(t) {
            var r = function _isNativeReflectConstruct() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var o, i = (0, p.default)(t);
                if (r) {
                    var a = (0, p.default)(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return (0, h.default)(this, o)
            }
        }
        var _ = function (t) {
            (0, d.default)(InvalidServiceError, t);
            var r = _createSuper(InvalidServiceError);

            function InvalidServiceError(t) {
                return (0, l.default)(this, InvalidServiceError), r.call(this, t)
            }
            return InvalidServiceError
        }((0, v.default)(Error));
        r.InvalidServiceError = _;
        var g = function (t) {
            (0, d.default)(UnknownDependencyError, t);
            var r = _createSuper(UnknownDependencyError);

            function UnknownDependencyError(t, o) {
                return (0, l.default)(this, UnknownDependencyError), r.call(this, "Injected service " + o + " is not a dependency of " + t)
            }
            return UnknownDependencyError
        }((0, v.default)(Error));
        r.UnknownDependencyError = g;
        var m = function (t) {
            (0, d.default)(DependencyNotResolvedError, t);
            var r = _createSuper(DependencyNotResolvedError);

            function DependencyNotResolvedError(t, o) {
                return (0, l.default)(this, DependencyNotResolvedError), r.call(this, "Dependency " + o + " of service " + t + " is unavailable.")
            }
            return DependencyNotResolvedError
        }((0, v.default)(Error));

        function _waitForDependencies(t) {
            return Promise.all(this.dependencies().map((function (r) {
                return t(r)
            })))
        }
        r.DependencyNotResolvedError = m;
        var b = function (t) {
            (0, d.default)(ServiceManager, t);
            var r = _createSuper(ServiceManager);

            function ServiceManager(t) {
                var o, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                if ((0, l.default)(this, ServiceManager), o = r.call(this, a, u, c), !t) throw new Error("Service name must not be empty.");
                return o._name = t, o._dependencies = i, o._injections = {}, i.forEach((function (t) {
                    return o._injections[t] = null
                })), o
            }
            return (0, c.default)(ServiceManager, null, [{
                key: "isValidService",
                value: function isValidService(t) {
                    return null !== t && "object" === (0, a.default)(t) && "function" == typeof t.manager
                }
            }]), (0, c.default)(ServiceManager, [{
                key: "name",
                value: function name() {
                    return this._name
                }
            }, {
                key: "dependencies",
                value: function dependencies() {
                    return this._dependencies
                }
            }, {
                key: "inject",
                value: function inject(t, r) {
                    if (void 0 === this._injections[t]) throw new g(this.name(), t);
                    if (!ServiceManager.isValidService(r)) throw new _("Cannot inject invalid service in " + this.name());
                    return this._injections[t] = r, this
                }
            }, {
                key: "dependency",
                value: function dependency(t) {
                    if (!this._injections[t]) throw new m(this.name(), t);
                    return this._injections[t]
                }
            }, {
                key: "initialize",
                value: function initialize() {
                    var t = this;
                    return this.initializeDependencies().then((function () {
                        return (0, u.default)((0, p.default)(ServiceManager.prototype), "initialize", t).call(t, t._settings)
                    }))
                }
            }, {
                key: "connect",
                value: function connect() {
                    var t = this;
                    return this.connectDependencies().then((function () {
                        return (0, u.default)((0, p.default)(ServiceManager.prototype), "connect", t).call(t)
                    }))
                }
            }, {
                key: "authenticate",
                value: function authenticate() {
                    var t = this;
                    return this.authenticateDependencies().then((function () {
                        return (0, u.default)((0, p.default)(ServiceManager.prototype), "authenticate", t).call(t)
                    }))
                }
            }, {
                key: "initializeDependencies",
                value: function initializeDependencies() {
                    var t = this;
                    return _waitForDependencies.call(this, (function (r) {
                        return t.dependency(r).manager().initialize()
                    }))
                }
            }, {
                key: "connectDependencies",
                value: function connectDependencies() {
                    var t = this;
                    return _waitForDependencies.call(this, (function (r) {
                        return t.dependency(r).manager().connect()
                    }))
                }
            }, {
                key: "authenticateDependencies",
                value: function authenticateDependencies() {
                    var t = this;
                    return _waitForDependencies.call(this, (function (r) {
                        return t.dependency(r).manager().authenticate()
                    }))
                }
            }, {
                key: "createService",
                value: function createService() {
                    var t = this;
                    return {
                        manager: function manager() {
                            return t
                        }
                    }
                }
            }]), ServiceManager
        }(y.default);
        r.default = b
    }, function (t, r) {
        function _setPrototypeOf(r, o) {
            return t.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(t, r) {
                return t.__proto__ = r, t
            }, _setPrototypeOf(r, o)
        }
        t.exports = _setPrototypeOf
    }, function (t, r, o) {
        var i = o(2),
            a = o(14),
            u = o(37),
            c = o(38);

        function _wrapNativeSuper(r) {
            var o = "function" == typeof Map ? new Map : void 0;
            return t.exports = _wrapNativeSuper = function _wrapNativeSuper(t) {
                if (null === t || !u(t)) return t;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== o) {
                    if (o.has(t)) return o.get(t);
                    o.set(t, Wrapper)
                }

                function Wrapper() {
                    return c(t, arguments, i(this).constructor)
                }
                return Wrapper.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: Wrapper,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), a(Wrapper, t)
            }, _wrapNativeSuper(r)
        }
        t.exports = _wrapNativeSuper
    }, function (t, r, o) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var i = {
            CREATED: "CREATED",
            INITIALIZING: "INITIALIZING",
            OFFLINE: "OFFLINE",
            CONNECTING: "CONNECTING",
            ONLINE: "ONLINE",
            AUTHENTICATING: "AUTHENTICATING",
            READY: "READY",
            ERROR: "ERROR"
        };
        r.default = i
    }, function (t, r, o) {
        var i = o(58),
            a = o(65);
        t.exports = function getNative(t, r) {
            var o = a(t, r);
            return i(o) ? o : void 0
        }
    }, function (t, r, o) {
        var i = o(25),
            a = o(60),
            u = o(61),
            c = i ? i.toStringTag : void 0;
        t.exports = function baseGetTag(t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : c && c in Object(t) ? a(t) : u(t)
        }
    }, function (t, r) {
        t.exports = function isObjectLike(t) {
            return null != t && "object" == typeof t
        }
    }, function (t, r, o) {
        var i = o(0);
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = function standardizeConfig(t, r, o) {
            if (r instanceof Array) return "boolean" == typeof r[0] && o ? [resolveNameForBoolean(t, r[0], o), r[1]] : r;
            var i, c = {};
            switch ((0, a.default)(r)) {
                case "string":
                case "function":
                    i = r;
                    break;
                case "object":
                    r instanceof u.default ? i = r : (i = !o || resolveNameForBoolean(t, !0, o), c = r);
                    break;
                case "boolean":
                    i = o ? resolveNameForBoolean(t, r, o) : r;
                    break;
                default:
                    throw new Error("could not parse settings for ".concat(t, ":"), r)
            }
            return [i, c]
        };
        var a = i(o(3)),
            u = i(o(9));

        function resolveNameForBoolean(t, r, o) {
            var i, a = o.defaults,
                u = o.disabled;
            if (r) {
                if (!(i = a[t])) throw new Error('The "'.concat(t, '" service has no default'))
            } else if (!(i = u[t])) throw new Error('The "'.concat(t, '" service cannot be disabled'));
            return i
        }
    }, function (t, r, o) {
        var i = o(3);

        function _getRequireWildcardCache() {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap;
            return _getRequireWildcardCache = function _getRequireWildcardCache() {
                return t
            }, t
        }
        t.exports = function _interopRequireWildcard(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== i(t) && "function" != typeof t) return {
                default: t
            };
            var r = _getRequireWildcardCache();
            if (r && r.has(t)) return r.get(t);
            var o = {},
                a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in t)
                if (Object.prototype.hasOwnProperty.call(t, u)) {
                    var c = a ? Object.getOwnPropertyDescriptor(t, u) : null;
                    c && (c.get || c.set) ? Object.defineProperty(o, u, c) : o[u] = t[u]
                } return o.default = t, r && r.set(t, o), o
        }
    }, function (t, r, o) {
        var i = o(0);
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = r.IllegalStateError = void 0;
        var a = i(o(3)),
            u = i(o(4)),
            c = i(o(1)),
            l = i(o(5)),
            d = i(o(6)),
            h = i(o(2));

        function _createSuper(t) {
            var r = function _isNativeReflectConstruct() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var o, i = (0, h.default)(t);
                if (r) {
                    var a = (0, h.default)(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return (0, d.default)(this, o)
            }
        }
        var p = function (t) {
            (0, l.default)(IllegalStateError, t);
            var r = _createSuper(IllegalStateError);

            function IllegalStateError() {
                return (0, c.default)(this, IllegalStateError), r.apply(this, arguments)
            }
            return IllegalStateError
        }((0, i(o(15)).default)(Error));
        r.IllegalStateError = p;
        var v = function () {
            function StateMachine(t, r) {
                if ((0, c.default)(this, StateMachine), "object" !== (0, a.default)(r)) throw new Error("StateMachine transitions parameter must be an object.");
                if (Object.keys(r).filter((function (t) {
                        return r.hasOwnProperty(t) && !(r[t] instanceof Array)
                    })).length > 0) throw new Error("Illegal StateMachine transition found: not an array.");
                if (Object.keys(r).filter((function (t) {
                        return r.hasOwnProperty(t) && r[t].filter((function (t) {
                            return !r[t]
                        })).length > 0
                    })).length > 0) throw new Error("Illegal StateMachine transition found: target state not in transition map.");
                if (!(r[t] instanceof Array)) throw new Error("Initial state " + t + " is not set in the transitions map.");
                this._state = t, this._nextStates = r, this._stateChangedHandlers = []
            }
            return (0, u.default)(StateMachine, [{
                key: "onStateChanged",
                value: function onStateChanged(t) {
                    this._stateChangedHandlers.push(t)
                }
            }, {
                key: "state",
                value: function state() {
                    return this._state
                }
            }, {
                key: "inState",
                value: function inState(t) {
                    return t instanceof Array || (t = [t]), t.indexOf(this._state) >= 0
                }
            }, {
                key: "assertState",
                value: function assertState(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (!this.inState(t)) throw new p("Illegal operation for state " + this._state + (r.length > 0 ? ": " + r : ""))
                }
            }, {
                key: "transitionTo",
                value: function transitionTo(t) {
                    if (void 0 === this._nextStates[t]) throw new p("Cannot set illegal state: " + t);
                    if (t !== this._state) {
                        if (this._nextStates[this._state].indexOf(t) < 0) throw new p("Illegal state transition: " + this._state + " to " + t);
                        var r = this._state;
                        this._state = t, this._stateChangedHandlers.forEach((function (o) {
                            return o(r, t)
                        }))
                    }
                    return this
                }
            }]), StateMachine
        }();
        r.default = v
    }, function (t, r, o) {
        var i = o(52);
        t.exports = function uniq(t) {
            return t && t.length ? i(t) : []
        }
    }, function (t, r, o) {
        var i = o(18),
            a = o(27);
        t.exports = function isFunction(t) {
            if (!a(t)) return !1;
            var r = i(t);
            return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r
        }
    }, function (t, r, o) {
        var i = o(8).Symbol;
        t.exports = i
    }, function (t, r, o) {
        (function (r) {
            var o = "object" == typeof r && r && r.Object === Object && r;
            t.exports = o
        }).call(this, o(59))
    }, function (t, r) {
        t.exports = function isObject(t) {
            var r = typeof t;
            return null != t && ("object" == r || "function" == r)
        }
    }, function (t, r) {
        t.exports = function setToArray(t) {
            var r = -1,
                o = Array(t.size);
            return t.forEach((function (t) {
                o[++r] = t
            })), o
        }
    }, function (t, r, o) {
        var i = o(21),
            a = o(0);
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.orderServices = orderServices, Object.defineProperty(r, "InvalidServiceError", {
            enumerable: !0,
            get: function get() {
                return m.InvalidServiceError
            }
        }), r.ServiceNotFoundError = r.ServiceAlreadyRegisteredError = r.ExtractedServiceError = r.default = void 0;
        var u = a(o(95)),
            c = a(o(97)),
            l = a(o(4)),
            d = a(o(1)),
            h = a(o(5)),
            p = a(o(6)),
            v = a(o(2)),
            y = a(o(15)),
            _ = a(o(98)),
            g = a(o(23)),
            m = i(o(13)),
            b = a(o(119));

        function _createForOfIteratorHelper(t) {
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = function _unsupportedIterableToArray(t, r) {
                        if (!t) return;
                        if ("string" == typeof t) return _arrayLikeToArray(t, r);
                        var o = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === o && t.constructor && (o = t.constructor.name);
                        if ("Map" === o || "Set" === o) return Array.from(t);
                        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return _arrayLikeToArray(t, r)
                    }(t))) {
                    var r = 0,
                        o = function F() {};
                    return {
                        s: o,
                        n: function n() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a, u = !0,
                c = !1;
            return {
                s: function s() {
                    i = t[Symbol.iterator]()
                },
                n: function n() {
                    var t = i.next();
                    return u = t.done, t
                },
                e: function e(t) {
                    c = !0, a = t
                },
                f: function f() {
                    try {
                        u || null == i.return || i.return()
                    } finally {
                        if (c) throw a
                    }
                }
            }
        }

        function _arrayLikeToArray(t, r) {
            (null == r || r > t.length) && (r = t.length);
            for (var o = 0, i = new Array(r); o < r; o++) i[o] = t[o];
            return i
        }

        function _createSuper(t) {
            var r = function _isNativeReflectConstruct() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var o, i = (0, v.default)(t);
                if (r) {
                    var a = (0, v.default)(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return (0, p.default)(this, o)
            }
        }
        var w = function (t) {
            (0, h.default)(ServiceAlreadyRegisteredError, t);
            var r = _createSuper(ServiceAlreadyRegisteredError);

            function ServiceAlreadyRegisteredError(t) {
                return (0, d.default)(this, ServiceAlreadyRegisteredError), r.call(this, "Service with name '" + t + "' is already registered with this container.")
            }
            return ServiceAlreadyRegisteredError
        }((0, y.default)(Error));
        r.ServiceAlreadyRegisteredError = w;
        var E = function (t) {
            (0, h.default)(ServiceNotFoundError, t);
            var r = _createSuper(ServiceNotFoundError);

            function ServiceNotFoundError(t) {
                return (0, d.default)(this, ServiceNotFoundError), r.call(this, "Service with name '" + t + "' cannot be found in this container.")
            }
            return ServiceNotFoundError
        }((0, y.default)(Error));
        r.ServiceNotFoundError = E;
        var S = function (t) {
            (0, h.default)(ExtractedServiceError, t);
            var r = _createSuper(ExtractedServiceError);

            function ExtractedServiceError(t) {
                return (0, d.default)(this, ExtractedServiceError), r.call(this, "Service with name '" + t + "' has been extracted from the core dai.js library into a discrete plugin. Please refer to the documentation here to install and add it to your configuration: \n\n https://github.com/makerdao/dai.js/wiki/Basic-Usage-(Plugins) \n\n")
            }
            return ExtractedServiceError
        }((0, y.default)(Error));

        function orderServices(t) {
            var r, o = [],
                i = [],
                a = _createForOfIteratorHelper(t);
            try {
                var u = function _loop() {
                    var t = r.value,
                        a = t.manager().name(),
                        u = t.manager().dependencies();
                    0 === u.length ? i.push(a) : u.forEach((function (t) {
                        return o.push([t, a])
                    }))
                };
                for (a.s(); !(r = a.n()).done;) u()
            } catch (t) {
                a.e(t)
            } finally {
                a.f()
            }
            return (0, g.default)((0, b.default)(o).concat(i))
        }
        r.ExtractedServiceError = S;
        var I = function () {
            function Container() {
                (0, d.default)(this, Container), this._services = {}, this.isAuthenticated = !1
            }
            var t;
            return (0, l.default)(Container, [{
                key: "register",
                value: function register(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (!m.default.isValidService(t)) throw new m.InvalidServiceError("Service must be an object with manager() method returning a valid ServiceManager");
                    r = r || t.manager().name();
                    var o = this.service(r, !1);
                    if (void 0 !== o && o !== t) throw new w(r);
                    return this._services[r] = t, this
                }
            }, {
                key: "service",
                value: function service(t) {
                    var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        o = ["exchange"];
                    if (!t) throw new Error("Provide a service name.");
                    if (!this._services[t] && r && o.includes(t)) throw new S(t);
                    if (!this._services[t] && r) throw new E(t);
                    return this._services[t]
                }
            }, {
                key: "getRegisteredServiceNames",
                value: function getRegisteredServiceNames() {
                    return Object.keys(this._services)
                }
            }, {
                key: "injectDependencies",
                value: function injectDependencies() {
                    var t, r = _createForOfIteratorHelper((0, _.default)(this._services));
                    try {
                        for (r.s(); !(t = r.n()).done;) {
                            var o, i = t.value.manager(),
                                a = _createForOfIteratorHelper(i.dependencies());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var u = o.value;
                                    if (!this._services[u]) throw new E(u);
                                    i.inject(u, this._services[u])
                                }
                            } catch (t) {
                                a.e(t)
                            } finally {
                                a.f()
                            }
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                }
            }, {
                key: "initialize",
                value: function initialize() {
                    return this._waitForServices((function (t) {
                        return t.manager().initialize()
                    }))
                }
            }, {
                key: "connect",
                value: function connect() {
                    return this._waitForServices((function (t) {
                        return t.manager().connect()
                    }))
                }
            }, {
                key: "authenticate",
                value: function authenticate() {
                    var t = this;
                    return this._waitForServices((function (t) {
                        return t.manager().authenticate()
                    })).then((function () {
                        t.isAuthenticated = !0
                    }))
                }
            }, {
                key: "_waitForServices",
                value: (t = (0, c.default)(u.default.mark((function _callee(t) {
                    var r, o, i;
                    return u.default.wrap((function _callee$(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                this._orderedServiceNames || (this._orderedServiceNames = orderServices((0, _.default)(this._services))), r = _createForOfIteratorHelper(this._orderedServiceNames), a.prev = 2, r.s();
                            case 4:
                                if ((o = r.n()).done) {
                                    a.next = 13;
                                    break
                                }
                                if (i = o.value, this._services[i]) {
                                    a.next = 9;
                                    break
                                }
                                throw new Error("No service for ".concat(i));
                            case 9:
                                return a.next = 11, t(this._services[i]);
                            case 11:
                                a.next = 4;
                                break;
                            case 13:
                                a.next = 18;
                                break;
                            case 15:
                                a.prev = 15, a.t0 = a.catch(2), r.e(a.t0);
                            case 18:
                                return a.prev = 18, r.f(), a.finish(18);
                            case 21:
                            case "end":
                                return a.stop()
                        }
                    }), _callee, this, [
                        [2, 15, 18, 21]
                    ])
                }))), function _waitForServices(r) {
                    return t.apply(this, arguments)
                })
            }]), Container
        }();
        r.default = I
    }, function (t, r) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function () {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function (t, r) {
        t.exports = function isLength(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        }
    }, function (t, r, o) {
        t.exports = o(33)
    }, function (t, r, o) {
        var i = o(0);
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), Object.defineProperty(r, "standardizeConfig", {
            enumerable: !0,
            get: function get() {
                return a.default
            }
        }), Object.defineProperty(r, "ServiceProvider", {
            enumerable: !0,
            get: function get() {
                return u.default
            }
        }), Object.defineProperty(r, "Container", {
            enumerable: !0,
            get: function get() {
                return c.default
            }
        }), Object.defineProperty(r, "LocalService", {
            enumerable: !0,
            get: function get() {
                return l.default
            }
        }), Object.defineProperty(r, "PublicService", {
            enumerable: !0,
            get: function get() {
                return d.default
            }
        }), Object.defineProperty(r, "PrivateService", {
            enumerable: !0,
            get: function get() {
                return h.default
            }
        }), Object.defineProperty(r, "ServiceManager", {
            enumerable: !0,
            get: function get() {
                return p.default
            }
        }), Object.defineProperty(r, "StateMachine", {
            enumerable: !0,
            get: function get() {
                return v.default
            }
        });
        var a = i(o(20)),
            u = i(o(45)),
            c = i(o(29)),
            l = i(o(120)),
            d = i(o(121)),
            h = i(o(122)),
            p = i(o(13)),
            v = i(o(22))
    }, function (t, r, o) {
        var i = o(35);

        function _get(r, o, a) {
            return "undefined" != typeof Reflect && Reflect.get ? t.exports = _get = Reflect.get : t.exports = _get = function _get(t, r, o) {
                var a = i(t, r);
                if (a) {
                    var u = Object.getOwnPropertyDescriptor(a, r);
                    return u.get ? u.get.call(o) : u.value
                }
            }, _get(r, o, a || r)
        }
        t.exports = _get
    }, function (t, r, o) {
        var i = o(2);
        t.exports = function _superPropBase(t, r) {
            for (; !Object.prototype.hasOwnProperty.call(t, r) && null !== (t = i(t)););
            return t
        }
    }, function (t, r) {
        t.exports = function _assertThisInitialized(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
    }, function (t, r) {
        t.exports = function _isNativeFunction(t) {
            return -1 !== Function.toString.call(t).indexOf("[native code]")
        }
    }, function (t, r, o) {
        var i = o(14),
            a = o(39);

        function _construct(r, o, u) {
            return a() ? t.exports = _construct = Reflect.construct : t.exports = _construct = function _construct(t, r, o) {
                var a = [null];
                a.push.apply(a, r);
                var u = new(Function.bind.apply(t, a));
                return o && i(u, o.prototype), u
            }, _construct.apply(null, arguments)
        }
        t.exports = _construct
    }, function (t, r) {
        t.exports = function _isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
            } catch (t) {
                return !1
            }
        }
    }, function (t, r, o) {
        var i = o(21),
            a = o(0);
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var u = a(o(1)),
            c = a(o(4)),
            l = a(o(22)),
            d = a(o(16)),
            h = i(o(7)),
            p = (0, a(o(41)).default)("dai:ServiceManagerBase");

        function _promisify(t) {
            return new Promise((function (r, o) {
                try {
                    r(t())
                } catch (t) {
                    o(t.message)
                }
            }))
        }
        var v = function () {
            function ServiceManagerBase() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if ((0, u.default)(this, ServiceManagerBase), null !== t && "function" != typeof t) throw new Error("Invalid argument init: not a function or null.");
                if (null === t && (t = function init() {
                        return Promise.resolve()
                    }), null !== r && "function" != typeof r) throw new Error("Invalid argument connect: not a function or null.");
                if (null === r && null !== o && (r = function connect() {
                        return Promise.resolve()
                    }), null !== o && "function" != typeof o) throw new Error("Invalid argument auth: not a function or null.");
                this._init = t, this._connect = r, this._auth = o, this._type = null === o ? null === r ? h.default.LOCAL : h.default.PUBLIC : h.default.PRIVATE, this._state = new l.default(d.default.CREATED, h.serviceTypeTransitions[this._type]), this._initPromise = null, this._connectPromise = null, this._authPromise = null
            }
            return (0, c.default)(ServiceManagerBase, [{
                key: "initialize",
                value: function initialize(t) {
                    var r = this;
                    if (this._state.inState(d.default.CREATED)) {
                        if (this._initPromise) throw new Error("Unexpected init promise in state CREATED.");
                        this._state.transitionTo(d.default.INITIALIZING), this._initPromise = _promisify((function () {
                            return r._init(t)
                        })).then((function () {
                            return r._state.transitionTo(r._type === h.default.LOCAL ? d.default.READY : d.default.OFFLINE)
                        }), (function (t) {
                            throw p(t), r._state.transitionTo(d.default.CREATED), t
                        }))
                    }
                    return this._initPromise
                }
            }, {
                key: "connect",
                value: function connect() {
                    var t = this;
                    return this._type === h.default.LOCAL ? this.initialize() : (this._state.inState([d.default.CREATED, d.default.INITIALIZING, d.default.OFFLINE]) && null === this._connectPromise && (this._connectPromise = this.initialize().then((function () {
                        return t._state.transitionTo(d.default.CONNECTING), _promisify((function () {
                            return t._connect((function () {
                                return t._disconnect()
                            }))
                        })).then((function () {
                            t._state.inState(d.default.CONNECTING) && t._state.transitionTo(t._type === h.default.PUBLIC ? d.default.READY : d.default.ONLINE)
                        }), (function (r) {
                            throw p("connect error:", r), t._state.inState(d.default.CONNECTING) && t._state.transitionTo(d.default.OFFLINE), r
                        }))
                    }))), this._connectPromise)
                }
            }, {
                key: "authenticate",
                value: function authenticate() {
                    var t = this;
                    return this._type !== h.default.PRIVATE ? this.connect() : (this._state.inState([d.default.CREATED, d.default.INITIALIZING, d.default.OFFLINE, d.default.CONNECTING, d.default.ONLINE]) && null === this._authPromise && (this._authPromise = this.connect().then((function () {
                        return t._state.transitionTo(d.default.AUTHENTICATING), _promisify((function () {
                            return t._auth((function () {
                                return t._deauthenticate()
                            }))
                        })).then((function () {
                            t._state.inState(d.default.AUTHENTICATING) && t._state.transitionTo(d.default.READY)
                        }), (function (r) {
                            p("authenticate error: " + r), t._state.inState(d.default.AUTHENTICATING) && t._state.transitionTo(d.default.ONLINE)
                        }))
                    }))), this._authPromise)
                }
            }, {
                key: "settings",
                value: function settings(t) {
                    return this._settings = t, this
                }
            }, {
                key: "state",
                value: function state() {
                    return this._state.state()
                }
            }, {
                key: "type",
                value: function type() {
                    return this._type
                }
            }, {
                key: "isInitialized",
                value: function isInitialized() {
                    return !this._state.inState([d.default.CREATED, d.default.INITIALIZING])
                }
            }, {
                key: "isConnected",
                value: function isConnected() {
                    return this._type === h.default.LOCAL ? null : this._state.inState([d.default.ONLINE, d.default.AUTHENTICATING, d.default.READY])
                }
            }, {
                key: "isAuthenticated",
                value: function isAuthenticated() {
                    return this._type === h.default.PRIVATE ? this._state.inState(d.default.READY) : null
                }
            }, {
                key: "isReady",
                value: function isReady() {
                    return this._state.inState(d.default.READY)
                }
            }, {
                key: "onInitialized",
                value: function onInitialized(t) {
                    return this._state.onStateChanged((function (r, o) {
                        r !== d.default.INITIALIZING || o !== d.default.OFFLINE && o !== d.default.READY || t()
                    })), this
                }
            }, {
                key: "onConnected",
                value: function onConnected(t) {
                    return this._state.onStateChanged((function (r, o) {
                        r !== d.default.CONNECTING || o !== d.default.ONLINE && o !== d.default.READY || t()
                    })), this
                }
            }, {
                key: "onDisconnected",
                value: function onDisconnected(t) {
                    return this._state.onStateChanged((function (r, o) {
                        o !== d.default.OFFLINE || r !== d.default.ONLINE && r !== d.default.READY || t()
                    })), this
                }
            }, {
                key: "onAuthenticated",
                value: function onAuthenticated(t) {
                    return this._state.onStateChanged((function (r, o) {
                        r === d.default.AUTHENTICATING && o === d.default.READY && t()
                    })), this
                }
            }, {
                key: "onDeauthenticated",
                value: function onDeauthenticated(t) {
                    return this.type() === h.default.PRIVATE && this._state.onStateChanged((function (r, o) {
                        o !== d.default.OFFLINE && o !== d.default.ONLINE || r !== d.default.READY || t()
                    })), this
                }
            }, {
                key: "onReady",
                value: function onReady(t) {
                    return this._state.onStateChanged((function (r, o) {
                        o === d.default.READY && t()
                    })), this
                }
            }, {
                key: "onStateChanged",
                value: function onStateChanged(t) {
                    return this._state.onStateChanged(t), this
                }
            }, {
                key: "_disconnect",
                value: function _disconnect() {
                    if (this._type === h.default.LOCAL) throw new Error("_disconnect must not be called on a Local Service");
                    this._state.inState(d.default.AUTHENTICATING) && this._deauthenticate(), this._state.inState([d.default.READY, d.default.ONLINE, d.default.CONNECTING]) && (this._authPromise = null, this._connectPromise = null, this._state.transitionTo(d.default.OFFLINE))
                }
            }, {
                key: "_deauthenticate",
                value: function _deauthenticate() {
                    if (this._type !== h.default.PRIVATE) throw new Error("_deauthenticate must not be called on a Local or Public Service");
                    this._state.inState([d.default.READY, d.default.AUTHENTICATING]) && (this._authPromise = null, this._state.transitionTo(d.default.ONLINE))
                }
            }]), ServiceManagerBase
        }();
        r.default = v
    }, function (t, r, o) {
        (function (i) {
            function load() {
                var t;
                try {
                    t = r.storage.debug
                } catch (t) {}
                return !t && void 0 !== i && "env" in i && (t = i.env.DEBUG), t
            }(r = t.exports = o(43)).log = function log() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }, r.formatArgs = function formatArgs(t) {
                var o = this.useColors;
                if (t[0] = (o ? "%c" : "") + this.namespace + (o ? " %c" : " ") + t[0] + (o ? "%c " : " ") + "+" + r.humanize(this.diff), !o) return;
                var i = "color: " + this.color;
                t.splice(1, 0, i, "color: inherit");
                var a = 0,
                    u = 0;
                t[0].replace(/%[a-zA-Z%]/g, (function (t) {
                    "%%" !== t && (a++, "%c" === t && (u = a))
                })), t.splice(u, 0, i)
            }, r.save = function save(t) {
                try {
                    null == t ? r.storage.removeItem("debug") : r.storage.debug = t
                } catch (t) {}
            }, r.load = load, r.useColors = function useColors() {
                if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }, r.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function localstorage() {
                try {
                    return window.localStorage
                } catch (t) {}
            }(), r.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], r.formatters.j = function (t) {
                try {
                    return JSON.stringify(t)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }, r.enable(load())
        }).call(this, o(42))
    }, function (t, r) {
        var o, i, a = t.exports = {};

        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined")
        }

        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined")
        }

        function runTimeout(t) {
            if (o === setTimeout) return setTimeout(t, 0);
            if ((o === defaultSetTimout || !o) && setTimeout) return o = setTimeout, setTimeout(t, 0);
            try {
                return o(t, 0)
            } catch (r) {
                try {
                    return o.call(null, t, 0)
                } catch (r) {
                    return o.call(this, t, 0)
                }
            }
        }! function () {
            try {
                o = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
            } catch (t) {
                o = defaultSetTimout
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
            } catch (t) {
                i = defaultClearTimeout
            }
        }();
        var u, c = [],
            l = !1,
            d = -1;

        function cleanUpNextTick() {
            l && u && (l = !1, u.length ? c = u.concat(c) : d = -1, c.length && drainQueue())
        }

        function drainQueue() {
            if (!l) {
                var t = runTimeout(cleanUpNextTick);
                l = !0;
                for (var r = c.length; r;) {
                    for (u = c, c = []; ++d < r;) u && u[d].run();
                    d = -1, r = c.length
                }
                u = null, l = !1,
                    function runClearTimeout(t) {
                        if (i === clearTimeout) return clearTimeout(t);
                        if ((i === defaultClearTimeout || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                        try {
                            return i(t)
                        } catch (r) {
                            try {
                                return i.call(null, t)
                            } catch (r) {
                                return i.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function Item(t, r) {
            this.fun = t, this.array = r
        }

        function noop() {}
        a.nextTick = function (t) {
            var r = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
            c.push(new Item(t, r)), 1 !== c.length || l || runTimeout(drainQueue)
        }, Item.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = noop, a.addListener = noop, a.once = noop, a.off = noop, a.removeListener = noop, a.removeAllListeners = noop, a.emit = noop, a.prependListener = noop, a.prependOnceListener = noop, a.listeners = function (t) {
            return []
        }, a.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, a.cwd = function () {
            return "/"
        }, a.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, a.umask = function () {
            return 0
        }
    }, function (t, r, o) {
        var i;

        function createDebug(t) {
            function debug() {
                if (debug.enabled) {
                    var t = debug,
                        o = +new Date,
                        a = o - (i || o);
                    t.diff = a, t.prev = i, t.curr = o, i = o;
                    for (var u = new Array(arguments.length), c = 0; c < u.length; c++) u[c] = arguments[c];
                    u[0] = r.coerce(u[0]), "string" != typeof u[0] && u.unshift("%O");
                    var l = 0;
                    u[0] = u[0].replace(/%([a-zA-Z%])/g, (function (o, i) {
                        if ("%%" === o) return o;
                        l++;
                        var a = r.formatters[i];
                        if ("function" == typeof a) {
                            var c = u[l];
                            o = a.call(t, c), u.splice(l, 1), l--
                        }
                        return o
                    })), r.formatArgs.call(t, u);
                    var d = debug.log || r.log || console.log.bind(console);
                    d.apply(t, u)
                }
            }
            return debug.namespace = t, debug.enabled = r.enabled(t), debug.useColors = r.useColors(), debug.color = function selectColor(t) {
                var o, i = 0;
                for (o in t) i = (i << 5) - i + t.charCodeAt(o), i |= 0;
                return r.colors[Math.abs(i) % r.colors.length]
            }(t), "function" == typeof r.init && r.init(debug), debug
        }(r = t.exports = createDebug.debug = createDebug.default = createDebug).coerce = function coerce(t) {
            return t instanceof Error ? t.stack || t.message : t
        }, r.disable = function disable() {
            r.enable("")
        }, r.enable = function enable(t) {
            r.save(t), r.names = [], r.skips = [];
            for (var o = ("string" == typeof t ? t : "").split(/[\s,]+/), i = o.length, a = 0; a < i; a++) o[a] && ("-" === (t = o[a].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + t.substr(1) + "$")) : r.names.push(new RegExp("^" + t + "$")))
        }, r.enabled = function enabled(t) {
            var o, i;
            for (o = 0, i = r.skips.length; o < i; o++)
                if (r.skips[o].test(t)) return !1;
            for (o = 0, i = r.names.length; o < i; o++)
                if (r.names[o].test(t)) return !0;
            return !1
        }, r.humanize = o(44), r.names = [], r.skips = [], r.formatters = {}
    }, function (t, r) {
        var o = 1e3,
            i = 6e4,
            a = 60 * i,
            u = 24 * a;

        function plural(t, r, o) {
            if (!(t < r)) return t < 1.5 * r ? Math.floor(t / r) + " " + o : Math.ceil(t / r) + " " + o + "s"
        }
        t.exports = function (t, r) {
            r = r || {};
            var c = typeof t;
            if ("string" === c && t.length > 0) return function parse(t) {
                if ((t = String(t)).length > 100) return;
                var r = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                if (!r) return;
                var c = parseFloat(r[1]);
                switch ((r[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return 315576e5 * c;
                    case "days":
                    case "day":
                    case "d":
                        return c * u;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return c * a;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return c * i;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return c * o;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return c;
                    default:
                        return
                }
            }(t);
            if ("number" === c && !1 === isNaN(t)) return r.long ? function fmtLong(t) {
                return plural(t, u, "day") || plural(t, a, "hour") || plural(t, i, "minute") || plural(t, o, "second") || t + " ms"
            }(t) : function fmtShort(t) {
                if (t >= u) return Math.round(t / u) + "d";
                if (t >= a) return Math.round(t / a) + "h";
                if (t >= i) return Math.round(t / i) + "m";
                if (t >= o) return Math.round(t / o) + "s";
                return t + "ms"
            }(t);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
        }
    }, function (t, r, o) {
        var i = o(0);
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var a = i(o(3)),
            u = i(o(46)),
            c = i(o(1)),
            l = i(o(4)),
            d = i(o(23)),
            h = i(o(29)),
            p = i(o(20));

        function _createForOfIteratorHelper(t) {
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = function _unsupportedIterableToArray(t, r) {
                        if (!t) return;
                        if ("string" == typeof t) return _arrayLikeToArray(t, r);
                        var o = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === o && t.constructor && (o = t.constructor.name);
                        if ("Map" === o || "Set" === o) return Array.from(t);
                        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return _arrayLikeToArray(t, r)
                    }(t))) {
                    var r = 0,
                        o = function F() {};
                    return {
                        s: o,
                        n: function n() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a, u = !0,
                c = !1;
            return {
                s: function s() {
                    i = t[Symbol.iterator]()
                },
                n: function n() {
                    var t = i.next();
                    return u = t.done, t
                },
                e: function e(t) {
                    c = !0, a = t
                },
                f: function f() {
                    try {
                        u || null == i.return || i.return()
                    } finally {
                        if (c) throw a
                    }
                }
            }
        }

        function _arrayLikeToArray(t, r) {
            (null == r || r > t.length) && (r = t.length);
            for (var o = 0, i = new Array(r); o < r; o++) i[o] = t[o];
            return i
        }
        var v = function () {
            function ServiceProvider(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = r.services,
                    i = void 0 === o ? {} : o,
                    a = r.defaults,
                    u = void 0 === a ? {} : a,
                    l = r.disabled,
                    d = void 0 === l ? {} : l;
                (0, c.default)(this, ServiceProvider), this._config = t, this._services = i, this._resolver = {
                    defaults: u,
                    disabled: d
                }
            }
            return (0, l.default)(ServiceProvider, [{
                key: "supports",
                value: function supports(t) {
                    return !!this._services[t]
                }
            }, {
                key: "buildContainer",
                value: function buildContainer() {
                    var t = new h.default;
                    for (var r in this._config) {
                        var o = (0, p.default)(r, this._config[r], this._resolver),
                            i = (0, u.default)(o, 2),
                            c = i[0],
                            l = i[1],
                            d = void 0;
                        if ("object" == (0, a.default)(c)) d = c;
                        else if ("function" == typeof c) d = new c;
                        else {
                            if (!this.supports(c) && "exchange" === r) throw new Error("This service has been extracted from dai.js. Please refer to the documentation to add it as a plugin: \n\n https://github.com/makerdao/dai.js/wiki/Basic-Usage-(Plugins)");
                            if (!this.supports(c)) throw new Error("Unsupported service in configuration: " + c);
                            d = new this._services[c]
                        }
                        var v = d.manager().name();
                        if (v !== r) throw new Error('Role mismatch: "'.concat(v, '", "').concat(r, '"'));
                        d.manager().settings(l), t.register(d, r)
                    }
                    return this._registerDependencies(t), t.injectDependencies(), this._container = t, t
                }
            }, {
                key: "_registerDependencies",
                value: function _registerDependencies(t) {
                    var r = t.getRegisteredServiceNames(),
                        o = r.reduce((function (r, o) {
                            var i = t.service(o).manager().dependencies();
                            return (0, d.default)(r.concat(i))
                        }), []).filter((function (t) {
                            return !r.includes(t)
                        }));
                    if (0 !== o.length) {
                        var i, a = _createForOfIteratorHelper(o);
                        try {
                            for (a.s(); !(i = a.n()).done;) {
                                var u = i.value,
                                    c = this._resolver.defaults[u];
                                if ("string" == typeof c && (c = this._services[c]), !c) throw new Error('No service found for "'.concat(u, '"'));
                                t.register(new c, u)
                            }
                        } catch (t) {
                            a.e(t)
                        } finally {
                            a.f()
                        }
                        this._registerDependencies(t)
                    }
                }
            }, {
                key: "service",
                value: function service(t) {
                    return this._container || this.buildContainer(), this._container.service(t)
                }
            }]), ServiceProvider
        }();
        r.default = v
    }, function (t, r, o) {
        var i = o(47),
            a = o(48),
            u = o(49),
            c = o(51);
        t.exports = function _slicedToArray(t, r) {
            return i(t) || a(t, r) || u(t, r) || c()
        }
    }, function (t, r) {
        t.exports = function _arrayWithHoles(t) {
            if (Array.isArray(t)) return t
        }
    }, function (t, r) {
        t.exports = function _iterableToArrayLimit(t, r) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var o = [],
                    i = !0,
                    a = !1,
                    u = void 0;
                try {
                    for (var c, l = t[Symbol.iterator](); !(i = (c = l.next()).done) && (o.push(c.value), !r || o.length !== r); i = !0);
                } catch (t) {
                    a = !0, u = t
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (a) throw u
                    }
                }
                return o
            }
        }
    }, function (t, r, o) {
        var i = o(50);
        t.exports = function _unsupportedIterableToArray(t, r) {
            if (t) {
                if ("string" == typeof t) return i(t, r);
                var o = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? i(t, r) : void 0
            }
        }
    }, function (t, r) {
        t.exports = function _arrayLikeToArray(t, r) {
            (null == r || r > t.length) && (r = t.length);
            for (var o = 0, i = new Array(r); o < r; o++) i[o] = t[o];
            return i
        }
    }, function (t, r) {
        t.exports = function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    }, function (t, r, o) {
        var i = o(53),
            a = o(85),
            u = o(90),
            c = o(91),
            l = o(92),
            d = o(28);
        t.exports = function baseUniq(t, r, o) {
            var h = -1,
                p = a,
                v = t.length,
                y = !0,
                _ = [],
                g = _;
            if (o) y = !1, p = u;
            else if (v >= 200) {
                var m = r ? null : l(t);
                if (m) return d(m);
                y = !1, p = c, g = new i
            } else g = r ? [] : _;
            e: for (; ++h < v;) {
                var b = t[h],
                    w = r ? r(b) : b;
                if (b = o || 0 !== b ? b : 0, y && w == w) {
                    for (var E = g.length; E--;)
                        if (g[E] === w) continue e;
                    r && g.push(w), _.push(b)
                } else p(g, w, o) || (g !== _ && g.push(w), _.push(b))
            }
            return _
        }
    }, function (t, r, o) {
        var i = o(54),
            a = o(83),
            u = o(84);

        function SetCache(t) {
            var r = -1,
                o = null == t ? 0 : t.length;
            for (this.__data__ = new i; ++r < o;) this.add(t[r])
        }
        SetCache.prototype.add = SetCache.prototype.push = a, SetCache.prototype.has = u, t.exports = SetCache
    }, function (t, r, o) {
        var i = o(55),
            a = o(78),
            u = o(80),
            c = o(81),
            l = o(82);

        function MapCache(t) {
            var r = -1,
                o = null == t ? 0 : t.length;
            for (this.clear(); ++r < o;) {
                var i = t[r];
                this.set(i[0], i[1])
            }
        }
        MapCache.prototype.clear = i, MapCache.prototype.delete = a, MapCache.prototype.get = u, MapCache.prototype.has = c, MapCache.prototype.set = l, t.exports = MapCache
    }, function (t, r, o) {
        var i = o(56),
            a = o(70),
            u = o(77);
        t.exports = function mapCacheClear() {
            this.size = 0, this.__data__ = {
                hash: new i,
                map: new(u || a),
                string: new i
            }
        }
    }, function (t, r, o) {
        var i = o(57),
            a = o(66),
            u = o(67),
            c = o(68),
            l = o(69);

        function Hash(t) {
            var r = -1,
                o = null == t ? 0 : t.length;
            for (this.clear(); ++r < o;) {
                var i = t[r];
                this.set(i[0], i[1])
            }
        }
        Hash.prototype.clear = i, Hash.prototype.delete = a, Hash.prototype.get = u, Hash.prototype.has = c, Hash.prototype.set = l, t.exports = Hash
    }, function (t, r, o) {
        var i = o(10);
        t.exports = function hashClear() {
            this.__data__ = i ? i(null) : {}, this.size = 0
        }
    }, function (t, r, o) {
        var i = o(24),
            a = o(62),
            u = o(27),
            c = o(64),
            l = /^\[object .+?Constructor\]$/,
            d = Function.prototype,
            h = Object.prototype,
            p = d.toString,
            v = h.hasOwnProperty,
            y = RegExp("^" + p.call(v).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = function baseIsNative(t) {
            return !(!u(t) || a(t)) && (i(t) ? y : l).test(c(t))
        }
    }, function (t, r) {
        var o;
        o = function () {
            return this
        }();
        try {
            o = o || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (o = window)
        }
        t.exports = o
    }, function (t, r, o) {
        var i = o(25),
            a = Object.prototype,
            u = a.hasOwnProperty,
            c = a.toString,
            l = i ? i.toStringTag : void 0;
        t.exports = function getRawTag(t) {
            var r = u.call(t, l),
                o = t[l];
            try {
                t[l] = void 0;
                var i = !0
            } catch (t) {}
            var a = c.call(t);
            return i && (r ? t[l] = o : delete t[l]), a
        }
    }, function (t, r) {
        var o = Object.prototype.toString;
        t.exports = function objectToString(t) {
            return o.call(t)
        }
    }, function (t, r, o) {
        var i, a = o(63),
            u = (i = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "";
        t.exports = function isMasked(t) {
            return !!u && u in t
        }
    }, function (t, r, o) {
        var i = o(8)["__core-js_shared__"];
        t.exports = i
    }, function (t, r) {
        var o = Function.prototype.toString;
        t.exports = function toSource(t) {
            if (null != t) {
                try {
                    return o.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }
    }, function (t, r) {
        t.exports = function getValue(t, r) {
            return null == t ? void 0 : t[r]
        }
    }, function (t, r) {
        t.exports = function hashDelete(t) {
            var r = this.has(t) && delete this.__data__[t];
            return this.size -= r ? 1 : 0, r
        }
    }, function (t, r, o) {
        var i = o(10),
            a = Object.prototype.hasOwnProperty;
        t.exports = function hashGet(t) {
            var r = this.__data__;
            if (i) {
                var o = r[t];
                return "__lodash_hash_undefined__" === o ? void 0 : o
            }
            return a.call(r, t) ? r[t] : void 0
        }
    }, function (t, r, o) {
        var i = o(10),
            a = Object.prototype.hasOwnProperty;
        t.exports = function hashHas(t) {
            var r = this.__data__;
            return i ? void 0 !== r[t] : a.call(r, t)
        }
    }, function (t, r, o) {
        var i = o(10);
        t.exports = function hashSet(t, r) {
            var o = this.__data__;
            return this.size += this.has(t) ? 0 : 1, o[t] = i && void 0 === r ? "__lodash_hash_undefined__" : r, this
        }
    }, function (t, r, o) {
        var i = o(71),
            a = o(72),
            u = o(74),
            c = o(75),
            l = o(76);

        function ListCache(t) {
            var r = -1,
                o = null == t ? 0 : t.length;
            for (this.clear(); ++r < o;) {
                var i = t[r];
                this.set(i[0], i[1])
            }
        }
        ListCache.prototype.clear = i, ListCache.prototype.delete = a, ListCache.prototype.get = u, ListCache.prototype.has = c, ListCache.prototype.set = l, t.exports = ListCache
    }, function (t, r) {
        t.exports = function listCacheClear() {
            this.__data__ = [], this.size = 0
        }
    }, function (t, r, o) {
        var i = o(11),
            a = Array.prototype.splice;
        t.exports = function listCacheDelete(t) {
            var r = this.__data__,
                o = i(r, t);
            return !(o < 0) && (o == r.length - 1 ? r.pop() : a.call(r, o, 1), --this.size, !0)
        }
    }, function (t, r) {
        t.exports = function eq(t, r) {
            return t === r || t != t && r != r
        }
    }, function (t, r, o) {
        var i = o(11);
        t.exports = function listCacheGet(t) {
            var r = this.__data__,
                o = i(r, t);
            return o < 0 ? void 0 : r[o][1]
        }
    }, function (t, r, o) {
        var i = o(11);
        t.exports = function listCacheHas(t) {
            return i(this.__data__, t) > -1
        }
    }, function (t, r, o) {
        var i = o(11);
        t.exports = function listCacheSet(t, r) {
            var o = this.__data__,
                a = i(o, t);
            return a < 0 ? (++this.size, o.push([t, r])) : o[a][1] = r, this
        }
    }, function (t, r, o) {
        var i = o(17)(o(8), "Map");
        t.exports = i
    }, function (t, r, o) {
        var i = o(12);
        t.exports = function mapCacheDelete(t) {
            var r = i(this, t).delete(t);
            return this.size -= r ? 1 : 0, r
        }
    }, function (t, r) {
        t.exports = function isKeyable(t) {
            var r = typeof t;
            return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t
        }
    }, function (t, r, o) {
        var i = o(12);
        t.exports = function mapCacheGet(t) {
            return i(this, t).get(t)
        }
    }, function (t, r, o) {
        var i = o(12);
        t.exports = function mapCacheHas(t) {
            return i(this, t).has(t)
        }
    }, function (t, r, o) {
        var i = o(12);
        t.exports = function mapCacheSet(t, r) {
            var o = i(this, t),
                a = o.size;
            return o.set(t, r), this.size += o.size == a ? 0 : 1, this
        }
    }, function (t, r) {
        t.exports = function setCacheAdd(t) {
            return this.__data__.set(t, "__lodash_hash_undefined__"), this
        }
    }, function (t, r) {
        t.exports = function setCacheHas(t) {
            return this.__data__.has(t)
        }
    }, function (t, r, o) {
        var i = o(86);
        t.exports = function arrayIncludes(t, r) {
            return !!(null == t ? 0 : t.length) && i(t, r, 0) > -1
        }
    }, function (t, r, o) {
        var i = o(87),
            a = o(88),
            u = o(89);
        t.exports = function baseIndexOf(t, r, o) {
            return r == r ? u(t, r, o) : i(t, a, o)
        }
    }, function (t, r) {
        t.exports = function baseFindIndex(t, r, o, i) {
            for (var a = t.length, u = o + (i ? 1 : -1); i ? u-- : ++u < a;)
                if (r(t[u], u, t)) return u;
            return -1
        }
    }, function (t, r) {
        t.exports = function baseIsNaN(t) {
            return t != t
        }
    }, function (t, r) {
        t.exports = function strictIndexOf(t, r, o) {
            for (var i = o - 1, a = t.length; ++i < a;)
                if (t[i] === r) return i;
            return -1
        }
    }, function (t, r) {
        t.exports = function arrayIncludesWith(t, r, o) {
            for (var i = -1, a = null == t ? 0 : t.length; ++i < a;)
                if (o(r, t[i])) return !0;
            return !1
        }
    }, function (t, r) {
        t.exports = function cacheHas(t, r) {
            return t.has(r)
        }
    }, function (t, r, o) {
        var i = o(93),
            a = o(94),
            u = o(28),
            c = i && 1 / u(new i([, -0]))[1] == 1 / 0 ? function (t) {
                return new i(t)
            } : a;
        t.exports = c
    }, function (t, r, o) {
        var i = o(17)(o(8), "Set");
        t.exports = i
    }, function (t, r) {
        t.exports = function noop() {}
    }, function (t, r, o) {
        t.exports = o(96)
    }, function (t, r, o) {
        var i = function (t) {
            var r = Object.prototype,
                o = r.hasOwnProperty,
                i = "function" == typeof Symbol ? Symbol : {},
                a = i.iterator || "@@iterator",
                u = i.asyncIterator || "@@asyncIterator",
                c = i.toStringTag || "@@toStringTag";

            function wrap(t, r, o, i) {
                var a = r && r.prototype instanceof Generator ? r : Generator,
                    u = Object.create(a.prototype),
                    c = new Context(i || []);
                return u._invoke = function makeInvokeMethod(t, r, o) {
                    var i = "suspendedStart";
                    return function invoke(a, u) {
                        if ("executing" === i) throw new Error("Generator is already running");
                        if ("completed" === i) {
                            if ("throw" === a) throw u;
                            return doneResult()
                        }
                        for (o.method = a, o.arg = u;;) {
                            var c = o.delegate;
                            if (c) {
                                var d = maybeInvokeDelegate(c, o);
                                if (d) {
                                    if (d === l) continue;
                                    return d
                                }
                            }
                            if ("next" === o.method) o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if ("suspendedStart" === i) throw i = "completed", o.arg;
                                o.dispatchException(o.arg)
                            } else "return" === o.method && o.abrupt("return", o.arg);
                            i = "executing";
                            var h = tryCatch(t, r, o);
                            if ("normal" === h.type) {
                                if (i = o.done ? "completed" : "suspendedYield", h.arg === l) continue;
                                return {
                                    value: h.arg,
                                    done: o.done
                                }
                            }
                            "throw" === h.type && (i = "completed", o.method = "throw", o.arg = h.arg)
                        }
                    }
                }(t, o, c), u
            }

            function tryCatch(t, r, o) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(r, o)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = wrap;
            var l = {};

            function Generator() {}

            function GeneratorFunction() {}

            function GeneratorFunctionPrototype() {}
            var d = {};
            d[a] = function () {
                return this
            };
            var h = Object.getPrototypeOf,
                p = h && h(h(values([])));
            p && p !== r && o.call(p, a) && (d = p);
            var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(d);

            function defineIteratorMethods(t) {
                ["next", "throw", "return"].forEach((function (r) {
                    t[r] = function (t) {
                        return this._invoke(r, t)
                    }
                }))
            }

            function AsyncIterator(t, r) {
                var i;
                this._invoke = function enqueue(a, u) {
                    function callInvokeWithMethodAndArg() {
                        return new r((function (i, c) {
                            ! function invoke(i, a, u, c) {
                                var l = tryCatch(t[i], t, a);
                                if ("throw" !== l.type) {
                                    var d = l.arg,
                                        h = d.value;
                                    return h && "object" == typeof h && o.call(h, "__await") ? r.resolve(h.__await).then((function (t) {
                                        invoke("next", t, u, c)
                                    }), (function (t) {
                                        invoke("throw", t, u, c)
                                    })) : r.resolve(h).then((function (t) {
                                        d.value = t, u(d)
                                    }), (function (t) {
                                        return invoke("throw", t, u, c)
                                    }))
                                }
                                c(l.arg)
                            }(a, u, i, c)
                        }))
                    }
                    return i = i ? i.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg()
                }
            }

            function maybeInvokeDelegate(t, r) {
                var o = t.iterator[r.method];
                if (void 0 === o) {
                    if (r.delegate = null, "throw" === r.method) {
                        if (t.iterator.return && (r.method = "return", r.arg = void 0, maybeInvokeDelegate(t, r), "throw" === r.method)) return l;
                        r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return l
                }
                var i = tryCatch(o, t.iterator, r.arg);
                if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, l;
                var a = i.arg;
                return a ? a.done ? (r[t.resultName] = a.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, l) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, l)
            }

            function pushTryEntry(t) {
                var r = {
                    tryLoc: t[0]
                };
                1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
            }

            function resetTryEntry(t) {
                var r = t.completion || {};
                r.type = "normal", delete r.arg, t.completion = r
            }

            function Context(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(pushTryEntry, this), this.reset(!0)
            }

            function values(t) {
                if (t) {
                    var r = t[a];
                    if (r) return r.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var i = -1,
                            u = function next() {
                                for (; ++i < t.length;)
                                    if (o.call(t, i)) return next.value = t[i], next.done = !1, next;
                                return next.value = void 0, next.done = !0, next
                            };
                        return u.next = u
                    }
                }
                return {
                    next: doneResult
                }
            }

            function doneResult() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return GeneratorFunction.prototype = v.constructor = GeneratorFunctionPrototype, GeneratorFunctionPrototype.constructor = GeneratorFunction, GeneratorFunctionPrototype[c] = GeneratorFunction.displayName = "GeneratorFunction", t.isGeneratorFunction = function (t) {
                var r = "function" == typeof t && t.constructor;
                return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name))
            }, t.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(v), t
            }, t.awrap = function (t) {
                return {
                    __await: t
                }
            }, defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[u] = function () {
                return this
            }, t.AsyncIterator = AsyncIterator, t.async = function (r, o, i, a, u) {
                void 0 === u && (u = Promise);
                var c = new AsyncIterator(wrap(r, o, i, a), u);
                return t.isGeneratorFunction(o) ? c : c.next().then((function (t) {
                    return t.done ? t.value : c.next()
                }))
            }, defineIteratorMethods(v), v[c] = "Generator", v[a] = function () {
                return this
            }, v.toString = function () {
                return "[object Generator]"
            }, t.keys = function (t) {
                var r = [];
                for (var o in t) r.push(o);
                return r.reverse(),
                    function next() {
                        for (; r.length;) {
                            var o = r.pop();
                            if (o in t) return next.value = o, next.done = !1, next
                        }
                        return next.done = !0, next
                    }
            }, t.values = values, Context.prototype = {
                constructor: Context,
                reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !t)
                        for (var r in this) "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0)
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function (t) {
                    if (this.done) throw t;
                    var r = this;

                    function handle(o, i) {
                        return u.type = "throw", u.arg = t, r.next = o, i && (r.method = "next", r.arg = void 0), !!i
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            u = a.completion;
                        if ("root" === a.tryLoc) return handle("end");
                        if (a.tryLoc <= this.prev) {
                            var c = o.call(a, "catchLoc"),
                                l = o.call(a, "finallyLoc");
                            if (c && l) {
                                if (this.prev < a.catchLoc) return handle(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return handle(a.finallyLoc)
                            } else if (c) {
                                if (this.prev < a.catchLoc) return handle(a.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return handle(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function (t, r) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i];
                        if (a.tryLoc <= this.prev && o.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var u = a;
                            break
                        }
                    }
                    u && ("break" === t || "continue" === t) && u.tryLoc <= r && r <= u.finallyLoc && (u = null);
                    var c = u ? u.completion : {};
                    return c.type = t, c.arg = r, u ? (this.method = "next", this.next = u.finallyLoc, l) : this.complete(c)
                },
                complete: function (t, r) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), l
                },
                finish: function (t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.finallyLoc === t) return this.complete(o.completion, o.afterLoc), resetTryEntry(o), l
                    }
                },
                catch: function (t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc === t) {
                            var i = o.completion;
                            if ("throw" === i.type) {
                                var a = i.arg;
                                resetTryEntry(o)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function (t, r, o) {
                    return this.delegate = {
                        iterator: values(t),
                        resultName: r,
                        nextLoc: o
                    }, "next" === this.method && (this.arg = void 0), l
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = i
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(i)
        }
    }, function (t, r) {
        function asyncGeneratorStep(t, r, o, i, a, u, c) {
            try {
                var l = t[u](c),
                    d = l.value
            } catch (t) {
                return void o(t)
            }
            l.done ? r(d) : Promise.resolve(d).then(i, a)
        }
        t.exports = function _asyncToGenerator(t) {
            return function () {
                var r = this,
                    o = arguments;
                return new Promise((function (i, a) {
                    var u = t.apply(r, o);

                    function _next(t) {
                        asyncGeneratorStep(u, i, a, _next, _throw, "next", t)
                    }

                    function _throw(t) {
                        asyncGeneratorStep(u, i, a, _next, _throw, "throw", t)
                    }
                    _next(void 0)
                }))
            }
        }
    }, function (t, r, o) {
        var i = o(99),
            a = o(101);
        t.exports = function values(t) {
            return null == t ? [] : i(t, a(t))
        }
    }, function (t, r, o) {
        var i = o(100);
        t.exports = function baseValues(t, r) {
            return i(r, (function (r) {
                return t[r]
            }))
        }
    }, function (t, r) {
        t.exports = function arrayMap(t, r) {
            for (var o = -1, i = null == t ? 0 : t.length, a = Array(i); ++o < i;) a[o] = r(t[o], o, t);
            return a
        }
    }, function (t, r, o) {
        var i = o(102),
            a = o(114),
            u = o(118);
        t.exports = function keys(t) {
            return u(t) ? i(t) : a(t)
        }
    }, function (t, r, o) {
        var i = o(103),
            a = o(104),
            u = o(106),
            c = o(107),
            l = o(109),
            d = o(110),
            h = Object.prototype.hasOwnProperty;
        t.exports = function arrayLikeKeys(t, r) {
            var o = u(t),
                p = !o && a(t),
                v = !o && !p && c(t),
                y = !o && !p && !v && d(t),
                _ = o || p || v || y,
                g = _ ? i(t.length, String) : [],
                m = g.length;
            for (var b in t) !r && !h.call(t, b) || _ && ("length" == b || v && ("offset" == b || "parent" == b) || y && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || l(b, m)) || g.push(b);
            return g
        }
    }, function (t, r) {
        t.exports = function baseTimes(t, r) {
            for (var o = -1, i = Array(t); ++o < t;) i[o] = r(o);
            return i
        }
    }, function (t, r, o) {
        var i = o(105),
            a = o(19),
            u = Object.prototype,
            c = u.hasOwnProperty,
            l = u.propertyIsEnumerable,
            d = i(function () {
                return arguments
            }()) ? i : function (t) {
                return a(t) && c.call(t, "callee") && !l.call(t, "callee")
            };
        t.exports = d
    }, function (t, r, o) {
        var i = o(18),
            a = o(19);
        t.exports = function baseIsArguments(t) {
            return a(t) && "[object Arguments]" == i(t)
        }
    }, function (t, r) {
        var o = Array.isArray;
        t.exports = o
    }, function (t, r, o) {
        (function (t) {
            var i = o(8),
                a = o(108),
                u = r && !r.nodeType && r,
                c = u && "object" == typeof t && t && !t.nodeType && t,
                l = c && c.exports === u ? i.Buffer : void 0,
                d = (l ? l.isBuffer : void 0) || a;
            t.exports = d
        }).call(this, o(30)(t))
    }, function (t, r) {
        t.exports = function stubFalse() {
            return !1
        }
    }, function (t, r) {
        var o = /^(?:0|[1-9]\d*)$/;
        t.exports = function isIndex(t, r) {
            var i = typeof t;
            return !!(r = null == r ? 9007199254740991 : r) && ("number" == i || "symbol" != i && o.test(t)) && t > -1 && t % 1 == 0 && t < r
        }
    }, function (t, r, o) {
        var i = o(111),
            a = o(112),
            u = o(113),
            c = u && u.isTypedArray,
            l = c ? a(c) : i;
        t.exports = l
    }, function (t, r, o) {
        var i = o(18),
            a = o(31),
            u = o(19),
            c = {};
        c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1, t.exports = function baseIsTypedArray(t) {
            return u(t) && a(t.length) && !!c[i(t)]
        }
    }, function (t, r) {
        t.exports = function baseUnary(t) {
            return function (r) {
                return t(r)
            }
        }
    }, function (t, r, o) {
        (function (t) {
            var i = o(26),
                a = r && !r.nodeType && r,
                u = a && "object" == typeof t && t && !t.nodeType && t,
                c = u && u.exports === a && i.process,
                l = function () {
                    try {
                        var t = u && u.require && u.require("util").types;
                        return t || c && c.binding && c.binding("util")
                    } catch (t) {}
                }();
            t.exports = l
        }).call(this, o(30)(t))
    }, function (t, r, o) {
        var i = o(115),
            a = o(116),
            u = Object.prototype.hasOwnProperty;
        t.exports = function baseKeys(t) {
            if (!i(t)) return a(t);
            var r = [];
            for (var o in Object(t)) u.call(t, o) && "constructor" != o && r.push(o);
            return r
        }
    }, function (t, r) {
        var o = Object.prototype;
        t.exports = function isPrototype(t) {
            var r = t && t.constructor;
            return t === ("function" == typeof r && r.prototype || o)
        }
    }, function (t, r, o) {
        var i = o(117)(Object.keys, Object);
        t.exports = i
    }, function (t, r) {
        t.exports = function overArg(t, r) {
            return function (o) {
                return t(r(o))
            }
        }
    }, function (t, r, o) {
        var i = o(24),
            a = o(31);
        t.exports = function isArrayLike(t) {
            return null != t && a(t.length) && !i(t)
        }
    }, function (t, r) {
        function toposort(t, r) {
            var o = t.length,
                i = new Array(o),
                a = {},
                u = o,
                c = function makeOutgoingEdges(t) {
                    for (var r = new Map, o = 0, i = t.length; o < i; o++) {
                        var a = t[o];
                        r.has(a[0]) || r.set(a[0], new Set), r.has(a[1]) || r.set(a[1], new Set), r.get(a[0]).add(a[1])
                    }
                    return r
                }(r),
                l = function makeNodesHash(t) {
                    for (var r = new Map, o = 0, i = t.length; o < i; o++) r.set(t[o], o);
                    return r
                }(t);
            for (r.forEach((function (t) {
                    if (!l.has(t[0]) || !l.has(t[1])) throw new Error("Unknown node. There is an unknown node in the supplied edges.")
                })); u--;) a[u] || visit(t[u], u, new Set);
            return i;

            function visit(t, r, u) {
                if (u.has(t)) {
                    var d;
                    try {
                        d = ", node was:" + JSON.stringify(t)
                    } catch (t) {
                        d = ""
                    }
                    throw new Error("Cyclic dependency" + d)
                }
                if (!l.has(t)) throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(t));
                if (!a[r]) {
                    a[r] = !0;
                    var h = c.get(t) || new Set;
                    if (r = (h = Array.from(h)).length) {
                        u.add(t);
                        do {
                            var p = h[--r];
                            visit(p, l.get(p), u)
                        } while (r);
                        u.delete(t)
                    }
                    i[--o] = t
                }
            }
        }
        t.exports = function (t) {
            return toposort(function uniqueNodes(t) {
                for (var r = new Set, o = 0, i = t.length; o < i; o++) {
                    var a = t[o];
                    r.add(a[0]), r.add(a[1])
                }
                return Array.from(r)
            }(t), t)
        }, t.exports.array = toposort
    }, function (t, r, o) {
        var i = o(0);
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var a = i(o(1)),
            u = i(o(5)),
            c = i(o(6)),
            l = i(o(2)),
            d = i(o(7));

        function _createSuper(t) {
            var r = function _isNativeReflectConstruct() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var o, i = (0, l.default)(t);
                if (r) {
                    var a = (0, l.default)(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return (0, c.default)(this, o)
            }
        }
        var h = function (t) {
            (0, u.default)(LocalService, t);
            var r = _createSuper(LocalService);

            function LocalService(t) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return (0, a.default)(this, LocalService), r.call(this, d.default.LOCAL, t, o)
            }
            return LocalService
        }(i(o(9)).default);
        r.default = h
    }, function (t, r, o) {
        var i = o(0);
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var a = i(o(1)),
            u = i(o(5)),
            c = i(o(6)),
            l = i(o(2)),
            d = i(o(7));

        function _createSuper(t) {
            var r = function _isNativeReflectConstruct() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var o, i = (0, l.default)(t);
                if (r) {
                    var a = (0, l.default)(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return (0, c.default)(this, o)
            }
        }
        var h = function (t) {
            (0, u.default)(PublicService, t);
            var r = _createSuper(PublicService);

            function PublicService(t) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return (0, a.default)(this, PublicService), r.call(this, d.default.PUBLIC, t, o)
            }
            return PublicService
        }(i(o(9)).default);
        r.default = h
    }, function (t, r, o) {
        var i = o(0);
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = void 0;
        var a = i(o(1)),
            u = i(o(5)),
            c = i(o(6)),
            l = i(o(2)),
            d = i(o(7));

        function _createSuper(t) {
            var r = function _isNativeReflectConstruct() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var o, i = (0, l.default)(t);
                if (r) {
                    var a = (0, l.default)(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return (0, c.default)(this, o)
            }
        }
        var h = function (t) {
            (0, u.default)(PrivateService, t);
            var r = _createSuper(PrivateService);

            function PrivateService(t) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return (0, a.default)(this, PrivateService), r.call(this, d.default.PRIVATE, t, o)
            }
            return PrivateService
        }(i(o(9)).default);
        r.default = h
    }])
}));
//# sourceMappingURL=index.js.map