// Function to calculate the average of an array of grades
function calculateAverage(gradesList) {
    let total = 0;
    for (let i = 0; i < gradesList.length; i++) {
        total += gradesList[i];
    }
    return total / gradesList.length;
}

// Function to determine if the user passed or failed
function findAvg(gradesList) {
    const average = calculateAverage(gradesList);
    console.log(`The average is ${average.toFixed(2)}`);

    if (average > 65) {
        console.log("You passed!");
    } else {
        console.log("You failed and must repeat the course.");
    }
}

const grades = [70, 80, 90, 60, 50];
findAvg(grades);
