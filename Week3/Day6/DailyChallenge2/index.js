const numbers = [5,0,9,1,7,4,2,6,3,8];
// let num = numbers.toString()
// console.log(num)

// let num = numbers.join(" + ")
// console.log(num)

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] < numbers[j + 1]) {
            // Swap the elements
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log(numbers);

// Explanation of Bubble Sort:
// Outer Loop: Iterates through the entire array.
// Inner Loop: Compares each element with the next one. If the current element is smaller than the next one, they are swapped.
// The inner loop runs fewer times with each iteration of the outer loop since the largest elements "bubble up" to the end of the array.
// This implementation ensures that the array gets sorted in descending order without using built-in sort methods.
