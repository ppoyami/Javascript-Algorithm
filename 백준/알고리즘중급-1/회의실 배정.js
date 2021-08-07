// 최적으로 선택: 강의 시간 오름차순 -> 가장 적은 강의부터 선택
// 적절성 검사: 이전 값 start, end 범위에 포함되지 않아야 한다.
// 해답: 적절성 검사 완료 -> 카운트 증가하기
const input = require('./module');

const [N] = input().split(' ').map(Number);
const timeTables = [];

while ((time = input()?.split(' '))) timeTables.push(time.map(Number));

// M: 그리디 알고리즘: 걸리는 시간이 아니고, 일찍 끝나는 순서대로 정렬하기
const compareFn = (prev, next) => {
  const [prevStart, prevEnd] = prev;
  const [nextStart, nextEnd] = next;
  if (prevEnd === nextEnd) {
    return prevStart - nextStart;
  }
  return prevEnd - nextEnd;
};

timeTables.sort(compareFn);

let [_, prevEnd] = timeTables.shift();

const checkValidation = time => {
  const [start, end] = time;
  if (prevEnd > start) return false;
  prevEnd = end;
  return true;
};

const count = timeTables.filter(checkValidation).length;
console.log(count + 1);
