import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'app-registro-mascota',
    templateUrl: './registro-mascota.component.html',
    styleUrls: ['./registro-mascota.component.css']
})
export class RegistroMascotaComponent {
    mascotasForm:FormGroup
    regexString = /^[a-zA-Z]+$/
    regexNumero = /^[0-9]+$/
    regexUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    imagen_x_defecto = 'https://thumbs.dreamstime.com/z/ilustraci%C3%B3n-del-logotipo-dise%C3%B1o-de-mascota-perfil-perro-en-fondo-blanco-el-161136226.jpg'

    constructor(private fb:FormBuilder){
        this.mascotasForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.regexString)] ],
            edad: ['', [Validators.required, Validators.pattern(this.regexNumero), Validators.min(1)]],
            propietario: ['', [Validators.required, Validators.pattern(this.regexString)]],
            doc_propietario: ['', [Validators.required, Validators.pattern(this.regexNumero), Validators.minLength(6)]],
            url_imagen: [this.imagen_x_defecto, [Validators.required, Validators.pattern(this.regexUrl)]]
        })
    }


    actualizar_registrar_mascota(){
        console.log(this.mascotasForm)
    }

}

