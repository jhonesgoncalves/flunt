(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MarvelWrapper"] = factory();
	else
		root["MarvelWrapper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notification = function Notification(property, message) {
    _classCallCheck(this, Notification);

    this.property = property;
    this.message = message;
};

exports.default = Notification;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _notification = __webpack_require__(0);

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Contract = function () {
    function Contract() {
        _classCallCheck(this, Contract);

        this.notifications = [];
    }

    _createClass(Contract, [{
        key: 'isRequired',
        value: function isRequired(value, property, message) {
            if (!value || value.length <= 0) this.notifications.push(new _notification2.default(property, message));

            return this;
        }
    }, {
        key: 'hasMinLen',
        value: function hasMinLen(value, min, property, message) {
            if (!value || value.length < min) this.notifications.push(new _notification2.default(property, message));

            return this;
        }
    }, {
        key: 'hasMaxLen',
        value: function hasMaxLen(value, max, property, message) {
            if (!value || value.length > max) this.notifications.push(new _notification2.default(property, message));

            return this;
        }
    }, {
        key: 'isFixedLen',
        value: function isFixedLen(value, len, property, message) {
            if (value.length != len) this.notifications.push(new _notification2.default(property, message));

            return this;
        }
    }, {
        key: 'isEmail',
        value: function isEmail(value, property, message) {
            var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
            if (!reg.test(value)) this.notifications.push(new _notification2.default(property, message));

            return this;
        }
    }]);

    return Contract;
}();

exports.default = Contract;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contract = exports.Notification = exports.Notifiable = undefined;

var _notifiable = __webpack_require__(4);

var _notifiable2 = _interopRequireDefault(_notifiable);

var _notification = __webpack_require__(0);

var _notification2 = _interopRequireDefault(_notification);

var _contract = __webpack_require__(1);

var _contract2 = _interopRequireDefault(_contract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Notifiable = _notifiable2.default;
exports.Notification = _notification2.default;
exports.Contract = _contract2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2).default;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _notification = __webpack_require__(0);

var _notification2 = _interopRequireDefault(_notification);

var _contract = __webpack_require__(1);

var _contract2 = _interopRequireDefault(_contract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notifiable = function () {
    function Notifiable() {
        _classCallCheck(this, Notifiable);

        this.notifications = [];
    }

    _createClass(Notifiable, [{
        key: 'AddNotification',
        value: function AddNotification(property, message) {
            this.notifications.push(new _notification2.default(property, message));
        }
    }, {
        key: 'AddNotifications',
        value: function AddNotifications(contract) {
            var _this = this;

            if (contract instanceof _contract2.default) {
                contract.notifications.forEach(function (notification) {
                    _this.notifications.push(new _notification2.default(notification.property, notification.message));
                });
            } else {
                contract.map(function (notification) {
                    _this.notifications.push(new _notification2.default(notification.property, notification.message));
                });
            }
        }
    }, {
        key: 'isValid',
        value: function isValid() {
            return this.notifications.length == 0;
        }
    }]);

    return Notifiable;
}();

exports.default = Notifiable;

/***/ })
/******/ ]);
});
//# sourceMappingURL=flunt.js.map