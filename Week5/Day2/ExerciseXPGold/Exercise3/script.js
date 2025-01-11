// 1
let shoppingList = [];

//2
document.getElementById("root").innerHTML = `
  <form>
    <input type="text" id="itemInput" placeholder="Enter an item">
    <button type="button" id="addItem">Add Item</button>
    <button type="button" id="clearAll">Clear All</button>
  </form>
`;

// 3
function addItem() {
  const input = document.getElementById("itemInput");
  if (input.value.trim() !== "") {
    shoppingList.push(input.value.trim());
    console.log("Shopping List:", shoppingList);
    input.value = "";
  } else {
    alert("Please enter an item.");
  }
}

// 4
function clearAll() {
  shoppingList = [];
  console.log("Shopping List cleared:", shoppingList);
}

document.getElementById("addItem").addEventListener("click", addItem);
document.getElementById("clearAll").addEventListener("click", clearAll);
