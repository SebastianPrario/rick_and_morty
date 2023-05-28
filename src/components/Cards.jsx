import Card from './Card';
import style from "./Cards.module.css"

export default function Cards(props) {
  
   return (
      
   <div className={style.div}>
   {props.characters.map(({id,name,species,gender,image}) => {
         return (
     
         <Card 
         key = {id}
         id =  {id}
         name = {name}
         species = {species}
         gender = {gender}
         image={image}
         onClose={props.onClose}
         
           />)
      })
   }

</div>

   )
}