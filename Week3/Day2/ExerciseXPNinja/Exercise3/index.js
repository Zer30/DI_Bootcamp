let sentence = prompt("Enter a sentence containing the word 'Nemo':");
let wordsArray = sentence.split(" ");
let nemoIndex = wordsArray.indexOf("Nemo");
if (nemoIndex !== -1) {
  alert("I found Nemo at " + nemoIndex);
} else {
  alert("I can't find Nemo");
}