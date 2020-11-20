
let n = 5;
let a = new Array(n);
let b = new Array(n);

function randomArrayNumber(j) {
  for (let i = 0; i < j.length; i++) {
    j[i] = Math.floor(Math.random() * 10);
  }
}

randomArrayNumber(a);
randomArrayNumber(b);

let arr = [];
for (let k = 0; k < a.length; k++) {
  for (let l = 0; l < b.length; l++) {
    if(a[k] == b[l]){
      arr.push(a[k]);
    }
  }
}
console.log(`Массив a ${a}`);
console.log(`Массив b ${b}`);
console.log(`Повторяющиеся элементы массива A и B ${arr}`);
