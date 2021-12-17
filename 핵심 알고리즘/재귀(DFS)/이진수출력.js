function solution(x, acc = '') {
  if (x === 1 || x === 0) return (acc += x).split('').reverse().join('');

  acc += x % 2;

  return solution(Math.floor(x / 2), acc);
}

console.log(solution(11));
console.log(solution(17));
