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

  delete(value) {
    if (!this.root) {
      console.log("Tree is empty.");
      return;
    }

    let queue = [this.root];
    let nodeToDelete = null;
    let lastNode = null;
    let parentOfLastNode = null;

    // Perform BFS to find the node to delete and track the deepest node
    while (queue.length > 0) {
      lastNode = queue.shift();

      // Check if this is the node to delete
      if (lastNode.value === value) {
        nodeToDelete = lastNode;
      }

      // Enqueue children for BFS
      if (lastNode.left) {
        queue.push(lastNode.left);
        parentOfLastNode = lastNode; // Track parent of the last node
      }
      if (lastNode.right) {
        queue.push(lastNode.right);
        parentOfLastNode = lastNode; // Track parent of the last node
      }
    }

    // If the node to delete was not found, return
    if (!nodeToDelete) {
      console.log(`Node with value ${value} not found.`);
      return;
    }

    // Replace the value of the node to delete with the deepest node's value
    nodeToDelete.value = lastNode.value;

    // Delete the deepest node
    if (parentOfLastNode) {
      if (parentOfLastNode.left === lastNode) {
        parentOfLastNode.left = null;
      } else if (parentOfLastNode.right === lastNode) {
        parentOfLastNode.right = null;
      }
    } else {
      // If there's no parent (only root exists), set the root to null
      this.root = null;
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
