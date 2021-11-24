function solution(priorities, location) {
  // location 정보를 요소에 추가하기
  priorities = priorities.map((p, location) => ({ value: p, location }));
  let count = 0;
  // 아래의 과정을 반복한다.
  while (true) {
    // 1 ~ 끝까지 자기 자신보다 큰 숫자가 있는 지 판별하기
    const target = priorities.shift();
    if (priorities.some(el => el.value > target.value)) {
      // 크다면 shift, push(뒤로보내기)
      priorities.push(target);
    } else {
      // 없다면, shift(인쇄하기)
      count++;
      // location에 해당하는 요소가 인쇄된다면, 리턴하기 (탈출조건)
      if (target.location === location) {
        break;
      }
    }
  }
  return count;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
