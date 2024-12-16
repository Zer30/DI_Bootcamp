// #1
const navBar = document.getElementById("navBar")
navBar.setAttribute("id", "socialNetworkNavigation")

// #2
const newLi = document.createElement("li")
const textNode = document.createTextNode("logout")
newLi.appendChild(textNode)
const ul = document.querySelector("#socialNetworkNavigation ul")
ul.appendChild(newLi)

// #3
const firstLi = ul.firstElementChild

const lastLi = ul.lastElementChild

console.log("First link text:", firstLi.textContent);
console.log("Last link text:", lastLi.textContent);