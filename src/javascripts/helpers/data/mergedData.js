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

export { viewBookDetails, viewAuthorDetails };
