//일급 객체로서의 함수

//1. 변수에 함수를 할당할 수 있다
//ex
// let sayhello = function () {
//   console.log("hello");
// };
//함수가 값으로 취급한다
// 함수가 나중에 사용 될 수 있도록 조치가 되었다

//2. 함수를 인자로 다른 함수에 전달할 수 있다

//-콜백함수-
//매개변수로서 쓰이는 함수

//-고차함수-
//함수를 인자로 받거나 return하는 함수

// function callfunction(func) {
//   //매개변수로 받은 변수가 사실, 함수다.
//   func();
// }
// let sayhello = function () {
//   console.log("hello");
// };
// callfunction(sayhello);

//3. 함수를 변환할 수 있다
// function a(num) {
//   return function (x) {
//     return x + num;
//   };
// }

// const b = a(5);
// console.log(b(10));
