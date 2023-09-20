// import Card from './components/card/Card.jsx';
// import SearchBar from './components/searchBar/SearchBar.jsx';
// import characters, { Rick } from './data.js';
// import SearchBar from './components/searchBar/SearchBar';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import About from './components/about/About';
import Detail from './components/detail/Detail'


const App = () => {
  const [characters, setCharacters] = useState([]);

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

  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/home" element={ <Cards characters={characters} onClose={onClose}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App


