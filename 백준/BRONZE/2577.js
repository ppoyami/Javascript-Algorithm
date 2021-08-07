const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  let LIMIT = stdin.length - 1; // ! [ '1 2', '3 4', '' ]
  return () => (LIMIT > line ? stdin[line++] : undefined);
})();

const [A] = input().split(' ').map(Number);
const [B] = input().split(' ').map(Number);
const [C] = input().split(' ').map(Number);

const result = A * B * C;

const obj = new Array(10).fill(0).reduce((acc, _, index) => {
  const key = String(index);
  acc[key] = 0;
  return acc;
}, {});

String(result)
  .split('')
  .forEach(value => {
    obj[value]++;
  });

for (let value of Object.values(obj)) {
  console.log(value);
}
