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

    postRegistroMascota(dataMascota:Mascotas): Observable<any>{
        return this.http.post(this.urlApi, dataMascota)
    }
}
