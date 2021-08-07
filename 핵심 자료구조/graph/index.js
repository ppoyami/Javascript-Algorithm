// *  Graph using map,
class Graph {
  constructor() {
    this.nodes = new Map();
  }
  addNode(node) {
    this.nodes.set(node, []);
  }
  addEdge(source, destination) {
    this.nodes.get(source).push(destination);
    this.nodes.get(destination).push(source);
  }

  removeNode(node) {
    let neighbors = this.nodes.get(node);

    for (let neighbor of neighbors) {
      const adjacencyListOfNeighbor = this.nodes.get(neighbor);
      const filtered = adjacencyListOfNeighbor.filter(
        neighborNode => neighborNode !== node
      );
      this.nodes.set(neighbor, filtered);
    }

    this.nodes.delete(node);
  }

  removeEdge(source, destination) {
    const filterdSourceNeibors = this.nodes
      .get(source)
      .filter(node => node !== destination);

    const filterdDestinationNeibors = this.nodes
      .get(destination)
      .filter(node => node !== source);

    this.nodes.set(source, filterdSourceNeibors);
    this.nodes.set(destination, filterdDestinationNeibors);
  }

  depthFirstSearch(startingNode) {
    let visitedNode = {};
    this.dfsRecursion(startingNode, visitedNode);
  }

  dfsRecursion(currentNode, visitedNode) {
    visitedNode[currentNode] = true;

    console.log(currentNode);

    let adjacencyListOfCurrentNode = this.nodes.get(currentNode);

    for (let node of adjacencyListOfCurrentNode) {
      if (!visitedNode[node]) this.dfsRecursion(node, visitedNode);
    }
  }

  breadthFirstSearch(startingNode) {
    let visitedNode = {};
    let queue = [];

    visitedNode[startingNode] = true;
    queue.push(startingNode);

    while (queue.length > 0) {
      const currentNode = queue.shift();

      console.log(currentNode);

      const adjacencyListOfCurrentNode = this.nodes.get(currentNode);

      for (let node of adjacencyListOfCurrentNode) {
        if (!visitedNode[node]) {
          visitedNode[node] = true;
          queue.push(node);
        }
      }
    }
  }
  display() {
    for (let [node, adjacencyList] of this.nodes) {
      console.log(`${node}: ${adjacencyList}`);
    }
  }
}

// ! test
let graph = new Graph();

// STEP 1 - intially nodes is empty
// graph.display()

// STEP 2 - add nodes
graph.addNode('A');
graph.addNode('B');
graph.addNode('D');
graph.addNode('C');
// graph.display()

// STEP 3 - add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
// graph.display()

// STEP 4 - remove node
// graph.display()
// console.log("-------")
// graph.removeNode("D")
// graph.display()

// STEP 5 - remove edge
/*
Make sure you comment STEP 4 before uncomment this STEP 5
because we removed node "D"
and in this STEP 5 we are removing edge with node "D"
*/
// graph.display()
// console.log("-------")
// graph.removeEdge("A","D")
// graph.display()

// STEP 6 - depth-first-search
console.log('depth-first-search');
graph.depthFirstSearch('A');
// STEP 7 - breadth-first-search
console.log('breadth-first-search');
graph.breadthFirstSearch('A');

// * Adjacency Matrix
// directed graph (방향 그래프)
// unweighted (비가중치)
// adjacency matrix (인접 행렬)
// 이해를 돕기 위해 기존 배열의 인덱스를 정점으로 사용합니다 (0, 1, 2, ... --> 정점)
class GraphWithAdjacencyMatrix {
  //graph의 constructor를 구현합니다.
  constructor() {
    this.matrix = [];
  }
  //! col, row를 +1 증가
  addVertex() {
    const currentLength = this.matrix.length;

    for (let i = 0; i < currentLength; i++) {
      // ? col + 1 증가 [[0, 0], [0, 0]] -> [[0, 0, 0], [0, 0, 0]]
      this.matrix[i].push(0);
    }
    // ? row + 1 증가 [[0, 0, 0], [0, 0, 0]] -> [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    this.matrix.push(new Array(currentLength + 1).fill(0));
  }

  /* 
    adjMatrix.addVertex();
    adjMatrix.addVertex();
    adjMatrix.addVertex();

							TO
		 	  	 0  1  2
		  	0	[0, 0, 0],
	FROM 	1	[0, 0, 0],
		  	2	[0, 0, 0]
 */

  //! vertex를 탐색합니다.
  //this.matrix에 vertex가 존재한다면 true를 리턴하고, 반대의 경우라면 false를 리턴합니다.
  contains(vertex) {
    return !!this.matrix[vertex]; // ? undefined(falsy,) -> true(boolean) -> false(boolean)
  }

