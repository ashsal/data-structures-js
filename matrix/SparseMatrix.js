const matrix = [
  [0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 7, 0, 0, 0],
  [0, 0, 0, 0, 9],
];

console.log(matrix);

const sparseMatrix = [
  { row: 0, column: 2, value: 3 },
  { row: 2, column: 1, value: 7 },
  { row: 3, column: 4, value: 9 },
];

console.log(sparseMatrix);

for (let i = 0; i < sparseMatrix.length; i++) {
  console.log(
    "Row",
    sparseMatrix[i].row,
    " Column:",
    sparseMatrix[i].column,
    " Value:",
    sparseMatrix[i].value
  );
}

const row2Col1Value = sparseMatrix.find(
  ({ row, column }) => row == 2 && column == 1
);

if (row2Col1Value) {
  console.log("row2Col1Value value", row2Col1Value.value);
}

const sparseMatrix2 = {
  "0,2": 3,
  "2,1": 7,
  "3,4": 9,
};

console.log(sparseMatrix2);
console.log("0,2", sparseMatrix2["0,2"]);
console.log("3,4", sparseMatrix2["3,4"]);

function toSparse(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] != 0) {
        result.push({ row: i, column: j, value: matrix[i][j] });
      }
    }
  }

  return result;
}

console.log(toSparse(matrix));
