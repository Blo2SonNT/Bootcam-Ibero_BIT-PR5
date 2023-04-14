function guardarNota() {
    let tituloNota = document.querySelector("#tituloNotaUsuario")
    let textoNota = document.querySelector("#notaUsuario")
    if (tituloNota.value == '') {
        disparaAlerta("Ingrese el titulo de la nota", "warning", "#ff5618", "#0caaff")
        tituloNota.classList.add("border", "border-danger")
        return
    }

    if (textoNota.value == '') {
        disparaAlerta("Ingrese el contenido de la nota", "error", "#28ff1c", "#ff00ea")
        return
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