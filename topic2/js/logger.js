class Logger {

    constructor() {}

    log(data) {
        console.log("The event: '" + data + "' has been triggered!");
    }
}

module.exports = Logger;