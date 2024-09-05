let str1 = "mix";
let str2 = "pod";

let swappedStr1 = str2.slice(0, 1) + str1.slice(1);
let swappedStr2 = str1.slice(0, 1) + str2.slice(1);

let concatenatedStr = swappedStr1 + " " + swappedStr2;

console.log(concatenatedStr);