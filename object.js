const findKey = require('lodash/concat');

const users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
};

const result = findKey(users, function(o) { return o.age < 40; });
console.log(result);
