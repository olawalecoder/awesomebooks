const bookTitle = document.querySelector('.title')
const bookAuthor = document.querySelector('.author')
const addButton = document.querySelector('.add')
const removeButton = document.querySelectorAll('.remove')
const bookList = document.querySelector('.booklist')

const bookCollection = []

addButton.addEventListener('click', () => {
  bookCollection.push(
    {
      title: bookTitle.value,
      author: bookAuthor.value
    }
  )
  bookList.innerHTML +=
    ` <p>${bookTitle.value}</p>
      <p>${bookAuthor.value}</p>
      <button type="button" class="remove">Remove</button>`
})

bookList.addEventListener('click', e => {
  if (e.target.classList === 'remove') {
    e.target.parentElement.remove()
  }
})