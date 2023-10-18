//set
// 특징 : 고유한 값을 저장하는 자료구조
//값만 저장한다
//키를 저장하지 않는다
//값이 중요되지 않는 유일한 요소로만 구현된다
//값추가 검색, 값삭제, 모든값제거, 존재 여부확인

const mySet = new Set();
mySet.add("value1");
mySet.add("value2");
mySet.add("value3");
mySet.add("value5");
mySet.add("value8");

// console.log(mySet.size);
// console.log(mySet.has("value1"));

//iterator(반복)
for (const value of mySet.values()) {
  console.log(value);
}
