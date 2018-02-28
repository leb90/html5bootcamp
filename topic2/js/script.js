class Movie {
    constructor(name, year, duration) {
        this.name = name;
        this.year = year;
        this.duration = duration;
    }
    play() {
        console.log("Play..");
    }

    pause() {
        console.log("Pause..");
    }

    resume() {
        console.log("Resume..");
    }
}
var movie = new Movie('pepe', 1999, "50:00");
console.log(movie)

class Actor {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

class EventEmitter {
    constructor() {
        this.events = [];
    }

    on(eventName, callback) {

        this._eventCollection = this._eventCollection || {};
        this._eventCollection[eventName] = this._eventCollection[eventName] || [];

        this._eventCollection[eventName].push(callback);

        return this;
    }

    emit(eventName) {
        let callback;

        if (!this._eventCollection || !(callback = this._eventCollection[eventName])) {
            return this;
        }

        callback = callback.slice(0);

        callback.forEach(fn => fn.apply(this));

        return this;
    }

    off(eventName, callback) {



        if (!this._eventCollection || !(callback = this._eventCollection[eventName])) {
            return this;
        }

        callback.forEach((fn, i) => {
            if (fn === callback[0] || fn.callback[0] === callback[0]) {

                callback.splice(i, 1);
            }
        });

        if (callback.length === 0) {
            delete this._eventCollection[eventName];
        }

        return this;
    }
}
var event = new EventEmitter();

var test = event.on("evento", function() {})

event.emit('evento')

event.off('evento', function() {})