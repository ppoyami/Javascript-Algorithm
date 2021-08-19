const input = require('../modules/fs');

const list = [];

while ((n = input())) {
  const height = parseInt(n);
  if (isNaN(height)) break;

  list.push(height);
}

const add = (a, b) => a + b;
const sum = list.reduce(add, 0);

const diff = sum - 100;

outer: for (let i = 0; i < list.length - 1; i++) {
  for (let j = i + 1; j < list.length; j++) {
    if (list[i] + list[j] === diff) {
      console.log(
        [...list.slice(0, i), ...list.slice(i + 1, j), ...list.slice(j + 1)]
          .sort((a, b) => a - b)
          .reduce((acc, cur) => (acc += cur + '\n'), '')
          .slice(0, -1)
      );
      break outer;
    }
  }
}
