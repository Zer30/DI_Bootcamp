
const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "yellow", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "orange", moons: 4 },
    { name: "Saturn", color: "gold", moons: 3 },
    { name: "Uranus", color: "lightblue", moons: 2 },
    { name: "Neptune", color: "darkblue", moons: 1 },
  ];
  
  // Select the section to add the planets
  const listPlanets = document.querySelector(".listPlanets");
  
  // Loop through the planets array
  planets.forEach((planet) => {
    // Create a div for the planet
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet"); // Add class "planet"
    planetDiv.style.backgroundColor = planet.color; // Set background color
  
    // Add moons if the planet has any
    for (let i = 0; i < planet.moons; i++) {
      const moonDiv = document.createElement("div");
      moonDiv.classList.add("moon"); // Add class "moon"
      moonDiv.style.top = `${20 * i}px`; // Position moons vertically
      moonDiv.style.left = `${20 * i}px`; // Position moons diagonally
      planetDiv.appendChild(moonDiv); // Append moon to the planet
    }
  
    // Append the planet to the section
    listPlanets.appendChild(planetDiv);
  });
  