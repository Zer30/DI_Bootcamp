let sentence = prompt("Enter a sentence containing the word 'Nemo':");

// Split the sentence into an array of words
let wordsArray = sentence.split(" ");

// Find the index of the word "Nemo" in the array
let nemoIndex = wordsArray.indexOf("Nemo");

// Check if "Nemo" is found, and log the result accordingly
if (nemoIndex !== -1) {
  console.log(`I found Nemo at ${nemoIndex}`);
} else {
  console.log("I can't find Nemo");
}