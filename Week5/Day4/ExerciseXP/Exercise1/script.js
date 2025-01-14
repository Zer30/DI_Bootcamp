// Part I
setTimeout(function() {
    alert("Hello World");
}, 2000);

// Part II
setTimeout(function() {
    const container = document.getElementById("container");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
}, 2000);

// Part III
let paragraphCount = 0; // Track the number of paragraphs
const container = document.getElementById("container");

// Function to add a paragraph every 2 seconds
const intervalId = setInterval(function() {
    if (paragraphCount >= 5) {
        clearInterval(intervalId); // Clear the interval after 5 paragraphs
    } else {
        const paragraph = document.createElement("p");
        paragraph.textContent = "Hello World";
        container.appendChild(paragraph);
        paragraphCount++;
    }
}, 2000);

// Add button event listener to manually clear the interval
document.getElementById("clear").addEventListener("click", function() {
    clearInterval(intervalId);
});
