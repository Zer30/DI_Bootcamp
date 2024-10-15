// function isDivisible() {
//     let sum = 0;
//     console.log("Numbers divisible by 23:");
//     for (let i = 0; i <= 500; i++) {
//         if (i % 23 === 0) {
//             console.log(i);
//             sum += i;
//         }
//     }
//     console.log("Sum:", sum);
// }

// isDivisible();

function isDivisible(divisor) {
    let sum = 0;
    console.log(`Numbers divisible by ${divisor}:`);
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum:", sum);
}

// Call the function with different divisors
isDivisible(23);
isDivisible(3);
isDivisible(45);
