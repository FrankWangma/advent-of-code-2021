

let input = global
  .loadInput()
  .lines().map(numArray => numArray.split(',').map(num => num.int()))[0]

let daysToRun = 80;

for(var i = 0; i < daysToRun; i++) {
  var numFishBeforeSpawn = input.length;
  for(var j = 0; j < numFishBeforeSpawn; j++) {
    if(input[j] == 0) {
      input[j] = 6;
      input.push(8);
    } else {
      input[j]--;
    }
  }
}

console.log(input.length);