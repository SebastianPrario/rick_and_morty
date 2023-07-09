const { Router } = require ('express')
const getCharById = require ('../controllers/getCharById')
const {postUser} = require ('../controllers/postUser')
const login = require ('../controllers/login')
const postFav= require ('..//controllers/postFavorite')
const deleteFav= require ('..//controllers/deleteFav')



const mainRouter = Router()



mainRouter.get("/characters/:id",async (req,res) => {
  try {
  
    const ido = req.params.id
    const {id,image,name,gender,status,origin,species} =  await getCharById(ido)
   
    res.json({id,image,name,gender,status,origin,species})

  } catch (error) { res.status(500).json({error: 'personaje no encontrado'})}   

})
  
mainRouter.post("/login" , async (req,res) => {
  try {
  const { email , password } = req.body
  const newuser = await postUser(email,password)
  res.status(201).json(newuser)
  } catch (error) {res.status(400).json({error: error.message})}
})

mainRouter.get("/login" , async (req,res) => {
  try {
    const { email, password} = req.query
    console.log(email,password)
    const loginSuccess = await login(email,password)
    res.status(200).json(loginSuccess)
  } catch (error) {res.status(500).json({error: error.message})}
})

  
 mainRouter.post("/fav", (req,res) => {
   postFav(req,res)

})

mainRouter.delete("/fav/:id", (req,res) => {
  deleteFav(req,res)
  

 })





module.exports = mainRouter