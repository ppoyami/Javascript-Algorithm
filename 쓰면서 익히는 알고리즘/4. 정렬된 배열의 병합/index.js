const source = [3, 6, 8, 10, 12];
const target = [4, 7, 9, 11, 13];

function solution(target, source) {
  const start = 0;

  if (target[0] > source[start]) target.splice(0, 0, source.shift());

  for (let i = 1; i < target.length; i++) {
    const prev = target[i - 1];
    const current = target[i];
    const e = source[start];

    if (prev <= e && e < current) {
      const t = source.shift();
      target.splice(i, 0, t);
    }
  }

  if (source.length) target = [...target, ...source];
}

solution(target, source);
// * 3, 4, 6, 7, 8, 9, 10, 11, 12, 13
console.log(target);
