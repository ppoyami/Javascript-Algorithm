const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  let LIMIT = stdin.length - 1; // ! [ '1 2', '3 4', '' ]
  return () => (LIMIT > line ? stdin[line++] : undefined);
})();

// d(75) = 75+7+5 = 87
// d(2) = 2 + 2 = 4

const notSelfNumbers = {};
let outputs = '';

const sum = list => list.reduce((acc, cur) => (acc += cur), 0);

const d = n => {
  if (n < 10) {
    return n + n;
  }
  return n + sum(String(n).split('').map(Number));
};
// Q: 똑같은 반복문을 두 번 돈다. 합칠 수 없을까?
// A: 수열을 만들고, 그 수열에 i가 포함되지 않으면 셀프넘버이다.

for (let i = 1; i <= 10000; i++) {
  notSelfNumbers[d(i)] = 1;
  if (notSelfNumbers[i] === undefined) {
    outputs = outputs + i + '\n';
  }
}

console.log(outputs.slice(0, -1));
