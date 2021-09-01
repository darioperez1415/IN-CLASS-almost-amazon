import clearDom from '../../helpers/clearDom';

const addAuthorForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <form id="submit-author-form" class="mb-4">
    <div class="form-group">
        <label for="image">First Name</label>
        <input type="text" class="form-control" id="first_name" placeholder="Enter First Name" value="${obj.first_name || ''}" required>
  </div>
    <div class="form-group">
        <label for="image">Last Name</label>
        <input type="text" class="form-control" id="last_name" placeholder="Enter Last Name" value="${obj.last_name || ''}" required>
  </div>
  <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="author_image" placeholder="Image URL" value= "${obj.image || ''}"required>
      </div>
  <div class="form-group">
  <label for="description">Description</label>
  <textarea class="form-control" placeholder="Author Description" id="descriptionAuthor" style="height: 100px">${obj.description || ''}</textarea>
</div>
  <div class="form-group">
    <label for="title">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="Enter Email" placeholder="Enter Email" value="${obj.email || ''}" required>
  </div>
  <div class="form-check">
  <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
  <label class="form-check-label" for="sale">Favorite</label>
</div>
  <button type="submit" 
  id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="btn btn-primary">Submit Author</button>
</form>
  `;
};

export default addAuthorForm;
