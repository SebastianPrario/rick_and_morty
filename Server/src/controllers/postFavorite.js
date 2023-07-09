const { Favorite} = require ('../DB_connection')

const postFav = async (req,res) => {
    try {  //ver que pasa con Id
        const { id, name,image,species,gender} = req.body

        if (!id ,!name  || !image || !species || !gender) {
            return res.status(401).json('faltan datos')
        }
        console.log(id,name,image,species,gender)
        await Favorite.findOrCreate({
            where: { id,name,image,species,gender}
        })
        const allFavorites = await Favorite.findAll()
        return res.json(allFavorites)

    } catch (error) {res.status(499).json({error:error.message})}

}

module.exports = postFav
