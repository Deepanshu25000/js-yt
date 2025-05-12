const name = "Deepanshu";

const repoCount = 50;

console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String interpolation

console.log(name.length);

console.log(name.toUpperCase());

console.log(name.substring(0, 4));

console.log(name.slice(-9, 4));

const newString = "           Deepanshu ";
console.log(newString);
console.log(newString.trim());

const url = "https://deepanshu.com/deepanshu%20wadhwa";

console.log(url.replace("%20", "-")); //https://deepanshu.com/deepanshu-wadhwa

console.log(url.includes("hwa")); // true

console.log(url.includes("hwx")); // false

console.log(url.split("/"));
