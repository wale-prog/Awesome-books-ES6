import removeBook from './modules/removeBook.js';
import library from './modules/library.js';
import manageDate from './modules/displayDate.js';
import createUI from './modules/displayUI.js';
import addbooks from './modules/addBooks.js';
import navigation from './modules/navigation.js';

library.books.forEach((element) => createUI(element));
addbooks();
removeBook();
navigation();
manageDate();
