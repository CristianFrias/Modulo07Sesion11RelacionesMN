const { Sequelize } = require("sequelize");

const conexion = new Sequelize({
    host: 'localhost',
    port: 5432,
    database: 'curso0086',
    username: 'postgres',
    password: 'postgres',
    dialect: 'postgres' // OPCIÓN SOLO PARA SEQUELIZE
});

module.exports = conexion;