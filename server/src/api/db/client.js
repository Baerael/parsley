import { Sequelize } from 'sequelize'

export const createConnection = () => {
    return new Sequelize('code_challenge', 'pguser', 'pgpassword', {
        host: 'localhost',
        dialect: 'postgres',
        timezone: 'UTC'
    })
}
