const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [S] = input().split(' ');
// M: a~z 까지 배열을 생성하는 함수 작성하기
const range = (start, end) =>
  new Array(end - start + 1).fill(0).map((_, idx) => idx + start);

const unicodes = range('a'.charCodeAt(0), 'z'.charCodeAt(0));
const alpabets = String.fromCharCode(...unicodes);

let result = '';

for (char of alpabets) {
  result += S.indexOf(char) + ' ';
}

console.log(result.slice(0, -1));
