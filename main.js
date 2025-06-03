//initialize book array
let myLibrary = [
  new Book(
    "Dracula",
    1897,
    "Horror",
    "Bram Stoker",
    crypto.randomUUID() // Generate a unique ID
  ),
  new Book(
    "Frankenstein",
    1818,
    "Horror",
    "Mary Shelley",
    crypto.randomUUID() // Generate a unique ID
  ),
  new Book(
    "The Call of Cthulhu", // Corrected title
    1928,
    "Horror",
    "H.P Lovecraft",
    crypto.randomUUID() // Generate a unique ID
  ),
];

// constructor book function
function Book(title, year, genre, author, id, isRead = false) {
  this.title = title;
  this.year = year;
  this.genre = genre;
  this.author = author;
  this.id = id;
  this.isRead = isRead;
}

Book.prototype.setReadStatus = function() {
  if (this.isRead){
    this.isRead = false
  } else {
    this.isRead = true
  }
}

// function to add books to the aarray
function addBookToLibrary(title, year, genre, author) {
  const id = crypto.randomUUID();
  const book = new Book(title, year, genre, author, id);
  myLibrary.push(book);
}

// function to add books to the GUI
function displayBooks() {
  const table = document.querySelector("tbody");
  table.replaceChildren();
  console.log(table);
  const row = document.createElement("tr");
  const title = document.createElement("th");
  const year = document.createElement("th");
  const genre = document.createElement("th");
  const author = document.createElement("th");
  const status = document.createElement("th");

  title.textContent = "Title";
  year.textContent = "Tear";
  genre.textContent = "Genre";
  author.textContent = "Author";
  status.textContent = "Status";

  row.appendChild(title);
  row.appendChild(year);
  row.appendChild(genre);
  row.appendChild(author);
  row.appendChild(status);

  table.appendChild(row);
  for (let book = 0; book < myLibrary.length; book++) {
    const row = document.createElement("tr");
    const title = document.createElement("td");
    const year = document.createElement("td");
    const genre = document.createElement("td");
    const author = document.createElement("td");
    const status = document.createElement("td");
    // crate fontawesome icon
    const bookIcon = document.createElement('i');
    bookIcon.classList.add('fa-solid','fa-book');
    bookIcon.dataset.id = myLibrary[book].id;
    
    if(myLibrary[book].isRead){
      bookIcon.style.color = "rgb(0, 112, 79)"
    } else {
      bookIcon.style.color = "rgb(112, 0, 0)"
    }
    
    bookIcon.addEventListener('click', e => {
       // Find the book object by its ID when the icon is clicked
        const clickedBookId = e.target.dataset.id;
        const bookToUpdate = myLibrary.find(book => book.id === clickedBookId);

        if (bookToUpdate) {
            bookToUpdate.setReadStatus(); // Call the method on the actual Book instance
            console.log(bookToUpdate.isRead)
            displayBooks(); // Re-render the table to show the updated status
        }
    })

    status.appendChild(bookIcon);
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid','fa-trash');
    deleteIcon.dataset.id = myLibrary[book].id;

    deleteIcon.addEventListener('click', (e) => {
      let id = deleteIcon.dataset.id;
      console.log(id);

      const result = myLibrary.filter( book => book.id != id)
      myLibrary = result;
      displayBooks();

      console.log(myLibrary);
    });

    status.appendChild(deleteIcon);

    title.textContent = myLibrary[book].title;
    year.textContent = myLibrary[book].year;
    genre.textContent = myLibrary[book].genre;
    author.textContent = myLibrary[book].author;
    
    row.dataset.id = myLibrary[book].id;

    row.appendChild(title);
    row.appendChild(year);
    row.appendChild(genre);
    row.appendChild(author);
    row.appendChild(status);

    table.appendChild(row);
    console.log(row);
  }
}

// grab reference to New Book button
// show form when clicking New Book Button
const newBookBtn = document.querySelector(".newBtn");
newBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.querySelector(".form");
  form.classList.remove("hidden");
});

// grab reference to submit button
const addBookBtn = document.querySelector(".addBookBtn");
addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.forms.addBook;
  // get the values and create a new object
  const title = form.elements.title.value;
  const year = form.elements.year.value;
  const genre = form.elements.genre.value;
  const author = form.elements.author.value;
  const id = crypto.randomUUID();

  const book = new Book(title, year, genre, author, id);

  myLibrary.push(book);
  displayBooks();
});

displayBooks();
