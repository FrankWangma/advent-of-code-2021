const input = global
  .loadInput()
  .blocks()

let nums = input[0][0].toString().split(',')
input.splice(0,1);

numArray = input.map(block => 
  block = block.map(line => 
    line.split(' ').map(i => {
      return i.int();
    }).filter(x => 
      !Number.isNaN(x)
    )
  )
)

let winningBlock = [];
let winningNum = -1;
let sum = 0;

firstFor:
for(const num of nums) {
  for(const block of numArray) {
    for ( const line of block) {
      if(line.includes(parseInt(num, 10))) {
        line[line.indexOf(parseInt(num, 10))] = -1;
      };
    }
    if(bingoCheck(block)) {
      winningBlock = block;
      winningNum = num;
      break firstFor
    }
  };
};

for(let i = 0; i < winningBlock.length; i++) {
  for(var j=0; j < winningBlock[i].length; j++) {
      if(winningBlock[i][j] !== -1) {
        sum += winningBlock[i][j]
      }
  }
}

console.log(winningNum * sum)

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
     return true;
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