// 앞에서 num개 만큼 잘라 새로운 배열로 반환하기
function take(num, arr) {
  // [1, 2, 3]
  if (num === 0) return [];

  const head = [arr[0]];

  return head.concat(take(num - 1, arr.slice(1)));
}

console.log(take(3, [1, 2, 3, 4, 5]));
