function muti(num) {
  return function (x) {
    return x * num;
  };
}
// function add(x, y) {
//   return x - y;
// }

// const muti2 = muti(2);
// //2x가 된다
// const muti3 = muti(3);
// //3x가 된다
const index = muti("in");
console.log(ind);

// console.log(muti2(10));
// //20
// console.log(muti2(20));
// //30

// const result = add(muti2(5), muti3(10));
// console.log(`final => ${result}`);

// //연습
// const add0 = add(1, 2);
// const add2 = add(10, 20);
// const solution = add(add0, add2);

// console.log(add0);
// console.log(add2);

// console.log(`all add is ${solution}`);

// const a = (add2, add0);
// console.log(a);
