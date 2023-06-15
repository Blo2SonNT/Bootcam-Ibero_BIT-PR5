import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'mannequi-shop-front-ng16';
    year = "2023"
    estiloUsuario: any = 'claro'

    constructor() { }

    ngOnInit(): void {
        this.estiloUsuario = localStorage.getItem('estiloPagina')
        if (this.estiloUsuario == null) {
            localStorage.setItem('estiloPagina', 'bg-white')
            this.estiloUsuario = 'bg-white'
        }
    }

    cambiarTemaUsuario() {
        this.estiloUsuario = localStorage.getItem('estiloPagina')
        if (this.estiloUsuario == 'bg-dark temaUsuario') {
            localStorage.setItem('estiloPagina', 'bg-white')
        } else {
            localStorage.setItem('estiloPagina', 'bg-dark temaUsuario')
        }
    }
}
