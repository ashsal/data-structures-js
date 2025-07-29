const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[0]);
console.log(matrix[1]);
console.log(matrix[2]);

console.log(matrix[0][1]); // i,j
console.log(matrix[2][1]); // i,j

matrix[1][2] = 12;

console.log(matrix[1]);

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(i, j, " -> ", matrix[i][j]);
  }
}

class Graph {
  constructor(size) {
    this.size = size;
    this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
    console.log(this.matrix);
  }

  addEdge(i, j) {
    if (i < this.size && j < this.size) {
      this.matrix[i][j] = 1;
      this.matrix[j][i] = 1;
    }

    console.log(this.matrix);
  }

  removeEdge(i, j) {
    if (i < this.size && j < this.size) {
      this.matrix[i][j] = 0;
      this.matrix[j][i] = 0;
    }
  }

  printGraph() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        //console.log(i, j, " -> ", this.matrix[i][j]);
      }
    }

    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i]);
    }
  }
}

const myGraph = new Graph(6);
myGraph.addEdge(0, 1);
myGraph.addEdge(0, 2);

myGraph.printGraph();

myGraph.removeEdge(0, 1);

console.log("removeEdge");
myGraph.printGraph();
