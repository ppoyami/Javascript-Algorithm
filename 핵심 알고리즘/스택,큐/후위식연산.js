const isNumber = c => parseInt(c, 10);

const calc = (op1, oper, op2) => {
  switch (oper) {
    case '+':
      return op1 + op2;
    case '-':
      return op1 - op2;
    case '/':
      return op1 / op2;
    case '*':
      return op1 * op2;
    default:
      return false;
  }
};

function solution(str) {
  const stack = [];
  for (let c of str) {
    const number = isNumber(c);
    if (!isNaN(number)) {
      stack.push(number);
    } else {
      const op2 = stack.pop();
      const op1 = stack.pop();
      const result = calc(op1, c, op2);
      stack.push(result);
    }
  }

  return stack.pop();
}

let str = '352+*9-';
console.log(solution(str));
