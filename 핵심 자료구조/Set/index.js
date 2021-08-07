// *  1. 배열에서 중복 요소 제거하기
function unique(arr) {
  const set = new Set(arr);
  return [...set.values()];
}

let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Hare', ':-O'];

console.log(unique(values)); // `Hare, Krishna, :-O`만 출력되어야 합니다.
