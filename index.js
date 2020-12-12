const lodash = require('lodash');

const { chunk, compact, concat, difference, uniq } = lodash;

console.warn('___________________lesson one chunk-------------------------');
console.warn('How make n chunks of an array');
const arrayOne = ['fa', 'salam', 'en', 'hello', 'de', 'Hallo']
console.warn(arrayOne, "N = 2, BECOMES ===>" , chunk(arrayOne, 2));
console.warn(arrayOne, "N = 4, BECOMES ===>" , chunk(arrayOne, 4));

console.warn('___________________lesson two compact-------------------------');
console.warn('How to sanitize array with null and undefined');
const arrayTwo = [undefined, { a: 'hi'}, null, 55, 'Afsane']
console.warn(arrayTwo, "BECOMES ===>" , compact(arrayTwo));

console.warn('___________________lesson three concat-------------------------');
console.warn('How to concat array with stuff');
const arrayThree = ['element 1'];
const wannaJoin = ['element 2'];
const wannaJoinAgain = [{ a: 'hi'}];

console.warn(arrayThree, "BECOMES ===>" , concat(arrayThree, wannaJoin, wannaJoinAgain, 30, 'afsane'));


console.warn('___________________lesson four difference-------------------------');
console.warn('How to find difference in an array');
const arrayFour = ['element 1', 'element 2'];

console.warn(arrayFour, "BECOMES ===>" , difference(arrayFour, ['element 1', ['element 2']]));


console.warn('___________________lesson five uniqBy-------------------------');
console.warn('How to make an array uniq');
const arrayFive = ['element 1','element 3','element 3','element 4', 'element 1'];

console.warn(arrayFive, "BECOMES ===>" , uniq(arrayFive));