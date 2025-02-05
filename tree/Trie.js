class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }

    node.isEndOfWord = true;

    //console.log(this.root);
    //console.log(node);
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }

      node = node.children[char];
    }

    return true;
  }

  findWordsWithPrefix(prefix) {
    // hel
    // shyam

    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return [];
      }

      node = node.children[char];
    }

    let result = [];
    this.collectWords(node, prefix, result);
    return result;
  }

  collectWords(node, currentWord, result) {
    if (node.isEndOfWord) {
      result.push(currentWord);
    }

    console.log(currentWord);
    for (let char in node.children) {
      this.collectWords(node.children[char], currentWord + char, result);
    }
  }
}

const myTrie = new Trie();
myTrie.insert("hello");

console.log("find hell", myTrie.search("hell"));

myTrie.insert("hell");

console.log("find hell", myTrie.search("hell"));

console.log("prefix starts with hel", myTrie.startsWith("hel"));
console.log("prefix starts with held", myTrie.startsWith("held"));

myTrie.insert("helding");

console.log("prefix starts with held", myTrie.startsWith("held"));

myTrie.insert("help");
myTrie.insert("hell");
myTrie.insert("helmet");

console.log("findWordsWithPrefix hel", myTrie.findWordsWithPrefix("hel"));
console.log("findWordsWithPrefix hal", myTrie.findWordsWithPrefix("hal"));
