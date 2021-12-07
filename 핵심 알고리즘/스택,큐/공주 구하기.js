// TODO:  큐 자료구조로 다시 풀어보기
function solution(n, k) {
  let arr = new Array(n).fill(0).map((_, i) => i + 1);
  while (arr.length > 1) {
    const targetIndex = k % arr.length === 0 ? k - 1 : (k % arr.length) - 1;
    const left = arr.slice(0, targetIndex);
    const right = arr.slice(targetIndex + 1);
    arr = [...right, ...left];
  }

  return arr[0];
}
console.log(solution(8, 3));
