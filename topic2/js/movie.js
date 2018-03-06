
import {evEmitter} from './eventEmitter';


export default class Movie extends evEmitter {
    constructor(name, year, duration) {
    	super();
        this.name = name;
        this.year = year;
        this.duration = duration;
        this.actors = [];
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

    addCast(cast) {
        if (Array.isArray(cast)) {
            for (var i = 0; i < cast.length; i++) {
                this.actors.push(cast[i]);
            }
        } else {
            this.actors.push(cast);
        }
    }
}

