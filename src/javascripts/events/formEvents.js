import { createBook } from '../helpers/data/bookData';
import { showBooks } from '../components/books';
import { createAuthor } from '../helpers/data/authorData';
import { showAuthors } from '../components/authors';

const formEvents = () => {
// CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    if (e.target.id.includes('submit-book')) {
      e.preventDefault();
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#author_id')
      };

      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    if (e.target.id.includes('submit-author')) {
      e.preventDefault();
      const authorObj = {
        email: document.querySelector('#email').value,
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        favorite: document.querySelector('#favorite').checked
      };
      createAuthor(authorObj).then(showAuthors);
    }
  });
};

export default formEvents;