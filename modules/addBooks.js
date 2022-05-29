import library from './library.js';
import createUI from './displayUI.js';

const addbooks = () => {
  const title = document.querySelector('.title-input');
  const author = document.querySelector('.author-input');
  const awesomeBooks = document.getElementById('awesome-books');
  const newBookDiv = document.querySelector('.new-books');
  awesomeBooks.onsubmit = (event) => {
    event.preventDefault();
    newBookDiv.innerHTML = '';
    library.addBooks(title.value, author.value);
    library.books.forEach((item) => createUI(item));
    localStorage.setItem('books', JSON.stringify(library.books));
    title.value = '';
    author.value = '';
  };
};
export default addbooks;
