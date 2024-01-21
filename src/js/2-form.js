const form = document.querySelector("form");


let LOCAL_STORAGE_KEY = "feedback-form-state"

let dataForm = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {}
console.log(dataForm)
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
  
    console.log({ email: email.value.trim(), message: message.value.trim() })
    
    localStorage.removeItem(LOCAL_STORAGE_KEY);
   
//      const { email, message } = form.elements;
//   dataForm = { email: email.value.trim(), message: message.value.trim() };
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataForm))
    
});

