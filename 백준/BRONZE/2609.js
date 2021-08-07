const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  let LIMIT = stdin.length - 1;
  return () => (LIMIT > line ? stdin[line++] : undefined);
})();

const [M, N] = input().split(' ').map(Number);
// 5, 24 === 4
// gcd(m, n) = gcd(n, m % n))
let GCD = (a, b) => (b > 0 ? GCD(b, a % b) : a);
let LCM = (a, b) => (a * b) / GCD(a, b);

console.log(GCD(M, N));
console.log(LCM(M, N));
