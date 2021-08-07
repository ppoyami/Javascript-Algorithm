const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [T] = input().split(' ').map(Number);
let results = '';
// MEMO: 시간통과 하려면 문자열로 누적해서 한번만 출력해주어야 한다.
for (let i = 0; i < T; i++) {
  const [v1, v2] = input().split(' ').map(Number);
  results += `${v1 + v2}\n`;
}

console.log(results.slice(0, -1));
