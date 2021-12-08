function solution(arr) {
  // 선택된 다음 요소들 중, 최소값을 찾아서 선택된 요소와 스왑한다.
  for (let i = 0; i < arr.length; i++) {
    // 선택된 요소: arr[i]
    let min = arr[i];
    let minIndex = i;
    let currentValue = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      // 최소 값을 찾는다.
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
    }
    // 최소 값 요소와 현재 요소를 스왑
    // 선택된 요소가 최소 값인 경우 지나간다.
    arr[i] = min;
    arr[minIndex] = currentValue;
  }

  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr)); // 오름차순 5 7 11 ..
