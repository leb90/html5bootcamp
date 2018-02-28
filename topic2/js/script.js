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
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }

    emit(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function(callback) {
                callback(eventName);
            });
        }
    }

    off(eventName, callback) {
        if (this.events[eventName]) {
            let index = this.events[eventName].indexOf(callback);
            if (index !== -1) {
                this.events[eventName].splice(index, 1);
            }
        }
    }
}
var event = new EventEmitter();

var test = event.on("evento", function(i) {
	alert('hola')
})

event.emit('evento')