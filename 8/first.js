

let input = global
  .loadInput()
  .lines().map(i => i.replace('\r', '').split('|').map(j => j.trim().split(' ')));

  var count = 0;
  for(const line of input) {
    for(const number of line[1]) {
    var length = number.length;
    if(length == 2) {
      count++;
    } else if (length == 3) {
      count++
    } else if (length == 4) {
      count++
    } else if (length == 7) {
      count++
    }
    }
  }

  console.log(count);