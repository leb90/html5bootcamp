"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EvEmitter = function () {
    function EvEmitter() {
        _classCallCheck(this, EvEmitter);

        this.events = {};
    }

    _createClass(EvEmitter, [{
        key: "on",
        value: function on(eventName, callback) {
            this.events[eventName] ? this.events[eventName].push(callback) : this.events[eventName] = [callback];
        }
    }, {
        key: "emit",
        value: function emit(eventName) {
            if (this.events[eventName]) this.events[eventName].forEach(function (x) {
                return x();
            });
        }
    }, {
        key: "off",
        value: function off(eventName, callback) {
            if (this.events[eventName]) {
                this.events[eventName].forEach(function (x) {
                    return x();
                });
                delete this.events[eventName];
            }
        }
    }]);

    return EvEmitter;
}();

exports.default = EvEmitter;