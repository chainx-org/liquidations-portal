(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@makerdao/services-core'), require('lodash/fp'), require('invariant'), require('eth-lib/lib/account'), require('web3-provider-engine/dist/es5/subproviders/wallet'), require('web3-provider-engine/dist/es5'), require('web3-provider-engine/dist/es5/subproviders/websocket'), require('web3-provider-engine/dist/es5/subproviders/rpc'), require('web3-provider-engine/dist/es5/subproviders/subscriptions'), require('web3-provider-engine/dist/es5/subproviders/provider'), require('assert'), require('bignumber.js'), require('debug'), require('tslib'), require('lodash-es'), require('ethers'), require('@makerdao/currency'), require('eventemitter2'), require('isomorphic-fetch'), require('@makerdao/multicall'), require('rxjs'), require('rxjs/operators'), require('util'), require('web3')) :
  typeof define === 'function' && define.amd ? define(['exports', '@makerdao/services-core', 'lodash/fp', 'invariant', 'eth-lib/lib/account', 'web3-provider-engine/dist/es5/subproviders/wallet', 'web3-provider-engine/dist/es5', 'web3-provider-engine/dist/es5/subproviders/websocket', 'web3-provider-engine/dist/es5/subproviders/rpc', 'web3-provider-engine/dist/es5/subproviders/subscriptions', 'web3-provider-engine/dist/es5/subproviders/provider', 'assert', 'bignumber.js', 'debug', 'tslib', 'lodash-es', 'ethers', '@makerdao/currency', 'eventemitter2', 'isomorphic-fetch', '@makerdao/multicall', 'rxjs', 'rxjs/operators', 'util', 'web3'], factory) :
  (global = global || self, factory(global['@makerdao/dai'] = {}, global.servicesCore, global.fp, global.invariant, global.Account, global.Wallet, global.Web3ProviderEngine, global.WebsocketSubprovider, global.RpcSource, global.SubscriptionSubprovider, global.ProviderSubprovider, global.assert, global.BigNumber, global.debug, global.tslib, global.lodashEs, global.ethers, global.currency, global.EventEmitterObj, global.fetch, global.multicall$1, global.rxjs, global.operators, global.util, global.Web3));
}(this, (function (exports, servicesCore, fp, invariant, Account, Wallet, Web3ProviderEngine, WebsocketSubprovider, RpcSource, SubscriptionSubprovider, ProviderSubprovider, assert, BigNumber, debug, tslib, lodashEs, ethers, currency, EventEmitterObj, fetch, multicall$1, rxjs, operators, util, Web3) { 'use strict';

  invariant = invariant && Object.prototype.hasOwnProperty.call(invariant, 'default') ? invariant['default'] : invariant;
  Account = Account && Object.prototype.hasOwnProperty.call(Account, 'default') ? Account['default'] : Account;
  Wallet = Wallet && Object.prototype.hasOwnProperty.call(Wallet, 'default') ? Wallet['default'] : Wallet;
  Web3ProviderEngine = Web3ProviderEngine && Object.prototype.hasOwnProperty.call(Web3ProviderEngine, 'default') ? Web3ProviderEngine['default'] : Web3ProviderEngine;
  WebsocketSubprovider = WebsocketSubprovider && Object.prototype.hasOwnProperty.call(WebsocketSubprovider, 'default') ? WebsocketSubprovider['default'] : WebsocketSubprovider;
  RpcSource = RpcSource && Object.prototype.hasOwnProperty.call(RpcSource, 'default') ? RpcSource['default'] : RpcSource;
  SubscriptionSubprovider = SubscriptionSubprovider && Object.prototype.hasOwnProperty.call(SubscriptionSubprovider, 'default') ? SubscriptionSubprovider['default'] : SubscriptionSubprovider;
  ProviderSubprovider = ProviderSubprovider && Object.prototype.hasOwnProperty.call(ProviderSubprovider, 'default') ? ProviderSubprovider['default'] : ProviderSubprovider;
  var assert__default = 'default' in assert ? assert['default'] : assert;
  BigNumber = BigNumber && Object.prototype.hasOwnProperty.call(BigNumber, 'default') ? BigNumber['default'] : BigNumber;
  debug = debug && Object.prototype.hasOwnProperty.call(debug, 'default') ? debug['default'] : debug;
  EventEmitterObj = EventEmitterObj && Object.prototype.hasOwnProperty.call(EventEmitterObj, 'default') ? EventEmitterObj['default'] : EventEmitterObj;
  fetch = fetch && Object.prototype.hasOwnProperty.call(fetch, 'default') ? fetch['default'] : fetch;
  Web3 = Web3 && Object.prototype.hasOwnProperty.call(Web3, 'default') ? Web3['default'] : Web3;

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

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
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

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
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

  var ProviderType = {
    INFURA: 'INFURA',
    HTTP: 'HTTP',
    WEBSOCKET: 'WEBSOCKET',
    // a browser provider is one that comes from the browser, i.e. `window.web3`,
    // or from MetaMask's new "postMessage" method of requesting a provider.
    BROWSER: 'BROWSER',
    // A provider constructed outside this library and injected as-is
    INJECT: 'INJECT'
  };

  var DEFAULT_POLLING_INTERVAL = 4000;
  function setupEngine(_x) {
    return _setupEngine.apply(this, arguments);
  }

  function _setupEngine() {
    _setupEngine = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(settings) {
      var _settings$web, providerSettings, pollingInterval, engine, result, getHttpProvider, getWebsocketProvider, getInjectedProvider;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _settings$web = settings.web3, providerSettings = _settings$web.provider, pollingInterval = _settings$web.pollingInterval;
              engine = new Web3ProviderEngine({
                pollingInterval: pollingInterval || DEFAULT_POLLING_INTERVAL
              });
              result = {
                engine: engine
              };

              getHttpProvider = function getHttpProvider() {
                var rpcUrl = getRpcUrl(providerSettings);
                var subscriptionProvider = new SubscriptionSubprovider();
                subscriptionProvider.on('data', function (err, data) {
                  return engine.emit('data', err, data);
                });
                engine.addProvider(subscriptionProvider);
                return new RpcSource({
                  rpcUrl: rpcUrl
                });
              };

              getWebsocketProvider = function getWebsocketProvider() {
                var rpcUrl = getRpcUrl(providerSettings);
                var subscriptionProvider = new SubscriptionSubprovider();
                subscriptionProvider.on('data', function (err, data) {
                  return engine.emit('data', err, data);
                });
                engine.addProvider(subscriptionProvider);
                return new WebsocketSubprovider({
                  rpcUrl: rpcUrl
                });
              };

              getInjectedProvider = function getInjectedProvider() {
                if (!providerSettings.inject) {
                  throw new Error("'inject' must be supplied with ProviderType.INJECT");
                }

                return new ProviderSubprovider(providerSettings.inject);
              };

              _context.t0 = providerSettings.type;
              _context.next = _context.t0 === ProviderType.BROWSER ? 9 : _context.t0 === ProviderType.WEBSOCKET ? 13 : _context.t0 === ProviderType.HTTP ? 15 : _context.t0 === ProviderType.INFURA ? 17 : _context.t0 === ProviderType.INJECT ? 19 : 21;
              break;

            case 9:
              _context.next = 11;
              return getBrowserProvider();

            case 11:
              result.provider = _context.sent;
              return _context.abrupt("break", 22);

            case 13:
              result.provider = getWebsocketProvider();
              return _context.abrupt("break", 22);

            case 15:
              result.provider = getHttpProvider();
              return _context.abrupt("break", 22);

            case 17:
              result.provider = providerSettings.protocol === 'wss' ? getWebsocketProvider() : getHttpProvider();
              return _context.abrupt("break", 22);

            case 19:
              result.provider = getInjectedProvider();
              return _context.abrupt("break", 22);

            case 21:
              throw new Error('provider type must be defined');

            case 22:
              engine.addProvider(result.provider);
              return _context.abrupt("return", result);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _setupEngine.apply(this, arguments);
  }

  function getBrowserProvider() {
    return _getBrowserProvider.apply(this, arguments);
  }

  function _getBrowserProvider() {
    _getBrowserProvider = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
      var wrap;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(typeof window === 'undefined')) {
                _context2.next = 2;
                break;
              }

              throw new Error('Cannot use ProviderType.BROWSER because window is undefined');

            case 2:
              wrap = function wrap(provider) {
                var subprovider = new ProviderSubprovider(provider);
                subprovider.isWindowProvider = true;
                return subprovider;
              };

              if (!window.ethereum) {
                _context2.next = 9;
                break;
              }

              _context2.next = 6;
              return window.ethereum.enable();

            case 6:
              return _context2.abrupt("return", wrap(window.ethereum));

            case 9:
              if (!window.web3) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt("return", wrap(window.web3.currentProvider));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getBrowserProvider.apply(this, arguments);
  }

  function getInfuraUrl(protocol, network, infuraProjectId) {
    if (protocol === void 0) {
      protocol = 'https';
    }

    if (!infuraProjectId) {
      throw new Error('Cannot use infura without a project ID');
    }

    var url = protocol + "://" + network + ".infura.io";
    url += protocol === 'wss' ? '/ws' : '';
    url += "/v3/" + infuraProjectId;
    return url;
  }

  function getRpcUrl(providerSettings) {
    var network = providerSettings.network,
        protocol = providerSettings.protocol,
        infuraProjectId = providerSettings.infuraProjectId,
        type = providerSettings.type,
        url = providerSettings.url;

    switch (type) {
      case ProviderType.HTTP:
        return url;

      case ProviderType.WEBSOCKET:
        return url;

      case ProviderType.INFURA:
        return getInfuraUrl(protocol, network, infuraProjectId);

      default:
        throw new Error('Invalid web3 provider type: ' + type);
    }
  }

  function privateKeyAccountFactory(_ref) {
    var key = _ref.key;

    if (typeof key != 'string' || !key.match(/^(0x)?[0-9a-fA-F]{64}$/)) {
      throw new Error('Invalid private key format');
    }

    var _ref2 = key.startsWith('0x') ? [key, key.replace(/^0x/, '')] : ['0x' + key, key],
        keyWithPreffix = _ref2[0],
        keySansPrefix = _ref2[1];

    var account = Account.fromPrivate(keyWithPreffix);
    var keyBuffer = Buffer.from(keySansPrefix, 'hex');
    var subprovider = new Wallet({
      getAddressString: function getAddressString() {
        return account.address.toLowerCase();
      },
      getPrivateKey: function getPrivateKey() {
        return keyBuffer;
      }
    }, {});
    return {
      subprovider: subprovider,
      address: account.address
    };
  }

  function getAccountAddress(_x, _x2) {
    return _getAccountAddress.apply(this, arguments);
  }

  function _getAccountAddress() {
    _getAccountAddress = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(subprovider, _temp) {
      var _ref4, _ref4$offset, offset, address;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref4 = _temp === void 0 ? {} : _temp, _ref4$offset = _ref4.offset, offset = _ref4$offset === void 0 ? 0 : _ref4$offset, address = _ref4.address;
              assert__default(!(offset && address), 'Cannot set both address and offset');
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                return subprovider.handleRequest({
                  method: 'eth_accounts',
                  params: [],
                  id: 1
                }, null, function (err, val) {
                  if (err) return reject(err);

                  if (address) {
                    var matchingAddress = val.find(function (a) {
                      return a.toLowerCase() === address.toLowerCase();
                    });
                    assert__default(matchingAddress, 'No matching address found in provider.');
                    resolve(matchingAddress.toLowerCase());
                  } else {
                    resolve(typeof val[offset] === 'string' ? val[offset].toLowerCase() : val[offset]);
                  }
                });
              }));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getAccountAddress.apply(this, arguments);
  }

  function providerAccountFactory(_x3, _x4) {
    return _providerAccountFactory.apply(this, arguments);
  }

  function _providerAccountFactory() {
    _providerAccountFactory = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(_ref3, provider) {
      var offset, address, subprovider;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              offset = _ref3.offset, address = _ref3.address;
              // we need to be able to swap out this account while leaving the original
              // provider in place for other accounts, so the subprovider here has to be
              // a different instance. using Proxy is a simple way to accomplish this.
              subprovider = new Proxy(provider, {});
              _context2.t0 = subprovider;
              _context2.next = 5;
              return getAccountAddress(subprovider, {
                offset: offset,
                address: address
              });

            case 5:
              _context2.t1 = _context2.sent;
              return _context2.abrupt("return", {
                subprovider: _context2.t0,
                address: _context2.t1
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _providerAccountFactory.apply(this, arguments);
  }

  function browserProviderAccountFactory() {
    return _browserProviderAccountFactory.apply(this, arguments);
  }

  function _browserProviderAccountFactory() {
    _browserProviderAccountFactory = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3() {
      var subprovider;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return getBrowserProvider();

            case 2:
              subprovider = _context3.sent;
              _context3.t0 = subprovider;
              _context3.next = 6;
              return getAccountAddress(subprovider);

            case 6:
              _context3.t1 = _context3.sent;
              return _context3.abrupt("return", {
                subprovider: _context3.t0,
                address: _context3.t1
              });

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _browserProviderAccountFactory.apply(this, arguments);
  }

  var UINT256_MAX = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
  var AccountType = {
    PROVIDER: 'provider',
    PRIVATE_KEY: 'privateKey',
    BROWSER: 'browser'
  };

  var _excluded = ["type", "autoSwitch"];
  var log = /*#__PURE__*/debug('dai:AccountsService');
  var sanitizeAccount = /*#__PURE__*/fp.pick(['name', 'type', 'address']);

  var AccountsService = /*#__PURE__*/function (_PublicService) {
    _inheritsLoose(AccountsService, _PublicService);

    function AccountsService(name) {
      var _this;

      if (name === void 0) {
        name = 'accounts';
      }

      _this = _PublicService.call(this, name, ['event']) || this;
      _this._accounts = {};
      _this._accountFactories = {
        privateKey: privateKeyAccountFactory,
        provider: providerAccountFactory,
        browser: browserProviderAccountFactory
      };
      return _this;
    }

    var _proto = AccountsService.prototype;

    _proto.initialize = /*#__PURE__*/function () {
      var _initialize = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(settings) {
        var result;
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (settings === void 0) {
                  settings = {};
                }

                this._settings = fp.omit('web3', settings);
                _context.next = 4;
                return setupEngine(settings);

              case 4:
                result = _context.sent;
                this._engine = result.engine;
                this._provider = result.provider;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initialize(_x) {
        return _initialize.apply(this, arguments);
      }

      return initialize;
    }();

    _proto.connect = /*#__PURE__*/function () {
      var _connect = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
        var accountNames, _i, _accountNames, name;

        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                accountNames = Object.keys(this._settings);
                _i = 0, _accountNames = accountNames;

              case 2:
                if (!(_i < _accountNames.length)) {
                  _context2.next = 9;
                  break;
                }

                name = _accountNames[_i];
                _context2.next = 6;
                return this.addAccount(name, this._settings[name]);

              case 6:
                _i++;
                _context2.next = 2;
                break;

              case 9:
                if (!(accountNames.length === 0)) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 12;
                return this.addAccount('default', {
                  type: AccountType.PROVIDER
                });

              case 12:
                this._engine.start();

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }();

    _proto.getProvider = function getProvider() {
      return this._engine;
    };

    _proto.addAccountType = function addAccountType(type, factory) {
      !!this._accountFactories[type] ?  invariant(false, "Account type \"" + type + "\" is already defined")  : void 0;
      this._accountFactories[type] = factory;
    };

    _proto.addAccount = /*#__PURE__*/function () {
      var _addAccount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(name, options) {
        var _options, type, autoSwitch, otherSettings, factory, accountData, account;

        return runtime_1.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (options === void 0) {
                  options = {};
                }

                if (name && typeof name !== 'string') {
                  options = name;
                  name = null;
                }

                _options = options, type = _options.type, autoSwitch = _options.autoSwitch, otherSettings = _objectWithoutPropertiesLoose(_options, _excluded);
                !this._engine ?  invariant(false, 'engine must be set up before adding an account')  : void 0;

                if (!(name && this._accounts[name])) {
                  _context3.next = 6;
                  break;
                }

                throw new Error('An account with this name already exists.');

              case 6:
                factory = this._accountFactories[type];
                !factory ?  invariant(false, "no factory for type \"" + type + "\"")  : void 0;
                _context3.next = 10;
                return factory(otherSettings, this._provider);

              case 10:
                accountData = _context3.sent;

                if (accountData.address) {
                  _context3.next = 14;
                  break;
                }

                log("Not adding account \"" + name + "\" (no address found)");
                return _context3.abrupt("return");

              case 14:
                accountData.address = accountData.address.toLowerCase();

                if (!this._getAccountWithAddress(accountData.address)) {
                  _context3.next = 17;
                  break;
                }

                throw new Error('An account with this address already exists.');

              case 17:
                if (!name) name = accountData.address;
                account = _extends({
                  name: name,
                  type: type,
                  autoSwitch: autoSwitch || false
                }, accountData);
                this._accounts[name] = account;

                if (!this._currentAccount || name === 'default') {
                  this.useAccount(name);
                }

                if (this.hasAccount()) {
                  this.get('event').emit('accounts/ADD', {
                    account: sanitizeAccount(account)
                  });
                }

                return _context3.abrupt("return", account);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addAccount(_x2, _x3) {
        return _addAccount.apply(this, arguments);
      }

      return addAccount;
    }();

    _proto.listAccounts = function listAccounts() {
      return fp.map(sanitizeAccount, this._accounts);
    };

    _proto.useAccount = function useAccount(name) {
      var account = this._accounts[name];
      !account ?  invariant(false, "No account found with name \"" + name + "\".")  : void 0;
      if (this._autoSwitchCheckHandle) clearInterval(this._autoSwitchCheckHandle);

      if (account.type === AccountType.BROWSER) {
        assert__default(isAddressSelected(account.address), 'cannot use a browser account that is not currently selected'); // detect account change and automatically switch active account if
        // autoSwitch flag set (useful if using a browser wallet like MetaMask)
        // see: https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md#ear-listening-for-selected-account-changes

        if (account.autoSwitch) {
          this._autoSwitchCheckHandle = setInterval(this._autoSwitchCheckAccountChange(account.address), 500);
        }
      }

      if (this._currentAccount) {
        this._engine.stop();

        this._engine.removeProvider(this.currentWallet());
      }

      this._currentAccount = name; // add the provider at index 0 so that it takes precedence over RpcSource

      this._engine.addProvider(this.currentWallet(), 0);

      this._engine.start();

      if (this.hasAccount()) {
        this.get('event').emit('accounts/CHANGE', {
          account: this.currentAccount()
        });
      }
    };

    _proto._autoSwitchCheckAccountChange = function _autoSwitchCheckAccountChange(addr) {
      var _this2 = this;

      return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4() {
        var activeBrowserAddress;
        return runtime_1.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                activeBrowserAddress = getSelectedAddress().toLowerCase();

                if (!(activeBrowserAddress !== addr)) {
                  _context4.next = 6;
                  break;
                }

                if (_this2._getAccountWithAddress(activeBrowserAddress)) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 5;
                return _this2.addAccount({
                  type: AccountType.BROWSER,
                  autoSwitch: true
                });

              case 5:
                _this2.useAccountWithAddress(activeBrowserAddress);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
    };

    _proto._getAccountWithAddress = function _getAccountWithAddress(addr) {
      var accountObjects = Object.values(this._accounts);
      return accountObjects.find(function (e) {
        return e.address.toUpperCase() === addr.toUpperCase();
      });
    };

    _proto.useAccountWithAddress = function useAccountWithAddress(addr) {
      var account = this._getAccountWithAddress(addr);

      if (!account) throw new Error("No account found with address " + addr);
      this.useAccount(account.name);
    };

    _proto.hasAccount = function hasAccount() {
      return !!this._currentAccount;
    };

    _proto.hasNonProviderAccount = function hasNonProviderAccount() {
      return this.hasAccount() && this.currentAccount().type != AccountType.PROVIDER;
    } // we intentionally omit subprovider (implementation detail) and privateKey
    // (sensitive info).
    ;

    _proto.currentAccount = function currentAccount() {
      !this.hasAccount() ?  invariant(false, 'No account is set up.')  : void 0;
      return sanitizeAccount(this._accounts[this._currentAccount]);
    };

    _proto.currentAddress = function currentAddress() {
      !this.hasAccount() ?  invariant(false, 'No account is set up.')  : void 0;
      return this._accounts[this._currentAccount].address;
    };

    _proto.currentWallet = function currentWallet() {
      return this._accounts[this._currentAccount].subprovider;
    };

    return AccountsService;
  }(servicesCore.PublicService);

  function getSelectedAddress() {
    return typeof window.ethereum !== 'undefined' ? window.ethereum.selectedAddress : window.web3.eth.defaultAccount;
  }

  function isAddressSelected(address) {
    // if using browser/MetaMask, we must use the currently selected account;
    // however, it can be blank the first time the user connects their account.
    var selectedAddress = getSelectedAddress();
    return !selectedAddress || selectedAddress.toLowerCase() === address;
  }

  /*

  The default export is a decorator definition.

  If a function is decorated with `@tracksTransactions`, it should expect its last
  argument to be an object with a key named `promise`. It should pass that
  `promise` argument along as a key in the last argument to any non-constant
  function calls it makes to a smart contract (i.e. an instance returned from the
  getContract method in SmartContractService), or any calls it makes to other
  functions that will eventually call such smart contract functions.

  This allows TransactionManager to let users input a promise and attach lifecycle
  callbacks to all transactions that were created in the course of executing that
  promise.

  @tracksTransactions is only necessary when the function is async. If the
  function returns a contract call and does not make any async calls before that,
  then the async keyword can be removed, and it just needs to have an `options`
  argument that it passes to its contract call.

  If you need to apply this to a function that has any arguments with default
  values, use `@tracksTransactionsWithOptions({ numArguments })` instead, where
  `numArguments` is the total number of arguments to the function, including the
  last object which contains a key named `promise`.

  */

  var tracksTransactions = /*#__PURE__*/tracksTransactionsWithOptions({});
  function tracksTransactionsWithOptions(_ref) {
    var numArguments = _ref.numArguments;
    return function (target, name, descriptor) {
      var original = descriptor.value;
      var correctArgsLength = numArguments || original.length;

      descriptor.value = function () {
        var _this = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var last = args[args.length - 1];
        var options;

        if (typeof last === 'object' && last !== null && last.constructor === Object) {
          args = args.slice(0, args.length - 1);
          options = last;
        } else {
          options = {};
        }

        var promise = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
          var newArgs;
          return runtime_1.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return 0;

                case 2:
                  // if there's already a promise, reuse it instead of setting this one--
                  // this allows the function we're running to behave differently when
                  // it's called directly vs. by another function. e.g. lockWeth
                  if (!options.promise) options.promise = promise; // pad the list of arguments with `undefined` to account for any missing
                  // ones with default values.

                  newArgs = [].concat(args, lodashEs.times(correctArgsLength - 1 - args.length, function () {
                    return undefined;
                  }), [options]);
                  return _context.abrupt("return", original.apply(_this, newArgs));

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();

        return promise;
      };

      return descriptor;
    };
  }

  var maxAllowance = /*#__PURE__*/new BigNumber(UINT256_MAX).shiftedBy(-18);

  var AllowanceService = /*#__PURE__*/function (_PrivateService) {
    _inheritsLoose(AllowanceService, _PrivateService);

    function AllowanceService(name) {
      var _this;

      if (name === void 0) {
        name = 'allowance';
      }

      _this = _PrivateService.call(this, name, ['token', 'event']) || this;
      _this._shouldMinimizeAllowance = false;
      return _this;
    }

    var _proto = AllowanceService.prototype;

    _proto.initialize = function initialize(settings) {
      if (settings && settings.useMinimizeAllowancePolicy) {
        this._shouldMinimizeAllowance = true;
      }
    };

    _proto.requireAllowance = /*#__PURE__*/function () {
      var _requireAllowance = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(tokenSymbol, receiverAddress, _ref) {
        var _ref$estimate, estimate, promise, token, ownerAddress, allowance, tx, _tx;

        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref$estimate = _ref.estimate, estimate = _ref$estimate === void 0 ? maxAllowance : _ref$estimate, promise = _ref.promise;
                token = this.get('token').getToken(tokenSymbol);
                ownerAddress = this.get('token').get('web3').currentAddress();
                _context.next = 5;
                return token.allowance(ownerAddress, receiverAddress);

              case 5:
                allowance = _context.sent;

                if (!(allowance.lt(maxAllowance.div(2)) && !this._shouldMinimizeAllowance)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 9;
                return token.approveUnlimited(receiverAddress, {
                  promise: promise
                });

              case 9:
                tx = _context.sent;
                this.get('event').emit('allowance/APPROVE', {
                  transaction: tx
                });
                return _context.abrupt("return", tx);

              case 12:
                if (!(allowance.lt(estimate) && this._shouldMinimizeAllowance)) {
                  _context.next = 17;
                  break;
                }

                _context.next = 15;
                return token.approve(receiverAddress, estimate, {
                  promise: promise
                });

              case 15:
                _tx = _context.sent;
                this.get('event').emit('allowance/APPROVE', {
                  transaction: _tx
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function requireAllowance(_x, _x2, _x3) {
        return _requireAllowance.apply(this, arguments);
      }

      return requireAllowance;
    }();

    _proto.removeAllowance = /*#__PURE__*/function () {
      var _removeAllowance = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(tokenSymbol, spenderAddress, _ref2) {
        var promise, token, allowance;
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                promise = _ref2.promise;
                token = this.get('token').getToken(tokenSymbol);
                _context2.next = 4;
                return token.allowance(this.get('token').get('web3').currentAddress(), spenderAddress);

              case 4:
                allowance = _context2.sent;

                if (!(parseInt(allowance) != 0)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", token.approve(spenderAddress, '0', {
                  promise: promise
                }));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function removeAllowance(_x4, _x5, _x6) {
        return _removeAllowance.apply(this, arguments);
      }

      return removeAllowance;
    }();

    return AllowanceService;
  }(servicesCore.PrivateService);

  tslib.__decorate([tracksTransactions, tslib.__metadata("design:type", Function), tslib.__metadata("design:paramtypes", [Object, Object, Object]), tslib.__metadata("design:returntype", Promise)], AllowanceService.prototype, "requireAllowance", null);

  tslib.__decorate([tracksTransactions, tslib.__metadata("design:type", Function), tslib.__metadata("design:paramtypes", [Object, Object, Object]), tslib.__metadata("design:returntype", Promise)], AllowanceService.prototype, "removeAllowance", null);

  var CacheService = /*#__PURE__*/function (_LocalService) {
    _inheritsLoose(CacheService, _LocalService);

    function CacheService(name) {
      if (name === void 0) {
        name = 'cache';
      }

      return _LocalService.call(this, name) || this;
    }

    var _proto = CacheService.prototype;

    _proto.initialize = function initialize(settings) {
      if (settings === void 0) {
        settings = {};
      }

      if (settings.storage) {
        this._storage = settings.storage;
      }
    };

    _proto.isEnabled = function isEnabled() {
      return !!this._storage;
    };

    _proto.has = function has(key) {
      return !!this._storage && key in this._storage;
    };

    _proto.fetch = function fetch(key) {
      return this._storage ? this._storage[key] : undefined;
    };

    _proto.store = function store(key, value) {
      if (this._storage) this._storage[key] = value;
    };

    return CacheService;
  }(servicesCore.LocalService);

  var ERC20TokenAbi = [
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "guy",
  				type: "address"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "approve",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "totalSupply",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "src",
  				type: "address"
  			},
  			{
  				name: "dst",
  				type: "address"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "transferFrom",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "guy",
  				type: "address"
  			}
  		],
  		name: "balanceOf",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "dst",
  				type: "address"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "transfer",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "src",
  				type: "address"
  			},
  			{
  				name: "guy",
  				type: "address"
  			}
  		],
  		name: "allowance",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "src",
  				type: "address"
  			},
  			{
  				indexed: true,
  				name: "guy",
  				type: "address"
  			},
  			{
  				indexed: false,
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "Approval",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "src",
  				type: "address"
  			},
  			{
  				indexed: true,
  				name: "dst",
  				type: "address"
  			},
  			{
  				indexed: false,
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "Transfer",
  		type: "event"
  	}
  ];

  var dsEthToken = [
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "name",
  		outputs: [
  			{
  				name: "",
  				type: "string"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "guy",
  				type: "address"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "approve",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "totalSupply",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "src",
  				type: "address"
  			},
  			{
  				name: "dst",
  				type: "address"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "transferFrom",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "withdraw",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "decimals",
  		outputs: [
  			{
  				name: "",
  				type: "uint8"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		name: "balanceOf",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "symbol",
  		outputs: [
  			{
  				name: "",
  				type: "string"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "dst",
  				type: "address"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "transfer",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  		],
  		name: "deposit",
  		outputs: [
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "",
  				type: "address"
  			},
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		name: "allowance",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		payable: true,
  		stateMutability: "payable",
  		type: "fallback"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "src",
  				type: "address"
  			},
  			{
  				indexed: true,
  				name: "guy",
  				type: "address"
  			},
  			{
  				indexed: false,
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "Approval",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "src",
  				type: "address"
  			},
  			{
  				indexed: true,
  				name: "dst",
  				type: "address"
  			},
  			{
  				indexed: false,
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "Transfer",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "dst",
  				type: "address"
  			},
  			{
  				indexed: false,
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "Deposit",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "src",
  				type: "address"
  			},
  			{
  				indexed: false,
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "Withdrawal",
  		type: "event"
  	}
  ];

  var dsValue = [
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "owner_",
  				type: "address"
  			}
  		],
  		name: "setOwner",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "wut",
  				type: "bytes32"
  			}
  		],
  		name: "poke",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "read",
  		outputs: [
  			{
  				name: "",
  				type: "bytes32"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "peek",
  		outputs: [
  			{
  				name: "",
  				type: "bytes32"
  			},
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "authority_",
  				type: "address"
  			}
  		],
  		name: "setAuthority",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "owner",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  		],
  		name: "void",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "authority",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		anonymous: true,
  		inputs: [
  			{
  				indexed: true,
  				name: "sig",
  				type: "bytes4"
  			},
  			{
  				indexed: true,
  				name: "guy",
  				type: "address"
  			},
  			{
  				indexed: true,
  				name: "foo",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				name: "bar",
  				type: "bytes32"
  			},
  			{
  				indexed: false,
  				name: "wad",
  				type: "uint256"
  			},
  			{
  				indexed: false,
  				name: "fax",
  				type: "bytes"
  			}
  		],
  		name: "LogNote",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "authority",
  				type: "address"
  			}
  		],
  		name: "LogSetAuthority",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "owner",
  				type: "address"
  			}
  		],
  		name: "LogSetOwner",
  		type: "event"
  	}
  ];

  var dsGuard = [
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "owner_",
  				type: "address"
  			}
  		],
  		name: "setOwner",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "src",
  				type: "address"
  			},
  			{
  				name: "dst",
  				type: "address"
  			},
  			{
  				name: "sig",
  				type: "bytes32"
  			}
  		],
  		name: "forbid",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "src",
  				type: "bytes32"
  			},
  			{
  				name: "dst",
  				type: "bytes32"
  			},
  			{
  				name: "sig",
  				type: "bytes32"
  			}
  		],
  		name: "forbid",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "authority_",
  				type: "address"
  			}
  		],
  		name: "setAuthority",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "owner",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "ANY",
  		outputs: [
  			{
  				name: "",
  				type: "bytes32"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "src_",
  				type: "address"
  			},
  			{
  				name: "dst_",
  				type: "address"
  			},
  			{
  				name: "sig",
  				type: "bytes4"
  			}
  		],
  		name: "canCall",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "authority",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "src",
  				type: "address"
  			},
  			{
  				name: "dst",
  				type: "address"
  			},
  			{
  				name: "sig",
  				type: "bytes32"
  			}
  		],
  		name: "permit",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "src",
  				type: "bytes32"
  			},
  			{
  				name: "dst",
  				type: "bytes32"
  			},
  			{
  				name: "sig",
  				type: "bytes32"
  			}
  		],
  		name: "permit",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "src",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				name: "dst",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				name: "sig",
  				type: "bytes32"
  			}
  		],
  		name: "LogPermit",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "src",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				name: "dst",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				name: "sig",
  				type: "bytes32"
  			}
  		],
  		name: "LogForbid",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "authority",
  				type: "address"
  			}
  		],
  		name: "LogSetAuthority",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "owner",
  				type: "address"
  			}
  		],
  		name: "LogSetOwner",
  		type: "event"
  	}
  ];

  var dsChief = [
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "IOU",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "who",
  				type: "address"
  			}
  		],
  		name: "getUserRoles",
  		outputs: [
  			{
  				name: "",
  				type: "bytes32"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "owner_",
  				type: "address"
  			}
  		],
  		name: "setOwner",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "GOV",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "code",
  				type: "address"
  			},
  			{
  				name: "sig",
  				type: "bytes4"
  			}
  		],
  		name: "getCapabilityRoles",
  		outputs: [
  			{
  				name: "",
  				type: "bytes32"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "code",
  				type: "address"
  			},
  			{
  				name: "sig",
  				type: "bytes4"
  			}
  		],
  		name: "isCapabilityPublic",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "MAX_YAYS",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "whom",
  				type: "address"
  			}
  		],
  		name: "lift",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "yays",
  				type: "address[]"
  			}
  		],
  		name: "etch",
  		outputs: [
  			{
  				name: "slate",
  				type: "bytes32"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		name: "approvals",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "who",
  				type: "address"
  			},
  			{
  				name: "role",
  				type: "uint8"
  			},
  			{
  				name: "enabled",
  				type: "bool"
  			}
  		],
  		name: "setUserRole",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "authority_",
  				type: "address"
  			}
  		],
  		name: "setAuthority",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "role",
  				type: "uint8"
  			},
  			{
  				name: "code",
  				type: "address"
  			},
  			{
  				name: "sig",
  				type: "bytes4"
  			},
  			{
  				name: "enabled",
  				type: "bool"
  			}
  		],
  		name: "setRoleCapability",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "owner",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "who",
  				type: "address"
  			},
  			{
  				name: "role",
  				type: "uint8"
  			}
  		],
  		name: "hasUserRole",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "slate",
  				type: "bytes32"
  			}
  		],
  		name: "vote",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "caller",
  				type: "address"
  			},
  			{
  				name: "code",
  				type: "address"
  			},
  			{
  				name: "sig",
  				type: "bytes4"
  			}
  		],
  		name: "canCall",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "authority",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "",
  				type: "bytes32"
  			},
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		name: "slates",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "code",
  				type: "address"
  			},
  			{
  				name: "sig",
  				type: "bytes4"
  			},
  			{
  				name: "enabled",
  				type: "bool"
  			}
  		],
  		name: "setPublicCapability",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "who",
  				type: "address"
  			},
  			{
  				name: "enabled",
  				type: "bool"
  			}
  		],
  		name: "setRootUser",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		name: "votes",
  		outputs: [
  			{
  				name: "",
  				type: "bytes32"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "free",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "lock",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "yays",
  				type: "address[]"
  			}
  		],
  		name: "vote",
  		outputs: [
  			{
  				name: "",
  				type: "bytes32"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "who",
  				type: "address"
  			}
  		],
  		name: "isUserRoot",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		name: "deposits",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "hat",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				name: "GOV",
  				type: "address"
  			},
  			{
  				name: "IOU",
  				type: "address"
  			},
  			{
  				name: "MAX_YAYS",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "slate",
  				type: "bytes32"
  			}
  		],
  		name: "Etch",
  		type: "event"
  	},
  	{
  		anonymous: true,
  		inputs: [
  			{
  				indexed: true,
  				name: "sig",
  				type: "bytes4"
  			},
  			{
  				indexed: true,
  				name: "guy",
  				type: "address"
  			},
  			{
  				indexed: true,
  				name: "foo",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				name: "bar",
  				type: "bytes32"
  			},
  			{
  				indexed: false,
  				name: "wad",
  				type: "uint256"
  			},
  			{
  				indexed: false,
  				name: "fax",
  				type: "bytes"
  			}
  		],
  		name: "LogNote",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "authority",
  				type: "address"
  			}
  		],
  		name: "LogSetAuthority",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "owner",
  				type: "address"
  			}
  		],
  		name: "LogSetOwner",
  		type: "event"
  	}
  ];

  var dsSpell = [
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "data",
  		outputs: [
  			{
  				name: "",
  				type: "bytes"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  		],
  		name: "cast",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "done",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "mana",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "whom",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				name: "whom_",
  				type: "address"
  			},
  			{
  				name: "mana_",
  				type: "uint256"
  			},
  			{
  				name: "data_",
  				type: "bytes"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		anonymous: true,
  		inputs: [
  			{
  				indexed: true,
  				name: "sig",
  				type: "bytes4"
  			},
  			{
  				indexed: true,
  				name: "guy",
  				type: "address"
  			},
  			{
  				indexed: true,
  				name: "foo",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				name: "bar",
  				type: "bytes32"
  			},
  			{
  				indexed: false,
  				name: "wad",
  				type: "uint256"
  			},
  			{
  				indexed: false,
  				name: "fax",
  				type: "bytes"
  			}
  		],
  		name: "LogNote",
  		type: "event"
  	}
  ];

  var dsSpellBook = [
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "whom",
  				type: "address"
  			},
  			{
  				name: "mana",
  				type: "uint256"
  			},
  			{
  				name: "data",
  				type: "bytes"
  			}
  		],
  		name: "make",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];

  var dsProxy = [
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "owner_",
  				type: "address"
  			}
  		],
  		name: "setOwner",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "_target",
  				type: "address"
  			},
  			{
  				name: "_data",
  				type: "bytes"
  			}
  		],
  		name: "execute",
  		outputs: [
  			{
  				name: "response",
  				type: "bytes"
  			}
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "_code",
  				type: "bytes"
  			},
  			{
  				name: "_data",
  				type: "bytes"
  			}
  		],
  		name: "execute",
  		outputs: [
  			{
  				name: "target",
  				type: "address"
  			},
  			{
  				name: "response",
  				type: "bytes"
  			}
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "cache",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "authority_",
  				type: "address"
  			}
  		],
  		name: "setAuthority",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "owner",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "_cacheAddr",
  				type: "address"
  			}
  		],
  		name: "setCache",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "authority",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				name: "_cacheAddr",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		payable: true,
  		stateMutability: "payable",
  		type: "fallback"
  	},
  	{
  		anonymous: true,
  		inputs: [
  			{
  				indexed: true,
  				name: "sig",
  				type: "bytes4"
  			},
  			{
  				indexed: true,
  				name: "guy",
  				type: "address"
  			},
  			{
  				indexed: true,
  				name: "foo",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				name: "bar",
  				type: "bytes32"
  			},
  			{
  				indexed: false,
  				name: "wad",
  				type: "uint256"
  			},
  			{
  				indexed: false,
  				name: "fax",
  				type: "bytes"
  			}
  		],
  		name: "LogNote",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "authority",
  				type: "address"
  			}
  		],
  		name: "LogSetAuthority",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "owner",
  				type: "address"
  			}
  		],
  		name: "LogSetOwner",
  		type: "event"
  	}
  ];

  var dsProxyFactory = [
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		name: "isProxy",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "cache",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  		],
  		name: "build",
  		outputs: [
  			{
  				name: "proxy",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "owner",
  				type: "address"
  			}
  		],
  		name: "build",
  		outputs: [
  			{
  				name: "proxy",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "sender",
  				type: "address"
  			},
  			{
  				indexed: true,
  				name: "owner",
  				type: "address"
  			},
  			{
  				indexed: false,
  				name: "proxy",
  				type: "address"
  			},
  			{
  				indexed: false,
  				name: "cache",
  				type: "address"
  			}
  		],
  		name: "Created",
  		type: "event"
  	}
  ];

  var makerOtc = [
  	{
  		inputs: [
  			{
  				internalType: "uint64",
  				name: "close_time",
  				type: "uint64"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				internalType: "bytes32",
  				name: "id",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				internalType: "bytes32",
  				name: "pair",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				internalType: "address",
  				name: "maker",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "uint128",
  				name: "pay_amt",
  				type: "uint128"
  			},
  			{
  				indexed: false,
  				internalType: "uint128",
  				name: "buy_amt",
  				type: "uint128"
  			},
  			{
  				indexed: false,
  				internalType: "uint64",
  				name: "timestamp",
  				type: "uint64"
  			}
  		],
  		name: "LogBump",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "bool",
  				name: "isEnabled",
  				type: "bool"
  			}
  		],
  		name: "LogBuyEnabled",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "address",
  				name: "keeper",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "LogDelete",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "address",
  				name: "keeper",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "LogInsert",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "LogItemUpdate",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				internalType: "bytes32",
  				name: "id",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				internalType: "bytes32",
  				name: "pair",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				internalType: "address",
  				name: "maker",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "uint128",
  				name: "pay_amt",
  				type: "uint128"
  			},
  			{
  				indexed: false,
  				internalType: "uint128",
  				name: "buy_amt",
  				type: "uint128"
  			},
  			{
  				indexed: false,
  				internalType: "uint64",
  				name: "timestamp",
  				type: "uint64"
  			}
  		],
  		name: "LogKill",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				internalType: "bytes32",
  				name: "id",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				internalType: "bytes32",
  				name: "pair",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				internalType: "address",
  				name: "maker",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "uint128",
  				name: "pay_amt",
  				type: "uint128"
  			},
  			{
  				indexed: false,
  				internalType: "uint128",
  				name: "buy_amt",
  				type: "uint128"
  			},
  			{
  				indexed: false,
  				internalType: "uint64",
  				name: "timestamp",
  				type: "uint64"
  			}
  		],
  		name: "LogMake",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "bool",
  				name: "isEnabled",
  				type: "bool"
  			}
  		],
  		name: "LogMatchingEnabled",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "address",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "min_amount",
  				type: "uint256"
  			}
  		],
  		name: "LogMinSell",
  		type: "event"
  	},
  	{
  		anonymous: true,
  		inputs: [
  			{
  				indexed: true,
  				internalType: "bytes4",
  				name: "sig",
  				type: "bytes4"
  			},
  			{
  				indexed: true,
  				internalType: "address",
  				name: "guy",
  				type: "address"
  			},
  			{
  				indexed: true,
  				internalType: "bytes32",
  				name: "foo",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				internalType: "bytes32",
  				name: "bar",
  				type: "bytes32"
  			},
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "wad",
  				type: "uint256"
  			},
  			{
  				indexed: false,
  				internalType: "bytes",
  				name: "fax",
  				type: "bytes"
  			}
  		],
  		name: "LogNote",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				internalType: "address",
  				name: "authority",
  				type: "address"
  			}
  		],
  		name: "LogSetAuthority",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				internalType: "address",
  				name: "owner",
  				type: "address"
  			}
  		],
  		name: "LogSetOwner",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "LogSortedOffer",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "bytes32",
  				name: "id",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				internalType: "bytes32",
  				name: "pair",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				internalType: "address",
  				name: "maker",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			},
  			{
  				indexed: true,
  				internalType: "address",
  				name: "taker",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "uint128",
  				name: "take_amt",
  				type: "uint128"
  			},
  			{
  				indexed: false,
  				internalType: "uint128",
  				name: "give_amt",
  				type: "uint128"
  			},
  			{
  				indexed: false,
  				internalType: "uint64",
  				name: "timestamp",
  				type: "uint64"
  			}
  		],
  		name: "LogTake",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "pay_amt",
  				type: "uint256"
  			},
  			{
  				indexed: true,
  				internalType: "address",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "buy_amt",
  				type: "uint256"
  			},
  			{
  				indexed: true,
  				internalType: "address",
  				name: "buy_gem",
  				type: "address"
  			}
  		],
  		name: "LogTrade",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "LogUnsortedOffer",
  		type: "event"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		name: "_best",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		name: "_dust",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		name: "_near",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		name: "_rank",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "next",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "prev",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "delb",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		name: "_span",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "authority",
  		outputs: [
  			{
  				internalType: "contract DSAuthority",
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "bytes32",
  				name: "id_",
  				type: "bytes32"
  			}
  		],
  		name: "bump",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "amount",
  				type: "uint256"
  			}
  		],
  		name: "buy",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "buy_amt",
  				type: "uint256"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "max_fill_amount",
  				type: "uint256"
  			}
  		],
  		name: "buyAllAmount",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "fill_amt",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "buyEnabled",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "cancel",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "success",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "close_time",
  		outputs: [
  			{
  				internalType: "uint64",
  				name: "",
  				type: "uint64"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "del_rank",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "dustId",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "contract ERC20",
  				name: "sell_gem",
  				type: "address"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			}
  		],
  		name: "getBestOffer",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "getBetterOffer",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "pay_amt",
  				type: "uint256"
  			}
  		],
  		name: "getBuyAmount",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "fill_amt",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "getFirstUnsortedOffer",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			}
  		],
  		name: "getMinSell",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "getNextUnsortedOffer",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "getOffer",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "contract ERC20",
  				name: "sell_gem",
  				type: "address"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			}
  		],
  		name: "getOfferCount",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "getOwner",
  		outputs: [
  			{
  				internalType: "address",
  				name: "owner",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "buy_amt",
  				type: "uint256"
  			}
  		],
  		name: "getPayAmount",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "fill_amt",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "getTime",
  		outputs: [
  			{
  				internalType: "uint64",
  				name: "",
  				type: "uint64"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "getWorseOffer",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			},
  			{
  				internalType: "uint256",
  				name: "pos",
  				type: "uint256"
  			}
  		],
  		name: "insert",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "isActive",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "active",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "isClosed",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "closed",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "id",
  				type: "uint256"
  			}
  		],
  		name: "isOfferSorted",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "bytes32",
  				name: "id",
  				type: "bytes32"
  			}
  		],
  		name: "kill",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "last_offer_id",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint128",
  				name: "pay_amt",
  				type: "uint128"
  			},
  			{
  				internalType: "uint128",
  				name: "buy_amt",
  				type: "uint128"
  			}
  		],
  		name: "make",
  		outputs: [
  			{
  				internalType: "bytes32",
  				name: "",
  				type: "bytes32"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "matchingEnabled",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "pay_amt",
  				type: "uint256"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "buy_amt",
  				type: "uint256"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "pos",
  				type: "uint256"
  			}
  		],
  		name: "offer",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "pay_amt",
  				type: "uint256"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "buy_amt",
  				type: "uint256"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "pos",
  				type: "uint256"
  			},
  			{
  				internalType: "bool",
  				name: "rounding",
  				type: "bool"
  			}
  		],
  		name: "offer",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "pay_amt",
  				type: "uint256"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "buy_amt",
  				type: "uint256"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			}
  		],
  		name: "offer",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "",
  				type: "uint256"
  			}
  		],
  		name: "offers",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "pay_amt",
  				type: "uint256"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "buy_amt",
  				type: "uint256"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "owner",
  				type: "address"
  			},
  			{
  				internalType: "uint64",
  				name: "timestamp",
  				type: "uint64"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "owner",
  		outputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "pay_amt",
  				type: "uint256"
  			},
  			{
  				internalType: "contract ERC20",
  				name: "buy_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "min_fill_amount",
  				type: "uint256"
  			}
  		],
  		name: "sellAllAmount",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "fill_amt",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "contract DSAuthority",
  				name: "authority_",
  				type: "address"
  			}
  		],
  		name: "setAuthority",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "bool",
  				name: "buyEnabled_",
  				type: "bool"
  			}
  		],
  		name: "setBuyEnabled",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "bool",
  				name: "matchingEnabled_",
  				type: "bool"
  			}
  		],
  		name: "setMatchingEnabled",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "contract ERC20",
  				name: "pay_gem",
  				type: "address"
  			},
  			{
  				internalType: "uint256",
  				name: "dust",
  				type: "uint256"
  			}
  		],
  		name: "setMinSell",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "address",
  				name: "owner_",
  				type: "address"
  			}
  		],
  		name: "setOwner",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  		],
  		name: "stop",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "stopped",
  		outputs: [
  			{
  				internalType: "bool",
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "bytes32",
  				name: "id",
  				type: "bytes32"
  			},
  			{
  				internalType: "uint128",
  				name: "maxTakeAmount",
  				type: "uint128"
  			}
  		],
  		name: "take",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	}
  ];

  var oasisProxy = [
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "otc",
  				type: "address"
  			},
  			{
  				name: "payToken",
  				type: "address"
  			},
  			{
  				name: "payAmt",
  				type: "uint256"
  			},
  			{
  				name: "wethToken",
  				type: "address"
  			},
  			{
  				name: "minBuyAmt",
  				type: "uint256"
  			}
  		],
  		name: "sellAllAmountBuyEth",
  		outputs: [
  			{
  				name: "wethAmt",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "otc",
  				type: "address"
  			},
  			{
  				name: "payToken",
  				type: "address"
  			},
  			{
  				name: "payAmt",
  				type: "uint256"
  			},
  			{
  				name: "buyToken",
  				type: "address"
  			},
  			{
  				name: "minBuyAmt",
  				type: "uint256"
  			}
  		],
  		name: "sellAllAmount",
  		outputs: [
  			{
  				name: "buyAmt",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "otc",
  				type: "address"
  			},
  			{
  				name: "buyToken",
  				type: "address"
  			},
  			{
  				name: "buyAmt",
  				type: "uint256"
  			},
  			{
  				name: "payToken",
  				type: "address"
  			},
  			{
  				name: "maxPayAmt",
  				type: "uint256"
  			}
  		],
  		name: "buyAllAmount",
  		outputs: [
  			{
  				name: "payAmt",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "factory",
  				type: "address"
  			},
  			{
  				name: "otc",
  				type: "address"
  			},
  			{
  				name: "wethAmt",
  				type: "uint256"
  			},
  			{
  				name: "payToken",
  				type: "address"
  			},
  			{
  				name: "maxPayAmt",
  				type: "uint256"
  			}
  		],
  		name: "createAndBuyAllAmountBuyEth",
  		outputs: [
  			{
  				name: "proxy",
  				type: "address"
  			},
  			{
  				name: "payAmt",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "factory",
  				type: "address"
  			},
  			{
  				name: "otc",
  				type: "address"
  			},
  			{
  				name: "payToken",
  				type: "address"
  			},
  			{
  				name: "payAmt",
  				type: "uint256"
  			},
  			{
  				name: "minBuyAmt",
  				type: "uint256"
  			}
  		],
  		name: "createAndSellAllAmountBuyEth",
  		outputs: [
  			{
  				name: "proxy",
  				type: "address"
  			},
  			{
  				name: "wethAmt",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "factory",
  				type: "address"
  			},
  			{
  				name: "otc",
  				type: "address"
  			},
  			{
  				name: "buyToken",
  				type: "address"
  			},
  			{
  				name: "buyAmt",
  				type: "uint256"
  			}
  		],
  		name: "createAndBuyAllAmountPayEth",
  		outputs: [
  			{
  				name: "proxy",
  				type: "address"
  			},
  			{
  				name: "wethAmt",
  				type: "uint256"
  			}
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "factory",
  				type: "address"
  			},
  			{
  				name: "otc",
  				type: "address"
  			},
  			{
  				name: "buyToken",
  				type: "address"
  			},
  			{
  				name: "minBuyAmt",
  				type: "uint256"
  			}
  		],
  		name: "createAndSellAllAmountPayEth",
  		outputs: [
  			{
  				name: "proxy",
  				type: "address"
  			},
  			{
  				name: "buyAmt",
  				type: "uint256"
  			}
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "factory",
  				type: "address"
  			},
  			{
  				name: "otc",
  				type: "address"
  			},
  			{
  				name: "buyToken",
  				type: "address"
  			},
  			{
  				name: "buyAmt",
  				type: "uint256"
  			},
  			{
  				name: "payToken",
  				type: "address"
  			},
  			{
  				name: "maxPayAmt",
  				type: "uint256"
  			}
  		],
  		name: "createAndBuyAllAmount",
  		outputs: [
  			{
  				name: "proxy",
  				type: "address"
  			},
  			{
  				name: "payAmt",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "otc",
  				type: "address"
  			},
  			{
  				name: "buyToken",
  				type: "address"
  			},
  			{
  				name: "buyAmt",
  				type: "uint256"
  			},
  			{
  				name: "wethToken",
  				type: "address"
  			}
  		],
  		name: "buyAllAmountPayEth",
  		outputs: [
  			{
  				name: "wethAmt",
  				type: "uint256"
  			}
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "factory",
  				type: "address"
  			},
  			{
  				name: "otc",
  				type: "address"
  			},
  			{
  				name: "payToken",
  				type: "address"
  			},
  			{
  				name: "payAmt",
  				type: "uint256"
  			},
  			{
  				name: "buyToken",
  				type: "address"
  			},
  			{
  				name: "minBuyAmt",
  				type: "uint256"
  			}
  		],
  		name: "createAndSellAllAmount",
  		outputs: [
  			{
  				name: "proxy",
  				type: "address"
  			},
  			{
  				name: "buyAmt",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "otc",
  				type: "address"
  			},
  			{
  				name: "wethToken",
  				type: "address"
  			},
  			{
  				name: "buyToken",
  				type: "address"
  			},
  			{
  				name: "minBuyAmt",
  				type: "uint256"
  			}
  		],
  		name: "sellAllAmountPayEth",
  		outputs: [
  			{
  				name: "buyAmt",
  				type: "uint256"
  			}
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "otc",
  				type: "address"
  			},
  			{
  				name: "wethToken",
  				type: "address"
  			},
  			{
  				name: "wethAmt",
  				type: "uint256"
  			},
  			{
  				name: "payToken",
  				type: "address"
  			},
  			{
  				name: "maxPayAmt",
  				type: "uint256"
  			}
  		],
  		name: "buyAllAmountBuyEth",
  		outputs: [
  			{
  				name: "payAmt",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				name: "wethToken_",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		payable: true,
  		stateMutability: "payable",
  		type: "fallback"
  	}
  ];

  var saiProxy = [
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tub_",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "draw",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tub_",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "jam",
  				type: "uint256"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			},
  			{
  				name: "otc_",
  				type: "address"
  			}
  		],
  		name: "wipeAndFree",
  		outputs: [
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tub_",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "lockAndDraw",
  		outputs: [
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tub_",
  				type: "address"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "lockAndDraw",
  		outputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "registry_",
  				type: "address"
  			},
  			{
  				name: "tub_",
  				type: "address"
  			}
  		],
  		name: "createAndOpen",
  		outputs: [
  			{
  				name: "proxy",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tub_",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "otc_",
  				type: "address"
  			}
  		],
  		name: "shut",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tub_",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			},
  			{
  				name: "otc_",
  				type: "address"
  			}
  		],
  		name: "wipe",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tub_",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "wipe",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tub_",
  				type: "address"
  			}
  		],
  		name: "open",
  		outputs: [
  			{
  				name: "",
  				type: "bytes32"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tub_",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		name: "shut",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tub_",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		name: "lock",
  		outputs: [
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "registry_",
  				type: "address"
  			},
  			{
  				name: "tub_",
  				type: "address"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "createOpenLockAndDraw",
  		outputs: [
  			{
  				name: "proxy",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tub_",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "lad",
  				type: "address"
  			}
  		],
  		name: "give",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "registry_",
  				type: "address"
  			},
  			{
  				name: "tub_",
  				type: "address"
  			}
  		],
  		name: "createOpenAndLock",
  		outputs: [
  			{
  				name: "proxy",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tub_",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "jam",
  				type: "uint256"
  			}
  		],
  		name: "free",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tub_",
  				type: "address"
  			},
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "jam",
  				type: "uint256"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "wipeAndFree",
  		outputs: [
  		],
  		payable: true,
  		stateMutability: "payable",
  		type: "function"
  	}
  ];

  var proxyRegistry = [
  	{
  		constant: false,
  		inputs: [
  		],
  		name: "build",
  		outputs: [
  			{
  				name: "proxy",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		name: "proxies",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "owner",
  				type: "address"
  			}
  		],
  		name: "build",
  		outputs: [
  			{
  				name: "proxy",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				name: "factory_",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "constructor"
  	}
  ];

  var tub = [
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "join",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "sin",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "skr",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "gov",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "owner_",
  				type: "address"
  			}
  		],
  		name: "setOwner",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "era",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		name: "ink",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "rho",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "air",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  		],
  		name: "rhi",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  		],
  		name: "flow",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "cap",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		name: "bite",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "draw",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "bid",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "cupi",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "axe",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "tag",
  		outputs: [
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "off",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "vox",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "gap",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		name: "rap",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "wipe",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "authority_",
  				type: "address"
  			}
  		],
  		name: "setAuthority",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "gem",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "tap_",
  				type: "address"
  			}
  		],
  		name: "turn",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "per",
  		outputs: [
  			{
  				name: "ray",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "exit",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "pip_",
  				type: "address"
  			}
  		],
  		name: "setPip",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "pie",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "fit_",
  				type: "uint256"
  			},
  			{
  				name: "jam",
  				type: "uint256"
  			}
  		],
  		name: "cage",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "rum",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "owner",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "sai",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "param",
  				type: "bytes32"
  			},
  			{
  				name: "val",
  				type: "uint256"
  			}
  		],
  		name: "mold",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "tax",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  		],
  		name: "drip",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "free",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "mat",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "pep",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "out",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "lock",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		name: "shut",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			},
  			{
  				name: "guy",
  				type: "address"
  			}
  		],
  		name: "give",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "authority",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "fit",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  		],
  		name: "chi",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "vox_",
  				type: "address"
  			}
  		],
  		name: "setVox",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "pip",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "pep_",
  				type: "address"
  			}
  		],
  		name: "setPep",
  		outputs: [
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "fee",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		name: "lad",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  		],
  		name: "din",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "ask",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		name: "safe",
  		outputs: [
  			{
  				name: "",
  				type: "bool"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "pit",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		name: "tab",
  		outputs: [
  			{
  				name: "",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: false,
  		inputs: [
  		],
  		name: "open",
  		outputs: [
  			{
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "tap",
  		outputs: [
  			{
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				name: "",
  				type: "bytes32"
  			}
  		],
  		name: "cups",
  		outputs: [
  			{
  				name: "lad",
  				type: "address"
  			},
  			{
  				name: "ink",
  				type: "uint256"
  			},
  			{
  				name: "art",
  				type: "uint256"
  			},
  			{
  				name: "ire",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		inputs: [
  			{
  				name: "sai_",
  				type: "address"
  			},
  			{
  				name: "sin_",
  				type: "address"
  			},
  			{
  				name: "skr_",
  				type: "address"
  			},
  			{
  				name: "gem_",
  				type: "address"
  			},
  			{
  				name: "gov_",
  				type: "address"
  			},
  			{
  				name: "pip_",
  				type: "address"
  			},
  			{
  				name: "pep_",
  				type: "address"
  			},
  			{
  				name: "vox_",
  				type: "address"
  			},
  			{
  				name: "pit_",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "lad",
  				type: "address"
  			},
  			{
  				indexed: false,
  				name: "cup",
  				type: "bytes32"
  			}
  		],
  		name: "LogNewCup",
  		type: "event"
  	},
  	{
  		anonymous: true,
  		inputs: [
  			{
  				indexed: true,
  				name: "sig",
  				type: "bytes4"
  			},
  			{
  				indexed: true,
  				name: "guy",
  				type: "address"
  			},
  			{
  				indexed: true,
  				name: "foo",
  				type: "bytes32"
  			},
  			{
  				indexed: true,
  				name: "bar",
  				type: "bytes32"
  			},
  			{
  				indexed: false,
  				name: "wad",
  				type: "uint256"
  			},
  			{
  				indexed: false,
  				name: "fax",
  				type: "bytes"
  			}
  		],
  		name: "LogNote",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "authority",
  				type: "address"
  			}
  		],
  		name: "LogSetAuthority",
  		type: "event"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: true,
  				name: "owner",
  				type: "address"
  			}
  		],
  		name: "LogSetOwner",
  		type: "event"
  	}
  ];

  var multicall = [
  	{
  		constant: false,
  		inputs: [
  			{
  				components: [
  					{
  						internalType: "address",
  						name: "target",
  						type: "address"
  					},
  					{
  						internalType: "bytes",
  						name: "callData",
  						type: "bytes"
  					}
  				],
  				internalType: "struct Multicall.Call[]",
  				name: "calls",
  				type: "tuple[]"
  			}
  		],
  		name: "aggregate",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "blockNumber",
  				type: "uint256"
  			},
  			{
  				internalType: "bytes[]",
  				name: "returnData",
  				type: "bytes[]"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "blockNumber",
  				type: "uint256"
  			}
  		],
  		name: "getBlockHash",
  		outputs: [
  			{
  				internalType: "bytes32",
  				name: "blockHash",
  				type: "bytes32"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "getCurrentBlockCoinbase",
  		outputs: [
  			{
  				internalType: "address",
  				name: "coinbase",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "getCurrentBlockDifficulty",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "difficulty",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "getCurrentBlockGasLimit",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "gaslimit",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "getCurrentBlockTimestamp",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "timestamp",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  			{
  				internalType: "address",
  				name: "addr",
  				type: "address"
  			}
  		],
  		name: "getEthBalance",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "balance",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "getLastBlockHash",
  		outputs: [
  			{
  				internalType: "bytes32",
  				name: "blockHash",
  				type: "bytes32"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	}
  ];

  var cageFree = [
  	{
  		inputs: [
  			{
  				internalType: "address",
  				name: "_tap",
  				type: "address"
  			},
  			{
  				internalType: "address",
  				name: "_weth",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "constructor"
  	},
  	{
  		anonymous: false,
  		inputs: [
  			{
  				indexed: false,
  				internalType: "address",
  				name: "sender",
  				type: "address"
  			},
  			{
  				indexed: false,
  				internalType: "uint256",
  				name: "amount",
  				type: "uint256"
  			}
  		],
  		name: "FreeCash",
  		type: "event"
  	},
  	{
  		payable: true,
  		stateMutability: "payable",
  		type: "fallback"
  	},
  	{
  		constant: false,
  		inputs: [
  			{
  				internalType: "uint256",
  				name: "wad",
  				type: "uint256"
  			}
  		],
  		name: "freeCash",
  		outputs: [
  			{
  				internalType: "uint256",
  				name: "cashoutBalance",
  				type: "uint256"
  			}
  		],
  		payable: false,
  		stateMutability: "nonpayable",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "sai",
  		outputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "tap",
  		outputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	},
  	{
  		constant: true,
  		inputs: [
  		],
  		name: "weth",
  		outputs: [
  			{
  				internalType: "address",
  				name: "",
  				type: "address"
  			}
  		],
  		payable: false,
  		stateMutability: "view",
  		type: "function"
  	}
  ];

  var daiV1 = {
    tub: tub
  };
  var dappHub = {
    dsValue: dsValue,
    dsEthToken: dsEthToken,
    dsGuard: dsGuard,
    dsChief: dsChief,
    dsSpell: dsSpell,
    dsSpellBook: dsSpellBook,
    dsProxy: dsProxy
  };
  var exchangesV1 = {
    makerOtc: makerOtc
  };
  var general = {
    erc20: ERC20TokenAbi
  };
  var proxies = {
    oasisProxy: oasisProxy,
    saiProxy: saiProxy,
    dsProxyFactory: dsProxyFactory,
    proxyRegistry: proxyRegistry
  };
  var abis = {
    daiV1: daiV1,
    dappHub: dappHub,
    exchangesV1: exchangesV1,
    general: general,
    proxies: proxies,
    multicall: multicall,
    cageFree: cageFree
  };

  var DSProxyService = /*#__PURE__*/function (_PrivateService) {
    _inheritsLoose(DSProxyService, _PrivateService);

    function DSProxyService(name) {
      if (name === void 0) {
        name = 'proxy';
      }

      return _PrivateService.call(this, name, ['web3']) || this;
    }

    var _proto = DSProxyService.prototype;

    _proto.authenticate = /*#__PURE__*/function () {
      var _authenticate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getProxyAddress();

              case 2:
                this._currentProxy = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function authenticate() {
        return _authenticate.apply(this, arguments);
      }

      return authenticate;
    }();

    _proto.setSmartContractService = function setSmartContractService(service) {
      this._smartContractService = service;
    };

    _proto._proxyRegistry = function _proxyRegistry() {
      return this._smartContractService.getContract('PROXY_REGISTRY');
    };

    _proto._resetDefaults = function _resetDefaults(newProxy) {
      this._currentProxy = newProxy;
      this._currentAddress = this.get('web3').currentAddress();
    };

    _proto.currentProxy = /*#__PURE__*/function () {
      var _currentProxy = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this._currentAddress === this.get('web3').currentAddress() ? this._currentProxy : this.getProxyAddress());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function currentProxy() {
        return _currentProxy.apply(this, arguments);
      }

      return currentProxy;
    }();

    _proto.ensureProxy = /*#__PURE__*/function () {
      var _ensureProxy = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(_ref) {
        var promise, proxy;
        return runtime_1.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                promise = _ref.promise;
                _context3.next = 3;
                return this.currentProxy();

              case 3:
                proxy = _context3.sent;

                if (!proxy) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", proxy);

              case 6:
                _context3.next = 8;
                return this.build({
                  promise: promise
                });

              case 8:
                return _context3.abrupt("return", this._currentProxy);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function ensureProxy(_x) {
        return _ensureProxy.apply(this, arguments);
      }

      return ensureProxy;
    }();

    _proto.build = /*#__PURE__*/function () {
      var _build = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(_ref2) {
        var promise, proxy, txo;
        return runtime_1.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                promise = _ref2.promise;
                _context4.next = 3;
                return this.currentProxy();

              case 3:
                proxy = _context4.sent;

                if (!proxy) {
                  _context4.next = 6;
                  break;
                }

                throw new Error('This account already has a proxy deployed at ' + proxy);

              case 6:
                _context4.next = 8;
                return this._proxyRegistry().build({
                  promise: promise
                });

              case 8:
                txo = _context4.sent;
                this._currentProxy = txo.receipt.logs[0].address;
                return _context4.abrupt("return", txo);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function build(_x2) {
        return _build.apply(this, arguments);
      }

      return build;
    }();

    _proto.execute = function execute(contract, method, args, options, address) {
      if (!address && typeof this._currentProxy !== 'string') {
        throw new Error('No proxy found for current account');
      }

      var proxyAddress = address ? address : this._currentProxy;
      var proxyContract = this.getUnwrappedProxyContract(proxyAddress);
      var data = contract["interface"].encodeFunctionData(method, args);
      return proxyContract['execute(address,bytes)'](contract.address, data, options);
    };

    _proto.getProxyAddress = /*#__PURE__*/function () {
      var _getProxyAddress = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(providedAddress) {
        var address, proxyAddress;
        return runtime_1.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (providedAddress === void 0) {
                  providedAddress = false;
                }

                address = providedAddress ? providedAddress : this.get('web3').currentAddress();
                _context5.next = 4;
                return this._proxyRegistry().proxies(address);

              case 4:
                proxyAddress = _context5.sent;

                if (proxyAddress === '0x0000000000000000000000000000000000000000') {
                  proxyAddress = null;
                }

                if (!providedAddress) this._resetDefaults(proxyAddress);
                return _context5.abrupt("return", proxyAddress);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getProxyAddress(_x3) {
        return _getProxyAddress.apply(this, arguments);
      }

      return getProxyAddress;
    }();

    _proto.getOwner = /*#__PURE__*/function () {
      var _getOwner = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(address) {
        var contract;
        return runtime_1.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                contract = this._getWrappedProxyContract(address);
                return _context6.abrupt("return", contract.owner());

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getOwner(_x4) {
        return _getOwner.apply(this, arguments);
      }

      return getOwner;
    }();

    _proto.setOwner = /*#__PURE__*/function () {
      var _setOwner = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(newOwner, proxyAddress) {
        var contract;
        return runtime_1.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (proxyAddress === void 0) {
                  proxyAddress = this._currentProxy;
                }

                contract = this._getWrappedProxyContract(proxyAddress);
                return _context7.abrupt("return", contract.setOwner(newOwner));

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function setOwner(_x5, _x6) {
        return _setOwner.apply(this, arguments);
      }

      return setOwner;
    }();

    _proto._getWrappedProxyContract = function _getWrappedProxyContract(address) {
      return this._smartContractService.getContractByAddressAndAbi(address, abis.dappHub.dsProxy);
    };

    _proto.getUnwrappedProxyContract = function getUnwrappedProxyContract(address) {
      return new ethers.Contract(address, abis.dappHub.dsProxy, this.get('web3').getEthersSigner());
    };

    return DSProxyService;
  }(servicesCore.PrivateService);

  tslib.__decorate([tracksTransactions, tslib.__metadata("design:type", Function), tslib.__metadata("design:paramtypes", [Object]), tslib.__metadata("design:returntype", Promise)], DSProxyService.prototype, "ensureProxy", null);

  tslib.__decorate([tracksTransactions, tslib.__metadata("design:type", Function), tslib.__metadata("design:paramtypes", [Object]), tslib.__metadata("design:returntype", Promise)], DSProxyService.prototype, "build", null);

  var tokens = {
    MKR: 'MKR',
    WETH: 'WETH',
    PETH: 'PETH',
    ETH: 'ETH'
  };

  var contracts = {
    SAI_PIP: 'SAI_PIP',
    SAI_TUB: 'SAI_TUB',
    MAKER_OTC: 'MAKER_OTC',
    OASIS_PROXY: 'OASIS_PROXY',
    SAI_PROXY: 'SAI_PROXY',
    PROXY_REGISTRY: 'PROXY_REGISTRY',
    DS_PROXY_FACTORY: 'DS_PROXY_FACTORY',
    DS_PROXY: 'DS_PROXY',
    MULTICALL: 'MULTICALL',
    SAI_CAGEFREE: 'SAI_CAGEFREE'
  };

  var SAI_GEM = "0xd0A1E359811322d97991E03f863a0C30C2cF029C";
  var SAI_GOV = "0xAaF64BFCC32d0F15873a02163e7E500671a4ffcD";
  var SAI_PIP = "0xa5aa4e07f5255e14f02b385b1f04b35cc50bdb66";
  var SAI_PEP = "0x02998f73fabb52282664094b0ff87741a1ce9030";
  var SAI_PIT = "0xbd747742b0f1f9791d3e6b85f8797a0cf4fbf10b";
  var SAI_ADM = "0x74d41Fd874234D9beA31fF6b090Ba1D0b9Dc8785";
  var SAI = "0xC4375B7De8af5a38a93548eb8453a498222C4fF2";
  var SAI_SIN = "0xdcdca4371befceafa069ca1e2afd8b925b69e57b";
  var SAI_SKR = "0xf4d791139cE033Ad35DB2B2201435fAd668B1b64";
  var SAI_DAD = "0x6a884c7af48e29a20be9ff04bdde112b5596fcee";
  var SAI_MOM = "0x72ee9496b0867dfe5e8b280254da55e51e34d27b";
  var SAI_VOX = "0xbb4339c0ab5b1d9f14bd6e3426444a1e9d86a1d9";
  var SAI_TUB = "0xa71937147b55Deb8a530C7229C442Fd3F31b7db2";
  var SAI_TAP = "0xc936749d2d0139174ee0271bd28325074fdbc654";
  var SAI_TOP = "0x5f00393547561da3030ebf30e52f5dc0d5d3362c";
  var MAKER_OTC = "0xe325acB9765b02b8b418199bf9650972299235F4";
  var SAI_PROXY = "0xadb7c74bce932fc6c27dda3ac2344707d2fbb0e6";
  var OASIS_PROXY = "0xee419971e63734fed782cfe49110b1544ae8a773";
  var PROXY_REGISTRY = "0x64a436ae831c1672ae81f674cab8b6775df3475c";
  var DS_PROXY_FACTORY = "0xe11e3b391f7e8bc47247866af32af67dd58dc800";
  var MULTICALL = "0xc6d81a2e375eee15a20e6464b51c5fc6bb949fda";
  var kovanAddresses = {
  	SAI_GEM: SAI_GEM,
  	SAI_GOV: SAI_GOV,
  	SAI_PIP: SAI_PIP,
  	SAI_PEP: SAI_PEP,
  	SAI_PIT: SAI_PIT,
  	SAI_ADM: SAI_ADM,
  	SAI: SAI,
  	SAI_SIN: SAI_SIN,
  	SAI_SKR: SAI_SKR,
  	SAI_DAD: SAI_DAD,
  	SAI_MOM: SAI_MOM,
  	SAI_VOX: SAI_VOX,
  	SAI_TUB: SAI_TUB,
  	SAI_TAP: SAI_TAP,
  	SAI_TOP: SAI_TOP,
  	MAKER_OTC: MAKER_OTC,
  	SAI_PROXY: SAI_PROXY,
  	OASIS_PROXY: OASIS_PROXY,
  	PROXY_REGISTRY: PROXY_REGISTRY,
  	DS_PROXY_FACTORY: DS_PROXY_FACTORY,
  	MULTICALL: MULTICALL
  };

  var PROXY_REGISTRY$1 = "0x46759093D8158db8BB555aC7C6F98070c56169ce";
  var MULTICALL$1 = "0xb8c864B60e9467398800Df34da39BF4f0c459461";
  var goerliAddresses = {
  	PROXY_REGISTRY: PROXY_REGISTRY$1,
  	MULTICALL: MULTICALL$1
  };

  var SAI_GEM$1 = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
  var GOV_OLD = "0xC66eA802717bFb9833400264Dd12c2bCeAa34a6d";
  var SAI_GOV$1 = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
  var SAI_PIP$1 = "0x729D19f657BD0614b4985Cf1D82531c67569197B";
  var SAI_PEP$1 = "0x99041F808D598B782D5a3e498681C2452A31da08";
  var SAI_PIT$1 = "0x69076e44a9c70a67d5b79d95795aba299083c275";
  var SAI_ADM$1 = "0x8E2a84D6adE1E7ffFEe039A35EF5F19F13057152";
  var SAI$1 = "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359";
  var SAI_SIN$1 = "0x79f6d0f646706e1261acf0b93dcb864f357d4680";
  var SAI_SKR$1 = "0xf53ad2c6851052a81b42133467480961b2321c09";
  var SAI_DAD$1 = "0x315cbb88168396d12e1a255f9cb935408fe80710";
  var SAI_MOM$1 = "0xf2c5369cffb8ea6284452b0326e326dbfdcb867c";
  var SAI_VOX$1 = "0x9b0f70df76165442ca6092939132bbaea77f2d7a";
  var SAI_TUB$1 = "0x448a5065aebb8e423f0896e6c5d525c040f59af3";
  var SAI_TAP$1 = "0xbda109309f9fafa6dd6a9cb9f1df4085b27ee8ef";
  var SAI_TOP$1 = "0x9b0ccf7c8994e19f39b2b4cf708e0a7df65fa8a3";
  var MAKER_OTC$1 = "0x794e6e91555438aFc3ccF1c5076A74F42133d08D";
  var SAI_PROXY$1 = "0x190c2cfc69e68a8e8d5e2b9e2b9cc3332caff77b";
  var OASIS_PROXY$1 = "0x793ebbe21607e4f04788f89c7a9b97320773ec59";
  var PROXY_REGISTRY$2 = "0x4678f0a6958e4d2bc4f1baf7bc52e8f3564f3fe4";
  var DS_PROXY_FACTORY$1 = "0xa26e15c895efc0616177b7c1e7270a4c7d51c997";
  var MULTICALL$2 = "0x5e227ad1969ea493b43f840cff78d08a6fc17796";
  var mainnetAddresses = {
  	SAI_GEM: SAI_GEM$1,
  	GOV_OLD: GOV_OLD,
  	SAI_GOV: SAI_GOV$1,
  	SAI_PIP: SAI_PIP$1,
  	SAI_PEP: SAI_PEP$1,
  	SAI_PIT: SAI_PIT$1,
  	SAI_ADM: SAI_ADM$1,
  	SAI: SAI$1,
  	SAI_SIN: SAI_SIN$1,
  	SAI_SKR: SAI_SKR$1,
  	SAI_DAD: SAI_DAD$1,
  	SAI_MOM: SAI_MOM$1,
  	SAI_VOX: SAI_VOX$1,
  	SAI_TUB: SAI_TUB$1,
  	SAI_TAP: SAI_TAP$1,
  	SAI_TOP: SAI_TOP$1,
  	MAKER_OTC: MAKER_OTC$1,
  	SAI_PROXY: SAI_PROXY$1,
  	OASIS_PROXY: OASIS_PROXY$1,
  	PROXY_REGISTRY: PROXY_REGISTRY$2,
  	DS_PROXY_FACTORY: DS_PROXY_FACTORY$1,
  	MULTICALL: MULTICALL$2
  };

  var ETH_FROM = "0x16fb96a5fa0427af0c8f7cf1eb4870231c8154b6";
  var SAI$2 = "0xC226F3CD13d508bc319F4f4290172748199d6612";
  var MAKER_OTC$2 = "0x06ef37A95603cb52e2dFF4C2b177C84Cdb3cE989";
  var PROXY_REGISTRY$3 = "0x72b59ACcB5a9a9e47296fbeF741bF2Bc82FFDE62";
  var DS_PROXY = "0x0x570074CCb147ea3dE2E23fB038D4d78324278886";
  var SAI_PROXY$2 = "0x2348a875b1631307577be0935F289e0Fb9316169";
  var OASIS_PROXY$2 = "0xc72B03c37735Cf122c27dc352E5F25f75bEEA389";
  var REDEEMER = "0x2DaF1c09275B0b72277909377Eb20CCf10eFA02E";
  var OLD_MKR = "0xa3bFc24194007416fa73fC6E3A7D3B245f647d6E";
  var OLD_CHIEF = "0x1d24598fa8B77811E68243A2746CC553E68ca03B";
  var OLD_IOU = "0xf686915ceb592ac6089da1cffc21e141337d92be";
  var POLLING = "0x9A2810a12197CB844af4BA74a4b81bC1CA727130";
  var BATCH_POLLING = "0xa9D33Ce18803b0742460ffb1b33B6c40f95178BC";
  var OLD_VOTE_PROXY_FACTORY = "0x26ea0dd33Aa37e15D95a9Ae166092a139Ad62013";
  var LINE_SPELL = "0xb0ae8c0856259C6fe000F8e2C14507E5FC167D48";
  var SAI_CAGEFREE = "0xa7F1b1B3f05F8d5fcEB8daCC893570b9e5d82bFf";
  var MULTICALL$3 = "0x5AE5677589cf9992290918CcD1828dcBD73D842c";
  var SAI_GEM$2 = "0x7ba25f791fa76c3ef40ac98ed42634a8bc24c238";
  var SAI_GOV$2 = "0x1c3ac7216250edc5b9daa5598da0579688b9dbd5";
  var SAI_PIP$2 = "0xb7092ee7a8c4c85431962662310bbdcd4fd519e9";
  var SAI_PEP$2 = "0xc0ee05307ae4a5316f34874a3525d10c94b3c217";
  var SAI_PIT$2 = "0x0000000000000000000000000000000000000123";
  var SAI_ADM$2 = "0x4986C24C7f752C2ac2D738F1270639Dd9E9D7BF5";
  var SAI_SIN$2 = "0xE9E2B40d676Fc998EdE8c676D9f529CCbbc13740";
  var SAI_SKR$2 = "0xA6164A2e88e258A663772ED4912a0865af8f6d06";
  var SAI_DAD$2 = "0x7b61731911E46Da837E3dcD2d8797DE684c8cEd1";
  var SAI_MOM$2 = "0x603D52D6AE2b98A49f8f32817ad4EfFe7E8A2502";
  var SAI_VOX$2 = "0xE16bf7AaFeB33cC921d6D311E0ff33C4faA836dD";
  var SAI_TUB$2 = "0xE82CE3D6Bf40F2F9414C8d01A35E3d9eb16a1761";
  var SAI_TAP$2 = "0x6896659267C3C9FD055d764327199A98E571e00D";
  var SAI_TOP$2 = "0x2774031B3898fbe414F929b3223cE1039325e7Dc";
  var testnetAddresses = {
  	ETH_FROM: ETH_FROM,
  	SAI: SAI$2,
  	MAKER_OTC: MAKER_OTC$2,
  	PROXY_REGISTRY: PROXY_REGISTRY$3,
  	DS_PROXY: DS_PROXY,
  	SAI_PROXY: SAI_PROXY$2,
  	OASIS_PROXY: OASIS_PROXY$2,
  	REDEEMER: REDEEMER,
  	OLD_MKR: OLD_MKR,
  	OLD_CHIEF: OLD_CHIEF,
  	OLD_IOU: OLD_IOU,
  	POLLING: POLLING,
  	BATCH_POLLING: BATCH_POLLING,
  	OLD_VOTE_PROXY_FACTORY: OLD_VOTE_PROXY_FACTORY,
  	LINE_SPELL: LINE_SPELL,
  	SAI_CAGEFREE: SAI_CAGEFREE,
  	MULTICALL: MULTICALL$3,
  	SAI_GEM: SAI_GEM$2,
  	SAI_GOV: SAI_GOV$2,
  	SAI_PIP: SAI_PIP$2,
  	SAI_PEP: SAI_PEP$2,
  	SAI_PIT: SAI_PIT$2,
  	SAI_ADM: SAI_ADM$2,
  	SAI_SIN: SAI_SIN$2,
  	SAI_SKR: SAI_SKR$2,
  	SAI_DAD: SAI_DAD$2,
  	SAI_MOM: SAI_MOM$2,
  	SAI_VOX: SAI_VOX$2,
  	SAI_TUB: SAI_TUB$2,
  	SAI_TAP: SAI_TAP$2,
  	SAI_TOP: SAI_TOP$2
  };

  var addressMapping = {
    mainnet: mainnetAddresses,
    kovan: kovanAddresses,
    goerli: goerliAddresses,
    testnet: testnetAddresses
  };
  function contractAddressesInfo(addresses) {
    var _ref;

    return _ref = {}, _ref[tokens.SAI] = [{
      version: 1,
      address: addresses.SAI,
      abi: abis.general.erc20,
      decimals: 18
    }], _ref[tokens.WETH] = [{
      version: 1,
      address: addresses.SAI_GEM,
      abi: abis.dappHub.dsEthToken,
      decimals: 18
    }], _ref[tokens.PETH] = [{
      version: 1,
      address: addresses.SAI_SKR,
      abi: abis.general.erc20,
      decimals: 18
    }], _ref[tokens.MKR] = [{
      version: 1,
      address: addresses.GOV_OLD || '0x0000000000000000000000000000000000000001',
      abi: abis.general.erc20,
      decimals: 18
    }, {
      version: 2,
      address: addresses.SAI_GOV,
      abi: abis.general.erc20,
      decimals: 18
    }], _ref[contracts.SAI_PIP] = [{
      version: 1,
      address: addresses.SAI_PIP,
      abi: abis.dappHub.dsValue
    }], _ref[contracts.SAI_TUB] = [{
      version: 1,
      address: addresses.SAI_TUB,
      abi: abis.daiV1.tub
    }], _ref[contracts.MAKER_OTC] = [{
      version: 1,
      address: addresses.MAKER_OTC,
      abi: abis.exchangesV1.makerOtc
    }], _ref[contracts.MULTICALL] = [{
      version: 1,
      address: addresses.MULTICALL,
      abi: abis.multicall
    }], _ref[contracts.SAI_CAGEFREE] = [{
      version: 1,
      address: addresses.SAI_CAGEFREE,
      abi: abis.cageFree
    }], _ref[contracts.SAI_PROXY] = [{
      version: 1,
      address: addresses.SAI_PROXY,
      abi: abis.proxies.saiProxy
    }], _ref[contracts.OASIS_PROXY] = [{
      version: 1,
      address: addresses.OASIS_PROXY,
      abi: abis.proxies.oasisProxy
    }], _ref[contracts.DS_PROXY_FACTORY] = [{
      version: 1,
      address: addresses.DS_PROXY_FACTORY,
      abi: abis.proxies.dsProxyFactory
    }], _ref[contracts.DS_PROXY] = [{
      version: 1,
      abi: abis.dappHub.dsProxy
    }], _ref[contracts.PROXY_REGISTRY] = [{
      version: 1,
      address: addresses.PROXY_REGISTRY,
      abi: abis.proxies.proxyRegistry
    }], _ref;
  }
  function contractInfo(network) {
    var addresses = addressMapping[network];
    return contractAddressesInfo(addresses);
  }
  var TESTNET_ID = 999;
  var networks = [{
    name: 'mainnet',
    networkId: 1,
    contracts: /*#__PURE__*/contractInfo('mainnet')
  }, {
    name: 'morden',
    networkId: 2
  }, {
    name: 'ropsten',
    networkId: 3
  }, {
    name: 'rinkeby',
    networkId: 4
  }, {
    name: 'goerli',
    networkId: 5,
    contracts: /*#__PURE__*/contractInfo('goerli')
  }, {
    name: 'kovan',
    networkId: 42,
    contracts: /*#__PURE__*/contractInfo('kovan')
  }, {
    name: 'test',
    networkId: 1337,
    contracts: /*#__PURE__*/contractInfo('testnet')
  }, {
    name: 'test',
    networkId: TESTNET_ID,
    contracts: /*#__PURE__*/contractInfo('testnet')
  }];

  var currencies = /*#__PURE__*/lodashEs.values(tokens).reduce(function (output, symbol) {
    output[symbol] = currency.createCurrency(symbol);
    return output;
  }, {
    USD: /*#__PURE__*/currency.createCurrency('USD')
  });
  var getCurrency = /*#__PURE__*/currency.createGetCurrency(currencies); // we export both the currencies object and the individual currencies because
  // the latter is convenient when you know what you want to use, and the former
  // is convenient when you are picking a currency based on a symbol from input

  var ETH = currencies.ETH;
  var MKR = currencies.MKR;
  var PETH = currencies.PETH;
  var WETH = currencies.WETH;
  var USD = currencies.USD;
  var USD_ETH = /*#__PURE__*/currency.createCurrencyRatio(USD, ETH);
  var USD_MKR = /*#__PURE__*/currency.createCurrencyRatio(USD, MKR);
  var USD_PETH = /*#__PURE__*/currency.createCurrencyRatio(USD, PETH);
  var USD_WETH = /*#__PURE__*/currency.createCurrencyRatio(USD, WETH);
  Object.assign(currencies, {
    USD_ETH: USD_ETH,
    USD_MKR: USD_MKR,
    USD_PETH: USD_PETH,
    USD_WETH: USD_WETH
  });

  var _excluded$1 = ["unit"];

  var Erc20Token = /*#__PURE__*/function () {
    function Erc20Token(contract, web3Service, decimals, symbol, currency) {
      if (decimals === void 0) {
        decimals = 18;
      }

      this._contract = contract;
      this._web3 = web3Service;
      this._decimals = decimals;
      this.symbol = symbol;
      this._currency = currency || currencies[symbol];
    }

    var _proto = Erc20Token.prototype;

    _proto.allowance = /*#__PURE__*/function () {
      var _allowance = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(tokenOwner, spender) {
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.next = 3;
                return this._contract.allowance(tokenOwner, spender);

              case 3:
                _context.t1 = _context.sent;
                return _context.abrupt("return", _context.t0._valueFromContract.call(_context.t0, _context.t1));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function allowance(_x, _x2) {
        return _allowance.apply(this, arguments);
      }

      return allowance;
    }();

    _proto.balance = /*#__PURE__*/function () {
      var _balance = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.balanceOf(this._web3.currentAddress()));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function balance() {
        return _balance.apply(this, arguments);
      }

      return balance;
    }();

    _proto.balanceOf = /*#__PURE__*/function () {
      var _balanceOf = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(owner) {
        return runtime_1.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = this;
                _context3.next = 3;
                return this._contract.balanceOf(owner);

              case 3:
                _context3.t1 = _context3.sent;
                return _context3.abrupt("return", _context3.t0._valueFromContract.call(_context3.t0, _context3.t1));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function balanceOf(_x3) {
        return _balanceOf.apply(this, arguments);
      }

      return balanceOf;
    }();

    _proto.totalSupply = /*#__PURE__*/function () {
      var _totalSupply = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4() {
        return runtime_1.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = this;
                _context4.next = 3;
                return this._contract.totalSupply();

              case 3:
                _context4.t1 = _context4.sent;
                return _context4.abrupt("return", _context4.t0._valueFromContract.call(_context4.t0, _context4.t1));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function totalSupply() {
        return _totalSupply.apply(this, arguments);
      }

      return totalSupply;
    }();

    _proto.address = function address() {
      return this._contract.address;
    };

    _proto._valueForContract = function _valueForContract(value, unit) {
      if (unit === void 0) {
        unit = this._currency;
      }

      return this._getCurrency(value, unit).toFixed(this._decimals);
    };

    _proto._valueFromContract = function _valueFromContract(value) {
      return this._currency(value.toString(), -1 * this._decimals);
    };

    _proto.approve = function approve(spender, value, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          _ref$unit = _ref.unit,
          unit = _ref$unit === void 0 ? this._currency : _ref$unit,
          options = _objectWithoutPropertiesLoose(_ref, _excluded$1);

      return this._contract.approve(spender, this._valueForContract(value, unit), _extends({
        metadata: {
          action: {
            name: 'approve',
            spender: spender,
            allowance: this._getCurrency(value, unit),
            allowing: value != '0'
          }
        }
      }, options));
    };

    _proto.approveUnlimited = function approveUnlimited(spender, options) {
      if (options === void 0) {
        options = {};
      }

      if (!spender) spender = this._web3.currentAddress();
      return this._contract.approve(spender, ethers.ethers.BigNumber.from(UINT256_MAX), _extends({
        metadata: {
          action: {
            name: 'approve',
            spender: spender,
            allowance: Number.MAX_SAFE_INTEGER,
            allowing: true,
            unlimited: true
          }
        }
      }, options));
    };

    _proto.transfer = function transfer(to, value, _temp2) {
      var _ref2 = _temp2 === void 0 ? {} : _temp2,
          _ref2$unit = _ref2.unit,
          unit = _ref2$unit === void 0 ? this._currency : _ref2$unit,
          _ref2$promise = _ref2.promise,
          promise = _ref2$promise === void 0 ? undefined : _ref2$promise;

      return this._contract.transfer(to, this._valueForContract(value, unit), {
        metadata: {
          action: {
            name: 'transfer',
            from: this._web3.currentAddress(),
            to: to,
            amount: this._getCurrency(value, unit)
          }
        },
        promise: promise
      });
    };

    _proto.transferFrom = function transferFrom(from, to, value, _temp3) {
      var _ref3 = _temp3 === void 0 ? {} : _temp3,
          _ref3$unit = _ref3.unit,
          unit = _ref3$unit === void 0 ? this._currency : _ref3$unit,
          _ref3$promise = _ref3.promise,
          promise = _ref3$promise === void 0 ? undefined : _ref3$promise;

      return this._contract.transferFrom(from, to, this._valueForContract(value, unit), {
        metadata: {
          action: {
            name: 'transfer',
            from: from,
            to: to,
            amount: getCurrency(value, unit)
          }
        },
        promise: promise
      });
    };

    _proto._getCurrency = function _getCurrency(amount, unit) {
      if (unit == this._currency) return this._currency(amount);
      return getCurrency(amount, unit);
    };

    return Erc20Token;
  }();

  var EtherToken = /*#__PURE__*/function () {
    function EtherToken(web3Service, gasService, transactionManager) {
      this._web3 = web3Service;
      this._gasService = gasService;
      this._transactionManager = transactionManager;
    }

    var _proto = EtherToken.prototype;

    _proto.allowance = function allowance(tokenOwner, spender) {
      return Promise.resolve(Number.MAX_SAFE_INTEGER);
    };

    _proto.balance = function balance() {
      return this.balanceOf(this._web3.currentAddress());
    };

    _proto.balanceOf = /*#__PURE__*/function () {
      var _balanceOf = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(owner) {
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = ETH;
                _context.next = 3;
                return this._web3.getBalance(owner);

              case 3:
                _context.t1 = _context.sent;
                return _context.abrupt("return", _context.t0.wei.call(_context.t0, _context.t1));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function balanceOf(_x) {
        return _balanceOf.apply(this, arguments);
      }

      return balanceOf;
    }();

    _proto.approve = function approve(spender, value) {
      return Promise.resolve(true);
    };

    _proto.approveUnlimited = function approveUnlimited(spender) {
      return Promise.resolve(true);
    };

    _proto.transfer = /*#__PURE__*/function () {
      var _transfer = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(toAddress, amount, options) {
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.transferFrom(this._web3.currentAddress(), toAddress, amount, options));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function transfer(_x2, _x3, _x4) {
        return _transfer.apply(this, arguments);
      }

      return transfer;
    }();

    _proto.transferFrom = /*#__PURE__*/function () {
      var _transferFrom = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(fromAddress, toAddress, amount, _ref) {
        var _ref$unit, unit, promise, curAmt;

        return runtime_1.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref$unit = _ref.unit, unit = _ref$unit === void 0 ? ETH : _ref$unit, promise = _ref.promise;
                curAmt = ethers.ethers.BigNumber.from(getCurrency(amount, unit).toFixed('wei'))._hex;
                return _context3.abrupt("return", this._transactionManager.sendTransaction({
                  from: fromAddress,
                  to: toAddress,
                  value: curAmt
                }, {
                  metadata: {
                    action: {
                      name: 'transfer',
                      from: fromAddress,
                      to: toAddress,
                      amount: getCurrency(amount, unit)
                    }
                  },
                  promise: promise
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function transferFrom(_x5, _x6, _x7, _x8) {
        return _transferFrom.apply(this, arguments);
      }

      return transferFrom;
    }();

    return EtherToken;
  }();

  tslib.__decorate([tracksTransactions, tslib.__metadata("design:type", Function), tslib.__metadata("design:paramtypes", [Object, Object, Object]), tslib.__metadata("design:returntype", Promise)], EtherToken.prototype, "transfer", null);

  tslib.__decorate([tracksTransactions, tslib.__metadata("design:type", Function), tslib.__metadata("design:paramtypes", [Object, Object, Object, Object]), tslib.__metadata("design:returntype", Promise)], EtherToken.prototype, "transferFrom", null);

  var _excluded$2 = ["unit"],
      _excluded2 = ["unit"];

  var WethToken = /*#__PURE__*/function (_Erc20Token) {
    _inheritsLoose(WethToken, _Erc20Token);

    function WethToken(contract, web3Service, decimals) {
      return _Erc20Token.call(this, contract, web3Service, decimals, 'WETH') || this;
    }

    var _proto = WethToken.prototype;

    _proto.name = function name() {
      return this._contract.name();
    };

    _proto.deposit = function deposit(amount, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          _ref$unit = _ref.unit,
          unit = _ref$unit === void 0 ? ETH : _ref$unit,
          options = _objectWithoutPropertiesLoose(_ref, _excluded$2);

      return this._contract.deposit(_extends({
        value: this._valueForContract(amount, unit)
      }, options));
    };

    _proto.withdraw = function withdraw(amount, _temp2) {
      var _ref2 = _temp2 === void 0 ? {} : _temp2,
          _ref2$unit = _ref2.unit,
          unit = _ref2$unit === void 0 ? WETH : _ref2$unit,
          options = _objectWithoutPropertiesLoose(_ref2, _excluded2);

      var value = this._valueForContract(amount, unit);

      return this._contract.withdraw(value, options);
    };

    return WethToken;
  }(Erc20Token);

  var PethToken = /*#__PURE__*/function (_Erc20Token) {
    _inheritsLoose(PethToken, _Erc20Token);

    function PethToken(contract, web3Service, tub) {
      var _this;

      _this = _Erc20Token.call(this, contract, web3Service, 18, 'PETH') || this;
      _this._tub = tub;
      return _this;
    }

    var _proto = PethToken.prototype;

    _proto.join = function join(amount, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          _ref$unit = _ref.unit,
          unit = _ref$unit === void 0 ? WETH : _ref$unit,
          _ref$promise = _ref.promise,
          promise = _ref$promise === void 0 ? undefined : _ref$promise;

      var value = this._valueForContract(amount, unit);

      return this._tub.join(value, {
        promise: promise
      });
    };

    _proto.exit = function exit(amount, _temp2) {
      var _ref2 = _temp2 === void 0 ? {} : _temp2,
          _ref2$unit = _ref2.unit,
          unit = _ref2$unit === void 0 ? PETH : _ref2$unit,
          _ref2$promise = _ref2.promise,
          promise = _ref2$promise === void 0 ? undefined : _ref2$promise;

      var value = this._valueForContract(amount, unit);

      return this._tub.exit(value, {
        promise: promise
      });
    };

    _proto.wrapperRatio = /*#__PURE__*/function () {
      var _wrapperRatio = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = WETH;
                _context.next = 3;
                return this._tub.per();

              case 3:
                _context.t1 = _context.sent._hex;
                return _context.abrupt("return", _context.t0.ray.call(_context.t0, _context.t1));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function wrapperRatio() {
        return _wrapperRatio.apply(this, arguments);
      }

      return wrapperRatio;
    }();

    _proto.joinPrice = /*#__PURE__*/function () {
      var _joinPrice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(amount, unit) {
        var value;
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (unit === void 0) {
                  unit = WETH;
                }

                value = this._valueForContract(amount, unit);
                _context2.t0 = WETH;
                _context2.next = 5;
                return this._tub.ask(value);

              case 5:
                _context2.t1 = _context2.sent._hex;
                return _context2.abrupt("return", _context2.t0.wei.call(_context2.t0, _context2.t1));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function joinPrice(_x, _x2) {
        return _joinPrice.apply(this, arguments);
      }

      return joinPrice;
    }();

    _proto.exitPrice = /*#__PURE__*/function () {
      var _exitPrice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(amount, unit) {
        var value;
        return runtime_1.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (unit === void 0) {
                  unit = WETH;
                }

                value = this._valueForContract(amount, unit);
                _context3.t0 = WETH;
                _context3.next = 5;
                return this._tub.bid(value);

              case 5:
                _context3.t1 = _context3.sent._hex;
                return _context3.abrupt("return", _context3.t0.wei.call(_context3.t0, _context3.t1));

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function exitPrice(_x3, _x4) {
        return _exitPrice.apply(this, arguments);
      }

      return exitPrice;
    }();

    return PethToken;
  }(Erc20Token);

  var EthereumTokenService = /*#__PURE__*/function (_PrivateService) {
    _inheritsLoose(EthereumTokenService, _PrivateService);

    function EthereumTokenService(name) {
      var _this;

      if (name === void 0) {
        name = 'token';
      }

      _this = _PrivateService.call(this, name, ['smartContract', 'web3', 'gas', 'transactionManager']) || this;
      _this._tokens = tokens;
      _this._addedTokens = {};
      return _this;
    }

    var _proto = EthereumTokenService.prototype;

    _proto.initialize = function initialize(settings) {
      if (settings === void 0) {
        settings = {};
      }

      if (settings.erc20) {
        for (var _iterator = _createForOfIteratorHelperLoose(settings.erc20), _step; !(_step = _iterator()).done;) {
          var token = _step.value;
          var symbol = token.symbol || token.currency.symbol;
          this._tokens[symbol] = symbol;
          this._addedTokens[symbol] = [token];
        }
      }

      this._addressOverrides = settings.addressOverrides || {};
    };

    _proto.getTokens = function getTokens() {
      return Object.keys(this._tokens);
    } // FIXME should be caching/memoizing here
    ;

    _proto.getToken = function getToken(symbol, version) {
      // support passing in Currency constructors
      if (symbol.symbol) symbol = symbol.symbol;
      assert__default(symbol, 'Symbol is blank');
      assert__default(this.getTokens().indexOf(symbol) >= 0, "Symbol \"" + symbol + "\" is not recognized");

      if (symbol === tokens.ETH) {
        return new EtherToken(this.get('web3'), this.get('gas'), this.get('transactionManager'));
      }

      var _this$_getTokenInfo = this._getTokenInfo(symbol, version),
          address = _this$_getTokenInfo.address,
          decimals = _this$_getTokenInfo.decimals,
          abi = _this$_getTokenInfo.abi,
          currency = _this$_getTokenInfo.currency;

      var scs = this.get('smartContract');
      var contract = scs.getContractByAddressAndAbi(address, abi || ERC20TokenAbi);

      if (symbol === tokens.WETH) {
        return new WethToken(contract, this.get('web3'), decimals);
      }

      if (symbol === tokens.PETH) {
        if (decimals !== 18) {
          throw new Error('PethToken code hardcodes 18 decimal places.');
        }

        var tub = scs.getContract(contracts.SAI_TUB);
        return new PethToken(contract, this.get('web3'), tub);
      }

      return new Erc20Token(contract, this.get('web3'), decimals || 18, symbol, currency);
    };

    _proto._getTokenInfo = function _getTokenInfo(symbol, version) {
      var _this$get = this.get('web3'),
          network = _this$get.network,
          networkName = _this$get.networkName;

      var tokenInfoList = this._addedTokens[symbol] || this._getNetworkMapping(network)[symbol];

      assert__default(tokenInfoList, "Cannot find token info for \"" + symbol + "\"");
      var tokenInfo = version ? tokenInfoList[version - 1] : tokenInfoList[tokenInfoList.length - 1];
      if (this._addressOverrides[symbol]) tokenInfo.address = this._addressOverrides[symbol];
      if (typeof tokenInfo.address === 'string') return tokenInfo;
      return _extends({}, tokenInfo, {
        address: tokenInfo.address[networkName === 'test' ? 'testnet' : networkName]
      });
    };

    _proto._getNetworkMapping = function _getNetworkMapping(networkId) {
      var mapping = networks.filter(function (m) {
        return m.networkId === networkId;
      });

      if (mapping.length < 1) {
        throw new Error('networkId not found');
      }

      return mapping[0].contracts;
    };

    _proto._selectTokenVersions = function _selectTokenVersions(mapping) {
      var tokenArray = [];

      for (var token in tokens) {
        if (token === 'ETH') {
          tokenArray['ETH'] = [1];
        }

        if (token in mapping) {
          (function () {
            var versionArray = [];
            mapping[token].forEach(function (e) {
              versionArray.push(e.version);
            });
            tokenArray[token] = versionArray;
          })();
        }
      }

      return tokenArray;
    };

    return EthereumTokenService;
  }(servicesCore.PrivateService);

  function promisify(fn) {
    return function () {
      var _this = this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return new Promise(function (resolve, reject) {
        fn.apply(_this, args.concat(function (err, value) {
          return err ? reject(err) : resolve(value);
        }));
      });
    };
  }
  function getNetworkName(networkId) {
    var result = networks.filter(function (n) {
      return n.networkId === networkId;
    });

    if (result.length < 1) {
      throw new Error('No network with ID ' + networkId + ' found.');
    }

    return result[0].name;
  }
  function slug() {
    return '-' + Math.random().toString(36).substring(2, 7) + Math.random().toString(36).substring(2, 7);
  }
  function promiseWait(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  } // https://stackoverflow.com/a/43963612/56817

  var uniqueId = /*#__PURE__*/function () {
    var currentId = 0;
    var map = /*#__PURE__*/new WeakMap();
    return function (object) {
      if (!map.has(object)) {
        map.set(object, ++currentId);
      }

      return map.get(object);
    };
  }();

  /////  Polling Helpers  //////
  //////////////////////////////

  function createPayloadFetcher(payloadGetterMap) {
    return function () {
      return Promise.all(Object.entries(payloadGetterMap).map(function (_ref) {
        var key = _ref[0],
            getter = _ref[1];
        return getter().then(function (state) {
          return [key, state];
        });
      })).then(function (states) {
        var payload = {};

        for (var _iterator = _createForOfIteratorHelperLoose(states), _step; !(_step = _iterator()).done;) {
          var _step$value = _step.value,
              key = _step$value[0],
              state = _step$value[1];
          payload[key] = state;
        }

        return payload;
      });
    };
  }
  function createMemoizedPoll(_ref2) {
    var _type = _ref2.type,
        getState = _ref2.getState,
        emit = _ref2.emit,
        _ref2$curr = _ref2.curr,
        curr = _ref2$curr === void 0 ? {} : _ref2$curr,
        _ref2$live = _ref2.live,
        _live = _ref2$live === void 0 ? false : _ref2$live;

    return {
      ping: function ping() {
        return _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
          var next, msg;
          return runtime_1.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (_live) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _context.prev = 2;
                  _context.next = 5;
                  return getState();

                case 5:
                  next = _context.sent;

                  if (!lodashEs.isEqual(curr, next)) {
                    emit(_type, next);
                    curr = next;
                  }

                  _context.next = 13;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](2);
                  msg = "Failed to get latest " + _type + " state. Message -> " + _context.t0;
                  emit('error', msg);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[2, 9]]);
        }))();
      },
      heat: function heat() {
        return _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
          var msg;
          return runtime_1.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!_live) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return");

                case 2:
                  _context2.prev = 2;
                  _context2.next = 5;
                  return getState();

                case 5:
                  curr = _context2.sent;
                  _live = true;
                  _context2.next = 13;
                  break;

                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2["catch"](2);
                  msg = "Failed to get initial " + _type + " state. Message -> " + _context2.t0;
                  emit('error', msg);

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[2, 9]]);
        }))();
      },
      cool: function cool() {
        if (!_live) return;
        _live = false;
      },
      type: function type() {
        return _type;
      },
      live: function live() {
        return _live;
      }
    };
  }

  var EventEmitter2 = EventEmitterObj.EventEmitter2;

  var EventEmitter = /*#__PURE__*/function () {
    function EventEmitter(disposeSelf) {
      this._emitter = new EventEmitter2({
        wildcard: true,
        delimiter: '/'
      });
      this._polls = [];
      this._block = null;
      this._sequenceNum = 1;
      this._disposeSelf = disposeSelf;
      this.emit = this.emit.bind(this);
    }

    var _proto = EventEmitter.prototype;

    _proto.emit = function emit(event, payload, block) {
      if (payload === void 0) {
        payload = {};
      }

      if (block === void 0) {
        block = this._getBlock();
      }

      // if nobody's listening for this event, don't actually emit it
      if (this._emitter.listeners(event).length === 0) return;
      var eventObj = {
        payload: payload,
        block: block,
        type: event,
        sequence: this._sequenceNum
      };
      this._sequenceNum++;

      this._emitter.emit(event, eventObj);
    };

    _proto.on = function on(event, listener) {
      var _this = this;

      this._emitter.on(event, listener); // start polling for state changes if the associated event now has a listener


      this._polls.forEach(function (poll) {
        return _this._emitter.listeners(poll.type()).length > 0 && poll.heat();
      });
    };

    _proto.removeListener = function removeListener(event, listener) {
      var _this2 = this;

      this._emitter.removeListener(event, listener); // stop polling for state changes if the associated event no longer has a listener


      this._polls.forEach(function (poll) {
        return _this2._emitter.listeners(poll.type()).length === 0 && poll.cool();
      });
    };

    _proto.registerPollEvents = function registerPollEvents(eventPayloadMap) {
      for (var _i = 0, _Object$entries = Object.entries(eventPayloadMap); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _Object$entries[_i],
            eventType = _Object$entries$_i[0],
            payloadGetterMap = _Object$entries$_i[1];
        var payloadFetcher = createPayloadFetcher(payloadGetterMap);
        var memoizedPoll = createMemoizedPoll({
          type: eventType,
          emit: this.emit,
          getState: payloadFetcher
        });

        this._polls.push(memoizedPoll);
      }

      return this;
    };

    _proto.ping = function ping(block) {
      this._setBlock(block);

      this._polls.forEach(function (poll) {
        return poll.ping();
      });
    };

    _proto.dispose = function dispose() {
      this.emit = function () {};

      this.on = function () {};

      this._disposeSelf();
    };

    _proto._setBlock = function _setBlock(block) {
      if (block !== undefined) this._block = block;
    };

    _proto._getBlock = function _getBlock() {
      return this._block;
    } // For testing
    ;

    _proto._startPolls = function _startPolls() {
      this._polls.forEach(function (poll) {
        return poll.heat();
      });
    };

    _proto._stopPolls = function _stopPolls() {
      this._polls.forEach(function (poll) {
        return poll.cool();
      });
    };

    return EventEmitter;
  }();

  var log$1 = /*#__PURE__*/debug('dai:EventService');

  var EventService = /*#__PURE__*/function (_PrivateService) {
    _inheritsLoose(EventService, _PrivateService);

    /**
     * @param {string} name
     */
    function EventService(name) {
      var _this;

      if (name === void 0) {
        name = 'event';
      }

      _this = _PrivateService.call(this, name, []) || this;
      _this._block = null; // all of our emitters – we can have many of these
      // e.g. one for our maker object, a couple for some cdp objects, a few more on transaction objects, etc

      _this.emitters = {}; // this is our default emitter, it will likely be the maker object's personal emitter

      _this.buildEmitter({
        defaultEmitter: true
      });

      _this.ping = _this.ping.bind(_assertThisInitialized(_this));
      return _this;
    } // check all of our active polls for new state
    // this is currently called on every new block from Web3Service


    var _proto = EventService.prototype;

    _proto.ping = function ping(block) {
      Object.values(this.emitters).forEach(function (emitter) {
        return emitter.ping(block);
      });
    } // add a event listener to an emitter
    ;

    _proto.on = function on(event, listener, emitter) {
      if (emitter === void 0) {
        emitter = this._defaultEmitter();
      }

      emitter.on(event, listener);
    } // push an event through an emitter
    ;

    _proto.emit = function emit(event, payload, block, emitter) {
      if (emitter === void 0) {
        emitter = this._defaultEmitter();
      }

      emitter.emit(event, payload, block);
    } // remove a listener from an emitter
    ;

    _proto.removeListener = function removeListener(event, listener, emitter) {
      if (emitter === void 0) {
        emitter = this._defaultEmitter();
      }

      emitter.removeListener(event, listener);
    };

    _proto.registerPollEvents = function registerPollEvents(eventPayloadMap, emitter) {
      if (emitter === void 0) {
        emitter = this._defaultEmitter();
      }

      return emitter.registerPollEvents(eventPayloadMap);
    };

    _proto.buildEmitter = function buildEmitter(_temp) {
      var _this2 = this;

      var _ref = _temp === void 0 ? {} : _temp,
          _ref$defaultEmitter = _ref.defaultEmitter,
          defaultEmitter = _ref$defaultEmitter === void 0 ? false : _ref$defaultEmitter;

      var id = defaultEmitter ? 'default' : slug();

      var disposeEmitter = this._disposeEmitter.bind(this, id);

      var newEmitter = new EventEmitter(disposeEmitter);
      newEmitter.on('error', function (eventObj) {
        return _this2._logError(id, eventObj.payload);
      });
      this.emitters[id] = newEmitter;
      return newEmitter;
    };

    _proto._disposeEmitter = function _disposeEmitter(id) {
      if (id === 'default') {
        this._logError(id, 'cannot dispose default emitter');
      } else delete this.emitters[id];
    };

    _proto._defaultEmitter = function _defaultEmitter() {
      return this.emitters["default"];
    };

    _proto._logError = function _logError(name, msg) {
      log$1("Problem encountered in emitter " + name + " -> " + msg);
    };

    return EventService;
  }(servicesCore.PrivateService);

  var API_URL = 'https://ethgasstation.info/json/ethgasAPI.json?api-key=';

  var GasService = /*#__PURE__*/function (_PublicService) {
    _inheritsLoose(GasService, _PublicService);

    function GasService(name) {
      var _this;

      if (name === void 0) {
        name = 'gas';
      }

      _this = _PublicService.call(this, name, ['web3']) || this;
      _this._fallback = 4000000;
      _this._multiplier = 1.55;
      _this._transactionSpeed = 'fast';
      return _this;
    }

    var _proto = GasService.prototype;

    _proto.initialize = function initialize(settings) {
      if (settings) {
        this._parseConfig(settings.limit, 'limit');

        this._parseConfig(settings.price, 'price');
      }

      this._settings = settings || {};
      this._gasStationDataPromise = this.disablePrice ? Promise.resolve({}) : this.fetchGasStationData();
    };

    _proto._parseConfig = function _parseConfig(settings, label) {
      if (settings === void 0) {
        settings = 'default';
      }

      return settings === 'default' || typeof settings === 'object' ? this._setProperties(settings, label) : this[label] = settings;
    };

    _proto._setProperties = function _setProperties(settings, label) {
      var _this2 = this;

      if (settings === 'default') return;
      return lodashEs.map(settings, function (value, key) {
        if (key === 'disable') {
          _this2['disable' + label.charAt(0).toUpperCase() + label.slice(1)] = value;
        } else {
          _this2[key] = value;
        }
      });
    };

    _proto.fetchGasStationData = /*#__PURE__*/function () {
      var _fetchGasStationData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        var response;
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch(API_URL + this._settings.apiKey);

              case 3:
                response = _context.sent;
                return _context.abrupt("return", response.json());

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error('Error fetching gas data; disabling preset gas price', _context.t0);
                this.disablePrice = true;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function fetchGasStationData() {
        return _fetchGasStationData.apply(this, arguments);
      }

      return fetchGasStationData;
    }();

    _proto.getGasPrice = /*#__PURE__*/function () {
      var _getGasPrice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(txSpeed) {
        var speedSetting, gasStationData, price;
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.price) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", this.price);

              case 2:
                speedSetting = txSpeed ? txSpeed : this.transactionSpeed;
                _context2.next = 5;
                return this._gasStationDataPromise;

              case 5:
                gasStationData = _context2.sent;
                price = this.get('web3')._web3.utils.toWei((gasStationData[speedSetting] / 10).toString(), 'gwei');
                return _context2.abrupt("return", price);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getGasPrice(_x) {
        return _getGasPrice.apply(this, arguments);
      }

      return getGasPrice;
    }();

    _proto.getWaitTime = /*#__PURE__*/function () {
      var _getWaitTime = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(txSpeed) {
        var speedSetting, gasStationData;
        return runtime_1.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                speedSetting = txSpeed ? txSpeed : this.transactionSpeed;
                _context3.next = 3;
                return this._gasStationDataPromise;

              case 3:
                gasStationData = _context3.sent;
                return _context3.abrupt("return", gasStationData[speedSetting + "Wait"]);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getWaitTime(_x2) {
        return _getWaitTime.apply(this, arguments);
      }

      return getWaitTime;
    }();

    _proto.estimateGasLimit = /*#__PURE__*/function () {
      var _estimateGasLimit = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(transaction) {
        var web3Data, blockLimit, estimate;
        return runtime_1.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.limit) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return", this.limit);

              case 2:
                if (!this.disableLimit) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return", this.fallback);

              case 4:
                web3Data = [];
                _context4.prev = 5;
                _context4.next = 8;
                return Promise.all([this.get('web3').getBlock('latest'), this.get('web3').estimateGas(transaction)]);

              case 8:
                web3Data = _context4.sent;
                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](5);
                return _context4.abrupt("return", this.fallback);

              case 14:
                blockLimit = web3Data[0].gasLimit;
                estimate = web3Data[1];

                if (!(!this.multiplier && !this.absolute)) {
                  _context4.next = 20;
                  break;
                }

                return _context4.abrupt("return", Math.min(this.absolute, blockLimit));

              case 20:
                if (this.absolute) {
                  _context4.next = 24;
                  break;
                }

                return _context4.abrupt("return", Math.min(parseInt(estimate * this.multiplier), blockLimit));

              case 24:
                return _context4.abrupt("return", Math.min(parseInt(estimate * this.multiplier), this.absolute, blockLimit));

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[5, 11]]);
      }));

      function estimateGasLimit(_x3) {
        return _estimateGasLimit.apply(this, arguments);
      }

      return estimateGasLimit;
    }();

    _proto.removeMultiplier = function removeMultiplier() {
      this._multiplier = null;
    };

    _proto.removeAbsolute = function removeAbsolute() {
      this._absolute = null;
    };

    _proto.removeFallback = function removeFallback() {
      this._fallback = null;
    };

    _createClass(GasService, [{
      key: "multiplier",
      get: function get() {
        return this._multiplier;
      },
      set: function set(number) {
        if (number <= 0) {
          throw new Error('Gas limit multiplier must be greater than 0');
        }

        this._multiplier = number;
      }
    }, {
      key: "absolute",
      get: function get() {
        return this._absolute;
      },
      set: function set(number) {
        if (number <= 0) {
          throw new Error('Absolute gas limit must be greater than 0');
        }

        this._absolute = number;
      }
    }, {
      key: "fallback",
      get: function get() {
        return this._fallback;
      },
      set: function set(number) {
        if (number <= 0) {
          throw new Error('Fallback gas limit must be greater than 0');
        }

        this._fallback = number;
      }
    }, {
      key: "transactionSpeed",
      get: function get() {
        return this._transactionSpeed;
      },
      set: function set(speed) {
        var validKeys = ['average', 'fast', 'fastest', 'safeLow'];

        if (!validKeys.includes(speed)) {
          throw new Error("Invalid transaction speed -- options are " + validKeys);
        }

        this._transactionSpeed = speed;
      }
    }]);

    return GasService;
  }(servicesCore.PublicService);

  var _excluded$3 = ["useWeb3Provider", "interval", "rpcUrl"];
  var log$2 = /*#__PURE__*/debug('dai:MulticallService');
  var log2 = /*#__PURE__*/debug('dai:MulticallService:observables');

  var throwIfErrorInValues = function throwIfErrorInValues(values) {
    return values.map(function (v) {
      if (v instanceof Error) throw v;
    });
  };

  var checkForErrors = function checkForErrors(values) {
    return lodashEs.find(values, function (v) {
      return v instanceof Error;
    }) === undefined;
  };

  var catchNestedErrors = function catchNestedErrors(key) {
    return function (f) {
      return operators.catchError(function (err) {
        log2("Caught nested error in " + key + ": " + err);
        return rxjs.from([new Error(err)]);
      })(f);
    };
  };

  var MulticallService = /*#__PURE__*/function (_PublicService) {
    _inheritsLoose(MulticallService, _PublicService);

    function MulticallService(name) {
      var _this;

      if (name === void 0) {
        name = 'multicall';
      }

      _this = _PublicService.call(this, name, ['web3', 'smartContract']) || this;
      _this._schemas = [];
      _this._schemaByObservableKey = {};
      _this._schemaInstances = {};
      _this._subjects = {};
      _this._observables = {};
      _this._watcherUpdates = null;
      _this._schemaSubscribers = {};
      _this._totalSchemaSubscribers = 0;
      _this._totalActiveSchemas = 0;
      _this._multicallResultCache = {};
      _this._addresses = {};
      _this._removeSchemaTimers = {};
      _this._schemas = [];
      _this._schemaByObservableKey = {};
      _this._schemaInstances = {};
      _this._subjects = {};
      _this._observables = {};
      _this._watcherUpdates = null;
      _this._schemaSubscribers = {};
      _this._totalSchemaSubscribers = 0;
      _this._totalActiveSchemas = 0;
      _this._multicallResultCache = {};
      _this._addresses = {};
      _this._removeSchemaTimers = {};
      return _this;
    }

    var _proto = MulticallService.prototype;

    _proto.initialize = function initialize(settings) {
      if (settings === void 0) {
        settings = {
          addresses: undefined,
          removeSchemaDelay: 1000,
          debounceTime: 1,
          latestDebounceTime: 1,
          latestTimeout: 10000
        };
      }

      this._addresses = settings.addresses || this.get('smartContract').getContractAddresses();
      this._removeSchemaDelay = settings.removeSchemaDelay || 1000;
      this._debounceTime = settings.debounceTime || 1;
      this._latestDebounceTime = settings.latestDebounceTime || 1;
      this._latestTimeout = settings.latestTimeout || 10000;
    };

    _proto.authenticate = function authenticate() {
      this._connectedAddress = this.get('web3').currentAddress();
    };

    _proto.createWatcher = function createWatcher(_temp) {
      var _this2 = this;

      var _ref = _temp === void 0 ? {} : _temp,
          _ref$useWeb3Provider = _ref.useWeb3Provider,
          useWeb3Provider = _ref$useWeb3Provider === void 0 ? false : _ref$useWeb3Provider,
          _ref$interval = _ref.interval,
          interval = _ref$interval === void 0 ? 'block' : _ref$interval,
          _ref$rpcUrl = _ref.rpcUrl,
          rpcUrl = _ref$rpcUrl === void 0 ? '' : _ref$rpcUrl,
          config = _objectWithoutPropertiesLoose(_ref, _excluded$3);

      var web3 = this.get('web3');
      config = _extends({
        multicallAddress: this.get('smartContract').getContractAddress('MULTICALL')
      }, config);
      var onNewBlockPolling = interval === 'block';
      if (onNewBlockPolling) interval = 60000;
      if (useWeb3Provider) config.web3 = web3._web3;else if (!rpcUrl) {
        rpcUrl = web3.rpcUrl;
      }
      this._watcher = multicall$1.createWatcher([], _extends({}, config, {
        interval: interval,
        rpcUrl: rpcUrl
      }));

      if (onNewBlockPolling) {
        log$2("Watcher created with poll on new block mode using " + (rpcUrl ? "rpcUrl: " + rpcUrl : 'web3 provider'));
        web3.onNewBlock(function (blockNumber) {
          log$2("Polling after new block detected (" + blockNumber + ")");

          _this2._watcher.poll();
        });
      } else {
        log$2("Watcher created with " + interval + "ms polling interval using " + (useWeb3Provider ? 'web3 provider' : "rpcUrl: " + rpcUrl));
      }

      this._watcher.onPoll(function (_ref2) {
        var id = _ref2.id,
            block = _ref2.latestBlockNumber;
        return log$2("Sending network request #" + id + (block ? " (latest block: " + block + ")" : ''));
      });

      this._watcher.onNewBlock(function (block) {
        return log$2("Latest block: " + block);
      });

      this._watcher.onError(function (err) {
        return console.error('Multicall error:', err);
      });

      return this._watcher;
    };

    _proto.tap = function tap(cb) {
      log$2('Watcher tapped');
      return this._watcher.tap(cb);
    };

    _proto.start = function start() {
      log$2('Watcher started');
      return this._watcher.start();
    };

    _proto.stop = function stop() {
      this._flushPendingSchemaRemovals();

      log$2('Watcher stopped');
      return this._watcher.stop();
    };

    _proto.restart = function restart() {
      this.stop();
      this.start();
    };

    _proto.schemaByObservableKey = function schemaByObservableKey(key) {
      if (!key) throw new Error('Invalid observable key');
      if (!this._schemaByObservableKey[key]) throw new Error("No registered schema definition found with observable key: " + key);
      return this._schemaByObservableKey[key];
    };

    _proto.registerSchemas = function registerSchemas(schemas) {
      var _this3 = this;

      if (typeof schemas !== 'object') throw new Error('Schemas must be object or array');
      if (!Array.isArray(schemas)) schemas = Object.keys(schemas).map(function (key) {
        return _extends({
          key: key
        }, schemas[key]);
      });else schemas = schemas.map(function (item) {
        return _extends({}, item);
      });
      schemas.forEach(function (schema) {
        if (!schema.key) throw new Error('Schema definitions must have a unique key');
        if (!schema["return"] && !schema.returns) schema.returns = [schema.key];
        if (schema["return"] && schema.returns) throw new Error('Ambiguous return definitions in schema: found both return and returns property');
        if (schema["return"]) schema.returns = [schema["return"]];
        if (!Array.isArray(schema.returns)) throw new Error('Schema must contain return/returns property');
        schema.returns = schema.returns.map(function (ret) {
          if (!Array.isArray(ret)) ret = [ret];
          if (_this3._schemaByObservableKey[ret[0]] !== undefined) throw new Error("Observable with key " + ret[0] + " already registered");
          _this3._schemaByObservableKey[ret[0]] = schema;
          if (ret.length > 2) throw new Error('Returns array format should be [key, transform]');
          return ret;
        });
      });
      this._schemas = [].concat(this._schemas, schemas);
      log2("Registered " + schemas.length + " schemas");
    };

    _proto.latest = function latest(key) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var obsPath = "" + key + (args.length > 0 ? '.' : '') + args.join('.');
      return this._watch.apply(this, [{
        depth: 0,
        throwIfError: true
      }, key].concat(args)).pipe(operators.catchError(function (err) {
        throw new Error(err);
      }), operators.takeUntil(rxjs.timer(this._latestTimeout)), operators.throwIfEmpty(function () {
        return new Error("Timed out waiting for latest value of: " + obsPath);
      }), operators.debounceTime(this._latestDebounceTime), operators.take(1)).toPromise();
    };

    _proto.watch = function watch(key) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return this._watch.apply(this, [{
        depth: 0
      }, key].concat(args));
    };

    _proto._watch = function _watch(_ref3, key) {
      var _schemaDefinition$val,
          _this4 = this;

      var depth = _ref3.depth,
          _ref3$throwIfError = _ref3.throwIfError,
          throwIfError = _ref3$throwIfError === void 0 ? false : _ref3$throwIfError;
      var schemaDefinition = this.schemaByObservableKey(key);
      var expectedArgs = schemaDefinition.generate.length;

      for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
      }

      if (args.length < expectedArgs) return rxjs.throwError("Observable " + key + " expects at least " + expectedArgs + " argument(s)");
      var obsPath = "" + key + (args.length > 0 ? '.' : '') + args.join('.');

      if (schemaDefinition != null && (_schemaDefinition$val = schemaDefinition.validate) != null && _schemaDefinition$val.args) {
        var _schemaDefinition$val2;

        var validate = (_schemaDefinition$val2 = schemaDefinition.validate).args.apply(_schemaDefinition$val2, args);

        if (validate) {
          log2("Input validation failed for observable: " + obsPath + " (depth: " + depth + ")");
          return rxjs.throwError(validate);
        }
      }

      var schemaInstance = this._createSchemaInstance.apply(this, [schemaDefinition].concat(args));

      var computed = schemaInstance.computed;
      log2("watch() called for " + (computed ? 'computed ' : 'base ') + "observable: " + obsPath + " (depth: " + depth + ")");
      var existing = lodashEs.get(this._observables, obsPath);

      if (existing) {
        if (computed) {
          log2("Returning existing computed observable: " + obsPath + " (depth: " + depth + ")");
          if (depth === 0) existing = existing.pipe(operators.debounceTime(this._debounceTime));
          if (throwIfError) existing = existing.pipe(operators.tap(throwIfErrorInValues));
          return existing.pipe(operators.filter(checkForErrors), operators.map(function (result) {
            return computed.apply(void 0, result);
          }));
        }

        log2("Returning existing base observable: " + obsPath);
        return existing;
      }

      if (computed) {
        var dependencies = typeof schemaInstance.dependencies === 'function' ? schemaInstance.dependencies({
          watch: this.watch.bind(this),
          get: this.get.bind(this)
        }) : schemaInstance.dependencies;

        var recurseDependencyTree = function recurseDependencyTree(trie_) {
          var key = trie_[0];
          var trie = trie_.slice(1);
          if (key instanceof Promise || Array.isArray(key)) return rxjs.from(key);
          if (typeof key === 'function') return rxjs.from(key());
          var indexesAtLeafNodes = trie.map(function (node) {
            return !Array.isArray(node);
          });
          var allLeafNodes = indexesAtLeafNodes.every(function (node) {
            return node === true;
          });

          if (Array.isArray(trie) && trie.length === 0) {
            return _this4._watch({
              depth: depth + 1
            }, key);
          } else if (allLeafNodes) {
            return _this4._watch.apply(_this4, [{
              depth: depth + 1
            }, key].concat(trie));
          } else {
            return rxjs.combineLatest(trie.map(function (node, idx) {
              return indexesAtLeafNodes[idx] ? [node] : recurseDependencyTree(node);
            })).pipe(operators.flatMap(function (result) {
              return _this4._watch.apply(_this4, [{
                depth: depth + 1
              }, key].concat(result)).pipe(catchNestedErrors(key));
            }));
          }
        };

        var dependencySubs = dependencies.map(recurseDependencyTree);

        var _observable = rxjs.combineLatest(dependencySubs);

        log2("Created new computed observable: " + obsPath + " (depth: " + depth + ")");
        lodashEs.set(this._observables, obsPath, _observable);
        if (depth === 0) _observable = _observable.pipe(operators.debounceTime(this._debounceTime));
        if (throwIfError) _observable = _observable.pipe(operators.tap(throwIfErrorInValues));
        return _observable.pipe(operators.filter(checkForErrors), operators.map(function (result) {
          return computed.apply(void 0, result);
        }));
      }

      var id = schemaInstance.id,
          path = schemaInstance.path;
      if (this._schemaSubscribers[path] === undefined) this._schemaSubscribers[path] = 0;
      var subject = new rxjs.ReplaySubject(1);
      lodashEs.set(this._subjects, obsPath, subject);
      if (this._multicallResultCache[obsPath] !== undefined) this._handleResult(subject, obsPath, this._multicallResultCache[obsPath]);
      var observable = rxjs.Observable.create(function (observer) {
        _this4._totalSchemaSubscribers++;
        log2("Observer subscribed to " + id + " (" + (_this4._schemaSubscribers[path] + 1) + " subscribers)");
        if (++_this4._schemaSubscribers[path] === 1) _this4._addSchemaToMulticall(schemaInstance);
        if (!_this4._watcherUpdates) _this4._subscribeToWatcherUpdates();
        var sub = subject.subscribe(observer);
        return function () {
          _this4._totalSchemaSubscribers--;
          if (--_this4._schemaSubscribers[path] === 0) _this4._removeSchemaFromMulticall(schemaInstance.id);
          sub.unsubscribe();
          log2("Observer unsubscribed from " + id + " (" + _this4._schemaSubscribers[path] + " subscribers)");
        };
      });
      log2("Created new base observable: " + obsPath);
      lodashEs.set(this._observables, obsPath, observable);
      return observable;
    };

    _proto._createSchemaInstance = function _createSchemaInstance(schemaDefinition) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      var path = args.join('.');
      var instancePath = "" + schemaDefinition.key + (path ? '.' : '') + path;
      if (this._schemaInstances[instancePath]) return this._schemaInstances[instancePath];
      var schemaInstance = schemaDefinition.generate.apply(schemaDefinition, args);
      this._schemaInstances[instancePath] = schemaInstance;
      schemaInstance.args = [].concat(args);

      if (!schemaInstance.computed) {
        var returns = schemaInstance.returns,
            _schemaInstance$trans = schemaInstance.transforms,
            transforms = _schemaInstance$trans === void 0 ? {} : _schemaInstance$trans;
        schemaInstance.path = instancePath;

        if (!returns) {
          schemaInstance.returns = schemaDefinition.returns.map(function (ret) {
            var key = ret[0];
            var fullPath = "" + key + (path ? '.' : '') + path;
            return transforms[key] ? [fullPath, transforms[key]] : ret.length == 2 ? [fullPath, ret[1]] : [fullPath];
          });
        }

        var target = schemaInstance.target,
            contract = schemaInstance.contract;
        if (!target && !contract) throw new Error('Schema must specify target address or contract');
        if (!target && !this._addresses[contract]) throw new Error("Can't find contract address for " + contract);
        schemaInstance.target = target || this._addresses[contract];
      }

      return schemaInstance;
    };

    _proto._addSchemaToMulticall = function _addSchemaToMulticall(schemaInstance) {
      var _process;

      var id = schemaInstance.id,
          target = schemaInstance.target,
          call = schemaInstance.call,
          returns = schemaInstance.returns;

      if (this._removeSchemaTimers[id]) {
        log2("Cancelled pending schema removal: " + id);
        clearTimeout(this._removeSchemaTimers[id]);
        delete this._removeSchemaTimers[id];
        return;
      }

      this._totalActiveSchemas++;

      this._watcher.tap(function (calls) {
        return [].concat(calls, [{
          id: id,
          target: target,
          call: call,
          returns: returns
        }]);
      });

      log2("Schema added to multicall: " + id);
      if ((_process = process) != null && _process.browser) log2('Active schemas (' + this._totalActiveSchemas + ' total):', this.activeSchemaIds);else log2("Active schemas (" + this._totalActiveSchemas + " total): " + this.activeSchemaIds.join(','));
    };

    _proto._removeSchemaImmediately = function _removeSchemaImmediately(id) {
      if (this._removeSchemaTimers[id] !== undefined) delete this._removeSchemaTimers[id];
      log2("Schema removed from multicall: " + id);

      this._watcher.tap(function (schemas) {
        return schemas.filter(function (_ref4) {
          var id_ = _ref4.id;
          return id_ !== id;
        });
      });

      if (--this._totalActiveSchemas === 0) {
        log2('No remaining active schemas');
        log2('Unsubscribed from watcher updates');

        this._watcherUpdates.unsub();

        this._watcherUpdates = null;
      } else {
        var _process2;

        if ((_process2 = process) != null && _process2.browser) log2('Active schemas (' + this._totalActiveSchemas + ' total):', this.activeSchemaIds);else log2("Active schemas (" + this._totalActiveSchemas + " remaining): " + this.activeSchemaIds.join(','));
      }
    };

    _proto._removeSchemaFromMulticall = function _removeSchemaFromMulticall(id) {
      var _this5 = this;

      this._removeSchemaTimers[id] = setTimeout(function () {
        return _this5._removeSchemaImmediately(id);
      }, this._removeSchemaDelay);
    };

    _proto._flushPendingSchemaRemovals = function _flushPendingSchemaRemovals() {
      var schemaTimers = Object.keys(this._removeSchemaTimers);
      if (schemaTimers.length === 0) return;
      log2("Flushing " + schemaTimers.length + " pending schema removals");

      for (var _i = 0, _schemaTimers = schemaTimers; _i < _schemaTimers.length; _i++) {
        var id = _schemaTimers[_i];
        log2("Forcing schema removal: " + id);
        clearTimeout(this._removeSchemaTimers[id]);

        this._removeSchemaImmediately(id);
      }
    };

    _proto._handleResult = function _handleResult(subject, obsPath, value) {
      var err = this._validateResult(subject, obsPath, value);

      if (err) subject.error(err);else subject.next(value);
    };

    _proto._validateResult = function _validateResult(subject, obsPath, value) {
      var _schemaDefinition$val3;

      var _obsPath$split = obsPath.split('.'),
          observableKey = _obsPath$split[0],
          args = _obsPath$split.slice(1);

      var schemaDefinition = this._schemaByObservableKey[observableKey];
      var instancePath = "" + schemaDefinition.key + (args.length > 0 ? '.' : '') + args.join('.');
      var schemaInstance = this._schemaInstances[instancePath];
      if (!((_schemaDefinition$val3 = schemaDefinition.validate) != null && _schemaDefinition$val3.hasOwnProperty(observableKey))) return;

      try {
        var validate = schemaDefinition.validate[observableKey].call({
          args: schemaInstance.args
        }, value, schemaInstance.args);
        if (validate) throw new Error(validate);
        return;
      } catch (err) {
        log2('Validation error for ' + obsPath + ' result:', value);
        return err;
      }
    };

    _proto._subscribeToWatcherUpdates = function _subscribeToWatcherUpdates() {
      var _this6 = this;

      log2('Subscribed to watcher updates');
      this._watcherUpdates = this._watcher.subscribe(function (update) {
        var subject = lodashEs.get(_this6._subjects, update.type);

        if (subject) {
          var _update$value;

          var logValue = (_update$value = update.value) != null && _update$value._isBigNumber ? update.value.toString() + " (BigNumber)" : update.value;
          log2('Got watcher update for ' + update.type + ':', logValue);

          _this6._handleResult(subject, update.type, update.value);
        } else _this6._multicallResultCache[update.type] = update.value;
      });
    };

    _createClass(MulticallService, [{
      key: "observableKeys",
      get: function get() {
        return Object.keys(this._schemaByObservableKey);
      }
    }, {
      key: "watcher",
      get: function get() {
        return this._watcher;
      }
    }, {
      key: "activeSchemas",
      get: function get() {
        return this._watcher.schemas.filter(function (_ref5) {
          var id = _ref5.id;
          return id;
        });
      }
    }, {
      key: "activeSchemaIds",
      get: function get() {
        return this.activeSchemas.map(function (_ref6) {
          var id = _ref6.id;
          return id;
        });
      }
    }, {
      key: "totalActiveSchemas",
      get: function get() {
        return this._totalActiveSchemas;
      }
    }, {
      key: "totalSchemaSubscribers",
      get: function get() {
        return this._totalSchemaSubscribers;
      }
    }]);

    return MulticallService;
  }(servicesCore.PublicService);

  var NonceService = /*#__PURE__*/function (_PublicService) {
    _inheritsLoose(NonceService, _PublicService);

    function NonceService(name) {
      var _this;

      if (name === void 0) {
        name = 'nonce';
      }

      _this = _PublicService.call(this, name, ['web3', 'accounts']) || this;
      _this._counts = {};
      return _this;
    }

    var _proto = NonceService.prototype;

    _proto.connect = /*#__PURE__*/function () {
      var _connect = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._accountsService = this.get('accounts');
                this._web3Service = this.get('web3');
                _context.next = 4;
                return this.setCounts();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }();

    _proto._getTxCount = /*#__PURE__*/function () {
      var _getTxCount2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(address) {
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", promisify(this._web3Service._web3.eth.getTransactionCount)(address, 'pending'));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _getTxCount(_x) {
        return _getTxCount2.apply(this, arguments);
      }

      return _getTxCount;
    }();

    _proto._compareNonceCounts = function _compareNonceCounts(txCount, address) {
      if (txCount > this._counts[address]) {
        return txCount;
      } else {
        return this._counts[address];
      }
    };

    _proto._removeDuplicateAddresses = function _removeDuplicateAddresses(accounts) {
      var uniqueAddresses = [];
      accounts.map(function (account) {
        if (!uniqueAddresses.includes(account.address)) uniqueAddresses.push(account.address);
      });
      return uniqueAddresses;
    };

    _proto.setCounts = /*#__PURE__*/function () {
      var _setCounts = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4() {
        var _this2 = this;

        var accountsList, uniqueAddresses;
        return runtime_1.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._accountsService.listAccounts();

              case 2:
                accountsList = _context4.sent;

                if (!(accountsList.length === 0)) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return");

              case 5:
                uniqueAddresses = this._removeDuplicateAddresses(accountsList);
                return _context4.abrupt("return", new Promise(function (resolve) {
                  accountsList.map( /*#__PURE__*/function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(account) {
                      var txCount;
                      return runtime_1.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.next = 2;
                              return _this2._getTxCount(account.address);

                            case 2:
                              txCount = _context3.sent;
                              _this2._counts[account.address] = txCount;

                              if (Object.keys(_this2._counts).length === uniqueAddresses.length) {
                                resolve();
                              }

                            case 5:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    return function (_x2) {
                      return _ref.apply(this, arguments);
                    };
                  }());
                }));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function setCounts() {
        return _setCounts.apply(this, arguments);
      }

      return setCounts;
    }();

    _proto.getNonce = /*#__PURE__*/function () {
      var _getNonce = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5() {
        var address, txCount, nonce;
        return runtime_1.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                address = this._web3Service.currentAddress();
                _context5.next = 3;
                return this._getTxCount(address);

              case 3:
                txCount = _context5.sent;

                if (this._counts[address]) {
                  nonce = this._compareNonceCounts(txCount, address);
                  this._counts[address] += 1;
                } else {
                  this._counts[address] = txCount;
                  nonce = txCount;
                  this._counts[address] += 1;
                }

                return _context5.abrupt("return", nonce);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getNonce() {
        return _getNonce.apply(this, arguments);
      }

      return getNonce;
    }();

    return NonceService;
  }(servicesCore.PublicService);

  var _ = function _() {};

  var NullEventService = /*#__PURE__*/function (_LocalService) {
    _inheritsLoose(NullEventService, _LocalService);

    /**
     * @param {string} name
     */
    function NullEventService(name) {
      if (name === void 0) {
        name = 'event';
      }

      return _LocalService.call(this, name) || this;
    }

    var _proto = NullEventService.prototype;

    _proto.on = function on() {};

    _proto.emit = function emit() {};

    _proto.ping = function ping() {};

    _proto.removeListener = function removeListener() {};

    _proto.registerPollEvents = function registerPollEvents() {};

    _proto.buildEmitter = function buildEmitter() {
      return {
        emit: _,
        on: _,
        removeListener: _,
        registerPollEvents: _,
        ping: _,
        dispose: _
      };
    };

    return NullEventService;
  }(servicesCore.LocalService);

  function wrapContract(contract, name, abi, txManager) {
    var nonConstantFns = {};

    for (var _iterator = _createForOfIteratorHelperLoose(abi), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          type = _step$value.type,
          constant = _step$value.constant,
          _name = _step$value.name,
          inputs = _step$value.inputs,
          stateMutability = _step$value.stateMutability;
      // Non-constant functions can modify state
      var canModifyState = constant === false || !['pure', 'view'].includes(stateMutability);

      if (type === 'function' && canModifyState) {
        // Map all of the contract method names + sigs in cases where the method
        // sig is used as the key due to method overloading, e.g.
        // contract["method(address,uint256)"](foo, bar)
        if (inputs.length > 0) {
          var methodSig = _name + "(" + inputs.map(function (i) {
            return i.type;
          }).join(',') + ")";
          nonConstantFns[methodSig] = true;
        } // Currently assume that the default method chosen by Ethers when there
        // are multiple overloaded methods of the same name is non-constant


        nonConstantFns[_name] = true;
      }
    } // Why is the first argument an almost-empty object? The functions in
    // ethers.Contract are set up as read-only, non-configurable properties, which
    // means if we try to change their values with Proxy, we get an error.
    //
    // But that only happens if the contract is specified as the first argument to
    // Proxy. So we don't do that. Go on, wag your finger.
    //
    // See https://stackoverflow.com/a/48495509/56817 for more explanation.


    var proxy = new Proxy({
      // this is handy for testing, but probably shouldn't be used for anything
      // else
      wrappedContract: contract
    }, {
      get: function get(target, key) {
        if (key in target) return target[key];
        if (!txManager || !nonConstantFns[key]) return contract[key];
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var lastArg = args[args.length - 1]; // If the last arg is a business object, don't count it as a function input

          var functionInputsLength = typeof lastArg === 'object' && lastArg !== null && lastArg.constructor === Object ? args.length - 1 : args.length;

          for (var fnKey in contract["interface"].functions) {
            // Match the function overload with key that has the same number of inputs
            if (contract["interface"].functions[fnKey].name === key && contract["interface"].functions[fnKey].inputs.length === functionInputsLength) {
              key = fnKey;
            }
          }

          return txManager.sendContractCall(contract, key, args, name);
        };
      },
      set: function set(target, key, value) {
        contract[key] = value;
        return true;
      }
    });
    return proxy;
  }

  var SmartContractService = /*#__PURE__*/function (_PrivateService) {
    _inheritsLoose(SmartContractService, _PrivateService);

    function SmartContractService(name) {
      var _this;

      if (name === void 0) {
        name = 'smartContract';
      }

      _this = _PrivateService.call(this, name, ['web3', 'transactionManager']) || this; // aliases

      _this.getContractByName = _this.getContract;
      _this.getContractAddressByName = _this.getContractAddress;
      return _this;
    }

    var _proto = SmartContractService.prototype;

    _proto.initialize = function initialize(settings) {
      if (settings === void 0) {
        settings = {};
      }

      if (settings.addContracts) {
        this._addedContracts = Object.keys(settings.addContracts).reduce(function (acc, key) {
          var def = settings.addContracts[key];
          acc[key] = [_extends({}, def, {
            version: 1
          })];
          return acc;
        }, {});
      }

      this._addressOverrides = settings.addressOverrides || {};
      this.get('transactionManager').get('proxy').setSmartContractService(this);
    };

    _proto.getContractByAddressAndAbi = function getContractByAddressAndAbi(address, abi, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          name = _ref.name,
          _ref$wrap = _ref.wrap,
          wrap = _ref$wrap === void 0 ? true : _ref$wrap;

      assert__default(address, "Missing address for contract \"" + name + "\"");
      if (!name) name = this.lookupContractName(address);
      var web3Service = this.get('web3');
      var signerOrProvider = web3Service.get('accounts').hasAccount() ? web3Service.getEthersSigner() : web3Service.getEthersSigner().provider;
      var contract = new ethers.Contract(address, abi, signerOrProvider);
      var txManager = wrap && this.get('transactionManager');
      return wrapContract(contract, name, abi, txManager);
    };

    _proto.getContractAddress = function getContractAddress(name, _temp2) {
      var _ref2 = _temp2 === void 0 ? {} : _temp2,
          version = _ref2.version;

      var _this$_getContractInf = this._getContractInfo(name, version),
          address = _this$_getContractInf.address;

      return address;
    };

    _proto.getContractAddresses = function getContractAddresses() {
      return lodashEs.mapValues(this._getAllContractInfo(), function (versions) {
        return findLatestContractInfo(versions).address;
      });
    };

    _proto.getContract = function getContract(name, _temp3) {
      var _ref3 = _temp3 === void 0 ? {} : _temp3,
          version = _ref3.version,
          _ref3$wrap = _ref3.wrap,
          wrap = _ref3$wrap === void 0 ? true : _ref3$wrap;

      var info = this._getContractInfo(name, version);

      return this.getContractByAddressAndAbi(info.address, info.abi, {
        name: name,
        wrap: wrap
      });
    };

    _proto.lookupContractName = function lookupContractName(address) {
      address = address.toUpperCase();

      var contracts = this._getAllContractInfo();

      for (var _i = 0, _Object$keys = Object.keys(contracts); _i < _Object$keys.length; _i++) {
        var name = _Object$keys[_i];
        var versions = contracts[name];

        if (versions.find(function (info) {
          return info.address && info.address.toUpperCase() === address;
        })) {
          return name;
        }
      }

      return null;
    };

    _proto.hasContract = function hasContract(name) {
      return Object.keys(contracts).indexOf(name) > -1 || Object.keys(tokens).indexOf(name) > -1 || Object.keys(this._addedContracts || {}).indexOf(name) > -1;
    } // generally we should be using the ethers contract interface. this is only
    // for edge cases that the ethers contract interface doesn't support, like
    // calling (but not sending) a non-constant function
    ;

    _proto.getWeb3ContractByName = function getWeb3ContractByName(name) {
      var _this$_getContractInf2 = this._getContractInfo(name),
          abi = _this$_getContractInf2.abi,
          address = _this$_getContractInf2.address;

      return this.get('web3').web3Contract(abi, address);
    };

    _proto._getContractInfo = function _getContractInfo(name, version) {
      assert__default(this.hasContract(name), "No contract found for \"" + name + "\"");

      var contracts = this._getAllContractInfo();

      var contractInfo = findContractInfoForVersion(contracts[name], version);
      assert__default(contractInfo, "Cannot find contract " + name + ", version " + version);
      assert__default(contractInfo.address, "Contract " + name + " has no address");
      return contractInfo;
    };

    _proto._getAllContractInfo = function _getAllContractInfo() {
      var _this2 = this;

      var _this$get = this.get('web3'),
          networkName = _this$get.networkName;

      var mapping = networks.find(function (m) {
        return m.name === networkName;
      });
      assert__default(mapping, "Network \"" + networkName + "\" not found in mapping.");
      if (!mapping.contracts) mapping.contracts = contractAddressesInfo(this._addressOverrides);
      if (!this._contractInfoCache) this._contractInfoCache = {};

      if (!this._contractInfoCache[networkName]) {
        var allContractInfo = this._addedContracts ? _extends({}, mapping.contracts, this._addedContracts) : mapping.contracts;
        this._contractInfoCache[networkName] = lodashEs.mapValues(allContractInfo, function (versions, name) {
          var latest = findLatestContractInfo(versions);
          var address = getSingleAddress(_this2._addressOverrides[name], networkName) || getSingleAddress(latest.address, networkName);
          return address !== latest.address ? versions.map(function (v) {
            return v === latest ? _extends({}, latest, {
              address: address
            }) : v;
          }) : versions;
        });
      }

      return this._contractInfoCache[networkName];
    };

    return SmartContractService;
  }(servicesCore.PrivateService);

  function findContractInfoForVersion(versions, version) {
    if (!version) version = Math.max.apply(Math, versions.map(function (info) {
      return info.version;
    }));
    return versions.find(function (info) {
      return info.version === version;
    });
  }

  function findLatestContractInfo(versions) {
    return findContractInfoForVersion(versions);
  }

  function getSingleAddress(addressGroup, networkName) {
    if (!addressGroup) return;
    if (typeof addressGroup === 'string') return addressGroup;
    if (addressGroup[networkName]) return addressGroup[networkName]; // some configuration uses 'testnet' instead of 'test' as the network name

    if (networkName.startsWith('test') && addressGroup.testnet) return addressGroup.testnet; // return nothing if addressGroup has no address defined for this network
  }

  var TimerService = /*#__PURE__*/function (_LocalService) {
    _inheritsLoose(TimerService, _LocalService);

    function TimerService(name) {
      var _this;

      if (name === void 0) {
        name = 'timer';
      }

      _this = _LocalService.call(this, name) || this;
      _this._timers = {};
      return _this;
    }

    var _proto = TimerService.prototype;

    _proto.createTimer = function createTimer(name, duration, repeating, callback) {
      this.disposeTimer(name);
      this._timers[name] = {
        repeating: repeating,
        id: (repeating ? setInterval : setTimeout)(callback, duration)
      };
    };

    _proto.disposeTimer = function disposeTimer(name) {
      if (this._timers.hasOwnProperty(name)) {
        var timer = this._timers[name];
        (timer.repeating ? clearInterval : clearTimeout)(timer.id);
      }
    };

    _proto.disposeAllTimers = function disposeAllTimers() {
      for (var _iterator = _createForOfIteratorHelperLoose(this.listTimers()), _step; !(_step = _iterator()).done;) {
        var name = _step.value;
        this.disposeTimer(name);
      }
    };

    _proto.listTimers = function listTimers() {
      return Object.keys(this._timers);
    };

    return TimerService;
  }(servicesCore.LocalService);

  var enums = {
    initialized: 'initialized',
    pending: 'pending',
    mined: 'mined',
    error: 'error',
    finalized: 'finalized'
  };

  var TransactionType = {
    oasis: 'oasis',
    transaction: 'transaction'
  };
  var transactionLifeCycle = {
    initialized: [enums.pending, enums.error],
    pending: [enums.error, enums.mined],
    mined: [enums.finalized, enums.error],
    finalized: [],
    error: []
  };
  var transactionTypeTransitions = {
    transaction: transactionLifeCycle
  };

  var initialized = enums.initialized,
      pending = enums.pending,
      mined = enums.mined,
      finalized = enums.finalized,
      error = enums.error;
  var stateOrder = [initialized, pending, mined, finalized];

  var TransactionLifeCycle = /*#__PURE__*/function () {
    function TransactionLifeCycle(businessObject) {
      this._state = new servicesCore.StateMachine(initialized, transactionTypeTransitions[TransactionType.transaction]);
      this._businessObject = businessObject;
    }

    var _proto = TransactionLifeCycle.prototype;

    _proto.setPending = function setPending() {
      this._state.transitionTo(pending);
    };

    _proto.setMined = function setMined() {
      this._state.transitionTo(mined);
    };

    _proto.setFinalized = function setFinalized() {
      this._state.transitionTo(finalized);
    };

    _proto.setError = function setError(errorObject) {
      this.error = errorObject;

      this._state.transitionTo(error);
    };

    _proto.state = function state() {
      return this._state.state();
    }
    /**
     * @returns {boolean}
     */
    ;

    _proto.isInitialized = function isInitialized() {
      return this._state.inState(initialized);
    }
    /**
     * @returns {boolean}
     */
    ;

    _proto.isPending = function isPending() {
      return this._state.inState(pending);
    }
    /**
     * @returns {boolean|null}
     */
    ;

    _proto.isMined = function isMined() {
      return this._state.inState(mined);
    }
    /**
     * @returns {boolean|null}
     */
    ;

    _proto.isFinalized = function isFinalized() {
      return this._state.inState(finalized);
    }
    /**
     * @returns {boolean}
     */
    ;

    _proto.isError = function isError() {
      return this._state.inState(error);
    };

    _proto._returnValue = function _returnValue() {
      return this._businessObject || this;
    };

    _proto.inOrPastState = function inOrPastState(state) {
      var currentState = this.state();
      if (state === currentState) return true; // "error" is not part of the state order sequence, we can check it separately

      if (state === error) return this.isError();
      var currentIndex = stateOrder.indexOf(currentState);
      var targetIndex = stateOrder.indexOf(state);

      if (currentIndex === -1 || targetIndex === -1) {
        throw new Error('invalid state');
      }

      return currentIndex >= targetIndex;
    };

    _proto._onStateChange = function _onStateChange(from, to, handler) {
      var _this = this;

      this._state.onStateChanged(function (oldState, newState) {
        if (oldState === from && newState === to) {
          handler(_this._returnValue());
        }
      });
    };

    _proto.onPending = function onPending(handler) {
      return this._onStateChange(initialized, pending, handler);
    };

    _proto.onMined = function onMined(handler) {
      return this._onStateChange(pending, mined, handler);
    };

    _proto.onFinalized = function onFinalized(handler) {
      return this._onStateChange(mined, finalized, handler);
    } // alias for onFinalized
    ;

    _proto.onConfirmed = function onConfirmed(handler) {
      return this.onFinalized(handler);
    };

    _proto.onError = function onError(handler) {
      var _this2 = this;

      this._state.onStateChanged(function (oldState, newState) {
        if (newState === error) {
          handler(_this2.error, _this2._returnValue());
        }
      });
    };

    _proto.on = function on(state, handler) {
      if (state === error) return this.onError(handler);

      if (!Object.keys(enums).includes(state)) {
        throw new Error("Unrecognized state \"" + state + "\"");
      }

      var prevState = stateOrder[stateOrder.indexOf(state) - 1];
      return this._onStateChange(prevState, state, handler);
    };

    return TransactionLifeCycle;
  }();

  var log$3 = /*#__PURE__*/debug('dai:TransactionObject');

  var TransactionObject = /*#__PURE__*/function (_TransactionLifeCycle) {
    _inheritsLoose(TransactionObject, _TransactionLifeCycle);

    function TransactionObject(transaction, transactionManager, _temp) {
      var _this;

      var _ref = _temp === void 0 ? {} : _temp,
          businessObject = _ref.businessObject,
          metadata = _ref.metadata;

      _this = _TransactionLifeCycle.call(this, businessObject) || this;
      _this._transaction = transaction;
      _this._web3Service = transactionManager.get('web3');
      _this._nonceService = transactionManager.get('nonce');
      _this._timeStampSubmitted = new Date();
      _this.metadata = metadata || {};
      _this._confirmedBlockCount = _this._web3Service.confirmedBlockCount();
      return _this;
    }

    var _proto = TransactionObject.prototype;

    _proto.timeStampSubmitted = function timeStampSubmitted() {
      return this._timeStampSubmitted;
    };

    _proto.timeStamp = function timeStamp() {
      return this._timeStampMined;
    };

    _proto.fees = function fees() {
      return this._fees;
    };

    _proto.mine = function mine() {
      var _this2 = this;

      if (!this._dataPromise) this._dataPromise = this._getTransactionData();
      return this._dataPromise.then(function () {
        return _this2._returnValue();
      });
    };

    _proto.isFinalized = function isFinalized() {
      if (this._blockNumberWhenMined + this._confirmedBlockCount <= this._web3Service.blockNumber()) this.setFinalized();
      return _TransactionLifeCycle.prototype.isFinalized.call(this);
    };

    _proto.confirm = /*#__PURE__*/function () {
      var _confirm = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(count) {
        var newBlockNumber, newReceipt;
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (count === void 0) {
                  count = this._confirmedBlockCount;
                }

                this._confirmedBlockCount = count;
                _context.next = 4;
                return this.mine();

              case 4:
                if (!(parseInt(count) <= 0)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                newBlockNumber = this.receipt.blockNumber + count;
                _context.next = 9;
                return this._web3Service.waitForBlockNumber(newBlockNumber);

              case 9:
                _context.next = 11;
                return this._web3Service.getTransactionReceipt(this.hash);

              case 11:
                newReceipt = _context.sent;

                if (!(newReceipt.blockHash !== this.receipt.blockHash)) {
                  _context.next = 14;
                  break;
                }

                throw new Error('transaction block hash changed');

              case 14:
                this.setFinalized();
                return _context.abrupt("return", this._returnValue());

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function confirm(_x) {
        return _confirm.apply(this, arguments);
      }

      return confirm;
    }();

    _proto._getTransactionData = /*#__PURE__*/function () {
      var _getTransactionData2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
        var gasPrice, tx, label, revertMsg;
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this._transaction;

              case 3:
                this.hash = _context2.sent;

                if (this.hash.hash) {
                  // When using websockets, the transaction hash is returned from this._transaction
                  // Otherwise, the tx receipt is returned. This corrects in such cases
                  this.hash = this.hash.hash;
                }

                this.setPending(); // set state to pending
                // when you're on a local testnet, the transaction will probably already
                // be mined by this point. but on other nets, you still have to wait for
                // it to be mined.

                if (!(!tx || !tx.blockHash)) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 9;
                return this._keepWaitingForTx();

              case 9:
                tx = _context2.sent;

              case 10:
                gasPrice = tx.gasPrice;
                this._timeStampMined = new Date();
                this._blockNumberWhenMined = tx.blockNumber;
                _context2.next = 15;
                return this._waitForReceipt();

              case 15:
                this.receipt = _context2.sent;

                if (!!this.receipt.gasUsed && !!gasPrice) {
                  this._fees = ETH.wei(gasPrice).times(this.receipt.gasUsed);
                }

                if (!(this.receipt.status == '0x1' || this.receipt.status == 1)) {
                  _context2.next = 21;
                  break;
                }

                this.setMined();
                _context2.next = 25;
                break;

              case 21:
                label = this.metadata.contract ? this.metadata.contract + "." + this.metadata.method : 'transaction';
                revertMsg = label + " " + this.hash + " reverted";
                log$3(revertMsg + '\n' + JSON.stringify(this.receipt, null, '  '));
                throw new Error(revertMsg);

              case 25:
                _context2.next = 33;
                break;

              case 27:
                _context2.prev = 27;
                _context2.t0 = _context2["catch"](0);
                _context2.next = 31;
                return this._nonceService.setCounts();

              case 31:
                this.setError(_context2.t0);
                throw _context2.t0;

              case 33:
                return _context2.abrupt("return", this);

              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 27]]);
      }));

      function _getTransactionData() {
        return _getTransactionData2.apply(this, arguments);
      }

      return _getTransactionData;
    }();

    _proto._waitForReceipt = function _waitForReceipt(retries, currentTry) {
      var _this3 = this;

      if (retries === void 0) {
        retries = 15;
      }

      if (currentTry === void 0) {
        currentTry = 1;
      }

      var result = Promise.resolve(this._web3Service.getTransactionReceipt(this.hash));
      if (retries < 1) return result;
      return result.then(function (receipt) {
        if (receipt) return receipt;
        log$3("Receipt is null. Retrying " + retries + " more time(s)");
        return promiseWait(currentTry * 1500).then(function () {
          return _this3._waitForReceipt(retries - 1, currentTry + 1);
        });
      });
    };

    _proto._keepWaitingForTx = /*#__PURE__*/function () {
      var _keepWaitingForTx2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3() {
        var tx, startTime, i, elapsed;
        return runtime_1.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                startTime = new Date();
                log$3("waiting for transaction " + this.hash.substring(8) + "... to mine");
                i = 0;

              case 3:
                if (!(i < 720)) {
                  _context3.next = 15;
                  break;
                }

                _context3.next = 6;
                return this._web3Service.getTransaction(this.hash);

              case 6:
                tx = _context3.sent;

                if (!(tx || {}).blockHash) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("break", 15);

              case 9:
                log$3('not mined yet');
                _context3.next = 12;
                return promiseWait(5000);

              case 12:
                i++;
                _context3.next = 3;
                break;

              case 15:
                if (!(tx && !tx.blockHash)) {
                  _context3.next = 17;
                  break;
                }

                throw new Error('This transaction is taking longer than it should. Check its status on etherscan or try again. Tx hash:', this.hash);

              case 17:
                elapsed = (new Date() - startTime) / 1000;
                log$3("mined " + this.metadata.contract + "." + this.metadata.method + " with nonce " + tx.nonce + " " + this.hash.substring(8) + "... done in " + elapsed + "s");
                return _context3.abrupt("return", tx);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _keepWaitingForTx() {
        return _keepWaitingForTx2.apply(this, arguments);
      }

      return _keepWaitingForTx;
    }();

    return TransactionObject;
  }(TransactionLifeCycle);

  var log$4 = /*#__PURE__*/debug('dai:TransactionManager');

  var TransactionManager = /*#__PURE__*/function (_PublicService) {
    _inheritsLoose(TransactionManager, _PublicService);

    function TransactionManager(name) {
      var _this;

      if (name === void 0) {
        name = 'transactionManager';
      }

      _this = _PublicService.call(this, name, ['web3', 'nonce', 'proxy', 'gas']) || this;
      _this._newTxListeners = [];
      _this._tracker = new Tracker();
      return _this;
    } // this method must not be async


    var _proto = TransactionManager.prototype;

    _proto.sendContractCall = function sendContractCall(contract, method, args, name) {
      var _this2 = this;

      log$4("sendContractCall: " + name + "." + method + " " + util.inspect(args));
      if (!args) args = [];
      var options,
          promise,
          businessObject,
          metadata = {
        contract: name,
        method: method.replace(/\(.*\)$/g, ''),
        args: args
      },
          lastArg = args[args.length - 1];

      if (typeof lastArg === 'object' && lastArg.constructor === Object) {
        options = lastArg;
        args = args.slice(0, args.length - 1); // append additional metadata to the default values.

        if (options.metadata) {
          metadata = _extends({}, metadata, options.metadata);
          delete options.metadata;
        }

        if (lodashEs.has(options, 'promise')) {
          if (options.promise) promise = options.promise;
          delete options.promise;
        }

        if (options.businessObject) {
          businessObject = options.businessObject;
          delete options.businessObject;
        } // some subproviders require a value key included with the Tx


        if (!lodashEs.has(options, 'value')) {
          options.value = 0;
        }
      } else {
        options = {};
      } // for promise tracking to work, we must return to the caller the result of
      // _createTransactionObject, because that promise is the one stored for
      // lookup to attach lifecycle hooks.


      return this._createTransactionObject(_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        var txOptions;
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2._buildTransactionOptions(options, contract, method, args);

              case 2:
                txOptions = _context.sent;
                return _context.abrupt("return", _this2._execute(contract, method, args, txOptions));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))(), {
        businessObject: businessObject,
        metadata: metadata,
        promise: promise
      });
    } // this method must not be async
    ;

    _proto.sendTransaction = function sendTransaction(options, metadata) {
      var _this3 = this;

      return this._createTransactionObject(_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
        var txOptions;
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3._buildTransactionOptions(options);

              case 2:
                txOptions = _context2.sent;
                return _context2.abrupt("return", _this3.get('web3').sendTransaction(txOptions));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))(), metadata);
    };

    _proto.onNewTransaction = function onNewTransaction(cb) {
      this._newTxListeners.push(cb);
    };

    _proto.onTransactionUpdate = function onTransactionUpdate(cb) {
      var _this4 = this;

      this._tracker._globalListeners.push(cb);

      return {
        unsub: function unsub() {
          var idx = _this4._tracker._globalListeners.indexOf(cb);

          if (idx !== -1) _this4._tracker._globalListeners.splice(idx, 1);
        }
      };
    };

    _proto.getTransaction = function getTransaction(promise, label) {
      return this._tracker.get(uniqueId(promise), label);
    };

    _proto.confirm = /*#__PURE__*/function () {
      var _confirm = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(promise, count) {
        var txs;
        return runtime_1.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return promise;

              case 2:
                txs = this._tracker.getAll(uniqueId(promise));
                return _context3.abrupt("return", Promise.all(txs.map(function (tx) {
                  return tx.confirm(count);
                })));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function confirm(_x, _x2) {
        return _confirm.apply(this, arguments);
      }

      return confirm;
    }();

    _proto.isMined = function isMined(promise) {
      return this._tracker.get(uniqueId(promise)).isMined();
    };

    _proto.listen = function listen(promise, handlers) {
      if (typeof handlers === 'function') {
        this._tracker.listen(uniqueId(promise), {
          pending: function pending(tx) {
            return handlers(tx, 'pending');
          },
          mined: function mined(tx) {
            return handlers(tx, 'mined');
          },
          confirmed: function confirmed(tx) {
            return handlers(tx, 'confirmed');
          },
          error: function error(tx, err) {
            return handlers(tx, 'error', err);
          }
        });
      } else {
        this._tracker.listen(uniqueId(promise), handlers);
      }
    } // if options.dsProxy is set, execute this contract method through the
    // proxy contract at that address.
    ;

    _proto._execute = function _execute(contract, method, args, options) {
      if (!options.dsProxy) return contract[method].apply(contract, args.concat([options]));
      var address;

      if (typeof options.dsProxy === 'string') {
        address = options.dsProxy;
      }

      delete options.dsProxy;
      return this.get('proxy').execute(contract, method, args, options, address);
    };

    _proto._createTransactionObject = function _createTransactionObject(tx, _temp) {
      var _ref3 = _temp === void 0 ? {} : _temp,
          businessObject = _ref3.businessObject,
          metadata = _ref3.metadata,
          promise = _ref3.promise;

      var txo = new TransactionObject(tx, this, {
        businessObject: businessObject,
        metadata: metadata
      });

      this._newTxListeners.forEach(function (cb) {
        return cb(txo);
      });

      var minePromise = txo.mine(); // we store the transaction object under the unique id of its own mine
      // promise, so that it can be looked up when calling a contract function
      // directly from a service method, e.g. WethToken.deposit.

      this._tracker.store(uniqueId(minePromise), txo); // if the `promise` object is defined in the options argument, we also store
      // the transaction object under that promise's id, so that it can be looked
      // up when calling a contract function indirectly via two or more nested
      // service method calls, e.g.
      // EthereumCdpService.lockEth -> WethToken.deposit.


      if (promise) this._tracker.store(uniqueId(promise), txo, {
        globalTxStateUpdates: false
      });
      return minePromise;
    };

    _proto._buildTransactionOptions = /*#__PURE__*/function () {
      var _buildTransactionOptions2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(options, contract, method, args) {
        var txSpeed;
        return runtime_1.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(contract && !options.gasLimit)) {
                  _context4.next = 4;
                  break;
                }

                _context4.next = 3;
                return this._getGasLimit(options, contract, method, args);

              case 3:
                options.gasLimit = _context4.sent;

              case 4:
                if (this.get('gas').disablePrice) {
                  _context4.next = 9;
                  break;
                }

                txSpeed = options.transactionSpeed;
                _context4.next = 8;
                return this.get('gas').getGasPrice(txSpeed);

              case 8:
                options.gasPrice = _context4.sent;

              case 9:
                _context4.t0 = _extends;
                _context4.t1 = {};
                _context4.t2 = options;
                _context4.t3 = this.get('web3').transactionSettings();
                _context4.next = 15;
                return this.get('nonce').getNonce();

              case 15:
                _context4.t4 = _context4.sent;
                _context4.t5 = {
                  nonce: _context4.t4
                };
                return _context4.abrupt("return", (0, _context4.t0)(_context4.t1, _context4.t2, _context4.t3, _context4.t5));

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _buildTransactionOptions(_x3, _x4, _x5, _x6) {
        return _buildTransactionOptions2.apply(this, arguments);
      }

      return _buildTransactionOptions;
    }();

    _proto._getGasLimit = /*#__PURE__*/function () {
      var _getGasLimit2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(options, contract, method, args) {
        var transaction, data, proxyAddress, proxy;
        return runtime_1.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                transaction = {};
                data = contract["interface"].encodeFunctionData(method, args);

                if (!options.dsProxy) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 5;
                return this.get('proxy').currentProxy();

              case 5:
                proxyAddress = _context5.sent;
                proxy = this.get('proxy').getUnwrappedProxyContract(proxyAddress);
                data = proxy["interface"].encodeFunctionData('execute(address,bytes)', [contract.address, data]);

              case 8:
                if (options.value) {
                  transaction.value = options.value;
                }

                transaction = _extends({
                  from: this.get('web3').currentAddress(),
                  to: options.dsProxy ? proxyAddress : contract.address,
                  data: data
                }, transaction);
                return _context5.abrupt("return", this.get('gas').estimateGasLimit(transaction));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _getGasLimit(_x7, _x8, _x9, _x10) {
        return _getGasLimit2.apply(this, arguments);
      }

      return _getGasLimit;
    }();

    return TransactionManager;
  }(servicesCore.PublicService);

  var Tracker = /*#__PURE__*/function () {
    function Tracker() {
      this._listeners = {};
      this._globalListeners = [];
      this._transactions = {};
    }

    var _proto2 = Tracker.prototype;

    _proto2.store = function store(key, tx, options) {
      var _this5 = this;

      if (options === void 0) {
        options = {
          globalTxStateUpdates: true
        };
      }

      this._init(key);

      this._transactions[key].push(tx);

      var _loop = function _loop() {
        var state = _step.value;
        tx.on(state, function () {
          if (options.globalTxStateUpdates) {
            _this5._globalListeners.forEach(function (cb) {
              return tx.error ? cb(tx, state, tx.error) : cb(tx, state);
            });
          }

          _this5._listeners[key][state].forEach(function (cb) {
            return tx.error ? cb(tx, tx.error) : cb(tx);
          });
        });
      };

      for (var _iterator = _createForOfIteratorHelperLoose(this.constructor.states), _step; !(_step = _iterator()).done;) {
        _loop();
      }

      if (options.globalTxStateUpdates) this._globalListeners.forEach(function (cb) {
        return cb(tx, 'initialized');
      });

      this._listeners[key].initialized.forEach(function (cb) {
        return tx.error ? cb(tx, tx.error) : cb(tx);
      });

      this.clearExpiredTransactions();
    };

    _proto2.listen = function listen(key, handlers) {
      var _this6 = this;

      this._init(key);

      var _loop2 = function _loop2(_state) {
        var cb = handlers[_state];
        if (_state === 'confirmed') _state = 'finalized';

        _this6._listeners[key][_state].push(cb); // if event has already happened, call handler immediately


        _this6._transactions[key].forEach(function (tx) {
          return tx && tx.inOrPastState(_state) && (tx.error ? cb(tx, tx.error) : cb(tx));
        });

        state = _state;
      };

      for (var state in handlers) {
        _loop2(state);
      }
    };

    _proto2.getAll = function getAll(key) {
      return this._transactions[key];
    };

    _proto2.get = function get(key) {
      var txs = this._transactions[key];

      if (!txs || txs.length === 0) {
        throw new Error("No transactions for key " + key);
      }

      if (txs.length > 1) {
        console.warn("Key " + key + " matches " + txs.length + " transactions; returning the first.");
      }

      return txs[0];
    };

    _proto2.clearExpiredTransactions = function clearExpiredTransactions() {
      var _this7 = this;

      lodashEs.each(this._transactions, function (txList, key) {
        txList.forEach(function (tx) {
          var txAge = (new Date().getTime() - new Date(tx._timeStampMined).getTime()) / 60000;

          if ((tx.isError() || tx.isFinalized()) && txAge > 5) {
            var indexToRemove = _this7._transactions[key].indexOf(tx);

            _this7._transactions[key].splice(indexToRemove, 1);

            if (_this7._transactions[key].length === 0) {
              delete _this7._transactions[key];
              delete _this7._listeners[key];
            }
          }
        });
      });
    };

    _proto2._init = function _init(key) {
      if (!this._transactions[key]) this._transactions[key] = [];

      if (!this._listeners[key]) {
        this._listeners[key] = this.constructor.states.reduce(function (acc, state) {
          acc[state] = [];
          return acc;
        }, {});
      }
    };

    return Tracker;
  }();

  Tracker.states = ['initialized', 'pending', 'mined', 'finalized', 'error'];

  var Web3ServiceList = /*#__PURE__*/function () {
    function Web3ServiceList() {
      this._list = [];
    }

    var _proto = Web3ServiceList.prototype;

    _proto.push = function push(service) {
      //put a warning if this list is length 2 or more
      this._list.push(service);
    };

    _proto.disconnectAll = function disconnectAll() {
      var _this = this;

      return Promise.all(this._list, function (s) {
        return s.manager()._disconnect();
      }).then(function () {
        return _this._list = [];
      });
    };

    return Web3ServiceList;
  }(); // eslint-disable-next-line


  var l = /*#__PURE__*/new Web3ServiceList();

  function makeSigner(web3Service) {
    var provider = web3Service.web3Provider();
    var call = promisify(web3Service._web3.eth.call);
    return {
      getAddress: function getAddress() {
        return web3Service.currentAddress();
      },
      estimateGas: function estimateGas(tx) {
        return web3Service.estimateGas(tx);
      },
      sendTransaction: function sendTransaction(tx) {
        return web3Service.sendTransaction(_extends({}, tx, {
          from: web3Service.currentAddress()
        }));
      },
      call: call,
      isSigner: function isSigner() {
        return true;
      },
      _isSigner: true,
      provider: new Proxy(provider, {
        get: function get(target, key) {
          switch (key) {
            case 'resolveName':
              return function (address) {
                return address;
              };

            case '_isProvider':
              return true;

            case 'call':
              return call;

            default:
              return target[key];
          }
        }
      })
    };
  }

  var log$5 = /*#__PURE__*/debug('dai:Web3Service');

  var Web3Service = /*#__PURE__*/function (_PrivateService) {
    _inheritsLoose(Web3Service, _PrivateService);

    function Web3Service(name) {
      var _this;

      if (name === void 0) {
        name = 'web3';
      }

      _this = _PrivateService.call(this, name, ['accounts', 'timer', 'cache', 'event']) || this;
      _this._blockListeners = {};
      _this._info = {};
      l.push(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = Web3Service.prototype;

    _proto.currentAddress = function currentAddress() {
      return this.get('accounts').currentAddress();
    };

    _proto.getEthersSigner = function getEthersSigner() {
      if (!this._ethersSigner) this._ethersSigner = makeSigner(this);
      return this._ethersSigner;
    };

    _proto.web3Provider = function web3Provider() {
      return this._web3.currentProvider;
    };

    _proto.transactionSettings = function transactionSettings() {
      return this._transactionSettings;
    };

    _proto.confirmedBlockCount = function confirmedBlockCount() {
      return this._confirmedBlockCount;
    };

    _proto.web3Contract = function web3Contract(abi, address) {
      return new this._web3.eth.Contract(abi, address);
    };

    _proto.initialize = function initialize(settings) {
      var _this2 = this;

      log$5('initializing...');
      this._defaultEmitter = this.get('event');
      this._web3 = new Web3();

      this._web3.setProvider(this.get('accounts').getProvider());

      this.eth = new Proxy(this, {
        get: function get(target, key) {
          if (typeof key === 'string') console.warn("use ." + key + " instead of .eth." + key);
          return target[key];
        }
      });
      this.manager().onDisconnected(function () {
        return _this2._stopListeningForNewBlocks();
      });

      this._defaultEmitter.emit('web3/INITIALIZED', {
        provider: settings.provider
      });

      this._transactionSettings = settings.transactionSettings;
      this._confirmedBlockCount = settings.confirmedBlockCount || 5;
      this._pollingInterval = settings.pollingInterval || 4000;
    };

    _proto.subscribe = function subscribe() {
      var _this$_web3$eth;

      return (_this$_web3$eth = this._web3.eth).subscribe.apply(_this$_web3$eth, arguments);
    };

    _proto.estimateGas = function estimateGas() {
      var _this$_web3$eth2;

      return (_this$_web3$eth2 = this._web3.eth).estimateGas.apply(_this$_web3$eth2, arguments);
    };

    _proto.wait = function wait() {
      var _this$_web3$eth3;

      return (_this$_web3$eth3 = this._web3.eth).wait.apply(_this$_web3$eth3, arguments);
    };

    _proto.getBalance = function getBalance() {
      var _this$_web3$eth4;

      return (_this$_web3$eth4 = this._web3.eth).getBalance.apply(_this$_web3$eth4, arguments);
    };

    _proto.getAccounts = function getAccounts() {
      var _this$_web3$eth5;

      return (_this$_web3$eth5 = this._web3.eth).getAccounts.apply(_this$_web3$eth5, arguments);
    };

    _proto.getBlock = function getBlock() {
      var _this$_web3$eth6;

      return (_this$_web3$eth6 = this._web3.eth).getBlock.apply(_this$_web3$eth6, arguments);
    };

    _proto.getPastLogs = function getPastLogs() {
      var _this$_web3$eth7;

      return (_this$_web3$eth7 = this._web3.eth).getPastLogs.apply(_this$_web3$eth7, arguments);
    };

    _proto.getStorageAt = function getStorageAt() {
      var _this$_web3$eth8;

      return (_this$_web3$eth8 = this._web3.eth).getStorageAt.apply(_this$_web3$eth8, arguments);
    };

    _proto.getTransaction = function getTransaction() {
      var _this$_web3$eth9;

      return (_this$_web3$eth9 = this._web3.eth).getTransaction.apply(_this$_web3$eth9, arguments);
    };

    _proto.getTransactionReceipt = function getTransactionReceipt() {
      var _this$_web3$eth10;

      return (_this$_web3$eth10 = this._web3.eth).getTransactionReceipt.apply(_this$_web3$eth10, arguments);
    };

    _proto.connect = /*#__PURE__*/function () {
      var _connect = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                log$5('connecting...');
                _context.t0 = parseInt;
                _context.next = 4;
                return promisify(this._web3.eth.net.getId)();

              case 4:
                _context.t1 = _context.sent;
                this._networkId = (0, _context.t0)(_context.t1);
                _context.next = 8;
                return this._web3.eth.getBlockNumber();

              case 8:
                this._currentBlock = _context.sent;

                this._updateBlockNumber(this._currentBlock);

                this._listenForNewBlocks();

                this.onNewBlock(this.get('event').ping);

                this._defaultEmitter.emit('web3/CONNECTED', _extends({}, this._info));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }();

    _proto.authenticate = /*#__PURE__*/function () {
      var _authenticate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                log$5('authenticating...');

                this._defaultEmitter.emit('web3/AUTHENTICATED', {
                  account: this.currentAddress()
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function authenticate() {
        return _authenticate.apply(this, arguments);
      }

      return authenticate;
    }();

    _proto.sendTransaction = function sendTransaction() {
      var _this3 = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        var _this3$_web3$eth;

        (_this3$_web3$eth = _this3._web3.eth).sendTransaction.apply(_this3$_web3$eth, args).on('transactionHash', function (tx) {
          return resolve({
            hash: tx,
            wait: function wait() {}
          });
        }).on('error', reject);
      });
    };

    _proto.networkId = function networkId() {
      console.warn('.networkId() is deprecated; use .network instead');
      return this.network;
    };

    _proto.blockNumber = function blockNumber() {
      return this._currentBlock;
    };

    _proto.onNewBlock = function onNewBlock(callback) {
      if (!this._blockListeners['*']) {
        this._blockListeners['*'] = [];
      }

      this._blockListeners['*'].push(callback);
    };

    _proto.waitForBlockNumber = /*#__PURE__*/function () {
      var _waitForBlockNumber = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(blockNumber) {
        var _this4 = this;

        return runtime_1.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(blockNumber < this._currentBlock)) {
                  _context3.next = 3;
                  break;
                }

                console.error('Attempted to wait for past block ' + blockNumber);
                return _context3.abrupt("return");

              case 3:
                if (!(blockNumber === this._currentBlock)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", Promise.resolve(blockNumber));

              case 5:
                if (!this._blockListeners[blockNumber]) {
                  this._blockListeners[blockNumber] = [];
                }

                return _context3.abrupt("return", new Promise(function (resolve) {
                  _this4._blockListeners[blockNumber].push(resolve);
                }));

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function waitForBlockNumber(_x) {
        return _waitForBlockNumber.apply(this, arguments);
      }

      return waitForBlockNumber;
    }();

    _proto._listenForNewBlocks = function _listenForNewBlocks() {
      var _this5 = this;

      if (this.networkName !== 'test') {
        log$5('Using newBlockHeaders subscription for block detection');
        this._newBlocksSubscription = this.subscribe('newBlockHeaders').on('data', function (_ref) {
          var blockNumber = _ref.number;
          if (!_this5._currentBlock) _this5._currentBlock = blockNumber - 1;

          for (var i = _this5._currentBlock + 1; i <= blockNumber; i++) {
            _this5._updateBlockNumber(i);
          }
        });
      } else {
        log$5('Using manual getBlockNumber polling for block detection');

        var updateBlocks = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4() {
            var blockNumber, i;
            return runtime_1.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _this5._web3.eth.getBlockNumber();

                  case 2:
                    blockNumber = _context4.sent;
                    if (!_this5._currentBlock) _this5._currentBlock = blockNumber - 1;

                    for (i = _this5._currentBlock + 1; i <= blockNumber; i++) {
                      _this5._updateBlockNumber(i);
                    }

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function updateBlocks() {
            return _ref2.apply(this, arguments);
          };
        }();

        this._updateBlocksInterval = setInterval(updateBlocks, this._pollingInterval);
      }
    };

    _proto._updateBlockNumber = function _updateBlockNumber(blockNumber) {
      log$5("Latest block: " + blockNumber);
      this._currentBlock = blockNumber;

      if (this._blockListeners[blockNumber]) {
        this._blockListeners[blockNumber].forEach(function (c) {
          return c(blockNumber);
        });

        this._blockListeners[blockNumber] = undefined;
      }

      if (this._blockListeners['*']) {
        this._blockListeners['*'].forEach(function (c) {
          return c(blockNumber);
        });
      }
    };

    _proto._stopListeningForNewBlocks = function _stopListeningForNewBlocks() {
      if (this._newBlocksSubscription) {
        this._newBlocksSubscription.unsubscribe(function (err) {
          if (err) throw err;
        });
      } else if (this._updateBlocksInterval) {
        clearInterval(this._updateBlocksInterval);
      }
    };

    _createClass(Web3Service, [{
      key: "network",
      get: function get() {
        assert__default(this._networkId, 'Cannot resolve network ID. Are you connected?');
        return this._networkId;
      }
    }, {
      key: "networkName",
      get: function get() {
        return getNetworkName(this.network);
      }
    }, {
      key: "rpcUrl",
      get: function get() {
        var provider = lodashEs.last(this._web3.currentProvider._providers);
        return provider.rpcUrl || provider._url || null;
      }
    }]);

    return Web3Service;
  }(servicesCore.PrivateService);

  function mergeServiceConfig(role, sink, source, resolver) {
    sink = servicesCore.standardizeConfig(role, sink, resolver);
    source = servicesCore.standardizeConfig(role, source);
    if (sink[0] === false || source[0] === false) return source;
    return [typeof source[0] != 'boolean' ? source[0] : sink[0], lodashEs.merge({}, sink[1], source[1])];
  }
  function getSettings(config) {
    if (config instanceof Array) return config[1];
    return config;
  }

  var resolver = {
    defaults: {
      accounts: 'AccountsService',
      allowance: 'AllowanceService',
      cache: 'CacheService',
      event: 'EventService',
      gas: 'GasService',
      multicall: 'MulticallService',
      nonce: 'NonceService',
      proxy: 'DSProxyService',
      smartContract: 'SmartContractService',
      timer: 'TimerService',
      token: 'EthereumTokenService',
      transactionManager: 'TransactionManager',
      web3: 'Web3Service'
    },
    disabled: {
      event: 'NullEventService'
    }
  };

  var DefaultServiceProvider = /*#__PURE__*/function (_ServiceProvider) {
    _inheritsLoose(DefaultServiceProvider, _ServiceProvider);

    function DefaultServiceProvider(config) {
      if (config === void 0) {
        config = {};
      }

      if (config.web3) {
        config = _extends({}, config, {
          accounts: _extends({}, config.accounts, {
            web3: getSettings(config.web3)
          })
        });
      }

      return _ServiceProvider.call(this, config, _extends({
        services: {
          AccountsService: AccountsService,
          AllowanceService: AllowanceService,
          CacheService: CacheService,
          DSProxyService: DSProxyService,
          EthereumTokenService: EthereumTokenService,
          EventService: EventService,
          GasService: GasService,
          MulticallService: MulticallService,
          NonceService: NonceService,
          NullEventService: NullEventService,
          SmartContractService: SmartContractService,
          TimerService: TimerService,
          TransactionManager: TransactionManager,
          Web3Service: Web3Service
        }
      }, resolver)) || this;
    }

    return DefaultServiceProvider;
  }(servicesCore.ServiceProvider);

  var web3 = {
  	provider: {
  		type: "HTTP",
  		url: "http://localhost:2000"
  	}
  };
  var proxy = true;
  var smartContract = true;
  var test = {
  	web3: web3,
  	proxy: proxy,
  	smartContract: smartContract
  };

  var web3$1 = {
  	provider: {
  		type: "INFURA",
  		network: "kovan"
  	}
  };
  var kovan = {
  	web3: web3$1
  };

  var web3$2 = {
  	provider: {
  		type: "INFURA",
  		network: "goerli"
  	}
  };
  var goerli = {
  	web3: web3$2
  };

  var web3$3 = {
  	provider: {
  		type: "HTTP"
  	}
  };
  var http = {
  	web3: web3$3
  };

  var web3$4 = {
  	provider: {
  		type: "WEBSOCKET"
  	}
  };
  var ws = {
  	web3: web3$4
  };

  var web3$5 = {
  	provider: {
  		type: "INFURA",
  		network: "mainnet"
  	}
  };
  var mainnet = {
  	web3: web3$5
  };

  var web3$6 = {
  	provider: {
  		type: "BROWSER"
  	}
  };
  var browser = {
  	web3: web3$6
  };

  var web3$7 = {
  	provider: {
  		type: "INJECT"
  	}
  };
  var inject = {
  	web3: web3$7
  };

  var ConfigPresetNotFoundError = /*#__PURE__*/function (_Error) {
    _inheritsLoose(ConfigPresetNotFoundError, _Error);

    function ConfigPresetNotFoundError(message) {
      return _Error.call(this, 'Cannot find configuration preset with name: ' + message) || this;
    }

    return ConfigPresetNotFoundError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var serviceRoles = ['accounts', 'allowance', 'gas', 'multicall', 'nonce', 'proxy', 'smartContract', 'timer', 'token', 'transactionManager', 'web3'];

  function loadPreset(name) {
    if (typeof name == 'object') {
      return name; // for testing
    }

    var preset;

    switch (name) {
      case 'test':
        preset = test;
        break;

      case 'http':
        preset = http;
        break;

      case 'ws':
      case 'websocket':
        preset = ws;
        break;

      case 'kovan':
        preset = kovan;
        break;

      case 'goerli':
        preset = goerli;
        break;

      case 'mainnet':
        preset = mainnet;
        break;

      case 'browser':
        preset = browser;
        break;

      case 'inject':
        preset = inject;
        break;

      default:
        throw new ConfigPresetNotFoundError(name);
    } // make a copy so we don't overwrite the original values


    return lodashEs.merge({}, preset);
  }

  var reservedWords = ['accounts', 'overrideMetamask', 'plugins', 'privateKey', 'provider', 'url'];

  function checkForReservedWords(words) {
    var usedReservedWords = lodashEs.intersection(words, reservedWords);

    if (usedReservedWords.length > 0) {
      throw new Error('The following words cannot be used as service role names: ' + usedReservedWords.join(', '));
    }
  }
  /**
   * @param {string} preset
   * @param {object} options
   */


  function createConfig(preset, options, resolver) {
    if (options === void 0) {
      options = {};
    }

    if (typeof preset !== 'string') {
      options = preset;
      preset = options.preset;
    }

    var config = loadPreset(preset);
    var additionalServices = options.additionalServices || [];
    checkForReservedWords(additionalServices);

    for (var _iterator = _createForOfIteratorHelperLoose(serviceRoles.concat(additionalServices)), _step; !(_step = _iterator()).done;) {
      var role = _step.value;
      if (!(role in options)) continue;

      if (!(role in config)) {
        config[role] = options[role];
        continue;
      }

      config[role] = mergeServiceConfig(role, config[role], options[role], resolver);
    } // web3-specific convenience options


    if (config.web3) {
      var web3Settings = config.web3[1] || config.web3;
      if (!web3Settings.provider) web3Settings.provider = {};

      if (options.url) {
        web3Settings.provider.url = options.url;
      }

      if (options.provider) {
        lodashEs.merge(web3Settings.provider, options.provider);
      }
    } // accounts-specific convenience option


    if (options.privateKey) {
      config.accounts = _extends({}, config.accounts, {
        "default": {
          type: AccountType.PRIVATE_KEY,
          key: options.privateKey
        }
      });
    }

    return config;
  }

  var ConfigFactory = {
    createConfig: createConfig
  };

  var _excluded$4 = ["plugins"],
      _excluded2$1 = ["plugins"];
  var PLUGIN_KEYS = ['beforeCreate', 'afterCreate', 'addConfig'];
  var MakerClass = /*#__PURE__*/function () {
    function MakerClass(preset, options, userOptions) {
      if (options === void 0) {
        options = {};
      }

      if (userOptions === void 0) {
        userOptions = {};
      }

      var _options = options,
          _options$plugins = _options.plugins,
          plugins = _options$plugins === void 0 ? [] : _options$plugins,
          otherOptions = _objectWithoutPropertiesLoose(_options, _excluded$4);

      for (var _iterator = _createForOfIteratorHelperLoose(plugins), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
            plugin = _step$value[0],
            pluginOptions = _step$value[1];

        if (plugin.addConfig) {
          mergeOptions(otherOptions, plugin.addConfig(otherOptions, pluginOptions));
        }
      }

      if (plugins && userOptions) mergeOptions(otherOptions, userOptions);
      var config = ConfigFactory.createConfig(preset, otherOptions, resolver);
      this._container = new DefaultServiceProvider(config).buildContainer();

      for (var _iterator2 = _createForOfIteratorHelperLoose(plugins), _step2; !(_step2 = _iterator2()).done;) {
        var _step2$value = _step2.value,
            _plugin = _step2$value[0],
            _pluginOptions = _step2$value[1];
        if (_plugin.afterCreate) _plugin.afterCreate(this, config, _pluginOptions);
      }

      if (otherOptions.autoAuthenticate !== false) this.authenticate();
    }

    var _proto = MakerClass.prototype;

    _proto.authenticate = function authenticate() {
      if (!this._authenticatedPromise) {
        this._authenticatedPromise = this._container.authenticate();
      }

      return this._authenticatedPromise;
    };

    _proto.addAccount = function addAccount() {
      var _this$service;

      return (_this$service = this.service('accounts')).addAccount.apply(_this$service, arguments);
    };

    _proto.currentAccount = function currentAccount() {
      var _this$service2;

      return (_this$service2 = this.service('accounts')).currentAccount.apply(_this$service2, arguments);
    };

    _proto.listAccounts = function listAccounts() {
      var _this$service3;

      return (_this$service3 = this.service('accounts')).listAccounts.apply(_this$service3, arguments);
    };

    _proto.useAccount = function useAccount() {
      var _this$service4;

      return (_this$service4 = this.service('accounts')).useAccount.apply(_this$service4, arguments);
    };

    _proto.useAccountWithAddress = function useAccountWithAddress() {
      var _this$service5;

      return (_this$service5 = this.service('accounts')).useAccountWithAddress.apply(_this$service5, arguments);
    };

    _proto.currentAddress = function currentAddress() {
      var _this$service6;

      return (_this$service6 = this.service('accounts')).currentAddress.apply(_this$service6, arguments);
    };

    _proto.on = function on() {
      var _this$service7;

      return (_this$service7 = this.service('event')).on.apply(_this$service7, arguments);
    };

    _proto.getToken = function getToken() {
      var _this$service8;

      return (_this$service8 = this.service('token')).getToken.apply(_this$service8, arguments);
    };

    _proto.currentProxy = function currentProxy() {
      var _this$service9;

      return (_this$service9 = this.service('proxy')).currentProxy.apply(_this$service9, arguments);
    };

    _proto.watch = function watch() {
      var _this$service10;

      return (_this$service10 = this.service('multicall')).watch.apply(_this$service10, arguments);
    };

    _proto.latest = function latest() {
      var _this$service11;

      return (_this$service11 = this.service('multicall')).latest.apply(_this$service11, arguments);
    };

    _proto.openCdp = function openCdp() {
      throw new Error('"openCdp" is no longer available here. Add @makerdao/dai-plugin-scd, then use maker.service(\'cdp\').openCdp');
    };

    _proto.getCdp = function getCdp() {
      throw new Error('"getCdp" is no longer available here. Add @makerdao/dai-plugin-scd, then use maker.service(\'cdp\').getCdp');
    };

    _proto.getCdpIds = function getCdpIds() {
      throw new Error('"getCdpIds" is no longer available here. Add @makerdao/dai-plugin-scd, then use maker.service(\'cdp\').getCdpIds');
    };

    _proto.service = function service(_service, skipAuthCheck) {
      if (skipAuthCheck === void 0) {
        skipAuthCheck = false;
      }

      var skipAuthCheckForServices = ['event'];

      if (!skipAuthCheck && !this._container.isAuthenticated && !skipAuthCheckForServices.includes(_service)) {
        throw new Error("Can't use service " + _service + " before authenticate() has finished.");
      }

      return this._container.service(_service);
    };

    return MakerClass;
  }();

  function mergeOptions(object, source) {
    return lodashEs.mergeWith(object, source, function (objValue, srcValue, key) {
      if (Array.isArray(objValue) && key === 'abi') return lodashEs.uniq(objValue);
      if (Array.isArray(objValue) && key !== 'abi') return lodashEs.uniq(objValue.concat(srcValue));
    });
  }

  var standardizePluginConfig = function standardizePluginConfig(plugins) {
    return plugins.map(function (x, i) {
      var _ref = Array.isArray(x) ? x : [x, {}],
          plugin = _ref[0],
          pluginOptions = _ref[1];

      if (typeof plugin === 'function') plugin = {
        afterCreate: plugin
      };
      assert.strict(PLUGIN_KEYS.some(function (x) {
        return lodashEs.has(plugin, x);
      }), "plugins[" + i + "] does not seem to be a plugin");
      return [plugin, pluginOptions];
    });
  };

  function create() {
    return _create.apply(this, arguments);
  }

  function _create() {
    _create = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      var _len,
          args,
          _key,
          preset,
          _args$,
          options,
          plugins,
          otherOptions,
          userOptions,
          _iterator3,
          _step3,
          _step3$value,
          p,
          popts,
          maker,
          _args = arguments;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = _args[_key];
              }

              preset = args[0], _args$ = args[1], options = _args$ === void 0 ? {} : _args$;
              plugins = options.plugins, otherOptions = _objectWithoutPropertiesLoose(options, _excluded2$1);
              userOptions = lodashEs.cloneDeep(otherOptions);

              if (!plugins) {
                _context.next = 18;
                break;
              }

              options.plugins = standardizePluginConfig(plugins);
              _iterator3 = _createForOfIteratorHelperLoose(options.plugins);

            case 7:
              if ((_step3 = _iterator3()).done) {
                _context.next = 18;
                break;
              }

              _step3$value = _step3.value, p = _step3$value[0], popts = _step3$value[1];

              if (!p.beforeCreate) {
                _context.next = 16;
                break;
              }

              _context.t0 = Object;
              _context.t1 = options;
              _context.next = 14;
              return p.beforeCreate(popts);

            case 14:
              _context.t2 = _context.sent;

              _context.t0.assign.call(_context.t0, _context.t1, _context.t2);

            case 16:
              _context.next = 7;
              break;

            case 18:
              maker = new MakerClass(preset, options, userOptions);

              if (!(options.autoAuthenticate !== false)) {
                _context.next = 22;
                break;
              }

              _context.next = 22;
              return maker.authenticate();

            case 22:
              return _context.abrupt("return", maker);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _create.apply(this, arguments);
  }

  var Maker = {
    create: create,
    currencies: null,
    QueryApi: null,
    utils: null
  };

  function numberToBytes32(num) {
    var bn = ethers.BigNumber.from(num);
    return ethers.utils.hexlify(ethers.utils.zeroPad(bn, 32));
  }
  function bytes32ToNumber(bytes32) {
    return ethers.BigNumber.from(bytes32).toNumber();
  }
  function stringToBytes32(text, pad) {
    if (pad === void 0) {
      pad = true;
    }

    var data = ethers.utils.toUtf8Bytes(text);

    if (data.length > 32) {
      throw new Error('too long');
    }

    if (pad) {
      return ethers.utils.hexlify(ethers.utils.zeroPad(data, 32));
    }

    return ethers.utils.hexlify(data);
  }
  function stringToBytes(str) {
    assert__default(!!str, 'argument is falsy');
    assert__default(typeof str === 'string', 'argument is not a string');
    return '0x' + Buffer.from(str).toString('hex');
  }
  function bytesToString(hex) {
    return Buffer.from(hex.replace(/^0x/, ''), 'hex').toString().replace(/\x00/g, ''); // eslint-disable-line no-control-regex
  }
  function padRight(string, chars, sign) {
    return string + new Array(chars - string.length + 1).join(sign ? sign : '0');
  }
  function toHex(str, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$with0x = _ref.with0x,
        with0x = _ref$with0x === void 0 ? true : _ref$with0x,
        _ref$rightPadding = _ref.rightPadding,
        rightPadding = _ref$rightPadding === void 0 ? 64 : _ref$rightPadding;

    var result = '';

    for (var i = 0; i < str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }

    if (rightPadding > 0) result = padRight(result, rightPadding);
    return with0x ? '0x' + result : result;
  }

  function getQueryResponse(_x, _x2, _x3) {
    return _getQueryResponse.apply(this, arguments);
  }

  function _getQueryResponse() {
    _getQueryResponse = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(serverUrl, query, variables) {
      var resp, _yield$resp$json, data;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(serverUrl, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: query,
                  variables: variables
                })
              });

            case 2:
              resp = _context.sent;
              _context.next = 5;
              return resp.json();

            case 5:
              _yield$resp$json = _context.sent;
              data = _yield$resp$json.data;
              assert__default(data, "error fetching data from " + serverUrl);
              return _context.abrupt("return", data);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getQueryResponse.apply(this, arguments);
  }

  for (var symbol in currencies) {
    Maker[symbol] = currencies[symbol];
  }

  Maker.currencies = currencies;
  Maker.QueryApi = {
    getQueryResponse: getQueryResponse
  };
  Maker.utils = {
    stringToBytes32: stringToBytes32
  };
  var QueryApi = {
    getQueryResponse: getQueryResponse
  };
  var utils = {
    numberToBytes32: numberToBytes32,
    stringToBytes32: stringToBytes32,
    bytes32ToNumber: bytes32ToNumber,
    stringToBytes: stringToBytes,
    bytesToString: bytesToString,
    padRight: padRight,
    toHex: toHex
  };

  exports.ETH = ETH;
  exports.MKR = MKR;
  exports.PETH = PETH;
  exports.QueryApi = QueryApi;
  exports.USD = USD;
  exports.USD_ETH = USD_ETH;
  exports.USD_MKR = USD_MKR;
  exports.USD_PETH = USD_PETH;
  exports.USD_WETH = USD_WETH;
  exports.WETH = WETH;
  exports.currencies = currencies;
  exports.default = Maker;
  exports.getCurrency = getCurrency;
  exports.utils = utils;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dai.umd.development.js.map
