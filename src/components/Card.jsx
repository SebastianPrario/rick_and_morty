import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card({id,name,species,gender,image,status,origin,onClose}) {
   //  sino hacemos destructuring se pasa el objeto props
 
   return (
      <div className={style.div}> 
         <button onClick={()=>{onClose(id)}} className={style.button}>X</button>
         <h2 className={style.h3}>{id}</h2>
         <Link to={`/detail/${id}`}>
         <h2 className={style.h2}>{name}</h2>
         </Link>
         <h2 className={style.h3}>{species}  -  {gender}</h2>
         <img src={image} className={style.image} alt='imagen' /> 
         
      </div>
   );
}
