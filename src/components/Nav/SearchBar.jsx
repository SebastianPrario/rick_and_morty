import Cards from "../Cards";
import style from "./SearchBar.module.css";
import { useState } from "react";


export default function SearchBar(props) {
   
   const [Ide,setIde] = useState ("")

   function handleChange(event) { setIde(event.target.value)}

   return (
      <div className={style.div}>
         <p className={style.id}>ID CARD: </p>
         <input type="text" className={style.input}onChange={handleChange} /> 
         <button className={style.button} onClick={()=>{props.onSearch(Ide)}}>AGREGAR PERSONAJE</button>
            
      </div>
   )
}
     
// al presionar el boton se ejecuta una funcion que retorna otra funcion
   