import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Productos';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
    selector: 'app-productos-grilla',
    templateUrl: './productos-grilla.component.html',
    styleUrls: ['./productos-grilla.component.css']
})
export class ProductosGrillaComponent implements OnInit {

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

}
