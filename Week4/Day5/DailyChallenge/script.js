function beerSong(startingBottles) {
    let bottles = startingBottles; // The starting number of bottles
    let takeDown = 1; // How many bottles to take down each time
  
    while (bottles > 0) {
      // Determine the correct grammar for "bottle(s)"
      let bottleWord = bottles === 1 ? "bottle" : "bottles";
      let nextBottles = bottles - takeDown; // Calculate the remaining bottles
      let nextBottleWord = nextBottles === 1 ? "bottle" : "bottles";
  
      // If we subtract too many bottles, set nextBottles to 0
      if (nextBottles < 0) {
        nextBottles = 0;
        nextBottleWord = "bottle";
      }
  
      // Determine the correct grammar for "it" or "them"
      let passAroundWord = takeDown === 1 ? "it" : "them";
  
      // Print the current verse
      console.log(`${bottles} ${bottleWord} of beer on the wall`);
      console.log(`${bottles} ${bottleWord} of beer`);
      console.log(`Take ${takeDown} down, pass ${passAroundWord} around`);
      console.log(`${nextBottles} ${nextBottleWord} of beer on the wall\n`);
  
      // Update the number of bottles and increment the bottles to take down
      bottles = nextBottles;
      takeDown++;
    }
  
    // End of the song
    console.log("No bottles of beer on the wall!");
  }
  
  // Prompt the user for the starting number of bottles
  const userInput = prompt("Enter the starting number of bottles:");
  const startingNumber = parseInt(userInput, 10);
  
  // Validate the user input and call the function
  if (isNaN(startingNumber) || startingNumber <= 0) {
    console.log("Please enter a valid positive number.");
  } else {
    beerSong(startingNumber);
  }
  