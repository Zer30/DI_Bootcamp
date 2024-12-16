// #1
const containerDiv = document.getElementById("container");
console.log(containerDiv);

// #2
document.querySelector(".list").children[1].textContent ="richard"

//  #3
const lists = document.querySelectorAll(".list")
lists.forEach(list => list.firstElementChild.textContent="Jeremy")

// #4
lists[1].children[1].remove()

// #Bonus
lists.forEach(list =>list.classList.add("student_list") )

const firstUL = document.querySelector('ul.list.student_list')
firstUL.classList.add("university","attendence")

