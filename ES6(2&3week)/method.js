//명시적 this binding
//call, apply, bind

//no binding
let func = function (a, b, c) {
  console.log(this, a, b, c);
};

//명시적 binding
func.call({ x: 1 }, 4, 5, 6);
