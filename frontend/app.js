import './styles/app.css';
import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderBooks();
});

document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  const image = document.getElementById('image').files;

  const formData = new FormData();
  formData.append('image', image[0]);
  formData.append('title', title);
  formData.append('author', title);
  formData.append('isbn', title);

  const ui = new UI();
  ui.addNewBook(formData);
  ui.renderMessage('New Book Added', 'success', 3000);
});

document.getElementById('books-cards').addEventListener('click', (e) => {
  const ui = new UI();
  if (e.target.classList.contains('delete')) {
    ui.deleteBook(e.target.getAttribute('_id'));
    ui.renderMessage('Book Removed', 'danger', 3000);
  }
  e.preventDefault();
});
