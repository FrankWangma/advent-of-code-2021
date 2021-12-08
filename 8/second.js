
let input = global
.loadInput()
.lines().map(i => i.replace('\r', '').split('|').map(j => j.trim().split(' ')));

var count = 0;
for(const line of input) {
  let possiblePositions = new Array(10).fill([]); // 0 corresponds to a, 1 to b and so on 
  
  for(const number of line[0]) {
    checkNumber(possiblePositions, number);
  }
  findPositions(possiblePositions, line)
  count += decipher(line[1], possiblePositions);
}

console.log(count);

function checkNumber(possiblePositions, number) {
  var length = number.length;
  if(length == 2) {
    possiblePositions[1] = pushIntoArray(possiblePositions[1], number);
  }  else if (length == 3) {
   possiblePositions[7] = pushIntoArray(possiblePositions[7], number);
  } else if (length == 4) {
   possiblePositions[4] = pushIntoArray(possiblePositions[4], number);
  }  else if (length == 5) {
   possiblePositions[2] = pushIntoArray(possiblePositions[2], number);
   possiblePositions[3] = pushIntoArray(possiblePositions[3], number);
   possiblePositions[5] = pushIntoArray(possiblePositions[5], number);
  } else if (length == 6) {
   possiblePositions[0] = pushIntoArray(possiblePositions[0], number);
   possiblePositions[6] = pushIntoArray(possiblePositions[6], number);
   possiblePositions[9] = pushIntoArray(possiblePositions[9], number);
  }else if (length == 7) {
   possiblePositions[8] = pushIntoArray(possiblePositions[8], number);
  }
}

function findPositions(possiblePositions, line) {
  // get 2
  line[0].filter(x => {
    if(x.length == 5) {
      var temp = pushIntoArray(possiblePositions[4], possiblePositions[7]);
      diff = temp.filter(y => !x.includes(y));
      if(diff.length == 2) {
        possiblePositions[2] = x.split('');
      }
    }
  })

  // get 3 and 5
  line[0].filter(x => {
    if(x.length == 5) {
      var diff = possiblePositions[2].filter(y => !x.includes(y));
      if(diff.length == 1) {
        possiblePositions[3] = x.split('');
      } else if (diff.length == 2) {
        possiblePositions[5] = x.split('');
      }
    }
  })
  
  //get 0, 6 and 9

  line[0].filter(x => {
    if(x.length == 6) {
      var diff = x.split('').filter(y => !possiblePositions[5].includes(y));
      if(diff.length == 2) {
        possiblePositions[0] = x.split('');
      } else if (possiblePositions[3].includes(diff[0])) {
        possiblePositions[9] = x.split('');
      } else if (!possiblePositions[3].includes(diff[0])) {
        possiblePositions[6] = x.split('');
      } 
    }
  })
}

function decipher(output, possiblePositions) {
  var result = "";
  for(const num of output) {
    for(const digit of possiblePositions) {
      if(digit.length == num.length) {
        var diff = num.split('').filter(y => !digit.includes(y));
        if(diff.length == 0) {
          result += possiblePositions.indexOf(digit);
        }
      }
      
    }
  }
  return parseInt(result, 10);
}

function pushIntoArray(origArray, inputArray ) {
  if(typeof inputArray == "string") {
    inputArray = inputArray.split('');
  }
  origArray = origArray.concat(inputArray);
  origArray = [...new Set(origArray)];
  return origArray;
}

/*
 0: 
aaaa 
b    c
b    c 
dddd 
e    f
e    f
gggg 
*/