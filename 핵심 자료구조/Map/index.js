// * 1. 애너그램으로 만든 단어 없애기 - 한 단어는 남아 있어야 함
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
const aclean = arr => {
  const map = new Map();

  for (let str of arr) {
    const key = str.toLowerCase().split('').sort().join('');
    map.set(key, str); // 같은 키에 set 되면 덮어쓴다.
  }
  return Array.from(map.values());
};

console.log(aclean(arr)); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.
