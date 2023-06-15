import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    urlApi: string = 'http://localhost:4002/api';

    constructor(private http:HttpClient) { }

    postIngresoUsuario(dataLogin:object): Observable<any>{
        return this.http.post(`${this.urlApi}/ingreso`, dataLogin)
    }
}
