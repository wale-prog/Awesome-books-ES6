const createUI = ({ title, author }) => {
  const newBookDiv = document.querySelector('.new-books');
  const bookContainer = document.createElement('div');
  bookContainer.setAttribute('class', 'collection');
  bookContainer.innerHTML = `<p>${title} by ${author}</p>
    <p class="hidden">${title}</p>
    <p class="hidden">${author}</p>
      <button id="remove-btn" type="submit">Remove</button>`;
  newBookDiv.append(bookContainer);
};
export default createUI;