console.log("Hola asdadasdsdadas mundo con TS pepe")

let texto: string = "Tipo de dato de texto"
let numero: number = 4
let booleano: boolean = false

let variable : any = true
variable = 2

let arreglo : any[] = [true, "pepe", 8]

let arregloTexto : string[] = ["hola", "mundo", "con", "ts"]
let arregloNumeros: number[] = [2,5,7]
let arregloBoleano: boolean[] = [false, true, false, false, false]

let arregloEstructurado : [number, number, string][] = [[5, 4, ""]] 

function sumarNumero(a: number, b: number): number {
    return a + b
}

// let varVoid: void = undefined
let varnull: null = null
// let varUndefined: undefined = undefined

console.log(typeof(varnull))

console.log(sumarNumero(4, 5))


function saludarusuario(nombre: any = "Pepe"): string | number{
    return ""
}


function titarseDelPuente(persona:string, puente?: string): string | number{
    return "me tire del puente 🙃🙃"
}


interface Imiguel{
    cantidadEstudiantes: number,
    tieneHambre?: boolean
}

function prueba(variable:Imiguel):any{
    console.log(variable.cantidadEstudiantes)
}

prueba({cantidadEstudiantes:17})


class Usuario{
    public nombre: string
    protected correo: string
    private edad: number

    constructor(nombre: string, correo: string, edad:number){
        this.nombre = nombre
        this.correo = correo
        this.edad = edad
    }

    saludando(){
        return `Buenas noches ${this.nombre}`
    }

    mostrarEdad(){
        return `La edad del usuario es: ${this.edad}`
    }

    mostarCorreo(){
        return `El correo del usuario es: ${this.correo}`
    }
}

let clUsuario = new Usuario("Miguelito", "miguel@correo.com", 44)
console.log(clUsuario.saludando())

class Premio extends Usuario{
    gano:boolean

    constructor(nombre: string, correo: string, edad:number, gano:boolean){
        super(nombre, correo, edad)
        this.gano = gano
    }

    mostrarEdad() {
        return super.mostrarEdad()
    }
}

let clPremio = new Premio("Miguelito", "miguel@correo.com", 44, true)
console.log(clPremio.mostrarEdad())