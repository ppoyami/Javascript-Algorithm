// MEMO: fs 모듈 사용시 런타임 에러(EACCSS) 발생했음
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(x, y) {
  if (x > 0) {
    if (y > 0) {
      console.log(1);
    } else {
      console.log(4);
    }
  } else {
    if (y > 0) {
      console.log(2);
    } else {
      console.log(3);
    }
  }
}

let input = [];

rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const x = input[0];
  const y = input[1];

  solution(x, y);
  process.exit();
});
