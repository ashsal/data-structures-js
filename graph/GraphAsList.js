const myMap = new Map();
myMap.set("name", "Ashish");
myMap.set(1, "One");
myMap.set(true, "true as string");
myMap.set("myArray", [1, 2, 3]);

console.log(myMap);
console.log("name", myMap.get("name"));
console.log("myArray", myMap.get("myArray"));

console.log("has name", myMap.has("name"));
console.log("has name1", myMap.has("name1"));
console.log("has true", myMap.has(true));
myMap.delete(true);
console.log("has true", myMap.has(true));

for (let [key, value] of myMap) {
  console.log(`${key} => ${value}`);
}

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

  removeEdge(vertex1, vertex2) {
    const vertex1Edges = this.adjacencyList.get(vertex1);
    const filteredEdges = vertex1Edges.filter((v) => v != vertex2);

    this.adjacencyList.set(vertex1, filteredEdges);

    const vertex2Edges = this.adjacencyList.get(vertex2);
    const filteredEdgesOf2 = vertex2Edges.filter((v) => v != vertex1);

    this.adjacencyList.set(vertex2, filteredEdgesOf2);
  }

  removeVertex(vertex) {
    if (this.adjacencyList.has(vertex)) {
      const edges = this.adjacencyList.get(vertex);
      for (let edge of edges) {
        this.removeEdge(vertex, edge);
      }

      this.adjacencyList.delete(vertex);
    }
  }
}

let myGraph = new Graph();
myGraph.addVertex("ashish");
myGraph.addVertex("ram");
myGraph.addEdge("ram", "ashish");
myGraph.addEdge("ashish", "suresh");
myGraph.addEdge("ghanshyam", "manoj");

myGraph.print();

console.log("removing ram and ashish edge");
myGraph.removeEdge("ram", "ashish");

myGraph.print();
console.log("removing ashish vertex");
myGraph.removeVertex("ashish");
myGraph.print();
