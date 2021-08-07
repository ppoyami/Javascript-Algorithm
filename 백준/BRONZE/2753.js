// 윤년: 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [v1] = input().split(' ').map(Number);

const is윤년 = v1 % 4 === 0 && (v1 % 100 !== 0 || v1 % 400 === 0);

if (is윤년) console.log(1);
if (!is윤년) console.log(0);
