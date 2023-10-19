const myMap = new Map();
myMap.set("one", 1);
myMap.set("two1", 2);
myMap.set("three", 3);
myMap.set("four", 4);

// console.log(myMap.keys());

// for (const key of myMap.keys()) {
//   console.log(key);
// }

// console.log(myMap.values());
// for (const value of myMap.values()) {
//   console.log(value);
// }

// console.log(myMap.entries());
// for (const entries of myMap.entries()) {
//   console.log(entries);
// }

console.log(myMap.size); //맵의 사이즈(길이)
console.log(myMap.has("two1"));
