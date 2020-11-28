let obj1 = {
  x: 1,
  y: 2,
  z: 3,
  l: [1, 1, 1],
  text: 'Text',
  text2: 'Text2',
  t: [1, 1, 1, 1, 1, 1]
}

let obj2 = {
  m: 12,
  n: 15,
  o: 20,
  p: 23,
  bool1: true,
  bool2: false,
  j: [2, 3, 4, true, 'true']
}
allArrays = [];

function addInArray(obj, array) {
  for (key in obj) {
    if( typeof obj[key] == "string" || typeof obj[key] == "boolean" || typeof obj[key] == 'number') {
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
  for (key in arr) {
    //console.log(key);
    for (keys in arr[key]) {
      //console.log(arr[key][keys]);
      if (typeof arr[key][keys] == 'string' || typeof arr[key][keys] == 'boolean') {
        continue;
      }
      sum += arr[key][keys];
    }
  }
  return sum;
}
console.log(sumInArray(allArrays));
