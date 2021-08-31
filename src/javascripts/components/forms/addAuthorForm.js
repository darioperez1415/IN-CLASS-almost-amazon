import clearDom from '../../helpers/clearDom';

const addAuthorForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
      <form id="submit-book-form" class="mb-4">
        <div class="form-group">
          <label for="firstName">Author First Name</label>
          <input type="text" class="form-control" id="firstName" aria-describedby="firstName" placeholder="Enter Author First Name" value = "${obj.first_name || ''}" required>
        </div>
        <div class="form-group">
          <label for="lastName">Author Last Name</label>
          <input type="text" class="form-control" id="lastName" aria-describedby="lastName" placeholder="Enter Author Last Name" value = "${obj.last_name || ''}" required>
        </div>
        <div class="form-group">
          <label for="authorEmail">Email Address</label>
          <input type="text" class="form-control" id="authorEmail" aria-describedby="email" placeholder="Enter Author Email Address" value = "${obj.email || ''}" required>
        </div>
        <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favorite" value = "${obj.favorite ? 'checked' : ''}">
        <label class="form-check-label" for="favorite">Favorite</label>
        </div>
        <button type="submit" id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="btn btn-primary">Submit author</button>
      </form>`;
};

export default addAuthorForm;
