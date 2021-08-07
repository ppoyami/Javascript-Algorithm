const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  let LIMIT = stdin.length - 1; // ! [ '1 2', '3 4', '' ]
  return () => (LIMIT > line ? stdin[line++] : undefined);
})();

// BUG .map(Number) 가 있어야 입력을 ctrl D 로 끊을 수 있음 뭔 경우지..
const [N] = input().split(' ').map(Number);

const combine = num => Math.floor(num / 10) + (num % 10);

let result = N;
let count = 0;

while (true) {
  count++;
  const sum = combine(result);
  result = (result % 10) * 10 + (sum % 10);
  if (result === N) break;
}

console.log(count);
