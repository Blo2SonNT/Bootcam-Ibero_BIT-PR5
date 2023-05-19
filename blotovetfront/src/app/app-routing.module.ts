import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';

const routes: Routes = [
    { path: '', component:InicioComponent},
    { path: 'contacto', component:ContactoComponent},
    { path: 'ingresoSistema', component:IngresoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
