import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions/actions";
import style from './Card.module.css'


const Card = ({ id, name, image, onClose, gender }) => {
   
   const dispatch = useDispatch();

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(id))
      } else {
         setIsFav(true)
         dispatch(addFav({ id, name, image, onClose, gender }))
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
      <div className={style.containerCard}>
         <div className={style.container2}>
            {
               isFav ? (
                  <button className={style.button} onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button className={style.button} onClick={handleFavorite}>🤍</button>
               )
            }

            {
               pathname !== '/favorites' ?
               <button className={style.button} onClick={() => onClose(id)}>X</button>
               : ''
            }
         </div>
         
         <Link to={`/detail/${id}`}>
            <h2 className={style.nombre}>{name}</h2>
         </Link>
         {/* <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2> */}
         <img className={style.imagen} src={image} alt={name} />
      </div>
   )
}
export default Card;
