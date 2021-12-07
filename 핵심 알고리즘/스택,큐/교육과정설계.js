function solution(a, b) {
  const queue = a.split(''); // [C, B, A]
  b.split('').forEach(lec => {
    if (queue.includes(lec)) {
      const requiredLecture = queue.shift();
      if (lec !== requiredLecture) return 'NO';
    }
  });

  return 'YES';
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
