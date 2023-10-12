//조건부 실행
let x = 10;

if (x > 0) {
  console.log("k는 양수입니다");
}
//위에꺼와 아래꺼가 같은 코드
x > 0 && console.log("k는 양수입니다");

//or조건(||)
//상황 연산자와 단축평가
let y; //y는 undefined
let z = y || 20;

console.log(z);
