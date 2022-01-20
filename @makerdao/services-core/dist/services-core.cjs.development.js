'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var debug = _interopDefault(require('debug'));
var uniq = _interopDefault(require('lodash/uniq'));
var values = _interopDefault(require('lodash/values'));
var toposort = _interopDefault(require('toposort'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var IllegalStateError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(IllegalStateError, _Error);

  function IllegalStateError() {
    return _Error.apply(this, arguments) || this;
  }

  return IllegalStateError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var StateMachine = /*#__PURE__*/function () {
  function StateMachine(initialState, transitions) {
    if (typeof transitions !== 'object') {
      throw new Error('StateMachine transitions parameter must be an object.');
    }

    if (Object.keys(transitions).filter(function (k) {
      return transitions.hasOwnProperty(k) && !(transitions[k] instanceof Array);
    }).length > 0) {
      throw new Error('Illegal StateMachine transition found: not an array.');
    }

    if (Object.keys(transitions).filter(function (k) {
      return transitions.hasOwnProperty(k) && transitions[k].filter(function (s) {
        return !transitions[s];
      }).length > 0;
    }).length > 0) {
      throw new Error('Illegal StateMachine transition found: target state not in transition map.');
    }

    if (!(transitions[initialState] instanceof Array)) {
      throw new Error('Initial state ' + initialState + ' is not set in the transitions map.');
    }

    this._state = initialState;
    this._nextStates = transitions;
    this._stateChangedHandlers = [];
  }

  var _proto = StateMachine.prototype;

  _proto.onStateChanged = function onStateChanged(callback) {
    this._stateChangedHandlers.push(callback);
  };

  _proto.state = function state() {
    return this._state;
  };

  _proto.inState = function inState(state) {
    if (!(state instanceof Array)) {
      state = [state];
    }

    return state.indexOf(this._state) >= 0;
  };

  _proto.assertState = function assertState(state, operation) {
    if (operation === void 0) {
      operation = '';
    }

    if (!this.inState(state)) {
      throw new IllegalStateError('Illegal operation for state ' + this._state + (operation.length > 0 ? ': ' + operation : ''));
    }
  };

  _proto.transitionTo = function transitionTo(newState) {
    if (this._nextStates[newState] === undefined) {
      throw new IllegalStateError('Cannot set illegal state: ' + newState);
    }

    if (newState !== this._state) {
      if (this._nextStates[this._state].indexOf(newState) < 0) {
        throw new IllegalStateError('Illegal state transition: ' + this._state + ' to ' + newState);
      }

      var oldState = this._state;
      this._state = newState;

      this._stateChangedHandlers.forEach(function (cb) {
        return cb(oldState, newState);
      });
    }

    return this;
  };

  return StateMachine;
}();

var ServiceState = {
  CREATED: 'CREATED',
  INITIALIZING: 'INITIALIZING',
  OFFLINE: 'OFFLINE',
  CONNECTING: 'CONNECTING',
  ONLINE: 'ONLINE',
  AUTHENTICATING: 'AUTHENTICATING',
  READY: 'READY',
  ERROR: 'ERROR'
};

var ServiceType = {
  LOCAL: 'LOCAL',
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};
var localServiceLifeCycle = {
  CREATED: [ServiceState.INITIALIZING],
  INITIALIZING: [ServiceState.CREATED, ServiceState.READY],
  READY: [ServiceState.ERROR],
  ERROR: []
};
var publicServiceLifeCycle = {
  CREATED: [ServiceState.INITIALIZING],
  INITIALIZING: [ServiceState.CREATED, ServiceState.OFFLINE],
  OFFLINE: [ServiceState.CONNECTING],
  CONNECTING: [ServiceState.OFFLINE, ServiceState.READY],
  READY: [ServiceState.OFFLINE, ServiceState.ERROR],
  ERROR: []
};
var privateServiceLifeCycle = {
  CREATED: [ServiceState.INITIALIZING],
  INITIALIZING: [ServiceState.CREATED, ServiceState.OFFLINE],
  OFFLINE: [ServiceState.CONNECTING],
  CONNECTING: [ServiceState.OFFLINE, ServiceState.ONLINE],
  ONLINE: [ServiceState.OFFLINE, ServiceState.AUTHENTICATING],
  AUTHENTICATING: [ServiceState.ONLINE, ServiceState.READY],
  READY: [ServiceState.OFFLINE, ServiceState.ONLINE, ServiceState.ERROR],
  ERROR: []
};
var serviceTypeTransitions = {
  LOCAL: localServiceLifeCycle,
  PUBLIC: publicServiceLifeCycle,
  PRIVATE: privateServiceLifeCycle
};

var log = /*#__PURE__*/debug('dai:ServiceManagerBase');

function _promisify(unsafeCallback) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(unsafeCallback());
    } catch (e) {
      reject(e.message);
    }
  });
}

