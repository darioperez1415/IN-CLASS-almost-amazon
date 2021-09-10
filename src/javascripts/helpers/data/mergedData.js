import { deleteAuthor, getSingleAuthor } from './authorData';
import { booksByAuthor, deleteBook, getSingleBook } from './bookData';

// VIEW BOOK DETAILS
const viewBookDetails = (firebaseKey) => (async () => {
  const book = await getSingleBook(firebaseKey);
  const author = await getSingleAuthor(book.author_id);
  return ({ author, ...book });
})().catch(console.warn);

// VIEW AUTHOR DETAILS
const viewAuthorDetails = async (firebaseKey) => {
  const author = await getSingleAuthor(firebaseKey);
  const books = await booksByAuthor(firebaseKey);
  return ({ books, ...author });
}; // Don't need '.catch'

// DELETE AUTHOR BOOKS THEN AUTHOR
const deleteAuthorBooks = (userId, authorId) => new Promise((resolve, reject) => {
  booksByAuthor(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map(((book) => deleteBook(userId, book.firebaseKey)));

    Promise.all(deleteBooks).then(() => resolve(deleteAuthor(userId, authorId)));
    // Can also do 'Promise.all([...deleteBooks])'
  }).catch(reject);
});

export {
  viewBookDetails,
  viewAuthorDetails,
  deleteAuthorBooks
};
