function solution(s) {
  const open = [];

  for (let c of s) {
    if (c === '(') open.push(c);
    else {
      if (open.length !== 0) open.pop();
      else return false;
    }
  }

  return open.length === 0 ? true : false;
}

console.log(solution('(())()'));
console.log(solution(')()('));
