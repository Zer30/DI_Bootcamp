function calculateTip() {
    let bill = (prompt("Enter the amount of the bill:"));

    let tipPercentage;
    if (bill < 50) {
        tipPercentage = 0.20; // 20%
    } else if (bill <= 200) {
        tipPercentage = 0.15; // 15%
    } else {
        tipPercentage = 0.10; // 10%
    }

    const tipAmount = bill * tipPercentage;
    const finalBill = bill + tipAmount;

    console.log(`Tip: $${tipAmount.toFixed(2)}`);
    console.log(`Total Bill: $${finalBill.toFixed(2)}`);
}

calculateTip();

// The toFixed(2) method ensures the output is formatted to two decimal places