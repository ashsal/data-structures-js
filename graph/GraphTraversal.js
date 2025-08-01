class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1)) {
      this.addVertex(vertex1);
    }

    if (!this.adjacencyList.has(vertex2)) {
      this.addVertex(vertex2);
    }
    const vertex1Edges = this.adjacencyList.get(vertex1);
    vertex1Edges.push(vertex2);

    this.adjacencyList.get(vertex2).push(vertex1);
  }

  print() {
    for (let [key, value] of this.adjacencyList) {
      console.log(`${key} => ${value}`);
    }
  }

  bfs(startNode) {
    if (!this.adjacencyList.has(startNode)) {
      return [];
    }

    const queue = [startNode];
    const visited = new Set();
    const result = [];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        result.push(currentNode);
        const allNeighbours = this.adjacencyList.get(currentNode);
        for (let neighbour of allNeighbours) {
          if (!visited.has(neighbour)) {
            queue.push(neighbour);
          }
        }
      }
    }

    return result;
  }

  dfs(node, visited = new Set(), result = []) {
    if (!this.adjacencyList.has(node)) {
      return [];
    }
    visited.add(node);
    result.push(node);
    const allNeighbours = this.adjacencyList.get(node);
    for (let neighbour of allNeighbours) {
      if (!visited.has(neighbour)) {
        this.dfs(neighbour, visited, result);
      }
    }

    return result;
  }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addVertex("E");
myGraph.addVertex("F");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "D");
myGraph.addEdge("D", "F");
myGraph.addEdge("C", "E");
myGraph.addEdge("F", "E");

myGraph.print();

console.log("BFS", myGraph.bfs("A"));
console.log("DFS", myGraph.dfs("A"));
