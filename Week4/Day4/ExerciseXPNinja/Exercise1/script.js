function createCalendar(year, month) {
    // Create the table element
    const table = document.createElement("table");
    table.border = "1"; // Add border for visibility
    
    // Add table header with weekday names
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    daysOfWeek.forEach((day) => {
      const th = document.createElement("th");
      th.textContent = day;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create table body
    const tbody = document.createElement("tbody");
    const date = new Date(year, month - 1, 1); // Month is 0-indexed in JavaScript
  
    // Calculate the first day of the month and total days in the month
    const firstDay = (date.getDay() + 6) % 7; // Adjust for Monday as the first day
    const daysInMonth = new Date(year, month, 0).getDate();
  
    let currentDay = 1;
    let row = document.createElement("tr");
  
    // Fill the first row with blank cells if needed
    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement("td");
      row.appendChild(emptyCell);
    }
  
    // Fill in the days of the month
    while (currentDay <= daysInMonth) {
      const cell = document.createElement("td");
      cell.textContent = currentDay;
      row.appendChild(cell);
  
      // If the week is complete, start a new row
      if ((firstDay + currentDay) % 7 === 0) {
        tbody.appendChild(row);
        row = document.createElement("tr");
      }
  
      currentDay++;
    }
  
    // Append the last row if it's incomplete
    if (row.children.length > 0) {
      tbody.appendChild(row);
    }
  
    table.appendChild(tbody);
  
    // Append the table to the document body (or any other element)
    document.body.appendChild(table);
  }
  
  // Example usage: Create calendar for September 2012
  createCalendar(2012, 9);
  