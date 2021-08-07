const { SSL_OP_TLS_ROLLBACK_BUG } = require('constants');
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  let LIMIT = stdin.length - 1; // ! [ '1 2', '3 4', '' ]
  return () => (LIMIT > line ? stdin[line++] : undefined);
})();

const [T] = input().split(' ').map(Number);

const stack = () => {
  const array = [];
  return (command, value) => {
    switch (command) {
      case 'push':
        array.push(value);
        break;
      case 'pop':
        if (!array.length) return -1;
        else return array.pop();
      case 'size':
        return array.length;
      case 'empty':
        const empty = array.length ? 0 : 1;
        return empty;
      case 'top':
        if (!array.length) return -1;
        else return array[array.length - 1];
    }
  };
};

const stackImpl = stack();
let answer = '';

while ((line = input()?.split(' '))) {
  let [command, value] = line;
  if (value) value = Number(value);
  const result = stackImpl(command, value);
  if (result !== undefined) answer += result + '\n';
}

console.log(answer.slice(0, -1));
