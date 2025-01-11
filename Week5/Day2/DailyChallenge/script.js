// Event listener for the form submission
document.getElementById("libform").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page
  
    // Get values from the inputs
    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();
  
    // Ensure no inputs are empty
    if (!noun || !adjective || !person || !verb || !place) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Write the initial story
    const story = `${person} went to the ${place} with a ${adjective} ${noun}, 
                   and they decided to ${verb} all day long.`;
    document.getElementById("story").textContent = story;
  });
  
  // Add a "shuffle" button for bonus functionality
  const shuffleButton = document.createElement("button");
  shuffleButton.textContent = "Shuffle";
  shuffleButton.id = "shuffle-button";
  document.body.appendChild(shuffleButton);
  
  // List of possible story templates
  const storyTemplates = [
    "{person} took their {adjective} {noun} to {place} and started to {verb}.",
    "In {place}, {person} saw a {adjective} {noun} and began to {verb} with it.",
    "While {verb} in {place}, {person} found a {adjective} {noun}."
  ];
  
  // Shuffle function to display a random story
  shuffleButton.addEventListener("click", function () {
    // Get values from the inputs
    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();
  
    // Ensure no inputs are empty
    if (!noun || !adjective || !person || !verb || !place) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Select a random story template and replace placeholders with user input
    const randomTemplate = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
    const shuffledStory = randomTemplate
      .replace("{noun}", noun)
      .replace("{adjective}", adjective)
      .replace("{person}", person)
      .replace("{verb}", verb)
      .replace("{place}", place);
  
    // Display the new story
    document.getElementById("story").textContent = shuffledStory;
  });
  