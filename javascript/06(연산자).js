//연산자(=, -, %, /)

//더하기 연산자
console.log(1 + "1");

//빼기 연산자
console.log(1 - "1"); //0
console.log(1 - 1); //0

//곱하기 연산자(*)
console.log(1 * "2"); //2
console.log(1 * 2); //2

//나누기 연산자
console.log(2 / "2"); //1
console.log(2 / 2); //1

//나누기 연산자(/) vs 나머지 연산자(%)
console.log(3 / 2); //1.5
console.log(3 & 2); //1 => 나머지 값

//할당 연산자(Assignment)
//등호연산자(=)
let x = 10;

//더하기 등호 연산자(+=)
x += 5; //x + 5의 뜻

x += 10; // 20의 값을 갖는다

//빼기 등호 연산자(-=)
x -= 5; //5의값

x -= 20; // -10의 값

let a = 10;
a *= 2; //20의 값

//비교 연산자 => true, false를 반환하는 연산자
//1. 일치 연산자(===)
//타입까지 일치해야 True를 반환하는 연산자

//숫자 2가 숫자2와 같니?
console.log(2 === 2);
console.log("2" === 2);

//불일치 연산자 (!==)
//타입까지 일치해야 Fals를 반환하는 연산자
console.log(2 !== 2);

//작다 연산자(<)
console.log(2 < 3);
//작거나 같다 (<=)

//논리 연산자 => true와 False를 비교하는 연산자

//논리곱 연산자(&&) => 둘다 true일때만 true
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//논리합 연산자 : 두 값중 하나라도 TRUE일 경우 TRue바환
//(||)
onsole.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//논리부정 연산자 => !
// : 값을 반대로 바꿈
console.log(!true);
let aa = true;
console.log(!a);

//삼항연산자 *중요*
//조건에 따라 값을 선택한다
let xx = 10;
//           조건문    true값  false값
let result = xx > 5 ? "크다" : "작다";
console.log(result);

let y = 20;
//y가 10보다 작은 경우 작다, 10보다 크다면 크다를 출력
let answer = y < 10 ? "작다" : "크다";

//타입 연산자(Typeof)
