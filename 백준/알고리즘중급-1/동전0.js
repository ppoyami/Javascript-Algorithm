const input = require('./module');

// N 은 동전의 종류 개수, K는 총합
let [N, K] = input().split(' ').map(Number);
const coins = [];
let count = 0;

// 코인 배열(오름차순)
while ((coin = input()?.split(' ').map(Number))) {
  coins.push(coin);
}

// 그리디 -> 가장 높은 단위의 코인부터 총합에서 차감
while (K > 0) {
  const coin = coins.pop();
  const portion = Math.floor(K / coin);
  if (portion > 0) {
    K -= coin * portion;
    count += portion;
  }
}

console.log(count);
