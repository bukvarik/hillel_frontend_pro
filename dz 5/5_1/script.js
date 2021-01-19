let obj1 = {
  x: 1,
  y: 2,
  z: 3,
  l: [1, 2, 3, 4, 5], //15
  text: 'Text',
  text2: 'Text2',
  t: [1, 2, 3, 4, 5, 6] // 21
}

let obj2 = {
  m: 12,
  n: 15,
  o: 20,
  p: 23,
  bool1: true,
  bool2: false,
  j: [2, 3, 4, true, 'true'] // 9
}
let allArrays = [];

function addInArray(obj) {
  for (key in obj) {
    if (!Array.isArray(obj[key])) {
      continue;
    }
    allArrays = allArrays.concat(obj[key]);
  }
}

addInArray(obj1);
addInArray(obj2);
console.log(allArrays);

function sumInArray(arr) {
  let sum = 0
  for (key in arr) {
    if ( typeof arr[key] == 'number') {
      sum += arr[key];
    }
  }
  return sum;
}

console.log(sumInArray(allArrays));