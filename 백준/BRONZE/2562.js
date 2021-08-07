const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  let LIMIT = stdin.length - 1; // ! [ '1 2', '3 4', '' ]
  return () => (LIMIT > line ? stdin[line++] : undefined);
})();

let count = 1;
let index = 0;
let [max] = input().split(' ').map(Number);

while (count < 9) {
  const [number] = input().split(' ').map(Number);
  if (number > max) {
    max = number;
    index = count;
  }
  count++;
}

console.log(max);
console.log(index + 1);
