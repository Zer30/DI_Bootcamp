// 1. Create an array of books
const allBooks = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "https://example.com/tokillamockingbird.jpg",
      alreadyRead: true,
    },
    {
      title: "1984",
      author: "George Orwell",
      image: "https://example.com/1984.jpg",
      alreadyRead: false,
    },
  ];
  
  // 2. Select the <div> with the class "listBooks"
  const listBooksDiv = document.querySelector(".listBooks");
  
  // 3. Create a table element
  const table = document.createElement("table");
  
  // 4. Loop through the array of books and populate the table
  allBooks.forEach((book) => {
    // Create a new table row
    const row = document.createElement("tr");
  
    // Create a cell for the book details (title and author)
    const detailsCell = document.createElement("td");
    detailsCell.textContent = `${book.title} written by ${book.author}`;
    // If the book is already read, set the text color to red
    if (book.alreadyRead) {
      detailsCell.style.color = "red";
    }
    row.appendChild(detailsCell);
  
    // Create a cell for the book image
    const imageCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px"; // Set image width to 100px
    imageCell.appendChild(img);
    row.appendChild(imageCell);
  
    // Append the row to the table
    table.appendChild(row);
  });
  
  // 5. Append the table to the <div>
  listBooksDiv.appendChild(table);
  
