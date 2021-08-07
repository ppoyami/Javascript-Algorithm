// push, pop, pick

// 참조관계로 구현
class CustomStack {
  constructor() {
    this._top = null;
    this._count = 0;
  }

  #createNode(data) {
    const node = {
      data,
      link: null,
    };
    return node;
  }

  push(data) {
    const node = this.#createNode(data);
    node.link = this._top;
    this._top = node;
    this._count++;
  }

  pop() {
    if (this._count === 0) return false;

    const topData = this._top.data;
    this._top = this._top.link;
    this._count--;

    return topData;
  }

  peek() {
    if (this._count === 0) return false;
    return this._top.data;
  }

  count() {
    return this._count;
  }
}

class ArrayStack {
  constructor() {
    this._arr = [];
  }

  pop() {
    return this._arr.pop();
  }

  push(data) {
    this._arr.push(data);
  }

  peek() {
    if (this._arr.length === 0) return false;
    return this._arr[this._arr.length - 1];
  }

  count() {
    return this._arr.length;
  }
}
//// * test
// const stack = new CustomStack(); // 참조관계 클래스
const stack = new ArrayStack(); // 배열을 활용
const log = console.log;

stack.push('a');
stack.push('b');
stack.push('c');

log(stack.pop());
log(stack.pop());
log(stack.pop());

log(stack.peek());

log(stack.count());
