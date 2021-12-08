function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let k = 0; k < i; k++) {
      // 0 ~ (i-1) 까지 배열을 순회하면서 자기보다 큰 숫자를 만나면, 그 자리에 삽입한다.
      if (arr[i] < arr[k]) {
        // i 인덱스 배열을 제거
        // k자리에 추가.
        arr.splice(k, 0, ...arr.splice(i, 1));
      }
    }
  }
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
console.log(arr);
