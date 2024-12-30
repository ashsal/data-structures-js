class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  printRoot() {
    console.log(this.root);
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return;
      } else if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
        } else {
          current = current.right;
        }
      }
    }
  }

  search(valueToSearch) {
    if (!this.root) {
      return false;
    }

    let current = this.root;
    while (current) {
      if (current.value === valueToSearch) {
        return true;
      } else if (valueToSearch < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  levelOrder() {
    const result = [];
    if (!this.root) {
      return result;
    }

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return result;
  }

  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }

    return result;
  }

  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }

    return result;
  }

  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(15);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.printRoot();

console.log("Searching 3, result is ", binarySearchTree.search(3));
console.log("Searching 8, result is ", binarySearchTree.search(8));

console.log("Level order ", binarySearchTree.levelOrder());

console.log("Pre order", binarySearchTree.preOrder());
console.log("In order", binarySearchTree.inOrder());
console.log("Post order", binarySearchTree.postOrder());
