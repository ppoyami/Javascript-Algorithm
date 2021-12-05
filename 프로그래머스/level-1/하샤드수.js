function solution(x) {
  // 자릿수 합
  let input = x;
  let delta = 0;
  while (x > 0) {
    delta += x % 10;
    x = Math.floor(x / 10);
  }
  return input % delta === 0;
}

console.log(solution(11));
