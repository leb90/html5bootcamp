
export default class EvEmitter {
    constructor() {

        this.events = {}
    }

    on(eventName, callback) {
        this.events[eventName] ? this.events[eventName].push(callback) : this.events[eventName] = [callback]
    }

    emit(eventName) {
        if (this.events[eventName]) this.events[eventName].forEach(x => x())
    }

    off(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(x => x())
            delete this.events[eventName]
        }
    }
}


