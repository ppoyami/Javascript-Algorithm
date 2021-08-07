// enqueue, dequeue, front

class CustomQueue {
  constructor() {
    this._head = null;
    this._rear = null;
    this._count = 0;
  }
  #createNode(data) {
    const node = {
      data,
      link: null,
    };
    return node;
  }

  enqueue(data) {
    const node = this.#createNode(data);
    if (!this._head) {
      this._head = node;
      this._rear = node;
    } else {
      this._rear.link = node;
      this._rear = node;
    }
  }

  dequeue() {
    if (!this._head) return false;

    const headData = this._head.data;
    this._head = this._head.link;
    return headData;
  }

  front() {
    if (!this._head) return false;
    return this._head.data;
  }

  get count() {
    return this._count;
  }
}

class ArrayQueue {
  constructor() {
    this._arr = [];
  }

  enqueue(data) {
    this._arr.push(data);
  }

  dequeue() {
    return this._arr.shift();
  }

  front() {
    return this._arr[0];
  }
}

/// * test
const log = console.log;
// const queue = new CustomQueue();
const queue = new ArrayQueue();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

log(queue.front());

log(queue.dequeue());
log(queue.dequeue());
log(queue.dequeue());
