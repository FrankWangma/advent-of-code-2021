const input = global
  .loadInput()
  .lines()
  let co2 = input;
  let oxygen = input;
  
  let count = 0;
  while(count != input[0].length) {
    oxygen = reduceArray(oxygen, count, true);
    count++;
  }


  count = 0;
  while(count != input[0].length) {
    co2 = reduceArray(co2, count, false);
    count++;
  }

  console.log(parseInt(oxygen,2) *parseInt(co2,2));



function reduceArray(arr, index, isOxygen) {
  let count = 0;
  if(arr.length == 1) {
    return arr;
  }
  
  arr.map(i => {
    if(i[index] == 1) {
      count++;
    }
    return i;
  })
  
  let replace
  
  if(count >= arr.length / 2) {
    replace = '1'
  } else {
    replace = '0'
  }
  
  if(isOxygen) {
    let oxygen = arr.reduce(function (r, v) {
      if (v[index] == replace) {
          r.push(v);
      }
      return r;
    }, []);
    return oxygen
  } else {
    let co2 = arr.reduce(function (r, v) {
      if (v[index] != replace) {
          r.push(v);
      }
      return r;
    }, []);
    
    return co2;
  }
}