var pcduino = require('pcduino');

// load digital API
var API = Object.create(pcduino.digital);

// load analog API
API.analogWrite = pcduino.analog.analogWrite;
API.analogRead = pcduino.analog.analogRead;

// load extra native API
var Native = require('./build/Release/yapcduino');

API.digitalWritePWM = require('./lib/digital-write-pwm');

/**
 * Suspend execution for microsecond intervals
 *
 * @param {Int} us - time for suspending
 */
API.usleep = function(us) {
    Native.usleep(us);
};

/**
 * pulseIn
 *
 * @param {Int} pin - Pin ID
 * @param {Int} value - Type of pulse to read: either pcduino.HIGH or pcduino.LOW (int)
 * @param {Int} timeout - The number of microseconds to wait for the pulse to start; default is one second
 */
API.pulseIn = function(pin, value, timeout) {
    if (typeof timeout === "undefined") {
        timeout = 1000 * 1000; // 1s
    }
    Native.pulseIn(pin, value, timeout);
};


module.exports = API;
