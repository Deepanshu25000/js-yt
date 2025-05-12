//Primitive (Call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123");

const anotherId = Symbol("123");

console.log(id === anotherId);

// Non-Primitive (Call by reference)

// Array, Objects, Functions

const heroes = ["ironman", "batman", "superman"];

const myObj = {
  name: "Deepanshu",
  age: 30,
};

const myFunction = (value) => {
  console.log(value);
};
myFunction("hello world");

console.log(typeof myObj);

//***************************************** Memory **************//

// Stack, Heap

// Stack(Primitive)(Copy), Heap (Non-Prmitive)(Reference)

let myName = "Deepanshu";

let anotherName = myName;

anotherName = "Wadhwa";

console.log(myName);

console.log(anotherName);

let user = {
  email: "user@google.com",
  upi: "upi@paytm",
};

let anotherUser = user;

console.log(anotherUser);

anotherUser.email = "user@fb.com";

console.log(user); //Call by Refernce
