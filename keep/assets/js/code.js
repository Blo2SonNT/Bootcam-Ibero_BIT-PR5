mostrarNotas()

function guardarNota() {
    let tituloNota = document.querySelector("#tituloNotaUsuario")
    let textoNota = document.querySelector("#notaUsuario")
    if (tituloNota.value == '' || textoNota.value == '') {
        disparaAlerta("Por favor diligencie todos los campos del formulario", "warning", "#ff5618", "#000")
        tituloNota.classList.add("border", "border-danger")
        textoNota.classList.add("border", "border-danger")
    } else {
        let cantidadNotasActuales = 1
        if (localStorage.getItem("cantidad") == null) {
            localStorage.setItem("cantidad", cantidadNotasActuales)
        } else {
            cantidadNotasActuales = localStorage.getItem("cantidad")
            cantidadNotasActuales = parseInt(cantidadNotasActuales) + 1
            localStorage.setItem("cantidad", cantidadNotasActuales)
        }

        let notasUsuario
        if (localStorage.getItem("keep") == null) {
            notasUsuario = []
        } else {
            notasUsuario = JSON.parse(localStorage.getItem("keep"))
        }

        notasUsuario.push({
            id: cantidadNotasActuales,
            titulo: tituloNota.value,
            nota: textoNota.value
        })

        //! let notasEjemplo = (localStorage.getItem("keep") == null) ? [] : JSON.parse(localStorage.getItem("keep"))

        localStorage.setItem("keep", JSON.stringify(notasUsuario))
        tituloNota.classList.remove("border", "border-danger")
        textoNota.classList.remove("border", "border-danger")
        tituloNota.value = ''
        textoNota.value = ''
        mostrarNotas()
    }
}

function mostrarNotas() {
    let cantidadNotasActuales = localStorage.getItem("cantidad")
    let divNotas = document.querySelector("#notasGuardadas")
    if (cantidadNotasActuales == null) {
        divNotas.innerHTML = "<h1>No hay ninguna nota</h1>"
    } else {
        divNotas.innerHTML = ''
        let notasUsuarioPepe = JSON.parse(localStorage.getItem("keep"))
        notasUsuarioPepe.forEach((notica, posicionNota) => {
            divNotas.innerHTML += `
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${notica.titulo}</h5>
                                <p class="card-text">${notica.nota}</p>
                                <div class="d-flex justify-content-center align-items-center">
                                    <button onclick="editarNota(${notica.id})" class="btn btn-warning mx-2">Editar</button>
                                    <button onclick="eliminarNota(${notica.id})" class="btn btn-danger mx-2">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `
        });
    }
}

function eliminarNota(idNota) {
    let keepUsuario = JSON.parse(localStorage.getItem("keep"))
    keepUsuario.forEach((notaUsuario, posicion) => {
        if (notaUsuario.id == idNota) {
            keepUsuario.splice(posicion, 1)
        }
    });
    localStorage.setItem("keep", JSON.stringify(keepUsuario))
    mostrarNotas()
}


function editarNota(idNota) {
    let tituloNota = document.querySelector("#tituloNotaUsuario")
    let textoNota = document.querySelector("#notaUsuario")

    let keepsUsuario = JSON.parse(localStorage.getItem("keep"))
    console.log('file: code.js:85 ->  keepsUsuario:', keepsUsuario)

    keepsUsuario.forEach((notaUsuario) => {
        if (notaUsuario.id == idNota) {
            tituloNota.value = notaUsuario.titulo
            textoNota.value = notaUsuario.nota
        }
    });

    document.querySelector("#btnFormulario").removeAttribute("onclick")
    document.querySelector("#btnFormulario").innerHTML = "Editar nota"
    document.querySelector("#btnFormulario").setAttribute("onclick", `guardarCambiosNota(${idNota})`)
    console.log(idNota)
}

function guardarCambiosNota(idNotaAEditar) {
    let tituloNota = document.querySelector("#tituloNotaUsuario")
    let textoNota = document.querySelector("#notaUsuario")
    if (tituloNota.value != "" && textoNota.value != "") {
        let keepUsuario = JSON.parse(localStorage.getItem("keep"))
        keepUsuario.forEach((notaUsuario, posicionNota) => {
            if (notaUsuario.id == idNotaAEditar) {
                keepUsuario[posicionNota].titulo = tituloNota.value
                keepUsuario[posicionNota].nota = textoNota.value
            }
        })
        localStorage.setItem("keep", JSON.stringify(keepUsuario))
        mostrarNotas()
        document.querySelector("#btnFormulario").removeAttribute("onclick")
        document.querySelector("#btnFormulario").innerHTML = "Guardar nota"
        document.querySelector("#btnFormulario").setAttribute("onclick", `guardarNota()`)
        tituloNota.value = ""
        textoNota.value = ""
    } else {
        disparaAlerta("Por favor diligencie todos los campos del formulario", "warning", "#ff5618", "#000")
        tituloNota.classList.add("border", "border-danger")
        textoNota.classList.add("border", "border-danger")
    }
}

function disparaAlerta(mensajeDeLaAlerta, icono, colorIcono, colorTexto) {
    Swal.fire({
        icon: icono,
        title: mensajeDeLaAlerta,
        iconColor: colorIcono,
        color: colorTexto
    })
    console.error(mensajeDeLaAlerta)
}


if (pepe == "pepe") {

} else if (pepe = "maria") {

} else {

}