// API CALLS FOR AUTHORS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET AUTHORS
const getAuthors = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE AUTHOR
const deleteAuthor = (userId, firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors(userId).then(resolve);
    })
    .catch(reject);
});

// GET SINGLE AUTHOR
const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// CREATE AUTHOR
const createAuthor = (authorObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors(authorObj.uid).then(resolve);
        });
    }).catch((error) => reject(error));
});

// UPDATE AUTHOR
const updateAuthor = (authorObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${authorObj.firebaseKey}.json`, authorObj)
    .then(() => getAuthors(authorObj.uid).then(resolve))
    .catch(reject);
});

// FIXME:SEARCH AUTHORS

// FILTER FAVORITE AUTHORS
const favoriteAuthors = (userId) => new Promise((resolve, reject) => {
  getAuthors(userId)
    .then((userAuthorsArray) => {
      const userAuthors = userAuthorsArray.filter((author) => author.favorite);
      resolve(userAuthors);
    }).catch(reject);
});

export {
  getAuthors,
  createAuthor,
  favoriteAuthors,
  deleteAuthor,
  getSingleAuthor,
  updateAuthor
};
