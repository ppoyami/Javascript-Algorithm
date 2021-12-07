const getCombinations = function (arr, selectNumber) {
  const results = [];

  if (arr.length < selectNumber) return []; // ? [1, 2] 에서 3개를 뽑는 조합은 [] 이다.(종료조건)
  if (selectNumber === 1) return arr.map(value => [value]); // ! 가장 작은 문제: [1, 2] -> [[1], [2]](베이스케이스)

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // ! 재귀 함수의 인자, 가장 작은 문제로 수렴하는 문제
    // const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // * 순열 구하기
    const combinations = getCombinations(rest, selectNumber - 1); // ! fixed 를 제외한 나머지에서, 조합을 계산(재귀 호출)

    const attached = combinations.map(combination => [fixed, ...combination]); // ! combinations이 빈 배열이면, results에 아무것도 추가되지 않는다.
    results.push(...attached);
  });

  return results;
};

const example = [1, 2, 3, 4];
const result = getCombinations(example, 3);
console.log(result);
