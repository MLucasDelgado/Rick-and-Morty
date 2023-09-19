import { useState } from "react";

const SearchBar = ({ onSearch}) => {

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
         />
         <button onClick={() => handleSearch()}>Agregar</button>
      </div>
   )
}

export default SearchBar;