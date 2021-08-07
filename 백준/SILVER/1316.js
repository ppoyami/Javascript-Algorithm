const input = require('../modules/fs');
const F = require('../modules/functions');

const [T] = input();

let count = 0;

while ((str = input())) {
  if (isGroup(str)) count++;
}

function isGroup(str) {
  const group = [];
  let prev;

  for (let c of str) {
    if (!group.includes(c)) {
      // 처음 들어온 문자
      group.push(c);
    } else if (group.includes(c) && prev !== c) {
      // 그룹에 존재하면서, 이전 문자와 다를 때,
      return false;
    }
    prev = c;
  }
  return true;
}

console.log(count);
