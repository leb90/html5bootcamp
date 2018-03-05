"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var evEmitter = require('./eventEmitter');

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
}(evEmitter);

module.exports = Movie;