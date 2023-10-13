//while
// let i = 0;
//     조건
// while (i < 10) {
//   //메인로직
//   console.log(i);
//   //증감
//   i++;
// }

//for(초기값; 조건; 증감) => for문 형식

//while문을 활용해서, 3초과 100미만의 숫자 중 5의 배수인 것만 출력하는 예

// let x = 3;
// while (x < 100) {
//   if (x % 5 === 0 && x >= 5) {
//     console.log(x + "는5의배수입니다.");
//   }
// }

//do~while

// let i = 0;

// do {
//   console.log(i);
// } while (i < 10);

//break문 => for문을 깨고 나온다
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

//continue => 조건이 맞으면 다음 for문으로 넘어간다
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
