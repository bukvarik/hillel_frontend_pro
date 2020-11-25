let m = 10;
let n = m;
A = new Array(n);

for (let a = 0; a < A.length; a++) {
  A[a] = new Array(m);
  for (let b = 0; b < A[a].length; b++) {
    A[a][b] = Math.floor(Math.random() * 40 - 20);
  }
}
console.log(A);

function rotate(matrix) {
  const n = matrix.length;
  const x = Math.floor(n/ 2);
  const y = n - 1;
  for (let i = 0; i < x; i++) {
     for (let j = i; j < y - i; j++) {
        temp = matrix[i][j];
        matrix[i][j] = matrix[y - j][i];
        matrix[y - j][i] = matrix[y - i][y - j];
        matrix[y - i][y - j] = matrix[j][y - i]
        matrix[j][y - i] = temp;
     }
  }
}

console.log('rotated');
rotate(A);
console.log(A);

function sum(arr) {
  let s = 0;
  for (let c = 0; c < arr.length; c++) {
    for (let d = 0; d < arr[c].length; d++) {
      s += arr[c][d];
    } 
    console.log(s);
    if (s < 0) {
      for (let g = 0; g < arr.length; g++) {
        arr[c].shift();
      }
    }
  }
  console.log(A);
}
console.log('deleted s < 0');
sum(A);
rotate(A);
rotate(A);
rotate(A);
console.log(A);