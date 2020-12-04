document.addEventListener('DOMContentLoaded', placeholder);

function placeholder() {
  let inputTitle = document.querySelector('.input-title');
  let inputBody = document.querySelector('.input-body');

  inputTitle.addEventListener('focus', function() {
    inputTitle.placeholder = '';
  });

  inputBody.addEventListener('focus', function() {
    inputBody.placeholder = '';
  });

  inputTitle.addEventListener('focusout', function() {
    inputTitle.placeholder = 'Add A Title'
  });

  inputBody.addEventListener('focusout', function() {
    inputBody.placeholder = 'Add Content';
  });

}
