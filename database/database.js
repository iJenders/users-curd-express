import Sequelize from "sequelize";

const DATABASE = 'crud_usuarios'
const USERNAME = 'root'
const PASSWORD = ''
const HOST = '127.0.0.1'

export const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: 'mysql'
})