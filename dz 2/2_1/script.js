// 1) Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры

let n = +prompt('n', 0);
if (n <= 0) {
  console.log(0);
} else if (n == 1) {
  console.log(1);
} else {
  let a = 1;
  let b = 1;
  let res = 0;
  for (let i = 2; i <= n; i++) {
    console.log(a);
    res = a + b;
    a = b;
    b = res;
  }
  console.log(a);
}


// 2) Проверить число на простоту. Число вводить с клавиатуры.
let n = +prompt('Введите число', 0);

if (n < 2) {
  console.log(' 0, 1 не относится ни к простым, ни к составным числам');
} else if (n === 2) {
  console.log(`Prime number`);
} else {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if( n % i == 0) {
      count++;
    }
  }
  if (count < 2) {
    console.log(`${n} is Prime number`);
  } else {
    console.log(`${n} isnt Prime number`);
  }
}