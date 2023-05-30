import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Mascotas } from "../models/mascotas";
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class RegistroMascotaService {

    urlApi = 'http://localhost:4000/api'

    constructor(private http:HttpClient) {}

    getRegistrosMascotas(): Observable<any> {
        return this.http.get(this.urlApi)
    }

    postRegistroMascota(dataMascota:Mascotas): Observable<any>{
        return this.http.post(this.urlApi, dataMascota)
    }

    putRegistroMascota(id:string, dataMascota:Mascotas): Observable<any> {
        return this.http.put(`${this.urlApi}/${id}`, dataMascota)
    }

    deleteRegistroMascota(id:string): Observable<any> {
        return this.http.delete(`${this.urlApi}/${id}`)
    }

    getRegistroMascota(id:string): Observable<any> {
        return this.http.get(`${this.urlApi}/${id}`)
    }



}
