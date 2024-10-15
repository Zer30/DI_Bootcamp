let input = prompt("Enter several words separated by commas:");

// Split the input string into an array of words
let words = input.split(",");

// Trim any extra spaces from each word
words = words.map(word => word.trim());

// Find the length of the longest word
let maxLength = Math.max(...words.map(word => word.length));

// Create the top and bottom border of the frame
let border = "*".repeat(maxLength + 4);

// Print the words in a rectangular frame
console.log(border);
for (let word of words) {
    console.log(`* ${word.padEnd(maxLength, ' ')} *`);
}
console.log(border);
