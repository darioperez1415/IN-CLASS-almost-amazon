import { getAuthors } from '../../helpers/data/authorData';

const selectAuthor = (userId, authorId) => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;

  getAuthors(userId).then((authorsArray) => {
    authorsArray.forEach((author) => {
      domString += `
        <option value="${author.firebaseKey}"
        ${authorId === author.firebaseKey ? 'selected' : ''}>
          ${author.first_name} ${author.last_name}
        </option>
      `;
    });

    domString += '</select>';

    document.querySelector('#select-author').innerHTML = domString;
  });
};

export default selectAuthor;
