const input = global
  .loadInput()
  .lines()

  let horizontal = 0;
  let depth = 0;
  let aim = 0;
input.forEach(line => {
  if(line.includes('forward')) {
    horizontal +=  parseInt(line.slice(-1));
    depth += (aim * parseInt(line.slice(-1)));
  } else if(line.includes('down')) {
    aim += parseInt(line.slice(-1));
  } else if(line.includes('up')) {
    aim -= parseInt(line.slice(-1));
  }

});


console.log(horizontal * depth);