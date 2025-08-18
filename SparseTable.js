class SparseTable {
  constructor(arr) {
    this.n = arr.length;
    const k = Math.floor(Math.log2(this.n) + 1); // log base 2 of 6 -> 2.5 + = 3.5  = floor 3
    this.st = Array.from({ length: this.n }, () => Array(k).fill(0));

    this.build(arr);
  }

  build(arr) {
    for (let i = 0; i < this.n; i++) {
      this.st[i][0] = arr[i];
    }

    for (let j = 1; 2 ** j <= this.n; j++) {
      for (let i = 0; i + 2 ** j <= this.n; i++) {
        const left = this.st[i][j - 1];
        const right = this.st[i + 2 ** (j - 1)][j - 1];
        this.st[i][j] = Math.min(left, right);
      }
    }

    console.log(this.st);
  }

  query(L, R) {
    const len = R - L + 1;
    const j = Math.floor(Math.log2(len));
    const result = Math.min(this.st[L][j], this.st[R - 2 ** j + 1][j]);
    return result;
  }
}

const mySparseTable = new SparseTable([15, 22, 13, 27, 19, 31]);

console.log(2 ** 2);
console.log(2 ** 3);
console.log("0, 3", mySparseTable.query(0, 3));
console.log("2, 5", mySparseTable.query(2, 5));
console.log("1, 3", mySparseTable.query(1, 3));
console.log("3, 5", mySparseTable.query(3, 5));
