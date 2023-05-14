import React from "react";
import style from "./Card.module.css"

export default function Card({id,name,species,gender,image,status,origin,onClose}) {
   //  sino hacemos destructuring se pasa el objeto props
  
   return (
      <div className={style.div}> 
         <button onClick={()=>{onClose(id)}} className={style.button}>X</button>
         <h2 className={style.h3}>{id}</h2>
         <h2 className={style.h2}>{name}</h2>
         <h2 className={style.h3}>{species}  -  {gender}</h2>
         <img src={image} className={style.image} alt='imagen' /> 
         
      </div>
   );
}
