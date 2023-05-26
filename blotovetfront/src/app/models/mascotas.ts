export class Mascotas{
    _id?: string
    nombre:string
    edad:string
    propietario:string
    doc_propietario:string
    url_imagen:string

    constructor(nombre: string, edad: string, propietario: string, doc_propietario: string, url_imagen: string){
        this.nombre = nombre
        this.edad = edad
        this.propietario = propietario
        this.doc_propietario = doc_propietario
        this.url_imagen = url_imagen
    }

}
