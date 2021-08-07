const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [T] = input().split(' ');

let result = '';

while ((inputs = input()?.split(' '))) {
  const [count, str] = inputs;

  if (!str) break;

  for (let c of str) {
    result += c.repeat(count);
  }
  result += '\n';
}

console.log(result.slice(0, -1));
