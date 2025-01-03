let input = "";

function number(num) {
    input += num; // Add the clicked number to the input
    display(input); // Update the display
}

// Function to handle operator clicks
function operator(op) {
    if (input === "") {
        alert("Enter a number first");
        return;
    }
    input += op; // Add the operator to the input
    display(input); // Update the display
}

// Function to calculate and display the result
function equal() {
    try {
        const result = eval(input); // Calculate the result
        display(result); // Show the result
        input = result.toString(); // Reset input to the result for further calculations
    } catch (error) {
        alert("Invalid calculation");
        input = ""; // Reset input if there's an error
        display(input);
    }
}

// Function to reset the calculator
function reset() {
    input = ""; // Clear the input
    display(input); // Reset the display
}

// Function to clear the last character
function clearLast() {
    input = input.slice(0, -1); // Remove the last character
    display(input); // Update the display
}

// Function to update the display
function display(value) {
    document.getElementById("display").innerText = value || "0"; // Show "0" if empty
}
