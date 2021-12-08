function solution(arr) {
  // 음수만 앞으로 이동
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr.splice(pos, 0, arr[i]);
      arr.splice(i + 1, 1);
      pos++;
    }
  }

  return arr;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
