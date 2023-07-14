import axios from 'axios'
import  BASE_URL  from '../false_env'


export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER_CARDS = "FILTER_CARDS"
export const ORDER_CARDS = "ORDER_CARDS"
export const TODOS = "TODOS"

export const addfav =   (character) => {
     const endpoint = `${BASE_URL}/rickandmorty/fav`;
    try{
        return async (dispatch) => {
        const {data} = await  axios.post(endpoint, character)
        console.log (data)
        return dispatch({
             type: 'ADD_FAV',
             payload: data,
          })}
    } catch (error) {console.log (error)};
};


export const removeFav = (id) => {
    const endpoint = `${BASE_URL}/rickandmorty/fav/` + id;
    return  async (dispatch) => {
        try {
            const response = await  axios.delete(endpoint)
            const data = response.data
            return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
            })
        } catch (error) {new Error(error)};
    };
    
};

export const  filterCards =  (payload) => {
    return { type: FILTER_CARDS , payload}
}
export const  orderCards =  (payload) => {
    return { type: ORDER_CARDS , payload}
}
export const  todos =  (payload) => {
    return { type: TODOS , payload}
}

