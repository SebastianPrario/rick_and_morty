import React from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Card";
import { removeFav } from '../../redux/actions';


const Favorites =  ({props,myFavorites}) => {
   const dispatch = useDispatch();

   const close = (id) => {
      console.log(id,'anda')
      dispatch(removeFav(id))
   }

   return (
   <div className='style.div'>
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
      }
   </div>

)
}

const mapStateToProps =  (state) =>  {
  
    return {
       myFavorites: state.myFavorites
    }
 }
 

 export default connect(mapStateToProps,null)(Favorites)



