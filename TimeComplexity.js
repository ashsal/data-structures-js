const myArray = [10, 20, 30, 40, 50, 60, 70, 77, 80, 90];

// O(1)
function getIndexInArray(index) {
  // add validation that index should not be greater than the size of the array
  console.log("Inside getIndexInArray");
  const result = myArray[index];
  return result;
}

console.log("4", getIndexInArray(6));

// O log n
function divideByTwo(input) {
  while (input > 1) {
    input = Math.floor(input / 2);
    console.log("divideByTwo", input);
  }
}

// 2 power of 6 = 64
// 2 power of 8 = 128

divideByTwo(100);

// Square root n

function isPrime(input) {
  if (input <= 1) {
    return false;
  }

  let count = 1;

  for (let i = 2; i * i <= input; i++) {
    console.log("isPrime", count++, input);
    if (input % i === 0) {
      return false;
    }
  }

  return true;
}

isPrime(97); // square root of 97 = 9.7

isPrime(10);
isPrime(100);

// O(n)
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("printArray", array[i]);
  }
}

printArray(myArray);
function specialNLogNFunction(input) {
  let counter = 0;
  for (let i = 0; i < input; i++) {
    // O(n)
    let j = 1;
    while (j < input) {
      console.log("specialNLogNFunction", i, j, ++counter);
      j = j * 2;
    }
  }
}
specialNLogNFunction(10);

// n square
function printPairs(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log("printPairs", i, j, ++counter);
    }
  }
}
printPairs([1, 2, 3, 4, 5, 6]);

function printTriplets(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        console.log("printPairs", i, j, k, ++counter);
      }
    }
  }
}
printTriplets([1, 2, 3, 4]);
