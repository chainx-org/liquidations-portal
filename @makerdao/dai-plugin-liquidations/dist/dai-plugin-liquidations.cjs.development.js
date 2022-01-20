'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ramda = require('ramda');
var tslib = require('tslib');
var servicesCore = require('@makerdao/services-core');
var dai = require('@makerdao/dai');
var assert = _interopDefault(require('assert'));
var ethers = require('ethers');
var times = _interopDefault(require('lodash/times'));
var BigNumber = _interopDefault(require('bignumber.js'));

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

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var MCD_DOG = 'MCD_DOG';
var MCD_CLIP_AAVE_A = 'MCD_CLIP_AAVE_A';
var MCD_CLIP_BAL_A = 'MCD_CLIP_BAL_A';
var MCD_CLIP_BAT_A = 'MCD_CLIP_BAT_A';
var MCD_CLIP_COMP_A = 'MCD_CLIP_COMP_A';
var MCD_CLIP_ETH_A = 'MCD_CLIP_ETH_A';
var MCD_CLIP_ETH_B = 'MCD_CLIP_ETH_B';
var MCD_CLIP_ETH_C = 'MCD_CLIP_ETH_C';
var MCD_CLIP_KNC_A = 'MCD_CLIP_KNC_A';
var MCD_CLIP_LINK_A = 'MCD_CLIP_LINK_A';
var MCD_CLIP_LRC_A = 'MCD_CLIP_LRC_A';
var MCD_CLIP_MANA_A = 'MCD_CLIP_MANA_A';
var MCD_CLIP_RENBTC_A = 'MCD_CLIP_RENBTC_A';
var MCD_CLIP_UNI_A = 'MCD_CLIP_UNI_A';
var MCD_CLIP_WBTC_A = 'MCD_CLIP_WBTC_A';
var MCD_CLIP_YFI_A = 'MCD_CLIP_YFI_A';
var MCD_CLIP_ZRX_A = 'MCD_CLIP_ZRX_A';
var MCD_CLIP_UNIV2DAIETH_A = 'MCD_CLIP_UNIV2DAIETH_A';
var MCD_CLIP_UNIV2USDCETH_A = 'MCD_CLIP_UNIV2USDCETH_A';
var MCD_CLIP_UNIV2ETHUSDT_A = 'MCD_CLIP_UNIV2ETHUSDT_A';
var MCD_CLIP_UNIV2WBTCDAI_A = 'MCD_CLIP_UNIV2WBTCDAI_A';
var MCD_CLIP_UNIV2WBTCETH_A = 'MCD_CLIP_UNIV2WBTCETH_A';
var MCD_CLIP_UNIV2LINKETH_A = 'MCD_CLIP_UNIV2LINKETH_A';
var MCD_CLIP_UNIV2UNIETH_A = 'MCD_CLIP_UNIV2UNIETH_A';
var MCD_CLIP_UNIV2AAVEETH_A = 'MCD_CLIP_UNIV2AAVEETH_A';
var MCD_CLIP_UNIV2DAIUSDT_A = 'MCD_CLIP_UNIV2DAIUSDT_A';
var MCD_CLIP_UNIV2DAIUSDC_A = 'MCD_CLIP_UNIV2DAIUSDC_A';
var MCD_CLIP_USDC_A = 'MCD_CLIP_USDC_A';
var MCD_CLIP_USDC_B = 'MCD_CLIP_USDC_B';
var MCD_CLIP_TUSD_A = 'MCD_CLIP_TUSD_A';
var MCD_CLIP_PAXUSD_A = 'MCD_CLIP_PAXUSD_A';
var MCD_CLIP_GUSD_A = 'MCD_CLIP_GUSD_A';
var MCD_CLIP_USDT_A = 'MCD_CLIP_USDT_A';
var MCD_CLIP_MATIC_A = 'MCD_CLIP_MATIC_A';
var MCD_CLIP_WSTETH_A = 'MCD_CLIP_WSTETH_A';
var ALL_CLIPS = [MCD_CLIP_AAVE_A, MCD_CLIP_BAL_A, MCD_CLIP_BAT_A, MCD_CLIP_COMP_A, MCD_CLIP_ETH_A, MCD_CLIP_ETH_B, MCD_CLIP_ETH_C, MCD_CLIP_KNC_A, MCD_CLIP_LINK_A, MCD_CLIP_LRC_A, MCD_CLIP_MANA_A, MCD_CLIP_RENBTC_A, MCD_CLIP_UNI_A, MCD_CLIP_WBTC_A, MCD_CLIP_YFI_A, MCD_CLIP_ZRX_A, MCD_CLIP_UNIV2DAIETH_A, MCD_CLIP_UNIV2USDCETH_A, MCD_CLIP_UNIV2ETHUSDT_A, MCD_CLIP_UNIV2WBTCDAI_A, MCD_CLIP_UNIV2WBTCETH_A, MCD_CLIP_UNIV2LINKETH_A, MCD_CLIP_UNIV2UNIETH_A, MCD_CLIP_UNIV2AAVEETH_A, MCD_CLIP_UNIV2DAIUSDT_A, MCD_CLIP_UNIV2DAIUSDC_A, MCD_CLIP_USDC_A, MCD_CLIP_USDC_B, MCD_CLIP_TUSD_A, MCD_CLIP_PAXUSD_A, MCD_CLIP_GUSD_A, MCD_CLIP_USDT_A, MCD_CLIP_MATIC_A, MCD_CLIP_WSTETH_A];

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

                newArgs = [].concat(args, times(correctArgsLength - 1 - args.length, function () {
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

var MAINNET_SERVER_URL = 'https://api.makerdao.com/graphql';
var RAD = /*#__PURE__*/new BigNumber('1e45');
var WAD = /*#__PURE__*/new BigNumber('1e18');
var RAY = /*#__PURE__*/new BigNumber('1e27');
var nullBytes = '0x';
var bytes32ToNumber = dai.utils.bytes32ToNumber,
    numberToBytes32 = dai.utils.numberToBytes32;
function stringToBytes(str) {
  return ethers.utils.formatBytes32String(str);
}
var medianizers = {
  'LINK-A': '0xbAd4212d73561B240f10C56F27e6D9608963f17b',
  'YFI-A': '0x89AC26C0aFCB28EC55B6CD2F6b7DAD867Fa24639'
};

var LiquidationService = /*#__PURE__*/function (_PublicService) {
  _inheritsLoose(LiquidationService, _PublicService);

  function LiquidationService(name) {
    var _this;

    if (name === void 0) {
      name = 'liquidation';
    }

    _this = _PublicService.call(this, name, ['web3', 'smartContract']) || this;
    _this.vulcanize = true;
    return _this;
  }

  var _proto = LiquidationService.prototype;

  _proto.initialize = function initialize(settings) {
    this.vulcanize = settings.vulcanize;
  };

  _proto.connect = function connect() {
    var network = this.get('web3').network;

    switch (network) {
      case 'mainnet':
      case 1:
        this.serverUrl = MAINNET_SERVER_URL;
        break;

      default:
        this.serverUrl = MAINNET_SERVER_URL;
    }
  };

  _proto._buildUnsafeUrnQuery = function _buildUnsafeUrnQuery(ilk) {
    return "\n      getUrnsByIlk(ilkIdentifier: \"" + ilk + "\", first: 20000) {\n        nodes {\n          urnIdentifier\n          art\n          ink\n          ilk{\n            rate\n            spot\n          }\n        }\n      }\n    ";
  };

  _proto._buildAllClipsQuery = function _buildAllClipsQuery(ilk) {
    return "\n    {allClips(ilk: \"" + ilk + "\") {\n      edges {\n        node {\n          saleId\n          pos\n          tab\n          lot\n          usr\n          tic\n          top\n          active\n          created\n          updated\n        }\n      }\n    }}";
  };

  _proto._allDustQuery = function _allDustQuery() {
    return "\n    {allIlks(first: 1000) {\n      nodes {\n        id\n        dust\n      }\n    }}";
  };

  _proto._buildMedianizerQuery = function _buildMedianizerQuery(ilk) {
    var address = medianizers[ilk];
    return "\n    {allLogMedianPrices(last: 1, filter: {addressByAddressId: {address: {equalTo: \"" + address + "\"}}}) {\n      nodes {\n        val\n        addressByAddressId {\n          address\n        }\n      }\n    }\n  }";
  };

  _proto.getQueryResponse = /*#__PURE__*/function () {
    var _getQueryResponse = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(serverUrl, query, variables) {
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
              assert(data, "error fetching data from " + serverUrl);
              return _context.abrupt("return", data);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getQueryResponse(_x, _x2, _x3) {
      return _getQueryResponse.apply(this, arguments);
    }

    return getQueryResponse;
  }();

  _proto.getUnsafeVaults = /*#__PURE__*/function () {
    var _getUnsafeVaults = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(ilks) {
      var _this2 = this;

      var query, response, nodes, urns;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              query = '{';
              ilks.forEach(function (i) {
                query += i.replace('-', '');
                query += ': ';
                query += _this2._buildUnsafeUrnQuery(i);
              });
              query += '}';
              _context2.next = 5;
              return this.getQueryResponse(this.serverUrl, query);

            case 5:
              response = _context2.sent;
              nodes = Object.values(response);
              urns = nodes.map(function (n) {
                return n.nodes;
              }).flat();
              return _context2.abrupt("return", urns.filter(function (u) {
                var art = new BigNumber(u.art);
                var ink = new BigNumber(u.ink);
                var rate = new BigNumber(u.ilk.rate);
                var spot = new BigNumber(u.ilk.spot);
                if (art.eq(0) || rate.eq(0)) return false;
                return art.div(ink).gt(spot.div(rate));
              }));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getUnsafeVaults(_x4) {
      return _getUnsafeVaults.apply(this, arguments);
    }

    return getUnsafeVaults;
  }();

  _proto.getAllClips = /*#__PURE__*/function () {
    var _getAllClips = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(ilk) {
      var _this3 = this;

      var _yield$Promise$all, tail, cusp, chost, response, clips, active, activeAuctions;

      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Promise.all([this.getTail(ilk), this.getCusp(ilk), this.getChost(ilk)]);

            case 2:
              _yield$Promise$all = _context3.sent;
              tail = _yield$Promise$all[0];
              cusp = _yield$Promise$all[1];
              chost = _yield$Promise$all[2];

              if (!this.vulcanize) {
                _context3.next = 14;
                break;
              }

              _context3.next = 9;
              return this.getQueryResponse(this.serverUrl, this._buildAllClipsQuery(ilk));

            case 9:
              response = _context3.sent;
              clips = response.allClips;
              return _context3.abrupt("return", clips.edges.map(function (c) {
                var obj = c.node;
                obj.tic = new Date(obj.tic * 1000);
                obj.tab = new BigNumber(obj.tab).div(RAD);
                obj.lot = new BigNumber(obj.lot).div(WAD);
                obj.top = new BigNumber(obj.top).div(RAY);
                obj.created = new Date(obj.created);
                obj.updated = new Date(obj.updated);
                obj.endDate = new Date((obj.tic + tail) * 1000);
                obj.chost = chost;
                obj.cusp = cusp;
                obj.ilk = ilk;
                return obj;
              }));

            case 14:
              _context3.next = 16;
              return this._clipperContractByIlk(ilk).list();

            case 16:
              active = _context3.sent;
              _context3.next = 19;
              return Promise.all(active.map(function (a) {
                var id = a.toNumber();
                return _this3._clipperContractByIlk(ilk).sales(id).then(function (s) {
                  var tic = new Date(new BigNumber(s.tic._hex).times(1000).toNumber());
                  var obj = {
                    tic: tic,
                    created: tic,
                    tab: new BigNumber(s.tab._hex).div(RAD),
                    lot: new BigNumber(s.lot._hex).div(WAD),
                    top: new BigNumber(s.top._hex).div(RAY),
                    usr: s.usr,
                    saleId: id,
                    active: true,
                    endDate: new Date(new BigNumber(s.tic.toNumber() + tail).times(1000).toNumber()),
                    chost: chost,
                    cusp: cusp,
                    ilk: ilk
                  };
                  return obj;
                });
              }));

            case 19:
              activeAuctions = _context3.sent;
              return _context3.abrupt("return", activeAuctions);

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getAllClips(_x5) {
      return _getAllClips.apply(this, arguments);
    }

    return getAllClips;
  }();

  _proto.getAllDusts = /*#__PURE__*/function () {
    var _getAllDusts = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4() {
      var response;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.getQueryResponse(this.serverUrl, this._allDustQuery());

            case 2:
              response = _context4.sent;
              return _context4.abrupt("return", response.allIlks.nodes.map(function (i) {
                i.ilk = i.id;
                i.dust = new BigNumber(i.dust).div(RAD);
                return i;
              }));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getAllDusts() {
      return _getAllDusts.apply(this, arguments);
    }

    return getAllDusts;
  }();

  _proto.getPrice = /*#__PURE__*/function () {
    var _getPrice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(ilk) {
      var response;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (medianizers[ilk]) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return", null);

            case 2:
              _context5.next = 4;
              return this.getQueryResponse(this.serverUrl, this._buildMedianizerQuery(ilk));

            case 4:
              response = _context5.sent;
              return _context5.abrupt("return", new BigNumber(response.allLogMedianPrices.nodes[0].val).div(WAD));

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getPrice(_x6) {
      return _getPrice.apply(this, arguments);
    }

    return getPrice;
  }();

  _proto.take = /*#__PURE__*/function () {
    var _take = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(ilk, auctionId, amount, maxPrice, address, _ref) {
      var promise, id, amt, max;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              promise = _ref.promise;
              id = numberToBytes32(auctionId);
              amt = new BigNumber(amount).times(WAD).toFixed();
              max = new BigNumber(maxPrice).times(RAY).toFixed();
              _context6.next = 6;
              return this._clipperContractByIlk(ilk).take(id, amt, max, address, nullBytes, {
                promise: promise
              });

            case 6:
              return _context6.abrupt("return", _context6.sent);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function take(_x7, _x8, _x9, _x10, _x11, _x12) {
      return _take.apply(this, arguments);
    }

    return take;
  }();

  _proto.kicks = /*#__PURE__*/function () {
    var _kicks = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(ilk) {
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this._clipperContractByIlk(ilk).kicks();

            case 2:
              return _context7.abrupt("return", _context7.sent);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function kicks(_x13) {
      return _kicks.apply(this, arguments);
    }

    return kicks;
  }();

  _proto.active = /*#__PURE__*/function () {
    var _active = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(ilk, index) {
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this._clipperContractByIlk(ilk).active(index);

            case 2:
              return _context8.abrupt("return", _context8.sent);

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function active(_x14, _x15) {
      return _active.apply(this, arguments);
    }

    return active;
  }();

  _proto.sales = /*#__PURE__*/function () {
    var _sales = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(ilk, id) {
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this._clipperContractByIlk(ilk).sales(id);

            case 2:
              return _context9.abrupt("return", _context9.sent);

            case 3:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function sales(_x16, _x17) {
      return _sales.apply(this, arguments);
    }

    return sales;
  }();

  _proto.count = /*#__PURE__*/function () {
    var _count = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(ilk) {
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this._clipperContractByIlk(ilk).count();

            case 2:
              return _context10.abrupt("return", _context10.sent);

            case 3:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function count(_x18) {
      return _count.apply(this, arguments);
    }

    return count;
  }();

  _proto.list = /*#__PURE__*/function () {
    var _list = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee11(ilk) {
      return runtime_1.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this._clipperContractByIlk(ilk).list();

            case 2:
              return _context11.abrupt("return", _context11.sent);

            case 3:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function list(_x19) {
      return _list.apply(this, arguments);
    }

    return list;
  }();

  _proto.getStatus = /*#__PURE__*/function () {
    var _getStatus = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee12(ilk, auctionId) {
      var id, status;
      return runtime_1.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              id = numberToBytes32(auctionId);
              _context12.next = 3;
              return this._clipperContractByIlk(ilk).getStatus(id);

            case 3:
              status = _context12.sent;
              return _context12.abrupt("return", status);

            case 5:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function getStatus(_x20, _x21) {
      return _getStatus.apply(this, arguments);
    }

    return getStatus;
  }();

  _proto.getHoleAndDirtForIlk = /*#__PURE__*/function () {
    var _getHoleAndDirtForIlk = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee13(ilk) {
      var data, hole, dirt, diff;
      return runtime_1.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return this._dogContract().ilks(stringToBytes(ilk));

            case 2:
              data = _context13.sent;
              hole = new BigNumber(data.hole._hex).div(RAD);
              dirt = new BigNumber(data.dirt._hex).div(RAD);
              diff = hole.minus(dirt);
              return _context13.abrupt("return", {
                hole: hole,
                dirt: dirt,
                diff: diff
              });

            case 7:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function getHoleAndDirtForIlk(_x22) {
      return _getHoleAndDirtForIlk.apply(this, arguments);
    }

    return getHoleAndDirtForIlk;
  }();

  _proto.getHoleAndDirt = /*#__PURE__*/function () {
    var _getHoleAndDirt = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee14() {
      var _yield$Promise$all2, h, d, hole, dirt, diff;

      return runtime_1.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return Promise.all([this._dogContract().Hole(), this._dogContract().Dirt()]);

            case 2:
              _yield$Promise$all2 = _context14.sent;
              h = _yield$Promise$all2[0];
              d = _yield$Promise$all2[1];
              hole = new BigNumber(h._hex).div(RAD);
              dirt = new BigNumber(d._hex).div(RAD);
              diff = hole.minus(dirt);
              return _context14.abrupt("return", {
                hole: hole,
                dirt: dirt,
                diff: diff
              });

            case 9:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function getHoleAndDirt() {
      return _getHoleAndDirt.apply(this, arguments);
    }

    return getHoleAndDirt;
  }();

  _proto.getChost = /*#__PURE__*/function () {
    var _getChost = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee15(ilk) {
      var chost;
      return runtime_1.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return this._clipperContractByIlk(ilk).chost();

            case 2:
              chost = _context15.sent;
              return _context15.abrupt("return", new BigNumber(chost._hex).div(RAD));

            case 4:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));

    function getChost(_x23) {
      return _getChost.apply(this, arguments);
    }

    return getChost;
  }();

  _proto.getTail = /*#__PURE__*/function () {
    var _getTail = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee16(ilk) {
      var tail;
      return runtime_1.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return this._clipperContractByIlk(ilk).tail();

            case 2:
              tail = _context16.sent;
              return _context16.abrupt("return", tail.toNumber());

            case 4:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function getTail(_x24) {
      return _getTail.apply(this, arguments);
    }

    return getTail;
  }();

  _proto.getCusp = /*#__PURE__*/function () {
    var _getCusp = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee17(ilk) {
      var cusp;
      return runtime_1.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return this._clipperContractByIlk(ilk).cusp();

            case 2:
              cusp = _context17.sent;
              return _context17.abrupt("return", new BigNumber(cusp._hex).div(RAY));

            case 4:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));

    function getCusp(_x25) {
      return _getCusp.apply(this, arguments);
    }

    return getCusp;
  }();

  _proto.joinDaiToAdapter = /*#__PURE__*/function () {
    var _joinDaiToAdapter = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee18(amount, _ref2) {
      var promise, address, amt;
      return runtime_1.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              promise = _ref2.promise;
              address = this.get('web3').currentAddress();
              amt = new BigNumber(amount).times(WAD).toFixed();
              _context18.next = 5;
              return this._joinDaiAdapter().join(address, amt, {
                promise: promise
              });

            case 5:
              return _context18.abrupt("return", _context18.sent);

            case 6:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, this);
    }));

    function joinDaiToAdapter(_x26, _x27) {
      return _joinDaiToAdapter.apply(this, arguments);
    }

    return joinDaiToAdapter;
  }();

  _proto.exitDaiFromAdapter = /*#__PURE__*/function () {
    var _exitDaiFromAdapter = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee19(amount, _ref3) {
      var promise, address, amt;
      return runtime_1.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              promise = _ref3.promise;
              address = this.get('web3').currentAddress();
              amt = new BigNumber(amount).times(WAD).toFixed();
              _context19.next = 5;
              return this._joinDaiAdapter().exit(address, amt, {
                promise: promise
              });

            case 5:
              return _context19.abrupt("return", _context19.sent);

            case 6:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this);
    }));

    function exitDaiFromAdapter(_x28, _x29) {
      return _exitDaiFromAdapter.apply(this, arguments);
    }

    return exitDaiFromAdapter;
  }();

  _proto.exitGemFromAdapter = /*#__PURE__*/function () {
    var _exitGemFromAdapter = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee20(ilk, amount, _ref4) {
      var promise, address, amt;
      return runtime_1.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              promise = _ref4.promise;
              address = this.get('web3').currentAddress();
              amt = new BigNumber(amount).times(WAD).toFixed();
              _context20.next = 5;
              return this._joinGemAdapter(ilk).exit(address, amt, {
                promise: promise
              });

            case 5:
              return _context20.abrupt("return", _context20.sent);

            case 6:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, this);
    }));

    function exitGemFromAdapter(_x30, _x31, _x32) {
      return _exitGemFromAdapter.apply(this, arguments);
    }

    return exitGemFromAdapter;
  }();

  _proto.bark = /*#__PURE__*/function () {
    var _bark = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee21(ilk, urn, _ref5) {
      var promise, address, tx, id;
      return runtime_1.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              promise = _ref5.promise;
              _context21.prev = 1;
              address = this.get('web3').currentAddress();
              _context21.next = 5;
              return this._dogContract().bark(stringToBytes(ilk), urn, address, {
                promise: promise
              });

            case 5:
              tx = _context21.sent;
              id = tx.receipt.logs[4].topics[3];
              return _context21.abrupt("return", bytes32ToNumber(id));

            case 10:
              _context21.prev = 10;
              _context21.t0 = _context21["catch"](1);
              throw console.error(_context21.t0);

            case 13:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, this, [[1, 10]]);
    }));

    function bark(_x33, _x34, _x35) {
      return _bark.apply(this, arguments);
    }

    return bark;
  }();

  _proto._clipperContractByIlk = function _clipperContractByIlk(ilk) {
    var suffix = ilk.replace('-', '_');
    return this.get('smartContract').getContractByName("MCD_CLIP_" + suffix);
  };

  _proto._dogContract = function _dogContract() {
    return this.get('smartContract').getContractByName('MCD_DOG');
  };

  _proto._joinDaiAdapter = function _joinDaiAdapter() {
    return this.get('smartContract').getContractByName('MCD_JOIN_DAI');
  };

  _proto._joinGemAdapter = function _joinGemAdapter(ilk) {
    var suffix = ilk.replace('-', '_');
    return this.get('smartContract').getContractByName("MCD_JOIN_" + suffix);
  };

  return LiquidationService;
}(servicesCore.PublicService);

tslib.__decorate([tracksTransactions, tslib.__metadata("design:type", Function), tslib.__metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object]), tslib.__metadata("design:returntype", Promise)], LiquidationService.prototype, "take", null);

tslib.__decorate([tracksTransactions, tslib.__metadata("design:type", Function), tslib.__metadata("design:paramtypes", [Object, Object]), tslib.__metadata("design:returntype", Promise)], LiquidationService.prototype, "joinDaiToAdapter", null);

tslib.__decorate([tracksTransactions, tslib.__metadata("design:type", Function), tslib.__metadata("design:paramtypes", [Object, Object]), tslib.__metadata("design:returntype", Promise)], LiquidationService.prototype, "exitDaiFromAdapter", null);

tslib.__decorate([tracksTransactions, tslib.__metadata("design:type", Function), tslib.__metadata("design:paramtypes", [Object, Object, Object]), tslib.__metadata("design:returntype", Promise)], LiquidationService.prototype, "exitGemFromAdapter", null);

tslib.__decorate([tracksTransactions, tslib.__metadata("design:type", Function), tslib.__metadata("design:paramtypes", [Object, Object, Object]), tslib.__metadata("design:returntype", Promise)], LiquidationService.prototype, "bark", null);

var index = {
  addConfig: function addConfig(config, _ref) {
    var _extends2;

    var _ref$vulcanize = _ref.vulcanize,
        vulcanize = _ref$vulcanize === void 0 ? true : _ref$vulcanize;
    var contractAddresses = {
      mainnet: require('../contracts/addresses/mainnet.json'),
      kovan: require('../contracts/addresses/kovan.json'),
      goerli: require('../contracts/addresses/goerli.json')
    };

    try {
      contractAddresses.testnet = require('../contracts/addresses/testnet.json');
    } catch (err) {}

    var addClips = ALL_CLIPS.reduce(function (acc, cur) {
      acc[cur] = {
        address: ramda.map(ramda.prop(cur), contractAddresses),
        abi: require('../contracts/abis/Clipper.json')
      };
      return acc;
    }, {});

    var addContracts = _extends((_extends2 = {}, _extends2[MCD_DOG] = {
      address: ramda.map(ramda.prop('MCD_DOG'), contractAddresses),
      abi: require('../contracts/abis/Dog.json')
    }, _extends2), addClips);

    return _extends({}, config, {
      additionalServices: ['liquidation'],
      liquidation: [LiquidationService, {
        vulcanize: vulcanize
      }],
      smartContract: {
        addContracts: addContracts
      }
    });
  }
};

exports.default = index;
//# sourceMappingURL=dai-plugin-liquidations.cjs.development.js.map
