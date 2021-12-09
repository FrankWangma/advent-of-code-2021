

let input = global
.loadInput()
.lines().map(i => i.replace('\r', '').split(''));

xPos = 0;
yPos = 0;
input = input.map(line => line.map(height => {
  const object = {};
  object.Value = height;
  object.IsLow = true;
  object.Position = [yPos, xPos];
  xPos++;
  if(xPos == input[0].length) {
    xPos = 0;
    yPos++
  }
  return object;
}))

for(var i = 0; i < input.length; i++) {
  var checkTop = true;
  var checkBottom = true;
  for(var j = 0; j < input[i].length; j++) {
    
   var neighbours = findNeighbours(input[i][j]);
   for(const neighbour of neighbours) {
     if(input[i][j].Value >= neighbour.Value) {
       input[i][j].IsLow = false;
     }
   }

  }
}

const trueValues = input.flat().filter(obj => obj.IsLow == true);

// find basins
let result = 1
let basinSizes = []
for(const lowPoint of trueValues) {
  var visited = breadthFirstSearch(lowPoint);
  basinSizes.push(Object.keys(visited).length);
}

for(var i = 0; i < 3; i++) {
  var max = Math.max(...basinSizes)
  basinSizes.splice(basinSizes.indexOf(max), 1);
  result *= max;
}

console.log(result);

function breadthFirstSearch(start) {
  //A Queue to manage the nodes that have yet to be visited
  var queue = [];
  //Adding the node to start from
  queue.push(start);
  //A boolean array indicating whether we have already visited a node
  var visited = [];
  //(The start node is already visited)
  visited[start.Position] = true;
  
  while(queue.length > 0) {
    var node = queue.shift();
    var neighbours = findNeighbours(node);
    for(const neighbour of neighbours) {
      if(!visited[neighbour.Position] && neighbour.Value != 9 && neighbour.Value > node.Value) {
        queue.push(neighbour);
        visited[neighbour.Position] = true;
      }
    }
  }
  
  return visited;
}

function findNeighbours(node) {
  var neighbours = [];
  var checkTop = true;
  var checkBottom = true;
  var checkLeft = true;
  var checkRight  = true;

  var nodeY = node.Position[0];
  var nodeX = node.Position[1];

  if(nodeY == 0) {
    checkTop = false;
  } else if (nodeY == input.length - 1) {
    checkBottom = false;
  }
  if(nodeX == 0) {
    checkLeft = false;
  } else if(nodeX == input[nodeY].length - 1) {
    checkRight = false;
  }

  if (checkTop) {
    neighbours.push(input[nodeY - 1][nodeX])
  }

  if (checkBottom) {
    neighbours.push(input[nodeY + 1][nodeX])
  }
  if (checkLeft) {
    neighbours.push(input[nodeY][nodeX - 1])
  }
  if (checkRight) {
    neighbours.push(input[nodeY][nodeX + 1])
  }

  return neighbours;
}

