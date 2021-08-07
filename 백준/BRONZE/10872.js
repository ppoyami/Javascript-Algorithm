const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N] = input().split(' ').map(Number);

function factorial(n) {
  if (n === 0) return 1;
  if (n <= 2) return n;
  return n * factorial(n - 1);
}

console.log(factorial(N));
