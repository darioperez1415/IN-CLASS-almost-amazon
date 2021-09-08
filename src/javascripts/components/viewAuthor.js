// import clearDom from '../helpers/clearDom';

const viewAuthor = (obj) => {
  // clearDom();
  document.querySelector('#view').innerHTML += `
    <div class="mt-5 d-flex flex-wrap">
     <div class="d-flex flex-column">
       <div class="mt-5">
         <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
         <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
       </div>
     </div>
     <div class="card">
       <img src=${obj.image} alt=${obj.title} style="width: 300px;">
       <h5>${obj.first_name}  ${obj.last_name}</h5>
       <p>${obj.email || ''}</p>
       <p>${obj.description || ''}</p>
       <p>${obj.favorite ? '<span class="badge bg-warning text-dark"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span>' : ''}</p>      
       <hr>
       <div id="authorBooksView">
       </div>`;
  obj.bookObj.forEach((item) => {
    document.querySelector('#authorBooksView').innerHTML += `
        <div class="card">
            <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
            <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
            <hr>
        </div>
     </div>
        `;
  });
};

export default viewAuthor;
