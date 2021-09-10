import { deleteAuthor, getSingleAuthor, getAuthBooks } from './authorData';
import { deleteBook, getSingleBook, booksByAuthor } from './bookData';

// VIEW BOOK DETAILS
const viewBookDetails = (firebasekey) => new Promise((resolve, reject) => {
  getSingleBook(firebasekey)
    .then((bookObj) => {
      getSingleAuthor(bookObj.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObj });
        });
    }).catch(reject);
});

// VIEW AUTHOR DETAILS
const viewAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey)
    .then((authorObject) => {
      getAuthBooks(authorObject.firebaseKey)
        .then((bookObj) => {
          resolve({ bookObj, ...authorObject });
        });
    }).catch(reject);
});

// DELETE AUTHOR BOOKS THEN AUTHOR
const deleteAuthorBooks = (userId, authorId) => new Promise((resolve, reject) => {
  booksByAuthor(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map(((book) => deleteBook(userId, book.firebaseKey)));

    Promise.all([...deleteBooks]).then(() => resolve(deleteAuthor(userId, authorId)));
    // Can also do 'Promise.all([...deleteBooks])'
  }).catch(reject);
});

export {
  viewBookDetails,
  viewAuthorDetails,
  deleteAuthorBooks
};
