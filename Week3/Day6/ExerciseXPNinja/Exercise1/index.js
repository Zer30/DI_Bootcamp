// Define the first person object
const person1 = {
    fullName: "John Doe",
    mass: 70, // in kg
    height: 1.75, // in meters
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

// Define the second person object
const person2 = {
    fullName: "Jane Smith",
    mass: 65, // in kg
    height: 1.68, // in meters
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

// Function to compare the BMI of both objects
function compareBMI(person1, person2) {
    person1.calcBMI();
    person2.calcBMI();

    if (person1.bmi > person2.bmi) {
        console.log(`${person1.fullName} has the higher BMI of ${person1.bmi.toFixed(2)}`);
    } else if (person1.bmi < person2.bmi) {
        console.log(`${person2.fullName} has the higher BMI of ${person2.bmi.toFixed(2)}`);
    } else {
        console.log(`Both ${person1.fullName} and ${person2.fullName} have the same BMI of ${person1.bmi.toFixed(2)}`);
    }
}

// Call the function to compare BMIs
compareBMI(person1, person2);
