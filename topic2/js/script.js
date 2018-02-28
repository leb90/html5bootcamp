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