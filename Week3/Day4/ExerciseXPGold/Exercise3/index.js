let verb = prompt("Enter a verb:");

if (verb.length >= 3) {
  if (verb.endsWith("ing")) {
    console.log(verb + "ly");
} 
// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
else {
    console.log(verb + "ing");
  }
} 

else {
  console.log(verb);
}
