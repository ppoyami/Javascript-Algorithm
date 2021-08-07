const balancedBrackets = function (str) {
  if (str === '') return true;

  const open = ['(', '[', '{'];
  const close = [')', ']', '}'];

  const stack = [];

  for (let c of str) {
    if (open.includes(c)) {
      stack.push(c);
    } else if (close.includes(c)) {
      const open = stack.pop();
      if (!match(open, c)) return false;
    } else {
      continue;
    }
  }

  return stack.length === 0;
};

function match(open, close) {
  const brackets = open + close;
  if (brackets === '()') return true;
  if (brackets === '{}') return true;
  if (brackets === '[]') return true;
  return false;
}

let output3 = balancedBrackets('[(]{)}');
console.log(output); // --> false
