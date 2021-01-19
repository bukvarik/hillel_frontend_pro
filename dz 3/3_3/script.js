//Вариант с дополнительным массивом

let arr = [ 1, 5, 6, 2, 4];
let newArr = [];

for ( let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}
console.log(arr);
console.log(newArr);

//Вариант с без дополнительного массива
let arr = [ 1, 5, 6, 2, 4];
let a;

for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
  a = arr[j];
  arr[j] = arr[i];
  arr[i] = a;
}
console.log(arr);

