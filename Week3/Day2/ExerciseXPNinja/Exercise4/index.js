let number =(prompt("Enter a number:"));
let result = "boom";
if (number < 2) {
  console.log(result);
} 
if (number > 2) {
  result = "b" + "o".repeat(number) + "m";
  
if (number % 2 === 0 && number % 5 === 0) {
    result = result.toUpperCase() + "!";} 
    
else if (number % 2 === 0) {
    result += "!";} 
  
else if (number % 5 === 0) {
    result = result.toUpperCase();}
  
  console.log(result);
}
