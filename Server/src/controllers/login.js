const users = require ('../utils/users.js')



const logins =  (req,res) => {
   const {email , password} = req.query;
   const usuario = users.find( elem => elem.email === email)
   if (usuario && usuario.password === password) {
    res.status(200).json({access: 'true'})
    }
    else { res.status(200).json({access: false})}
};




module.exports = logins
