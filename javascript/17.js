//for, while => ~하는동안(반복문이다)
//핵심문법이니 중요!!!

// for (초기값; 조건식; 증감식) {}

//i라는 변수는 0부터시작할거야
//i라는 변수가 10에 도달하기 전까지 계속할거야
//i라는 변수는 한사이클이 돌고나면 1을 더할거야
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//Q.왜 ++인가

//배열과 for문은 짝궁이다.
const Array = ["one", "two", "three", "four", "five"];
for (let i = 0; i < Array.length; i++) {
  console.log(i);
  console.log(Array[i]);
}

//0부터 10까지의 수중에 2의 배수만 출력하기
// for (let x = 1; x < 11; x++) {
//   if (x % 2 === 0) {
//     console.log(x + "는 2의 배수");
//   }
// }

//for~in문
//객차의 속성을 출력하는 문법
let person = {
  name: "jay",
  age: "30",
  gender: "male",
};
for (let key in person) {
  console.log(key + ":" + person(key));
}
