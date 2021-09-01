// FIXME: STUDENTS show your authors

import clearDom from '../helpers/clearDom';

const showAuthors = (array) => {
  clearDom();
  // CREATE A BUTTON TO ADD BOOKS
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add an Author</button>';

  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `
    <div class="card">
        <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <p class="card-text bold">${item.email}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
        <button class="btn btn-info"  id="edit-author-btn--${item.firebaseKey}">Edit Author</button>
        <button class="btn btn-danger" id="delete-author--${item.firebaseKey}">Delete Author</button>
        </div>
      </div>
    `;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
