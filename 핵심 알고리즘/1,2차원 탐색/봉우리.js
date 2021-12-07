function solution(arr) {
  let count = 0;
  const isBong = (x, y) => {
    const top = (y > 0 && arr[x][y - 1]) || 0;
    const bottom = (y < arr[0].length - 1 && arr[x][y + 1]) || 0;
    const left = (x > 0 && arr[x - 1][y]) || 0;
    const right = (x < arr.length - 1 && arr[x + 1][y]) || 0;

    return arr[x][y] > Math.max(top, bottom, left, right);
  };

  arr.forEach((row, x) => {
    row.forEach((_, y) => {
      isBong(x, y) && count++;
    });
  });

  return count;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(arr));
