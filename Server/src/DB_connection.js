require('dotenv').config();  // para trabajar con las variables de entorno
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST,DB_PORT , BDD, DB_VIRTUAL} = process.env; // se hace destructuring de env
const FavoriteModel = require ('./models/Favorite');
const UserModel = require ('./models/User');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
//,
const ruta = DB_VIRTUAL ?  DB_VIRTUAL : `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${BDD}`

const sequelize = new Sequelize(ruta,
   { logging: false, native: false } //logging borra de la consola la instruccion sequalize
);



// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

FavoriteModel(sequelize)

UserModel(sequelize)



// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
 const { User, Favorite } = sequelize.models;
 
 User.belongsToMany(Favorite, {through:"user_favorite"});
 Favorite.belongsToMany(User,{through:"user_favorite"})


module.exports = {
    User,
    Favorite,
    conn: sequelize,
  
 }

