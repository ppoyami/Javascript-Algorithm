const input = require('../modules/fs');

const [V, E] = input().split(' ').map(Number);
const adjacencyList = new Map();

// 버텍스를 추가
for (let i = 0; i < V; i++) {
  adjacencyList.set(i, []);
}

// 간선을 추가
while ((edges = input()?.split(' ').map(Number))) {
  const [from, to] = edges;
  adjacencyList.get(from).push(to);
  adjacencyList.get(to).push(from);
}

// 방문목록 자료구조
const visitedList = new Map();
let isFriends = false;

// 깊이우선탐색
function dfs(v, deeps = 0) {
  if (deeps === 4) return true;
  visitedList.set(v, true);
  const vertexes = adjacencyList.get(v);

  for (let vertex of vertexes) {
    if (!visitedList.has(vertex)) {
      const result = dfs(vertex, deeps + 1); // M: n번째 재귀호출에서 발생한 true 값이 최초 호출까지 올라와서 반환되어야 한다.
      visitedList.delete(vertex); // M: 깊이우선탐색이 끝난 노드는 다시 지워준다.
      if (result) return result;
    }
  }
}

// 탐색의 시작점을 순회한다. 1탐색, 2탐색...
for (let key of adjacencyList.keys()) {
  const results = dfs(key);

  if (results) {
    // * 각 탐색의 결과중에 true가 있다면,(5개의 이어지는 간선이 존재)
    isFriends = true; // * 반복문을 빠져나온다.
    break;
  }
  visitedList.delete(key); // ! key에 대한 방문목록은 지워지지 않는다.
}

console.log(isFriends ? 1 : 0); // 최종 출력

// Map(5) {
//   0 => [ 1, 3 ],
//   1 => [ 0, 2, 4 ],s
//   2 => [ 1, 3 ],
//   3 => [ 2, 0 ],
//   4 => [ 1 ]
// }
// 탐색이 5번 이상 이어지면 true 이다.
// n번째 재귀호출에서 발생한 true 값이 최초 호출까지 올라와서 반환되어야 한다.
// 0 - 1 - 2 - 3, 3에서 반환이 일어나서, 1번 스택까지 반환이 된 상황에서.
// 0 - 1 - 4 - 2 - 3, // 2, 3 버텍스도 탐색이 가능해야 한다.
