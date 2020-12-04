document.addEventListener('DOMContentLoaded', btnClick);

function btnClick() {
  let addBtn = document.querySelector('.add');
  addBtn.addEventListener('click', addNotes);

  let clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', clearFeild);
}

function addNotes() {
  let inputTitle = document.querySelector('.input-title').value.trim();
  let inputBody = document.querySelector('.input-body').value.trim();

  if(inputTitle != '' && inputBody != '') {
     let number = Math.round(1 + 999999 * (Math.random()));
    // storing in local storage

    let notesObj = {
      id: number,
      title: inputTitle,
      body: inputBody
    };

    let noteJson = JSON.stringify(notesObj);

    localStorage.setItem(number, noteJson);

    //reload for deletetion

    location.reload();

  }
}

function clearFeild() {
  let inputTitle = document.querySelector('.input-title');
  let inputBody = document.querySelector('.input-body');

  inputTitle.value = '';
  inputBody.value = '';
}
