const input = global
  .loadInput()
  .blocks()

var BreakException = {};
let nums = input[0][0].toString().split(',')
input.splice(0,1);

newArray = input.map(block => 
  block = block.map(line => 
    line.split(' ').map(i => {
      return parseInt(i, 10);
    }).filter(x => 
      !Number.isNaN(x)
    )
  )
)
let oldArray = input.map(block => 
  block = block.map(line => 
    line.split(' ').map(i => {
      return parseInt(i, 10);
    }).filter(x => 
      !Number.isNaN(x)
    )
  )
)

let winningBlock = [];
let winningNum = -1;
let sum = 0;
let index = 0;
let indexHor;
let indexVert;
try{
  nums.forEach(num => {
    console.log(num);
    index = 0;
    newArray.forEach(block => {
      block.forEach(line => {
        if(line.includes(parseInt(num))) {
          line[line.indexOf(parseInt(num))] = -1;
        };
      })
      console.log(block);
      var result = bingoCheck(block)
      if(result[0]) {
        winningBlock = block;
        winningNum = num;
        winningIndex = index;
        indexHor = result[1];
        indexVert = result[2];
        throw BreakException
      }
      index++;
    });
  });
} catch(e) {
  if (e !== BreakException) throw e;
  for(let i = 0; i < winningBlock.length; i++) {
    for(var j=0; j < winningBlock[i].length; j++) {
        if(i == indexHor){
          break;
        }
        if(j == indexVert) {
          break;
        }
        if(winningBlock[i][j] !== -1) {
          sum += winningBlock[i][j]
        } else {
          sum += parseInt(oldArray[index][i][j], 10);
        }
    }
  }
}

function bingoCheck(bingo) {
 // check for all values equals to 1 in any horizontal row:
 for (var i = 0; i < bingo.length; i++)
 {
   winner = true;

   for(var j=0; j < bingo[i].length; j++)
   {
     if(bingo[i][j] != -1)
     {
       winner=false;
       break;
     }
   }

   if(winner) {
     return [true, i, -1];
   }
 }

 for (var i = 0; i < bingo.length; i++)
 {
   winner = true;
   for(var j=0; j < bingo[i].length; j++)
   {
     if(bingo[j][i] != -1)
     {
       winner=false;
       break;
     }
   }

   if(winner){
    [true, -1, i]
     return true;
   }
 }

    return false;
}