const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const prefix = n => `Case #${n}: `;

const [T] = input().split(' ').map(Number);
let str = '';

for (let i = 0; i < T; i++) {
  const [v1, v2] = input().split(' ').map(Number);
  str += `${prefix(i + 1)}${v1 + v2}\n`;
}

console.log(str.slice(0, -1));
