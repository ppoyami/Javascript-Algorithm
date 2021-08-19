const input = require('../modules/fs');

const [N, M] = input().split(' ').map(Number);

// TODO: 재귀 방식으로 풀기(문자열 누적 방식)

function recusive(arr, count) {
  let result = [];
  if (count === 2) {
  }
  arr.forEach((fixed, idx, origin) => {
    const remains = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const tails = recusive(remains, count - 1); // base case에서 2개 수열 리스트를 반환
    const numbers = tails.map(tail => [fixed, ...tail]); // 수열 리스트에 fixed 된 수를 앞에 붙임
    result.push(numbers); // 최종적인 수열을 담는다.
  });
  return result; // 반환
}

const range = new Array(N).fill(0).map((_, i) => i + 1);

console.log(recusive(range, M));
