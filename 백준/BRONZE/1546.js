const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  let LIMIT = stdin.length - 1; // ! [ '1 2', '3 4', '' ]
  return () => (LIMIT > line ? stdin[line++] : undefined);
})();

const [T] = input().split(' ').map(Number);
const list = input().split(' ').map(Number);

const max = Math.max(...list);

const getAverage = score => (score / max) * 100;

const result =
  list.reduce((acc, cur) => acc + getAverage(cur), 0) / list.length;

console.log(result);
