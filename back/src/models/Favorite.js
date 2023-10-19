const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         // ENUM, significa que yo indico la cantidad exacta de datos que tienen que ingresar
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allowNull: true
      },
      species: {
         type: DataTypes.STRING,
         allowNull: true
      },
      gender:{
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull: false
      },
      origin: {
         type: DataTypes.STRING, // DataTypes.json si trabajamos con objeto {name: Earth, ulr:https://algo}
         allowNull: true
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
};
