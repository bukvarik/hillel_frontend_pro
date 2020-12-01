// 1. Массив [1, 2, 3, 4, 5] вывести на экран через разделитель ‘_’

function showArr(arr, separator) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if ( i == arr.length - 1 ) {
      str = str + arr[i];
      continue;
    } 
    str = str + arr[i] + separator;
  }
  document.write(str);
}
let array = [1, 2, 3, 4, 5];
showArr( array, ',')

// 2. Организовать вывод массива [6,7,2,3,5,7] в виде списка, при помощи тегов ul-li

let array = [6,7,2,3,5,7];
function showArr(arr) {
  let a = '<ul>';
  let b = '</ul>';
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str = str + '<li>' + arr[i] + '</li>'; 
  }

  document.write( a + str + b);
}
showArr(array);

// 3. В массиве [5,6,43,3,436,7,87,76,45,3] вырезать центральный элемент, если длина массива чётная – вырезать два элемента, которые можно считать центральнымию

let array = [5,6,43,3,436,7,87,76,45,3]; 
function sliceArr (arr) {
  if (arr.length % 2 == 0) {
    arr.splice(((arr.length / 2) - 1), 2);
  } else {
    arr.splice((Math.ceil(arr.length) / 2), 1);
  }
  return arr;
}


console.log(sliceArr(array));


// 4. Организовать циклический ввод с клавиатуры элементов, которые будут добавляться к существующему массиву A = [1,2,3] в конец. Предусмотреть символ прекращения ввода «&»

let arr = [1, 2, 3];
while(true) {
  let input = prompt('Введите число', 0);
  if (input === '&') {
    break;
  } else {
    arr.push(input);
  }
} 

console.log(arr);

// 5. 4 пункт, в начало


let arr = [1, 2, 3];
while(true) {
  let input = prompt('Введите число', 0);
  if (input === '&') {
    break;
  } else {
    arr.unshift(input);
  }
} 

console.log(arr);