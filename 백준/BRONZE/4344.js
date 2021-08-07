const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  let LIMIT = stdin.length - 1; // ! [ '1 2', '3 4', '' ]
  return () => (LIMIT > line ? stdin[line++] : undefined);
})();

const [T] = input().split(' ').map(Number);
const results = [];
const sum = scores => scores.reduce((acc, cur) => (acc += cur), 0);

const getAverage = scores => {
  return sum(scores) / scores.length;
};

const countMoreThen = (scores, average) => {
  let count = 0;
  scores.forEach(score => {
    if (score > average) count++;
  });
  return count;
};
// M: toFixed() 로 소수점 반올림
while ((scores = input()?.split(' ').map(Number).slice(1))) {
  const average = getAverage(scores);
  const stu = countMoreThen(scores, average);
  const result = (stu / scores.length) * 100;
  results.push(result.toFixed(3));
}

results.forEach(result => console.log(`${result}%`));
