function solution(bridge_length, weight, truck_weights) {
  let second = 1;
  let currentTruckCount = 0;
  const bridge = [];

  const inspect = truckWeight => {
    const remainWeight =
      bridge.length === 0
        ? weight
        : weight - bridge.reduce((acc, cur) => (acc += cur.weight), 0);
    if (truckWeight <= remainWeight && currentTruckCount <= bridge_length) {
      return true;
    }

    return false;
  };

  const exit = () => {
    if (bridge[0].progress > bridge_length) {
      bridge.shift();
      currentTruckCount--;
    }
  };

  const load = () => {
    const truckWeight = truck_weights.shift();
    bridge.push({ weight: truckWeight, progress: 1 });
    currentTruckCount++;
    console.log(`${second}초: ${truckWeight} 무게가 들어옵니다.`);
  };

  const forward = () => {
    bridge.forEach(truck => truck.progress++);
    second++;
  };

  // * logic
  load();
  while (truck_weights.length !== 0 || bridge.length !== 0) {
    forward(); // 진행하고
    exit(); // 빠지거나 적재하기
    if (inspect(truck_weights[0])) {
      load();
    }
  }

  return second;
}

// * Test case
// console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 100
