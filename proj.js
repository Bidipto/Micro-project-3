const food = require("./food.json");

//console.log(food);

// You task is to apply different arrays methods to get the desired following result.

function sortByProperty(property) {
  return function (a, b) {
    if (a[property] > b[property]) return 1;
    else if (a[property] < b[property]) return -1;
    return 0;
  };
}

function sortByPropertyD(property) {
  return function (a, b) {
    if (a[property] < b[property]) return 1;
    else if (a[property] > b[property]) return -1;
    return 0;
  };
}
// list all the food items
function a() {
  return food;
}
//console.log('')
// list all the food items with category vegetables
function b() {
  return food.filter((f) => f.category === "Vegetable");
}
//console.log(b());
// list all the food items with category fruit
function c() {
  return food.filter((f) => f.category === "Fruit");
}
//console.log(c());
// list all the food items with category protien
function d() {
  return food.filter((f) => f.category === "Protein");
}
// list all the food items with category nuts
function e() {
  return food.filter((f) => f.category === "Nuts");
}
// list all the food items with category grains
function f() {
  return food.filter((f) => f.category === "Grains");
}
// list all the food items with category dairy
function g() {
  return food.filter((f) => f.category === "Diary");
}
// list all the food items with calorie above 100
function h() {
  return food.filter((f) => f.calorie > 100);
}
// list all the food items with calorie below 100
function i() {
  return food.filter((f) => f.calorie < 100);
}
// list all the food items with highest protien content to lowest
function j() {
  return food.sort(sortByPropertyD("protiens"));
}
//console.log(j());
// list all the food items with lowest cab content to highest
function k() {
  return food.sort(sortByProperty("cab"));
}
//console.log(k());

console.log("\nlist all the food items\n");
console.log(a());

console.log("\nlist all the food items with category vegetables\n");
console.log(b());

console.log("\nlist all the food items with category fruit\n");
console.log(c());

console.log("\nlist all the food items with category protien\n");
console.log(d());

console.log("\nlist all the food items with category nuts\n");
console.log(e());

console.log("\nlist all the food items with category grains\n");
console.log(f());

console.log("\nlist all the food items with category dairy\n");
console.log(g());

console.log("\nlist all the food items with calorie above 100\n");
console.log(h());

console.log("\nlist all the food items with calorie below 100\n");
console.log(i());

console.log(
  "\nlist all the food items with highest protien content to lowest\n"
);
console.log(j());

console.log("\nlist all the food items with lowest cab content to highest\n");
console.log(k());
