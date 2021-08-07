// ! basic Tree
class Tree {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Tree(data));
  }

  contains(data) {
    if (this.data === data) return true;

    for (let node of this.children) {
      const temp = node.contains(data);
      if (temp) return temp; // true 일 때만
    }
    return false;
  }

  depthFirstTraverse(node) {
    // BUG: 매개변수의 기본값으로 node = this가 안된다. 초기화 전 접근할 수 없다는 오류가 발생
    const root = node || this;
    let values = [root.data];

    //MEMO 빈 배열일 경우 for of 는 동작하지 않는다.
    for (let node of root.children) {
      values = values.concat(this.depthFirstTraverse(node));
    }

    return values;
  }

  breadthFirstTraverse() {
    const queue = [this]; // 트리의 루트 기준
    const outputs = [];

    while (queue.length) {
      const root = queue.shift();
      outputs.push(root.data);
      for (let node of root.children) {
        queue.push(node); // MEMO: 너비우선으로 큐에 집어넣고
      }
    }

    return outputs;
  }
}

function treeTest() {
  const t = new Tree('a');
  t.add('b');
  t.add('c');
  t.add('d');
  t.children[0].add('f');
  t.children[0].add('x');
  t.children[0].children[1].add('z');

  console.log(t.contains('z')); // true
  console.log(t.depthFirstTraverse()); // a, b, f, x, z, c, d
  console.log(t.breadthFirstTraverse()); // a, b, c, d, f, x, z
}

// treeTest();

// ! Binary Search Tree (재귀적 호출을 이용한 방법)
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // left, 재귀 호출시 검사하는 부분
    if (value <= this.value) {
      // base case
      if (!this.left) this.left = new BinaryTree(value);
      else this.left.insert(value); // 재귀호출
    }
    if (value > this.value) {
      // right
      if (!this.right) this.right = new BinaryTree(value);
      else this.right.insert(value);
    }
  }

  contains(value) {
    if (value === this.value) return true;

    if (value <= this.value) {
      if (!this.left) return false;
      this.left.contains(value);
    }
    if (value > this.value) {
      if (!this.right) return false;
      this.right.contains(value);
    }
  }

  depthFirstTraverse(order, callback) {
    // 깊이우선, left 먼저
    // left -> right
    order === 'pre' && callback(this.value);
    if (this.left) this.left.depthFirstTraverse(order, callback);
    order === 'in' && callback(this.value);
    if (this.right) this.right.depthFirstTraverse(order, callback);
    order === 'post' && callback(this.value);
  }

  breadthFirstTraverse(callback) {
    // 너비 우선
    const queue = [this];

    while (queue.length) {
      const root = queue.shift();
      callback(root.value);
      root.left && queue.push(root.left);
      root.right && queue.push(root.right);
    }
  }

  getMinValue() {
    if (!this.left) return this.value;
    return this.left.getMinValue();
  }

  getMaxValue() {
    if (!this.right) return this.value;
    return this.right.getMaxValue();
  }
}

function binaryTreeTest() {
  const tree = new BinaryTree(5);
  for (const value of [3, 6, 1, 7, 8, 4, 10, 2, 9]) tree.insert(value);
  // tree.depthFirstTraverse('in', value => console.log(value));
  tree.breadthFirstTraverse(value => console.log(value));
  // console.log(tree.getMaxValue());
  // console.log(tree.getMinValue());
}

// binaryTreeTest();
