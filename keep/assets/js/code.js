mostrarNotas()

function guardarNota() {
    let tituloNota = document.querySelector("#tituloNotaUsuario")
    let textoNota = document.querySelector("#notaUsuario")
    if (tituloNota.value == '' || textoNota.value == '') {
        disparaAlerta("Por favor diligencie todos los campos del formulario", "warning", "#ff5618", "#000")
        tituloNota.classList.add("border", "border-danger")
        textoNota.classList.add("border", "border-danger")
    } else {
        localStorage.setItem("titulo", tituloNota.value)
        localStorage.setItem("nota", textoNota.value)
        tituloNota.classList.remove("border", "border-danger")
        textoNota.classList.remove("border", "border-danger")
        mostrarNotas()
    }
}

function mostrarNotas() {
    let divNotas = document.querySelector("#notasGuardadas")

    let tituloNota = localStorage.getItem("titulo")
    let nota = localStorage.getItem("nota")

    divNotas.innerHTML = `
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${tituloNota}</h5>
                    <p class="card-text">${nota}</p>
                </div>
            </div>
        </div>
    `
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