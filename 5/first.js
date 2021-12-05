const { exit } = require("process");

let input = global
  .loadInput()
  .lines().map(i => i.replace(" -> ", ","))


  input = input.map(coord => coord.split(',').map(num => num.int()));
  
  let diagramMap = Array(1000).fill(0).map(x => Array(1000).fill(0))

  for(const line of input) {
    let firstCoord = [line[0], line[1]];
    let secondCoord = [line[2], line[3]];
    if(firstCoord[0] != secondCoord[0] && firstCoord[1] != secondCoord[1]) {
      continue;
    }

    if(firstCoord.reduce((a, b) => a + b, 0) >= secondCoord.reduce((a, b) => a + b, 0)) {
      var temp = secondCoord;
      secondCoord = firstCoord;
      firstCoord = temp;
    }
    
    let y = firstCoord[0];
    let x = firstCoord[1];
    
    while(y <= secondCoord[0] || x <= secondCoord[1] ) {
      diagramMap[x][y]++

      if( y == secondCoord[0] && x == secondCoord[1]){
        break;
      }
      y == secondCoord[0]? null:y++;
      x == secondCoord[1]? null:x++;
      
    }
  }

  let sum = 0;
  for(const line of diagramMap) {
    for (const num of line) {
      if(num > 1) {
        sum++;
      }
    }
  }
  
  console.log(sum);
