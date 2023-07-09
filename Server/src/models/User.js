const { DataTypes } = require('sequelize');
const sequelize = require('../DB_connection')

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: { type:
          DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
            
      },
      email: {type: 
         DataTypes.STRING,
         allowNull: false,
         isEmail: true},
      password: {type: 
         DataTypes.STRING,
         allowNull: false}, 
      }
   , { timestamps: false });
};
