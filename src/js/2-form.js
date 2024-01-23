const form = document.querySelector("form");
const LOCAL_STORAGE_KEY = "feedback-form-state"

let dataForm = null
try {
 dataForm = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {}
}
catch (error) {
  console.log(error.name)
}


form.addEventListener('input', () => {
     const { email, message } = form.elements;
  dataForm.email = email.value;
  dataForm.message = message.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataForm))
});


function initFormVal() {
  const { email, message } = form.elements;
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

initFormVal()


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { email, message } = form.elements;
  
    const emailEl = email.value.trim();
    const messageEl = message.value.trim();
  
    if (emailEl !== '' && messageEl !== '') {
        console.log({ email: emailEl, message: messageEl });
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    } else {
      alert('Fill in all fields of the form');
    }
});