var ServiceManagerBase = /*#__PURE__*/function () {
  function ServiceManagerBase(init, connect, auth) {
    if (init === void 0) {
      init = null;
    }

    if (connect === void 0) {
      connect = null;
    }

    if (auth === void 0) {
      auth = null;
    }

    if (init !== null && typeof init !== 'function') {
      throw new Error('Invalid argument init: not a function or null.');
    } else if (init === null) {
      init = function init() {
        return Promise.resolve();
      };
    }

    if (connect !== null && typeof connect !== 'function') {
      throw new Error('Invalid argument connect: not a function or null.');
    } else if (connect === null && auth !== null) {
      connect = function connect() {
        return Promise.resolve();
      };
    }

    if (auth !== null && typeof auth !== 'function') {
      throw new Error('Invalid argument auth: not a function or null.');
    }

    this._init = init;
    this._connect = connect;
    this._auth = auth;
    this._type = auth === null ? connect === null ? ServiceType.LOCAL : ServiceType.PUBLIC : ServiceType.PRIVATE;
    this._state = new StateMachine(ServiceState.CREATED, serviceTypeTransitions[this._type]);
    this._initPromise = null;
    this._connectPromise = null;
    this._authPromise = null;
  }

  var _proto = ServiceManagerBase.prototype;

  _proto.initialize = function initialize(settings) {
    var _this = this;

    if (this._state.inState(ServiceState.CREATED)) {
      if (this._initPromise) {
        throw new Error('Unexpected init promise in state CREATED.');
      }

      this._state.transitionTo(ServiceState.INITIALIZING);

      this._initPromise = _promisify(function () {
        return _this._init(settings);
      }).then(function () {
        return _this._state.transitionTo(_this._type === ServiceType.LOCAL ? ServiceState.READY : ServiceState.OFFLINE);
      }, function (reason) {
        log(reason);

        _this._state.transitionTo(ServiceState.CREATED);

        throw reason;
      });
    }

    return this._initPromise;
  };

  _proto.connect = function connect() {
    var _this2 = this;

    if (this._type === ServiceType.LOCAL) {
      return this.initialize();
    }

    if (this._state.inState([ServiceState.CREATED, ServiceState.INITIALIZING, ServiceState.OFFLINE]) && this._connectPromise === null) {
      this._connectPromise = this.initialize().then(function () {
        _this2._state.transitionTo(ServiceState.CONNECTING);

        return _promisify(function () {
          return _this2._connect(function () {
            return _this2._disconnect();
          });
        }).then(function () {
          if (_this2._state.inState(ServiceState.CONNECTING)) {
            _this2._state.transitionTo(_this2._type === ServiceType.PUBLIC ? ServiceState.READY : ServiceState.ONLINE);
          }
        }, function (error) {
          log('connect error:', error);

          if (_this2._state.inState(ServiceState.CONNECTING)) {
            _this2._state.transitionTo(ServiceState.OFFLINE);
          }

          throw error;
        });
      });
    }

    return this._connectPromise;
  };

  _proto.authenticate = function authenticate() {
    var _this3 = this;

    if (this._type !== ServiceType.PRIVATE) {
      return this.connect();
    }

    if (this._state.inState([ServiceState.CREATED, ServiceState.INITIALIZING, ServiceState.OFFLINE, ServiceState.CONNECTING, ServiceState.ONLINE]) && this._authPromise === null) {
      this._authPromise = this.connect().then(function () {
        _this3._state.transitionTo(ServiceState.AUTHENTICATING);

        return _promisify(function () {
          return _this3._auth(function () {
            return _this3._deauthenticate();
          });
        }).then(function () {
          if (_this3._state.inState(ServiceState.AUTHENTICATING)) {
            _this3._state.transitionTo(ServiceState.READY);
          }
        }, function (reason) {
          log('authenticate error: ' + reason);

          if (_this3._state.inState(ServiceState.AUTHENTICATING)) {
            _this3._state.transitionTo(ServiceState.ONLINE);
          }
        });
      });
    }

    return this._authPromise;
  };

  _proto.settings = function settings(_settings) {
    this._settings = _settings;
    return this;
  };

  _proto.state = function state() {
    return this._state.state();
  };

  _proto.type = function type() {
    return this._type;
  };

  _proto.isInitialized = function isInitialized() {
    return !this._state.inState([ServiceState.CREATED, ServiceState.INITIALIZING]);
  };

  _proto.isConnected = function isConnected() {
    return this._type === ServiceType.LOCAL ? null : this._state.inState([ServiceState.ONLINE, ServiceState.AUTHENTICATING, ServiceState.READY]);
  };

  _proto.isAuthenticated = function isAuthenticated() {
    return this._type === ServiceType.PRIVATE ? this._state.inState(ServiceState.READY) : null;
  };

  _proto.isReady = function isReady() {
    return this._state.inState(ServiceState.READY);
  };

  _proto.onInitialized = function onInitialized(handler) {
    this._state.onStateChanged(function (oldState, newState) {
      if (oldState === ServiceState.INITIALIZING && (newState === ServiceState.OFFLINE || newState === ServiceState.READY)) {
        handler();
      }
    });

    return this;
  };

  _proto.onConnected = function onConnected(handler) {
    this._state.onStateChanged(function (oldState, newState) {
      if (oldState === ServiceState.CONNECTING && (newState === ServiceState.ONLINE || newState === ServiceState.READY)) {
        handler();
      }
    });

    return this;
  };

  _proto.onDisconnected = function onDisconnected(handler) {
    this._state.onStateChanged(function (oldState, newState) {
      if (newState === ServiceState.OFFLINE && (oldState === ServiceState.ONLINE || oldState === ServiceState.READY)) {
        handler();
      }
    });

    return this;
  };

  _proto.onAuthenticated = function onAuthenticated(handler) {
    this._state.onStateChanged(function (oldState, newState) {
      if (oldState === ServiceState.AUTHENTICATING && newState === ServiceState.READY) {
        handler();
      }
    });

    return this;
  };

  _proto.onDeauthenticated = function onDeauthenticated(handler) {
    if (this.type() === ServiceType.PRIVATE) {
      this._state.onStateChanged(function (oldState, newState) {
        if ((newState === ServiceState.OFFLINE || newState === ServiceState.ONLINE) && oldState === ServiceState.READY) {
          handler();
        }
      });
    }

    return this;
  };

  _proto.onReady = function onReady(handler) {
    this._state.onStateChanged(function (_, newState) {
      if (newState === ServiceState.READY) {
        handler();
      }
    });

    return this;
  };

  _proto.onStateChanged = function onStateChanged(handler) {
    this._state.onStateChanged(handler);

    return this;
  };

  _proto._disconnect = function _disconnect() {
    if (this._type === ServiceType.LOCAL) {
      throw new Error('_disconnect must not be called on a Local Service');
    }

    if (this._state.inState(ServiceState.AUTHENTICATING)) {
      this._deauthenticate();
    }

    if (this._state.inState([ServiceState.READY, ServiceState.ONLINE, ServiceState.CONNECTING])) {
      this._authPromise = null;
      this._connectPromise = null;

      this._state.transitionTo(ServiceState.OFFLINE);
    }
  };

  _proto._deauthenticate = function _deauthenticate() {
    if (this._type !== ServiceType.PRIVATE) {
      throw new Error('_deauthenticate must not be called on a Local or Public Service');
    }

    if (this._state.inState([ServiceState.READY, ServiceState.AUTHENTICATING])) {
      this._authPromise = null;

      this._state.transitionTo(ServiceState.ONLINE);
    }
  };

  return ServiceManagerBase;
}();

