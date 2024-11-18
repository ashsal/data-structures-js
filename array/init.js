let myName = "Ashish";
console.log(myName);
let myNamesArray = ["Ashish", "Ram", "Shyam"];
console.log(myNamesArray);

let mathScore = 90;
console.log(mathScore);

let matchScores = [90, 30, 95];
console.log(matchScores);

let firstStudent = { name: "Ashish", city: "Copenhagen", country: "Denmark" };
console.log(firstStudent);

let students = [
  { name: "Ashish", city: "Copenhagen", country: "Denmark" },
  { name: "Ram", city: "Bombay", country: "India" },
];

console.log(students);

let arrayConstructor1 = new Array();
arrayConstructor1[0] = 2;
arrayConstructor1[1] = 3;
console.log(arrayConstructor1);

let arrayConstructor2 = new Array("Ram", "Shyam");
console.log(arrayConstructor2);

let filledArray = new Array(5).fill(0);
console.log(filledArray);

let ofArray = Array.of("of", "Ram", "Shyam");
console.log(ofArray);

let fromArray = Array.from("Hello");
console.log(fromArray);

let sparseArray = [4, , , 6];
console.log(sparseArray);
sparseArray[1] = 18;
console.log(sparseArray);

let ofArrayPlus = ["plus", ...ofArray];
console.log(ofArrayPlus);

let dynamicArray = [12, "Ashish", { name: "ashish" }];
console.log(dynamicArray);

console.log(dynamicArray[0]);
console.log(dynamicArray[2]);

let fruits = ["mango", "banana", "apple"];
let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];
console.log(fruit1, fruit2, fruit3);

let [fruit11, fruit22, fruit33] = fruits;
console.log(fruit11, fruit22, fruit33);

console.log("length", fruits.length);
for (let i = 0; i < fruits.length; i++) {
  console.log("for", fruits[i]);
}

for (let fruit of fruits) {
  console.log("for of", fruit);
}

fruits.forEach((fruit) => console.log("forEach", fruit));

fruits.push("grapes");

console.log(fruits);

const fruitLastElement = fruits.pop();
console.log("Last element", fruitLastElement);
console.log("fruits after pop", fruits);

const firstElement = fruits.shift();
console.log("firstElement", firstElement);
console.log("fruits after shift", fruits);

fruits.unshift("papaya");
console.log("fruits after unshift", fruits);

let nums = [2, 3, 4];
let numsSquared = nums.map((num) => num * num);
console.log(numsSquared);

let twoDimensionArray = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(twoDimensionArray);
console.log(twoDimensionArray[0][1]);

let threeDimensionArray = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
console.log(threeDimensionArray);


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    for(i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            return i;
        }
        else if(nums[i] > target) {
            return i;
        }
    }

    return i;
};