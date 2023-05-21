import React from "react";
import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import style from './Form.module.css'
import { validar} from './validete'
import imagen from '../../imagenes/images.jpg'

export default function Form ({login}) {

const [userData,setUserData] = useState( [{email:  "", password: ""}])
const {email,password} = userData
const [error,setError] = useState( [{email:  "", password: ""}])

const handleChange  = (event) => {
const property = event.target.name;
const value = event.target.value
setUserData({...userData,[property]: value})
setError(validar({ ...userData,[property]:value}))
}

const handleSubmit = (event) => { 
    event.preventDefault()
    login(userData)  
 }

return (

<div className={style.div}>
<img src={imagen} alt="rick and morty"/>
<form className={style.form} onSubmit={handleSubmit}>
<label htmlFor="email">email:</label>
<input type="text" name="email" value = {userData.email} onChange={(event)=>handleChange(event)}/>
<p>{error.email}</p>
<label htmlFor="password">password:</label>
<input type="password" name="password" value={userData.password} onChange={(event)=>handleChange(event)}/>
<p>{error.password}</p>
<button type="submit" className={style.button}>submit</button>

</form>

</div>



)


}