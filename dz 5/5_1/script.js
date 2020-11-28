let obj1 = {
  x: 1,
  y: 2,
  z: 3,
  l: [1, 2, 3], //6
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
allArrays = [];

function addInArray(obj, array) {
  for (key in obj) {
    for (keys in obj[key]) {
      if ( typeof obj[key][keys] == "string" || typeof obj[key][keys] == "boolean" || typeof obj[key] == 'array' ) {
        continue;
      }
      array.push(obj[key][keys]);
    }
  }
}

addInArray(obj1, allArrays);
addInArray(obj2, allArrays);
console.log(allArrays);

function sumInArray(arr) {
  let sum = 0
  for (key in arr) {
    sum += arr[key]
  }
  return sum;
}
console.log(sumInArray(allArrays));
