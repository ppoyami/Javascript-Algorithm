function solution(arr, target) {
  let delta;
  let deltaIndex;

  for (let i = 0; i < arr.length; i++) {
    delta = target - arr[i];

    if (delta === arr[i]) continue;

    deltaIndex = arr.indexOf(delta);

    if (deltaIndex === -1) continue;

    return [i, deltaIndex];
  }
  return false;
}

function better(arr, target) {
  const map = new Map();
  const hash = (target, e) => target - e;

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const key = hash(target, currentElement);

    if (map.has(currentElement)) {
      return [map.get(currentElement), i];
    }

    if (key === currentElement) continue;

    map.set(key, i);
  }
  return false;
}

const nums = [2, 7, 10, 19];
const duplicate = [3, 3, 2, 4];
const target = 9;
const target2 = 6;
console.log(solution(nums, target)); // [0, 1]
console.log(better(nums, target)); // [0, 1]
console.log(solution(duplicate, target2)); // [2, 3]
console.log(better(duplicate, target2)); // [2, 3]
