//형 변환
//명시적 형 변환, 암시적 형 변환

//암시적
//문자열
//*타데이터타입 +문자열 = 문자열
let result1 = 1 + "2";
console.log(result1);
console.log(typeof result1);

let result2 = "1" + true;
console.log(result2);
console.log(typeof result2);

//숫자
let result3 = 1 - "2";
// console.log(result3);
// console.log(typeof result3);

let result4 = "2" * "2";
console.log(result4);
console.log(typeof result4);

//+연산자가 아닌 다른 연산자는 숫자가 우선시 된다
//숫자, 문자열이더라도 숫자로 우선변환

//명시적 형  변환
//불리언
//문자열 값이나 공값은 true로 나온다
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean("false"));
console.log(Boolean({}));

//문자열
let result5 = String(132);
console.log(typeof result5);

let result6 = String(true);
console.log(typeof result5);

let result7 = String(false);
console.log(typeof result5);

let result8 = String(undefined);
console.log(typeof result5);

//숫자열
let result10 = number("123");
console.log(typeof result10);
