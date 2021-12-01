const input = global
  .loadInput()
  .lines()
  .map((i) => parseInt(i, 10));
 
  let counter = 0;
  let sum1 = Number.MAX_VALUE;
  let sum2 = input[0] + input[1] + input[2];

  for(let i = 1; i < input.length - 1; i++) {
    if(sum2 > sum1) {
        counter++;
    }
    
    sum1 = sum2;
    sum2 = 0;
    for(let j = i; j < i + 3; j++) {
        sum2 += input[j];
    }
  }

  console.log(counter);