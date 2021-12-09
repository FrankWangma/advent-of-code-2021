

let input = global
  .loadInput()
  .lines().map(i => i.replace('\r', '').split(''));

  input = input.map(line => line.map(height => {
    const object = {};
    object.Value = height;
    object.IsLow = true;
    return object;
  }))

  for(var i = 0; i < input.length; i++) {
    var checkTop = true;
    var checkBottom = true;
    for(var j = 0; j < input[i].length; j++) {
      
      var checkLeft = true;
      var checkRight  = true;
      if(i == 0) {
        checkTop = false;
      } else if (i == input.length - 1) {
        checkBottom = false;
      }
      if(j == 0) {
        checkLeft = false;
      } else if(j == input[i].length - 1) {
        checkRight = false;
      }
      
      if (checkTop) {
        if(input[i][j].Value >= input[i - 1][j].Value) {
          input[i][j].IsLow = false;
        }
      }

      if (checkBottom) {
        if(input[i][j].Value >= input[i + 1][j].Value) {
          input[i][j].IsLow = false;
        }
      }
      if (checkLeft) {
        if(input[i][j].Value >= input[i][j - 1].Value) {
          input[i][j].IsLow = false;
        }
      }
      if (checkRight) {
        if(input[i][j].Value >= input[i][j + 1].Value) {
          input[i][j].IsLow = false;
        }
      }
      
    }
  }

  const trueValues = input.flat().filter(obj => obj.IsLow == true);
  let sum = 0;
  for(const obj of trueValues) {
    sum += (parseInt(obj.Value,10)) + 1;
  }

  console.log(sum);
