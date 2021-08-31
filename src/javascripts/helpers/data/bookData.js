import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/books.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOOK
const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/books/${firebaseKey}.json`)
    .then(() => {
      getBooks().then(resolve);
    })
    .catch(reject);
});

// CREATE BOOK
const createBook = (bookObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/books.json`, bookObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios
        .patch(`${dbUrl}/books/${response.data.name}.json`, body)
        .then(() => {
          getBooks().then(resolve);
        });
    })
    .catch((error) => reject(error));
});

// GET SINGLE BOOK
const singleBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/books/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
// UPDATE BOOK
const updateBook = (bookObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/books/${bookObj.firebaseKey}.json`, bookObj)
    .then(() => getBooks().then(resolve))
    .catch(reject);
});

// SEARCH BOOKS

// FILTER BOOKS
const booksOnSale = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/books/.json?orderBy="sale"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const authorBooks = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/books/.json?orderBy="author_id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getBooks,
  createBook,
  booksOnSale,
  deleteBook,
  singleBook,
  updateBook,
  authorBooks,
};
