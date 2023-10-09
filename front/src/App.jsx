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
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

/* Dependence */
import axios from 'axios';



const App = () => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const onClose = (id) => {
    const charactersFiltered = characters.filter((character) => {
      return character.id !== id
    })

    setCharacters(charactersFiltered);
  }

  const onSearch = async (id) => {
    try {
      const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      const data = response.data;

      if (data.name) {
        if (!characters.some((character) => character.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert('Este personaje ya está en la lista.');
        }
      } 
      
    } catch (error) {
      alert("No se encontró un personaje con ese ID");
      throw Error(error.message)
    }
  };


  const [access, setAccess] = useState(false)
  let EMAIL = 'sai@gmail.com';
  let PASSWORD = 'anbu13';

  const navigate = useNavigate()

  // const login = (userData) => {
  //   if(userData.email === EMAIL && userData.password === PASSWORD){
  //     setAccess(true),
  //     navigate('/home')
  //   } 
  // }
  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    }
    catch (error) {
      throw Error(error.message)
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
        <Route path='/' element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<Error404 />} />
      </Routes>

    </div>
  )
}

export default App


