// const os = require('os');

// console.log(os.platform())
// console.log(os.release())
// console.log(os.totalmem())
// console.log(os.freemem())

// const fs = require('fs');

// fs.writeFile('./nota.txt', 'hola mundo', (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("archivo creado...")
//     }
// })

const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Servidor habilitado</h1>')
    res.end()
})

server.listen(3000, () => {
    console.log('Ejecutando el servidor')
})