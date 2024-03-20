// const numbers = [1, 2, 3, 4, 5];

// const [first, ...rest] = numbers;

// console.log(first);
// console.log(...rest);

// let val2 = null;
// console.log(typeof myNum);

// let nameOne = "Alisher";
// let age = 24;
// let code = "I can code ";
// let bool = true;
// console.log(
//   "Hello, my name is " + nameOne,
//   "I am " + 29 + " years old and " + code + "JavaScript : " + bool
// );
//todo boolean
// const a = 5;
// const b = 10;
// console.log(a > 0 && b > 0);
// console.log(a == 5 && b == 4);
// console.log(true || false);
// console.log(a == 3 || b == 10);
// console.log(a == 3 || b == 7);

//todo array methods
//todo method array push

// array = ["toyota", "renault", "volkswagen"];
// array.push("audi");
// console.log(array[2]);
// console.log(array);
// console.log(array.length);

// favoriteFruits = ["grapefruit", "orange", "lemon"];
// favoriteFruits.push("tangerine");
// let lengthOfFavoriteFruits = favoriteFruits.push("lime");
// console.log(favoriteFruits);

//todo method splice()
// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
// arrOfShapes.splice(2, 2, "square", "trapezoid");
// console.log(arrOfShapes);
//todo concat()
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
// console.log(arr7);
//second variant
let arr8 = arr7.concat(7, 8, 9);
// console.log(arr8);
//todo push
// arr8.pop();
console.log(arr8);
//todo shift
// arr8.shift();
// console.log(arr8);
//todo splice
arr8.splice(1, 3);
console.log(arr8);
delete arr8[0];
console.log(arr8);
