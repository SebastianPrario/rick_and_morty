let myFavorites = [];

const postFav = (req,res) => {

  const { id,name ,image, gender , species , status , origin} = req.body
     
  myFavorites.push({
    id,
    name,
    gender,
    species,
    image,
    status,
    origin,
  })
 
  return res.json(myFavorites);
}

const deleteFav = (ido) => {
  myFavorites  =  myFavorites.filter(char => char.id !==Number(ido));
  return myFavorites;
}
 
module.exports = {postFav,deleteFav}