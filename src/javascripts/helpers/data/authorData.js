// API CALLS FOR AUTHORS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;
// GET AUTHOR
const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE AUTHOR
const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors().then(resolve);
    })
    .catch(reject);
});

// CREATE AUTHOR
const createAuthor = (authorObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors().then((booksArray) => resolve(booksArray));
        });
    }).catch((error) => reject(error));
});

// UPDATE AUTHOR
const updateAuthor = (bookObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${bookObj.firebaseKey}.json`, bookObj)
    .then(() => getAuthors().then(resolve))
    .catch(reject);
});
// SEARCH AUTHORS

export {
  getAuthors,
  createAuthor,
  deleteAuthor,
  updateAuthor,
};
