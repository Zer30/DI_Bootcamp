let number = parseInt(prompt("Enter a number:"));

// Initialize the base string
let result = "boom";

// Check if the number is less than 2
if (number < 2) {
  console.log(result);
} else {
  // Create a string with 'o' repeated 'number' times
  result = "b" + "o".repeat(number) + "m";
  
  // Check divisibility and apply the appropriate transformations
  if (number % 2 === 0 && number % 5 === 0) {
    result = result.toUpperCase() + "!";
  } else if (number % 2 === 0) {
    result += "!";
  } else if (number % 5 === 0) {
    result = result.toUpperCase();
  }
  
  console.log(result);
}
