import { useState } from "react";
import style from './SearchBar.module.css'

const SearchBar = ({ onSearch }) => {

   const [id, setId] = useState('')
   const handleChange = (event) => {
      setId(event.target.value)
   }

   const handleSearch = () => {
      onSearch(id)
      setId('')
   }
   return(
      <div>
         <input 
            type="search" 
            onChange={handleChange} 
            value={id} 
            placeholder="id"
            className={style.input1}
         />
         <button onClick={() => handleSearch()}>Agregar</button>
      </div>
   )
}

export default SearchBar;