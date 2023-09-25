import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions/actions";


const Card = ({ id, name, image, onClose }) => {
   
   const dispatch = useDispatch();

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(id))
      } else {
         setIsFav(true)
         dispatch(addFav({ id, name, image, onClose }))
      }
   } 

   const myFavorites = useSelector(state => state.myFavorites);
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   const { pathname } = useLocation()
   return(
      <div>

         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         {
            pathname !== '/favorites' ?
            <button onClick={() => onClose(id)}>X</button>
            : ''
         }
         
         <Link to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
         </Link>
         {/* <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2> */}
         <img src={image} alt={name} />
      </div>
   )
}
export default Card;
