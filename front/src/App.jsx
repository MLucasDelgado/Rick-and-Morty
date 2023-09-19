// import Card from './components/card/Card.jsx';
// import SearchBar from './components/searchBar/SearchBar.jsx';
// import characters, { Rick } from './data.js';
// import SearchBar from './components/searchBar/SearchBar';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import { useState } from 'react';
import axios from 'axios';



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
      <Cards characters={characters} onClose={onClose} />
    </div>
  )
}

export default App


