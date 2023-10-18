//apply
var numbers = [10, 20, 3, 16, 45];

let max = Math.max.apply(null, numbers);
let min = Math.min.apply(null, numbers);

console.log(max, min);

console.log(...numbers);

//bind -> this를 바인딩하는 메서드
//*call,apply랑은 다름!!!
//즉시 호출하지는 않는다
//목적 : 1) 함수의 this를 '미리' 적용, 2) 부분적용함수

// 1) 예제
var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
func(1, 2, 3, 4);
var bindfunc1 = func.bind({ x: 1 });
bindfunc1(5, 6, 7, 8);

// 2) 부분적용함수
var bindfunc2 = func.bind({ x: 1 }, 4, 5);
bindfunc2(6, 7);

//name 프로퍼티!!!
//bind - 'bound'라는 접두어
