const input = require('../modules/fs');

const [V, E] = input().split(' ').map(Number);
const adjacencyList = new Map();

for (let i = 0; i < V; i++) {
  adjacencyList.set(i, []);
}

while ((edges = input()?.split(' ').map(Number))) {
  const [from, to] = edges;
  adjacencyList.get(from).push(to);
  adjacencyList.get(to).push(from);
}

const visitedList = new Map();
let isFriends = false;

function dfs(v, deeps = 0) {
  if (deeps === 4) return true;
  visitedList.set(v, true);
  const vertexes = adjacencyList.get(v);

  for (let vertex of vertexes) {
    if (!visitedList.has(vertex)) {
      const result = dfs(vertex, deeps + 1);
      if (result) return result;
    }
  }
}

for (let key of adjacencyList.keys()) {
  const results = dfs(key);
  if (results) {
    isFriends = true;
    break;
  }
  visitedList.clear();
}

console.log(isFriends ? 1 : 0);

// Map(5) {
//   0 => [ 1, 3 ],
//   1 => [ 0, 2, 4 ],
//   2 => [ 1, 3 ],
//   3 => [ 2, 0 ],
//   4 => [ 1 ]
// }
// 탐색이 5번 이상 이어지면 true 이다.
// n번째 재귀호출에서 발생한 true 값이 최초 호출까지 올라와서 반환되어야 한다.
// TODO: 반례가 찾기 (백준예제는 다 통과함)
