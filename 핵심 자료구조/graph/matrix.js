function test3(insertEdges, removeEdges) {
  // 1. 반환할 매트릭스의 크기를 구하기
  const size = Math.max(...flatArr(insertEdges)) + 1;
  // 2. 유효한 간선 목록을 만들기
  const validEdges = insertEdges.filter(edge => {
    const [from, to] = edge;

    for (let re of removeEdges) {
      const [reFrom, reTo] = re;
      if (from === reFrom && to === reTo) return false;
      if (from === reTo && to === reFrom) return false;
    }

    return true;
  });

  // 3. 0으로 채워진 매트릭스 생성
  const matrix = [];

  for (let i = 0; i < size; i++) {
    matrix.push(new Array(size).fill(0));
  }
  // 4. 유효한 간선 목록의 인덱스로 1을 넣어줌
  validEdges.forEach(edge => {
    const [from, to] = edge;
    matrix[from][to] = 1;
  });

  return matrix;
}

function flatArr(arr) {
  let result = [];

  for (let e of arr) {
    if (Array.isArray(e)) {
      result = [...result, ...flatArr(e)];
    } else {
      result.push(e);
    }
  }
  return result;
}

const insertEdges2 = [
  [0, 2],
  [2, 4],
  [1, 3],
  [2, 1],
];
const removeEdges2 = [
  [0, 3],
  [2, 1],
  [1, 0],
  [4, 2],
];

let output2 = test3(insertEdges2, removeEdges2);

console.log(output2);
