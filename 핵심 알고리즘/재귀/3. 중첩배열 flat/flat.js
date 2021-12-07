function flat(arr) {
  let result = [];

  for (e of arr) {
    if (Array.isArray(e)) {
      result = [...result, ...flat(e)];
    } else {
      result.push(e);
    }
  }

  return result;
}

console.log(flat([1, 2, [3, [4, 5, 6, [7, 8]]]]));
