function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = Math.floor(arr.length / 2);
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot, arr.length);

  return merge(mergeSort(left), mergeSort(right)); // 반반 나누어서 merge의 인자로 전달하고 있음
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift()); // 더 작은 수를 결과에 넣어줍니다.
    } else {
      result.push(right.shift()); // 더 작은 수를 결과에 넣어줍니다.
    }
  }

  while (left.length) result.push(left.shift()); // 어느 한 배열이 더 많이 남았다면 나머지를 다 넣어줍니다.
  while (right.length) result.push(right.shift()); // 오른쪽도 마찬가지

  return result;
}

console.log(mergeSort([5, 2, 4, 7, 6, 1, 3, 8]));
