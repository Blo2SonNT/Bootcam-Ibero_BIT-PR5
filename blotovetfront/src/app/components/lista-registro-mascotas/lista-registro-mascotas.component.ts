import { Component, OnInit } from '@angular/core';
import { RegistroMascotaService } from "src/app/service/registro-mascota.service";
import { Mascotas } from "src/app/models/mascotas";
import Swal from 'sweetalert2'

@Component({
    selector: 'app-lista-registro-mascotas',
    templateUrl: './lista-registro-mascotas.component.html',
    styleUrls: ['./lista-registro-mascotas.component.css']
})
export class ListaRegistroMascotasComponent implements OnInit {

    listaMascotas: Mascotas[] = [];


    constructor(private mascotaServicio: RegistroMascotaService) { }

    ngOnInit(): void {
        this.obtenerRegistrosDeMascotas()
    }

    obtenerRegistrosDeMascotas() {
        this.mascotaServicio.getRegistrosMascotas().subscribe(data => {
            this.listaMascotas = data
        })
    }

    eliminarMascota(id: any) {
        Swal.fire({
            title: 'Esta seguro que desea eliminar el registro de la mascota',
            text: "Este proceso no podrá deshacerse",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#187d16',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                this.mascotaServicio.deleteRegistroMascota(id).subscribe(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Registro eliminado',
                    })
                    this.obtenerRegistrosDeMascotas()
                }, error => {
                    console.log(error)
                })
            }
        })
    }


}
