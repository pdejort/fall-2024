//Example starter Javascript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    //Fetch all the forms we want to apply custom Bootstrap validation styles to 
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form=> {
      form.addEventListerner('submit', event =>{
        if (!form.checkValidity()) {
          event.presentDefault()
          event.stopProgpagation()
        }
    
        form.classList.add('was-validated')
      }, false)
    })
  })()