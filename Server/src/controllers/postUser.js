const { User } = require ('./../DB_connection.js')


const postUser = async (email,password) => {

if(!email || !password) {throw Error ('Faltan datos')}
const [row , created] = await User.findOrCreate ({ 
  where: {
     email,
     password,
  }

})

return row.dataValues
}

module.exports = {postUser}