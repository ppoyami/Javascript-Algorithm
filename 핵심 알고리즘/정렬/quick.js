//MEMO: 퀵 정렬의 규칙

//* 1. 기준이 되는 숫자를 고른다(가운데)
//* 2. 기준이 되는 숫자를 가장 오른쪽으로 보낸다.
// 목표는 왼쪽에는 기준보다 작은 수가, 기준보다 큰 수가 나오도록 하는 것임
//* 3. 기준이 되는 가장 오른쪽 숫자를 제외하고, 가장 왼쪽과 오른쪽 수를 조작한다.
// 왼쪽 수: 기준보다 작으면 다음으로 넘어가고, 크면 가만히 있는다.
// 오른쪽 수: 기준보다 크면 다음으로 넘어가고, 작으면 가만히 있는다.
// ! 왼쪽이 기준보다 크고 && 오른쪽이 기준보다 작으면, 서로 스왑한다.
//* 4. 위 과정을 반복하다가, 왼쪽 오른쪽 수의 인덱스가 동일해지면 (만나면) 그 인덱스인 수와 기준인 수를 스왑한다.
// 결과로 목표에 도달함 [기준 보다 작음 ... 기준 ... 기준 보다 큼]
//* 5. 기준 보다 작음(왼쪽 배열), 기준 보다 큼(오른쪽 배열) 나누어 재귀적으로 퀵 정렬을 해준다.

function partition(array, left, right, pivotIndex) {
  let temp;
  let pivot = array[pivotIndex];

  while (left <= right) {
    while (array[left] < pivot) left++; // 왼쪽이 기준보다 클 때 탈출
    while (array[right] > pivot) right--; // 오른쪽이 기준보다 작을 때 탈출

    if (left <= right) {
      // 스왑조건을 만족한 상태
      temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }

  temp = array[left];
  array[left] = array[pivotIndex];
  array[pivotIndex] = temp;

  return left; // 기준 값이 들어있는 인덱스
}

function quickSort(array, left = 0, right = array.length - 1) {
  let pivotIndex = right;
  pivotIndex = partition(array, left, right - 1, pivotIndex); // ! pivotIndex를 기준으로 [작은 수] [큰 수] 가 나뉜다.

  // TODO: 재귀 부분 이해하기
  if (left < pivotIndex - 1) quickSort(array, left, pivotIndex - 1); // 기준 왼쪽 부분 재귀
  if (pivotIndex + 1 < right) quickSort(array, pivotIndex + 1, right); // 기준 오른쪽 부분 재귀

  return array;
}

console.log(quickSort([4, 1, 7, 6, 3, 8, 2, 5])); // [1,2,3,4,5,6,7,8]

const quickSort2 = function (arr) {
  if (arr.length <= 1) return arr;

  const left = [];
  const right = [];
  const sorted = [];
  const pivot = arr.pop();
  const length = arr.length;

  for (let e of arr) {
    if (e <= pivot) {
      left.push(e);
      continue;
    }
    right.push(e);
  }

  return sorted.concat(quickSort(left), pivot, quickSort(right));
};

console.log(quickSort2([4, 1, 7, 6, 3, 8, 2, 5])); // [1,2,3,4,5,6,7,8]
