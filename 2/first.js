const input = global
  .loadInput()
  .lines()

  let horizontal = 0;
  let depth = 0;
input.forEach(line => {
  if(line.includes('f')) {
    horizontal +=  parseInt(line.slice(-1));
  } else if(line.includes('down')) {
    depth += parseInt(line.slice(-1));
  } else if(line.includes('up')) {
    depth -= parseInt(line.slice(-1));
  }

});


console.log(horizontal * depth);