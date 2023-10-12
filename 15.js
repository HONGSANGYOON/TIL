//객체
// key ~ value pair
//하나의 변수에 여러개의 값을 넣을 수 있다
// let person = {
//   name: "홍길동",
//   age: 30,
//   gender: "남성",
// };

//생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");

//접근하는 방법
// console.log("1", person.name);
// console.log("2", person.age);
// console.log("3", person.gender);

//객체 매소드 (객체가 갖은 여러가지 기능: object.)
// Object.key() : key를 가져오는 메소드
let person = {
  name: "홍길동",
  age: 30,
  gender: "남성",
};

let keys = Object.keys(person);
// console.log("keys =>", keys);

//values
let values = Object.values(person);
// console.log(values);

//entries
//key와 Value를 묶어서 배열로 만든 배열: 2차원 배열
let entries = Object.entries(person);
console.log(entries);

//assign
//복사 => 객체를 복사한다
let newPerson = {};
Object.assign(newPerson, person, { gender: "여성" });
console.log(newPerson);

//객체 비교
// let person1 = {
//   name: "홍길동",
//   age: 30,
//   gender: "남성",
// };
// let person2 = {
//   name: "홍길동",
//   age: 30,
//   gender: "남성",
// };

let str1 = "aaa";
let str2 = "aaa";

console.log(str1 === str2);
//객체와 배열은 크기가 상당히 크다,
//메모리에 저장할때 별도의 공간에 저장
//person1 별도 공간에 대한 주소

//객체 병합
//... : spread operator
let person1 = {
  name: "홍길동",
  age: 30,
};
let person2 = {
  gender: "남성",
};

let perfectman = { ...person1, ...person2 };
console.log(perfectman);
