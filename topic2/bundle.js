

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.age = age;
};

exports.default = Actor;


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


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: "log",
        value: function log(data) {
            console.log("The event: '" + data + "' has been triggered!");
        }
    }]);

    return Logger;
}();

exports.default = Logger;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = require("./eventEmitter");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_evEmitter) {
    _inherits(Movie, _evEmitter);

    function Movie(name, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        _this.name = name;
        _this.year = year;
        _this.duration = duration;
        _this.actors = [];
        return _this;
    }

    _createClass(Movie, [{
        key: "play",
        value: function play() {
            console.log("Play..");
        }
    }, {
        key: "pause",
        value: function pause() {
            console.log("Pause..");
        }
    }, {
        key: "resume",
        value: function resume() {
            console.log("Resume..");
        }
    }, {
        key: "addCast",
        value: function addCast(cast) {
            if (Array.isArray(cast)) {
                for (var i = 0; i < cast.length; i++) {
                    this.actors.push(cast[i]);
                }
            } else {
                this.actors.push(cast);
            }
        }
    }]);

    return Movie;
}(_eventEmitter.evEmitter);

exports.default = Movie;
'use strict';

var _actor = require('./actor');

var _logger = require('./logger');

var _movie = require('./movie');

var terminator = new _movie.Movie('Terminator I', 1985, 60);
var arnold = new _actor.Actor('Arnold Schwarzenegger', 50);
var actors = [new _actor.Actor('Paul Winfield', 50), new _actor.Actor('Michael Biehn', 50), new _actor.Actor('Linda Hamilton', 50)];

var social = {
    share: function share(friendName) {
        console.log(friendName + " shares " + this.title);
    },
    like: function like(friendName) {
        console.log(friendName + " likes " + this.title);
    }
};

Object.assign(_movie.Movie.prototype, social);

var logger = new _logger.Logger();

terminator.addCast(arnold);
terminator.addCast(actors);

terminator.on("play", logger.log);
terminator.on("pause", logger.log);
terminator.on("resume", logger.log);

terminator.play();
terminator.pause();
terminator.resume();
