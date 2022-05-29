import Books from './Books.js';

const library = new Books(JSON.parse(localStorage.getItem('books'))) || [];
export default library;