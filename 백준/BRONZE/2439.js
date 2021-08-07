const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N] = input().split(' ').map(Number);

// MEMO: repeat 사용하여 별 찍기
const results = new Array(N)
  .fill('')
  .map((_, i) => ' '.repeat(N - i + 1) + '*'.repeat(i + 1) + '\n');

console.log(results.join('').slice(0, -1));
