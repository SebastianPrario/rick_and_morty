const { Router } = require ('express')
const getCharById = require ('../controllers/getCharById')
const logins = require ('../controllers/login')
const {postFav, deleteFav}= require ('..//controllers/handleFavorites')


const mainRouter = Router()



mainRouter.get("/characters/:id", async (req,res) => {
  try {
  
    const ido = req.params.id
    const {id,image,name,gender,status,origin,species} = await getCharById(ido)
   
    res.json({id,image,name,gender,status,origin,species})

  } catch (error) { res.status(500).json({error: 'personaje no encontrado'})}   

})
  
mainRouter.get("/login" , (req,res) => {
  logins(req,res)
})
  
mainRouter.post("/fav", (req,res) => {
  postFav(req,res)

})

mainRouter.delete("/fav/:id", (req,res) => {
  const ido = req.params.id
  const restoPers = deleteFav(ido)
  res.json(restoPers)

})





module.exports = mainRouter