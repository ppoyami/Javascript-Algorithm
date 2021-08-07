const input = require('./module');

const [N, M] = input().split(' ').map(Number);

const range = new Array(N).fill(0).map((_, i) => i + 1);
// TODO: 재귀 방식으로 풀기(문자열 누적 방식)
range.forEach((fixed, idx, origin) => {
  const remains = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
  console.log(remains);
});
