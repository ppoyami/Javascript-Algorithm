// constrains
// 1.작은 숫자가 앞으로 오도록
// 2.삽입정렬
const insertionSort_1 = function (arr) {
  // 정렬된 배열을 저장하는 변수,
  let temp = [arr[0]];
  // arr를 순회 - 2번 째 부터 꺼내기
  for (let e of arr.slice(1)) {
    // 정렬된 배열에서 알맞은 위치를 찾아 삽입
    let flag = true;
    for (let i = 0; i < temp.length; i++) {
      // 자기보다 큰 숫자이면.. 해당 자리에 삽입한다.
      if (e < temp[i]) {
        temp = [...temp.slice(0, i), e, ...temp.slice(i)];
        flag = false;
        break;
      }
    }
    if (flag) temp.push(e); // 자기보다 큰 숫자를 발견하지 못했으면 뒤에 삽입한다.
  }

  return temp;
};

console.log(insertionSort_1([1, 2, 5, 6, 4, 3]));

const insertionSort_2 = list => {
  const len = list.length;

  for (let i = 1; i < len; i++) {
    if (list[i] < list[0]) {
      // 첫 번째 요소보다 작을 경우
      list.unshift(list.splice(i, 1)[0]); // 첫 번째로 이동시키고
    } else if (list[i] > list[i - 1]) {
      // 정렬이 되어 있는 상태
      continue; // 넘어가고
    } else {
      // 정렬이 되어 있지 않아서 삽입 위치를 검색해야 함
      for (let j = 1; j < i; j++) {
        // MEMO: 삽입위치 찾는 조건(정렬이 되어 있고, 자기보다 큰 수)
        if (list[j] >= list[j - 1] && list[i] <= list[j]) {
          list.splice(j, 0, list.splice(i, 1)[0]);
        }
      }
    }
  }
  return list;
};

console.log(insertionSort_2([1, 2, 5, 6, 4, 3]));
