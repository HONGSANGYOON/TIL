//단축 속성명 : property, shorthand
//해석을 잘해야한다!!
// const name = "abc";
// const age = "30";

// const adj = {
//   name: name, //key, value가 같은경우 생략가능 => name
//   age: newage,
// };

//전개구문 = spread operator
//가장 많이 쓰이는 문법

// let arr = [1, 2, 3];
// console.log[arr];
// console.log(...arr);
// //새로운 구조를 덧입힐때 쓰인다

// let newarr = [...arr, 4];
// //이게 전개구문

// let user = {
//   name: "jay",
//   age: 30,
// };

// let user2 = [...user];

// console.log(user);
// console.log(user2);

// 나머지 매개변수(rest perameter)
// function ex(a, b, c, ...args) {
//   console.log(a, b, c);
//   console.log(...args);
// }

// ex(1, 2, 3, 4, 5, 6, 7);

//template literal(템플릿 리터럴)
// const testvalue = "hello world";
// console.log(`hello world ${testvalue}`);

// console.log(`
// hello
// wolrd
// hi!!`);

