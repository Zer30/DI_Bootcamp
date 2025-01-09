// Attach an event listener to the form
document.getElementById("MyForm").addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Retrieve the radius input value
    const radiusInput = document.getElementById("radius").value;
  
    // Convert the input value to a number
    const radius = parseFloat(radiusInput);
  
    // Check if the radius is valid
    if (isNaN(radius) || radius <= 0) {
      alert("Please enter a valid positive number for the radius.");
      return;
    }
  
    // Calculate the volume of the sphere: V = (4/3) * π * r³
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  
    // Display the volume in the volume input field
    document.getElementById("volume").value = volume.toFixed(2); // Rounded to 2 decimal places
  });
  