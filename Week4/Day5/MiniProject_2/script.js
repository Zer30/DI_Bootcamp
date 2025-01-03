function hangman() {
    let word = prompt("Player 1, please enter a word with at least 8 letters:").toLowerCase();
    while (word.length < 8) {
        word = prompt("Word must have at least 8 letters. Try again:").toLowerCase();
    }

    let hiddenWord = '*'.repeat(word.length);
    let guessedLetters = [];
    let attemptsLeft = 10;

    console.log("The game starts now!");
    console.log(hiddenWord);


    while (attemptsLeft > 0) {

        let guess = prompt("Player 2, guess a letter:").toLowerCase();

        if (guess.length !== 1 || !/^[a-z]$/.test(guess)) {
            console.log("Invalid input. Please guess a single letter.");
            continue;
        }

        if (guessedLetters.includes(guess)) {
            console.log("You already guessed that letter. Try a different one.");
            continue;
        }

        guessedLetters.push(guess);

        if (word.includes(guess)) {
            let updatedWord = '';
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    updatedWord += guess;
                } else {
                    updatedWord += hiddenWord[i];
                }
            }
            hiddenWord = updatedWord;
            console.log(hiddenWord);

            if (!hiddenWord.includes('*')) {
                console.log("CONGRATS YOU WIN!");
                return;
            }
        } else {
            attemptsLeft--;
            console.log(`Wrong guess! Attempts left: ${attemptsLeft}`);
        }

        console.log(`Guessed letters: ${guessedLetters.join(', ')}`);
    }

    console.log("YOU LOSE! The word was: " + word);
}

hangman();
