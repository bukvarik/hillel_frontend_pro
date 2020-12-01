function doMath(x, znak, y) {
  switch (znak) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
    case '%':
      return x % y;
    case '^':
      return x ** y;
    default:
      console.log('Знак не поддерживается')
  }
}

console.log(doMath(5, '+', 1));
console.log(doMath(5, '*', 6));
console.log(doMath(5, '-', 1));
console.log(doMath(10, '/', 2));
console.log(doMath(100, '%', 42));
console.log(doMath(2, '^', 3));
console.log(doMath(2, '1', 3));