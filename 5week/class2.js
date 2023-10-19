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
}
const car1 = new car("소렌토", "2023", "e", 5000);
car1.makenoise();
