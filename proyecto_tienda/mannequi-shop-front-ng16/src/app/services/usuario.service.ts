import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    urlApi: string = 'http://localhost:4002/api';
    tokenUsuario:string|null = ''

    constructor(private http:HttpClient, private router:Router) {
        this.tokenUsuario = (sessionStorage.getItem('token') !== null) ? sessionStorage.getItem('token') : null;
    }

    postIngresoUsuario(dataLogin:object): Observable<any>{
        return this.http.post(`${this.urlApi}/ingreso`, dataLogin)
    }

    estaLogueado(){
        return (sessionStorage.getItem("token")) ? true : false;
        /*
        if(sessionStorage.getItem("token")){
            return true
        }else{
            return false
        }
        */
    }

    getUsuarios(): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenUsuario}`)
        return this.http.get(`${this.urlApi}/usuarios`, {headers:headers})
    }

    cerrarSesion(){
        sessionStorage.removeItem('token')
        this.router.navigate(['/ingreso'])
    }
}
