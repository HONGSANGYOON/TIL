//구조분배할당 : destructuring(de + structure + ing)
// de = not
// structure = 구조
// 배열이나 객채의 속성을 분해 및 할당

//배열의 경우
let [value1, value2] = [1, "new"];
console.log("1", value1);
console.log("2", value2);

let arr = ["value1", "value2", "value3"];
let [a, b, c, d = 4] = arr;
//D=4로 하면 undefined경우 4로 나온다(초기값)

// console.log(a);
// console.log(b);
// console.log(c);
//d값은 없기에 undefined로 나온다

//객체인 경우
//객체는 순서 말고 KEY가 중요
let user = {
  name: "abc",
  age: "30",
  birthday: "yesterday",
};

// let { name, age } = {
//   name: "abc",
//   age: "30",
// };
// //구조 분해 할당으로 abc, 30으로 나온다

// //새로운 이름으로 할당하는법
// let { name: newname, age: newage } = user;
//name에 newname, age는 newage로 새 할당

let { name, age, birthday = "today" } = user;
console.log(name);
console.log(age);
console.log(birthday);
