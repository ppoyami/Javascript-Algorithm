const input = require('../modules/fs');

const charCodeA = 'a'.charCodeAt(0);

const [T] = input().split(' ').map(Number);

// M: 동적으로 알파벳 생성하기
const alphabets = String.fromCharCode(
  ...new Array(T).fill(0).map((_, i) => charCodeA + i)
)
  .toUpperCase()
  .split('');

let template = input();

while ((number = input()?.split(' ')[0])) {
  const alphabet = alphabets.shift();
  template = template.replaceAll(alphabet, number);
}

const stack = [];

for (let c of template) {
  const number = parseInt(c);
  if (isNaN(number)) {
    const oper1 = stack.pop();
    const oper2 = stack.pop();
    const calced = calc(oper1, oper2, c);
    stack.push(calced);
  } else {
    stack.push(number);
  }
}
// Q: 자바스크립트는 6.20 이렇게 표시할 수 있는 방법이 없을까?
console.log(stack[0]);

function calc(oper1, oper2, commend) {
  switch (commend) {
    case '+':
      return parseFloat((oper2 + oper1).toFixed(2));
    case '-':
      return parseFloat((oper2 - oper1).toFixed(2));
    case '*':
      return parseFloat((oper2 * oper1).toFixed(2));
    case '/':
      return parseFloat((oper2 / oper1).toFixed(2));
    default:
      throw new Error(`${commend} 지원하지 않는 연산자`);
  }
}
