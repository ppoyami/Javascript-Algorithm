const input = require('../modules/fs');
const { go, curry, reduce } = require('../modules/functions');

// 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다.
// 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
const S = input().toUpperCase();
// 사전식으로 누적하는 함수
const createDict = (acc, cur) => {
  if (!acc[cur]) {
    acc[cur] = 1;
  } else {
    acc[cur]++;
  }
  return acc;
};
// 객체의 값 중 가장 큰 값의 키 값을 찾는 함수
const findMaxAndDuplication = dict => {
  console.log(dict);
  let max = null;
  let target = null;
  let isDuplicate = false;

  for (let alpabet of Object.keys(dict)) {
    const count = dict[alpabet];
    if (!max || max < count) {
      max = count;
      target = alpabet;
      isDuplicate = false;
    } else if (max === count) {
      isDuplicate = true;
    }
  }
  return [target, isDuplicate];
};
// 출력함수
const log = results => {
  const [target, isDuplicate] = results;
  if (isDuplicate) console.log('?');
  else console.log(target);
};

// Q: (a) => f(a)이어야 하는 이유 생각하기
// A: 이전 acc를 받아야 하기 때문에

// M: 리터럴 문자열은 이터러블이 아니다. new String으로 이터러블한 문자열을 생성한다.
go(
  new String(S),
  // Q: 인자가 여러개인 함수는 curry를 어떻게 사용해야 할까?
  S => reduce(createDict, {}, S),
  obj => findMaxAndDuplication(obj),
  results => log(results)
);
