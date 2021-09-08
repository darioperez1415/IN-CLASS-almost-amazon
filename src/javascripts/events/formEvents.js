import { createBook, updateBook } from '../helpers/data/bookData';
import { showBooks } from '../components/books';
import { showAuthors } from '../components/authors';
import { createAuthor } from '../helpers/data/authorData';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#author_id').value,
        uid
      };

      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      const [, firebaseKey] = e.target.id.split('--');
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#author_id').value,
        firebaseKey,
        uid
      };

      updateBook(bookObject).then(showBooks);
    }

    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-author')) {
      const authorObject = {
        email: document.querySelector('#email').value,
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        uid
      };

      createAuthor(authorObject).then(showAuthors);
    }
    // ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default formEvents;
