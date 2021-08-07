const LSCS = function (arr) {
  const subArray = [];
  // 연속 부분배열만들기
  arr.forEach((fixed, idx, origin) => {
    subArray.push([fixed]);
    const rest = origin.slice(idx);
    // 1, [2, 3] -> [1,2] [1,2,3]
    for (let i = 1; i <= rest.length; i++) {
      subArray.push([fixed].concat(rest.slice(0, i)));
    }
  });
  // 부분배열 중 가장 큰 값 구하기
  const sumArray = subArray.map(toObj);
  // 인덱스 구하기
  return Math.max(...sumArray);
};

function compareFn(a, b) {
  return b.sum - a.sum;
}

function toObj(arr) {
  return arr.reduce((acc, cur) => (acc += cur), 0);
}

// TODO: 하나가 더 많게 나옴
output = LSCS([1, 2, 3, -4]);
console.log(output); // --> 6 ([1, 2, 3])
