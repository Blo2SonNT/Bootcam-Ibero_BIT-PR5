import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from "../models/Productos";

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    urlApi: string = 'http://localhost:4002/api';

    constructor(private http:HttpClient) { }


    getProductos(): Observable<any>{
        return this.http.get(`${this.urlApi}/productos`)
    }


    putProducto(id:string, dataProducto:Producto): Observable<any>{
        return this.http.put(`${this.urlApi}/productos/${id}`, dataProducto)
    }


    deleteProducto(id:string): Observable<any>{
        return this.http.delete(`${this.urlApi}/productos/${id}`)
    }


    postProducto(dataProducto:Producto): Observable<any>{
        return this.http.post(`${this.urlApi}/productos`, dataProducto)
    }


    getProducto(id:string): Observable<any>{
        return this.http.get(`${this.urlApi}/producto/${id}`)
    }




}
