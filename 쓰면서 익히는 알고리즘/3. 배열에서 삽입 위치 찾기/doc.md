# title: 배열에서 삽입 위치 찾기

## Constraints

1. 정렬된 배열이 주어진다.
2. 목표 값을 찾으면 해당 인덱스를 반환하고
3. 찾지 못한다면, 정렬된 배열이 되도록, 목표 값이 배열에 들어가야하는 인덱스를 구한다.

---

## Ideas

| Idea                                           |
| ---------------------------------------------- |
| 1. 정렬된 배열에서 탐색 -> 이진 탐색을 사용함. |

| time complexity | space complexity |
| --------------- | ---------------- |
| O(log n)        | O(1)             |

---

## PseudoCode

```
1. 이진탐색을 사용
  1-1. 값을 찾으면 인덱스를 반환
  1-2 값을 찾지 못하면 [start] - [mid] - [end]에서 end 보다 작으면 start, start 보다 크면 end 인덱스를 반환한다.
```

---

## Test Cases

```js
const nums = [1, 2, 3, 4, 5];
const case2 = [1, 4, 5, 6];
const target = 3;

console.log(solution(nums, target)); // 2
console.log(solution(case2, target)); // 1
```
