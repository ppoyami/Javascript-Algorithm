function solution(arr) {
  const ch = Array.from({ length: arr.length }, () => 0);
  const total = arr.reduce((acc, cur) => (acc += cur), 0);
  let answer = false;

  const DFS = I => {
    if (I === arr.length) {
      // base case -> 부분집합을 완성
      const set = [];
      for (let i = 0; i < ch.length; i++) {
        if (ch[i] === 1) set.push(arr[i]);
      }
      const restSet = arr.filter(e => !set.includes(e));
      // TODO: if. set에 부분집합, 나머지 집합이 서로소 집합인지 확인

      // * if. set 부분집합 나머지 집합의 합이 같은 지 확인
      const setTotal = set.reduce((acc, cur) => (acc += cur), 0);
      if (total - setTotal === setTotal) {
        return true;
      }
    } else {
      // recusive case
      // left
      ch[I] = 1;
      answer = DFS(I + 1);
      if (answer) return answer;
      // right
      ch[I] = 0;
      answer = DFS(I + 1);
      if (answer) return answer;
    }
  };

  const result = DFS(0);
  return result ? 'YES' : 'NO';
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
