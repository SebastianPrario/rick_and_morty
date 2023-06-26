import React from "react";
import axios from "axios";
import style from "./Detail.module.css"
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Detail() {

const [character,setCharacter] = useState ([])
 const params = useParams()
 const par = JSON.parse(params.detailid)
 console.log(par)
useEffect(() => {  
 
    axios(`http://localhost:3001/rickandmorty/characters/${par}`).then(({ data }) => {

       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    })},[] //corte
)

return (
    
        <div className={style.div}>
            <img className={style.image} src={character.image} alt="imagen" /> 
            <h1 className={style.h1}>{character.name}</h1>
            <div className={style.div2}>
                {character.name ?
                (<>
                <p>Status:{character.status}</p>
                <p>Species:{character.species}</p>
                <p>Origin:{character.origin.name}</p>
                <p>Gender:{character.gender}</p>
                 </>)
                  : (<h1>Loading...</h1>)  // se pone el if por la demora 
                        
            }
                
            </div>
           

        </div>
   
    )

}
