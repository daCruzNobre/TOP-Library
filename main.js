//initialize book array
const myLibrary = [
  { title: "Dracula",
    year: 1897,
    genre: "Horror",
    author: "Bram Stoker" },
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
function displayBooks(){
    const table = document.querySelector('tbody');
    console.log(table);
    for (let book = 0; book < myLibrary.length; book ++) {
        const row = document.createElement('tr');    
        const title = document.createElement('td');    
        const year = document.createElement('td');    
        const genre = document.createElement('td');    
        const author = document.createElement('td');

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
const newBookBtn = document.querySelector('.newBtn');
newBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.querySelector('.form');
  form.classList.remove('hidden');
})
// function to add books to the array
function addBooks() {

}

displayBooks();