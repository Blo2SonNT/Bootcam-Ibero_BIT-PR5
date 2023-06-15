import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-lista-usuarios',
    templateUrl: './lista-usuarios.component.html',
    styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit{

    listaUsuarios: any[] = []

    constructor(private _usuarioService: UsuarioService, private router:Router){}

    ngOnInit(): void {
        this.obtenerUsuarios()
    }

    obtenerUsuarios(){
        this._usuarioService.getUsuarios().subscribe(data => {
            console.log(data)
            this.listaUsuarios = data
        }, err => {
            this.router.navigate(['/ingreso'])
        })
    }

}
