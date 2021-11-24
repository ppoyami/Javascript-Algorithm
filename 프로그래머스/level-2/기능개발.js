function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

  let time = 0;
  while (days.length !== 0) {
    let count = 0;
    // 가장 처음 테스크가 완료될 상태이면, shift로 빼준다. (계속 반복)
    // ! 배열을 순회하면서 조작하기(인덱스가 바뀌기 때문에 인덱스 방식으로 접근하지 말기)
    while (time >= days[0] && days.length !== 0) {
      days.shift();
      // 빼준 수를 count에 저장
      count++;
    }
    if (count > 0) {
      answer.push(count);
    }
    time++;
  }

  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
