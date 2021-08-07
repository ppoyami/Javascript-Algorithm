const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const MINUTE = 60;

let [hours, minutes] = input().split(' ').map(Number);

const calcMinutes = minutes - 45;

minutes = calcMinutes > 0 ? calcMinutes : MINUTE + calcMinutes;

if (calcMinutes < 0) hours = hours === 0 ? 23 : hours - 1;

console.log(hours + ' ' + minutes);
