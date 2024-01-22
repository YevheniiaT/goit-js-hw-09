const form = document.querySelector("form");


const LOCAL_STORAGE_KEY = "feedback-form-state"

let dataForm = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {}

form.addEventListener('input', () => {
     const { email, message } = form.elements;
  dataForm = { email: email.value.trim(), message: message.value.trim() };
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
  
    const trimmedEmail = email.value;
    const trimmedMessage = message.value;
  
    if (trimmedEmail !== '' && trimmedMessage !== '') {
        console.log({ email: trimmedEmail, message: trimmedMessage });
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    } else {
      alert('Fill in all fields of the form');
    }
});



