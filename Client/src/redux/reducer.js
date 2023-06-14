import {ADD_FAV,REMOVE_FAV,FILTER_CARDS,ORDER_CARDS, filterCards, orderCards, todos, TODOS} from './actions'

const inicialState = { myFavorites :[],
                       allCharacters:[]}

const rootReducer = (state=inicialState, action) => {
    switch (action.type) {
        case ADD_FAV: 
            return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload],
            allCharacters: [...state.myFavorites, action.payload]
        }
        case REMOVE_FAV:
            return {
            ...state ,
            myFavorites: state.myFavorites.filter((char) => char.id !== action.payload)
        }
        case FILTER_CARDS:
            return {
            ...state ,
            myFavorites: state.allCharacters.filter((char) => char.gender === action.payload)
           
        } 
        case ORDER_CARDS:
            return {
            ...state ,
            myFavorites: (action.payload==="a") ? [...state.myFavorites.sort((a,b) => a.id - b.id)] :  [...state.myFavorites.sort((b,a) => a.id - b.id)] 
            
        }
        case TODOS:
            return {
            ...state, myFavorites: state.allCharacters
            
        }




        default: return {...state }
    }

}
export default rootReducer