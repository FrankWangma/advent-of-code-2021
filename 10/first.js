
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
bracketValues.set(')', 3);
bracketValues.set(']', 57);
bracketValues.set('}', 1197);
bracketValues.set('>', 25137);
var incorrect = [];

for(const line of input) {
  var stack = new Stack();
  line:
  for(var i = 0; i < line.length; i++) {
    var value = bracketMap.get(line[i]);
    if(value != undefined) {
      stack.add(line[i]);
    } else {
      var openBracket = stack.remove();
      if( bracketMap.get(openBracket) != line[i]) {
        incorrect.push(line[i])
        break line;
      }
    }
  }
}

var result = 0;
for(const val of incorrect) {
  result += bracketValues.get(val);
}
console.log(result);
