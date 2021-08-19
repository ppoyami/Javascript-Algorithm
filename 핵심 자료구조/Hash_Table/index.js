class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class Table {
  constructor(size) {
    this.cells = new Array(size);
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    const hash = total % this.cells.length;
    return hash;
  }

  insert(key, value) {
    const hash = this.hash(key);
    console.log(`${key}->${hash}`);
    if (!this.cells[hash]) {
      // 테이블 주소가 비어있는 경우
      this.cells[hash] = new Node(key, value);
    } else if (this.cells[hash] && this.cells[hash].key === key) {
      // 이미 주소에 데이터 존재, 하지만 키가 같은 경우 값을 덮어쓴다.
      this.cells[hash].value = value;
    } else if (this.cells[hash] && this.cells[hash].key !== key) {
      // 이미 주소에 데이터 존재, 키 값도 다른 경우
      let node = this.cells[hash];

      while (node.next) {
        if (node.next.key === key) {
          // 해당 주소에 들어있는 노드를 중 key값이 같은 것이 있는 경우
          node.next.value = value;
          return;
        }
        node = node.next; // 연결리스트로 추가함
      } // node null이 들어있음
      node.next = new Node(key, value);
    }
  }

  get(key) {
    const hash = this.hash(key);
    let target = this.cells[hash];

    if (!target) return null;

    if (target.key === key) return target.value; // 해당 주소의 node의 키와 같은 경우
    if (target.key !== key) {
      // 키가 다른 경우
      while (target) {
        // 링크로 연결된 노드를 검색합니다.
        if (target.key === key) return target.value;
        target = target.next;
      }
      return null; // 연결된 노드에서도 같은 키값을 찾지 못한 경우
    }
  }

  getAll() {
    // 해당 주소의 노드 -> 연결된 노드 담기
    const table = [];
    for (let node of this.cells) {
      let link = [];
      while (node) {
        link.push(node); // 배열에 연결된 노드를 담아 출력하고 있다.(이중배열 출력)
        node = node.next;
      }
      table.push(link);
    }
    return table;
  }
}

function hashTableTest() {
  const table = new Table(5);
  const searchData = 'lll';

  table.insert('gas', 1);
  table.insert('asf', 2);
  table.insert('aaa', 3);
  table.insert('acb', 4);
  table.insert('ccc', 5);
  table.insert('zxv', 6);
  table.insert('zpw', 7);
  table.insert('klu', 8);
  table.insert('juy', 9);
  table.insert('lll', 10);
  table.insert('zzz', 11);
  table.insert('wcn', 12);
  table.insert('kio', 13);
  table.insert('mnb', 14);

  console.log(`${searchData}: ${table.get(searchData)}`);
  console.log(table.getAll());
}

hashTableTest();
