class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = parentIndex => parentIndex * 2 + 1;
  getRightChildIndex = parentIndex => parentIndex * 2 + 2;
  getParentIndex = childIndex => Math.floor((childIndex - 1) / 2);

  peek = () => this.heap[0];

  insert = data => {
    this.heap.push(data);
    this.heapifyUp();
  };

  remove = () => {
    // 루트노드를 저장
    const root = this.heap[0];
    // root가 하나일 때, 또는 2개일 때 처리하기
    if (this.heap.length === 0) return;
    else if (this.heap.length === 1) {
      this.heap = [];
      return root;
    } else {
      // 가장 큰 노드(마지막)을 root로 할당한다.(가장 크기때문에, 하위 노드와 비교하여 자리를 이동시킬 수 있기 때문?)
      this.heap[0] = this.heap.pop();
      this.heapifyDown(); // 재배열하기
    }
    // 재배열 후, 루트노드를 반환
    return root;
  };

  heapifyDown = () => {
    let targetIndex = 0;
    const root = this.heap[0];

    while (this.getLeftChildIndex(targetIndex) <= this.heap.length) {
      const leftIndex = this.getLeftChildIndex(targetIndex);
      const rightIndex = this.getRightChildIndex(targetIndex);
      const childIndex =
        this.heap[leftIndex] < this.heap[rightIndex] ? leftIndex : rightIndex;

      if (this.heap[targetIndex] > this.heap[childIndex]) {
        // 자식노드가 더 작다면, targetIndex는 자식노드 인덱스가 된다.
        this.heap[targetIndex] = this.heap[childIndex];
        targetIndex = childIndex;
      } else {
        break;
      }
    }

    this.heap[targetIndex] = root;
  };

  heapifyUp = () => {
    // 마지막에 삽입된 노드의 인덱스를 찾기
    // 자식 노드가 더 작으면, 부모를 자식노드의 인덱스로 위치하게 한다.
    // 루트 노드가 될 때 까지 진행하기
    let targetIndex = this.heap.length - 1;
    const newData = this.heap[targetIndex];

    while (targetIndex >= 0) {
      const parentIndex = this.getParentIndex(targetIndex);
      if (this.heap[parentIndex] > newData) {
        this.heap[targetIndex] = this.heap[parentIndex];
        targetIndex = parentIndex;
      } else {
        break;
      }
    }

    this.heap[targetIndex] = newData;
  };

  print = () => console.log(this.heap);
}

// * Test

const heap = new Heap();

heap.insert(35);
heap.insert(44);
heap.insert(42);
heap.insert(10);
heap.insert(14);

console.log(heap.remove());

heap.print();
