import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { RegistroMascotaComponent } from './components/registro-mascota/registro-mascota.component';
import { ListaRegistroMascotasComponent } from './components/lista-registro-mascotas/lista-registro-mascotas.component';

const routes: Routes = [
    { path: '', component:InicioComponent},
    { path: 'contacto', component:ContactoComponent},
    { path: 'ingresoSistema', component:IngresoComponent},
    { path: 'registro-mascota', component:RegistroMascotaComponent },
    { path: 'lista-registro-mascotas', component:ListaRegistroMascotasComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
