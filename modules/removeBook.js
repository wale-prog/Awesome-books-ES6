import library from './library.js';

const removeBook = () => {
  const newBookDiv = document.querySelector('.new-books');
  document.body.addEventListener('click', (event) => {
    if (event.target.id.includes('remove-btn')) {
      const parentDiv = event.target.parentNode;
      const btn = event.target;
      const removebtns = document.querySelectorAll('#remove-btn');
      const indexarr = [...removebtns].indexOf(btn);
      library.removeBooks(indexarr);
      newBookDiv.removeChild(parentDiv);
      localStorage.setItem('books', JSON.stringify(library.books));
    }
  });
};
export default removeBook;
