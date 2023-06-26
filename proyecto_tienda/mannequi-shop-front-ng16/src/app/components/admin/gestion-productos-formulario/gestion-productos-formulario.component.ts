import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/Productos';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-gestion-productos-formulario',
    templateUrl: './gestion-productos-formulario.component.html',
    styleUrls: ['./gestion-productos-formulario.component.css']
})
export class GestionProductosFormularioComponent implements OnInit {
    clasesErrorDiv: string = "text-danger fw-bold"
    productoForm: FormGroup
    regexUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    titulo_formulario:string = 'Registro de nuevo producto'
    id: string | null
    textoBoton:string = 'Crear producto'

    constructor(private fb: FormBuilder, private _productoService: ProductoService, private router:Router, private idRoute: ActivatedRoute) {
        this.productoForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(5)]],
            precio: ['', [Validators.required, Validators.min(1000)]],
            enlace_img: ['', [Validators.required, Validators.pattern(this.regexUrl)]],
            categoria: ['', [Validators.required]],
            cantidad_inventario: ['', [Validators.required]],
            en_venta: [''],
            pago_proveedor: ['', [Validators.requiredTrue]]
        })

        this.id = this.idRoute.snapshot.paramMap.get('id')


    }

    ngOnInit(): void {
        this.accionSolicitada()
    }

    registrarEditarProducto() {
        if(this.id === null){
            console.log(this.productoForm)
            // let PRODUCTO : Producto = {
            //     nombre: this.productoForm.get('nombre')?.value,
            //     precio: this.productoForm.get('precio')?.value,
            //     enlace_img: this.productoForm.get('enlace_img')?.value,
            //     categoria: this.productoForm.get('categoria')?.value,
            //     cantidad_inventario: this.productoForm.get('cantidad_inventario')?.value,
            //     en_venta: this.productoForm.get('en_venta')?.value,
            //     pago_proveedor: this.productoForm.get('pago_proveedor')?.value
            // }
            // console.log(PRODUCTO)
            this._productoService.postProducto(this.productoForm.value).subscribe(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto registrado',
                    confirmButtonColor: "#52874a"
                })
            })
        }else{
            this._productoService.putProducto(this.id, this.productoForm.value).subscribe(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto actualizado',
                    confirmButtonColor: "#52874a"
                })
            })
        }
        this.router.navigate(['/admin/gestion-productos'])
    }

    accionSolicitada(){
        if(this.id !== null){
            this.titulo_formulario = "Modificar producto"
            this.textoBoton = "Actualizar producto"
            this._productoService.getProducto(this.id).subscribe(data => {
                this.productoForm.setValue({
                    nombre: data.nombre,
                    precio: data.precio,
                    enlace_img: data.enlace_img,
                    categoria: data.categoria,
                    cantidad_inventario: data.cantidad_inventario,
                    en_venta: data.en_venta,
                    pago_proveedor: data.pago_proveedor,
                })
            })
        }
    }
}
