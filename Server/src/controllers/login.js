const {User} = require ('../DB_connection')


const login = async (email,password) => {
    if (!email || !password) throw Error ('Faltan datos para validar') 
    const users = await User.findOne({
         where: {email: email},
        })
    if (!users) throw Error ('Usuario no Encontrado')
    if (users.password !== password) throw Error ('Contraseña incorrecta')

    return {access: true}
}

module.exports = login