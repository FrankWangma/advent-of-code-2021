
// program to implement stack data structure
class Stack {
  constructor() {
      this.items = [];
  }
  
  // add element to the stack
  add(element) {
      return this.items.push(element);
  }
  
  // remove element from the stack
  remove() {
      if(this.items.length > 0) {
          return this.items.pop();
      }
  }
  
  // view the last element
  peek() {
      return this.items[this.items.length - 1];
  }
  
  // check if the stack is empty
  isEmpty(){
     return this.items.length == 0;
  }
 
  // the size of the stack
  size(){
      return this.items.length;
  }

  // empty the stack
  clear(){
      this.items = [];
  }
}

let input = global
  .loadInput()
  .lines().map(i => i.replace('\r', ''));

var bracketMap = new Map();
bracketMap.set('(', ')');
bracketMap.set('[', ']');
bracketMap.set('{', '}');
bracketMap.set('<', '>');

var bracketValues = new Map();
bracketValues.set(')', 1);
bracketValues.set(']', 2);
bracketValues.set('}', 3);
bracketValues.set('>', 4);
var complete = new Array(input.length).fill([]);

let index = 0;
line:
for(const line of input) {
  var stack = new Stack();
  for(var i = 0; i < line.length; i++) {
    var value = bracketMap.get(line[i]);
    if(value != undefined) {
      stack.add(line[i]);
    } else {
      var openBracket = stack.remove();
      if( bracketMap.get(openBracket) != line[i]) {
        stack.clear();
        continue line;
      }
    }
  }

  var tempArray = [];
  while(stack.size() > 0) {
    var openBracket = stack.remove();
    tempArray.push(bracketMap.get(openBracket));
  }
  complete[index] = tempArray;
  index++;
}

var result = [];
var counter = 0;
for(const line of complete) {
  var sum = 0;
  for(const val of line) {
    sum *= 5
    sum += bracketValues.get(val);
  }
  result[counter] = sum;
  counter++;
}
result = result.filter(Number);

const median = arr => {
  let middle = Math.floor(arr.length / 2);
    arr = [...arr].sort((a, b) => a - b);
  return arr[middle];
};

console.log(median(result));




