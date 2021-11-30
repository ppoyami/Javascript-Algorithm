function solution(n) {
  const fib = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fib.push((fib[i - 1] + fib[i - 2]) % 1234567);
  }

  return n > 3 ? fib[fib.length - 1] : fib[n];
}

console.log(solution(7));
