function solution(str) {
  const stack = [];
  const answers = [];
  for (let c of str) {
    if (c === '(') stack.push('(');
    else if (c === ')') stack.pop();
    else if (stack.length === 0) answers.push(c);
  }

  return answers;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
