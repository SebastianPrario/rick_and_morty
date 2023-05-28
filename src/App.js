import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx'
import Nav from './components/Nav/navegador.jsx'
import { useState , useEffect } from 'react';
import axios from 'axios'
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Favorites from './components/Favorites/favorites'
import { Route , Routes , useLocation, useNavigate} from 'react-router-dom';
import Form from './components/Form/Form'
import { connect } from 'react-redux';
import { removeFav } from './redux/actions';

function App({removeFavorite}) {
   
   const [characters,setCharacters] = useState ([])
   
   function onSearch(id) { 
      if (characters.find((char) => char.id==id)) {return alert("personaje repetido")}
      else {axios(`https://rickandmortyapi.com/api/character/${id}`).then(( { data }) => {
     
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }).catch(()=> ( TypeError(alert('No hay Personaje con ese ID')))
       );
   }
   }  

   function onClose(ido) {
   console.log(removeFavorite)
      const filtro = characters.filter((personajes) => personajes.id !== ido)
    setCharacters(filtro);
    removeFavorite(ido)
   console.log(removeFavorite)
    // filtro retorna una array nuevo  donde el personaje que tenia el id ya no esta
   }
   const location = useLocation()
   const navigate= useNavigate()
   const [access,setAccess] = useState(false)
   const EMAIL = 'email@email.com';
   const PASSWORD = 'pass1234'
   
   function login(userData,app) {
        if (userData.password===PASSWORD && userData.email===EMAIL) {
            setAccess(true);
            navigate('/home');
          
        } else alert( 'credenciales incorrectas')
         
   }

useEffect(() => {
            !access && navigate('/'); //si access es falso nos manda al home.hace si no te logueaste no puedes pasar por ninguna otra ruta
         
         }, [access]);




   return ( 
      <div >
        
         <div className='app'>
           {location.pathname!=='/' && <Nav onSearch={onSearch} /> }
            <Routes>         
               <Route path='/home' element={<Cards  characters={characters} onClose={onClose}/>}/>
               <Route path='/about' element={<About/>} />
               <Route path='/detail/:detailid' element={<Detail />} />
               <Route path='/' element={<Form login={login} />} />
               <Route path='/favorites' element={<Favorites/>} />
            </Routes> 
         </div>
      </div>
   );
}
const mapDispatchToProps = (dispatch) => { 
      return { 

      removeFavorite: (id) => {dispatch(removeFav(id))
      },
   }
   }

export default connect(null,mapDispatchToProps)(App)
