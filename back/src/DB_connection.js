require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL 
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
// asi presento los modelos a la base de datos, y se generan las tablas
FavoriteModel(sequelize);
UserModel(sequelize);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

// relacion N:M
User.belongsToMany(Favorite, {through: 'user_favorite', timestamps: false});
Favorite.belongsToMany(User, {through: 'user_favorite', timestamps: false});

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
