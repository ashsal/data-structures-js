class NaryTreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class NaryTree {
  constructor() {
    this.root = null;
  }

  insert(parentValue, value) {
    const newNode = new NaryTreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    const parent = this.findNode(this.root, parentValue);
    if (!parent) {
      console.error(`Could not find parent with value ${parentValue}`);
      return;
    }

    parent.children.push(newNode);
    console.log(this.root);
  }

  findNode(node, value) {
    if (!node) {
      return null;
    }

    if (node.value === value) {
      return node;
    }

    for (let child of node.children) {
      const result = this.findNode(child, value);
      if (result) {
        return result;
      }
    }

    return null;
  }

  breadth() {
    if (!this.root) {
      return;
    }

    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.value);
      queue.push(...current.children);
    }
  }

  depth(node = this.root) {
    if (!node) {
      return;
    }

    console.log(node.value);

    for (let child of node.children) {
      console.log(child);
      this.depth(child);
    }
  }
}

const myNaryTree = new NaryTree();
myNaryTree.insert(null, "A");
myNaryTree.insert("A", "B");
myNaryTree.insert("A", "C");
myNaryTree.insert("A", "D");
myNaryTree.insert("B", "E");
myNaryTree.insert("B", "F");
myNaryTree.insert("D", "G");

console.log("Breadth");
myNaryTree.breadth();

console.log("Depth");
myNaryTree.depth();
