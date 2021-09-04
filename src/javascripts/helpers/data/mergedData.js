import {
  deleteSingleAuthor,
  getAuthorBooks,
  getSingleAuthor
} from './authorData';
import {
  deleteBook,
  getSingleBook
} from './bookData';

const viewBookDetails = async (bookFirebasekey) => {
  const bookObject = await getSingleBook(bookFirebasekey);
  const authorObject = await getSingleAuthor(bookObject.author_id);

  return { authorObject, ...bookObject };
};

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getAuthorBooks(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey));

    // GET some dinner
    Promise.all([...deleteBooks]).then(() => resolve(deleteSingleAuthor(authorId)));
  }).catch(reject);
});

export { viewBookDetails, deleteAuthorBooks };
