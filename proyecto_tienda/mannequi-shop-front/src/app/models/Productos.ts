//cSpell:disable
export class Producto {

    _id?: string
    nombre: string
    precio: number
    enlace_img: string
    categoria: string
    cantidad_inventario: string
    en_venta: boolean
    pago_proveedor: boolean


    constructor(nombre: string, precio: number, enlace_img: string, categoria: string, cantidad_inventario: string, en_venta: boolean, pago_proveedor: boolean) {
        this.nombre = nombre
        this.precio = precio
        this.enlace_img = enlace_img
        this.categoria = categoria
        this.cantidad_inventario = cantidad_inventario
        this.en_venta = en_venta
        this.pago_proveedor = pago_proveedor
    }
}

