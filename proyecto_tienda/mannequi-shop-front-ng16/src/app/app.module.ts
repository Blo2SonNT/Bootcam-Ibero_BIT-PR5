import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorPagina404Component } from './components/error-pagina404/error-pagina404.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosGrillaComponent } from './components/productos-grilla/productos-grilla.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './components/admin/admin.component';
import { GestionProductosFormularioComponent } from './components/admin/gestion-productos-formulario/gestion-productos-formulario.component';
import { GestionProductosVistaComponent } from './components/admin/gestion-productos-vista/gestion-productos-vista.component';
import { LoginComponent } from './components/login/login.component';
import { ListaUsuariosComponent } from './components/admin/lista-usuarios/lista-usuarios.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ErrorPagina404Component,
        InicioComponent,
        ProductosGrillaComponent,
        SidebarComponent,
        AdminComponent,
        GestionProductosFormularioComponent,
        GestionProductosVistaComponent,
        LoginComponent,
        ListaUsuariosComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
