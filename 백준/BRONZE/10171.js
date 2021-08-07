const lines = [
  ['\\', '    ', '/', '\\'],
  [' ', ')', '  ', '(', " '", ')'],
  ['(', '  ', '/', '  ', ')'],
  [' ', '\\', '(', '__', ')', '|'],
];

let str = '';

for (let line of lines) {
  str += line.join('') + '\n';
}

console.log(str);
