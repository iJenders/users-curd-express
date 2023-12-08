import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNum: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    birth: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 0
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 0
    }
})