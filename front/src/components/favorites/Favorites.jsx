import { useSelector } from "react-redux";
import Card from "../card/Card";
// import Cards from "../cards/Cards";

const Favorites = () => {
   const myFavorites = useSelector((state) => state.myFavorites)
   return(
      <div>
         {/* <Cards characters={myFavorites} /> */}

         {
            myFavorites?.map(({id, name, image}) => {
               return(
                  <Card
                     key = {id}
                     id={id}
                     name = {name}
                     image = {image}
                  />
               )
            })
         }
      </div>
   )
}

export default Favorites;