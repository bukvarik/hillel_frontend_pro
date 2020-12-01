let arr1 = [1, 2, 3, 4, 5, 6, 15, 'true', true, 20];
let arr2 = [2, 4, 5, 6, 'true', false, 25, 30];

function checkArrSum(A, B) {

  let res1 = 0;
  let res2 = 0;

  for (let i = 0; i < A.length; i++) {
    if(typeof A[i] == 'number') {
      res1 += A[i];
    }
  }

  for (let i = 0; i < B.length; i++) {
    if(typeof B[i] == 'number') {
      res2 += B[i];
    }
  }

  return (res1 > res2) ? A : B;
}

console.log(checkArrSum(arr1, arr2));