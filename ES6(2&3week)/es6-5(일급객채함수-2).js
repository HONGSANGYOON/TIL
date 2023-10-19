//일급객채함수(2)

const person = {
  name: "jhon",
  age: 31,
  ismarried: true,

  //화살표함수는 this를 바인딩하지 않는다!!!! => 차후에 다시 강의에 나온다
  sayhello: () => {
    console.log(`hello my name is ${this.name}`);
  },
};
//   sayhello: function () {
//     console.log("hello my name is " + this.name);
//     console.log(`hello my namie is ${this.name}`);
//   },
// };
person.sayhello();
