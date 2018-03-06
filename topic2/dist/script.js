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