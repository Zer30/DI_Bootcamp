// 1
document.querySelector('h1')

// 2
document.querySelector("p:last-of-type").remove()

// 3
document.addEventListener("click", myFunction);
function myFunction() {
  document.querySelector("h2").style.backgroundColor = "red"
}

// 4
document.addEventListener("click", myFunction);
function myFunction() {
  document.querySelector("h3").style.display = "none"
}

// 5
document.querySelector("button").addEventListener("click", function () {
    document.querySelectorAll("p").forEach(p => {
      p.style.fontWeight = "bold";
    });
  });

// bonus
document.querySelector("h1").addEventListener("mouseover", function () {
    this.style.fontSize = `${Math.floor(Math.random() * 100)}px`;
  });

// bonus 2
document.querySelectorAll("p")[1].addEventListener("mouseover", function () {
    this.classList.add("fade-out");
  });