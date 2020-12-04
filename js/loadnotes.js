document.addEventListener('DOMContentLoaded', fetch);

function fetch() {
  let keys = Object.keys(localStorage);
  keys.forEach(key => {
    let data = localStorage.getItem(key);
    let notesArea = document.querySelector('.notes-area');

    data = JSON.parse(data);

    let notes = document.createElement('div');
    notes.className = 'notes';
    notes.dataset.display = 'display' + data['id'];

    let backImg = document.createElement('img') ;
    backImg.src = 'img/notes-background.png';
    backImg.alt = 'Notes';
    backImg.className = 'background';

    notes.appendChild(backImg);

    let notesTitle = document.createElement('div');
    notesTitle.className = 'notes-title';
    notesTitle.setAttribute('contenteditable', 'true');
    notesTitle.innerText = data['title'];

    notes.appendChild(notesTitle);

    let notesBody = document.createElement('div');
    notesBody.className = 'notes-body';
    notesBody.setAttribute('contenteditable', 'true');
    notesBody.innerText = data['body'];

    notes.appendChild(notesBody);

    let crossIcon = document.createElement('div');
    crossIcon.className = 'cross-icon';

    let crossImg = document.createElement('img') ;
    crossImg.src = 'img/remove.png';
    crossImg.alt = 'Delete Notes';
    crossImg.classList.add('svg', 'img-svg');
    crossImg.dataset.btn = 'btn' + data['id'];

    crossIcon.appendChild(crossImg);

    notes.appendChild(crossIcon);

    notesArea.appendChild(notes);
  })
}
