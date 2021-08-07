const input = require('../modules/fs');

const T = input();

const queue = {
  arr: [],
  answer: '',
  note(v) {
    this.answer += v + '\n';
  },
  push(v) {
    this.arr.push(v);
  },
  pop() {
    if (this.arr.length === 0) {
      this.note(-1);
    } else this.note(this.arr.shift());
  },
  size() {
    this.note(this.arr.length);
  },
  empty() {
    this.note(this.arr.length === 0 ? 1 : 0);
  },
  front() {
    if (this.arr.length === 0) {
      this.note(-1);
    } else this.note(this.arr[0]);
  },
  back() {
    if (this.arr.length === 0) {
      this.note(-1);
    } else this.note(this.arr[this.arr.length - 1]);
  },
};

while ((inputs = input()?.split(' '))) {
  const [commend, value] = inputs;
  if (value) {
    queue[commend](Number(value));
  } else {
    queue[commend]();
  }
}

console.log(queue.answer.slice(0, -1));
