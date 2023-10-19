// class = 설계도
class person {
  //필수요소 넣기
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //메서드 형태의 동사 표현
  sayhell() {
    console.log(this.name + "님 안녕하세요");
  }

  //내나이는 ~몇살이에요 라고 출력하는 메서드를 만들기
  sayage() {
    console.log("내 나이는" + this.age + "살이에요");
    console.log(`${this.name} 나이는 ${this.age} 살이에요.`);
  }
}

//instence 만들기
//이름은 홍길동, 나이는 30인 사람하나 만들어줘
const person1 = new person("홍길동", "30");
const person2 = new person("홍길순", "31");
