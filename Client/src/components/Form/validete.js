export const validar= ({email,password}) => {
    let errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    
    if(!email) {errors.email="Se requiere un email"}
    else if(email.length>35) {errors.email ='El email no puede exeder los 35 caracteres'}
    else if(!(regexEmail.test(email))){errors.email="Debe ser un correo electrónico"}
    
    if(!password) {errors.password="la contraseña tiene que tener al menos un caracter"} 
    else if(password.length<6 || password.length>10) {errors.password ='la longitud entre 6 y 10'} else {errors.password=""}
    return errors
    }

