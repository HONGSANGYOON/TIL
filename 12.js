//조건문의 중첨
let age = 20;
let gender = "여성";

//미성년자구분
if (age >= 18) {
  //   console.log("성인입니다");
  if (gender === "여성") {
    console.log("성인여성입니다");
  } else {
    console.log("성인남성입니다.");
  }
} else {
  if (gender === "여성") {
    console.log("미성년여성입니다");
  } else {
    console.log("미성년남성입니다");
  }
}
