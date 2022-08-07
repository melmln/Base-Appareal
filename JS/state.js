// Active state

form.addEventListener("submit", (e) => {  // Agrego evento submit al form que al enviar el formulario toma el value del input y ejecuta la función que verifica el email
    e.preventDefault()
    const valueEmail = inputEmail.value
    validarEmail(valueEmail)
})


const validarEmail = (valueEmail) => {
    let regExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    let validar = regExp.test(valueEmail)
    if(validar){
        errorMessage.innerHTML = ""
        inputEmail.classList.remove("error") 
        btnEmail.classList.remove("btnError")
    } else {
        inputEmail.classList += " error"
        btnEmail.classList += " btnError"
        errorMessage.innerHTML = "Please provide a valid email"
    }

}


