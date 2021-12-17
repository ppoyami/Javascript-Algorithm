// n번째 피보나치 수 구하기 0 1 1 2
function fibo(n) {
  if (n <= 2) return 1;

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(7));
