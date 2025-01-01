let table = document.body.firstElementChild;

// Loop through the rows of the table
for (let i = 0; i < table.rows.length; i++) {
  // Access the diagonal cell in the current row
  let diagonalCell = table.rows[i].cells[i];
  // Set the background color to red
  diagonalCell.style.backgroundColor = "red";
}