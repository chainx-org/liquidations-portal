"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestAccountProvider = exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _testAccounts = _interopRequireDefault(require("./testAccounts.json"));

/**
 *
 */
var TestAccountProvider = /*#__PURE__*/function () {
  function TestAccountProvider(accounts) {
    var initialIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    (0, _classCallCheck2["default"])(this, TestAccountProvider);

    this._setAccounts(accounts);

    this.setIndex(initialIndex);
  }

  (0, _createClass2["default"])(TestAccountProvider, [{
    key: "nextAddress",
    value: function nextAddress() {
      return this._next().address;
    }
  }, {
    key: "nextAccount",
    value: function nextAccount() {
      return this._next();
    }
  }, {
    key: "getIndex",
    value: function getIndex() {
      return this._index;
    }
  }, {
    key: "setIndex",
    value: function setIndex(i) {
      if (typeof i !== 'number' || i < 0 || i >= this._accounts.addresses.length) {
        throw new Error('Index must be a natural number between 0 and ' + (this._accounts.addresses.length - 1) + ', got: ' + i);
      }

      this._setIndex(i);
    }
  }, {
    key: "_setIndex",
    value: function _setIndex(i) {
      this._index = i; // eslint-disable-next-line

      process.env._TestProviderIndex = '' + this._index;
    }
  }, {
    key: "_setAccounts",
    value: function _setAccounts(accounts) {
      if ((0, _typeof2["default"])(accounts) !== 'object' || !accounts.addresses || !accounts.keys) {
        throw new Error('Accounts must be an object with properties addresses and keys');
      }

      if (accounts.addresses.length !== accounts.keys.length) {
        throw new Error('Accounts addresses and keys arrays must have the same length');
      }

      this._accounts = accounts;
    }
  }, {
    key: "_next",
    value: function _next() {
      if (this._index >= this._accounts.addresses.length) {
        throw new Error('No more test accounts available.');
      }

      var i = this.getIndex();

      this._setIndex(i + 1);

      return {
        address: this._accounts.addresses[i],
        key: '0x' + this._accounts.keys[i]
      };
    }
  }]);
  return TestAccountProvider;
}(); // eslint-disable-next-line


exports.TestAccountProvider = TestAccountProvider;
var i = process.env._TestProviderIndex ? // eslint-disable-next-line
parseInt(process.env._TestProviderIndex) : 1;
var p = new TestAccountProvider(_testAccounts["default"], i);
exports["default"] = p;