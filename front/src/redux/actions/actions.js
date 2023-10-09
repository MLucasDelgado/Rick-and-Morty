import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../action-type/action-type";
import axios from "axios";


// export const addFav = (character) => {
//     return {
//         type: ADD_FAV,
//         payload: character
//     }
// }

export const addFav = (character) => {
   try {
     const endpoint = 'http://localhost:3001/rickandmorty/fav';

     return async (dispatch) => {
       const response = await axios.post(endpoint, character);
       const data = response.data;
 
       dispatch({
         type: ADD_FAV,
         payload: data
       });
     };
   } catch (error) {
     throw new Error(error.message);
   }
 };

// export const removeFav = (id) => {
//     return{
//         type: REMOVE_FAV,
//         payload: id
//     }
// }

export const removeFav = (id) => {
  try {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    
    return async (dispatch) => {
      const response = await axios.delete(endpoint);
      const data = response.data;

      dispatch({
        type: REMOVE_FAV,
        payload: data
      });
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}