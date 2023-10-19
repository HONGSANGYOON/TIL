//콜백 함수 내부의 this에 다른값 바인딩하기
//콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 못하나?
//콜백 함수 내부의 this에 다른 값을 바인딩하는 방법

let obj = {
  mame: "obj1",
  func: function () {
    let self = this;
    return function () {
      console.log(self, name);
    };
  },
};

let callback = obj1.func();
selftimeout(callback, 1000);
