
// let n = +prompt('n - по горизонтали', 0);
// let m = +prompt('m - по вертикали', 0);

let n = 10; //горизонталь 
let m = 5; //вертикаль

for (let i = 0; i < m; i++) {
  if (i == 0 || i == m - 1) { // первая либо последняя линия прямоугольника 
    document.write('<br \/>');//перенос * на новую строку
    for(let j = 0; j < n; j++) {
      document.write('*');
    }
  } else {
    document.write('<br \/>'); // перенос на новую строку
    document.write('*');
    for (j = 0; j < n - 2; j++) { // заполнение пустого пространства в прямоугольнике 
      document.write('0');
      //document.write('&nbsp;');   
    }
    document.write('*');
  }

}

