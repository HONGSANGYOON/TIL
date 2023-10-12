//스코프, 전체에 영향 : 전역변수, 함수내에서만 영향 : 지역변수, 화살표변수

let x = 10;
//이거 전역변수

function print(x) {
  let xx = 10;
  console.log(xx);
}
//이게 지역변수

console.log(x);
print();
