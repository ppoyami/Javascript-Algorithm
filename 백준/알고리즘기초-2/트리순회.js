const input = require('../modules/fs');

const [T] = input().split(' ').map(Number);
const nodes = new Map();
let answer = '';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// * 트리 구조체 생성
while ((row = input()?.split(' '))) {
  // * map에 [value]: new Node(value)
  const [value, left, right] = row;

  if (!nodes.has(value)) nodes.set(value, new Node(value));

  const root = nodes.get(value);

  if (left !== '.') {
    if (!nodes.has(left)) nodes.set(left, new Node(left));
    const leftNode = nodes.get(left);
    root.left = leftNode;
  }

  if (right !== '.') {
    if (!nodes.has(right)) nodes.set(right, new Node(right));
    const rightNode = nodes.get(right);
    root.right = rightNode;
  }
}
// console.log(nodes); // {A -> {value: A ,left: B, right: C}}

preorder(nodes.get('A'));
answer += '\n';
inorder(nodes.get('A'));
answer += '\n';
postorder(nodes.get('A'));

console.log(answer);

// (루트) (왼쪽 자식) (오른쪽 자식)
function preorder(root) {
  answer += root.value;
  if (root.left) {
    preorder(root.left);
  }
  if (root.right) {
    preorder(root.right);
  }
}

// (왼쪽 자식) (루트) (오른쪽 자식)
function inorder(root) {
  if (root.left) {
    inorder(root.left);
  }
  answer += root.value;
  if (root.right) {
    inorder(root.right);
  }
}

// (왼쪽 자식) (오른쪽 자식) (루트)
function postorder(root) {
  if (root.left) {
    postorder(root.left);
  }
  if (root.right) {
    postorder(root.right);
  }
  answer += root.value;
}
