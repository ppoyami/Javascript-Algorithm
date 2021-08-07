const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const list = stdin.map(Number);
const checkList = [];

list.forEach(n => {
  const modulo = n % 42;
  if (!checkList.includes(modulo)) {
    checkList.push(modulo);
  }
});

console.log(checkList.length);
