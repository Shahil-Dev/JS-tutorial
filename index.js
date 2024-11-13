//array-index
const number = [23,32,45,78,32]
console.log(number[2]); //array index
console.log(number.length);
number.push(100) //(pushing number)
number.pop() //(pooping number)
const x = number.pop() //(restore number)
console.log(number);
console.log(x);

const fruits = ["aam","jam","katal","lichu"]
const flower = ["golap","shapla","joba","beli","krishnochura"]
const array = fruits.concat(flower) //(added array)
const find = fruits.indexOf("jam") //(to find index)
console.log(flower.includes("shahil"));//(to find item)
const join = flower.join("-")
flower.unshift("kodom");

console.log(flower);
console.log(find);


