function solution(n) {
  const ch = Array.from({ length: n + 1 }, () => 0);

  const DFS = L => {
    if (L === n + 1) {
      // base case
      let temp = '';
      for (let i = 1; i < ch.length; i++) {
        if (ch[i] === 1) temp += i + ' ';
      }
      temp.length > 0 && console.log(temp);
    } else {
      // recusive case
      // left
      ch[L] = 1;
      DFS(L + 1);
      // right
      ch[L] = 0;
      DFS(L + 1);
    }
  };

  DFS(1);
}

solution(3);
