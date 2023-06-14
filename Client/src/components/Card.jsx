import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addfav,removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState ,useEffect } from "react";

function Card({id,name,species,gender,image,status,origin,onClose,removeFavorite,addfavorite,myFavorites}) {
   //  sino hacemos destructuring se pasa el objeto props

const [isFav, setIsFav] = useState(false)

const handleFavorite = () =>{
   if(isFav) { 
      setIsFav(false)
      removeFavorite(id)
   }
   else {
      setIsFav(true)
      addfavorite(
         {id,name,species,gender,image,status,origin})
   }
   
}

useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);


return (
      <div className={style.div}> 
      {isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
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

const mapDispatchToProps = (dispatch) => { 
   return { 
   addfavorite: (character) =>{dispatch(addfav(character))
   },
   removeFavorite: (id) => {dispatch(removeFav(id))
   },
 }
}

const mapStateToProps =  (state) =>  {
  
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)