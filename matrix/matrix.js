const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(myArray);

console.log("fetching zeroth row", myArray[0]);
console.log("fetching first row", myArray[1]);
console.log("fetching index 1 row index 1 element", myArray[1][1]);
console.log("fetching index 2 row index 2 element", myArray[2][2]);

myArray[2][1] = 100;
console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}

function createMatrix(rows, cols, initialValue = 0) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    console.log(i);
    const row = new Array(cols).fill(initialValue);
    matrix.push(row);
  }

  return matrix;
}

const result = createMatrix(4, 4, 1);
console.log(result);
