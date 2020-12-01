let arr1 = [1, 2, 3, 4, 5, 6, 15, 'true', true, 20];
let arr2 = [2, 4, 5, 6, 'true', false, 25, 30];

function checkArrSum(A, B) {

  let res1 = 0;
  let res2 = 0;

  function sum(arr, res) {
    for (let i = 0; i < arr.length; i++) {
      if(typeof arr[i] == 'number') {
        res += arr[i];
      }
    }
  }
  return (sum(A, res1) > sum(B, res2)) ? A : B;
}
console.log(checkArrSum(arr1, arr2));
