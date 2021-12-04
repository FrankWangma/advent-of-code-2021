const input = global
  .loadInput()
  .lines()

let epsilon = [];
let gamma = new Array(input[0].length).fill(0);
input.forEach(l => {
  for(let i = 0; i < l.length; i++) {
    if(l[i] == 1) {
      gamma[i]++;
    }
  }
})

for(let j = 0; j < gamma.length; j++) {
  if(gamma[j] > (input.length / 2)) {
    gamma[j] = 1;
    epsilon[j] = 0;
  } else {
    gamma[j] = 0;
    epsilon[j] = 1;
  }
}

const gammaDec = parseInt(parseInt(gamma.toString().split(',').join('')), 2);
const epsilonDec = parseInt(parseInt(epsilon.toString().split(',').join('')), 2);

console.log(gammaDec * epsilonDec);