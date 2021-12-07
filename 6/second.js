const { isNullOrUndefined } = require("util");


let input = global
.loadInput()
.lines().map(numArray => numArray.split(',').map(num => num.int()))[0]

let daysToRun = 256;

const occurrences = input.reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, []);

for(var i = 0; i < 9; i++) {
  if(!occurrences[i]) {
    occurrences[i] = 0;
  }
}

for(var i = 0; i < daysToRun; i++) {
  var temp = occurrences.shift();
  occurrences.push(temp);
  
  occurrences[6] += occurrences[8];
}

console.log(sumArray(occurrences));

function sumArray(array) {
  return array.reduce((a, b) => a + b, 0)
}