import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

    contactoForm: FormGroup;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    regexAlfaNumerico = /^[a-zA-Z0-9\s]+$/

    constructor(private fb: FormBuilder){
        this.contactoForm = this.fb.group({
            nombre:['', [Validators.required, Validators.minLength(3)]],
            correo:['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            asunto:['', [Validators.pattern(this.regexAlfaNumerico)]],
            mensaje:['']
        });
    }

    crear_data_contacto(){
        console.log(this.contactoForm)
    }
}
