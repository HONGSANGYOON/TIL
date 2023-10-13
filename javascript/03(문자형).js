//문자 : string(문자열)
let str = "hello wollrd";
// console.log(str);
// console.log(typeof str);

//문자열 길이 확인하기
console.log(str.length);

//문자열 결함하기
let str1 = "hello";
let str2 = "world";
//~,.concat은 문자열 합치는 코드
let result = str1.concat(str2);
console.log(result);

//문자열 자리그
let str3 = "hello world";

//substring(자를 시작위치, 자르는길이)
console.log(str3.substring(7, 5));

//slice(자를 시작위치, 끝위치)
console.log(str3.slice(7, 12));

//문자열 검색
let str4 = "hello wolrd";
console.log(str4.search("world"));

//문자열 대체
let str5 = "hello world";
let result01 = str5.replace("wolrd", "javascript");

//문자열 분할
let str6 = "apple,banana, kiwi";
let result02 = str6.split(".");
console.log(result02);