  //! vertex와 vertex를 이어주는 edge를 추가합니다.
  addEdge(from, to) {
    const currentLength = this.matrix.length - 1;
    // 두 가지 인자 중, 어느 하나라도 undefined라면, 리턴합니다.
    if (from === undefined || to === undefined) {
      console.log('2개의 인자가 있어야 합니다.');
      return;
    }
    // from vertex와 to vertex가 전체 그래프의 범위를 벗어난다면, 리턴합니다.
    if (from > currentLength || to > currentLength || from < 0 || to < 0) {
      console.log('범위가 매트릭스 밖에 있습니다.');
      return;
    }
    // this.matrix[from][to]의 값을 1로 바꿔줘서 edge로 연결이 되어 있음을 표시합니다.
    this.matrix[from][to] = 1;
  }

  // ! from vertex와 to vertex 사이에 edge를 가지고 있는지 여부를 판단합니다.
  hasEdge(from, to) {
    return !!this.matrix[from][to]; // 1 -> true, 0 -> false
  }
  // ! from vertex와 to vertex 사이에 관련이 없다면, edge를 제거 합니다.
  removeEdge(from, to) {
    const currentLength = this.matrix.length - 1;
    // 두 가지 인자 중, 어느 하나라도 undefined라면, 리턴합니다.
    if (from === undefined || to === undefined) {
      console.log('2개의 인자가 있어야 합니다.');
      return;
    }
    // from vertex와 to vertex가 전체 그래프의 범위를 벗어난다면, 리턴합니다.
    if (from > currentLength || to > currentLength || from < 0 || to < 0) {
      console.log('범위가 매트릭스 밖에 있습니다.');
      return;
    }
    // this.matrix[from][to]의 값을 0으로 바꿔줘서 관련이 없음을 표시합니다.
    this.matrix[from][to] = 0;
  }
}

// * Adjacency Lists
// undirected graph (무향 그래프)
// adjacency list (인접 리스트)
class GraphWithAdjacencyList {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    // 넘겨받은 인자(정점)은 키가 되며, 빈 배열을 값으로 할당합니다.
    // 이미 존재하는 정점이라면, 덮어 씌워지지 않아야 합니다.
    if (this.vertices[vertex]) return;

    this.vertices[vertex] = [];
  }

  contains(vertex) {
    // 인자로 넘겨받은 정점의 존재여부를 반환합니다.
    return !!this.vertices[vertex];
  }

  addEdge(fromVertex, toVertex) {
    // - fromVertex의 인접 리스트에 toVertex를 추가하고
    // - toVertex의 인접 리스트에 fromVertex를 추가합니다.
    // 넘겨받은 2개의 정점 모두 존재하는 정점이어야 합니다.

    if (!this.contains(fromVertex) || !this.contains(toVertex)) {
      return;
    }

    if (!this.hasEdge(fromVertex, toVertex)) {
      this.vertices[fromVertex].push(toVertex);
      this.vertices[toVertex].push(fromVertex);
    }
  }

  hasEdge(fromVertex, toVertex) {
    // 만약 정점(fromVertex)이 존재하지 않는다면
    if (!this.contains(fromVertex)) {
      // false를 반환합니다
      return false;
    }
    // 존재한다면 해당 정점의 리스트에 toVertex가 포함되어있는지 반환합니다
    return !!this.vertices[fromVertex].includes(toVertex);
  }

  removeEdge(fromVertex, toVertex) {
    // 인자로 넘겨받은 두 정점이 모두 존재한다면
    // - fromVertex의 인접 리스트에 있는 toVertex를 삭제하고
    // - toVertex의 인접 리스트에 있는 fromVertex를 삭제합니다.

    if (!this.contains(fromVertex) || !this.contains(toVertex)) {
      return;
    }

    if (this.hasEdge(fromVertex, toVertex)) {
      let index = this.vertices[fromVertex].indexOf(toVertex);
      this.vertices[fromVertex].splice(index, 1);
      this.vertices[toVertex].splice(index, 1);
    }
  }

  removeVertex(vertex) {
    // 인자로 넘겨받은 정점(A)이 존재한다면
    // - 이 정점(A)을 삭제함은 물론,
    // - 다른 모든 정점들의 리스트를 순회하며 넘겨받은 정점(A)과 이어져 있는 간선을 제거합니다
    if (this.contains(vertex)) {
      for (let v in this.vertices) {
        const index = this.vertices[v].indexOf(vertex);
        if (index !== -1) this.vertices[v].splice(index, 1);
      }
      delete this.vertices[vertex];
    }
  }
}
