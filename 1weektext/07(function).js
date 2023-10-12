// 함수 = function(기능)
//input과 output의 값을 갖고 있음

//함수 선언문

// function add(매개변수) {
//     //함수내부에서 실행한 로직

// }
// 2개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add(x, y) {
  return x + y;
}

//함수 표현식
let add2 = function (x, y) {
  return x + y;
};

//함수 호출한다(=사용한다)
//함수() -> add(입력값)
// console.log(add(2, 3));

// let functionResult = add(3, 4);
// console.log(functionResult);

// add2를 가지고 10과 20을 더한 값을 출력해보세요
let functionResult = add2(10, 20);
console.log(functionResult);

//함수의 input -> 매개변수
//return문 뒤에 오는 값 : 반환값
function hong(a, b) {
  return a + b;
}
console.log(hong("hong", "sang"));
