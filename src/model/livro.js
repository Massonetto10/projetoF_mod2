import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'

export const livro = connection.define('livro', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    ano: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    autores: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    sinopse: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    img: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
})
const initTable = async () => {
    try {
        await livro.sync()
    }
    catch(error){
        return error.message
    }
}

initTable()
