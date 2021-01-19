function delSymInStr (str, arr) {
  str = str.split('');
  for (let i = 0; i < arr.length; i++) {
    str = str.filter(item => item !== arr[i]);
  }
  return str.join('');
}
console.log(delSymInStr('hello world', ['l', 'd']));
console.log(delSymInStr('jfakwjfkahfhajh ahwfjlhajfh wjwhjahj', ['a', 'j', 'k']));
console.log(delSymInStr('123456789,!?', ['1', '3']));
console.log(delSymInStr('Hi Peter2005', ['e', '0']));

function delSymInStr (str, arr) {
  str = str.split('');
  for (let i = 0; i < arr.length; i++) {
    // if (str.includes(arr[i])) {
    //   str.splice(str.indexOf(arr[i]), 1);
    // }
    str = str.filter(item => item !== arr[i]);
  }
  return str.join('');
}