// * 읽음 상태 메세지 확인하기
const message = [
  { name: 'scvd04', text: 'hello' },
  { name: 'scvd05', text: 'hi' },
  { name: 'scvd06', text: 'javascript' },
];

const readMessageBox = new WeakSet();

readMessageBox.add(message[0]);

console.log(
  `message[0] 메세지는 읽음 상태인가요? ${readMessageBox.has(message[0])}`
);

console.log('message[0]이 지워졌습니다.');
message.shift();

console.log(
  // ! 자동으로 지워진다.
  `message[0] 메세지는 읽음 상태인가요? ${readMessageBox.has(message[0])}`
);
