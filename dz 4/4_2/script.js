let m = 10;
let n = m;

A = new Array(n);

for (let i = 0; i < A.length; i++) {
  A[i] = new Array(m);
  for (let j = 0; j < A[i].length; j++) {
    A[i][j] = Math.floor(Math.random() * 40 - 20);
  }
  document.write(A[i] + '<br />');
}

for (let k = 0; k < A.length; k++) {
  let s = 0;
  for (let l = 0; l < A.length; l++) {
    s += A[l][k];

    if ( s <= 0) {
      document.write('*');
    }
  }
  
  console.log(s);
}
