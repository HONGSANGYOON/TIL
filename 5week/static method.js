//static method(=정적 메소드)
//class -> 객체를 만들기 위해서 사용
//다량으로, 안전하고, 정확하게

class calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

calculator.add(5, 4);

//정적 메소드로 만들기
class calculator {
  static add(a, b) {
    console.log("더하기를 계산합니다");
    return a + b;
  }
  static substract(a, b) {
    console.log("빼기를 계산합니다");
    return a - b;
  }
}

console.log(calculator.add(3, 4));
console.log(calculator.substract(3, 4));
