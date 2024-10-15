function changeEnough(itemPrice, amountOfChange) {
    // Define the value of each type of coin
    const coinValues = [0.25, 0.10, 0.05, 0.01];
    
    // Calculate the total amount of change
    let totalChange = 0;
    for (let i = 0; i < amountOfChange.length; i++) {
        totalChange += amountOfChange[i] * coinValues[i];
    }
    
    // Determine if the total change is enough to afford the item
    return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true
