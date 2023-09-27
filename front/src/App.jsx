/* Style */
import './App.css';

/* Components to render */
import About from './components/about/About';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail'
import Error404 from './components/error404/Error404';
import Favorites from './components/favorites/Favorites';
import Form from './components/form/Form';
import Nav from './components/nav/Nav';

/* Hooks */
import { useState, useEffect } from 'react';
import { Routes, Route,  useLocation, useNavigate } from 'react-router-dom'

/* Dependence */
import axios from 'axios';



const App = () => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const onClose = (id) =>{
    const charactersFiltered = characters.filter((character) => {
      return character.id !== id
    })
    
    setCharacters(charactersFiltered);
  }

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.name) {
        /* character es el parámetro de la función de flecha que representa cada elemento del array characters que se
          está evaluando en ese momento durante la iteración.
          character.id es la propiedad id del elemento actual en el array characters.
          data.id es la propiedad id de data, que es el resultado de la solicitud AJAX a la API
          La expresión character.id === data.id compara si la propiedad id del elemento actual (character.id) es igual a la propiedad id de data.
        */
        if (!characters.some(character => character.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert('Este personaje ya está en la lista.');
        }
      } 
    })
    .catch(() => {
      alert('¡No hay personajes con este ID!');
    });
  }


  const [access, setAccess] = useState(false)
  let EMAIL = 'sai@gmail.com';
  let PASSWORD = 'anbu13';

  const navigate = useNavigate()

  const login = (userData) => {
    if(userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true),
      navigate('/home')
    } 
  }

  useEffect(() => {
    !access && navigate('/');   
  }, [access]);

  return (
    <div className='App'>
      {/* Aca estoy diciendo que si estoy parado en la ruta principal de la pagina, es decir, en el inicio
      no se mostrara la barra de navegacion. De lo contrario si se muestra la barra de navegacion*/}
      {location.pathname !== '/' ? <Nav onSearch={onSearch} /> : ''}
      <Routes>
          <Route path='/' element={<Form login={login}/>} />
          <Route path="/home" element={ <Cards characters={characters} onClose={onClose}/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path='/favorites' element={<Favorites/>} />
          <Route path='*' element={<Error404/>} />
      </Routes>

    </div>
  )
}

export default App


