const { Favorite} = require ('../DB_connection')

const getFav = async (req,res) => {
    try {  //ver que pasa con Id
        const allFavorites = await Favorite.findAll()
        return res.json(allFavorites)

    } catch (error) {res.status(499).json({error:error.message})}

}

module.exports = getFav
