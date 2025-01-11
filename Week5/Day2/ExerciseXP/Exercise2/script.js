// 1
const form = document.querySelector("form");
console.log("Form:", form);

// 2
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
console.log("First Name Input:", firstNameInput);
console.log("Last Name Input:", lastNameInput);

// 3
const inputsByName = document.querySelectorAll("input[name]");
inputsByName.forEach(input => console.log("Input by name:", input));

// 4
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
  
    if (!firstName || !lastName) {
      alert("Please fill in both the first name and last name.");
      return;
    }
  
    const usersAnswerList = document.querySelector(".usersAnswer");
  
    const firstNameLi = document.createElement("li");
    firstNameLi.textContent = firstName;
    usersAnswerList.appendChild(firstNameLi);
  
    const lastNameLi = document.createElement("li");
    lastNameLi.textContent = lastName;
    usersAnswerList.appendChild(lastNameLi);
  });