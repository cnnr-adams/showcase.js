/* eslint-disable no-console */
const defaultAwesomeFunction = require('../lib').default;
const { awesomeFunction } = require('../lib');

const defaultVal = defaultAwesomeFunction('Connor');
const val = awesomeFunction();

console.log(defaultVal);
// val === 'I am just an Awesome Function'
console.log(val);
