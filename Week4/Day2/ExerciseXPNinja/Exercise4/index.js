function biggestNumberInArray(arrayNumber) {
    let maxNumber = 0; // Initialize maxNumber to 0

    // Loop through each element in the array
    for (let num of arrayNumber) {
        // Check if the current element is a number and greater than maxNumber
        if (typeof num === 'number' && num > maxNumber) {
            maxNumber = num; // Update maxNumber
        }
    }

    return maxNumber; // Return the biggest number found
}

// Example usage
const array1 = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ['a', 3, 4, 2];
const array3 = [];

console.log(biggestNumberInArray(array1)); // 100
console.log(biggestNumberInArray(array2)); // 4
console.log(biggestNumberInArray(array3)); // 0
