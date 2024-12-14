class HashTable {
  constructor(size = 50) {
    this.keyMap = new Array(50);
  }
  simpleHash(key, maxValue) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      let asciiCode = key[i].charCodeAt(0);
      total = total + asciiCode;
    }
    return total % maxValue;
  }

  set(key, value) {
    const hashCode = this.simpleHash(key, this.keyMap.length);
    if (!this.keyMap[hashCode]) {
      this.keyMap[hashCode] = [];
    }

    console.log("hashCode", hashCode);
    this.keyMap[hashCode].push([key, value]);
  }

  get(key) {
    const hashCode = this.simpleHash(key, this.keyMap.length);

    const result = this.keyMap[hashCode];
    for (let pair of result) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }
}

const hashTable = new HashTable();
hashTable.set("ashish", "saluja");
console.log("Value of ashish is", hashTable.get("ashish"));
console.log("Adding ashihs");
hashTable.set("ashihs", "kumar");
console.log("Value of ashish is", hashTable.get("ashish"));
console.log("Value of ashihs is", hashTable.get("ashihs"));
console.log("Value of ashhis is", hashTable.get("ashhis"));
hashTable.set("ashhis", "singh");
console.log("Value of ashhis is", hashTable.get("ashhis"));
