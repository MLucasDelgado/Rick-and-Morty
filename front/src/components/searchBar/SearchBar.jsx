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
      <div className={style.contenedor}>
         <input 
            type="search" 
            onChange={handleChange} 
            value={id} 
            placeholder="id"
            className={style.input1}
         />
         <button className={style.boton} onClick={() => handleSearch()}>Search</button>
      </div>
   )
}

export default SearchBar;