let input = prompt("Enter numbers separated by commas:");

let numberArray = input.split(",").map(Number);

let sum = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("The sum of the numbers is: " + sum);

// prompt() gets the input from the user.
// split(',') splits the input string into an array of strings at each comma.
// map(Number) converts each string in the array to a number.
// reduce() sums up all the numbers in the array.