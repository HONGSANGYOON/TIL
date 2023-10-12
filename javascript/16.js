// 배열

//생성
//생성방법
// let fruits = ["사과", "바나나", "오렌지"];

//크기 지정
// let numders = new Array(5);
// console.log(fruits.length);
// console.log(numders.length);

//요소 접근
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

//push
// let fruits = ["사과", "바나나"];
// fruits.push("오렌지");
// console.log(fruits);

//pop 마지막요소 삭제

// let fruits = ["사과", "바나나"];
// fruits.pop();
// console.log(fruits);

//shift 첫번째요소 삭제
// let fruits = ["사과", "바나나", "키위"];
// fruits.shift();
// console.log(fruits);

//unshfit 맨앞에 추가
// let fruits = ["사과", "바나나", "키위"];
// fruits.unshift("배");
// console.log(fruits);

//splice 위치를 지정해서 요소롤 삭제하고 끼워넣기 (시작위치번호, 지우는갯수, value)
// let fruits = ["사과", "바나나", "키위"];
// fruits.splice(1, 1, "포도");
// console.log(fruits);

//slice ~.slice(x,y)=> x부터 y전까지 나열해줘
// let fruits = ["사과", "바나나", "키위"];
// let slicedfruits = fruits.slice(0, 1);
// console.log(slicedfruits);

// foreach, map, filter, find
// let numbers = [1, 2, 3, 4, 5];

//매개변수자리에 함수를 넣는것 : 콜백함수
// numbers.forEach(function (item) {
//   console.log("item =>" + item);
// });

//map => return이 무조건 들어가야한다, 새로운 배열로 가공해서 내보낸다
// let newnumvers = numbers.map(function (item) {
//   return item * 2;
// });
// console.log(newnumvers);

//filter => return이 무조건 필요, 필터링할 조건이 필요하다
// let numbers = [1, 2, 3, 4, 5];
// let filternumber = numbers.filter(function (item) {
//   return item !== 5;
// });
// console.log(filternumber);

//find => return문 필요
let numbers = [1, 2, 3, 4, 5];
let findnumber = numbers.find(function (item) {
  return item > 3;
});
console.log(findnumber);

//새로운값을 필요로하는 코드는 Return이 들어간다
