'use strict';

// import hello module.
var greet = require('./hello').default;

var name = 'Michael';

console.log('.')
greet(name);
console.log('main.js done.')