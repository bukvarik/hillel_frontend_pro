let str1 = 'daedaijj1njnr10!!??';
let str2 = 'dada21112131';
let str3 = 'okoojmmlmlknmkjnjh12/4.2/.4.,1.4k5o1kjp';

let restrictedList = [
  '!', 'g', '_', '/', '1', '2', '3', ',',
 '?', '4', '5', '6', '7', '8', '9', '0', '.'
];
//console.log(str1);

function deleteRestrictedSymbolInStr( str, list) {
  let newArr = []
  for (key in list) {
    newArr = str.split('');
    for (keys in newArr) {
      if (newArr[keys].includes(list[key])) {
        newArr.splice(keys, 1);
      }
      //console.log(newArr);
    }
    str = newArr.join('');
  }
  return str;
}

console.log('str1');
console.log(deleteRestrictedSymbolInStr(str1, restrictedList));
console.log('str2');
console.log(deleteRestrictedSymbolInStr(str2, restrictedList));
console.log('str3');
console.log(deleteRestrictedSymbolInStr(str3, restrictedList));
