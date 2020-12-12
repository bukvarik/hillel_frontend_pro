let a = {
  x: 10
};

let b = {
  x: 20,
  y: 30
}

// Вариант 1 
function assignObjects(obj1, obj2) {
  let newObj = obj1;
  for (let key in obj2){
      newObj[key] = obj2[key];
  }
  return newObj;
}

console.log(assignObjects(a, b));

// Вариант 2
let obj3 = {...a, ...b};
console.log(obj3);

// Вариант 3
function assignObjects(obj1,obj2){
  let newOBj = {};
  for (let key in obj1) { 
      newOBj[key] = obj1[key]; 
  }
  for (let key in obj2) { 
      newOBj[key] = obj2[key];
  }
  return newOBj;
}
console.log(assignObjects(a, b)); 