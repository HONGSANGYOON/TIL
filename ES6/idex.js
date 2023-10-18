//참조형데이터 할당 과정

//기본형 데이터의 변수 할당과정 과 차이점 : 객체의 변수영역의 별도 존재

//참조형 데이터가 불젼하지않다(가변하다)라고 하는 이유
//-데이터 영역에 저장된 값은 여전히 계속 불변하지만, obj를 위한 영역은 얼마든지 변경이 가능하다
//이것때문에 참조형 데이터를 흔히 가변하다가로 한다

//중첩객체란?
//객체안에 또다른 객체가 들어가는것

//변수 복사의 비교
//-기본형 변수 복사의 결과는 다른값!
//-참조형 변수 복사의 결과는 같은값!(원하지 않았던 결과)

//복사 이후의 값 변경 (객체 자체를 변경)

var b;
c.l(b);
b = "bbb";
c.l(b);
c.l(B);
