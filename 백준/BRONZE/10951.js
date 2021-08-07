const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
// MEMO: stdin 의 마지막엔 '' 이 추가된다. 클로저 변수로 undefined를 명시적으로 반환
const input = (() => {
  let line = 0;
  let LIMIT = stdin.length - 1; // ! [ '1 2', '3 4', '' ]
  return () => (LIMIT > line ? stdin[line++] : undefined);
})();

while (true) {
  const line = input()?.split(' ').map(Number);
  if (!line) break;
  const [v1, v2] = line;
  console.log(v1 + v2);
}
