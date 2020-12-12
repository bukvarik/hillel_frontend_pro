function getMaxs(...args) {
  let result = [];
  for (let i = 0; i < args.length; i++){
    let max = 0;
    for (let j = 0; j < args[i].length; j++) {
        if (Number.isInteger(args[i][j])) {
            if (max < args[i][j]) {
                max = args[i][j];
            }
        }
    }
    result.push(max);
  }
  return result.join(', ');
}


console.log(getMaxs([6, 52, 33], [328, '636', '11'], ['a', 'b', 'c'], [1, 2, 3, 4, 5], [12, 15, 16, 32]));