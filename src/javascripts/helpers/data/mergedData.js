import { getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

const viewBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey)
    .then((bookObject) => {
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ author: authorObject, ...bookObject });
        });
    }).catch(reject);
});

// const viewBookDetails = (firebaseKey) => (async () => {
//   const book = await getSingleBook(firebaseKey);
//   const author = await getSingleAuthor(book.author_id);
//   return ({ author, ...book });
// })().catch(console.warn);

export default viewBookDetails;
