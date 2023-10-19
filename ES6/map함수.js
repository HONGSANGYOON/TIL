let count = 0;

setInterval(function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
}, 300);

//=>쉽게 변환

//인자에 대한 제어권
//map함수
//배열에 대한 api, 메소드
let newarr = (10, 20, 30).map(function (currentvalue, index) {
  console.log(currentvalue, index);
  return (currentvalue = 5);
});

//결과는???
console.log(newarr);
//맵 함수에 맞춰 요청해야한다.
