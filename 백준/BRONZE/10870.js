const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N] = input().split(' ').map(Number);

function fibo(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(N));
