const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  let LIMIT = stdin.length - 1; // ! [ '1 2', '3 4', '' ]
  return () => (LIMIT > line ? stdin[line++] : undefined);
})();

const [T] = input().split(' ').map(Number);

const calcScore = table => {
  let count = 0;
  return table.split('').reduce((acc, cur) => {
    if (cur === 'O') {
      count++;
      acc += count;
    } else {
      count = 0;
    }
    return acc;
  }, 0);
};

for (let i = 0; i < T; i++) {
  const table = input();
  const score = calcScore(table);
  console.log(score);
}
