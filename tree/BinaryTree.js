class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (!current.left) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        console.log(this.root);
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  search(valueToSearch) {
    if (!this.root) {
      return false;
    }

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.value === valueToSearch) {
        return true;
      }
      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    return false;
  }

  levelOrder() {
    if (!this.root) {
      return;
    }

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  preOrder(node = this.root) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  inOrder(node = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.add(10);
binaryTree.add(20);
binaryTree.add(30);
binaryTree.add(40);
binaryTree.add(50);

console.log("Finding 20", binaryTree.search(20));
console.log("Finding 80", binaryTree.search(80));

console.log("Level order");
binaryTree.levelOrder();

console.log("Pre order");
binaryTree.preOrder();

console.log("In order");
binaryTree.inOrder();

console.log("Post order");
binaryTree.postOrder();
