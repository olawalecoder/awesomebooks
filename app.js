const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const addButton = document.querySelector('.add');
const bookList = document.querySelector('.booklist');

let bookCollection = [];

function CreateBook(title, author) {
  this.id = title;
  this.title = title;
  this.author = author;
}

function bookTemplate(title, author) {
  bookList.innerHTML
    += `
    <div id="${title}" class="book">
      <p>${title}</p>
      <p>${author}</p>
      <button type="button" id="${title}" class="remove" >Remove</button>
    </div>
    `;
  const removeButton = document.querySelectorAll('.remove');
  removeButton.forEach((button) => {
    button.addEventListener('click', () => {
      bookCollection = bookCollection.filter((book) => button.id !== book.id);
      bookList.innerHTML = '';
      bookCollection.forEach((book) => {
        bookTemplate(book.title, book.author);
      });
    });
  });
}

function addandRemoveBook() {
  addButton.addEventListener('click', () => {
    bookCollection.push(new CreateBook(bookTitle.value, bookAuthor.value));
    bookTemplate(bookTitle.value, bookAuthor.value);
    bookTitle.value = '';
    bookAuthor.value = '';
  });
}
addandRemoveBook();