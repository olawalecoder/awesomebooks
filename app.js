/* eslint-disable max-classes-per-file */
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const addButton = document.querySelector('.add');
const bookList = document.querySelector('.booklist');

class Book {
  constructor(title, author) {
    this.id = Date.now();
    this.title = title;
    this.author = author;
  }
}
class CreateBook {
  constructor() {
    this.collection = JSON.parse(localStorage.getItem('bookStorage')) || [];
  }

  bookTemplate(title, author, id) {
    bookList.innerHTML
      += `
    <div class="list">
      <p>"${title}" by ${author}</p>
      <button type="button" id="${id}" class="remove" >Remove</button>
    </div>
    `;

    // remove items from the list of books
    const removeButton = document.querySelectorAll('.remove');
    removeButton.forEach((button) => {
      button.addEventListener('click', () => {
        this.collection = this.collection.filter((book) => Number(button.id) !== book.id);
        bookList.innerHTML = '';
        this.collection.forEach((book) => {
          this.bookTemplate(book.title, book.author, book.id);
        });
        localStorage.setItem('bookStorage', JSON.stringify(this.collection));
      });
    });
    localStorage.setItem('bookStorage', JSON.stringify(this.collection));
  }

  localStorageToWebpage() {
    if (localStorage !== null) {
      const store = JSON.parse(localStorage.getItem('bookStorage'));
      store.forEach((book) => {
        this.bookTemplate(book.title, book.author, book.id);
      });
    }
  }

  addandRemoveBook() {
    addButton.addEventListener('click', () => {
      const currentBook = new Book(bookTitle.value, bookAuthor.value);
      this.collection.push(currentBook);
      this.bookTemplate(bookTitle.value, bookAuthor.value, currentBook.id);
      bookTitle.value = '';
      bookAuthor.value = '';
    });
    localStorage.setItem('bookStorage', JSON.stringify(this.collection));
    this.localStorageToWebpage();
  }
}

const library = new CreateBook();
library.addandRemoveBook();
