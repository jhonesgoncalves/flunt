'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _notification = require('./notification');

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
    }, {
        key: 'isGreaterThan',
        value: function isGreaterThan(value, comparer, property, message) {
            if (value < comparer) this.notifications.push(new _notification2.default(property, message));

            return this;
        }
    }, {
        key: 'isValid',
        value: function isValid() {
            return this.notifications.length == 0;
        }
    }, {
        key: 'getNotifications',
        value: function getNotifications() {
            return this.notifications;
        }
    }, {
        key: 'getMessages',
        value: function getMessages() {
            return this.notifications.map(function (x) {
                return x.message;
            });
        }
    }]);

    return Contract;
}();

exports.default = Contract;