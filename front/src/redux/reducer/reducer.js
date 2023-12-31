import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../action-type/action-type"

const initialState = {
  myFavorites: [],
  allCharacters: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_FAV:
    //     return{
    //         ...state,
    //         myFavorites: [...state.allCharacters, action.payload],
    //         allCharacters: [...state.allCharacters, action.payload]
    //     }
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload
      }

    // case REMOVE_FAV:
    //     return{
    //         ...state, 
    //         myFavorites: state.myFavorites.filter((character) => {
    //             return character.id != action.payload
    //         }) 
    //         //Estoy diciendo que me devuelva todos los personajes cuyo id sea distinto al id de action.payload
    //     }
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload
      };

    case FILTER:
      let filteredCharacters;

      if (action.payload === 'all') {
        // Si se selecciona "Todos", mostrar todos los personajes sin filtrar.
        filteredCharacters = state.allCharacters;
      } else {
        // Aplicar el filtro seleccionado.
        filteredCharacters = state.allCharacters.filter(
          (character) => character?.gender === action.payload
        );
      }

      return {
        ...state,
        myFavorites: filteredCharacters,
      };

    case ORDER:
      // Determina si se debe ordenar de forma ascendente o descendente
      if (action.payload === 'Ascendente') {
        return {
          ...state,
          myFavorites: [...state.myFavorites].sort((character1, character2) => character1.id - character2.id)
        }
      } else if (action.payload === 'Descendente') {
        return {
          ...state,
          myFavorites: [...state.myFavorites].sort((character1, character2) => character2.id - character1.id)
        }
      }

    default:
      return {
        ...state
      }
  }
}

export default reducer