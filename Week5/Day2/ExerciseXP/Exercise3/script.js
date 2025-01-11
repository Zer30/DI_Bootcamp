// 1
let allBoldItems;

// 2
function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
  }

// 3
function highlight() {
    allBoldItems.forEach((item) => {
        item.style.color = "blue";
    });
}

// 4
function returnNormal() {
    allBoldItems.forEach((item) => {
        item.style.color = "black";
    });
}

// 5
getBoldItems();

const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnNormal);