// import Card from './components/card/Card.jsx';
// import SearchBar from './components/searchBar/SearchBar.jsx';
// import characters, { Rick } from './data.js';
// import SearchBar from './components/searchBar/SearchBar';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import axios from 'axios';
import About from './components/about/About';
import Detail from './components/detail/Detail'
import Form from './components/form/Form';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'

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
          setCharacters((oldChars) => [...oldChars, data]);
       } 
    })
    .catch(() => {
      alert('¡No hay personajes con este ID!')
    })
  }

  const [access, setAccess] = useState(false)
  let EMAIL = 'lucas@gmail.com';
  let PASSWORD = 'lucas22';

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
      {location.pathname !== '/' ? <Nav onSearch={onSearch} /> : ''}
      <Routes>
        <Route path='/' element={<Form login={login}/>} />
        <Route path="/home" element={ <Cards characters={characters} onClose={onClose}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App


