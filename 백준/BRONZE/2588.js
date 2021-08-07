const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [v1] = input().split(' ').map(Number);
const [v2] = input().split(' ').map(Number);

const positions = String(v2).split('').reverse().map(Number);
let times = 1;
let total = 0;

for (let position of positions) {
  const calc = v1 * position;
  console.log(calc);
  total += calc * times;
  times *= 10;
}

console.log(total);
