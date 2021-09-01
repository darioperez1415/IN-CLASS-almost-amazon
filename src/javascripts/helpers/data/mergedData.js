import { singleAuthor } from './authorData';
import { singleBook, authorBooks } from './bookData';

const viewBookDetails = (bookFirebaseKey) => new Promise((resolve, reject) => {
  singleBook(bookFirebaseKey)
    .then((bookObject) => {
      singleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ author: authorObject, ...bookObject });
        });
    }).catch(reject);
});

const viewAuthorDetails = (authorFirebaseKey) => new Promise((resolve, reject) => {
  singleAuthor(authorFirebaseKey)
    .then(() => {
      console.warn(authorFirebaseKey);
      authorBooks(authorFirebaseKey)
        .then(resolve);
    }).catch(reject);
});

// const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
//   getAuthorsBooks(authorId).then((authorBooksArray) => {
//     const deletedBooks = authorBooksArray.map((book) => deleteBook (book.firebaseKey));

//     Promise.all(deleteBook).then(() => resolve(deleteSingleAuthor(authorId)
//     );)
//   }).catch(reject);
// });
// => place this below deleteAuthorBooks

export { viewBookDetails, viewAuthorDetails };
