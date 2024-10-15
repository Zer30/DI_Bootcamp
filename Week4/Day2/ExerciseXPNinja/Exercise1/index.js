const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(`Random Number: ${randomNumber}`);
console.log('Even numbers from 0 to ' + randomNumber + ':');

for (let i = 0; i <= randomNumber; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Explanantion
// Random Number Generation: Math.random() generates a floating-point number between 0 and 1. 
// Multiplying it by 100 and using Math.floor() rounds it down to the nearest integer. 
// Adding 1 ensures the number is between 1 and 100.
// Loop: A for loop iterates from 0 to the generated random number.
// Even Check: Inside the loop, i % 2 === 0 checks if the current number is even. 
// If it is, the number is printed.