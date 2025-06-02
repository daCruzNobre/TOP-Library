//initialize book array
const myLibrary = [
  { title: "Dracula", year: 1897, genre: "Horror", author: "Bram Stoker" },
  {
    title: "Frankenstein",
    year: 1818,
    genre: "Horror",
    author: "Mary Shelley",
  },
  {
    title: "The call of Cthulhu",
    year: 1928,
    genre: "Horror",
    author: "H.P Lovecraft",
  },
];

// constructor book function
function Book(title, year, genre, author, id) {
  this.title = title;
  this.year = year;
  this.genre = genre;
  this.author = author;
  this.id = id;
}

// function to add books to the aarray
function addBookToLibrary(title, year, genre, author) {
  const id = crypto.randomUUID();
  const book = new book(title, year, genre, author, id);
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

  title.textContent = "Title";
  year.textContent = "Tear";
  genre.textContent = "Genre";
  author.textContent = "Author";

  row.appendChild(title);
  row.appendChild(year);
  row.appendChild(genre);
  row.appendChild(author);

  table.appendChild(row);
  for (let book = 0; book < myLibrary.length; book++) {
    const row = document.createElement("tr");
    const title = document.createElement("td");
    const year = document.createElement("td");
    const genre = document.createElement("td");
    const author = document.createElement("td");

    title.textContent = myLibrary[book].title;
    year.textContent = myLibrary[book].year;
    genre.textContent = myLibrary[book].genre;
    author.textContent = myLibrary[book].author;

    row.appendChild(title);
    row.appendChild(year);
    row.appendChild(genre);
    row.appendChild(author);

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

// function to add books to the array
function addBooks() {}

displayBooks();
