function simpleHash(key, maxValue) {
  //console.log(key, maxValue);
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    //console.log(key[i], key[i].charCodeAt(0));
    let asciiCode = key[i].charCodeAt(0);
    total = total + asciiCode;
  }

  //console.log("total is", total);

  return total % maxValue;
}

console.log("abcdef", simpleHash("abcdef", 50));
console.log("abcdef", simpleHash("abcdef", 50));
console.log("ashish", simpleHash("ashish", 50));
console.log("ashish", simpleHash("ashish", 50));
console.log("ashish", simpleHash("ashish", 50));
console.log("ashihs", simpleHash("ashihs", 50));
