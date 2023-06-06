//cSpell:disable
const express = require('express')

const app = express() // instanciar

app.get('/api/get', (requerimiento, respuesta) => {
    respuesta.json({ mensaje: "Me duele la mano" })
})

app.post('/api/post', (req, res) => {
    res.json({ mensaje: "Hola desde api de tipo POST" })
})

app.listen(4002, () => {
    console.log(`El servidor esta ejecutando en http://localhost:4002/api`)
})