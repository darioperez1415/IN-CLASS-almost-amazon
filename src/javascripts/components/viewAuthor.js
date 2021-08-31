import clearDom from '../helpers/clearDom';

const viewAuthor = (obj) => {
  clearDom();
  document.querySelector('#view').innerHTML += `
    <div class="mt-5 d-flex flex-wrap">
     <div class="d-flex flex-column">
       <img src=${obj.image} alt=${obj.first_name} ${obj.last_name} style="width: 300px;">
       <div class="mt-5">
         <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
         <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
       </div>
     </div>
     <div class="text-white ms-5 details">
       <h5>${obj.first_name} ${obj.last_name}</h5>
       <p>${obj.email || ''}</p>
       <hr>
       <div id="author-books"></div>   
        </div>
      </div>`;
};

export default viewAuthor;
