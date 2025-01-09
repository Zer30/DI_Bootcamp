// You have to decide which type of variables you have to use

// Create a global variable that save the amount of money you have in your account
// Create a variable that saves the amount of VAT
// Create a variable that saves the amout of all the expenses and revenu you did /received for the past last month
// Create a JS code that multiplies of the expenses by the VAT
// Create a JS code that changes the amount of the money you have in your account depending on your expenses/revenu.
// Display it

let accountBalance = 1000;

const VAT = 0.2;

let expensesAndRevenue = {
  expenses: 500, 
  revenue: 700 
};

let vatOnExpenses = expensesAndRevenue.expenses * VAT;

accountBalance += expensesAndRevenue.revenue - expensesAndRevenue.expenses - vatOnExpenses;

console.log("VAT on Expenses: $" + vatOnExpenses.toFixed(2));
console.log("Updated Account Balance: $" + accountBalance.toFixed(2));