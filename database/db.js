import { Sequelize } from "sequelize";

const db = new Sequelize('api_db1', 'postgres', 'kache123', {
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432
})

export default db