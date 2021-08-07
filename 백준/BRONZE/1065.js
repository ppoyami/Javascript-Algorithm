const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  let LIMIT = stdin.length - 1; // ! [ '1 2', '3 4', '' ]
  return () => (LIMIT > line ? stdin[line++] : undefined);
})();

const [N] = input().split(' ').map(Number);
let count = 0;

const isHansu = n => {
  if (n <= 99) return true;
  const arr = String(n).split('').map(Number);
  const diff = arr[0] - arr[1];

  for (let i = 1; i < arr.length - 1; i++) {
    if (diff !== arr[i] - arr[i + 1]) return false;
  }

  return true;
};

// 1 ~ 9는 한수이다.
for (let i = 1; i <= N; i++) {
  if (isHansu(i)) count++;
}

console.log(count);
