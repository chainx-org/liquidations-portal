"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeSnapshot = takeSnapshot;
exports.restoreSnapshot = restoreSnapshot;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _callGanache = _interopRequireDefault(require("./callGanache"));

function takeSnapshot(_x) {
  return _takeSnapshot.apply(this, arguments);
}

function _takeSnapshot() {
  _takeSnapshot = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(maker) {
    var snapshotData, res, _yield$res$json, result, nonceService, web3Service, addresses;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            snapshotData = {};
            _context.next = 3;
            return (0, _callGanache["default"])('evm_snapshot');

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            _yield$res$json = _context.sent;
            result = _yield$res$json.result;
            snapshotData.snapshotId = parseInt(result, 16);

            if (maker) {
              nonceService = maker.service('nonce');
              web3Service = maker.service('web3');
              addresses = maker.service('accounts').listAccounts().map(function (account) {
                return account.address;
              });
              snapshotData.transactionCounts = addresses.reduce(function (acc, address) {
                acc[address] = nonceService._counts[address];
                return acc;
              }, {});
              snapshotData.currentBlock = web3Service.blockNumber();
            }

            return _context.abrupt("return", snapshotData);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _takeSnapshot.apply(this, arguments);
}

function restoreSnapshot(_x2, _x3) {
  return _restoreSnapshot.apply(this, arguments);
}

function _restoreSnapshot() {
  _restoreSnapshot = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(snapshotData, maker) {
    var res;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _callGanache["default"])('evm_revert', [snapshotData.snapshotId]);

          case 2:
            res = _context2.sent;

            if (maker && snapshotData.transactionCounts) {
              Object.keys(maker.service('nonce')._counts).forEach(function (address) {
                maker.service('nonce')._counts[address] = snapshotData.transactionCounts[address] || undefined;
              });
            }

            if (maker && snapshotData.currentBlock) {
              maker.service('web3')._currentBlock = snapshotData.currentBlock;
            }

            _context2.next = 7;
            return res.json();

          case 7:
            return _context2.abrupt("return", _context2.sent.result);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _restoreSnapshot.apply(this, arguments);
}