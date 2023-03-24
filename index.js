import express from 'express'
import cors from 'cors'

//Importamos la coneccion a BD
import db from './database/db.js'

import prodRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/product', prodRoutes)

try {
    await db.authenticate()
    console.log('Coneccion exitosa a DB')
} catch (error) {
    console.log(`Hay error de la coneccion a DB: ${error}`)
}

app.get('/', (req, res) => {
    res.send('Api REST con node, Express, Sequelize y Postgres')
})

app.listen(8000, () => {
    console.log('Server Up & Running in http://localhost:8000')
})

