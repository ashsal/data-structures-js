class SuffixTreeNode {
  constructor() {
    this.children = {};
    this.position = null;
  }
}

class SuffixTree {
  constructor(text) {
    this.root = new SuffixTreeNode();
    this.text = text;
    this.buildSuffixTree();
  }

  buildSuffixTree() {
    console.log(this.root);
    console.log(this.text);
    for (let i = 0; i < this.text.length; i++) {
      let suffix = this.text.slice(i);
      this.insertSuffix(suffix, i);
    }
  }

  insertSuffix(suffix, position) {
    let node = this.root;
    for (let char of suffix) {
      if (!node.children[char]) {
        node.children[char] = new SuffixTreeNode();
      }
      node = node.children[char];
    }

    node.position = position;
  }

  printTree(node = this.root, prefix = "") {
    for (let char in node.children) {
      let position = "";
      if (node.children[char].position != null) {
        position = ` -> ${node.children[char].position}`;
      }
      console.log(`${prefix}${char} ${position}`);
      this.printTree(node.children[char], prefix + char);
    }
  }

  search(pattern) {
    let node = this.root;
    for (let char of pattern) {
      console.log(char);
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }

    return this.collectPositions(node);
  }

  collectPositions(node) {
    let positions = [];
    if (node.position != null) {
      positions.push(node.position);
    }

    for (let child in node.children) {
      let positionsFromChildren = this.collectPositions(node.children[child]);
      positions.push(...positionsFromChildren);
    }

    return positions;
  }
}

const suffixTree = new SuffixTree("banana$");
suffixTree.printTree();

console.log("ash", suffixTree.search("ash")); //-> []
console.log("ana", suffixTree.search("ana")); //-> [1, 3]
