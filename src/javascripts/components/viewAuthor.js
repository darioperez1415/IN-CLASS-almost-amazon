import clearDom from '../helpers/data/clearDom';

const viewAuthor = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
    <div class="mt-5 d-flex flex-wrap">
      <div class="d-flex flex-column">
        <img src=${obj.image} alt=${obj.first_name} style="width: 300px;">
        <div class="mt-5">
          <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>
      <div class="text-white ms-5 details">
        <h2>${obj.first_name} ${obj.last_name}</h2>
        <p class="card-text bold">${obj.email}</p>
        <p>${obj.description || 'Please add a description for this author.'}</p>
        <hr>
      </div>
    </div>`;

  obj.books.forEach((item) => {
    document.querySelector('#author-books').innerHTML += `
      <div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 100px;">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text bold">${item.sale ? `<span class="badge bg-info"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
        </div>
      </div>
    `;
  });
};

export default viewAuthor;
