//Call : 기존의 메소드 뒤에 붙어 실행하되 , 앞에있는 this정의 후 뒤에 매개변수 붙는다
let obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

// obj.method(2, 3);

obj.method.call({ a: 4 }, 5, 6);

//apply => call과 완전히 똑같으나 뒤에 매개변수를 []로 묶어줘야한다.
obj.method.call({ a: 4 }, [5, 6]);

//유사배열객체 : 배열과 비슷한 객체
//유사배열 조건 : length필요, index번호가 0부터 시작해 1씩 증가해야한다.

let obj2 = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

let arr = Array.from(obj2);

console.log(arr);
