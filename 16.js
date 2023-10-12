// 배열

//생성
//생성방법
// let fruits = ["사과", "바나나", "오렌지"];

//크기 지정
let numders = new Array(5);
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
let fruits = ["사과", "바나나", "키위"];
let slicedfruits = fruits.slice(0, 1);
console.log(slicedfruits);
