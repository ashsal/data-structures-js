class UnionFind {
  constructor(size) {
    this.parent = new Array(size).fill(0);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
    this.rank = new Array(size).fill(0);
    console.log("parent", this.parent);
    console.log("rank", this.rank);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX == rootY) {
      return;
    }

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootY] < this.rank[rootX]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
  }

  isConnected(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX == rootY) {
      return true;
    } else {
      return false;
    }
  }
}

const myUnionFind = new UnionFind(6);
console.log("myUnionFind.union(0, 1)");
myUnionFind.union(0, 1);
console.log(myUnionFind.parent);
console.log(myUnionFind.rank);

console.log("myUnionFind.union(4, 5)");
myUnionFind.union(4, 5);
console.log("parent", myUnionFind.parent);
console.log("rank", myUnionFind.rank);

console.log("myUnionFind.union(3, 5)");
myUnionFind.union(3, 5);
console.log("parent", myUnionFind.parent);
console.log("rank", myUnionFind.rank);

console.log("myUnionFind.union(0, 3)");
myUnionFind.union(0, 3);
console.log("parent", myUnionFind.parent);
console.log("rank", myUnionFind.rank);

console.log("myUnionFind.find(3)");
console.log(myUnionFind.find(3));

console.log("parent", myUnionFind.parent);
console.log("rank", myUnionFind.rank);

console.log("isConnected(0, 1)", myUnionFind.isConnected(0, 1));
console.log("isConnected(0, 2)", myUnionFind.isConnected(0, 2));
