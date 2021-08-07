function improveBook(books, speeds) {
  const queue = [];
  const anwser = [];
  let flag = 0;
  let time = 1;

  // 1. 시간일자 배열 만들기 -> 먼저 끝나는 순서의 인덱스를 큐에 담을 수 있음
  const days = books.map((v, i) => {
    let quotient = Math.floor((100 - v) / speeds[i]);
    let remainder = (100 - v) % speeds[i];
    if (remainder > 0) quotient += 1;
    return quotient;
  });

  while (queue.length < books.length) {
    const complated = days
      .map(day => day - time)
      .reduce((acc, v, i) => {
        if (v === 0) return [...acc, i];
        return acc;
      }, []);

    queue.push(...complated);

    time++;
  }

  // 2. 큐에서 0을 꺼낸다. -> 0 앞에서 1을 검색한다. -> 1이 있으면 2를 검색한다...
  while (flag < queue.length) {
    let count = 0;
    let pivot = queue.indexOf(flag);
    let target = queue.slice(0, pivot);

    if (pivot !== -1) count++;

    while (target.indexOf(++flag) !== -1) {
      count++;
    }

    anwser.push(count);
  }

  return anwser;
}

books = [80, 30, 40, 55, 66, 21, 8, 25, 44, 77, 92];
speeds = [20, 30, 50, 15, 20, 50, 22, 25, 35, 23, 2];

let output = improveBook(books, speeds);
console.log(output); // [1, 3, 2]
