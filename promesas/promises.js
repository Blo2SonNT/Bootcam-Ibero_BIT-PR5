const prom = new Promise((resolve, reject) => {

    let x = true

    if (x) {
        return resolve({ res: "resuelto" })
    } else {
        return reject("reject")
    }
})

prom
    .then((data) => {
        console.log(data)
    }) //resuelta
    .catch((error) => {
        console.log(error)
    }) //reject


// El estudiante debera generar una promesa que reciba un numero N
// si el numero es par este debera resolver la promesa y si este es impar
// debera rechzar la promesa