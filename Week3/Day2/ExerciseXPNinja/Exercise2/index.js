let input=prompt("Enter a list of numbers seperated by commas");
let sum=input.split(',').map(Number);

alert("Your sum is " + sum);