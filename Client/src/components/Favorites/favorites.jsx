import React from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Card";
import { removeFav } from '../../redux/actions';
import { useState } from "react";
import { filterCards,orderCards , todos } from "../../redux/actions";
import  style from './favorites.module.css'


const Favorites =  ({myFavorites}) => {
   const dispatch = useDispatch();

   const close = (id) => 
       dispatch(removeFav(id))
   
   const [aux,setAux] = useState(false)

   const handleOrder = (e) => {dispatch(orderCards(e.target.value))
                               setAux(true)}

   function handleFilter (e) { if (e.target.value==="todos") {dispatch(todos())}
   else {dispatch(filterCards(e.target.value))}}
   



   return (
   <div className={style.div}>
     <div className={style.selectores}>
         <select name="ordenar" placeholder="Ordenar" onChange={(event)=>handleOrder(event)}>
            <option value="a">ascendente</option>
            <option value="d">descendente </option>
         </select>
         <select name="filtrar" placeholder="Filtrar"  onChange={(event)=>handleFilter(event)}>
            <option value="Male">Male</option>
            <option value="Female" selected>Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="todos">todos</option>
         </select>
     </div> 
      <div>
     {myFavorites.map(({id,name,species,gender,image,onClose}) => {
            return (
      
            <Card 
            key = {id}
            id =  {id}
            name = {name}
            species = {species}
            gender = {gender}
            image={image}
            onClose={close}
            
         
            
            />)
         })
      }</div>
   </div>

)
}

const mapStateToProps =  (state) =>  {
  
    return {
       myFavorites: state.myFavorites
    }
 }
 

 export default connect(mapStateToProps,null)(Favorites)



