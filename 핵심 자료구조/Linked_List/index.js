class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  addLast(value) {
    const node = new Node(value);

    if (this.root) {
      let currentNode = this.root;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    } else {
      this.root = node;
    }
  }

  removeLast() {
    if (!this.root) return;

    let currentNode = this.root;
    let target;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    target = currentNode;
    currentNode = null;

    return target.value;
  }

  addFirst(value) {
    const node = new Node(value);
    node.next = this.root;
    this.root = node;
  }

  removeFirst() {
    const first = this.root;
    if (first) this.root = first.next;

    return first.value;
  }

  remove(value) {
    if (!this.root) return;

    let currentNode = this.root;
    let previousNode = null;
    let target;

    while (currentNode) {
      if (currentNode.value === value) {
        if (!previousNode) {
          target = this.root;
          this.root = null;
          return target.value;
        }

        target = currentNode;
        previousNode.next = currentNode.next;
        currentNode = null;

        return target.value;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  contains(value) {
    if (!this.root) return false;

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  display() {
    if (!this.root) return;

    let currentNode = this.root;
    const list = [];

    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }
}

function linkedListTest() {
  const singlyList = new LinkedList();
  singlyList.addLast(1);
  singlyList.addLast(2);
  singlyList.addLast(3);
  singlyList.addLast(4);
  singlyList.addLast(5);
  singlyList.addLast(6);

  console.log(singlyList.remove(4));
  console.log(singlyList.removeFirst());

  console.log(singlyList.contains(3));

  console.log(singlyList.display());
}

// linkedListTest();

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const node = new DoublyNode(value);
    // 마지막 삽입
    if (!this.first && !this.last) {
      this.last = node;
      this.first = node;
      this.size = this.size + 1;
      return;
    }
    this.last.next = node;
    node.prev = this.last;
    this.last = node;

    this.size = this.size + 1;
  }

  pop() {
    // 마지막 삭제
    if (!this.last) return;

    const target = this.last;

    if (!this.last.prev) {
      this.last = null;
      this.size = this.size - 1;
      return target.value;
    }

    const prevNode = this.last.prev;
    prevNode.next = null;
    this.last = prevNode;
    this.size = this.size - 1;

    return target.value;
  }

  shift() {
    // 맨 처음 삭제
    if (!this.first) return;

    const target = this.first;

    if (!this.first.next) {
      this.first = null;
      this.size = this.size - 1;
      return target.value;
    }

    const nextNode = this.first.next;
    nextNode.prev = null;
    this.first = nextNode;
    this.size = this.size - 1;

    return target.value;
  }

  unshift(value) {
    // 맨 처음에 삽입
    const node = new DoublyNode(value);

    if (!this.first && !this.last) {
      this.first = node;
      this.last = node;
      this.size = this.size + 1;
      return;
    }
    this.first.prev = node;
    node.next = this.first;
    this.first = node;
    this.size = this.size + 1;
  }

  insert(value, index) {
    const node = new DoublyNode(value);
    // index 위치에 삽입하기
    if (index > this.size - 1) {
      this.push(value);
      this.size++;
      return;
    }

    let targetNode = this.first;

    for (let i = 1; i < index; i++) {
      targetNode = targetNode.next;
    }

    const prevNode = targetNode.prev;
    // prevNode.next -> node
    // node.prev -> prevNode
    prevNode.next = node;
    node.prev = prevNode;
    // targetNode.prev -> node
    // node.next -> targetNode
    targetNode.prev = node;
    node.next = targetNode;
    this.size++;
  }

  getSize() {
    return this.size;
  }

  display() {
    const list = [];
    let currentNode = this.first;

    if (!currentNode) return list;

    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return list;
  }
}

function doublyLinkedListTest() {
  const linkedList = new DoublyLinkedList();
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);
  linkedList.push(4);
  linkedList.push(5);

  linkedList.unshift('a');
  linkedList.unshift('b');

  console.log(linkedList.pop()); // 5
  console.log(linkedList.shift()); // b

  linkedList.insert('가', 100);
  linkedList.insert('나', 3);

  console.log(linkedList.getSize()); // 5

  console.log(linkedList.display()); // a, 1, 나, 2, 3, 4, 가
}

doublyLinkedListTest();
