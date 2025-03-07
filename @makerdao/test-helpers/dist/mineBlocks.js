"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mineBlocks;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _callGanache = _interopRequireDefault(require("./callGanache"));

var _assert = _interopRequireDefault(require("assert"));

var WAIT_AFTER_MINE_CALL = 250;

function mineBlocks(_x, _x2) {
  return _mineBlocks.apply(this, arguments);
}

function _mineBlocks() {
  _mineBlocks = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(service, count) {
    var web3Service, serviceName, initialNumber, i, newNumber, expectedNumber;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            serviceName = service.manager().name();

            if (serviceName === 'web3') {
              web3Service = service;
            } else {
              if (serviceName !== 'token') service = service.get('token');
              web3Service = service.get('web3');
            }

            if (!count) count = web3Service.confirmedBlockCount() + 2;
            (0, _assert["default"])(WAIT_AFTER_MINE_CALL > web3Service._pollingInterval * 2, 'mineBlocks may not work well; pollingInterval is too long');
            initialNumber = web3Service.blockNumber();
            i = 0;

          case 6:
            if (!(i < count)) {
              _context.next = 14;
              break;
            }

            _context.next = 9;
            return (0, _callGanache["default"])('evm_mine');

          case 9:
            _context.next = 11;
            return new Promise(function (resolve) {
              return setTimeout(resolve, WAIT_AFTER_MINE_CALL);
            });

          case 11:
            i++;
            _context.next = 6;
            break;

          case 14:
            newNumber = web3Service.blockNumber();
            expectedNumber = initialNumber + count;
            (0, _assert["default"])(newNumber >= expectedNumber, "blockNumber should be >= ".concat(expectedNumber, ", is ").concat(newNumber));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _mineBlocks.apply(this, arguments);
}