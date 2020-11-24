let m = 50;
let n = 50;
center = Math.floor(m/2);

for (let i = 1; i <= m; i++ ) {
  for (let j = 1; j <= n; j++) {
    if (i + j <= n + 1 && !(i <= j) || (i + j < n + 2) && j >= center && i <= center ) {
      document.write(' 1 ');
    } else {
      document.write(' 0 ');
    }
  }
  document.write('<br />');
}