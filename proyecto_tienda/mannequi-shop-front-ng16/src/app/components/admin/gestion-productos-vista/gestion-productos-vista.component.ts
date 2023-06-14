import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Productos';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-gestion-productos-vista',
  templateUrl: './gestion-productos-vista.component.html',
  styleUrls: ['./gestion-productos-vista.component.css']
})
export class GestionProductosVistaComponent implements OnInit {
    listaProductos: Producto[] = []

    constructor(private _productoService: ProductoService) { }

    ngOnInit(): void {
        this.obtenerProductos()
    }

    obtenerProductos() {
        this._productoService.getProductos().subscribe(data => {
            this.listaProductos = data
        })
    }

    eliminarProducto(id: any) {
        Swal.fire({
            title: 'Esta seguro que desea eliminar este producto?',
            text: "Esta acción no se podrá deshacer",
            imageUrl: 'assets/img/michael.gif',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            backdrop: `
                rgba(15, 15, 15, 0.58)
                left top
                no-repeat
            `
        }).then((result) => {
            if (result.isConfirmed) {
                this._productoService.deleteProducto(id).subscribe(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto eliminado'
                    })
                    this.obtenerProductos()
                })
            }
        })
    }

}
