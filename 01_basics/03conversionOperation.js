let score = null;

console.log(typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

//"33" => 33
//"33abc"=> Nan
// true => 1
//false => 0
//null => 0
//undefined => Nan

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "Deepanshu" => true

let someNumber = 34;

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

// ****************** Operations *************************

let value = 3;
let negValue = -value;

console.log(negValue);

console.log(2 ** 5);

let str1 = "Hello";
let str2 = " Deepanshu";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 3 + 4); //134

console.log("1" + 3 * 4); //112

console.log("1" + (3 + 4)); //17

console.log(1 + 3 + "4"); //44

console.log(+true); // 1

console.log(true); // true

console.log(+false); //0

console.log(+""); //0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

console.log(num1);

let gameCounter = 100;
const z = gameCounter + 5;
const x = gameCounter++; //prefix
const y = gameCounter + 2; //postfix
console.log(gameCounter, x, y, z);
