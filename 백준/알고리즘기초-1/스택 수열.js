const input = require('../modules/fs');
const N = input();
// Q: 테스크는 통과 백준에서는 틀렷다고 나옴...ㅠ
class Stack {
  note = [];
  constructor() {
    this.stack = [];
  }

  get note() {
    return this.note;
  }

  no() {
    this.note = ['NO'];
  }

  get isEmpty() {
    return this.stack.length === 0;
  }

  includes(v) {
    return this.stack.includes(v);
  }

  push(v) {
    this.stack.push(v);
    this.note.push('+');
  }

  pop() {
    this.note.push('-');
    const popped = this.stack.pop();
    return popped;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

const sequence = [];
const stackImpl = new Stack();

while ((number = input()?.split(' ').map(Number))) sequence.push(...number);

const range = (start, end) =>
  new Array(end - start + 1).fill(0).map((_, idx) => start + idx);

let top = sequence[0];

for (let n of sequence) {
  if (stackImpl.isEmpty) {
    // 1 ~ n 까지 push
    const numbers = range(1, n);
    for (let n of numbers) {
      stackImpl.push(n);
    }
    stackImpl.pop();
  } else if (top < n) {
    // top + 1 ~ n까지 push
    const numbers = range(top + 1, n);
    for (let n of numbers) {
      stackImpl.push(n);
    }
    stackImpl.pop();
    top = n;
  } else {
    // stack안에 n이 있는 지 검사하기
    if (!stackImpl.includes(n)) {
      stackImpl.no();
      break;
    }
    // n이 나올 때까지 pop
    while ((popped = stackImpl.pop())) {
      if (n === popped) {
        break;
      }
    }
  }
}

console.log(stackImpl.note.join('\n'));
