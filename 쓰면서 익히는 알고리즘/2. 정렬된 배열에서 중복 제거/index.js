const nums = [0, 0, 0, 1, 2, 2, 2];
const nums2 = [0, 0, 0, 0, 0, 1, 1, 1];

function solution(arr) {
  let prev;
  let current;
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    current = arr[i];

    if (prev !== current) {
      prev = current;
      arr[cnt++] = current;
    }
  }
  arr.splice(cnt, arr.length - cnt);
  return cnt;
}

console.log(solution(nums)); // 3
console.log(solution(nums2)); // 3

console.log(nums); // [0, 1, 2]
console.log(nums2); // [0, 1, 2]
