function solution(size, tesks) {
  let cache = tesks.slice(0, size).reverse();

  for (let el of tesks.slice(size)) {
    const index = cache.findIndex(v => v === el);
    if (index !== -1) {
      // hit
      cache = [...cache.slice(0, index), ...cache.slice(index + 1)];
    } else {
      // miss
      cache.pop();
    }
    cache.unshift(el);
  }

  return cache;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
