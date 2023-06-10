import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosGrillaComponent } from './components/productos-grilla/productos-grilla.component';
import { ErrorPagina404Component } from './components/error-pagina404/error-pagina404.component';
import { GestionProductosFormularioComponent } from './components/admin/gestion-productos-formulario/gestion-productos-formulario.component';
import { GestionProductosVistaComponent } from './components/admin/gestion-productos-vista/gestion-productos-vista.component';

const routes: Routes = [
    { path:'' , component:InicioComponent},
    { path:'productos', component:ProductosGrillaComponent },
    { path:'404-pagina', component:ErrorPagina404Component },
    { path:'admin/formulario-productos', component: GestionProductosFormularioComponent},
    { path:'admin/editar-producto/:id', component: GestionProductosFormularioComponent},
    { path:'admin/gestion-productos', component:GestionProductosVistaComponent },
    { path:'**', redirectTo:'404-pagina', pathMatch:'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
