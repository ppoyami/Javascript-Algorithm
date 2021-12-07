const OPEN = '(';
const CLOSE = ')';

const isLazer = prev => prev === OPEN;

function solution(str) {
  const stack = [];
  let count = 0;

  str.split('').forEach((c, idx, arr) => {
    if (c === OPEN) stack.push(c);
    else if (isLazer(arr[idx - 1])) {
      // Lazer 일 때,
      stack.pop();
      count += stack.length;
    } else {
      // 쇠막대기의 끝일 때,
      stack.pop();
      count += 1;
    }
  });

  return count;
}

let a = '()(((()())(())()))(())';
console.log(solution(a)); // 17
