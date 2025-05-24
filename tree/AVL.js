class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  height(node) {
    if (!node) {
      return 0;
    }
    return node.height;
  }

  balanceFactor(node) {
    const balanceFactor = this.height(node.left) - this.height(node.right);
    return balanceFactor;
  }

  add(value) {
    this.root = this.insert(this.root, value);
    console.log(this.root);
  }

  insert(node, value) {
    if (!node) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insert(node.left, value);
    } else if (value > node.value) {
      node.right = this.insert(node.right, value);
    } else {
      return node;
    }

    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    const balance = this.balanceFactor(node);

    if (balance < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    if (balance > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    if (balance > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    if (balance < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  rotateLeft(node) {
    const newRoot = node.right;
    const temp = newRoot.left;
    newRoot.left = node;

    node.right = temp;

    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    newRoot.height =
      1 + Math.max(this.height(newRoot.left), this.height(newRoot.right));

    return newRoot;
  }

  rotateRight(node) {
    const newRoot = node.left;
    const temp = newRoot.right;
    newRoot.right = node;

    node.left = temp;
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    newRoot.height =
      1 + Math.max(this.height(newRoot.left), this.height(newRoot.right));
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

  delete(node, key) {
    if (!node) return node;

    if (key < node.key) {
      node.left = this.delete(node.left, key);
    } else if (key > node.key) {
      node.right = this.delete(node.right, key);
    } else {
      // Node to be deleted found
      if (!node.left || !node.right) {
        // Node with one child or no child
        const temp = node.left ? node.left : node.right;
        node = temp; // Replace with the child (or null if no child)
      } else {
        // Node with two children
        const temp = this.minValueNode(node.right); // In-order successor
        node.key = temp.key; // Replace value with successor
        node.right = this.delete(node.right, temp.key); // Delete successor
      }
    }

    if (!node) return node;

    node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;

    const balance = this.getBalanceFactor(node);

    if (balance > 1 && this.getBalanceFactor(node.left) >= 0) {
      return this.rotateRight(node);
    }

    if (balance > 1 && this.getBalanceFactor(node.left) < 0) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    if (balance < -1 && this.getBalanceFactor(node.right) <= 0) {
      return this.rotateLeft(node);
    }

    if (balance < -1 && this.getBalanceFactor(node.right) > 0) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }
}
const avlTree = new AVLTree();
avlTree.add(10);
avlTree.add(20);
avlTree.add(30);
avlTree.add(40);
avlTree.add(50);

console.log("Searching 50", avlTree.search(50));
console.log("Searching 60", avlTree.search(60));
