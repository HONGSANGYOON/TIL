//refectoring
//비효율적인 코딩을 효율적으로 해주는 과정

// let addcoffee = function (name) {
//   return function (preName) {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         // let name = preName + "," + name;
//         //``백틱사용 기법
//         let name = `${preName}` + `${name}`;
//         console.log(name);
//       }, 500);
//     });
//   };
// };

// addcoffee("에스프레소");

//Generator
//iterable객채란??반복되는 객채
// *가 붙은 함수가 generator

//제너레이터 함수 안에 쓸 addcoffee 함수 선언
let addcoffee = function (preName, name) {
  setTimeout(function () {
    coffemaker.next(preName ? preName + "," + name : name);
  });
};

//제너레이터 함수 선언!!!
let coffegenerator = function(){
    let espresso = yield addcoffee('', '에스프레소');
    console.log(espresso)
    let americano = yield addcoffee(espresso, '아메리카노');
    console.log(espresso)
    let mocha = yield addcoffee(americano, '카페모카');
    console.log(espresso)
    let latte = yield addcoffee('', '카페라떼');
    console.log(espresso)
    
}