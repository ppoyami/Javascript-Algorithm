function solution(words) {
  const stack = [];
  let reverse = '';

  for (let word of words) {
    for (let c of word) {
      stack.push(c);
    }
    while (stack.length) reverse += stack.pop();
    reverse += ' ';
  }

  return reverse.trimEnd();
}

const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  let LIMIT = stdin.length - 1; // ! [ '1 2', '3 4', '' ]
  return () => (LIMIT > line ? stdin[line++] : undefined);
})();

const [T] = input().split(' ').map(Number);
let answer = '';

while ((words = input()?.split(' '))) {
  const result = solution(words);
  answer += result + '\n';
}

console.log(answer.slice(0, -1));
