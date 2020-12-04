document.addEventListener('DOMContentLoaded', modification);

function modification() {
  let inputTitle = document.querySelectorAll('.notes-title');
  inputTitle.forEach(feild => {
    feild.addEventListener('focus', function() {
      let parent = feild.parentNode;
      if(feild.textContent != '') {
          feild.addEventListener('focusout', function() {
            let data = parent.dataset.display;
            data = data.slice(data.indexOf('y') + 1);

            let body = document.querySelector(`.notes[data-display = display${data}] > .notes-body`)
            let newTitle = feild.textContent

            let obj = {
              id: data,
              title: newTitle,
              body: body.textContent
            };

            json = JSON.stringify(obj);

            localStorage.setItem(data, json);
          })
      }
    })
  })

  let inputBody = document.querySelectorAll('.notes-body');
  inputBody.forEach(feild => {
    feild.addEventListener('focus', function() {
      let parent = feild.parentNode;
      if(feild.textContent != '') {
          feild.addEventListener('focusout', function() {
            let data = parent.dataset.display;
            data = data.slice(data.indexOf('y') + 1);

            let title = document.querySelector(`.notes[data-display = display${data}] > .notes-title`)
            let newBody = feild.textContent

            let obj = {
              id: data,
              title: title.textContent,
              body: newBody
            };

            json = JSON.stringify(obj);
            
            localStorage.setItem(data, json);
          })
      }
    })
  })
}
