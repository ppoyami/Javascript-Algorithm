// M: 옷을 안입는 경우도 존재한다. -> 3개의 타입 -> 안입은 경우 포함하여 4가지 타입으로 전환해주기
function solution(clothes) {
  const table = new Map();

  clothes.forEach(([_, type]) => {
    if (table.has(type)) {
      table.set(type, table.get(type) + 1);
    } else {
      table.set(type, 2); // 안입은 경우 포함하여 2로 초기 값을 정한다.
    }
  });
  // 둘 다 안 입을 수 없기 때문에 1의 경우의 수를 배제합니다.
  return [...table.values()].reduce((acc, cur) => (acc *= cur), 1) - 1;
}

// * Test case
console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);
console.log(
  solution([
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
);
