// *  CASE1. 사용자의 방문 횟수
const map = new Map();
const weakMap = new WeakMap();

let user1 = { name: 'john' };
let user2 = { name: 'ahn' };
let user3 = { name: 'jiu' };

function countUser(user) {
  let count = map.get(user) || 0;
  map.set(user, count + 1);

  count = weakMap.get(user) || 0;
  weakMap.set(user, count + 1);
}

countUser(user1);
countUser(user2);
countUser(user3);
countUser(user1);
countUser(user1);
countUser(user1);

user1 = null;

console.log([...map.keys()][0]); // { name: 'john' } 리터럴 객체가 남아있다.
console.log(map.size); // 크기가 여전히 3이다.
// weakMap은  { name: 'john' } 리터럴 객체를 지운다.
// weakMap.set(john, "비밀문서"); //! john이 사망하면, 비밀문서는 자동으로 파기됩니다.

// *  CASE2. 캐싱
const user4 = { name: 'john', point: 2 };

function decoratorCache(func) {
  const map = new WeakMap();

  return user => {
    if (!map.get(user)) {
      const result = func(user);
      map.set(user, result);
      console.log(`${JSON.stringify(user)}의 결과를 캐싱합니다.`);
      return result;
    }

    console.log(`캐싱된${JSON.stringify(user)}를 사용합니다.`);
    return map.get(user);
  };
}

const cube = user => user.point * user.point * user.point;
const cacheCube = decoratorCache(cube);

cacheCube(user4);
cacheCube(user4);
// user1 이 필요없어짐 -> cache의 size = 0이 됩니다. new Map()이었다면 size는 1이 유지됩니다.
user1 = null;

// *CASE3. 메시지를 언제 읽었나요?

let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readMap = new WeakMap();
// ! 해당 객체에 추가정보(날짜)를 줍니다.
readMap.set(messages[0], new Date(2021, 1, 1));
// ! 해당 메세지가 가비지 컬렉션의 대상이 되면 readMap에서도 자동으로 삭제됩니다.
