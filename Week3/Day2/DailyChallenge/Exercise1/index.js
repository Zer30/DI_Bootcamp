const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(fruits.indexOf("Banana"), 1);
fruits.sort();
fruits.push("Kiwi");

const indexOfApples = fruits.indexOf("Apples");
if (indexOfApples !== -1) {
  fruits.splice(indexOfApples, 1);
}

fruits.reverse();
console.log(fruits);
