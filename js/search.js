document.addEventListener('DOMContentLoaded', search);

function search() {
  let inputSearch = document.querySelector('.input-search');
  inputSearch.addEventListener('input', function() {
    if(inputSearch != ''){
      let notes = document.querySelectorAll('.notes');
      notes.forEach(feild => {
        let child = feild.children;
        let title = String(child[1].textContent);
        let body = String(child[2].textContent);

        let inputSearchValue = inputSearch.value;

        if(title.includes(inputSearchValue) || body.includes(inputSearchValue)) {
          feild.style.display = 'block';
        } else {
          feild.style.display = 'none';
        }
      })
    } else {
      let notes = document.querySelectorAll('.notes');
      notes.forEach(feild => {
        feild.style.display = 'block';
      })
    }
  })
}
