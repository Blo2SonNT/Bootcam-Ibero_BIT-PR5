import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-gestion-productos-formulario',
    templateUrl: './gestion-productos-formulario.component.html',
    styleUrls: ['./gestion-productos-formulario.component.css']
})
export class GestionProductosFormularioComponent {

    clasesErrorDiv:string = "text-danger fw-bold"
    productoForm: FormGroup
    regexUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    constructor(private fb: FormBuilder){
        this.productoForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(5)]],
            precio: ['', [Validators.required, Validators.min(1000)]],
            enlace_img: ['', [Validators.required, Validators.pattern(this.regexUrl)]],
            categoria: ['', [Validators.required]],
            cantidad_inventario: ['', [Validators.required]],
            en_venta: [''],
            pago_proveedor: ['', [Validators.requiredTrue]]
        })
    }

    registrarEditarProducto(){
        console.log(this.productoForm)
    }

}
