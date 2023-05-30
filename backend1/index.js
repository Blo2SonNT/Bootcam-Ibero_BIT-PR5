const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')
const app = express()

conectarDB()

app.use(express.json())

app.use(cors())

app.use('/api', require('./routes/routes.js'))

app.listen(4000, () => {
    console.log('API en ejecución')
})