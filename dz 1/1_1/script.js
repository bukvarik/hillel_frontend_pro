let s = +prompt('Площадь основания: ', 0);
let r = +prompt('Радиус равен: ', 0);
let h = +prompt('Высота равна: ', 0);


let v1 = s * h;
let v2 = Math.PI * h * r ** 2;
console.log('**************');
console.log(`Обьем цилиндра с площадью основы ${s} (вывети значение), радиусом ${r} и высотой ${h} равен:`)
console.log('--------------------');
console.log(`V = ${v1}`);
console.log(`V = ${v2}`);
console.log('-------------------');
console.log('end.');


