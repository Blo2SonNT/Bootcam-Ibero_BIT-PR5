require('dotenv').config({ path: 'config.env' })
const jwt = require('jsonwebtoken')

exports.verificarToken = (req, res, next) => {
    let token = req.headers.authorization
        //Bearer dsfjnOIWJFOEnpwe9uirjLKSAjdopis9ulerpweojfoisdhf
    console.log(token)
    if (!token || token.length < 2) {
        return res.status(401).json({ mensaje: 'Token no proporcionado' })
    }
    token = token.split(' ')

    jwt.verify(token[1], process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ mensaje: 'Token invalido' })
        }

        req.pepe = decoded
        next();
    })

}