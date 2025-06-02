//initialize book array
let myLibrary = [
  {
    title: "Dracula",
    year: 1897,
    genre: "Horror",
    author: "Bram Stoker",
    isRead: false,
    id: '1a7f1efb-6645-4ebc-a01d-6a94046d67b2',
  },
  {
    title: "Frankenstein",
    year: 1818,
    genre: "Horror",
    author: "Mary Shelley",
    isRead: false,
    id: '0b22791b-c724-4a66-865c-1b463cf2c567'
  },
  {
    title: "The call of Cthulhu",
    year: 1928,
    genre: "Horror",
    author: "H.P Lovecraft",
    isRead: false,
    id: '4b0c085d-ba17-40d4-b72c-971965c77f1e'
  },
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
    bookIcon.style.color = "rgb(0, 112, 79)"

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
