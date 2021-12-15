class Tree {
  constructor() {
    this.nodeList = [];
  }

  insert(data) {
    this.nodeList.push(data);
  }

  _getLeftChildren(parentIndex) {
    const childIndex = parentIndex * 2 + 1;
    if (this.nodeList.length - 1 < childIndex) return false;
    return childIndex;
  }

  _getRightChildren(parentIndex) {
    const childIndex = parentIndex * 2 + 2;
    if (this.nodeList.length - 1 < childIndex) return false;
    return childIndex;
  }

  _getParentIndex(childrenIndex) {
    const parentIndex = Math.ceil(childrenIndex / 2) - 1;
    if (parentIndex < 0) return false;
    return parentIndex;
  }

  traversal(start = 0) {
    let results = [];

    // left
    const left = this._getLeftChildren(start);
    if (left) results = [...results, ...this.traversal(left)];
    // right
    const right = this._getRightChildren(start);
    if (right) results = [...results, ...this.traversal(right)];
    // root
    results.push(this.nodeList[start]);

    return results;
  }
}

const tree = new Tree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

console.log(tree.traversal());
