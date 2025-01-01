function playTheGame() {
    let wantsToPlay = confirm("Would you like to play the game?");
    if (!wantsToPlay) {
        alert("No problem, Goodbye");
        return;
    }
    let userNumber;
    while (true) {
        userNumber = prompt("Please enter a number between 0 and 10:");
        if (isNaN(userNumber)) {
            alert("Sorry, that's not a number. Please try again.");
        } else if (userNumber < 0 || userNumber > 10) {
            alert("Sorry, the number is not between 0 and 10. Please try again.");
        } else {
            userNumber = Number(userNumber);
            break;
        }
    }
    const computerNumber = Math.floor(Math.random() * 11);
    compareNumbers(userNumber, computerNumber);
}

function compareNumbers(userNumber, computerNumber) {
    let attempts = 0;

    while (attempts < 3) {
        attempts++;

        if (userNumber === computerNumber) {
            alert("WINNER!");
            return;
        } else if (userNumber > computerNumber) {
            alert("Your number is bigger than the computer's, guess again.");
        } else {
            alert("Your number is smaller than the computer's, guess again.");
        }

        userNumber = Number(prompt("Please enter a new number between 0 and 10:"));

        while (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
            userNumber = Number(prompt("Invalid input. Please enter a number between 0 and 10:"));
        }
    }

    alert("Out of chances! The correct number was " + computerNumber);
}
