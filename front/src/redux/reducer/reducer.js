import { ADD_FAV, REMOVE_FAV } from "../action-type/action-type"

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state, 
                myFavorites: state.myFavorites.filter((character) => {
                    return character.id != action.payload
                }) 
                //Estoy diciendo que me devuelva todos los personajes cuyo id sea distinto al id de action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer