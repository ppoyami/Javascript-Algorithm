const input = require('./module');

function solution() {
  const OPEN = '(';
  const CLOSE = ')';

  return parenthesis => {
    const stack = [];
    for (let c of parenthesis) {
      if (c === OPEN) {
        stack.push(c);
      }
      if (c === CLOSE) {
        if (stack.length === 0) return 'NO';
        stack.pop();
      }
    }

    if (stack.length !== 0) return 'NO';

    return 'YES';
  };
}

const [T] = input().split(' ').map(Number);
let answer = '';
const solutionImpl = solution();

while ((line = input())) {
  answer += solutionImpl(line) + '\n';
}

console.log(answer.slice(0, -1));
