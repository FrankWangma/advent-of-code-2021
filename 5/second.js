const { exit } = require("process");

let input = global
  .loadInput()
  .lines().map(i => i.replace(" -> ", ","))


  input = input.map(coord => coord.split(',').map(num => num.int()));

  let diagramMap = Array(1000).fill(0).map(x => Array(1000).fill(0))

  for(const line of input) {
    let firstCoord = [line[0], line[1]];
    let secondCoord = [line[2], line[3]];

    if(firstCoord.reduce((a, b) => a + b, 0) >= secondCoord.reduce((a, b) => a + b, 0)) {
      var temp = secondCoord;
      secondCoord = firstCoord;
      firstCoord = temp;
    }
    
    let y1 = firstCoord[0];
    let x1 = firstCoord[1];
    
    let y2 = secondCoord[0];
    let x2 = secondCoord[1];
    
    while(y1 <= secondCoord[0] || x1 <= secondCoord[1] ) {
      diagramMap[x1][y1]++

      if( y1 == y2 && x1 == x2){
        break;
      }
      
      var yModifier = 1;
      var xModifier = 1;
      if(y1 > y2) {
        yModifier = -1;
      }

      if(x1 > x2) {
        xModifier = -1;
      }

      y1 == y2? null:y1 += yModifier;
      x1 == x2? null:x1 += xModifier;
      
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