function delSymInStr (str, arr) {
  let result = [];
  let newStr = str.split('');

  for (let i = 0; i < newStr.length; i++) {
      if (arr.indexOf(newStr[i]) == -1 ) {
          result.push(newStr[i]);
      }
  }
  str = result.join('');
  return str;
}

console.log(delSym('hello world', ['l', 'd']));
console.log(delSym('jfakwjfkahfhajh ahwfjlhajfh wjwhjahj', ['a', 'j', 'k']));
console.log(delSym('123456789,!?', ['1', '3']));
console.log(delSym('Hi Peter2005', ['e', '0']));