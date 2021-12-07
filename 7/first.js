

let input = global
  .loadInput()
  .lines().map(numArray => numArray.split(',').map(num => num.int()))[0]
  
  let minCost = Number.MAX_VALUE;
  let bestPosition = -1;
  for(var i = 0; i <= Math.max(...input); i++) {
    var sum = 0;
    for(const pos of input) {
      sum += Math.abs(pos - i);
    };
    if(sum < minCost) {
      minCost = sum;
      bestPosition = i;
    }
  }

  console.log(minCost);