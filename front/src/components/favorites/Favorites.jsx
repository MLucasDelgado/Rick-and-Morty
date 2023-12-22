// import Cards from "../cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useState } from "react";
import style from './Favorites.module.css'

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



   return (
      <div className={style.container}>
         <div className={style.contenedor}>
            <select onChange={handleOrder} name="" id="" className={style.selects}>
               <option value="Ascendente" className={style.options}>Ascendente</option>
               <option value="Descendente" className={style.options}>Descendente</option>
            </select>

            <select onChange={handleFilter} name="" id="" className={style.selects}>
               <option value="Male" className={style.options}>Male</option>
               <option value="Female" className={style.options}>Female</option>
               <option value="Genderless" className={style.options}>Genderless</option>
               <option value="unknown" className={style.options}>unknown</option>
               <option value="all" className={style.options}>All</option>
            </select>
         </div>

         <div className={style.cartas}>

            {
               myFavorites?.map(({ id, name, origin, species, status, image, gender }) => {
                  return (
                     <Card
                        key={id}
                        id={id}
                        name={name}
                        origin={origin}
                        species={species}
                        status={status}
                        image={image}
                        gender={gender}
                     />
                  )
               })
            }
         </div>
      </div>
   )
}

export default Favorites;