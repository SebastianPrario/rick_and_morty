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
    <div className={style.background}>
        <div className={style.div}>
            <img src={imagen} alt="rick and morty" className={style.img} />
            <form className={style.form} onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="email@email.com" value={userData.email} onChange={(event)=>handleChange(event)}/>
            <p>{error.email}</p>
            <input type="password" name="password" placeholder="pass1234" value={userData.password} onChange={(event)=>handleChange(event)}/>
            <p>{error.password}</p>
            <button type="submit" className={style.button}>submit</button>

            </form>
        </div>
</div>


)


}