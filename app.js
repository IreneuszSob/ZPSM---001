const _ = require('lodash');
const array = [4, 2, 8, 6]
x =_.mean(array);
y =_.min(array);
z =_.max(array);
console.log("Array : [" + array + "]")
console.log("mean: " + x)
console.log("min: " + y)
console.log("max: " + z)