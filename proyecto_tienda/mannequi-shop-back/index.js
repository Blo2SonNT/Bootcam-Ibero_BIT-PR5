//cSpell:disable
const express = require('express')
const conectarDB = require('./config/db')


const app = express() // instanciar
conectarDB()

app.use(express.json())

app.use('/api', require('./routes/routes'))

app.listen(4002, () => {
    console.log(`El servidor esta ejecutando en http://localhost:4002/api`)
})