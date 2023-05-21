import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx'
import Nav from './components/Nav/navegador.jsx'
import { useState , useEffect } from 'react';
import axios from 'axios'
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import { Route , Routes , useLocation, useNavigate} from 'react-router-dom';
import Form from './components/Form/Form'

function App() {

   const [characters,setCharacters] = useState ([])
   const [app,setApp] = useState('App')
   function onSearch(id) { 
      if (characters.find((char) => char.id==id)) {return alert("personaje repetido")}
      else {axios(`https://rickandmortyapi.com/api/character/${id}`).then(( { data }) => {
      
      if (data?.id) {
         setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }).catch(()=> ( TypeError('c'))
       );
   }
   }  

   function onClose(ido) {
   const filtro = characters.filter((personajes) => personajes.id !== ido)
    setCharacters(filtro)   // filtro retorna una array nuevo  donde el personaje que tenia el id ya no esta
   }
   const location = useLocation()
   const navigate= useNavigate()
   const [access,setAccess] = useState(false)
   const EMAIL = 'seba@seba.com';
   const PASSWORD = '123456'
   
   function login(userData,app) {
        if (userData.password===PASSWORD && userData.email===EMAIL) {
            setApp('App1') 
            setAccess(true);
            navigate('/home');
          
        } else alert( 'credenciales incorrectas')
         
   }

useEffect(() => {
            !access && navigate('/'); //si access es falso nos manda al home.hace si no te logueaste no puedes pasar por ninguna otra ruta
         
         }, [access]);




   return ( 
      <div className={app}>
        { location.pathname!=='/' && <Nav className='Nav' onSearch={onSearch} /> }
        <Routes>         
         <Route path='/home' element={<Cards  characters={characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About/>} />
         <Route path='/detail/:detailid' element={<Detail />} />
         <Route path='/' element={<Form login={login} />} />
        </Routes>
       
      </div>
   );
}

export default App;
