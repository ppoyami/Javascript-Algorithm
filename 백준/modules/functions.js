const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

const reduce = (f, acc, iter) => {
  if (!iter) {
    // iter 매개변수가 비어있다면, acc = iter가 된다.
    iter = acc[Symbol.iterator](); // acc -> iter 변수에 옮긴다음
    acc = iter.next().value; // 하나를 순회하여, 그 값을 담는다.(iter에는 한 번 순회한 상태가 남아있게 됨)
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const go = (...args) => reduce((acc, f) => f(acc), args);

const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

const curry =
  f =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

module.exports = {
  map,
  filter,
  reduce,
  go,
  pipe,
  curry,
};
