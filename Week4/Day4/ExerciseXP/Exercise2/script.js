// #1
const div = document.querySelector("div");
div.style.backgroundColor ="lightblue";
div.style.padding ="10px";

// #2
const johnLi = document.querySelector("ul li:first-child");
johnLi.style.display ="none";

// #3
const peteLi = document.querySelector("ul li:nth-child(2)")
peteLi.style.border = "2px solid black"

// #4
document.body.style.fontSize ="24px";

// #Bonus
if (div.style.backgroundColor === "lightblue") {
  alert("Hello John and Pete");
}


