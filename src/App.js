import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx'
import Nav from './components/Nav/navegador.jsx'
import { useState } from 'react';
import axios from 'axios'

function App() {

   const [characters,setCharacters] = useState ([])
   
   function onSearch(id) { //hace el pedido a la api con el id 2) si recibio bien la respuesta agrega el personaje recibido al estado
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {//data es el objeto que contiene al personaje que traje
         if (data.name && !characters.find((char) => char.id===data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);// le pasa una CB con el valor viejo y adiciona el valor nuevo
            // es igual que decir setCharacters ([...characters,data]) en esta forma se puede pisar el estado
            // de la otra forma se pasa por Cb y no se toca el estado
            } else {alert('¡No hay personajes con este ID o ya esta Repetido!');
         }
      });
   }
   function onClose(ido) {
   const filtro = characters.filter((personajes) => personajes.id !== ido)
    setCharacters(filtro)   // filtro retorna una array nuevo  donde el personaje que tenia el id ya no esta
   }
   return ( 
      <div className='App'>
        <Nav className='Nav' onSearch={onSearch} />
        <Cards characters={characters}
               onClose = {onClose} />
      </div>
   );
}

export default App;
