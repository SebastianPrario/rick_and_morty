import './App.css';
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
import BASE_URL  from './false_env';


function App({removeFavorite}) {
   
   const [characters,setCharacters] = useState ([])
   
   const onSearch = async (id) => { 
      if (characters.find((char) => char.id==id)) {return alert("personaje repetido")}
      else
      try {
         const response =  await axios.get(`${BASE_URL}/rickandmorty/characters/${id}`)
         const data = response.data
         if (data.name) { setCharacters((oldChars) => [...oldChars, data]);
         } else { window.alert('¡No hay personajes con este ID!');
         }
      } catch (error){alert('¡No hay personajes con este ID!')}
   }

   function onClose(ido) {
    const filtro = characters.filter((personajes) => personajes.id !== ido)
    setCharacters(filtro);
    removeFavorite(ido)
 
    // filtro retorna una array nuevo  donde el personaje que tenia el id ya no esta
   }

   const location = useLocation()
   const navigate= useNavigate()
   const [access,setAccess] = useState(false)

   
   async function login(userData) {
      const URL = `${BASE_URL}/rickandmorty/login`;
      try {
         const { email, password } = userData;
         const response = await axios.get(URL + `?email=${email}&password=${password}`)
         const data = response.data
         const { access } = data;
         setAccess(data);
         access && navigate('/home')
      } catch (error) {console.log (error)};
   };
   

   useEffect(() => {
   !access && navigate('/'); //si access es falso nos manda al home.hace si no te logueaste no puedes pasar por ninguna otra ruta
   }, [access]);

   return ( 
      <div className='app'>
         <nav >
           {location.pathname!=='/' && <Nav onSearch={onSearch} /> }
         </nav>
         <div>
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
