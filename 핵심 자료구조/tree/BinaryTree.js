class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor(data) {
    this.root = data ? new Node(data) : null;
  }

  insert(data, root = this.root) {
    if (!root) {
      // 루트 노드가 없을 때,
      this.root = new Node(data);
    } else if (root.data >= data) {
      // 데이터가 작을 때, (왼쪽)
      if (!root.left) root.left = new Node(data);
      else this.insert(data, root.left);
    } else {
      // 데이터가 클 때, (오른쪽)
      if (!root.right) root.right = new Node(data);
      else this.insert(data, root.right);
    }
  }

  traverse(order = 'in', root = this.root) {
    if (order === 'pre') console.log(root.data);
    if (root.left) this.traverse(order, root.left);
    if (order === 'in') console.log(root.data);
    if (root.right) this.traverse(order, root.right);
    if (order === 'post') console.log(root.data);
  }

  dfs_rec(node = this.root) {
    let results = [];

    if (!node) return results;

    results.push(node.data);
    results = results.concat(node.left ? this.dfs(node.left) : []);
    results = results.concat(node.right ? this.dfs(node.right) : []);

    return results;
  }

  dfs_stk() {
    const stack = this.root ? [this.root] : [];
    const results = [];
    while (stack.length) {
      const node = stack.pop();
      results.push(node.data);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return results;
  }

  bfs() {
    const queue = this.root ? [this.root] : [];
    const results = [];
    while (queue.length) {
      const node = queue.shift();
      results.push(node.data);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return results;
  }

  contains(data, root = this.root) {
    while (root) {
      if (root.data === data) return true;
      else if (root.data >= data) root = root.left;
      else root = root.right;
    }
    return false;
  }

  delete(data, node = this.root) {
    // 타겟 노드와 부모노드를 추적
    if (!this.contains(data)) return false;
    let parent = node;

    while (node) {
      if (node.data === data) break;

      parent = node;

      if (node.data >= data) node = node.left;
      else node = node.right;
    }

    // FIXME: root node 를 삭제하는 경우에는? parent 방식을 사용할 수 없음!

    const direction = parent.left === node ? 'left' : 'right';

    if (!node.left && !node.right) {
      // 타겟 노드가 leaf 일 때,
      parent[direction] = null;
    } else if (!node.left || !node.right) {
      // 타겟 노드가 한 방향의 자식만 가지고 있을 때,
      const child = node.left || node.right;
      parent[direction] = child;
    } else {
      // 타겟 노드가 두 방향 모두 자식을 가지고 있을 때,
      let minNode = node.right;
      while (minNode.left) minNode = minNode.left;
      this.delete(minNode.data);

      minNode.left = node.left;
      parent[direction] = minNode;
    }

    return node;
  }
}

// * Test
const bst = new BinaryTree();

bst.insert(20);
bst.insert(25);
bst.insert(14);
bst.insert(30);
bst.insert(23);
bst.insert(18);
bst.insert(11);
bst.insert(21);
bst.insert(15);

// 순회
// bst.traverse('in');
// 검색
// console.log(bst.contains(18));
// console.log(bst.contains(24));
// 삭제
// console.log(bst.delete(15));
// console.log(bst.delete(23));
// console.log(bst.delete(25));
// console.log(bst.delete(14));
// console.log(bst.delete(20));

// bst.traverse('in');

// dfs
console.log(bst.dfs_stk());
console.log(bst.bfs());
