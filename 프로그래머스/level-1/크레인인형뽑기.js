function solution(board, moves) {
  const box = [];
  let count = 0;
  const stacks = board.reduce((acc, row) => {
    for (let col = 0; col < row.length; col++) {
      if (row[col] === 0) continue;

      if (!acc[col]) acc[col] = [row[col]];
      else acc[col].push(row[col]);
    }
    return acc;
  }, {});

  moves.forEach(m => {
    const poped = stacks[m - 1] ? stacks[m - 1].shift() : undefined;
    if (poped) {
      if (box[box.length - 1] === poped) {
        box.pop();
        count += 2;
      } else {
        box.push(poped);
      }
    }
  });

  return count;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves)); // 4
