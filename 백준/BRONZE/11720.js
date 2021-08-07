const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [T] = input().split(' ').map(Number);
const [N] = input().split(' ');

const sum = (acc, cur) => (acc += cur);

// M: 아주 큰 수가 입력될 때, 문자열로 변환하면 7 + e + 22 와 같이 지수표현이 들어간다.
const result = N.split('')
  .filter(c => c !== '0')
  .map(Number)
  .reduce(sum, 0);

console.log(result);
