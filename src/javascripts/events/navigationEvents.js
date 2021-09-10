import signOut from '../helpers/auth/signOut';
import { showBooks } from '../components/books';
import { showAuthors } from '../components/authors';
import { favoriteAuthors, getAuthors } from '../helpers/data/authorData';
import { booksOnSale, getBooks } from '../helpers/data/bookData';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale(uid).then(showBooks);
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(uid).then(showBooks);
  });

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });

  // AUTHORS
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(uid).then(showAuthors);
  });

  // FAVORITE AUTHORS
  document.querySelector('#favorite-authors').addEventListener('click', () => {
    favoriteAuthors(uid).then(showAuthors);
  });
};

export default navigationEvents;
