const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);
console.log(mySet);

console.log("mySet has 2", mySet.has(2));
console.log("mySet has 4", mySet.has(4));
console.log("deleting 2");
mySet.delete(2);
console.log(mySet);
mySet.add(4);
mySet.add(5);
mySet.add(6);
mySet.forEach((value) => console.log(value));
console.log("for of loop");
for (const value of mySet) {
  console.log(value);
}
console.log("Clearing mySet");
mySet.clear();
console.log(mySet);

const myArray = [1, 2, 2, 3, 4, 4, 5];
//const uniqueNumbers = [...new Set(myArray)];
// console.log("uniqueNumbers", uniqueNumbers);
const myArraySet = new Set(myArray);
const myUniqueArray = [...myArraySet];
console.log("myUniqueArray", myUniqueArray);

const setA = new Set([1, 2, 3, 8]);
const setB = new Set([3, 4, 5, 8]);

const unionSet = new Set([...setA, ...setB]);
console.log("unionSet", unionSet);

const setAAsArray = [...setA];
const intersectionArray = setAAsArray.filter((x) => setB.has(x));
console.log(intersectionArray);
const intersectionSet = new Set(intersectionArray);
console.log(intersectionSet);

const setAAsArrayD = [...setA];
const differenceArray = setAAsArray.filter((x) => !setB.has(x));
console.log(differenceArray);
const differenceSet = new Set(differenceArray);
console.log(differenceSet);

const differenceShort = new Set([...setA].filter((x) => !setB.has(x)));
console.log("differenceShort", differenceShort);