var InvalidServiceError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(InvalidServiceError, _Error);

  function InvalidServiceError(message) {
    return _Error.call(this, message) || this;
  }

  return InvalidServiceError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var UnknownDependencyError = /*#__PURE__*/function (_Error2) {
  _inheritsLoose(UnknownDependencyError, _Error2);

  function UnknownDependencyError(service, dependency) {
    return _Error2.call(this, 'Injected service ' + dependency + ' is not a dependency of ' + service) || this;
  }

  return UnknownDependencyError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var DependencyNotResolvedError = /*#__PURE__*/function (_Error3) {
  _inheritsLoose(DependencyNotResolvedError, _Error3);

  function DependencyNotResolvedError(service, dependency) {
    return _Error3.call(this, 'Dependency ' + dependency + ' of service ' + service + ' is unavailable.') || this;
  }

  return DependencyNotResolvedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function _waitForDependencies(callback) {
  return Promise.all(this.dependencies().map(function (dependency) {
    return callback(dependency);
  }));
}

var ServiceManager = /*#__PURE__*/function (_ServiceManagerBase) {
  _inheritsLoose(ServiceManager, _ServiceManagerBase);

  function ServiceManager(name, dependencies, init, connect, auth) {
    var _this;

    if (dependencies === void 0) {
      dependencies = [];
    }

    if (init === void 0) {
      init = null;
    }

    if (connect === void 0) {
      connect = null;
    }

    if (auth === void 0) {
      auth = null;
    }

    _this = _ServiceManagerBase.call(this, init, connect, auth) || this;

    if (!name) {
      throw new Error('Service name must not be empty.');
    }

    _this._name = name;
    _this._dependencies = dependencies;
    _this._injections = {};
    dependencies.forEach(function (d) {
      return _this._injections[d] = null;
    });
    return _this;
  }

  ServiceManager.isValidService = function isValidService(service) {
    return service !== null && typeof service === 'object' && typeof service.manager === 'function';
  };

  var _proto = ServiceManager.prototype;

  _proto.name = function name() {
    return this._name;
  };

  _proto.dependencies = function dependencies() {
    return this._dependencies;
  };

  _proto.inject = function inject(dependency, service) {
    if (typeof this._injections[dependency] === 'undefined') {
      throw new UnknownDependencyError(this.name(), dependency);
    }

    if (!ServiceManager.isValidService(service)) {
      throw new InvalidServiceError('Cannot inject invalid service in ' + this.name());
    }

    this._injections[dependency] = service;
    return this;
  };

  _proto.dependency = function dependency(name) {
    if (!this._injections[name]) {
      throw new DependencyNotResolvedError(this.name(), name);
    }

    return this._injections[name];
  };

  _proto.initialize = function initialize() {
    var _this2 = this;

    return this.initializeDependencies().then(function () {
      return _ServiceManagerBase.prototype.initialize.call(_this2, _this2._settings);
    });
  };

  _proto.connect = function connect() {
    var _this3 = this;

    return this.connectDependencies().then(function () {
      return _ServiceManagerBase.prototype.connect.call(_this3);
    });
  };

  _proto.authenticate = function authenticate() {
    var _this4 = this;

    return this.authenticateDependencies().then(function () {
      return _ServiceManagerBase.prototype.authenticate.call(_this4);
    });
  };

  _proto.initializeDependencies = function initializeDependencies() {
    var _this5 = this;

    return _waitForDependencies.call(this, function (d) {
      return _this5.dependency(d).manager().initialize();
    });
  };

  _proto.connectDependencies = function connectDependencies() {
    var _this6 = this;

    return _waitForDependencies.call(this, function (d) {
      return _this6.dependency(d).manager().connect();
    });
  };

  _proto.authenticateDependencies = function authenticateDependencies() {
    var _this7 = this;

    return _waitForDependencies.call(this, function (d) {
      return _this7.dependency(d).manager().authenticate();
    });
  };

  _proto.createService = function createService() {
    var self = this;
    return {
      manager: function manager() {
        return self;
      }
    };
  };

  return ServiceManager;
}(ServiceManagerBase);

function _defineLifeCycleMethods(type) {
  if (typeof this.initialize === 'undefined') {
    this.initialize = function () {};
  }

  if (type !== ServiceType.LOCAL) {
    if (typeof this.connect === 'undefined') {
      this.connect = function () {};
    }

    this.disconnect = function () {};
  }

  if (type === ServiceType.PRIVATE) {
    if (typeof this.authenticate === 'undefined') {
      this.authenticate = function () {};
    }

    this.deauthenticate = function () {};
  }
}

function _buildServiceManager(type, name, dependencies) {
  var _this = this;

  var connect = type === ServiceType.LOCAL ? null : function (disconnect) {
    _this.disconnect = disconnect;
    return _this.connect();
  };
  var auth = type !== ServiceType.PRIVATE ? null : function (deauthenticate) {
    _this.deauthenticate = deauthenticate;
    return _this.authenticate();
  };
  return new ServiceManager(name, dependencies, function (settings) {
    return _this.initialize(settings);
  }, connect, auth);
}

function _installLifeCycleHooks(mgr) {
  var _this2 = this;

  mgr.onInitialized(function () {
    if (mgr.type() !== ServiceType.LOCAL) {
      mgr.dependencies().forEach(function (d) {
        _this2.get(d).manager().onDisconnected(function () {
          return _this2.disconnect();
        });
      });
    }

    if (mgr.type() === ServiceType.PRIVATE) {
      mgr.dependencies().forEach(function (d) {
        _this2.get(d).manager().onDeauthenticated(function () {
          return _this2.deauthenticate();
        });
      });
    }
  });
}

function _guardLifeCycleMethods() {
  var original = {
    initialize: this.initialize,
    connect: this.connect,
    authenticate: this.authenticate
  };

  this.initialize = function (settings) {
    if (this.manager().state() !== ServiceState.INITIALIZING) {
      throw new Error('Expected state INITIALIZING, but got ' + this.manager().state() + '. Did you mean to call service.manager().initialize() instead of service.initialize()?');
    }

    return original.initialize.apply(this, [settings]);
  };

  if (typeof original.connect !== 'undefined') {
    this.connect = function () {
      if (this.manager().state() !== ServiceState.CONNECTING) {
        throw new Error('Expected state CONNECTING, but got ' + this.manager().state() + '. Did you mean to call service.manager().connect() instead of service.connect()?');
      }

      return original.connect.apply(this);
    };
  }

  if (typeof original.authenticate !== 'undefined') {
    this.authenticate = function () {
      if (this.manager().state() !== ServiceState.AUTHENTICATING) {
        throw new Error('Expected state AUTHENTICATING, but got ' + this.manager().state() + '. Did you mean to call service.manager().authenticate() instead of service.authenticate()?');
      }

      return original.authenticate.apply(this);
    };
  }
}

var ServiceBase = /*#__PURE__*/function () {
  function ServiceBase(type, name, dependencies) {
    if (dependencies === void 0) {
      dependencies = [];
    }

    if (!name) name = this.constructor.role;

    if (this.constructor.dependencies) {
      dependencies = this.constructor.dependencies;
    }

    if (typeof ServiceType[type] === 'undefined') {
      throw new Error('Invalid ServiceType: ' + type);
    }

    _defineLifeCycleMethods.call(this, type);

    this._serviceManager = _buildServiceManager.call(this, type, name, dependencies);

    _installLifeCycleHooks.call(this, this._serviceManager);

    _guardLifeCycleMethods.call(this);
  }

  var _proto = ServiceBase.prototype;

  _proto.manager = function manager() {
    return this._serviceManager;
  };

  _proto.get = function get(dependency) {
    return this._serviceManager.dependency(dependency);
  };

  return ServiceBase;
}();

function standardizeConfig(role, config, resolver) {
  if (config instanceof Array) {
    if (typeof config[0] == 'boolean' && resolver) {
      return [resolveNameForBoolean(role, config[0], resolver), config[1]];
    }

    return config;
  }

  var className,
      settings = {};

  switch (typeof config) {
    case 'string':
      className = config;
      break;

    case 'function':
      className = config;
      break;

    case 'object':
      if (config instanceof ServiceBase) {
        className = config;
      } else {
        className = resolver ? resolveNameForBoolean(role, true, resolver) : true;
        settings = config;
      }

      break;

    case 'boolean':
      className = resolver ? resolveNameForBoolean(role, config, resolver) : config;
      break;

    default:
      throw new Error("could not parse settings for " + role + ": " + JSON.stringify(config));
  }

  return [className, settings];
}

function resolveNameForBoolean(role, bool, _ref) {
  var defaults = _ref.defaults,
      disabled = _ref.disabled;
  var name;

  if (bool) {
    name = defaults[role];
    if (!name) throw new Error("The \"" + role + "\" service has no default");
  } else {
    name = disabled[role];
    if (!name) throw new Error("The \"" + role + "\" service cannot be disabled");
  }

  return name;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = /*#__PURE__*/createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;

        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

var ServiceAlreadyRegisteredError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(ServiceAlreadyRegisteredError, _Error);

  function ServiceAlreadyRegisteredError(name) {
    return _Error.call(this, 'Service with name \'' + name + '\' is already registered with this container.') || this;
  }

  return ServiceAlreadyRegisteredError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var ServiceNotFoundError = /*#__PURE__*/function (_Error2) {
  _inheritsLoose(ServiceNotFoundError, _Error2);

  function ServiceNotFoundError(name) {
    return _Error2.call(this, 'Service with name \'' + name + '\' cannot be found in this container.') || this;
  }

  return ServiceNotFoundError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var ExtractedServiceError = /*#__PURE__*/function (_Error3) {
  _inheritsLoose(ExtractedServiceError, _Error3);

  function ExtractedServiceError(name) {
    return _Error3.call(this, 'Service with name \'' + name + '\' has been extracted from the core dai.js library into a discrete plugin. Please refer to the documentation here to install and add it to your configuration: \n\n https://github.com/makerdao/dai.js/wiki/Basic-Usage-(Plugins) \n\n') || this;
  }

  return ExtractedServiceError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function orderServices(services) {
  var edges = [];
  var servicesWithoutDeps = [];

  var _loop = function _loop() {
    var service = _step.value;
    var name = service.manager().name();
    var depNames = service.manager().dependencies();

    if (depNames.length === 0) {
      servicesWithoutDeps.push(name);
    } else {
      depNames.forEach(function (dn) {
        return edges.push([dn, name]);
      });
    }
  };

  for (var _iterator = _createForOfIteratorHelperLoose(services), _step; !(_step = _iterator()).done;) {
    _loop();
  }

  return uniq(toposort(edges).concat(servicesWithoutDeps));
}

var Container = /*#__PURE__*/function () {
  function Container() {
    this._services = {};
    this.isAuthenticated = false;
  }

  var _proto = Container.prototype;

  _proto.register = function register(service, name) {
    if (name === void 0) {
      name = null;
    }

    if (!ServiceManager.isValidService(service)) {
      throw new InvalidServiceError('Service must be an object with manager() method returning a valid ServiceManager');
    }

    name = name || service.manager().name();
    var s = this.service(name, false);

    if (s !== undefined && s !== service) {
      throw new ServiceAlreadyRegisteredError(name);
    }

    this._services[name] = service;
    return this;
  };

  _proto.service = function service(name, throwIfMissing) {
    if (throwIfMissing === void 0) {
      throwIfMissing = true;
    }

    var extractedServices = ['exchange'];

    if (!name) {
      throw new Error('Provide a service name.');
    }

    if (!this._services[name] && throwIfMissing && extractedServices.includes(name)) {
      throw new ExtractedServiceError(name);
    }

    if (!this._services[name] && throwIfMissing) {
      throw new ServiceNotFoundError(name);
    }

    return this._services[name];
  };

  _proto.getRegisteredServiceNames = function getRegisteredServiceNames() {
    return Object.keys(this._services);
  };

  _proto.injectDependencies = function injectDependencies() {
    var services = values(this._services);

    for (var _iterator2 = _createForOfIteratorHelperLoose(services), _step2; !(_step2 = _iterator2()).done;) {
      var service = _step2.value;
      var manager = service.manager();

      for (var _iterator3 = _createForOfIteratorHelperLoose(manager.dependencies()), _step3; !(_step3 = _iterator3()).done;) {
        var name = _step3.value;
        var dep = this._services[name];
        if (!dep) throw new ServiceNotFoundError(name);
        manager.inject(name, this._services[name]);
      }
    }
  };

  _proto.initialize = function initialize() {
    return this._waitForServices(function (s) {
      return s.manager().initialize();
    });
  };

  _proto.connect = function connect() {
    return this._waitForServices(function (s) {
      return s.manager().connect();
    });
  };

  _proto.authenticate = function authenticate() {
    var _this = this;

    return this._waitForServices(function (s) {
      return s.manager().authenticate();
    }).then(function () {
      _this.isAuthenticated = true;
    });
  };

  _proto._waitForServices = /*#__PURE__*/function () {
    var _waitForServices2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(callback) {
      var _iterator4, _step4, name, service;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this._orderedServiceNames) {
                this._orderedServiceNames = orderServices(values(this._services));
              }

              _iterator4 = _createForOfIteratorHelperLoose(this._orderedServiceNames);

            case 2:
              if ((_step4 = _iterator4()).done) {
                _context.next = 11;
                break;
              }

              name = _step4.value;
              service = this._services[name];

              if (service) {
                _context.next = 7;
                break;
              }

              throw new Error("No service for " + name);

            case 7:
              _context.next = 9;
              return callback(this._services[name]);

            case 9:
              _context.next = 2;
              break;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function _waitForServices(_x) {
      return _waitForServices2.apply(this, arguments);
    }

    return _waitForServices;
  }();

  return Container;
}();

var ServiceProvider = /*#__PURE__*/function () {
  function ServiceProvider(config, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$services = _ref.services,
        services = _ref$services === void 0 ? {} : _ref$services,
        _ref$defaults = _ref.defaults,
        defaults = _ref$defaults === void 0 ? {} : _ref$defaults,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === void 0 ? {} : _ref$disabled;

    this._config = config;
    this._services = services;
    this._resolver = {
      defaults: defaults,
      disabled: disabled
    };
  }

  var _proto = ServiceProvider.prototype;

  _proto.supports = function supports(serviceName) {
    return !!this._services[serviceName];
  };

  _proto.buildContainer = function buildContainer() {
    var container = new Container();

    for (var role in this._config) {
      var _standardizeConfig = standardizeConfig(role, this._config[role], this._resolver),
          service = _standardizeConfig[0],
          settings = _standardizeConfig[1];

      var instance = void 0;

      if (typeof service == 'object') {
        instance = service;
      } else if (typeof service == 'function') {
        instance = new service();
      } else {
        if (!this.supports(service) && role === 'exchange') {
          throw new Error('This service has been extracted from dai.js. Please refer to the documentation to add it as a plugin: \n\n https://github.com/makerdao/dai.js/wiki/Basic-Usage-(Plugins)');
        }

        if (!this.supports(service)) {
          throw new Error('Unsupported service in configuration: ' + service);
        }

        instance = new this._services[service]();
      }

      var instanceName = instance.manager().name();

      if (instanceName !== role) {
        throw new Error("Role mismatch: \"" + instanceName + "\", \"" + role + "\"");
      }

      instance.manager().settings(settings);
      container.register(instance, role);
    }

    this._registerDependencies(container);

    container.injectDependencies();
    this._container = container;
    return container;
  };

  _proto._registerDependencies = function _registerDependencies(container) {
    var names = container.getRegisteredServiceNames();
    var allDeps = names.reduce(function (acc, name) {
      var service = container.service(name);
      var deps = service.manager().dependencies();
      return uniq(acc.concat(deps));
    }, []);
    var newDeps = allDeps.filter(function (name) {
      return !names.includes(name);
    });
    if (newDeps.length === 0) return;

    for (var _iterator = _createForOfIteratorHelperLoose(newDeps), _step; !(_step = _iterator()).done;) {
      var name = _step.value;
      var ctor = this._resolver.defaults[name];
      if (typeof ctor === 'string') ctor = this._services[ctor];
      if (!ctor) throw new Error("No service found for \"" + name + "\"");
      container.register(new ctor(), name);
    }

    this._registerDependencies(container);
  };

  _proto.service = function service(name) {
    if (!this._container) this.buildContainer();
    return this._container.service(name);
  };

  return ServiceProvider;
}();

var LocalService = /*#__PURE__*/function (_ServiceBase) {
  _inheritsLoose(LocalService, _ServiceBase);

  function LocalService(name, dependencies) {
    if (dependencies === void 0) {
      dependencies = [];
    }

    return _ServiceBase.call(this, ServiceType.LOCAL, name, dependencies) || this;
  }

  return LocalService;
}(ServiceBase);

var PublicService = /*#__PURE__*/function (_ServiceBase) {
  _inheritsLoose(PublicService, _ServiceBase);

  function PublicService(name, dependencies) {
    if (dependencies === void 0) {
      dependencies = [];
    }

    return _ServiceBase.call(this, ServiceType.PUBLIC, name, dependencies) || this;
  }

  return PublicService;
}(ServiceBase);

var PrivateService = /*#__PURE__*/function (_ServiceBase) {
  _inheritsLoose(PrivateService, _ServiceBase);

  function PrivateService(name, dependencies) {
    if (dependencies === void 0) {
      dependencies = [];
    }

    return _ServiceBase.call(this, ServiceType.PRIVATE, name, dependencies) || this;
  }

  return PrivateService;
}(ServiceBase);

exports.Container = Container;
exports.LocalService = LocalService;
exports.PrivateService = PrivateService;
exports.PublicService = PublicService;
exports.ServiceManager = ServiceManager;
exports.ServiceProvider = ServiceProvider;
exports.StateMachine = StateMachine;
exports.standardizeConfig = standardizeConfig;
//# sourceMappingURL=services-core.cjs.development.js.map
