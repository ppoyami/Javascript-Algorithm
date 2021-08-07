function solution(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (end - start > 1) {
    const guess = arr[middle];

    if (guess === target) return middle;

    if (guess < target) {
      start = middle;
      middle = Math.floor((start + end) / 2);
    } else {
      end = middle;
      middle = Math.floor((start + end) / 2);
    }
  }

  if (arr[start] < target) return end;
  if (arr[end] > target) return start;
}

const nums = [1, 2, 3, 4, 5];
const case2 = [1, 4, 5, 6];
const target = 3;

console.log(solution(nums, target)); // 2
console.log(solution(case2, target)); // 1
