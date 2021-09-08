import { singleAuthor, deleteAuthor, getAuthorBooks } from './authorData';
import { singleBook, deleteBook } from './bookData';

const viewBookDetails = async (bookFirebasekey) => {
  const bookObject = await singleBook(bookFirebasekey);
  const authorObject = await singleAuthor(bookObject.author_id);

  return { authorObject, ...bookObject };
};

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getAuthorBooks(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey));

    // GET some dinner
    Promise.all([...deleteBooks]).then(() => resolve(deleteAuthor(authorId)));
  }).catch(reject);
});

export { viewBookDetails, deleteAuthorBooks };
