function fillArray(arr, n) {
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10))  ;
  }
  return arr;
}
let A = [];
fillArray(A, 10);