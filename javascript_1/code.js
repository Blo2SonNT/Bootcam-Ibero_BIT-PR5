//condicionales
// let llovio = true

// if (llovio == true) {
//     console.log("Si llovio")
// } else {
//     console.error("No llovio")
// }

function verificarUsuario() {
    // debugger
    let usuarioValido = "PepeRompeJetas"
    let passCorrecto = "contraseña123"

    let inputUsuario = document.querySelector("#inputUser")
    let inputPassword = document.getElementById("inputPass")

    if (inputUsuario.value == usuarioValido) {
        if (inputPassword.value == passCorrecto) {
            alert("Bienvenido!!! 😬")
        } else {
            alert("Sus credenciales son incorrectas 🤡")
        }
    } else {
        alert("Sus credenciales son incorrectas 🤡")
    }
}

// CICLOS
// FOR
/*
for (let x = 1; x <= 100; x++) {
    console.log(x)
}


//WHILE
let i = 1
while (i <= 20) {
    console.error(i)
    i++
}


//DO WHILE
let t = 1
do {
    console.warn(t)
    t++
} while (t <= 30);

*/
function generarLineaCuadricula() {
    let numeroUsuario = document.querySelector("#numeroRecuadros")
    let recuadrosDiv = document.querySelector("#recuadros")

    for (let cuadro = 1; cuadro <= numeroUsuario.value; cuadro++) {
        console.log(cuadro)
        if (cuadro % 2 >= 1) {
            recuadrosDiv.innerHTML += `<div class="cuadro negro">${cuadro}</div>`
        } else {
            recuadrosDiv.innerHTML += `<div class="cuadro blanco">${cuadro}</div>`
        }
    }
}