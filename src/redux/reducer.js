const ADD_FAV = "ADD_FAV"
const REMOVE_FAV = "REMOVE_FAV"

const inicialState = { myFavorites : []}

const rootReducer = (state=inicialState, action) => {
    switch (action.type) {
        case ADD_FAV: 
            return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload]
        }
        case REMOVE_FAV:
            return {
            ...state ,
            myFavorites: state.myFavorites.filter((char) => char.id !== action.payload)
        }
        default: return {...state }
    }

}
export default rootReducer