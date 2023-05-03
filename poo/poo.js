class operacionMatetica {

    constructor(numero1, numero2) {
        this.numero1 = numero1
        this.numero2 = numero2
    }

    suma() {
        this.resultadoSuma = this.numero1 + this.numero2
        return this.resultadoSuma
    }

    resta() {
        return this.numero1 - this.numero2
    }

    division() {
        return this.numero1 / this.numero2
    }

    multiplicacion() {
        return this.numero1 * this.numero2
    }

    esParOImpar() {
        if (this.resultadoSuma) {
            if (this.resultadoSuma % 2 == 0) {
                return 'es par'
            } else {
                return 'es impar'
            }
        } else {

            return this.mensaje()
        }
    }

    mensaje() {
        return 'El metodo suma no se ha ejecutado'
    }

}


let obj_operacionOperacion = new operacionMatetica(5, 8)
console.log(obj_operacionOperacion.division())
console.log(obj_operacionOperacion.suma())
console.log(obj_operacionOperacion.resta())
console.log(obj_operacionOperacion.multiplicacion())
console.log(obj_operacionOperacion.esParOImpar())


function ejecutarOperaciones() {
    let obj_operacionOperacion2 = new operacionMatetica(75, 3)
    let divResultado = document.querySelector("#resultados")
    divResultado.innerHTML += `<h1>La division es: ${obj_operacionOperacion2.division()}</h1>`
    divResultado.innerHTML += `<h1>La resta es: ${obj_operacionOperacion2.resta()}</h1>`
    divResultado.innerHTML += `<h1>La multiplicacion es: ${obj_operacionOperacion2.multiplicacion()}</h1>`
    divResultado.innerHTML += `<h1>El numero es: ${obj_operacionOperacion2.esParOImpar()}</h1>`
}


class cubo {
    constructor(imagenTextura, atravesar) {
        this.imagenTextura = imagenTextura
        this.atravesar = atravesar
    }

    pintarCubo() {
        return this.imagenTextura
    }

    seAtraviesa() {
        return this.atravesar
    }

    rotarImagen(palabra) {
        return 'Estoy rotando el cubo...'
    }
}


class lava extends cubo {
    constructor(color, imagenTextura, atravesar) {
        super(imagenTextura, atravesar)
        this.color = color
    }

    bordeLava() {
        return this.color
    }

    rotarImagen() {
        return super.rotarImagen() + '90 grados porque la lava quema'
    }

}

let obj_cubo = new cubo('https://us.123rf.com/450wm/lovender/lovender1705/lovender170500180/77995610-patr%C3%B3n-del-arte-del-pixel-seamless-vector-p%C3%ADxel-de-fondo-con-amatista-lavanda-ciruela-p%C3%BArpura.jpg', false)

document.querySelector("#texturaSeleccionada").src = obj_cubo.pintarCubo()
if (obj_cubo.seAtraviesa() == true) {
    document.querySelector("#texturaSeleccionada").classList.add('hoverTextura')
}
console.log(obj_cubo.rotarImagen())

let obj_lava = new lava('#f7941b', 'https://i.pinimg.com/474x/8d/53/a4/8d53a44e6e34cd63c97228c8c93b9795--minecraft-stuff--bit.jpg', true)

document.querySelector("#lavaMinecraft").src = obj_lava.pintarCubo()
if (obj_lava.seAtraviesa() == true) {
    document.querySelector("#lavaMinecraft").classList.add('hoverTextura')
    document.querySelector("#lavaMinecraft").setAttribute("style", "border: 50px solid " + obj_lava.bordeLava())
}
console.log(obj_lava.rotarImagen())

let sonido = new Audio('audio/cancion.mp3')

function reproducirSonido() {
    sonido.play()
    document.querySelector("#btnReproducir").removeAttribute("onclick")
    document.querySelector("#btnReproducir").setAttribute("onclick", "pausarAudio()")
}

function pausarAudio() {
    sonido.pause()
    document.querySelector("#btnReproducir").removeAttribute("onclick")
    document.querySelector("#btnReproducir").setAttribute("onclick", "reproducirSonido()")
}


class pepe {
    contructor(dataUsuario) {
        this.nombre = dataUsuario.nombre
        this.apellido = dataUsuario.apellido
    }
}

let obj_pepe = new pepe({ nombre: "fulano", edad: 85, apellido: "perez" })

/**
 * 
 * ENCAPSULAMIENTO
 * 
 * 
 */


function triangulo(cateto1, cateto2) {
    function hipotenusa(C1, C2) {
        let catetos = Math.pow(C1, 2) + Math.pow(C2, 2)
        let hipotenusaT = Math.sqrt(catetos)
        return hipotenusaT
    }

    this.teoremaPitagoras = hipotenusa(cateto1, cateto2)
}

let x = new triangulo(3, 4)
console.log(x.teoremaPitagoras)

// hipotenusa()  //! ERROR!!!


function bancoPichincha(valorARetirar) {
    function actualizarCuenta(valorUsuario) {
        return `Estimado usuario pudiente, usted retiro ${valorUsuario} en un cajero electrónico`
    }

    this.notificacionUsuario = actualizarCuenta(valorARetirar)

    let saldoCuenta = 100000 - valorARetirar
    return saldoCuenta

}

let banco = new bancoPichincha(50000)
console.log(banco.notificacionUsuario)

console.log(bancoPichincha(50000))