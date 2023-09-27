// import Cards from "../cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useState } from "react";

const Favorites = () => {
   const myFavorites = useSelector((state) => state.myFavorites)
   const dispatch = useDispatch()

   const [aux, setAux] = useState(false)

   const handleOrder = (event) => {
      setAux(!aux)
      dispatch(orderCards(event.target.value))
   }

   const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
   }



   return(
      <div>
         {/* <Cards characters={myFavorites} /> */}
         <select onChange={handleOrder} name="" id="">
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
         </select>

         <select onChange={handleFilter} name="" id="">
         <option value="Male">Male</option>
         <option value="Female">Female</option>
         <option value="Genderless">Genderless</option>
         <option value="unknown">unknown</option>
         </select>
         
         {
            myFavorites?.map(({id, name, image, gender}) => {
               return(
                  <Card
                     key = {id}
                     id={id}
                     name = {name}
                     image = {image}
                     gender = {gender}
                  />
               )
            })
         }
      </div>
   )
}

export default Favorites;