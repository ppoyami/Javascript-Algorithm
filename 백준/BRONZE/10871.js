const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, LIMIT] = input().split(' ').map(Number);
const 수열 = input().split(' ').map(Number);

const results = 수열
  .filter(v => v < LIMIT)
  .map(String)
  .join(' ');

console.log(results);
