const input = global
  .loadInput()
  .lines()
  .map((i) => parseInt(i, 10));

  let counter = 0;
  for(let i = 1; i < input.length; i++) {
    if(input[i] > input[i-1]) {
      counter++;
    }
  }

  console.log(counter);