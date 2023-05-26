export class Contacto {
    nombre:string
    correo:string
    asunto:string
    mensaje:string

    constructor(nombre:string, correo:string, asunto:string, mensaje:string) {
        this.nombre = nombre;
        this.correo = correo;
        this.asunto = asunto;
        this.mensaje = mensaje;
    }
}
