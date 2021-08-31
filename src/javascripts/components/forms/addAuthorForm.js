import clearDom from '../../helpers/data/clearDom';

const addAuthorForm = () => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
    <form id="author-form" class="mb-4">
      <div class="form-group">
        <label for="image">First Name</label>
        <input type="text" class="form-control" id="first_name" placeholder="First Name" required>
      </div>
      <div class="form-group">
        <label for="image">Last Name</label>
        <input type="text" class="form-control" id="last_name" placeholder="Last Name" required>
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" required>
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary mt-3">Submit Author</button>
    </form>`;
};

export default addAuthorForm;
