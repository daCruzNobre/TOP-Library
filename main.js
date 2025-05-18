//initialize book array
const myLibrary = [];

// constructor book function
function Book (title, year,genre, author, id) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.author = author;
    this.id = id;
};

// function to add books to the aarray
function addBookToLibrary(title, year, genre, author) {
    const id = crypto.randomUUID();
    const book = new book(title,year,genre,author,id);
    myLibrary.push(book);
}


