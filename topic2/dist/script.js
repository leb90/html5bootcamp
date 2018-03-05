'use strict';

var Actor = require('./actor');
var Logger = require('./logger');
var Movie = require('./movie');

var terminator = new Movie('Terminator I', 1985, 60);
var arnold = new Actor('Arnold Schwarzenegger', 50);
var actors = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];

var social = {
    share: function share(friendName) {
        console.log(friendName + " shares " + this.title);
    },
    like: function like(friendName) {
        console.log(friendName + " likes " + this.title);
    }
};

Object.assign(Movie.prototype, social);

var logger = new Logger();

terminator.addCast(arnold);
terminator.addCast(actors);

terminator.on("play", logger.log);
terminator.on("pause", logger.log);
terminator.on("resume", logger.log);

terminator.play();
terminator.pause();
terminator.resume();