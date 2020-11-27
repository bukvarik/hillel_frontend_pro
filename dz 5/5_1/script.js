let obj1 = {
  x: 1,
  y: 2,
  z: 3,
  text: 'Text',
  text2: 'Text2'
}

let obj2 = {
  m: 12,
  n: 15,
  o: 20,
  p: 23,
  bool1: true,
  bool2: false
}

allArrays = [];

function addInArray(obj, array) {
  for (key in obj) {
    if( typeof obj[key] == "string" || typeof obj[key] == "boolean") {
      continue;
    }
    array.push(obj[key]);
  }
}

addInArray(obj1, allArrays);
addInArray(obj2, allArrays);
console.log(allArrays);

function sumInArray(arr) {
  let sum = 0
  for( key in arr) {
    sum += arr[key];
  }
  return sum;
}
console.log(sumInArray(allArrays));
