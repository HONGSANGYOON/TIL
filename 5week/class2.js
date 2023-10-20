class car {
  constructor(modelName, modelyear, type, price) {
    this.modelName = modelName;
    this.modelyear = modelyear;
    this.type = type;
    this.price = price;
  }

  makenoise() {
    console.log(this.modelName + ": 빵!");
  }
  printmodleyear() {
    console.log(this.modelName + "은" + this.modelyear + "년도의 모델입니다");
  }
}

const car1 = new car("소렌토", "2023", "e", 5000);
car1.makenoise();
car1.printmodleyear();
const car2 = new car("모닝", "2018", "disel", 3000);
car2.makenoise();
car2.printmodleyear();

//class상속 -> extends를 사용
class dong extends car {
  //부모에게서 내려받은 정의를재 정의 가능 -> 오버 라이딩이라 부름
  //부모에게도 class알려주기 -> super키워드 사용하기
  modelName() {
    console.log(`${this.modelName} bark`);
  }
}

const puppy = new dong("복실이");
