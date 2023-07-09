const { Favorite} = require ('../DB_connection')

const deleteFav = async (req,res) => {
    try {  //ver que pasa con Id
        const ido = req.params.id
        console.log(ido)
        await Favorite.destroy( { where: {id:ido}})

        const allFavorites = await Favorite.findAll()

        return res.json(allFavorites)
         

       

    } catch (error) {res.status(500).json({error:error.message})}

}

module.exports= deleteFav