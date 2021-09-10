import clearDom from '../helpers/data/clearDom';

const viewAuthor = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
  <div class="text-white ms-5 details">
  <h5>${obj.first_name} ${obj.last_name}
    </h5>
      <p>${obj.email}
       </p>
     <hr>
   <div id="author-books"
  </div>
</div>`;

  obj.bookObj.forEach((item) => {
    document.querySelector('#author-books').innerHTML += ` 
  <div class="card" style="background-color:white;">
    <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 200px;" style="width: 200px;">
      <div class="card-body" style="height: 180px;">
          <h5 class="card-title" style="color:black;">${item.title}</h5>
            <p class="card-text bold" style="color:black;">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}
            </p>
            <i id="view-book-btn--${item.firebaseKey}" class="btn btn-success fas fa-eye"></i>
            <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
            <hr>
        </div>
   </div>`;
  });
};

export default viewAuthor;
