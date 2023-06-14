export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER_CARDS = "FILTER_CARDS"
export const ORDER_CARDS = "ORDER_CARDS"
export const TODOS = "TODOS"

export const addfav = (payload) => { 
    return { type: ADD_FAV, payload }
}

export const removeFav = (payload) => {
    return { type: REMOVE_FAV, payload }
}

export const  filterCards =  (payload) => {
    return { type: FILTER_CARDS , payload}
}
export const  orderCards =  (payload) => {
    return { type: ORDER_CARDS , payload}
}
export const  todos =  (payload) => {
    return { type: TODOS , payload}
}

