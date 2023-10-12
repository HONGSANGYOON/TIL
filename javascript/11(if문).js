//조건문 ~if, else if, else, switch

//if문

// let x = 10;
// if ("조건" -> 'true 또는 false가 나오는 조건') {
// }
// if (x < 0) {
//   console.log("x는 양수입니다.");
// }

// let y = "hello world";

// y의 길이가 5보다 크거나 같으면 길이를 console.log로 실행해줘

// if (y.length >= 5) {
//   console.log(y.length);
// }

//if ~else문
// let a = -3;
// if (a > 0) {
//   //main logic#1
//   console.log("a는 양수입니다");
// } else {
//   //maing logic#2
//   console.log("a는 음수입니다");
// }

//if~ else if ~ else 문

// let x = -1;
// if (x < 0) {
//   //main logic#1
//   console.log(1);
// } else if (x >= 0 && x < 10) {
//   //main logic#2
//   console.log(2);
// } else {
//   //main logic#3
//   console.log(3);
// }

//switch
//변수 값에 따라, 여러개의 경우(case) 중 하나를 선택
//defualt

let fruit = "홍상";

switch (fruit) {
  case "사과":
    console.log("사과입니다.");
    break;
  case "바나나":
    console.log("사과입니다.");
    break;
  case "키위":
    console.log("사과입니다.");
    break;
  default:
    console.log("아무것도 아닙니다.");
}
