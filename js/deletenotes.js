document.addEventListener('DOMContentLoaded', deleteNotes);

function deleteNotes() {
  let deleteBtn = document.querySelectorAll('.img-svg');
  deleteBtn.forEach(btn => {
    btn.addEventListener('click', function() {
      let data = btn.dataset.btn;
      dataTag = data.slice(data.indexOf('n') + 1);

      let notesArea = document.querySelector('.notes-area');
      let notes = document.querySelector(`.notes[data-display = display${dataTag}]`);
      notesArea.removeChild(notes);

      localStorage.removeItem(dataTag);
    })
  })
}
