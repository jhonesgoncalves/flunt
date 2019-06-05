'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _notification = require('./notification');

var _notification2 = _interopRequireDefault(_notification);

var _contract = require('./contract');

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