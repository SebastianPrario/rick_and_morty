const express = require ("express")
const  axios   = require ("axios")



const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (ido) => {
   
    const response = await axios.get(`${URL}${ido}`);
    const  {id,image,name,gender,status,origin,species} = response.data
    return name ?{id,image,name,gender,status,origin,species}  : new Error ({error : 'no found'})

}
  

module.exports = getCharById
