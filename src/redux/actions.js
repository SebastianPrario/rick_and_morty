const ADD_FAV = "ADD_FAV"
const REMOVE_FAV = "REMOVE_FAV"

export const addfav = (payload) => { 
    return { type: ADD_FAV, payload }
}

export const removeFav = (payload) => {
    return { type: REMOVE_FAV, payload }
}