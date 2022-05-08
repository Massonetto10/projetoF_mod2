import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(
    'postgres://livro_user:rbsUiNzbTSkYk9SmtohqVIpWlzRLodFp@dpg-c9rscesgqg450d9v8rag-a/livro',
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)