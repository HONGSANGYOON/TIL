//비동기적 코드의 이해

// setTimeout(function () {
//   console.log("여기좀 먼저 실행할까?");
// }, 1000);

// console.log("여기 좀 봐주세요");

//- new 연산자로 호출한 promise의 인자로 넘어가는 콜백은 바로 실행돼요
//- 그 내부의 Resolove(또는 reject) 함수를 호출하는 구문이 있을 경우
//resolve(또는 reject) 둘 중 하나가 실행되기 전까지는 다음(then), 오류(catch)로

new Promise(function (resolve) {
  setTimeout(function () {
    let name = "에스프레소";
    console.log(name);
    resolve(name);
  }, 500);
}).then(function (preName) {
  return new Promise(function (resolve) {
    let name = preName + ", 아메리카노";
    console.log(name);
  }, 500);
});
