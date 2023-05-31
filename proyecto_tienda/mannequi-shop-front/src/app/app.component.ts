import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'mannequi-shop-front';
    year = "2023"
    estiloUsuario:any = 'claro'

    constructor(){}

    ngOnInit(): void {
        this.estiloUsuario = localStorage.getItem('estiloPagina')
        if(this.estiloUsuario == null){
            localStorage.setItem('estiloPagina', 'bg-white')
            this.estiloUsuario = 'bg-white temaUsuario'
        }
    }

    cambiarTemaUsuario(){
        this.estiloUsuario = localStorage.getItem('estiloPagina')
        if(this.estiloUsuario == 'bg-dark temaUsuario'){
            localStorage.setItem('estiloPagina', 'bg-white')
        }else{
            localStorage.setItem('estiloPagina', 'bg-dark temaUsuario')
        }
    }

}
